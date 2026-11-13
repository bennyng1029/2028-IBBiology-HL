/* A3.1 Diversity of organisms — SL + AHL */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  IB.registerTopic({
    id: "A3.1",
    slug: "a3-1",
    theme: "A",
    level: 3,
    ahlOnly: false,
    title: L("Diversity of organisms", "生物の多様性", "生物的多樣性"),
    guidingQuestions: [
      L("What is a species?", "種とは何か。", "甚麼是物種？"),
      L("What patterns are seen in the diversity of genomes within and between species?",
        "種の内部および種の間で、ゲノムの多様性にはどのようなパターンが見られるか。",
        "在物種之內和物種之間，基因組的多樣性呈現甚麼規律？")
    ],
    summary: L(
      "Living things vary, and we sort that variation into species and give each one a two-part name. The biological species concept says a species is a group that can breed and produce fertile offspring, but it has limits. Chromosomes and whole genomes give us new, objective ways to compare organisms.",
      "生物には変異があり、私たちはそれを種に分けて二つの部分からなる名前を付けます。生物学的種概念では、種とは交配して生殖能力のある子を作れる集団ですが、この考え方には限界があります。染色体やゲノム全体は、生物を比べるための新しく客観的な手がかりになります。",
      "生物之間存在變異，我們把這些變異分成物種，並為每個物種起一個由兩部分組成的名字。生物學物種概念指出，物種是能夠交配並產生可育後代的一羣生物，但這個概念有其局限。染色體和整個基因組為比較生物提供了新的、客觀的方法。"
    ),
    sections: [
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.1", ahl: false,
        heading: L("Variation: no two organisms are identical", "変異：まったく同じ個体は存在しない (variation)", "變異：沒有兩個個體完全相同 (variation)"),
        body: L(
          `<p><strong>Variation</strong> means the differences between individual organisms. Look at any group of living things, even members of one species, and you will find that <strong>no two individuals are identical in all their traits</strong>. Even identical twins differ a little, for example in fingerprints, scars or body mass.</p>
<p>Variation is a <em>defining feature of life</em>. It happens at every level: size, colour, shape, behaviour, the base sequence of DNA and more.</p>
<p>The patterns of variation are complex. But we can still see that some organisms are more alike than others. These patterns are the basis for <strong>naming and classifying</strong> organisms: we group together those that are similar and separate those that are different.</p>`,
          `<p><strong>変異 (variation)</strong> とは、個体どうしの違いのことです。同じ種の仲間を含めてどんな生物の集まりを見ても、<strong>すべての形質がまったく同じ個体は二つとありません</strong>。一卵性双生児でも、指紋や傷、体重などが少しずつ違います。</p>
<p>変異は<em>生命の定義的な特徴</em>です。大きさ、色、形、行動、DNAの塩基配列など、あらゆるレベルで見られます。</p>
<p>変異のパターンは複雑です。それでも、他よりも似ている生物どうしがいることは分かります。このパターンが、生物を<strong>命名し分類する</strong>基礎になります。似たものをまとめ、違うものを分けるのです。</p>`,
          `<p><strong>變異 (variation)</strong> 是指個體之間的差異。無論觀察哪一羣生物，即使是同一物種的成員，都會發現<strong>沒有兩個個體的所有性狀完全相同</strong>。就算是同卵雙生子，指紋、疤痕或體重等方面也有些微差別。</p>
<p>變異是<em>生命的定義特徵</em>。它出現在每一個層次：大小、顏色、形狀、行為、DNA 的鹼基序列等。</p>
<p>變異的規律相當複雜，但我們仍可看出有些生物之間比其他生物更相似。這些規律是<strong>命名和分類</strong>生物的基礎：我們把相似的歸為一組，把不同的分開。</p>`
        ),
        examTip: L("If asked why classification is possible, link it to variation: patterns of similarity and difference.", "分類がなぜ可能かと問われたら、変異、つまり似ている点と違う点のパターンに結び付けましょう。", "若題目問為何可以分類，請連繫到變異：相似與相異的規律。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.2", ahl: false,
        heading: L("Species as groups with shared traits", "共通の形質をもつ集団としての種 (species)", "以共有性狀劃分的物種 (species)"),
        body: L(
          `<p>The earliest idea of a <strong>species</strong> is the <strong>morphological species concept</strong>. <em>Morphology</em> means the shape and structure of an organism. This is the idea used by Linnaeus: a species is a group of organisms that share the same set of physical traits.</p>
<p>It is easy to use. You only need to look at the organism, and it works for fossils too. But it has problems: males and females or young and adults of one species can look very different, and two different species can look almost the same.</p>`,
          `<p>種 (<strong>species</strong>) についての最も古い考え方は<strong>形態学的種概念 (morphological species concept)</strong> です。<em>形態</em>とは生物の形や構造のことです。これはリンネが用いた考え方で、種とは同じ組み合わせの外見的な形質を共有する生物の集団だとします。</p>
<p>この考え方は使いやすく、生物を見るだけで判断でき、化石にも使えます。しかし、同じ種でも雄と雌、幼体と成体で見た目が大きく違うことがあり、別の種なのによく似ている場合もあります。</p>`,
          `<p>最早的<strong>物種 (species)</strong> 概念是<strong>形態學物種概念 (morphological species concept)</strong>。<em>形態</em>指生物的形狀和結構。這是林奈 (Linnaeus) 使用的概念：物種是一羣具有相同外形特徵的生物。</p>
<p>這個概念容易使用：只需觀察生物便可，對化石也適用。但它有問題：同一物種的雄性與雌性、幼體與成體可能外貌相差很大，而兩個不同物種又可能看起來幾乎一樣。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.3", ahl: false,
        heading: L("The binomial system of naming", "二名法 (binomial system)", "雙名法 (binomial system)"),
        body: L(
          `<p>Common names such as "robin" or "buttercup" can mean different species in different places. Scientists use the <strong>binomial system</strong> instead: every species gets a two-part name that is the same all over the world.</p>
<ul>
<li>The <strong>first part</strong> is the <strong>genus</strong> (a group of closely related species). It starts with a <strong>capital letter</strong>.</li>
<li>The <strong>second part</strong> distinguishes the <strong>species</strong> within that genus. It is written in <strong>lower case</strong>.</li>
</ul>
<p>The name is written in <em>italics</em> (or underlined if handwritten). Example: <em>Homo sapiens</em> (humans), <em>Panthera leo</em> (lion) and <em>Panthera tigris</em> (tiger). The lion and the tiger share a genus, so they have similar traits. Species in the same genus have similar traits.</p>
<p>The second word alone is not a full name, because the same species word can be used in different genera. You always need both parts.</p>`,
          `<p>「コマドリ」「キンポウゲ」のような一般名は、場所によって別の種を指すことがあります。そこで科学者は<strong>二名法 (binomial system)</strong> を使います。すべての種に、世界中で共通の二つの部分からなる名前を付けるのです。</p>
<ul>
<li><strong>最初の部分</strong>は<strong>属 (genus)</strong>（近縁な種の集まり）で、<strong>大文字</strong>で始めます。</li>
<li><strong>2番目の部分</strong>はその属の中の<strong>種 (species)</strong> を区別するもので、<strong>小文字</strong>で書きます。</li>
</ul>
<p>学名は<em>斜体</em>で書きます（手書きでは下線）。例：<em>Homo sapiens</em>（ヒト）、<em>Panthera leo</em>（ライオン）、<em>Panthera tigris</em>（トラ）。ライオンとトラは同じ属なので似た形質をもちます。同じ属の種は似た形質をもつのです。</p>
<p>種を表す2番目の語だけでは完全な名前になりません。同じ語が別の属でも使われることがあるからです。必ず二つの部分を両方書きます。</p>`,
          `<p>「知更鳥」或「毛茛」這類俗名，在不同地方可能指不同的物種。因此科學家使用<strong>雙名法 (binomial system)</strong>：每個物種都有一個全世界通用、由兩部分組成的名稱。</p>
<ul>
<li><strong>第一部分</strong>是<strong>屬 (genus)</strong>（一羣近緣物種），以<strong>大寫字母</strong>開頭。</li>
<li><strong>第二部分</strong>用來區分該屬內的<strong>物種 (species)</strong>，用<strong>小寫字母</strong>書寫。</li>
</ul>
<p>學名以<em>斜體</em>書寫（手寫時加底線）。例子：<em>Homo sapiens</em>（人類）、<em>Panthera leo</em>（獅）、<em>Panthera tigris</em>（虎）。獅和虎同屬，所以性狀相似。同屬的物種具有相似的性狀。</p>
<p>只有第二個詞並不是完整的名稱，因為同一個種名詞可以用於不同的屬。必須兩部分都寫出來。</p>`
        ),
        examTip: L("Marks are often lost for a capital letter on the species word or a lower-case genus. Genus = Capital; species = lower case.", "種小名に大文字を使ったり、属名を小文字にしたりして失点することがよくあります。属は大文字、種は小文字です。", "常有學生因為把種名寫成大寫或屬名寫成小寫而失分。屬：大寫；種：小寫。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.4", ahl: false,
        heading: L("The biological species concept", "生物学的種概念 (biological species concept)", "生物學物種概念 (biological species concept)"),
        body: L(
          `<p>According to the <strong>biological species concept</strong>, a species is a <strong>group of organisms that can breed with each other and produce fertile offspring</strong>. "Fertile" matters. A horse and a donkey can mate, but their offspring (a mule) is sterile, so they are different species.</p>
<p><strong>Challenges with this definition:</strong></p>
<ul>
<li>It cannot be applied to organisms that do not reproduce sexually (see the AHL section below).</li>
<li>Fossils cannot be tested for breeding, so we cannot use it for extinct species.</li>
<li>Populations that live far apart never meet, so we cannot easily test whether they could interbreed.</li>
<li>Some groups that are clearly different species do interbreed and sometimes produce fertile hybrids, especially in plants.</li>
<li>It is hard to test in practice: we cannot watch breeding in most wild species.</li>
</ul>
<p><strong>Competing definitions exist.</strong> The morphological concept uses physical traits; other concepts group organisms by similarity in DNA sequences or by the way of life they follow. No single definition works for every group of organisms.</p>`,
          `<p><strong>生物学的種概念 (biological species concept)</strong> によると、種とは<strong>互いに交配でき、生殖能力のある子を作れる生物の集団</strong>です。「生殖能力がある (fertile)」ことが大切です。ウマとロバは交配できますが、子のラバは不妊なので、別の種です。</p>
<p><strong>この定義の問題点：</strong></p>
<ul>
<li>有性生殖をしない生物には当てはめられない（下のAHLの節を参照）。</li>
<li>化石では交配を調べられないので、絶滅した種には使えない。</li>
<li>遠く離れて生息する集団は出会わないため、交配できるかどうかを簡単には調べられない。</li>
<li>明らかに別の種なのに交配し、ときに生殖能力のある雑種を作る例もある（特に植物）。</li>
<li>多くの野生種では交配を観察できず、実際に確かめるのが難しい。</li>
</ul>
<p><strong>他の定義も存在します。</strong>形態学的種概念は外見の形質を使い、他には DNA 配列の類似性や生活様式によって生物をまとめる考え方があります。すべての生物群に当てはまる定義は一つもありません。</p>`,
          `<p>根據<strong>生物學物種概念 (biological species concept)</strong>，物種是<strong>能夠互相交配並產生可育後代的一羣生物</strong>。「可育 (fertile)」這點很重要。馬和驢可以交配，但後代騾是不育的，所以牠們是不同的物種。</p>
<p><strong>這個定義的局限：</strong></p>
<ul>
<li>不適用於不進行有性生殖的生物（見下面的 AHL 部分）。</li>
<li>化石無法測試能否交配，所以不能用於已滅絕的物種。</li>
<li>相距很遠的種羣不會相遇，難以測試牠們能否雜交。</li>
<li>有些明顯屬於不同物種的生物會雜交，有時還產生可育的雜種，在植物中尤其常見。</li>
<li>實際測試困難：大多數野生物種的交配情況無法觀察。</li>
</ul>
<p><strong>還有其他競爭的定義。</strong>形態學概念用外形特徵；其他概念則按 DNA 序列的相似程度或生活方式把生物分組。沒有一個定義適用於所有生物類羣。</p>`
        ),
        examTip: L("\"Define biological species\" needs both ideas: interbreed AND produce fertile offspring.", "「生物学的種を定義せよ」では、「交配できる」と「生殖能力のある子を作る」の両方が必要です。", "「定義生物學物種」必須同時包含兩點：能交配「及」產生可育後代。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.5", ahl: false,
        heading: L("Populations or species? An arbitrary decision", "個体群か種か：恣意的な判断 (speciation)", "種羣還是物種？一個武斷的決定 (speciation)"),
        body: L(
          `<p><strong>Speciation</strong> is the splitting of one species into two or more species. It is <strong>usually gradual</strong>, not a single event. Two populations stop interbreeding (they become <strong>non-interbreeding populations</strong>) and then, over many generations, their traits become more and more different. This is called <strong>divergence</strong>.</p>
<p>Because divergence is gradual, there is no clear moment when two populations "become" two species. Halfway through, they may be able to interbreed sometimes, or only some of the time. It can therefore be an <strong>arbitrary decision</strong> (a choice made by people, not by nature) whether two populations are regarded as the same species or different species.</p>
<p>This is one reason biologists sometimes disagree about how many species there are in a group.</p>`,
          `<p><strong>種分化 (speciation)</strong> とは、一つの種が二つ以上の種に分かれることです。<strong>たいていは一度の出来事ではなく、ゆっくり進みます。</strong>二つの集団が交配しなくなり（<strong>互いに交配しない個体群</strong>）、その後、何世代もかけて形質がだんだん違っていきます。これを<strong>分岐 (divergence)</strong> といいます。</p>
<p>分岐は徐々に進むので、二つの集団がある瞬間に「二つの種になる」ということはありません。途中の段階では、ときどき、あるいは一部だけ交配できるかもしれません。そのため、二つの集団を同じ種とみなすか別の種とみなすかは<strong>恣意的な判断</strong>（自然ではなく人間が決める選択）になることがあります。</p>
<p>これが、ある生物群にいくつの種があるかについて生物学者の意見が分かれることがある理由の一つです。</p>`,
          `<p><strong>物種形成 (speciation)</strong> 是一個物種分裂成兩個或以上物種。它<strong>通常是逐漸發生的</strong>，不是一次性的事件。兩個種羣停止互相交配（成為<strong>不互相交配的種羣</strong>），然後經過許多世代，牠們的性狀越來越不同。這稱為<strong>分歧 (divergence)</strong>。</p>
<p>由於分歧是逐步進行的，兩個種羣並不會在某一刻突然「變成」兩個物種。在中途階段，牠們也許有時還能交配，或只有部分能交配。因此，把兩個種羣視為同一物種還是不同物種，可能是一個<strong>武斷的決定</strong>（由人而不是由自然作出的選擇）。</p>
<p>這是生物學家有時對某一類羣有多少個物種意見不一的原因之一。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.6", ahl: false,
        heading: L("Chromosome numbers differ between species", "種による染色体数の違い (chromosome number)", "不同物種的染色體數目 (chromosome number)"),
        body: L(
          `<p>The number of chromosomes in a cell is different in different species. You only need to know that this <strong>diversity</strong> exists, plus one example: <strong>humans have 46 chromosomes</strong> and <strong>chimpanzees have 48</strong>. You do not need to remember numbers for other species.</p>
<p>Body cells of most plants and animals are <strong>diploid</strong>: they have two sets of chromosomes, one set from each parent. Chromosomes therefore come in <strong>pairs</strong> (homologous pairs), so a diploid cell always has an <strong>even</strong> number of chromosomes.</p>
<div class="note">Different species can by chance have the same number of chromosomes, so chromosome number alone does not identify a species. But the same species always has the same number (apart from rare abnormalities).</div>`,
          `<p>細胞に含まれる染色体の数は、種によって異なります。覚えておくべきなのは、このような<strong>多様性</strong>があることと、一つの例、つまり<strong>ヒトは46本</strong>、<strong>チンパンジーは48本</strong>という点だけです。他の種の染色体数を覚える必要はありません。</p>
<p>ほとんどの動植物の体細胞は<strong>二倍体 (diploid)</strong> で、両親から一組ずつ受け継いだ二組の染色体をもちます。そのため染色体は<strong>対</strong>（相同染色体の対）になっており、二倍体細胞の染色体数は必ず<strong>偶数</strong>です。</p>
<div class="note">異なる種でも偶然に染色体数が同じになることがあるので、染色体数だけでは種を特定できません。ただし、同じ種は（まれな異常を除いて）いつも同じ数をもちます。</div>`,
          `<p>不同物種的細胞內染色體數目不同。你只需知道存在這種<strong>多樣性</strong>，並記住一個例子：<strong>人類有 46 條染色體</strong>，<strong>黑猩猩有 48 條</strong>。其他物種的染色體數目不需要記憶。</p>
<p>大多數動植物的體細胞是<strong>二倍體 (diploid)</strong>：有兩套染色體，分別來自父母。因此染色體成<strong>對</strong>出現（同源染色體對），二倍體細胞的染色體數目必定是<strong>偶數</strong>。</p>
<div class="note">不同物種可能碰巧有相同的染色體數目，所以單靠染色體數目並不能確定物種。但同一物種的染色體數目總是相同（罕見的異常除外）。</div>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.7", ahl: false,
        heading: L("Karyotyping and karyograms", "核型分析と核型図 (karyotyping, karyogram)", "核型分析與核型圖 (karyotyping, karyogram)"),
        body: L(
          `<p>A <strong>karyotype</strong> is the full set of chromosomes of an organism. <strong>Karyotyping</strong> is the technique of making this visible, and the picture it produces is called a <strong>karyogram</strong>.</p>
<p><strong>How it is done:</strong> cells are stopped in a stage of division when chromosomes are condensed and visible (metaphase), then stained and photographed. The chromosomes in the photo are cut out, or digitally moved, and arranged in their <strong>homologous pairs</strong>. They are classified using three features:</p>
<ol>
<li><strong>Banding pattern</strong>: the stain makes a pattern of light and dark bands that is unique to each chromosome.</li>
<li><strong>Length</strong>: pairs are normally ordered from longest to shortest.</li>
<li><strong>Centromere position</strong>: the centromere is the pinched region. It can be near the middle or towards one end, which changes the shape.</li>
</ol>
<p>A karyogram shows the chromosome number and can show the sex chromosomes or an extra or missing chromosome.</p>
<p><strong>Worked evidence: human chromosome 2.</strong> Humans have 46 chromosomes and chimpanzees (and other apes) have 48. The hypothesis is that human chromosome 2 was formed when <strong>two chromosomes of an ancestor that humans share with other primates fused</strong> (the guide calls them chromosomes 12 and 13, which is an older numbering of the ape chromosomes; today they are named 2A and 2B. Either name is fine in an exam). Evidence you should be able to evaluate:</p>
<ul>
<li>Banding patterns of human chromosome 2 match, end to end, those of two separate chimpanzee chromosomes.</li>
<li>Human chromosome 2 has the DNA sequences found at the <strong>ends of chromosomes (telomeres)</strong> in the middle of the chromosome, where they would not normally be.</li>
<li>It has the remains of a <strong>second centromere</strong>, as if two chromosomes had joined.</li>
</ul>
<p>This explains why 48 became 46 without losing genes.</p>
<div class="note"><strong>Nature of science.</strong> "Chromosome 2 arose by fusion of two ancestral chromosomes" is a <strong>testable hypothesis</strong>: we can look for the predicted evidence (telomere sequences, banding, a second centromere). It could be shown false. A statement such as "evolution was meant to produce humans" cannot be tested by any observation, so it is <strong>not testable</strong> and is not a scientific hypothesis.</div>`,
          `<p><strong>核型 (karyotype)</strong> とは、生物がもつ染色体の全体のことです。<strong>核型分析 (karyotyping)</strong> はそれを見えるようにする技術で、できた画像を<strong>核型図 (karyogram)</strong> といいます。</p>
<p><strong>方法：</strong>染色体が凝縮して見える分裂の時期（中期）で細胞を止め、染色して撮影します。写真の染色体を切り出す（またはコンピュータ上で動かす）などして、<strong>相同染色体の対</strong>ごとに並べます。分類には次の三つの特徴を使います。</p>
<ol>
<li><strong>縞模様 (banding pattern)</strong>：染色すると明暗の縞ができ、それぞれの染色体に固有です。</li>
<li><strong>長さ (length)</strong>：対は通常、長いものから短いものへ並べます。</li>
<li><strong>動原体（セントロメア）の位置 (centromere position)</strong>：くびれた部分です。中央付近にあることも端に寄ることもあり、形が変わります。</li>
</ol>
<p>核型図から染色体数が分かり、性染色体や、余分な染色体・足りない染色体も分かります。</p>
<p><strong>証拠の検討：ヒトの2番染色体。</strong>ヒトの染色体は46本、チンパンジー（などの類人猿）は48本です。仮説は、ヒトの2番染色体は<strong>ヒトと他の霊長類が共有する祖先の二つの染色体が融合してできた</strong>というものです（ガイドでは12番と13番と呼んでいます。これは類人猿の染色体の古い番号づけで、現在は2Aと2Bと呼ばれます。試験ではどちらの呼び方でも構いません）。評価できるようにしておくべき証拠：</p>
<ul>
<li>ヒト2番染色体の縞模様は、チンパンジーの二つの別々の染色体を端と端でつないだものとよく一致する。</li>
<li>ヒト2番染色体には、本来は<strong>染色体の末端 (テロメア)</strong> にある DNA 配列が、染色体の途中にある。</li>
<li>融合した痕跡のように、<strong>二つ目の動原体</strong>の名残がある。</li>
</ul>
<p>これにより、遺伝子を失わずに48本が46本になったことが説明できます。</p>
<div class="note"><strong>科学の本質。</strong>「2番染色体は祖先の二つの染色体の融合でできた」は<strong>検証可能な仮説</strong>です。予測される証拠（テロメア配列、縞模様、二つ目の動原体）を探すことができ、誤りだと示される可能性があります。一方、「進化はヒトを生み出すためにあった」という主張は、どんな観察でも確かめられないので<strong>検証不可能</strong>で、科学的仮説ではありません。</div>`,
          `<p><strong>核型 (karyotype)</strong> 是生物的整套染色體。<strong>核型分析 (karyotyping)</strong> 是把它顯示出來的技術，所得的圖像稱為<strong>核型圖 (karyogram)</strong>。</p>
<p><strong>做法：</strong>在細胞分裂時染色體濃縮而清晰可見的階段（中期）停止細胞分裂，然後染色並拍照。把照片中的染色體剪出（或用電腦移動），按<strong>同源染色體對</strong>排列。分類時使用以下三項特徵：</p>
<ol>
<li><strong>帶紋 (banding pattern)</strong>：染色後出現明暗相間的帶紋，每條染色體都不同。</li>
<li><strong>長度 (length)</strong>：通常由最長排到最短。</li>
<li><strong>著絲粒位置 (centromere position)</strong>：著絲粒是染色體縮窄的部位，可以靠近中央或偏向一端，因此形狀不同。</li>
</ol>
<p>核型圖顯示染色體數目，也可顯示性染色體以及多出或缺少的染色體。</p>
<p><strong>證據評估：人類第 2 號染色體。</strong>人類有 46 條染色體，黑猩猩（及其他猿類）有 48 條。假說認為人類第 2 號染色體是由<strong>人類與其他靈長類共同祖先的兩條染色體融合而成</strong>（課程指引稱之為第 12 和第 13 號染色體，這是猿類染色體較舊的編號；現時稱為 2A 和 2B。考試時兩種名稱皆可）。你應能評估的證據：</p>
<ul>
<li>人類第 2 號染色體的帶紋，與黑猩猩兩條獨立染色體首尾相接的帶紋相吻合。</li>
<li>人類第 2 號染色體中央有通常只出現在<strong>染色體末端（端粒）</strong>的 DNA 序列。</li>
<li>它還有<strong>第二個著絲粒</strong>的殘餘，好像是兩條染色體連在一起。</li>
</ul>
<p>這解釋了為何染色體由 48 條變成 46 條而沒有失去基因。</p>
<div class="note"><strong>科學本質。</strong>「第 2 號染色體由兩條祖先染色體融合而成」是<strong>可測試的假說</strong>：我們可以尋找預測的證據（端粒序列、帶紋、第二個著絲粒），而且它有可能被證明是錯的。至於「進化的目的是要產生人類」這類說法，沒有任何觀察可以測試，是<strong>不可測試</strong>的，不屬於科學假說。</div>`
        ),
        examTip: L("Karyotype classification uses banding, length and centromere position. Say all three if asked how chromosomes are classified.", "染色体の分類には縞模様、長さ、動原体の位置を使います。分類方法を問われたら三つとも書きましょう。", "染色體分類使用帶紋、長度和著絲粒位置。題目問如何分類染色體時，三項都要答。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.8–9", ahl: false,
        heading: L("Genomes: unity within species, diversity between them", "ゲノム：種内の共通性と種間の多様性 (genome)", "基因組：種內的一致與種間的多樣 (genome)"),
        body: L(
          `<p>A <strong>genome</strong> is <strong>all the genetic information of an organism</strong>: its complete set of DNA.</p>
<p><strong>Within a species (unity and diversity):</strong> members of the same species share <em>most</em> of their genome. Small differences exist. A common type is a <strong>single-nucleotide polymorphism (SNP)</strong>: a position in the genome where a single base differs between individuals (for example C in one person, T in another). SNPs give genetic diversity within a species. Two humans share well over 99% of their base sequence.</p>
<p><strong>Between species (eukaryote genomes):</strong> genomes differ in two ways:</p>
<ul>
<li><strong>Size</strong>, which is set by the total amount of DNA in the genome (counted in base pairs).</li>
<li><strong>Base sequence</strong>, the order of bases.</li>
</ul>
<p>The key pattern: <strong>variation between species is much larger than variation within a species.</strong></p>`,
          `<p><strong>ゲノム (genome)</strong> とは、<strong>生物がもつ遺伝情報のすべて</strong>、つまり DNA の完全な一組のことです。</p>
<p><strong>種内（共通性と多様性）：</strong>同じ種の個体は、ゲノムの<em>大部分</em>を共有します。小さな違いはあります。よくある種類は<strong>一塩基多型 (single-nucleotide polymorphism, SNP)</strong> で、ゲノム中のある位置で個体間に一つの塩基の違いがあるものです（例：ある人は C、別の人は T）。SNP は種内の遺伝的多様性を生みます。ヒトどうしは塩基配列の99%をはるかに超える部分を共有します。</p>
<p><strong>種間（真核生物のゲノム）：</strong>ゲノムは二つの点で異なります。</p>
<ul>
<li><strong>大きさ (size)</strong>：ゲノム中の DNA の総量（塩基対数）で決まります。</li>
<li><strong>塩基配列 (base sequence)</strong>：塩基の並び順。</li>
</ul>
<p>重要なパターン：<strong>種間の変異は、種内の変異よりはるかに大きい。</strong></p>`,
          `<p><strong>基因組 (genome)</strong> 是<strong>生物所有的遺傳資訊</strong>，即其完整的一套 DNA。</p>
<p><strong>物種之內（一致與多樣）：</strong>同一物種的成員共有基因組的<em>大部分</em>，但仍有小差異。常見的一類是<strong>單核苷酸多態性 (single-nucleotide polymorphism, SNP)</strong>：基因組中某一位置，個體之間有一個鹼基不同（例如一個人是 C，另一個人是 T）。SNP 令物種內有遺傳多樣性。兩個人類共有遠超 99% 的鹼基序列。</p>
<p><strong>物種之間（真核生物基因組）：</strong>基因組在兩方面不同：</p>
<ul>
<li><strong>大小 (size)</strong>：由基因組內 DNA 的總量（以鹼基對計）決定。</li>
<li><strong>鹼基序列 (base sequence)</strong>：鹼基的排列次序。</li>
</ul>
<p>重點規律：<strong>物種之間的變異遠大於物種之內的變異。</strong></p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.10", ahl: false,
        heading: L("Comparing genome sizes using a database", "データベースでゲノムの大きさを比べる (genome size)", "利用資料庫比較基因組大小 (genome size)"),
        body: L(
          `<p><strong>Skill:</strong> you should be able to <strong>extract genome size data for different groups from a database</strong> (for example the NCBI Genome database, or the Kew Plant DNA C-values database) and compare it with how complex the organisms are.</p>
<p>Genome size is usually given in <strong>base pairs</strong>: Mbp = million base pairs; Gbp = billion (thousand million) base pairs. The table shows approximate values for a few eukaryotes (illustrative; real values vary slightly between sources).</p>
<table>
<tr><th>Organism</th><th>Group</th><th>Genome size (Mbp, approx.)</th></tr>
<tr><td>Baker's yeast</td><td>Fungus (single cell)</td><td>12</td></tr>
<tr><td>Fruit fly</td><td>Insect</td><td>140</td></tr>
<tr><td>Human</td><td>Mammal</td><td>3 100</td></tr>
<tr><td>Bread wheat</td><td>Flowering plant</td><td>16 000</td></tr>
<tr><td><em>Paris japonica</em></td><td>Flowering plant</td><td>about 150 000</td></tr>
</table>
<p><strong>Conclusion from data like this:</strong> there is <strong>no simple link between genome size and organism complexity</strong>. A plant can have a genome 50 times bigger than a human's. Larger genomes can be partly explained by large amounts of DNA that does not code for proteins, and, in some plants, by extra sets of chromosomes. (You do not need the details.) Simple organisms do tend to have smaller genomes than the largest animals, but there are many exceptions.</p>`,
          `<p><strong>スキル：</strong>異なる生物群の<strong>ゲノムの大きさをデータベースから取り出し</strong>（例：NCBI Genome データベースや Kew Plant DNA C-values データベース）、生物の複雑さと比較できるようにします。</p>
<p>ゲノムサイズは普通<strong>塩基対</strong>で表します。Mbp は百万塩基対、Gbp は十億塩基対です。表は真核生物のおおよその値です（例示用で、実際の値は資料により少し異なります）。</p>
<table>
<tr><th>生物</th><th>分類群</th><th>ゲノムサイズ (Mbp, おおよそ)</th></tr>
<tr><td>パン酵母</td><td>菌類（単細胞）</td><td>12</td></tr>
<tr><td>ショウジョウバエ</td><td>昆虫</td><td>140</td></tr>
<tr><td>ヒト</td><td>哺乳類</td><td>3 100</td></tr>
<tr><td>パンコムギ</td><td>被子植物</td><td>16 000</td></tr>
<tr><td><em>Paris japonica</em> (キヌガサソウ)</td><td>被子植物</td><td>約 150 000</td></tr>
</table>
<p><strong>このようなデータから言えること：</strong><strong>ゲノムの大きさと生物の複雑さの間に単純な関係はありません。</strong>植物のゲノムがヒトの50倍も大きいこともあります。大きなゲノムは、タンパク質をコードしない DNA が多いことや、植物では染色体のセットが余分にあることで一部説明できます（詳細は不要です）。単純な生物のゲノムが大型動物より小さい傾向はありますが、例外も多くあります。</p>`,
          `<p><strong>技能：</strong>你應能從資料庫（例如 NCBI Genome 資料庫或 Kew Plant DNA C-values 資料庫）<strong>擷取不同類羣的基因組大小資料</strong>，並與生物的複雜程度比較。</p>
<p>基因組大小通常以<strong>鹼基對</strong>表示：Mbp 是百萬鹼基對；Gbp 是十億鹼基對。下表列出幾種真核生物的概約數值（示例用；實際數值在不同來源略有差異）。</p>
<table>
<tr><th>生物</th><th>類羣</th><th>基因組大小 (Mbp，概約)</th></tr>
<tr><td>麵包酵母</td><td>真菌（單細胞）</td><td>12</td></tr>
<tr><td>果蠅</td><td>昆蟲</td><td>140</td></tr>
<tr><td>人類</td><td>哺乳動物</td><td>3 100</td></tr>
<tr><td>普通小麥</td><td>開花植物</td><td>16 000</td></tr>
<tr><td><em>Paris japonica</em>（日本重樓類）</td><td>開花植物</td><td>約 150 000</td></tr>
</table>
<p><strong>從這類數據得出的結論：</strong><strong>基因組大小與生物的複雜程度之間沒有簡單的關係。</strong>某些植物的基因組可比人類大 50 倍。較大的基因組可部分歸因於大量不編碼蛋白質的 DNA，以及某些植物有額外的染色體組（細節無須掌握）。簡單的生物傾向於比最大的動物有較小的基因組，但例外很多。</p>`
        ),
        examTip: L("Do not say \"bigger genome = more complex\". The data show the relationship is weak.", "「ゲノムが大きいほど複雑」と書いてはいけません。データはその関係が弱いことを示しています。", "不要寫「基因組越大越複雜」。數據顯示這關係很弱。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.11", ahl: false,
        heading: L("Whole genome sequencing: uses now and in the future", "全ゲノム解読：現在と将来の利用 (whole genome sequencing)", "全基因組測序：現今與未來的用途 (whole genome sequencing)"),
        body: L(
          `<p><strong>Whole genome sequencing</strong> means working out the complete base sequence of an organism's genome. Two trends make it more and more useful: it is getting <strong>faster</strong> and <strong>cheaper</strong>. The first human genome took more than ten years and cost billions of dollars. Today a human genome can be sequenced in about a day for a small fraction of that cost.</p>
<p><strong>Current use:</strong> <strong>research into evolutionary relationships</strong>. Comparing whole genomes of different species shows how closely related they are and helps to build the tree of life.</p>
<p><strong>Possible future use:</strong> <strong>personalized medicine</strong>. If a patient's genome is known, doctors might choose the drug, the dose or the preventive advice that suits that person's own genes best.</p>`,
          `<p><strong>全ゲノム解読 (whole genome sequencing)</strong> とは、生物のゲノムの塩基配列を全部明らかにすることです。二つの傾向のためにますます役立つようになっています。<strong>より速く</strong>、そして<strong>より安く</strong>なっているのです。最初のヒトゲノムの解読には十年以上と数十億ドルがかかりましたが、今ではその何分の一かの費用で、ヒトゲノムを約一日で解読できます。</p>
<p><strong>現在の利用：</strong><strong>進化的関係の研究</strong>。異なる種の全ゲノムを比べると、どれだけ近縁かが分かり、生命の系統樹の作成に役立ちます。</p>
<p><strong>将来の利用の可能性：</strong><strong>個別化医療 (personalized medicine)</strong>。患者のゲノムが分かれば、医師はその人の遺伝子に最も合う薬、量、予防のアドバイスを選べるかもしれません。</p>`,
          `<p><strong>全基因組測序 (whole genome sequencing)</strong> 是找出生物整個基因組的鹼基序列。兩個趨勢令它越來越有用：它變得<strong>更快</strong>、<strong>更便宜</strong>。第一個人類基因組花了十多年和數十億美元；現在測定一個人類基因組只需約一天，費用只是當時的一小部分。</p>
<p><strong>現時用途：</strong><strong>研究進化關係</strong>。比較不同物種的整個基因組，可顯示牠們的親緣程度，有助建立生命之樹。</p>
<p><strong>未來可能的用途：</strong><strong>個人化醫療 (personalized medicine)</strong>。若知道病人的基因組，醫生可能可以選擇最適合該病人基因的藥物、劑量或預防建議。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.12", ahl: true,
        heading: L("Where the biological species concept fails", "生物学的種概念がうまく働かない場合 (AHL)", "生物學物種概念行不通的情況 (AHL)"),
        body: L(
          `<p>The biological species concept needs organisms that <em>breed with each other</em>. It works badly in two situations:</p>
<ol>
<li><strong>Asexually reproducing species.</strong> Organisms that reproduce asexually (for example bacteria, and some plants, fungi and animals) never breed with a partner. "Can breed and produce fertile offspring" does not apply to them, so the concept cannot be used to decide what is one species and what is another.</li>
<li><strong>Bacteria with horizontal gene transfer.</strong> Bacteria can pass genes <em>sideways</em> to other bacteria, even of a different species, instead of only passing genes to offspring. Genes can be moved between groups that we would call different species, so gene pools are not kept separate in the way the concept assumes.</li>
</ol>
<p>For these groups, other definitions of species (for example based on DNA sequence similarity) are used instead.</p>`,
          `<p>生物学的種概念は、生物が<em>互いに交配する</em>ことを前提にしています。次の二つの場合にはうまく働きません。</p>
<ol>
<li><strong>無性生殖をする種。</strong>無性生殖をする生物（細菌や、一部の植物・菌類・動物）は、相手と交配しません。「交配して生殖能力のある子を作れる」という条件が当てはまらないので、この概念では何が一つの種で何が別の種かを決められません。</li>
<li><strong>遺伝子の水平伝播 (horizontal gene transfer) をする細菌。</strong>細菌は子にだけ遺伝子を渡すのではなく、別の種の細菌にも遺伝子を<em>横向きに</em>渡すことがあります。別種とされる集団の間で遺伝子が移動するので、この概念が前提とする「遺伝子プールが分かれている」状態になりません。</li>
</ol>
<p>これらの生物群には、他の種の定義（例：DNA 配列の類似性に基づくもの）が使われます。</p>`,
          `<p>生物學物種概念要求生物<em>互相交配</em>。在以下兩種情況下它的效果不佳：</p>
<ol>
<li><strong>無性生殖的物種。</strong>進行無性生殖的生物（例如細菌，以及某些植物、真菌和動物）從不與配偶交配。「能交配並產生可育後代」不適用於牠們，因此這個概念無法用來決定哪些是同一物種、哪些是不同物種。</li>
<li><strong>有水平基因轉移 (horizontal gene transfer) 的細菌。</strong>細菌除了把基因傳給後代，還可以把基因<em>橫向</em>傳給其他細菌，甚至不同物種的細菌。基因可在被視為不同物種的類羣之間移動，所以基因庫並不像這個概念所假設的那樣保持分隔。</li>
</ol>
<p>對於這些類羣，會改用其他的物種定義（例如以 DNA 序列相似度為基礎）。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.13", ahl: true,
        heading: L("Chromosome number as a shared trait of a species", "種に共通する形質としての染色体数 (AHL)", "染色體數目是物種的共有性狀 (AHL)"),
        body: L(
          `<p>All members of a species normally have the <strong>same chromosome number</strong>, so it is a shared trait of the species.</p>
<p>Now think about <strong>cross-breeding between two closely related species</strong> with <em>different</em> chromosome numbers. The hybrid offspring gets one set from each parent, so its cells contain chromosomes that do not form matching pairs. In meiosis, chromosomes must pair up (homologous pairs) before they separate into gametes. If they cannot pair properly, normal gametes cannot be made. The hybrid is therefore <strong>unlikely to be fertile</strong>.</p>
<p>Example: a horse and a donkey have different chromosome numbers, and their hybrid, the mule, is sterile. The result is that <strong>different chromosome numbers act as a barrier that keeps the gene pools of the two species separate</strong>.</p>`,
          `<p>同じ種の個体は普通すべて<strong>同じ染色体数</strong>をもつので、染色体数は種に共通する形質です。</p>
<p>では、染色体数が<em>異なる</em>近縁な二つの種を<strong>交雑</strong>させるとどうなるでしょう。雑種の子は両親から一組ずつ受け取るので、細胞には対応する対にならない染色体が含まれます。減数分裂では、染色体が相同染色体どうしで対になってから配偶子に分かれる必要があります。うまく対になれないと、正常な配偶子ができません。そのため雑種は<strong>生殖能力をもたない可能性が高い</strong>のです。</p>
<p>例：ウマとロバは染色体数が異なり、その雑種のラバは不妊です。つまり、<strong>染色体数の違いが、二つの種の遺伝子プールを分けておく障壁として働きます</strong>。</p>`,
          `<p>同一物種的所有成員通常有<strong>相同的染色體數目</strong>，所以染色體數目是物種的共有性狀。</p>
<p>現在考慮染色體數目<em>不同</em>的兩個近緣物種之間的<strong>雜交</strong>。雜種後代從雙親各得一套染色體，因此細胞內的染色體不能配成對。減數分裂時，染色體必須先配對（同源染色體對）才分開進入配子。如果不能正常配對，就無法產生正常的配子，因此雜種<strong>不大可能可育</strong>。</p>
<p>例子：馬和驢的染色體數目不同，牠們的雜種騾是不育的。結果是：<strong>不同的染色體數目成為屏障，使兩個物種的基因庫保持分隔</strong>。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.14", ahl: true,
        heading: L("Building a dichotomous key from local species", "地域の種を使った二分検索表づくり (AHL)", "利用本地物種製作二歧檢索表 (AHL)"),
        body: L(
          `<p><strong>Skill (AHL):</strong> you are expected to <strong>engage with local plants or animals</strong> (for example in a schoolyard, park or beach) and <strong>develop a dichotomous key</strong>.</p>
<p>A <strong>dichotomous key</strong> is a set of numbered pairs of statements. Each pair offers <em>two</em> choices ("dichotomous" means split in two). Each choice sends you either to another numbered pair or to a name.</p>
<p><strong>Steps to design a key:</strong></p>
<ol>
<li>Collect or photograph the organisms. Look for <strong>clear, observable features</strong> that differ (number of legs, presence of a shell, leaf shape, flower colour).</li>
<li>Choose features that are <strong>not affected by age, season or sex</strong> and that can be seen without special equipment. Avoid size words like "big" or "small" unless you give a measurement.</li>
<li>Split the whole set into <strong>two groups</strong> using one feature (statement 1a / 1b). Then split each group again, and again, until each organism has its own end point.</li>
<li><strong>Test the key</strong> on someone else, and correct unclear steps.</li>
</ol>
<p><strong>Worked example (invented key for five invertebrates):</strong></p>
<table>
<tr><td>1a</td><td>Legs present</td><td>go to 2</td></tr>
<tr><td>1b</td><td>No legs</td><td>go to 4</td></tr>
<tr><td>2a</td><td>Six legs</td><td>Ant</td></tr>
<tr><td>2b</td><td>More than six legs</td><td>go to 3</td></tr>
<tr><td>3a</td><td>Eight legs</td><td>Spider</td></tr>
<tr><td>3b</td><td>Fourteen legs</td><td>Woodlouse</td></tr>
<tr><td>4a</td><td>Hard shell present</td><td>Snail</td></tr>
<tr><td>4b</td><td>No shell, body made of rings</td><td>Earthworm</td></tr>
</table>
<p>A key for N organisms needs N − 1 pairs of statements. This key has 4 pairs for 5 organisms.</p>
<div class="note">The understanding A3.1.14 is AHL, but "design dichotomous keys" is also one of the guide's general tools (skills for all students), so SL students may also be asked to use or design a key.</div>`,
          `<p><strong>スキル (AHL)：</strong>地域の植物や動物（校庭、公園、海岸など）に<strong>実際に触れ</strong>、<strong>二分検索表を作る</strong>ことが求められます。</p>
<p><strong>二分検索表 (dichotomous key)</strong> は、番号の付いた二つ一組の記述を並べたものです。各組には<em>二つ</em>の選択肢があります（「二分」は二つに分けるという意味）。各選択肢は、別の番号の組か名前につながります。</p>
<p><strong>作り方の手順：</strong></p>
<ol>
<li>生物を採集または撮影します。違いがはっきり<strong>観察できる特徴</strong>（足の数、殻の有無、葉の形、花の色など）を探します。</li>
<li><strong>年齢、季節、性別で変わらず</strong>、特別な道具なしで見える特徴を選びます。「大きい」「小さい」のような語は、数値を示さない限り避けます。</li>
<li>一つの特徴（記述 1a / 1b）で全体を<strong>二つの集団</strong>に分けます。さらに各集団を分け、すべての生物が単独の終点になるまで続けます。</li>
<li>他の人に使ってもらって<strong>検索表を試し</strong>、分かりにくい手順を直します。</li>
</ol>
<p><strong>例（5種の無脊椎動物についての架空の検索表）：</strong></p>
<table>
<tr><td>1a</td><td>脚がある</td><td>2へ</td></tr>
<tr><td>1b</td><td>脚がない</td><td>4へ</td></tr>
<tr><td>2a</td><td>脚が6本</td><td>アリ</td></tr>
<tr><td>2b</td><td>脚が6本より多い</td><td>3へ</td></tr>
<tr><td>3a</td><td>脚が8本</td><td>クモ</td></tr>
<tr><td>3b</td><td>脚が14本</td><td>ワラジムシ</td></tr>
<tr><td>4a</td><td>硬い殻がある</td><td>カタツムリ</td></tr>
<tr><td>4b</td><td>殻がなく、体が環状の節でできている</td><td>ミミズ</td></tr>
</table>
<p>N 種の生物の検索表には N − 1 組の記述が必要です。この表は5種に対して4組です。</p>
<div class="note">A3.1.14 は AHL の項目ですが、「二分検索表を設計する」はガイドの共通のツール（すべての生徒の技能）にも含まれているので、SL の生徒も検索表の使用や作成を問われることがあります。</div>`,
          `<p><strong>技能 (AHL)：</strong>你須<strong>接觸本地的動植物</strong>（例如在校園、公園或海灘），並<strong>製作二歧檢索表</strong>。</p>
<p><strong>二歧檢索表 (dichotomous key)</strong> 是一組編了號的成對描述。每一對提供<em>兩個</em>選擇（「二歧」即一分為二）。每個選擇會引導你去另一對編號的描述，或得出一個名稱。</p>
<p><strong>設計檢索表的步驟：</strong></p>
<ol>
<li>採集或拍攝生物。尋找有差異而且<strong>清楚可觀察的特徵</strong>（腳的數目、有沒有殼、葉形、花的顏色）。</li>
<li>選擇<strong>不受年齡、季節或性別影響</strong>、不需特別儀器就能看見的特徵。除非給出量度數值，否則避免使用「大」「小」等字眼。</li>
<li>用一個特徵（描述 1a / 1b）把整組生物分成<strong>兩組</strong>。然後再把每一組分開，直至每種生物都有自己的終點。</li>
<li>讓別人<strong>試用檢索表</strong>，並修正不清楚的步驟。</li>
</ol>
<p><strong>例子（五種無脊椎動物的虛構檢索表）：</strong></p>
<table>
<tr><td>1a</td><td>有腳</td><td>前往 2</td></tr>
<tr><td>1b</td><td>沒有腳</td><td>前往 4</td></tr>
<tr><td>2a</td><td>六隻腳</td><td>螞蟻</td></tr>
<tr><td>2b</td><td>多於六隻腳</td><td>前往 3</td></tr>
<tr><td>3a</td><td>八隻腳</td><td>蜘蛛</td></tr>
<tr><td>3b</td><td>十四隻腳</td><td>鼠婦</td></tr>
<tr><td>4a</td><td>有硬殼</td><td>蝸牛</td></tr>
<tr><td>4b</td><td>沒有殼，身體由環節組成</td><td>蚯蚓</td></tr>
</table>
<p>N 種生物的檢索表需要 N − 1 對描述。這個檢索表為 5 種生物用了 4 對。</p>
<div class="note">A3.1.14 屬 AHL，但「設計二歧檢索表」也是課程指引中的通用工具（所有學生的技能），所以 SL 學生也可能被要求使用或設計檢索表。</div>`
        ),
        examTip: L("Each statement must be a clear yes/no feature you can observe. Never end a pair with two choices that go to the same place.", "各記述は、観察できる明確なはい／いいえの特徴にします。一組の二つの選択肢が同じ行き先にならないようにしましょう。", "每項描述都要是清楚、可觀察、「是或否」的特徵。同一對的兩個選擇不可通往同一個地方。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.1.15", ahl: true,
        heading: L("Environmental DNA and barcodes", "環境DNAとDNAバーコード (AHL)", "環境 DNA 與 DNA 條碼 (AHL)"),
        body: L(
          `<p>A <strong>DNA barcode</strong> is a short stretch of DNA, in a standard part of the genome, whose base sequence is <strong>different for each species</strong> but very similar within a species. It works like a barcode on a product.</p>
<p><strong>Environmental DNA (eDNA)</strong> is DNA that organisms leave behind in their surroundings, for example in skin cells, faeces, mucus or fragments in water or soil.</p>
<p><strong>Using them together to survey a habitat:</strong></p>
<ol>
<li>Take a sample of water, soil or air from the habitat.</li>
<li>Extract all the DNA in the sample.</li>
<li>Copy and read the sequences of the barcode region.</li>
<li>Compare each sequence with a database of barcodes from known species to identify which species were present.</li>
</ol>
<p><strong>Advantage:</strong> the biodiversity of a habitat can be investigated <strong>rapidly</strong>. You do not need to see, catch or even find the organisms, and one sample can show many species at once. This helps to detect rare, hidden or night-active species.</p>`,
          `<p><strong>DNAバーコード (DNA barcode)</strong> とは、ゲノムの決まった部分にある短い DNA 領域で、塩基配列が<strong>種ごとに異なり</strong>、同じ種の中ではとてもよく似ています。商品のバーコードのような働きをします。</p>
<p><strong>環境DNA (eDNA)</strong> とは、生物が周囲に残した DNA のことです。皮膚の細胞、ふん、粘液、水や土の中の断片などがあります。</p>
<p><strong>二つを組み合わせた生息地の調査：</strong></p>
<ol>
<li>生息地から水、土、空気の試料を採取する。</li>
<li>試料中のすべての DNA を取り出す。</li>
<li>バーコード領域の配列を増やして読み取る。</li>
<li>それぞれの配列を、既知の種のバーコードのデータベースと比べ、どの種がいたかを特定する。</li>
</ol>
<p><strong>利点：</strong>生息地の生物多様性を<strong>速やかに</strong>調べられます。生物を見たり捕まえたり、見つけたりする必要がなく、一つの試料で多くの種が同時に分かります。数の少ない種、隠れている種、夜行性の種の検出にも役立ちます。</p>`,
          `<p><strong>DNA 條碼 (DNA barcode)</strong> 是基因組中某個標準部位的一小段 DNA，其鹼基序列在<strong>不同物種之間不同</strong>，但在同一物種內非常相似。它的作用就像商品上的條碼。</p>
<p><strong>環境 DNA (eDNA)</strong> 是生物遺留在環境中的 DNA，例如皮膚細胞、糞便、黏液，或水和泥土中的碎片。</p>
<p><strong>結合使用以調查生境：</strong></p>
<ol>
<li>從生境取得水、泥土或空氣樣本。</li>
<li>抽取樣本中所有的 DNA。</li>
<li>複製並讀取條碼區域的序列。</li>
<li>把每個序列與已知物種的條碼資料庫比對，找出存在哪些物種。</li>
</ol>
<p><strong>優點：</strong>可以<strong>快速</strong>調查生境的生物多樣性。無須看見、捕捉甚至找到生物，一個樣本就能同時顯示許多物種。這有助偵測稀有、隱蔽或夜間活動的物種。</p>`
        )
      }
    ],
    keyTerms: [
      { term: L("variation", "変異", "變異"), def: L("Differences between individual organisms; no two are identical in all traits.", "個体間の違い。すべての形質が同じ個体は存在しない。", "個體之間的差異；沒有兩個個體所有性狀都相同。"), ahl: false },
      { term: L("species", "種", "物種"), def: L("A group of organisms with shared traits (morphological concept) or that can breed and produce fertile offspring (biological concept).", "共通の形質をもつ生物の集団（形態学的概念）、または交配して生殖能力のある子を作れる集団（生物学的概念）。", "具有共同性狀（形態學概念），或能交配並產生可育後代（生物學概念）的一羣生物。"), ahl: false },
      { term: L("binomial system", "二名法", "雙名法"), def: L("Naming each species with a genus name (capital) and a species name (lower case).", "各種を属名（大文字）と種小名（小文字）の二つで表す命名法。", "以屬名（大寫）和種名（小寫）兩部分為每個物種命名的方法。"), ahl: false },
      { term: L("genus", "属", "屬"), def: L("A group of closely related species; the first part of a binomial name.", "近縁な種の集まり。二名法の最初の部分。", "一羣近緣物種；雙名法的第一部分。"), ahl: false },
      { term: L("biological species concept", "生物学的種概念", "生物學物種概念"), def: L("A species is a group of organisms that can breed and produce fertile offspring.", "種とは、交配して生殖能力のある子を作れる生物の集団であるとする考え方。", "認為物種是一羣能交配並產生可育後代的生物。"), ahl: false },
      { term: L("speciation", "種分化", "物種形成"), def: L("The splitting of one species into two or more species, usually gradually.", "一つの種が二つ以上の種に分かれること。通常は徐々に起こる。", "一個物種分裂成兩個或以上物種，通常是逐漸發生。"), ahl: false },
      { term: L("karyotype / karyogram", "核型／核型図", "核型／核型圖"), def: L("The full set of chromosomes of an organism / the image of them arranged in homologous pairs by length, banding and centromere position.", "生物の染色体の全体／それを長さ・縞模様・動原体の位置で相同染色体の対に並べた画像。", "生物的整套染色體／按長度、帶紋和著絲粒位置把染色體排成同源對的圖像。"), ahl: false },
      { term: L("genome", "ゲノム", "基因組"), def: L("All the genetic information of an organism.", "生物がもつ遺伝情報のすべて。", "生物所有的遺傳資訊。"), ahl: false },
      { term: L("single-nucleotide polymorphism (SNP)", "一塩基多型 (SNP)", "單核苷酸多態性 (SNP)"), def: L("A single base position where the base differs between individuals of the same species.", "同じ種の個体間で一つの塩基が異なる位置。", "同一物種的個體之間，單一鹼基位置上鹼基不同。"), ahl: false },
      { term: L("whole genome sequencing", "全ゲノム解読", "全基因組測序"), def: L("Determining the complete base sequence of a genome.", "ゲノムの塩基配列を全部決定すること。", "測定整個基因組的完整鹼基序列。"), ahl: false },
      { term: L("horizontal gene transfer", "遺伝子の水平伝播", "水平基因轉移"), def: L("Movement of genes between organisms other than by parent to offspring, as in bacteria.", "親から子以外の経路で生物間に遺伝子が移ること（細菌など）。", "基因以親代傳子代以外的方式在生物之間移動，例如細菌之間。"), ahl: true },
      { term: L("dichotomous key", "二分検索表", "二歧檢索表"), def: L("A tool for identifying organisms using numbered pairs of contrasting statements.", "番号付きの対照的な二つ一組の記述で生物を同定する道具。", "利用編了號的成對對比描述來鑑定生物的工具。"), ahl: true },
      { term: L("environmental DNA (eDNA)", "環境DNA", "環境 DNA"), def: L("DNA that organisms leave in their surroundings, such as in water or soil.", "生物が水や土などの環境中に残した DNA。", "生物遺留在水或泥土等環境中的 DNA。"), ahl: true },
      { term: L("DNA barcode", "DNAバーコード", "DNA 條碼"), def: L("A short standard DNA sequence that differs between species and is used to identify them.", "種ごとに異なり、種の同定に使う短い標準的な DNA 配列。", "各物種不同、用於鑑定物種的短標準 DNA 序列。"), ahl: true }
    ],
    misconceptions: [
      {
        wrong: L("A species is defined only by how it looks.", "種は見た目だけで定義される。", "物種只由外貌來定義。"),
        right: L("Appearance (morphological concept) is one definition; the biological concept uses interbreeding with fertile offspring, and others use DNA.", "見た目（形態学的概念）は一つの定義にすぎません。生物学的概念は交配と生殖能力のある子を使い、他に DNA を使う定義もあります。", "外貌（形態學概念）只是其中一種定義；生物學概念用交配和可育後代，也有用 DNA 的定義。")
      },
      {
        wrong: L("Two organisms that can mate must be the same species.", "交配できる二つの生物は必ず同じ種である。", "能交配的兩種生物必定是同一物種。"),
        right: L("The offspring must also be fertile. A horse and a donkey can mate, but the mule is sterile.", "子にも生殖能力が必要です。ウマとロバは交配できますが、ラバは不妊です。", "後代也必須可育。馬和驢能交配，但騾是不育的。")
      },
      {
        wrong: L("A bigger genome means a more complex organism.", "ゲノムが大きいほど複雑な生物である。", "基因組越大，生物越複雜。"),
        right: L("Genome size does not track complexity; some plants have genomes far larger than the human genome.", "ゲノムの大きさは複雑さと対応しません。ヒトよりはるかに大きいゲノムをもつ植物もあります。", "基因組大小與複雜程度並不對應；有些植物的基因組遠比人類的大。")
      },
      {
        wrong: L("Humans have 46 chromosomes, so chimpanzees must have fewer.", "ヒトは46本なので、チンパンジーはそれより少ないはずだ。", "人類有 46 條染色體，所以黑猩猩一定較少。"),
        right: L("Chimpanzees have 48. Human chromosome 2 is thought to be a fusion of two ancestral chromosomes.", "チンパンジーは48本です。ヒトの2番染色体は祖先の二つの染色体の融合と考えられています。", "黑猩猩有 48 條。人類第 2 號染色體被認為是兩條祖先染色體融合而成。")
      }
    ],
    beyondSyllabus: [
      L("You do not need to memorize chromosome numbers of any species except humans (46) and chimpanzees (48).", "ヒト (46) とチンパンジー (48) 以外の種の染色体数を覚える必要はありません。", "除了人類 (46) 和黑猩猩 (48) 外，你不需要記憶任何物種的染色體數目。"),
      L("You do not need to memorize the details of the chromosome 2 evidence beyond being able to evaluate it (banding match, telomere sequences in the middle, a second centromere remnant).", "2番染色体の証拠については、評価できればよく（縞模様の一致、途中のテロメア配列、二つ目の動原体の名残）、細部の暗記は不要です。", "第 2 號染色體的證據只需能夠評估（帶紋吻合、中央的端粒序列、第二個著絲粒的殘餘），不需記憶更多細節。"),
      L("You do not need to know named species concepts other than the morphological and biological ones (for example the phylogenetic or ecological species concept) in detail; only that competing definitions exist.", "形態学的概念と生物学的概念以外の種概念（系統学的種概念、生態学的種概念など）を詳しく知る必要はありません。他の定義があることを知っていれば十分です。", "除形態學概念和生物學概念外，你不需要詳細認識其他種概念（例如系統發生物種概念、生態物種概念），只需知道存在競爭的定義。"),
      L("You do not need to know the names or methods of DNA sequencing technologies, or the names of particular barcode genes.", "DNA 解読技術の名称や方法、特定のバーコード遺伝子の名前を知る必要はありません。", "你不需要知道 DNA 測序技術的名稱或方法，也不需要知道特定條碼基因的名稱。"),
      L("You do not need to name the mechanisms of horizontal gene transfer (conjugation, transformation, transduction) for A3.1.12.", "A3.1.12 のために、遺伝子の水平伝播の仕組み（接合、形質転換、形質導入）の名称を覚える必要はありません。", "就 A3.1.12 而言，你不需要說出水平基因轉移的機制名稱（接合、轉化、轉導）。")
    ],
    links: [
      { to: "A1.2", why: L("Genomes and barcodes depend on DNA base sequences.", "ゲノムとバーコードは DNA の塩基配列に基づきます。", "基因組和條碼都依賴 DNA 鹼基序列。") },
      { to: "A3.2", why: L("Sequence differences are used to build cladograms and classify organisms into clades.", "配列の違いは分岐図の作成や生物のクレードへの分類に使われます。", "序列差異用來建立支序圖，並把生物分類為演化支。") },
      { to: "A4.1", why: L("Speciation is the splitting of species; reproductive isolation keeps gene pools separate.", "種分化は種の分岐であり、生殖的隔離が遺伝子プールを分けておきます。", "物種形成是物種分裂；生殖隔離使基因庫保持分隔。") },
      { to: "A4.2", why: L("Biodiversity includes genetic diversity, which genomes and eDNA help to measure.", "生物多様性には遺伝的多様性が含まれ、ゲノムや環境 DNA はその測定に役立ちます。", "生物多樣性包括遺傳多樣性，基因組和環境 DNA 有助測量它。") }
    ],
    natureOfScience: [
      L("Testable and non-testable statements: the origin of chromosome 2 by fusion is a testable hypothesis; statements that cannot be checked by any observation are not.", "検証可能な主張と不可能な主張：2番染色体の融合起源は検証可能な仮説です。どんな観察でも確かめられない主張はそうではありません。", "可測試與不可測試的陳述：第 2 號染色體由融合而成是可測試的假說；無法以任何觀察驗證的陳述則不是。"),
      L("Species definitions are human-made classifications of patterns in nature; different definitions suit different groups.", "種の定義は、自然のパターンを人間が分類したものであり、生物群によって適した定義が異なります。", "物種的定義是人類對自然規律所作的分類；不同的定義適合不同的類羣。")
    ],
    questions: [
      {
        id: "a3-1-q01", type: "mcq", ahl: false, difficulty: 1, ref: "A3.1.3", paper: "1A",
        stem: L("Which is the correct way to write the scientific name of the tiger?", "トラの学名として正しい書き方はどれか。", "以下哪一個是老虎學名的正確寫法？"),
        options: [L("panthera tigris", "panthera tigris", "panthera tigris"), L("Panthera Tigris", "Panthera Tigris", "Panthera Tigris"), L("Panthera tigris", "Panthera tigris", "Panthera tigris"), L("PANTHERA tigris", "PANTHERA tigris", "PANTHERA tigris")],
        answer: 2,
        explanation: L("In the binomial system the genus starts with a capital letter and the species word is all lower case: <em>Panthera tigris</em>. The tempting option \"Panthera Tigris\" capitalizes both words; only the genus gets a capital.", "二名法では属名は大文字で始め、種小名はすべて小文字です。<em>Panthera tigris</em> が正解です。「Panthera Tigris」は両方を大文字にしてしまっていて誤りです。大文字にするのは属名だけです。", "雙名法中屬名以大寫開頭，種名全部小寫：<em>Panthera tigris</em>。「Panthera Tigris」把兩個詞都寫成大寫，是錯的；只有屬名用大寫。")
      },
      {
        id: "a3-1-q02", type: "mcq", ahl: false, difficulty: 1, ref: "A3.1.4", paper: "1A",
        stem: L("Which statement best defines a species according to the biological species concept?", "生物学的種概念による種の定義として最も適切なのはどれか。", "根據生物學物種概念，以下哪項最能定義物種？"),
        options: [L("A group of organisms that can mate with each other", "互いに交尾できる生物の集団", "能互相交配的一羣生物"), L("A group of organisms that look the same", "同じ見た目をした生物の集団", "外貌相同的一羣生物"), L("A group of organisms that can breed to produce fertile offspring", "交配して生殖能力のある子を作れる生物の集団", "能交配並產生可育後代的一羣生物"), L("A group of organisms that live in the same habitat", "同じ生息地で生活する生物の集団", "生活在同一生境的一羣生物")],
        answer: 2,
        explanation: L("The concept requires fertile offspring, not just mating. Option A is the common mistake: a horse and a donkey can mate, but the mule is sterile. B is the morphological concept and D is not a species definition.", "この概念は交配だけでなく生殖能力のある子を必要とします。Aはよくある誤りで、ウマとロバは交配できてもラバは不妊です。Bは形態学的種概念、Dは種の定義ではありません。", "這個概念要求後代可育，而不只是能交配。選項 A 是常見錯誤：馬和驢能交配，但騾不育。B 是形態學概念，D 不是物種的定義。")
      },
      {
        id: "a3-1-q03", type: "mcq", ahl: false, difficulty: 2, ref: "A3.1.6", paper: "1A",
        stem: L("A biologist counts the chromosomes in a diploid body cell of a newly discovered animal. Which count is impossible?", "新しく発見された動物の二倍体の体細胞で染色体を数えた。あり得ない数はどれか。", "生物學家數算一種新發現動物的二倍體體細胞中的染色體。以下哪個數目是不可能的？"),
        options: [L("38", "38", "38"), L("46", "46", "46"), L("47", "47", "47"), L("48", "48", "48")],
        answer: 2,
        explanation: L("Diploid cells have chromosomes in homologous pairs, so the number must be even. 47 is odd. Remember that 46 and 48 are the human and chimpanzee numbers, but different species can have any even number.", "二倍体細胞の染色体は相同染色体の対になっているので、偶数でなければなりません。47は奇数です。46と48はヒトとチンパンジーの数ですが、種によって偶数であればどんな数にもなり得ます。", "二倍體細胞的染色體成同源對，所以數目必須是偶數。47 是奇數。46 和 48 分別是人類和黑猩猩的數目，但不同物種可以有任何偶數。")
      },
      {
        id: "a3-1-q04", type: "multi", ahl: false, difficulty: 2, ref: "A3.1.4", paper: "1A",
        stem: L("Select ALL the situations where the biological species concept is difficult to apply.", "生物学的種概念を当てはめるのが難しい状況をすべて選べ。", "選出所有難以應用生物學物種概念的情況。"),
        options: [L("Fossils of an extinct animal", "絶滅した動物の化石", "已滅絕動物的化石"), L("Two populations that live on different continents and never meet", "別々の大陸に住み、出会うことのない二つの集団", "生活在不同大洲、從不相遇的兩個種羣"), L("A pair of animals that mate in a zoo and produce fertile young", "動物園で交尾し、生殖能力のある子を産む一組の動物", "在動物園交配並產下可育幼體的一對動物"), L("Two plant species that sometimes form fertile hybrids", "ときどき生殖能力のある雑種を作る二種の植物", "有時會產生可育雜種的兩種植物")],
        answer: [0, 1, 3],
        explanation: L("Fossils cannot be tested for breeding; populations that never meet cannot be tested; and fertile hybrids between 'different' species blur the boundary. A pair that mates and produces fertile young is the clear case that the concept handles well.", "化石では交配を調べられず、出会わない集団も調べられません。また「別種」の間に生殖能力のある雑種ができると境界があいまいになります。交尾して生殖能力のある子を産む一組は、この概念がうまく扱える明確な例です。", "化石無法測試交配；從不相遇的種羣也無法測試；而「不同」物種之間產生可育雜種會令界線模糊。能交配並產下可育幼體的一對動物，則是這個概念能夠處理的清楚例子。")
      },
      {
        id: "a3-1-q05", type: "order", ahl: false, difficulty: 1, ref: "A3.1.7", paper: "1A",
        stem: L("Put the steps of producing a karyogram in the correct order.", "核型図を作る手順を正しい順に並べよ。", "把製作核型圖的步驟排成正確次序。"),
        items: [L("Cells are stopped in metaphase when chromosomes are condensed", "染色体が凝縮した中期で細胞を止める", "在染色體濃縮的中期停止細胞分裂"), L("Chromosomes are stained to show banding", "染色して縞模様を見えるようにする", "把染色體染色以顯示帶紋"), L("A photograph of the chromosomes is taken", "染色体の写真を撮る", "拍攝染色體的照片"), L("Chromosomes are arranged in homologous pairs by length, banding and centromere position", "長さ、縞模様、動原体の位置で相同染色体の対に並べる", "按長度、帶紋和著絲粒位置把染色體排成同源對")],
        explanation: L("Chromosomes are only compact and countable at metaphase; they must be stained before the bands can be seen and photographed; the arrangement into pairs is done last using the photograph.", "染色体は中期にだけ凝縮して数えられます。縞模様が見えて撮影できるように先に染色し、最後に写真を使って対に並べます。", "染色體只在中期才緊縮而可以計數；要先染色才能看到帶紋並拍照；最後才利用照片排成對。")
      },
      {
        id: "a3-1-q06", type: "match", ahl: false, difficulty: 1, ref: "A3.1.8", paper: "1A",
        stem: L("Match each term to its meaning.", "各用語を意味と結び付けよ。", "把每個術語配對其意思。"),
        pairs: [
          { left: L("Genome", "ゲノム", "基因組"), right: L("All the genetic information of an organism", "生物がもつ遺伝情報のすべて", "生物所有的遺傳資訊") },
          { left: L("SNP", "SNP", "SNP"), right: L("A single base that differs between individuals", "個体間で異なる一つの塩基", "個體之間不同的單一鹼基") },
          { left: L("Karyogram", "核型図", "核型圖"), right: L("Image of chromosomes arranged in homologous pairs", "相同染色体の対に並べた染色体の画像", "把染色體排成同源對的圖像") },
          { left: L("Whole genome sequencing", "全ゲノム解読", "全基因組測序"), right: L("Determining the complete base sequence of an organism's DNA", "生物の DNA の塩基配列を全部決定すること", "測定生物 DNA 的完整鹼基序列") }
        ],
        explanation: L("A SNP is one base position that varies; the genome is everything; a karyogram shows chromosomes, not base sequences.", "SNP は変異する一つの塩基の位置、ゲノムはすべての情報、核型図は塩基配列ではなく染色体を示します。", "SNP 是一個會變異的鹼基位置；基因組是全部資訊；核型圖顯示染色體，而不是鹼基序列。")
      },
      {
        id: "a3-1-q07", type: "short", ahl: false, difficulty: 2, ref: "A3.1.7", paper: "2", commandTerm: "Outline", marks: 3,
        stem: L("Outline the evidence that human chromosome 2 was formed by the fusion of two chromosomes of an ancestor shared with other primates.", "ヒトの2番染色体が、他の霊長類と共有する祖先の二つの染色体の融合でできたという証拠を説明せよ (Outline)。", "概述 (Outline) 人類第 2 號染色體由與其他靈長類共同祖先的兩條染色體融合而成的證據。"),
        markscheme: [
          L("Humans have 46 chromosomes but chimpanzees/other apes have 48", "ヒトは46本だがチンパンジーなどの類人猿は48本", "人類有 46 條染色體，而黑猩猩／其他猿類有 48 條"),
          L("Banding pattern of human chromosome 2 matches two separate chimpanzee chromosomes joined end to end", "ヒト2番染色体の縞模様が、チンパンジーの二つの染色体を端どうしでつないだものと一致する", "人類第 2 號染色體的帶紋與黑猩猩兩條首尾相連的染色體吻合"),
          L("Telomere (chromosome-end) sequences are found in the middle of chromosome 2", "2番染色体の中央にテロメア（染色体末端）配列がある", "第 2 號染色體中央有端粒（染色體末端）序列"),
          L("A remnant of a second centromere is present", "二つ目の動原体の名残がある", "存在第二個著絲粒的殘餘")
        ],
        modelAnswer: L("Humans have 46 chromosomes, chimpanzees 48. The banding of human chromosome 2 matches two chimpanzee chromosomes end to end. It has telomere sequences in its middle and a remnant of a second centromere, which is what a fusion would leave behind.", "ヒトは46本、チンパンジーは48本。ヒト2番染色体の縞模様はチンパンジーの二つの染色体を端どうしでつないだものと一致する。中央にテロメア配列と二つ目の動原体の名残があり、融合の痕跡と考えられる。", "人類有 46 條染色體，黑猩猩有 48 條。人類第 2 號染色體的帶紋與黑猩猩兩條首尾相連的染色體吻合。它的中央有端粒序列和第二個著絲粒的殘餘，這正是融合會留下的痕跡。")
      },
      {
        id: "a3-1-q08", type: "short", ahl: false, difficulty: 1, ref: "A3.1.11", paper: "2", commandTerm: "Outline", marks: 2,
        stem: L("Outline one current use and one potential future use of whole genome sequencing.", "全ゲノム解読の現在の利用と将来の利用の可能性を一つずつ説明せよ (Outline)。", "概述 (Outline) 全基因組測序現時的一個用途和未來可能的一個用途。"),
        markscheme: [
          L("Current: research into evolutionary relationships between species by comparing genomes", "現在：ゲノムを比べて種間の進化的関係を研究する", "現時：比較基因組以研究物種之間的進化關係"),
          L("Future: personalized medicine, treatment chosen to suit a patient's own genome", "将来：患者自身のゲノムに合わせて治療を選ぶ個別化医療", "未來：個人化醫療，按病人自己的基因組選擇治療")
        ],
        modelAnswer: L("Now: comparing the genomes of different species to work out how closely related they are. In future: personalized medicine, where a patient's genome is used to choose the best drug or dose.", "現在：異なる種のゲノムを比べ、どれだけ近縁かを調べる。将来：患者のゲノムを使い、最適な薬や量を選ぶ個別化医療。", "現時：比較不同物種的基因組，找出牠們的親緣程度。未來：個人化醫療，用病人的基因組選擇最合適的藥物或劑量。")
      },
      {
        id: "a3-1-q09", type: "mcq", ahl: false, difficulty: 2, ref: "A3.1.10", paper: "1B",
        stem: L("The table gives approximate genome sizes (illustrative data). Which conclusion is best supported?", "表はおおよそのゲノムサイズを示す（例示データ）。最もよく支持される結論はどれか。", "下表列出概約的基因組大小（示例數據）。以下哪個結論最受數據支持？"),
        data: L(
          `<table><tr><th>Organism</th><th>Group</th><th>Genome size (Mbp)</th></tr><tr><td>Yeast</td><td>Fungus</td><td>12</td></tr><tr><td>Fruit fly</td><td>Insect</td><td>140</td></tr><tr><td>Human</td><td>Mammal</td><td>3 100</td></tr><tr><td>Wheat</td><td>Plant</td><td>16 000</td></tr><tr><td><em>Paris japonica</em></td><td>Plant</td><td>150 000</td></tr></table>`,
          `<table><tr><th>生物</th><th>分類群</th><th>ゲノムサイズ (Mbp)</th></tr><tr><td>酵母</td><td>菌類</td><td>12</td></tr><tr><td>ショウジョウバエ</td><td>昆虫</td><td>140</td></tr><tr><td>ヒト</td><td>哺乳類</td><td>3 100</td></tr><tr><td>コムギ</td><td>植物</td><td>16 000</td></tr><tr><td><em>Paris japonica</em>（キヌガサソウ）</td><td>植物</td><td>150 000</td></tr></table>`,
          `<table><tr><th>生物</th><th>類羣</th><th>基因組大小 (Mbp)</th></tr><tr><td>酵母</td><td>真菌</td><td>12</td></tr><tr><td>果蠅</td><td>昆蟲</td><td>140</td></tr><tr><td>人類</td><td>哺乳動物</td><td>3 100</td></tr><tr><td>小麥</td><td>植物</td><td>16 000</td></tr><tr><td><em>Paris japonica</em></td><td>植物</td><td>150 000</td></tr></table>`
        ),
        options: [L("Genome size increases with organism complexity", "ゲノムサイズは生物の複雑さとともに増える", "基因組大小隨生物的複雜程度增加"), L("Humans have the largest genome of all organisms", "ヒトはすべての生物の中で最大のゲノムをもつ", "人類擁有所有生物中最大的基因組"), L("There is no simple link between genome size and complexity", "ゲノムサイズと複雑さの間に単純な関係はない", "基因組大小與複雜程度之間沒有簡單的關係"), L("Plants always have larger genomes than animals", "植物のゲノムは常に動物より大きい", "植物的基因組永遠比動物大")],
        answer: 2,
        explanation: L("Humans are far more complex than the plants, yet they have a much smaller genome, so size does not track complexity. A is the tempting wrong answer because the first three rows rise, but the plants break the pattern. D overgeneralizes from only two plants.", "ヒトは植物よりはるかに複雑ですが、ゲノムはずっと小さいので、大きさは複雑さと対応しません。Aは最初の三行が増えていくため選びたくなりますが、植物がそのパターンを崩しています。Dは植物二種だけからの一般化しすぎです。", "人類遠比這些植物複雜，但基因組卻小得多，所以大小與複雜程度並不對應。A 具誘惑力，因為頭三行是遞增的，但植物打破了這規律。D 只憑兩種植物就過度概括。")
      },
      {
        id: "a3-1-q10", type: "short", ahl: false, difficulty: 3, ref: "A3.1.8", paper: "1B", commandTerm: "Deduce", marks: 4,
        stem: L("The table shows the number of base differences per 1000 bases when sequences from the same region of the genome are compared (illustrative data). (a) Calculate how many times greater the difference between a human and a chimpanzee is than the difference between two humans. (b) Deduce the pattern, and explain what it tells you about SNPs.", "表は、ゲノムの同じ領域の配列を比べたときの1000塩基あたりの塩基の違いの数を示す（例示データ）。(a) ヒトとチンパンジーの違いが、ヒトどうしの違いの何倍かを計算せよ (Calculate)。(b) パターンを推論し (Deduce)、SNP について何が分かるかを説明せよ。", "下表顯示比較基因組同一區域的序列時，每 1000 個鹼基的鹼基差異數目（示例數據）。(a) 計算 (Calculate) 人類與黑猩猩之間的差異是兩個人類之間差異的多少倍。(b) 推斷 (Deduce) 其中的規律，並解釋這說明了 SNP 的甚麼。"),
        data: L(
          `<table><tr><th>Comparison</th><th>Differences per 1000 bases</th></tr><tr><td>Human – human</td><td>1</td></tr><tr><td>Human – chimpanzee</td><td>12</td></tr><tr><td>Human – mouse</td><td>150</td></tr></table>`,
          `<table><tr><th>比較</th><th>1000塩基あたりの違い</th></tr><tr><td>ヒト – ヒト</td><td>1</td></tr><tr><td>ヒト – チンパンジー</td><td>12</td></tr><tr><td>ヒト – マウス</td><td>150</td></tr></table>`,
          `<table><tr><th>比較</th><th>每 1000 個鹼基的差異</th></tr><tr><td>人類 – 人類</td><td>1</td></tr><tr><td>人類 – 黑猩猩</td><td>12</td></tr><tr><td>人類 – 小鼠</td><td>150</td></tr></table>`
        ),
        markscheme: [
          L("(a) 12 ÷ 1 = 12 times (accept 12)", "(a) 12 ÷ 1 = 12倍 (12 を認める)", "(a) 12 ÷ 1 = 12 倍（接受 12）"),
          L("(b) Differences between species are much greater than differences within a species", "(b) 種間の違いは種内の違いよりはるかに大きい", "(b) 物種之間的差異遠大於物種之內的差異"),
          L("The more distantly related the species, the greater the number of differences (mouse > chimpanzee)", "遠い近縁関係の種ほど違いが多い（マウス > チンパンジー）", "親緣關係越遠，差異越多（小鼠 > 黑猩猩）"),
          L("Within a species most of the genome is shared; SNPs are the few single-base differences that give diversity within the species", "種内ではゲノムの大部分が共通で、SNP は種内に多様性を生む少数の一塩基の違いである", "同一物種內大部分基因組是共有的；SNP 是少數單一鹼基的差異，為物種內帶來多樣性")
        ],
        modelAnswer: L("(a) 12 times. (b) Differences within a species (1 per 1000) are far smaller than differences between species (12 and 150), and they rise with evolutionary distance. So members of a species share almost all their genome, and SNPs are the few single-base differences that account for variation within it.", "(a) 12倍。(b) 種内の違い（1/1000）は種間の違い（12と150）よりはるかに小さく、進化的な隔たりとともに増える。したがって同じ種の個体はゲノムのほとんどを共有し、SNP は種内の変異を生む少数の一塩基の違いである。", "(a) 12 倍。(b) 物種內的差異（每 1000 個有 1 個）遠小於物種之間的差異（12 和 150），並隨進化距離增加。因此同一物種的成員共有幾乎整個基因組，SNP 是造成種內變異的少數單一鹼基差異。")
      },
      {
        id: "a3-1-q11", type: "mcq", ahl: true, difficulty: 2, ref: "A3.1.14", paper: "1B",
        stem: L("Use the key. Which sequence of statements identifies the leech?", "検索表を使え。ヒル (leech) を同定する記述の順序はどれか。", "使用檢索表。哪一個陳述次序可以鑑定出水蛭 (leech)？"),
        data: L(
          `<table><tr><td>1a</td><td>Body inside a shell</td><td>go to 2</td></tr><tr><td>1b</td><td>Body not inside a shell</td><td>go to 3</td></tr><tr><td>2a</td><td>Shell in one coiled piece</td><td>Pond snail</td></tr><tr><td>2b</td><td>Shell in two hinged halves</td><td>Mussel</td></tr><tr><td>3a</td><td>Jointed legs present</td><td>go to 4</td></tr><tr><td>3b</td><td>No legs</td><td>Leech</td></tr><tr><td>4a</td><td>Ten legs</td><td>Crayfish</td></tr><tr><td>4b</td><td>Six legs</td><td>Water beetle</td></tr></table>`,
          `<table><tr><td>1a</td><td>体が殻の中にある</td><td>2へ</td></tr><tr><td>1b</td><td>体が殻の中にない</td><td>3へ</td></tr><tr><td>2a</td><td>殻が一つで巻いている</td><td>タニシ類（pond snail）</td></tr><tr><td>2b</td><td>殻が二枚でちょうつがい状</td><td>イガイ類（mussel）</td></tr><tr><td>3a</td><td>関節のある脚がある</td><td>4へ</td></tr><tr><td>3b</td><td>脚がない</td><td>ヒル（leech）</td></tr><tr><td>4a</td><td>脚が10本</td><td>ザリガニ（crayfish）</td></tr><tr><td>4b</td><td>脚が6本</td><td>ゲンゴロウ類（water beetle）</td></tr></table>`,
          `<table><tr><td>1a</td><td>身體在殼內</td><td>前往 2</td></tr><tr><td>1b</td><td>身體不在殼內</td><td>前往 3</td></tr><tr><td>2a</td><td>殼為一片、盤旋狀</td><td>池螺 (pond snail)</td></tr><tr><td>2b</td><td>殼為兩片、以鉸合連接</td><td>貽貝 (mussel)</td></tr><tr><td>3a</td><td>有分節的腳</td><td>前往 4</td></tr><tr><td>3b</td><td>沒有腳</td><td>水蛭 (leech)</td></tr><tr><td>4a</td><td>十隻腳</td><td>螯蝦 (crayfish)</td></tr><tr><td>4b</td><td>六隻腳</td><td>水甲蟲 (water beetle)</td></tr></table>`
        ),
        options: [L("1a, 2a", "1a、2a", "1a、2a"), L("1b, 3a, 4b", "1b、3a、4b", "1b、3a、4b"), L("1b, 3b", "1b、3b", "1b、3b"), L("1a, 3b", "1a、3b", "1a、3b")],
        answer: 2,
        explanation: L("The leech has no shell (1b → go to 3) and no legs (3b). Option D is impossible because 1a leads to 2, not 3. Option B ends at the water beetle because it needs legs.", "ヒルには殻がなく (1b → 3へ)、脚もありません (3b)。Dは1aが2へ進むため不可能です。Bは脚が必要なのでゲンゴロウ類に行き着きます。", "水蛭沒有殼 (1b → 前往 3)，也沒有腳 (3b)。D 不可能，因為 1a 通往 2 而不是 3。B 需要有腳，所以會得出水甲蟲。")
      },
      {
        id: "a3-1-q12", type: "short", ahl: false, difficulty: 3, ref: "A3.1.5", paper: "2", commandTerm: "Explain", marks: 3,
        stem: L("Explain why it can be difficult to decide whether two populations of a similar organism are different species.", "似た生物の二つの集団が別の種かどうかを決めるのが難しいことがあるのはなぜか説明せよ (Explain)。", "解釋 (Explain) 為何要判斷兩個相似生物的種羣是否屬於不同物種，有時會很困難。"),
        markscheme: [
          L("Speciation is usually gradual, not a single event", "種分化は通常、一度の出来事ではなく徐々に起こる", "物種形成通常是逐漸的，不是單一事件"),
          L("Populations that no longer interbreed slowly diverge / become more different in their traits", "交配しなくなった集団は少しずつ分岐し、形質がより違っていく", "不再交配的種羣慢慢分歧／性狀變得越來越不同"),
          L("So there is no clear point at which they become different species; the decision is arbitrary / populations in between may sometimes still interbreed", "したがって二つの種になる明確な時点はなく、判断は恣意的になる／途中の集団はまだ交配することがある", "因此沒有一個清楚的時間點使牠們成為不同物種；決定是武斷的／處於中間階段的種羣有時仍能交配")
        ],
        modelAnswer: L("Speciation is a gradual process in which separated populations slowly become more different. There is no single moment when they become two species, and populations part-way through may still sometimes interbreed. So where to draw the line is an arbitrary decision.", "種分化は徐々に進む過程で、分かれた集団は少しずつ違っていく。二つの種になる決まった瞬間はなく、途中の集団はまだ交配することもある。したがって線をどこに引くかは恣意的な判断になる。", "物種形成是一個漸進的過程，分隔的種羣慢慢變得越來越不同。沒有一個確定的時刻使牠們成為兩個物種，而處於中間階段的種羣有時仍可交配。因此在哪裏劃界是一個武斷的決定。")
      },
      {
        id: "a3-1-q13", type: "mcq", ahl: true, difficulty: 3, ref: "A3.1.13", paper: "1A",
        stem: L("Species X (2n = 24) and species Y (2n = 26) are closely related and produce a hybrid with 25 chromosomes in its body cells. Why is the hybrid most likely sterile?", "種X (2n = 24) と種Y (2n = 26) は近縁で、体細胞に25本の染色体をもつ雑種を作る。この雑種が不妊である可能性が最も高い理由はどれか。", "物種 X (2n = 24) 和物種 Y (2n = 26) 是近緣物種，產生的雜種體細胞有 25 條染色體。這雜種最可能不育的原因是甚麼？"),
        options: [L("Cells with an odd number of chromosomes cannot divide by mitosis, so the hybrid cannot grow", "染色体数が奇数の細胞は体細胞分裂できないので、雑種は成長できない", "染色體數目是奇數的細胞不能進行有絲分裂，所以雜種不能生長"), L("Chromosomes cannot form matching pairs in meiosis, so normal gametes are not produced", "減数分裂で染色体が対応する対を作れず、正常な配偶子ができない", "減數分裂時染色體不能形成配對，所以不能產生正常的配子"), L("The hybrid has too many chromosomes to fit in the nucleus", "雑種は染色体が多すぎて核に収まらない", "雜種的染色體太多，核容納不下"), L("The hybrid inherits genes from only one parent", "雑種は片方の親の遺伝子だけを受け継ぐ", "雜種只從一個親本遺傳基因")],
        answer: 1,
        explanation: L("Meiosis needs homologous chromosomes to pair before they separate. The unpaired chromosomes in the hybrid disrupt this, so viable gametes are not made. A is tempting but wrong: mitosis does not need pairing, so the hybrid can grow (a mule is a healthy adult). C is false (25 is fewer than many cells hold) and D is false (it gets one set from each parent).", "減数分裂では相同染色体が対になってから分かれる必要があります。雑種では対にならない染色体がこれを妨げ、正常な配偶子ができません。Aは紛らわしいが誤りで、体細胞分裂には対合が不要なので雑種は成長できます（ラバは健康な成体です）。Cは誤り（25本は多すぎない）、Dも誤り（両親から一組ずつ受け取る）です。", "減數分裂需要同源染色體先配對才分開。雜種中未配對的染色體會破壞這過程，所以不能產生有活力的配子。A 有誘惑力但錯誤：有絲分裂不需要配對，所以雜種可以生長（騾是健康的成體）。C 錯（25 條並不算多），D 錯（雜種從雙親各得一套染色體）。")
      },
      {
        id: "a3-1-q14", type: "mcq", ahl: true, difficulty: 2, ref: "A3.1.12", paper: "1A",
        stem: L("Which statement explains why the biological species concept is hard to apply to bacteria?", "生物学的種概念が細菌に当てはめにくい理由を説明しているのはどれか。", "以下哪項說明了為何生物學物種概念難以應用於細菌？"),
        options: [L("Bacteria are too small to be seen", "細菌は小さすぎて見えない", "細菌太小，看不見"), L("Bacteria reproduce asexually and can pass genes sideways to other species", "細菌は無性生殖をし、他の種に遺伝子を横向きに渡せる", "細菌進行無性生殖，並可把基因橫向傳給其他物種"), L("Bacteria have no DNA", "細菌は DNA をもたない", "細菌沒有 DNA"), L("Bacteria all belong to a single species", "細菌はすべて一つの種に属する", "所有細菌都屬於同一物種")],
        answer: 1,
        explanation: L("The concept depends on sexual breeding within a gene pool. Bacteria divide asexually and horizontal gene transfer moves genes between groups. A is not the reason (the concept does not depend on size), C is false, D is false.", "この概念は遺伝子プールの中での有性生殖に依存します。細菌は無性的に分裂し、遺伝子の水平伝播で集団間に遺伝子が移ります。Aは理由ではなく（大きさは関係しない）、CとDは誤りです。", "這個概念依賴基因庫內的有性交配。細菌以無性方式分裂，而水平基因轉移會令基因在不同類羣之間移動。A 不是原因（這概念與大小無關），C、D 皆錯。")
      },
      {
        id: "a3-1-q15", type: "order", ahl: true, difficulty: 1, ref: "A3.1.15", paper: "1A",
        stem: L("Put the steps of surveying a habitat with environmental DNA in order.", "環境 DNA で生息地を調査する手順を正しい順に並べよ。", "把利用環境 DNA 調查生境的步驟排成正確次序。"),
        items: [L("Collect a water or soil sample from the habitat", "生息地から水や土の試料を採る", "從生境採集水或泥土樣本"), L("Extract the DNA from the sample", "試料から DNA を取り出す", "從樣本抽取 DNA"), L("Copy and read the barcode sequences", "バーコード配列を増やして読み取る", "複製並讀取條碼序列"), L("Compare the sequences with a reference database to name the species present", "配列を参照データベースと比べ、いる種の名前を特定する", "把序列與參考資料庫比對，找出存在的物種名稱")],
        explanation: L("The sample must be obtained first; DNA is extracted before the barcode regions can be read; identification comes last by matching to known barcodes.", "まず試料が必要で、DNA を取り出してからバーコード領域を読み、最後に既知のバーコードと照合して同定します。", "先要有樣本；先抽取 DNA 才能讀取條碼區域；最後與已知條碼比對以鑑定物種。")
      },
      {
        id: "a3-1-q16", type: "short", ahl: true, difficulty: 2, ref: "A3.1.15", paper: "2", commandTerm: "Explain", marks: 3,
        stem: L("Explain how eDNA and barcodes can be used to investigate the biodiversity of a pond.", "環境 DNA とバーコードを使って池の生物多様性を調べる方法を説明せよ (Explain)。", "解釋 (Explain) 如何利用環境 DNA 和條碼調查池塘的生物多樣性。"),
        markscheme: [
          L("Water sample contains DNA shed by organisms (skin cells, faeces, mucus)", "水の試料には生物が出した DNA（皮膚の細胞、ふん、粘液）が含まれる", "水樣本含有生物釋出的 DNA（皮膚細胞、糞便、黏液）"),
          L("Barcode sequences are read and compared with a database of known species barcodes", "バーコード配列を読み取り、既知の種のバーコードのデータベースと比べる", "讀取條碼序列，並與已知物種條碼的資料庫比對"),
          L("Each species has a different barcode, so the species present are identified without seeing or catching them (rapid)", "種ごとにバーコードが異なるので、見たり捕まえたりせずに、いる種を速やかに同定できる", "每個物種的條碼不同，所以無須看見或捕捉就能快速鑑定存在的物種")
        ],
        modelAnswer: L("A water sample contains DNA shed by the organisms living in the pond. The barcode sequences in it are read and compared with a database of barcodes from known species. Because each species has a different barcode, the species present are identified quickly without seeing or catching them.", "水の試料には池の生物が出した DNA が含まれる。その中のバーコード配列を読み取り、既知の種のバーコードのデータベースと比べる。種ごとにバーコードが異なるので、見たり捕まえたりせず、いる種を速やかに同定できる。", "水樣本含有池塘生物釋出的 DNA。讀取其中的條碼序列，並與已知物種條碼的資料庫比對。由於每個物種的條碼不同，無須看見或捕捉就能快速鑑定存在的物種。")
      },
      {
        id: "a3-1-q17", type: "short", ahl: true, difficulty: 3, ref: "A3.1.14", paper: "2", commandTerm: "Construct", marks: 4,
        stem: L("Construct a dichotomous key to identify the four animals described in the table.", "表に示した四種類の動物を同定する二分検索表を作れ (Construct)。", "建構 (Construct) 一個二歧檢索表，以鑑定表中所描述的四種動物。"),
        data: L(
          `<table><tr><th>Animal</th><th>Legs</th><th>Wings</th></tr><tr><td>P</td><td>6</td><td>present</td></tr><tr><td>Q</td><td>6</td><td>absent</td></tr><tr><td>R</td><td>8</td><td>absent</td></tr><tr><td>S</td><td>0</td><td>absent</td></tr></table>`,
          `<table><tr><th>動物</th><th>脚</th><th>翅</th></tr><tr><td>P</td><td>6</td><td>あり</td></tr><tr><td>Q</td><td>6</td><td>なし</td></tr><tr><td>R</td><td>8</td><td>なし</td></tr><tr><td>S</td><td>0</td><td>なし</td></tr></table>`,
          `<table><tr><th>動物</th><th>腳</th><th>翅</th></tr><tr><td>P</td><td>6</td><td>有</td></tr><tr><td>Q</td><td>6</td><td>無</td></tr><tr><td>R</td><td>8</td><td>無</td></tr><tr><td>S</td><td>0</td><td>無</td></tr></table>`
        ),
        markscheme: [
          L("Uses paired, contrasting statements (1a/1b etc.) each with two choices", "対照的な二つ一組の記述（1a/1b など）で、各組に二つの選択肢がある", "使用成對、對比的描述（1a/1b 等），每對有兩個選擇"),
          L("Statements use observable features from the table (leg number, wings)", "記述が表にある観察可能な特徴（脚の数、翅）を使っている", "描述使用表中可觀察的特徵（腳的數目、翅）"),
          L("Three pairs of statements for four animals (N − 1), each choice leading to another pair or a name", "四種に対して三組の記述（N − 1）で、各選択肢が別の組か名前に続く", "四種動物用三對描述 (N − 1)，每個選擇通往另一對或一個名稱"),
          L("Every animal P, Q, R, S reaches a different end point (e.g. 1a legs → 2; 1b no legs → S; 2a six legs → 3; 2b eight legs → R; 3a wings → P; 3b no wings → Q)", "P、Q、R、S のすべてが別々の終点に至る（例：1a 脚あり→2、1b 脚なし→S、2a 脚6本→3、2b 脚8本→R、3a 翅あり→P、3b 翅なし→Q）", "P、Q、R、S 都到達不同的終點（例：1a 有腳→2；1b 無腳→S；2a 六隻腳→3；2b 八隻腳→R；3a 有翅→P；3b 無翅→Q）")
        ],
        modelAnswer: L("1a Legs present – go to 2. 1b No legs – S. 2a Six legs – go to 3. 2b Eight legs – R. 3a Wings present – P. 3b Wings absent – Q.", "1a 脚がある → 2へ。1b 脚がない → S。2a 脚が6本 → 3へ。2b 脚が8本 → R。3a 翅がある → P。3b 翅がない → Q。", "1a 有腳 – 前往 2。1b 無腳 – S。2a 六隻腳 – 前往 3。2b 八隻腳 – R。3a 有翅 – P。3b 無翅 – Q。")
      }
    ]
  });
})();
