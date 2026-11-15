/* A1.1 Water — IB Biology (first assessment 2025). Original explanations; see docs/syllabus.md for the guide statements. */
(function () {
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };

  IB.registerTopic({
    id: "A1.1",
    slug: "a1-1",
    theme: "A",
    level: 1,
    ahlOnly: false,
    title: L("Water", "水", "水"),
    guidingQuestions: [
      L("What physical and chemical properties of water make it essential for life?",
        "水のどのような物理的・化学的性質が、生命にとって水を不可欠なものにしているか。",
        "水有哪些物理和化學性質，使它對生命不可或缺？"),
      L("What are the challenges and opportunities of water as a habitat?",
        "生息場所としての水には、どのような課題と利点があるか。",
        "水作為棲息地有哪些挑戰和機遇？")
    ],
    summary: L(
      "Water molecules are polar, so they stick to each other with hydrogen bonds. This one fact explains why water is a good solvent, why it climbs up plants, and why animals that live in water face different problems from animals that live in air. HL students also study where Earth's water came from and why water guides the search for life elsewhere.",
      "水分子は極性 (polarity) をもつため、水素結合 (hydrogen bond) で互いに引き合います。この1つの事実から、水が優れた溶媒であること、植物の中を上昇できること、水中の動物が空気中の動物と違う問題に直面することが説明できます。HLでは、地球の水の起源と、宇宙で生命を探すときになぜ水が手がかりになるかも学びます。",
      "水分子有極性 (polarity)，因此會以氫鍵 (hydrogen bond) 互相吸引。這一點可以解釋水為何是良好的溶劑、為何能在植物體內上升，以及水生動物為何面對與陸生動物不同的問題。HL 學生還會學習地球上水的來源，以及為何水是尋找外星生命的線索。"),

    sections: [
      {
        ref: "A1.1.1",
        deeper: {"en":"<p><strong>What \"medium\" means in an exam answer.</strong> A medium must let substances move and meet, and it must allow chemical reactions to happen. Water does both.</p><ul><li><strong>Metabolism</strong> is all the chemical reactions in a cell. Reactants must be dissolved so that they can collide, so most of these reactions happen in the watery cytoplasm.</li><li>Water is not just a bystander. It is a <strong>reactant</strong> when large molecules are broken down (hydrolysis) and a <strong>product</strong> when they are built (condensation). You will meet both in A1.2 and B1.1–B1.2.</li><li>Water is also a <strong>transport medium</strong>: blood plasma, sap and the fluid inside cells.</li></ul><p><strong>Typical 3-mark answer to \"Outline the role of water as a medium for life\".</strong></p><ol><li>Many substances dissolve in water, so ions and small molecules can move around and meet.</li><li>Metabolic reactions take place in solution in the cytoplasm.</li><li>Water is the habitat of many organisms, and the first cells are thought to have arisen in water.</li></ol><div class=\"note\">Mark-scheme language: \"medium for metabolic reactions\", \"solvent\", \"habitat\". A vague line such as \"water is needed for life\" earns nothing.</div>","ja":"<p><strong>試験で「媒体 (medium)」と書くときの意味。</strong>媒体とは、物質が動いて出会えること、そして化学反応が起こせることを可能にするものです。水はその両方を満たします。</p><ul><li><strong>代謝 (metabolism)</strong> とは細胞内のすべての化学反応のことです。反応物は溶けていないと衝突できないので、これらの反応の大部分は水を含む細胞質で起こります。</li><li>水は傍観者ではありません。大きな分子を分解するとき (加水分解 hydrolysis) には<strong>反応物</strong>、組み立てるとき (脱水縮合 condensation) には<strong>生成物</strong>になります。A1.2 と B1.1–B1.2 でどちらも出てきます。</li><li>水は<strong>輸送の媒体</strong>でもあります。血しょう、樹液、細胞内の液体がその例です。</li></ul><p><strong>「生命の媒体としての水の役割を概説せよ (Outline)」の3点解答例。</strong></p><ol><li>多くの物質が水に溶けるので、イオンや小さな分子が動き回って出会える。</li><li>代謝反応は細胞質の溶液中で起こる。</li><li>水は多くの生物の生息場所であり、最初の細胞は水中で生じたと考えられている。</li></ol><div class=\"note\">採点で使われる言葉：「medium for metabolic reactions」「solvent」「habitat」。「水は生命に必要」だけの曖昧な文では得点になりません。</div>","zh":"<p><strong>考試答題中「介質 (medium)」的意思。</strong>介質必須讓物質能夠移動和相遇，並讓化學反應得以發生。水兩者皆能做到。</p><ul><li><strong>新陳代謝 (metabolism)</strong> 是細胞內所有化學反應的總稱。反應物必須溶解才能互相碰撞，所以大部分反應都在含水的細胞質中進行。</li><li>水不只是旁觀者。分解大分子時 (水解 hydrolysis) 水是<strong>反應物</strong>；合成大分子時 (縮合 condensation) 水是<strong>產物</strong>。你會在 A1.2 及 B1.1–B1.2 見到這兩種情況。</li><li>水也是<strong>運輸介質</strong>：血漿、汁液和細胞內的液體都是例子。</li></ul><p><strong>「概述 (Outline) 水作為生命介質的角色」的 3 分答案示例。</strong></p><ol><li>許多物質溶於水，所以離子和小分子能四處移動及相遇。</li><li>新陳代謝反應在細胞質的溶液中進行。</li><li>水是許多生物的棲息地，而最早的細胞相信是在水中出現的。</li></ol><div class=\"note\">評分用語：「medium for metabolic reactions」、「solvent」、「habitat」。只寫「生命需要水」這種含糊的句子不能得分。</div>"},
        ahl: false,
        heading: L("Water: the medium for life", "水は生命の「媒体」", "水：生命的媒介"),
        body: L(
          "<p>A <strong>medium</strong> is the substance in which something happens. Water is the medium for life.</p>" +
          "<ul><li>The first cells are thought to have originated in water.</li>" +
          "<li>Today most of the chemical reactions in living things (metabolism) still happen in water, inside cells and in fluids such as blood and sap.</li>" +
          "<li>Many organisms still live in water: it is their habitat.</li></ul>" +
          "<p>The rest of A1.1 explains <em>why</em> water is so good at this job.</p>",
          "<p><strong>媒体 (medium)</strong> とは、その中で何かが起こる物質のことです。水は生命の媒体です。</p>" +
          "<ul><li>最初の細胞は水の中で生まれたと考えられています。</li>" +
          "<li>現在でも、生物の化学反応 (代謝 (metabolism)) の大部分は、細胞内や血液・樹液などの液体中の水の中で起こります。</li>" +
          "<li>多くの生物は今も水中に生息しており、水は生息場所 (habitat) でもあります。</li></ul>" +
          "<p>A1.1 の残りでは、水がなぜこの役割にこれほど適しているかを説明します。</p>",
          "<p><strong>媒介 (medium)</strong> 是指讓某些事情在其中發生的物質。水就是生命的媒介。</p>" +
          "<ul><li>一般認為最早的細胞是在水中誕生的。</li>" +
          "<li>直至今日，生物體內大部分化學反應 (新陳代謝 (metabolism)) 仍在水中進行，例如細胞內，以及血液和汁液等液體中。</li>" +
          "<li>許多生物仍然生活在水中，水就是牠們的棲息地 (habitat)。</li></ul>" +
          "<p>A1.1 其餘部分會解釋水為何這麼適合擔當這個角色。</p>")
      },
      {
        ref: "A1.1.2",
        deeper: {"en":"<p><strong>From electrons to hydrogen bonds, step by step.</strong></p><ol><li>Oxygen pulls the shared electrons in each O–H bond closer to itself, so O is δ<sup>−</sup> and each H is δ<sup>+</sup>. The molecule is <strong>polar</strong>.</li><li>The δ<sup>+</sup> H of one molecule is attracted to the δ<sup>−</sup> O of a <em>neighbouring</em> molecule.</li><li>That attraction is a <strong>hydrogen bond</strong>. Each water molecule can form several of them, so liquid water is a constantly shifting network.</li></ol><table><tr><th></th><th>Covalent O–H bond</th><th>Hydrogen bond</th></tr><tr><td>Where?</td><td>Inside one molecule</td><td>Between two molecules</td></tr><tr><td>Between which atoms?</td><td>O and H sharing electrons</td><td>δ<sup>+</sup> H of one molecule and δ<sup>−</sup> O of another</td></tr><tr><td>Strength</td><td>Strong</td><td>Weak individually, strong as a group</td></tr><tr><td>In liquid water</td><td>Stays intact</td><td>Break and re-form all the time</td></tr></table><p>Because many hydrogen bonds must be overcome to pull molecules apart, water is a <strong>liquid</strong> over the range of temperatures where most life exists, even though it is a very small molecule.</p><div class=\"note\">Mark-scheme language: \"partial charges (δ+/δ−)\", \"between different molecules\", \"dashed line\". Marks are lost for drawing the hydrogen bond between the H and O of the <em>same</em> molecule, or for writing that water has a \"charge\" instead of a \"partial charge\".</div>","ja":"<p><strong>電子から水素結合まで、順を追って。</strong></p><ol><li>酸素は O–H 結合の共有電子を自分の側に強く引き寄せるので、O は δ<sup>−</sup>、各 H は δ<sup>+</sup> になります。分子は<strong>極性 (polar)</strong> をもちます。</li><li>ある分子の δ<sup>+</sup> の H は、<em>隣の</em>分子の δ<sup>−</sup> の O に引かれます。</li><li>この引力が<strong>水素結合 (hydrogen bond)</strong> です。1個の水分子は複数の水素結合をつくれるので、液体の水は絶えず組み替わるネットワークになっています。</li></ol><table><tr><th></th><th>共有結合 (O–H)</th><th>水素結合</th></tr><tr><td>場所</td><td>1つの分子の内部</td><td>2つの分子の間</td></tr><tr><td>どの原子の間か</td><td>電子を共有する O と H</td><td>ある分子の δ<sup>+</sup> の H と別の分子の δ<sup>−</sup> の O</td></tr><tr><td>強さ</td><td>強い</td><td>1本は弱いが、集まると強い</td></tr><tr><td>液体の水の中では</td><td>保たれる</td><td>絶えず切れては再形成される</td></tr></table><p>分子を引き離すには多数の水素結合を断ち切る必要があるので、水はとても小さな分子なのに、ほとんどの生物が生きる温度範囲で<strong>液体</strong>です。</p><div class=\"note\">採点で使われる言葉：「partial charges (δ+/δ−)」「between different molecules」「dashed line」。<em>同じ</em>分子の H と O の間に水素結合を描いたり、「部分電荷」ではなく単に「電荷をもつ」と書いたりすると失点します。</div>","zh":"<p><strong>由電子到氫鍵，逐步說明。</strong></p><ol><li>氧把 O–H 鍵中的共用電子拉得更靠近自己，所以 O 帶 δ<sup>−</sup>，每個 H 帶 δ<sup>+</sup>。分子具有<strong>極性 (polar)</strong>。</li><li>一個分子的 δ<sup>+</sup> H 被<em>鄰近</em>分子的 δ<sup>−</sup> O 吸引。</li><li>這種吸引力就是<strong>氫鍵 (hydrogen bond)</strong>。每個水分子可形成數個氫鍵，所以液態水是一個不斷變動的網絡。</li></ol><table><tr><th></th><th>共價鍵 (O–H)</th><th>氫鍵</th></tr><tr><td>位置</td><td>在一個分子內</td><td>在兩個分子之間</td></tr><tr><td>涉及哪些原子</td><td>共用電子的 O 和 H</td><td>一個分子的 δ<sup>+</sup> H 與另一分子的 δ<sup>−</sup> O</td></tr><tr><td>強度</td><td>強</td><td>單獨很弱，合起來很強</td></tr><tr><td>在液態水中</td><td>保持完整</td><td>不斷斷開和重新形成</td></tr></table><p>要把分子拉開，必須克服大量氫鍵，所以水雖然是很小的分子，卻在大部分生物生存的溫度範圍內是<strong>液體</strong>。</p><div class=\"note\">評分用語：「partial charges (δ+/δ−)」、「between different molecules」、「dashed line」。把氫鍵畫在<em>同一個</em>分子的 H 與 O 之間，或寫成水「帶電荷」而不是「帶部分電荷」，都會失分。</div>"},
        ahl: false,
        heading: L("Polarity and hydrogen bonds", "極性と水素結合", "極性與氫鍵"),
        body: L(
          "<p>In a water molecule (H<sub>2</sub>O) an oxygen atom is joined to two hydrogen atoms by <strong>covalent bonds</strong> (shared pairs of electrons).</p>" +
          "<p>The electrons are <strong>not shared equally</strong>. Oxygen pulls the shared electrons closer to itself than hydrogen does. So:</p>" +
          "<ul><li>the oxygen end has a small negative charge, written δ<sup>−</sup> (\"delta minus\");</li>" +
          "<li>each hydrogen end has a small positive charge, written δ<sup>+</sup>.</li></ul>" +
          "<p>A bond or molecule with uneven charge is <strong>polar</strong>. The charges are only partial, so water is not an ion.</p>" +
          "<p>Opposite partial charges attract. The δ<sup>+</sup> hydrogen of one water molecule is attracted to the δ<sup>−</sup> oxygen of a <em>different</em> water molecule. This attraction is a <strong>hydrogen bond</strong>.</p>" +
          "<ul><li>A hydrogen bond is much weaker than a covalent bond, but there are huge numbers of them.</li>" +
          "<li>They constantly break and re-form in liquid water.</li></ul>" +
          "<p><strong>How to draw it.</strong> Draw each molecule as O with two H. Mark δ<sup>−</sup> on O and δ<sup>+</sup> on each H. Draw the hydrogen bond as a <em>dashed line</em> from an H of one molecule to the O of the next. Always draw at least two molecules.</p>" +
          "<p>The interactive below also has tabs for cohesion, adhesion, solvent properties and water versus air, so you can come back to it for A1.1.3 to A1.1.6.</p>",
          "<p>水分子 (H<sub>2</sub>O) では、酸素原子が2つの水素原子と<strong>共有結合 (covalent bond)</strong> (電子対を共有する結合) でつながっています。</p>" +
          "<p>共有された電子は<strong>均等には共有されません</strong>。酸素のほうが水素よりも電子を強く引き寄せます。その結果、</p>" +
          "<ul><li>酸素の側はわずかに負の電荷をもち、δ<sup>−</sup> と書きます。</li>" +
          "<li>水素の側はわずかに正の電荷をもち、δ<sup>+</sup> と書きます。</li></ul>" +
          "<p>電荷に偏りのある結合や分子を<strong>極性 (polar)</strong> があるといいます。電荷は部分的なものなので、水はイオンではありません。</p>" +
          "<p>異なる部分電荷は引き合います。ある水分子の δ<sup>+</sup> の水素は、<em>別の</em>水分子の δ<sup>−</sup> の酸素に引き寄せられます。この引力が<strong>水素結合 (hydrogen bond)</strong> です。</p>" +
          "<ul><li>水素結合は共有結合よりずっと弱いのですが、数が非常に多くなります。</li>" +
          "<li>液体の水の中では、絶えず切れたりつながったりしています。</li></ul>" +
          "<p><strong>図の描き方。</strong>各分子を O と 2 つの H で描き、O に δ<sup>−</sup>、各 H に δ<sup>+</sup> を付けます。水素結合は、ある分子の H から隣の分子の O へ<em>破線</em>で描きます。最低でも2分子を描きます。</p>" +
          "<p>下のインタラクティブ教材には、凝集力・付着力・溶媒としての性質・水と空気の比較のタブもあるので、A1.1.3〜A1.1.6 を学ぶときにも戻って使えます。</p>",
          "<p>水分子 (H<sub>2</sub>O) 中，一個氧原子透過<strong>共價鍵 (covalent bond)</strong> (共用電子對) 與兩個氫原子連接。</p>" +
          "<p>共用電子<strong>並非平均分配</strong>。氧原子比氫原子更強烈地吸引共用電子，因此：</p>" +
          "<ul><li>氧的一端帶少量負電荷，寫作 δ<sup>−</sup>；</li>" +
          "<li>每個氫的一端帶少量正電荷，寫作 δ<sup>+</sup>。</li></ul>" +
          "<p>電荷分布不均的鍵或分子稱為<strong>極性 (polar)</strong>。這些電荷只是部分電荷，所以水不是離子。</p>" +
          "<p>相反的部分電荷會互相吸引。一個水分子帶 δ<sup>+</sup> 的氫，會被<em>另一個</em>水分子帶 δ<sup>−</sup> 的氧吸引。這種吸引力就是<strong>氫鍵 (hydrogen bond)</strong>。</p>" +
          "<ul><li>氫鍵遠比共價鍵弱，但數量極多。</li>" +
          "<li>在液態水中，氫鍵不斷斷開又重新形成。</li></ul>" +
          "<p><strong>繪圖方法。</strong>每個分子畫成一個 O 和兩個 H，在 O 上標 δ<sup>−</sup>，在每個 H 上標 δ<sup>+</sup>。氫鍵用<em>虛線</em>由一個分子的 H 畫到相鄰分子的 O。至少要畫兩個分子。</p>" +
          "<p>下方的互動工具還有內聚力、附著力、溶劑性質和水與空氣比較的分頁，學習 A1.1.3 至 A1.1.6 時可以回來使用。</p>"),
        widget: "water-hbond",
        examTip: L(
          "A hydrogen bond is between molecules, from δ+ H to δ− O. The O–H bond inside a molecule is covalent. Do not mix them up. When water boils, the molecules do not split into hydrogen and oxygen: only the hydrogen bonds between molecules are overcome.",
          "水素結合は分子と分子の間にあり、δ+ の H から δ− の O へ向かいます。分子内の O–H 結合は共有結合です。混同しないこと。水が沸騰するとき、分子が水素と酸素に分解するのではなく、切れるのは分子間の水素結合だけです。",
          "氫鍵存在於分子之間，由 δ+ 的 H 指向 δ− 的 O。分子內的 O–H 鍵是共價鍵，切勿混淆。水沸騰時，分子不會分解成氫和氧，被克服的只是分子之間的氫鍵。")
      },
      {
        ref: "A1.1.3",
        deeper: {"en":"<p><strong>How water gets up a tall plant, step by step.</strong></p><ol><li>Water evaporates from the surfaces of leaf cells.</li><li>Water from the xylem moves out to replace it, which <strong>pulls</strong> on the water column. The water is under tension.</li><li>Hydrogen bonds make the molecules <strong>cohere</strong>, so the whole column is pulled up as one, from root to leaf, without breaking.</li><li>Adhesion to the xylem walls helps to hold the column up.</li></ol><p>Xylem vessels are narrow, hollow and made of dead cells, so there is no cell contents in the way. Narrow tubes also make a continuous water column easier to keep.</p><p><strong>Surface tension.</strong> A molecule inside the water is pulled equally in all directions. A molecule at the surface has water only beside and below it, so it is pulled inwards and sideways. The surface behaves like a stretched skin. A pond skater's weight is spread over its legs and only makes small dents in the surface; the skin does not break.</p><div class=\"note\">Mark-scheme language: \"cohesion between water molecules due to hydrogen bonding\", \"tension\", \"unbroken column\". Common errors: saying that \"cohesion pulls water up\" (the pull comes from evaporation), or confusing cohesion with adhesion. Link: transport in plants (B3.2).</div>","ja":"<p><strong>水が背の高い植物を上る仕組み (順を追って)。</strong></p><ol><li>葉の細胞の表面から水が蒸発します。</li><li>失われた水を補うために木部の水が移動し、水の柱が<strong>引っ張られ</strong>ます。水は張力を受けています。</li><li>水素結合により分子どうしが<strong>くっつく (cohere)</strong> ので、水の柱全体が根から葉まで途切れずに一体となって引き上げられます。</li><li>木部の壁への付着力 (adhesion) も水柱を支えます。</li></ol><p>木部の道管は細く、中空で、死んだ細胞でできているので、内容物が邪魔になりません。細い管であることも、水の柱をつなげておくのに役立ちます。</p><p><strong>表面張力。</strong>水の内部の分子は全方向に等しく引かれます。水面の分子は、横と下にしか水がないので、内側と横に引かれます。そのため水面は張った膜のようにふるまいます。アメンボの体重は脚全体に分散され、水面を少しへこませるだけで、膜は破れません。</p><div class=\"note\">採点で使われる言葉：「cohesion between water molecules due to hydrogen bonding」「tension」「unbroken column」。よくある誤り：「凝集力が水を引き上げる」と書くこと (引く力の源は蒸発です)、凝集力と付着力の混同。関連：植物の輸送 (B3.2)。</div>","zh":"<p><strong>水如何升到高大的植物頂部 (逐步說明)。</strong></p><ol><li>葉細胞表面的水分蒸發。</li><li>木質部的水移出補充，<strong>拉動</strong>水柱。水因而受到張力。</li><li>氫鍵令水分子<strong>互相黏合 (cohere)</strong>，所以整條水柱由根到葉被一起拉上，不會斷開。</li><li>水與木質部管壁的附著力 (adhesion) 也有助托住水柱。</li></ol><p>木質部導管幼細、中空，由死細胞構成，所以沒有細胞內含物阻礙。管子幼細也有助維持連續的水柱。</p><p><strong>表面張力。</strong>水內部的分子受到各方向相等的拉力。水面的分子只有旁邊和下方有水，所以被向內及向側面拉。水面因而像一層繃緊的薄膜。水黽的體重分散在腳上，只令水面輕微凹陷，薄膜不會破裂。</p><div class=\"note\">評分用語：「cohesion between water molecules due to hydrogen bonding」、「tension」、「unbroken column」。常見錯誤：寫成「內聚力把水拉上去」(拉力來自蒸發)，或混淆內聚力與附著力。關聯：植物的運輸 (B3.2)。</div>"},
        ahl: false,
        heading: L("Cohesion", "凝集力", "內聚力"),
        body: L(
          "<p><strong>Cohesion</strong> is the attraction between molecules of the <em>same</em> substance. In water, cohesion is caused by hydrogen bonds between water molecules.</p>" +
          "<p><strong>1. Water transport in xylem.</strong> Xylem vessels are narrow tubes that carry water up plants.</p>" +
          "<ul><li>Water evaporates from the leaves, which pulls on the water in the xylem. The water is under <strong>tension</strong> (a pulling force).</li>" +
          "<li>Because of cohesion, the water molecules stay joined, so the whole column of water is pulled up without breaking.</li></ul>" +
          "<p><strong>2. Surface tension.</strong> At a water surface, molecules are pulled by hydrogen bonds sideways and downwards, but not upwards (there is air above). This makes the surface behave like a thin stretched skin. The effect is called <strong>surface tension</strong>.</p>" +
          "<ul><li>Small animals such as pond skaters can stand and walk on the surface. The surface is their habitat.</li></ul>",
          "<p><strong>凝集力 (cohesion)</strong> とは、<em>同じ</em>物質の分子どうしが引き合う力です。水の凝集力は、水分子間の水素結合によって生じます。</p>" +
          "<p><strong>1. 木部 (xylem) での水の輸送。</strong>木部の道管は、植物の中で水を上へ運ぶ細い管です。</p>" +
          "<ul><li>葉から水が蒸発すると、木部の水が引っ張られます。水は<strong>張力 (tension)</strong> (引く力) を受けています。</li>" +
          "<li>凝集力のために水分子はつながったままなので、水の柱全体が途切れずに引き上げられます。</li></ul>" +
          "<p><strong>2. 表面張力。</strong>水面では、分子は水素結合によって横と下に引かれますが、上には引かれません (上は空気のため)。そのため水面は薄く張った膜のようにふるまいます。この効果を<strong>表面張力 (surface tension)</strong> といいます。</p>" +
          "<ul><li>アメンボのような小さな動物は水面に立って歩くことができます。水面が生息場所になります。</li></ul>",
          "<p><strong>內聚力 (cohesion)</strong> 是<em>同一種</em>物質的分子之間的吸引力。水的內聚力由水分子之間的氫鍵造成。</p>" +
          "<p><strong>1. 木質部 (xylem) 中的水分運輸。</strong>木質部導管是在植物體內向上運水的細管。</p>" +
          "<ul><li>葉片蒸發水分，拉動木質部中的水，水因而受到<strong>張力 (tension)</strong> (拉力)。</li>" +
          "<li>由於內聚力，水分子保持連結，所以整條水柱可被向上拉而不會斷開。</li></ul>" +
          "<p><strong>2. 表面張力。</strong>在水面，分子受氫鍵向側面和向下拉，但不會向上 (上方是空氣)。這使水面像一層繃緊的薄膜。這種效應稱為<strong>表面張力 (surface tension)</strong>。</p>" +
          "<ul><li>水黽 (pond skater) 等小型動物可以站在水面上行走，水面成為牠們的棲息地。</li></ul>")
      },
      {
        ref: "A1.1.4",
        deeper: {"en":"<p><strong>Cohesion and adhesion side by side.</strong></p><table><tr><th></th><th>Cohesion</th><th>Adhesion</th></tr><tr><td>Attraction between</td><td>Water and water</td><td>Water and a different substance</td></tr><tr><td>Caused by</td><td>Hydrogen bonds between water molecules</td><td>Attraction of water's partial charges to polar or charged groups on the surface</td></tr><tr><td>Example</td><td>Unbroken water column in xylem</td><td>Water held on cellulose in cell walls, or on soil particles</td></tr></table><p><strong>Why a narrower space lifts water higher.</strong> In a thin tube a large fraction of the water is touching the wall, so there is more adhesion for each bit of water. Adhesion pulls water up along the wall and cohesion drags the rest along with it. In a wide tube most of the water is far from the wall and is not lifted as much. This is also why the water surface in a glass tube curves upwards at the edges: adhesion to the glass is strong.</p><p><strong>In soil.</strong> The charged surfaces of soil particles hold thin films of water in the narrow gaps between them. This water resists draining away under gravity, so it stays available for roots to absorb.</p><div class=\"note\">Mark-scheme language: \"adhesion to (polar) cellulose / charged soil particles\", \"capillary action\", \"water is held in narrow spaces\". In an exam always say <em>what</em> water sticks to and <em>why</em> (partial charges).</div>","ja":"<p><strong>凝集力と付着力の比較。</strong></p><table><tr><th></th><th>凝集力 (cohesion)</th><th>付着力 (adhesion)</th></tr><tr><td>引き合う相手</td><td>水と水</td><td>水と別の物質</td></tr><tr><td>原因</td><td>水分子どうしの水素結合</td><td>水の部分電荷が、表面の極性基や電荷をもつ基に引かれること</td></tr><tr><td>例</td><td>木部の途切れない水の柱</td><td>細胞壁のセルロースや土壌粒子に保持される水</td></tr></table><p><strong>狭い空間ほど水が高く上がる理由。</strong>細い管では水の大きな割合が壁に接しているので、水のひとかたまり当たりの付着力が大きくなります。付着力が壁沿いに水を引き上げ、凝集力が残りの水を一緒に引きずり上げます。太い管では大部分の水が壁から遠く、あまり持ち上がりません。ガラス管の水面が端で上向きに曲がるのも、ガラスへの付着力が強いためです。</p><p><strong>土壌では。</strong>土壌粒子の電荷をもつ表面が、粒子間の狭いすき間に薄い水の膜を保持します。この水は重力で流れ落ちにくく、根が吸収できる状態で残ります。</p><div class=\"note\">採点で使われる言葉：「adhesion to (polar) cellulose / charged soil particles」「capillary action」「water is held in narrow spaces」。試験では、水が<em>何に</em>付くのか、そして<em>なぜ</em>(部分電荷) かを必ず書きましょう。</div>","zh":"<p><strong>內聚力與附著力對照。</strong></p><table><tr><th></th><th>內聚力 (cohesion)</th><th>附著力 (adhesion)</th></tr><tr><td>吸引對象</td><td>水與水</td><td>水與另一種物質</td></tr><tr><td>成因</td><td>水分子之間的氫鍵</td><td>水的部分電荷被表面的極性或帶電基團吸引</td></tr><tr><td>例子</td><td>木質部中不斷裂的水柱</td><td>細胞壁纖維素或土壤顆粒所吸附的水</td></tr></table><p><strong>為何空間愈窄，水升得愈高。</strong>在幼細的管中，大部分的水都接觸管壁，所以每一小份水受到的附著力較大。附著力沿管壁把水拉上，內聚力則把其餘的水一併拉上。在闊管中，大部分的水離管壁很遠，被提起的程度較小。玻璃管內水面在邊緣向上彎曲，也是因為水與玻璃的附著力強。</p><p><strong>在土壤中。</strong>土壤顆粒帶電的表面把薄薄的水膜保持在顆粒之間的窄縫中。這些水不易因重力流走，所以仍可供根吸收。</p><div class=\"note\">評分用語：「adhesion to (polar) cellulose / charged soil particles」、「capillary action」、「water is held in narrow spaces」。作答時務必說明水黏附在<em>甚麼</em>上，以及<em>為何</em>(部分電荷)。</div>"},
        ahl: false,
        heading: L("Adhesion", "付着力", "附著力"),
        body: L(
          "<p><strong>Adhesion</strong> is the attraction between molecules of <em>different</em> substances. Water sticks to materials that are <strong>polar</strong> or <strong>charged</strong>, because the partial charges on water are attracted to charges on the surface.</p>" +
          "<p>Two examples to include:</p>" +
          "<ul><li><strong>Plant cell walls.</strong> Cell walls contain cellulose, which has many polar groups. Water adheres to the walls and is held in the tiny spaces in them. Adhesion also helps water in xylem resist moving down.</li>" +
          "<li><strong>Soil.</strong> Soil particles have charged surfaces. Water sticks to them and is held in the narrow gaps between particles.</li></ul>" +
          "<p><strong>Capillary action</strong> is the movement of water up a narrow space. Adhesion pulls water along the walls and cohesion pulls the rest of the water after it. The narrower the space, the higher the water can rise. This helps water move through soil and through plant cell walls.</p>",
          "<p><strong>付着力 (adhesion)</strong> とは、<em>異なる</em>物質の分子どうしが引き合う力です。水の部分電荷が表面の電荷に引かれるため、水は<strong>極性</strong>をもつ物質や<strong>電荷</strong>をもつ物質にくっつきます。</p>" +
          "<p>含めるべき例は2つです。</p>" +
          "<ul><li><strong>植物の細胞壁。</strong>細胞壁にはセルロースが含まれ、極性のある基が多数あります。水は細胞壁に付着し、壁の微小な隙間に保持されます。付着力は、木部の水が落下しにくくなることにも役立ちます。</li>" +
          "<li><strong>土壌。</strong>土壌粒子の表面は電荷をもっています。水は粒子にくっつき、粒子間の狭い隙間に保持されます。</li></ul>" +
          "<p><strong>毛細管現象 (capillary action)</strong> は、狭い空間を水が上昇する現象です。付着力が壁に沿って水を引き、凝集力が残りの水を引き続けます。空間が狭いほど水は高く上昇できます。これが土壌や植物の細胞壁の中での水の移動を助けます。</p>",
          "<p><strong>附著力 (adhesion)</strong> 是<em>不同</em>物質的分子之間的吸引力。水會附著在<strong>極性</strong>或<strong>帶電</strong>的物質上，因為水的部分電荷會被表面的電荷吸引。</p>" +
          "<p>需要涵蓋的兩個例子：</p>" +
          "<ul><li><strong>植物細胞壁。</strong>細胞壁含纖維素，帶有許多極性基團。水附著在細胞壁上，並被保留在壁內的微小空隙中。附著力亦有助木質部的水不致向下滑落。</li>" +
          "<li><strong>土壤。</strong>土壤顆粒表面帶電。水附著在顆粒上，並被保留在顆粒之間的狹窄空隙中。</li></ul>" +
          "<p><strong>毛細管作用 (capillary action)</strong> 是水在狹窄空間中向上移動。附著力沿壁拉動水，內聚力再把其餘的水拉上去。空間越窄，水能升得越高。這有助水在土壤和植物細胞壁中移動。</p>")
      },
      {
        ref: "A1.1.5",
        deeper: {"en":"<p><strong>How sodium chloride dissolves, step by step.</strong></p><ol><li>Na<sup>+</sup> and Cl<sup>−</sup> ions in the crystal are held together by their opposite charges.</li><li>The δ<sup>−</sup> oxygen of water is attracted to Na<sup>+</sup>. The δ<sup>+</sup> hydrogens are attracted to Cl<sup>−</sup>.</li><li>Water molecules cluster around each ion and pull it away from the crystal.</li><li>Each ion is now surrounded by water molecules, which stops it joining the crystal again. The salt has dissolved.</li></ol><p><strong>Polar molecules</strong> such as glucose have –OH groups that form hydrogen bonds with water, so they dissolve too. <strong>Non-polar molecules</strong> such as fats have no charged regions to attract water, so they do not dissolve; water molecules stay bonded to each other and the non-polar molecules are pushed together.</p><table><tr><th>Substance</th><th>Polar or charged?</th><th>Dissolves in water?</th></tr><tr><td>Na<sup>+</sup>, Cl<sup>−</sup></td><td>Charged ions</td><td>Yes</td></tr><tr><td>Glucose</td><td>Polar</td><td>Yes</td></tr><tr><td>Fat / oil</td><td>Non-polar</td><td>No</td></tr><tr><td>Oxygen gas (O<sub>2</sub>)</td><td>Non-polar</td><td>Only slightly</td></tr></table><p>Link: the phospholipid bilayer (B2.1) works because hydrophilic heads face the water and hydrophobic tails face each other, away from it.</p><div class=\"note\">Mark-scheme language: \"polar / charged\", \"attracted to (partial) charges on water\", \"surrounded by water molecules\". Write \"does not dissolve\", not \"is repelled by water\".</div>","ja":"<p><strong>塩化ナトリウムが溶ける過程 (順を追って)。</strong></p><ol><li>結晶中の Na<sup>+</sup> と Cl<sup>−</sup> は、反対の電荷で結び付いています。</li><li>水の δ<sup>−</sup> の酸素は Na<sup>+</sup> に引かれ、δ<sup>+</sup> の水素は Cl<sup>−</sup> に引かれます。</li><li>水分子が各イオンの周りに集まり、イオンを結晶から引き離します。</li><li>イオンは水分子に取り囲まれ、結晶に戻れなくなります。塩が溶けたのです。</li></ol><p>グルコースのような<strong>極性分子</strong>は、水と水素結合をつくる –OH 基をもつので溶けます。脂肪のような<strong>非極性分子</strong>は水を引き付ける電荷の部分がないので溶けません。水分子どうしは結合したままで、非極性分子は押し集められます。</p><table><tr><th>物質</th><th>極性か電荷か</th><th>水に溶けるか</th></tr><tr><td>Na<sup>+</sup>, Cl<sup>−</sup></td><td>電荷をもつイオン</td><td>溶ける</td></tr><tr><td>グルコース</td><td>極性</td><td>溶ける</td></tr><tr><td>脂肪・油</td><td>非極性</td><td>溶けない</td></tr><tr><td>酸素ガス (O<sub>2</sub>)</td><td>非極性</td><td>わずかに溶ける</td></tr></table><p>関連：リン脂質二重層 (B2.1) は、親水性の頭部 (hydrophilic) が水側を向き、疎水性の尾部 (hydrophobic) が水から離れて向かい合うことで成り立っています。</p><div class=\"note\">採点で使われる言葉：「polar / charged」「attracted to (partial) charges on water」「surrounded by water molecules」。「水にはじかれる」ではなく「溶けない (does not dissolve)」と書きましょう。</div>","zh":"<p><strong>氯化鈉如何溶解 (逐步說明)。</strong></p><ol><li>晶體中的 Na<sup>+</sup> 和 Cl<sup>−</sup> 因異性電荷而結合在一起。</li><li>水的 δ<sup>−</sup> 氧被 Na<sup>+</sup> 吸引，δ<sup>+</sup> 氫被 Cl<sup>−</sup> 吸引。</li><li>水分子聚集在每個離子周圍，把離子從晶體拉開。</li><li>每個離子都被水分子包圍，不能再回到晶體中。鹽就溶解了。</li></ol><p>葡萄糖等<strong>極性分子</strong>有能與水形成氫鍵的 –OH 基團，所以能溶解。脂肪等<strong>非極性分子</strong>沒有可吸引水的帶電部分，所以不溶解；水分子繼續互相結合，並把非極性分子擠在一起。</p><table><tr><th>物質</th><th>極性或帶電？</th><th>溶於水？</th></tr><tr><td>Na<sup>+</sup>, Cl<sup>−</sup></td><td>帶電離子</td><td>溶</td></tr><tr><td>葡萄糖</td><td>極性</td><td>溶</td></tr><tr><td>脂肪／油</td><td>非極性</td><td>不溶</td></tr><tr><td>氧氣 (O<sub>2</sub>)</td><td>非極性</td><td>只輕微溶解</td></tr></table><p>關聯：磷脂雙層 (B2.1) 之所以成立，是因為親水的頭部 (hydrophilic) 朝向水，疏水的尾部 (hydrophobic) 則互相對着、遠離水。</p><div class=\"note\">評分用語：「polar / charged」、「attracted to (partial) charges on water」、「surrounded by water molecules」。請寫「不溶解 (does not dissolve)」，不要寫「被水排斥」。</div>"},
        ahl: false,
        heading: L("Water as a solvent", "溶媒としての水", "水作為溶劑"),
        body: L(
          "<p>A <strong>solvent</strong> is a liquid in which other substances (solutes) dissolve. Water is an excellent solvent because its polar molecules are attracted to other polar or charged particles and surround them.</p>" +
          "<ul><li><strong>Hydrophilic</strong> (\"water-loving\") substances dissolve in water. They are ions (such as Na<sup>+</sup> and Cl<sup>−</sup>) and polar molecules (such as glucose and amino acids). Water molecules surround each particle and keep it apart from the others.</li>" +
          "<li><strong>Hydrophobic</strong> (\"water-fearing\") substances are non-polar and do not dissolve. Examples are fats and oils. Water molecules prefer to bond to each other, so they push non-polar molecules together.</li></ul>" +
          "<p><strong>Why this matters</strong></p>" +
          "<ul><li><strong>Metabolism.</strong> Dissolved substances can move around and meet each other, so reactions happen. Most enzymes work in aqueous (water-based) solution.</li>" +
          "<li><strong>Transport.</strong> Blood plasma carries dissolved substances such as glucose and ions in animals. Sap carries dissolved substances in plants.</li>" +
          "<li><strong>Hydrophobic molecules are useful too.</strong> Some cell structures need to stay insoluble. For example, the hydrophobic tails of phospholipids make membranes that do not dissolve in the water on each side.</li></ul>",
          "<p><strong>溶媒 (solvent)</strong> とは、他の物質 (溶質) を溶かす液体のことです。水の極性分子は、他の極性粒子や電荷をもつ粒子に引き寄せられて、それらを取り囲むため、水は優れた溶媒です。</p>" +
          "<ul><li><strong>親水性 (hydrophilic)</strong> (「水になじむ」) の物質は水に溶けます。イオン (Na<sup>+</sup>、Cl<sup>−</sup> など) や極性分子 (グルコース、アミノ酸など) です。水分子が各粒子を取り囲み、粒子どうしを離しておきます。</li>" +
          "<li><strong>疎水性 (hydrophobic)</strong> (「水をはじく」) の物質は無極性で、溶けません。脂肪や油が例です。水分子は互いに結合するほうを好むため、無極性分子を押し寄せ合わせます。</li></ul>" +
          "<p><strong>なぜ重要か</strong></p>" +
          "<ul><li><strong>代謝。</strong>溶けた物質は動き回って出会えるので、反応が起こります。ほとんどの酵素 (enzyme) は水溶液 (aqueous solution) 中で働きます。</li>" +
          "<li><strong>輸送。</strong>動物では血しょう (blood plasma) がグルコースやイオンなどの溶けた物質を運びます。植物では樹液が溶けた物質を運びます。</li>" +
          "<li><strong>疎水性の分子も役に立ちます。</strong>細胞の構造の中には、溶けないままでいる必要があるものがあります。たとえば、リン脂質の疎水性の尾部は、両側の水に溶けない膜をつくります。</li></ul>",
          "<p><strong>溶劑 (solvent)</strong> 是能使其他物質 (溶質) 溶解的液體。水是極佳的溶劑，因為水的極性分子會被其他極性或帶電的粒子吸引，並將它們包圍。</p>" +
          "<ul><li><strong>親水 (hydrophilic)</strong> (「喜水」) 的物質能溶於水，包括離子 (如 Na<sup>+</sup> 和 Cl<sup>−</sup>) 和極性分子 (如葡萄糖和氨基酸)。水分子包圍每個粒子，使它們彼此分開。</li>" +
          "<li><strong>疏水 (hydrophobic)</strong> (「怕水」) 的物質是非極性的，不溶於水，例如脂肪和油。水分子更傾向與彼此結合，因此會把非極性分子擠在一起。</li></ul>" +
          "<p><strong>為何重要</strong></p>" +
          "<ul><li><strong>新陳代謝。</strong>溶解的物質可以四處移動並相遇，反應才得以發生。大部分酶 (enzyme) 在水溶液 (aqueous solution) 中發揮作用。</li>" +
          "<li><strong>運輸。</strong>動物的血漿 (blood plasma) 運載葡萄糖和離子等溶解物質；植物的汁液則運載溶解物質。</li>" +
          "<li><strong>疏水分子也有用。</strong>細胞中有些結構必須保持不溶。例如磷脂的疏水尾部形成不會溶於兩側水中的膜。</li></ul>"),
        examTip: L(
          "\"Dissolve\" is not the same as \"melt\". And \"hydrophobic\" does not mean the molecule is repelled by water; it means it does not mix with it. Use \"insoluble\" or \"does not dissolve\".",
          "「溶ける (dissolve)」と「融ける (melt)」は別の意味です。また「疎水性」は水に反発されるという意味ではなく、水と混ざらないという意味です。「不溶性」「溶けない」と書くと安全です。",
          "「溶解 (dissolve)」與「熔化 (melt)」不同。「疏水」不是指被水排斥，而是指不與水混合。可用「不溶」或「不溶於水」。")
      },
      {
        ref: "A1.1.6",
        deeper: {"en":"<p><strong>Link each property to a problem and an adaptation.</strong> A good \"contrast\" answer states the property, what it means for the animal, and the adaptation.</p><table><tr><th>Property</th><th>Water (challenge / opportunity)</th><th>Air (challenge / opportunity)</th></tr><tr><td>Buoyancy</td><td>Body is supported, so little energy is spent resisting gravity</td><td>Body weight must be supported by legs, skeleton or wings</td></tr><tr><td>Viscosity</td><td>Movement is costly, so a streamlined shape matters</td><td>Movement is easy, but flight needs lift from wings</td></tr><tr><td>Thermal conductivity</td><td>Heat is lost fast, so insulation is needed</td><td>Heat is lost slowly</td></tr><tr><td>Specific heat capacity</td><td>Stable temperature, so little thermal stress</td><td>Temperature varies a lot, day to night</td></tr></table><p><strong>Black-throated loon in more detail.</strong> It lives in both media, so its body is a compromise. Its legs are set far back on the body, which suits swimming. Its wings are fairly small, so it needs fast wingbeats and a long run across the water to take off. It is streamlined in water and in flight.</p><p><strong>Ringed seal.</strong> The streamlined body reduces drag; the layer of blubber reduces heat loss to the cold, conductive water; buoyancy helps to support its mass.</p><div class=\"note\">Mark-scheme language: \"water is denser, so greater buoyancy\", \"more viscous, so greater drag\", \"higher thermal conductivity, so more heat lost\", \"higher specific heat capacity, so more stable temperature\". Always write the comparison in both directions. Link: gas exchange in water and air (B3.1).</div>","ja":"<p><strong>各性質を「課題」と「適応」に結び付ける。</strong>よい「対比 (contrast)」の解答は、性質、それが動物にとって何を意味するか、そして適応を述べます。</p><table><tr><th>性質</th><th>水 (課題／利点)</th><th>空気 (課題／利点)</th></tr><tr><td>浮力 (buoyancy)</td><td>体が支えられ、重力に抵抗するエネルギーが少なくてすむ</td><td>体重を脚・骨格・翼で支えなければならない</td></tr><tr><td>粘性 (viscosity)</td><td>動くのに力がいるので、流線形が重要</td><td>動きやすいが、飛ぶには翼の揚力が必要</td></tr><tr><td>熱伝導率 (thermal conductivity)</td><td>熱が速く奪われるので断熱が必要</td><td>熱がゆっくりしか失われない</td></tr><tr><td>比熱 (specific heat capacity)</td><td>温度が安定していて、温度ストレスが小さい</td><td>昼夜で温度が大きく変わる</td></tr></table><p><strong>オオハム (black-throated loon) の詳しい例。</strong>水中と空中の両方で暮らすため、体は折衷的です。脚は体の後方にあり、泳ぐのに適しています。翼は比較的小さいので、羽ばたきを速くし、離陸には水面を長く助走する必要があります。水中でも飛行中でも流線形です。</p><p><strong>ワモンアザラシ (ringed seal)。</strong>流線形の体が抵抗を減らし、皮下脂肪 (blubber) の層が冷たく熱を伝えやすい水への熱損失を減らし、浮力が体重の一部を支えます。</p><div class=\"note\">採点で使われる言葉：「water is denser, so greater buoyancy」「more viscous, so greater drag」「higher thermal conductivity, so more heat lost」「higher specific heat capacity, so more stable temperature」。比較は必ず両方向で書きましょう。関連：水中と空気中のガス交換 (B3.1)。</div>","zh":"<p><strong>把每項性質連結到難題與適應特徵。</strong>好的「對比 (contrast)」答案會寫出性質、它對動物的意義，以及適應特徵。</p><table><tr><th>性質</th><th>水 (挑戰／機會)</th><th>空氣 (挑戰／機會)</th></tr><tr><td>浮力 (buoyancy)</td><td>身體被托住，抵抗重力所需能量少</td><td>體重必須由腿、骨骼或翼支撐</td></tr><tr><td>黏滯性 (viscosity)</td><td>移動耗力，所以流線形很重要</td><td>移動容易，但飛行需要翼提供升力</td></tr><tr><td>熱傳導性 (thermal conductivity)</td><td>熱量流失快，需要隔熱</td><td>熱量流失慢</td></tr><tr><td>比熱容 (specific heat capacity)</td><td>溫度穩定，熱壓力小</td><td>日夜溫度變化大</td></tr></table><p><strong>黑喉潛鳥 (black-throated loon) 的詳細例子。</strong>牠在水和空氣兩種介質中生活，所以身體是一種折衷。腿長在身體後方，適合游泳。翼相對較小，所以需要快速拍翼，並要在水面上長距離助跑才能起飛。無論在水中還是飛行時，牠都是流線形。</p><p><strong>環斑海豹 (ringed seal)。</strong>流線形身體減少阻力；鯨脂層 (blubber) 減少熱量流失到寒冷而導熱快的水中；浮力幫助支撐體重。</p><div class=\"note\">評分用語：「water is denser, so greater buoyancy」、「more viscous, so greater drag」、「higher thermal conductivity, so more heat lost」、「higher specific heat capacity, so more stable temperature」。比較時要兩個方向都寫出。關聯：水與空氣中的氣體交換 (B3.1)。</div>"},
        ahl: false,
        heading: L("Water or air as a habitat", "水と空気：生息場所としての違い", "水與空氣：作為棲息地的比較"),
        body: L(
          "<p>Water and air are very different habitats. The guide asks you to <strong>contrast</strong> them using four properties, with examples of animals.</p>" +
          "<table><tr><th>Property</th><th>Water</th><th>Air</th></tr>" +
          "<tr><td><strong>Buoyancy</strong> (upward push that supports a body)</td><td>High. Water is much denser than air, so it supports the body.</td><td>Very low. Animals need legs, skeletons or wings to resist gravity.</td></tr>" +
          "<tr><td><strong>Viscosity</strong> (resistance to flow)</td><td>High. Moving through water takes more force.</td><td>Low. Moving through air takes little force.</td></tr>" +
          "<tr><td><strong>Thermal conductivity</strong> (how fast heat passes through)</td><td>High. Water carries heat away from a body quickly.</td><td>Low. Air is a poor conductor, so it insulates.</td></tr>" +
          "<tr><td><strong>Specific heat capacity</strong> (energy needed to warm it)</td><td>High. The temperature of a body of water changes slowly, so aquatic habitats are thermally stable.</td><td>Low. Air temperature changes quickly.</td></tr></table>" +
          "<p><strong>Examples</strong></p>" +
          "<ul><li><strong>Ringed seal</strong> (<em>Pusa hispida</em>), lives in cold water. A streamlined body reduces drag in viscous water. A thick layer of fat (blubber) provides insulation, because water would otherwise conduct heat away quickly. Buoyancy supports its body weight.</li>" +
          "<li><strong>Black-throated loon</strong> (<em>Gavia arctica</em>), a diving bird. It swims and dives in water, where it must push against viscous water and keep warm. It also flies in air, where there is almost no buoyancy, so its wings must provide all the lift. It must be streamlined for both.</li></ul>" +
          "<p>In an exam you can use either the common name or the scientific name.</p>",
          "<p>水と空気はまったく異なる生息場所です。ガイドは、4つの性質を使い、動物の例を挙げて、両者を<strong>対比 (contrast)</strong> することを求めています。</p>" +
          "<table><tr><th>性質</th><th>水</th><th>空気</th></tr>" +
          "<tr><td><strong>浮力 (buoyancy)</strong> (体を支える上向きの力)</td><td>大きい。水は空気よりはるかに密度が高く、体を支える。</td><td>非常に小さい。重力に逆らうため、脚、骨格、翼が必要。</td></tr>" +
          "<tr><td><strong>粘性 (viscosity)</strong> (流れにくさ)</td><td>大きい。水中を動くには大きな力が必要。</td><td>小さい。空気中を動くのに必要な力は小さい。</td></tr>" +
          "<tr><td><strong>熱伝導率 (thermal conductivity)</strong> (熱の伝わりやすさ)</td><td>大きい。水は体から熱をすばやく奪う。</td><td>小さい。空気は熱を伝えにくく、断熱になる。</td></tr>" +
          "<tr><td><strong>比熱 (specific heat capacity)</strong> (温めるのに必要なエネルギー)</td><td>大きい。水域の温度はゆっくり変化するので、水中の生息場所は温度が安定している。</td><td>小さい。空気の温度は速く変化する。</td></tr></table>" +
          "<p><strong>例</strong></p>" +
          "<ul><li><strong>ワモンアザラシ (ringed seal)</strong> (<em>Pusa hispida</em>) は冷たい水にすむ。流線形の体は粘性の高い水中での抵抗を減らす。厚い脂肪層 (皮下脂肪 (blubber)) が断熱になる。そうしないと水が熱をすばやく奪うため。浮力が体重を支える。</li>" +
          "<li><strong>オオハム (black-throated loon)</strong> (<em>Gavia arctica</em>) は潜水する鳥。水中を泳ぎ潜るときは、粘性のある水に逆らって進み、体温も保たなければならない。空を飛ぶときは浮力がほとんどないので、翼がすべての揚力を生み出さなければならない。どちらにも流線形の体が役立つ。</li></ul>" +
          "<p>試験では、一般名と学名のどちらを書いてもかまいません。</p>",
          "<p>水和空氣是截然不同的棲息地。課程指引要求你利用四種性質，並舉出動物例子，來<strong>對比 (contrast)</strong> 兩者。</p>" +
          "<table><tr><th>性質</th><th>水</th><th>空氣</th></tr>" +
          "<tr><td><strong>浮力 (buoyancy)</strong> (支撐身體的向上推力)</td><td>大。水的密度遠高於空氣，能支撐身體。</td><td>極小。動物需要腿、骨骼或翅膀來抵抗重力。</td></tr>" +
          "<tr><td><strong>黏度 (viscosity)</strong> (流動的阻力)</td><td>大。在水中移動需要較大的力。</td><td>小。在空氣中移動只需較小的力。</td></tr>" +
          "<tr><td><strong>熱傳導性 (thermal conductivity)</strong> (熱量通過的快慢)</td><td>高。水很快帶走身體的熱量。</td><td>低。空氣是不良導體，具隔熱作用。</td></tr>" +
          "<tr><td><strong>比熱容 (specific heat capacity)</strong> (使物質升溫所需的能量)</td><td>大。水體的溫度變化緩慢，所以水生棲息地的溫度較穩定。</td><td>小。空氣溫度變化迅速。</td></tr></table>" +
          "<p><strong>例子</strong></p>" +
          "<ul><li><strong>環斑海豹 (ringed seal)</strong> (<em>Pusa hispida</em>) 生活在冷水中。流線型身體減少在黏度大的水中受到的阻力。厚厚的脂肪層 (鯨脂 (blubber)) 提供隔熱，否則水會很快帶走熱量。浮力支撐牠的體重。</li>" +
          "<li><strong>黑喉潛鳥 (black-throated loon)</strong> (<em>Gavia arctica</em>) 是潛水的鳥類。牠在水中游泳和潛水時，要克服黏度大的水並保持體溫。牠在空中飛行時幾乎沒有浮力，所以翅膀必須提供全部升力。牠在兩種環境中都需要流線型身體。</li></ul>" +
          "<p>考試時，可以用俗名或學名。</p>"),
        examTip: L(
          "A \"contrast\" answer needs both habitats in the same sentence or table row (\"water is more viscous than air, so …\"). Do not just describe water on its own.",
          "「対比 (contrast)」の解答では、同じ文または表の同じ行で両方の環境に触れます (「水は空気より粘性が高いので…」)。水だけを説明して終わらないこと。",
          "「對比 (contrast)」的答案要在同一句或同一行同時提及兩種環境 (「水的黏度比空氣大，所以……」)，不要只描述水。")
      },
      {
        ref: "A1.1.7",
        deeper: {"en":"<p><em>(AHL)</em> <strong>Two separate questions: where did the water come from, and why is it still here?</strong></p><table><tr><th>Question</th><th>Answer in the guide</th><th>Key words to use</th></tr><tr><td>Origin</td><td>Water was delivered by asteroids that contained water (extraplanetary origin)</td><td>\"asteroids\", \"impacts\", \"from space\"</td></tr><tr><td>Retention: gas</td><td>Gravity holds gases, including water vapour, close to the planet</td><td>\"gravity\", \"not lost to space\"</td></tr><tr><td>Retention: liquid</td><td>Temperature low enough for vapour to condense into liquid water</td><td>\"condense\", \"oceans\"</td></tr></table><p><strong>Step by step.</strong></p><ol><li>Asteroids containing water hit the young Earth.</li><li>Water was released as vapour into the atmosphere.</li><li>Gravity kept the vapour near Earth instead of letting it escape.</li><li>As Earth cooled, vapour condensed and collected as liquid water.</li></ol><p>A body with much weaker gravity than Earth is less able to hold on to gases, so it loses vapour to space. A body that stays very hot keeps its water as vapour. Both gravity <em>and</em> temperature matter.</p><p><strong>Typical 3-mark answer to \"Outline why Earth has retained its water\".</strong> (1) Earth's gravity is strong enough to hold water vapour and other gases. (2) The temperature fell low enough for vapour to condense. (3) The liquid water collected as oceans, which stay liquid because temperatures stay in the right range.</p><div class=\"note\">Mark-scheme language: \"extraplanetary origin\", \"gravity\", \"condensation\". You are not asked to compare origin hypotheses.</div>","ja":"<p><em>(AHL)</em> <strong>2つの別々の問い：水はどこから来たのか、そしてなぜ今も残っているのか。</strong></p><table><tr><th>問い</th><th>ガイドの答え</th><th>使うキーワード</th></tr><tr><td>起源</td><td>水を含む小惑星 (asteroid) が水を運んできた (地球外起源 extraplanetary origin)</td><td>「asteroids」「impacts」「from space」</td></tr><tr><td>保持：気体</td><td>重力が水蒸気を含む気体を地球の近くにとどめる</td><td>「gravity」「not lost to space」</td></tr><tr><td>保持：液体</td><td>温度が十分低く、水蒸気が凝縮して液体の水になる</td><td>「condense」「oceans」</td></tr></table><p><strong>順を追って。</strong></p><ol><li>水を含む小惑星が若い地球に衝突した。</li><li>水が水蒸気として大気中に放出された。</li><li>重力が水蒸気を逃がさず地球の近くにとどめた。</li><li>地球が冷えると水蒸気が凝縮し、液体の水として集まった。</li></ol><p>地球よりずっと重力が弱い天体は気体を保持しにくく、水蒸気を宇宙に失います。非常に高温のままの天体では、水は水蒸気のままです。重力<em>と</em>温度の両方が重要です。</p><p><strong>「地球が水を保持してきた理由を概説せよ (Outline)」の3点解答例。</strong>(1) 地球の重力は水蒸気などの気体を保持できる強さである。(2) 温度が水蒸気の凝縮できる低さまで下がった。(3) 液体の水が海として集まり、温度が適した範囲にとどまるため液体のままである。</p><div class=\"note\">採点で使われる言葉：「extraplanetary origin」「gravity」「condensation」。起源についての複数の仮説を比べることは求められません。</div>","zh":"<p><em>(AHL)</em> <strong>兩個獨立的問題：水從何而來？為何至今仍在？</strong></p><table><tr><th>問題</th><th>課程指引的答案</th><th>應使用的關鍵詞</th></tr><tr><td>來源</td><td>含水的小行星 (asteroid) 把水帶到地球 (地球以外的來源 extraplanetary origin)</td><td>「asteroids」、「impacts」、「from space」</td></tr><tr><td>保留：氣體</td><td>引力把包括水蒸氣在內的氣體留在地球附近</td><td>「gravity」、「not lost to space」</td></tr><tr><td>保留：液體</td><td>溫度夠低，水蒸氣凝結成液態水</td><td>「condense」、「oceans」</td></tr></table><p><strong>逐步說明。</strong></p><ol><li>含水的小行星撞擊年輕的地球。</li><li>水以水蒸氣形式釋放到大氣中。</li><li>引力把水蒸氣留在地球附近，使它不致逃逸。</li><li>地球冷卻後，水蒸氣凝結，並以液態水聚集。</li></ol><p>引力遠比地球弱的天體較難留住氣體，會把水蒸氣流失到太空。一直非常炎熱的天體，水會保持為水蒸氣。引力<em>和</em>溫度都很重要。</p><p><strong>「概述 (Outline) 地球為何保留了水」的 3 分答案示例。</strong>(1) 地球的引力強得足以留住水蒸氣和其他氣體。(2) 溫度下降至足以令水蒸氣凝結。(3) 液態水聚集成海洋，由於溫度維持在適當範圍，所以保持為液體。</p><div class=\"note\">評分用語：「extraplanetary origin」、「gravity」、「condensation」。你不需要比較不同的水來源假說。</div>"},
        ahl: true,
        heading: L("Where Earth's water came from (AHL)", "地球の水の起源 (AHL)", "地球上水的來源 (AHL)"),
        body: L(
          "<p>Water has been abundant on Earth for billions of years. This gave life the time and the medium it needed to evolve.</p>" +
          "<p><strong>Origin.</strong> The guide limits you to one hypothesis: water arrived on Earth from space on <strong>asteroids</strong> (extraplanetary origin), which contained water. Impacts delivered it to the young Earth.</p>" +
          "<p><strong>Retention</strong> (why Earth kept its water). Two reasons:</p>" +
          "<ul><li><strong>Gravity</strong> is strong enough to hold water vapour and other gases close to Earth, so they are not lost to space.</li>" +
          "<li>Temperatures became <strong>low enough for water vapour to condense</strong> into liquid water, which collected as oceans.</li></ul>",
          "<p>地球では何十億年もの間、水が豊富にありました。そのおかげで、生命は進化するのに必要な時間と媒体を得ることができました。</p>" +
          "<p><strong>起源。</strong>ガイドが求めるのは1つの仮説だけです。水は含水の<strong>小惑星 (asteroids)</strong> によって宇宙から地球にもたらされた (地球外起源 (extraplanetary origin)) というものです。衝突によって若い地球に水が運ばれました。</p>" +
          "<p><strong>保持</strong> (地球が水を失わなかった理由)。理由は2つです。</p>" +
          "<ul><li><strong>重力 (gravity)</strong> が十分に強く、水蒸気などの気体を地球の近くにとどめ、宇宙へ失われないようにする。</li>" +
          "<li>温度が<strong>水蒸気が凝結できるほど低く</strong>なり、液体の水となって海にたまった。</li></ul>",
          "<p>地球上的水已經大量存在了數十億年。這給了生命進化所需的時間和媒介。</p>" +
          "<p><strong>來源。</strong>課程指引只要求一個假說：水由含有水的<strong>小行星 (asteroids)</strong> 從太空帶到地球 (地球以外來源 (extraplanetary origin))。撞擊把水送到年輕的地球。</p>" +
          "<p><strong>保留</strong> (地球為何能保住水)。兩個原因：</p>" +
          "<ul><li><strong>重力 (gravity)</strong> 足夠強，能把水蒸氣等氣體留在地球附近，不致散失到太空。</li>" +
          "<li>溫度<strong>低至足以使水蒸氣凝結</strong>成液態水，並匯聚成海洋。</li></ul>"),
        examTip: L(
          "Stick to asteroids for the origin and gravity plus condensation for retention. You will not be asked to compare other hypotheses.",
          "起源は小惑星、保持は重力と凝結に絞って答えます。他の仮説を比較することは求められません。",
          "來源只需答小行星，保留則答重力和凝結。不會要求比較其他假說。")
      },
      {
        ref: "A1.1.8",
        deeper: {"en":"<p><em>(AHL)</em> <strong>The reasoning chain behind \"follow the water\".</strong></p><ol><li>On Earth, life depends on liquid water as a solvent and a medium for metabolism (A1.1.1, A1.1.5).</li><li>So a planet with liquid water on its surface is a reasonable place to look for life.</li><li>Liquid water needs a surface temperature in the right range.</li><li>Surface temperature depends mainly on the planet's distance from its star.</li></ol><table><tr><th>Position</th><th>Surface temperature</th><th>State of water</th></tr><tr><td>Too close to star</td><td>Too hot</td><td>Vapour</td></tr><tr><td>In the Goldilocks zone</td><td>Suitable</td><td>Liquid possible</td></tr><tr><td>Too far from star</td><td>Too cold</td><td>Ice</td></tr></table><p>A hotter, brighter star puts its zone further out; a cooler, dimmer star puts it closer in.</p><p><strong>Why the zone is only a starting point.</strong> A planet in the zone <em>could</em> have liquid water, but it also needs to hold on to that water (gravity, as in A1.1.7). Even then, liquid water is a necessary condition for life as we know it, not proof of life.</p><p><strong>Typical 3-mark answer to \"Explain the importance of the Goldilocks zone\".</strong> (1) It is the range of distances where temperature allows liquid water. (2) Life on Earth depends on liquid water. (3) So planets in the zone are the best candidates to search for life.</p><div class=\"note\">Mark-scheme language: \"liquid water\", \"distance from the star\", \"possible, not certain\". Avoid saying that a planet in the zone \"has life\" or \"is habitable for sure\".</div>","ja":"<p><em>(AHL)</em> <strong>「水を追え」の背後にある論理の連鎖。</strong></p><ol><li>地球では、生命は溶媒および代謝の媒体としての液体の水に依存している (A1.1.1, A1.1.5)。</li><li>したがって、表面に液体の水がある惑星は、生命を探す場所として妥当である。</li><li>液体の水には、適した範囲の表面温度が必要である。</li><li>表面温度は主に、惑星と恒星との距離で決まる。</li></ol><table><tr><th>位置</th><th>表面温度</th><th>水の状態</th></tr><tr><td>恒星に近すぎる</td><td>高すぎる</td><td>水蒸気</td></tr><tr><td>ゴルディロックス・ゾーン (Goldilocks zone)</td><td>適している</td><td>液体の可能性あり</td></tr><tr><td>恒星から遠すぎる</td><td>低すぎる</td><td>氷</td></tr></table><p>高温で明るい恒星ではゾーンはより遠くに、低温で暗い恒星ではより近くになります。</p><p><strong>ゾーンは出発点にすぎない理由。</strong>ゾーン内の惑星には液体の水が存在する<em>可能性</em>がありますが、その水を保持し続ける必要もあります (A1.1.7 の重力)。それでも、液体の水は私たちの知る生命にとって必要条件であり、生命がいる証拠ではありません。</p><p><strong>「ゴルディロックス・ゾーンの重要性を説明せよ (Explain)」の3点解答例。</strong>(1) 温度が液体の水を可能にする距離の範囲である。(2) 地球の生命は液体の水に依存している。(3) したがって、ゾーン内の惑星は生命探査の最有力候補である。</p><div class=\"note\">採点で使われる言葉：「liquid water」「distance from the star」「possible, not certain」。ゾーン内の惑星に「生命がいる」「確実に居住可能」と書くのは避けましょう。</div>","zh":"<p><em>(AHL)</em> <strong>「追尋水」背後的推理鏈。</strong></p><ol><li>在地球上，生命依賴液態水作為溶劑及新陳代謝的介質 (A1.1.1、A1.1.5)。</li><li>所以表面有液態水的行星，是尋找生命的合理地點。</li><li>液態水需要表面溫度處於適當範圍。</li><li>表面溫度主要取決於行星與恆星的距離。</li></ol><table><tr><th>位置</th><th>表面溫度</th><th>水的狀態</th></tr><tr><td>離恆星太近</td><td>太熱</td><td>水蒸氣</td></tr><tr><td>適居帶 (Goldilocks zone)</td><td>適合</td><td>可能有液態水</td></tr><tr><td>離恆星太遠</td><td>太冷</td><td>冰</td></tr></table><p>較熱、較亮的恆星，其適居帶較遠；較冷、較暗的恆星，其適居帶較近。</p><p><strong>為何適居帶只是起點。</strong>適居帶內的行星<em>可能</em>有液態水，但也必須能留住那些水 (A1.1.7 的引力)。即使如此，液態水只是我們所知生命的必要條件，並非生命存在的證明。</p><p><strong>「解釋 (Explain) 適居帶的重要性」的 3 分答案示例。</strong>(1) 它是溫度容許液態水存在的距離範圍。(2) 地球上的生命依賴液態水。(3) 所以適居帶內的行星是尋找生命的最佳候選。</p><div class=\"note\">評分用語：「liquid water」、「distance from the star」、「possible, not certain」。避免寫適居帶內的行星「有生命」或「必定適合居住」。</div>"},
        ahl: true,
        heading: L("Water and the search for life elsewhere (AHL)", "水と地球外生命の探索 (AHL)", "水與尋找外星生命 (AHL)"),
        body: L(
          "<p>Because life on Earth depends on liquid water, scientists searching for extraterrestrial life look first for places where liquid water could exist.</p>" +
          "<p>The <strong>Goldilocks zone</strong> (also called the habitable zone) is the range of distances from a star where a planet's surface temperature allows liquid water.</p>" +
          "<ul><li>Too close to the star: too hot, water would exist only as vapour.</li>" +
          "<li>Too far from the star: too cold, water would be frozen.</li>" +
          "<li>In between: \"just right\" for liquid water, like the story of Goldilocks and the three bears.</li></ul>" +
          "<p>A planet in this zone is a possible home for life, but it does not prove that life is there.</p>",
          "<p>地球の生命は液体の水に依存しているため、地球外生命を探す科学者は、まず液体の水が存在しうる場所を探します。</p>" +
          "<p><strong>ゴルディロックスゾーン (Goldilocks zone)</strong> (ハビタブルゾーン (habitable zone) ともいう) とは、惑星の表面温度が液体の水の存在を許す、恒星からの距離の範囲です。</p>" +
          "<ul><li>恒星に近すぎる：高温すぎて、水は水蒸気としてしか存在できない。</li>" +
          "<li>恒星から遠すぎる：低温すぎて、水は凍る。</li>" +
          "<li>その中間：液体の水に「ちょうどよい」。ゴルディロックスと3匹のくまの物語にちなむ。</li></ul>" +
          "<p>このゾーンにある惑星は生命の存在しうる場所ですが、生命がいることの証明にはなりません。</p>",
          "<p>地球上的生命依賴液態水，因此尋找外星生命的科學家首先會尋找可能存在液態水的地方。</p>" +
          "<p><strong>適居帶 (Goldilocks zone)</strong> (又稱宜居帶 (habitable zone)) 是與恆星之間的一段距離範圍，在這範圍內行星表面的溫度容許液態水存在。</p>" +
          "<ul><li>離恆星太近：太熱，水只能以水蒸氣形式存在。</li>" +
          "<li>離恆星太遠：太冷，水會結冰。</li>" +
          "<li>在兩者之間：對液態水來說「剛剛好」，名字來自金髮姑娘與三隻熊的故事。</li></ul>" +
          "<p>位於這個區域的行星可能是生命的家，但並不能證明那裏有生命。</p>")
      }
    ],

    keyTerms: [
      { term: L("polar", "極性のある", "極性"), def: L("Having a slightly positive end and a slightly negative end because electrons are shared unequally.", "電子が不均等に共有されるため、わずかに正の端とわずかに負の端をもつこと。", "由於電子分配不均，一端帶少量正電荷、另一端帶少量負電荷。"), ahl: false },
      { term: L("hydrogen bond", "水素結合", "氫鍵"), def: L("A weak attraction between a δ+ hydrogen of one molecule and a δ− atom (such as oxygen) of another.", "ある分子の δ+ の水素と、別の分子の δ− の原子 (酸素など) の間に働く弱い引力。", "一個分子帶 δ+ 的氫與另一分子帶 δ− 的原子 (如氧) 之間的微弱吸引力。"), ahl: false },
      { term: L("cohesion", "凝集力", "內聚力"), def: L("Attraction between molecules of the same substance.", "同じ物質の分子どうしの引力。", "同一物質的分子之間的吸引力。"), ahl: false },
      { term: L("adhesion", "付着力", "附著力"), def: L("Attraction between molecules of different substances, such as water and a cell wall.", "異なる物質の分子どうしの引力 (水と細胞壁など)。", "不同物質的分子之間的吸引力，例如水與細胞壁。"), ahl: false },
      { term: L("surface tension", "表面張力", "表面張力"), def: L("The skin-like effect at a water surface caused by cohesion.", "凝集力によって水面に生じる、膜のような効果。", "由內聚力造成、在水面出現的薄膜狀效應。"), ahl: false },
      { term: L("capillary action", "毛細管現象", "毛細管作用"), def: L("Movement of water up a narrow space because of adhesion and cohesion.", "付着力と凝集力によって、水が狭い空間を上昇する現象。", "水因附著力和內聚力而在狹窄空間中向上移動。"), ahl: false },
      { term: L("hydrophilic", "親水性", "親水"), def: L("Dissolves in, or is attracted to, water; polar or charged.", "水に溶ける、または水に引かれる性質。極性または電荷をもつ。", "能溶於水或被水吸引；具極性或帶電。"), ahl: false },
      { term: L("hydrophobic", "疎水性", "疏水"), def: L("Does not dissolve in water; non-polar.", "水に溶けない性質。無極性。", "不溶於水；非極性。"), ahl: false },
      { term: L("solvent", "溶媒", "溶劑"), def: L("A liquid in which other substances dissolve.", "他の物質を溶かす液体。", "能溶解其他物質的液體。"), ahl: false },
      { term: L("buoyancy", "浮力", "浮力"), def: L("The upward force of a fluid that supports an object in it.", "流体が物体を支える上向きの力。", "流體對其中物體產生的向上支撐力。"), ahl: false },
      { term: L("viscosity", "粘性", "黏度"), def: L("How strongly a fluid resists flowing or being moved through.", "流体が流れたり、その中を物体が動いたりすることに抵抗する度合い。", "流體抵抗流動或抵抗物體在其中移動的程度。"), ahl: false },
      { term: L("specific heat capacity", "比熱", "比熱容"), def: L("The energy needed to raise the temperature of a given mass of a substance by one degree. Water's is high.", "一定質量の物質の温度を1度上げるのに必要なエネルギー。水は大きい。", "使一定質量的物質升溫一度所需的能量。水的比熱容很大。"), ahl: false },
      { term: L("Goldilocks zone", "ゴルディロックスゾーン", "適居帶"), def: L("The range of distances from a star where a planet could have liquid water on its surface.", "惑星の表面に液体の水が存在しうる、恒星からの距離の範囲。", "與恆星相距的某個範圍，在該範圍內行星表面可能有液態水。"), ahl: true }
    ],

    misconceptions: [
      {
        wrong: L("A hydrogen bond is the bond between the H and the O inside a water molecule.", "水素結合とは、水分子の中の H と O の間の結合である。", "氫鍵是水分子內 H 與 O 之間的鍵。"),
        right: L("The bond inside the molecule is covalent. A hydrogen bond is a weaker attraction between different molecules (δ+ H to δ− O).", "分子内の結合は共有結合です。水素結合は、異なる分子の間に働くより弱い引力 (δ+ の H と δ− の O) です。", "分子內的鍵是共價鍵。氫鍵是不同分子之間較弱的吸引力 (δ+ 的 H 與 δ− 的 O)。")
      },
      {
        wrong: L("Cohesion and adhesion are the same thing.", "凝集力と付着力は同じものである。", "內聚力和附著力是同一回事。"),
        right: L("Cohesion is water sticking to water. Adhesion is water sticking to a different material.", "凝集力は水が水にくっつくこと。付着力は水が別の物質にくっつくことです。", "內聚力是水黏水；附著力是水黏附在其他物質上。")
      },
      {
        wrong: L("Hydrophobic substances are repelled by water.", "疎水性の物質は水にはじかれる。", "疏水物質會被水排斥。"),
        right: L("They are non-polar, so they cannot form attractions with water and do not dissolve. Water molecules simply prefer to bond to each other.", "無極性なので水と引き合うことができず、溶けません。水分子は単に互いに結合するほうを好むのです。", "它們是非極性的，不能與水產生吸引力，所以不溶解。水分子只是更傾向於彼此結合。")
      },
      {
        wrong: L("Water is a poor solvent for ions because it has no charge.", "水は電荷がないのでイオンの溶媒としては不向きである。", "水沒有電荷，所以不是離子的良好溶劑。"),
        right: L("Water has partial charges (δ+ and δ−). They are attracted to ions and surround them, which is why ionic substances dissolve.", "水には部分電荷 (δ+ と δ−) があります。これがイオンを引き寄せて取り囲むので、イオン性物質は溶けます。", "水有部分電荷 (δ+ 和 δ−)，會吸引並包圍離子，所以離子化合物能溶解。")
      }
    ],

    beyondSyllabus: [
      L("You do not need to know the bond angle of water (about 104.5°) or why the molecule is bent.", "水分子の結合角 (約104.5°) や分子が折れ曲がっている理由を知る必要はありません。", "你不需要知道水分子的鍵角 (約 104.5°) 或分子為何呈彎曲形。"),
      L("You do not need to know electronegativity values, or to use the term \"dipole\" in answers (\"polar\" and partial charges δ+/δ− are enough).", "電気陰性度の値を知る必要はなく、解答で「双極子 (dipole)」という語を使う必要もありません (「極性」と部分電荷 δ+/δ− で十分です)。", "你不需要知道電負性數值，答題時也不必用「偶極 (dipole)」一詞 (只需「極性」和部分電荷 δ+/δ−)。"),
      L("You do not need the numerical values of specific heat capacity, latent heat of vaporisation or density, nor to explain the anomalous density of ice or why ice floats; the guide does not list them for A1.1.", "比熱、蒸発熱、密度の数値を知る必要はありません。氷の密度の異常さや氷が浮く理由を説明する必要もありません。A1.1 ではガイドが挙げていません。", "你不需要記住比熱容、汽化潛熱或密度的數值，也不必解釋冰的密度反常或冰為何會浮起；課程指引在 A1.1 沒有列出這些內容。"),
      L("You do not need the ionisation of water, or acids and bases, for this subtopic. pH is not needed here either: it is taught in B1.2 (Proteins: effect of pH on protein structure) and C1.1 (Enzymes and metabolism).", "このサブトピックでは、水の電離や酸・塩基は必要ありません。pH もここでは不要です。pH は B1.2 (タンパク質：pH がタンパク質の構造に与える影響) と C1.1 (酵素と代謝) で学びます。", "此子課題不需要水的電離或酸與鹼。pH 在這裏也不需要：它會在 B1.2 (蛋白質：pH 對蛋白質結構的影響) 和 C1.1 (酶與新陳代謝) 中學習。"),
      L("You do not need to know the Reynolds number, Poiseuille's law, or any equation for surface tension or capillary rise; explanations are qualitative.", "レイノルズ数、ポアズイユの法則、表面張力や毛細管上昇の式は不要です。説明は定性的なもので足ります。", "你不需要雷諾數、泊肅葉定律，或表面張力和毛細管上升的任何公式；解釋只需定性描述。"),
      L("You do not need to recall specific hypotheses for the origin of water on Earth other than asteroids, or details of any particular exoplanet or moon.", "小惑星以外の地球の水の起源の仮説や、特定の系外惑星・衛星の詳細を覚える必要はありません。", "你不需要記住小行星以外有關地球水來源的假說，也不必記住任何特定系外行星或衛星的細節。")
    ],

    links: [
      { to: "B1.1", why: L("Hydrophilic and hydrophobic molecules: sugars dissolve, lipids do not.", "親水性・疎水性の分子：糖は溶け、脂質は溶けない。", "親水與疏水分子：糖會溶解，脂質不會。") },
      { to: "B2.1", why: L("Hydrophobic tails and hydrophilic heads of phospholipids shape membranes.", "リン脂質の疎水性の尾部と親水性の頭部が膜の構造をつくる。", "磷脂的疏水尾部和親水頭部塑造了細胞膜的結構。") },
      { to: "B1.2", why: L("Hydrogen bonds and hydrophobic interactions fold proteins.", "水素結合と疎水性相互作用がタンパク質を折りたたむ。", "氫鍵和疏水相互作用使蛋白質摺疊。") },
      { to: "B3.2", why: L("Cohesion, adhesion and tension move water up the xylem.", "凝集力・付着力・張力が木部で水を上昇させる。", "內聚力、附著力和張力使水在木質部中上升。") },
      { to: "A2.1", why: L("Water as the medium in which the first cells formed.", "最初の細胞が形成された媒体としての水。", "水是最早細胞形成的媒介。") }
    ],

    natureOfScience: [],

    questions: [
      {
        id: "a1-1-q01", type: "mcq", ahl: false, difficulty: 1, ref: "A1.1.2", paper: "1A",
        stem: L("Why is a water molecule described as polar?", "水分子が「極性がある」といわれるのはなぜか。", "為何水分子被稱為極性分子？"),
        options: [
          L("Oxygen gives its electrons completely to the hydrogen atoms.", "酸素が電子を水素原子に完全に与えるから。", "氧把電子完全給予氫原子。"),
          L("The electrons in the O–H bonds are shared unequally, so O is slightly negative and H slightly positive.", "O–H 結合の電子が不均等に共有され、O がわずかに負、H がわずかに正になるから。", "O–H 鍵中的電子分配不均，使 O 略帶負電、H 略帶正電。"),
          L("Water molecules are joined to each other by hydrogen bonds.", "水分子どうしが水素結合でつながっているから。", "水分子之間以氫鍵相連。"),
          L("Water has an overall negative charge.", "水は全体として負の電荷をもつから。", "水整體帶負電荷。")
        ],
        answer: 1,
        explanation: L(
          "B is correct: polarity comes from unequal sharing of electrons inside the molecule. A describes an ionic bond, which is not what happens in water. C is true but is a result of polarity, not its cause. D is wrong: the molecule is neutral overall.",
          "B が正解です。極性は分子内の電子の不均等な共有から生じます。A はイオン結合の説明で、水では起こりません。C は事実ですが、極性の原因ではなく結果です。D は誤りで、分子は全体として中性です。",
          "答案是 B。極性來自分子內電子的不均等分配。A 描述的是離子鍵，水中並非如此。C 雖然正確，但那是極性的結果而不是原因。D 錯誤，分子整體是電中性的。")
      },
      {
        id: "a1-1-q02", type: "mcq", ahl: false, difficulty: 1, ref: "A1.1.2", paper: "1A",
        stem: L("Which statement correctly describes a hydrogen bond in liquid water?", "液体の水の水素結合について正しい記述はどれか。", "下列哪項正確描述液態水中的氫鍵？"),
        options: [
          L("It joins the hydrogen and oxygen atoms inside one water molecule.", "1つの水分子内の水素原子と酸素原子をつなぐ。", "連接同一個水分子內的氫原子和氧原子。"),
          L("It is a strong covalent bond that must break for water to dissolve salt.", "水が塩を溶かすために切れなければならない強い共有結合である。", "是水溶解鹽時必須斷開的強共價鍵。"),
          L("It is an attraction between a δ+ hydrogen of one molecule and a δ− oxygen of another molecule.", "ある分子の δ+ の水素と、別の分子の δ− の酸素の間の引力である。", "是一個分子 δ+ 的氫與另一個分子 δ− 的氧之間的吸引力。"),
          L("It is an attraction between two δ+ hydrogen atoms of neighbouring molecules.", "隣り合う分子の δ+ の水素原子どうしの引力である。", "是相鄰分子兩個 δ+ 氫原子之間的吸引力。")
        ],
        answer: 2,
        explanation: L(
          "C is correct. A is the covalent bond. B is wrong because hydrogen bonds are weak and covalent bonds in water do not break when salt dissolves. D is wrong because two δ+ atoms repel each other.",
          "C が正解です。A は共有結合の説明です。B は誤りで、水素結合は弱く、塩が溶けるときに水の共有結合は切れません。D は誤りで、δ+ どうしは反発します。",
          "答案是 C。A 描述的是共價鍵。B 錯誤，氫鍵很弱，鹽溶解時水的共價鍵不會斷開。D 錯誤，兩個 δ+ 原子會互相排斥。")
      },
      {
        id: "a1-1-q03", type: "short", ahl: false, difficulty: 2, ref: "A1.1.2", paper: "2",
        commandTerm: "Draw", marks: 3,
        stem: L("Draw two water molecules to show the hydrogen bond between them. Include partial charges.", "2つの水分子を描き、それらの間の水素結合を示せ。部分電荷も記入せよ。", "繪畫兩個水分子，顯示它們之間的氫鍵，並標示部分電荷。"),
        markscheme: [
          L("Each molecule drawn as one O joined to two H (with the bonds shown)", "各分子を、1つの O と2つの H (結合を示す) で描いている", "每個分子畫成一個 O 連接兩個 H (顯示鍵)"),
          L("δ− on oxygen and δ+ on hydrogen atoms", "酸素に δ−、水素に δ+ を付けている", "氧上標 δ−，氫上標 δ+"),
          L("A dashed line (hydrogen bond) drawn from the H of one molecule to the O of the other", "一方の分子の H から他方の O へ破線 (水素結合) を引いている", "用虛線 (氫鍵) 由一個分子的 H 畫到另一個分子的 O")
        ],
        modelAnswer: L(
          "Two V-shaped molecules, each O with two H. O labelled δ−, H labelled δ+. A dashed line runs from an H of the first molecule to the O of the second and is labelled \"hydrogen bond\".",
          "それぞれ O と 2 つの H からなる V 字形の分子を2つ描く。O に δ−、H に δ+ を記す。最初の分子の H から2つ目の分子の O へ破線を引き、「水素結合」と記す。",
          "畫兩個 V 形分子，各由一個 O 和兩個 H 組成。O 標 δ−，H 標 δ+。由第一個分子的 H 到第二個分子的 O 畫一條虛線，並註明「氫鍵」。")
      },
      {
        id: "a1-1-q04", type: "multi", ahl: false, difficulty: 2, ref: "A1.1.3", paper: "1A",
        stem: L("Which of the following are consequences of the cohesion of water? Select all that apply.", "水の凝集力の結果であるものをすべて選べ。", "下列哪些是水的內聚力所造成的結果？(選出所有適用者)"),
        options: [
          L("A pond skater walking on the surface of a pond", "池の水面を歩くアメンボ", "水黽在池塘水面上行走"),
          L("An unbroken column of water being pulled up a xylem vessel", "木部の道管の中を途切れずに引き上げられる水の柱", "水柱不斷裂地被拉上木質部導管"),
          L("Salt dissolving in water", "塩が水に溶けること", "鹽溶於水"),
          L("Water being held between soil particles", "土壌粒子の間に水が保持されること", "水被保留在土壤顆粒之間")
        ],
        answer: [0, 1],
        explanation: L(
          "Surface tension (A) and the unbroken water column under tension (B) both depend on water molecules sticking to each other. Dissolving salt (C) is a solvent property. Water held between soil particles (D) is adhesion, since water sticks to the particles.",
          "表面張力 (A) と張力下で途切れない水の柱 (B) は、どちらも水分子どうしがくっつくことによります。塩が溶ける (C) は溶媒としての性質です。土壌粒子の間に水が保持される (D) のは付着力で、水が粒子にくっつくからです。",
          "表面張力 (A) 和受張力下不斷裂的水柱 (B) 都依賴水分子互相黏合。鹽溶解 (C) 是溶劑性質。水被保留在土壤顆粒之間 (D) 是附著力，因為水黏附在顆粒上。")
      },
      {
        id: "a1-1-q05", type: "order", ahl: false, difficulty: 2, ref: "A1.1.3", paper: "1A",
        stem: L("Put these events in order to explain how water is moved up a tall plant.", "背の高い植物の中で水が上昇する仕組みを説明する出来事を、正しい順に並べよ。", "把下列事件排列成正確次序，以解釋水如何在高大植物中上升。"),
        items: [
          L("Water evaporates from the leaves.", "葉から水が蒸発する。", "葉片蒸發水分。"),
          L("The water in the xylem is pulled upwards, so it is under tension.", "木部の水が上へ引っ張られ、張力を受ける。", "木質部中的水被向上拉，因而受到張力。"),
          L("Hydrogen bonds between water molecules (cohesion) keep the column of water unbroken.", "水分子間の水素結合 (凝集力) により、水の柱が途切れない。", "水分子之間的氫鍵 (內聚力) 使水柱不致斷裂。"),
          L("Water is drawn up from the roots to replace the water lost.", "失われた水を補うために、根から水が引き上げられる。", "水從根部被拉上來，補充流失的水。")
        ],
        explanation: L(
          "Evaporation creates the pull. The pull acts as tension on the water. Cohesion lets the pull pass along the whole column. Water then rises from the roots.",
          "蒸発が引く力を生みます。その力が水への張力になります。凝集力によって、その引く力が水の柱全体に伝わります。その結果、根から水が上昇します。",
          "蒸發產生拉力，拉力使水受到張力。內聚力讓拉力傳遞到整條水柱。結果水從根部上升。")
      },
      {
        id: "a1-1-q06", type: "match", ahl: false, difficulty: 1, ref: "A1.1.3–5", paper: "1A",
        stem: L("Match each property of water to a biological example.", "水の各性質を、生物学的な例と対応させよ。", "把水的每種性質與一個生物學例子配對。"),
        pairs: [
          { left: L("Cohesion under tension", "張力下での凝集力", "張力下的內聚力"), right: L("Continuous water column in xylem", "木部の水の連続した柱", "木質部中連續的水柱") },
          { left: L("Surface tension", "表面張力", "表面張力"), right: L("Pond skaters using the water surface as a habitat", "水面を生息場所とするアメンボ", "水黽以水面為棲息地") },
          { left: L("Adhesion", "付着力", "附著力"), right: L("Water held in plant cell walls", "植物の細胞壁に保持された水", "被保留在植物細胞壁中的水") },
          { left: L("Solvent", "溶媒", "溶劑"), right: L("Glucose carried dissolved in blood plasma", "血しょうに溶けて運ばれるグルコース", "葡萄糖溶於血漿中被運載") }
        ],
        explanation: L(
          "Each property links to the guide's examples: xylem (cohesion), surface habitats (surface tension), cell walls and soil (adhesion), and transport of dissolved substances (solvent).",
          "各性質は、ガイドの例と結びつきます。木部 (凝集力)、水面の生息場所 (表面張力)、細胞壁と土壌 (付着力)、溶けた物質の輸送 (溶媒) です。",
          "每項性質都對應課程指引的例子：木質部 (內聚力)、水面棲息地 (表面張力)、細胞壁和土壤 (附著力)，以及溶解物質的運輸 (溶劑)。")
      },
      {
        id: "a1-1-q07", type: "mcq", ahl: false, difficulty: 1, ref: "A1.1.5", paper: "1A",
        stem: L("Which of these substances is hydrophobic and would not dissolve in water?", "水に溶けない疎水性の物質はどれか。", "下列哪種物質是疏水的，不會溶於水？"),
        options: [
          L("Sodium chloride (Na⁺ and Cl⁻ ions)", "塩化ナトリウム (Na⁺ と Cl⁻ のイオン)", "氯化鈉 (Na⁺ 和 Cl⁻ 離子)"),
          L("Glucose", "グルコース", "葡萄糖"),
          L("A triglyceride (fat)", "トリグリセリド (脂肪)", "三酸甘油酯 (脂肪)"),
          L("An amino acid with a charged R group", "電荷をもつ R 基をもつアミノ酸", "R 基帶電荷的氨基酸")
        ],
        answer: 2,
        explanation: L(
          "Fats are non-polar, so water cannot form attractions with them. Ions (A), polar glucose (B) and charged amino acids (D) are all attracted to the partial charges on water and dissolve.",
          "脂肪は無極性なので、水は脂肪と引き合うことができません。イオン (A)、極性のあるグルコース (B)、電荷をもつアミノ酸 (D) は、いずれも水の部分電荷に引かれて溶けます。",
          "脂肪是非極性的，水不能與它產生吸引力。離子 (A)、極性的葡萄糖 (B) 和帶電的氨基酸 (D) 都會被水的部分電荷吸引而溶解。")
      },
      {
        id: "a1-1-q08", type: "short", ahl: false, difficulty: 2, ref: "A1.1.5", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Explain why sodium chloride dissolves in water.", "塩化ナトリウムが水に溶ける理由を説明せよ。", "解釋氯化鈉為何能溶於水。"),
        markscheme: [
          L("Water molecules are polar / have partial charges (δ+ on H, δ− on O)", "水分子は極性をもつ／部分電荷 (H が δ+、O が δ−) をもつ", "水分子有極性／有部分電荷 (H 為 δ+，O 為 δ−)"),
          L("δ− oxygen is attracted to Na⁺ and δ+ hydrogen is attracted to Cl⁻", "δ− の酸素は Na⁺ に、δ+ の水素は Cl⁻ に引かれる", "δ− 的氧吸引 Na⁺，δ+ 的氫吸引 Cl⁻"),
          L("Water molecules surround each ion and separate the ions from each other", "水分子が各イオンを取り囲み、イオンどうしを引き離す", "水分子包圍每個離子，把離子彼此分開")
        ],
        modelAnswer: L(
          "Water is polar. Its δ− oxygen atoms are attracted to the positive sodium ions and its δ+ hydrogen atoms to the negative chloride ions. Water molecules surround each ion and pull it away from the crystal, so the salt dissolves.",
          "水は極性をもつ。δ− の酸素原子は正のナトリウムイオンに、δ+ の水素原子は負の塩化物イオンに引かれる。水分子は各イオンを取り囲んで結晶から引き離すので、塩は溶ける。",
          "水有極性。δ− 的氧原子吸引帶正電的鈉離子，δ+ 的氫原子吸引帶負電的氯離子。水分子包圍每個離子並把它從晶體中拉開，所以鹽溶解。")
      },
      {
        id: "a1-1-q09", type: "mcq", ahl: false, difficulty: 2, ref: "A1.1.5", paper: "1A",
        stem: L("Which statement best explains why most enzymes work in aqueous solution?", "ほとんどの酵素が水溶液中で働く理由として最も適切なものはどれか。", "下列哪項最能解釋為何大部分酶在水溶液中發揮作用？"),
        options: [
          L("Enzymes are hydrophobic and are pushed together by water.", "酵素は疎水性で、水によって押し寄せ合わされるから。", "酶是疏水的，被水擠在一起。"),
          L("Substrates and enzymes dissolve and move freely, so they can collide.", "基質と酵素が溶けて自由に動き、衝突できるから。", "底物和酶溶解後可自由移動，因此能夠碰撞。"),
          L("Water is a reactant in all enzyme-catalysed reactions.", "水はすべての酵素反応の反応物だから。", "水是所有酶催化反應的反應物。"),
          L("Water prevents hydrogen bonds from forming in enzymes.", "水が酵素内の水素結合の形成を妨げるから。", "水阻止酶內形成氫鍵。")
        ],
        answer: 1,
        explanation: L(
          "B is correct: water as solvent lets particles move and meet. A is wrong because many enzymes are soluble. C is wrong because water is a reactant only in some reactions (hydrolysis). D is wrong because it makes no sense for enzyme structure.",
          "B が正解です。溶媒としての水が、粒子が動いて出会うことを可能にします。A は誤りで、多くの酵素は水に溶けます。C は誤りで、水が反応物になるのは加水分解など一部の反応だけです。D は酵素の構造として成り立ちません。",
          "答案是 B：水作為溶劑讓粒子能移動和相遇。A 錯誤，許多酶是可溶的。C 錯誤，水只在部分反應 (如水解) 中是反應物。D 對酶結構來說並不合理。")
      },
      {
        id: "a1-1-q10", type: "mcq", ahl: false, difficulty: 2, ref: "A1.1.6", paper: "1A",
        stem: L("A ringed seal keeps warm in Arctic water mainly because", "ワモンアザラシが北極の水中で体温を保てるのは、主に次の理由による。", "環斑海豹能在北極水域保持體溫，主要是因為"),
        options: [
          L("water has a low thermal conductivity, so little heat is lost.", "水の熱伝導率が低く、熱があまり失われないから。", "水的熱傳導性低，所以流失的熱很少。"),
          L("a thick layer of blubber insulates it against a fluid that conducts heat away quickly.", "熱をすばやく奪う流体に対して、厚い皮下脂肪が断熱するから。", "厚厚的鯨脂為牠隔熱，抵擋會快速帶走熱量的流體。"),
          L("water is less dense than air, so it supports the seal.", "水は空気より密度が低く、アザラシを支えるから。", "水的密度比空氣低，所以能支撐海豹。"),
          L("the high viscosity of water traps heat next to the skin.", "水の粘性が高く、皮膚のそばに熱を閉じ込めるから。", "水的高黏度把熱量困在皮膚附近。")
        ],
        answer: 1,
        explanation: L(
          "B is correct. A is the tempting wrong answer: water has a HIGH thermal conductivity, which is why insulation is needed. C is wrong because water is denser than air. D confuses viscosity with insulation.",
          "B が正解です。A は引っかかりやすい誤りで、水の熱伝導率は「高い」ため、断熱が必要なのです。C は誤りで、水は空気より密度が高いです。D は粘性と断熱を混同しています。",
          "答案是 B。A 是容易誤選的答案：水的熱傳導性是「高」的，所以才需要隔熱。C 錯誤，水的密度比空氣高。D 把黏度與隔熱混為一談。")
      },
      {
        id: "a1-1-q11", type: "short", ahl: false, difficulty: 2, ref: "A1.1.6", paper: "2",
        commandTerm: "Distinguish", marks: 4,
        stem: L("Distinguish between water and air as habitats, referring to buoyancy and viscosity.", "浮力と粘性に触れながら、生息場所としての水と空気を区別せよ。", "就浮力和黏度，區分水和空氣作為棲息地的差異。"),
        markscheme: [
          L("Buoyancy is high in water but very low in air", "浮力は水中では大きいが、空気中では非常に小さい", "浮力在水中大，在空氣中極小"),
          L("So aquatic animals are supported by the water, whereas land/air animals need skeletons, legs or wings to resist gravity", "そのため水生動物は水に支えられるが、陸上・空中の動物は重力に逆らうために骨格・脚・翼が必要", "因此水生動物由水支撐，而陸生／飛行動物需要骨骼、腿或翅膀來抵抗重力"),
          L("Viscosity is high in water but low in air", "粘性は水中では大きいが、空気中では小さい", "黏度在水中大，在空氣中小"),
          L("So moving through water needs more force / animals in water are streamlined to reduce drag", "そのため水中を動くには大きな力が必要／水中の動物は抵抗を減らすため流線形になる", "因此在水中移動需要更大的力／水中動物為減少阻力而呈流線型")
        ],
        modelAnswer: L(
          "Water is much more buoyant than air, so a seal is held up by the water, while a loon in flight must produce all of its own lift with its wings. Water is also more viscous than air, so animals in water need streamlined bodies to reduce drag.",
          "水は空気よりはるかに浮力が大きいので、アザラシは水に支えられるが、飛んでいるオオハムは翼で自分の揚力をすべて生み出さなければならない。また水は空気より粘性が高いので、水中の動物は抵抗を減らすために流線形の体が必要である。",
          "水的浮力遠比空氣大，所以海豹由水托起，而飛行中的潛鳥必須用翅膀產生全部升力。水的黏度也比空氣高，所以水中動物需要流線型身體來減少阻力。")
      },
      {
        id: "a1-1-q12", type: "short", ahl: false, difficulty: 2, ref: "A1.1.6", paper: "1B",
        commandTerm: "Calculate", marks: 3,
        data: L(
          "<p>Equal masses of water and air were heated with the same heater for 8 minutes. The temperature was recorded (illustrative data).</p><table><tr><th>Time / min</th><th>Water / °C</th><th>Air / °C</th></tr><tr><td>0</td><td>20.0</td><td>20.0</td></tr><tr><td>2</td><td>20.6</td><td>22.4</td></tr><tr><td>4</td><td>21.2</td><td>24.8</td></tr><tr><td>6</td><td>21.8</td><td>27.2</td></tr><tr><td>8</td><td>22.4</td><td>29.6</td></tr></table>",
          "<p>同じ質量の水と空気を、同じヒーターで8分間加熱し、温度を記録した (架空のデータ)。</p><table><tr><th>時間 / 分</th><th>水 / °C</th><th>空気 / °C</th></tr><tr><td>0</td><td>20.0</td><td>20.0</td></tr><tr><td>2</td><td>20.6</td><td>22.4</td></tr><tr><td>4</td><td>21.2</td><td>24.8</td></tr><tr><td>6</td><td>21.8</td><td>27.2</td></tr><tr><td>8</td><td>22.4</td><td>29.6</td></tr></table>",
          "<p>以同一個加熱器加熱同質量的水和空氣 8 分鐘，並記錄溫度 (虛構數據)。</p><table><tr><th>時間 / 分鐘</th><th>水 / °C</th><th>空氣 / °C</th></tr><tr><td>0</td><td>20.0</td><td>20.0</td></tr><tr><td>2</td><td>20.6</td><td>22.4</td></tr><tr><td>4</td><td>21.2</td><td>24.8</td></tr><tr><td>6</td><td>21.8</td><td>27.2</td></tr><tr><td>8</td><td>22.4</td><td>29.6</td></tr></table>"),
        stem: L("(a) Calculate the mean rate of temperature rise of the water and of the air in °C per minute. (b) State what the data show about the specific heat capacity of water compared with air.", "(a) 水と空気の平均の温度上昇速度を °C/分で計算せよ。 (b) このデータから、水の比熱が空気に比べてどうであるかを述べよ。", "(a) 計算水和空氣的平均升溫速率 (°C／分鐘)。 (b) 指出數據顯示水的比熱容與空氣相比如何。"),
        markscheme: [
          L("Water: (22.4 − 20.0) ÷ 8 = 0.3 °C per minute", "水：(22.4 − 20.0) ÷ 8 = 0.3 °C/分", "水：(22.4 − 20.0) ÷ 8 = 0.3 °C／分鐘"),
          L("Air: (29.6 − 20.0) ÷ 8 = 1.2 °C per minute", "空気：(29.6 − 20.0) ÷ 8 = 1.2 °C/分", "空氣：(29.6 − 20.0) ÷ 8 = 1.2 °C／分鐘"),
          L("Water warms up more slowly, so it has a higher specific heat capacity (it needs more energy for the same temperature rise)", "水のほうがはるかにゆっくり温まるので、比熱が大きい (同じ温度上昇に、より多くのエネルギーが必要)", "水升溫慢得多，所以比熱容較高 (相同升溫需要更多能量)")
        ],
        modelAnswer: L(
          "Water: 2.4 ÷ 8 = 0.3 °C/min. Air: 9.6 ÷ 8 = 1.2 °C/min. Water warms about four times more slowly for the same heat input, so water has the higher specific heat capacity.",
          "水：2.4 ÷ 8 = 0.3 °C/分。空気：9.6 ÷ 8 = 1.2 °C/分。同じ熱量を与えても水は約4分の1の速さでしか温まらないので、水の比熱のほうが大きい。",
          "水：2.4 ÷ 8 = 0.3 °C／分鐘。空氣：9.6 ÷ 8 = 1.2 °C／分鐘。在相同熱量輸入下，水的升溫速度只有空氣的約四分之一，所以水的比熱容較高。")
      },
      {
        id: "a1-1-q13", type: "short", ahl: false, difficulty: 3, ref: "A1.1.4", paper: "1B",
        commandTerm: "Suggest", marks: 5,
        data: L(
          "<p>Glass tubes of different internal diameters were placed upright with their lower ends in a dish of water. The height that water rose above the water level in the dish was measured (illustrative data).</p><table><tr><th>Tube diameter / mm</th><th>Height of rise / mm</th></tr><tr><td>0.5</td><td>60</td></tr><tr><td>1.0</td><td>30</td></tr><tr><td>2.0</td><td>15</td></tr><tr><td>4.0</td><td>7.5</td></tr></table>",
          "<p>内径の異なるガラス管を、下端を水の入った皿に浸して立てた。皿の水面より上に水が上昇した高さを測定した (架空のデータ)。</p><table><tr><th>管の直径 / mm</th><th>上昇の高さ / mm</th></tr><tr><td>0.5</td><td>60</td></tr><tr><td>1.0</td><td>30</td></tr><tr><td>2.0</td><td>15</td></tr><tr><td>4.0</td><td>7.5</td></tr></table>",
          "<p>把內徑不同的玻璃管直立，下端浸在盛水的碟中。量度水在碟中水面以上上升的高度 (虛構數據)。</p><table><tr><th>管直徑 / mm</th><th>上升高度 / mm</th></tr><tr><td>0.5</td><td>60</td></tr><tr><td>1.0</td><td>30</td></tr><tr><td>2.0</td><td>15</td></tr><tr><td>4.0</td><td>7.5</td></tr></table>"),
        stem: L("(a) Describe the relationship between tube diameter and height of rise. (b) Predict the height of rise in a tube of diameter 8.0 mm. (c) Suggest how adhesion and cohesion explain the rise of water in the tubes. (d) Suggest why this is relevant to water in soil.",
          "(a) 管の直径と上昇の高さの関係を述べよ。 (b) 直径 8.0 mm の管での上昇の高さを予測せよ。 (c) 付着力と凝集力が管内の水の上昇をどのように説明するか示せ。 (d) これが土壌中の水にとってなぜ関連があるか示せ。",
          "(a) 描述管直徑與上升高度之間的關係。 (b) 預測直徑 8.0 mm 的管中水的上升高度。 (c) 提出附著力和內聚力如何解釋水在管中上升。 (d) 提出這與土壤中的水有何關係。"),
        markscheme: [
          L("As diameter increases, height of rise decreases (negative / inverse relationship)", "直径が大きくなるほど上昇の高さは小さくなる (負の／反比例の関係)", "直徑越大，上升高度越小 (負相關／反比關係)"),
          L("Height halves each time diameter doubles (inversely proportional); prediction 3.75 mm [accept ≈ 3.7–3.8]", "直径が2倍になるごとに高さは半分になる (反比例)。予測値は 3.75 mm [3.7〜3.8 程度も可]", "直徑每加倍，高度減半 (成反比)；預測 3.75 mm [接受約 3.7–3.8]"),
          L("Water adheres to (is attracted to) the polar/charged glass wall and is pulled up along it", "水は極性／電荷をもつガラスの壁に付着し (引かれ)、壁に沿って引き上げられる", "水附著於 (被吸引到) 極性／帶電的玻璃壁，並沿壁被拉上"),
          L("Cohesion (hydrogen bonds between water molecules) pulls the rest of the water up behind the water at the wall", "凝集力 (水分子間の水素結合) が、壁際の水の後ろの水を引き上げる", "內聚力 (水分子之間的氫鍵) 把壁邊水後面的其餘水拉上"),
          L("Soil has narrow gaps between charged particles, so water is held and can move up by capillary action", "土壌には電荷をもつ粒子の間に狭い隙間があるため、水は保持され、毛細管現象で上昇できる", "土壤的帶電顆粒之間有狹窄空隙，所以水被保留並可藉毛細管作用上升")
        ],
        modelAnswer: L(
          "(a) The narrower the tube, the higher the water rises: height is inversely proportional to diameter. (b) 60 mm × 0.5 mm = 30, so at 8.0 mm the height would be 30 ÷ 8 = 3.75 mm. (c) Water adheres to the polar glass wall and climbs it; cohesion between water molecules pulls the rest of the water up. (d) Soil particles are charged and the gaps between them are narrow, so water is held and drawn up by capillary action.",
          "(a) 管が細いほど水は高く上昇する。高さは直径に反比例する。 (b) 60 mm × 0.5 mm = 30 なので、8.0 mm では 30 ÷ 8 = 3.75 mm。 (c) 水は極性のあるガラス壁に付着して上り、水分子間の凝集力が残りの水を引き上げる。 (d) 土壌粒子は電荷をもち粒子間の隙間は狭いので、水は保持され、毛細管現象で引き上げられる。",
          "(a) 管越窄，水升得越高：高度與直徑成反比。 (b) 60 mm × 0.5 mm = 30，所以直徑 8.0 mm 時高度為 30 ÷ 8 = 3.75 mm。 (c) 水附著在極性的玻璃壁上並沿壁攀升；水分子之間的內聚力把其餘的水拉上。 (d) 土壤顆粒帶電，顆粒之間的空隙狹窄，所以水被保留並藉毛細管作用被拉上。")
      },
      {
        id: "a1-1-q14", type: "short", ahl: false, difficulty: 3, ref: "A1.1.3–5", paper: "2",
        commandTerm: "Explain", marks: 6,
        stem: L("Explain how hydrogen bonding between water molecules accounts for the cohesive, adhesive and solvent properties of water.", "水分子間の水素結合が、水の凝集性・付着性・溶媒としての性質をどのように説明するか述べよ。", "解釋水分子之間的氫鍵如何說明水的內聚、附著和溶劑性質。"),
        markscheme: [
          L("Water is polar because oxygen is δ− and hydrogen is δ+ (unequal sharing of electrons)", "水は、酸素が δ−、水素が δ+ であるため極性をもつ (電子の不均等な共有)", "水有極性，因為氧為 δ−、氫為 δ+ (電子分配不均)"),
          L("Hydrogen bonds form between δ+ H and δ− O of different water molecules", "異なる水分子の δ+ の H と δ− の O の間に水素結合ができる", "不同水分子的 δ+ H 與 δ− O 之間形成氫鍵"),
          L("Cohesion: water molecules stick to each other, so water can be pulled up xylem as an unbroken column / surface tension", "凝集力：水分子どうしがくっつくので、水は途切れない柱として木部を引き上げられる／表面張力", "內聚力：水分子互相黏合，所以水能以不斷裂的水柱被拉上木質部／表面張力"),
          L("Adhesion: partial charges on water are attracted to polar/charged surfaces such as cell walls or soil particles", "付着力：水の部分電荷が、細胞壁や土壌粒子のような極性／電荷をもつ表面に引かれる", "附著力：水的部分電荷被細胞壁或土壤顆粒等極性／帶電表面吸引"),
          L("Solvent: water molecules are attracted to ions and polar molecules and surround them", "溶媒：水分子がイオンや極性分子に引かれ、それらを取り囲む", "溶劑：水分子被離子和極性分子吸引並將它們包圍"),
          L("So hydrophilic substances dissolve; non-polar molecules cannot form such attractions and do not dissolve", "そのため親水性の物質は溶ける。無極性の分子はこのような引力をつくれず、溶けない", "因此親水物質會溶解；非極性分子不能形成這類吸引力，所以不溶")
        ],
        modelAnswer: L(
          "Water is polar, with δ− oxygen and δ+ hydrogen. Hydrogen bonds form between the δ+ hydrogen of one molecule and the δ− oxygen of another. This makes water molecules stick together (cohesion), so water forms an unbroken column in xylem and has surface tension. The partial charges are also attracted to polar or charged surfaces such as cellulose in cell walls and soil particles (adhesion). Water molecules are attracted to ions and polar molecules, surround them and make them dissolve (solvent). Non-polar molecules cannot form these attractions, so they do not dissolve.",
          "水は極性をもち、酸素は δ−、水素は δ+ である。ある分子の δ+ の水素と別の分子の δ− の酸素の間に水素結合ができる。これにより水分子どうしがくっつき (凝集力)、水は木部で途切れない柱をつくり、表面張力をもつ。部分電荷は、細胞壁のセルロースや土壌粒子のような極性または電荷をもつ表面にも引かれる (付着力)。水分子はイオンや極性分子に引かれ、それらを取り囲んで溶かす (溶媒)。無極性分子はこのような引力をつくれないので、溶けない。",
          "水有極性，氧為 δ−、氫為 δ+。一個分子 δ+ 的氫與另一分子 δ− 的氧之間形成氫鍵。這使水分子黏在一起 (內聚力)，所以水在木質部中形成不斷裂的水柱，並具有表面張力。這些部分電荷也會被細胞壁中的纖維素和土壤顆粒等極性或帶電表面吸引 (附著力)。水分子被離子和極性分子吸引，並把它們包圍使其溶解 (溶劑)。非極性分子不能形成這些吸引力，所以不溶解。")
      },
      {
        id: "a1-1-q15", type: "mcq", ahl: false, difficulty: 3, ref: "A1.1.4", paper: "1A",
        stem: L("Water climbs up a narrow glass tube above the level of water in a beaker. Which pair of forces is mainly responsible?", "ビーカーの水面より上の細いガラス管の中を、水が上昇する。主な原因となる力の組み合わせはどれか。", "水沿細玻璃管升到燒杯水面以上。哪一對力是主要原因？"),
        options: [
          L("Cohesion only", "凝集力のみ", "只有內聚力"),
          L("Adhesion only", "付着力のみ", "只有附著力"),
          L("Adhesion to the glass and cohesion between water molecules", "ガラスへの付着力と、水分子間の凝集力", "對玻璃的附著力和水分子之間的內聚力"),
          L("Covalent bonds between water and the glass", "水とガラスの間の共有結合", "水與玻璃之間的共價鍵")
        ],
        answer: 2,
        explanation: L(
          "C is correct. Adhesion pulls water molecules along the wall, and cohesion drags the rest of the water after them. A and B each give only half of the explanation, which is the tempting mistake. D is wrong because the attraction is much weaker than covalent bonding.",
          "C が正解です。付着力が壁に沿って水分子を引き、凝集力が残りの水を引き続けます。A と B は説明の半分しか述べておらず、引っかかりやすい誤りです。D は誤りで、この引力は共有結合よりはるかに弱いものです。",
          "答案是 C。附著力沿壁拉動水分子，內聚力把其餘的水拉上去。A 和 B 各只說出了一半，是容易犯的錯誤。D 錯誤，這種吸引力比共價鍵弱得多。")
      },
      {
        id: "a1-1-q16", type: "short", ahl: false, difficulty: 3, ref: "A1.1.3", paper: "2",
        commandTerm: "Suggest", marks: 3,
        stem: L("A pond skater can stand on a pond but a small stone of similar weight sinks. Suggest an explanation.", "アメンボは池の水面に立てるが、同じくらいの重さの小石は沈む。理由を示せ。", "水黽可以站在池塘水面上，但重量相近的小石子卻會下沉。提出解釋。"),
        markscheme: [
          L("Hydrogen bonds make water molecules at the surface cohere strongly (surface tension, like a skin)", "水素結合により水面の水分子が強く凝集する (表面張力、膜のような効果)", "氫鍵使水面的水分子強烈內聚 (表面張力，像一層薄膜)"),
          L("The pond skater's weight is spread over its legs so each leg presses on a small area and does not break the surface [accept: legs are hydrophobic / not wetted]", "アメンボの体重は脚に分散され、各脚が小さな面積にかかるので水面を破らない [脚が疎水性／水にぬれない、も可]", "水黽的體重分散在各條腿上，每條腿壓在很小的面積上，不會穿破水面 [接受：腿是疏水的／不被水沾濕]"),
          L("The stone is dense and its weight is concentrated, so it breaks the surface and sinks", "小石は密度が高く重さが集中するので、水面を破って沈む", "石子密度大、重量集中，所以穿破水面下沉")
        ],
        modelAnswer: L(
          "Cohesion from hydrogen bonds gives the water surface tension, like a thin skin. The pond skater's weight is spread over its legs, so the skin is not broken. The stone's weight is concentrated and it is dense enough to break the surface and sink.",
          "水素結合による凝集力が水面に表面張力を与え、薄い膜のようになる。アメンボの体重は脚に分散されるので、膜は破れない。小石は重さが集中し、水面を破って沈むほど密度が高い。",
          "氫鍵產生的內聚力使水面具有表面張力，像一層薄膜。水黽的體重分散在腿上，所以薄膜不會破。石子重量集中，而且密度大得足以穿破水面下沉。")
      },
      {
        id: "a1-1-q17", type: "mcq", ahl: true, difficulty: 2, ref: "A1.1.7", paper: "1A",
        stem: L("Which pair of factors explains why Earth has kept its water for billions of years?", "地球が何十億年もの間水を保持してきた理由を説明する要因の組み合わせはどれか。", "哪一對因素解釋了地球為何數十億年來都能保住水？"),
        options: [
          L("Gravity, and temperatures low enough for water vapour to condense", "重力と、水蒸気が凝結できるほど低い温度", "重力，以及低至足以使水蒸氣凝結的溫度"),
          L("Photosynthesis, and the presence of an ozone layer", "光合成と、オゾン層の存在", "光合作用，以及臭氧層的存在"),
          L("Very high surface temperatures, which keep water as vapour", "水を水蒸気のままにしておく非常に高い地表温度", "非常高的地表溫度，使水保持為水蒸氣"),
          L("Constant delivery of new water by asteroids", "小惑星による新しい水の絶え間ない供給", "小行星不斷送來新的水")
        ],
        answer: 0,
        explanation: L(
          "A is correct. C is wrong because vapour would escape more easily. D is wrong because asteroids explain where the water came from, not why it was kept. B is unrelated to retention.",
          "A が正解です。C は誤りで、水蒸気のままでは宇宙へ逃げやすくなります。D は誤りで、小惑星は水の「起源」の説明であり、「保持」の理由ではありません。B は保持と無関係です。",
          "答案是 A。C 錯誤，水蒸氣更容易逸散。D 錯誤，小行星解釋水的「來源」，而不是為何能「保留」。B 與水的保留無關。")
      },
      {
        id: "a1-1-q18", type: "short", ahl: true, difficulty: 2, ref: "A1.1.8", paper: "2",
        commandTerm: "Outline", marks: 3,
        stem: L("Outline why the \"Goldilocks zone\" is important in the search for extraterrestrial life.", "地球外生命の探索において「ゴルディロックスゾーン」が重要である理由を概説せよ。", "概述為何「適居帶」在尋找外星生命時十分重要。"),
        markscheme: [
          L("Life as we know it needs liquid water as its medium", "私たちの知る生命は、媒体として液体の水を必要とする", "我們所知的生命需要液態水作為媒介"),
          L("The Goldilocks zone is the range of distances from a star where temperatures allow liquid water on a planet's surface", "ゴルディロックスゾーンは、惑星の表面に液体の水が存在できる温度となる、恒星からの距離の範囲", "適居帶是與恆星相距的某個範圍，其溫度容許行星表面存在液態水"),
          L("Planets in the zone are therefore the best places to look first for life (not too hot, not too cold)", "したがって、このゾーンの惑星は、最初に生命を探すのに最適な場所 (熱すぎず、冷たすぎない)", "因此位於這區域的行星是最先尋找生命的最佳地點 (不太熱也不太冷)")
        ],
        modelAnswer: L(
          "All known life needs liquid water. The Goldilocks zone is the distance range from a star where a planet is neither too hot nor too cold for liquid water. Planets in this zone are the best places to look for life.",
          "知られているすべての生命は液体の水を必要とする。ゴルディロックスゾーンは、惑星が液体の水にとって熱すぎも冷たすぎもしない、恒星からの距離の範囲である。このゾーンの惑星は生命を探すのに最適な場所である。",
          "所有已知生命都需要液態水。適居帶是與恆星相距的一段範圍，在該範圍內行星對液態水來說不太熱也不太冷。位於此區的行星是尋找生命的最佳地點。")
      },
      {
        id: "a1-1-q19", type: "multi", ahl: true, difficulty: 3, ref: "A1.1.7–8", paper: "1A",
        stem: L("A planet is found in the Goldilocks zone of its star. Which statements about this planet are correct? Select all that apply.", "ある惑星が、その恒星のゴルディロックスゾーンに見つかった。この惑星について正しい記述をすべて選べ。", "發現一顆行星位於其恆星的適居帶。下列有關這顆行星的敘述，哪些正確？(選出所有適用者)"),
        options: [
          L("The planet's temperature could allow liquid water on its surface.", "惑星の温度は、表面に液体の水が存在することを許す可能性がある。", "行星的溫度可能容許其表面有液態水。"),
          L("The planet must contain living organisms.", "その惑星には生物が必ずいる。", "該行星必定有生物。"),
          L("The planet is a sensible place to search for life.", "その惑星は、生命を探す場所として妥当である。", "該行星是尋找生命的合理地點。"),
          L("The planet must also have gravity strong enough to hold an atmosphere and surface water, if water is to be retained.", "水を保持するには、その惑星に、大気と表面の水を保持できる十分な重力もなければならない。", "若要保住水，該行星還必須有足夠強的重力來保住大氣和地表的水。")
        ],
        answer: [0, 2, 3],
        explanation: L(
          "A, C and D are reasonable: the zone gives suitable temperatures, makes the planet worth searching, and (as on Earth) gravity is needed to retain water. B is wrong: being in the zone is only a possibility for life, not proof.",
          "A、C、D は妥当です。ゾーンは適した温度を与え、探す価値を生み、(地球と同様に) 水を保持するには重力が必要です。B は誤りで、ゾーン内にあることは生命の可能性にすぎず、証明ではありません。",
          "A、C、D 合理：適居帶提供適合的溫度、使該行星值得探索，而且 (如同地球) 要保住水需要重力。B 錯誤：位於適居帶只表示有生命的可能，並非證明。")
      },
      {
        "id": "a1-1-q20",
        "type": "short",
        "ahl": false,
        "difficulty": 3,
        "ref": "A1.1.3",
        "paper": "1B",
        "commandTerm": "Explain",
        "marks": 4,
        "data": {
          "en": "<p>A student counted how many drops of liquid could be added to the surface of a coin before the liquid spilled over the edge. Three trials were done for each liquid (illustrative data).</p><table><tr><th>Liquid</th><th>Trial 1</th><th>Trial 2</th><th>Trial 3</th></tr><tr><td>Water</td><td>24</td><td>26</td><td>25</td></tr><tr><td>Water with detergent</td><td>11</td><td>9</td><td>10</td></tr></table>",
          "ja": "<p>生徒が、硬貨の表面から液体があふれるまでに何滴加えられるかを数えた。各液体について3回測定した (架空のデータ)。</p><table><tr><th>液体</th><th>1回目</th><th>2回目</th><th>3回目</th></tr><tr><td>水</td><td>24</td><td>26</td><td>25</td></tr><tr><td>洗剤入りの水</td><td>11</td><td>9</td><td>10</td></tr></table>",
          "zh": "<p>一名學生數算在硬幣表面加多少滴液體後，液體才會溢出邊緣。每種液體做了三次試驗 (虛構數據)。</p><table><tr><th>液體</th><th>試驗 1</th><th>試驗 2</th><th>試驗 3</th></tr><tr><td>水</td><td>24</td><td>26</td><td>25</td></tr><tr><td>加了洗潔精的水</td><td>11</td><td>9</td><td>10</td></tr></table>"
        },
        "stem": {
          "en": "(a) Calculate the mean number of drops for water and for water with detergent. (b) Explain why water can hold more drops than water with detergent before spilling, in terms of the forces between water molecules.",
          "ja": "(a) 水と洗剤入りの水について、滴数の平均を計算せよ。 (b) あふれる前に水のほうが洗剤入りの水より多くの滴を保てる理由を、水分子間の力に基づいて説明せよ。",
          "zh": "(a) 計算水和加了洗潔精的水的平均滴數。 (b) 以水分子之間的作用力，解釋為何水在溢出前能承載的滴數比加了洗潔精的水多。"
        },
        "markscheme": [
          {
            "en": "Water: (24 + 26 + 25) ÷ 3 = 25 drops",
            "ja": "水：(24 + 26 + 25) ÷ 3 = 25 滴",
            "zh": "水：(24 + 26 + 25) ÷ 3 = 25 滴"
          },
          {
            "en": "Water with detergent: (11 + 9 + 10) ÷ 3 = 10 drops",
            "ja": "洗剤入りの水：(11 + 9 + 10) ÷ 3 = 10 滴",
            "zh": "加了洗潔精的水：(11 + 9 + 10) ÷ 3 = 10 滴"
          },
          {
            "en": "Water molecules are cohesive / attracted to each other by hydrogen bonds, giving high surface tension so the water surface can bulge without breaking",
            "ja": "水分子は水素結合で互いに引き合い (凝集力)、表面張力が大きいので、水面は破れずに盛り上がれる",
            "zh": "水分子之間因氫鍵而互相吸引 (內聚力)，表面張力大，所以水面可以隆起而不破裂"
          },
          {
            "en": "Detergent reduces the attraction between water molecules / interferes with hydrogen bonding, lowering surface tension, so the drop spreads and spills sooner",
            "ja": "洗剤は水分子間の引力を弱め (水素結合を妨げ)、表面張力を下げるので、液が広がって早くあふれる",
            "zh": "洗潔精減弱水分子之間的吸引力 (干擾氫鍵)，降低表面張力，所以液體較早擴散溢出"
          }
        ],
        "modelAnswer": {
          "en": "(a) Water: 75 ÷ 3 = 25 drops. Detergent: 30 ÷ 3 = 10 drops. (b) Hydrogen bonds make water molecules cohesive, so the surface has high surface tension and can bulge up without breaking. Detergent interferes with the hydrogen bonding between water molecules, so surface tension falls and the liquid spreads and spills after fewer drops.",
          "ja": "(a) 水：75 ÷ 3 = 25 滴。洗剤入り：30 ÷ 3 = 10 滴。 (b) 水素結合により水分子は凝集力をもつので、水面の表面張力が大きく、破れずに盛り上がれる。洗剤は水分子間の水素結合を妨げるので、表面張力が下がり、液が広がって少ない滴数であふれる。",
          "zh": "(a) 水：75 ÷ 3 = 25 滴。洗潔精：30 ÷ 3 = 10 滴。 (b) 氫鍵令水分子具有內聚力，所以水面的表面張力大，可以隆起而不破裂。洗潔精干擾水分子之間的氫鍵，表面張力下降，液體擴散並在較少滴數後溢出。"
        }
      },
      {
        "id": "a1-1-q21",
        "type": "mcq",
        "ahl": false,
        "difficulty": 2,
        "ref": "A1.1.3–4",
        "paper": "1A",
        "stem": {
          "en": "Which statement correctly identifies the type of attraction involved in each situation?",
          "ja": "次のうち、それぞれの場面に関わる引力の種類を正しく示している記述はどれか。",
          "zh": "下列哪項正確指出每個情況所涉及的吸引力類型？"
        },
        "options": [
          {
            "en": "Water molecules staying together in a xylem column: adhesion. Water held on soil particles: cohesion.",
            "ja": "木部で水分子がつながっている：付着力。土壌粒子に水が保持される：凝集力。",
            "zh": "木質部中水分子連在一起：附著力。土壤顆粒吸附水：內聚力。"
          },
          {
            "en": "Water molecules staying together in a xylem column: cohesion. Water held on soil particles: adhesion.",
            "ja": "木部で水分子がつながっている：凝集力。土壌粒子に水が保持される：付着力。",
            "zh": "木質部中水分子連在一起：內聚力。土壤顆粒吸附水：附著力。"
          },
          {
            "en": "Both situations are cohesion, because hydrogen bonds are involved.",
            "ja": "どちらも水素結合が関わるので、凝集力である。",
            "zh": "兩者都涉及氫鍵，所以都是內聚力。"
          },
          {
            "en": "Both situations are adhesion, because water is polar.",
            "ja": "どちらも水が極性をもつので、付着力である。",
            "zh": "兩者都因水具極性，所以都是附著力。"
          }
        ],
        "answer": 1,
        "explanation": {
          "en": "B is correct: cohesion is water to water (the unbroken column); adhesion is water to a different substance (charged soil particles). A and C/D mix the terms up. Both involve partial charges, but what matters is what water is attracted to.",
          "ja": "B が正解です。凝集力は水どうし (途切れない水柱)、付着力は水と別の物質 (電荷をもつ土壌粒子) の間の引力です。A は用語が逆、C と D は区別していません。どちらも部分電荷が関わりますが、重要なのは水が何に引かれているかです。",
          "zh": "B 正確：內聚力是水與水之間 (不斷裂的水柱)，附著力是水與另一種物質 (帶電的土壤顆粒) 之間。A 把兩個詞弄反；C 和 D 沒有加以區分。兩者都涉及部分電荷，但關鍵是水被甚麼吸引。"
        }
      },
      {
        "id": "a1-1-q22",
        "type": "short",
        "ahl": false,
        "difficulty": 3,
        "ref": "A1.1.6",
        "paper": "2",
        "commandTerm": "Explain",
        "marks": 3,
        "stem": {
          "en": "A seal and a land mammal of the same body mass both need to stay warm. The land mammal has a thin layer of fat; the seal living in water at 2 °C has a much thicker layer. Explain this difference using the properties of water and air.",
          "ja": "同じ体重のアザラシと陸上の哺乳類が、どちらも体温を保つ必要がある。陸上の哺乳類の脂肪層は薄いが、2 °C の水中で暮らすアザラシの脂肪層ははるかに厚い。水と空気の性質を用いてこの違いを説明せよ。",
          "zh": "一隻海豹和一隻體重相同的陸上哺乳動物都需要保持體溫。陸上哺乳動物只有薄薄的脂肪層，而生活在 2 °C 水中的海豹則有厚得多的脂肪層。運用水和空氣的性質解釋這個分別。"
        },
        "markscheme": [
          {
            "en": "Water has a higher thermal conductivity than air",
            "ja": "水は空気より熱伝導率が高い",
            "zh": "水的熱傳導性比空氣高"
          },
          {
            "en": "so heat is lost from the seal's body to the water much faster than to the air",
            "ja": "そのため、アザラシの体から水への熱損失は、空気への熱損失よりはるかに速い",
            "zh": "所以海豹的體熱流失到水中比流失到空氣中快得多"
          },
          {
            "en": "a thick layer of fat (blubber) provides insulation to reduce this heat loss; air is a poor conductor, so the land mammal needs less",
            "ja": "厚い脂肪層 (blubber) が断熱してこの熱損失を減らす。空気は熱を伝えにくいので陸上の哺乳類はそれほど必要ない",
            "zh": "厚脂肪層 (鯨脂 blubber) 提供隔熱，減少熱量流失；空氣導熱差，所以陸上哺乳動物所需較少"
          }
        ],
        "modelAnswer": {
          "en": "Water has a much higher thermal conductivity than air, so a seal in 2 °C water loses body heat far faster than a land mammal in air at the same temperature. The thick blubber layer insulates the seal and reduces this heat loss. In air, which conducts heat poorly, a thin fat layer is enough.",
          "ja": "水は空気よりはるかに熱伝導率が高いので、2 °C の水中のアザラシは、同じ温度の空気中の陸上哺乳類よりずっと速く体熱を失う。厚い脂肪層 (blubber) がアザラシを断熱し、この熱損失を減らす。熱を伝えにくい空気中では、薄い脂肪層で足りる。",
          "zh": "水的熱傳導性遠高於空氣，所以在 2 °C 水中的海豹比處於相同溫度空氣中的陸上哺乳動物流失體熱快得多。厚的鯨脂層為海豹隔熱，減少熱量流失。在導熱差的空氣中，薄脂肪層已經足夠。"
        }
      },
      {
        "id": "a1-1-q23",
        "type": "mcq",
        "ahl": true,
        "difficulty": 3,
        "ref": "A1.1.7–8",
        "paper": "1A",
        "stem": {
          "en": "Planet X orbits inside the Goldilocks zone of its star, but its mass is much smaller than Earth's. Which prediction is best supported by the guide?",
          "ja": "惑星 X は恒星のゴルディロックス・ゾーン内を公転しているが、質量は地球よりはるかに小さい。ガイドの内容から最も支持される予測はどれか。",
          "zh": "行星 X 在其恆星的適居帶內運行，但質量遠比地球小。以下哪項預測最符合課程內容？"
        },
        "options": [
          {
            "en": "Liquid water must be present, because the temperature is suitable.",
            "ja": "温度が適しているので、液体の水が必ず存在する。",
            "zh": "因為溫度適合，所以一定有液態水。"
          },
          {
            "en": "Water vapour might escape to space because weak gravity cannot hold it.",
            "ja": "重力が弱くて水蒸気を保持できず、宇宙へ逃げる可能性がある。",
            "zh": "引力弱，留不住水蒸氣，水蒸氣可能逃逸到太空。"
          },
          {
            "en": "Water will be frozen, because small planets are always cold.",
            "ja": "小さい惑星は常に冷たいので、水は凍っている。",
            "zh": "細小的行星一定寒冷，所以水是冰。"
          },
          {
            "en": "Life must exist, because the planet is in the zone.",
            "ja": "ゾーン内にあるので、生命が必ず存在する。",
            "zh": "因為行星在適居帶內，所以一定有生命。"
          }
        ],
        "answer": 1,
        "explanation": {
          "en": "B is correct: a planet needs strong enough gravity to retain water vapour and other gases (A1.1.7), in addition to a suitable temperature. A overstates: the zone only makes liquid water possible. C is not supported: temperature depends on distance from the star. D is wrong: being in the zone does not prove life.",
          "ja": "B が正解です。適した温度に加えて、水蒸気などの気体を保持できる十分な重力が必要です (A1.1.7)。A は言い過ぎで、ゾーンは液体の水を「可能にする」だけです。C は根拠がなく、温度は恒星からの距離で決まります。D は誤りで、ゾーン内にあることは生命の証拠ではありません。",
          "zh": "B 正確：行星除了溫度適合，還需要足夠強的引力留住水蒸氣和其他氣體 (A1.1.7)。A 說得過頭，適居帶只是令液態水「有可能」存在。C 沒有根據，溫度取決於與恆星的距離。D 錯誤，位於適居帶內並不證明有生命。"
        }
      }
    ]
  });
})();
