# Sage — Developer Portfolio

A data-driven personal portfolio built with React, TypeScript, and React Router.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Before you deploy — replace the placeholders

1. **`src/data/contact.ts`** — real email, GitHub, LinkedIn, Instagram URLs.
2. **`src/data/siteConfig.ts`** — your name, the `availability` status shown in
   the nav, and the site URL/title used for SEO.
3. **`src/data/projects.ts`** — replace or extend with your real projects,
   screenshots (`image`/`gallery`, e.g. `/public/projects/...`), and links.
   Any project field you don't fill in simply won't render (no `github` →
   no Source button; no `image` → a generated placeholder is shown instead).
4. **`public/sitemap.xml`** and **`index.html`** — swap `https://example.com`
   for your real domain, and add an `og:image` once you have a cover image.
5. **`src/components/Contact/ContactForm.tsx`** — currently opens a
   pre-filled email on submit (no fake backend). Swap the marked block for a
   `fetch()` call to a real backend or service (Formspree, Resend, your own
   API route) whenever you're ready.

## Add a new project

Add one object to the `projects` array in `src/data/projects.ts`. That's it —
it automatically appears in the homepage teaser, the `/work` archive (with
filtering), and gets its own page at `/projects/your-slug`. Set
`featured: true` to give it the large editorial treatment (only the first
featured project found gets it).

## Add a new experiment

Add one object to `src/data/experiments.ts`.

## Architecture

```
src/
├── components/   # UI building blocks, each with its own CSS
├── data/         # All editable content — the only files you should need to touch day-to-day
├── pages/        # Home, Work (filterable archive), Project (detail), NotFound
├── hooks/        # useTheme, useReducedMotion, useActiveSection, useDocumentMeta
├── styles/       # Design tokens (CSS custom properties) — colors, type, spacing, motion
└── types/        # Project/Experiment/TechGroup/Timeline type definitions
```

Design tokens (colors, spacing, typography, radius, motion) live in
`src/styles/tokens.css` as CSS variables, with a light-theme override block —
edit there to reskin the whole site consistently. Dark mode is the default
identity; the toggle persists to `localStorage`.

All motion respects `prefers-reduced-motion`.





also if you want the email box messages reaches your actual email make sure to sign in WEB3Forms (it's BaaS of handling the frontEnd messages sent to emails that part of its job) then replace the ENV VITE_WEB3FORMS_ACCESS_KEY with your api_key and your done 
