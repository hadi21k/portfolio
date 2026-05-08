# Hadi Diab — Portfolio

Source for [hadidiab.com](https://hadidiab.com). Editorial-leaning, warm-paper aesthetic. Built as its own work sample.

## Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, MDX with `gray-matter` frontmatter, GSAP + Lenis (with a `prefers-reduced-motion` fallback). TypeScript strict, pnpm.

## Local development

```bash
nvm use
pnpm install
pnpm dev
```

Dev server runs on `http://localhost:3000`.

## Layout

- `app/` — App Router routes (home, `/work`, `/about`, `/projects/[slug]`)
- `features/` — feature-scoped section components (hero, projects, freelance, work-preview, about-preview, contact)
- `components/` — shared primitives (header, footer, section header, motion provider)
- `content/` — typed metadata and MDX bodies (projects, experience, about, site copy)
- `lib/` — fonts, motion setup, content loader, MDX registry
- `PRODUCT.md`, `DESIGN.md`, `DESIGN.json` — design strategy and visual system
