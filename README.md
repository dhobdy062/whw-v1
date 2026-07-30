# Warren Hall Real Estate Website

A responsive personal-brand website for Warren Hall, a Raleigh and Triangle-area
real estate advisor. The site includes seller and buyer pathways, verified
professional proof points, and a written-first **Market Mindset** knowledge hub
designed for search and AI discovery.

## Current release status

This repository is ready for source control and private review. Public launch,
indexing, live lead submission, brokerage disclosures, and final media rights
remain subject to Warren and brokerage approval.

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal. The primary runtime is standard
Next.js so the repository follows Vercel's native `.next` build contract.

## Quality checks

```bash
npm test
npm run lint
npm run build
```

## Upload to GitHub

### GitHub website

1. Create a new empty repository on GitHub.
2. Choose **Add file → Upload files**.
3. Upload the contents of this folder.
4. Commit the uploaded files to the `main` branch.

### Command line

From this folder:

```bash
git init
git add .
git commit -m "Initial Warren Hall website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote with the URL GitHub provides for your repository.

## Project structure

- `app/` — pages, components, content data, metadata, sitemap, and robots rules
- `public/` — approved local website images and social-preview artwork
- `tests/` — content and rendering tests
- `docs/` — approved design specification and implementation plan
- `PRODUCT.md` and `DESIGN.md` — product and design context
- `.impeccable/` — design-system decisions used during implementation

## Hosting notes

The included `.openai/hosting.json` is intentionally neutral and is not linked
to the existing private-review deployment. A hosting provider can create its
own project binding from this repository.

Production metadata defaults to `https://whw-v1.vercel.app`. Set
`NEXT_PUBLIC_SITE_URL` when a final custom domain is approved so canonical URLs,
the sitemap, and social metadata move to that origin.

## Public-launch checklist

- Confirm Warren and brokerage/BIC approval.
- Confirm required Compass, firm, license, and Fair Housing disclosures.
- Retain substantiation for sales-volume, designation, and award claims.
- Confirm publication rights for all portraits, listing media, marks, and logos.
- Connect lead forms to the approved CRM and publish privacy/consent language.
- Replace private-review indexing controls only after the release gate passes.
- Review and resolve the remaining transitive PostCSS and Sharp advisories
  reported by `npm audit` before exposing new server actions, uploads, or
  user-controlled asset processing. Do not apply npm's proposed forced
  downgrade to Next.js 9.3.3.
