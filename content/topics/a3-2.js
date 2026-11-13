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
    return `<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:${Math.round(w * 1.5)}px" role="img" aria-label="cladogram">${out}</svg>`;
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
        heading: L("Three domains from rRNA evidence", "rRNA の証拠による三ドメイン (three domains)", "以 rRNA 證據劃分三域 (three domains)"),
        body: L(
          `<p>In 1977 a revolutionary reclassification was proposed. It added a <strong>new taxonomic level above kingdoms</strong>, called the <strong>domain</strong>, and divided all organisms into <strong>three domains</strong>:</p>
<ul>
<li><strong>Bacteria</strong></li>
<li><strong>Archaea</strong></li>
<li><strong>Eukaryota</strong> (also called Eukarya), the organisms whose cells have a nucleus: animals, plants, fungi and protists</li>
</ul>
<p><strong>The evidence:</strong> comparison of the <strong>base sequences of ribosomal RNA (rRNA)</strong>. All cells have ribosomes, so all have rRNA, which makes it ideal for comparing very different organisms. The rRNA sequences showed that Archaea are a separate lineage, as different from Bacteria as from Eukaryota. Before this, Archaea and Bacteria were both grouped together as prokaryotes.</p>`,
          `<p>1977年に革新的な再分類が提案されました。<strong>界の上に新しい分類段階</strong>として<strong>ドメイン (domain)</strong> を設け、すべての生物を<strong>三つのドメイン</strong>に分けました。</p>
<ul>
<li><strong>細菌 (Bacteria)</strong></li>
<li><strong>古細菌 (Archaea)</strong></li>
<li><strong>真核生物 (Eukaryota、Eukarya ともいう)</strong>：細胞に核がある生物（動物、植物、菌類、原生生物）</li>
</ul>
<p><strong>証拠：</strong><strong>リボソーム RNA (rRNA) の塩基配列</strong>の比較です。すべての細胞にリボソームがあるので rRNA もあり、まったく異なる生物どうしを比べるのに最適です。rRNA の配列から、古細菌は独立した系統であり、細菌とも真核生物とも同じくらい異なることが分かりました。それまで古細菌と細菌は、どちらも原核生物としてまとめられていました。</p>`,
          `<p>1977 年有人提出了一項革命性的重新分類。它在<strong>界之上加入新的分類層級</strong>，稱為<strong>域 (domain)</strong>，並把所有生物分成<strong>三個域</strong>：</p>
<ul>
<li><strong>細菌域 (Bacteria)</strong></li>
<li><strong>古菌域 (Archaea)</strong></li>
<li><strong>真核生物域 (Eukaryota，又稱 Eukarya)</strong>：細胞有細胞核的生物，包括動物、植物、真菌和原生生物</li>
</ul>
<p><strong>證據：</strong>比較<strong>核糖體 RNA (rRNA) 的鹼基序列</strong>。所有細胞都有核糖體，所以都有 rRNA，非常適合用來比較差異很大的生物。rRNA 序列顯示古菌是一個獨立的譜系，與細菌和真核生物的差異同樣大。在此之前，古菌和細菌都被歸為原核生物。</p>`
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
        explanation: L("S and T meet at the nearest node, so they share the most recent common ancestor. R is the next closest because it joins the S and T branch at the next node. The tempting wrong answer is R, which is drawn next to T, but only the node position matters.", "SとTは最も近い節で出会うので、最も新しい共通祖先を共有します。Rは次の節でSとTの枝につながるので次に近い関係です。誤って選びがちなのはTの隣に描かれたRですが、重要なのは節の位置だけです。", "S 和 T 在最近的節點相遇，所以牠們共有最近的共同祖先。R 在下一個節點才連上 S 和 T 的分支，所以其次最近。容易誤選的是畫在 T 旁邊的 R，但關鍵只在節點的位置。")
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
      }
    ]
  });
})();
