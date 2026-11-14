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
    ".W .res,.W .mv{transition:transform .8s ease,opacity .7s ease}" +
    ".W .atom text{fill:var(--k-sf);font-weight:700}" +
    ".W .eq{font-size:16px;font-weight:600;text-align:center}" +
    ".W .big{font-size:22px;font-weight:700;word-break:break-all;text-align:center}" +
    ".W input[type=range]{width:100%;min-height:40px;accent-color:var(--k-acc)}" +
    ".W .lab{display:flex;justify-content:space-between;align-items:center;gap:8px}" +
    ".W .big{font-size:clamp(18px,3.2vw,26px);padding:14px 10px}";
  var NAMES = ["", "amino acid", "amino acid", "dipeptide", "tripeptide", "tetrapeptide"];
  var X0 = 40, P = 72, G = 54, Y = 96, MAXR = 4;

  IB.registerWidget("peptide-builder", {
    title: { en: "Building a polypeptide", ja: "ポリペプチドをつくる", zh: "建構多肽" },
    mount: function (root, ctx) {
      css("peptide-builder", CSS);
      root.classList.add("W");
      var T = mkT(ctx);
      var timers = [];
      function later(f, ms) { timers.push(setTimeout(f, ms)); }
      var n, cond, busy, res, svg, bondLayer, waterLayer, eq, bCond, bAdd, status;
      var tab = optTab(ctx, 2);
      var TABS = [
        { n: ["1 Condensation", "1 縮合反応", "1 縮合反應"] },
        { n: ["2 How many sequences?", "2 配列は何通り？", "2 有多少種序列？"] }
      ];
      var tabHost = el("div"), panes = [el("div"), el("div")];
      root.appendChild(tabHost); root.appendChild(panes[0]); root.appendChild(panes[1]);
      function showTab(i) {
        tab = i;
        tabHost.innerHTML = ""; tabHost.appendChild(tabsBar(T, TABS, tab, showTab));
        panes.forEach(function (p, k) { p.style.display = k === tab ? "" : "none"; });
      }

      function xOf(j) { return X0 + j * P + ((j > cond && j === n - 1 && cond < n - 1) ? G : 0); }
      function atom(x, y, r, tok, label, size) {
        return sv("g", { class: "atom" }, [
          sv("circle", { cx: x, cy: y, r: r, fill: "var(" + tok + ")" }),
          sv("text", { x: x, y: y + size * 0.36, "text-anchor": "middle", style: "font-size:" + size + "px", text: label })
        ]);
      }
      function ln(x1, y1, x2, y2, w) { return sv("line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: "var(--k-mut)", "stroke-width": w || 3, "stroke-linecap": "round" }); }
      function sub(i) { return "₁₂₃₄₅"[i] || ""; }

      function makeRes(j) {
        var g = sv("g", { class: "res" });
        g.appendChild(ln(0, Y, 24, Y)); g.appendChild(ln(24, Y, 48, Y));
        g.appendChild(ln(24, Y, 24, Y - 30)); g.appendChild(ln(24, Y, 24, Y + 28));
        g.appendChild(ln(48, Y, 44, Y - 30)); g.appendChild(ln(48, Y, 52, Y - 30));
        g.appendChild(ln(0, Y, 0, Y + 26));
        g.appendChild(ln(0, Y, -24, Y));
        g.appendChild(ln(48, Y, 74, Y));
        g.appendChild(atom(0, Y, 11, "--k-N", "N", 13));
        g.appendChild(atom(24, Y, 11, "--k-C", "C", 13));
        g.appendChild(atom(48, Y, 11, "--k-C", "C", 13));
        g.appendChild(atom(24, Y - 30, 8, "--k-H", "H", 11));
        g.appendChild(atom(48, Y - 30, 9, "--k-O", "O", 12));
        g.appendChild(atom(0, Y + 28, 8, "--k-H", "H", 11));
        g.appendChild(sv("circle", { cx: 24, cy: Y + 40, r: 13, fill: "var(--k-sf)", stroke: "var(--k-acc)", "stroke-width": 2.5 }));
        g.appendChild(sv("text", { x: 24, y: Y + 45, "text-anchor": "middle", style: "font-size:12px;font-weight:700", text: "R" + sub(j) }));
        var oh = sv("g", { class: "mv oh" }, [ln(48, Y, 74, Y), atom(74, Y, 11, "--k-O", "O", 13), atom(90, Y + 12, 7, "--k-H", "H", 10)]);
        var hh = sv("g", { class: "mv hh" }, [atom(-24, Y, 8, "--k-H", "H", 11)]);
        g.appendChild(oh); g.appendChild(hh);
        g._oh = oh; g._hh = hh;
        return g;
      }
      function layout() {
        res.forEach(function (g, j) { g.setAttribute("style", "transform:translate(" + xOf(j) + "px,0)"); });
        res.forEach(function (g, j) { if (j === 0) g._hh.style.opacity = 1; });
      }
      function drawBonds() {
        bondLayer.innerHTML = "";
        for (var j = 0; j < cond; j++) {
          var x = xOf(j) + 48;
          bondLayer.appendChild(sv("rect", { x: x - 16, y: Y - 18, width: 48 + 8, height: 36, rx: 14, fill: "var(--k-acc)", opacity: ".2", stroke: "var(--k-acc)", "stroke-width": 2 }));
          bondLayer.appendChild(sv("text", { x: x + 12, y: Y - 56, "text-anchor": "middle", style: "font-size:12px;fill:var(--k-acc);font-weight:700", text: T(["peptide bond", "ペプチド結合", "肽鍵"]) }));
          bondLayer.appendChild(ln(x + 12, Y - 52, x + 12, Y - 20, 1.5)).setAttribute("stroke", "var(--k-acc)");
        }
      }
      function setText() {
        var AA = T(["amino acid", "アミノ酸 (amino acid)", "氨基酸 (amino acid)"]), W = T(["water", "水 (water)", "水 (water)"]);
        var k = Math.max(cond, 1);
        eq.textContent = (k === 1 ? AA : pepName(k)) + " + " + AA + " → " + pepName(k + 1) + " + " + W;
        status.textContent = T(["Peptide bonds: ", "ペプチド結合の数: ", "肽鍵數目："]) + cond + "  |  " + T(["Water released: ", "放出された水分子: ", "釋出的水分子："]) + cond;
        bCond.disabled = busy || cond >= n - 1;
        bAdd.disabled = busy || cond < n - 1 || n >= MAXR;
      }
      function pepName(k) {
        var a = [["", "", ""], ["amino acid", "アミノ酸", "氨基酸"], ["dipeptide", "ジペプチド (dipeptide)", "二肽 (dipeptide)"], ["tripeptide", "トリペプチド (tripeptide)", "三肽 (tripeptide)"], ["tetrapeptide", "テトラペプチド (tetrapeptide)", "四肽 (tetrapeptide)"]];
        return T(a[Math.min(k, 4)]);
      }
      function build() {
        timers.forEach(clearTimeout); timers = [];
        var pane = panes[0];
        pane.innerHTML = "";
        n = 2; cond = 0; busy = false;
        svg = sv("svg", { viewBox: "0 4 410 186", role: "img", "aria-label": T(["Amino acids joining by condensation", "縮合でつながるアミノ酸", "經縮合連接的氨基酸"]) });
        bondLayer = sv("g"); waterLayer = sv("g");
        svg.appendChild(bondLayer);
        res = [makeRes(0), makeRes(1)];
        res.forEach(function (g) { svg.appendChild(g); });
        svg.appendChild(waterLayer);
        svg.appendChild(sv("text", { x: X0, y: 182, "text-anchor": "middle", style: "font-size:12px", text: T(["N-terminus", "N末端", "N 端"]) }));
        var ct = sv("text", { class: "ct", x: 0, y: 182, "text-anchor": "middle", style: "font-size:12px", text: T(["C-terminus", "C末端", "C 端"]) });
        svg.appendChild(ct);
        function placeCT() { var x = xOf(n - 1) + 74; ct.setAttribute("x", Math.min(x, 356)); ct.setAttribute("style", "font-size:12px;transition:all .8s"); }
        build.placeCT = placeCT;
        eq = el("div", { class: "eq panel", "aria-live": "polite" });
        status = el("p", { class: "small", style: "text-align:center" });
        bCond = el("button", { type: "button", text: T(["Condense", "縮合する (condense)", "縮合 (condense)"]) });
        bAdd = el("button", { type: "button", text: T(["+ Add an amino acid", "+ アミノ酸を追加", "+ 加入氨基酸"]) });
        var bReset = el("button", { type: "button", text: T(["Reset", "リセット", "重設"]) });
        pane.appendChild(el("div", { class: "wl" }, [
          el("div", { class: "wl-stage" }, [svg, el("div", { class: "legend wl-legend" }, [
            legendItem("i", "var(--k-C)", T(["carbon", "炭素", "碳"])), legendItem("i", "var(--k-N)", T(["nitrogen", "窒素", "氮"])),
            legendItem("i", "var(--k-O)", T(["oxygen", "酸素", "氧"])), legendItem("i", "var(--k-H)", T(["hydrogen", "水素", "氫"])),
            legendItem("l", "var(--k-acc)", T(["peptide bond", "ペプチド結合", "肽鍵"]))
          ])]),
          el("div", { class: "wl-panel" }, [
            el("p", { class: "small", text: T(["Press Condense. The –OH from one carboxyl group and an H from the next amine group leave as water, and a peptide bond forms.", "「縮合」を押してください。一方のカルボキシ基の –OH と、もう一方のアミノ基の H が水として外れ、ペプチド結合ができます。", "按「縮合」。一個羧基的 –OH 與下一個氨基的 H 會以水的形式離開，並形成肽鍵。"]) }),
            el("div", { class: "bar", style: "margin:0" }, [bCond, bAdd, bReset]),
            eq, status,
            more(T, [el("p", { class: "small", text: T(["Each condensation makes one peptide bond and releases one water molecule. Real polypeptides have from a few to thousands of amino acids (this model shows up to " + MAXR + ").", "縮合のたびにペプチド結合が1つでき、水が1分子放出されます。実際のポリペプチドは数個から数千個のアミノ酸でできています（この図は最大" + MAXR + "個）。", "每次縮合形成一個肽鍵並釋出一個水分子。真正的多肽由數個至數千個氨基酸組成（此模型最多顯示 " + MAXR + " 個）。"]) })]),
            exam(T, [
              "Amino acid + amino acid → dipeptide + water (condensation). The new bond is a peptide bond, C(=O)–N(H). With 20 amino acids in any order, a chain of n has 20ⁿ possible sequences.",
              "アミノ酸 + アミノ酸 → ジペプチド + 水 (縮合反応)。できる結合はペプチド結合 C(=O)–N(H)。20種類のアミノ酸が任意の順序で並ぶので、n 個の鎖は 20ⁿ 通り。",
              "氨基酸 + 氨基酸 → 二肽 + 水（縮合反應）。新形成的鍵是肽鍵 C(=O)–N(H)。20 種氨基酸可按任何次序排列，n 個氨基酸的鏈有 20ⁿ 種序列。"])
          ])
        ]));
        bCond.addEventListener("click", condense);
        bAdd.addEventListener("click", function () {
          var g = makeRes(n); res.push(g); svg.insertBefore(g, waterLayer);
          g.setAttribute("style", "transform:translate(" + (xOf(n - 1) + 40) + "px,0);opacity:0");
          n++; layout(); g.style.opacity = 0; requestAnimationFrame(function () { requestAnimationFrame(function () { g.style.opacity = 1; }); });
          if (REDUCED()) g.style.opacity = 1;
          build.placeCT(); setText();
        });
        bReset.addEventListener("click", build);
        layout(); drawBonds(); build.placeCT(); setText();
      }
      function condense() {
        if (busy || cond >= n - 1) return;
        busy = true; setText();
        var a = res[cond], b = res[cond + 1];
        var fast = REDUCED();
        function finish() {
          cond++;
          a._oh.style.opacity = 0; b._hh.style.opacity = 0;
          layout(); drawBonds(); build.placeCT();
          var wx = xOf(cond - 1) + 48 + 36;
          var w = sv("g", { class: "mv" }, [
            sv("ellipse", { cx: wx, cy: Y + 62, rx: 28, ry: 15, fill: "none", stroke: "var(--k-hb)", "stroke-width": 2 }),
            sv("text", { x: wx, y: Y + 67, "text-anchor": "middle", style: "font-size:13px", text: "H₂O" })]);
          waterLayer.appendChild(w);
          busy = false; setText();
        }
        if (fast) { finish(); return; }
        a._oh.setAttribute("style", "transform:translate(" + (G / 2 - 8) + "px," + 58 + "px)");
        b._hh.setAttribute("style", "transform:translate(" + (-G / 2 + 22) + "px," + 58 + "px)");
        later(function () { a._oh.style.opacity = 0; b._hh.style.opacity = 0; finish(); }, 850);
      }
      function buildCounter() {
        var pane = panes[1];
        var sl = el("input", { type: "range", min: 1, max: 10, value: 3, step: 1, "aria-label": "n" });
        var lbl = el("span", { style: "font-weight:700" });
        var big = el("div", { class: "big panel", "aria-live": "polite" });
        var sci = el("div", { class: "small", style: "text-align:center" });
        var beadsHost = el("div");
        var COLS = ["--k-np", "--k-pol", "--k-ac", "--k-ba", "--k-S"];
        function fmt(bi) { return bi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
        function sup(k) { return String(k).split("").map(function (c) { return "⁰¹²³⁴⁵⁶⁷⁸⁹"[+c]; }).join(""); }
        function mant(s) { return (Math.round(+s.slice(0, 4) / 10) / 100).toFixed(2); }
        function sciOf(bi) { var s = bi.toString(); if (s.length < 4) return s; return mant(s) + " × 10" + sup(s.length - 1); }
        function beads(k) {
          var s = sv("svg", { viewBox: "0 0 410 120", role: "img", "aria-label": T(["A chain of n amino acids, each with 20 possible choices", "n 個のアミノ酸の鎖。各位置に20通りの選択", "n 個氨基酸的鏈，每個位置有 20 種選擇"]) });
          var step = 38, x0 = (410 - (k - 1) * step) / 2;
          for (var i = 0; i < k; i++) {
            var x = x0 + i * step;
            if (i) s.appendChild(sv("line", { x1: x - step + 17, y1: 56, x2: x - 17, y2: 56, stroke: "var(--k-mut)", "stroke-width": 3 }));
            s.appendChild(sv("circle", { cx: x, cy: 56, r: 17, fill: "var(" + COLS[i % 5] + ")" }));
            s.appendChild(sv("text", { x: x, y: 61, "text-anchor": "middle", style: "font-size:13px;font-weight:700;fill:var(--k-sf)", text: "20" }));
          }
          s.appendChild(sv("text", { x: 205, y: 106, "text-anchor": "middle", style: "font-size:13px", text: T(["each position: 20 possible amino acids", "各位置: 20種類のアミノ酸から選べる", "每個位置：有 20 種氨基酸可選"]) }));
          return s;
        }
        function upd() {
          var k = +sl.value, v = BigInt(20) ** BigInt(k);
          lbl.textContent = "n = " + k;
          beadsHost.innerHTML = ""; beadsHost.appendChild(beads(k));
          big.textContent = "20" + sup(k) + " = " + fmt(v);
          sci.textContent = T(["Scientific notation: ", "科学的記数法: ", "科學記數法："]) + sciOf(v) + (k === 1 ? "" : "  (" + T(["different sequences", "通りの配列", "種序列"]) + ")");
        }
        sl.addEventListener("input", upd);
        var h = BigInt(20) ** 100n, hs = h.toString();
        pane.appendChild(el("div", { class: "wl" }, [
          el("div", { class: "wl-stage" }, [beadsHost, big, sci]),
          el("div", { class: "wl-panel" }, [
            el("p", { text: T(["20 different amino acids are coded for in the genetic code, and they can be joined in any order. A chain of n amino acids can therefore have 20ⁿ different sequences.", "遺伝暗号 (genetic code) は20種類のアミノ酸を指定しており、どんな順序でもつなぐことができます。したがって n 個のアミノ酸の鎖には 20ⁿ 通りの配列があります。", "遺傳密碼 (genetic code) 編碼 20 種氨基酸，它們可按任何次序連接。因此由 n 個氨基酸組成的鏈可有 20ⁿ 種序列。"]) }),
            el("div", { class: "lab" }, [el("span", { text: T(["Chain length n:", "鎖の長さ n:", "鏈長 n："]) }), lbl]),
            sl,
            more(T, [el("p", { class: "small", text: T(["For a chain of just 100 amino acids: 20¹⁰⁰ ≈ " + mant(hs) + " × 10" + sup(hs.length - 1) + " possible sequences. Polypeptides can be much longer, so the possible variety is effectively unlimited.", "アミノ酸100個の鎖でも 20¹⁰⁰ ≈ " + mant(hs) + " × 10" + sup(hs.length - 1) + " 通りの配列があります。ポリペプチドはもっと長くなりうるので、可能な種類は事実上無限です。", "只是 100 個氨基酸的鏈，已有 20¹⁰⁰ ≈ " + mant(hs) + " × 10" + sup(hs.length - 1) + " 種可能序列。多肽可以更長，所以可能的變化實際上是無限的。"]) })]),
            exam(T, [
              "Amino acid + amino acid → dipeptide + water (condensation). The new bond is a peptide bond, C(=O)–N(H). With 20 amino acids in any order, a chain of n has 20ⁿ possible sequences.",
              "アミノ酸 + アミノ酸 → ジペプチド + 水 (縮合反応)。できる結合はペプチド結合 C(=O)–N(H)。20種類のアミノ酸が任意の順序で並ぶので、n 個の鎖は 20ⁿ 通り。",
              "氨基酸 + 氨基酸 → 二肽 + 水（縮合反應）。新形成的鍵是肽鍵 C(=O)–N(H)。20 種氨基酸可按任何次序排列，n 個氨基酸的鏈有 20ⁿ 種序列。"])
          ])
        ]));
        upd();
      }
      build(); buildCounter(); showTab(tab);
      return function () { timers.forEach(clearTimeout); };
    }
  });
})();
