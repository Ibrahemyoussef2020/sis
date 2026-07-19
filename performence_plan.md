# Performance & Code Quality Plan

## Phase 1 — Performance (Critical)

### 1.1 Optimize huge images
Convert the 6 worst offenders from JPEG/PNG to WebP at reasonable dimensions:

| File | Current Size | Target |
|---|---|---|
| `src/images/factory.jpg` | 29.5 MB | ~300 KB WebP |
| `src/images/robotic-arms.jpg` | 15.9 MB | Delete (unused) |
| `src/images/controlling-2.jpg` | 5.9 MB | ~200 KB WebP |
| `src/images/controlling.png` | 1.9 MB | ~200 KB WebP |
| `src/images/cards/g3.jpg` | 2.4 MB | ~200 KB WebP |
| `src/images/cards/g2.jpg` | 1.9 MB | ~200 KB WebP |

Also convert secondary images (g1-final, slider-1-1, about-hero, about-image) to WebP for consistency.

**Approach:** One-time Node.js script using `sharp` library. Script saved as `scripts/compress-images.js` for reuse when adding new images.

### 1.2 Lazy-load hero slider images
Only load the first background image on initial render. Load remaining hero images after page paint to avoid 37MB hitting at page load.

### 1.3 Delete dead assets
`robotic-arms.jpg` (15.9MB), `home-intro.png` (1.6MB), `about-explain.png` (355KB) — zero references in source code.

### 1.4 Videos — keep as-is
`sis-showcase.mp4` (3.3MB) + `increased-numbers.mp4` (3.7MB) are already reasonable. Add lazy loading to delay their load until scroll.

---

## Phase 2 — Functional Bugs

### 2.1 Fix `padding-top: some courses`
`HeroSection.vue:5` has `padding-top: some courses` — invalid CSS. Replace with valid value.

### 2.2 Add contact form handler
`ContactSection.vue` form has `@submit.prevent` with no handler. Add a `ToastNotification` component that shows "Message sent successfully" on submit.

### 2.3 Remove artificial 600ms delay
`src/stores/useSiteStore.js:33` — remove `await new Promise(resolve => setTimeout(resolve, 600))`. Data is local, no reason to delay.

### 2.4 Remove redundant `loadAll()` calls from pages
App.vue already calls `loadAll()` with a `loaded` guard. The 11 page-level `onMounted` calls are dead code.

---

## Phase 3 — Code Quality & Repo Hygiene

### 3.1 Clean `node_modules` from git
Already in `.gitignore` but committed. Run `git rm -r --cached node_modules` to untrack.

### 3.2 Fix README encoding
Re-save as UTF-8 (currently UTF-16 BOM).

---

## Phase 4 — Nice-to-Have

### 4.1 Add per-page `<title>` tags
Set `document.title` in each page's `onMounted`.

### 4.2 Split `Workflow.vue` (965 lines)
Extract the large architectural SVG (lines 25–372) into a separate component.
