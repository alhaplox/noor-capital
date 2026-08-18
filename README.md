# Noor Capital Frontend Clone — Multi-page Starter

React + Vite frontend starter based on the public Noor Capital information architecture.

## Included

- Multi-page SPA architecture (no backend)
- Language prefixes: `/tr`, `/en`, `/ar`, `/ru`
- Automatic RTL for Arabic
- 47 mapped primary routes across Company, Services, Products, Trading, Learning Hub, Partnership, Support/Legal
- Reusable article/detail route template for Learning Hub detail URLs
- Responsive desktop/tablet/mobile layout
- Contact form with frontend validation
- Shared header/footer and reusable interior-page template

## Example routes

- `/en/about-us`
- `/tr/services/global-financial-advisory`
- `/ar/products/forex-trading`
- `/ru/trading/mt5-platform`
- `/en/learning-hub/news-updates/technical-analysis`
- `/en/learning-hub/media-center/press-release/<article-slug>`

## Run

```bash
npm install
npm run dev
```

## Architecture

`src/data/routes.js` is the route registry. Main sitemap pages are data-driven rather than implemented as dozens of duplicated React files. Learning/news detail URLs are handled by a shared article template.

The current interior pages are structural templates. Pixel-perfect page-specific sections/content can be layered onto these templates family by family (Products, Trading, Learning Hub, etc.).

## Reference-match update
The home-page first fold was retuned against the supplied Noor Capital desktop reference screenshot:
- 1480px desktop content grid
- 36px utility bar + 103px main navigation
- reference-style logo/header actions
- gold hero typography and dotted wave visual
- five hero slider indicators
- market category strip below the hero
- TR / EN / AR / RU routes retained, including RTL for Arabic
