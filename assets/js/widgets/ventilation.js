/* Widget: ventilation — B3.1.5 ventilation of the lungs (diaphragm, intercostal muscles, abdominal muscles, ribs).
   Naming external vs internal intercostal muscles as antagonistic muscles is B3.3.8 (AHL); shown here and flagged.
   Animated side view (front = left, spine = right) synchronised with a lung-volume trace and a lung-pressure trace.
   Pressure is derived from airflow (P = -k dV/dt): air moves from high to low pressure.
   Quiet breathing and forced breathing (forced expiration uses internal intercostals + abdominal muscles). Illustrative, no units. */
(function () {
  "use strict";
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var ID = "w-ventilation-css";
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
    ".w-ventilation{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink)}",
    ".w-ventilation svg text{fill:var(--ink);font-family:var(--font-body,system-ui,sans-serif);font-size:12px}",
    ".w-ventilation .vt-vh{max-height:min(212px,var(--stage-max))}",
    "@media(min-width:900px){.w-ventilation .vt-vh{max-height:var(--stage-max)}}",
    ".w-ventilation .vt-row{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}",
    ".w-ventilation .vt-b{font:inherit;font-size:.84rem;font-weight:700;min-height:40px;min-width:40px;padding:.2rem .5rem;border-radius:var(--radius);border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);cursor:pointer}",
    ".w-ventilation .vt-b:hover{background:var(--surface-2)}",
    ".w-ventilation .vt-b[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}",
    ".w-ventilation button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}",
    ".w-ventilation .vt-ms{display:grid;grid-template-columns:1fr 1fr;gap:.25rem}",
    ".w-ventilation .vt-m{display:flex;align-items:center;gap:.4rem;font-size:.8rem;border:1.5px solid var(--line-strong);border-radius:var(--radius);padding:.15rem .4rem;min-height:1.9rem;line-height:1.1;padding:.1rem .35rem}",
    ".w-ventilation .vt-m i{flex:0 0 .8rem;height:.8rem;border-radius:50%;border:2px solid;display:inline-block}",
    ".w-ventilation .vt-m[data-on=true]{background:var(--surface-2);font-weight:800}",
    ".w-ventilation .vt-m small{margin-left:auto;font-weight:700;white-space:nowrap}",
    ".w-ventilation .vt-msg{background:var(--surface-2);border-radius:var(--radius);padding:.4rem .65rem;line-height:1.4;min-height:4.2em;font-size:.88rem}",
    ".w-ventilation .vt-msg b{color:var(--accent-ink)}",
    ".w-ventilation .vt-gr{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius)}",
    ".w-ventilation .vt-gr svg{width:100%;height:auto;display:block;max-width:440px;margin:0 auto}",
    ".w-ventilation .vt-cap{font-size:.76rem;color:var(--muted);margin:0}",
    ".w-ventilation .wl-exam{font-size:.82rem;line-height:1.4}",
    ".w-ventilation details{border:0!important;background:none!important;font-size:.86rem;margin:-.2rem 0 0}",
    ".w-ventilation summary{cursor:pointer;font-weight:700;color:var(--accent-ink);min-height:32px;display:flex;align-items:center}",
    ".w-ventilation details p{margin:.2rem .1rem}",
    ".w-ventilation .vt-bone{fill:none;stroke:var(--ink-2);stroke-width:3.6;stroke-linecap:round}",
    ".w-ventilation .vt-lung{fill:var(--accent-soft);stroke:var(--accent);stroke-width:2}",
    ".w-ventilation .vt-tr{fill:none;stroke:var(--accent);stroke-width:2.6}",
    "@media(prefers-reduced-motion:reduce){.w-ventilation *{transition:none!important;animation:none!important}}"
  ].join("\n");

  var CLR = { dia: "var(--theme-b)", ext: "var(--accent)", int: "var(--theme-a)", abd: "var(--good)" };
  var T = {
    tQ: L("Quiet breathing", "安静時の呼吸", "平靜呼吸"),
    tF: L("Forced breathing (exercise)", "強い呼吸（運動時）", "用力呼吸（運動時）"),
    forced: L("Forced", "強い呼吸", "用力呼吸"),
    insp: L("Inspiration", "吸気 (inspiration)", "吸氣 (inspiration)"),
    exp: L("Expiration", "呼気 (expiration)", "呼氣 (expiration)"),
    play: L("Play", "再生", "播放"), pause: L("Pause", "停止", "暫停"),
    dia: L("Diaphragm", "横隔膜 (diaphragm)", "橫膈膜 (diaphragm)"),
    ext: L("External intercostals", "外肋間筋 (external intercostals)", "外肋間肌 (external intercostals)"),
    int: L("Internal intercostals", "内肋間筋 (internal intercostals)", "內肋間肌 (internal intercostals)"),
    abd: L("Abdominal muscles", "腹筋 (abdominal muscles)", "腹肌 (abdominal muscles)"),
    contr: L("contracted", "収縮", "收縮"), rel: L("relaxed", "弛緩", "放鬆"),
    ribs: L("Ribs", "肋骨 (ribs)", "肋骨 (ribs)"), stern: L("Sternum", "胸骨 (sternum)", "胸骨 (sternum)"),
    spine: L("Spine", "脊柱 (spine)", "脊柱 (spine)"), lung: L("Lung", "肺 (lung)", "肺 (lung)"),
    trach: L("Trachea", "気管 (trachea)", "氣管 (trachea)"), abdw: L("Abdominal wall", "腹壁", "腹壁"),
    air: L("air", "空気", "空氣"),
    mI: L("<b>Inspiration</b>: diaphragm contracts and flattens; external intercostals raise the ribs up and out. Volume ↑, pressure ↓: air flows in.", "<b>吸気 (inspiration)</b>: 横隔膜が収縮して平らになり、外肋間筋が収縮して肋骨を上外へ引き上げます。体積↑、圧力が大気圧より低くなり、空気が入ります。", "<b>吸氣 (inspiration)</b>：橫膈膜收縮並變平；外肋間肌收縮，把肋骨向上向外提起。體積↑，壓力降至低於大氣壓，空氣流入。"),
    mE: L("<b>Expiration</b>: diaphragm and external intercostals relax; ribs move down and in, diaphragm domes up. Volume ↓, pressure ↑: air flows out.", "<b>呼気 (expiration)</b>: 横隔膜と外肋間筋が弛緩します。肋骨は下内へ動き、横隔膜は上に盛り上がります。体積↓、圧力が大気圧より高くなり、空気が出ます。", "<b>呼氣 (expiration)</b>：橫膈膜和外肋間肌放鬆。肋骨向下向內移，橫膈膜向上拱起。體積↓，壓力升至高於大氣壓，空氣流出。"),
    mFI: L("<b>Forced inspiration</b>: the same muscles contract harder, so the volume rises further and more air flows in.", "<b>強い吸気</b>: 同じ筋肉がより強く収縮し、体積がさらに増えて多くの空気が入ります。", "<b>用力吸氣</b>：同樣的肌肉更用力收縮，體積增加更多，吸入更多空氣。"),
    mFE: L("<b>Forced expiration</b>: internal intercostals pull the ribs down and in; abdominal muscles push the diaphragm up. Pressure rises well above atmospheric.", "<b>強い呼気</b>: 内肋間筋が肋骨を下内へ引き、腹筋が横隔膜を押し上げます。体積が大きく減り、圧力は大気圧を大きく上回ります。", "<b>用力呼氣</b>：內肋間肌把肋骨向下向內拉，腹肌把橫膈膜向上推。體積大幅減少，壓力遠高於大氣壓。"),
    ex: L("In: muscles contract, volume ↑, pressure ↓, air in. Out: muscles relax, volume ↓, pressure ↑, air out.", "吸気: 筋が収縮、体積↑、圧力↓、空気が入る。呼気: 弛緩、体積↓、圧力↑、空気が出る。", "吸氣：肌肉收縮，體積↑，壓力↓，空氣流入。呼氣：肌肉放鬆，體積↓，壓力↑，空氣流出。"),
    exam: L("What to remember for the exam", "試験でおぼえること", "考試要記住"),
    more: L("More detail", "くわしく", "更多資料"),
    md: L("Air always moves from higher to lower pressure. Naming <em>external</em> and <em>internal</em> intercostal muscles as an antagonistic pair is AHL (B3.3.8): when one layer contracts it stretches the other. For SL, \"intercostal muscles\" is enough. Forced expiration is the case where expiration needs muscles; abdominal muscles are named in B3.1.5. Graphs are illustrative (no units).", "空気は常に高圧側から低圧側へ動きます。外肋間筋と内肋間筋を拮抗筋として区別するのはAHL (B3.3.8) の内容です（一方が収縮すると他方が引き伸ばされます）。SLでは「肋間筋 (intercostal muscles)」で十分です。強い呼気では筋肉が呼気に働き、腹筋はB3.1.5に挙げられています。グラフは説明用です（単位なし）。", "空氣總是由高壓流向低壓。把外肋間肌和內肋間肌視為拮抗肌是AHL內容 (B3.3.8)：一層收縮時會拉伸另一層。SL只需知道「肋間肌 (intercostal muscles)」。用力呼氣時呼氣需要肌肉參與；腹肌見B3.1.5。圖表只作示意（沒有單位）。"),
    ref: L("Syllabus B3.1.5 · external / internal intercostals: B3.3.8 (AHL)", "シラバス B3.1.5 · 外/内肋間筋: B3.3.8 (AHL)", "課程大綱 B3.1.5 · 外/內肋間肌：B3.3.8 (AHL)"),
    gV: L("Lung volume", "肺の体積", "肺容量"), gP: L("Lung pressure vs atmospheric", "肺内の圧力（大気圧との比較）", "肺內壓力（與大氣壓比較）"),
    atm: L("atmospheric pressure", "大気圧", "大氣壓"), quiet: L("end of quiet breath out", "安静呼気の終わり", "平靜呼氣末"),
    hi: L("higher", "高", "高"), lo: L("lower", "低", "低"), tm: L("time →", "時間 →", "時間 →"),
    aria: L("Animated side view of the chest during breathing", "呼吸中の胸部の動く側面図", "呼吸時胸部的動態側視圖")
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function lerp(a, b, u) { return a + (b - a) * u; }
  function f1(x) { return Math.round(x * 10) / 10; }
  function ss(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }
  var MODE = { q: { vmin: 0.40, vmax: 0.55, ti: 0.4, T: 4 }, f: { vmin: 0.27, vmax: 0.78, ti: 0.4, T: 3.2 } };
  function volAt(m, u) {
    var M = MODE[m]; u = ((u % 1) + 1) % 1;
    var s = u < M.ti ? ss(u / M.ti) : 1 - ss((u - M.ti) / (1 - M.ti));
    return M.vmin + (M.vmax - M.vmin) * s;
  }
  function flowAt(m, u) { var e = 0.002; return (volAt(m, u + e) - volAt(m, u - e)) / (2 * e) / MODE[m].T; }
  function isInsp(m, u) { return (((u % 1) + 1) % 1) < MODE[m].ti; }

  // ---- anatomy ---------------------------------------------------------
  function anatomy(m, u, tm, t) {
    var V = volAt(m, u), x = (V - 0.40) / 0.15, uu = clamp(x, -0.75, 2.4);
    var insp = isInsp(m, u), forced = m === "f";
    var act = { dia: insp, ext: insp, int: forced && !insp, abd: forced && !insp };
    var ribsQ = [], P = [];
    var qx = 112 - 12 * uu;
    for (var i = 0; i < 5; i++) {
      var py = 70 + i * 30, p = [316, py], q = [qx - i * 2 + (i === 0 ? 4 : 0), py + 30 - 14 * uu];
      P.push(p); ribsQ.push(q);
    }
    function ribPt(i, tt) { var p = P[i], q = ribsQ[i], c = [q[0] + 90, p[1] + 14]; var a = (1 - tt) * (1 - tt), b = 2 * (1 - tt) * tt, d = tt * tt; return [a * p[0] + b * c[0] + d * q[0], a * p[1] + b * c[1] + d * q[1]]; }
    var s = "";
    // lung geometry
    var yE = clamp(236 + 6 * uu, 226, 250), peak = clamp(176 + 36 * uu, 150, 224), yc = 2 * peak - yE;
    var xF = ribsQ[4][0] + 16, xB = 304;
    var lf = ribsQ[2][0] + 14;
    var lungD = "M" + f1(lf) + " 84 Q" + f1((lf + xB) / 2) + " 40 " + xB + " 68 L" + xB + " " + f1(yE - 5) + " Q" + f1((xF + xB) / 2) + " " + f1(yc - 6) + " " + f1(xF + 4) + " " + f1(yE - 5) + " Z";
    // abdominal wall
    var wx = clamp(xF - 6 * uu - (forced && !insp ? -8 : 0), 40, 160);
    // trachea
    s += '<rect x="200" y="6" width="18" height="52" rx="3" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.6"/>';
    s += '<path d="M209 58 L' + f1(lf + 40) + ' 84 M209 58 L' + f1(xB - 40) + ' 74" stroke="var(--ink-2)" stroke-width="3" fill="none"/>';
    s += '<path class="vt-lung" d="' + lungD + '"/>';
    // abdomen outline (below diaphragm)
    var absAct = act.abd;
    s += '<path d="M' + f1(xF) + " " + f1(yE) + " C" + f1(wx - 12) + " " + f1(yE + 18) + " " + f1(wx - 6) + " 270 " + f1(wx + 32) + " 286 L" + xB + " 286" + '" fill="var(--surface-2)" fill-opacity="0.6" stroke="' + CLR.abd + '" stroke-width="' + (absAct ? 8 : 3) + '" stroke-opacity="' + (absAct ? 1 : 0.6) + '" stroke-linecap="round"/>';
    // spine
    s += '<path d="M' + (xB + 18) + ' 50 Q' + (xB + 30) + ' 140 ' + (xB + 16) + ' 286" stroke="var(--ink-2)" stroke-width="9" stroke-linecap="round" fill="none" stroke-dasharray="14 4"/>';
    // diaphragm
    s += '<path d="M' + f1(xF) + " " + f1(yE) + " Q" + f1((xF + xB) / 2) + " " + f1(yc) + " " + xB + " " + f1(yE) + '" fill="none" stroke="' + CLR.dia + '" stroke-width="' + (act.dia ? 9 : 4) + '" stroke-opacity="' + (act.dia ? 1 : 0.65) + '" stroke-linecap="round"/>';
    // intercostal muscles
    for (var k = 0; k < 4; k++) {
      [0.4, 0.68].forEach(function (tt) {
        var a = ribPt(k, tt), b = ribPt(k + 1, tt);
        s += '<line x1="' + f1(a[0]) + '" y1="' + f1(a[1]) + '" x2="' + f1(b[0] - 9) + '" y2="' + f1(b[1]) + '" stroke="' + CLR.ext + '" stroke-width="' + (act.ext ? 3.4 : 1.6) + '" stroke-opacity="' + (act.ext ? 1 : 0.5) + '"/>';
        s += '<line x1="' + f1(a[0]) + '" y1="' + f1(a[1]) + '" x2="' + f1(b[0] + 9) + '" y2="' + f1(b[1]) + '" stroke="' + CLR.int + '" stroke-width="' + (act.int ? 3.4 : 1.6) + '" stroke-opacity="' + (act.int ? 1 : 0.5) + '"/>';
      });
    }
    // ribs
    for (var r = 0; r < 5; r++) {
      var p = P[r], q = ribsQ[r];
      s += '<path class="vt-bone" d="M' + p[0] + " " + p[1] + " Q" + f1(q[0] + 90) + " " + f1(p[1] + 14) + " " + f1(q[0]) + " " + f1(q[1]) + '"/>';
    }
    // sternum
    s += '<path d="M' + f1(ribsQ[0][0] - 2) + " " + f1(ribsQ[0][1] - 8) + " L" + f1(ribsQ[4][0] - 2) + " " + f1(ribsQ[4][1] + 6) + '" stroke="var(--ink)" stroke-width="9" stroke-linecap="round" fill="none"/>';
    // air chevrons in trachea
    var fl = flowAt(m, u), mag = clamp(Math.abs(fl) / (m === "f" ? 0.5 : 0.15), 0, 1), dir = fl > 0 ? 1 : -1;
    if (mag > 0.04) for (var c = 0; c < 3; c++) {
      var ph = ((tm * 0.9 + c / 3) % 1), yy = dir > 0 ? 8 + ph * 46 : 54 - ph * 46;
      s += '<path d="M' + (203) + " " + f1(yy - dir * 4) + " L209 " + f1(yy + dir * 3) + " L215 " + f1(yy - dir * 4) + '" fill="none" stroke="var(--c-nitrogen)" stroke-width="3" stroke-linecap="round" opacity="' + f1(0.25 + 0.75 * mag) + '"/>';
    }
    s += '<text x="236" y="26" style="font-weight:700">' + t(fl > 0.0005 ? T.air : T.air) + (mag > 0.04 ? (dir > 0 ? " ↓" : " ↑") : "") + '</text>';
    // labels
    s += '<text x="' + f1(ribsQ[2][0] - 16) + '" y="' + f1(ribsQ[2][1] - 28) + '" text-anchor="end" style="font-weight:700">' + t(T.stern).replace(/ \(.*/, "") + '</text>';
    s += '<text x="' + (xB + 38) + '" y="120" text-anchor="start" style="font-weight:700">' + t(T.ribs).replace(/ \(.*/, "") + '</text>';
    s += '<text x="' + f1((lf + xB) / 2) + '" y="128" text-anchor="middle" style="font-weight:700;fill:var(--accent-ink)">' + t(T.lung).replace(/ \(.*/, "") + '</text>';
    s += '<text x="' + f1((xF + xB) / 2) + '" y="' + f1(Math.min(270, yE + 20)) + '" text-anchor="middle" style="font-weight:700;fill:' + CLR.dia + '">' + t(T.dia).replace(/ \(.*/, "") + '</text>';
    s += '<text x="' + (xB + 38) + '" y="206" text-anchor="start" style="font-weight:700">' + t(T.spine).replace(/ \(.*/, "") + '</text>';
    s += '<text x="46" y="' + f1(Math.min(292, 284)) + '" text-anchor="start" style="font-weight:700;fill:var(--good);paint-order:stroke;stroke:var(--surface);stroke-width:4px">' + t(T.abd).replace(/ \(.*/, "") + '</text>';
    return { svg: s, act: act, V: V };
  }

  // ---- traces ----------------------------------------------------------
  function traces(m, u, t) {
    var L0 = 30, R0 = 334, W = R0 - L0;
    var s = "", n = 80, dv = "", dp = "";
    var halo = "paint-order:stroke;stroke:var(--surface);stroke-width:4px;stroke-linejoin:round;";
    function VY(v) { return 56 - (v - 0.2) / 0.65 * 46; }
    var PT = 70, PB = 108, PM = (PT + PB) / 2;
    function PY2(p) { return PM - clamp(p, -1.1, 1.1) / 1.1 * (PM - PT - 1); }
    for (var i = 0; i <= n; i++) {
      var uu = i / n; dv += (i ? " L" : "M") + f1(L0 + uu * W) + " " + f1(VY(volAt(m, uu)));
      dp += (i ? " L" : "M") + f1(L0 + uu * W) + " " + f1(PY2(-flowAt(m, uu) * 1.6));
    }
    s += '<path d="M' + L0 + " 6 L" + L0 + " 60 L" + R0 + ' 60" fill="none" stroke="var(--ink-2)" stroke-width="1.3"/>';
    s += '<path d="M' + L0 + " " + PT + " L" + L0 + " " + PB + " L" + R0 + " " + PB + '" fill="none" stroke="var(--ink-2)" stroke-width="1.3"/>';
    s += '<line x1="' + L0 + '" x2="' + R0 + '" y1="' + f1(PM) + '" y2="' + f1(PM) + '" stroke="var(--ink-2)" stroke-dasharray="4 3"/>';
    s += '<line x1="' + L0 + '" x2="' + R0 + '" y1="' + f1(VY(MODE.q.vmin)) + '" y2="' + f1(VY(MODE.q.vmin)) + '" stroke="var(--muted)" stroke-dasharray="2 3"/>';
    s += '<path d="' + dv + '" fill="none" stroke="var(--accent)" stroke-width="2.8"/>';
    s += '<path d="' + dp + '" fill="none" stroke="var(--theme-b)" stroke-width="2.8" stroke-dasharray="6 3"/>';
    s += '<text x="' + (L0 + 6) + '" y="16" style="font-weight:700;' + halo + '">' + t(T.gV) + '</text>';
    s += '<text x="' + (L0 + 6) + '" y="' + (PT + 11) + '" style="font-weight:700;' + halo + '">' + t(T.gP) + '</text>';
    s += '<text x="' + (L0 - 4) + '" y="' + (PT + 9) + '" text-anchor="end" style="font-size:11px">+</text><text x="' + (L0 - 4) + '" y="' + (PB) + '" text-anchor="end" style="font-size:11px">−</text>';
    s += '<text x="' + (R0) + '" y="' + (PB + 13) + '" text-anchor="end" style="fill:var(--muted);font-size:11px">' + t(T.tm) + '</text>';
    var cx = L0 + ((u % 1 + 1) % 1) * W;
    s += '<line x1="' + f1(cx) + '" x2="' + f1(cx) + '" y1="6" y2="' + PB + '" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/>';
    s += '<circle cx="' + f1(cx) + '" cy="' + f1(VY(volAt(m, u))) + '" r="5" fill="var(--accent)" stroke="var(--surface)" stroke-width="1.5"/>';
    s += '<circle cx="' + f1(cx) + '" cy="' + f1(PY2(-flowAt(m, u) * 1.6)) + '" r="5" fill="var(--theme-b)" stroke="var(--surface)" stroke-width="1.5"/>';
    return s;
  }

  IB.registerWidget("ventilation", {
    title: L("Breathing: ventilation of the lungs", "呼吸: 肺の換気", "呼吸：肺的通氣"),
    mount: function (el, ctx) {
      if (!document.getElementById(ID)) { var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st); }
      var t = ctx.t, opt = ctx.options || {};
      var noMotion = reduced(), mode = opt.mode === "f" ? "f" : "q", u = noMotion ? 0.2 : 0.02, playing = !noMotion;
      var raf = 0, last = 0, vis = true, io = null, dead = false, tm = 0;

      el.innerHTML = "";
      var wl = document.createElement("div"); wl.className = "wl"; el.appendChild(wl);
      var stage = document.createElement("div"); stage.className = "wl-stage"; wl.appendChild(stage);
      var panel = document.createElement("div"); panel.className = "wl-panel"; wl.appendChild(panel);
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "36 0 364 296"); svg.setAttribute("class", "vt-vh"); svg.setAttribute("role", "img"); svg.setAttribute("aria-label", t(T.aria)); svg.style.maxWidth = "560px";
      stage.appendChild(svg);

      function btn(label, fn, pressed) { var b = document.createElement("button"); b.type = "button"; b.className = "vt-b"; b.innerHTML = label; if (pressed !== undefined) b.setAttribute("aria-pressed", String(pressed)); b.addEventListener("click", fn); return b; }
      var r1 = document.createElement("div"); r1.className = "vt-row"; panel.appendChild(r1);
      var bPlay = btn("", function () { playing = !playing; sync(); kick(); });
      var bI = btn(t(T.insp).replace(/ \(.*/, ""), function () { playing = false; u = 0.2; sync(); draw(); });
      var bE = btn(t(T.exp).replace(/ \(.*/, ""), function () { playing = false; u = 0.7; sync(); draw(); });
      var bF = btn(t(T.forced), function () { mode = mode === "f" ? "q" : "f"; sync(); draw(); kick(); }, mode === "f");
      bF.title = t(T.tF);
      [bPlay, bI, bE, bF].forEach(function (b) { r1.appendChild(b); });
      var ms = document.createElement("div"); ms.className = "vt-ms"; panel.appendChild(ms);
      var mEls = {};
      ["dia", "ext", "int", "abd"].forEach(function (k) {
        var d = document.createElement("div"); d.className = "vt-m"; d.innerHTML = '<i style="border-color:' + CLR[k] + '"></i><span>' + t(T[k]) + '</span><small></small>'; ms.appendChild(d); mEls[k] = d;
      });
      var gr = document.createElement("div"); gr.className = "vt-gr"; panel.appendChild(gr);
      var gsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); gsvg.setAttribute("viewBox", "0 0 340 124"); gr.appendChild(gsvg);
      gsvg.setAttribute("role", "img"); gsvg.setAttribute("aria-label", t(T.gV) + ", " + t(T.gP));
      var msg = document.createElement("div"); msg.className = "vt-msg"; msg.setAttribute("aria-live", "polite"); panel.appendChild(msg);
      var ex = document.createElement("div"); ex.className = "wl-exam"; ex.innerHTML = "<strong>" + t(T.exam) + ":</strong> " + t(T.ex); panel.appendChild(ex);
      var det = document.createElement("details"); det.innerHTML = "<summary>" + t(T.more) + "</summary><p>" + t(T.md) + '</p><p class="vt-cap">' + t(T.ref) + "</p>"; panel.appendChild(det);

      function sync() {
        bPlay.innerHTML = playing ? "⏸" : "▶"; bPlay.setAttribute("aria-label", t(playing ? T.pause : T.play));
        bF.setAttribute("aria-pressed", String(mode === "f"));
      }
      var lastKey = "";
      function draw() {
        if (dead) return;
        var a = anatomy(mode, u, tm, t);
        svg.innerHTML = a.svg;
        gsvg.innerHTML = traces(mode, u, t);
        ["dia", "ext", "int", "abd"].forEach(function (k) { mEls[k].setAttribute("data-on", String(a.act[k])); mEls[k].querySelector("small").textContent = t(a.act[k] ? T.contr : T.rel); });
        var insp = isInsp(mode, u), key = mode + (insp ? "i" : "e");
        if (key !== lastKey) { msg.innerHTML = t(mode === "q" ? (insp ? T.mI : T.mE) : (insp ? T.mFI : T.mFE)); lastKey = key; }
      }
      function kick() { if (!raf && vis && !dead && playing) { last = 0; raf = requestAnimationFrame(frame); } }
      function frame(ts) {
        raf = 0; if (dead || !vis || !playing) return;
        var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts; tm += dt;
        u = (u + dt / MODE[mode].T) % 1; draw(); raf = requestAnimationFrame(frame);
      }
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) kick(); }, { threshold: 0.05 });
        io.observe(el);
      }
      sync(); draw(); kick();
      return function () { dead = true; if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
    }
  });
})();
