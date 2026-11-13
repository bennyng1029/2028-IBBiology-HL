/* Widget: sarcomere — sliding filament model (IB B3.3.2, B3.3.3, AHL).
   Slider contracts / stretches one sarcomere. Actin lengths (1.0 µm) and myosin length (1.6 µm) never change.
   Z lines move together; A band constant; I band and H zone shorten. Titin drawn as a spring (recoil / limits stretch).
   Illustrative model: units are model units, 100 units = 1 µm. */
(function () {
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var ID = "sarcomere-css";
  var CSS = [
    ".w-sarcomere{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
    ".w-sarcomere .sa-stage{background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius,6px)}",
    ".w-sarcomere svg{display:block;width:100%;height:auto}",
    ".w-sarcomere svg text{fill:var(--ink,#0f2029);font-family:var(--font-body,system-ui,sans-serif)}",
    ".w-sarcomere .sa-ctl{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:.7rem 0 .3rem}",
    ".w-sarcomere .sa-rng{flex:1 1 14rem;display:flex;align-items:center;gap:.5rem;font-size:.82rem;color:var(--muted,#4d626d)}",
    ".w-sarcomere input[type=range]{flex:1;min-width:6rem;height:2.2rem;accent-color:var(--accent,#2547c7)}",
    ".w-sarcomere .sa-btn{font:inherit;font-size:.86rem;font-weight:700;min-height:2.5rem;padding:.35rem .8rem;border-radius:var(--radius,6px);border:1.5px solid var(--line-strong,var(--line,#c3d0d7));background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".w-sarcomere .sa-btn[aria-pressed=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-sarcomere .sa-btn:focus-visible,.w-sarcomere input:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-sarcomere table{width:100%;border-collapse:collapse;font-size:.88rem;margin:.5rem 0}",
    ".w-sarcomere th,.w-sarcomere td{padding:.3rem .5rem;border-bottom:1px solid var(--line,#c3d0d7);text-align:left}",
    ".w-sarcomere td.n{font-variant-numeric:tabular-nums;white-space:nowrap}",
    ".w-sarcomere .ch-same{color:var(--ink,#0f2029);font-weight:800}",
    ".w-sarcomere .ch-dn{color:var(--bad,#d1495b);font-weight:800}",
    ".w-sarcomere .ch-up{color:var(--good,#2a9d5c);font-weight:800}",
    ".w-sarcomere .sa-msg{margin:.4rem 0;padding:.6rem .8rem;background:var(--surface-2,#e3eaee);border-radius:var(--radius,6px);font-size:.9rem;line-height:1.5;min-height:3.2rem}",
    ".w-sarcomere .sa-leg{display:flex;flex-wrap:wrap;gap:.3rem 1rem;font-size:.8rem;margin:.3rem 0}",
    ".w-sarcomere .sa-leg i{display:inline-block;width:1.4rem;height:.5rem;border-radius:2px;margin-right:.3rem;vertical-align:middle}",
    ".w-sarcomere .sa-note{margin:.3rem 0 0;font-size:.76rem;color:var(--muted,#4d626d)}"
  ].join("\n");

  var T = {
    slider: L("Muscle state", "筋肉の状態", "肌肉狀態"),
    contracted: L("Contracted", "収縮", "收縮"),
    stretched: L("Stretched", "伸展", "拉伸"),
    sliderLabel: L("Sarcomere length slider: from contracted to stretched", "サルコメアの長さのスライダー: 収縮から伸展まで", "肌節長度滑桿：由收縮至拉伸"),
    pContract: L("Contract", "収縮させる", "收縮"),
    pRest: L("Resting", "静止長", "靜止長度"),
    pStretch: L("Stretch", "引き伸ばす", "拉伸"),
    play: L("Animate", "アニメーション", "動畫"),
    stop: L("Stop", "停止", "停止"),
    z: L("Z line", "Z線 (Z line)", "Z線 (Z line)"),
    A: L("A band", "A帯 (A band)", "A帶 (A band)"),
    I: L("I band", "I帯 (I band)", "I帶 (I band)"),
    H: L("H zone", "H帯 (H zone)", "H區 (H zone)"),
    sarc: L("Sarcomere", "サルコメア (sarcomere)", "肌節 (sarcomere)"),
    actin: L("actin (thin filament)", "アクチン (actin、細いフィラメント)", "肌動蛋白 (actin，細肌絲)"),
    myosin: L("myosin (thick filament)", "ミオシン (myosin、太いフィラメント)", "肌球蛋白 (myosin，粗肌絲)"),
    titin: L("titin (elastic protein)", "タイチン (titin、弾性タンパク質)", "肌聯蛋白 (titin，彈性蛋白質)"),
    region: L("Region", "領域", "區域"),
    len: L("Length (µm)", "長さ (µm)", "長度 (µm)"),
    vsRest: L("Compared with resting", "静止長との比較", "與靜止長度比較"),
    same: L("same", "変化なし", "不變"),
    shorter: L("shorter", "短い", "較短"),
    longer: L("longer", "長い", "較長"),
    modelNote: L("Illustrative model: actin 1.0 µm and myosin 1.6 µm never change length. The filaments slide.", "説明用のモデル: アクチン1.0 µmとミオシン1.6 µmの長さは変わりません。フィラメントがすべります。", "示意模型：肌動蛋白1.0 µm和肌球蛋白1.6 µm的長度都不會改變，只是肌絲滑動。"),
    msgContract: L("Contracted: myosin heads have pulled the actin filaments towards the centre. The Z lines are closer. The H zone has disappeared and the I band is short. The A band is still 1.6 µm. Titin is coiled up.", "収縮: ミオシンの頭部がアクチンを中央へ引いたため、Z線が近づいています。H帯が消え、I帯は短くなっています。A帯は1.6 µmのままです。タイチンは縮んでいます。", "收縮：肌球蛋白頭部把肌動蛋白拉向中央，Z線靠近。H區消失，I帶變短，A帶仍是1.6 µm。肌聯蛋白縮成一團。"),
    msgRest: L("Resting length: the actin and myosin filaments partly overlap. There is a clear H zone and I band.", "静止長: アクチンとミオシンのフィラメントが部分的に重なっています。H帯とI帯がはっきり見えます。", "靜止長度：肌動蛋白和肌球蛋白肌絲部分重疊，可清楚看見H區和I帶。"),
    msgPartial: L("Partly contracted: compare with resting. The I band and H zone are shorter, the A band is unchanged.", "部分的に収縮: 静止長と比べましょう。I帯とH帯は短く、A帯は変わりません。", "部分收縮：與靜止長度比較。I帶和H區較短，A帶不變。"),
    msgStretch: L("Stretched: titin is pulled taut. It stores energy, will recoil when the pull stops, and stops the sarcomere being overstretched so the filaments are not pulled apart.", "伸展: タイチンが張っています。エネルギーを蓄え、引く力がなくなると反跳し、サルコメアの伸びすぎを防いでフィラメントが引き離されないようにします。", "拉伸：肌聯蛋白被拉緊。它儲存能量，拉力停止後會回彈，並防止肌節過度拉伸，使肌絲不致被拉開。"),
    msgNear: L("Nearly overstretched: only a little overlap remains. Titin is very taut and resists any further stretching.", "ほぼ伸びきった状態: 重なりがわずかです。タイチンはぴんと張り、これ以上の伸展に抵抗します。", "接近過度拉伸：只剩少許重疊。肌聯蛋白非常繃緊，抵抗進一步拉伸。")
  };

  var A = 100, M = 160, REST = 250, MIN = 200, MAX = 340, S = 1.5, CX = 300;

  function mount(el, ctx) {
    if (!document.getElementById(ID)) {
      var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st);
    }
    var t = ctx.t;
    var len = REST, timer = null, playing = false;
    var reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

    el.innerHTML = "";
    var stage = document.createElement("div"); stage.className = "sa-stage";
    var svgHost = document.createElement("div"); stage.appendChild(svgHost);
    el.appendChild(stage);

    var ctl = document.createElement("div"); ctl.className = "sa-ctl";
    var rng = document.createElement("label"); rng.className = "sa-rng";
    var lo = document.createElement("span"); lo.textContent = t(T.contracted);
    var input = document.createElement("input"); input.type = "range"; input.min = MIN; input.max = MAX; input.step = 1; input.value = len;
    input.setAttribute("aria-label", t(T.sliderLabel));
    var hi = document.createElement("span"); hi.textContent = t(T.stretched);
    rng.appendChild(lo); rng.appendChild(input); rng.appendChild(hi);
    ctl.appendChild(rng);
    function btn(label, fn, pressed) {
      var b = document.createElement("button"); b.type = "button"; b.className = "sa-btn"; b.textContent = label;
      if (pressed) b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", fn); ctl.appendChild(b); return b;
    }
    btn(t(T.pContract), function () { stopPlay(); set(MIN); });
    btn(t(T.pRest), function () { stopPlay(); set(REST); });
    btn(t(T.pStretch), function () { stopPlay(); set(MAX - 10); });
    var playBtn = null;
    if (!reduce) playBtn = btn(t(T.play), togglePlay, true);
    el.appendChild(ctl);

    var msg = document.createElement("div"); msg.className = "sa-msg"; msg.setAttribute("aria-live", "polite"); el.appendChild(msg);
    var tableHost = document.createElement("div"); el.appendChild(tableHost);
    var leg = document.createElement("div"); leg.className = "sa-leg";
    leg.innerHTML = '<span><i style="background:var(--theme-a,#07756f)"></i>' + t(T.actin) + '</span><span><i style="background:var(--accent,#2547c7)"></i>' + t(T.myosin) + '</span><span><i style="background:var(--warn,#c98a00)"></i>' + t(T.titin) + '</span><span><i style="background:var(--ink,#0f2029)"></i>' + t(T.z) + '</span>';
    el.appendChild(leg);
    var note = document.createElement("p"); note.className = "sa-note"; note.textContent = t(T.modelNote); el.appendChild(note);

    function bracket(x1, x2, y, up) {
      var d = up ? 6 : -6;
      return '<path d="M' + x1 + ' ' + (y + d) + ' V' + y + ' H' + x2 + ' V' + (y + d) + '" fill="none" stroke="var(--ink,#0f2029)" stroke-width="1.5"/>';
    }
    function draw() {
      var half = len / 2 * S, zl = CX - half, zr = CX + half;
      var mL = CX - M / 2 * S, mR = CX + M / 2 * S;
      var aTipL = zl + A * S, aTipR = zr - A * S;
      var hW = Math.max(0, len - 2 * A);
      var s = '<svg viewBox="0 0 600 340" role="img" aria-label="' + t(T.sarc) + '">';
      // shading: A band, H zone
      s += '<rect x="' + mL + '" y="70" width="' + (mR - mL) + '" height="130" fill="var(--accent-soft,#e0e7fb)"/>';
      if (hW > 0) s += '<rect x="' + (CX - hW / 2 * S) + '" y="70" width="' + (hW * S) + '" height="130" fill="var(--ahl,#ffcf3a)" opacity="0.4"/>';
      // actin rows
      [92, 168].forEach(function (y) {
        s += '<line x1="' + zl + '" y1="' + y + '" x2="' + aTipL + '" y2="' + y + '" stroke="var(--theme-a,#07756f)" stroke-width="5" stroke-linecap="round"/>';
        s += '<line x1="' + zr + '" y1="' + y + '" x2="' + aTipR + '" y2="' + y + '" stroke="var(--theme-a,#07756f)" stroke-width="5" stroke-linecap="round"/>';
      });
      // myosin rod
      s += '<line x1="' + mL + '" y1="130" x2="' + mR + '" y2="130" stroke="var(--accent,#2547c7)" stroke-width="14" stroke-linecap="round"/>';
      // heads where myosin overlaps actin (both sides)
      var hs = "";
      function heads(x1, x2) {
        var lo = Math.min(x1, x2) + 6, hi = Math.max(x1, x2) - 6;
        for (var x = lo; x <= hi; x += 14) {
          hs += '<line x1="' + x + '" y1="124" x2="' + (x + 5) + '" y2="100" stroke="var(--accent,#2547c7)" stroke-width="2"/>';
          hs += '<line x1="' + x + '" y1="136" x2="' + (x + 5) + '" y2="160" stroke="var(--accent,#2547c7)" stroke-width="2"/>';
        }
      }
      if (aTipL > mL) heads(mL, Math.min(aTipL, CX));
      if (aTipR < mR) heads(Math.max(aTipR, CX), mR);
      s += hs;
      // titin springs (Z line to myosin end), drawn on top of centre row
      var stretch = Math.max(0, Math.min(1, (len - REST) / (MAX - REST)));
      var amp = 11 - 9 * stretch;
      var col = len > 300 ? "var(--bad,#d1495b)" : "var(--warn,#c98a00)";
      function spring(x1, x2) {
        var n = 8, p = "M" + x1 + " 130";
        for (var i = 1; i <= n; i++) {
          p += " L" + (x1 + (x2 - x1) * i / n).toFixed(1) + " " + (130 + (i === n ? 0 : (i % 2 ? -amp : amp)));
        }
        return '<path d="' + p + '" fill="none" stroke="' + col + '" stroke-width="2.5" stroke-linejoin="round"/>';
      }
      s += spring(zl, mL) + spring(mR, zr);
      // Z lines
      s += '<line x1="' + zl + '" y1="72" x2="' + zl + '" y2="198" stroke="var(--ink,#0f2029)" stroke-width="5"/>';
      s += '<line x1="' + zr + '" y1="72" x2="' + zr + '" y2="198" stroke="var(--ink,#0f2029)" stroke-width="5"/>';
      // brackets and labels
      s += bracket(mL, mR, 42, true) + '<text x="' + CX + '" y="28" text-anchor="middle" font-size="21" font-weight="700">' + t(T.A) + '</text>';
      s += bracket(zl, mL, 42, true) + bracket(mR, zr, 42, true);
      s += '<text x="' + ((zl + mL) / 2) + '" y="68" text-anchor="middle" font-size="19" font-weight="700">' + t(T.I) + '</text>';
      s += '<text x="' + ((mR + zr) / 2) + '" y="68" text-anchor="middle" font-size="19" font-weight="700">' + t(T.I) + '</text>';
      s += '<text x="' + zl + '" y="224" text-anchor="middle" font-size="18">' + t(T.z) + '</text>';
      s += '<text x="' + zr + '" y="224" text-anchor="middle" font-size="18">' + t(T.z) + '</text>';
      // H zone bracket
      if (hW > 0) {
        s += bracket(CX - hW / 2 * S, CX + hW / 2 * S, 244, false);
        s += '<text x="' + CX + '" y="274" text-anchor="middle" font-size="20" font-weight="700">' + t(T.H) + '</text>';
      } else {
        s += '<text x="' + CX + '" y="274" text-anchor="middle" font-size="20" font-weight="700">' + t(T.H) + ' = 0</text>';
      }
      // sarcomere bracket
      s += bracket(zl, zr, 302, false) + '<text x="' + CX + '" y="330" text-anchor="middle" font-size="20" font-weight="700">' + t(T.sarc) + ' = ' + (len / 100).toFixed(2) + ' µm</text>';
      s += '</svg>';
      svgHost.innerHTML = s;
      input.value = len;
      input.setAttribute("aria-valuetext", (len / 100).toFixed(2) + " µm");
      // table
      function row(name, v, ref) {
        var d = Math.round(v - ref), cls = "ch-same", txt = t(T.same), sym = "=";
        if (d < -0.5) { cls = "ch-dn"; txt = t(T.shorter); sym = "▼"; }
        else if (d > 0.5) { cls = "ch-up"; txt = t(T.longer); sym = "▲"; }
        return "<tr><td>" + name + "</td><td class=n>" + (v / 100).toFixed(2) + '</td><td class="' + cls + '">' + sym + " " + txt + "</td></tr>";
      }
      var restH = REST - 2 * A, restI = REST - M;
      tableHost.innerHTML = "<table><tr><th>" + t(T.region) + "</th><th>" + t(T.len) + "</th><th>" + t(T.vsRest) + "</th></tr>" +
        row(t(T.sarc), len, REST) + row(t(T.A), M, M) + row(t(T.I) + " (×2)", len - M, restI) + row(t(T.H), hW, restH) + "</table>";
      var m = T.msgPartial;
      if (len <= MIN + 2) m = T.msgContract; else if (Math.abs(len - REST) <= 4) m = T.msgRest; else if (len >= 320) m = T.msgNear; else if (len > REST + 4) m = T.msgStretch;
      msg.textContent = t(m);
    }
    function set(v) { len = Math.max(MIN, Math.min(MAX, v)); draw(); }
    input.addEventListener("input", function () { stopPlay(); set(Number(input.value)); });

    var dir = -1;
    function tick() {
      var next = len + dir * 2;
      if (next <= MIN) { next = MIN; dir = 1; }
      if (next >= REST + 60) { next = REST + 60; dir = -1; }
      set(next);
    }
    function togglePlay() { if (playing) stopPlay(); else startPlay(); }
    function startPlay() { playing = true; playBtn.setAttribute("aria-pressed", "true"); playBtn.textContent = t(T.stop); timer = setInterval(tick, 40); }
    function stopPlay() { if (playing) { playing = false; clearInterval(timer); timer = null; if (playBtn) { playBtn.setAttribute("aria-pressed", "false"); playBtn.textContent = t(T.play); } } }

    draw();
    return function () { if (timer) clearInterval(timer); };
  }

  IB.registerWidget("sarcomere", {
    title: L("Sliding filament model: how a sarcomere contracts", "滑り説: サルコメアはどのように収縮するか", "滑動肌絲模型：肌節如何收縮"),
    mount: mount
  });
})();
