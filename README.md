# Animus Keynote: Spatial Evolution and Immersion in Assassin's Creed

An interactive web presentation (in Romanian) about how the Assassin's Creed series evolved spatially, technically and historically from 2007 to 2025. It's 21 slides with animated backgrounds, interactive canvases (crowd simulation, lighting demo, seasons, Lynch map and more) and a bibliography.

Plain HTML, CSS and JavaScript files: no build step, nothing to install. **To change the text, you only need `content.js`.**

---

## How to run it

Double-click `index.html`, or from the terminal:

```bash
open index.html
```

Optionally, you can serve it over a local web server instead of opening the file directly. That works the same way and is closer to how a hosted version would behave:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html>.

**Notes**
- You need an internet connection for the fonts (Archivo, Instrument Sans, JetBrains Mono from Google Fonts). Offline, it falls back to Arial/Menlo. It still works, it just looks a bit different.
- Use a recent Chrome, Edge, Firefox or Safari.
- The sound on slide 13 starts only after you click "Ascultă sunetul", because browsers block autoplay.

### Controls

| Action | How |
|---|---|
| Next slide | `→`, `Space`, `Page Down`, the `→` button at the bottom, or swipe left |
| Previous slide | `←`, `Page Up`, the `←` button, or swipe right |
| First / last slide | `Home` / `End` |
| Jump to any slide | Click a tick in the top bar (desktop width only), or add `#N` to the URL, e.g. `index.html#12` |

The current slide number is kept in the URL, so reloading the page (e.g. after editing a text) stays on the same slide.

---

## Structure

```
index.html          ← the page skeleton; loads everything below, in order
styles.css          ← all the CSS (color tokens are on :root at the top)
content.js          ← ALL the text and data. Edit this one to change information
js/
  core.js           ← small helpers used everywhere, and the AC crest
  widgets/          ← one file per interactive slide (named like its SLIDES entry)
    intro.js  harti.js  atlas.js  lumina.js  anotimpuri.js  multime.js  lynch.js
    fatada.js  verticala.js  straturi.js  atasament.js  minciuni.js  discovery.js  concluzii.js
  slides.js         ← builds the 21 slides from content.js (layout only)
  app.js            ← animated background, slide transition, navigation, URL #slide
```

The files are loaded with plain `<script>` tags, so double-clicking `index.html` still works without a server. **The order of the tags in `index.html` matters:** `content.js` first, `slides.js` and `app.js` last. All files share one global scope, so two files must not declare the same top-level name.

### `content.js` — the data

| Name | What it holds | Where it shows up |
|---|---|---|
| `GAMES` | One entry per game: title, year, location, land/total km², engine, a short description, and the map bars (`maps`) | The bar chart on slide 5 **and** the "Harta francizei" table in the bibliography (slide 20). Change a number once here and both update |
| `SOURCES` | Online sources: `[number, address, description]` | "Alte surse online" in the bibliography |
| `LYNCH` | Kevin Lynch's five elements: name, definition, short and long explanation | Slide 11 **and** the Lynch group in the bibliography, so the definition is written once |
| `BIBLIO` | The bibliography groups, in display order, with title, unit word and rows | The accordion on slide 20 |
| `SLIDES` | The text of **all 21 slides**, one entry per slide (`intro`, `etapa1`, … `final`): label, ghost year, kicker, title, lead, cards, and the texts that only appear after a click or are drawn on a canvas | The slides |

Each list has a comment on top explaining its fields (in Romanian).

### How one slide is defined (in `js/slides.js`)

```js
add({...meta('harti'),  // label + ghost year, from SLIDES.harti
  hue:204,              // accent color hue (the whole UI shifts to it)
  fx:'data',            // background particles: data | dust | petals | spray | leaves | motes
  scene:'grid',         // currently stored but not used for drawing
  html:(c=>`<div class="in">${HEAD(c.kicker,c.title)} …`)(SLIDES.harti), // layout, filled with the texts
  mount:mBars           // optional: the interactive part, from js/widgets/harti.js
});
```

The simple slides use shared templates: `CARDS3` (title, lead, three cards) and `CARD` (one card).

`mount(root)` runs every time the slide is shown. It can return `{tick(dt,t)}`, which is called every frame, and/or `{off()}`, which is called when you leave the slide (for stopping timers or audio).

### Slide map: where to edit the text

All visible text is in `content.js`. The other files only have layout, drawings and code.

| # | Slide | Entry in `content.js` |
|---|---|---|
| 1 | Introducere | `SLIDES.intro` |
| 2 | Etapa 1 · 2007–2012 | `SLIDES.etapa1` |
| 3 | Etapa 2 · 2013–2015 | `SLIDES.etapa2` |
| 4 | Etapa 3 · 2017–2025 | `SLIDES.etapa3` |
| 5 | Cât au crescut hărțile | `SLIDES.harti`; bar names, values and hover texts: `GAMES` |
| 6 | Manual sau automat | `SLIDES.manual` |
| 7 | Teste de noapte | `SLIDES.atlas` |
| 8 | Lumina | `SLIDES.lumina` (the three modes are in `modes`) |
| 9 | Anotimpurile | `SLIDES.anotimpuri` |
| 10 | Mulțimea din Paris | `SLIDES.multime` |
| 11 | Orientarea în oraș | `SLIDES.lynch`; the five elements: `LYNCH` |
| 12 | Fațada | `SLIDES.fatada` (one entry per clickable part in `parts`) |
| 13 | Orașul pe verticală | `SLIDES.verticala` |
| 14 | Sunetul | `SLIDES.sunet` |
| 15 | Orașul și frontiera | `SLIDES.frontiera` |
| 16 | Straturi de istorie | `SLIDES.straturi` |
| 17 | Atașamentul | `SLIDES.atasament` |
| 18 | Minciuni utile | `SLIDES.minciuni` (front and back of each card) |
| 19 | Discovery Tour | `SLIDES.discovery` |
| 20 | Concluzii + bibliografie | `SLIDES.concluzii`; the bibliography: `BIBLIO`, `GAMES`, `LYNCH`, `SOURCES` |
| 21 | Mulțumesc | `SLIDES.final` |

