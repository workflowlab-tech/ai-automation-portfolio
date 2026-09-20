# AI Automation Portfolio

Portfolio site for Mary Joyce Ablanque — AI Automation Specialist | Finance, E-Commerce & Business Process Automation.

Built with Next.js (App Router) + TypeScript + Tailwind CSS 4.

## Structure

- `app/page.tsx` — homepage: text-first hero, Idol Fairies flagship, project preview, About preview, and contact CTA
- `app/idol-fairies/page.tsx` — Idol Fairies case study: honesty disclosure, proof banner, system diagram, and 8 solution-area tabs (business-facing main layer + collapsible technical layer)
- `app/projects/page.tsx` — standalone project index using the large one-project-per-row format
- `app/projects/[slug]/page.tsx` — long-form standalone project detail pages
- `components/AboutSection.tsx` — homepage About section and the only place that uses MJ's portrait
- `app/about/page.tsx` — compatibility redirect to the homepage `#about` section
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

## Environment variables

| Variable | Required | What it does |
| --- | --- | --- |
| `N8N_CHAT_WEBHOOK_URL` | For the chat widget | n8n webhook the `/api/chat` route proxies to |
| `DISCOVERY_WEBHOOK_URL` | For the contact page booking form | GHL inbound webhook (or n8n webhook) that `/api/discovery` forwards discovery-call requests to. Never exposed to the client; if unset, the API returns an error instead of silently dropping the lead. |

Set these in `.env.local` for local dev, and in the Vercel project's environment variables for production.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
