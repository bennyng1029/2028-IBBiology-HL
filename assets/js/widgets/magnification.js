/* Widget: magnification — calculator, scale-bar tool and practice generator (A2.2.2)
   magnification = image size ÷ actual size; units mm / µm / nm. */
(function () {
  "use strict";
  var STYLE_ID = "ibw-magnification-css";
  var CSS = [
    ".w-magnification{color:var(--ink,#0f2029);font-family:var(--font-body,system-ui,sans-serif);font-size:.95rem}",
    ".w-magnification .mg-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px}",
    ".w-magnification button{font:inherit;cursor:pointer}",
    ".w-magnification button.mg-tab,.w-magnification button.mg-btn,.w-magnification button.mg-opt{border:1px solid var(--line,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);border-radius:999px;padding:6px 13px;font-size:.9rem;min-height:38px;line-height:1.2}",
    ".w-magnification button.mg-btn.primary{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff);border-radius:var(--radius,6px)}",
    ".w-magnification button.mg-btn{border-radius:var(--radius,6px)}",
    ".w-magnification button[aria-selected='true'],.w-magnification button[aria-pressed='true']{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-magnification button:focus-visible,.w-magnification input:focus-visible,.w-magnification select:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-magnification .mg-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0}",
    ".w-magnification .mg-row>label,.w-magnification .mg-lab{min-width:7.2em;font-weight:600}",
    ".w-magnification input[type=number],.w-magnification select{font:inherit;padding:6px 8px;border:1px solid var(--line-strong,var(--line,#c3d0d7));border-radius:var(--radius,6px);background:var(--surface,#fff);color:var(--ink,#0f2029);min-height:38px}",
    ".w-magnification input[type=number]{width:8.5em}",
    ".w-magnification input[disabled]{background:var(--surface-2,#e3eaee);color:var(--muted,#4d626d)}",
    ".w-magnification input[type=range]{flex:1 1 150px;min-width:120px;accent-color:var(--accent,#2547c7)}",
    ".w-magnification .mg-out{margin:12px 0 4px;padding:10px 12px;background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);border-left:5px solid var(--accent,#2547c7);border-radius:var(--radius,6px)}",
    ".w-magnification .mg-out ol{margin:4px 0 6px 1.2em;padding:0}",
    ".w-magnification .mg-out li{margin:3px 0;line-height:1.45}",
    ".w-magnification .mg-res{font-weight:700;font-size:1.08rem;margin:6px 0 0}",
    ".w-magnification .mg-bad{color:var(--bad,#b3261e)}",
    ".w-magnification .mg-good{color:var(--good,#17703f);font-weight:700}",
    ".w-magnification .mg-svg{display:block;width:100%;height:auto;background:var(--bg,#edf1f3);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius-lg,12px)}",
    ".w-magnification .mg-svg text{fill:var(--ink,#0f2029);font-family:var(--font-body,sans-serif);font-size:13px}",
    ".w-magnification .mg-formula{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin:0 0 10px}",
    ".w-magnification .mg-formula svg{width:96px;height:auto;flex:none}",
    ".w-magnification .mg-formula svg text{fill:var(--ink,#0f2029);font-size:15px;font-weight:700;font-family:var(--font-body,sans-serif)}",
    ".w-magnification .mg-formula svg line,.w-magnification .mg-formula svg path{stroke:var(--ink-2,var(--muted,#4d626d));fill:none;stroke-width:2}",
    ".w-magnification .mg-small{font-size:.83rem;color:var(--muted,#4d626d)}",
    ".w-magnification .mg-q{padding:10px 12px;background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius,6px);margin:8px 0;line-height:1.5}",
    ".w-magnification .mg-score{margin-left:auto;font-size:.85rem;color:var(--muted,#4d626d)}",
    ".w-magnification .mg-fb{min-height:1.6em;margin:6px 0}"
  ].join("\n");

  function injectCss() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement("style");
    s.id = STYLE_ID; s.textContent = CSS;
    document.head.appendChild(s);
  }
  var T = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };

  var UI = {
    title: T("Magnification and scale bars", "倍率とスケールバー", "放大率與比例尺"),
    tCalc: T("Calculator", "計算機", "計算器"),
    tBar: T("Scale bar", "スケールバー", "比例尺"),
    tPrac: T("Practice", "練習", "練習"),
    formula: T("magnification = image size ÷ actual size", "倍率 = 像の大きさ ÷ 実際の大きさ", "放大率 = 影像大小 ÷ 實際大小"),
    formula2: T("Put both sizes in the same unit first. 1 mm = 1000 µm; 1 µm = 1000 nm.", "必ず先に単位をそろえます。1 mm = 1000 µm、1 µm = 1000 nm。", "先把兩個大小換成同一單位。1 mm = 1000 µm；1 µm = 1000 nm。"),
    solveFor: T("Find:", "求めるもの：", "求："),
    sM: T("Magnification (M)", "倍率 (M)", "放大率 (M)"),
    sA: T("Actual size (A)", "実際の大きさ (A)", "實際大小 (A)"),
    sI: T("Image size (I)", "像の大きさ (I)", "影像大小 (I)"),
    imgSize: T("Image size (I)", "像の大きさ (I)", "影像大小 (I)"),
    actSize: T("Actual size (A)", "実際の大きさ (A)", "實際大小 (A)"),
    magn: T("Magnification (M)", "倍率 (M)", "放大率 (M)"),
    answerUnit: T("(answer unit)", "（答えの単位）", "（答案單位）"),
    enterPos: T("Enter positive numbers in the other two boxes.", "ほかの2つの欄に正の数を入力します。", "請在另外兩格輸入正數。"),
    working: T("Working", "計算の過程", "計算步驟"),
    sameUnit: T("Both lengths are already in {u}.", "どちらの長さもすでに {u} です。", "兩個長度都已經是 {u}。"),
    convImg: T("Put both in the same unit. Image: {I} {Iu} = {Ic} {Au}.", "単位をそろえます。像：{I} {Iu} = {Ic} {Au}。", "統一單位。影像：{I} {Iu} = {Ic} {Au}。"),
    stepM: T("M = I ÷ A = {Ic} ÷ {A} = {M}", "M = I ÷ A = {Ic} ÷ {A} = {M}", "M = I ÷ A = {Ic} ÷ {A} = {M}"),
    resM: T("Magnification = ×{M}", "倍率 = ×{M}", "放大率 = ×{M}"),
    convImgO: T("Convert the image to the answer unit: {I} {Iu} = {Ic} {Ou}.", "像を答えの単位に換算します：{I} {Iu} = {Ic} {Ou}。", "把影像換算成答案單位：{I} {Iu} = {Ic} {Ou}。"),
    stepA: T("A = I ÷ M = {Ic} ÷ {M} = {R} {Ou}", "A = I ÷ M = {Ic} ÷ {M} = {R} {Ou}", "A = I ÷ M = {Ic} ÷ {M} = {R} {Ou}"),
    resA: T("Actual size = {R} {Ou}", "実際の大きさ = {R} {Ou}", "實際大小 = {R} {Ou}"),
    stepI: T("I = A × M = {A} {Au} × {M} = {Rc} {Au}", "I = A × M = {A} {Au} × {M} = {Rc} {Au}", "I = A × M = {A} {Au} × {M} = {Rc} {Au}"),
    convO: T("Convert to the answer unit: {Rc} {Au} = {R} {Ou}.", "答えの単位に換算します：{Rc} {Au} = {R} {Ou}。", "換算成答案單位：{Rc} {Au} = {R} {Ou}。"),
    resI: T("Image size = {R} {Ou}", "像の大きさ = {R} {Ou}", "影像大小 = {R} {Ou}"),
    barLabel: T("Scale bar is labelled", "スケールバーの表示", "比例尺標示為"),
    barLen: T("Scale bar measures (mm)", "スケールバーの長さ (mm)", "比例尺量得 (mm)"),
    cellLen: T("Structure measures (mm)", "構造の長さ (mm)", "結構量得 (mm)"),
    barNote: T("Drawing is schematic. In an exam you measure the bar and the structure with a ruler, in mm.", "図は模式的です。試験では、バーと構造を定規でmm単位で測ります。", "圖為示意。考試時要用直尺以 mm 量度比例尺和結構。"),
    barSteps1: T("Magnification = bar length ÷ bar’s actual length = {bl} mm ÷ {b} {bu}. Same unit: {bl} mm = {blc} {bu}. So M = {blc} ÷ {b} = ×{M}.", "倍率 = バーの長さ ÷ バーの実際の長さ = {bl} mm ÷ {b} {bu}。単位をそろえる：{bl} mm = {blc} {bu}。よって M = {blc} ÷ {b} = ×{M}。", "放大率 = 比例尺長度 ÷ 比例尺代表的實際長度 = {bl} mm ÷ {b} {bu}。統一單位：{bl} mm = {blc} {bu}。所以 M = {blc} ÷ {b} = ×{M}。"),
    barSteps2: T("Actual length = structure ÷ M = {sl} mm ÷ {M} = {Amm} mm = {R} {Ou}.", "実際の長さ = 構造 ÷ M = {sl} mm ÷ {M} = {Amm} mm = {R} {Ou}。", "實際長度 = 結構 ÷ M = {sl} mm ÷ {M} = {Amm} mm = {R} {Ou}。"),
    barShort: T("Shortcut: the structure is {sl}/{bl} of the bar, so {sl}/{bl} × {b} {bu} = {R2} {bu}.", "近道：構造はバーの {sl}/{bl} なので、{sl}/{bl} × {b} {bu} = {R2} {bu}。", "捷徑：結構是比例尺的 {sl}/{bl}，所以 {sl}/{bl} × {b} {bu} = {R2} {bu}。"),
    newQ: T("New question", "新しい問題", "新題目"),
    check: T("Check", "答え合わせ", "核對"),
    show: T("Show worked solution", "解法を見る", "顯示解答步驟"),
    yourAns: T("Your answer:", "あなたの答え：", "你的答案："),
    right: T("Correct.", "正解です。", "正確。"),
    wrong: T("Not quite. Check the units, then look at the worked solution.", "惜しい。単位を確認し、解法を見ましょう。", "未完全正確。請檢查單位，然後看解答步驟。"),
    enterNum: T("Enter a number first.", "まず数値を入力します。", "請先輸入數字。"),
    score: T("Score", "得点", "得分"),
    hardMode: T("Question types", "問題の種類", "題目類型"),
    qAll: T("All", "すべて", "全部"),
    qBasic: T("Magnification and size", "倍率と大きさ", "放大率與大小"),
    qBar: T("Scale bars", "スケールバー", "比例尺"),
    qM: T("A cell is {a} {u} long. In a micrograph it measures {I} mm. Calculate the magnification.", "ある構造の実際の長さは {a} {u} です。顕微鏡写真では {I} mm でした。倍率を計算しなさい。", "一個結構的實際長度為 {a} {u}。在顯微照片中量得 {I} mm。計算放大率。"),
    qA: T("A micrograph has a magnification of ×{M}. A structure measures {I} mm in the micrograph. Calculate its actual size.", "顕微鏡写真の倍率は ×{M} です。ある構造は写真上で {I} mm でした。実際の大きさを計算しなさい。", "一張顯微照片的放大率為 ×{M}。一個結構在照片中量得 {I} mm。計算它的實際大小。"),
    qI: T("A structure is {a} {u} long. A drawing of it has a magnification of ×{M}. Calculate the length of the structure in the drawing.", "ある構造の長さは {a} {u} です。×{M} の倍率で描いた図での長さを計算しなさい。", "一個結構長 {a} {u}。以 ×{M} 的放大率繪畫，計算它在圖中的長度。"),
    qS: T("The scale bar in the micrograph is labelled “{b} {bu}” and measures {bl} mm. A structure measures {sl} mm. Calculate the actual length of the structure.", "顕微鏡写真のスケールバーは「{b} {bu}」と表示され、長さは {bl} mm です。ある構造は {sl} mm でした。構造の実際の長さを計算しなさい。", "顯微照片的比例尺標示為「{b} {bu}」，量得 {bl} mm。一個結構量得 {sl} mm。計算該結構的實際長度。"),
    qSM: T("The scale bar in the micrograph is labelled “{b} {bu}” and measures {bl} mm. Calculate the magnification of the micrograph.", "顕微鏡写真のスケールバーは「{b} {bu}」と表示され、長さは {bl} mm です。写真の倍率を計算しなさい。", "顯微照片的比例尺標示為「{b} {bu}」，量得 {bl} mm。計算照片的放大率。"),
    ansUnitHint: T("Choose the unit that matches your number.", "数値に合う単位を選びます。", "請選擇與你的數字相符的單位。"),
    correctIs: T("Correct answer: {x}", "正解：{x}", "正確答案：{x}"),
    stepsHead: T("Worked solution", "解法", "解答步驟"),
    aIsMag: T("(a number with no unit)", "（単位なしの数）", "（沒有單位的數字）")
  };

  var F = { "mm": 1e6, "µm": 1e3, "nm": 1 };
  var UNITS = ["mm", "µm", "nm"];

  function fill(s, v) { return s.replace(/\{(\w+)\}/g, function (m, k) { return v[k] !== undefined ? v[k] : m; }); }
  function num(x) { return Number(Number(x).toPrecision(6)); }
  function fmt(x) {
    var n = num(x);
    if (!isFinite(n)) return "?";
    var str = String(n);
    if (str.indexOf("e") >= 0) {
      var m = n.toExponential().split("e");
      return m[0] + " × 10" + sup(m[1].replace("+", ""));
    }
    var parts = str.split("."), ip = parts[0], neg = "";
    if (ip.charAt(0) === "-") { neg = "-"; ip = ip.slice(1); }
    if (ip.length >= 5) ip = ip.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return neg + ip + (parts[1] ? "." + parts[1] : "");
  }
  function sup(e) {
    var map = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
    return e.split("").map(function (c) { return map[c] || c; }).join("");
  }
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }
  function nice(x, dp) { var k = Math.pow(10, dp); return Math.abs(x * k - Math.round(x * k)) < 1e-7; }

  /* ---------- scale-bar drawing ---------- */
  function scaleSvg(t, barMm, label, cellMm) {
    var u = 3.6, bx = 20, cx = 200, rx = cellMm * u / 2, ry = Math.min(34, Math.max(14, rx * 0.5));
    var s = '<svg class="mg-svg" viewBox="0 0 400 210" role="img" aria-label="' + label + '">';
    s += '<rect x="0" y="0" width="400" height="210" fill="var(--surface-2,#e3eaee)"/>';
    s += '<ellipse cx="' + cx + '" cy="78" rx="' + rx + '" ry="' + ry + '" fill="var(--theme-a-soft,#d9efec)" stroke="var(--theme-a,#07756f)" stroke-width="3"/>';
    s += '<ellipse cx="' + (cx - rx * 0.25) + '" cy="78" rx="' + Math.max(4, rx * 0.22) + '" ry="' + Math.max(4, ry * 0.5) + '" fill="var(--theme-a,#07756f)" opacity=".5"/>';
    var y = 132;
    s += '<line x1="' + (cx - rx) + '" y1="' + y + '" x2="' + (cx + rx) + '" y2="' + y + '" stroke="var(--ink,#0f2029)" stroke-width="1.5"/>';
    s += '<line x1="' + (cx - rx) + '" y1="' + (y - 6) + '" x2="' + (cx - rx) + '" y2="' + (y + 6) + '" stroke="var(--ink,#0f2029)" stroke-width="1.5"/>';
    s += '<line x1="' + (cx + rx) + '" y1="' + (y - 6) + '" x2="' + (cx + rx) + '" y2="' + (y + 6) + '" stroke="var(--ink,#0f2029)" stroke-width="1.5"/>';
    s += '<text x="' + cx + '" y="' + (y + 20) + '" text-anchor="middle">' + fmt(cellMm) + ' mm</text>';
    var by = 190;
    s += '<line x1="' + bx + '" y1="' + by + '" x2="' + (bx + barMm * u) + '" y2="' + by + '" stroke="var(--ink,#0f2029)" stroke-width="6" stroke-linecap="butt"/>';
    s += '<text x="' + bx + '" y="' + (by - 9) + '" font-weight="700">' + label + '</text>';
    s += '<text x="' + (bx + barMm * u + 8) + '" y="' + (by + 4) + '">' + fmt(barMm) + ' mm</text>';
    s += "</svg>";
    return s;
  }

  function unitSelect(id, sel) {
    var h = '<select id="' + id + '" aria-label="unit">';
    UNITS.forEach(function (u) { h += '<option value="' + u + '"' + (u === sel ? " selected" : "") + ">" + u + "</option>"; });
    return h + "</select>";
  }

  function make(startTab) {
    return {
      title: UI.title,
      mount: function (el, ctx) {
        injectCss();
        var t = function (o) { return ctx.t(o); };
        var uid = "mg" + Math.floor(Math.random() * 1e6);
        var st = { tab: startTab || "calc" };
        el.classList.add("w-magnification");
        el.innerHTML = '<div class="mg-tabs" role="tablist"></div><div class="mg-body"></div>';
        var tabs = el.querySelector(".mg-tabs"), body = el.querySelector(".mg-body");

        function renderTabs() {
          tabs.innerHTML = "";
          [["calc", UI.tCalc], ["bar", UI.tBar], ["prac", UI.tPrac]].forEach(function (d) {
            var b = document.createElement("button");
            b.type = "button"; b.className = "mg-tab"; b.setAttribute("role", "tab");
            b.setAttribute("aria-selected", st.tab === d[0] ? "true" : "false");
            b.textContent = t(d[1]);
            b.addEventListener("click", function () { st.tab = d[0]; render(); });
            tabs.appendChild(b);
          });
        }

        /* ---------- Calculator ---------- */
        var calc = { solve: "M", I: "36", Iu: "mm", A: "12", Au: "µm", M: "3000", Ou: "µm" };
        function renderCalc() {
          var h = '<div class="mg-formula"><svg viewBox="0 0 100 86" aria-hidden="true"><path d="M50 4 L96 80 L4 80 Z"/><line x1="12" y1="42" x2="88" y2="42"/><line x1="50" y1="42" x2="50" y2="80"/><text x="50" y="34" text-anchor="middle">I</text><text x="28" y="68" text-anchor="middle">A</text><text x="72" y="68" text-anchor="middle">M</text></svg><div><strong>' + t(UI.formula) + '</strong><div class="mg-small">I = A × M &nbsp;·&nbsp; A = I ÷ M</div><div class="mg-small">' + t(UI.formula2) + "</div></div></div>";
          h += '<div class="mg-row" role="group" aria-label="' + t(UI.solveFor) + '"><span class="mg-lab">' + t(UI.solveFor) + "</span>";
          [["M", UI.sM], ["A", UI.sA], ["I", UI.sI]].forEach(function (d) { h += '<button type="button" class="mg-opt" data-solve="' + d[0] + '" aria-pressed="' + (calc.solve === d[0]) + '">' + t(d[1]) + "</button>"; });
          h += "</div>";
          h += '<div class="mg-row"><label for="' + uid + 'I">' + t(UI.imgSize) + '</label><input type="number" id="' + uid + 'I" step="any" min="0" inputmode="decimal" value="' + calc.I + '">' + unitSelect(uid + "Iu", calc.Iu) + "</div>";
          h += '<div class="mg-row"><label for="' + uid + 'A">' + t(UI.actSize) + '</label><input type="number" id="' + uid + 'A" step="any" min="0" inputmode="decimal" value="' + calc.A + '">' + unitSelect(uid + "Au", calc.Au) + "</div>";
          h += '<div class="mg-row"><label for="' + uid + 'M">' + t(UI.magn) + '</label><span>×</span><input type="number" id="' + uid + 'M" step="any" min="0" inputmode="decimal" value="' + calc.M + '"></div>';
          h += '<div class="mg-small" id="' + uid + 'hint"></div><div class="mg-out" aria-live="polite" id="' + uid + 'out"></div>';
          body.innerHTML = h;
          body.querySelectorAll("button[data-solve]").forEach(function (b) {
            b.addEventListener("click", function () { calc.solve = b.getAttribute("data-solve"); renderCalc(); });
          });
          var gI = body.querySelector("#" + uid + "I"), gA = body.querySelector("#" + uid + "A"), gM = body.querySelector("#" + uid + "M");
          var uI = body.querySelector("#" + uid + "Iu"), uA = body.querySelector("#" + uid + "Au");
          function sync() { calc.I = gI.value; calc.A = gA.value; calc.M = gM.value; calc.Iu = uI.value; calc.Au = uA.value; compute(); }
          [gI, gA, gM, uI, uA].forEach(function (n) { n.addEventListener("input", sync); n.addEventListener("change", sync); });
          // which field is the answer?
          if (calc.solve === "M") { gM.disabled = true; gM.value = ""; }
          if (calc.solve === "A") { gA.disabled = true; gA.value = ""; }
          if (calc.solve === "I") { gI.disabled = true; gI.value = ""; }
          compute();
        }

        function compute() {
          var out = body.querySelector("#" + uid + "out"); if (!out) return;
          var hint = body.querySelector("#" + uid + "hint");
          var I = parseFloat(calc.I), A = parseFloat(calc.A), M = parseFloat(calc.M), s = calc.solve;
          var need = s === "M" ? [I, A] : s === "A" ? [I, M] : [A, M];
          if (hint) hint.textContent = "";
          if (need.some(function (v) { return !(v > 0) || !isFinite(v); })) { out.innerHTML = '<span class="mg-small">' + t(UI.enterPos) + "</span>"; return; }
          var inm = I * F[calc.Iu], anm = A * F[calc.Au], steps = [], res = "";
          var Ou, v;
          if (s === "M") {
            var Ic = inm / F[calc.Au];
            var mval = inm / anm;
            steps.push(calc.Iu === calc.Au ? fill(t(UI.sameUnit), { u: calc.Au }) : fill(t(UI.convImg), { I: fmt(I), Iu: calc.Iu, Ic: fmt(Ic), Au: calc.Au }));
            steps.push(fill(t(UI.stepM), { Ic: fmt(Ic), A: fmt(A), M: fmt(mval) }));
            res = fill(t(UI.resM), { M: fmt(mval) });
          } else if (s === "A") {
            Ou = calc.Au; // answer unit = unit selected on the actual-size row
            var Ic2 = inm / F[Ou], aval = Ic2 / M;
            steps.push(calc.Iu === Ou ? fill(t(UI.sameUnit), { u: Ou }) : fill(t(UI.convImgO), { I: fmt(I), Iu: calc.Iu, Ic: fmt(Ic2), Ou: Ou }));
            steps.push(fill(t(UI.stepA), { Ic: fmt(Ic2), M: fmt(M), R: fmt(aval), Ou: Ou }));
            res = fill(t(UI.resA), { R: fmt(aval), Ou: Ou });
          } else {
            Ou = calc.Iu;
            var rnm = anm * M, rc = rnm / F[calc.Au];
            steps.push(fill(t(UI.stepI), { A: fmt(A), Au: calc.Au, M: fmt(M), Rc: fmt(rc) }));
            v = rnm / F[Ou];
            if (Ou !== calc.Au) steps.push(fill(t(UI.convO), { Rc: fmt(rc), Au: calc.Au, R: fmt(v), Ou: Ou }));
            res = fill(t(UI.resI), { R: fmt(v), Ou: Ou });
          }
          if (hint && s !== "M") hint.textContent = t(UI.answerUnit) + " → " + (s === "A" ? calc.Au : calc.Iu);
          out.innerHTML = "<strong>" + t(UI.working) + "</strong><ol>" + steps.map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ol><p class="mg-res">' + res + "</p>";
        }

        /* ---------- Scale bar ---------- */
        var bar = { b: "5", bu: "µm", bl: 25, sl: 38 };
        function renderBar() {
          var h = '<div class="mg-row"><label for="' + uid + 'bb">' + t(UI.barLabel) + '</label><select id="' + uid + 'bb" aria-label="' + t(UI.barLabel) + '">';
          [["1", "µm"], ["2", "µm"], ["5", "µm"], ["10", "µm"], ["500", "nm"], ["200", "nm"], ["100", "nm"], ["50", "nm"]].forEach(function (p) { h += '<option value="' + p[0] + "|" + p[1] + '"' + (p[0] === bar.b && p[1] === bar.bu ? " selected" : "") + ">" + p[0] + " " + p[1] + "</option>"; });
          h += "</select></div>";
          h += '<div class="mg-row"><label for="' + uid + 'bl">' + t(UI.barLen) + '</label><input type="range" id="' + uid + 'bl" min="5" max="60" step="1" value="' + bar.bl + '"><output id="' + uid + 'blo">' + bar.bl + "</output></div>";
          h += '<div class="mg-row"><label for="' + uid + 'sl">' + t(UI.cellLen) + '</label><input type="range" id="' + uid + 'sl" min="5" max="100" step="1" value="' + bar.sl + '"><output id="' + uid + 'slo">' + bar.sl + "</output></div>";
          h += '<div id="' + uid + 'pic"></div><p class="mg-small">' + t(UI.barNote) + '</p><div class="mg-out" aria-live="polite" id="' + uid + 'bout"></div>';
          body.innerHTML = h;
          var sb = body.querySelector("#" + uid + "bb"), rl = body.querySelector("#" + uid + "bl"), rs = body.querySelector("#" + uid + "sl");
          function upd() {
            var p = sb.value.split("|"); bar.b = p[0]; bar.bu = p[1]; bar.bl = +rl.value; bar.sl = +rs.value;
            body.querySelector("#" + uid + "blo").textContent = bar.bl + " mm"; body.querySelector("#" + uid + "slo").textContent = bar.sl + " mm";
            body.querySelector("#" + uid + "pic").innerHTML = scaleSvg(t, bar.bl, bar.b + " " + bar.bu, bar.sl);
            var b = parseFloat(bar.b), blnm = bar.bl * F.mm, bnm = b * F[bar.bu];
            var Mv = blnm / bnm, blc = blnm / F[bar.bu];
            var Anm = bar.sl * F.mm / Mv, Ou = Anm >= 1000 ? "µm" : "nm", R = Anm / F[Ou];
            var R2 = bar.sl / bar.bl * b;
            var html = "<strong>" + t(UI.working) + "</strong><ol><li>" + fill(t(UI.barSteps1), { bl: fmt(bar.bl), b: fmt(b), bu: bar.bu, blc: fmt(blc), M: fmt(Mv) }) + "</li><li>" +
              fill(t(UI.barSteps2), { sl: fmt(bar.sl), M: fmt(Mv), Amm: fmt(bar.sl / Mv), R: fmt(R), Ou: Ou }) + "</li><li>" +
              fill(t(UI.barShort), { sl: bar.sl, bl: bar.bl, b: fmt(b), bu: bar.bu, R2: fmt(R2) }) + '</li></ol><p class="mg-res">' + fill(t(UI.resM), { M: fmt(Mv) }) + " &nbsp;·&nbsp; " + fill(t(UI.resA), { R: fmt(R), Ou: Ou }) + "</p>";
            body.querySelector("#" + uid + "bout").innerHTML = html;
          }
          [sb, rl, rs].forEach(function (n) { n.addEventListener("input", upd); n.addEventListener("change", upd); });
          upd();
        }

        /* ---------- Practice ---------- */
        var pr = { mode: "all", q: null, score: 0, tries: 0, shown: false, done: false };
        var MAGS_UM = [40, 100, 200, 400, 500, 1000, 1500, 2000, 2500, 5000, 10000];
        var MAGS_NM = [10000, 20000, 50000, 100000, 200000, 500000];
        var ACT_UM = [2, 4, 5, 8, 10, 12, 20, 25, 40, 50, 80, 100];
        var ACT_NM = [20, 25, 40, 50, 80, 100, 120, 200];

        function genBasic(kind) {
          for (var i = 0; i < 400; i++) {
            var inUm = Math.random() < 0.6, u = inUm ? "µm" : "nm";
            var a = rnd(inUm ? ACT_UM : ACT_NM), M = rnd(inUm ? MAGS_UM : MAGS_NM);
            var Imm = a * F[u] * M / F.mm;
            if (Imm < 8 || Imm > 160 || !nice(Imm, 1)) continue;
            return basicQ(kind, a, u, M, Imm);
          }
          return basicQ(kind, 10, "µm", 1000, 10);
        }
        function basicQ(kind, a, u, M, Imm) {
          var q = { kind: kind };
          var anm = a * F[u];
          if (kind === "M") {
            q.text = fill(t(UI.qM), { a: fmt(a), u: u, I: fmt(Imm) });
            q.answerM = M;
            var Ic = Imm * F.mm / F[u];
            q.steps = [
              T("Same unit: image {I} mm = {Ic} {u} (1 mm = 1000 µm" + (u === "nm" ? ", 1 µm = 1000 nm" : "") + ").", "単位をそろえる：像 {I} mm = {Ic} {u}（1 mm = 1000 µm" + (u === "nm" ? "、1 µm = 1000 nm" : "") + "）。", "統一單位：影像 {I} mm = {Ic} {u}（1 mm = 1000 µm" + (u === "nm" ? "，1 µm = 1000 nm" : "") + "）。"),
              T("M = I ÷ A = {Ic} ÷ {a} = {M}", "M = I ÷ A = {Ic} ÷ {a} = {M}", "M = I ÷ A = {Ic} ÷ {a} = {M}"),
              T("Magnification = ×{M}", "倍率 = ×{M}", "放大率 = ×{M}")
            ].map(function (o) { return fill(t(o), { I: fmt(Imm), Ic: fmt(Ic), u: u, a: fmt(a), M: fmt(M) }); });
            q.correct = "×" + fmt(M);
          } else if (kind === "A") {
            q.text = fill(t(UI.qA), { M: fmt(M), I: fmt(Imm) });
            q.answerNm = anm;
            var Amm = Imm / M;
            q.steps = [
              T("A = I ÷ M = {I} mm ÷ {M} = {Amm} mm", "A = I ÷ M = {I} mm ÷ {M} = {Amm} mm", "A = I ÷ M = {I} mm ÷ {M} = {Amm} mm"),
              T("Convert: {Amm} mm = {a} {u} (× 1000 for each step down: mm → µm → nm)", "換算：{Amm} mm = {a} {u}（mm → µm → nm と進むごとに×1000）", "換算：{Amm} mm = {a} {u}（mm → µm → nm 每步 ×1000）"),
              T("Actual size = {a} {u}", "実際の大きさ = {a} {u}", "實際大小 = {a} {u}")
            ].map(function (o) { return fill(t(o), { I: fmt(Imm), M: fmt(M), Amm: fmt(Amm), a: fmt(a), u: u }); });
            q.correct = fmt(a) + " " + u;
          } else {
            q.text = fill(t(UI.qI), { a: fmt(a), u: u, M: fmt(M) });
            q.answerNm = Imm * F.mm;
            var Ru = a * M;
            q.steps = [
              T("I = A × M = {a} {u} × {M} = {Ru} {u}", "I = A × M = {a} {u} × {M} = {Ru} {u}", "I = A × M = {a} {u} × {M} = {Ru} {u}"),
              T("Convert to mm: {Ru} {u} = {I} mm", "mmに換算：{Ru} {u} = {I} mm", "換算成 mm：{Ru} {u} = {I} mm"),
              T("Image size = {I} mm", "像の大きさ = {I} mm", "影像大小 = {I} mm")
            ].map(function (o) { return fill(t(o), { a: fmt(a), u: u, M: fmt(M), Ru: fmt(Ru), I: fmt(Imm) }); });
            q.correct = fmt(Imm) + " mm";
          }
          q.unitDefault = kind === "I" ? "mm" : u;
          return q;
        }
        function genBar(kind) {
          for (var i = 0; i < 600; i++) {
            var inUm = Math.random() < 0.6, bu = inUm ? "µm" : "nm";
            var b = rnd(inUm ? [1, 2, 5, 10] : [50, 100, 200, 500]);
            var bl = rnd([10, 12, 15, 20, 25, 30, 40]);
            var sl = rnd([8, 10, 12, 15, 16, 20, 24, 25, 30, 32, 36, 40, 45, 48, 50, 60, 75, 80]);
            if (sl === bl) continue;
            var A = sl * b / bl;
            if (!nice(A, 2) || A <= 0) continue;
            return barQ(kind, b, bu, bl, sl, A);
          }
          return barQ(kind, 5, "µm", 25, 38, 7.6);
        }
        function barQ(kind, b, bu, bl, sl, A) {
          var q = { kind: kind, svg: scaleSvg(t, bl, b + " " + bu, sl) };
          var Mv = bl * F.mm / (b * F[bu]);
          var blc = bl * F.mm / F[bu];
          var s1 = fill(t(UI.barSteps1), { bl: fmt(bl), b: fmt(b), bu: bu, blc: fmt(blc), M: fmt(Mv) });
          if (kind === "SM") {
            q.text = fill(t(UI.qSM), { b: fmt(b), bu: bu, bl: fmt(bl) });
            q.answerM = Mv; q.steps = [s1]; q.correct = "×" + fmt(Mv);
          } else {
            q.text = fill(t(UI.qS), { b: fmt(b), bu: bu, bl: fmt(bl), sl: fmt(sl) });
            q.answerNm = A * F[bu];
            q.steps = [s1, fill(t(UI.barSteps2), { sl: fmt(sl), M: fmt(Mv), Amm: fmt(sl / Mv), R: fmt(A), Ou: bu }), fill(t(UI.barShort), { sl: sl, bl: bl, b: fmt(b), bu: bu, R2: fmt(A) })];
            q.correct = fmt(A) + " " + bu;
          }
          q.unitDefault = bu;
          return q;
        }
        function newQ() {
          var pool = pr.mode === "bar" ? ["S", "SM"] : pr.mode === "basic" ? ["M", "A", "I"] : ["M", "A", "I", "S", "SM"];
          var k = rnd(pool);
          pr.q = (k === "S" || k === "SM") ? genBar(k) : genBasic(k);
          pr.shown = false; pr.done = false;
        }
        function renderPrac() {
          if (!pr.q) newQ();
          var q = pr.q, isMag = q.answerM !== undefined;
          var h = '<div class="mg-row" role="group" aria-label="' + t(UI.hardMode) + '"><span class="mg-lab">' + t(UI.hardMode) + "</span>";
          [["all", UI.qAll], ["basic", UI.qBasic], ["bar", UI.qBar]].forEach(function (d) { h += '<button type="button" class="mg-opt" data-mode="' + d[0] + '" aria-pressed="' + (pr.mode === d[0]) + '">' + t(d[1]) + "</button>"; });
          h += '<span class="mg-score" id="' + uid + 'sc">' + t(UI.score) + ": " + pr.score + " / " + pr.tries + "</span></div>";
          h += (q.svg ? q.svg : "") + '<div class="mg-q">' + q.text + "</div>";
          h += '<div class="mg-row"><label for="' + uid + 'ans">' + t(UI.yourAns) + "</label>" + (isMag ? "<span>×</span>" : "") + '<input type="number" id="' + uid + 'ans" step="any" inputmode="decimal">' + (isMag ? '<span class="mg-small">' + t(UI.aIsMag) + "</span>" : unitSelect(uid + "au", q.unitDefault)) + "</div>";
          h += '<div class="mg-row"><button type="button" class="mg-btn primary" id="' + uid + 'chk">' + t(UI.check) + '</button><button type="button" class="mg-btn" id="' + uid + 'show">' + t(UI.show) + '</button><button type="button" class="mg-btn" id="' + uid + 'new">' + t(UI.newQ) + "</button></div>";
          h += '<div class="mg-fb" id="' + uid + 'fb" aria-live="polite"></div><div id="' + uid + 'sol"></div>';
          body.innerHTML = h;
          body.querySelectorAll("button[data-mode]").forEach(function (b) { b.addEventListener("click", function () { pr.mode = b.getAttribute("data-mode"); newQ(); renderPrac(); }); });
          var ans = body.querySelector("#" + uid + "ans"), fb = body.querySelector("#" + uid + "fb"), sol = body.querySelector("#" + uid + "sol");
          function showSol() {
            pr.shown = true;
            sol.innerHTML = '<div class="mg-out"><strong>' + t(UI.stepsHead) + "</strong><ol>" + q.steps.map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ol><p class="mg-res">' + fill(t(UI.correctIs), { x: q.correct }) + "</p></div>";
          }
          function check() {
            var v = parseFloat(ans.value);
            if (!isFinite(v)) { fb.innerHTML = '<span class="mg-bad">' + t(UI.enterNum) + "</span>"; return; }
            var ok;
            if (isMag) ok = Math.abs(v - q.answerM) <= 0.01 * q.answerM;
            else { var u = body.querySelector("#" + uid + "au").value; ok = Math.abs(v * F[u] - q.answerNm) <= 0.01 * q.answerNm; }
            if (!pr.done) { pr.tries++; if (ok) pr.score++; pr.done = ok || pr.done; }
            body.querySelector("#" + uid + "sc").textContent = t(UI.score) + ": " + pr.score + " / " + pr.tries;
            fb.innerHTML = ok ? '<span class="mg-good">✓ ' + t(UI.right) + "</span>" : '<span class="mg-bad">✗ ' + t(UI.wrong) + "</span>";
            if (ok) showSol();
          }
          body.querySelector("#" + uid + "chk").addEventListener("click", check);
          ans.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
          body.querySelector("#" + uid + "show").addEventListener("click", showSol);
          body.querySelector("#" + uid + "new").addEventListener("click", function () { newQ(); renderPrac(); });
        }

        function render() {
          renderTabs();
          if (st.tab === "bar") renderBar(); else if (st.tab === "prac") renderPrac(); else renderCalc();
        }
        render();
        return function () { el.classList.remove("w-magnification"); };
      }
    };
  }

  if (typeof IB !== "undefined" && IB.registerWidget) IB.registerWidget("magnification", make("calc"));
})();
