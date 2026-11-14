/* Guided lab: Molecules of life (A1.1 water, A1.2 nucleic acids, B1.1 carbohydrates and lipids). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  id: "molecules",
  order: 2,
  theme: "AB",
  topics: ["A1.1", "A1.2", "B1.1"],
  title: { en: "Molecules of life", ja: "生命をつくる分子", zh: "生命的分子" },
  intro: {
    en: "Eight steps through water, DNA, carbohydrates and lipids. Each step has one interactive and a short task. Work in order, or jump to the molecule you need. Subtopics A1.1, A1.2 and B1.1.",
    ja: "水、DNA、炭水化物、脂質を8つのステップで学びます。各ステップにはインタラクティブとひとつの課題があります。順番に進んでも、必要な分子から始めても構いません。サブトピックA1.1、A1.2、B1.1です。",
    zh: "以八個步驟認識水、DNA、碳水化合物和脂質。每個步驟有一個互動內容和一項短任務。可依次進行，也可直接跳到你需要的分子。涵蓋子課題 A1.1、A1.2 和 B1.1。"
  },
  steps: [
    {
      title: { en: "Water: polarity and hydrogen bonds", ja: "水：極性と水素結合 (hydrogen bond)", zh: "水：極性與氫鍵 (hydrogen bond)" },
      ahl: false,
      refs: ["A1.1.2"],
      intro: {
        en: "<p>In a water molecule, oxygen pulls the shared electrons more strongly than hydrogen does. The covalent bonds are polar: oxygen is slightly negative (&delta;&minus;) and each hydrogen is slightly positive (&delta;+). The &delta;+ hydrogen of one molecule is attracted to the &delta;&minus; oxygen of another. This attraction is a hydrogen bond. Each one is weak, but there are very many.</p>",
        ja: "<p>水分子では、酸素のほうが水素よりも共有電子対を強く引きつけます。そのため共有結合には極性 (polar) があり、酸素はわずかに負 (&delta;&minus;)、各水素はわずかに正 (&delta;+) になります。ある分子の&delta;+の水素は、別の分子の&delta;&minus;の酸素に引きつけられます。この引力が水素結合 (hydrogen bond) です。1本1本は弱いのですが、数がとても多くなります。</p>",
        zh: "<p>在水分子中，氧原子吸引共用電子的力比氫原子強，所以共價鍵帶有極性 (polar)：氧帶輕微負電 (&delta;&minus;)，每個氫帶輕微正電 (&delta;+)。一個分子的 &delta;+ 氫會被另一個分子的 &delta;&minus; 氧吸引，這種吸引力就是氫鍵 (hydrogen bond)。每個氫鍵都很弱，但數量極多。</p>"
      },
      widget: "water-hbond",
      options: { tab: 0 },
      task: {
        en: "Switch the partial charges and the hydrogen bonds on and off. Say which two atoms a hydrogen bond joins. Then draw two water molecules with &delta;+ and &delta;&minus; marked and one hydrogen bond between them.",
        ja: "部分電荷と水素結合をオン・オフして見ましょう。水素結合はどの2つの原子の間にできるか答えます。次に、&delta;+と&delta;&minus;を書き入れた水分子2つと、その間の水素結合1本を描いてみましょう。",
        zh: "開啟及關閉部分電荷和氫鍵。說出氫鍵連接哪兩種原子。然後畫出兩個水分子，標明 &delta;+ 和 &delta;&minus;，並畫出它們之間的一個氫鍵。"
      }
    },
    {
      title: { en: "Water: cohesion and adhesion", ja: "水：凝集力と付着力", zh: "水：內聚力與附著力" },
      ahl: false,
      refs: ["A1.1.3", "A1.1.4"],
      intro: {
        en: "<p>Cohesion is the attraction between water molecules, caused by hydrogen bonds. It lets water be pulled up xylem vessels in an unbroken column under tension. It also gives water surfaces surface tension, which small animals use as a habitat. Adhesion is the attraction of water to polar or charged surfaces, such as cell walls and soil particles. It causes capillary action.</p>",
        ja: "<p>凝集力 (cohesion) は水素結合による水分子どうしの引き合いです。これにより、水は張力を受けながら途切れない柱となって木部 (xylem) の道管を引き上げられます。水面には表面張力 (surface tension) も生じ、小さな動物が生活の場として利用します。付着力 (adhesion) は、細胞壁や土の粒子のような極性または電荷をもつ表面に水が引きつけられる力で、毛細管現象 (capillary action) を起こします。</p>",
        zh: "<p>內聚力 (cohesion) 是水分子之間由氫鍵造成的吸引力，使水能在張力下以不斷開的水柱沿木質部 (xylem) 導管上升，也使水面產生表面張力 (surface tension)，讓細小動物以水面為棲息處。附著力 (adhesion) 是水被極性或帶電表面（例如細胞壁和土壤顆粒）吸引的力，會引起毛細作用 (capillary action)。</p>"
      },
      widget: "water-hbond",
      options: { tab: 1 },
      task: {
        en: "In the xylem view, say what pulls the water up and what keeps the column from breaking. Then open the Adhesion tab and choose Capillary rise: explain why water climbs a narrow tube.",
        ja: "木部の図で、水を引き上げているものと、水の柱が切れないようにしているものを答えましょう。次に「付着力」タブを開いて「毛細管現象」を選び、水が細い管を上る理由を説明しましょう。",
        zh: "在木質部圖中，說出是甚麼把水拉上去，又是甚麼使水柱不會斷開。然後打開「附著力」分頁，選擇「毛細管作用」，解釋水為何會沿細管上升。"
      }
    },
    {
      title: { en: "Water: the universal solvent", ja: "水：溶媒としての働き", zh: "水：溶劑" },
      ahl: false,
      refs: ["A1.1.5"],
      intro: {
        en: "<p>Water molecules are attracted to ions and to polar molecules, so these hydrophilic substances dissolve. Water molecules surround each dissolved particle and keep it apart from the others. Non-polar, hydrophobic substances such as oil do not dissolve. Most enzymes work in aqueous solution, and water carries dissolved substances in blood and in plant sap.</p>",
        ja: "<p>水分子はイオンや極性分子に引きつけられるので、これらの親水性 (hydrophilic) の物質は水に溶けます。水分子は溶けた粒子をひとつずつ取り囲み、互いに離しておきます。油のような無極性で疎水性 (hydrophobic) の物質は溶けません。ほとんどの酵素は水溶液中で働き、水は血液や植物の師管液の中で溶けた物質を運びます。</p>",
        zh: "<p>水分子會被離子和極性分子吸引，所以這些親水 (hydrophilic) 物質能夠溶解。水分子包圍每個溶解的粒子，使它們彼此分開。油等非極性的疏水 (hydrophobic) 物質則不能溶解。大多數酶在水溶液中發揮作用，而水也在血液和植物汁液中運載溶解的物質。</p>"
      },
      widget: "water-hbond",
      options: { tab: 3 },
      task: {
        en: "Before you press anything, predict what happens to salt, glucose and oil placed in water. Then test each one. Explain why oil stays separate.",
        ja: "何も押す前に、塩、グルコース、油を水に入れたらどうなるか予想しましょう。そのあと1つずつ試し、油が別になる理由を説明しましょう。",
        zh: "按任何按鈕之前，先預測鹽、葡萄糖和油放進水中會怎樣。然後逐一測試，並解釋油為何會分開。"
      }
    },
    {
      title: { en: "Building a DNA strand", ja: "DNA鎖をつくる", zh: "建構DNA鏈" },
      ahl: false,
      refs: ["A1.2.2", "A1.2.3", "A1.2.6", "A1.2.8"],
      intro: {
        en: "<p>A nucleotide has a phosphate (drawn as a circle), a pentose sugar (pentagon) and a nitrogenous base (rectangle). Sugar–phosphate bonds join nucleotides into a strong backbone. DNA has two antiparallel strands linked by hydrogen bonds between complementary bases: A pairs with T, and G pairs with C. This pairing lets the sequence be copied and read.</p>",
        ja: "<p>ヌクレオチド (nucleotide) は、リン酸 (円で表す)、五炭糖 (五角形)、窒素を含む塩基 (長方形) からできています。糖とリン酸の結合でヌクレオチドがつながり、丈夫な骨格 (backbone) ができます。DNAは逆平行 (antiparallel) の2本の鎖が、相補的な塩基どうしの水素結合でつながったもので、AはTと、GはCと対をつくります。この対合によって、配列は複製され、読み取られます。</p>",
        zh: "<p>核苷酸 (nucleotide) 由磷酸（以圓形表示）、戊糖（五邊形）和含氮鹼基（長方形）組成。糖與磷酸之間的鍵把核苷酸連成堅固的骨架 (backbone)。DNA 有兩條反平行 (antiparallel) 的鏈，由互補鹼基之間的氫鍵連接：A 與 T 配對，G 與 C 配對。這種配對使序列能夠被複製和讀取。</p>"
      },
      widget: "dna-builder",
      options: { tab: 1 },
      task: {
        en: "Build the new strand by tapping the base that pairs with each highlighted base. Then say why the two strands are called antiparallel.",
        ja: "ハイライトされた塩基と対をつくる塩基をタップして、新しい鎖をつくりましょう。そのあと、2本の鎖が逆平行と呼ばれる理由を説明しましょう。",
        zh: "點選與每個標示鹼基配對的鹼基，建構新鏈。然後解釋為何這兩條鏈稱為反平行。"
      }
    },
    {
      title: { en: "The DNA double helix in 3D", ja: "DNAの二重らせんを3Dで見る", zh: "立體觀察DNA雙螺旋" },
      ahl: false,
      refs: ["A1.2.3", "A1.2.6"],
      intro: {
        en: "<p>This is a real piece of DNA, drawn from experimental data, 12 base pairs long. Each strand has a sugar–phosphate backbone on the outside, a continuous chain of covalent bonds. The bases point inward and pair by hydrogen bonds. The two strands run in opposite directions. In exams you draw the strands antiparallel; you do not need to draw the helix.</p>",
        ja: "<p>実験データから描いた、12塩基対の本物のDNAです。各鎖では、共有結合が連続した糖–リン酸骨格 (sugar–phosphate backbone) が外側にあります。塩基は内側を向き、水素結合で対をつくります。2本の鎖は逆向きに走っています。試験では鎖を逆平行に描けばよく、らせん形を描く必要はありません。</p>",
        zh: "<p>這是根據實驗數據繪出的真實DNA片段，共12個鹼基對。每條鏈的糖–磷酸骨架 (sugar–phosphate backbone) 在外側，是由共價鍵連續相連的鏈。鹼基朝向內側，以氫鍵配對。兩條鏈方向相反。考試時要把兩條鏈畫成反平行，但不必畫出螺旋形。</p>"
      },
      widget: "mol3d-dna",
      options: {},
      task: {
        en: "Rotate the model. Under Highlight, choose Sugar–phosphate backbone, then Complementary base pairs. Which part is on the outside? Then colour by Base type and check that A pairs with T and G with C.",
        ja: "モデルを回しましょう。「強調」で「糖–リン酸骨格」、続いて「相補的塩基対」を選びます。外側にあるのはどの部分でしょう。次に色分けを「塩基の種類」にして、AがT、GがCと対になることを確かめましょう。",
        zh: "旋轉模型。在「突出顯示」中先選「糖–磷酸骨架」，再選「互補鹼基對」。哪一部分在外側？然後把顏色設為「鹼基種類」，確認 A 與 T 配對、G 與 C 配對。"
      }
    },
    {
      title: { en: "Condensation and hydrolysis of sugars", ja: "糖の縮合と加水分解", zh: "糖的縮合與水解" },
      ahl: false,
      refs: ["B1.1.2", "B1.1.3"],
      intro: {
        en: "<p>Macromolecules are made by condensation reactions, which link monomers into a polymer. An –OH and an –H are removed together as a molecule of water. Two &alpha;-glucose molecules make maltose this way. Polymers are broken down into monomers by hydrolysis. Water molecules are split, and their –H and –OH are added to the monomers.</p>",
        ja: "<p>高分子は、単量体 (monomer) をつなげて重合体 (polymer) にする縮合反応 (condensation reaction) でつくられます。–OHと–Hがいっしょに取れて水が1分子できます。2つの&alpha;-グルコースはこうしてマルトースになります。重合体は加水分解 (hydrolysis) で単量体に分解されます。水分子が分かれ、その–Hと–OHが単量体に付きます。</p>",
        zh: "<p>大分子由縮合反應 (condensation reaction) 把單體 (monomer) 連成聚合物 (polymer)，過程中一個 –OH 和一個 –H 一同脫去，成為一分子水。兩個 &alpha;-葡萄糖就是這樣形成麥芽糖。聚合物則經水解 (hydrolysis) 分解為單體：水分子被分開，其 –H 和 –OH 加到單體上。</p>"
      },
      widget: "carb-builder",
      options: { tab: 0 },
      task: {
        en: "Press Condensation, then Hydrolysis. Say how many water molecules are released and then used. Name the polymers made by condensation from amino acids and from nucleotides.",
        ja: "「縮合」、続いて「加水分解」を押しましょう。水分子が何個放出され、何個使われるか答えます。アミノ酸から縮合でできる重合体と、ヌクレオチドからできる重合体の名前も答えましょう。",
        zh: "按「縮合」，再按「水解」。說出釋出了多少分子水，之後又用了多少分子水。並說出由氨基酸和由核苷酸經縮合形成的聚合物名稱。"
      }
    },
    {
      title: { en: "Starch, glycogen and cellulose", ja: "デンプン、グリコーゲン、セルロース", zh: "澱粉、糖原與纖維素" },
      ahl: false,
      refs: ["B1.1.5", "B1.1.6"],
      intro: {
        en: "<p>Starch (plants) and glycogen (animals) store energy as polymers of &alpha;-glucose. Coiling and branching make them compact, and their large size makes them relatively insoluble. Glucose units are easily added or removed by condensation and hydrolysis. Cellulose is made of &beta;-glucose, with alternate units inverted. Its straight chains form bundles cross-linked by hydrogen bonds, which suits plant cell walls.</p>",
        ja: "<p>デンプン (plants) とグリコーゲン (animals) は、&alpha;-グルコースの重合体としてエネルギーを蓄えます。コイル状に巻き、枝分かれするのでコンパクトになり、分子が大きいため水に溶けにくくなります。グルコース単位は縮合と加水分解で簡単に付け外しできます。セルロース (cellulose) は&beta;-グルコースでできていて、単位が交互に反転しています。まっすぐな鎖が束になって水素結合で架橋され、植物の細胞壁に適しています。</p>",
        zh: "<p>澱粉 (starch，植物) 和糖原 (glycogen，動物) 是 &alpha;-葡萄糖的聚合物，用來貯存能量。盤繞和分支令它們結構緊密，而分子龐大使它們相對不易溶解。葡萄糖單位可通過縮合和水解輕易加上或移除。纖維素 (cellulose) 由 &beta;-葡萄糖組成，相鄰單位方向交替顛倒，直鏈集結成束並以氫鍵交聯，適合作植物細胞壁。</p>"
      },
      widget: "carb-builder",
      options: { tab: 2 },
      task: {
        en: "Compare unbranched starch, branched starch, glycogen and cellulose. Which are made of &alpha;-glucose, and which are branched? Use the + glucose and − glucose buttons to see how an energy store is built up or mobilised. (The names amylose and amylopectin are not required by the guide.)",
        ja: "枝分かれのないデンプン、枝分かれしたデンプン、グリコーゲン、セルロースを比べましょう。&alpha;-グルコースでできているのはどれで、枝分かれしているのはどれでしょう。「+ グルコース」「− グルコース」で、エネルギー貯蔵がどう増え、どう動員されるか見てみましょう。（アミロース・アミロペクチンという名前はガイドでは求められていません。）",
        zh: "比較無分支澱粉、有分支澱粉、糖原和纖維素：哪些由 &alpha;-葡萄糖組成？哪些有分支？用「+ 葡萄糖」和「− 葡萄糖」按鈕，看看能量貯存如何增加或動用。（指引不要求記住「直鏈澱粉」和「支鏈澱粉」這兩個名稱。）"
      }
    },
    {
      title: { en: "Triglycerides and phospholipids", ja: "トリグリセリドとリン脂質", zh: "甘油三酯與磷脂" },
      ahl: false,
      refs: ["B1.1.8", "B1.1.9", "B1.1.12"],
      intro: {
        en: "<p>Lipids dissolve in non-polar solvents but are only sparingly soluble in water. A triglyceride is one glycerol joined to three fatty acids by condensation. A phospholipid has glycerol joined to two fatty acids and one phosphate group. It is amphipathic: a hydrophilic head and hydrophobic tails. In water, phospholipids form a bilayer.</p>",
        ja: "<p>脂質 (lipid) は無極性溶媒に溶けますが、水には少ししか溶けません。トリグリセリド (triglyceride) は、1分子のグリセロールに3分子の脂肪酸が縮合で結合したものです。リン脂質 (phospholipid) は、グリセロールに2分子の脂肪酸と1つのリン酸基が結合したもので、親水性の頭部と疎水性の尾部をもつ両親媒性 (amphipathic) です。水中では二重層 (bilayer) をつくります。</p>",
        zh: "<p>脂質 (lipid) 可溶於非極性溶劑，但只稍微溶於水。甘油三酯 (triglyceride) 是一個甘油通過縮合連接三個脂肪酸。磷脂 (phospholipid) 則是甘油連接兩個脂肪酸和一個磷酸基團，具兩親性 (amphipathic)：有親水的頭部和疏水的尾部。在水中，磷脂會形成雙層 (bilayer)。</p>"
      },
      widget: "lipid-builder",
      options: { tab: 0 },
      task: {
        en: "Press Add fatty acid three times and count the water molecules released. Then open the Phospholipids tab and press Self-assemble: which part of each molecule faces the water, and why?",
        ja: "「脂肪酸を付ける」を3回押し、放出される水分子の数を数えましょう。次に「リン脂質」タブを開いて「自己集合」を押し、各分子のどの部分が水に面するか、その理由とともに答えましょう。",
        zh: "按三次「加入脂肪酸」，數一數釋出的水分子。然後打開「磷脂」分頁並按「自行組合」：每個分子的哪一部分朝向水？為甚麼？"
      }
    }
  ]
});
