# Codex Project Instructions

This is the Codex equivalent of `CLAUDE.md`. Keep it aligned with the same
project intent, but prefer Codex-native wording and the current repository
state when file inventory or package metadata has drifted.

**Precedence:** `src/tokens/tokens.css` and `src/tokens/motion-tokens.css` are
the executable truth. If any document in this repository — including this one,
`CLAUDE.md`, `orisonDesign.md` or `orisonMotion.md` — disagrees with the code,
the code wins and the document is the bug. That divergence is exactly what the
v3.0 refactor existed to remove; do not reintroduce it.

## Commands

Use the global RTK convention for shell commands, for example `rtk npm run build`.

```bash
npm run dev            # Dev server
npm run verify         # Check the system invariants — <1s, prints file:line
npm run build          # Runs verify, then builds to dist/
npm run preview        # Preview the production build
npm run tokens:export  # Parse tokens.css → src/tokens/tokens.json
```

For code changes run `npm run build`; it will not complete if an invariant is
violated. Run `npm run tokens:export` only when token export output is
intentionally needed.

## The nine invariants

`scripts/verify-system.mjs` enforces these. Each corresponds to a defect that
shipped in v2.0 and required a full refactor to remove. Do not weaken a check
to make a change pass — fix the change.

| # | Invariant | Rationale |
|---|---|---|
| 1 | No `font-size` below 12px | v2.0 had 301 (83.4% of all declarations) |
| 2 | `letter-spacing` always in `em`, never `px` | 3px is 43% of the em at 7px, 9% at 32px |
| 3 | `--color-crimson` is never a `color:` value | 2.09:1 on dark — use `--color-crimson-text` |
| 4 | `--color-midnight` is never a `color:` value | Surface token; inverts under `[data-ground="light"]` |
| 5 | `border-radius` only `0`, `50%`, `9999px` | Surfaces have no radius; circular marks do |
| 6 | Every `--motion-*` token is consumed | A token nobody reads is documentation, not system |
| 7 | All text ≥ 4.5:1 against its real background | `-light` selectors measure against off-white |
| 8 | One `<h1>`, `aria-labelledby` per section, every SVG labeled | — |
| 9 | No `tabindex="-1"` on specimen controls | That is what made v2.0's focus rules dead code |

## Architecture

Static Orison brand book and design system, rendered as a single-page Vite app
with vanilla JavaScript and CSS. No framework.

`src/main.js` is the single runtime entry point. It:

1. Imports CSS in the established layer order.
2. Imports section HTML partials via Vite `?raw`.
3. Adds `.js-ready` to `<html>` before mounting.
4. Injects `src/assets/symbol.svg` so `<use href="#...">` works globally.
5. Builds the sidebar from `NAV_ITEMS` + `GROUP_LABELS` into four collapsible
   groups, with a `/`-focused filter and state persisted to `localStorage`.
6. Concatenates section HTML into `<main id="app">`.
7. Wires drawer, scroll-spy, reveal, clipboard, and motion demo behavior.

## Section System

- 38 HTML partials in `src/sections/` (`00`–`37`), in four groups: Design
  System (00–13), Motion System (14–29), Data Viz (30–36), Colofão (37).
- Adding a section: create the partial, add the raw import in `src/main.js`,
  add a `NAV_ITEMS` entry with the correct `group`, give the `<section>` an
  `aria-labelledby` pointing at its own `<h2>`, wire any demo behavior, then
  run `npm run verify`.
- Treat the actual `src/sections/` inventory as source of truth if older docs
  list fewer sections.

## Token System

- `src/tokens/tokens.css` is the source of truth for design tokens.
- Naming: `--{category}-{key}` — `--color-crimson`, `--space-4`,
  `--tracking-wide`.
- `scripts/export-tokens.js` parses `tokens.css` and writes
  `src/tokens/tokens.json`; generated output is not part of a change unless
  requested.
- Motion tokens live in `src/tokens/motion-tokens.css` with the
  `--motion-{category}-{key}` prefix.

### Two typographic ramps — never mixed

- `--display-{hero|xl|lg|md|sm}` — Cormorant Garamond, 64/44/34/26/20px.
  Expression. Uppercase allowed.
- `--text-{xl|lg|base|sm|xs|label}` — Montserrat, 20/18/16/14/13/12px.
  Reading and UI. **12px is the floor.**

Uppercase is a structural marker: in the text ramp it is exclusive to
`--text-label`; in the display ramp it is allowed on `hero`, `xl` and `sm`.
Never on prose.

Section titles (`.sec-title`, every `<h2>`) are Cormorant at `--display-md`;
block headers (`<h3>`) stay at `--text-label`. Two rungs of separation — do not
collapse them back.

### Ground-aware color

`[data-ground="light"]` / `.ground-light` inverts the whole text ramp *and*
`--color-crimson-text` (→ `#8B1A1A`, 7.45:1 on off-white). Applied
automatically to `.panel-light`, `.card-preview-light` and
`.lm-stage-inner.lm-light`.

