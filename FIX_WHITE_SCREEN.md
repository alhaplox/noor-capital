# White screen fix

This build pins React 18.3.1 + Vite 5.4.19 for broader Node compatibility, adds an explicit Vite SPA configuration, fixes internal link click handling, replaces unsupported `scrollTo` behavior, and adds a visible render-error boundary.

Recommended clean start:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Then open the exact URL printed by Vite, followed by `/en`.
