# Vortex — Enhanced Static Website

Mobile-first, GitHub Pages-ready static site for the Vortex project. This revision adds smoother motion, scroll progress, active navigation, pointer glow/tilt on desktop, animated glass highlights, staggered reveals, better mobile navigation and accessibility-aware reduced-motion behavior.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive liquid-glass neon UI and motion system
- `app.js` — navigation, scroll effects, reveals, active section state, article dialog and asset checks
- `assets/` — image assets used by the site

## Important: GitHub Pages image setup

The image paths are deliberately relative, for example `./assets/vortex-icon.png`. Keep the `assets` folder **next to** `index.html` in the repository root:

```
repository/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    ├── vortex-icon.png
    ├── roblox-community.jpg
    ├── roblox-history.jpg
    └── roblox-experiences.jpg
```

GitHub is case-sensitive on Pages. Do not rename `assets`, and do not change the image file names unless you also change the references in `index.html`.

When uploading from a phone, upload the **contents of this folder**, not a ZIP inside the repository. `index.html` must be at the repository root.

## GitHub Pages

No build step is required. Enable GitHub Pages for the repository's `main` branch and root (`/(root)`).

## Download button

The Android download control is intentionally disabled and does not contain a URL. Replace it only when the final Vortex APK destination is known.

## Motion

The site uses IntersectionObserver reveals, smooth in-page scrolling, a scroll-progress indicator, subtle pointer effects on capable desktops, staggered cards and lightweight ambient motion. `prefers-reduced-motion: reduce` disables the motion-heavy effects.

## Knowledge base

The Roblox knowledge articles are original summaries with links to external references. Vortex is presented as a third-party project and not as an official Roblox service.
