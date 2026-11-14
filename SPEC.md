# Project spec — IB Biology Themes A & B study site

This file is the contract every contributor (human or AI agent) follows. Read it fully before writing code or content.

## Goal

A free, static, open-source study site (hosted on GitHub Pages) for students sitting **IB Diploma Biology (first assessment 2025 guide) — May 2028 exams**, covering:

- **Theme A: Unity and diversity** (A1.1 … A4.2)
- **Theme B: Form and function** (B1.1 … B4.2)

SL and AHL (Additional Higher Level) content are both covered and always clearly labelled.
Special focus: **B1.2 Proteins** gets a dedicated interactive "Protein Lab".

Decision principles, in order: **accuracy → communication → graphic design.**

## Hard rules for content

1. **Stay inside the IB guide.** Every section maps to an understanding statement (e.g. `B1.2.10`). Do not teach material the guide does not require. If a common textbook/AI-tool topic is beyond the syllabus, put it in `beyondSyllabus` ("You do NOT need to know…") rather than teaching it.
2. **Name the guide's examples.** When the guide says "Include…" / "Students should…" / names an example (e.g. insulin, collagen, haemoglobin), cover exactly those.
3. **Plain English.** Short sentences. Explain every technical word on first use. The student sits the exam in English, so in JA and CHT views, key exam terms are always shown with the English term too, e.g. `ペプチド結合 (peptide bond)`, `肽鍵 (peptide bond)`.
4. **Chinese = Hong Kong Traditional Chinese** (`zh-HK`): HK vocabulary and characters (e.g. 細胞膜, 酶, 線粒體, 葉綠體, 脫氧核糖核酸 (DNA)). Written standard Chinese as used in HK textbooks, not Cantonese colloquial.
5. **Japanese** = natural Japanese as used in Japanese high-school biology (生物基礎/生物) terminology.
6. **Spelling**: IB uses British spelling — haemoglobin, oesophagus, organise is fine either way but be consistent; use "haemoglobin" (guide spelling: check `docs/syllabus.md`).
7. **No copyrighted past-paper text.** Write original questions *in the style of* IB papers (command terms, mark-scheme style). Never paste real IB questions.
8. **Command terms**: use official IB command terms (Define, Describe, Explain, Outline, State, Compare, Distinguish, Evaluate, Discuss, Deduce, Suggest, Calculate, Identify, Annotate, Sketch, Draw, Label…).

## File layout

```
index.html                    # single page app shell (full HTML document)
.nojekyll
assets/css/main.css
assets/js/core.js             # IB global: registry, i18n helper, router, render, quiz engine
assets/js/ui-strings.js       # UI labels in en/ja/zh
assets/js/widgets/<name>.js   # one file per interactive widget
content/topics/<slug>.js      # one file per subtopic, e.g. content/topics/b1-2.js
docs/syllabus.md              # research: understandings per subtopic (source of truth)
docs/assessment.md            # research: exam structure, command terms, question styles
README.md, LICENSE
```

Topic slugs (19 files): `a1-1 a1-2 a2-1 a2-2 a2-3 a3-1 a3-2 a4-1 a4-2 b1-1 b1-2 b2-1 b2-2 b2-3 b3-1 b3-2 b3-3 b4-1 b4-2`

No build step. No framework. Must work when `index.html` is opened directly from disk (`file://`) — so **content is loaded by `<script>` tags, not `fetch()`**. No external JS libraries unless pinned from cdnjs and truly needed (prefer none). Google Fonts allowed with system fallbacks.

## Languages

Keys: `en`, `ja`, `zh` (zh = Hong Kong Traditional Chinese; `<html lang="zh-HK">` when active).
- Default language **English**. **No automatic switching** (do not read `navigator.language`). The user picks via a switcher; the choice is remembered in `localStorage` (wrapped in try/catch).
- A localized string is an object `{ en: "...", ja: "...", zh: "..." }`. Missing translation → fall back to `en`.
- Optional per-string HTML is allowed (body text). Keep HTML simple: `p, ul, ol, li, strong, em, sub, sup, table, tr, th, td, figure, figcaption, span class="term", div class="note"`.

## Topic file format

```js
IB.registerTopic({
  id: "B1.2",                 // as in the guide
  slug: "b1-2",
  theme: "B",                 // "A" | "B"
  level: 1,                   // level of organisation 1–4 (molecules, cells, organisms, ecosystems)
  ahlOnly: false,             // true if the whole subtopic is AHL (A2.1, A2.3, A3.2, B3.3)
  title: { en: "Proteins", ja: "タンパク質", zh: "蛋白質" },
  guidingQuestions: [ { en, ja, zh } ],     // from the guide
  summary: { en, ja, zh },                   // 2–3 sentence plain-language overview
  sections: [
    {
      ref: "B1.2.1",          // understanding code(s), e.g. "B1.2.1" or "B1.2.1–2"
      ahl: false,             // true = HL only
      heading: { en, ja, zh },
      body: { en: "<p>…</p>", ja: "…", zh: "…" },
      widget: "amino-acid",   // optional: id of a registered widget, mounted under the body
      examTip: { en, ja, zh } // optional
    }
  ],
  keyTerms: [ { term: { en: "peptide bond", ja: "ペプチド結合", zh: "肽鍵" }, def: { en, ja, zh }, ahl: false } ],
  misconceptions: [ { wrong: { en, ja, zh }, right: { en, ja, zh } } ],
  beyondSyllabus: [ { en, ja, zh } ],       // "Not required by IB: …" — important for students using AI tools
  links: [ { to: "B2.1", why: { en, ja, zh } } ],   // linking questions / connections
  natureOfScience: [ { en, ja, zh } ],      // optional NOS notes from the guide
  questions: [ /* see below */ ]
});
```

