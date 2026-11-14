/* Guided lab: Inside cells (A2.2 cell structure, B2.3 cell size and SA:V). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  id: "cells",
  order: 3,
  theme: "AB",
  topics: ["A2.2", "B2.3"],
  title: { en: "Inside cells", ja: "細胞の中", zh: "細胞內部" },
  intro: {
    en: "Seven steps: measure cells under the microscope, compare prokaryote, animal, plant and fungal cells, meet some atypical cells, then see why cell size is limited. Subtopics A2.2 and B2.3.",
    ja: "7つのステップで、顕微鏡で細胞の大きさを測り、原核細胞・動物細胞・植物細胞・菌類の細胞を比べ、変わった細胞を知り、細胞の大きさが制限される理由を学びます。サブトピックA2.2とB2.3です。",
    zh: "七個步驟：在顯微鏡下量度細胞、比較原核、動物、植物和真菌細胞、認識一些非典型細胞，再了解為何細胞大小受到限制。涵蓋子課題 A2.2 和 B2.3。"
  },
  steps: [
    {
      title: { en: "Magnification: image size and actual size", ja: "倍率：像の大きさと実際の大きさ", zh: "放大率：影像大小與實際大小" },
      ahl: false,
      refs: ["A2.2.2"],
      intro: {
        en: "<p>A microscope image is larger than the real object. Magnification = image size &divide; actual size. Put both sizes in the same unit before you divide (1 mm = 1000 &micro;m; 1 &micro;m = 1000 nm). The same equation can be rearranged to find the actual size or the image size.</p>",
        ja: "<p>顕微鏡の像は実物より大きく見えます。倍率 (magnification) ＝ 像の大きさ ÷ 実際の大きさ です。割る前に、両方を同じ単位にそろえます (1 mm＝1000 &micro;m、1 &micro;m＝1000 nm)。同じ式を変形すれば、実際の大きさや像の大きさも求められます。</p>",
        zh: "<p>顯微鏡下的影像比實物大。放大率 (magnification) ＝ 影像大小 ÷ 實際大小。相除之前，先把兩個長度換成相同單位 (1 mm＝1000 &micro;m；1 &micro;m＝1000 nm)。同一條公式也可以變換，用來求實際大小或影像大小。</p>"
      },
      widget: "magnification",
      options: { tab: 0 },
      task: {
        en: "The calculator starts with an image of 36 mm and an actual size of 12 &micro;m. Work out the magnification yourself before you read the answer. Then change the Find option to calculate an actual size instead.",
        ja: "計算機は、像が36 mm、実際の大きさが12 &micro;mの状態で始まります。答えを見る前に、倍率を自分で計算しましょう。次に「求めるもの」を切り替えて、実際の大きさを求めてみましょう。",
        zh: "計算器一開始是影像 36 mm、實際大小 12 &micro;m。先自己算出放大率，再看答案。然後把「求」的選項改為求實際大小。"
      }
    },
    {
      title: { en: "Using a scale bar", ja: "スケールバーを使う", zh: "使用比例尺" },
      ahl: false,
      refs: ["A2.2.2"],
      intro: {
        en: "<p>A scale bar on a micrograph shows a real length. In an exam, measure the bar and the structure with a ruler, in the same unit. Magnification = measured bar length &divide; the real length it stands for. Then actual size = measured length of the structure &divide; magnification.</p>",
        ja: "<p>顕微鏡写真のスケールバー (scale bar) は、実際の長さを示します。試験では、バーと構造を定規で同じ単位で測ります。倍率 ＝ 測ったバーの長さ ÷ バーが表す実際の長さ。そのあと、実際の大きさ ＝ 測った構造の長さ ÷ 倍率 で求めます。</p>",
        zh: "<p>顯微圖片上的比例尺 (scale bar) 代表一段真實長度。考試時，用直尺以相同單位量度比例尺和結構。放大率 ＝ 比例尺量得的長度 ÷ 它所代表的真實長度。然後，實際大小 ＝ 結構量得的長度 ÷ 放大率。</p>"
      },
      widget: "magnification",
      options: { tab: 1 },
      task: {
        en: "Work out the magnification and the actual size of the structure, then compare with the working. Next change the label of the bar from 5 &micro;m to 1 &micro;m without moving the sliders. Predict whether the magnification rises or falls, then check.",
        ja: "倍率と構造の実際の大きさを計算し、解き方と見比べましょう。次に、スライダーは動かさずにバーの表示を5 &micro;mから1 &micro;mに変えます。倍率が上がるか下がるか予想してから確かめましょう。",
        zh: "算出放大率和結構的實際大小，再與演算過程對照。然後在不移動滑桿的情況下，把比例尺標示由 5 &micro;m 改為 1 &micro;m。先預測放大率會上升還是下降，再驗證。"
      }
    },
    {
      title: { en: "The prokaryote cell", ja: "原核細胞 (prokaryote cell)", zh: "原核細胞 (prokaryote cell)" },
      ahl: false,
      refs: ["A2.2.4", "A2.2.5"],
      intro: {
        en: "<p>All cells have DNA as genetic material, a cytoplasm that is mostly water, and a plasma membrane made of lipids. A prokaryote cell, such as the Gram-positive bacterium Bacillus, also has a cell wall, naked DNA in a loop and 70S ribosomes. It has no nucleus and no membrane-bound organelles.</p>",
        ja: "<p>すべての細胞は、遺伝物質としてのDNA、主に水からなる細胞質、脂質でできた細胞膜をもちます。グラム陽性菌のバチルス (Bacillus) のような原核細胞には、さらに細胞壁 (cell wall)、環状のむき出しのDNA (naked DNA)、70Sリボソームがあります。核も膜で囲まれた細胞小器官もありません。</p>",
        zh: "<p>所有細胞都以 DNA 為遺傳物質，細胞質主要是水，並有由脂質構成的質膜。原核細胞（例如革蘭氏陽性菌芽孢桿菌 Bacillus）還有細胞壁 (cell wall)、環狀裸 DNA (naked DNA) 和 70S 核糖體。它沒有細胞核，也沒有膜包被的細胞器。</p>"
      },
      widget: "cell-compare-pro",
      options: {},
      task: {
        en: "Tap the cell wall, the naked DNA loop and the ribosomes. State two differences between the DNA and ribosomes of this cell and those of a eukaryote cell.",
        ja: "細胞壁、環状のむき出しのDNA、リボソームをタップしましょう。この細胞のDNAとリボソームが真核細胞のものとどう違うか、2点答えましょう。",
        zh: "點選細胞壁、環狀裸 DNA 和核糖體。說出這種細胞的 DNA 和核糖體與真核細胞的兩項分別。"
      }
    },
    {
      title: { en: "Animal, plant and fungal cells compared", ja: "動物・植物・菌類の細胞の比較", zh: "動物、植物與真菌細胞的比較" },
      ahl: false,
      refs: ["A2.2.6", "A2.2.8"],
      intro: {
        en: "<p>Eukaryote cells have a nucleus with chromosomes of DNA bound to histones, 80S ribosomes, membrane-bound organelles and a cytoskeleton. Animal, plant and fungal cells differ in whether they have a cell wall and what it is made of, the size of their vacuoles, chloroplasts and other plastids, and centrioles, cilia and flagella.</p>",
        ja: "<p>真核細胞は、ヒストンと結合したDNAからなる染色体をもつ核、80Sリボソーム、膜で囲まれた細胞小器官、細胞骨格をもちます。動物細胞・植物細胞・菌類の細胞は、細胞壁の有無とその成分、液胞の大きさ、葉緑体などの色素体、中心小体・繊毛・べん毛の有無で異なります。</p>",
        zh: "<p>真核細胞有細胞核（內有與組蛋白結合的 DNA 所組成的染色體）、80S 核糖體、膜包被的細胞器和細胞骨架。動物、植物和真菌細胞的分別，在於有沒有細胞壁及其成分、液泡的大小、有沒有葉綠體和其他質體，以及有沒有中心粒、纖毛和鞭毛。</p>"
      },
      widget: "cell-compare",
      options: { tab: 1 },
      task: {
        en: "In the table, find three features that plant cells have and animal cells lack. Then state what the cell walls of plant cells and of fungal cells are made of. Switch to the Cell diagram tab, choose Plant cell and tap each structure.",
        ja: "表で、植物細胞にあって動物細胞にない特徴を3つ見つけましょう。次に、植物細胞と菌類の細胞壁の成分をそれぞれ答えましょう。最後に「細胞の図」タブに切り替えて植物細胞を選び、各構造をタップしましょう。",
        zh: "在表中找出植物細胞有而動物細胞沒有的三項特徵。然後說出植物細胞和真菌細胞的細胞壁各由甚麼構成。最後切換到「細胞圖」分頁，選擇植物細胞，再點選各個結構。"
      }
    },
    {
      title: { en: "Atypical cells and their nuclei", ja: "変わった細胞と核の数", zh: "非典型細胞與細胞核數目" },
      ahl: false,
      refs: ["A2.2.9"],
      intro: {
        en: "<p>Most eukaryote cells have one nucleus. Some have a different number. An aseptate fungal hypha has no cross-walls, so many nuclei share one cytoplasm. A skeletal muscle fibre also has many nuclei. A mature red blood cell (in mammals) and a phloem sieve tube element have none.</p>",
        ja: "<p>ほとんどの真核細胞は核を1つもちますが、数が違う細胞もあります。隔壁のない菌糸 (aseptate fungal hypha) は仕切りがないので、多数の核が一つの細胞質を共有します。骨格筋 (skeletal muscle) の筋繊維にも多数の核があります。成熟した哺乳類の赤血球 (red blood cell) と師管要素 (phloem sieve tube element) には核がありません。</p>",
        zh: "<p>大多數真核細胞有一個細胞核，但有些細胞的數目不同。無隔真菌菌絲 (aseptate fungal hypha) 沒有橫壁，所以許多細胞核共用一個細胞質。骨骼肌纖維 (skeletal muscle fibre) 也有許多細胞核。成熟的哺乳動物紅血球 (red blood cell) 和篩管分子 (phloem sieve tube element) 則沒有細胞核。</p>"
      },
      widget: "cell-compare-atypical",
      options: {},
      task: {
        en: "Tap each of the four cell types and record its number of nuclei. Which two have many nuclei and which two have none? Suggest one advantage of having no nucleus in a red blood cell.",
        ja: "4種類の細胞をそれぞれタップして、核の数を記録しましょう。核が多数あるのはどの2つで、核がないのはどの2つでしょう。赤血球に核がないことの利点を1つ考えましょう。",
        zh: "逐一點選四種細胞，記錄其細胞核數目。哪兩種有多個細胞核？哪兩種沒有？試提出紅血球沒有細胞核的一項好處。"
      }
    },
    {
      title: { en: "Surface area-to-volume ratio of a cube", ja: "立方体の表面積と体積の比", zh: "立方體的表面積與體積比" },
      ahl: false,
      refs: ["B2.3.6"],
      intro: {
        en: "<p>A cell takes in materials and loses waste across its surface, but its need for materials depends on its volume. For a cube, surface area = 6 &times; l&sup2; and volume = l&sup3;, so SA:V = 6 &divide; l. If the side doubles, the area rises &times;4 but the volume &times;8, so SA:V halves. A cube is a simple model, but scale factors work the same way in real cells.</p>",
        ja: "<p>細胞は表面を通して物質を取り込み、老廃物を出しますが、必要な物質の量は体積で決まります。立方体では、表面積＝6 &times; l&sup2;、体積＝l&sup3;なので、表面積と体積の比 (SA:V) ＝ 6 ÷ l です。一辺が2倍になると、表面積は4倍、体積は8倍になり、SA:Vは半分になります。立方体は単純なモデルですが、実際の細胞でも拡大率の関係は同じです。</p>",
        zh: "<p>細胞通過表面攝取物質和排出廢物，但它所需的物質量取決於體積。對立方體而言，表面積＝6 &times; l&sup2;，體積＝l&sup3;，所以表面積與體積比 (SA:V)＝6 ÷ l。邊長加倍時，表面積增至 4 倍，體積增至 8 倍，SA:V 減半。立方體是簡單的模型，但真實細胞中的比例關係也是一樣。</p>"
      },
      widget: "sav-ratio",
      options: { tab: 0 },
      task: {
        en: "Press Back to 1 &micro;m and write down the SA:V of the 1 &micro;m cube. Predict the SA:V after doubling the side once and then twice, then press Double the side to check your predictions.",
        ja: "「1 µmに戻す」を押し、1 &micro;mの立方体のSA:Vを書きとめましょう。一辺を1回、次にもう1回2倍にしたときのSA:Vを予想し、「辺を2倍にする」を押して確かめましょう。",
        zh: "按「回到 1 µm」，寫下 1 &micro;m 立方體的 SA:V。先預測邊長加倍一次和兩次後的 SA:V，再按「邊長加倍」驗證。"
      }
    },
    {
      title: { en: "Why cells stay small", ja: "細胞が小さい理由", zh: "細胞為何保持細小" },
      ahl: false,
      refs: ["B2.3.6"],
      intro: {
        en: "<p>The exchange a cell can manage depends on its surface area. The exchange it needs depends on its volume. As a cell grows, volume rises faster than surface area, so SA:V falls and supply may no longer meet need. This limits cell size, and it is one reason why large organisms need special exchange surfaces (B3.1.1).</p>",
        ja: "<p>細胞が行える物質交換の量は表面積で決まり、必要な交換の量は体積で決まります。細胞が大きくなると、体積は表面積よりも速く増えるので、SA:Vが小さくなり、供給が必要に追いつかなくなることがあります。これが細胞の大きさを制限し、大きな生物に特別な交換面が必要な理由のひとつです (B3.1.1)。</p>",
        zh: "<p>細胞能夠進行的交換量取決於表面積，而它所需的交換量取決於體積。細胞長大時，體積增加得比表面積快，所以 SA:V 下降，供應可能追不上需求。這限制了細胞的大小，也是大型生物需要特別交換表面的原因之一 (B3.1.1)。</p>"
      },
      widget: "sav-ratio",
      options: { tab: 2 },
      task: {
        en: "Drag the side length from 1 &micro;m up to 10 &micro;m and watch the two bars. Which grows faster, the exchange possible or the exchange needed? Use this to explain why a very large cell would struggle to survive.",
        ja: "一辺の長さを1 &micro;mから10 &micro;mまで動かして、2本のバーを見ましょう。可能な交換量と必要な交換量では、どちらが速く増えるでしょう。それをもとに、非常に大きな細胞が生きにくい理由を説明しましょう。",
        zh: "把邊長由 1 &micro;m 拖到 10 &micro;m，觀察兩條長條。可能的交換量和所需的交換量，哪個增長得較快？以此解釋為何極大的細胞難以生存。"
      }
    }
  ]
});
