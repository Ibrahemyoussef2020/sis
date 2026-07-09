---
name: theme-factory
description: Toolkit for styling artifacts with curated professional font and color themes
---

# Theme Factory

## Available Themes

1. **Ocean Depths** - Professional and calming maritime theme
2. **Sunset Boulevard** - Warm and vibrant sunset colors
3. **Forest Canopy** - Natural and grounded earth tones
4. **Modern Minimalist** - Clean and contemporary grayscale
5. **Golden Hour** - Rich and warm autumnal palette
6. **Arctic Frost** - Cool and crisp winter-inspired theme
7. **Desert Rose** - Soft and sophisticated dusty tones
8. **Tech Innovation** - Bold and modern tech aesthetic
9. **Botanical Garden** - Fresh and organic garden colors
10. **Midnight Galaxy** - Dramatic and cosmic deep tones

## How to Apply

1. Choose a theme from the list above
2. Apply its colors and fonts consistently throughout the UI
3. Ensure proper contrast and readability
4. Maintain the theme's visual identity across all components

## Creating Custom Themes

When none of the existing themes work, create a custom theme:
- Give it a descriptive name
- Define 4-6 hex color palette
- Choose complementary font pairings (display + body)
- Apply consistently across the artifact

## Theme Spec Format

```yaml
name: Theme Name
colors:
  primary: "#hex"
  secondary: "#hex"
  accent: "#hex"
  background: "#hex"
  surface: "#hex"
  text: "#hex"
  muted: "#hex"
fonts:
  display: "Font Name"
  body: "Font Name"
  utility: "Font Name"
```
