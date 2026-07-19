<?php
/**
 * Recompress images under a directory (in place, same filenames):
 *  - JPEG: resize to max-width and re-encode q=80
 *  - PNG:  if no transparency and photographic -> keep PNG name but re-encode
 *          smaller (resize + palette stays truecolor, compression 9)
 * Skips files already small (< $skipBytes).
 * Usage: php compress-images.php <dir> [maxWidth] [jpegQuality]
 */
$dir = $argv[1] ?? null;
$maxW = (int)($argv[2] ?? 1920);
$q = (int)($argv[3] ?? 80);
$skipBytes = 120 * 1024; // leave files under 120KB alone
if (!$dir || !is_dir($dir)) { fwrite(STDERR, "bad dir\n"); exit(1); }

function hasAlpha($im, $w, $h) {
    // sample grid for alpha pixels
    $stepX = max(1, (int)($w / 50)); $stepY = max(1, (int)($h / 50));
    for ($y = 0; $y < $h; $y += $stepY) {
        for ($x = 0; $x < $w; $x += $stepX) {
            $a = (imagecolorat($im, $x, $y) >> 24) & 0x7F;
            if ($a > 0) return true;
        }
    }
    return false;
}

$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS));
$totBefore = 0; $totAfter = 0;
foreach ($it as $f) {
    $path = $f->getPathname();
    $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
    if (!in_array($ext, ['jpg', 'jpeg', 'png'])) continue;
    $size = filesize($path);
    if ($size < $skipBytes) { continue; }

    $info = @getimagesize($path);
    if (!$info) { echo "SKIP (unreadable): $path\n"; continue; }
    [$w, $h] = $info;

    $im = $ext === 'png' ? @imagecreatefrompng($path) : @imagecreatefromjpeg($path);
    if (!$im) { echo "SKIP (decode fail): $path\n"; continue; }

    $alpha = false;
    if ($ext === 'png') { $alpha = hasAlpha($im, $w, $h); }

    $nw = $w; $nh = $h;
    if ($w > $maxW) { $nw = $maxW; $nh = (int)round($h * $maxW / $w); }

    if ($nw !== $w) {
        $dst = imagecreatetruecolor($nw, $nh);
        if ($alpha) {
            imagealphablending($dst, false);
            imagesavealpha($dst, true);
            $transparent = imagecolorallocatealpha($dst, 0, 0, 0, 127);
            imagefill($dst, 0, 0, $transparent);
        }
        imagecopyresampled($dst, $im, 0, 0, 0, 0, $nw, $nh, $w, $h);
        imagedestroy($im);
        $im = $dst;
    }

    $tmp = $path . '.tmp';
    $ok = false;
    if ($ext === 'png') {
        if ($alpha) {
            imagesavealpha($im, true);
            $ok = imagepng($im, $tmp, 9);
        } else {
            // opaque PNG: still save as PNG (name preserved) but max compression
            $ok = imagepng($im, $tmp, 9);
        }
    } else {
        $ok = imagejpeg($im, $tmp, $q);
    }
    imagedestroy($im);

    if ($ok && filesize($tmp) < $size) {
        rename($tmp, $path);
        $new = filesize($path);
        printf("OK   %-60s %s -> %s (%.0f%%) %dx%d->%dx%d%s\n", substr($path, strlen($dir)+1), fmt($size), fmt($new), 100*$new/$size, $w, $h, $nw, $nh, $alpha ? ' [alpha]' : '');
        $totBefore += $size; $totAfter += $new;
    } else {
        @unlink($tmp);
        printf("KEEP %-60s %s (recompressed not smaller)\n", substr($path, strlen($dir)+1), fmt($size));
    }
}
printf("\nTOTAL touched: %s -> %s\n", fmt($totBefore), fmt($totAfter));
function fmt($b) { return $b > 1048576 ? sprintf('%.1fMB', $b/1048576) : sprintf('%.0fKB', $b/1024); }
