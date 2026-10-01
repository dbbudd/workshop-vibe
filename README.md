# Bring a Barrier, Leave With a Build

The participant website for **Bring a Barrier, Leave With a Build**, an HKIS Teachers Teach Teachers
workshop (2 October 2026). Teachers name a barrier in their classroom, then build a first version of a
tool that removes it: once in Flint, once in Gemini.

Published with GitHub Pages at **https://dbbudd.github.io/workshop-vibe/**.

## Pages

| Page | What is on it |
|---|---|
| `index.html` | **The session**, laid out like a magazine. The film's boards are rebuilt in HTML and CSS: the cover, the idea (recursion), why now (MIT), so we teach, the question and the loop. Then come the nine steps from the warm-up to Build 02, each build step with buttons into the Flint or Gemini guide, and where this goes. |
| `flint.html` | **Flint K12.** Round 1, as getting-started exercises: log in, make an interactive, make an explainer video, turn it into an activity, and videos to push further. |
| `gemini.html` | **Gemini.** Round 2: open Canvas, build from the prompt spine, the three words, test and share, and videos to push further. |
| `handout/` | The two-page colour A3 handout (PDF). The toolbar's red **Handout** button downloads it. |

## How it is built

The site is a copy of the [HKIS Biology reader](https://github.com/dbbudd/biology) template: static HTML,
CSS and plain JavaScript, with no build step and no account. Every page gets the template's reading tools:
text size, three themes, a dyslexia-friendly font, Focus, Listen, Translate, Search, section progress and
full-screen figures. See `DESIGN.md`.

Changed from the Biology template:

- **No Cards, Present or Printout.** The red tool slot holds **Handout** instead, which downloads the A3 PDF.
- **No reference pages** (glossary page, standards). Glossary pop-ups still work: the terms are in `assets/toc.js`.
- **Its own saved settings.** Settings and progress are stored under `vibe_` keys. Both sites are served from
  `dbbudd.github.io`, so they share browser storage; without this, "Reset progress" here would also clear Biology.
- **Listen borrows the Biology reader's natural voices** (121 MB) from `https://dbbudd.github.io/biology/`
  instead of copying them. They load only on GitHub Pages; a local preview uses the device's voices.
- **Workshop components** in `assets/workshop.css` and `assets/workshop.js`: prompt cards with a Copy button,
  the prompt spine with its blanks, screenshots with numbered markers that match the steps beside them, and a
  two-column video list.
- **The session page is a magazine** (`assets/magazine.css`, `assets/magazine.js`). The film's boards are rebuilt as
  real text, not pictures, so Listen, Translate, Search and the text-size control all work on them. It uses the HKIS
  fonts (Playfair Display and Montserrat, self-hosted), draws the fern live with the film's four rules, and draws the
  loop ring once as it scrolls into view (not for readers who ask for reduced motion).

| File | What it does |
|---|---|
| `assets/toc.js` | The single source of truth: pages, sections count, glossary, handout path, voice root. |
| `assets/course.js`, `assets/course.css` | The Biology reader shell (toolbar, sidebar, reading tools), trimmed as above. |
| `assets/workshop.css`, `assets/workshop.js` | The workshop components. |
| `assets/magazine.css`, `assets/magazine.js` | The session page's magazine layout, its rebuilt boards, the live fern and the loop ring. |
| `vendor/fonts/hkis-display/`, `vendor/fonts/hkis-label/` | Playfair Display and Montserrat, the HKIS brand fonts, for the session page (SIL Open Font License). |
| `images/mag/` | Art for the session page: the fern, the lungs, brain cell and network drawings from the film, and three HKIS ribbons. |
| `assets/listen-voice*.js` | Listen's natural-voice player (the voices themselves come from the Biology site). |
| `images/film/` | Stills of each board from the session film (render v27), 1280 × 720. Only `b12-three-words.jpg` is still used (on the Gemini page); the session page now rebuilds the boards instead. |
| `images/flint/`, `images/gemini/` | Screenshots taken on 1 October 2026 on HKIS accounts. |
| `images/examples/` | The Biology reader and Margins, the presenter's own builds. |

## Preview locally

```bash
node .claude/serve.mjs 4322
```

Then open http://localhost:4322. Videos only play when the site is served from a web address, not opened as a file.

## Publish

1. Push to the `main` branch of `github.com/dbbudd/workshop-vibe`.
2. In the repository's **Settings → Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at https://dbbudd.github.io/workshop-vibe/ within a minute or two. `.nojekyll` is already in place.

## Editing notes

- **Spelling is British**, to match the presenter's copy on the boards and the handout (organise, behaviour).
- **Board wording is quoted exactly.** Explanations around it are new; keep them plain and short.
- **When a page's `data-track` sections change**, update that page's `sections` count in `assets/toc.js`. On the
  session page only the nine steps are tracked; the magazine features before them are not.
- **Check the session page at every text size.** The Aa control goes from 75% to 150%, and the layout is built to
  reflow rather than overlap: grids drop to one column when the text grows, and large type is capped to its section's
  width. Check 150% on a phone, in OpenDyslexic too, after changing it.
- **When shared CSS or JavaScript changes**, bump `ASSET_V` in `assets/course.js` and the `?v=` on every page.
- **Videos** were checked as embeddable on 1 October 2026 (YouTube oEmbed). Each loads only when pressed.
