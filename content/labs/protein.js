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
    "en": "Six steps, from one amino acid to a working protein. Work through them in order, and try every interactive. This is subtopic B1.2.",
    "ja": "1つのアミノ酸から働くタンパク質まで、6つのステップで学びます。順番に進め、インタラクティブをすべて試しましょう。サブトピックB1.2です。",
    "zh": "六個步驟，由單一個氨基酸到有功能的蛋白質。請依次完成，並試玩每個互動內容。這是子課題 B1.2。"
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
        "B1.2.11"
      ],
      "intro": {
        "en": "<p>Protein structure is described at four levels. <strong>Primary</strong>: the sequence of amino acids. <strong>Secondary</strong>: regular shapes such as the &alpha;-helix and &beta;-pleated sheet, held by hydrogen bonds between backbone C=O and N–H groups. <strong>Tertiary</strong>: the overall 3D shape of one polypeptide. <strong>Quaternary</strong>: two or more polypeptides together. The idea that amino acids can be joined in any order is core (B1.2.4). The named levels, and how the sequence decides the 3D shape (B1.2.7), are AHL.</p>",
        "ja": "<p>タンパク質の構造は4つの階層で表します。<strong>一次構造 (primary)</strong>：アミノ酸の配列。<strong>二次構造 (secondary)</strong>：骨格のC=OとN–Hの間の水素結合で保たれる、&alpha;ヘリックスや&beta;シートのような規則的な形。<strong>三次構造 (tertiary)</strong>：1本のポリペプチド全体の立体構造。<strong>四次構造 (quaternary)</strong>：2本以上のポリペプチドの組み合わせ。アミノ酸がどんな順序でもつながるという考えは共通 (B1.2.4) です。構造の各段階の名前と、配列が立体構造を決めるしくみ (B1.2.7) はAHLです。</p>",
        "zh": "<p>蛋白質結構分為四個層次。<strong>一級結構 (primary)</strong>：氨基酸的序列。<strong>二級結構 (secondary)</strong>：由骨架上 C=O 與 N–H 之間的氫鍵維持的規則形狀，例如 &alpha; 螺旋和 &beta; 摺板。<strong>三級結構 (tertiary)</strong>：單條多肽的整體三維形狀。<strong>四級結構 (quaternary)</strong>：兩條或以上多肽結合在一起。氨基酸可按任何次序連接，這屬核心內容 (B1.2.4)。各級結構的名稱，以及序列如何決定三維形狀 (B1.2.7)，屬於 AHL。</p>"
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
        "en": "Denaturation by heat and pH",
        "ja": "熱とpHによる変性 (denaturation)",
        "zh": "高溫與 pH 引致的變性 (denaturation)"
      },
      "ahl": false,
      "refs": [
        "B1.2.5"
      ],
      "intro": {
        "en": "<p>Denaturation is a change in the 3D shape of a protein, so it usually loses its biological function. Heat makes the molecule vibrate more and breaks the weak bonds that hold its shape. An extreme pH changes the charges on R-groups and disrupts the bonds between them. The peptide bonds are not broken, so the amino acid sequence stays the same. Denaturation is usually permanent. The three model proteins are illustrative, not real measurements. Use the sliders to see the effect.</p>",
        "ja": "<p>変性 (denaturation) とは、タンパク質の立体構造が変わることで、ふつう生物としての働きを失います。熱は分子の振動を激しくして、形を保っている弱い結合を切ります。極端なpHはR基の電荷を変え、R基どうしの結合を乱します。ペプチド結合は切れないので、アミノ酸の配列は変わりません。変性はふつう元に戻りません。3つのモデルタンパク質は説明用で、実際の測定値ではありません。スライダーで影響を確かめましょう。</p>",
        "zh": "<p>變性 (denaturation) 是指蛋白質的三維形狀改變，通常令它失去生物功能。高溫使分子振動加劇，破壞維持形狀的較弱鍵。極端的 pH 會改變 R 基上的電荷，擾亂 R 基之間的鍵。肽鍵不會斷開，所以氨基酸序列不變。變性通常是永久的。三個模型蛋白質只作示意，並非真實量度數據。請用滑桿觀察影響。</p>"
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
    }
  ]
});
