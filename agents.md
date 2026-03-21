# AGENTS.md

This file is a quick operator guide for humans and coding agents working in this repository.

## Project at a glance

- Personal site built with Astro.
- Styling is done with Tailwind CSS v4 through `@tailwindcss/vite`.
- Small React components are used where JSX is more convenient, but the site is primarily static.
- Content posts live as Markdown files under `src/pages/thoughts`.
- Production deployment goes to Cloudflare via Wrangler and serves the built `dist` directory as static assets.

## Runtime and package manager

- Node version: `24.13.0`
- Source of truth: [`.nvmrc`](/Users/mate.papp/Documents/Dev/matepapp.com/.nvmrc) and `package.json#engines`
- Package manager: `npm` (`package-lock.json` is committed)

Recommended setup:

```bash
nvm use
npm install
```

If Node 24.13.0 is not installed yet:

```bash
nvm install 24.13.0
nvm use 24.13.0
npm install
```

## Most useful scripts

Defined in [`package.json`](/Users/mate.papp/Documents/Dev/matepapp.com/package.json):

- `npm run dev` starts the Astro dev server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run typecheck` runs `astro check`
- `npm run lint` runs `oxlint`
- `npm run format` runs `oxfmt`
- `npm run deploy` deploys with Wrangler

Recommended validation flow before shipping:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

## Project structure

- [`src/pages`](/Users/mate.papp/Documents/Dev/matepapp.com/src/pages) contains routes
- [`src/components`](/Users/mate.papp/Documents/Dev/matepapp.com/src/components) contains shared Astro and React UI
- [`src/components/pages`](/Users/mate.papp/Documents/Dev/matepapp.com/src/components/pages) contains page-specific React components
- [`src/layouts`](/Users/mate.papp/Documents/Dev/matepapp.com/src/layouts) contains Markdown/content layouts
- [`src/styles/global.css`](/Users/mate.papp/Documents/Dev/matepapp.com/src/styles/global.css) contains global theme tokens and shared utility classes
- [`src/site.ts`](/Users/mate.papp/Documents/Dev/matepapp.com/src/site.ts) is the central place for site metadata and canonical/title helpers
- [`public`](/Users/mate.papp/Documents/Dev/matepapp.com/public) holds static assets copied as-is
- [`wrangler.jsonc`](/Users/mate.papp/Documents/Dev/matepapp.com/wrangler.jsonc) defines the Cloudflare deployment config

## Simplicity patterns for this repo

These are the patterns to preserve unless there is a strong reason to change them.

### 1. Prefer static Astro pages first

- Default to `.astro` pages and layouts for routing and page shells.
- Reach for React only when it meaningfully improves composition or readability.
- Avoid adding client-side hydration unless the feature truly needs interactivity.

### 2. Keep content as files, not as a system

- Blog posts belong in `src/pages/thoughts/*.md`.
- Follow the existing frontmatter shape: `title`, `createdAt`, `slug`, `published`, `excerpt`, `readingTime`, and optional `updatedAt`.
- Keep publishing simple: add a Markdown file and let the index page pick it up via `import.meta.glob`.

### 3. Reuse the shared site metadata

- Use helpers from [`src/site.ts`](/Users/mate.papp/Documents/Dev/matepapp.com/src/site.ts) for titles and canonical URLs.
- If the site URL, description, or social metadata changes, update it there instead of duplicating values elsewhere.

### 4. Extend existing styles before inventing new systems

- Prefer the shared classes already defined in [`src/styles/global.css`](/Users/mate.papp/Documents/Dev/matepapp.com/src/styles/global.css), such as `card`, `text-link`, and `prose-wrapper`.
- Keep the visual language consistent: clean typography, restrained color usage, rounded cards, simple spacing.
- Avoid introducing a second styling approach or custom design token layer unless needed.

### 5. Keep dependencies and abstractions lightweight

- Do not add state libraries, CMS tooling, routing wrappers, or data layers for simple content changes.
- Keep logic close to the page when it is only used once.
- Prefer clear, local code over reusable abstractions that save only a few lines.

### 6. Preserve the static deployment model

- This site currently builds to `dist/` and deploys that output directly to Cloudflare.
- Do not introduce server-only runtime requirements unless deployment is intentionally being redesigned.

## Working on routes and content

### Adding or changing a page

- Add a route in `src/pages`.
- Wrap it with the shared [`layout.astro`](/Users/mate.papp/Documents/Dev/matepapp.com/src/components/layout.astro) unless there is a strong reason not to.
- Use `pageTitle(...)` for subpages so titles stay consistent.

### Adding a new thought post

1. Create a new Markdown file in [`src/pages/thoughts`](/Users/mate.papp/Documents/Dev/matepapp.com/src/pages/thoughts).
2. Use the existing thought frontmatter shape.
3. Set `layout: ../../layouts/thought-layout.astro`.
4. Add social/meta image assets under `public/assets/thoughts/<slug>/` if needed.

### Updating shared metadata or SEO

- Page shell metadata lives in [`src/components/layout.astro`](/Users/mate.papp/Documents/Dev/matepapp.com/src/components/layout.astro).
- Site-wide defaults live in [`src/site.ts`](/Users/mate.papp/Documents/Dev/matepapp.com/src/site.ts).

## Deployment

Deployment is intentionally simple:

1. `npm run build`
2. `npm run deploy`

What that does:

- Astro builds the site into `dist/`
- Wrangler deploys using [`wrangler.jsonc`](/Users/mate.papp/Documents/Dev/matepapp.com/wrangler.jsonc)
- Cloudflare serves `dist/` as static assets via:

```json
"assets": {
  "directory": "./dist"
}
```

Notes:

- Cloudflare config name: `matepapp`
- Compatibility date is set in [`wrangler.jsonc`](/Users/mate.papp/Documents/Dev/matepapp.com/wrangler.jsonc); update it deliberately, not casually
- If deployment behavior changes, update this file and `wrangler.jsonc` together

## Practical guardrails for agents

- Check for uncommitted work before editing and do not overwrite user changes.
- Prefer minimal, local edits over broad refactors.
- When changing structure, update this guide if the workflow changes.
- If you add a new recurring command that contributors should know, add it here.
- If you change Node or deployment requirements, update both the config and this file in the same change.

## Quick start

```bash
nvm use
npm install
npm run dev
```

## Before finishing a change

Run the checks that match the scope of the change. For most code changes, this is enough:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```
