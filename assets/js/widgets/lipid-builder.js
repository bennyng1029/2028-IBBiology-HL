/* Widget: lipid-builder — B1.1 lipids (B1.1.8 hydrophobic, B1.1.9 triglycerides and phospholipids by condensation,
   B1.1.10 saturated / unsaturated fatty acids and melting point, B1.1.12 bilayer; links to B2.1.1). SL core, no AHL.
   Tabs: 0 triglyceride, 1 fatty acids (temperature slider), 2 phospholipid bilayer self-assembly.
   ctx.options: { tab: 0|1|2 }.  Schematic, not to scale. */
(function () {
  "use strict";
  var L = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko }; };
  var ID = "w-lipid-builder-css";
  var KIT = [
    ":where(.wl){display:grid;gap:.75rem;--stage-max:min(42vh,320px)}",
    "@media(min-width:900px){:where(.wl){grid-template-columns:3fr 2fr;align-items:start;--stage-max:min(58vh,440px)}}",
    ":where(.wl-stage){min-width:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius)}",
    ":where(.wl-stage) svg{display:block;width:100%;height:auto;max-height:var(--stage-max);margin:0 auto}",
    ":where(.wl-panel){min-width:0;display:flex;flex-direction:column;gap:.55rem;font-size:.92rem}",
    ":where(.wl-tabs){display:flex;gap:.3rem;overflow-x:auto;margin:0 0 .6rem;border-bottom:2px solid var(--line-strong)}",
    ":where(.wl-tabs) button{flex:0 0 auto;font:inherit;font-weight:700;min-height:40px;padding:.3rem .8rem;border:1px solid var(--line-strong);border-bottom:0;background:var(--surface-2);color:var(--ink);cursor:pointer}",
    ":where(.wl-tabs) button[aria-selected=true]{background:var(--ink);color:var(--bg)}",
    ":where(.wl-exam){border-left:4px solid var(--accent);background:var(--accent-soft);padding:.45rem .65rem;font-size:.88rem;line-height:1.45}",
    ":where(.wl-legend){display:flex;flex-wrap:wrap;gap:.2rem .9rem;font-size:.82rem;padding:.35rem .6rem;color:var(--ink-2)}"
  ].join("\n");
  var CSS = KIT + "\n" + [
    ".w-lipid-builder{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink)}",
    ".w-lipid-builder svg text{fill:var(--ink);font-family:var(--font-body,system-ui,sans-serif);font-size:12px}",
    ".w-lipid-builder .lb-btns{display:flex;flex-wrap:wrap;gap:.3rem}",
    ".w-lipid-builder .lb-b{font:inherit;font-size:.88rem;font-weight:700;min-height:40px;padding:.3rem .75rem;border-radius:var(--radius);border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);cursor:pointer}",
    ".w-lipid-builder .lb-b:hover{background:var(--surface-2)}",
    ".w-lipid-builder .lb-b[disabled]{opacity:.45;cursor:default}",
    ".w-lipid-builder button:focus-visible,.w-lipid-builder input:focus-visible{outline:3px solid var(--accent);outline-offset:2px}",
    ".w-lipid-builder .lb-msg{background:var(--surface-2);border-radius:var(--radius);padding:.45rem .65rem;line-height:1.4;min-height:4.6em;font-size:.9rem}",
    ".w-lipid-builder .lb-msg b{color:var(--accent-ink)}",
    ".w-lipid-builder .lb-cap{font-size:.76rem;color:var(--muted);margin:0}",
    ".w-lipid-builder .wl-exam{font-size:.82rem;line-height:1.4}",
    ".w-lipid-builder details{font-size:.86rem;margin:-.25rem 0 0;border:0!important;background:none!important}",
    ".w-lipid-builder summary{cursor:pointer;font-weight:700;color:var(--accent-ink);min-height:32px;display:flex;align-items:center}",
    ".w-lipid-builder details p{margin:.2rem .1rem}",
    ".w-lipid-builder input[type=range]{width:100%;accent-color:var(--accent);min-height:40px}",
    ".w-lipid-builder .lb-rl{display:flex;justify-content:space-between;font-size:.8rem;color:var(--muted)}",
    ".w-lipid-builder .lb-c{stroke:var(--ink-2);stroke-width:2;fill:none;stroke-linejoin:round;stroke-linecap:round}",
    ".w-lipid-builder .lb-dbl{stroke:var(--accent);stroke-width:2.4;fill:none;stroke-linecap:round}",
    ".w-lipid-builder .lb-ester{stroke:var(--accent);stroke-width:3.5;stroke-linecap:round}",
    ".w-lipid-builder .lb-bb{stroke:var(--ink);stroke-width:3;stroke-linecap:round}",
    ".w-lipid-builder .lb-wt{fill:var(--hbond)!important;font-weight:800;font-size:14px!important}",
    ".w-lipid-builder .lb-b1{font-weight:700;font-size:13px!important}",
    ".w-lipid-builder .lb-hd{fill:var(--accent-soft);stroke:var(--accent);stroke-width:2}",
    ".w-lipid-builder .lb-tl{stroke:var(--theme-b);stroke-width:2.6;stroke-linecap:round;fill:none}",
    ".w-lipid-builder .lb-water{fill:var(--c-nitrogen);opacity:.1}",
    ".w-lipid-builder .lb-core{fill:var(--warn-soft);opacity:.7}",
    ".w-lipid-builder .lb-sw{display:inline-block;width:.9rem;height:.9rem;border:2px solid;vertical-align:-.15rem;margin-right:.3rem;border-radius:50%}",
    "@media(prefers-reduced-motion:reduce){.w-lipid-builder *{transition:none!important;animation:none!important}}"
  ].join("\n");

  var T = {
    tab0: L("Triglyceride", "トリグリセリド", "甘油三酯"),
    tab1: L("Fatty acids", "脂肪酸", "脂肪酸"),
    tab2: L("Phospholipids", "リン脂質", "磷脂"),
    add: L("Add fatty acid", "脂肪酸を付ける", "加入脂肪酸"),
    playAll: L("Play all ▶", "すべて再生 ▶", "全部播放 ▶"),
    reset: L("Reset", "リセット", "重設"),
    gly: L("glycerol", "グリセロール (glycerol)", "甘油 (glycerol)"),
    fa: L("fatty acid", "脂肪酸 (fatty acid)", "脂肪酸 (fatty acid)"),
    es: L("ester bond", "エステル結合", "酯鍵"),
    m0: L("<b>Glycerol</b> has three –OH groups. Each <b>fatty acid</b> has a –COOH group and a long hydrocarbon chain. Press Add fatty acid.", "<b>グリセロール (glycerol)</b>には–OH基が3つあります。<b>脂肪酸 (fatty acid)</b>は–COOH基と長い炭化水素鎖を持ちます。「脂肪酸を付ける」を押しましょう。", "<b>甘油 (glycerol)</b>有三個–OH基。每個<b>脂肪酸 (fatty acid)</b>有一個–COOH基和長長的烴鏈。按「加入脂肪酸」。"),
    m0n: L("<b>Condensation</b>: –OH from the fatty acid and –H from the glycerol leave as <b>water</b>, and an <b>ester bond</b> forms. Fatty acids joined: %n of 3.", "<b>縮合 (condensation)</b>: 脂肪酸の–OHとグリセロールの–Hが<b>水</b>として取れ、<b>エステル結合</b>ができます。結合した脂肪酸: %n / 3。", "<b>縮合 (condensation)</b>：脂肪酸的–OH和甘油的–H脫去成為<b>水</b>，形成<b>酯鍵</b>。已連接的脂肪酸：%n / 3。"),
    m03: L("<b>Triglyceride</b>: one glycerol + three fatty acids, three ester bonds, three water molecules released. Triglycerides store energy and give thermal insulation in adipose tissue.", "<b>トリグリセリド (triglyceride)</b>: グリセロール1分子＋脂肪酸3分子、エステル結合3つ、水3分子が放出されます。脂肪組織でエネルギーを貯蔵し、断熱にも働きます。", "<b>甘油三酯 (triglyceride)</b>：1個甘油＋3個脂肪酸，3個酯鍵，釋出3個水分子。在脂肪組織中儲存能量並提供隔熱。"),
    ex0: L("Triglyceride = glycerol + 3 fatty acids, made by 3 condensation reactions (3 H₂O released).", "トリグリセリド (triglyceride) ＝ グリセロール＋脂肪酸3つ。縮合 (condensation) が3回起こり、水が3分子できる。", "甘油三酯 (triglyceride) ＝ 甘油＋3個脂肪酸，經3次縮合 (condensation)，釋出3個水。"),
    ref0: L("Syllabus B1.1.8–9", "シラバス B1.1.8–9", "課程大綱 B1.1.8–9"),
    sat: L("Saturated", "飽和 (saturated)", "飽和 (saturated)"),
    mono: L("Monounsaturated", "一価不飽和 (mono-unsaturated)", "單元不飽和 (monounsaturated)"),
    poly: L("Polyunsaturated", "多価不飽和 (poly-unsaturated)", "多元不飽和 (polyunsaturated)"),
    h0: L("no C=C", "C=Cなし", "無C=C"),
    h1: L("one C=C", "C=C 1つ", "1個C=C"),
    h2: L("2+ C=C", "C=C 2つ以上", "2個或以上C=C"),
    packed: L("packed: solid", "密: 固体", "緊密：固態"),
    loose: L("loose: liquid", "ゆるい: 液体", "鬆散：液態"),
    temp: L("Temperature", "温度", "溫度"),
    cool: L("cooler", "低い", "較低"),
    warm: L("warmer", "高い", "較高"),
    m1: L("Saturated chains are straight, so they pack closely: <b>higher melting point</b>. Each cis C=C bond puts a kink in the chain, so unsaturated chains pack loosely: <b>lower melting point</b>. Slide the temperature.", "飽和脂肪酸の鎖はまっすぐで密に並ぶので、<b>融点が高い</b>です。シス型のC=C結合は鎖を折り曲げるので、不飽和脂肪酸は密に並べず、<b>融点が低い</b>です。温度を動かしてみましょう。", "飽和脂肪酸的鏈是直的，排列緊密，所以<b>熔點較高</b>。每個順式C=C鍵令鏈出現扭折，不飽和脂肪酸排列鬆散，所以<b>熔點較低</b>。拉動溫度滑桿。"),
    md1: L("Storage lipids: plants mostly store oils, with more unsaturated fatty acids (liquid at ordinary temperatures). Endotherms (animals that keep a warm body temperature) mostly store fats, with more saturated fatty acids. Illustrative melting points only; real values vary.", "貯蔵脂質: 植物は不飽和脂肪酸の多い油 (oil) を主に貯蔵し、通常の温度では液体です。恒温動物 (endotherm) は飽和脂肪酸の多い脂肪 (fat) を主に貯蔵します。融点は説明用で、実際の値は異なります。", "儲存脂質：植物主要儲存含較多不飽和脂肪酸的油 (oil)，在一般溫度下為液態。恆溫動物 (endotherm) 主要儲存含較多飽和脂肪酸的脂肪 (fat)。熔點只作示意，實際數值不同。"),
    ex1: L("More C=C bonds: more kinks, looser packing, lower melting point. Plant oils are more unsaturated; animal fats more saturated.", "C=Cが多いほど折れ曲がりが多く、ゆるく並び、融点が低い。植物の油は不飽和が多く、動物の脂肪は飽和が多い。", "C=C越多，扭折越多，排列越鬆散，熔點越低。植物油較不飽和，動物脂肪較飽和。"),
    ref1: L("Syllabus B1.1.10 (links to B2.1.11, AHL)", "シラバス B1.1.10（B2.1.11 (AHL) と関連）", "課程大綱 B1.1.10（與B2.1.11 (AHL) 有關）"),
    assemble: L("Self-assemble ▶", "自己集合 ▶", "自行組合 ▶"),
    scatter: L("Scatter", "ばらまく", "散開"),
    head: L("hydrophilic head", "親水性の頭部 (hydrophilic head)", "親水頭部 (hydrophilic head)"),
    tails: L("hydrophobic tails", "疎水性の尾部 (hydrophobic tails)", "疏水尾部 (hydrophobic tails)"),
    water: L("water", "水", "水"),
    core: L("hydrophobic core", "疎水性の内部", "疏水內部"),
    m2: L("Each <b>phospholipid</b> is <b>amphipathic</b>: a hydrophilic phosphate head and two hydrophobic fatty acid tails. Press Self-assemble.", "<b>リン脂質 (phospholipid)</b>は<b>両親媒性 (amphipathic)</b>で、親水性のリン酸の頭部と、2本の疎水性の脂肪酸の尾部を持ちます。「自己集合」を押しましょう。", "<b>磷脂 (phospholipid)</b>是<b>雙親性 (amphipathic)</b>的：有親水的磷酸頭部和兩條疏水的脂肪酸尾部。按「自行組合」。"),
    m2b: L("In water the heads face the water and the tails face each other, away from water. A <b>phospholipid bilayer</b> forms: the basis of cell membranes (B2.1).", "水中では頭部が水に向き、尾部は水から離れて向かい合います。<b>リン脂質二重層 (phospholipid bilayer)</b>ができ、これが細胞膜の基本です (B2.1)。", "在水中，頭部朝向水，尾部互相面對、遠離水。形成<b>磷脂雙層 (phospholipid bilayer)</b>，是細胞膜的基礎 (B2.1)。"),
    md2: L("A phospholipid is made by condensation reactions: one glycerol links two fatty acids and one phosphate group. A triglyceride has three fatty acids instead.", "リン脂質も縮合で作られます。グリセロール1分子に脂肪酸2分子とリン酸基1つがつながります。トリグリセリドは脂肪酸が3つです。", "磷脂也經縮合形成：1個甘油連接兩個脂肪酸和一個磷酸基。甘油三酯則連接三個脂肪酸。"),
    ex2: L("Phospholipid: hydrophilic head + 2 hydrophobic tails (amphipathic). In water they form a bilayer.", "リン脂質 (phospholipid): 親水性の頭部＋疎水性の尾部2本（両親媒性 (amphipathic)）。水中で二重層をつくる。", "磷脂 (phospholipid)：親水頭部＋2條疏水尾部（雙親性 (amphipathic)）。在水中形成雙層。"),
    ref2: L("Syllabus B1.1.9, B1.1.12 (→ B2.1.1)", "シラバス B1.1.9、B1.1.12（→ B2.1.1）", "課程大綱 B1.1.9、B1.1.12（→ B2.1.1）"),
    more: L("More detail", "くわしく", "更多資料"),
    exam: L("What to remember for the exam", "試験でおぼえること", "考試要記住"),
    schem: L("schematic", "模式図", "示意圖")
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function ss(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function seg(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function lerp(a, b, u) { return a + (b - a) * u; }
  function f1(x) { return Math.round(x * 10) / 10; }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }
  function strip(o) { return o.replace(/ \(.*/, ""); }

  // ---- tab 0 ---------------------------------------------------------
  function zig(x, y, n, dx) { var pts = []; for (var i = 0; i < n; i++) pts.push((x + i * dx) + " " + f1(y + (i % 2 ? 5 : -5))); return "M" + pts.join(" L"); }
  function triSvg(q, t) {
    var rows = [52, 112, 172], s = "";
    s += '<line class="lb-bb" x1="40" y1="30" x2="40" y2="194"/>';
    rows.forEach(function (y, i) {
      var p = ss(q[i]), slide = ss(seg(q[i], 0, 0.5)), bond = seg(q[i], 0.45, 0.7), wat = seg(q[i], 0.5, 1);
      var cx = 118 + 78 * (1 - slide);
      s += '<line class="lb-bb" x1="40" y1="' + y + '" x2="62" y2="' + y + '"/>';
      s += '<text class="lb-b1" x="' + (bond > 0.5 ? 71 : 68) + '" y="' + (y + 5) + '" text-anchor="middle" style="' + (bond > 0.5 ? "fill:var(--accent)" : "") + '">' + (bond > 0.5 ? "O" : "OH") + '</text>';
      // fatty acid
      s += '<path class="lb-c" d="' + zig(cx, y, 10, 14) + '"/>';
      s += '<text class="lb-b1" x="' + f1(cx) + '" y="' + (y - 14) + '" text-anchor="middle" style="fill:var(--c-oxygen)">O</text>';
      s += '<line class="lb-c" x1="' + (cx - 2) + '" y1="' + (y - 7) + '" x2="' + (cx - 2) + '" y2="' + (y - 18) + '" style="display:none"/>';
      if (bond > 0) s += '<line class="lb-ester" x1="82" y1="' + y + '" x2="' + f1(cx - 4) + '" y2="' + y + '" style="opacity:' + f1(bond) + '"/>';
      var fo = 1 - seg(q[i], 0.45, 0.6);
      s += '<text class="lb-b1" x="' + f1(cx - 24) + '" y="' + (y + 5) + '" text-anchor="middle" style="fill:var(--c-oxygen);opacity:' + f1(fo) + '">HO</text>';
      if (wat > 0) {
        var wx = lerp(100, 318, ss(seg(wat, 0.2, 1))), wy = lerp(y - 30, y, ss(seg(wat, 0.2, 1)));
        s += '<text class="lb-wt" x="' + f1(wx) + '" y="' + f1(wy) + '" text-anchor="middle" style="opacity:' + f1(seg(wat, 0, 0.25)) + '">H₂O</text>';
      }
    });
    s += '<text x="40" y="214" text-anchor="middle">' + strip(t(T.gly)) + '</text>';
    s += '<text x="215" y="214" text-anchor="middle">' + strip(t(T.fa)) + '</text>';
    var done = q.filter(function (v) { return v >= 0.99; }).length;
    if (done > 0) s += '<text class="lb-b1" x="100" y="' + 20 + '" text-anchor="middle" style="fill:var(--accent)">' + strip(t(T.es)) + '</text>';
    return s;
  }

  // ---- tab 1 ---------------------------------------------------------
  var COLS = [
    { cx: 70, bends: [], dy: 15, m: 0.72 },
    { cx: 195, bends: [4], dy: 21, m: 0.46 },
    { cx: 320, bends: [3, 6], dy: 25, m: 0.26 }
  ];
  function chainPts(col) {
    var N = 11, pts = [], bx = 0, by = 0, ang = 0;
    var angs = col.bends.length === 0 ? [0] : (col.bends.length === 1 ? [-0.5, 0.5] : [-0.5, 0.5, -0.5]);
    for (var i = 0; i < N; i++) {
      var seg_ = 0; col.bends.forEach(function (b) { if (i > b) seg_++; });
      var a = angs[seg_];
      if (i > 0) { bx += Math.cos(a) * 8.6; by += Math.sin(a) * 8.6; }
      pts.push([bx - 43, by + (i % 2 ? 3.6 : -3.6)]);
    }
    return pts;
  }
  var CH = COLS.map(chainPts);
  function fatSvg(T01, tm, t) {
    var s = "", names = [T.sat, T.mono, T.poly], hints = [T.h0, T.h1, T.h2];
    COLS.forEach(function (col, ci) {
      var d = ss((T01 - col.m) / 0.07), pts = CH[ci], n = 5;
      var span = (n - 1) * col.dy, y0 = 130 - span / 2;
      s += '<text class="lb-b1" x="' + col.cx + '" y="18" text-anchor="middle">' + strip(t(names[ci])) + '</text>';
      s += '<text x="' + col.cx + '" y="34" text-anchor="middle" style="fill:var(--muted)">' + t(hints[ci]) + '</text>';
      for (var k = 0; k < n; k++) {
        var ph = k * 1.7 + ci * 0.9;
        var ox = d * (14 * Math.sin(tm * 1.3 + ph) + (k - 2) * 2), oy = d * (11 * Math.sin(tm * 1.1 + ph * 1.4) + (k - 2) * 8), rot = d * 22 * Math.sin(tm * 0.9 + ph * 2);
        var yy = y0 + k * col.dy;
        var dstr = "M" + pts.map(function (q) { return f1(q[0]) + " " + f1(q[1]); }).join(" L");
        s += '<g transform="translate(' + f1(col.cx + ox) + " " + f1(yy + oy) + ") rotate(" + f1(rot) + ')"><path class="lb-c" d="' + dstr + '"/>';
        col.bends.forEach(function (b) {
          var a = pts[b], c = pts[b + 1];
          s += '<line class="lb-dbl" x1="' + f1(a[0] + 2) + '" y1="' + f1(a[1] - 4.5) + '" x2="' + f1(c[0] + 2) + '" y2="' + f1(c[1] - 4.5) + '"/>';
        });
        s += '<circle cx="' + f1(pts[0][0]) + '" cy="' + f1(pts[0][1]) + '" r="3.4" style="fill:var(--c-oxygen)"/></g>';
      }
      s += '<text x="' + col.cx + '" y="214" text-anchor="middle" style="font-weight:700;fill:' + (d > 0.5 ? "var(--hbond)" : "var(--ink)") + '">' + (d > 0.5 ? t(T.loose) : t(T.packed)) + '</text>';
    });
    return s;
  }

  // ---- tab 2 ---------------------------------------------------------
  var NP = 24, MOL = [];
  (function () {
    var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var i = 0; i < NP; i++) {
      var top = i < 12, k = top ? i : i - 12;
      MOL.push({ tx: 46 + k * 26, ty: top ? 100 : 200, ta: top ? 0 : 180, sx: 20 + rnd() * 320, sy: 30 + rnd() * 190, sa: -180 + rnd() * 360, d: rnd() * 0.45, ph: rnd() * 6.28 });
    }
  })();
  var DOTS = [];
  (function () { var s2 = 3; function r() { s2 = (s2 * 16807) % 2147483647; return s2 / 2147483647; } for (var i = 0; i < 34; i++) DOTS.push([r() * 360, r() * 250, r() * 6.28]); })();
  function molSvg() { return '<circle class="lb-hd" cx="0" cy="0" r="6.5"/><path class="lb-tl" d="M-3 6 L-3 40 M3 6 L3 40"/>'; }
  function bilSvg(p, tm, t) {
    var s = '<rect class="lb-water" x="0" y="0" width="360" height="250"/>';
    DOTS.forEach(function (d) { s += '<circle cx="' + f1((d[0] + 6 * Math.sin(tm + d[2])) % 360) + '" cy="' + f1(d[1] + 6 * Math.cos(tm * 0.8 + d[2])) + '" r="2" style="fill:var(--c-nitrogen);opacity:.35"/>'; });
    var core = ss(seg(p, 0.7, 1));
    s += '<rect class="lb-core" x="30" y="108" width="300" height="84" style="opacity:' + f1(0.7 * core) + '"/>';
    MOL.forEach(function (m) {
      var u = ss(seg(p, m.d * 0.7, m.d * 0.7 + 0.55));
      var wob = (1 - u) * 5;
      var x = lerp(m.sx, m.tx, u) + wob * Math.sin(tm * 1.5 + m.ph), y = lerp(m.sy, m.ty, u) + wob * Math.cos(tm * 1.3 + m.ph);
      var da = m.ta - m.sa; da = ((da % 360) + 540) % 360 - 180; var a = m.sa + da * u + (1 - u) * 12 * Math.sin(tm + m.ph);
      s += '<g transform="translate(' + f1(x) + " " + f1(y) + ") rotate(" + f1(a) + ')">' + molSvg() + '</g>';
    });
    var lab = ss(seg(p, 0.85, 1));
    if (lab > 0.01) {
      s += '<g style="opacity:' + f1(lab) + '">';
      s += '<text x="180" y="30" text-anchor="middle" style="fill:var(--hbond);font-weight:700">' + t(T.water) + '</text>';
      s += '<text x="180" y="240" text-anchor="middle" style="fill:var(--hbond);font-weight:700">' + t(T.water) + '</text>';
      s += '<text x="180" y="70" text-anchor="middle" style="font-weight:700">' + strip(t(T.head)) + ' ↓</text>';
      s += '<text x="180" y="154" text-anchor="middle" style="font-weight:700;paint-order:stroke;stroke:var(--warn-soft);stroke-width:5px">' + strip(t(T.tails)) + '</text>';
      s += '</g>';
    }
    return s;
  }

  IB.registerWidget("lipid-builder", {
    title: L("Lipid builder", "脂質ビルダー", "脂質建構器"),
    mount: function (el, ctx) {
      if (!document.getElementById(ID)) { var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st); }
      var t = ctx.t, opt = ctx.options || {};
      var tab = clamp(parseInt(opt.tab, 10) || 0, 0, 2);
      var noMotion = reduced(), raf = 0, last = 0, vis = true, io = null, dead = false, tm = 0;
      var q = [0, 0, 0], qt = [0, 0, 0], auto = false;       // tab 0
      var temp = 0.15;                                      // tab 1
      var pb = 1, pbT = 1, wasAuto = true;                  // tab 2
      var E = {};

      el.innerHTML = "";
      var root = document.createElement("div"); el.appendChild(root);
      var tabs = document.createElement("div"); tabs.className = "wl-tabs"; tabs.setAttribute("role", "tablist"); root.appendChild(tabs);
      var wl = document.createElement("div"); wl.className = "wl"; root.appendChild(wl);
      var stage = document.createElement("div"); stage.className = "wl-stage"; wl.appendChild(stage);
      var panel = document.createElement("div"); panel.className = "wl-panel"; wl.appendChild(panel);
      var tabBtns = [T.tab0, T.tab1, T.tab2].map(function (lab, i) {
        var b = document.createElement("button"); b.type = "button"; b.setAttribute("role", "tab"); b.textContent = t(lab);
        b.addEventListener("click", function () { setTab(i); }); tabs.appendChild(b); return b;
      });
      function btn(label, fn) { var b = document.createElement("button"); b.type = "button"; b.className = "lb-b"; b.innerHTML = label; b.addEventListener("click", fn); return b; }

      function setTab(i) {
        tab = i; E = {};
        tabBtns.forEach(function (b, k) { b.setAttribute("aria-selected", k === i ? "true" : "false"); });
        stage.innerHTML = ""; panel.innerHTML = "";
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", i === 0 ? "0 0 360 224" : (i === 1 ? "0 0 390 224" : "0 0 360 250"));
        svg.style.maxWidth = "520px"; svg.setAttribute("role", "img"); svg.setAttribute("aria-label", t([T.tab0, T.tab1, T.tab2][i]));
        stage.appendChild(svg); E.svg = svg;
        var bt = document.createElement("div"); bt.className = "lb-btns"; panel.appendChild(bt);
        var msg = document.createElement("div"); msg.className = "lb-msg"; msg.setAttribute("aria-live", "polite"); panel.appendChild(msg); E.msg = msg;
        if (i === 0) {
          q = [0, 0, 0]; qt = [0, 0, 0]; auto = false;
          E.add = btn(t(T.add), function () { var k = qt.indexOf(0); if (k >= 0) { qt[k] = 1; run(); } });
          E.all = btn(t(T.playAll), function () { auto = true; var k = qt.indexOf(0); if (k >= 0) qt[k] = 1; run(); });
          bt.appendChild(E.add); bt.appendChild(E.all); bt.appendChild(btn(t(T.reset), function () { q = [0, 0, 0]; qt = [0, 0, 0]; auto = false; draw(); }));
        } else if (i === 1) {
          var lab = document.createElement("label"); lab.setAttribute("for", "lb-temp"); lab.innerHTML = "<strong>" + t(T.temp) + "</strong>";
          var rg = document.createElement("input"); rg.type = "range"; rg.id = "lb-temp"; rg.min = 0; rg.max = 100; rg.value = Math.round(temp * 100);
          rg.addEventListener("input", function () { temp = rg.value / 100; draw(); run(); });
          var rl = document.createElement("div"); rl.className = "lb-rl"; rl.innerHTML = "<span>" + t(T.cool) + "</span><span>" + t(T.warm) + "</span>";
          var wrap = document.createElement("div"); wrap.appendChild(lab); wrap.appendChild(rg); wrap.appendChild(rl); bt.style.display = "block"; bt.appendChild(wrap);
          msg.innerHTML = t(T.m1);
        } else {
          E.as = btn(t(T.assemble), function () { pbT = 1; if (pb >= 1) pb = 0; run(); });
          E.sc = btn(t(T.scatter), function () { pbT = 0; pb = noMotion ? 0 : pb; if (!noMotion) pbT = 0; run(); draw(); });
          bt.appendChild(E.as); bt.appendChild(E.sc);
          pb = noMotion ? 1 : 0; pbT = 1;
        }
        if (i !== 1) { var det = document.createElement("details"); }
        if (i === 1 || i === 2) { var d = document.createElement("details"); d.innerHTML = "<summary>" + t(T.more) + "</summary><p>" + t(i === 1 ? T.md1 : T.md2) + "</p>"; panel.appendChild(d); }
        var ex = document.createElement("div"); ex.className = "wl-exam"; ex.innerHTML = "<strong>" + t(T.exam) + ":</strong> " + t([T.ex0, T.ex1, T.ex2][i]); panel.appendChild(ex);
        var cap = document.createElement("p"); cap.className = "lb-cap"; cap.textContent = t([T.ref0, T.ref1, T.ref2][i]) + " · " + t(T.schem); panel.appendChild(cap);
        draw(); run();
      }

      function draw() {
        if (dead || !E.svg) return;
        if (tab === 0) {
          E.svg.innerHTML = triSvg(q, t);
          var n = q.filter(function (v) { return v >= 0.99; }).length, busy = q.some(function (v) { return v > 0.01 && v < 0.99; });
          E.msg.innerHTML = n === 3 ? t(T.m03) : (n === 0 && !busy ? t(T.m0) : t(T.m0n).replace("%n", n));
          E.add.disabled = qt.indexOf(0) < 0; E.all.disabled = qt.indexOf(0) < 0;
        } else if (tab === 1) { E.svg.innerHTML = fatSvg(temp, tm, t); }
        else {
          E.svg.innerHTML = bilSvg(pb, tm, t);
          E.msg.innerHTML = pb > 0.85 ? t(T.m2b) : t(T.m2);
        }
      }
      function active() {
        if (tab === 0) return q.some(function (v, i) { return Math.abs(v - qt[i]) > 0.001; });
        if (tab === 1) return !noMotion && COLS.some(function (c) { return temp > c.m; });
        return !noMotion || Math.abs(pb - pbT) > 0.001;
      }
      function run() {
        if (noMotion) {
          if (tab === 0) { q = qt.slice(); } else if (tab === 2) { pb = pbT; }
          draw(); return;
        }
        if (!raf && vis) { last = 0; raf = requestAnimationFrame(frame); }
      }
      function frame(ts) {
        raf = 0; if (dead || !vis) return;
        var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts; tm += dt;
        if (tab === 0) {
          for (var i = 0; i < 3; i++) { var d = qt[i] - q[i], st = 0.7 * dt; q[i] = Math.abs(d) <= st ? qt[i] : q[i] + Math.sign(d) * st; }
          if (auto) { var k = qt.indexOf(0); if (k >= 0 && q.every(function (v, j) { return Math.abs(v - qt[j]) < 0.001; })) qt[k] = 1; if (k < 0) auto = false; }
        } else if (tab === 2) {
          var d2 = pbT - pb, s2 = 0.22 * dt; pb = Math.abs(d2) <= s2 ? pbT : pb + Math.sign(d2) * s2;
        }
        draw();
        if (active() || tab === 2) raf = requestAnimationFrame(frame);
      }
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) run(); }, { threshold: 0.05 });
        io.observe(el);
      }
      setTab(tab);
      return function () { dead = true; if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
    }
  });
})();
