/* Protein Lab widget — self-contained. See SPEC.md "Widget API". */
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
  var BASE = ".W{--k-ink:var(--ink,#1d2733);--k-sf:var(--surface,#fff);--k-bg:var(--bg,#f4f6f9);--k-mut:var(--muted,#5b6775);--k-line:var(--line,#c9d1da);--k-acc:var(--accent,#2f6fdb);--k-ahl:var(--ahl,#8e44ad);--k-good:var(--good,#1e8e4e);--k-bad:var(--bad,#d03b3b);--k-np:var(--r-nonpolar,#e8a317);--k-pol:var(--r-polar,#16a39a);--k-ac:var(--r-acidic,#d9483b);--k-ba:var(--r-basic,#3a6fd8);--k-hb:var(--hbond,#2a7de1);--k-io:var(--ionic,#d9483b);--k-ds:var(--disulfide,#b8860b);--k-hp:var(--hydrophobic,#e8a317);--k-C:var(--c-carbon,#6b7785);--k-O:var(--c-oxygen,#d9483b);--k-N:var(--c-nitrogen,#3a6fd8);--k-H:var(--c-hydrogen,#9aa5b1);--k-S:var(--c-sulfur,#c9a100);font:15px/1.5 system-ui,-apple-system,'Segoe UI','Hiragino Sans','Noto Sans JP','Noto Sans TC','Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif;color:var(--k-ink);max-width:100%;text-align:left}" +
    ".W *{box-sizing:border-box}" +
    ".W .wl-exam{margin:0}.W .wl-legend{margin:4px 0 0}" +
    ".W .bar{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}" +
    ".W button:not([role=tab]){font:inherit;font-size:14px;min-height:44px;min-width:44px;padding:6px 12px;border:1.5px solid var(--k-line);background:var(--k-sf);color:var(--k-ink);border-radius:10px;cursor:pointer;line-height:1.25}" +
    ".W button:not([role=tab]):hover:not(:disabled){border-color:var(--k-acc)}" +
    ".W button[aria-pressed=true]:not([role=tab]),.W button.on{background:var(--k-acc);color:var(--k-sf);border-color:var(--k-acc)}" +
    ".W button:not([role=tab]):disabled{opacity:.45;cursor:default}" +
    ".W button:focus-visible,.W [tabindex]:focus-visible,.W input:focus-visible{outline:3px solid var(--k-acc);outline-offset:2px}" +
    ".W svg{width:100%;height:auto;display:block;touch-action:manipulation}" +
    ".W svg text{fill:var(--k-ink);font:13px system-ui,-apple-system,'Hiragino Sans','Noto Sans JP','Noto Sans TC','Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif}" +
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
    ".W .tw{overflow-x:auto}.W table.cmp{border-collapse:collapse;width:100%;font-size:13px;line-height:1.35}.W table.cmp th,.W table.cmp td{border:1px solid var(--k-line);padding:6px 8px;text-align:left;vertical-align:top}.W table.cmp thead th{background:var(--k-bg)}.W table.cmp tbody th{background:var(--k-bg);font-size:12px;width:19%}" +
    "@media (max-width:639px){.W table.cmp{table-layout:fixed;font-size:12px;line-height:1.25}.W table.cmp th,.W table.cmp td{padding:4px 5px;overflow-wrap:anywhere}.W table.cmp tbody th{width:20%;font-size:11.5px}}" +
    ".W .fx{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;font-size:14px;margin:8px 0 0}" +
    ".W .fx dt{color:var(--k-mut);font-weight:600}.W .fx dd{margin:0}" +
    ".W .q{margin:8px 0}.W .q .opts{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:4px 0}" +
    ".W .fb{font-size:14px;min-height:1.3em}.W .fb.good{color:var(--k-good)}.W .fb.bad{color:var(--k-bad)}" +
    ".W .tag{display:inline-block;font-size:12px;font-weight:700;padding:1px 8px;border-radius:99px;border:1.5px solid var(--k-line);margin-right:4px}" +
    ".W dl.defs{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;font-size:14px;margin:0}.W dl.defs dt{font-weight:700}.W dl.defs dd{margin:0}";

  function iconInsulin(T) {
    var s = sv("svg", { viewBox: "0 0 160 100", role: "img", "aria-label": IB.t({ en: "insulin", ko: "인슐린" }) });
    s.appendChild(sv("path", { d: "M30 70C40 30 70 20 95 35S115 20 128 28", fill: "none", stroke: "var(--k-acc)", "stroke-width": 6, "stroke-linecap": "round" }));
    s.appendChild(sv("path", { d: "M25 55C35 85 70 90 95 72S125 80 135 66", fill: "none", stroke: "var(--k-pol)", "stroke-width": 6, "stroke-linecap": "round" }));
    [[58, 33, 80], [98, 36, 70]].forEach(function (b) { s.appendChild(sv("line", { x1: b[0], y1: b[1] + 2, x2: b[0], y2: b[2] - 2, stroke: "var(--k-ds)", "stroke-width": 5, "stroke-linecap": "round" })); });
    s.appendChild(sv("text", { x: 12, y: 24, style: "font-size:6.5px;font-weight:700;fill:var(--k-acc)", text: T(["A chain", "A鎖", "A 鏈", "A 사슬"]) }));
    s.appendChild(sv("text", { x: 12, y: 96, style: "font-size:6.5px;font-weight:700;fill:var(--k-pol)", text: T(["B chain", "B鎖", "B 鏈", "B 사슬"]) }));
    s.appendChild(sv("text", { x: 78, y: 58, "text-anchor": "start", style: "font-size:6px;fill:var(--k-ds);font-weight:700", text: "S–S" }));
    return s;
  }
  function iconCollagen() {
    var s = sv("svg", { viewBox: "0 0 160 100", role: "img", "aria-label": IB.t({ en: "collagen", ko: "콜라젠" }) });
    ["--k-acc", "--k-pol", "--k-np"].forEach(function (c, k) {
      var d = "";
      for (var x = 8; x <= 152; x += 4) d += (x === 8 ? "M" : "L") + x + " " + (50 + 22 * Math.sin(x / 11 + k * 2.094));
      s.appendChild(sv("path", { d: d, fill: "none", stroke: "var(" + c + ")", "stroke-width": 5, "stroke-linecap": "round", opacity: .95 }));
    });
    return s;
  }
  function iconHb() {
    var s = sv("svg", { viewBox: "0 0 160 100", role: "img", "aria-label": IB.t({ en: "haemoglobin", ko: "헤모글로빈" }) });
    [[48, 27, "--k-acc", "α"], [112, 27, "--k-pol", "β"], [48, 73, "--k-pol", "β"], [112, 73, "--k-acc", "α"]].forEach(function (q) {
      s.appendChild(sv("circle", { cx: q[0], cy: q[1], r: 21, fill: "var(" + q[2] + ")", opacity: .35, stroke: "var(" + q[2] + ")", "stroke-width": 3 }));
      s.appendChild(sv("text", { x: q[0] - 14, y: q[1] - 12, style: "font-size:6.5px;font-weight:700", text: q[3] }));
      s.appendChild(sv("rect", { x: q[0] - 8, y: q[1] - 8, width: 16, height: 16, rx: 3, fill: "var(--k-ac)" }));
      s.appendChild(sv("text", { x: q[0], y: q[1] + 4, "text-anchor": "middle", style: "font-size:5.5px;font-weight:700;fill:var(--k-sf)", text: "Fe" }));
    });
    return s;
  }
  var PROT = [
    { id: "ins", icon: iconInsulin, name: ["Insulin", "インスリン (insulin)", "胰島素 (insulin)", "인슐린"], shape: "glob", conj: false,
      facts: [
        [["Shape", "形", "形狀", "모양"], ["Globular", "球状 (globular)", "球狀 (globular)", "구형"]],
        [["Type", "種類", "類型", "종류"], ["Non-conjugated (polypeptides only)", "非複合 (non-conjugated)：ポリペプチドのみ", "非結合 (non-conjugated)：只有多肽", "비복합 단백질(폴리펩타이드만)"]],
        [["Quaternary", "四次構造", "四級結構", "4차 구조"], ["2 polypeptides (A chain, 21 amino acids; B chain, 30) linked by disulfide bonds", "2本のポリペプチド (A鎖 21個、B鎖 30個のアミノ酸) がジスルフィド結合でつながる", "2 條多肽（A 鏈 21 個、B 鏈 30 個氨基酸），以二硫鍵連接", "이황화 결합으로 연결된 폴리펩타이드 2개(A 사슬: 아미노산 21개, B 사슬: 30개)"]],
        [["Function", "はたらき", "功能", "기능"], ["Hormone: a chemical messenger carried in the blood (lowers blood glucose)", "ホルモン (hormone)：血液で運ばれる化学的な伝達物質（血糖値を下げる）", "激素 (hormone)：由血液運送的化學信使（降低血糖）", "호르몬: 혈액을 타고 운반되는 화학 신호 물질(혈당을 낮춤)"]],
        [["Solubility", "溶解性", "溶解性", "용해성"], ["Soluble in water, so it can travel in the blood", "水に溶けるので血液で運ばれる", "可溶於水，所以能在血液中運送", "물에 녹으므로 혈액을 타고 이동할 수 있음"]]
      ] },
    { id: "col", icon: iconCollagen, name: ["Collagen", "コラーゲン (collagen)", "膠原蛋白 (collagen)", "콜라젠"], shape: "fib", conj: false,
      facts: [
        [["Shape", "形", "形狀", "모양"], ["Fibrous", "繊維状 (fibrous)", "纖維狀 (fibrous)", "섬유형"]],
        [["Type", "種類", "類型", "종류"], ["Non-conjugated (polypeptides only)", "非複合 (non-conjugated)：ポリペプチドのみ", "非結合 (non-conjugated)：只有多肽", "비복합 단백질(폴리펩타이드만)"]],
        [["Quaternary", "四次構造", "四級結構", "4차 구조"], ["3 polypeptides wound together into a triple helix", "3本のポリペプチドが巻きあって三重らせん (triple helix) になる", "3 條多肽纏繞成三股螺旋 (triple helix)", "3중 나선으로 서로 감긴 폴리펩타이드 3개"]],
        [["Function", "はたらき", "功能", "기능"], ["Structural: high tensile strength (resists being pulled), e.g. in skin and tendons", "構造をつくる: 引っぱりに強い (高い引っ張り強度)。例: 皮膚や腱", "結構功能：抗拉強度高（不易被拉斷），例如皮膚和肌腱", "구조 형성: 인장 강도가 높음(당겨져도 견딤). 예: 피부와 힘줄"]],
        [["Solubility", "溶解性", "溶解性", "용해성"], ["Insoluble in water", "水に溶けない", "不溶於水", "물에 녹지 않음"]]
      ] },
    { id: "hb", icon: iconHb, name: ["Haemoglobin", "ヘモグロビン (haemoglobin)", "血紅蛋白 (haemoglobin)", "헤모글로빈"], shape: "glob", conj: true,
      facts: [
        [["Shape", "形", "形狀", "모양"], ["Globular", "球状 (globular)", "球狀 (globular)", "구형"]],
        [["Type", "種類", "類型", "종류"], ["Conjugated: has a non-polypeptide prosthetic group", "複合 (conjugated)：ポリペプチド以外の補欠分子族 (prosthetic group) をもつ", "結合 (conjugated)：含有非多肽的輔基 (prosthetic group)", "복합 단백질: 폴리펩타이드가 아닌 보결 분자단(prosthetic group)이 있음"]],
        [["Quaternary", "四次構造", "四級結構", "4차 구조"], ["4 polypeptides (in adults: 2 α-globin + 2 β-globin), each with a haem group containing an iron ion (Fe²⁺)", "4本のポリペプチド (成人: α鎖2本 + β鎖2本)。それぞれ鉄イオン (Fe²⁺) を含むヘム (haem) をもつ", "4 條多肽（成人：2 條 α + 2 條 β），每條各有一個含鐵離子 (Fe²⁺) 的血紅素 (haem)", "폴리펩타이드 4개(성인의 경우 α 글로빈 2개 + β 글로빈 2개). 각각 철 이온(Fe²⁺)이 든 헴(haem) 기를 가짐"]],
        [["Function", "はたらき", "功能", "기능"], ["Carries oxygen in red blood cells: each haem binds one O₂", "赤血球で酸素を運ぶ: 各ヘムが O₂ を1分子結合", "在紅血球中運載氧：每個血紅素結合一個 O₂", "적혈구에서 산소를 운반함: 헴 하나가 O₂ 한 분자와 결합"]],
        [["Solubility", "溶解性", "溶解性", "용해성"], ["Soluble in water", "水に溶ける", "可溶於水", "물에 녹음"]]
      ] }
  ];

  var CMP = [
    [["Shape", "形", "形狀", "모양"], [["Globular", "球状 (globular)", "球狀 (globular)", "구형"], ["Fibrous", "繊維状 (fibrous)", "纖維狀 (fibrous)", "섬유형"], ["Globular", "球状 (globular)", "球狀 (globular)", "구형"]]],
    [["Type", "種類", "類型", "종류"], [["Non-conjugated", "非複合 (non-conjugated)", "非結合 (non-conjugated)", "비복합 단백질"], ["Non-conjugated", "非複合 (non-conjugated)", "非結合 (non-conjugated)", "비복합 단백질"], ["Conjugated: haem (Fe²⁺)", "複合 (conjugated): ヘム (Fe²⁺)", "結合 (conjugated)：血紅素 (Fe²⁺)", "복합 단백질: 헴(Fe²⁺)"]]],
    [["Polypeptides", "ポリペプチド", "多肽", "폴리펩타이드"], [["2 (A chain, 21 amino acids; B chain, 30), disulfide-linked", "2本 (A鎖 21個、B鎖 30個のアミノ酸)、ジスルフィド結合", "2 條（A 鏈 21 個、B 鏈 30 個氨基酸），以二硫鍵連接", "2개(A 사슬: 아미노산 21개, B 사슬: 30개), 이황화 결합으로 연결"], ["3, wound into a triple helix", "3本、三重らせん (triple helix)", "3 條，纏繞成三股螺旋 (triple helix)", "3개, 3중 나선으로 감김"], ["4 (2 α + 2 β)", "4本 (α鎖2本 + β鎖2本)", "4 條（2 條 α + 2 條 β）", "4개 (α 2개 + β 2개)"]]],
    [["Function", "はたらき", "功能", "기능"], [["Hormone (lowers blood glucose)", "ホルモン (血糖値を下げる)", "激素（降低血糖）", "호르몬(혈당을 낮춤)"], ["Structural: high tensile strength", "構造: 高い引っ張り強度", "結構功能：抗拉強度高", "구조 형성: 인장 강도가 높음"], ["Carries oxygen in red blood cells", "赤血球で酸素を運ぶ", "在紅血球中運載氧", "적혈구에서 산소를 운반함"]]],
    [["Solubility", "溶解性", "溶解性", "용해성"], [["Soluble in water", "水に溶ける", "可溶於水", "물에 녹음"], ["Insoluble in water", "水に溶けない", "不溶於水", "물에 녹지 않음"], ["Soluble in water", "水に溶ける", "可溶於水", "물에 녹음"]]]
  ];

  IB.registerWidget("protein-compare", {
    title: { en: "Insulin, collagen and haemoglobin", ja: "インスリン・コラーゲン・ヘモグロビン", zh: "胰島素、膠原蛋白與血紅蛋白", ko: "인슐린, 콜라젠, 헤모글로빈" },
    mount: function (root, ctx) {
      css("protein-compare", CSS);
      root.classList.add("W");
      var T = mkT(ctx);
      var NAR = window.innerWidth < 640, tab = optTab(ctx, 4), quiz = false, shapeOK = {}, conjOK = {};
      var TABS = PROT.map(function (p) { return { n: p.name.map(function (x) { return x.replace(/ ?\(.*\)$/, ""); }), a: true }; }).concat([{ n: ["Compare and key terms", "比較と用語", "比較與關鍵詞", "비교와 핵심 용어"], a: true }]);
      var EXAMTXT = [
        "Insulin: globular, non-conjugated, 2 polypeptides (disulfide-linked), soluble hormone. Collagen: fibrous, non-conjugated, 3 polypeptides in a triple helix, insoluble, high tensile strength. Haemoglobin: globular, conjugated, 4 polypeptides each with a haem (iron) group, carries oxygen.",
        "インスリン: 球状・非複合・2本のポリペプチド (ジスルフィド結合)・水溶性のホルモン。コラーゲン: 繊維状・非複合・3本が三重らせん・不溶性・引っ張り強度が高い。ヘモグロビン: 球状・複合・4本のポリペプチドそれぞれにヘム (鉄) をもち酸素を運ぶ。",
        "胰島素：球狀、非結合、2 條多肽（以二硫鍵連接）、可溶的激素。膠原蛋白：纖維狀、非結合、3 條多肽組成三股螺旋、不溶、抗拉強度高。血紅蛋白：球狀、結合、4 條多肽各有一個血紅素（含鐵）、運載氧。", "인슐린: 구형, 비복합 단백질, 폴리펩타이드 2개(이황화 결합으로 연결), 물에 녹는 호르몬. 콜라젠: 섬유형, 비복합 단백질, 3중 나선을 이룬 폴리펩타이드 3개, 물에 녹지 않음, 인장 강도가 높음. 헤모글로빈: 구형, 복합 단백질, 폴리펩타이드 4개가 각각 헴(철) 기를 가짐, 산소를 운반함."];
      var view = el("div");
      root.appendChild(view);
      render();

      function factsOf(p) {
        var dl = el("dl", { class: "fx" });
        p.facts.forEach(function (f) { dl.appendChild(el("dt", { text: T(f[0]) })); dl.appendChild(el("dd", { text: T(f[1]) })); });
        return dl;
      }
      function pair(p, label, a, b, correct, store) {
        var fb = el("div", { class: "fb", "aria-live": "polite" });
        var bs = [a, b].map(function (o) {
          var bt = el("button", { type: "button", text: T(o[1]) });
          bt.addEventListener("click", function () {
            if (o[0] === correct) { store[p.id] = 1; render(); }
            else { fb.className = "fb bad"; fb.textContent = "✘ " + T(["Not quite: think about its structure and job.", "惜しい。構造とはたらきを考えてみましょう。", "不太對：想想它的結構和功能。", "아쉽네요. 구조와 하는 일을 생각해 보세요."]); }
          });
          return bt;
        });
        return el("div", { class: "q" }, [el("strong", { text: T(label) }), el("div", { class: "opts" }, bs), fb]);
      }
      function render() {
        view.innerHTML = "";
        view.appendChild(tabsBar(T, TABS, tab, function (i) { tab = i; render(); }));
        var parts = tab < 3 ? protein(PROT[tab]) : compare();
        view.appendChild(el("div", { class: "wl" }, [
          el("div", { class: "wl-stage" }, parts.stage),
          el("div", { class: "wl-panel" }, parts.panel.concat([exam(T, EXAMTXT)]))
        ]));
      }
      function protein(p) {
        var svg = p.icon(T);
        svg.setAttribute("style", "max-width:440px");
        var n = 0; PROT.forEach(function (q) { if (shapeOK[q.id] && conjOK[q.id]) n++; });
        var modeBtns = [false, true].map(function (q) {
          var b = el("button", { type: "button", "aria-pressed": quiz === q ? "true" : "false", text: q ? T(["Quiz me", "クイズ", "小測驗", "퀴즈 풀기"]) : T(["Explore", "見てみる", "瀏覽", "탐구"]) });
          b.addEventListener("click", function () { quiz = q; render(); });
          return b;
        });
        var done = shapeOK[p.id] && conjOK[p.id];
        var body = [];
        if (!quiz || done) {
          if (quiz) body.push(el("p", { class: "fb good", text: "✔ " + T(["Both correct. Here are the facts:", "両方正解。詳しい情報:", "兩項皆正確。以下是資料：", "둘 다 맞았습니다. 사실은 다음과 같습니다:"]) }));
          body.push(factsOf(p));
        } else {
          if (shapeOK[p.id]) body.push(el("p", { class: "fb good", text: "✔ " + T(["Shape: ", "形: ", "形狀：", "모양: "]) + T(p.shape === "glob" ? ["globular", "球状 (globular)", "球狀 (globular)", "구형(globular)"] : ["fibrous", "繊維状 (fibrous)", "纖維狀 (fibrous)", "섬유형(fibrous)"]) }));
          else body.push(pair(p, ["Is it globular or fibrous?", "球状か繊維状か?", "是球狀還是纖維狀？", "구형일까요, 섬유형일까요?"], ["glob", ["Globular", "球状 (globular)", "球狀 (globular)", "구형"]], ["fib", ["Fibrous", "繊維状 (fibrous)", "纖維狀 (fibrous)", "섬유형"]], p.shape, shapeOK));
          if (conjOK[p.id]) body.push(el("p", { class: "fb good", text: "✔ " + T(p.conj ? ["Conjugated", "複合 (conjugated)", "結合 (conjugated)", "복합 단백질(conjugated)"] : ["Non-conjugated", "非複合 (non-conjugated)", "非結合 (non-conjugated)", "비복합 단백질"]) }));
          else body.push(pair(p, ["Conjugated or non-conjugated?", "複合か非複合か?", "是結合還是非結合？", "복합 단백질일까요, 비복합 단백질일까요?"], [true, ["Conjugated", "複合 (conjugated)", "結合 (conjugated)", "복합 단백질(conjugated)"]], [false, ["Non-conjugated", "非複合 (non-conjugated)", "非結合 (non-conjugated)", "비복합 단백질"]], p.conj, conjOK));
        }
        return {
          stage: [svg, el("p", { class: "small", style: "text-align:center", text: T(["Schematic diagram", "模式図", "示意圖", "모식도"]) })],
          panel: [el("div", { class: "bar", style: "margin:0" }, modeBtns)].concat(body, quiz ? [el("p", { class: "small", "aria-live": "polite", text: T(["Proteins classified correctly: ", "正しく分類できたタンパク質: ", "已正確分類的蛋白質：", "바르게 분류한 단백질 수: "]) + n + " / 3" })] : [])
        };
      }
      function compare() {
        var tbl = el("table", { class: "cmp" });
        tbl.appendChild(el("thead", {}, [el("tr", {}, [el("th", { text: "" })].concat(PROT.map(function (p) { return el("th", { scope: "col", text: T(p.name) }); })))]));
        tbl.appendChild(el("tbody", {}, CMP.map(function (r) {
          return el("tr", {}, [el("th", { scope: "row", text: T(r[0]) })].concat(r[1].map(function (c) { return el("td", { text: T(c) }); })));
        })));
        return {
          stage: [el("div", { class: "tw" }, [tbl])],
          panel: [
            NAR ? null : defs(),
            more(T, [NAR ? defs() : null,
              el("p", { class: "small", text: T(["Form and function: a globular shape lets insulin dissolve and travel in the blood; collagen's triple helix gives it high tensile strength and its insolubility suits a structural role.", "形とはたらき: 球状なのでインスリンは血液に溶けて運ばれる。コラーゲンは三重らせんで引っ張り強度が高く、水に溶けないので構造の役割に向く。", "形狀與功能：球狀令胰島素能溶解並在血液中運送；膠原蛋白的三股螺旋令它抗拉強度高，不溶於水則適合結構功能。", "모양과 기능: 구형이어서 인슐린은 물에 녹아 혈액을 타고 이동할 수 있고, 콜라젠의 3중 나선은 높은 인장 강도를 주며 물에 녹지 않는 성질은 구조를 이루는 역할에 알맞습니다."]) }),
              el("p", { class: "small", text: T(["Cryo-electron microscopy (cryo-EM) can image single protein molecules, which cannot be seen with the unaided senses.", "クライオ電子顕微鏡 (cryo-EM) は、肉眼では見えない1分子のタンパク質を画像化できます。", "冷凍電子顯微鏡 (cryo-EM) 能為單一蛋白質分子造影，這是肉眼無法觀察到的。", "극저온 전자 현미경(cryo-EM)을 사용하면 인간의 감각으로는 볼 수 없는 단백질 분자 하나하나를 영상으로 볼 수 있습니다."]) })
            ])
          ]
        };
        function defs() { return el("dl", { class: "defs" }, [
              el("dt", { text: T(["Globular", "球状 (globular)", "球狀 (globular)", "구형"]) }), el("dd", { text: T(["Folded into a compact, roughly round shape; usually soluble in water; often has a chemical job (hormone, transport, enzyme).", "コンパクトでほぼ丸い形に折りたたまれる。ふつう水に溶ける。ホルモン、輸送、酵素など化学的なはたらきをすることが多い。", "摺疊成緊密、大致圓形的形狀；通常可溶於水；常執行化學功能（激素、運輸、酶）。", "작고 둥근 모양으로 접혀 있고, 대개 물에 녹으며, 호르몬·운반·효소처럼 화학적인 일을 하는 경우가 많습니다."]) }),
              el("dt", { text: T(["Fibrous", "繊維状 (fibrous)", "纖維狀 (fibrous)", "섬유형"]) }), el("dd", { text: T(["Long strands or ropes; usually insoluble in water; often gives strength (structural).", "長いひも状やロープ状。ふつう水に溶けない。強度を与える（構造）ことが多い。", "長條或繩索狀；通常不溶於水；常提供強度（結構功能）。", "길쭉한 가닥이나 밧줄 모양이고, 대개 물에 녹지 않으며, 강도를 주는(구조 형성) 경우가 많습니다."]) }),
              el("dt", { text: T(["Non-conjugated", "非複合 (non-conjugated)", "非結合 (non-conjugated)", "비복합 단백질"]) }), el("dd", { text: T(["Made of polypeptide chain(s) only.", "ポリペプチド鎖だけでできている。", "只由多肽鏈組成。", "폴리펩타이드 사슬로만 이루어져 있습니다."]) }),
              el("dt", { text: T(["Conjugated", "複合 (conjugated)", "結合 (conjugated)", "복합 단백질(conjugated)"]) }), el("dd", { text: T(["Also contains a non-polypeptide part, a prosthetic group (e.g. haem).", "ポリペプチド以外の部分、補欠分子族 (prosthetic group：例 ヘム) ももつ。", "還含有非多肽部分，即輔基 (prosthetic group，例如血紅素)。", "폴리펩타이드가 아닌 부분인 보결 분자단(예: 헴)도 들어 있습니다."]) })
        ]); }
      }
    }
  });
})();
