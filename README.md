# Hirespirit

Marketing website for **Hirespirit** — a technology partner building websites,
mobile apps, custom software, AI solutions and digital infrastructure for
businesses across every industry.

Live pages: Home, Services, Industries, Packages & Pricing, About, Contact.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

Requires Node.js (or Bun) installed.

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

Other scripts:

```sh
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # lint
npm run format    # format with Prettier
```

## SEO configuration

Before deploying, open `src/lib/site-config.ts` and set `SITE_URL` to your
real domain — it drives every canonical link, Open Graph URL and JSON-LD
`url` field on the site. Then update the same domain in `public/robots.txt`
and `public/sitemap.xml` (static files, so they can't import the constant).

## Project structure

```
src/
  routes/       file-based routes (one file per page)
  components/   Navbar, Footer, shared UI (src/components/ui)
  lib/          site-config (SEO), utils, error reporting
  assets/       logo, images
public/         favicon, og-image, robots.txt, sitemap.xml
```
