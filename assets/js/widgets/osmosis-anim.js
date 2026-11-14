/* Widget: osmosis-anim — B2.1.5 movement of water by osmosis and the role of aquaporins (SL).
   Particle model: water molecules move randomly; solute particles cannot cross the partially permeable membrane;
   water crosses only through aquaporins (or very slowly without them). The membrane is free to slide, so the side with
   more solute swells until the solute concentrations are equal. Net movement of water is toward higher solute concentration.
   Each side starts with the same number of particles (water + solute) so the volumes start equal.
   Uses "solute concentration" language only (no water potential / tonicity terms). Illustrative model. */
(function () {
  "use strict";
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var ID = "w-osmosis-anim-css";
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
    ".w-osmosis-anim{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink)}",
    ".w-osmosis-anim svg text{fill:var(--ink);font-family:var(--font-body,system-ui,sans-serif);font-size:12px}",
    ".w-osmosis-anim .os-row{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}",
    ".w-osmosis-anim .os-b{font:inherit;font-size:.84rem;font-weight:700;min-height:40px;min-width:40px;padding:.2rem .6rem;border-radius:var(--radius);border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);cursor:pointer}",
    ".w-osmosis-anim .os-b:hover{background:var(--surface-2)}",
    ".w-osmosis-anim .os-b[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}",
    ".w-osmosis-anim button:focus-visible,.w-osmosis-anim input:focus-visible{outline:3px solid var(--accent);outline-offset:2px}",
    ".w-osmosis-anim .os-sl{display:grid;grid-template-columns:1fr;gap:0}",
    ".w-osmosis-anim .os-sl>div{display:grid;grid-template-columns:8.5rem 1fr;align-items:center;gap:.5rem}",
    ".w-osmosis-anim .os-sl label{font-size:.84rem;font-weight:700;display:flex;justify-content:space-between}",
    ".w-osmosis-anim input[type=range]{width:100%;accent-color:var(--accent);min-height:34px;margin:0}",
    ".w-osmosis-anim .os-ck{display:flex;gap:.5rem;align-items:center;font-size:.86rem;font-weight:700;min-height:36px}",
    ".w-osmosis-anim .os-ck input{width:1.2rem;height:1.2rem;accent-color:var(--accent)}",
    ".w-osmosis-anim .os-rd{display:grid;grid-template-columns:1fr 1fr 1fr;gap:.3rem;text-align:center;font-size:.8rem}",
    ".w-osmosis-anim .os-rd div{border:1.5px solid var(--line-strong);border-radius:var(--radius);padding:.2rem .3rem;line-height:1.2;background:var(--surface)}",
    ".w-osmosis-anim .os-rd b{display:block;font-size:1rem;font-variant-numeric:tabular-nums}",
    ".w-osmosis-anim .os-msg{background:var(--surface-2);border-radius:var(--radius);padding:.4rem .65rem;line-height:1.4;min-height:4.8em;font-size:.88rem}",
    ".w-osmosis-anim .os-msg b{color:var(--accent-ink)}",
    ".w-osmosis-anim .wl-exam{font-size:.82rem;line-height:1.4}",
    ".w-osmosis-anim .os-cap{font-size:.76rem;color:var(--muted);margin:0}",
    ".w-osmosis-anim details{border:0!important;background:none!important;font-size:.86rem;margin:-.2rem 0 0}",
    ".w-osmosis-anim summary{cursor:pointer;font-weight:700;color:var(--accent-ink);min-height:32px;display:flex;align-items:center}",
    ".w-osmosis-anim details p{margin:.2rem .1rem}",
    ".w-osmosis-anim .os-sw{display:inline-block;border-radius:50%;border:1.5px solid var(--ink-2);vertical-align:-.1rem;margin-right:.25rem}",
    "@media(prefers-reduced-motion:reduce){.w-osmosis-anim *{transition:none!important;animation:none!important}}"
  ].join("\n");

  var T = {
    play: L("Play", "再生", "播放"), pause: L("Pause", "停止", "暫停"),
    step: L("Step", "1ステップ", "逐步"), restart: L("Restart", "最初から", "重新開始"),
    left: L("Left solute", "左の溶質", "左側溶質"), right: L("Right solute", "右の溶質", "右側溶質"),
    aq: L("Aquaporins present", "アクアポリンあり", "有水通道蛋白"),
    pEq: L("Equal", "同じ", "相同"), pR: L("Right higher", "右が高い", "右側較高"), pL: L("Left higher", "左が高い", "左側較高"),
    cs: L("Solute conc.", "溶質濃度", "溶質濃度"),
    cl: L("Left concentration", "左の濃度", "左側濃度"), cr: L("Right concentration", "右の濃度", "右側濃度"),
    net: L("Net water movement", "水の正味の移動", "水的淨移動"),
    none: L("none", "なし", "無"),
    water: L("water molecule", "水分子 (water)", "水分子 (water)"),
    solute: L("solute particle", "溶質粒子 (solute)", "溶質粒子 (solute)"),
    aqL: L("aquaporin", "アクアポリン (aquaporin)", "水通道蛋白 (aquaporin)"),
    mem: L("partially permeable membrane", "半透膜 (partially permeable membrane)", "半透膜 (partially permeable membrane)"),
    mStart: L("Water molecules move randomly in all directions. Solute particles cannot cross the membrane. Press Play.", "水分子は不規則にあらゆる方向へ動きます。溶質粒子は膜を通れません。「再生」を押しましょう。", "水分子向各個方向隨機運動。溶質粒子不能穿過膜。按「播放」。"),
    mMove: L("More water molecules reach the aquaporins from the side with <b>lower solute concentration</b>, so more cross that way. <b>Net movement of water is towards the higher solute concentration</b>.", "<b>溶質濃度が低い</b>側からアクアポリンに届く水分子の方が多いので、その向きに多く通ります。<b>水の正味の移動は溶質濃度の高い方へ</b>向かいます。", "從<b>溶質濃度較低</b>的一側到達水通道蛋白的水分子較多，所以較多水分子往這方向穿過。<b>水的淨移動方向是朝向溶質濃度較高的一側</b>。"),
    mEq: L("The solute concentrations are equal. Water still crosses randomly in both directions, at the same rate, so there is <b>no net movement</b>.", "溶質濃度が等しくなりました。水は両方向にランダムに通り続けますが、速さは同じなので<b>正味の移動はありません</b>。", "溶質濃度相等。水分子仍隨機地雙向穿過，速率相同，所以<b>沒有淨移動</b>。"),
    mNoAq: L("Without aquaporins water crosses the lipid bilayer only very slowly, so osmosis is much slower.", "アクアポリンがないと、水は脂質二重層をとてもゆっくりしか通れないので、浸透はずっと遅くなります。", "沒有水通道蛋白時，水只能非常緩慢地穿過脂質雙層，所以滲透慢得多。"),
    ex: L("Osmosis: net movement of water across a partially permeable membrane towards the higher solute concentration. Solutes cannot cross; water uses aquaporins.", "浸透 (osmosis): 水が半透膜を通って溶質濃度の高い方へ正味で移動すること。溶質は通れず、水はアクアポリン (aquaporin) を通る。", "滲透 (osmosis)：水穿過半透膜，淨移動至溶質濃度較高的一側。溶質不能穿過；水經水通道蛋白 (aquaporin)。"),
    exam: L("What to remember for the exam", "試験でおぼえること", "考試要記住"),
    more: L("More detail", "くわしく", "更多資料"),
    md: L("Why? Water molecules move randomly. On the side with more solute particles there are fewer water molecules for the same volume, so fewer hit the aquaporins each second. More water crosses from the other side, until the concentrations match. The membrane slides here so you can see the volumes change. Illustrative model, not to scale.", "なぜか: 水分子は不規則に動きます。溶質が多い側は同じ体積に含まれる水分子が少ないので、1秒間にアクアポリンに当たる水分子も少なくなります。反対側からより多くの水が通り、濃度がそろうまで続きます。ここでは膜が動くので体積の変化が見えます。説明用のモデルで、縮尺は不同です。", "為什麼？水分子隨機運動。溶質較多的一側，同樣體積內水分子較少，每秒撞到水通道蛋白的水分子也較少。因此從另一側穿過的水較多，直到濃度相等。這裏的膜可以滑動，讓你看到體積變化。示意模型，並非按比例。"),
    ref: L("Syllabus B2.1.5 (links to B2.1.1–2)", "シラバス B2.1.5（B2.1.1–2 と関連）", "課程大綱 B2.1.5（與B2.1.1–2 有關）"),
    aria: L("Particle model of osmosis across a membrane with aquaporins", "アクアポリンのある膜での浸透の粒子モデル", "經水通道蛋白的滲透粒子模型")
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function f1(x) { return Math.round(x * 10) / 10; }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }
  var NS = "http://www.w3.org/2000/svg";
  function mk(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }

  var X0 = 22, X1 = 338, Y0 = 30, Y1 = 190, MT = 14, NT = 40, PORES = [50, 88, 126, 164], PH = 9;

  IB.registerWidget("osmosis-anim", {
    title: L("Osmosis and aquaporins", "浸透とアクアポリン", "滲透與水通道蛋白"),
    mount: function (el, ctx) {
      if (!document.getElementById(ID)) { var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st); }
      var t = ctx.t, opt = ctx.options || {};
      var noMotion = reduced(), playing = !noMotion, vis = true, raf = 0, last = 0, io = null, dead = false;
      var sL = opt.left != null ? clamp(+opt.left, 0, 20) : 4, sR = opt.right != null ? clamp(+opt.right, 0, 20) : 16, aq = true;
      var parts = [], faceL = 0, wL = 0, wR = 0, nS_L = 0, nS_R = 0, events = [], simT = 0, started = false;
      var uid = "os" + Math.random().toString(36).slice(2, 6);

      el.innerHTML = "";
      var wl = document.createElement("div"); wl.className = "wl"; el.appendChild(wl);
      var stage = document.createElement("div"); stage.className = "wl-stage"; wl.appendChild(stage);
      var panel = document.createElement("div"); panel.className = "wl-panel"; wl.appendChild(panel);
      var svg = mk("svg", { viewBox: "0 0 360 226", role: "img", "aria-label": t(T.aria) }); svg.style.maxWidth = "600px"; stage.appendChild(svg);
      var gL = mk("rect", { y: Y0, height: Y1 - Y0, fill: "var(--c-nitrogen)", "fill-opacity": "0.10" }, svg);
      var gR = mk("rect", { y: Y0, height: Y1 - Y0, fill: "var(--c-nitrogen)", "fill-opacity": "0.10" }, svg);
      var mem = mk("g", {}, svg);
      var pg = mk("g", {}, svg);
      mk("rect", { x: X0, y: Y0, width: X1 - X0, height: Y1 - Y0, fill: "none", stroke: "var(--ink-2)", "stroke-width": "2" }, svg);
      var lab = mk("g", {}, svg);
      var tL = mk("text", { x: X0, y: 214, "text-anchor": "start", style: "font-weight:700" }, svg);
      var tR = mk("text", { x: X1, y: 214, "text-anchor": "end", style: "font-weight:700" }, svg);
      var tN = mk("text", { x: 180, y: 217, "text-anchor": "middle", style: "font-weight:800;font-size:18px;fill:var(--accent-ink)" }, svg);
      var lg = document.createElement("div"); lg.className = "wl-legend";
      lg.innerHTML = '<span><i class="os-sw" style="width:.5rem;height:.5rem;background:var(--hbond)"></i>' + t(T.water) + '</span><span><i class="os-sw" style="width:.85rem;height:.85rem;background:var(--c-sulfur)"></i>' + t(T.solute) + '</span>';
      stage.appendChild(lg);

      function btn(label, fn, pressed) { var b = document.createElement("button"); b.type = "button"; b.className = "os-b"; b.innerHTML = label; if (pressed !== undefined) b.setAttribute("aria-pressed", String(pressed)); b.addEventListener("click", fn); return b; }
      var r1 = document.createElement("div"); r1.className = "os-row"; panel.appendChild(r1);
      var bPlay = btn("", function () { playing = !playing; sync(); kick(); });
      var bStep = btn(t(T.step), function () { playing = false; sync(); for (var i = 0; i < 40; i++) sim(1 / 40); draw(); });
      var bRe = btn("↻ " + t(T.restart), function () { build(); draw(); });
      r1.appendChild(bPlay); r1.appendChild(bStep); r1.appendChild(bRe);
      var sw = document.createElement("div"); sw.className = "os-sl"; panel.appendChild(sw);
      function slider(id, labTxt, get, set) {
        var wrap = document.createElement("div"); var l = document.createElement("label"); l.setAttribute("for", id);
        var sp = document.createElement("span"); sp.textContent = labTxt; var vv = document.createElement("span"); vv.textContent = get(); l.appendChild(sp); l.appendChild(vv);
        var inp = document.createElement("input"); inp.type = "range"; inp.id = id; inp.min = 0; inp.max = 20; inp.step = 1; inp.value = get();
        inp.addEventListener("input", function () { set(+inp.value); vv.textContent = inp.value; build(); draw(); if (!playing && !noMotion) { playing = true; sync(); kick(); } });
        wrap.appendChild(l); wrap.appendChild(inp); sw.appendChild(wrap); return { inp: inp, vv: vv };
      }
      var sLs = slider(uid + "L", t(T.left), function () { return sL; }, function (v) { sL = v; });
      var sRs = slider(uid + "R", t(T.right), function () { return sR; }, function (v) { sR = v; });
      var rp = document.createElement("div"); rp.className = "os-row"; panel.appendChild(rp);
      var ck = document.createElement("label"); ck.className = "os-ck"; ck.innerHTML = '<input type="checkbox" checked> ' + t(T.aq);
      ck.querySelector("input").addEventListener("change", function (e) { aq = e.target.checked; drawMembrane(); parts.forEach(function (p) { svg.appendChild(p.el); }); draw(); });
      rp.appendChild(ck);
      var msg = document.createElement("div"); msg.className = "os-msg"; msg.setAttribute("aria-live", "polite"); panel.appendChild(msg);
      var ex = document.createElement("div"); ex.className = "wl-exam"; ex.innerHTML = "<strong>" + t(T.exam) + ":</strong> " + t(T.ex); panel.appendChild(ex);
      var det = document.createElement("details"); det.innerHTML = "<summary>" + t(T.more) + "</summary><p>" + t(T.md) + '</p><p class="os-cap">' + t(T.ref) + "</p>"; panel.appendChild(det);

      // membrane and pore drawing (rebuilt when aq toggled)
      var memEls = {};
      function drawMembrane() {
        mem.innerHTML = ""; pg.innerHTML = ""; lab.innerHTML = "";
        var h = Y1 - Y0, faceL = X0 + (X1 - X0 - MT) / 2;
        memEls.rect = mk("rect", { x: faceL, y: Y0, width: MT, height: h, fill: "var(--warn-soft)", stroke: "var(--warn-line)", "stroke-width": "1.5" }, mem);
        for (var y = Y0 + 4; y < Y1; y += 8) {
          var inPore = aq && PORES.some(function (p) { return Math.abs(y - p) < PH + 4; });
          if (inPore) continue;
          mk("circle", { cx: faceL + 3.2, cy: y, r: 3, fill: "var(--accent-soft)", stroke: "var(--accent)", "stroke-width": "1" }, mem);
          mk("circle", { cx: faceL + MT - 3.2, cy: y, r: 3, fill: "var(--accent-soft)", stroke: "var(--accent)", "stroke-width": "1" }, mem);
        }
        if (aq) PORES.forEach(function (p) {
          mk("rect", { x: faceL - 1, y: p - PH - 5, width: MT + 2, height: 5, rx: 2, fill: "var(--theme-b)" }, pg);
          mk("rect", { x: faceL - 1, y: p + PH, width: MT + 2, height: 5, rx: 2, fill: "var(--theme-b)" }, pg);
          mk("rect", { x: faceL, y: p - PH, width: MT, height: 2 * PH, fill: "var(--surface)", "fill-opacity": "0.75" }, pg);
        });
        mk("text", { x: faceL + MT / 2, y: 12, "text-anchor": "middle", style: "font-weight:700" }, lab).textContent = t(T.mem).replace(/ \(.*/, "");
        if (aq) mk("text", { x: faceL + MT / 2, y: 25, "text-anchor": "middle", style: "fill:var(--theme-b);font-weight:700" }, lab).textContent = t(T.aqL).replace(/ \(.*/, "");
      }
      var waterEls = [], soluEls = [];
      function build() {
        var i;
        parts.forEach(function (p) { if (p.el.parentNode) p.el.parentNode.removeChild(p.el); });
        parts = []; events = []; simT = 0; started = false; acc = [0, 0];
        wL = NT - sL; wR = NT - sR; nS_L = sL; nS_R = sR;
        faceL = X0 + (X1 - X0 - MT) / 2;
        var seed = 11; function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
        function add(side, solute) {
          var wLim = side === 0 ? [X0 + 8, faceL - 8] : [faceL + MT + 8, X1 - 8];
          var r = solute ? 6 : 3.1, a = rnd() * 6.283, sp = solute ? 26 : 78;
          var c = mk("circle", { r: r, fill: solute ? "var(--c-sulfur)" : "var(--hbond)", stroke: solute ? "var(--ink-2)" : "none", "stroke-width": "1" }, svg);
          parts.push({ s: side, sol: solute, r: r, x: wLim[0] + rnd() * (wLim[1] - wLim[0]), y: Y0 + 8 + rnd() * (Y1 - Y0 - 16), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, sp: sp, el: c });
        }
        for (i = 0; i < wL; i++) add(0, false); for (i = 0; i < sL; i++) add(0, true);
        for (i = 0; i < wR; i++) add(1, false); for (i = 0; i < sR; i++) add(1, true);
        drawMembrane();
        // keep membrane group below particles: move particles after
        parts.forEach(function (p) { svg.appendChild(p.el); });
        msg.innerHTML = t(T.mStart);
      }
      function vols() { return [wL + nS_L, wR + nS_R]; }
      var acc = [0, 0];
      function nearestPore(y) { var best = PORES[0]; PORES.forEach(function (q) { if (Math.abs(q - y) < Math.abs(best - y)) best = q; }); return best; }
      function crossFrom(side, fL, fR) {
        var best = null, bd = 1e9;
        parts.forEach(function (p) {
          if (p.sol || p.s !== side || p.tr) return;
          var fx = side === 0 ? fL : fR, py = aq ? nearestPore(p.y) : p.y, d = Math.abs(p.x - fx) + Math.abs(p.y - py) * 1.3;
          if (d < bd) { bd = d; best = p; }
        });
        if (!best) return;
        var py2 = aq ? nearestPore(best.y) : best.y;
        best.tr = { t: 0, x0: best.x, y0: best.y, x1: side === 0 ? fR + best.r + 6 : fL - best.r - 6, y1: py2, to: 1 - side };
        events.push([simT, side === 0 ? 1 : -1]);
        if (side === 0) { wL--; wR++; } else { wR--; wL++; }
      }
      function sim(dt) {
        started = true; simT += dt;
        var v = vols(), target = X0 + (X1 - X0 - MT) * (v[0] / (v[0] + v[1]));
        faceL += (target - faceL) * Math.min(1, dt * 2.2);
        var fL = faceL, fR = faceL + MT, f = aq ? 1 : 0.05, K = 9;
        acc[0] += K * f * (wL / Math.max(1, v[0])) * dt; acc[1] += K * f * (wR / Math.max(1, v[1])) * dt;
        while (acc[0] >= 1) { acc[0] -= 1; crossFrom(0, fL, fR); }
        while (acc[1] >= 1) { acc[1] -= 1; crossFrom(1, fL, fR); }
        parts.forEach(function (p) {
          if (p.tr) {
            p.tr.t += dt / 0.35; var u = Math.min(1, p.tr.t), e = u * u * (3 - 2 * u);
            p.x = p.tr.x0 + (p.tr.x1 - p.tr.x0) * e; p.y = p.tr.y0 + (p.tr.y1 - p.tr.y0) * e;
            if (u >= 1) { p.s = p.tr.to; p.vx = (p.s === 1 ? 1 : -1) * Math.abs(p.vx); p.tr = null; }
            return;
          }
          var ang = (Math.random() - 0.5) * (p.sol ? 0.5 : 1.1);
          var c = Math.cos(ang), s_ = Math.sin(ang), vx = p.vx * c - p.vy * s_, vy = p.vx * s_ + p.vy * c;
          var m = Math.sqrt(vx * vx + vy * vy) || 1; p.vx = vx / m * p.sp; p.vy = vy / m * p.sp;
          p.x += p.vx * dt * 1.6; p.y += p.vy * dt * 1.6;
          if (p.y < Y0 + p.r) { p.y = Y0 + p.r; p.vy = Math.abs(p.vy); }
          if (p.y > Y1 - p.r) { p.y = Y1 - p.r; p.vy = -Math.abs(p.vy); }
          if (p.s === 0) {
            if (p.x < X0 + p.r) { p.x = X0 + p.r; p.vx = Math.abs(p.vx); }
            if (p.x + p.r >= fL) { p.x = fL - p.r; p.vx = -Math.abs(p.vx); }
          } else {
            if (p.x > X1 - p.r) { p.x = X1 - p.r; p.vx = -Math.abs(p.vx); }
            if (p.x - p.r <= fR) { p.x = fR + p.r; p.vx = Math.abs(p.vx); }
          }
        });
        while (events.length && events[0][0] < simT - 5) events.shift();
      }
      function draw() {
        if (dead) return;
        var fL = faceL, fR = faceL + MT;
        gL.setAttribute("x", X0); gL.setAttribute("width", fL - X0); gR.setAttribute("x", fR); gR.setAttribute("width", X1 - fR);
        // move membrane group
        mem.setAttribute("transform", "translate(" + f1(fL - (X0 + (X1 - X0 - MT) / 2)) + " 0)"); pg.setAttribute("transform", mem.getAttribute("transform")); lab.setAttribute("transform", mem.getAttribute("transform"));
        parts.forEach(function (p) { p.el.setAttribute("cx", f1(p.x)); p.el.setAttribute("cy", f1(p.y)); });
        var v = vols(), cL = nS_L / v[0] * 100, cR = nS_R / v[1] * 100;
        tL.textContent = t(T.cs) + ": " + Math.round(cL); tR.textContent = t(T.cs) + ": " + Math.round(cR);
        var win = Math.min(5, Math.max(simT, 0.5)), net = 0; events.forEach(function (e) { net += e[1]; });
        var rate = net / win;
        var arrow = Math.abs(rate) < 0.35 ? t(T.none) : (rate > 0 ? "→" : "←") + (Math.abs(rate) > 1.5 ? (rate > 0 ? "→" : "←") : "") + (Math.abs(rate) > 3 ? (rate > 0 ? "→" : "←") : "");
        tN.textContent = started ? (arrow === t(T.none) ? "=" : arrow.replace(/→+/, "→").replace(/←+/, "←")) : "";
        svg.setAttribute("aria-label", t(T.aria) + (started ? ", " + t(T.net) + ": " + arrow : ""));
        var diff = Math.abs(cL - cR);
        var mm = !started ? T.mStart : (diff < 3 && simT > 2 ? T.mEq : (!aq ? T.mNoAq : T.mMove));
        if (msg.dataset.k !== (started ? (diff < 3 && simT > 2 ? "e" : (aq ? "m" : "n")) : "s")) { msg.innerHTML = t(mm); msg.dataset.k = started ? (diff < 3 && simT > 2 ? "e" : (aq ? "m" : "n")) : "s"; }
      }
      function sync() { bPlay.innerHTML = playing ? "⏸ " + t(T.pause) : "▶ " + t(T.play); }
      function kick() { if (!raf && vis && playing && !dead) { last = 0; raf = requestAnimationFrame(frame); } }
      function frame(ts) {
        raf = 0; if (dead || !vis || !playing) return;
        var dt = last ? Math.min(0.04, (ts - last) / 1000) : 0; last = ts;
        sim(dt); draw(); raf = requestAnimationFrame(frame);
      }
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) kick(); }, { threshold: 0.05 });
        io.observe(el);
      }
      build(); sync(); draw(); kick();
      return function () { dead = true; if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
    }
  });
})();
