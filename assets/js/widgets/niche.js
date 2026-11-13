/* Widget: niche — fundamental vs realized niche and competition (IB B4.2.12, B4.2.13).
   Two species along one environmental gradient. Sliders: niche overlap, competition strength; toggle: who wins.
   Outcomes shown: no competition (realized = fundamental), restriction to part of the fundamental niche, elimination.
   Qualitative model only. */
(function () {
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var ID = "niche-css";
  var CSS = [
    ".w-niche{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
    ".w-niche .ni-stage{background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius,6px)}",
    ".w-niche svg{display:block;width:100%;height:auto}",
    ".w-niche svg text{fill:var(--ink,#0f2029);font-family:var(--font-body,system-ui,sans-serif)}",
    ".w-niche .ni-ctl{display:grid;gap:.55rem;margin:.7rem 0 .3rem}",
    ".w-niche .ni-row{display:grid;grid-template-columns:minmax(8rem,12rem) 1fr 3rem;gap:.5rem;align-items:center;font-size:.88rem}",
    ".w-niche .ni-row output{font-variant-numeric:tabular-nums;font-weight:800;text-align:right}",
    ".w-niche input[type=range]{width:100%;height:2.2rem;accent-color:var(--accent,#2547c7)}",
    ".w-niche .ni-btns{display:flex;flex-wrap:wrap;gap:.4rem}",
    ".w-niche .ni-btn{font:inherit;font-size:.86rem;font-weight:700;min-height:2.5rem;padding:.35rem .8rem;border-radius:var(--radius,6px);border:1.5px solid var(--line-strong,var(--line,#c3d0d7));background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".w-niche .ni-btn[aria-pressed=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-niche .ni-btn:focus-visible,.w-niche input:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-niche .ni-msg{margin:.5rem 0;padding:.6rem .8rem;background:var(--surface-2,#e3eaee);border-radius:var(--radius,6px);font-size:.92rem;line-height:1.5;min-height:3.4rem}",
    ".w-niche .ni-msg strong{font-weight:800}",
    ".w-niche .ni-leg{display:flex;flex-wrap:wrap;gap:.3rem 1rem;font-size:.8rem;margin:.3rem 0}",
    ".w-niche .ni-leg i{display:inline-block;width:1.4rem;height:.6rem;border-radius:2px;margin-right:.3rem;vertical-align:middle}",
    ".w-niche .ni-note{margin:.3rem 0 0;font-size:.76rem;color:var(--muted,#4d626d)}",
    "@media (max-width:480px){.w-niche .ni-row{grid-template-columns:1fr 3rem}.w-niche .ni-row input{grid-column:1/-1;grid-row:2}}"
  ].join("\n");

  var T = {
    overlap: L("Niche overlap", "ニッチの重なり", "生態位重疊"),
    comp: L("Competition strength", "競争の強さ", "競爭強度"),
    strong: L("B is the stronger competitor", "Bのほうが競争に強い", "B是較強的競爭者"),
    equal: L("Equally matched", "互角", "旗鼓相當"),
    removeB: L("Remove species B", "種Bを取り除く", "移走物種B"),
    reset: L("Reset", "リセット", "重設"),
    axis: L("Environmental gradient (for example height on a rocky shore, or soil moisture)", "環境の傾度（例: 岩礁海岸の高さ、土壌の水分）", "環境梯度（例如岩岸的高度或土壤水分）"),
    fundA: L("A: fundamental niche", "A: 基本ニッチ (fundamental niche)", "A：基礎生態位 (fundamental niche)"),
    realA: L("A: realized niche", "A: 実現ニッチ (realized niche)", "A：實現生態位 (realized niche)"),
    realB: L("B: realized niche", "B: 実現ニッチ", "B：實現生態位"),
    legFund: L("fundamental niche of A (dashed)", "Aの基本ニッチ（破線）", "A的基礎生態位（虛線）"),
    legReal: L("realized niche of A", "Aの実現ニッチ", "A的實現生態位"),
    legB: L("species B", "種B", "物種B"),
    sizeLbl: L("Realized niche of A = {p}% of its fundamental niche", "Aの実現ニッチ = 基本ニッチの {p}%", "A的實現生態位 = 其基礎生態位的 {p}%"),
    noComp: L("<strong>No competition effect.</strong> The realized niche of A is the same as its fundamental niche. (Either the niches do not overlap, or competition strength is zero, or B has been removed.)", "<strong>競争の影響なし。</strong> Aの実現ニッチは基本ニッチと同じです（ニッチが重ならないか、競争の強さがゼロか、Bを取り除いた場合）。", "<strong>沒有競爭影響。</strong>A的實現生態位與其基礎生態位相同（生態位沒有重疊、競爭強度為零，或已移走B）。"),
    restrict: L("<strong>A is restricted to part of its fundamental niche.</strong> B outcompetes A in the zone where their niches overlap, so A's realized niche is smaller than its fundamental niche. Move the competition slider to 0 and A spreads back.", "<strong>Aは基本ニッチの一部に制限されます。</strong> ニッチが重なる範囲ではBがAを圧倒するため、Aの実現ニッチは基本ニッチより小さくなります。競争のスライダーを0にするとAは広がります。", "<strong>A被限制在其基礎生態位的一部分。</strong>在生態位重疊的範圍內B勝過A，所以A的實現生態位比其基礎生態位小。把競爭滑桿移到0，A便會擴展回去。"),
    both: L("<strong>Both species are restricted to part of their fundamental niche.</strong> Each keeps the part of the overlap where it is the better competitor, so competition is reduced and they can coexist.", "<strong>両方の種が基本ニッチの一部に制限されます。</strong> 各種は重なりのうち自分が競争に強い部分を保つので、競争が減り、共存できます。", "<strong>兩個物種都被限制在其基礎生態位的一部分。</strong>每個物種保留重疊範圍中自己較有優勢的部分，競爭因而減少，得以共存。"),
    elim: L("<strong>Competitive exclusion: A is eliminated.</strong> The niches are (almost) identical and B is the stronger competitor, so A has no part of its niche left.", "<strong>競争的排除: Aは排除されます。</strong> ニッチがほぼ同一でBが競争に強いため、Aにはニッチが残りません。", "<strong>競爭排斥：A被淘汰。</strong>兩者的生態位（幾乎）相同而B是較強的競爭者，所以A沒有任何生態位部分剩下。"),
    nearIdent: L(" (With equal competitors and complete overlap, in practice one species is usually eliminated.)", "（互角で完全に重なる場合、実際にはどちらか一方が排除されることが多い。）", "（若兩者旗鼓相當且完全重疊，實際上通常其中一個會被淘汰。）"),
    note: L("Qualitative model, not real data. The shape of each curve shows how well a species does at each point along the gradient.", "定性的なモデルで、実際のデータではありません。曲線の形は、傾度上の各点で種がどれだけよく育つかを示します。", "定性模型，並非真實數據。曲線形狀顯示物種在梯度上各點的表現。")
  };

  function mount(el, ctx) {
    if (!document.getElementById(ID)) {
      var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st);
    }
    var t = ctx.t;
    var f = 0.6, c = 0.8, strongB = true;
    var X0 = 40, W = 540, BASE = 230, H = 140;
    function px(x) { return X0 + x * W; }
    function h(x, lo, hi) { var u = (x - lo) / (hi - lo); return u <= 0 || u >= 1 ? 0 : Math.pow(Math.sin(Math.PI * u), 0.8); }
    function path(lo, hi, rlo, rhi, close) {
      var n = 60, d = "", i, x, y;
      for (i = 0; i <= n; i++) {
        x = rlo + (rhi - rlo) * i / n; y = BASE - H * h(x, lo, hi);
        d += (i ? " L" : "M") + px(x).toFixed(1) + " " + y.toFixed(1);
      }
      if (close) d += " L" + px(rhi).toFixed(1) + " " + BASE + " L" + px(rlo).toFixed(1) + " " + BASE + " Z";
      return d;
    }

    el.innerHTML = "";
    var stage = document.createElement("div"); stage.className = "ni-stage"; var svgHost = document.createElement("div"); stage.appendChild(svgHost); el.appendChild(stage);
    var ctl = document.createElement("div"); ctl.className = "ni-ctl"; el.appendChild(ctl);

    function slider(label, init, cb) {
      var row = document.createElement("label"); row.className = "ni-row";
      var sp = document.createElement("span"); sp.textContent = label;
      var inp = document.createElement("input"); inp.type = "range"; inp.min = 0; inp.max = 100; inp.step = 1; inp.value = Math.round(init * 100); inp.setAttribute("aria-label", label);
      var out = document.createElement("output"); out.textContent = inp.value + "%";
      inp.addEventListener("input", function () { out.textContent = inp.value + "%"; cb(Number(inp.value) / 100); });
      row.appendChild(sp); row.appendChild(inp); row.appendChild(out); ctl.appendChild(row);
      return { inp: inp, out: out };
    }
    var sOver = slider(t(T.overlap), f, function (v) { f = v; draw(); });
    var sComp = slider(t(T.comp), c, function (v) { c = v; draw(); });
    var btns = document.createElement("div"); btns.className = "ni-btns"; ctl.appendChild(btns);
    function btn(label, fn, pressed) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ni-btn"; b.textContent = label;
      if (pressed !== undefined) b.setAttribute("aria-pressed", pressed ? "true" : "false");
      b.addEventListener("click", fn); btns.appendChild(b); return b;
    }
    var bStrong = btn(t(T.strong), function () { strongB = true; draw(); }, true);
    var bEqual = btn(t(T.equal), function () { strongB = false; draw(); }, false);
    btn(t(T.removeB), function () { c = 0; sComp.inp.value = 0; sComp.out.textContent = "0%"; draw(); });
    btn(t(T.reset), function () { f = 0.6; c = 0.8; strongB = true; sOver.inp.value = 60; sOver.out.textContent = "60%"; sComp.inp.value = 80; sComp.out.textContent = "80%"; draw(); });

    var msg = document.createElement("div"); msg.className = "ni-msg"; msg.setAttribute("aria-live", "polite"); el.appendChild(msg);
    var leg = document.createElement("div"); leg.className = "ni-leg";
    leg.innerHTML = '<span><i style="border:2px dashed var(--theme-a,#07756f);background:none"></i>' + t(T.legFund) + '</span><span><i style="background:var(--theme-a,#07756f)"></i>' + t(T.legReal) + '</span><span><i style="background:var(--theme-b,#b82a56)"></i>' + t(T.legB) + '</span>';
    el.appendChild(leg);
    var note = document.createElement("p"); note.className = "ni-note"; note.textContent = t(T.axis) + ". " + t(T.note); el.appendChild(note);

    function draw() {
      // B fundamental niche fixed [0.5, 1.0]; A fundamental niche [a0, a0+0.5], overlap = a0
      var a0 = 0.5 * f, aHi = a0 + 0.5, ov = a0;
      var bLo = 0.5, bHi = 1.0;
      var rLo = a0, rHi = aHi, bRLo = bLo;
      if (ov > 0.001) {
        if (strongB) { rHi = aHi - c * ov; }
        else { rHi = aHi - c * ov / 2; bRLo = bLo + c * ov / 2; }
      }
      if (rHi < rLo) rHi = rLo;
      var width = rHi - rLo, pct = Math.round(width / 0.5 * 100);
      var elim = pct <= 3;
      var s = '<svg viewBox="0 0 600 316" role="img" aria-label="' + t(T.axis) + '">';
      s += '<line x1="' + X0 + '" y1="' + BASE + '" x2="' + (X0 + W) + '" y2="' + BASE + '" stroke="var(--ink,#0f2029)" stroke-width="2"/>';
      // B
      s += '<path d="' + path(bLo, bHi, bLo, bHi, false) + '" fill="none" stroke="var(--theme-b,#b82a56)" stroke-width="2" stroke-dasharray="5 4" opacity="0.6"/>';
      if (bHi > bRLo) s += '<path d="' + path(bLo, bHi, bRLo, bHi, true) + '" fill="var(--theme-b,#b82a56)" opacity="0.35" stroke="var(--theme-b,#b82a56)" stroke-width="2"/>';
      s += '<text x="' + px(0.75) + '" y="' + (BASE - H - 8) + '" text-anchor="middle" font-size="28" font-weight="800" style="fill:var(--theme-b,#b82a56)">B</text>';
      // A fundamental
      s += '<path d="' + path(a0, aHi, a0, aHi, false) + '" fill="none" stroke="var(--theme-a,#07756f)" stroke-width="2.5" stroke-dasharray="6 4"/>';
      // A realized
      if (!elim) s += '<path d="' + path(a0, aHi, rLo, rHi, true) + '" fill="var(--theme-a,#07756f)" opacity="0.5" stroke="var(--theme-a,#07756f)" stroke-width="2.5"/>';
      s += '<text x="' + px(a0 + 0.25) + '" y="' + (BASE - H - 8) + '" text-anchor="middle" font-size="28" font-weight="800" style="fill:var(--theme-a,#07756f)">A</text>';
      // range bars
      s += '<line x1="' + px(a0) + '" y1="258" x2="' + px(aHi) + '" y2="258" stroke="var(--theme-a,#07756f)" stroke-width="4" stroke-dasharray="8 5"/>';
      s += '<text x="' + X0 + '" y="248" font-size="17" font-weight="700">' + t(T.fundA) + '</text>';
      if (!elim) s += '<line x1="' + px(rLo) + '" y1="296" x2="' + px(rHi) + '" y2="296" stroke="var(--theme-a,#07756f)" stroke-width="6"/>';
      s += '<text x="' + X0 + '" y="286" font-size="17" font-weight="700">' + t(T.realA) + (elim ? " = 0" : "") + '</text>';
      s += '</svg>';
      svgHost.innerHTML = s;
      bStrong.setAttribute("aria-pressed", strongB ? "true" : "false");
      bEqual.setAttribute("aria-pressed", strongB ? "false" : "true");
      var m;
      if (ov <= 0.001 || c <= 0.001) m = t(T.noComp);
      else if (elim) m = t(T.elim);
      else if (strongB) m = t(T.restrict);
      else m = t(T.both) + (f >= 0.97 ? t(T.nearIdent) : "");
      msg.innerHTML = m + "<br>" + t(T.sizeLbl).replace("{p}", pct);
    }
    draw();
    return function () {};
  }

  IB.registerWidget("niche", {
    title: L("Fundamental and realized niche: effect of competition", "基本ニッチと実現ニッチ: 競争の影響", "基礎生態位與實現生態位：競爭的影響"),
    mount: mount
  });
})();
