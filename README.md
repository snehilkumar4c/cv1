# Snehil Kumar — Portfolio

Minimal single-page portfolio. Open `index.html` in a browser, or serve the folder with any static host (e.g. GitHub Pages).

- `index.html` — the site (no build step, no dependencies)
- `assets/Snehil_Kumar_Resume.pdf` — downloadable résumé

## Résumé

The PDF is generated from `resume-src/resume.html`. After editing it, rebuild with:

```
node resume-src/build.js
```

(needs the `playwright` package; set `CHROMIUM_PATH` to use a local Chromium)
