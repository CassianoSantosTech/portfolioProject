# Project notes

Personal portfolio for Cassiano Santos. Single-page, bilingual PT/EN,
three themes (dark/light/mono). Next 14 App Router + TypeScript strict +
Tailwind + next-intl.

## Architecture

- Locale routes at `src/app/[locale]/`. The root `src/app/layout.tsx` is a
  passthrough; `<html>`/`<body>` and providers live in `[locale]/layout.tsx`.
- `src/middleware.ts` redirects `/` to `/pt` or `/en` based on
  `Accept-Language`. Locales: `["pt", "en"]`, default `pt`.
- Content of record is `src/content/{pt,en}.ts`, both conforming to
  `SiteContent` in `types.ts`.
- UI strings (nav, toggles, labels) are in `src/messages/{pt,en}.json` and
  consumed via `useTranslations` from next-intl.
- Theme is a `data-theme` attribute on `<html>` plus a `data-accent`
  attribute. Persisted in `localStorage`. Applied by an inline boot script
  (`src/lib/theme.ts`) before hydration.

## Components

Server components by default. The only `"use client"` components are:

- `components/layout/ThemeProvider.tsx`
- `components/sections/Projects.tsx` (expand/collapse state)
- `components/ui/LangToggle.tsx`
- `components/ui/ThemeToggle.tsx`

New sections should use `<Section id number title>` from
`components/ui/Section.tsx` to inherit the editorial 220px | 1fr grid,
section spacing (80px mobile, 120px desktop) and the numbered head.

Tags / badges use `<Chip>` from `components/ui/Chip.tsx`.

## Conventions

### Tone

Sober, direct, confident. Never inflated, never self-deprecating. Avoid
clichés ("passionate about clean code", "constantly learning"). When in
doubt, drop the adjective.

### Em-dashes

Em-dashes (`—`) appear only inside date ranges (`set 2025 — agora`). In
prose, use commas or periods. Em-dashes in prose were explicitly removed
because they read as LLM-written.

### Evergreen copy in About

The About section must not reference the current employer's name, the
current job title, or wording like "X years of experience". Trajectory
specifics (employer, titles, dates) live exclusively in the Experience
section, where they are explicit and dated. About stays positioning-only
so it does not outdate.

### Bilingual updates

When you edit copy in `pt.ts`, mirror the same change in `en.ts`.
TypeScript enforces the shape but not content parity.

### Public assets

Only `public/me-in-vatican.jpeg` is used at the moment. The folder was
swept clean of v1 leftovers; do not introduce orphans.

## Theming details

Tokens live in `src/app/globals.css` under `[data-theme="..."]` and
`[data-accent="..."]` selectors. Tailwind reads them via the `colors`
extend in `tailwind.config.ts` (e.g. `bg-bg-soft`, `text-fg-strong`,
`border-line`). Always prefer the semantic token over a raw hex.

The `mono` theme overrides `--serif` and `--sans` to the mono stack and
removes italic from the recommendation quote (via the `.quote-italic`
class plus a `[data-theme="mono"]` rule in globals).

## Mobile

`md:` is the breakpoint to watch (768px). Patterns to preserve when
editing:

- TopBar: theme toggle becomes a single icon-only cycle button below `md`.
- Projects row toggle: `+` / `−` only, full label on `md+`.
- Section: aside collapses above content on mobile (no sticky).
- Hero: stacks; photo capped at `max-w-[280px]`.

Touch targets aim for ~44px. The 36px buttons (theme cycle, Projects
toggle) are decorative-adjacent (visually compact) but still tappable.

## Commands

```bash
npm run dev         # dev server on :3000
npm run build       # production build
npm run lint        # eslint
npx tsc --noEmit    # type check
```

## Common gotchas

- **HMR error `Cannot find module '_rsc_src_messages_*_json.js'`**: stale
  webpack RSC chunks. Kill the dev process, `rm -rf .next`, restart.
- **i18n config changes**: editing `i18n/request.ts` or `routing.ts` with
  the dev server up usually requires the same `.next` wipe.
- **Image aspect**: `me-in-vatican.jpeg` is square; Hero frame is
  `aspect-[4/5]` with `object-cover` (center crop). If the crop is wrong,
  change the aspect or `object-position` rather than swapping the photo.
- **Adding a section**: update `types.ts` if needed → add content to both
  `pt.ts` and `en.ts` → create `components/sections/X.tsx` (prefer server
  component, wrap with `<Section>`) → mount in `app/[locale]/page.tsx`.

## Deploy

Vercel auto-detects Next 14. No env vars required. Push to `main` and
Vercel builds and promotes. Smoke test the preview before promoting:
`/`, `/pt`, `/en`, theme toggle, lang toggle, Projects expand, OG image.
