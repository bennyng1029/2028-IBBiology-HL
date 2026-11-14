/* Widgets in this file (B3.1):
   "gas-exchange"      tap-to-label alveolus (lung) and leaf, with a quiz mode   (B3.1.2-4, B3.1.7)
   "gas-exchange-leaf" tap-to-label leaf in transverse section                   (B3.1.7-8)
   "o2-curve"          oxygen dissociation curve: adult, foetal, Bohr shift      (B3.1.11-13, AHL)
*/
(function () {
  "use strict";
  var STYLE_ID = "w-gas-exchange-style";

  var CSS = [
    ".gx-root{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029);font-size:.95rem}",
    ".gx-root *{box-sizing:border-box}",
    ".gx-root svg{display:block;width:100%;height:auto}",
    ".gx-tabs,.gx-bar,.gx-chips,.gx-tog{display:flex;flex-wrap:wrap;gap:.4rem;margin:0}",
    ".gx-tabs{overflow-x:auto;flex-wrap:nowrap;margin-bottom:.5rem}",
    ".gx-tabs .gx-b{flex:none}",
    ".gx-root [hidden]{display:none!important}",
    ".gx-root .wl-panel{gap:.5rem}",
    "@media(max-width:899px){.gx-chips,.gx-tog{flex-wrap:nowrap;overflow-x:auto;padding-bottom:.2rem}.gx-chip,.gx-tog .gx-b{flex:none}.gx-tog .gx-b{min-height:2.25rem;font-size:.85rem;padding:.2rem .6rem}}",
    ".gx-root .oc-svg .tm,.gx-root .oc-svg .tx{font-size:14px}",
    "@media(max-width:899px){.gx-root .oc-info{max-height:8.5rem;overflow-y:auto}.gx-root .gx-read{font-size:.82rem}}",
    ".gx-b{font:inherit;font-weight:600;min-height:2.5rem;padding:.35rem .8rem;border-radius:var(--radius,6px);border:1px solid var(--line,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".gx-b:hover{background:var(--surface-2,#e3eaee)}",
    ".gx-b[aria-pressed=true],.gx-b[aria-selected=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".gx-b:focus-visible,.gx-root input:focus-visible,.gx-hs:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".gx-chip{font:inherit;font-size:.85rem;min-height:2.25rem;padding:.2rem .6rem;border-radius:999px;border:1px solid var(--line,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".gx-chip[aria-pressed=true]{background:var(--accent-soft,#e0e7fb);border-color:var(--accent,#2547c7);font-weight:700}",
    ".gx-chip:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".gx-art{background:var(--surface-2,#e3eaee);border-radius:var(--radius-lg,12px);padding:.4rem}",
    ".gx-info{background:var(--surface-2,#e3eaee);border-left:4px solid var(--accent,#2547c7);border-radius:var(--radius,6px);padding:.4rem .65rem;font-size:.88rem;line-height:1.4}",
    ".gx-info p{margin:.25rem 0 0}",
    ".gx-info .gx-tag{color:var(--muted,#4d626d);font-size:.85rem}",
    ".gx-info.good{border-left-color:var(--good,#17703f);background:var(--good-soft,#dcf2e4)}",
    ".gx-info.bad{border-left-color:var(--bad,#b3261e);background:var(--bad-soft,#fbe0de)}",
    ".gx-al{display:inline-block;margin-left:.4rem;padding:0 .4rem;border-radius:3px;background:var(--ahl,#ffcf3a);color:var(--ahl-ink,#2a2000);font-size:.7rem;font-weight:800;letter-spacing:.04em;vertical-align:middle}",
    ".gx-note{color:var(--muted,#4d626d);font-size:.8rem;margin:.3rem 0 0}",
    ".gx-hs{cursor:pointer}",
    ".gx-hs circle{fill:var(--surface,#fff);stroke:var(--accent,#2547c7);stroke-width:2}",
    ".gx-hs text{fill:var(--ink,#0f2029);font-size:12px;font-weight:700;text-anchor:middle;pointer-events:none}",
    ".gx-hs.sel circle{fill:var(--accent,#2547c7)}",
    ".gx-hs.sel text{fill:var(--on-accent,#fff)}",
    ".gx-hs.ok circle{fill:var(--good,#17703f);stroke:var(--good,#17703f)}",
    ".gx-hs.ok text{fill:#fff}",
    ".gx-hs.no circle{fill:var(--bad,#b3261e);stroke:var(--bad,#b3261e)}",
    ".gx-hs.no text{fill:#fff}",
    ".gx-quiz-h{font-weight:700}",
    /* art classes */
    ".gx-root .tx{fill:var(--ink,#0f2029);font-size:12px}",
    ".gx-root .tm{fill:var(--muted,#4d626d);font-size:12px}",
    ".gx-root .air{fill:var(--surface,#fff);stroke:var(--ink,#0f2029);stroke-width:1.5}",
    ".gx-root .wall{fill:none;stroke:var(--theme-b,#b82a56);stroke-width:4}",
    ".gx-root .film{fill:none;stroke:var(--hbond,#1989c9);stroke-width:2.5}",
    ".gx-root .cap{fill:none;stroke:var(--c-oxygen,#d33a2c);stroke-opacity:.35;stroke-width:18}",
    ".gx-root .rbc{fill:var(--c-oxygen,#d33a2c)}",
    ".gx-root .t2{fill:var(--ahl-soft,#fff4c9);stroke:var(--ink,#0f2029);stroke-width:1.2}",
    ".gx-root .lb{fill:var(--ahl,#ffcf3a);stroke:var(--ink,#0f2029);stroke-width:.6}",
    ".gx-root .tube{fill:var(--surface,#fff);stroke:var(--ink,#0f2029);stroke-width:1.5}",
    ".gx-root .arr{stroke:var(--ink,#0f2029);stroke-width:1.6;fill:none}",
    ".gx-root .arrf{fill:var(--ink,#0f2029)}",
    ".gx-root .cut{fill:var(--hydrophobic,#8a6838)}",
    ".gx-root .epi{fill:var(--theme-a-soft,#d9efec);stroke:var(--theme-a,#07756f);stroke-width:1}",
    ".gx-root .pal{fill:var(--good-soft,#dcf2e4);stroke:var(--good,#17703f);stroke-width:1}",
    ".gx-root .chl{fill:var(--good,#17703f)}",
    ".gx-root .gc{fill:var(--theme-a,#07756f);stroke:var(--ink,#0f2029);stroke-width:1}",
    ".gx-root .xyl{fill:var(--hbond,#1989c9);fill-opacity:.55;stroke:var(--hbond,#1989c9);stroke-width:1}",
    ".gx-root .phl{fill:var(--c-sulfur,#c19a00);fill-opacity:.6;stroke:var(--c-sulfur,#c19a00);stroke-width:1}",
    ".gx-root .bun{fill:var(--surface-2,#e3eaee);stroke:var(--ink,#0f2029);stroke-width:1}",
    /* O2 curve */
    ".gx-root .gl{stroke:var(--line,#c3d0d7)}",
    ".gx-root .ax{stroke:var(--ink,#0f2029);stroke-width:1.2}",
    ".gx-root .c-ad{fill:none;stroke:var(--accent,#2547c7);stroke-width:3}",
    ".gx-root .c-fo{fill:none;stroke:var(--theme-b,#b82a56);stroke-width:3;stroke-dasharray:8 4}",
    ".gx-root .c-bo{fill:none;stroke:var(--theme-a,#07756f);stroke-width:3;stroke-dasharray:2 4;stroke-linecap:round}",
    ".gx-root .zone{fill:var(--ahl-soft,#fff4c9);fill-opacity:.7}",
    ".gx-root .zone2{fill:var(--accent-soft,#e0e7fb);fill-opacity:.7}",
    ".gx-root .mk{stroke:var(--muted,#4d626d);stroke-dasharray:3 3}",
    ".gx-root .cur{stroke:var(--ink,#0f2029);stroke-width:1.3}",
    ".gx-root input[type=range]{width:100%;accent-color:var(--accent,#2547c7);min-height:2rem}",
    ".gx-root .gx-sw{display:inline-block;width:1.6rem;height:0;border-top:3px solid;vertical-align:middle;margin-right:.35rem}",
    ".gx-root .gx-read{display:grid;grid-template-columns:1fr auto;gap:.15rem .6rem;font-variant-numeric:tabular-nums;margin:0;font-size:.88rem}",
    ".gx-root details summary{cursor:pointer;font-weight:700;font-size:.88rem;min-height:2.2rem;display:flex;align-items:center}",
    ".gx-root .gx-sites{display:inline-flex;gap:.25rem;vertical-align:middle;margin-left:.4rem}",
    ".gx-root .gx-site{width:.9rem;height:.9rem;border-radius:50%;border:2px solid var(--c-oxygen,#d33a2c);background:transparent}",
    ".gx-root .gx-site.f{background:var(--c-oxygen,#d33a2c)}",
    ".gx-root .gx-site.h{background:linear-gradient(90deg,var(--c-oxygen,#d33a2c) 50%,transparent 50%)}"
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
  var reduce = function () {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  };

  /* ---------------------------------------------------------------- strings */
  var UI = {
    explore: { en: "Explore", ja: "調べる", zh: "探索", ko: "탐색" },
    quiz: { en: "Quiz me", ja: "クイズ", zh: "自我測驗", ko: "퀴즈" },
    tapHint: { en: "Tap a numbered circle (or a button below) to see what it is and how it helps gas exchange.", ja: "番号の付いた丸（または下のボタン）をタップして、それが何か、ガス交換にどう役立つかを見ましょう。", zh: "點選有編號的圓圈（或下面的按鈕），了解它是甚麼，以及如何有助氣體交換。", ko: "번호가 붙은 원(또는 아래 버튼)을 눌러 그 부분이 무엇이고 기체 교환(gas exchange)에 어떻게 도움이 되는지 확인한다." },
    find: { en: "Tap the part: ", ja: "次の部分をタップ：", zh: "請點選這個部分：", ko: "부분을 누르시오: " },
    right: { en: "Correct!", ja: "正解です！", zh: "正確！", ko: "정답입니다!" },
    wrong: { en: "Not quite. You tapped: ", ja: "違います。タップしたのは：", zh: "不太對。你點選的是：", ko: "틀렸습니다. 누른 곳: " },
    ans: { en: "The answer is: ", ja: "正解は：", zh: "答案是：", ko: "정답: " },
    air: { en: "air", ja: "空気", zh: "空氣", ko: "공기" },
    score: { en: "Score", ja: "得点", zh: "得分", ko: "점수" },
    done: { en: "Finished. Press Quiz me to try again.", ja: "終了です。もう一度挑戦するには「クイズ」を押してください。", zh: "完成了。按「自我測驗」可再試一次。", ko: "끝났습니다. 다시 하려면 퀴즈를 누르시오." },
    lung: { en: "Alveolus (lung)", ja: "肺胞（肺）", zh: "肺泡（肺）", ko: "폐포" },
    leaf: { en: "Leaf", ja: "葉", zh: "葉", ko: "잎" },
    leafNote: { en: "This is an illustration with cells drawn. In your own plan diagram, draw only the outlines of tissues and no individual cells.", ja: "これは細胞を描いたイラストです。自分で平面図を描くときは、組織の輪郭だけを描き、個々の細胞は描きません。", zh: "這是繪有細胞的示意圖。自己畫平面圖時，只畫組織的輪廓，不畫個別細胞。", ko: "세포를 그려 넣은 그림이다. 직접 그리는 평면도(plan diagram)에는 조직의 윤곽만 그리고 개별 세포는 그리지 않는다." },
    lungNote: { en: "Schematic, not to scale. Red tint = capillaries (blood).", ja: "模式図で、縮尺は正確ではありません。赤みがかった部分は毛細血管（血液）です。", zh: "示意圖，並非按比例。紅色部分為微血管（血液）。", ko: "개략도이며 축척은 맞지 않는다. 붉은 색조 = 모세 혈관(혈액)." },
    guide: { en: "Guide link: ", ja: "ガイドとの対応：", zh: "課程指引對應：", ko: "안내 연결: " }
  };

  /* ------------------------------------------------------ alveolus parts */
  var LUNG = {
    title: { en: "Gas exchange in the alveolus", ja: "肺胞でのガス交換", zh: "肺泡中的氣體交換", ko: "폐포에서의 기체 교환" },
    vb: "48 0 250 266",
    art: function (ctxLang) {
      var cx = 170, cy = 158, r = 78;
      var s = "";
      // capillary band + red blood cells
      s += '<circle class="cap" cx="' + cx + '" cy="' + cy + '" r="' + (r + 14) + '"/>';
      for (var a = 0; a < 360; a += 30) {
        var rad = a * Math.PI / 180, rr = r + 14;
        s += '<ellipse class="rbc" cx="' + (cx + rr * Math.cos(rad)).toFixed(1) + '" cy="' + (cy - rr * Math.sin(rad)).toFixed(1) + '" rx="5" ry="3" transform="rotate(' + (-a + 90) + ' ' + (cx + rr * Math.cos(rad)).toFixed(1) + ' ' + (cy - rr * Math.sin(rad)).toFixed(1) + ')"/>';
      }
      // bronchiole
      s += '<rect class="tube" x="155" y="0" width="30" height="' + (cy - r - 10) + '"/>';
      s += '<line class="arr" x1="170" y1="14" x2="170" y2="50"/><polygon class="arrf" points="170,58 164,48 176,48"/>';
      // alveolus
      s += '<circle class="air" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
      s += '<circle class="wall" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
      s += '<circle class="film" cx="' + cx + '" cy="' + cy + '" r="' + (r - 5) + '"/>';
      s += '<rect x="157" y="' + (cy - r - 5) + '" width="26" height="12" style="fill:var(--surface,#fff)"/>';
      // type II cell (bulge at left-lower, angle 200deg)
      var ta = 200 * Math.PI / 180, tx = cx + r * Math.cos(ta), ty = cy - r * Math.sin(ta);
      s += '<circle class="t2" cx="' + tx.toFixed(1) + '" cy="' + ty.toFixed(1) + '" r="13"/>';
      s += '<circle class="lb" cx="' + (tx - 4).toFixed(1) + '" cy="' + (ty - 3).toFixed(1) + '" r="3.2"/><circle class="lb" cx="' + (tx + 3).toFixed(1) + '" cy="' + (ty + 1).toFixed(1) + '" r="3.2"/><circle class="lb" cx="' + (tx - 2).toFixed(1) + '" cy="' + (ty + 5).toFixed(1) + '" r="3"/>';
      // diffusion arrows
      s += '<line class="arr" x1="222" y1="150" x2="258" y2="150"/><polygon class="arrf" points="262,150 252,145 252,155"/>';
      s += '<text class="tx" x="226" y="143">O₂</text>';
      s += '<line class="arr" x1="262" y1="176" x2="226" y2="176"/><polygon class="arrf" points="222,176 232,171 232,181"/>';
      s += '<text class="tx" x="226" y="193">CO₂</text>';
      s += '<text class="tm" x="196" y="30">' + (UI.air[ctxLang] || UI.air.en) + '</text>';
      return s;
    },
    parts: [
      { x: 170, y: 22, name: { en: "Bronchiole", ja: "細気管支", zh: "細支氣管", ko: "세기관지" },
        info: { en: "A small airway. A branched network of bronchioles carries air to every alveolus. Ventilation keeps fresh air with a high oxygen concentration arriving.", ja: "小さな空気の通り道です。枝分かれした細気管支の網目が、すべての肺胞へ空気を運びます。換気により、酸素濃度の高い新しい空気が届き続けます。", zh: "細小的氣道。分支的細支氣管網絡把空氣帶到每個肺泡。通氣使氧濃度高的新鮮空氣不斷到達。", ko: "작은 공기 통로이다. 가지를 친 세기관지 그물이 모든 폐포로 공기를 보낸다. 환기(ventilation)로 산소 농도가 높은 신선한 공기가 계속 들어온다." },
        tag: { en: "B3.1.4 branched network of bronchioles; B3.1.3 ventilation", ja: "B3.1.4 枝分かれした細気管支の網目、B3.1.3 換気", zh: "B3.1.4 分支的細支氣管網絡；B3.1.3 通氣", ko: "B3.1.4 가지를 친 세기관지 그물; B3.1.3 환기" } },
      { x: 150, y: 150, name: { en: "Alveolus air space (lumen)", ja: "肺胞の空気の空間（内腔）", zh: "肺泡氣腔（腔）", ko: "폐포 공기 공간(내강)" },
        info: { en: "The air-filled space inside the alveolus. Breathing in and out replaces the air, so oxygen stays high and carbon dioxide stays low in here. This keeps the concentration gradients steep.", ja: "肺胞の中の空気で満たされた空間です。呼吸で空気が入れ替わるので、ここでは酸素が高く二酸化炭素が低く保たれます。これが濃度勾配を急に保ちます。", zh: "肺泡內充滿空氣的空間。呼吸使空氣更新，所以這裏氧氣保持高、二氧化碳保持低，使濃度梯度保持陡峭。", ko: "폐포 안의 공기로 찬 공간이다. 숨을 들이쉬고 내쉬면 공기가 바뀌므로 이곳은 산소가 높고 이산화 탄소가 낮게 유지된다. 이로써 농도 기울기가 가파르게 유지된다." },
        tag: { en: "B3.1.3 ventilation maintains concentration gradients", ja: "B3.1.3 換気が濃度勾配を維持する", zh: "B3.1.3 通氣維持濃度梯度", ko: "B3.1.3 환기가 농도 기울기를 유지함" } },
      { x: 248, y: 112, name: { en: "Alveolar wall: type I pneumocyte", ja: "肺胞の壁：I型肺胞上皮細胞", zh: "肺泡壁：第I型肺泡細胞", ko: "폐포 벽: 1형 폐포 상피 세포(type I pneumocyte)" },
        info: { en: "The wall is extremely thin and flat: one cell thick. Together with the one-cell-thick capillary wall, the distance for diffusion is tiny. The wall is permeable to O₂ and CO₂.", ja: "壁は非常に薄く平らで、細胞1個分の厚さです。細胞1個分の厚さの毛細血管の壁と合わせて、拡散距離はごくわずかです。壁はO₂とCO₂を通します。", zh: "肺泡壁極薄而扁平，只有一個細胞厚。連同只有一個細胞厚的微血管壁，擴散距離極小。肺泡壁可讓O₂和CO₂通過。", ko: "벽은 매우 얇고 납작하여 세포 한 층 두께이다. 세포 한 층 두께인 모세 혈관 벽과 함께, 확산이 일어나는 거리는 매우 짧다. 벽은 O₂와 CO₂를 투과시킨다." },
        tag: { en: "B3.1.2 thin tissue layer, permeable. HL: B2.3.8 type I pneumocytes", ja: "B3.1.2 薄い組織の層、透過性。HL：B2.3.8 I型肺胞上皮細胞", zh: "B3.1.2 薄組織層、可滲透。HL：B2.3.8 第I型肺泡細胞", ko: "B3.1.2 얇은 조직층, 투과성. HL: B2.3.8 1형 폐포 상피 세포" } },
      { x: 78, y: 200, ahl: true, name: { en: "Type II pneumocyte with lamellar bodies", ja: "層板小体を持つII型肺胞上皮細胞", zh: "含板層小體的第II型肺泡細胞", ko: "층판 소체가 있는 2형 폐포 상피 세포(type II pneumocyte)" },
        info: { en: "A rounder cell with many secretory vesicles called lamellar bodies. They discharge surfactant into the alveolar lumen. The alveolar epithelium has two cell types because it needs different adaptations.", ja: "丸みのある細胞で、層板小体と呼ばれる多数の分泌小胞を持ちます。これがサーファクタントを肺胞腔へ放出します。肺胞上皮に2種類の細胞があるのは、異なる適応が必要だからです。", zh: "較圓的細胞，有許多稱為板層小體的分泌囊泡，把表面活性物質排入肺泡腔。肺泡上皮有兩種細胞，因為需要不同的適應特徵。", ko: "층판 소체(lamellar body)라는 분비 소낭이 많은, 더 둥근 세포이다. 층판 소체는 계면 활성제(surfactant)를 폐포 내강으로 내보낸다. 폐포 상피에 두 종류의 세포가 있는 것은 서로 다른 적응이 필요하기 때문이다." },
        tag: { en: "HL: B2.3.8 lamellar bodies discharge surfactant", ja: "HL：B2.3.8 層板小体がサーファクタントを放出", zh: "HL：B2.3.8 板層小體排出表面活性物質", ko: "HL: B2.3.8 층판 소체가 계면 활성제를 방출함" } },
      { x: 128, y: 98, name: { en: "Surfactant and moist film", ja: "サーファクタントと湿った膜", zh: "表面活性物質與濕潤水膜", ko: "계면 활성제와 촉촉한 막" },
        info: { en: "A thin film of water lines the alveolus. Gases dissolve in it before they diffuse across, so the surface must be moist. Surfactant reduces the surface tension of this film, which stops the walls of the alveoli sticking together and collapsing.", ja: "肺胞の内側は水の薄い膜で覆われています。気体はこの膜に溶けてから拡散するので、表面は湿っていなければなりません。サーファクタントはこの膜の表面張力を下げ、肺胞の壁がくっついてつぶれるのを防ぎます。", zh: "肺泡內襯一層薄水膜。氣體先溶解在其中才擴散通過，所以表面必須濕潤。表面活性物質降低這層膜的表面張力，防止肺泡壁黏在一起而塌陷。", ko: "얇은 물 막이 폐포 안쪽을 덮고 있다. 기체는 이 막에 녹은 뒤 확산하여 건너가므로 표면이 촉촉해야 한다. 계면 활성제는 이 막의 표면 장력을 줄여, 폐포 벽이 서로 달라붙어 쪼그라드는 것을 막는다." },
        tag: { en: "B3.1.2 moist; B3.1.4 surfactant", ja: "B3.1.2 湿っていること、B3.1.4 サーファクタント", zh: "B3.1.2 濕潤；B3.1.4 表面活性物質", ko: "B3.1.2 촉촉함; B3.1.4 계면 활성제" } },
      { x: 218, y: 232, name: { en: "Capillary network", ja: "毛細血管の網目", zh: "微血管網絡", ko: "모세 혈관 그물" },
        info: { en: "A dense capillary network surrounds each alveolus (extensive capillary beds). Blood flows continuously, so it carries oxygen away and brings carbon dioxide, which keeps the concentration gradients steep. The capillary wall is one cell thick.", ja: "各肺胞は毛細血管の密な網目（広い毛細血管床）に囲まれています。血液が連続して流れ、酸素を運び去り二酸化炭素を運んでくるので、濃度勾配が急に保たれます。毛細血管の壁は細胞1個分の厚さです。", zh: "每個肺泡被稠密的微血管網絡（廣闊的微血管床）包圍。血液持續流動，把氧氣帶走並帶來二氧化碳，使濃度梯度保持陡峭。微血管壁只有一個細胞厚。", ko: "촘촘한 모세 혈관 그물이 각 폐포를 둘러싸고 있다(넓은 모세 혈관상). 혈액이 계속 흐르므로 산소를 실어 가고 이산화 탄소를 가져와 농도 기울기를 가파르게 유지한다. 모세 혈관 벽은 세포 한 층 두께이다." },
        tag: { en: "B3.1.3 dense network of vessels, continuous blood flow; B3.1.4 extensive capillary beds", ja: "B3.1.3 血管の密な網目・血液の連続した流れ、B3.1.4 広い毛細血管床", zh: "B3.1.3 稠密血管網絡、血液持續流動；B3.1.4 廣闊的微血管床", ko: "B3.1.3 촘촘한 혈관 그물, 지속적인 혈류; B3.1.4 넓은 모세 혈관상" } },
      { x: 276, y: 168, name: { en: "Diffusion of O₂ and CO₂", ja: "O₂とCO₂の拡散", zh: "O₂與CO₂的擴散", ko: "O₂와 CO₂의 확산" },
        info: { en: "Oxygen diffuses from the air into the blood. Carbon dioxide diffuses from the blood into the air. Each gas moves down its own concentration gradient. There are huge numbers of alveoli, so the total surface area is large.", ja: "酸素は空気から血液へ拡散し、二酸化炭素は血液から空気へ拡散します。それぞれの気体は自分の濃度勾配に沿って動きます。肺胞は非常に多数あるので、総表面積は大きくなります。", zh: "氧氣由空氣擴散進入血液；二氧化碳由血液擴散進入空氣。每種氣體沿自己的濃度梯度移動。肺泡數目極多，所以總表面面積大。", ko: "산소는 공기에서 혈액으로 확산한다. 이산화 탄소는 혈액에서 공기로 확산한다. 각 기체는 자신의 농도 기울기를 따라 이동한다. 폐포의 수가 매우 많으므로 전체 표면적이 넓다." },
        tag: { en: "B3.1.2 large surface area; B3.1.4 high surface area", ja: "B3.1.2 広い表面積、B3.1.4 広い表面積", zh: "B3.1.2 大表面面積；B3.1.4 大表面面積", ko: "B3.1.2 넓은 표면적; B3.1.4 높은 표면적" } }
    ]
  };

  /* ------------------------------------------------------------ leaf parts */
  var LEAF = {
    title: { en: "Leaf in transverse section", ja: "葉の横断面", zh: "葉的橫切面", ko: "잎의 가로 단면" },
    vb: "0 0 340 262",
    art: function () {
      var s = "", i;
      // top cuticle
      s += '<rect class="cut" x="10" y="14" width="320" height="5"/>';
      // upper epidermis
      for (i = 0; i < 12; i++) s += '<rect class="epi" x="' + (10 + 26 * i) + '" y="19" width="26" height="26"/>';
      // palisade
      for (i = 0; i < 14; i++) {
        var px = 10 + 22.8 * i;
        s += '<rect class="pal" x="' + (px + 1).toFixed(1) + '" y="46" width="20" height="58" rx="6"/>';
        s += '<circle class="chl" cx="' + (px + 6).toFixed(1) + '" cy="58" r="2.2"/><circle class="chl" cx="' + (px + 14).toFixed(1) + '" cy="68" r="2.2"/><circle class="chl" cx="' + (px + 7).toFixed(1) + '" cy="82" r="2.2"/><circle class="chl" cx="' + (px + 14).toFixed(1) + '" cy="94" r="2.2"/>';
      }
      // spongy mesophyll (loose round cells with gaps)
      var sp = [[30, 128], [62, 142], [36, 168], [94, 128], [98, 164], [128, 146], [126, 184], [210, 128], [232, 156], [206, 178], [262, 130], [290, 160], [258, 186], [310, 130], [316, 184], [168, 188], [64, 188]];
      for (i = 0; i < sp.length; i++) s += '<circle class="pal" cx="' + sp[i][0] + '" cy="' + sp[i][1] + '" r="15"/>';
      // vascular bundle
      s += '<ellipse class="bun" cx="170" cy="140" rx="30" ry="25"/>';
      s += '<path class="xyl" d="M150,138 A20,20 0 0 1 190,138 Z"/>';
      s += '<path class="phl" d="M152,144 H188 A20,16 0 0 1 152,144 Z"/>';
      // lower epidermis with stoma
      for (i = 0; i < 9; i++) s += '<rect class="epi" x="' + (10 + 26 * i) + '" y="204" width="26" height="26"/>';
      s += '<ellipse class="gc" cx="251" cy="217" rx="8" ry="13"/><ellipse class="gc" cx="266" cy="217" rx="8" ry="13"/>';
      for (i = 0; i < 2; i++) s += '<rect class="epi" x="' + (276 + 26 * i) + '" y="204" width="26" height="26"/>';
      s += '<rect class="cut" x="10" y="230" width="236" height="5"/><rect class="cut" x="270" y="230" width="60" height="5"/>';
      // gas arrows at stoma
      s += '<line class="arr" x1="258" y1="256" x2="258" y2="238"/><polygon class="arrf" points="258,235 253,244 263,244"/><text class="tx" x="212" y="254">CO₂ ↑</text>';
      s += '<text class="tx" x="274" y="254">O₂, H₂O ↓</text>';
      return s;
    },
    parts: [
      { x: 40, y: 16, name: { en: "Waxy cuticle", ja: "ろうを含むクチクラ", zh: "蠟質角質層", ko: "왁스 큐티클(waxy cuticle)" },
        info: { en: "A waterproof layer on the outside of the epidermis. It reduces water loss. It is transparent, so light reaches the cells below.", ja: "表皮の外側にある防水の層です。水分の損失を減らします。透明なので、光が下の細胞に届きます。", zh: "表皮外面的防水層，減少水分散失。它是透明的，所以光能到達下面的細胞。", ko: "표피 바깥쪽의 방수층이다. 물의 손실을 줄인다. 투명하므로 빛이 아래의 세포에 도달한다." },
        tag: { en: "B3.1.7 waxy cuticle", ja: "B3.1.7 ろうを含むクチクラ", zh: "B3.1.7 蠟質角質層", ko: "B3.1.7 왁스 큐티클" } },
      { x: 100, y: 32, name: { en: "Upper epidermis", ja: "上側表皮", zh: "上表皮", ko: "위쪽 표피(upper epidermis)" },
        info: { en: "A single protective layer of transparent cells, with no chloroplasts, so light passes through to the photosynthetic tissue below.", ja: "透明な細胞の1層の保護層で、葉緑体がないので、光が下の光合成組織に届きます。", zh: "由透明細胞組成的單層保護層，沒有葉綠體，光可透入下面的光合組織。", ko: "엽록체가 없는 투명한 세포가 한 층으로 이루어진 보호층이다. 빛이 통과하여 아래의 광합성 조직에 닿는다." },
        tag: { en: "B3.1.7 epidermis", ja: "B3.1.7 表皮", zh: "B3.1.7 表皮", ko: "B3.1.7 표피" } },
      { x: 100, y: 76, name: { en: "Palisade mesophyll", ja: "さく状組織", zh: "柵欄葉肉", ko: "울타리 조직(palisade mesophyll)" },
        info: { en: "Tightly packed, column-shaped cells full of chloroplasts. This is where most photosynthesis happens, so most CO₂ is used here.", ja: "葉緑体でいっぱいの、柱状の細胞が密に並んだ層です。光合成の大部分がここで行われるので、CO₂の大部分がここで使われます。", zh: "緊密排列、柱形、充滿葉綠體的細胞層。大部分光合作用在此進行，所以大部分CO₂在此被使用。", ko: "엽록체가 가득한 기둥 모양의 세포가 빽빽하게 배열되어 있다. 광합성의 대부분이 일어나는 곳이므로 CO₂의 대부분이 여기서 사용된다." },
        tag: { en: "B3.1.8 plan diagram: palisade layer below the upper epidermis", ja: "B3.1.8 平面図：上側表皮の下のさく状組織の層", zh: "B3.1.8 平面圖：上表皮下方的柵欄層", ko: "B3.1.8 평면도: 위쪽 표피 아래의 울타리 조직층" } },
      { x: 60, y: 152, name: { en: "Spongy mesophyll", ja: "海綿状組織", zh: "海綿葉肉", ko: "해면 조직(spongy mesophyll)" },
        info: { en: "Loosely packed, rounded cells with moist cell walls. Gases dissolve in the moisture and diffuse into the cells. The loose packing leaves air spaces.", ja: "細胞壁が湿った、ゆるく詰まった丸い細胞の層です。気体は水分に溶けて細胞へ拡散します。ゆるい配置により空気の隙間ができます。", zh: "排列疏鬆、細胞壁濕潤的圓形細胞層。氣體溶於水分並擴散入細胞。疏鬆的排列留下氣室。", ko: "둥근 세포가 느슨하게 배열되어 있고 세포벽이 촉촉하다. 기체는 수분에 녹아 세포 안으로 확산한다. 느슨한 배열 때문에 공기 공간이 생긴다." },
        tag: { en: "B3.1.7 spongy mesophyll", ja: "B3.1.7 海綿状組織", zh: "B3.1.7 海綿葉肉", ko: "B3.1.7 해면 조직" } },
      { x: 112, y: 168, name: { en: "Air spaces", ja: "空気の隙間", zh: "氣室", ko: "공기 공간(air spaces)" },
        info: { en: "Gaps between spongy mesophyll cells. Gases diffuse quickly through air, so CO₂ reaches all the cells. The moist cell walls around the air spaces give a large surface area for gas exchange.", ja: "海綿状組織の細胞の間のすき間です。気体は空気中を速く拡散するので、CO₂がすべての細胞に届きます。空気の隙間を囲む湿った細胞壁が、ガス交換のための広い表面積をつくります。", zh: "海綿葉肉細胞之間的空隙。氣體在空氣中擴散很快，所以CO₂可到達所有細胞。氣室周圍濕潤的細胞壁提供大的氣體交換表面面積。", ko: "해면 조직 세포 사이의 틈이다. 기체는 공기 중에서 빠르게 확산하므로 CO₂가 모든 세포에 닿는다. 공기 공간 주위의 촉촉한 세포벽은 기체 교환을 위한 넓은 표면적을 제공한다." },
        tag: { en: "B3.1.7 air spaces; B3.1.2 large surface area, moist", ja: "B3.1.7 空気の隙間、B3.1.2 広い表面積・湿っていること", zh: "B3.1.7 氣室；B3.1.2 大表面面積、濕潤", ko: "B3.1.7 공기 공간; B3.1.2 넓은 표면적, 촉촉함" } },
      { x: 170, y: 140, name: { en: "Vein (vascular bundle)", ja: "葉脈（維管束）", zh: "葉脈（維管束）", ko: "잎맥(관다발)" },
        info: { en: "Xylem (upper, blue) brings water to the leaf cells. Phloem (lower, yellow) carries sugars away. The veins also support the leaf.", ja: "木部（上側、青）が葉の細胞へ水を運びます。師部（下側、黄）が糖を運び去ります。葉脈は葉を支える働きもあります。", zh: "木質部（上方，藍色）把水帶給葉細胞。韌皮部（下方，黃色）把糖運走。葉脈亦有支撐葉的作用。", ko: "물관(위쪽, 파란색)은 잎 세포에 물을 가져온다. 체관(아래쪽, 노란색)은 당을 실어 나른다. 잎맥은 잎을 지탱하기도 한다." },
        tag: { en: "B3.1.7 veins; B3.1.8 xylem towards the upper surface, phloem towards the lower", ja: "B3.1.7 葉脈、B3.1.8 木部は上面側、師部は下面側", zh: "B3.1.7 葉脈；B3.1.8 木質部朝向上表面，韌皮部朝向下表面", ko: "B3.1.7 잎맥; B3.1.8 물관은 위쪽 면 쪽, 체관은 아래쪽 면 쪽" } },
      { x: 110, y: 217, name: { en: "Lower epidermis", ja: "下側表皮", zh: "下表皮", ko: "아래쪽 표피(lower epidermis)" },
        info: { en: "A single layer of protective cells covered by a cuticle. In many plants most stomata are in the lower epidermis.", ja: "クチクラで覆われた、保護する細胞の1層です。多くの植物では、気孔の大部分が下側表皮にあります。", zh: "由角質層覆蓋的單層保護細胞。在許多植物中，大部分氣孔位於下表皮。", ko: "큐티클로 덮인 보호 세포 한 층이다. 많은 식물에서 기공의 대부분은 아래쪽 표피에 있다." },
        tag: { en: "B3.1.7 epidermis", ja: "B3.1.7 表皮", zh: "B3.1.7 表皮", ko: "B3.1.7 표피" } },
      { x: 258, y: 196, name: { en: "Stoma and guard cells", ja: "気孔と孔辺細胞", zh: "氣孔與保衛細胞", ko: "기공(stoma)과 공변세포(guard cells)" },
        info: { en: "The stoma is a pore. Its two guard cells change shape to open or close it. When open, CO₂ enters and O₂ leaves, but water vapour also escapes (transpiration). Closing the stomata reduces water loss.", ja: "気孔は孔です。2つの孔辺細胞が形を変えて開閉します。開いているとCO₂が入りO₂が出ますが、水蒸気も逃げます（蒸散）。気孔を閉じると水分の損失が減ります。", zh: "氣孔是小孔，兩個保衛細胞改變形狀使它開或關。張開時CO₂進入、O₂離開，但水蒸氣也會散失（蒸騰作用）。關閉氣孔可減少水分散失。", ko: "기공은 작은 구멍이다. 두 공변세포가 모양을 바꾸어 기공을 열고 닫는다. 열리면 CO₂가 들어오고 O₂가 나가지만 수증기도 빠져나간다(증산 작용). 기공을 닫으면 물의 손실이 줄어든다." },
        tag: { en: "B3.1.7 stomatal guard cells; B3.1.9 transpiration", ja: "B3.1.7 気孔の孔辺細胞、B3.1.9 蒸散", zh: "B3.1.7 氣孔保衛細胞；B3.1.9 蒸騰作用", ko: "B3.1.7 기공 공변세포; B3.1.9 증산 작용" } }
    ]
  };

  /* ------------------------------------------------ tap-to-label engine */
  function labelTool(root, ctx, cfg) {
    var t = ctx.t;
    var parts = cfg.parts;
    var mode = "explore", sel = -1, order = [], qi = 0, score = 0, asked = 0, answered = false;
    var uid = "gx" + Math.random().toString(36).slice(2, 7);

    var bar = mk("div", "gx-bar");
    var bExp = mk("button", "gx-b", t(UI.explore)); bExp.type = "button";
    var bQz = mk("button", "gx-b", t(UI.quiz)); bQz.type = "button";
    bar.appendChild(bExp); bar.appendChild(bQz);
    var art = mk("div", "gx-art");
    var chips = mk("div", "gx-chips");
    var info = mk("div", "gx-info"); info.setAttribute("aria-live", "polite");
    var note = mk("p", "gx-note", cfg.note ? t(cfg.note) : "");
    var wl = mk("div", "wl"), stageCol = mk("div", "wl-stage"), panel = mk("div", "wl-panel");
    note.className = "gx-note wl-legend";
    stageCol.appendChild(art); stageCol.appendChild(note);
    panel.appendChild(bar); panel.appendChild(chips); panel.appendChild(info);
    wl.appendChild(stageCol); wl.appendChild(panel); root.appendChild(wl);

    var svg = '<svg viewBox="' + cfg.vb + '" role="group" aria-label="' + t(cfg.title) + '">' + cfg.art(ctx.lang);
    for (var i = 0; i < parts.length; i++) {
      svg += '<g class="gx-hs" data-i="' + i + '" tabindex="0" role="button" aria-label="' + (i + 1) + '"><circle cx="' + parts[i].x + '" cy="' + parts[i].y + '" r="12"/><text x="' + parts[i].x + '" y="' + (parts[i].y + 4.5) + '">' + (i + 1) + '</text></g>';
    }
    art.innerHTML = svg + "</svg>";
    var hs = art.querySelectorAll(".gx-hs");
    var chipEls = [];
    for (i = 0; i < parts.length; i++) {
      var c = mk("button", "gx-chip", (i + 1) + ". " + t(parts[i].name) + (parts[i].ahl ? " (AHL)" : ""));
      c.type = "button"; c.setAttribute("aria-pressed", "false"); c.setAttribute("data-i", i);
      chips.appendChild(c); chipEls.push(c);
    }

    function clearMarks() {
      for (var k = 0; k < hs.length; k++) { hs[k].classList.remove("sel", "ok", "no"); }
      for (k = 0; k < chipEls.length; k++) chipEls[k].setAttribute("aria-pressed", "false");
    }
    function showPart(k) {
      var p = parts[k];
      info.className = "gx-info";
      info.innerHTML = "<strong>" + (k + 1) + ". " + t(p.name) + "</strong>" + (p.ahl ? '<span class="gx-al">AHL</span>' : "") +
        "<p>" + t(p.info) + "</p><p class=\"gx-tag\">" + t(UI.guide) + t(p.tag) + "</p>";
    }
    function selectExplore(k) {
      clearMarks(); sel = k;
      hs[k].classList.add("sel"); chipEls[k].setAttribute("aria-pressed", "true");
      showPart(k);
    }
    function shuffle(a) { for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var x = a[j]; a[j] = a[r]; a[r] = x; } return a; }
    function nextQ() {
      clearMarks(); answered = false;
      if (qi >= order.length) {
        info.className = "gx-info";
        info.innerHTML = "<strong>" + t(UI.score) + ": " + score + " / " + asked + "</strong><p>" + t(UI.done) + "</p>";
        return;
      }
      info.className = "gx-info";
      info.innerHTML = '<span class="gx-quiz-h">' + t(UI.find) + "</span><strong>" + t(parts[order[qi]].name) + "</strong>" +
        "<p class=\"gx-tag\">" + t(UI.score) + ": " + score + " / " + asked + "</p>";
    }
    function answer(k) {
      if (answered) return;
      answered = true; asked++;
      var target = order[qi];
      clearMarks();
      if (k === target) {
        score++; hs[k].classList.add("ok");
        info.className = "gx-info good";
        info.innerHTML = "<strong>" + t(UI.right) + "</strong> " + t(parts[k].name) + "<p>" + t(parts[k].info) + "</p>";
      } else {
        hs[k].classList.add("no"); hs[target].classList.add("ok");
        info.className = "gx-info bad";
        info.innerHTML = "<strong>" + t(UI.wrong) + "</strong>" + t(parts[k].name) + " (" + (k + 1) + ")<p>" + t(UI.ans) + "<strong>" + t(parts[target].name) + " (" + (target + 1) + ")</strong></p>";
      }
      qi++;
      var nb = document.createElement("button");
      nb.type = "button"; nb.className = "gx-b"; nb.textContent = (qi >= order.length ? "✓" : "→");
      nb.setAttribute("aria-label", qi >= order.length ? t(UI.score) : (ctx.lang === "ko" ? "다음" : "next"));
      nb.addEventListener("click", nextQ);
      info.appendChild(nb); nb.focus();
    }
    function setMode(m) {
      mode = m;
      bExp.setAttribute("aria-pressed", m === "explore" ? "true" : "false");
      bQz.setAttribute("aria-pressed", m === "quiz" ? "true" : "false");
      clearMarks();
      if (m === "explore") {
        chips.style.display = "";
        info.className = "gx-info";
        info.innerHTML = "<p>" + t(UI.tapHint) + "</p>";
        sel = -1;
      } else {
        chips.style.display = "none";
        order = shuffle(parts.map(function (_, k) { return k; })); qi = 0; score = 0; asked = 0;
        nextQ();
      }
    }
    function hit(k) { if (mode === "explore") selectExplore(k); else answer(k); }
    function onClick(e) {
      var g = e.target.closest && e.target.closest(".gx-hs");
      if (g) { hit(parseInt(g.getAttribute("data-i"), 10)); return; }
      var c = e.target.closest && e.target.closest(".gx-chip");
      if (c) hit(parseInt(c.getAttribute("data-i"), 10));
    }
    function onKey(e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var g = e.target.closest && e.target.closest(".gx-hs");
      if (g) { e.preventDefault(); hit(parseInt(g.getAttribute("data-i"), 10)); }
    }
    bExp.addEventListener("click", function () { setMode("explore"); });
    bQz.addEventListener("click", function () { setMode("quiz"); });
    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKey);
    bExp.setAttribute("aria-pressed", "true"); bQz.setAttribute("aria-pressed", "false");
    setMode("explore");
    return function () { root.removeEventListener("click", onClick); root.removeEventListener("keydown", onKey); };
  }

  function mountLabel(el, ctx, cfg) {
    ensureCss();
    var root = mk("div", "gx-root"); el.appendChild(root);
    return labelTool(root, ctx, cfg);
  }

  /* -------------------------------------------------------- gas-exchange */
  IB.registerWidget("gas-exchange", {
    title: { en: "Gas-exchange surfaces: alveolus and leaf", ja: "ガス交換面：肺胞と葉", zh: "氣體交換表面：肺泡與葉", ko: "기체 교환 표면: 폐포와 잎" },
    mount: function (el, ctx) {
      ensureCss();
      var t = ctx.t;
      var root = mk("div", "gx-root"); el.appendChild(root);
      var tabs = mk("div", "gx-tabs wl-tabs"); tabs.setAttribute("role", "tablist");
      var host = mk("div");
      root.appendChild(tabs); root.appendChild(host);
      var cleanup = null, cur = "lung";
      var bL = mk("button", "gx-b", t(UI.lung)), bF = mk("button", "gx-b", t(UI.leaf));
      [bL, bF].forEach(function (b) { b.type = "button"; b.setAttribute("role", "tab"); tabs.appendChild(b); });
      function show(w) {
        cur = w;
        if (cleanup) { cleanup(); cleanup = null; }
        host.innerHTML = "";
        bL.setAttribute("aria-selected", w === "lung" ? "true" : "false");
        bF.setAttribute("aria-selected", w === "leaf" ? "true" : "false");
        var inner = mk("div", "gx-root"); host.appendChild(inner);
        cleanup = labelTool(inner, ctx, w === "lung" ? { title: LUNG.title, vb: LUNG.vb, art: LUNG.art, parts: LUNG.parts, note: UI.lungNote } : { title: LEAF.title, vb: LEAF.vb, art: LEAF.art, parts: LEAF.parts, note: UI.leafNote });
      }
      bL.addEventListener("click", function () { show("lung"); });
      bF.addEventListener("click", function () { show("leaf"); });
      var o = ctx.options && ctx.options.tab;
      if (o === 1 || o === "1" || o === "leaf") cur = "leaf";
      show(cur);
      return function () { if (cleanup) cleanup(); };
    }
  });

  IB.registerWidget("gas-exchange-leaf", {
    title: { en: "Leaf structure for gas exchange", ja: "ガス交換のための葉の構造", zh: "適應氣體交換的葉結構", ko: "기체 교환을 위한 잎의 구조" },
    mount: function (el, ctx) {
      return mountLabel(el, ctx, { title: LEAF.title, vb: LEAF.vb, art: LEAF.art, parts: LEAF.parts, note: UI.leafNote });
    }
  });

  /* ------------------------------------------------------------- o2-curve */
  var OC = {
    title: { en: "Oxygen dissociation curves (AHL)", ja: "酸素解離曲線（AHL）", zh: "氧解離曲線（AHL）", ko: "산소 해리 곡선 (AHL)" },
    adult: { en: "Adult haemoglobin", ja: "成人型ヘモグロビン", zh: "成人血紅蛋白", ko: "성인 헤모글로빈" },
    foetal: { en: "Foetal haemoglobin", ja: "胎児型ヘモグロビン", zh: "胎兒血紅蛋白", ko: "태아 헤모글로빈" },
    bohr: { en: "Adult, more CO₂ (Bohr shift)", ja: "成人型、CO₂が多い（ボーア効果）", zh: "成人，較多CO₂（玻爾效應）", ko: "성인, CO₂ 많음 (보어 효과)" },
    x: { en: "Oxygen partial pressure (kPa)", ja: "酸素分圧 (kPa)", zh: "氧分壓 (kPa)", ko: "산소 분압 (kPa)" },
    y: { en: "Haemoglobin saturation (%)", ja: "ヘモグロビンの飽和度 (%)", zh: "血紅蛋白飽和度 (%)", ko: "헤모글로빈 포화도 (%)" },
    slider: { en: "Oxygen partial pressure", ja: "酸素分圧", zh: "氧分壓", ko: "산소 분압" },
    lungs: { en: "lungs", ja: "肺", zh: "肺", ko: "폐" },
    rest: { en: "resting tissue", ja: "安静時の組織", zh: "靜止的組織", ko: "안정 시 조직" },
    active: { en: "active muscle", ja: "活動中の筋肉", zh: "活躍的肌肉", ko: "활동 근육" },
    s: { en: "Show the three parts of the S-shape", ja: "S字形の3つの部分を表示", zh: "顯示S形的三個部分", ko: "S자 곡선의 세 부분 보기" },
    z1: { en: "1 slow start", ja: "1 ゆるやかな立ち上がり", zh: "1 起初緩慢", ko: "1 느린 시작" },
    z2: { en: "2 steep", ja: "2 急な部分", zh: "2 陡峭", ko: "2 가파름" },
    z3: { en: "3 levels off", ja: "3 平らになる", zh: "3 趨平", ko: "3 평평해짐" },
    sites: { en: "Average number of haem groups carrying O₂ per adult haemoglobin (out of 4):", ja: "成人型ヘモグロビン1分子あたり、O₂を結合しているヘム基の平均数（4つのうち）：", zh: "每個成人血紅蛋白中載有O₂的血紅素基團平均數目（共4個）：", ko: "성인 헤모글로빈 1분자당 O₂와 결합한 헴 기의 평균 수(4개 중):" },
    ill: { en: "Illustrative values. Real curves differ a little between sources. The positions of 'lungs' and 'tissue' are approximate.", ja: "イラスト用の値です。実際の曲線は資料によって少し異なります。「肺」「組織」の位置はおおよそです。", zh: "示範數值。實際曲線在不同資料中略有差異。「肺」和「組織」的位置只是大約。", ko: "예시 값이다. 실제 곡선은 자료에 따라 조금씩 다르다. '폐'와 '조직'의 위치는 대략적이다." },
    more: { en: "Explanation", ja: "説明", zh: "解說", ko: "설명" },
    sat: { en: "saturation", ja: "飽和度", zh: "飽和度", ko: "포화도" },
    expl: {
      s1: { en: "1. At low O₂ the first O₂ binds slowly, so the curve is shallow.", ja: "1. 酸素が少ないと最初のO₂はゆっくり結合するので、曲線はなだらかです。", zh: "1. 氧氣少時，第一個O₂結合緩慢，所以曲線平緩。", ko: "1. O₂가 낮을 때는 첫 번째 O₂가 천천히 결합하므로 곡선이 완만하다." },
      s2: { en: "2. Once one O₂ has bound, the shape changes and the next ones bind more easily (cooperative binding), so the curve is steep.", ja: "2. 1つのO₂が結合すると形が変わり、次のO₂が結合しやすくなる（協同的結合）ので、曲線は急になります。", zh: "2. 一個O₂結合後，形狀改變，其後的O₂更容易結合（協同結合），所以曲線陡峭。", ko: "2. O₂ 하나가 결합하면 모양이 변하여 다음 O₂들이 더 쉽게 결합한다(협동적 결합, cooperative binding). 그래서 곡선이 가파르다." },
      s3: { en: "3. At high O₂ nearly all sites are full, so there are few free sites and the curve levels off.", ja: "3. 酸素が多いとほとんどの部位が埋まっており、空きが少ないので曲線は平らになります。", zh: "3. 氧氣多時，差不多所有位點都已佔滿，空位少，所以曲線趨平。", ko: "3. O₂가 높을 때는 거의 모든 부위가 차 있어 빈 부위가 거의 없으므로 곡선이 평평해진다." },
      fo: { en: "The foetal curve is to the left of the adult curve: higher saturation at the same O₂ pressure, so foetal haemoglobin has a higher affinity and can take O₂ from the mother's blood at the placenta.", ja: "胎児型の曲線は成人型の左にあります。同じ酸素分圧で飽和度が高いので、親和性が高く、胎盤で母親の血液から酸素を受け取れます。", zh: "胎兒曲線在成人曲線的左方：在相同氧分壓下飽和度較高，所以親和力較高，能在胎盤從母親血液取得氧氣。", ko: "태아 곡선은 성인 곡선의 왼쪽에 있다. 같은 O₂ 압력에서 포화도가 더 높으므로, 태아 헤모글로빈은 친화도(affinity)가 더 높아 태반에서 어머니의 혈액으로부터 O₂를 가져올 수 있다." },
      bo: { en: "More CO₂ shifts the curve to the right: lower saturation at the same O₂ pressure, so more O₂ is released. This helps actively respiring tissues, which make a lot of CO₂.", ja: "CO₂が多いと曲線は右へずれます。同じ酸素分圧で飽和度が低いので、より多くのO₂が放出されます。CO₂を多くつくる活発に呼吸している組織に役立ちます。", zh: "較多CO₂令曲線向右移：在相同氧分壓下飽和度較低，所以釋出更多O₂，有助產生大量CO₂的活躍呼吸組織。", ko: "CO₂가 많아지면 곡선이 오른쪽으로 이동한다. 같은 O₂ 압력에서 포화도가 낮으므로 더 많은 O₂가 방출된다. 이는 CO₂를 많이 만드는 활발히 호흡하는 조직에 도움이 된다." }
    }
  };
  function hill(p, p50) { var n = 2.7, a = Math.pow(p, n); return 100 * a / (a + Math.pow(p50, n)); }

  IB.registerWidget("o2-curve", {
    title: OC.title,
    mount: function (el, ctx) {
      ensureCss();
      var t = ctx.t;
      var root = mk("div", "gx-root"); el.appendChild(root);
      var uid = "oc" + Math.random().toString(36).slice(2, 7);
      var show = { ad: true, fo: false, bo: false, zones: false };
      var last = "";
      var p = 5;
      var L = 52, R = 404, T = 14, B = 212, XM = 14;
      function X(v) { return L + (v / XM) * (R - L); }
      function Y(v) { return B - (v / 100) * (B - T); }

      root.innerHTML =
        '<div class="wl"><div class="wl-stage">' +
        '<div class="gx-art"><svg class="oc-svg" viewBox="0 0 420 248" role="img" aria-label="' + t(OC.title) + '"></svg></div>' +
        '</div>' +
        '<div class="wl-panel">' +
        '<div class="gx-tog"><span class="gx-al" style="margin:0 .2rem 0 0;align-self:center">AHL</span>' +
        '<button type="button" class="gx-b" data-k="fo" aria-pressed="false"><span class="gx-sw" style="border-top-style:dashed;border-color:var(--theme-b,#b82a56)"></span>' + t(OC.foetal) + '</button>' +
        '<button type="button" class="gx-b" data-k="bo" aria-pressed="false"><span class="gx-sw" style="border-top-style:dotted;border-color:var(--theme-a,#07756f)"></span>' + t(OC.bohr) + '</button>' +
        '<button type="button" class="gx-b" data-k="zones" aria-pressed="false">' + t(OC.s) + '</button>' +
        '</div>' +
        '<div><label for="' + uid + '"><strong>' + t(OC.slider) + ': <span class="oc-pv"></span> kPa</strong></label>' +
        '<input id="' + uid + '" type="range" min="0" max="14" step="0.5" value="' + p + '"></div>' +
        '<div class="gx-read oc-read" aria-live="polite"></div>' +
        '<details class="oc-det"><summary>' + t(OC.more) + '</summary><div class="gx-info oc-info" tabindex="0"></div><p class="gx-note">' + t(OC.ill) + '</p></details>' +
        '</div></div>';

      var svg = root.querySelector(".oc-svg");
      var slider = root.querySelector("input");
      var pv = root.querySelector(".oc-pv");
      var read = root.querySelector(".oc-read");
      var info = root.querySelector(".oc-info");
      var det = root.querySelector(".oc-det");

      function path(p50, cls) {
        var pts = [];
        for (var v = 0; v <= XM + 0.001; v += 0.25) pts.push(X(v).toFixed(1) + "," + Y(hill(v, p50)).toFixed(1));
        return '<polyline class="' + cls + '" points="' + pts.join(" ") + '"/>';
      }
      function draw() {
        var g = "", i;
        if (show.zones) {
          g += '<rect class="zone" x="' + X(0) + '" y="' + T + '" width="' + (X(2.5) - X(0)) + '" height="' + (B - T) + '"/>';
          g += '<rect class="zone2" x="' + X(2.5) + '" y="' + T + '" width="' + (X(6) - X(2.5)) + '" height="' + (B - T) + '"/>';
          g += '<rect class="zone" x="' + X(8) + '" y="' + T + '" width="' + (X(14) - X(8)) + '" height="' + (B - T) + '"/>';
          g += '<text class="tx" x="' + (X(0) + 3) + '" y="' + (T + 13) + '" style="font-size:15px;font-weight:700">' + '1' + '</text>';
          g += '<text class="tx" x="' + (X(2.5) + 4) + '" y="' + (T + 13) + '" style="font-size:15px;font-weight:700">' + '2' + '</text>';
          g += '<text class="tx" x="' + (X(8) + 4) + '" y="' + (T + 13) + '" style="font-size:15px;font-weight:700">' + '3' + '</text>';
        }
        for (i = 0; i <= 100; i += 25) g += '<line class="gl" x1="' + L + '" x2="' + R + '" y1="' + Y(i) + '" y2="' + Y(i) + '"/><text class="tm" x="' + (L - 5) + '" y="' + (Y(i) + 4) + '" text-anchor="end">' + i + '</text>';
        for (i = 0; i <= 14; i += 2) g += '<text class="tm" x="' + X(i) + '" y="' + (B + 16) + '" text-anchor="middle">' + i + '</text>';
        g += '<line class="ax" x1="' + L + '" x2="' + L + '" y1="' + T + '" y2="' + B + '"/><line class="ax" x1="' + L + '" x2="' + R + '" y1="' + B + '" y2="' + B + '"/>';
        // markers
        var marks = [[13, OC.lungs], [5, OC.rest], [3, OC.active]];
        for (i = 0; i < marks.length; i++) {
          g += '<line class="mk" x1="' + X(marks[i][0]) + '" x2="' + X(marks[i][0]) + '" y1="' + (T + 16) + '" y2="' + B + '"/>';
          g += '<text class="tm" x="' + X(marks[i][0]) + '" y="' + (B - 4 - i * 0) + '" text-anchor="' + (i === 0 ? "end" : "middle") + '" transform="rotate(-90 ' + (X(marks[i][0]) - 3) + ' ' + (B - 4) + ')" dx="0" style="text-anchor:start">' + t(marks[i][1]) + '</text>';
        }
        g += path(3.5, "c-ad");
        if (show.fo) g += path(2.5, "c-fo");
        if (show.bo) g += path(4.7, "c-bo");
        // cursor
        g += '<line class="cur" x1="' + X(p) + '" x2="' + X(p) + '" y1="' + T + '" y2="' + B + '" stroke-dasharray="4 3"/>';
        g += '<circle cx="' + X(p) + '" cy="' + Y(hill(p, 3.5)) + '" r="5" style="fill:var(--accent,#2547c7);stroke:var(--surface,#fff);stroke-width:2"/>';
        if (show.fo) g += '<circle cx="' + X(p) + '" cy="' + Y(hill(p, 2.5)) + '" r="5" style="fill:var(--theme-b,#b82a56);stroke:var(--surface,#fff);stroke-width:2"/>';
        if (show.bo) g += '<circle cx="' + X(p) + '" cy="' + Y(hill(p, 4.7)) + '" r="5" style="fill:var(--theme-a,#07756f);stroke:var(--surface,#fff);stroke-width:2"/>';
        g += '<text class="tx" x="' + ((L + R) / 2) + '" y="243" text-anchor="middle">' + t(OC.x) + '</text>';
        g += '<text class="tx" x="13" y="' + ((T + B) / 2) + '" text-anchor="middle" transform="rotate(-90 13 ' + ((T + B) / 2) + ')">' + t(OC.y) + '</text>';
        svg.innerHTML = g;

        pv.textContent = p.toFixed(1);
        var sa = hill(p, 3.5);
        var rows = '<span><span class="gx-sw" style="border-color:var(--accent,#2547c7)"></span>' + t(OC.adult) + '</span><strong>' + Math.round(sa) + ' %</strong>';
        if (show.fo) rows += '<span><span class="gx-sw" style="border-top-style:dashed;border-color:var(--theme-b,#b82a56)"></span>' + t(OC.foetal) + '</span><strong>' + Math.round(hill(p, 2.5)) + ' %</strong>';
        if (show.bo) rows += '<span><span class="gx-sw" style="border-top-style:dotted;border-color:var(--theme-a,#07756f)"></span>' + t(OC.bohr) + '</span><strong>' + Math.round(hill(p, 4.7)) + ' %</strong>';
        var sites = (sa / 100) * 4, dots = "";
        for (i = 0; i < 4; i++) {
          var f = sites - i;
          dots += '<span class="gx-site ' + (f >= 0.75 ? "f" : (f >= 0.25 ? "h" : "")) + '"></span>';
        }
        rows += '<span>' + t(OC.sites) + '</span><span><strong>' + sites.toFixed(1) + '</strong><span class="gx-sites" aria-hidden="true">' + dots + '</span></span>';
        read.innerHTML = rows;

        var txt = "";
        // explain the feature switched on most recently (others stay on the graph)
        var which = show[last] ? last : (show.zones ? "zones" : show.fo ? "fo" : show.bo ? "bo" : "");
        if (which === "zones") txt += "<p>" + t(OC.expl.s1) + "</p><p>" + t(OC.expl.s2) + "</p><p>" + t(OC.expl.s3) + "</p>";
        if (which === "fo") txt += "<p>" + t(OC.expl.fo) + "</p>";
        if (which === "bo") txt += "<p>" + t(OC.expl.bo) + "</p>";
        info.style.display = txt ? "" : "none";
        info.innerHTML = txt;
      }
      function onToggle(e) {
        var b = e.target.closest && e.target.closest("button[data-k]");
        if (!b) return;
        var k = b.getAttribute("data-k");
        show[k] = !show[k];
        b.setAttribute("aria-pressed", show[k] ? "true" : "false");
        if (show[k]) { last = k; det.open = true; }
        draw();
      }
      function onSlide() { p = parseFloat(slider.value); draw(); }
      root.addEventListener("click", onToggle);
      slider.addEventListener("input", onSlide);
      draw();
      return function () { root.removeEventListener("click", onToggle); slider.removeEventListener("input", onSlide); };
    }
  });
})();
