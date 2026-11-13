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
        heading: L("Causes of human-driven (anthropogenic) species extinction", "人間活動による種の絶滅の原因 (anthropogenic extinction)", "人類活動導致物種滅絕的原因 (anthropogenic extinction)"),
        body: L(
          `<p>"Anthropogenic" means caused by humans. We are in the <strong>sixth mass extinction</strong>, a period when species are going extinct much faster than normal because of human activity. (Five earlier mass extinctions had natural causes; you study the current one.) The guide asks for <strong>three or more brief case studies</strong>:</p>
<p><strong>1. North Island giant moa (<em>Dinornis novaezealandiae</em>), a loss of terrestrial megafauna.</strong> Moas were huge flightless birds of New Zealand. After people arrived (around the 13th century), moas were <strong>hunted for meat</strong> and their eggs were taken. Burning and clearing of forest and scrub also destroyed their <strong>habitat</strong>. Moas, which reproduced slowly, were extinct within a century or two.</p>
<p><strong>2. Caribbean monk seal (<em>Neomonachus tropicalis</em>), a loss of a marine species.</strong> The seals were <strong>hunted</strong> for their oil, meat and skins, and fishers killed them as competitors for fish. They were also disturbed on the beaches where they breed, and fewer breeding sites were left. The last reliable sighting was in the early 1950s and the species was declared extinct in 2008.</p>
<p><strong>3. One species from an area you know.</strong> Choose a species that has gone extinct locally or nationally, and summarise when it was lost and the causes. Ideas (you are free to choose another): the Japanese wolf in Japan (persecution and disease in the 19th and early 20th centuries); the baiji, or Yangtze river dolphin, in China (accidental capture in fishing gear, boat traffic and noise, dams, and pollution; none were found in a 2006 survey).</p>
<p><strong>Common patterns:</strong> over-exploitation (hunting or fishing), habitat destruction and slow breeding rates make species vulnerable. The causes are linked to the broader causes of the biodiversity crisis (see A4.2.6).</p>`,
          `<p>「人為的 (anthropogenic)」は人間が原因であることを意味します。現在は<strong>第六の大量絶滅</strong>の時代で、人間の活動のために、通常よりはるかに速く種が絶滅しています（それ以前の五回の大量絶滅は自然が原因で、学ぶのは現在のものです）。ガイドは<strong>三つ以上の簡単な事例研究</strong>を求めています。</p>
<p><strong>1. ニュージーランド北島のジャイアントモア (<em>Dinornis novaezealandiae</em>)：陸上の大型動物の消失。</strong>モアはニュージーランドの巨大な飛べない鳥でした。人間が到来した（13世紀ごろ）後、モアは<strong>肉のために狩られ</strong>、卵も採られました。森や低木林を焼き払って開くことで<strong>生息地</strong>も失われました。繁殖が遅いモアは、一、二世紀のうちに絶滅しました。</p>
<p><strong>2. カリブモンクアザラシ (<em>Neomonachus tropicalis</em>)：海洋生物の消失。</strong>アザラシは油、肉、皮のために<strong>狩られ</strong>、漁師も魚を巡る競争相手として殺しました。繁殖する海岸でも妨害され、繁殖地が減りました。最後の確実な目撃は1950年代初めで、2008年に絶滅が宣言されました。</p>
<p><strong>3. 身近な地域の一種。</strong>地域や国で絶滅した種を選び、いつ失われたか、その原因を要約します。例（他の種を選んでも構いません）：日本のニホンオオカミ（19世紀から20世紀初めの迫害と病気）、中国のヨウスコウカワイルカ (baiji)（漁具による混獲、船の往来と騒音、ダム、汚染。2006年の調査では見つからなかった）。</p>
<p><strong>共通のパターン：</strong>過剰な捕獲（狩猟や漁獲）、生息地の破壊、繁殖速度の遅さが、種を絶滅しやすくします。原因は、生物多様性の危機のより広い原因（A4.2.6）とつながっています。</p>`,
          `<p>「人為 (anthropogenic)」指由人類造成。我們正處於<strong>第六次大規模滅絕</strong>，即由於人類活動，物種滅絕速度遠高於正常水平的時期。（之前的五次大規模滅絕有自然成因；你學習的是目前這一次。）課程指引要求<strong>三個或以上簡短的個案研究</strong>：</p>
<p><strong>1. 北島巨型恐鳥 (moa，<em>Dinornis novaezealandiae</em>)：陸地大型動物的消失。</strong>恐鳥是新西蘭的巨型不能飛鳥類。人類到達（約 13 世紀）後，恐鳥被<strong>獵殺取肉</strong>，蛋也被拿走。焚燒和清除森林與灌叢亦破壞了牠們的<strong>生境</strong>。繁殖緩慢的恐鳥，在一兩個世紀內就滅絕了。</p>
<p><strong>2. 加勒比僧海豹 (Caribbean monk seal，<em>Neomonachus tropicalis</em>)：海洋物種的消失。</strong>海豹因為油脂、肉和皮被<strong>獵殺</strong>，漁民也因牠們與自己爭奪魚類而殺死牠們。牠們在繁殖的海灘也受到騷擾，可用的繁殖地減少。最後一次可靠的目擊記錄在 1950 年代初，該物種於 2008 年被宣布滅絕。</p>
<p><strong>3. 你所熟悉地區的一個物種。</strong>選擇一個在本地或本國滅絕的物種，概述它何時消失及其原因。想法（你也可自由選擇其他物種）：日本的日本狼（19 世紀至 20 世紀初的迫害和疾病）；中國的白鱀豚 (baiji，長江豚)（漁具誤捕、船隻往來與噪音、水壩和污染；2006 年的調查沒有找到）。</p>
<p><strong>共同規律：</strong>過度開發（狩獵或捕魚）、生境破壞和繁殖緩慢，令物種容易滅絕。這些原因與生物多樣性危機的更廣泛原因（A4.2.6）有關。</p>`
        ),
        examTip: L("Learn the key cause for each case study in one sentence (moa: hunting + habitat loss; monk seal: hunting). Either the common or scientific name is accepted.", "各事例の主な原因を一文で覚えましょう（モア：狩猟と生息地の消失、モンクアザラシ：狩猟）。一般名でも学名でも認められます。", "為每個個案記住一句主要原因（恐鳥：獵殺和生境喪失；僧海豹：獵殺）。可使用俗名或學名。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.2.4", ahl: false,
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
      L("You do not need to calculate diversity indices such as the Simpson index for A4.2 (it appears elsewhere in the skills list); know richness and evenness as ideas.", "A4.2 のためにシンプソン指数などの多様度指数を計算する必要はありません（技能の一覧には別の箇所で登場します）。豊富さと均等度は概念として知っていれば十分です。", "A4.2 不需要計算辛普森指數等多樣性指數（它在技能清單的其他部分出現）；把豐富度和均勻度當作概念認識便可。"),
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
    questions: []
  });
})();
