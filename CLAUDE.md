# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev            # Dev server
npm run verify         # Check the system invariants (see below) — <1s
npm run build          # Runs verify, then builds to dist/
npm run preview        # Preview the production build
npm run tokens:export  # Parse tokens.css → src/tokens/tokens.json
```

**`npm run verify` is the gate.** `build` depends on it, so a violated
invariant fails the build rather than shipping. Run it before you claim
anything is done — the checks below are the ones it enforces, and it prints
the file:line of every violation.

## Architecture

This is a **static brand book / design system** for Orison, rendered as a single-page app with Vite. There is no framework — it's vanilla JS + CSS.

### How the page assembles

`src/main.js` is the single entry point. It:
1. Imports all CSS in layer order (see table below) and adds `.js-ready` to `<html>` before mounting
2. Imports each section as raw HTML strings via Vite's `?raw` suffix
3. Injects the SVG sprite (`src/assets/symbol.svg`) at the top of `<body>` so `<use href="#...">` references work anywhere
4. Builds the sidebar from `NAV_ITEMS` + `GROUP_LABELS` into four collapsible groups: **Design System** (00–13), **Motion System** (14–29), **Data Viz** (30–36), **Colofão** (37). The sidebar has a `/`-focused filter, group state persisted in `localStorage`, and `aria-current` + `scrollIntoView` on the active item
5. Concatenates all section HTML strings into `#app`
6. Wires up the mobile drawer (Esc to close, focus trap), scroll-spy via `IntersectionObserver`, reveal animations, swatch token copy, and all motion demos

### Sections

38 numbered HTML partials in `src/sections/` (00–37), in four groups.

**Design System (00–13):** brand, color, typography, spacing, grid, iconography, components.

**Motion System (14–29):**
| File | ID | Content |
|---|---|---|
| `14-motion-cover.html` | `sec-motion-cover` | Chapter opener (`.opener`) + 4 principles |
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
| `28-logo-motion.html` | `sec-logo-motion` | Logo Motion — concept "Incisão", 3 variations |
| `29-typewriter.html` | `sec-typewriter` | Typewriter — cursor crimson, 4 demos (display, label, KPI rewrite, CLI) |

**Data Viz (30–36):** `30-dataviz-overview` (chapter opener), `31-data-palette`, `32-chart-styles`, `33-kpi-cards`, `34-command-layout`, `35-hero-3d`, `36-realtime-motion`.

**Colofão (37):** `37-colofao.html` — quickstart, non-negotiable rules, 2.0→3.0 changelog, brand close.

**Section 28 — Logo Motion:**
- Concept: "Incisão" — the crimson line exists first, circles form around it as inevitable consequence
- 3 variations: Símbolo Isolado (~1.6s), Lockup Horizontal (~2.6s), Lockup Vertical (~2.5s)
- Each stage has Fire / Reset buttons and a dark/light theme toggle
- Uses inline SVG (not `<use>`) so individual elements (`lm-s-line`, `lm-s-inner`, `lm-s-outer`, etc.) are addressable by JS
- Technique: `scaleY` from center for the crimson line; `stroke-dashoffset` for both circles; `opacity + letter-spacing` for wordmarks
- New SVG: `src/assets/symbol-animated.svg` — decomposed symbol (not used at runtime, reference only; section 28 embeds inline SVG)
- JS functions: `animateSymbol()`, `resetSymbolEls()`, `applyLmTheme()` + 3 IIFE setup blocks
- New keyframes in `motion-animations.css`: `logoIncision`, `logoCircleDraw`, `logoSettle`, `logoDividerFade`, `logoWordmark`, `logoSubtitle`, `logoDividerScale`, `logoWordmarkV`
- New CSS classes in `motion-components.css`: `.lm-*` namespace
- Respects `prefers-reduced-motion` and `.reduced-motion` toggle from section 26

Adding a new section: create the HTML file, add an import + `NAV_ITEMS` entry in `main.js` with the correct `group` property, give the `<section>` an `aria-labelledby` pointing at its own `<h2>`, then run `npm run verify`.

### Utility layer (`layout.css`)

Before writing an inline `style=`, check whether one of these covers it. Each
replaced between 5 and 19 verbatim copies of the same declaration block:

