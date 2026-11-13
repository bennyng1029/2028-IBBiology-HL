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
    ".W .grp{cursor:pointer}.W .grp .hit{fill:transparent;stroke:transparent;stroke-width:2}" +
    ".W .grp:hover .hit{stroke:var(--k-line)}.W .grp.sel .hit{stroke:var(--k-acc);stroke-width:3}" +
    ".W .grp .tint{opacity:.16}.W .grp.sel .tint{opacity:.32}" +
    ".W .atom text{fill:var(--k-sf);font-weight:700}" +
    ".W .card{border:1.5px solid var(--k-line);border-left-width:6px;border-radius:12px;padding:8px 10px;margin:8px 0;background:var(--k-sf)}" +
    ".W .card .f{font-size:20px;font-weight:600}.W .card .f small{font-size:.65em}" +
    ".W .opts{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:6px 0}" +
    ".W .fb{min-height:1.4em;font-size:14px}.W .fb.good{color:var(--k-good)}.W .fb.bad{color:var(--k-bad)}" +
    ".W .tree{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:13px}.W .tree b{padding:2px 8px;border-radius:8px;border:1.5px solid var(--k-line)}" +
    ".W .score{font-weight:600}";

  var GROUPS = {
    amine: {
      n: ["Amine group (–NH₂)", "アミノ基 (amine group, –NH₂)", "氨基 (amine group, –NH₂)"],
      d: ["A nitrogen atom with two hydrogen atoms. It is basic: it can gain H⁺ to become –NH₃⁺. When a peptide bond forms, one of its hydrogen atoms is removed.",
        "窒素原子に水素原子が2個結合した基です。塩基性で、H⁺ を受け取って –NH₃⁺ になることができます。ペプチド結合ができるとき、この水素原子の1つが取り除かれます。",
        "一個氮原子連接兩個氫原子。具鹼性，可接受 H⁺ 而變成 –NH₃⁺。形成肽鍵時，會除去其中一個氫原子。"]
    },
    carboxyl: {
      n: ["Carboxyl group (–COOH)", "カルボキシ基 (carboxyl group, –COOH)", "羧基 (carboxyl group, –COOH)"],
      d: ["A carbon atom with a double-bonded oxygen (=O) and an –OH group. It is acidic: it can lose H⁺ to become –COO⁻. When a peptide bond forms, its –OH is removed.",
        "炭素原子に二重結合の酸素 (=O) と –OH が結合した基です。酸性で、H⁺ を放出して –COO⁻ になることができます。ペプチド結合ができるとき、この –OH が取り除かれます。",
        "一個碳原子連接雙鍵氧 (=O) 和 –OH 基。具酸性，可釋出 H⁺ 而變成 –COO⁻。形成肽鍵時，會除去其 –OH。"]
    },
    h: {
      n: ["Hydrogen atom (H)", "水素原子 (hydrogen atom, H)", "氫原子 (hydrogen atom, H)"],
      d: ["A single hydrogen atom bonded to the alpha carbon. Every amino acid has one.",
        "α炭素に結合した水素原子1個です。どのアミノ酸にもあります。",
        "連接在 α 碳上的一個氫原子。每種氨基酸都有。"]
    },
    r: {
      n: ["R-group (side chain)", "R基 (R-group, 側鎖)", "R 基 (R-group, 側鏈)"],
      d: ["The variable part. The 20 amino acids used to build proteins differ only in their R-groups. The chemistry of the R-group (hydrophobic or hydrophilic, charged or not) decides how an amino acid behaves in a polypeptide.",
        "アミノ酸ごとに異なる部分です。タンパク質をつくる20種類のアミノ酸は R基 だけが違います。R基の化学的性質（疎水性か親水性か、電荷をもつか）が、ポリペプチド中でのふるまいを決めます。",
        "各氨基酸不同的部分。構成蛋白質的 20 種氨基酸只有 R 基不同。R 基的化學性質（疏水或親水、是否帶電荷）決定氨基酸在多肽中的表現。"]
    },
    alpha: {
      n: ["Alpha carbon (α carbon)", "α炭素 (alpha carbon)", "α 碳 (alpha carbon)"],
      d: ["The central carbon atom. The amine group, the carboxyl group, the hydrogen atom and the R-group are all bonded to it.",
        "中心にある炭素原子です。アミノ基、カルボキシ基、水素原子、R基 がすべてこの炭素に結合しています。",
        "位於中心的碳原子。氨基、羧基、氫原子和 R 基都連接在它上面。"]
    }
  };

  var CARDS = [
    { f: "–CH<sub>3</sub>", c: "np", hint: ["Contains only carbon and hydrogen.", "炭素と水素だけでできています。", "只含碳和氫。"] },
    { f: "–CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub>", c: "np", hint: ["A hydrocarbon chain (only C and H).", "炭化水素の鎖（C と H だけ）です。", "烴鏈（只含 C 和 H）。"] },
    { f: "–CH<sub>2</sub>–OH", c: "pol", hint: ["Contains an –OH group.", "–OH 基を含みます。", "含有 –OH 基。"] },
    { f: "–CH(OH)–CH<sub>3</sub>", c: "pol", hint: ["Contains an –OH group on a short carbon chain.", "短い炭素鎖に –OH 基がついています。", "短碳鏈上有一個 –OH 基。"] },
    { f: "–CH<sub>2</sub>–COOH", c: "ac", hint: ["Contains a carboxyl group (–COOH).", "カルボキシ基 (–COOH) を含みます。", "含有羧基 (–COOH)。"] },
    { f: "–(CH<sub>2</sub>)<sub>4</sub>–NH<sub>2</sub>", c: "ba", hint: ["Contains an amine group (–NH₂).", "アミノ基 (–NH₂) を含みます。", "含有氨基 (–NH₂)。"] }
  ];
  var CAT = {
    np: { col: "--k-np", n: ["Non-polar", "非極性", "非極性"],
      fb: ["Only C–H bonds, which are non-polar, so it does not attract water: hydrophobic.", "C–H 結合だけで極性がなく、水とひきあいません。疎水性 (hydrophobic) です。", "只有 C–H 鍵，沒有極性，不會吸引水：疏水 (hydrophobic)。"] },
    pol: { col: "--k-pol", n: ["Polar", "極性", "極性"],
      fb: ["The –OH group is polar (partial charges) so it attracts water, but it carries no full charge: polar, hydrophilic.", "–OH 基は極性（部分電荷）をもち水とひきあいますが、完全な電荷はもちません。極性 (polar)・親水性 (hydrophilic) です。", "–OH 基有極性（部分電荷），會吸引水，但不帶完整電荷：極性 (polar)、親水 (hydrophilic)。"] },
    ac: { col: "--k-ac", n: ["Acidic (−)", "酸性 (−)", "酸性 (−)"],
      fb: ["–COOH can lose H⁺ and become –COO⁻, so it is charged (negative): hydrophilic, acidic.", "–COOH は H⁺ を放出して –COO⁻ になるので、負に帯電します。親水性で酸性 (acidic) です。", "–COOH 可釋出 H⁺ 變成 –COO⁻，帶負電：親水，酸性 (acidic)。"] },
    ba: { col: "--k-ba", n: ["Basic (+)", "塩基性 (+)", "鹼性 (+)"],
      fb: ["–NH₂ can gain H⁺ and become –NH₃⁺, so it is charged (positive): hydrophilic, basic.", "–NH₂ は H⁺ を受け取って –NH₃⁺ になるので、正に帯電します。親水性で塩基性 (basic) です。", "–NH₂ 可接受 H⁺ 變成 –NH₃⁺，帶正電：親水，鹼性 (basic)。"] }
  };
  var ORDER = ["np", "pol", "ac", "ba"];

  IB.registerWidget("amino-acid", {
    title: { en: "Amino acid structure and R-groups", ja: "アミノ酸の構造と R基", zh: "氨基酸的結構與 R 基" },
    mount: function (root, ctx) {
      css("amino-acid", CSS);
      root.classList.add("W");
      var T = mkT(ctx);
      build();
      function build() {
      root.innerHTML = "";
      var sel = "alpha";
      var info, groups = {};

      root.appendChild(el("h4", { text: T(["1. The generalized amino acid", "1. 一般的なアミノ酸 (generalized amino acid)", "1. 通式氨基酸 (generalized amino acid)"]) }));
      root.appendChild(el("p", { class: "small", text: T(["Tap each part to see what it is.", "各部分をタップして確認しましょう。", "點選各部分，看看它是甚麼。"]) }));

      function atom(x, y, r, tok, label, size) {
        return sv("g", { class: "atom" }, [
          sv("circle", { cx: x, cy: y, r: r, fill: "var(" + tok + ")" }),
          sv("text", { x: x, y: y + (size || 13) * 0.36, "text-anchor": "middle", style: "font-size:" + (size || 13) + "px", text: label })
        ]);
      }
      function bond(x1, y1, x2, y2, dbl) {
        var a = { stroke: "var(--k-mut)", "stroke-width": 3, "stroke-linecap": "round" };
        if (!dbl) return sv("line", Object.assign({ x1: x1, y1: y1, x2: x2, y2: y2 }, a));
        var dx = y2 - y1, dy = x1 - x2, l = Math.hypot(dx, dy) || 1, ox = dx / l * 3, oy = dy / l * 3;
        return sv("g", {}, [
          sv("line", Object.assign({ x1: x1 + ox, y1: y1 + oy, x2: x2 + ox, y2: y2 + oy }, a, { "stroke-width": 2.5 })),
          sv("line", Object.assign({ x1: x1 - ox, y1: y1 - oy, x2: x2 - ox, y2: y2 - oy }, a, { "stroke-width": 2.5 }))
        ]);
      }
      function group(key, rect, tint, kids, label) {
        var g = sv("g", { class: "grp", tabindex: 0, role: "button", "aria-label": label }, [
          sv("rect", { class: "hit", x: rect[0], y: rect[1], width: rect[2], height: rect[3], rx: 12 }),
          sv("rect", { class: "tint", x: rect[0], y: rect[1], width: rect[2], height: rect[3], rx: 12, fill: "var(" + tint + ")" })
        ].concat(kids));
        g.addEventListener("click", function () { pick(key); });
        g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(key); } });
        groups[key] = g;
        return g;
      }
      var svg = sv("svg", { viewBox: "0 0 360 260", role: "img", "aria-label": T(["Generalized amino acid", "一般的なアミノ酸", "通式氨基酸"]) });
      // bonds first
      svg.appendChild(bond(100, 120, 180, 120));
      svg.appendChild(bond(180, 120, 258, 120));
      svg.appendChild(bond(180, 120, 180, 70));
      svg.appendChild(bond(180, 120, 180, 168));
      // alpha carbon
      svg.appendChild(group("alpha", [156, 98, 48, 44], "--k-C", [atom(180, 120, 15, "--k-C", "C", 14)], T(GROUPS.alpha.n)));
      // amine
      svg.appendChild(bond(100, 120, 68, 98)); svg.appendChild(bond(100, 120, 68, 142));
      svg.appendChild(group("amine", [30, 70, 100, 100], "--k-ba", [
        atom(100, 120, 15, "--k-N", "N", 14), atom(66, 96, 10, "--k-H", "H", 11), atom(66, 144, 10, "--k-H", "H", 11),
        sv("text", { x: 80, y: 66, "text-anchor": "middle", text: "H₂N" })], T(GROUPS.amine.n)));
      // carboxyl
      svg.appendChild(bond(258, 120, 292, 92, true)); svg.appendChild(bond(258, 120, 292, 148));
      svg.appendChild(group("carboxyl", [232, 70, 110, 100], "--k-ac", [
        atom(258, 120, 15, "--k-C", "C", 14), atom(294, 90, 12, "--k-O", "O", 13), atom(294, 150, 12, "--k-O", "O", 13), atom(322, 150, 10, "--k-H", "H", 11),
        sv("text", { x: 290, y: 66, "text-anchor": "middle", text: "COOH" })], T(GROUPS.carboxyl.n)));
      svg.appendChild(bond(294, 150, 312, 150));
      // H
      svg.appendChild(group("h", [150, 30, 60, 50], "--k-H", [atom(180, 56, 11, "--k-H", "H", 12)], T(GROUPS.h.n)));
      // R
      svg.appendChild(group("r", [140, 166, 80, 84], "--k-acc", [
        sv("circle", { cx: 180, cy: 196, r: 22, fill: "var(--k-sf)", stroke: "var(--k-acc)", "stroke-width": 3 }),
        sv("text", { x: 180, y: 203, "text-anchor": "middle", style: "font-size:20px;font-weight:700", text: "R" }),
        sv("text", { x: 180, y: 244, "text-anchor": "middle", style: "font-size:12px", text: T(["variable side chain", "可変の側鎖", "可變的側鏈"]) })], T(GROUPS.r.n)));
      svg.appendChild(sv("text", { x: 206, y: 100, style: "font-size:11px;fill:var(--k-mut)", text: "α" }));
      root.appendChild(svg);
      root.appendChild(el("p", { class: "small", style: "text-align:center", html: "H<sub>2</sub>N – C(H)(R) – COOH" }));
      info = el("div", { class: "panel", "aria-live": "polite" });
      root.appendChild(info);
      root.appendChild(el("div", { class: "legend" }, [
        legendItem("i", "var(--k-C)", T(["carbon", "炭素 (C)", "碳 (C)"])),
        legendItem("i", "var(--k-N)", T(["nitrogen", "窒素 (N)", "氮 (N)"])),
        legendItem("i", "var(--k-O)", T(["oxygen", "酸素 (O)", "氧 (O)"])),
        legendItem("i", "var(--k-H)", T(["hydrogen", "水素 (H)", "氫 (H)"]))
      ]));
      function pick(k) {
        sel = k;
        Object.keys(groups).forEach(function (g) { groups[g].classList.toggle("sel", g === k); });
        info.innerHTML = "";
        info.appendChild(el("strong", { text: T(GROUPS[k].n) }));
        info.appendChild(el("p", { text: T(GROUPS[k].d) }));
      }
      pick("alpha");

      // ---- Part 2: R-group classifier
      root.appendChild(el("h4", { text: T(["2. Sort the R-groups", "2. R基 (R-group) を分類しよう", "2. 為 R 基 (R-group) 分類"]) }));
      root.appendChild(el("p", { text: T([
        "R-groups are either hydrophobic (they avoid water) or hydrophilic (they attract water). Hydrophilic R-groups are polar or charged, and charged R-groups are acidic (negative) or basic (positive).",
        "R基は、疎水性 (hydrophobic：水をはじく) か親水性 (hydrophilic：水とひきあう) のどちらかです。親水性の R基は極性 (polar) か、電荷をもつもの（酸性 acidic は負、塩基性 basic は正）です。",
        "R 基不是疏水 (hydrophobic，不愛水)，便是親水 (hydrophilic，吸引水)。親水的 R 基是極性 (polar) 或帶電荷的；帶電荷的 R 基分酸性 (acidic，帶負電) 和鹼性 (basic，帶正電)。"]) }));
      root.appendChild(el("div", { class: "tree panel" }, [
        el("b", { text: "R-group" }), "→",
        el("b", { style: "border-color:var(--k-np)", text: T(["Hydrophobic = non-polar", "疎水性 (hydrophobic) = 非極性", "疏水 (hydrophobic) = 非極性"]) }), T(["or", "または", "或"]),
        el("b", { text: T(["Hydrophilic", "親水性 (hydrophilic)", "親水 (hydrophilic)"]) }), "→",
        el("b", { style: "border-color:var(--k-pol)", text: T(["Polar", "極性 (polar)", "極性 (polar)"]) }), T(["or", "または", "或"]),
        el("b", { text: T(["Charged", "電荷をもつ", "帶電荷"]) }), "→",
        el("b", { style: "border-color:var(--k-ac)", text: T(["Acidic (−)", "酸性 (−)", "酸性 (−)"]) }), T(["or", "または", "或"]),
        el("b", { style: "border-color:var(--k-ba)", text: T(["Basic (+)", "塩基性 (+)", "鹼性 (+)"]) })
      ]));
      root.appendChild(el("p", { class: "small", text: T(["You do not need to learn the names of particular R-groups: just learn to recognise the type from its chemistry.", "個々の R基の名前を覚える必要はありません。化学的な特徴から種類を見分けられればよいのです。", "不需要記住個別 R 基的名稱，只需從化學特徵辨認其類型。"]) }));
      var done = {}, tries = 0, scoreEl = el("p", { class: "score" });
      var list = el("div");
      root.appendChild(list);
      root.appendChild(scoreEl);
      function score() {
        var n = Object.keys(done).length;
        scoreEl.textContent = T(["Sorted correctly: ", "正しく分類: ", "已正確分類："]) + n + " / " + CARDS.length;
      }
      CARDS.forEach(function (c, i) {
        var fb = el("div", { class: "fb", "aria-live": "polite" });
        var card = el("div", { class: "card" });
        var btns = ORDER.map(function (k) {
          var b = el("button", { type: "button", text: T(CAT[k].n) });
          b.addEventListener("click", function () {
            if (done[i]) return;
            if (k === c.c) {
              done[i] = 1;
              card.style.borderLeftColor = "var(" + CAT[k].col + ")";
              fb.className = "fb good"; fb.textContent = "✔ " + T(CAT[k].fb);
              btns.forEach(function (x) { x.disabled = true; });
              b.classList.add("on"); b.disabled = true;
              score();
            } else {
              fb.className = "fb bad";
              fb.textContent = "✘ " + T(["Not quite. Hint: ", "惜しい。ヒント: ", "不太對。提示："]) + T(c.hint);
            }
          });
          return b;
        });
        card.appendChild(el("div", { class: "f", html: "R = " + c.f }));
        card.appendChild(el("div", { class: "small", text: T(c.hint) }));
        card.appendChild(el("div", { class: "opts" }, btns));
        card.appendChild(fb);
        list.appendChild(card);
      });
      var sp = el("div", { class: "card", style: "border-left-color:var(--k-S)" }, [
        el("div", { class: "f", html: "R = –CH<sub>2</sub>–SH" }),
        el("p", { class: "small", text: T([
          "For interest only: this sulfur-containing R-group is cysteine. Two cysteines can link by a covalent disulfide bond (S–S), which helps hold a protein's shape (see the protein folding widget). You are not asked to sort it.",
          "参考: この硫黄を含む R基 はシステイン (cysteine) です。2つのシステインは共有結合であるジスルフィド結合 (disulfide bond, S–S) をつくり、タンパク質の形を保つのに役立ちます（タンパク質の折りたたみの教材を参照）。分類は不要です。",
          "備註：這個含硫的 R 基屬於半胱氨酸 (cysteine)。兩個半胱氨酸可形成共價的二硫鍵 (disulfide bond, S–S)，有助維持蛋白質的形狀（見蛋白質摺疊教材）。不需要為它分類。"]) })
      ]);
      root.appendChild(sp);
      var rb = el("button", { type: "button", text: T(["Reset", "リセット", "重設"]) });
      rb.addEventListener("click", build);
      root.appendChild(el("div", { class: "bar" }, [rb]));
      score();
      root.appendChild(exam(T, [
        "An amino acid has an amine group, a carboxyl group, a hydrogen atom and an R-group, all on the alpha carbon. The R-group is what differs: hydrophobic or hydrophilic (polar, or charged acidic/basic).",
        "アミノ酸は α炭素 にアミノ基、カルボキシ基、水素原子、R基 が結合した構造。違いは R基 だけで、疎水性か親水性（極性、または酸性・塩基性で電荷をもつ）に分けられる。",
        "氨基酸的 α 碳連接氨基、羧基、氫原子和 R 基。不同之處只在 R 基：疏水，或親水（極性，或帶電荷的酸性／鹼性）。"]));
      }
    }
  });
})();
