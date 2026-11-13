# IB Biology A & B


**Live site:** https://bennyng1029.github.io/2028-IBBiology-HL/ (after GitHub Pages is enabled: Settings → Pages → Deploy from branch → `main` / root).

**What's inside:** all 19 subtopics of Themes A and B (SL and AHL), 211 sections, 356 original practice questions (77 challenge level), 277 glossary terms, 28 interactive models, and a six-step Protein Lab. Every subtopic was checked by an accuracy reviewer against the IB guide's understandings and limits, including a "Beyond the syllabus" box listing extras you do not need.

A free, static, open-source study site for **IB Diploma Biology, Themes A (Unity and diversity) and B (Form and function)**, SL and AHL, for students sitting the **May 2028** exams. Syllabus: IB Biology guide, first assessment 2025.

- Languages: English (default), Japanese, Hong Kong Traditional Chinese. The language never switches automatically.
- Each subtopic: notes mapped to the guide's understanding statements, exam tips, key terms, common mistakes, a "Beyond the syllabus: you do NOT need to know" box, and a quiz.
- A Protein Lab (subtopic B1.2) with interactive widgets, a Practice page, and a Glossary.
- No build step, no framework, no tracking. Progress is stored in your own browser.

## Run locally

Open `index.html` in a browser. Everything loads through `<script>` tags, so it works from `file://`. For GitHub Pages, serve the repository root (a `.nojekyll` file is included).

## Structure

```
index.html                  page shell
assets/css/main.css         design system (token list at the top)
assets/js/core.js           IB global: registry, router, renderers, quiz engine
assets/js/ui-strings.js     interface labels in en / ja / zh
assets/js/widgets/*.js      one interactive per file (IB.registerWidget)
content/topics/<slug>.js    one subtopic per file (IB.registerTopic)
docs/                       syllabus and assessment research notes
SPEC.md                     the contract for content and widgets (read this first)
```

## Contribute

Read `SPEC.md` first. Rules in short: stay inside the IB guide, name the guide's examples, write plain English, give every string in `en`, `ja` and `zh`, and write original questions (never paste real IB papers). Use only the CSS tokens listed at the top of `main.css` in widgets so light and dark themes work. Corrections are very welcome as issues or pull requests: https://github.com/bennyng1029/2028-IBBiology-HL

## Licences

- Code: MIT (see `LICENSE`).
- Content (text, questions, diagrams): CC BY-NC-SA 4.0.

## Disclaimer

This is an independent student project. It is **not affiliated with, endorsed by or sponsored by the International Baccalaureate Organization**. "IB" and "International Baccalaureate" are trademarks of their owner. Always check the official guide and your teacher.