`.stack-1` `.stack-2` `.stack-3` `.stack-hairline` — vertical flex stacks ·
`.label-muted` `.label-accent` `.label-secondary` — the uppercase label pattern ·
`.token-name` — mono accent for token names · `.caption-center` — centered
specimen caption · `.mt-hairline` `.mt-2` — spot spacing.

**Animation initial states are scoped to `.js-ready`** (`.anim-init`,
`.anim-init-up`), a class `main.js` puts on `<html>` before mounting. Never
write a bare `opacity: 0` initial state in markup — without the scope, a JS
failure leaves that content permanently invisible and it prints blank.

### Token system

All design tokens live in `src/tokens/tokens.css` as CSS custom properties on `:root`. They are the source of truth. The script `scripts/export-tokens.js` parses that file and writes `src/tokens/tokens.json` (not committed; generated on demand).

**Token naming convention:** `--{category}-{key}` — e.g. `--color-crimson`, `--space-4`, `--tracking-wide`. The export script uses the first dash-segment as the JSON category key.

**Two typographic ramps, never mixed** (v3.0):
- `--display-{hero|xl|lg|md|sm}` — Cormorant Garamond, 64/44/34/26/20px. Expression. Uppercase allowed.
- `--text-{xl|lg|base|sm|xs|label}` — Montserrat, 20/18/16/14/13/12px. Reading and UI.

**The nine invariants.** `npm run verify` enforces every one of these. They
are not style preferences — each corresponds to a defect that shipped in v2.0
and took a full refactor to remove.

| # | Invariant | Why |
|---|---|---|
| 1 | No `font-size` below 12px | v2.0 had 301 of them (83.4% of all declarations) |
| 2 | `letter-spacing` always in `em` | 3px is 43% of the em at 7px, 9% at 32px |
| 3 | `--color-crimson` is never `color:` | 2.09:1 on dark; use `--color-crimson-text` |
| 4 | `--color-midnight` is never `color:` | It is a *surface* token and inverts under `[data-ground="light"]` |
| 5 | `border-radius` only `0`, `50%` or `9999px` | Surfaces have no radius; circular marks do |
| 6 | Every `--motion-*` token is consumed | A token nobody reads is documentation, not system |
| 7 | All text ≥ 4.5:1 | Measured against the *correct* background per selector |
| 8 | One `<h1>`, `aria-labelledby` per section, every SVG labeled | — |
| 9 | No `tabindex="-1"` on specimens | That is what made v2.0's focus rules dead code |

