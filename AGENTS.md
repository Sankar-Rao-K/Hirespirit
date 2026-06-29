# Hirespirit — Project Notes

This is the Hirespirit website, built with TanStack Start, React, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework**: TanStack Start (SSR) + TanStack Router (file-based routing)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Animations**: Framer Motion
- **UI primitives**: Radix UI + shadcn/ui components
- **Font**: Space Grotesk (display) + Inter (body) — Google Fonts

## Pages

| Route | File |
|-------|------|
| `/` | `src/routes/index.tsx` |
| `/about` | `src/routes/about.tsx` |
| `/work` | `src/routes/work.tsx` |
| `/plans` | `src/routes/plans.tsx` |
| `/contact` | `src/routes/contact.tsx` |

## Shared components

- `src/components/Navbar.tsx` — sticky navbar with active route underline
- `src/components/Footer.tsx` — 4-column footer
- `src/assets/logo.ts` — embedded base64 logo (no external CDN)

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
