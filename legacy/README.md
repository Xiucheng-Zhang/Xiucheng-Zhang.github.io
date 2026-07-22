# Legacy sites

## v1-flipbook

The original single-file "page-flip" personal website (pure HTML/CSS/JS), archived
here in full on 2026-07-22 when the site moved to the Next.js version at the repo root.

The folder is fully self-contained — `index.html` references `assets/` and `uploads/`
relatively, so it works as-is.

### To preview it locally

Open `legacy/v1-flipbook/index.html` directly in a browser, or:

```bash
npx serve legacy/v1-flipbook
```

### To restore it as the live site

Copy everything in `legacy/v1-flipbook/` back to the repo root (including the
dotfiles `.nojekyll` and `.well-known/`), remove the Next.js site files, and set
GitHub Pages Source back to "Deploy from a branch" (main, root).

```bash
cp -R legacy/v1-flipbook/. .
```
