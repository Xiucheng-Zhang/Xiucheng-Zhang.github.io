# xiucheng-zhang.github.io

Personal academic homepage, built on
[research-website-template](https://github.com/tovacinni/research-website-template)
(Next.js + Tailwind).

## Editing content

All content lives in `src/data/`:

- `aboutme.ts` — name, title, bio, photo, email, CV, and social links
- `publication.ts` — publications (newest first)
- `education.ts` — education entries
- `news.ts` / `experience.ts` / `portfolio.ts` — empty for now; add entries and the sections appear automatically
- `section-order.ts` — section ordering

Static files (photos, PDFs, robots.txt) live in `public/`.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds a static
export (`out/`) and publishes it to GitHub Pages. One-time setup: in the repo's
**Settings → Pages**, set **Source** to **GitHub Actions**.

## Legacy site

The previous single-file "page-flip" site is archived in full at
`legacy/v1-flipbook/` — see `legacy/README.md` for how to preview or restore it.
