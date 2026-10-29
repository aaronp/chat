# Circle chat — live prototype — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Contents

- `Main.dc.html` — the artboard (a Design Component: an `<x-dc>`
  template + a small logic class). The values to replicate live in its
  inline `style="…"` attributes and the `<helmet><style>` block.
- `support.js`, `vendor/react*.js` — the runtime that renders the
  component in a browser; not part of the design.

## Viewing

`make dev` serves the folder and prints the URL (some browsers block the
scripts over file://). `make test` checks the address-bar helpers.

The address bar carries the UI state, so links can open a given view:
`?menu=display|room|topic|message`, `?history=closed`,
`?theme=campfire|daylight|ink`. Opening a menu is a history entry (Back
closes it); the theme and drawer replace the current entry.

## Publishing

`.github/workflows/pages.yml` publishes the folder to GitHub Pages on push
to `main`/`master`, with `Main.dc.html` as the index. One-time setup:
Settings → Pages → Source: "GitHub Actions".
