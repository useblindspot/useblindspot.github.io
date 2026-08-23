# Blindspot

Behavioural bias intervention tool — profile your cognitive biases, then catch them at the moment of decision. Trading + everyday modes.

## Files

- `index.html` — built, self-contained bundle. This is what GitHub Pages serves. No runtime dependencies, works offline.
- `Blindspot.dc.html` — readable source (Claude Design canvas page).
- `support.js` — dc-runtime. Loads React, ReactDOM and Babel from unpkg at runtime and compiles JSX in the browser.
- `blindspot-data.js` — copy and bias definitions for trading + everyday modes.
- `privacy.html`, `terms.html` — static pages, not part of the design canvas. Edit directly.

## Data collection

Opt-in and off by default. If a user ticks the consent box and answers the post-result
follow-up, four fields are sent to a Google Apps Script endpoint: mode, six bias scores,
experience level, and the follow-up answer. Nothing the user writes is ever transmitted.

Trading biases are `LA FOMO OC RB AN HD`; everyday are `SC SQ OC SP AN PB`. They are
different scales and must not be merged — responses land in separate sheet tabs.

Edit the source, rebuild, then replace `index.html`. Do not deploy `Blindspot.dc.html` directly — it depends on a CDN and in-browser transpilation.
