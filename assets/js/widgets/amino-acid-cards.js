/* Amino acid flashcards (extension, beyond the syllabus) — self-contained. See SPEC.md "Widget API". */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  function fill(n, a, kids) {
    if (a) for (var k in a) {
      var v = a[k];
      if (v == null || v === false) continue;
      if (k === "text") n.textContent = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    if (kids != null) (Array.isArray(kids) ? kids : [kids]).forEach(function (c) {
      if (c == null || c === false) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function el(tag, a, kids) { return fill(document.createElement(tag), a, kids); }
  function sv(tag, a, kids) { return fill(document.createElementNS(NS, tag), a, kids); }
  var BASE = ".W{--k-ink:var(--ink,#1d2733);--k-sf:var(--surface,#fff);--k-bg:var(--bg,#f4f6f9);--k-mut:var(--muted,#5b6775);--k-line:var(--line,#c9d1da);--k-acc:var(--accent,#2f6fdb);--k-ahl:var(--ahl,#8e44ad);--k-good:var(--good,#1e8e4e);--k-bad:var(--bad,#d03b3b);--k-np:var(--r-nonpolar,#e8a317);--k-pol:var(--r-polar,#16a39a);--k-ac:var(--r-acidic,#d9483b);--k-ba:var(--r-basic,#3a6fd8);--k-hb:var(--hbond,#2a7de1);--k-io:var(--ionic,#d9483b);--k-ds:var(--disulfide,#b8860b);--k-hp:var(--hydrophobic,#e8a317);--k-C:var(--c-carbon,#6b7785);--k-O:var(--c-oxygen,#d9483b);--k-N:var(--c-nitrogen,#3a6fd8);--k-H:var(--c-hydrogen,#9aa5b1);--k-S:var(--c-sulfur,#c9a100);font:15px/1.5 system-ui,-apple-system,'Segoe UI','Hiragino Sans','Noto Sans JP','Noto Sans TC','Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo','Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif;color:var(--k-ink);max-width:100%;text-align:left}" +
    ".W *{box-sizing:border-box}" +
    ".W .wl-exam{margin:0}.W .wl-legend{margin:4px 0 0}" +
    ".W .bar{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}" +
    ".W button:not([role=tab]){font:inherit;font-size:14px;min-height:44px;min-width:44px;padding:6px 12px;border:1.5px solid var(--k-line);background:var(--k-sf);color:var(--k-ink);border-radius:10px;cursor:pointer;line-height:1.25}" +
    ".W button:not([role=tab]):hover:not(:disabled){border-color:var(--k-acc)}" +
    ".W button[aria-pressed=true]:not([role=tab]),.W button.on{background:var(--k-acc);color:var(--k-sf);border-color:var(--k-acc)}" +
    ".W button:not([role=tab]):disabled{opacity:.45;cursor:default}" +
    ".W button:focus-visible,.W [tabindex]:focus-visible,.W input:focus-visible{outline:3px solid var(--k-acc);outline-offset:2px}" +
    ".W svg{width:100%;height:auto;display:block;touch-action:manipulation}" +
    ".W svg text{fill:var(--k-ink);font:13px system-ui,-apple-system,'Hiragino Sans','Noto Sans JP','Noto Sans TC','Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo','Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif}" +
    ".W .panel{background:var(--k-bg);border:1px solid var(--k-line);border-radius:12px;padding:10px 12px;margin:8px 0}" +
    ".W .legend{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:13px;margin:6px 0}" +
    ".W .legend .i{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:5px;vertical-align:-1px}" +
    ".W .legend .l{display:inline-block;width:20px;height:0;border-top:3px solid;margin-right:5px;vertical-align:3px}" +
    ".W .ahl{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.04em;padding:1px 7px;border-radius:99px;background:var(--k-ahl);color:var(--k-sf);vertical-align:middle;margin-left:6px}" +
    ".W .exam{margin-top:12px;border-left:4px solid var(--k-acc);background:var(--k-bg);padding:8px 12px;border-radius:0 10px 10px 0;font-size:14px}" +
    ".W h4{margin:12px 0 4px;font-size:15px}" +
    ".W p{margin:4px 0}" +
    ".W .small{font-size:13px;color:var(--k-mut)}" +
    "@media (prefers-reduced-motion:reduce){.W *{transition:none!important;animation:none!important}}";
  function css(name, extra) {
    var id = "w-style-" + name;
    if (document.getElementById(id)) return;
    var s = document.createElement("style");
    s.id = id;
    s.textContent = (BASE + extra).split(".W").join(".w-" + name);
    document.head.appendChild(s);
  }
  var EXAM = ["What to remember for the exam", "試験で覚えること (exam points)", "考試重點 (exam points)", "시험 대비 핵심"];
  var REDUCED = function () { try { return window.matchMedia("(prefers-reduced-motion:reduce)").matches; } catch (e) { return false; } };
  function mkT(ctx) { return function (a) { return ctx.t({ en: a[0], ja: a[1], zh: a[2], ko: a[3] }); }; }
  function exam(T, a) {
    if (window.innerWidth < 640) return el("details", { class: "exam wl-exam" }, [el("summary", { text: T(EXAM), style: "font-weight:700;cursor:pointer;min-height:36px;display:flex;align-items:center" }), el("div", { text: T(a) })]);
    return el("div", { class: "exam wl-exam" }, [el("strong", { text: T(EXAM) + ": " }), document.createTextNode(T(a))]);
  }
  function ahl() { return el("span", { class: "ahl", text: "AHL" }); }
  function legendItem(cls, color, label) { return el("span", {}, [el("span", { class: cls, style: (cls === "i" ? "background:" : "border-color:") + color }), label]); }
  var MORE = ["More detail", "詳しく見る", "更多詳情", "자세히 보기"];
  function more(T, kids) { return el("details", { class: "more" }, [el("summary", { text: T(MORE) })].concat(kids)); }
  function optTab(ctx, n) { var t = parseInt(ctx && ctx.options && ctx.options.tab, 10); return t >= 0 && t < n ? t : 0; }
  function tabsBar(T, items, cur, onSel) {
    var bar = el("div", { class: "wl-tabs", role: "tablist" });
    items.forEach(function (t, i) {
      var b = el("button", { type: "button", role: "tab", "aria-selected": i === cur ? "true" : "false" }, [T(t.n)]);
      if (t.a) { var a = ahl(); if (i === cur) { a.style.background = "var(--k-sf)"; a.style.color = "var(--k-ahl)"; } b.appendChild(a); }
      b.addEventListener("click", function () { onSel(i); });
      bar.appendChild(b);
    });
    setTimeout(function () {
      var sb = bar.querySelector("[aria-selected=true]");
      if (sb && bar.scrollWidth > bar.clientWidth) bar.scrollLeft = Math.max(0, sb.getBoundingClientRect().left - bar.getBoundingClientRect().left + bar.scrollLeft - 12);
    }, 0);
    return bar;
  }
  var CSS =
    ".W .scp{border-left:4px solid var(--k-ahl);background:var(--surface-2,var(--k-bg));border-radius:0 10px 10px 0;padding:6px 10px;margin:0 0 8px;font-size:13px;line-height:1.4}" +
    ".W .scp b{color:var(--k-ahl)}.W .scp summary{cursor:pointer;min-height:32px;display:flex;align-items:center;color:var(--k-mut)}" +
    ".W .chipbar{display:flex;flex-wrap:wrap;gap:6px}.W .chipbar button:not([role=tab]){min-height:40px;min-width:40px;padding:4px 10px;font-size:13px}" +
    ".W .fc{display:block;width:100%;min-height:236px;border:1.5px solid var(--k-line);border-left-width:8px;border-radius:14px;background:var(--k-sf);padding:12px 14px;cursor:pointer;text-align:left}" +
    ".W .fc:hover{border-color:var(--k-acc)}" +
    ".W .fc .nm{font-size:24px;font-weight:700;line-height:1.2;margin:2px 0}" +
    ".W .fc .codes{font-family:var(--font-mono,monospace);font-size:18px;color:var(--k-mut);margin:2px 0 10px}" +
    ".W .fc .rg{font-size:22px;font-weight:600;line-height:1.5;margin:6px 0}.W .fc .rg sub{font-size:.65em}" +
    ".W .fc .hint{font-size:12.5px;color:var(--k-mut);margin-top:10px}" +
    ".W .fc dl{display:grid;grid-template-columns:auto 1fr;gap:3px 10px;margin:6px 0 0;font-size:14px;line-height:1.35}.W .fc dt{color:var(--k-mut)}.W .fc dd{margin:0}" +
    ".W .fc .gb{display:inline-block;font-weight:700;padding:1px 9px;border-radius:10px;border:2px solid;font-size:14px}" +
    ".W .fc .note{font-size:13px;margin:6px 0 0;padding:4px 8px;border-radius:8px;background:var(--k-bg)}" +
    ".W .fc .note.diff{border:1px dashed var(--k-line);color:var(--k-mut)}" +
    ".W .nav{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0}.W .cnt{font-weight:600;min-width:64px;text-align:center}" +
    ".W .opts{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:6px 0}" +
    ".W .opts button.ok{border-color:var(--k-good);border-width:3px}.W .opts button.no{border-color:var(--k-bad);border-width:3px}" +
    ".W .fb{min-height:1.4em;font-size:14px}.W .fb.good{color:var(--k-good)}.W .fb.bad{color:var(--k-bad)}" +
    ".W .score{font-weight:600}" +
    ".W .tw{overflow:auto;max-height:min(56vh,430px);border:1px solid var(--k-line);border-radius:10px;background:var(--k-sf)}" +
    ".W table{border-collapse:collapse;width:100%;min-width:520px;font-size:14px}" +
    ".W th,.W td{padding:5px 9px;border-bottom:1px solid var(--k-line);text-align:left;white-space:nowrap}" +
    ".W thead th{position:sticky;top:0;background:var(--k-bg);z-index:1;padding:0}" +
    ".W thead th button{border:0!important;border-radius:0!important;background:transparent!important;color:var(--k-ink)!important;width:100%;text-align:left;font-weight:700;min-height:40px;white-space:nowrap}" +
    ".W td.g{font-weight:600;border-left:8px solid}" +
    ".W td.c{text-align:center}.W .mono{font-family:var(--font-mono,monospace)}" +
    "@media (max-width:480px){.W .fc .nm{font-size:21px}.W .fc .rg{font-size:19px}.W .opts{grid-template-columns:1fr}}";

  var GK = ["np", "pol", "ac", "ba"];
  var G = {
    np: { col: "--k-np", s: ["Non-polar", "非極性", "非極性", "비극성"], hp: 0,
      n: ["Non-polar (hydrophobic)", "非極性 (non-polar)・疎水性 (hydrophobic)", "非極性 (non-polar)・疏水 (hydrophobic)", "비극성(non-polar)·소수성(hydrophobic)"],
      q: ["Non-polar (hydrophobic)", "非極性・疎水性", "非極性・疏水", "비극성·소수성"],
      w: ["Mostly C–H bonds, which are non-polar, so nothing attracts water: hydrophobic.", "C–H 結合が中心で極性がなく、水とひきあいません。疎水性 (hydrophobic) です。", "主要是 C–H 鍵，沒有極性，不會吸引水：疏水 (hydrophobic)。", "C–H 결합이 대부분이라 극성이 없어 물을 끌어당기지 않는다. 소수성(hydrophobic)이다."] },
    pol: { col: "--k-pol", s: ["Polar", "極性", "極性", "극성"], hp: 1,
      n: ["Polar, uncharged (hydrophilic)", "極性・電荷なし (polar, uncharged)・親水性 (hydrophilic)", "極性・不帶電荷 (polar, uncharged)・親水 (hydrophilic)", "극성·전하 없음(polar, uncharged)·친수성(hydrophilic)"],
      q: ["Polar, uncharged", "極性・電荷なし", "極性・不帶電荷", "극성·전하 없음"],
      w: ["Has a polar group (–OH, –SH or –CONH₂) that attracts water but carries no full charge: polar, uncharged, hydrophilic.", "水とひきあう極性の基（–OH、–SH、–CONH₂）をもち、完全な電荷はもちません。極性 (polar)・電荷なし・親水性 (hydrophilic) です。", "含有會吸引水的極性基團（–OH、–SH 或 –CONH₂），但不帶完整電荷：極性 (polar)、不帶電荷、親水 (hydrophilic)。", "물을 끌어당기는 극성기(–OH, –SH, –CONH₂)가 있지만 완전한 전하는 띠지 않는다. 극성(polar)이고 전하가 없으며 친수성(hydrophilic)이다."] },
    ac: { col: "--k-ac", s: ["Acidic", "酸性", "酸性", "산성"], hp: 1,
      n: ["Acidic, negative charge (hydrophilic)", "酸性・負電荷 (acidic, negative)・親水性 (hydrophilic)", "酸性・帶負電荷 (acidic, negative)・親水 (hydrophilic)", "산성·음전하(acidic, negative)·친수성(hydrophilic)"],
      q: ["Acidic (−)", "酸性 (−)", "酸性 (−)", "산성 (−)"],
      w: ["Has a –COOH group that loses H⁺ and becomes –COO⁻, so it is negatively charged: acidic, hydrophilic.", "–COOH が H⁺ を放出して –COO⁻ になるので、負に帯電します。酸性 (acidic)・親水性 (hydrophilic) です。", "含有 –COOH，會釋出 H⁺ 變成 –COO⁻，帶負電：酸性 (acidic)、親水 (hydrophilic)。", "–COOH가 H⁺를 내놓아 –COO⁻가 되므로 (−)전하를 띤다. 산성(acidic)이고 친수성(hydrophilic)이다."] },
    ba: { col: "--k-ba", s: ["Basic", "塩基性", "鹼性", "염기성"], hp: 1,
      n: ["Basic, positive charge (hydrophilic)", "塩基性・正電荷 (basic, positive)・親水性 (hydrophilic)", "鹼性・帶正電荷 (basic, positive)・親水 (hydrophilic)", "염기성·양전하(basic, positive)·친수성(hydrophilic)"],
      q: ["Basic (+)", "塩基性 (+)", "鹼性 (+)", "염기성 (+)"],
      w: ["Has an –NH₂ group that gains H⁺ and becomes –NH₃⁺, so it is positively charged: basic, hydrophilic.", "–NH₂ が H⁺ を受け取って –NH₃⁺ になるので、正に帯電します。塩基性 (basic)・親水性 (hydrophilic) です。", "含有 –NH₂，會接受 H⁺ 變成 –NH₃⁺，帶正電：鹼性 (basic)、親水 (hydrophilic)。", "–NH₂가 H⁺를 받아 –NH₃⁺가 되므로 (+)전하를 띤다. 염기성(basic)이고 친수성(hydrophilic)이다."] }
  };
  var HP = [["Hydrophobic (avoids water)", "疎水性 (hydrophobic)：水をはじく", "疏水 (hydrophobic)：不愛水", "소수성(hydrophobic): 물을 피함"],
    ["Hydrophilic (attracts water)", "親水性 (hydrophilic)：水とひきあう", "親水 (hydrophilic)：吸引水", "친수성(hydrophilic): 물을 끌어당김"]];
  var YES = ["Yes", "はい", "是", "예"], NO = ["No", "いいえ", "否", "아니요"];

  // name = [ja, zh-HK, ko]; r: 0 none, 1 aromatic ring, 2 non-aromatic ring
  var AA = [
    { k: "gly", e: "Glycine", n: ["グリシン", "甘氨酸", "글리신"], a: "Gly", o: "G", g: "np", f: "–H", r: 0, s: 0, x: 0 },
    { k: "ala", e: "Alanine", n: ["アラニン", "丙氨酸", "알라닌"], a: "Ala", o: "A", g: "np", f: "–CH<sub>3</sub>", r: 0, s: 0, x: 0 },
    { k: "val", e: "Valine", n: ["バリン", "纈氨酸", "발린"], a: "Val", o: "V", g: "np", f: "–CH(CH<sub>3</sub>)<sub>2</sub>", r: 0, s: 0, x: 1 },
    { k: "leu", e: "Leucine", n: ["ロイシン", "亮氨酸", "류신"], a: "Leu", o: "L", g: "np", f: "–CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub>", r: 0, s: 0, x: 1 },
    { k: "ile", e: "Isoleucine", n: ["イソロイシン", "異亮氨酸", "아이소류신"], a: "Ile", o: "I", g: "np", f: "–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>", r: 0, s: 0, x: 1 },
    { k: "met", e: "Methionine", n: ["メチオニン", "甲硫氨酸", "메싸이오닌"], a: "Met", o: "M", g: "np", f: "–CH<sub>2</sub>–CH<sub>2</sub>–S–CH<sub>3</sub>", r: 0, s: 1, x: 1 },
    { k: "phe", e: "Phenylalanine", n: ["フェニルアラニン", "苯丙氨酸", "페닐알라닌"], a: "Phe", o: "F", g: "np", f: "–CH<sub>2</sub>–C<sub>6</sub>H<sub>5</sub>", r: 1, s: 0, x: 1,
      rd: ["benzene ring", "ベンゼン環", "苯環", "벤젠 고리"] },
    { k: "trp", e: "Tryptophan", n: ["トリプトファン", "色氨酸", "트립토판"], a: "Trp", o: "W", g: "np", f: "–CH<sub>2</sub>–indole", r: 1, s: 0, x: 1,
      rd: ["indole: two fused rings, with an N–H", "インドール環（縮合した2つの環、N–H を含む）", "吲哚環（兩個稠合的環，含 N–H）", "인돌 고리(융합된 고리 2개, N–H 포함)"] },
    { k: "pro", e: "Proline", n: ["プロリン", "脯氨酸", "프롤린"], a: "Pro", o: "P", g: "np", f: "–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–", r: 2, s: 0, x: 0,
      fx: ["the end bonds back to the backbone N, forming a ring", "末端が主鎖の N に結合し、環をつくる", "末端連回主鏈的 N，形成環", "끝이 주사슬의 N에 다시 결합해 고리를 이룸"],
      rd: ["the R-group bonds back to the backbone N, so the ring includes that N (not aromatic)", "R基が主鎖の N に結合して環ができる（その N を環に含む。芳香環ではない）", "R 基連回主鏈的 N 而形成環（環包括該 N，非芳香環）", "R기가 주사슬의 N에 다시 결합해 고리를 이룬다(그 N이 고리에 포함됨, 방향족 아님)"] },
    { k: "ser", e: "Serine", n: ["セリン", "絲氨酸", "세린"], a: "Ser", o: "S", g: "pol", f: "–CH<sub>2</sub>–OH", r: 0, s: 0, x: 0 },
    { k: "thr", e: "Threonine", n: ["トレオニン", "蘇氨酸", "트레오닌"], a: "Thr", o: "T", g: "pol", f: "–CH(OH)–CH<sub>3</sub>", r: 0, s: 0, x: 1 },
    { k: "cys", e: "Cysteine", n: ["システイン", "半胱氨酸", "시스테인"], a: "Cys", o: "C", g: "pol", f: "–CH<sub>2</sub>–SH", r: 0, s: 1, x: 0 },
    { k: "tyr", e: "Tyrosine", n: ["チロシン", "酪氨酸", "타이로신"], a: "Tyr", o: "Y", g: "pol", f: "–CH<sub>2</sub>–C<sub>6</sub>H<sub>4</sub>–OH", r: 1, s: 0, x: 0,
      rd: ["benzene ring (with an –OH)", "ベンゼン環（–OH つき）", "苯環（帶 –OH）", "벤젠 고리(–OH 포함)"] },
    { k: "asn", e: "Asparagine", n: ["アスパラギン", "天冬酰胺", "아스파라진"], a: "Asn", o: "N", g: "pol", f: "–CH<sub>2</sub>–CONH<sub>2</sub>", r: 0, s: 0, x: 0 },
    { k: "gln", e: "Glutamine", n: ["グルタミン", "谷氨酰胺", "글루타민"], a: "Gln", o: "Q", g: "pol", f: "–CH<sub>2</sub>–CH<sub>2</sub>–CONH<sub>2</sub>", r: 0, s: 0, x: 0 },
    { k: "asp", e: "Aspartic acid", alt: "aspartate", n: ["アスパラギン酸", "天冬氨酸", "아스파트산"], a: "Asp", o: "D", g: "ac", f: "–CH<sub>2</sub>–COOH", r: 0, s: 0, x: 0, ch: "neg", ion: "–COO⁻" },
    { k: "glu", e: "Glutamic acid", alt: "glutamate", n: ["グルタミン酸", "谷氨酸", "글루탐산"], a: "Glu", o: "E", g: "ac", f: "–CH<sub>2</sub>–CH<sub>2</sub>–COOH", r: 0, s: 0, x: 0, ch: "neg", ion: "–COO⁻" },
    { k: "lys", e: "Lysine", n: ["リシン", "賴氨酸", "라이신"], a: "Lys", o: "K", g: "ba", f: "–(CH<sub>2</sub>)<sub>4</sub>–NH<sub>2</sub>", r: 0, s: 0, x: 1, ch: "pos", ion: "–NH₃⁺" },
    { k: "arg", e: "Arginine", n: ["アルギニン", "精氨酸", "아르지닌"], a: "Arg", o: "R", g: "ba", f: "–(CH<sub>2</sub>)<sub>3</sub>–NH–C(=NH)–NH<sub>2</sub>", r: 0, s: 0, x: 0, ch: "pos", ion: "guanidino" },
    { k: "his", e: "Histidine", n: ["ヒスチジン", "組氨酸", "히스티딘"], a: "His", o: "H", g: "ba", f: "–CH<sub>2</sub>–imidazole", r: 1, s: 0, x: 1, ch: "part",
      rd: ["imidazole ring (contains N)", "イミダゾール環（N を含む）", "咪唑環（含 N）", "이미다졸 고리(N 포함)"] }
  ];
  var CH = {
    neg: ["Negative", "負 (−)", "帶負電 (−)", "음전하 (−)"],
    pos: ["Positive", "正 (+)", "帶正電 (+)", "양전하 (+)"],
    part: ["Only partly positive", "一部だけ正 (+)", "只有部分帶正電 (+)", "일부만 양전하 (+)"],
    none: ["None", "なし", "無", "없음"]
  };
  var SPECIAL = {
    gly: ["Smallest R-group (just H), so the chain is very flexible.", "R基が最小（H だけ）で、鎖がとても曲がりやすい。", "R 基最小（只有 H），令多肽鏈非常靈活。", "R기가 가장 작아(H뿐) 사슬이 매우 유연하다."],
    pro: ["Its ring fixes the chain’s angle, so it makes kinks (bends) in the chain.", "環が鎖の角度を固定するため、鎖に折れ曲がり (kink) をつくる。", "環固定了多肽鏈的角度，令鏈出現扭結（彎曲）。", "고리가 사슬의 각도를 고정해 사슬에 꺾임(kink)을 만든다."],
    cys: ["Two cysteines can form a disulfide bond (S–S). The ONE amino acid IB asks you to name (AHL).", "2つのシステインはジスルフィド結合 (S–S) をつくれる。IB で名前を覚える唯一のアミノ酸（AHL）。", "兩個半胱氨酸可形成二硫鍵 (S–S)。是 IB 唯一要求說出名稱的氨基酸（AHL）。", "시스테인 2개는 이황화 결합(S–S)을 이룬다. IB에서 이름을 알아야 하는 유일한 아미노산(AHL)."],
    his: ["Only partly positive at pH 7 (its ring can gain H⁺).", "pH 7 では一部だけ正に帯電（環が H⁺ を受け取れる）。", "在 pH 7 只有部分帶正電（環可接受 H⁺）。", "pH 7에서는 일부만 양전하를 띤다(고리가 H⁺를 받을 수 있음)."]
  };
  var DIFF = {
    gly: ["Some textbooks list glycine as polar.", "グリシンを極性に入れる教科書もある。", "有些課本把甘氨酸歸為極性。", "글리신을 극성으로 분류하는 교과서도 있다."],
    cys: ["Some textbooks list cysteine as non-polar.", "システインを非極性に入れる教科書もある。", "有些課本把半胱氨酸歸為非極性。", "시스테인을 비극성으로 분류하는 교과서도 있다."],
    tyr: ["Some textbooks list tyrosine as non-polar.", "チロシンを非極性に入れる教科書もある。", "有些課本把酪氨酸歸為非極性。", "타이로신을 비극성으로 분류하는 교과서도 있다."],
    trp: ["Some textbooks list tryptophan as polar.", "トリプトファンを極性に入れる教科書もある。", "有些課本把色氨酸歸為極性。", "트립토판을 극성으로 분류하는 교과서도 있다."],
    his: ["Some textbooks list histidine as polar, uncharged.", "ヒスチジンを極性・電荷なしに入れる教科書もある。", "有些課本把組氨酸歸為極性、不帶電荷。", "히스티딘을 극성·전하 없음으로 분류하는 교과서도 있다."]
  };
  var DIFFH = ["Textbooks differ", "教科書で分け方が違う", "課本分類不一", "교과서마다 다름"];
  var WHY = {
    gly: ["The R-group is just H: no polar group to attract water, so it goes with the non-polar group.", "R基は H だけで、水とひきあう極性の基がないため、非極性のグループに入ります。", "R 基只是 H，沒有吸引水的極性基團，所以歸入非極性組。", "R기가 H뿐이라 물을 끌어당기는 극성기가 없으므로 비극성 무리에 들어간다."],
    pro: ["The R-group is a –CH₂–CH₂–CH₂– chain (C–H only), so it is non-polar. The chain bonds back to the backbone N and forms a ring.", "R基は –CH₂–CH₂–CH₂– の鎖（C–H だけ）で非極性です。この鎖が主鎖の N に結合して環をつくります。", "R 基是 –CH₂–CH₂–CH₂– 鏈（只有 C–H），屬非極性。此鏈連回主鏈的 N 而形成環。", "R기는 –CH₂–CH₂–CH₂– 사슬(C–H뿐)이라 비극성이다. 이 사슬이 주사슬의 N에 다시 결합해 고리를 이룬다."],
    met: ["Mostly C–H. The sulfur sits between two carbons (–S–), which is only weakly polar, so it is listed as non-polar.", "ほとんど C–H です。硫黄は2つの炭素の間 (–S–) にあり、極性は弱いので非極性に入れます。", "主要是 C–H。硫位於兩個碳之間 (–S–)，極性很弱，所以歸入非極性。", "대부분 C–H이다. 황이 탄소 두 개 사이(–S–)에 있어 극성이 약하므로 비극성으로 분류한다."],
    trp: ["A large ring system that is mostly C–H, so it is listed as non-polar (it has one N–H, so some books call it polar).", "大きな環で大部分が C–H なので非極性に入れます（N–H が1つあるため、極性とする本もあります）。", "是大型環系統，主要是 C–H，所以歸入非極性（含一個 N–H，有些課本視之為極性）。", "대부분 C–H인 큰 고리라 비극성으로 분류한다(N–H가 하나 있어 극성으로 보는 책도 있다)."],
    tyr: ["A benzene ring with an –OH group. The –OH is polar, so it is usually listed as polar (the ring itself is hydrophobic).", "ベンゼン環に –OH がついています。–OH は極性なので、ふつう極性に入れます（環そのものは疎水性）。", "苯環上有 –OH。–OH 有極性，所以通常歸入極性（環本身是疏水的）。", "벤젠 고리에 –OH가 붙어 있다. –OH가 극성이므로 보통 극성으로 분류한다(고리 자체는 소수성)."],
    cys: ["The –SH group is polar, so cysteine is usually listed as polar (some books list it as non-polar).", "–SH 基は極性なので、ふつう極性に入れます（非極性とする本もあります）。", "–SH 有極性，所以半胱氨酸通常歸入極性（有些課本歸為非極性）。", "–SH기가 극성이라 보통 극성으로 분류한다(비극성으로 보는 책도 있다)."],
    arg: ["The guanidino group (–NH–C(=NH)–NH₂) is rich in N and keeps an H⁺, so it is positively charged: basic, hydrophilic.", "グアニジノ基 (–NH–C(=NH)–NH₂) は N が多く H⁺ を保持して正に帯電します。塩基性 (basic)・親水性 (hydrophilic) です。", "胍基 (–NH–C(=NH)–NH₂) 含多個 N，會保留 H⁺ 而帶正電：鹼性 (basic)、親水 (hydrophilic)。", "구아니디노기(–NH–C(=NH)–NH₂)는 N이 많고 H⁺를 붙잡아 (+)전하를 띤다. 염기성(basic)이고 친수성(hydrophilic)이다."],
    his: ["The imidazole ring contains N that can gain H⁺, so it is basic. At pH 7 it is only partly positive (some books list it as polar, uncharged).", "イミダゾール環の N が H⁺ を受け取れるので塩基性です。pH 7 では一部だけ正に帯電します（極性・電荷なしとする本もあります）。", "咪唑環中的 N 可接受 H⁺，所以屬鹼性。在 pH 7 只有部分帶正電（有些課本歸為極性、不帶電荷）。", "이미다졸 고리의 N이 H⁺를 받을 수 있어 염기성이다. pH 7에서는 일부만 양전하를 띤다(극성·전하 없음으로 보는 책도 있다)."]
  };
  var RNO = ["No ring in the R-group: it is a chain (or just –H).", "R基に環はなく、鎖（または –H だけ）です。", "R 基沒有環，是一條鏈（或只有 –H）。", "R기에 고리가 없다. 사슬(또는 –H뿐)이다."];
  var RING = [null,
    ["Aromatic", "芳香環 (aromatic)", "芳香環 (aromatic)", "방향족(aromatic)"],
    ["Non-aromatic ring", "非芳香環 (non-aromatic)", "非芳香環 (non-aromatic)", "비방향족 고리"]];

  var S = {
    tabs: [{ n: ["1 Cards", "1 カード", "1 卡片", "1 카드"] }, { n: ["2 Quiz", "2 クイズ", "2 測驗", "2 퀴즈"] }, { n: ["3 Table", "3 一覧表", "3 總表", "3 표"] }],
    scope1: ["Extension — beyond the syllabus:", "発展 — シラバスの範囲外:", "延伸內容 — 超出課程範圍：", "확장 학습 — 교육과정 범위 밖:"],
    scope1b: [" IB does not ask you to name the 20 amino acids or draw their R-groups (only cysteine, AHL).", " IB では 20 種類のアミノ酸の名前を覚えたり R基を描いたりする必要はありません（システイン (cysteine) のみ、AHL）。", " IB 不要求你說出 20 種氨基酸的名稱或繪出它們的 R 基（只須認識半胱氨酸 (cysteine)，屬 AHL）。", " IB는 20가지 아미노산의 이름을 대거나 R기를 그리라고 요구하지 않는다(시스테인(cysteine)만 해당, AHL)."],
    scope2: ["Use these cards to learn to recognise R-group TYPES from their chemistry: C–H only → non-polar/hydrophobic; –OH, –SH, –CONH₂ → polar; –COOH → acidic (−); –NH₂ or other N-containing groups that can gain H⁺ → basic (+).", "このカードは、化学的な特徴から R基の「種類」を見分ける練習に使いましょう。C–H だけ → 非極性・疎水性 (hydrophobic)、–OH・–SH・–CONH₂ → 極性 (polar)、–COOH → 酸性 (−)、–NH₂ など H⁺ を受け取れる N を含む基 → 塩基性 (+)。", "利用這些卡片，學習從化學結構辨認 R 基的「類型」：只有 C–H → 非極性／疏水 (hydrophobic)；–OH、–SH、–CONH₂ → 極性 (polar)；–COOH → 酸性 (−)；–NH₂ 或其他可接受 H⁺ 的含 N 基團 → 鹼性 (+)。", "이 카드로 R기의 화학적 특징을 보고 유형을 알아보는 연습을 하시오. C–H만 있음 → 비극성/소수성(hydrophobic), –OH, –SH, –CONH₂ → 극성(polar), –COOH → 산성(−), –NH₂ 등 H⁺를 받을 수 있는 질소 포함 기 → 염기성(+)."],
    flipHint: ["Click, or press Enter or Space, to flip.", "クリック、または Enter／スペースで裏返します。", "點按，或按 Enter／空白鍵翻面。", "누르거나 Enter/스페이스바로 뒤집으시오."],
    rgroup: ["R-group", "R基", "R 基", "R기"],
    prev: ["← Prev", "← 前へ", "← 上一張", "← 이전"], next: ["Next →", "次へ →", "下一張 →", "다음 →"],
    shuffle: ["Shuffle", "シャッフル", "洗牌", "섞기"],
    fAll: ["All", "すべて", "全部", "전체"], fRing: ["Ring", "環あり", "有環", "고리"], fS: ["Sulfur (S)", "硫黄 (S)", "含硫 (S)", "황 (S)"],
    fLabel: ["Filter cards", "カードを絞り込む", "篩選卡片", "카드 거르기"],
    lGroup: ["Group", "グループ", "組別", "무리"], lWater: ["Water", "水との関係", "與水的關係", "물과의 관계"], lCharge: ["Charge at pH 7", "pH 7 での電荷", "pH 7 的電荷", "pH 7에서의 전하"],
    lRing: ["Ring", "環", "環", "고리"], lS: ["Sulfur", "硫黄", "硫", "황"], lEss: ["Essential (adults)", "必須（成人）", "必需（成人）", "필수(성인)"],
    ionised: ["ionised form", "イオン化した形", "離子化形式", "이온화된 형태"],
    ringYes: ["Yes — ", "あり — ", "有 — ", "있음 — "], ringNo: ["No", "なし", "無", "없음"],
    qGroup: ["Which type of R-group is this?", "この R基 はどの種類ですか。", "這是哪一類 R 基？", "이 R기는 어떤 유형인가?"],
    qRing: ["Does this R-group contain a ring?", "この R基 に環はありますか。", "這個 R 基含有環嗎？", "이 R기에 고리가 있는가?"],
    score: ["Score: ", "得点: ", "得分：", "점수: "], restart: ["Restart", "やり直す", "重新開始", "다시 시작"],
    done: ["Finished! Final score: ", "終了！ 最終得点: ", "完成！最終得分：", "끝! 최종 점수: "],
    right: ["Correct. ", "正解。", "正確。", "정답. "], wrong: ["Not quite. ", "惜しい。", "不太對。", "아쉽다. "],
    cntQ: ["Question ", "問 ", "第 ", "문제 "],
    tName: ["Name", "名前", "名稱", "이름"], t3: ["3-letter", "3文字", "三字母", "3글자"], t1: ["1-letter", "1文字", "單字母", "1글자"],
    tG: ["R-group type", "R基の種類", "R 基類型", "R기 유형"], tR: ["Ring", "環", "環", "고리"], tS: ["S", "S", "S", "S"], tE: ["Essential", "必須", "必需", "필수"],
    tHint: ["Click a column heading to sort. Wide table: scroll sideways.", "列の見出しをクリックすると並べ替えられます。表が広いときは横にスクロール。", "點按欄標題可排序。表格較闊時可左右捲動。", "열 제목을 누르면 정렬된다. 표가 넓으면 옆으로 스크롤하시오."],
    tDeck: ["Deck order", "デッキ順", "卡組次序", "카드 순서"],
    more: ["Why 20, 21 or 22?", "なぜ 20、21、22 種類？", "為何是 20、21 或 22 種？", "왜 20, 21, 22가지일까?"],
    moreT: ["20 amino acids are coded by the genetic code. A 21st (selenocysteine) and a 22nd (pyrrolysine) exist in some proteins but are not needed here. That is why you see counts of “20, 21 or 22”.", "遺伝暗号 (genetic code) が指定するアミノ酸は 20 種類です。21 番目（セレノシステイン）と 22 番目（ピロリジン）は一部のタンパク質にあるだけで、ここでは必要ありません。そのため「20、21、22 種類」と書かれた資料があります。", "遺傳密碼 (genetic code) 編碼 20 種氨基酸。第 21 種（硒半胱氨酸）和第 22 種（吡咯賴氨酸）只存在於某些蛋白質，這裏不需要。因此會見到「20、21 或 22 種」的不同說法。", "유전 암호(genetic code)가 지정하는 아미노산은 20가지이다. 21번째(셀레노시스테인)와 22번째(피롤라이신)는 일부 단백질에만 있으며 여기서는 필요하지 않다. 그래서 ‘20, 21, 22가지’라는 서로 다른 숫자가 보인다."],
    moreS: ["Groups follow the common textbook scheme (R-group at about pH 7). Essential = adults cannot make enough, so they must come from food (9: His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val).", "グループは一般的な教科書の分け方（pH 約 7 での R基）に従っています。必須 = 成人が十分につくれず食物から摂る必要があるもの（9種類：His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val）。", "分組依照常見課本的分法（R 基在 pH 約 7 時的性質）。必需 = 成人不能製造足夠的量，必須從食物攝取（9 種：His、Ile、Leu、Lys、Met、Phe、Thr、Trp、Val）。", "무리는 일반적인 교과서 분류(pH 약 7에서의 R기)를 따른다. 필수 = 성인이 충분히 만들지 못해 음식으로 섭취해야 하는 것(9가지: His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val)."],
    exam: ["Recognise the R-group type from its chemistry: C–H only → non-polar (hydrophobic); –OH, –SH, –CONH₂ → polar; –COOH → acidic (−); –NH₂ → basic (+). Only cysteine (AHL) must be named.", "化学的な特徴から R基 の種類を見分ける：C–H だけ → 非極性（疎水性）、–OH・–SH・–CONH₂ → 極性、–COOH → 酸性 (−)、–NH₂ → 塩基性 (+)。名前を覚えるのはシステイン（AHL）だけ。", "從化學結構辨認 R 基類型：只有 C–H → 非極性（疏水）；–OH、–SH、–CONH₂ → 極性；–COOH → 酸性 (−)；–NH₂ → 鹼性 (+)。只須說出半胱氨酸（AHL）的名稱。", "화학적 특징으로 R기 유형을 알아본다. C–H만 → 비극성(소수성), –OH, –SH, –CONH₂ → 극성, –COOH → 산성(−), –NH₂ → 염기성(+). 이름을 알아야 하는 것은 시스테인(AHL)뿐이다."]
  };

  function shuf(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }

  IB.registerWidget("amino-acid-cards", {
    title: { en: "Amino acid flashcards (extension)", ja: "アミノ酸フラッシュカード（発展）", zh: "氨基酸閃卡（延伸）", ko: "아미노산 플래시카드(확장)" },
    mount: function (root, ctx) {
      css("amino-acid-cards", CSS);
      root.classList.add("W");
      var T = mkT(ctx), lang = ctx.lang || "en";
      var tab = optTab(ctx, 3);
      var view = el("div");
      root.appendChild(view);

      function nm(a) {
        if (lang === "en") return a.e;
        var i = lang === "ja" ? 0 : lang === "zh" ? 1 : 2;
        return a.n[i] + " (" + a.e.toLowerCase() + ")";
      }
      function altTxt(a) { return a.alt ? T(["also called ", "別名: ", "又稱 ", "다른 이름: "]) + a.alt : ""; }
      function gcol(g) { return "var(" + G[g].col + ")"; }
      function ringTxt(a) {
        if (!a.r) return T(S.ringNo);
        return T(S.ringYes) + T(RING[a.r]) + " (" + T(a.rd) + ")";
      }
      function why(a) { return T(WHY[a.k] || G[a.g].w); }

      // ---- state ----
      var filt = "all", pos = 0, flipped = false, order = [];
      var qQueue = [], qi = 0, qScore = 0, qAns = null, qType = "group";
      var sortKey = "deck", sortDir = 1, tfilt = "all";

      function inFilter(a, f) {
        return f === "all" || a.g === f || (f === "ring" && a.r > 0) || (f === "sulfur" && a.s === 1);
      }
      function resetOrder() {
        order = [];
        AA.forEach(function (a, i) { if (inFilter(a, filt)) order.push(i); });
        pos = 0; flipped = false;
      }
      resetOrder();

      function render() {
        view.innerHTML = "";
        var top = el("div", { class: "scp" }, [
          el("b", { text: T(S.scope1) }), document.createTextNode(T(S.scope1b))
        ]);
        var rest = window.innerWidth < 640
          ? el("details", {}, [el("summary", { text: T(["Why these cards?", "このカードの使い方", "如何使用這些卡片", "이 카드는 어떻게 쓰나"]) }), el("div", { text: T(S.scope2) })])
          : el("div", { style: "margin-top:2px", text: T(S.scope2) });
        top.appendChild(rest);
        view.appendChild(top);
        view.appendChild(tabsBar(T, S.tabs, tab, function (i) { tab = i; render(); }));
        (tab === 0 ? cards : tab === 1 ? quiz : table)();
      }

      function moreBox() {
        return more(T, [el("p", { text: T(S.moreT) }), el("p", { class: "small", text: T(S.moreS) })]);
      }

      // ---------- Cards ----------
      function cards() {
        var card = el("div", { class: "fc", role: "button", tabindex: "0", "aria-live": "polite" });
        var cnt = el("span", { class: "cnt", "aria-live": "polite" });
        var chipDefs = [["all", S.fAll], ["np", G.np.s], ["pol", G.pol.s], ["ac", G.ac.s], ["ba", G.ba.s], ["ring", S.fRing], ["sulfur", S.fS]];
        var chipBtns = {};
        var chipBar = el("div", { class: "chipbar", role: "group", "aria-label": T(S.fLabel) }, chipDefs.map(function (c) {
          var b = el("button", { type: "button", "aria-pressed": "false", text: T(c[1]) });
          if (GK.indexOf(c[0]) >= 0) b.style.borderLeft = "8px solid " + gcol(c[0]);
          b.addEventListener("click", function () { filt = c[0]; resetOrder(); upd(); });
          chipBtns[c[0]] = b;
          return b;
        }));
        function flip() { flipped = !flipped; upd(); }
        function go(d) { if (!order.length) return; pos = (pos + d + order.length) % order.length; flipped = false; upd(); }
        card.addEventListener("click", flip);
        card.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
          else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        });
        var prev = el("button", { type: "button", text: T(S.prev) }), next = el("button", { type: "button", text: T(S.next) });
        var shuffle = el("button", { type: "button", text: T(S.shuffle) });
        prev.addEventListener("click", function () { go(-1); });
        next.addEventListener("click", function () { go(1); });
        shuffle.addEventListener("click", function () { order = shuf(order); pos = 0; flipped = false; upd(); });

        function upd() {
          Object.keys(chipBtns).forEach(function (k) { chipBtns[k].setAttribute("aria-pressed", k === filt ? "true" : "false"); });
          cnt.textContent = (order.length ? pos + 1 : 0) + " / " + order.length;
          card.innerHTML = "";
          var a = AA[order[pos]];
          if (!a) return;
          if (!flipped) {
            card.style.borderLeftColor = "var(--k-line)";
            card.setAttribute("aria-label", nm(a) + ". " + T(S.flipHint));
            card.appendChild(el("div", { class: "nm", text: nm(a) }));
            if (a.alt) card.appendChild(el("div", { class: "small", text: altTxt(a) }));
            card.appendChild(el("div", { class: "codes", text: a.a + " · " + a.o }));
            card.appendChild(el("div", { class: "small", text: T(S.rgroup) }));
            card.appendChild(el("div", { class: "rg", html: a.f }));
            if (a.fx) card.appendChild(el("div", { class: "small", text: "(" + T(a.fx) + ")" }));
            card.appendChild(el("div", { class: "hint", text: T(S.flipHint) }));
          } else {
            var g = G[a.g];
            card.style.borderLeftColor = gcol(a.g);
            card.setAttribute("aria-label", nm(a) + ". " + T(g.n));
            card.appendChild(el("div", { class: "nm", style: "font-size:19px", text: nm(a) + " · " + a.a + " · " + a.o }));
            var dl = el("dl", {}, [
              el("dt", { text: T(S.lGroup) }), el("dd", {}, [el("span", { class: "gb", style: "border-color:" + gcol(a.g), text: T(g.n) })]),
              el("dt", { text: T(S.lWater) }), el("dd", { text: T(HP[g.hp]) }),
              el("dt", { text: T(S.lCharge) }), el("dd", { text: T(CH[a.ch || "none"]) + (a.ion ? (a.ion === "guanidino" ? "" : " (" + a.ion + ")") : "") }),
              el("dt", { text: T(S.rgroup) }), el("dd", { html: a.f }),
              el("dt", { text: T(S.lRing) }), el("dd", { text: ringTxt(a) }),
              el("dt", { text: T(S.lS) }), el("dd", { text: T(a.s ? YES : NO) }),
              el("dt", { text: T(S.lEss) }), el("dd", { text: T(a.x ? YES : NO) })
            ]);
            card.appendChild(dl);
            if (SPECIAL[a.k]) card.appendChild(el("p", { class: "note", text: T(SPECIAL[a.k]) }));
            if (DIFF[a.k]) card.appendChild(el("p", { class: "note diff", text: T(DIFFH) + ": " + T(DIFF[a.k]) }));
          }
        }
        view.appendChild(el("div", { class: "wl" }, [
          el("div", { class: "wl-stage" }, [card]),
          el("div", { class: "wl-panel" }, [
            chipBar,
            el("div", { class: "nav" }, [prev, cnt, next, shuffle]),
            moreBox(),
            exam(T, S.exam)
          ])
        ]));
        upd();
      }

      // ---------- Quiz ----------
      function newQuiz() {
        qQueue = shuf(AA.map(function (_, i) { return i; }));
        qi = 0; qScore = 0; qAns = null; pickType();
      }
      function pickType() { qType = Math.random() < 0.25 ? "ring" : "group"; }
      if (!qQueue.length) newQuiz();

      function quiz() {
        var total = qQueue.length;
        if (qi >= total) {
          var rb = el("button", { type: "button", class: "on", text: T(S.restart) });
          rb.addEventListener("click", function () { newQuiz(); render(); });
          view.appendChild(el("div", { class: "wl" }, [
            el("div", { class: "wl-stage" }, [el("div", { class: "fc", style: "cursor:default;min-height:120px" }, [el("div", { class: "nm", text: T(S.done) + qScore + " / " + total })])]),
            el("div", { class: "wl-panel" }, [el("div", { class: "nav" }, [rb]), exam(T, S.exam)])
          ]));
          return;
        }
        var a = AA[qQueue[qi]];
        var front = el("div", { class: "fc", style: "cursor:default;min-height:150px;border-left-color:" + (qAns ? gcol(a.g) : "var(--k-line)") }, [
          el("div", { class: "small", text: T(S.cntQ) + (qi + 1) + " / " + total }),
          el("div", { class: "nm", text: nm(a) }),
          el("div", { class: "small", text: T(S.rgroup) }),
          el("div", { class: "rg", html: a.f }),
          a.fx ? el("div", { class: "small", text: "(" + T(a.fx) + ")" }) : null
        ]);
        var fb = el("div", { class: "fb", "aria-live": "polite" });
        var opts = el("div", { class: "opts" });
        var defs = qType === "group"
          ? GK.map(function (k) { return { v: k, t: G[k].q, ok: k === a.g }; })
          : [{ v: "y", t: YES, ok: a.r > 0 }, { v: "n", t: NO, ok: a.r === 0 }];
        if (qType === "ring") opts.style.gridTemplateColumns = "1fr 1fr";
        var btns = defs.map(function (d) {
          var b = el("button", { type: "button", text: T(d.t), disabled: qAns ? true : null });
          if (qAns && d.ok) b.classList.add("ok");
          if (qAns && qAns === d.v && !d.ok) b.classList.add("no");
          b.addEventListener("click", function () {
            if (qAns) return;
            qAns = d.v; if (d.ok) qScore++;
            render();
            var nb = root.querySelector(".qnext"); if (nb) nb.focus();
          });
          opts.appendChild(b);
          return b;
        });
        var nextB = null;
        if (qAns) {
          var good = defs.filter(function (d) { return d.v === qAns; })[0].ok;
          fb.className = "fb " + (good ? "good" : "bad");
          var txt;
          if (qType === "group") txt = why(a) + " → " + T(G[a.g].n);
          else txt = (a.r ? T(S.ringYes) + T(RING[a.r]) + ": " + T(a.rd) : T(RNO));
          fb.textContent = (good ? "✔ " + T(S.right) : "✘ " + T(S.wrong)) + txt;
          nextB = el("button", { type: "button", class: "qnext on", text: T(S.next) });
          nextB.addEventListener("click", function () { qi++; qAns = null; pickType(); render(); });
        }
        var rs = el("button", { type: "button", text: T(S.restart) });
        rs.addEventListener("click", function () { newQuiz(); render(); });
        view.appendChild(el("div", { class: "wl" }, [
          el("div", { class: "wl-stage" }, [front]),
          el("div", { class: "wl-panel" }, [
            el("p", { class: "small", text: T(qType === "group" ? S.qGroup : S.qRing) }),
            opts, fb,
            el("div", { class: "nav" }, [nextB, rs]),
            el("p", { class: "score", text: T(S.score) + qScore + " / " + (qi + (qAns ? 1 : 0)) }),
            exam(T, S.exam)
          ])
        ]));
      }

      // ---------- Table ----------
      function table() {
        var chipDefs = [["all", S.fAll], ["np", G.np.s], ["pol", G.pol.s], ["ac", G.ac.s], ["ba", G.ba.s]];
        var wrap = el("div", { class: "tw" });
        var chipBtns = {};
        var chipBar = el("div", { class: "chipbar", role: "group", "aria-label": T(S.fLabel) }, chipDefs.map(function (c) {
          var b = el("button", { type: "button", "aria-pressed": "false", text: T(c[1]) });
          if (GK.indexOf(c[0]) >= 0) b.style.borderLeft = "8px solid " + gcol(c[0]);
          b.addEventListener("click", function () { tfilt = c[0]; fillT(); });
          chipBtns[c[0]] = b;
          return b;
        }));
        var cols = [
          ["deck", S.tDeck, true], ["name", S.tName], ["a", S.t3], ["o", S.t1], ["g", S.tG], ["r", S.tR], ["s", S.tS], ["x", S.tE]
        ].filter(function (c) { return !c[2]; });
        function val(a, i, k) {
          if (k === "name") return a.e;
          if (k === "g") return GK.indexOf(a.g);
          return a[k];
        }
        function fillT() {
          Object.keys(chipBtns).forEach(function (k) { chipBtns[k].setAttribute("aria-pressed", k === tfilt ? "true" : "false"); });
          var rows = AA.map(function (a, i) { return { a: a, i: i }; }).filter(function (r) { return tfilt === "all" || r.a.g === tfilt; });
          if (sortKey !== "deck") rows.sort(function (p, q) {
            var x = val(p.a, p.i, sortKey), y = val(q.a, q.i, sortKey);
            return (x < y ? -1 : x > y ? 1 : p.i - q.i) * sortDir;
          });
          var tr = el("tr", {}, cols.map(function (c) {
            var on = sortKey === c[0];
            var b = el("button", { type: "button", text: T(c[1]) + (on ? (sortDir > 0 ? " ▲" : " ▼") : "") });
            b.addEventListener("click", function () {
              if (sortKey === c[0]) { if (sortDir > 0) sortDir = -1; else { sortKey = "deck"; sortDir = 1; } } else { sortKey = c[0]; sortDir = 1; }
              fillT();
              var nb = wrap.querySelectorAll("thead button")[cols.indexOf(c)]; if (nb) nb.focus();
            });
            return el("th", { scope: "col", "aria-sort": on ? (sortDir > 0 ? "ascending" : "descending") : "none" }, [b]);
          }));
          var tb = el("tbody", {}, rows.map(function (r) {
            var a = r.a;
            return el("tr", {}, [
              el("td", { text: nm(a) }),
              el("td", { class: "mono", text: a.a }), el("td", { class: "mono", text: a.o }),
              el("td", { class: "g", style: "border-left-color:" + gcol(a.g) + ";background:color-mix(in srgb," + gcol(a.g) + " 20%,var(--k-sf))", text: T(G[a.g].s) }),
              el("td", { text: a.r ? T(RING[a.r]) : "–" }),
              el("td", { class: "c", text: a.s ? "S" : "–" }),
              el("td", { class: "c", text: a.x ? "✔" : "–" })
            ]);
          }));
          wrap.innerHTML = "";
          wrap.appendChild(el("table", {}, [el("caption", { class: "sr-only", text: T(S.tHint) }), el("thead", {}, [tr]), tb]));
        }
        view.appendChild(el("div", {}, [
          chipBar,
          el("div", { style: "margin:8px 0" }, [wrap]),
          el("p", { class: "small", text: T(S.tHint) }),
          moreBox()
        ]));
        fillT();
      }

      render();
    }
  });
})();
