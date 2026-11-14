/* B1.2 Proteins — flagship topic. Sections are ordered as a staircase:
   amino acid -> peptide bond -> primary -> secondary -> tertiary -> quaternary -> form & function. */
IB.registerTopic({
  id: "B1.2",
  slug: "b1-2",
  theme: "B",
  level: 1,
  ahlOnly: false,
  title: { en: "Proteins", ja: "タンパク質", zh: "蛋白質" },

  guidingQuestions: [
    {
      en: "What is the relationship between amino acid sequence and the diversity in form and function of proteins?",
      ja: "アミノ酸の配列と、タンパク質の形と働きの多様性との間には、どのような関係があるか。",
      zh: "氨基酸序列與蛋白質在形態和功能上的多樣性之間有甚麼關係？"
    },
    {
      en: "How are protein molecules affected by their chemical and physical environments?",
      ja: "タンパク質分子は、化学的・物理的な環境からどのような影響を受けるか。",
      zh: "蛋白質分子如何受其化學和物理環境影響？"
    }
  ],

  summary: {
    en: "A protein is a chain of amino acids. Every amino acid has the same backbone but a different R-group, and the order of R-groups decides how the chain folds. Think of it as a staircase: amino acid, then peptide bond, then primary, secondary, tertiary and quaternary structure. Each step has its own bonds, and shape decides function. Heat and pH can wreck the shape (denaturation) without breaking the chain itself.",
    ja: "タンパク質はアミノ酸がつながった鎖です。どのアミノ酸も同じ骨格をもちますが、R基だけが異なり、R基の並び順が鎖の折りたたまれ方を決めます。階段のように考えましょう。アミノ酸、ペプチド結合、一次・二次・三次・四次構造の順です。段階ごとに働く結合が違い、形が働きを決めます。熱やpHは、鎖そのものを切らずに形を壊すことがあります（変性 (denaturation)）。",
    zh: "蛋白質是由氨基酸連成的長鏈。所有氨基酸都有相同的骨架，只是 R 基不同，而 R 基的排列次序決定長鏈如何摺疊。可以把它想成一道樓梯：氨基酸、肽鍵 (peptide bond)，然後是一級、二級、三級和四級結構。每一級各有不同的鍵，形狀決定功能。高溫和 pH 值變化可以破壞形狀（變性 (denaturation)），但不會切斷長鏈本身。"
  },

  sections: [
    /* ---------------------------------------------------------------- B1.2.1 */
    {
      ref: "B1.2.1",
      ahl: false,
      heading: {
        en: "Step 1: the amino acid — one backbone, one variable part",
        ja: "ステップ1：アミノ酸 ― 共通の骨格と変わる部分",
        zh: "第 1 步：氨基酸 ― 共同骨架與可變部分"
      },
      widget: "amino-acid",
      body: {
        en: `<p>Proteins are built from small units called <strong>amino acids</strong>. All amino acids share the same plan. In the middle is one carbon atom, the <strong>alpha carbon</strong>. Four things are attached to it:</p>
<ul>
<li>an <strong>amine group</strong>, –NH<sub>2</sub> (also called the amino group);</li>
<li>a <strong>carboxyl group</strong>, –COOH;</li>
<li>a <strong>hydrogen atom</strong>, –H;</li>
<li>an <strong>R-group</strong>, the variable part.</li>
</ul>
<p>The amine group, alpha carbon and carboxyl group are the same in every amino acid. Together they make the <strong>backbone</strong> once amino acids are joined. Only the R-group changes from one amino acid to the next. That one changing part is what makes amino acids, and later proteins, different from each other.</p>
<p><em>Analogy:</em> think of a LEGO brick. Every brick has the same studs underneath so it can click onto the next one (the backbone). The coloured, shaped top is different on each brick (the R-group).</p>
<div class="note"><p>You must be able to <strong>draw</strong> this generalized amino acid: alpha carbon in the middle, with amine group, carboxyl group, H and R attached. You do not need to know any individual amino acid by name or structure. The one exception comes later: cysteine, in disulfide bonds.</p></div>
<p><strong>The staircase for this topic.</strong> We will climb one step at a time. Steps 1 and 2 are core (SL and HL). So are the variety of possible sequences (B1.2.4: 20 amino acids, any length, any order) and denaturation (B1.2.5). Step 3 is split: the sequence itself is met in B1.2.4 (core), but the term <em>primary structure</em> and how the sequence decides the 3D shape (B1.2.7) are <strong>AHL</strong>. Steps 4 to 7 are <strong>AHL</strong> (HL only).</p>
<ol>
<li>Amino acid (this section)</li>
<li>Peptide bond: joining amino acids</li>
<li>Primary structure: the sequence (variety of sequences: core; how it decides shape: AHL)</li>
<li>Secondary structure: helices and sheets (AHL)</li>
<li>Tertiary structure: the folded chain (AHL)</li>
<li>Quaternary structure: several chains together (AHL)</li>
<li>Form and function: globular and fibrous proteins (AHL)</li>
</ol>`,
        ja: `<p>タンパク質は<strong>アミノ酸 (amino acid)</strong>という小さな単位からできています。すべてのアミノ酸は同じ設計図をもちます。中心に炭素原子が1つあり、これを<strong>α炭素 (alpha carbon)</strong>といいます。α炭素には次の4つが結合しています。</p>
<ul>
<li><strong>アミノ基 (amine group)</strong>、–NH<sub>2</sub>。</li>
<li><strong>カルボキシ基 (carboxyl group)</strong>、–COOH。</li>
<li><strong>水素原子</strong>、–H。</li>
<li><strong>R基 (R-group)</strong>。変わる部分です。</li>
</ul>
<p>アミノ基、α炭素、カルボキシ基はどのアミノ酸でも同じです。アミノ酸がつながると、この部分が<strong>骨格 (backbone)</strong>になります。アミノ酸ごとに変わるのはR基だけです。この変わる部分が、アミノ酸を、そして後にはタンパク質を、互いに違うものにします。</p>
<p><em>たとえ：</em>レゴブロックを考えてください。どのブロックも、次のブロックとはめ込める下側の突起は同じです（骨格）。上側の色や形はブロックごとに違います（R基）。</p>
<div class="note"><p>一般化したアミノ酸の図を<strong>描ける (draw)</strong>ようにしましょう。中心にα炭素、そこにアミノ基、カルボキシ基、H、Rがつきます。個々のアミノ酸の名前や構造を覚える必要はありません。例外は、後で出てくるシステイン (cysteine)（ジスルフィド結合）だけです。</p></div>
<p><strong>この単元の階段。</strong>一段ずつ登ります。1と2は共通（SLとHL）です。可能な配列の多様性（B1.2.4：20種類のアミノ酸、任意の長さ、任意の順序）と変性 (B1.2.5) も共通です。3は分かれます。配列そのものはB1.2.4（共通）で学びますが、<em>一次構造 (primary structure)</em>という用語と、配列が立体構造を決めるしくみ (B1.2.7) は<strong>AHL</strong>です。4〜7は<strong>AHL</strong>（HLのみ）です。</p>
<ol>
<li>アミノ酸（この節）</li>
<li>ペプチド結合 (peptide bond)：アミノ酸をつなぐ</li>
<li>一次構造 (primary structure)：配列（配列の多様性は共通、形を決めるしくみはAHL）</li>
<li>二次構造 (secondary structure)：らせんとシート（AHL）</li>
<li>三次構造 (tertiary structure)：折りたたまれた鎖（AHL）</li>
<li>四次構造 (quaternary structure)：複数の鎖の集まり（AHL）</li>
<li>形と働き：球状タンパク質と繊維状タンパク質（AHL）</li>
</ol>`,
        zh: `<p>蛋白質由稱為<strong>氨基酸 (amino acid)</strong>的小單位組成。所有氨基酸都有相同的結構。中央有一個碳原子，稱為<strong>α-碳 (alpha carbon)</strong>。它連接着四樣東西：</p>
<ul>
<li><strong>氨基 (amine group)</strong>，–NH<sub>2</sub>；</li>
<li><strong>羧基 (carboxyl group)</strong>，–COOH；</li>
<li><strong>氫原子</strong>，–H；</li>
<li><strong>R 基 (R-group)</strong>，即可變的部分。</li>
</ul>
<p>氨基、α-碳和羧基在每種氨基酸中都相同。氨基酸連接後，這部分就成為<strong>骨架 (backbone)</strong>。氨基酸之間只有 R 基不同。就是這個可變部分，令氨基酸以至其後的蛋白質各不相同。</p>
<p><em>比喻：</em>想像一塊積木。每塊積木底部的凸點都一樣，可以扣在下一塊上（骨架）。頂部的顏色和形狀則每塊不同（R 基）。</p>
<div class="note"><p>你須要懂得<strong>繪畫 (draw)</strong>這個通用氨基酸：中央是α-碳，連接氨基、羧基、H 和 R。你不用認識任何個別氨基酸的名稱或結構。唯一例外是之後會出現的半胱氨酸 (cysteine)（二硫鍵）。</p></div>
<p><strong>本課題的樓梯。</strong>我們一步一步向上走。第 1 和第 2 步屬核心內容（SL 和 HL 都要學）。可能序列的多樣性（B1.2.4：20 種氨基酸、任何長度、任何次序）和變性 (B1.2.5) 也是核心。第 3 步分兩部分：序列本身在 B1.2.4（核心）學習，但<em>一級結構 (primary structure)</em>這個名稱，以及序列如何決定三維形狀 (B1.2.7)，屬<strong>AHL</strong>。第 4 至 7 步屬<strong>AHL</strong>（只限 HL）。</p>
<ol>
<li>氨基酸（本節）</li>
<li>肽鍵 (peptide bond)：把氨基酸連起來</li>
<li>一級結構 (primary structure)：序列（序列的多樣性屬核心；如何決定形狀屬 AHL）</li>
<li>二級結構 (secondary structure)：螺旋和摺板（AHL）</li>
<li>三級結構 (tertiary structure)：摺疊好的長鏈（AHL）</li>
<li>四級結構 (quaternary structure)：多條長鏈組合（AHL）</li>
<li>形態與功能：球狀蛋白質和纖維狀蛋白質（AHL）</li>
</ol>`
      },
      examTip: {
        en: "In a drawing, show the alpha carbon with all four attachments, and label the R-group as 'variable'. A bare R without saying it varies loses the idea the examiner wants.",
        ja: "図では、α炭素に4つすべてがつくように描き、R基に「変わる部分」と書き添えましょう。Rと書くだけで「変わる」ことに触れないと、採点者が求める考えが伝わりません。",
        zh: "繪圖時，α-碳要連接全部四樣東西，並標明 R 基是「可變」的。只寫 R 而沒有說明它會變，就欠了考官想要的重點。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.2 */
    {
      ref: "B1.2.2",
      ahl: false,
      heading: {
        en: "Step 2: the peptide bond — joining amino acids by condensation",
        ja: "ステップ2：ペプチド結合 ― 縮合でアミノ酸をつなぐ",
        zh: "第 2 步：肽鍵 ― 以縮合反應連接氨基酸"
      },
      widget: "peptide-builder",
      body: {
        en: `<p>Two amino acids join in a <strong>condensation reaction</strong>. A condensation reaction joins two molecules and releases a small molecule, here <strong>water</strong>.</p>
<ul>
<li>The –OH from the carboxyl group of amino acid 1 is removed.</li>
<li>An –H from the amine group of amino acid 2 is removed.</li>
<li>These make H<sub>2</sub>O, which leaves.</li>
<li>The carbon of amino acid 1 now bonds to the nitrogen of amino acid 2. This C–N covalent bond is the <strong>peptide bond</strong>.</li>
</ul>
<p>Word equation: <strong>amino acid + amino acid → dipeptide + water</strong></p>
<p>Two amino acids make a <strong>dipeptide</strong>. Adding a third makes a tripeptide, and so on. A long chain is a <strong>polypeptide</strong>. Each extra amino acid is added by another condensation reaction, so one water molecule is released for every peptide bond made. In cells, ribosomes build polypeptides this way.</p>
<p>The reverse reaction is <strong>hydrolysis</strong>: water is added and the peptide bond is broken. This is how proteins are digested.</p>
<p><em>Analogy:</em> linking paper clips, or railway carriages. Each coupling is strong and permanent (covalent). It only comes apart if something, like a digestive enzyme, specifically unhooks it.</p>
<div class="note"><p><strong>Clearing up a classic mix-up.</strong> The peptide bond is a <em>strong covalent bond in the backbone</em>. It is not a hydrogen bond and it is not a disulfide bond. Remember: <em>peptide bonds hold the amino acid sequence together</em> (at HL this sequence is called the primary structure).</p></div>
<p>The guide expects you to model this reaction with molecular models (physical or digital), write the word equation, and draw a generalized dipeptide. In your drawing, the peptide bond is the C–N link between the two alpha-carbon units, with one carbon double-bonded to oxygen (C=O), and the nitrogen carrying an H.</p>`,
        ja: `<p>2つのアミノ酸は<strong>縮合反応 (condensation reaction)</strong>で結合します。縮合反応とは、2つの分子がつながるときに小さな分子がはずれる反応で、ここでは<strong>水</strong>がはずれます。</p>
<ul>
<li>アミノ酸1のカルボキシ基から –OH がはずれます。</li>
<li>アミノ酸2のアミノ基から –H がはずれます。</li>
<li>この2つが H<sub>2</sub>O になって出ていきます。</li>
<li>アミノ酸1の炭素とアミノ酸2の窒素が結合します。このC–N共有結合が<strong>ペプチド結合 (peptide bond)</strong>です。</li>
</ul>
<p>言葉の式：<strong>アミノ酸 + アミノ酸 → ジペプチド + 水</strong></p>
<p>アミノ酸2個で<strong>ジペプチド (dipeptide)</strong>ができます。3個目を加えるとトリペプチド、というように続きます。長い鎖は<strong>ポリペプチド (polypeptide)</strong>です。アミノ酸を1つ加えるたびに縮合反応が起こるので、ペプチド結合1つにつき水が1分子できます。細胞では、リボソームがこのようにポリペプチドをつくります。</p>
<p>逆の反応は<strong>加水分解 (hydrolysis)</strong>です。水が加わってペプチド結合が切れます。タンパク質の消化はこの反応です。</p>
<p><em>たとえ：</em>クリップや列車の連結に似ています。1つ1つの連結は強く、ずっと保たれます（共有結合）。消化酵素のように、それを狙ってはずすものがなければ、はずれません。</p>
<div class="note"><p><strong>よくある混同を整理します。</strong>ペプチド結合は骨格にある<em>強い共有結合</em>です。水素結合でも、ジスルフィド結合でもありません。覚え方：<em>ペプチド結合がアミノ酸の配列をつなぎとめる</em>（HLではこの配列を一次構造 (primary structure) とよびます）。</p></div>
<p>IBのガイドでは、分子模型（実物またはデジタル）でこの反応を再現し、言葉の式を書き、一般化したジペプチドを描くことが求められます。図では、ペプチド結合は2つのα炭素ユニットをつなぐC–N結合で、炭素は酸素と二重結合（C=O）、窒素にはHがついています。</p>`,
        zh: `<p>兩個氨基酸以<strong>縮合反應 (condensation reaction)</strong>連接。縮合反應是把兩個分子連起來，同時放出一個小分子，這裏放出的是<strong>水</strong>。</p>
<ul>
<li>氨基酸 1 的羧基失去 –OH。</li>
<li>氨基酸 2 的氨基失去一個 –H。</li>
<li>它們結合成 H<sub>2</sub>O 並離開。</li>
<li>氨基酸 1 的碳原子與氨基酸 2 的氮原子連接。這個 C–N 共價鍵就是<strong>肽鍵 (peptide bond)</strong>。</li>
</ul>
<p>文字方程式：<strong>氨基酸 + 氨基酸 → 二肽 + 水</strong></p>
<p>兩個氨基酸形成<strong>二肽 (dipeptide)</strong>。再加第三個就成三肽，如此類推。很長的鏈稱為<strong>多肽 (polypeptide)</strong>。每加入一個氨基酸就進行一次縮合反應，所以每形成一個肽鍵就釋出一個水分子。在細胞內，核糖體就是這樣建造多肽的。</p>
<p>相反的反應是<strong>水解 (hydrolysis)</strong>：加入水，肽鍵斷開。蛋白質的消化就是這樣進行。</p>
<p><em>比喻：</em>像把紙夾或火車車卡連起來。每個連接都牢固而持久（共價鍵）。除非有東西（例如消化酶）專門把它解開，否則不會分開。</p>
<div class="note"><p><strong>澄清一個典型混淆。</strong>肽鍵是骨架上的<em>強共價鍵</em>。它不是氫鍵，也不是二硫鍵。記住：<em>肽鍵把氨基酸序列連在一起</em>（HL 稱這個序列為一級結構 (primary structure)）。</p></div>
<p>IB 指引要求你用分子模型（實物或電腦）模擬此反應、寫出文字方程式，並繪畫通用二肽。繪圖時，肽鍵是連接兩個α-碳單位的 C–N 鍵，其中的碳與氧形成雙鍵 (C=O)，氮則帶有一個 H。</p>`
      },
      examTip: {
        en: "Always say 'condensation' AND 'water is released'. Marks are often lost for only drawing the bond.",
        ja: "「縮合」と「水が放出される」の両方を書きましょう。結合を描くだけでは点を落としやすいです。",
        zh: "一定要寫出「縮合」和「釋出水」兩項。只畫出鍵往往會失分。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.3 */
    {
      ref: "B1.2.3",
      ahl: false,
      heading: {
        en: "Essential and non-essential amino acids in the diet",
        ja: "食事に必要なアミノ酸：必須アミノ酸と非必須アミノ酸",
        zh: "飲食中所需的氨基酸：必需與非必需氨基酸"
      },
      body: {
        en: `<p>Humans can make some amino acids in their own cells, but not all of them.</p>
<ul>
<li><strong>Essential amino acids</strong> cannot be synthesized (made) by the body. They must be obtained from food.</li>
<li><strong>Non-essential amino acids</strong> can be made by the body from other amino acids.</li>
</ul>
<p>"Essential" does not mean "more important". All 20 are needed to build proteins. It only describes where they come from: the diet, or the body's own chemistry.</p>
<p><strong>Vegan diets.</strong> Animal foods usually supply all the essential amino acids in one go. Many single plant foods are low in one or more of them. A vegan therefore needs to plan carefully, for example by eating a variety of plant protein sources, so that every essential amino acid is still obtained.</p>
<div class="note"><p>You are <strong>not</strong> required to say which amino acids are essential or non-essential.</p></div>`,
        ja: `<p>人間は、アミノ酸の一部は自分の細胞でつくれますが、すべてはつくれません。</p>
<ul>
<li><strong>必須アミノ酸 (essential amino acids)</strong>は、体内で合成（つくること）できません。食べ物から取り入れる必要があります。</li>
<li><strong>非必須アミノ酸 (non-essential amino acids)</strong>は、体が他のアミノ酸からつくることができます。</li>
</ul>
<p>「必須」は「より重要」という意味ではありません。20種類すべてがタンパク質づくりに必要です。「必須」は入手先、つまり食事か体内の化学反応か、を表しているだけです。</p>
<p><strong>ビーガンの食事。</strong>動物性食品は、必須アミノ酸をふつう一度にすべて供給します。植物性食品は、1種類だけでは必須アミノ酸の一部が少ないことが多くあります。そのため、ビーガンは、さまざまな植物性タンパク源をとるなど、よく計画する必要があります。そうすれば、すべての必須アミノ酸をとることができます。</p>
<div class="note"><p>どのアミノ酸が必須か非必須かを答える必要は<strong>ありません</strong>。</p></div>`,
        zh: `<p>人類能在自己的細胞內製造部分氨基酸，但不是全部。</p>
<ul>
<li><strong>必需氨基酸 (essential amino acids)</strong>不能由身體合成（製造），必須從食物攝取。</li>
<li><strong>非必需氨基酸 (non-essential amino acids)</strong>可由身體利用其他氨基酸製造。</li>
</ul>
<p>「必需」並不是「較重要」的意思。建造蛋白質需要全部 20 種氨基酸。「必需」只是說明來源：是靠飲食，還是靠身體自己的化學反應。</p>
<p><strong>純素飲食。</strong>動物性食物通常一次過提供全部必需氨基酸。許多單一的植物性食物則缺少其中一種或多種。因此純素者須小心計劃，例如進食多種植物蛋白質來源，才可確保攝取到每一種必需氨基酸。</p>
<div class="note"><p>你<strong>不須要</strong>說出哪些氨基酸是必需或非必需的。</p></div>`
      }
    },

    /* ---------------------------------------------------------------- B1.2.4 */
    {
      ref: "B1.2.4",
      ahl: false,
      heading: {
        en: "Step 3 preview: an almost endless variety of polypeptides",
        ja: "ステップ3の予告：ほぼ無限のポリペプチドの種類",
        zh: "第 3 步預覽：近乎無限的多肽種類"
      },
      body: {
        en: `<p>Three facts together give huge variety:</p>
<ol>
<li><strong>20 different amino acids</strong> are coded for in the genetic code.</li>
<li>A peptide chain can have <strong>any number</strong> of amino acids, from a few to thousands.</li>
<li>The amino acids can be in <strong>any order</strong>.</li>
</ol>
<p><strong>The calculation.</strong> For a chain of <em>n</em> amino acids, the number of possible sequences is 20<sup><em>n</em></sup>.</p>
<ul>
<li>Dipeptide (n = 2): 20 × 20 = 20<sup>2</sup> = <strong>400</strong></li>
<li>Tripeptide (n = 3): 20<sup>3</sup> = <strong>8000</strong></li>
<li>10 amino acids: 20<sup>10</sup> ≈ <strong>1.0 × 10<sup>13</sup></strong> (about ten million million)</li>
<li>100 amino acids: 20<sup>100</sup> ≈ 1.3 × 10<sup>130</sup>, far more than the number of atoms in the observable universe</li>
</ul>
<p><em>Analogy:</em> a 20-letter alphabet and no limit on word length. The same letters make a short word or a book-length one, and a different order is a different word.</p>
<p>Real polypeptides show the range of lengths. Insulin has 51 amino acids in total, in two chains (21 + 30). Each haemoglobin chain has about 140 (141 or 146). One collagen chain has roughly 1000. The giant muscle protein titin has about 30 000 or more (you meet titin again in B3.3, at HL). In real life only a tiny fraction of the possible sequences exist, because genes code for particular ones.</p>`,
        ja: `<p>次の3つの事実が重なって、大きな多様性が生まれます。</p>
<ol>
<li>遺伝暗号でコードされるアミノ酸は<strong>20種類</strong>です。</li>
<li>ペプチド鎖には<strong>任意の数</strong>のアミノ酸をつなげられます。数個から数千個までです。</li>
<li>アミノ酸は<strong>どんな順序</strong>でも並べられます。</li>
</ol>
<p><strong>計算。</strong>アミノ酸<em>n</em>個の鎖で、可能な配列の数は 20<sup><em>n</em></sup> です。</p>
<ul>
<li>ジペプチド (n = 2)：20 × 20 = 20<sup>2</sup> = <strong>400</strong></li>
<li>トリペプチド (n = 3)：20<sup>3</sup> = <strong>8000</strong></li>
<li>アミノ酸10個：20<sup>10</sup> ≈ <strong>1.0 × 10<sup>13</sup></strong>（約10兆）</li>
<li>アミノ酸100個：20<sup>100</sup> ≈ 1.3 × 10<sup>130</sup>。観測可能な宇宙の原子の数よりはるかに多い数です。</li>
</ul>
<p><em>たとえ：</em>20文字のアルファベットがあり、単語の長さに制限がない状況です。同じ文字でも短い単語にも本1冊分にもなり、順序が違えば別の単語です。</p>
<p>実際のポリペプチドの長さの幅を見てみましょう。インスリン (insulin) は2本の鎖で合計51個のアミノ酸です（21個 + 30個）。ヘモグロビン (haemoglobin) の鎖は1本あたり約140個（141個または146個）です。コラーゲン (collagen) の鎖1本は約1000個です。筋肉の巨大なタンパク質タイチン (titin) は約3万個以上です（タイチンはHLのB3.3でまた出てきます）。現実には、遺伝子が特定の配列をコードするので、可能な配列のごく一部だけが存在します。</p>`,
        zh: `<p>以下三個事實合起來，就造成龐大的多樣性：</p>
<ol>
<li>遺傳密碼編碼<strong> 20 種不同的氨基酸</strong>。</li>
<li>肽鏈可以有<strong>任何數目</strong>的氨基酸，由數個至數千個不等。</li>
<li>氨基酸可以按<strong>任何次序</strong>排列。</li>
</ol>
<p><strong>計算。</strong>由 <em>n</em> 個氨基酸組成的鏈，可能的序列數目是 20<sup><em>n</em></sup>。</p>
<ul>
<li>二肽 (n = 2)：20 × 20 = 20<sup>2</sup> = <strong>400</strong></li>
<li>三肽 (n = 3)：20<sup>3</sup> = <strong>8000</strong></li>
<li>10 個氨基酸：20<sup>10</sup> ≈ <strong>1.0 × 10<sup>13</sup></strong>（約十萬億）</li>
<li>100 個氨基酸：20<sup>100</sup> ≈ 1.3 × 10<sup>130</sup>，遠多於可觀測宇宙中的原子數目。</li>
</ul>
<p><em>比喻：</em>有 20 個字母的字母表，而字的長度不設上限。同樣的字母可以組成短字，也可以組成一整本書那麼長的字，次序不同就是另一個字。</p>
<p>真實多肽的長度相差很大。胰島素 (insulin) 合共有 51 個氨基酸，分成兩條鏈（21 + 30 個）。血紅蛋白 (haemoglobin) 每條鏈約有 140 個（141 或 146 個）。膠原蛋白 (collagen) 的一條鏈約有一千個。巨大的肌肉蛋白質肌聯蛋白 (titin) 約有 3 萬個或以上（HL 的 B3.3 會再遇到肌聯蛋白）。實際上，只有可能序列中極少數真的存在，因為基因只編碼特定的序列。</p>`
      },
      examTip: {
        en: "For 'Calculate' questions, show the working: 20<sup>n</sup>, then the value. The base is 20 (types of amino acid) and the power is the chain length.",
        ja: "「計算 (Calculate)」では途中式を示しましょう：20<sup>n</sup>、その後に値です。底は20（アミノ酸の種類）、指数は鎖の長さです。",
        zh: "遇到「計算 (Calculate)」題要寫出步驟：先寫 20<sup>n</sup>，再寫數值。底數是 20（氨基酸的種類），指數是鏈的長度。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.5 */
    {
      ref: "B1.2.5",
      ahl: false,
      heading: {
        en: "Denaturation: what pH and temperature do to protein shape",
        ja: "変性：pHと温度がタンパク質の形に与える影響",
        zh: "變性：pH 值和溫度對蛋白質形狀的影響"
      },
      widget: "denaturation",
      body: {
        en: `<p>A protein's function depends on its three-dimensional shape. <strong>Denaturation</strong> is a change in that shape, caused by something like heat or extreme pH. After denaturation the protein usually can no longer do its job. An enzyme's active site, for example, no longer fits its substrate. Denaturation is usually permanent: the protein does not return to its original shape when conditions return to normal (a boiled egg white does not turn clear again).</p>
<p><strong>Temperature.</strong> Higher temperature gives atoms more kinetic energy, so they vibrate more. Above a certain point the vibrations break the weak interactions that hold the protein in shape, and the chain unfolds.</p>
<p><strong>pH.</strong> A very high or low pH changes the hydrogen-ion concentration around the protein. This changes the electrical charges on some groups in the protein. Charge-based attractions between parts of the chain are lost, so the shape changes.</p>
<div class="note"><p><strong>The key point.</strong> Denaturation breaks the <em>weak</em> bonds and interactions that hold the folded shape (hydrogen bonds, ionic bonds, hydrophobic interactions). It does <strong>not</strong> break the <strong>peptide bonds</strong>. The amino acid sequence (at HL called the primary structure) stays the same. The chain is not cut. It unfolds, like a tangled string being pulled loose, not a string being cut.</p></div>
<p><em>Analogy:</em> a folded paper aeroplane. If you crush it, it will not fly (function lost), yet it is still the same sheet of paper (peptide bonds intact).</p>
<p>At SL, you only need to know that pH and temperature affect protein structure and what denaturation means. The next AHL sections explain exactly which bonds hold each level, so you can say precisely what is lost.</p>`,
        ja: `<p>タンパク質の働きは、立体的な形に依存します。<strong>変性 (denaturation)</strong>とは、熱や極端なpHなどによってその形が変わることです。変性すると、たいていは本来の働きができなくなります。たとえば酵素の活性部位が基質に合わなくなります。変性はふつう元に戻りません。条件が元に戻っても、タンパク質は元の形に戻らないのです（ゆで卵の白身は透明に戻りません）。</p>
<p><strong>温度。</strong>温度が上がると原子の運動エネルギーが増え、より激しく振動します。ある温度を超えると、その振動がタンパク質の形を保っている弱い相互作用を壊し、鎖がほどけます。</p>
<p><strong>pH。</strong>pHが極端に高いか低いと、タンパク質の周りの水素イオン濃度が変わります。すると、タンパク質のいくつかの基の電荷が変わります。鎖の離れた部分どうしの電荷による引き合いが失われ、形が変わります。</p>
<div class="note"><p><strong>重要なポイント。</strong>変性で切れるのは、折りたたまれた形を保つ<em>弱い</em>結合や相互作用（水素結合、イオン結合、疎水性相互作用）です。<strong>ペプチド結合は切れません</strong>。アミノ酸の配列（HLでは一次構造とよぶ）は変わりません。鎖は切断されるのではなく、からまったひもが引っぱられてほどけるように、ほどけるのです。</p></div>
<p><em>たとえ：</em>折った紙飛行機です。ぐしゃっとつぶすと飛びません（働きの喪失）が、紙そのものは同じ1枚です（ペプチド結合はそのまま）。</p>
<p>SLでは、pHと温度がタンパク質の構造に影響することと、変性の意味を知っていれば十分です。次のAHLの節で、各段階の構造をどの結合が支えているかを説明するので、何が失われるかを正確に言えるようになります。</p>`,
        zh: `<p>蛋白質的功能取決於它的三維形狀。<strong>變性 (denaturation)</strong>是指這個形狀因高溫或極端 pH 值等因素而改變。變性後，蛋白質通常不能再發揮功能。例如酶的活性位點不再配合底物。變性通常是永久的：即使條件回復正常，蛋白質也不會回復原來的形狀（煮熟的蛋白不會變回透明）。</p>
<p><strong>溫度。</strong>溫度上升，原子的動能增加，振動更劇烈。超過某個溫度後，振動會破壞維持蛋白質形狀的弱相互作用，長鏈便展開。</p>
<p><strong>pH 值。</strong>過高或過低的 pH 值會改變蛋白質周圍的氫離子濃度，令蛋白質中某些基團的電荷改變。長鏈各部分之間依靠電荷的吸引力因而消失，形狀就改變了。</p>
<div class="note"><p><strong>重點。</strong>變性破壞的是維持摺疊形狀的<em>弱</em>鍵和相互作用（氫鍵、離子鍵、疏水相互作用），<strong>不會破壞肽鍵</strong>。氨基酸序列（HL 稱為一級結構）保持不變。長鏈不是被切斷，而是展開，就像纏結的繩被拉鬆，而不是繩被剪斷。</p></div>
<p><em>比喻：</em>一架摺好的紙飛機。把它揉皺，它就飛不了（功能喪失），但它仍然是同一張紙（肽鍵完好）。</p>
<p>在 SL 階段，你只需知道 pH 值和溫度會影響蛋白質結構，以及變性的意思。之後的 AHL 部分會說明每一級結構由哪些鍵維持，讓你能準確說出失去了甚麼。</p>`
      },
      examTip: {
        en: "Never write 'the protein breaks down' or 'the enzyme dies'. Write 'the weak bonds (hydrogen, ionic) are broken, so the shape of the active site changes'.",
        ja: "「タンパク質が分解する」「酵素が死ぬ」とは書かないこと。「弱い結合（水素結合、イオン結合）が切れ、活性部位の形が変わる」と書きましょう。",
        zh: "不要寫「蛋白質分解」或「酶死亡」。要寫「弱鍵（氫鍵、離子鍵）被破壞，令活性位點的形狀改變」。"
      }
    },
    /* ---------------------------------------------------------------- B1.2.6 */
    {
      ref: "B1.2.6",
      ahl: true,
      heading: {
        en: "R-groups: the chemical variety behind protein diversity",
        ja: "R基：タンパク質の多様性のもとになる化学的な違い",
        zh: "R 基：蛋白質多樣性背後的化學差異"
      },
      body: {
        en: `<p>The 20 amino acids differ only in their R-groups, but the R-groups are chemically very different. Their properties decide how an assembled polypeptide behaves. There are two main kinds:</p>
<ul>
<li><strong>Hydrophobic</strong> ("water-fearing") R-groups are non-polar. They do not mix well with water.</li>
<li><strong>Hydrophilic</strong> ("water-loving") R-groups mix well with water. They are of two sorts:
  <ul>
  <li><strong>Polar</strong>: they have partly positive and partly negative regions but no full charge.</li>
  <li><strong>Charged</strong>: they carry a full charge. <strong>Acidic</strong> R-groups can release H<sup>+</sup> and become negative. <strong>Basic</strong> R-groups can pick up H<sup>+</sup> and become positive.</li>
  </ul>
</li>
</ul>
<p>So the classes are: non-polar (hydrophobic), polar, acidic and basic.</p>
<p><em>Analogy:</em> think of the R-groups as a set of different magnets, sticky pads and oil droplets along a string. Where they are along the string, and what they stick to, will decide the final shape.</p>
<p>Different R-groups give different shapes and, because shape decides function, different functions. This chemical variety is the reason proteins can do so many jobs: catalysing reactions, transport, support, signalling and more.</p>
<div class="note"><p>You do <strong>not</strong> need specific examples of R-groups or amino acids. You need to understand that R-groups decide a polypeptide's properties, and know the classes above.</p></div>`,
        ja: `<p>20種類のアミノ酸はR基だけが違いますが、R基の化学的性質は大きく異なります。その性質が、できあがったポリペプチドの振る舞いを決めます。大きく2種類あります。</p>
<ul>
<li><strong>疎水性 (hydrophobic)</strong>（「水をきらう」）のR基は無極性です。水とよく混ざりません。</li>
<li><strong>親水性 (hydrophilic)</strong>（「水を好む」）のR基は水とよく混ざります。これには2種類あります。
  <ul>
  <li><strong>極性 (polar)</strong>：部分的に正と負の領域がありますが、完全な電荷はもちません。</li>
  <li><strong>電荷をもつもの (charged)</strong>：完全な電荷をもちます。<strong>酸性 (acidic)</strong>のR基はH<sup>+</sup>を放出して負に帯電します。<strong>塩基性 (basic)</strong>のR基はH<sup>+</sup>を受け取って正に帯電します。</li>
  </ul>
</li>
</ul>
<p>つまり分類は、無極性（疎水性）、極性、酸性、塩基性です。</p>
<p><em>たとえ：</em>R基を、ひもに並んだ種類の違う磁石、粘着パッド、油滴と考えてください。ひもの上のどこにあるか、何とくっつくかが、最終的な形を決めます。</p>
<p>R基が違えば形が違い、形が働きを決めるので、働きも違います。この化学的な多様性のおかげで、タンパク質は反応の触媒、輸送、支持、情報伝達など、多くの役割を担えます。</p>
<div class="note"><p>R基やアミノ酸の具体例は必要<strong>ありません</strong>。R基がポリペプチドの性質を決めることを理解し、上の分類を知っていれば十分です。</p></div>`,
        zh: `<p>20 種氨基酸只在 R 基上有分別，但 R 基在化學上差異很大。它們的性質決定了組合而成的多肽的行為。主要有兩類：</p>
<ul>
<li><strong>疏水性 (hydrophobic)</strong>（「怕水」）的 R 基是非極性的，不容易與水混合。</li>
<li><strong>親水性 (hydrophilic)</strong>（「愛水」）的 R 基容易與水混合，又分兩種：
  <ul>
  <li><strong>極性 (polar)</strong>：有部分帶正電和部分帶負電的區域，但沒有完整的電荷。</li>
  <li><strong>帶電荷 (charged)</strong>：帶有完整的電荷。<strong>酸性 (acidic)</strong>的 R 基可釋出 H<sup>+</sup> 而帶負電。<strong>鹼性 (basic)</strong>的 R 基可接收 H<sup>+</sup> 而帶正電。</li>
  </ul>
</li>
</ul>
<p>所以分類是：非極性（疏水性）、極性、酸性和鹼性。</p>
<p><em>比喻：</em>把 R 基想像成一條繩上不同的磁石、黏貼墊和油滴。它們在繩上的位置，以及它們吸附甚麼，就決定最終的形狀。</p>
<p>R 基不同，形狀就不同；形狀決定功能，所以功能也不同。這種化學多樣性令蛋白質能擔任許多工作：催化反應、運輸、支撐、傳遞信號等。</p>
<div class="note"><p>你<strong>不須要</strong>認識具體的 R 基或氨基酸例子。你須要明白 R 基決定多肽的性質，並認識上述分類。</p></div>`
      },
      examTip: {
        en: "Use the right linking words: R-groups are hydrophobic or hydrophilic; hydrophilic ones are polar or charged; charged ones are acidic or basic.",
        ja: "分類の関係を正しく書きましょう。R基は疎水性か親水性で、親水性は極性か電荷をもつもの、電荷をもつものは酸性か塩基性です。",
        zh: "要用正確的分類關係：R 基是疏水性或親水性；親水性的分極性或帶電荷；帶電荷的分酸性或鹼性。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.7 */
    {
      ref: "B1.2.7",
      ahl: true,
      heading: {
        en: "Step 3: primary structure — the sequence decides the shape",
        ja: "ステップ3：一次構造 ― 配列が形を決める",
        zh: "第 3 步：一級結構 ― 序列決定形狀"
      },
      widget: "protein-levels",
      body: {
        en: `<p>The <strong>primary structure</strong> is the sequence of amino acids in a polypeptide, joined by peptide bonds. It is set by the gene that codes for the protein.</p>
<p>The sequence matters because it also decides the R-group at every position. The R-groups then decide which interactions can form (next steps). So:</p>
<ul>
<li>the <em>order</em> of amino acids, and</li>
<li>the <em>exact position</em> of each one</li>
</ul>
<p>together determine the three-dimensional shape. Because the sequence is fixed by the gene, the same polypeptide folds into the same shape every time. Proteins are very complex, yet their structures are <strong>precise, predictable and repeatable</strong>.</p>
<p><em>Analogy:</em> a recipe (or a line of beads with a fixed colour order). Same ingredients in the same order give the same dish every time. Change the order, or swap one ingredient, and you may get something different. Changing even a single amino acid can sometimes alter the shape and function of a protein. A well-known example (not required by the guide) is sickle-cell haemoglobin: one charged amino acid is replaced by a non-polar one, and the haemoglobin molecules then stick together into long fibres when oxygen is low.</p>
<p><strong>The big picture of the levels.</strong> Use the explorer above to move between levels. Each level builds on the one before it, and each has its own bonds:</p>
<table>
<tr><th>Level</th><th>What it is</th><th>Held together by</th></tr>
<tr><td>Primary</td><td>sequence of amino acids</td><td>peptide bonds (covalent)</td></tr>
<tr><td>Secondary</td><td>regular coils and pleats of the backbone</td><td>hydrogen bonds between backbone C=O and N–H groups</td></tr>
<tr><td>Tertiary</td><td>overall 3D fold of one polypeptide</td><td>interactions between R-groups</td></tr>
<tr><td>Quaternary</td><td>two or more polypeptides together</td><td>R-group interactions between chains (and sometimes a non-protein group)</td></tr>
</table>`,
        ja: `<p><strong>一次構造 (primary structure)</strong>は、ポリペプチドのアミノ酸の配列で、ペプチド結合でつながっています。タンパク質をコードする遺伝子によって決まります。</p>
<p>配列が重要なのは、各位置のR基も決めるからです。R基が、どの相互作用ができるかを決めます（次のステップ）。つまり、</p>
<ul>
<li>アミノ酸の<em>順序</em>と、</li>
<li>それぞれの<em>正確な位置</em></li>
</ul>
<p>が合わさって立体構造を決めます。配列は遺伝子で決まっているので、同じポリペプチドはいつも同じ形に折りたたまれます。タンパク質は非常に複雑ですが、その構造は<strong>精密で、予測でき、再現できます</strong>。</p>
<p><em>たとえ：</em>レシピ（または色の順序が決まったビーズの列）です。同じ材料を同じ順序で使えば、毎回同じ料理ができます。順序を変えたり、材料を1つ替えたりすれば、違うものになるかもしれません。アミノ酸が1つ変わるだけで、タンパク質の形や働きが変わることがあります。よく知られた例（ガイドでは必須ではありません）が鎌状赤血球症のヘモグロビン (sickle-cell haemoglobin) です。電荷をもつアミノ酸1つが無極性のアミノ酸に置き換わり、酸素が少ないとヘモグロビン分子どうしがくっついて長い繊維になります。</p>
<p><strong>構造の段階の全体像。</strong>上の探索ツールで段階を行き来してみましょう。各段階は前の段階の上に築かれ、段階ごとに働く結合が違います。</p>
<table>
<tr><th>段階</th><th>内容</th><th>何で保たれるか</th></tr>
<tr><td>一次 (primary)</td><td>アミノ酸の配列</td><td>ペプチド結合（共有結合）</td></tr>
<tr><td>二次 (secondary)</td><td>骨格の規則的なコイルとひだ</td><td>骨格のC=OとN–Hの間の水素結合</td></tr>
<tr><td>三次 (tertiary)</td><td>1本のポリペプチド全体の立体的な折りたたみ</td><td>R基どうしの相互作用</td></tr>
<tr><td>四次 (quaternary)</td><td>2本以上のポリペプチドの集まり</td><td>鎖どうしのR基の相互作用（タンパク質以外の基を含むこともある）</td></tr>
</table>`,
        zh: `<p><strong>一級結構 (primary structure)</strong>是多肽中氨基酸的序列，由肽鍵連接。它由編碼該蛋白質的基因決定。</p>
<p>序列之所以重要，是因為它同時決定了每個位置上的 R 基。R 基再決定能形成哪些相互作用（見下面的步驟）。所以：</p>
<ul>
<li>氨基酸的<em>次序</em>，以及</li>
<li>每個氨基酸的<em>準確位置</em></li>
</ul>
<p>一起決定三維形狀。由於序列由基因固定，同一條多肽每次都會摺疊成相同的形狀。蛋白質雖然十分複雜，但它們的結構<strong>精確、可預測、可重複</strong>。</p>
<p><em>比喻：</em>像一份食譜（或一串顏色次序固定的珠子）。相同的材料、相同的次序，每次都做出相同的菜式。改變次序或換掉一種材料，結果可能不同。即使只改變一個氨基酸，有時也會改變蛋白質的形狀和功能。一個著名的例子（指引並不要求）是鐮狀細胞血紅蛋白 (sickle-cell haemoglobin)：一個帶電荷的氨基酸被一個非極性的氨基酸取代，於是在缺氧時血紅蛋白分子會黏在一起，形成長纖維。</p>
<p><strong>各級結構的概覽。</strong>利用上面的探索工具在各級之間切換。每一級都建基於前一級，而且各有不同的鍵：</p>
<table>
<tr><th>級別</th><th>內容</th><th>由甚麼維持</th></tr>
<tr><td>一級 (primary)</td><td>氨基酸序列</td><td>肽鍵（共價鍵）</td></tr>
<tr><td>二級 (secondary)</td><td>骨架有規律的螺旋和摺疊</td><td>骨架上 C=O 與 N–H 之間的氫鍵</td></tr>
<tr><td>三級 (tertiary)</td><td>一條多肽的整體三維摺疊</td><td>R 基之間的相互作用</td></tr>
<tr><td>四級 (quaternary)</td><td>兩條或以上多肽組合</td><td>各鏈之間 R 基的相互作用（有時還有非蛋白質基團）</td></tr>
</table>`
      }
    },

    /* ---------------------------------------------------------------- B1.2.8 */
    {
      ref: "B1.2.8",
      ahl: true,
      widget: "mol3d-protein",
      widgetOptions: {preset: "helix-sheet"},
      heading: {
        en: "Step 4: secondary structure — coiling and pleating of the backbone",
        ja: "ステップ4：二次構造 ― 骨格のコイル状とひだ状の折れ曲がり",
        zh: "第 4 步：二級結構 ― 骨架的螺旋和摺疊"
      },
      body: {
        en: `<p>The first folding happens in the <strong>backbone</strong> of the chain. Along the backbone, the pattern repeats: –N–C–C–N–C–C– (amine N, alpha carbon, carboxyl C). In every peptide bond there is a C=O (slightly negative oxygen) and an N–H (slightly positive hydrogen).</p>
<p><strong>Why do hydrogen bonds form here?</strong> The oxygen of a C=O in one part of the backbone is attracted to the hydrogen of an N–H in another part. This is a <strong>hydrogen bond</strong>. Since every amino acid has the same backbone, these bonds form at <strong>regular positions</strong>, no matter which R-group is attached. That regularity makes two repeating shapes:</p>
<ul>
<li><strong>Alpha helix (α-helix)</strong>: the chain coils like a spiral staircase or a telephone cord. Each C=O bonds with an N–H a few amino acids further along the same chain. The bonds run parallel to the length of the coil.</li>
<li><strong>Beta-pleated sheet (β-pleated sheet)</strong>: parts of the chain lie side by side and are zig-zag folded, like a pleated skirt or paper fan. C=O and N–H groups on neighbouring strands form the hydrogen bonds between them.</li>
</ul>
<p>The R-groups are <strong>not</strong> part of these bonds. They point outwards from the helix or sheet.</p>
<div class="note"><p><strong>Remember:</strong> secondary structure = hydrogen bonds between <em>backbone</em> C=O and N–H groups. Many bonds, regularly spaced, each one weak, together stable. Tertiary structure (next) uses the <em>R-groups</em>.</p></div>
<p><em>Analogy:</em> a spring (α-helix) and a folded paper fan (β-pleated sheet). Both are regular shapes made by repeating the same fold, and a lot of weak "Velcro" contacts hold them in shape.</p>`,
        ja: `<p>最初の折りたたみは、鎖の<strong>骨格 (backbone)</strong>で起こります。骨格に沿って、–N–C–C–N–C–C–（アミノ基のN、α炭素、カルボキシ基のC）という並びが繰り返されます。どのペプチド結合にも、C=O（酸素がわずかに負）とN–H（水素がわずかに正）があります。</p>
<p><strong>なぜここで水素結合ができるのか。</strong>骨格のある部分のC=Oの酸素が、別の部分のN–Hの水素に引きつけられます。これが<strong>水素結合 (hydrogen bond)</strong>です。どのアミノ酸も骨格は同じなので、この結合は、どんなR基がついていても<strong>規則的な位置</strong>にできます。この規則性が、繰り返しの形を2つつくります。</p>
<ul>
<li><strong>αヘリックス (alpha helix)</strong>：鎖がらせん階段や電話のコードのように巻きます。各C=Oは、同じ鎖の数個先のアミノ酸のN–Hと結合します。結合はコイルの長さの方向に並びます。</li>
<li><strong>βシート (beta-pleated sheet)</strong>：鎖の複数の部分が横に並び、ジグザグに折れ曲がります。プリーツスカートや扇子のようです。となり合う鎖のC=OとN–Hの間に水素結合ができます。</li>
</ul>
<p>R基はこれらの結合には<strong>関わりません</strong>。R基はヘリックスやシートの外側に向かって突き出ています。</p>
<div class="note"><p><strong>覚えておこう：</strong>二次構造 = <em>骨格</em>のC=OとN–Hの間の水素結合。数多く、規則的な間隔で、1つ1つは弱いが、全体では安定です。三次構造（次の節）は<em>R基</em>を使います。</p></div>
<p><em>たとえ：</em>ばね（αヘリックス）と折りたたんだ扇子（βシート）です。どちらも同じ折り方の繰り返しでできる規則的な形で、たくさんの弱い「面ファスナー」のような接触が形を保っています。</p>`,
        zh: `<p>第一次摺疊發生在長鏈的<strong>骨架 (backbone)</strong>上。沿着骨架，形式不斷重複：–N–C–C–N–C–C–（氨基的 N、α-碳、羧基的 C）。每個肽鍵都有一個 C=O（氧帶輕微負電）和一個 N–H（氫帶輕微正電）。</p>
<p><strong>為甚麼這裏會形成氫鍵？</strong>骨架某一部分 C=O 的氧原子，會被另一部分 N–H 的氫原子吸引，形成<strong>氫鍵 (hydrogen bond)</strong>。由於每個氨基酸的骨架都相同，不論連着哪種 R 基，這些鍵都在<strong>有規律的位置</strong>形成。這種規律產生兩種重複的形狀：</p>
<ul>
<li><strong>α螺旋 (alpha helix)</strong>：長鏈像螺旋樓梯或電話線般盤繞。每個 C=O 與同一條鏈上相隔數個氨基酸的 N–H 形成氫鍵。氫鍵沿着螺旋的長度方向排列。</li>
<li><strong>β摺板 (beta-pleated sheet)</strong>：鏈的幾個部分並排，並呈鋸齒狀摺疊，像百摺裙或摺扇。相鄰鏈上的 C=O 與 N–H 之間形成氫鍵。</li>
</ul>
<p>R 基<strong>不參與</strong>這些鍵，它們從螺旋或摺板向外伸出。</p>
<div class="note"><p><strong>記住：</strong>二級結構 = <em>骨架</em>上 C=O 與 N–H 之間的氫鍵。數量多、間隔有規律、每個都很弱，但合起來很穩定。三級結構（下一節）則用到 <em>R 基</em>。</p></div>
<p><em>比喻：</em>彈簧（α螺旋）和摺好的摺扇（β摺板）。兩者都是重複同一種摺法而成的規則形狀，由大量微弱的「魔術貼」式接觸維持形狀。</p>`
      },
      examTip: {
        en: "Name the groups: 'hydrogen bonds between the C=O of one amino acid and the N–H of another in the polypeptide backbone'. Just 'hydrogen bonds' is too vague for full marks.",
        ja: "基の名前を書きましょう：「ポリペプチドの骨格で、あるアミノ酸のC=Oと別のアミノ酸のN–Hの間にできる水素結合」。「水素結合」だけでは満点になりにくいです。",
        zh: "要寫出基團名稱：「多肽骨架上，一個氨基酸的 C=O 與另一個氨基酸的 N–H 之間的氫鍵」。只寫「氫鍵」太籠統，拿不到全部分數。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.9 */
    {
      ref: "B1.2.9",
      ahl: true,
      heading: {
        en: "Step 5: tertiary structure — R-groups fold the whole chain",
        ja: "ステップ5：三次構造 ― R基が鎖全体を折りたたむ",
        zh: "第 5 步：三級結構 ― R 基令整條長鏈摺疊"
      },
      widget: "protein-folding",
      body: {
        en: `<p>The <strong>tertiary structure</strong> is the final three-dimensional shape of <em>one</em> polypeptide (including any helices and sheets in it). It is held in place by interactions between the <strong>R-groups</strong>, which are different along the chain. Four types matter:</p>
<ol>
<li><strong>Hydrogen bonds</strong> between polar R-groups. Here the hydrogen bond is between R-groups, not backbone atoms.</li>
<li><strong>Ionic bonds</strong> between oppositely charged R-groups. An amine group in an R-group can pick up H<sup>+</sup> and become positive (–NH<sub>3</sub><sup>+</sup>). A carboxyl group in an R-group can lose H<sup>+</sup> and become negative (–COO<sup>–</sup>). A positive and a negative R-group then attract each other.</li>
<li><strong>Disulfide bonds</strong> (also called disulfide bridges): a <em>covalent</em> bond between the sulfur atoms of two <strong>cysteine</strong> R-groups, S–S. This is the only amino acid you need to name. It is much stronger than the other three.</li>
<li><strong>Hydrophobic interactions</strong> between non-polar R-groups. In water, non-polar R-groups clump together, away from the water around them. This is a tendency, not a true bond, but it is a major force that folds the chain.</li>
</ol>
<p><em>Analogy:</em> a long string of beads that each have different surfaces. Opposite magnets (ionic bonds) pull some together, Velcro patches (hydrogen bonds) hold others, staples (disulfide bonds, permanent) clip two distant beads, and oily beads huddle in the middle away from the water (hydrophobic interactions). The result is a compact, specific shape.</p>
<p><strong>Secondary versus tertiary hydrogen bonds</strong> (a classic confusion):</p>
<table>
<tr><th></th><th>Secondary structure</th><th>Tertiary structure</th></tr>
<tr><td>Hydrogen bond is between…</td><td>backbone C=O and N–H</td><td>polar R-groups (side groups)</td></tr>
<tr><td>Pattern</td><td>regular, repeating (helix, sheet)</td><td>irregular, depends on the sequence</td></tr>
<tr><td>Other bonds at this level</td><td>none</td><td>ionic, disulfide, hydrophobic interactions as well</td></tr>
</table>
<p><strong>Peptide bond versus disulfide bond:</strong> a peptide bond joins <em>neighbouring</em> amino acids in the backbone (C–N) and makes the primary structure. A disulfide bond is an S–S link between the R-groups of <em>two cysteines</em>, which may be far apart in the sequence, and helps fix the tertiary (or quaternary) structure.</p>
<p><strong>Strength.</strong> Hydrogen bonds, ionic bonds and hydrophobic interactions are weak individually, so heat and pH change can disrupt them. Covalent bonds (peptide and disulfide) are strong. This is why denaturation affects the weak interactions first.</p>
<div class="note"><p>You do <strong>not</strong> need to name which amino acids form hydrogen bonds, ionic bonds or hydrophobic interactions. Cysteine for disulfide bonds is the only name needed.</p></div>`,
        ja: `<p><strong>三次構造 (tertiary structure)</strong>は、<em>1本の</em>ポリペプチド（その中のヘリックスやシートを含む）の最終的な立体構造です。鎖に沿って異なる<strong>R基</strong>どうしの相互作用によって保たれます。重要なのは次の4種類です。</p>
<ol>
<li>極性のR基どうしの<strong>水素結合 (hydrogen bonds)</strong>。ここでの水素結合は、骨格の原子ではなくR基の間にできます。</li>
<li>反対の電荷をもつR基どうしの<strong>イオン結合 (ionic bonds)</strong>。R基にあるアミノ基はH<sup>+</sup>を受け取って正に帯電できます（–NH<sub>3</sub><sup>+</sup>）。R基にあるカルボキシ基はH<sup>+</sup>を放出して負に帯電できます（–COO<sup>–</sup>）。正と負のR基は引き合います。</li>
<li><strong>ジスルフィド結合 (disulfide bonds)</strong>（ジスルフィド架橋ともいう）：2つの<strong>システイン (cysteine)</strong>のR基の硫黄原子どうしの<em>共有</em>結合、S–Sです。名前を答える必要があるアミノ酸はこれだけです。他の3つよりずっと強い結合です。</li>
<li>無極性のR基どうしの<strong>疎水性相互作用 (hydrophobic interactions)</strong>。水の中では、無極性のR基は周りの水を避けて集まります。本当の結合ではなく傾向ですが、鎖を折りたたむ大きな力です。</li>
</ol>
<p><em>たとえ：</em>表面がそれぞれ違うビーズの長いひもです。反対向きの磁石（イオン結合）が一部を引き寄せ、面ファスナー（水素結合）が別の部分を留め、ホチキス（ジスルフィド結合、永続的）が遠い2つのビーズを留め、油っぽいビーズは水を避けて真ん中に集まります（疎水性相互作用）。結果として、コンパクトで特定の形になります。</p>
<p><strong>二次構造と三次構造の水素結合</strong>（よくある混同）：</p>
<table>
<tr><th></th><th>二次構造</th><th>三次構造</th></tr>
<tr><td>水素結合は何の間か</td><td>骨格のC=OとN–Hの間</td><td>極性のR基（側鎖）の間</td></tr>
<tr><td>パターン</td><td>規則的で繰り返し（ヘリックス、シート）</td><td>不規則で、配列によって決まる</td></tr>
<tr><td>この段階の他の結合</td><td>なし</td><td>イオン結合、ジスルフィド結合、疎水性相互作用もある</td></tr>
</table>
<p><strong>ペプチド結合とジスルフィド結合：</strong>ペプチド結合は骨格で<em>となり合う</em>アミノ酸を結び（C–N）、一次構造をつくります。ジスルフィド結合は<em>2つのシステイン</em>のR基間のS–S結合で、配列上は離れていてもかまわず、三次（または四次）構造を固定するのを助けます。</p>
<p><strong>結合の強さ。</strong>水素結合、イオン結合、疎水性相互作用は1つ1つが弱いので、熱やpHの変化で乱れます。共有結合（ペプチド結合とジスルフィド結合）は強い結合です。変性でまず弱い相互作用が影響を受けるのはこのためです。</p>
<div class="note"><p>水素結合、イオン結合、疎水性相互作用に関わるアミノ酸の名前を挙げる必要は<strong>ありません</strong>。名前が必要なのは、ジスルフィド結合のシステインだけです。</p></div>`,
        zh: `<p><strong>三級結構 (tertiary structure)</strong>是<em>一條</em>多肽（包括其中的螺旋和摺板）最終的三維形狀。它由長鏈上不同位置的 <strong>R 基</strong>之間的相互作用維持。重要的有四種：</p>
<ol>
<li>極性 R 基之間的<strong>氫鍵 (hydrogen bonds)</strong>。這裏的氫鍵形成於 R 基之間，而不是骨架原子之間。</li>
<li>帶相反電荷的 R 基之間的<strong>離子鍵 (ionic bonds)</strong>。R 基上的氨基可接收 H<sup>+</sup> 而帶正電（–NH<sub>3</sub><sup>+</sup>）。R 基上的羧基可釋出 H<sup>+</sup> 而帶負電（–COO<sup>–</sup>）。帶正電和帶負電的 R 基便互相吸引。</li>
<li><strong>二硫鍵 (disulfide bonds)</strong>（又稱二硫橋）：兩個<strong>半胱氨酸 (cysteine)</strong> R 基的硫原子之間的<em>共價</em>鍵，即 S–S。這是你唯一須要說出名稱的氨基酸。它比其他三種強得多。</li>
<li>非極性 R 基之間的<strong>疏水相互作用 (hydrophobic interactions)</strong>。在水中，非極性 R 基會聚在一起，遠離周圍的水。這是一種傾向而不是真正的鍵，但它是令長鏈摺疊的主要作用力。</li>
</ol>
<p><em>比喻：</em>一長串珠子，每粒的表面都不同。相反的磁石（離子鍵）把一些珠子拉在一起，魔術貼（氫鍵）固定另一些，釘書釘（二硫鍵，永久性）把遠處的兩粒珠子釘在一起，而油性珠子則擠在中間，避開水（疏水相互作用）。結果是緊密而特定的形狀。</p>
<p><strong>二級結構與三級結構的氫鍵</strong>（典型的混淆）：</p>
<table>
<tr><th></th><th>二級結構</th><th>三級結構</th></tr>
<tr><td>氫鍵形成於…之間</td><td>骨架上的 C=O 與 N–H</td><td>極性 R 基（側鏈）</td></tr>
<tr><td>模式</td><td>有規律、重複（螺旋、摺板）</td><td>不規則，視乎序列</td></tr>
<tr><td>此級的其他鍵</td><td>沒有</td><td>另有離子鍵、二硫鍵、疏水相互作用</td></tr>
</table>
<p><strong>肽鍵與二硫鍵：</strong>肽鍵連接骨架上<em>相鄰</em>的氨基酸（C–N），構成一級結構。二硫鍵是<em>兩個半胱氨酸</em> R 基之間的 S–S 連接，它們在序列中可以相隔很遠，二硫鍵有助固定三級（或四級）結構。</p>
<p><strong>強度。</strong>氫鍵、離子鍵和疏水相互作用個別來說都很弱，所以高溫和 pH 值變化可以破壞它們。共價鍵（肽鍵和二硫鍵）則很強。這就是變性首先影響弱相互作用的原因。</p>
<div class="note"><p>你<strong>不須要</strong>說出哪些氨基酸形成氫鍵、離子鍵或疏水相互作用。需要說出名稱的只有形成二硫鍵的半胱氨酸。</p></div>`
      },
      examTip: {
        en: "If asked what holds tertiary structure, list the four: hydrogen bonds, ionic bonds, disulfide bonds, hydrophobic interactions, and say they involve R-groups.",
        ja: "三次構造を保つものを問われたら、水素結合、イオン結合、ジスルフィド結合、疎水性相互作用の4つを挙げ、R基が関わることを書きましょう。",
        zh: "如被問及甚麼維持三級結構，要列出四種：氫鍵、離子鍵、二硫鍵、疏水相互作用，並指出它們涉及 R 基。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.10 */
    {
      ref: "B1.2.10",
      ahl: true,
      widget: "mol3d-protein",
      widgetOptions: {preset: "hydrophobic"},
      heading: {
        en: "Where do the hydrophobic R-groups go? Globular and membrane proteins",
        ja: "疎水性のR基はどこに行くか：球状タンパク質と膜タンパク質",
        zh: "疏水性 R 基會到哪裏？球狀蛋白質與膜蛋白質"
      },
      body: {
        en: `<p>The surroundings of a protein decide where its polar and non-polar R-groups end up.</p>
<p><strong>Water-soluble (globular) proteins.</strong> Water surrounds the protein. Hydrophobic R-groups avoid water, so they <strong>cluster in the core</strong> of the folded protein. Hydrophilic (polar and charged) R-groups sit on the <strong>outside</strong>, in contact with water. This makes the whole protein soluble.</p>
<p><strong>Integral proteins in membranes.</strong> An integral protein is embedded in the phospholipid bilayer. The middle of the bilayer is made of hydrophobic fatty-acid tails. So the part of the protein that sits <em>in</em> the membrane has <strong>hydrophobic amino acids on its outside</strong>. These contact the fatty-acid tails and help hold the protein in the membrane. The parts that stick out into the watery cytoplasm or the fluid outside the cell have hydrophilic R-groups on their surface.</p>
<p>Notice the reversal: in a soluble protein the hydrophobic groups face <em>in</em>, in a membrane protein the middle region has them facing <em>out</em>, because what is outside is different (water versus lipid).</p>
<p><em>Analogy:</em> "like sits with like". Oil and water do not mix, so oil droplets gather together. A protein's surface matches whatever it touches: water-friendly groups face water, and oily groups face oil (or the oily tails of the membrane).</p>`,
        ja: `<p>タンパク質の周りの環境が、極性のR基と無極性のR基がどこに来るかを決めます。</p>
<p><strong>水に溶けるタンパク質（球状タンパク質）。</strong>周りは水です。疎水性のR基は水を避けるので、折りたたまれたタンパク質の<strong>内側の芯に集まります</strong>。親水性（極性と電荷をもつもの）のR基は、水に接する<strong>外側</strong>にあります。そのためタンパク質全体が水に溶けます。</p>
<p><strong>膜の内在性タンパク質 (integral proteins)。</strong>内在性タンパク質はリン脂質二重層に埋め込まれています。二重層の中央は疎水性の脂肪酸の尾でできています。そのため、膜<em>の中</em>にある部分は、<strong>外側に疎水性のアミノ酸</strong>をもちます。これが脂肪酸の尾に接して、タンパク質を膜に固定するのを助けます。水っぽい細胞質や細胞外の液に突き出た部分は、表面に親水性のR基をもちます。</p>
<p>逆転に注目しましょう。水溶性タンパク質では疎水性の基は<em>内側</em>を向きますが、膜タンパク質の膜の中の領域では<em>外側</em>を向きます。外側の環境が（水と脂質で）違うからです。</p>
<p><em>たとえ：</em>「似たもの同士が集まる」です。油と水は混ざらないので、油滴は集まります。タンパク質の表面は、接するものになじみます。水になじむ基は水に向き、油っぽい基は油（や膜の油っぽい尾）に向きます。</p>`,
        zh: `<p>蛋白質周圍的環境，決定了極性和非極性 R 基最終的位置。</p>
<p><strong>水溶性（球狀）蛋白質。</strong>水包圍着蛋白質。疏水性 R 基會避開水，所以<strong>聚集在摺疊後蛋白質的核心</strong>。親水性（極性和帶電荷）R 基則在<strong>外面</strong>，與水接觸。這令整個蛋白質可以溶於水。</p>
<p><strong>膜中的整合蛋白質 (integral proteins)。</strong>整合蛋白質嵌在磷脂雙層中。雙層的中央由疏水性的脂肪酸尾部組成。所以蛋白質位於膜<em>內</em>的部分，<strong>外表面有疏水性氨基酸</strong>。它們與脂肪酸尾部接觸，幫助把蛋白質固定在膜內。伸出到含水的細胞質或細胞外液體的部分，表面則是親水性 R 基。</p>
<p>注意這個相反的情況：水溶性蛋白質中，疏水性基團朝<em>內</em>；膜蛋白質在膜中間的區域則朝<em>外</em>，因為外面的環境不同（水與脂質）。</p>
<p><em>比喻：</em>「物以類聚」。油和水不相混，所以油滴會聚在一起。蛋白質的表面會配合它接觸的東西：親水的基團朝向水，油性的基團朝向油（或膜的油性尾部）。</p>`
      },
      examTip: {
        en: "For 'predict where hydrophobic R-groups are', always state the surroundings first (water or lipid), then the position (core or outside).",
        ja: "「疎水性のR基の位置を予測せよ」では、まず周囲（水か脂質か）を述べ、次に位置（芯か外側か）を書きましょう。",
        zh: "遇到「預測疏水性 R 基位置」的題目，先說明周圍環境（水還是脂質），再說位置（核心還是外面）。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.11 */
    {
      ref: "B1.2.11",
      ahl: true,
      widget: "mol3d-protein",
      widgetOptions: {preset: "haemoglobin"},
      heading: {
        en: "Step 6: quaternary structure — more than one polypeptide",
        ja: "ステップ6：四次構造 ― 2本以上のポリペプチド",
        zh: "第 6 步：四級結構 ― 多於一條多肽"
      },
      body: {
        en: `<p><strong>Quaternary structure</strong> means two or more polypeptide chains assembled into one functional protein. If a protein is made of a single chain, it has no quaternary structure. The chains are held together by the same kinds of interactions as tertiary structure (hydrogen bonds, ionic bonds, hydrophobic interactions, and sometimes disulfide bonds), this time between chains.</p>
<p>Proteins are also grouped by what they are made of:</p>
<ul>
<li><strong>Non-conjugated proteins</strong> consist of polypeptide chain(s) only.</li>
<li><strong>Conjugated proteins</strong> contain a <strong>non-polypeptide part</strong> as well, called a <strong>prosthetic group</strong> (for example a <strong>haem</strong> group).</li>
</ul>
<p><strong>The classic confusion:</strong> "conjugated" does NOT mean "more than one chain". That is quaternary. Conjugated means "has a non-protein group attached". A protein can be quaternary but non-conjugated (insulin, collagen), or conjugated (haemoglobin). Two separate questions: how many chains? Any non-protein part?</p>
<p>The three guide examples:</p>
<ul>
<li><strong>Insulin</strong> (non-conjugated): two polypeptide chains (the A chain, 21 amino acids, and the B chain, 30), held together by disulfide bonds.</li>
<li><strong>Collagen</strong> (non-conjugated): three polypeptide chains wound together in a <strong>triple helix</strong>, like three strands twisted into a rope.</li>
<li><strong>Haemoglobin</strong> (conjugated): four polypeptide chains, two α (alpha) and two β (beta). Each chain has a <strong>haem group</strong>, a non-protein group containing an iron ion (Fe<sup>2+</sup>) that can bind one oxygen molecule.</li>
</ul>
<table>
<tr><th>Protein</th><th>Polypeptide chains</th><th>Non-polypeptide part?</th><th>Type</th></tr>
<tr><td>Insulin</td><td>2 (linked by disulfide bonds)</td><td>no</td><td>non-conjugated</td></tr>
<tr><td>Collagen</td><td>3 (triple helix)</td><td>no</td><td>non-conjugated</td></tr>
<tr><td>Haemoglobin</td><td>4 (2α + 2β)</td><td>yes: haem (Fe<sup>2+</sup>) in each chain</td><td>conjugated</td></tr>
</table>
<p><em>Analogy:</em> quaternary = a team of players (several chains). Conjugated = the team plus a piece of equipment that is not a player (the prosthetic group), like a goalkeeper's gloves.</p>
<p><strong>Nature of science.</strong> Cryogenic electron microscopy (cryo-EM) lets scientists image single protein molecules and how they interact with other molecules. These structures are far too small to see with our unaided senses, so technology extends what we can observe.</p>`,
        ja: `<p><strong>四次構造 (quaternary structure)</strong>とは、2本以上のポリペプチド鎖が組み合わさって1つの機能をもつタンパク質になったものです。1本の鎖だけでできているタンパク質には四次構造はありません。鎖どうしは、三次構造と同じ種類の相互作用（水素結合、イオン結合、疎水性相互作用、ときにジスルフィド結合）で保たれ、今度は鎖と鎖の間に働きます。</p>
<p>タンパク質は、何でできているかによっても分類されます。</p>
<ul>
<li><strong>単純タンパク質（非複合タンパク質, non-conjugated proteins）</strong>はポリペプチド鎖だけでできています。</li>
<li><strong>複合タンパク質 (conjugated proteins)</strong>は<strong>ポリペプチド以外の部分</strong>ももっています。これを<strong>補欠分子族 (prosthetic group)</strong>といいます（たとえば<strong>ヘム (haem)</strong>）。</li>
</ul>
<p><strong>よくある混同：</strong>「複合 (conjugated)」は「複数の鎖」という意味ではありません。それは四次構造です。複合とは「タンパク質以外の基がついている」という意味です。四次構造をもつが複合ではないもの（インスリン、コラーゲン）も、複合のもの（ヘモグロビン）もあります。別々の2つの問いです：鎖は何本か。タンパク質以外の部分はあるか。</p>
<p>ガイドの3つの例：</p>
<ul>
<li><strong>インスリン (insulin)</strong>（非複合）：2本のポリペプチド鎖（A鎖21個、B鎖30個のアミノ酸）がジスルフィド結合でつながっています。</li>
<li><strong>コラーゲン (collagen)</strong>（非複合）：3本のポリペプチド鎖が<strong>三重らせん (triple helix)</strong>にねじれています。3本の糸をよってロープにしたようなものです。</li>
<li><strong>ヘモグロビン (haemoglobin)</strong>（複合）：4本のポリペプチド鎖（α鎖2本とβ鎖2本）です。それぞれの鎖が<strong>ヘム基 (haem group)</strong>をもちます。ヘムはタンパク質以外の基で、酸素1分子と結合できる鉄イオン (Fe<sup>2+</sup>) を含みます。</li>
</ul>
<table>
<tr><th>タンパク質</th><th>ポリペプチド鎖</th><th>ポリペプチド以外の部分</th><th>種類</th></tr>
<tr><td>インスリン</td><td>2本（ジスルフィド結合でつながる）</td><td>なし</td><td>非複合</td></tr>
<tr><td>コラーゲン</td><td>3本（三重らせん）</td><td>なし</td><td>非複合</td></tr>
<tr><td>ヘモグロビン</td><td>4本（α2本 + β2本）</td><td>あり：各鎖にヘム（Fe<sup>2+</sup>）</td><td>複合</td></tr>
</table>
<p><em>たとえ：</em>四次構造 = チーム（複数の鎖）。複合 = チームに選手ではない道具（補欠分子族）が加わったもの。たとえばゴールキーパーのグローブです。</p>
<p><strong>科学の本質 (Nature of science)。</strong>クライオ電子顕微鏡 (cryo-EM) を使うと、タンパク質の分子1個や、それが他の分子とどう相互作用するかを画像として見ることができます。これらの構造は小さすぎて人間の感覚では観察できないので、技術が観察できる範囲を広げているのです。</p>`,
        zh: `<p><strong>四級結構 (quaternary structure)</strong>是指兩條或以上的多肽鏈組合成一個有功能的蛋白質。如果蛋白質只由一條鏈組成，就沒有四級結構。各鏈之間由與三級結構相同種類的相互作用維持（氫鍵、離子鍵、疏水相互作用，有時還有二硫鍵），只是這次是在不同鏈之間形成。</p>
<p>蛋白質也可按組成成分分類：</p>
<ul>
<li><strong>非綴合蛋白質 (non-conjugated proteins)</strong>只由多肽鏈組成。</li>
<li><strong>綴合蛋白質 (conjugated proteins)</strong>還含有<strong>非多肽部分</strong>，稱為<strong>輔基 (prosthetic group)</strong>（例如<strong>血紅素 (haem)</strong>）。</li>
</ul>
<p><strong>典型的混淆：</strong>「結合 (conjugated)」並<strong>不是</strong>「多於一條鏈」的意思，那是四級結構。結合是指「連有非蛋白質的基團」。蛋白質可以有四級結構但非結合（胰島素、膠原蛋白），也可以是結合的（血紅蛋白）。這是兩條獨立的問題：有多少條鏈？有沒有非蛋白質部分？</p>
<p>指引中的三個例子：</p>
<ul>
<li><strong>胰島素 (insulin)</strong>（非結合）：兩條多肽鏈（A 鏈有 21 個氨基酸，B 鏈有 30 個），由二硫鍵連接。</li>
<li><strong>膠原蛋白 (collagen)</strong>（非結合）：三條多肽鏈纏繞成<strong>三股螺旋 (triple helix)</strong>，像三股線搓成一條繩。</li>
<li><strong>血紅蛋白 (haemoglobin)</strong>（結合）：四條多肽鏈，即兩條 α 鏈和兩條 β 鏈。每條鏈都有一個<strong>血紅素基團 (haem group)</strong>，是含鐵離子 (Fe<sup>2+</sup>) 的非蛋白質基團，可以結合一個氧分子。</li>
</ul>
<table>
<tr><th>蛋白質</th><th>多肽鏈</th><th>有非多肽部分嗎？</th><th>類別</th></tr>
<tr><td>胰島素</td><td>2 條（由二硫鍵連接）</td><td>沒有</td><td>非結合</td></tr>
<tr><td>膠原蛋白</td><td>3 條（三股螺旋）</td><td>沒有</td><td>非結合</td></tr>
<tr><td>血紅蛋白</td><td>4 條（2α + 2β）</td><td>有：每條鏈有血紅素（含 Fe<sup>2+</sup>）</td><td>結合</td></tr>
</table>
<p><em>比喻：</em>四級結構 = 一隊球員（多條鏈）。結合 = 球隊再加上一件不是球員的裝備（輔基），例如守門員的手套。</p>
<p><strong>科學的本質 (Nature of science)。</strong>冷凍電子顯微術 (cryo-EM) 令科學家可以拍攝單一蛋白質分子，以及它與其他分子相互作用的影像。這些結構小得無法用人的感官直接觀察，所以技術擴闊了我們能觀察的範圍。</p>`
      },
      examTip: {
        en: "Quaternary needs at least two polypeptide chains. 'Conjugated' means a non-polypeptide (prosthetic) group such as haem. Keep these two ideas separate.",
        ja: "四次構造には少なくとも2本のポリペプチド鎖が必要です。「複合」はヘムのようなポリペプチド以外（補欠分子族）の基があることです。この2つを混同しないでください。",
        zh: "四級結構需要至少兩條多肽鏈。「結合」是指有如血紅素的非多肽（輔基）基團。這兩個概念要分開。"
      }
    },

    /* ---------------------------------------------------------------- B1.2.12 */
    {
      ref: "B1.2.12",
      ahl: true,
      heading: {
        en: "Step 7: form and function — globular and fibrous proteins",
        ja: "ステップ7：形と働き ― 球状タンパク質と繊維状タンパク質",
        zh: "第 7 步：形態與功能 ― 球狀蛋白質和纖維狀蛋白質"
      },
      widget: "protein-compare",
      body: {
        en: `<p>The final step ties it all together: the shape a protein folds into suits the job it does.</p>
<table>
<tr><th></th><th>Globular proteins</th><th>Fibrous proteins</th></tr>
<tr><td>Shape</td><td>compact, rounded (ball-like)</td><td>long, thin strands or ropes</td></tr>
<tr><td>Solubility</td><td>usually soluble in water (hydrophilic outside, hydrophobic core)</td><td>usually insoluble in water</td></tr>
<tr><td>Typical roles</td><td>specific tasks: enzymes, hormones, transport</td><td>structure and strength</td></tr>
<tr><td>Example here</td><td>insulin</td><td>collagen</td></tr>
</table>
<p><strong>Insulin (globular).</strong> It is a hormone that travels in the blood plasma, which is mostly water. Its rounded shape and hydrophilic surface let it dissolve and be carried around. Its precise three-dimensional shape has a region that fits a specific receptor on its target cells, like a key in a lock. Different shape, no fit, no signal.</p>
<p><strong>Collagen (fibrous).</strong> Three polypeptide chains are wound in a triple helix, and the molecules lie side by side in long, strong fibres. Many hydrogen bonds between the chains hold the helix together, and the long fibres resist being pulled apart (high tensile strength). That suits collagen to its role in skin, tendons and the walls of arteries, where it gives strength and support. It is insoluble, so it stays in place instead of dissolving into body fluids.</p>
<p><em>Analogy:</em> globular = a key (specific shape that fits one lock and can be carried around in a pocket). Fibrous = a rope (long, strong and good for holding things together).</p>
<div class="note"><p>This is where the whole staircase pays off. Sequence of amino acids (primary) → R-groups → folding (secondary and tertiary) → chains together (quaternary) → shape → function.</p></div>`,
        ja: `<p>最後のステップで全体がつながります。タンパク質が折りたたまれてできる形は、その働きに適しています。</p>
<table>
<tr><th></th><th>球状タンパク質 (globular)</th><th>繊維状タンパク質 (fibrous)</th></tr>
<tr><td>形</td><td>コンパクトで丸い（ボール状）</td><td>長く細い糸状またはロープ状</td></tr>
<tr><td>溶けやすさ</td><td>ふつうは水に溶ける（外側は親水性、芯は疎水性）</td><td>ふつうは水に溶けない</td></tr>
<tr><td>典型的な役割</td><td>特定の仕事：酵素、ホルモン、輸送</td><td>構造と強さ</td></tr>
<tr><td>ここでの例</td><td>インスリン</td><td>コラーゲン</td></tr>
</table>
<p><strong>インスリン（球状）。</strong>ホルモンで、ほとんどが水である血しょうの中を運ばれます。丸い形と親水性の表面のおかげで、溶けて運ばれます。正確な立体構造には、標的細胞にある特定の受容体に合う部分があり、鍵と鍵穴のようです。形が違えば合わず、信号は伝わりません。</p>
<p><strong>コラーゲン（繊維状）。</strong>3本のポリペプチド鎖が三重らせんにねじれ、その分子が横に並んで長く強い繊維をつくります。鎖の間の多数の水素結合がらせんを保ち、長い繊維は引っぱりに強いです（引っぱり強度が高い）。このため、皮膚、腱、動脈の壁で強さと支えを与える役割に向いています。水に溶けないので、体液に溶け出さずその場にとどまります。</p>
<p><em>たとえ：</em>球状 = 鍵（特定の形で1つの鍵穴に合い、ポケットに入れて持ち運べる）。繊維状 = ロープ（長く強く、ものをつなぎとめるのに向く）。</p>
<div class="note"><p>ここで階段全体が生きてきます。アミノ酸の配列（一次）→ R基 → 折りたたみ（二次と三次）→ 鎖の集まり（四次）→ 形 → 働き。</p></div>`,
        zh: `<p>最後一步把一切連起來：蛋白質摺疊成的形狀，配合它所擔任的工作。</p>
<table>
<tr><th></th><th>球狀蛋白質 (globular)</th><th>纖維狀蛋白質 (fibrous)</th></tr>
<tr><td>形狀</td><td>緊密、圓形（像球）</td><td>長而幼的線狀或繩狀</td></tr>
<tr><td>溶解度</td><td>通常可溶於水（外面親水，核心疏水）</td><td>通常不溶於水</td></tr>
<tr><td>典型功能</td><td>特定工作：酶、激素、運輸</td><td>結構和強度</td></tr>
<tr><td>本文例子</td><td>胰島素</td><td>膠原蛋白</td></tr>
</table>
<p><strong>胰島素（球狀）。</strong>它是一種激素，在主要是水的血漿中運行。圓形的形狀和親水的表面令它能溶解並被帶到各處。它精確的三維形狀有一個區域，可以配合目標細胞上的特定受體，就像鑰匙配鎖。形狀不同就不能配合，也就沒有信號。</p>
<p><strong>膠原蛋白（纖維狀）。</strong>三條多肽鏈纏繞成三股螺旋，這些分子並排形成長而堅韌的纖維。各鏈之間的大量氫鍵維持螺旋結構，而長纖維能抵抗拉扯（抗張強度高）。這令膠原蛋白適合在皮膚、肌腱和動脈壁中提供強度和支撐。它不溶於水，所以會留在原處，不會溶入體液。</p>
<p><em>比喻：</em>球狀 = 鑰匙（特定的形狀，只配合一把鎖，可放在袋中攜帶）。纖維狀 = 繩（長而堅韌，適合把東西繫在一起）。</p>
<div class="note"><p>整道樓梯的意義就在這裏。氨基酸序列（一級）→ R 基 → 摺疊（二級和三級）→ 多條鏈組合（四級）→ 形狀 → 功能。</p></div>`
      },
      examTip: {
        en: "A form-function answer needs a link: 'shape → property → function'. For example, 'long insoluble fibres → high tensile strength → supports skin and tendons'.",
        ja: "形と働きの答えには「形 → 性質 → 働き」のつながりが必要です。例：「長い不溶性の繊維 → 引っぱり強度が高い → 皮膚や腱を支える」。",
        zh: "形態與功能的答案需要有連繫：「形狀 → 性質 → 功能」。例如：「長而不溶的纖維 → 抗張強度高 → 支撐皮膚和肌腱」。"
      }
    }
  ],

  keyTerms: [
    { term: { en: "amino acid", ja: "アミノ酸", zh: "氨基酸" },
      def: { en: "The building block of proteins: an alpha carbon bonded to an amine group, a carboxyl group, a hydrogen atom and a variable R-group.", ja: "タンパク質の構成単位。α炭素に、アミノ基、カルボキシ基、水素原子、変化するR基が結合したもの。", zh: "蛋白質的基本單位：α-碳連接氨基、羧基、氫原子和可變的 R 基。" }, ahl: false },
    { term: { en: "R-group", ja: "R基（側鎖）", zh: "R 基（側鏈）" },
      def: { en: "The variable part of an amino acid. It decides the amino acid's chemical properties and, in a polypeptide, how the chain folds.", ja: "アミノ酸の変化する部分。アミノ酸の化学的性質を決め、ポリペプチドでは鎖の折りたたまれ方を決める。", zh: "氨基酸的可變部分。它決定氨基酸的化學性質，在多肽中決定長鏈如何摺疊。" }, ahl: false },
    { term: { en: "condensation reaction", ja: "縮合反応", zh: "縮合反應" },
      def: { en: "A reaction that joins two molecules and releases a small molecule, such as water. It forms the peptide bond.", ja: "2つの分子を結合し、水などの小さな分子を放出する反応。ペプチド結合をつくる。", zh: "把兩個分子連接並釋出小分子（例如水）的反應。它形成肽鍵。" }, ahl: false },
    { term: { en: "peptide bond", ja: "ペプチド結合", zh: "肽鍵" },
      def: { en: "The covalent C–N bond between the carboxyl group of one amino acid and the amine group of the next. It makes the backbone and the primary structure.", ja: "一方のアミノ酸のカルボキシ基と次のアミノ酸のアミノ基の間のC–N共有結合。骨格と一次構造をつくる。", zh: "一個氨基酸的羧基與下一個氨基酸的氨基之間的 C–N 共價鍵。它構成骨架和一級結構。" }, ahl: false },
    { term: { en: "dipeptide / polypeptide", ja: "ジペプチド／ポリペプチド", zh: "二肽／多肽" },
      def: { en: "A dipeptide is two amino acids joined by one peptide bond. A polypeptide is a long chain of amino acids.", ja: "ジペプチドはペプチド結合1つでつながった2個のアミノ酸。ポリペプチドはアミノ酸の長い鎖。", zh: "二肽是由一個肽鍵連接的兩個氨基酸。多肽是氨基酸的長鏈。" }, ahl: false },
    { term: { en: "essential amino acid", ja: "必須アミノ酸", zh: "必需氨基酸" },
      def: { en: "An amino acid the body cannot make, so it must come from food. Non-essential amino acids can be made from other amino acids.", ja: "体内でつくれず、食べ物から取る必要があるアミノ酸。非必須アミノ酸は他のアミノ酸からつくれる。", zh: "身體不能製造、必須從食物攝取的氨基酸。非必需氨基酸可由其他氨基酸製造。" }, ahl: false },
    { term: { en: "denaturation", ja: "変性", zh: "變性" },
      def: { en: "A change in a protein's three-dimensional shape, caused by heat or extreme pH, that breaks weak bonds and interactions but not peptide bonds. The protein usually loses its function.", ja: "熱や極端なpHによってタンパク質の立体構造が変わること。弱い結合や相互作用は切れるがペプチド結合は切れない。通常は働きを失う。", zh: "蛋白質的三維形狀因高溫或極端 pH 值而改變。弱鍵和相互作用被破壞，但肽鍵不受影響。蛋白質通常失去功能。" }, ahl: false },
    { term: { en: "hydrophobic / hydrophilic", ja: "疎水性／親水性", zh: "疏水性／親水性" },
      def: { en: "Hydrophobic groups are non-polar and avoid water. Hydrophilic groups (polar or charged) mix well with water.", ja: "疎水性の基は無極性で水を避ける。親水性の基（極性または電荷をもつ）は水とよく混ざる。", zh: "疏水性基團是非極性的，避開水。親水性基團（極性或帶電荷）容易與水混合。" }, ahl: true },
    { term: { en: "primary structure", ja: "一次構造", zh: "一級結構" },
      def: { en: "The sequence of amino acids in a polypeptide, joined by peptide bonds.", ja: "ペプチド結合でつながったポリペプチドのアミノ酸配列。", zh: "多肽中由肽鍵連接的氨基酸序列。" }, ahl: true },
    { term: { en: "secondary structure (alpha helix, beta-pleated sheet)", ja: "二次構造（αヘリックス、βシート）", zh: "二級結構（α螺旋、β摺板）" },
      def: { en: "Regular coiling (alpha helix) or pleating (beta-pleated sheet) of the backbone, held by hydrogen bonds between C=O and N–H groups of the backbone.", ja: "骨格の規則的なコイル（αヘリックス）やひだ（βシート）。骨格のC=OとN–Hの間の水素結合で保たれる。", zh: "骨架有規律的螺旋（α螺旋）或摺疊（β摺板），由骨架上 C=O 與 N–H 之間的氫鍵維持。" }, ahl: true },
    { term: { en: "tertiary structure", ja: "三次構造", zh: "三級結構" },
      def: { en: "The overall three-dimensional shape of one polypeptide, held by hydrogen bonds, ionic bonds, disulfide bonds and hydrophobic interactions between R-groups.", ja: "1本のポリペプチドの全体の立体構造。R基どうしの水素結合、イオン結合、ジスルフィド結合、疎水性相互作用で保たれる。", zh: "一條多肽的整體三維形狀，由 R 基之間的氫鍵、離子鍵、二硫鍵和疏水相互作用維持。" }, ahl: true },
    { term: { en: "ionic bond", ja: "イオン結合", zh: "離子鍵" },
      def: { en: "An attraction between a positively charged and a negatively charged R-group. It forms after R-groups gain or lose H⁺.", ja: "正に帯電したR基と負に帯電したR基の間の引力。R基がH⁺を受け取ったり放出したりしてできる。", zh: "帶正電與帶負電的 R 基之間的吸引力。R 基接收或釋出 H⁺ 後形成。" }, ahl: true },
    { term: { en: "disulfide bond", ja: "ジスルフィド結合", zh: "二硫鍵" },
      def: { en: "A covalent S–S bond between the R-groups of two cysteines. It is stronger than hydrogen or ionic bonds.", ja: "2つのシステインのR基の間のS–S共有結合。水素結合やイオン結合より強い。", zh: "兩個半胱氨酸 R 基之間的 S–S 共價鍵，比氫鍵或離子鍵強。" }, ahl: true },
    { term: { en: "hydrophobic interaction", ja: "疎水性相互作用", zh: "疏水相互作用" },
      def: { en: "The clustering of non-polar R-groups together, away from water. It helps fold a protein.", ja: "無極性のR基が水を避けて集まること。タンパク質の折りたたみを助ける。", zh: "非極性 R 基聚在一起、避開水的現象，有助蛋白質摺疊。" }, ahl: true },
    { term: { en: "quaternary structure", ja: "四次構造", zh: "四級結構" },
      def: { en: "A protein made of two or more polypeptide chains assembled together.", ja: "2本以上のポリペプチド鎖が組み合わさったタンパク質の構造。", zh: "由兩條或以上多肽鏈組合而成的蛋白質結構。" }, ahl: true },
    { term: { en: "conjugated protein / prosthetic group", ja: "複合タンパク質／補欠分子族", zh: "綴合蛋白質／輔基" },
      def: { en: "A conjugated protein contains a non-polypeptide part called a prosthetic group, for example haem in haemoglobin. A non-conjugated protein has polypeptide chain(s) only.", ja: "複合タンパク質はポリペプチド以外の部分（補欠分子族）をもつ。たとえばヘモグロビンのヘム。非複合タンパク質はポリペプチド鎖だけでできている。", zh: "綴合蛋白質含有稱為輔基的非多肽部分，例如血紅蛋白中的血紅素。非綴合蛋白質只由多肽鏈組成。" }, ahl: true },
    { term: { en: "globular protein", ja: "球状タンパク質", zh: "球狀蛋白質" },
      def: { en: "A compact, rounded protein, usually water-soluble, with hydrophobic R-groups in the core. Example: insulin.", ja: "コンパクトで丸いタンパク質。ふつう水に溶け、疎水性のR基が芯にある。例：インスリン。", zh: "緊密、圓形的蛋白質，通常可溶於水，疏水性 R 基在核心。例子：胰島素。" }, ahl: true },
    { term: { en: "fibrous protein", ja: "繊維状タンパク質", zh: "纖維狀蛋白質" },
      def: { en: "A long, strand-like protein, usually insoluble, used for structure and strength. Example: collagen.", ja: "長い糸状のタンパク質。ふつう水に溶けず、構造と強さのために使われる。例：コラーゲン。", zh: "長條線狀的蛋白質，通常不溶於水，用於結構和強度。例子：膠原蛋白。" }, ahl: true }
  ],

  misconceptions: [
    { wrong: { en: "Denaturation breaks the peptide bonds, so the protein is cut into pieces.", ja: "変性でペプチド結合が切れ、タンパク質が断片になる。", zh: "變性會破壞肽鍵，把蛋白質切成碎片。" },
      right: { en: "Denaturation breaks the weak bonds and interactions (hydrogen bonds, ionic bonds, hydrophobic interactions). Peptide bonds survive, so the primary structure is unchanged. The chain unfolds but is not cut.", ja: "変性で乱れるのは弱い結合や相互作用（水素結合、イオン結合、疎水性相互作用）です。ペプチド結合は残るので、一次構造は変わりません。鎖はほどけますが切断はされません。", zh: "變性破壞的是弱鍵和相互作用（氫鍵、離子鍵、疏水相互作用）。肽鍵不受影響，所以一級結構不變。長鏈展開，但沒有被切斷。" } },
    { wrong: { en: "The hydrogen bonds in secondary and tertiary structure are the same thing.", ja: "二次構造と三次構造の水素結合は同じものだ。", zh: "二級和三級結構的氫鍵是同一回事。" },
      right: { en: "Secondary: hydrogen bonds between the backbone C=O and N–H groups, in a regular pattern. Tertiary: hydrogen bonds between polar R-groups, irregular, along with ionic, disulfide and hydrophobic interactions.", ja: "二次構造は、骨格のC=OとN–Hの間の規則的な水素結合です。三次構造は、極性のR基の間の不規則な水素結合で、イオン結合、ジスルフィド結合、疎水性相互作用も加わります。", zh: "二級結構：骨架上 C=O 與 N–H 之間有規律的氫鍵。三級結構：極性 R 基之間不規則的氫鍵，另外還有離子鍵、二硫鍵和疏水相互作用。" } },
    { wrong: { en: "A disulfide bond is just another name for a peptide bond.", ja: "ジスルフィド結合はペプチド結合の別名だ。", zh: "二硫鍵只是肽鍵的另一個名稱。" },
      right: { en: "A peptide bond (C–N) joins neighbouring amino acids in the backbone. A disulfide bond (S–S) joins the R-groups of two cysteines, which can be far apart. Both are covalent, but they are different bonds at different levels.", ja: "ペプチド結合 (C–N) は骨格でとなり合うアミノ酸を結びます。ジスルフィド結合 (S–S) は2つのシステインのR基を結び、それらは離れていてもかまいません。どちらも共有結合ですが、別の結合で、働く段階も違います。", zh: "肽鍵 (C–N) 連接骨架上相鄰的氨基酸。二硫鍵 (S–S) 連接兩個半胱氨酸的 R 基，它們可以相隔很遠。兩者都是共價鍵，但是不同的鍵，作用於不同的結構層次。" } },
    { wrong: { en: "A conjugated protein is one with more than one polypeptide chain.", ja: "複合タンパク質とは、ポリペプチド鎖が複数あるタンパク質のことだ。", zh: "綴合蛋白質就是有多於一條多肽鏈的蛋白質。" },
      right: { en: "More than one chain is quaternary structure. Conjugated means a non-polypeptide (prosthetic) group is attached, such as haem in haemoglobin. Insulin and collagen have several chains but are non-conjugated.", ja: "複数の鎖は四次構造のことです。複合とは、ヘモグロビンのヘムのように、ポリペプチド以外（補欠分子族）の基がついていることです。インスリンとコラーゲンは複数の鎖をもちますが非複合です。", zh: "多於一條鏈是四級結構。結合是指連有非多肽（輔）基團，例如血紅蛋白中的血紅素。胰島素和膠原蛋白有多條鏈，但屬非綴合蛋白質。" } },
    { wrong: { en: "Every protein has a quaternary structure.", ja: "すべてのタンパク質に四次構造がある。", zh: "每種蛋白質都有四級結構。" },
      right: { en: "Quaternary structure needs at least two polypeptides. A protein made of one chain stops at tertiary structure.", ja: "四次構造には少なくとも2本のポリペプチドが必要です。1本の鎖でできたタンパク質は三次構造で終わりです。", zh: "四級結構需要至少兩條多肽。只由一條鏈組成的蛋白質，結構只到三級。" } },
    { wrong: { en: "Hydrophobic R-groups are always inside a protein.", ja: "疎水性のR基は、いつもタンパク質の内側にある。", zh: "疏水性 R 基永遠在蛋白質內部。" },
      right: { en: "In a water-soluble globular protein they are in the core. In an integral membrane protein, the region within the membrane has them on the outside, next to the fatty-acid tails.", ja: "水溶性の球状タンパク質では芯にあります。膜の内在性タンパク質では、膜の中の領域で外側にあり、脂肪酸の尾と接しています。", zh: "在水溶性的球狀蛋白質中，它們在核心。在膜的整合蛋白質中，膜內的區域則把它們放在外面，緊貼脂肪酸尾部。" } },
    { wrong: { en: "The protein's shape is decided by chance when it folds.", ja: "タンパク質の形は、折りたたまれるときに偶然決まる。", zh: "蛋白質摺疊時的形狀是隨機決定的。" },
      right: { en: "The amino acid sequence, set by the gene, determines the R-groups and so the folding. The same sequence gives the same shape each time.", ja: "遺伝子が決めるアミノ酸配列がR基を決め、折りたたみを決めます。同じ配列ならいつも同じ形になります。", zh: "由基因決定的氨基酸序列決定 R 基，從而決定摺疊。相同的序列每次都產生相同的形狀。" } }
  ],

  beyondSyllabus: [
    { en: "You do not need to name any of the 20 amino acids or draw their R-groups. The only name required is cysteine, for disulfide bonds.", ja: "20種類のアミノ酸の名前を挙げたり、R基を描いたりする必要はありません。必要な名前は、ジスルフィド結合のシステインだけです。", zh: "你不須要說出 20 種氨基酸的名稱，也不用繪畫它們的 R 基。唯一要求的名稱是形成二硫鍵的半胱氨酸。" },
    { en: "You do not need to know which amino acids are essential or non-essential.", ja: "どのアミノ酸が必須か非必須かを知る必要はありません。", zh: "你不須要知道哪些氨基酸是必需或非必需的。" },
    { en: "You do not need pKa values, isoelectric points or zwitterion chemistry, or any pH calculations for amino acids.", ja: "pKa、等電点、双性イオンの化学、アミノ酸のpH計算は必要ありません。", zh: "你不須要 pKa 值、等電點、兩性離子化學，或任何有關氨基酸的 pH 計算。" },
    { en: "You do not need chaperone proteins, folding pathways or the details of how a protein finds its shape.", ja: "シャペロンタンパク質、折りたたみの経路、タンパク質が形をとる詳しい仕組みは必要ありません。", zh: "你不須要認識分子伴侶蛋白、摺疊途徑，或蛋白質如何形成其形狀的細節。" },
    { en: "You do not need to know how structures are found by X-ray crystallography or NMR. Cryo-EM: here you only need the NOS point that it allows imaging of single protein molecules. Its advantages as a microscopy method are not needed for this subtopic — they are taught in A2.2 (Cells).", ja: "X線結晶構造解析やNMRで構造がどう決まるかは必要ありません。クライオ電子顕微鏡 (cryo-EM) については、ここではタンパク質1分子を画像化できるという「科学の本質」の要点だけで十分です。顕微鏡法としての利点はこのサブトピックでは不要で、A2.2（細胞）で学びます。", zh: "你不須要知道 X 射線晶體學或核磁共振如何測定結構。冷凍電子顯微術 (cryo-EM)：這裏只須知道「科學的本質」的要點，即它能拍攝單一蛋白質分子的影像。它作為顯微技術的優點在本課題不需要，會在 A2.2（細胞）學習。" },
    { en: "Not needed for this subtopic: cooperative oxygen binding, oxygen dissociation curves and the Bohr shift of haemoglobin — they are taught in B3.1 (Gas exchange, AHL).", ja: "このサブトピックでは不要：ヘモグロビンの酸素の協同的結合、酸素解離曲線、ボーア効果 (Bohr shift)。これらはB3.1（ガス交換、AHL）で学びます。", zh: "本課題不需要：血紅蛋白與氧的協同結合、氧解離曲線和玻爾效應 (Bohr shift)——這些在 B3.1（氣體交換，AHL）學習。" }
  ],

  links: [
    { to: "B1.1", why: { en: "Condensation and hydrolysis (B1.1) make and break peptide bonds; amphipathic properties and hydrophobic effects also shape membranes.", ja: "縮合と加水分解 (B1.1) がペプチド結合をつくり、切ります。両親媒性と疎水性の効果は膜の形成にも関わります。", zh: "縮合與水解 (B1.1) 形成和斷開肽鍵；兩親性和疏水作用也塑造膜的結構。" } },
    { to: "B2.1", why: { en: "Integral membrane proteins have hydrophobic regions that embed in the bilayer (B1.2.10).", ja: "膜の内在性タンパク質は、二重層に埋め込まれる疎水性の領域をもちます (B1.2.10)。", zh: "膜的整合蛋白質有嵌入雙層的疏水區域 (B1.2.10)。" } },
    { to: "B3.1", why: { en: "Haemoglobin's four chains and haem groups (B1.2.11) are the basis of its oxygen binding and the Bohr shift (AHL).", ja: "ヘモグロビンの4本の鎖とヘム (B1.2.11) が、酸素の結合とボーア効果のもとになります（AHL）。", zh: "血紅蛋白的四條鏈和血紅素 (B1.2.11) 是它結合氧和玻爾效應的基礎（AHL）。" } }
  ],

  natureOfScience: [
    { en: "Technology allows imaging of structures that would be impossible to observe with the unaided senses. For example, cryogenic electron microscopy (cryo-EM) has allowed imaging of single-protein molecules and their interactions with other molecules.", ja: "技術により、人間の感覚だけでは観察できない構造を画像化できます。たとえば、クライオ電子顕微鏡 (cryo-EM) により、タンパク質1分子と、それが他の分子と行う相互作用を画像化できるようになりました。", zh: "科技令我們能為單憑感官無法觀察的結構成像。例如冷凍電子顯微術 (cryo-EM) 已能為單一蛋白質分子及其與其他分子的相互作用成像。" },
    { en: "Using molecular models (physical or digital) to represent the condensation reaction is a way of making an invisible process visible, and models are useful because they show how atoms rearrange.", ja: "分子模型（実物またはデジタル）で縮合反応を表すことは、目に見えない過程を見えるようにする方法です。原子の組み替えを示せるので模型は役に立ちます。", zh: "用分子模型（實物或電腦）表示縮合反應，是把看不見的過程變得可見的方法。模型能顯示原子如何重新排列，所以很有用。" }
  ],

  questions: [
    /* q01 */
    { id: "b1-2-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B1.2.1", paper: "1A",
      stem: { en: "Which set of groups is attached to the alpha carbon of every amino acid?", ja: "すべてのアミノ酸のα炭素に結合している組み合わせはどれか。", zh: "每個氨基酸的α-碳都連接着以下哪一組基團？" },
      options: [
        { en: "An amine group, a carboxyl group, a hydrogen atom and an R-group", ja: "アミノ基、カルボキシ基、水素原子、R基", zh: "氨基、羧基、氫原子和 R 基" },
        { en: "Two amine groups, a carboxyl group and an R-group", ja: "アミノ基2個、カルボキシ基、R基", zh: "兩個氨基、一個羧基和一個 R 基" },
        { en: "An amine group, two carboxyl groups and a hydrogen atom", ja: "アミノ基、カルボキシ基2個、水素原子", zh: "一個氨基、兩個羧基和一個氫原子" },
        { en: "A carboxyl group, a hydrogen atom, a phosphate group and an R-group", ja: "カルボキシ基、水素原子、リン酸基、R基", zh: "羧基、氫原子、磷酸基和 R 基" }
      ], answer: 0,
      explanation: { en: "The generalized amino acid has an amine group, a carboxyl group, a hydrogen and an R-group on the alpha carbon. The other options change the number of amine or carboxyl groups, or add a phosphate group, which is not part of the generalized structure. Only the R-group differs between amino acids.", ja: "一般化したアミノ酸では、α炭素にアミノ基、カルボキシ基、水素、R基が結合します。他の選択肢は、アミノ基やカルボキシ基の数を変えたり、一般的な構造にないリン酸基を加えたりしています。アミノ酸ごとに違うのはR基だけです。", zh: "通用氨基酸的α-碳連接氨基、羧基、氫和 R 基。其他選項改變了氨基或羧基的數目，或加入了不屬於通用結構的磷酸基。氨基酸之間只有 R 基不同。" } },

    /* q02 */
    { id: "b1-2-q02", type: "mcq", ahl: false, difficulty: 1, ref: "B1.2.2", paper: "1A",
      stem: { en: "Two amino acids join to form a dipeptide. Which statement is correct?", ja: "2つのアミノ酸が結合してジペプチドができる。正しい記述はどれか。", zh: "兩個氨基酸連接形成二肽。以下哪項陳述正確？" },
      options: [
        { en: "A hydrolysis reaction takes place and a water molecule is used up.", ja: "加水分解が起こり、水分子が1つ消費される。", zh: "發生水解反應，消耗一個水分子。" },
        { en: "A condensation reaction takes place and a water molecule is released.", ja: "縮合反応が起こり、水分子が1つ放出される。", zh: "發生縮合反應，釋出一個水分子。" },
        { en: "A condensation reaction takes place and carbon dioxide is released.", ja: "縮合反応が起こり、二酸化炭素が放出される。", zh: "發生縮合反應，釋出二氧化碳。" },
        { en: "A hydrolysis reaction takes place and a hydrogen bond is formed.", ja: "加水分解が起こり、水素結合ができる。", zh: "發生水解反應，形成氫鍵。" }
      ], answer: 1,
      explanation: { en: "Joining amino acids is a condensation reaction: the –OH from the carboxyl group and an –H from the amine group leave as water, and a covalent peptide bond forms. Hydrolysis is the reverse (it uses water to break the bond), so the first and fourth options are wrong. No carbon dioxide is made, and the new bond is a covalent peptide bond, not a hydrogen bond.", ja: "アミノ酸の結合は縮合反応です。カルボキシ基の–OHとアミノ基の–Hが水として離れ、共有結合のペプチド結合ができます。加水分解は逆の反応（水を使って結合を切る）なので、1番目と4番目は誤りです。二酸化炭素はできず、新しい結合は水素結合ではなく共有結合のペプチド結合です。", zh: "氨基酸連接是縮合反應：羧基的 –OH 與氨基的 –H 以水的形式離開，形成共價的肽鍵。水解是相反的反應（用水斷開鍵），所以第一和第四項錯誤。過程不會產生二氧化碳，新形成的是共價肽鍵，而不是氫鍵。" } },

    /* q03 */
    { id: "b1-2-q03", type: "short", ahl: false, difficulty: 1, ref: "B1.2.2", paper: "2", commandTerm: "State", marks: 2,
      stem: { en: "State the word equation for the formation of a dipeptide from two amino acids, and name the bond formed.", ja: "2つのアミノ酸からジペプチドができる反応の言葉の式を書き、できる結合の名前を答えよ。", zh: "寫出由兩個氨基酸形成二肽的文字方程式，並寫出所形成的鍵的名稱。" },
      markscheme: [
        { en: "amino acid + amino acid → dipeptide + water", ja: "アミノ酸 + アミノ酸 → ジペプチド + 水", zh: "氨基酸 + 氨基酸 → 二肽 + 水" },
        { en: "peptide bond (accept covalent bond between C and N)", ja: "ペプチド結合（CとNの間の共有結合も可）", zh: "肽鍵（接受 C 與 N 之間的共價鍵）" }
      ],
      modelAnswer: { en: "Amino acid + amino acid → dipeptide + water. The bond formed is a peptide bond.", ja: "アミノ酸 + アミノ酸 → ジペプチド + 水。できる結合はペプチド結合である。", zh: "氨基酸 + 氨基酸 → 二肽 + 水。形成的鍵是肽鍵。" } },

    /* q04 */
    { id: "b1-2-q04", type: "order", ahl: true, difficulty: 2, ref: "B1.2.7", paper: "1A",
      stem: { en: "Put these levels of protein structure in order, from the simplest to the most complex.", ja: "タンパク質の構造の段階を、単純なものから複雑なものの順に並べよ。", zh: "把蛋白質結構的各級按由簡單至複雜的次序排列。" },
      items: [
        { en: "Primary: sequence of amino acids joined by peptide bonds", ja: "一次：ペプチド結合でつながったアミノ酸の配列", zh: "一級：由肽鍵連接的氨基酸序列" },
        { en: "Secondary: alpha helix or beta-pleated sheet from backbone hydrogen bonds", ja: "二次：骨格の水素結合によるαヘリックスまたはβシート", zh: "二級：由骨架氫鍵形成的α螺旋或β摺板" },
        { en: "Tertiary: whole polypeptide folded by R-group interactions", ja: "三次：R基の相互作用によるポリペプチド全体の折りたたみ", zh: "三級：由 R 基相互作用令整條多肽摺疊" },
        { en: "Quaternary: two or more polypeptides assembled together", ja: "四次：2本以上のポリペプチドの集まり", zh: "四級：兩條或以上多肽組合" }
      ],
      explanation: { en: "Each level builds on the one before: the sequence (primary) gives backbone hydrogen-bonded patterns (secondary), then R-group interactions fold the whole chain (tertiary), and finally several chains can assemble (quaternary).", ja: "各段階は前の段階の上に築かれます。配列（一次）が骨格の水素結合による形（二次）をつくり、R基の相互作用が鎖全体を折りたたみ（三次）、最後に複数の鎖が集まります（四次）。", zh: "每一級都建基於前一級：序列（一級）產生由骨架氫鍵形成的形態（二級），R 基相互作用令整條鏈摺疊（三級），最後多條鏈可以組合（四級）。" } },

    /* q05 */
    { id: "b1-2-q05", type: "mcq", ahl: false, difficulty: 1, ref: "B1.2.3", paper: "1A",
      stem: { en: "What is an essential amino acid?", ja: "必須アミノ酸とは何か。", zh: "甚麼是必需氨基酸？" },
      options: [
        { en: "One that is more important for survival than the others", ja: "他のアミノ酸より生存にとって重要なもの", zh: "對生存比其他氨基酸更重要的氨基酸" },
        { en: "One that cannot be made by the body and must be obtained from the diet", ja: "体内でつくれず、食事から取り入れなければならないもの", zh: "身體不能製造、必須從飲食攝取的氨基酸" },
        { en: "One that is found only in animal protein", ja: "動物性タンパク質にしか含まれないもの", zh: "只存在於動物蛋白質中的氨基酸" },
        { en: "One that can be made from other amino acids", ja: "他のアミノ酸からつくれるもの", zh: "可以由其他氨基酸製造的氨基酸" }
      ], answer: 1,
      explanation: { en: "Essential amino acids cannot be synthesized by the body, so food must supply them. The tempting wrong answer is the first: 'essential' describes the source, not importance, since all 20 are needed. The last describes non-essential amino acids. Essential amino acids are also found in plants.", ja: "必須アミノ酸は体内で合成できないため、食べ物から得る必要があります。まぎらわしい誤答は1番目で、「必須」は由来を表すもので重要度ではありません。20種類すべてが必要です。4番目は非必須アミノ酸の説明です。必須アミノ酸は植物にも含まれます。", zh: "必需氨基酸不能由身體合成，所以必須由食物提供。最容易選錯的是第一項：「必需」描述的是來源，而不是重要程度，因為全部 20 種都是需要的。最後一項描述的是非必需氨基酸。植物中也含有必需氨基酸。" } },

    /* q06 */
    { id: "b1-2-q06", type: "short", ahl: false, difficulty: 2, ref: "B1.2.3", paper: "2", commandTerm: "Explain", marks: 3,
      stem: { en: "Explain why people following a vegan diet need to plan their food choices carefully.", ja: "ビーガンの食事をする人が、食品選びをよく計画する必要がある理由を説明せよ。", zh: "解釋為何採用純素飲食的人需要小心計劃食物選擇。" },
      markscheme: [
        { en: "essential amino acids cannot be synthesized by the body / must be obtained from food", ja: "必須アミノ酸は体内で合成できない／食物から得る必要がある", zh: "必需氨基酸不能由身體合成／必須從食物攝取" },
        { en: "individual plant foods may be low in / lack one or more essential amino acids", ja: "個々の植物性食品は、必須アミノ酸の1つ以上が少ない／欠けていることがある", zh: "個別植物性食物可能缺少／欠缺一種或多種必需氨基酸" },
        { en: "so a variety of plant protein sources must be eaten to obtain all of the essential amino acids", ja: "したがって、すべての必須アミノ酸を得るには、多様な植物性タンパク源をとる必要がある", zh: "所以必須進食多種植物蛋白質來源，才能獲得所有必需氨基酸" },
        { en: "non-essential amino acids can be made by the body from other amino acids (so these are not a concern)", ja: "非必須アミノ酸は体が他のアミノ酸からつくれる（そのため問題ではない）", zh: "非必需氨基酸可由身體利用其他氨基酸製造（所以不成問題）" }
      ],
      modelAnswer: { en: "Essential amino acids cannot be made by the body, so they must come from food. A single plant food may be low in some essential amino acids, so a vegan must eat a variety of plant protein sources to get all of them. The non-essential ones can be made from other amino acids.", ja: "必須アミノ酸は体内でつくれないので食物から取る必要がある。植物性食品1種類では一部の必須アミノ酸が少ないことがあるので、ビーガンはすべてを得るために多様な植物性タンパク源をとらなければならない。非必須アミノ酸は他のアミノ酸からつくれる。", zh: "必需氨基酸不能由身體製造，所以必須來自食物。單一植物性食物可能缺少某些必需氨基酸，所以純素者必須進食多種植物蛋白質來源，才能獲得全部。非必需氨基酸則可由其他氨基酸製造。" } },

    /* q07 */
    { id: "b1-2-q07", type: "short", ahl: false, difficulty: 2, ref: "B1.2.4", paper: "2", commandTerm: "Calculate", marks: 3,
      stem: { en: "Calculate the number of different possible sequences for (a) a tripeptide and (b) a polypeptide of 10 amino acids. Assume 20 different amino acids can be used at each position. Show your working.", ja: "(a) トリペプチドと (b) アミノ酸10個のポリペプチドについて、可能な配列の数をそれぞれ計算せよ。各位置に20種類のアミノ酸が使えると仮定する。計算過程を示すこと。", zh: "計算 (a) 三肽和 (b) 由 10 個氨基酸組成的多肽各有多少種可能的序列。假設每個位置都可使用 20 種不同的氨基酸。須寫出計算步驟。" },
      markscheme: [
        { en: "number of sequences = 20<sup>n</sup> where n is the number of amino acids", ja: "配列の数 = 20<sup>n</sup>（nはアミノ酸の数）", zh: "序列數目 = 20<sup>n</sup>（n 為氨基酸數目）" },
        { en: "(a) 20<sup>3</sup> = 8000", ja: "(a) 20<sup>3</sup> = 8000", zh: "(a) 20<sup>3</sup> = 8000" },
        { en: "(b) 20<sup>10</sup> = 1.0 × 10<sup>13</sup> (accept 10 240 000 000 000 or ≈ 10<sup>13</sup>)", ja: "(b) 20<sup>10</sup> = 1.0 × 10<sup>13</sup>（10 240 000 000 000 または約10<sup>13</sup>も可）", zh: "(b) 20<sup>10</sup> = 1.0 × 10<sup>13</sup>（接受 10 240 000 000 000 或約 10<sup>13</sup>）" }
      ],
      modelAnswer: { en: "Each position can hold any of 20 amino acids, so the number of sequences is 20<sup>n</sup>. (a) 20<sup>3</sup> = 8000. (b) 20<sup>10</sup> ≈ 1.0 × 10<sup>13</sup>.", ja: "各位置には20種類のどれでも入るので、配列の数は20<sup>n</sup>。(a) 20<sup>3</sup> = 8000。(b) 20<sup>10</sup> ≈ 1.0 × 10<sup>13</sup>。", zh: "每個位置都可放入 20 種氨基酸中的任何一種，所以序列數目是 20<sup>n</sup>。(a) 20<sup>3</sup> = 8000。(b) 20<sup>10</sup> ≈ 1.0 × 10<sup>13</sup>。" } },

    /* q08 data: enzyme activity vs temperature (SVG + table) */
    { id: "b1-2-q08", type: "short", ahl: false, difficulty: 2, ref: "B1.2.5", paper: "1B", commandTerm: "Explain", marks: 4,
      data: {
        en: `<p>The graph shows the activity of a protein enzyme at different temperatures (illustrative data).</p>
<figure><svg viewBox="0 0 340 210" width="100%" role="img" aria-label="Line graph of enzyme activity against temperature">
<line x1="40" y1="170" x2="310" y2="170" stroke="var(--ink,#222)" stroke-width="1.5"/>
<line x1="40" y1="170" x2="40" y2="15" stroke="var(--ink,#222)" stroke-width="1.5"/>
<g stroke="var(--line,#999)" stroke-width="1"><line x1="72.5" y1="170" x2="72.5" y2="175"/><line x1="105" y1="170" x2="105" y2="175"/><line x1="137.5" y1="170" x2="137.5" y2="175"/><line x1="170" y1="170" x2="170" y2="175"/><line x1="202.5" y1="170" x2="202.5" y2="175"/><line x1="235" y1="170" x2="235" y2="175"/><line x1="267.5" y1="170" x2="267.5" y2="175"/><line x1="300" y1="170" x2="300" y2="175"/>
<line x1="35" y1="20" x2="40" y2="20"/><line x1="35" y1="95" x2="40" y2="95"/></g>
<g fill="var(--ink,#222)" font-size="10" text-anchor="middle"><text x="72.5" y="187">10</text><text x="105" y="187">20</text><text x="137.5" y="187">30</text><text x="170" y="187">40</text><text x="202.5" y="187">50</text><text x="235" y="187">60</text><text x="267.5" y="187">70</text><text x="300" y="187">80</text>
<text x="175" y="204">Temperature (°C)</text></g>
<g fill="var(--ink,#222)" font-size="10" text-anchor="end"><text x="32" y="174">0</text><text x="32" y="99">50</text><text x="32" y="24">100</text></g>
<text x="12" y="95" fill="var(--ink,#222)" font-size="10" text-anchor="middle" transform="rotate(-90 12 95)">Relative activity (%)</text>
<polyline fill="none" stroke="var(--accent,#2a7de1)" stroke-width="2.5" points="72.5,152 105,132.5 137.5,95 170,42.5 202.5,20 235,117.5 267.5,162.5 300,170"/>
<g fill="var(--accent,#2a7de1)"><circle cx="72.5" cy="152" r="3"/><circle cx="105" cy="132.5" r="3"/><circle cx="137.5" cy="95" r="3"/><circle cx="170" cy="42.5" r="3"/><circle cx="202.5" cy="20" r="3"/><circle cx="235" cy="117.5" r="3"/><circle cx="267.5" cy="162.5" r="3"/><circle cx="300" cy="170" r="3"/></g>
</svg><figcaption>Enzyme activity (relative %) against temperature. Values: 10 °C 12; 20 °C 25; 30 °C 50; 40 °C 85; 50 °C 100; 60 °C 35; 70 °C 5; 80 °C 0.</figcaption></figure>`,
        ja: `<p>グラフは、タンパク質である酵素の活性を温度ごとに示したものである（説明用データ）。</p>
<figure><svg viewBox="0 0 340 210" width="100%" role="img" aria-label="酵素活性と温度の折れ線グラフ">
<line x1="40" y1="170" x2="310" y2="170" stroke="var(--ink,#222)" stroke-width="1.5"/>
<line x1="40" y1="170" x2="40" y2="15" stroke="var(--ink,#222)" stroke-width="1.5"/>
<g stroke="var(--line,#999)" stroke-width="1"><line x1="72.5" y1="170" x2="72.5" y2="175"/><line x1="105" y1="170" x2="105" y2="175"/><line x1="137.5" y1="170" x2="137.5" y2="175"/><line x1="170" y1="170" x2="170" y2="175"/><line x1="202.5" y1="170" x2="202.5" y2="175"/><line x1="235" y1="170" x2="235" y2="175"/><line x1="267.5" y1="170" x2="267.5" y2="175"/><line x1="300" y1="170" x2="300" y2="175"/>
<line x1="35" y1="20" x2="40" y2="20"/><line x1="35" y1="95" x2="40" y2="95"/></g>
<g fill="var(--ink,#222)" font-size="10" text-anchor="middle"><text x="72.5" y="187">10</text><text x="105" y="187">20</text><text x="137.5" y="187">30</text><text x="170" y="187">40</text><text x="202.5" y="187">50</text><text x="235" y="187">60</text><text x="267.5" y="187">70</text><text x="300" y="187">80</text>
<text x="175" y="204">温度 (°C) / Temperature</text></g>
<g fill="var(--ink,#222)" font-size="10" text-anchor="end"><text x="32" y="174">0</text><text x="32" y="99">50</text><text x="32" y="24">100</text></g>
<text x="12" y="95" fill="var(--ink,#222)" font-size="10" text-anchor="middle" transform="rotate(-90 12 95)">相対活性 (%)</text>
<polyline fill="none" stroke="var(--accent,#2a7de1)" stroke-width="2.5" points="72.5,152 105,132.5 137.5,95 170,42.5 202.5,20 235,117.5 267.5,162.5 300,170"/>
<g fill="var(--accent,#2a7de1)"><circle cx="72.5" cy="152" r="3"/><circle cx="105" cy="132.5" r="3"/><circle cx="137.5" cy="95" r="3"/><circle cx="170" cy="42.5" r="3"/><circle cx="202.5" cy="20" r="3"/><circle cx="235" cy="117.5" r="3"/><circle cx="267.5" cy="162.5" r="3"/><circle cx="300" cy="170" r="3"/></g>
</svg><figcaption>酵素活性（相対％）と温度。値：10 °C 12、20 °C 25、30 °C 50、40 °C 85、50 °C 100、60 °C 35、70 °C 5、80 °C 0。</figcaption></figure>`,
        zh: `<p>圖表顯示一種蛋白質酶在不同溫度下的活性（示意數據）。</p>
<figure><svg viewBox="0 0 340 210" width="100%" role="img" aria-label="酶活性與溫度的折線圖">
<line x1="40" y1="170" x2="310" y2="170" stroke="var(--ink,#222)" stroke-width="1.5"/>
<line x1="40" y1="170" x2="40" y2="15" stroke="var(--ink,#222)" stroke-width="1.5"/>
<g stroke="var(--line,#999)" stroke-width="1"><line x1="72.5" y1="170" x2="72.5" y2="175"/><line x1="105" y1="170" x2="105" y2="175"/><line x1="137.5" y1="170" x2="137.5" y2="175"/><line x1="170" y1="170" x2="170" y2="175"/><line x1="202.5" y1="170" x2="202.5" y2="175"/><line x1="235" y1="170" x2="235" y2="175"/><line x1="267.5" y1="170" x2="267.5" y2="175"/><line x1="300" y1="170" x2="300" y2="175"/>
<line x1="35" y1="20" x2="40" y2="20"/><line x1="35" y1="95" x2="40" y2="95"/></g>
<g fill="var(--ink,#222)" font-size="10" text-anchor="middle"><text x="72.5" y="187">10</text><text x="105" y="187">20</text><text x="137.5" y="187">30</text><text x="170" y="187">40</text><text x="202.5" y="187">50</text><text x="235" y="187">60</text><text x="267.5" y="187">70</text><text x="300" y="187">80</text>
<text x="175" y="204">溫度 (°C) / Temperature</text></g>
<g fill="var(--ink,#222)" font-size="10" text-anchor="end"><text x="32" y="174">0</text><text x="32" y="99">50</text><text x="32" y="24">100</text></g>
<text x="12" y="95" fill="var(--ink,#222)" font-size="10" text-anchor="middle" transform="rotate(-90 12 95)">相對活性 (%)</text>
<polyline fill="none" stroke="var(--accent,#2a7de1)" stroke-width="2.5" points="72.5,152 105,132.5 137.5,95 170,42.5 202.5,20 235,117.5 267.5,162.5 300,170"/>
<g fill="var(--accent,#2a7de1)"><circle cx="72.5" cy="152" r="3"/><circle cx="105" cy="132.5" r="3"/><circle cx="137.5" cy="95" r="3"/><circle cx="170" cy="42.5" r="3"/><circle cx="202.5" cy="20" r="3"/><circle cx="235" cy="117.5" r="3"/><circle cx="267.5" cy="162.5" r="3"/><circle cx="300" cy="170" r="3"/></g>
</svg><figcaption>酶活性（相對 %）與溫度。數值：10 °C 12；20 °C 25；30 °C 50；40 °C 85；50 °C 100；60 °C 35；70 °C 5；80 °C 0。</figcaption></figure>`
      },
      stem: { en: "Explain the change in enzyme activity between 50 °C and 70 °C.", ja: "50 °Cから70 °Cの間の酵素活性の変化を説明せよ。", zh: "解釋酶活性在 50 °C 至 70 °C 之間的變化。" },
      markscheme: [
        { en: "activity falls from 100 % to 5 % (quote data)", ja: "活性は100 %から5 %に低下する（データを引用）", zh: "活性由 100 % 下降至 5 %（引用數據）" },
        { en: "high temperature gives molecules more kinetic energy / they vibrate more", ja: "高温で分子の運動エネルギーが増える／より激しく振動する", zh: "高溫令分子的動能增加／振動更劇烈" },
        { en: "this breaks hydrogen bonds / ionic bonds / weak interactions that maintain the three-dimensional shape", ja: "これが、立体構造を保つ水素結合／イオン結合／弱い相互作用を切る", zh: "這會破壞維持三維形狀的氫鍵／離子鍵／弱相互作用" },
        { en: "the protein is denatured: the shape of the active site changes so the substrate no longer fits", ja: "タンパク質が変性し、活性部位の形が変わって基質が合わなくなる", zh: "蛋白質變性：活性位點的形狀改變，底物不能再配合" },
        { en: "peptide bonds are not broken / primary structure is unchanged (credit as additional precision)", ja: "ペプチド結合は切れない／一次構造は変わらない（正確さの加点）", zh: "肽鍵沒有被破壞／一級結構不變（作為額外的準確表述給分）" }
      ],
      modelAnswer: { en: "Activity falls from 100% at 50 °C to 5% at 70 °C. At higher temperature the enzyme's molecules vibrate more, which breaks the hydrogen bonds and other weak interactions holding its tertiary structure. The enzyme is denatured, so the active site changes shape and the substrate no longer fits. The peptide bonds stay intact.", ja: "活性は50 °Cの100%から70 °Cの5%に低下する。高温では酵素分子がより激しく振動し、三次構造を保つ水素結合などの弱い相互作用が切れる。酵素は変性し、活性部位の形が変わって基質が合わなくなる。ペプチド結合は切れない。", zh: "活性由 50 °C 時的 100% 下降至 70 °C 時的 5%。溫度升高時，酶分子振動更劇烈，破壞維持其三級結構的氫鍵和其他弱相互作用。酶因而變性，活性位點改變形狀，底物不能再配合。肽鍵保持完整。" } },

    /* q09 */
    { id: "b1-2-q09", type: "mcq", ahl: false, difficulty: 2, ref: "B1.2.5", paper: "1A",
      stem: { en: "A solution of a protein is heated until it is denatured. Which statement about the denatured protein is correct?", ja: "タンパク質の溶液を加熱して変性させた。変性したタンパク質について正しい記述はどれか。", zh: "把蛋白質溶液加熱至變性。關於變性後的蛋白質，以下哪項陳述正確？" },
      options: [
        { en: "Its peptide bonds are broken, so it is split into amino acids.", ja: "ペプチド結合が切れ、アミノ酸に分解される。", zh: "它的肽鍵被破壞，分解成氨基酸。" },
        { en: "Its amino acid sequence is unchanged, but its three-dimensional shape has changed.", ja: "アミノ酸配列は変わらないが、立体構造が変わった。", zh: "它的氨基酸序列不變，但三維形狀已改變。" },
        { en: "Its amino acid sequence has changed, but its shape is the same.", ja: "アミノ酸配列が変わったが、形は同じである。", zh: "它的氨基酸序列已改變，但形狀不變。" },
        { en: "Its R-groups have been removed.", ja: "R基が取り除かれた。", zh: "它的 R 基已被移除。" }
      ], answer: 1,
      explanation: { en: "Heat disrupts the weak interactions that hold the folded shape, but the strong covalent peptide bonds remain, so the sequence (primary structure) is unchanged. The first option is the common mistake: breaking peptide bonds would be hydrolysis, not denaturation. R-groups are part of the amino acids and stay attached.", ja: "熱は折りたたまれた形を保つ弱い相互作用を乱しますが、強い共有結合であるペプチド結合は残るので、配列（一次構造）は変わりません。1番目はよくある誤りで、ペプチド結合を切るのは加水分解であって変性ではありません。R基はアミノ酸の一部で、ついたままです。", zh: "高溫破壞維持摺疊形狀的弱相互作用，但強共價的肽鍵仍然存在，所以序列（一級結構）不變。第一項是常見錯誤：破壞肽鍵是水解，不是變性。R 基是氨基酸的一部分，仍然連着。" } },

    /* q10 */
    { id: "b1-2-q10", type: "multi", ahl: true, difficulty: 2, ref: "B1.2.6", paper: "1A",
      stem: { en: "Select ALL the correct statements about R-groups.", ja: "R基について正しい記述をすべて選べ。", zh: "選出所有關於 R 基的正確陳述。" },
      options: [
        { en: "R-groups can be hydrophobic or hydrophilic.", ja: "R基は疎水性にも親水性にもなりうる。", zh: "R 基可以是疏水性或親水性。" },
        { en: "Hydrophilic R-groups can be polar or charged.", ja: "親水性のR基は極性のものも電荷をもつものもある。", zh: "親水性 R 基可以是極性或帶電荷。" },
        { en: "The R-group is the same in all 20 amino acids.", ja: "R基は20種類すべてのアミノ酸で同じである。", zh: "20 種氨基酸的 R 基都相同。" },
        { en: "Acidic R-groups can release H⁺ and become negatively charged.", ja: "酸性のR基はH⁺を放出して負に帯電できる。", zh: "酸性 R 基可釋出 H⁺ 而帶負電。" }
      ], answer: [0, 1, 3],
      explanation: { en: "R-groups are hydrophobic (non-polar) or hydrophilic (polar or charged), and charged ones are acidic (lose H⁺, become negative) or basic (gain H⁺, become positive). The third statement is false: the R-group is the one part that varies; the backbone groups are the same.", ja: "R基は疎水性（無極性）か親水性（極性または電荷をもつもの）で、電荷をもつものは酸性（H⁺を放出して負）か塩基性（H⁺を受け取って正）です。3番目は誤りで、R基は変わる唯一の部分です。骨格の基は同じです。", zh: "R 基是疏水性（非極性）或親水性（極性或帶電荷），帶電荷的分酸性（釋出 H⁺、帶負電）或鹼性（接收 H⁺、帶正電）。第三項錯誤：R 基是唯一會變的部分，骨架的基團是相同的。" } },

    /* q11 */
    { id: "b1-2-q11", type: "mcq", ahl: true, difficulty: 2, ref: "B1.2.8", paper: "1A",
      stem: { en: "Which atoms form the hydrogen bonds that stabilize an alpha helix?", ja: "αヘリックスを安定させる水素結合をつくる原子はどれか。", zh: "哪些原子形成穩定α螺旋的氫鍵？" },
      options: [
        { en: "The oxygen of a backbone C=O and the hydrogen of a backbone N–H", ja: "骨格のC=Oの酸素と、骨格のN–Hの水素", zh: "骨架 C=O 的氧原子和骨架 N–H 的氫原子" },
        { en: "The sulfur atoms of two R-groups", ja: "2つのR基の硫黄原子", zh: "兩個 R 基的硫原子" },
        { en: "A positively charged R-group and a negatively charged R-group", ja: "正に帯電したR基と負に帯電したR基", zh: "帶正電的 R 基和帶負電的 R 基" },
        { en: "Non-polar R-groups clustering away from water", ja: "水を避けて集まる無極性のR基", zh: "避開水而聚集的非極性 R 基" }
      ], answer: 0,
      explanation: { en: "Secondary structure comes from hydrogen bonds between backbone C=O and N–H groups at regular intervals. The other options describe tertiary interactions: S–S bonds (disulfide), ionic bonds and hydrophobic interactions all involve R-groups, which are not part of the helix bonding.", ja: "二次構造は、骨格のC=OとN–Hの間に規則的な間隔でできる水素結合によります。他の選択肢は三次構造の相互作用です。S–S（ジスルフィド）結合、イオン結合、疎水性相互作用はすべてR基に関わり、ヘリックスの結合には関与しません。", zh: "二級結構源自骨架上 C=O 與 N–H 之間有規律間隔的氫鍵。其他選項描述的是三級結構的相互作用：S–S（二硫）鍵、離子鍵和疏水相互作用都涉及 R 基，而 R 基並不參與螺旋的鍵合。" } },

    /* q12 */
    { id: "b1-2-q12", type: "match", ahl: true, difficulty: 2, ref: "B1.2.9", paper: "1A",
      stem: { en: "Match each interaction in tertiary structure to its description.", ja: "三次構造の各相互作用を、その説明と組み合わせよ。", zh: "把三級結構中的每種相互作用與其描述配對。" },
      pairs: [
        { left: { en: "Disulfide bond", ja: "ジスルフィド結合", zh: "二硫鍵" }, right: { en: "Covalent S–S link between the R-groups of two cysteines", ja: "2つのシステインのR基の間のS–S共有結合", zh: "兩個半胱氨酸 R 基之間的 S–S 共價連接" } },
        { left: { en: "Ionic bond", ja: "イオン結合", zh: "離子鍵" }, right: { en: "Attraction between positively and negatively charged R-groups", ja: "正と負に帯電したR基の間の引力", zh: "帶正電與帶負電 R 基之間的吸引力" } },
        { left: { en: "Hydrophobic interaction", ja: "疎水性相互作用", zh: "疏水相互作用" }, right: { en: "Non-polar R-groups clustering together away from water", ja: "無極性のR基が水を避けて集まる", zh: "非極性 R 基聚在一起、避開水" } },
        { left: { en: "Hydrogen bond", ja: "水素結合", zh: "氫鍵" }, right: { en: "Attraction between partly charged atoms in polar R-groups", ja: "極性のR基の中の部分的に電荷をもつ原子間の引力", zh: "極性 R 基中帶部分電荷的原子之間的吸引力" } }
      ],
      explanation: { en: "Only the disulfide bond is covalent, so it is the strongest. The ionic bond needs R-groups to have gained or lost H⁺ to become charged. The hydrophobic interaction is a clustering effect driven by water rather than a true bond.", ja: "共有結合なのはジスルフィド結合だけで、最も強い結合です。イオン結合は、R基がH⁺を受け取るか放出して電荷をもつ必要があります。疎水性相互作用は、本当の結合ではなく、水によって起こる集合の効果です。", zh: "只有二硫鍵是共價鍵，所以最強。離子鍵需要 R 基接收或釋出 H⁺ 而帶電荷。疏水相互作用是由水驅動的聚集效應，而不是真正的鍵。" } },

    /* q13 */
    { id: "b1-2-q13", type: "short", ahl: true, difficulty: 3, ref: "B1.2.9", paper: "2", commandTerm: "Distinguish", marks: 4,
      stem: { en: "Distinguish between the hydrogen bonds that stabilize secondary structure and those that contribute to tertiary structure.", ja: "二次構造を安定させる水素結合と、三次構造に寄与する水素結合を区別せよ。", zh: "區分穩定二級結構的氫鍵與有助三級結構的氫鍵。" },
      markscheme: [
        { en: "secondary: between the C=O (oxygen) and N–H (hydrogen) groups of the backbone / peptide groups", ja: "二次：骨格／ペプチド基のC=O（酸素）とN–H（水素）の間", zh: "二級：骨架／肽基的 C=O（氧）與 N–H（氫）之間" },
        { en: "tertiary: between polar R-groups (side groups)", ja: "三次：極性のR基（側鎖）の間", zh: "三級：極性 R 基（側鏈）之間" },
        { en: "secondary: regular, repeating pattern giving alpha helices and beta-pleated sheets", ja: "二次：規則的で繰り返しのパターンで、αヘリックスとβシートをつくる", zh: "二級：有規律、重複的模式，形成α螺旋和β摺板" },
        { en: "tertiary: irregular / depends on the sequence and positions of the R-groups, giving the overall 3D shape", ja: "三次：不規則／R基の配列と位置による。全体の立体構造をつくる", zh: "三級：不規則／視乎 R 基的序列和位置，形成整體三維形狀" }
      ],
      modelAnswer: { en: "In secondary structure the hydrogen bonds form between the C=O and N–H groups of the polypeptide backbone, in a regular repeating pattern that gives alpha helices and beta-pleated sheets. In tertiary structure the hydrogen bonds form between polar R-groups, in an irregular pattern that depends on the sequence and gives the overall 3D shape of the polypeptide.", ja: "二次構造の水素結合は、ポリペプチド骨格のC=OとN–Hの間に規則的で繰り返しのパターンでできて、αヘリックスとβシートをつくる。三次構造の水素結合は極性のR基の間に不規則なパターンでできて、配列によって決まり、ポリペプチド全体の立体構造をつくる。", zh: "二級結構的氫鍵形成於多肽骨架上的 C=O 與 N–H 之間，模式有規律而重複，形成α螺旋和β摺板。三級結構的氫鍵形成於極性 R 基之間，模式不規則，視乎序列而定，形成多肽的整體三維形狀。" } },

    /* q14 data table: pH and an enzyme with ionic bonds */
    { id: "b1-2-q14", type: "short", ahl: true, difficulty: 3, ref: "B1.2.9", paper: "1B", commandTerm: "Explain", marks: 4,
      data: {
        en: `<table><tr><th>pH of solution</th><th>Relative activity of protein (%)</th></tr>
<tr><td>2</td><td>0</td></tr><tr><td>4</td><td>35</td></tr><tr><td>6</td><td>90</td></tr><tr><td>7</td><td>100</td></tr><tr><td>8</td><td>85</td></tr><tr><td>10</td><td>20</td></tr><tr><td>12</td><td>0</td></tr></table><p>(illustrative data)</p>`,
        ja: `<table><tr><th>溶液のpH</th><th>タンパク質の相対活性 (%)</th></tr>
<tr><td>2</td><td>0</td></tr><tr><td>4</td><td>35</td></tr><tr><td>6</td><td>90</td></tr><tr><td>7</td><td>100</td></tr><tr><td>8</td><td>85</td></tr><tr><td>10</td><td>20</td></tr><tr><td>12</td><td>0</td></tr></table><p>（説明用データ）</p>`,
        zh: `<table><tr><th>溶液的 pH 值</th><th>蛋白質的相對活性 (%)</th></tr>
<tr><td>2</td><td>0</td></tr><tr><td>4</td><td>35</td></tr><tr><td>6</td><td>90</td></tr><tr><td>7</td><td>100</td></tr><tr><td>8</td><td>85</td></tr><tr><td>10</td><td>20</td></tr><tr><td>12</td><td>0</td></tr></table><p>（示意數據）</p>`
      },
      stem: { en: "The table shows the activity of a protein at different pH values. Using your knowledge of tertiary structure, explain why the activity falls to 0 at pH 2, even though the peptide bonds are not broken.", ja: "表は、さまざまなpHでのタンパク質の活性を示す。三次構造の知識を用いて、ペプチド結合が切れていないにもかかわらず、pH 2で活性が0になる理由を説明せよ。", zh: "表中顯示一種蛋白質在不同 pH 值下的活性。運用你對三級結構的知識，解釋為何在 pH 2 時活性降至 0，即使肽鍵沒有被破壞。" },
      markscheme: [
        { en: "at low pH there is a high concentration of H⁺", ja: "低pHではH⁺の濃度が高い", zh: "低 pH 值時 H⁺ 濃度高" },
        { en: "acidic R-groups (negatively charged –COO⁻) gain H⁺ and lose their charge / charges on R-groups change", ja: "酸性のR基（負に帯電した–COO⁻）がH⁺を受け取って電荷を失う／R基の電荷が変わる", zh: "酸性 R 基（帶負電的 –COO⁻）接收 H⁺ 而失去電荷／R 基的電荷改變" },
        { en: "ionic bonds (and hydrogen bonds) between R-groups are broken / disrupted", ja: "R基どうしのイオン結合（と水素結合）が切れる／乱れる", zh: "R 基之間的離子鍵（和氫鍵）被破壞／擾亂" },
        { en: "tertiary structure / 3D shape changes: the protein is denatured, so the active site / binding site no longer works", ja: "三次構造／立体構造が変わる：タンパク質が変性し、活性部位／結合部位が働かなくなる", zh: "三級結構／三維形狀改變：蛋白質變性，活性位點／結合位點不再有功能" },
        { en: "peptide bonds (and disulfide bonds) are strong covalent bonds that remain, so the primary structure is unchanged (accept as context)", ja: "ペプチド結合（とジスルフィド結合）は強い共有結合で残るので、一次構造は変わらない（背景説明として可）", zh: "肽鍵（和二硫鍵）是強共價鍵，仍然存在，所以一級結構不變（接受作為背景說明）" }
      ],
      modelAnswer: { en: "At pH 2 there are many H⁺ ions, so negatively charged R-groups pick up H⁺ and lose their charge, and charges on other R-groups change. The ionic bonds (and some hydrogen bonds) between R-groups are therefore disrupted, so the tertiary structure changes and the protein is denatured. Its shape no longer works, so activity is 0. The peptide bonds are covalent and stay intact.", ja: "pH 2ではH⁺が多く、負に帯電したR基がH⁺を受け取って電荷を失い、他のR基の電荷も変わる。このためR基どうしのイオン結合（と一部の水素結合）が乱れ、三次構造が変わってタンパク質が変性する。形が働かなくなるので活性は0になる。ペプチド結合は共有結合で残っている。", zh: "在 pH 2 時有大量 H⁺，帶負電的 R 基接收 H⁺ 而失去電荷，其他 R 基的電荷也會改變。於是 R 基之間的離子鍵（和部分氫鍵）受到破壞，三級結構改變，蛋白質變性。它的形狀不再有功能，所以活性為 0。肽鍵是共價鍵，保持完整。" } },

    /* q15 */
    { id: "b1-2-q15", type: "short", ahl: true, difficulty: 3, ref: "B1.2.10", paper: "2", commandTerm: "Predict", marks: 4,
      stem: { en: "Predict where the hydrophobic amino acids will be located in (a) a water-soluble globular protein and (b) an integral membrane protein. In each case, explain your prediction.", ja: "疎水性アミノ酸が (a) 水溶性の球状タンパク質と (b) 膜の内在性タンパク質のどこに位置するかを予測せよ。それぞれ、その予測を説明すること。", zh: "預測疏水性氨基酸在 (a) 水溶性球狀蛋白質和 (b) 膜整合蛋白質中的位置。每種情況都要解釋你的預測。" },
      markscheme: [
        { en: "(a) hydrophobic amino acids clustered in the core / centre of the protein", ja: "(a) 疎水性アミノ酸はタンパク質の芯／中心に集まる", zh: "(a) 疏水性氨基酸聚集在蛋白質的核心／中心" },
        { en: "(a) because they avoid the surrounding water, while hydrophilic R-groups on the outside interact with water", ja: "(a) 周りの水を避けるため。外側の親水性R基が水と相互作用する", zh: "(a) 因為它們避開周圍的水，而外面的親水性 R 基與水相互作用" },
        { en: "(b) hydrophobic amino acids on the outside of the region of the protein that is within the membrane", ja: "(b) 膜の中にある領域の外側に疎水性アミノ酸がある", zh: "(b) 疏水性氨基酸位於蛋白質在膜內那個區域的外面" },
        { en: "(b) because they interact with the hydrophobic fatty-acid tails of phospholipids, which helps embed the protein in the membrane (hydrophilic regions are in the aqueous parts outside the bilayer)", ja: "(b) リン脂質の疎水性の脂肪酸の尾と相互作用し、タンパク質を膜に埋め込むのを助ける（親水性の領域は二重層の外の水っぽい部分にある）", zh: "(b) 因為它們與磷脂的疏水性脂肪酸尾部相互作用，有助把蛋白質嵌入膜內（親水性區域則在雙層外含水的部分）" }
      ],
      modelAnswer: { en: "(a) The hydrophobic amino acids are in the core of the protein, away from the surrounding water, with hydrophilic R-groups on the surface in contact with water. (b) In the part of the protein within the membrane the hydrophobic amino acids are on the outside, because they interact with the hydrophobic fatty-acid tails of the phospholipids and hold the protein in the bilayer.", ja: "(a) 疎水性アミノ酸は、周りの水から離れたタンパク質の芯にあり、親水性のR基が水と接する表面にある。(b) 膜の中にある部分では、疎水性アミノ酸は外側にあり、リン脂質の疎水性の脂肪酸の尾と相互作用して、タンパク質を二重層に保持する。", zh: "(a) 疏水性氨基酸在蛋白質的核心，遠離周圍的水，親水性 R 基則在表面與水接觸。(b) 在蛋白質位於膜內的部分，疏水性氨基酸在外面，因為它們與磷脂的疏水性脂肪酸尾部相互作用，把蛋白質固定在雙層中。" } },

    /* q16 */
    { id: "b1-2-q16", type: "mcq", ahl: true, difficulty: 2, ref: "B1.2.11", paper: "1A",
      stem: { en: "What does it mean to say that a protein is conjugated?", ja: "あるタンパク質が複合タンパク質であるとはどういう意味か。", zh: "說一種蛋白質是綴合蛋白質，是甚麼意思？" },
      options: [
        { en: "It is made of two or more polypeptide chains.", ja: "2本以上のポリペプチド鎖でできている。", zh: "它由兩條或以上多肽鏈組成。" },
        { en: "It contains a non-polypeptide (prosthetic) group, such as haem.", ja: "ヘムのような、ポリペプチド以外（補欠分子族）の基を含む。", zh: "它含有非多肽（輔）基團，例如血紅素。" },
        { en: "It contains disulfide bonds between its chains.", ja: "鎖の間にジスルフィド結合がある。", zh: "它的各鏈之間有二硫鍵。" },
        { en: "It has been denatured and has joined with other proteins.", ja: "変性して、他のタンパク質と結合した。", zh: "它已變性，並與其他蛋白質結合。" }
      ], answer: 1,
      explanation: { en: "Conjugated proteins have a non-polypeptide prosthetic group, for example the haem groups of haemoglobin. The first option defines quaternary structure, which is a different idea: insulin and collagen have several chains but are non-conjugated. Disulfide bonds link cysteines and say nothing about a prosthetic group.", ja: "複合タンパク質は、ヘモグロビンのヘム基のように、ポリペプチド以外の補欠分子族をもちます。1番目は四次構造の定義で、別の概念です。インスリンとコラーゲンは複数の鎖をもちますが非複合です。ジスルフィド結合はシステインどうしをつなぐもので、補欠分子族とは関係ありません。", zh: "綴合蛋白質含有非多肽的輔基，例如血紅蛋白的血紅素基團。第一項是四級結構的定義，是另一個概念：胰島素和膠原蛋白有多條鏈，但屬非綴合蛋白質。二硫鍵連接半胱氨酸，與輔基無關。" } },

    /* q17 */
    { id: "b1-2-q17", type: "multi", ahl: true, difficulty: 3, ref: "B1.2.11", paper: "1A",
      stem: { en: "Which of these proteins have a quaternary structure? Select ALL that apply.", ja: "次のうち、四次構造をもつタンパク質はどれか。当てはまるものをすべて選べ。", zh: "以下哪些蛋白質具有四級結構？選出所有適用的。" },
      options: [
        { en: "Insulin, made of two polypeptide chains linked by disulfide bonds", ja: "インスリン：ジスルフィド結合でつながった2本のポリペプチド鎖でできている", zh: "胰島素：由二硫鍵連接的兩條多肽鏈組成" },
        { en: "A protein made of one polypeptide chain with a haem group attached", ja: "1本のポリペプチド鎖にヘム基がついたタンパク質", zh: "由一條多肽鏈加上一個血紅素基團組成的蛋白質" },
        { en: "Collagen, made of three polypeptide chains wound into a triple helix", ja: "コラーゲン：3本のポリペプチド鎖が三重らせんになったもの", zh: "膠原蛋白：由三條多肽鏈纏繞成三股螺旋" },
        { en: "A single polypeptide folded by disulfide bonds between two of its own cysteines", ja: "1本のポリペプチドが、自身の2つのシステイン間のジスルフィド結合で折りたたまれたもの", zh: "一條多肽由自身兩個半胱氨酸之間的二硫鍵摺疊而成" }
      ], answer: [0, 2],
      explanation: { en: "Quaternary structure needs at least two polypeptide chains: insulin (2) and collagen (3). The second option is conjugated (it has a haem group) but has only one chain, so it is not quaternary. The last option has a disulfide bond, but within one chain, which is tertiary structure.", ja: "四次構造には少なくとも2本のポリペプチド鎖が必要です。インスリン（2本）とコラーゲン（3本）が該当します。2番目は複合ですが（ヘム基をもつ）鎖が1本だけなので四次構造ではありません。最後はジスルフィド結合がありますが1本の鎖の中なので、三次構造です。", zh: "四級結構需要至少兩條多肽鏈：胰島素（2 條）和膠原蛋白（3 條）。第二項是綴合蛋白質（有血紅素基團），但只有一條鏈，所以不是四級結構。最後一項雖有二硫鍵，但在同一條鏈內，屬三級結構。" } },

    /* q18 data: sequence comparison */
    { id: "b1-2-q18", type: "short", ahl: true, difficulty: 3, ref: "B1.2.7", paper: "1B", commandTerm: "Suggest", marks: 3,
      data: {
        en: `<p>Two forms of a short region of a polypeptide are compared. The R-group type at each position is shown (illustrative data). The forms differ at position 5 only.</p>
<table><tr><th>Position</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>
<tr><td>Normal form</td><td>polar</td><td>polar</td><td>non-polar</td><td>acidic</td><td>acidic (charged –)</td><td>non-polar</td><td>polar</td></tr>
<tr><td>Altered form</td><td>polar</td><td>polar</td><td>non-polar</td><td>acidic</td><td>non-polar</td><td>non-polar</td><td>polar</td></tr></table>
<p>In the normal protein, the R-group at position 5 forms an ionic bond with a basic (positively charged) R-group elsewhere in the chain.</p>`,
        ja: `<p>ポリペプチドの短い領域の2つの型を比べた。各位置のR基の種類を示す（説明用データ）。2つの型は5番目の位置だけが異なる。</p>
<table><tr><th>位置</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>
<tr><td>正常型</td><td>極性</td><td>極性</td><td>無極性</td><td>酸性</td><td>酸性（負に帯電）</td><td>無極性</td><td>極性</td></tr>
<tr><td>変化した型</td><td>極性</td><td>極性</td><td>無極性</td><td>酸性</td><td>無極性</td><td>無極性</td><td>極性</td></tr></table>
<p>正常なタンパク質では、5番目のR基が、鎖の別の場所にある塩基性（正に帯電）のR基とイオン結合をつくる。</p>`,
        zh: `<p>比較多肽某一小段區域的兩種形式。表中顯示每個位置的 R 基類型（示意數據）。兩種形式只在第 5 個位置不同。</p>
<table><tr><th>位置</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>
<tr><td>正常形式</td><td>極性</td><td>極性</td><td>非極性</td><td>酸性</td><td>酸性（帶負電）</td><td>非極性</td><td>極性</td></tr>
<tr><td>改變後的形式</td><td>極性</td><td>極性</td><td>非極性</td><td>酸性</td><td>非極性</td><td>非極性</td><td>極性</td></tr></table>
<p>在正常的蛋白質中，第 5 個位置的 R 基與長鏈上另一處的鹼性（帶正電）R 基形成離子鍵。</p>`
      },
      stem: { en: "Suggest how the change at position 5 could alter the protein's structure and function.", ja: "5番目の位置の変化が、タンパク質の構造と働きをどう変えうるかを示唆せよ。", zh: "提出 5 號位置的改變如何可能改變蛋白質的結構和功能。" },
      markscheme: [
        { en: "the altered R-group is non-polar / uncharged so cannot form the ionic bond with the basic R-group", ja: "変化したR基は無極性／電荷なしなので、塩基性のR基とイオン結合をつくれない", zh: "改變後的 R 基是非極性／不帶電，不能與鹼性 R 基形成離子鍵" },
        { en: "(may form hydrophobic interactions instead, so) the tertiary structure / folding changes", ja: "（代わりに疎水性相互作用をつくるかもしれず）三次構造／折りたたみが変わる", zh: "（可能改為形成疏水相互作用，所以）三級結構／摺疊改變" },
        { en: "a changed 3D shape could change the active site / binding site, so the function is reduced or lost", ja: "立体構造が変わると活性部位／結合部位が変わり、働きが低下または失われる", zh: "三維形狀改變可令活性位點／結合位點改變，所以功能下降或喪失" },
        { en: "the sequence (primary structure) determines the position of each R-group and so the final shape (accept)", ja: "配列（一次構造）が各R基の位置、ひいては最終的な形を決める（可）", zh: "序列（一級結構）決定每個 R 基的位置，從而決定最終形狀（接受）" }
      ],
      modelAnswer: { en: "The altered non-polar R-group cannot form the ionic bond with the positive R-group, and it may instead cluster in hydrophobic interactions. This changes the folding, so the tertiary structure and three-dimensional shape change. The active or binding site may then no longer work, so the protein's function falls or is lost.", ja: "変化した無極性のR基は、正のR基とイオン結合をつくれず、代わりに疎水性相互作用で集まるかもしれない。これで折りたたみが変わり、三次構造と立体構造が変わる。すると活性部位や結合部位が働かなくなり、タンパク質の働きが低下または失われる。", zh: "改變後的非極性 R 基不能與帶正電的 R 基形成離子鍵，反而可能聚集成疏水相互作用。這改變了摺疊，使三級結構和三維形狀改變。活性位點或結合位點可能不再有功能，所以蛋白質的功能下降或喪失。" } },

    /* q19 */
    { id: "b1-2-q19", type: "short", ahl: true, difficulty: 2, ref: "B1.2.12", paper: "2", commandTerm: "Compare and contrast", marks: 4,
      stem: { en: "Compare and contrast a globular protein and a fibrous protein, using insulin and collagen as examples.", ja: "インスリンとコラーゲンを例に、球状タンパク質と繊維状タンパク質を比較し、違いを述べよ。", zh: "以胰島素和膠原蛋白為例，比較並對照球狀蛋白質和纖維狀蛋白質。" },
      markscheme: [
        { en: "similarity: both are proteins made of polypeptide chains with more than one chain (quaternary) / both non-conjugated / both have shapes that suit their function", ja: "共通点：どちらもポリペプチド鎖でできたタンパク質で、複数の鎖をもつ（四次）／どちらも非複合／どちらも形が働きに適している", zh: "相同點：兩者都是由多肽鏈組成的蛋白質，都有多於一條鏈（四級）／都屬非結合／形狀都配合其功能" },
        { en: "shape: insulin is compact and rounded; collagen is long and rope-like (triple helix)", ja: "形：インスリンはコンパクトで丸い。コラーゲンは長いロープ状（三重らせん）", zh: "形狀：胰島素緊密而圓；膠原蛋白長而像繩（三股螺旋）" },
        { en: "solubility: insulin is soluble in water (hydrophilic outside), so can travel in blood plasma; collagen is insoluble", ja: "溶けやすさ：インスリンは水に溶け（外側が親水性）、血しょう中を運ばれる。コラーゲンは水に溶けない", zh: "溶解度：胰島素可溶於水（外面親水），所以能在血漿中運行；膠原蛋白不溶於水" },
        { en: "function: insulin has a specific shape that binds to a receptor (hormone signalling); collagen provides strength and support (e.g. in skin, tendons)", ja: "働き：インスリンは特定の形で受容体に結合する（ホルモンの情報伝達）。コラーゲンは強さと支えを与える（例：皮膚、腱）", zh: "功能：胰島素的特定形狀可結合受體（激素信號傳遞）；膠原蛋白提供強度和支撐（例如皮膚、肌腱）" }
      ],
      modelAnswer: { en: "Both are proteins with quaternary structure, and in each the shape suits the function. Insulin (globular) is compact and rounded, soluble in water, so it is carried in the blood and its specific shape binds a receptor. Collagen (fibrous) is long and rope-like, a triple helix of three chains, insoluble, and gives strength to skin and tendons.", ja: "どちらも四次構造をもつタンパク質で、形が働きに適している。インスリン（球状）はコンパクトで丸く、水に溶けるので血液中を運ばれ、特定の形で受容体に結合する。コラーゲン（繊維状）は3本の鎖の三重らせんで長いロープ状、水に溶けず、皮膚や腱に強さを与える。", zh: "兩者都是具四級結構的蛋白質，形狀都配合功能。胰島素（球狀）緊密而圓，可溶於水，所以能在血液中運行，其特定形狀可結合受體。膠原蛋白（纖維狀）長而像繩，是三條鏈組成的三股螺旋，不溶於水，為皮膚和肌腱提供強度。" } },

    /* q20 */
    { id: "b1-2-q20", type: "short", ahl: true, difficulty: 3, ref: "B1.2.9", paper: "2", commandTerm: "Distinguish", marks: 3,
      stem: { en: "A student writes: 'Boiling an egg white breaks the peptide bonds and the disulfide bonds in the proteins.' Distinguish between the roles of peptide bonds and disulfide bonds, and comment on what the student has got wrong about denaturation.", ja: "ある生徒が「卵白をゆでると、タンパク質のペプチド結合とジスルフィド結合が切れる」と書いた。ペプチド結合とジスルフィド結合の役割を区別し、変性についてこの生徒の誤りを論評せよ。", zh: "一位學生寫道：「把蛋白煮沸會破壞蛋白質中的肽鍵和二硫鍵。」區分肽鍵和二硫鍵的作用，並評論該學生對變性的理解有何錯誤。" },
      markscheme: [
        { en: "peptide bonds join adjacent amino acids in the backbone (C–N) and make the primary structure", ja: "ペプチド結合は骨格でとなり合うアミノ酸を結び (C–N)、一次構造をつくる", zh: "肽鍵連接骨架上相鄰的氨基酸 (C–N)，構成一級結構" },
        { en: "disulfide bonds are S–S bonds between the R-groups of two cysteines (which can be far apart in the sequence) and help hold the tertiary / quaternary structure", ja: "ジスルフィド結合は、2つのシステイン（配列上離れていてもよい）のR基間のS–S結合で、三次／四次構造を保つのを助ける", zh: "二硫鍵是兩個半胱氨酸（序列中可相隔很遠）R 基之間的 S–S 鍵，有助維持三級／四級結構" },
        { en: "denaturation breaks the weak bonds / interactions (hydrogen bonds, ionic bonds, hydrophobic interactions); the strong covalent peptide bonds are not broken, so the student is wrong (heating changes the shape, it does not cut the chain)", ja: "変性で切れるのは弱い結合／相互作用（水素結合、イオン結合、疎水性相互作用）。強い共有結合であるペプチド結合は切れないので、生徒は誤り（加熱は形を変えるが鎖は切らない）", zh: "變性破壞的是弱鍵／相互作用（氫鍵、離子鍵、疏水相互作用）；強共價的肽鍵不會被破壞，所以該學生錯誤（加熱改變形狀，並不切斷長鏈）" }
      ],
      modelAnswer: { en: "Peptide bonds are C–N covalent bonds joining neighbouring amino acids and making the primary structure. Disulfide bonds are S–S bonds between the R-groups of two cysteines and help hold the tertiary or quaternary structure. The student is wrong: boiling denatures the protein by breaking weak hydrogen bonds, ionic bonds and hydrophobic interactions, which changes its shape, but the strong peptide bonds stay intact.", ja: "ペプチド結合は、となり合うアミノ酸を結ぶC–N共有結合で、一次構造をつくる。ジスルフィド結合は2つのシステインのR基間のS–S結合で、三次または四次構造を保つのを助ける。生徒は誤っている。ゆでると弱い水素結合、イオン結合、疎水性相互作用が切れて形が変わり変性するが、強いペプチド結合は残る。", zh: "肽鍵是連接相鄰氨基酸的 C–N 共價鍵，構成一級結構。二硫鍵是兩個半胱氨酸 R 基之間的 S–S 鍵，有助維持三級或四級結構。該學生錯誤：煮沸令蛋白質變性，是因為破壞了弱的氫鍵、離子鍵和疏水相互作用，從而改變形狀，但強的肽鍵保持完整。" } }
  ]
});
