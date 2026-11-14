# IB Biology A & B


**Live site:** https://bennyng1029.github.io/2028-IBBiology-HL/ (after GitHub Pages is enabled: Settings → Pages → Deploy from branch → `main` / root).

**What's inside:** all 19 subtopics of Themes A and B (SL and AHL), 211 sections, 356 original practice questions (77 challenge level), 277 glossary terms, 28 interactive models, and guided Labs (a six-step Protein Lab, with more labs by theme). Every subtopic was checked by an accuracy reviewer against the IB guide's understandings and limits, including a "Beyond the syllabus" box listing extras you do not need.

A free, static, open-source study site for **IB Diploma Biology, Themes A (Unity and diversity) and B (Form and function)**, SL and AHL, for students sitting the **May 2028** exams. Syllabus: IB Biology guide, first assessment 2025.

- Languages: English (default), Japanese, Hong Kong Traditional Chinese. The language never switches automatically.
- Each subtopic: notes mapped to the guide's understanding statements, exam tips, key terms, common mistakes, a "Beyond the syllabus: you do NOT need to know" box, and a quiz.
- Guided **Labs** (menu: Labs): step-by-step activities with one interactive per step, such as the Protein Lab (B1.2). Each topic page links to its related labs. Plus a Practice page and a Glossary.
- No build step, no framework, no tracking. Progress is stored in your own browser.

## Sharing with classmates

Send the link: https://bennyng1029.github.io/2028-IBBiology-HL/ . The **Share** button (header, and footer) uses your phone's share sheet, or copies the link of the page you are on. Links to a topic (`#topic-b1-2`), a lab (`#lab-protein`) or a lab step (`#lab-protein-3`) open exactly there.

How to use it:
- On your first visit, choose **SL** or **HL**. SL hides AHL-only content. You can switch any time with the SL / SL + AHL button in the header (open the Menu on a phone).
- Choose English, 日本語 or 中文 with the language list in the header. The site never switches language by itself.
- Your quiz progress is saved only in your own browser on this device. It does not sync to other devices, and clearing browser data resets it.
- It can also be opened straight from the downloaded files (`index.html`), with no server.

## Run locally

Open `index.html` in a browser. Everything loads through `<script>` tags, so it works from `file://`. For GitHub Pages, serve the repository root (a `.nojekyll` file is included).

## Structure

```
index.html                  page shell
assets/css/main.css         design system (token list at the top)
assets/js/core.js           IB global: registry, router, renderers, quiz engine
assets/js/ui-strings.js     interface labels in en / ja / zh
assets/js/widgets/*.js      one interactive per file (IB.registerWidget)
content/labs/<id>.js        one guided lab per file (IB.registerLab)
assets/img/                 social preview (og.png) and favicon
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
