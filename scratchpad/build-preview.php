<?php
/* Build the SIS design preview with the site's real images embedded as data URIs. */
$img = 'D:/sis-site/src/images';
function uri($path){
    $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
    $mime = ['webp'=>'image/webp','png'=>'image/png','jpg'=>'image/jpeg','jpeg'=>'image/jpeg','svg'=>'image/svg+xml'][$ext] ?? 'image/*';
    return 'data:' . $mime . ';base64,' . base64_encode(file_get_contents($path));
}
$I = [
    'hero'    => uri("$img/controlling.webp"),
    'feature' => uri("$img/about-image.webp"),
    'c1'      => uri("$img/cards/g1-final.webp"),
    'c2'      => uri("$img/cards/g2.webp"),
    'c3'      => uri("$img/cards/g3.webp"),
    'logoWhite' => uri("$img/SIS-Logo-white.webp"),
];
$logos = [
    'Siemens'  => uri("$img/partners/Siemens.webp"),
    'Rockwell' => uri("$img/partners/Rockwell_Automation_Logo.webp"),
    'ABB'      => uri("$img/partners/ABB.webp"),
    'Huawei'   => uri("$img/partners/Huawei.webp"),
    'Schneider'=> uri("$img/partners/schnider.webp"),
    'AVEVA'    => uri("$img/partners/aveva.webp"),
];
$logoHtml = '';
foreach ($logos as $name=>$u) $logoHtml .= "<div class=\"logo\"><img src=\"$u\" alt=\"$name\"></div>\n";

$tpl = file_get_contents('D:/sis-cms/preview-template.html');
$out = strtr($tpl, [
    '{{HERO}}'=>$I['hero'], '{{FEATURE}}'=>$I['feature'],
    '{{C1}}'=>$I['c1'], '{{C2}}'=>$I['c2'], '{{C3}}'=>$I['c3'],
    '{{LOGO_WHITE}}'=>$I['logoWhite'], '{{LOGOS}}'=>$logoHtml,
]);
$dest = 'C:/Users/SALAMD~1/AppData/Local/Temp/claude/D--Flash-old-site-whm/29a10e28-4f41-4e55-9948-13b3e14eeb84/scratchpad/sis-design-preview.html';
file_put_contents($dest, $out);
echo "written " . round(strlen($out)/1024) . "KB\n";