**Ground-aware color.** `[data-ground="light"]` / `.ground-light` inverts the whole text ramp *and* `--color-crimson-text` (→ #8B1A1A, 7.45:1 on off-white). The scope is applied automatically to `.panel-light` and `.card-preview-light` — the surfaces that prove the mark on paper — so no component needs a hand-rolled `-light` text variant. Available to any block that needs to flip grounds.

**`--space-hairline: 2px`** is the signature separator — the only thing between sibling blocks. No `border-radius` anywhere in the system.

Motion tokens live in `src/tokens/motion-tokens.css` and follow the prefix `--motion-{category}-{key}` — e.g. `--motion-easing-enter`, `--motion-duration-slow`, `--motion-ty-base`. **All 38 are consumed**; invariant 6 keeps it that way.

**Documented values are generated, never typed.** Any element that prints a
token's value carries `data-token-value="--motion-…"`, and a pass in `main.js`
fills its text from `getComputedStyle`. Section 17 named 12 tokens and printed
12 hand-typed copies of their values; changing a token did not change the
documentation. If you add a spec row that shows a value, use the attribute.

### CSS layer order (imported in `main.js`)

| # | File | Purpose |
|---|---|---|
| 1 | `tokens.css` | Design tokens + the `[data-ground="light"]` scope |
| 2 | `motion-tokens.css` | Motion tokens + `prefers-reduced-motion` |
| 3 | `base.css` | Reset, body, skip link, print sheet, mobile touch targets |
| 4 | `layout.css` | Grids, the utility layer, `.scroll-x`, `.js-ready` anim states |
| 5 | `typography.css` | The two ramps as utility classes |
| 6 | `components.css` | Focus layer, `.section` system, all design UI classes |
| 7 | `animations.css` | Reveal gate (cover / opener / divider only) + hover |
| 8 | `sidebar.css` | Sidebar, filter, groups, mobile top bar, overlay |
| 9 | `motion-animations.css` | Motion `@keyframes` + `.m-reveal` / `.m-stagger-*` |
| 10 | `motion-components.css` | All motion + dataviz section UI classes |

Both token files load first so every later layer can read them. `layout.css`
precedes `components.css` so component rules win over utilities.

### Motion token system (`src/tokens/motion-tokens.css`)

Source of truth for all motion values:
- **Easing:** `--motion-easing-{enter|exit|state|emphasis|linear|micro}` — 6 curves
- **Duration:** `--motion-duration-{instant|fast|base|moderate|slow|dramatic|cinematic}` — 7 tokens (80ms–1400ms)
- **Transform — translateY:** `--motion-ty-{micro|sm|md|base|lg|xl}` — 6 values (4px–80px)
- **Transform — translateX:** `--motion-tx-{sm|md|base|lg|drawer}` — 5 values (8px–240px)
- **Transform — scale:** `--motion-scale-{min|base|max|backdrop}` — 4 values
- **Transform — opacity:** `--motion-opacity-{start|mid|end|disabled|overlay}` — 5 values
- **Stagger:** `--motion-stagger-{base|dense|dramatic|max-delay}` — 4 values, read by `main.js` via `getComputedStyle`

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

Tokens are flat and categorized by the property they control:

```
--motion-[category]-[variant]

--motion-easing-enter     --motion-scale-max
--motion-duration-slow    --motion-opacity-overlay
--motion-ty-base          --motion-stagger-dense
--motion-tx-drawer        --motion-exit-ratio
```

The layer (atom / mol / org / tpl) describes *where* a token is applied and lives in the documentation, not in the name. CSS classes follow their own component (`.m-reveal`, `.lm-stage`, `.dv-kpi-card`); only tokens carry the `--motion-` prefix.

Section 26 documents this convention — keep the two in sync.

### Exports (package.json)

The package exposes individual CSS files and the SVG symbol as named exports (`./tokens`, `./components`, etc.) so other projects can consume individual slices of the design system.

### Section shape system

One `.section` base with modifiers, replacing the twelve v2.0 wrapper classes that all carried the identical rule (`.section-wrap`, `.palette-wrap`, `.type-wrap`, … — kept as aliases):

| Class | Use |
|---|---|
| `.section` | Base — container, plate, hairline gutter |
| `.section--prose` | Reading measure (`--measure-prose`, 68ch) |
| `.section--gallery` | Specimen grid, extra breathing room |
| `.section--demo` | Live stage |
| `.section--spec` | Dense key/value |
| `.opener` | Chapter opener — full-bleed, display type, one-sentence thesis |

Section titles (`.sec-title`, every `<h2>`) are Cormorant at `--display-md`; block headers (`<h3>`) stay at `--text-label`. Two rungs of separation — do not collapse them back.

### Accessibility contract

Non-negotiable, and verified in the v3.0 refactor:
- Every section title is an `<h2>` with `aria-labelledby` on its `<section>`; block headers are `<h3>`. Exactly one `<h1>` (the cover).
- `<main id="app">`, skip link as first focusable element, `<noscript>` fallback.
- Every interactive target is a `<button>` or carries `role` + `tabindex` + key handling. A delegated `keydown` handler operates any `role="switch"`/`role="checkbox"` with Space/Enter.
- One global `:focus-visible` rule using `--color-focus`. Never add `tabindex="-1"` to specimen controls — that is what made v2.0's focus rules dead code.
- All text ≥ 4.5:1, verified against the *correct* background (light-panel selectors resolve against off-white, not the dark plate). All SVGs carry `aria-label` or `aria-hidden`.
- `@media print` exists and the book prints.

### Responsive breakpoints

`1120px` · `900px` · `600px`. CSS custom properties do not work inside `@media`, so these are literals by necessity — keep them identical across every file.

- `≤ 1120px`: containers gain side margins
- `≤ 900px`: grids collapse; sidebar becomes a drawer under a fixed top bar (`.sidebar-topbar`, 64px, offset by `#app { padding-top }` — never a floating hamburger over content)
- `≤ 600px`: single column, reduced padding. **The text ramp never shrinks** — 16px prose at 360px is still 16px; only the display ramp scales down.
