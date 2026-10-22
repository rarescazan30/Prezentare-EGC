# Animus Keynote: Spatial Evolution and Immersion in Assassin's Creed

An interactive web presentation (in Romanian) about how the Assassin's Creed series evolved spatially, technically and historically from 2007 to 2025. It's 21 slides with animated backgrounds, interactive canvases (crowd simulation, lighting demo, seasons, Lynch map and more) and a bibliography.

Plain HTML, CSS and JavaScript files: no build step, nothing to install. **To change the text, open the file for that slide in `content/`.**

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
content/            ← ALL the text and data, one file per slide
  01-introducere.js
  02-etapa-1.js
  …
  21-multumesc.js
js/
  core.js           ← small helpers used everywhere, the AC crest, and slide(n,{…})
  widgets/          ← the interactive part of a slide, same name as its content file
    05-cat-au-crescut-hartile.js, 08-lumina.js, 11-orientarea-in-oras.js, …
  slides.js         ← builds the 21 slides from content/ (layout only)
  app.js            ← animated background, slide transition, navigation, URL #slide
```

So everything about slide 8 is in `content/08-lumina.js` (what it says) and `js/widgets/08-lumina.js` (how it moves). Slides without interaction only have the content file.

The files are loaded with plain `<script>` tags, so double-clicking `index.html` still works without a server. **The order of the tags in `index.html` matters:** `js/core.js` first, then `content/`, then the widgets, then `js/slides.js` and `js/app.js` last. All files share one global scope, so two files must not declare the same top-level name.

### A content file

Each file in `content/` starts with a small sketch of the slide showing where each field appears, then the fields in the order you see them on screen (top to bottom, left to right). For example `content/02-etapa-1.js`:

```js
/* SLIDE 2 · Etapa 1
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
   │ │ eticheta     │ │ eticheta     │ │ eticheta     │
   │ │ CIFRA        │ │ CIFRA        │ │ CIFRA        │   ← carduri[0], [1], [2]
   │ │ text         │ │ text         │ │ text         │
   │ └──────────────┘ └──────────────┘ └──────────────┘
   └ */
slide(2,{
 bara:'02 · Etapa 1',
 an:2009,
 supratitlu:'Etapa 1 · 2007–2012',
 titlu:'Orașe mici și dense, făcute pentru parkour',
 subtitlu:'Primele jocuri aveau orașe mici, …',
 carduri:[
  {eticheta:'Dimensiune', cifra:'0,13 – 1,41 km²',
   text:'Damascul din primul joc avea doar 0,13 km², …'},
  …
 ]
});
```

Field names are in Romanian and shared across slides: `bara` (text in the bottom bar), `an` (the big faded year), `supratitlu`, `titlu`, `subtitlu`, `carduri` (`eticheta`, `cifra`, `text`, `rosu`), `buton`, `nota`. Interactive slides have extra fields named after what they show (`butonReda`, `textDesen`, `moduri`, …), and the sketch says where each one goes.

**Data used on two slides lives in the slide where it appears first:**
- `jocuri` (the 14 games: title, year, location, km², engine, chart bars) is in `05-cat-au-crescut-hartile.js`. The "Harta francizei" table on slide 20 reads it from there.
- `elemente` (Kevin Lynch's five elements) is in `11-orientarea-in-oras.js`. The Lynch group on slide 20 reads it from there.
- `bibliografie` and `surse` are in `20-concluzii.js`.

Each of these has a note at the top of its file saying where else it shows up.

### How a slide is put together (in `js/slides.js`)

```js
add({...meta(5),        // bara + an, from content/05-…
  hue:204,              // accent color hue (the whole UI shifts to it)
  html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)} …`)(SLIDE[5]), // layout, filled with the texts
  mount:mBars           // optional: the interactive part, from js/widgets/05-…
});
```

The simple slides use shared templates: `CARDS3` (title, subtitle, three cards) and `CARD` (one card).

`mount(root)` runs every time the slide is shown. It can return `{tick(dt,t)}`, which is called every frame, and/or `{off()}`, which is called when you leave the slide (for stopping timers or audio).

