# WZML-X docs site

Static site, no build needed to view. Open `index.html`.

- `index.html` — chooser (story / reference)
- `v3/` — the story (hand-written; `assets/story.js` drives the scenes)
- `v2/` — the reference (`index.html` is **generated**; edit `build/` or `wzmlx-manual.html`, then run `python build/build_v2.py`)
- `shared/` — used by both: `tgsim.js` (Telegram phone), `data/*.js` (settings screens), `w-icon.svg`
- `wzmlx-manual.html` — content source for the reference

Hosting: GitHub Pages (branch → `/docs`) or Cloudflare Pages (output dir `docs`). Nothing to build.