Not moved, on purpose: the page title and top-bar text (in `index.html`), and the `aria-label` descriptions for screen readers (in `js/slides.js`).

**Rules for editing `content.js`:** text goes between single quotes `'...'`. For an apostrophe inside the text, use the typographic `’` (the file already does everywhere) or write `\'`. Don't delete the commas between entries. You may use `<b>…</b>` and `<em>…</em>` in texts. After an edit, reload the page (it stays on the same slide) and check the browser console (`Cmd+Option+J`) for errors.

---

## What we could change about this

These are the proposals, ordered roughly by how much they help a team edit the content. Steps 1–3 are done.

### 1. Quick wins — ✅ done

- ~~Rename `cod egc.txt` to `index.html`~~, so it opens directly in a browser and editors give HTML/JS syntax highlighting.
- ~~Add a `.gitignore` with `.DS_Store`~~ and stop tracking the existing `.DS_Store`.
- ~~Remember the current slide in the URL~~ (`index.html#12`), so reloading stays on the slide you're editing.

### 2. Separate the content from the code — ✅ done

- All text and data are in `content.js` (see [Structure](#structure)).
- The CSS is in `styles.css`, and the code is split into `js/core.js`, one file per interactive slide in `js/widgets/`, `js/slides.js` and `js/app.js`. `index.html` is just the page skeleton.
- The simple slides share templates (`CARD`, `CARDS3`), so a card's markup is written once.
- `content.js` is a `.js` file loaded with a `<script>` tag, not JSON loaded with `fetch`, because browsers block `fetch` on pages opened by double-click (`file://`).

### 3. One source of truth for numbers — 🟡 mostly done

- ✅ Each game's data (year, location, km², engine, description, chart bars) is in one `GAMES` entry, feeding both slide 5 and the bibliography table.
- ✅ The Lynch definitions are in one `LYNCH` list, feeding both slide 11 and the bibliography.
- ✅ The duplicated copy of the online sources inside the industry group is gone.
- ⬜ Still written by hand: the km² figures in the card texts on slides 1–4 and 6 (e.g. „0,13 – 1,41 km²”) and the slide 1 canvas label. They now sit in `content.js` right next to each other, so they are easy to check against `GAMES`, but they don't update automatically. Making them automatic would mean writing the card numbers as formulas, which is harder to edit, so this is probably not worth it.

### 4. Make it safe for several people to work at once

- Code is now one file per interactive slide, so two people changing different slides' behavior won't conflict. All text is still in one `content.js`. Git handles edits to *different lines* of the same file fine, so conflicts only happen when two people change the same slide at once. If that becomes a problem, `content.js` could be split per slide too.
- Work on a short-lived branch per change and open a pull request, so someone can review the text before it reaches `main`.
- ✅ The "Slide map" and "Rules for editing" above cover how to edit a slide.

### 5. Clean up leftover and dead code

It's not urgent, but this makes the files shorter and less confusing for new readers:
- **Unused CSS** in `styles.css`: a teleprompter panel (`.prompt`, `.pbody`, `.ptool`), a slide index overlay (`#idx`), tables and tabs (`.tw`, `table`, `.tabs`, `input.s`). None of these have matching elements in the page.
- **`.crest-badge`** is rendered on many cards but hidden with `display:none!important`.
- **`EAGLE_SVG`, `COMPASS_SVG` and `EYE_SVG`** are identical copies of `CREST_SVG`.
- The `scene` field on every slide is stored but never used.
- The `cols` headers in `BIBLIO` and the `detail` texts in `LYNCH` are never shown (they're kept as notes).
- Small oddities: the stray `x_arc:` label in `js/app.js`, and a no-op `ctx.moveTo(c.height*2, …)` in `js/widgets/lumina.js`.

### 6. Nice-to-haves

- **Speaker notes:** a `notes` field per slide, shown on a key press (`N`). The leftover `.prompt` teleprompter CSS suggests this existed once.
- **Bundle the fonts locally** (a `fonts/` folder) so the presentation looks the same without Wi-Fi in the classroom.
- **Print/PDF export** (one slide per page via `@media print`) as a backup if the projector computer has trouble with the animations.
- **A tiny check script** (a few lines of Node) that loads `content.js` and flags missing fields or broken slides before you present.

### Suggested order

1 → 2 → 3 are done. Changing a sentence now means editing one line in `content.js` and reloading the page, which stays on the same slide. Next: 5 (cleanup), then 6 if wanted.
