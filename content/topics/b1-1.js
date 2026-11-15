/* B1.1 Carbohydrates and lipids — SL (no AHL content in the guide) */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  // Simplified ring diagrams (only C1 –OH and the CH2OH carbon are shown).
  const RING_SVG = `<figure>
<svg viewBox="0 0 400 130" role="img" aria-label="Simplified ring diagrams: alpha-glucose, beta-glucose and ribose" style="width:100%;max-width:440px;color:var(--ink,#0f2029)" font-family="sans-serif" font-size="11">
 <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
  <!-- alpha-glucose: flat-topped hexagon, C1 at right vertex -->
  <polygon points="83,60 70,37.5 44,37.5 31,60 44,82.5 70,82.5"/>
  <line x1="44" y1="37.5" x2="44" y2="20"/>
  <line x1="83" y1="60" x2="83" y2="80"/>
  <!-- beta-glucose -->
  <polygon points="213,60 200,37.5 174,37.5 161,60 174,82.5 200,82.5"/>
  <line x1="174" y1="37.5" x2="174" y2="20"/>
  <line x1="213" y1="60" x2="213" y2="40"/>
  <!-- ribose: pentagon -->
  <polygon points="330,30 354.7,48 345.3,77 314.7,77 305.3,48"/>
  <line x1="305.3" y1="48" x2="293" y2="30"/>
 </g>
 <g fill="currentColor" text-anchor="middle">
  <rect x="64" y="31" width="12" height="13" fill="var(--surface,#fff)" stroke="none"/><text x="70" y="42">O</text>
  <rect x="194" y="31" width="12" height="13" fill="var(--surface,#fff)" stroke="none"/><text x="200" y="42">O</text>
  <rect x="324" y="22" width="12" height="13" fill="var(--surface,#fff)" stroke="none"/><text x="330" y="33">O</text>
  <text x="44" y="14">CH₂OH</text><text x="174" y="14">CH₂OH</text><text x="288" y="24">CH₂OH</text>
  <text x="83" y="93">OH</text><text x="213" y="35">OH</text>
  <text x="70" y="110" font-weight="bold">α-glucose</text><text x="200" y="110" font-weight="bold">β-glucose</text><text x="330" y="110" font-weight="bold">ribose</text>
  <text x="70" y="124" font-size="10">5 C + CH₂OH = 6 C</text><text x="200" y="124" font-size="10">5 C + CH₂OH = 6 C</text><text x="330" y="124" font-size="10">4 C + CH₂OH = 5 C</text>
 </g>
</svg>
<figcaption>${'Simplified ring diagrams. Count the ring carbons (corners that are not O) and add the carbon in CH₂OH. Other –OH groups are left out to keep the drawing clear.'}</figcaption></figure>`;

  const STEROID_SVG = `<figure>
<svg viewBox="0 0 230 130" role="img" aria-label="Four-ring steroid skeleton" style="width:100%;max-width:260px;color:var(--ink,#0f2029)">
 <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
  <polygon points="62,90 51,109.1 29,109.1 18,90 29,70.9 51,70.9"/>
  <polygon points="100.1,90 89.1,109.1 67.1,109.1 56.1,90 67.1,70.9 89.1,70.9"/>
  <polygon points="119.2,57 108.2,76.1 86.2,76.1 75.2,57 86.2,37.9 108.2,37.9"/>
  <polygon points="108.2,37.9 119.2,57 142,48.5 144,26 126,15"/>
 </g>
 <g fill="currentColor" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">
  <text x="40" y="94">A</text><text x="78" y="94">B</text><text x="97" y="61">C</text><text x="127" y="39">D</text>
 </g>
</svg>
<figcaption>${'The steroid skeleton: three six-sided rings (A, B, C) and one five-sided ring (D) joined together.'}</figcaption></figure>`;

  function bilSVG(lang) {
    const T = { w: { en: "water", ja: "水 (water)", zh: "水 (water)" }, t: { en: "tails", ja: "尾部 (tails)", zh: "尾部 (tails)" }, h: { en: "heads", ja: "頭部 (heads)", zh: "頭部 (heads)" } };
    let g = "";
    for (let x = 20; x <= 280; x += 20) {
      g += `<circle cx="${x}" cy="38" r="7.5" fill="var(--theme-b,#c2456b)" stroke="currentColor" stroke-width=".7"/><path d="M${x - 3} 46V68M${x + 3} 46V68" stroke="currentColor" stroke-width="1.5" fill="none"/>`;
      g += `<circle cx="${x}" cy="102" r="7.5" fill="var(--theme-b,#c2456b)" stroke="currentColor" stroke-width=".7"/><path d="M${x - 3} 94V72M${x + 3} 94V72" stroke="currentColor" stroke-width="1.5" fill="none"/>`;
    }
    return `<svg viewBox="0 0 300 140" role="img" aria-label="Phospholipid bilayer" style="width:100%;max-width:360px;color:var(--ink,#0f2029)" font-family="sans-serif"><rect width="300" height="140" fill="var(--accent-soft,#dbe7ff)" opacity=".4"/>${g}<g fill="currentColor" font-size="10"><text x="4" y="14">${T.w[lang]}</text><text x="4" y="134">${T.w[lang]}</text><text x="150" y="74" text-anchor="middle" style="paint-order:stroke;stroke:var(--surface,#fff);stroke-width:3px">${T.t[lang]}</text></g></svg>`;
  }

  const FA_TABLE = `<table><tr><th>Fatty acid (all 18 carbons)</th><th>Number of C=C bonds</th><th>Melting point (°C)</th></tr>
<tr><td>A</td><td>0</td><td>69</td></tr><tr><td>B</td><td>1</td><td>13</td></tr><tr><td>C</td><td>2</td><td>−5</td></tr><tr><td>D</td><td>3</td><td>−11</td></tr></table>
<p><em>(illustrative data)</em></p>`;
  const FA_TABLE_JA = `<table><tr><th>脂肪酸 (すべて炭素数18)</th><th>C=C結合の数</th><th>融点 (°C)</th></tr>
<tr><td>A</td><td>0</td><td>69</td></tr><tr><td>B</td><td>1</td><td>13</td></tr><tr><td>C</td><td>2</td><td>−5</td></tr><tr><td>D</td><td>3</td><td>−11</td></tr></table>
<p><em>(説明用のデータ)</em></p>`;
  const FA_TABLE_ZH = `<table><tr><th>脂肪酸 (全部有18個碳原子)</th><th>C=C 鍵的數目</th><th>熔點 (°C)</th></tr>
<tr><td>A</td><td>0</td><td>69</td></tr><tr><td>B</td><td>1</td><td>13</td></tr><tr><td>C</td><td>2</td><td>−5</td></tr><tr><td>D</td><td>3</td><td>−11</td></tr></table>
<p><em>(示範數據)</em></p>`;

  IB.registerTopic({
    id: "B1.1",
    slug: "b1-1",
    theme: "B",
    level: 1,
    ahlOnly: false,
    title: L("Carbohydrates and lipids", "炭水化物と脂質", "碳水化合物和脂質"),
    guidingQuestions: [
      L("In what ways do variations in form allow diversity of function in carbohydrates and lipids?",
        "炭水化物と脂質では、形の違いがどのように機能の多様性を生み出しているか。",
        "碳水化合物和脂質的形態差異如何造就功能的多樣性？"),
      L("How do carbohydrates and lipids compare as energy storage compounds?",
        "エネルギー貯蔵物質として、炭水化物と脂質はどのように比較できるか。",
        "作為儲能物質，碳水化合物和脂質有何異同？")
    ],
    summary: L(
      "Carbon atoms can join to each other and to other atoms in many ways, so they build a huge variety of molecules. Small units (monomers) are linked into big molecules (polymers) by condensation and split again by hydrolysis. Sugars and starch store and carry energy, cellulose gives strength, and lipids (fats, oils, phospholipids and steroids) store energy, insulate and form membranes.",
      "炭素原子は他の炭素原子や別の原子とさまざまな形で結合できるため、非常に多様な分子をつくる。小さな単位 (単量体, monomer) は縮合反応で結ばれて大きな分子 (重合体, polymer) になり、加水分解で再び分けられる。糖やデンプンはエネルギーを蓄え運び、セルロースは強度を与え、脂質 (脂肪・油・リン脂質・ステロイド) はエネルギー貯蔵、断熱、膜の形成を担う。",
      "碳原子能以多種方式與其他碳原子及其他原子結合，因此可構成種類繁多的分子。細小的單位 (單體, monomer) 經縮合反應連成大分子 (聚合物, polymer)，再經水解反應分開。糖和澱粉儲存及運送能量，纖維素提供強度，而脂質 (脂肪、油、磷脂和類固醇) 則負責儲能、絕緣和構成膜。"),
    sections: [
      {
        ref: "B1.1.1", ahl: false,
        deeper: {"en":"<p><strong>The \"four bonds\" check.</strong> In a correct structural diagram, every carbon atom has bonds adding up to four. A double bond counts as two.</p>\n<table><tr><th>Molecule</th><th>Bonds on each carbon</th><th>Total = 4?</th></tr>\n<tr><td>Methane, CH₄</td><td>4 single C–H</td><td>Yes</td></tr>\n<tr><td>Ethene, H₂C=CH₂</td><td>2 C–H + 1 C=C (counts as 2)</td><td>Yes</td></tr>\n<tr><td>Carbon dioxide, O=C=O</td><td>2 C=O (each counts as 2)</td><td>Yes</td></tr></table>\n<p>If a drawing shows a carbon with five bonds, it is wrong. If it shows only three, a hydrogen has been left out (in skeleton drawings the missing hydrogens are understood).</p>\n<p><strong>Why this gives so much diversity.</strong> Because each carbon has four bonds, a carbon atom can be a link in a chain, a branch point (three or four carbon neighbours) or a corner of a ring. Changing the length of a chain, adding branches, closing a ring or adding a double bond each gives a different molecule with different properties. Fatty acid tails, glycogen, glucose and steroids in this topic are all examples.</p>\n<p><strong>SI prefix practice.</strong> A plant cell is 20 µm across. 1 µm = 10⁻⁶ m, so the cell is 20 × 10⁻⁶ m = 2 × 10⁻⁵ m = 0.02 mm = 20 000 nm. Going from µm to nm, multiply by 1000.</p>\n<p><strong>Mark-scheme language.</strong> \"Carbon forms four covalent bonds\", \"forms chains and rings\", \"single and double bonds\".</p>","ja":"<p><strong>「結合は4本」チェック。</strong>正しい構造式では、どの炭素原子も結合の合計が4になります。二重結合は2本と数えます。</p>\n<table><tr><th>分子</th><th>各炭素の結合</th><th>合計は4か</th></tr>\n<tr><td>メタン CH₄</td><td>C–H 単結合4本</td><td>はい</td></tr>\n<tr><td>エテン H₂C=CH₂</td><td>C–H 2本 + C=C 1本（2と数える）</td><td>はい</td></tr>\n<tr><td>二酸化炭素 O=C=O</td><td>C=O 2本（各2と数える）</td><td>はい</td></tr></table>\n<p>炭素に結合が5本ある図は誤りです。3本しかなければ水素が省略されています（骨格式では省略された水素は暗黙に含まれます）。</p>\n<p><strong>これが多様性を生む理由。</strong>炭素は結合が4本あるため、鎖の途中の連結点にも、枝分かれの点（炭素の隣が3個か4個）にも、環の角にもなれます。鎖の長さを変える、枝を加える、環を閉じる、二重結合を入れる、のどれでも性質の異なる別の分子ができます。この単元の脂肪酸の尾部、グリコーゲン、グルコース、ステロイドはすべてその例です。</p>\n<p><strong>SI接頭語の練習。</strong>植物細胞の幅が20 µm とします。1 µm = 10⁻⁶ m なので、20 × 10⁻⁶ m = 2 × 10⁻⁵ m = 0.02 mm = 20 000 nm です。µm から nm にするには1000倍します。</p>\n<p><strong>採点のことば。</strong>「炭素は共有結合を4本つくる」「鎖や環をつくる」「単結合と二重結合」。</p>","zh":"<p><strong>「四個鍵」檢查。</strong>在正確的結構圖中，每個碳原子的鍵數加起來是四。雙鍵算作兩個。</p>\n<table><tr><th>分子</th><th>每個碳的鍵</th><th>總數 = 4？</th></tr>\n<tr><td>甲烷 CH₄</td><td>4 個 C–H 單鍵</td><td>是</td></tr>\n<tr><td>乙烯 H₂C=CH₂</td><td>2 個 C–H + 1 個 C=C（算作 2）</td><td>是</td></tr>\n<tr><td>二氧化碳 O=C=O</td><td>2 個 C=O（各算作 2）</td><td>是</td></tr></table>\n<p>如果圖中某個碳有五個鍵，那就是錯的。如果只有三個，表示漏畫了氫原子（在骨架式中，省略的氫是默認存在的）。</p>\n<p><strong>為何這樣會產生如此多樣性。</strong>因為每個碳有四個鍵，碳原子可以是鏈中的連接點、分支點（有三或四個碳鄰居），或環的一個角。改變鏈的長度、加入分支、封閉成環或加入雙鍵，都會產生性質不同的另一種分子。本課題中的脂肪酸尾部、糖原、葡萄糖和類固醇都是例子。</p>\n<p><strong>SI 詞頭練習。</strong>一個植物細胞闊 20 µm。1 µm = 10⁻⁶ m，所以細胞闊 20 × 10⁻⁶ m = 2 × 10⁻⁵ m = 0.02 mm = 20 000 nm。由 µm 轉為 nm，乘以 1000。</p>\n<p><strong>評分用語。</strong>「碳可形成四個共價鍵」、「形成鏈和環」、「單鍵和雙鍵」。</p>"},
        heading: L("Carbon: the atom that builds life", "炭素：生命をつくる原子", "碳：構成生命的原子"),
        body: L(
          `<p>A <span class="term">covalent bond</span> forms when two atoms share a pair of electrons. A carbon atom has four electrons available for sharing. So it can make <strong>up to four bonds</strong>.</p>
<p>Carbon can bond to other carbon atoms and to other non-metals such as hydrogen, oxygen, nitrogen, phosphorus and sulfur. It can use:</p>
<ul><li>four single bonds (C–C, C–H), or</li><li>a mix of single and double bonds (for example C=C or C=O).</li></ul>
<p>Carbon–carbon bonds are strong and stable, so carbon atoms can join into long chains and rings. This gives a huge diversity of carbon compounds:</p>
<ul><li><strong>Unbranched chains</strong>: for example the fatty acid tails in lipids.</li><li><strong>Branched chains</strong>: for example glycogen, where chains of glucose have side branches.</li><li><strong>Single rings</strong>: for example glucose (one ring made of five carbons and one oxygen).</li><li><strong>Multiple rings</strong>: for example steroids (four rings joined together).</li></ul>
<div class="note"><strong>Nature of science: international agreement.</strong> Scientists use SI metric prefixes so that measurements mean the same everywhere: <em>kilo</em> (k) = 10³, <em>centi</em> (c) = 10⁻², <em>milli</em> (m) = 10⁻³, <em>micro</em> (µ) = 10⁻⁶, <em>nano</em> (n) = 10⁻⁹. Conventions like these are agreed internationally.</div>`,
          `<p><span class="term">共有結合 (covalent bond)</span> は、2つの原子が電子対を共有してできる結合である。炭素原子は共有に使える電子を4個もっているので、<strong>最大4本の結合</strong>をつくれる。</p>
<p>炭素は、他の炭素原子や、水素・酸素・窒素・リン・硫黄などの非金属原子と結合できる。結合の組み合わせは次のとおり。</p>
<ul><li>単結合4本 (C–C、C–H)、または</li><li>単結合と二重結合の組み合わせ (例: C=C、C=O)。</li></ul>
<p>炭素どうしの結合は強くて安定なので、長い鎖や環をつくれる。そのため炭素化合物は非常に多様になる。</p>
<ul><li><strong>枝分かれのない鎖</strong>: 例 脂質の脂肪酸の尾部。</li><li><strong>枝分かれのある鎖</strong>: 例 グリコーゲン (グルコースの鎖に側枝がある)。</li><li><strong>単環</strong>: 例 グルコース (炭素5個と酸素1個からなる環)。</li><li><strong>複数の環</strong>: 例 ステロイド (4つの環がつながる)。</li></ul>
<div class="note"><strong>科学の本質: 国際的な合意。</strong> 測定値がどこでも同じ意味をもつよう、SI接頭語が使われる: <em>キロ (kilo, k)</em> = 10³、<em>センチ (centi, c)</em> = 10⁻²、<em>ミリ (milli, m)</em> = 10⁻³、<em>マイクロ (micro, µ)</em> = 10⁻⁶、<em>ナノ (nano, n)</em> = 10⁻⁹。こうした約束事は国際的な合意に基づく。</div>`,
          `<p><span class="term">共價鍵 (covalent bond)</span> 是兩個原子共用一對電子而形成的鍵。碳原子有四個可供共用的電子，所以最多可形成<strong>四個鍵</strong>。</p>
<p>碳可與其他碳原子，以及氫、氧、氮、磷、硫等非金屬原子結合，鍵的組合包括：</p>
<ul><li>四個單鍵 (C–C、C–H)，或</li><li>單鍵與雙鍵的組合 (例如 C=C、C=O)。</li></ul>
<p>碳碳鍵強而穩定，因此碳原子可連成長鏈和環，令碳化合物種類繁多：</p>
<ul><li><strong>無分支的鏈</strong>：例如脂質中脂肪酸的尾部。</li><li><strong>有分支的鏈</strong>：例如糖原 (葡萄糖鏈帶有側枝)。</li><li><strong>單環</strong>：例如葡萄糖 (由五個碳原子和一個氧原子組成的環)。</li><li><strong>多個環</strong>：例如類固醇 (四個環連在一起)。</li></ul>
<div class="note"><strong>科學本質：國際共識。</strong> 科學家使用 SI 公制詞頭，令測量值在世界各地意義一致：<em>千 (kilo, k)</em> = 10³、<em>厘 (centi, c)</em> = 10⁻²、<em>毫 (milli, m)</em> = 10⁻³、<em>微 (micro, µ)</em> = 10⁻⁶、<em>納 (nano, n)</em> = 10⁻⁹。這類慣例是經國際協議訂立的。</div>`),
        examTip: L("Say “carbon forms four covalent bonds”, not “carbon has four bonds on its own”. If asked for examples of diversity, name a branched chain, an unbranched chain, a single ring and multiple rings.",
          "「炭素は共有結合を4本つくる」と書く。多様性の例を求められたら、枝分かれ鎖・枝分かれのない鎖・単環・複数の環をそれぞれ挙げる。",
          "答案寫「碳可形成四個共價鍵」。若題目要求舉例說明多樣性，可分別舉有分支鏈、無分支鏈、單環和多環的例子。")
      },
      {
        ref: "B1.1.2–3", ahl: false,
        deeper: {"en":"<p><strong>Counting water in a chain.</strong> Joining two monomers makes one new bond and releases one water. So a chain of <em>n</em> monomers needs <em>n</em> − 1 condensation reactions and releases <em>n</em> − 1 water molecules. Breaking it back down by hydrolysis uses <em>n</em> − 1 water molecules.</p>\n<table><tr><th>Product</th><th>Monomers</th><th>Bonds formed</th><th>Water released</th></tr>\n<tr><td>Disaccharide from two glucose</td><td>2</td><td>1</td><td>1</td></tr>\n<tr><td>Polysaccharide of 100 glucose (one chain)</td><td>100</td><td>99</td><td>99</td></tr>\n<tr><td>Triglyceride</td><td>1 glycerol + 3 fatty acids</td><td>3</td><td>3</td></tr></table>\n<p><strong>Where the atoms go.</strong> One monomer loses an –OH and the other loses an –H. These form H₂O. The oxygen that remains between the two monomers joins them. For glucose: C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O. Count the atoms on each side to check.</p>\n<p><strong>Same idea, different bonds.</strong> The link between sugar units is a glycosidic bond; between amino acids it is a peptide bond (B1.2). In each case the reaction is a condensation. In cells, both reactions are controlled by enzymes.</p>\n<p><strong>Mark-scheme language.</strong> \"Condensation: water is released as a covalent bond forms.\" \"Hydrolysis: water is used to break the bond, and the –H and –OH are added to the products.\" Do not write that water \"is produced\" by hydrolysis.</p>","ja":"<p><strong>鎖の中の水を数える。</strong>2つの単量体を結ぶと、新しい結合が1つでき、水が1分子放出されます。したがって単量体 <em>n</em> 個の鎖には縮合が <em>n</em> − 1 回必要で、水が <em>n</em> − 1 分子放出されます。加水分解で分解するときは、水を <em>n</em> − 1 分子使います。</p>\n<table><tr><th>生成物</th><th>単量体</th><th>できる結合</th><th>放出される水</th></tr>\n<tr><td>グルコース2個からの二糖類</td><td>2</td><td>1</td><td>1</td></tr>\n<tr><td>グルコース100個の多糖類（1本の鎖）</td><td>100</td><td>99</td><td>99</td></tr>\n<tr><td>トリグリセリド</td><td>グリセロール1 + 脂肪酸3</td><td>3</td><td>3</td></tr></table>\n<p><strong>原子の行き先。</strong>一方の単量体は –OH を、もう一方は –H を失い、これらが H₂O になります。2つの単量体の間に残った酸素が両者をつなぎます。グルコースでは C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O。両辺の原子を数えて確かめましょう。</p>\n<p><strong>同じ考え方、異なる結合。</strong>糖の単位をつなぐ結合はグリコシド結合、アミノ酸どうしはペプチド結合 (B1.2) です。どちらも縮合反応です。細胞では、どちらの反応も酵素によって制御されます。</p>\n<p><strong>採点のことば。</strong>「縮合：共有結合ができるときに水が放出される」「加水分解：水を使って結合を切り、–H と –OH が生成物に付く」。加水分解で水が「できる」と書いてはいけません。</p>","zh":"<p><strong>點算鏈中的水。</strong>連接兩個單體會形成一個新鍵並釋出一個水分子。所以由 <em>n</em> 個單體組成的鏈需要 <em>n</em> − 1 次縮合反應，釋出 <em>n</em> − 1 個水分子。用水解把它分解，則消耗 <em>n</em> − 1 個水分子。</p>\n<table><tr><th>產物</th><th>單體</th><th>形成的鍵</th><th>釋出的水</th></tr>\n<tr><td>由兩個葡萄糖形成的雙糖</td><td>2</td><td>1</td><td>1</td></tr>\n<tr><td>100 個葡萄糖組成的多糖（一條鏈）</td><td>100</td><td>99</td><td>99</td></tr>\n<tr><td>甘油三酯</td><td>1 個甘油 + 3 個脂肪酸</td><td>3</td><td>3</td></tr></table>\n<p><strong>原子去了哪裏。</strong>一個單體失去 –OH，另一個失去 –H，兩者結合成 H₂O。留在兩個單體之間的氧原子把它們連起來。以葡萄糖為例：C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O。點算兩邊的原子來核對。</p>\n<p><strong>同一概念，不同的鍵。</strong>糖單位之間的鍵是糖苷鍵；氨基酸之間是肽鍵 (B1.2)。兩者都是縮合反應。在細胞中，這兩種反應都由酶控制。</p>\n<p><strong>評分用語。</strong>「縮合：形成共價鍵時釋出水」；「水解：利用水切斷鍵，–H 和 –OH 加到產物上」。不要寫水解「產生」水。</p>"},
        widget: "carb-builder",
        widgetOptions: {tab: 0},
        heading: L("Condensation and hydrolysis", "縮合反応と加水分解", "縮合反應與水解"),
        body: L(
          `<p>Living things make big molecules (<span class="term">macromolecules</span>) from small repeating units. The small unit is a <span class="term">monomer</span>. The big molecule is a <span class="term">polymer</span>.</p>
<p><strong>Condensation reaction</strong> (building up): two monomers join by a covalent bond and a molecule of <strong>water is released</strong>.</p>
<p><strong>Hydrolysis reaction</strong> (breaking down): a water molecule is split. Its –H and –OH are added to the two ends of the broken bond. This is why the reaction is called hydrolysis (“water splitting”). Digestion uses hydrolysis to turn polymers into monomers.</p>
<table><tr><th>Polymer</th><th>Monomer</th></tr>
<tr><td>Polysaccharide (e.g. starch)</td><td>Monosaccharide (e.g. glucose)</td></tr>
<tr><td>Polypeptide (protein chain)</td><td>Amino acid</td></tr>
<tr><td>Nucleic acid (DNA, RNA)</td><td>Nucleotide</td></tr></table>
<p>Condensation: monomer–OH + H–monomer → monomer–monomer + H₂O. Hydrolysis is the reverse: you add H₂O.</p>`,
          `<p>生物は小さな繰り返し単位から大きな分子 (<span class="term">高分子 (macromolecule)</span>) をつくる。小さな単位が<span class="term">単量体 (monomer)</span>、大きな分子が<span class="term">重合体 (polymer)</span>である。</p>
<p><strong>縮合反応 (condensation reaction)</strong> (合成): 2つの単量体が共有結合でつながり、<strong>水が1分子放出される</strong>。</p>
<p><strong>加水分解 (hydrolysis)</strong> (分解): 水分子が分かれ、その –H と –OH が切れた結合の両端に付加される。「水で分ける」ためこの名がある。消化では加水分解により重合体が単量体になる。</p>
<table><tr><th>重合体</th><th>単量体</th></tr>
<tr><td>多糖類 (polysaccharide) (例 デンプン)</td><td>単糖類 (monosaccharide) (例 グルコース)</td></tr>
<tr><td>ポリペプチド (polypeptide)</td><td>アミノ酸 (amino acid)</td></tr>
<tr><td>核酸 (nucleic acid) (DNA, RNA)</td><td>ヌクレオチド (nucleotide)</td></tr></table>
<p>縮合: 単量体–OH + H–単量体 → 単量体–単量体 + H₂O。加水分解はその逆で、H₂O が加わる。</p>`,
          `<p>生物利用細小而重複的單位製造大分子 (<span class="term">大分子 (macromolecule)</span>)。小單位是<span class="term">單體 (monomer)</span>，大分子是<span class="term">聚合物 (polymer)</span>。</p>
<p><strong>縮合反應 (condensation reaction)</strong> (合成)：兩個單體以共價鍵連接，同時<strong>釋出一個水分子</strong>。</p>
<p><strong>水解反應 (hydrolysis)</strong> (分解)：一個水分子被分開，其 –H 和 –OH 分別加到斷開的鍵的兩端。「水解」即「用水分開」。消化作用利用水解把聚合物分解成單體。</p>
<table><tr><th>聚合物</th><th>單體</th></tr>
<tr><td>多糖 (polysaccharide) (例如澱粉)</td><td>單糖 (monosaccharide) (例如葡萄糖)</td></tr>
<tr><td>多肽 (polypeptide)</td><td>氨基酸 (amino acid)</td></tr>
<tr><td>核酸 (nucleic acid) (DNA、RNA)</td><td>核苷酸 (nucleotide)</td></tr></table>
<p>縮合：單體–OH + H–單體 → 單體–單體 + H₂O。水解則相反，需要加入 H₂O。</p>`),
        examTip: L("Always say which small molecule is involved: condensation RELEASES water, hydrolysis USES water.",
          "どちらの反応で水が関わるかを必ず書く: 縮合は水を「放出」、加水分解は水を「使う」。",
          "必須指出水的角色：縮合反應「釋出」水，水解反應「消耗」水。"),
      },
      {
        ref: "B1.1.4", ahl: false,
        deeper: {"en":"<p><strong>Identifying sugars from diagrams: count every carbon.</strong> Count the ring corners that are not oxygen, then add any carbon in a side group such as CH₂OH.</p>\n<table><tr><th>Ring</th><th>Side group</th><th>Total carbons</th><th>Class</th></tr>\n<tr><td>5 carbons + 1 oxygen</td><td>CH₂OH</td><td>6</td><td>Hexose (glucose)</td></tr>\n<tr><td>4 carbons + 1 oxygen</td><td>CH₂OH</td><td>5</td><td>Pentose (ribose)</td></tr></table>\n<p>Counting only the ring is the usual mistake: it gives 5 for glucose and 4 for ribose.</p>\n<p><strong>Glucose properties turned into full sentences.</strong></p>\n<table><tr><th>Property</th><th>Reason</th><th>Consequence for its role</th></tr>\n<tr><td>Soluble</td><td>Many polar –OH groups form hydrogen bonds with water</td><td>Dissolves in blood plasma, so it can be transported to cells</td></tr>\n<tr><td>Chemically stable</td><td>It does not react easily</td><td>It arrives unchanged where it is needed</td></tr>\n<tr><td>Energy yield</td><td>Many C–H bonds; oxidation in cell respiration releases energy</td><td>Energy is used to make ATP</td></tr></table>\n<p><strong>Mark-scheme language.</strong> Use \"because\" in each answer: \"soluble because of polar –OH groups that form hydrogen bonds with water, so it can be transported in blood\". Lists of properties without a link to function score less. Ribose is the sugar in RNA and in ATP; its role is covered in A1.2 and C1.2.</p>","ja":"<p><strong>図から糖を見分ける：炭素をすべて数える。</strong>環の中の酸素ではない頂点を数え、CH₂OH のような側鎖にある炭素を足します。</p>\n<table><tr><th>環</th><th>側鎖</th><th>炭素の合計</th><th>分類</th></tr>\n<tr><td>炭素5個 + 酸素1個</td><td>CH₂OH</td><td>6</td><td>六炭糖 (グルコース)</td></tr>\n<tr><td>炭素4個 + 酸素1個</td><td>CH₂OH</td><td>5</td><td>五炭糖 (リボース)</td></tr></table>\n<p>環だけを数えるのがよくある間違いで、グルコースは5、リボースは4になってしまいます。</p>\n<p><strong>グルコースの性質を完全な文にする。</strong></p>\n<table><tr><th>性質</th><th>理由</th><th>役割への結びつき</th></tr>\n<tr><td>水に溶ける</td><td>極性のある –OH 基が多く、水と水素結合をつくる</td><td>血漿に溶けるので、細胞へ運搬できる</td></tr>\n<tr><td>化学的に安定</td><td>反応しにくい</td><td>必要な場所まで変化せずに届く</td></tr>\n<tr><td>エネルギーを出す</td><td>C–H 結合が多く、細胞呼吸での酸化でエネルギーが放出される</td><td>そのエネルギーで ATP をつくる</td></tr></table>\n<p><strong>採点のことば。</strong>答えには必ず「〜ので」を入れます：「極性のある –OH 基が水と水素結合をつくるので溶け、血液で運搬できる」。性質を並べるだけで機能に結びつけない答えは得点が下がります。リボースは RNA と ATP に含まれる糖で、その役割は A1.2 と C1.2 で扱います。</p>","zh":"<p><strong>從圖中辨認糖：數算所有碳原子。</strong>數算環上不是氧的頂點，再加上側鏈（如 CH₂OH）中的碳。</p>\n<table><tr><th>環</th><th>側鏈</th><th>碳原子總數</th><th>類別</th></tr>\n<tr><td>5 個碳 + 1 個氧</td><td>CH₂OH</td><td>6</td><td>己糖 (葡萄糖)</td></tr>\n<tr><td>4 個碳 + 1 個氧</td><td>CH₂OH</td><td>5</td><td>戊糖 (核糖)</td></tr></table>\n<p>只數環上的碳是常見錯誤：這樣葡萄糖會得 5，核糖會得 4。</p>\n<p><strong>把葡萄糖的性質寫成完整句子。</strong></p>\n<table><tr><th>性質</th><th>原因</th><th>對其角色的意義</th></tr>\n<tr><td>可溶於水</td><td>很多極性的 –OH 基能與水形成氫鍵</td><td>溶於血漿，所以能運送到細胞</td></tr>\n<tr><td>化學性質穩定</td><td>不易起反應</td><td>到達需要的地方時沒有改變</td></tr>\n<tr><td>釋出能量</td><td>含很多 C–H 鍵；在細胞呼吸中氧化會釋出能量</td><td>能量用來製造 ATP</td></tr></table>\n<p><strong>評分用語。</strong>每個答案都要用「因為」：「因為有極性的 –OH 基與水形成氫鍵而可溶，所以能在血液中運送」。只列出性質而沒有連到功能，得分較少。核糖是 RNA 和 ATP 中的糖，其作用在 A1.2 和 C1.2 論及。</p>"},
        widget: "carb-builder",
        widgetOptions: {tab: 1},
        heading: L("Monosaccharides: form and function", "単糖類の構造と機能", "單糖的結構與功能"),
        body: L(
          `<p><span class="term">Monosaccharides</span> are single sugar units. They are named by the number of carbon atoms: a <strong>pentose</strong> has 5 carbons (for example ribose) and a <strong>hexose</strong> has 6 carbons (for example glucose).</p>
<p><strong>How to recognise them from a ring diagram:</strong> count the carbons in the ring (corners that are not the oxygen atom) and add the carbon in the CH₂OH group that sticks out. Glucose: 5 + 1 = 6 (hexose). Ribose: 4 + 1 = 5 (pentose).</p>
${RING_SVG}
<p><strong>Glucose: link between properties and use</strong></p>
<ul><li><strong>Soluble</strong>: it has many polar –OH groups that form hydrogen bonds with water, so it dissolves in cytoplasm and blood plasma.</li>
<li><strong>Transportable</strong>: because it is soluble, it can be carried dissolved in the blood of animals.</li>
<li><strong>Chemically stable</strong>: it does not react easily, so it can be moved around without being changed on the way.</li>
<li><strong>Yields energy when oxidized</strong>: it has many C–H bonds. Oxidation in cell respiration releases energy that is used to make ATP.</li></ul>`,
          `<p><span class="term">単糖類 (monosaccharide)</span> は糖の最小単位である。炭素数で呼び分け、炭素5個は<strong>五炭糖 (pentose)</strong> (例 リボース)、炭素6個は<strong>六炭糖 (hexose)</strong> (例 グルコース) という。</p>
<p><strong>環状構造の図での見分け方:</strong> 環の中の炭素 (酸素原子ではない頂点) を数え、環から出ている CH₂OH の炭素1個を足す。グルコースは 5 + 1 = 6 (六炭糖)、リボースは 4 + 1 = 5 (五炭糖)。</p>
${RING_SVG.replace('Simplified ring diagrams. Count the ring carbons (corners that are not O) and add the carbon in CH₂OH. Other –OH groups are left out to keep the drawing clear.', '簡略化した環状構造。環の炭素 (O以外の頂点) を数え、CH₂OH の炭素を足す。見やすくするため、他の –OH は省略している。').replace('Simplified ring diagrams. Count the ring carbons (corners that are not O) and add the carbon in CH₂OH. Other –OH groups are left out to keep the drawing clear.', '簡略化した環状構造。環の炭素 (O以外の頂点) を数え、CH₂OH の炭素を足す。見やすくするため、他の –OH は省略している。')}
<p><strong>グルコース: 性質と利用のつながり</strong></p>
<ul><li><strong>水に溶ける (soluble)</strong>: 極性のある –OH 基が多く、水と水素結合をつくるので、細胞質や血漿に溶ける。</li>
<li><strong>運搬しやすい (transportable)</strong>: 溶けるため、動物の血液に溶けて運ばれる。</li>
<li><strong>化学的に安定 (chemically stable)</strong>: 反応しにくいので、運ぶ途中で変化しない。</li>
<li><strong>酸化するとエネルギーを出す (energy yield from oxidation)</strong>: C–H 結合が多く、細胞呼吸での酸化によりエネルギーが放出され、ATP の合成に使われる。</li></ul>`,
          `<p><span class="term">單糖 (monosaccharide)</span> 是單一的糖單位，按碳原子數目命名：<strong>戊糖 (pentose)</strong> 有5個碳 (例如核糖)，<strong>己糖 (hexose)</strong> 有6個碳 (例如葡萄糖)。</p>
<p><strong>如何從環狀結構圖辨認：</strong>數算環上的碳原子 (不是氧原子的頂點)，再加上伸出的 CH₂OH 中的一個碳。葡萄糖：5 + 1 = 6 (己糖)；核糖：4 + 1 = 5 (戊糖)。</p>
${RING_SVG.replace('Simplified ring diagrams. Count the ring carbons (corners that are not O) and add the carbon in CH₂OH. Other –OH groups are left out to keep the drawing clear.', '簡化的環狀結構圖。數算環上的碳 (不是 O 的頂點)，再加 CH₂OH 中的碳。為求清晰，其他 –OH 基沒有繪出。')}
<p><strong>葡萄糖：性質與用途的關係</strong></p>
<ul><li><strong>可溶於水 (soluble)</strong>：有很多極性的 –OH 基，能與水形成氫鍵，所以能溶於細胞質和血漿。</li>
<li><strong>易於運輸 (transportable)</strong>：由於可溶，能溶在動物的血液中運送。</li>
<li><strong>化學性質穩定 (chemically stable)</strong>：不易起反應，運送途中不會被改變。</li>
<li><strong>氧化時釋出能量 (energy yield from oxidation)</strong>：含有很多 C–H 鍵，在細胞呼吸中氧化會釋出能量，用來製造 ATP。</li></ul>`),
        examTip: L("Don’t just list the four properties. Link each one to the use: soluble → carried in blood; stable → not altered in transit; energy-rich → respiration.",
          "4つの性質を並べるだけでなく、それぞれを用途に結びつける: 溶ける→血液で運ばれる、安定→途中で変化しない、エネルギーが多い→呼吸。",
          "不要只列出四個性質，要把每個性質連到用途：可溶→經血液運送；穩定→運送時不變；含能量→用於呼吸。")
      },
      {
        ref: "B1.1.5", ahl: false,
        deeper: {"en":"<p><strong>Why a polysaccharide does not upset the cell's water balance.</strong> Osmosis depends on the <em>number</em> of dissolved particles, not their mass. If a cell stored 1000 glucose units as free glucose, there would be 1000 dissolved particles. Joined in one glycogen molecule, they count as a single particle. The solute concentration stays low, so water does not enter the cell by osmosis, and the large molecule cannot diffuse out through the membrane.</p>\n<p><strong>Why branching helps (illustrative).</strong> Glucose units are added to or removed from the chain <em>ends</em>. An unbranched chain of 1000 units has two ends. A branched molecule of the same size may have about a hundred. So many enzymes can work at once, and glucose is released much faster when needed.</p>\n<p><strong>Mobilizing glycogen, step by step.</strong></p>\n<ol>\n<li>The cell needs energy (for example a muscle starts to work).</li>\n<li>Hydrolysis removes glucose units from the chain ends.</li>\n<li>Glucose is oxidized in cell respiration to release energy. Glycogen in the liver can also release glucose into the blood.</li>\n</ol>\n<table><tr><th></th><th>Starch</th><th>Glycogen</th></tr>\n<tr><td>Organism</td><td>Plants</td><td>Animals</td></tr>\n<tr><td>Stored in</td><td>Chloroplasts, seeds, tubers</td><td>Liver and muscle cells</td></tr>\n<tr><td>Branching</td><td>Some</td><td>More highly branched</td></tr></table>\n<p><strong>Mark-scheme language.</strong> \"Insoluble, so no osmotic effect and cannot leave the cell\"; \"compact\"; \"branching gives many ends for rapid addition or removal of glucose\".</p>","ja":"<p><strong>多糖類が細胞の水分バランスを乱さない理由。</strong>浸透は溶けている粒子の<em>数</em>で決まり、質量では決まりません。細胞がグルコース1000個を遊離のグルコースとして貯蔵すると、溶けた粒子が1000個になります。1分子のグリコーゲンにつなげば、粒子1個と数えます。溶質の濃度は低いままで、水は浸透で細胞に入らず、大きな分子は膜を通って拡散して出ていくこともできません。</p>\n<p><strong>枝分かれが役立つ理由（例示）。</strong>グルコース単位は鎖の<em>末端</em>で付加されたり外されたりします。枝分かれのない1000個の鎖には末端が2つあります。同じ大きさの枝分かれした分子には、100個ほどの末端があるかもしれません。そのため多くの酵素が同時に働け、必要なときにグルコースをずっと速く放出できます。</p>\n<p><strong>グリコーゲンの動員（段階別）。</strong></p>\n<ol>\n<li>細胞がエネルギーを必要とする（たとえば筋肉が働き始める）。</li>\n<li>加水分解により、鎖の末端からグルコース単位が外される。</li>\n<li>グルコースは細胞呼吸で酸化されてエネルギーを放出する。肝臓のグリコーゲンは、グルコースを血液中に放出することもできる。</li>\n</ol>\n<table><tr><th></th><th>デンプン</th><th>グリコーゲン</th></tr>\n<tr><td>生物</td><td>植物</td><td>動物</td></tr>\n<tr><td>貯蔵場所</td><td>葉緑体、種子、塊茎</td><td>肝臓と筋肉の細胞</td></tr>\n<tr><td>枝分かれ</td><td>少しある</td><td>より多い</td></tr></table>\n<p><strong>採点のことば。</strong>「不溶なので浸透に影響せず、細胞から出ていけない」「コンパクト」「枝分かれで末端が多く、グルコースを速く付加・除去できる」。</p>","zh":"<p><strong>為何多糖不會擾亂細胞的水分平衡。</strong>滲透作用取決於溶質粒子的<em>數目</em>，而不是質量。如果細胞把 1000 個葡萄糖單位以游離葡萄糖儲存，就有 1000 個溶解的粒子。連成一個糖原分子後，只算一個粒子。溶質濃度保持低水平，水不會因滲透進入細胞，大分子亦不能透過膜擴散出去。</p>\n<p><strong>為何分支有幫助（示例）。</strong>葡萄糖單位是在鏈的<em>末端</em>加入或移除的。由 1000 個單位組成的無分支鏈只有兩個末端；同樣大小的有分支分子可能有約一百個末端。於是許多酶可以同時工作，需要時葡萄糖可以快得多地釋出。</p>\n<p><strong>動員糖原，逐步說明。</strong></p>\n<ol>\n<li>細胞需要能量（例如肌肉開始活動）。</li>\n<li>水解反應從鏈的末端移除葡萄糖單位。</li>\n<li>葡萄糖在細胞呼吸中氧化，釋出能量。肝臟中的糖原亦可把葡萄糖釋放到血液中。</li>\n</ol>\n<table><tr><th></th><th>澱粉</th><th>糖原</th></tr>\n<tr><td>生物</td><td>植物</td><td>動物</td></tr>\n<tr><td>儲存位置</td><td>葉綠體、種子、塊莖</td><td>肝臟和肌肉細胞</td></tr>\n<tr><td>分支</td><td>有一些</td><td>分支更多</td></tr></table>\n<p><strong>評分用語。</strong>「不溶，所以沒有滲透影響，也不能離開細胞」；「結構緊密」；「分支令末端增多，可迅速加入或移除葡萄糖」。</p>"},
        widget: "carb-builder",
        widgetOptions: {tab: 2},
        heading: L("Polysaccharides for energy storage", "エネルギー貯蔵物質としての多糖類", "多糖作為儲能物質"),
        body: L(
          `<p>Cells store glucose as a polysaccharide: <strong>starch</strong> in plants and <strong>glycogen</strong> in animals. Both are polymers of <strong>α-glucose</strong>, joined by condensation reactions.</p>
<ul><li><strong>Compact</strong>: the chains are coiled and (in glycogen, and part of starch) branched while they are built. A lot of glucose is packed into a small space.</li>
<li><strong>Relatively insoluble</strong>: the molecules are very large, so they do not dissolve easily. They cannot diffuse out of the cell and they do not change the water concentration inside it (no osmotic problem). A pile of free glucose would do both.</li>
<li><strong>Easy to add or remove glucose</strong>: α-glucose units are added at the chain ends by condensation and removed by hydrolysis. Branching makes many ends, so glucose can be released quickly when energy is needed (<span class="term">mobilized</span>).</li></ul>
<p>Plants make starch (stored in chloroplasts, seeds and tubers). Animals make glycogen (stored mainly in liver and muscle cells). Glycogen is more highly branched than starch.</p>`,
          `<p>細胞はグルコースを多糖類として貯蔵する。植物は<strong>デンプン (starch)</strong>、動物は<strong>グリコーゲン (glycogen)</strong>である。どちらも <strong>α-グルコース</strong>が縮合反応でつながった重合体である。</p>
<ul><li><strong>コンパクト (compact)</strong>: 合成されるときに鎖がらせん状に巻き、(グリコーゲンやデンプンの一部では) 枝分かれもする。小さな空間に多くのグルコースを詰め込める。</li>
<li><strong>比較的不溶 (relatively insoluble)</strong>: 分子が非常に大きいので溶けにくい。細胞外へ拡散せず、細胞内の水の濃度も変えない (浸透の問題が起きない)。遊離のグルコースをためるとどちらも起こる。</li>
<li><strong>グルコースを付けたり外したりしやすい</strong>: α-グルコースは鎖の末端に縮合で付加され、加水分解で外される。枝分かれで末端が多くなるため、エネルギーが必要なときすばやくグルコースを放出できる (<span class="term">動員 (mobilize)</span>)。</li></ul>
<p>植物はデンプンをつくり (葉緑体、種子、塊茎に貯蔵)、動物はグリコーゲンをつくる (主に肝臓と筋肉の細胞に貯蔵)。グリコーゲンはデンプンより枝分かれが多い。</p>`,
          `<p>細胞把葡萄糖以多糖形式儲存：植物儲存<strong>澱粉 (starch)</strong>，動物儲存<strong>糖原 (glycogen)</strong>。兩者都是由 <strong>α-葡萄糖</strong>經縮合反應連成的聚合物。</p>
<ul><li><strong>結構緊密 (compact)</strong>：合成時鏈會捲曲成螺旋，(糖原及部分澱粉) 亦有分支，可在小空間內儲存大量葡萄糖。</li>
<li><strong>相對不溶於水 (relatively insoluble)</strong>：分子很大，不易溶解，不會擴散出細胞，也不會改變細胞內水的濃度 (沒有滲透問題)。若儲存游離葡萄糖，則兩種問題都會出現。</li>
<li><strong>容易增減葡萄糖單位</strong>：α-葡萄糖經縮合反應接到鏈的末端，經水解反應移除。分支令末端增多，所以需要能量時可迅速釋出葡萄糖 (<span class="term">動員 (mobilize)</span>)。</li></ul>
<p>植物製造澱粉 (儲存在葉綠體、種子和塊莖)，動物製造糖原 (主要儲存在肝臟和肌肉細胞)。糖原的分支比澱粉多。</p>`),
        examTip: L("“Insoluble” is the key mark: it explains why storing polysaccharide instead of glucose does not affect osmosis and does not leak out.",
          "「不溶性」が得点の鍵: グルコースの代わりに多糖類を貯蔵すると浸透に影響せず、漏れ出ないことを説明できる。",
          "「不溶」是關鍵得分點：它解釋了為何儲存多糖而非葡萄糖不會影響滲透，亦不會漏出細胞。")
      },
      {
        ref: "B1.1.6", ahl: false,
        deeper: {"en":"<p><strong>From glucose to a strong wall: the levels.</strong></p>\n<ol>\n<li><strong>Glucose units</strong> (β-glucose) are joined by covalent bonds. Every second unit is flipped, so the chain is straight.</li>\n<li><strong>Chains</strong> lie parallel and side by side. Hydrogen bonds form between –OH groups of neighbouring chains.</li>\n<li><strong>Bundles</strong> (fibres) form. Each hydrogen bond is weak, but thousands together are strong.</li>\n<li>The fibres in the <strong>cell wall</strong> resist being pulled apart (high tensile strength).</li>\n</ol>\n<p><strong>What this strength does.</strong> When a plant cell takes in water by osmosis, the cell membrane pushes outwards against the wall. The wall resists, so the cell does not burst. The cell becomes firm (turgid), which helps to hold up non-woody plants (see D2.3).</p>\n<table><tr><th></th><th>Starch / glycogen</th><th>Cellulose</th></tr>\n<tr><td>Orientation of neighbouring glucose units</td><td>All the same way</td><td>Alternate (every second unit flipped)</td></tr>\n<tr><td>Chain shape</td><td>Coiled</td><td>Straight</td></tr>\n<tr><td>Links between chains</td><td>Not applicable: chains coil and branch</td><td>Many hydrogen bonds between parallel chains</td></tr>\n<tr><td>Result</td><td>Compact store</td><td>Strong fibres</td></tr></table>\n<p><strong>Common errors.</strong> \"Covalent bonds between chains\" (wrong: hydrogen bonds); \"hydrogen bonds are strong\" (individually weak, collectively strong).</p>","ja":"<p><strong>グルコースから丈夫な壁へ：階層。</strong></p>\n<ol>\n<li><strong>グルコース単位</strong>（β-グルコース）が共有結合でつながる。1つおきに反転するので、鎖はまっすぐになる。</li>\n<li><strong>鎖</strong>が平行に並ぶ。隣り合う鎖の –OH 基の間に水素結合ができる。</li>\n<li><strong>束</strong>（繊維）ができる。水素結合1本は弱いが、何千本も合わさると強い。</li>\n<li><strong>細胞壁</strong>の繊維は引き離されることに抵抗する（引っ張り強度が高い）。</li>\n</ol>\n<p><strong>この強さの働き。</strong>植物細胞が浸透で水を取り込むと、細胞膜は外向きに壁を押します。壁がそれに抵抗するので、細胞は破裂しません。細胞は張りのある状態（膨圧が高い状態）になり、木質化していない植物を支える助けになります (D2.3 参照)。</p>\n<table><tr><th></th><th>デンプン・グリコーゲン</th><th>セルロース</th></tr>\n<tr><td>隣り合うグルコース単位の向き</td><td>すべて同じ向き</td><td>交互（1つおきに反転）</td></tr>\n<tr><td>鎖の形</td><td>らせん状</td><td>直線状</td></tr>\n<tr><td>鎖どうしの結びつき</td><td>該当なし：鎖は巻いて枝分かれする</td><td>平行な鎖の間に多数の水素結合</td></tr>\n<tr><td>結果</td><td>コンパクトな貯蔵</td><td>丈夫な繊維</td></tr></table>\n<p><strong>よくある誤り。</strong>「鎖の間の共有結合」（誤り：水素結合）、「水素結合は強い」（1本は弱く、全体では強い）。</p>","zh":"<p><strong>由葡萄糖到堅固的壁：各個層次。</strong></p>\n<ol>\n<li><strong>葡萄糖單位</strong>（β-葡萄糖）以共價鍵連接。每隔一個單位倒轉，所以鏈是筆直的。</li>\n<li><strong>鏈</strong>平行並排。相鄰鏈的 –OH 基之間形成氫鍵。</li>\n<li>形成<strong>束</strong>（纖維）。每個氫鍵雖弱，但成千上萬個加起來就很強。</li>\n<li><strong>細胞壁</strong>中的纖維抵抗被拉開（抗拉強度高）。</li>\n</ol>\n<p><strong>這種強度的作用。</strong>植物細胞經滲透吸水時，細胞膜向外推向細胞壁。細胞壁抵抗這股力，所以細胞不會脹破。細胞變得飽滿（膨脹），有助支撐非木質的植物 (見 D2.3)。</p>\n<table><tr><th></th><th>澱粉／糖原</th><th>纖維素</th></tr>\n<tr><td>相鄰葡萄糖單位的方向</td><td>全部同一方向</td><td>交替（每隔一個倒轉）</td></tr>\n<tr><td>鏈的形狀</td><td>螺旋</td><td>筆直</td></tr>\n<tr><td>鏈與鏈之間的連繫</td><td>不適用：鏈捲曲和分支</td><td>平行的鏈之間有許多氫鍵</td></tr>\n<tr><td>結果</td><td>結構緊密的儲備</td><td>堅固的纖維</td></tr></table>\n<p><strong>常見錯誤。</strong>「鏈與鏈之間有共價鍵」（錯：是氫鍵）；「氫鍵很強」（單個很弱，整體很強）。</p>"},
        widget: "carb-builder",
        widgetOptions: {tab: 2, poly: 3},
        heading: L("Cellulose: a structural polysaccharide", "セルロース：構造をつくる多糖類", "纖維素：結構多糖"),
        body: L(
          `<p><span class="term">Cellulose</span> is the main substance of plant cell walls. It is a polymer of <strong>β-glucose</strong>.</p>
<p>In β-glucose the –OH on carbon 1 points up, the opposite way to α-glucose. To make a glycosidic bond, every <strong>second β-glucose is turned upside down</strong> (alternating orientation). This gives a <strong>straight, unbranched chain</strong>, not a coil.</p>
<ul><li>Many straight chains lie side by side and form <strong>hydrogen bonds</strong> between neighbouring chains (cross-links).</li>
<li>Each hydrogen bond is weak, but there are huge numbers of them, so the chains are grouped in strong <strong>bundles</strong> (fibres).</li>
<li>These fibres have high tensile strength. They resist the pressure of water pushing outwards, so plant cells do not burst and the cell wall holds the plant’s shape.</li></ul>
<table><tr><th></th><th>Starch / glycogen</th><th>Cellulose</th></tr>
<tr><td>Monomer</td><td>α-glucose</td><td>β-glucose</td></tr>
<tr><td>Shape of chain</td><td>Coiled (and branched)</td><td>Straight, unbranched</td></tr>
<tr><td>Function</td><td>Energy storage</td><td>Structure (cell wall)</td></tr></table>`,
          `<p><span class="term">セルロース (cellulose)</span> は植物の細胞壁の主成分で、<strong>β-グルコース</strong>の重合体である。</p>
<p>β-グルコースでは1位の炭素の –OH が上向きで、α-グルコースとは逆である。グリコシド結合をつくるために、<strong>β-グルコースは1つおきに上下が反転</strong>する (向きが交互になる)。その結果、巻かずに<strong>まっすぐで枝分かれのない鎖</strong>になる。</p>
<ul><li>多数のまっすぐな鎖が並び、隣り合う鎖の間に<strong>水素結合 (hydrogen bond)</strong> ができて架橋される。</li>
<li>水素結合1本は弱いが、数が非常に多いので、鎖は丈夫な<strong>束</strong> (繊維) になる。</li>
<li>この繊維は引っ張り強度が高い。外向きにかかる水の圧力に耐えるので、植物細胞は破裂せず、細胞壁が植物の形を保つ。</li></ul>
<table><tr><th></th><th>デンプン・グリコーゲン</th><th>セルロース</th></tr>
<tr><td>単量体</td><td>α-グルコース</td><td>β-グルコース</td></tr>
<tr><td>鎖の形</td><td>らせん状 (枝分かれあり)</td><td>直線状、枝分かれなし</td></tr>
<tr><td>機能</td><td>エネルギー貯蔵</td><td>構造 (細胞壁)</td></tr></table>`,
          `<p><span class="term">纖維素 (cellulose)</span> 是植物細胞壁的主要成分，由 <strong>β-葡萄糖</strong>聚合而成。</p>
<p>β-葡萄糖的1號碳上的 –OH 朝上，與 α-葡萄糖相反。為了形成糖苷鍵，<strong>每隔一個 β-葡萄糖就要上下倒轉</strong> (方向交替)，結果形成<strong>筆直、無分支的鏈</strong>，而不是螺旋。</p>
<ul><li>很多筆直的鏈並排，相鄰的鏈之間形成<strong>氫鍵 (hydrogen bond)</strong> 作橫向連接。</li>
<li>每個氫鍵雖弱，但數量極多，使鏈聚成堅固的<strong>束</strong> (纖維)。</li>
<li>這些纖維的抗拉強度很高，能抵抗水向外推的壓力，所以植物細胞不會脹破，細胞壁亦能維持植物的形狀。</li></ul>
<table><tr><th></th><th>澱粉／糖原</th><th>纖維素</th></tr>
<tr><td>單體</td><td>α-葡萄糖</td><td>β-葡萄糖</td></tr>
<tr><td>鏈的形狀</td><td>螺旋 (有分支)</td><td>筆直、無分支</td></tr>
<tr><td>功能</td><td>儲能</td><td>結構 (細胞壁)</td></tr></table>`),
        examTip: L("Three linked marks: alternating orientation → straight chains → hydrogen-bond cross-links form bundles → strength.",
          "3つのつながり: 向きが交互→まっすぐな鎖→水素結合の架橋で束になる→強度。",
          "三個連環得分點：方向交替→鏈筆直→氫鍵橫向連接成束→強度高。")
      },
      {
        ref: "B1.1.7", ahl: false,
        deeper: {"en":"<p><strong>Why the sugar chains face outwards.</strong> Carbohydrate chains are hydrophilic and sit in the watery fluid outside the cell, where they are easy for other cells and the immune system to detect.</p>\n<p><strong>Many labels from one pattern.</strong> Sugar chains can differ in which sugar units they contain and how they are arranged. A glycoprotein can therefore carry a very specific \"label\" that identifies the cell type or the individual.</p>\n<p><strong>ABO blood groups: a worked example.</strong> The antigen on red blood cells depends on the sugar at the end of the chain. The plasma contains antibodies against antigens that the person's own cells lack (antibodies are covered further in the immune system topics).</p>\n<table><tr><th>Blood group</th><th>Antigens on red blood cells</th><th>Antibodies in plasma</th></tr>\n<tr><td>A</td><td>A</td><td>Anti-B</td></tr>\n<tr><td>B</td><td>B</td><td>Anti-A</td></tr>\n<tr><td>AB</td><td>A and B</td><td>None</td></tr>\n<tr><td>O</td><td>None</td><td>Anti-A and anti-B</td></tr></table>\n<p>If group A blood were given to a group B person, the anti-A antibodies would attack the A antigens on the donated cells. This is why blood groups must be matched.</p>\n<p><strong>Mark-scheme language.</strong> \"Glycoprotein with a carbohydrate chain projecting from the outer surface of the plasma membrane\"; \"acts as an antigen / recognition label\"; \"immune system recognizes foreign antigens\". Do not say the antigens are carbohydrates <em>alone</em>: they are attached to membrane proteins.</p>","ja":"<p><strong>糖鎖が外を向く理由。</strong>糖鎖は親水性で、細胞の外の水っぽい液の中にあるため、他の細胞や免疫系が見つけやすくなっています。</p>\n<p><strong>一つの型から多くの目印。</strong>糖鎖は、含まれる糖の種類や並び方が異なり得ます。そのため糖タンパク質は、細胞の種類や個体を特定する、非常に特異的な「目印」をもてます。</p>\n<p><strong>ABO式血液型：計算例のような整理。</strong>赤血球の抗原は糖鎖の末端の糖で決まります。血漿には、その人自身の細胞にない抗原に対する抗体があります（抗体については免疫系の単元でさらに学びます）。</p>\n<table><tr><th>血液型</th><th>赤血球の抗原</th><th>血漿の抗体</th></tr>\n<tr><td>A</td><td>A</td><td>抗B</td></tr>\n<tr><td>B</td><td>B</td><td>抗A</td></tr>\n<tr><td>AB</td><td>AとB</td><td>なし</td></tr>\n<tr><td>O</td><td>なし</td><td>抗Aと抗B</td></tr></table>\n<p>A型の血液をB型の人に輸血すると、抗A抗体が、提供された細胞のA抗原を攻撃します。血液型を合わせなければならない理由です。</p>\n<p><strong>採点のことば。</strong>「細胞膜の外側の表面に糖鎖が突き出た糖タンパク質」「抗原／認識の目印として働く」「免疫系は異物の抗原を認識する」。抗原が糖質<em>だけ</em>でできているとは書かないこと。膜タンパク質に結合しています。</p>","zh":"<p><strong>為何糖鏈朝向外面。</strong>糖鏈是親水的，位於細胞外的水狀液體中，其他細胞和免疫系統容易偵測到它們。</p>\n<p><strong>一種模式，許多標籤。</strong>糖鏈所含的糖單位和排列方式可以不同。所以糖蛋白可以帶有非常特定的「標籤」，用來識別細胞類型或個體。</p>\n<p><strong>ABO 血型：實例整理。</strong>紅血球上的抗原取決於糖鏈末端的糖。血漿中含有針對該人自身細胞所沒有的抗原的抗體（抗體會在免疫系統的課題再詳述）。</p>\n<table><tr><th>血型</th><th>紅血球上的抗原</th><th>血漿中的抗體</th></tr>\n<tr><td>A</td><td>A</td><td>抗 B</td></tr>\n<tr><td>B</td><td>B</td><td>抗 A</td></tr>\n<tr><td>AB</td><td>A 和 B</td><td>沒有</td></tr>\n<tr><td>O</td><td>沒有</td><td>抗 A 和抗 B</td></tr></table>\n<p>如果把 A 型血輸給 B 型的人，抗 A 抗體會攻擊捐贈血細胞上的 A 抗原。這就是為何血型必須配對。</p>\n<p><strong>評分用語。</strong>「糖蛋白，糖鏈從質膜外表面伸出」；「作為抗原／識別標籤」；「免疫系統識別外來抗原」。不要說抗原<em>只是</em>碳水化合物：它們連接在膜蛋白上。</p>"},
        heading: L("Glycoproteins and cell–cell recognition", "糖タンパク質と細胞間認識", "糖蛋白與細胞間識別"),
        body: L(
          `<p>A <span class="term">glycoprotein</span> is a protein with short carbohydrate chains attached. In the plasma membrane the carbohydrate chains stick out on the <strong>outside</strong> of the cell. They act as labels, so cells can recognise each other (<span class="term">cell–cell recognition</span>). For example, the immune system uses these labels to tell the body’s own cells from foreign cells.</p>
<p><strong>Example: ABO blood groups.</strong> Red blood cells carry <span class="term">antigens</span> (molecules that the immune system can recognise) made of carbohydrate chains attached to membrane proteins. The ABO antigens differ in the sugar units at the end of the carbohydrate chain, which gives the blood groups A, B, AB and O. Your immune system does not attack your own antigens, but it does attack blood-group antigens that your own cells do not have. This is why blood must be matched for a transfusion.</p>
<p>Glycoproteins are also covered in B2.1 (membrane structure). Proteins themselves are in B1.2.</p>`,
          `<p><span class="term">糖タンパク質 (glycoprotein)</span> は、短い糖鎖が結合したタンパク質である。細胞膜では糖鎖が細胞の<strong>外側</strong>に突き出し、目印として働くので、細胞どうしが互いを見分けられる (<span class="term">細胞間認識 (cell–cell recognition)</span>)。例えば免疫系はこの目印で自分の細胞と異物を区別する。</p>
<p><strong>例: ABO式血液型。</strong> 赤血球は膜タンパク質に糖鎖が結合した<span class="term">抗原 (antigen)</span> (免疫系が認識できる分子) をもつ。ABO抗原は糖鎖の末端の糖の違いによって異なり、A型・B型・AB型・O型が生じる。免疫系は自分の抗原は攻撃しないが、自分の細胞にない血液型抗原は攻撃する。そのため輸血では血液型を合わせる必要がある。</p>
<p>糖タンパク質は B2.1 (膜の構造) でも扱う。タンパク質そのものは B1.2 で扱う。</p>`,
          `<p><span class="term">糖蛋白 (glycoprotein)</span> 是帶有短碳水化合物鏈的蛋白質。在質膜上，糖鏈伸出細胞的<strong>外側</strong>，如同標籤，令細胞能互相識別 (<span class="term">細胞間識別 (cell–cell recognition)</span>)。例如免疫系統靠這些標籤分辨自身細胞和外來細胞。</p>
<p><strong>例子：ABO 血型。</strong> 紅血球帶有<span class="term">抗原 (antigen)</span> (免疫系統能識別的分子)，由接在膜蛋白上的糖鏈組成。ABO 抗原的差別在於糖鏈末端的糖單位，因而有 A、B、AB 和 O 型血。免疫系統不會攻擊自身的抗原，但會攻擊自身細胞沒有的血型抗原，所以輸血時血型必須配對。</p>
<p>糖蛋白亦會在 B2.1 (膜的結構) 再談。蛋白質本身在 B1.2。</p>`),
      },
      {
        ref: "B1.1.8", ahl: false,
        deeper: {"en":"<p><strong>Why some molecules dissolve in water and others do not.</strong> A bond is polar if the two atoms share electrons unequally. O–H bonds are polar, so –OH groups form hydrogen bonds with water. C–H and C–C bonds share electrons almost equally, so they are non-polar and cannot form hydrogen bonds with water. Water molecules prefer to hydrogen bond to each other, so non-polar parts are left out of the water.</p>\n<table><tr><th>Substance</th><th>Dissolves in water?</th><th>Dissolves in hexane?</th><th>Reason</th></tr>\n<tr><td>Glucose</td><td>Yes</td><td>No</td><td>Many polar –OH groups</td></tr>\n<tr><td>Triglyceride</td><td>No (only sparingly)</td><td>Yes</td><td>Mostly hydrocarbon chains</td></tr>\n<tr><td>Steroid</td><td>No (only sparingly)</td><td>Yes</td><td>Mostly hydrocarbon rings</td></tr></table>\n<p><strong>Reading a definition.</strong> \"Lipids are substances in living organisms that are soluble in non-polar solvents but only sparingly soluble in water.\" It does not say anything about structure, so it covers fats, oils, waxes and steroids, which have different structures. Phospholipids have a polar head, so they are partly water-loving (see B1.1.12).</p>\n<p><strong>Mark-scheme language.</strong> \"Hydrophobic\", \"non-polar\", \"hydrocarbon chains\", \"cannot form hydrogen bonds with water\". Do not write \"lipids are insoluble in water\" without the word <em>sparingly</em> (or \"poorly\").</p>","ja":"<p><strong>水に溶ける分子と溶けない分子がある理由。</strong>2つの原子が電子を不均等に共有する結合は極性があります。O–H 結合は極性があるので、–OH 基は水と水素結合をつくります。C–H 結合と C–C 結合はほぼ均等に電子を共有するので無極性で、水と水素結合をつくれません。水分子どうしは互いに水素結合を好むため、無極性の部分は水から締め出されます。</p>\n<table><tr><th>物質</th><th>水に溶けるか</th><th>ヘキサンに溶けるか</th><th>理由</th></tr>\n<tr><td>グルコース</td><td>はい</td><td>いいえ</td><td>極性のある –OH 基が多い</td></tr>\n<tr><td>トリグリセリド</td><td>いいえ（わずかに溶ける）</td><td>はい</td><td>ほとんどが炭化水素の鎖</td></tr>\n<tr><td>ステロイド</td><td>いいえ（わずかに溶ける）</td><td>はい</td><td>ほとんどが炭化水素の環</td></tr></table>\n<p><strong>定義の読み方。</strong>「脂質は、生物がもつ物質のうち、無極性溶媒に溶け、水にはわずかしか溶けないもの」。構造については何も述べていないので、構造の異なる脂肪、油、ワックス、ステロイドをすべて含みます。リン脂質は極性のある頭部をもつので、部分的に水になじみます (B1.1.12 参照)。</p>\n<p><strong>採点のことば。</strong>「疎水性」「無極性」「炭化水素の鎖」「水と水素結合をつくれない」。「脂質は水に溶けない」と書くときは、<em>わずかしか</em>（または「溶けにくい」）を付けましょう。</p>","zh":"<p><strong>為何有些分子溶於水，有些不溶。</strong>如果兩個原子不均等地共用電子，鍵就是極性的。O–H 鍵是極性的，所以 –OH 基能與水形成氫鍵。C–H 和 C–C 鍵共用電子幾乎均等，所以是非極性的，不能與水形成氫鍵。水分子較傾向彼此形成氫鍵，因此非極性的部分被排除在水之外。</p>\n<table><tr><th>物質</th><th>溶於水？</th><th>溶於己烷？</th><th>原因</th></tr>\n<tr><td>葡萄糖</td><td>是</td><td>否</td><td>有很多極性 –OH 基</td></tr>\n<tr><td>甘油三酯</td><td>否（只微溶）</td><td>是</td><td>大部分是烴鏈</td></tr>\n<tr><td>類固醇</td><td>否（只微溶）</td><td>是</td><td>大部分是烴環</td></tr></table>\n<p><strong>如何理解定義。</strong>「脂質是生物體內可溶於非極性溶劑、但只微溶於水的物質。」定義沒有提及結構，所以包括結構各異的脂肪、油、蠟和類固醇。磷脂有極性的頭部，所以部分親水（見 B1.1.12）。</p>\n<p><strong>評分用語。</strong>「疏水」、「非極性」、「烴鏈」、「不能與水形成氫鍵」。寫「脂質不溶於水」時，要加上<em>微</em>溶（或「難溶」）。</p>"},
        heading: L("Lipids and their hydrophobic properties", "脂質の疎水性", "脂質的疏水性"),
        body: L(
          `<p><span class="term">Lipids</span> are substances in living organisms that <strong>dissolve in non-polar solvents</strong> (such as hexane) but are <strong>only sparingly soluble in water</strong>. They are defined by this solubility, not by one shared structure.</p>
<p>Lipids include <strong>fats</strong> (solid at room temperature), <strong>oils</strong> (liquid at room temperature), <strong>waxes</strong> and <strong>steroids</strong>.</p>
<p>Why are they hydrophobic (“water-fearing”)? Much of a lipid is made of hydrocarbon chains or rings: many C–H and C–C bonds. These bonds are non-polar, so lipids cannot form hydrogen bonds with water and do not mix with it.</p>`,
          `<p><span class="term">脂質 (lipid)</span> は、生物がもつ物質のうち<strong>無極性溶媒に溶け</strong> (ヘキサンなど)、<strong>水にはわずかしか溶けない</strong>ものをいう。共通の構造ではなく、この溶解性で定義される。</p>
<p>脂質には<strong>脂肪 (fat)</strong> (室温で固体)、<strong>油 (oil)</strong> (室温で液体)、<strong>ワックス (wax)</strong>、<strong>ステロイド (steroid)</strong> が含まれる。</p>
<p>なぜ疎水性 (hydrophobic、「水を嫌う」) なのか。脂質の大部分は炭化水素の鎖や環でできており、C–H 結合や C–C 結合が多い。これらの結合は無極性なので、水と水素結合をつくれず、水と混ざらない。</p>`,
          `<p><span class="term">脂質 (lipid)</span> 是生物體內<strong>可溶於非極性溶劑</strong> (如己烷) 而<strong>只微溶於水</strong>的物質。脂質是以這種溶解性定義，而不是以共同結構定義。</p>
<p>脂質包括<strong>脂肪 (fat)</strong> (室溫下為固體)、<strong>油 (oil)</strong> (室溫下為液體)、<strong>蠟 (wax)</strong> 和<strong>類固醇 (steroid)</strong>。</p>
<p>為何脂質是疏水 (hydrophobic，「怕水」) 的？脂質大部分由烴鏈或環組成，含大量 C–H 和 C–C 鍵。這些鍵是非極性的，所以不能與水形成氫鍵，也不與水混合。</p>`),
        examTip: L("Define lipids by solubility. Not “lipids are fatty acids and glycerol”: steroids are lipids but contain neither.",
          "脂質は溶解性で定義する。「脂質は脂肪酸とグリセロール」とは書かない。ステロイドは脂質だがどちらも含まない。",
          "要以溶解性定義脂質。不要寫「脂質是脂肪酸和甘油」，因為類固醇是脂質，卻不含兩者。")
      },
      {
        ref: "B1.1.9", ahl: false,
        deeper: {"en":"<p><strong>Building a triglyceride, step by step.</strong></p>\n<ol>\n<li>Glycerol has three –OH groups. A fatty acid has a –COOH group at one end.</li>\n<li>An –OH of glycerol and the –COOH of a fatty acid react: a covalent bond forms and one water is released (condensation).</li>\n<li>This is repeated at the second and third –OH groups.</li>\n</ol>\n<table><tr><th>Lipid</th><th>Glycerol</th><th>Fatty acids</th><th>Phosphate</th><th>Condensation reactions</th><th>Water released</th></tr>\n<tr><td>Triglyceride</td><td>1</td><td>3</td><td>0</td><td>3</td><td>3</td></tr>\n<tr><td>Phospholipid</td><td>1</td><td>2</td><td>1</td><td>3</td><td>3</td></tr></table>\n<p><strong>Reversing it.</strong> Hydrolysis of one triglyceride uses 3 water molecules and gives 1 glycerol and 3 fatty acids.</p>\n<p><strong>Recognising them in diagrams.</strong> A triglyceride has three tails coming off a three-carbon backbone. A phospholipid has two tails and a head that contains phosphate. Label the head as hydrophilic and the tails as hydrophobic.</p>\n<div class=\"note\"><strong>Extension (not required).</strong> The bond between glycerol and a fatty acid is called an ester bond. You do not need to name it. Real phospholipid heads usually carry extra small groups attached to the phosphate; the guide only requires the phosphate.</div>\n<p><strong>Mark-scheme language.</strong> \"One glycerol and three fatty acids\"; \"condensation reactions\"; \"phosphate group replaces one fatty acid\".</p>","ja":"<p><strong>トリグリセリドの合成（段階別）。</strong></p>\n<ol>\n<li>グリセロールには –OH が3つあり、脂肪酸の一端には –COOH がある。</li>\n<li>グリセロールの –OH と脂肪酸の –COOH が反応し、共有結合ができて水が1分子放出される（縮合）。</li>\n<li>これを2つ目と3つ目の –OH でも繰り返す。</li>\n</ol>\n<table><tr><th>脂質</th><th>グリセロール</th><th>脂肪酸</th><th>リン酸</th><th>縮合の回数</th><th>放出される水</th></tr>\n<tr><td>トリグリセリド</td><td>1</td><td>3</td><td>0</td><td>3</td><td>3</td></tr>\n<tr><td>リン脂質</td><td>1</td><td>2</td><td>1</td><td>3</td><td>3</td></tr></table>\n<p><strong>逆の反応。</strong>トリグリセリド1分子の加水分解では水3分子を使い、グリセロール1分子と脂肪酸3分子ができます。</p>\n<p><strong>図での見分け方。</strong>トリグリセリドは、炭素3個の骨格から3本の尾部が出ています。リン脂質は2本の尾部と、リン酸を含む頭部をもちます。頭部は親水性、尾部は疎水性と書き込みます。</p>\n<div class=\"note\"><strong>発展（必須ではありません）。</strong>グリセロールと脂肪酸の間の結合はエステル結合 (ester bond) と呼ばれますが、名前を覚える必要はありません。実際のリン脂質の頭部には、リン酸にさらに小さな基が付いているのが普通です。ガイドが求めるのはリン酸だけです。</div>\n<p><strong>採点のことば。</strong>「グリセロール1分子と脂肪酸3分子」「縮合反応」「リン酸基が脂肪酸1本の代わりになる」。</p>","zh":"<p><strong>逐步合成甘油三酯。</strong></p>\n<ol>\n<li>甘油有三個 –OH 基；脂肪酸一端有 –COOH 基。</li>\n<li>甘油的一個 –OH 與脂肪酸的 –COOH 反應：形成共價鍵並釋出一個水分子（縮合）。</li>\n<li>在第二和第三個 –OH 基重複這個過程。</li>\n</ol>\n<table><tr><th>脂質</th><th>甘油</th><th>脂肪酸</th><th>磷酸基</th><th>縮合反應次數</th><th>釋出的水</th></tr>\n<tr><td>甘油三酯</td><td>1</td><td>3</td><td>0</td><td>3</td><td>3</td></tr>\n<tr><td>磷脂</td><td>1</td><td>2</td><td>1</td><td>3</td><td>3</td></tr></table>\n<p><strong>逆向反應。</strong>一個甘油三酯水解時，消耗 3 個水分子，生成 1 個甘油和 3 個脂肪酸。</p>\n<p><strong>在圖中辨認。</strong>甘油三酯有三條尾部連在三碳骨架上。磷脂有兩條尾部和一個含磷酸的頭部。把頭部標示為親水，尾部標示為疏水。</p>\n<div class=\"note\"><strong>延伸（非必修）。</strong>甘油與脂肪酸之間的鍵稱為酯鍵 (ester bond)，你不需要記住這個名稱。真實磷脂的頭部通常在磷酸上還連有其他小基團；課程指引只要求磷酸基。</div>\n<p><strong>評分用語。</strong>「一個甘油和三個脂肪酸」；「縮合反應」；「磷酸基取代一個脂肪酸」。</p>"},
        widget: "lipid-builder",
        widgetOptions: {tab: 0},
        heading: L("Triglycerides and phospholipids", "トリグリセリドとリン脂質", "甘油三酯與磷脂"),
        body: L(
          `<p>Both are built by <strong>condensation reactions</strong> using <span class="term">glycerol</span> (a small 3-carbon molecule with three –OH groups) and <span class="term">fatty acids</span> (a long hydrocarbon chain with a –COOH group at one end).</p>
<ul><li><strong>Triglyceride</strong>: one glycerol + <strong>three</strong> fatty acids. Three condensation reactions release three water molecules.</li>
<li><strong>Phospholipid</strong>: one glycerol + <strong>two</strong> fatty acids + <strong>one phosphate group</strong>. The phosphate group is charged and hydrophilic (“water-loving”) and forms the “head”. The two fatty acid chains are the hydrophobic “tails”.</li></ul>
<p>So a triglyceride is hydrophobic all over, but a phospholipid has a hydrophilic head and hydrophobic tails (next sections).</p>`,
          `<p>どちらも<strong>縮合反応</strong>で、<span class="term">グリセロール (glycerol)</span> (–OH を3つもつ炭素3個の小さな分子) と<span class="term">脂肪酸 (fatty acid)</span> (一端に –COOH をもつ長い炭化水素鎖) からつくられる。</p>
<ul><li><strong>トリグリセリド (triglyceride)</strong>: グリセロール1分子 + 脂肪酸<strong>3</strong>分子。縮合が3回起こり、水3分子が放出される。</li>
<li><strong>リン脂質 (phospholipid)</strong>: グリセロール1分子 + 脂肪酸<strong>2</strong>分子 + <strong>リン酸基1つ</strong>。リン酸基は電荷をもち親水性 (「水になじむ」) で「頭部」になる。2本の脂肪酸鎖は疎水性の「尾部」である。</li></ul>
<p>つまりトリグリセリドは全体が疎水性だが、リン脂質は親水性の頭部と疎水性の尾部をもつ (次の節)。</p>`,
          `<p>兩者都經<strong>縮合反應</strong>形成，原料是<span class="term">甘油 (glycerol)</span> (有三個 –OH 的3碳小分子) 和<span class="term">脂肪酸 (fatty acid)</span> (一端帶有 –COOH 的長烴鏈)。</p>
<ul><li><strong>甘油三酯 (triglyceride)</strong>：一個甘油 + <strong>三</strong>個脂肪酸。三次縮合反應釋出三個水分子。</li>
<li><strong>磷脂 (phospholipid)</strong>：一個甘油 + <strong>兩</strong>個脂肪酸 + <strong>一個磷酸基</strong>。磷酸基帶電荷，具親水性 (「親水」)，構成「頭部」；兩條脂肪酸鏈是疏水的「尾部」。</li></ul>
<p>因此甘油三酯整個分子都是疏水的，而磷脂則有親水的頭部和疏水的尾部 (見下節)。</p>`),
        examTip: L("Remember the numbers: 1 glycerol + 3 fatty acids (triglyceride); 1 glycerol + 2 fatty acids + 1 phosphate (phospholipid).",
          "数を覚える: グリセロール1+脂肪酸3 (トリグリセリド)、グリセロール1+脂肪酸2+リン酸1 (リン脂質)。",
          "記住數目：1 甘油 + 3 脂肪酸 (甘油三酯)；1 甘油 + 2 脂肪酸 + 1 磷酸基 (磷脂)。")
      },
      {
        ref: "B1.1.10", ahl: false,
        deeper: {"en":"<p><strong>Reading the melting-point data.</strong> All four fatty acids in the table have 18 carbons, so the only difference is the number of C=C bonds. This makes it a fair comparison.</p>\n<table><tr><th>C=C bonds</th><th>Melting point (°C)</th><th>Change from the row above (°C)</th></tr>\n<tr><td>0</td><td>69</td><td>–</td></tr>\n<tr><td>1</td><td>13</td><td>−56</td></tr>\n<tr><td>2</td><td>−5</td><td>−18</td></tr>\n<tr><td>3</td><td>−11</td><td>−6</td></tr></table>\n<p>The pattern is that melting point falls as C=C bonds increase, but the biggest drop comes from adding the <em>first</em> double bond. An answer that quotes numbers from the data, with units, scores better than a general statement.</p>\n<p><strong>The explanation as a chain of steps.</strong></p>\n<ol>\n<li>C=C bond puts a bend in the hydrocarbon chain.</li>\n<li>Bent chains cannot pack closely together.</li>\n<li>There are fewer attractions between neighbouring chains.</li>\n<li>Less energy (a lower temperature) is needed to separate them, so the melting point is lower.</li>\n</ol>\n<p><strong>Applying it.</strong> At 20 °C the saturated fatty acid (melting point 69 °C) is solid, but the others are liquid. Plant oils, rich in unsaturated fatty acids, stay liquid. Animal fats, with more saturated fatty acids, are solid or semi-solid. Both patterns are general tendencies.</p>\n<p><strong>Mark-scheme language.</strong> \"As the number of C=C bonds increases, melting point decreases.\" Always name the bend and the packing.</p>","ja":"<p><strong>融点のデータの読み方。</strong>表の4つの脂肪酸はすべて炭素数が18なので、違いは C=C 結合の数だけです。公平な比較になっています。</p>\n<table><tr><th>C=C 結合の数</th><th>融点 (°C)</th><th>上の行からの変化 (°C)</th></tr>\n<tr><td>0</td><td>69</td><td>－</td></tr>\n<tr><td>1</td><td>13</td><td>−56</td></tr>\n<tr><td>2</td><td>−5</td><td>−18</td></tr>\n<tr><td>3</td><td>−11</td><td>−6</td></tr></table>\n<p>C=C 結合が増えるほど融点は下がりますが、最も大きく下がるのは<em>最初の</em>二重結合を加えたときです。データの数値を単位つきで引用した答えは、一般的な記述より高く評価されます。</p>\n<p><strong>説明を段階の連鎖にする。</strong></p>\n<ol>\n<li>C=C 結合が炭化水素鎖を折れ曲がらせる。</li>\n<li>曲がった鎖は密に並べない。</li>\n<li>隣り合う鎖の間の引力が少なくなる。</li>\n<li>引き離すのに必要なエネルギー（温度）が少なくてすむので、融点が低い。</li>\n</ol>\n<p><strong>当てはめる。</strong>20 °C では、飽和脂肪酸（融点 69 °C）は固体ですが、他は液体です。不飽和脂肪酸が多い植物の油は液体のままです。飽和脂肪酸が多い動物の脂肪は固体か半固体です。どちらも一般的な傾向です。</p>\n<p><strong>採点のことば。</strong>「C=C 結合が増えると融点が下がる」。折れ曲がりと詰まり方を必ず書きます。</p>","zh":"<p><strong>如何閱讀熔點數據。</strong>表中四種脂肪酸都有 18 個碳原子，所以唯一的差別是 C=C 鍵的數目，這是公平的比較。</p>\n<table><tr><th>C=C 鍵數目</th><th>熔點 (°C)</th><th>與上一行相比的變化 (°C)</th></tr>\n<tr><td>0</td><td>69</td><td>－</td></tr>\n<tr><td>1</td><td>13</td><td>−56</td></tr>\n<tr><td>2</td><td>−5</td><td>−18</td></tr>\n<tr><td>3</td><td>−11</td><td>−6</td></tr></table>\n<p>規律是 C=C 鍵增加，熔點下降，但最大的降幅來自加入<em>第一個</em>雙鍵。引用數據中的數值（連同單位）的答案，比籠統的陳述得分更高。</p>\n<p><strong>把解釋寫成一連串步驟。</strong></p>\n<ol>\n<li>C=C 鍵令烴鏈彎曲。</li>\n<li>彎曲的鏈不能緊密排列。</li>\n<li>相鄰鏈之間的吸引力較少。</li>\n<li>分開它們所需的能量較少（溫度較低），所以熔點較低。</li>\n</ol>\n<p><strong>應用。</strong>在 20 °C 時，飽和脂肪酸（熔點 69 °C）是固體，其餘是液體。富含不飽和脂肪酸的植物油保持液態；含較多飽和脂肪酸的動物脂肪則是固體或半固體。兩者都是一般趨勢。</p>\n<p><strong>評分用語。</strong>「C=C 鍵增加，熔點下降」。一定要提及彎曲和排列。</p>"},
        widget: "lipid-builder",
        widgetOptions: {tab: 1},
        heading: L("Saturated, monounsaturated and polyunsaturated fatty acids", "飽和・一価不飽和・多価不飽和脂肪酸", "飽和、單元不飽和及多元不飽和脂肪酸"),
        body: L(
          `<p>Fatty acids differ in the number of carbon–carbon double bonds (C=C) in the hydrocarbon chain.</p>
<table><tr><th>Type</th><th>C=C bonds</th></tr>
<tr><td><span class="term">Saturated</span></td><td>None (every carbon holds as many hydrogens as possible)</td></tr>
<tr><td><span class="term">Monounsaturated</span></td><td>One</td></tr>
<tr><td><span class="term">Polyunsaturated</span></td><td>Two or more</td></tr></table>
<p><strong>Effect on melting point.</strong> A saturated chain is straight, so chains pack closely and many attractions form between them. More energy (a higher temperature) is needed to separate them: <strong>high melting point</strong>. Each C=C bond puts a bend in the chain, so chains pack less closely: <strong>lower melting point</strong>. The more C=C bonds, the lower the melting point.</p>
<p><strong>Where each is found.</strong></p>
<ul><li>Plants store energy mainly as <strong>oils</strong> (rich in unsaturated fatty acids). These are liquid at ordinary temperatures, so the energy store stays fluid and can be mobilized, for example in seeds.</li>
<li>Endotherms (animals that keep a constant warm body temperature) store energy mainly as <strong>fats</strong> with more saturated fatty acids. These are solid or semi-solid at typical environmental temperatures and stay in place in adipose tissue. (These are general tendencies, not strict rules.)</li></ul>`,
          `<p>脂肪酸は、炭化水素鎖にある炭素–炭素二重結合 (C=C) の数で区別される。</p>
<table><tr><th>種類</th><th>C=C 結合</th></tr>
<tr><td><span class="term">飽和 (saturated)</span></td><td>なし (各炭素が結合できる最大数の水素をもつ)</td></tr>
<tr><td><span class="term">一価不飽和 (monounsaturated)</span></td><td>1つ</td></tr>
<tr><td><span class="term">多価不飽和 (polyunsaturated)</span></td><td>2つ以上</td></tr></table>
<p><strong>融点への影響。</strong> 飽和脂肪酸の鎖はまっすぐなので、鎖どうしが密に並び、多くの引力が働く。引き離すのに多くのエネルギー (高い温度) が必要なので<strong>融点が高い</strong>。C=C 結合があるたびに鎖が折れ曲がり、密に並べなくなるので<strong>融点が低くなる</strong>。C=C が多いほど融点は低い。</p>
<p><strong>どこに多いか。</strong></p>
<ul><li>植物はエネルギーを主に<strong>油</strong> (不飽和脂肪酸が多い) として貯蔵する。普通の気温でも液体なので、貯蔵物が流動性を保ち、種子などで動員しやすい。</li>
<li>恒温動物 (endotherm、体温を一定の高さに保つ動物) は主に飽和脂肪酸の多い<strong>脂肪</strong>として貯蔵する。通常の環境温度では固体か半固体で、脂肪組織にとどまる。(これは一般的な傾向であり、厳密な規則ではない。)</li></ul>`,
          `<p>脂肪酸的分別在於烴鏈中碳碳雙鍵 (C=C) 的數目。</p>
<table><tr><th>類型</th><th>C=C 鍵</th></tr>
<tr><td><span class="term">飽和 (saturated)</span></td><td>沒有 (每個碳原子都結合了最多的氫)</td></tr>
<tr><td><span class="term">單元不飽和 (monounsaturated)</span></td><td>一個</td></tr>
<tr><td><span class="term">多元不飽和 (polyunsaturated)</span></td><td>兩個或以上</td></tr></table>
<p><strong>對熔點的影響。</strong>飽和脂肪酸的鏈是直的，鏈與鏈可緊密排列，彼此間有很多吸引力，要分開它們需要較多能量 (較高溫度)，所以<strong>熔點高</strong>。每個 C=C 鍵使鏈出現彎曲，鏈不能緊密排列，所以<strong>熔點較低</strong>。C=C 鍵越多，熔點越低。</p>
<p><strong>各類脂肪酸的分布。</strong></p>
<ul><li>植物主要以<strong>油</strong> (富含不飽和脂肪酸) 儲能。油在一般溫度下是液體，所以儲能物質保持流動，例如在種子中便於動員。</li>
<li>恆溫動物 (endotherm，維持恆定較高體溫的動物) 主要以含較多飽和脂肪酸的<strong>脂肪</strong>儲能。脂肪在一般環境溫度下是固體或半固體，留在脂肪組織中。(這是一般趨勢，並非絕對。)</li></ul>`),
        examTip: L("Link three ideas: C=C bond → bend in chain → less close packing → lower melting point. Quote numbers if the question gives data.",
          "3つの考えを結ぶ: C=C 結合→鎖の折れ曲がり→密に並べない→融点が低い。データがあれば数値を引用する。",
          "連繫三個概念：C=C 鍵→鏈彎曲→排列不緊密→熔點較低。如題目有數據，要引用數值。")
      },
      {
        ref: "B1.1.11", ahl: false,
        deeper: {"en":"<p><strong>A worked comparison (illustrative values).</strong> Fat releases about 38 kJ per gram when oxidized, and carbohydrate about 17 kJ per gram.</p>\n<table><tr><th>Energy to store</th><th>Mass of fat</th><th>Mass of carbohydrate</th></tr>\n<tr><td>3800 kJ</td><td>3800 ÷ 38 = 100 g</td><td>3800 ÷ 17 ≈ 224 g</td></tr></table>\n<p>The same energy needs about twice the mass as carbohydrate. In practice glycogen is stored with water, so the real difference is even larger. For a bird on a long migration or a hibernating mammal, carrying less mass matters.</p>\n<p><strong>Choosing the right store.</strong></p>\n<table><tr><th>Need</th><th>Best store</th><th>Reason</th></tr>\n<tr><td>Quick release for a sprint</td><td>Glycogen</td><td>Mobilized faster</td></tr>\n<tr><td>Weeks without food</td><td>Triglycerides in adipose tissue</td><td>More energy per gram; long-term</td></tr>\n<tr><td>Staying warm in cold water</td><td>Thick fat layer (blubber)</td><td>Fat conducts heat poorly</td></tr></table>\n<p><strong>Insulation, reasoned.</strong> Heat flows from a warm body to cooler surroundings. A bigger temperature difference means faster loss. A layer of fat under the skin slows this flow. So an endotherm in a cold habitat benefits from a thick layer, whereas one in a warm habitat needs less.</p>\n<p><strong>Mark-scheme language.</strong> \"About twice as much energy per gram\", \"insoluble, so no osmotic effect\", \"poor conductor of heat\".</p>","ja":"<p><strong>計算を使った比較（例示の値）。</strong>脂肪は酸化されると1グラムあたり約38 kJ、炭水化物は約17 kJを放出します。</p>\n<table><tr><th>貯蔵したいエネルギー</th><th>脂肪の質量</th><th>炭水化物の質量</th></tr>\n<tr><td>3800 kJ</td><td>3800 ÷ 38 = 100 g</td><td>3800 ÷ 17 ≈ 224 g</td></tr></table>\n<p>同じエネルギーを蓄えるのに、炭水化物では約2倍の質量が必要です。実際にはグリコーゲンは水を伴って貯蔵されるので、差はさらに大きくなります。長い渡りをする鳥や冬眠する哺乳類にとって、運ぶ質量が小さいことは重要です。</p>\n<p><strong>目的に合った貯蔵物質を選ぶ。</strong></p>\n<table><tr><th>必要なこと</th><th>最適な貯蔵物質</th><th>理由</th></tr>\n<tr><td>短距離走のためのすばやい放出</td><td>グリコーゲン</td><td>より速く動員される</td></tr>\n<tr><td>何週間も食べない</td><td>脂肪組織のトリグリセリド</td><td>質量あたりのエネルギーが多く、長期向き</td></tr>\n<tr><td>冷たい水の中で体温を保つ</td><td>厚い脂肪層（ブラバー）</td><td>脂肪は熱を伝えにくい</td></tr></table>\n<p><strong>断熱を筋道立てて。</strong>熱は温かい体から冷たい周囲へ流れます。温度差が大きいほど失う速さは増します。皮下の脂肪の層は、この流れを遅くします。そのため寒い生息地の恒温動物は厚い層が有利で、暖かい生息地の動物は薄くてすみます。</p>\n<p><strong>採点のことば。</strong>「質量あたり約2倍のエネルギー」「不溶なので浸透に影響しない」「熱を伝えにくい」。</p>","zh":"<p><strong>計算比較示例（示範數值）。</strong>脂肪氧化時每克釋出約 38 kJ，碳水化合物每克約 17 kJ。</p>\n<table><tr><th>要儲存的能量</th><th>脂肪的質量</th><th>碳水化合物的質量</th></tr>\n<tr><td>3800 kJ</td><td>3800 ÷ 38 = 100 g</td><td>3800 ÷ 17 ≈ 224 g</td></tr></table>\n<p>儲存同樣能量，碳水化合物需要約兩倍的質量。實際上糖原儲存時帶水，所以真實差距更大。對長途遷徙的鳥或冬眠的哺乳動物，攜帶較輕的重量很重要。</p>\n<p><strong>選擇合適的儲備。</strong></p>\n<table><tr><th>需要</th><th>最佳儲備</th><th>原因</th></tr>\n<tr><td>為短跑快速釋出能量</td><td>糖原</td><td>動員較快</td></tr>\n<tr><td>數星期不進食</td><td>脂肪組織中的甘油三酯</td><td>每克能量較多；長期儲備</td></tr>\n<tr><td>在冷水中保暖</td><td>厚脂肪層（鯨脂）</td><td>脂肪導熱能力差</td></tr></table>\n<p><strong>推論絕熱作用。</strong>熱量由溫暖的身體流向較冷的環境。溫差越大，流失越快。皮下的脂肪層減慢這種熱流。所以生活在寒冷環境的恆溫動物受惠於厚脂肪層，生活在溫暖環境的則只需較薄的。</p>\n<p><strong>評分用語。</strong>「每克能量約為兩倍」、「不溶，所以沒有滲透影響」、「熱的不良導體」。</p>"},
        heading: L("Triglycerides: energy storage and insulation", "トリグリセリド：エネルギー貯蔵と断熱", "甘油三酯：儲能與絕熱"),
        body: L(
          `<p>Animals store triglycerides in <span class="term">adipose tissue</span> (fat tissue), inside cells called adipocytes.</p>
<p><strong>Long-term energy storage.</strong> Why are triglycerides suited to this?</p>
<ul><li>They hold <strong>roughly twice as much energy per gram</strong> as carbohydrate, because they contain more C–H bonds. A fat store is therefore lighter for the same energy, which helps animals that move.</li>
<li>They are hydrophobic and insoluble, so they do not affect the water balance of cells (no osmotic effect) and can be stored in large amounts.</li>
<li>They are used more slowly than glycogen, so they suit a long-term reserve. Glycogen is the short-term store that is mobilized more quickly.</li></ul>
<p><strong>Thermal insulation.</strong> Fat conducts heat poorly. A layer of adipose tissue under the skin reduces heat loss. This matters for endotherms whose body temperature is much higher than the surroundings. So animals in cold habitats (for example seals, whales and polar bears) have thick fat layers, such as blubber, while animals in warm habitats have thin ones.</p>
<table><tr><th></th><th>Triglyceride (fat)</th><th>Glycogen</th></tr>
<tr><td>Energy per gram</td><td>About twice as much</td><td>Less</td></tr>
<tr><td>Use</td><td>Long-term store, insulation</td><td>Short-term store, quick release</td></tr>
<tr><td>Solubility</td><td>Insoluble</td><td>Relatively insoluble</td></tr></table>`,
          `<p>動物はトリグリセリドを<span class="term">脂肪組織 (adipose tissue)</span> の脂肪細胞に貯蔵する。</p>
<p><strong>長期のエネルギー貯蔵。</strong> なぜトリグリセリドが適しているのか。</p>
<ul><li>C–H 結合が多いので、同じ質量あたり炭水化物の<strong>約2倍のエネルギー</strong>を蓄える。同じエネルギーなら軽く済み、動く動物に有利である。</li>
<li>疎水性で不溶なので、細胞の水分バランスに影響せず (浸透への影響がない)、大量に貯蔵できる。</li>
<li>グリコーゲンより利用がゆっくりで、長期の蓄えに向く。グリコーゲンは短期の貯蔵で、より速く動員される。</li></ul>
<p><strong>断熱 (thermal insulation)。</strong> 脂肪は熱を伝えにくい。皮下の脂肪組織は熱の損失を減らす。体温が周囲よりずっと高い恒温動物 (endotherm) には重要である。そのため寒い生息地の動物 (アザラシ、クジラ、ホッキョクグマなど) は厚い脂肪層 (ブラバーなど) をもち、暖かい生息地の動物は薄い。</p>
<table><tr><th></th><th>トリグリセリド (脂肪)</th><th>グリコーゲン</th></tr>
<tr><td>質量あたりのエネルギー</td><td>約2倍</td><td>少ない</td></tr>
<tr><td>用途</td><td>長期の貯蔵、断熱</td><td>短期の貯蔵、すばやい放出</td></tr>
<tr><td>溶解性</td><td>不溶</td><td>比較的不溶</td></tr></table>`,
          `<p>動物把甘油三酯儲存在<span class="term">脂肪組織 (adipose tissue)</span> 的脂肪細胞內。</p>
<p><strong>長期儲能。</strong>為何甘油三酯適合？</p>
<ul><li>含較多 C–H 鍵，每克儲存的能量<strong>約為碳水化合物的兩倍</strong>。儲存同樣能量時重量較輕，對活動的動物有利。</li>
<li>疏水而不溶，不影響細胞的水分平衡 (沒有滲透作用的影響)，可大量儲存。</li>
<li>動用速度比糖原慢，適合作長期儲備；糖原是短期儲備，動員較快。</li></ul>
<p><strong>絕熱 (thermal insulation)。</strong>脂肪導熱能力差，皮下的脂肪組織能減少熱量流失。這對體溫遠高於環境的恆溫動物 (endotherm) 很重要。因此生活在寒冷環境的動物 (例如海豹、鯨、北極熊) 有很厚的脂肪層 (如鯨脂)，而生活在溫暖環境的動物脂肪層則較薄。</p>
<table><tr><th></th><th>甘油三酯 (脂肪)</th><th>糖原</th></tr>
<tr><td>每克能量</td><td>約兩倍</td><td>較少</td></tr>
<tr><td>用途</td><td>長期儲備、絕熱</td><td>短期儲備、快速釋出</td></tr>
<tr><td>溶解性</td><td>不溶</td><td>相對不溶</td></tr></table>`),
        examTip: L("For insulation questions, link the fat layer to BOTH body temperature (endotherm) and habitat temperature (cold or warm).",
          "断熱の問題では、脂肪層を体温 (恒温動物) と生息地の温度 (寒い・暖かい) の両方に結びつける。",
          "回答絕熱題時，要把脂肪層同時連到體溫 (恆溫動物) 和棲息地溫度 (寒冷或溫暖)。")
      },
      {
        ref: "B1.1.12", ahl: false,
        deeper: {"en":"<p><strong>Self-assembly, step by step.</strong></p>\n<ol>\n<li>Phospholipids are in water. The hydrophilic heads form hydrogen bonds with water.</li>\n<li>The hydrophobic tails are excluded from the water. They can only avoid water by being next to each other.</li>\n<li>The molecules arrange as two layers: tails facing inwards, heads facing the water on both sides.</li>\n</ol>\n<p>This needs no energy input and no instructions: the arrangement is the result of the properties of the molecules.</p>\n<p><strong>What a bilayer allows and prevents.</strong></p>\n<table><tr><th>Substance</th><th>Passes through the hydrophobic centre?</th><th>Reason</th></tr>\n<tr><td>Oxygen, carbon dioxide</td><td>Yes</td><td>Small and non-polar</td></tr>\n<tr><td>Steroid hormones</td><td>Yes</td><td>Non-polar</td></tr>\n<tr><td>Glucose, ions such as Na⁺</td><td>No (need membrane proteins)</td><td>Polar or charged; repelled by the hydrophobic centre</td></tr></table>\n<p>The hydrophobic centre therefore makes the bilayer a barrier between two watery solutions (inside and outside a cell).</p>\n<p><strong>Flexible, not rigid.</strong> The phospholipids are not joined to each other by covalent bonds, only held together by weak interactions. They can move sideways and the membrane can change shape and reseal (see B2.1).</p>\n<p><strong>Mark-scheme language.</strong> Use <em>amphipathic</em>, name both regions, and say which part faces the water.</p>","ja":"<p><strong>自己組織化（段階別）。</strong></p>\n<ol>\n<li>リン脂質が水中にある。親水性の頭部は水と水素結合をつくる。</li>\n<li>疎水性の尾部は水から締め出される。水を避けるには、尾部どうしが隣り合うしかない。</li>\n<li>分子は2層に並ぶ。尾部は内側を向き、頭部は両側で水に面する。</li>\n</ol>\n<p>これにはエネルギーの投入も指令も要りません。この配置は、分子の性質の結果です。</p>\n<p><strong>二重層が通すものと通さないもの。</strong></p>\n<table><tr><th>物質</th><th>疎水性の中心部を通れるか</th><th>理由</th></tr>\n<tr><td>酸素、二酸化炭素</td><td>はい</td><td>小さく無極性</td></tr>\n<tr><td>ステロイドホルモン</td><td>はい</td><td>無極性</td></tr>\n<tr><td>グルコース、Na⁺ などのイオン</td><td>いいえ（膜タンパク質が必要）</td><td>極性または電荷をもつため、疎水性の中心部にはじかれる</td></tr></table>\n<p>疎水性の中心部があるので、二重層は2つの水溶液（細胞の内と外）の間の障壁になります。</p>\n<p><strong>硬くなく柔軟。</strong>リン脂質どうしは共有結合でつながっておらず、弱い相互作用で保たれています。横方向に動くことができ、膜は形を変えたり、再びふさがったりします (B2.1 参照)。</p>\n<p><strong>採点のことば。</strong>「両親媒性」を使い、両方の部分を挙げ、どの部分が水に面するかを書きます。</p>","zh":"<p><strong>自我組裝，逐步說明。</strong></p>\n<ol>\n<li>磷脂在水中。親水的頭部與水形成氫鍵。</li>\n<li>疏水的尾部被排除在水之外。牠們只能彼此相鄰才可避開水。</li>\n<li>分子排成兩層：尾部向內，頭部在兩側面向水。</li>\n</ol>\n<p>這個過程不需要輸入能量，也不需要指令：這種排列是分子本身性質的結果。</p>\n<p><strong>雙層容許與阻擋甚麼。</strong></p>\n<table><tr><th>物質</th><th>能穿過疏水中心？</th><th>原因</th></tr>\n<tr><td>氧、二氧化碳</td><td>能</td><td>細小而非極性</td></tr>\n<tr><td>類固醇激素</td><td>能</td><td>非極性</td></tr>\n<tr><td>葡萄糖、Na⁺ 等離子</td><td>不能（需要膜蛋白）</td><td>有極性或帶電荷；被疏水中心排斥</td></tr></table>\n<p>疏水的中心使雙層成為兩種水溶液（細胞內和細胞外）之間的屏障。</p>\n<p><strong>柔韌而非僵硬。</strong>磷脂之間沒有共價鍵，只靠微弱的作用力聚在一起。牠們可以橫向移動，膜亦能改變形狀和重新閉合 (見 B2.1)。</p>\n<p><strong>評分用語。</strong>使用「兩親性」，指出兩個部分，並說明哪個部分面向水。</p>"},
        widget: "lipid-builder",
        widgetOptions: {tab: 2},
        heading: L("Phospholipid bilayers", "リン脂質二重層", "磷脂雙層"),
        body: L(
          `<p>A phospholipid is <span class="term">amphipathic</span>: one part of the molecule is hydrophilic (the phosphate-containing head) and another part is hydrophobic (the two fatty acid tails).</p>
<p>In water, the hydrophilic heads are attracted to water. The hydrophobic tails are pushed away from it. Phospholipids therefore arrange themselves, with no energy needed, into a <span class="term">bilayer</span>: two layers with the tails pointing inwards, together in the middle, and the heads facing the water on both sides.</p>
<figure>${bilSVG("en")}<figcaption>${'Heads (circles) face the water; tails point inwards. Each head is attached to two tails.'}</figcaption></figure>
<p>The bilayer is the basis of cell membranes (B2.1). Because it has a hydrophobic centre, it forms a barrier between two watery solutions.</p>`,
          `<p>リン脂質は<span class="term">両親媒性 (amphipathic)</span> である。分子の一部は親水性 (リン酸を含む頭部)、別の部分は疎水性 (2本の脂肪酸の尾部) である。</p>
<p>水中では、親水性の頭部は水に引きつけられ、疎水性の尾部は水から遠ざけられる。そのためリン脂質は、エネルギーを使わずに自然に<span class="term">二重層 (bilayer)</span> をつくる。尾部を内側に向けて中央に集め、頭部は両側で水に面する2層である。</p>
<figure>${bilSVG("ja")}<figcaption>頭部 (円) は水に面し、尾部は内側を向く。各頭部には2本の尾部がつく。</figcaption></figure>
<p>二重層は細胞膜 (B2.1) の基本構造である。中心が疎水性なので、2つの水溶液の間の障壁になる。</p>`,
          `<p>磷脂是<span class="term">兩親性 (amphipathic)</span> 的：分子的一部分是親水的 (含磷酸的頭部)，另一部分是疏水的 (兩條脂肪酸尾部)。</p>
<p>在水中，親水的頭部被水吸引，疏水的尾部則被推離水。因此磷脂無需耗用能量，就會自然排成<span class="term">雙層 (bilayer)</span>：兩層磷脂的尾部向內並聚在中間，頭部在兩側面向水。</p>
<figure>${bilSVG("zh")}<figcaption>頭部 (圓點) 面向水，尾部向內。每個頭部連接兩條尾部。</figcaption></figure>
<p>雙層是細胞膜 (B2.1) 的基礎。由於中心疏水，它能在兩種水溶液之間形成屏障。</p>`),
        examTip: L("Use the word “amphipathic” and name both regions. “Hydrophilic heads face the water; hydrophobic tails face each other” earns the marks.",
          "「両親媒性」という語を使い、両方の部分を挙げる。「親水性の頭部が水に面し、疎水性の尾部が向き合う」と書く。",
          "要使用「兩親性」一詞並指出兩個部分。寫出「親水頭部面向水，疏水尾部彼此相對」即可得分。")
      },
      {
        ref: "B1.1.13", ahl: false,
        deeper: {"en":"<p><strong>Spotting a steroid in a diagram.</strong></p>\n<table><tr><th>Structure shown</th><th>Steroid?</th></tr>\n<tr><td>Four rings joined together (three six-sided, one five-sided)</td><td>Yes</td></tr>\n<tr><td>One six-sided ring with side groups</td><td>No</td></tr>\n<tr><td>A long chain with a –COOH at one end</td><td>No (a fatty acid)</td></tr></table>\n<p>Steroids are lipids, so they are defined by solubility, and they contain <em>no</em> fatty acids and no glycerol.</p>\n<p><strong>Explaining how a steroid hormone enters a cell, as a chain of reasoning.</strong></p>\n<ol>\n<li>The molecule is mainly hydrocarbon, so it is non-polar.</li>\n<li>Non-polar molecules dissolve in the hydrophobic centre of the phospholipid bilayer.</li>\n<li>It therefore passes between the phospholipid tails without a membrane protein.</li>\n<li>Inside the cell it binds to a receptor. Oestradiol and testosterone work this way.</li>\n</ol>\n<p><strong>Contrast.</strong> A polar or charged molecule (glucose, an ion) is repelled by the hydrophobic centre, so it needs a membrane protein to cross (B2.1).</p>\n<p><strong>Mark-scheme language.</strong> \"Non-polar / hydrophobic\", \"passes through (between) the phospholipid bilayer\", \"does not need a channel or carrier protein\". Name an example hormone.</p>","ja":"<p><strong>図でステロイドを見つける。</strong></p>\n<table><tr><th>示された構造</th><th>ステロイドか</th></tr>\n<tr><td>4つの環がつながっている（六員環3つ、五員環1つ）</td><td>はい</td></tr>\n<tr><td>側鎖のある六員環1つ</td><td>いいえ</td></tr>\n<tr><td>一端に –COOH のある長い鎖</td><td>いいえ（脂肪酸）</td></tr></table>\n<p>ステロイドは脂質なので、溶解性で定義されます。脂肪酸もグリセロールも含みません。</p>\n<p><strong>ステロイドホルモンが細胞に入るしくみを、推論の連鎖として説明する。</strong></p>\n<ol>\n<li>分子は主に炭化水素でできているので無極性である。</li>\n<li>無極性の分子は、リン脂質二重層の疎水性の中心部に溶ける。</li>\n<li>したがって、膜タンパク質なしでリン脂質の尾部の間を通り抜ける。</li>\n<li>細胞内で受容体に結合する。エストラジオール (oestradiol) とテストステロン (testosterone) はこのように働く。</li>\n</ol>\n<p><strong>対比。</strong>極性や電荷をもつ分子（グルコース、イオン）は疎水性の中心部にはじかれるので、通過には膜タンパク質が必要です (B2.1)。</p>\n<p><strong>採点のことば。</strong>「無極性／疎水性」「リン脂質二重層を（の間を）通り抜ける」「チャネルや輸送タンパク質は不要」。例となるホルモンの名前を挙げます。</p>","zh":"<p><strong>在圖中辨認類固醇。</strong></p>\n<table><tr><th>圖中的結構</th><th>是類固醇？</th></tr>\n<tr><td>四個連在一起的環（三個六邊形，一個五邊形）</td><td>是</td></tr>\n<tr><td>一個帶側基的六邊形環</td><td>否</td></tr>\n<tr><td>一端帶 –COOH 的長鏈</td><td>否（是脂肪酸）</td></tr></table>\n<p>類固醇是脂質，所以是以溶解性定義的，而且<em>不</em>含脂肪酸和甘油。</p>\n<p><strong>把類固醇激素進入細胞的過程寫成推理步驟。</strong></p>\n<ol>\n<li>分子主要由烴組成，所以是非極性的。</li>\n<li>非極性分子可溶於磷脂雙層的疏水中心。</li>\n<li>因此它無需膜蛋白，就能穿過磷脂尾部之間。</li>\n<li>進入細胞後，它與受體結合。雌二醇 (oestradiol) 和睪酮 (testosterone) 就是這樣作用的。</li>\n</ol>\n<p><strong>對比。</strong>極性或帶電荷的分子（葡萄糖、離子）被疏水中心排斥，所以需要膜蛋白才能通過 (B2.1)。</p>\n<p><strong>評分用語。</strong>「非極性／疏水」、「穿過（磷脂雙層之間）」、「不需要通道或載體蛋白」。並要舉出一種激素作例子。</p>"},
        heading: L("Steroids and the bilayer", "ステロイドと二重層", "類固醇與雙層"),
        body: L(
          `<p><span class="term">Steroids</span> are lipids whose molecules have a skeleton of <strong>four fused rings</strong>: three six-sided rings and one five-sided ring. To identify a steroid in a diagram, look for this four-ring pattern.</p>
${STEROID_SVG}
<p>Steroids are mainly hydrocarbon, so they are <strong>non-polar</strong>. Non-polar molecules can pass between the hydrophobic hydrocarbon tails of the phospholipid bilayer. They do not need a protein.</p>
<p><strong>Examples:</strong> <span class="term">oestradiol</span> (a female sex hormone) and <span class="term">testosterone</span> (a male sex hormone). These hormones pass straight through the plasma membrane of their target cells and bind to receptors inside the cell. (Cholesterol is also a steroid; its role in membranes is in B2.1.)</p>`,
          `<p><span class="term">ステロイド (steroid)</span> は、<strong>4つの環が融合した</strong>骨格 (六員環3つと五員環1つ) をもつ脂質である。図でステロイドを見分けるには、この4環の形を探す。</p>
${STEROID_SVG.replace('The steroid skeleton: three six-sided rings (A, B, C) and one five-sided ring (D) joined together.', 'ステロイドの骨格: 六角形の環3つ (A, B, C) と五角形の環1つ (D) がつながっている。')}
<p>ステロイドは主に炭化水素でできているので<strong>無極性</strong>である。無極性の分子は、リン脂質二重層の疎水性の炭化水素の尾部の間を通り抜けられる。タンパク質は不要である。</p>
<p><strong>例:</strong> <span class="term">エストラジオール (oestradiol)</span> (女性ホルモン) と<span class="term">テストステロン (testosterone)</span> (男性ホルモン)。これらのホルモンは標的細胞の細胞膜をそのまま通り抜け、細胞内の受容体に結合する。(コレステロールもステロイドで、膜での役割は B2.1 で扱う。)</p>`,
          `<p><span class="term">類固醇 (steroid)</span> 是分子骨架由<strong>四個融合的環</strong>組成的脂質：三個六邊形環和一個五邊形環。要在圖中辨認類固醇，可找這個四環結構。</p>
${STEROID_SVG.replace('The steroid skeleton: three six-sided rings (A, B, C) and one five-sided ring (D) joined together.', '類固醇的骨架：三個六邊形環 (A、B、C) 和一個五邊形環 (D) 連在一起。')}
<p>類固醇主要由烴組成，所以是<strong>非極性</strong>的。非極性分子可穿過磷脂雙層中疏水的烴尾之間，無需蛋白質協助。</p>
<p><strong>例子：</strong><span class="term">雌二醇 (oestradiol)</span> (女性性激素) 和<span class="term">睪酮 (testosterone)</span> (男性性激素)。這些激素直接穿過靶細胞的質膜，與細胞內的受體結合。(膽固醇亦是類固醇，它在膜中的作用見 B2.1。)</p>`),
        examTip: L("Explain the passage, not only the fact: non-polar → dissolves in the hydrophobic core → passes through without a protein.",
          "事実だけでなく理由も書く: 無極性→疎水性の中心部に溶ける→タンパク質なしで通過する。",
          "要解釋通過原因，不只寫事實：非極性→可溶於疏水核心→無需蛋白質即可通過。")
      }
    ],
    keyTerms: [
      { term: L("covalent bond", "共有結合", "共價鍵"), def: L("A bond formed when two atoms share a pair of electrons.", "2つの原子が電子対を共有してできる結合。", "兩個原子共用一對電子而形成的鍵。"), ahl: false },
      { term: L("condensation reaction", "縮合反応", "縮合反應"), def: L("A reaction that joins two molecules and releases a water molecule.", "2つの分子を結び、水1分子を放出する反応。", "把兩個分子連起來並釋出一個水分子的反應。"), ahl: false },
      { term: L("hydrolysis", "加水分解", "水解"), def: L("A reaction that breaks a bond by adding the –H and –OH from a water molecule.", "水分子の –H と –OH を加えて結合を切る反応。", "加入水分子的 –H 和 –OH 以切斷鍵的反應。"), ahl: false },
      { term: L("monomer / polymer", "単量体／重合体", "單體／聚合物"), def: L("A monomer is a small unit; a polymer is a large molecule made of many monomers joined together.", "単量体は小さな単位、重合体は多数の単量体がつながった大きな分子。", "單體是小單位；聚合物是由多個單體連成的大分子。"), ahl: false },
      { term: L("monosaccharide", "単糖類", "單糖"), def: L("A single sugar unit, such as glucose (a hexose) or ribose (a pentose).", "グルコース (六炭糖) やリボース (五炭糖) のような糖の最小単位。", "單一的糖單位，例如葡萄糖 (己糖) 或核糖 (戊糖)。"), ahl: false },
      { term: L("polysaccharide", "多糖類", "多糖"), def: L("A polymer of many monosaccharides, e.g. starch, glycogen, cellulose.", "多数の単糖がつながった重合体 (デンプン、グリコーゲン、セルロースなど)。", "由很多單糖組成的聚合物，例如澱粉、糖原、纖維素。"), ahl: false },
      { term: L("starch", "デンプン", "澱粉"), def: L("Plant energy-storage polysaccharide made of α-glucose; coiled and partly branched.", "α-グルコースからなる植物のエネルギー貯蔵多糖。らせん状で一部に枝分かれがある。", "由 α-葡萄糖組成的植物儲能多糖；呈螺旋狀，部分有分支。"), ahl: false },
      { term: L("glycogen", "グリコーゲン", "糖原"), def: L("Animal energy-storage polysaccharide made of α-glucose; coiled and highly branched.", "α-グルコースからなる動物のエネルギー貯蔵多糖。らせん状で枝分かれが多い。", "由 α-葡萄糖組成的動物儲能多糖；呈螺旋狀，分支多。"), ahl: false },
      { term: L("cellulose", "セルロース", "纖維素"), def: L("Structural polysaccharide of β-glucose; straight chains cross-linked by hydrogen bonds into strong fibres.", "β-グルコースからなる構造多糖。まっすぐな鎖が水素結合で架橋され、強い繊維になる。", "由 β-葡萄糖組成的結構多糖；筆直的鏈以氫鍵橫向連接成堅固的纖維。"), ahl: false },
      { term: L("glycoprotein", "糖タンパク質", "糖蛋白"), def: L("A protein with carbohydrate chains attached; used in cell–cell recognition (e.g. ABO antigens).", "糖鎖が結合したタンパク質。細胞間認識に使われる (例 ABO抗原)。", "帶有糖鏈的蛋白質，用於細胞間識別 (例如 ABO 抗原)。"), ahl: false },
      { term: L("lipid", "脂質", "脂質"), def: L("A substance in living organisms that dissolves in non-polar solvents but is only sparingly soluble in water.", "生物がもつ物質で、無極性溶媒に溶け、水にはわずかしか溶けないもの。", "生物體內可溶於非極性溶劑、只微溶於水的物質。"), ahl: false },
      { term: L("triglyceride", "トリグリセリド", "甘油三酯"), def: L("A lipid made of one glycerol and three fatty acids.", "グリセロール1分子と脂肪酸3分子からなる脂質。", "由一個甘油和三個脂肪酸組成的脂質。"), ahl: false },
      { term: L("phospholipid", "リン脂質", "磷脂"), def: L("A lipid made of one glycerol, two fatty acids and a phosphate group; amphipathic.", "グリセロール1分子、脂肪酸2分子、リン酸基からなる両親媒性の脂質。", "由一個甘油、兩個脂肪酸和一個磷酸基組成的兩親性脂質。"), ahl: false },
      { term: L("saturated / unsaturated fatty acid", "飽和／不飽和脂肪酸", "飽和／不飽和脂肪酸"), def: L("Saturated: no C=C bonds. Monounsaturated: one C=C. Polyunsaturated: two or more C=C.", "飽和: C=C なし。一価不飽和: C=C 1つ。多価不飽和: C=C 2つ以上。", "飽和：沒有 C=C。單元不飽和：一個 C=C。多元不飽和：兩個或以上 C=C。"), ahl: false },
      { term: L("adipose tissue", "脂肪組織", "脂肪組織"), def: L("Tissue that stores triglycerides for long-term energy storage and insulation.", "長期のエネルギー貯蔵と断熱のためにトリグリセリドを貯える組織。", "儲存甘油三酯以作長期儲能和絕熱的組織。"), ahl: false },
      { term: L("amphipathic", "両親媒性", "兩親性"), def: L("Having both a hydrophilic region and a hydrophobic region.", "親水性の部分と疎水性の部分の両方をもつこと。", "同時有親水部分和疏水部分。"), ahl: false },
      { term: L("steroid", "ステロイド", "類固醇"), def: L("A non-polar lipid with four fused rings, e.g. oestradiol, testosterone.", "4つの環が融合した無極性の脂質 (例 エストラジオール、テストステロン)。", "有四個融合環的非極性脂質，例如雌二醇、睪酮。"), ahl: false }
    ],
    misconceptions: [
      { wrong: L("Lipids are made of glycerol and fatty acids.", "脂質はグリセロールと脂肪酸からできている。", "脂質由甘油和脂肪酸組成。"),
        right: L("That is true for triglycerides and phospholipids only. Lipids are defined by solubility. Steroids are lipids with four rings and no fatty acids.", "それはトリグリセリドとリン脂質だけに当てはまる。脂質は溶解性で定義される。ステロイドは脂肪酸をもたない4環の脂質である。", "這只適用於甘油三酯和磷脂。脂質是按溶解性定義的；類固醇是有四個環、不含脂肪酸的脂質。") },
      { wrong: L("Hydrolysis is just another word for digestion.", "加水分解は消化の別名である。", "水解只是消化的另一個說法。"),
        right: L("Hydrolysis is a type of chemical reaction (adding water to break a bond). Digestion uses hydrolysis, but hydrolysis also happens inside cells.", "加水分解は化学反応の一種 (水を加えて結合を切る)。消化は加水分解を使うが、加水分解は細胞内でも起こる。", "水解是一種化學反應 (加水以切斷鍵)。消化利用水解，但細胞內也會發生水解。") },
      { wrong: L("Starch and cellulose are different because they contain different sugars.", "デンプンとセルロースは、含む糖が違うから別物である。", "澱粉和纖維素不同，是因為它們含不同的糖。"),
        right: L("Both are made of glucose. The difference is α- versus β-glucose, which changes how the chain is shaped (coiled versus straight).", "どちらもグルコースからできている。違いは α と β で、鎖の形 (らせんか直線か) が変わる。", "兩者都由葡萄糖組成。分別在於是 α 還是 β 葡萄糖，這決定鏈的形狀 (螺旋還是筆直)。") },
      { wrong: L("Fat is a better energy store than glycogen in every way.", "脂肪はあらゆる点でグリコーゲンより優れたエネルギー貯蔵物質である。", "脂肪在各方面都比糖原更適合儲能。"),
        right: L("Fat stores more energy per gram and suits long-term storage, but glycogen is mobilized faster and is the short-term store.", "脂肪は質量あたりのエネルギーが多く長期貯蔵に向くが、グリコーゲンはより速く動員でき、短期の貯蔵である。", "脂肪每克儲能較多、適合長期儲備；但糖原動員較快，是短期儲備。") }
    ],
    beyondSyllabus: [
      L("You do not need to name amylose and amylopectin, or to describe 1,4 and 1,6 glycosidic bonds. The guide only asks for coiling and branching.",
        "アミロースとアミロペクチンの名前や、1,4 結合・1,6 結合の記述は必要ない。ガイドが求めるのはらせん構造と枝分かれだけである。",
        "你不需要說出直鏈澱粉 (amylose) 和支鏈澱粉 (amylopectin) 的名稱，也不需要描述 1,4 和 1,6 糖苷鍵。課程指引只要求螺旋 (coiling) 和分支 (branching)。"),
      L("You do not need to learn trans fats, cis/trans isomers or the names omega-3 and omega-6. The guide only asks for the number of C=C bonds and its effect on melting point.",
        "トランス脂肪酸、シス・トランス異性体、オメガ3・オメガ6の名称は覚えなくてよい。求められるのは C=C 結合の数と融点への影響だけである。",
        "你不需要認識反式脂肪、順反異構體或 omega-3、omega-6 等名稱。課程指引只要求 C=C 鍵的數目及其對熔點的影響。"),
      L("You do not need to name individual disaccharides (such as maltose, sucrose, lactose) or draw the full structural formulae of glucose isomers from memory.",
        "二糖類 (マルトース、スクロース、ラクトースなど) の名前を個別に覚えたり、グルコースの構造式を暗記して描いたりする必要はない。",
        "你不需要逐一記住雙糖 (如麥芽糖、蔗糖、乳糖) 的名稱，亦不需要憑記憶畫出葡萄糖異構體的完整結構式。"),
      L("You do not need to know the structure of cholesterol or the sex hormones in detail. You only need to recognise a steroid by its four rings.",
        "コレステロールや性ホルモンの詳しい構造は必要ない。4つの環でステロイドを見分けられればよい。",
        "你不需要詳細認識膽固醇或性激素的結構，只需能憑四個環辨認出類固醇。"),
      L("Not needed for this subtopic: how lipids and carbohydrates compare as respiratory substrates (fatty acids broken into 2-carbon acetyl groups that enter respiration as acetyl-CoA) is taught in C1.2 (Cell respiration, AHL). The enzymes of beta-oxidation and of glycogen breakdown are not required anywhere.",
        "この小テーマでは不要: 呼吸基質としての脂質と炭水化物の比較 (脂肪酸が炭素2個のアセチル基に分解され、アセチルCoAとして呼吸に入る) は C1.2 (細胞呼吸, AHL) で学ぶ。β酸化やグリコーゲン分解の酵素名はどこでも求められない。",
        "此子課題不需要：脂質與碳水化合物作為呼吸底物的比較 (脂肪酸分解成二碳的乙酰基，以乙酰輔酶A進入呼吸作用) 會在 C1.2 (細胞呼吸，AHL) 學習。β-氧化及糖原分解的酶在整個課程中都不需要。")
    ],
    links: [
      { to: "B1.2", why: L("Condensation and hydrolysis also build and break polypeptides; glycoproteins link carbohydrates to proteins.", "縮合と加水分解はポリペプチドの合成・分解にも関わる。糖タンパク質は糖とタンパク質を結ぶ。", "縮合與水解同樣用於合成和分解多肽；糖蛋白連接碳水化合物與蛋白質。") },
      { to: "B2.1", why: L("Phospholipid bilayers, steroid movement, cholesterol and glycoproteins all reappear in membrane structure and transport.", "リン脂質二重層、ステロイドの移動、コレステロール、糖タンパク質は膜の構造と輸送で再び登場する。", "磷脂雙層、類固醇的移動、膽固醇和糖蛋白都會在膜的結構與運輸中再次出現。") },
      { to: "A1.1", why: L("Hydrophilic and hydrophobic behaviour depends on the polarity of molecules and hydrogen bonding with water.", "親水性・疎水性は分子の極性と水との水素結合によって決まる。", "親水與疏水性質取決於分子的極性及與水形成氫鍵的能力。") },
      { to: "B2.2", why: L("Cellulose cell walls and storage polysaccharides link to cell structure (chloroplasts store starch).", "セルロースの細胞壁や貯蔵多糖は細胞構造 (葉緑体にデンプンが貯まる) とつながる。", "纖維素細胞壁和儲能多糖與細胞結構有關 (葉綠體儲存澱粉)。") }
    ],
    natureOfScience: [
      L("Scientific conventions are based on international agreement: SI prefixes (kilo, centi, milli, micro, nano) mean the same thing to scientists everywhere.",
        "科学の約束事は国際的な合意に基づく。SI接頭語 (キロ・センチ・ミリ・マイクロ・ナノ) は世界中の科学者にとって同じ意味をもつ。",
        "科學慣例建基於國際共識：SI 詞頭 (千、厘、毫、微、納) 對世界各地的科學家意義一致。")
    ],
    questions: [
      {
        id: "b1-1-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B1.1.1", paper: "1A",
        stem: L("What is the maximum number of covalent bonds that one carbon atom can form?", "1個の炭素原子が形成できる共有結合の最大数はいくつか。", "一個碳原子最多可形成多少個共價鍵？"),
        options: [L("Two", "2", "兩個"), L("Three", "3", "三個"), L("Four", "4", "四個"), L("Six", "6", "六個")],
        answer: 2,
        explanation: L("Carbon has four electrons available for sharing, so it forms up to four bonds. Three is a tempting answer from nitrogen (which forms three) and six has no basis for carbon.", "炭素は共有に使える電子が4個なので、結合は最大4本。3は窒素 (3本) との混同、6は炭素には当てはまらない。", "碳有四個可共用的電子，所以最多形成四個鍵。三個是與氮 (形成三個鍵) 混淆；六個對碳沒有根據。")
      },
      {
        id: "b1-1-q02", type: "mcq", ahl: false, difficulty: 1, ref: "B1.1.2", paper: "1A",
        stem: L("Which statement about condensation reactions is correct?", "縮合反応について正しいのはどれか。", "以下哪項關於縮合反應的敍述正確？"),
        options: [
          L("They release water as two monomers are joined.", "2つの単量体が結ばれるときに水が放出される。", "兩個單體連接時釋出水。"),
          L("They use water to split a polymer into monomers.", "水を使って重合体を単量体に分ける。", "利用水把聚合物分解成單體。"),
          L("They release energy as ATP and no other product.", "ATPとしてエネルギーを放出し、他の生成物はない。", "只釋出 ATP 形式的能量，沒有其他產物。"),
          L("They only occur in the digestive system.", "消化系でのみ起こる。", "只在消化系統中發生。")],
        answer: 0,
        explanation: L("Condensation joins monomers and releases a water molecule. Option B describes hydrolysis (the tempting mix-up). Condensation does not make ATP, and it happens in every cell when polymers are built.", "縮合は単量体を結び水を放出する。Bは加水分解の説明 (よくある混同)。縮合はATPをつくらず、重合体を合成する際に全ての細胞で起こる。", "縮合反應連接單體並釋出水。B 描述的是水解 (常見混淆)。縮合不產生 ATP，而且在所有細胞合成聚合物時都會發生。")
      },
      {
        id: "b1-1-q03", type: "mcq", ahl: false, difficulty: 2, ref: "B1.1.3", paper: "1A",
        stem: L("Starch in food is digested to glucose. What happens to water in this process?", "食物中のデンプンがグルコースに消化される。この過程で水はどうなるか。", "食物中的澱粉被消化成葡萄糖。此過程中水有何變化？"),
        options: [
          L("Water molecules are released.", "水分子が放出される。", "釋出水分子。"),
          L("Water molecules are split and the –H and –OH are added to the products.", "水分子が分かれ、–H と –OH が生成物に付加される。", "水分子被分開，–H 和 –OH 加到產物上。"),
          L("Water acts only as a solvent and is not changed.", "水は溶媒として働くだけで変化しない。", "水只作為溶劑，不會改變。"),
          L("Water is oxidized to oxygen.", "水が酸化されて酸素になる。", "水被氧化成氧。")],
        answer: 1,
        explanation: L("Digestion of polymers is hydrolysis: water is split and its –H and –OH are incorporated into the monomers. Option A is condensation. Water is not just a solvent here, it is a reactant.", "重合体の消化は加水分解で、水が分かれ –H と –OH が単量体に取り込まれる。Aは縮合。ここで水は単なる溶媒ではなく反応物である。", "聚合物的消化是水解：水被分開，其 –H 和 –OH 併入單體。A 是縮合反應。這裏水不只是溶劑，而是反應物。")
      },
      {
        id: "b1-1-q04", type: "mcq", ahl: false, difficulty: 2, ref: "B1.1.4", paper: "1A",
        stem: L("A sugar molecule has a ring made of four carbon atoms and one oxygen atom. A CH₂OH group is attached to a ring carbon. How should this monosaccharide be classified?", "ある糖分子は、炭素4個と酸素1個からなる環をもち、環の炭素に CH₂OH 基が付いている。この単糖類はどれに分類されるか。", "某糖分子的環由四個碳原子和一個氧原子組成，環上一個碳連有 CH₂OH 基。此單糖應如何分類？"),
        options: [L("Triose", "三炭糖", "丙糖"), L("Tetrose", "四炭糖", "丁糖"), L("Pentose", "五炭糖", "戊糖"), L("Hexose", "六炭糖", "己糖")],
        answer: 2,
        explanation: L("Count carbons: 4 in the ring + 1 in CH₂OH = 5, so it is a pentose (like ribose). Counting only the ring gives 4 (tetrose), which is the tempting mistake.", "炭素を数える: 環に4 + CH₂OH に1 = 5で五炭糖 (リボースなど)。環だけ数えて4 (四炭糖) とするのが紛らわしい誤り。", "數碳原子：環上4個 + CH₂OH 的1個 = 5，所以是戊糖 (如核糖)。只數環上的碳得4個 (丁糖) 是常見錯誤。")
      },
      {
        id: "b1-1-q05", type: "multi", ahl: false, difficulty: 2, ref: "B1.1.4", paper: "1A",
        stem: L("Which properties of glucose make it suitable as a transported energy source? Select all that apply.", "グルコースが運搬されるエネルギー源として適している性質はどれか。当てはまるものをすべて選べ。", "葡萄糖的哪些性質令它適合作為被運送的能量來源？選出所有適用項目。"),
        options: [
          L("It dissolves in water because of its polar –OH groups.", "極性の –OH 基があるため水に溶ける。", "因帶有極性 –OH 基而溶於水。"),
          L("It is chemically stable, so it is not changed during transport.", "化学的に安定で、運搬中に変化しない。", "化學性質穩定，運送時不會改變。"),
          L("It is a large insoluble molecule that stays where it is made.", "大きな不溶性の分子で、つくられた場所にとどまる。", "是大而不溶的分子，留在製造的地方。"),
          L("Oxidation of glucose in respiration yields energy.", "呼吸でグルコースが酸化されるとエネルギーが得られる。", "葡萄糖在呼吸中氧化會釋出能量。")],
        answer: [0, 1, 3],
        explanation: L("A, B and D are the properties the guide lists (solubility, transportability and stability, energy from oxidation). C describes a polysaccharide such as starch, not glucose.", "A、B、Dがガイドの挙げる性質 (溶解性、運搬性・安定性、酸化によるエネルギー)。Cはデンプンのような多糖の説明で、グルコースではない。", "A、B、D 是課程指引所列的性質 (可溶、易運輸及穩定、氧化釋能)。C 描述的是澱粉等多糖，不是葡萄糖。")
      },
      {
        id: "b1-1-q06", type: "match", ahl: false, difficulty: 1, ref: "B1.1.2", paper: "1A",
        stem: L("Match each polymer with its monomer.", "重合体とその単量体を対応させよ。", "把每種聚合物與其單體配對。"),
        pairs: [
          { left: L("Starch", "デンプン", "澱粉"), right: L("α-glucose", "α-グルコース", "α-葡萄糖") },
          { left: L("Cellulose", "セルロース", "纖維素"), right: L("β-glucose", "β-グルコース", "β-葡萄糖") },
          { left: L("Polypeptide", "ポリペプチド", "多肽"), right: L("Amino acid", "アミノ酸", "氨基酸") },
          { left: L("DNA", "DNA", "DNA"), right: L("Nucleotide", "ヌクレオチド", "核苷酸") }
        ],
        explanation: L("Starch and cellulose are both glucose polymers but use different forms (α and β). Polypeptides are built from amino acids and nucleic acids from nucleotides.", "デンプンとセルロースはどちらもグルコースの重合体だが、α型とβ型で異なる。ポリペプチドはアミノ酸、核酸はヌクレオチドからできる。", "澱粉和纖維素都是葡萄糖聚合物，但分別用 α 和 β 型。多肽由氨基酸組成，核酸由核苷酸組成。")
      },
      {
        id: "b1-1-q07", type: "short", ahl: false, difficulty: 2, ref: "B1.1.5", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Explain why glycogen is a suitable molecule for storing glucose in liver cells.", "肝細胞でグルコースを貯蔵する分子としてグリコーゲンが適している理由を説明せよ。", "解釋為何糖原適合在肝細胞中儲存葡萄糖。"),
        markscheme: [
          L("Glycogen is (relatively) insoluble because it is a large molecule, so it does not dissolve in the cytoplasm / leave the cell / affect osmosis.", "グリコーゲンは大きな分子なので (比較的) 不溶で、細胞質に溶けず・細胞外に出ず・浸透に影響しない。", "糖原是大分子，(相對) 不溶，所以不會溶於細胞質／離開細胞／影響滲透。"),
          L("It is compact because it is coiled and branched, so a lot of glucose can be stored in a small space.", "らせん状で枝分かれしているためコンパクトで、小さな空間に多くのグルコースを貯蔵できる。", "糖原螺旋而有分支，結構緊密，可在小空間儲存大量葡萄糖。"),
          L("Branching gives many ends, so glucose can be added (condensation) or removed (hydrolysis) quickly / released rapidly when needed.", "枝分かれで末端が多く、グルコースを素早く付加 (縮合) したり外したり (加水分解)・必要なときに速く放出できる。", "分支令末端增多，所以可迅速加入 (縮合) 或移除 (水解) 葡萄糖／需要時快速釋出。")
        ],
        modelAnswer: L("Glycogen is a large, relatively insoluble polymer of α-glucose, so it does not dissolve or affect osmosis. It is coiled and branched, so it is compact. Its many branch ends let glucose be added or removed by condensation and hydrolysis rapidly.", "グリコーゲンはα-グルコースの大きく比較的不溶な重合体で、溶けず浸透に影響しない。らせん状で枝分かれするのでコンパクト。多数の枝の末端で、縮合・加水分解によりグルコースを速く付加・除去できる。", "糖原是 α-葡萄糖組成的大型、相對不溶的聚合物，不會溶解或影響滲透；它螺旋而有分支，所以結構緊密；眾多分支末端令葡萄糖能經縮合和水解快速加入或移除。")
      },
      {
        id: "b1-1-q08", type: "mcq", ahl: false, difficulty: 2, ref: "B1.1.6", paper: "1A",
        stem: L("Which feature allows cellulose chains to form strong bundles?", "セルロースの鎖が丈夫な束をつくれるのはどの特徴によるか。", "纖維素鏈能形成堅固的束，是因為哪項特徵？"),
        options: [
          L("Covalent bonds between the chains", "鎖の間の共有結合", "鏈與鏈之間的共價鍵"),
          L("Hydrogen bonds between neighbouring straight chains", "隣り合うまっすぐな鎖の間の水素結合", "相鄰筆直鏈之間的氫鍵"),
          L("Ionic bonds between the chains", "鎖の間のイオン結合", "鏈與鏈之間的離子鍵"),
          L("Peptide bonds between glucose units", "グルコース単位の間のペプチド結合", "葡萄糖單位之間的肽鍵")],
        answer: 1,
        explanation: L("Straight chains lie side by side and are cross-linked by many hydrogen bonds. Hydrogen bonds are individually weak but numerous. Covalent links join the glucose units within a chain, not the chains to each other. Peptide bonds occur in proteins.", "まっすぐな鎖が並び、多数の水素結合で架橋される。1本は弱いが数が多い。共有結合は鎖の中のグルコース同士を結ぶもので、鎖どうしではない。ペプチド結合はタンパク質にある。", "筆直的鏈並排，以大量氫鍵橫向連接；氫鍵各自雖弱，但數量多。共價鍵連接的是鏈內的葡萄糖單位，而非鏈與鏈之間。肽鍵存在於蛋白質中。")
      },
      {
        id: "b1-1-q09", type: "short", ahl: false, difficulty: 2, ref: "B1.1.6", paper: "2",
        commandTerm: "Distinguish", marks: 3,
        stem: L("Distinguish between the structure and function of starch and cellulose.", "デンプンとセルロースの構造と機能を区別せよ。", "分辨澱粉與纖維素在結構和功能上的差異。"),
        markscheme: [
          L("Starch is made of α-glucose; cellulose is made of β-glucose.", "デンプンはα-グルコース、セルロースはβ-グルコースからできている。", "澱粉由 α-葡萄糖組成；纖維素由 β-葡萄糖組成。"),
          L("Starch is coiled (and branched); cellulose forms straight, unbranched chains (alternating orientation of monomers) that are cross-linked by hydrogen bonds into bundles.", "デンプンはらせん状 (枝分かれあり)、セルロースはまっすぐで枝分かれのない鎖 (単量体の向きが交互) で、水素結合で束になる。", "澱粉呈螺旋 (有分支)；纖維素形成筆直無分支的鏈 (單體方向交替)，以氫鍵連成束。"),
          L("Starch stores energy (in plants); cellulose gives structural strength in cell walls.", "デンプンは (植物で) エネルギーを貯蔵し、セルロースは細胞壁で構造的強度を与える。", "澱粉 (在植物中) 儲能；纖維素在細胞壁中提供結構強度。")
        ],
        modelAnswer: L("Starch is a coiled, partly branched polymer of α-glucose that stores energy. Cellulose is a polymer of β-glucose whose straight chains are held in bundles by hydrogen bonds, giving strength to cell walls.", "デンプンはα-グルコースの、らせん状で一部枝分かれした重合体でエネルギーを貯蔵する。セルロースはβ-グルコースの重合体で、まっすぐな鎖が水素結合で束になり、細胞壁に強度を与える。", "澱粉是 α-葡萄糖組成、呈螺旋且部分有分支的聚合物，用於儲能；纖維素是 β-葡萄糖聚合物，筆直的鏈以氫鍵成束，為細胞壁提供強度。")
      },
      {
        id: "b1-1-q10", type: "mcq", ahl: false, difficulty: 1, ref: "B1.1.7", paper: "1A",
        stem: L("What is the molecular basis of the ABO blood-group antigens on red blood cells?", "赤血球上のABO式血液型抗原の分子的な実体は何か。", "紅血球上 ABO 血型抗原的分子基礎是甚麼？"),
        options: [
          L("Carbohydrate chains attached to membrane proteins, on the outer surface", "膜タンパク質に結合した、外側表面の糖鎖", "接在膜蛋白上、位於外表面的糖鏈"),
          L("Cholesterol molecules in the middle of the bilayer", "二重層の中央にあるコレステロール分子", "雙層中央的膽固醇分子"),
          L("Phospholipid tails on the inside of the membrane", "膜の内側にあるリン脂質の尾部", "膜內側的磷脂尾部"),
          L("Cellulose fibres in the membrane", "膜の中のセルロース繊維", "膜中的纖維素纖維")],
        answer: 0,
        explanation: L("The antigens are carbohydrate chains of glycoproteins facing outwards, and they differ in the sugar at the chain end. The others are not involved in recognition.", "抗原は外向きの糖タンパク質の糖鎖で、末端の糖が異なる。他は認識に関与しない。", "抗原是朝外的糖蛋白糖鏈，差別在鏈末端的糖。其他選項與識別無關。")
      },
      {
        id: "b1-1-q11", type: "mcq", ahl: false, difficulty: 2, ref: "B1.1.8", paper: "1A",
        stem: L("A student says: “All lipids contain fatty acids.” Which lipid shows that this statement is wrong?", "生徒が「すべての脂質は脂肪酸を含む」と言った。この主張が誤りであることを示す脂質はどれか。", "有學生說：「所有脂質都含有脂肪酸。」哪種脂質顯示這句話是錯誤的？"),
        options: [L("Triglyceride", "トリグリセリド", "甘油三酯"), L("Phospholipid", "リン脂質", "磷脂"), L("Steroid", "ステロイド", "類固醇"), L("Fat in adipose tissue", "脂肪組織の脂肪", "脂肪組織中的脂肪")],
        answer: 2,
        explanation: L("Steroids are lipids with a four-ring skeleton and no fatty acids. Triglycerides, phospholipids and adipose fat all contain fatty acids. Lipids are defined by their solubility, not by a shared structure.", "ステロイドは4環の骨格をもち脂肪酸を含まない脂質である。他はすべて脂肪酸を含む。脂質は共通の構造ではなく溶解性で定義される。", "類固醇是有四環骨架、不含脂肪酸的脂質；其餘選項都含脂肪酸。脂質是按溶解性定義，而非共同結構。")
      },
      {
        id: "b1-1-q13", type: "mcq", ahl: false, difficulty: 2, ref: "B1.1.9", paper: "1A",
        stem: L("How many molecules of water are released when one triglyceride is formed from glycerol and fatty acids?", "グリセロールと脂肪酸から1分子のトリグリセリドができるとき、放出される水は何分子か。", "由甘油和脂肪酸形成一個甘油三酯時，會釋出多少個水分子？"),
        options: [L("1", "1", "1"), L("2", "2", "2"), L("3", "3", "3"), L("4", "4", "4")],
        answer: 2,
        explanation: L("One glycerol joins to three fatty acids by three condensation reactions, each releasing one water. Answering 2 is a tempting mistake that comes from thinking of the two fatty acids in a phospholipid (a phospholipid also needs three condensation reactions: two fatty acids plus one phosphate).", "グリセロール1分子が脂肪酸3分子と3回の縮合で結合し、各回で水1分子が出る。2と答えるのは、リン脂質の脂肪酸2本を思い浮かべた誤り (リン脂質も、脂肪酸2本とリン酸1つで計3回の縮合が必要)。", "一個甘油經三次縮合反應連接三個脂肪酸，每次釋出一個水分子。答 2 是常見錯誤，源於想到磷脂只有兩個脂肪酸 (其實磷脂同樣需要三次縮合：兩個脂肪酸加一個磷酸基)。")
      },
      {
        id: "b1-1-q14", type: "short", ahl: false, difficulty: 2, ref: "B1.1.10", paper: "1B",
        commandTerm: "Describe", marks: 4,
        data: L(FA_TABLE, FA_TABLE_JA, FA_TABLE_ZH),
        stem: L("The table shows four fatty acids. (a) Describe the relationship between the number of C=C bonds and melting point. [1] (b) Explain this relationship. [2] (c) Deduce which fatty acids are liquid at 20 °C. [1]", "表は4種類の脂肪酸を示す。(a) C=C 結合の数と融点の関係を述べよ。[1] (b) この関係を説明せよ。[2] (c) 20 °C で液体の脂肪酸を推定せよ。[1]", "表中列出四種脂肪酸。(a) 描述 C=C 鍵數目與熔點的關係。[1] (b) 解釋這種關係。[2] (c) 推斷在 20 °C 時哪些脂肪酸是液體。[1]"),
        markscheme: [
          L("(a) As the number of C=C bonds increases, the melting point decreases (e.g. 69 °C with none, −11 °C with three).", "(a) C=C 結合が増えるほど融点は下がる (例: 0個で 69 °C、3個で −11 °C)。", "(a) C=C 鍵增加，熔點下降 (例如沒有時 69 °C，三個時 −11 °C)。"),
          L("(b) Each C=C bond makes a bend in the hydrocarbon chain.", "(b) C=C 結合ごとに炭化水素鎖が折れ曲がる。", "(b) 每個 C=C 鍵令烴鏈彎曲。"),
          L("(b) Bent chains cannot pack closely, so there are fewer attractions between them and less energy / lower temperature is needed to separate them.", "(b) 曲がった鎖は密に並べず、鎖間の引力が少ないので、分離に必要なエネルギーが少なく温度も低くてよい。", "(b) 彎曲的鏈不能緊密排列，鏈間吸引力較少，分開它們所需能量較少／溫度較低。"),
          L("(c) B, C and D (their melting points are below 20 °C). A is solid.", "(c) B、C、D (融点が 20 °C より低い)。Aは固体。", "(c) B、C 和 D (熔點低於 20 °C)。A 是固體。")
        ],
        modelAnswer: L("(a) More C=C bonds means a lower melting point. (b) Each C=C bond bends the chain, so chains pack less closely with fewer attractions, so less energy is needed to melt. (c) B, C and D.", "(a) C=C が多いほど融点は低い。(b) C=C ごとに鎖が曲がり、密に並べず引力が減るので、融解に必要なエネルギーが少ない。(c) B、C、D。", "(a) C=C 鍵越多，熔點越低。(b) 每個 C=C 鍵令鏈彎曲，鏈排列較疏、吸引力較少，所以熔化所需能量較少。(c) B、C、D。")
      },
      {
        id: "b1-1-q15", type: "short", ahl: false, difficulty: 3, ref: "B1.1.11", paper: "2",
        commandTerm: "Compare and contrast", marks: 4,
        stem: L("Compare and contrast triglycerides and glycogen as energy stores in animals.", "動物のエネルギー貯蔵物質としてのトリグリセリドとグリコーゲンを比較対照せよ。", "比較及對比甘油三酯與糖原作為動物儲能物質的異同。"),
        markscheme: [
          L("Similarity: both are insoluble (or relatively insoluble) so do not affect osmosis / leave the cell.", "共通点: どちらも (比較的) 不溶で、浸透に影響せず細胞外へ出ない。", "相同：兩者都不溶 (或相對不溶)，不影響滲透／不離開細胞。"),
          L("Similarity: both are energy stores that are mobilized by hydrolysis / broken down to be oxidized in respiration.", "共通点: どちらもエネルギー貯蔵で、加水分解により動員され、呼吸で酸化される。", "相同：兩者都是儲能物質，經水解動員，並在呼吸中氧化。"),
          L("Difference: triglycerides store about twice as much energy per gram.", "相違点: トリグリセリドは質量あたり約2倍のエネルギーを蓄える。", "差異：甘油三酯每克儲存的能量約為兩倍。"),
          L("Difference: triglycerides are the long-term store (adipose tissue), while glycogen is the short-term store that can be mobilized more quickly (liver and muscle).", "相違点: トリグリセリドは長期の貯蔵 (脂肪組織)、グリコーゲンはより速く動員できる短期の貯蔵 (肝臓・筋肉)。", "差異：甘油三酯是長期儲備 (脂肪組織)；糖原是可較快動員的短期儲備 (肝臟和肌肉)。"),
          L("Difference: triglycerides also provide thermal insulation (accept glycogen is branched/coiled and triglycerides are not).", "相違点: トリグリセリドは断熱の役割もある (グリコーゲンは枝分かれ・らせん状だがトリグリセリドは違う、も可)。", "差異：甘油三酯亦提供絕熱 (接受：糖原有分支／螺旋而甘油三酯沒有)。")
        ],
        modelAnswer: L("Both are insoluble stores that are broken down by hydrolysis and oxidized in respiration. Triglycerides hold about twice as much energy per gram and are a long-term store that also insulates, whereas glycogen is a short-term store that is mobilized faster.", "どちらも不溶性の貯蔵物質で、加水分解で分解され呼吸で酸化される。トリグリセリドは質量あたり約2倍のエネルギーを蓄え、長期貯蔵で断熱もする。グリコーゲンは短期貯蔵でより速く動員される。", "兩者都是不溶的儲備，經水解分解並在呼吸中氧化。甘油三酯每克儲能約兩倍，是長期儲備且可絕熱；糖原是短期儲備，動員較快。")
      },
      {
        id: "b1-1-q16", type: "mcq", ahl: false, difficulty: 2, ref: "B1.1.12", paper: "1A",
        stem: L("What does the term “amphipathic” mean when applied to a phospholipid?", "リン脂質について「両親媒性」とはどういう意味か。", "用於磷脂時，「兩親性」是甚麼意思？"),
        options: [
          L("It has both a hydrophilic region and a hydrophobic region.", "親水性の部分と疎水性の部分の両方をもつ。", "同時有親水部分和疏水部分。"),
          L("It is entirely hydrophobic.", "全体が疎水性である。", "整個分子都是疏水的。"),
          L("It is soluble in both water and ethanol because it is polar throughout.", "全体が極性なので水にもエタノールにも溶ける。", "整個分子都有極性，所以可溶於水和乙醇。"),
          L("It can form hydrogen bonds with other phospholipid tails.", "他のリン脂質の尾部と水素結合をつくれる。", "能與其他磷脂的尾部形成氫鍵。")],
        answer: 0,
        explanation: L("Amphipathic means “both-loving”: a polar, hydrophilic head and non-polar, hydrophobic tails. Option B describes a triglyceride, and the tails (non-polar) cannot form hydrogen bonds.", "両親媒性は親水性の頭部と疎水性の尾部の両方をもつこと。Bはトリグリセリドの説明で、無極性の尾部は水素結合をつくれない。", "兩親性指同時有極性親水的頭部和非極性疏水的尾部。B 描述的是甘油三酯；非極性的尾部不能形成氫鍵。")
      },
      {
        id: "b1-1-q17", type: "short", ahl: false, difficulty: 3, ref: "B1.1.12", paper: "2",
        commandTerm: "Explain", marks: 4,
        stem: L("Explain why phospholipids placed in water form a bilayer.", "リン脂質を水中に置くと二重層をつくる理由を説明せよ。", "解釋為何把磷脂放入水中會形成雙層。"),
        markscheme: [
          L("Phospholipids are amphipathic: a hydrophilic phosphate head and two hydrophobic fatty acid tails.", "リン脂質は両親媒性で、親水性のリン酸の頭部と疎水性の2本の脂肪酸の尾部をもつ。", "磷脂是兩親性的：有親水的磷酸頭部和兩條疏水的脂肪酸尾部。"),
          L("The hydrophilic heads are attracted to water / form hydrogen bonds with water.", "親水性の頭部は水に引きつけられる／水と水素結合をつくる。", "親水頭部被水吸引／與水形成氫鍵。"),
          L("The hydrophobic tails are repelled by water / avoid contact with water, so cluster together.", "疎水性の尾部は水をはじき、水との接触を避けて集まる。", "疏水尾部被水排斥／避免與水接觸，因此聚在一起。"),
          L("This gives two layers with the tails facing inwards and the heads facing the water on both sides.", "尾部が内側、頭部が両側で水に面する2層になる。", "形成兩層，尾部向內，頭部在兩側面向水。")
        ],
        modelAnswer: L("Each phospholipid has a hydrophilic head and two hydrophobic tails. The heads are attracted to water and the tails avoid it, so the molecules arrange into two layers with tails together inside and heads facing the water on both sides.", "各リン脂質は親水性の頭部と疎水性の2本の尾部をもつ。頭部は水に引かれ、尾部は水を避けるので、尾部が内側で集まり頭部が両側で水に面する2層になる。", "每個磷脂有親水頭部和兩條疏水尾部。頭部被水吸引，尾部避開水，所以排成兩層，尾部在內聚合，頭部在兩側面向水。")
      },
      {
        id: "b1-1-q18", type: "mcq", ahl: false, difficulty: 3, ref: "B1.1.13", paper: "1A",
        stem: L("Testosterone crosses the plasma membrane of a target cell, but glucose cannot cross without a protein. What is the best explanation?", "テストステロンは標的細胞の細胞膜を通過できるが、グルコースはタンパク質なしでは通過できない。最もよい説明はどれか。", "睪酮能穿過靶細胞的質膜，而葡萄糖沒有蛋白質協助便不能。最佳解釋是甚麼？"),
        options: [
          L("Testosterone is a small polar molecule and glucose is large.", "テストステロンは小さな極性分子で、グルコースは大きい。", "睪酮是小型極性分子，而葡萄糖很大。"),
          L("Testosterone is non-polar and dissolves in the hydrophobic core of the bilayer, whereas glucose is polar.", "テストステロンは無極性で二重層の疎水性の中心部に溶けるが、グルコースは極性である。", "睪酮是非極性，可溶於雙層的疏水核心，而葡萄糖是極性。"),
          L("Testosterone uses a channel protein that glucose lacks.", "テストステロンはグルコースにないチャネルタンパク質を使う。", "睪酮使用葡萄糖沒有的通道蛋白。"),
          L("Testosterone is hydrolysed into smaller parts before crossing.", "テストステロンは通過前に加水分解されて小さくなる。", "睪酮在穿過前被水解成較小部分。")],
        answer: 1,
        explanation: L("Steroids are non-polar, so they pass between the hydrophobic tails. Glucose is polar and is repelled by the hydrophobic core. Option A reverses the polarity (the tempting error); steroids do not need channels.", "ステロイドは無極性で疎水性の尾部の間を通れる。グルコースは極性で疎水性の中心部にはじかれる。Aは極性を逆にした誤り。ステロイドにチャネルは不要。", "類固醇是非極性，可穿過疏水尾部之間；葡萄糖是極性，被疏水核心排斥。A 把極性弄反了；類固醇不需要通道。")
      },
      {
        id: "b1-1-q19", type: "short", ahl: false, difficulty: 3, ref: "B1.1.11", paper: "2",
        commandTerm: "Suggest", marks: 3,
        stem: L("A migrating bird flies for several days without feeding. Suggest why the bird stores energy mainly as triglycerides rather than as glycogen.", "渡りをする鳥は何日も餌をとらずに飛ぶ。この鳥がエネルギーを主にグリコーゲンではなくトリグリセリドとして貯える理由を示唆せよ。", "一隻候鳥連續飛行數天而不進食。試提出為何這隻鳥主要以甘油三酯而非糖原儲能。"),
        markscheme: [
          L("Triglycerides store about twice as much energy per gram, so the bird carries less mass for the same energy.", "トリグリセリドは質量あたり約2倍のエネルギーを蓄えるので、同じエネルギーなら運ぶ質量が少ない。", "甘油三酯每克儲能約兩倍，所以儲存同樣能量時鳥攜帶的重量較少。"),
          L("Less mass makes flight easier / needs less energy to carry.", "質量が小さいと飛びやすく、運ぶエネルギーも少ない。", "重量較輕令飛行較容易／攜帶所需能量較少。"),
          L("Triglycerides are a long-term store, suited to a long journey (glycogen is a short-term store).", "トリグリセリドは長期の貯蔵で長い旅に適する (グリコーゲンは短期の貯蔵)。", "甘油三酯是長期儲備，適合長途旅程 (糖原是短期儲備)。"),
          L("Glycogen stores hold water / are bulky, adding mass (accept: fat is insoluble so is stored without water).", "グリコーゲンは水を伴い大きくなり、質量が増える (脂肪は不溶なので水なしで貯蔵できる、も可)。", "糖原儲存時帶水／體積大，增加重量 (接受：脂肪不溶，儲存時不帶水)。")
        ],
        modelAnswer: L("Fat stores about twice as much energy per gram as glycogen, so the bird carries less mass for the same energy, which makes flight cheaper. Fat is also a long-term store, suiting a journey of several days.", "脂肪は質量あたりグリコーゲンの約2倍のエネルギーを蓄えるので、同じエネルギーでも運ぶ質量が小さく、飛行の負担が少ない。また長期貯蔵なので数日の旅に適する。", "脂肪每克儲能約為糖原的兩倍，所以儲存同樣能量時鳥攜帶的重量較輕，飛行較省力；脂肪亦是長期儲備，適合數日的旅程。")
      },
      {
        id: "b1-1-q20", type: "short", ahl: false, difficulty: 3, ref: "B1.1.10", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Many seeds store energy as oil, whereas animals such as mammals store energy mainly as fat. Explain the difference in the fatty acids found in each.", "多くの種子はエネルギーを油として貯蔵し、哺乳類などの動物は主に脂肪として貯蔵する。それぞれに含まれる脂肪酸の違いを説明せよ。", "許多種子以油儲能，而哺乳類等動物主要以脂肪儲能。解釋兩者所含脂肪酸的差異。"),
        markscheme: [
          L("Plant oils contain more unsaturated (mono/polyunsaturated) fatty acids, with C=C bonds that bend the chains.", "植物の油は不飽和脂肪酸 (一価・多価) が多く、C=C 結合が鎖を曲げる。", "植物油含較多不飽和 (單元／多元) 脂肪酸，C=C 鍵令鏈彎曲。"),
          L("This gives a lower melting point, so oils are liquid at ordinary temperatures and can be mobilized.", "融点が低いため、油は普通の温度で液体であり動員しやすい。", "熔點較低，所以油在一般溫度下是液體，便於動員。"),
          L("Animal fats contain more saturated fatty acids (straight chains, pack closely), so have a higher melting point and are solid or semi-solid, staying in adipose tissue.", "動物の脂肪は飽和脂肪酸が多く (直線状で密に並ぶ)、融点が高く固体か半固体で、脂肪組織にとどまる。", "動物脂肪含較多飽和脂肪酸 (鏈筆直、排列緊密)，熔點較高，為固體或半固體，留在脂肪組織中。")
        ],
        modelAnswer: L("Plant oils are rich in unsaturated fatty acids whose C=C bonds bend the chains, so they pack loosely and are liquid at ordinary temperatures. Animal fats have more saturated fatty acids, which pack closely and give a higher melting point, so they are solid or semi-solid.", "植物の油は不飽和脂肪酸が多く、C=C が鎖を曲げるので密に並ばず、普通の温度で液体。動物の脂肪は飽和脂肪酸が多く、密に並んで融点が高く、固体か半固体になる。", "植物油富含不飽和脂肪酸，其 C=C 鍵令鏈彎曲，排列疏鬆，在一般溫度下為液體；動物脂肪含較多飽和脂肪酸，排列緊密、熔點較高，所以是固體或半固體。")
      },
      {"id":"b1-1-q21","type":"mcq","ahl":false,"difficulty":3,"ref":"B1.1.2","paper":"1A","stem":{"en":"A single unbranched chain of 500 glucose units is built from free glucose molecules. How many water molecules are released?","ja":"遊離のグルコース分子から、500個のグルコース単位からなる枝分かれのない鎖が1本つくられる。放出される水は何分子か。","zh":"由游離葡萄糖分子合成一條由 500 個葡萄糖單位組成、沒有分支的鏈。會釋出多少個水分子？"},"options":[{"en":"498","ja":"498","zh":"498"},{"en":"499","ja":"499","zh":"499"},{"en":"500","ja":"500","zh":"500"},{"en":"501","ja":"501","zh":"501"}],"answer":1,"explanation":{"en":"Each condensation reaction joins two units with one bond and releases one water. A chain of 500 units has 499 bonds, so 499 water molecules are released. Answering 500 is the tempting mistake of releasing one water per glucose.","ja":"縮合反応1回で2つの単位が結合1つでつながり、水が1分子放出される。500個の鎖には結合が499あるので、水は499分子放出される。500と答えるのは、グルコース1個につき水1分子と考える誤り。","zh":"每次縮合反應以一個鍵連接兩個單位，並釋出一個水分子。500 個單位的鏈有 499 個鍵，所以釋出 499 個水分子。答 500 是誤以為每個葡萄糖釋出一個水分子。"}},
      {"id":"b1-1-q22","type":"short","ahl":false,"difficulty":2,"ref":"B1.1.11","paper":"1B","commandTerm":"Calculate","marks":4,"stem":{"en":"The table gives the energy released per gram when two stores are oxidized (illustrative values). (a) Calculate the mass of fat and the mass of carbohydrate needed to store 7600 kJ. [2] (b) Calculate how many times greater the mass of carbohydrate is than the mass of fat. [1] (c) Suggest why the difference in a real animal's glycogen store is even larger. [1]","ja":"表は、二つの貯蔵物質が酸化されるときの1グラムあたりのエネルギーを示す（例示の値）。(a) 7600 kJ を貯蔵するのに必要な脂肪の質量と炭水化物の質量を計算せよ。[2] (b) 炭水化物の質量が脂肪の何倍かを計算せよ。[1] (c) 実際の動物ではグリコーゲンの貯蔵でその差がさらに大きくなる理由を示せ。[1]","zh":"下表列出兩種儲備物質氧化時每克釋出的能量（示範數值）。(a) 計算儲存 7600 kJ 所需的脂肪質量和碳水化合物質量。[2] (b) 計算碳水化合物的質量是脂肪的多少倍。[1] (c) 提出為何在真實動物中，糖原儲備的差距會更大。[1]"},"data":{"en":"<table><tr><th>Store</th><th>Energy released (kJ per g)</th></tr><tr><td>Fat (triglyceride)</td><td>38</td></tr><tr><td>Carbohydrate</td><td>17</td></tr></table>","ja":"<table><tr><th>貯蔵物質</th><th>放出されるエネルギー (kJ/g)</th></tr><tr><td>脂肪（トリグリセリド）</td><td>38</td></tr><tr><td>炭水化物</td><td>17</td></tr></table>","zh":"<table><tr><th>儲備物質</th><th>釋出的能量 (kJ/g)</th></tr><tr><td>脂肪（甘油三酯）</td><td>38</td></tr><tr><td>碳水化合物</td><td>17</td></tr></table>"},"markscheme":[{"en":"(a) Fat: 7600 ÷ 38 = 200 g","ja":"(a) 脂肪：7600 ÷ 38 = 200 g","zh":"(a) 脂肪：7600 ÷ 38 = 200 g"},{"en":"(a) Carbohydrate: 7600 ÷ 17 = 447 g (accept 450 g)","ja":"(a) 炭水化物：7600 ÷ 17 = 447 g（450 g も可）","zh":"(a) 碳水化合物：7600 ÷ 17 = 447 g（接受 450 g）"},{"en":"(b) 447 ÷ 200 = 2.2 times (about twice)","ja":"(b) 447 ÷ 200 = 2.2倍（約2倍）","zh":"(b) 447 ÷ 200 = 2.2 倍（約兩倍）"},{"en":"(c) Glycogen is stored with water, which adds mass (fat is insoluble and stored without water)","ja":"(c) グリコーゲンは水を伴って貯蔵され、その分質量が増える（脂肪は不溶で水なしで貯蔵される）","zh":"(c) 糖原儲存時帶有水，增加質量（脂肪不溶，儲存時不帶水）"}],"modelAnswer":{"en":"(a) Fat: 7600 ÷ 38 = 200 g. Carbohydrate: 7600 ÷ 17 = 447 g. (b) 447 ÷ 200 = 2.2, so about twice as much mass. (c) Glycogen is stored together with water, which adds to its mass, whereas fat is insoluble and is stored without water.","ja":"(a) 脂肪：7600 ÷ 38 = 200 g。炭水化物：7600 ÷ 17 = 447 g。(b) 447 ÷ 200 = 2.2で、約2倍の質量。(c) グリコーゲンは水を伴って貯蔵され質量が増えるが、脂肪は不溶で水なしで貯蔵される。","zh":"(a) 脂肪：7600 ÷ 38 = 200 g。碳水化合物：7600 ÷ 17 = 447 g。(b) 447 ÷ 200 = 2.2，即質量約為兩倍。(c) 糖原儲存時帶水，增加了質量；脂肪不溶，儲存時不帶水。"}},
      {"id":"b1-1-q23","type":"short","ahl":false,"difficulty":2,"ref":"B1.1.10","paper":"2","commandTerm":"Deduce","marks":3,"stem":{"en":"Three triglyceride samples have the following fatty acids: sample P mostly saturated, sample Q mostly monounsaturated and sample R mostly polyunsaturated. Deduce the order of their melting points from highest to lowest, and explain your reasoning.","ja":"三つのトリグリセリド試料の脂肪酸は次のとおり：試料Pは主に飽和、試料Qは主に一価不飽和、試料Rは主に多価不飽和。融点が高い順に並べて推定し (Deduce)、その理由を説明せよ。","zh":"三個甘油三酯樣本所含的脂肪酸如下：樣本 P 主要是飽和，樣本 Q 主要是單元不飽和，樣本 R 主要是多元不飽和。推斷 (Deduce) 它們熔點由高至低的次序，並解釋你的推理。"},"markscheme":[{"en":"Order: P (highest), then Q, then R (lowest)","ja":"順序：P（最高）、Q、R（最低）","zh":"次序：P（最高）、Q、R（最低）"},{"en":"More C=C bonds means more bends in the hydrocarbon chains, so they cannot pack closely","ja":"C=C 結合が多いほど炭化水素鎖の折れ曲がりが多く、密に並べない","zh":"C=C 鍵越多，烴鏈的彎曲越多，不能緊密排列"},{"en":"Fewer attractions between chains, so less energy (a lower temperature) is needed to separate them","ja":"鎖の間の引力が少なく、分離に必要なエネルギー（温度）が少ない","zh":"鏈間的吸引力較少，分開它們所需的能量（溫度）較少"}],"modelAnswer":{"en":"P has the highest melting point, then Q, then R. Saturated chains are straight and pack closely with many attractions between them. Each C=C bond bends a chain, so Q and R pack less closely, with fewer attractions, and need less energy to melt. R has the most C=C bonds, so the lowest melting point.","ja":"融点はPが最も高く、次にQ、最後にR。飽和の鎖はまっすぐで密に並び、鎖の間に多くの引力が働く。C=C 結合ごとに鎖が曲がるので、QとRは密に並べず引力が少なく、融解に必要なエネルギーが少ない。RはC=Cが最も多いので融点が最も低い。","zh":"P 的熔點最高，其次是 Q，然後是 R。飽和鏈是直的，排列緊密，鏈間有許多吸引力。每個 C=C 鍵令鏈彎曲，所以 Q 和 R 排列較疏、吸引力較少，熔化所需能量較少。R 的 C=C 鍵最多，所以熔點最低。"}},
      {"id":"b1-1-q24","type":"short","ahl":false,"difficulty":2,"ref":"B1.1.9","paper":"2","commandTerm":"State","marks":3,"stem":{"en":"One triglyceride molecule is completely hydrolysed. (a) State the products. [2] (b) State the number of water molecules used. [1]","ja":"トリグリセリド1分子が完全に加水分解される。(a) 生成物を述べよ (State)。[2] (b) 使われる水分子の数を述べよ (State)。[1]","zh":"一個甘油三酯分子被完全水解。(a) 說出 (State) 產物。[2] (b) 說出 (State) 所消耗的水分子數目。[1]"},"markscheme":[{"en":"(a) One glycerol","ja":"(a) グリセロール1分子","zh":"(a) 一個甘油"},{"en":"(a) Three fatty acids","ja":"(a) 脂肪酸3分子","zh":"(a) 三個脂肪酸"},{"en":"(b) Three water molecules","ja":"(b) 水3分子","zh":"(b) 三個水分子"}],"modelAnswer":{"en":"(a) One glycerol and three fatty acids. (b) Three water molecules are used, one for each bond broken.","ja":"(a) グリセロール1分子と脂肪酸3分子。(b) 水3分子が使われる。切れる結合1つにつき1分子。","zh":"(a) 一個甘油和三個脂肪酸。(b) 消耗三個水分子，每斷開一個鍵用一個。"}},
      {"id":"b1-1-q25","type":"multi","ahl":false,"difficulty":2,"ref":"B1.1.7","paper":"1A","stem":{"en":"Which statements about glycoproteins in the plasma membrane are correct? Select all that apply.","ja":"細胞膜の糖タンパク質について正しい記述をすべて選べ。","zh":"關於質膜中的糖蛋白，哪些陳述正確？選出所有適用項目。"},"options":[{"en":"Their carbohydrate chains project from the outer surface of the membrane","ja":"糖鎖は膜の外側の表面に突き出している","zh":"糖鏈從膜的外表面伸出"},{"en":"They can act as labels that allow cells to recognise each other","ja":"細胞どうしが互いを見分けるための目印として働く","zh":"可作為標籤，讓細胞互相識別"},{"en":"They are made only of carbohydrate, with no protein","ja":"炭水化物だけでできており、タンパク質を含まない","zh":"只由碳水化合物組成，不含蛋白質"},{"en":"The ABO blood-group antigens are an example","ja":"ABO式血液型抗原はその例である","zh":"ABO 血型抗原是一個例子"}],"answer":[0,1,3],"explanation":{"en":"A, B and D are correct: the carbohydrate chains face outwards, act as recognition labels, and the ABO antigens are examples. C is wrong because a glycoprotein is a protein with carbohydrate chains attached.","ja":"A、B、Dが正しい。糖鎖は外向きで、認識の目印として働き、ABO抗原はその例である。Cは誤りで、糖タンパク質は糖鎖が結合したタンパク質である。","zh":"A、B、D 正確：糖鏈朝外、作為識別標籤，而 ABO 抗原就是例子。C 錯，因為糖蛋白是帶有糖鏈的蛋白質。"}}
    ]
  });
})();