Not moved, on purpose: the page title and top-bar text (in `index.html`), and the `aria-label` descriptions for screen readers (in `js/slides.js`).

**Rules for editing `content/`:** text goes between single quotes `'...'`. For an apostrophe inside the text, use the typographic `’` (the file already does everywhere) or write `\'`. Don't delete the commas between entries. You may use `<b>…</b>` and `<em>…</em>` in texts. After an edit, reload the page (it stays on the same slide) and check the browser console (`Cmd+Option+J`) for errors.

---

## What we could change about this

These are the proposals, ordered roughly by how much they help a team edit the content. Steps 1–5 are done.

### 1. Quick wins — ✅ done

- ~~Rename `cod egc.txt` to `index.html`~~, so it opens directly in a browser and editors give HTML/JS syntax highlighting.
- ~~Add a `.gitignore` with `.DS_Store`~~ and stop tracking the existing `.DS_Store`.
- ~~Remember the current slide in the URL~~ (`index.html#12`), so reloading stays on the slide you're editing.

### 2. Separate the content from the code — ✅ done

- All text and data are in `content/`, one file per slide (see [Structure](#structure)).
- The CSS is in `styles.css`, and the code is split into `js/core.js`, one file per interactive slide in `js/widgets/`, `js/slides.js` and `js/app.js`. `index.html` is just the page skeleton.
- The simple slides share templates (`CARD`, `CARDS3`), so a card's markup is written once.
- The content files are `.js` files loaded with `<script>` tags, not JSON loaded with `fetch`, because browsers block `fetch` on pages opened by double-click (`file://`).

### 3. One source of truth for numbers — 🟡 mostly done

- ✅ Each game's data (year, location, km², engine, description, chart bars) is in one `jocuri` entry (in `content/05-…`), feeding both slide 5 and the bibliography table.
- ✅ The Lynch definitions are in one `elemente` list (in `content/11-…`), feeding both slide 11 and the bibliography.
- ✅ The duplicated copy of the online sources inside the industry group is gone.
- ⬜ Still written by hand: the km² figures in the card texts on slides 1–4 and 6 (e.g. „0,13 – 1,41 km²”) and the slide 1 canvas label. They sit in the slide files right next to the text, so they are easy to check against `jocuri` in slide 5, but they don't update automatically. Making them automatic would mean writing the card numbers as formulas, which is harder to edit, so this is probably not worth it.

### 4. Make it safe for several people to work at once

- ✅ Text and code are both one file per slide, so two people editing different slides never touch the same file and never get a git conflict.
- Work on a short-lived branch per change and open a pull request, so someone can review the text before it reaches `main`.
- ✅ The "Slide map" and "Rules for editing" above cover how to edit a slide.

### 5. Clean up leftover and dead code — ✅ done

- Removed 47 unused CSS rules (an old teleprompter panel, a slide index overlay, table/tab/chip/ring styles) and trimmed dead selectors from 4 more. `styles.css` went from 369 to 294 lines.
- Removed the card badges that were always hidden, the three duplicate crest icons, the unused `scene` field, the stray `x_arc:` label and a line that did nothing in the lighting slide.
- Kept on purpose: the `coloane` headers in `bibliografie` and the `detaliu` texts in `elemente`. They aren't shown on screen, but they're content from the original paper and useful as notes.

### 6. Nice-to-haves

- **Speaker notes:** a `notes` field per slide, shown on a key press (`N`). The leftover `.prompt` teleprompter CSS suggests this existed once.
- **Bundle the fonts locally** (a `fonts/` folder) so the presentation looks the same without Wi-Fi in the classroom.
- **Print/PDF export** (one slide per page via `@media print`) as a backup if the projector computer has trouble with the animations.
- **A tiny check script** (a few lines of Node) that loads `content/` and flags missing fields or broken slides before you present.

### Suggested order

Steps 1–5 are done. Changing a sentence now means editing one line in that slide's file in `content/` and reloading the page, which stays on the same slide. Next: step 6, if wanted.
