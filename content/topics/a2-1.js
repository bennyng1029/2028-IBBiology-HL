/* A2.1 Origins of cells — AHL-only subtopic. Content written from the IB guide (first assessment 2025). */
(function () {
  const T = (en, ja, zh) => ({ en, ja, zh });
  const sections = [
    {
      ref: "A2.1.1", ahl: true,
      heading: T("Conditions on early Earth", "原始地球の環境", "早期地球的環境"),
      body: T(
        `<p>Earth formed about 4.5 billion years ago. Life did not appear straight away. The young planet was very different from today.</p>
<ul>
<li><strong>No free oxygen</strong> (O<sub>2</sub>) in the air. Because ozone is made from oxygen, there was <strong>no ozone layer</strong> either.</li>
<li><strong>Ultraviolet (UV) light</strong> from the Sun reached the surface, because there was no ozone to absorb it. UV light carries a lot of energy.</li>
<li><strong>Higher concentrations of carbon dioxide and methane</strong> than now. Both are greenhouse gases, so the surface was <strong>hotter</strong>.</li>
</ul>
<p>These conditions may have caused a variety of carbon compounds to form <strong>spontaneously</strong> (by themselves, with no living things involved) through chemical reactions. Such reactions <em>do not happen now</em>. One reason is that today's oxygen would break the compounds down, and living organisms would use them as food.</p>`,
        `<p>地球は約45億年前に誕生しました。生命はすぐには現れず、若い地球は現在とまったく違う環境でした。</p>
<ul>
<li>大気に<strong>遊離酸素</strong> (free oxygen, O<sub>2</sub>) がなく、オゾンは酸素からできるので<strong>オゾン層</strong> (ozone layer) もありませんでした。</li>
<li>オゾン層がないため、エネルギーの大きい<strong>紫外線</strong> (ultraviolet, UV) が地表に届きました。</li>
<li>現在より<strong>二酸化炭素とメタンの濃度が高く</strong>、どちらも温室効果ガスなので気温は<strong>高かった</strong>と考えられます。</li>
</ul>
<p>このような条件のもとで、生物が関与しない化学反応により、さまざまな炭素化合物が<strong>自然に</strong> (spontaneously) できた可能性があります。現在はそのような反応は起こりません。理由の一つは、今の酸素が化合物を分解し、生物がそれを食物として利用してしまうからです。</p>`,
        `<p>地球約在45億年前形成。生命並非立即出現，年輕的地球與今天的環境截然不同。</p>
<ul>
<li>大氣中<strong>沒有游離氧</strong> (free oxygen, O<sub>2</sub>)。臭氧由氧形成，所以也<strong>沒有臭氧層</strong> (ozone layer)。</li>
<li>沒有臭氧吸收，能量很高的<strong>紫外線</strong> (ultraviolet, UV) 可以照到地面。</li>
<li><strong>二氧化碳和甲烷的濃度比現在高</strong>。兩者都是溫室氣體，所以地表溫度<strong>較高</strong>。</li>
</ul>
<p>在這些條件下，多種含碳化合物可能透過化學反應<strong>自發</strong> (spontaneously) 形成，不需要生物參與。這類反應<em>現在已不會發生</em>。原因之一是今天的氧氣會分解這些化合物，而生物也會把它們當作食物。</p>`),
      examTip: T("Learn the list: no O₂ (so no ozone), more CO₂ and CH₄ (so hotter), more UV. Link each cause to its effect.",
        "リストを覚えましょう。O₂なし（→オゾンなし）、CO₂とCH₄が多い（→高温）、紫外線が強い。原因と結果を結びつけて書きます。",
        "記住清單：沒有 O₂（所以沒有臭氧）、CO₂ 和 CH₄ 較多（所以較熱）、紫外線較強。答題時要把原因和結果連起來。")
    },
    {
      ref: "A2.1.2", ahl: true,
      heading: T("Cells: the smallest units of self-sustaining life", "細胞：自立して生きる最小の単位", "細胞：能自給自足的最小生命單位"),
      body: T(
        `<p>A <strong>cell</strong> is the smallest unit that can carry out all the functions of life by itself. That is what <em>self-sustaining</em> means. A living thing shows all of these features:</p>
<ul>
<li><strong>metabolism</strong> (chemical reactions inside the cell, including getting energy)</li>
<li><strong>homeostasis</strong> (keeping internal conditions steady)</li>
<li><strong>nutrition</strong> (getting or making food)</li>
<li><strong>excretion</strong> (removing waste)</li>
<li><strong>growth</strong></li>
<li><strong>response</strong> to stimuli</li>
<li><strong>movement</strong></li>
<li><strong>reproduction</strong></li>
</ul>
<p>Non-living things (a rock, a flame, a crystal) may show one or two of these, such as growing, but never all of them.</p>
<p><strong>Why viruses are considered non-living.</strong> A virus has no cytoplasm and almost no enzymes, so it has no metabolism of its own. It cannot make ATP, take in nutrients or excrete waste. It cannot grow or reproduce alone. It can only be copied by using the machinery of a living <strong>host cell</strong>. Outside a host it does nothing.</p>`,
        `<p><strong>細胞</strong> (cell) は、生命のすべての機能を自分だけで行える最小の単位です。これが「自立して生きる」(self-sustaining) という意味です。生物には次の特徴がすべて見られます。</p>
<ul>
<li><strong>代謝</strong> (metabolism)：細胞内の化学反応。エネルギーの獲得を含む</li>
<li><strong>恒常性</strong> (homeostasis)：内部環境を一定に保つ</li>
<li><strong>栄養</strong> (nutrition)：食物を得る・作る</li>
<li><strong>排出</strong> (excretion)：老廃物を除く</li>
<li><strong>成長</strong> (growth)</li>
<li><strong>刺激への応答</strong> (response)</li>
<li><strong>運動</strong> (movement)</li>
<li><strong>生殖</strong> (reproduction)</li>
</ul>
<p>岩・炎・結晶のような非生物は、成長など一つか二つの特徴を示すことはあっても、すべてを示すことはありません。</p>
<p><strong>ウイルスが非生物とされる理由。</strong>ウイルスには細胞質がなく、酵素もほとんどないため、独自の代謝を行えません。ATPを作ることも、栄養を取り込むことも、老廃物を排出することもできず、単独では成長も増殖もできません。生きた<strong>宿主細胞</strong> (host cell) の仕組みを使ってはじめて複製されます。宿主の外では何もしません。</p>`,
        `<p><strong>細胞</strong> (cell) 是能夠獨自進行所有生命功能的最小單位，這就是「自給自足」(self-sustaining) 的意思。生物具備以下所有特徵：</p>
<ul>
<li><strong>新陳代謝</strong> (metabolism)：細胞內的化學反應，包括取得能量</li>
<li><strong>體內平衡</strong> (homeostasis)：保持內部環境穩定</li>
<li><strong>營養</strong> (nutrition)：獲取或製造食物</li>
<li><strong>排泄</strong> (excretion)：排出廢物</li>
<li><strong>生長</strong> (growth)</li>
<li><strong>對刺激作出反應</strong> (response)</li>
<li><strong>移動</strong> (movement)</li>
<li><strong>繁殖</strong> (reproduction)</li>
</ul>
<p>非生物（石頭、火焰、晶體）可能表現出其中一兩項（例如「生長」），但不會全部具備。</p>
<p><strong>病毒被視為非生物的原因。</strong>病毒沒有細胞質，幾乎沒有酶，所以沒有自己的新陳代謝。它不能製造 ATP、不能攝取養分、不能排出廢物，也不能獨自生長或繁殖。它只能借助活的<strong>宿主細胞</strong> (host cell) 的機器來複製。離開宿主，它甚麼也不做。</p>`),
      examTip: T("“Discuss” living vs non-living: name several features of life, then show which ones viruses lack. Do not say viruses are “not alive because they are small”.",
        "「生物と非生物」を論じる問題では、生命の特徴をいくつか挙げ、ウイルスに欠けているものを示します。「小さいから非生物」と書いてはいけません。",
        "討論生物與非生物時，先列出數項生命特徵，再指出病毒欠缺哪些。不要寫「因為病毒很小所以是非生物」。")
    },
    {
      ref: "A2.1.3", ahl: true,
      heading: T("The challenge of explaining the origin of cells", "細胞の自然発生を説明する難しさ", "解釋細胞自發起源的挑戰"),
      body: T(
        `<p>Cells are very complex. Today, cells only come from <strong>division of pre-existing cells</strong>. No one has made a living cell from non-living chemicals. So any explanation of the first cells must show how complexity could build up step by step.</p>
<p>The first cells needed (at least) four things:</p>
<ol>
<li><strong>Catalysis</strong>: molecules that speed up chemical reactions (today these are enzymes).</li>
<li><strong>Self-replication of molecules</strong>: a way to copy genetic information so it can be passed on.</li>
<li><strong>Self-assembly</strong>: molecules joining together to form larger structures without being directed by anything else.</li>
<li><strong>Compartmentalization</strong>: a boundary (a membrane) that separates the inside of the cell from the outside.</li>
</ol>
<div class="note"><strong>Nature of science: testable claims.</strong> Scientific claims, including hypotheses and theories, must be <em>testable</em>. Some hypotheses are hard to test. We cannot recreate the exact conditions of pre-biotic Earth, and the first <strong>protocells</strong> (simple cell-like structures) did not fossilize, so there is no direct evidence of them.</div>`,
        `<p>細胞は非常に複雑です。現在、細胞は<strong>既存の細胞の分裂</strong>によってのみ生じます。非生物の化学物質から生きた細胞を作り出した人はいません。したがって最初の細胞の起源を説明するには、複雑さがどのように段階的に積み上がったかを示す必要があります。</p>
<p>最初の細胞には、少なくとも次の4つが必要でした。</p>
<ol>
<li><strong>触媒作用</strong> (catalysis)：化学反応を速める分子（現在は酵素）。</li>
<li><strong>分子の自己複製</strong> (self-replication)：遺伝情報をコピーして伝える仕組み。</li>
<li><strong>自己組織化</strong> (self-assembly)：分子が外からの指示なしに集まって大きな構造を作ること。</li>
<li><strong>区画化</strong> (compartmentalization)：内側と外側を分ける境界（膜）。</li>
</ol>
<div class="note"><strong>科学の本質 (NOS)：検証可能性。</strong>仮説や理論を含む科学的主張は<em>検証可能</em> (testable) でなければなりません。しかし検証が難しい仮説もあります。原始地球の正確な条件は再現できず、最初の<strong>原始細胞</strong> (protocell) は化石になっていないため、直接の証拠がありません。</div>`,
        `<p>細胞非常複雜。今天，細胞只能由<strong>已存在細胞的分裂</strong>產生。沒有人能用非生物的化學物質製造出活細胞。因此，任何對最初細胞的解釋，都必須說明複雜性如何逐步累積。</p>
<p>最初的細胞至少需要四項條件：</p>
<ol>
<li><strong>催化</strong> (catalysis)：加快化學反應的分子（現在是酶）。</li>
<li><strong>分子自我複製</strong> (self-replication)：複製遺傳資訊並傳下去的方法。</li>
<li><strong>自我組裝</strong> (self-assembly)：分子在沒有外力指揮下自行結合成較大的結構。</li>
<li><strong>區室化</strong> (compartmentalization)：把細胞內外分隔開的邊界（膜）。</li>
</ol>
<div class="note"><strong>科學本質 (NOS)：可檢驗性。</strong>科學主張（包括假說和理論）必須是<em>可檢驗的</em> (testable)。有些假說很難檢驗。我們無法重現前生物時期地球的確切條件，而最初的<strong>原始細胞</strong> (protocell) 沒有形成化石，所以沒有直接證據。</div>`)
    },
    {
      ref: "A2.1.4", ahl: true,
      heading: T("Evidence for the origin of carbon compounds: the Miller–Urey experiment", "炭素化合物の起源の証拠：ミラーとユーリーの実験", "含碳化合物起源的證據：米勒–尤里實驗"),
      body: T(
        `<p>In the 1950s Stanley Miller and Harold Urey tested whether organic (carbon) compounds could form from simple gases under conditions like those thought to exist on early Earth.</p>
<p><strong>Method (outline).</strong> A sealed glass apparatus held water (a model “ocean”) that was heated, and a mixture of gases (a model “atmosphere”) containing water vapour, methane, ammonia and hydrogen. <strong>Electrical sparks</strong> passed through the gases, modelling lightning. A condenser cooled the vapour so liquid water returned to the “ocean”. The mixture was circulated for about a week.</p>
<p><strong>Result.</strong> The water turned brown and contained a variety of <strong>organic compounds, including several amino acids</strong>. A sealed apparatus with no living things made them, so the compounds formed by chemical reactions alone.</p>
<p><strong>Evaluating the experiment</strong> means weighing strengths against limitations.</p>
<table>
<tr><th>Strengths</th><th>Limitations</th></tr>
<tr><td>Showed that building blocks of life can form by chemical processes alone (no cells needed).<br>Was a controlled laboratory test of an idea that could not be tested in any other way, and it can be repeated.<br>Many later experiments with other energy sources (e.g. heat, UV) also made organic compounds.</td>
<td>Many scientists now think the early atmosphere had a different mix of gases from the one used (the gases used were more strongly “reducing”). With some other gas mixtures, fewer amino acids form.<br>It made small molecules only, not complex polymers, and certainly not a cell.<br>The exact conditions of early Earth cannot be known, so it shows what <em>could</em> have happened, not what <em>did</em> happen.</td></tr>
</table>`,
        `<p>1950年代、スタンリー・ミラーとハロルド・ユーリーは、原始地球にあったと考えられる条件で、単純な気体から有機（炭素）化合物ができるかどうかを調べました。</p>
<p><strong>方法（概要）。</strong>密閉したガラス装置に、加熱した水（「海」のモデル）と、水蒸気・メタン・アンモニア・水素の混合気体（「大気」のモデル）を入れました。気体の中に<strong>放電</strong> (electrical sparks) を行い、雷を再現しました。冷却器で水蒸気を冷やして液体に戻し、「海」に戻しました。これを約1週間循環させました。</p>
<p><strong>結果。</strong>水は褐色になり、<strong>数種類のアミノ酸を含むさまざまな有機化合物</strong>が見つかりました。生物のいない密閉装置でできたので、化学反応だけで生成したことになります。</p>
<p><strong>実験を評価する</strong> (evaluate) とは、長所と限界を比べて判断することです。</p>
<table>
<tr><th>長所</th><th>限界</th></tr>
<tr><td>細胞がなくても、化学的過程だけで生命の構成要素ができることを示した。<br>ほかの方法では検証できない考えを、条件を制御して実験的に確かめ、再現もできた。<br>のちにほかのエネルギー源（熱・紫外線など）を使った実験でも有機化合物ができた。</td>
<td>現在、多くの科学者は、初期の大気は実験で使った気体の組成（より強い還元性）とは違っていたと考えている。ほかの気体の組み合わせでは、アミノ酸が少ししかできない場合がある。<br>できたのは小さな分子だけで、複雑な高分子や細胞ではない。<br>原始地球の正確な条件は分からないため、「起こりえたこと」を示すだけで「実際に起きたこと」ではない。</td></tr>
</table>`,
        `<p>1950年代，史丹利·米勒 (Stanley Miller) 與哈羅德·尤里 (Harold Urey) 測試：在被認為與早期地球相似的條件下，簡單氣體能否形成有機（含碳）化合物。</p>
<p><strong>方法（概述）。</strong>密封的玻璃裝置中有被加熱的水（模擬「海洋」），以及含水蒸氣、甲烷、氨和氫的混合氣體（模擬「大氣」）。氣體中通過<strong>電火花</strong> (electrical sparks)，模擬閃電。冷凝器把蒸氣冷卻，水回流到「海洋」。混合物循環約一星期。</p>
<p><strong>結果。</strong>水變成棕色，並含有多種<strong>有機化合物，包括數種氨基酸</strong>。裝置密封且沒有生物，所以這些化合物只靠化學反應形成。</p>
<p><strong>評價</strong> (evaluate) 這個實驗，就是權衡優點與局限。</p>
<table>
<tr><th>優點</th><th>局限</th></tr>
<tr><td>顯示生命的組成單元可以只靠化學過程形成（不需要細胞）。<br>是在受控條件下檢驗一個無法用其他方法檢驗的想法，而且可以重複。<br>後來用其他能量來源（如熱、紫外線）的實驗也產生了有機化合物。</td>
<td>現在許多科學家認為早期大氣的氣體組成與實驗所用的不同（實驗用的氣體還原性較強）。用某些其他氣體混合物時，產生的氨基酸較少。<br>只產生小分子，沒有產生複雜的聚合物，更不是細胞。<br>早期地球的確切條件不可知，所以實驗只說明<em>可能</em>發生過甚麼，不是<em>實際</em>發生過甚麼。</td></tr>
</table>`),
      examTip: T("“Evaluate” needs at least one strength and one limitation, each with a reason. Say what was in the apparatus and what formed.",
        "「Evaluate」では、理由を添えて長所と限界を少なくとも1つずつ書きます。装置の中身と生成物も述べましょう。",
        "「Evaluate」題至少要有一項優點和一項局限，並各附理由。也要寫出裝置中有甚麼、產生了甚麼。")
    },
    {
      ref: "A2.1.5", ahl: true,
      heading: T("Spontaneous formation of vesicles", "小胞の自然形成", "囊泡的自發形成"),
      body: T(
        `<p>Fatty acids are long molecules with a <strong>hydrophilic</strong> (water-loving) head and a <strong>hydrophobic</strong> (water-hating) hydrocarbon tail. In water, fatty acids (once present in high enough concentration) can <strong>coalesce</strong> (come together) and arrange themselves into a <strong>bilayer</strong>: heads face the water on both sides and tails face each other inside. A bilayer can close into a hollow sphere called a <strong>vesicle</strong>.</p>
<p>This happens spontaneously, with no enzymes and no energy input from cells. Fatty acids can form in the kinds of reactions described in A2.1.1, so vesicles could have formed on early Earth.</p>
<p><strong>Why it matters.</strong> A membrane-bound compartment lets the <em>internal chemistry become different from the outside</em>. Reactants can be kept together and concentrated, and products are not lost by diffusing away. Together with a self-replicating molecule inside, this could make a protocell.</p>`,
        `<p>脂肪酸は、<strong>親水性</strong> (hydrophilic) の頭部と<strong>疎水性</strong> (hydrophobic) の炭化水素の尾部をもつ長い分子です。水中で十分な濃度になると、脂肪酸は<strong>合体</strong> (coalesce) して<strong>二重層</strong> (bilayer) をつくります。頭部は両側で水に面し、尾部は内側で向き合います。二重層は閉じて、中空の球である<strong>小胞</strong> (vesicle) になることがあります。</p>
<p>これは酵素も細胞からのエネルギーも必要とせず、自然に起こります。脂肪酸はA2.1.1で述べたような反応でできるため、小胞は原始地球でできえたと考えられます。</p>
<p><strong>なぜ重要か。</strong>膜に包まれた区画があると、<em>内部の化学反応を外部と違うものにできます</em>。反応物を集めて濃縮でき、生成物が拡散して失われません。内部に自己複製する分子があれば、原始細胞になりえます。</p>`,
        `<p>脂肪酸是長分子，一端是<strong>親水</strong> (hydrophilic) 的頭部，另一端是<strong>疏水</strong> (hydrophobic) 的烴尾。在水中，脂肪酸（濃度足夠時）可以<strong>聚集</strong> (coalesce)，自行排列成<strong>雙層</strong> (bilayer)：頭部在兩側朝向水，尾部在內側互相相對。雙層可以閉合成一個空心的球，稱為<strong>囊泡</strong> (vesicle)。</p>
<p>這個過程是自發的，不需要酶，也不需要細胞提供能量。脂肪酸可由 A2.1.1 所述的反應產生，所以囊泡可能在早期地球形成。</p>
<p><strong>為何重要？</strong>有膜包圍的區室，可令<em>內部的化學反應與外面不同</em>。反應物可被聚集並濃縮，產物也不會擴散流失。如果內部再有能自我複製的分子，就可能形成原始細胞。</p>`)
    },
        {
      ref: "A2.1.6", ahl: true,
      heading: T("RNA as the presumed first genetic material", "RNAは最初の遺伝物質だったと考えられる", "RNA 被推測為最初的遺傳物質"),
      body: T(
        `<p>Today DNA stores genetic information and proteins (enzymes) do the catalysis. But DNA copying needs enzymes, and making enzymes needs DNA. Which came first? <strong>RNA</strong> may solve the problem, because it can do both jobs:</p>
<ul>
<li>RNA can be <strong>replicated</strong> (copied), so it can store and pass on information.</li>
<li>Some RNA molecules have <strong>catalytic activity</strong>. They are called <strong>ribozymes</strong>.</li>
</ul>
<p>So RNA may have acted at first as <strong>both the genetic material and the enzymes</strong> of the earliest cells.</p>
<p><strong>A surviving clue.</strong> In every ribosome, the ribosomal RNA (a ribozyme) <strong>catalyses the formation of peptide bonds</strong> during protein synthesis. This is a relic of an RNA-based beginning.</p>`,
        `<p>現在はDNAが遺伝情報を保存し、タンパク質（酵素）が触媒の働きをします。しかしDNAの複製には酵素が必要で、酵素をつくるにはDNAが必要です。どちらが先でしょうか。<strong>RNA</strong> は両方の役割を果たせるので、この問題を解決できます。</p>
<ul>
<li>RNAは<strong>複製</strong> (replicate) できるので、情報を保存して伝えられます。</li>
<li>一部のRNAには<strong>触媒活性</strong>があり、<strong>リボザイム</strong> (ribozyme) と呼ばれます。</li>
</ul>
<p>そのため、最初の細胞ではRNAが<strong>遺伝物質と酵素の両方</strong>の役割をしていたかもしれません。</p>
<p><strong>現在に残る手がかり。</strong>すべてのリボソームで、リボソームRNA（リボザイム）がタンパク質合成の際に<strong>ペプチド結合の形成を触媒</strong>しています。これはRNAから始まった名残です。</p>`,
        `<p>現在 DNA 儲存遺傳資訊，而蛋白質（酶）負責催化。但複製 DNA 需要酶，製造酶又需要 DNA。哪個先出現？<strong>RNA</strong> 能同時擔任兩種角色，可以解決這個問題：</p>
<ul>
<li>RNA 可以<strong>複製</strong> (replicate)，所以能儲存及傳遞資訊。</li>
<li>有些 RNA 分子具<strong>催化活性</strong>，稱為<strong>核酶</strong> (ribozyme)。</li>
</ul>
<p>因此，RNA 最初可能同時是最早期細胞的<strong>遺傳物質和酶</strong>。</p>
<p><strong>留存至今的線索。</strong>在每個核糖體中，核糖體 RNA（一種核酶）在蛋白質合成時<strong>催化肽鍵 (peptide bond) 的形成</strong>。這是以 RNA 為起點的遺跡。</p>`)
    },
    {
      ref: "A2.1.7", ahl: true,
      heading: T("The last universal common ancestor (LUCA)", "全生物の最終共通祖先 (LUCA)", "最後共同祖先 (LUCA)"),
      body: T(
        `<p>All living things alive today seem to descend from a single ancestral population, the <strong>last universal common ancestor (LUCA)</strong>. Evidence:</p>
<ul>
<li>The <strong>universal genetic code</strong>. Almost all organisms use the same DNA/RNA base triplets to code for the same amino acids. A shared code is unlikely if life had started many separate times.</li>
<li><strong>Shared genes</strong> across all organisms. Genes for basic processes, such as making ribosomes and copying and reading DNA, are found in bacteria, archaea and eukaryotes, and their sequences are similar.</li>
</ul>
<p><strong>Other forms of life.</strong> Other forms of life may well have evolved too. They probably became <strong>extinct</strong> because of competition from LUCA and its descendants, which were already established. LUCA was not the first living thing; it was the one whose descendants survived.</p>`,
        `<p>現在生きているすべての生物は、一つの祖先集団、つまり<strong>最終共通祖先</strong> (last universal common ancestor, LUCA) の子孫だと考えられます。証拠は次のとおりです。</p>
<ul>
<li><strong>普遍的な遺伝暗号</strong> (universal genetic code)：ほぼすべての生物が、同じ3つ組塩基で同じアミノ酸を指定します。生命が何度も別々に誕生したなら、暗号が共通になる可能性は低いです。</li>
<li>全生物に共通する<strong>遺伝子</strong> (shared genes)：リボソームの形成やDNAの複製・読み取りなど基本的な過程の遺伝子は、細菌・古細菌・真核生物に見られ、配列も似ています。</li>
</ul>
<p><strong>ほかの生命。</strong>ほかの形の生命も進化した可能性があります。しかし、すでに確立していたLUCAとその子孫との競争により、<strong>絶滅</strong>したと考えられます。LUCAは最初の生命ではなく、子孫が生き残った生命です。</p>`,
        `<p>現存所有生物似乎都源自同一個祖先群體，即<strong>最後共同祖先</strong> (last universal common ancestor, LUCA)。證據包括：</p>
<ul>
<li><strong>通用的遺傳密碼</strong> (universal genetic code)：幾乎所有生物都用相同的三聯鹼基編碼相同的氨基酸。如果生命曾多次獨立起源，密碼不大可能一樣。</li>
<li>所有生物共有的<strong>基因</strong> (shared genes)：製造核糖體、複製和讀取 DNA 等基本過程的基因，在細菌、古菌和真核生物中都有，序列也相似。</li>
</ul>
<p><strong>其他生命形式。</strong>其他形式的生命也可能曾經演化出來，但很可能因為與已站穩陣腳的 LUCA 及其後代競爭而<strong>絕種</strong>。LUCA 不是最早的生命，而是其後代存活下來的那一個。</p>`)
    },
    {
      ref: "A2.1.8", ahl: true,
      heading: T("Estimating the dates of the first cells and LUCA", "最初の細胞とLUCAの年代の推定", "估計最初細胞和 LUCA 的年代"),
      body: T(
        `<p>Life began a very long time ago, so dates are <em>estimates</em> from indirect approaches:</p>
<ul>
<li><strong>Fossils and rock chemistry.</strong> The age of the oldest rocks that contain fossil cells or chemical traces of life is found by <strong>radiometric dating</strong> (using the steady decay of radioactive isotopes in the rock).</li>
<li><strong>Molecular clock.</strong> Differences between the DNA or protein sequences of living species build up at a roughly steady rate. Counting the differences and using a rate calibrated from fossils gives an estimate of when two lineages split. Applied to the oldest branches of the tree of life, this gives a date for LUCA.</li>
</ul>
<p>Most estimates for the first living cells and for LUCA fall between about <strong>3.5 and 4.3 billion years ago</strong>; the exact value depends on the method and is debated. Earth itself is about 4.5 billion years old. For more than half of the time since life began, all life was single-celled, and humans have existed for only a tiny final fraction of it.</p>
<p>The aim is to appreciate the <strong>immense length of time</strong> over which life has been evolving.</p>`,
        `<p>生命の誕生ははるか昔なので、年代は間接的な方法による<em>推定</em>です。</p>
<ul>
<li><strong>化石と岩石の化学的証拠。</strong>細胞の化石や生命の化学的痕跡を含む最古の岩石の年代は、<strong>放射年代測定</strong> (radiometric dating)、つまり岩石中の放射性同位体の一定の崩壊を使って求めます。</li>
<li><strong>分子時計</strong> (molecular clock)：現生種のDNAやタンパク質の配列の違いは、ほぼ一定の速さで蓄積します。違いを数え、化石で較正した速度を使うと、2つの系統が分かれた時期を推定できます。生命の樹の最も古い枝に応用すると、LUCAの年代が推定されます。</li>
</ul>
<p>最初の生きた細胞やLUCAの推定年代の多くは、おおむね<strong>35億〜43億年前</strong>の範囲にあり、正確な値は方法によって異なり議論があります。地球自体は約45億年前にできました。生命が誕生してからの時間の半分以上、生物はすべて単細胞でした。ヒトが存在するのは、そのごく最後の一部にすぎません。</p>
<p>大切なのは、生命が進化してきた<strong>途方もなく長い時間</strong>を実感することです。</p>`,
        `<p>生命開始於非常久遠以前，所以年代只能用間接方法<em>估計</em>：</p>
<ul>
<li><strong>化石和岩石化學。</strong>含有細胞化石或生命化學痕跡的最古老岩石，其年齡可用<strong>放射性定年法</strong> (radiometric dating) 求得（利用岩石中放射性同位素的穩定衰變）。</li>
<li><strong>分子鐘</strong> (molecular clock)：現存物種的 DNA 或蛋白質序列差異以大致穩定的速率累積。數算差異，再用由化石校準的速率，就可估計兩個譜系何時分開。把方法用於生命樹最古老的分支，便得出 LUCA 的年代。</li>
</ul>
<p>對最初活細胞和 LUCA 的估計，大多落在約 <strong>35 億至 43 億年前</strong>之間，確實數值視乎方法而定，亦有爭議。地球本身約有 45 億年歷史。自生命出現以來，超過一半的時間裏所有生物都是單細胞的，而人類只存在於最後極短的一段。</p>
<p>目的是讓你體會生命演化所經歷的<strong>極其漫長的時間</strong>。</p>`),
      examTip: T("You do not need to memorize exact dates. Know the two approaches and that the timescale is billions of years.",
        "正確な年代を暗記する必要はありません。2つの方法と、時間が数十億年規模であることを理解しましょう。",
        "不必背誦確切年代。要認識兩種方法，並知道時間尺度是數十億年。")
    },
    {
      ref: "A2.1.9", ahl: true,
      heading: T("LUCA and hydrothermal vents", "LUCAと熱水噴出孔", "LUCA 與海底熱泉"),
      body: T(
        `<p><strong>Hydrothermal vents</strong> are cracks in the sea floor where hot water rich in dissolved chemicals comes out. Two lines of evidence suggest that LUCA lived near such vents:</p>
<ul>
<li><strong>Fossil evidence.</strong> Tiny tube- and filament-shaped structures, thought to be fossilized microorganisms, have been found in <strong>precipitates</strong> (minerals that settled out) from ancient sea-floor hydrothermal vents. Some of these rocks are among the oldest known to contain evidence of life. The oldest claims are debated.</li>
<li><strong>Genomic evidence: conserved sequences.</strong> Scientists compared the genomes of many modern organisms and looked for gene sequences that are <strong>conserved</strong> (barely changed) across the groups. Genes inferred to have been present in LUCA include ones for processes suited to vent conditions, such as using hydrogen and carbon dioxide and living without oxygen.</li>
</ul>
<p>Vents are also a plausible place for chemistry to start: they supplied chemical energy and raw materials, and the water was shielded from the strong UV light at the surface. This is a hypothesis supported by evidence, not proven fact.</p>`,
        `<p><strong>熱水噴出孔</strong> (hydrothermal vent) は、化学物質を多く含む熱水が出る海底の割れ目です。LUCAがこのような場所の近くで生きていたことを示す証拠が2種類あります。</p>
<ul>
<li><strong>化石の証拠。</strong>太古の海底熱水噴出孔の<strong>沈殿物</strong> (precipitates, 沈んで固まった鉱物) から、微生物の化石と考えられる細い管状や糸状の構造が見つかっています。これらの岩石は、生命の証拠を含む最も古いものに含まれます。最古とされる主張には議論があります。</li>
<li><strong>ゲノムの証拠：保存された配列</strong> (conserved sequences)。多くの現生生物のゲノムを比べ、グループ間でほとんど変化していない遺伝子配列を探しました。LUCAがもっていたと推定される遺伝子には、水素と二酸化炭素の利用や酸素なしでの生活など、噴出孔の環境に合った過程のものが含まれます。</li>
</ul>
<p>噴出孔は化学反応が始まる場所としてももっともらしいとされます。化学エネルギーと材料があり、水中は地表の強い紫外線から守られていたからです。これは証拠に支えられた仮説であり、証明された事実ではありません。</p>`,
        `<p><strong>海底熱泉</strong> (hydrothermal vent) 是海床上的裂縫，富含溶解化學物質的熱水由此湧出。有兩類證據顯示 LUCA 可能生活在這類熱泉附近：</p>
<ul>
<li><strong>化石證據。</strong>在遠古海底熱泉的<strong>沉澱物</strong> (precipitates，沉積下來的礦物) 中，發現細小的管狀和絲狀結構，被認為是微生物化石。這些岩石屬於已知含有生命證據的最古老岩石之列。最古老的說法仍有爭議。</li>
<li><strong>基因組證據：保守序列</strong> (conserved sequences)。科學家比較許多現代生物的基因組，尋找在各類群中幾乎沒有改變的基因序列。據推斷 LUCA 擁有的基因，包括與熱泉環境相配的過程，例如利用氫和二氧化碳、在無氧情況下生活。</li>
</ul>
<p>熱泉也是化學反應開始的合理地點：它提供化學能和原料，而且水中不受地表強烈紫外線影響。這是有證據支持的假說，不是已證實的事實。</p>`)
    },

  ];
  const questions = [
        { id: "a2-1-q01", type: "mcq", ahl: true, difficulty: 1, ref: "A2.1.1", paper: "1A",
      stem: T("Which statement correctly describes early Earth compared with today?",
        "原始地球と現在を比べた記述として正しいものはどれですか。",
        "以下哪項正確描述早期地球與現在的比較？"),
      options: [
        T("There was more free oxygen, so a thicker ozone layer blocked UV light.", "遊離酸素が多く、厚いオゾン層が紫外線を遮っていた。", "游離氧較多，較厚的臭氧層阻擋紫外線。"),
        T("There was no free oxygen, so there was no ozone layer and more UV light reached the surface.", "遊離酸素がなく、オゾン層もないため、より多くの紫外線が地表に届いた。", "沒有游離氧，所以沒有臭氧層，更多紫外線照到地面。"),
        T("There was no carbon dioxide, so the surface was cooler.", "二酸化炭素がなく、地表は冷たかった。", "沒有二氧化碳，所以地表較涼。"),
        T("There was more free oxygen, so carbon compounds formed faster.", "遊離酸素が多く、炭素化合物が速くできた。", "游離氧較多，所以含碳化合物形成得較快。")],
      answer: 1,
      explanation: T("Correct: without free O₂ there is no ozone (ozone is made from oxygen), so UV light penetrated. Option C is wrong because CO₂ and methane were more concentrated than now, giving higher temperatures. Options A and D reverse the real situation; oxygen would actually break carbon compounds down.",
        "正解は2番目。遊離O₂がなければオゾン（酸素からできる）もなく、紫外線が届きます。CはCO₂とメタンが現在より多く気温が高かったので誤り。AとDは実際と逆で、酸素はむしろ炭素化合物を分解します。",
        "正確答案是第二項：沒有游離 O₂ 就沒有臭氧（臭氧由氧形成），紫外線便能穿透。C 錯誤，因為 CO₂ 和甲烷濃度比現在高，令溫度較高。A 和 D 與事實相反，氧其實會分解含碳化合物。") },
    { id: "a2-1-q02", type: "multi", ahl: true, difficulty: 2, ref: "A2.1.1", paper: "1A",
      stem: T("Select ALL the reasons why carbon compounds could form spontaneously on early Earth but do not do so now.",
        "原始地球では炭素化合物が自然にできたが、現在はできない理由を、すべて選びなさい。",
        "選出<strong>所有</strong>原因：為何早期地球上含碳化合物能自發形成，但現在卻不能。"),
      options: [
        T("Energy sources such as UV light and lightning were available, with no ozone layer to block UV.", "紫外線や雷などのエネルギー源があり、オゾン層も紫外線を遮らなかった。", "有紫外線和閃電等能量來源，而且沒有臭氧層阻擋紫外線。"),
        T("There was no free oxygen to break the compounds down.", "化合物を分解する遊離酸素がなかった。", "沒有游離氧去分解這些化合物。"),
        T("There were no living organisms to use the compounds as food.", "化合物を食物にする生物がいなかった。", "沒有生物把這些化合物當作食物。"),
        T("The atmosphere contained more oxygen, which helped the reactions.", "大気に酸素が多く、反応を助けた。", "大氣含較多氧，有助反應進行。")],
      answer: [0, 1, 2],
      explanation: T("A, B and C are all valid. D is the opposite of the real situation: early Earth had no free oxygen.",
        "A・B・Cはいずれも妥当です。Dは実際と逆で、原始地球には遊離酸素がありませんでした。",
        "A、B、C 都正確。D 與事實相反：早期地球沒有游離氧。") },
    { id: "a2-1-q03", type: "multi", ahl: true, difficulty: 1, ref: "A2.1.2", paper: "1A",
      stem: T("Which of the following are reasons why viruses are considered to be non-living?",
        "ウイルスが非生物と考えられる理由として正しいものをすべて選びなさい。",
        "以下哪些是病毒被視為非生物的原因？（選所有正確項）"),
      options: [
        T("They have no cytoplasm.", "細胞質がない。", "沒有細胞質。"),
        T("They do not have nucleic acid as genetic material.", "遺伝物質として核酸をもたない。", "沒有核酸作為遺傳物質。"),
        T("They have no metabolism of their own (few or no enzymes).", "独自の代謝がない（酵素がほとんどない）。", "沒有自己的新陳代謝（幾乎沒有酶）。"),
        T("They cannot reproduce without a host cell.", "宿主細胞がないと増殖できない。", "沒有宿主細胞便不能繁殖。")],
      answer: [0, 2, 3],
      explanation: T("Viruses do have nucleic acid (DNA or RNA), so B is wrong; that is a feature they share with living things. A, C and D are all reasons they are classed as non-living.",
        "ウイルスにはDNAまたはRNAの核酸があるのでBは誤り（生物と共通の特徴です）。A・C・Dは非生物とされる理由です。",
        "病毒確實有核酸（DNA 或 RNA），所以 B 錯誤（這是它與生物共有的特徵）。A、C、D 都是它被歸為非生物的理由。") },
    { id: "a2-1-q04", type: "short", ahl: true, difficulty: 2, ref: "A2.1.2", paper: "2", commandTerm: "Discuss", marks: 4,
      stem: T("Discuss whether a virus should be considered a living organism.", "ウイルスを生物とみなすべきかどうかを論じなさい。", "討論病毒是否應被視為生物。"),
      markscheme: [
        T("Living things show all the functions of life, e.g. metabolism, growth, reproduction, response, homeostasis, nutrition, excretion, movement;", "生物は代謝・成長・生殖・応答・恒常性・栄養・排出・運動など、生命のすべての機能を示す;", "生物具備所有生命功能，例如新陳代謝、生長、繁殖、反應、體內平衡、營養、排泄、移動;"),
        T("viruses have no cytoplasm and few or no enzymes, so no metabolism / cannot make ATP of their own;", "ウイルスには細胞質がなく酵素もほとんどないため、代謝がない（自分でATPを作れない）;", "病毒沒有細胞質，幾乎沒有酶，所以沒有新陳代謝（不能自行製造 ATP）;"),
        T("viruses can only reproduce (be copied) inside a host cell, using the host's energy and protein synthesis machinery;", "ウイルスは宿主細胞の内部で、宿主のエネルギーとタンパク質合成の仕組みを使ってのみ複製される;", "病毒只能在宿主細胞內，利用宿主的能量和蛋白質合成機器才能複製;"),
        T("viruses do have genetic material (DNA or RNA) and evolve, which is a feature of living things, but overall they are considered non-living / cell = smallest unit of self-sustaining life.", "ウイルスは遺伝物質（DNAまたはRNA）をもち進化するという生物的特徴もあるが、全体として非生物とされる（細胞が自立して生きる最小単位）。", "病毒確實有遺傳物質（DNA 或 RNA）並會演化，這是生物特徵，但整體上被視為非生物（細胞才是自給自足生命的最小單位）。")],
      modelAnswer: T("Living things carry out all the functions of life. A virus has no cytoplasm and almost no enzymes, so it has no metabolism and cannot make ATP. It cannot reproduce by itself and is copied only inside a host cell using the host's machinery. A virus does have DNA or RNA and it evolves, which argues for “living”, but because it cannot sustain itself it is usually classed as non-living.",
        "生物は生命のすべての機能を行います。ウイルスには細胞質がなく酵素もほとんどないので、代謝がなくATPも作れません。単独では増殖できず、宿主細胞の中で宿主の仕組みを使って複製されるだけです。DNAまたはRNAをもち進化する点は「生物」寄りですが、自立できないため通常は非生物とされます。",
        "生物會進行所有生命功能。病毒沒有細胞質，幾乎沒有酶，所以沒有新陳代謝，也不能製造 ATP。它不能自行繁殖，只在宿主細胞內利用宿主的機器被複製。病毒確有 DNA 或 RNA 並會演化，這點傾向「生物」，但由於不能自給自足，通常被歸為非生物。") },
    { id: "a2-1-q05", type: "mcq", ahl: true, difficulty: 2, ref: "A2.1.3", paper: "1A",
      stem: T("Which of these was NOT a requirement for the evolution of the first cells?", "最初の細胞の進化に必要<strong>でなかった</strong>ものはどれですか。", "以下哪項<strong>不是</strong>最初細胞演化的必要條件？"),
      options: [
        T("Catalysis of chemical reactions", "化学反応の触媒作用", "化學反應的催化"),
        T("Self-replication of molecules", "分子の自己複製", "分子的自我複製"),
        T("Compartmentalization by a membrane", "膜による区画化", "以膜進行區室化"),
        T("A nucleus enclosed by a double membrane", "二重膜に包まれた核", "由雙層膜包圍的細胞核")],
      answer: 3,
      explanation: T("Catalysis, self-replication, self-assembly and compartmentalization were needed. A nucleus is a feature of eukaryotic cells, which evolved later; the first cells were much simpler.",
        "必要だったのは、触媒作用・自己複製・自己組織化・区画化です。核は後に進化した真核細胞の特徴で、最初の細胞はもっと単純でした。",
        "需要的是催化、自我複製、自我組裝和區室化。細胞核是較後期才演化出的真核細胞特徵，最初的細胞簡單得多。") },
    { id: "a2-1-q06", type: "mcq", ahl: true, difficulty: 2, ref: "A2.1.3", paper: "1A",
      stem: T("Why is the hypothesis for the spontaneous origin of the first cells difficult to test?",
        "最初の細胞の自然発生という仮説が検証しにくいのはなぜですか。",
        "為甚麼最初細胞自發起源的假說難以檢驗？"),
      options: [
        T("Because it is not a scientific idea.", "科学的な考えではないから。", "因為它不是科學概念。"),
        T("Because the exact conditions of early Earth cannot be reproduced and protocells did not fossilize.", "原始地球の正確な条件を再現できず、原始細胞は化石にならなかったから。", "因為早期地球的確切條件無法重現，而原始細胞沒有形成化石。"),
        T("Because cells are too small to see with any microscope.", "細胞はどんな顕微鏡でも見えないほど小さいから。", "因為細胞小得連任何顯微鏡也看不到。"),
        T("Because all scientists already agree on the answer.", "すべての科学者がすでに答えに合意しているから。", "因為所有科學家已經同意答案。")],
      answer: 1,
      explanation: T("Hypotheses about the origin of cells can be tested in parts (e.g. Miller–Urey), but the exact conditions cannot be recreated and no fossil protocells exist. A is wrong: the hypothesis makes testable predictions in parts, which is what makes it scientific. C and D are false.",
        "細胞の起源の仮説は部分的には検証できます（ミラーとユーリーの実験など）が、正確な条件は再現できず、原始細胞の化石もありません。Aは誤りで、部分的に検証可能な予測を行うことが科学的である証です。CとDは事実に反します。",
        "細胞起源的假說可以分部分檢驗（例如米勒–尤里實驗），但確切條件無法重現，也沒有原始細胞化石。A 錯誤：它能提出可檢驗的預測，這正是科學的特點。C 和 D 與事實不符。") },
    { id: "a2-1-q07", type: "short", ahl: true, difficulty: 2, ref: "A2.1.3", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain why it is difficult to explain the origin of the first cells.", "最初の細胞の起源を説明するのが難しい理由を説明しなさい。", "解釋為何難以說明最初細胞的起源。"),
      markscheme: [
        T("cells are highly complex structures;", "細胞は非常に複雑な構造である;", "細胞是非常複雜的結構;"),
        T("today cells are only produced by division of pre-existing cells / no one has made a cell from non-living matter;", "現在、細胞は既存の細胞の分裂でのみ生じる（非生物から細胞を作った例はない）;", "現在細胞只能由已存在的細胞分裂產生（沒有人能由非生物製造細胞）;"),
        T("several things had to arise: catalysis, self-replication of molecules, self-assembly and compartmentalization (membrane) [accept any two for one mark];", "触媒作用・分子の自己複製・自己組織化・区画化（膜）など、複数の要素が生じる必要があった（2つ以上で1点）;", "需要同時出現催化、分子自我複製、自我組裝和區室化（膜）等多項條件（任何兩項得一分）;"),
        T("conditions on early Earth cannot be reproduced exactly / protocells did not fossilize, so hypotheses are hard to test.", "原始地球の条件を正確に再現できず、原始細胞も化石にならないため、仮説の検証が難しい。", "早期地球的條件無法準確重現／原始細胞沒有化石，所以假說難以檢驗。")],
      modelAnswer: T("Cells are very complex, and today they only come from other cells dividing. The first cells needed catalysis, self-replicating molecules, self-assembly and a membrane compartment, all arising together. We cannot recreate the exact conditions of early Earth and protocells left no fossils, so ideas are hard to test.",
        "細胞は非常に複雑で、現在は他の細胞の分裂からしか生じません。最初の細胞には触媒作用・自己複製分子・自己組織化・膜による区画が、そろって必要でした。原始地球の条件は正確には再現できず、原始細胞は化石を残していないため、考えを検証しにくいのです。",
        "細胞非常複雜，現在只能由其他細胞分裂產生。最初的細胞需要催化、自我複製分子、自我組裝和膜區室，而且要同時出現。我們無法重現早期地球的確切條件，原始細胞也沒有留下化石，所以想法難以檢驗。") },
    { id: "a2-1-q08", type: "short", ahl: true, difficulty: 3, ref: "A2.1.4", paper: "2", commandTerm: "Evaluate", marks: 4,
      stem: T("Evaluate the Miller–Urey experiment as evidence for the origin of carbon compounds on early Earth.",
        "ミラーとユーリーの実験を、原始地球での炭素化合物の起源の証拠として評価しなさい。",
        "評價米勒–尤里實驗作為早期地球含碳化合物起源之證據的價值。"),
      markscheme: [
        T("strength: showed that organic compounds / amino acids can form from simple inorganic gases by chemical processes alone (no living things);", "長所：単純な無機気体から、化学的過程だけで有機化合物（アミノ酸）ができることを示した;", "優點：顯示簡單的無機氣體只靠化學過程就能形成有機化合物（氨基酸）;"),
        T("strength: controlled, repeatable laboratory test of a hypothesis that could not be tested otherwise / later experiments with other energy sources also made organic compounds;", "長所：ほかでは検証できない仮説を制御された条件で再現可能に検証した（他のエネルギー源を使った後の実験でも有機化合物ができた）;", "優點：在受控條件下可重複地檢驗一個無法用其他方法檢驗的假說（後來用其他能量來源的實驗也產生有機化合物）;"),
        T("limitation: the gas mixture used may not match the real early atmosphere (thought by many to be less reducing; with other mixtures fewer amino acids form);", "限界：用いた気体の組成は実際の初期大気と合っていないかもしれない（より還元性が弱いと考える科学者が多く、他の組成ではアミノ酸が少ない）;", "局限：所用的氣體組成未必與真實的早期大氣相符（許多人認為還原性較弱；用其他組成時氨基酸較少）;"),
        T("limitation: only small organic molecules formed, not polymers or cells / cannot show what actually happened, only what could have happened.", "限界：できたのは小さな有機分子だけで、高分子や細胞ではない（実際に起きたことではなく、起こりえたことを示すにすぎない）。", "局限：只產生小型有機分子，沒有聚合物或細胞（只顯示可能發生過甚麼，並非實際發生過甚麼）。")],
      modelAnswer: T("The experiment is good evidence that amino acids and other organic compounds can form from simple gases using energy from sparks, with no living things involved, and it is repeatable. However, the gas mixture may not match the real early atmosphere, only small molecules formed, and it shows what could have happened rather than what did. So it supports the idea but does not prove it.",
        "この実験は、生物が関与せず、放電のエネルギーで単純な気体からアミノ酸などの有機化合物ができうることのよい証拠で、再現性もあります。しかし、気体の組成が実際の初期大気と違うかもしれず、できたのは小さな分子だけで、「実際に起きたこと」ではなく「起こりえたこと」を示すにすぎません。したがって考えを支持しますが、証明はしません。",
        "這個實驗是很好的證據，顯示氨基酸等有機化合物可在沒有生物的情況下，利用電火花的能量由簡單氣體形成，而且可重複。然而，氣體組成未必與真實的早期大氣相符，只產生小分子，而且只說明可能發生過的事。所以它支持這個想法，但不能證明。") },
    { id: "a2-1-q09", type: "short", ahl: true, difficulty: 2, ref: "A2.1.4", paper: "1B", commandTerm: "Deduce", marks: 4,
      data: T(
        `<p>(illustrative data) A model apparatus like the Miller–Urey experiment was run twice. Experiment A passed electrical sparks through the gas mixture. Experiment B was identical but had no sparks. The concentration of amino acids in the water was measured.</p>
<table><tr><th>Time / days</th><th>Amino acids, Experiment A (arbitrary units)</th><th>Amino acids, Experiment B (arbitrary units)</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>3</td><td>0</td></tr><tr><td>3</td><td>9</td><td>0</td></tr><tr><td>5</td><td>14</td><td>0</td></tr><tr><td>7</td><td>17</td><td>0</td></tr></table>`,
        `<p>（架空のデータ）ミラーとユーリーの実験に似たモデル装置を2回行いました。実験Aでは気体に放電しました。実験Bは同じですが放電しませんでした。水中のアミノ酸濃度を測定しました。</p>
<table><tr><th>時間／日</th><th>アミノ酸・実験A（任意単位）</th><th>アミノ酸・実験B（任意単位）</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>3</td><td>0</td></tr><tr><td>3</td><td>9</td><td>0</td></tr><tr><td>5</td><td>14</td><td>0</td></tr><tr><td>7</td><td>17</td><td>0</td></tr></table>`,
        `<p>（模擬數據）以類似米勒–尤里實驗的模型裝置進行兩次。實驗 A 令電火花通過氣體混合物；實驗 B 完全相同，但沒有電火花。量度水中氨基酸的濃度。</p>
<table><tr><th>時間／日</th><th>氨基酸，實驗 A（任意單位）</th><th>氨基酸，實驗 B（任意單位）</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>3</td><td>0</td></tr><tr><td>3</td><td>9</td><td>0</td></tr><tr><td>5</td><td>14</td><td>0</td></tr><tr><td>7</td><td>17</td><td>0</td></tr></table>`),
      stem: T("(a) Describe the trend in Experiment A. [2] (b) Deduce the role of the electrical sparks. [1] (c) State the purpose of Experiment B. [1]",
        "(a) 実験Aの傾向を述べなさい。[2] (b) 放電の役割を推論しなさい。[1] (c) 実験Bの目的を述べなさい。[1]",
        "(a) 描述實驗 A 的趨勢。[2] (b) 推斷電火花的作用。[1] (c) 指出實驗 B 的目的。[1]"),
      markscheme: [
        T("(a) amino acid concentration increases over time (0 to 17 units over 7 days);", "(a) アミノ酸濃度は時間とともに増加する（7日で0から17単位）;", "(a) 氨基酸濃度隨時間增加（7 日內由 0 增至 17 單位）;"),
        T("(a) rate of increase slows down / increase is fastest at the start and levels off (e.g. 3 units in day 1, but only 3 units across days 5 to 7);", "(a) 増加速度は遅くなる（最初が最も速く、しだいに頭打ちになる）;", "(a) 增加速率變慢（開頭最快，之後趨於平穩）;"),
        T("(b) provide energy for the chemical reactions that make amino acids (no amino acids form without sparks); modelling lightning;", "(b) アミノ酸をつくる化学反応にエネルギーを与える（放電がないとアミノ酸はできない）、雷のモデル;", "(b) 為製造氨基酸的化學反應提供能量（沒有電火花就沒有氨基酸）；模擬閃電;"),
        T("(c) a control, to show that amino acids do not form without sparks / are not due to contamination or other factors.", "(c) 対照実験。放電がなければアミノ酸ができない（汚染や他の要因によるものではない）ことを示す。", "(c) 對照實驗，顯示沒有電火花就不會形成氨基酸（並非由污染或其他因素造成）。")],
      modelAnswer: T("(a) The concentration of amino acids rises from 0 to 17 units over the 7 days, but the increase slows down and levels off. (b) The sparks supply the energy for the reactions that form amino acids. (c) Experiment B is a control: it shows no amino acids form without the sparks.",
        "(a) アミノ酸濃度は7日間で0から17単位に増えますが、増加速度は次第に遅くなり頭打ちになります。(b) 放電は、アミノ酸ができる反応にエネルギーを与えます。(c) 実験Bは対照で、放電がなければアミノ酸ができないことを示します。",
        "(a) 氨基酸濃度在 7 日內由 0 升至 17 單位，但增加速度變慢並趨於平穩。(b) 電火花為形成氨基酸的反應提供能量。(c) 實驗 B 是對照，顯示沒有電火花就不會形成氨基酸。") },
    { id: "a2-1-q10", type: "mcq", ahl: true, difficulty: 2, ref: "A2.1.5", paper: "1A",
      stem: T("Fatty acids placed in water can form hollow spheres called vesicles. Which statement explains this?",
        "脂肪酸を水に入れると、小胞とよばれる中空の球ができることがあります。これを説明する記述はどれですか。",
        "脂肪酸放入水中可形成稱為囊泡的空心球。哪項能解釋這現象？"),
      options: [
        T("Enzymes in the water join the fatty acids into a membrane.", "水中の酵素が脂肪酸をつないで膜をつくる。", "水中的酶把脂肪酸連成膜。"),
        T("Hydrophobic tails face the water on the outside and hydrophilic heads face each other inside.", "疎水性の尾部が外側で水に面し、親水性の頭部が内側で向き合う。", "疏水的尾部在外側朝向水，親水的頭部在內側互相相對。"),
        T("Hydrophilic heads face the water on both sides and hydrophobic tails face each other inside the bilayer.", "親水性の頭部が両側で水に面し、疎水性の尾部は二重層の内側で向き合う。", "親水的頭部在兩側朝向水，疏水的尾部在雙層內側互相相對。"),
        T("Fatty acids are held together by peptide bonds.", "脂肪酸はペプチド結合で結びついている。", "脂肪酸由肽鍵連在一起。")],
      answer: 2,
      explanation: T("Heads are attracted to water and tails avoid it, so a bilayer forms spontaneously. B reverses this arrangement. A is wrong because no enzymes are needed. D is wrong because peptide bonds join amino acids, not fatty acids.",
        "頭部は水に引かれ、尾部は水を避けるので、二重層が自然にできます。Bは配置が逆です。Aは酵素が不要なので誤り。Dはペプチド結合がつなぐのはアミノ酸で、脂肪酸ではないので誤りです。",
        "頭部被水吸引，尾部避開水，所以雙層自發形成。B 把排列顛倒了。A 錯誤，因為不需要酶。D 錯誤，肽鍵連接的是氨基酸，不是脂肪酸。") },
    { id: "a2-1-q11", type: "short", ahl: true, difficulty: 2, ref: "A2.1.5", paper: "1B", commandTerm: "Explain", marks: 4,
      data: T(
        `<p>(illustrative data) Fatty acids were added to water at different concentrations. The number of vesicles seen in a standard microscope field was counted.</p>
<table><tr><th>Fatty acid concentration / mmol dm<sup>-3</sup></th><th>Vesicles per field of view</th></tr>
<tr><td>0.1</td><td>0</td></tr><tr><td>0.5</td><td>0</td></tr><tr><td>1.0</td><td>3</td></tr><tr><td>5.0</td><td>25</td></tr><tr><td>10.0</td><td>48</td></tr></table>`,
        `<p>（架空のデータ）脂肪酸をさまざまな濃度で水に加え、標準的な顕微鏡視野に見える小胞の数を数えました。</p>
<table><tr><th>脂肪酸濃度／mmol dm<sup>-3</sup></th><th>1視野あたりの小胞数</th></tr>
<tr><td>0.1</td><td>0</td></tr><tr><td>0.5</td><td>0</td></tr><tr><td>1.0</td><td>3</td></tr><tr><td>5.0</td><td>25</td></tr><tr><td>10.0</td><td>48</td></tr></table>`,
        `<p>（模擬數據）把脂肪酸以不同濃度加入水中，數算標準顯微鏡視野內可見的囊泡數目。</p>
<table><tr><th>脂肪酸濃度／mmol dm<sup>-3</sup></th><th>每視野囊泡數</th></tr>
<tr><td>0.1</td><td>0</td></tr><tr><td>0.5</td><td>0</td></tr><tr><td>1.0</td><td>3</td></tr><tr><td>5.0</td><td>25</td></tr><tr><td>10.0</td><td>48</td></tr></table>`),
      stem: T("(a) Deduce the concentration range in which vesicles first form. [1] (b) Describe the effect of increasing concentration above this. [1] (c) Explain why formation of vesicles was important for the first cells. [2]",
        "(a) 小胞が初めて形成される濃度の範囲を推論しなさい。[1] (b) それ以上に濃度を上げた効果を述べなさい。[1] (c) 小胞の形成が最初の細胞にとって重要だった理由を説明しなさい。[2]",
        "(a) 推斷囊泡開始形成的濃度範圍。[1] (b) 描述濃度升高至此以上的影響。[1] (c) 解釋囊泡形成對最初細胞為何重要。[2]"),
      markscheme: [
        T("(a) between 0.5 and 1.0 mmol dm⁻³;", "(a) 0.5〜1.0 mmol dm⁻³ の間;", "(a) 在 0.5 至 1.0 mmol dm⁻³ 之間;"),
        T("(b) more vesicles form as concentration increases (positive correlation);", "(b) 濃度が高いほど小胞が多くできる（正の相関）;", "(b) 濃度越高，形成的囊泡越多（正相關）;"),
        T("(c) a membrane-bound compartment separates inside from outside;", "(c) 膜で囲まれた区画が内側と外側を分ける;", "(c) 有膜的區室把內外分隔;"),
        T("(c) so internal chemistry can differ from the surroundings / reactants stay concentrated and products not lost.", "(c) 内部の化学反応を外部と違うものにできる（反応物を濃縮して保ち、生成物が失われない）。", "(c) 使內部化學反應可與周圍不同（反應物保持濃縮，產物不會流失）。")],
      modelAnswer: T("(a) Between 0.5 and 1.0 mmol dm⁻³. (b) Above this, more vesicles form the higher the concentration. (c) A vesicle has a membrane that separates its inside from the outside. This allows the chemistry inside to differ from the surroundings, keeping reactants together and stopping products from being lost.",
        "(a) 0.5〜1.0 mmol dm⁻³の間。(b) それ以上では、濃度が高いほど小胞が多くできる。(c) 小胞は膜で内側と外側を分けます。これにより内部の化学反応を外部と違うものにでき、反応物を集めて保ち、生成物が失われないようにできます。",
        "(a) 在 0.5 至 1.0 mmol dm⁻³ 之間。(b) 高於此濃度，濃度越高，形成的囊泡越多。(c) 囊泡有膜把內外分隔，令內部化學反應可與周圍不同，使反應物聚在一起，產物不致流失。") },
    { id: "a2-1-q12", type: "mcq", ahl: true, difficulty: 2, ref: "A2.1.6", paper: "1A",
      stem: T("Why is RNA thought to have been the first genetic material?", "RNAが最初の遺伝物質だったと考えられるのはなぜですか。", "為甚麼 RNA 被認為是最初的遺傳物質？"),
      options: [
        T("RNA is more chemically stable than DNA.", "RNAはDNAより化学的に安定だから。", "RNA 在化學上比 DNA 穩定。"),
        T("RNA can be replicated and some RNA molecules can act as catalysts.", "RNAは複製でき、触媒として働くRNA分子もあるから。", "RNA 可以複製，而且有些 RNA 分子能作催化劑。"),
        T("RNA is made of amino acids, which formed in the Miller–Urey experiment.", "RNAはアミノ酸でできており、ミラーとユーリーの実験でできたから。", "RNA 由氨基酸構成，而氨基酸在米勒–尤里實驗中形成。"),
        T("RNA does not need to be copied to pass on information.", "RNAは情報を伝えるのに複製が不要だから。", "RNA 傳遞資訊不需要複製。")],
      answer: 1,
      explanation: T("RNA can store information and be copied, and ribozymes can catalyse reactions, so it could be both genetic material and enzyme. A is wrong: DNA is the more stable molecule. C is wrong: RNA is made of nucleotides, not amino acids. D is wrong because passing on information requires copying.",
        "RNAは情報を保存して複製でき、リボザイムは反応を触媒するため、遺伝物質と酵素の両方になりえます。AはDNAのほうが安定なので誤り。CはRNAがヌクレオチドでできておりアミノ酸ではないので誤り。Dは情報を伝えるには複製が必要なので誤りです。",
        "RNA 可儲存資訊並被複製，核酶又能催化反應，所以可同時是遺傳物質和酶。A 錯誤：DNA 才是較穩定的分子。C 錯誤：RNA 由核苷酸組成，不是氨基酸。D 錯誤，傳遞資訊必須經過複製。") },
    { id: "a2-1-q13", type: "match", ahl: true, difficulty: 1, ref: "A2.1.4–A2.1.9", paper: "1A",
      stem: T("Match each piece of evidence or idea to what it supports.", "証拠や考えを、それが裏づけるものと対応させなさい。", "把每項證據或概念與其所支持的內容配對。"),
      pairs: [
        { left: T("Miller–Urey experiment", "ミラーとユーリーの実験", "米勒–尤里實驗"), right: T("Organic compounds can form from simple gases using energy", "単純な気体からエネルギーを使って有機化合物ができる", "有機化合物可由簡單氣體利用能量形成") },
        { left: T("Fatty acid vesicles", "脂肪酸の小胞", "脂肪酸囊泡"), right: T("A membrane-bound compartment can form spontaneously", "膜に包まれた区画が自然にできる", "有膜的區室可自發形成") },
        { left: T("Ribozyme in the ribosome", "リボソームのリボザイム", "核糖體中的核酶"), right: T("RNA may have been both genetic material and catalyst", "RNAが遺伝物質と触媒の両方だったかもしれない", "RNA 可能同時是遺傳物質和催化劑") },
        { left: T("Universal genetic code", "普遍的な遺伝暗号", "通用的遺傳密碼"), right: T("All life shares a last universal common ancestor", "全生物が最終共通祖先を共有する", "所有生物共有最後共同祖先") },
        { left: T("Fossil-like tubes in vent precipitates", "噴出孔の沈殿物の化石様の管", "熱泉沉澱物中似化石的管")  , right: T("LUCA may have lived near hydrothermal vents", "LUCAは熱水噴出孔の近くにいたかもしれない", "LUCA 可能生活在海底熱泉附近") }],
      explanation: T("Each piece of evidence supports one part of the story: building blocks, compartments, genetic material, a common ancestor and its habitat.",
        "それぞれの証拠は、構成要素・区画・遺伝物質・共通祖先とその生息場所という、物語の一部を裏づけます。",
        "每項證據支持整個故事的一部分：組成單元、區室、遺傳物質、共同祖先及其棲息地。") },
    { id: "a2-1-q14", type: "order", ahl: true, difficulty: 2, ref: "A2.1.1–A2.1.7", paper: "1A",
      stem: T("Put one proposed sequence of events in the origin of life into order, first to last. (The details are still debated.)",
        "生命の起源で提案されている一連の出来事を、最初から最後の順に並べなさい。（詳細はなお議論があります。）",
        "把生命起源的一個建議過程按先後次序排列。（細節仍有爭議。）"),
      items: [
        T("Small carbon compounds (e.g. amino acids) form spontaneously from simple gases", "単純な気体から小さな炭素化合物（アミノ酸など）が自然にできる", "簡單氣體自發形成小型含碳化合物（如氨基酸）"),
        T("Fatty acids coalesce into vesicles; RNA molecules form that can replicate and catalyse", "脂肪酸が合体して小胞になる。複製と触媒ができるRNA分子ができる", "脂肪酸聚集成囊泡；形成能複製和催化的 RNA 分子"),
        T("Self-replicating RNA becomes enclosed within a membrane, forming protocells", "自己複製するRNAが膜に包まれ、原始細胞ができる", "自我複製的 RNA 被膜包圍，形成原始細胞"),
        T("Protocells evolve into the first true cells; LUCA lives", "原始細胞が最初の真の細胞へと進化し、LUCAが生きる", "原始細胞演化成最初的真正細胞；LUCA 出現")],
      explanation: T("Building blocks must exist before they can assemble, and a replicating molecule inside a membrane gives a protocell that can then evolve. Ordering of the vesicle and RNA steps is debated, so the question groups them.",
        "構成要素がまずあり、それが組み立てられ、膜の中に複製する分子が入ると原始細胞ができ、それが進化していきます。小胞とRNAの順序は議論があるため、同じ段階にまとめています。",
        "先要有組成單元才能組裝；膜內有可複製的分子便形成原始細胞，再演化下去。囊泡與 RNA 出現的先後有爭議，所以這裏把它們放在同一步。") },
    { id: "a2-1-q15", type: "multi", ahl: true, difficulty: 2, ref: "A2.1.7", paper: "1A",
      stem: T("Which observations are evidence for a last universal common ancestor (LUCA)?", "最終共通祖先 (LUCA) の証拠となる観察はどれですか。", "哪些觀察是支持最後共同祖先 (LUCA) 的證據？"),
      options: [
        T("The same genetic code is used by almost all organisms.", "ほぼすべての生物が同じ遺伝暗号を使っている。", "幾乎所有生物都使用相同的遺傳密碼。"),
        T("Genes for basic processes are shared by bacteria, archaea and eukaryotes.", "基本的な過程の遺伝子が細菌・古細菌・真核生物で共有されている。", "基本過程的基因為細菌、古菌和真核生物所共有。"),
        T("All organisms have a cell wall made of cellulose.", "すべての生物がセルロースの細胞壁をもつ。", "所有生物都有纖維素細胞壁。"),
        T("All organisms carry out photosynthesis.", "すべての生物が光合成を行う。", "所有生物都進行光合作用。")],
      answer: [0, 1],
      explanation: T("A universal code and shared genes are best explained by common descent. C and D are false statements: only plants (and some other groups) have cellulose walls, and only some organisms photosynthesize.",
        "共通の暗号と遺伝子は共通の由来でよく説明できます。CとDは誤りで、セルロースの細胞壁をもつのは植物など一部の生物、光合成を行うのも一部の生物だけです。",
        "通用密碼和共有基因最能以共同祖先來解釋。C 和 D 是錯誤陳述：只有植物（及某些類群）有纖維素細胞壁，只有部分生物進行光合作用。") },
    { id: "a2-1-q16", type: "short", ahl: true, difficulty: 3, ref: "A2.1.7", paper: "2", commandTerm: "Suggest", marks: 3,
      stem: T("LUCA is the common ancestor of all living organisms, but it was probably not the first living cell. Suggest why other forms of life that arose on early Earth are not alive today.",
        "LUCAはすべての生物の共通祖先ですが、おそらく最初の生きた細胞ではありませんでした。原始地球に生じたほかの生命が現在存在しない理由を示唆しなさい。",
        "LUCA 是所有生物的共同祖先，但很可能不是最先出現的活細胞。試提出為甚麼早期地球上產生的其他生命形式現在已不存在。"),
      markscheme: [
        T("other forms of life may well have evolved;", "ほかの生命形態も進化していた可能性がある;", "其他形式的生命很可能也曾演化出來;"),
        T("they competed with LUCA and its descendants for resources / space / energy;", "LUCAとその子孫と資源・空間・エネルギーを巡って競争した;", "它們與 LUCA 及其後代競爭資源／空間／能量;"),
        T("they were outcompeted and became extinct / only descendants of LUCA survived.", "競争に負けて絶滅した（LUCAの子孫だけが生き残った）。", "它們在競爭中落敗而絕種（只有 LUCA 的後代存活）。")],
      modelAnswer: T("Other life forms probably did arise, but they had to compete with LUCA and its descendants for resources. They were out-competed and became extinct, so only the descendants of LUCA survive today.",
        "ほかの生命もおそらく生じましたが、LUCAとその子孫と資源を巡って競争しなければなりませんでした。競争に負けて絶滅し、現在はLUCAの子孫だけが生き残っています。",
        "其他生命形式大概也曾出現，但要與 LUCA 及其後代競爭資源。它們在競爭中落敗而絕種，所以今天只有 LUCA 的後代存活。") },
    { id: "a2-1-q17", type: "short", ahl: true, difficulty: 2, ref: "A2.1.8", paper: "2", commandTerm: "Outline", marks: 3,
      stem: T("Outline two approaches used to estimate the dates of the first living cells and of LUCA.", "最初の生きた細胞とLUCAの年代を推定する方法を2つ概説しなさい。", "概述估計最初活細胞和 LUCA 年代的兩種方法。"),
      markscheme: [
        T("dating of the oldest rocks containing fossil cells or chemical traces of life;", "細胞の化石や生命の化学的痕跡を含む最古の岩石の年代測定;", "測定含有細胞化石或生命化學痕跡的最古老岩石的年代;"),
        T("using radiometric dating (decay of radioactive isotopes) to find the age of the rock;", "放射年代測定（放射性同位体の崩壊）で岩石の年代を求める;", "利用放射性定年法（放射性同位素衰變）求出岩石年齡;"),
        T("molecular clock: counting differences in DNA/protein sequences between species and using a (fossil-calibrated) mutation rate to estimate when lineages split;", "分子時計：種間のDNA・タンパク質配列の違いを数え、（化石で較正した）変異速度から系統が分かれた時期を推定する;", "分子鐘：數算物種間 DNA／蛋白質序列的差異，用（以化石校準的）突變率估計譜系何時分開;"),
        T("applied to the oldest branches of the tree of life to date LUCA.", "生命の樹の最古の枝に適用してLUCAの年代を推定する。", "應用於生命樹最古老的分支以推算 LUCA 的年代。")],
      modelAnswer: T("One approach is to find the age of the oldest rocks that contain fossils or chemical traces of life, using radiometric dating. A second is the molecular clock: the number of differences in DNA sequences between species, together with a calibrated rate of change, estimates when lineages split, and used on the oldest branches this dates LUCA.",
        "1つは、化石や生命の化学的痕跡を含む最古の岩石の年代を放射年代測定で求める方法です。2つ目は分子時計で、種間のDNA配列の違いの数と較正した変化速度から系統が分かれた時期を推定し、最も古い枝に使えばLUCAの年代が分かります。",
        "一種方法是用放射性定年法，求出含有化石或生命化學痕跡的最古老岩石的年齡。第二種是分子鐘：根據物種間 DNA 序列的差異數目及校準過的變化速率，估計譜系何時分開；用於最古老的分支，便可推算 LUCA 的年代。") },
    { id: "a2-1-q18", type: "short", ahl: true, difficulty: 3, ref: "A2.1.9", paper: "2", commandTerm: "Evaluate", marks: 4,
      stem: T("Evaluate the evidence that LUCA lived in the vicinity of hydrothermal vents.", "LUCAが熱水噴出孔の近くにいたという証拠を評価しなさい。", "評價 LUCA 生活在海底熱泉附近的證據。"),
      markscheme: [
        T("fossil-like structures (tubes/filaments) found in precipitates from ancient sea-floor vents suggest life existed at vents very early;", "太古の海底熱水噴出孔の沈殿物に化石様の構造（管・糸）があり、ごく早い時期に噴出孔に生命がいたことを示す;", "遠古海底熱泉沉澱物中有似化石的結構（管／絲），顯示很早期熱泉已有生命;"),
        T("limitation: the oldest fossil claims are debated / some structures might be formed without life; fossils show life existed, not that it was LUCA;", "限界：最古の化石の主張には議論がある（生命なしでできた可能性もある）。化石は生命の存在を示すだけで、LUCAだとは限らない;", "局限：最古的化石說法有爭議（有些結構可能不是由生命形成）；化石只顯示生命存在，不等於是 LUCA;"),
        T("genome comparison finds conserved sequences / genes shared across groups, inferred to have been in LUCA;", "ゲノム比較で、グループ間で保存された配列・共有遺伝子が見つかり、LUCAがもっていたと推定される;", "基因組比較發現各類群間有保守序列／共有基因，推斷為 LUCA 所有;"),
        T("these genes suit vent conditions (e.g. use of H₂ and CO₂, no oxygen), supporting the hypothesis, but it is inference from living organisms, not direct observation of LUCA.", "それらの遺伝子は噴出孔の条件に合う（H₂とCO₂の利用、酸素なしなど）ので仮説を支持するが、現生生物からの推定であり、LUCAの直接観察ではない。", "這些基因適合熱泉環境（如利用 H₂ 和 CO₂、無氧），支持假說，但這是由現存生物作出的推斷，不是直接觀察 LUCA。")],
      modelAnswer: T("Fossil-like tubes and filaments in ancient vent precipitates suggest life existed at vents very early, but the oldest claims are debated and the fossils do not prove it was LUCA. Comparing genomes finds conserved genes thought to have been present in LUCA, and these suit vent conditions such as using hydrogen and carbon dioxide without oxygen. Together this supports the hypothesis, but it is inference from living organisms and so is not conclusive.",
        "太古の噴出孔の沈殿物に見つかった化石様の管や糸は、ごく早い時期に噴出孔に生命がいたことを示唆しますが、最古の主張には議論があり、それがLUCAだという証明にはなりません。ゲノム比較ではLUCAにあったと考えられる保存された遺伝子が見つかり、水素と二酸化炭素の利用や酸素なしの生活など、噴出孔の条件に合っています。両者は仮説を支持しますが、現生生物からの推定なので決定的ではありません。",
        "遠古熱泉沉澱物中似化石的管和絲，顯示很早期熱泉已有生命，但最古老的說法有爭議，而且化石不能證明那是 LUCA。基因組比較發現被認為 LUCA 擁有的保守基因，這些基因適合熱泉條件，例如在無氧下利用氫和二氧化碳。兩者合起來支持這個假說，但那是由現存生物推斷而來，所以並非定論。") },
    { id: "a2-1-q19", type: "mcq", ahl: true, difficulty: 3, ref: "A2.1.2", paper: "1A",
      stem: T("A student says: “A crystal grows, and it responds to temperature, so a crystal is alive.” Which is the best evaluation?",
        "ある生徒が「結晶は成長し、温度に反応するので、結晶は生きている」と言いました。最も適切な評価はどれですか。",
        "有學生說：「晶體會生長，又會對溫度有反應，所以晶體是活的。」哪項是最好的評價？"),
      options: [
        T("Correct: showing any one feature of life is enough.", "正しい。生命の特徴を1つ示せば十分である。", "正確：表現出任何一項生命特徵就足夠。"),
        T("Wrong: a crystal is too small to be alive.", "誤り。結晶は小さすぎて生物になれない。", "錯誤：晶體太小，不可能是活的。"),
        T("Wrong: living things show all the functions of life, including metabolism and reproduction, which a crystal does not.", "誤り。生物は代謝や生殖を含む生命のすべての機能を示すが、結晶は示さない。", "錯誤：生物具備所有生命功能，包括新陳代謝和繁殖，晶體則沒有。"),
        T("Wrong: only things made of cells can grow.", "誤り。細胞でできたものだけが成長できる。", "錯誤：只有由細胞構成的東西才會生長。")],
      answer: 2,
      explanation: T("Life needs all the functions together, including metabolism and reproduction. A crystal adds material to its surface (it grows) but does not metabolize or reproduce. A is the tempting error. D is not the reason: what matters is whether all the functions are present, not whether the object is made of cells.",
        "生命にはすべての機能がそろって必要で、代謝や生殖も含みます。結晶は表面に物質が付くことで大きくなりますが、代謝も生殖もしません。Aがよくある誤りです。Dは理由になっていません。重要なのは、細胞でできているかではなく、全機能がそろっているかどうかです。",
        "生命需要所有功能同時具備，包括新陳代謝和繁殖。晶體只是在表面加上物質（生長），並不進行代謝或繁殖。A 是常見的錯誤。D 不是理由：關鍵不在於是否由細胞構成，而在於是否具備全部功能。") },

  ];
    IB.registerTopic({
    id: "A2.1", slug: "a2-1", theme: "A", level: 2, ahlOnly: true,
    title: T("Origins of cells", "細胞の起源", "細胞的起源"),
    guidingQuestions: [
      T("What plausible hypothesis could account for the origin of life?", "生命の起源を説明できるもっともらしい仮説は何か。", "有甚麼合理的假說可以解釋生命的起源？"),
      T("What intermediate stages could there have been between non-living matter and the first living cells?", "非生物から最初の生きた細胞までの間に、どのような中間段階があったか。", "由非生物到最初的活細胞之間，可能有哪些中間階段？")],
    summary: T(
      "This is an HL-only subtopic. It asks how non-living chemistry could have become the first cells about 4 billion years ago. You study conditions on early Earth, evidence that carbon compounds form spontaneously (Miller–Urey), how membranes and RNA may have appeared, and the evidence for a last universal common ancestor that may have lived near hydrothermal vents.",
      "これはHL（上級レベル）のみの単元です。約40億年前に、非生物の化学反応からどのように最初の細胞ができたかを考えます。原始地球の条件、炭素化合物が自然にできる証拠（ミラーとユーリーの実験）、膜とRNAがどう現れたか、熱水噴出孔の近くにいたかもしれない最終共通祖先の証拠を学びます。",
      "這是只限 HL 的子課題，探討約 40 億年前非生物的化學如何變成最初的細胞。內容包括早期地球的條件、含碳化合物自發形成的證據（米勒–尤里實驗）、膜和 RNA 可能如何出現，以及可能生活在海底熱泉附近的最後共同祖先的證據。"),
    sections,
    keyTerms: [
      { ahl: true, term: T("spontaneous formation", "自然発生的な生成", "自發形成"), def: T("Formation by chemical processes alone, with no living things involved.", "生物が関与せず、化学的過程だけで生じること。", "只靠化學過程形成，沒有生物參與。") },
      { ahl: true, term: T("self-sustaining", "自立して生きる", "自給自足"), def: T("Able to carry out all the functions of life without depending on another living cell.", "他の生きた細胞に頼らず、生命のすべての機能を行えること。", "能不依賴其他活細胞而進行所有生命功能。") },
      { ahl: true, term: T("protocell", "原始細胞", "原始細胞"), def: T("A simple cell-like structure, such as a vesicle containing replicating RNA, thought to have come before true cells.", "複製するRNAを含む小胞のように、真の細胞より前にあったと考えられる単純な細胞様構造。", "簡單的類細胞結構，例如含有可複製 RNA 的囊泡，被認為早於真正的細胞。") },
      { ahl: true, term: T("Miller–Urey experiment", "ミラーとユーリーの実験", "米勒–尤里實驗"), def: T("Experiment in which sparks passed through a mixture of gases and water produced organic compounds, including amino acids.", "水と気体の混合物に放電して、アミノ酸を含む有機化合物ができた実験。", "令電火花通過氣體和水的混合物，產生包括氨基酸的有機化合物的實驗。") },
      { ahl: true, term: T("vesicle", "小胞", "囊泡"), def: T("A hollow sphere surrounded by a membrane bilayer; fatty acids can form vesicles spontaneously.", "膜の二重層に囲まれた中空の球。脂肪酸は自然に小胞を作れる。", "由膜雙層包圍的空心球；脂肪酸可自發形成囊泡。") },
      { ahl: true, term: T("compartmentalization", "区画化", "區室化"), def: T("Separating regions with a membrane so that the chemistry inside differs from the outside.", "膜で領域を分け、内部の化学反応を外部と違うものにすること。", "以膜分隔區域，令內部化學反應與外面不同。") },
      { ahl: true, term: T("ribozyme", "リボザイム", "核酶"), def: T("An RNA molecule with catalytic activity, e.g. the RNA in the ribosome that forms peptide bonds.", "触媒活性をもつRNA分子。例：ペプチド結合をつくるリボソームのRNA。", "具催化活性的 RNA 分子，例如核糖體中形成肽鍵的 RNA。") },
      { ahl: true, term: T("last universal common ancestor (LUCA)", "最終共通祖先 (LUCA)", "最後共同祖先 (LUCA)"), def: T("The most recent population from which all organisms alive today are descended.", "現在生きているすべての生物がそこから進化した、最も新しい共通の祖先集団。", "現存所有生物所源自的最近一個共同祖先群體。") },
      { ahl: true, term: T("universal genetic code", "普遍的な遺伝暗号", "通用遺傳密碼"), def: T("The same base triplets code for the same amino acids in almost all organisms.", "ほぼすべての生物で、同じ3つ組塩基が同じアミノ酸を指定すること。", "幾乎所有生物中，相同的三聯鹼基編碼相同的氨基酸。") },
      { ahl: true, term: T("molecular clock", "分子時計", "分子鐘"), def: T("Using the number of sequence differences between species and a known rate of change to estimate when they diverged.", "種間の配列の違いの数と既知の変化速度から、分岐した時期を推定する方法。", "利用物種間序列差異的數目和已知的變化速率，估計它們何時分歧。") },
      { ahl: true, term: T("hydrothermal vent", "熱水噴出孔", "海底熱泉"), def: T("A crack in the sea floor from which hot, chemical-rich water emerges.", "化学物質を豊富に含む熱水が噴き出す海底の割れ目。", "海床上有富含化學物質的熱水湧出的裂縫。") },
      { ahl: true, term: T("conserved sequence", "保存された配列", "保守序列"), def: T("A DNA or protein sequence that has changed very little across different groups of organisms.", "異なる生物群の間でほとんど変化していないDNAやタンパク質の配列。", "在不同生物類群中改變極少的 DNA 或蛋白質序列。") }
    ],
    misconceptions: [
      { wrong: T("The Miller–Urey experiment proved how life began.", "ミラーとユーリーの実験は生命の始まりを証明した。", "米勒–尤里實驗證明了生命如何開始。"),
        right: T("It showed that amino acids and other organic compounds can form by chemical processes under early-Earth-like conditions. It did not make cells and cannot prove what really happened.", "初期地球に似た条件で、化学過程だけでアミノ酸などの有機化合物ができうることを示しました。細胞は作っておらず、実際に何が起きたかは証明できません。", "它顯示在類似早期地球的條件下，氨基酸等有機化合物可由化學過程形成。它沒有製造出細胞，也不能證明實際發生了甚麼。") },
      { wrong: T("LUCA was the first living thing on Earth.", "LUCAは地球で最初の生き物だった。", "LUCA 是地球上最早的生物。"),
        right: T("LUCA is the most recent common ancestor of all life today. Other forms of life may have existed earlier or at the same time but became extinct.", "LUCAは現在の全生物の最も新しい共通祖先です。ほかの生命がより早く、または同時に存在し、絶滅した可能性があります。", "LUCA 是現存所有生物最近的共同祖先。其他生命形式可能更早或同時存在過，但已絕種。") },
      { wrong: T("Viruses are non-living because they are very small.", "ウイルスは小さいから非生物である。", "病毒因為很細小，所以是非生物。"),
        right: T("Size is not the reason. Viruses are classed as non-living because they have no cytoplasm, almost no enzymes and no metabolism, and can only be copied inside a host cell.", "大きさは理由ではありません。細胞質がなく酵素もほとんどなく代謝がなく、宿主細胞内でしか複製されないためです。", "大小不是原因。病毒被歸為非生物，是因為沒有細胞質、幾乎沒有酶、沒有新陳代謝，只能在宿主細胞內被複製。") },
      { wrong: T("Spontaneous formation of carbon compounds on early Earth means life appears spontaneously today.", "原始地球で炭素化合物が自然にできたのだから、今でも生命は自然に生じる。", "早期地球上含碳化合物自發形成，所以現在生命也會自發出現。"),
        right: T("Early Earth conditions (no free oxygen, UV and lightning energy, no organisms eating the compounds) no longer exist. Today cells come only from existing cells.", "初期地球の条件（遊離酸素なし、紫外線や雷のエネルギー、化合物を食べる生物がいない）はもうありません。現在、細胞は既存の細胞からのみ生じます。", "早期地球的條件（沒有游離氧、有紫外線和閃電的能量、沒有生物吃這些化合物）已不存在。現在細胞只由已存在的細胞產生。") }
    ],
    beyondSyllabus: [
      T("You do not need to know the names of the amino acids or other compounds made in the Miller–Urey experiment, or the exact apparatus measurements.", "ミラーとユーリーの実験でできたアミノ酸などの化合物の名前や、装置の正確な数値を知る必要はありません。", "你不需要認識米勒–尤里實驗所產生的氨基酸或其他化合物的名稱，也不需要知道裝置的確切數值。"),
      T("You do not need to know the Oparin–Haldane “primordial soup” hypothesis by name, or alternative ideas such as panspermia. The guide does not name them.", "「オパーリン・ホールデン」の原始スープ説の名称や、パンスペルミア説などの別の考えを知る必要はありません。IB のガイドには挙げられていません。", "你不需要認識奧巴林–霍爾丹「原始湯」假說的名稱，也不需要認識泛種論等其他想法。指引中沒有提到。"),
      T("You do not need detailed RNA-world chemistry, such as names of specific ribozymes or how RNA is replicated without enzymes. Know only that RNA can be copied and can catalyse, and that the ribosome uses a ribozyme.", "RNAワールドの詳しい化学（特定のリボザイムの名前や、酵素なしのRNA複製の仕組み）は不要です。RNAは複製でき触媒にもなること、リボソームにリボザイムがあることだけ知っていれば十分です。", "你不需要認識 RNA 世界的詳細化學，例如特定核酶的名稱，或 RNA 如何在沒有酶時複製。只須知道 RNA 可被複製、可作催化劑，而核糖體含有核酶。"),
      T("You do not need to memorize exact dates for the first cells or LUCA, or the number or names of genes inferred to be in LUCA.", "最初の細胞やLUCAの正確な年代、LUCAがもっていたと推定される遺伝子の数や名前を暗記する必要はありません。", "你不需要背誦最初細胞或 LUCA 的確切年代，也不需要背誦推斷屬於 LUCA 的基因數目或名稱。"),
      T("Not needed for this subtopic: naming the three domains of life or drawing the tree of life. The three domains are taught in A3.2 (Classification and cladistics).", "この単元では不要：生物の3つのドメインの名称や生命の樹の描画。3つのドメインは A3.2 (分類と分岐学) で学びます。", "此子課題不需要：說出生物的三個域或繪畫生命樹。三個域會在 A3.2 (分類與支序分類學) 中學習。")
    ],
    links: [
      { to: "A1.2", why: T("RNA and DNA are nucleic acids; the genetic code links LUCA to every living cell.", "RNAとDNAは核酸で、遺伝暗号がLUCAとすべての生きた細胞をつなぎます。", "RNA 和 DNA 都是核酸；遺傳密碼把 LUCA 與所有活細胞連繫起來。") },
      { to: "A2.2", why: T("Endosymbiosis explains how mitochondria and chloroplasts in eukaryotic cells later evolved from prokaryotic cells.", "細胞内共生は、真核細胞のミトコンドリアと葉緑体が、のちに原核細胞からどう進化したかを説明します。", "內共生說明真核細胞中的線粒體和葉綠體後來如何由原核細胞演化而來。") },
      { to: "A2.3", why: T("Viruses are non-living but evolve; evidence suggests they arose several times from other organisms.", "ウイルスは非生物ですが進化します。証拠から、ウイルスはほかの生物から何度か別々に生じたと考えられます。", "病毒是非生物但會演化；證據顯示它們曾多次由其他生物演變而來。") },
      { to: "B2.1", why: T("The vesicle bilayer is the same basic structure as the phospholipid bilayer of cell membranes.", "小胞の二重層は、細胞膜のリン脂質二重層と同じ基本構造です。", "囊泡的雙層與細胞膜的磷脂雙層是相同的基本結構。") },
      { to: "A4.1", why: T("Shared DNA and protein sequences are evidence for evolution from common ancestors, the same kind of evidence used for LUCA.", "共通する DNA やタンパク質の配列は、共通祖先からの進化の証拠であり、LUCA の証拠と同じ種類のものです。", "共有的 DNA 和蛋白質序列是由共同祖先演化的證據，與支持 LUCA 的證據屬同一類。") }
    ],
    natureOfScience: [
      T("Claims in science, including hypotheses and theories, must be testable. Some hypotheses are hard to test: the exact conditions on pre-biotic Earth cannot be replicated, and the first protocells did not fossilize.", "仮説や理論を含む科学の主張は検証可能でなければなりません。原始地球の正確な条件は再現できず、最初の原始細胞は化石になっていないため、検証が難しい仮説もあります。", "科學主張（包括假說和理論）必須是可檢驗的。有些假說難以檢驗：前生物時期地球的確切條件無法重現，而最初的原始細胞也沒有形成化石。")
    ],
    questions
  });

})();
