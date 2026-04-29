# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (opens index.html automatically)
npm run build        # Build to dist/
npm run preview      # Preview the production build
npm run tokens:export  # Parse tokens.css and output src/tokens/tokens.json
```

## Architecture

This is a **static brand book / design system** for Orison, rendered as a single-page app with Vite. There is no framework — it's vanilla JS + CSS.

### How the page assembles

`src/main.js` is the single entry point. It:
1. Imports all CSS (tokens → base → layout → typography → components → animations → sidebar)
2. Imports each section as raw HTML strings via Vite's `?raw` suffix
3. Injects the SVG sprite (`src/assets/symbol.svg`) at the top of `<body>` so `<use href="#...">` references work anywhere
4. Builds the sidebar HTML dynamically from `NAV_ITEMS` and inserts it before `#app`
5. Concatenates all section HTML strings into `#app`
6. Wires up sidebar toggle (mobile), scroll-spy via `IntersectionObserver`, scroll-reveal animations, and color-swatch clipboard copy

### Sections

13 numbered HTML partials in `src/sections/` (00–12). Each section has a root element with a matching `id` from `NAV_ITEMS` (e.g. `id="sec-symbol"`). Adding a new section means: create the HTML file, add an import + entry to `NAV_ITEMS` in `main.js`.

### Token system

All design tokens live in `src/tokens/tokens.css` as CSS custom properties on `:root`. They are the source of truth. The script `scripts/export-tokens.js` parses that file and writes `src/tokens/tokens.json` (not committed; generated on demand).

**Token naming convention:** `--{category}-{key}` — e.g. `--color-crimson`, `--space-4`, `--tracking-wide`. The export script uses the first dash-segment as the JSON category key.

### CSS layer order (imported in `main.js`)

| File | Purpose |
|---|---|
| `tokens.css` | CSS custom properties only |
| `base.css` | Reset and body defaults |
| `layout.css` | Page shell, `#app` wrapper |
| `typography.css` | Font-face or global type rules |
| `components.css` | All section-level UI classes |
| `animations.css` | `@keyframes` + `.in-view` reveal classes |
| `sidebar.css` | Sidebar, toggle button, overlay |

### Exports (package.json)

The package exposes individual CSS files and the SVG symbol as named exports (`./tokens`, `./components`, etc.) so other projects can consume individual slices of the design system.

### Responsive breakpoints

- `≤ 900px`: multi-column grids collapse to 1 column; sidebar becomes a drawer
- `≤ 600px`: further padding/size reductions; horizontal lockup stacks vertically
