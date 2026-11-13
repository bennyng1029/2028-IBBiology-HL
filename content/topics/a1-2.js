/* A1.2 Nucleic acids — IB Biology (first assessment 2025). Original explanations; see docs/syllabus.md for the guide statements. */
(function () {
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };

  IB.registerTopic({
    id: "A1.2",
    slug: "a1-2",
    theme: "A",
    level: 1,
    ahlOnly: false,
    title: L("Nucleic acids", "核酸", "核酸"),
    guidingQuestions: [
      L("How does the structure of nucleic acids allow hereditary information to be stored?",
        "核酸の構造は、遺伝情報の保存をどのように可能にしているか。",
        "核酸的結構如何讓遺傳資訊得以儲存？"),
      L("How does the structure of DNA facilitate accurate replication?",
        "DNA の構造は、正確な複製をどのように助けているか。",
        "DNA 的結構如何有助於準確複製？")
    ],
    summary: L(
      "DNA and RNA are long chains of nucleotides. The order of the four bases is a code that stores genetic information. Because A always pairs with T (or U in RNA) and G always pairs with C, one strand can be used to make a copy of the other, and the same code is used by nearly all living things. HL students also learn about strand direction, nucleosomes, the Hershey–Chase experiment and Chargaff's data.",
      "DNA と RNA はヌクレオチド (nucleotide) が長くつながった鎖です。4種類の塩基 (base) の並び順が、遺伝情報を蓄える暗号になっています。A は常に T (RNA では U) と、G は常に C と対をつくるので、一方の鎖を使ってもう一方の鎖のコピーをつくれます。また、ほぼすべての生物が同じ暗号を使っています。HLでは、鎖の方向性、ヌクレオソーム、ハーシー・チェイスの実験、シャルガフのデータも学びます。",
      "DNA 和 RNA 是由核苷酸 (nucleotide) 連成的長鏈。四種鹼基 (base) 的排列次序就是儲存遺傳資訊的密碼。A 總是與 T (RNA 中為 U) 配對，G 總是與 C 配對，所以可以用一條鏈來製造另一條鏈的複本，而且幾乎所有生物都使用同一套密碼。HL 學生還會學習鏈的方向性、核小體、赫爾希−蔡斯實驗和查加夫的數據。"),

    sections: [
      {
        ref: "A1.2.1",
        ahl: false,
        heading: L("DNA: the genetic material of life", "DNA：生物の遺伝物質", "DNA：生物的遺傳物質"),
        body: L(
          "<p><strong>DNA</strong> (deoxyribonucleic acid) is the genetic material of all living organisms. Genetic material stores the instructions for building and running an organism and is passed on to offspring.</p>" +
          "<p>Some <strong>viruses</strong> use RNA instead of DNA as their genetic material. The guide notes that viruses are not considered to be living, so this does not break the rule.</p>",
          "<p><strong>DNA</strong> (デオキシリボ核酸 (deoxyribonucleic acid)) は、すべての生物の遺伝物質です。遺伝物質は、生物をつくり働かせるための指示を蓄え、子に受け渡されます。</p>" +
          "<p>一部の<strong>ウイルス (virus)</strong> は、DNA ではなく RNA を遺伝物質としています。ガイドは、ウイルスは生物とはみなされないと述べているので、これは上の規則に反しません。</p>",
          "<p><strong>DNA</strong> (脫氧核糖核酸 (deoxyribonucleic acid)) 是所有生物的遺傳物質。遺傳物質儲存建造和運作生物體的指令，並傳給後代。</p>" +
          "<p>有些<strong>病毒 (virus)</strong> 使用 RNA 而不是 DNA 作為遺傳物質。課程指引指出病毒不被視為生物，所以這並不違反上述規則。</p>")
      },
      {
        ref: "A1.2.2",
        ahl: false,
        heading: L("The parts of a nucleotide", "ヌクレオチドの構成要素", "核苷酸的組成部分"),
        body: L(
          "<p>A <strong>nucleotide</strong> is the building block (monomer) of a nucleic acid. It has three parts:</p>" +
          "<ul><li>a <strong>phosphate</strong> group;</li>" +
          "<li>a <strong>pentose sugar</strong> (a sugar with five carbon atoms): deoxyribose in DNA, ribose in RNA;</li>" +
          "<li>a <strong>nitrogenous base</strong> (a base containing nitrogen).</li></ul>" +
          "<p><strong>How to draw it.</strong> The guide wants a simple diagram: a <em>circle</em> for the phosphate, a <em>pentagon</em> for the sugar and a <em>rectangle</em> for the base. The phosphate is joined to the sugar, and the base is joined to the sugar on a different side. Label all three parts.</p>",
          "<p><strong>ヌクレオチド (nucleotide)</strong> は、核酸の構成単位 (単量体 (monomer)) です。3つの部分からできています。</p>" +
          "<ul><li><strong>リン酸 (phosphate)</strong> 基</li>" +
          "<li><strong>五炭糖 (pentose sugar)</strong> (炭素原子5個の糖)。DNA ではデオキシリボース、RNA ではリボース</li>" +
          "<li><strong>窒素を含む塩基 (nitrogenous base)</strong></li></ul>" +
          "<p><strong>図の描き方。</strong>ガイドは簡単な図を求めています。リン酸は<em>円</em>、糖は<em>五角形</em>、塩基は<em>長方形</em>で表します。リン酸は糖につながり、塩基は糖の別の側につながります。3つの部分すべてに名前を付けます。</p>",
          "<p><strong>核苷酸 (nucleotide)</strong> 是核酸的基本單位 (單體 (monomer))，由三部分組成：</p>" +
          "<ul><li><strong>磷酸 (phosphate)</strong> 基團；</li>" +
          "<li><strong>戊糖 (pentose sugar)</strong> (含五個碳原子的糖)：DNA 中是脫氧核糖，RNA 中是核糖；</li>" +
          "<li><strong>含氮鹼基 (nitrogenous base)</strong>。</li></ul>" +
          "<p><strong>繪圖方法。</strong>課程指引要求簡單的圖：用<em>圓形</em>代表磷酸，用<em>五邊形</em>代表糖，用<em>長方形</em>代表鹼基。磷酸連接糖，鹼基連接糖的另一側。三個部分都要標示名稱。</p>"),
        widget: "dna-builder"
      },
      {
        ref: "A1.2.3",
        ahl: false,
        heading: L("The sugar–phosphate backbone", "糖−リン酸の骨格", "糖−磷酸骨架"),
        body: L(
          "<p>Nucleotides join in a chain. The phosphate of one nucleotide bonds to the sugar of the next nucleotide. These are <strong>covalent bonds</strong>, so they are strong.</p>" +
          "<p>Repeating this along the chain makes a continuous line of covalently bonded atoms: sugar, phosphate, sugar, phosphate … This is the <strong>sugar–phosphate backbone</strong> of a DNA or RNA strand. The bases stick out sideways from the backbone.</p>" +
          "<p>Because the backbone is strong, the strand does not break easily, so the order of bases is protected.</p>",
          "<p>ヌクレオチドは鎖状につながります。あるヌクレオチドのリン酸が、次のヌクレオチドの糖と結合します。これは<strong>共有結合</strong>なので強い結合です。</p>" +
          "<p>これが鎖に沿って繰り返されると、共有結合でつながった原子の連続した列 (糖、リン酸、糖、リン酸…) ができます。これが DNA または RNA の鎖の<strong>糖−リン酸骨格 (sugar–phosphate backbone)</strong> です。塩基は骨格から横に突き出ています。</p>" +
          "<p>骨格が強いので鎖は簡単には切れず、塩基の並び順が守られます。</p>",
          "<p>核苷酸連成鏈。一個核苷酸的磷酸與下一個核苷酸的糖結合。這些是<strong>共價鍵</strong>，所以很強。</p>" +
          "<p>沿著鏈重複這種連接，便形成一條由共價鍵連接的原子連續線：糖、磷酸、糖、磷酸……這就是 DNA 或 RNA 鏈的<strong>糖−磷酸骨架 (sugar–phosphate backbone)</strong>。鹼基從骨架向側面伸出。</p>" +
          "<p>骨架很堅固，鏈不易斷裂，因此鹼基的排列次序得到保護。</p>")
      },
      {
        ref: "A1.2.4",
        ahl: false,
        heading: L("The four bases and the code", "4種類の塩基と暗号", "四種鹼基與密碼"),
        body: L(
          "<p>You must know the names of the nitrogenous bases:</p>" +
          "<table><tr><th>Base</th><th>Letter</th><th>In DNA</th><th>In RNA</th></tr>" +
          "<tr><td>Adenine</td><td>A</td><td>yes</td><td>yes</td></tr>" +
          "<tr><td>Guanine</td><td>G</td><td>yes</td><td>yes</td></tr>" +
          "<tr><td>Cytosine</td><td>C</td><td>yes</td><td>yes</td></tr>" +
          "<tr><td>Thymine</td><td>T</td><td>yes</td><td>no</td></tr>" +
          "<tr><td>Uracil</td><td>U</td><td>no</td><td>yes</td></tr></table>" +
          "<p>The sequence (order) of bases along a strand is a <strong>code</strong>. In the same way that the order of letters makes words, the order of bases carries information. This is the basis of how genes store instructions.</p>",
          "<p>窒素を含む塩基の名前を覚える必要があります。</p>" +
          "<table><tr><th>塩基</th><th>記号</th><th>DNA</th><th>RNA</th></tr>" +
          "<tr><td>アデニン (adenine)</td><td>A</td><td>あり</td><td>あり</td></tr>" +
          "<tr><td>グアニン (guanine)</td><td>G</td><td>あり</td><td>あり</td></tr>" +
          "<tr><td>シトシン (cytosine)</td><td>C</td><td>あり</td><td>あり</td></tr>" +
          "<tr><td>チミン (thymine)</td><td>T</td><td>あり</td><td>なし</td></tr>" +
          "<tr><td>ウラシル (uracil)</td><td>U</td><td>なし</td><td>あり</td></tr></table>" +
          "<p>鎖に沿った塩基の配列 (並び順) は<strong>暗号 (code)</strong> です。文字の並び順が単語をつくるのと同じように、塩基の並び順が情報を担います。これが遺伝子が指示を蓄える仕組みの基礎です。</p>",
          "<p>你必須認識各種含氮鹼基的名稱：</p>" +
          "<table><tr><th>鹼基</th><th>代號</th><th>DNA</th><th>RNA</th></tr>" +
          "<tr><td>腺嘌呤 (adenine)</td><td>A</td><td>有</td><td>有</td></tr>" +
          "<tr><td>鳥嘌呤 (guanine)</td><td>G</td><td>有</td><td>有</td></tr>" +
          "<tr><td>胞嘧啶 (cytosine)</td><td>C</td><td>有</td><td>有</td></tr>" +
          "<tr><td>胸腺嘧啶 (thymine)</td><td>T</td><td>有</td><td>無</td></tr>" +
          "<tr><td>尿嘧啶 (uracil)</td><td>U</td><td>無</td><td>有</td></tr></table>" +
          "<p>沿著一條鏈的鹼基序列 (排列次序) 就是<strong>密碼 (code)</strong>。就像字母的次序組成詞語，鹼基的次序承載資訊。這是基因儲存指令的基礎。</p>")
      },
      {
        ref: "A1.2.5",
        ahl: false,
        heading: L("RNA: a polymer made by condensation", "RNA：縮合でつくられるポリマー", "RNA：由縮合反應形成的聚合物"),
        body: L(
          "<p>A <strong>polymer</strong> is a long molecule made of many repeating units (monomers). RNA is a polymer of nucleotides.</p>" +
          "<p>Nucleotides are joined by <strong>condensation reactions</strong>. In each reaction the phosphate of one nucleotide bonds to the sugar of another, and a molecule of <strong>water is released</strong>. Repeating this builds the sugar–phosphate backbone.</p>" +
          "<p>RNA is a <strong>single strand</strong> of nucleotides, with the bases A, U, G and C.</p>" +
          "<p><strong>Skill.</strong> You should be able to draw and recognize a single nucleotide and a short RNA polymer, using circles (phosphate), pentagons (ribose) and rectangles (bases). In an RNA polymer the pentagons are joined to circles in a repeating chain, with a rectangle sticking out from each pentagon.</p>",
          "<p><strong>ポリマー (polymer)</strong> とは、同じ単位 (単量体) が多数繰り返された長い分子です。RNA はヌクレオチドのポリマーです。</p>" +
          "<p>ヌクレオチドは<strong>縮合反応 (condensation reaction)</strong> でつながります。各反応で、あるヌクレオチドのリン酸が別のヌクレオチドの糖と結合し、<strong>水の分子が1つ放出</strong>されます。これを繰り返して糖−リン酸骨格ができます。</p>" +
          "<p>RNA は塩基 A、U、G、C をもつヌクレオチドの<strong>1本鎖</strong>です。</p>" +
          "<p><strong>スキル。</strong>1つのヌクレオチドと短い RNA ポリマーを、円 (リン酸)、五角形 (リボース)、長方形 (塩基) を使って描き、見分けられるようにします。RNA ポリマーでは、五角形と円が繰り返しの鎖状につながり、各五角形から長方形が突き出ています。</p>",
          "<p><strong>聚合物 (polymer)</strong> 是由許多重複單位 (單體) 組成的長分子。RNA 是核苷酸的聚合物。</p>" +
          "<p>核苷酸以<strong>縮合反應 (condensation reaction)</strong> 連接。每次反應中，一個核苷酸的磷酸與另一個核苷酸的糖結合，並<strong>釋出一分子水</strong>。重複這個過程便建成糖−磷酸骨架。</p>" +
          "<p>RNA 是核苷酸的<strong>單鏈</strong>，含有鹼基 A、U、G 和 C。</p>" +
          "<p><strong>技能。</strong>你應能用圓形 (磷酸)、五邊形 (核糖) 和長方形 (鹼基)，繪畫並辨認單個核苷酸和短的 RNA 聚合物。在 RNA 聚合物中，五邊形與圓形重複連接成鏈，每個五邊形伸出一個長方形。</p>"),
        examTip: L(
          "\"Condensation\" means joining with the loss of water. The opposite, adding water to break a bond, is hydrolysis. Always mention water when asked about condensation.",
          "「縮合」は水が失われながらつながることです。逆に水を加えて結合を切るのは加水分解です。縮合について問われたら、必ず水に触れましょう。",
          "「縮合」是指連接時失去水。相反，加水使鍵斷開則是水解。被問及縮合時，必須提到水。")
      },
      {
        ref: "A1.2.6",
        ahl: false,
        heading: L("The DNA double helix", "DNA の二重らせん", "DNA 雙螺旋"),
        body: L(
          "<p>DNA is a <strong>double helix</strong>: two strands of nucleotides twisted around each other.</p>" +
          "<ul><li>The two strands run in <strong>opposite directions</strong>. They are <strong>antiparallel</strong>.</li>" +
          "<li>The strands are linked by <strong>hydrogen bonds</strong> between bases that face each other. These are <strong>complementary base pairs</strong>:</li></ul>" +
          "<p style=\"text-align:center\"><strong>A pairs with T &nbsp;&nbsp;|&nbsp;&nbsp; G pairs with C</strong></p>" +
          "<p>Each hydrogen bond is weak, but there are very many along a DNA molecule, so together they hold the strands firmly. They can still be pulled apart when needed, for example when DNA is copied.</p>" +
          "<p><strong>How to draw it.</strong> Draw the two backbones as two lines running in opposite directions (antiparallel). Draw the bases as rectangles between the strands, with A opposite T and G opposite C, and dashed lines for the hydrogen bonds. You do <em>not</em> need to draw the helical (twisted) shape.</p>" +
          "<p>Try it: in the DNA builder below, open the <em>Build a DNA strand</em> tab to pair bases on antiparallel strands, and the <em>DNA vs RNA</em> tab for A1.2.7. HL students can also show the 5′ and 3′ ends and colour purines and pyrimidines there.</p>" +
          "<p>You are <em>not</em> required to memorize the relative lengths of the bases, or the number of hydrogen bonds in each pair.</p>",
          "<p>DNA は<strong>二重らせん (double helix)</strong> です。ヌクレオチドの2本の鎖が互いにねじれ合っています。</p>" +
          "<ul><li>2本の鎖は<strong>逆向き</strong>に走っています。これを<strong>逆平行 (antiparallel)</strong> といいます。</li>" +
          "<li>2本の鎖は、向かい合う塩基どうしの<strong>水素結合</strong>でつながっています。これが<strong>相補的な塩基対 (complementary base pair)</strong> です。</li></ul>" +
          "<p style=\"text-align:center\"><strong>A は T と対をつくる &nbsp;&nbsp;|&nbsp;&nbsp; G は C と対をつくる</strong></p>" +
          "<p>水素結合1本は弱いのですが、DNA 分子に沿って非常に多くあるため、全体として2本の鎖をしっかり結びつけます。それでも、DNA が複製されるときなど、必要なときには引き離すことができます。</p>" +
          "<p><strong>図の描き方。</strong>2本の骨格を、逆向きに走る2本の線 (逆平行) として描きます。塩基は鎖の間の長方形で表し、A の向かいに T、G の向かいに C を置き、水素結合は破線で描きます。らせん (ねじれた) 形を描く必要は<em>ありません</em>。</p>" +
          "<p>やってみよう：下の DNA ビルダーで「DNA 鎖をつくる」タブを開くと、逆平行の鎖で塩基を対にできます。「DNA と RNA」タブは A1.2.7 に対応します。HL の人は、そこで 5′・3′ 末端の表示や、プリン・ピリミジンの色分けもできます。</p>" +
          "<p>塩基の相対的な長さや、各塩基対の水素結合の数を暗記する必要は<em>ありません</em>。</p>",
          "<p>DNA 是<strong>雙螺旋 (double helix)</strong>：兩條核苷酸鏈互相纏繞。</p>" +
          "<ul><li>兩條鏈的走向<strong>相反</strong>，稱為<strong>反向平行 (antiparallel)</strong>。</li>" +
          "<li>兩條鏈靠面對面的鹼基之間的<strong>氫鍵</strong>連接，這些是<strong>互補鹼基對 (complementary base pair)</strong>：</li></ul>" +
          "<p style=\"text-align:center\"><strong>A 與 T 配對 &nbsp;&nbsp;|&nbsp;&nbsp; G 與 C 配對</strong></p>" +
          "<p>每個氫鍵都很弱，但 DNA 分子上有非常多氫鍵，合起來能把兩條鏈牢牢固定。需要時 (例如 DNA 複製時) 它們仍可被拉開。</p>" +
          "<p><strong>繪圖方法。</strong>把兩條骨架畫成方向相反的兩條線 (反向平行)。鹼基用長方形畫在兩條鏈之間，A 對 T、G 對 C，氫鍵用虛線表示。<em>不需要</em>畫出螺旋 (扭曲) 形狀。</p>" +
          "<p>試試看：在下方的 DNA 建構器中，打開「建構 DNA 鏈」分頁，在反向平行的鏈上配對鹼基；「DNA 與 RNA」分頁則對應 A1.2.7。HL 學生還可以在那裏顯示 5′ 與 3′ 端，並以顏色區分嘌呤與嘧啶。</p>" +
          "<p><em>不需要</em>記住各種鹼基的相對長度，或每個鹼基對的氫鍵數目。</p>"),
        widget: "dna-builder",
        examTip: L(
          "If asked to draw DNA, check three things before you move on: strands antiparallel, A opposite T and G opposite C, and hydrogen bonds shown as dashed lines between bases (not through the backbone).",
          "DNA を描く問題では、次の3点を確認しましょう。鎖が逆平行であること、A の向かいが T で G の向かいが C であること、水素結合が塩基の間の破線で (骨格ではなく) 描かれていること。",
          "被要求繪畫 DNA 時，請檢查三點：兩條鏈反向平行、A 對 T 且 G 對 C、氫鍵以虛線畫在鹼基之間 (而不是穿過骨架)。")
      },
      {
        ref: "A1.2.7",
        ahl: false,
        heading: L("DNA compared with RNA", "DNA と RNA の違い", "DNA 與 RNA 的比較"),
        body: L(
          "<table><tr><th>Feature</th><th>DNA</th><th>RNA</th></tr>" +
          "<tr><td>Number of strands</td><td>Two (double-stranded)</td><td>One (single-stranded)</td></tr>" +
          "<tr><td>Pentose sugar</td><td>Deoxyribose</td><td>Ribose</td></tr>" +
          "<tr><td>Nitrogenous bases</td><td>A, T, G, C</td><td>A, U, G, C</td></tr></table>" +
          "<p><strong>Ribose versus deoxyribose.</strong> Both are five-carbon sugars in a ring. Ribose has an –OH group on carbon 2′, where deoxyribose has only –H (it has \"lost one oxygen\", which is what \"deoxy\" means). You should be able to sketch this difference.</p>" +
          "<p><strong>Examples of nucleic acids.</strong> Be familiar with DNA (for example, in chromosomes) and different types of RNA such as messenger RNA (mRNA), transfer RNA (tRNA) and ribosomal RNA (rRNA). Their roles are studied in more detail in Theme D.</p>",
          "<table><tr><th>特徴</th><th>DNA</th><th>RNA</th></tr>" +
          "<tr><td>鎖の数</td><td>2本 (2本鎖)</td><td>1本 (1本鎖)</td></tr>" +
          "<tr><td>五炭糖</td><td>デオキシリボース</td><td>リボース</td></tr>" +
          "<tr><td>窒素を含む塩基</td><td>A、T、G、C</td><td>A、U、G、C</td></tr></table>" +
          "<p><strong>リボースとデオキシリボース。</strong>どちらも環状の炭素5個の糖です。リボースは2′位の炭素に –OH 基をもち、デオキシリボースにはそこに –H しかありません (「酸素が1つ失われている」というのが「デオキシ」の意味です)。この違いをスケッチできるようにします。</p>" +
          "<p><strong>核酸の例。</strong>DNA (たとえば染色体の DNA) と、伝令 RNA (messenger RNA, mRNA)、転移 RNA (transfer RNA, tRNA)、リボソーム RNA (ribosomal RNA, rRNA) などの RNA の種類に慣れておきます。それぞれの働きはテーマ D でさらに詳しく学びます。</p>",
          "<table><tr><th>特徵</th><th>DNA</th><th>RNA</th></tr>" +
          "<tr><td>鏈的數目</td><td>兩條 (雙鏈)</td><td>一條 (單鏈)</td></tr>" +
          "<tr><td>戊糖</td><td>脫氧核糖</td><td>核糖</td></tr>" +
          "<tr><td>含氮鹼基</td><td>A、T、G、C</td><td>A、U、G、C</td></tr></table>" +
          "<p><strong>核糖與脫氧核糖。</strong>兩者都是環狀的五碳糖。核糖在 2′ 位碳上有 –OH 基團，而脫氧核糖該處只有 –H (「脫氧」即「少了一個氧」)。你應能繪出這個差異的簡圖。</p>" +
          "<p><strong>核酸的例子。</strong>要熟悉 DNA (例如染色體中的 DNA) 和不同類型的 RNA，如信使 RNA (messenger RNA, mRNA)、轉運 RNA (transfer RNA, tRNA) 和核糖體 RNA (ribosomal RNA, rRNA)。它們的功能會在主題 D 中詳細學習。</p>")
      },
      {
        ref: "A1.2.8",
        ahl: false,
        heading: L("Complementary base pairing: copying and using information", "相補的塩基対形成：情報の複製と発現", "互補鹼基配對：複製和表達資訊"),
        body: L(
          "<p>Complementarity means that each base can only pair with one partner. This is because of hydrogen bonding: the shapes and charges of A and T (and of G and C) line up so that hydrogen bonds can form between them, but not between other combinations.</p>" +
          "<p>This allows genetic information to be:</p>" +
          "<ul><li><strong>Replicated</strong> (copied) before cell division. Each strand of DNA can be a template. New nucleotides pair with the exposed bases, so the new strand has the complementary sequence and two identical DNA molecules result.</li>" +
          "<li><strong>Expressed</strong> (used). In making RNA (transcription), the base sequence of a gene is copied by complementary pairing into RNA. In making proteins (translation), the bases of a tRNA pair with the bases of mRNA.</li></ul>" +
          "<p>Because pairing is so specific, copying errors are rare. This is how DNA structure supports accurate replication.</p>",
          "<p>相補性とは、各塩基が1種類の相手としか対をつくれないという意味です。これは水素結合によります。A と T (および G と C) は形と電荷がうまくそろい、水素結合ができますが、他の組み合わせではできません。</p>" +
          "<p>これにより、遺伝情報は次のように扱えます。</p>" +
          "<ul><li>細胞分裂の前に<strong>複製 (replicate)</strong> (コピー) される。DNA の各鎖が鋳型 (template) になります。新しいヌクレオチドが露出した塩基と対をつくるので、新しい鎖は相補的な配列をもち、同じ DNA 分子が2つできます。</li>" +
          "<li><strong>発現 (express)</strong> (利用) される。RNA をつくる (転写 (transcription)) ときには、遺伝子の塩基配列が相補的な対形成によって RNA にコピーされます。タンパク質をつくる (翻訳 (translation)) ときには、tRNA の塩基が mRNA の塩基と対をつくります。</li></ul>" +
          "<p>対形成が非常に特異的なので、コピーの誤りはまれです。これが DNA の構造が正確な複製を支える仕組みです。</p>",
          "<p>互補性是指每種鹼基只能與一種鹼基配對。這是由氫鍵決定的：A 與 T (以及 G 與 C) 的形狀和電荷互相吻合，能形成氫鍵，而其他組合則不能。</p>" +
          "<p>這使遺傳資訊可以被：</p>" +
          "<ul><li><strong>複製 (replicate)</strong>：在細胞分裂前複製。DNA 的每條鏈都可作為模板 (template)。新的核苷酸與暴露的鹼基配對，所以新鏈具有互補序列，得到兩個相同的 DNA 分子。</li>" +
          "<li><strong>表達 (express)</strong>：被使用。製造 RNA (轉錄 (transcription)) 時，基因的鹼基序列藉互補配對複製成 RNA。製造蛋白質 (翻譯 (translation)) 時，tRNA 的鹼基與 mRNA 的鹼基配對。</li></ul>" +
          "<p>由於配對非常專一，複製錯誤很少。這就是 DNA 的結構如何支持準確複製。</p>")
      },
      {
        ref: "A1.2.9",
        ahl: false,
        heading: L("Unlimited information in DNA", "DNA がもつ無限の情報容量", "DNA 的無限資訊容量"),
        body: L(
          "<p>DNA molecules can be any length, and the four bases can be in any order. So the number of possible sequences is enormous.</p>" +
          "<p>With 4 possible bases at each position, a sequence of <em>n</em> bases has 4<sup><em>n</em></sup> possible sequences. For example, a length of 10 bases has 4<sup>10</sup> = 1 048 576 possible sequences.</p>" +
          "<p>This is why there is no limit to the information DNA can store. It is also very economical: a huge amount of information is stored in a very small space, using just four bases.</p>",
          "<p>DNA 分子はどんな長さにもなり、4種類の塩基はどんな順序にも並べられます。したがって、可能な配列の数は膨大です。</p>" +
          "<p>各位置に4種類の塩基が入りうるので、<em>n</em> 個の塩基の配列には 4<sup><em>n</em></sup> 通りの配列があります。たとえば、10塩基の長さでは 4<sup>10</sup> = 1 048 576 通りです。</p>" +
          "<p>だから DNA が蓄えられる情報には限りがありません。また非常に経済的で、たった4種類の塩基を使って、膨大な量の情報を非常に小さな空間に蓄えます。</p>",
          "<p>DNA 分子可以是任何長度，四種鹼基可以按任何次序排列，因此可能的序列數目極其龐大。</p>" +
          "<p>每個位置有 4 種可能的鹼基，所以 <em>n</em> 個鹼基的序列有 4<sup><em>n</em></sup> 種可能。例如，長度為 10 個鹼基有 4<sup>10</sup> = 1 048 576 種可能序列。</p>" +
          "<p>因此 DNA 能儲存的資訊沒有上限。它也非常精簡：只用四種鹼基，就在極小的空間內儲存大量資訊。</p>")
      },
      {
        ref: "A1.2.10",
        ahl: false,
        heading: L("The genetic code is shared by all life", "遺伝暗号はすべての生物に共通", "遺傳密碼為所有生物共用"),
        body: L(
          "<p>The meaning of the base code is almost the same in all organisms. A group of three bases codes for the same amino acid in bacteria, plants and animals. (There are a few minor exceptions, so we say the code is conserved or \"nearly universal\".)</p>" +
          "<p><strong>Why this is evidence for common ancestry.</strong> If different groups of life had arisen separately, we would expect them to use different codes. Sharing one code is best explained if all living things inherited it from a <strong>universal common ancestor</strong>.</p>" +
          "<p>You are not required to memorize any specific examples.</p>",
          "<p>塩基の暗号の意味は、ほぼすべての生物で同じです。3つの塩基の組は、細菌でも植物でも動物でも同じアミノ酸を指定します (ごくわずかな例外があるので、暗号は保存されている、または「ほぼ共通」といいます)。</p>" +
          "<p><strong>これが共通祖先の証拠になる理由。</strong>異なる生物群が別々に生じたのなら、異なる暗号を使うと予想されます。1つの暗号を共有していることは、すべての生物が<strong>共通の祖先 (universal common ancestor)</strong> から受け継いだと考えるのが最もよく説明できます。</p>" +
          "<p>具体的な例を暗記する必要はありません。</p>",
          "<p>鹼基密碼的意義在幾乎所有生物中都相同。三個鹼基的組合在細菌、植物和動物中，都編碼同一種氨基酸。(有少數細微的例外，所以我們說密碼是保守的或「近乎通用」。)</p>" +
          "<p><strong>為何這是共同祖先的證據。</strong>如果不同生物類群各自獨立出現，我們會預期它們使用不同的密碼。所有生物共用同一套密碼，最好的解釋是它們都從<strong>共同祖先 (universal common ancestor)</strong> 遺傳而來。</p>" +
          "<p>不需要記住任何具體例子。</p>"),
        examTip: L(
          "A good answer links the observation (one shared code) to the conclusion (common ancestry) with a reason (separate origins would be expected to give different codes).",
          "良い解答は、観察 (1つの共有された暗号) と結論 (共通祖先) を、理由 (別々の起源なら異なる暗号が予想される) でつなぎます。",
          "好的答案要把觀察 (共用一套密碼) 與結論 (共同祖先) 用理由連起來 (若起源各自獨立，預期會有不同密碼)。")
      },
      {
        ref: "A1.2.11",
        ahl: true,
        heading: L("Directionality: 5′ and 3′ ends (AHL)", "方向性：5′末端と3′末端 (AHL)", "方向性：5′ 端與 3′ 端 (AHL)"),
        body: L(
          "<p>The carbon atoms of the pentose sugar are numbered 1′ to 5′ (say \"one prime\"). In a nucleotide:</p>" +
          "<ul><li>the <strong>phosphate</strong> is attached to carbon <strong>5′</strong>;</li>" +
          "<li>the <strong>base</strong> is attached to carbon 1′;</li>" +
          "<li>carbon <strong>3′</strong> has an –OH group, which is where the next nucleotide is joined.</li></ul>" +
          "<p>In the sugar–phosphate backbone, the phosphate on the 5′ carbon of one nucleotide links to the 3′ carbon of the previous nucleotide. These are the <strong>5′ to 3′ linkages</strong>. So every strand has direction:</p>" +
          "<ul><li>a <strong>5′ end</strong> (a free phosphate group);</li>" +
          "<li>a <strong>3′ end</strong> (a free –OH on carbon 3′).</li></ul>" +
          "<p>The two strands of DNA are antiparallel: one runs 5′→3′ and the other 3′→5′.</p>" +
          "<p><strong>Why direction matters.</strong> The enzymes that make nucleic acids can only add new nucleotides to the 3′ end of a growing strand. So new strands are always built in the 5′→3′ direction:</p>" +
          "<ul><li><strong>Replication:</strong> a new DNA strand is made 5′→3′ using the old strand as template.</li>" +
          "<li><strong>Transcription:</strong> RNA is made 5′→3′ from a DNA template.</li>" +
          "<li><strong>Translation:</strong> the ribosome reads the mRNA in the 5′→3′ direction.</li></ul>",
          "<p>五炭糖の炭素原子には、1′から5′ (「ワンプライム」と読む) まで番号が付いています。ヌクレオチドでは、</p>" +
          "<ul><li><strong>リン酸</strong>は炭素<strong>5′</strong>に結合し、</li>" +
          "<li><strong>塩基</strong>は炭素1′に結合し、</li>" +
          "<li>炭素<strong>3′</strong>には –OH 基があり、次のヌクレオチドがつながる場所になります。</li></ul>" +
          "<p>糖−リン酸骨格では、あるヌクレオチドの5′炭素のリン酸が、前のヌクレオチドの3′炭素とつながります。これが <strong>5′→3′ の結合</strong>です。したがって、どの鎖にも方向があります。</p>" +
          "<ul><li><strong>5′末端</strong> (遊離のリン酸基)</li>" +
          "<li><strong>3′末端</strong> (3′炭素の遊離の –OH)</li></ul>" +
          "<p>DNA の2本の鎖は逆平行です。一方は 5′→3′、もう一方は 3′→5′ に走ります。</p>" +
          "<p><strong>方向が重要な理由。</strong>核酸をつくる酵素は、伸びていく鎖の3′末端にしか新しいヌクレオチドを付け加えられません。そのため、新しい鎖は常に 5′→3′ の方向につくられます。</p>" +
          "<ul><li><strong>複製 (replication)：</strong>新しい DNA 鎖は、古い鎖を鋳型として 5′→3′ につくられる。</li>" +
          "<li><strong>転写 (transcription)：</strong>RNA は DNA を鋳型として 5′→3′ につくられる。</li>" +
          "<li><strong>翻訳 (translation)：</strong>リボソームは mRNA を 5′→3′ の方向に読む。</li></ul>",
          "<p>戊糖的碳原子編號為 1′ 至 5′ (讀作「一撇」)。在核苷酸中：</p>" +
          "<ul><li><strong>磷酸</strong>連接在碳 <strong>5′</strong> 上；</li>" +
          "<li><strong>鹼基</strong>連接在碳 1′ 上；</li>" +
          "<li>碳 <strong>3′</strong> 有一個 –OH 基團，下一個核苷酸便連接在這裏。</li></ul>" +
          "<p>在糖−磷酸骨架中，一個核苷酸 5′ 碳上的磷酸與前一個核苷酸的 3′ 碳連接，這就是 <strong>5′ 至 3′ 連接</strong>。因此每條鏈都有方向：</p>" +
          "<ul><li><strong>5′ 端</strong> (游離的磷酸基團)；</li>" +
          "<li><strong>3′ 端</strong> (3′ 碳上游離的 –OH)。</li></ul>" +
          "<p>DNA 的兩條鏈是反向平行的：一條由 5′→3′，另一條由 3′→5′。</p>" +
          "<p><strong>為何方向重要。</strong>製造核酸的酶只能把新的核苷酸加到正在延長的鏈的 3′ 端，所以新鏈總是按 5′→3′ 方向合成：</p>" +
          "<ul><li><strong>複製 (replication)：</strong>以舊鏈為模板，按 5′→3′ 合成新的 DNA 鏈。</li>" +
          "<li><strong>轉錄 (transcription)：</strong>以 DNA 為模板，按 5′→3′ 合成 RNA。</li>" +
          "<li><strong>翻譯 (translation)：</strong>核糖體按 5′→3′ 方向讀取 mRNA。</li></ul>"),
        examTip: L(
          "When you label a diagram, the 5′ end of a strand is the end with the free phosphate and the 3′ end is the end with the free –OH. On two antiparallel strands the labels are opposite each other.",
          "図に記入するとき、鎖の5′末端は遊離のリン酸のある端、3′末端は遊離の –OH のある端です。逆平行の2本の鎖では、記号は互いに反対になります。",
          "標示圖時，鏈的 5′ 端是有游離磷酸的一端，3′ 端是有游離 –OH 的一端。在兩條反向平行的鏈上，標示方向剛好相反。")
      },
      {
        ref: "A1.2.12",
        ahl: true,
        heading: L("Purines, pyrimidines and helix stability (AHL)", "プリン・ピリミジンと二重らせんの安定性 (AHL)", "嘌呤、嘧啶與螺旋穩定性 (AHL)"),
        body: L(
          "<p>The bases come in two types:</p>" +
          "<ul><li><strong>Purines</strong> have a double ring: adenine (A) and guanine (G).</li>" +
          "<li><strong>Pyrimidines</strong> have a single ring: cytosine (C), thymine (T) and uracil (U).</li></ul>" +
          "<p>In DNA, every base pair is one purine joined to one pyrimidine: A–T and G–C. The two types of pair have the <strong>same length</strong>. So the two backbones stay the same distance apart along the whole molecule, whatever the base sequence. The three-dimensional shape of the helix is the same everywhere, which keeps the DNA helix stable.</p>" +
          "<p>(A purine paired with a purine would be too wide, and a pyrimidine with a pyrimidine too narrow.)</p>",
          "<p>塩基には2つのタイプがあります。</p>" +
          "<ul><li><strong>プリン (purine)</strong> は二重の環をもつ：アデニン (A) とグアニン (G)。</li>" +
          "<li><strong>ピリミジン (pyrimidine)</strong> は単一の環をもつ：シトシン (C)、チミン (T)、ウラシル (U)。</li></ul>" +
          "<p>DNA では、すべての塩基対が、プリン1つとピリミジン1つの組み合わせ (A–T と G–C) です。2種類の対は<strong>同じ長さ</strong>です。そのため、塩基配列にかかわらず、2本の骨格は分子全体で同じ距離を保ちます。二重らせんの立体構造はどこでも同じになり、DNA らせんが安定します。</p>" +
          "<p>(プリンとプリンの対では幅が広すぎ、ピリミジンとピリミジンの対では狭すぎます。)</p>",
          "<p>鹼基有兩種類型：</p>" +
          "<ul><li><strong>嘌呤 (purine)</strong> 有雙環結構：腺嘌呤 (A) 和鳥嘌呤 (G)。</li>" +
          "<li><strong>嘧啶 (pyrimidine)</strong> 有單環結構：胞嘧啶 (C)、胸腺嘧啶 (T) 和尿嘧啶 (U)。</li></ul>" +
          "<p>在 DNA 中，每個鹼基對都是一個嘌呤配一個嘧啶：A–T 和 G–C。兩種鹼基對的<strong>長度相同</strong>，所以不論鹼基序列如何，兩條骨架之間的距離在整個分子上都保持一致。螺旋的三維結構處處相同，使 DNA 螺旋保持穩定。</p>" +
          "<p>(嘌呤與嘌呤配對會太寬，嘧啶與嘧啶配對則太窄。)</p>")
      },
      {
        ref: "A1.2.13",
        ahl: true,
        heading: L("The nucleosome (AHL)", "ヌクレオソーム (AHL)", "核小體 (AHL)"),
        body: L(
          "<p>In eukaryotes, DNA is wound around proteins called <strong>histones</strong>. The basic unit of this packaging is the <strong>nucleosome</strong>. The guide limits you to this structure:</p>" +
          "<ul><li>a DNA molecule wrapped around a <strong>core of eight histone proteins</strong>;</li>" +
          "<li>an <strong>additional histone protein</strong> attached to the <strong>linker DNA</strong> (the DNA between one nucleosome and the next). It holds the whole structure together.</li></ul>" +
          "<p>Histones are positively charged and DNA is negatively charged (because of its phosphate groups), so they attract each other.</p>" +
          "<p><strong>Skill: molecular visualization.</strong> The guide requires you to use molecular visualization software to study how the proteins and DNA associate in a nucleosome. One free option is the 3D viewer on the RCSB Protein Data Bank website: search for a nucleosome structure (for example, entry 1KX5). Rotate the model and look at how the DNA wraps around the core of eight histones, and which parts of the histones touch the DNA. (Entry 1KX5 shows the core only, without the extra histone or linker DNA.) The software and entry names are only suggestions; you will not be examined on them.</p>",
          "<p>真核生物では、DNA は<strong>ヒストン (histone)</strong> というタンパク質に巻き付いています。この梱包の基本単位が<strong>ヌクレオソーム (nucleosome)</strong> です。ガイドが求めるのは次の構造に限られます。</p>" +
          "<ul><li>8個のヒストンタンパク質の<strong>核 (コア)</strong> に巻き付いた DNA 分子</li>" +
          "<li><strong>リンカー DNA (linker DNA)</strong> (ヌクレオソームと次のヌクレオソームの間の DNA) に付いた<strong>追加のヒストンタンパク質</strong>。全体の構造を保持します。</li></ul>" +
          "<p>ヒストンは正に帯電し、DNA は (リン酸基のため) 負に帯電しているので、互いに引き合います。</p>" +
          "<p><strong>スキル：分子の可視化。</strong>ガイドは、分子可視化ソフトウェア (molecular visualization software) を使って、ヌクレオソームの中でタンパク質と DNA がどのように結びついているかを調べることを求めています。無料の方法の1つは、RCSB タンパク質構造データバンク (Protein Data Bank) のウェブサイトの3Dビューアーです。ヌクレオソームの構造 (たとえばエントリー 1KX5) を検索します。モデルを回転させ、DNA が8個のヒストンの核にどのように巻き付いているか、ヒストンのどの部分が DNA に接しているかを観察します。(1KX5 は核の部分だけで、追加のヒストンやリンカー DNA は含みません。) ソフトウェアやエントリーの名前は一例にすぎず、試験には出ません。</p>",
          "<p>在真核生物中，DNA 纏繞在稱為<strong>組蛋白 (histone)</strong> 的蛋白質上。這種包裝的基本單位是<strong>核小體 (nucleosome)</strong>。課程指引把範圍限於以下結構：</p>" +
          "<ul><li>一條 DNA 分子纏繞在由<strong>八個組蛋白組成的核心</strong>上；</li>" +
          "<li>一個<strong>額外的組蛋白</strong>連接在<strong>連接 DNA (linker DNA)</strong> (兩個核小體之間的 DNA) 上，把整個結構固定在一起。</li></ul>" +
          "<p>組蛋白帶正電荷，DNA 因磷酸基團而帶負電荷，所以彼此吸引。</p>" +
          "<p><strong>技能：分子視覺化。</strong>課程指引要求你使用分子視覺化軟件 (molecular visualization software)，研究核小體中蛋白質與 DNA 如何結合。其中一個免費方法是 RCSB 蛋白質數據庫 (Protein Data Bank) 網站上的 3D 檢視器：搜尋核小體結構 (例如條目 1KX5)。旋轉模型，觀察 DNA 如何纏繞由八個組蛋白組成的核心，以及組蛋白哪些部分接觸 DNA。(1KX5 只顯示核心，沒有額外的組蛋白和連接 DNA。) 軟件和條目名稱只是建議，考試不會考。</p>"),
        examTip: L(
          "The guide's limit is \"DNA wrapped around eight histones, with an extra histone on the linker DNA\". Learn that sentence and be able to label it on a diagram.",
          "ガイドの限定は「8個のヒストンに DNA が巻き付き、リンカー DNA に追加のヒストンが付く」です。この一文を覚え、図に記入できるようにしましょう。",
          "課程指引的範圍是「DNA 纏繞八個組蛋白，並在連接 DNA 上有一個額外組蛋白」。要記住這句話，並能在圖上標示。")
      },
      {
        ref: "A1.2.14",
        ahl: true,
        heading: L("Hershey–Chase experiment (AHL)", "ハーシー・チェイスの実験 (AHL)", "赫爾希−蔡斯實驗 (AHL)"),
        body: L(
          "<p>In the 1940s many scientists thought protein might be the genetic material, because proteins are so varied. In 1952 Alfred Hershey and Martha Chase tested this using a <strong>bacteriophage</strong> (a virus that infects bacteria). A phage is made of just DNA and a protein coat.</p>" +
          "<p><strong>Method</strong></p>" +
          "<ol><li>Grow one batch of phages with <strong>radioactive sulfur (<sup>35</sup>S)</strong>. Sulfur is in protein but not in DNA, so only the protein coat is labelled.</li>" +
          "<li>Grow another batch with <strong>radioactive phosphorus (<sup>32</sup>P)</strong>. Phosphorus is in DNA (in the phosphate groups) but there is very little in protein, so DNA is labelled.</li>" +
          "<li>Let each batch infect bacteria (<em>E. coli</em>).</li>" +
          "<li>Blend the mixture to shake the phage coats off the outside of the bacteria, then spin it in a centrifuge. Bacteria form a pellet at the bottom, and the lighter empty phage coats stay in the liquid above.</li>" +
          "<li>Measure the radioactivity in the pellet and in the liquid.</li></ol>" +
          "<p><strong>Results and conclusion</strong></p>" +
          "<ul><li>With <sup>35</sup>S, most radioactivity was in the liquid (outside the bacteria): the protein stayed outside.</li>" +
          "<li>With <sup>32</sup>P, most radioactivity was in the pellet (inside the bacteria), and new phages made by the bacteria contained some <sup>32</sup>P.</li>" +
          "<li>So <strong>DNA</strong>, not protein, entered the bacteria and carried the information needed to make new phages. DNA is the genetic material.</li></ul>" +
          "<p><strong>Nature of science.</strong> The experiment became possible only when radioisotopes were available as research tools. Technological developments can open up new possibilities for experiments.</p>",
          "<p>1940年代、タンパク質は種類が非常に多いため、遺伝物質はタンパク質かもしれないと考える科学者が多くいました。1952年、アルフレッド・ハーシーとマーサ・チェイスは、<strong>バクテリオファージ (bacteriophage)</strong> (細菌に感染するウイルス) を使ってこれを検証しました。ファージは DNA とタンパク質の殻だけでできています。</p>" +
          "<p><strong>方法</strong></p>" +
          "<ol><li>1つのファージ群を<strong>放射性の硫黄 (<sup>35</sup>S)</strong> の存在下で育てる。硫黄はタンパク質に含まれ DNA には含まれないので、タンパク質の殻だけが標識される。</li>" +
          "<li>別のファージ群を<strong>放射性のリン (<sup>32</sup>P)</strong> の存在下で育てる。リンは DNA に (リン酸基として) 含まれるが、タンパク質にはごくわずかしかないので、DNA が標識される。</li>" +
          "<li>それぞれのファージ群を細菌 (大腸菌 <em>E. coli</em>) に感染させる。</li>" +
          "<li>混合液をミキサーで撹拌して、ファージの殻を細菌の外側から振り落とし、遠心分離機にかける。細菌は底に沈殿 (ペレット) し、軽い空のファージの殻は上の液に残る。</li>" +
          "<li>沈殿と上の液の放射能を測定する。</li></ol>" +
          "<p><strong>結果と結論</strong></p>" +
          "<ul><li><sup>35</sup>S では、放射能の大部分は上の液 (細菌の外) にあった。タンパク質は外に残った。</li>" +
          "<li><sup>32</sup>P では、放射能の大部分は沈殿 (細菌の内側) にあり、細菌がつくった新しいファージにも <sup>32</sup>P が含まれていた。</li>" +
          "<li>したがって、細菌に入り、新しいファージをつくるのに必要な情報を運んだのは、タンパク質ではなく <strong>DNA</strong> である。DNA が遺伝物質である。</li></ul>" +
          "<p><strong>科学の本質 (NOS)。</strong>この実験は、放射性同位体が研究の道具として使えるようになって初めて可能になりました。技術の発展は、実験の新しい可能性を開きます。</p>",
          "<p>1940 年代，由於蛋白質種類繁多，許多科學家認為遺傳物質可能是蛋白質。1952 年，阿弗雷德·赫爾希 (Alfred Hershey) 和瑪莎·蔡斯 (Martha Chase) 利用<strong>噬菌體 (bacteriophage)</strong> (感染細菌的病毒) 來檢驗這一點。噬菌體只由 DNA 和蛋白質外殼組成。</p>" +
          "<p><strong>方法</strong></p>" +
          "<ol><li>用<strong>放射性硫 (<sup>35</sup>S)</strong> 培養一批噬菌體。硫存在於蛋白質而不在 DNA 中，所以只有蛋白質外殼被標記。</li>" +
          "<li>用<strong>放射性磷 (<sup>32</sup>P)</strong> 培養另一批噬菌體。磷存在於 DNA (磷酸基團) 中，蛋白質中則極少，所以 DNA 被標記。</li>" +
          "<li>讓每批噬菌體感染細菌 (大腸桿菌 <em>E. coli</em>)。</li>" +
          "<li>用攪拌器攪拌混合物，把噬菌體外殼從細菌外面振落，然後放入離心機。細菌沉在底部成為沉澱，較輕的空噬菌體外殼留在上層液體中。</li>" +
          "<li>量度沉澱和液體中的放射性。</li></ol>" +
          "<p><strong>結果與結論</strong></p>" +
          "<ul><li>使用 <sup>35</sup>S 時，大部分放射性在液體中 (細菌外)：蛋白質留在外面。</li>" +
          "<li>使用 <sup>32</sup>P 時，大部分放射性在沉澱中 (細菌內)，而且細菌製造的新噬菌體也含有一些 <sup>32</sup>P。</li>" +
          "<li>因此進入細菌並攜帶製造新噬菌體所需資訊的是 <strong>DNA</strong>，而不是蛋白質。DNA 是遺傳物質。</li></ul>" +
          "<p><strong>科學本質 (NOS)。</strong>只有當放射性同位素可作為研究工具後，這個實驗才得以進行。科技的發展可以開拓實驗的新可能。</p>"),
        examTip: L(
          "Say clearly which part was labelled with which isotope and why (S is in protein only, P is in DNA). Then link the location of the radioactivity (inside or outside the bacteria) to the conclusion.",
          "どの部分がどの同位体で標識されたか、そしてその理由 (S はタンパク質のみ、P は DNA に含まれる) を明確に書きます。そのうえで、放射能の場所 (細菌の内か外か) を結論に結びつけます。",
          "要清楚說明哪一部分以哪種同位素標記及原因 (S 只在蛋白質中，P 在 DNA 中)，再把放射性所在位置 (細菌內或外) 與結論連起來。")
      },
      {
        ref: "A1.2.15",
        ahl: true,
        heading: L("Chargaff's data (AHL)", "シャルガフのデータ (AHL)", "查加夫的數據 (AHL)"),
        body: L(
          "<p>In the late 1940s Erwin Chargaff measured the amounts of the four bases in DNA from many different organisms. His findings:</p>" +
          "<ul><li>The <strong>proportions of the four bases differ between species</strong>. The DNA of one species does not have the same percentages of A, T, G and C as another species.</li>" +
          "<li>In every species, the amount of <strong>A is about equal to T</strong>, and the amount of <strong>G is about equal to C</strong>.</li>" +
          "<li>So the total of purines (A + G) is about equal to the total of pyrimidines (C + T) in all species.</li></ul>" +
          "<p>These data were later explained by base pairing: A pairs with T and G with C, so they are present in equal numbers in double-stranded DNA.</p>" +
          "<p><strong>Nature of science: falsification.</strong> Before Chargaff, the <em>tetranucleotide hypothesis</em> said that DNA was a simple repeating sequence of the four bases, so all DNA would have equal amounts of A, T, G and C. Chargaff's data <strong>falsified</strong> it, because the amounts of the bases differ between species.</p>" +
          "<p>This illustrates the <em>problem of induction</em>: however many observations agree with a general claim, they cannot prove it is true. But a single reliable observation that disagrees can show that it is false. This is the \"certainty of falsification\".</p>",
          "<p>1940年代の終わりごろ、エルヴィン・シャルガフは、さまざまな生物の DNA に含まれる4種類の塩基の量を測定しました。その発見は次のとおりです。</p>" +
          "<ul><li><strong>4種類の塩基の割合は種によって異なる</strong>。ある種の DNA は、別の種とは A、T、G、C の割合が同じではない。</li>" +
          "<li>どの種でも、<strong>A の量は T とほぼ等しく</strong>、<strong>G の量は C とほぼ等しい</strong>。</li>" +
          "<li>したがって、すべての種で、プリンの合計 (A + G) はピリミジンの合計 (C + T) とほぼ等しい。</li></ul>" +
          "<p>これらのデータは、のちに塩基対形成で説明されました。A は T と、G は C と対をつくるので、2本鎖 DNA では同数存在するのです。</p>" +
          "<p><strong>科学の本質：反証 (falsification)。</strong>シャルガフ以前には、<em>テトラヌクレオチド仮説 (tetranucleotide hypothesis)</em> があり、DNA は4種類の塩基の単純な繰り返し配列で、どの DNA も A、T、G、C を同量含むとされていました。塩基の量が種によって異なるというシャルガフのデータは、この仮説を<strong>反証</strong>しました。</p>" +
          "<p>これは<em>帰納の問題 (problem of induction)</em> を示しています。一般的な主張に合う観察がどれだけ多くても、その主張が真であることは証明できません。しかし、合わない信頼できる観察が1つあれば、その主張が偽であることを示せます。これが「反証の確実性」です。</p>",
          "<p>1940 年代後期，埃爾溫·查加夫 (Erwin Chargaff) 量度了許多不同生物 DNA 中四種鹼基的含量。他的發現：</p>" +
          "<ul><li><strong>四種鹼基的比例在不同物種之間不同</strong>。一個物種 DNA 中 A、T、G、C 的百分比與另一物種並不相同。</li>" +
          "<li>在每個物種中，<strong>A 的含量約等於 T</strong>，<strong>G 的含量約等於 C</strong>。</li>" +
          "<li>因此在所有物種中，嘌呤總量 (A + G) 約等於嘧啶總量 (C + T)。</li></ul>" +
          "<p>這些數據後來由鹼基配對解釋：A 與 T 配對、G 與 C 配對，所以在雙鏈 DNA 中數量相等。</p>" +
          "<p><strong>科學本質：證偽 (falsification)。</strong>在查加夫之前，<em>四核苷酸假說 (tetranucleotide hypothesis)</em> 認為 DNA 是四種鹼基的簡單重複序列，所以所有 DNA 都含有等量的 A、T、G、C。查加夫的數據<strong>證偽</strong>了這個假說，因為鹼基的含量在不同物種間不同。</p>" +
          "<p>這說明了<em>歸納問題 (problem of induction)</em>：無論有多少觀察符合某個一般性主張，都不能證明它是真的；但只要有一個可靠的觀察與之不符，就能證明它是假的。這就是「證偽的確定性」。</p>"),
        examTip: L(
          "Two separate points to learn: the species differ in base proportions (against the tetranucleotide idea) and within each species A ≈ T and G ≈ C (a clue to base pairing).",
          "覚える点は2つあります。種によって塩基の割合が異なること (テトラヌクレオチド仮説に反する)、そして各種の中では A ≈ T、G ≈ C であること (塩基対形成の手がかり) です。",
          "要記住兩點：不同物種的鹼基比例不同 (反駁四核苷酸假說)，而在每個物種內 A ≈ T、G ≈ C (鹼基配對的線索)。")
      }
    ],

    keyTerms: [
      { term: L("nucleotide", "ヌクレオチド", "核苷酸"), def: L("The monomer of nucleic acids: a phosphate, a pentose sugar and a nitrogenous base.", "核酸の単量体。リン酸、五炭糖、窒素を含む塩基からなる。", "核酸的單體：由一個磷酸、一個戊糖和一個含氮鹼基組成。"), ahl: false },
      { term: L("nitrogenous base", "窒素を含む塩基", "含氮鹼基"), def: L("The part of a nucleotide that carries the code: adenine, thymine, cytosine, guanine (DNA) or uracil (RNA, instead of thymine).", "ヌクレオチドの中で暗号を担う部分。アデニン、チミン、シトシン、グアニン (DNA)、または (チミンの代わりに) ウラシル (RNA)。", "核苷酸中攜帶密碼的部分：腺嘌呤、胸腺嘧啶、胞嘧啶、鳥嘌呤 (DNA)，或尿嘧啶 (RNA 中取代胸腺嘧啶)。"), ahl: false },
      { term: L("sugar–phosphate backbone", "糖−リン酸骨格", "糖−磷酸骨架"), def: L("The strong chain of covalently bonded sugars and phosphates running along each nucleic acid strand.", "各核酸鎖に沿って走る、糖とリン酸が共有結合でつながった強い鎖。", "沿每條核酸鏈延伸、由糖和磷酸以共價鍵連成的堅固長鏈。"), ahl: false },
      { term: L("condensation reaction", "縮合反応", "縮合反應"), def: L("A reaction that joins two molecules and releases a molecule of water.", "2つの分子をつなぎ、水の分子を1つ放出する反応。", "把兩個分子連接起來並釋出一分子水的反應。"), ahl: false },
      { term: L("complementary base pairing", "相補的塩基対形成", "互補鹼基配對"), def: L("A pairs with T (or U in RNA) and G pairs with C, held by hydrogen bonds.", "A は T (RNA では U) と、G は C と、水素結合で対をつくること。", "A 與 T (RNA 中為 U) 配對，G 與 C 配對，由氫鍵連接。"), ahl: false },
      { term: L("antiparallel", "逆平行", "反向平行"), def: L("Running in opposite directions, as the two strands of DNA do.", "DNA の2本の鎖のように、互いに逆向きに走ること。", "走向相反，如 DNA 的兩條鏈。"), ahl: false },
      { term: L("double helix", "二重らせん", "雙螺旋"), def: L("The shape of DNA: two strands twisted around each other.", "DNA の形。2本の鎖が互いにねじれ合っている。", "DNA 的形狀：兩條鏈互相纏繞。"), ahl: false },
      { term: L("ribose / deoxyribose", "リボース / デオキシリボース", "核糖／脫氧核糖"), def: L("The pentose sugars of RNA and DNA. Deoxyribose has one fewer oxygen atom (–H instead of –OH on carbon 2′).", "RNA と DNA の五炭糖。デオキシリボースは酸素が1つ少ない (2′位の炭素が –OH ではなく –H)。", "RNA 和 DNA 的戊糖。脫氧核糖少一個氧原子 (2′ 位碳上是 –H 而不是 –OH)。"), ahl: false },
      { term: L("5′ and 3′ ends", "5′末端・3′末端", "5′ 端與 3′ 端"), def: L("The two ends of a nucleic acid strand: the 5′ end has a free phosphate on carbon 5′, the 3′ end has a free –OH on carbon 3′. New nucleotides are added to the 3′ end.", "核酸鎖の2つの端。5′末端は5′炭素に遊離のリン酸をもち、3′末端は3′炭素に遊離の –OH をもつ。新しいヌクレオチドは3′末端に付加される。", "核酸鏈的兩端：5′ 端在 5′ 碳上有游離磷酸，3′ 端在 3′ 碳上有游離 –OH。新的核苷酸加在 3′ 端。"), ahl: true },
      { term: L("purine / pyrimidine", "プリン / ピリミジン", "嘌呤／嘧啶"), def: L("Purines (A, G) have a double ring; pyrimidines (C, T, U) have a single ring. Each DNA base pair is one purine with one pyrimidine.", "プリン (A、G) は二重の環、ピリミジン (C、T、U) は単一の環をもつ。DNA の各塩基対は、プリン1つとピリミジン1つ。", "嘌呤 (A、G) 有雙環，嘧啶 (C、T、U) 有單環。DNA 的每個鹼基對由一個嘌呤與一個嘧啶組成。"), ahl: true },
      { term: L("nucleosome", "ヌクレオソーム", "核小體"), def: L("DNA wrapped around a core of eight histone proteins, with an additional histone on the linker DNA.", "8個のヒストンタンパク質の核に DNA が巻き付き、リンカー DNA に追加のヒストンが付いたもの。", "DNA 纏繞在由八個組蛋白組成的核心上，連接 DNA 上有一個額外的組蛋白。"), ahl: true },
      { term: L("histone", "ヒストン", "組蛋白"), def: L("A positively charged protein that DNA wraps around in eukaryotes.", "真核生物で DNA が巻き付く、正に帯電したタンパク質。", "真核生物中供 DNA 纏繞、帶正電荷的蛋白質。"), ahl: true },
      { term: L("Hershey–Chase experiment", "ハーシー・チェイスの実験", "赫爾希−蔡斯實驗"), def: L("An experiment using bacteriophages labelled with 35S (protein) or 32P (DNA) which showed that DNA enters bacteria and is the genetic material.", "35S (タンパク質) または 32P (DNA) で標識したバクテリオファージを使い、DNA が細菌に入り遺伝物質であることを示した実験。", "利用以 35S (蛋白質) 或 32P (DNA) 標記的噬菌體，證明 DNA 進入細菌並且是遺傳物質的實驗。"), ahl: true },
      { term: L("Chargaff's data", "シャルガフのデータ", "查加夫的數據"), def: L("Measurements showing that base proportions differ between species but A ≈ T and G ≈ C within each species.", "塩基の割合は種によって異なるが、各種の中では A ≈ T、G ≈ C であることを示した測定結果。", "顯示鹼基比例因物種而異，但在每個物種內 A ≈ T、G ≈ C 的測量結果。"), ahl: true }
    ],

    misconceptions: [
      {
        wrong: L("The two strands of DNA are held together by covalent bonds between the bases.", "DNA の2本の鎖は、塩基どうしの共有結合で結ばれている。", "DNA 的兩條鏈由鹼基之間的共價鍵連接。"),
        right: L("Bases are joined by weak hydrogen bonds. Covalent bonds are in the sugar–phosphate backbone of each strand.", "塩基どうしは弱い水素結合でつながっています。共有結合は各鎖の糖−リン酸骨格にあります。", "鹼基之間由弱的氫鍵連接。共價鍵存在於每條鏈的糖−磷酸骨架中。")
      },
      {
        wrong: L("A pairs with U in DNA.", "DNA では A は U と対をつくる。", "DNA 中 A 與 U 配對。"),
        right: L("DNA has thymine, not uracil. A pairs with T in DNA. Uracil takes the place of thymine in RNA.", "DNA にはウラシルではなくチミンがあります。DNA では A は T と対をつくります。RNA ではチミンの代わりにウラシルがあります。", "DNA 含胸腺嘧啶而非尿嘧啶，所以 DNA 中 A 與 T 配對。RNA 中尿嘧啶取代胸腺嘧啶。")
      },
      {
        wrong: L("Deoxyribose has an extra oxygen compared with ribose.", "デオキシリボースはリボースより酸素が1つ多い。", "脫氧核糖比核糖多一個氧。"),
        right: L("\"Deoxy\" means \"without oxygen\": deoxyribose has one oxygen fewer (–H instead of –OH at carbon 2′).", "「デオキシ」は「酸素がない」という意味で、デオキシリボースは酸素が1つ少ない (2′位の炭素で –OH ではなく –H) のです。", "「脫氧」即「少了氧」：脫氧核糖少一個氧 (2′ 位碳上是 –H 而不是 –OH)。")
      },
      {
        wrong: L("The genetic code is different in each species, so DNA from one species would be meaningless in another.", "遺伝暗号は種ごとに異なるので、ある種の DNA は別の種では意味をなさない。", "每個物種的遺傳密碼不同，所以一個物種的 DNA 在另一物種中毫無意義。"),
        right: L("The code is almost the same in all life, which is evidence for common ancestry.", "暗号はほぼすべての生物で同じで、これは共通祖先の証拠です。", "密碼在幾乎所有生物中都相同，這是共同祖先的證據。")
      },
      {
        wrong: L("(AHL) The Hershey–Chase experiment proved that DNA is the genetic material beyond any doubt for ever.", "(AHL) ハーシー・チェイスの実験は、DNA が遺伝物質であることを疑いの余地なく永遠に証明した。", "(AHL) 赫爾希−蔡斯實驗無可置疑地、永遠地證明了 DNA 是遺傳物質。"),
        right: L("Its results strongly support the conclusion that DNA, not protein, is the genetic material. Evidence in science supports conclusions; it does not give absolute proof.", "その結果は、タンパク質ではなく DNA が遺伝物質であるという結論を強く支持します。科学では、証拠は結論を支持するもので、絶対的な証明を与えるものではありません。", "其結果有力地支持「遺傳物質是 DNA 而不是蛋白質」這個結論。科學中的證據是支持結論，而不是提供絕對證明。")
      }
    ],

    beyondSyllabus: [
      L("You do not need to memorize the number of hydrogen bonds in A–T and G–C pairs, or the relative lengths of the purine and pyrimidine bases (A1.2.6).", "A–T と G–C の対にある水素結合の数や、プリンとピリミジンの塩基の相対的な長さを暗記する必要はありません (A1.2.6)。", "你不需要記住 A–T 和 G–C 鹼基對的氫鍵數目，也不需要記住嘌呤與嘧啶的相對長度 (A1.2.6)。"),
      L("You do not need to draw the chemical ring structures of the bases; in nucleotide and DNA diagrams the guide asks for circles, pentagons and rectangles. The one exception is the sugars: you should be able to sketch the difference between ribose and deoxyribose (–OH or –H on carbon 2′) (A1.2.7). You do not need to draw the twisted helix shape.", "塩基の化学的な環構造を描く必要はありません。ヌクレオチドや DNA の図でガイドが求めるのは円・五角形・長方形です。例外は糖で、リボースとデオキシリボースの違い (2′位の炭素の –OH か –H か) はスケッチできるようにします (A1.2.7)。ねじれたらせん形を描く必要はありません。", "你不需要畫出鹼基的化學環結構；在核苷酸和 DNA 圖中，課程指引要求的是圓形、五邊形和長方形。唯一例外是糖：你應能繪出核糖與脫氧核糖的差異 (2′ 位碳上是 –OH 還是 –H) (A1.2.7)。不需要畫出扭曲的螺旋形狀。"),
      L("You do not need to know the structure of nucleosides, other DNA forms (A-DNA, Z-DNA), major and minor grooves, or the history of the Watson and Crick model.", "ヌクレオシドの構造、他の型の DNA (A 型、Z 型)、大きな溝と小さな溝、ワトソンとクリックのモデルの歴史は必要ありません。", "你不需要知道核苷的結構、其他形式的 DNA (A-DNA、Z-DNA)、大溝和小溝，或華生與克里克模型的歷史。"),
      L("You do not need the names of the individual histones (H2A, H2B, H3, H4, H1) or the number of base pairs wrapped around a nucleosome. The guide limits you to eight histones plus one extra on the linker DNA. Other roles of histones are not needed for this subtopic: histones in DNA supercoiling are taught in D2.1 (Cell and nuclear division) and histone methylation in D2.2 (Gene expression).", "個々のヒストンの名称 (H2A、H2B、H3、H4、H1) や、ヌクレオソームに巻き付く塩基対の数は必要ありません。ガイドの限定は、8個のヒストンと、リンカー DNA 上の追加の1個です。ヒストンのほかの役割はこのサブトピックでは不要です。DNA の超らせん化 (supercoiling) におけるヒストンは D2.1 (細胞分裂と核分裂)、ヒストンのメチル化は D2.2 (遺伝子発現) で学びます。", "你不需要知道個別組蛋白的名稱 (H2A、H2B、H3、H4、H1)，或纏繞核小體的鹼基對數目。課程指引限定為八個組蛋白，加上連接 DNA 上的一個額外組蛋白。組蛋白的其他功能在此子課題不需要：組蛋白在 DNA 超螺旋 (supercoiling) 中的作用在 D2.1 (細胞分裂與核分裂) 學習，組蛋白甲基化則在 D2.2 (基因表達) 學習。"),
      L("Not needed for this subtopic: the DNA replication enzymes (helicase, DNA polymerase) and the details of transcription and translation. A1.2 only needs complementary base pairing and 5′→3′ direction. The enzymes are taught in D1.1 (DNA replication) and transcription and translation in D1.2 (Protein synthesis).", "このサブトピックでは不要：DNA 複製の酵素 (ヘリカーゼ、DNA ポリメラーゼ) や転写・翻訳の詳細。A1.2 で必要なのは相補的塩基対形成と 5′→3′ の方向性だけです。酵素は D1.1 (DNA の複製)、転写と翻訳は D1.2 (タンパク質合成) で学びます。", "此子課題不需要：DNA 複製酶 (解旋酶、DNA 聚合酶)，以及轉錄和翻譯的細節。A1.2 只需要互補鹼基配對和 5′→3′ 方向。這些酶在 D1.1 (DNA 複製) 學習，轉錄和翻譯則在 D1.2 (蛋白質合成) 學習。"),
      L("You do not need to know other experiments on the genetic material (such as Griffith's or Avery's), or the details of Franklin's X-ray diffraction images. The AHL experiments you need are Hershey–Chase and Chargaff's data.", "遺伝物質に関する他の実験 (グリフィスやエイブリーの実験など) や、フランクリンの X 線回折像の詳細は必要ありません。AHL で必要な実験は、ハーシー・チェイスの実験とシャルガフのデータです。", "你不需要知道其他有關遺傳物質的實驗 (如格里菲斯或埃弗里的實驗)，也不需要富蘭克林 X 光衍射圖像的細節。AHL 需要的實驗是赫爾希−蔡斯實驗和查加夫的數據。")
    ],

    links: [
      { to: "A2.1", why: L("RNA as a presumed first genetic material, and the universal genetic code as evidence for a last universal common ancestor.", "最初の遺伝物質と推定される RNA と、最終共通祖先の証拠としての普遍的な遺伝暗号。", "RNA 被推測為最早的遺傳物質，而通用遺傳密碼是最後共同祖先的證據。") },
      { to: "A4.1", why: L("Differences in DNA and RNA base sequences are evidence for evolution and common ancestry.", "DNA や RNA の塩基配列の違いは、進化と共通祖先の証拠になる。", "DNA 和 RNA 鹼基序列的差異是進化和共同祖先的證據。") },
      { to: "B1.1", why: L("Condensation reactions build polymers: polysaccharides, polypeptides and nucleic acids.", "縮合反応でポリマーがつくられる。多糖、ポリペプチド、核酸。", "縮合反應建成聚合物：多糖、多肽和核酸。") },
      { to: "B1.2", why: L("The sequence of bases in DNA codes for the sequence of amino acids in a polypeptide.", "DNA の塩基配列が、ポリペプチドのアミノ酸配列を指定する。", "DNA 的鹼基序列決定多肽的氨基酸序列。") },
      { to: "A1.1", why: L("Hydrogen bonds are weak attractions that hold water molecules together and also hold the two DNA strands together.", "水素結合は、水分子どうしを結びつけ、DNA の2本の鎖も結びつける弱い引力である。", "氫鍵是微弱的吸引力，既把水分子連在一起，也把 DNA 的兩條鏈連在一起。") }
    ],

    natureOfScience: [
      L("Technological developments open up new possibilities for experiments. The Hershey–Chase experiment only became possible when radioisotopes were available to scientists as research tools. (A1.2.14)", "技術の発展は、実験の新しい可能性を開く。ハーシー・チェイスの実験は、放射性同位体が研究の道具として科学者に利用できるようになって初めて可能になった。(A1.2.14)", "科技發展開拓實驗的新可能。只有當放射性同位素可供科學家作為研究工具後，赫爾希−蔡斯實驗才得以進行。(A1.2.14)"),
      L("The problem of induction is addressed by the certainty of falsification. Chargaff's data falsified the tetranucleotide hypothesis that DNA was a repeating sequence of the four bases. (A1.2.15)", "帰納の問題は、反証の確実性によって扱われる。シャルガフのデータは、DNA が4種類の塩基の繰り返し配列であるというテトラヌクレオチド仮説を反証した。(A1.2.15)", "歸納問題由證偽的確定性來處理。查加夫的數據證偽了「DNA 是四種鹼基重複序列」的四核苷酸假說。(A1.2.15)")
    ],

    questions: [
      {
        id: "a1-2-q01", type: "mcq", ahl: false, difficulty: 1, ref: "A1.2.2", paper: "1A",
        stem: L("Which three components make up one nucleotide of DNA?", "DNA の1つのヌクレオチドを構成する3つの成分はどれか。", "下列哪三種成分組成一個 DNA 核苷酸？"),
        options: [
          L("Phosphate, deoxyribose and a nitrogenous base", "リン酸、デオキシリボース、窒素を含む塩基", "磷酸、脫氧核糖和含氮鹼基"),
          L("Phosphate, ribose and a nitrogenous base", "リン酸、リボース、窒素を含む塩基", "磷酸、核糖和含氮鹼基"),
          L("Amino group, carboxyl group and an R group", "アミノ基、カルボキシ基、R 基", "氨基、羧基和 R 基"),
          L("Glycerol, a phosphate and two fatty acids", "グリセロール、リン酸、2つの脂肪酸", "甘油、磷酸和兩個脂肪酸")
        ],
        answer: 0,
        explanation: L(
          "A is correct. B is the tempting wrong answer: ribose is the sugar of RNA, not DNA. C is an amino acid. D is a phospholipid.",
          "A が正解です。B は引っかかりやすい誤りで、リボースは RNA の糖であり DNA の糖ではありません。C はアミノ酸、D はリン脂質です。",
          "答案是 A。B 是容易誤選的答案：核糖是 RNA 的糖，不是 DNA 的糖。C 是氨基酸，D 是磷脂。")
      },
      {
        id: "a1-2-q02", type: "mcq", ahl: false, difficulty: 1, ref: "A1.2.3", paper: "1A",
        stem: L("What makes up the sugar–phosphate backbone of a DNA strand?", "DNA 鎖の糖−リン酸骨格をつくっているのは何か。", "DNA 鏈的糖−磷酸骨架由什麼組成？"),
        options: [
          L("Sugars and phosphates joined by covalent bonds", "共有結合でつながった糖とリン酸", "以共價鍵連接的糖和磷酸"),
          L("Bases joined to each other by hydrogen bonds", "水素結合で互いにつながった塩基", "以氫鍵互相連接的鹼基"),
          L("Sugars and bases joined by hydrogen bonds", "水素結合でつながった糖と塩基", "以氫鍵連接的糖和鹼基"),
          L("Phosphates joined to bases by ionic bonds", "イオン結合で塩基につながったリン酸", "以離子鍵連接鹼基的磷酸")
        ],
        answer: 0,
        explanation: L(
          "A is correct: the backbone is a continuous chain of alternating sugars and phosphates, joined by strong covalent bonds. B describes the link between the two strands. C and D put the wrong parts and bonds together.",
          "A が正解です。骨格は、糖とリン酸が交互に並んだ連続した鎖で、強い共有結合でつながっています。B は2本の鎖の間の結合の説明です。C と D は部品と結合の組み合わせが誤りです。",
          "答案是 A：骨架是糖與磷酸交替排列的連續鏈，由堅固的共價鍵連接。B 描述的是兩條鏈之間的連接。C 和 D 把部件和化學鍵配錯了。")
      },
      {
        id: "a1-2-q03", type: "short", ahl: false, difficulty: 1, ref: "A1.2.2", paper: "2",
        commandTerm: "Draw", marks: 3,
        stem: L("Draw a diagram of one nucleotide using the shapes recommended by the guide. Label each part.", "ガイドが推奨する図形を使って、1つのヌクレオチドの図を描け。各部分に名前を付けよ。", "用課程指引建議的形狀畫出一個核苷酸的圖，並標示各部分名稱。"),
        markscheme: [
          L("Circle labelled phosphate", "円に「リン酸」と記す", "圓形標示為磷酸"),
          L("Pentagon labelled (pentose) sugar [accept deoxyribose or ribose]", "五角形に「(五炭) 糖」と記す [デオキシリボースまたはリボースも可]", "五邊形標示為 (戊) 糖 [接受脫氧核糖或核糖]"),
          L("Rectangle labelled (nitrogenous) base, with the phosphate and base both joined to the sugar", "長方形に「(窒素を含む) 塩基」と記し、リン酸と塩基の両方が糖につながっている", "長方形標示為 (含氮) 鹼基，而磷酸和鹼基都與糖連接")
        ],
        modelAnswer: L(
          "A circle (phosphate) joined to a pentagon (sugar), with a rectangle (base) joined to a different side of the pentagon. All three shapes are labelled.",
          "円 (リン酸) が五角形 (糖) につながり、長方形 (塩基) が五角形の別の側につながっている。3つの図形すべてに名前が付いている。",
          "一個圓形 (磷酸) 連接五邊形 (糖)，長方形 (鹼基) 連接在五邊形的另一側。三個形狀都有標示。")
      },
      {
        id: "a1-2-q04", type: "short", ahl: false, difficulty: 2, ref: "A1.2.6", paper: "2",
        commandTerm: "Draw", marks: 4,
        stem: L("Draw a diagram to show the structure of two antiparallel strands of DNA with four base pairs. You do not need to show the helix.", "4つの塩基対をもつ、逆平行な2本の DNA 鎖の構造を図示せよ。らせんの形は描かなくてよい。", "繪畫圖解，顯示有四個鹼基對的兩條反向平行 DNA 鏈的結構。不需要畫出螺旋。"),
        markscheme: [
          L("Two sugar–phosphate backbones drawn as two lines/chains of alternating circles and pentagons", "2本の糖−リン酸骨格を、円と五角形が交互に並ぶ2本の線／鎖として描いている", "兩條糖−磷酸骨架畫成由圓形和五邊形交替排列的兩條線／鏈"),
          L("Strands shown running in opposite directions (antiparallel), e.g. with arrows or 5′/3′ labels", "鎖が逆向きに走っている (逆平行) ことが、矢印や 5′/3′ 記号などで示されている", "顯示兩條鏈走向相反 (反向平行)，例如用箭頭或 5′／3′ 標示"),
          L("Bases drawn as rectangles between the strands, with A opposite T and G opposite C", "塩基が鎖の間の長方形として描かれ、A の向かいが T、G の向かいが C になっている", "鹼基畫成兩鏈之間的長方形，A 對 T、G 對 C"),
          L("Hydrogen bonds drawn as dashed lines between the paired bases", "対になった塩基の間に水素結合が破線で描かれている", "配對鹼基之間以虛線畫出氫鍵")
        ],
        modelAnswer: L(
          "Two vertical backbones of alternating circles (phosphate) and pentagons (sugar), one with an arrow pointing up and the other pointing down. Four rectangles join the strands in pairs, A–T, T–A, G–C and C–G, with dashed lines between the bases to show hydrogen bonds.",
          "円 (リン酸) と五角形 (糖) が交互に並ぶ2本の縦の骨格。一方は上向き、もう一方は下向きの矢印を付ける。4つの長方形が鎖を対にしてつなぎ、A–T、T–A、G–C、C–G とし、塩基の間に水素結合を示す破線を引く。",
          "兩條由圓形 (磷酸) 和五邊形 (糖) 交替排列的垂直骨架，一條箭頭向上，另一條箭頭向下。四個長方形把兩鏈成對連接，為 A–T、T–A、G–C 和 C–G，鹼基之間用虛線表示氫鍵。")
      },
      {
        id: "a1-2-q05", type: "match", ahl: false, difficulty: 1, ref: "A1.2.2–6", paper: "1A",
        stem: L("Match each structure or bond to its role in DNA.", "DNA における各構造または結合を、その役割と対応させよ。", "把 DNA 中每種結構或化學鍵與其功用配對。"),
        pairs: [
          { left: L("Phosphate", "リン酸", "磷酸"), right: L("Joins to the sugar of the next nucleotide in the backbone", "骨格で次のヌクレオチドの糖とつながる", "在骨架中與下一個核苷酸的糖連接") },
          { left: L("Nitrogenous base", "窒素を含む塩基", "含氮鹼基"), right: L("Carries the code", "暗号を担う", "攜帶密碼") },
          { left: L("Hydrogen bond", "水素結合", "氫鍵"), right: L("Holds complementary bases together between the two strands", "2本の鎖の間で相補的な塩基をつなぎとめる", "在兩條鏈之間把互補鹼基連在一起") },
          { left: L("Covalent sugar–phosphate bond", "糖−リン酸の共有結合", "糖−磷酸共價鍵"), right: L("Makes the strong backbone of each strand", "各鎖の強い骨格をつくる", "構成每條鏈的堅固骨架") }
        ],
        explanation: L(
          "Covalent bonds make each strand strong; weak hydrogen bonds join the two strands and can be separated when DNA is copied.",
          "共有結合は各鎖を強くし、弱い水素結合は2本の鎖をつなぎ、DNA がコピーされるときには引き離せます。",
          "共價鍵使每條鏈堅固；弱的氫鍵連接兩條鏈，在 DNA 複製時可被拉開。")
      },
      {
        id: "a1-2-q06", type: "mcq", ahl: false, difficulty: 1, ref: "A1.2.7", paper: "1A",
        stem: L("Which row correctly compares DNA with RNA?", "DNA と RNA を正しく比較している行はどれか。", "哪一行正確比較 DNA 與 RNA？"),
        options: [
          L("DNA: two strands, deoxyribose, thymine. RNA: one strand, ribose, uracil.", "DNA：2本鎖、デオキシリボース、チミン。RNA：1本鎖、リボース、ウラシル。", "DNA：兩條鏈、脫氧核糖、胸腺嘧啶。RNA：一條鏈、核糖、尿嘧啶。"),
          L("DNA: one strand, deoxyribose, uracil. RNA: two strands, ribose, thymine.", "DNA：1本鎖、デオキシリボース、ウラシル。RNA：2本鎖、リボース、チミン。", "DNA：一條鏈、脫氧核糖、尿嘧啶。RNA：兩條鏈、核糖、胸腺嘧啶。"),
          L("DNA: two strands, ribose, thymine. RNA: one strand, deoxyribose, uracil.", "DNA：2本鎖、リボース、チミン。RNA：1本鎖、デオキシリボース、ウラシル。", "DNA：兩條鏈、核糖、胸腺嘧啶。RNA：一條鏈、脫氧核糖、尿嘧啶。"),
          L("DNA: two strands, deoxyribose, uracil. RNA: one strand, ribose, thymine.", "DNA：2本鎖、デオキシリボース、ウラシル。RNA：1本鎖、リボース、チミン。", "DNA：兩條鏈、脫氧核糖、尿嘧啶。RNA：一條鏈、核糖、胸腺嘧啶。")
        ],
        answer: 0,
        explanation: L(
          "A is correct. B, C and D each swap one or more features. D is the tempting one because it gets the strands and sugars right but swaps the bases.",
          "A が正解です。B、C、D は特徴を1つ以上入れ替えています。D は鎖の数と糖が正しく塩基だけが入れ替わっているので、引っかかりやすい選択肢です。",
          "答案是 A。B、C、D 都調換了一項或多項特徵。D 最具迷惑性，因為鏈和糖都對，只是鹼基調換了。")
      },
      {
        id: "a1-2-q07", type: "short", ahl: false, difficulty: 2, ref: "A1.2.7", paper: "2",
        commandTerm: "Distinguish", marks: 3,
        stem: L("Distinguish between the structure of DNA and the structure of RNA.", "DNA の構造と RNA の構造を区別せよ。", "區分 DNA 與 RNA 的結構。"),
        markscheme: [
          L("DNA is double-stranded but RNA is single-stranded", "DNA は2本鎖だが、RNA は1本鎖である", "DNA 是雙鏈，RNA 是單鏈"),
          L("DNA contains deoxyribose but RNA contains ribose", "DNA はデオキシリボースをもつが、RNA はリボースをもつ", "DNA 含脫氧核糖，RNA 含核糖"),
          L("DNA has the base thymine but RNA has uracil instead (both have A, G and C)", "DNA の塩基はチミンだが、RNA は代わりにウラシルをもつ (どちらも A、G、C をもつ)", "DNA 含胸腺嘧啶，RNA 則以尿嘧啶代替 (兩者都有 A、G、C)")
        ],
        modelAnswer: L(
          "DNA has two strands and RNA has one. DNA's sugar is deoxyribose, while RNA's is ribose. DNA contains thymine but RNA contains uracil in its place.",
          "DNA は2本鎖で RNA は1本鎖。DNA の糖はデオキシリボース、RNA の糖はリボース。DNA はチミンをもつが、RNA は代わりにウラシルをもつ。",
          "DNA 有兩條鏈，RNA 有一條。DNA 的糖是脫氧核糖，RNA 的糖是核糖。DNA 含胸腺嘧啶，而 RNA 以尿嘧啶取代。")
      },
      {
        id: "a1-2-q08", type: "mcq", ahl: false, difficulty: 1, ref: "A1.2.6", paper: "1A",
        stem: L("One strand of DNA has the base sequence A T T G C A. What is the sequence of the complementary strand (reading in the matching order)?", "DNA の一方の鎖の塩基配列が A T T G C A である。相補的な鎖の配列 (対応する順に読む) はどれか。", "DNA 一條鏈的鹼基序列為 A T T G C A。互補鏈的序列 (按對應次序讀) 是什麼？"),
        options: [
          L("T A A C G T", "T A A C G T", "T A A C G T"),
          L("U A A C G U", "U A A C G U", "U A A C G U"),
          L("T A A G C T", "T A A G C T", "T A A G C T"),
          L("A T T G C A", "A T T G C A", "A T T G C A")
        ],
        answer: 0,
        explanation: L(
          "A pairs with T and G pairs with C, giving T A A C G T. B uses uracil, which is not in DNA. C pairs G with G or C with C in places. D is a copy, not the complement.",
          "A は T と、G は C と対をつくるので T A A C G T になります。B は DNA にないウラシルを使っています。C は一部の塩基の対が誤りです。D は相補鎖ではなく同じ配列のコピーです。",
          "A 配 T、G 配 C，得出 T A A C G T。B 用了 DNA 中沒有的尿嘧啶。C 有些位置配對錯誤。D 是複本而不是互補序列。")
      },
      {
        id: "a1-2-q10", type: "short", ahl: false, difficulty: 2, ref: "A1.2.5", paper: "2",
        commandTerm: "Outline", marks: 3,
        stem: L("Outline how a polymer of RNA is formed from nucleotides.", "ヌクレオチドから RNA のポリマーがどのようにつくられるかを概説せよ。", "概述 RNA 聚合物如何由核苷酸形成。"),
        markscheme: [
          L("Nucleotides are joined by condensation reactions", "ヌクレオチドは縮合反応でつながる", "核苷酸以縮合反應連接"),
          L("The phosphate of one nucleotide bonds to the sugar of the next [accept covalent bond]", "あるヌクレオチドのリン酸が次のヌクレオチドの糖と結合する [共有結合も可]", "一個核苷酸的磷酸與下一個的糖結合 [接受共價鍵]"),
          L("A molecule of water is released at each bond, and repeating this builds the sugar–phosphate backbone", "各結合で水の分子が1つ放出され、これを繰り返して糖−リン酸骨格ができる", "每形成一個鍵就釋出一分子水，重複此過程建成糖−磷酸骨架")
        ],
        modelAnswer: L(
          "In a condensation reaction the phosphate of one nucleotide is covalently bonded to the sugar of the next, and water is released. Repeating this many times makes a single strand with a sugar–phosphate backbone.",
          "縮合反応で、あるヌクレオチドのリン酸が次のヌクレオチドの糖と共有結合し、水が放出される。これを何度も繰り返して、糖−リン酸骨格をもつ1本の鎖ができる。",
          "在縮合反應中，一個核苷酸的磷酸與下一個的糖以共價鍵結合，並釋出水。重複多次便形成具有糖−磷酸骨架的單鏈。")
      },
      {
        id: "a1-2-q11", type: "short", ahl: false, difficulty: 2, ref: "A1.2.8", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Explain how complementary base pairing allows DNA to be replicated accurately.", "相補的塩基対形成が、DNA の正確な複製をどのように可能にするかを説明せよ。", "解釋互補鹼基配對如何使 DNA 能準確複製。"),
        markscheme: [
          L("The two strands separate (hydrogen bonds between bases are broken) and each acts as a template", "2本の鎖が分かれ (塩基間の水素結合が切れ)、それぞれが鋳型になる", "兩條鏈分開 (鹼基之間的氫鍵斷開)，每條都作為模板"),
          L("Each base only pairs with its complementary base (A with T, G with C) through hydrogen bonding", "各塩基は、水素結合により相補的な塩基とだけ対をつくる (A は T、G は C)", "每種鹼基只會透過氫鍵與其互補鹼基配對 (A 與 T，G 與 C)"),
          L("So the new strand has a sequence determined by the template, giving two identical DNA molecules", "したがって新しい鎖の配列は鋳型で決まり、同じ DNA 分子が2つできる", "所以新鏈的序列由模板決定，產生兩個相同的 DNA 分子")
        ],
        modelAnswer: L(
          "The strands separate and each is used as a template. New nucleotides can only pair with a base on the template through hydrogen bonds: A with T and G with C. The sequence of each new strand is therefore fixed by the template, so two identical DNA molecules are made.",
          "鎖が分かれ、それぞれが鋳型として使われる。新しいヌクレオチドは、水素結合によって鋳型上の塩基と対をつくることしかできない (A は T、G は C)。したがって、各新しい鎖の配列は鋳型によって決まり、同じ DNA 分子が2つできる。",
          "兩條鏈分開，各自作為模板。新的核苷酸只能透過氫鍵與模板上的鹼基配對：A 與 T、G 與 C。因此每條新鏈的序列由模板決定，產生兩個相同的 DNA 分子。")
      },
      {
        id: "a1-2-q12", type: "short", ahl: false, difficulty: 2, ref: "A1.2.9", paper: "2",
        commandTerm: "Calculate", marks: 3,
        stem: L("A short length of DNA has 8 bases in a strand. (a) Calculate the number of different base sequences that are possible. (b) Explain why the capacity of DNA to store information has no upper limit.", "ある短い DNA の1本の鎖に8個の塩基がある。 (a) 可能な塩基配列の数を計算せよ。 (b) DNA が蓄えられる情報量に上限がない理由を説明せよ。", "一段 DNA 短鏈上有 8 個鹼基。 (a) 計算可能的鹼基序列數目。 (b) 解釋為何 DNA 儲存資訊的容量沒有上限。"),
        markscheme: [
          L("4 possible bases at each of 8 positions: 4⁸", "8つの位置のそれぞれに4種類の塩基が入りうる：4⁸", "8 個位置各有 4 種可能的鹼基：4⁸"),
          L("= 65 536", "= 65 536", "= 65 536"),
          L("DNA molecules can be any length and the bases can be in any order, so the number of possible sequences is unlimited", "DNA 分子はどんな長さにもなり、塩基はどんな順序にも並べられるので、可能な配列の数に限りがない", "DNA 分子可以是任何長度，鹼基可按任何次序排列，所以可能的序列數目沒有限制")
        ],
        modelAnswer: L(
          "(a) 4⁸ = 65 536 sequences. (b) A DNA molecule can be any length and its four bases can be arranged in any order, so there is no limit to the number of different sequences, and so no limit to the information stored.",
          "(a) 4⁸ = 65 536 通り。 (b) DNA 分子はどんな長さにもなり、4種類の塩基はどんな順序にも並べられるので、異なる配列の数に限りがなく、蓄えられる情報にも限りがない。",
          "(a) 4⁸ = 65 536 種序列。 (b) DNA 分子可以是任何長度，四種鹼基可按任何次序排列，所以不同序列的數目沒有限制，儲存的資訊也沒有限制。")
      },
      {
        id: "a1-2-q13", type: "mcq", ahl: false, difficulty: 2, ref: "A1.2.10", paper: "1A",
        stem: L("Which observation provides the best evidence that all living organisms share a common ancestor?", "すべての生物が共通の祖先をもつことの最もよい証拠となる観察はどれか。", "哪項觀察最能證明所有生物有共同祖先？"),
        options: [
          L("All organisms need water.", "すべての生物は水を必要とする。", "所有生物都需要水。"),
          L("DNA is double-stranded in all cells.", "すべての細胞で DNA は2本鎖である。", "所有細胞中的 DNA 都是雙鏈。"),
          L("The same triplets of bases code for the same amino acids in almost all organisms.", "ほぼすべての生物で、同じ3つ組の塩基が同じアミノ酸を指定する。", "在幾乎所有生物中，相同的三個鹼基組合都編碼相同的氨基酸。"),
          L("All organisms contain ribosomes of exactly the same size.", "すべての生物が、まったく同じ大きさのリボソームをもつ。", "所有生物都含有大小完全相同的核糖體。")
        ],
        answer: 2,
        explanation: L(
          "C is correct: a shared code is arbitrary, so it is best explained by inheritance from a common ancestor. A is true but could result from any origin of life. B is not true of all cells (and some viruses use RNA). D is not true: ribosomes differ in size between prokaryotes and eukaryotes.",
          "C が正解です。共有された暗号は恣意的なものなので、共通祖先からの遺伝で最もよく説明されます。A は事実ですが、生命がどのように始まったとしても起こりえます。B はすべての細胞には当てはまりません (また、RNA を使うウイルスもあります)。D は誤りで、リボソームの大きさは原核生物と真核生物で異なります。",
          "答案是 C：共用的密碼是任意的，最好的解釋是從共同祖先遺傳而來。A 正確，但無論生命如何起源都可能成立。B 不適用於所有細胞 (而且有些病毒使用 RNA)。D 不正確，原核生物與真核生物的核糖體大小不同。")
      },
      {
        id: "a1-2-q14", type: "mcq", ahl: false, difficulty: 3, ref: "A1.2.6–7", paper: "1A",
        data: L(
          "<p>Base composition of a nucleic acid from a virus (illustrative data).</p><table><tr><th>A</th><th>G</th><th>C</th><th>U</th><th>T</th></tr><tr><td>31%</td><td>19%</td><td>24%</td><td>26%</td><td>0%</td></tr></table>",
          "<p>あるウイルスの核酸の塩基組成 (架空のデータ)。</p><table><tr><th>A</th><th>G</th><th>C</th><th>U</th><th>T</th></tr><tr><td>31%</td><td>19%</td><td>24%</td><td>26%</td><td>0%</td></tr></table>",
          "<p>某病毒核酸的鹼基組成 (虛構數據)。</p><table><tr><th>A</th><th>G</th><th>C</th><th>U</th><th>T</th></tr><tr><td>31%</td><td>19%</td><td>24%</td><td>26%</td><td>0%</td></tr></table>"),
        stem: L("Which conclusion can be deduced from the data?", "このデータから導ける結論はどれか。", "從數據可推斷出哪項結論？"),
        options: [
          L("It is double-stranded DNA, because A is close to U.", "A が U に近いので、2本鎖 DNA である。", "因為 A 接近 U，所以是雙鏈 DNA。"),
          L("It is RNA, because it contains uracil, and probably single-stranded, because A ≠ U and G ≠ C.", "ウラシルを含むので RNA であり、A ≠ U かつ G ≠ C なので、おそらく1本鎖である。", "因為含尿嘧啶，所以是 RNA；又因為 A ≠ U 且 G ≠ C，所以很可能是單鏈。"),
          L("It is DNA, because the percentages add up to 100%.", "合計が100%なので、DNA である。", "因為百分比總和為 100%，所以是 DNA。"),
          L("It is double-stranded RNA, because it contains purines and pyrimidines.", "プリンとピリミジンを含むので、2本鎖 RNA である。", "因為含有嘌呤和嘧啶，所以是雙鏈 RNA。")
        ],
        answer: 1,
        explanation: L(
          "B is correct. U is found only in RNA. In double-stranded nucleic acid, A would equal U (or T) and G would equal C, because of base pairing; here they do not, so it is probably single-stranded. A is wrong because 31% is not equal to 26%. C is wrong because all nucleic acids total 100%. D is wrong because every nucleic acid has both types of base.",
          "B が正解です。U は RNA にしかありません。2本鎖の核酸では、塩基対形成により A は U (または T) と、G は C と等しくなるはずですが、ここでは等しくないので、おそらく1本鎖です。A は、31%と26%が等しくないので誤りです。C は、どの核酸でも合計は100%になるので誤りです。D は、どの核酸も両方のタイプの塩基をもつので誤りです。",
          "答案是 B。U 只存在於 RNA。在雙鏈核酸中，由於鹼基配對，A 應等於 U (或 T)，G 應等於 C；這裏並不相等，所以很可能是單鏈。A 錯誤，因為 31% 不等於 26%。C 錯誤，因為任何核酸的總和都是 100%。D 錯誤，因為所有核酸都含有兩類鹼基。")
      },
      {
        id: "a1-2-q15", type: "mcq", ahl: true, difficulty: 2, ref: "A1.2.11", paper: "1A",
        stem: L("A new DNA strand is made during replication. In which direction is it built?", "複製中に新しい DNA 鎖がつくられる。どの方向に合成されるか。", "複製過程中製造新的 DNA 鏈。它按哪個方向合成？"),
        options: [
          L("5′ to 3′, by adding nucleotides to the 3′ end", "5′から3′へ、3′末端にヌクレオチドを付加して", "5′ 至 3′，在 3′ 端加入核苷酸"),
          L("3′ to 5′, by adding nucleotides to the 5′ end", "3′から5′へ、5′末端にヌクレオチドを付加して", "3′ 至 5′，在 5′ 端加入核苷酸"),
          L("Either direction, depending on the base sequence", "塩基配列によって、どちらの方向にもなる", "視乎鹼基序列，兩個方向皆可"),
          L("From the middle of the strand outwards in both directions", "鎖の中央から両方向へ外側に向かって", "由鏈的中間向兩端同時合成")
        ],
        answer: 0,
        explanation: L(
          "A is correct: nucleotides can only be added to the free 3′ end, so strands grow 5′→3′. B reverses this and is the common mix-up (the template is read 3′→5′, but the new strand grows 5′→3′). C and D are not how the enzymes work.",
          "A が正解です。ヌクレオチドは遊離の3′末端にしか付加できないので、鎖は 5′→3′ に伸びます。B は逆で、よくある取り違えです (鋳型は 3′→5′ に読まれますが、新しい鎖は 5′→3′ に伸びます)。C と D は酵素の働き方ではありません。",
          "答案是 A：核苷酸只能加到游離的 3′ 端，所以鏈按 5′→3′ 延長。B 剛好相反，是常見的混淆 (模板按 3′→5′ 被讀取，但新鏈按 5′→3′ 延長)。C 和 D 不是酶的運作方式。")
      },
      {
        id: "a1-2-q16", type: "short", ahl: true, difficulty: 2, ref: "A1.2.12", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Explain how the bonding of purines to pyrimidines contributes to the stability of the DNA helix.", "プリンとピリミジンの結合が DNA らせんの安定性にどのように寄与するか説明せよ。", "解釋嘌呤與嘧啶的配對如何有助 DNA 螺旋的穩定。"),
        markscheme: [
          L("Each base pair is one purine (double ring: A or G) with one pyrimidine (single ring: T or C)", "各塩基対は、プリン (二重の環：A または G) 1つとピリミジン (単一の環：T または C) 1つからなる", "每個鹼基對由一個嘌呤 (雙環：A 或 G) 和一個嘧啶 (單環：T 或 C) 組成"),
          L("A–T and G–C pairs have the same length / width", "A–T と G–C の対は同じ長さ／幅である", "A–T 和 G–C 鹼基對的長度／寬度相同"),
          L("So the two backbones are always the same distance apart and the helix has the same 3D structure whatever the base sequence", "したがって2本の骨格は常に同じ距離に保たれ、塩基配列にかかわらずらせんは同じ立体構造をもつ", "所以兩條骨架之間的距離恆常相同，不論鹼基序列如何，螺旋都有相同的三維結構")
        ],
        modelAnswer: L(
          "Every base pair is a double-ringed purine joined to a single-ringed pyrimidine, so A–T and G–C pairs are the same length. The two sugar–phosphate backbones are therefore the same distance apart along the whole molecule, and the helix keeps the same regular three-dimensional shape whatever the sequence of bases.",
          "すべての塩基対は、二重環のプリンと単環のピリミジンの組み合わせなので、A–T と G–C の対は同じ長さである。したがって、2本の糖−リン酸骨格は分子全体で同じ距離を保ち、塩基配列にかかわらずらせんは同じ規則的な立体構造を保つ。",
          "每個鹼基對都是雙環的嘌呤與單環的嘧啶配對，所以 A–T 和 G–C 鹼基對長度相同。因此兩條糖−磷酸骨架在整個分子上相距相同，不論鹼基序列如何，螺旋都保持相同而規則的三維形狀。")
      },
      {
        id: "a1-2-q17", type: "multi", ahl: true, difficulty: 2, ref: "A1.2.13", paper: "1A",
        stem: L("Which statements about a nucleosome are correct? Select all that apply.", "ヌクレオソームについて正しい記述をすべて選べ。", "關於核小體，哪些陳述正確？(選出所有適用者)"),
        options: [
          L("DNA is wrapped around a core of eight histone proteins.", "DNA が8個のヒストンタンパク質の核に巻き付いている。", "DNA 纏繞在由八個組蛋白組成的核心上。"),
          L("An additional histone is attached to the linker DNA.", "追加のヒストンがリンカー DNA に付いている。", "一個額外的組蛋白連接在連接 DNA 上。"),
          L("The histone core is made of DNA.", "ヒストンの核は DNA でできている。", "組蛋白核心由 DNA 構成。"),
          L("Linker DNA is the DNA wrapped around the core.", "リンカー DNA とは、核に巻き付いている DNA のことである。", "連接 DNA 就是纏繞在核心上的 DNA。")
        ],
        answer: [0, 1],
        explanation: L(
          "A and B describe the guide's nucleosome. C is wrong because histones are proteins. D is wrong because linker DNA is the DNA between nucleosomes, not the wrapped part.",
          "A と B がガイドのヌクレオソームの説明です。C は誤りで、ヒストンはタンパク質です。D は誤りで、リンカー DNA はヌクレオソームの間の DNA であり、巻き付いている部分ではありません。",
          "A 和 B 描述了課程指引中的核小體。C 錯誤，組蛋白是蛋白質。D 錯誤，連接 DNA 是核小體之間的 DNA，而不是纏繞的部分。")
      },
      {
        id: "a1-2-q18", type: "order", ahl: true, difficulty: 2, ref: "A1.2.14", paper: "1A",
        stem: L("Put the steps of the Hershey–Chase experiment in order.", "ハーシー・チェイスの実験の手順を正しい順に並べよ。", "把赫爾希−蔡斯實驗的步驟按正確次序排列。"),
        items: [
          L("Bacteriophages are grown with 35S (labelling protein) or with 32P (labelling DNA).", "バクテリオファージを 35S (タンパク質を標識) または 32P (DNA を標識) とともに育てる。", "用 35S (標記蛋白質) 或 32P (標記 DNA) 培養噬菌體。"),
          L("The labelled phages are mixed with bacteria and infect them.", "標識したファージを細菌と混ぜ、感染させる。", "把已標記的噬菌體與細菌混合，使其感染細菌。"),
          L("The mixture is blended to remove phage coats from the outside of the bacteria.", "混合液を撹拌して、細菌の外側からファージの殻を取り除く。", "攪拌混合物，使噬菌體外殼從細菌外面脫落。"),
          L("The mixture is spun in a centrifuge so that bacteria form a pellet.", "混合液を遠心分離し、細菌を沈殿 (ペレット) にする。", "用離心機離心混合物，使細菌形成沉澱。"),
          L("Radioactivity in the pellet and the liquid is measured.", "沈殿と上の液の放射能を測定する。", "量度沉澱和液體中的放射性。")
        ],
        explanation: L(
          "The labelled phages have to be made first, then infect bacteria; blending removes the outside coats; centrifuging separates bacteria from coats; only then can radioactivity be measured.",
          "標識ファージを先につくり、それを細菌に感染させます。撹拌で外側の殻を取り除き、遠心分離で細菌と殻を分け、その後に初めて放射能を測定できます。",
          "必須先製備已標記的噬菌體，再讓它們感染細菌；攪拌除去外殼，離心把細菌與外殼分開，然後才能量度放射性。")
      },
      {
        id: "a1-2-q19", type: "short", ahl: true, difficulty: 3, ref: "A1.2.14", paper: "1B",
        commandTerm: "Deduce", marks: 5,
        data: L(
          "<p>Bacteriophages were labelled with <sup>35</sup>S or <sup>32</sup>P, allowed to infect bacteria, blended and centrifuged. The percentage of the total radioactivity found in the bacterial pellet and in the liquid above it was measured (illustrative data).</p><table><tr><th>Label</th><th>In liquid (outside bacteria) / %</th><th>In pellet (inside bacteria) / %</th></tr><tr><td><sup>35</sup>S</td><td>80</td><td>20</td></tr><tr><td><sup>32</sup>P</td><td>30</td><td>70</td></tr></table>",
          "<p>バクテリオファージを <sup>35</sup>S または <sup>32</sup>P で標識し、細菌に感染させ、撹拌して遠心分離した。細菌の沈殿と、その上の液に見られた全放射能の割合を測定した (架空のデータ)。</p><table><tr><th>標識</th><th>上の液 (細菌の外) / %</th><th>沈殿 (細菌の内) / %</th></tr><tr><td><sup>35</sup>S</td><td>80</td><td>20</td></tr><tr><td><sup>32</sup>P</td><td>30</td><td>70</td></tr></table>",
          "<p>用 <sup>35</sup>S 或 <sup>32</sup>P 標記噬菌體，讓它們感染細菌，攪拌後離心。量度在細菌沉澱和上層液體中找到的總放射性百分比 (虛構數據)。</p><table><tr><th>標記</th><th>在液體中 (細菌外) / %</th><th>在沉澱中 (細菌內) / %</th></tr><tr><td><sup>35</sup>S</td><td>80</td><td>20</td></tr><tr><td><sup>32</sup>P</td><td>30</td><td>70</td></tr></table>"),
        stem: L("(a) State which isotope labels the protein coat and which labels the DNA. (b) Deduce what the data show about the material that enters the bacteria. (c) Suggest why the results are not exactly 100% and 0%.", "(a) タンパク質の殻を標識する同位体と DNA を標識する同位体を、それぞれ述べよ。 (b) 細菌に入る物質について、このデータから何が導けるか推論せよ。 (c) 結果がちょうど 100% と 0% にならない理由を示せ。", "(a) 指出哪種同位素標記蛋白質外殼，哪種標記 DNA。 (b) 推斷數據顯示進入細菌的是什麼物質。 (c) 提出為何結果不是剛好 100% 和 0%。"),
        markscheme: [
          L("35S labels protein (sulfur is in protein, not in DNA)", "35S はタンパク質を標識する (硫黄はタンパク質にあり、DNA にはない)", "35S 標記蛋白質 (硫在蛋白質中，不在 DNA 中)"),
          L("32P labels DNA (phosphorus is in DNA phosphate groups)", "32P は DNA を標識する (リンは DNA のリン酸基にある)", "32P 標記 DNA (磷在 DNA 的磷酸基團中)"),
          L("Most 35S (80%) stayed outside the bacteria, so protein did not enter / mostly stayed outside", "35S の大部分 (80%) は細菌の外にとどまったので、タンパク質は入らなかった／ほとんど外に残った", "大部分 35S (80%) 留在細菌外，所以蛋白質沒有進入／大多留在外面"),
          L("Most 32P (70%) was inside the bacteria, so DNA enters the bacteria, supporting DNA as the genetic material", "32P の大部分 (70%) は細菌の内側にあったので、DNA が細菌に入る。DNA が遺伝物質であることを支持する", "大部分 32P (70%) 在細菌內，所以 DNA 進入細菌，支持 DNA 是遺傳物質"),
          L("Separation was incomplete (blending did not remove all coats / some phages had not yet injected DNA / some DNA left the bacteria)", "分離が不完全だった (撹拌がすべての殻を取り除けなかった／まだ DNA を注入していないファージがあった／一部の DNA が細菌から出た)", "分離不完全 (攪拌未能除去所有外殼／有些噬菌體尚未注入 DNA／有些 DNA 離開了細菌)")
        ],
        modelAnswer: L(
          "(a) 35S labels protein; 32P labels DNA. (b) Most of the 32P (70%) was in the bacteria but most of the 35S (80%) stayed outside, so DNA, not protein, enters the bacteria. This supports DNA as the genetic material. (c) Blending and centrifuging did not separate everything perfectly, for example some phage coats stayed attached to the bacteria and some DNA had not yet entered.",
          "(a) 35S がタンパク質、32P が DNA を標識する。 (b) 32P の大部分 (70%) は細菌内にあり、35S の大部分 (80%) は外にとどまったので、細菌に入るのはタンパク質ではなく DNA である。これは DNA が遺伝物質であることを支持する。 (c) 撹拌と遠心分離では完全には分離できず、たとえば一部のファージの殻が細菌に付着したままだったり、まだ DNA が入っていないものがあったりした。",
          "(a) 35S 標記蛋白質；32P 標記 DNA。 (b) 大部分 32P (70%) 在細菌內，而大部分 35S (80%) 留在外面，所以進入細菌的是 DNA 而不是蛋白質。這支持 DNA 是遺傳物質。 (c) 攪拌和離心未能完美分離所有東西，例如有些噬菌體外殼仍黏在細菌上，有些 DNA 尚未進入。")
      },
      {
        id: "a1-2-q20", type: "short", ahl: true, difficulty: 3, ref: "A1.2.15", paper: "1B",
        commandTerm: "Calculate", marks: 5,
        data: L(
          "<p>Percentage of each base in the DNA of three species (illustrative data).</p><table><tr><th>Species</th><th>A</th><th>T</th><th>G</th><th>C</th></tr><tr><td>P</td><td>29.7</td><td>30.3</td><td>20.1</td><td>19.9</td></tr><tr><td>Q</td><td>24.5</td><td>24.5</td><td>25.4</td><td>25.6</td></tr><tr><td>R</td><td>20.1</td><td>19.9</td><td>30.0</td><td>30.0</td></tr></table>",
          "<p>3つの種の DNA における各塩基の割合 (%) (架空のデータ)。</p><table><tr><th>種</th><th>A</th><th>T</th><th>G</th><th>C</th></tr><tr><td>P</td><td>29.7</td><td>30.3</td><td>20.1</td><td>19.9</td></tr><tr><td>Q</td><td>24.5</td><td>24.5</td><td>25.4</td><td>25.6</td></tr><tr><td>R</td><td>20.1</td><td>19.9</td><td>30.0</td><td>30.0</td></tr></table>",
          "<p>三個物種 DNA 中各種鹼基的百分比 (虛構數據)。</p><table><tr><th>物種</th><th>A</th><th>T</th><th>G</th><th>C</th></tr><tr><td>P</td><td>29.7</td><td>30.3</td><td>20.1</td><td>19.9</td></tr><tr><td>Q</td><td>24.5</td><td>24.5</td><td>25.4</td><td>25.6</td></tr><tr><td>R</td><td>20.1</td><td>19.9</td><td>30.0</td><td>30.0</td></tr></table>"),
        stem: L("(a) Calculate the ratio (A + G) : (T + C) for species P, to two decimal places. (b) Describe what the data show about A compared with T, and G compared with C, in each species. (c) The tetranucleotide hypothesis predicted that all four bases are present in equal amounts. Explain how the data falsify this hypothesis.", "(a) 種 P について、(A + G) : (T + C) の比を小数第2位まで計算せよ。 (b) 各種で A と T、G と C を比べて、データが示すことを述べよ。 (c) テトラヌクレオチド仮説は、4種類の塩基がすべて等量存在すると予測した。データがこの仮説をどのように反証するか説明せよ。", "(a) 計算物種 P 的 (A + G) : (T + C) 比值，答案取至小數點後兩位。 (b) 描述數據顯示每個物種中 A 與 T、G 與 C 的比較。 (c) 四核苷酸假說預測四種鹼基的含量相等。解釋數據如何證偽這個假說。"),
        markscheme: [
          L("(29.7 + 20.1) ÷ (30.3 + 19.9) = 49.8 ÷ 50.2 = 0.99", "(29.7 + 20.1) ÷ (30.3 + 19.9) = 49.8 ÷ 50.2 = 0.99", "(29.7 + 20.1) ÷ (30.3 + 19.9) = 49.8 ÷ 50.2 = 0.99"),
          L("In each species A is (almost) equal to T", "どの種でも、A は T とほぼ等しい", "每個物種中 A (幾乎) 等於 T"),
          L("In each species G is (almost) equal to C", "どの種でも、G は C とほぼ等しい", "每個物種中 G (幾乎) 等於 C"),
          L("If all four bases were equal, each would be about 25% in every species, but P has about 30% A/T and 20% G/C and R the reverse", "4種類の塩基がすべて等量なら、どの種でも各塩基は約25%のはずだが、P は A/T が約30%で G/C が約20%、R はその逆である", "若四種鹼基含量相等，每個物種中各約佔 25%，但 P 的 A/T 約 30%、G/C 約 20%，R 則相反"),
          L("The base proportions differ between species, so DNA is not a simple repeating sequence of the four bases", "塩基の割合は種によって異なるので、DNA は4種類の塩基の単純な繰り返し配列ではない", "鹼基比例因物種而異，所以 DNA 不是四種鹼基的簡單重複序列")
        ],
        modelAnswer: L(
          "(a) 49.8 ÷ 50.2 = 0.99. (b) In each species the percentage of A is almost the same as T, and G is almost the same as C. (c) If the hypothesis were true, every base would be about 25% in all species. P has about 30% A and T but only about 20% G and C, and R shows the opposite, so the base proportions differ between species and the hypothesis is falsified.",
          "(a) 49.8 ÷ 50.2 = 0.99。 (b) どの種でも、A の割合は T とほぼ同じで、G は C とほぼ同じである。 (c) 仮説が正しければ、すべての種で各塩基は約25%になるはずである。P は A と T が約30%、G と C は約20%しかなく、R はその逆なので、塩基の割合は種によって異なり、仮説は反証される。",
          "(a) 49.8 ÷ 50.2 = 0.99。 (b) 在每個物種中，A 的百分比與 T 幾乎相同，G 與 C 幾乎相同。 (c) 若假說成立，所有物種中每種鹼基都應約佔 25%。P 的 A 和 T 約 30%，G 和 C 只約 20%，R 則相反，所以鹼基比例因物種而異，假說被證偽。")
      },
      {
        id: "a1-2-q21", type: "short", ahl: true, difficulty: 3, ref: "A1.2.15", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Explain how Chargaff's data illustrate the way in which the \"problem of induction\" is addressed by the \"certainty of falsification\".", "シャルガフのデータが、「帰納の問題」が「反証の確実性」によってどのように扱われるかを、どのように示しているか説明せよ。", "解釋查加夫的數據如何說明「歸納問題」由「證偽的確定性」處理。"),
        markscheme: [
          L("Problem of induction: no number of observations that agree with a hypothesis can prove it is true (e.g. DNA from a few species fitting a repeating-sequence idea)", "帰納の問題：仮説に合う観察がいくつあっても、仮説が真であることは証明できない (例：少数の種の DNA が繰り返し配列の考えに合っても)", "歸納問題：無論有多少符合假說的觀察，都不能證明它是真的 (例如少數物種的 DNA 符合重複序列的想法)"),
          L("Chargaff found that base proportions differ between species, which does not fit the tetranucleotide hypothesis", "シャルガフは塩基の割合が種によって異なることを見いだし、これはテトラヌクレオチド仮説に合わない", "查加夫發現鹼基比例因物種而異，這與四核苷酸假說不符"),
          L("Evidence that disagrees can show with certainty that the hypothesis is false (falsification)", "合わない証拠は、仮説が偽であることを確実に示せる (反証)", "不符的證據可確定地顯示假說是假的 (證偽)")
        ],
        modelAnswer: L(
          "However many observations agree with an idea, they cannot prove it is true (the problem of induction). But one reliable observation that disagrees can show it is false. Chargaff showed that base proportions differ between species, which did not fit the tetranucleotide hypothesis, so he falsified it.",
          "ある考えに合う観察がどれだけあっても、それが真であることは証明できない (帰納の問題)。しかし、合わない信頼できる観察が1つあれば、それが偽であることを示せる。シャルガフは塩基の割合が種によって異なることを示し、テトラヌクレオチド仮説に合わないことから、その仮説を反証した。",
          "無論有多少觀察符合某個想法，都不能證明它是真的 (歸納問題)。但只要有一個可靠的不符觀察，就能證明它是假的。查加夫顯示鹼基比例因物種而異，與四核苷酸假說不符，因此證偽了該假說。")
      }
    ]
  });
})();
