/* Widget: cell-compare — prokaryote vs animal vs plant vs fungal cell, plus atypical cells (A2.2.5, A2.2.6, A2.2.8, A2.2.9)
   Registers "cell-compare" (opens on the diagram tab, animal cell), "cell-compare-pro" (diagram tab, prokaryote cell)
   and "cell-compare-atypical" (opens on the atypical-cells tab). */
(function () {
  "use strict";
  var STYLE_ID = "ibw-cell-compare-css";
  var CSS = [
    ".w-cell-compare{color:var(--ink,#0f2029);font-family:var(--font-body,system-ui,sans-serif)}",
    ".w-cell-compare .cc-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:0;list-style:none}",
    ".w-cell-compare .cc-chips.row{grid-column:1/-1}",
    ".w-cell-compare .cc-body{display:contents}",
    ".w-cell-compare .wl-stage{background:transparent;border:0;padding:0}",
    ".w-cell-compare svg.cc-svg{display:block;width:100%;height:auto;max-height:var(--stage-max);background:var(--bg,#edf1f3);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius-lg,12px)}",
    ".w-cell-compare .wl-tabs button[aria-selected='true']{background:var(--accent-soft,#e0e7fb);color:var(--ink,#0f2029);border-bottom-color:var(--accent,#2547c7)}",
    ".w-cell-compare button.cc-chip{border:1px solid var(--line-strong,#c3d0d7);background:var(--surface,#fff);color:var(--ink,#0f2029);font:inherit;line-height:1.2;cursor:pointer;border-radius:8px;min-height:40px;padding:5px 11px;font-size:.85rem}",
    ".w-cell-compare button.cc-chip{border-radius:8px;padding:5px 9px;font-size:.8rem;min-height:40px}",
    ".w-cell-compare button[aria-pressed='true']{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-cell-compare button:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-cell-compare .cc-cap{font-size:.85rem;color:var(--muted,#4d626d);margin:4px 0 0}",
    ".w-cell-compare .cc-info{margin:0;padding:10px 12px;background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);border-left:5px solid var(--accent,#2547c7);border-radius:var(--radius,6px)}",
    ".w-cell-compare .cc-info h4{margin:0 0 4px;font-size:1rem}",
    ".w-cell-compare .cc-info p{margin:0 0 6px;font-size:.92rem;line-height:1.45}",
    ".w-cell-compare .cc-found{display:flex;flex-wrap:wrap;gap:5px;align-items:center;font-size:.8rem;color:var(--muted,#4d626d)}",
    ".w-cell-compare .cc-tag{border:1px solid var(--line,#c3d0d7);background:var(--surface-2,#e3eaee);border-radius:999px;padding:1px 8px;color:var(--ink,#0f2029)}",
    ".w-cell-compare .cc-tag.on{background:var(--accent-soft,#e0e7fb);border-color:var(--accent,#2547c7)}",
    ".w-cell-compare .cc-big{display:inline-block;font-weight:700;font-size:1.05rem;padding:2px 10px;border-radius:999px;background:var(--ahl,#ffcf3a);color:var(--ahl-ink,#2a2000);margin-bottom:6px}",
    ".w-cell-compare .cc-grid{border:1px solid var(--line,#c3d0d7);border-radius:var(--radius,6px);overflow:hidden;font-size:.76rem}",
    ".w-cell-compare .cc-gr{display:grid;grid-template-columns:minmax(0,1.25fr) repeat(4,minmax(0,1fr));border-top:1px solid var(--line,#c3d0d7)}",
    ".w-cell-compare .cc-gr.head{border-top:0}",
    ".w-cell-compare .cc-gh,.w-cell-compare .cc-gt,.w-cell-compare .cc-gc{padding:5px 5px;line-height:1.3;border-left:1px solid var(--line,#c3d0d7);overflow-wrap:anywhere}",
    ".w-cell-compare .cc-gh:first-child,.w-cell-compare .cc-gt{border-left:0}",
    ".w-cell-compare .cc-gh{background:var(--surface-2,#e3eaee);font-weight:700}",
    ".w-cell-compare .cc-gt{background:var(--surface,#fff);font-weight:600}",
    ".w-cell-compare .cc-gc.y{background:var(--good-soft,#dcf2e4)}",
    ".w-cell-compare .cc-gc.n{background:var(--surface,#fff);color:var(--muted,#4d626d)}",
    ".w-cell-compare .cc-gc.d{background:var(--accent-soft,#e0e7fb)}",
    ".w-cell-compare .cc-note{font-size:.78rem;color:var(--muted,#4d626d);margin:6px 0 0;grid-column:1/-1}",
    ".w-cell-compare .cc-tblwrap{grid-column:1/-1;min-width:0}",
    /* shapes */
    ".w-cell-compare .hit{cursor:pointer}",
    ".w-cell-compare .hit:hover{opacity:.78}",
    ".w-cell-compare .hit.sel{filter:drop-shadow(0 0 4px var(--ahl,#ffcf3a)) drop-shadow(0 0 2px var(--ahl,#ffcf3a))}",
    ".w-cell-compare .pad{fill:none;stroke:transparent;stroke-width:16;pointer-events:stroke}",
    ".w-cell-compare .padc{fill:transparent;pointer-events:all}",
    ".w-cell-compare .k-wall{fill:var(--hydrophobic,#8a6838);fill-opacity:.35;stroke:var(--hydrophobic,#8a6838);stroke-width:2}",
    ".w-cell-compare .k-mem{fill:var(--surface,#fff);stroke:var(--accent,#2547c7);stroke-width:4}",
    ".w-cell-compare .k-cyt{fill:var(--surface,#fff);stroke:none}",
    ".w-cell-compare .k-nuc{fill:var(--accent-soft,#e0e7fb);stroke:var(--accent,#2547c7);stroke-width:3.5}",
    ".w-cell-compare .k-nuc2{fill:none;stroke:var(--accent,#2547c7);stroke-width:2}",
    ".w-cell-compare .k-chrom{fill:none;stroke:var(--ink,#0f2029);stroke-width:5;stroke-linecap:round}",
    ".w-cell-compare .k-dna{fill:none;stroke:var(--theme-b,#b82a56);stroke-width:3.5;stroke-linecap:round;stroke-linejoin:round}",
    ".w-cell-compare .k-nucleoid{fill:var(--theme-b-soft,#f8dfe7);stroke:var(--theme-b,#b82a56);stroke-width:1.5;stroke-dasharray:3 4}",
    ".w-cell-compare .k-rib{fill:var(--ink,#0f2029)}",
    ".w-cell-compare .k-mito{fill:var(--theme-b-soft,#f8dfe7);stroke:var(--theme-b,#b82a56);stroke-width:2.5}",
    ".w-cell-compare .k-crista{fill:none;stroke:var(--theme-b,#b82a56);stroke-width:2}",
    ".w-cell-compare .k-chlo{fill:var(--good-soft,#dcf2e4);stroke:var(--good,#17703f);stroke-width:2.5}",
    ".w-cell-compare .k-grana{fill:var(--good,#17703f);opacity:.65}",
    ".w-cell-compare .k-plast{fill:var(--ahl-soft,#fff4c9);stroke:var(--warn,#9a4a00);stroke-width:2.5}",
    ".w-cell-compare .k-starch{fill:var(--surface,#fff);stroke:var(--warn,#9a4a00);stroke-width:1}",
    ".w-cell-compare .k-er{fill:none;stroke:var(--theme-a,#07756f);stroke-width:5;stroke-linecap:round}",
    ".w-cell-compare .k-golgi{fill:none;stroke:var(--lvl-3,#2679bd);stroke-width:5;stroke-linecap:round}",
    ".w-cell-compare .k-ves{fill:var(--ahl-soft,#fff4c9);stroke:var(--warn,#9a4a00);stroke-width:2}",
    ".w-cell-compare .k-lys{fill:var(--bad-soft,#fbe0de);stroke:var(--bad,#b3261e);stroke-width:2.5}",
    ".w-cell-compare .k-vac{fill:var(--accent-soft,#e0e7fb);stroke:var(--accent,#2547c7);stroke-width:2.5}",
    ".w-cell-compare .k-cent{fill:var(--ink,#0f2029)}",
    ".w-cell-compare .k-cilia{fill:none;stroke:var(--lvl-1,#c88400);stroke-width:3;stroke-linecap:round}",
    ".w-cell-compare .k-mvil{fill:none;stroke:var(--accent,#2547c7);stroke-width:3;stroke-linecap:round}",
    ".w-cell-compare .k-csk{fill:none;stroke:var(--muted,#4d626d);stroke-width:1.6;stroke-dasharray:5 4}",
    ".w-cell-compare .k-pore{fill:var(--bg,#edf1f3)}",
    ".w-cell-compare .k-stri{stroke:var(--theme-b,#b82a56);stroke-width:2;opacity:.45}",
    ".w-cell-compare .k-rbc{fill:var(--bad-soft,#fbe0de);stroke:var(--bad,#b3261e);stroke-width:3}",
    ".w-cell-compare .k-rbc2{fill:var(--surface,#fff);fill-opacity:.55;stroke:var(--bad,#b3261e);stroke-width:1.5;stroke-dasharray:4 3}",
    ".w-cell-compare .k-tube{fill:var(--surface,#fff);stroke:var(--hydrophobic,#8a6838);stroke-width:4}",
    ".w-cell-compare .k-sieve{stroke:var(--hydrophobic,#8a6838);stroke-width:5}",
    ".w-cell-compare .k-lbl{font-size:14px;fill:var(--muted,#4d626d);font-family:var(--font-body,sans-serif)}",
    "@media (prefers-reduced-motion:no-preference){.w-cell-compare .hit{transition:opacity .15s}}"
  ].join("\n");

  function injectCss() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  var T = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko || en }; };

  var UI = {
    title: T("Cell comparison", "細胞の比較", "細胞比較", "세포 비교"),
    tabDiagram: T("Cell diagram", "細胞の図", "細胞圖", "세포 그림"),
    tabTable: T("Compare table", "比較表", "比較表", "비교표"),
    tabAtyp: T("Atypical cells", "典型的でない細胞", "非典型細胞", "특수한 세포 (atypical cells)"),
    prompt: T("Tap a structure in the picture, or choose it from the list below.", "図の構造をタップするか、下の一覧から選びます。", "點選圖中的結構，或從下面的清單選擇。", "그림에서 구조를 누르거나 아래 목록에서 고르시오."),
    promptA: T("Choose a cell type below.", "下から細胞の種類を選びます。", "請從下面選擇細胞類型。", "아래에서 세포의 종류를 고르시오."),
    function: T("Function", "働き", "功能", "기능"),
    foundIn: T("Found in:", "存在する細胞：", "存在於：", "발견되는 곳:"),
    structures: T("Structures (list)", "構造の一覧", "結構清單", "구조 (목록)"),
    nuclei: T("Number of nuclei:", "核の数：", "細胞核數目：", "핵의 수:"),
    typical: T("A typical eukaryote cell has one nucleus.", "典型的な真核細胞には核が1つあります。", "典型的真核細胞有一個細胞核。", "전형적인 진핵생물(eukaryote) 세포에는 핵이 1개 있다."),
    feature: T("Feature", "特徴", "特徵", "특징"),
    tableNote: T("Green = present, white = absent. “Absent” for centrioles, cilia and flagella means absent in most cells of that type. “—” = not covered for this cell type here.",
      "緑 = あり、白 = なし。中心小体・繊毛・鞭毛の「なし」は、その種類のほとんどの細胞にないという意味です。「—」はここでは扱いません。",
      "綠色 = 有，白色 = 沒有。中心粒、纖毛和鞭毛的「沒有」指該類細胞大多沒有。「—」= 此處不涉及。", "초록 = 있음, 흰색 = 없음. 중심체, 섬모, 편모의 “없음”은 그 종류의 대부분의 세포에 없다는 뜻이다. “—” = 여기서는 이 세포 종류에 대해 다루지 않음."),
    drawing: T("Simplified diagram, not to scale.", "簡略化した図（縮尺なし）。", "簡化圖示（未按比例）。", "단순화한 그림이며 축척은 정확하지 않다."),
    many: T("Many", "多数", "很多", "많음"),
    none: T("None", "なし", "沒有", "없음"),
    noneMature: T("None (when mature)", "なし（成熟後）", "沒有（成熟時）", "없음 (성숙했을 때)")
  };

  var CELLNAME = {
    pro: T("Prokaryote (e.g. Bacillus)", "原核細胞 (prokaryote)", "原核細胞 (prokaryote)", "원핵생물(prokaryote) (예: Bacillus)"),
    animal: T("Animal cell", "動物細胞 (animal)", "動物細胞 (animal)", "동물 세포"),
    plant: T("Plant cell", "植物細胞 (plant)", "植物細胞 (plant)", "식물 세포"),
    fungal: T("Fungal cell", "菌類の細胞 (fungal)", "真菌細胞 (fungal)", "균류 세포")
  };
  var CELLSHORT = {
    pro: T("Prokaryote", "原核", "原核", "원핵생물"),
    animal: T("Animal", "動物", "動物", "동물"),
    plant: T("Plant", "植物", "植物", "식물"),
    fungal: T("Fungal", "菌類", "真菌", "균류")
  };
  var CELLORDER = ["pro", "animal", "plant", "fungal"];

  /* structures: [name, function] each a T() */
  var S = {
    wall_pro: [T("Cell wall", "細胞壁 (cell wall)", "細胞壁 (cell wall)", "세포벽 (cell wall)"),
      T("Outside the plasma membrane. Gives the cell its shape, protects it and stops it bursting if it takes in too much water.", "細胞膜の外側にあります。細胞の形を保ち、保護し、水を取り込みすぎて破裂するのを防ぎます。", "在質膜之外。賦予細胞形狀、保護細胞，並防止因吸水過多而脹破。", "세포막 바깥에 있다. 세포에 모양을 주고 보호하며, 물을 너무 많이 흡수해도 터지지 않게 한다.")],
    wall_plant: [T("Cell wall (cellulose)", "細胞壁 (cell wall)：セルロース", "細胞壁 (cell wall)：纖維素", "세포벽(셀룰로스)"),
      T("Made mainly of cellulose. Supports and protects the cell, gives it a fixed shape and prevents bursting.", "主にセルロースでできています。細胞を支え守り、形を固定し、破裂を防ぎます。", "主要由纖維素構成。支撐和保護細胞，使其形狀固定，並防止脹破。", "주로 셀룰로스로 이루어진다. 세포를 지지하고 보호하며 일정한 모양을 유지하게 하고 터지는 것을 막는다.")],
    wall_fungal: [T("Cell wall (chitin)", "細胞壁 (cell wall)：キチン", "細胞壁 (cell wall)：幾丁質", "세포벽(키틴)"),
      T("Made mainly of chitin, not cellulose. Supports and protects the cell and prevents bursting.", "セルロースではなく主にキチンでできています。細胞を支え守り、破裂を防ぎます。", "主要由幾丁質而非纖維素構成。支撐和保護細胞，並防止脹破。", "셀룰로스가 아니라 주로 키틴(chitin)으로 이루어진다. 세포를 지지하고 보호하며 터지는 것을 막는다.")],
    membrane: [T("Plasma membrane", "細胞膜 (plasma membrane)", "質膜 (plasma membrane)", "세포막 (plasma membrane)"),
      T("A lipid bilayer around the cytoplasm. Controls which substances enter and leave the cell.", "細胞質を囲む脂質二重層。細胞に出入りする物質を制御します。", "圍繞細胞質的脂質雙層。控制物質進出細胞。", "세포질을 둘러싼 지질 2중층이다. 어떤 물질이 세포 안팎으로 드나들지를 조절한다.")],
    cytoplasm: [T("Cytoplasm", "細胞質 (cytoplasm)", "細胞質 (cytoplasm)", "세포질 (cytoplasm)"),
      T("Mainly water. The place where the reactions of metabolism happen. In eukaryotes it is divided into compartments and contains the organelles and cytoskeleton.", "主に水。代謝反応が起こる場所です。真核細胞では区画化され、細胞小器官や細胞骨格を含みます。", "主要是水。新陳代謝反應發生的地方。真核細胞的細胞質被區室化，含有胞器和細胞骨架。", "주로 물로 이루어져 있다. 물질대사(metabolism) 반응이 일어나는 장소이다. 진핵생물에서는 구획으로 나뉘어 있으며 세포 소기관과 세포 골격이 들어 있다.")],
    dna: [T("Naked DNA in a loop (nucleoid)", "環状のむき出しのDNA（核様体） (naked DNA)", "環狀裸 DNA（擬核） (naked DNA)", "고리 모양의 맨 DNA (핵양체, nucleoid)"),
      T("One circular DNA molecule with no histones (“naked”). It lies in the nucleoid region, which has no membrane around it. Carries the genetic information.", "ヒストンのない（むき出しの）環状DNA分子が1本。膜に囲まれていない核様体領域にあります。遺伝情報をもちます。", "一個沒有組蛋白（「裸」）的環狀 DNA 分子，位於沒有膜包圍的擬核區。帶有遺傳資訊。", "히스톤이 없는(“맨”) 고리 모양 DNA 분자 1개이다. 주위에 막이 없는 핵양체 영역에 놓여 있다. 유전 정보를 지닌다.")],
    rib70: [T("70S ribosomes", "70Sリボソーム (70S ribosomes)", "70S 核糖體 (70S ribosomes)", "70S 리보솜"),
      T("Make proteins. Smaller than the 80S ribosomes of eukaryotes.", "タンパク質を合成します。真核生物の80Sリボソームより小さいです。", "製造蛋白質。比真核生物的 80S 核糖體小。", "단백질을 만든다. 진핵생물의 80S 리보솜보다 작다.")],
    rib80: [T("80S ribosomes", "80Sリボソーム (80S ribosomes)", "80S 核糖體 (80S ribosomes)", "80S 리보솜"),
      T("Make proteins. Free in the cytoplasm or attached to rough ER. Larger than prokaryote 70S ribosomes.", "タンパク質を合成します。細胞質に遊離、または粗面小胞体に付着。原核生物の70Sより大きいです。", "製造蛋白質。游離在細胞質或附着於粗糙內質網。比原核生物的 70S 大。", "단백질을 만든다. 세포질에 떠 있거나 거친면 소포체(rough ER)에 붙어 있다. 원핵생물의 70S 리보솜보다 크다.")],
    nucleus: [T("Nucleus", "核 (nucleus)", "細胞核 (nucleus)", "핵 (nucleus)"),
      T("Surrounded by a double membrane (nuclear envelope) with pores. Holds the chromosomes, so it stores the genetic information. Pores let molecules such as mRNA pass out.", "核膜孔のある二重膜（核膜）に囲まれています。染色体を収め、遺伝情報を保存します。核膜孔からmRNAなどが出ていきます。", "被有核孔的雙層膜（核膜）包圍。容納染色體，儲存遺傳資訊。核孔讓 mRNA 等分子通過。", "구멍(핵공)이 있는 2중막(핵막, nuclear envelope)으로 둘러싸여 있다. 염색체를 담고 있으므로 유전 정보를 저장한다. 핵공으로 mRNA 같은 분자가 밖으로 나간다.")],
    chrom: [T("Chromosomes (DNA + histones)", "染色体（DNA＋ヒストン） (chromosomes)", "染色體（DNA ＋ 組蛋白） (chromosomes)", "염색체 (DNA + 히스톤)"),
      T("DNA bound to histone proteins, inside the nucleus. Carry the genes.", "ヒストンタンパク質と結合したDNA。核の中にあり、遺伝子をもちます。", "與組蛋白結合的 DNA，位於細胞核內。攜帶基因。", "핵 안에서 히스톤 단백질과 결합한 DNA이다. 유전자를 지닌다.")],
    mito: [T("Mitochondrion", "ミトコンドリア (mitochondrion)", "線粒體 (mitochondrion)", "미토콘드리아 (mitochondrion)"),
      T("Double membrane, inner membrane folded. Site of aerobic cell respiration, which makes ATP.", "二重膜で、内膜は折りたたまれています。好気呼吸の場で、ATPを合成します。", "雙層膜，內膜摺疊。有氧細胞呼吸的場所，製造 ATP。", "2중막이며 안쪽 막이 접혀 있다. ATP를 만드는 유산소 세포 호흡(aerobic cell respiration)이 일어나는 곳이다.")],
    rer: [T("Rough endoplasmic reticulum", "粗面小胞体 (rough ER)", "粗糙內質網 (rough ER)", "거친면 소포체 (rough endoplasmic reticulum)"),
      T("Flattened membrane sacs with 80S ribosomes on the surface. Makes proteins that will be secreted or put into membranes.", "表面に80Sリボソームのある平たい膜の袋。分泌される、または膜に組み込まれるタンパク質を合成します。", "表面有 80S 核糖體的扁平膜囊。製造將被分泌或放入膜中的蛋白質。", "표면에 80S 리보솜이 붙어 있는 납작한 막 주머니이다. 분비되거나 막에 들어갈 단백질을 만든다.")],
    ser: [T("Smooth endoplasmic reticulum", "滑面小胞体 (smooth ER)", "光滑內質網 (smooth ER)", "매끈면 소포체 (smooth endoplasmic reticulum)"),
      T("Membrane tubes and sacs with no ribosomes. Makes lipids.", "リボソームのない膜の管や袋。脂質を合成します。", "沒有核糖體的膜管和膜囊。製造脂質。", "리보솜이 없는 막 관과 주머니이다. 지질을 만든다.")],
    golgi: [T("Golgi apparatus", "ゴルジ体 (Golgi apparatus)", "高爾基體 (Golgi apparatus)", "골지체 (Golgi apparatus)"),
      T("A stack of flattened membrane sacs. Modifies, sorts and packages proteins into vesicles.", "平たい膜の袋の積み重ね。タンパク質を修飾・選別し、小胞に包みます。", "一疊扁平的膜囊。修飾、分類蛋白質並包裝入囊泡。", "납작한 막 주머니가 쌓여 있는 구조이다. 단백질을 변형하고 분류하여 소낭(vesicle)에 담는다.")],
    lyso: [T("Lysosome", "リソソーム (lysosome)", "溶酶體 (lysosome)", "리소좀 (lysosome)"),
      T("A vesicle containing digestive enzymes that break down materials.", "消化酵素を含み、物質を分解する小胞。", "含有消化酶、分解物質的囊泡。", "물질을 분해하는 소화 효소를 담은 소낭이다.")],
    vesicle: [T("Vesicles (and small vacuoles)", "小胞（と小さな液胞） (vesicles)", "囊泡（和小液泡） (vesicles)", "소낭(vesicle)과 작은 액포"),
      T("Small membrane-bound sacs that transport or store substances. Secretory vesicles carry proteins to the plasma membrane to be released.", "物質を運んだり貯蔵したりする膜で囲まれた小さな袋。分泌小胞は、タンパク質を細胞膜へ運んで放出します。", "運輸或儲存物質的小型膜囊。分泌囊泡把蛋白質運到質膜釋出。", "물질을 운반하거나 저장하는 작은 막 주머니이다. 분비 소낭은 단백질을 세포막으로 운반하여 방출한다.")],
    cskel: [T("Cytoskeleton", "細胞骨格 (cytoskeleton)", "細胞骨架 (cytoskeleton)", "세포 골격 (cytoskeleton)"),
      T("A network of microtubules (hollow tubes) and microfilaments (thin protein threads). Supports the cell, holds its shape and moves organelles and vesicles.", "微小管（中空の管）と微小繊維（細いタンパク質の糸）のネットワーク。細胞を支え形を保ち、細胞小器官や小胞を動かします。", "由微管（中空的管）和微絲（幼細的蛋白質絲）組成的網絡。支撐細胞、維持形狀，並移動胞器和囊泡。", "미세 소관(속이 빈 관)과 미세 섬유(가는 단백질 가닥)의 그물망이다. 세포를 지지하고 모양을 유지하며 세포 소기관과 소낭을 이동시킨다.")],
    centriole: [T("Centrioles", "中心小体 (centrioles)", "中心粒 (centrioles)", "중심체 (centrioles)"),
      T("A pair of small tube-like structures made of microtubules, found in animal cells. They help organise the microtubules used when the cell divides.", "微小管でできた小さな管状構造の対で、動物細胞にあります。細胞分裂の際に使う微小管の形成に関わります。", "由微管構成的一對小管狀結構，見於動物細胞。幫助組織細胞分裂時用的微管。", "미세 소관으로 이루어진 작은 관 모양 구조 한 쌍으로, 동물 세포에서 발견된다. 세포가 분열할 때 쓰이는 미세 소관을 조직하는 일을 돕는다.")],
    cilia: [T("Cilia and flagellum", "繊毛と鞭毛 (cilia, flagellum)", "纖毛和鞭毛 (cilia, flagellum)", "섬모와 편모 (cilia and flagellum)"),
      T("Moving projections of the cell. Cilia are short and many (e.g. moving fluid over a surface); a flagellum is long (e.g. a sperm tail moving the whole cell).", "細胞の動く突起。繊毛は短く数が多く（表面の液体を動かすなど）、鞭毛は長い（精子の尾のように細胞全体を動かす）。", "細胞的活動突起。纖毛短而多（如推動表面的液體）；鞭毛長（如精子尾部推動整個細胞）。", "세포의 움직이는 돌기이다. 섬모는 짧고 많다(예: 표면 위의 액체를 움직임). 편모는 길다(예: 정자 꼬리가 세포 전체를 움직임).")],
    microvilli: [T("Microvilli", "微絨毛 (microvilli)", "微絨毛 (microvilli)", "미세 융털 (microvilli)"),
      T("Finger-like projections of the plasma membrane. They increase the surface area for absorption or secretion.", "細胞膜の指状の突起。吸収や分泌のための表面積を増やします。", "質膜的指狀突起。增加吸收或分泌的表面積。", "세포막이 손가락 모양으로 튀어나온 돌기이다. 흡수나 분비를 위한 표면적을 늘린다.")],
    vac_sap: [T("Large sap vacuole", "大きな液胞 (sap vacuole)", "大型液泡 (sap vacuole)", "큰 액포 (sap vacuole)"),
      T("One large permanent central vacuole. Stores water and dissolved substances; its pressure keeps the cell firm (turgid).", "大きな永続的中央液胞が1つ。水と溶質を貯蔵し、その圧力で細胞が張りを保ちます。", "一個大型永久性中央液泡。儲存水和溶質；其壓力使細胞保持堅挺（膨脹）。", "크고 영구적인 중앙 액포 1개이다. 물과 녹아 있는 물질을 저장하며, 그 압력이 세포를 단단하게(팽팽하게, turgid) 유지한다.")],
    vac_fungal: [T("Vacuoles (fungal)", "液胞（菌類） (vacuoles)", "液泡（真菌） (vacuoles)", "액포 (균류)"),
      T("Membrane-bound sacs of varying size. They store substances and can break materials down.", "大きさはさまざまな膜で囲まれた袋。物質を貯蔵し、物質を分解することもあります。", "大小不一的膜囊。儲存物質，也能分解物質。", "크기가 다양한 막 주머니이다. 물질을 저장하며 물질을 분해할 수도 있다.")],
    chlo: [T("Chloroplast", "葉緑体 (chloroplast)", "葉綠體 (chloroplast)", "엽록체 (chloroplast)"),
      T("Double membrane; contains stacks of flattened membranes with chlorophyll. Site of photosynthesis, making sugars using light energy.", "二重膜で、クロロフィルをもつ平たい膜の重なりを含みます。光合成の場で、光エネルギーを使って糖を合成します。", "雙層膜；內含有葉綠素的成疊扁平膜。光合作用的場所，利用光能製造糖。", "2중막이며, 엽록소가 있는 납작한 막이 쌓인 구조가 들어 있다. 빛에너지를 이용해 당을 만드는 광합성(photosynthesis)이 일어나는 곳이다.")],
    plastid: [T("Other plastid: amyloplast", "ほかの色素体：アミロプラスト (amyloplast)", "其他質體：澱粉體 (amyloplast)", "그 밖의 색소체: 아밀로플라스트(amyloplast)"),
      T("A plastid that stores starch (the white grains), found in cells that do not photosynthesize, e.g. in roots and storage tissue.", "デンプン（白い粒）を貯蔵する色素体。根や貯蔵組織など、光合成をしない細胞にあります。", "儲存澱粉（白色顆粒）的質體，見於不進行光合作用的細胞，如根和儲存組織。", "녹말(흰 알갱이)을 저장하는 색소체로, 뿌리와 저장 조직처럼 광합성을 하지 않는 세포에서 발견된다.")]
  };

  /* which structures each cell has, in chip order */
  var CELLIDS = {
    pro: ["wall_pro", "membrane", "cytoplasm", "dna", "rib70"],
    animal: ["membrane", "cytoplasm", "nucleus", "chrom", "rib80", "mito", "rer", "ser", "golgi", "lyso", "vesicle", "cskel", "centriole", "cilia", "microvilli"],
    plant: ["wall_plant", "membrane", "cytoplasm", "nucleus", "chrom", "rib80", "mito", "chlo", "plastid", "vac_sap", "rer", "golgi", "cskel"],
    fungal: ["wall_fungal", "membrane", "cytoplasm", "nucleus", "chrom", "rib80", "mito", "vac_fungal", "rer", "golgi", "vesicle", "cskel"]
  };

  /* structures present in a cell type but not drawn in its diagram (used for the "Found in" tags) */
  var ALSO = { ser: ["plant", "fungal"], vesicle: ["plant"], lyso: ["plant", "fungal"] };

  /* ---------- SVG helpers ---------- */
  function g(id, inner) { return '<g class="hit" data-s="' + id + '">' + inner + "</g>"; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function dotsSvg(pts, r) {
    var o = "";
    pts.forEach(function (p) { o += '<circle class="padc" cx="' + p[0] + '" cy="' + p[1] + '" r="' + (r + 6) + '"/><circle class="k-rib" cx="' + p[0] + '" cy="' + p[1] + '" r="' + r + '"/>'; });
    return o;
  }
  function pathHit(d, cls) { return '<path class="pad" d="' + d + '"/><path class="' + cls + '" d="' + d + '"/>'; }
  function qpt(p0, c, p1, t) {
    var a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, d = t * t;
    return [a * p0[0] + b * c[0] + d * p1[0], a * p0[1] + b * c[1] + d * p1[1]];
  }
  /* a stack of n curved bands; optional ribosome dots along the top of each band */
  function bands(x, y, w, n, gap, bow, cls, dots, id) {
    var o = "", d = "", dts = "";
    for (var i = 0; i < n; i++) {
      var p0 = [x, y + i * gap], c = [x + w / 2, y + i * gap - bow], p1 = [x + w, y + i * gap];
      d = "M" + p0[0] + " " + p0[1] + " Q" + c[0] + " " + c[1] + " " + p1[0] + " " + p1[1];
      o += pathHit(d, cls);
      if (dots) {
        [0.14, 0.32, 0.5, 0.68, 0.86].forEach(function (t) {
          var q = qpt(p0, c, p1, t);
          dts += '<circle class="k-rib" cx="' + f1(q[0]) + '" cy="' + f1(q[1] - 5) + '" r="2.4"/>';
        });
      }
    }
    return o + dts;
  }
  function mito(cx, cy, rot, rx, ry) {
    var o = '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ')">';
    o += '<ellipse class="k-mito" rx="' + rx + '" ry="' + ry + '"/>';
    var w = rx * 1.5, st = w / 4, x0 = -w / 2, d = "M" + f1(x0) + " 0";
    for (var i = 0; i < 4; i++) { d += " q" + f1(st / 4) + " " + (i % 2 ? ry * 0.7 : -ry * 0.7) + " " + f1(st / 2) + " 0 t" + f1(st / 2) + " 0"; }
    o += '<path class="k-crista" d="' + d + '"/></g>';
    return o;
  }
  function nucleusSvg(cx, cy, r) {
    var o = '<circle class="padc" cx="' + cx + '" cy="' + cy + '" r="' + (r + 4) + '"/>';
    o += '<circle class="k-nuc" cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke-dasharray="' + f1(r * 0.7) + " " + f1(r * 0.13) + '"/>';
    o += '<circle class="k-nuc2" cx="' + cx + '" cy="' + cy + '" r="' + (r - 5) + '" stroke-dasharray="' + f1(r * 0.62) + " " + f1(r * 0.12) + '"/>';
    return o;
  }
  function chromSvg(cx, cy) {
    return pathHit("M" + (cx - 14) + " " + (cy - 12) + " q8 10 0 20 q-6 8 2 16", "k-chrom") +
      pathHit("M" + cx + " " + (cy - 20) + " q10 14 -2 26 q-6 10 4 20", "k-chrom") +
      pathHit("M" + (cx + 14) + " " + (cy - 12) + " q8 8 2 18 q-4 8 3 14", "k-chrom");
  }
  function ellNormalPts(cx, cy, rx, ry, degs, len) {
    return degs.map(function (dg) {
      var th = dg * Math.PI / 180, nx = Math.cos(th) / rx, ny = Math.sin(th) / ry, nl = Math.sqrt(nx * nx + ny * ny);
      var x = cx + rx * Math.cos(th), y = cy + ry * Math.sin(th);
      return [x, y, x + len * nx / nl, y + len * ny / nl];
    });
  }

  var VB = "0 0 400 320";
  var VBS = { pro: "0 70 400 180", animal: VB, plant: VB, fungal: "0 70 400 180" };

  function svgPro() {
    var s = "";
    s += g("wall_pro", '<rect class="k-wall" x="26" y="90" width="348" height="140" rx="70"/>');
    s += g("membrane", '<rect class="k-mem" x="38" y="102" width="324" height="116" rx="58"/>');
    s += g("cytoplasm", '<rect class="k-cyt" x="43" y="107" width="314" height="106" rx="53"/>');
    s += g("dna", '<ellipse class="k-nucleoid" cx="200" cy="160" rx="66" ry="40"/>' +
      '<path class="k-dna" d="M162 160 C160 128 200 124 214 142 C236 126 258 152 240 168 C256 190 214 198 200 180 C184 196 146 186 162 160 Z"/>' +
      '<path class="k-dna" d="M184 146 C202 160 222 158 236 148"/><path class="pad" d="M162 160 C160 128 200 124 214 142 C236 126 258 152 240 168 C256 190 214 198 200 180 C184 196 146 186 162 160 Z"/>');
    s += g("rib70", dotsSvg([[74, 142], [90, 176], [108, 128], [112, 180], [128, 154], [276, 140], [292, 178], [305, 130], [322, 160], [268, 184], [258, 124], [136, 118]], 4.5));
    return s;
  }

  function svgAnimal() {
    var cx = 198, cy = 140, rx = 158, ry = 108, s = "";
    // surface projections drawn first (behind)
    var mv = ellNormalPts(cx, cy, rx, ry, [-132, -118, -104, -90, -76, -62, -48], 16);
    var mvd = "";
    mv.forEach(function (p) { mvd += "M" + f1(p[0]) + " " + f1(p[1]) + " L" + f1(p[2]) + " " + f1(p[3]) + " "; });
    s += g("microvilli", '<path class="pad" d="' + mvd + '"/><path class="k-mvil" d="' + mvd + '"/>');
    var ci = ellNormalPts(cx, cy, rx, ry, [-24, -12, 0, 12, 24], 18), cid = "";
    ci.forEach(function (p) { var mx = (p[0] + p[2]) / 2, my = (p[1] + p[3]) / 2; cid += "M" + f1(p[0]) + " " + f1(p[1]) + " Q" + f1(mx + 5) + " " + f1(my - 5) + " " + f1(p[2]) + " " + f1(p[3]) + " "; });
    var fl = "M178 246 q-14 14 0 28 t0 28 t0 20";
    s += g("cilia", '<path class="pad" d="' + cid + fl + '"/><path class="k-cilia" d="' + cid + '"/><path class="k-cilia" d="' + fl + '"/>');
    s += g("membrane", '<ellipse class="k-mem" cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '"/>');
    s += g("cytoplasm", '<ellipse class="k-cyt" cx="' + cx + '" cy="' + cy + '" rx="' + (rx - 6) + '" ry="' + (ry - 6) + '"/>');
    // cytoskeleton (lines behind organelles)
    var cs = "M150 120 L70 80 M150 160 L52 160 M160 185 L90 235 M235 130 L330 100 M235 175 L335 190 M200 110 L205 50";
    s += g("cskel", '<path class="pad" d="' + cs + '"/><path class="k-csk" d="' + cs + '"/>');
    s += g("nucleus", nucleusSvg(158, 140, 46));
    s += g("chrom", chromSvg(158, 140));
    s += g("mito", mito(286, 90, -20, 27, 13) + mito(108, 222, 28, 27, 13));
    s += g("rer", bands(186, 196, 80, 3, 12, 11, "k-er", true));
    s += g("ser", pathHit("M92 188 q14 -10 28 0 q14 10 28 0", "k-er") + pathHit("M96 202 q12 -8 24 0 q12 8 24 0", "k-er"));
    s += g("golgi", bands(268, 150, 58, 4, 10, 8, "k-golgi", false));
    s += g("lyso", '<circle class="k-lys" cx="236" cy="70" r="12"/>');
    s += g("vesicle", '<circle class="k-ves" cx="334" cy="162" r="6"/><circle class="k-ves" cx="330" cy="190" r="6"/><circle class="k-ves" cx="352" cy="130" r="6"/><circle class="k-ves" cx="250" cy="236" r="7"/>');
    s += g("centriole", '<rect class="k-cent" x="212" y="118" width="26" height="8" rx="3"/><rect class="k-cent" x="240" y="106" width="8" height="26" rx="3"/>');
    s += g("rib80", dotsSvg([[70, 120], [86, 142], [262, 118], [214, 160], [306, 214], [140, 206], [72, 196], [218, 82]], 3.6));
    return s;
  }

  function svgPlant() {
    var s = "";
    s += g("wall_plant", '<rect class="k-wall" x="22" y="28" width="356" height="264" rx="20"/>');
    s += g("membrane", '<rect class="k-mem" x="38" y="44" width="324" height="232" rx="10"/>');
    s += g("cytoplasm", '<rect class="k-cyt" x="43" y="49" width="314" height="222" rx="7"/>');
    s += g("vac_sap", '<ellipse class="k-vac" cx="246" cy="160" rx="92" ry="64"/>');
    var cs = "M60 270 L130 250 M360 120 L356 90 M150 270 L200 268";
    s += g("cskel", '<path class="pad" d="' + cs + '"/><path class="k-csk" d="' + cs + '"/>');
    s += g("nucleus", nucleusSvg(90, 112, 34));
    s += g("chrom", chromSvg(90, 112).replace(/ /g, " "));
    function chloro(cx, cy, rot) {
      return '<g transform="translate(' + cx + " " + cy + ") rotate(" + rot + ')"><ellipse class="k-chlo" rx="26" ry="12"/><rect class="k-grana" x="-14" y="-5" width="6" height="10" rx="1"/><rect class="k-grana" x="-4" y="-5" width="6" height="10" rx="1"/><rect class="k-grana" x="6" y="-5" width="6" height="10" rx="1"/></g>';
    }
    s += g("chlo", chloro(200, 66, 0) + chloro(318, 66, 0) + chloro(322, 250, -8));
    s += g("mito", mito(138, 78, 15, 22, 10) + mito(268, 252, 0, 22, 10));
    s += g("plastid", '<ellipse class="k-plast" cx="196" cy="252" rx="20" ry="14"/><ellipse class="k-starch" cx="190" cy="252" rx="6" ry="5"/><ellipse class="k-starch" cx="204" cy="251" rx="5" ry="4"/>');
    s += g("rer", bands(58, 160, 54, 3, 11, 9, "k-er", true));
    s += g("golgi", bands(60, 224, 50, 4, 9, 7, "k-golgi", false));
    s += g("rib80", dotsSvg([[130, 140], [132, 178], [140, 215], [260, 70], [284, 90], [150, 245], [112, 56]], 3.6));
    return s;
  }

  function svgFungal() {
    var s = "";
    s += g("wall_fungal", '<rect class="k-wall" x="14" y="86" width="372" height="148" rx="60"/>');
    s += g("membrane", '<rect class="k-mem" x="28" y="100" width="344" height="120" rx="50"/>');
    s += g("cytoplasm", '<rect class="k-cyt" x="33" y="105" width="334" height="110" rx="46"/>');
    var cs = "M70 195 L330 196 M80 120 L320 124";
    s += g("cskel", '<path class="pad" d="' + cs + '"/><path class="k-csk" d="' + cs + '"/>');
    s += g("vac_fungal", '<ellipse class="k-vac" cx="318" cy="160" rx="38" ry="34"/><circle class="k-vac" cx="200" cy="186" r="14"/>');
    s += g("nucleus", nucleusSvg(100, 160, 34));
    s += g("chrom", chromSvg(100, 160));
    s += g("mito", mito(196, 132, -10, 24, 11) + mito(252, 178, 15, 24, 11));
    s += g("rer", bands(142, 150, 40, 2, 11, 9, "k-er", true));
    s += g("golgi", bands(256, 130, 36, 3, 9, 7, "k-golgi", false));
    s += g("vesicle", '<circle class="k-ves" cx="300" cy="120" r="6"/><circle class="k-ves" cx="232" cy="200" r="6"/>');
    s += g("rib80", dotsSvg([[150, 192], [60, 126], [60, 196], [176, 118], [286, 196], [236, 142]], 3.4));
    return s;
  }

  var SVGS = { pro: svgPro, animal: svgAnimal, plant: svgPlant, fungal: svgFungal };

  /* ---------- atypical cells ---------- */
  var LB = {
    septa: T("no cross-walls (septa)", "仕切り壁 (septa) なし", "沒有橫隔 (septa)", "가로벽(격벽, septa) 없음"),
    hb: T("haemoglobin", "ヘモグロビン", "血紅蛋白", "헤모글로빈"),
    nonuc: T("no nucleus", "核なし", "沒有細胞核", "핵 없음"),
    tube: T("sieve tube element", "師管要素", "篩管分子", "체관 요소"),
    comp: T("companion cell", "伴細胞", "伴細胞", "반세포"),
    plate: T("sieve plate", "師板", "篩板", "체판")
  };
  var ATYP = {
    hypha: {
      name: T("Aseptate fungal hypha", "隔壁のない菌糸 (aseptate hypha)", "無隔膜真菌菌絲 (aseptate hypha)", "격벽이 없는 균사 (aseptate hypha)"),
      nuclei: "many",
      text: T("A hypha is a thread-like fungal filament. This one has no cross-walls (septa), so one continuous cytoplasm contains many nuclei.", "菌糸は糸状の菌類の細胞列です。この菌糸には仕切り壁 (septa) がなく、1つの連続した細胞質に多数の核が含まれます。", "菌絲是絲狀的真菌細胞鏈。這條菌絲沒有橫隔 (septa)，所以一個連續的細胞質含有很多細胞核。", "균사(hypha)는 실 모양의 균류 필라멘트이다. 이 균사는 가로벽(격벽, septa)이 없으므로 연속된 하나의 세포질 안에 많은 핵이 들어 있다."),
      svg: function (t) {
        var s = '<rect class="k-wall" x="16" y="116" width="368" height="88" rx="44"/><rect class="k-mem" x="28" y="128" width="344" height="64" rx="32"/>';
        [66, 122, 180, 238, 296, 346].forEach(function (x, i) { s += '<circle class="k-nuc" cx="' + x + '" cy="' + (i % 2 ? 168 : 152) + '" r="13"/>'; });
        s += '<text class="k-lbl" x="200" y="234" text-anchor="middle">' + t(LB.septa) + '</text>';
        return s;
      }
    },
    muscle: {
      name: T("Skeletal muscle fibre", "骨格筋線維 (skeletal muscle fibre)", "骨骼肌纖維 (skeletal muscle fibre)", "골격근 섬유 (skeletal muscle fibre)"),
      nuclei: "many",
      text: T("A very long cell formed when many cells fused together, so it has many nuclei (lying just under the plasma membrane).", "多数の細胞が融合してできた非常に長い細胞で、多数の核が細胞膜のすぐ内側に並びます。", "由許多細胞融合而成的極長細胞，所以有很多細胞核（位於質膜之下）。", "많은 세포가 융합하여 만들어진 매우 긴 세포이므로 핵이 많다(세포막 바로 아래에 놓여 있다)."),
      svg: function (t) {
        var s = '<rect class="k-mem" x="14" y="104" width="372" height="112" rx="14"/>', i;
        for (i = 0; i < 18; i++) { s += '<line class="k-stri" x1="' + (36 + i * 19) + '" y1="124" x2="' + (36 + i * 19) + '" y2="196"/>'; }
        [60, 140, 210, 290, 350].forEach(function (x, i) { s += '<ellipse class="k-nuc" cx="' + x + '" cy="' + (i % 2 ? 210 : 111) + '" rx="14" ry="6"/>'; });
        return s;
      }
    },
    rbc: {
      name: T("Red blood cell (mature, mammal)", "赤血球（成熟した哺乳類） (red blood cell)", "紅血球（成熟的哺乳動物） (red blood cell)", "적혈구 (성숙한 포유류 것)"),
      nuclei: "none",
      text: T("No nucleus, which leaves more room for haemoglobin to carry oxygen. It cannot make new proteins or divide, so its life is limited.", "核がないため、酸素を運ぶヘモグロビンを入れる空間が増えます。新しいタンパク質を作れず分裂もできないので、寿命が限られます。", "沒有細胞核，騰出更多空間給運載氧氣的血紅蛋白。它不能製造新蛋白質或分裂，壽命有限。", "핵이 없어서 산소를 운반하는 헤모글로빈이 들어갈 공간이 더 많다. 새 단백질을 만들거나 분열할 수 없으므로 수명이 제한된다."),
      svg: function (t) {
        return '<circle class="k-rbc" cx="200" cy="160" r="84"/><circle class="k-rbc2" cx="200" cy="160" r="42"/><text class="k-lbl" x="200" y="164" text-anchor="middle">' + t(LB.hb) + '</text><text class="k-lbl" x="200" y="290" text-anchor="middle">' + t(LB.nonuc) + '</text>';
      }
    },
    sieve: {
      name: T("Phloem sieve tube element", "師管要素 (phloem sieve tube element)", "韌皮部篩管分子 (phloem sieve tube element)", "체관 요소 (phloem sieve tube element)"),
      nuclei: "noneMature",
      text: T("Joined end to end to form a tube that carries sugars. No nucleus and few organelles leaves a clear path for flow. Sieve plates (pores) join neighbours. A companion cell (with a nucleus) supports it.", "端と端でつながり、糖を運ぶ管をつくります。核や細胞小器官が少ないので流れる通路が確保されます。師板（孔）が隣の細胞をつなぎます。核をもつ伴細胞が支えます。", "首尾相連形成運輸糖分的管道。沒有細胞核和較少胞器，令液流暢通。篩板（小孔）連接相鄰細胞。有細胞核的伴細胞為它提供支援。", "끝과 끝이 이어져 당을 운반하는 관을 이룬다. 핵이 없고 세포 소기관이 적어 흐름의 통로가 트여 있다. 체판(구멍)이 이웃한 세포를 연결한다. 반세포(핵이 있음)가 이를 돕는다."),
      svg: function (t) {
        var s = '<rect class="k-tube" x="120" y="14" width="86" height="136" rx="6"/><rect class="k-tube" x="120" y="150" width="86" height="156" rx="6"/>';
        s += '<line class="k-sieve" x1="124" y1="150" x2="202" y2="150" stroke-dasharray="9 7"/>';
        s += '<rect class="k-mem" x="226" y="40" width="70" height="236" rx="16"/>' + '<circle class="k-nuc" cx="261" cy="104" r="22"/>' + '<ellipse class="k-mito" cx="261" cy="186" rx="18" ry="9"/>';
        s += '<text class="k-lbl" x="163" y="86" text-anchor="middle">' + t(LB.tube) + '</text><text class="k-lbl" x="163" y="236" text-anchor="middle">' + t(LB.tube) + '</text>';
        s += '<text class="k-lbl" x="261" y="140" text-anchor="middle">' + t(LB.comp) + '</text>';
        s += '<text class="k-lbl" x="112" y="146" text-anchor="end">' + t(LB.plate) + ' &#8594;</text>';
        return s;
      }
    }
  };
  var ATYPORDER = ["hypha", "muscle", "rbc", "sieve"];

  /* ---------- comparison table ---------- */
  var Y = "y", N = "n", D = "d";
  var YES = T("✓", "✓", "✓", "✓"), NO = T("✗", "✗", "✗", "✗"), DASH = T("—", "—", "—", "—");
  var ROWS = [
    [T("Plasma membrane", "細胞膜", "質膜", "세포막 (plasma membrane)"), [[Y, YES], [Y, YES], [Y, YES], [Y, YES]]],
    [T("Cytoplasm", "細胞質", "細胞質", "세포질 (cytoplasm)"), [[Y, YES], [Y, YES], [Y, YES], [Y, YES]]],
    [T("DNA", "DNA", "DNA", "DNA"), [[D, T("Naked loop", "環状・むき出し", "環狀裸 DNA", "맨 DNA 고리")], [D, T("Chromosomes in nucleus", "核内の染色体", "核內染色體", "핵 속의 염색체")], [D, T("Chromosomes in nucleus", "核内の染色体", "核內染色體", "핵 속의 염색체")], [D, T("Chromosomes in nucleus", "核内の染色体", "核內染色體", "핵 속의 염색체")]]],
    [T("Ribosomes", "リボソーム", "核糖體", "리보솜"), [[D, T("70S", "70S", "70S", "70S")], [D, T("80S", "80S", "80S", "80S")], [D, T("80S", "80S", "80S", "80S")], [D, T("80S", "80S", "80S", "80S")]]],
    [T("Nucleus (double membrane, pores)", "核（二重膜・核膜孔）", "細胞核（雙層膜、核孔）", "핵 (2중막, 핵공)"), [[N, NO], [Y, YES], [Y, YES], [Y, YES]]],
    [T("Mitochondria, ER, Golgi", "ミトコンドリア・小胞体・ゴルジ体", "線粒體、內質網、高爾基體", "미토콘드리아, 소포체, 골지체"), [[N, NO], [Y, YES], [Y, YES], [Y, YES]]],
    [T("Cell wall", "細胞壁", "細胞壁", "세포벽 (cell wall)"), [[Y, YES], [N, NO], [Y, T("✓ cellulose", "✓ セルロース", "✓ 纖維素", "✓ 셀룰로스")], [Y, T("✓ chitin", "✓ キチン", "✓ 幾丁質", "✓ 키틴")]]],
    [T("Vacuoles", "液胞", "液泡", "액포"), [[N, NO], [D, T("Small, temporary", "小さく一時的", "細小、暫時性", "작고 일시적임")], [D, T("One large sap vacuole", "大きな液胞が1つ", "一個大型液泡", "큰 액포 1개")], [D, T("Present, size varies", "あり、大きさはさまざま", "有，大小不一", "있음, 크기는 다양함")]]],
    [T("Chloroplasts and other plastids", "葉緑体・ほかの色素体", "葉綠體及其他質體", "엽록체와 그 밖의 색소체"), [[N, NO], [N, NO], [Y, YES], [N, NO]]],
    [T("Centrioles", "中心小体", "中心粒", "중심체 (centrioles)"), [[N, NO], [Y, YES], [N, NO], [N, NO]]],
    [T("Cilia and flagella", "繊毛・鞭毛", "纖毛和鞭毛", "섬모와 편모"), [[N, DASH], [Y, T("✓ in some cells", "✓ 一部の細胞", "✓ 部分細胞", "✓ 일부 세포에서")], [N, NO], [N, NO]]]
  ];

  /* ---------- widget ---------- */
  function make(startTab, startCell) {
    return {
      title: UI.title,
      mount: function (el, ctx) {
        injectCss();
        var t = function (o) { return ctx.t(o); };
        var st = { tab: startTab, cell: startCell || "animal", sel: null, atyp: "hypha" };
        var body;

        el.classList.add("w-cell-compare");
        el.innerHTML = '<div class="wl"><div class="wl-tabs" role="tablist"></div><div class="cc-body"></div></div>';
        var tabs = el.querySelector(".wl-tabs");
        var ot = ctx.options && ctx.options.tab;
        var tabIds = ["diagram", "table", "atypical"];
        if (typeof ot === "number" && tabIds[ot]) st.tab = tabIds[ot]; else if (typeof ot === "string" && tabIds.indexOf(ot) >= 0) st.tab = ot;
        var wide = window.matchMedia ? window.matchMedia("(min-width: 900px)").matches : true;
        body = el.querySelector(".cc-body");

        function renderTabs() {
          var defs = [["diagram", UI.tabDiagram], ["table", UI.tabTable], ["atypical", UI.tabAtyp]];
          tabs.innerHTML = "";
          defs.forEach(function (d) {
            var b = document.createElement("button");
            b.type = "button"; b.setAttribute("role", "tab");
            b.setAttribute("aria-selected", st.tab === d[0] ? "true" : "false");
            b.textContent = t(d[1]);
            b.addEventListener("click", function () { st.tab = d[0]; render(); });
            tabs.appendChild(b);
          });
        }

        function foundTags(id) {
          return CELLORDER.map(function (c) {
            var on = CELLIDS[c].indexOf(id) >= 0 || (ALSO[id] || []).indexOf(c) >= 0;
            return '<span class="cc-tag' + (on ? " on" : "") + '">' + (on ? "✓ " : "✗ ") + t(CELLSHORT[c]) + "</span>";
          }).join("");
        }

        function renderDiagram() {
          var cell = st.cell;
          var h = '<div class="cc-chips row" role="group" aria-label="' + t(UI.tabDiagram) + '">';
          CELLORDER.forEach(function (c) { h += '<button type="button" class="cc-chip" data-cell="' + c + '" aria-pressed="' + (c === cell) + '">' + t(CELLNAME[c]) + "</button>"; });
          h += "</div>";
          h += '<div class="wl-stage"><svg class="cc-svg" viewBox="' + VBS[cell] + '" role="group" aria-label="' + t(CELLNAME[cell]) + '">' + SVGS[cell]() + "</svg>";
          h += '<p class="cc-cap">' + t(UI.drawing) + "</p></div>";
          h += '<div class="wl-panel"><div class="cc-info" aria-live="polite"></div>';
          h += '<details class="cc-list"' + (wide ? " open" : "") + '><summary>' + t(UI.structures) + '</summary><div class="cc-chips" style="margin-top:6px">';
          CELLIDS[cell].forEach(function (id) { h += '<button type="button" class="cc-chip" data-s="' + id + '" aria-pressed="false">' + t(S[id][0]) + "</button>"; });
          h += "</div></details></div>";
          body.innerHTML = h;

          body.querySelectorAll("button[data-cell]").forEach(function (b) {
            b.addEventListener("click", function () { st.cell = b.getAttribute("data-cell"); st.sel = null; render(); });
          });
          body.querySelectorAll("button[data-s]").forEach(function (b) {
            b.addEventListener("click", function () { select(b.getAttribute("data-s")); });
          });
          var svg = body.querySelector("svg");
          svg.addEventListener("click", function (e) {
            var n = e.target.closest ? e.target.closest(".hit") : null;
            if (n) select(n.getAttribute("data-s"));
          });
          updateSel();
        }

        function select(id) { st.sel = id; updateSel(); }

        function updateSel() {
          var info = body.querySelector(".cc-info");
          if (!info) return;
          body.querySelectorAll(".hit").forEach(function (n) { n.classList.toggle("sel", n.getAttribute("data-s") === st.sel); });
          body.querySelectorAll("button[data-s]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-s") === st.sel ? "true" : "false"); });
          if (!st.sel || !S[st.sel]) { info.innerHTML = "<p>" + t(UI.prompt) + "</p>"; return; }
          var d = S[st.sel];
          info.innerHTML = "<h4>" + t(d[0]) + "</h4><p><strong>" + t(UI.function) + ":</strong> " + t(d[1]) + '</p><div class="cc-found"><span>' + t(UI.foundIn) + "</span>" + foundTags(st.sel) + "</div>";
        }

        function renderTable() {
          var h = '<div class="cc-tblwrap"><div class="cc-grid" role="table"><div class="cc-gr head" role="row"><div class="cc-gh" role="columnheader">' + t(UI.feature) + "</div>";
          CELLORDER.forEach(function (c) { h += '<div class="cc-gh" role="columnheader">' + t(CELLSHORT[c]) + "</div>"; });
          h += "</div>";
          ROWS.forEach(function (r) {
            h += '<div class="cc-gr" role="row"><div class="cc-gt" role="rowheader">' + t(r[0]) + "</div>";
            r[1].forEach(function (c) { h += '<div class="cc-gc ' + c[0] + '" role="cell">' + t(c[1]) + "</div>"; });
            h += "</div>";
          });
          h += '</div><p class="cc-note">' + t(UI.tableNote) + "</p></div>";
          body.innerHTML = h;
        }

        function renderAtyp() {
          var a = ATYP[st.atyp];
          var vb = st.atyp === "sieve" || st.atyp === "rbc" ? "0 0 400 320" : "0 0 400 320";
          var h = '<div class="cc-chips row" role="group">';
          ATYPORDER.forEach(function (k) { h += '<button type="button" class="cc-chip" data-a="' + k + '" aria-pressed="' + (k === st.atyp) + '">' + t(ATYP[k].name) + "</button>"; });
          h += "</div>";
          h += '<div class="wl-stage"><svg class="cc-svg" viewBox="' + vb + '" role="img" aria-label="' + t(a.name) + '">' + a.svg(t) + "</svg></div>";
          h += '<div class="wl-panel"><div class="cc-info" aria-live="polite"><h4>' + t(a.name) + '</h4><span class="cc-big">' + t(UI.nuclei) + " " + t(UI[a.nuclei]) + "</span><p>" + t(a.text) + '</p><p class="cc-cap" style="margin:0">' + t(UI.typical) + "</p></div></div>";
          body.innerHTML = h;
          body.querySelectorAll("button[data-a]").forEach(function (b) {
            b.addEventListener("click", function () { st.atyp = b.getAttribute("data-a"); render(); });
          });
        }

        function render() {
          renderTabs();
          if (st.tab === "table") renderTable();
          else if (st.tab === "atypical") renderAtyp();
          else renderDiagram();
        }
        render();
        return function () { el.classList.remove("w-cell-compare"); };
      }
    };
  }

  if (typeof IB !== "undefined" && IB.registerWidget) {
    IB.registerWidget("cell-compare", make("diagram"));
    IB.registerWidget("cell-compare-atypical", make("atypical"));
    IB.registerWidget("cell-compare-pro", make("diagram", "pro"));
  }
})();
