# AI Automation Portfolio

Portfolio site for Mary Joyce Ablanque — AI Automation Specialist | Finance & E-commerce Systems.

Built with Next.js (App Router) + TypeScript + Tailwind CSS 4.

## Structure

- `app/page.tsx` — homepage: text-first hero, Idol Fairies flagship, project preview, About preview, and contact CTA
- `app/idol-fairies/page.tsx` — Idol Fairies case study: honesty disclosure, proof banner, system diagram, and 8 solution-area tabs (business-facing main layer + collapsible technical layer)
- `app/projects/page.tsx` — standalone project index using the large one-project-per-row format
- `app/projects/[slug]/page.tsx` — long-form standalone project detail pages
- `app/about/page.tsx` — business background and credentials; the only page that uses MJ's portrait
- `app/contact/page.tsx` — contact page
- `components/` — shared UI (Nav, Footer, Hero, SystemDiagram, SolutionAreaTabs, ScreenshotGallery, ChatWidgetPlaceholder, etc.)
- `data/` — site copy and case study content, kept separate from presentation
- `public/screenshots/admin/` — real Idol Fairies admin dashboard screenshots
- `public/documents/` — resume + certificates

## Content source of truth

The current rebuild follows `MJ_Portfolio_Full_Rebuild_Implementation_Brief_FINAL.docx` in the
workspace root. Idol Fairies content remains in `data/caseStudy.ts`; standalone project content
is maintained in `data/projects.ts`.

## Current project scope

Idol Fairies is the flagship project. Personal Income & Expense Automation is the only standalone
project included in this rebuild, using real workflow screenshots, outputs, and a demo recording.

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
