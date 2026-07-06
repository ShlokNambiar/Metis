# Metis website

Self-contained static site. Each HTML page has its JavaScript inlined, so there are no separate app `.js` files a browser can serve stale from cache. Open `index.html`.

## Pages
index · services · services-detailed · case-studies · about · contact

## Brand
See `brand/` for logo lockups, the mark, and a short brand guide. `favicon.svg` is included.

## Hosting
Push to any static host (GitHub Pages, Netlify, Vercel). `.nojekyll` is included for GitHub Pages; `index.html` is the home page.

## Notes
Fonts, the hero video, and client imagery load from CDNs (needs internet). The contact form is front-end only.
