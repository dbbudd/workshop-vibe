# Bring a Barrier, Leave With a Build

The participant website for **Bring a Barrier, Leave With a Build**, an HKIS Teachers Teach Teachers
workshop (2 October 2026). Teachers name a barrier in their classroom, then build a first version of a
tool that removes it: once in Flint, once in Gemini.

Published with GitHub Pages at **https://dbbudd.github.io/workshop-vibe/**.

## Pages

The tools are listed in alphabetical order, as they are in the site's menu (`COURSE.chapters` in `assets/toc.js`); the publishing guides keep their order, easiest first.

| Page | What is on it |
|---|---|
| `index.html` | **The session**, laid out like a magazine. The film's boards are rebuilt in HTML and CSS: the cover, the idea (recursion), why now (MIT), so we teach, the question and the loop. Then come the nine steps from the warm-up to Build 02, each build step with buttons into the Flint or Gemini guide, and where this goes. |
| `shortcuts.html` | **Apple Shortcuts** (draft). Round 1 of the Shortcuts + Claude session: describe a shortcut and let Apple Intelligence build it, check and tweak it (the worked example, Summarise, turns a meeting transcript into notes), run it, describe a change, and share it. |
| `chatgpt.html` | **ChatGPT** (draft). The third rung, in the ChatGPT app for Mac: build from the prompt spine as an HTML file with a preview pane beside the chat, test it, publish it with GitHub Pages, push it further by asking for a new file. Tested in the real app on 3 October 2026. Carries a Hong Kong availability warning. |
| `claude-code.html` | **Claude Code** (draft). Round 2 of the Shortcuts + Claude session, in the Code tab of the Claude desktop app: get the app, build a tool in a folder, see it, change it, publish it. |
| `flint.html` | **Flint K12.** Round 1, as getting-started exercises: log in, make an interactive, make an explainer video, turn it into an activity, and videos to push further. |
| `gemini.html` | **Gemini.** Round 2: open Canvas, build from the prompt spine, the three words, test and share, and videos to push further. |
| `xcode.html` | **Xcode** (draft). Connect the AI subscriptions you already have, Claude and ChatGPT, to Xcode 27 in Settings → Intelligence, then check they work in the coding assistant. Push-it-further notes cover running on an iPad and getting an app to students. Codex and Antigravity (Google's agent) are mentioned, not taught. |
| `github-pages.html` | **App publishing: GitHub Pages** (draft). Publish a tool as a free website from a repository, then keep it up to date with GitHub Desktop. |
| `vercel.html` | **App publishing: Vercel** (draft). Why you might choose it over GitHub Pages (previews, a hidden key, private code), what to know first (the free plan's personal-use rule, AI training on the free plan), then drop a folder to put a tool online, connect GitHub so changes go live by themselves, and preview a change first. |
| `app-store.html` | **App publishing: App Store** (draft). The Apple Developer Program, App Store Connect, TestFlight and App Review. |
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
| `images/film/` | The Three words board from the session film (render v27), on the Gemini page. The session page rebuilds the other boards in HTML and CSS. |
| `images/flint/`, `images/gemini/` | Screenshots taken on 1 October 2026 on HKIS accounts. |
| `images/examples/` | Margins and the Biology reader, the presenter's own builds, on the session page. |

## Two pairs of tools

The session runs with **Flint + Gemini** (2 October 2026) or with **Shortcuts + Claude** (the next run). The session
page shows one pair at a time:

- the cover has a "Your session's tools" switch, and the choice is remembered;
- `https://dbbudd.github.io/workshop-vibe/?tools=shortcuts-claude` opens the Shortcuts + Claude version directly
  (use this address on that session's handout and slides); `?tools=flint-gemini` opens the other;
- anything on `index.html` that names a tool comes in two versions, marked `data-for="flint-gemini"` and
  `data-for="shortcuts-claude"`. Only the reader's pair is shown, and Listen and Translate skip the other;
- the pairs and their handouts are in `COURSE.tools` in `assets/toc.js`. The Handout button and the sidebar list
  both handouts; a handout set to `null` shows as Soon. To add the Shortcuts + Claude handout, put the PDF in
  `handout/` and set its path there.

The "Can't / Can" board in Build 02 is Flint + Gemini only for now, until the new deck has its own version.

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
- **The draft guides** (ChatGPT, Claude Code, Apple Shortcuts, Xcode, GitHub Pages, Vercel, App Store) mark what is
  still to come, so it is easy to find:
  - a screenshot still to take is a `<div class="shot-todo">` box inside its `<figure>`. Replace the box with the
    image, and add numbered markers as on `flint.html` (`figure.marked`);
  - a fact still to check carries `<span class="tbc">TBC</span>`. Delete the tag once it is confirmed;
  - a video still to find is a `shot-todo video-todo` box. Replace it with `<div class="video" data-video="ID" …>`,
    as on `gemini.html`;
  - when a guide is finished, delete its "Draft" callout in the overview, and "A first draft" in its `toc.js`
    summary.
- **Opening a guide when it is ready.** The draft guides have `status: 'planned'` in `assets/toc.js`, so the sidebar
  shows them as Soon, links to them elsewhere on the site are switched off (with a Soon tag), and their sections don't
  count toward progress. Change a guide's status to `'ready'` and all of that switches on by itself. The pages still
  exist, so you can open and check a draft locally (for example `http://localhost:4322/claude-code.html`).
  On 3 October 2026 the Apple Shortcuts, ChatGPT, GitHub Pages and App Store guides were opened (they have no, or
  one optional, screenshot still to come, and keep their Draft note while some facts are tagged TBC). Xcode was
  opened the same day at the presenter's request, with one real screenshot and three boxes still to come (the Chat
  section, Claude Agent's Account menu and the coding assistant), all of them marked on the page. Vercel was opened on
  4 October 2026 the same way: seven real screenshots, one box still to come (a preview link) and three videos. To
  take them, a one-page test site was deployed to the presenter's own Vercel account as the project `hkis-demo`
  (short address hkis-demo-green.vercel.app); it is still there, to keep or delete (Settings, General, Delete
  Project). Claude Code is still Soon: it has screenshots still to come. It is the Round 2 tool of the
  Shortcuts + Claude session, so its help buttons on the session page stay switched off until it is opened.