### Question format

Every question has: `id` (unique, e.g. `"b1-2-q07"`), `type`, `ahl` (bool), `difficulty` (1 = recall, 2 = application, 3 = challenge / exam-hard), `ref` (understanding code), `paper` (`"1A"` MCQ, `"1B"` data-based, `"2"` short/extended).

```js
{ type: "mcq", stem: {en,ja,zh}, options: [ {en,ja,zh}, … 4 options ], answer: 2,   // 0-based
  explanation: {en,ja,zh} }                                                         // why right + why distractors wrong

{ type: "multi", stem, options: [...], answer: [0,2], explanation }                 // select all that apply

{ type: "short", commandTerm: "Explain", marks: 4, stem,
  markscheme: [ {en,ja,zh}, … ],   // one bullet per mark point, IB style; may list more points than marks
  modelAnswer: {en,ja,zh} }        // student self-marks by ticking mark points

{ type: "order", stem, items: [ {en,ja,zh}, … ],  // given in correct order; engine shuffles
  explanation }

{ type: "match", stem, pairs: [ { left: {en,ja,zh}, right: {en,ja,zh} }, … ], explanation }
```

Optional on any question: `data: { en, ja, zh }` (HTML: a table or an inline SVG graph for data-based questions — draw it to scale, colours from CSS variables).

Target per subtopic: **12–20 questions**, mix of types, at least 3 at difficulty 3, data-based questions where the topic suits it.

## Widget API

```js
IB.registerWidget("amino-acid", {
  title: { en, ja, zh },
  mount(el, ctx) {
    // el: empty <div class="widget w-amino-acid"> to fill
    // ctx.lang: "en" | "ja" | "zh"
    // ctx.t(obj): returns obj[lang] || obj.en
    // Return optional cleanup function.
  }
});
```

- The app **re-mounts** widgets when the language changes (call cleanup, empty `el`, mount again). Widgets do not need to listen for language changes.
- Widgets are self-contained: their own CSS goes in a `<style>` injected once (guard with an id), all selectors scoped under `.w-<name>`.
- Use only the design tokens (CSS custom properties) defined by `main.css` (see list in `main.css` header) so light/dark themes work. No literal colours that only work in one theme.
- Use SVG or Canvas. Must work with mouse **and** touch, keyboard-accessible controls (buttons, `<input type="range">`), and fit a 360px-wide phone (scale SVG with `viewBox`, `width:100%`).
- Respect `prefers-reduced-motion`.
- Every label in all three languages; key English terms shown in JA/ZH too.

## Routes (hash)

`#home` · `#topic-<slug>` (e.g. `#topic-b1-2`) · `#protein-lab` · `#practice` · `#glossary` · `#about`

## Progress

Quiz results stored per question id in `localStorage` (`ibbio.progress`), try/catch wrapped; the site works without it.

## Shell notes (added by the front-end lead)

Layout follows the sister site (IB Chemistry, Structure): grouped topic menus, header SL/AHL switch + language select + theme button, topic "cells", sticky "On this page" list, one-question-at-a-time quiz with a track bar, pager, footer.

**Tokens** (defined in `assets/css/main.css`, light + dark; use only these in widgets):
`--bg --surface --surface-2 --ink --ink-2 --muted --line --line-strong --accent --accent-ink --accent-soft --on-accent --theme-a --theme-a-soft --theme-b --theme-b-soft --ahl --ahl-soft --ahl-ink --good --good-soft --bad --bad-soft --warn --warn-line --warn-soft --c-carbon --c-oxygen --c-nitrogen --c-hydrogen --c-sulfur --r-nonpolar --r-polar --r-acidic --r-basic --hbond --ionic --disulfide --hydrophobic --lvl-1 --lvl-2 --lvl-3 --lvl-4 --font-display --font-body --font-mono --radius`.
Classes widgets may reuse: `.btn .btn--primary .btn--small .btn--quiet .badge .badge--ahl .tag .callout .select .input .mono .sr-only`. SVG text `fill:var(--ink)`, strokes `var(--line-strong)` / `var(--ink-2)`. Atom colours are `--c-*` (hydrogen is light grey, give it a stroke).

