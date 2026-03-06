# Claude Code Guidelines — Vědomě.cz

## Project overview
Czech wellness/nutrition coaching website. Next.js 15 App Router, React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui (New York style).

## Commands
```bash
npm run dev          # dev server (Turbopack)
npm run build        # production build (Turbopack)
npm run lint         # ESLint check
npm run type-check   # TypeScript check
npm run format       # Prettier format
```

## Project structure
```
src/
  app/                  # Next.js App Router pages + globals
    globals.css         # Tailwind theme, CSS variables, base styles
    layout.tsx          # Root layout — fonts on <html>, not <body>
    page.tsx            # Homepage /
    cenik/page.tsx      # /cenik
    sluzby/page.tsx     # /sluzby
    medailonky/page.tsx # /medailonky (O nas)
    kontakty/page.tsx   # /kontakty
  components/
    ui/                 # shadcn/ui primitives (Button, ...)
    layout/             # HeaderNav, Footer, MainHero, SmallHero
    basics/             # SocialIcon, ...
  lib/
    font.ts             # All font definitions + fontVariables export
    utils.ts            # cn() helper (clsx + tailwind-merge)
```

## Font setup — IMPORTANT
- All fonts defined in `src/lib/font.ts`, exported as `fontVariables` (cn-merged class string)
- `fontVariables` MUST be applied to `<html>`, NOT `<body>` — Next.js injects CSS variables onto the element that has the font class; `globals.css` reads `--font-frank-ruhl-libre` on the `html` element, so it must be available there
- Primary font: **Frank Ruhl Libre** (`--font-frank-ruhl-libre`), set as default on `html` in `globals.css`
- To register a new Tailwind font utility, add `--font-<name>: var(--font-<name>)` inside `@theme inline` in `globals.css`
- Do NOT apply `font-sans` or any other font utility class to `<body>` — it overrides the Frank Ruhl default

## Styling conventions
- **Tailwind v4** — no `tailwind.config.ts`; all theme config lives in `globals.css` via `@theme inline`
- CSS design tokens in `:root` in `globals.css` (colors, radius, sidebar vars)
- Color palette: primary `#6b705c`, secondary `#c58c6d`, accent `#956165`, bg-secondary `#f1e3d3`
- Icon library: **lucide-react** (per `components.json`)
- shadcn/ui style: **new-york**, CSS variables enabled, alias `@/components/ui`
- Always use `cn()` from `@/lib/utils` for conditional/merged Tailwind class names

## Code conventions
- **Single quotes**, semicolons, trailing commas (es5), 2-space indent, 100-char line width
- Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss` — run `npm run format`
- Path alias: `@/*` maps to `src/*`
- TypeScript **strict mode** — no `any`, unused vars prefixed with `_` to suppress ESLint
- Pages: **default export** (`export default function PageName()`)
- Layout/basics components: **named export** (`export function ComponentName()`)
- shadcn/ui components follow their own pattern (named export + variants)
- Add `'use client'` only when using hooks or browser events; pages/layout are Server Components by default

## Component patterns
- `SmallHero`: accepts `{ title: string; imagePath: string }`, used on inner pages below HeaderNav
- `SocialIcon`: wrapper `<a>` for social/contact icon links, accepts `href` + `children`
- `HeaderNav`: client component — scroll-aware background + mobile drawer menu
- New shadcn components: `npx shadcn@latest add <component>` — outputs to `src/components/ui/`

## Routes
| URL | Page component | Czech label |
|-----|---------------|-------------|
| `/` | `app/page.tsx` | Uvod |
| `/medailonky` | `app/medailonky/page.tsx` | O nas |
| `/sluzby` | `app/sluzby/page.tsx` | Sluzby |
| `/cenik` | `app/cenik/page.tsx` | Cenik |
| `/kontakty` | `app/kontakty/page.tsx` | Kontakty |
