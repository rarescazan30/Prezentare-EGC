# Cum își construiește Assassin’s Creed orașele

An interactive web presentation (in Romanian) for the EGC course: how the environments of the Assassin's Creed series evolved from 2007 to 2025, and how game developers build those cities. It's 16 slides in 3 parts (one per speaker), with a few interactive demos (map sizes, a district built from instanced pieces, nightly map tests, lighting, crowds) and slots for screenshots from the games.

- **`PLAN-PREZENTARE.md`**: the plan (in Romanian): who presents what, what to say on each slide, the screenshots to add, what to verify.
- **`REVIZUIRE.md`** and **`sugestiile_mele.md`**: the reviews that led to the current version.

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
content/            ← ALL the text and data, one file per slide (01–16)
img/                ← screenshots from the games (see "Adding screenshots")
js/
  core.js           ← small helpers used everywhere, the AC crest, and slide(n,{…})
  widgets/          ← the interactive part of a slide, same name as its content file
  slides.js         ← builds the 16 slides from content/ (layout only)
  app.js            ← background, slide transition, navigation, URL #slide
```

So everything about slide 11 is in `content/11-lumina.js` (what it says) and `js/widgets/11-lumina.js` (how it moves). Slides without interaction only have the content file.

The files are loaded with plain `<script>` tags, so double-clicking `index.html` still works without a server. **The order of the tags in `index.html` matters:** `js/core.js` first, then `content/`, then the widgets, then `js/slides.js` and `js/app.js` last. All files share one global scope, so two files must not declare the same top-level name.

### Slide map

| # | Part · speaker | Slide | Content file | Interactive part |
|---|---|---|---|---|
| 1 | Intro | Cum își construiește Assassin’s Creed orașele | `01-introducere.js` | decorative canvas |
| 2 | 1 · Vorbitor 1 | La început: orașe mici (2007–2012) | `02-orase-mici.js` | — |
| 3 | 1 · Vorbitor 1 | Marea deschisă și orașe la scară reală (2013–2015) | `03-mare-si-orase-reale.js` | — |
| 4 | 1 · Vorbitor 1 | Țări întregi și o întoarcere la oraș (2017–2025) | `04-tari-intregi.js` | — |
| 5 | 1 · Vorbitor 1 | Cât de mult au crescut hărțile | `05-cat-au-crescut-hartile.js` | bar chart (linear scale) |
| 6 | 2 · Vorbitor 2 | Un oraș se construiește din piese | `06-piese-si-instante.js` | district built from 3 instanced pieces |
| 7 | 2 · Vorbitor 2 | De mână sau după reguli | `07-manual-sau-reguli.js` | — |
| 8 | 2 · Vorbitor 2 | Teste de noapte | `08-teste-de-noapte.js` | simulated nightly map test |
| 9 | 2 · Vorbitor 2 | Cum te orientezi fără hartă | `09-cum-te-orientezi.js` | — |
| 10 | 2 · Vorbitor 2 | Pe ce te poți cățăra și de ce | `10-pe-ce-te-cateri.js` | static facade drawing |
| 11 | 3 · Vorbitor 3 | Cum se luminează o lume mare | `11-lumina.js` | lighting room, 3 modes |
| 12 | 3 · Vorbitor 3 | Zi, noapte, vreme, anotimpuri | `12-zi-noapte-anotimpuri.js` | — |
| 13 | 3 · Vorbitor 3 | Mii de oameni, câteva zeci „gândesc” | `13-multimea-din-paris.js` | crowd / level-of-detail simulation |
| 14 | 3 · Vorbitor 3 | Orașul din joc nu e cel real | `14-orasul-din-joc-nu-e-cel-real.js` | flip cards |
| 15 | Final | Ce am învățat + bibliografie | `15-concluzii.js` | bibliography accordion |
| 16 | Final | Mulțumim | `16-multumim.js` | — |

### A content file

Each file in `content/` starts with a small sketch of the slide showing where each field appears, then the fields in the order you see them on screen (top to bottom, left to right). For example `content/02-orase-mici.js`:

```js
/* SLIDE 2 · La început: orașe mici
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
   │ │ [poza]       │ │ [poza]       │ │ [poza]       │
   │ │ eticheta     │ │ eticheta     │ │ eticheta     │   ← carduri[0], [1], [2]
   │ │ CIFRA        │ │ CIFRA        │ │ CIFRA        │
   │ │ text         │ │ text         │ │ text         │
   │ └──────────────┘ └──────────────┘ └──────────────┘
   └ */
