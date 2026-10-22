# CLAUDE.md

Context for Claude when working in this repo. For humans, `README.md` has the full tour.

## What this is

A 21-slide interactive web presentation **in Romanian** about spatial evolution and immersion in the Assassin's Creed series (a university project for EGC). It's plain HTML/CSS/JS with **no build step, no dependencies, no package.json**. It must keep working when someone **double-clicks `index.html`** (`file://`).

The people editing it are students, mostly changing the *text and information* on slides. Treat a request like "change the title on slide 8" as an edit in `content/08-lumina.js`, not in the code.

## Layout

```
index.html        page skeleton + <script> tags (ORDER MATTERS)
styles.css        all CSS; color tokens on :root
content/NN-*.js   ALL visible text and data, one file per slide (01–21)
js/core.js        helpers ($, $$, clamp, lerp, rng, rs, HEAD, …), the AC crest, SLIDE[] + slide()
js/widgets/NN-*.js  interactive part of slide NN (same file name as its content file)
js/slides.js      builds the 21 slides: layout templates filled from SLIDE[n]
js/app.js         animated background, slide transition, navigation, #N in the URL
```

Load order in `index.html`: `js/core.js` → `content/01…21` → `js/widgets/*` → `js/slides.js` → `js/app.js`.

**Everything shares one global scope.** These are classic `<script>` files, with no modules and no wrapper function. Two files must never declare the same top-level `const`/`let`/`function` name, and top-level names must not shadow non-configurable window properties (`top`, `location`, `name` and so on). Each file starts with `'use strict';`.

## How content works

Each `content/NN-*.js` file is:

```js
/* SLIDE NN · Title
   …ASCII sketch of the slide, showing where each field appears… */
slide(NN,{
 bara:'NN · Title',   // text in the bottom bar and the transition
 an:2014,             // big faded year in the corner
 supratitlu:'…',      // small line above the title
 titlu:'…',
 subtitlu:'…',
 carduri:[{eticheta:'…', cifra:'…', text:'…', rosu:true}],
 …slide-specific fields, in on-screen order…
});
```

- `slide(n, obj)` stores the object in `SLIDE[n]`. The code reads `SLIDE[n].field`.
- **Field names are Romanian** (`titlu`, `subtitlu`, `carduri`, `eticheta`, `cifra`, `buton`, `nota`, `textDesen` = text drawn on a canvas, …). Keep that convention for new fields.
- **Fields are ordered as they appear on screen** (top to bottom, left to right), and the sketch at the top of the file must match. If you add, move or rename a field, update the sketch too.
- Text may contain `<b>…</b>` and `<em>…</em>`. It is inserted as HTML.
- **Shared data lives in the slide where it appears first:**
  - `SLIDE[5].jocuri`: the 14 games. Also read by the slide 5 chart (`BARS` in `js/slides.js`) and the "Harta francizei" bibliography group (`js/widgets/20-concluzii.js`).
  - `SLIDE[11].elemente`: the 5 Lynch elements. Also read by the bibliography on slide 20.
  - `SLIDE[20].bibliografie` and `SLIDE[20].surse`: a group with `din:'jocuri'|'lynch'|'surse'` is filled automatically from those lists.
- Some fields are kept as notes and never shown on screen (`coloane` in bibliography groups, `detaliu` in Lynch elements). Don't delete them as "dead".
- `cheie` in `content/12-fatada.js` links each text to a part of the SVG (`data-k`). Don't change those values.

## Writing text (Romanian)

- Use proper diacritics with a **comma below**: `ș ț Ș Ț`, never the cedilla forms `ş ţ`. Also `ă â î`.
- Strings use single quotes. For an apostrophe inside text, use the typographic `’`, never a straight `'` (the repo has none).
- Romanian quotes are „…”. Use `–` for ranges ("2007–2012") and a decimal comma ("0,13 km²").
- Keep the tone: short, plain sentences for a student audience.
- km² figures are written by hand in some card texts (slides 1–4 and 6). When you change a number in `SLIDE[5].jocuri`, check those cards too.

## Common tasks

**Change text on a slide:** edit `content/NN-*.js` only.

**Change how a slide looks:** its markup template is the `/* SLIDE NN */` block in `js/slides.js`. Shared templates are `CARD` and `CARDS3`. The styles are in `styles.css`.

**Change how a slide behaves:** `js/widgets/NN-*.js`. The mount function (e.g. `mGI`) runs when the slide is shown. It may return `{tick(dt,t)}` (called every frame) and/or `{off()}` (cleanup when leaving the slide).

**Add, remove or reorder slides.** Slide numbers are hard-coded in several places, so update all of them together:
1. the file names `content/NN-*.js` and `js/widgets/NN-*.js`, plus their `<script>` tags in `index.html`
2. `slide(NN,…)` and the `bara:'NN · …'` label in the content file
3. `meta(NN)` and `SLIDE[NN]` in that slide's block in `js/slides.js`. The `add({...})` calls must stay in slide order, since that order *is* the presentation order.
4. `SLIDE[NN]` inside the widget, and the cross-references: `SLIDE[5]` (in `js/slides.js` and `20-concluzii.js`), `SLIDE[11]` and `SLIDE[20]`
5. the "Slide map" in `README.md`

Search for `SLIDE\[` and `meta(` to find them all.

## Constraints

- **No `fetch`/JSON for content.** It breaks on `file://`, so content stays as `.js` files loaded with `<script>`.
- **No build tools, frameworks or npm packages.** Keep it openable by double-click.
- The fonts load from Google Fonts. External scripts are not used, and shouldn't be added without a reason.
- `aria-label` texts and the page `<title>`/top-bar text live in the markup on purpose, not in `content/`.

## Running and checking

```bash
open index.html
```

To test with a local server (closer to a hosted page):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html#8`. The `#N` opens slide N, and reloading stays on that slide.

After any change:
- Reload and check the browser console for errors. A JS syntax error in any file (often a stray `'` or a missing comma in a content file) blanks the whole presentation.
- A quick syntax check without a browser:

  ```bash
  for f in content/*.js js/*.js js/widgets/*.js; do node -e "new Function(require('fs').readFileSync('$f','utf8'))" || echo "BROKEN: $f"; done
  ```
- For refactors, compare against `main`: render each slide (`index.html#1` … `#21`) in both versions and diff the `section.slide.on` markup. The live counter on slide 10 and the timed chain on slide 17 differ between runs. That's normal.
- In a hidden or background browser tab, `requestAnimationFrame` and CSS animations pause, so slide transitions look stuck and fade-ins look blank. That isn't a bug. Check in a visible tab before concluding something is broken.

## Git

- `main` is what the group presents from. Make changes on a branch, then merge.
- Commit messages are in English, in the imperative ("Add speaker notes to slide 8").
- `.DS_Store` is ignored. Don't commit it.

## Ideas not done yet

See "6. Nice-to-haves" in `README.md`: speaker notes per slide, locally bundled fonts, print/PDF export, and a content check script.
