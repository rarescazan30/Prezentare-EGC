# Animus Keynote: Spatial Evolution and Immersion in Assassin's Creed

An interactive web presentation (in Romanian) about how the Assassin's Creed series evolved spatially, technically and historically from 2007 to 2025. It's 21 slides with animated backgrounds, interactive canvases (crowd simulation, lighting demo, seasons, Lynch map and more) and a bibliography.

Everything lives in **one self-contained file**: `index.html`. It holds the HTML, CSS and JavaScript. There is no build step and nothing to install.

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

| File | What's in it |
|---|---|
| `index.html` | The page: CSS, markup, slides and all the code |
| `content.js` | The data, kept separate so it can be edited without touching code (see below) |

### `content.js` — the data

| Name | What it holds | Where it shows up |
|---|---|---|
| `GAMES` | One entry per game: title, year, location, land/total km², engine, a short description, and the map bars (`maps`) | The bar chart on slide 5 **and** the "Harta francizei" table in the bibliography (slide 20). Change a number once here and both update |
| `SOURCES` | Online sources: `[number, address, description]` | "Alte surse online" in the bibliography |
| `BIBLIO` | The bibliography groups, in display order, with title, unit word and rows | The accordion on slide 20 |
| `SLIDES` | The text of **all 21 slides**, one entry per slide (`intro`, `etapa1`, … `final`): label, ghost year, kicker, title, lead, cards, and the texts that only appear after a click or are drawn on a canvas | The slides. The layout stays in index.html |
| `LYNCH` | Kevin Lynch's five elements: name, definition, short and long explanation | Slide 11 **and** the Lynch group in the bibliography, so the definition is written once |

Each list has a comment on top explaining its fields. `content.js` is loaded with a plain `<script>` tag, so double-clicking `index.html` still works without a server.

### `index.html`

| Lines (approx.) | Part | What's there |
|---|---|---|
| 1–9 | `<head>` | Page title, viewport, Google Fonts |
| 10–379 | `<style>` | All CSS. Color tokens are on `:root` (lines 11–33), then the HUD/nav, slide layout, cards, the per-widget styles, and a "finisaj vizual" polish block at the end (line 362+) |
| 381–405 | `<body>` markup | The background canvas `#bg`, the faded crest, the big "ghost" year, the top bar (`.hud`), the empty `<main id="stage">` that slides get injected into, the bottom nav, and the transition canvas `#fx` |
| 407 | `<script src="content.js">` | Loads the data |
| 408–1680 | `<script>` | All of the logic (see below) |

### Inside the script

| Lines (approx.) | Section | Purpose |
|---|---|---|
| 411–434 | Helpers | `$`/`$$` selectors, math helpers, a seeded RNG, Romanian number formatting (`ro`, `fk`), `rs()` / `HEAD()` HTML snippets, and the AC crest path + `drawCrestCanvas()` |
| 437 | `BARS` | Builds the slide 5 bars from `GAMES` |
| 448–452 | Slide templates | `meta`, `CARD`, `CARDS3`: turn `SLIDES` entries into slide markup |
| 454–664 | **Slides 1–21** | Each slide is one `add({...})` call (see below) |
| 666–1409 | Mount functions | One function per interactive slide: `mTitle`, `mBars`, `mAtlas`, `mGI`, `mSeason`, `mCrowd`, `mLynch`, `mFacade`, `mSection`, `mPal`, `mFlow`, `mLies`, `mDT`, `mEnd` |
| 1411–1531 | Engine + background | Builds the slides into `#stage`, the top-bar ticks, and the animated network/particle background (`drawBG`, `FX` presets) |
| 1533–1603 | Transition | The "Animus sync" wipe between slides (`drawWipe`) |
| 1605–1680 | Navigation | `go()`, `swap()`, URL `#slide`, keyboard, touch, click handlers, and the main `requestAnimationFrame` loop |

### How one slide is defined

```js
add({
  t:'05 · Cât au crescut hărțile', // label in the footer, tooltips and transition
  year:2018,        // big faded "ghost" year in the corner
  hue:204,          // accent color hue (the whole UI shifts to it)
  fx:'data',        // background particles: data | dust | petals | spray | leaves | motes
  scene:'grid',     // currently stored but not used for drawing
  html:`<div class="in">...</div>`, // the slide's markup, as a template string
  mount:mBars       // optional: function that wires up the interactivity
});
```

`mount(root)` runs every time the slide is shown. It can return `{tick(dt,t)}`, which is called every frame, and/or `{off()}`, which is called when you leave the slide (for stopping timers or audio).

### Slide map: where to edit the text

All visible text is in `content.js`. `index.html` only has layout, drawings and code.

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

Not moved, on purpose: the page title and top-bar text (`<head>` and `.hud`, lines 6 and 391), and the `aria-label` descriptions for screen readers. Those sit in the markup.

**Rules for editing `content.js`:** text goes between single quotes `'...'`. For an apostrophe inside the text, use the typographic `’` (the file already does everywhere) or write `\'`. Don't delete the commas between entries. You may use `<b>…</b>` and `<em>…</em>` in texts. After an edit, reload the page (it stays on the same slide) and check the browser console (`Cmd+Option+J`) for errors.

---

## What we could change about this

None of this is implemented yet. These are proposals, ordered roughly by how much they would help a team edit the content.

### 1. Quick wins — ✅ done

