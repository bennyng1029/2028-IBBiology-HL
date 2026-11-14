/* Widget: mol3d — real experimental structures from the Protein Data Bank in 3D (3Dmol.js).
   Presets: helix-sheet (1UBQ), insulin (3I40), haemoglobin (4HHB), collagen (1CGD), hydrophobic (1MBN), dna (1BNA).
   Ids: "mol3d" (all presets), "mol3d-protein" (protein presets), "mol3d-dna" (DNA only).
   Options: { preset: "haemoglobin" } or { tab: 2 }.
   Coordinates: assets/data/pdb/<id>.js (window.IB_PDB), loaded by script tag so file:// works.
   Library: 3Dmol.js 2.0.4 from a pinned CDN URL (lazy, with SRI); an offline message is shown if it cannot load.
   Syllabus: A1.2.3, A1.2.6, A1.2.11 (AHL), B1.2.8–B1.2.12 (AHL). PDB data are CC0 (RCSB PDB). */
(function () {
  var L = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko }; };
  var HERE = (function () {
    try { var s = document.currentScript && document.currentScript.src; if (s) return s.replace(/[^\/]*$/, ""); } catch (e) { /* ignore */ }
    return "assets/js/widgets/";
  })();
  var PDB_BASE = HERE + "../../data/pdb/";

  var LIBS = [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/3Dmol/2.0.4/3Dmol-min.js", sri: "sha384-gCVNmzC8IyU7AmfDiNbHLpM9ac5VhQb2mfDURiTqHrnEcI2qp/JsQVeeEd3sLdfq" },
    { src: "https://cdn.jsdelivr.net/npm/3dmol@2.0.4/build/3Dmol-min.js", sri: "sha384-gCVNmzC8IyU7AmfDiNbHLpM9ac5VhQb2mfDURiTqHrnEcI2qp/JsQVeeEd3sLdfq" }
  ];

  /* ---------- lazy loaders with dedup guards ---------- */
  function addScript(src, sri) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.async = true;
      if (sri) { s.integrity = sri; s.crossOrigin = "anonymous"; }
      s.setAttribute("data-mol3d", src);
      s.onload = function () { resolve(); };
      s.onerror = function () { s.parentNode && s.parentNode.removeChild(s); reject(new Error("load failed: " + src)); };
      document.head.appendChild(s);
    });
  }
  function loadLib() {
    if (window.$3Dmol && window.$3Dmol.createViewer) return Promise.resolve();
    if (window.__ibMol3dLib) return window.__ibMol3dLib;
    var p = LIBS.reduce(function (chain, lib) {
      return chain.catch(function () {
        if (window.$3Dmol && window.$3Dmol.createViewer) return;
        return addScript(lib.src, lib.sri);
      });
    }, Promise.reject(new Error("start"))).then(function () {
      if (!(window.$3Dmol && window.$3Dmol.createViewer)) throw new Error("3Dmol missing");
    });
    p.catch(function () { window.__ibMol3dLib = null; });
    window.__ibMol3dLib = p;
    return p;
  }
  var pdbPending = {};
  function loadPdb(id) {
    window.IB_PDB = window.IB_PDB || {};
    if (window.IB_PDB[id]) return Promise.resolve(window.IB_PDB[id]);
    if (pdbPending[id]) return pdbPending[id];
    var p = addScript(PDB_BASE + id + ".js").then(function () {
      if (!window.IB_PDB[id]) throw new Error("no data " + id);
      return window.IB_PDB[id];
    });
    p.catch(function () { delete pdbPending[id]; });
    pdbPending[id] = p;
    return p;
  }

  /* ---------- CSS ---------- */
  var CSS = [
    ".w-mol3d{--m3-h:var(--stage-max,min(42vh,320px));font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
        ".w-mol3d .m3-btn{font:inherit;font-size:.86rem;font-weight:700;min-height:2.5rem;padding:.3rem .7rem;border-radius:var(--radius,3px);border:1.5px solid var(--line-strong,#9bb);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer;line-height:1.2}",
    ".w-mol3d .m3-btn[aria-pressed=true],.w-mol3d .m3-btn[aria-selected=true]{background:var(--accent,#0A6C7D);border-color:var(--accent,#0A6C7D);color:var(--on-accent,#fff)}",
    ".w-mol3d .m3-btn:focus-visible,.w-mol3d .m3-ov:focus-visible,.w-mol3d input:focus-visible,.w-mol3d summary:focus-visible{outline:3px solid var(--accent,#0A6C7D);outline-offset:2px}",
    ".w-mol3d .m3-btn[disabled]{opacity:.45;cursor:default}",
    ".w-mol3d .m3-view{position:relative;width:100%;height:var(--m3-h);background:var(--surface-2,#e3eaee);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius,3px);overflow:hidden;touch-action:pan-y}",
    ".w-mol3d .m3-view.is-active{touch-action:none}",
    ".w-mol3d .m3-view canvas{display:block}",
    ".w-mol3d [hidden]{display:none!important}",
    ".w-mol3d .m3-wrap{position:relative}",
    ".w-mol3d .m3-msg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:1rem;font-size:.92rem;line-height:1.5;color:var(--ink-2,#33454f);background:var(--surface-2,#e3eaee);z-index:3}",
    ".w-mol3d .m3-msg.is-err{background:var(--warn-soft,#fff3d6);color:var(--ink,#0f2029);border:1px solid var(--warn-line,#c9a227)}",
    ".w-mol3d .m3-ov{position:absolute;inset:0;z-index:2;display:flex;align-items:flex-end;justify-content:center;padding:.6rem;border:0;background:transparent;color:var(--ink,#0f2029);font:inherit;cursor:pointer;touch-action:pan-y}",
    ".w-mol3d .m3-ov span{background:var(--surface,#fff);border:1.5px solid var(--line-strong,#9bb);border-radius:var(--radius,3px);padding:.45rem .8rem;font-size:.88rem;font-weight:700}",
    ".w-mol3d .m3-tools{position:absolute;top:.5rem;right:.5rem;z-index:2;display:flex;gap:.3rem}",
    ".w-mol3d .m3-tools-l{position:absolute;top:.5rem;left:.5rem;z-index:2;display:flex;gap:.3rem}",
    ".w-mol3d .m3-btn.m3-done{position:absolute;bottom:.5rem;left:50%;transform:translateX(-50%);z-index:2;white-space:nowrap}",
    ".w-mol3d .m3-tools .m3-btn,.w-mol3d .m3-tools-l .m3-btn{font-size:.8rem;min-width:2.5rem;padding:.2rem .5rem;background:var(--surface,#fff);color:var(--ink,#0f2029)}",
    ".w-mol3d .m3-hint{margin:.35rem 0 0;font-size:.78rem;color:var(--muted,#4d626d)}",
    ".w-mol3d .wl-legend{display:flex;flex-wrap:wrap;gap:.25rem .9rem;margin:.55rem 0 0;font-size:.84rem;line-height:1.3}",
    ".w-mol3d .wl-legend span{display:inline-flex;align-items:center;gap:.35rem}",
    ".w-mol3d .wl-legend i{display:inline-block;width:.9rem;height:.9rem;border-radius:2px;border:1px solid var(--ink-2,#33454f);flex:0 0 auto}",
    ".w-mol3d .wl-panel{display:flex;flex-direction:column;gap:.45rem;min-width:0}",
    ".w-mol3d .m3-bar{display:grid;grid-template-columns:max-content minmax(0,1fr);align-items:start;gap:.2rem .5rem}",
    ".w-mol3d .m3-grp{display:contents}",
    ".w-mol3d .m3-lbl{align-self:start;line-height:2.5rem;font-size:.68rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted,#4d626d)}",
    ".w-mol3d .m3-seg{display:flex;flex-wrap:wrap;gap:.2rem;min-width:0}",
    ".w-mol3d .m3-seg .m3-btn{flex:0 1 auto;font-size:.8rem;line-height:1.2;padding:.2rem .45rem}",
    ".w-mol3d .m3-slice{display:flex;flex-direction:row;align-items:center;gap:.6rem;width:100%;font-size:.84rem;font-weight:700}",
    ".w-mol3d .m3-slice span{flex:0 1 auto}",
    ".w-mol3d .m3-slice input{flex:1 1 7rem;min-width:0;accent-color:var(--accent,#0A6C7D);height:2.5rem}",
    ".w-mol3d .m3-cap{margin:0;font-size:.9rem;line-height:1.45}",
    ".w-mol3d details.m3-look{margin:0;padding:0 .75rem;background:var(--surface-2,#e3eaee);border-radius:var(--radius,3px);font-size:.88rem;line-height:1.5}",
    ".w-mol3d details.m3-look>:not(summary){margin:0 0 .55rem}",
    ".w-mol3d .m3-hint-in{color:var(--muted,#4d626d)}",
    "@container wf (max-width:639px){.w-mol3d .m3-view{height:min(33vh,250px)}.w-mol3d .wl-legend{margin-top:.35rem}.w-mol3d .wl-exam{padding:.4rem .65rem;font-size:.86rem;line-height:1.4}}",
    ".w-mol3d .wl-exam{margin:0;padding:.45rem .75rem;border-left:4px solid var(--accent,#0A6C7D);background:var(--accent-soft,#e1f2f4);font-size:.9rem;line-height:1.5}",
    ".w-mol3d .m3-ref{display:inline-block;margin-right:.4rem}",
    ".w-mol3d details{font-size:.84rem;line-height:1.5}",
    ".w-mol3d summary{cursor:pointer;font-weight:700;min-height:2rem;display:flex;align-items:center}",
    ".w-mol3d details p{margin:.3rem 0}",
    ".w-mol3d .m3-credit{color:var(--muted,#4d626d)}"
  ].join("\n");
  function injectCss() {
    if (document.getElementById("css-w-mol3d")) return;
    var s = document.createElement("style"); s.id = "css-w-mol3d"; s.textContent = CSS; document.head.appendChild(s);
  }

  /* ---------- residue classes (state the standard used) ---------- */
  var NONPOLAR = "ALA VAL LEU ILE MET PHE TRP PRO GLY".split(" ");
  var POLAR = "SER THR CYS TYR ASN GLN".split(" ");
  var ACIDIC = "ASP GLU".split(" ");
  var BASIC = "LYS ARG HIS".split(" ");
  var BB_DNA = ["P", "OP1", "OP2", "O1P", "O2P", "OP3", "O5'", "C5'", "C4'", "O4'", "C3'", "O3'", "C2'", "C1'", "O2'"];

  /* ---------- text ---------- */
  var T = {
    title: L("3D molecular models (real PDB structures)", "分子の3Dモデル (実測のPDB構造)", "分子3D模型 (真實PDB結構)", "3D 분자 모형(실제 PDB 구조)"),
    style: L("Style", "表示形式", "顯示方式", "스타일"),
    colour: L("Colour by", "色分け", "顏色", "색 구분"),
    show: L("Show", "表示", "顯示", "표시"),
    view: L("View", "ビュー", "視圖", "보기"),
    styles: {
      cartoon: L("Cartoon", "リボン", "帶狀", "카툰"),
      sticks: L("Sticks", "スティック", "棍狀", "스틱"),
      spacefill: L("Spacefill", "空間充填", "空間填充", "공간 채움"),
      surface: L("Surface", "表面", "表面", "표면")
    },
    spinOn: L("Spin: on", "回転：オン", "旋轉：開", "회전: 켬"),
    spinOff: L("Spin: off", "回転：オフ", "旋轉：關", "회전: 끔"),
    reset: L("Reset view", "視点をリセット", "重設視角", "시점 초기화"),
    zoomIn: L("Zoom in", "拡大", "放大", "확대"),
    zoomOut: L("Zoom out", "縮小", "縮小", "축소"),
    slice: L("Slice into the protein", "タンパク質を切る", "切開蛋白質", "단백질 속을 잘라 보기"),
    look: L("What am I looking at?", "何を見ているの？", "我在看甚麼？", "무엇을 보고 있나요?"),
    exam: L("To remember for the exam", "試験で覚えること", "考試要記住", "시험 대비 핵심"),
    more: L("More detail and credits", "詳細とクレジット", "詳細資料與來源", "자세한 설명과 출처"),
    loading: L("Loading structure…", "構造を読み込み中…", "正在載入結構…", "구조를 불러오는 중…"),
    offline: L("The 3D viewer library could not be loaded (are you offline?). Connect to the internet and reload this page. The rest of the page works without it.",
      "3Dビューアのライブラリを読み込めませんでした (オフラインですか？)。インターネットに接続してページを再読み込みしてください。ほかの部分はそのまま使えます。",
      "無法載入3D檢視器程式庫 (可能沒有網絡？)。請連線後重新載入本頁，頁面其他部分不受影響。", "3D 뷰어 라이브러리를 불러올 수 없다(오프라인인가?). 인터넷에 연결한 뒤 이 페이지를 새로 고치시오. 이 페이지의 나머지 부분은 뷰어 없이도 작동한다."),
    nogl: L("Your browser could not start WebGL, so the 3D model cannot be shown.", "このブラウザではWebGLを起動できないため、3Dモデルを表示できません。", "此瀏覽器無法啟動WebGL，因此不能顯示3D模型。", "브라우저에서 WebGL을 시작할 수 없어 3D 모형을 표시할 수 없다."),
    nodata: L("The coordinate file could not be loaded.", "座標ファイルを読み込めませんでした。", "無法載入座標檔案。", "좌표 파일을 불러올 수 없다."),
    tapStart: L("Tap to rotate and zoom", "タップして回転・拡大", "輕觸以旋轉及縮放", "눌러서 회전·확대하기"),
    tapStop: L("Done: scroll page", "完了：ページをスクロール", "完成：捲動頁面", "완료: 페이지 스크롤"),
    hintMouse: L("Drag to rotate, scroll or use +/− to zoom (click the model first to enable the wheel).", "ドラッグで回転。拡大は＋／−か、モデルをクリックしてからホイール。", "拖曳旋轉；縮放用＋／−，或先點選模型再用滾輪。", "드래그하여 회전하고, 스크롤하거나 +/−로 확대·축소하시오(휠을 쓰려면 먼저 모형을 클릭하시오)."),
    hintTouch: L("Tap the model, then drag to rotate and pinch to zoom.", "モデルをタップしてから、ドラッグで回転、ピンチで拡大。", "先輕觸模型，再拖曳旋轉、雙指縮放。", "모형을 누른 다음 드래그하여 회전하고, 두 손가락으로 벌려 확대하시오."),
    credit: L("Structure data: RCSB PDB (CC0), entry", "構造データ：RCSB PDB (CC0)、エントリー", "結構數據：RCSB PDB (CC0)，條目", "구조 자료 출처: RCSB PDB (CC0), 항목"),
    viewer: L("Viewer: 3Dmol.js (BSD-3-Clause).", "ビューア：3Dmol.js (BSD-3-Clause)。", "檢視器：3Dmol.js (BSD-3-Clause)。", "뷰어: 3Dmol.js (BSD-3-Clause)."),
    hydroTable: L(
      "Classification used here. Hydrophobic (non-polar R-groups): Ala, Val, Leu, Ile, Met, Phe, Trp, Pro, Gly. Hydrophilic: polar uncharged Ser, Thr, Cys, Tyr, Asn, Gln; acidic (negative) Asp, Glu; basic (positive) Lys, Arg, His. Textbooks differ slightly for Gly, Cys, Tyr and His. The IB guide does not ask you to memorise these lists.",
      "ここで使う分類。疎水性 (hydrophobic、無極性R基)：Ala, Val, Leu, Ile, Met, Phe, Trp, Pro, Gly。親水性 (hydrophilic)：極性・無電荷 Ser, Thr, Cys, Tyr, Asn, Gln、酸性 (負) Asp, Glu、塩基性 (正) Lys, Arg, His。Gly, Cys, Tyr, His は教科書により分類が少し異なります。IBではこの一覧の暗記は求められていません。",
      "此處採用的分類。疏水 (hydrophobic，非極性R基)：Ala, Val, Leu, Ile, Met, Phe, Trp, Pro, Gly。親水 (hydrophilic)：極性不帶電 Ser, Thr, Cys, Tyr, Asn, Gln；酸性 (帶負電) Asp, Glu；鹼性 (帶正電) Lys, Arg, His。Gly、Cys、Tyr、His 在不同課本中的分類略有差異。IB並不要求背誦這些名單。", "여기서 사용한 분류이다. 소수성(비극성 R기): Ala, Val, Leu, Ile, Met, Phe, Trp, Pro, Gly. 친수성: 전하가 없는 극성 Ser, Thr, Cys, Tyr, Asn, Gln. 산성(음전하) Asp, Glu. 염기성(양전하) Lys, Arg, His. Gly, Cys, Tyr, His는 교재에 따라 분류가 조금 다르다. IB 지침은 이 목록을 외우라고 요구하지 않는다.")
  };

  /* legend / mode labels */
  var LG = {
    helix: L("α-helix", "α-ヘリックス (α-helix)", "α-螺旋 (α-helix)", "α 나선"),
    sheet: L("β-pleated sheet", "β-プリーツシート (β-pleated sheet)", "β-摺疊片 (β-pleated sheet)", "β 병풍 구조"),
    loop: L("loops and turns", "ループ・ターン", "環與轉折", "고리와 굽이"),
    chainA: L("A chain (21 amino acids)", "A鎖 (21アミノ酸)", "A鏈 (21個氨基酸)", "A 사슬 (아미노산 21개)"),
    chainB: L("B chain (30 amino acids)", "B鎖 (30アミノ酸)", "B鏈 (30個氨基酸)", "B 사슬 (아미노산 30개)"),
    ss: L("S–S bond (cysteine pair)", "S–S結合 (システインの対)", "S–S鍵 (半胱氨酸配對)", "S–S 결합 (시스테인 쌍)"),
    alpha: L("α subunits", "αサブユニット", "α亞基", "α 소단위"),
    beta: L("β subunits", "βサブユニット", "β亞基", "β 소단위"),
    haem: L("haem group", "ヘム基 (haem)", "血紅素基 (haem)", "헴 기"),
    fe: L("Fe atom", "鉄原子 (Fe)", "鐵原子 (Fe)", "Fe 원자"),
    strand: L("strand", "鎖", "股", "가닥"),
    hphob: L("hydrophobic", "疎水性 (hydrophobic)", "疏水 (hydrophobic)", "소수성"),
    hphil: L("hydrophilic", "親水性 (hydrophilic)", "親水 (hydrophilic)", "친수성"),
    nonpolar: L("non-polar R-group", "無極性R基", "非極性R基", "비극성 R기"),
    polar: L("polar, uncharged", "極性・無電荷", "極性、不帶電", "극성, 전하 없음"),
    acidic: L("acidic (−)", "酸性 (−)", "酸性 (−)", "산성 (−)"),
    basic: L("basic (+)", "塩基性 (+)", "鹼性 (+)", "염기성 (+)"),
    strand1: L("strand 1", "鎖1", "鏈1", "가닥 1"),
    strand2: L("strand 2", "鎖2", "鏈2", "가닥 2"),
    bb: L("sugar–phosphate backbone", "糖–リン酸骨格 (sugar–phosphate backbone)", "糖–磷酸骨架 (sugar–phosphate backbone)", "당-인산 골격"),
    hb: L("hydrogen bond (dashed)", "水素結合 (hydrogen bond、破線)", "氫鍵 (hydrogen bond，虛線)", "수소 결합 (점선)")
  };
  var MODE = {
    ss: L("Helix / sheet", "ヘリックス／シート", "螺旋／摺疊片", "나선 / 병풍 구조"),
    element: L("Element (CPK)", "元素 (CPK)", "元素 (CPK)", "원소 (CPK)"),
    chain: L("Chain", "鎖", "鏈", "사슬"),
    subunit: L("Subunit", "サブユニット", "亞基", "소단위"),
    strand: L("Strand", "鎖", "股", "가닥"),
    hydro: L("Hydrophobic / hydrophilic", "疎水性／親水性", "疏水／親水", "소수성 / 친수성"),
    rgroup: L("R-group class", "R基の種類", "R基類別", "R기 종류"),
    bases: L("Base type (A T G C)", "塩基の種類 (A T G C)", "鹼基種類 (A T G C)", "염기 종류 (A T G C)")
  };
  var SHOW = {
    ss: L("Disulfide bonds", "ジスルフィド結合 (disulfide bonds)", "二硫鍵 (disulfide bonds)", "이황화 결합"),
    haem: L("Haem + Fe", "ヘム＋Fe (haem)", "血紅素＋Fe (haem)", "헴 + Fe"),
    pairs: L("Highlight base pairs", "塩基対を強調 (base pairs)", "突出鹼基對 (base pairs)", "염기쌍 강조"),
    labels: L("Labels", "ラベル", "標籤", "이름표")
  };
  var HL = {
    label: L("Highlight", "強調", "突出顯示", "강조"),
    none: L("None", "なし", "無", "없음"),
    backbone: L("Sugar–phosphate backbone", "糖–リン酸骨格 (backbone)", "糖–磷酸骨架 (backbone)", "당-인산 골격"),
    pairs: L("Complementary base pairs", "相補的塩基対 (base pairs)", "互補鹼基對 (base pairs)", "상보적 염기쌍"),
    direction: L("Antiparallel (5′ to 3′, AHL)", "逆平行 (5′→3′、AHL)", "反平行 (5′→3′，AHL)", "역평행 (5′ → 3′, AHL)")
  };

  /* ---------- presets ---------- */
  var PRESETS = [
    { id: "helix-sheet", zoom: 1.3, pdb: "1ubq", ref: "B1.2.8", ahl: true,
      tab: L("α-helix and β-sheet", "α-ヘリックスとβ-シート", "α-螺旋與β-摺疊片", "α 나선과 β 병풍 구조"),
      styles: ["cartoon", "sticks", "spacefill"], style: "cartoon", modes: ["ss", "element"], mode: "ss",
      toggles: [],
      pdbTitle: "Structure of ubiquitin refined at 1.8 Å resolution",
      cap: L("Ubiquitin, a small human protein of 76 amino acids. Its backbone folds into one main α-helix and a five-strand β-pleated sheet.",
        "ユビキチン (ubiquitin)。ヒトの小さなタンパク質で、76アミノ酸。主鎖が1本の主なα-ヘリックスと、5本鎖のβ-プリーツシートに折りたたまれています。",
        "泛素 (ubiquitin)，人類的小型蛋白質，共76個氨基酸。主鏈摺疊成一段主要的α-螺旋和由五股組成的β-摺疊片。", "유비퀴틴(ubiquitin)은 아미노산 76개로 된 작은 사람 단백질이다. 뼈대가 주된 α 나선 1개와 가닥 5개로 된 β 병풍 구조(β-pleated sheet)로 접혀 있다."),
      look: L("Secondary structure is the regular coiling or pleating of the backbone. Hydrogen bonds form between the C=O and N–H groups of the backbone at regular positions: along the coil in the helix, between neighbouring strands in the sheet. Helix and sheet labels come from the PDB entry.",
        "二次構造 (secondary structure) は主鎖の規則的な巻きやひだです。主鎖のC=OとN–Hの間に水素結合 (hydrogen bond) が規則的な位置にでき、ヘリックスでは巻きに沿って、シートでは隣り合う鎖の間にできます。ヘリックスとシートの区分はPDBエントリーの記録によります。",
        "二級結構 (secondary structure) 是主鏈有規律的盤繞或摺疊。主鏈上的C=O與N–H之間在規則位置形成氫鍵 (hydrogen bond)：螺旋中沿著盤繞方向，摺疊片中則在相鄰股之間。螺旋與摺疊片的劃分來自PDB條目的記錄。", "2차 구조(secondary structure)는 뼈대가 규칙적으로 꼬이거나 주름진 것이다. 뼈대의 C=O기와 N–H기 사이에 일정한 위치마다 수소 결합이 생긴다. 나선에서는 꼬임을 따라, 병풍 구조에서는 이웃한 가닥 사이에서 생긴다. 나선과 병풍 구조의 이름표는 PDB 항목에서 가져온 것이다."),
      exam: L("α-helix = coil; β-pleated sheet = pleats. Both are held by hydrogen bonds between backbone groups at regular intervals, not by the R-groups.",
        "α-ヘリックス＝コイル、β-プリーツシート＝ひだ。どちらも主鎖の基どうしの水素結合が規則的に並んで保ちます (R基ではありません)。",
        "α-螺旋＝盤繞；β-摺疊片＝摺疊。兩者都由主鏈基團之間規則排列的氫鍵維持，並非靠R基。", "α 나선 = 꼬임, β 병풍 구조 = 주름. 둘 다 R기가 아니라 뼈대의 기 사이에 일정한 간격으로 생기는 수소 결합으로 유지된다.") },
    { id: "insulin", zoom: 1.2, pdb: "3i40", ref: "B1.2.9, B1.2.11", ahl: true,
      tab: L("Insulin", "インスリン (insulin)", "胰島素 (insulin)", "인슐린"),
      styles: ["cartoon", "sticks", "spacefill"], style: "cartoon", modes: ["chain", "element"], mode: "chain",
      toggles: ["ss"],
      pdbTitle: "Human insulin",
      cap: L("Human insulin: two polypeptides, the A chain (21 amino acids) and the B chain (30 amino acids). Two disulfide bonds join the chains and a third lies inside the A chain.",
        "ヒトインスリン：2本のポリペプチド、A鎖 (21アミノ酸) とB鎖 (30アミノ酸)。2本のジスルフィド結合が鎖どうしをつなぎ、3本目はA鎖の内部にあります。",
        "人類胰島素：由兩條多肽組成，即A鏈 (21個氨基酸) 和B鏈 (30個氨基酸)。兩個二硫鍵連接兩條鏈，第三個位於A鏈內部。", "사람 인슐린: 폴리펩타이드 2개, 즉 A 사슬(아미노산 21개)과 B 사슬(아미노산 30개)로 이루어져 있다. 이황화 결합 2개가 두 사슬을 잇고, 세 번째 결합은 A 사슬 안에 있다."),
      look: L("A disulfide bond (S–S) is a covalent bond between the sulfur atoms of two cysteine R-groups. It helps hold the tertiary structure. Because insulin has two chains, it also has quaternary structure. It has no non-protein part, so it is non-conjugated.",
        "ジスルフィド結合 (disulfide bond、S–S) は、2つのシステイン (cysteine) のR基の硫黄原子どうしの共有結合で、三次構造 (tertiary structure) を保ちます。インスリンは2本鎖なので四次構造 (quaternary structure) をもち、タンパク質以外の部分がないので単純タンパク質 (non-conjugated protein) です。",
        "二硫鍵 (disulfide bond，S–S) 是兩個半胱氨酸 (cysteine) R基的硫原子之間的共價鍵，有助維持三級結構 (tertiary structure)。胰島素有兩條鏈，所以具四級結構 (quaternary structure)；它沒有非蛋白質部分，屬非結合蛋白 (non-conjugated)。", "이황화 결합(disulfide bond, S–S)은 두 시스테인 R기의 황 원자 사이의 공유 결합이다. 3차 구조를 유지하는 데 도움이 된다. 인슐린은 사슬이 2개이므로 4차 구조도 가진다. 단백질이 아닌 부분이 없으므로 비복합 단백질이다."),
      exam: L("Insulin: two polypeptide chains linked by disulfide bonds between cysteines. Quaternary structure, non-conjugated, globular.",
        "インスリン：システイン間のジスルフィド結合でつながった2本のポリペプチド。四次構造をもち、単純タンパク質 (non-conjugated) で、球状タンパク質。",
        "胰島素：兩條多肽以半胱氨酸之間的二硫鍵連接；具四級結構，屬非結合蛋白，呈球狀。", "인슐린: 시스테인 사이의 이황화 결합으로 연결된 폴리펩타이드 사슬 2개. 4차 구조, 비복합 단백질, 구형.") },
    { id: "haemoglobin", zoom: 1.0, pdb: "4hhb", ref: "B1.2.11", ahl: true,
      tab: L("Haemoglobin", "ヘモグロビン (haemoglobin)", "血紅蛋白 (haemoglobin)", "헤모글로빈"),
      styles: ["cartoon", "sticks", "spacefill"], style: "cartoon", modes: ["subunit", "element"], mode: "subunit",
      toggles: ["haem"],
      pdbTitle: "The crystal structure of human deoxyhaemoglobin at 1.74 Å resolution",
      cap: L("Human deoxyhaemoglobin: four polypeptides (2 α and 2 β). Each holds one haem group with an iron atom that can bind one O₂.",
        "ヒトのデオキシヘモグロビン：4本のポリペプチド (α2本、β2本)。それぞれが1つのヘム基をもち、鉄原子がO₂を1分子結合できます。",
        "人類去氧血紅蛋白：四條多肽 (2條α、2條β)。每條各含一個血紅素基，其鐵原子可結合一分子O₂。", "사람 탈산소 헤모글로빈: 폴리펩타이드 4개(α 2개와 β 2개). 각각 철 원자가 든 헴 기를 1개씩 가지며, 철 원자는 O₂ 1분자와 결합할 수 있다."),
      look: L("Haemoglobin has quaternary structure: four polypeptides. It is a conjugated protein, because each polypeptide carries a non-protein part (a prosthetic group), the haem. Haem is an iron-containing ring; the Fe atom binds oxygen.",
        "ヘモグロビンは4本のポリペプチドからなる四次構造 (quaternary structure) をもちます。各ポリペプチドにタンパク質以外の部分 (補欠分子族、prosthetic group) であるヘム (haem) が付いているので、複合タンパク質 (conjugated protein) です。ヘムは鉄を含む環で、Fe原子が酸素と結合します。",
        "血紅蛋白有四級結構 (quaternary structure)：由四條多肽組成。每條多肽都帶有非蛋白質部分 (輔基，prosthetic group)，即血紅素 (haem)，因此屬結合蛋白 (conjugated protein)。血紅素是含鐵的環，鐵原子負責結合氧。", "헤모글로빈은 폴리펩타이드 4개로 된 4차 구조를 가진다. 각 폴리펩타이드가 단백질이 아닌 부분(보결 분자단, prosthetic group)인 헴을 가지므로 복합 단백질(conjugated protein)이다. 헴은 철이 든 고리이며, Fe 원자가 산소와 결합한다."),
      exam: L("Haemoglobin: quaternary structure (4 polypeptides), conjugated protein because each has a haem prosthetic group containing Fe.",
        "ヘモグロビン：四次構造 (ポリペプチド4本)。各鎖が鉄を含むヘム (補欠分子族) をもつので複合タンパク質 (conjugated protein)。",
        "血紅蛋白：四級結構 (四條多肽)；每條都有含Fe的血紅素輔基，故屬結合蛋白。", "헤모글로빈: 4차 구조(폴리펩타이드 4개). 각각 Fe가 든 헴 보결 분자단을 가지므로 복합 단백질.") },
    { id: "collagen", elong: true, spinAxis: "x", zoom: 1.05, pdb: "1cgd", ref: "B1.2.11–12", ahl: true,
      tab: L("Collagen", "コラーゲン (collagen)", "膠原蛋白 (collagen)", "콜라젠"),
      styles: ["sticks", "cartoon", "spacefill"], style: "sticks", modes: ["strand", "element"], mode: "strand",
      toggles: [],
      pdbTitle: "Hydration structure of a collagen peptide",
      cap: L("A short collagen-like model peptide: three strands of 30 amino acids wound round each other into a triple helix about 9 nm long. Real collagen has about 1000 amino acids per strand and is about 300 nm long.",
        "コラーゲン様の短いモデルペプチド：30アミノ酸の3本の鎖が互いに巻き合った三重らせん (triple helix)、長さ約9 nm。本物のコラーゲンは1本が約1000アミノ酸で、長さ約300 nmです。",
        "膠原蛋白樣的短模型肽：三條各30個氨基酸的多肽互相纏繞成三螺旋 (triple helix)，長約9 nm。真正的膠原蛋白每條約1000個氨基酸，長約300 nm。", "짧은 콜라젠 모형 펩타이드이다. 아미노산 30개로 된 가닥 3개가 서로 감겨 길이 약 9 nm의 3중 나선을 이룬다. 실제 콜라젠은 가닥당 아미노산이 약 1000개이고 길이가 약 300 nm이다."),
      look: L("Collagen is a fibrous protein: long, rope-like and strong. Three polypeptides twist together (quaternary structure), held side by side by hydrogen bonds. Its shape gives high tensile strength, which suits skin, tendons and bone. It is non-conjugated.",
        "コラーゲンは繊維状タンパク質 (fibrous protein) で、長く、縄のようで丈夫です。3本のポリペプチドがより合わさり (四次構造)、水素結合で並んで保たれます。この形が高い引っ張り強度を生み、皮膚・腱・骨に適しています。単純タンパク質 (non-conjugated protein) です。",
        "膠原蛋白是纖維狀蛋白 (fibrous protein)：細長如繩而堅韌。三條多肽互相扭合 (四級結構)，由氫鍵把它們並排固定。這種形狀帶來很高的抗拉強度，適合皮膚、肌腱和骨骼。它屬非結合蛋白。", "콜라젠은 섬유형 단백질로, 길고 밧줄 같으며 튼튼하다. 폴리펩타이드 3개가 서로 꼬여(4차 구조) 수소 결합으로 나란히 붙어 있다. 이 모양 덕분에 인장 강도가 높아 피부, 힘줄, 뼈에 알맞다. 비복합 단백질이다."),
      exam: L("Collagen: three polypeptides in a triple helix; fibrous, rope-like, high tensile strength; non-conjugated.",
        "コラーゲン：3本のポリペプチドの三重らせん。繊維状で縄状、引っ張り強度が高い。単純タンパク質 (non-conjugated)。",
        "膠原蛋白：三條多肽組成三螺旋；纖維狀、似繩、抗拉強度高；非結合蛋白。", "콜라젠: 3중 나선을 이룬 폴리펩타이드 3개. 섬유형, 밧줄 모양, 높은 인장 강도, 비복합 단백질.") },
    { id: "hydrophobic", zoom: 1.0, pdb: "1mbn", ref: "B1.2.10", ahl: true,
      tab: L("Hydrophobic core", "疎水性のコア", "疏水核心", "소수성 중심부"),
      styles: ["cartoon", "sticks", "spacefill", "surface"], style: "sticks", modes: ["hydro", "rgroup"], mode: "hydro",
      toggles: ["haem"], slice: true,
      pdbTitle: "The stereochemistry of the protein myoglobin",
      cap: L("Sperm whale myoglobin, a water-soluble globular protein of 153 amino acids. Hydrophobic amino acids mostly cluster in the core; hydrophilic ones mostly face the water.",
        "マッコウクジラのミオグロビン (myoglobin)。153アミノ酸の水に溶ける球状タンパク質。疎水性アミノ酸は主に内部 (コア) に集まり、親水性アミノ酸は主に水に面しています。",
        "抹香鯨肌紅蛋白 (myoglobin)，含153個氨基酸的水溶性球狀蛋白質。疏水氨基酸大多聚在核心，親水氨基酸大多朝向水。", "향유고래 마이오글로빈(myoglobin)은 아미노산 153개로 된, 물에 녹는 구형 단백질이다. 소수성 아미노산은 대부분 중심부에 모여 있고, 친수성 아미노산은 대부분 물을 향해 있다."),
      look: L("In a water-soluble globular protein, hydrophobic R-groups are tucked into the core, away from water, and polar or charged R-groups sit on the surface where they interact with water. Try Sticks or Surface, then slide the slice to cut into the protein.",
        "水に溶ける球状タンパク質 (globular protein) では、疎水性 (hydrophobic) のR基が水を避けて内部に入り、極性や電荷をもつR基は水と相互作用できる表面に出ます。スティックか表面にして、スライスで内部を見てみましょう。",
        "在水溶性球狀蛋白質 (globular protein) 中，疏水 (hydrophobic) R基藏在核心、遠離水，極性或帶電的R基位於表面與水作用。請選「棍狀」或「表面」，再拉動切片滑桿窺看內部。", "물에 녹는 구형 단백질에서는 소수성 R기가 물에서 먼 중심부에 들어 있고, 극성 R기와 전하를 띤 R기는 물과 상호 작용하는 표면에 있다. 스틱이나 표면을 선택한 다음 슬라이더를 움직여 단백질 속을 잘라 보시오."),
      exam: L("Water-soluble globular protein: hydrophobic amino acids in the core, hydrophilic (polar or charged) on the outside. Integral membrane proteins have hydrophobic regions in the membrane.",
        "水溶性の球状タンパク質：疎水性アミノ酸は内部、親水性 (極性・電荷) は外側。膜内在性タンパク質は膜に入る部分が疎水性。",
        "水溶性球狀蛋白質：疏水氨基酸在核心，親水 (極性或帶電) 氨基酸在外側。內在膜蛋白在嵌入膜的部分有疏水區域。", "물에 녹는 구형 단백질: 소수성 아미노산은 중심부에, 친수성(극성 또는 전하를 띰) 아미노산은 바깥쪽에 있다. 막 내재성 단백질은 막 속에 소수성 부위를 가진다.") },
    { id: "dna", zoom: 1.1, pdb: "1bna", ref: "A1.2.3, A1.2.6", ahl: false,
      tab: L("DNA double helix", "DNAの二重らせん", "DNA雙螺旋", "DNA 이중 나선"),
      styles: ["sticks", "spacefill"], style: "sticks", modes: ["strand", "bases", "element"], mode: "strand",
      toggles: [], hls: ["none", "backbone", "pairs", "direction"],
      pdbTitle: "Structure of a B-DNA dodecamer. Conformation and dynamics",
      cap: L("A real 12-base-pair piece of B-DNA (CGCGAATTCGCG), about 4 nm long. Two antiparallel strands are joined by hydrogen bonds between complementary base pairs.",
        "実際の12塩基対のB型DNA (CGCGAATTCGCG)、長さ約4 nm。逆平行 (antiparallel) の2本の鎖が、相補的塩基対 (complementary base pairs) の水素結合でつながっています。",
        "真實的12個鹼基對B型DNA (CGCGAATTCGCG)，長約4 nm。兩條反平行 (antiparallel) 的鏈由互補鹼基對 (complementary base pairs) 之間的氫鍵相連。", "실제 B-DNA의 12염기쌍 조각(CGCGAATTCGCG)으로, 길이는 약 4 nm이다. 역평행인 두 가닥이 상보적 염기쌍 사이의 수소 결합으로 연결되어 있다."),
      look: L("Each strand has a sugar–phosphate backbone, a continuous chain of covalent bonds. The bases point inward: A pairs with T and G pairs with C by hydrogen bonds. The strands run in opposite directions (antiparallel). AHL: one strand runs 5′ to 3′ and the other 3′ to 5′.",
        "各鎖には、共有結合が連続した糖–リン酸骨格 (sugar–phosphate backbone) があります。塩基は内側を向き、AはT、GはCと水素結合で対になります。2本の鎖は逆向きに走ります（逆平行）。AHL：一方の鎖は5′→3′、もう一方は3′→5′です。",
        "每條鏈都有由共價鍵連續相連的糖–磷酸骨架 (sugar–phosphate backbone)。鹼基朝向內側：A與T、G與C以氫鍵配對。兩條鏈方向相反（反平行）。AHL：一條是5′→3′，另一條是3′→5′。", "각 가닥에는 공유 결합이 이어진 사슬인 당-인산 골격이 있다. 염기는 안쪽을 향하며, A는 T와, G는 C와 수소 결합으로 짝을 이룬다. 두 가닥은 서로 반대 방향으로 달린다(역평행). AHL: 한 가닥은 5′에서 3′ 방향, 다른 가닥은 3′에서 5′ 방향이다."),
      exam: L("DNA: two antiparallel strands; sugar–phosphate backbones outside; A–T and G–C complementary base pairs joined by hydrogen bonds inside.",
        "DNA：逆平行の2本鎖。糖–リン酸骨格が外側、内側にA–TとG–Cの相補的塩基対 (水素結合)。",
        "DNA：兩條反平行的鏈；糖–磷酸骨架在外，A–T與G–C互補鹼基對在內，以氫鍵相連。", "DNA: 역평행인 두 가닥. 당-인산 골격은 바깥쪽에, 수소 결합으로 연결된 A–T, G–C 상보적 염기쌍은 안쪽에 있다.") }
  ];
  var PRESET_BY_ID = {};
  PRESETS.forEach(function (p) { PRESET_BY_ID[p.id] = p; });
  var DNA_LABELS = {
    anti: L("antiparallel", "逆平行 (antiparallel)", "反平行 (antiparallel)", "역평행"),
    bb: L("sugar–phosphate backbone", "糖–リン酸骨格", "糖–磷酸骨架", "당-인산 골격"),
    bp: L("complementary base pairs", "相補的塩基対", "互補鹼基對", "상보적 염기쌍")
  };

  /* ---------- colour helpers ---------- */
  function toHex(c, fallback) {
    var m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/.exec(c || "");
    if (!m) return fallback;
    return "#" + [m[1], m[2], m[3]].map(function (n) { var h = Math.round(+n).toString(16); return h.length < 2 ? "0" + h : h; }).join("");
  }
  function mix(a, b, t) {
    function p(h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
    var x = p(a), y = p(b);
    return "#" + [0, 1, 2].map(function (i) { var h = Math.round(x[i] * (1 - t) + y[i] * t).toString(16); return h.length < 2 ? "0" + h : h; }).join("");
  }
  var TOKENS = {
    surface2: ["--surface-2", "#e3eaee"], ink: ["--ink", "#0f2029"], ink2: ["--ink-2", "#33454f"], muted: ["--muted", "#4d626d"], accent: ["--accent", "#0A6C7D"],
    themeA: ["--theme-a", "#2f5fb3"], themeB: ["--theme-b", "#b3365f"], ahl: ["--ahl", "#6b3fb0"], good: ["--good", "#1f7a3d"],
    disulfide: ["--disulfide", "#9A7800"], hydrophobic: ["--hydrophobic", "#8A6838"], hbond: ["--hbond", "#1f8fd0"], ionic: ["--ionic", "#c45a2a"], warnLine: ["--warn-line", "#c9a227"],
    cC: ["--c-carbon", "#555555"], cO: ["--c-oxygen", "#d03030"], cN: ["--c-nitrogen", "#3050d0"], cH: ["--c-hydrogen", "#dddddd"], cS: ["--c-sulfur", "#c8a000"],
    nonpolar: ["--r-nonpolar", "#B87A0E"], polar: ["--r-polar", "#1b9c8c"], acidic: ["--r-acidic", "#d04060"], basic: ["--r-basic", "#3f6fe0"], surface: ["--surface", "#ffffff"]
  };

  /* ---------- widget factory ---------- */
  function makeWidget(allowed, defaultId, titleOverride) {
    return {
      title: titleOverride || T.title,
      mount: function (el, ctx) {
        injectCss();
        if (el.classList) el.classList.add("w-mol3d");
        var t = ctx.t || function (o) { return o[ctx.lang] || o.en; };
        var opts = ctx.options || {};
        var list = allowed.map(function (id) { return PRESET_BY_ID[id]; });
        var startId = defaultId;
        if (opts.preset && allowed.indexOf(opts.preset) >= 0) startId = opts.preset;
        else if (typeof opts.tab === "number" && list[opts.tab]) startId = list[opts.tab].id;

        var reduced = false;
        try { reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { /* ignore */ }
        var coarse = false;
        try { coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches; } catch (e) { /* ignore */ }

        var S = { preset: startId, style: null, mode: null, on: {}, spin: !reduced, slice: 0, active: false, hl: "none" };
        var viewer = null, destroyed = false, loadTok = 0, P = null, visible = true, ready = false;
        var cleanupFns = [];

        el.innerHTML = "";
        el.setAttribute("lang", ctx.lang === "ja" ? "ja" : ctx.lang === "zh" ? "zh-HK" : ctx.lang === "ko" ? "ko" : "en");
        function h(tag, attrs, kids) {
          var n = document.createElement(tag);
          if (attrs) Object.keys(attrs).forEach(function (k) {
            if (k === "text") n.textContent = attrs[k]; else if (k === "html") n.innerHTML = attrs[k]; else n.setAttribute(k, attrs[k]);
          });
          (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
          return n;
        }

        /* skeleton */
        var tabs = h("div", { "class": "wl-tabs", role: "tablist" });
        var wl = h("div", { "class": "wl" });
        var stage = h("div", { "class": "wl-stage" });
        var view = h("div", { "class": "m3-view" });
        var msg = h("div", { "class": "m3-msg", role: "status" });
        var overlay = h("button", { type: "button", "class": "m3-ov" }, [h("span", { text: t(T.tapStart) })]);
        var tools = h("div", { "class": "m3-tools" });
        var legend = h("div", { "class": "wl-legend" });
        var hint = h("p", { "class": "m3-hint", text: t(coarse ? T.hintTouch : T.hintMouse) });
        var panel = h("div", { "class": "wl-panel" });
        var capP = h("p", { "class": "m3-cap" });
        var grpStyle = h("div", { "class": "m3-grp" });
        var grpMode = h("div", { "class": "m3-grp" });
        var grpShow = h("div", { "class": "m3-grp" });
        var grpHl = h("div", { "class": "m3-grp" });
        var toolsL = h("div", { "class": "m3-tools-l", role: "group", "aria-label": t(T.view) });
        var sliceBox = h("label", { "class": "m3-slice" });
        var bar = h("div", { "class": "m3-bar" });
        var lookD = h("details", { "class": "m3-look" });
        var lookP = h("p");
        var examP = h("p", { "class": "wl-exam" });
        var det = h("details");
        var detBody = h("div");

        var btnIn = h("button", { type: "button", "class": "m3-btn", "aria-label": t(T.zoomIn), text: "+" });
        var btnOut = h("button", { type: "button", "class": "m3-btn", "aria-label": t(T.zoomOut), text: "−" });
        var btnDone = h("button", { type: "button", "class": "m3-btn m3-done", text: t(T.tapStop) });
        btnDone.hidden = true;
        tools.appendChild(btnOut); tools.appendChild(btnIn);
        var wrap = h("div", { "class": "m3-wrap" });
        view.appendChild(msg);
        wrap.appendChild(view);
        wrap.appendChild(overlay);
        wrap.appendChild(tools); wrap.appendChild(toolsL); wrap.appendChild(btnDone);
        stage.appendChild(wrap);
        stage.appendChild(legend);
        stage.appendChild(hint);
        det.appendChild(h("summary", { text: t(T.more) }));
        det.appendChild(detBody);
        panel.appendChild(capP);
        [grpStyle, grpMode, grpShow, grpHl].forEach(function (g) { bar.appendChild(g); });
        panel.appendChild(bar);
        panel.appendChild(sliceBox);
        lookD.appendChild(h("summary")); lookD.firstChild.addEventListener("click", function () { userLook = true; }); lookD.appendChild(lookP);
        panel.appendChild(lookD); panel.appendChild(examP); panel.appendChild(det);
        wl.appendChild(stage); wl.appendChild(panel);
        if (list.length > 1) wl.insertBefore(tabs, stage);
        el.appendChild(wl);
        overlay.hidden = !coarse;

        function cur() { return PRESET_BY_ID[S.preset]; }

        /* palette from live CSS tokens */
        function readPalette() {
          var probe = h("i", { "aria-hidden": "true" });
          probe.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden";
          el.appendChild(probe);
          var o = {};
          Object.keys(TOKENS).forEach(function (k) {
            probe.style.color = "";
            probe.style.color = "var(" + TOKENS[k][0] + ")";
            o[k] = toHex(getComputedStyle(probe).color, TOKENS[k][1]);
          });
          el.removeChild(probe);
          o.themeA2 = mix(o.themeA, o.surface, 0.45);
          o.themeB2 = mix(o.themeB, o.surface, 0.45);
          o.cFe = o.ionic;
          return o;
        }

        function showMsg(text, err) {
          msg.textContent = text; msg.className = "m3-msg" + (err ? " is-err" : ""); msg.hidden = false;
        }
        function hideMsg() { msg.hidden = true; }

        /* ---------- colour functions ---------- */
        function elemColor(a) {
          switch (a.elem) {
            case "C": return P.cC; case "O": return P.cO; case "N": return P.cN; case "H": return P.cH; case "S": return P.cS;
            case "FE": case "Fe": return P.cFe; case "P": return P.warnLine; default: return P.muted;
          }
        }
        function hydroColor(a) { return NONPOLAR.indexOf(a.resn) >= 0 ? P.hydrophobic : P.accent; }
        function rgroupColor(a) {
          if (NONPOLAR.indexOf(a.resn) >= 0) return P.nonpolar;
          if (ACIDIC.indexOf(a.resn) >= 0) return P.acidic;
          if (BASIC.indexOf(a.resn) >= 0) return P.basic;
          return P.polar;
        }
        function colorFn(pr, mode) {
          var id = pr.id;
          if (mode === "element") return elemColor;
          if (id === "helix-sheet") return function (a) { return a.ss === "h" ? P.themeB : a.ss === "s" ? P.themeA : P.muted; };
          if (id === "insulin") return function (a) { return a.chain === "A" ? P.themeA : P.themeB; };
          if (id === "haemoglobin") return function (a) { return a.chain === "A" ? P.themeA : a.chain === "C" ? P.themeA2 : a.chain === "B" ? P.themeB : P.themeB2; };
          if (id === "collagen") return function (a) { return a.chain === "A" ? P.themeA : a.chain === "B" ? P.themeB : P.accent; };
          if (id === "hydrophobic") return mode === "rgroup" ? rgroupColor : hydroColor;
          if (id === "dna") {
            if (mode === "bases") return function (a) { return BB_DNA.indexOf(a.atom) >= 0 ? P.muted : a.resn === "DA" ? P.themeB : a.resn === "DT" ? P.nonpolar : a.resn === "DG" ? P.good : P.themeA; };
            return function (a) { return a.chain === "A" ? P.themeA : P.themeB; };
          }
          return elemColor;
        }
        function legendFor(pr, mode) {
          if (mode === "element") return [[P.cC, L("C", "C", "C")], [P.cO, L("O", "O", "O")], [P.cN, L("N", "N", "N")], [P.cS, L("S", "S", "S")]].concat(pr.id === "haemoglobin" ? [[P.cFe, L("Fe", "Fe", "Fe")]] : pr.id === "dna" ? [[P.warnLine, L("P", "P", "P")]] : []);
          switch (pr.id) {
            case "helix-sheet": return [[P.themeB, LG.helix], [P.themeA, LG.sheet], [P.muted, LG.loop]];
            case "insulin": return [[P.themeA, LG.chainA], [P.themeB, LG.chainB]].concat(S.on.ss ? [[P.disulfide, LG.ss]] : []);
            case "haemoglobin": return [[P.themeA, L("α1", "α1", "α1")], [P.themeA2, L("α2", "α2", "α2")], [P.themeB, L("β1", "β1", "β1")], [P.themeB2, L("β2", "β2", "β2")]].concat(S.on.haem ? [[P.ink2, LG.haem], [P.cFe, LG.fe]] : []);
            case "collagen": return [[P.themeA, L("strand A", "鎖A", "A股", "가닥 A")], [P.themeB, L("strand B", "鎖B", "B股", "가닥 B")], [P.accent, L("strand C", "鎖C", "C股", "가닥 C")]];
            case "hydrophobic":
              return (mode === "rgroup" ? [[P.nonpolar, LG.nonpolar], [P.polar, LG.polar], [P.acidic, LG.acidic], [P.basic, LG.basic]] : [[P.hydrophobic, LG.hphob], [P.accent, LG.hphil]]).concat(S.on.haem ? [[P.ink2, LG.haem]] : []);
            case "dna":
              if (mode === "bases") return [[P.themeB, L("A adenine", "A アデニン", "A 腺嘌呤", "A 아데닌")], [P.nonpolar, L("T thymine", "T チミン", "T 胸腺嘧啶", "T 타이민")], [P.good, L("G guanine", "G グアニン", "G 鳥嘌呤", "G 구아닌")], [P.themeA, L("C cytosine", "C シトシン", "C 胞嘧啶", "C 사이토신")], [P.muted, L("backbone", "骨格", "骨架", "골격")]];
              return [[P.themeA, LG.strand1], [P.themeB, LG.strand2]].concat(S.hl === "pairs" ? [[P.hbond, LG.hb]] : []);
          }
          return [];
        }

        /* ---------- drawing ---------- */
        function protSpec(style, fn) {
          if (style === "cartoon") return { cartoon: { colorfunc: fn, arrows: true, thickness: 0.35 } };
          if (style === "sticks") return { stick: { colorfunc: fn, radius: 0.16 } };
          if (style === "spacefill") return { sphere: { colorfunc: fn, scale: 0.95 } };
          return { stick: { colorfunc: fn, radius: 0.12 } };
        }
        function atomsOf(sel) { return viewer.selectedAtoms(sel); }
        function dist(a, b) { var x = a.x - b.x, y = a.y - b.y, z = a.z - b.z; return Math.sqrt(x * x + y * y + z * z); }
        function addLabel(text, pos, color, bg) {
          viewer.addLabel(text, { position: pos, fontSize: 13, fontColor: color, backgroundColor: bg, backgroundOpacity: 0.85, borderColor: color, borderThickness: 1, showBackground: true, inFront: true, alignment: "center", font: "sans-serif" });
        }
        function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 }; }

        function draw() {
          if (!viewer || !ready) return;
          var pr = cur();
          P = readPalette();
          var bgc = P.surface2;
          viewer.setBackgroundColor(bgc, 1);
          viewer.removeAllShapes(); viewer.removeAllLabels(); viewer.removeAllSurfaces();
          viewer.setStyle({}, {});
          var fn = colorFn(pr, S.mode);

          if (pr.id === "dna") {
            var isBB = { atom: BB_DNA };
            var isBase = { atom: BB_DNA, invert: true };
            var hl = S.hl;
            var bbFn = (S.mode === "bases") ? function () { return P.muted; } : fn;
            var chA = atomsOf({ chain: "A" }), chB = atomsOf({ chain: "B" });
            function find(list, resi, name) { for (var i = 0; i < list.length; i++) if (list[i].resi === resi && list[i].atom === name) return list[i]; return null; }
            if (S.style === "spacefill") {
              viewer.setStyle({}, { sphere: { colorfunc: fn, scale: 0.9 } });
            } else {
              var bbR = hl === "backbone" ? 0.27 : hl === "pairs" ? 0.08 : 0.17, bbO = hl === "pairs" ? 0.4 : 1;
              var baseR = hl === "pairs" ? 0.27 : hl === "backbone" ? 0.09 : 0.17, baseO = hl === "backbone" ? 0.35 : 1;
              viewer.setStyle(isBB, { stick: { colorfunc: bbFn, radius: bbR, opacity: bbO } });
              viewer.setStyle(isBase, { stick: { colorfunc: fn, radius: baseR, opacity: baseO } });
            }
            var firstB = chB.length ? chB[0].resi : 13;
            var nRes = 12;
            var lblBg = P.surface, lblFg = P.ink;
            if (hl === "pairs") {
              var PAIRS = { DA: [["N1", "N3"], ["N6", "O4"]], DT: [["N3", "N1"], ["O4", "N6"]], DG: [["N1", "N3"], ["N2", "O2"], ["O6", "N4"]], DC: [["N3", "N1"], ["O2", "N2"], ["N4", "O6"]] };
              var done = {};
              chA.forEach(function (a) {
                if (done[a.resi]) return; done[a.resi] = true;
                var rb = firstB + (nRes - (a.resi - chA[0].resi + 1));
                (PAIRS[a.resn] || []).forEach(function (d) {
                  var x = find(chA, a.resi, d[0]), y = find(chB, rb, d[1]);
                  if (x && y && dist(x, y) < 3.4) viewer.addCylinder({ start: { x: x.x, y: x.y, z: x.z }, end: { x: y.x, y: y.y, z: y.z }, radius: 0.08, color: P.hbond, dashed: true, dashLength: 0.2, gapLength: 0.12, fromCap: 1, toCap: 1 });
                });
              });
              var m1 = find(chA, chA[0].resi + 5, "N1") || find(chA, chA[0].resi + 5, "N3");
              var m2 = find(chB, firstB + (nRes - 6), "N3") || find(chB, firstB + (nRes - 6), "N1");
              if (m1 && m2) addLabel(t(DNA_LABELS.bp), mid(m1, m2), lblFg, lblBg);
            } else if (hl === "backbone") {
              var pa = find(chA, chA[0].resi + 4, "P"), pb = find(chB, firstB + 4, "P");
              if (pa) addLabel(t(DNA_LABELS.bb), pa, P.themeA, lblBg);
              if (pb) addLabel(t(DNA_LABELS.bb), pb, P.themeB, lblBg);
            } else if (hl === "direction") {
              [[chA, P.themeA], [chB, P.themeB]].forEach(function (cc) {
                var list = cc[0], col = cc[1];
                var ps = list.filter(function (a) { return a.atom === "P"; }).sort(function (u, v) { return u.resi - v.resi; });
                for (var k = 0; k + 1 < ps.length; k++) {
                  if (k + 2 === ps.length) viewer.addArrow({ start: { x: ps[k].x, y: ps[k].y, z: ps[k].z }, end: { x: ps[k + 1].x, y: ps[k + 1].y, z: ps[k + 1].z }, radius: 0.22, radiusRatio: 2.4, mid: 0.4, color: col });
                  else viewer.addCylinder({ start: { x: ps[k].x, y: ps[k].y, z: ps[k].z }, end: { x: ps[k + 1].x, y: ps[k + 1].y, z: ps[k + 1].z }, radius: 0.22, color: col, fromCap: 1, toCap: 1 });
                }
                var e5 = find(list, list[0].resi, "O5'"), e3 = find(list, list[list.length - 1].resi, "O3'");
                if (e5) addLabel("5\u2032", e5, col, lblBg);
                if (e3) addLabel("3\u2032", e3, col, lblBg);
              });
              var tA = find(chA, chA[0].resi + 6, "P"), tB = find(chB, firstB + 5, "P");
              if (tA && tB) addLabel(t(DNA_LABELS.anti), mid(tA, tB), lblFg, lblBg);
            }
          } else {
            var protSel = { hetflag: false };
            if (S.style === "surface") {
              viewer.setStyle(protSel, protSpec("sticks", fn));
              viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.7, colorfunc: fn }, protSel);
            } else {
              viewer.setStyle(protSel, protSpec(S.style, fn));
            }
            if (pr.id === "insulin" && S.on.ss) {
              var cysFn = function (a) { return a.elem === "S" ? P.disulfide : P.ink2; };
              viewer.setStyle({ resn: "CYS" }, { stick: { colorfunc: cysFn, radius: 0.22 }, sphere: { colorfunc: function (a) { return a.elem === "S" ? P.disulfide : "#000000"; }, scale: 0.0 } });
              var sg = atomsOf({ resn: "CYS", atom: "SG" });
              viewer.addStyle({ resn: "CYS", atom: "SG" }, { sphere: { color: P.disulfide, radius: 0.6 } });
              for (var i = 0; i < sg.length; i++) for (var j = i + 1; j < sg.length; j++) {
                if (dist(sg[i], sg[j]) < 2.5) {
                  var lab = sg[i].chain + sg[i].resi + "–" + sg[j].chain + sg[j].resi;
                  addLabel(lab, mid(sg[i], sg[j]), P.ink, P.surface);
                }
              }
            }
            if (pr.id === "haemoglobin" || pr.id === "hydrophobic") {
              if (S.on.haem) {
                viewer.setStyle({ resn: "HEM" }, { stick: { colorfunc: function (a) { return a.elem === "FE" || a.elem === "Fe" ? P.cFe : P.ink2; }, radius: 0.2 } });
                viewer.addStyle({ elem: "Fe" }, { sphere: { color: P.cFe, radius: 0.85 } });
              }
            }
          }
          legendRender();
          viewer.render();
        }

        function applySlab() {
          if (!viewer) return;
          try {
            /* S.slice 0 = off; 1..100 moves a clipping plane from the front (-20 Å) through the centre to +20 Å (view axis, from the protein centre) */
            if (S.slice > 0) viewer.setSlab(-20 + (S.slice / 100) * 40, 100);
            else viewer.setSlab(-1000, 1000);
            viewer.render();
          } catch (e) { /* ignore */ }
        }

        /* ---------- UI building ---------- */
        function legendRender() {
          var pr = cur();
          if (!P) P = readPalette();
          var items = legendFor(pr, S.mode);
          legend.innerHTML = "";
          items.forEach(function (it) {
            var sw = h("i"); sw.style.background = it[0];
            legend.appendChild(h("span", null, [sw, h("span", { text: t(it[1]) })]));
          });
        }
        function btn(label, pressed, onclick) {
          var b = h("button", { type: "button", "class": "m3-btn", "aria-pressed": pressed ? "true" : "false", text: label });
          b.addEventListener("click", onclick);
          return b;
        }
        function narrow() { return window.innerWidth < 640; }
        /* the explanation opens by itself only on wide screens and only if the whole widget still fits the viewport minus the 64px header */
        function fitLook() {
          userLook = false;
          lookD.open = false;
          if (window.innerWidth < 1100 || window.innerHeight < 860) return;
          lookD.open = true;
          var chk = function () { if (!userLook && !destroyed && el.getBoundingClientRect().height > window.innerHeight - 64) lookD.open = false; };
          chk();
          if (window.requestAnimationFrame) requestAnimationFrame(function () { requestAnimationFrame(chk); });
          setTimeout(chk, 400);
        }
        var userLook = false;
        function buildControls() {
          var pr = cur();
          capP.textContent = t(pr.cap);
          lookD.firstChild.textContent = t(T.look); lookP.textContent = t(pr.look);
          examP.innerHTML = "";
          examP.appendChild(h("strong", { "class": "m3-ref", text: pr.ref + (pr.ahl ? " AHL" : "") }));
          examP.appendChild(document.createTextNode(t(T.exam) + ": " + t(pr.exam)));

          function seg(g, label) { g.innerHTML = ""; g.appendChild(h("span", { "class": "m3-lbl", text: label })); var sg = h("div", { "class": "m3-seg", role: "group", "aria-label": label }); g.appendChild(sg); return sg; }
          var segS = seg(grpStyle, t(T.style));
          pr.styles.forEach(function (s) { segS.appendChild(btn(t(T.styles[s]), S.style === s, function () { S.style = s; refreshButtons(); draw(); })); });
          var segM = seg(grpMode, t(T.colour));
          pr.modes.forEach(function (m) { segM.appendChild(btn(t(MODE[m]), S.mode === m, function () { S.mode = m; refreshButtons(); draw(); })); });
          grpShow.innerHTML = "";
          if (pr.toggles.length) {
            var segW = seg(grpShow, t(T.show));
            pr.toggles.forEach(function (k) { segW.appendChild(btn(t(SHOW[k]), !!S.on[k], function () { S.on[k] = !S.on[k]; refreshButtons(); draw(); })); });
          }
          grpShow.hidden = !pr.toggles.length;
          grpHl.innerHTML = "";
          if (pr.hls) {
            var segH = seg(grpHl, t(HL.label));
            pr.hls.forEach(function (k) { segH.appendChild(btn(t(HL[k]), S.hl === k, function () { S.hl = k; refreshButtons(); draw(); })); });
          }
          grpHl.hidden = !pr.hls;
          toolsL.innerHTML = "";
          var spinB = btn(t(S.spin ? T.spinOn : T.spinOff), S.spin, function () {
            S.spin = !S.spin; spinB.textContent = t(S.spin ? T.spinOn : T.spinOff); spinB.setAttribute("aria-pressed", S.spin ? "true" : "false"); applySpin();
          });
          spinB.setAttribute("data-k", "spin");
          toolsL.appendChild(spinB);
          var rB = h("button", { type: "button", "class": "m3-btn", text: t(T.reset) });
          rB.addEventListener("click", function () { if (viewer) { viewer.zoomTo(); viewer.zoom(zoomFor(cur())); applySlab(); } });
          toolsL.appendChild(rB);

          sliceBox.innerHTML = "";
          sliceBox.hidden = !pr.slice;
          if (pr.slice) {
            var rng = h("input", { type: "range", min: "0", max: "100", step: "1", value: String(S.slice), id: "m3-slice-" + Math.random().toString(36).slice(2, 7) });
            sliceBox.setAttribute("for", rng.id);
            sliceBox.appendChild(h("span", { text: t(T.slice) }));
            sliceBox.appendChild(rng);
            rng.addEventListener("input", function () { S.slice = +rng.value; applySlab(); });
          }

          detBody.innerHTML = "";
          if (narrow()) { hint.parentNode && hint.parentNode.removeChild(hint); hint.className = "m3-hint m3-hint-in"; detBody.appendChild(hint); }
          else if (hint.parentNode !== stage) { hint.className = "m3-hint"; stage.appendChild(hint); }
          if (pr.id === "hydrophobic") detBody.appendChild(h("p", { text: t(T.hydroTable) }));
          detBody.appendChild(h("p", { "class": "m3-credit", text: t(T.credit) + " " + pr.pdb.toUpperCase() + " “" + pr.pdbTitle + "”. " + t(T.viewer) }));
          /* phones: one "What am I looking at?" disclosure holds the explanation, the exam line, the hint and the credit */
          while (lookD.children.length > 2) lookD.removeChild(lookD.lastChild);
          if (narrow()) {
            lookD.appendChild(examP);
            while (detBody.firstChild) lookD.appendChild(detBody.firstChild);
            det.hidden = true;
          } else {
            det.hidden = false;
            panel.insertBefore(examP, det);
          }
          fitLook();
        }
        function refreshButtons() {
          var pr = cur();
          Array.prototype.forEach.call(grpStyle.querySelectorAll("button"), function (b, i) { b.setAttribute("aria-pressed", pr.styles[i] === S.style ? "true" : "false"); });
          Array.prototype.forEach.call(grpMode.querySelectorAll("button"), function (b, i) { b.setAttribute("aria-pressed", pr.modes[i] === S.mode ? "true" : "false"); });
          if (pr.hls) Array.prototype.forEach.call(grpHl.querySelectorAll("button"), function (b, i) { b.setAttribute("aria-pressed", pr.hls[i] === S.hl ? "true" : "false"); });
          var tb = grpShow.querySelectorAll("button");
          Array.prototype.forEach.call(tb, function (b, i) { b.setAttribute("aria-pressed", S.on[pr.toggles[i]] ? "true" : "false"); });
        }
        function buildTabs() {
          tabs.innerHTML = "";
          list.forEach(function (pr) {
            var b = h("button", { type: "button", role: "tab", "aria-selected": pr.id === S.preset ? "true" : "false", text: t(pr.tab) });
            b.addEventListener("click", function () { selectPreset(pr.id); });
            tabs.appendChild(b);
          });
        }
        tabs.addEventListener("keydown", function (e) {
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          var i = list.map(function (p) { return p.id; }).indexOf(S.preset);
          i = (i + (e.key === "ArrowRight" ? 1 : list.length - 1)) % list.length;
          selectPreset(list[i].id);
          var bs = tabs.querySelectorAll("button"); if (bs[i]) bs[i].focus();
          e.preventDefault();
        });

        function zoomFor(pr) {
          if (!pr.elong) return pr.zoom || 1.1;
          var w = view.clientWidth || 600, hh = view.clientHeight || 300;
          return Math.max(1.0, Math.min(2.0, 0.9 * w / hh));
        }
        function applySpin() {
          if (!viewer || !ready) return;
          try {
            if (S.spin && visible && !destroyed) viewer.spin(cur().spinAxis || "y", 0.6); else viewer.spin(false);
          } catch (e) { /* ignore */ }
        }

        /* ---------- preset selection and model loading ---------- */
        function selectPreset(id) {
          var pr = PRESET_BY_ID[id];
          S.preset = id; S.style = pr.style; S.mode = pr.mode; S.on = {}; S.hl = "none";
          pr.toggles.forEach(function (k) { S.on[k] = (k === "ss" || k === "haem" || k === "labels"); });
          S.slice = 0;
          buildTabs(); buildControls(); legendRender();
          var tok = ++loadTok;
          ready = false;
          showMsg(t(T.loading), false);
          Promise.all([loadLib(), loadPdb(pr.pdb)]).then(function (r) {
            if (destroyed || tok !== loadTok) return;
            if (!viewer) {
              try {
                viewer = $3Dmol.createViewer(view, { backgroundColor: "white", antialias: true });
              } catch (e) { showMsg(t(T.nogl), true); return; }
              if (!viewer) { showMsg(t(T.nogl), true); return; }
              view.__mol3d = viewer;
              installGuards();
            }
            var text = r[1].replace(/^HETATM(.{11})HYP/gm, "ATOM  $1HYP");
            viewer.removeAllModels();
            viewer.addModel(text, "pdb");
            ready = true;
            draw();
            viewer.zoomTo(); viewer.zoom(zoomFor(pr));
            applySlab();
            viewer.render();
            hideMsg();
            applySpin();
          }).catch(function (err) {
            if (destroyed || tok !== loadTok) return;
            var isLib = !(window.$3Dmol && window.$3Dmol.createViewer);
            showMsg(t(isLib ? T.offline : T.nodata), true);
            if (window.console) console.warn("mol3d:", err && err.message);
          });
        }

        /* ---------- interaction guards (do not trap page scroll) ---------- */
        var guardsOn = false;
        function setActive(on) {
          S.active = on;
          view.classList.toggle("is-active", on);
          if (coarse) { overlay.hidden = on; btnDone.hidden = !on; }
        }
        function installGuards() {
          if (guardsOn) return; guardsOn = true;
          view.addEventListener("wheel", function (e) { if (!S.active) e.stopImmediatePropagation(); }, true);
          view.addEventListener("mousedown", function () { if (!coarse) setActive(true); });
          view.addEventListener("mouseleave", function () { if (!coarse) setActive(false); });
        }
        overlay.addEventListener("click", function () { setActive(true); });
        btnDone.addEventListener("click", function () { setActive(false); });
        btnIn.addEventListener("click", function () { if (viewer && ready) { viewer.zoom(1.25, 200); } });
        btnOut.addEventListener("click", function () { if (viewer && ready) { viewer.zoom(0.8, 200); } });

        /* resize, visibility, theme */
        var ro = null, io = null, mo = null, mq = null;
        function onResize() { if (viewer) { try { viewer.resize(); viewer.render(); } catch (e) { /* ignore */ } } }
        if (window.ResizeObserver) { ro = new ResizeObserver(onResize); ro.observe(view); }
        else { window.addEventListener("resize", onResize); cleanupFns.push(function () { window.removeEventListener("resize", onResize); }); }
        if (window.IntersectionObserver) {
          io = new IntersectionObserver(function (en) { visible = en[0].isIntersecting; applySpin(); });
          io.observe(el);
        }
        function onTheme() { if (ready) draw(); }
        try {
          mo = new MutationObserver(onTheme);
          mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });
          mq = window.matchMedia("(prefers-color-scheme: dark)");
          if (mq.addEventListener) mq.addEventListener("change", onTheme);
        } catch (e) { /* ignore */ }
        function onVis() { if (document.hidden) { try { viewer && viewer.spin(false); } catch (e) { /* ignore */ } } else applySpin(); }
        document.addEventListener("visibilitychange", onVis);

        selectPreset(S.preset);

        /* ---------- cleanup ---------- */
        return function () {
          destroyed = true; loadTok++;
          try { if (ro) ro.disconnect(); if (io) io.disconnect(); if (mo) mo.disconnect(); } catch (e) { /* ignore */ }
          try { if (mq && mq.removeEventListener) mq.removeEventListener("change", onTheme); } catch (e) { /* ignore */ }
          document.removeEventListener("visibilitychange", onVis);
          cleanupFns.forEach(function (f) { try { f(); } catch (e) { /* ignore */ } });
          if (viewer) {
            try { viewer.spin(false); } catch (e) { /* ignore */ }
            try {
              var cv = view.querySelector("canvas");
              viewer.clear();
              if (cv) {
                var gl = cv.getContext("webgl2") || cv.getContext("webgl");
                var ext = gl && gl.getExtension("WEBGL_lose_context");
                if (ext) ext.loseContext();
                if (cv.parentNode) cv.parentNode.removeChild(cv);
              }
            } catch (e) { /* ignore */ }
            viewer = null;
          }
          el.innerHTML = "";
        };
      }
    };
  }

  if (window.IB && IB.registerWidget) {
    var ALL = PRESETS.map(function (p) { return p.id; });
    IB.registerWidget("mol3d", makeWidget(ALL, "helix-sheet", T.title));
    IB.registerWidget("mol3d-protein", makeWidget(["helix-sheet", "insulin", "haemoglobin", "collagen", "hydrophobic"], "helix-sheet",
      L("3D protein structures (real PDB data)", "タンパク質の3D構造 (実測のPDBデータ)", "蛋白質3D結構 (真實PDB數據)", "3D 단백질 구조(실제 PDB 자료)")));
    IB.registerWidget("mol3d-dna", makeWidget(["dna"], "dna",
      L("3D DNA double helix (real PDB data)", "DNA二重らせんの3D構造 (実測のPDBデータ)", "DNA雙螺旋3D結構 (真實PDB數據)", "3D DNA 이중 나선(실제 PDB 자료)")));
  }
})();
