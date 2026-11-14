/* Guided lab: Diversity & evolution (A3.2 cladistics, A4.1 evidence for evolution and speciation). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  id: "evolution",
  order: 6,
  theme: "A",
  topics: ["A3.2", "A4.1"],
  title: { en: "Diversity & evolution", ja: "多様性と進化", zh: "多樣性與進化" },
  intro: {
    en: "Eight steps: read and build cladograms (AHL), weigh the evidence for evolution, then follow how new species form. Steps marked AHL are for HL students only. Subtopics A3.2 and A4.1.",
    ja: "分岐図 (cladogram) の読み方と作り方 (AHL)、進化の証拠、新しい種ができる過程を、8つのステップで学びます。AHLと表示されたステップはHLの学習者向けです。サブトピックA3.2とA4.1です。",
    zh: "八個步驟：閱讀及建構支序圖 (AHL)、衡量進化的證據，再追蹤新物種如何形成。標示 AHL 的步驟只適用於 HL 學生。涵蓋子課題 A3.2 和 A4.1。"
  },
  steps: [
    {
      title: { en: "Reading a cladogram", ja: "分岐図 (cladogram) を読む", zh: "閱讀支序圖 (cladogram)" },
      ahl: true,
      refs: ["A3.2.4", "A3.2.7"],
      intro: {
        en: "<p>A cladogram is a branching diagram that shows evolutionary relationships. The root is the common ancestor of all the organisms. Each node is a branch point and represents a hypothetical common ancestor. Terminal branches end at the organisms. A clade is a common ancestor and all its descendants. Organisms that share a more recent common ancestor are more closely related.</p>",
        ja: "<p>分岐図は、進化的な類縁関係を示す枝分かれの図です。根 (root) は、すべての生物の共通祖先です。節 (node) は分岐点で、仮想上の共通祖先を表します。末端の枝 (terminal branch) は各生物につながります。クレード (clade) は、共通祖先とそのすべての子孫です。より新しい共通祖先を共有する生物ほど、近縁です。</p>",
        zh: "<p>支序圖是顯示進化關係的分支圖。根 (root) 是所有生物的共同祖先。每個節點 (node) 是一個分支點，代表一個假設的共同祖先。末端分支 (terminal branch) 通向各個生物。分支系 (clade) 是一個共同祖先及其所有後代。擁有較近期共同祖先的生物，關係較密切。</p>"
      },
      widget: "cladogram",
      options: { tab: 0 },
      task: {
        en: "Switch on Show terms and find the root, a node and a terminal branch. Tap nodes to see their clades. Which organisms form the clade that includes human and mouse but not lizard? Then open the Practice tab.",
        ja: "「用語を表示」をオンにして、根、節、末端の枝を見つけましょう。節をタップしてクレードを確かめます。ヒトとマウスを含み、トカゲを含まないクレードに入る生物はどれでしょう。そのあと「練習」タブを開きましょう。",
        zh: "開啟「顯示術語」，找出根、節點和末端分支。點選節點查看其分支系。哪些生物組成包含人和小鼠、但不包含蜥蜴的分支系？然後打開「練習」分頁。"
      }
    },
    {
      title: { en: "Building a cladogram from shared characters", ja: "共有形質から分岐図をつくる", zh: "由共有特徵建構支序圖" },
      ahl: true,
      refs: ["A3.2.4"],
      intro: {
        en: "<p>Organisms that share a characteristic inherited from a common ancestor belong to the same clade. Adding shared characters one at a time shows how a cladogram grows. Morphological traits can be used to place organisms in clades, but base sequences of genes and amino acid sequences of proteins give the most objective evidence.</p>",
        ja: "<p>共通祖先から受け継いだ形質を共有する生物は、同じクレードに入ります。共有形質を1つずつ加えると、分岐図が育っていく様子がわかります。形態の特徴でもクレードに分けられますが、遺伝子の塩基配列やタンパク質のアミノ酸配列が最も客観的な証拠になります。</p>",
        zh: "<p>共有從共同祖先遺傳而來的特徵的生物，屬於同一個分支系。逐一加入共有特徵，便可看到支序圖如何成形。形態特徵可用來把生物歸入分支系，但基因的鹼基序列和蛋白質的氨基酸序列提供最客觀的證據。</p>"
      },
      widget: "cladogram-build",
      options: { tab: 0 },
      task: {
        en: "Add the features one at a time: jaws, limbs with digits, amnion, hair. After each, say which organisms now form a new clade. Which organism branches off first, and why?",
        ja: "あご、指のある四肢、羊膜、毛の順に、特徴を1つずつ加えましょう。そのたびに、新しくできたクレードに入る生物を答えます。最初に分かれる生物はどれで、それはなぜでしょう。",
        zh: "依次逐項加入特徵：頜、有趾的四肢、羊膜、毛髮。每加入一項，說出哪些生物組成了新的分支系。哪種生物最先分支出去？為甚麼？"
      }
    },
    {
      title: { en: "Parsimony: choosing the best tree", ja: "最節約原理：最も妥当な系統樹を選ぶ", zh: "簡約法：選出最佳的樹" },
      ahl: true,
      refs: ["A3.2.6"],
      intro: {
        en: "<p>Cladograms can be built from the base sequences of genes or the amino acid sequences of proteins. Parsimony analysis selects the most probable cladogram: the one that accounts for the observed sequence differences with the smallest number of changes. Different criteria for judgement can lead to different hypotheses. The data here are made up, to show the method.</p>",
        ja: "<p>分岐図は、遺伝子の塩基配列やタンパク質のアミノ酸配列から作れます。最節約法 (parsimony) は、観察された配列の違いを最も少ない変化で説明できる分岐図を、最も確からしいものとして選びます。判断の基準が違えば、違う仮説になることもあります。ここのデータは、方法を示すために作ったものです。</p>",
        zh: "<p>支序圖可以根據基因的鹼基序列或蛋白質的氨基酸序列建構。簡約法 (parsimony) 選出最有可能的支序圖，即以最少的變化次數解釋所觀察到的序列差異。不同的判斷準則可能得出不同的假說。這裏的數據是為示範方法而虛構的。</p>"
      },
      widget: "cladogram-build",
      options: { tab: 1 },
      task: {
        en: "For each of the three trees, count the smallest number of base changes needed to explain the eight sites. Choose the tree that needs the fewest, then check. Try the other data set to see whether the best tree changes.",
        ja: "3つの系統樹それぞれについて、8か所の塩基の違いを説明するのに必要な最小の変化の数を数えましょう。変化が最も少ない樹を選び、確かめます。別のデータセットでも、最良の樹が変わるか試しましょう。",
        zh: "為三棵樹分別數出解釋這八個位點所需的最少鹼基變化次數。選出變化最少的樹，再驗證。試用另一組數據，看看最佳的樹會否改變。"
      }
    },
    {
      title: { en: "Evidence for evolution", ja: "進化の証拠", zh: "進化的證據" },
      ahl: false,
      refs: ["A4.1.3", "A4.1.4", "A4.1.5"],
      intro: {
        en: "<p>Selective breeding of domesticated animals and crop plants shows how rapidly heritable change can occur. Homologous structures, such as the pentadactyl limb, have the same basic pattern from a common ancestor, even when their functions differ. Analogous structures have the same function but different evolutionary origins. They arise by convergent evolution.</p>",
        ja: "<p>家畜や作物の選択的育種 (selective breeding) は、遺伝する変化がどれほど速く起こりうるかを示します。五指肢 (pentadactyl limb) のような相同構造 (homologous structures) は、働きが違っても、共通祖先に由来する同じ基本パターンをもちます。相似構造 (analogous structures) は、働きは同じでも進化的な起源が異なり、収れん進化 (convergent evolution) で生じます。</p>",
        zh: "<p>家畜和農作物的選擇性育種 (selective breeding) 顯示遺傳變化可以多麼迅速。同源結構 (homologous structures)，例如五趾肢 (pentadactyl limb)，即使功能不同，也具有源自共同祖先的相同基本模式。同功結構 (analogous structures) 功能相同，但進化起源不同，由趨同進化 (convergent evolution) 產生。</p>"
      },
      widget: "evolution-evidence",
      options: { tab: 0 },
      task: {
        en: "On the Pentadactyl limb tab, tap each bone group and compare the human arm, cat foreleg, bat wing and whale flipper. On the Homologous / analogous tab, classify each pair. On the Selective breeding tab, say which part of the wild cabbage people kept choosing for each vegetable.",
        ja: "「五指肢」タブで、各骨のグループをタップし、ヒトの腕、ネコの前肢、コウモリの翼、クジラの胸びれを比べましょう。「相同と相似」タブでは、各組を分類します。「選択的育種」タブでは、それぞれの野菜で、野生のキャベツ (cabbage) のどの部分を人が選び続けたかを答えましょう。",
        zh: "在「五指肢」分頁中，點選每組骨骼，比較人的手臂、貓的前肢、蝙蝠的翼和鯨的鰭肢。在「同源與同功」分頁中，把每一對分類。在「選擇性育種」分頁中，說出人們為每種蔬菜持續選擇了野生甘藍的哪一部分。"
      }
    },
    {
      title: { en: "Allopatric speciation", ja: "異所的種分化 (allopatric speciation)", zh: "異域物種形成 (allopatric speciation)" },
      ahl: false,
      refs: ["A4.1.6", "A4.1.7"],
      intro: {
        en: "<p>Speciation is the splitting of one species into two or more. It needs reproductive isolation: no gene flow between the populations. Geographical isolation can achieve this, for example the Congo River separating bonobos from common chimpanzees. Differential selection then makes the gene pools diverge, usually gradually. Gradual change within one species is not speciation.</p>",
        ja: "<p>種分化 (speciation) とは、1つの種が2つ以上に分かれることです。そのためには、集団間に遺伝子の流れがない生殖的隔離 (reproductive isolation) が必要です。地理的隔離はそれを実現でき、例としてコンゴ川がボノボとチンパンジーを隔てています。そのあと分化的選択 (differential selection) によって遺伝子プールが分かれていき、ふつうは徐々に進みます。1つの種の中での段階的な変化は種分化ではありません。</p>",
        zh: "<p>物種形成 (speciation) 是一個物種分裂成兩個或以上的物種，需要有生殖隔離 (reproductive isolation)，即群體之間沒有基因流動。地理隔離可以做到這一點，例如剛果河把倭黑猩猩與黑猩猩分隔。其後差異選擇 (differential selection) 令基因庫分歧，通常是逐漸發生的。同一物種內的逐步變化並不是物種形成。</p>"
      },
      widget: "speciation-allopatric",
      options: {},
      task: {
        en: "Step through the four stages. At which stage does gene flow stop? What makes the two gene pools diverge? Why is the final stage described as two species?",
        ja: "4つの段階を順に見ましょう。遺伝子の流れが止まるのはどの段階でしょう。2つの遺伝子プールが分かれていくのは何のためでしょう。最後の段階が2つの種と言えるのはなぜでしょう。",
        zh: "逐步查看四個階段。基因流動在哪個階段停止？是甚麼令兩個基因庫分歧？為何最後階段可稱為兩個物種？"
      }
    },
    {
      title: { en: "Sympatric and allopatric speciation compared", ja: "同所的種分化と異所的種分化の比較", zh: "同域與異域物種形成的比較" },
      ahl: true,
      refs: ["A4.1.8"],
      intro: {
        en: "<p>In allopatric speciation, populations are isolated in different places. In sympatric speciation, the populations live in the same area, so there is no geographical barrier. In both, reproductive isolation stops gene flow. The isolation can be geographic, behavioural (such as different courtship songs) or temporal (such as different flowering times).</p>",
        ja: "<p>異所的種分化では、集団が別々の場所に隔離されます。同所的種分化 (sympatric speciation) では、集団が同じ地域に住むので、地理的な障壁はありません。どちらも、生殖的隔離が遺伝子の流れを止めます。隔離は、地理的、行動的 (求愛の鳴き声の違いなど)、時間的 (開花時期の違いなど) のいずれかです。</p>",
        zh: "<p>在異域物種形成中，群體被隔離在不同的地方。在同域物種形成 (sympatric speciation) 中，群體住在同一地區，沒有地理屏障。兩者都靠生殖隔離來阻止基因流動。隔離可以是地理的、行為的（例如求偶叫聲不同）或時間的（例如開花時間不同）。</p>"
      },
      widget: "speciation",
      options: { tab: 1 },
      task: {
        en: "Step through the behavioural scenario, then open the temporal one. In each, state what stops gene flow. Compare with the allopatric tab: what is the key difference, and what is the same?",
        ja: "まず行動的な場面を順に見て、次に時間的な場面を開きましょう。それぞれで何が遺伝子の流れを止めているか答えます。「異所的」タブと比べて、決定的な違いと共通点は何でしょう。",
        zh: "先逐步查看行為隔離的情境，再打開時間隔離的情境。在每個情境中，說出是甚麼阻止了基因流動。與「異域」分頁比較：主要分別是甚麼？相同點又是甚麼？"
      }
    },
    {
      title: { en: "Adaptive radiation", ja: "適応放散 (adaptive radiation)", zh: "適應輻射 (adaptive radiation)" },
      ahl: true,
      refs: ["A4.1.9"],
      intro: {
        en: "<p>Adaptive radiation happens when an ancestral species gives rise to many new species, each adapted to a different niche. It is most likely where there are vacant niches, such as on a newly formed island. Closely related species can then coexist without competing, which increases biodiversity.</p>",
        ja: "<p>適応放散は、1つの祖先種から多くの新しい種が生じ、それぞれが異なるニッチ (niche) に適応するときに起こります。新しくできた島のように、空いたニッチがある場所で最も起こりやすくなります。近縁な種が競争せずに共存でき、生物多様性が高まります。</p>",
        zh: "<p>當一個祖先物種產生許多新物種、各自適應不同的生態位 (niche) 時，便出現適應輻射。在有空缺生態位的地方，例如新形成的島嶼，最容易發生。近緣物種於是可以共存而不互相競爭，生物多樣性因此增加。</p>"
      },
      widget: "speciation-radiation",
      options: {},
      task: {
        en: "Step through the four stages. Explain why the island population grows quickly at first, and why the new species can coexist without competing.",
        ja: "4つの段階を順に見ましょう。島の個体群が最初に急速に増える理由と、新しい種が競争せずに共存できる理由を説明しましょう。",
        zh: "逐步查看四個階段。解釋為何島上的群體起初增長迅速，以及為何新物種能共存而不互相競爭。"
      }
    },
    {
      title: { en: "Abrupt speciation by polyploidy", ja: "倍数性による急激な種分化", zh: "多倍體引致的突發物種形成" },
      ahl: true,
      refs: ["A4.1.10", "A4.1.11"],
      intro: {
        en: "<p>In plants, a new species can form abruptly by hybridization and polyploidy. A hybrid of two species is usually sterile, because its chromosomes cannot pair in meiosis. If its chromosome number doubles, the chromosomes can pair, so it becomes fertile. It is a polyploid, with more than two sets of chromosomes. It is reproductively isolated from its parents at once. Knotweed (<em>Persicaria</em>) species formed in this way.</p>",
        ja: "<p>植物では、雑種形成 (hybridization) と倍数性 (polyploidy) によって、新しい種が急に生じることがあります。2種の雑種は、染色体が減数分裂で対合できないため、ふつう不稔です。染色体数が倍になると対合できるようになり、稔性が回復します。これが3組以上の染色体をもつ倍数体 (polyploid) です。親の種とはただちに生殖的に隔離されます。タデ属 (<em>Persicaria</em>) の種はこのようにして生じました。</p>",
        zh: "<p>在植物中，新物種可以通過雜交 (hybridization) 和多倍體 (polyploidy) 突然形成。兩個物種的雜種通常不育，因為它的染色體在減數分裂時不能配對。如果染色體數目加倍，染色體便可配對，雜種就變得可育。這是多倍體 (polyploid)，擁有多於兩套染色體，並立即與親本物種產生生殖隔離。蓼屬 (<em>Persicaria</em>) 的許多物種就是這樣形成的。</p>"
      },
      widget: "speciation-poly",
      options: {},
      task: {
        en: "Step through the four stages. Explain why the hybrid is sterile, what restores fertility, and why the polyploid is a new species straight away. The chromosome numbers are simplified, illustrative values.",
        ja: "4つの段階を順に見ましょう。雑種が不稔である理由、稔性を回復させるもの、倍数体がただちに新しい種といえる理由を説明しましょう。染色体の数は、説明用に単純化した値です。",
        zh: "逐步查看四個階段。解釋雜種為何不育、是甚麼令它恢復可育，以及為何多倍體立即成為新物種。染色體數目是簡化的示意數值。"
      }
    }
  ]
});
