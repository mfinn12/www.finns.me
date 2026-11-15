# finns.me

Personal site for Michael Finn, built with [Astro](https://astro.build) and Tailwind CSS and hosted on Firebase Hosting.

## Editing content

- **Text, roles, services, social links:** `src/data/site.ts`
- **Portfolio pieces:** `src/data/portfolio.ts` (PDFs go in `public/docs`, preview images in `public/images/portfolio`)
- **Page sections:** `src/components/`

## Commands

```bash
npm install       # first time only
npm run dev       # local preview at http://localhost:4321
npm run build     # build the site into dist/
firebase deploy   # build and publish (needs the Firebase CLI)
```
