# Orison Design System - Brand Book 2.0

## Project Overview
This repository contains the "Orison Design System - Brand Book 2.0". It appears to be a static site presenting a design system or brand guidelines.

## Tech Stack
- **Framework/Build Tool**: Vite (used for dev server, building, and previewing).
- **Package Manager**: npm (indicated by `package-lock.json`).

## Directory Structure
- `/dist`: Output directory for built assets.
- `/.netlify`: Indicates configuration/deployment to Netlify.
- `/node_modules`: npm dependencies.
- `index.html`: The main HTML file (~107KB) containing the bulk of the content.
- `vite.config.js`: Vite configuration file.
- `package.json`: Project metadata and script definitions.

## Entry Points
- `index.html` serves as the primary entry point based on typical Vite conventions and the `package.json` main field.
- *(Note)*: The `vite.config.js` configures the dev server to open `/core.html` (`server: { open: '/core.html' }`), but `core.html` was not found in the root directory.

## Build/Run/Test Commands
- **Run dev server**: `npm run dev`
- **Build production bundle**: `npm run build`
- **Preview production bundle**: `npm run preview`

## Environment Variables
- No standard environment files (e.g., `.env`) were found in the root directory.

## External Services or Integrations
- Netlify (implied by the `.netlify` directory).

## Open Questions / Gaps
- **Missing `core.html`**: Vite is configured to open `core.html` on dev start, but the file doesn't seem to exist in the root. Should this be updated to `/index.html`, or is it generated automatically?
- **Single Huge HTML File**: Most of the implementation is consolidated within `index.html` (over 100KB). Given the size, breaking it into smaller structural chunks could improve maintainability.
