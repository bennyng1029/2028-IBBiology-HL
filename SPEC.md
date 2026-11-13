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
