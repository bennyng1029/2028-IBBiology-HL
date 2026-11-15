/* Guided lab: Protein Lab (B1.2). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  "id": "protein",
  "order": 1,
  "theme": "B",
  "topics": [
    "B1.2"
  ],
  "title": {
    "en": "Protein Lab",
    "ja": "タンパク質ラボ",
    "zh": "蛋白質實驗室"
  },
  "intro": {
    "en": "Ten steps, from one amino acid to a working protein, including real 3D structures, plus an optional extension step (amino acid flashcards). Work through them in order, and try every interactive. Steps marked AHL are for HL students only. This is subtopic B1.2.",
    "ja": "1つのアミノ酸から働くタンパク質まで、実際の3D構造も使って10のステップで学びます（最後に任意の発展ステップ：アミノ酸フラッシュカードがあります）。順番に進め、インタラクティブをすべて試しましょう。AHLの印があるステップはHLの生徒向けです。サブトピックB1.2です。",
    "zh": "由單一個氨基酸到有功能的蛋白質，共十個步驟，並包括真實的3D結構，另有一個選做的延伸步驟（氨基酸卡片）。請依次完成，並試玩每個互動內容。標有 AHL 的步驟只適用於 HL 學生。這是子課題 B1.2。"
  },
  "steps": [
    {
      "title": {
        "en": "Amino acid structure and R-groups",
        "ja": "アミノ酸の構造とR基 (R-group)",
        "zh": "氨基酸的結構與 R 基 (R-group)"
      },
      "ahl": false,
      "refs": [
        "B1.2.1",
        "B1.2.6"
      ],
      "intro": {
        "en": "<p>Every amino acid has the same basic structure. A central carbon atom is bonded to an amino group (–NH<sub>2</sub>), a carboxyl group (–COOH), a hydrogen atom and a variable R-group. The R-group is what makes one amino acid different from another. Tap each part of the molecule to see what it is. The second part, sorting R-groups into hydrophobic, polar, acidic and basic, is AHL (B1.2.6).</p>",
        "ja": "<p>すべてのアミノ酸は同じ基本構造をもちます。中心の炭素原子に、アミノ基 (–NH<sub>2</sub>)、カルボキシ基 (–COOH)、水素原子、そして側鎖であるR基 (R-group) が結合しています。アミノ酸どうしの違いを生むのはR基です。分子の各部分をタップして確かめましょう。後半のR基を疎水性・極性・酸性・塩基性に分類する部分はAHL (B1.2.6) です。</p>",
        "zh": "<p>所有氨基酸都有相同的基本結構：中心碳原子連接氨基 (–NH<sub>2</sub>)、羧基 (–COOH)、氫原子和可變的 R 基 (R-group)。不同氨基酸的分別就在於 R 基。請點選分子的各部分，看看它們是甚麼。第二部分把 R 基分為疏水性、極性、酸性和鹼性，屬 AHL (B1.2.6)。</p>"
      },
      "widget": "amino-acid",
      "options": {},
      "task": {
        "en": "Tap the amino group, the carboxyl group and the R-group in turn. Say which part is the same in every amino acid.",
        "ja": "アミノ基、カルボキシ基、R基を順にタップしましょう。どの部分がすべてのアミノ酸で共通か答えてみましょう。",
        "zh": "依次點選氨基、羧基和 R 基。說出哪一部分在所有氨基酸中都相同。"
      }
    },
    {
      "title": {
        "en": "Condensation and peptide bonds",
        "ja": "縮合反応とペプチド結合 (peptide bond)",
        "zh": "縮合反應與肽鍵 (peptide bond)"
      },
      "ahl": false,
      "refs": [
        "B1.2.2",
        "B1.2.4"
      ],
      "intro": {
        "en": "<p>Amino acids are joined by condensation reactions. The –OH from the carboxyl group of one amino acid and an –H from the amino group of the next are removed together as a molecule of water (H<sub>2</sub>O). A peptide bond forms between them. Many amino acids joined this way make a polypeptide.</p>",
        "ja": "<p>アミノ酸は縮合反応 (condensation reaction) で結合します。一方のアミノ酸のカルボキシ基の –OH と、次のアミノ酸のアミノ基の –H がいっしょに取れて、水 (H<sub>2</sub>O) が1分子できます。その間にペプチド結合 (peptide bond) ができます。多くのアミノ酸がこうして結合したものがポリペプチド (polypeptide) です。</p>",
        "zh": "<p>氨基酸通過縮合反應 (condensation reaction) 連接。一個氨基酸羧基上的 –OH 與下一個氨基酸氨基上的 –H 一同脫去，形成一分子水 (H<sub>2</sub>O)，兩者之間便形成肽鍵 (peptide bond)。許多氨基酸這樣連接起來，就成為多肽 (polypeptide)。</p>"
      },
      "widget": "peptide-builder",
      "options": {},
      "task": {
        "en": "Join two amino acids and name the molecule that is released. Then extend the chain to a tripeptide.",
        "ja": "2つのアミノ酸を結合させ、放出される分子の名前を答えましょう。次に鎖を3つ（トリペプチド）に伸ばしましょう。",
        "zh": "連接兩個氨基酸，並說出釋出的分子名稱。然後把鏈延長成三肽。"
      }
    },
    {
      "title": {
        "en": "Levels of protein structure",
        "ja": "タンパク質の構造の階層",
        "zh": "蛋白質結構的層次"
      },
      "ahl": true,
      "refs": [
        "B1.2.7",
        "B1.2.8",
        "B1.2.9",
        "B1.2.11"
      ],
      "intro": {
        "en": "<p>Protein structure has four levels. <strong>Primary</strong>: the sequence of amino acids. This sequence decides how the chain folds, and so its 3D shape. <strong>Secondary</strong>: regular &alpha;-helices and &beta;-pleated sheets, held by hydrogen bonds between backbone C=O and N–H groups. <strong>Tertiary</strong>: the overall 3D shape of one polypeptide. <strong>Quaternary</strong>: two or more polypeptides together.</p>",
        "ja": "<p>タンパク質の構造には4つの階層があります。<strong>一次構造 (primary)</strong>：アミノ酸の配列。この配列が鎖の折りたたみ方、つまり立体構造を決めます。<strong>二次構造 (secondary)</strong>：骨格のC=OとN–Hの間の水素結合で保たれる、規則的な&alpha;ヘリックスと&beta;シート。<strong>三次構造 (tertiary)</strong>：1本のポリペプチド全体の立体構造。<strong>四次構造 (quaternary)</strong>：2本以上のポリペプチドの組み合わせ。</p>",
        "zh": "<p>蛋白質結構分為四個層次。<strong>一級結構 (primary)</strong>：氨基酸的序列。這個序列決定肽鏈如何摺疊，因而決定其三維形狀。<strong>二級結構 (secondary)</strong>：規則的 &alpha; 螺旋和 &beta; 摺板，由骨架上 C=O 與 N–H 之間的氫鍵維持。<strong>三級結構 (tertiary)</strong>：單條多肽的整體三維形狀。<strong>四級結構 (quaternary)</strong>：兩條或以上多肽結合在一起。</p>"
      },
      "widget": "protein-levels",
      "options": {},
      "task": {
        "en": "Step through the four levels and note which bonds or features define each one.",
        "ja": "4つの階層を順に見て、それぞれを特徴づける結合や構造を確かめましょう。",
        "zh": "逐級查看四個層次，並記下每一層由哪些鍵或特徵界定。"
      }
    },
    {
      "title": {
        "en": "Secondary structure in 3D",
        "ja": "二次構造を3Dで見る",
        "zh": "立體觀察二級結構"
      },
      "ahl": true,
      "refs": [
        "B1.2.8"
      ],
      "intro": {
        "en": "<p>This is a real protein, ubiquitin (76 amino acids), drawn from experimental data. Its backbone folds into an &alpha;-helix (a coil) and a &beta;-pleated sheet (strands side by side). These are secondary structure. Hydrogen bonds form between backbone C=O and N–H groups at regular intervals, not between R-groups. Drag the model to rotate it.</p>",
        "ja": "<p>実験データから描いた本物のタンパク質、ユビキチン (ubiquitin、76アミノ酸) です。主鎖は&alpha;ヘリックス (&alpha;-helix、コイル) と&beta;シート (&beta;-pleated sheet、鎖が並んだ構造) に折りたたまれています。これが二次構造 (secondary structure) です。水素結合は、R基どうしではなく、主鎖のC=OとN–Hの間に規則的にできます。モデルをドラッグして回してみましょう。</p>",
        "zh": "<p>這是根據實驗數據繪出的真實蛋白質：泛素 (ubiquitin，76 個氨基酸)。它的主鏈摺疊成 &alpha; 螺旋 (&alpha;-helix，盤繞) 和 &beta; 摺板 (&beta;-pleated sheet，多股並排)，這就是二級結構 (secondary structure)。氫鍵在主鏈的 C=O 與 N–H 之間按規律位置形成，並非形成於 R 基之間。請拖曳模型使它旋轉。</p>"
      },
      "widget": "mol3d-protein",
      "options": {
        "preset": "helix-sheet"
      },
      "task": {
        "en": "Colour by Helix / sheet and rotate the model. Find the &alpha;-helix and the &beta;-pleated sheet. State which groups form the hydrogen bonds that hold both shapes.",
        "ja": "色分けを「ヘリックス／シート」にしてモデルを回しましょう。&alpha;ヘリックスと&beta;シートを見つけ、どちらの形も保つ水素結合をつくるのはどの基か答えましょう。",
        "zh": "把顏色設為「螺旋／摺疊片」並旋轉模型。找出 &alpha; 螺旋和 &beta; 摺板，並說出是哪些基團形成維持這兩種形狀的氫鍵。"
      }
    },
    {
      "title": {
        "en": "What holds the tertiary structure together",
        "ja": "三次構造を保つもの",
        "zh": "維持三級結構的作用力"
      },
      "ahl": true,
      "refs": [
        "B1.2.9",
        "B1.2.10"
      ],
      "intro": {
        "en": "<p>A polypeptide folds into its tertiary structure because of interactions between R-groups: hydrogen bonds, ionic bonds, disulfide bridges (covalent bonds between two cysteine R-groups) and hydrophobic interactions. Switch each type on to see where it acts.</p>",
        "ja": "<p>ポリペプチドが三次構造に折りたたまれるのは、R基どうしの相互作用があるからです。水素結合、イオン結合 (ionic bond)、ジスルフィド結合 (disulfide bridge：2つのシステインのR基の間の共有結合)、疎水性相互作用 (hydrophobic interaction) がそれにあたります。種類ごとにオンにして、どこで働くか見てみましょう。</p>",
        "zh": "<p>多肽摺疊成三級結構，是由於 R 基之間的相互作用：氫鍵 (hydrogen bond)、離子鍵 (ionic bond)、二硫鍵 (disulfide bridge，兩個半胱氨酸 R 基之間的共價鍵) 和疏水相互作用 (hydrophobic interaction)。請逐一開啟各種作用力，看看它們在哪裏起作用。</p>"
      },
      "widget": "protein-folding",
      "options": {},
      "task": {
        "en": "Switch the four bond types on one at a time. Which one is covalent?",
        "ja": "4種類の結合を1つずつオンにしましょう。共有結合なのはどれでしょう。",
        "zh": "逐一開啟四種作用力。哪一種是共價鍵？"
      }
    },
    {
      "title": {
        "en": "The hydrophobic core in 3D",
        "ja": "疎水性のコアを3Dで見る",
        "zh": "立體觀察疏水核心"
      },
      "ahl": true,
      "refs": [
        "B1.2.10"
      ],
      "intro": {
        "en": "<p>Myoglobin is a water-soluble globular protein. In water, hydrophobic R-groups are pushed together into the core, away from water. Polar and charged R-groups mostly lie on the surface, where they interact with water. This hydrophobic interaction helps to hold the tertiary structure. Integral membrane proteins have hydrophobic regions where they sit in the membrane.</p>",
        "ja": "<p>ミオグロビン (myoglobin) は水に溶ける球状タンパク質です。水中では、疎水性 (hydrophobic) のR基が水を避けて内部のコアに集まります。極性や電荷をもつR基は、水と相互作用できる表面に多くあります。この疎水性相互作用 (hydrophobic interaction) が三次構造を保つ助けになります。膜内在性タンパク質では、膜の中にある部分が疎水性です。</p>",
        "zh": "<p>肌紅蛋白 (myoglobin) 是水溶性球狀蛋白質。在水中，疏水 (hydrophobic) R 基被擠到核心，遠離水；極性和帶電的 R 基則大多在表面，與水相互作用。這種疏水相互作用 (hydrophobic interaction) 有助維持三級結構。內在膜蛋白位於膜內的部分則帶有疏水區域。</p>"
      },
      "widget": "mol3d-protein",
      "options": {
        "preset": "hydrophobic"
      },
      "task": {
        "en": "Predict first: which kind of R-group is inside and which is outside? Colour by Hydrophobic / hydrophilic, choose Surface, then slide the slice into the protein to check.",
        "ja": "まず予想しましょう。内側にあるのはどんなR基で、外側はどんなR基でしょう。色分けを「疎水性／親水性」にして「表面」を選び、スライスを内部に動かして確かめましょう。",
        "zh": "先作預測：哪類 R 基在內部，哪類在外面？把顏色設為「疏水／親水」，選「表面」，再把切片滑桿移入蛋白質內部驗證。"
      }
    },
    {
      "title": {
        "en": "Insulin in 3D: two chains, disulfide bonds",
        "ja": "インスリンを3Dで見る：2本の鎖とジスルフィド結合",
        "zh": "立體觀察胰島素：兩條鏈與二硫鍵"
      },
      "ahl": true,
      "refs": [
        "B1.2.9",
        "B1.2.11"
      ],
      "intro": {
        "en": "<p>Human insulin is a globular protein made of two polypeptides, the A chain (21 amino acids) and the B chain (30 amino acids). Disulfide bridges join the two chains. A disulfide bridge is a covalent bond between the sulfur atoms of two cysteine R-groups. A third bridge lies inside the A chain. Insulin has no non-protein part, so it is non-conjugated.</p>",
        "ja": "<p>ヒトインスリン (insulin) は、A鎖 (21アミノ酸) とB鎖 (30アミノ酸) の2本のポリペプチドからなる球状タンパク質です。2本の鎖はジスルフィド結合 (disulfide bridge) でつながっています。ジスルフィド結合は、2つのシステイン (cysteine) のR基の硫黄原子どうしの共有結合です。3本目の結合はA鎖の内部にあります。インスリンにはタンパク質以外の部分がないので、非複合タンパク質 (non-conjugated protein) です。</p>",
        "zh": "<p>人類胰島素 (insulin) 是球狀蛋白質，由 A 鏈 (21 個氨基酸) 和 B 鏈 (30 個氨基酸) 兩條多肽組成。兩條鏈由二硫鍵 (disulfide bridge) 連接。二硫鍵是兩個半胱氨酸 (cysteine) R 基的硫原子之間的共價鍵。第三個二硫鍵位於 A 鏈內部。胰島素沒有非蛋白質部分，所以屬非綴合蛋白質 (non-conjugated protein)。</p>"
      },
      "widget": "mol3d-protein",
      "options": {
        "preset": "insulin"
      },
      "task": {
        "en": "Colour by Chain and tick Show disulfide bonds. How many S–S bonds join the A chain to the B chain? Which amino acid supplies the sulfur atoms?",
        "ja": "色分けを「鎖」にして「ジスルフィド結合」をオンにしましょう。A鎖とB鎖をつなぐS–S結合は何本でしょう。硫黄原子を出すのはどのアミノ酸でしょう。",
        "zh": "把顏色設為「鏈」並開啟「顯示」下的「二硫鍵」。有多少個 S–S 鍵連接 A 鏈與 B 鏈？硫原子來自哪種氨基酸？"
      }
    },
    {
      "title": {
        "en": "Denaturation by heat and pH",
        "ja": "熱とpHによる変性 (denaturation)",
        "zh": "高溫與 pH 引致的變性 (denaturation)"
      },
      "ahl": false,
      "refs": [
        "B1.2.5"
      ],
      "intro": {
        "en": "<p>Denaturation is a change in the 3D shape of a protein, so it usually loses its biological function. Heat makes the molecule vibrate more and breaks the weak bonds that hold its shape. An extreme pH changes the charges on R-groups and disrupts the bonds between them. Peptide bonds are not broken, so the amino acid sequence stays the same. Denaturation is usually permanent.</p>",
        "ja": "<p>変性 (denaturation) とは、タンパク質の立体構造が変わることで、ふつう生物としての働きを失います。熱は分子の振動を激しくして、形を保っている弱い結合を切ります。極端なpHはR基の電荷を変え、R基どうしの結合を乱します。ペプチド結合は切れないので、アミノ酸の配列は変わりません。変性はふつう元に戻りません。</p>",
        "zh": "<p>變性 (denaturation) 是指蛋白質的三維形狀改變，通常令它失去生物功能。高溫使分子振動加劇，破壞維持形狀的較弱鍵。極端的 pH 會改變 R 基上的電荷，擾亂 R 基之間的鍵。肽鍵不會斷開，所以氨基酸序列不變。變性通常是永久的。</p>"
      },
      "widget": "denaturation",
      "options": {},
      "task": {
        "en": "Raise the temperature until the protein loses its shape. Then change the pH. Does the amino acid sequence change?",
        "ja": "タンパク質の形が崩れるまで温度を上げましょう。次にpHを変えます。アミノ酸の配列は変わるでしょうか。",
        "zh": "升高溫度直至蛋白質失去形狀，再改變 pH。氨基酸序列有沒有改變？"
      }
    },
    {
      "title": {
        "en": "Form and function: globular and fibrous, conjugated and non-conjugated",
        "ja": "形と働き：球状と繊維状、複合と非複合",
        "zh": "形態與功能：球狀與纖維狀、結合與非結合"
      },
      "ahl": true,
      "refs": [
        "B1.2.11",
        "B1.2.12"
      ],
      "intro": {
        "en": "<p>A protein’s shape decides what it can do. Globular proteins are compact and rounded, and are usually soluble in water, for example insulin. Fibrous proteins form long strands that give strength, for example collagen. A conjugated protein contains a non-protein part, such as the haem group in haemoglobin; a non-conjugated protein does not. This whole step is AHL (B1.2.11 and B1.2.12).</p>",
        "ja": "<p>タンパク質の形は、その働きを決めます。球状タンパク質 (globular protein) は丸くコンパクトで、ふつう水に溶けます（例：インスリン）。繊維状タンパク質 (fibrous protein) は長い繊維になって強度を与えます（例：コラーゲン）。複合タンパク質 (conjugated protein) はタンパク質以外の部分をもち、たとえばヘモグロビンのヘム基がそうです。非複合タンパク質 (non-conjugated protein) はそれをもちません。このステップはすべてAHL（B1.2.11とB1.2.12）です。</p>",
        "zh": "<p>蛋白質的形狀決定它的功能。球狀蛋白質 (globular protein) 結構緊密、呈圓形，通常可溶於水，例如胰島素。纖維狀蛋白質 (fibrous protein) 形成長纖維，提供強度，例如膠原蛋白。綴合蛋白質 (conjugated protein) 含有非蛋白質部分，例如血紅蛋白中的血紅素基團；非綴合蛋白質 (non-conjugated protein) 則沒有。這一步全部屬於 AHL（B1.2.11 和 B1.2.12）。</p>"
      },
      "widget": "protein-compare",
      "options": {},
      "task": {
        "en": "Compare insulin, collagen and haemoglobin. Which is fibrous, and which is conjugated?",
        "ja": "インスリン、コラーゲン、ヘモグロビンを比べましょう。繊維状はどれで、複合タンパク質はどれでしょう。",
        "zh": "比較胰島素、膠原蛋白和血紅蛋白。哪一種是纖維狀？哪一種是綴合蛋白質？"
      }
    },
    {
      "title": {
        "en": "Haemoglobin and collagen in 3D",
        "ja": "ヘモグロビンとコラーゲンを3Dで見る",
        "zh": "立體觀察血紅蛋白與膠原蛋白"
      },
      "ahl": true,
      "refs": [
        "B1.2.11",
        "B1.2.12"
      ],
      "intro": {
        "en": "<p>Haemoglobin is a globular, conjugated protein. It has four polypeptides, and each carries a haem group (a non-protein part) with an iron atom that binds oxygen. Collagen is a fibrous, non-conjugated protein. Three polypeptides twist into a rope-like triple helix with high tensile strength. In both, the shape suits the function.</p>",
        "ja": "<p>ヘモグロビン (haemoglobin) は球状の複合タンパク質です。4本のポリペプチドからなり、それぞれがタンパク質以外の部分であるヘム基 (haem group) をもち、その鉄原子が酸素と結合します。コラーゲン (collagen) は繊維状の非複合タンパク質で、3本のポリペプチドがよりあって縄状の三重らせんとなり、高い引っ張り強度をもちます。どちらも、形が働きに合っています。</p>",
        "zh": "<p>血紅蛋白 (haemoglobin) 是球狀的綴合蛋白質 (conjugated protein)，由四條多肽組成，每條都帶有血紅素基團 (haem group，非蛋白質部分)，其鐵原子可結合氧。膠原蛋白 (collagen) 是纖維狀的非綴合蛋白質，三條多肽扭合成似繩的三螺旋，抗拉強度很高。兩者的形狀都配合它們的功能。</p>"
      },
      "widget": "mol3d-protein",
      "options": {
        "preset": "haemoglobin"
      },
      "task": {
        "en": "In haemoglobin, tick Show Haem + Fe and count the haem groups. Then open the Collagen tab: how does its shape differ from a globular protein, and why does that suit its job?",
        "ja": "ヘモグロビンで「ヘム＋Fe」をオンにし、ヘム基の数を数えましょう。次に「コラーゲン」のタブを開き、球状タンパク質と形がどう違うか、その形がなぜ働きに合っているか答えましょう。",
        "zh": "在血紅蛋白中開啟「顯示」下的「血紅素＋Fe」，數一數血紅素基團的數目。然後打開「膠原蛋白」分頁：它的形狀與球狀蛋白質有何不同？為何適合它的功能？"
      }
    },
    {
      "title": {
        "en": "Optional extension: amino acid flashcards",
        "ja": "発展（任意）：アミノ酸フラッシュカード",
        "zh": "延伸（選做）：氨基酸閃卡"
      },
      "ahl": true,
      "refs": [
        "B1.2.6"
      ],
      "intro": {
        "en": "<p>Optional extension, beyond the syllabus. IB does not ask you to name the 20 amino acids or draw their R-groups (only cysteine, AHL). Use these flashcards to practise recognising R-group types from their chemistry: non-polar (hydrophobic), polar, acidic or basic.</p>",
        "ja": "<p>任意の発展内容で、シラバスの範囲外です。IB では 20 種類のアミノ酸の名前を覚えたり R基を描いたりする必要はありません（システイン (cysteine) のみ、AHL）。このフラッシュカードで、化学的な特徴から R基 の種類（非極性・疎水性 (hydrophobic)、極性、酸性、塩基性）を見分ける練習をしましょう。</p>",
        "zh": "<p>選做的延伸內容，超出課程範圍。IB 不要求你說出 20 種氨基酸的名稱或繪出它們的 R 基（只須認識半胱氨酸 (cysteine)，屬 AHL）。利用這些閃卡，練習從化學結構辨認 R 基類型：非極性（疏水 (hydrophobic)）、極性、酸性或鹼性。</p>"
      },
      "widget": "amino-acid-cards",
      "options": {},
      "task": {
        "en": "Flip a card, then try the Quiz. For each R-group, say which chemical group (–OH, –COOH, –NH2 or only C–H) tells you its type.",
        "ja": "カードを裏返してから「クイズ」に挑戦しましょう。各 R基 について、どの化学的な基（–OH、–COOH、–NH2、または C–H だけ）で種類が分かるか答えましょう。",
        "zh": "翻開卡片，再試「測驗」。對每個 R 基，說出哪一種化學基團（–OH、–COOH、–NH2 或只有 C–H）可判斷它的類型。"
      }
    }
  ]
});