Inside a light surface, use the same semantic tokens as anywhere else —
`--text-primary` for ink, `--color-crimson-text` for accent type. The scope
resolves. Do not hand-roll a `-light` variant; seven of those existed before
v3.0 and the one that was missing shipped at 2.55:1.

### Documented values are generated

Any element printing a token's value carries
`data-token-value="--motion-…"`; a pass in `main.js` fills its text from
`getComputedStyle`. Never hand-type a value next to the token it documents.

## Utility layer (`layout.css`)

Check these before writing an inline `style=`:

`.stack-1` `.stack-2` `.stack-3` `.stack-hairline` · `.label-muted`
`.label-accent` `.label-secondary` · `.token-name` · `.caption-center` ·
`.mt-hairline` `.mt-2`

Animation initial states are `.anim-init` / `.anim-init-up`, both scoped to
`.js-ready`. Never write a bare `opacity: 0` initial state in markup — without
the scope a JS failure leaves that content permanently invisible, and it prints
blank.

## Section shape system

One `.section` base plus modifiers that must differ materially:

| Class | Difference |
|---|---|
| `.section` | Base — 1080px, midnight plate, hairline gutter |
| `.section--prose` | 68ch measure |
| `.section--gallery` | 120px vertical padding, 48px between specimens |
| `.section--demo` | `surface` background — the stage reads as a stage |
| `.section--spec` | 64px vertical padding |
| `.opener` | Chapter opener — black ground, `display-xl`, one-sentence thesis |

The twelve v2.0 wrapper names are kept as aliases on `.section`. Do not add a
thirteenth, and do not add a modifier that compiles to the same bytes as an
existing one.

## CSS Layer Order

Preserve the import order in `src/main.js`:

1. `tokens.css`
2. `motion-tokens.css`
3. `base.css`
4. `layout.css`
5. `typography.css`
6. `components.css`
7. `animations.css`
8. `sidebar.css`
9. `motion-animations.css`
10. `motion-components.css`

## Motion System

- Easing, duration, transform, opacity and stagger values live in motion
  tokens. All 38 are consumed — invariant 6 keeps it that way.
- `prefers-reduced-motion: reduce` and the `.reduced-motion` class collapse
  durations to `0.01s` (never `0` — zero causes a flash) and zero transforms.
- **The CSS `!important` does not reach JavaScript scheduling.** `setTimeout`,
  `setInterval` and `rAF` do not read the media query. All scheduling goes
  through the `schedule()` wrapper in `main.js`, which collapses the delay.
- Every `setInterval` has a clear path and pauses on `visibilitychange`.
- The scroll-reveal gate belongs to authored moments only — cover, chapter
  openers, section dividers. Content blocks appear without a gate.
- Motion demos are self-contained; add no framework dependency for them.

## Naming

Motion tokens are flat and categorized by the property they control:

```text
--motion-[category]-[variant]
```

Categories: `easing` · `duration` · `ty` · `tx` · `scale` · `opacity` ·
`stagger` · `exit`.

Examples:

- `--motion-easing-enter`
- `--motion-duration-slow`
- `--motion-ty-base`
- `--motion-stagger-dense`

The layer (atom / mol / org / tpl) describes *where* a token is applied and
lives in the documentation, not in the name.

> Until v3.0 this file specified `motion-[layer]-[type]-[variant]` with four
> examples, none of which existed in the code. If you find that pattern
> anywhere, it is stale.

CSS classes follow their own component (`.m-reveal`, `.lm-stage`,
`.dv-kpi-card`); only tokens carry the `--motion-` prefix.

## Accessibility contract

- One `<h1>` (the cover). Section titles are `<h2>`, block headers `<h3>`. No
  skipped levels. Every `<section>` carries `aria-labelledby`.
- `<main id="app">`, skip link as first focusable element, `<noscript>`
  fallback, and a working `@media print`.
- Every interactive target is a `<button>`/`<a>` or carries `role` +
  `tabindex` + key handling. A delegated `keydown` handler operates any
  `role="switch"` / `role="checkbox"` with Space and Enter.
- One global `:focus-visible` rule using `--color-focus`.
- Drawer and modal close on Escape, trap focus while open, and return it.
- 44px minimum touch target at ≤900px.
- `aria-current="page"` on the active nav item; `aria-live="polite"` on
  ephemeral confirmations.

## Exports

`package.json` exposes individual CSS files and the SVG symbol as named
exports. Preserve those entry points when reorganizing files.

## Responsive Behavior

Breakpoints are `1120px` · `900px` · `600px`. CSS custom properties do not work
inside `@media`, so these are literals by necessity — keep them identical
across every file.

- `<= 1120px`: containers gain side margins.
- `<= 900px`: grids collapse; sidebar becomes a drawer under a fixed 64px top
  bar (never a floating hamburger over content); every interactive control gets
  `min-height: 44px`.
- `<= 600px`: single column, reduced padding. **The text ramp never shrinks** —
  16px prose at 360px is still 16px. Only the display ramp scales down.

Content wider than the column scrolls inside its own block (`.scroll-x`). The
page never scrolls horizontally.