- ~~Rename `cod egc.txt` to `index.html`~~, so it opens directly in a browser and editors give HTML/JS syntax highlighting.
- ~~Add a `.gitignore` with `.DS_Store`~~ and stop tracking the existing `.DS_Store`.
- ~~Remember the current slide in the URL~~ (`index.html#12`), so reloading stays on the slide you're editing.

### 2. Separate the content from the code (the main improvement) — 🟡 in progress

> **Done so far:** all text and data are in `content.js`: every slide (`SLIDES`), the games (`GAMES`), the Lynch elements (`LYNCH`), the bibliography (`BIBLIO`, `SOURCES`). **Still to do:** split the CSS and the code in `index.html` into their own files.

Today, the text, the layout HTML, the styling and the animation code are all mixed in one ~1,860-line file. To change one sentence, a colleague has to find it among canvas drawing code and avoid breaking a template string.

The proposal is to split it into:

```
index.html        ← just the page skeleton
styles.css        ← the current <style> block
content.js        ← ALL the text and data, nothing else
slides.js         ← turns content into slide HTML (templates)
widgets/          ← one file per interactive slide (crowd.js, lighting.js, lynch.js, …)
app.js            ← navigation, background, transitions
```

In `content.js`, each slide would become plain data instead of hand-written HTML:

```js
{
  id: 'etapa-1',
  label: '02 · Etapa 1',
  year: 2009, hue: 198, fx: 'dust',
  layout: 'three-cards',
  kicker: 'Etapa 1 · 2007–2012',
  title: 'Orașe mici și dense, făcute pentru parkour',
  lead: 'Primele jocuri aveau orașe mici, construite în jurul unui singur gest…',
  cards: [
    { tag: 'Dimensiune', big: '0,13 – 1,41 km²', text: 'Damascul din primul joc avea doar 0,13 km²…' },
    { tag: 'Pe acoperișuri', big: 'Fără sol', text: '…' },
    { tag: 'În sălbăticie', big: '1,41 km²', text: '…' }
  ]
}
```

That means:
- People who only change information edit **one file**, with no HTML, CSS or canvas code in it.
- Most slides (2, 3, 4, 6, 14, 15, 20 and others) share the same few layouts ("three cards", "two columns", "flip cards"), so a layout is written once and reused.
- The text that is currently hidden inside the interactive code (the `INFO`, `LY`, `D`, `TXT`, `P` objects and the canvas labels from the table above) moves into the same file.

**Important detail:** load `content.js` with a normal `<script src="content.js">` tag rather than `fetch('content.json')`. Browsers block `fetch` on pages opened with a double-click (`file://`), so a JSON file would force everyone to run a local server. A `.js` file that sets `window.CONTENT = {...}` keeps "just double-click it" working.

A lighter variant, if a full split feels like too much: keep one HTML file, but move all text into one clearly marked `CONTENT` object at the top of the script and leave the rest below a "don't edit below this line" comment.

### 3. One source of truth for numbers — 🟡 mostly done

- ✅ Each game's data (year, location, km², engine, description, chart bars) is in one `GAMES` entry, feeding both slide 5 and the bibliography table.
- ✅ The Lynch definitions are in one `LYNCH` list, feeding both slide 11 and the bibliography.
- ✅ The duplicated copy of the online sources inside the industry group is gone.
- ⬜ Still written by hand: the km² figures in the card texts on slides 1–4 and 6 (e.g. „0,13 – 1,41 km²”) and the slide 1 canvas label. They now sit in `content.js` right next to each other, so they are easy to check against `GAMES`, but they don't update automatically. Making them automatic would mean writing the card numbers as formulas, which is harder to edit, so this is probably not worth it.

### 4. Make it safe for several people to work at once

- With content split **one file per slide** (`content/05-harti.js`, …), two colleagues editing different slides never get a git merge conflict. With the current single file, any two edits risk one.
- Work on a short-lived branch per change and open a pull request, so someone can review the text before it reaches `main`.
- Add a short "how to edit a slide" section to this README once the new structure exists.

### 5. Clean up leftover and dead code

It's not urgent, but this makes the file shorter and less confusing for new readers:
- **Unused CSS:** a teleprompter panel (`.prompt`, `.pbody`, `.ptool`), a slide index overlay (`#idx`), tables and tabs (`.tw`, `table`, `.tabs`, `input.s`). None of these have matching elements in the page.
- **`.crest-badge`** is rendered on many cards but hidden with `display:none!important`.
- **`EAGLE_SVG`, `COMPASS_SVG` and `EYE_SVG`** are identical copies of `CREST_SVG`.
- The `scene` field on every slide is stored but never used.
- The `cols` headers in `DB` are never shown, since only `rows` is used.
- Small oddities: the stray `x_arc:` label (line 1710), and a no-op `ctx.moveTo(c.height*2, …)` (line 1020).

### 6. Nice-to-haves

- **Speaker notes:** a `notes` field per slide, shown on a key press (`N`). The leftover `.prompt` teleprompter CSS suggests this existed once.
- **Bundle the fonts locally** (a `fonts/` folder) so the presentation looks the same without Wi-Fi in the classroom.
- **Print/PDF export** (one slide per page via `@media print`) as a backup if the projector computer has trouble with the animations.
- **A tiny check script** (a few lines of Node) that loads `content.js` and flags missing fields or broken slides before you present.

### Suggested order

1 → 2 (with 3 done at the same time) → 4 → 5 → 6. Steps 1 and 2 give most of the benefit. After them, changing a sentence means editing one plain-text line in `content.js` and reloading the page on that same slide.
