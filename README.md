# Project websites

This repository hosts project pages only. There is no personal homepage at the root URL.

## AlphaAnything

- [Project page](https://wluli.github.io/AlphaAnything/)
- [Research repository](https://github.com/WLuLi/AlphaAnything)
- Website files and demonstration assets: [AlphaAnything/](AlphaAnything/)

The website displays precomputed research results.

## Hosting

GitHub Pages serves the **master** branch from the repository root. The **.nojekyll** file keeps the site static; no build step is required.

The old personal website has been removed from the current files. Its history is retained in Git.

## Local preview

Run from this repository:

    node scripts/serve.mjs --port=8770

Open [http://127.0.0.1:8770/AlphaAnything/](http://127.0.0.1:8770/AlphaAnything/). The root URL intentionally returns 404.
