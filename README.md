# AI Automation Portfolio

Portfolio site for Mary Joyce Ablanque — AI Automation Specialist | Finance & E-commerce Systems.

Built with Next.js (App Router) + TypeScript + Tailwind CSS 4.

## Structure

- `app/page.tsx` — homepage: hero, service categories, Idol Fairies flagship teaser, about/credentials, contact CTA
- `app/idol-fairies/page.tsx` — Idol Fairies case study: honesty disclosure, proof banner, system diagram, and 8 solution-area tabs (business-facing main layer + collapsible technical layer)
- `app/contact/page.tsx` — contact page
- `components/` — shared UI (Nav, Footer, Hero, SystemDiagram, SolutionAreaTabs, ScreenshotGallery, ChatWidgetPlaceholder, etc.)
- `data/` — site copy and case study content, kept separate from presentation
- `public/screenshots/admin/` — real Idol Fairies admin dashboard screenshots
- `public/documents/` — resume + certificates

## Content source of truth

Case study copy is pulled directly from `Idol_Fairies_Case_Study_Content.docx` and
`Compiled_Portfolio_Brief.docx` (in the parent `AI Automation Portfolio/` folder) — see
`data/caseStudy.ts` to edit it.

## Intentional placeholders

The AI portfolio assistant, automation diagnostic, AI avatar, and demo-video generation are
out of scope for this build. `components/ChatWidgetPlaceholder.tsx` and the "Screenshot coming
soon" cards in the case study are built so those can be wired in later without a redesign.

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
