# Dodge Landing Page

A single-page React landing site for a Dodge-style car manufacturer, built with Vite. The layout
follows the "Car Manufacturer Landing Page" Wix template structure (hero wordmark, numbered vehicle
rows, about band, updates grid, contact form, newsletter footer) with Dodge branding and copy.

All the markup lives in `src/App.jsx` and all the styling in `src/App.css`. Images are in
`src/assets/` and are AI-generated placeholders — no official Dodge assets are used, and this is a
demo project, not affiliated with Dodge or Stellantis.

## Requirements

Node.js 20.19+ or 22+ (Vite 8 requirement).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
```

## Other scripts

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Sections

| Section  | Component in `src/App.jsx` |
| -------- | -------------------------- |
| Nav bar  | `Header`                   |
| Hero     | `Hero`                     |
| Vehicles | `Vehicles` / `VehicleRow`  |
| About    | `About`                    |
| Updates  | `Updates`                  |
| Contact  | `Contact`                  |
| Footer   | `Footer`                   |

Vehicle and update content is driven by the `VEHICLES` and `UPDATES` arrays at the top of
`src/App.jsx` — edit those to change cars, copy, or images. The contact and newsletter forms are
local-state only; wire them to a backend or form service before using in production.
