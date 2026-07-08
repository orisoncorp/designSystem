# Codex Project Instructions

This is the Codex equivalent of `CLAUDE.md`. Keep it aligned with the same
project intent, but prefer Codex-native wording and the current repository state
when file inventory or package metadata has drifted.

## Commands

Use the global RTK convention for shell commands, for example `rtk npm run build`.

```bash
npm run dev
npm run build
npm run preview
npm run tokens:export
```

For code changes, run `npm run build`. Run `npm run tokens:export` only when
token export output is intentionally needed.

## Architecture

This repository is a static Orison brand book and design system rendered as a
single-page Vite app with vanilla JavaScript and CSS.

`src/main.js` is the single runtime entry point. It:

1. Imports CSS in the established layer order.
2. Imports section HTML partials via Vite `?raw`.
3. Injects `src/assets/symbol.svg` into the document so `<use href="#...">`
   works globally.
4. Builds the sidebar from `NAV_ITEMS`.
5. Concatenates section HTML into `#app`.
6. Wires sidebar, scroll-spy, reveal, clipboard, and motion demo behavior.

## Section System

- HTML partials live in `src/sections/`.
- When adding a section, create the HTML partial, add the raw import in
  `src/main.js`, add a `NAV_ITEMS` entry with the correct group, and wire any
  interactive demo behavior in `src/main.js`.
- Design-system and motion-system sections are both part of the same app shell.
- Treat the actual `src/sections/` inventory as source of truth if older docs
  list fewer sections.

## Token System

- `src/tokens/tokens.css` is the source of truth for design tokens.
- Token naming convention: `--{category}-{key}`, for example
  `--color-crimson`, `--space-4`, `--tracking-wide`.
- `scripts/export-tokens.js` parses `tokens.css` and writes
  `src/tokens/tokens.json`; generated output is not automatically part of a
  change unless requested.
- Motion tokens live in `src/tokens/motion-tokens.css` and use the
  `--motion-{category}-{key}` prefix.

## CSS Layer Order

Preserve the import order in `src/main.js`:

1. `tokens.css`
2. `base.css`
3. `layout.css`
4. `typography.css`
5. `components.css`
6. `animations.css`
7. `sidebar.css`
8. `motion-tokens.css`
9. `motion-animations.css`
10. `motion-components.css`

## Motion System

- Easing, duration, transform, opacity, and stagger values live in motion tokens.
- `prefers-reduced-motion: reduce` and the `.reduced-motion` class must keep
  motion accessible by collapsing durations/transforms.
- Motion demos in `src/main.js` are self-contained; avoid adding framework
  dependencies for demo behavior.
- Existing helper patterns include easing replay, duration bars, stagger delay
  calculation, entrance/exit maps, KPI counters, reduced-motion toggle, and
  `IntersectionObserver` reveal flows.

## Naming

Use the established motion naming convention:

```text
motion-[layer]-[type]-[variant]
```

Layers are `atom`, `mol`, `org`, and `tpl`.

Examples:

- `motion-atom-easing-enter`
- `motion-mol-state-hover-primary`
- `motion-org-data-chart-bar`
- `motion-tpl-dashboard-loading`

## Exports

The package exposes individual CSS files and the SVG symbol through
`package.json` exports. Preserve those entry points when reorganizing files.

## Responsive Behavior

- `<= 900px`: multi-column grids collapse to one column; sidebar becomes a
  drawer.
- `<= 600px`: reduce padding/sizes further; horizontal lockups stack vertically.
