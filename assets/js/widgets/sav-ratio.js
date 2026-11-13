/* Widget: sav-ratio — cube model of surface area-to-volume ratio and cell size (B2.3.6, B3.1.1) */
(function () {
  "use strict";
  var STYLE_ID = "w-sav-ratio-style";

  var CSS = [
    ".sav{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029);font-size:.95rem}",
    ".sav *{box-sizing:border-box}",
    ".sav .sv-top{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem;align-items:center;margin-bottom:.75rem}",
    ".sav .sv-slide{flex:1 1 220px;min-width:200px}",
    ".sav .sv-slide label{display:flex;justify-content:space-between;gap:.5rem;font-weight:600;margin-bottom:.25rem}",
    ".sav input[type=range]{width:100%;accent-color:var(--accent,#2547c7);min-height:2rem}",
    ".sav .sv-btn{font:inherit;font-weight:600;min-height:2.5rem;padding:.4rem .9rem;border-radius:var(--radius,6px);border:1px solid var(--line,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".sav .sv-btn:hover{background:var(--surface-2,#e3eaee)}",
    ".sav .sv-btn:disabled{opacity:.5;cursor:default}",
    ".sav .sv-btn:focus-visible,.sav input:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".sav .sv-grid{display:grid;grid-template-columns:1fr;gap:1rem}",
    "@media(min-width:640px){.sav .sv-grid{grid-template-columns:1fr 1fr}}",
    ".sav .sv-card{background:var(--surface-2,#e3eaee);border-radius:var(--radius-lg,12px);padding:.75rem}",
    ".sav svg{display:block;width:100%;height:auto}",
    ".sav .sv-nums{display:grid;grid-template-columns:auto 1fr;gap:.2rem .75rem;margin:.5rem 0 0;font-variant-numeric:tabular-nums}",
    ".sav .sv-nums dt{color:var(--muted,#4d626d)}",
    ".sav .sv-nums dd{margin:0;font-weight:700}",
    ".sav table{width:100%;border-collapse:collapse;font-size:.85rem;font-variant-numeric:tabular-nums}",
    ".sav th,.sav td{white-space:nowrap;padding:.2rem .35rem;text-align:right;border-bottom:1px solid var(--line,#c3d0d7)}",
    ".sav th{white-space:normal}",
    ".sav th:first-child,.sav td:first-child{text-align:left}",
    ".sav tr.on td{background:var(--accent-soft,#e0e7fb);font-weight:700}",
    ".sav .sv-bar{height:.9rem;border-radius:999px;background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);overflow:hidden}",
    ".sav .sv-bar>span{display:block;height:100%;background:var(--accent,#2547c7);transition:width .25s}",
    ".sav .sv-bar.need>span{background:var(--theme-b,#b82a56)}",
    "@media(prefers-reduced-motion:reduce){.sav .sv-bar>span{transition:none}}",
    ".sav .sv-msg{margin:.6rem 0 0;padding:.55rem .75rem;border-left:4px solid var(--accent,#2547c7);background:var(--accent-soft,#e0e7fb);border-radius:var(--radius,6px)}",
    ".sav .sv-note{margin:.75rem 0 0;color:var(--muted,#4d626d);font-size:.85rem}",
    ".sav h4{margin:0 0 .4rem;font-size:.95rem}",
    ".sav .gl{stroke:var(--line,#c3d0d7)}",
    ".sav .tx{fill:var(--ink,#0f2029);font-size:10px}",
    ".sav .tm{fill:var(--muted,#4d626d);font-size:10px}",
    ".sav .curve{fill:none;stroke:var(--accent,#2547c7);stroke-width:2.5}",
    ".sav .dot{fill:var(--theme-b,#b82a56);stroke:var(--surface,#fff);stroke-width:2}",
    ".sav .fT{fill:var(--accent-soft,#e0e7fb);stroke:var(--ink,#0f2029);stroke-width:1}",
    ".sav .fL{fill:var(--surface,#fff);stroke:var(--ink,#0f2029);stroke-width:1}",
    ".sav .fR{fill:var(--line,#c3d0d7);stroke:var(--ink,#0f2029);stroke-width:1}"
  ].join("\n");

  var S = {
    title: { en: "Cube model: surface area-to-volume ratio", ja: "立方体モデル：表面積と体積の比 (SA:V)", zh: "立方體模型：表面面積與體積比 (SA:V)" },
    side: { en: "Side length (l)", ja: "辺の長さ (l)", zh: "邊長 (l)" },
    unit: "µm",
    dbl: { en: "Double the side", ja: "辺を2倍にする", zh: "邊長加倍" },
    reset: { en: "Back to 1 µm", ja: "1 µmに戻す", zh: "回到 1 µm" },
    cube: { en: "Your cube (drawn to scale)", ja: "あなたの立方体（縮尺どおり）", zh: "你的立方體（按比例繪畫）" },
    unitCube: { en: "1 µm cube", ja: "1 µmの立方体", zh: "1 µm 立方體" },
    sa: { en: "Surface area = 6 × l²", ja: "表面積 = 6 × l²", zh: "表面面積 = 6 × l²" },
    vol: { en: "Volume = l³", ja: "体積 = l³", zh: "體積 = l³" },
    ratio: { en: "SA:V = 6 ÷ l", ja: "SA:V = 6 ÷ l", zh: "SA:V = 6 ÷ l" },
    thSide: { en: "Side (µm)", ja: "辺 (µm)", zh: "邊長 (µm)" },
    thSA: { en: "Surface area (µm²)", ja: "表面積 (µm²)", zh: "表面面積 (µm²)" },
    thV: { en: "Volume (µm³)", ja: "体積 (µm³)", zh: "體積 (µm³)" },
    thR: { en: "SA:V", ja: "SA:V", zh: "SA:V" },
    graph: { en: "SA:V falls as size rises", ja: "大きくなるとSA:Vは小さくなる", zh: "大小增加，SA:V下降" },
    xAxis: { en: "Side length (µm)", ja: "辺の長さ (µm)", zh: "邊長 (µm)" },
    yAxis: { en: "SA:V", ja: "SA:V", zh: "SA:V" },
    needH: { en: "Link to cell size", ja: "細胞の大きさとのつながり", zh: "與細胞大小的關係" },
    supply: { en: "Exchange possible (∝ surface area)", ja: "可能な交換量（∝ 表面積）", zh: "可進行的交換量（∝ 表面面積）" },
    need: { en: "Exchange needed (∝ volume)", ja: "必要な交換量（∝ 体積）", zh: "所需的交換量（∝ 體積）" },
    note: { en: "Both bars are scaled to the largest cube (l = 10 µm).", ja: "どちらの棒も最大の立方体 (l = 10 µm) を基準にした長さです。", zh: "兩條棒都以最大的立方體 (l = 10 µm) 為基準。" },
    nos: { en: "Nature of science: a cube is a model, a simplified version of a complex system. Real cells are not cubes, but scale factors work in the same way.", ja: "科学の本質：立方体はモデル、つまり複雑な系を単純にしたものです。実際の細胞は立方体ではありませんが、スケールの関係は同じように働きます。", zh: "科學本質：立方體是模型，即複雜系統的簡化版本。真實的細胞不是立方體，但比例因子的作用相同。" }
  };

  function fmt(x) {
    var r = Math.round(x * 100) / 100;
    return String(r);
  }

  function mk(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  IB.registerWidget("sav-ratio", {
    title: S.title,
    mount: function (el, ctx) {
      if (!document.getElementById(STYLE_ID)) {
        var st = document.createElement("style");
        st.id = STYLE_ID;
        st.textContent = CSS;
        document.head.appendChild(st);
      }
      var t = ctx.t;
      var l = 4;
      var root = mk("div", "sav");
      el.appendChild(root);

      var uid = "sav" + Math.random().toString(36).slice(2, 7);
      root.innerHTML =
        '<div class="sv-top">' +
        '<div class="sv-slide"><label for="' + uid + '"><span>' + t(S.side) + '</span><span class="sv-val" aria-hidden="true"></span></label>' +
        '<input id="' + uid + '" type="range" min="1" max="10" step="1" value="' + l + '"></div>' +
        '<button type="button" class="sv-btn sv-dbl">' + t(S.dbl) + '</button>' +
        '<button type="button" class="sv-btn sv-rst">' + t(S.reset) + '</button>' +
        '</div>' +
        '<div class="sv-grid">' +
        '<div class="sv-card"><h4>' + t(S.cube) + '</h4><svg class="sv-cube" viewBox="0 0 220 176" role="img"></svg>' +
        '<dl class="sv-nums" aria-live="polite"></dl></div>' +
        '<div class="sv-card"><h4>' + t(S.graph) + '</h4><svg class="sv-graph" viewBox="0 0 300 200" role="img" aria-label="' + t(S.graph) + '"></svg></div>' +
        '<div class="sv-card"><table class="sv-tab"></table></div>' +
        '<div class="sv-card"><h4>' + t(S.needH) + '</h4>' +
        '<div>' + t(S.supply) + '</div><div class="sv-bar"><span class="sv-b1"></span></div>' +
        '<div style="margin-top:.5rem">' + t(S.need) + '</div><div class="sv-bar need"><span class="sv-b2"></span></div>' +
        '<p class="sv-note">' + t(S.note) + '</p>' +
        '<p class="sv-msg" aria-live="polite"></p></div>' +
        '</div>' +
        '<p class="sv-note">' + t(S.nos) + '</p>';

      var slider = root.querySelector("input");
      var valEl = root.querySelector(".sv-val");
      var cubeSvg = root.querySelector(".sv-cube");
      var nums = root.querySelector(".sv-nums");
      var graph = root.querySelector(".sv-graph");
      var tab = root.querySelector(".sv-tab");
      var b1 = root.querySelector(".sv-b1");
      var b2 = root.querySelector(".sv-b2");
      var msg = root.querySelector(".sv-msg");
      var dblBtn = root.querySelector(".sv-dbl");

      function isoCube(x, y, s, id) {
        // x,y = bottom-front corner; s = edge length in px; simple oblique projection
        var d = s * 0.5; // depth offset
        var dx = d * 0.866, dy = d * 0.5;
        var front = [[x, y], [x + s, y], [x + s, y - s], [x, y - s]];
        var top = [[x, y - s], [x + s, y - s], [x + s + dx, y - s - dy], [x + dx, y - s - dy]];
        var side = [[x + s, y], [x + s + dx, y - dy], [x + s + dx, y - s - dy], [x + s, y - s]];
        function p(a) { return a.map(function (q) { return q[0].toFixed(1) + "," + q[1].toFixed(1); }).join(" "); }
        return '<g id="' + id + '"><polygon class="fL" points="' + p(front) + '"/><polygon class="fT" points="' + p(top) + '"/><polygon class="fR" points="' + p(side) + '"/></g>';
      }

      function drawCube() {
        // 11 px per µm so a 10 µm cube is 110 px wide; the 1 µm reference cube is 11 px.
        var u = 11;
        var s = l * u;
        var x0 = 14, y0 = 156;
        var h = isoCube(x0, y0, s, "yc");
        var refX = 192;
        var ref = isoCube(refX, y0, u, "rc");
        var out = h + ref;
        out += '<text class="tm" x="218" y="' + (y0 + 14) + '" text-anchor="end">' + t(S.unitCube) + '</text>';
        out += '<text class="tx" x="' + (x0) + '" y="' + (y0 + 14) + '">l = ' + l + ' µm</text>';
        cubeSvg.innerHTML = out;
        cubeSvg.setAttribute("aria-label", t(S.cube) + ": l = " + l + " µm");
      }

      function drawNums() {
        var sa = 6 * l * l, v = l * l * l, r = 6 / l;
        nums.innerHTML =
          "<dt>" + t(S.sa) + "</dt><dd>6 × " + l + "² = " + sa + " µm²</dd>" +
          "<dt>" + t(S.vol) + "</dt><dd>" + l + "³ = " + v + " µm³</dd>" +
          "<dt>" + t(S.ratio) + "</dt><dd>6 ÷ " + l + " = " + fmt(r) + " : 1</dd>";
      }

      function drawTable() {
        var rows = '<tr><th>' + t(S.thSide) + '</th><th>' + t(S.thSA) + '</th><th>' + t(S.thV) + '</th><th>' + t(S.thR) + '</th></tr>';
        for (var i = 1; i <= 10; i++) {
          rows += '<tr' + (i === l ? ' class="on"' : '') + '><td>' + i + '</td><td>' + 6 * i * i + '</td><td>' + i * i * i + '</td><td>' + fmt(6 / i) + ' : 1</td></tr>';
        }
        tab.innerHTML = rows;
      }

      function drawGraph() {
        var L = 38, R = 290, T = 12, B = 168; // plot box
        function X(v) { return L + (v / 10) * (R - L); }
        function Y(v) { return B - (v / 6) * (B - T); }
        var g = "";
        for (var yy = 0; yy <= 6; yy += 2) {
          g += '<line class="gl" x1="' + L + '" x2="' + R + '" y1="' + Y(yy) + '" y2="' + Y(yy) + '"/><text class="tm" x="' + (L - 5) + '" y="' + (Y(yy) + 3) + '" text-anchor="end">' + yy + '</text>';
        }
        for (var xx = 0; xx <= 10; xx += 2) {
          g += '<text class="tm" x="' + X(xx) + '" y="' + (B + 13) + '" text-anchor="middle">' + xx + '</text>';
        }
        g += '<line class="gl" x1="' + L + '" x2="' + L + '" y1="' + T + '" y2="' + B + '" style="stroke:var(--ink,#0f2029)"/><line class="gl" x1="' + L + '" x2="' + R + '" y1="' + B + '" y2="' + B + '" style="stroke:var(--ink,#0f2029)"/>';
        var pts = [];
        for (var k = 10; k <= 100; k++) { var v = k / 10; pts.push(X(v).toFixed(1) + "," + Y(6 / v).toFixed(1)); }
        g += '<polyline class="curve" points="' + pts.join(" ") + '"/>';
        g += '<line class="gl" style="stroke-dasharray:3 3;stroke:var(--theme-b,#b82a56)" x1="' + X(l) + '" x2="' + X(l) + '" y1="' + Y(6 / l) + '" y2="' + B + '"/>';
        g += '<line class="gl" style="stroke-dasharray:3 3;stroke:var(--theme-b,#b82a56)" x1="' + L + '" x2="' + X(l) + '" y1="' + Y(6 / l) + '" y2="' + Y(6 / l) + '"/>';
        g += '<circle class="dot" cx="' + X(l) + '" cy="' + Y(6 / l) + '" r="5"/>';
        g += '<text class="tx" x="' + ((L + R) / 2) + '" y="196" text-anchor="middle">' + t(S.xAxis) + '</text>';
        g += '<text class="tx" x="10" y="' + ((T + B) / 2) + '" text-anchor="middle" transform="rotate(-90 10 ' + ((T + B) / 2) + ')">' + t(S.yAxis) + '</text>';
        graph.innerHTML = g;
      }

      function drawBars() {
        b1.style.width = ((6 * l * l) / 600 * 100).toFixed(1) + "%";
        b2.style.width = ((l * l * l) / 1000 * 100).toFixed(1) + "%";
        var pct = Math.round(100 / l);
        var m = {
          en: "A cube of side " + l + " µm has " + pct + "% of the surface area per unit of volume that a 1 µm cube has. When the side doubles, area ×4 but volume ×8, so SA:V halves.",
          ja: "辺が " + l + " µm の立方体は、体積あたりの表面積が1 µmの立方体の " + pct + "% です。辺が2倍になると、面積は4倍、体積は8倍になるので、SA:Vは半分になります。",
          zh: "邊長 " + l + " µm 的立方體，每單位體積的表面面積是 1 µm 立方體的 " + pct + "%。邊長加倍時，面積增至4倍而體積增至8倍，所以SA:V減半。"
        };
        msg.textContent = t(m);
      }

      function render() {
        valEl.textContent = l + " " + S.unit;
        slider.setAttribute("aria-valuetext", l + " µm");
        dblBtn.disabled = l * 2 > 10;
        drawCube(); drawNums(); drawTable(); drawGraph(); drawBars();
      }

      function onInput() { l = parseInt(slider.value, 10); render(); }
      slider.addEventListener("input", onInput);
      root.querySelector(".sv-dbl").addEventListener("click", function () {
        if (l * 2 > 10) return; l = l * 2; slider.value = l; render();
      });
      root.querySelector(".sv-rst").addEventListener("click", function () {
        l = 1; slider.value = l; render();
      });
      render();
      return function () { slider.removeEventListener("input", onInput); };
    }
  });
})();
