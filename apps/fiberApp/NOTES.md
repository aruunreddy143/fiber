Esri integration notes
=====================

What changed
------------

- Added `esri-loader` dependency to `package.json`.
- Added `app/components/EsriMap.tsx` which uses `esri-loader` to load the ArcGIS API and render a MapView.
- Wired the `EsriMap` component into `app/app.tsx`.

How to run locally
------------------

1. Open a terminal in the workspace and run:

```powershell
cd apps/fiberApp
npm install
npm run dev
```

2. Open the dev server URL shown by Vite (usually http://localhost:5173) to see the map.

Notes and caveats
-----------------

- This project uses TypeScript. After installing `esri-loader`, you may see type complaints because the ArcGIS JS API typings are not included by default. You can add `@types/arcgis-js-api` or use `skipLibCheck`/`declare` files if needed.
- The component uses CDN-hosted ArcGIS JS API via `esri-loader` so no build-time bundling of the API is required.
