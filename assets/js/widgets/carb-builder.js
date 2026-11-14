/* Widget: carb-builder — B1.1 carbohydrates (B1.1.2 condensation, B1.1.3 hydrolysis, B1.1.4 monosaccharides,
   B1.1.5 starch and glycogen, B1.1.6 cellulose). SL core, no AHL content.
   Tabs: 0 condensation/hydrolysis (maltose from two alpha-glucose), 1 alpha vs beta glucose, 2 polysaccharides.
   ctx.options: { tab: 0|1|2, poly: 0..3 }.  Schematic drawings, not to scale. */
(function () {
  "use strict";
  var L = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko }; };
  var ID = "w-carb-builder-css";

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
    ".w-carb-builder{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink)}",
    ".w-carb-builder svg text{fill:var(--ink);font-family:var(--font-body,system-ui,sans-serif)}",
    ".w-carb-builder .cb-btns{display:flex;flex-wrap:wrap;gap:.4rem}",
    ".w-carb-builder .cb-b{font:inherit;font-size:.9rem;font-weight:700;min-height:40px;padding:.3rem .8rem;border-radius:var(--radius);border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);cursor:pointer}",
    ".w-carb-builder .cb-b:hover{background:var(--surface-2)}",
    ".w-carb-builder .cb-b[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}",
    ".w-carb-builder .cb-chip{font-size:.74rem;padding:.25rem .3rem;letter-spacing:-.01em}.w-carb-builder .cb-btns{gap:.3rem}",
    ".w-carb-builder .cb-b[disabled]{opacity:.45;cursor:default}",
    ".w-carb-builder button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}",
    ".w-carb-builder .cb-msg{background:var(--surface-2);border-radius:var(--radius);padding:.45rem .65rem;line-height:1.4;min-height:4.6em;font-size:.9rem}",
    ".w-carb-builder .cb-msg b{color:var(--accent-ink)}",
    ".w-carb-builder .cb-cap{font-size:.76rem;color:var(--muted);margin:0}.w-carb-builder .wl-exam{font-size:.82rem;line-height:1.4}",
    ".w-carb-builder details{font-size:.86rem;margin:-.25rem 0 0;border:0!important;background:none!important}.w-carb-builder details>p{padding:0 .1rem}.w-carb-builder summary{cursor:pointer;font-weight:700;color:var(--accent-ink);min-height:32px;display:flex;align-items:center}",
    ".w-carb-builder details p{margin:.3rem 0}",
    ".w-carb-builder .cb-ring{fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2;stroke-linejoin:round}",
    ".w-carb-builder .cb-front{stroke:var(--ink);stroke-width:4.5;stroke-linecap:round;fill:none}",
    ".w-carb-builder .cb-sub{stroke:var(--ink-2);stroke-width:2;stroke-linecap:round}",
    ".w-carb-builder .cb-lbl{font-size:13px;font-weight:700}",
    ".w-carb-builder .cb-num{font-size:12px;fill:var(--muted)!important}",
    ".w-carb-builder .cb-sm{font-size:12px}",
    ".w-carb-builder .cb-lv{fill:var(--c-oxygen)!important;font-weight:800}",
    ".w-carb-builder .cb-wt{fill:var(--hbond)!important;font-weight:800;font-size:14px}",
    ".w-carb-builder .cb-bond{stroke:var(--accent);stroke-width:3.5;stroke-linecap:round;fill:none}",
    ".w-carb-builder .cb-hl{fill:var(--accent)!important;font-weight:800}",
    ".w-carb-builder .cb-unit{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.6}",
    ".w-carb-builder .cb-unit2{fill:var(--theme-b-soft);stroke:var(--theme-b);stroke-width:1.6}",
    ".w-carb-builder .cb-new{fill:var(--good-soft);stroke:var(--good);stroke-width:1.8}",
    ".w-carb-builder .cb-link{stroke:var(--ink-2);stroke-width:1.6;fill:none}",
    ".w-carb-builder .cb-hb{stroke:var(--hbond);stroke-width:2;stroke-dasharray:3 3;fill:none}",
    ".w-carb-builder .cb-sw{display:inline-block;width:.9rem;height:.9rem;border:1.6px solid;vertical-align:-.15rem;margin-right:.3rem;border-radius:2px}",
    "@media(prefers-reduced-motion:reduce){.w-carb-builder *{transition:none!important;animation:none!important}}"
  ].join("\n");

  var T = {
    tab0: L("Condensation and hydrolysis", "縮合と加水分解", "縮合與水解", "축합과 가수 분해"),
    tab1: L("α- and β-glucose", "α-グルコースとβ-グルコース", "α-葡萄糖與β-葡萄糖", "α-포도당과 β-포도당"),
    tab2: L("Polysaccharides", "多糖類", "多糖", "다당류"),
    cond: L("Condensation ▶", "縮合 ▶", "縮合 ▶", "축합 ▶"),
    hyd: L("◀ Hydrolysis", "◀ 加水分解", "◀ 水解", "◀ 가수 분해"),
    reset: L("Reset", "リセット", "重設", "다시 시작"),
    replay: L("Replay", "もう一度", "重播", "다시 재생"),
    add: L("+ glucose", "+ グルコース", "+ 葡萄糖", "+ 포도당"),
    addT: L("Add glucose to each end (condensation)", "各末端にグルコースを付ける（縮合）", "在每個末端加上葡萄糖（縮合）", "각 말단에 포도당 붙이기(축합)"),
    remT: L("Remove glucose from each end (hydrolysis)", "各末端からグルコースを外す（加水分解）", "由每個末端移去葡萄糖（水解）", "각 말단에서 포도당 떼어 내기(가수 분해)"),
    rem: L("− glucose", "− グルコース", "− 葡萄糖", "− 포도당"),
    more: L("More detail", "くわしく", "更多資料", "자세히 보기"),
    glc: L("α-glucose", "α-グルコース (α-glucose)", "α-葡萄糖 (α-glucose)", "α-포도당(α-glucose)"),
    gb: L("glycosidic bond", "グリコシド結合 (glycosidic bond)", "糖苷鍵 (glycosidic bond)", "글리코사이드 결합(glycosidic bond)"),
    water: L("water", "水", "水", "물"),
    // tab 0 messages
    m0: L("Two α-glucose molecules (monomers, <b>monosaccharides</b>). Each has –OH groups. Press Condensation.", "α-グルコース2分子（単量体 (monomer)、単糖類 (monosaccharide)）です。どちらも–OH基を持っています。「縮合」を押しましょう。", "兩個α-葡萄糖分子（單體 (monomer)、單糖 (monosaccharide)），都有–OH基。按「縮合」。", "α-포도당 2분자(단위체, <b>단당류(monosaccharide)</b>). 각각 –OH기가 있다. 축합을 누르시오."),
    m0c: L("<b>Condensation</b>: an –OH from one glucose and an –H from the other are removed together as <b>water</b>. The two rings are joining.", "<b>縮合 (condensation)</b>: 一方の–OHともう一方の–Hが取れ、<b>水</b>として放出されます。2つの環がつながっていきます。", "<b>縮合 (condensation)</b>：一個葡萄糖的–OH和另一個的–H一同脫去，成為<b>水</b>。兩個環正在連接。", "<b>축합(condensation)</b>: 한 포도당의 –OH와 다른 포도당의 –H가 함께 <b>물</b>로 떨어져 나간다. 두 고리가 결합하는 중이다."),
    m1: L("<b>Maltose</b> (a disaccharide) has formed, joined by a <b>glycosidic bond</b>. One water molecule was released. More units can be added the same way to make a polysaccharide.", "<b>マルトース (maltose)</b>（二糖類 (disaccharide)）ができ、<b>グリコシド結合</b>でつながっています。水が1分子放出されました。同じ方法で単位を増やすと多糖類になります。", "已形成<b>麥芽糖 (maltose)</b>（雙糖 (disaccharide)），以<b>糖苷鍵</b>相連，並釋出一個水分子。以同樣方式加入更多單位便成為多糖。", "<b>엿당(maltose)</b>(이당류)이 만들어졌고, <b>글리코사이드 결합</b>으로 연결되어 있다. 물 분자 1개가 방출되었다. 같은 방법으로 단위를 더 붙이면 다당류가 된다."),
    m1h: L("<b>Hydrolysis</b>: a water molecule is split. Its –H and –OH are added to the two sides of the glycosidic bond, which breaks, giving two α-glucose again.", "<b>加水分解 (hydrolysis)</b>: 水分子が分かれ、その–Hと–OHがグリコシド結合の両側に付いて結合が切れ、α-グルコース2分子に戻ります。", "<b>水解 (hydrolysis)</b>：水分子被分開，其–H和–OH加到糖苷鍵的兩端，使鍵斷開，重新得到兩個α-葡萄糖。", "<b>가수 분해(hydrolysis)</b>: 물 분자가 쪼개진다. 물의 –H와 –OH가 글리코사이드 결합의 양쪽에 붙으면서 결합이 끊어져, 다시 α-포도당 2분자가 된다."),
    m0h: L("<b>Hydrolysis</b>: water is split and its –H and –OH are added to the two sides of the bond. The bond breaks.", "<b>加水分解 (hydrolysis)</b>: 水が分かれ、–Hと–OHが結合の両側に付きます。結合が切れます。", "<b>水解 (hydrolysis)</b>：水被分開，–H和–OH加到鍵的兩側，鍵斷開。", "<b>가수 분해</b>: 물이 쪼개져 그 –H와 –OH가 결합의 양쪽에 붙는다. 결합이 끊어진다."),
    eq0: L("glucose + glucose  ⇌  maltose + H₂O", "グルコース + グルコース ⇌ マルトース + H₂O", "葡萄糖 + 葡萄糖 ⇌ 麥芽糖 + H₂O", "포도당 + 포도당  ⇌  엿당 + H₂O"),
    ex0: L("Condensation joins monomers and releases water. Hydrolysis uses water to split them again.", "縮合 (condensation) は単量体をつないで水を放出し、加水分解 (hydrolysis) は水を使って切り離します。", "縮合 (condensation) 把單體連起並釋出水；水解 (hydrolysis) 則利用水把它們分開。", "축합은 단위체를 연결하면서 물을 방출한다. 가수 분해는 물을 사용하여 다시 쪼갠다."),
    ref0: L("Syllabus B1.1.2–3", "シラバス B1.1.2–3", "課程大綱 B1.1.2–3", "교육과정 B1.1.2–3"),
    // tab 1
    alpha: L("α-glucose", "α-グルコース", "α-葡萄糖", "α-포도당"),
    beta: L("β-glucose", "β-グルコース", "β-葡萄糖", "β-포도당"),
    below: L("OH on C1 below the ring", "C1のOHは環の下", "C1的OH在環下方", "C1의 OH가 고리 아래"),
    above: L("OH on C1 above the ring", "C1のOHは環の上", "C1的OH在環上方", "C1의 OH가 고리 위"),
    m2: L("Glucose is a <b>hexose</b> (6-carbon monosaccharide). The two forms differ only in the –OH on carbon 1 (C1).", "グルコースは<b>六炭糖 (hexose)</b>（炭素6個の単糖）です。2つの型の違いは炭素1（C1）の–OHだけです。", "葡萄糖是<b>己糖 (hexose)</b>（含6個碳的單糖）。兩種形式只在碳1（C1）的–OH位置不同。", "포도당은 <b>육탄당(hexose)</b>(탄소 6개의 단당류)이다. 두 형태는 1번 탄소(C1)의 –OH만 다르다."),
    m2a: L("<b>α-glucose</b>: –OH on C1 below the ring. Linked into starch and glycogen.", "<b>α-グルコース</b>: C1の–OHが環の下。デンプンとグリコーゲンになります。", "<b>α-葡萄糖</b>：C1的–OH在環下方。構成澱粉和糖原。", "<b>α-포도당</b>: C1의 –OH가 고리 아래에 있다. 연결되어 녹말과 글리코젠이 된다."),
    m2b: L("<b>β-glucose</b>: –OH on C1 above the ring. Linked into cellulose.", "<b>β-グルコース</b>: C1の–OHが環の上。セルロースになります。", "<b>β-葡萄糖</b>：C1的–OH在環上方。構成纖維素。", "<b>β-포도당</b>: C1의 –OH가 고리 위에 있다. 연결되어 셀룰로스가 된다."),
    glcprop: L("Glucose: soluble (easily transported in blood), chemically stable, and yields energy when oxidised.", "グルコース: 水に溶け（血液で運びやすい）、化学的に安定で、酸化されるとエネルギーを生みます。", "葡萄糖：可溶於水（易於由血液運送）、化學性質穩定，氧化時可釋出能量。", "포도당: 물에 녹고(혈액으로 쉽게 운반됨), 화학적으로 안정하며, 산화되면 에너지를 낸다."),
    ex1: L("α-glucose: OH on C1 below the ring. β-glucose: OH on C1 above the ring.", "α-グルコースはC1のOHが環の下、β-グルコースは環の上です。", "α-葡萄糖的C1–OH在環下方；β-葡萄糖的在環上方。", "α-포도당: C1의 OH가 고리 아래. β-포도당: C1의 OH가 고리 위."),
    ref1: L("Syllabus B1.1.4–6", "シラバス B1.1.4–6", "課程大綱 B1.1.4–6", "교육과정 B1.1.4–6"),
    // tab 2
    p0: L("Amylose", "アミロース", "直鏈澱粉", "아밀로스"),
    p1: L("Amylopectin", "アミロペクチン", "支鏈澱粉", "아밀로펙틴"),
    p2: L("Glycogen", "グリコーゲン", "糖原", "글리코젠"),
    p3: L("Cellulose", "セルロース", "纖維素", "셀룰로스"),
    d0: L("<b>Amylose</b> (a starch): an unbranched chain of α-glucose that coils up. Coiling makes it compact. Plants store starch.", "<b>アミロース (amylose)</b>（デンプンの一種）: α-グルコースが枝分かれせずにつながり、らせん状に巻いてコンパクトになります。植物はデンプンを貯蔵します。", "<b>直鏈澱粉 (amylose)</b>（澱粉的一種）：α-葡萄糖不分支地連成長鏈，並盤繞成螺旋。盤繞令它緊密。植物以澱粉儲存能量。", "<b>아밀로스(amylose)</b>(녹말의 한 종류): 가지가 없는 α-포도당 사슬이 코일처럼 감긴다. 감기면 조밀해진다. 식물은 녹말을 저장한다."),
    d1: L("<b>Amylopectin</b> (a starch): α-glucose with side branches as well as coiling. Branching and coiling make it compact. Many ends: glucose is added or removed at each.", "<b>アミロペクチン (amylopectin)</b>（デンプン）: α-グルコースで、巻いて枝分かれもし、コンパクトです。末端が多く、そこでグルコースを付け外しします。", "<b>支鏈澱粉 (amylopectin)</b>（澱粉的一種）：α-葡萄糖，既盤繞也有分支。分支和盤繞令它緊密。末端多，可在每個末端加上或移去葡萄糖。", "<b>아밀로펙틴(amylopectin)</b>(녹말의 한 종류): α-포도당 사슬이 감기고 곁가지도 있다. 가지와 감김 때문에 조밀하다. 말단이 많아 각 말단에서 포도당을 붙이거나 뗄 수 있다."),
    d2: L("<b>Glycogen</b> (animals): α-glucose like amylopectin, but branched even more. Very compact, with many ends, so glucose can be added or removed quickly.", "<b>グリコーゲン (glycogen)</b>（動物）: アミロペクチンと同じα-グルコースですが、さらに多く枝分かれします。非常にコンパクトで末端が多く、グルコースをすばやく付け外しできます。", "<b>糖原 (glycogen)</b>（動物）：與支鏈澱粉一樣由α-葡萄糖組成，但分支更多。非常緊密，末端多，因此可快速加上或移去葡萄糖。", "<b>글리코젠(glycogen)</b>(동물): 아밀로펙틴처럼 α-포도당으로 되어 있지만 가지가 훨씬 더 많다. 매우 조밀하고 말단이 많아 포도당을 빠르게 붙이거나 뗄 수 있다."),
    d3: L("<b>Cellulose</b> (plant cell walls): β-glucose, with every other unit inverted. This gives straight chains. Chains lie in bundles, cross-linked by many hydrogen bonds: strong fibres.", "<b>セルロース (cellulose)</b>（植物の細胞壁）: β-グルコースで、1つおきに上下が反転しています。そのため鎖はまっすぐです。鎖は束になり、多くの水素結合で架橋されて丈夫な繊維になります。", "<b>纖維素 (cellulose)</b>（植物細胞壁）：β-葡萄糖，每隔一個單位便倒轉。因此鏈呈直線。多條鏈成束，以大量氫鍵交聯，形成堅韌的纖維。", "<b>셀룰로스(cellulose)</b>(식물 세포벽): β-포도당으로 되어 있으며 단위가 하나씩 걸러 뒤집혀 있다. 그래서 곧은 사슬이 된다. 사슬은 다발로 놓이고 많은 수소 결합으로 서로 연결되어 튼튼한 섬유가 된다."),
    mt: L("More detail", "くわしく", "更多資料", "자세히 보기"),
    md0: L("Starch and glycogen are large molecules, so they are relatively insoluble: they stay in the cell and do not dissolve away. Adding or removing α-glucose is done by condensation and hydrolysis, so the store is easy to build up or mobilise.", "デンプンとグリコーゲンは大きな分子なので溶けにくく、細胞内にとどまります。α-グルコースの付加と除去は縮合と加水分解で行うので、貯蔵を増やしたり動員したりしやすいのです。", "澱粉和糖原是大分子，相對不溶於水，會留在細胞內。α-葡萄糖的加入和移去靠縮合和水解進行，所以儲備容易增加或動用。", "녹말과 글리코젠은 큰 분자이므로 비교적 물에 녹지 않는다. 그래서 세포 안에 머물며 녹아 나가지 않는다. α-포도당을 붙이고 떼는 일은 축합과 가수 분해로 이루어지므로, 저장 물질을 쉽게 쌓고 동원할 수 있다."),
    md3: L("Cellulose cannot coil because of the inverted units. Its straight chains pack side by side, and hydrogen bonds between chains hold them in bundles.", "反転した単位のためセルロースは巻けません。まっすぐな鎖が並び、鎖どうしの水素結合で束になります。", "纖維素因單位倒轉而不能盤繞。直鏈並排緊貼，鏈與鏈之間的氫鍵把它們固定成束。", "셀룰로스는 뒤집힌 단위 때문에 감길 수 없다. 곧은 사슬이 나란히 놓이고, 사슬 사이의 수소 결합이 사슬을 다발로 묶는다."),
    ends: L("Ends where glucose can be added or removed", "グルコースを付け外しできる末端", "可加上或移去葡萄糖的末端", "포도당을 붙이거나 뗄 수 있는 말단"),
    ex2: L("Starch (plants), glycogen (animals): α-glucose, coiled and branched, compact energy stores. Cellulose: β-glucose, alternate units inverted, straight chains, H-bonds between chains.", "デンプン・グリコーゲン: α-グルコース、巻いて枝分かれした貯蔵物質。セルロース: β-グルコース、1つおきに反転、まっすぐな鎖、鎖間に水素結合。", "澱粉（植物）和糖原（動物）：α-葡萄糖，盤繞並有分支，緊密的能量儲備。纖維素：β-葡萄糖，每隔一個單位倒轉，直鏈，鏈間有氫鍵。", "녹말(식물), 글리코젠(동물): α-포도당, 감기고 가지가 있는 조밀한 에너지 저장 물질. 셀룰로스: β-포도당, 단위가 하나씩 걸러 뒤집힘, 곧은 사슬, 사슬 사이의 수소 결합."),
    ref2: L("Syllabus B1.1.5–6", "シラバス B1.1.5–6", "課程大綱 B1.1.5–6", "교육과정 B1.1.5–6"),
    lgA: L("α-glucose", "α-グルコース", "α-葡萄糖", "α-포도당"),
    lgBc: L("β-glucose", "β-グルコース", "β-葡萄糖", "β-포도당"),
    lgB: L("β-glucose, inverted", "β-グルコース（反転）", "β-葡萄糖（倒轉）", "β-포도당, 뒤집힘"),
    lgH: L("H bond", "水素結合", "氫鍵", "수소 결합"),
    lgN: L("added", "付加", "新增", "추가됨"),
    schem: L("schematic, not to scale", "模式図（縮尺は不同）", "示意圖，非按比例", "모식도, 축척 아님")
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function ss(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function seg(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function lerp(a, b, u) { return a + (b - a) * u; }
  function f1(x) { return Math.round(x * 10) / 10; }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }

  // ---- Haworth ring (flattened perspective: bold front edge C2-C3) -----
  var V = { C1: [40, 0], C2: [26, 15], C3: [-26, 15], C4: [-40, 0], C5: [-16, -15], O: [16, -15] };
  function ringSvg(cx, cy, k, o) {
    o = o || {};
    var P = {}; Object.keys(V).forEach(function (n) { P[n] = [cx + V[n][0] * k, cy + V[n][1] * k]; });
    var s = '<path class="cb-ring" d="M' + ["C1", "C2", "C3", "C4", "C5", "O"].map(function (n) { return f1(P[n][0]) + " " + f1(P[n][1]); }).join(" L") + ' Z"/>';
    function line(a, bx, by, hl) { return '<line class="cb-sub" x1="' + f1(a[0]) + '" y1="' + f1(a[1]) + '" x2="' + f1(bx) + '" y2="' + f1(by) + '"' + (hl ? ' style="stroke:var(--accent);stroke-width:3"' : "") + '/>'; }
    function lab(x, y, tx, cls, anchor) { return '<text class="cb-lbl' + (cls ? " " + cls : "") + '" x="' + f1(x) + '" y="' + f1(y) + '" text-anchor="' + (anchor || "middle") + '">' + tx + '</text>'; }
    // up-bonds first: drawn before the ring body is repainted? C3 up-bond runs behind the ring
    var under = "", over = "";
    var c3 = P.C3; under += line(c3, c3[0], c3[1] - 45 * k); over += lab(c3[0] - 3, c3[1] - 45 * k - 4, "OH");
    var c5 = P.C5; over += line(c5, c5[0], c5[1] - 34 * k) + lab(c5[0] + 2, c5[1] - 34 * k - 5, "CH₂OH", "", "middle");
    var dn = function (n, tx, hl) { var p = P[n]; return line(p, p[0], p[1] + 14 * k, hl) + lab(p[0], p[1] + 14 * k + 14, tx, hl ? "cb-hl" : ""); };
    var up = function (n, tx, hl) { var p = P[n]; return line(p, p[0], p[1] - 14 * k, hl) + lab(p[0], p[1] - 14 * k - 5, tx, hl ? "cb-hl" : ""); };
    over += dn("C2", "OH");
    if (!o.skip4) over += dn("C4", "OH");
    if (!o.skipC1) over += (o.c1 === "up" ? up("C1", "OH", o.hl) : dn("C1", "OH", o.hl));
    if (o.h1) {
      var q = P.C1, d2 = o.c1 === "up" ? 1 : -1;
      over += '<line class="cb-sub" x1="' + f1(q[0]) + '" y1="' + f1(q[1]) + '" x2="' + f1(q[0]) + '" y2="' + f1(q[1] + d2 * 12 * k) + '" style="stroke-dasharray:2 3"/>';
      over += '<text class="cb-sm" x="' + f1(q[0]) + '" y="' + f1(q[1] + (d2 > 0 ? 12 * k + 13 : -12 * k - 5)) + '" text-anchor="middle">H</text>';
    }
    var body = under + s + '<path class="cb-front" d="M' + f1(P.C2[0]) + " " + f1(P.C2[1]) + " L" + f1(P.C3[0]) + " " + f1(P.C3[1]) + '"/>';
    body += '<text class="cb-lbl" x="' + f1(P.O[0]) + '" y="' + f1(P.O[1] + 5) + '" text-anchor="middle">O</text>';
    (o.nums || []).forEach(function (n) {
      var p = P[n], right = n === "C1";
      body += '<text class="cb-num" x="' + f1(p[0] + (right ? 9 : -9)) + '" y="' + f1(p[1] + 4) + '" text-anchor="' + (right ? "start" : "end") + '">' + n + '</text>';
    });
    return { svg: body + over, P: P };
  }

  // ---- tab 0 maltose ---------------------------------------------------
  function maltoseSvg(p, t) {
    var y0 = 68, k = 0.9, ax = 62;
    var slide = ss(seg(p, 0, 0.35));
    var bxF = 178, bx = bxF + 62 * (1 - slide);
    var split = ss(seg(p, 0.45, 0.8));
    var bondA = seg(p, 0.6, 0.85);
    var rA = ringSvg(ax, y0, k, { skipC1: true });
    var rB = ringSvg(bx, y0, k, { skip4: true, c1: "down" });
    var c1 = rA.P.C1, c4 = rB.P.C4;
    var midx = (ax + 40 * k + bxF - 40 * k) / 2;
    var o0 = [c4[0], y0 + 14 * k + 8], o1 = [midx, y0 + 12 * k + 14];
    var O = [lerp(o0[0], o1[0], split), lerp(o0[1], o1[1], split)];
    var aOH0 = [c1[0], y0 + 14 * k + 8], aOH1 = [midx - 10, y0 + 66];
    var aOH = [lerp(aOH0[0], aOH1[0], split), lerp(aOH0[1], aOH1[1], split)];
    var bH0 = [c4[0] + 14, o0[1] - 1], bH1 = [midx + 11, y0 + 66];
    var bH = [lerp(bH0[0], bH1[0], split), lerp(bH0[1], bH1[1], split)];
    var fade = 1 - seg(split, 0.8, 0.98);
    var s = rA.svg + rB.svg;
    s += '<line class="cb-sub" x1="' + f1(c1[0]) + '" y1="' + f1(c1[1]) + '" x2="' + f1(aOH[0]) + '" y2="' + f1(aOH[1] - 12) + '" style="opacity:' + f1(clamp(1 - bondA, 0, 1) * fade) + '"/>';
    s += '<text class="cb-lbl cb-lv" x="' + f1(aOH[0]) + '" y="' + f1(aOH[1]) + '" text-anchor="middle" style="opacity:' + f1(fade) + '">OH</text>';
    s += '<line class="cb-sub" x1="' + f1(c4[0]) + '" y1="' + f1(c4[1]) + '" x2="' + f1(O[0]) + '" y2="' + f1(O[1] - 11) + '"' + (bondA > 0.5 ? ' style="stroke:var(--accent);stroke-width:3.5"' : "") + '/>';
    if (bondA > 0) s += '<line class="cb-bond" x1="' + f1(c1[0]) + '" y1="' + f1(c1[1]) + '" x2="' + f1(O[0]) + '" y2="' + f1(O[1] - 11) + '" style="opacity:' + f1(bondA) + '"/>';
    s += '<text class="cb-lbl' + (bondA > 0.5 ? " cb-hl" : "") + '" x="' + f1(O[0]) + '" y="' + f1(O[1] + 3) + '" text-anchor="middle">O</text>';
    s += '<text class="cb-lbl cb-lv" x="' + f1(bH[0]) + '" y="' + f1(bH[1]) + '" text-anchor="middle" style="opacity:' + f1(fade) + '">H</text>';
    var wo = seg(split, 0.8, 1);
    s += '<text class="cb-wt" x="' + f1(midx) + '" y="' + f1(y0 + 68) + '" text-anchor="middle" style="opacity:' + f1(wo) + '">H₂O</text>';
    if (bondA > 0.9) s += '<text class="cb-sm cb-hl" x="' + f1(midx) + '" y="' + f1(y0 + 46) + '" text-anchor="middle">' + t(T.gb).replace(/ \(.*/, "") + '</text>';
    s += '<text class="cb-sm" x="' + ax + '" y="' + (y0 + 100) + '" text-anchor="middle" style="fill:var(--muted)">' + t(T.alpha).replace(/ \(.*/, "") + '</text>';
    s += '<text class="cb-sm" x="' + f1(bx) + '" y="' + (y0 + 100) + '" text-anchor="middle" style="fill:var(--muted)">' + t(T.alpha).replace(/ \(.*/, "") + '</text>';
    return s;
  }

  // ---- tab 2 polysaccharide layouts -----------------------------------
  var STEP = 13;
  function buildTree(spec) {
    var pts = [], links = [], ends = [];
    function chain(x, y, ang, len, depth, parent) {
      var prev = parent, firstId = -1;
      for (var i = 0; i < len; i++) {
        var px = x + Math.cos(ang) * STEP * i, py = y + Math.sin(ang) * STEP * i;
        pts.push({ x: px, y: py, d: depth, ang: ang });
        var id = pts.length - 1;
        if (prev >= 0) links.push([prev, id]);
        prev = id;
        if (i === len - 1) ends.push(id);
        var br = spec.at(depth, i, len);
        if (br) {
          var sgn = ((br + depth) % 2) ? 1 : -1;
          var na = ang + sgn * 0.95;
          chain(px + Math.cos(na) * STEP, py + Math.sin(na) * STEP, na, spec.len[depth + 1], depth + 1, id);
        }
      }
    }
    chain(0, 0, 0, spec.len[0], 0, -1);
    return { pts: pts, links: links, ends: ends };
  }
  var TREES = {
    1: buildTree({ len: [16, 8, 5], at: function (d, i, n) { if (d === 0 && i > 2 && i < n - 3 && i % 4 === 3) return (i >> 2) + 1; if (d === 1 && i === 3) return 1; return 0; } }),
    2: buildTree({ len: [11, 7, 5, 3], at: function (d, i, n) { if (d === 0 && i > 0 && i < n - 1 && i % 2 === 0) return (i >> 1) + 1; if (d === 1 && i > 0 && i < n - 1 && i % 2 === 1) return (i >> 1) + 1; if (d === 2 && i === 1) return 1; return 0; } })
  };
  function fitTree(tr, W, H) {
    var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    tr.pts.forEach(function (q) { x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y); });
    var sc = Math.min((W - 40) / (x1 - x0 || 1), (H - 64) / (y1 - y0 || 1), 1.7);
    return { sc: sc, ox: W / 2 - ((x0 + x1) / 2) * sc, oy: H / 2 + 12 - ((y0 + y1) / 2) * sc };
  }

  function polySvg(kind, p, extra, t) {
    var W = 400, H = 226, s = "";
    if (kind === 0) {
      var N = 24, pos = [], u = ss(p);
      for (var i = 0; i < N; i++) {
        var sx = 40 + i * 13.5, sy = 125;
        var cx = 70 + i * 8 + 24 * Math.cos(i * 0.78), cy = 125 + 34 * Math.sin(i * 0.78);
        pos.push([lerp(sx, cx, u), lerp(sy, cy, u)]);
      }
      s += '<path class="cb-link" d="M' + pos.map(function (q) { return f1(q[0]) + " " + f1(q[1]); }).join(" L") + '"/>';
      pos.forEach(function (q) { s += '<circle class="cb-unit" cx="' + f1(q[0]) + '" cy="' + f1(q[1]) + '" r="6"/>'; });
      var e = pos[N - 1];
      if (extra > 0.02) s += '<circle class="cb-new" cx="' + f1(e[0] + 14) + '" cy="' + f1(e[1]) + '" r="6" style="opacity:' + f1(extra) + '"/>';
      return { svg: s, ends: 1 };
    }
    if (kind === 3) {
      var rows = 4, n = 8, flip = ss(seg(p, 0, 0.55)), hb = seg(p, 0.6, 1);
      var X0 = 52, DX = 42, Y0 = 52, DY = 46;
      for (var r = 0; r < rows; r++) {
        var y = Y0 + r * DY;
        for (var c = 0; c < n; c++) {
          var x = X0 + c * DX, inv = c % 2;
          if (c < n - 1) s += '<line class="cb-link" x1="' + (x + 12) + '" y1="' + y + '" x2="' + (x + DX - 12) + '" y2="' + y + '"/>';
          var dir = inv ? lerp(-1, 1, flip) : -1;
          s += '<path class="' + (inv ? "cb-unit2" : "cb-unit") + '" d="M' + (x + 12) + " " + y + " L" + (x + 6) + " " + f1(y + 10.4) + " L" + (x - 6) + " " + f1(y + 10.4) + " L" + (x - 12) + " " + y + " L" + (x - 6) + " " + f1(y - 10.4) + " L" + (x + 6) + " " + f1(y - 10.4) + ' Z"/>';
          s += '<line class="cb-sub" x1="' + x + '" y1="' + y + '" x2="' + x + '" y2="' + f1(y + dir * 17) + '" style="stroke-width:2.5"/>';
        }
      }
      for (var r2 = 0; r2 < rows - 1; r2++) {
        for (var c2 = 0; c2 < n; c2++) {
          if (hb <= 0) break;
          var xx = X0 + c2 * DX, ya = Y0 + r2 * DY + 15, yb = Y0 + (r2 + 1) * DY - 15;
          var vis = clamp(hb * (n + 1) - c2, 0, 1);
          if (vis > 0) s += '<line class="cb-hb" x1="' + xx + '" y1="' + ya + '" x2="' + xx + '" y2="' + f1(lerp(ya, yb, vis)) + '"/>';
        }
      }
      return { svg: s, ends: 0 };
    }
    // branched: 1 amylopectin, 2 glycogen
    var tr = TREES[kind], fit = fitTree(tr, W, H), n2 = tr.pts.length;
    var shown = Math.floor(seg(p, 0, 1) * n2 + 0.0001);
    var rr = kind === 2 ? 4.8 : 5.4;
    function X(q) { return f1(q.x * fit.sc + fit.ox); }
    function Y(q) { return f1(q.y * fit.sc + fit.oy); }
    tr.links.forEach(function (l) { if (l[1] < shown) s += '<line class="cb-link" x1="' + X(tr.pts[l[0]]) + '" y1="' + Y(tr.pts[l[0]]) + '" x2="' + X(tr.pts[l[1]]) + '" y2="' + Y(tr.pts[l[1]]) + '"/>'; });
    tr.pts.forEach(function (q, i) { if (i < shown) s += '<circle class="cb-unit" cx="' + X(q) + '" cy="' + Y(q) + '" r="' + rr + '"/>'; });
    if (extra > 0.02 && shown >= n2) tr.ends.forEach(function (id) {
      var q = tr.pts[id];
      s += '<circle class="cb-new" cx="' + f1(q.x * fit.sc + fit.ox + Math.cos(q.ang) * 12) + '" cy="' + f1(q.y * fit.sc + fit.oy + Math.sin(q.ang) * 12) + '" r="' + rr + '" style="opacity:' + f1(extra) + '"/>';
    });
    return { svg: s, ends: tr.ends.length };
  }

  IB.registerWidget("carb-builder", {
    title: L("Carbohydrate builder", "炭水化物ビルダー", "碳水化合物建構器", "탄수화물 만들기"),
    mount: function (el, ctx) {
      if (!document.getElementById(ID)) { var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st); }
      var t = ctx.t, opt = ctx.options || {};
      var tab = clamp(parseInt(opt.tab, 10) || 0, 0, 2);
      var poly = clamp(parseInt(opt.poly, 10) || 0, 0, 3);
      var noMotion = reduced();
      var raf = 0, last = 0, vis = true, io = null, dead = false;
      // state
      var p0 = 0, tgt0 = 0;           // tab 0 progress / target
      var pp = 1, extra = 0, extraT = 0; // polysaccharide progress and added-unit fade
      var el$ = {};

      el.innerHTML = "";
      var root = document.createElement("div"); root.className = "cb-root"; el.appendChild(root);
      var tabs = document.createElement("div"); tabs.className = "wl-tabs"; tabs.setAttribute("role", "tablist"); root.appendChild(tabs);
      var wl = document.createElement("div"); wl.className = "wl"; root.appendChild(wl);
      var stage = document.createElement("div"); stage.className = "wl-stage"; wl.appendChild(stage);
      var panel = document.createElement("div"); panel.className = "wl-panel"; wl.appendChild(panel);
      var tabBtns = [T.tab0, T.tab1, T.tab2].map(function (lab, i) {
        var b = document.createElement("button"); b.type = "button"; b.setAttribute("role", "tab"); b.textContent = t(lab);
        b.addEventListener("click", function () { setTab(i); }); tabs.appendChild(b); return b;
      });

      function btn(label, fn, pressed) {
        var b = document.createElement("button"); b.type = "button"; b.className = "cb-b"; b.innerHTML = label;
        if (pressed !== undefined) b.setAttribute("aria-pressed", pressed ? "true" : "false");
        b.addEventListener("click", fn); return b;
      }

      function setTab(i) {
        tab = i;
        tabBtns.forEach(function (b, k) { b.setAttribute("aria-selected", k === i ? "true" : "false"); });
        stage.innerHTML = ""; panel.innerHTML = ""; el$ = {};
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", i === 0 ? "0 0 320 176" : (i === 1 ? "0 0 340 190" : "0 0 400 226"));
        svg.style.maxWidth = i === 2 ? "560px" : "460px"; svg.setAttribute("role", "img"); svg.setAttribute("aria-label", t([T.tab0, T.tab1, T.tab2][i]));
        stage.appendChild(svg); el$.svg = svg;
        var lg = document.createElement("div"); lg.className = "wl-legend"; stage.appendChild(lg); el$.lg = lg;
        var msg = document.createElement("div"); msg.className = "cb-msg"; msg.setAttribute("aria-live", "polite"); el$.msg = msg;
        var bt = document.createElement("div"); bt.className = "cb-btns"; el$.bt = bt;
        panel.appendChild(bt); panel.appendChild(msg);
        if (i === 0) {
          var bc = btn(t(T.cond), function () { go(1); }), bh = btn(t(T.hyd), function () { go(0); }), br = btn(t(T.reset), function () { p0 = 0; tgt0 = 0; draw(); });
          bt.appendChild(bc); bt.appendChild(bh); bt.appendChild(br);
          lg.textContent = t(T.eq0);
          p0 = 0; tgt0 = 0;
        } else if (i === 1) {
          lg.innerHTML = t(T.glcprop);
        } else {
          pp = 0; extra = 0; extraT = 0;
          el$.chips = [T.p0, T.p1, T.p2, T.p3].map(function (lab, k) {
            var b = btn(t(lab), function () { poly = k; setPoly(); }, k === poly); b.className += " cb-chip"; bt.appendChild(b); return b;
          });
          var rp = btn("↻", function () { pp = 0; startAnim(); }); rp.className += " cb-chip"; rp.title = t(T.replay); rp.setAttribute("aria-label", t(T.replay));           var bt2 = document.createElement("div"); bt2.className = "cb-btns"; el$.bt2 = bt2;
          el$.addB = btn(t(T.add), function () { extraT = 1; startAnim(); }); el$.addB.title = t(T.addT);
          el$.remB = btn(t(T.rem), function () { extraT = 0; startAnim(); }); el$.remB.title = t(T.remT);
          bt2.appendChild(el$.addB); bt2.appendChild(el$.remB); bt2.appendChild(rp);
          panel.insertBefore(bt2, msg);
          var det = document.createElement("details"); det.innerHTML = "<summary>" + t(T.mt) + "</summary><p></p>"; el$.det = det; msg.parentNode.insertBefore(det, msg.nextSibling);
        }
        var ex = document.createElement("div"); ex.className = "wl-exam"; ex.innerHTML = "<strong>" + t(L("What to remember for the exam", "試験でおぼえること", "考試要記住", "시험 대비 핵심")) + ":</strong> " + t([T.ex0, T.ex1, T.ex2][i]); panel.appendChild(ex);
        var cap = document.createElement("p"); cap.className = "cb-cap"; cap.textContent = t([T.ref0, T.ref1, T.ref2][i]) + " · " + t(T.schem); panel.appendChild(cap);
        if (i === 2) setPoly(true);
        draw();
        startAnim();
      }

      function setPoly(skip) {
        el$.chips.forEach(function (b, k) { b.setAttribute("aria-pressed", k === poly ? "true" : "false"); });
        el$.msg.innerHTML = t([T.d0, T.d1, T.d2, T.d3][poly]);
        var det = el$.det; det.querySelector("p").innerHTML = t(poly === 3 ? T.md3 : T.md0);
        var branched = poly === 1 || poly === 2 || poly === 0;
        el$.addB.style.display = el$.remB.style.display = poly === 3 ? "none" : "";
        var lgs = poly === 3 ? '<span><i class="cb-sw" style="background:var(--accent-soft);border-color:var(--accent)"></i>' + t(T.lgBc) + '</span><span><i class="cb-sw" style="background:var(--theme-b-soft);border-color:var(--theme-b)"></i>' + t(T.lgB) + '</span><span><i class="cb-sw" style="border-style:dashed;border-color:var(--hbond)"></i>' + t(T.lgH) + '</span>'
          : '<span><i class="cb-sw" style="background:var(--accent-soft);border-color:var(--accent)"></i>' + t(T.lgA) + '</span><span><i class="cb-sw" style="background:var(--good-soft);border-color:var(--good)"></i>' + t(T.lgN) + '</span>';
        el$.lg.innerHTML = lgs;
        if (skip !== true) { pp = 0; extra = 0; extraT = 0; startAnim(); }
      }

      function go(dir) {
        tgt0 = dir;
        if (noMotion) { p0 = dir; draw(); return; }
        if (dir === 0 && p0 === 0) p0 = 0.0001;
        startAnim();
      }

      function msg0() {
        var rising = tgt0 >= p0 && !(tgt0 === 0 && p0 === 0);
        if (p0 >= 0.995) return t(tgt0 === 0 ? T.m1h : T.m1);
        if (p0 <= 0.005) return t(T.m0);
        return t(tgt0 === 0 ? T.m0h : T.m0c);
      }

      function draw() {
        if (dead || !el$.svg) return;
        if (tab === 0) { el$.svg.innerHTML = maltoseSvg(p0, t); el$.msg.innerHTML = msg0(); }
        else if (tab === 1) {
          var a = ringSvg(85, 100, 1.05, { c1: "down", hl: true, h1: true, nums: ["C1"] }), b = ringSvg(255, 100, 1.05, { c1: "up", hl: true, h1: true, nums: ["C1"] });
          var pulse = 0.5 + 0.5 * Math.sin(performance.now() / 350);
          el$.svg.innerHTML = a.svg + b.svg +
            '<text class="cb-lbl" x="85" y="20" text-anchor="middle" style="font-size:16px">' + t(T.alpha).replace(/ \(.*/, "") + '</text>' +
            '<text class="cb-lbl" x="255" y="20" text-anchor="middle" style="font-size:16px">' + t(T.beta).replace(/ \(.*/, "") + '</text>' +
            '<circle cx="' + f1(85 + 42) + '" cy="100" r="' + f1(7 + pulse * 4) + '" fill="none" stroke="var(--accent)" stroke-width="2" opacity="' + f1(0.9 - pulse * 0.5) + '"/>' +
            '<circle cx="' + f1(255 + 42) + '" cy="100" r="' + f1(7 + pulse * 4) + '" fill="none" stroke="var(--accent)" stroke-width="2" opacity="' + f1(0.9 - pulse * 0.5) + '"/>' +
            '<text class="cb-sm" x="85" y="178" text-anchor="middle">' + t(T.below) + '</text>' +
            '<text class="cb-sm" x="255" y="178" text-anchor="middle">' + t(T.above) + '</text>';
          if (!el$.msg.dataset.set) { el$.msg.innerHTML = t(T.m2) + '<br><span style="display:block;margin-top:.35rem">' + t(T.m2a) + "<br>" + t(T.m2b) + "</span>"; el$.msg.dataset.set = "1"; }
        } else {
          var r = polySvg(poly, ss(pp), ss(extra), t);
          el$.svg.innerHTML = r.svg;
          var endsTxt = poly === 3 ? "" : '<text class="cb-sm" x="8" y="18" style="font-weight:700">' + t(T.ends) + ": " + r.ends + "</text>";
          el$.svg.innerHTML += endsTxt;
        }
      }

      function active() {
        if (tab === 0) return Math.abs(p0 - tgt0) > 0.0005;
        if (tab === 1) return true;
        return pp < 1 || Math.abs(extra - extraT) > 0.002;
      }
      function startAnim() {
        if (noMotion) {
          if (tab === 0) p0 = tgt0; else if (tab === 2) { pp = 1; extra = extraT; }
          draw(); return;
        }
        if (!raf && vis) { last = 0; raf = requestAnimationFrame(frame); }
      }
      function frame(ts) {
        raf = 0; if (dead || !vis) return;
        var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts;
        if (tab === 0) { var d = tgt0 - p0, st = 0.26 * dt; p0 = Math.abs(d) <= st ? tgt0 : p0 + Math.sign(d) * st; }
        else if (tab === 2) {
          pp = Math.min(1, pp + dt * (poly === 3 ? 0.4 : (poly === 0 ? 0.45 : 0.3)));
          var de = extraT - extra, se = 1.6 * dt; extra = Math.abs(de) <= se ? extraT : extra + Math.sign(de) * se;
        }
        draw();
        if (active()) raf = requestAnimationFrame(frame);
      }

      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis && active()) startAnim(); }, { threshold: 0.05 });
        io.observe(el);
      }
      setTab(tab);

      return function () { dead = true; if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
    }
  });
})();
