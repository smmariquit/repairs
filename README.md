# repairs.stimmie.dev

Marketing site for cellphone repair and laptop cleaning services.

Live: [repairs.stimmie.dev](https://repairs.stimmie.dev)

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
src/
├── app/                # Next.js app router (layout, page, robots, sitemap)
├── components/         # UI sections (Hero, Services, Pricing, etc.)
└── lib/site.ts         # Single source of truth for site copy & contact info
```

To customize the site, start by editing `src/lib/site.ts` (name, contact info,
socials) and then tweak individual section components under `src/components/`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — create a production build
- `npm run start` — run the production build
- `npm run lint` — lint the codebase

## Deployment

Pushes to `main` are auto-deployed by Vercel. The site is configured to serve
from the `repairs.stimmie.dev` custom domain.
