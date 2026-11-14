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
  var BASE = ".W{--k-ink:var(--ink,#1d2733);--k-sf:var(--surface,#fff);--k-bg:var(--bg,#f4f6f9);--k-mut:var(--muted,#5b6775);--k-line:var(--line,#c9d1da);--k-acc:var(--accent,#2f6fdb);--k-ahl:var(--ahl,#8e44ad);--k-good:var(--good,#1e8e4e);--k-bad:var(--bad,#d03b3b);--k-np:var(--r-nonpolar,#e8a317);--k-pol:var(--r-polar,#16a39a);--k-ac:var(--r-acidic,#d9483b);--k-ba:var(--r-basic,#3a6fd8);--k-hb:var(--hbond,#2a7de1);--k-io:var(--ionic,#d9483b);--k-ds:var(--disulfide,#b8860b);--k-hp:var(--hydrophobic,#e8a317);--k-C:var(--c-carbon,#6b7785);--k-O:var(--c-oxygen,#d9483b);--k-N:var(--c-nitrogen,#3a6fd8);--k-H:var(--c-hydrogen,#9aa5b1);--k-S:var(--c-sulfur,#c9a100);font:15px/1.5 system-ui,-apple-system,'Segoe UI','Hiragino Sans','Noto Sans JP','Noto Sans TC',sans-serif;color:var(--k-ink);max-width:100%;text-align:left}" +
    ".W *{box-sizing:border-box}" +
    ".W .wl-exam{margin:0}.W .wl-legend{margin:4px 0 0}" +
    ".W .bar{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}" +
    ".W button:not([role=tab]){font:inherit;font-size:14px;min-height:44px;min-width:44px;padding:6px 12px;border:1.5px solid var(--k-line);background:var(--k-sf);color:var(--k-ink);border-radius:10px;cursor:pointer;line-height:1.25}" +
    ".W button:not([role=tab]):hover:not(:disabled){border-color:var(--k-acc)}" +
    ".W button[aria-pressed=true]:not([role=tab]),.W button.on{background:var(--k-acc);color:var(--k-sf);border-color:var(--k-acc)}" +
    ".W button:not([role=tab]):disabled{opacity:.45;cursor:default}" +
    ".W button:focus-visible,.W [tabindex]:focus-visible,.W input:focus-visible{outline:3px solid var(--k-acc);outline-offset:2px}" +
    ".W svg{width:100%;height:auto;display:block;touch-action:manipulation}" +
    ".W svg text{fill:var(--k-ink);font:13px system-ui,-apple-system,'Hiragino Sans','Noto Sans JP','Noto Sans TC',sans-serif}" +
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
  var EXAM = ["What to remember for the exam", "試験で覚えること (exam points)", "考試重點 (exam points)"];
  var REDUCED = function () { try { return window.matchMedia("(prefers-reduced-motion:reduce)").matches; } catch (e) { return false; } };
  function mkT(ctx) { return function (a) { return ctx.t({ en: a[0], ja: a[1], zh: a[2] }); }; }
  function exam(T, a) {
    if (window.innerWidth < 640) return el("details", { class: "exam wl-exam" }, [el("summary", { text: T(EXAM), style: "font-weight:700;cursor:pointer;min-height:36px;display:flex;align-items:center" }), el("div", { text: T(a) })]);
    return el("div", { class: "exam wl-exam" }, [el("strong", { text: T(EXAM) + ": " }), document.createTextNode(T(a))]);
  }
  function ahl() { return el("span", { class: "ahl", text: "AHL" }); }
  function legendItem(cls, color, label) { return el("span", {}, [el("span", { class: cls, style: (cls === "i" ? "background:" : "border-color:") + color }), label]); }
  var MORE = ["More detail", "詳しく見る", "更多詳情"];
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
    return bar;
  }
  var CSS =
    ".W .tg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:8px 0}" +
    ".W .tg button{display:flex;align-items:center;gap:8px;text-align:left}" +
    ".W .tg .sw{flex:none;width:22px;height:0;border-top:4px solid}" +
    ".W .tg button[aria-pressed=true] .sw{border-color:var(--k-sf)!important}" +
    ".W .info{min-height:5.6em}.W .info p{margin:0}.W .info b{display:inline-block;border-bottom:3px solid}.W .tg{margin:0}.W .tg button.foc{box-shadow:0 0 0 2px var(--k-ink)}" +
    ".W .tg button{font-size:13px;padding:4px 8px;line-height:1.2}";
  var COL = { N: "--k-np", P: "--k-pol", A: "--k-ac", B: "--k-ba", C: "--k-S" };
  var R = [
    ["P", 50, 235], ["P", 25, 175], ["B", 45, 120], ["C", 75, 60], ["N", 125, 90], ["N", 175, 100], ["N", 225, 90], ["P", 285, 70], ["B", 325, 55],
    ["P", 335, 110], ["A", 295, 125], ["N", 255, 150], ["N", 215, 160], ["N", 170, 165], ["C", 110, 135], ["A", 80, 185], ["P", 110, 230]
  ];
  var HB = [[7, 9], [0, 16]], IO = [[2, 15], [8, 10]], DS = [[3, 14]], CORE = [4, 5, 6, 11, 12, 13];
  var KINDS = {
    hb: { col: "--k-hb", n: ["Hydrogen bonds", "水素結合 (hydrogen bonds)", "氫鍵 (hydrogen bonds)"],
      d: ["Form between polar R-groups: a slightly positive H on one and a slightly negative O or N on the other. Each is weak, but there are many.", "極性の R基 の間にできます。一方のわずかに正の H と、他方のわずかに負の O や N がひきあいます。1つ1つは弱いですが、数が多いのです。", "在極性 R 基之間形成：一個帶微正電的 H 與另一個帶微負電的 O 或 N 相吸。每一個都很弱，但數量很多。"] },
    io: { col: "--k-io", n: ["Ionic bonds", "イオン結合 (ionic bonds)", "離子鍵 (ionic bonds)"],
      d: ["Between a negative R-group (–COO⁻, made when –COOH loses H⁺) and a positive R-group (–NH₃⁺, made when –NH₂ gains H⁺). Opposite charges attract. Changing pH changes these charges.", "負の R基 (–COO⁻：–COOH が H⁺ を失ってできる) と正の R基 (–NH₃⁺：–NH₂ が H⁺ を受け取ってできる) の間にできます。異符号の電荷がひきあいます。pH が変わるとこの電荷が変わります。", "在帶負電的 R 基 (–COO⁻，由 –COOH 失去 H⁺ 而成) 與帶正電的 R 基 (–NH₃⁺，由 –NH₂ 得到 H⁺ 而成) 之間形成。異性電荷相吸。pH 改變會改變這些電荷。"] },
    ds: { col: "--k-ds", n: ["Disulfide bonds", "ジスルフィド結合 (disulfide bonds)", "二硫鍵 (disulfide bonds)"],
      d: ["A covalent bond between the sulfur atoms (–S–S–) of two cysteines. Being covalent, it is the strongest of the four.", "2つのシステイン (cysteine) の硫黄原子の間の共有結合 (–S–S–) です。共有結合なので、4つの中で最も強いものです。", "兩個半胱氨酸 (cysteine) 的硫原子之間的共價鍵 (–S–S–)。因為是共價鍵，是四者中最強的。"] },
    hp: { col: "--k-hp", n: ["Hydrophobic interactions", "疎水性相互作用 (hydrophobic interactions)", "疏水相互作用 (hydrophobic interactions)"],
      d: ["Non-polar R-groups cluster together in the core, away from the surrounding water. It is a clustering effect rather than a bond between the R-groups.", "非極性の R基 は、周りの水から離れて核に集まります。R基どうしの結合というより、集まる効果です。", "非極性 R 基聚集在核心，遠離周圍的水。這是一種聚集效應，而非 R 基之間的鍵。"] }
  };
  var KORDER = ["hb", "io", "ds", "hp"];

  IB.registerWidget("protein-folding", {
    title: { en: "Tertiary structure bonds", ja: "三次構造をつくる結合", zh: "三級結構的鍵" },
    mount: function (root, ctx) {
      css("protein-folding", CSS);
      root.classList.add("W");
      var T = mkT(ctx);
      var on = { hb: true, io: false, ds: false, hp: false };
      var focus = "hb";
      var tab = optTab(ctx, 2), NAR = window.innerWidth < 640;
      var TABS = [
        { n: ["Globular, in water", "水中の球状 (globular)", "水中球狀 (globular)"], a: true },
        { n: ["Integral, in membrane", "膜の内在性 (integral)", "膜內整合 (integral)"], a: true }
      ];
      var EXAMTXT = [
        "Tertiary structure is held by hydrogen bonds, ionic bonds, disulfide (covalent) bonds between cysteines, and hydrophobic interactions. In water-soluble globular proteins hydrophobic R-groups are in the core; integral membrane proteins have hydrophobic regions in the membrane.",
        "三次構造は、水素結合、イオン結合、システイン間のジスルフィド結合（共有結合）、疎水性相互作用で保たれる。水溶性の球状タンパク質では疎水性の R基 は核に、内在性膜タンパク質では疎水性の領域が膜の中にある。",
        "三級結構由氫鍵、離子鍵、半胱氨酸之間的二硫鍵（共價鍵）和疏水相互作用維持。水溶性球狀蛋白質的疏水 R 基位於核心；整合膜蛋白質的疏水區域位於膜內。"];
      var view = el("div");
      root.appendChild(view);
      render();

      function line(a, b, col, w, dash) {
        return sv("line", { x1: R[a][1], y1: R[a][2], x2: R[b][1], y2: R[b][2], stroke: "var(" + col + ")", "stroke-width": w, "stroke-dasharray": dash || null, "stroke-linecap": "round" });
      }
      function beadsOf(rs) {
        return rs.map(function (r) {
          var g = sv("g", {}, [sv("circle", { cx: r[1], cy: r[2], r: 12, fill: "var(" + COL[r[0]] + ")", stroke: "var(--k-sf)", "stroke-width": 2 })]);
          var t = r[0] === "A" ? "−" : r[0] === "B" ? "+" : r[0] === "C" ? "S" : "";
          if (t) g.appendChild(sv("text", { x: r[1], y: r[2] + 5, "text-anchor": "middle", style: "font-size:14px;font-weight:700;fill:var(--k-sf)", text: t }));
          return g;
        });
      }
      function render() {
        view.innerHTML = "";
        view.appendChild(tabsBar(T, TABS, tab, function (i) { tab = i; render(); }));
        var parts = tab === 0 ? globular() : membrane();
        view.appendChild(el("div", { class: "wl" }, [
          el("div", { class: "wl-stage" }, parts.stage),
          el("div", { class: "wl-panel" }, parts.panel.concat([exam(T, EXAMTXT)]))
        ]));
      }
      function globular() {
        var svg = sv("svg", { viewBox: "0 0 360 262", role: "img", "aria-label": T(["Folded polypeptide with bonds", "結合を示す折りたたまれたポリペプチド", "顯示各種鍵的摺疊多肽"]) });
        [[15, 15], [335, 20], [350, 160], [20, 120], [190, 20], [190, 250], [345, 240], [10, 255]].forEach(function (p) {
          svg.appendChild(sv("text", { x: p[0], y: p[1] + 4, "text-anchor": "middle", style: "font-size:12px;fill:var(--k-hb);opacity:.7", text: "H₂O" }));
        });
        var hpL = sv("g", { style: "display:" + (on.hp ? "block" : "none") });
        CORE.forEach(function (i) { hpL.appendChild(sv("circle", { cx: R[i][1], cy: R[i][2], r: 30, fill: "var(--k-hp)", opacity: .2 })); });
        hpL.appendChild(sv("text", { x: 215, y: 126, "text-anchor": "middle", style: "font-size:12px;font-weight:700;paint-order:stroke;stroke:var(--k-sf);stroke-width:3px", text: T(["hydrophobic core", "疎水性の核", "疏水核心"]) }));
        svg.appendChild(hpL);
        var d = "M" + R[0][1] + " " + R[0][2];
        for (var i = 1; i < R.length - 1; i++) d += "Q" + R[i][1] + " " + R[i][2] + " " + (R[i][1] + R[i + 1][1]) / 2 + " " + (R[i][2] + R[i + 1][2]) / 2;
        d += "L" + R[R.length - 1][1] + " " + R[R.length - 1][2];
        svg.appendChild(sv("path", { d: d, fill: "none", stroke: "var(--k-mut)", "stroke-width": 4, "stroke-linecap": "round" }));
        var L = {};
        L.hb = sv("g", {}, HB.map(function (p) { return line(p[0], p[1], "--k-hb", 3.5, "5 4"); }));
        L.io = sv("g", {}, IO.map(function (p) { return line(p[0], p[1], "--k-io", 4, "1 5"); }));
        L.ds = sv("g", {}, DS.map(function (p) {
          var g = sv("g", {}, [line(p[0], p[1], "--k-ds", 6)]);
          g.appendChild(sv("text", { x: (R[p[0]][1] + R[p[1]][1]) / 2 + 22, y: (R[p[0]][2] + R[p[1]][2]) / 2 + 4, "text-anchor": "start", style: "font-size:12px;font-weight:700;paint-order:stroke;stroke:var(--k-sf);stroke-width:3px", text: "S–S" }));
          return g;
        }));
        ["hb", "io", "ds"].forEach(function (k) { L[k].style.display = on[k] ? "block" : "none"; svg.appendChild(L[k]); });
        beadsOf(R).forEach(function (b) { svg.appendChild(b); });
        svg.appendChild(sv("text", { x: R[0][1], y: R[0][2] + 27, "text-anchor": "middle", style: "font-size:12px", text: "N" }));
        svg.appendChild(sv("text", { x: R[16][1], y: R[16][2] + 27, "text-anchor": "middle", style: "font-size:12px", text: "C" }));
        var inf = el("div", { class: "panel info", "aria-live": "polite" });
        var btns = {};
        function info() {
          inf.innerHTML = "";
          if (on[focus]) { inf.appendChild(el("p", {}, [el("b", { style: "border-color:var(" + KINDS[focus].col + ")", text: T(KINDS[focus].n) }), " " + T(KINDS[focus].d)])); }
          else inf.appendChild(el("p", { class: "small", text: T(["Switch a bond type on to see it.", "結合の種類をオンにすると表示されます。", "開啟一種鍵的類型即可顯示。"]) }));
          KORDER.forEach(function (k) { btns[k].classList.toggle("foc", on[k] && k === focus); });
        }
        var tg = el("div", { class: "tg" }, KORDER.map(function (k) {
          var K = KINDS[k];
          var b = el("button", { type: "button", "aria-pressed": on[k] ? "true" : "false" }, [el("span", { class: "sw", style: "border-color:var(" + K.col + ")" + (k === "hb" ? ";border-top-style:dashed" : k === "io" ? ";border-top-style:dotted" : "") }), T(K.n)]);
          btns[k] = b;
          b.addEventListener("click", function () {
            on[k] = !on[k]; b.setAttribute("aria-pressed", on[k] ? "true" : "false");
            (k === "hp" ? hpL : L[k]).style.display = on[k] ? "block" : "none";
            if (on[k]) focus = k; else if (focus === k) focus = KORDER.filter(function (x) { return on[x]; })[0] || k;
            info();
          });
          return b;
        }));
        var swatches = ["N", "P", "A", "B"].map(function (k) {
          return legendItem("i", "var(" + COL[k] + ")", T({ N: ["non-polar", "非極性", "非極性"], P: ["polar", "極性", "極性"], A: ["acidic (−)", "酸性 (−)", "酸性 (−)"], B: ["basic (+)", "塩基性 (+)", "鹼性 (+)"] }[k]));
        }).concat([legendItem("i", "var(--k-S)", T(["cysteine (–SH)", "システイン (–SH)", "半胱氨酸 (–SH)"]))]);
        var lead = el("p", { class: "small", text: T(["A polypeptide folds because of interactions between its R-groups. Switch each type on to see where it acts.", "ポリペプチドは R基どうしの相互作用で折りたたまれます。種類ごとにオンにして、どこで働くか見てみましょう。", "多肽因 R 基之間的相互作用而摺疊。逐一開啟各類型，看看它們在哪裏起作用。"]) });
        var panel = [
          NAR ? null : lead,
          tg, inf,
          more(T, [NAR ? lead : null, el("p", { class: "small", text: T(["Strength: disulfide bonds are covalent and the strongest. The other three are weak individually, but together they hold the shape. Only cysteine needs to be named for disulfide bonds; you do not need to name other amino acids.", "強さ: ジスルフィド結合は共有結合で最も強い結合です。他の3つは1つ1つは弱いですが、まとまって形を保ちます。名前を覚える必要があるのはジスルフィド結合をつくるシステインだけで、他のアミノ酸の名前は不要です。", "強度：二硫鍵是共價鍵，最強。其餘三種個別都較弱，但合起來維持形狀。只需記得形成二硫鍵的半胱氨酸，不需要記其他氨基酸的名稱。"]) })])
        ];
        info();
        return { stage: [svg, el("div", { class: "legend wl-legend" }, swatches)], panel: panel };
      }
      function membrane() {
        var svg = sv("svg", { viewBox: "0 8 360 282", role: "img", "aria-label": T(["Integral membrane protein in a phospholipid bilayer", "リン脂質二重層にある内在性膜タンパク質", "磷脂雙層中的整合膜蛋白質"]) });
        svg.appendChild(sv("rect", { x: 0, y: 104, width: 360, height: 92, fill: "var(--k-hp)", opacity: .12 }));
        for (var x = 8; x < 360; x += 17) {
          svg.appendChild(sv("path", { d: "M" + (x - 3) + " 110V150M" + (x + 3) + " 110V150M" + (x - 3) + " 190V150M" + (x + 3) + " 190V150", stroke: "var(--k-mut)", "stroke-width": 1.5, fill: "none", opacity: .6 }));
          svg.appendChild(sv("circle", { cx: x, cy: 104, r: 6, fill: "var(--k-C)" }));
          svg.appendChild(sv("circle", { cx: x, cy: 196, r: 6, fill: "var(--k-C)" }));
        }
        var pts = [["P", 150, 25], ["P", 185, 45], ["B", 160, 72], ["N", 175, 112], ["N", 200, 128], ["N", 175, 144], ["N", 200, 160], ["N", 175, 176], ["N", 195, 192], ["A", 175, 222], ["P", 205, 245], ["P", 170, 272]];
        var d = "M" + pts[0][1] + " " + pts[0][2];
        for (var i = 1; i < pts.length; i++) d += "L" + pts[i][1] + " " + pts[i][2];
        svg.appendChild(sv("path", { d: d, fill: "none", stroke: "var(--k-mut)", "stroke-width": 4, "stroke-linejoin": "round" }));
        beadsOf(pts).forEach(function (b) { svg.appendChild(b); });
        svg.appendChild(sv("rect", { x: 140, y: 102, width: 80, height: 94, rx: 10, fill: "none", stroke: "var(--k-hp)", "stroke-width": 2.5, "stroke-dasharray": "5 4" }));
        function lab(x, y, t, anc) { svg.appendChild(sv("text", { x: x, y: y, "text-anchor": anc || "start", style: "font-size:13px;font-weight:600;paint-order:stroke;stroke:var(--k-sf);stroke-width:3.5px", text: t })); }
        lab(236, 60, T(["water", "水", "水"]));
        lab(236, 258, T(["water", "水", "水"]));
        lab(236, 133, T(["hydrophobic", "疎水性の", "疏水的"])); lab(236, 149, T(["fatty acid tails", "脂肪酸の尾部", "脂肪酸尾部"])); lab(236, 165, T(["of the bilayer", "(二重層の内部)", "（雙層內部）"]));
        lab(8, 98, T(["phospholipid bilayer", "リン脂質二重層", "磷脂雙層"]));
        var swatches = ["N", "P", "A", "B"].map(function (k) {
          return legendItem("i", "var(" + COL[k] + ")", T({ N: ["non-polar", "非極性", "非極性"], P: ["polar", "極性", "極性"], A: ["acidic (−)", "酸性 (−)", "酸性 (−)"], B: ["basic (+)", "塩基性 (+)", "鹼性 (+)"] }[k]));
        });
        return {
          stage: [svg, el("div", { class: "legend wl-legend" }, swatches)],
          panel: [
            el("p", { text: T(["Integral proteins have a region of hydrophobic (non-polar) amino acids. This region sits among the hydrophobic fatty-acid tails inside the membrane and helps embed the protein. Polar and charged R-groups stay at the surfaces, in contact with water.", "内在性タンパク質 (integral protein) には疎水性（非極性）のアミノ酸の領域があります。この領域は膜内部の疎水性の脂肪酸の尾部の間に位置し、タンパク質を膜に埋め込むのに役立ちます。極性や電荷をもつ R基 は、水に接する表面にあります。", "整合蛋白質 (integral protein) 有一段疏水（非極性）氨基酸的區域。這個區域位於膜內疏水的脂肪酸尾部之間，幫助蛋白質嵌入膜中。極性和帶電的 R 基則在與水接觸的表面。"]) }),
            el("p", { class: "small", text: T(["Compare: in a soluble globular protein the hydrophobic R-groups are in the core, away from water. Here they face the membrane lipids instead.", "比較: 水溶性の球状タンパク質では、疎水性の R基 は水から離れた核にあります。ここでは膜の脂質に向いています。", "比較：水溶性球狀蛋白質的疏水 R 基在核心，遠離水；這裏則面向膜脂質。"]) })
          ]
        };
      }
    }
  });
})();
