/* A3.2 Classification and cladistics — AHL only */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  /* Draws a simple rectangular cladogram as inline SVG.
     tree: nested arrays, strings are tips, e.g. [["A","B"],["C",["D","E"]]].
     opts.nodes: number the internal nodes (root = 1, then pre-order). */
  function treeSvg(tree, opts) {
    opts = opts || {};
    let leaves = 0, nid = 0;
    const ht = (n) => (typeof n === "string" ? 0 : 1 + Math.max.apply(null, n.map(ht)));
    const H = ht(tree);
    const dx = Math.min(60, 130 / H);
    const lay = (n) => {
      if (typeof n === "string") return { leaf: n, h: 0, y: 20 + 26 * leaves++ };
      const nd = { id: ++nid };
      nd.kids = n.map(lay);
      nd.h = 1 + Math.max.apply(null, nd.kids.map((k) => k.h));
      nd.y = (nd.kids[0].y + nd.kids[nd.kids.length - 1].y) / 2;
      return nd;
    };
    const root = lay(tree);
    const X = (n) => 24 + (H - n.h) * dx;
    let out = "";
    const draw = (n) => {
      if (n.leaf) {
        out += `<text x="${X(n) + 6}" y="${n.y + 5}" font-size="15" font-weight="600" fill="var(--ink,#111)">${n.leaf}</text>`;
        return;
      }
      const x = X(n);
      out += `<line x1="${x}" y1="${n.kids[0].y}" x2="${x}" y2="${n.kids[n.kids.length - 1].y}" stroke="var(--ink,#111)" stroke-width="2"/>`;
      n.kids.forEach((k) => {
        out += `<line x1="${x}" y1="${k.y}" x2="${X(k)}" y2="${k.y}" stroke="var(--ink,#111)" stroke-width="2"/>`;
        draw(k);
      });
      if (opts.nodes) {
        out += `<circle cx="${x}" cy="${n.y}" r="9" fill="var(--surface,#fff)" stroke="var(--accent,#2547c7)" stroke-width="2"/><text x="${x}" y="${n.y + 4}" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink,#111)">${n.id}</text>`;
      }
    };
    out += `<line x1="6" y1="${root.y}" x2="${X(root)}" y2="${root.y}" stroke="var(--ink,#111)" stroke-width="2"/>`;
    draw(root);
    const w = 24 + H * dx + 40;
    const h = 20 + 26 * leaves;
    return `<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:${Math.round(w * 0.95)}px" role="img" aria-label="cladogram">${out}</svg>`;
  }

  IB.registerTopic({
    id: "A3.2",
    slug: "a3-2",
    theme: "A",
    level: 3,
    ahlOnly: true,
    title: L("Classification and cladistics", "分類と分岐学", "分類與支序學"),
    guidingQuestions: [
      L("What tools are used to classify organisms into taxonomic groups?", "生物を分類群に分けるためにどのような道具が使われるか。", "有哪些工具用來把生物分類為分類羣？"),
      L("How do cladistic methods differ from traditional taxonomic methods?", "分岐学的な方法は伝統的な分類学の方法とどう違うか。", "支序學的方法與傳統分類學的方法有何不同？")
    ],
    summary: L(
      "This is an AHL-only subtopic. Classification puts the huge diversity of species into groups. The traditional ranked hierarchy does not always match evolutionary history, so biologists now use cladistics: unranked clades built from DNA and protein sequence data and drawn as cladograms. Sequence evidence also led to the three-domain system.",
      "これは AHL のみの小項目です。分類は膨大な種の多様性をグループに整理します。伝統的な階級のある階層は進化の歴史と一致しないことがあるため、現在の生物学者は分岐学を使います。DNA やタンパク質の配列データからランクのないクレードを作り、分岐図で表します。配列の証拠は三ドメイン説にもつながりました。",
      "這是只屬於 AHL 的小節。分類把龐大的物種多樣性整理成組。傳統的分級階層並不總是與進化歷史相符，所以生物學家現在使用支序學：由 DNA 和蛋白質序列資料建立不分等級的演化支 (clade)，並以支序圖表示。序列證據也促成了三域系統。"
    ),
    sections: [
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.1", ahl: true,
        deeper: {"en":"<p><strong>What classification is used for in practice</strong></p>\n<ul>\n<li><strong>Naming and communication:</strong> every species has one two-part (binomial) name used worldwide, so scientists in different countries know they mean the same organism.</li>\n<li><strong>Identification:</strong> keys and databases are built on groups, so an unknown organism can be placed step by step.</li>\n<li><strong>Prediction:</strong> if a new plant is placed in a family whose members make a useful or toxic chemical, researchers know where to look first for a similar chemical.</li>\n<li><strong>Efficient research:</strong> a few representative species can stand for a whole group (model organisms), instead of studying millions of species one by one.</li>\n</ul>\n<p><strong>Mark-scheme language.</strong> Marks go for <em>immense diversity</em> (so grouping is needed) linked to <em>makes further study easier</em> by prediction or by using representatives. \"To make species easier to remember\" is too vague to score.</p>","ja":"<p><strong>分類が実際に何の役に立つか</strong></p>\n<ul>\n<li><strong>命名と情報の共有 (communication)：</strong>どの種にも世界共通の二名式の名前があり、国が違っても同じ生物を指していると分かります。</li>\n<li><strong>同定 (identification)：</strong>検索表やデータベースはグループに基づいて作られ、未知の生物を段階的に位置づけられます。</li>\n<li><strong>予測 (prediction)：</strong>新しく見つかった植物が、有用または有毒な物質をつくる科に入れば、似た物質を探すべき場所が分かります。</li>\n<li><strong>効率的な研究：</strong>何百万もの種を一つずつ調べる代わりに、代表的な数種（モデル生物）でグループ全体を代表させられます。</li>\n</ul>\n<p><strong>採点のことば。</strong>得点になるのは、<em>種の多様性が非常に大きい</em>（だからグループ分けが必要）と、<em>その後の研究が進めやすい</em>（予測や代表種の利用）を結びつけた説明です。「種を覚えやすくするため」では曖昧で得点になりません。</p>","zh":"<p><strong>分類在實際上有甚麼用</strong></p>\n<ul>\n<li><strong>命名與溝通 (communication)：</strong>每個物種都有全球通用的雙名（二名法）名稱，不同國家的科學家都知道指的是同一種生物。</li>\n<li><strong>鑑定 (identification)：</strong>檢索表和資料庫是以類羣為基礎建立的，所以可以逐步把未知生物定位。</li>\n<li><strong>預測 (prediction)：</strong>如果新發現的植物被歸入某個科，而該科成員會製造有用或有毒的化學物質，研究人員就知道應先在哪裏尋找類似物質。</li>\n<li><strong>有效率的研究：</strong>可以用幾個有代表性的物種（模式生物）代表整個類羣，而不必逐一研究數百萬個物種。</li>\n</ul>\n<p><strong>評分用語。</strong>得分在於把<em>物種多樣性極大</em>（所以需要分組）與<em>令進一步研究更容易</em>（透過預測或使用代表物種）連起來。「令物種容易記住」太含糊，不能得分。</p>"},
        heading: L("Why we need classification", "なぜ分類が必要か (classification)", "為何需要分類 (classification)"),
        body: L(
          `<p><strong>Classification</strong> means sorting organisms into groups. It is needed because of the <strong>immense diversity of species</strong>: millions of species are known and many more are still undiscovered. Without a system, we could not name, find or talk about them.</p>
<p>Once classification has been done, it <strong>makes further study easier</strong>. For example, a scientist can study a few representative species of a group instead of every species, can predict that a newly found organism shares traits with its group, and can search the right group when looking for a useful chemical.</p>`,
          `<p><strong>分類 (classification)</strong> とは生物をグループに分けることです。<strong>種の多様性が非常に大きい</strong>ため、分類が必要です。知られている種は数百万種で、まだ発見されていない種はさらに多くあります。体系がなければ、名前を付けたり、探したり、話題にしたりできません。</p>
<p>分類ができると、<strong>その後の研究が進めやすく</strong>なります。たとえば、全種ではなくグループの代表的な数種を調べればよく、新しく見つかった生物がそのグループと形質を共有すると予測でき、有用な物質を探すときに調べるグループを決められます。</p>`,
          `<p><strong>分類 (classification)</strong> 是把生物分成組別。由於<strong>物種的多樣性極大</strong>，我們需要分類：已知的物種有數百萬種，還有更多尚未發現。沒有系統，就無法為牠們命名、尋找或討論。</p>
<p>完成分類後，<strong>更廣泛的研究變得更容易</strong>。例如科學家可以只研究一個類羣中幾個有代表性的物種，而不必研究每一個物種；可以預測新發現的生物與其類羣有共同性狀；也可以在尋找有用化學物質時選對類羣。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.2", ahl: true,
        deeper: {"en":"<p><strong>The ranks in action.</strong> A human is classified as:</p>\n<table><tr><th>Rank</th><th>Human</th></tr><tr><td>Kingdom</td><td>Animalia</td></tr><tr><td>Phylum</td><td>Chordata</td></tr><tr><td>Class</td><td>Mammalia</td></tr><tr><td>Order</td><td>Primates</td></tr><tr><td>Family</td><td>Hominidae</td></tr><tr><td>Genus</td><td><em>Homo</em></td></tr><tr><td>Species</td><td><em>Homo sapiens</em></td></tr></table>\n<p><strong>Why the ranks can mislead.</strong></p>\n<ul>\n<li><em>Same rank, different age.</em> Two \"families\" are not equally old or equally different. The rank label gives no information about when the group split from its relatives.</li>\n<li><em>Groups that leave out descendants.</em> Crocodiles share a more recent common ancestor with birds than they do with lizards. A traditional class Reptilia (lizards, snakes, turtles, crocodiles) leaves birds out, so it does not contain all the descendants of its own common ancestor.</li>\n<li><em>No natural cut-off.</em> Variation is continuous, so deciding where \"family\" ends is a human choice.</li>\n</ul>\n<p><strong>Mark-scheme language (4-mark \"explain why the hierarchy is a problem\").</strong> Give: (1) the hierarchy does not always match evolutionary divergence; (2) same-rank groups may have diverged at very different times; (3) some taxa exclude descendants of the common ancestor, with the reptile-and-bird example; (4) ranks are arbitrary, so cladistics uses unranked clades.</p>","ja":"<p><strong>階級の実例。</strong>ヒトは次のように分類されます。</p>\n<table><tr><th>階級</th><th>ヒト</th></tr><tr><td>界 (kingdom)</td><td>動物界 Animalia</td></tr><tr><td>門 (phylum)</td><td>脊索動物門 Chordata</td></tr><tr><td>綱 (class)</td><td>哺乳綱 Mammalia</td></tr><tr><td>目 (order)</td><td>霊長目 Primates</td></tr><tr><td>科 (family)</td><td>ヒト科 Hominidae</td></tr><tr><td>属 (genus)</td><td><em>Homo</em></td></tr><tr><td>種 (species)</td><td><em>Homo sapiens</em></td></tr></table>\n<p><strong>階級が誤解を生む理由。</strong></p>\n<ul>\n<li><em>同じ階級でも古さが違う。</em>二つの「科」が同じ古さ・同じ違いの大きさとは限りません。階級名は、そのグループが近縁群から分かれた時期について何も教えません。</li>\n<li><em>子孫を除外するグループ。</em>ワニは、トカゲよりも鳥類と新しい共通祖先を共有します。従来の爬虫綱（トカゲ、ヘビ、カメ、ワニ）は鳥類を含まないので、自分の共通祖先のすべての子孫を含んでいません。</li>\n<li><em>自然な区切りがない。</em>変異は連続的なので、「科」の終わりをどこにするかは人間の選択です。</li>\n</ul>\n<p><strong>採点のことば（「階層の問題点を説明せよ」4点）。</strong>(1) 階層は進化の分岐と必ずしも一致しない、(2) 同じ階級のグループが大きく異なる時期に分岐していることがある、(3) 共通祖先の子孫を除外する分類群がある（爬虫類と鳥類の例）、(4) 階級は恣意的なので、分岐学はランクのないクレード (clade) を使う。</p>","zh":"<p><strong>等級的實例。</strong>人類的分類如下：</p>\n<table><tr><th>等級</th><th>人類</th></tr><tr><td>界 (kingdom)</td><td>動物界 Animalia</td></tr><tr><td>門 (phylum)</td><td>脊索動物門 Chordata</td></tr><tr><td>綱 (class)</td><td>哺乳綱 Mammalia</td></tr><tr><td>目 (order)</td><td>靈長目 Primates</td></tr><tr><td>科 (family)</td><td>人科 Hominidae</td></tr><tr><td>屬 (genus)</td><td><em>Homo</em></td></tr><tr><td>種 (species)</td><td><em>Homo sapiens</em></td></tr></table>\n<p><strong>為何等級會誤導。</strong></p>\n<ul>\n<li><em>等級相同，歷史不同。</em>兩個「科」不一定同樣古老或差異同樣大。等級名稱沒有提供該類羣何時與近親分開的資料。</li>\n<li><em>排除後代的類羣。</em>鱷魚與鳥類共有的共同祖先，比與蜥蜴共有的更近。傳統的爬行綱（蜥蜴、蛇、龜、鱷魚）不包括鳥類，所以並未包含其共同祖先的所有後代。</li>\n<li><em>沒有天然的分界。</em>變異是連續的，「科」在哪裏結束是人為的決定。</li>\n</ul>\n<p><strong>評分用語（4 分「解釋階層的問題」）。</strong>(1) 階層並不總是與進化分歧相符；(2) 同一等級的類羣可能在非常不同的時間分歧；(3) 有些分類單元排除了共同祖先的後代，例如爬行動物與鳥類；(4) 等級是武斷的，所以支序學使用不分等級的演化支 (clade)。</p>"},
        heading: L("Problems with the traditional hierarchy of taxa", "伝統的な階層分類の問題点 (taxa)", "傳統分類階層的問題 (taxa)"),
        body: L(
          `<p>The traditional system sorts organisms into a <strong>hierarchy of taxa</strong> (a taxon is a named group). From the biggest group to the smallest the ranks are:</p>
<p style="text-align:center"><strong>kingdom → phylum → class → order → family → genus → species</strong></p>
<p>This hierarchy <strong>does not always match the patterns of divergence produced by evolution</strong>. Two groups given the same rank (for example two families) may have split from their relatives at very different times, and some traditional groups leave out descendants of their own common ancestor. (For example, the traditional class Reptilia leaves out birds, even though birds are descended from within the reptile lineage.)</p>
<div class="note"><strong>Nature of science.</strong> A fixed ranking of taxa is <strong>arbitrary</strong>: variation between organisms changes by degrees, with no natural cut-off points where "family" stops and "order" starts. <strong>Cladistics</strong> offers an alternative approach using <strong>unranked clades</strong>. Replacing a long-used idea with a new framework like this is an example of a <strong>paradigm shift</strong>, which sometimes happens in scientific theories.</div>`,
          `<p>伝統的な体系では、生物を<strong>分類階級 (taxa)</strong> の階層に分けます（タクソン taxon は名前の付いたグループ）。最大のグループから最小のグループへ、階級は次のとおりです。</p>
<p style="text-align:center"><strong>界 (kingdom) → 門 (phylum) → 綱 (class) → 目 (order) → 科 (family) → 属 (genus) → 種 (species)</strong></p>
<p>この階層は、<strong>進化で生じた分岐のパターンと必ずしも一致しません</strong>。同じ階級（たとえば二つの科）とされたグループが、近縁のグループから分かれた時期は大きく異なる場合があり、また従来のグループのなかには、共通祖先の子孫を一部除外しているものもあります（たとえば従来の爬虫綱は、鳥類が爬虫類の系統の中から進化したにもかかわらず、鳥類を含めません）。</p>
<div class="note"><strong>科学の本質。</strong>固定された階級づけは<strong>恣意的</strong>です。生物間の変異は連続的に変化し、「科」が終わって「目」が始まるという自然な区切りはありません。<strong>分岐学 (cladistics)</strong> は<strong>ランクのないクレード (clade)</strong> を使う別の方法を提供します。長く使われた考え方がこのように新しい枠組みに置き換わるのは、科学理論に時々起こる<strong>パラダイムシフト</strong>の例です。</div>`,
          `<p>傳統系統把生物分入<strong>分類階層 (taxa)</strong>（分類單元 taxon 是有名稱的組別）。由最大的組別到最小的組別，等級為：</p>
<p style="text-align:center"><strong>界 (kingdom) → 門 (phylum) → 綱 (class) → 目 (order) → 科 (family) → 屬 (genus) → 種 (species)</strong></p>
<p>這個階層<strong>並不總是與進化所產生的分歧規律相符</strong>。被定為同一等級的兩個類羣（例如兩個科），與其近親分開的時間可能相差很遠；而且有些傳統類羣把其共同祖先的部分後代排除在外。（例如傳統的爬行綱把鳥類排除在外，儘管鳥類是從爬行動物譜系之內演化出來的。）</p>
<div class="note"><strong>科學本質。</strong>固定的分級是<strong>武斷的</strong>：生物之間的變異是逐步改變的，並沒有天然的分界說明「科」在哪裏結束、「目」在哪裏開始。<strong>支序學 (cladistics)</strong> 提供另一種方法，使用<strong>不分等級的演化支 (clade)</strong>。以新的框架取代沿用已久的觀念，是科學理論中偶爾出現的<strong>範式轉移 (paradigm shift)</strong> 的例子。</div>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.3", ahl: true,
        deeper: {"en":"<p><strong>Using a prediction.</strong> Whales look like fish and live in the sea. A classification by ancestry places them in the mammal clade, so we can predict, before checking, that a whale breathes air, is warm-blooded, has hair at some stage and feeds its young on milk. Each prediction is correct. A classification based on habitat or body shape would have predicted none of them.</p>\n<p><strong>Why it is testable.</strong> A clade is a claim: \"these species all descend from one common ancestor\". New sequence data can support the claim or contradict it. If the claim fails, the grouping is changed (see A3.2.8).</p>\n<p><strong>A careful point.</strong> Predictions are probabilities, not guarantees. A trait shared within a clade may have been lost in some members (snakes have lost their legs, though other reptile clades have limbs). Say \"can be predicted\", not \"all members are identical\".</p>\n<p><strong>Mark-scheme language.</strong> Good answers say: members share a common ancestor; therefore they share inherited traits; therefore characteristics of one member (or of a new species placed in the group) can be predicted.</p>\n<p><strong>Links.</strong> Shared traits from common ancestry link to homologous structures (A4.1) and to the use of sequences in species identification (A3.1).</p>","ja":"<p><strong>予測の使い方。</strong>クジラは魚に似ていて海に住んでいます。祖先に基づく分類ではクジラは哺乳類のクレードに入るので、調べる前から、空気で呼吸する、恒温である、ある時期に体毛がある、乳で子を育てる、と予測できます。どの予測も当たります。生息場所や体形による分類では、どれも予測できませんでした。</p>\n<p><strong>検証できる理由。</strong>クレードは「これらの種はすべて一つの共通祖先の子孫である」という主張です。新しい配列データがこの主張を支持することも、否定することもあります。主張が成り立たなければ、グループは修正されます (A3.2.8 参照)。</p>\n<p><strong>注意点。</strong>予測は確率であって保証ではありません。クレード内で共有される形質も、一部の構成員では失われていることがあります（ヘビは脚を失いましたが、他の爬虫類のクレードには肢があります）。「全員が同じ」ではなく「予測できる」と書きましょう。</p>\n<p><strong>採点のことば。</strong>良い答えは、構成員が共通祖先をもつ → だから受け継いだ形質を共有する → だから一つの構成員（またはグループに入れた新種）の特徴を予測できる、という流れです。</p>\n<p><strong>つながり。</strong>共通祖先による形質の共有は、相同構造 (A4.1) や、種の識別での配列の利用 (A3.1) につながります。</p>","zh":"<p><strong>預測的運用。</strong>鯨魚外形像魚，生活在海中。按祖先關係分類，鯨魚屬於哺乳類演化支，所以我們在檢查之前就可以預測：鯨魚用肺呼吸、屬恆溫動物、在某個階段有毛髮、用乳汁哺育幼體。每一項預測都正確。若以棲息地或體形分類，則一項都預測不到。</p>\n<p><strong>為何可以測試。</strong>演化支是一個論斷：「這些物種全都來自同一個共同祖先」。新的序列數據可以支持這個論斷，也可以推翻它。如果論斷不成立，組別就要修改（見 A3.2.8）。</p>\n<p><strong>要小心的一點。</strong>預測是機率，不是保證。演化支內共有的性狀，在某些成員身上可能已經消失（蛇失去了四肢，但其他爬行動物支系仍有四肢）。要寫「可以預測」，而不是「所有成員都相同」。</p>\n<p><strong>評分用語。</strong>好的答案會說：成員有共同祖先；因此共有遺傳得來的性狀；因此可預測其中一個成員（或歸入該組的新物種）的特徵。</p>\n<p><strong>連結。</strong>由共同祖先而來的共有性狀，連繫到同源結構 (A4.1)，以及利用序列識別物種 (A3.1)。</p>"},
        heading: L("Classification that follows evolutionary relationships", "進化的関係に沿った分類の利点", "按進化關係分類的好處"),
        body: L(
          `<p>The <strong>ideal classification</strong> follows evolutionary relationships. In such a classification <strong>all the members of a group have evolved from a common ancestor</strong>.</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>The characteristics of an organism in the group can be <strong>predicted</strong>, because traits are <strong>shared within a clade</strong> (they were inherited from the common ancestor). If a newly found species is placed in a group, you can predict many of its features.</li>
<li>The groups reflect how life actually diversified, so the classification can be tested and improved with new evidence.</li>
</ul>`,
          `<p><strong>理想的な分類</strong>は進化の関係に沿ったものです。そのような分類では、<strong>グループのすべての構成員が共通祖先から進化しています</strong>。</p>
<p><strong>利点：</strong></p>
<ul>
<li>形質は<strong>クレード内で共有されている</strong>（共通祖先から受け継いだ）ので、グループ内の生物の特徴を<strong>予測</strong>できます。新しく見つかった種がグループに入れば、多くの特徴を予測できます。</li>
<li>グループが生物の多様化の実際を反映するため、新しい証拠で分類を検証し改良できます。</li>
</ul>`,
          `<p><strong>理想的分類</strong>遵循進化關係。在這種分類中，<strong>同一組別的所有成員都是從同一共同祖先演化而來</strong>。</p>
<p><strong>好處：</strong></p>
<ul>
<li>由於性狀<strong>在演化支內共有</strong>（從共同祖先遺傳而來），所以可以<strong>預測</strong>組內生物的特徵。如果新發現的物種被歸入某一組，就可以預測牠的許多特徵。</li>
<li>組別反映了生命實際上的多樣化過程，所以可用新證據來測試和改進分類。</li>
</ul>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.4", ahl: true,
        deeper: {"en":"<p><strong>The \"one cut\" test for a clade.</strong> Picture a tree. A clade is everything you get by cutting <em>one</em> branch: the ancestor at that point and all its descendants. A group is <em>not</em> a clade if it</p>\n<ul>\n<li>leaves out some descendants of the common ancestor (the traditional group \"fish\" leaves out the land vertebrates, which descended from fish-like ancestors), or</li>\n<li>joins together species from separate branches, even if they look alike.</li>\n</ul>\n<p><strong>Nesting.</strong> Primates sit inside mammals; mammals sit inside vertebrates; vertebrates sit inside animals. Each is a clade within a bigger clade, so no ranks are needed.</p>\n<p><strong>Why sequence data is the most objective evidence.</strong></p>\n<ul>\n<li>It gives hundreds or thousands of characters per gene; a structure-based comparison may have only a handful.</li>\n<li>Differences are counted, so two scientists get the same answer.</li>\n<li>Every organism has the same kinds of gene and protein, so very different organisms can be compared.</li>\n<li>Similar structures can arise by convergent evolution (A4.1.5), but it is very unlikely that long stretches of sequence match by chance.</li>\n</ul>\n<p><strong>Mark-scheme language.</strong> \"Common ancestor <em>and all its descendants</em>\" earns the mark; \"a group of similar organisms\" does not.</p>","ja":"<p><strong>クレードの「一回切る」テスト。</strong>木を思い浮かべてください。クレードは、<em>一本</em>の枝を切って得られるもの全体、つまりその地点の祖先とそのすべての子孫です。次のようなグループはクレードでは<em>ありません</em>。</p>\n<ul>\n<li>共通祖先の子孫の一部を除外している（従来の「魚類」は、魚のような祖先から進化した陸上脊椎動物を除いています）。</li>\n<li>見た目が似ていても、別々の枝の種を寄せ集めている。</li>\n</ul>\n<p><strong>入れ子構造。</strong>霊長類は哺乳類の中、哺乳類は脊椎動物の中、脊椎動物は動物の中にあります。どれも大きなクレードの中のクレードなので、階級は必要ありません。</p>\n<p><strong>配列データが最も客観的な証拠である理由。</strong></p>\n<ul>\n<li>一つの遺伝子から数百〜数千の形質が得られます。構造の比較では、せいぜい数個です。</li>\n<li>違いを数えるので、誰が数えても同じ答えになります。</li>\n<li>すべての生物が同じ種類の遺伝子とタンパク質をもつので、非常に異なる生物も比べられます。</li>\n<li>似た構造は収斂進化 (A4.1.5) で生じることがありますが、長い配列が偶然に一致することはほとんどありません。</li>\n</ul>\n<p><strong>採点のことば。</strong>「共通祖先<em>とそのすべての子孫</em>」と書けば得点です。「似た生物の集まり」では得点になりません。</p>","zh":"<p><strong>判斷演化支的「一刀」測試。</strong>想像一棵樹。演化支就是切斷<em>一條</em>分支所得到的全部：該處的祖先和它所有的後代。以下的組別<em>不是</em>演化支：</p>\n<ul>\n<li>把共同祖先的部分後代排除在外（傳統的「魚類」不包括陸生脊椎動物，而牠們是由似魚的祖先演化而來）；</li>\n<li>把來自不同分支的物種合在一起，即使它們外形相似。</li>\n</ul>\n<p><strong>層層嵌套。</strong>靈長類在哺乳類之內，哺乳類在脊椎動物之內，脊椎動物在動物之內。每一個都是較大演化支之內的演化支，所以不需要等級。</p>\n<p><strong>為何序列數據是最客觀的證據。</strong></p>\n<ul>\n<li>一個基因就提供數百至數千個特徵；以結構作比較，可能只有寥寥數項。</li>\n<li>差異是用數的，所以兩位科學家會得出相同答案。</li>\n<li>所有生物都有相同種類的基因和蛋白質，所以可以比較差異很大的生物。</li>\n<li>相似的結構可能由趨同進化 (A4.1.5) 產生，但長段序列偶然相同的機會極小。</li>\n</ul>\n<p><strong>評分用語。</strong>寫「共同祖先<em>及其所有後代</em>」可得分；寫「一羣相似的生物」則不能。</p>"},
        heading: L("Clades", "クレード (clade)", "演化支 (clade)"),
        body: L(
          `<p>A <strong>clade</strong> is a group of organisms that <strong>share a common ancestor</strong> and <strong>share characteristics</strong> inherited from it. A clade includes that ancestor <em>and all of its descendants</em>. Clades are nested like Russian dolls: for example the mammals are a clade inside the vertebrates.</p>
<p><strong>Evidence used to place organisms in clades:</strong></p>
<ul>
<li>The <strong>most objective evidence</strong> is the <strong>base sequences of genes</strong> or the <strong>amino acid sequences of proteins</strong>. Sequences can be compared as numbers of matches and differences, so there is less room for personal judgement.</li>
<li><strong>Morphological traits</strong> (body structures) can also be used to assign organisms to clades, but they are less reliable because similar structures can evolve independently in unrelated organisms (convergent evolution).</li>
</ul>
<p>The more recently two organisms shared an ancestor, the more similar their sequences are expected to be.</p>`,
          `<p><strong>クレード (clade)</strong> とは、<strong>共通祖先をもち</strong>、そこから受け継いだ<strong>形質を共有する</strong>生物の集団です。クレードには、その祖先<em>とそのすべての子孫</em>が含まれます。クレードは入れ子になっています。たとえば哺乳類は脊椎動物の中のクレードです。</p>
<p><strong>生物をクレードに入れるために使う証拠：</strong></p>
<ul>
<li><strong>最も客観的な証拠</strong>は、<strong>遺伝子の塩基配列</strong>や<strong>タンパク質のアミノ酸配列</strong>です。配列は一致と違いの数として比べられるので、個人の判断が入り込む余地が小さくなります。</li>
<li><strong>形態的な形質</strong>（体の構造）もクレードへの分類に使えますが、無関係な生物で似た構造が独立に進化することがある（収斂進化）ため、信頼性は低めです。</li>
</ul>
<p>二つの生物が共通祖先を共有したのが最近であるほど、配列は似ていると予想されます。</p>`,
          `<p><strong>演化支 (clade)</strong> 是一羣<strong>有共同祖先</strong>，並<strong>共有</strong>由祖先遺傳而來<strong>特徵</strong>的生物。一個演化支包括該祖先<em>及其所有後代</em>。演化支是層層嵌套的，例如哺乳類是脊椎動物之內的一個演化支。</p>
<p><strong>用來把生物歸入演化支的證據：</strong></p>
<ul>
<li><strong>最客觀的證據</strong>是<strong>基因的鹼基序列</strong>或<strong>蛋白質的氨基酸序列</strong>。序列可以用相同和相異的數目來比較，個人判斷的空間較小。</li>
<li><strong>形態特徵</strong>（身體結構）也可用來把生物歸入演化支，但較不可靠，因為沒有親緣關係的生物也可能獨立演化出相似的結構（趨同進化）。</li>
</ul>
<p>兩種生物共有祖先的時間越近，預期牠們的序列越相似。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.5", ahl: true,
        deeper: {"en":"<p><strong>Step by step: using the clock.</strong></p>\n<ol>\n<li>Compare the same gene (or protein) in species pairs and count the differences.</li>\n<li><strong>Calibrate</strong> the clock with one split whose date is known, for example from a fossil.</li>\n<li>Work out the rate: differences ÷ time.</li>\n<li>Use that rate to estimate other split dates.</li>\n</ol>\n<p><strong>Simple worked example (sample data).</strong> Species X and Y differ at 10 sites and fossils date their split to 20 million years ago. Rate = 10 ÷ 20 = 0.5 differences per million years. Species Z differs from X by 30 sites. Estimated time since the X–Z split = 30 ÷ 0.5 = <strong>60 million years</strong>.</p>\n<p><strong>Why the answer is only an estimate.</strong> The calculation assumes a constant rate. In reality:</p>\n<ul>\n<li>short generation time means more rounds of DNA copying per year, so more mutations;</li>\n<li>population size changes how quickly a mutation spreads or is lost;</li>\n<li>selection removes harmful changes and favours others, so differences do not build up evenly;</li>\n<li>the calibration date from fossils is itself uncertain.</li>\n</ul>\n<p><strong>Mark-scheme language.</strong> \"Mutations accumulate at a rate that can be measured, so the number of differences indicates time since divergence\" scores. \"DNA proves exactly when\" does not. Complex calculations are not required.</p>","ja":"<p><strong>段階的な使い方。</strong></p>\n<ol>\n<li>種の組で同じ遺伝子（またはタンパク質）を比べ、違いの数を数えます。</li>\n<li>年代が分かっている一つの分岐（たとえば化石から）で時計を<strong>較正 (calibrate)</strong> します。</li>\n<li>速さを求めます：違いの数 ÷ 時間。</li>\n<li>その速さで他の分岐の年代を推定します。</li>\n</ol>\n<p><strong>簡単な計算例（サンプルデータ）。</strong>種XとYは10か所で異なり、化石から分岐は2000万年前とされます。速さ＝10 ÷ 20＝100万年あたり0.5か所。種ZはXと30か所で異なります。XとZの分岐からの推定時間＝30 ÷ 0.5＝<strong>6000万年</strong>。</p>\n<p><strong>推定値にとどまる理由。</strong>この計算は一定の速さを仮定しています。実際には：</p>\n<ul>\n<li>世代時間が短いと1年あたりの DNA 複製の回数が増え、突然変異も増える。</li>\n<li>個体群の大きさによって、突然変異が広がる、または失われる速さが変わる。</li>\n<li>選択は有害な変化を取り除き、他を有利にするので、違いは均等には蓄積しない。</li>\n<li>較正に使う化石の年代自体にも不確かさがある。</li>\n</ul>\n<p><strong>採点のことば。</strong>「突然変異は測定できる速さで蓄積するので、違いの数は分岐後の時間を示す」は得点になります。「DNA で正確な年代が証明できる」は得点になりません。複雑な計算は求められません。</p>","zh":"<p><strong>逐步運用分子鐘。</strong></p>\n<ol>\n<li>比較不同物種配對中的同一基因（或蛋白質），數算差異。</li>\n<li>用一次已知年代的分歧（例如來自化石）來<strong>校準 (calibrate)</strong> 分子鐘。</li>\n<li>計算速率：差異數 ÷ 時間。</li>\n<li>用該速率估計其他分歧的年代。</li>\n</ol>\n<p><strong>簡單的計算例子（樣本數據）。</strong>物種 X 和 Y 有 10 個位點不同，化石顯示牠們在 2000 萬年前分開。速率 = 10 ÷ 20 = 每百萬年 0.5 個差異。物種 Z 與 X 有 30 個位點不同。X 與 Z 分開後的估計時間 = 30 ÷ 0.5 = <strong>6000 萬年</strong>。</p>\n<p><strong>為何答案只是估計。</strong>這個計算假設速率恆定。實際上：</p>\n<ul>\n<li>世代時間短，每年複製 DNA 的次數較多，突變也較多；</li>\n<li>種羣大小會影響突變擴散或消失的速度；</li>\n<li>選擇會淘汰有害的改變、偏愛其他改變，所以差異不會均勻累積；</li>\n<li>用作校準的化石年代本身也有不確定性。</li>\n</ul>\n<p><strong>評分用語。</strong>「突變以可量度的速率累積，所以差異的數目顯示分歧後經過的時間」可得分；「DNA 能證明確實的年代」則不能。不要求複雜計算。</p>"},
        heading: L("The molecular clock", "分子時計 (molecular clock)", "分子鐘 (molecular clock)"),
        body: L(
          `<p>When two groups split from a common ancestor, mutations build up separately in each. So <strong>differences in base sequence (or amino acid sequence) gradually accumulate</strong> over time. The more differences between two species, the longer ago their lineages split.</p>
<p>This method of estimating when clades diverged is called the <strong>molecular clock</strong>. If the date of one split is known (for example from fossils), it can be used to estimate the dates of others.</p>
<p><strong>It gives only estimates</strong>, because the rate of mutation is not the same everywhere. It is affected by:</p>
<ul>
<li>the <strong>length of the generation time</strong> (more generations per year means more chances for mutations to be copied);</li>
<li>the <strong>size of the population</strong>;</li>
<li>the <strong>intensity of selective pressure</strong>;</li>
<li>other factors.</li>
</ul>`,
          `<p>二つの集団が共通祖先から分かれると、それぞれで別々に突然変異が蓄積します。そのため<strong>塩基配列（またはアミノ酸配列）の違いは時間とともに徐々に蓄積</strong>します。二つの種の違いが多いほど、その系統が分かれたのは昔だということになります。</p>
<p>クレードが分岐した時期を推定するこの方法を<strong>分子時計 (molecular clock)</strong> といいます。ある分岐の年代が分かっていれば（たとえば化石から）、それを使って他の分岐の年代を推定できます。</p>
<p><strong>得られるのはあくまで推定値</strong>です。突然変異の速さはどこでも同じではないからです。次の要因に影響されます。</p>
<ul>
<li><strong>世代時間の長さ</strong>（1年あたりの世代数が多いほど、突然変異が複製されるチャンスが増える）</li>
<li><strong>個体群の大きさ</strong></li>
<li><strong>選択圧の強さ</strong></li>
<li>その他の要因</li>
</ul>`,
          `<p>兩個類羣從共同祖先分開後，各自獨立累積突變。因此，<strong>鹼基序列（或氨基酸序列）的差異會隨時間逐漸累積</strong>。兩個物種之間差異越多，牠們的譜系分開得越早。</p>
<p>這種估計演化支分歧時間的方法稱為<strong>分子鐘 (molecular clock)</strong>。如果已知某次分歧的年代（例如來自化石），便可用來估計其他分歧的年代。</p>
<p><strong>它只能給出估計值</strong>，因為突變率並非處處相同。它受以下因素影響：</p>
<ul>
<li><strong>世代時間的長短</strong>（每年世代越多，突變被複製的機會越多）；</li>
<li><strong>種羣大小</strong>；</li>
<li><strong>選擇壓力的強度</strong>；</li>
<li>其他因素。</li>
</ul>`
        ),
        examTip: L("The guide only asks you to know the idea and why it gives estimates (generation time, population size, selective pressure). Complex calculations are not expected.", "ガイドが求めているのは、考え方と、推定値にとどまる理由（世代時間、個体群の大きさ、選択圧）です。複雑な計算は求められていません。", "課程指引只要求你知道這個概念，以及為何只能給出估計（世代時間、種羣大小、選擇壓力）。不要求複雜的計算。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.6", ahl: true,
        deeper: {"en":"<p><strong>A faster way to count (and avoid mistakes).</strong> With four organisms and three possible trees, look at each site and sort it into one of three kinds:</p>\n<ul>\n<li><strong>All four the same:</strong> no change is needed on any tree. Ignore it.</li>\n<li><strong>Three the same, one different:</strong> one change on every tree. It cannot help you choose, so it adds the same number to every total.</li>\n<li><strong>Two share one base, the other two share another (a 2 + 2 pattern):</strong> this is the useful kind. The tree that pairs the two matching organisms needs <strong>1</strong> change; each of the other two trees needs <strong>2</strong>.</li>\n</ul>\n<p>In the worked example, sites 1 and 2 are 2 + 2 patterns that favour Tree X (pairing 1 with 2), and site 4 is a 2 + 2 pattern that favours Tree Y. Site 3 is a one-different site. That is why Tree X wins, 5 against 6 and 7.</p>\n<p><strong>Outline of a 4-mark answer.</strong></p>\n<ol>\n<li>Count the minimum changes on each tree, showing the count per site.</li>\n<li>Give the totals for every tree.</li>\n<li>State that the tree with the fewest changes is the most parsimonious.</li>\n<li>Conclude that it is the most probable cladogram (a hypothesis, not proof).</li>\n</ol>\n<p><strong>Common mistakes.</strong> Counting the differences between pairs of organisms instead of the changes along the branches of the tree; forgetting that every tree must be tested; writing \"most parsimonious = most similar sequences\".</p>","ja":"<p><strong>速くて間違えにくい数え方。</strong>四つの生物と三つの木がある場合、各部位を次の三種類に分けます。</p>\n<ul>\n<li><strong>四つとも同じ：</strong>どの木でも変化は不要です。無視します。</li>\n<li><strong>三つが同じで一つだけ違う：</strong>どの木でも変化は1回です。木を選ぶ手がかりにならず、すべての合計に同じ数を足すだけです。</li>\n<li><strong>二つが同じ塩基、残り二つが別の同じ塩基（2＋2のパターン）：</strong>これが役に立つ部位です。一致する二つを組にした木は変化<strong>1</strong>回、他の二つの木は各<strong>2</strong>回です。</li>\n</ul>\n<p>例では、部位1と2が2＋2のパターンで木X（生物1と2を組にする）に有利、部位4も2＋2で木Yに有利です。部位3は一つだけ違う部位です。だから木Xが5回で、6回・7回より少なくなります。</p>\n<p><strong>4点の答えの骨組み。</strong></p>\n<ol>\n<li>各木の最小の変化の数を、部位ごとの数え方を示して求める。</li>\n<li>すべての木の合計を書く。</li>\n<li>変化が最も少ない木が最も節約的であると述べる。</li>\n<li>それが最も確からしい分岐図であると結論する（証明ではなく仮説）。</li>\n</ol>\n<p><strong>よくある間違い。</strong>木の枝に沿った変化ではなく、生物どうしの違いを数える。すべての木を調べ忘れる。「最節約＝配列が最も似ている」と書く。</p>","zh":"<p><strong>更快、更不易出錯的數法。</strong>有四種生物和三棵可能的樹時，把每個位點分為三類：</p>\n<ul>\n<li><strong>四者相同：</strong>在任何一棵樹上都不需要變化，可以略過。</li>\n<li><strong>三者相同、一者不同：</strong>在每棵樹上都需要一次變化。它無助於選擇，只是為每個總數加上相同的數字。</li>\n<li><strong>兩者共有一種鹼基、另外兩者共有另一種（2 + 2 型態）：</strong>這是有用的一類。把這兩個相同的生物配成一對的樹需要 <strong>1</strong> 次變化；其餘兩棵樹各需要 <strong>2</strong> 次。</li>\n</ul>\n<p>在例子中，位點 1 和 2 是 2 + 2 型態，有利於樹 X（把生物 1 與 2 配對）；位點 4 也是 2 + 2 型態，有利於樹 Y。位點 3 是只有一者不同的位點。這就是為何樹 X 以 5 次勝過 6 次和 7 次。</p>\n<p><strong>4 分答案的大綱。</strong></p>\n<ol>\n<li>數算每棵樹所需的最少變化，並顯示每個位點的計算。</li>\n<li>寫出每棵樹的總數。</li>\n<li>指出變化最少的樹是最簡約的。</li>\n<li>結論：它是最有可能的支序圖（是假說，不是證明）。</li>\n</ol>\n<p><strong>常見錯誤。</strong>數算的是生物兩兩之間的差異，而不是沿樹的分支上的變化；忘記要測試每一棵樹；寫成「最簡約 = 序列最相似」。</p>"},
        heading: L("Building cladograms from sequence data (parsimony)", "配列データから分岐図を作る（最節約法）", "由序列資料建立支序圖（簡約法）"),
        body: L(
          `<p>A <strong>cladogram</strong> is a branching diagram that shows hypotheses about how clades are related. To build one, scientists compare the <strong>base sequences of genes</strong> or the <strong>amino acid sequences of proteins</strong> from the different organisms. The exam examples are simple, made-up sample data.</p>
<p>Many different trees could be drawn from the same data. <strong>Parsimony analysis</strong> chooses between them: the <strong>most probable cladogram</strong> is the one in which the observed sequence differences are explained by the <strong>smallest number of changes</strong>. A "change" is one base being replaced by another along a branch.</p>
<p><strong>Worked example (sample data).</strong> Four organisms, four sites in a gene:</p>
<table>
<tr><th></th><th>Site 1</th><th>Site 2</th><th>Site 3</th><th>Site 4</th></tr>
<tr><td>Organism 1</td><td>A</td><td>T</td><td>C</td><td>G</td></tr>
<tr><td>Organism 2</td><td>A</td><td>T</td><td>C</td><td>A</td></tr>
<tr><td>Organism 3</td><td>G</td><td>C</td><td>C</td><td>G</td></tr>
<tr><td>Organism 4</td><td>G</td><td>C</td><td>T</td><td>A</td></tr>
</table>
<p>Three possible trees pair up the organisms differently:</p>
<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:space-around">
<figure style="margin:0;text-align:center">${treeSvg([["1","2"],["3","4"]])}<figcaption>Tree X: 5 changes</figcaption></figure>
<figure style="margin:0;text-align:center">${treeSvg([["1","3"],["2","4"]])}<figcaption>Tree Y: 6 changes</figcaption></figure>
<figure style="margin:0;text-align:center">${treeSvg([["1","4"],["2","3"]])}<figcaption>Tree Z: 7 changes</figcaption></figure>
</div>
<p>Sites 1 and 2 show that 1 and 2 share the same bases and 3 and 4 share the same bases, so one change explains each of them on Tree X, but Trees Y and Z need two changes for each. Site 3 needs one change on every tree (only Organism 4 differs). Site 4 pairs 1 with 3 and 2 with 4, so it costs two changes on Tree X, one on Tree Y and two on Tree Z. Adding up gives 5, 6 and 7. <strong>Tree X needs the fewest changes, so it is the most parsimonious and the most probable cladogram.</strong></p>
<div class="note"><strong>Nature of science.</strong> Different criteria for judgement can lead to different hypotheses. Parsimony is one criterion. A different way of choosing could favour a different tree, so a cladogram is a <em>hypothesis</em>, not a proven fact.</div>`,
          `<p><strong>分岐図 (cladogram)</strong> は、クレードどうしの関係についての仮説を示す枝分かれ図です。作るには、異なる生物の<strong>遺伝子の塩基配列</strong>や<strong>タンパク質のアミノ酸配列</strong>を比べます。試験の例は、単純な架空のサンプルデータです。</p>
<p>同じデータからでも多くの異なる木が描けます。<strong>最節約法 (parsimony analysis)</strong> がその中から選びます。観察された配列の違いを<strong>最も少ない変化の回数</strong>で説明できるものが、<strong>最も確からしい分岐図</strong>です。「変化」とは、枝に沿って一つの塩基が別の塩基に置き換わることです。</p>
<p><strong>例（サンプルデータ）。</strong>四つの生物、遺伝子の四つの部位：</p>
<table>
<tr><th></th><th>部位1</th><th>部位2</th><th>部位3</th><th>部位4</th></tr>
<tr><td>生物1</td><td>A</td><td>T</td><td>C</td><td>G</td></tr>
<tr><td>生物2</td><td>A</td><td>T</td><td>C</td><td>A</td></tr>
<tr><td>生物3</td><td>G</td><td>C</td><td>C</td><td>G</td></tr>
<tr><td>生物4</td><td>G</td><td>C</td><td>T</td><td>A</td></tr>
</table>
<p>生物の組み合わせ方が違う三つの木が考えられます。</p>
<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:space-around">
<figure style="margin:0;text-align:center">${treeSvg([["1","2"],["3","4"]])}<figcaption>木X：変化5回</figcaption></figure>
<figure style="margin:0;text-align:center">${treeSvg([["1","3"],["2","4"]])}<figcaption>木Y：変化6回</figcaption></figure>
<figure style="margin:0;text-align:center">${treeSvg([["1","4"],["2","3"]])}<figcaption>木Z：変化7回</figcaption></figure>
</div>
<p>部位1と2では、生物1と2が同じ塩基、生物3と4が同じ塩基をもつので、木Xでは各部位1回の変化で説明できますが、木YとZでは各部位2回必要です。部位3は（生物4だけが違うので）どの木でも1回です。部位4は1と3、2と4が同じ塩基なので、木Xで2回、木Yで1回、木Zで2回です。合計すると5、6、7回です。<strong>木Xが最も変化が少ないので最節約的で、最も確からしい分岐図です。</strong></p>
<div class="note"><strong>科学の本質。</strong>判断の基準が違えば、異なる仮説になることがあります。最節約法は基準の一つです。別の選び方をすれば別の木が選ばれるかもしれないので、分岐図は証明された事実ではなく<em>仮説</em>です。</div>`,
          `<p><strong>支序圖 (cladogram)</strong> 是顯示演化支之間關係假說的分支圖。要建立支序圖，科學家比較不同生物的<strong>基因鹼基序列</strong>或<strong>蛋白質氨基酸序列</strong>。試題的例子是簡單的虛構樣本數據。</p>
<p>同一份數據可以畫出許多不同的樹。<strong>簡約法 (parsimony analysis)</strong> 負責在其中選擇：<strong>最有可能的支序圖</strong>，是用<strong>最少的變化次數</strong>就能解釋所觀察到的序列差異的那一個。「變化」是指沿着分支，一個鹼基被另一個鹼基取代。</p>
<p><strong>例子（樣本數據）。</strong>四種生物，基因中有四個位點：</p>
<table>
<tr><th></th><th>位點 1</th><th>位點 2</th><th>位點 3</th><th>位點 4</th></tr>
<tr><td>生物 1</td><td>A</td><td>T</td><td>C</td><td>G</td></tr>
<tr><td>生物 2</td><td>A</td><td>T</td><td>C</td><td>A</td></tr>
<tr><td>生物 3</td><td>G</td><td>C</td><td>C</td><td>G</td></tr>
<tr><td>生物 4</td><td>G</td><td>C</td><td>T</td><td>A</td></tr>
</table>
<p>三棵可能的樹把生物配成不同的對：</p>
<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:space-around">
<figure style="margin:0;text-align:center">${treeSvg([["1","2"],["3","4"]])}<figcaption>樹 X：5 次變化</figcaption></figure>
<figure style="margin:0;text-align:center">${treeSvg([["1","3"],["2","4"]])}<figcaption>樹 Y：6 次變化</figcaption></figure>
<figure style="margin:0;text-align:center">${treeSvg([["1","4"],["2","3"]])}<figcaption>樹 Z：7 次變化</figcaption></figure>
</div>
<p>位點 1 和 2 顯示生物 1 與 2 的鹼基相同、生物 3 與 4 的鹼基相同，所以在樹 X 上各只需一次變化，而樹 Y 和 Z 每個位點都需要兩次。位點 3（只有生物 4 不同）在每棵樹上都需要一次。位點 4 是 1 與 3、2 與 4 相同，所以在樹 X 需兩次、樹 Y 一次、樹 Z 兩次。總和是 5、6、7。<strong>樹 X 所需變化最少，所以是最簡約、最有可能的支序圖。</strong></p>
<div class="note"><strong>科學本質。</strong>不同的判斷準則可以產生不同的假說。簡約法是準則之一；用另一種方法選擇，可能會偏向另一棵樹，所以支序圖是一個<em>假說</em>，不是已證實的事實。</div>`
        ),
        widget: "cladogram-build",
        examTip: L("Parsimony = fewest changes. Show your count for each tree if the question gives you more than one.", "最節約法＝変化が最も少ないもの。複数の木が与えられたら、各木の数え方を書きましょう。", "簡約法 = 變化最少。如果題目給出多棵樹，請寫出每棵樹的計算。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.7", ahl: true,
        deeper: {"en":"<p><strong>Worked reading of the tree above</strong> (nodes numbered 1 to 4, tips A to E).</p>\n<table>\n<tr><th>Question</th><th>Answer and reasoning</th></tr>\n<tr><td>Clades in the tree</td><td>Node 2 gives {A, B}; node 4 gives {D, E}; node 3 gives {C, D, E}; node 1 gives all five.</td></tr>\n<tr><td>Is C closer to D or to A?</td><td>C and D meet at node 3. C and A meet only at node 1, which is older. So C is more closely related to D.</td></tr>\n<tr><td>Is {B, C} a clade?</td><td>No. No single node leads only to B and C.</td></tr>\n<tr><td>Is {A, B, C} a clade?</td><td>No. It would need D and E too, because they descend from the same node as C.</td></tr>\n</table>\n<p><strong>Reading rules.</strong></p>\n<ul>\n<li>Start at the two tips, trace back, and name the <em>first</em> node where the paths join. That node is their most recent common ancestor.</li>\n<li>The order of tips up the page does not matter. Rotating the two branches at any node gives the same tree.</li>\n<li>A tip is never the ancestor of another tip. Ancestors are the nodes, and they are hypothetical.</li>\n<li>Unless a question says branch length shows time, do not read branch length as time or amount of change.</li>\n</ul>\n<p><strong>Mark-scheme language.</strong> \"Share a more recent common ancestor\" and \"node X\" are the key phrases. \"A is more advanced\" or \"B is next to A so more closely related\" lose the mark.</p>","ja":"<p><strong>上の木の読み取り例</strong>（節 (node) 1〜4、末端 A〜E）。</p>\n<table>\n<tr><th>問い</th><th>答えと理由</th></tr>\n<tr><td>この木のクレード</td><td>節2は {A, B}、節4は {D, E}、節3は {C, D, E}、節1は五つ全部です。</td></tr>\n<tr><td>CはDとAのどちらに近いか</td><td>CとDは節3で合流します。CとAは節1でしか合流せず、これはより古い節です。よってCはDにより近縁です。</td></tr>\n<tr><td>{B, C} はクレードか</td><td>いいえ。BとCだけにつながる節はありません。</td></tr>\n<tr><td>{A, B, C} はクレードか</td><td>いいえ。CとD・Eは同じ節から出ているので、DとEも必要です。</td></tr>\n</table>\n<p><strong>読み取りのルール。</strong></p>\n<ul>\n<li>二つの末端から根元へたどり、経路が<em>最初に</em>合流する節を答えます。それが最も新しい共通祖先です。</li>\n<li>末端が紙面で並ぶ順番は関係ありません。どの節でも二つの枝を回転させて同じ木になります。</li>\n<li>末端が他の末端の祖先になることはありません。祖先は節で、仮説上のものです。</li>\n<li>問題文が枝の長さを時間と述べていない限り、枝の長さを時間や変化の量として読まないこと。</li>\n</ul>\n<p><strong>採点のことば。</strong>「より新しい共通祖先を共有する」と「節X」が決め手です。「Aはより進化している」「BはAの隣だから近縁」は減点です。</p>","zh":"<p><strong>讀圖示範</strong>（上圖，節點 1 至 4，末端 A 至 E）。</p>\n<table>\n<tr><th>問題</th><th>答案與理由</th></tr>\n<tr><td>樹中的演化支</td><td>節點 2 給出 {A, B}；節點 4 給出 {D, E}；節點 3 給出 {C, D, E}；節點 1 包括全部五個。</td></tr>\n<tr><td>C 與 D、A 哪個較近？</td><td>C 和 D 在節點 3 相遇；C 和 A 要到節點 1 才相遇，而節點 1 較古老。所以 C 與 D 的親緣關係較近。</td></tr>\n<tr><td>{B, C} 是演化支嗎？</td><td>不是。沒有單一節點只通往 B 和 C。</td></tr>\n<tr><td>{A, B, C} 是演化支嗎？</td><td>不是。因為 D 和 E 與 C 來自同一節點，所以必須包括 D 和 E。</td></tr>\n</table>\n<p><strong>讀圖規則。</strong></p>\n<ul>\n<li>從兩個末端往回追溯，說出路徑<em>首次</em>會合的節點。該節點就是牠們最近的共同祖先。</li>\n<li>末端在頁面上由上至下的次序並不重要。在任何節點旋轉兩條分支，樹都不變。</li>\n<li>末端絕不是另一個末端的祖先。祖先是節點，而且是假設的。</li>\n<li>除非題目說明分支長度代表時間，否則不要把分支長度當作時間或改變的多少。</li>\n</ul>\n<p><strong>評分用語。</strong>「共有較近期的共同祖先」和「節點 X」是關鍵用語。「A 較進化」或「B 在 A 旁邊所以親緣較近」都會失分。</p>"},
        heading: L("Analysing cladograms", "分岐図を読み取る (analysing cladograms)", "分析支序圖 (analysing cladograms)"),
        body: L(
          `<p>You need to be able to <strong>deduce evolutionary relationships, common ancestors and clades</strong> from a cladogram. Learn these terms:</p>
<ul>
<li><strong>Root</strong>: the base of the tree, the common ancestor of <em>all</em> the organisms shown.</li>
<li><strong>Node</strong>: a point where a branch splits in two. A node represents a <strong>hypothetical common ancestor</strong> (we cannot be sure what it looked like). Each node is a speciation event in the past.</li>
<li><strong>Terminal branch</strong>: a branch ending at a tip. The tips are the organisms (or groups) being compared.</li>
<li><strong>Clade</strong>: one node plus <em>everything</em> that comes from it.</li>
</ul>
<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}<figcaption>Nodes numbered 1 to 4. Node 1 is at the root. D and E meet at node 4, so node 4 is their most recent common ancestor.</figcaption></figure>
<p><strong>How to read a cladogram:</strong></p>
<ul>
<li>Two organisms are <strong>more closely related</strong> when they share a <strong>more recent common ancestor</strong>. To find it, trace back from each organism to the first node where their paths meet.</li>
<li>Closeness is <strong>not</strong> decided by which tips are drawn next to each other. A node can be rotated (flipped) and the relationships stay the same.</li>
<li>A group is a clade only if it contains <strong>all</strong> the descendants of one node.</li>
</ul>
<p>Use the widget below: tap nodes to see their clades, then try the questions.</p>`,
          `<p>分岐図から<strong>進化的な関係、共通祖先、クレードを推論</strong>できる必要があります。次の用語を覚えましょう。</p>
<ul>
<li><strong>根 (root)</strong>：木の根元で、示されている<em>すべての</em>生物の共通祖先。</li>
<li><strong>節 (node)</strong>：枝が二つに分かれる点。節は<strong>仮想の共通祖先 (hypothetical common ancestor)</strong> を表します（どんな姿だったかは確かではありません）。それぞれの節は過去の種分化の出来事です。</li>
<li><strong>末端の枝 (terminal branch)</strong>：先端で終わる枝。先端は比較している生物（またはグループ）です。</li>
<li><strong>クレード (clade)</strong>：一つの節と、そこから出る<em>すべて</em>のもの。</li>
</ul>
<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}<figcaption>節に1から4の番号を付けています。節1が根にあります。DとEは節4で出会うので、節4が二つの最も近い共通祖先です。</figcaption></figure>
<p><strong>分岐図の読み方：</strong></p>
<ul>
<li>二つの生物は、<strong>より最近の共通祖先</strong>を共有するほど<strong>近縁</strong>です。見つけるには、各生物から根の方へたどり、二つの道が最初に出会う節を探します。</li>
<li>近縁かどうかは、先端が隣に描かれているかでは決まり<strong>ません</strong>。節で枝を回転（反転）させても関係は変わりません。</li>
<li>グループがクレードであるのは、一つの節の子孫を<strong>すべて</strong>含むときだけです。</li>
</ul>
<p>下のウィジェットで節をタップしてクレードを確かめ、問題に挑戦しましょう。</p>`,
          `<p>你須能從支序圖<strong>推斷進化關係、共同祖先和演化支</strong>。請記住以下術語：</p>
<ul>
<li><strong>根 (root)</strong>：樹的底部，是圖中<em>所有</em>生物的共同祖先。</li>
<li><strong>節點 (node)</strong>：分支一分為二的地方。節點代表<strong>假設的共同祖先 (hypothetical common ancestor)</strong>（我們無法確定牠的樣貌）。每個節點都是過去的一次物種形成事件。</li>
<li><strong>末端分支 (terminal branch)</strong>：終止於分支尖端的分支。尖端是被比較的生物（或類羣）。</li>
<li><strong>演化支 (clade)</strong>：一個節點，加上由它而出的<em>所有</em>生物。</li>
</ul>
<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}<figcaption>節點編號為 1 至 4。節點 1 在根部。D 和 E 在節點 4 相遇，所以節點 4 是牠們最近的共同祖先。</figcaption></figure>
<p><strong>如何閱讀支序圖：</strong></p>
<ul>
<li>兩種生物共有的共同祖先越<strong>近期</strong>，親緣關係便越<strong>密切</strong>。要找出共同祖先，就從每種生物沿着分支往回追溯，找到兩條路徑第一次相遇的節點。</li>
<li>親緣遠近<strong>不是</strong>由哪些末端畫在一起決定的。節點可以旋轉（翻轉），關係不變。</li>
<li>一羣生物只有在包含某一節點的<strong>所有</strong>後代時，才算是一個演化支。</li>
</ul>
<p>使用下面的小工具：點擊節點查看演化支，然後試做題目。</p>`
        ),
        widget: "cladogram",
        examTip: L("Do not judge closeness by position on the page. Trace back to the most recent node they share.", "近縁かどうかを紙面上の位置で判断してはいけません。二つが共有する最も新しい節までたどりましょう。", "不要憑圖上的位置判斷親緣遠近。請追溯到兩者共有的最近節點。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.8", ahl: true,
        deeper: {"en":"<p><strong>How cladistics tests a classification, step by step.</strong></p>\n<ol>\n<li>The traditional classification makes a claim: \"the members of this family form a clade\".</li>\n<li>Sequences of the same genes are collected from the members and from relatives placed in other families.</li>\n<li>A cladogram is built (by parsimony or similar).</li>\n<li>Check: do all the family members sit together in one clade, with no outsiders?</li>\n<li>If not, the claim is falsified and the classification is revised.</li>\n</ol>\n<p><strong>The figwort case.</strong> Plants such as foxgloves and snapdragons were in Scrophulariaceae because their flowers look alike. DNA placed them in the plantain family (Plantaginaceae). Similar flower shapes can evolve more than once, for example when similar pollinators select for similar flowers. This is convergent evolution (A4.1.5), so appearance was a poor guide.</p>\n<p><strong>Outline of a 6-mark \"discuss\" answer.</strong></p>\n<ul>\n<li>For structure-based classification: easy to observe, no equipment, long history.</li>\n<li>Against: convergent evolution can make unrelated species look alike.</li>\n<li>For sequence-based cladistics: objective, many characters, tests the grouping.</li>\n<li>Example: figwort plants moved to other families after DNA analysis.</li>\n<li>Science accepts the revision: knowledge claims can be falsified.</li>\n<li>Even cladograms are hypotheses and can change with new data.</li>\n</ul>","ja":"<p><strong>分岐学が分類を検証する手順。</strong></p>\n<ol>\n<li>従来の分類は「この科の構成員はクレードをなす」という主張をしています。</li>\n<li>構成員と、他の科に入れられている近縁種から、同じ遺伝子の配列を集めます。</li>\n<li>分岐図を作ります（最節約法など）。</li>\n<li>確認：科の構成員がすべて一つのクレードにまとまり、部外者が混じっていないか。</li>\n<li>そうでなければ主張は反証され、分類が改められます。</li>\n</ol>\n<p><strong>ゴマノハグサ科の例。</strong>ジギタリス（キツネノテブクロ）やキンギョソウなどは、花が似ていることからゴマノハグサ科 (Scrophulariaceae) に入れられていました。DNA の解析でオオバコ科 (Plantaginaceae) に移されました。似た花の形は、たとえば似た送粉者が似た花を選択することで、何度も進化し得ます。これは収斂進化 (A4.1.5) であり、見た目は良い手がかりではなかったのです。</p>\n<p><strong>6点の「論ぜよ (discuss)」の答えの骨組み。</strong></p>\n<ul>\n<li>構造に基づく分類の利点：観察が容易、機器が不要、長い歴史がある。</li>\n<li>欠点：収斂進化により、無関係な種が似て見えることがある。</li>\n<li>配列に基づく分岐学の利点：客観的、形質の数が多い、グループ分けを検証できる。</li>\n<li>例：ゴマノハグサ科の植物が DNA 解析後に他の科に移された。</li>\n<li>科学はこの改訂を受け入れる：知識の主張は反証され得る。</li>\n<li>分岐図でさえ仮説であり、新しいデータで変わり得る。</li>\n</ul>","zh":"<p><strong>支序學如何逐步檢驗一個分類。</strong></p>\n<ol>\n<li>傳統分類提出一個論斷：「這個科的成員構成一個演化支」。</li>\n<li>從這些成員，以及被歸入其他科的近親，收集相同基因的序列。</li>\n<li>建立支序圖（用簡約法或類似方法）。</li>\n<li>檢查：所有科內成員是否全部聚在同一個演化支內，而沒有外來者？</li>\n<li>如果不是，論斷即被推翻，分類須修訂。</li>\n</ol>\n<p><strong>玄參科的例子。</strong>毛地黃和金魚草等植物，因為花的外形相似而被歸入玄參科 (Scrophulariaceae)。DNA 分析把牠們移到車前科 (Plantaginaceae)。相似的花形可以多次獨立演化，例如相似的傳粉者選擇相似的花。這是趨同進化 (A4.1.5)，所以外觀並不是可靠的指引。</p>\n<p><strong>6 分「討論 (discuss)」答案的大綱。</strong></p>\n<ul>\n<li>支持以結構分類：易於觀察、不需儀器、歷史悠久。</li>\n<li>反對：趨同進化可令沒有親緣的物種看起來相似。</li>\n<li>支持以序列為基礎的支序學：客觀、特徵數目多、可檢驗分組。</li>\n<li>例子：玄參科植物經 DNA 分析後被移到其他科。</li>\n<li>科學接受修訂：知識論斷可能被推翻。</li>\n<li>連支序圖也是假說，可隨新數據改變。</li>\n</ul>"},
        heading: L("Cladistics tests traditional classification: the figwort family", "分岐学で従来の分類を検証する：ゴマノハグサ科", "以支序學檢驗傳統分類：玄參科 (figwort family)"),
        body: L(
          `<p>Cladistics can be used to <strong>investigate whether a traditional classification matches evolutionary relationships</strong>. Where it does not, the classification is changed.</p>
<p><strong>Case study (you do not need to memorize the details):</strong> the figwort family, Scrophulariaceae. Many plants were placed in it because their <strong>flowers looked similar</strong>. When DNA sequences were analysed with cladistic methods, many of these plants turned out to be <strong>more closely related to plants in other families</strong>. They were moved into other families (for example, foxgloves and snapdragons now belong to the plantain family, Plantaginaceae). The similar flowers had arisen through <strong>convergent evolution</strong> (similar features evolving independently), not because of recent shared ancestry.</p>
<div class="note"><strong>Nature of science.</strong> Theories and other scientific knowledge claims may eventually be <strong>falsified</strong>. Here, a classification based on similar morphology was shown to be false by cladistic evidence. Science accepts this and revises its ideas.</div>
<p>In an exam, you may use either the common name or the scientific name of an organism.</p>`,
          `<p>分岐学を使うと、<strong>従来の分類が進化的関係と一致しているかどうかを調べる</strong>ことができます。一致しなければ、分類を変更します。</p>
<p><strong>事例（細部の暗記は不要）：</strong>ゴマノハグサ科 (Scrophulariaceae, figwort family)。<strong>花が似ている</strong>という理由で、多くの植物がこの科に入れられていました。DNA 配列を分岐学的な方法で解析すると、これらの植物の多くは<strong>他の科の植物とより近縁</strong>であることが分かりました。そのため他の科に移されました（たとえば、ジギタリスやキンギョソウは現在オオバコ科 Plantaginaceae に属します）。似た花は、最近の共通祖先をもつからではなく、<strong>収斂進化</strong>（似た特徴が独立に進化すること）で生じたものでした。</p>
<div class="note"><strong>科学の本質。</strong>理論やその他の科学的知識の主張は、いずれ<strong>反証される</strong>ことがあります。ここでは、形態の類似に基づく分類が分岐学の証拠によって誤りだと示されました。科学はこれを受け入れ、考えを改めます。</div>
<p>試験では、生物の一般名と学名のどちらを使っても構いません。</p>`,
          `<p>支序學可用來<strong>檢驗傳統分類是否與進化關係相符</strong>。如果不相符，就修改分類。</p>
<p><strong>個案研究（不需記憶細節）：</strong>玄參科 (Scrophulariaceae, figwort family)。許多植物因為<strong>花的外形相似</strong>而被放入這一科。用支序學方法分析 DNA 序列後，發現這些植物不少<strong>與其他科的植物親緣更近</strong>，於是被移到其他科（例如毛地黃和金魚草現在屬於車前科 Plantaginaceae）。相似的花是通過<strong>趨同進化</strong>（相似的特徵獨立演化）而來，並非由於近期的共同祖先。</p>
<div class="note"><strong>科學本質。</strong>理論和其他科學知識主張最終都可能被<strong>推翻（證偽）</strong>。在這個例子中，以相似形態為基礎的分類被支序學的證據證明是錯誤的。科學接受這一點，並修訂其觀念。</div>
<p>考試時，可以使用生物的俗名或學名。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A3.2.9", ahl: true,
        deeper: {"en":"<p><strong>Why rRNA was the right molecule.</strong></p>\n<ul>\n<li><strong>Universal:</strong> every cell has ribosomes, so every cell has rRNA. Bacteria, archaea and eukaryotes can all be compared with the same molecule.</li>\n<li><strong>Slowly changing:</strong> ribosomes do an essential job, so most changes to rRNA are harmful and removed. The sequence therefore changes slowly and still shows relationships between very distant groups.</li>\n<li><strong>Measurable:</strong> the base sequences can be compared site by site, as in the cladogram methods above.</li>\n</ul>\n<p><strong>What the data showed.</strong> Bacteria and archaea both lack a nucleus, so they had been grouped as prokaryotes. The rRNA sequences of archaea were as different from those of bacteria as from those of eukaryotes. Archaea are therefore a separate lineage, and the highest level of classification became three <strong>domains</strong>.</p>\n<table>\n<tr><th></th><th>Bacteria</th><th>Archaea</th><th>Eukaryota</th></tr>\n<tr><td>Nucleus</td><td>absent</td><td>absent</td><td>present</td></tr>\n<tr><td>rRNA sequences</td><td>one lineage</td><td>a distinct lineage</td><td>a distinct lineage</td></tr>\n<tr><td>Examples</td><td><em>E. coli</em></td><td>methane-producing archaea</td><td>animals, plants, fungi, protists</td></tr>\n</table>\n<p><strong>Mark-scheme language.</strong> Write \"<em>rRNA base sequences</em>\" (not just \"DNA\"), \"all organisms have ribosomes\", and \"archaea are a separate lineage from bacteria\". Domains sit <em>above</em> kingdoms.</p>","ja":"<p><strong>rRNA が適した分子だった理由。</strong></p>\n<ul>\n<li><strong>普遍的：</strong>すべての細胞にリボソームがあり、したがって rRNA があります。細菌、古細菌、真核生物を同じ分子で比べられます。</li>\n<li><strong>変化が遅い：</strong>リボソームは不可欠な働きをするので、rRNA の変化の多くは有害で取り除かれます。そのため配列はゆっくり変わり、非常に遠い群どうしの関係も示します。</li>\n<li><strong>測定できる：</strong>上の分岐図の方法と同じく、塩基配列を部位ごとに比べられます。</li>\n</ul>\n<p><strong>データが示したこと。</strong>細菌と古細菌はどちらも核がないので、原核生物 (prokaryotes) としてまとめられていました。古細菌の rRNA 配列は、細菌のものとも真核生物のものとも同じくらい違っていました。そこで古細菌は別の系統であり、分類の最上位は三つの<strong>ドメイン (domain)</strong> になりました。</p>\n<table>\n<tr><th></th><th>細菌</th><th>古細菌</th><th>真核生物</th></tr>\n<tr><td>核</td><td>なし</td><td>なし</td><td>あり</td></tr>\n<tr><td>rRNA 配列</td><td>一つの系統</td><td>別の系統</td><td>別の系統</td></tr>\n<tr><td>例</td><td>大腸菌 <em>E. coli</em></td><td>メタン生成古細菌</td><td>動物、植物、菌類、原生生物</td></tr>\n</table>\n<p><strong>採点のことば。</strong>「<em>rRNA の塩基配列</em>」（単に「DNA」ではなく）、「すべての生物にリボソームがある」、「古細菌は細菌とは別の系統」と書きます。ドメインは界の<em>上</em>の段階です。</p>","zh":"<p><strong>為何 rRNA 是合適的分子。</strong></p>\n<ul>\n<li><strong>普遍存在：</strong>每個細胞都有核糖體，所以都有 rRNA。細菌、古菌和真核生物都可以用同一種分子比較。</li>\n<li><strong>變化緩慢：</strong>核糖體執行必需的工作，所以 rRNA 的大部分改變都有害而被淘汰。因此序列變化緩慢，仍能顯示差異很大的類羣之間的關係。</li>\n<li><strong>可以量度：</strong>鹼基序列可以逐個位點比較，與上文的支序圖方法相同。</li>\n</ul>\n<p><strong>數據顯示了甚麼。</strong>細菌和古菌都沒有細胞核，所以曾被一併歸為原核生物 (prokaryotes)。古菌的 rRNA 序列與細菌和與真核生物的差異同樣大。因此古菌是獨立的譜系，分類的最高層級變成三個<strong>域 (domain)</strong>。</p>\n<table>\n<tr><th></th><th>細菌域</th><th>古菌域</th><th>真核生物域</th></tr>\n<tr><td>細胞核</td><td>沒有</td><td>沒有</td><td>有</td></tr>\n<tr><td>rRNA 序列</td><td>一個譜系</td><td>獨立的譜系</td><td>獨立的譜系</td></tr>\n<tr><td>例子</td><td>大腸桿菌 <em>E. coli</em></td><td>產甲烷古菌</td><td>動物、植物、真菌、原生生物</td></tr>\n</table>\n<p><strong>評分用語。</strong>要寫「<em>rRNA 鹼基序列</em>」（不能只寫「DNA」）、「所有生物都有核糖體」，以及「古菌是與細菌不同的獨立譜系」。域在界<em>之上</em>。</p>"},
        heading: L("Three domains from rRNA evidence", "rRNA の証拠による三ドメイン (three domains)", "以 rRNA 證據劃分三域 (three domains)"),
        body: L(
          `<p>In 1977, rRNA evidence showed that archaea are a separate lineage, and in 1990 a revolutionary reclassification was proposed. It added a <strong>new taxonomic level above kingdoms</strong>, called the <strong>domain</strong>, and divided all organisms into <strong>three domains</strong>:</p>
<ul>
<li><strong>Bacteria</strong></li>
<li><strong>Archaea</strong></li>
<li><strong>Eukaryota</strong> (also called Eukarya), the organisms whose cells have a nucleus: animals, plants, fungi and protists</li>
</ul>
<p><strong>The evidence:</strong> comparison of the <strong>base sequences of ribosomal RNA (rRNA)</strong>. All cells have ribosomes, so all have rRNA, which makes it ideal for comparing very different organisms. The rRNA sequences showed that Archaea are a separate lineage, distinct from both Bacteria and Eukaryota. Before this, Archaea and Bacteria were both grouped together as prokaryotes.</p>`,
          `<p>1977年に rRNA の証拠から古細菌が独立した系統であることが示され、1990年に革新的な再分類が提案されました。<strong>界の上に新しい分類段階</strong>として<strong>ドメイン (domain)</strong> を設け、すべての生物を<strong>三つのドメイン</strong>に分けました。</p>
<ul>
<li><strong>細菌 (Bacteria)</strong></li>
<li><strong>古細菌 (Archaea)</strong></li>
<li><strong>真核生物 (Eukaryota、Eukarya ともいう)</strong>：細胞に核がある生物（動物、植物、菌類、原生生物）</li>
</ul>
<p><strong>証拠：</strong><strong>リボソーム RNA (rRNA) の塩基配列</strong>の比較です。すべての細胞にリボソームがあるので rRNA もあり、まったく異なる生物どうしを比べるのに最適です。rRNA の配列から、古細菌は独立した系統であり、細菌とも真核生物とも異なることが分かりました。それまで古細菌と細菌は、どちらも原核生物としてまとめられていました。</p>`,
          `<p>1977 年，rRNA 證據顯示古菌是一個獨立的譜系；1990 年有人提出了一項革命性的重新分類。它在<strong>界之上加入新的分類層級</strong>，稱為<strong>域 (domain)</strong>，並把所有生物分成<strong>三個域</strong>：</p>
<ul>
<li><strong>細菌域 (Bacteria)</strong></li>
<li><strong>古菌域 (Archaea)</strong></li>
<li><strong>真核生物域 (Eukaryota，又稱 Eukarya)</strong>：細胞有細胞核的生物，包括動物、植物、真菌和原生生物</li>
</ul>
<p><strong>證據：</strong>比較<strong>核糖體 RNA (rRNA) 的鹼基序列</strong>。所有細胞都有核糖體，所以都有 rRNA，非常適合用來比較差異很大的生物。rRNA 序列顯示古菌是一個獨立的譜系，既不同於細菌，也不同於真核生物。在此之前，古菌和細菌都被歸為原核生物。</p>`
        ),
        examTip: L("The evidence is rRNA base sequences. The three domains are Bacteria, Archaea and Eukaryota.", "証拠は rRNA の塩基配列です。三ドメインは細菌、古細菌、真核生物です。", "證據是 rRNA 鹼基序列。三個域是細菌域、古菌域和真核生物域。")
      }
    ],
    keyTerms: [
      { term: L("classification", "分類", "分類"), def: L("Sorting organisms into groups.", "生物をグループに分けること。", "把生物分成組別。"), ahl: true },
      { term: L("taxon (plural taxa)", "分類群（タクソン）", "分類單元"), def: L("A named group of organisms at any rank, e.g. a family or a genus.", "科や属など、どの階級でも名前の付いた生物のグループ。", "任何等級上有名稱的生物組別，例如科或屬。"), ahl: true },
      { term: L("clade", "クレード", "演化支"), def: L("A group made up of a common ancestor and all of its descendants.", "共通祖先とそのすべての子孫からなるグループ。", "由一個共同祖先及其所有後代組成的類羣。"), ahl: true },
      { term: L("cladistics", "分岐学", "支序學"), def: L("Classification of organisms into unranked clades according to common ancestry.", "共通祖先に基づいて生物をランクのないクレードに分類する方法。", "按共同祖先把生物分類為不分等級的演化支的方法。"), ahl: true },
      { term: L("cladogram", "分岐図", "支序圖"), def: L("A branching diagram showing hypothesized evolutionary relationships between clades.", "クレード間の進化的関係についての仮説を示す枝分かれ図。", "顯示演化支之間假設進化關係的分支圖。"), ahl: true },
      { term: L("root", "根", "根"), def: L("The base of a cladogram: the common ancestor of all organisms shown.", "分岐図の根元。示されたすべての生物の共通祖先。", "支序圖的底部：圖中所有生物的共同祖先。"), ahl: true },
      { term: L("node", "節", "節點"), def: L("A branching point on a cladogram, representing a hypothetical common ancestor.", "分岐図上の枝分かれ点。仮想の共通祖先を表す。", "支序圖上的分支點，代表一個假設的共同祖先。"), ahl: true },
      { term: L("terminal branch", "末端の枝", "末端分支"), def: L("A branch that ends at a tip, leading to one organism or group being compared.", "先端で終わる枝。比較する一つの生物またはグループにつながる。", "終止於尖端的分支，通向被比較的一種生物或一個類羣。"), ahl: true },
      { term: L("molecular clock", "分子時計", "分子鐘"), def: L("Using the number of accumulated sequence differences to estimate when clades diverged.", "蓄積した配列の違いの数からクレードが分岐した時期を推定する方法。", "利用累積的序列差異數目來估計演化支分歧時間的方法。"), ahl: true },
      { term: L("parsimony", "最節約法", "簡約法"), def: L("Choosing the cladogram that explains the data with the fewest changes.", "データを最も少ない変化で説明する分岐図を選ぶこと。", "選擇以最少變化解釋數據的支序圖。"), ahl: true },
      { term: L("domain", "ドメイン", "域"), def: L("The taxonomic level above kingdom: Bacteria, Archaea and Eukaryota.", "界の上の分類段階：細菌、古細菌、真核生物。", "界之上的分類層級：細菌域、古菌域、真核生物域。"), ahl: true },
      { term: L("ribosomal RNA (rRNA)", "リボソーム RNA (rRNA)", "核糖體 RNA (rRNA)"), def: L("RNA found in all ribosomes; its base sequence is used to compare all living organisms.", "すべてのリボソームにある RNA。塩基配列はあらゆる生物の比較に使われる。", "存在於所有核糖體的 RNA；其鹼基序列用來比較所有生物。"), ahl: true }
    ],
    misconceptions: [
      {
        wrong: L("Two organisms drawn next to each other on a cladogram are the most closely related.", "分岐図で隣に描かれた二つの生物が最も近縁である。", "支序圖上畫在一起的兩種生物親緣最近。"),
        right: L("Relatedness depends on how recently the common ancestor lived (the nearest shared node). Branches can be rotated without changing relationships.", "近縁の度合いは、共通祖先がどれだけ最近かで決まります（最も近い共通の節）。枝を回転させても関係は変わりません。", "親緣程度取決於共同祖先有多近期（最近的共有節點）。分支可以旋轉而不改變關係。")
      },
      {
        wrong: L("A node on a cladogram is a real, known ancestor species.", "分岐図の節は、実在する既知の祖先種である。", "支序圖上的節點是真實、已知的祖先物種。"),
        right: L("A node represents a hypothetical common ancestor.", "節は仮想の共通祖先を表します。", "節點代表假設的共同祖先。")
      },
      {
        wrong: L("The molecular clock gives exact dates.", "分子時計は正確な年代を与える。", "分子鐘能給出準確的年代。"),
        right: L("It gives only estimates, because mutation rates vary with generation time, population size and selective pressure.", "得られるのは推定値だけです。突然変異の速さは世代時間、個体群の大きさ、選択圧で変わるからです。", "它只能給出估計，因為突變率會隨世代時間、種羣大小和選擇壓力而改變。")
      },
      {
        wrong: L("Archaea are just a kind of bacteria.", "古細菌は細菌の一種にすぎない。", "古菌只是細菌的一種。"),
        right: L("rRNA evidence shows Archaea are a separate domain.", "rRNA の証拠は、古細菌が独立したドメインであることを示します。", "rRNA 證據顯示古菌是獨立的一個域。")
      }
    ],
    beyondSyllabus: [
      L("You do not need to carry out molecular clock calculations beyond simple ideas, or know the mutation rates of any gene.", "単純な考え方を超える分子時計の計算や、遺伝子の突然変異率を知る必要はありません。", "你不需要進行超出簡單概念的分子鐘計算，也不需要知道任何基因的突變率。"),
      L("You do not need to know other tree-building methods (distance methods, maximum likelihood, Bayesian methods). Parsimony is the method named in the guide.", "他の系統樹作成法（距離法、最尤法、ベイズ法）を知る必要はありません。ガイドが挙げているのは最節約法です。", "你不需要認識其他建樹方法（距離法、最大似然法、貝葉斯法）。課程指引提到的是簡約法。"),
      L("You do not need to memorize the details of the figwort family reclassification (which genera moved where).", "ゴマノハグサ科の再分類の細部（どの属がどこへ移ったか）を覚える必要はありません。", "你不需要記憶玄參科重新分類的細節（哪些屬移到哪裏）。"),
      L("You do not need technical terms such as monophyletic, paraphyletic, polyphyletic, synapomorphy or outgroup. The guide uses clade, root, node and terminal branch.", "単系統、側系統、多系統、共有派生形質、外群などの専門用語は不要です。ガイドが使うのはクレード、根、節、末端の枝です。", "你不需要單系群、側系群、多系群、共有衍徵、外群等專門術語。課程指引使用的是演化支、根、節點和末端分支。"),
      L("You do not need to know the cell features that separate Archaea from Bacteria (membrane lipids, histones and so on); the guide asks for the rRNA evidence and the three domains.", "古細菌と細菌を分ける細胞の特徴（膜脂質、ヒストンなど）を知る必要はありません。ガイドが求めるのは rRNA の証拠と三ドメインです。", "你不需要知道區分古菌與細菌的細胞特徵（膜脂質、組蛋白等）；課程指引只要求 rRNA 證據和三域。")
    ],
    links: [
      { to: "A3.1", why: L("Sequences and the species concept: DNA differences between organisms are the data for cladograms.", "配列と種概念：生物間の DNA の違いが分岐図のデータになります。", "序列與物種概念：生物之間的 DNA 差異是支序圖的數據。") },
      { to: "A4.1", why: L("Common ancestry explains shared traits; homologous structures and sequence evidence support evolution.", "共通祖先が共有形質を説明します。相同構造と配列の証拠は進化を支持します。", "共同祖先解釋共有性狀；同源結構和序列證據支持進化論。") },
      { to: "A4.2", why: L("Cladograms measure how evolutionarily distinct a species is, which is used in the EDGE programme.", "分岐図は種の進化的な独自性を測るのに使われ、EDGE 計画で利用されます。", "支序圖可衡量物種的進化獨特程度，EDGE 計劃會使用。") }
    ],
    natureOfScience: [
      L("Paradigm shift: ranked taxa have been challenged by cladistics, which uses unranked clades.", "パラダイムシフト：階級づけされた分類が、ランクのないクレードを使う分岐学によって問い直されました。", "範式轉移：分級的分類單元受到使用不分等級演化支的支序學挑戰。"),
      L("Different criteria for judgement can lead to different hypotheses; parsimony picks the cladogram needing the fewest changes.", "判断基準が違うと異なる仮説になることがあります。最節約法は変化が最も少ない分岐図を選びます。", "不同的判斷準則可以導致不同的假說；簡約法選擇所需變化最少的支序圖。"),
      L("Scientific knowledge claims may eventually be falsified: classification by similar morphology in the figwort family was falsified by cladistics.", "科学的知識の主張はいずれ反証されることがあります。ゴマノハグサ科の形態の類似に基づく分類は、分岐学によって反証されました。", "科學知識主張最終可能被推翻：玄參科以形態相似為基礎的分類，被支序學證偽。")
    ],
    questions: [
      {
        id: "a3-2-q01", type: "mcq", ahl: true, difficulty: 1, ref: "A3.2.1", paper: "1A",
        stem: L("Why is classification of organisms needed?", "生物の分類が必要なのはなぜか。", "為何需要對生物進行分類？"),
        options: [L("Because every species is identical", "すべての種が同一だから", "因為每個物種都相同"), L("Because of the immense diversity of species", "種の多様性が非常に大きいから", "因為物種的多樣性極大"), L("Because species never change", "種は決して変化しないから", "因為物種永遠不變"), L("Because only a few species exist", "存在する種がわずかだから", "因為只存在少數物種")],
        answer: 1,
        explanation: L("Millions of species exist, so a system is needed to name, organize and study them. Options A, C and D are all false statements about life.", "種は数百万もあるので、名前を付け、整理し、研究するための体系が必要です。A、C、Dはいずれも生物について誤った記述です。", "物種有數百萬種，所以需要一個系統來命名、整理和研究牠們。A、C、D 都是關於生命的錯誤說法。")
      },
      {
        id: "a3-2-q02", type: "order", ahl: true, difficulty: 1, ref: "A3.2.2", paper: "1A",
        stem: L("Put the taxa of the traditional hierarchy in order, from the largest group to the smallest.", "伝統的な階層の分類階級を、最大のグループから最小のグループの順に並べよ。", "把傳統階層的分類等級由最大的組別排到最小的組別。"),
        items: [L("kingdom", "界", "界"), L("phylum", "門", "門"), L("class", "綱", "綱"), L("order", "目", "目"), L("family", "科", "科"), L("genus", "属", "屬"), L("species", "種", "種")],
        explanation: L("Each rank contains one or more groups of the rank below it. A mnemonic such as 'King Philip Came Over For Good Soup' can help.", "各階級は、その下の階級のグループを一つ以上含みます。「King Philip Came Over For Good Soup」のような語呂合わせが役立ちます。", "每一等級包含下一等級的一個或多個組別。可以用 'King Philip Came Over For Good Soup' 這類記憶口訣。")
      },
      {
        id: "a3-2-q03", type: "mcq", ahl: true, difficulty: 2, ref: "A3.2.2", paper: "1A",
        stem: L("Which statement is a criticism of the traditional ranked hierarchy of taxa?", "伝統的な階級づけされた分類階層への批判はどれか。", "以下哪項是對傳統分級分類階層的批評？"),
        options: [L("It has too few ranks to name any species", "階級が少なすぎてどの種にも名前を付けられない", "等級太少，無法為任何物種命名"), L("The ranks are arbitrary and do not always match patterns of divergence in evolution", "階級は恣意的で、進化における分岐のパターンと必ずしも一致しない", "各等級是武斷的，並不總是與進化中的分歧規律相符"), L("It is based only on DNA sequences", "DNA 配列だけに基づいている", "它只以 DNA 序列為基礎"), L("It was invented after cladistics", "分岐学より後に考案された", "它是在支序學之後才發明的")],
        answer: 1,
        explanation: L("A fixed rank such as 'family' is a human decision and two families may have diverged at very different times. C and D are wrong: the traditional system came first and used mainly morphology.", "「科」のような固定された階級は人間が決めたもので、二つの科が分岐した時期が大きく違うことがあります。CとDは誤りで、伝統的な体系のほうが先にあり、主に形態を使っていました。", "「科」這類固定等級是人為決定的，兩個科可能在非常不同的時間分歧。C 和 D 錯誤：傳統系統較早出現，主要使用形態。")
      },
      {
        id: "a3-2-q04", type: "mcq", ahl: true, difficulty: 2, ref: "A3.2.3", paper: "1A",
        stem: L("What is an advantage of a classification that follows evolutionary relationships?", "進化的関係に沿った分類の利点は何か。", "按進化關係分類有甚麼好處？"),
        options: [L("It makes all species look alike", "すべての種が似て見える", "令所有物種看起來相似"), L("Characteristics of an organism can be predicted from the clade it belongs to", "所属するクレードから、その生物の特徴を予測できる", "可以由生物所屬的演化支預測其特徵"), L("It removes the need for DNA evidence", "DNA の証拠が不要になる", "不再需要 DNA 證據"), L("It guarantees no species will ever be reclassified", "どの種も二度と再分類されないことが保証される", "保證沒有物種會被重新分類")],
        answer: 1,
        explanation: L("Members of a clade inherited traits from their common ancestor, so they share them. D is wrong: new evidence can still change a cladogram.", "クレードの構成員は共通祖先から形質を受け継ぐので共有しています。Dは誤りで、新しい証拠で分岐図は変わり得ます。", "演化支的成員從共同祖先遺傳性狀，所以共有這些性狀。D 錯誤：新證據仍可令支序圖改變。")
      },
      {
        id: "a3-2-q05", type: "mcq", ahl: true, difficulty: 1, ref: "A3.2.4", paper: "1A",
        stem: L("Which best defines a clade?", "クレードの定義として最も適切なのはどれか。", "以下哪項最能定義演化支？"),
        options: [L("Any group of organisms that look similar", "見た目が似ている生物の集団", "外貌相似的任何一羣生物"), L("A common ancestor and all of its descendants", "共通祖先とそのすべての子孫", "一個共同祖先及其所有後代"), L("All organisms living in the same habitat", "同じ生息地に住むすべての生物", "生活在同一生境的所有生物"), L("The organisms at the tips of a cladogram only", "分岐図の先端にある生物だけ", "只是支序圖尖端的生物")],
        answer: 1,
        explanation: L("A clade is defined by ancestry, not by appearance (A) or habitat (C), and it includes the ancestor, not just the tips (D).", "クレードは見た目 (A) や生息地 (C) ではなく祖先関係で定義され、先端だけ (D) でなく祖先も含みます。", "演化支由祖先關係定義，而不是外貌 (A) 或生境 (C)；它包括祖先，而不只是尖端 (D)。")
      },
      {
        id: "a3-2-q06", type: "mcq", ahl: true, difficulty: 2, ref: "A3.2.7", paper: "1B",
        stem: L("Study the cladogram. Which organism is most closely related to T?", "分岐図を調べよ。Tに最も近縁な生物はどれか。", "觀察支序圖。哪一種生物與 T 的親緣最近？"),
        data: L(`<figure>${treeSvg([["P","Q"],["R",["S","T"]]])}</figure>`, `<figure>${treeSvg([["P","Q"],["R",["S","T"]]])}</figure>`, `<figure>${treeSvg([["P","Q"],["R",["S","T"]]])}</figure>`),
        options: [L("P", "P", "P"), L("Q", "Q", "Q"), L("R", "R", "R"), L("S", "S", "S")],
        answer: 3,
        explanation: L("S and T meet at the nearest node, so they share the most recent common ancestor. R is the next closest because it joins the S and T branch at the next node. The tempting wrong answer is R, but closeness is decided only by node position, not by how near names are drawn on the page.", "SとTは最も近い節で出会うので、最も新しい共通祖先を共有します。Rは次の節でSとTの枝につながるので次に近い関係です。誤って選びがちなのはRですが、近縁かどうかは紙面で名前がどれだけ近くに描かれているかではなく、節の位置だけで決まります。", "S 和 T 在最近的節點相遇，所以牠們共有最近的共同祖先。R 在下一個節點才連上 S 和 T 的分支，所以其次最近。容易誤選的是 R，但親緣遠近只取決於節點的位置，而不是名稱在圖上畫得有多近。")
      },
      {
        id: "a3-2-q07", type: "short", ahl: true, difficulty: 2, ref: "A3.2.7", paper: "1B", commandTerm: "Deduce", marks: 4,
        stem: L("Use the cladogram (nodes are numbered). (a) Identify the node that represents the most recent common ancestor of C and E. (b) State the members of the clade that starts at node 3. (c) State what a node represents. (d) Deduce whether A or C is more closely related to E.", "分岐図（節に番号が付いている）を使え。(a) CとEの最も近い共通祖先を表す節を答えよ (Identify)。(b) 節3から始まるクレードの構成員を答えよ (State)。(c) 節が何を表すか答えよ (State)。(d) AとCのどちらがEにより近縁か推論せよ (Deduce)。", "利用支序圖（節點已編號）。(a) 識別 (Identify) 代表 C 與 E 最近共同祖先的節點。(b) 說出 (State) 由節點 3 開始的演化支的成員。(c) 說出 (State) 節點代表甚麼。(d) 推斷 (Deduce) A 與 C 哪一個與 E 的親緣較近。"),
        data: L(`<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}</figure>`, `<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}</figure>`, `<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}</figure>`),
        markscheme: [
          L("(a) Node 3", "(a) 節3", "(a) 節點 3"),
          L("(b) C, D and E", "(b) C、D、E", "(b) C、D 和 E"),
          L("(c) A hypothetical common ancestor (of the organisms/clades that branch from it)", "(c) 仮想の共通祖先（そこから分かれる生物／クレードの）", "(c) 假設的共同祖先（由它分出的生物／演化支的）"),
          L("(d) C is more closely related to E, because C and E share a more recent common ancestor (node 3) than A and E (node 1, the root)", "(d) CのほうがEに近縁。CとEが共有する共通祖先（節3）は、AとEの共通祖先（節1、根）より新しいから", "(d) C 與 E 的親緣較近，因為 C 與 E 的共同祖先（節點 3）比 A 與 E 的共同祖先（節點 1，即根）更近期")
        ],
        modelAnswer: L("(a) Node 3. (b) C, D and E. (c) A hypothetical common ancestor. (d) C, because C and E meet at node 3, which is more recent than node 1 where A and E meet.", "(a) 節3。(b) C、D、E。(c) 仮想の共通祖先。(d) C。CとEは節3で出会い、AとEが出会う節1より新しいから。", "(a) 節點 3。(b) C、D 和 E。(c) 假設的共同祖先。(d) C，因為 C 與 E 在節點 3 相遇，比 A 與 E 相遇的節點 1 更近期。")
      },
      {
        id: "a3-2-q08", type: "mcq", ahl: true, difficulty: 2, ref: "A3.2.7", paper: "1A",
        stem: L("A student redraws a cladogram by rotating the two branches that come from one node, so the tips appear in a different order. What happens to the evolutionary relationships shown?", "ある生徒が、一つの節から出る二本の枝を回転させて分岐図を描き直し、先端の並び順が変わった。示される進化的関係はどうなるか。", "一名學生把由某一節點分出的兩條分支旋轉，重新畫出支序圖，使尖端的次序改變。所顯示的進化關係會怎樣？"),
        options: [L("They change, because the neighbours are now different", "隣り合う生物が変わるので、変わる", "會改變，因為相鄰的生物不同了"), L("They stay the same, because relationships depend on the nodes, not the order of the tips", "変わらない。関係は先端の並び順ではなく節で決まるから", "不變，因為關係取決於節點，而不是尖端的次序"), L("They are reversed in time", "時間が逆になる", "時間次序倒轉"), L("The root moves to a different node", "根が別の節に移る", "根移到另一個節點")],
        answer: 1,
        explanation: L("Rotation around a node changes only how the diagram is drawn. Who shares which common ancestor is unchanged. A is the common misconception that neighbours on the page are closest relatives.", "節を中心とした回転は、図の描き方が変わるだけです。誰がどの共通祖先を共有するかは変わりません。Aは、紙面で隣り合うものが最も近縁だという典型的な誤解です。", "圍繞節點旋轉只改變圖的畫法；誰與誰共有哪個共同祖先並沒有改變。A 是常見的誤解，以為圖上相鄰的就是最近的親屬。")
      },
      {
        id: "a3-2-q09", type: "mcq", ahl: true, difficulty: 2, ref: "A3.2.5", paper: "1B",
        stem: L("The table shows the number of amino acid differences in the same protein between species pairs (illustrative data). Using the idea of the molecular clock, which conclusion is most reasonable?", "表は、同じタンパク質のアミノ酸配列の種の組ごとの違いの数を示す（例示データ）。分子時計の考え方を使うと、最も適切な結論はどれか。", "下表顯示同一種蛋白質在不同物種配對之間的氨基酸差異數目（示例數據）。運用分子鐘的概念，哪個結論最合理？"),
        data: L(
          `<table><tr><th>Species pair</th><th>Amino acid differences</th></tr><tr><td>P – Q</td><td>4</td></tr><tr><td>P – R</td><td>12</td></tr><tr><td>Q – R</td><td>12</td></tr></table>`,
          `<table><tr><th>種の組</th><th>アミノ酸の違い</th></tr><tr><td>P – Q</td><td>4</td></tr><tr><td>P – R</td><td>12</td></tr><tr><td>Q – R</td><td>12</td></tr></table>`,
          `<table><tr><th>物種配對</th><th>氨基酸差異</th></tr><tr><td>P – Q</td><td>4</td></tr><tr><td>P – R</td><td>12</td></tr><tr><td>Q – R</td><td>12</td></tr></table>`
        ),
        options: [L("P and Q diverged most recently; R split off from their common ancestor earlier", "PとQが最も最近分岐した。Rはその共通祖先からもっと前に分かれた", "P 和 Q 最近才分歧；R 較早從牠們的共同祖先分出"), L("Q and R diverged most recently", "QとRが最も最近分岐した", "Q 和 R 最近才分歧"), L("All three species diverged at exactly the same time", "三種はまったく同時に分岐した", "三個物種剛好在同一時間分歧"), L("R is the ancestor of P and Q", "RはPとQの祖先である", "R 是 P 和 Q 的祖先")],
        answer: 0,
        explanation: L("Fewer differences mean less time has passed since the split, so P and Q share the most recent ancestor. R differs equally from both, so it branched off earlier. D is wrong: R is a living species, not the ancestor, and its protein has also changed since the split.", "違いが少ないほど分岐からの時間が短いので、PとQが最も新しい共通祖先を共有します。RはPとQの両方と同じだけ違うので、もっと前に分かれました。Dは誤りで、Rは現存する種であり祖先ではなく、分岐後にRのタンパク質も変化しています。", "差異越少，表示分開後經過的時間越短，所以 P 和 Q 有最近的共同祖先。R 與兩者的差異相同，所以較早分出。D 錯誤：R 是現存物種，不是祖先，牠的蛋白質在分開後也有改變。")
      },
      {
        id: "a3-2-q10", type: "short", ahl: true, difficulty: 2, ref: "A3.2.5", paper: "2", commandTerm: "Suggest", marks: 2,
        stem: L("Suggest two reasons why molecular clock estimates of the time clades diverged are only approximate.", "分子時計によるクレードの分岐時期の推定が、おおよそのものにすぎない理由を二つ挙げよ (Suggest)。", "提出 (Suggest) 兩個原因，說明為何分子鐘對演化支分歧時間的估計只是概約的。"),
        markscheme: [
          L("Mutation rate is affected by generation time (more generations = more mutations copied)", "突然変異の速さは世代時間の影響を受ける（世代が多いほど多くの突然変異が複製される）", "突變率受世代時間影響（世代越多，被複製的突變越多）"),
          L("Mutation rate/spread of mutations is affected by population size", "突然変異の速さや広がり方は個体群の大きさの影響を受ける", "突變率／突變的擴散受種羣大小影響"),
          L("Selective pressure differs between lineages/over time", "選択圧が系統間や時代で異なる", "選擇壓力在不同譜系／不同時期並不相同"),
          L("Any other valid factor that makes mutation rates vary", "突然変異の速さを変えるその他の妥当な要因", "其他令突變率不同的有效因素")
        ],
        modelAnswer: L("The rate at which differences accumulate is not constant. It is affected by generation time and by population size, and also by how strong selection is in each lineage.", "違いが蓄積する速さは一定ではない。世代時間や個体群の大きさ、また各系統での選択の強さに影響される。", "差異累積的速率並不恆定，會受世代時間和種羣大小影響，也受各譜系選擇強度影響。")
      },
      {
        id: "a3-2-q11", type: "short", ahl: true, difficulty: 3, ref: "A3.2.6", paper: "1B", commandTerm: "Deduce", marks: 4,
        stem: L("The table shows base sequences at six sites for four species (sample data). Trees 2 and 3 each need more changes than Tree 1. (a) Determine the minimum number of changes on Tree 1, ((A,B),(C,D)). (b) Tree 2 ((A,C),(B,D)) needs 7 changes and Tree 3 ((A,D),(B,C)) needs 8. Deduce which cladogram is the most probable and explain your choice.", "表は四種の六つの部位の塩基配列を示す（サンプルデータ）。木2と木3は、いずれも木1より多くの変化を必要とする。(a) 木1 ((A,B),(C,D)) に必要な最小の変化の数を求めよ (Determine)。(b) 木2 ((A,C),(B,D)) は変化7回、木3 ((A,D),(B,C)) は変化8回を要する。最も確からしい分岐図を推論し (Deduce)、理由を説明せよ。", "下表顯示四個物種在六個位點的鹼基序列（樣本數據）。樹 2 和樹 3 所需的變化都比樹 1 多。(a) 求出 (Determine) 樹 1 ((A,B),(C,D)) 所需的最少變化次數。(b) 樹 2 ((A,C),(B,D)) 需要 7 次變化，樹 3 ((A,D),(B,C)) 需要 8 次。推斷 (Deduce) 哪一個支序圖最有可能，並解釋你的選擇。"),
        data: L(
          `<table><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>A</td><td>T</td><td>G</td><td>A</td><td>C</td><td>T</td><td>G</td></tr><tr><td>B</td><td>T</td><td>G</td><td>A</td><td>T</td><td>T</td><td>C</td></tr><tr><td>C</td><td>C</td><td>A</td><td>A</td><td>C</td><td>T</td><td>G</td></tr><tr><td>D</td><td>C</td><td>A</td><td>G</td><td>T</td><td>T</td><td>G</td></tr></table>`,
          `<table><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>A</td><td>T</td><td>G</td><td>A</td><td>C</td><td>T</td><td>G</td></tr><tr><td>B</td><td>T</td><td>G</td><td>A</td><td>T</td><td>T</td><td>C</td></tr><tr><td>C</td><td>C</td><td>A</td><td>A</td><td>C</td><td>T</td><td>G</td></tr><tr><td>D</td><td>C</td><td>A</td><td>G</td><td>T</td><td>T</td><td>G</td></tr></table>`,
          `<table><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>A</td><td>T</td><td>G</td><td>A</td><td>C</td><td>T</td><td>G</td></tr><tr><td>B</td><td>T</td><td>G</td><td>A</td><td>T</td><td>T</td><td>C</td></tr><tr><td>C</td><td>C</td><td>A</td><td>A</td><td>C</td><td>T</td><td>G</td></tr><tr><td>D</td><td>C</td><td>A</td><td>G</td><td>T</td><td>T</td><td>G</td></tr></table>`
        ),
        markscheme: [
          L("(a) Sites 1, 2: one change each (2); site 3: one (D differs); site 4: two; site 5: none; site 6: one (B differs)", "(a) 部位1・2は各1回（計2）、部位3は1回（Dだけ異なる）、部位4は2回、部位5は0回、部位6は1回（Bだけ異なる）", "(a) 位點 1、2 各一次（共 2）；位點 3 一次（只有 D 不同）；位點 4 兩次；位點 5 沒有；位點 6 一次（只有 B 不同）"),
          L("Total = 6 changes on Tree 1", "木1の合計は6回", "樹 1 合共 6 次變化"),
          L("(b) Tree 1 is the most probable cladogram", "(b) 木1が最も確からしい分岐図", "(b) 樹 1 是最有可能的支序圖"),
          L("Parsimony: it explains the sequence differences with the fewest changes (6 < 7 < 8)", "最節約法：配列の違いを最も少ない変化（6 < 7 < 8）で説明できる", "簡約法：它以最少的變化次數 (6 < 7 < 8) 解釋序列差異")
        ],
        modelAnswer: L("(a) 6 changes (1 + 1 + 1 + 2 + 0 + 1). (b) Tree 1, ((A,B),(C,D)), because it needs the fewest changes (6, against 7 and 8). This is the parsimony principle: the cladogram that explains the observed differences with the smallest number of changes is the most probable.", "(a) 6回 (1 + 1 + 1 + 2 + 0 + 1)。(b) 木1 ((A,B),(C,D))。必要な変化が最も少ない（6回で、7回と8回より少ない）から。これが最節約の原則で、観察された違いを最も少ない回数の変化で説明できる分岐図が最も確からしい。", "(a) 6 次變化 (1 + 1 + 1 + 2 + 0 + 1)。(b) 樹 1 ((A,B),(C,D))，因為它所需的變化最少（6 次，對比 7 次和 8 次）。這是簡約原則：以最少變化次數解釋所觀察差異的支序圖最有可能。")
      },
      {
        id: "a3-2-q12", type: "mcq", ahl: true, difficulty: 2, ref: "A3.2.8", paper: "1A",
        stem: L("Cladistic analysis of DNA showed that some plants placed in the figwort family because of similar flowers belong in other families. What best explains the similar flowers?", "DNA の分岐学的解析により、花が似ているためにゴマノハグサ科に入れられていた一部の植物は、他の科に属することが分かった。似た花を最もよく説明するのはどれか。", "對 DNA 的支序學分析顯示，一些因花相似而被放入玄參科的植物其實屬於其他科。甚麼最能解釋相似的花？"),
        options: [L("Convergent evolution", "収斂進化", "趨同進化"), L("They are the same species", "同じ種である", "牠們是同一物種"), L("Lamarckian inheritance", "ラマルク的な遺伝", "拉馬克式遺傳"), L("Horizontal gene transfer between all the plants", "すべての植物間の遺伝子の水平伝播", "所有植物之間的水平基因轉移")],
        answer: 0,
        explanation: L("Similar features arose independently in unrelated lineages (convergent evolution), so morphology misled the original classification. B is wrong because they are in different families; C and D are not the explanation given by the evidence.", "似た特徴が無関係な系統で独立に生じた（収斂進化）ため、形態が最初の分類を誤らせました。Bは科が異なるので誤りで、CとDは証拠が示す説明ではありません。", "相似的特徵在沒有親緣關係的譜系中獨立出現（趨同進化），所以形態誤導了原本的分類。B 錯，因為牠們屬於不同的科；C 和 D 不是證據所顯示的解釋。")
      },
      {
        id: "a3-2-q13", type: "mcq", ahl: true, difficulty: 1, ref: "A3.2.9", paper: "1A",
        stem: L("Which evidence was used to propose the three-domain system?", "三ドメイン説の提案に使われた証拠はどれか。", "提出三域系統時使用了哪種證據？"),
        options: [L("Presence or absence of a cell wall", "細胞壁の有無", "有沒有細胞壁"), L("Base sequences of ribosomal RNA", "リボソーム RNA の塩基配列", "核糖體 RNA 的鹼基序列"), L("Body size", "体の大きさ", "體型大小"), L("Habitat of the organisms", "生物の生息地", "生物的生境")],
        answer: 1,
        explanation: L("rRNA is present in all cells, so its sequence can be compared across all life. Cell wall, size and habitat do not separate the three domains reliably.", "rRNA はすべての細胞にあるので、すべての生物で配列を比較できます。細胞壁、大きさ、生息地は三つのドメインを確実には分けません。", "rRNA 存在於所有細胞，所以可以比較所有生物的序列。細胞壁、大小和生境都不能可靠地區分三個域。")
      },
      {
        id: "a3-2-q14", type: "multi", ahl: true, difficulty: 2, ref: "A3.2.4", paper: "1B",
        stem: L("In the cladogram, which groups are clades? Select ALL that apply.", "この分岐図で、クレードであるグループをすべて選べ。", "在這支序圖中，哪些類羣是演化支？選出所有適用的選項。"),
        data: L(`<figure>${treeSvg([["A","B"],["C",["D","E"]]])}</figure>`, `<figure>${treeSvg([["A","B"],["C",["D","E"]]])}</figure>`, `<figure>${treeSvg([["A","B"],["C",["D","E"]]])}</figure>`),
        options: [L("D and E", "DとE", "D 和 E"), L("B and C", "BとC", "B 和 C"), L("C, D and E", "C、D、E", "C、D 和 E"), L("A, B and C", "A、B、C", "A、B 和 C")],
        answer: [0, 2],
        explanation: L("A clade is a node plus all of its descendants: D+E and C+D+E each come from one node. B and C do not share a node of their own, and A, B, C leaves out D and E, which descend from the same node as C.", "クレードは一つの節とそのすべての子孫です。D+EとC+D+Eはそれぞれ一つの節に由来します。BとCは自分たちだけの節をもたず、A、B、Cは、Cと同じ節の子孫であるDとEを除いています。", "演化支是一個節點加上它所有的後代：D+E 和 C+D+E 各自由一個節點而來。B 和 C 沒有只屬於自己的節點；A、B、C 則漏掉了與 C 出自同一節點的 D 和 E。")
      },
      {
        id: "a3-2-q15", type: "match", ahl: true, difficulty: 1, ref: "A3.2.7", paper: "1A",
        stem: L("Match each cladogram term with its meaning.", "分岐図の各用語を意味と結び付けよ。", "把每個支序圖術語配對其意思。"),
        pairs: [
          { left: L("Root", "根", "根"), right: L("Common ancestor of all organisms on the cladogram", "分岐図のすべての生物の共通祖先", "支序圖上所有生物的共同祖先") },
          { left: L("Node", "節", "節點"), right: L("Branching point; a hypothetical common ancestor", "枝分かれ点。仮想の共通祖先", "分支點；假設的共同祖先") },
          { left: L("Terminal branch", "末端の枝", "末端分支"), right: L("Branch ending at a tip, leading to one organism or group", "先端で終わり、一つの生物またはグループにつながる枝", "終止於尖端、通向一種生物或一個類羣的分支") },
          { left: L("Clade", "クレード", "演化支"), right: L("A node together with all of its descendants", "一つの節とそのすべての子孫", "一個節點連同其所有後代") }
        ],
        explanation: L("The root is the base of the whole tree; every node is a split; tips are the organisms studied.", "根は木全体の根元、節はすべて分岐点、先端は調べる生物です。", "根是整棵樹的底部；每個節點是一次分支；尖端是被研究的生物。")
      },
      {
        id: "a3-2-q16", type: "short", ahl: true, difficulty: 2, ref: "A3.2.2", paper: "2", commandTerm: "Explain", marks: 3,
        stem: L("Explain why a fixed ranking of taxa (kingdom, phylum and so on) is regarded as arbitrary, and outline the alternative offered by cladistics.", "階級を固定した分類（界、門など）が恣意的とみなされる理由を説明し (Explain)、分岐学が提供する代わりの方法を説明せよ (Outline)。", "解釋 (Explain) 為何固定的分類等級（界、門等）被視為武斷，並概述 (Outline) 支序學提供的另一種方法。"),
        markscheme: [
          L("Variation between organisms changes gradually / in degrees, so there are no natural cut-off points between ranks", "生物間の変異は連続的に変わるので、階級の間に自然な区切りがない", "生物之間的變異是逐步改變的，所以各等級之間沒有天然的分界"),
          L("Ranks do not necessarily correspond to the patterns/timing of divergence in evolution", "階級は進化における分岐のパターンや時期と必ずしも対応しない", "等級不一定與進化中分歧的規律／時間相對應"),
          L("Cladistics classifies organisms into unranked clades based on common ancestry", "分岐学は共通祖先に基づいて生物をランクのないクレードに分類する", "支序學按共同祖先把生物分為不分等級的演化支")
        ],
        modelAnswer: L("Variation between organisms is gradual, so there is no natural place where a family ends and an order begins, and ranks do not match the timing of splits. Cladistics instead groups organisms into unranked clades defined by common ancestry.", "生物間の変異は連続的で、科が終わり目が始まる自然な場所はなく、階級は分岐の時期とも対応しない。分岐学は代わりに、共通祖先で定義されるランクのないクレードに生物をまとめる。", "生物之間的變異是逐步的，所以沒有天然的位置說明科在哪裏結束、目在哪裏開始，而且等級與分歧的時間並不吻合。支序學則改以共同祖先所界定的不分等級演化支來為生物分組。")
      },
      {
        id: "a3-2-q17", type: "short", ahl: true, difficulty: 3, ref: "A3.2.8", paper: "2", commandTerm: "Discuss", marks: 4,
        stem: L("Discuss how cladistics can show that a traditional classification based on similar structures is not correct, using one example.", "分岐学によって、似た構造に基づく伝統的な分類が正しくないことを示せることを、一つの例を使って論述せよ (Discuss)。", "運用一個例子，論述 (Discuss) 支序學如何可以顯示以相似結構為基礎的傳統分類並不正確。"),
        markscheme: [
          L("Traditional classification grouped organisms by similarity in morphology", "伝統的な分類は形態の類似によって生物をまとめた", "傳統分類按形態的相似性把生物分組"),
          L("Cladistics compares DNA/protein sequences, which is more objective evidence of common ancestry", "分岐学は DNA／タンパク質の配列を比べ、これは共通祖先のより客観的な証拠である", "支序學比較 DNA／蛋白質序列，這是共同祖先較客觀的證據"),
          L("Example: figwort family plants with similar flowers were shown to be more closely related to plants in other families / were moved to other families", "例：花が似ていたゴマノハグサ科の植物は、他の科の植物とより近縁であると示され、他の科に移された", "例子：因花相似而屬玄參科的植物，被證明與其他科的植物親緣更近／被移到其他科"),
          L("The similar structures arose by convergent evolution, not common ancestry, so the old grouping was falsified", "似た構造は共通祖先ではなく収斂進化で生じたので、古い分類は反証された", "相似的結構是趨同進化而非共同祖先所致，所以舊分類被證偽"),
          L("Balanced view: morphology can still be useful / sequences may also give conflicting hypotheses", "バランスのとれた見方：形態は今でも役に立つ／配列も異なる仮説を与えることがある", "持平看法：形態仍然有用／序列也可能給出相互衝突的假說")
        ],
        modelAnswer: L("Traditional classification grouped plants by similar flowers. Cladistic analysis of DNA, which is more objective evidence of ancestry, showed that many figwort family plants were closer relatives of plants in other families, so they were moved. The similar flowers had evolved independently (convergent evolution). Morphology is still useful, but it can mislead when features evolve more than once.", "伝統的な分類は花の似た植物をまとめた。祖先関係のより客観的な証拠である DNA の分岐学的解析により、ゴマノハグサ科の多くの植物が他の科の植物とより近縁だと示され、移された。似た花は独立に進化していた（収斂進化）。形態は今でも役に立つが、特徴が何度も進化すると誤解を招く。", "傳統分類把花相似的植物歸在一起。對 DNA（祖先關係較客觀的證據）的支序學分析顯示，許多玄參科植物與其他科的植物親緣更近，所以被移走。相似的花是獨立演化出來的（趨同進化）。形態仍然有用，但當特徵多次獨立演化時，可能產生誤導。")
      },
      {
        id: "a3-2-q18", type: "mcq", ahl: true, difficulty: 3, ref: "A3.2.7", paper: "1B",
        stem: L("Which statement about this cladogram is correct?", "この分岐図について正しい記述はどれか。", "關於這個支序圖，哪項陳述正確？"),
        data: L(`<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}</figure>`, `<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}</figure>`, `<figure>${treeSvg([["A","B"],["C",["D","E"]]], { nodes: true })}</figure>`),
        options: [L("C is the ancestor of D and E", "CはDとEの祖先である", "C 是 D 和 E 的祖先"), L("Node 4 represents a hypothetical common ancestor of D and E", "節4はDとEの仮想の共通祖先を表す", "節點 4 代表 D 和 E 的假設共同祖先"), L("B is more closely related to C than to A", "BはAよりCに近縁である", "B 與 C 的親緣比與 A 的更近"), L("A and E are the most closely related pair", "AとEが最も近縁な組である", "A 和 E 是親緣最近的一對")],
        answer: 1,
        explanation: L("Tips are living (or studied) organisms, never the ancestors of other tips (A is wrong); nodes are the hypothetical ancestors. B and A share node 2, which is more recent than node 1, so B is closer to A (C is wrong). A and E meet only at the root (D is wrong).", "先端は現存する（または研究対象の）生物であり、他の先端の祖先ではありません (Aは誤り)。祖先にあたるのは節です。BとAは節2を共有し、これは節1より新しいので、BはAに近縁です (Cは誤り)。AとEは根でしか出会いません (Dは誤り)。", "尖端是現存（或被研究）的生物，絕不是其他尖端的祖先（A 錯）；節點才是假設的祖先。B 與 A 共有節點 2，比節點 1 更近期，所以 B 與 A 較近（C 錯）。A 與 E 只在根相遇（D 錯）。")
      },
      {"id":"a3-2-q19","type":"mcq","ahl":true,"difficulty":2,"ref":"A3.2.2","paper":"1A","stem":{"en":"Crocodiles share a more recent common ancestor with birds than they do with lizards. The traditional class Reptilia includes crocodiles and lizards but not birds. What does this show about the class Reptilia?","ja":"ワニは、トカゲよりも鳥類と新しい共通祖先を共有する。従来の爬虫綱はワニとトカゲを含むが鳥類を含まない。このことは爬虫綱について何を示すか。","zh":"鱷魚與鳥類共有的共同祖先，比與蜥蜴共有的更近。傳統的爬行綱包括鱷魚和蜥蜴，但不包括鳥類。這說明爬行綱有甚麼問題？"},"options":[{"en":"It is a clade, because all reptiles share a common ancestor","ja":"クレードである。すべての爬虫類は共通祖先をもつから","zh":"它是演化支，因為所有爬行動物都有共同祖先"},{"en":"It leaves out some descendants of its own common ancestor, so it does not match evolutionary relationships","ja":"自分自身の共通祖先の子孫の一部を除外しているので、進化的な関係と一致しない","zh":"它排除了自己共同祖先的部分後代，所以與進化關係不相符"},{"en":"Birds must be moved into a different kingdom","ja":"鳥類は別の界に移すべきである","zh":"鳥類必須移到另一個界"},{"en":"Crocodiles should be classified as birds","ja":"ワニは鳥類に分類すべきである","zh":"鱷魚應分類為鳥類"}],"answer":1,"explanation":{"en":"A clade contains a common ancestor and all of its descendants. Reptilia, as traditionally defined, omits birds, which descend from within the same lineage. A is wrong for that reason. C and D are not supported: the problem is the grouping, not the kingdom or the identity of crocodiles.","ja":"クレードは共通祖先とそのすべての子孫を含みます。従来の定義の爬虫綱は、同じ系統の中から進化した鳥類を除外しています。そのためAは誤りです。CとDは根拠がありません。問題はグループ分けであって、界やワニの正体ではありません。","zh":"演化支包含一個共同祖先及其所有後代。按傳統定義的爬行綱排除了從同一譜系內演化出來的鳥類，所以 A 錯誤。C 和 D 沒有根據：問題在於分組方式，而不是界或鱷魚的身分。"}},
      {"id":"a3-2-q20","type":"short","ahl":true,"difficulty":3,"ref":"A3.2.5","paper":"1B","commandTerm":"Calculate","marks":4,"stem":{"en":"The table gives the number of amino acid differences in one protein between three species (sample data). Fossils show that P and Q split 12 million years ago. (a) Calculate the rate at which differences accumulate, in differences per million years, for the pair P–Q. (b) Using this rate, estimate how long ago R split from the ancestor of P and Q. (c) State one reason why this estimate may be inaccurate.","ja":"表は、一つのタンパク質について三つの種の間のアミノ酸の違いの数を示す（サンプルデータ）。化石から、PとQは1200万年前に分岐したことが分かっている。(a) PとQの組について、違いが蓄積する速さを、100万年あたりの違いの数で計算せよ (Calculate)。(b) この速さを使って、RがPとQの祖先から分岐したのは何年前か推定せよ。(c) この推定が不正確かもしれない理由を一つ述べよ (State)。","zh":"下表顯示三個物種之間某蛋白質的氨基酸差異數目（樣本數據）。化石顯示 P 和 Q 在 1200 萬年前分開。(a) 計算 (Calculate) P–Q 配對的差異累積速率，以每百萬年的差異數表示。(b) 利用此速率，估計 R 在多久以前從 P 和 Q 的祖先分出。(c) 陳述 (State) 此估計可能不準確的一個原因。"},"data":{"en":"<table><tr><th>Species pair</th><th>Amino acid differences</th></tr><tr><td>P – Q</td><td>6</td></tr><tr><td>P – R</td><td>21</td></tr><tr><td>Q – R</td><td>21</td></tr></table>","ja":"<table><tr><th>種の組</th><th>アミノ酸の違い</th></tr><tr><td>P – Q</td><td>6</td></tr><tr><td>P – R</td><td>21</td></tr><tr><td>Q – R</td><td>21</td></tr></table>","zh":"<table><tr><th>物種配對</th><th>氨基酸差異</th></tr><tr><td>P – Q</td><td>6</td></tr><tr><td>P – R</td><td>21</td></tr><tr><td>Q – R</td><td>21</td></tr></table>"},"markscheme":[{"en":"(a) 6 ÷ 12 = 0.5 differences per million years","ja":"(a) 6 ÷ 12 = 100万年あたり0.5","zh":"(a) 6 ÷ 12 = 每百萬年 0.5 個差異"},{"en":"(b) 21 ÷ 0.5 = 42 million years ago","ja":"(b) 21 ÷ 0.5 = 4200万年前","zh":"(b) 21 ÷ 0.5 = 4200 萬年前"},{"en":"(c) The mutation rate is not constant (affected by generation time)","ja":"(c) 突然変異の速さは一定ではない（世代時間の影響）","zh":"(c) 突變率並非恆定（受世代時間影響）"},{"en":"Accept population size, selective pressure, or uncertainty in the fossil date as alternatives for (c)","ja":"(c) は個体群の大きさ、選択圧、化石の年代の不確かさでも可","zh":"(c) 亦接受種羣大小、選擇壓力或化石年代的不確定性"}],"modelAnswer":{"en":"(a) 6 differences in 12 million years gives 0.5 differences per million years. (b) R differs from P (and from Q) by 21, so 21 ÷ 0.5 = 42 million years ago. (c) The rate of mutation is not constant: it depends on generation time, population size and selective pressure, so the date is only an estimate.","ja":"(a) 1200万年で6か所の違いなので、100万年あたり0.5。(b) RはP（およびQ）と21か所違うので、21 ÷ 0.5 = 4200万年前。(c) 突然変異の速さは一定ではなく、世代時間、個体群の大きさ、選択圧に依存するので、この年代は推定値にすぎない。","zh":"(a) 1200 萬年有 6 個差異，即每百萬年 0.5 個差異。(b) R 與 P（以及 Q）有 21 個差異，所以 21 ÷ 0.5 = 4200 萬年前。(c) 突變率並不恆定，會受世代時間、種羣大小和選擇壓力影響，所以這個年代只是估計。"}},
      {"id":"a3-2-q21","type":"multi","ahl":true,"difficulty":2,"ref":"A3.2.7","paper":"1B","stem":{"en":"Study the cladogram (nodes are numbered). Select ALL the correct statements.","ja":"分岐図（節に番号が付いている）を見よ。正しい記述をすべて選べ。","zh":"觀察支序圖（節點已編號）。選出所有正確的陳述。"},"data":{"en":"<svg viewBox=\"0 0 194 150\" width=\"100%\" style=\"max-width:184px\" role=\"img\" aria-label=\"cladogram\"><line x1=\"6\" y1=\"68.75\" x2=\"24\" y2=\"68.75\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"24\" y1=\"33\" x2=\"24\" y2=\"104.5\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"24\" y1=\"33\" x2=\"110.66666666666667\" y2=\"33\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"20\" x2=\"110.66666666666667\" y2=\"46\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"20\" x2=\"154\" y2=\"20\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"25\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">P</text><line x1=\"110.66666666666667\" y1=\"46\" x2=\"154\" y2=\"46\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"51\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">Q</text><circle cx=\"110.66666666666667\" cy=\"33\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"110.66666666666667\" y=\"37\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">2</text><line x1=\"24\" y1=\"104.5\" x2=\"67.33333333333334\" y2=\"104.5\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"67.33333333333334\" y1=\"85\" x2=\"67.33333333333334\" y2=\"124\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"67.33333333333334\" y1=\"85\" x2=\"110.66666666666667\" y2=\"85\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"72\" x2=\"110.66666666666667\" y2=\"98\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"72\" x2=\"154\" y2=\"72\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"77\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">R</text><line x1=\"110.66666666666667\" y1=\"98\" x2=\"154\" y2=\"98\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"103\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">S</text><circle cx=\"110.66666666666667\" cy=\"85\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"110.66666666666667\" y=\"89\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">4</text><line x1=\"67.33333333333334\" y1=\"124\" x2=\"154\" y2=\"124\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"129\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">T</text><circle cx=\"67.33333333333334\" cy=\"104.5\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"67.33333333333334\" y=\"108.5\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">3</text><circle cx=\"24\" cy=\"68.75\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"24\" y=\"72.75\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">1</text></svg>","ja":"<svg viewBox=\"0 0 194 150\" width=\"100%\" style=\"max-width:184px\" role=\"img\" aria-label=\"cladogram\"><line x1=\"6\" y1=\"68.75\" x2=\"24\" y2=\"68.75\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"24\" y1=\"33\" x2=\"24\" y2=\"104.5\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"24\" y1=\"33\" x2=\"110.66666666666667\" y2=\"33\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"20\" x2=\"110.66666666666667\" y2=\"46\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"20\" x2=\"154\" y2=\"20\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"25\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">P</text><line x1=\"110.66666666666667\" y1=\"46\" x2=\"154\" y2=\"46\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"51\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">Q</text><circle cx=\"110.66666666666667\" cy=\"33\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"110.66666666666667\" y=\"37\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">2</text><line x1=\"24\" y1=\"104.5\" x2=\"67.33333333333334\" y2=\"104.5\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"67.33333333333334\" y1=\"85\" x2=\"67.33333333333334\" y2=\"124\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"67.33333333333334\" y1=\"85\" x2=\"110.66666666666667\" y2=\"85\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"72\" x2=\"110.66666666666667\" y2=\"98\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"72\" x2=\"154\" y2=\"72\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"77\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">R</text><line x1=\"110.66666666666667\" y1=\"98\" x2=\"154\" y2=\"98\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"103\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">S</text><circle cx=\"110.66666666666667\" cy=\"85\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"110.66666666666667\" y=\"89\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">4</text><line x1=\"67.33333333333334\" y1=\"124\" x2=\"154\" y2=\"124\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"129\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">T</text><circle cx=\"67.33333333333334\" cy=\"104.5\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"67.33333333333334\" y=\"108.5\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">3</text><circle cx=\"24\" cy=\"68.75\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"24\" y=\"72.75\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">1</text></svg>","zh":"<svg viewBox=\"0 0 194 150\" width=\"100%\" style=\"max-width:184px\" role=\"img\" aria-label=\"cladogram\"><line x1=\"6\" y1=\"68.75\" x2=\"24\" y2=\"68.75\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"24\" y1=\"33\" x2=\"24\" y2=\"104.5\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"24\" y1=\"33\" x2=\"110.66666666666667\" y2=\"33\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"20\" x2=\"110.66666666666667\" y2=\"46\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"20\" x2=\"154\" y2=\"20\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"25\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">P</text><line x1=\"110.66666666666667\" y1=\"46\" x2=\"154\" y2=\"46\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"51\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">Q</text><circle cx=\"110.66666666666667\" cy=\"33\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"110.66666666666667\" y=\"37\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">2</text><line x1=\"24\" y1=\"104.5\" x2=\"67.33333333333334\" y2=\"104.5\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"67.33333333333334\" y1=\"85\" x2=\"67.33333333333334\" y2=\"124\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"67.33333333333334\" y1=\"85\" x2=\"110.66666666666667\" y2=\"85\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"72\" x2=\"110.66666666666667\" y2=\"98\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><line x1=\"110.66666666666667\" y1=\"72\" x2=\"154\" y2=\"72\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"77\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">R</text><line x1=\"110.66666666666667\" y1=\"98\" x2=\"154\" y2=\"98\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"103\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">S</text><circle cx=\"110.66666666666667\" cy=\"85\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"110.66666666666667\" y=\"89\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">4</text><line x1=\"67.33333333333334\" y1=\"124\" x2=\"154\" y2=\"124\" stroke=\"var(--ink,#111)\" stroke-width=\"2\"/><text x=\"160\" y=\"129\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink,#111)\">T</text><circle cx=\"67.33333333333334\" cy=\"104.5\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"67.33333333333334\" y=\"108.5\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">3</text><circle cx=\"24\" cy=\"68.75\" r=\"9\" fill=\"var(--surface,#fff)\" stroke=\"var(--accent,#2547c7)\" stroke-width=\"2\"/><text x=\"24\" y=\"72.75\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\" fill=\"var(--ink,#111)\">1</text></svg>"},"options":[{"en":"Node 2 is the most recent common ancestor of P and Q","ja":"節2はPとQの最も新しい共通祖先である","zh":"節點 2 是 P 和 Q 最近的共同祖先"},{"en":"S is more closely related to T than to P","ja":"SはPよりもTに近縁である","zh":"S 與 T 的親緣關係比與 P 的更近"},{"en":"Q, R, S and T form a clade","ja":"Q、R、S、Tはクレードをなす","zh":"Q、R、S 和 T 構成一個演化支"},{"en":"T is the ancestor of R and S","ja":"TはRとSの祖先である","zh":"T 是 R 和 S 的祖先"}],"answer":[0,1],"explanation":{"en":"Node 2 is where P and Q join, so A is correct. S meets T at node 3 but meets P only at the root, so B is correct. C is wrong: Q's closest relative is P, and a clade from one node would have to include P. D is wrong: T is a tip (a living species), not an ancestor; ancestors are the nodes.","ja":"節2はPとQが合流する点なのでAは正しい。SはTと節3で合流し、Pとは根でしか合流しないのでBも正しい。Cは誤り：Qに最も近いのはPで、一つの節から出るクレードにはPも含まれるはず。Dは誤り：Tは末端（現存の種）であり祖先ではない。祖先は節である。","zh":"節點 2 是 P 和 Q 會合之處，所以 A 正確。S 與 T 在節點 3 會合，而與 P 要到根部才會合，所以 B 正確。C 錯誤：Q 的近親是 P，由一個節點而來的演化支必須包括 P。D 錯誤：T 是末端（現存物種），不是祖先；祖先是節點。"}},
      {"id":"a3-2-q22","type":"short","ahl":true,"difficulty":2,"ref":"A3.2.9","paper":"2","commandTerm":"Outline","marks":3,"stem":{"en":"Outline how comparison of ribosomal RNA (rRNA) led to the three-domain system.","ja":"リボソーム RNA (rRNA) の比較が三ドメイン説につながった経緯を概説せよ (Outline)。","zh":"概述 (Outline) 比較核糖體 RNA (rRNA) 如何促成三域系統。"},"markscheme":[{"en":"All organisms have ribosomes, so all have rRNA that can be compared","ja":"すべての生物にリボソームがあるので、比較できる rRNA をすべてもつ","zh":"所有生物都有核糖體，所以都有可比較的 rRNA"},{"en":"Base sequences of rRNA were compared between organisms","ja":"生物間で rRNA の塩基配列が比較された","zh":"比較了不同生物的 rRNA 鹼基序列"},{"en":"The rRNA of archaea differed from both bacteria and eukaryotes, showing they are a separate lineage","ja":"古細菌の rRNA は細菌とも真核生物とも異なり、別の系統であることが示された","zh":"古菌的 rRNA 與細菌及真核生物的都不同，顯示牠們是獨立的譜系"},{"en":"A new level above kingdom, the domain, was proposed: Bacteria, Archaea, Eukaryota","ja":"界の上に新しい段階「ドメイン」が提案された：細菌、古細菌、真核生物","zh":"提出了界之上的新層級「域」：細菌域、古菌域、真核生物域"}],"modelAnswer":{"en":"Every cell has ribosomes and so rRNA, so its base sequence can be compared across all organisms. The sequences showed that archaea differ from bacteria as well as from eukaryotes, so they are a separate lineage. This led to a new level above kingdom, the domain, giving three domains: Bacteria, Archaea and Eukaryota.","ja":"すべての細胞にリボソームがあるので rRNA があり、その塩基配列をあらゆる生物間で比較できる。配列から、古細菌は細菌とも真核生物とも異なることが分かり、別の系統とされた。これにより界の上の新しい段階であるドメインが設けられ、細菌、古細菌、真核生物の三つになった。","zh":"每個細胞都有核糖體，所以都有 rRNA，可用其鹼基序列比較所有生物。序列顯示古菌與細菌和真核生物都不同，所以是獨立的譜系。這促成了界之上的新層級「域」，共三個域：細菌域、古菌域和真核生物域。"}},
      {"id":"a3-2-q23","type":"order","ahl":true,"difficulty":2,"ref":"A3.2.6","paper":"1A","stem":{"en":"Put the stages of a parsimony analysis in the correct order.","ja":"最節約法による解析の段階を正しい順に並べよ。","zh":"把簡約法分析的各階段排成正確次序。"},"items":[{"en":"Collect and align the base sequences of the same gene from each organism","ja":"各生物から同じ遺伝子の塩基配列を集めて並べる","zh":"收集每種生物同一基因的鹼基序列並對齊"},{"en":"Draw the possible cladograms for the organisms","ja":"その生物について可能な分岐図を描く","zh":"為這些生物畫出可能的支序圖"},{"en":"For each cladogram, count the changes needed along its branches to explain the differences","ja":"各分岐図で、違いを説明するのに枝に沿って必要な変化の数を数える","zh":"為每個支序圖，數算沿分支解釋差異所需的變化次數"},{"en":"Compare the totals for the different cladograms","ja":"異なる分岐図の合計を比べる","zh":"比較不同支序圖的總數"},{"en":"Choose the cladogram with the fewest changes as the most probable hypothesis","ja":"変化が最も少ない分岐図を、最も確からしい仮説として選ぶ","zh":"選擇變化最少的支序圖作為最有可能的假說"}],"explanation":{"en":"You need the data first, then the candidate trees, then a count for each tree. Only after all the totals are known can you pick the smallest. The result is a hypothesis, not a proven fact.","ja":"まずデータ、次に候補の木、次に各木の数え上げが必要です。すべての合計が分かってから最小のものを選べます。結果は証明された事実ではなく仮説です。","zh":"首先要有數據，然後是候選的樹，再為每棵樹計數。只有知道所有總數後，才能選出最小的一個。結果是假說，不是已證實的事實。"}}
    ]
  });
})();