**API details**
- `IB.t(obj)`, `IB.ui(key, vars)` (UI string from ui-strings.js), `IB.lang`, `IB.level` ('hl' default | 'sl'), `IB.registerTopic`, `IB.registerWidget`, `IB.rerender()`.
- `registerTopic` fills missing `slug` (from id), `level` (first digit of id), `theme`, and question `id` (`<slug>-qNN`). Give questions explicit ids so progress is stable.
- Widgets are mounted inside `<figure class="widget-frame"><figcaption>(Interactive tag + widget title)</figcaption><div class="widget w-NAME">`. Do not draw your own title bar. Unregistered widget = "Interactive coming soon" placeholder. A widget that throws shows an error placeholder; the page still renders.
- Widgets are re-mounted on language change, SL/AHL switch and route change; return a cleanup function (remove window/document listeners and timers).
- Section/step bodies, `data`, stems and explanations are inserted as HTML. Any `<table>` is auto-wrapped in a horizontal scroller, so wide tables are safe. Keep SVG `viewBox` based and `width:100%`.
- SL mode (header switch) hides sections with `ahl:true`, AHL key terms and AHL questions. A topic with `ahlOnly:true` shows a notice with a button to switch to SL + AHL.
- Key terms: JA/ZH views show the English term plus the translation automatically (from `term.en` and `term[lang]`).
- Quiz: `short` questions record `right` when ticked points >= marks, `partial` for some, else `wrong`. `order` and `match` need `items` / `pairs` as in this spec. `data` is shown above the stem in a scrollable box. Progress key `ibbio.progress` = `{ [questionId]: { s: 'right'|'wrong'|'partial', t: ms } }`.
- Topic page order: header, guiding questions, summary, sections (+ widget + examTip), nature of science, key terms, common mistakes, beyond-the-syllabus box, links (only to topics that are registered), quiz, pager.
- Storage keys: `ibbio.lang`, `ibbio.theme`, `ibbio.level`, `ibbio.progress`.
- Protein Lab step intros live in `core.js` (array `LAB`), in en/ja/zh. They must be checked against `docs/syllabus.md` for B1.2 (which understanding statements are SL vs AHL; globular/fibrous and conjugated wording).

## Widget sizing standard (v2 — applies to every widget)

Goal: each interactive is **sized in proportion to its content and the screen**, so a student can see the diagram, its controls and the feedback together.

1. **One view fits one screen.** At 1280×720 (laptop), 1440×900 (desktop) and 390×844 (phone), one view of a widget (the diagram + its controls + the current feedback) fits inside the viewport minus the site header (~64px). Never stack several independent parts vertically: split them into **tabs or steps** (`.wl-tabs`), one part visible at a time.
2. **Layout kit** (CSS in main.css; use these classes, do not invent your own frame layout):
   - `.wl` — the widget layout grid. Phone/tablet (<900px wide): one column, stage first, panel below. ≥900px: two columns, `.wl-stage` (≈ 3fr) left and `.wl-panel` (≈ 2fr) right, top-aligned.
   - `.wl-stage` — holds the main SVG/canvas. The SVG gets `width:100%; height:auto; max-height:var(--stage-max)` where `--stage-max: min(58vh, 440px)` on desktop and `min(42vh, 320px)` on phones. Drawings scale with `viewBox` (preserveAspectRatio default). Design viewBoxes near the aspect ratio actually used (landscape ≈ 4:3 or 16:10 on desktop); avoid tall portrait viewBoxes.
   - `.wl-panel` — controls, readouts, short explanation (≤ ~60 words visible), and feedback. Longer text goes in `<details>` ("More detail").
   - `.wl-tabs` — tab bar (buttons with `aria-selected`), scrolls horizontally on phones if needed.
   - `.wl-exam` — the "What to remember for the exam" one-liner, at the bottom of the panel.
   - `.wl-legend` — compact legend row under the stage.
3. Typography inside SVG: ≥ 12px rendered at phone width (choose viewBox so labels are not tiny), never larger than ~18px on desktop.
4. Buttons ≥ 40px tall; sliders full panel width.
5. Animations: use requestAnimationFrame, pause when off-screen (IntersectionObserver) and when `prefers-reduced-motion` (offer a Play button instead), always show a sensible still frame at rest.

## Labs (v2)

Guided labs are data files `content/labs/<id>.js`:

```js
IB.registerLab({
  id: "protein",                 // route #lab-protein  (#protein-lab stays as an alias)
  order: 1,
  theme: "B",                    // "A" | "B" | "AB"
  topics: ["B1.2"],              // related subtopic ids (linked from the lab and shown on topic pages)
  title: {en,ja,zh}, intro: {en,ja,zh},
  steps: [
    { title: {en,ja,zh}, ahl: false, refs: ["B1.2.1"], intro: {en,ja,zh},   // ≤ 70 words, accurate to the guide
      widget: "amino-acid", options: { tab: 0 },                           // options passed to widget as ctx.options
      task: {en,ja,zh} }                                                   // optional "Try this:" instruction
  ]
});
```
Widgets receive optional `ctx.options` (e.g. `{ tab: 1 }` or `{ preset: "haemoglobin" }`) and should honour a `tab`/`preset` option where they have tabs/presets. Topic sections may also set `widgetOptions`.
