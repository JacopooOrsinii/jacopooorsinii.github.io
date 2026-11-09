# jacopooorsinii.github.io

Personal website of Jacopo Orsini, built with React and Vite.

## Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- Plain CSS (`src/App.css`), hash-based client-side routing (`src/App.jsx`)

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run lint     # run ESLint
npm run preview  # preview the production build locally
```

## Deployment

The site is deployed automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
to `main`. In the repository settings, **Settings > Pages > Build and
deployment > Source** must be set to **GitHub Actions**.
