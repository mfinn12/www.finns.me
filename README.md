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
firebase deploy   # build and publish by hand (needs the Firebase CLI)
```

## Deploying

GitHub Actions deploys to the `finns-me` Firebase project automatically:

- **Pull requests** get a temporary preview URL, posted as a comment on the PR.
- **Merges to `master`** deploy to the live site.

The workflows are in `.github/workflows/` and use the `FIREBASE_SERVICE_ACCOUNT_FINNS_ME` repository secret.
