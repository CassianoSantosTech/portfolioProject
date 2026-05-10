# cassianosantos.dev

Personal portfolio at <https://cassianosantos-dev.vercel.app>.

Single-page, bilingual (PT-BR / EN), three themes (dark / light / mono).
Editorial layout with sections for hero, about, stack, experience,
recommendations, projects, education, now, and contact.

## Stack

- Next.js 14 — App Router
- TypeScript — strict
- Tailwind CSS — design tokens via CSS variables
- next-intl — i18n routing (`/pt`, `/en`)
- next/font — Newsreader (display) + JetBrains Mono (UI mono); Geist Sans via the `geist` package

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. Root redirects to `/pt` or `/en` based on
`Accept-Language`.

## Build

```bash
npm run build
npm start
```

Produces `/pt` and `/en` as fully prerendered SSG, an Edge-rendered OG image
per locale, plus `/sitemap.xml` and `/robots.txt`.

## Layout

```
src/
├── app/
│   ├── [locale]/         # localized routes: layout, page, opengraph-image
│   ├── globals.css       # design tokens (dark/light/mono + 4 accents)
│   ├── layout.tsx        # root passthrough (next-intl pattern)
│   ├── robots.ts         # /robots.txt
│   └── sitemap.ts        # /sitemap.xml with hreflang
├── components/
│   ├── layout/           # TopBar, Footer, ThemeProvider, SkipLink
│   ├── sections/         # Hero, About, Stack, Experience, Recommendations,
│   │                       Projects, Education, NowBlock, HumanNote, Contact
│   └── ui/               # Section, Chip, LangToggle, ThemeToggle
├── content/              # source of truth for copy: pt.ts, en.ts, types.ts
├── i18n/                 # next-intl routing + request config
├── lib/theme.ts          # theme tokens + inline boot script
├── messages/             # UI strings: pt.json, en.json
└── middleware.ts         # next-intl locale routing
```

## Content

All visible copy lives in `src/content/pt.ts` and `src/content/en.ts`. Both
files conform to the `SiteContent` shape in `src/content/types.ts`. Updates
should mirror across both files.

Short UI labels (nav, toggles, footer) live in `src/messages/{pt,en}.json`.

## Themes

Toggle in the top bar — full segmented pill on desktop, single cycle button
on mobile. Persists in `localStorage`. An inline script in `<head>` applies
the saved theme before hydration to avoid flash.

- `dark` (default)
- `light`
- `mono` — terminal-style, overrides serif/sans to a mono stack

Accent palette: amber (default), sage, slate, terra. Switchable via
`data-accent` on `<html>`.

## Deploy

Hosted on Vercel. Auto-deploys on push to `main`. No environment variables
required.

## Contact

<cassianosantosneto@gmail.com>