slide(2,{
 bara:'02 · Orașe mici',
 an:2007,
 supratitlu:'Partea 1 · 2007–2012',
 titlu:'La început: orașe mici, făcute pentru sărituri',
 subtitlu:'Primele jocuri aveau câteva orașe mici și dese. …',
 carduri:[
  {poza:{descriere:'Damasc din AC1, văzut de sus', fisier:'img/02-damasc-ac1.jpg'},
   eticheta:'Assassin’s Creed · 2007', cifra:'Damasc, Acra, Ierusalim',
   text:'Orașe mici, cu acoperișurile lipite unul de altul, …'},
  …
 ]
});
```

Field names are in Romanian and shared across slides: `bara` (text in the bottom bar), `an` (the big faded year: the year of the game the slide is about), `supratitlu` (which part of the talk), `titlu`, `subtitlu`, `carduri` (`poza`, `eticheta`, `cifra`, `text`, `rosu`), `buton`, `nota`. Interactive slides have extra fields named after what they show (`butonReda`, `textDesen`, `moduri`, …), and the sketch says where each one goes.

Each slide shows **1–3 main ideas** (the cards): what the speaker talks about.

### Adding screenshots

Cards can have a `poza:{descriere, fisier}`. Until the file exists, the card shows a dashed box saying „Poză de adăugat” with the description and the expected file name. **Put an image in `img/` with exactly that name and it appears on its own**, with no code change. Use 16:9 `.jpg` files. The full list of expected images is in `PLAN-PREZENTARE.md`.

### How a slide is put together (in `js/slides.js`)

```js
add({...meta(5),        // bara + an, from content/05-…
  hue:204,              // accent color hue (the whole UI shifts to it)
  html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)} …`)(SLIDE[5]), // layout, filled with the texts
  mount:mBars           // optional: the interactive part, from js/widgets/05-…
});
```

The shared templates are `CARDS3` (title, subtitle, three cards), `CARD` (one card, with an optional photo), `POZA` (a photo or its placeholder) and `STACK` (cards stacked in a column).

`mount(root)` runs every time the slide is shown. It can return `{tick(dt,t)}`, which is called every frame, and/or `{off()}`, which is called when you leave the slide (for stopping timers or audio).

Not moved, on purpose: the page title and top-bar text (in `index.html`), and the `aria-label` descriptions for screen readers (in `js/slides.js`).

**Rules for editing `content/`:** text goes between single quotes `'...'`. For an apostrophe inside the text, use the typographic `’` (the file already does everywhere) or write `\'`. Don't delete the commas between entries. You may use `<b>…</b>` and `<em>…</em>` in texts. After an edit, reload the page (it stays on the same slide) and check the browser console (`Cmd+Option+J`) for errors.

---

## What we could change about this

These are the proposals, ordered roughly by how much they help a team edit the content. Steps 1–5 are done, and the content itself was restructured into 16 slides for 3 speakers (see `PLAN-PREZENTARE.md`).

### 1. Quick wins — ✅ done

- ~~Rename `cod egc.txt` to `index.html`~~, so it opens directly in a browser and editors give HTML/JS syntax highlighting.
- ~~Add a `.gitignore` with `.DS_Store`~~ and stop tracking the existing `.DS_Store`.
- ~~Remember the current slide in the URL~~ (`index.html#12`), so reloading stays on the slide you're editing.

### 2. Separate the content from the code — ✅ done

- All text and data are in `content/`, one file per slide (see [Structure](#structure)).
- The CSS is in `styles.css`, and the code is split into `js/core.js`, one file per interactive slide in `js/widgets/`, `js/slides.js` and `js/app.js`. `index.html` is just the page skeleton.
- The simple slides share templates (`CARD`, `CARDS3`), so a card's markup is written once.
- The content files are `.js` files loaded with `<script>` tags, not JSON loaded with `fetch`, because browsers block `fetch` on pages opened by double-click (`file://`).

### 3. One source of truth for numbers — ✅ done

- The map sizes are in one list, `harti` in `content/05-cat-au-crescut-hartile.js`, used by the chart.
- The other slides no longer repeat km² figures in their texts. The only one left is the counter on slide 1 („0,13 → 130”), next to its label.

### 4. Make it safe for several people to work at once

- ✅ Text and code are both one file per slide, so two people editing different slides never touch the same file and never get a git conflict.
- Work on a short-lived branch per change and open a pull request, so someone can review the text before it reaches `main`.
- ✅ The "Slide map" and "Rules for editing" above cover how to edit a slide.

### 5. Clean up leftover and dead code — ✅ done

- Removed 47 unused CSS rules (an old teleprompter panel, a slide index overlay, table/tab/chip/ring styles) and trimmed dead selectors from 4 more. `styles.css` went from 369 to 294 lines.
- Removed the card badges that were always hidden, the three duplicate crest icons, the unused `scene` field, the stray `x_arc:` label and a line that did nothing in the lighting slide.

### 6. Nice-to-haves

- **Speaker notes:** a `notes` field per slide, shown on a key press (`N`). For now, what to say on each slide is in `PLAN-PREZENTARE.md`.
- **Bundle the fonts locally** (a `fonts/` folder) so the presentation looks the same without Wi-Fi in the classroom.
- **Print/PDF export** (one slide per page via `@media print`) as a backup if the projector computer has trouble with the animations.
- **A tiny check script** (a few lines of Node) that loads `content/` and flags missing fields or broken slides before you present.

### Suggested order

Steps 1–5 are done. Changing a sentence now means editing one line in that slide's file in `content/` and reloading the page, which stays on the same slide. Next: step 6, if wanted.
