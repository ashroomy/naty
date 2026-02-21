# Naty — Portfolio / One‑page Next.js Site

## Tech stack

- Next.js (React) — app framework used for pages and routing
- Tailwind CSS — utility-first styling (see `tailwind.config.js`)
- PostCSS — CSS processing (`postcss.config.js`)
- Swiper / other UI libs — used in sliders and media components (installed via `package.json`)
- Build tools: `pnpm` / `npm` (lockfile: `pnpm-lock.yaml`)

## Key project files

- `package.json` — project scripts and dependencies
- `next.config.js` — Next.js configuration
- `jsconfig.json` — project JS config / path hints
- `postcss.config.js`, `tailwind.config.js` — styling pipeline
- `pages/_app.js`, `pages/_document.js` — Next.js wrappers
- `pages/index.jsx`, `pages/index-one-page.jsx` — entry pages

## Source layout (src/)

- `src/components/` — main React components:
  - `About.js`, `Home.js`, `Contact.js`, `Portfolio.js`, `Services.js`, etc.
  - `popup/` — modal components: `BlogPopup.js`, `PortfolioPopup.js`, `ServicePopup.js`, `VideoPopup.js`, `ModalContainer.js`
- `src/layout/` — layout and UX primitives: `Layout.js`, `Sidebar.js`, `MobileMenu.js`, `Cursor.js`, `PreLoader.js`
- `src/context.js` — global context (state shared across components)
- `src/utilits.js` — helper functions used across the app
- `src/sliderProps.js`, `src/useClickOutside.js`, `src/TypeingAnimation.js` — small utilities and helpers

## Public assets

- `public/assets/` — images, SVGs, fonts, and CSS plugins. Use these via `/assets/...` paths from components and pages.

## Styles

- `styles/globals.css` — global styles; Tailwind included here
- `public/assets/css/` — additional plugin and custom CSS files

## Common flows & conventions

- Page composition: top-level pages import `Layout` and compose sections from `src/components`.
- Modals/popups are implemented under `src/components/popup` and wrapped by `ModalContainer`.
- `src/context.js` provides shared state (e.g., menu toggles, modal state).
- Keep visual/asset files in `public/assets` and reference them with absolute paths (e.g., `/assets/img/...`).

## Run & build

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Build for production:

```
pnpm build
pnpm start
```

If you use `npm` instead of `pnpm` replace commands with `npm install` / `npm run dev` / `npm run build`.

## Where to change things

- Add or edit sections in `src/components/` and update `pages/index.jsx` to include them.
- Update global styling in `styles/globals.css` or Tailwind config.
- Modal logic and new popup types belong in `src/components/popup` and the containing `ModalContainer`.

## Notes / Gotchas

- This is a client-heavy one-page UI; avoid importing heavy server-only modules into components that run in the browser.
- Keep asset sizes optimized for performance (images in `public/assets/img/`).

---

If you want, I can also:
- add badges and a short development checklist,
- generate a contributing guide, or
- run the project locally to verify the dev server boots.
