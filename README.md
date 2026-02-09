# Bookworm Kids School

Bookworm Kids School website built with React, TypeScript, Vite and Tailwind CSS.

## Overview

This repository contains the front-end for the Bookworm Kids School website — a responsive, component-driven site showcasing programs, admissions, facilities, gallery, team, FAQ and contact pages.

## Features

- Responsive layout and accessible UI components
- Hero, Programs, Admissions, Gallery, Team, Testimonials, Contact sections
- Reusable UI primitives under `src/components/ui`
- Built with TypeScript, TailwindCSS and Vite for fast local development

## Tech stack

- Vite
- React 18 + TypeScript
- Tailwind CSS
- Radix UI primitives and other community libraries
- Vitest for unit tests

## Project structure (important files)

- `src/` — application source
  - `components/` — UI components, sections and layout
  - `pages/` — route pages
  - `assets/` — images and static assets
- `public/` — static public files
- `package.json` — scripts and dependencies

## Scripts

Available npm scripts (from `package.json`):

```bash
npm install
npm run dev        # start dev server (vite)
npm run build      # build for production
npm run build:dev  # build in development mode
npm run preview    # locally preview production build
npm run lint       # run eslint
npm run test       # run tests (vitest)
npm run test:watch # run tests in watch mode
```

## Development

Prerequisites:
- Node.js (16+ recommended)

Quick start:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Testing:

```bash
npm run test
```

Linting:

```bash
npm run lint
```

## Deployment

The build output is placed in the `dist/` directory by Vite. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, S3 + CloudFront, etc.).

## Contributing

1. Fork the repository
2. Create a branch for your change
3. Make your changes and add a clear commit message
4. Open a pull request with a description of your changes

## Notes & next steps

- Add a `LICENSE` file (this repository currently does not specify a license).
- Update README with deployment instructions specific to your hosting provider if needed.

## Contact

For questions or support, open an issue in this repository.
