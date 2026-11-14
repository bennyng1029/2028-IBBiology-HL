/* Widget: heart-beat — B3.2.15–16 (AHL): animated schematic heart in the frontal plane beating through the cardiac cycle,
   synchronised with a pressure-time graph for the left side (atrium, ventricle, aorta).
   Curve data are the same illustrative values as "heart-cycle" (one 0.8 s cycle, about 75 beats per minute).
   Valves open/close exactly where curves cross: AV closes when ventricular pressure rises above atrial pressure,
   semilunar opens when ventricular pressure exceeds aortic pressure, and the reverse on the way down.
   Right side is drawn beating in step with the left (pressures plotted for the left side only). */
(function () {
  "use strict";
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var ID = "w-heart-beat-css";
  var KIT = [
    ":where(.wl){display:grid;gap:.75rem;--stage-max:min(42vh,320px)}",
    "@media(min-width:900px){:where(.wl){grid-template-columns:3fr 2fr;align-items:start;--stage-max:min(58vh,440px)}}",
    ":where(.wl-stage){min-width:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius)}",
    ":where(.wl-stage) svg{display:block;width:100%;height:auto;max-height:var(--stage-max);margin:0 auto}",
    ":where(.wl-panel){min-width:0;display:flex;flex-direction:column;gap:.55rem;font-size:.92rem}",
    ":where(.wl-exam){border-left:4px solid var(--accent);background:var(--accent-soft);padding:.45rem .65rem;font-size:.88rem;line-height:1.45}",
    ":where(.wl-legend){display:flex;flex-wrap:wrap;gap:.2rem .9rem;font-size:.82rem;padding:.35rem .6rem;color:var(--ink-2)}"
  ].join("\n");
  var CSS = KIT + "\n" + [
    ".w-heart-beat{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink)}",
    ".w-heart-beat svg text{fill:var(--ink);font-family:var(--font-body,system-ui,sans-serif);font-size:12px}",
    ".w-heart-beat .hb-heart{max-height:min(214px,var(--stage-max))}",
    "@media(min-width:900px){.w-heart-beat .hb-heart{max-height:var(--stage-max)}}",
    ".w-heart-beat .hb-row{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}",
    ".w-heart-beat .hb-b{font:inherit;font-size:.86rem;font-weight:700;min-height:40px;min-width:40px;padding:.25rem .6rem;border-radius:var(--radius);border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);cursor:pointer}",
    ".w-heart-beat .hb-b:hover{background:var(--surface-2)}",
    ".w-heart-beat .hb-b[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}",
    ".w-heart-beat button:focus-visible,.w-heart-beat input:focus-visible{outline:3px solid var(--accent);outline-offset:2px}",
    ".w-heart-beat .hb-chip{display:flex;justify-content:space-between;gap:.3rem .6rem;align-items:center;padding:.25rem .6rem;border-radius:var(--radius);border:1.5px solid var(--ink-2);font-weight:800;min-height:2.2rem}.w-heart-beat details{border:0!important;background:none!important;font-size:.86rem;margin:-.2rem 0 0}.w-heart-beat summary{cursor:pointer;font-weight:700;color:var(--accent-ink);min-height:32px;display:flex;align-items:center}",
    ".w-heart-beat .hb-chip small{font-weight:600;font-size:.8rem}",
    ".w-heart-beat .hb-msg{background:var(--surface-2);border-radius:var(--radius);padding:.4rem .65rem;line-height:1.4;min-height:3.9em;font-size:.88rem}",
    ".w-heart-beat .hb-cap{font-size:.76rem;color:var(--muted);margin:0}",
    ".w-heart-beat .wl-exam{font-size:.82rem;line-height:1.4}",
    ".w-heart-beat input[type=range]{flex:1 1 7rem;min-width:6rem;accent-color:var(--accent);height:30px}",
    ".w-heart-beat .hb-lg{font-size:.78rem;color:var(--ink-2);line-height:1.35;margin:0}",
    ".w-heart-beat .hb-gr{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius)}",
    ".w-heart-beat .hb-gr svg{width:100%;height:auto;display:block;cursor:crosshair;touch-action:none}",
    ".w-heart-beat .hb-wall{fill:none;stroke:var(--theme-b);stroke-linejoin:round}",
    ".w-heart-beat .hb-vv{stroke:var(--ink);stroke-width:4;stroke-linecap:round}",
    ".w-heart-beat .hb-pipe{stroke:var(--ink-2);stroke-width:1.6}",
    ".w-heart-beat .hb-ao{fill:none;stroke:var(--accent);stroke-width:2.8}",
    ".w-heart-beat .hb-lv{fill:none;stroke:var(--theme-b);stroke-width:2.8;stroke-dasharray:7 3}",
    ".w-heart-beat .hb-la{fill:none;stroke:var(--theme-a);stroke-width:2.8;stroke-dasharray:2 3;stroke-linecap:round}",
    ".w-heart-beat .hb-gl{stroke:var(--line);stroke-width:1}",
    ".w-heart-beat .hb-ax{stroke:var(--ink-2);stroke-width:1.3;fill:none}",
    ".w-heart-beat .hb-cur{stroke:var(--ink);stroke-width:1.6;stroke-dasharray:4 3}",
    ".w-heart-beat .hb-ev{fill:var(--surface);stroke:var(--ink);stroke-width:1.5}",
    ".w-heart-beat .hb-sw{display:inline-block;width:1.5rem;border-top:3px solid;vertical-align:middle;margin-right:.25rem}",
    "@media(prefers-reduced-motion:reduce){.w-heart-beat *{transition:none!important;animation:none!important}}"
  ].join("\n");

  // Illustrative pressures (mmHg) over one 0.8 s cycle; same values as the heart-cycle widget.
  var KEYS = {
    la: [[0, 8], [0.05, 10], [0.1, 6], [0.15, 5], [0.2, 6], [0.3, 8], [0.4, 10], [0.47, 9], [0.5, 6], [0.6, 5], [0.7, 6], [0.8, 8]],
    lv: [[0, 5], [0.05, 7], [0.1, 9], [0.13, 10], [0.17, 80], [0.2, 100], [0.25, 119], [0.3, 120], [0.35, 110], [0.4, 100], [0.45, 40], [0.5, 4], [0.6, 4], [0.7, 5], [0.8, 5]],
    ao: [[0, 80], [0.17, 80], [0.2, 98], [0.25, 115], [0.3, 118], [0.35, 114], [0.4, 108], [0.42, 104], [0.5, 98], [0.6, 90], [0.7, 84], [0.8, 80]],
    vol: [[0, 0.88], [0.08, 1], [0.17, 1], [0.33, 0.72], [0.47, 0.72], [0.8, 0.88]]
  };
  function interp(keys, x) {
    for (var i = 0; i < keys.length - 1; i++) {
      var a = keys[i], b = keys[i + 1];
      if (x >= a[0] && x <= b[0]) { var u = (x - a[0]) / (b[0] - a[0]); u = u * u * (3 - 2 * u); return a[1] + (b[1] - a[1]) * u; }
    }
    return keys[keys.length - 1][1];
  }
  var P = function (k, x) { return interp(KEYS[k], x); };
  function avOpenAt(x) { return P("la", x) > P("lv", x); }
  function slOpenAt(x) { return P("lv", x) > P("ao", x); }
  // valve events found from the curves themselves
  var EV = (function () {
    var r = {}, pa = avOpenAt(0), ps = slOpenAt(0);
    for (var x = 0.0005; x <= 0.8; x += 0.0005) {
      var a = avOpenAt(x), s = slOpenAt(x);
      if (pa && !a) r.avClose = x;
      if (!ps && s) r.slOpen = x;
      if (ps && !s) r.slClose = x;
      if (!pa && a && x > 0.3) r.avOpen = x;
      pa = a; ps = s;
    }
    return r;
  })();
  var STEPS = [0, EV.avClose, EV.slOpen, EV.slClose, EV.avOpen];
  function phaseOf(x) { return x < EV.avClose ? 0 : (x < EV.slClose ? 1 : 2); }

  var T = {
    title: L("Heart beat", "心臓の拍動", "心臟跳動"),
    ph: [
      L("Atrial systole", "心房収縮期 (atrial systole)", "心房收縮期 (atrial systole)"),
      L("Ventricular systole", "心室収縮期 (ventricular systole)", "心室收縮期 (ventricular systole)"),
      L("Diastole", "拡張期 (diastole)", "舒張期 (diastole)")
    ],
    msg: [
      L("The SA node signal makes the atria contract, pushing the last blood into the ventricles. AV valves open, semilunar valves closed.", "洞房結節の信号で心房が収縮し、血液を心室へ押し込みます。房室弁は開き、半月弁は閉じています。", "竇房結的信號令心房收縮，把血液推入心室。房室瓣張開，半月瓣關閉。"),
      L("Ventricles contract. Pressure above atrial: AV valves close. Pressure above aortic: semilunar valves open and blood is pumped out.", "心室が収縮。圧力が心房を上回ると房室弁が閉じ、大動脈を上回ると半月弁が開いて血液が送り出されます。", "心室收縮。壓力高於心房，房室瓣關閉；高於主動脈，半月瓣張開，血液被泵出。"),
      L("Ventricles relax. Pressure below aortic: semilunar valves close. Below atrial: AV valves open and blood flows in.", "心室がゆるむ。圧力が大動脈より低いと半月弁が閉じ、心房より低いと房室弁が開いて血液が流れ込みます。", "心室放鬆。壓力低於主動脈，半月瓣關閉；低於心房，房室瓣張開，血液流入。")
    ],
    av: L("AV valves", "房室弁 (AV valves)", "房室瓣 (AV valves)"),
    sl: L("Semilunar valves", "半月弁 (semilunar valves)", "半月瓣 (semilunar valves)"),
    open: L("open", "開", "開"),
    closed: L("closed", "閉", "閉"),
    play: L("Play", "再生", "播放"),
    pause: L("Pause", "停止", "暫停"),
    prev: L("Previous step", "前のステップ", "上一步"),
    next: L("Next step", "次のステップ", "下一步"),
    speed: L("Speed", "速さ", "速度"),
    time: L("Time in the cycle (s)", "周期内の時間 (s)", "週期內的時間 (s)"),
    ra: L("Right atrium", "右心房", "右心房"), la: L("Left atrium", "左心房", "左心房"),
    rv: L("Right ventricle", "右心室", "右心室"), lv: L("Left ventricle", "左心室", "左心室"),
    raE: "right atrium", laE: "left atrium", rvE: "right ventricle", lvE: "left ventricle",
    aorta: L("Aorta", "大動脈", "主動脈"), pa: L("Pulmonary artery", "肺動脈", "肺動脈"),
    vc: L("Vena cava", "大静脈", "腔靜脈"), pv: L("Pulmonary vein", "肺静脈", "肺靜脈"),
    toLungs: L("to lungs", "肺へ", "往肺"), toBody: L("to body", "全身へ", "往全身"),
    fromBody: L("from body", "全身から", "來自全身"), fromLungs: L("from lungs", "肺から", "來自肺"),
    avv: L("AV valve", "房室弁", "房室瓣"), slv: L("semilunar valve", "半月弁", "半月瓣"),
    sa: L("SA node", "洞房結節", "竇房結"),
    gAtr: L("Atrium", "心房", "心房"), gVen: L("Ventricle", "心室", "心室"), gAo: L("Aorta", "大動脈", "主動脈"),
    gT: L("Time (s)", "時間 (s)", "時間 (s)"), gP: L("Pressure (mmHg)", "圧力 (mmHg)", "壓力 (mmHg)"),
    gTitle: L("Left side of the heart (illustrative values)", "心臓の左側（説明用の値）", "心臟左側（示範數值）"),
    ev: [L("AV valves close", "房室弁が閉じる", "房室瓣關閉"), L("semilunar valves open", "半月弁が開く", "半月瓣張開"), L("semilunar valves close", "半月弁が閉じる", "半月瓣關閉"), L("AV valves open", "房室弁が開く", "房室瓣張開")],
    blue: L("deoxygenated", "酸素の少ない血液", "缺氧血"), red: L("oxygenated", "酸素の多い血液", "含氧血"),
    legBlood: L("Colour code: blue = deoxygenated blood, red = oxygenated blood. Both sides beat together; pressures are for the left side.", "色: 青＝酸素の少ない血液 (deoxygenated)、赤＝酸素の多い血液 (oxygenated)。左右は同時に拍動します。圧力は左側のものです。", "顏色：藍＝缺氧血 (deoxygenated)，紅＝含氧血 (oxygenated)。左右兩側同時跳動；壓力為左側數值。"),
    ex: L("Valves open and close where the pressure curves cross. Blood flows from high to low pressure.", "弁は圧力曲線が交わるところで開閉します。血液は高圧から低圧へ流れます。", "瓣膜在壓力曲線相交處開合。血液由高壓流向低壓。"),
    exam: L("What to remember for the exam", "試験でおぼえること", "考試要記住"),
    ref: L("Syllabus B3.2.15–16 · AHL · illustrative, about 75 beats per minute at 1×", "シラバス B3.2.15–16 · AHL · 説明用、1×で約75拍/分", "課程大綱 B3.2.15–16 · AHL · 示範，1×約每分鐘75次"),
    more: L("More detail", "くわしく", "更多資料"),
    aria: L("Animated heart and pressure graph", "動く心臓と圧力グラフ", "動態心臟與壓力圖")
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function lerp(a, b, u) { return a + (b - a) * u; }
  function f1(x) { return Math.round(x * 10) / 10; }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }

  // ---- heart drawing -------------------------------------------------
  var BLUE = "var(--c-nitrogen)", RED = "var(--c-oxygen)";
  function chamber(x, y, w, h, s, col, sw) {
    var cx = x + w / 2, cy = y + h / 2;
    return '<g transform="translate(' + f1(cx) + " " + f1(cy) + ") scale(" + f1(s * 1000) / 1000 + ") translate(" + f1(-cx) + " " + f1(-cy) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="24" fill="' + col + '" fill-opacity="0.22"/><rect class="hb-wall" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="24" style="stroke-width:' + sw + '"/></g>';
  }
  function avValve(cx, cy, o) {
    var a = [cx - 24, cy], b = [cx + 24, cy];
    var tl = [lerp(cx, cx - 16, o), lerp(cy - 6, cy + 17, o)], tr = [lerp(cx, cx + 16, o), lerp(cy - 6, cy + 17, o)];
    return '<path class="hb-vv" fill="none" d="M' + a[0] + " " + a[1] + " L" + f1(tl[0]) + " " + f1(tl[1]) + " M" + b[0] + " " + b[1] + " L" + f1(tr[0]) + " " + f1(tr[1]) + '"/>';
  }
  function slValve(cx, cy, o) {
    var tl = [cx - 10, lerp(cy + 8, cy - 15, o)], tr = [cx + 10, lerp(cy + 8, cy - 15, o)];
    var mid = lerp(cx, cx - 10, o);
    return '<path class="hb-vv" fill="none" d="M' + (cx - 10) + " " + cy + " L" + f1(lerp(cx, cx - 10, o)) + " " + f1(lerp(cy + 8, cy - 15, o)) + " M" + (cx + 10) + " " + cy + " L" + f1(lerp(cx, cx + 10, o)) + " " + f1(lerp(cy + 8, cy - 15, o)) + '"/>';
  }
  function arrow(x1, y1, x2, y2, col, vis, off) {
    if (vis < 0.03) return "";
    var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy), ux = dx / len, uy = dy / len;
    var hx = x2 - ux * 9, hy = y2 - uy * 9;
    return '<g style="opacity:' + f1(vis) + '"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + f1(hx) + '" y2="' + f1(hy) + '" stroke="' + col + '" stroke-width="5" stroke-linecap="butt" stroke-dasharray="9 6" stroke-dashoffset="' + f1(-off) + '"/>' +
      '<path d="M' + f1(x2) + " " + f1(y2) + " L" + f1(hx - uy * 7) + " " + f1(hy + ux * 7) + " L" + f1(hx + uy * 7) + " " + f1(hy - ux * 7) + ' Z" fill="' + col + '"/></g>';
  }

  IB.registerWidget("heart-beat", {
    title: L("Beating heart and pressure graph (AHL)", "拍動する心臓と圧力グラフ（AHL）", "跳動的心臟與壓力圖（AHL）"),
    mount: function (el, ctx) {
      if (!document.getElementById(ID)) { var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st); }
      var t = ctx.t, noMotion = reduced();
      var tt = noMotion ? 0.25 : 0.0, speed = 0.25, playing = !noMotion, vis = true, raf = 0, last = 0, io = null, dead = false, clock = 0;
      var oAV = avOpenAt(tt) ? 1 : 0, oSL = slOpenAt(tt) ? 1 : 0;
      var uid = "hb" + Math.random().toString(36).slice(2, 7);

      el.innerHTML = "";
      var wl = document.createElement("div"); wl.className = "wl"; el.appendChild(wl);
      var stage = document.createElement("div"); stage.className = "wl-stage"; wl.appendChild(stage);
      var panel = document.createElement("div"); panel.className = "wl-panel"; wl.appendChild(panel);
      var heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      heart.setAttribute("viewBox", "38 6 324 288"); heart.setAttribute("role", "img"); heart.setAttribute("aria-label", t(T.aria)); heart.style.maxWidth = "560px"; heart.setAttribute("class", "hb-heart");
      stage.appendChild(heart);
      var chip = document.createElement("div"); chip.className = "hb-chip"; chip.setAttribute("aria-live", "polite"); panel.appendChild(chip);
      var grBox = document.createElement("div"); grBox.className = "hb-gr"; panel.appendChild(grBox);
      var gsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); gsvg.setAttribute("viewBox", "0 0 340 140"); gsvg.style.maxWidth = "420px"; gsvg.style.margin = "0 auto"; gsvg.setAttribute("tabindex", "0"); grBox.appendChild(gsvg);
      gsvg.setAttribute("role", "img"); gsvg.setAttribute("aria-label", t(T.gTitle));
      var row = document.createElement("div"); row.className = "hb-row"; panel.appendChild(row);
      function btn(label, fn, aria) { var b = document.createElement("button"); b.type = "button"; b.className = "hb-b"; b.innerHTML = label; if (aria) { b.setAttribute("aria-label", aria); b.title = aria; } b.addEventListener("click", fn); return b; }
      var bPlay = btn("", function () { playing = !playing; sync(); if (playing) kick(); });
      var bPrev = btn("◀", function () { stepTo(-1); }, t(T.prev)), bNext = btn("▶", function () { stepTo(1); }, t(T.next));
      row.appendChild(bPlay); row.appendChild(bPrev); row.appendChild(bNext);
      var spBtns = [0.25, 0.5, 1].map(function (v, i) {
        var b = btn(["¼×", "½×", "1×"][i], function () { speed = v; sync(); }, t(T.speed) + " " + ["¼×", "½×", "1×"][i]); b.setAttribute("aria-pressed", "false"); row.appendChild(b); return b;
      });
      var msg = document.createElement("div"); msg.className = "hb-msg"; msg.setAttribute("aria-live", "polite"); panel.appendChild(msg);
      var ex = document.createElement("div"); ex.className = "wl-exam"; ex.innerHTML = "<strong>" + t(T.exam) + ":</strong> " + t(T.ex); panel.appendChild(ex);
      var det = document.createElement("details"); det.className = "hb-det";
      det.innerHTML = "<summary>" + t(T.more) + "</summary><p class=\"hb-lg\"><strong>①</strong> " + t(T.ev[0]) + " · <strong>②</strong> " + t(T.ev[1]) + " · <strong>③</strong> " + t(T.ev[2]) + " · <strong>④</strong> " + t(T.ev[3]) + "</p><p class=\"hb-lg\">" + t(T.legBlood) + "</p><p class=\"hb-lg\"><span class=\"badge badge--ahl\">AHL</span> " + t(T.ref) + "</p>";
      panel.appendChild(det);

      function sync() {
        bPlay.innerHTML = playing ? "⏸" : "▶";
        bPlay.setAttribute("aria-label", playing ? t(T.pause) : t(T.play));
        spBtns.forEach(function (b, i) { b.setAttribute("aria-pressed", [0.25, 0.5, 1][i] === speed ? "true" : "false"); });
        }
      function stepTo(dir) {
        playing = false;
        var cur = tt, idx;
        if (dir > 0) { idx = STEPS.findIndex(function (s) { return s > cur + 0.004; }); if (idx < 0) idx = 0; }
        else { idx = -1; STEPS.forEach(function (s, i) { if (s < cur - 0.004) idx = i; }); if (idx < 0) idx = STEPS.length - 1; }
        tt = STEPS[idx] + 0.003; sync(); draw(); kick();
      }

      // graph geometry
      var GL = 44, GR = 330, GT = 10, GB = 104;
      function GX(v) { return GL + (v / 0.8) * (GR - GL); }
      function GY(v) { return GB - (v / 130) * (GB - GT); }
      var curves = {};
      ["la", "lv", "ao"].forEach(function (k) { var d = ""; for (var x = 0; x <= 0.8001; x += 0.005) d += (d ? " L" : "M") + f1(GX(x)) + " " + f1(GY(P(k, x))); curves[k] = d; });
      var staticG = (function () {
        var s = "";
        var b = [[0, EV.avClose, "var(--warn-soft)", "1"], [EV.avClose, EV.slClose, "var(--theme-b-soft)", "2"], [EV.slClose, 0.8, "var(--accent-soft)", "3"]];
        b.forEach(function (z) { s += '<rect x="' + f1(GX(z[0])) + '" y="' + GT + '" width="' + f1(GX(z[1]) - GX(z[0])) + '" height="' + (GB - GT) + '" fill="' + z[2] + '"/><text x="' + f1((GX(z[0]) + GX(z[1])) / 2) + '" y="' + (GT + 12) + '" text-anchor="middle" style="font-weight:800">' + z[3] + '</text>'; });
        [0, 40, 80, 120].forEach(function (v) { s += '<line class="hb-gl" x1="' + GL + '" x2="' + GR + '" y1="' + f1(GY(v)) + '" y2="' + f1(GY(v)) + '"/><text x="' + (GL - 5) + '" y="' + f1(GY(v) + 4) + '" text-anchor="end">' + v + '</text>'; });
        [0, 0.2, 0.4, 0.6, 0.8].forEach(function (v) { s += '<text x="' + f1(GX(v)) + '" y="' + (GB + 14) + '" text-anchor="middle">' + v + '</text>'; });
        s += '<path class="hb-ax" d="M' + GL + " " + GT + " L" + GL + " " + GB + " L" + GR + " " + GB + '"/>';
        s += '<text x="' + f1((GL + GR) / 2) + '" y="' + (GB + 27) + '" text-anchor="middle">' + t(T.gT) + '</text>';
        s += '<text transform="translate(10 ' + f1((GT + GB) / 2) + ') rotate(-90)" text-anchor="middle">' + t(T.gP) + '</text>';
        s += '<path class="hb-la" d="' + curves.la + '"/><path class="hb-lv" d="' + curves.lv + '"/><path class="hb-ao" d="' + curves.ao + '"/>';
        s += '<text x="' + f1(GX(0.62)) + '" y="' + f1(GY(90) - 6) + '" style="fill:var(--accent-ink);font-weight:700">' + t(T.gAo) + '</text>';
        s += '<text x="' + f1(GX(0.155)) + '" y="' + f1(GY(52)) + '" text-anchor="end" style="fill:var(--theme-b);font-weight:700">' + t(T.gVen) + '</text>';
        s += '<text x="' + f1(GX(0.42)) + '" y="' + f1(GY(11) - 9) + '" style="fill:var(--theme-a);font-weight:700">' + t(T.gAtr) + '</text>';
        var evs = [[EV.avClose, "la"], [EV.slOpen, "ao"], [EV.slClose, "ao"], [EV.avOpen, "la"]];
        evs.forEach(function (e, i) { s += '<circle class="hb-ev" cx="' + f1(GX(e[0])) + '" cy="' + f1(GY(P(e[1], e[0]))) + '" r="8.5"/><text x="' + f1(GX(e[0])) + '" y="' + f1(GY(P(e[1], e[0])) + 4.3) + '" text-anchor="middle" style="font-weight:800">' + (i + 1) + '</text>'; });
        return s;
      })();

      function draw() {
        if (dead) return;
        var ph = phaseOf(tt);
        var atrC = tt < EV.avClose ? Math.sin(Math.PI * clamp(tt / EV.avClose, 0, 1)) : 0;
        var sA = 1 - 0.14 * atrC, sV = 0.8 + 0.2 * (P("vol", tt) - 0.72) / 0.28;
        var contract = clamp((1 - P("vol", tt)) / 0.28 * 1.0, 0, 1);
        var avT = avOpenAt(tt) ? 1 : 0, slT = slOpenAt(tt) ? 1 : 0;
        var off = clock * 38;
        var s = "";
        // vessels
        function pipe(x, y1, y2, w, col) { return '<rect class="hb-pipe" x="' + (x - w / 2) + '" y="' + y1 + '" width="' + w + '" height="' + (y2 - y1) + '" fill="' + col + '" fill-opacity="0.2"/>'; }
        s += pipe(88, 44, 80, 20, BLUE) + pipe(300, 44, 80, 20, RED) + pipe(182, 28, 166, 20, BLUE) + pipe(218, 28, 166, 20, RED);
        // chambers
        s += chamber(58, 76, 108, 76, sA, BLUE, 3) + chamber(234, 76, 108, 76, sA, RED, 3);
        s += chamber(58, 162, 138, 118, sV, BLUE, 4 + contract * 2) + chamber(204, 162, 138, 118, sV, RED, 7 + contract * 3);
        s += '<line x1="200" y1="160" x2="200" y2="280" stroke="var(--theme-b)" stroke-width="5"/>';
        // valves
        s += avValve(112, 157, oAV) + avValve(288, 157, oAV) + slValve(182, 166, oSL) + slValve(218, 166, oSL);
        // flow arrows
        var vin = tt < EV.avClose ? 0.35 : 1;
        s += arrow(88, 48, 88, 92, BLUE, vin, off) + arrow(300, 48, 300, 92, RED, vin, off);
        s += arrow(112, 104, 112, 214, BLUE, oAV, off) + arrow(288, 104, 288, 214, RED, oAV, off);
        s += arrow(182, 196, 182, 32, BLUE, oSL, off) + arrow(218, 196, 218, 32, RED, oSL, off);
        // SA node flash
        var fl = tt < 0.06 ? 1 - tt / 0.06 : 0;
        s += '<circle cx="148" cy="86" r="' + f1(5 + 9 * fl) + '" fill="var(--c-sulfur)" fill-opacity="' + f1(0.25 + 0.5 * fl) + '" stroke="var(--c-sulfur)"/><circle cx="148" cy="86" r="4.5" fill="var(--c-sulfur)" stroke="var(--ink)" stroke-width="1"/>';
        s += '<text x="148" y="106" text-anchor="middle" style="font-size:11px;fill:var(--ink-2)">' + t(T.sa) + '</text>';
        // labels
        function nm(x, y, lab, en) { return t(lab) === lab.en ? '<text x="' + x + '" y="' + y + '" text-anchor="middle" style="font-weight:700">' + lab.en + '</text>' : '<text x="' + x + '" y="' + (y - 6) + '" text-anchor="middle" style="font-weight:700">' + t(lab) + '</text><text x="' + x + '" y="' + (y + 8) + '" text-anchor="middle" style="font-size:11px">(' + en + ')</text>'; }
        s += nm(112, 128, T.ra, T.raE) + nm(288, 128, T.la, T.laE) + nm(127, 248, T.rv, T.rvE) + nm(273, 248, T.lv, T.lvE);
        var halo = "paint-order:stroke;stroke:var(--surface);stroke-width:4px;stroke-linejoin:round;";
        var avl = t(T.avv) + ": " + t(avT ? T.open : T.closed), sll = t(T.slv) + ": " + (slT ? t(T.open) : t(T.closed));
        s += '<text x="112" y="197" text-anchor="middle" style="font-size:12px;' + halo + '">' + avl + '</text><text x="288" y="197" text-anchor="middle" style="font-size:12px;' + halo + '">' + avl + '</text>';
        s += '<text x="200" y="215" text-anchor="middle" style="font-size:12px;' + halo + '">' + sll + '</text>';
        s += '<text x="182" y="22" text-anchor="end" style="font-weight:700;font-size:12px">' + t(T.pa) + '</text><text x="218" y="22" text-anchor="start" style="font-weight:700;font-size:12px">' + t(T.aorta) + '</text>';
        s += '<text x="88" y="38" text-anchor="middle" style="font-size:12px">' + t(T.vc) + '</text><text x="300" y="38" text-anchor="middle" style="font-size:12px">' + t(T.pv) + '</text>';
        heart.innerHTML = s;
        // graph
        var g = staticG;
        var cx = GX(tt);
        g += '<line class="hb-cur" x1="' + f1(cx) + '" x2="' + f1(cx) + '" y1="' + GT + '" y2="' + GB + '"/>';
        [["la", "var(--theme-a)"], ["lv", "var(--theme-b)"], ["ao", "var(--accent)"]].forEach(function (c) { g += '<circle cx="' + f1(cx) + '" cy="' + f1(GY(P(c[0], tt))) + '" r="4.5" fill="' + c[1] + '" stroke="var(--surface)" stroke-width="1.5"/>'; });
        gsvg.innerHTML = g;
        var bg = ["var(--warn-soft)", "var(--theme-b-soft)", "var(--accent-soft)"][ph];
        chip.style.background = bg;
        chip.innerHTML = "<span>" + (ph + 1) + " · " + t(T.ph[ph]) + '</span><span class="badge badge--ahl">AHL</span>';
        if (msg.dataset.ph !== String(ph)) { msg.innerHTML = t(T.msg[ph]); msg.dataset.ph = String(ph); }
      }
      // valve openness eases toward target (display only)
      function ease(dt) {
        var aT = avOpenAt(tt) ? 1 : 0, sT = slOpenAt(tt) ? 1 : 0, k = Math.min(1, dt * 14);
        oAV += (aT - oAV) * k; oSL += (sT - oSL) * k;
        if (Math.abs(aT - oAV) < 0.02) oAV = aT; if (Math.abs(sT - oSL) < 0.02) oSL = sT;
      }
      function kick() { if (!raf && vis && !dead) { last = 0; raf = requestAnimationFrame(frame); } }
      function frame(ts) {
        raf = 0; if (dead || !vis) return;
        var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts;
        if (playing) { tt += dt * speed * 0.8 / 0.8; if (tt >= 0.8) tt -= 0.8; clock += dt; }
        var aT = avOpenAt(tt) ? 1 : 0, sT = slOpenAt(tt) ? 1 : 0;
        var settle = oAV !== aT || oSL !== sT;
        ease(dt); draw();
        if (playing || settle || oAV !== aT || oSL !== sT) raf = requestAnimationFrame(frame);
      }
      function scrub(e) {
        var r = gsvg.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 340;
        playing = false; tt = clamp((x - GL) / (GR - GL) * 0.8, 0, 0.799); oAV = avOpenAt(tt) ? 1 : 0; oSL = slOpenAt(tt) ? 1 : 0; sync(); draw();
      }
      gsvg.addEventListener("keydown", function (e) { var d = e.key === "ArrowRight" ? 0.02 : (e.key === "ArrowLeft" ? -0.02 : 0); if (!d) return; e.preventDefault(); playing = false; tt = clamp(tt + d, 0, 0.799); oAV = avOpenAt(tt) ? 1 : 0; oSL = slOpenAt(tt) ? 1 : 0; sync(); draw(); });
      var dragging = false;
      gsvg.addEventListener("pointerdown", function (e) { dragging = true; try { gsvg.setPointerCapture(e.pointerId); } catch (x) {} scrub(e); });
      gsvg.addEventListener("pointermove", function (e) { if (dragging) scrub(e); });
      gsvg.addEventListener("pointerup", function () { dragging = false; });
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) kick(); }, { threshold: 0.05 });
        io.observe(el);
      }
      sync(); draw(); kick();
      return function () { dead = true; if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
    }
  });
})();
