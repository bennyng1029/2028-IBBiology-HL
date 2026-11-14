/* Widget: evolution-evidence — A4.1 evidence for evolution (SL).
   Tab 0: A4.1.4 homologous structures, pentadactyl limb (tap a bone group to compare it across four limbs).
   Tab 1: A4.1.4-5 homologous vs analogous structures, convergent evolution (classify, then watch the lineages).
   Tab 2: A4.1.3 selective breeding: wild cabbage (Brassica oleracea) and its cultivated varieties.
   Natural selection itself is D4.1 and is not taught here. ctx.options: { tab: 0|1|2 }. Schematic drawings. */
(function () {
  "use strict";
  var L = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko || en }; };
  var ID = "w-evolution-evidence-css";
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
    ".w-evolution-evidence{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink)}",
    ".w-evolution-evidence svg text{fill:var(--ink);font-family:var(--font-body,system-ui,sans-serif);font-size:12px}",
    ".w-evolution-evidence .ee-row{display:flex;flex-wrap:wrap;gap:.3rem}",
    ".w-evolution-evidence .ee-sel{width:100%;min-height:42px;font-size:.92rem}",
    ".w-evolution-evidence .ee-b{font:inherit;font-size:.78rem;font-weight:700;min-height:40px;padding:.2rem .4rem;border-radius:var(--radius);border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);cursor:pointer}",
    ".w-evolution-evidence .ee-b:hover{background:var(--surface-2)}",
    ".w-evolution-evidence .ee-b[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}",
    ".w-evolution-evidence .ee-b[data-g]{border-left-width:6px}",
    ".w-evolution-evidence button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}",
    ".w-evolution-evidence .ee-msg{background:var(--surface-2);border-radius:var(--radius);padding:.4rem .65rem;line-height:1.4;min-height:5.2em;font-size:.88rem}",
    ".w-evolution-evidence .ee-msg b{color:var(--accent-ink)}",
    ".w-evolution-evidence .ee-msg.ok{background:var(--good-soft)}",
    ".w-evolution-evidence .ee-msg.no{background:var(--bad-soft)}",
    ".w-evolution-evidence .wl-exam{font-size:.82rem;line-height:1.4}",
    ".w-evolution-evidence .ee-cap{font-size:.76rem;color:var(--muted);margin:0}",
    ".w-evolution-evidence details{border:0!important;background:none!important;font-size:.86rem;margin:-.2rem 0 0}",
    ".w-evolution-evidence summary{cursor:pointer;font-weight:700;color:var(--accent-ink);min-height:32px;display:flex;align-items:center}",
    ".w-evolution-evidence details p{margin:.2rem .1rem}",
    ".w-evolution-evidence .bn{cursor:pointer}",
    ".w-evolution-evidence .nd{cursor:pointer}",
    "@media(prefers-reduced-motion:reduce){.w-evolution-evidence *{transition:none!important;animation:none!important}}"
  ].join("\n");

  var GC = { H: "var(--theme-a)", RU: "var(--theme-b)", C: "var(--c-sulfur)", M: "var(--good)", P: "var(--accent)" };
  var GN = {
    H: L("Humerus", "上腕骨 (humerus)", "肱骨 (humerus)", "위팔뼈 (humerus)"),
    RU: L("Radius and ulna", "橈骨と尺骨 (radius, ulna)", "橈骨和尺骨 (radius, ulna)", "노뼈와 자뼈 (radius, ulna)"),
    C: L("Carpals", "手根骨 (carpals)", "腕骨 (carpals)", "손목뼈 (carpals)"),
    M: L("Metacarpals", "中手骨 (metacarpals)", "掌骨 (metacarpals)", "손허리뼈 (metacarpals)"),
    P: L("Phalanges", "指骨 (phalanges)", "指骨 (phalanges)", "손가락뼈 (phalanges)")
  };
  var GI = {
    H: L("<b>Humerus</b>: the single bone of the upper arm (upper forelimb), joined to the shoulder. Long in the human arm and cat leg, short and thick in the whale flipper.", "<b>上腕骨 (humerus)</b>: 上腕（前肢の付け根側）の1本の骨で、肩につながります。ヒトの腕とネコの前肢では長く、クジラの胸びれでは短く太くなっています。", "<b>肱骨 (humerus)</b>：上臂（前肢近端）的單一骨，連接肩部。人類手臂和貓前肢中較長，鯨鰭肢中短而粗。", "<b>위팔뼈(humerus)</b>: 윗팔(앞다리의 위쪽)을 이루는 뼈 한 개로 어깨와 이어져 있다. 사람의 팔과 고양이의 다리에서는 길고, 고래의 지느러미에서는 짧고 굵다."),
    RU: L("<b>Radius and ulna</b>: the two bones of the forearm (lower forelimb) in every case. The bat's radius is very long; in the whale flipper both are short and flat.", "<b>橈骨と尺骨 (radius, ulna)</b>: 前腕（前肢の先側）の2本の骨で、どの動物にもあります。コウモリでは橈骨が非常に長く、クジラの胸びれでは2本とも短く平たくなっています。", "<b>橈骨和尺骨 (radius, ulna)</b>：前臂（前肢遠端）的兩條骨，每種動物都有。蝙蝠的橈骨很長；鯨鰭肢中兩條都短而扁。", "<b>노뼈와 자뼈(radius, ulna)</b>: 모든 경우에서 아래팔(앞다리의 아래쪽)을 이루는 뼈 두 개이다. 박쥐의 노뼈는 매우 길고, 고래의 지느러미에서는 둘 다 짧고 납작하다."),
    C: L("<b>Carpals</b>: a group of small wrist bones, in the same position in all four limbs.", "<b>手根骨 (carpals)</b>: 手首の小さな骨の集まりで、4つとも同じ位置にあります。", "<b>腕骨 (carpals)</b>：腕部的一組小骨，在四種肢中位置相同。", "<b>손목뼈(carpals)</b>: 손목을 이루는 작은 뼈들의 모임으로, 네 가지 앞다리 모두에서 같은 위치에 있다."),
    M: L("<b>Metacarpals</b>: the bones of the palm, one for each digit. Long in the bat wing, short in the whale flipper.", "<b>中手骨 (metacarpals)</b>: 手のひらの骨で、指ごとに1本あります。コウモリの翼では長く、クジラの胸びれでは短くなっています。", "<b>掌骨 (metacarpals)</b>：手掌的骨，每隻指一條。蝙蝠翼中很長，鯨鰭肢中很短。", "<b>손허리뼈(metacarpals)</b>: 손바닥을 이루는 뼈로 손가락마다 하나씩 있다. 박쥐의 날개에서는 길고, 고래의 지느러미에서는 짧다."),
    P: L("<b>Phalanges</b>: the finger bones. Short in the human hand, very long in the bat wing, and more numerous in some whale flipper digits.", "<b>指骨 (phalanges)</b>: 指の骨です。ヒトの手では短く、コウモリの翼では非常に長く、クジラの胸びれの指では数が多いものがあります。", "<b>指骨 (phalanges)</b>：指的骨。人類手中較短，蝙蝠翼中非常長，鯨鰭肢的某些指中數目較多。", "<b>손가락뼈(phalanges)</b>: 손가락을 이루는 뼈. 사람의 손에서는 짧고, 박쥐의 날개에서는 매우 길며, 고래 지느러미의 일부 손가락에서는 개수가 더 많다.")
  };
  var LIMBS = [
    { n: L("Human arm (grasping)", "ヒトの腕（つかむ）", "人類手臂（抓握）", "사람의 팔 (잡기)"), hl: 46, hw: 9, rl: 44, gap: 6, cr: 8, ml: 20, pl: 10, ph: [2, 3, 3, 3, 3], ang: [-36, -18, 0, 18, 36], ru: [5, 5] },
    { n: L("Cat foreleg (walking)", "ネコの前肢（歩く）", "貓前肢（行走）", "고양이의 앞다리 (걷기)"), hl: 42, hw: 8, rl: 42, gap: 5, cr: 7, ml: 24, pl: 9, ph: [2, 3, 3, 3, 3], ang: [-26, -13, 0, 13, 26], ru: [5, 5] },
    { n: L("Bat wing (flying)", "コウモリの翼（飛ぶ）", "蝙蝠翼（飛行）", "박쥐의 날개 (날기)"), hl: 22, hw: 6, rl: 40, gap: 5, cr: 6, ml: 22, pl: 13, ph: [2, 2, 3, 2, 2], ang: [-62, -30, -10, 10, 30], ru: [4.5, 2], web: true, mls: [6, 22, 22, 20, 18] },
    { n: L("Whale flipper (swimming)", "クジラの胸びれ（泳ぐ）", "鯨鰭肢（游泳）", "고래의 지느러미 (헤엄치기)"), hl: 22, hw: 13, rl: 26, gap: 6, cr: 8, ml: 11, pl: 8.5, ph: [2, 5, 5, 3, 2], ang: [-30, -15, 0, 15, 30], ru: [8, 8], web: true }
  ];

  var PAIRS = [
    { a: L("Human arm", "ヒトの腕", "人類手臂", "사람의 팔"), b: L("Bat wing", "コウモリの翼", "蝙蝠翼", "박쥐의 날개"), ans: "H",
      why: L("Same bones (humerus, radius, ulna, carpals, metacarpals, phalanges) in the same order, inherited from a common ancestor, but used for different functions.", "同じ骨（上腕骨、橈骨、尺骨、手根骨、中手骨、指骨）が同じ順序で並び、共通祖先から受け継がれましたが、働きは異なります。", "相同的骨（肱骨、橈骨、尺骨、腕骨、掌骨、指骨）以相同次序排列，由共同祖先遺傳而來，但功能不同。", "같은 뼈(위팔뼈, 노뼈, 자뼈, 손목뼈, 손허리뼈, 손가락뼈)가 같은 순서로 배열되어 있으며 공통 조상에게서 물려받았지만 서로 다른 기능에 쓰인다.") },
    { a: L("Bird wing", "鳥の翼", "鳥翼", "새의 날개"), b: L("Insect wing", "昆虫の翅", "昆蟲翅", "곤충의 날개"), ans: "A",
      why: L("Both are used for flight (same function) but are built differently and did not come from a winged common ancestor. They evolved separately.", "どちらも飛ぶために使われます（同じ働き）が、構造が異なり、翼をもつ共通祖先から受け継いだものではありません。別々に進化しました。", "兩者都用於飛行（功能相同），但構造不同，也不是來自有翼的共同祖先。它們是各自獨立進化的。", "둘 다 날기(같은 기능)에 쓰이지만 구조가 다르고 날개가 있는 공통 조상에게서 유래하지 않았다. 따로 진화했다.") },
    { a: L("Human arm", "ヒトの腕", "人類手臂", "사람의 팔"), b: L("Whale flipper", "クジラの胸びれ", "鯨鰭肢", "고래의 지느러미"), ans: "H",
      why: L("Same pentadactyl bone pattern from a common ancestor, adapted for grasping and for swimming.", "共通祖先に由来する同じ五指性の肢の骨格パターンで、つかむ働きと泳ぐ働きに適応しています。", "來自共同祖先的相同五指型肢骨骼模式，分別適應抓握和游泳。", "공통 조상에게서 유래한 같은 오지형(pentadactyl) 뼈 배열이며, 잡기와 헤엄치기에 각각 적응했다.") },
    { a: L("Octopus eye", "タコの目", "章魚的眼", "문어의 눈"), b: L("Human eye", "ヒトの目", "人類的眼", "사람의 눈"), ans: "A",
      why: L("Both form images using a lens (same function), but octopuses and humans are in distant lineages and the eyes evolved independently: convergent evolution.", "どちらもレンズで像をつくります（同じ働き）が、タコとヒトは遠い系統で、目は別々に進化しました（収斂進化）。", "兩者都用晶狀體成像（功能相同），但章魚和人類屬於相距很遠的譜系，眼是各自獨立進化的（趨同進化）。", "둘 다 수정체로 상을 맺지만(같은 기능) 문어와 사람은 먼 계통에 속하며 눈은 독립적으로 진화했다: 수렴 진화(convergent evolution).") },
    { a: L("Cactus stem", "サボテンの茎", "仙人掌莖", "선인장 줄기"), b: L("Euphorbia stem", "トウダイグサ属の茎", "大戟屬植物莖", "대극속 식물의 줄기"), ans: "A",
      why: L("Both are fleshy, water-storing stems with spines in dry places (same function), but the plants are from different families on different continents. They evolved separately.", "どちらも乾燥地で水をためる多肉質のとげのある茎（同じ働き）ですが、別の科で別の大陸の植物で、別々に進化しました。", "兩者都是乾旱地區儲水、有刺的肉質莖（功能相同），但分屬不同科、不同大陸，是各自獨立進化的。", "둘 다 건조한 곳에서 가시가 있고 물을 저장하는 다육질 줄기이지만(같은 기능) 서로 다른 대륙의 서로 다른 과에 속하는 식물이다. 따로 진화했다.") }
  ];
  var BR = [
    { n: L("Kale", "ケール", "羽衣甘藍", "케일"), p: L("leaves", "葉", "葉", "잎"), a: -90 },
    { n: L("Cabbage", "キャベツ", "椰菜", "양배추"), p: L("terminal bud", "頂芽", "頂芽", "끝눈"), a: -30 },
    { n: L("Brussels sprouts", "芽キャベツ", "抱子甘藍", "방울양배추"), p: L("side (lateral) buds", "側芽", "側芽", "곁눈"), a: 30 },
    { n: L("Kohlrabi", "コールラビ", "球莖甘藍", "콜라비"), p: L("stem", "茎", "莖", "줄기"), a: 90 },
    { n: L("Broccoli", "ブロッコリー", "西蘭花", "브로콜리"), p: L("flower bud clusters", "花のつぼみの集まり", "花蕾簇", "꽃봉오리 덩어리"), a: 150 },
    { n: L("Cauliflower", "カリフラワー", "椰菜花", "콜리플라워"), p: L("flower bud clusters", "花のつぼみの集まり", "花蕾簇", "꽃봉오리 덩어리"), a: 210 }
  ];

  var T = {
    tab0: L("Pentadactyl limb", "五指性の肢", "五指型肢", "오지형 사지"), tab1: L("Homologous / analogous", "相同構造と相似構造", "同源結構與同功結構", "상동 / 상사"), tab2: L("Selective breeding", "選択的育種", "選擇性育種", "선택적 교배"),
    all: L("All bones", "すべて", "全部", "모든 뼈"),
    m0: L("The <b>pentadactyl limb</b> (five-digit limb) has the same bones in the same order in many vertebrates: humerus, radius and ulna, carpals, metacarpals, phalanges. Tap a bone group to compare it across all four.", "<b>五指性の肢 (pentadactyl limb)</b>は、多くの脊椎動物で同じ骨が同じ順序に並びます: 上腕骨、橈骨と尺骨、手根骨、中手骨、指骨。骨のグループをタップして4つを比べましょう。", "<b>五指型肢 (pentadactyl limb)</b>在許多脊椎動物中以相同次序排列相同的骨：肱骨、橈骨和尺骨、腕骨、掌骨、指骨。點選骨組別，比較四種肢。", "<b>오지형 사지(pentadactyl limb)</b>(손가락이 다섯 개인 사지)는 많은 척추동물에서 같은 뼈가 같은 순서로 배열되어 있다: 위팔뼈, 노뼈와 자뼈, 손목뼈, 손허리뼈, 손가락뼈. 뼈 무리를 눌러 네 가지 사지에서 비교하시오."),
    homo: L("Same bones, different functions: <b>homologous structures</b>. They come from a common ancestor, so they are evidence for evolution.", "同じ骨で働きが違う: <b>相同構造 (homologous structures)</b>。共通祖先に由来するので、進化の証拠です。", "骨相同而功能不同：<b>同源結構 (homologous structures)</b>。它們來自共同祖先，所以是進化的證據。", "같은 뼈, 다른 기능: <b>상동 구조(homologous structures)</b>. 공통 조상에게서 유래했으므로 진화의 증거이다."),
    ex0: L("Homologous structures (e.g. the pentadactyl limb): same basic bone pattern from a common ancestor, adapted to different functions.", "相同構造 (homologous structures) (例: 五指性の肢): 共通祖先に由来する同じ基本的な骨格で、働きは異なる。", "同源結構 (homologous structures)（例：五指型肢）：來自共同祖先的相同基本骨骼模式，適應不同功能。", "상동 구조(예: 오지형 사지): 공통 조상에게서 유래한 같은 기본 뼈 배열이며 서로 다른 기능에 적응했다."),
    ref0: L("Syllabus A4.1.4", "シラバス A4.1.4", "課程大綱 A4.1.4", "교육과정 A4.1.4"),
    hint1: L("Pick a pair, then decide.", "組を選んで判断しましょう。", "選一組，然後判斷。", "한 쌍을 고른 다음 판단하시오."),
    bH: L("Homologous", "相同構造 (homologous)", "同源結構 (homologous)", "상동"), bA: L("Analogous", "相似構造 (analogous)", "同功結構 (analogous)", "상사"),
    def: L("<b>Homologous</b>: same evolutionary origin, often different function. <b>Analogous</b>: same function, different evolutionary origin (convergent evolution).", "<b>相同構造 (homologous)</b>: 進化的な起源が同じで、働きは異なることが多い。<b>相似構造 (analogous)</b>: 働きが同じで、進化的な起源は異なる（収斂進化 (convergent evolution)）。", "<b>同源結構 (homologous)</b>：進化來源相同，功能往往不同。<b>同功結構 (analogous)</b>：功能相同，進化來源不同（趨同進化 (convergent evolution)）。", "<b>상동(homologous)</b>: 진화적 기원이 같고 기능은 대개 다르다. <b>상사(analogous)</b>: 기능은 같고 진화적 기원이 다르다(수렴 진화)."),
    right: L("Correct. ", "正解です。", "正確。", "정답이다. "), wrong: L("Not quite. ", "ちがいます。", "不正確。", "틀렸다. "),
    anc: L("common ancestor", "共通祖先", "共同祖先", "공통 조상"),
    present: L("has the structure", "構造をもつ", "具有該結構", "구조가 있음"), absent: L("lacks the structure", "構造をもたない", "沒有該結構", "구조가 없음"),
    inh: L("inherited", "受け継ぐ", "遺傳", "물려받음"), sep: L("evolved separately", "別々に進化", "各自進化", "따로 진화함"),
    ex1: L("Homologous: same origin, often different function. Analogous: same function, different origin (convergent evolution).", "相同構造 (homologous): 起源が同じで働きは異なることが多い。相似構造 (analogous): 働きが同じで起源は異なる（収斂進化 (convergent evolution)）。", "同源結構 (homologous)：來源相同，功能往往不同。同功結構 (analogous)：功能相同，來源不同（趨同進化 (convergent evolution)）。", "상동: 기원이 같고 기능은 대개 다르다. 상사: 기능은 같고 기원이 다르다(수렴 진화)."),
    ref1: L("Syllabus A4.1.4–5", "シラバス A4.1.4–5", "課程大綱 A4.1.4–5", "교육과정 A4.1.4–5"),
    wild: L("Wild cabbage", "野生のキャベツ", "野生甘藍", "야생 양배추"), wildS: L("Brassica oleracea", "Brassica oleracea", "Brassica oleracea", "Brassica oleracea"),
    m2: L("All these vegetables were bred from <b>one wild species</b>. Tap a vegetable to see which part people kept choosing.", "これらの野菜はすべて<b>1つの野生種</b>から育種されました。野菜をタップして、人がどの部分を選び続けたかを見ましょう。", "這些蔬菜全部由<b>同一個野生物種</b>培育而成。點選蔬菜，看看人們一直選擇哪個部分。", "이 채소들은 모두 <b>한 야생 종</b>에서 길러 냈다. 채소를 눌러 사람들이 어느 부분을 계속 골랐는지 확인하시오."),
    m2s: L("<b>%n</b>: people kept breeding from plants with the largest %p, over many generations.", "<b>%n</b>: 人は何世代にもわたり、%pが最も大きい個体を選んで交配させ続けました。", "<b>%n</b>：人們世世代代都挑選%p最大的植株來繁殖。", "<b>%n</b>: 사람들은 여러 세대에 걸쳐 다음 부분이 가장 큰 식물을 골라 계속 교배했다: %p."),
    m2c: L("Selective breeding makes large changes in a short time, so it shows how rapidly heritable change can happen.", "選択的育種は短い期間で大きな変化を生むので、遺伝する変化が速く起こりうることを示します。", "選擇性育種在短時間內造成很大變化，顯示可遺傳的改變可以多麼迅速。", "선택적 교배(selective breeding)는 짧은 시간에 큰 변화를 일으키므로 유전되는 변화가 얼마나 빠르게 일어날 수 있는지 보여 준다."),
    ex2: L("Selective breeding of domesticated species shows how rapidly heritable change can occur: evidence for evolution.", "家畜・栽培植物の選択的育種 (selective breeding) は、遺伝的な変化が速く起こることを示す進化の証拠。", "馴化動植物的選擇性育種 (selective breeding) 顯示可遺傳的改變可以很迅速：進化的證據。", "가축화된 종의 선택적 교배는 유전되는 변화가 얼마나 빠르게 일어날 수 있는지 보여 준다: 진화의 증거이다."),
    ref2: L("Syllabus A4.1.3", "シラバス A4.1.3", "課程大綱 A4.1.3", "교육과정 A4.1.3"),
    more: L("More detail", "くわしく", "更多資料", "자세히 보기"),
    md0: L("Pentadactyl means five digits. Some limbs have fewer digits or fused bones, but the same basic pattern can still be traced. How natural selection shapes such differences is covered in D4.1.", "pentadactylは「5本の指」の意味です。指が少ない、骨が融合しているなどの肢もありますが、同じ基本パターンをたどれます。自然選択がこうした違いをどう生むかはD4.1で学びます。", "pentadactyl指「五隻指」。有些肢的指較少或骨融合，但仍可追溯同一基本模式。自然選擇如何造成這些差異屬於D4.1。", "오지형은 손가락이 다섯 개라는 뜻이다. 일부 사지는 손가락이 더 적거나 뼈가 융합되어 있지만 같은 기본 배열을 여전히 찾아볼 수 있다. 자연 선택이 이러한 차이를 만드는 과정은 D4.1에서 다룬다."),
    md2: L("The same idea applies to domesticated animals, for example the many dog breeds compared with their wild ancestor. Variation between breeds or varieties, and between them and the wild species, shows how rapidly evolutionary change can occur.", "家畜でも同じです。たとえば多くの犬種と野生の祖先を比べます。品種どうし、また品種と野生種との間の違いは、進化的な変化が速く起こりうることを示します。", "馴養動物也一樣，例如把眾多犬種與其野生祖先比較。品種之間以及品種與野生物種之間的差異，顯示進化改變可以多麼迅速。", "같은 개념이 가축화된 동물에도 적용된다. 예를 들어 야생 조상과 비교한 여러 품종의 개가 있다. 품종 사이, 그리고 품종과 야생 종 사이의 변이는 진화적 변화가 얼마나 빠르게 일어날 수 있는지 보여 준다."),
    exam: L("What to remember for the exam", "試験でおぼえること", "考試要記住", "시험을 위해 기억할 것"),
    aria0: L("Four limbs with the same bones", "同じ骨をもつ4つの肢", "有相同骨骼的四種肢", "같은 뼈를 가진 네 가지 사지")
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function f1(x) { return Math.round(x * 10) / 10; }
  function ss(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function seg(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }
  function strip(o) { return o.replace(/ \(.*/, ""); }

  // ---- limbs -----------------------------------------------------------
  function bone(x1, y1, x2, y2, w, g, op) {
    return '<g class="bn" data-g="' + g + '" style="opacity:' + op + '"><line x1="' + f1(x1) + '" y1="' + f1(y1) + '" x2="' + f1(x2) + '" y2="' + f1(y2) + '" stroke="var(--surface)" stroke-width="' + f1(w + 2.4) + '" stroke-linecap="round"/><line x1="' + f1(x1) + '" y1="' + f1(y1) + '" x2="' + f1(x2) + '" y2="' + f1(y2) + '" stroke="' + GC[g] + '" stroke-width="' + f1(w) + '" stroke-linecap="round"/></g>';
  }
  function limb(ox, oy, sp, sel, t) {
    var op = function (g) { return sel == null || sel === g ? 1 : 0.16; };
    var s = '<g transform="translate(' + ox + " " + oy + ') scale(1.15)">', y0 = 56, x0 = 6;
    var x1 = x0 + sp.hl, x2 = x1 + sp.rl, cx = x2 + sp.cr + 2, tips = [];
    var web = "";
    // digits first (to get tips for the web)
    var digits = "";
    for (var d = 0; d < 5; d++) {
      var a = sp.ang[d] * Math.PI / 180, ml = sp.mls ? sp.mls[d] : sp.ml, px = cx, py = y0 + (sp.ang[d] > 0 ? 1 : (sp.ang[d] < 0 ? -1 : 0)) * 0;
      var ex = px + Math.cos(a) * ml, ey = py + Math.sin(a) * ml;
      digits += bone(px, py, ex, ey, 4, "M", op("M"));
      var n = sp.ph[d], pl = sp.pl * (sp.mls && d === 0 ? 0.6 : 1);
      for (var k = 0; k < n; k++) {
        var sx = ex + Math.cos(a) * 1.6, sy = ey + Math.sin(a) * 1.6, ex2 = sx + Math.cos(a) * (pl - 1.6), ey2 = sy + Math.sin(a) * (pl - 1.6);
        digits += bone(sx, sy, ex2, ey2, 3.2, "P", op("P")); ex = ex2; ey = ey2;
      }
      tips.push([ex, ey]);
    }
    if (sp.web) {
      var pts = [[x1 - 2, y0 - 6]].concat(tips.slice(1).map(function (q) { return [q[0] + 2, q[1]]; })).concat([[x1 + 6, y0 + 22]]);
      if (sp.web === true && sp.mls) web = '<polygon points="' + pts.map(function (q) { return f1(q[0]) + "," + f1(q[1]); }).join(" ") + '" fill="var(--accent-soft)" fill-opacity="0.55" stroke="var(--accent)" stroke-opacity="0.5" stroke-dasharray="3 3"/>';
      else web = '<polygon points="' + [[x0, y0 - 16], [x1, y0 - 18], [tips[0][0] + 4, tips[0][1] - 3], [tips[2][0] + 6, tips[2][1]], [tips[4][0] + 4, tips[4][1] + 3], [x1, y0 + 18], [x0, y0 + 14]].map(function (q) { return f1(q[0]) + "," + f1(q[1]); }).join(" ") + '" fill="var(--accent-soft)" fill-opacity="0.45" stroke="var(--accent)" stroke-opacity="0.5" stroke-dasharray="3 3"/>';
    }
    s += web;
    s += bone(x0, y0, x1, y0, sp.hw, "H", op("H"));
    s += bone(x1, y0 - sp.gap / 2, x2, y0 - sp.gap / 2, sp.ru[0], "RU", op("RU")) + bone(x1, y0 + sp.gap / 2 + 1, x2, y0 + sp.gap / 2 + 1, sp.ru[1], "RU", op("RU"));
    [[0, -3], [4, -4], [4, 3], [8, 0], [0, 3], [8, -6]].forEach(function (c) {
      s += '<g class="bn" data-g="C" style="opacity:' + op("C") + '"><circle cx="' + f1(x2 + 3 + c[0] * sp.cr / 8) + '" cy="' + f1(y0 + c[1] * sp.cr / 8 * 1.4) + '" r="' + f1(sp.cr / 3.2) + '" fill="' + GC.C + '" stroke="var(--surface)" stroke-width="1.2"/></g>';
    });
    s += digits + '</g>';
    s += '<text x="' + (ox + 100) + '" y="' + (oy + 140) + '" text-anchor="middle" style="font-weight:700;font-size:13px">' + t(sp.n) + '</text>';
    return s;
  }

  // ---- lineage tree ------------------------------------------------------
  function treeSvg(pair, verdict, tl, t) {
    var s = "", ax = 78, ay = 100, bx = 300, y1 = 46, y2 = 154;
    var gp = verdict ? ss(seg(tl, 0, 0.45)) : 1;
    function pt(x0, y0, x1, y1_, u) { return [x0 + (x1 - x0) * u, y0 + (y1_ - y0) * u]; }
    var e1 = pt(ax, ay, bx, y1, gp), e2 = pt(ax, ay, bx, y2, gp);
    s += '<line x1="' + ax + '" y1="' + ay + '" x2="' + f1(e1[0]) + '" y2="' + f1(e1[1]) + '" stroke="var(--ink-2)" stroke-width="3.5" stroke-linecap="round"/>';
    s += '<line x1="' + ax + '" y1="' + ay + '" x2="' + f1(e2[0]) + '" y2="' + f1(e2[1]) + '" stroke="var(--ink-2)" stroke-width="3.5" stroke-linecap="round"/>';
    s += '<circle cx="' + ax + '" cy="' + ay + '" r="6" fill="var(--ink)"/>';
    s += '<text x="' + ax + '" y="' + (ay + 24) + '" text-anchor="middle" style="font-weight:700">' + t(T.anc) + '</text>';
    s += '<text x="' + (bx + 12) + '" y="' + (y1 + 4) + '" style="font-weight:700">' + t(pair.a) + '</text><text x="' + (bx + 12) + '" y="' + (y2 + 4) + '" style="font-weight:700">' + t(pair.b) + '</text>';
    if (verdict) {
      var isH = pair.ans === "H", star = function (x, y, o, c) { return '<text x="' + f1(x) + '" y="' + f1(y + 6) + '" text-anchor="middle" style="font-size:22px;fill:' + c + ';opacity:' + f1(o) + '">★</text>'; };
      if (isH) {
        var o = ss(seg(tl, 0.05, 0.3));
        s += star(ax, ay - 14, o, "var(--accent)");
        s += '<text x="' + ax + '" y="' + (ay - 34) + '" text-anchor="middle" style="fill:var(--accent-ink);font-weight:700;opacity:' + f1(o) + '">' + t(T.present) + '</text>';
        var o2 = ss(seg(tl, 0.55, 0.8));
        s += star(bx - 10, y1 - 16, o2, "var(--accent)") + star(bx - 10, y2 + 16, o2, "var(--accent)");
        s += '<text x="190" y="' + f1(pt(ax, ay, bx, y1, 0.5)[1] - 12) + '" text-anchor="middle" style="fill:var(--accent-ink);font-weight:700;opacity:' + f1(o2) + '">' + t(T.inh) + '</text>';
      } else {
        s += '<text x="' + ax + '" y="' + (ay - 14) + '" text-anchor="middle" style="fill:var(--muted);font-weight:700;opacity:' + f1(ss(seg(tl, 0.05, 0.3))) + '">' + t(T.absent) + '</text>';
        var o3 = ss(seg(tl, 0.5, 0.8)), m1 = pt(ax, ay, bx, y1, 0.62), m2 = pt(ax, ay, bx, y2, 0.62);
        s += star(m1[0], m1[1] - 14, o3, "var(--theme-b)") + star(m2[0], m2[1] + 14, o3, "var(--theme-b)");
        s += '<text x="' + f1(m1[0]) + '" y="' + f1(m1[1] - 34) + '" text-anchor="middle" style="fill:var(--theme-b);font-weight:700;opacity:' + f1(o3) + '">' + t(T.sep) + '</text>';
        s += '<text x="' + f1(m2[0]) + '" y="' + f1(m2[1] + 42) + '" text-anchor="middle" style="fill:var(--theme-b);font-weight:700;opacity:' + f1(o3) + '">' + t(T.sep) + '</text>';
      }
    }
    return s;
  }

  // ---- brassica radial ---------------------------------------------------
  function brSvg(p, sel, t) {
    var s = "", cx = 180, cy = 125, rx = 112, ry = 84;
    BR.forEach(function (b, i) {
      var u = ss(seg(p, 0.05 + i * 0.1, 0.5 + i * 0.1)), ang = b.a * Math.PI / 180, nx = cx + Math.cos(ang) * rx, ny = cy + Math.sin(ang) * ry;
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + f1(cx + (nx - cx) * u) + '" y2="' + f1(cy + (ny - cy) * u) + '" stroke="var(--ink-2)" stroke-width="' + (sel === i ? 4 : 2.2) + '" stroke-linecap="round"/>';
    });
    s += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="46" ry="27" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>';
    s += '<text x="' + cx + '" y="' + (cy - 2) + '" text-anchor="middle" style="font-weight:800">' + t(T.wild) + '</text><text x="' + cx + '" y="' + (cy + 12) + '" text-anchor="middle" style="font-size:11px;font-style:italic">' + t(T.wildS) + '</text>';
    BR.forEach(function (b, i) {
      var u = ss(seg(p, 0.35 + i * 0.1, 0.7 + i * 0.1)); if (u < 0.02) return;
      var ang = b.a * Math.PI / 180, nx = cx + Math.cos(ang) * rx, ny = cy + Math.sin(ang) * ry, on = sel === i;
      s += '<g class="nd" data-i="' + i + '" tabindex="0" role="button" aria-label="' + t(b.n) + '" style="opacity:' + f1(u) + '"><rect x="' + f1(nx - 54) + '" y="' + f1(ny - 19) + '" width="108" height="38" rx="8" fill="' + (on ? "var(--accent)" : "var(--surface)") + '" stroke="' + (on ? "var(--accent)" : "var(--ink-2)") + '" stroke-width="2"/>';
      s += '<text x="' + f1(nx) + '" y="' + f1(ny - 3) + '" text-anchor="middle" style="font-weight:800;' + (on ? "fill:var(--on-accent)" : "") + '">' + t(b.n) + '</text><text x="' + f1(nx) + '" y="' + f1(ny + 12) + '" text-anchor="middle" style="font-size:11px;' + (on ? "fill:var(--on-accent)" : "fill:var(--ink-2)") + '">' + t(b.p) + '</text></g>';
    });
    return s;
  }

  IB.registerWidget("evolution-evidence", {
    title: L("Evidence for evolution", "進化の証拠", "進化的證據", "진화의 증거"),
    mount: function (el, ctx) {
      if (!document.getElementById(ID)) { var st = document.createElement("style"); st.id = ID; st.textContent = CSS; document.head.appendChild(st); }
      var t = ctx.t, opt = ctx.options || {};
      var tab = clamp(parseInt(opt.tab, 10) || 0, 0, 2), noMotion = reduced();
      var sel = null, pi = 0, verdict = null, tl = 1, bsel = -1, bp = 1;
      var raf = 0, last = 0, vis = true, io = null, dead = false, E = {};

      el.innerHTML = "";
      var tabs = document.createElement("div"); tabs.className = "wl-tabs"; tabs.setAttribute("role", "tablist"); el.appendChild(tabs);
      var wl = document.createElement("div"); wl.className = "wl"; el.appendChild(wl);
      var stage = document.createElement("div"); stage.className = "wl-stage"; wl.appendChild(stage);
      var panel = document.createElement("div"); panel.className = "wl-panel"; wl.appendChild(panel);
      var tabBtns = [T.tab0, T.tab1, T.tab2].map(function (lab, i) {
        var b = document.createElement("button"); b.type = "button"; b.setAttribute("role", "tab"); b.textContent = t(lab);
        b.addEventListener("click", function () { setTab(i); }); tabs.appendChild(b); return b;
      });
      function btn(label, fn, pressed) { var b = document.createElement("button"); b.type = "button"; b.className = "ee-b"; b.innerHTML = label; if (pressed !== undefined) b.setAttribute("aria-pressed", String(pressed)); b.addEventListener("click", fn); return b; }

      function setTab(i) {
        tab = i; E = {}; sel = null; verdict = null; bsel = -1;
        tabBtns.forEach(function (b, k) { b.setAttribute("aria-selected", k === i ? "true" : "false"); });
        stage.innerHTML = ""; panel.innerHTML = "";
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", i === 0 ? "0 0 400 292" : (i === 1 ? "0 0 400 200" : "0 0 360 250")); svg.style.maxWidth = i === 1 ? "520px" : "560px";
        svg.setAttribute("role", "img"); svg.setAttribute("aria-label", t([T.aria0, T.tab1, T.tab2][i]));
        stage.appendChild(svg); E.svg = svg;
        var rowB = document.createElement("div"); rowB.className = "ee-row"; panel.appendChild(rowB); E.row = rowB;
        var msg = document.createElement("div"); msg.className = "ee-msg"; msg.setAttribute("aria-live", "polite"); E.msg = msg;
        if (i === 0) {
          E.chips = ["H", "RU", "C", "M", "P"].map(function (g) { var b = btn(strip(t(GN[g])), function () { sel = sel === g ? null : g; draw(); }, false); b.setAttribute("data-g", g); b.style.borderLeftColor = GC[g]; rowB.appendChild(b); return b; });
          var ball = btn(t(T.all), function () { sel = null; draw(); }); rowB.appendChild(ball);
          svg.addEventListener("click", function (e) { var n = e.target.closest && e.target.closest("[data-g]"); if (n) { var g = n.getAttribute("data-g"); sel = sel === g ? null : g; draw(); } });
        } else if (i === 1) {
          var sl = document.createElement("select"); sl.className = "select ee-sel"; sl.setAttribute("aria-label", t(T.hint1));
          PAIRS.forEach(function (p, k) { var o = document.createElement("option"); o.value = k; o.textContent = strip(t(p.a)) + " / " + strip(t(p.b)); sl.appendChild(o); });
          sl.value = pi; sl.addEventListener("change", function () { pi = +sl.value; verdict = null; tl = 1; draw(); }); rowB.appendChild(sl); E.sel = sl;
          var vr = document.createElement("div"); vr.className = "ee-row"; panel.appendChild(vr);
          vr.appendChild(btn(t(T.bH), function () { decide("H"); })); vr.appendChild(btn(t(T.bA), function () { decide("A"); }));
        } else {
          bp = noMotion ? 1 : 0;
          svg.addEventListener("click", function (e) { var n = e.target.closest && e.target.closest("[data-i]"); if (n) { bsel = +n.getAttribute("data-i"); draw(); } });
          svg.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.getAttribute && e.target.getAttribute("data-i") != null) { e.preventDefault(); bsel = +e.target.getAttribute("data-i"); draw(); } });
        }
        panel.appendChild(msg);
        var ex = document.createElement("div"); ex.className = "wl-exam"; ex.innerHTML = "<strong>" + t(T.exam) + ":</strong> " + t([T.ex0, T.ex1, T.ex2][i]); panel.appendChild(ex);
        if (i !== 1) { var d = document.createElement("details"); d.innerHTML = "<summary>" + t(T.more) + "</summary><p>" + t(i === 0 ? T.md0 : T.md2) + "</p>"; panel.appendChild(d); }
        var cap = document.createElement("p"); cap.className = "ee-cap"; cap.textContent = t([T.ref0, T.ref1, T.ref2][i]); panel.appendChild(cap);
        draw(); if (i === 2) { bp = noMotion ? 1 : 0; kick(); }
      }
      function decide(v) { verdict = v; tl = noMotion ? 1 : 0; draw(); kick(); }

      function draw() {
        if (dead || !E.svg) return;
        if (tab === 0) {
          var s = "";
          LIMBS.forEach(function (sp, i) { s += limb((i % 2) * 200, Math.floor(i / 2) * 150, sp, sel, t); });
          E.svg.innerHTML = s;
          E.chips.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-g") === sel)); });
          E.msg.className = "ee-msg"; E.msg.innerHTML = sel ? t(GI[sel]) + "<br>" + t(T.homo) : t(T.m0);
        } else if (tab === 1) {
          var pr = PAIRS[pi];
          E.svg.innerHTML = treeSvg(pr, verdict, tl, t);
          if (!verdict) { E.msg.className = "ee-msg"; E.msg.innerHTML = t(T.def); }
          else { var ok = verdict === pr.ans; E.msg.className = "ee-msg " + (ok ? "ok" : "no"); E.msg.innerHTML = "<b>" + t(ok ? T.right : T.wrong) + "</b>" + t(pr.ans === "H" ? T.bH : T.bA).replace(/ \(.*/, "") + ". " + t(pr.why); }
        } else {
          E.svg.innerHTML = brSvg(bp, bsel, t);
          E.msg.className = "ee-msg";
          E.msg.innerHTML = bsel < 0 ? t(T.m2) : t(T.m2s).replace("%n", t(BR[bsel].n)).replace("%p", t(BR[bsel].p)) + "<br>" + t(T.m2c);
        }
      }
      function kick() { if (!raf && vis && !dead) { last = 0; raf = requestAnimationFrame(frame); } }
      function frame(ts) {
        raf = 0; if (dead || !vis) return;
        var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts;
        var go = false;
        if (tab === 1 && verdict && tl < 1) { tl = Math.min(1, tl + dt / 2.6); go = true; }
        if (tab === 2 && bp < 1) { bp = Math.min(1, bp + dt / 2.4); go = true; }
        draw(); if (go) raf = requestAnimationFrame(frame);
      }
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) kick(); }, { threshold: 0.05 });
        io.observe(el);
      }
      setTab(tab);
      return function () { dead = true; if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
    }
  });
})();
