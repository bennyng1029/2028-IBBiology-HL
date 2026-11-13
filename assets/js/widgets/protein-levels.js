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
    ".W .bar{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}" +
    ".W button{font:inherit;font-size:14px;min-height:44px;min-width:44px;padding:6px 12px;border:1.5px solid var(--k-line);background:var(--k-sf);color:var(--k-ink);border-radius:10px;cursor:pointer;line-height:1.25}" +
    ".W button:hover:not(:disabled){border-color:var(--k-acc)}" +
    ".W button[aria-pressed=true],.W button.on{background:var(--k-acc);color:var(--k-sf);border-color:var(--k-acc)}" +
    ".W button:disabled{opacity:.45;cursor:default}" +
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
  function exam(T, a) { return el("div", { class: "exam" }, [el("strong", { text: T(EXAM) + ": " }), document.createTextNode(T(a))]); }
  function ahl() { return el("span", { class: "ahl", text: "AHL" }); }
  function legendItem(cls, color, label) { return el("span", {}, [el("span", { class: cls, style: (cls === "i" ? "background:" : "border-color:") + color }), label]); }
  var CSS =
    ".W .tabs{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px;margin:8px 0}" +
    ".W .tabs button{text-align:left}" +
    ".W .bead{cursor:pointer}.W .bead circle.r{stroke:var(--k-ink);stroke-width:0}.W .bead.sel circle.r{stroke-width:3.5}" +
    ".W .bead text{fill:var(--k-sf);font-weight:700;font-size:13px;pointer-events:none}" +
    ".W .two{display:grid;grid-template-columns:1fr 1fr;gap:8px}.W .two .panel{padding:6px;text-align:center;margin:4px 0}" +
    ".W .opts{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:6px 0}";
  var COL = { N: "--k-np", P: "--k-pol", A: "--k-ac", B: "--k-ba" };
  var CN = {
    N: ["non-polar (hydrophobic)", "非極性 (non-polar)・疎水性", "非極性 (non-polar)・疏水"],
    P: ["polar (hydrophilic)", "極性 (polar)・親水性", "極性 (polar)・親水"],
    A: ["acidic (−)", "酸性 (acidic, −)", "酸性 (acidic, −)"],
    B: ["basic (+)", "塩基性 (basic, +)", "鹼性 (basic, +)"]
  };
  var SEQ0 = "PBNNPNNANPNP".split("");
  var cache = {};

  // Simplified 2-D lattice model: find the fold with most favourable contacts.
  function energy(pos, seq) {
    var e = 0, n = pos.length;
    for (var i = 0; i < n; i++) for (var j = i + 2; j < n; j++) {
      if (Math.abs(pos[i][0] - pos[j][0]) + Math.abs(pos[i][1] - pos[j][1]) !== 1) continue;
      var a = seq[i], b = seq[j];
      if (a === "N" && b === "N") e -= 1;
      else if ((a === "A" && b === "B") || (a === "B" && b === "A")) e -= 1;
      else if ((a === "A" && b === "A") || (a === "B" && b === "B")) e += 0.5;
    }
    return e;
  }
  function rg(pos) {
    var cx = 0, cy = 0, n = pos.length, s = 0;
    pos.forEach(function (p) { cx += p[0]; cy += p[1]; }); cx /= n; cy /= n;
    pos.forEach(function (p) { s += (p[0] - cx) * (p[0] - cx) + (p[1] - cy) * (p[1] - cy); });
    return s;
  }
  function fold(seq) {
    var key = seq.join("");
    if (cache[key]) return cache[key];
    var n = seq.length, pos = [[0, 0], [1, 0]], occ = { "0,0": 1, "1,0": 1 }, best = null, bE = 1e9, bR = 1e9;
    var D = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    (function go(k, turned) {
      if (k === n) {
        var e = energy(pos, seq), r = rg(pos);
        if (e < bE || (e === bE && r < bR)) { bE = e; bR = r; best = pos.map(function (p) { return p.slice(); }); }
        return;
      }
      var l = pos[k - 1];
      for (var d = 0; d < 4; d++) {
        var x = l[0] + D[d][0], y = l[1] + D[d][1], kk = x + "," + y;
        if (occ[kk]) continue;
        if (!turned && y < 0) continue; // symmetry: first turn goes "up"
        if (!turned && y === 0 && k > 1 && x !== l[0] + 1) continue;
        pos.push([x, y]); occ[kk] = 1;
        go(k + 1, turned || y !== 0);
        pos.pop(); delete occ[kk];
      }
    })(2, false);
    cache[key] = best;
    return best;
  }
  function drawFold(seq, W, H, opt) {
    opt = opt || {};
    var pos = fold(seq), xs = pos.map(function (p) { return p[0]; }), ys = pos.map(function (p) { return p[1]; });
    var minx = Math.min.apply(0, xs), maxx = Math.max.apply(0, xs), miny = Math.min.apply(0, ys), maxy = Math.max.apply(0, ys);
    var pad = opt.pad || 22, sc = Math.min((W - 2 * pad) / Math.max(1, maxx - minx), (H - 2 * pad) / Math.max(1, maxy - miny), opt.max || 48);
    var ox = (W - (maxx - minx) * sc) / 2 - minx * sc, oy = (H - (maxy - miny) * sc) / 2 - miny * sc;
    var P = pos.map(function (p) { return [p[0] * sc + ox, p[1] * sc + oy]; });
    var g = sv("g");
    var r = opt.r || 9;
    if (!opt.plain) {
      // hydrophobic core shading: non-polar beads that touch another non-polar bead
      pos.forEach(function (p, i) {
        if (seq[i] !== "N") return;
        var touch = pos.some(function (q, j) { return Math.abs(i - j) > 1 && seq[j] === "N" && Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) === 1; });
        if (touch) g.appendChild(sv("circle", { cx: P[i][0], cy: P[i][1], r: sc * 0.62, fill: "var(--k-hp)", opacity: ".2" }));
      });
      // ionic contacts
      pos.forEach(function (p, i) {
        pos.forEach(function (q, j) {
          if (j > i + 1 && ((seq[i] === "A" && seq[j] === "B") || (seq[i] === "B" && seq[j] === "A")) && Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) === 1)
            g.appendChild(sv("line", { x1: P[i][0], y1: P[i][1], x2: P[j][0], y2: P[j][1], stroke: "var(--k-io)", "stroke-width": 3, "stroke-dasharray": "2 3" }));
        });
      });
    }
    var d = "M" + P[0][0] + " " + P[0][1];
    if (opt.plain) {
      for (var i = 1; i < P.length - 1; i++) d += "Q" + P[i][0] + " " + P[i][1] + " " + (P[i][0] + P[i + 1][0]) / 2 + " " + (P[i][1] + P[i + 1][1]) / 2;
      d += "L" + P[P.length - 1][0] + " " + P[P.length - 1][1];
    } else for (var i = 1; i < P.length; i++) d += "L" + P[i][0] + " " + P[i][1];
    g.appendChild(sv("path", { d: d, fill: "none", stroke: opt.color || "var(--k-mut)", "stroke-width": opt.w || 4, "stroke-linejoin": "round", "stroke-linecap": "round" }));
    P.forEach(function (p, i) {
      if (opt.plain) return;
      var c = sv("g");
      c.appendChild(sv("circle", { cx: p[0], cy: p[1], r: r, fill: "var(" + COL[seq[i]] + ")" }));
      if (seq[i] === "A" || seq[i] === "B") c.appendChild(sv("text", { x: p[0], y: p[1] + 4, "text-anchor": "middle", style: "font-size:12px;font-weight:700;fill:var(--k-sf)", text: seq[i] === "A" ? "−" : "+" }));
      g.appendChild(c);
    });
    if (!opt.plain) {
      g.appendChild(sv("text", { x: P[0][0] - 2, y: P[0][1] - 13, "text-anchor": "middle", style: "font-size:11px", text: "N" }));
      g.appendChild(sv("text", { x: P[P.length - 1][0] + 2, y: P[P.length - 1][1] - 13, "text-anchor": "middle", style: "font-size:11px", text: "C" }));
    }
    g._pts = P;
    return g;
  }

  IB.registerWidget("protein-levels", {
    title: { en: "Levels of protein structure", ja: "タンパク質の構造の段階", zh: "蛋白質結構的層次" },
    mount: function (root, ctx) {
      css("protein-levels", CSS);
      root.classList.add("W");
      var T = mkT(ctx);
      var tab = 0, sub = "helix", sel = 6, seq = SEQ0.slice(), nq = 2;
      var TABS = [
        { n: ["1 Primary", "1 一次構造", "1 一級結構"], a: true },
        { n: ["2 Secondary", "2 二次構造", "2 二級結構"], a: true },
        { n: ["3 Tertiary", "3 三次構造", "3 三級結構"], a: true },
        { n: ["4 Quaternary", "4 四次構造", "4 四級結構"], a: true }
      ];
      var tabBar = el("div", { class: "tabs", role: "tablist" });
      var body = el("div", { "aria-live": "polite" });
      root.appendChild(tabBar);
      root.appendChild(el("div", { class: "legend" }, ["N", "P", "A", "B"].map(function (k) { return legendItem("i", "var(" + COL[k] + ")", T(CN[k])); }).concat([
        legendItem("i", "var(--k-hp)", T(["hydrophobic core (shaded)", "疎水性の核 (core, 影)", "疏水核心 (core，陰影)"])),
        legendItem("l", "var(--k-io)", T(["+/− attraction", "+/− の引力", "+/− 吸引"]))
      ])));
      root.appendChild(body);
      root.appendChild(exam(T, [
        "Primary = order of amino acids (peptide bonds). Secondary = α-helix / β-pleated sheet held by hydrogen bonds between backbone C=O and N–H (AHL). Tertiary = whole-chain 3-D shape from R-group interactions (AHL). Quaternary = 2 or more polypeptides (AHL). The sequence determines the shape.",
        "一次 = アミノ酸の並び順（ペプチド結合）。二次 = 骨格の C=O と N–H の間の水素結合で保たれる α-ヘリックス／βシート (AHL)。三次 = R基 の相互作用による鎖全体の立体構造 (AHL)。四次 = 2本以上のポリペプチド (AHL)。配列が形を決める。",
        "一級 = 氨基酸的排列次序（肽鍵）。二級 = 由骨架 C=O 與 N–H 之間氫鍵維持的 α 螺旋／β 摺板 (AHL)。三級 = 由 R 基相互作用形成的整條鏈的立體形狀 (AHL)。四級 = 兩條或以上多肽 (AHL)。序列決定形狀。"]));

      function renderTabs() {
        tabBar.innerHTML = "";
        TABS.forEach(function (t, i) {
          var b = el("button", { type: "button", role: "tab", "aria-selected": i === tab ? "true" : "false", "aria-pressed": i === tab ? "true" : "false" }, [T(t.n)]);
          if (t.a) { var a = ahl(); if (i === tab) { a.style.background = "var(--k-sf)"; a.style.color = "var(--k-ahl)"; } b.appendChild(a); }
          b.addEventListener("click", function () { tab = i; render(); });
          tabBar.appendChild(b);
        });
      }
      function head(title, ahlFlag) {
        var h = el("h4", { text: title }); if (ahlFlag) h.appendChild(ahl()); return h;
      }
      function render() {
        renderTabs(); body.innerHTML = "";
        [primary, secondary, tertiary, quaternary][tab]();
      }
      function same() { return seq.join("") === SEQ0.join(""); }

      function primary() {
        body.appendChild(head(T(["Primary structure: the sequence", "一次構造 (primary structure)：配列", "一級結構 (primary structure)：序列"]), true));
        body.appendChild(el("p", { text: T([
          "The order of amino acids in a polypeptide, joined by peptide bonds. Each bead is one amino acid, coloured by the type of its R-group. Tap a bead, then change its R-group type to see what happens to the folded shape.",
          "ポリペプチド中のアミノ酸の並び順で、ペプチド結合でつながっています。丸は1つのアミノ酸で、R基の種類で色分けしています。丸をタップして R基の種類を変え、折りたたまれた形がどうなるか見てみましょう。",
          "多肽中氨基酸的排列次序，由肽鍵連接。每顆珠代表一個氨基酸，按 R 基類型著色。點選一顆珠，改變它的 R 基類型，看看摺疊後的形狀有何變化。"]) }));
        body.appendChild(el("p", { class: "small", text: T([
          "Level check: that amino acids can be joined in any order is core for SL and HL (B1.2.4). The term primary structure and how the sequence decides the 3-D shape (B1.2.7) are AHL.",
          "レベルの確認: アミノ酸がどんな順序でもつながることは SL・HL 共通です (B1.2.4)。一次構造という用語と、配列が立体構造を決めるしくみ (B1.2.7) は AHL です。",
          "程度提示：氨基酸可按任何次序連接，屬 SL 和 HL 共同內容 (B1.2.4)。「一級結構」這個名稱，以及序列如何決定三維形狀 (B1.2.7)，屬 AHL。"]) }));
        var svg = sv("svg", { viewBox: "0 0 360 160", role: "group", "aria-label": T(["Amino acid sequence", "アミノ酸配列", "氨基酸序列"]) });
        var lineLayer = sv("g", {}); svg.appendChild(lineLayer);
        for (var i = 0; i < 12; i++) {
          (function (i) {
            var row = i < 6 ? 0 : 1, c = i < 6 ? i : 11 - i, x = 36 + c * 58, y = 52 + row * 62;
            if (i > 0) {
              var px = (i - 1 < 6 ? i - 1 : 11 - (i - 1)) * 58 + 36, py = 52 + (i - 1 < 6 ? 0 : 1) * 62;
              lineLayer.appendChild(sv("line", { x1: px, y1: py, x2: x, y2: y, stroke: "var(--k-mut)", "stroke-width": 4 }));
            }
            var g = sv("g", { class: "bead" + (i === sel ? " sel" : ""), tabindex: 0, role: "button", "aria-label": (i + 1) + ": " + T(CN[seq[i]]) }, [
              sv("circle", { cx: x, cy: y, r: 25, fill: "transparent" }),
              sv("circle", { class: "r", cx: x, cy: y, r: 16, fill: "var(" + COL[seq[i]] + ")" }),
              sv("text", { x: x, y: y + 5, "text-anchor": "middle", text: seq[i] === "A" ? "−" : seq[i] === "B" ? "+" : String(i + 1) }),
              sv("text", { x: x, y: y + (row ? 36 : -23), "text-anchor": "middle", style: "font-size:10px;fill:var(--k-mut)", text: "#" + (i + 1) })]);
            var act = function () { sel = i; render(); };
            g.addEventListener("click", act);
            g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } });
            svg.appendChild(g);
          })(i);
        }
        svg.appendChild(sv("text", { x: 6, y: 12, style: "font-size:11px", text: "N-terminus" }));
        svg.appendChild(sv("text", { x: 354, y: 12, "text-anchor": "end", style: "font-size:11px", text: "C-terminus" }));
        body.appendChild(svg);
        body.appendChild(el("p", { class: "small", text: T(["Bead #" + (sel + 1) + " is " + T(CN[seq[sel]]) + ". Change it to:", "#" + (sel + 1) + " 番は " + T(CN[seq[sel]]) + " です。次に変更:", "第 " + (sel + 1) + " 顆為 " + T(CN[seq[sel]]) + "。改為："]) }));
        body.appendChild(el("div", { class: "opts" }, ["N", "P", "A", "B"].map(function (k) {
          var b = el("button", { type: "button", "aria-pressed": seq[sel] === k ? "true" : "false", text: T(CN[k]) });
          b.addEventListener("click", function () { seq[sel] = k; render(); });
          return b;
        })));
        var demo = el("button", { type: "button", text: T(["Demo: make bead #7 charged (hydrophobic → acidic)", "デモ: #7 を電荷をもつものに (疎水性 → 酸性)", "示範：把第 7 顆改為帶電荷 (疏水 → 酸性)"]) });
        demo.addEventListener("click", function () { seq = SEQ0.slice(); seq[6] = "A"; sel = 6; render(); });
        var rst = el("button", { type: "button", text: T(["Restore original", "元に戻す", "還原"]) });
        rst.addEventListener("click", function () { seq = SEQ0.slice(); render(); });
        body.appendChild(el("div", { class: "bar" }, [demo, rst]));
        var a = el("div", { class: "panel" }, [el("strong", { text: T(["Original", "元の配列", "原本序列"]) }), drawFoldSvg(SEQ0, 160, 130)]);
        var b = el("div", { class: "panel" }, [el("strong", { text: same() ? T(["Edited (no change yet)", "編集後 (変更なし)", "修改後（尚未更改）"]) : T(["Edited", "編集後", "修改後"]) }), drawFoldSvg(seq, 160, 130)]);
        body.appendChild(el("div", { class: "two" }, [a, b]));
        body.appendChild(el("p", { class: "small", text: T([
          "Simplified model: a 2-D lattice in which hydrophobic beads cluster together and + and − beads attract. Real proteins fold in 3-D and are far more complex. The key idea is real: the sequence of amino acids, and the position of each one, determines the 3-D shape, so a protein folds into the same precise shape every time.",
          "簡略化したモデルです。2次元の格子上で、疎水性の丸が集まり、+ と − の丸が引きあいます。実際のタンパク質は3次元で折りたたまれ、はるかに複雑です。ただし要点は本物です。アミノ酸の配列と各アミノ酸の位置が3次元構造を決めるので、タンパク質は毎回同じ正確な形に折りたたまれます。",
          "簡化模型：在二維格子中，疏水的珠會聚在一起，+ 和 − 的珠相互吸引。真正的蛋白質在三維空間摺疊，複雜得多。但核心概念是真實的：氨基酸的序列及每個氨基酸的位置決定三維形狀，所以蛋白質每次都摺疊成相同而精確的形狀。"]) }));
      }
      function drawFoldSvg(s, W, H) {
        var svg = sv("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": T(["Folded shape", "折りたたまれた形", "摺疊後的形狀"]) });
        svg.appendChild(drawFold(s, W, H, { pad: 20, r: 8, max: 36 }));
        return svg;
      }

      function secondary() {
        body.appendChild(head(T(["Secondary structure: coiling and pleating", "二次構造 (secondary structure)：らせんとひだ", "二級結構 (secondary structure)：螺旋與摺疊"]), true));
        body.appendChild(el("p", { text: T([
          "Parts of the chain coil into an α-helix or pleat into a β-pleated sheet. Both are held in shape by hydrogen bonds between the C=O of one peptide link and the N–H of another, at regular positions along the backbone. The R-groups are not involved.",
          "鎖の一部は α-ヘリックス (alpha helix) にコイル状に巻くか、βシート (beta-pleated sheet) にひだ状に折れます。どちらも、あるペプチド結合の C=O と別のペプチド結合の N–H の間の水素結合 (hydrogen bond) が骨格に沿って規則的な位置に生じて保たれます。R基は関与しません。",
          "鏈的一部分會盤繞成 α 螺旋 (alpha helix)，或摺疊成 β 摺板 (beta-pleated sheet)。兩者都由一個肽鍵的 C=O 與另一個肽鍵的 N–H 之間的氫鍵 (hydrogen bond) 維持，氫鍵在骨架上的位置有規律。R 基並不參與。"]) }));
        var bs = ["helix", "sheet"].map(function (k) {
          var b = el("button", { type: "button", "aria-pressed": sub === k ? "true" : "false", text: k === "helix" ? T(["α-helix (coiling)", "α-ヘリックス (coiling)", "α 螺旋 (coiling)"]) : T(["β-pleated sheet (pleating)", "βシート (pleating)", "β 摺板 (pleating)"]) });
          b.addEventListener("click", function () { sub = k; render(); }); return b;
        });
        body.appendChild(el("div", { class: "bar" }, bs));
        var svg = sv("svg", { viewBox: "0 0 360 " + (sub === "helix" ? 290 : 270), role: "img", "aria-label": sub });
        if (sub === "helix") drawHelix(svg); else drawSheet(svg);
        body.appendChild(svg);
        body.appendChild(el("div", { class: "legend" }, [
          legendItem("l", "var(--k-hb)", T(["hydrogen bond (C=O ··· H–N)", "水素結合 (C=O ··· H–N)", "氫鍵 (C=O ··· H–N)"])),
          legendItem("i", "var(--k-mut)", T(["polypeptide backbone", "ポリペプチドの骨格", "多肽骨架"]))
        ]));
        body.appendChild(el("p", { class: "small", text: sub === "helix" ?
          T(["Schematic side view: the backbone coils, and hydrogen bonds link each turn to the next at regular intervals.", "模式的な側面図: 骨格がらせん状に巻き、水素結合が各巻きを次の巻きと規則的につなぎます。", "示意側視圖：骨架盤繞，氫鍵有規律地連接相鄰的每一圈。"]) :
          T(["Schematic: neighbouring stretches of backbone lie side by side in a zig-zag (pleated) pattern, with hydrogen bonds between them at regular positions.", "模式図: 骨格の隣りあう部分がジグザグ（ひだ状）に並び、その間に水素結合が規則的な位置にできます。", "示意圖：骨架相鄰的部分並排成鋸齒狀（摺疊），之間在有規律的位置形成氫鍵。"]) }));
      }
      function lab(svg, x, y, txt, col, anchor) {
        svg.appendChild(sv("text", { x: x, y: y, "text-anchor": anchor || "middle", style: "font-size:12px;font-weight:700;fill:" + col + ";paint-order:stroke;stroke:var(--k-sf);stroke-width:3px", text: txt }));
      }
      function drawHelix(svg) {
        var R = 16, STEP = 100, PX = 15.6, X = 180, A = 60, Y0 = 26, segs = [], pts = [];
        function P(deg) { var th = deg * Math.PI / 180; return { x: X + A * Math.sin(th), y: Y0 + deg / STEP * PX, z: Math.cos(th) }; }
        for (var d = 0; d < (R - 1) * STEP; d += 10) { var a = P(d), b = P(d + 10); segs.push([a, b, (a.z + b.z) / 2 > 0]); }
        for (var k = 0; k < R; k++) pts.push(P(k * STEP));
        segs.forEach(function (q) { if (!q[2]) svg.appendChild(sv("line", { x1: q[0].x, y1: q[0].y, x2: q[1].x, y2: q[1].y, stroke: "var(--k-mut)", "stroke-width": 4, opacity: .4, "stroke-linecap": "round" })); });
        for (k = 0; k + 4 < R; k++) svg.appendChild(sv("line", { x1: pts[k].x, y1: pts[k].y, x2: pts[k + 4].x, y2: pts[k + 4].y, stroke: "var(--k-hb)", "stroke-width": 2.5, "stroke-dasharray": "4 3" }));
        segs.forEach(function (q) { if (q[2]) svg.appendChild(sv("line", { x1: q[0].x, y1: q[0].y, x2: q[1].x, y2: q[1].y, stroke: "var(--k-mut)", "stroke-width": 7, "stroke-linecap": "round" })); });
        pts.forEach(function (p) { svg.appendChild(sv("circle", { cx: p.x, cy: p.y, r: p.z > 0 ? 6 : 4, fill: "var(--k-C)", stroke: "var(--k-sf)", "stroke-width": 1.5, opacity: p.z > 0 ? 1 : .6 })); });
        lab(svg, pts[5].x + 14, pts[5].y + 4, "C=O", "var(--k-O)", "start");
        lab(svg, pts[9].x + 14, pts[9].y + 4, "N–H", "var(--k-N)", "start");
        lab(svg, 8, 280, "N", "var(--k-ink)", "start"); lab(svg, 352, 20, "C", "var(--k-ink)", "end");
      }
      function drawSheet(svg) {
        var ys = [55, 135, 215], strands = [];
        for (var s = 0; s < 3; s++) {
          var pts = [];
          for (var j = 0; j < 11; j++) pts.push({ x: 20 + j * 32, y: ys[s] + (j % 2 ? 14 : -14) });
          strands.push(pts);
          svg.appendChild(sv("polyline", { points: pts.map(function (p) { return p.x + "," + p.y; }).join(" "), fill: "none", stroke: "var(--k-mut)", "stroke-width": 5, "stroke-linejoin": "round" }));
        }
        for (s = 0; s < 3; s++) strands[s].forEach(function (p) { svg.appendChild(sv("circle", { cx: p.x, cy: p.y, r: 4, fill: "var(--k-C)" })); });
        function bonds(a, b, par) {
          for (var j = par; j < 11; j += 2) {
            if (j < 1 || j > 9) continue;
            svg.appendChild(sv("line", { x1: strands[a][j].x, y1: strands[a][j].y, x2: strands[b][j].x, y2: strands[b][j].y, stroke: "var(--k-hb)", "stroke-width": 2.5, "stroke-dasharray": "4 3" }));
            [[a, "--k-O", "O"], [b, "--k-N", "N"]].forEach(function (q) {
              var p = strands[q[0]][j];
              svg.appendChild(sv("circle", { cx: p.x, cy: p.y, r: 8, fill: "var(" + q[1] + ")" }));
              svg.appendChild(sv("text", { x: p.x, y: p.y + 4, "text-anchor": "middle", style: "font-size:10px;font-weight:700;fill:var(--k-sf)", text: q[2] }));
            });
          }
        }
        bonds(0, 1, 1); bonds(1, 2, 2);
        lab(svg, 180, 22, T(["C=O (O) ··· H–N (N) between strands", "C=O (O) ··· H–N (N) 鎖の間", "鏈之間 C=O (O) ··· H–N (N)"]), "var(--k-ink)");
      }

      function tertiary() {
        body.appendChild(head(T(["Tertiary structure: the whole chain", "三次構造 (tertiary structure)：鎖全体", "三級結構 (tertiary structure)：整條鏈"]), true));
        body.appendChild(el("p", { text: T([
          "The overall 3-D shape of one whole polypeptide. The chain folds up because of interactions between R-groups: hydrogen bonds, ionic bonds, disulfide bonds and hydrophobic interactions (see the protein folding widget). In a water-soluble protein, hydrophobic R-groups end up clustered together in the core.",
          "1本のポリペプチド全体の立体的な形です。R基どうしの相互作用（水素結合、イオン結合、ジスルフィド結合、疎水性相互作用）で鎖が折りたたまれます（タンパク質の折りたたみの教材を参照）。水に溶けるタンパク質では、疎水性の R基は核に集まります。",
          "單一條多肽整體的三維形狀。鏈由於 R 基之間的相互作用（氫鍵、離子鍵、二硫鍵和疏水相互作用）而摺疊（見蛋白質摺疊教材）。在水溶性蛋白質中，疏水的 R 基會聚集在核心。"]) }));
        var svg = sv("svg", { viewBox: "0 0 360 250", role: "img", "aria-label": T(["Folded polypeptide", "折りたたまれたポリペプチド", "摺疊的多肽"]) });
        svg.appendChild(drawFold(seq, 360, 250, { pad: 36, r: 13, max: 62, w: 6 }));
        body.appendChild(svg);
        body.appendChild(el("p", { class: "small", text: same() ? T(["Showing the original sequence. Edit it in the Primary tab to see the shape change (simplified model).", "元の配列を表示中。一次構造のタブで編集すると形が変わります（簡略化モデル）。", "顯示原本序列。在「一級結構」分頁修改，形狀便會改變（簡化模型）。"]) :
          T(["Showing your edited sequence: a different sequence gives a different shape (simplified model).", "編集した配列を表示中。配列が違えば形も変わります（簡略化モデル）。", "顯示你修改後的序列：序列不同，形狀便不同（簡化模型）。"]) }));
      }

      function quaternary() {
        body.appendChild(head(T(["Quaternary structure: more than one polypeptide", "四次構造 (quaternary structure)：複数のポリペプチド", "四級結構 (quaternary structure)：多於一條多肽"]), true));
        body.appendChild(el("p", { text: T([
          "Some proteins are made of two or more polypeptides assembled into one functional protein. Examples: insulin (2), collagen (3) and haemoglobin (4: two α and two β chains). A conjugated protein also has a non-polypeptide part (a prosthetic group), such as the haem in haemoglobin.",
          "2本以上のポリペプチドが集まって1つの機能するタンパク質になっているものがあります。例: インスリン (2本)、コラーゲン (3本)、ヘモグロビン (4本: α鎖2本とβ鎖2本)。複合タンパク質 (conjugated protein) には、ヘモグロビンのヘムのようにポリペプチド以外の部分 (prosthetic group) もあります。",
          "有些蛋白質由兩條或以上的多肽組合成一個有功能的蛋白質。例子：胰島素 (2 條)、膠原蛋白 (3 條)、血紅蛋白 (4 條：兩條 α 鏈和兩條 β 鏈)。結合蛋白質 (conjugated protein) 還含有非多肽部分（輔基 prosthetic group），例如血紅蛋白的血紅素 (haem)。"]) }));
        var bs = [2, 4].map(function (k) {
          var b = el("button", { type: "button", "aria-pressed": nq === k ? "true" : "false", text: k + " " + T(["polypeptides", "本のポリペプチド", "條多肽"]) });
          b.addEventListener("click", function () { nq = k; render(); }); return b;
        });
        body.appendChild(el("div", { class: "bar" }, bs));
        var svg = sv("svg", { viewBox: "0 0 360 250", role: "img", "aria-label": T(["Quaternary structure", "四次構造", "四級結構"]) });
        var cols = ["var(--k-acc)", "var(--k-pol)", "var(--k-np)", "var(--k-ac)"];
        var cells = nq === 2 ? [[0, 40, 180, 170], [180, 40, 180, 170]] : [[0, 5, 180, 120], [180, 5, 180, 120], [0, 125, 180, 120], [180, 125, 180, 120]];
        cells.forEach(function (c, i) {
          var g = drawFold(seq, c[2], c[3], { plain: true, pad: 24, max: nq === 2 ? 46 : 32, color: cols[i], w: 9 });
          g.setAttribute("transform", "translate(" + c[0] + "," + c[1] + ")");
          svg.appendChild(g);
          svg.appendChild(sv("text", { x: c[0] + c[2] / 2, y: c[1] + (nq === 2 ? 14 : 12), "text-anchor": "middle", style: "font-size:12px;font-weight:700;fill:" + cols[i], text: T(["polypeptide ", "ポリペプチド ", "多肽 "]) + (i + 1) }));
        });
        body.appendChild(svg);
        body.appendChild(el("p", { class: "small", text: T(["Each coloured chain is one folded polypeptide. Together they form the quaternary structure. (Schematic: real subunits are not identical in every protein.)", "色分けした各鎖が折りたたまれた1本のポリペプチドで、全体が四次構造です。（模式図: 実際にはすべてのサブユニットが同じとは限りません。）", "每條顏色的鏈是一條摺疊了的多肽，合起來就是四級結構。（示意圖：實際上並非所有亞基都相同。）"]) }));
        body.appendChild(el("p", { class: "small", text: T(["Cryogenic electron microscopy (cryo-EM) lets scientists image single protein molecules, which cannot be seen with the unaided senses.", "クライオ電子顕微鏡 (cryo-EM) により、肉眼では見えない1分子のタンパク質も画像化できます。", "冷凍電子顯微鏡 (cryo-EM) 令科學家能為單一蛋白質分子造影，這是肉眼無法觀察到的。"]) }));
      }
      render();
    }
  });
})();
