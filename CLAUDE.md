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
1. Imports all CSS (tokens → base → layout → typography → components → animations → sidebar → motion-tokens → motion-animations → motion-components)
2. Imports each section as raw HTML strings via Vite's `?raw` suffix
3. Injects the SVG sprite (`src/assets/symbol.svg`) at the top of `<body>` so `<use href="#...">` references work anywhere
4. Builds the sidebar HTML dynamically from `NAV_ITEMS` with two group labels: **Design System** (sections 00–13) and **Motion System** (sections 14–27)
5. Concatenates all section HTML strings into `#app`
6. Wires up sidebar toggle (mobile), scroll-spy via `IntersectionObserver`, scroll-reveal animations, color-swatch clipboard copy, and all motion interactive demos

### Sections

28 numbered HTML partials in `src/sections/` (00–27), split into two groups:

**Design System (00–13):** brand, color, typography, spacing, grid, iconography, components, etc.

**Motion System (14–27):**
| File | ID | Content |
|---|---|---|
| `14-motion-cover.html` | `sec-motion-cover` | Cover / intro |
| `15-easing.html` | `sec-easing` | 6 easing curves with live ball demos |
| `16-duration.html` | `sec-duration` | 7 duration tokens with fill bars |
| `17-transform.html` | `sec-transform` | translateY, translateX, scale, opacity |
| `18-stagger.html` | `sec-stagger` | Decay stagger grid (base/dense/dramatic) |
| `19-entrances.html` | `sec-entrances` | 5 entrance molecules |
| `20-exits.html` | `sec-exits` | 3 exit molecules |
| `21-states.html` | `sec-states` | Live hover/focus/active states |
| `22-micro.html` | `sec-micro` | Toggle, checkbox, progress, KPI counter |
| `23-loading.html` | `sec-loading` | Skeleton, pulse, loading bar |
| `24-organisms.html` | `sec-organisms` | Modal, scroll-reveal, data table, chart |
| `25-templates.html` | `sec-templates` | Elpis CLI, Presentation, Landing, Dashboard |
| `26-governance.html` | `sec-governance` | Performance, accessibility, composition, naming |
| `27-motion-donts.html` | `sec-motion-donts` | Do's & Don'ts with live comparisons |

Adding a new section: create the HTML file, add an import + `NAV_ITEMS` entry in `main.js` with the correct `group` property.

### Token system

All design tokens live in `src/tokens/tokens.css` as CSS custom properties on `:root`. They are the source of truth. The script `scripts/export-tokens.js` parses that file and writes `src/tokens/tokens.json` (not committed; generated on demand).

**Token naming convention:** `--{category}-{key}` — e.g. `--color-crimson`, `--space-4`, `--tracking-wide`. The export script uses the first dash-segment as the JSON category key.

Motion tokens live in `src/tokens/motion-tokens.css` and follow the prefix `--motion-{category}-{key}` — e.g. `--motion-easing-enter`, `--motion-duration-slow`, `--motion-ty-base`.

### CSS layer order (imported in `main.js`)

| File | Purpose |
|---|---|
| `tokens.css` | Design system CSS custom properties |
| `base.css` | Reset and body defaults |
| `layout.css` | Page shell, `#app` wrapper |
| `typography.css` | Font-face or global type rules |
| `components.css` | All design section UI classes |
| `animations.css` | `@keyframes` + `.in-view` reveal classes |
| `sidebar.css` | Sidebar, toggle button, overlay, group labels |
| `motion-tokens.css` | Motion CSS custom properties + `prefers-reduced-motion` |
| `motion-animations.css` | Motion `@keyframes` + `.m-reveal` / `.m-stagger-*` |
| `motion-components.css` | All motion section UI classes and demo components |

### Motion token system (`src/tokens/motion-tokens.css`)

Source of truth for all motion values:
- **Easing:** `--motion-easing-{enter|exit|state|emphasis|linear|micro}` — 6 curves
- **Duration:** `--motion-duration-{instant|micro|fast|base|slow|deliberate|cinematic}` — 7 tokens (80ms–1400ms)
- **Transform — translateY:** `--motion-ty-{xs|sm|base|lg|xl|hero}` — 6 values (8px–96px)
- **Transform — translateX:** `--motion-tx-{sm|base|lg|xl|slide}` — 5 values (12px–100%)
- **Transform — scale:** `--motion-scale-{min|identity|max|emphasis}` — 4 values
- **Transform — opacity:** `--motion-opacity-{invisible|ghost|dim|partial|full}` — 5 values
- **Stagger:** `--motion-stagger-{base|dense|dramatic|decay}` — 4 values

`prefers-reduced-motion: reduce` and `.reduced-motion` class on `<html>` both collapse all durations to `0.01s` and all transforms to `0px`.

### Motion JS architecture (`src/main.js` — motion section)

All motion demos are self-contained in `main.js` with no external libraries:
- **Easing demos:** `playEasingBall(id)` — resets and re-plays `is-playing` CSS class
- **Duration demos:** `playDurationBar(row)` — fires primary + exit fill bars
- **Stagger:** `staggerDelays(base)` computes decay array (`base × 0.9^n`, cap 8, max 480ms)
- **Entrance/Exit:** `ENTRANCE_MAP` / `EXIT_MAP` objects map trigger names to CSS animation classes
- **KPI counter:** `animateCounter(el, from, to, dur)` — `requestAnimationFrame` + cubic easeOut
- **Reduced-motion toggle:** toggles `.reduced-motion` on `document.documentElement`
- **IntersectionObserver instances:** `mRevealObserver` (`.m-reveal`), `scrollRevealObserver` (`.scroll-reveal-card`), `orgTableObserver`, `chartBarsObserver`

### Motion naming convention

```
motion-[layer]-[type]-[variant]

motion-atom-easing-enter
motion-atom-duration-slow
motion-mol-enter-reveal
motion-mol-state-hover-primary
motion-org-scroll-reveal
motion-org-data-chart-bar
motion-tpl-landing-hero
motion-tpl-dashboard-loading
```

Layers: `atom` (easing/duration/transform) → `mol` (enter/exit/state/micro/loading) → `org` (page/modal/scroll/data/nav) → `tpl` (elpis/presentation/landing/dashboard)

### Exports (package.json)

The package exposes individual CSS files and the SVG symbol as named exports (`./tokens`, `./components`, etc.) so other projects can consume individual slices of the design system.

### Responsive breakpoints

- `≤ 900px`: multi-column grids collapse to 1 column; sidebar becomes a drawer
- `≤ 600px`: further padding/size reductions; horizontal lockup stacks vertically
