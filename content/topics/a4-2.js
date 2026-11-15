/* A4.2 Conservation of biodiversity — SL + AHL (no AHL content) */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  /* Illustrative line graph of forest cover (% of original area) */
  function forestSvg(xl, yl, alt) {
    const pts = [[1980, 100], [1990, 88], [2000, 74], [2010, 61], [2020, 50]];
    const X = (yr) => 50 + ((yr - 1980) / 40) * 250;
    const Y = (v) => 170 - (v / 100) * 140;
    let g = `<line x1="50" y1="30" x2="50" y2="170" stroke="var(--ink,#111)" stroke-width="1.5"/><line x1="50" y1="170" x2="300" y2="170" stroke="var(--ink,#111)" stroke-width="1.5"/>`;
    [0, 25, 50, 75, 100].forEach((v) => {
      g += `<line x1="46" y1="${Y(v)}" x2="300" y2="${Y(v)}" stroke="var(--line,#ccc)" stroke-width="0.7"/><text x="42" y="${Y(v) + 4}" font-size="11" text-anchor="end" fill="var(--ink,#111)">${v}</text>`;
    });
    pts.forEach((p) => { g += `<text x="${X(p[0])}" y="186" font-size="11" text-anchor="middle" fill="var(--ink,#111)">${p[0]}</text>`; });
    g += `<polyline fill="none" stroke="var(--accent,#2547c7)" stroke-width="2.5" points="${pts.map((p) => X(p[0]) + "," + Y(p[1])).join(" ")}"/>`;
    pts.forEach((p) => { g += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3.5" fill="var(--accent,#2547c7)"/>`; });
    g += `<text x="175" y="205" font-size="12" text-anchor="middle" fill="var(--ink,#111)">${xl}</text><text x="12" y="100" font-size="12" text-anchor="middle" fill="var(--ink,#111)" transform="rotate(-90 12 100)">${yl}</text>`;
    return `<figure><svg viewBox="0 0 320 212" width="100%" style="max-width:420px" role="img" aria-label="${alt}">${g}</svg></figure>`;
  }

  IB.registerTopic({
    id: "A4.2",
    slug: "a4-2",
    theme: "A",
    level: 4,
    ahlOnly: false,
    title: L("Conservation of biodiversity", "生物多様性の保全", "生物多樣性的保育"),
    guidingQuestions: [
      L("What factors are causing the sixth mass extinction of species?", "種の第六の大量絶滅を引き起こしている要因は何か。", "是哪些因素造成第六次物種大規模滅絕？"),
      L("How can conservationists minimize the loss of biodiversity?", "保全に携わる人々は、生物多様性の損失をどのように最小限に抑えられるか。", "保育人士如何把生物多樣性的損失減到最少？")
    ],
    summary: L(
      "Biodiversity is the variety of life at three levels: ecosystems, species and genes. Human activities are causing a biodiversity crisis, often called the sixth mass extinction, and the evidence comes from repeated surveys by scientists and citizen scientists. No single conservation method is enough, so several approaches are used together, and programmes such as EDGE help to decide which species to prioritise.",
      "生物多様性は、生態系、種、遺伝子の三つのレベルにおける生物の多様さです。人間の活動が生物多様性の危機、いわゆる第六の大量絶滅を引き起こしており、その証拠は科学者や市民科学者による繰り返しの調査から得られます。単独で十分な保全方法はないため、複数のアプローチを組み合わせ、EDGE のような計画がどの種を優先するかを決める助けとなります。",
      "生物多樣性是生態系統、物種和基因三個層次上生命的多樣程度。人類活動正造成生物多樣性危機，常被稱為第六次大規模滅絕，證據來自科學家和公民科學家重複進行的調查。沒有單一的保育方法足夠，所以需要同時使用多種方法，而 EDGE 等計劃有助決定優先保育哪些物種。"
    ),
    sections: [
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.1", ahl: false,
        deeper: {"en":"<p><strong>Same species count, different diversity (sample data).</strong> Two woodland plots each contain 100 trees from four species.</p>\n<table><tr><th></th><th>Species 1</th><th>Species 2</th><th>Species 3</th><th>Species 4</th><th>Richness</th></tr>\n<tr><td>Plot X</td><td>25</td><td>25</td><td>25</td><td>25</td><td>4</td></tr>\n<tr><td>Plot Y</td><td>94</td><td>2</td><td>2</td><td>2</td><td>4</td></tr></table>\n<p>Both plots have the same <strong>species richness</strong> (4). Plot X has high <strong>evenness</strong>; Plot Y is dominated by one species, so evenness is low. A community like Plot Y is fragile: if the one dominant species is lost, almost the whole community is lost.</p>\n<table><tr><th>Level</th><th>What is lost if it falls</th><th>Why it matters</th></tr>\n<tr><td>Ecosystem</td><td>Whole habitats and communities</td><td>Losing a wetland removes the homes of many species at once</td></tr>\n<tr><td>Species</td><td>Species and their interactions</td><td>Food webs lose links</td></tr>\n<tr><td>Genetic</td><td>Alleles within a species</td><td>A population with many alleles is more likely to contain individuals that survive a new disease or a changed environment</td></tr></table>\n<p><strong>Mark-scheme language.</strong> \"Richness = number of different species; evenness = how close the numbers of each species are.\" Do not write that biodiversity is \"just the number of species\". Link: genetic variation is the raw material for natural selection (A4.1).</p>","ja":"<p><strong>種の数は同じでも多様性は違う（サンプルデータ）。</strong>二つの森林区画に、それぞれ4種の木が合計100本あります。</p>\n<table><tr><th></th><th>種1</th><th>種2</th><th>種3</th><th>種4</th><th>豊富さ</th></tr>\n<tr><td>区画X</td><td>25</td><td>25</td><td>25</td><td>25</td><td>4</td></tr>\n<tr><td>区画Y</td><td>94</td><td>2</td><td>2</td><td>2</td><td>4</td></tr></table>\n<p>どちらも<strong>種の豊富さ (species richness)</strong> は同じ（4）です。区画Xは<strong>均等度 (evenness)</strong> が高く、区画Yは一つの種に支配されているため均等度が低くなります。区画Yのような群集はもろく、優占種を一つ失うと群集のほとんどを失います。</p>\n<table><tr><th>レベル</th><th>失われるもの</th><th>なぜ重要か</th></tr>\n<tr><td>生態系</td><td>生息地や群集全体</td><td>湿地を失うと多くの種の住みかが一度に失われる</td></tr>\n<tr><td>種</td><td>種とその相互作用</td><td>食物網のつながりが減る</td></tr>\n<tr><td>遺伝的</td><td>種の中の対立遺伝子</td><td>対立遺伝子が多い個体群は、新しい病気や環境の変化を生き延びる個体を含む可能性が高い</td></tr></table>\n<p><strong>採点のことば。</strong>「豊富さ＝異なる種の数、均等度＝各種の個体数がどれだけ近いか」。生物多様性を「種の数だけ」と書いてはいけません。つながり：遺伝的変異は自然選択の素材です (A4.1)。</p>","zh":"<p><strong>物種數目相同，多樣性卻不同（樣本數據）。</strong>兩個林地樣區各有 100 棵樹，屬四個物種。</p>\n<table><tr><th></th><th>物種 1</th><th>物種 2</th><th>物種 3</th><th>物種 4</th><th>豐富度</th></tr>\n<tr><td>樣區 X</td><td>25</td><td>25</td><td>25</td><td>25</td><td>4</td></tr>\n<tr><td>樣區 Y</td><td>94</td><td>2</td><td>2</td><td>2</td><td>4</td></tr></table>\n<p>兩個樣區的<strong>物種豐富度 (species richness)</strong> 相同（4）。樣區 X 的<strong>均勻度 (evenness)</strong> 高；樣區 Y 由單一物種主導，均勻度低。像樣區 Y 這樣的羣落很脆弱：只要失去那個優勢物種，幾乎整個羣落都會消失。</p>\n<table><tr><th>層次</th><th>下降時失去甚麼</th><th>為何重要</th></tr>\n<tr><td>生態系統</td><td>整個生境和羣落</td><td>失去一個濕地，就同時失去許多物種的家園</td></tr>\n<tr><td>物種</td><td>物種及其相互作用</td><td>食物網失去連結</td></tr>\n<tr><td>遺傳</td><td>物種內的等位基因</td><td>等位基因多的種羣，較可能有個體能在新疾病或環境改變下存活</td></tr></table>\n<p><strong>評分用語。</strong>「豐富度 = 不同物種的數目；均勻度 = 各物種數量有多接近」。不要寫生物多樣性「只是物種數目」。連繫：遺傳變異是自然選擇的原料 (A4.1)。</p>"},
        heading: L("Biodiversity: variety at three levels", "生物多様性：三つのレベルの多様さ (biodiversity)", "生物多樣性：三個層次的多樣性 (biodiversity)"),
        body: L(
          `<p><strong>Biodiversity</strong> is <strong>the variety of life in all its forms, levels and combinations</strong>. You must include three levels:</p>
<ul>
<li><strong>Ecosystem diversity</strong>: the variety of ecosystems (for example forests, wetlands, coral reefs and deserts) and the habitats and communities in them.</li>
<li><strong>Species diversity</strong>: the variety of species in an area. It has two parts: <strong>species richness</strong> (how many different species there are) and <strong>evenness</strong> (how similar the numbers of each species are).</li>
<li><strong>Genetic diversity</strong>: the variety of alleles/genes within a species. A population with high genetic diversity is better able to adapt to change.</li>
</ul>`,
          `<p><strong>生物多様性 (biodiversity)</strong> とは、<strong>あらゆる形、レベル、組み合わせにおける生命の多様さ</strong>です。次の三つのレベルを含める必要があります。</p>
<ul>
<li><strong>生態系の多様性 (ecosystem diversity)</strong>：生態系（森林、湿地、サンゴ礁、砂漠など）と、その中の生息地や群集の多様さ。</li>
<li><strong>種の多様性 (species diversity)</strong>：ある地域にいる種の多様さ。二つの要素があります。<strong>種の豊富さ (species richness)</strong>（異なる種がいくつあるか）と<strong>均等度 (evenness)</strong>（各種の個体数がどれだけ似ているか）。</li>
<li><strong>遺伝的多様性 (genetic diversity)</strong>：一つの種の中にある対立遺伝子／遺伝子の多様さ。遺伝的多様性の高い個体群は、変化により適応しやすくなります。</li>
</ul>`,
          `<p><strong>生物多樣性 (biodiversity)</strong> 是<strong>生命在所有形式、層次和組合上的多樣程度</strong>。你必須包括三個層次：</p>
<ul>
<li><strong>生態系統多樣性 (ecosystem diversity)</strong>：生態系統（例如森林、濕地、珊瑚礁和沙漠）以及其中生境和羣落的多樣程度。</li>
<li><strong>物種多樣性 (species diversity)</strong>：一個地區內物種的多樣程度。它有兩部分：<strong>物種豐富度 (species richness)</strong>（有多少個不同的物種）和<strong>均勻度 (evenness)</strong>（各物種的數量有多接近）。</li>
<li><strong>遺傳多樣性 (genetic diversity)</strong>：一個物種內等位基因／基因的多樣程度。遺傳多樣性高的種羣較能適應變化。</li>
</ul>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.2", ahl: false,
        deeper: {"en":"<p><strong>Why the true total is unknown.</strong> Many species are small, live in places that are hard to reach (deep sea, forest canopy, soil) or look almost identical to a close relative, so they are missed. Tools such as DNA barcoding and eDNA (A3.1) now reveal species that look alike but are genetically distinct.</p>\n<p><strong>Splitters and lumpers, step by step (sample case).</strong> A scientist finds ten populations of beetles with small differences in colour and size.</p>\n<ul>\n<li>A <strong>splitter</strong> treats each pattern of difference as enough to name a species: perhaps 5 species.</li>\n<li>A <strong>lumper</strong> treats the differences as normal variation inside a species: perhaps 2 species.</li>\n</ul>\n<p>The beetles have not changed. Only the decision about where to draw the lines has. So a region's \"species count\" can rise or fall just because of reclassification, which matters when a species must be named before it can be protected.</p>\n<p><strong>How to read the fossil statement.</strong> Fossil evidence suggests more species are alive today than at any past time. The fossil record is incomplete (soft-bodied organisms rarely fossilise), so past totals are estimates. This does <em>not</em> mean the crisis is not real: it says nothing about the <em>rate</em> at which species are being lost now.</p>\n<p><strong>Mark-scheme language.</strong> \"Classification is pattern recognition\", \"same observations, different groupings\", \"splitters recognise more species than lumpers\".</p>","ja":"<p><strong>真の総数が分からない理由。</strong>多くの種は小さく、到達しにくい場所（深海、森林の樹冠、土壌）にすむか、近縁種とほとんど同じ見た目のため、見落とされます。DNAバーコード (DNA barcoding) や環境DNA (eDNA) (A3.1) などの技術により、見た目は似ていても遺伝的に異なる種が見つかるようになりました。</p>\n<p><strong>分割派と統合派（段階別、例）。</strong>ある科学者が、色や大きさがわずかに違う甲虫の10個体群を見つけたとします。</p>\n<ul>\n<li><strong>分割派 (splitter)</strong>は、違いのパターンごとに種として名前をつけます。たとえば5種。</li>\n<li><strong>統合派 (lumper)</strong>は、違いを種内の通常の変異とみなします。たとえば2種。</li>\n</ul>\n<p>甲虫は何も変わっていません。変わったのは、線をどこに引くかという判断だけです。そのため、ある地域の「種数」は再分類だけで増えたり減ったりします。種は名前がついて初めて保護できるので、これは重要です。</p>\n<p><strong>化石に関する記述の読み方。</strong>化石の証拠は、現在の種の数が過去のどの時代よりも多いことを示唆します。化石記録は不完全（体の柔らかい生物は化石になりにくい）なので、過去の総数は推定です。これは危機が現実でないという意味では<em>ありません</em>。現在の種が失われる<em>速さ</em>については何も述べていないからです。</p>\n<p><strong>採点のことば。</strong>「分類はパターン認識」「同じ観察でも分け方が違う」「分割派は統合派より多くの種を認める」。</p>","zh":"<p><strong>為何真正的總數不明。</strong>許多物種體形細小、住在難以到達的地方（深海、森林樹冠、土壤），或與近親幾乎一模一樣，因此被遺漏。DNA 條碼 (DNA barcoding) 和環境 DNA (eDNA) (A3.1) 等工具，現在能找出外形相似但遺傳上不同的物種。</p>\n<p><strong>細分派與合併派，逐步說明（示例）。</strong>一位科學家發現十個甲蟲種羣，顏色和大小有細微差異。</p>\n<ul>\n<li><strong>細分派 (splitter)</strong>認為每種差異模式已足以命名為一個物種：可能是 5 個物種。</li>\n<li><strong>合併派 (lumper)</strong>把差異視為物種內的正常變異：可能是 2 個物種。</li>\n</ul>\n<p>甲蟲並沒有改變，改變的只是在哪裏劃界線的決定。所以一個地區的「物種數目」可以只因重新分類而上升或下降。物種要先有名字才能受保護，所以這很重要。</p>\n<p><strong>如何理解化石的陳述。</strong>化石證據顯示現今的物種比過去任何時候都多。化石記錄並不完整（軟體生物很少形成化石），所以過去的總數只是估計。這<em>並不</em>表示危機不真實：它沒有說明現在物種消失的<em>速度</em>。</p>\n<p><strong>評分用語。</strong>「分類是規律識別」、「相同的觀察，不同的分類」、「細分派認出的物種比合併派多」。</p>"},
        heading: L("How many species? Now and in the past", "種の数：現在と過去の比較", "物種數目：現在與過去的比較"),
        body: L(
          `<p><strong>Millions of species</strong> have been discovered, named and described, but there are <strong>many more species still to be discovered</strong>, especially small organisms, insects and species in the deep sea and tropical forests. Nobody knows the exact total.</p>
<p>Evidence from <strong>fossils</strong> suggests that <strong>there are currently more species alive on Earth today than at any time in the past</strong>. So biodiversity is very high now, even though many species are going extinct (see below).</p>
<div class="note"><strong>Nature of science.</strong> Classification is an example of <strong>pattern recognition</strong>, but the same observations can be classified in different ways. For example, <strong>"splitters"</strong> recognize more species in a taxonomic group (they split groups into many species) than <strong>"lumpers"</strong> (who lump similar forms together into fewer species). So counts of species depend partly on the choices of the scientists who classify.</div>`,
          `<p><strong>数百万種</strong>が発見され、命名され、記載されてきましたが、<strong>まだ発見されていない種はさらに多く</strong>あります。特に小さな生物、昆虫、深海や熱帯林の種です。正確な総数は誰にも分かりません。</p>
<p><strong>化石</strong>からの証拠によると、<strong>現在地球上に生きている種の数は、過去のどの時代よりも多い</strong>と考えられます。多くの種が絶滅しつつあっても（後述）、現在の生物多様性は非常に高いのです。</p>
<div class="note"><strong>科学の本質。</strong>分類は<strong>パターン認識</strong>の一例ですが、同じ観察でも異なる方法で分類できます。たとえば、<strong>「分割派 (splitters)」</strong>は、分類群の中でより多くの種を認めます（グループを多くの種に分ける）が、<strong>「統合派 (lumpers)」</strong>は似た形態をまとめて、より少ない種にします。そのため、種の数は、分類する科学者の選択にも一部左右されます。</div>`,
          `<p>已有<strong>數百萬個物種</strong>被發現、命名和描述，但<strong>還有更多物種有待發現</strong>，特別是細小生物、昆蟲，以及深海和熱帶森林的物種。沒有人知道確切的總數。</p>
<p><strong>化石</strong>證據顯示，<strong>現今地球上存活的物種數目比過去任何時候都多</strong>。所以儘管許多物種正在滅絕（見下文），現時的生物多樣性仍然很高。</p>
<div class="note"><strong>科學本質。</strong>分類是<strong>規律識別</strong>的例子，但同一組觀察可以用不同方法分類。例如，<strong>「細分派 (splitters)」</strong>在一個分類羣中認出較多的物種（把類羣分成許多物種），而<strong>「合併派 (lumpers)」</strong>則把相似的形態合併，物種較少。所以物種的數目部分取決於進行分類的科學家的選擇。</div>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.3", ahl: false,
        deeper: {"en":"<p><strong>Organising your case studies.</strong> For each one, be ready to give the same four facts.</p>\n<table><tr><th></th><th>North Island giant moa</th><th>Caribbean monk seal</th></tr>\n<tr><td>Type of loss</td><td>Terrestrial megafauna (large land animal)</td><td>Marine species</td></tr>\n<tr><td>Direct causes</td><td>Hunting for meat; eggs taken; burning and clearing of habitat</td><td>Hunting for oil, meat and skins; killed by fishers; disturbed at breeding beaches</td></tr>\n<tr><td>Why vulnerable</td><td>Large, flightless, reproduced slowly</td><td>Bred on beaches that people could reach; few breeding sites left</td></tr></table>\n<p><strong>Why slow breeding matters (illustrative numbers).</strong> A population adds new young each year, and a species survives only if deaths from all causes are balanced by births. Suppose 1000 animals produce 100 young per year. If hunters kill 150 per year, the population falls by 50 every year even before any other cause of death is counted. Species that breed slowly cannot replace losses quickly.</p>\n<p><strong>Direct and indirect causes.</strong> Hunting is <em>direct</em>. Demand for oil, meat or skins, trade and population growth are <em>indirect</em>, because they drive the hunting.</p>\n<p><strong>Your own case study.</strong> Give: the species, <em>when</em> and <em>where</em> it was lost, the main causes, and one piece of evidence (for example the last confirmed sighting or a failed survey).</p>\n<p><strong>Mark-scheme language.</strong> One named cause per mark, linked to the named species: \"hunted for meat\", \"habitat cleared by burning\". Vague answers such as \"humans killed them\" do not score.</p>","ja":"<p><strong>事例研究の整理のしかた。</strong>どの事例も、同じ4点を答えられるようにしておきます。</p>\n<table><tr><th></th><th>ニュージーランド北島のジャイアントモア</th><th>カリブモンクアザラシ</th></tr>\n<tr><td>消失の型</td><td>陸上の大型動物 (megafauna)</td><td>海洋生物</td></tr>\n<tr><td>直接の原因</td><td>肉のための狩猟、卵の採取、焼き払いと開墾による生息地の破壊</td><td>油・肉・皮のための狩猟、漁師による殺害、繁殖する海岸での妨害</td></tr>\n<tr><td>絶滅しやすかった理由</td><td>大型で飛べず、繁殖が遅い</td><td>人間が近づける海岸で繁殖し、繁殖地が減った</td></tr></table>\n<p><strong>繁殖が遅いと問題になる理由（例示の数）。</strong>個体群は毎年新しい子を加え、あらゆる原因による死亡が出生で釣り合っているときだけ種は存続します。1000頭が毎年100頭の子を産むとします。狩猟で毎年150頭が殺されると、他の死亡原因を数える前でも、個体群は毎年50頭ずつ減ります。繁殖が遅い種は、失われた分をすぐに補えません。</p>\n<p><strong>直接の原因と間接の原因。</strong>狩猟は<em>直接</em>の原因です。油・肉・皮の需要、貿易、人口増加は狩猟を促すので<em>間接</em>の原因です。</p>\n<p><strong>身近な地域の事例。</strong>種名、<em>いつ</em><em>どこで</em>失われたか、主な原因、証拠一つ（最後の確実な目撃や、見つからなかった調査など）を挙げます。</p>\n<p><strong>採点のことば。</strong>1点につき、その種に結びつけた原因を一つ：「肉のために狩られた」「焼き払いで生息地が開墾された」。「人間が殺した」のようなあいまいな答えは得点になりません。</p>","zh":"<p><strong>整理你的個案研究。</strong>每個個案都要準備好以下相同的四項資料。</p>\n<table><tr><th></th><th>北島巨型恐鳥</th><th>加勒比僧海豹</th></tr>\n<tr><td>消失類型</td><td>陸地大型動物 (megafauna)</td><td>海洋物種</td></tr>\n<tr><td>直接原因</td><td>為取肉而獵殺；取走蛋；焚燒和清除生境</td><td>為油脂、肉和皮而獵殺；被漁民殺死；繁殖海灘受騷擾</td></tr>\n<tr><td>為何易受影響</td><td>體形大、不能飛、繁殖緩慢</td><td>在人類可到達的海灘繁殖；繁殖地減少</td></tr></table>\n<p><strong>為何繁殖緩慢很重要（示例數字）。</strong>種羣每年增加新個體，只有各種原因造成的死亡由出生數抵消，物種才能存續。假設 1000 隻動物每年生 100 隻幼體。若獵人每年殺死 150 隻，在計算其他死因之前，種羣每年已減少 50 隻。繁殖緩慢的物種無法迅速補回損失。</p>\n<p><strong>直接與間接原因。</strong>狩獵是<em>直接</em>原因。對油脂、肉或皮的需求、貿易和人口增長推動了狩獵，所以是<em>間接</em>原因。</p>\n<p><strong>你自己的個案。</strong>寫出：物種、<em>何時</em>和<em>何地</em>消失、主要原因，以及一項證據（例如最後確認的目擊記錄或一次找不到的調查）。</p>\n<p><strong>評分用語。</strong>每分對應一個與該物種相連的具體原因：「為取肉而被獵殺」、「生境被焚燒清除」。「人類殺死了牠們」這類含糊答案不得分。</p>"},
        heading: L("Causes of human-driven (anthropogenic) species extinction", "人間活動による種の絶滅の原因 (anthropogenic extinction)", "人類活動導致物種滅絕的原因 (anthropogenic extinction)"),
        body: L(
          `<p>"Anthropogenic" means caused by humans. We are in the <strong>sixth mass extinction</strong>, a period when species are going extinct much faster than normal because of human activity. (Five earlier mass extinctions had natural causes; you study the current one.) The guide asks for <strong>three or more brief case studies</strong>:</p>
<p><strong>1. North Island giant moa (<em>Dinornis novaezealandiae</em>), a loss of terrestrial megafauna.</strong> Moas were huge flightless birds of New Zealand. After people arrived (around the 13th century), moas were <strong>hunted for meat</strong> and their eggs were taken. Burning and clearing of forest and scrub also destroyed their <strong>habitat</strong>. Moas, which reproduced slowly, were extinct within a century or two.</p>
<p><strong>2. Caribbean monk seal (<em>Neomonachus tropicalis</em>), a loss of a marine species.</strong> The seals were <strong>hunted</strong> for their oil, meat and skins, and fishers killed them as competitors for fish. They were also disturbed on the beaches where they breed, and fewer breeding sites were left. The last confirmed sighting was in 1952, and the species was declared extinct in 2008.</p>
<p><strong>3. One species from an area you know.</strong> Choose a species that has gone extinct locally or nationally, and summarise when it was lost and the causes. Ideas (you are free to choose another): the Japanese wolf in Japan (persecution and disease in the 19th and early 20th centuries); the baiji, or Yangtze river dolphin, in China (accidental capture in fishing gear, boat traffic and noise, dams, and pollution; none were found in a 2006 survey).</p>
<p><strong>Common patterns:</strong> over-exploitation (hunting or fishing), habitat destruction and slow breeding rates make species vulnerable. The causes are linked to the broader causes of the biodiversity crisis (see A4.2.6).</p>`,
          `<p>「人為的 (anthropogenic)」は人間が原因であることを意味します。現在は<strong>第六の大量絶滅</strong>の時代で、人間の活動のために、通常よりはるかに速く種が絶滅しています（それ以前の五回の大量絶滅は自然が原因で、学ぶのは現在のものです）。ガイドは<strong>三つ以上の簡単な事例研究</strong>を求めています。</p>
<p><strong>1. ニュージーランド北島のジャイアントモア (<em>Dinornis novaezealandiae</em>)：陸上の大型動物の消失。</strong>モアはニュージーランドの巨大な飛べない鳥でした。人間が到来した（13世紀ごろ）後、モアは<strong>肉のために狩られ</strong>、卵も採られました。森や低木林を焼き払って開くことで<strong>生息地</strong>も失われました。繁殖が遅いモアは、一、二世紀のうちに絶滅しました。</p>
<p><strong>2. カリブモンクアザラシ (<em>Neomonachus tropicalis</em>)：海洋生物の消失。</strong>アザラシは油、肉、皮のために<strong>狩られ</strong>、漁師も魚を巡る競争相手として殺しました。繁殖する海岸でも妨害され、繁殖地が減りました。最後の確実な目撃は1952年で、2008年に絶滅が宣言されました。</p>
<p><strong>3. 身近な地域の一種。</strong>地域や国で絶滅した種を選び、いつ失われたか、その原因を要約します。例（他の種を選んでも構いません）：日本のニホンオオカミ（19世紀から20世紀初めの迫害と病気）、中国のヨウスコウカワイルカ (baiji)（漁具による混獲、船の往来と騒音、ダム、汚染。2006年の調査では見つからなかった）。</p>
<p><strong>共通のパターン：</strong>過剰な捕獲（狩猟や漁獲）、生息地の破壊、繁殖速度の遅さが、種を絶滅しやすくします。原因は、生物多様性の危機のより広い原因（A4.2.6）とつながっています。</p>`,
          `<p>「人為 (anthropogenic)」指由人類造成。我們正處於<strong>第六次大規模滅絕</strong>，即由於人類活動，物種滅絕速度遠高於正常水平的時期。（之前的五次大規模滅絕有自然成因；你學習的是目前這一次。）課程指引要求<strong>三個或以上簡短的個案研究</strong>：</p>
<p><strong>1. 北島巨型恐鳥 (moa，<em>Dinornis novaezealandiae</em>)：陸地大型動物的消失。</strong>恐鳥是新西蘭的巨型不能飛鳥類。人類到達（約 13 世紀）後，恐鳥被<strong>獵殺取肉</strong>，蛋也被拿走。焚燒和清除森林與灌叢亦破壞了牠們的<strong>生境</strong>。繁殖緩慢的恐鳥，在一兩個世紀內就滅絕了。</p>
<p><strong>2. 加勒比僧海豹 (Caribbean monk seal，<em>Neomonachus tropicalis</em>)：海洋物種的消失。</strong>海豹因為油脂、肉和皮被<strong>獵殺</strong>，漁民也因牠們與自己爭奪魚類而殺死牠們。牠們在繁殖的海灘也受到騷擾，可用的繁殖地減少。最後一次確認的目擊記錄在 1952 年，該物種於 2008 年被宣布滅絕。</p>
<p><strong>3. 你所熟悉地區的一個物種。</strong>選擇一個在本地或本國滅絕的物種，概述它何時消失及其原因。想法（你也可自由選擇其他物種）：日本的日本狼（19 世紀至 20 世紀初的迫害和疾病）；中國的白鱀豚 (baiji，長江豚)（漁具誤捕、船隻往來與噪音、水壩和污染；2006 年的調查沒有找到）。</p>
<p><strong>共同規律：</strong>過度開發（狩獵或捕魚）、生境破壞和繁殖緩慢，令物種容易滅絕。這些原因與生物多樣性危機的更廣泛原因（A4.2.6）有關。</p>`
        ),
        examTip: L("Learn the key cause for each case study in one sentence (moa: hunting + habitat loss; monk seal: hunting). Either the common or scientific name is accepted.", "各事例の主な原因を一文で覚えましょう（モア：狩猟と生息地の消失、モンクアザラシ：狩猟）。一般名でも学名でも認められます。", "為每個個案記住一句主要原因（恐鳥：獵殺和生境喪失；僧海豹：獵殺）。可使用俗名或學名。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.4", ahl: false,
        deeper: {"en":"<p><strong>From forest clearance to species loss, step by step.</strong></p>\n<ol>\n<li>Trees are cut or burned, or land is cleared for a plantation.</li>\n<li>The habitat is destroyed: animals lose food, shelter and breeding sites, and plants lose their place to grow.</li>\n<li>Populations fall, and species that live only in that forest type may go locally or globally extinct.</li>\n</ol>\n<table><tr><th>Cause in mixed dipterocarp forest</th><th>Direct or indirect?</th><th>How it removes the ecosystem</th></tr>\n<tr><td>Logging of valuable timber trees</td><td>Direct</td><td>Removes the dominant tall trees that form the forest structure</td></tr>\n<tr><td>Clearance for oil palm and farmland</td><td>Direct</td><td>Replaces a species-rich forest with one or a few crop species</td></tr>\n<tr><td>Fires lit to clear land</td><td>Direct</td><td>Can spread into forest that was not meant to be cleared</td></tr>\n<tr><td>Roads</td><td>Indirect</td><td>Open the forest to loggers and settlers</td></tr>\n<tr><td>Demand for palm oil, paper and timber elsewhere</td><td>Indirect</td><td>Creates the economic reason for clearing</td></tr></table>\n<p><strong>Writing your local case study.</strong> Use the same structure: what the ecosystem was, what replaced it (for example fish ponds, buildings, farmland), when, and the human causes.</p>\n<p><strong>Mark-scheme language.</strong> Link each cause to a result: \"forest cleared for plantations, so habitat lost\". Say <em>ecosystem loss</em> and <em>habitat loss</em> only when you have shown the link between them.</p>","ja":"<p><strong>森林の開墾から種の消失まで（段階別）。</strong></p>\n<ol>\n<li>木が伐られたり焼かれたりする、またはプランテーションのために土地が開かれる。</li>\n<li>生息地が破壊される。動物は食物、隠れ場所、繁殖場所を失い、植物は生育する場所を失う。</li>\n<li>個体群が減り、その森林タイプにしかいない種は地域的または地球全体で絶滅することがある。</li>\n</ol>\n<table><tr><th>混交フタバガキ林での原因</th><th>直接か間接か</th><th>生態系がなくなるしくみ</th></tr>\n<tr><td>価値の高い木材の伐採</td><td>直接</td><td>森の構造をつくる優占する高木を取り除く</td></tr>\n<tr><td>アブラヤシや農地のための開墾</td><td>直接</td><td>種の豊かな森を、一つか少数の作物に置き換える</td></tr>\n<tr><td>土地を開くための火入れ</td><td>直接</td><td>開くつもりのなかった森に燃え広がることがある</td></tr>\n<tr><td>道路</td><td>間接</td><td>伐採者や入植者に森を開く</td></tr>\n<tr><td>他国でのパーム油、紙、木材の需要</td><td>間接</td><td>開墾の経済的な理由をつくる</td></tr></table>\n<p><strong>身近な地域の事例の書き方。</strong>同じ構成で書きます。その生態系は何だったか、何に置き換わったか（たとえば養殖池、建物、農地）、いつ、人間の原因は何か。</p>\n<p><strong>採点のことば。</strong>各原因を結果に結びつけます：「プランテーションのために森林が開かれ、生息地が失われた」。<em>生態系の消失</em>と<em>生息地の消失</em>は、両者のつながりを示したときに使いましょう。</p>","zh":"<p><strong>由清除森林到物種消失，逐步說明。</strong></p>\n<ol>\n<li>樹木被砍伐或焚燒，或土地被清理作種植園。</li>\n<li>生境被破壞：動物失去食物、庇護處和繁殖地，植物失去生長的地方。</li>\n<li>種羣數量下降，只生活在該類森林的物種可能在當地或全球滅絕。</li>\n</ol>\n<table><tr><th>混合龍腦香林的成因</th><th>直接還是間接？</th><th>如何令生態系統消失</th></tr>\n<tr><td>砍伐珍貴的木材樹木</td><td>直接</td><td>移走構成森林結構的優勢高大樹木</td></tr>\n<tr><td>為油棕和農地而清理</td><td>直接</td><td>以一個或少數作物取代物種豐富的森林</td></tr>\n<tr><td>為清理土地而放的火</td><td>直接</td><td>可蔓延入原本不打算清理的森林</td></tr>\n<tr><td>道路</td><td>間接</td><td>讓伐木者和移民進入森林</td></tr>\n<tr><td>其他地方對棕櫚油、紙和木材的需求</td><td>間接</td><td>造成清理土地的經濟理由</td></tr></table>\n<p><strong>撰寫你所熟悉地區的個案。</strong>用同樣的結構：該生態系統原本是甚麼、被甚麼取代（例如魚塘、建築物、農地）、何時，以及人類成因。</p>\n<p><strong>評分用語。</strong>把每個原因連到結果：「森林被清理作種植園，所以生境喪失」。只有在顯示出兩者的關連後，才使用<em>生態系統喪失</em>和<em>生境喪失</em>。</p>"},
        heading: L("Causes of ecosystem loss", "生態系の消失の原因", "生態系統喪失的原因"),
        body: L(
          `<p>You study only causes that are <strong>directly or indirectly caused by humans</strong>. Losing an ecosystem also destroys the habitats of the species that live in it. The guide asks for <strong>two case studies</strong>:</p>
<p><strong>1. Loss of mixed dipterocarp forest in Southeast Asia.</strong> Mixed dipterocarp forest is a species-rich lowland rainforest dominated by tall dipterocarp trees, found in places such as Borneo, Sumatra and the Malay Peninsula. It has been lost because of:</p>
<ul>
<li><strong>Logging</strong> for valuable timber (a direct cause).</li>
<li><strong>Clearance of land for plantations</strong>, especially oil palm, and for farming (a direct cause). Demand for palm oil, paper and timber in other countries is an indirect cause.</li>
<li><strong>Fires</strong> lit to clear land, which sometimes spread into the forest, and <strong>roads</strong> that open up forest to settlers and loggers.</li>
</ul>
<p><strong>2. A lost ecosystem from an area you know</strong> (if possible). Examples: coastal wetlands, mangroves or tidal flats lost to land reclamation, building and fish ponds; grassland or heathland lost to farming. Summarise what was lost, when and why.</p>`,
          `<p>学ぶのは<strong>人間が直接または間接的に引き起こした</strong>原因だけです。生態系が失われると、そこに住む種の生息地も失われます。ガイドは<strong>二つの事例研究</strong>を求めています。</p>
<p><strong>1. 東南アジアの混交フタバガキ林の消失。</strong>混交フタバガキ林 (mixed dipterocarp forest) は、背の高いフタバガキ科の木が優占する、種の豊かな低地の熱帯雨林で、ボルネオ、スマトラ、マレー半島などにあります。次の原因で失われました。</p>
<ul>
<li>価値の高い木材のための<strong>伐採</strong>（直接的な原因）。</li>
<li>プランテーション（特にアブラヤシ）や農地のための<strong>土地の開墾</strong>（直接的な原因）。他国でのパーム油、紙、木材の需要は間接的な原因です。</li>
<li>土地を開くための<strong>火入れ</strong>が森に広がることがあること、また入植者や伐採者に森を開く<strong>道路</strong>。</li>
</ul>
<p><strong>2. 身近な地域で失われた生態系</strong>（可能なら）。例：埋め立て、建設、養殖池で失われた沿岸の湿地、マングローブ、干潟、農地化で失われた草原や荒れ地。何が、いつ、なぜ失われたかを要約します。</p>`,
          `<p>你只需學習<strong>直接或間接由人類造成</strong>的原因。生態系統消失，也會破壞生活在其中的物種的生境。課程指引要求<strong>兩個個案研究</strong>：</p>
<p><strong>1. 東南亞混合龍腦香林的消失。</strong>混合龍腦香林 (mixed dipterocarp forest) 是以高大的龍腦香科樹木為主、物種豐富的低地雨林，分佈於婆羅洲、蘇門答臘和馬來半島等地。它因以下原因而消失：</p>
<ul>
<li>為取得珍貴木材而進行的<strong>砍伐</strong>（直接原因）。</li>
<li>為種植園（特別是油棕）和農業而進行的<strong>土地開墾</strong>（直接原因）。其他國家對棕櫚油、紙和木材的需求是間接原因。</li>
<li>為清理土地而放的<strong>火</strong>，有時蔓延進入森林，以及讓移民和伐木者進入森林的<strong>道路</strong>。</li>
</ul>
<p><strong>2. 你所熟悉地區的一個已消失的生態系統</strong>（如可能）。例子：因填海、建築和魚塘而消失的沿海濕地、紅樹林或潮間帶泥灘；因農耕而消失的草地或荒原。概述消失了甚麼、何時消失及原因。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.5", ahl: false,
        deeper: {"en":"<p><strong>Why richness alone can miss a change (sample data).</strong> The same meadow is surveyed in two years with the same method (20 quadrats, 100 plants counted each time).</p>\n<table><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>Richness</th></tr>\n<tr><td>Year 1</td><td>20</td><td>18</td><td>17</td><td>15</td><td>16</td><td>14</td><td>6</td></tr>\n<tr><td>Year 2</td><td>70</td><td>8</td><td>6</td><td>5</td><td>6</td><td>5</td><td>6</td></tr></table>\n<p>Richness is 6 in both years, but species A rises from 20% of plants to 70% (70 ÷ 100 × 100). Evenness has fallen sharply. A survey that only counted species would show \"no change\" and miss the loss of balance.</p>\n<p><strong>What makes a set of surveys good evidence?</strong></p>\n<ul>\n<li>The <strong>same method</strong> and effort each time, so the years can be compared.</li>\n<li>Many sites and many years, so a pattern is not due to one unusual season.</li>\n<li>Species correctly identified, with the data checked.</li>\n<li>Publication in a <strong>peer-reviewed</strong> source where other scientists can examine the methods.</li>\n</ul>\n<p>Reports such as those from IPBES bring together many such studies, which is why they carry weight.</p>\n<p><strong>Mark-scheme language.</strong> \"Repeated surveys using the same methods show change over time\"; \"citizen science gives large amounts of data but identification and methods may vary, so data need to be checked\".</p>","ja":"<p><strong>豊富さだけでは変化を見逃すことがある理由（サンプルデータ）。</strong>同じ草地を、同じ方法（方形枠20個、毎回100本の植物を数える）で2年にわたって調査しました。</p>\n<table><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>豊富さ</th></tr>\n<tr><td>1年目</td><td>20</td><td>18</td><td>17</td><td>15</td><td>16</td><td>14</td><td>6</td></tr>\n<tr><td>2年目</td><td>70</td><td>8</td><td>6</td><td>5</td><td>6</td><td>5</td><td>6</td></tr></table>\n<p>豊富さはどちらの年も6ですが、種Aは植物の20％から70％（70 ÷ 100 × 100）に増えました。均等度は大きく下がっています。種の数だけを数える調査では「変化なし」となり、バランスの崩れを見逃します。</p>\n<p><strong>調査の積み重ねが良い証拠になる条件。</strong></p>\n<ul>\n<li>毎回<strong>同じ方法</strong>と労力で行い、年どうしを比べられる。</li>\n<li>多くの場所と多くの年で行い、一つの特殊な季節によるパターンではない。</li>\n<li>種が正しく同定され、データが確認されている。</li>\n<li>他の科学者が方法を調べられる<strong>査読付き</strong>の情報源に発表されている。</li>\n</ul>\n<p>IPBES のような報告は多くの研究をまとめるので、重みがあります。</p>\n<p><strong>採点のことば。</strong>「同じ方法で繰り返した調査は、時間の経過による変化を示す」「市民科学は大量のデータをもたらすが、同定や方法にばらつきがあるので、データを確認する必要がある」。</p>","zh":"<p><strong>為何只看豐富度可能漏掉改變（樣本數據）。</strong>同一片草地在兩個年份用相同方法（20 個樣方，每次點算 100 株植物）調查。</p>\n<table><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>豐富度</th></tr>\n<tr><td>第 1 年</td><td>20</td><td>18</td><td>17</td><td>15</td><td>16</td><td>14</td><td>6</td></tr>\n<tr><td>第 2 年</td><td>70</td><td>8</td><td>6</td><td>5</td><td>6</td><td>5</td><td>6</td></tr></table>\n<p>兩年的豐富度都是 6，但物種 A 由佔植物的 20% 升至 70%（70 ÷ 100 × 100）。均勻度大幅下降。只點算物種數目的調查會顯示「沒有改變」，而漏掉了平衡的喪失。</p>\n<p><strong>怎樣的一組調查才是好的證據？</strong></p>\n<ul>\n<li>每次使用<strong>相同方法</strong>和投入，各年才可比較。</li>\n<li>在許多地點和許多年份進行，規律便不會只是某個特殊季節造成。</li>\n<li>物種辨認正確，數據經過檢查。</li>\n<li>在<strong>同行評審</strong>的來源發表，讓其他科學家能檢視方法。</li>\n</ul>\n<p>像 IPBES 的報告彙集了許多這類研究，所以分量很重。</p>\n<p><strong>評分用語。</strong>「用相同方法重複調查，可顯示隨時間的改變」；「公民科學提供大量數據，但辨認和方法可能不一，所以數據需要檢查」。</p>"},
        heading: L("Evidence for a biodiversity crisis", "生物多様性の危機の証拠", "生物多樣性危機的證據"),
        body: L(
          `<p>Evidence of a crisis comes from <strong>reliable surveys of biodiversity in a wide range of habitats around the world</strong>, and from reports that bring many studies together, such as those of the <strong>Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES)</strong>. The IPBES global assessment of 2019 concluded that a very large number of species (of the order of one million) are threatened with extinction. Other sources include the IUCN Red List of threatened species.</p>
<p><strong>Surveys must be repeated.</strong> One survey shows what is there now. Only <strong>repeated surveys</strong> using comparable methods show <strong>change</strong> over time in:</p>
<ul>
<li><strong>species richness</strong>: the number of different species; and</li>
<li><strong>species evenness</strong>: how equal the numbers of the species are. A community dominated by one species has low evenness.</li>
</ul>
<p><strong>Who collects the data?</strong> Both <strong>expert scientists</strong> and <strong>citizen scientists</strong> (members of the public who record observations, for example in a bird count) contribute.</p>
<div class="note"><strong>Nature of science.</strong> To be <strong>verifiable</strong>, evidence usually has to come from a <strong>published, peer-reviewed source</strong> that lets others check the methodology. Data recorded by citizens bring <strong>benefits</strong> (many observers, many places and years, low cost) and <strong>unique methodological concerns</strong> (varying skill in identifying species, differences in method, and bias towards easy-to-reach places or well-known species), so data quality needs to be checked.</div>`,
          `<p>危機の証拠は、<strong>世界中の幅広い生息地での信頼できる生物多様性の調査</strong>と、多くの研究をまとめた報告から得られます。たとえば<strong>生物多様性及び生態系サービスに関する政府間科学政策プラットフォーム (IPBES)</strong> の報告です。2019年の IPBES 地球規模評価は、非常に多くの種（百万種程度）が絶滅の危機にあると結論しました。その他の情報源に、絶滅危惧種の IUCN レッドリストがあります。</p>
<p><strong>調査は繰り返さなければなりません。</strong>一回の調査は現在の状況しか示しません。<strong>繰り返しの調査</strong>を同等の方法で行って初めて、次の<strong>変化</strong>が分かります。</p>
<ul>
<li><strong>種の豊富さ (species richness)</strong>：異なる種の数。</li>
<li><strong>種の均等度 (species evenness)</strong>：各種の個体数がどれだけ均等か。一つの種に支配された群集は均等度が低い。</li>
</ul>
<p><strong>データを集めるのは誰か。</strong><strong>専門の科学者</strong>と<strong>市民科学者 (citizen scientists)</strong>（たとえば鳥の観察調査で観察を記録する一般の人々）の両方が貢献します。</p>
<div class="note"><strong>科学の本質。</strong>証拠が<strong>検証可能</strong>であるためには、通常、他の人が方法を確認できる<strong>出版された査読付きの情報源</strong>から得なければなりません。市民が記録したデータには、<strong>利点</strong>（多くの観察者、多くの場所と年、低コスト）と<strong>特有の方法上の懸念</strong>（種の同定の技能の差、方法の違い、行きやすい場所や有名な種への偏り）があるため、データの質を確認する必要があります。</div>`,
          `<p>危機的證據來自<strong>在世界各地多種生境進行的可靠生物多樣性調查</strong>，以及彙集許多研究的報告，例如<strong>生物多樣性和生態系統服務政府間科學政策平台 (IPBES)</strong> 的報告。IPBES 2019 年的全球評估結論是，極大量的物種（約一百萬種的數量級）面臨滅絕威脅。其他資料來源包括瀕危物種的 IUCN 紅色名錄。</p>
<p><strong>調查必須重複進行。</strong>一次調查只顯示現在有甚麼。只有用可比較的方法進行<strong>重複調查</strong>，才能顯示隨時間的<strong>改變</strong>：</p>
<ul>
<li><strong>物種豐富度 (species richness)</strong>：不同物種的數目；及</li>
<li><strong>物種均勻度 (species evenness)</strong>：各物種數量有多接近。由單一物種主導的羣落，均勻度低。</li>
</ul>
<p><strong>誰收集數據？</strong><strong>專家科學家</strong>和<strong>公民科學家 (citizen scientists)</strong>（記錄觀察結果的公眾人士，例如在觀鳥計數中）都有貢獻。</p>
<div class="note"><strong>科學本質。</strong>證據要<strong>可被驗證</strong>，通常必須來自<strong>已發表並經同行評審的來源</strong>，讓他人能檢查方法。公民記錄的數據有<strong>好處</strong>（觀察者多、地點和年份多、成本低），也有<strong>獨特的方法學疑慮</strong>（辨識物種的技能參差、方法不同、偏向容易到達的地方或知名物種），所以需要檢查數據質素。</div>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.6", ahl: false,
        deeper: {"en":"<p><strong>Cause, mechanism, effect.</strong> Strong answers say how each cause reduces biodiversity.</p>\n<table><tr><th>Cause</th><th>Mechanism</th><th>Example</th></tr>\n<tr><td>Over-exploitation</td><td>Harvest is faster than reproduction, so numbers fall</td><td>Hunting of moas; hunting of monk seals</td></tr>\n<tr><td>Urbanization</td><td>Natural habitat is built over and cut up by roads</td><td>Wetland replaced by buildings</td></tr>\n<tr><td>Deforestation and agricultural clearance</td><td>Habitat lost; a species-rich community replaced by a crop</td><td>Dipterocarp forest to oil palm</td></tr>\n<tr><td>Pollution</td><td>Poisons organisms or changes their environment</td><td>Fertilizer runoff makes algae grow; when they decompose, oxygen in the water falls and animals die. Plastics are swallowed or entangle animals</td></tr>\n<tr><td>Invasive alien species</td><td>No natural enemies; outcompete or prey on natives; may carry disease</td><td>Brown tree snake on Guam, accidentally carried there by ship or aircraft, was followed by the loss of most native forest birds</td></tr></table>\n<p><strong>Causes interact.</strong> Logging roads (urbanization-type habitat loss) let hunters in (over-exploitation). Global trade (a cause of invasive species) is itself driven by population growth and demand.</p>\n<p><strong>A 4-mark \"Outline\" answer.</strong> Name four causes and add a few words on the effect of each, for example: \"over-exploitation: animals taken faster than they breed\".</p>\n<p><strong>Mark-scheme language.</strong> \"Global transport\", \"no natural predators in the new area\", \"habitat loss\". \"Population growth increases demand for resources\" is the overarching cause.</p>","ja":"<p><strong>原因、しくみ、影響。</strong>良い答えは、各原因がどのように生物多様性を減らすかを述べます。</p>\n<table><tr><th>原因</th><th>しくみ</th><th>例</th></tr>\n<tr><td>過剰な利用 (over-exploitation)</td><td>捕獲が繁殖より速く、数が減る</td><td>モアの狩猟、モンクアザラシの狩猟</td></tr>\n<tr><td>都市化</td><td>自然の生息地に建物が建ち、道路で分断される</td><td>湿地が建物に置き換わる</td></tr>\n<tr><td>森林破壊と農地のための開墾</td><td>生息地が失われ、種の豊かな群集が作物に置き換わる</td><td>フタバガキ林からアブラヤシへ</td></tr>\n<tr><td>汚染</td><td>生物に毒となる、または環境を変える</td><td>肥料の流出で藻類が増え、それが分解されると水中の酸素が減って動物が死ぬ。プラスチックは動物に飲み込まれたり絡まったりする</td></tr>\n<tr><td>外来種 (invasive alien species)</td><td>天敵がいない。在来種を競争で負かしたり捕食したりする。病気を運ぶこともある</td><td>グアムのミナミオオガシラ（brown tree snake）。船や航空機で偶然運ばれ、その後、在来の森林の鳥の大半が失われた</td></tr></table>\n<p><strong>原因は互いに作用します。</strong>伐採用の道路（生息地の消失）は猟師を呼び込みます（過剰な利用）。世界貿易（外来種の原因）は人口増加と需要が背景にあります。</p>\n<p><strong>4点の「概述せよ (Outline)」の答え方。</strong>原因を四つ挙げ、それぞれに影響を一言添えます。たとえば「過剰な利用：繁殖より速く動物を捕る」。</p>\n<p><strong>採点のことば。</strong>「世界的な輸送」「新しい地域には天敵がいない」「生息地の消失」。「人口増加が資源の需要を増やす」は全体を覆う原因です。</p>","zh":"<p><strong>原因、機制、影響。</strong>好的答案會說明每個原因如何減少生物多樣性。</p>\n<table><tr><th>原因</th><th>機制</th><th>例子</th></tr>\n<tr><td>過度開發 (over-exploitation)</td><td>捕取速度快過繁殖速度，數量下降</td><td>獵殺恐鳥；獵殺僧海豹</td></tr>\n<tr><td>城市化</td><td>天然生境被建築覆蓋，並被道路分割</td><td>濕地被建築物取代</td></tr>\n<tr><td>砍伐森林及為農業開墾</td><td>生境喪失；物種豐富的羣落被作物取代</td><td>龍腦香林變成油棕種植園</td></tr>\n<tr><td>污染</td><td>毒害生物或改變其環境</td><td>肥料徑流令藻類生長，藻類分解後水中氧氣下降，動物死亡。塑膠被動物吞食或纏住動物</td></tr>\n<tr><td>外來入侵物種 (invasive alien species)</td><td>沒有天敵；擊敗或捕食本地物種；可能帶來疾病</td><td>關島的棕色樹蛇 (brown tree snake) 經船隻或飛機意外帶入，其後本地大部分森林鳥類消失</td></tr></table>\n<p><strong>各原因會互相影響。</strong>伐木道路（生境喪失）讓獵人進入（過度開發）。全球貿易（入侵物種的成因）本身也是由人口增長和需求推動。</p>\n<p><strong>4 分「概述 (Outline)」的答法。</strong>列出四個原因，並為每個加上簡短的影響，例如「過度開發：捕取動物的速度快過牠們的繁殖速度」。</p>\n<p><strong>評分用語。</strong>「全球運輸」、「新地區沒有天敵」、「生境喪失」。「人口增長增加對資源的需求」是整體成因。</p>"},
        heading: L("Causes of the current biodiversity crisis", "現在の生物多様性の危機の原因", "目前生物多樣性危機的成因"),
        body: L(
          `<p>The <strong>overarching cause</strong> is <strong>human population growth</strong>, which increases demand for food, land, water, energy and other resources. The specific causes you must include are:</p>
<ul>
<li><strong>Hunting and other forms of over-exploitation</strong>: harvesting wild species (hunting, fishing, collecting, logging) faster than they can reproduce.</li>
<li><strong>Urbanization</strong>: building cities, roads and industry replaces natural habitat.</li>
<li><strong>Deforestation and clearance of land for agriculture</strong>, with consequent <strong>loss of natural habitat</strong>.</li>
<li><strong>Pollution</strong>: harmful chemicals, plastics, fertilizer runoff and other waste damage organisms and ecosystems.</li>
<li><strong>Spread of pests, diseases and invasive alien species due to global transport</strong>: ships, planes and trade carry organisms to new places, where they may have no natural enemies and can outcompete or prey on native species.</li>
</ul>
<p>Habitat loss often does most harm because it removes the places species live. Causes usually act together.</p>`,
          `<p><strong>全体を覆う原因</strong>は<strong>人口増加</strong>で、食料、土地、水、エネルギーなどの資源の需要を増やします。含めるべき個別の原因は次のとおりです。</p>
<ul>
<li><strong>狩猟その他の過剰な利用 (over-exploitation)</strong>：野生の種を、繁殖が追いつかない速さで捕る（狩猟、漁獲、採集、伐採）。</li>
<li><strong>都市化 (urbanization)</strong>：都市、道路、産業の建設が自然の生息地に取って代わる。</li>
<li><strong>森林破壊と農地のための土地開墾</strong>、それに伴う<strong>自然の生息地の消失</strong>。</li>
<li><strong>汚染 (pollution)</strong>：有害な化学物質、プラスチック、肥料の流出などの廃棄物が生物や生態系を傷つける。</li>
<li><strong>世界的な輸送による有害生物、病気、外来種 (invasive alien species) の拡散</strong>：船、飛行機、貿易が生物を新しい場所へ運び、そこでは天敵がいないために在来種を競争で負かしたり捕食したりすることがある。</li>
</ul>
<p>生息地の消失は、種の住む場所そのものを奪うため、しばしば最も大きな被害を与えます。原因はたいてい重なって働きます。</p>`,
          `<p><strong>整體成因</strong>是<strong>人口增長</strong>，它增加對食物、土地、水、能源和其他資源的需求。你必須包括的具體原因有：</p>
<ul>
<li><strong>狩獵及其他形式的過度開發 (over-exploitation)</strong>：捕取野生物種的速度快過牠們的繁殖速度（狩獵、捕魚、採集、砍伐）。</li>
<li><strong>城市化 (urbanization)</strong>：興建城市、道路和工業取代天然生境。</li>
<li><strong>砍伐森林及為農業而清理土地</strong>，導致<strong>天然生境喪失</strong>。</li>
<li><strong>污染 (pollution)</strong>：有害化學物質、塑膠、肥料徑流及其他廢物損害生物和生態系統。</li>
<li><strong>全球運輸令有害生物、疾病和外來入侵物種 (invasive alien species) 擴散</strong>：船隻、飛機和貿易把生物帶到新地方，牠們在那裏可能沒有天敵，因而擊敗或捕食本地物種。</li>
</ul>
<p>生境喪失往往造成最大的損害，因為它移走了物種生活的地方。這些原因通常共同作用。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.7", ahl: false,
        deeper: {"en":"<p><strong>Matching the method to the species.</strong></p>\n<table><tr><th>Approach</th><th>Strength</th><th>Limitation</th><th>Example</th></tr>\n<tr><td>In situ (reserves)</td><td>Keeps species with their ecosystem and interactions; protects many species together</td><td>Needs land, money and management; threats such as poaching or invasive species continue</td><td>National park with invasive species controlled</td></tr>\n<tr><td>Rewilding</td><td>Lets natural processes return with little management</td><td>Takes years; needs enough space and public support</td><td>Reintroducing a missing predator</td></tr>\n<tr><td>Reclamation</td><td>Repairs land already damaged</td><td>Slow; the new ecosystem may not match the original</td><td>Replanting forest on mined land</td></tr>\n<tr><td>Ex situ (zoos, botanic gardens)</td><td>Protects a species whose habitat is lost; captive breeding can supply animals for release</td><td>Small populations lose genetic diversity; animals may adapt to captivity; habitat is still needed for release</td><td>Captive breeding of an endangered amphibian</td></tr>\n<tr><td>Seed or tissue banks</td><td>Stores genetic diversity of many species in little space at low cost</td><td>Does not protect habitat; some species' seeds do not survive drying or freezing</td><td>A seed bank storing seeds of wild plants</td></tr></table>\n<p><strong>Choosing.</strong> A wide-ranging predator needs a large reserve (in situ). A species with only a handful of wild individuals and an immediate threat may need captive breeding (ex situ) <em>and</em> habitat protection for later release.</p>\n<p><strong>Outline of a 4-mark Discuss answer.</strong> (1) No single approach is enough. (2) Strength and limit of in situ. (3) Strength and limit of ex situ or banks. (4) Conclude that they are combined.</p>","ja":"<p><strong>種に合わせて方法を選ぶ。</strong></p>\n<table><tr><th>方法</th><th>長所</th><th>限界</th><th>例</th></tr>\n<tr><td>生息域内（保護区）</td><td>種を生態系とその相互作用の中に保ち、多くの種を同時に守る</td><td>土地、お金、管理が必要。密猟や外来種などの脅威は続く</td><td>外来種を駆除している国立公園</td></tr>\n<tr><td>再野生化 (rewilding)</td><td>少ない管理で自然の過程が戻る</td><td>年月がかかる。十分な空間と市民の支持が必要</td><td>いなくなった捕食者の再導入</td></tr>\n<tr><td>再生 (reclamation)</td><td>すでに損なわれた土地を修復する</td><td>時間がかかる。新しい生態系が元と同じとは限らない</td><td>採掘跡地に森を植え直す</td></tr>\n<tr><td>生息域外（動物園、植物園）</td><td>生息地を失った種を守る。飼育下繁殖で放つ個体を供給できる</td><td>小さな個体群は遺伝的多様性を失う。飼育環境に適応するかもしれない。放すには生息地が必要</td><td>絶滅危惧の両生類の飼育下繁殖</td></tr>\n<tr><td>種子・組織バンク</td><td>多くの種の遺伝的多様性を、小さな場所に安く保存できる</td><td>生息地は守れない。種子が乾燥や凍結に耐えられない種もある</td><td>野生植物の種子を保存する種子バンク</td></tr></table>\n<p><strong>選び方。</strong>広い範囲を動く捕食者には広い保護区（生息域内）が必要です。野生の個体がわずかで差し迫った脅威がある種は、飼育下繁殖（生息域外）<em>と</em>将来放すための生息地の保護が必要かもしれません。</p>\n<p><strong>4点の論述 (Discuss) の骨組み。</strong>(1) 単独で十分な方法はない。(2) 生息域内の長所と限界。(3) 生息域外またはバンクの長所と限界。(4) 組み合わせて使うと結論する。</p>","zh":"<p><strong>按物種選擇方法。</strong></p>\n<table><tr><th>方法</th><th>優點</th><th>局限</th><th>例子</th></tr>\n<tr><td>原地（保護區）</td><td>使物種留在其生態系統和相互作用之中；同時保護許多物種</td><td>需要土地、資金和管理；偷獵或入侵物種等威脅仍然存在</td><td>已控制入侵物種的國家公園</td></tr>\n<tr><td>重新野化</td><td>只需很少管理，讓自然過程回復</td><td>需時多年；需要足夠空間和公眾支持</td><td>重新引入已消失的掠食者</td></tr>\n<tr><td>復原</td><td>修復已受損的土地</td><td>緩慢；新生態系統未必與原來的相同</td><td>在被採礦的土地上重新植林</td></tr>\n<tr><td>非原地（動物園、植物園）</td><td>保護生境已喪失的物種；人工繁殖可供應動物放回野外</td><td>小種羣會失去遺傳多樣性；動物可能適應圈養；放回仍需要生境</td><td>人工繁殖瀕危兩棲動物</td></tr>\n<tr><td>種子庫或組織庫</td><td>以低成本、小空間貯存許多物種的遺傳多樣性</td><td>不能保護生境；有些物種的種子不能耐受乾燥或冷凍</td><td>貯存野生植物種子的種子庫</td></tr></table>\n<p><strong>如何選擇。</strong>活動範圍廣的掠食者需要大型保護區（原地）。野外只剩少數個體、又面臨迫切威脅的物種，可能需要人工繁殖（非原地）<em>和</em>保護生境以便日後放回。</p>\n<p><strong>4 分「論述 (Discuss)」答案的大綱。</strong>(1) 沒有單一方法足夠。(2) 原地的優點和局限。(3) 非原地或種質庫的優點和局限。(4) 結論：配合使用。</p>"},
        heading: L("Several approaches are needed to conserve biodiversity", "生物多様性の保全には複数のアプローチが必要", "保育生物多樣性需要多種方法"),
        body: L(
          `<p><strong>No single approach is sufficient by itself, and different species require different measures.</strong> A large predator needs a big protected habitat, while a rare plant might be saved as seeds. The guide asks you to include:</p>
<ul>
<li><strong>In situ conservation</strong> ("in the original place"): protecting species in their <strong>natural habitats</strong>. It keeps the species within its ecosystem and its interactions, and it supports many species at once. Includes <strong>management of nature reserves</strong> (for example controlling invasive species, regulating visitors, preventing hunting).</li>
<li><strong>Rewilding</strong>: restoring an area to a more natural state, often by letting natural processes return or by reintroducing missing species, with little ongoing human management.</li>
<li><strong>Reclamation of degraded ecosystems</strong>: repairing damaged land (for example replanting forest or restoring a wetland on land that has been mined or farmed).</li>
<li><strong>Ex situ conservation</strong> ("outside the original place"): protecting species <strong>outside their natural habitats</strong>, in <strong>zoos and botanic gardens</strong>, where captive breeding can build up numbers for possible reintroduction.</li>
<li><strong>Storage of germ plasm in seed banks or tissue banks</strong>: keeping seeds, sperm, eggs or tissue samples (living genetic material) frozen or dried so that genetic diversity is preserved, using little space.</li>
</ul>
<p>Each approach has limits: ex situ populations may lose genetic diversity or adapt to captivity, reserves need space and money, and seed banks cannot protect the habitat. So they are used <strong>together</strong>.</p>`,
          `<p><strong>単独で十分なアプローチはなく、種によって必要な対策が異なります。</strong>大型の捕食者には広い保護された生息地が必要ですが、希少な植物は種子として救えることもあります。ガイドは次を含めるよう求めています。</p>
<ul>
<li><strong>生息域内保全 (in situ conservation)</strong>（「元の場所で」）：種を<strong>自然の生息地</strong>で保護すること。種を生態系とその相互作用の中に保ち、一度に多くの種を支えます。<strong>自然保護区の管理</strong>（たとえば外来種の駆除、訪問者の規制、狩猟の防止）を含みます。</li>
<li><strong>再野生化 (rewilding)</strong>：地域をより自然な状態に戻すこと。自然の過程が戻るようにしたり、いなくなった種を再導入したりして、その後の人間の管理は少なくします。</li>
<li><strong>劣化した生態系の再生 (reclamation)</strong>：損なわれた土地を修復すること（たとえば、採掘や農業をした土地で森を植え直す、湿地を回復する）。</li>
<li><strong>生息域外保全 (ex situ conservation)</strong>（「元の場所の外で」）：種を<strong>自然の生息地の外</strong>、<strong>動物園や植物園</strong>で保護すること。飼育下繁殖で数を増やし、再導入に備えることができます。</li>
<li><strong>種子バンクや組織バンクでの遺伝資源 (germ plasm) の保存</strong>：種子、精子、卵、組織試料（生きた遺伝物質）を凍結または乾燥して保存し、小さな場所で遺伝的多様性を守ること。</li>
</ul>
<p>それぞれに限界があります。生息域外の個体群は遺伝的多様性を失ったり飼育環境に適応したりし、保護区には土地とお金が必要で、種子バンクは生息地を守れません。そのため<strong>組み合わせて</strong>使います。</p>`,
          `<p><strong>沒有單一方法足夠，不同物種需要不同措施。</strong>大型掠食者需要廣闊的受保護生境，而稀有植物可能以種子形式保存。課程指引要求包括：</p>
<ul>
<li><strong>原地保育 (in situ conservation)</strong>（「在原來的地方」）：在<strong>天然生境</strong>中保護物種。它使物種留在其生態系統和相互作用之中，並同時支持許多物種。包括<strong>自然保護區的管理</strong>（例如控制入侵物種、管制訪客、防止狩獵）。</li>
<li><strong>重新野化 (rewilding)</strong>：使一個地區恢復到較自然的狀態，常常是讓自然過程回復，或重新引入已消失的物種，之後只需很少的人為管理。</li>
<li><strong>復原退化的生態系統 (reclamation)</strong>：修復受損的土地（例如在曾被採礦或耕作的土地上重新植林或恢復濕地）。</li>
<li><strong>非原地保育 (ex situ conservation)</strong>（「在原來地方之外」）：在<strong>天然生境之外</strong>、<strong>動物園和植物園</strong>中保護物種，在那裏可以人工繁殖以增加數量，以備重新引入。</li>
<li><strong>在種子庫或組織庫貯存種質 (germ plasm)</strong>：把種子、精子、卵或組織樣本（有生命的遺傳物質）冷凍或乾燥保存，以最少空間保存遺傳多樣性。</li>
</ul>
<p>每種方法都有局限：非原地種羣可能失去遺傳多樣性或適應圈養環境，保護區需要土地和資金，種子庫不能保護生境。所以要<strong>配合</strong>使用。</p>`
        ),
        examTip: L("In situ = in the natural habitat; ex situ = outside it (zoo, botanic garden, seed or tissue bank). Give an example for each.", "生息域内＝自然の生息地の中、生息域外＝その外（動物園、植物園、種子・組織バンク）。それぞれ例を挙げましょう。", "原地 = 在天然生境中；非原地 = 在其外（動物園、植物園、種子或組織庫）。每種都要給出例子。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.8", ahl: false,
        deeper: {"en":"<p><strong>Applying the EDGE idea (sample species).</strong> Four species are compared.</p>\n<table><tr><th>Species</th><th>Evolutionarily distinct?</th><th>Globally endangered?</th><th>EDGE priority</th></tr>\n<tr><td>P</td><td>Yes: the only living species in its family</td><td>Yes</td><td>Highest</td></tr>\n<tr><td>Q</td><td>Yes</td><td>No</td><td>Lower: not under threat now</td></tr>\n<tr><td>R</td><td>No: many close relatives</td><td>Yes</td><td>Lower: much of its genetic make-up survives in relatives</td></tr>\n<tr><td>S</td><td>No</td><td>No</td><td>Lowest</td></tr></table>\n<p><strong>Why distinctness equals a long branch.</strong> On a cladogram or phylogenetic tree (A3.2), a species with few or no close relatives sits on a long, isolated branch. Losing it removes that whole branch, and all the unique genes and traits it carries.</p>\n<p><strong>Evaluating the approach.</strong> Points that count:</p>\n<ul>\n<li>For: it uses limited money where it saves most evolutionary history; a clear, objective rule.</li>\n<li>Against: it ignores a species' role in its ecosystem, its usefulness to people, and how likely a rescue is to succeed; unattractive species attract little public support; local people may be affected.</li>\n</ul>\n<p>Because choices like this involve ethical, economic, cultural and political ideas, there is no single right answer, which is why the guide says they need debate.</p>\n<p><strong>Mark-scheme language.</strong> Define both parts (evolutionarily distinct, globally endangered) and give the rationale: \"unique genetic diversity lost for ever\".</p>","ja":"<p><strong>EDGE の考え方を使う（例の種）。</strong>四つの種を比べます。</p>\n<table><tr><th>種</th><th>進化的に独特か</th><th>地球規模で絶滅の危機か</th><th>EDGE の優先度</th></tr>\n<tr><td>P</td><td>はい：その科で唯一の現生種</td><td>はい</td><td>最も高い</td></tr>\n<tr><td>Q</td><td>はい</td><td>いいえ</td><td>低め：今は脅威にさらされていない</td></tr>\n<tr><td>R</td><td>いいえ：近縁種が多い</td><td>はい</td><td>低め：遺伝的な構成の多くが近縁種に残る</td></tr>\n<tr><td>S</td><td>いいえ</td><td>いいえ</td><td>最も低い</td></tr></table>\n<p><strong>独特さが長い枝を意味する理由。</strong>分岐図や系統樹 (A3.2) では、近縁種が少ないかいない種は、長く孤立した枝の上にいます。その種を失うと、その枝全体と、それがもつ独自の遺伝子や形質をすべて失います。</p>\n<p><strong>この方法を評価する。</strong>得点になる点：</p>\n<ul>\n<li>賛成：限られたお金を、最も多くの進化の歴史を守れるところに使える。明確で客観的な基準である。</li>\n<li>反対：生態系での種の役割、人間にとっての有用性、救済が成功する見込みを無視する。見栄えのしない種は市民の支持を集めにくい。地域の人々に影響が出ることもある。</li>\n</ul>\n<p>このような選択には倫理、経済、文化、政治の考え方が関わるため、唯一の正解はありません。ガイドが議論が必要だとするのはそのためです。</p>\n<p><strong>採点のことば。</strong>二つの部分（進化的に独特、地球規模で絶滅の危機）を定義し、根拠を書きます：「独自の遺伝的多様性が永久に失われる」。</p>","zh":"<p><strong>運用 EDGE 的概念（示例物種）。</strong>比較四個物種。</p>\n<table><tr><th>物種</th><th>進化獨特？</th><th>全球瀕危？</th><th>EDGE 優先次序</th></tr>\n<tr><td>P</td><td>是：其科中唯一現存的物種</td><td>是</td><td>最高</td></tr>\n<tr><td>Q</td><td>是</td><td>否</td><td>較低：現時沒有受威脅</td></tr>\n<tr><td>R</td><td>否：有許多近親</td><td>是</td><td>較低：其遺傳組成大部分仍保留在近親中</td></tr>\n<tr><td>S</td><td>否</td><td>否</td><td>最低</td></tr></table>\n<p><strong>為何獨特即是長分支。</strong>在支序圖或系統發生樹 (A3.2) 上，近親很少或沒有的物種，位於一條長而孤立的分支上。失去它，便失去整條分支，以及它所帶有的所有獨特基因和特徵。</p>\n<p><strong>評價這種方法。</strong>能得分的要點：</p>\n<ul>\n<li>支持：把有限的金錢用在最能保住進化歷史的地方；規則清晰客觀。</li>\n<li>反對：忽略物種在生態系統中的作用、對人類的用途，以及拯救成功的機會；不起眼的物種難獲公眾支持；當地居民可能受影響。</li>\n</ul>\n<p>這類選擇涉及倫理、經濟、文化和政治的想法，沒有唯一正確的答案，所以課程指引說需要辯論。</p>\n<p><strong>評分用語。</strong>定義兩部分（進化獨特、全球瀕危）並給出理據：「獨特的遺傳多樣性永遠消失」。</p>"},
        heading: L("EDGE of Existence: prioritizing species", "EDGE of Existence：保全の優先順位づけ (EDGE)", "EDGE of Existence：決定保育優先次序 (EDGE)"),
        body: L(
          `<p>There is not enough money or time to save every endangered species, so conservationists have to <strong>prioritize</strong>. The <strong>EDGE of Existence programme</strong> selects species that are <strong>E</strong>volutionarily <strong>D</strong>istinct and <strong>G</strong>lobally <strong>E</strong>ndangered.</p>
<ul>
<li><strong>Evolutionarily distinct (ED)</strong>: a species that has <strong>few or no close relatives</strong> on the tree of life, and so represents a long, separate branch of evolutionary history. Example: the aye-aye of Madagascar is the only living species in its family.</li>
<li><strong>Globally endangered (GE)</strong>: a species at high risk of extinction across its whole range (threatened on the IUCN Red List).</li>
</ul>
<p><strong>Rationale:</strong> if an evolutionarily distinct species goes extinct, <strong>a unique part of the tree of life and its genetic diversity is lost for ever</strong>, whereas if one of many close relatives is lost, much of its genetic make-up survives in the others. Focusing effort on species that are both distinct and endangered saves the most evolutionary history for the least cost.</p>
<div class="note"><strong>Nature of science.</strong> Issues such as <em>which species should be prioritized</em> have complex <strong>ethical, environmental, political, social, cultural and economic implications</strong> and so need to be <strong>debated</strong>. For example: should we protect a species that is useful to people, popular, or distinct on the tree of life? What happens to the local people who live near it?</div>`,
          `<p>絶滅危惧種のすべてを救うにはお金も時間も足りないので、保全に携わる人々は<strong>優先順位をつける</strong>必要があります。<strong>EDGE of Existence 計画</strong>は、<strong>進化的に独特 (Evolutionarily Distinct)</strong> で<strong>地球規模で絶滅の危機にある (Globally Endangered)</strong> 種を選びます。</p>
<ul>
<li><strong>進化的に独特 (ED)</strong>：生命の系統樹の上で<strong>近縁な種が少ないかまったくなく</strong>、進化の歴史の長く独立した枝を代表する種。例：マダガスカルのアイアイは、その科で唯一の現生種です。</li>
<li><strong>地球規模で絶滅の危機にある (GE)</strong>：分布域全体で絶滅の危険性が高い種（IUCN レッドリストで絶滅危惧）。</li>
</ul>
<p><strong>根拠：</strong>進化的に独特な種が絶滅すると、<strong>系統樹の独自の部分とその遺伝的多様性が永久に失われ</strong>ます。一方、多くの近縁種のうち一種を失っても、遺伝的な構成の多くが他の種に残ります。独特で、かつ絶滅の危機にある種に努力を集中すれば、最小のコストで最も多くの進化の歴史を守れます。</p>
<div class="note"><strong>科学の本質。</strong><em>どの種を優先すべきか</em>のような問題には、複雑な<strong>倫理的、環境的、政治的、社会的、文化的、経済的な意味</strong>があるため、<strong>議論する</strong>必要があります。たとえば：人間に役立つ種、人気のある種、系統樹上で独特な種のどれを守るべきか。その近くに住む地域の人々はどうなるのか。</div>`,
          `<p>沒有足夠的金錢或時間拯救每一個瀕危物種，所以保育人士必須<strong>決定優先次序</strong>。<strong>EDGE of Existence 計劃</strong>挑選在進化上獨特 (<strong>E</strong>volutionarily <strong>D</strong>istinct)、且全球瀕危 (<strong>G</strong>lobally <strong>E</strong>ndangered) 的物種。</p>
<ul>
<li><strong>進化獨特 (ED)</strong>：在生命之樹上<strong>很少或沒有近親</strong>的物種，代表進化史上一條長而獨立的分支。例子：馬達加斯加的指猴是其科中唯一現存的物種。</li>
<li><strong>全球瀕危 (GE)</strong>：在其整個分佈範圍內滅絕風險很高的物種（在 IUCN 紅色名錄中屬受威脅）。</li>
</ul>
<p><strong>理據：</strong>如果一個進化獨特的物種滅絕，<strong>生命之樹上獨特的一部分及其遺傳多樣性便永遠消失</strong>；但如果許多近親物種中失去一種，其遺傳組成大部分仍保留在其他物種中。把努力集中在既獨特又瀕危的物種上，可以用最少成本保住最多的進化歷史。</p>
<div class="note"><strong>科學本質。</strong>像<em>應優先保育哪些物種</em>這類問題，涉及複雜的<strong>倫理、環境、政治、社會、文化和經濟含意</strong>，所以需要<strong>辯論</strong>。例如：我們應該保護對人類有用的物種、受歡迎的物種，還是在生命之樹上獨特的物種？住在附近的當地居民會怎樣？</div>`
        )
      }
    ],
    keyTerms: [
      { term: L("biodiversity", "生物多様性", "生物多樣性"), def: L("The variety of life in all its forms, levels and combinations: ecosystem, species and genetic diversity.", "あらゆる形、レベル、組み合わせの生命の多様さ。生態系、種、遺伝的多様性。", "生命在所有形式、層次和組合上的多樣程度：生態系統、物種和遺傳多樣性。"), ahl: false },
      { term: L("species richness", "種の豊富さ", "物種豐富度"), def: L("The number of different species in a community.", "群集に含まれる異なる種の数。", "羣落中不同物種的數目。"), ahl: false },
      { term: L("species evenness", "種の均等度", "物種均勻度"), def: L("How similar the numbers of individuals are across the species in a community.", "群集の各種の個体数がどれだけ似ているか。", "羣落中各物種的個體數目有多接近。"), ahl: false },
      { term: L("genetic diversity", "遺伝的多様性", "遺傳多樣性"), def: L("The variety of alleles and genes within a species.", "一つの種の中にある対立遺伝子や遺伝子の多様さ。", "一個物種內等位基因和基因的多樣程度。"), ahl: false },
      { term: L("anthropogenic", "人為的", "人為"), def: L("Caused by human activity.", "人間の活動によって引き起こされた。", "由人類活動引起。"), ahl: false },
      { term: L("sixth mass extinction", "第六の大量絶滅", "第六次大規模滅絕"), def: L("The current period of very rapid species loss caused by human activity.", "人間の活動によって起こっている、非常に速い種の消失の現在の時代。", "現今由人類活動引起、物種極速消失的時期。"), ahl: false },
      { term: L("invasive alien species", "外来種（侵略的）", "外來入侵物種"), def: L("A non-native species that spreads and harms native species or ecosystems.", "在来でない種で、広がって在来種や生態系に害を与えるもの。", "非本地物種，擴散並損害本地物種或生態系統。"), ahl: false },
      { term: L("in situ conservation", "生息域内保全", "原地保育"), def: L("Protecting species in their natural habitats.", "種を自然の生息地で保護すること。", "在天然生境中保護物種。"), ahl: false },
      { term: L("ex situ conservation", "生息域外保全", "非原地保育"), def: L("Protecting species outside their natural habitats, e.g. in zoos and botanic gardens.", "動物園や植物園など、自然の生息地の外で種を保護すること。", "在天然生境之外保護物種，例如在動物園和植物園。"), ahl: false },
      { term: L("rewilding", "再野生化", "重新野化"), def: L("Restoring an area to a more natural state, often by reintroducing species and letting natural processes return.", "種の再導入や自然の過程の回復などで、地域をより自然な状態に戻すこと。", "使地區恢復較自然的狀態，常透過重新引入物種和讓自然過程回復。"), ahl: false },
      { term: L("germ plasm", "遺伝資源（生殖質）", "種質"), def: L("Living genetic material (seeds, sperm, eggs, tissue) stored in seed or tissue banks.", "種子・組織バンクに保存される、生きた遺伝物質（種子、精子、卵、組織）。", "貯存在種子庫或組織庫的有生命遺傳物質（種子、精子、卵、組織）。"), ahl: false },
      { term: L("EDGE species", "EDGE 種", "EDGE 物種"), def: L("Evolutionarily Distinct and Globally Endangered species, prioritised for conservation.", "進化的に独特で地球規模で絶滅の危機にある種。保全で優先される。", "進化獨特且全球瀕危的物種，獲優先保育。"), ahl: false },
      { term: L("citizen scientist", "市民科学者", "公民科學家"), def: L("A member of the public who contributes observations or data to scientific research.", "科学研究に観察やデータを提供する一般の人。", "向科學研究提供觀察或數據的公眾人士。"), ahl: false }
    ],
    misconceptions: [
      {
        wrong: L("There are fewer species alive now than at any time in the past.", "現在生きている種は、過去のどの時代よりも少ない。", "現今存活的物種比過去任何時候都少。"),
        right: L("Fossil evidence suggests more species alive today than ever before; but the current extinction rate is far above normal and may reduce this.", "化石の証拠では、現在の種の数は過去最多と考えられます。ただし現在の絶滅の速さは通常をはるかに上回り、これを減らす恐れがあります。", "化石證據顯示現今存活的物種比以往任何時候都多；但目前的滅絕速度遠高於正常，可能令這個數字下降。")
      },
      {
        wrong: L("Biodiversity just means the number of species.", "生物多様性とは種の数のことにすぎない。", "生物多樣性只是指物種的數目。"),
        right: L("It includes ecosystem diversity, species diversity (richness and evenness) and genetic diversity.", "生態系の多様性、種の多様性（豊富さと均等度）、遺伝的多様性を含みます。", "它包括生態系統多樣性、物種多樣性（豐富度和均勻度）和遺傳多樣性。")
      },
      {
        wrong: L("Zoos alone can save endangered species.", "動物園だけで絶滅危惧種を救える。", "單靠動物園就能拯救瀕危物種。"),
        right: L("No single approach is enough: habitats must also be protected, degraded land restored and genetic material stored.", "単独で十分なアプローチはありません。生息地の保護、劣化した土地の再生、遺伝物質の保存も必要です。", "沒有單一方法足夠：還需要保護生境、復原退化的土地和貯存遺傳物質。")
      },
      {
        wrong: L("One survey is enough to show that biodiversity is falling.", "一回の調査で、生物多様性が減っていることが分かる。", "一次調查就足以顯示生物多樣性正在下降。"),
        right: L("Surveys must be repeated with comparable methods to show change in richness and evenness.", "豊富さと均等度の変化を示すには、同等の方法で調査を繰り返す必要があります。", "必須用可比較的方法重複調查，才能顯示豐富度和均勻度的變化。")
      }
    ],
    beyondSyllabus: [
      L("You do not need to study the causes of the five earlier (natural) mass extinctions; the guide asks for the current, human-driven one.", "それ以前の五回（自然が原因）の大量絶滅の原因を学ぶ必要はありません。ガイドが求めるのは、人間による現在の大量絶滅です。", "你不需要學習之前五次（自然）大規模滅絕的成因；課程指引要求的是目前由人類造成的一次。"),
      L("You do not need to memorize the dates, numbers or population statistics for moas, monk seals or dipterocarp forest, only the main causes.", "モア、モンクアザラシ、フタバガキ林の年代、数、個体数の統計を覚える必要はなく、主な原因だけで十分です。", "你不需要記憶恐鳥、僧海豹或龍腦香林的年份、數字或種羣統計，只需記住主要成因。"),
      L("A4.2 itself only asks for richness and evenness as ideas. Calculating the Simpson reciprocal index is not part of this subtopic, but it is one of the guide's mathematical tools for all students, so it can still be examined with biodiversity data.", "A4.2 自体が求めるのは、豊富さと均等度の考え方だけです。シンプソンの逆数指数 (Simpson reciprocal index) の計算はこの小項目には含まれませんが、すべての生徒向けのガイドの数学的ツールの一つなので、生物多様性のデータとともに出題される可能性はあります。", "A4.2 本身只要求認識豐富度和均勻度的概念。計算辛普森倒數指數 (Simpson reciprocal index) 不屬於這個小節，但它是課程指引為所有學生列出的數學工具之一，所以仍可能配合生物多樣性數據出題。"),
      L("You do not need to name or rank specific EDGE species or know the EDGE scoring formula; know the rationale.", "具体的な EDGE 種の名前や順位、EDGE の得点計算式を知る必要はありません。根拠を理解していれば十分です。", "你不需要說出或排列特定的 EDGE 物種，也不需要知道 EDGE 的計分公式；了解其理據便可。"),
      L("You do not need international treaty names (CITES, CBD) or the IUCN Red List category definitions in detail.", "国際条約の名称（CITES、CBD）や IUCN レッドリストのカテゴリーの詳しい定義を知る必要はありません。", "你不需要詳細認識國際條約名稱 (CITES、CBD) 或 IUCN 紅色名錄各類別的定義。")
    ],
    links: [
      { to: "A3.1", why: L("eDNA and barcodes are tools for surveying biodiversity; genetic diversity is part of biodiversity.", "環境 DNA とバーコードは生物多様性の調査の道具で、遺伝的多様性は生物多様性の一部です。", "環境 DNA 和條碼是調查生物多樣性的工具；遺傳多樣性是生物多樣性的一部分。") },
      { to: "A3.2", why: L("Cladograms show how evolutionarily distinct a species is, used in the EDGE programme.", "分岐図は種の進化的な独自性を示し、EDGE 計画で使われます。", "支序圖顯示物種進化獨特的程度，EDGE 計劃會使用。") },
      { to: "A4.1", why: L("Speciation adds species and extinction removes them; the balance gives biodiversity.", "種分化は種を増やし絶滅は減らします。そのバランスが生物多様性です。", "物種形成增加物種，滅絕減少物種；兩者的平衡決定生物多樣性。") },
      { to: "B4.2", why: L("Ecosystems and communities: habitats and niches are what conservation tries to protect.", "生態系と群集：保全が守ろうとするのは、生息地とニッチです。", "生態系統與羣落：保育所要保護的是生境和生態位。") }
    ],
    natureOfScience: [
      L("Classification as pattern recognition: the same observations can be classified differently, as splitters and lumpers show.", "パターン認識としての分類：分割派と統合派が示すように、同じ観察でも異なる分類ができます。", "分類作為規律識別：正如細分派與合併派所示，同一組觀察可以有不同分類。"),
      L("Verifiable evidence usually comes from published, peer-reviewed sources; citizen science brings benefits and its own methodological concerns.", "検証可能な証拠は通常、出版された査読付きの情報源から得られます。市民科学には利点と、特有の方法上の懸念があります。", "可驗證的證據通常來自已發表、經同行評審的來源；公民科學既有好處，也有其獨特的方法學疑慮。"),
      L("Prioritizing which species to conserve has ethical, environmental, political, social, cultural and economic implications and needs debate.", "どの種を保全するかの優先順位づけには、倫理的、環境的、政治的、社会的、文化的、経済的な意味があり、議論が必要です。", "決定優先保育哪些物種涉及倫理、環境、政治、社會、文化和經濟含意，需要辯論。")
    ],
    questions: [
      {
        id: "a4-2-q01", type: "mcq", ahl: false, difficulty: 1, ref: "A4.2.1", paper: "1A",
        stem: L("Which list gives the three levels of biodiversity that you must include?", "必ず含めるべき生物多様性の三つのレベルを示しているのはどれか。", "哪一個列表給出你必須包括的三個生物多樣性層次？"),
        options: [L("Ecosystem, species and genetic diversity", "生態系、種、遺伝的多様性", "生態系統、物種和遺傳多樣性"), L("Plant, animal and fungal diversity", "植物、動物、菌類の多様性", "植物、動物和真菌多樣性"), L("Land, freshwater and marine diversity", "陸、淡水、海洋の多様性", "陸地、淡水和海洋多樣性"), L("Past, present and future diversity", "過去、現在、未来の多様性", "過去、現在和未來的多樣性")],
        answer: 0,
        explanation: L("The guide names ecosystem diversity, species diversity and genetic diversity. The other lists describe groups or habitats, not levels of biodiversity.", "ガイドが挙げるのは生態系の多様性、種の多様性、遺伝的多様性です。他の選択肢は生物群や生息地を表しており、生物多様性のレベルではありません。", "課程指引列出生態系統多樣性、物種多樣性和遺傳多樣性。其他列表描述的是類羣或生境，不是生物多樣性的層次。")
      },
      {
        id: "a4-2-q02", type: "multi", ahl: false, difficulty: 2, ref: "A4.2.6", paper: "1A",
        stem: L("Select ALL the specific causes of the current biodiversity crisis named in the guide.", "ガイドが挙げている、現在の生物多様性の危機の個別の原因をすべて選べ。", "選出課程指引所列出的目前生物多樣性危機的所有具體原因。"),
        options: [L("Over-exploitation such as hunting", "狩猟などの過剰な利用", "狩獵等過度開發"), L("Urbanization", "都市化", "城市化"), L("Spread of invasive alien species by global transport", "世界的な輸送による外来種の拡散", "全球運輸令外來入侵物種擴散"), L("Increased numbers of natural predators", "自然の捕食者の増加", "天然掠食者數目增加")],
        answer: [0, 1, 2],
        explanation: L("Over-exploitation, urbanization and invasive species are all on the guide's list (with deforestation, land clearance for agriculture and pollution). More natural predators is not a human-driven cause of the crisis.", "過剰な利用、都市化、外来種はいずれもガイドの一覧にあります（森林破壊、農地のための開墾、汚染も）。自然の捕食者の増加は、危機の人為的な原因ではありません。", "過度開發、城市化和入侵物種都在課程指引列表上（還有砍伐森林、為農業清理土地和污染）。天然掠食者增加不是危機的人為成因。")
      },
      {
        id: "a4-2-q03", type: "mcq", ahl: false, difficulty: 2, ref: "A4.2.2", paper: "1A",
        stem: L("Which statement about the number of species is supported by evidence from fossils and surveys?", "化石と調査の証拠が支持する、種の数についての記述はどれか。", "有關物種數目，哪項陳述得到化石和調查證據支持？"),
        options: [L("All species on Earth have now been discovered and named", "地球上のすべての種がすでに発見・命名された", "地球上所有物種現在都已被發現和命名"), L("There are currently more species alive than at any time in the past", "現在生きている種は、過去のどの時代よりも多い", "現今存活的物種比過去任何時候都多"), L("There are fewer species alive now than in the Cambrian period", "現在生きている種は、カンブリア紀より少ない", "現今存活的物種比寒武紀少"), L("The number of species has never changed", "種の数が変わったことは一度もない", "物種的數目從未改變")],
        answer: 1,
        explanation: L("Millions of species are described, many more remain undiscovered (A is wrong), and fossils suggest today's species number is higher than ever. This does not mean the extinction crisis is not real: species are being lost very fast.", "数百万種が記載されていますが、さらに多くが未発見です (Aは誤り)。化石は、現在の種の数が過去最多であることを示唆します。だからといって絶滅の危機が現実でないわけではなく、種は非常に速く失われています。", "已有數百萬個物種被描述，還有更多物種未被發現（A 錯），而化石顯示今日的物種數目比以往任何時候都多。這並不表示滅絕危機不真實：物種正在極快地消失。")
      },
      {
        id: "a4-2-q04", type: "short", ahl: false, difficulty: 2, ref: "A4.2.2", paper: "2", commandTerm: "Explain", marks: 2,
        stem: L("Scientists studying the same group of beetles disagree about how many species it contains. Explain how this can happen, using the terms splitters and lumpers.", "ある甲虫の同じグループを研究している科学者の間で、何種含まれるかについて意見が分かれている。分割派と統合派という語を使って、なぜそうなり得るか説明せよ (Explain)。", "研究同一類甲蟲的科學家，對該類羣含有多少物種意見不一。運用「細分派」與「合併派」兩詞，解釋 (Explain) 這為何會發生。"),
        markscheme: [
          L("The same observations can be classified in different ways (classification is pattern recognition)", "同じ観察でも異なる方法で分類できる（分類はパターン認識）", "同一組觀察可以用不同方法分類（分類是規律識別）"),
          L("Splitters recognize more species by dividing the group into many; lumpers group similar forms together into fewer species", "分割派はグループを細かく分けてより多くの種を認め、統合派は似た形態をまとめてより少ない種にする", "細分派把類羣分得較細，認出較多物種；合併派把相似的形態合併，物種較少")
        ],
        modelAnswer: L("Classification is pattern recognition, and the same observations can be classified in different ways. Splitters divide the beetles into many species whereas lumpers group similar forms together into fewer species.", "分類はパターン認識であり、同じ観察でも異なる方法で分類できる。分割派は甲虫を多くの種に分け、統合派は似た形態を一緒にして少ない種にする。", "分類是規律識別，同一組觀察可以用不同方法分類。細分派把甲蟲分成很多物種，而合併派把相似的形態合併，物種較少。")
      },
      {
        id: "a4-2-q05", type: "short", ahl: false, difficulty: 2, ref: "A4.2.3", paper: "2", commandTerm: "Outline", marks: 4,
        stem: L("Outline the causes of the extinction of (a) the North Island giant moa and (b) the Caribbean monk seal.", "(a) ニュージーランド北島のジャイアントモアと、(b) カリブモンクアザラシの絶滅の原因を概述せよ (Outline)。", "概述 (Outline) (a) 北島巨型恐鳥和 (b) 加勒比僧海豹滅絕的原因。"),
        markscheme: [
          L("(a) Hunted by humans for meat (and eggs taken)", "(a) 人間に肉のために狩られた（卵も採られた）", "(a) 被人類獵殺取肉（蛋亦被取走）"),
          L("(a) Habitat loss from burning/clearing of forest and scrub; slow reproduction made them vulnerable", "(a) 森や低木林の焼き払い・開墾による生息地の消失。繁殖が遅く絶滅しやすかった", "(a) 因焚燒／清除森林和灌叢而喪失生境；繁殖緩慢令牠們易受影響"),
          L("(b) Hunted for oil, meat and skins", "(b) 油、肉、皮のために狩られた", "(b) 因油脂、肉和皮而被獵殺"),
          L("(b) Killed by fishers as competitors for fish / disturbed at breeding beaches, so fewer breeding sites", "(b) 魚を巡る競争相手として漁師に殺された／繁殖する海岸で妨害され、繁殖地が減った", "(b) 被漁民當作爭奪魚類的對手而殺死／繁殖海灘受騷擾，繁殖地減少")
        ],
        modelAnswer: L("(a) Moas were hunted by people for meat and eggs, and their forest and scrub habitat was burned and cleared; they reproduced slowly. (b) Monk seals were hunted for oil, meat and skins, killed by fishers who saw them as competitors, and disturbed at their breeding beaches.", "(a) モアは人間に肉や卵のために狩られ、生息する森や低木林が焼かれ開墾された。繁殖は遅かった。(b) モンクアザラシは油、肉、皮のために狩られ、競争相手とみなす漁師に殺され、繁殖する海岸でも妨害された。", "(a) 恐鳥被人類獵殺取肉和蛋，牠們的森林和灌叢生境被焚燒和清除；牠們繁殖緩慢。(b) 僧海豹因油脂、肉和皮而被獵殺，被視之為對手的漁民殺死，又在繁殖海灘受到騷擾。")
      },
      {
        id: "a4-2-q06", type: "match", ahl: false, difficulty: 1, ref: "A4.2.3–4", paper: "1A",
        stem: L("Match each case study to its main human-driven cause.", "各事例を、主な人為的原因と結び付けよ。", "把每個個案配對其主要的人為成因。"),
        pairs: [
          { left: L("North Island giant moa", "ニュージーランド北島のジャイアントモア", "北島巨型恐鳥"), right: L("Hunting for meat and eggs, plus habitat clearance", "肉と卵のための狩猟と、生息地の開墾", "為取肉和蛋而獵殺，加上清除生境") },
          { left: L("Caribbean monk seal", "カリブモンクアザラシ", "加勒比僧海豹"), right: L("Hunting for oil, meat and skins; persecution by fishers", "油、肉、皮のための狩猟と、漁師による迫害", "為油脂、肉和皮而獵殺；被漁民迫害") },
          { left: L("Mixed dipterocarp forest", "混交フタバガキ林", "混合龍腦香林"), right: L("Logging and clearance for plantations such as oil palm", "伐採と、アブラヤシなどのプランテーションのための開墾", "砍伐，以及為油棕等種植園而清理土地") }
        ],
        explanation: L("Over-exploitation drove the extinctions of the two species, while habitat conversion drove the loss of the forest ecosystem.", "過剰な利用が二種の絶滅を、土地利用の転換が森林生態系の消失を引き起こしました。", "過度開發導致兩個物種滅絕，而生境轉換則導致森林生態系統喪失。")
      },
      {
        id: "a4-2-q07", type: "short", ahl: false, difficulty: 2, ref: "A4.2.4", paper: "2", commandTerm: "Explain", marks: 3,
        stem: L("Explain how human activities have led to the loss of mixed dipterocarp forest in Southeast Asia.", "人間の活動が東南アジアの混交フタバガキ林の消失につながった仕組みを説明せよ (Explain)。", "解釋 (Explain) 人類活動如何導致東南亞混合龍腦香林喪失。"),
        markscheme: [
          L("Logging of the valuable timber trees", "価値の高い木材となる木の伐採", "砍伐珍貴的木材樹木"),
          L("Clearance of forest for oil palm and other plantations/farmland (driven by demand for products, an indirect cause)", "アブラヤシなどのプランテーションや農地のための森林の開墾（製品の需要が背景にある間接的な原因）", "為油棕和其他種植園／農地而清除森林（受產品需求推動，是間接原因）"),
          L("Fires set to clear land spread into forest / roads open up forest to settlers and loggers", "土地を開くための火入れが森に広がる／道路が入植者や伐採者に森を開く", "為清理土地而放的火蔓延入森林／道路令移民和伐木者進入森林")
        ],
        modelAnswer: L("Forest has been logged for valuable timber and cleared for oil palm plantations and farmland, driven by demand for palm oil and timber. Fires set to clear land can spread into forest, and new roads let loggers and settlers in.", "価値の高い木材のために伐採され、アブラヤシのプランテーションや農地のために開墾された。パーム油や木材の需要が背景にある。土地を開く火が森に広がり、新しい道路が伐採者や入植者を呼び込む。", "森林因珍貴木材而被砍伐，並為油棕種植園和農地而被清除，背後是對棕櫚油和木材的需求。為清理土地而放的火可蔓延入森林，新道路讓伐木者和移民進入。")
      },
      {
        id: "a4-2-q08", type: "short", ahl: false, difficulty: 3, ref: "A4.2.5", paper: "1B", commandTerm: "Calculate", marks: 4,
        stem: L("A wetland bird count was done by the same method in the same place in two years (illustrative data). (a) State the species richness in each year. (b) Calculate the percentage change in the total number of birds. (c) Explain why repeated surveys are needed to provide evidence of a biodiversity crisis.", "湿地の鳥の個体数調査が、同じ場所で同じ方法により二つの年に行われた（例示データ）。(a) 各年の種の豊富さを答えよ (State)。(b) 鳥の総数の変化率（％）を計算せよ (Calculate)。(c) 生物多様性の危機の証拠を得るために繰り返しの調査が必要な理由を説明せよ (Explain)。", "同一濕地在兩個年份以相同方法進行了鳥類計數（示例數據）。(a) 說出 (State) 每年的物種豐富度。(b) 計算 (Calculate) 鳥類總數的百分比變化。(c) 解釋 (Explain) 為何需要重複調查才能提供生物多樣性危機的證據。"),
        data: L(
          `<table><tr><th>Species</th><th>Year 1: number counted</th><th>Year 2: number counted</th></tr><tr><td>A</td><td>40</td><td>12</td></tr><tr><td>B</td><td>35</td><td>30</td></tr><tr><td>C</td><td>25</td><td>28</td></tr><tr><td>D</td><td>10</td><td>2</td></tr><tr><td>E</td><td>5</td><td>0</td></tr></table>`,
          `<table><tr><th>種</th><th>1年目：数えた数</th><th>2年目：数えた数</th></tr><tr><td>A</td><td>40</td><td>12</td></tr><tr><td>B</td><td>35</td><td>30</td></tr><tr><td>C</td><td>25</td><td>28</td></tr><tr><td>D</td><td>10</td><td>2</td></tr><tr><td>E</td><td>5</td><td>0</td></tr></table>`,
          `<table><tr><th>物種</th><th>第 1 年：計得數目</th><th>第 2 年：計得數目</th></tr><tr><td>A</td><td>40</td><td>12</td></tr><tr><td>B</td><td>35</td><td>30</td></tr><tr><td>C</td><td>25</td><td>28</td></tr><tr><td>D</td><td>10</td><td>2</td></tr><tr><td>E</td><td>5</td><td>0</td></tr></table>`
        ),
        markscheme: [
          L("(a) Year 1: 5 species; Year 2: 4 species", "(a) 1年目：5種、2年目：4種", "(a) 第 1 年：5 個物種；第 2 年：4 個物種"),
          L("(b) Totals 115 and 72", "(b) 合計は115と72", "(b) 總數 115 和 72"),
          L("(b) (72 − 115) ÷ 115 × 100 = −37.4% (a decrease of about 37%)", "(b) (72 − 115) ÷ 115 × 100 = −37.4％（約37％の減少）", "(b) (72 − 115) ÷ 115 × 100 = −37.4%（減少約 37%）"),
          L("(c) One survey shows only the present state; repeating it with the same method shows change over time in richness/evenness (and numbers)", "(c) 一回の調査は現在の状態しか示さない。同じ方法で繰り返すと、豊富さ・均等度（と個体数）の時間的な変化が分かる", "(c) 一次調查只顯示現況；用相同方法重複調查才能顯示豐富度／均勻度（和數量）隨時間的變化")
        ],
        modelAnswer: L("(a) 5 species in year 1 and 4 in year 2. (b) Totals are 115 and 72, so the change is (72 − 115) ÷ 115 × 100 = −37.4%, a fall of about 37%. (c) A single survey only tells you what is there at one time. Repeating the survey with the same method shows whether richness, evenness and numbers are changing.", "(a) 1年目は5種、2年目は4種。(b) 合計は115と72なので、変化率は (72 − 115) ÷ 115 × 100 = −37.4％で、約37％の減少。(c) 一回の調査はその時点の状況しか示さない。同じ方法で繰り返せば、豊富さ、均等度、個体数が変化しているかが分かる。", "(a) 第 1 年有 5 個物種，第 2 年有 4 個。(b) 總數為 115 和 72，所以變化是 (72 − 115) ÷ 115 × 100 = −37.4%，減少約 37%。(c) 單次調查只顯示某一時間有甚麼。用相同方法重複調查，才能顯示豐富度、均勻度和數量是否正在改變。")
      },
      {
        id: "a4-2-q09", type: "short", ahl: false, difficulty: 2, ref: "A4.2.5", paper: "2", commandTerm: "Evaluate", marks: 4,
        stem: L("Evaluate the use of data collected by citizen scientists as evidence of changes in biodiversity.", "市民科学者が集めたデータを、生物多様性の変化の証拠として使うことを評価せよ (Evaluate)。", "評價 (Evaluate) 把公民科學家收集的數據用作生物多樣性變化證據的做法。"),
        markscheme: [
          L("Strength: many observers can cover many places and years / large amounts of data at low cost", "長所：多くの観察者が多くの場所と年を調べられる／低コストで大量のデータ", "優點：眾多觀察者可涵蓋許多地點和年份／以低成本得到大量數據"),
          L("Strength: can show long-term change/ increases public engagement in science", "長所：長期的な変化を示せる／科学への市民の関与が高まる", "優點：可顯示長期變化／提升公眾對科學的參與"),
          L("Limitation: observers vary in skill, so species may be misidentified", "短所：観察者の技能に差があり、種を誤って同定するかもしれない", "限制：觀察者的技能參差，可能誤認物種"),
          L("Limitation: methods may differ / bias towards accessible places or well-known species, so data need checking/validating against expert surveys; verification needs published, peer-reviewed methodology", "短所：方法が異なる／行きやすい場所や有名な種に偏る。専門家の調査と照らして確認する必要がある。検証には出版された査読付きの方法が必要", "限制：方法可能不同／偏向容易到達的地方或知名物種，所以數據需對照專家調查來檢查／驗證；驗證需要已發表並經同行評審的方法")
        ],
        modelAnswer: L("Citizen scientists can cover many sites and years cheaply, so they provide large data sets that can show long-term change. However, they differ in skill, so species may be misidentified, and methods can vary or be biased towards easy-to-reach places or familiar species. The data are most useful when the methods are standardized and checked against expert surveys.", "市民科学者は多くの場所と年を安く調べられるので、長期的な変化を示せる大規模なデータが得られる。しかし技能に差があり種を誤って同定することがあり、方法が異なったり、行きやすい場所や身近な種に偏ったりする。方法を標準化し、専門家の調査と照らして確認すれば最も役立つ。", "公民科學家可以低成本涵蓋許多地點和年份，提供能顯示長期變化的大量數據。但他們的技能參差，可能誤認物種，方法也可能不同，或偏向容易到達的地方或熟悉的物種。當方法標準化，並對照專家調查檢查時，這些數據最有用。")
      },
      {
        id: "a4-2-q10", type: "mcq", ahl: false, difficulty: 2, ref: "A4.2.5", paper: "1A",
        stem: L("Why is evidence for a biodiversity crisis usually taken from published, peer-reviewed sources?", "生物多様性の危機の証拠が、通常、出版された査読付きの情報源から取られるのはなぜか。", "為何生物多樣性危機的證據通常取自已發表、經同行評審的來源？"),
        options: [L("The methodology can be checked by other scientists, so the evidence is verifiable", "他の科学者が方法を確認でき、証拠が検証可能になるから", "其他科學家可以檢查方法，使證據可被驗證"), L("Published results are always correct", "出版された結果は常に正しいから", "已發表的結果必然正確"), L("It avoids the need to repeat surveys", "調査を繰り返す必要がなくなるから", "這樣就無須重複調查"), L("Only experts are allowed to count species", "専門家だけが種を数えられるから", "只有專家才可計數物種")],
        answer: 0,
        explanation: L("Peer review and publication let others check the methods and judge the data. B overstates it: published work can still contain errors, which is why checking matters. C and D are not true.", "査読と出版により、他の人が方法を確認しデータを判断できます。Bは言い過ぎで、出版された研究にも誤りはあり得るので確認が重要です。CとDは正しくありません。", "同行評審和發表讓其他人可檢查方法並判斷數據。B 說得太絕對：已發表的工作仍可能有錯誤，所以檢查才重要。C 和 D 並不正確。")
      },
      {
        id: "a4-2-q11", type: "short", ahl: false, difficulty: 2, ref: "A4.2.4", paper: "1B", commandTerm: "Describe", marks: 4,
        stem: L("The graph shows the area of a tropical forest as a percentage of its area in 1980 (illustrative data). (a) Describe the trend. (b) Calculate the mean loss in percentage points per decade between 1980 and 2020. (c) Suggest two human activities that could explain the trend.", "グラフは、熱帯林の面積を1980年の面積に対する割合で示す（例示データ）。(a) 傾向を述べよ (Describe)。(b) 1980年から2020年の十年あたりの平均減少（パーセントポイント）を計算せよ (Calculate)。(c) この傾向を説明し得る人間の活動を二つ示せ (Suggest)。", "圖表顯示某熱帶森林面積佔 1980 年面積的百分比（示例數據）。(a) 描述 (Describe) 趨勢。(b) 計算 (Calculate) 1980 年至 2020 年間每十年平均損失的百分點。(c) 提出 (Suggest) 兩項可解釋這趨勢的人類活動。"),
        data: L(
          forestSvg("Year", "Forest area (% of 1980)", "Forest area falling from 100 to 50 percent between 1980 and 2020"),
          forestSvg("年", "森林面積（1980年に対する％）", "1980年から2020年に森林面積が100％から50％に減少"),
          forestSvg("年份", "森林面積（佔 1980 年的 %）", "森林面積由 1980 年的 100% 降至 2020 年的 50%")
        ),
        markscheme: [
          L("(a) Forest area falls continuously from 100% to 50% (1980–2020)", "(a) 森林面積は100％から50％へ、継続的に減少している（1980〜2020年）", "(a) 森林面積持續下降，由 100% 降至 50%（1980–2020 年）"),
          L("The fall is steady, about 11–14 percentage points in each decade (e.g. use of data values: 100 to 50)", "減少は安定しており、各十年で約11〜14パーセントポイント（データの値を引用：100から50）", "下降穩定，每個十年約 11–14 個百分點（引用數據值：由 100 降至 50）"),
          L("(b) (100 − 50) ÷ 4 decades = 12.5 percentage points per decade", "(b) (100 − 50) ÷ 4 十年 = 十年あたり12.5パーセントポイント", "(b) (100 − 50) ÷ 4 個十年 = 每十年 12.5 個百分點"),
          L("(c) Any two: logging; clearance for agriculture/plantations; urbanization/roads; fires to clear land", "(c) 次のうち二つ：伐採、農地／プランテーションのための開墾、都市化／道路、土地を開くための火入れ", "(c) 任何兩項：砍伐；為農業／種植園開墾；城市化／道路；為清理土地而放火")
        ],
        modelAnswer: L("(a) The forest area falls steadily from 100% to 50% over the 40 years. (b) (100 − 50) ÷ 4 = 12.5 percentage points per decade. (c) Logging for timber and clearance of land for plantations or farming.", "(a) 森林面積は40年間で100％から50％へ着実に減少している。(b) (100 − 50) ÷ 4 = 十年あたり12.5パーセントポイント。(c) 木材のための伐採と、プランテーションや農地のための開墾。", "(a) 森林面積在 40 年間由 100% 穩步降至 50%。(b) (100 − 50) ÷ 4 = 每十年 12.5 個百分點。(c) 為取木材而砍伐，以及為種植園或農耕而開墾土地。")
      },
      {
        id: "a4-2-q12", type: "mcq", ahl: false, difficulty: 2, ref: "A4.2.6", paper: "1A",
        stem: L("A ship's cargo accidentally carries a snake to an island that has no native snakes. Many ground-nesting birds are eaten and some disappear. Which cause of the biodiversity crisis does this show?", "船の貨物にまぎれて、在来のヘビがいない島に偶然ヘビが運ばれた。地上で営巣する多くの鳥が食べられ、一部は姿を消した。これは生物多様性の危機のどの原因を示しているか。", "一艘船的貨物意外地把一條蛇帶到沒有本地蛇的島上。許多在地面築巢的鳥被吃掉，部分消失。這顯示了生物多樣性危機的哪項成因？"),
        options: [L("Urbanization", "都市化", "城市化"), L("Spread of invasive alien species due to global transport", "世界的な輸送による外来種の拡散", "全球運輸令外來入侵物種擴散"), L("Pollution by fertilizer runoff", "肥料の流出による汚染", "肥料徑流造成污染"), L("Over-exploitation by hunting", "狩猟による過剰な利用", "獵捕造成的過度開發")],
        answer: 1,
        explanation: L("The snake is a non-native species moved by global transport and it preys on native birds that have no defence against it. The other causes are not involved in the scenario.", "ヘビは世界的な輸送で運ばれた非在来種で、それに対する防御をもたない在来の鳥を捕食します。他の原因はこの状況に関係しません。", "蛇是由全球運輸帶來的非本地物種，並捕食對牠毫無防禦能力的本地鳥類。情景中不涉及其他成因。")
      },
      {
        id: "a4-2-q13", type: "mcq", ahl: false, difficulty: 2, ref: "A4.2.7", paper: "1A",
        stem: L("Which of these is an example of ex situ conservation?", "次のうち、生息域外保全の例はどれか。", "以下哪個是非原地保育的例子？"),
        options: [L("Controlling invasive plants inside a national park", "国立公園内での外来植物の駆除", "在國家公園內控制入侵植物"), L("Freezing seeds of endangered plants in a seed bank", "絶滅危惧植物の種子を種子バンクで凍結保存する", "把瀕危植物的種子冷凍貯存在種子庫"), L("Reintroducing wolves to restore a natural ecosystem", "自然の生態系を回復させるためにオオカミを再導入する", "重新引入狼以恢復天然生態系統"), L("Banning hunting in a nature reserve", "自然保護区での狩猟を禁止する", "在自然保護區內禁止狩獵")],
        answer: 1,
        explanation: L("A seed bank stores genetic material outside the natural habitat. A, C and D all protect species or ecosystems in their natural habitat (in situ; C is rewilding).", "種子バンクは自然の生息地の外で遺伝物質を保存します。A、C、Dはいずれも自然の生息地で種や生態系を守るもの（生息域内。Cは再野生化）です。", "種子庫在天然生境之外貯存遺傳物質。A、C、D 都是在天然生境中保護物種或生態系統（原地；C 是重新野化）。")
      },
      {
        id: "a4-2-q14", type: "match", ahl: false, difficulty: 1, ref: "A4.2.7", paper: "1A",
        stem: L("Match each conservation approach to its description.", "各保全方法を説明と結び付けよ。", "把每種保育方法配對其說明。"),
        pairs: [
          { left: L("In situ conservation", "生息域内保全", "原地保育"), right: L("Protecting species in their natural habitat, e.g. managing a nature reserve", "自然保護区の管理など、自然の生息地で種を守ること", "在天然生境中保護物種，例如管理自然保護區") },
          { left: L("Ex situ conservation", "生息域外保全", "非原地保育"), right: L("Protecting species outside their habitat, e.g. in zoos and botanic gardens", "動物園や植物園など、生息地の外で種を守ること", "在生境之外保護物種，例如在動物園和植物園") },
          { left: L("Rewilding", "再野生化", "重新野化"), right: L("Restoring an area to a more natural state, e.g. reintroducing missing species", "不在の種を再導入するなど、地域をより自然な状態に戻すこと", "使地區恢復較自然的狀態，例如重新引入已消失的物種") },
          { left: L("Germ plasm storage", "遺伝資源の保存", "種質貯存"), right: L("Keeping seeds or tissue alive in seed banks or tissue banks", "種子バンクや組織バンクで種子や組織を生きたまま保つこと", "在種子庫或組織庫中保存有活力的種子或組織") }
        ],
        explanation: L("These are the approaches the guide asks you to include; reclamation of degraded ecosystems is a fifth.", "ガイドが含めるよう求めている方法です。劣化した生態系の再生が五つ目です。", "這些是課程指引要求你包括的方法；復原退化的生態系統是第五種。")
      },
      {
        id: "a4-2-q15", type: "short", ahl: false, difficulty: 3, ref: "A4.2.7", paper: "2", commandTerm: "Discuss", marks: 4,
        stem: L("Discuss why several approaches to conservation are needed, rather than one.", "一つではなく複数の保全のアプローチが必要な理由を論述せよ (Discuss)。", "論述 (Discuss) 為何保育需要多種方法，而不是只用一種。"),
        markscheme: [
          L("No single approach is sufficient by itself; different species require different measures", "単独で十分なアプローチはなく、種によって必要な対策が異なる", "沒有單一方法本身足夠；不同物種需要不同措施"),
          L("In situ conservation / reserves protect whole ecosystems and interactions, but need land and management", "生息域内保全／保護区は生態系全体と相互作用を守るが、土地と管理が必要", "原地保育／保護區保護整個生態系統及其相互作用，但需要土地和管理"),
          L("Ex situ (zoos, botanic gardens) can breed species whose habitat is lost or save very rare species, but populations may lose genetic diversity or adapt to captivity", "生息域外（動物園、植物園）は、生息地を失った種や非常に希少な種を繁殖させられるが、遺伝的多様性を失ったり飼育環境に適応したりする恐れがある", "非原地（動物園、植物園）可繁殖生境已喪失的物種或拯救極稀有物種，但種羣可能失去遺傳多樣性或適應圈養環境"),
          L("Seed/tissue banks store genetic diversity cheaply in little space but cannot protect habitats; rewilding/reclamation restore damaged ecosystems", "種子・組織バンクは小さな場所に安く遺伝的多様性を保存できるが生息地は守れない。再野生化・再生は損なわれた生態系を回復させる", "種子／組織庫能以低成本和小空間貯存遺傳多樣性，但不能保護生境；重新野化／復原則恢復受損生態系統")
        ],
        modelAnswer: L("Different species need different measures, so no single approach is enough. Reserves protect whole ecosystems in situ but need land and management. Zoos and botanic gardens can breed species that have lost their habitat, but captive populations may lose genetic diversity. Seed and tissue banks store genetic material cheaply but cannot protect habitat, and rewilding or reclamation restores damaged ecosystems. Used together, they cover each other's weaknesses.", "種によって必要な対策が異なるので、単独のアプローチでは足りない。保護区は生態系全体を生息域内で守るが、土地と管理が必要である。動物園や植物園は生息地を失った種を繁殖させられるが、飼育個体群は遺伝的多様性を失うことがある。種子・組織バンクは遺伝物質を安く保存できるが生息地は守れず、再野生化や再生は損なわれた生態系を回復させる。組み合わせることで互いの弱点を補う。", "不同物種需要不同措施，所以單一方法並不足夠。保護區在原地保護整個生態系統，但需要土地和管理。動物園和植物園可繁殖失去生境的物種，但圈養種羣可能失去遺傳多樣性。種子和組織庫能低成本貯存遺傳物質，但不能保護生境；重新野化或復原則恢復受損生態系統。配合使用可以互補各自的弱點。")
      },
      {
        id: "a4-2-q16", type: "short", ahl: false, difficulty: 2, ref: "A4.2.8", paper: "2", commandTerm: "Explain", marks: 3,
        stem: L("Explain the rationale for focusing conservation efforts on EDGE species.", "EDGE 種に保全の努力を集中させる根拠を説明せよ (Explain)。", "解釋 (Explain) 為何要把保育工作集中在 EDGE 物種上。"),
        markscheme: [
          L("EDGE = evolutionarily distinct (few close relatives) and globally endangered (high risk of extinction)", "EDGE ＝進化的に独特（近縁種が少ない）かつ地球規模で絶滅の危機にある（絶滅の危険が高い）", "EDGE = 進化獨特（近親很少）且全球瀕危（滅絕風險高）"),
          L("Losing such a species would remove a unique branch of the tree of life / unique genetic diversity for ever", "そのような種を失うと、系統樹の独自の枝／独自の遺伝的多様性が永久に失われる", "失去這類物種，會令生命之樹的獨特分支／獨特的遺傳多樣性永遠消失"),
          L("Resources are limited, so targeting these species saves the most evolutionary history/biodiversity per unit of effort", "資源は限られているので、これらの種に絞ると、努力あたりで最も多くの進化の歴史／生物多様性を守れる", "資源有限，所以針對這些物種，每單位努力可保住最多的進化歷史／生物多樣性")
        ],
        modelAnswer: L("EDGE species are evolutionarily distinct, with few close relatives, and globally endangered. If one goes extinct, a unique branch of the tree of life and its genetic diversity is lost for ever. Since money and time are limited, focusing on these species saves the most evolutionary history for the effort spent.", "EDGE 種は進化的に独特で近縁種が少なく、地球規模で絶滅の危機にある。絶滅すると、系統樹の独自の枝とその遺伝的多様性が永久に失われる。お金と時間は限られているので、これらの種に集中すれば、努力に対して最も多くの進化の歴史を守れる。", "EDGE 物種在進化上獨特，近親很少，並且全球瀕危。若其中一個滅絕，生命之樹上獨特的分支及其遺傳多樣性便永遠消失。由於金錢和時間有限，集中處理這些物種，可以用所花的努力保住最多的進化歷史。")
      },
      {
        id: "a4-2-q17", type: "mcq", ahl: false, difficulty: 2, ref: "A4.2.8", paper: "1A",
        stem: L("Species A, B and D below are critically endangered. Which one would the EDGE programme most likely give the highest priority?", "以下の種A、B、Dは深刻な絶滅の危機にある。EDGE 計画が最も高い優先順位を与える可能性が高いのはどれか。", "以下物種 A、B 和 D 都是極危。EDGE 計劃最有可能給予哪一個最高優先？"),
        options: [L("A species in a genus with 20 other similar species", "他に20種の似た種がいる属の一種", "屬內有另外 20 個相似物種的一個物種"), L("The only living species in its family, with no close relatives", "近縁種がなく、その科で唯一の現生種", "在其科中唯一現存、沒有近親的物種"), L("A common species that is not threatened", "絶滅の危機にない普通種", "不受威脅的常見物種"), L("A species with many close relatives that are also common", "近縁種が多く、それらも普通種である種", "有許多近親、而近親也很常見的物種")],
        answer: 1,
        explanation: L("EDGE combines evolutionary distinctiveness and endangerment. B is both. A and D are endangered but have many close relatives, so less evolutionary history would be lost. C is not threatened.", "EDGE は進化的な独自性と絶滅の危機を組み合わせます。Bは両方を満たします。AとDは危機にあるものの近縁種が多く、失われる進化の歴史は少なくなります。Cは危機にありません。", "EDGE 結合進化獨特性和瀕危程度。B 兩者兼備。A 和 D 瀕危但有許多近親，所失去的進化歷史較少；C 不受威脅。")
      },
      {
        id: "a4-2-q18", type: "short", ahl: false, difficulty: 3, ref: "A4.2.8", paper: "2", commandTerm: "Discuss", marks: 4,
        stem: L("A conservation group has money to save only one of two species: a large, popular mammal that is not evolutionarily distinct, or a small, unattractive reptile that is evolutionarily distinct and equally endangered. Discuss the issues involved in deciding which to prioritize.", "ある保全団体は、二種のうち一種しか救う資金がない。進化的に独特ではない大型の人気のある哺乳類か、進化的に独特で同じくらい絶滅の危機にある、小さく見栄えのしない爬虫類である。どちらを優先するかを決めるときの問題点を論述せよ (Discuss)。", "一個保育團體只有足夠金錢拯救兩個物種之一：一種在進化上並不獨特、體型大而受歡迎的哺乳動物，或一種在進化上獨特、同樣瀕危而細小不起眼的爬行動物。論述 (Discuss) 決定優先保育哪一個時所涉及的問題。"),
        markscheme: [
          L("Evolutionary argument: the distinct reptile represents a unique lineage/genetic diversity that would be lost for ever", "進化の観点：独特な爬虫類は独自の系統／遺伝的多様性を代表し、それが永久に失われる", "進化論點：獨特的爬行動物代表獨特的譜系／遺傳多樣性，會永遠消失"),
          L("Social/economic argument: the popular mammal may attract more donations/public support and ecotourism income", "社会的・経済的観点：人気のある哺乳類は、より多くの寄付、市民の支持、エコツーリズムの収入を呼ぶかもしれない", "社會／經濟論點：受歡迎的哺乳動物可能吸引更多捐款／公眾支持和生態旅遊收入"),
          L("Environmental argument: the role of each species in its ecosystem (e.g. a large mammal's effect on habitat) should be considered", "環境の観点：各種が生態系で果たす役割（たとえば大型哺乳類が生息地に与える影響）を考慮すべき", "環境論點：應考慮每個物種在其生態系統中的作用（例如大型哺乳動物對生境的影響）"),
          L("There are ethical, cultural and political implications, so the decision needs debate with local people and experts; no single answer is correct", "倫理的、文化的、政治的な意味があるので、地域の人々や専門家との議論が必要で、唯一の正解はない", "涉及倫理、文化和政治含意，所以需要與當地居民和專家辯論；沒有唯一正確的答案")
        ],
        modelAnswer: L("The reptile is evolutionarily distinct, so its loss would remove a unique part of the tree of life, which supports saving it. The popular mammal might attract more public support and tourism money, and may be important in its habitat. There are also ethical, cultural, political and economic implications, such as the views of local communities. So the decision needs debate, and there is no single right answer.", "爬虫類は進化的に独特なので、失うと系統樹の独自の部分が失われ、救うことを支持する根拠になる。人気のある哺乳類は市民の支持や観光収入を集めるかもしれず、生息地で重要な役割をもつこともある。地域社会の意見など、倫理的、文化的、政治的、経済的な意味もある。したがって決定には議論が必要で、唯一の正解はない。", "爬行動物在進化上獨特，所以失去牠會令生命之樹失去獨特的一部分，這支持拯救牠。受歡迎的哺乳動物可能吸引更多公眾支持和旅遊收入，也可能在其生境中很重要。此外還有倫理、文化、政治和經濟含意，例如當地社區的意見。所以這個決定需要辯論，沒有唯一正確的答案。")
      },
      {"id":"a4-2-q19","type":"mcq","ahl":false,"difficulty":3,"ref":"A4.2.1","paper":"1B","stem":{"en":"The table shows the number of individuals of four species of beetle in two woodland sites (sample data). Which statement is correct?","ja":"表は、二つの森林地での四種の甲虫の個体数を示す（サンプルデータ）。正しい記述はどれか。","zh":"下表顯示兩個林地中四種甲蟲的個體數目（樣本數據）。哪項陳述正確？"},"data":{"en":"<table><tr><th>Species</th><th>Site 1</th><th>Site 2</th></tr><tr><td>A</td><td>24</td><td>85</td></tr><tr><td>B</td><td>26</td><td>5</td></tr><tr><td>C</td><td>25</td><td>6</td></tr><tr><td>D</td><td>25</td><td>4</td></tr></table>","ja":"<table><tr><th>種</th><th>地点1</th><th>地点2</th></tr><tr><td>A</td><td>24</td><td>85</td></tr><tr><td>B</td><td>26</td><td>5</td></tr><tr><td>C</td><td>25</td><td>6</td></tr><tr><td>D</td><td>25</td><td>4</td></tr></table>","zh":"<table><tr><th>物種</th><th>地點 1</th><th>地點 2</th></tr><tr><td>A</td><td>24</td><td>85</td></tr><tr><td>B</td><td>26</td><td>5</td></tr><tr><td>C</td><td>25</td><td>6</td></tr><tr><td>D</td><td>25</td><td>4</td></tr></table>"},"options":[{"en":"Site 2 has higher species richness than Site 1","ja":"地点2は地点1より種の豊富さが高い","zh":"地點 2 的物種豐富度比地點 1 高"},{"en":"Both sites have the same species richness, but Site 1 has higher evenness","ja":"両地点の種の豊富さは同じだが、地点1のほうが均等度が高い","zh":"兩個地點的物種豐富度相同，但地點 1 的均勻度較高"},{"en":"Both sites have the same species richness and the same evenness","ja":"両地点の種の豊富さも均等度も同じである","zh":"兩個地點的物種豐富度和均勻度都相同"},{"en":"Site 1 has lower species richness but higher genetic diversity","ja":"地点1は種の豊富さは低いが遺伝的多様性は高い","zh":"地點 1 的物種豐富度較低，但遺傳多樣性較高"}],"answer":1,"explanation":{"en":"Each site has four species, so richness is the same (A is wrong). Site 1 has similar numbers of each species (24 to 26), while Site 2 is dominated by species A (85 of 100), so Site 1 has higher evenness (B). C is wrong for that reason. The data say nothing about genetic diversity (D).","ja":"どちらの地点も四種なので豊富さは同じ（Aは誤り）。地点1は各種の個体数が似ており（24〜26）、地点2は種Aが支配的（100のうち85）なので、地点1のほうが均等度が高い（B）。そのためCは誤り。データは遺伝的多様性については何も示していない（D）。","zh":"兩個地點都有四個物種，所以豐富度相同（A 錯）。地點 1 各物種數量相近（24 至 26），而地點 2 由物種 A 主導（100 中佔 85），所以地點 1 的均勻度較高（B）。因此 C 錯。數據沒有顯示遺傳多樣性（D）。"}},
      {"id":"a4-2-q20","type":"short","ahl":false,"difficulty":3,"ref":"A4.2.7","paper":"2","commandTerm":"Suggest","marks":3,"stem":{"en":"A frog species survives in the wild only in one small forest that is being cleared. Twelve frogs are taken into a breeding programme at a zoo. Suggest three limitations of relying only on this ex situ approach.","ja":"あるカエルは野生では一つの小さな森にしか生き残っておらず、その森は開墾されつつある。12匹が動物園の繁殖計画に取り込まれた。この生息域外の方法だけに頼ることの限界を三つ示せ (Suggest)。","zh":"某種蛙在野外只生存於一片正被清除的小森林中。十二隻蛙被送入動物園的繁殖計劃。提出 (Suggest) 只依賴這種非原地方法的三項局限。"},"markscheme":[{"en":"Only 12 founders, so the captive population has low genetic diversity / inbreeding","ja":"創始個体は12匹だけなので、飼育個体群の遺伝的多様性が低く、近親交配が起こる","zh":"只有 12 隻奠基個體，所以圈養種羣遺傳多樣性低／出現近親繁殖"},{"en":"Frogs may adapt to captivity (or lose natural behaviours), so may survive poorly when released","ja":"カエルが飼育環境に適応したり、自然な行動を失ったりして、放しても生き残りにくいかもしれない","zh":"蛙可能適應了圈養環境（或失去自然行為），放回野外後可能難以存活"},{"en":"If the forest is cleared there is no natural habitat to release them into, so the problem is not solved","ja":"森が開墾されると放す自然の生息地がなくなり、問題は解決しない","zh":"若森林被清除，就沒有天然生境可供放回，問題沒有解決"},{"en":"Zoo space and money are limited / the species is removed from its ecosystem and interactions","ja":"動物園の空間とお金には限りがある／種が生態系とその相互作用から切り離される","zh":"動物園的空間和資金有限／物種脫離了其生態系統和相互作用"}],"modelAnswer":{"en":"Twelve founders give a small gene pool, so genetic diversity falls and inbreeding is likely. The frogs may adapt to captivity and cope poorly when released. If the forest is cleared there is no habitat left to release them into, so habitat protection (in situ) is also needed.","ja":"創始個体12匹では遺伝子プールが小さく、遺伝的多様性が下がり近親交配が起こりやすい。飼育環境に適応して、放したときにうまく対応できないかもしれない。森が開墾されれば放す生息地が残らないので、生息地の保護（生息域内）も必要である。","zh":"十二隻奠基個體的基因庫很小，遺傳多樣性下降，容易出現近親繁殖。蛙可能適應圈養環境，放回後難以應付。若森林被清除，就沒有生境可供放回，所以也需要保護生境（原地）。"}},
      {"id":"a4-2-q21","type":"short","ahl":false,"difficulty":2,"ref":"A4.2.7","paper":"2","commandTerm":"Compare and contrast","marks":4,"stem":{"en":"Compare and contrast in situ and ex situ conservation.","ja":"生息域内保全と生息域外保全を比較対照せよ (Compare and contrast)。","zh":"比較及對比 (Compare and contrast) 原地保育與非原地保育。"},"markscheme":[{"en":"Similarity: both aim to prevent extinction / preserve species and their genetic diversity","ja":"共通点：どちらも絶滅を防ぎ、種とその遺伝的多様性を守ることを目的とする","zh":"相同：兩者都旨在防止滅絕／保存物種及其遺傳多樣性"},{"en":"Difference: in situ protects species in their natural habitat; ex situ protects them outside it (zoos, botanic gardens, seed or tissue banks)","ja":"相違点：生息域内は自然の生息地で、生息域外はその外（動物園、植物園、種子・組織バンク）で保護する","zh":"差異：原地在天然生境中保護物種；非原地在其外（動物園、植物園、種子或組織庫）保護"},{"en":"In situ keeps species within their ecosystem and interactions and protects many species at once; ex situ protects only the chosen species","ja":"生息域内は種を生態系と相互作用の中に保ち、一度に多くの種を守る。生息域外は選んだ種だけを守る","zh":"原地使物種留在其生態系統和相互作用之中，同時保護許多物種；非原地只保護所選的物種"},{"en":"Ex situ can save species whose habitat is already lost and allows captive breeding for release, but populations may lose genetic diversity or adapt to captivity; in situ needs large areas and management","ja":"生息域外は、生息地をすでに失った種を救い、放すための飼育下繁殖ができるが、遺伝的多様性の喪失や飼育への適応が起こり得る。生息域内は広い土地と管理が必要","zh":"非原地可拯救生境已喪失的物種，並可人工繁殖以便放回，但種羣可能失去遺傳多樣性或適應圈養；原地需要大片土地和管理"}],"modelAnswer":{"en":"Both aim to prevent extinction and preserve genetic diversity. In situ conservation protects species in their natural habitat, so they stay in their ecosystem and many species are protected together, but it needs large areas and management. Ex situ conservation protects chosen species in zoos, botanic gardens or banks, which can save species whose habitat is lost, but captive populations may lose genetic diversity or adapt to captivity.","ja":"どちらも絶滅を防ぎ、遺伝的多様性を守ることを目的とする。生息域内保全は種を自然の生息地で守るので、種は生態系の中にとどまり多くの種が一緒に守られるが、広い土地と管理が必要である。生息域外保全は選んだ種を動物園、植物園、バンクで守り、生息地を失った種を救えるが、飼育個体群は遺伝的多様性を失ったり飼育環境に適応したりする。","zh":"兩者都旨在防止滅絕和保存遺傳多樣性。原地保育在天然生境中保護物種，物種留在其生態系統內，並同時保護許多物種，但需要大片土地和管理。非原地保育在動物園、植物園或種質庫保護所選的物種，可拯救生境已喪失的物種，但圈養種羣可能失去遺傳多樣性或適應圈養環境。"}},
      {"id":"a4-2-q22","type":"short","ahl":false,"difficulty":3,"ref":"A4.2.6","paper":"1B","commandTerm":"Calculate","marks":4,"stem":{"en":"A lake was surveyed with the same method in 1990 and 2020 (sample data). (a) Calculate the percentage change in the total number of native fish. (b) Suggest which cause of the biodiversity crisis the data best support, and give one reason. (c) State one reason why the data alone do not prove this cause.","ja":"ある湖を、1990年と2020年に同じ方法で調査した（サンプルデータ）。(a) 在来魚の総数の変化率（％）を計算せよ (Calculate)。(b) データが最もよく支持する生物多様性の危機の原因を示し (Suggest)、理由を一つ挙げよ。(c) データだけではこの原因が証明されない理由を一つ述べよ (State)。","zh":"一個湖泊在 1990 年和 2020 年用相同方法進行了調查（樣本數據）。(a) 計算 (Calculate) 本地魚類總數的百分比變化。(b) 提出 (Suggest) 數據最能支持的生物多樣性危機成因，並給出一個理由。(c) 說明 (State) 為何單憑這些數據不能證明該成因。"},"data":{"en":"<table><tr><th>Fish species</th><th>1990</th><th>2020</th></tr><tr><td>Native perch</td><td>400</td><td>60</td></tr><tr><td>Native roach</td><td>300</td><td>90</td></tr><tr><td>Predatory fish (introduced from another continent)</td><td>0</td><td>500</td></tr></table>","ja":"<table><tr><th>魚の種</th><th>1990年</th><th>2020年</th></tr><tr><td>在来のパーチ</td><td>400</td><td>60</td></tr><tr><td>在来のローチ</td><td>300</td><td>90</td></tr><tr><td>肉食魚（他の大陸から導入）</td><td>0</td><td>500</td></tr></table>","zh":"<table><tr><th>魚類物種</th><th>1990 年</th><th>2020 年</th></tr><tr><td>本地鱸魚</td><td>400</td><td>60</td></tr><tr><td>本地擬鯉</td><td>300</td><td>90</td></tr><tr><td>肉食魚（從另一大陸引入）</td><td>0</td><td>500</td></tr></table>"},"markscheme":[{"en":"(a) Native total 700 in 1990 and 150 in 2020","ja":"(a) 在来魚の合計は1990年が700、2020年が150","zh":"(a) 本地魚類總數：1990 年 700，2020 年 150"},{"en":"(a) (150 − 700) ÷ 700 × 100 = −78.6% (a fall of about 79%)","ja":"(a) (150 − 700) ÷ 700 × 100 = −78.6％（約79％の減少）","zh":"(a) (150 − 700) ÷ 700 × 100 = −78.6%（減少約 79%）"},{"en":"(b) Spread of invasive alien species: the introduced predator appears and increases as the natives fall, so it may prey on or outcompete them","ja":"(b) 外来種の拡散：導入された肉食魚が現れて増え、在来魚が減っており、捕食や競争の影響が考えられる","zh":"(b) 外來入侵物種的擴散：引入的肉食魚出現並增加，而本地魚減少，可能捕食或擊敗本地魚"},{"en":"(c) Correlation is not proof of cause: another factor (e.g. pollution, over-fishing) may have contributed","ja":"(c) 相関は原因の証明ではない。汚染や乱獲など別の要因が関わった可能性がある","zh":"(c) 相關不等於因果：其他因素（例如污染、過度捕撈）可能也有影響"}],"modelAnswer":{"en":"(a) Native fish fell from 700 to 150, so the change is (150 − 700) ÷ 700 × 100 = −78.6%. (b) The spread of an invasive alien species: the introduced predator rose from 0 to 500 as the natives fell, so it may be eating or outcompeting them. (c) The data show a correlation, and other factors such as pollution could also have contributed.","ja":"(a) 在来魚は700から150に減ったので、変化率は (150 − 700) ÷ 700 × 100 = −78.6％。(b) 外来種の拡散：導入された肉食魚が0から500に増え、在来魚が減ったので、在来魚を食べたり競争で負かしたりしている可能性がある。(c) データは相関を示すだけで、汚染など他の要因も関わった可能性がある。","zh":"(a) 本地魚類由 700 減至 150，所以變化是 (150 − 700) ÷ 700 × 100 = −78.6%。(b) 外來入侵物種的擴散：引入的肉食魚由 0 增至 500，同時本地魚減少，所以可能正在捕食或擊敗本地魚。(c) 數據只顯示相關，污染等其他因素也可能有影響。"}}
    ]
  });
})();
