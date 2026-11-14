/* Widgets in this file (B3.2):
   "heart-cycle"      cardiac cycle, left side of the heart + pressure graph      (B3.2.16, AHL)
   "heart-structure"  tap-to-label heart in frontal plane, quiz, trace blood flow  (B3.2.15, AHL)
   "vessel-compare"   artery / capillary / vein cross-sections + identify practice (B3.2.1-3, B3.2.5)
*/
(function () {
  "use strict";
  var STYLE_ID = "w-heart-cycle-style";

  var CSS = [
    ".hc-root{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029);font-size:.95rem}",
    ".hc-root *{box-sizing:border-box}",
    ".hc-root svg{display:block;width:100%;height:auto}",
    ".hc-row{display:flex;flex-wrap:wrap;gap:.4rem;margin:0}",
    ".hc-info .hc-row{margin-top:.4rem}",
    ".hc-root [hidden]{display:none!important}",
    ".hc-stages{display:grid;grid-template-columns:repeat(3,1fr);gap:.3rem}",
    ".hc-stages .hc-b{padding:.25rem .3rem;font-size:.82rem;line-height:1.2}",
    ".hc-tabs{display:flex;gap:.3rem;overflow-x:auto;margin-bottom:.5rem}",
    ".hc-tabs .hc-b{flex:none}",
    "@media(max-width:899px){.hc-chips{flex-wrap:nowrap;overflow-x:auto;padding-bottom:.2rem}.hc-chips .hc-chip{flex:none}}",
    ".hc-root details summary{cursor:pointer;font-weight:700;font-size:.88rem;min-height:2.2rem;display:flex;align-items:center}",
    ".hc-b{font:inherit;font-weight:600;min-height:2.5rem;padding:.35rem .8rem;border-radius:var(--radius,6px);border:1px solid var(--line,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".hc-b:hover{background:var(--surface-2,#e3eaee)}",
    ".hc-b[aria-pressed=true],.hc-b[aria-selected=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".hc-b:focus-visible,.hc-root input:focus-visible,.hc-hs:focus-visible,.hc-chip:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".hc-chip{font:inherit;font-size:.85rem;min-height:2.25rem;padding:.2rem .6rem;border-radius:999px;border:1px solid var(--line,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".hc-chip[aria-pressed=true]{background:var(--accent-soft,#e0e7fb);border-color:var(--accent,#2547c7);font-weight:700}",
    ".hc-art{background:var(--surface-2,#e3eaee);border-radius:var(--radius-lg,12px);padding:.4rem}",
    ".hc-info{background:var(--surface-2,#e3eaee);border-left:4px solid var(--accent,#2547c7);border-radius:var(--radius,6px);padding:.45rem .7rem;font-size:.88rem;line-height:1.4;margin:0}",
    ".hc-info p{margin:.25rem 0 0}",
    ".hc-info.good{border-left-color:var(--good,#17703f);background:var(--good-soft,#dcf2e4)}",
    ".hc-info.bad{border-left-color:var(--bad,#b3261e);background:var(--bad-soft,#fbe0de)}",
    ".hc-tag{color:var(--muted,#4d626d);font-size:.85rem}",
    ".hc-al{display:inline-block;margin-left:.4rem;padding:0 .4rem;border-radius:3px;background:var(--ahl,#ffcf3a);color:var(--ahl-ink,#2a2000);font-size:.7rem;font-weight:800;letter-spacing:.04em;vertical-align:middle}",
    ".hc-note{color:var(--muted,#4d626d);font-size:.8rem;margin:.3rem 0 0}",
    ".hc-hs{cursor:pointer}",
    ".hc-hs circle{fill:var(--surface,#fff);stroke:var(--accent,#2547c7);stroke-width:2}",
    ".hc-hs text{fill:var(--ink,#0f2029);font-size:13px;font-weight:700;text-anchor:middle;pointer-events:none}",
    ".hc-hs.sel circle{fill:var(--accent,#2547c7)}",
    ".hc-hs.sel text{fill:var(--on-accent,#fff)}",
    ".hc-hs.ok circle{fill:var(--good,#17703f);stroke:var(--good,#17703f)}",
    ".hc-hs.ok text,.hc-hs.no text{fill:#fff}",
    ".hc-hs.no circle{fill:var(--bad,#b3261e);stroke:var(--bad,#b3261e)}",
    ".hc-root input[type=range]{width:100%;accent-color:var(--accent,#2547c7);min-height:2rem}",
    /* art */
    ".hc-root .tx{fill:var(--ink,#0f2029);font-size:12px}",
    ".hc-root .tm{fill:var(--muted,#4d626d);font-size:12px}",
    ".hc-root .dx{fill:var(--c-nitrogen,#2d5cdd);fill-opacity:.28;stroke:var(--c-nitrogen,#2d5cdd);stroke-width:1.6}",
    ".hc-root .ox{fill:var(--c-oxygen,#d33a2c);fill-opacity:.28;stroke:var(--c-oxygen,#d33a2c);stroke-width:1.6}",
    ".hc-root .mus{fill:var(--theme-b-soft,#f8dfe7);stroke:var(--ink,#0f2029);stroke-width:1.4}",
    ".hc-root .vl{stroke:var(--ink,#0f2029);stroke-width:3;stroke-linecap:round;fill:none}",
    ".hc-root .cor{fill:none;stroke:var(--c-oxygen,#d33a2c);stroke-width:2.6;stroke-linecap:round}",
    ".hc-root .sa{fill:var(--ahl,#ffcf3a);stroke:var(--ink,#0f2029);stroke-width:1.2}",
    ".hc-root .arr{stroke:var(--ink,#0f2029);stroke-width:2;fill:none}",
    ".hc-root .arrf{fill:var(--ink,#0f2029)}",
    ".hc-root .gl{stroke:var(--line,#c3d0d7)}",
    ".hc-root .ax{stroke:var(--ink,#0f2029);stroke-width:1.2}",
    ".hc-root .c-ao{fill:none;stroke:var(--accent,#2547c7);stroke-width:2.8}",
    ".hc-root .c-lv{fill:none;stroke:var(--theme-b,#b82a56);stroke-width:2.8;stroke-dasharray:7 3}",
    ".hc-root .c-la{fill:none;stroke:var(--theme-a,#07756f);stroke-width:2.8;stroke-dasharray:2 3;stroke-linecap:round}",
    ".hc-root .band1{fill:var(--ahl-soft,#fff4c9);fill-opacity:.8}",
    ".hc-root .band2{fill:var(--accent-soft,#e0e7fb);fill-opacity:.8}",
    ".hc-root .band3{fill:var(--good-soft,#dcf2e4);fill-opacity:.8}",
    ".hc-root .cur{stroke:var(--ink,#0f2029);stroke-width:1.4;stroke-dasharray:4 3}",
    ".hc-root .sw{display:inline-block;width:1.6rem;height:0;border-top:3px solid;vertical-align:middle;margin-right:.3rem}",
    ".hc-root .hc-grid{font-variant-numeric:tabular-nums;font-size:.86rem;margin:0}",
    ".hc-root .hc-grid>div{margin:.15rem 0}",
    ".hc-root .st{font-weight:800}",
    ".hc-root .open{color:var(--good,#17703f)}",
    ".hc-root .closed{color:var(--bad,#b3261e)}",
    /* vessels */
    ".hc-root .vwall{fill:var(--theme-b-soft,#f8dfe7);stroke:var(--ink,#0f2029);stroke-width:1.2}",
    ".hc-root .vmus{fill:var(--theme-b,#b82a56);fill-opacity:.55;stroke:var(--ink,#0f2029);stroke-width:1}",
    ".hc-root .vel{fill:none;stroke:var(--c-sulfur,#c19a00);stroke-width:2;stroke-dasharray:5 3}",
    ".hc-root .vend{fill:var(--surface,#fff);stroke:var(--ink,#0f2029);stroke-width:1.2}",
    ".hc-root .vout{fill:var(--surface-2,#e3eaee);stroke:var(--ink,#0f2029);stroke-width:1}",
    ".hc-root .vlum{fill:var(--c-oxygen,#d33a2c);fill-opacity:.22}",
    ".hc-root .vlumv{fill:var(--c-nitrogen,#2d5cdd);fill-opacity:.22}",
    ".hc-root .vrbc{fill:var(--c-oxygen,#d33a2c)}",
    ".hc-root table{width:100%;border-collapse:collapse;font-size:.84rem;margin:.2rem 0}",
    ".hc-root th,.hc-root td{text-align:left;padding:.25rem .4rem;border-bottom:1px solid var(--line,#c3d0d7);vertical-align:top}",
    "@media(prefers-reduced-motion:reduce){.hc-root *{transition:none!important;animation:none!important}}"
  ].join("\n");

  function ensureCss() {
    if (!document.getElementById(STYLE_ID)) {
      var st = document.createElement("style");
      st.id = STYLE_ID;
      st.textContent = CSS;
      document.head.appendChild(st);
    }
  }
  function mk(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function reduced() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  }

  /* ======================================================== heart-structure */
  var UI = {
    explore: { en: "Explore", ja: "調べる", zh: "探索" },
    quiz: { en: "Quiz me", ja: "クイズ", zh: "自我測驗" },
    trace: { en: "Trace the blood", ja: "血液の流れをたどる", zh: "追蹤血液流向" },
    hint: { en: "Tap a numbered circle (or a button below) to learn the form and function of that part.", ja: "番号の付いた丸（または下のボタン）をタップして、その部分の形と機能を学びましょう。", zh: "點選有編號的圓圈（或下面的按鈕），認識該部分的形態與功能。" },
    find: { en: "Tap the part: ", ja: "次の部分をタップ：", zh: "請點選這個部分：" },
    right: { en: "Correct!", ja: "正解です！", zh: "正確！" },
    wrong: { en: "Not quite. You tapped: ", ja: "違います。タップしたのは：", zh: "不太對。你點選的是：" },
    ans: { en: "The answer is: ", ja: "正解は：", zh: "答案是：" },
    score: { en: "Score", ja: "得点", zh: "得分" },
    done: { en: "Finished. Press Quiz me to try again.", ja: "終了です。もう一度挑戦するには「クイズ」を押してください。", zh: "完成了。按「自我測驗」可再試一次。" },
    next: { en: "Next", ja: "次へ", zh: "下一步" },
    prev: { en: "Back", ja: "戻る", zh: "上一步" },
    step: { en: "Step", ja: "ステップ", zh: "步驟" },
    colours: { en: "Frontal plane: the patient's right is on the left of the picture. Blue = deoxygenated blood, red = oxygenated (a convention). Schematic, not to scale.", ja: "前頭面：患者の右が図の左側です。青 = 酸素の少ない血液、赤 = 酸素の多い血液（慣例）。模式図で縮尺は正確ではありません。", zh: "冠狀面：病人的右側在圖的左邊。藍色 = 缺氧血，紅色 = 含氧血（慣例）。示意圖，並非按比例。" },
    pr: { en: "patient's right", ja: "患者の右", zh: "病人的右側" },
    pl: { en: "patient's left", ja: "患者の左", zh: "病人的左側" },
    fromBody: { en: "from body", ja: "体から", zh: "來自身體" },
    toLungs: { en: "to lungs", ja: "肺へ", zh: "往肺" },
    fromLungs: { en: "from lungs", ja: "肺から", zh: "來自肺" },
    toBody: { en: "to body", ja: "体へ", zh: "往身體" }
  };

  var HEART = [
    { x: 66, y: 62, k: "vc", name: { en: "Vena cava", ja: "大静脈", zh: "腔靜脈" },
      info: { en: "A large vein that brings deoxygenated blood from the body to the right atrium.", ja: "体から酸素の少ない血液を右心房へ運ぶ太い静脈です。", zh: "把缺氧血由身體運到右心房的大靜脈。" } },
    { x: 60, y: 168, k: "ra", name: { en: "Right atrium", ja: "右心房", zh: "右心房" },
      info: { en: "A thin-walled upper chamber. It receives blood from the vena cava and passes it to the right ventricle.", ja: "壁の薄い上の部屋です。大静脈から血液を受け取り、右心室へ送ります。", zh: "壁薄的上部腔室，接收來自腔靜脈的血液並傳給右心室。" } },
    { x: 100, y: 132, k: "sa", name: { en: "Pacemaker (sinoatrial node)", ja: "ペースメーカー（洞房結節）", zh: "起搏點（竇房結）" },
      info: { en: "A small patch of special cardiac muscle cells in the wall of the right atrium. It starts each heartbeat with a wave of electrical signals and sets the heart rate.", ja: "右心房の壁にある特殊な心筋細胞の小さな領域です。電気信号の波で各拍動を始め、心拍数を決めます。", zh: "右心房壁上一小片特化的心肌細胞，以電信號波啟動每次心跳，並決定心率。" } },
    { x: 86, y: 190, k: "rav", name: { en: "Right atrioventricular (AV) valve", ja: "右の房室弁", zh: "右房室瓣" },
      info: { en: "Between the right atrium and right ventricle. Opens as blood flows down into the ventricle. Closes when the ventricle contracts, so blood cannot flow back into the atrium.", ja: "右心房と右心室の間にあります。血液が心室へ流れるときは開き、心室が収縮すると閉じて、血液が心房へ逆流するのを防ぎます。", zh: "位於右心房與右心室之間。血液流入心室時張開；心室收縮時關閉，使血液不能倒流入心房。" } },
    { x: 80, y: 262, k: "rv", name: { en: "Right ventricle", ja: "右心室", zh: "右心室" },
      info: { en: "A lower chamber with a thick muscular wall. It pumps deoxygenated blood to the lungs, which are close by, so its wall is thinner than the left ventricle wall.", ja: "壁が厚く筋肉質の下の部屋です。酸素の少ない血液を近くの肺へ送るので、壁は左心室より薄くなっています。", zh: "壁厚而肌肉發達的下部腔室，把缺氧血泵到附近的肺，所以其壁比左心室壁薄。" } },
    { x: 123, y: 106, k: "pa", name: { en: "Pulmonary artery", ja: "肺動脈", zh: "肺動脈" },
      info: { en: "Carries deoxygenated blood from the right ventricle to the lungs. It is an artery because it carries blood away from the heart.", ja: "酸素の少ない血液を右心室から肺へ運びます。血液を心臓から運び出すので動脈です。", zh: "把缺氧血由右心室運到肺。它把血液運離心臟，所以是動脈。" } },
    { x: 123, y: 168, k: "psv", name: { en: "Semilunar valve (pulmonary)", ja: "半月弁（肺動脈）", zh: "半月瓣（肺動脈）" },
      info: { en: "At the start of the pulmonary artery. Opens when the right ventricle contracts. Closes when the ventricle relaxes, so blood cannot flow back into the ventricle.", ja: "肺動脈の始まりにあります。右心室が収縮すると開き、ゆるむと閉じて、血液が心室へ逆流するのを防ぎます。", zh: "位於肺動脈起始處。右心室收縮時張開；放鬆時關閉，使血液不能回流入心室。" } },
    { x: 153, y: 262, k: "sep", name: { en: "Septum", ja: "中隔", zh: "室間隔" },
      info: { en: "The muscular wall between the left and right sides of the heart. It keeps oxygenated and deoxygenated blood separate.", ja: "心臓の左側と右側の間にある筋肉質の壁です。酸素の多い血液と少ない血液を分けます。", zh: "心臟左右兩側之間的肌肉壁，使含氧血和缺氧血保持分開。" } },
    { x: 296, y: 152, k: "pv", name: { en: "Pulmonary veins", ja: "肺静脈", zh: "肺靜脈" },
      info: { en: "Carry oxygenated blood from the lungs to the left atrium. They are veins because they carry blood towards the heart.", ja: "酸素の多い血液を肺から左心房へ運びます。血液を心臓へ運ぶので静脈です。", zh: "把含氧血由肺運到左心房。它們把血液運向心臟，所以是靜脈。" } },
    { x: 234, y: 156, k: "la", name: { en: "Left atrium", ja: "左心房", zh: "左心房" },
      info: { en: "A thin-walled upper chamber. It receives oxygenated blood from the pulmonary veins and passes it to the left ventricle.", ja: "壁の薄い上の部屋です。肺静脈から酸素の多い血液を受け取り、左心室へ送ります。", zh: "壁薄的上部腔室，接收來自肺靜脈的含氧血並傳給左心室。" } },
    { x: 222, y: 190, k: "lav", name: { en: "Left atrioventricular (AV) valve", ja: "左の房室弁", zh: "左房室瓣" },
      info: { en: "Between the left atrium and left ventricle. Opens as blood flows into the ventricle. Closes when the ventricle contracts, preventing backflow into the atrium.", ja: "左心房と左心室の間にあります。血液が心室へ流れるときは開き、心室が収縮すると閉じて、心房への逆流を防ぎます。", zh: "位於左心房與左心室之間。血液流入心室時張開；心室收縮時關閉，防止倒流入心房。" } },
    { x: 212, y: 262, k: "lv", name: { en: "Left ventricle", ja: "左心室", zh: "左心室" },
      info: { en: "The lower chamber with the thickest muscular wall. It pumps blood at high pressure to the whole body, so it needs more muscle than the right ventricle.", ja: "最も厚い筋肉の壁を持つ下の部屋です。全身へ高い圧力で血液を送るので、右心室より多くの筋肉が必要です。", zh: "肌肉壁最厚的下部腔室，以高壓把血液泵到全身，所以比右心室需要更多肌肉。" } },
    { x: 182, y: 168, k: "asv", name: { en: "Semilunar valve (aortic)", ja: "半月弁（大動脈）", zh: "半月瓣（主動脈）" },
      info: { en: "At the start of the aorta. Opens when the left ventricle contracts. Closes when the ventricle relaxes, so blood cannot flow back into the ventricle.", ja: "大動脈の始まりにあります。左心室が収縮すると開き、ゆるむと閉じて、血液が心室へ逆流するのを防ぎます。", zh: "位於主動脈起始處。左心室收縮時張開；放鬆時關閉，使血液不能回流入心室。" } },
    { x: 182, y: 100, k: "ao", name: { en: "Aorta", ja: "大動脈", zh: "主動脈" },
      info: { en: "The largest artery. It carries oxygenated blood at high pressure from the left ventricle to the body. Its wall has muscle and elastic tissue.", ja: "最大の動脈です。酸素の多い血液を高い圧力で左心室から体へ運びます。壁には筋肉と弾性組織があります。", zh: "最大的動脈，把含氧血以高壓由左心室運到全身。其壁含肌肉和彈性組織。" } },
    { x: 250, y: 212, k: "cor", name: { en: "Coronary vessels", ja: "冠血管", zh: "冠狀血管" },
      info: { en: "Arteries on the surface of the heart (they branch from the base of the aorta). They supply the cardiac muscle with oxygen and nutrients. If blocked, part of the heart muscle is starved of oxygen.", ja: "心臓の表面にある動脈です（大動脈の基部から枝分かれします）。心筋に酸素と栄養分を供給します。ふさがると、心筋の一部が酸素不足になります。", zh: "心臟表面的動脈（由主動脈基部分支），為心肌提供氧氣和營養物。若堵塞，部分心肌會缺氧。" } },
    { x: 268, y: 296, k: "mus", name: { en: "Cardiac muscle (wall)", ja: "心筋（壁）", zh: "心肌（壁）" },
      info: { en: "The walls are made of cardiac muscle, which contracts regularly and does not tire. The left ventricle wall is the thickest. Contraction of the muscle squeezes the blood out.", ja: "壁は心筋でできており、規則的に収縮し、疲れません。左心室の壁が最も厚くなっています。筋肉の収縮が血液を絞り出します。", zh: "壁由心肌組成，有規律地收縮而不疲勞。左心室壁最厚。肌肉收縮把血液擠出。" } }
  ];
  // steps for "trace the blood": k = key of part to highlight (or null)
  var TRACE = [
    { k: "vc", t: { en: "Deoxygenated blood from the body enters through the vena cava.", ja: "体からの酸素の少ない血液が、大静脈を通って入ります。", zh: "來自身體的缺氧血經腔靜脈進入。" } },
    { k: "ra", t: { en: "It collects in the right atrium.", ja: "右心房にたまります。", zh: "血液聚集在右心房。" } },
    { k: "rav", t: { en: "It passes through the right AV valve.", ja: "右の房室弁を通ります。", zh: "經過右房室瓣。" } },
    { k: "rv", t: { en: "The right ventricle contracts and pumps it out.", ja: "右心室が収縮して血液を送り出します。", zh: "右心室收縮，把血液泵出。" } },
    { k: "psv", t: { en: "Through the pulmonary semilunar valve...", ja: "肺動脈の半月弁を通って…", zh: "經過肺動脈半月瓣……" } },
    { k: "pa", t: { en: "...into the pulmonary artery, to the lungs, where it picks up oxygen.", ja: "…肺動脈へ入り、肺へ行って酸素を受け取ります。", zh: "……進入肺動脈，前往肺吸收氧氣。" } },
    { k: "pv", t: { en: "Oxygenated blood returns from the lungs in the pulmonary veins.", ja: "酸素の多い血液が、肺静脈を通って肺から戻ります。", zh: "含氧血經肺靜脈由肺返回。" } },
    { k: "la", t: { en: "It collects in the left atrium.", ja: "左心房にたまります。", zh: "血液聚集在左心房。" } },
    { k: "lav", t: { en: "It passes through the left AV valve.", ja: "左の房室弁を通ります。", zh: "經過左房室瓣。" } },
    { k: "lv", t: { en: "The thick-walled left ventricle contracts and pumps it out at high pressure.", ja: "壁の厚い左心室が収縮し、高い圧力で血液を送り出します。", zh: "壁厚的左心室收縮，以高壓把血液泵出。" } },
    { k: "asv", t: { en: "Through the aortic semilunar valve...", ja: "大動脈の半月弁を通って…", zh: "經過主動脈半月瓣……" } },
    { k: "ao", t: { en: "...into the aorta, and on to the body. Then it returns to the vena cava.", ja: "…大動脈へ入り、体へ向かいます。その後、大静脈へ戻ります。", zh: "……進入主動脈，再前往身體，然後回到腔靜脈。" } }
  ];

  function heartArt(lang) {
    var s = "";
    var T = function (o) { return o[lang] || o.en; };
    // great vessels (drawn first)
    s += '<rect class="dx" x="57" y="26" width="18" height="102"/>';                       // vena cava
    s += '<path class="dx" style="fill:none;stroke-width:14;stroke-opacity:.45" d="M123,190 V82 M123,82 L90,52 M123,82 L156,52"/>'; // PA
    s += '<path class="ox" style="fill:none;stroke-width:16;stroke-opacity:.45" d="M182,190 V96 Q182,48 226,48 H270"/>';            // aorta
    s += '<rect class="ox" x="272" y="130" width="44" height="14"/><rect class="ox" x="272" y="162" width="44" height="14"/>';         // pulm veins
    // atria
    s += '<rect class="dx" x="36" y="122" width="76" height="68" rx="24"/>';
    s += '<rect class="ox" x="196" y="118" width="76" height="72" rx="24"/>';
    // ventricles: muscle
    s += '<path class="mus" d="M30,190 H282 V268 Q282,340 192,340 H122 Q30,340 30,252 Z"/>';
    s += '<path class="dx" d="M42,190 H138 V300 Q138,328 108,328 H90 Q42,318 42,262 Z"/>';
    s += '<path class="ox" d="M168,190 H252 V268 Q252,308 212,308 H190 Q168,300 168,252 Z"/>';
    // vessel stubs re-drawn on top of ventricle top edge for continuity
    // valves
    s += '<path class="vl" d="M44,190 L66,212 M130,190 L108,212"/><path class="vl" d="M172,190 L194,212 M250,190 L228,212"/>';
    s += '<path class="vl" style="stroke-width:2.2" d="M114,180 L123,189 L132,180"/><path class="vl" style="stroke-width:2.2" d="M173,180 L182,189 L191,180"/>';
    // coronary vessels
    s += '<path class="cor" d="M192,178 C232,170 260,200 266,244"/><path class="cor" d="M172,180 C152,200 120,216 90,244"/>';
    // SA node
    s += '<circle class="sa" cx="100" cy="132" r="6"/>';
    // labels
    s += '<text class="tm" x="40" y="18">' + T(UI.fromBody) + '</text>';
    s += '<text class="tm" x="58" y="42" style="display:none"></text>';
    s += '<text class="tm" x="168" y="44" text-anchor="middle">' + T(UI.toLungs) + '</text>';
    s += '<text class="tm" x="296" y="42" text-anchor="end">' + T(UI.toBody) + ' →</text>';
    s += '<text class="tm" x="316" y="124" text-anchor="end">' + T(UI.fromLungs) + '</text>';
    s += '<text class="tm" x="6" y="354">← ' + T(UI.pr) + '</text>';
    s += '<text class="tm" x="334" y="354" text-anchor="end">' + T(UI.pl) + ' →</text>';
    return s;
  }

  function mountHeartStructure(el, ctx) {
    ensureCss();
    var t = ctx.t, lang = ctx.lang;
    var root = mk("div", "hc-root"); el.appendChild(root);
    var mode = "explore", sel = -1, order = [], qi = 0, score = 0, asked = 0, answered = false, step = 0;

    var bar = mk("div", "hc-row");
    var bE = mk("button", "hc-b", t(UI.explore)), bQ = mk("button", "hc-b", t(UI.quiz)), bT = mk("button", "hc-b", t(UI.trace));
    [bE, bQ, bT].forEach(function (b) { b.type = "button"; bar.appendChild(b); });
    var art = mk("div", "hc-art");
    var chips = mk("div", "hc-row");
    var info = mk("div", "hc-info"); info.setAttribute("aria-live", "polite");
    var note = mk("p", "hc-note", t(UI.colours));
    chips.className = "hc-row hc-chips"; note.className = "hc-note wl-legend";
    var wl = mk("div", "wl"), stageCol = mk("div", "wl-stage"), panel = mk("div", "wl-panel");
    stageCol.appendChild(art); stageCol.appendChild(note);
    panel.appendChild(bar); panel.appendChild(chips); panel.appendChild(info);
    wl.appendChild(stageCol); wl.appendChild(panel); root.appendChild(wl);

    var svg = '<svg viewBox="0 0 340 362" role="group" aria-label="' + t({ en: "Heart in the frontal plane", ja: "前頭面の心臓", zh: "冠狀面的心臟" }) + '">' + heartArt(lang);
    HEART.forEach(function (p, i) {
      svg += '<g class="hc-hs" data-i="' + i + '" tabindex="0" role="button" aria-label="' + (i + 1) + '"><circle cx="' + p.x + '" cy="' + p.y + '" r="12"/><text x="' + p.x + '" y="' + (p.y + 4.5) + '">' + (i + 1) + '</text></g>';
    });
    art.innerHTML = svg + "</svg>";
    var hs = art.querySelectorAll(".hc-hs");
    var chipEls = HEART.map(function (p, i) {
      var c = mk("button", "hc-chip", (i + 1) + ". " + t(p.name));
      c.type = "button"; c.setAttribute("data-i", i); c.setAttribute("aria-pressed", "false");
      chips.appendChild(c); return c;
    });
    function idx(k) { for (var i = 0; i < HEART.length; i++) if (HEART[i].k === k) return i; return -1; }
    function clear() {
      for (var i = 0; i < hs.length; i++) hs[i].classList.remove("sel", "ok", "no");
      chipEls.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
    }
    function showPart(i) {
      info.className = "hc-info";
      info.innerHTML = "<strong>" + (i + 1) + ". " + t(HEART[i].name) + "</strong><p>" + t(HEART[i].info) + "</p>";
    }
    function explore(i) { clear(); hs[i].classList.add("sel"); chipEls[i].setAttribute("aria-pressed", "true"); showPart(i); }
    function shuffle(a) { for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var x = a[j]; a[j] = a[r]; a[r] = x; } return a; }
    function nextQ() {
      clear(); answered = false;
      if (qi >= order.length) {
        info.className = "hc-info";
        info.innerHTML = "<strong>" + t(UI.score) + ": " + score + " / " + asked + "</strong><p>" + t(UI.done) + "</p>";
        return;
      }
      info.className = "hc-info";
      info.innerHTML = t(UI.find) + "<strong>" + t(HEART[order[qi]].name) + "</strong><p class=\"hc-tag\">" + t(UI.score) + ": " + score + " / " + asked + "</p>";
    }
    function answer(i) {
      if (answered) return;
      answered = true; asked++;
      var target = order[qi];
      clear();
      if (i === target) {
        score++; hs[i].classList.add("ok");
        info.className = "hc-info good";
        info.innerHTML = "<strong>" + t(UI.right) + "</strong> " + t(HEART[i].name) + "<p>" + t(HEART[i].info) + "</p>";
      } else {
        hs[i].classList.add("no"); hs[target].classList.add("ok");
        info.className = "hc-info bad";
        info.innerHTML = "<strong>" + t(UI.wrong) + "</strong>" + t(HEART[i].name) + " (" + (i + 1) + ")<p>" + t(UI.ans) + "<strong>" + t(HEART[target].name) + " (" + (target + 1) + ")</strong></p>";
      }
      qi++;
      var nb = mk("button", "hc-b", qi >= order.length ? "✓" : "→");
      nb.type = "button"; nb.addEventListener("click", nextQ);
      info.appendChild(nb); nb.focus();
    }
    function showStep() {
      clear();
      var s = TRACE[step], i = idx(s.k);
      if (i >= 0) { hs[i].classList.add("sel"); chipEls[i].setAttribute("aria-pressed", "true"); }
      info.className = "hc-info";
      info.innerHTML = "<strong>" + t(UI.step) + " " + (step + 1) + " / " + TRACE.length + "</strong><p>" + t(s.t) + "</p>";
      var row = mk("div", "hc-row");
      var pb = mk("button", "hc-b", "← " + t(UI.prev)); pb.type = "button"; pb.disabled = step === 0;
      var nb = mk("button", "hc-b", t(UI.next) + " →"); nb.type = "button"; nb.disabled = step === TRACE.length - 1;
      pb.addEventListener("click", function () { step--; showStep(); });
      nb.addEventListener("click", function () { step++; showStep(); });
      row.appendChild(pb); row.appendChild(nb); info.appendChild(row);
    }
    function setMode(m) {
      mode = m;
      bE.setAttribute("aria-pressed", m === "explore" ? "true" : "false");
      bQ.setAttribute("aria-pressed", m === "quiz" ? "true" : "false");
      bT.setAttribute("aria-pressed", m === "trace" ? "true" : "false");
      clear();
      chips.style.display = m === "explore" ? "" : "none";
      if (m === "explore") { info.className = "hc-info"; info.innerHTML = "<p>" + t(UI.hint) + "</p>"; }
      else if (m === "quiz") { order = shuffle(HEART.map(function (_, i) { return i; })); qi = 0; score = 0; asked = 0; nextQ(); }
      else { step = 0; showStep(); }
    }
    function hit(i) { if (mode === "explore") explore(i); else if (mode === "quiz") answer(i); }
    function onClick(e) {
      var g = e.target.closest && e.target.closest(".hc-hs, .hc-chip");
      if (g && g.hasAttribute("data-i")) hit(parseInt(g.getAttribute("data-i"), 10));
    }
    function onKey(e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var g = e.target.closest && e.target.closest(".hc-hs");
      if (g) { e.preventDefault(); hit(parseInt(g.getAttribute("data-i"), 10)); }
    }
    bE.addEventListener("click", function () { setMode("explore"); });
    bQ.addEventListener("click", function () { setMode("quiz"); });
    bT.addEventListener("click", function () { setMode("trace"); });
    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKey);
    setMode("explore");
    return function () { root.removeEventListener("click", onClick); root.removeEventListener("keydown", onKey); };
  }

  IB.registerWidget("heart-structure", {
    title: { en: "The heart: parts, form and function (AHL)", ja: "心臓：各部分の形と機能（AHL）", zh: "心臟：各部分的形態與功能（AHL）" },
    mount: mountHeartStructure
  });

  /* ============================================================ heart-cycle */
  // Illustrative pressures (mmHg) over one 0.8 s cycle. Keys: [time, value].
  var KEYS = {
    la: [[0, 8], [0.05, 10], [0.1, 6], [0.15, 5], [0.2, 6], [0.3, 8], [0.4, 10], [0.47, 9], [0.5, 6], [0.6, 5], [0.7, 6], [0.8, 8]],
    lv: [[0, 5], [0.05, 7], [0.1, 9], [0.13, 10], [0.17, 80], [0.2, 100], [0.25, 119], [0.3, 120], [0.35, 110], [0.4, 100], [0.45, 40], [0.5, 4], [0.6, 4], [0.7, 5], [0.8, 5]],
    ao: [[0, 80], [0.17, 80], [0.2, 98], [0.25, 115], [0.3, 118], [0.35, 114], [0.4, 108], [0.42, 104], [0.5, 98], [0.6, 90], [0.7, 84], [0.8, 80]],
    vol: [[0, 0.88], [0.08, 1], [0.17, 1], [0.33, 0.72], [0.47, 0.72], [0.8, 0.88]]
  };
  function interp(keys, tt) {
    for (var i = 0; i < keys.length - 1; i++) {
      var a = keys[i], b = keys[i + 1];
      if (tt >= a[0] && tt <= b[0]) {
        var u = (tt - a[0]) / (b[0] - a[0]);
        u = u * u * (3 - 2 * u);
        return a[1] + (b[1] - a[1]) * u;
      }
    }
    return keys[keys.length - 1][1];
  }
  function ev() {
    // find valve events from the curves
    var res = { avClose: 0.08, slOpen: 0.17, slClose: 0.33, avOpen: 0.47 };
    var prevAV = interp(KEYS.la, 0) > interp(KEYS.lv, 0), prevSL = interp(KEYS.lv, 0) > interp(KEYS.ao, 0);
    for (var x = 0.001; x <= 0.8; x += 0.001) {
      var av = interp(KEYS.la, x) > interp(KEYS.lv, x), sl = interp(KEYS.lv, x) > interp(KEYS.ao, x);
      if (prevAV && !av) res.avClose = x;
      if (!prevAV && av) res.avOpen = x;
      if (!prevSL && sl) res.slOpen = x;
      if (prevSL && !sl) res.slClose = x;
      prevAV = av; prevSL = sl;
    }
    return res;
  }

  var HC = {
    title: { en: "The cardiac cycle: left side of the heart (AHL)", ja: "心周期：心臓の左側（AHL）", zh: "心動週期：心臟左側（AHL）" },
    s1: { en: "1 Atrial systole", ja: "1 心房収縮期", zh: "1 心房收縮期" },
    s2: { en: "2 Ventricular systole", ja: "2 心室収縮期", zh: "2 心室收縮期" },
    s3: { en: "3 Diastole", ja: "3 拡張期", zh: "3 舒張期" },
    play: { en: "Play", ja: "再生", zh: "播放" },
    pause: { en: "Pause", ja: "一時停止", zh: "暫停" },
    time: { en: "Time in the cycle", ja: "周期内の時間", zh: "週期內的時間" },
    la: { en: "Left atrium", ja: "左心房", zh: "左心房" },
    lv: { en: "Left ventricle", ja: "左心室", zh: "左心室" },
    ao: { en: "Aorta", ja: "大動脈", zh: "主動脈" },
    pv: { en: "Pulmonary vein", ja: "肺静脈", zh: "肺靜脈" },
    av: { en: "AV valve", ja: "房室弁", zh: "房室瓣" },
    sl: { en: "Semilunar (aortic) valve", ja: "半月弁（大動脈弁）", zh: "半月瓣（主動脈瓣）" },
    open: { en: "open", ja: "開", zh: "開" },
    closed: { en: "closed", ja: "閉", zh: "閉" },
    press: { en: "Pressure", ja: "圧力", zh: "壓力" },
    valve: { en: "Valve", ja: "弁", zh: "瓣膜" },
    xAxis: { en: "Time (s)", ja: "時間 (s)", zh: "時間 (s)" },
    yAxis: { en: "Pressure (mmHg)", ja: "圧力 (mmHg)", zh: "壓力 (mmHg)" },
    tabHeart: { en: "Heart", ja: "心臓", zh: "心臟" },
    tabGraph: { en: "Pressure graph", ja: "圧力グラフ", zh: "壓力圖" },
    more: { en: "Valve events and blood pressure", ja: "弁の動きと血圧", zh: "瓣膜活動與血壓" },
    sa: { en: "SA node signal", ja: "洞房結節の信号", zh: "竇房結信號" },
    events: { en: "Valve events read from the graph: ", ja: "グラフから読み取る弁の動き：", zh: "從圖表讀出的瓣膜活動：" },
    bp: { en: "Aortic pressure ranges from %d (diastolic) to %s (systolic) mmHg, a reading of about 120/80.", ja: "大動脈の圧力は %d（拡張期血圧）から %s（収縮期血圧）mmHgで、約120/80の値です。", zh: "主動脈壓力由 %d（舒張壓）至 %s（收縮壓）mmHg，即約120/80的讀數。" },
    ill: { en: "Illustrative values. One cycle takes about 0.8 s (about 75 beats per minute). A valve opens or closes where two pressure curves cross: blood flows from high to low pressure.", ja: "イラスト用の値です。1周期は約0.8秒（1分間に約75拍）です。弁は2つの圧力曲線が交わるところで開閉します。血液は高圧から低圧へ流れます。", zh: "示範數值。一個週期約0.8秒（每分鐘約75次心跳）。瓣膜在兩條壓力曲線相交處開合：血液由高壓流向低壓。" },
    st: {
      1: { en: "The SA node (pacemaker) sends a wave of electrical signals across the atria. The atria contract and push the last of the blood into the ventricle. The AV valve is open and the semilunar valve is closed.", ja: "洞房結節（ペースメーカー）が電気信号の波を心房に送ります。心房が収縮し、残りの血液を心室へ押し込みます。房室弁は開き、半月弁は閉じています。", zh: "竇房結（起搏點）把電信號波傳過心房，心房收縮，把最後的血液推入心室。房室瓣張開，半月瓣關閉。" },
      2: { en: "After a short delay the ventricle contracts. Its pressure rises above the atrial pressure, so the AV valve closes. When the ventricular pressure exceeds the aortic pressure, the semilunar valve opens and blood is forced into the aorta.", ja: "短い遅れののち心室が収縮します。心室の圧力が心房より高くなるので房室弁が閉じます。心室の圧力が大動脈の圧力を上回ると半月弁が開き、血液が大動脈へ押し出されます。", zh: "短暫延遲後心室收縮，壓力升至高於心房，所以房室瓣關閉。當心室壓力超過主動脈壓力，半月瓣張開，血液被迫進入主動脈。" },
      3: { en: "The ventricle relaxes. Its pressure falls below the aortic pressure, so the semilunar valve closes and stops backflow. When the ventricular pressure falls below the atrial pressure, the AV valve opens and blood flows in from the atrium (filled by the pulmonary vein).", ja: "心室がゆるみます。圧力が大動脈より低くなるので半月弁が閉じ、逆流を止めます。心室の圧力が心房より低くなると房室弁が開き、血液が心房（肺静脈から満たされる）から流れ込みます。", zh: "心室放鬆，壓力降至低於主動脈，所以半月瓣關閉，阻止倒流。當心室壓力低於心房，房室瓣張開，血液由心房（由肺靜脈注滿）流入。" }
    }
  };

  IB.registerWidget("heart-cycle", {
    title: HC.title,
    mount: function (el, ctx) {
      ensureCss();
      var t = ctx.t;
      var root = mk("div", "hc-root"); el.appendChild(root);
      var E = ev();
      var tt = 0.04, timer = null;
      var uid = "hc" + Math.random().toString(36).slice(2, 7);
      var noMotion = reduced();

      root.innerHTML =
        '<div class="hc-tabs wl-tabs" role="tablist"><button type="button" class="hc-b" role="tab" aria-selected="true">' + t(HC.tabHeart) + '</button><button type="button" class="hc-b" role="tab" aria-selected="false">' + t(HC.tabGraph) + '</button></div>' +
        '<div class="wl"><div class="wl-stage">' +
        '<div class="hc-art hc-v0"><svg class="hc-heart" viewBox="0 0 340 228" role="img" aria-label="' + t(HC.title) + '"></svg></div>' +
        '<div class="hc-art hc-v1" hidden><svg class="hc-graph" viewBox="0 0 340 215" role="img" aria-label="' + t(HC.yAxis) + '"></svg></div>' +
        '</div><div class="wl-panel">' +
        '<div class="hc-row hc-stages"></div>' +
        '<div><label for="' + uid + '"><strong>' + t(HC.time) + ': <span class="hc-tv"></span> s</strong></label>' +
        '<div class="hc-row" style="align-items:center;margin-top:.2rem"><input id="' + uid + '" type="range" min="0" max="0.79" step="0.01" value="' + tt + '" style="flex:1 1 140px">' +
        (noMotion ? "" : '<button type="button" class="hc-b hc-play"></button>') + '</div></div>' +
        '<div class="hc-grid hc-read" aria-live="polite"></div>' +
        '<div class="hc-info hc-txt"></div>' +
        '<details class="hc-det"><summary>' + t(HC.more) + '</summary><div class="hc-more"></div><p class="hc-note">' + t(HC.ill) + '</p></details>' +
        '</div></div>';
      var tabEls = root.querySelectorAll(".hc-tabs button");
      var viewEls = [root.querySelector(".hc-v0"), root.querySelector(".hc-v1")];
      function showTab(k) { for (var i = 0; i < 2; i++) { viewEls[i].hidden = i !== k; tabEls[i].setAttribute("aria-selected", i === k ? "true" : "false"); } }
      Array.prototype.forEach.call(tabEls, function (b, i) { b.addEventListener("click", function () { showTab(i); }); });
      var o = ctx.options && ctx.options.tab;
      showTab(o === 1 || o === "1" || o === "graph" ? 1 : 0);

      var stages = root.querySelector(".hc-stages");
      var heart = root.querySelector(".hc-heart");
      var graph = root.querySelector(".hc-graph");
      var slider = root.querySelector("input");
      var tv = root.querySelector(".hc-tv");
      var read = root.querySelector(".hc-read");
      var txt = root.querySelector(".hc-txt");
      var more = root.querySelector(".hc-more");
      var playB = root.querySelector(".hc-play");
      var stageBtns = [];
      [[1, HC.s1, 0.04], [2, HC.s2, 0.25], [3, HC.s3, 0.6]].forEach(function (s) {
        var b = mk("button", "hc-b", t(s[1])); b.type = "button";
        b.addEventListener("click", function () { stop(); tt = s[2]; slider.value = tt; draw(); });
        stages.appendChild(b); stageBtns.push(b);
      });

      function stageOf(x) { return x < E.avClose ? 1 : (x < E.slClose ? 2 : 3); }

      // graph geometry
      var L = 44, R = 330, T0 = 12, B = 172, TM = 0.8, PM = 130;
      function GX(v) { return L + (v / TM) * (R - L); }
      function GY(v) { return B - (v / PM) * (B - T0); }
      function curve(keys, cls) {
        var pts = [];
        for (var x = 0; x <= TM + 0.0001; x += 0.005) pts.push(GX(x).toFixed(1) + "," + GY(interp(keys, x)).toFixed(1));
        return '<polyline class="' + cls + '" points="' + pts.join(" ") + '"/>';
      }
      var minAo = 1e9, maxAo = -1e9;
      for (var q = 0; q <= 0.8; q += 0.005) { var vv = interp(KEYS.ao, q); if (vv < minAo) minAo = vv; if (vv > maxAo) maxAo = vv; }

      function drawGraph(pLA, pLV, pAo) {
        var g = "", i;
        g += '<rect class="band1" x="' + GX(0) + '" y="' + T0 + '" width="' + (GX(E.avClose) - GX(0)) + '" height="' + (B - T0) + '"/>';
        g += '<rect class="band2" x="' + GX(E.avClose) + '" y="' + T0 + '" width="' + (GX(E.slClose) - GX(E.avClose)) + '" height="' + (B - T0) + '"/>';
        g += '<rect class="band3" x="' + GX(E.slClose) + '" y="' + T0 + '" width="' + (GX(TM) - GX(E.slClose)) + '" height="' + (B - T0) + '"/>';
        g += '<text class="tx" style="font-weight:700;font-size:12px" x="' + ((GX(0) + GX(E.avClose)) / 2) + '" y="' + (T0 + 13) + '" text-anchor="middle">1</text>';
        g += '<text class="tx" style="font-weight:700;font-size:12px" x="' + ((GX(E.avClose) + GX(E.slClose)) / 2) + '" y="' + (T0 + 13) + '" text-anchor="middle">2</text>';
        g += '<text class="tx" style="font-weight:700;font-size:12px" x="' + ((GX(E.slClose) + GX(TM)) / 2) + '" y="' + (T0 + 13) + '" text-anchor="middle">3</text>';
        for (i = 0; i <= 120; i += 20) g += '<line class="gl" x1="' + L + '" x2="' + R + '" y1="' + GY(i) + '" y2="' + GY(i) + '"/><text class="tm" x="' + (L - 4) + '" y="' + (GY(i) + 3) + '" text-anchor="end">' + i + '</text>';
        for (i = 0; i <= 8; i += 2) g += '<text class="tm" x="' + GX(i / 10) + '" y="' + (B + 12) + '" text-anchor="middle">' + (i / 10).toFixed(1) + '</text>';
        g += '<line class="ax" x1="' + L + '" x2="' + L + '" y1="' + T0 + '" y2="' + B + '"/><line class="ax" x1="' + L + '" x2="' + R + '" y1="' + B + '" y2="' + B + '"/>';
        g += curve(KEYS.ao, "c-ao") + curve(KEYS.lv, "c-lv") + curve(KEYS.la, "c-la");
        g += '<line class="cur" x1="' + GX(tt) + '" x2="' + GX(tt) + '" y1="' + T0 + '" y2="' + B + '"/>';
        g += '<circle cx="' + GX(tt) + '" cy="' + GY(pAo) + '" r="4.5" style="fill:var(--accent,#2547c7);stroke:var(--surface,#fff);stroke-width:1.5"/>';
        g += '<circle cx="' + GX(tt) + '" cy="' + GY(pLV) + '" r="4.5" style="fill:var(--theme-b,#b82a56);stroke:var(--surface,#fff);stroke-width:1.5"/>';
        g += '<circle cx="' + GX(tt) + '" cy="' + GY(pLA) + '" r="4.5" style="fill:var(--theme-a,#07756f);stroke:var(--surface,#fff);stroke-width:1.5"/>';
        g += '<text class="tx" x="' + ((L + R) / 2) + '" y="196" text-anchor="middle">' + t(HC.xAxis) + '</text>';
        g += '<text class="tx" x="10" y="' + ((T0 + B) / 2) + '" text-anchor="middle" transform="rotate(-90 10 ' + ((T0 + B) / 2) + ')">' + t(HC.yAxis) + '</text>';
        // legend
        g += '<line class="c-ao" x1="48" x2="68" y1="208" y2="208" style="stroke-width:2.5"/><text class="tm" x="71" y="211">' + t(HC.ao) + '</text>';
        g += '<line class="c-lv" x1="138" x2="158" y1="208" y2="208" style="stroke-width:2.5"/><text class="tm" x="161" y="211">' + t(HC.lv) + '</text>';
        g += '<line class="c-la" x1="236" x2="256" y1="208" y2="208" style="stroke-width:2.5"/><text class="tm" x="259" y="211">' + t(HC.la) + '</text>';
        graph.innerHTML = g;
      }

      function drawHeart(st, pLA, pLV, pAo, avOpen, slOpen) {
        var vol = interp(KEYS.vol, tt);
        var laScale = st === 1 ? 0.86 : 1;
        var f = 0.55 + 0.45 * vol;
        var rx = 70 * f, ry = 58 * f, cy = 96 + ry, cx = 130;
        var s = "";
        // aorta tube and its connector
        s += '<path class="ox" style="fill:none;stroke-width:24;stroke-opacity:.35" d="M170,100 V60 Q170,26 206,26 H336"/>';
        // pulmonary vein
        s += '<path class="ox" style="fill:none;stroke-width:18;stroke-opacity:.35" d="M6,48 H52"/>';
        // left atrium + channel to ventricle
        s += '<ellipse class="ox" cx="100" cy="48" rx="' + (50 * laScale).toFixed(1) + '" ry="' + (30 * laScale).toFixed(1) + '" style="' + (st === 1 ? "stroke-width:4" : "") + '"/>';
        s += '<rect class="ox" x="84" y="66" width="36" height="40" style="stroke:none"/>';
        // left ventricle: muscle wall then chamber (top anchored)
        s += '<ellipse class="mus" cx="' + cx + '" cy="' + cy.toFixed(1) + '" rx="' + (rx + 13).toFixed(1) + '" ry="' + (ry + 13).toFixed(1) + '"/>';
        s += '<ellipse class="ox" cx="' + cx + '" cy="' + cy.toFixed(1) + '" rx="' + rx.toFixed(1) + '" ry="' + ry.toFixed(1) + '" style="' + (st === 2 ? "stroke-width:4" : "") + '"/>';
        s += '<rect class="ox" x="84" y="84" width="36" height="26" style="stroke:none"/><rect class="ox" x="158" y="88" width="24" height="26" style="stroke:none"/>';
        // AV valve in the channel (y about 90)
        s += avOpen
          ? '<path class="vl" style="stroke:var(--good,#17703f)" d="M84,88 L90,108 M120,88 L114,108"/>'
          : '<path class="vl" style="stroke:var(--bad,#b3261e)" d="M84,88 L102,98 L120,88"/>';
        // semilunar valve at aorta base (y about 96)
        s += slOpen
          ? '<path class="vl" style="stroke:var(--good,#17703f)" d="M158,102 L159,86 M182,102 L181,86"/>'
          : '<path class="vl" style="stroke:var(--bad,#b3261e)" d="M158,92 L170,102 L182,92"/>';
        // flow arrows
        if (avOpen && pLA >= pLV) s += '<path class="arr" d="M102,62 V88"/><polygon class="arrf" points="102,98 96,86 108,86"/>';
        if (slOpen) s += '<path class="arr" d="M170,84 V58"/><polygon class="arrf" points="170,50 164,60 176,60"/>';
        if (st !== 1) s += '<path class="arr" d="M10,48 H34"/><polygon class="arrf" points="44,48 34,43 34,53"/>';
        if (st === 1) s += '<text class="tx" x="100" y="12" text-anchor="middle" style="font-weight:700">\u26A1 ' + t(HC.sa) + '</text>';
        // labels
        var pvw = t(HC.pv).split(" ");
        s += pvw.length > 1 ? '<text class="tm" x="6" y="20">' + pvw[0] + '</text><text class="tm" x="6" y="33">' + pvw.slice(1).join(" ") + '</text>' : '<text class="tm" x="6" y="30">' + pvw[0] + '</text>';
        s += '<text class="tx" x="100" y="46" text-anchor="middle">' + t(HC.la) + '</text><text class="tm" x="100" y="58" text-anchor="middle">' + Math.round(pLA) + ' mmHg</text>';
        s += '<text class="tx" x="' + cx + '" y="' + (cy + 4).toFixed(1) + '" text-anchor="middle">' + t(HC.lv) + '</text><text class="tm" x="' + cx + '" y="' + (cy + 17).toFixed(1) + '" text-anchor="middle">' + Math.round(pLV) + ' mmHg</text>';
        s += '<text class="tx" x="270" y="18" text-anchor="middle">' + t(HC.ao) + ' ' + Math.round(pAo) + ' mmHg</text>';
        s += '<text class="tm" x="80" y="92" text-anchor="end">' + t(HC.av) + '</text>';
        s += '<text class="tm" x="190" y="112">' + t(HC.sl) + '</text>';
        heart.innerHTML = s;
      }

      function draw() {
        var pLA = interp(KEYS.la, tt), pLV = interp(KEYS.lv, tt), pAo = interp(KEYS.ao, tt);
        var avOpen = pLA > pLV, slOpen = pLV > pAo;
        var st = stageOf(tt);
        tv.textContent = tt.toFixed(2);
        slider.setAttribute("aria-valuetext", tt.toFixed(2) + " s");
        stageBtns.forEach(function (b, i) { b.setAttribute("aria-pressed", (i + 1) === st ? "true" : "false"); });
        drawHeart(st, pLA, pLV, pAo, avOpen, slOpen);
        drawGraph(pLA, pLV, pAo);
        read.innerHTML =
          '<div>' + t(HC.valve) + ': ' + t(HC.av) + ' <span class="st ' + (avOpen ? "open" : "closed") + '">' + t(avOpen ? HC.open : HC.closed) + '</span> <span class="hc-tag">(' + t(HC.la) + ' ' + Math.round(pLA) + (avOpen ? " > " : " < ") + Math.round(pLV) + ' ' + t(HC.lv) + ')</span></div>' +
          '<div>' + t(HC.valve) + ': ' + t(HC.sl) + ' <span class="st ' + (slOpen ? "open" : "closed") + '">' + t(slOpen ? HC.open : HC.closed) + '</span> <span class="hc-tag">(' + t(HC.lv) + ' ' + Math.round(pLV) + (slOpen ? " > " : " < ") + Math.round(pAo) + ' ' + t(HC.ao) + ')</span></div>';
        var bp = t(HC.bp).replace("%d", Math.round(minAo)).replace("%s", Math.round(maxAo));
        txt.innerHTML = "<strong>" + t([HC.s1, HC.s2, HC.s3][st - 1]) + "</strong><p>" + t(HC.st[st]) + "</p>";
        more.innerHTML =
          '<p class="hc-tag">' + t(HC.events) + t(HC.av) + " " + t(HC.closed) + " " + E.avClose.toFixed(2) + " s; " + t(HC.sl) + " " + t(HC.open) + " " + E.slOpen.toFixed(2) + " s, " + t(HC.closed) + " " + E.slClose.toFixed(2) + " s; " + t(HC.av) + " " + t(HC.open) + " " + E.avOpen.toFixed(2) + " s.</p>" +
          '<p class="hc-tag">' + bp + "</p>";
      }
      function stop() { if (timer) { clearInterval(timer); timer = null; } if (playB) playB.textContent = t(HC.play); }
      function start() {
        if (timer) return;
        playB.textContent = t(HC.pause);
        timer = setInterval(function () {
          tt = Math.round((tt + 0.01) * 100) / 100;
          if (tt >= 0.8) tt = 0;
          slider.value = tt; draw();
        }, 60);
      }
      function onSlide() { stop(); tt = parseFloat(slider.value); draw(); }
      slider.addEventListener("input", onSlide);
      if (playB) { playB.textContent = t(HC.play); playB.addEventListener("click", function () { if (timer) stop(); else start(); }); }
      draw();
      return function () { stop(); slider.removeEventListener("input", onSlide); };
    }
  });

  /* ========================================================== vessel-compare */
  var VC = {
    title: { en: "Blood vessels: artery, capillary, vein", ja: "血管：動脈・毛細血管・静脈", zh: "血管：動脈、微血管、靜脈" },
    art: { en: "Artery", ja: "動脈", zh: "動脈" },
    cap: { en: "Capillary", ja: "毛細血管", zh: "微血管" },
    vein: { en: "Vein", ja: "静脈", zh: "靜脈" },
    compare: { en: "Compare", ja: "比較", zh: "比較" },
    ident: { en: "Identify from a section", ja: "断面から見分ける", zh: "從切面辨認" },
    note: { en: "Cross-sections, not all to the same scale (the capillary is drawn larger than real). The wall thickness compared with the lumen is what you use to tell an artery from a vein.", ja: "横断面で、縮尺はそろえていません（毛細血管は実際より大きく描いています）。動脈と静脈を見分けるには、管腔に対する壁の厚さを使います。", zh: "橫切面，並非全部按相同比例（微血管畫得比實際大）。辨別動脈與靜脈要看管壁厚度相對於管腔的比例。" },
    layers: { en: "Layers", ja: "層", zh: "層" },
    lumen: { en: "lumen", ja: "管腔", zh: "管腔" },
    endo: { en: "inner lining (endothelium)", ja: "内張り（内皮）", zh: "內襯（內皮）" },
    mus: { en: "muscle and elastic tissue", ja: "筋肉と弾性組織", zh: "肌肉和彈性組織" },
    outer: { en: "outer layer of fibres", ja: "外側の繊維の層", zh: "外層纖維" },
    q: { en: "Is this an artery or a vein?", ja: "これは動脈ですか、静脈ですか。", zh: "這是動脈還是靜脈？" },
    right: { en: "Correct!", ja: "正解です！", zh: "正確！" },
    wrong: { en: "Not quite.", ja: "違います。", zh: "不太對。" },
    why: {
      artery: { en: "Thick wall compared with a narrow lumen, round shape: an artery.", ja: "管腔が狭いのに壁が厚く、形は丸い：動脈です。", zh: "壁厚而管腔窄，形狀圓：是動脈。" },
      vein: { en: "Thin wall compared with a wide lumen, shape often irregular: a vein.", ja: "管腔が広いのに壁が薄く、形は不規則なことが多い：静脈です。", zh: "壁薄而管腔寬，形狀常不規則：是靜脈。" }
    },
    next: { en: "Next section", ja: "次の断面", zh: "下一個切面" },
    score: { en: "Score", ja: "得点", zh: "得分" },
    th: { en: "Feature", ja: "特徴", zh: "特徵" },
    rows: [
      [{ en: "Function", ja: "働き", zh: "功能" },
        { en: "Carries blood away from the heart at high pressure", ja: "高い圧力で血液を心臓から運び出す", zh: "以高壓把血液運離心臟" },
        { en: "Exchange of materials between blood and tissues (or air in the lungs)", ja: "血液と組織（または肺の空気）の間の物質交換", zh: "血液與組織（或肺中空氣）之間的物質交換" },
        { en: "Carries blood back to the heart at low pressure", ja: "低い圧力で血液を心臓へ戻す", zh: "以低壓把血液運回心臟" }],
      [{ en: "Wall", ja: "壁", zh: "壁" },
        { en: "Thick: muscle and elastic tissue withstand and maintain high pressure", ja: "厚い：筋肉と弾性組織が高い圧力に耐え、保つ", zh: "厚：肌肉和彈性組織承受並維持高壓" },
        { en: "One cell thick: short diffusion distance; fenestrations in some", ja: "細胞1個分の厚さ：拡散距離が短い。一部は窓がある", zh: "一個細胞厚：擴散距離短；部分有窗孔" },
        { en: "Thin and flexible: can be compressed by muscles", ja: "薄く柔軟：筋肉に圧迫される", zh: "薄而柔軟：可被肌肉壓迫" }],
      [{ en: "Lumen", ja: "管腔", zh: "管腔" },
        { en: "Narrow", ja: "狭い", zh: "窄" },
        { en: "Very narrow (about one red blood cell wide); branching gives large surface area", ja: "非常に狭い（赤血球1個分ほど）。枝分かれで表面積が大きい", zh: "非常窄（約一個紅血球闊）；分支使表面面積大" },
        { en: "Wide", ja: "広い", zh: "寬" }],
      [{ en: "Wall thickness ÷ lumen diameter (in this drawing)", ja: "壁の厚さ ÷ 管腔の直径（この図で）", zh: "壁厚 ÷ 管腔直徑（此圖中）" },
        { en: "about 0.7 (large)", ja: "約0.7（大きい）", zh: "約0.7（大）" },
        { en: "about 0.2", ja: "約0.2", zh: "約0.2" },
        { en: "about 0.1 (small)", ja: "約0.1（小さい）", zh: "約0.1（小）" }],
      [{ en: "Valves", ja: "弁", zh: "瓣膜" },
        { en: "None (except at the heart exits)", ja: "なし（心臓の出口を除く）", zh: "沒有（心臟出口處除外）" },
        { en: "None", ja: "なし", zh: "沒有" },
        { en: "Present: prevent backflow", ja: "あり：逆流を防ぐ", zh: "有：防止倒流" }]
    ]
  };

  function vesselSVG(kind, scaleFix) {
    // returns inner svg markup centred at (0,0); size in px
    var s = "";
    if (kind === "artery") {
      s += '<circle class="vout" r="52"/><circle class="vmus" r="46"/><circle class="vel" r="38"/><circle class="vwall" r="30" style="fill-opacity:.0"/><circle class="vend" r="23"/><circle class="vlum" r="21"/>';
      s += '<circle class="vrbc" cx="-6" cy="3" r="3.5"/><circle class="vrbc" cx="7" cy="-6" r="3.5"/><circle class="vrbc" cx="5" cy="9" r="3.5"/>';
    } else if (kind === "vein") {
      s += '<ellipse class="vout" rx="64" ry="50"/><ellipse class="vmus" rx="60" ry="46" style="fill-opacity:.5"/><ellipse class="vend" rx="54" ry="42"/><ellipse class="vlumv" rx="52" ry="40"/>';
      s += '<circle class="vrbc" cx="-14" cy="4" r="3.5"/><circle class="vrbc" cx="12" cy="-8" r="3.5"/><circle class="vrbc" cx="20" cy="10" r="3.5"/><circle class="vrbc" cx="-26" cy="-10" r="3.5"/>';
    } else {
      s += '<circle class="vend" r="21" style="fill:var(--theme-b-soft,#f8dfe7)"/><circle class="vlum" r="15" style="fill:var(--surface,#fff);fill-opacity:1"/>';
      s += '<ellipse class="vrbc" rx="11" ry="5" transform="rotate(-20)"/>';
      s += '<path d="M11,-14 L15,-18" style="stroke:var(--surface-2,#e3eaee);stroke-width:5"/>';
    }
    return s;
  }

  IB.registerWidget("vessel-compare", {
    title: VC.title,
    mount: function (el, ctx) {
      ensureCss();
      var t = ctx.t;
      var root = mk("div", "hc-root"); el.appendChild(root);
      var mode = "compare", cur = "artery", score = 0, asked = 0, curQ = null, answered = false;
      var bar = mk("div", "hc-tabs wl-tabs"); bar.setAttribute("role", "tablist");
      var bC = mk("button", "hc-b", t(VC.compare)), bI = mk("button", "hc-b", t(VC.ident));
      [bC, bI].forEach(function (b) { b.type = "button"; b.setAttribute("role", "tab"); bar.appendChild(b); });
      var host = mk("div");
      root.appendChild(bar); root.appendChild(host);

      function frame(artHtml) {
        var wl = mk("div", "wl"), st = mk("div", "wl-stage"), pn = mk("div", "wl-panel");
        var art = mk("div", "hc-art", artHtml);
        st.appendChild(art);
        wl.appendChild(st); wl.appendChild(pn);
        host.appendChild(wl);
        return { stage: st, panel: pn };
      }

      function compareView() {
        host.innerHTML = "";
        var kinds = [["artery", VC.art], ["capillary", VC.cap], ["vein", VC.vein]];
        var svg = '<svg viewBox="0 0 400 176" role="img" aria-label="' + t(VC.title) + '">';
        var xs = { artery: 62, capillary: 198, vein: 334 };
        kinds.forEach(function (k) {
          var sel = k[0] === cur;
          svg += '<g transform="translate(' + xs[k[0]] + ',76) scale(1.08)" style="opacity:' + (sel ? 1 : 0.45) + '">' + vesselSVG(k[0]) + '</g>';
          svg += '<text class="tx" x="' + xs[k[0]] + '" y="166" text-anchor="middle" style="font-size:15px;font-weight:' + (sel ? 800 : 400) + '">' + t(k[1]) + '</text>';
        });
        var f = frame(svg + "</svg>");
        f.stage.appendChild(mk("p", "hc-note wl-legend", t(VC.note)));
        var row = mk("div", "hc-row hc-stages");
        kinds.forEach(function (k) {
          var b = mk("button", "hc-b", t(k[1])); b.type = "button"; b.setAttribute("aria-pressed", k[0] === cur ? "true" : "false");
          b.addEventListener("click", function () { cur = k[0]; compareView(); });
          row.appendChild(b);
        });
        f.panel.appendChild(row);
        var idx = { artery: 1, capillary: 2, vein: 3 }[cur];
        var tbl = '<table><tr><th>' + t(VC.th) + '</th><th>' + t(cur === "artery" ? VC.art : cur === "capillary" ? VC.cap : VC.vein) + '</th></tr>';
        VC.rows.forEach(function (r) { tbl += "<tr><td><strong>" + t(r[0]) + "</strong></td><td>" + t(r[idx]) + "</td></tr>"; });
        tbl += "</table>";
        var layersTxt = cur === "capillary" ? "" : "<p class=\"hc-tag\">" + t(VC.layers) + ": " + t(VC.endo) + " → " + t(VC.mus) + " → " + t(VC.outer) + "</p>";
        f.panel.appendChild(mk("div", "hc-info", tbl + layersTxt));
      }

      function newQ() {
        answered = false;
        curQ = Math.random() < 0.5 ? "artery" : "vein";
        host.innerHTML = "";
        var jitter = curQ === "artery" ? 0.9 + Math.random() * 0.5 : 0.7 + Math.random() * 0.45;
        var f = frame('<svg viewBox="0 0 400 190" role="img" aria-label="' + t(VC.q) + '"><g transform="translate(200,95) scale(' + jitter.toFixed(2) + ')">' + vesselSVG(curQ) + '</g></svg>');
        f.stage.appendChild(mk("p", "hc-note wl-legend", t(VC.note)));
        f.panel.appendChild(mk("p", "", "<strong>" + t(VC.q) + "</strong> <span class=\"hc-tag\">" + t(VC.score) + ": " + score + " / " + asked + "</span>"));
        var row = mk("div", "hc-row hc-stages");
        row.style.gridTemplateColumns = "1fr 1fr";
        var fb = mk("div", "hc-info");
        fb.setAttribute("aria-live", "polite");
        [["artery", VC.art], ["vein", VC.vein]].forEach(function (k) {
          var b = mk("button", "hc-b", t(k[1])); b.type = "button";
          b.addEventListener("click", function () {
            if (answered) return;
            answered = true; asked++;
            var ok = k[0] === curQ;
            if (ok) score++;
            fb.className = "hc-info " + (ok ? "good" : "bad");
            fb.innerHTML = "<strong>" + t(ok ? VC.right : VC.wrong) + "</strong> " + t(VC.why[curQ]) + " <span class=\"hc-tag\">" + t(VC.score) + ": " + score + " / " + asked + "</span>";
            var nb = mk("button", "hc-b", t(VC.next) + " →"); nb.type = "button";
            nb.addEventListener("click", newQ);
            fb.appendChild(mk("p")); fb.lastChild.appendChild(nb); nb.focus();
          });
          row.appendChild(b);
        });
        f.panel.appendChild(row); f.panel.appendChild(fb);
      }
      function setMode(m) {
        mode = m;
        bC.setAttribute("aria-selected", m === "compare" ? "true" : "false");
        bI.setAttribute("aria-selected", m === "ident" ? "true" : "false");
        if (m === "compare") compareView(); else { score = 0; asked = 0; newQ(); }
      }
      bC.addEventListener("click", function () { setMode("compare"); });
      bI.addEventListener("click", function () { setMode("ident"); });
      var o = ctx.options && ctx.options.tab;
      setMode(o === 1 || o === "1" || o === "ident" ? "ident" : "compare");
    }
  });
})();
