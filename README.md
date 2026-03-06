# Vědomě.cz

Web aplikace pro wellness a nutriční poradenství. Postaveno na Next.js 15 s App Routerem.

## Tech stack

| Technologie | Verze | Účel |
|-------------|-------|------|
| Next.js | 15 | Framework (App Router, SSR) |
| React | 19 | UI |
| TypeScript | 5 | Typová bezpečnost |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | new-york | UI komponenty |
| lucide-react | latest | Ikony |
| Turbopack | bundled | Dev/build bundler |

## Začínáme

```bash
npm install
npm run dev
```

Aplikace běží na [http://localhost:3000](http://localhost:3000).

## Skripty

```bash
npm run dev          # vývojový server (Turbopack)
npm run build        # produkční build (Turbopack)
npm run start        # spuštění produkčního buildu
npm run lint         # ESLint kontrola
npm run lint:fix     # ESLint s automatickými opravami
npm run type-check   # TypeScript kontrola bez kompilace
npm run format       # Prettier formátování všech souborů
```

## Struktura projektu

```
src/
  app/
    globals.css         # Tailwind @theme, CSS proměnné, base styly
    layout.tsx          # Root layout (fonty, HeaderNav, Footer)
    page.tsx            # Úvod /
    cenik/page.tsx      # /cenik
    sluzby/page.tsx     # /sluzby
    medailonky/page.tsx # /medailonky — O nás
    kontakty/page.tsx   # /kontakty
  components/
    ui/                 # shadcn/ui primitivy (Button, ...)
    layout/             # HeaderNav, Footer, MainHero, SmallHero
    basics/             # SocialIcon, ...
  lib/
    font.ts             # Definice fontů + export fontVariables
    utils.ts            # cn() — clsx + tailwind-merge
```

## Konvence kódu

### TypeScript
- Strict mode je zapnutý — žádné `any`
- Nepoužívané proměnné s prefixem `_` (např. `_unusedParam`)
- Path alias: `@/*` → `src/*`

### Komponenty
- **Stránky** (`app/**/page.tsx`): default export
- **Layout/basics komponenty**: named export
- `'use client'` přidávej pouze pokud komponenta používá hooky nebo browser eventy; ostatní jsou Server Components

### Styling
- Tailwind v4 — konfigurace pouze v `globals.css` (`@theme inline`), žádný `tailwind.config.ts`
- CSS design tokeny definovány v `:root` v `globals.css`
- Vždy používej `cn()` z `@/lib/utils` pro podmíněné a slučované třídy
- Prettier automaticky třídí Tailwind třídy (`prettier-plugin-tailwindcss`) — spusť `npm run format` před commitem

### Formátování (Prettier)
- Single quotes `'`
- Středník na konci
- Trailing comma: `es5`
- Tab width: 2 mezery
- Print width: 100 znaků

## Fonty

Všechny fonty jsou definovány v `src/lib/font.ts` a načítány přes `next/font/google`. Exportují se jako jeden řetězec tříd `fontVariables`, který se aplikuje na element `<html>` v `layout.tsx`.

**Primární font**: Frank Ruhl Libre — nastaven jako výchozí na `html` elementu v `globals.css`.

> **Důležité**: `fontVariables` musí být na `<html>`, ne na `<body>`. Next.js injektuje CSS proměnné fontů na element s danou třídou — pokud by byl na `<body>`, `html` element by k nim neměl přístup.

## Přidávání shadcn/ui komponent

```bash
npx shadcn@latest add <nazev-komponenty>
```

Komponenty se ukládají do `src/components/ui/`.

## Barevná paleta

| Token | Hodnota | Použití |
|-------|---------|---------|
| `primary` | `#6b705c` | Hlavní barva (zelená) |
| `secondary` | `#c58c6d` | Sekundární (terakota) |
| `accent` | `#956165` | Akcent (červenohnědá) |
| `bg-secondary` | `#f1e3d3` | Světlé pozadí |
