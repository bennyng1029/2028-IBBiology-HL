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
    setTimeout(function () {
      var sb = bar.querySelector("[aria-selected=true]");
      if (sb && bar.scrollWidth > bar.clientWidth) bar.scrollLeft = Math.max(0, sb.getBoundingClientRect().left - bar.getBoundingClientRect().left + bar.scrollLeft - 12);
    }, 0);
    return bar;
  }
  var CSS =
    
    ".W input[type=range]{width:100%;min-height:40px;accent-color:var(--k-acc)}" +
    ".W .meter{height:12px;border-radius:99px;background:var(--k-line);overflow:hidden}.W .meter i{display:block;height:100%;background:var(--k-good);transition:width .3s}" +
    ".W .st{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:14px;margin:6px 0}" +
    ".W .st b.good{color:var(--k-good)}.W .st b.bad{color:var(--k-bad)}.W .st b.mid{color:var(--k-ds)}" +
    ".W .lock{color:var(--k-bad);font-weight:600;font-size:14px}.W .lock:empty{display:none}" +
    ".W .seg{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}.W .seg button{padding:4px 4px;font-size:13px;line-height:1.2}" +
    "@media (max-width:639px){.W .wl-panel{gap:6px}.W .wl-panel .panel{padding:6px 10px;font-size:14px}.W .st{line-height:1.35;font-size:13px;justify-content:flex-start;gap:0 14px}.W .seg button{font-size:12px}.W .wl-stage .legend{font-size:12px}}" +
    ".W .wl-exam{font-size:13px;line-height:1.4}.W .wl-panel .panel{font-size:14px;padding:8px 12px}.W .sl input[type=range]{min-height:32px}.W .wl-panel{gap:8px}" +
    ".W .orow{display:flex;gap:8px;align-items:center}.W .orow p{flex:1;margin:0}.W .orow button{flex:none;min-width:64px}" +
    ".W .sl{margin:0;display:grid;grid-template-columns:6.5em 1fr 4.2em;align-items:center;gap:8px;font-weight:600}.W .sl .sl-n{white-space:nowrap}.W .sl span:last-child{text-align:right}.W .sl input[type=range]{min-height:36px}.W .wl-stage svg{max-height:min(50vh,360px)}.W .st{margin:2px 0}.W .wl-panel .panel p{margin:0 0 4px}";
  var COL = { N: "--k-np", P: "--k-pol", A: "--k-ac", B: "--k-ba", C: "--k-S" };
  var R = [
    ["P", 50, 235], ["P", 25, 175], ["B", 45, 120], ["C", 75, 60], ["N", 125, 90], ["N", 175, 100], ["N", 225, 90], ["P", 285, 70], ["B", 325, 55],
    ["P", 335, 110], ["A", 295, 125], ["N", 255, 150], ["N", 215, 160], ["N", 170, 165], ["C", 110, 135], ["A", 80, 185], ["P", 110, 230]
  ];
  var HB = [[7, 9], [0, 16]], IO = [[2, 15], [8, 10]];
  var BONDS = [["hb", 7, 9], ["io", 2, 15], ["hb", 0, 16], ["io", 8, 10]]; // + hydrophobic core = 5th
  var FOLD = R.map(function (r) { return [r[1] * 0.85 + 22, (r[2] - 50) * 0.92 + 14]; });
  var UNF = R.map(function (r, i) { return [18 + i * 20.5, 100 + 42 * Math.sin(i * 1.15) + (i % 3) * 6]; });
  var MODELS = [
    { n: ["Model A: typical protein", "モデル A: ふつうのタンパク質", "模型 A：一般蛋白質"], To: 37, Tm: 55, pH: 7 },
    { n: ["Model B: acid-adapted (like pepsin)", "モデル B: 酸に適応 (ペプシンのように)", "模型 B：適應酸性（如胃蛋白酶 pepsin）"], To: 37, Tm: 55, pH: 2 },
    { n: ["Model C: heat-tolerant (hot-spring organism)", "モデル C: 高温に強い (温泉にすむ生物)", "模型 C：耐熱（溫泉生物）"], To: 70, Tm: 88, pH: 7 }
  ];

  var SHORT = [["A: typical", "A: ふつう", "A：一般"], ["B: acid-adapted", "B: 酸に適応", "B：適應酸性"], ["C: heat-tolerant", "C: 高温に強い", "C：耐熱"]];
  IB.registerWidget("denaturation", {
    title: { en: "Denaturation: temperature and pH", ja: "変性：温度と pH", zh: "變性：溫度與 pH" },
    mount: function (root, ctx) {
      css("denaturation", CSS);
      root.classList.add("W");
      var T = mkT(ctx);
      var NAR = window.innerWidth < 640;
      var m = MODELS[0], temp = 37, ph = 7, lock = 1, shown = 1, timer, tick = 0, reduced = REDUCED();

      var intro = el("p", { class: "small", text: T(["These three models are illustrative, not measured data for real proteins. Different proteins have different optimum conditions: choose a model, then move the sliders.", "この3つは説明用のモデルで、実在のタンパク質の測定値ではありません。最適条件はタンパク質ごとに違います。モデルを選んでスライダーを動かしましょう。", "這三個都是示意模型，並非真實蛋白質的量度數據。不同蛋白質有不同的最適條件：先選模型，再移動滑桿。"]) });
      var mb = MODELS.map(function (md, i) {
        var b = el("button", { type: "button", "aria-pressed": i === 0 ? "true" : "false", title: T(md.n), text: T(SHORT[i]) });
        b.addEventListener("click", function () { setModel(i); });
        return b;
      });
      var optNote = el("p", { class: "small" });

      var svg = sv("svg", { viewBox: "0 4 360 190", role: "img", "aria-label": T(["Model protein changing shape", "形が変わるモデルタンパク質", "形狀改變的模型蛋白質"]) });
      var coreG = sv("g");
      var line = sv("path", { fill: "none", stroke: "var(--k-mut)", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round" });
      var bondEls = BONDS.map(function (b) { return sv("line", { stroke: "var(" + (b[0] === "hb" ? "--k-hb" : "--k-io") + ")", "stroke-width": 3.5, "stroke-dasharray": b[0] === "hb" ? "5 4" : "1 5", "stroke-linecap": "round" }); });
      var beadEls = R.map(function (r) { return sv("circle", { r: 9, fill: "var(" + COL[r[0]] + ")", stroke: "var(--k-sf)", "stroke-width": 1.5 }); });
      var coreEls = [4, 5, 6, 11, 12, 13].map(function (i) { return sv("circle", { r: 24, fill: "var(--k-hp)" }); });
      coreEls.forEach(function (c) { coreG.appendChild(c); });
      svg.appendChild(coreG); svg.appendChild(line);
      bondEls.forEach(function (b) { svg.appendChild(b); });
      beadEls.forEach(function (b) { svg.appendChild(b); });
      var legend = el("div", { class: "legend wl-legend" }, [
        legendItem("l", "var(--k-mut)", NAR ? T(["peptide bonds", "ペプチド結合", "肽鍵"]) : T(["peptide bonds (backbone)", "ペプチド結合 (骨格)", "肽鍵（骨架）"])),
        legendItem("l", "var(--k-hb)", T(["hydrogen bonds", "水素結合", "氫鍵"])),
        legendItem("l", "var(--k-io)", T(["ionic bonds", "イオン結合", "離子鍵"])),
        legendItem("i", "var(--k-hp)", T(["hydrophobic core", "疎水性の核", "疏水核心"]))
      ]);
      var st = el("div", { class: "st", "aria-live": "polite" });
      var meter = el("div", { class: "meter" }, [el("i", {})]);
      var lockEl = el("div", { class: "lock" });

      function slider(label, min, max, val, step, unit) {
        var inp = el("input", { type: "range", min: min, max: max, value: val, step: step, "aria-label": label });
        var v = el("span");
        var w = el("div", { class: "sl" }, [el("span", { class: "sl-n", text: label }), inp, v]);
        inp._v = v; inp._u = unit; return [w, inp];
      }
      var ts = slider(T(["Temperature", "温度", "溫度"]), 0, 100, 37, 1, " °C"), ps = slider("pH", 1, 14, 7, 0.5, "");
      var tI = ts[1], pI = ps[1];
      tI.addEventListener("input", function () { temp = +tI.value; update(); });
      pI.addEventListener("input", function () { ph = +pI.value; update(); });
      var rb = el("button", { type: "button", text: NAR ? T(["Reset", "リセット", "重設"]) : T(["Reset (fresh protein sample)", "リセット (新しいサンプル)", "重設（新的蛋白質樣本）"]) });
      rb.addEventListener("click", function () { lock = 1; temp = m.To; ph = m.pH; tI.value = temp; pI.value = ph; update(); });
      var why = el("div", { class: "panel", "aria-live": "polite", style: NAR ? "" : "min-height:5em" });
      var defn = el("div", { class: "panel" }, [
        el("p", {}, [el("strong", { text: T(["Denaturation ", "変性 (denaturation) ", "變性 (denaturation) "]) }), T(["is a change in the 3-D shape (conformation) of a protein, so it can no longer do its job.", "とは、タンパク質の立体的な形 (conformation) が変わり、はたらきを果たせなくなることです。", "是蛋白質立體形狀 (conformation) 的改變，令它不能再發揮功能。"])]),
        el("p", { text: T(["The peptide bonds are NOT broken: the amino acid sequence (primary structure) stays the same. Denaturation is usually permanent.", "ペプチド結合は切れません。アミノ酸配列（一次構造）は変わりません。変性はふつう元に戻りません。", "肽鍵「不會」斷開：氨基酸序列（一級結構）不變。變性通常是永久的。"]) })
      ]);
      var EXAMTXT = [
        "Denaturation = loss of 3-D shape (conformation) and so of function. Heat increases vibration and breaks weak bonds; extreme pH changes R-group charges (H⁺ gained or lost), breaking ionic and hydrogen bonds. Peptide bonds stay intact. Usually permanent.",
        "変性 = 立体構造 (conformation) が失われ、はたらきも失われること。熱は振動を大きくして弱い結合を切る。極端な pH は R基の電荷 (H⁺ の授受) を変え、イオン結合と水素結合を壊す。ペプチド結合は切れない。ふつう不可逆。",
        "變性 = 失去立體形狀 (conformation)，因而失去功能。熱令振動加劇，弱鍵斷開；極端 pH 改變 R 基的電荷（得失 H⁺），破壞離子鍵和氫鍵。肽鍵保持完整。通常是永久的。"];
      root.appendChild(el("div", { class: "wl" }, [
        el("div", { class: "wl-stage" }, [svg, legend, st, meter, NAR ? null : defn]),
        el("div", { class: "wl-panel" }, [
          NAR ? null : intro,
          el("div", { class: "seg" }, mb),
          NAR ? el("div", { class: "orow" }, [optNote, rb]) : optNote,
          ts[0], ps[0],
          NAR ? null : el("div", { class: "bar", style: "margin:0" }, [rb]),
          why, lockEl,
          NAR ? more(T, [intro, defn]) : null,
          exam(T, EXAMTXT)
        ])
      ]));

      function target() {
        var fT = 1 / (1 + Math.exp((temp - m.Tm) / 4));
        var fP = 1 / (1 + Math.exp((Math.abs(ph - m.pH) - 2.5) / 0.55));
        return { fT: fT, fP: fP, f: fT * fP };
      }
      function setModel(i) {
        m = MODELS[i]; lock = 1; temp = m.To; ph = m.pH; tI.value = temp; pI.value = ph;
        mb.forEach(function (b, j) { b.setAttribute("aria-pressed", i === j ? "true" : "false"); });
        update();
      }
      var cur = target();
      function update() {
        cur = target();
        if (cur.f < 0.5) lock = Math.min(lock, cur.f);
        tI._v.textContent = temp + " °C"; pI._v.textContent = "pH " + ph;
        optNote.textContent = T(m.n) + ". " + T(["Illustrative optimum for this model: about " + m.To + " °C and pH " + m.pH + ". Other proteins differ.", "このモデルの最適条件(例): 約 " + m.To + " °C、pH " + m.pH + "。他のタンパク質では異なります。", "此模型的示例最適條件：約 " + m.To + " °C、pH " + m.pH + "。其他蛋白質並不相同。"]);
        var f = Math.min(cur.f, lock);
        var cls = f > 0.8 ? "good" : f > 0.4 ? "mid" : "bad";
        var txt = f > 0.8 ? T(["Folded, functional", "折りたたまれ、機能する", "已摺疊，有功能"]) : f > 0.4 ? T(["Partly unfolded, function reduced", "一部ほどけ、機能低下", "部分解開，功能下降"]) : T(["Denatured: shape and function lost", "変性: 形もはたらきも失われた", "已變性：失去形狀和功能"]);
        var weak = Math.round(f * 5);
        st.innerHTML = "";
        st.appendChild(el("span", {}, [T(["Shape & function: ", "形とはたらき: ", "形狀與功能："]), el("b", { class: cls, text: txt })]));
        st.appendChild(el("span", { text: T(["Weak interactions intact: ", "保たれている弱い相互作用: ", "完整的弱相互作用："]) + weak + " / 5" }));
        st.appendChild(el("span", { text: T(["Peptide bonds intact ✔", "ペプチド結合は無傷 ✔", "肽鍵完整 ✔"]) }));
        meter.firstChild.style.width = Math.round(f * 100) + "%";
        meter.firstChild.style.background = "var(" + (f > .8 ? "--k-good" : f > .4 ? "--k-ds" : "--k-bad") + ")";
        lockEl.textContent = (lock < 0.5 && cur.f > lock + 0.15) ? T(["The protein stays denatured even though conditions are back to normal: denaturation is usually permanent.", "条件が元に戻っても変性したままです。変性はふつう不可逆です。", "即使條件回復正常，蛋白質仍保持變性狀態：變性通常是永久的。"]) : "";
        var ps = [];
        if (cur.fT < 0.85) ps.push(T(["High temperature makes the molecule vibrate more. This breaks the weak bonds (hydrogen bonds, ionic bonds, hydrophobic interactions), so the shape changes.", "高温では分子の振動が激しくなり、弱い結合（水素結合、イオン結合、疎水性相互作用）が切れて形が変わります。", "高溫令分子振動加劇，弱鍵（氫鍵、離子鍵、疏水相互作用）斷開，形狀因而改變。"]));
        if (cur.fP < 0.85) ps.push(T(["pH far from the optimum changes the charges on R-groups (they gain or lose H⁺). Ionic bonds and hydrogen bonds are disrupted, so the shape changes.", "最適から大きく離れた pH は R基の電荷 (H⁺ の授受) を変えます。イオン結合と水素結合が乱され、形が変わります。", "遠離最適值的 pH 會改變 R 基的電荷（得失 H⁺），破壞離子鍵和氫鍵，形狀因而改變。"]));
        if (!ps.length) ps.push(temp < m.To - 20 ? T(["Cold: the molecules move slowly, but the shape is not denatured.", "低温: 分子の動きは遅くなりますが、変性はしません。", "低溫：分子移動緩慢，但並沒有變性。"]) : T(["Conditions are near this protein's optimum, so the weak bonds hold the shape.", "条件がこのタンパク質の最適に近いので、弱い結合が形を保ちます。", "條件接近此蛋白質的最適值，弱鍵能維持形狀。"]));
        why.innerHTML = ""; ps.forEach(function (t) { why.appendChild(el("p", { text: t })); });
        if (reduced) { shown = f; draw(); } else if (!timer) loop();
      }
      function draw() {
        var f = shown, amp = reduced ? 0 : (temp / 100) * 3.2;
        tick++;
        var P = FOLD.map(function (a, i) {
          var u = UNF[i];
          return [a[0] + (u[0] - a[0]) * (1 - f) + (amp ? (Math.random() - .5) * amp * 2 : 0), a[1] + (u[1] - a[1]) * (1 - f) + (amp ? (Math.random() - .5) * amp * 2 : 0)];
        });
        var d = "M" + P[0][0] + " " + P[0][1];
        for (var i = 1; i < P.length - 1; i++) d += "Q" + P[i][0] + " " + P[i][1] + " " + (P[i][0] + P[i + 1][0]) / 2 + " " + (P[i][1] + P[i + 1][1]) / 2;
        d += "L" + P[P.length - 1][0] + " " + P[P.length - 1][1];
        line.setAttribute("d", d);
        beadEls.forEach(function (b, i) { b.setAttribute("cx", P[i][0]); b.setAttribute("cy", P[i][1]); });
        BONDS.forEach(function (b, k) {
          var o = Math.max(0, Math.min(1, (f * 5 - k - 0.5) * 1.2 + 0.5));
          bondEls[k].setAttribute("x1", P[b[1]][0]); bondEls[k].setAttribute("y1", P[b[1]][1]); bondEls[k].setAttribute("x2", P[b[2]][0]); bondEls[k].setAttribute("y2", P[b[2]][1]);
          bondEls[k].setAttribute("opacity", f * 5 > k + 0.5 ? 1 : 0);
        });
        coreEls.forEach(function (c, k) {
          var i = [4, 5, 6, 11, 12, 13][k];
          c.setAttribute("cx", P[i][0]); c.setAttribute("cy", P[i][1]); c.setAttribute("opacity", f * 5 > 4.5 || f > 0.9 ? 0.22 : (f > 0.5 ? 0.12 : 0));
        });
      }
      function loop() {
        timer = setInterval(function () {
          var f = Math.min(cur.f, lock);
          shown += (f - shown) * 0.25;
          if (Math.abs(f - shown) < 0.002) shown = f;
          draw();
        }, 50);
      }
      update();
      return function () { clearInterval(timer); };
    }
  });
})();
