# Blindspot

Behavioural bias intervention tool — profile your cognitive biases, then catch them at the moment of decision. Trading + everyday modes.

## Files

- `index.html` — built, self-contained bundle. This is what GitHub Pages serves. No runtime dependencies, works offline.
- `Blindspot.dc.html` — readable source (Claude Design canvas page).
- `support.js` — dc-runtime. Loads React, ReactDOM and Babel from unpkg at runtime and compiles JSX in the browser.
- `blindspot-data.js` — copy and bias definitions for trading + everyday modes.

Edit the source, rebuild, then replace `index.html`. Do not deploy `Blindspot.dc.html` directly — it depends on a CDN and in-browser transpilation.
