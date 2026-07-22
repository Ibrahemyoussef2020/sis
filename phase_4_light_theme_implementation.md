Phase 4 Plan
Step 1: AboutHero.vue — Theme it
Currently pure dark mode (bg-[#0b1326], text-white, border-white/20). Add light theme: section bg uses bg-sis-panel, text uses text-sis-text, overlay adapts. Keep the hero image as-is, make the overlay/gradient theme-aware.
Step 2: AboutMissionVision.vue — Theme it
Hardcoded dark gradients (linear-gradient(180deg, #0a1120, #070d1a)), text-[#eaf1fb], text-[#aebfd8]. Replace with CSS variables: var(--bg-section-1), text-sis-text dark:text-[#eaf1fb], text-sis-muted dark:text-[#aebfd8].
Step 3: AboutDomains.vue — Theme it
Dark gradient bg, text-white, text-[#a1a1aa]. Add light mode: use bg-sis-panel or section variable, text-sis-text, text-sis-muted. The star-field canvas should be hidden or toned down in light mode.
Step 4: AboutITOT.vue — Theme it
Same pattern as AboutMissionVision — dark gradients, light text. Apply section bg variables and theme-aware text classes.
Step 5: AboutCoreValues.vue — Theme it
background: #080d1a, text-white. Apply section bg variable, theme-aware text. Spotlight glow stays subtle.
Step 6: ContactSection.vue — Theme it
Same pattern — dark gradient bg, light text. Apply section bg variables, theme-aware text.
Step 7: ToastNotification.vue — Theme it
Currently white bg, light text. Add dark: variants for dark mode.
Step 8: Replace spinning loaders with skeleton loaders
- LazyLoadSection.vue line 5-7: replace the spinning circle with the .skeleton CSS class
- Check other sections for spinning loaders → replace with skeleton
Phase 5 Plan
Step 9: Scrollbar colors
Update index.css scrollbar styles to use theme-aware CSS variables (text-sis-accent etc) instead of hardcoded #3b82f6.
Step 10: Skeleton loader dark mode
Add :root.dark variant for the .skeleton class in index.css so skeleton loaders work in dark mode.
Step 11: Edge cases
Any remaining hardcoded colors or theme issues across pages.