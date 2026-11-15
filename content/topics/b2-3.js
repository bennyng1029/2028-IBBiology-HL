(function () {
const T = (en, ja, zh) => ({ en, ja, zh });

IB.registerTopic({
  id: "B2.3",
  slug: "b2-3",
  theme: "B",
  level: 2,
  ahlOnly: false,
  title: T("Cell specialization", "細胞の特殊化", "細胞特化"),
  guidingQuestions: [
    T("What are the roles of stem cells in multicellular organisms?",
      "多細胞生物において幹細胞はどのような役割を果たすか。",
      "幹細胞在多細胞生物中有甚麼作用？"),
    T("How are differentiated cells adapted to their specialized functions?",
      "分化した細胞は、それぞれの特殊な機能にどのように適応しているか。",
      "已分化的細胞如何適應其特化的功能？")
  ],
  summary: T(
    "A human starts as one fertilized egg. Its descendants all carry the same genes, yet they become hundreds of different cell types. This happens because different cells switch different genes on (differentiation). Stem cells keep the ability to divide and to produce new specialized cells. Cell size is limited by the surface area-to-volume ratio, and many specialized cells have shapes that help them exchange materials or do their job.",
    "人間は1個の受精卵から始まります。その子孫の細胞はすべて同じ遺伝子を持っていますが、何百種類もの異なる細胞になります。これは、細胞ごとに異なる遺伝子が働く（分化）ためです。幹細胞は分裂する能力と、新しい特殊化した細胞をつくる能力を保っています。細胞の大きさは表面積と体積の比によって制限され、多くの特殊化した細胞は、物質交換や働きを助ける形をしています。",
    "人類由一個受精卵開始。它的後代細胞全都帶有相同的基因，卻變成數以百計不同類型的細胞。這是因為不同的細胞啟動不同的基因（分化）。幹細胞保留分裂的能力，也能產生新的特化細胞。細胞的大小受表面面積與體積比 (surface area-to-volume ratio) 所限制，許多特化細胞的形狀有助於物質交換或執行其功能。"),
  sections: [
    {
      ref: "B2.3.1",
      deeper: {"en":"<p><strong>The process step by step</strong></p>\n<ol>\n<li>The zygote divides. The early cells are alike, but a signal (a chemical) is not spread evenly, so a gradient forms across the embryo.</li>\n<li>Each cell's position gives it a different concentration of the signal.</li>\n<li>Different concentrations switch on different genes (gene expression).</li>\n<li>Different genes expressed means different proteins made, and so different structure and function. The cell has differentiated.</li>\n</ol>\n<p><strong>Worked model.</strong> A signal falls from high (cell 1) to low (cell 5). A high concentration switches on gene P, a medium concentration switches on gene Q, and a low concentration switches on neither.</p>\n<table>\n<tr><th>Cell</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n<tr><td>Signal</td><td>high</td><td>high</td><td>medium</td><td>medium</td><td>low</td></tr>\n<tr><td>Gene expressed</td><td>P</td><td>P</td><td>Q</td><td>Q</td><td>none</td></tr>\n</table>\n<p>All five cells contain genes P and Q. Only the pattern of expression differs. (P and Q are made-up labels: you do not need real gene names.)</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>\"Different genes are <em>expressed</em> in different cells\" earns the mark. \"Different genes are <em>present</em>\" does not.</li>\n<li>Link the gradient to position: \"the concentration of the signal depends on where the cell is\".</li>\n<li>The proteins made decide the cell's structure and function (see B1.2).</li>\n</ul>","ja":"<p><strong>過程を順に見る</strong></p>\n<ol>\n<li>受精卵が分裂する。初期の細胞は互いに似ているが、シグナル（化学物質）が均等に分布しないため、胚の中に濃度勾配 (gradient) ができる。</li>\n<li>各細胞は、自分の位置に応じて異なる濃度のシグナルを受け取る。</li>\n<li>濃度が違うと、オンになる遺伝子が違う（遺伝子発現 (gene expression)）。</li>\n<li>発現する遺伝子が違えば、つくられるタンパク質が違い、構造と機能も違ってくる。こうして細胞は分化 (differentiation) する。</li>\n</ol>\n<p><strong>モデルで考える。</strong>シグナルが細胞1（高）から細胞5（低）へ弱くなるとする。高濃度で遺伝子Pが、中濃度で遺伝子Qがオンになり、低濃度ではどちらもオンにならない。</p>\n<table>\n<tr><th>細胞</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n<tr><td>シグナル</td><td>高</td><td>高</td><td>中</td><td>中</td><td>低</td></tr>\n<tr><td>発現する遺伝子</td><td>P</td><td>P</td><td>Q</td><td>Q</td><td>なし</td></tr>\n</table>\n<p>5つの細胞はすべて遺伝子PとQを持っている。違うのは発現のパターンだけである。（PとQは仮の名前であり、実際の遺伝子名は覚えなくてよい。）</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>「細胞ごとに異なる遺伝子が<em>発現</em>する」は得点になる。「異なる遺伝子を<em>持っている</em>」は得点にならない。</li>\n<li>勾配を位置と結びつける：「シグナルの濃度は細胞の位置によって決まる」。</li>\n<li>つくられるタンパク質が細胞の構造と機能を決める（B1.2参照）。</li>\n</ul>","zh":"<p><strong>逐步了解過程</strong></p>\n<ol>\n<li>受精卵 (zygote) 分裂。早期細胞彼此相似，但信號（化學物質）並非均勻分佈，所以胚胎中形成梯度 (gradient)。</li>\n<li>每個細胞因位置不同，接收到不同濃度的信號。</li>\n<li>不同濃度會開啟不同的基因（基因表達 (gene expression)）。</li>\n<li>表達的基因不同，製造的蛋白質就不同，結構和功能也不同。細胞就此分化 (differentiation)。</li>\n</ol>\n<p><strong>模型示例。</strong>信號由細胞1（高）向細胞5（低）遞減。高濃度開啟基因P，中濃度開啟基因Q，低濃度兩者都不開啟。</p>\n<table>\n<tr><th>細胞</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n<tr><td>信號</td><td>高</td><td>高</td><td>中</td><td>中</td><td>低</td></tr>\n<tr><td>表達的基因</td><td>P</td><td>P</td><td>Q</td><td>Q</td><td>無</td></tr>\n</table>\n<p>五個細胞都含有基因P和Q，不同的只是表達模式。（P和Q只是假設的代號，毋須記住真實的基因名稱。）</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>「不同細胞<em>表達</em>不同的基因」可得分；「不同細胞<em>擁有</em>不同的基因」不得分。</li>\n<li>把梯度與位置連起來：「信號濃度取決於細胞所在的位置」。</li>\n<li>所製造的蛋白質決定細胞的結構和功能（見 B1.2）。</li>\n</ul>"},
      ahl: false,
      heading: T("From fertilized egg to specialized cells", "受精卵から特殊化した細胞へ", "由受精卵到特化細胞"),
      body: T(
        `<p>After <strong>fertilization</strong>, the egg and sperm fuse to make a single cell, the zygote. The zygote divides again and again. The first cells made are <strong>unspecialized</strong>: they do not yet have one particular job.</p>
<p>Over time, cells <strong>differentiate</strong>. Differentiation means that a cell becomes specialized for a particular function. Every cell in the body has the same set of genes. What changes is <em>which genes are expressed</em> (switched on to make proteins). A nerve cell and a muscle cell make different proteins because they express different genes.</p>
<p>What tells a cell which genes to express? In an early embryo, there are <strong>gradients</strong>. A gradient is a gradual change in concentration across a space. For example, a signalling chemical may be most concentrated at one end of the embryo and least concentrated at the other end. A cell near the high end receives a strong signal. A cell near the low end receives a weak one. The different signal strengths switch on different genes, so cells in different positions follow different pathways of development.</p>
<div class="note">Key idea: cells differentiate by gene expression, <em>not</em> by gaining or losing genes.</div>`,
        `<p><strong>受精 (fertilization)</strong> の後、卵と精子が融合して1個の細胞、接合子 (zygote) ができます。接合子は何度も分裂します。最初にできる細胞は<strong>未分化 (unspecialized)</strong> で、まだ特定の役割を持っていません。</p>
<p>やがて細胞は<strong>分化 (differentiate)</strong> します。分化とは、細胞が特定の機能に特殊化することです。体のすべての細胞は同じ遺伝子の組を持っています。変わるのは、<em>どの遺伝子が発現するか</em>（働いてタンパク質をつくるか）です。神経細胞と筋細胞は、発現する遺伝子が違うので、つくるタンパク質も違います。</p>
<p>どの遺伝子を発現するかは、何が決めるのでしょうか。初期胚には<strong>勾配 (gradient)</strong> があります。勾配とは、ある空間にわたって濃度が少しずつ変化することです。たとえば、シグナル物質が胚の一端で最も濃く、もう一端で最も薄いことがあります。濃い側の細胞は強いシグナルを受け、薄い側の細胞は弱いシグナルを受けます。シグナルの強さが違うと働く遺伝子も違うので、位置の異なる細胞は異なる発生の道筋をたどります。</p>
<div class="note">重要：細胞は遺伝子を得たり失ったりして分化するのではなく、<em>遺伝子発現</em>の違いによって分化します。</div>`,
        `<p><strong>受精 (fertilization)</strong> 後，卵和精子融合成一個細胞，即合子 (zygote)。合子不斷分裂。最初產生的細胞是<strong>未特化 (unspecialized)</strong> 的，即尚未有特定的工作。</p>
<p>隨着時間，細胞會<strong>分化 (differentiate)</strong>。分化指細胞變得特化，以執行某特定功能。身體每個細胞都有相同的一套基因。改變的是<em>哪些基因被表達</em>（開啟以製造蛋白質）。神經細胞和肌肉細胞表達不同的基因，所以製造不同的蛋白質。</p>
<p>是甚麼告訴細胞要表達哪些基因？在早期胚胎中存在<strong>梯度 (gradient)</strong>。梯度是指在一個空間內濃度逐漸改變。例如，某種信號化學物質可能在胚胎一端濃度最高，另一端最低。靠近高濃度一端的細胞接收到強信號，靠近低濃度一端的細胞接收到弱信號。不同強度的信號開啟不同的基因，所以位置不同的細胞會走上不同的發育路徑。</p>
<div class="note">重點：細胞是靠基因表達而分化，<em>不是</em>靠獲得或失去基因。</div>`),
      examTip: T(
        "If asked how cells with identical DNA become different, answer with 'different genes are expressed' and link it to gradients or signals. Do not say that genes are lost.",
        "同じDNAを持つ細胞がなぜ違うものになるのかを問われたら、「異なる遺伝子が発現する」と答え、勾配やシグナルと結びつけましょう。遺伝子が失われる、とは書かないこと。",
        "若題目問為何擁有相同DNA的細胞會變得不同，應答「表達不同的基因」，並連繫到梯度或信號。不要寫基因會流失。")
    },
    {
      ref: "B2.3.2",
      deeper: {"en":"<p><strong>What can happen when a stem cell divides?</strong></p>\n<ul>\n<li>Both daughter cells stay as stem cells: the number of stem cells grows (useful in growth or after injury).</li>\n<li>One daughter stays a stem cell and one starts to differentiate: the number of stem cells stays the same while new specialized cells are supplied. This is <strong>self-renewal</strong>.</li>\n<li>Both daughters differentiate: many specialized cells are made, but that stem cell is used up.</li>\n</ul>\n<p><strong>Why endless division matters.</strong> Many specialized cells are short-lived. A red blood cell lasts only about 120 days, and a mature red blood cell cannot divide at all. The body therefore needs a permanent source of replacements. Stem cells are that source.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>Name <em>both</em> properties: \"divide endlessly (self-renew)\" and \"differentiate along different pathways\".</li>\n<li>Do not write \"stem cells can become any cell\". That is true only of some stem cells (see B2.3.4), so it can lose the mark.</li>\n<li>For \"Outline the importance of stem cells\", a 3-mark answer is: (1) they divide endlessly, giving a permanent supply of cells; (2) some daughter cells differentiate to replace worn-out or damaged cells or to allow growth; (3) others stay as stem cells, keeping the supply going.</li>\n</ul>","ja":"<p><strong>幹細胞が分裂するとどうなるか</strong></p>\n<ul>\n<li>2つの娘細胞がどちらも幹細胞のままになる：幹細胞の数が増える（成長時や損傷後に役立つ）。</li>\n<li>一方は幹細胞のまま、もう一方は分化を始める：幹細胞の数は変わらず、新しい特殊化した細胞が供給される。これが<strong>自己複製 (self-renewal)</strong> である。</li>\n<li>2つとも分化する：特殊化した細胞はたくさんできるが、その幹細胞は使い果たされる。</li>\n</ul>\n<p><strong>無限に分裂できることの意味。</strong>特殊化した細胞の多くは寿命が短い。赤血球の寿命は約120日で、成熟した赤血球は分裂できない。そのため体は交換用の細胞を供給し続ける源を必要とする。それが幹細胞である。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>2つの性質を<em>両方</em>書く：「無限に分裂できる（自己複製）」と「異なる経路に沿って分化できる (differentiate along different pathways)」。</li>\n<li>「幹細胞はどんな細胞にもなれる」と書かない。これは一部の幹細胞にしか当てはまらない（B2.3.4参照）ので、得点を失うことがある。</li>\n<li>「幹細胞の重要性を概説せよ (Outline)」の3点の解答例：(1) 無限に分裂し、細胞を絶えず供給する。(2) 一部の娘細胞が分化し、古くなった細胞や傷ついた細胞を置き換えたり成長に使われたりする。(3) ほかの娘細胞は幹細胞のままで、供給を続ける。</li>\n</ul>","zh":"<p><strong>幹細胞分裂時可能出現的結果</strong></p>\n<ul>\n<li>兩個子細胞都維持為幹細胞：幹細胞數目增加（在生長或受傷後有用）。</li>\n<li>一個子細胞維持為幹細胞，另一個開始分化：幹細胞數目不變，同時供應新的特化細胞。這就是<strong>自我更新 (self-renewal)</strong>。</li>\n<li>兩個子細胞都分化：產生大量特化細胞，但該幹細胞被用盡。</li>\n</ul>\n<p><strong>為何無限分裂很重要。</strong>許多特化細胞壽命很短。紅血球只能存活約120日，而且成熟的紅血球完全不能分裂。因此身體需要一個長期的替代細胞來源，那就是幹細胞。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>兩種性質都要寫：「能無限分裂（自我更新）」及「能沿不同途徑分化 (differentiate along different pathways)」。</li>\n<li>不要寫「幹細胞可以變成任何細胞」。這只適用於部分幹細胞（見 B2.3.4），可能失分。</li>\n<li>「概述幹細胞的重要性 (Outline)」的3分答案：(1) 能無限分裂，持續供應細胞；(2) 部分子細胞分化，以取代衰老或受損的細胞或供生長之用；(3) 其餘子細胞維持為幹細胞，使供應不斷。</li>\n</ul>"},
      ahl: false,
      heading: T("Properties of stem cells", "幹細胞の性質", "幹細胞的特性"),
      body: T(
        `<p>A <strong>stem cell</strong> is an unspecialized cell that can keep dividing and can also become specialized. The guide limits you to two properties:</p>
<ul>
<li><strong>The capacity to divide endlessly.</strong> A stem cell can divide again and again, making new stem cells. This is called self-renewal.</li>
<li><strong>The capacity to differentiate along different pathways.</strong> A stem cell can give rise to more than one type of specialized cell.</li>
</ul>
<p>Because of these properties, stem cells can both keep a supply of themselves and provide new specialized cells for growth, repair and replacement of worn-out cells.</p>`,
        `<p><strong>幹細胞 (stem cell)</strong> とは、分裂し続けることができ、さらに特殊化することもできる未分化の細胞です。ガイドが求める性質は次の2つに限られます。</p>
<ul>
<li><strong>無限に分裂できる能力 (capacity to divide endlessly)。</strong>幹細胞は何度も分裂して、新しい幹細胞をつくります。これを自己複製 (self-renewal) と呼びます。</li>
<li><strong>異なる経路で分化できる能力 (capacity to differentiate along different pathways)。</strong>幹細胞は2種類以上の特殊化した細胞を生み出せます。</li>
</ul>
<p>これらの性質のおかげで、幹細胞は自分自身の供給を保ちながら、成長・修復・消耗した細胞の置き換えのために新しい特殊化した細胞を供給できます。</p>`,
        `<p><strong>幹細胞 (stem cell)</strong> 是未特化的細胞，能夠不斷分裂，也能變得特化。課程指引只要求你掌握兩項特性：</p>
<ul>
<li><strong>無限分裂的能力 (capacity to divide endlessly)。</strong>幹細胞可以一再分裂，產生新的幹細胞，這稱為自我更新 (self-renewal)。</li>
<li><strong>向不同路徑分化的能力 (capacity to differentiate along different pathways)。</strong>幹細胞可以產生多於一種的特化細胞。</li>
</ul>
<p>由於這些特性，幹細胞既能維持自身的數目，又能為生長、修復和更替耗損的細胞提供新的特化細胞。</p>`)
    },
    {
      ref: "B2.3.3",
      deeper: {"en":"<p><strong>How a niche works (bone marrow example)</strong></p>\n<ol>\n<li>Stem cells sit in the niche, surrounded by supporting cells and chemical signals.</li>\n<li>Normally the signals <strong>maintain</strong> most of the stem cells as stem cells, and only some divide.</li>\n<li>When more blood cells are needed (for example after blood loss), the signals <strong>promote proliferation and differentiation</strong>. Some daughter cells stay as stem cells. Others differentiate into red or white blood cells and pass into the blood.</li>\n</ol>\n<p>Control by the niche means that stem cells divide and differentiate only when needed, and the supply of stem cells is not used up.</p>\n<table>\n<tr><th></th><th>Bone marrow</th><th>Hair follicle</th></tr>\n<tr><td>Cells produced</td><td>Red and white blood cells</td><td>Cells of the hair and of the skin</td></tr>\n<tr><td>Potency</td><td>Multipotent</td><td>Multipotent</td></tr>\n<tr><td>Niche role</td><td>Maintains stem cells, or promotes their division and differentiation when blood cells are needed</td><td>Maintains stem cells, or promotes production of cells for a new hair</td></tr>\n</table>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>A niche is a <em>location with its own cells and chemical signals</em>, not just a place.</li>\n<li>Give a named example <em>and</em> the cells it makes.</li>\n<li>Do not write that bone marrow makes \"all the cells of the body\": it is multipotent (B2.3.4).</li>\n</ul>","ja":"<p><strong>ニッチのはたらき（骨髄の例）</strong></p>\n<ol>\n<li>幹細胞はニッチ (niche) の中にあり、周りを支持細胞と化学シグナルに囲まれている。</li>\n<li>通常、シグナルはほとんどの幹細胞を幹細胞のまま<strong>維持</strong>し、分裂するのは一部だけである。</li>\n<li>血球がもっと必要なとき（たとえば出血のあと）、シグナルは<strong>増殖と分化を促進</strong>する。娘細胞の一部は幹細胞のまま残り、ほかは赤血球や白血球に分化して血液中に出ていく。</li>\n</ol>\n<p>ニッチが制御するため、幹細胞は必要なときだけ分裂・分化し、幹細胞の供給が尽きることはない。</p>\n<table>\n<tr><th></th><th>骨髄 (bone marrow)</th><th>毛包 (hair follicle)</th></tr>\n<tr><td>つくられる細胞</td><td>赤血球と白血球</td><td>毛と皮膚の細胞</td></tr>\n<tr><td>分化能</td><td>多分化能 (multipotent)</td><td>多分化能 (multipotent)</td></tr>\n<tr><td>ニッチの役割</td><td>幹細胞を維持する、または血球が必要なときに分裂と分化を促す</td><td>幹細胞を維持する、または新しい毛のための細胞づくりを促す</td></tr>\n</table>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>ニッチは単なる場所ではなく、<em>固有の細胞と化学シグナルを持つ場所</em>である。</li>\n<li>具体例の名前<em>と</em>、そこでつくられる細胞を書く。</li>\n<li>骨髄が「体のすべての細胞」をつくると書かない。骨髄の幹細胞は多能性である（B2.3.4）。</li>\n</ul>","zh":"<p><strong>幹細胞微環境的運作方式（以骨髓為例）</strong></p>\n<ol>\n<li>幹細胞位於幹細胞微環境 (niche) 內，周圍有支持細胞和化學信號。</li>\n<li>一般情況下，信號<strong>維持</strong>大部分幹細胞為幹細胞，只有部分會分裂。</li>\n<li>當身體需要更多血細胞（例如失血後），信號會<strong>促進增殖和分化</strong>。部分子細胞仍是幹細胞，其他則分化為紅血球或白血球並進入血液。</li>\n</ol>\n<p>由於有幹細胞微環境的調控，幹細胞只在需要時才分裂和分化，幹細胞的供應也不會被耗盡。</p>\n<table>\n<tr><th></th><th>骨髓 (bone marrow)</th><th>毛囊 (hair follicle)</th></tr>\n<tr><td>產生的細胞</td><td>紅血球和白血球</td><td>毛髮和皮膚的細胞</td></tr>\n<tr><td>分化潛能</td><td>專能 (multipotent)</td><td>專能 (multipotent)</td></tr>\n<tr><td>幹細胞微環境的作用</td><td>維持幹細胞，或在需要血細胞時促進其分裂和分化</td><td>維持幹細胞，或促進產生新毛髮所需的細胞</td></tr>\n</table>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>幹細胞微環境是<em>具有自己的細胞和化學信號的位置</em>，不只是一個地方。</li>\n<li>要寫出具體例子<em>及</em>它所產生的細胞。</li>\n<li>不要寫骨髓製造「身體所有的細胞」：骨髓幹細胞是多能的（B2.3.4）。</li>\n</ul>"},
      ahl: false,
      heading: T("Stem cell niches in adult humans", "成人の幹細胞ニッチ", "成人體內的幹細胞微環境"),
      body: T(
        `<p>Stem cells are not only found in embryos. Adults also keep stem cells. They live in a <strong>stem cell niche</strong>: a particular location, with its own surrounding cells and chemical signals, where the stem cells are kept.</p>
<p>The guide asks for <em>two example locations</em>. Bone marrow and hair follicles are suitable:</p>
<ul>
<li><strong>Bone marrow</strong> (the soft tissue inside some bones). Stem cells here divide and differentiate to make the different kinds of blood cells, including red blood cells and white blood cells.</li>
<li><strong>Hair follicles</strong> (the pits in the skin where hairs grow). Stem cells here can produce the new cells that build a new hair and also cells of the skin.</li>
</ul>
<p>The niche controls what the stem cells do. It can <strong>maintain</strong> the stem cells (keep them as stem cells), or it can <strong>promote their proliferation and differentiation</strong> (make them divide and produce specialized cells) when new cells are needed.</p>`,
        `<p>幹細胞は胚だけにあるのではありません。成人も幹細胞を持ち続けています。幹細胞は<strong>幹細胞ニッチ (stem cell niche)</strong> にいます。これは、周囲の細胞と化学シグナルを備えた特定の場所で、幹細胞が保たれています。</p>
<p>ガイドは<em>2つの場所の例</em>を求めています。骨髄と毛包が適切な例です。</p>
<ul>
<li><strong>骨髄 (bone marrow)</strong>（一部の骨の内部にある柔らかい組織）。ここの幹細胞は分裂・分化して、赤血球や白血球を含むさまざまな血球をつくります。</li>
<li><strong>毛包 (hair follicle)</strong>（皮膚の中で毛が生える窪み）。ここの幹細胞は、新しい毛をつくる細胞や皮膚の細胞を生み出せます。</li>
</ul>
<p>ニッチは幹細胞の働きを制御します。幹細胞を<strong>維持する (maintain)</strong>（幹細胞のままにしておく）こともあれば、新しい細胞が必要なときに<strong>増殖と分化を促す (promote proliferation and differentiation)</strong>（分裂させて特殊化した細胞をつくらせる）こともあります。</p>`,
        `<p>幹細胞不只存在於胚胎。成年人也保留幹細胞。它們位於<strong>幹細胞微環境 (stem cell niche)</strong>：這是一個特定的位置，有周圍的細胞和化學信號，幹細胞就保存在其中。</p>
<p>課程指引要求<em>兩個例子的位置</em>。骨髓和毛囊是合適的例子：</p>
<ul>
<li><strong>骨髓 (bone marrow)</strong>（某些骨內的柔軟組織）。這裏的幹細胞分裂和分化，產生不同種類的血細胞，包括紅血球和白血球。</li>
<li><strong>毛囊 (hair follicle)</strong>（皮膚中毛髮生長的凹穴）。這裏的幹細胞可產生構成新毛髮的細胞，以及皮膚的細胞。</li>
</ul>
<p>微環境控制幹細胞的行為。它可以<strong>維持 (maintain)</strong> 幹細胞（使它們保持為幹細胞），也可以在需要新細胞時<strong>促進其增殖和分化 (promote proliferation and differentiation)</strong>（使它們分裂並產生特化細胞）。</p>`)
    },
    {
      ref: "B2.3.4",
      deeper: {"en":"<p><strong>Why potency narrows.</strong> As development goes on, cells switch some genes on and others off in a more fixed pattern. Each step restricts what the cell and its descendants can become. The range of cell types a stem cell can make therefore usually gets narrower.</p>\n<p><strong>A quick way to decide which term to use</strong></p>\n<table>\n<tr><th>Ask</th><th>If yes</th></tr>\n<tr><td>Can it give rise to a whole organism?</td><td>Totipotent</td></tr>\n<tr><td>Can it make most or all body cell types, but not a whole organism by itself?</td><td>Pluripotent</td></tr>\n<tr><td>Can it make only a limited range of related cell types?</td><td>Multipotent</td></tr>\n</table>\n<p><strong>Apply it.</strong> A cell from an adult bone marrow can make red blood cells, several kinds of white blood cell and cells of the same blood family, but not nerve or liver cells. That is a limited range, so it is <em>multipotent</em>. A cell taken from a very early animal embryo that can form a complete new animal is <em>totipotent</em>.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>Totipotent: \"all cell types / a whole organism\". Pluripotent: \"most or all cell types, but not a whole organism\". Multipotent: \"limited range of cell types\".</li>\n<li>All three types can still divide. Potency is about what they can become, not whether they divide.</li>\n<li>When asked to <em>distinguish</em>, give a difference for each type, not just a definition of one.</li>\n</ul>","ja":"<p><strong>分化能が狭まる理由。</strong>発生が進むにつれて、細胞はどの遺伝子をオンにしどの遺伝子をオフにするかをより固定的なパターンで決めていく。段階ごとに、その細胞とその子孫がなれるものが制限される。そのため幹細胞がつくれる細胞の種類は、通常しだいに狭くなる。</p>\n<p><strong>どの用語を使うか、簡単に判断する方法</strong></p>\n<table>\n<tr><th>問い</th><th>「はい」の場合</th></tr>\n<tr><td>個体全体をつくれるか。</td><td>全能性 (totipotent)</td></tr>\n<tr><td>体のほとんどまたはすべての細胞の種類をつくれるが、それだけでは個体全体にはなれないか。</td><td>多能性 (pluripotent)</td></tr>\n<tr><td>つくれるのは、関連した限られた種類の細胞だけか。</td><td>多分化能 (multipotent)</td></tr>\n</table>\n<p><strong>当てはめてみる。</strong>成人の骨髄の細胞は、赤血球や数種類の白血球など血液の仲間の細胞をつくれるが、神経細胞や肝細胞はつくれない。つくれる範囲が限られているので、これは multipotent である。ごく初期の動物胚から取り出した細胞が、完全な新しい動物をつくれるなら totipotent である。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>totipotent：「すべての細胞の種類／個体全体」。pluripotent：「ほとんどまたはすべての細胞の種類。ただし個体全体ではない」。multipotent：「限られた範囲の細胞の種類」。</li>\n<li>3つとも分裂はできる。分化能は「何になれるか」の話であり、分裂するかどうかの話ではない。</li>\n<li>「区別せよ (Distinguish)」では、片方の定義だけでなく、それぞれの違いを書く。</li>\n</ul>","zh":"<p><strong>為何分化潛能會收窄。</strong>隨着發育進行，細胞會以更固定的模式開啟某些基因、關閉另一些基因。每一步都限制了該細胞及其後代能夠變成甚麼。所以幹細胞能產生的細胞種類通常會愈來愈少。</p>\n<p><strong>快速判斷用哪個詞</strong></p>\n<table>\n<tr><th>問題</th><th>如果「是」</th></tr>\n<tr><td>能否發育成完整的生物體？</td><td>全能 (totipotent)</td></tr>\n<tr><td>能否產生身體大部分或所有細胞種類，但單憑自己不能形成完整生物體？</td><td>多能 (pluripotent)</td></tr>\n<tr><td>是否只能產生有限範圍內相關的細胞種類？</td><td>專能 (multipotent)</td></tr>\n</table>\n<p><strong>應用。</strong>成人骨髓的細胞可以製造紅血球、幾種白血球及同屬血液系統的細胞，但不能製造神經細胞或肝細胞。這是有限的範圍，所以屬 <em>multipotent</em>。從極早期動物胚胎取出的細胞若能形成一隻完整的新動物，就是 <em>totipotent</em>。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>totipotent：「所有細胞種類／完整生物體」。pluripotent：「大部分或所有細胞種類，但不是完整生物體」。multipotent：「有限範圍的細胞種類」。</li>\n<li>三種都仍然可以分裂。分化潛能是指它們能變成甚麼，而不是它們會不會分裂。</li>\n<li>題目要求<em>區別 (Distinguish)</em> 時，要為每一種寫出差異，不能只定義其中一種。</li>\n</ul>"},
      ahl: false,
      heading: T("Totipotent, pluripotent and multipotent", "全能性・多能性・多分化能", "全能、多能與專能"),
      body: T(
        `<p>Stem cells differ in how many cell types they can become. This is called their <em>potency</em>.</p>
<table>
<tr><th>Type</th><th>What it can become</th><th>Where found</th></tr>
<tr><td><strong>Totipotent</strong></td><td>Every cell type needed to make a whole organism</td><td>Cells of the very early animal embryo</td></tr>
<tr><td><strong>Pluripotent</strong></td><td>Most or all of the body's cell types, but not a whole organism by themselves</td><td>Slightly later embryo cells (the cells soon become pluripotent)</td></tr>
<tr><td><strong>Multipotent</strong></td><td>Only a limited range of related cell types</td><td>Adult tissue, such as stem cells in bone marrow</td></tr>
</table>
<p>So the cells in an early-stage animal embryo are totipotent, but they soon become pluripotent. As development goes on, the potency of the cells narrows. Stem cells in adult tissue such as bone marrow are multipotent: bone marrow stem cells can make different blood cells, but they do not normally make nerve cells.</p>`,
        `<p>幹細胞は、何種類の細胞になれるかが異なります。これを<em>分化能 (potency)</em> と呼びます。</p>
<table>
<tr><th>種類</th><th>なれる細胞</th><th>見られる場所</th></tr>
<tr><td><strong>全能性 (totipotent)</strong></td><td>生物体全体をつくるのに必要なすべての細胞の種類</td><td>ごく初期の動物胚の細胞</td></tr>
<tr><td><strong>多能性 (pluripotent)</strong></td><td>体の大部分またはすべての細胞の種類。ただし単独では個体全体にはならない</td><td>やや後の胚の細胞（細胞はまもなく多能性になる）</td></tr>
<tr><td><strong>多分化能 (multipotent)</strong></td><td>関連する限られた種類の細胞のみ</td><td>骨髄の幹細胞など、成体の組織</td></tr>
</table>
<p>つまり、初期の動物胚の細胞は全能性ですが、まもなく多能性になります。発生が進むと、細胞の分化能は狭まります。骨髄のような成体組織の幹細胞は多分化能です。骨髄の幹細胞はさまざまな血球をつくれますが、通常は神経細胞をつくりません。</p>`,
        `<p>幹細胞能夠變成的細胞類型數目各有不同，這稱為<em>潛能 (potency)</em>。</p>
<table>
<tr><th>類型</th><th>能變成甚麼</th><th>所在位置</th></tr>
<tr><td><strong>全能 (totipotent)</strong></td><td>構成整個生物體所需的所有細胞類型</td><td>極早期動物胚胎的細胞</td></tr>
<tr><td><strong>多能 (pluripotent)</strong></td><td>身體大部分或所有的細胞類型，但本身不能發育成完整個體</td><td>稍後期胚胎的細胞（細胞很快變成多能）</td></tr>
<tr><td><strong>專能 (multipotent)</strong></td><td>只能變成數種有關連的細胞類型</td><td>成體組織，例如骨髓中的幹細胞</td></tr>
</table>
<p>因此，早期動物胚胎的細胞是全能的，但很快變成多能。隨着發育進行，細胞的潛能逐漸收窄。成體組織（如骨髓）中的幹細胞是專能的：骨髓幹細胞能產生不同的血細胞，但通常不會產生神經細胞。</p>`),
      examTip: T(
        "Learn the order: totipotent (early embryo) → pluripotent (soon after) → multipotent (adult tissue). Use 'whole organism' for totipotent and 'limited range' for multipotent.",
        "順番を覚えましょう：全能性（初期胚）→ 多能性（その後まもなく）→ 多分化能（成体組織）。全能性には「個体全体」、多分化能には「限られた範囲」という表現を使います。",
        "記着次序：全能（早期胚胎）→ 多能（其後不久）→ 專能（成體組織）。全能用「整個生物體」，專能用「有限範圍」。")
    },
    {
      ref: "B2.3.5",
      deeper: {"en":"<p><strong>Unit conversions.</strong> 1 mm = 1000 µm, and 1 µm = 1000 nm. So the egg (about 0.1 mm) is about 100 µm across. A red blood cell is about 7 µm across, so about 14 red blood cells would fit side by side across one egg (100 ÷ 7 ≈ 14).</p>\n<p><strong>Worked example: actual size from a drawing or micrograph.</strong> Use magnification = image size ÷ actual size, so actual size = image size ÷ magnification.</p>\n<p>A red blood cell in a micrograph measures 35 mm across. The magnification is ×5000.</p>\n<ol>\n<li>Actual size = 35 mm ÷ 5000 = 0.007 mm.</li>\n<li>Convert: 0.007 mm × 1000 = 7 µm.</li>\n</ol>\n<p><strong>Order of size (largest to smallest):</strong> neuron (long fibre up to about 1 m) &gt; striated muscle fibre (up to centimetres long) &gt; egg (about 100 µm) &gt; white blood cell (10–15 µm) &gt; red blood cell (about 7 µm) &gt; sperm head (about 5 µm).</p>\n<p><strong>Why a neuron can be so long.</strong> The fibre is very thin, so its volume stays small compared with its surface. Its length is useful because it carries signals over long distances.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>Link every size to a function: \"large cytoplasm for food stores\", \"small and flat to pass through narrow capillaries\", \"long thin fibre to carry signals\".</li>\n<li>Always give units, and show the conversion step in a calculation.</li>\n</ul>","ja":"<p><strong>単位の換算。</strong>1 mm = 1000 µm、1 µm = 1000 nm。したがって卵（約0.1 mm）は直径約100 µmである。赤血球は直径約7 µmなので、卵の直径に赤血球が約14個並ぶ（100 ÷ 7 ≈ 14）。</p>\n<p><strong>計算例：図や顕微鏡写真から実際の大きさを求める。</strong>倍率 (magnification) = 像の大きさ ÷ 実際の大きさ なので、実際の大きさ = 像の大きさ ÷ 倍率。</p>\n<p>顕微鏡写真で赤血球の幅が35 mm、倍率が×5000とする。</p>\n<ol>\n<li>実際の大きさ = 35 mm ÷ 5000 = 0.007 mm。</li>\n<li>単位を換算する：0.007 mm × 1000 = 7 µm。</li>\n</ol>\n<p><strong>大きさの順（大きい順）：</strong>神経細胞（長い繊維は最大約1 m）＞ 横紋筋線維（長さ数cmまで）＞ 卵（約100 µm）＞ 白血球（10〜15 µm）＞ 赤血球（約7 µm）＞ 精子の頭部（約5 µm）。</p>\n<p><strong>神経細胞がこれほど長くなれる理由。</strong>繊維は非常に細いので、表面積に比べて体積が小さいままである。長いことは、信号を遠くまで運ぶのに役立つ。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>どの大きさも機能と結びつける：「食料を蓄える大きな細胞質」「細い毛細血管を通れる小さく平らな形」「信号を運ぶ長く細い繊維」。</li>\n<li>単位を必ず書き、計算では単位換算の手順も示す。</li>\n</ul>","zh":"<p><strong>單位換算。</strong>1 mm = 1000 µm，1 µm = 1000 nm。所以卵細胞（約0.1 mm）直徑約100 µm。紅血球直徑約7 µm，所以一個卵細胞的直徑上大約可並排14個紅血球（100 ÷ 7 ≈ 14）。</p>\n<p><strong>計算示例：由圖像或顯微照片求實際大小。</strong>放大倍數 (magnification) = 圖像大小 ÷ 實際大小，所以實際大小 = 圖像大小 ÷ 放大倍數。</p>\n<p>顯微照片中一個紅血球闊35 mm，放大倍數為×5000。</p>\n<ol>\n<li>實際大小 = 35 mm ÷ 5000 = 0.007 mm。</li>\n<li>換算單位：0.007 mm × 1000 = 7 µm。</li>\n</ol>\n<p><strong>大小排序（由大至小）：</strong>神經元（長纖維最長約1 m）＞ 橫紋肌纖維（長可達數厘米）＞ 卵細胞（約100 µm）＞ 白血球（10–15 µm）＞ 紅血球（約7 µm）＞ 精子頭部（約5 µm）。</p>\n<p><strong>為何神經元可以這麼長。</strong>纖維非常幼細，所以體積相對於表面仍然很小。長度有助它把信號傳送到很遠的地方。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>每個大小都要連繫到功能：「大量細胞質以貯存養分」、「細小而扁平，可通過窄的微絲血管」、「又長又幼的纖維傳送信號」。</li>\n<li>一定要寫單位，計算時要顯示單位換算的步驟。</li>\n</ul>"},
      ahl: false,
      heading: T("Cell size as part of specialization", "特殊化の一部としての細胞の大きさ", "細胞大小是特化的一環"),
      body: T(
        `<p>Cells in the human body vary a lot in size. Size is part of how a cell is specialized for its job. The guide asks you to consider these examples. The sizes are approximate.</p>
<table>
<tr><th>Cell</th><th>Approximate size</th><th>Why the size suits the job</th></tr>
<tr><td>Egg (female gamete)</td><td>about 0.1 mm across; one of the largest human cells</td><td>Large cytoplasm holds food stores and the molecules needed for early development</td></tr>
<tr><td>Sperm (male gamete)</td><td>head about 5 µm; whole cell about 50 µm long</td><td>Small and streamlined for swimming</td></tr>
<tr><td>Red blood cell</td><td>about 7 µm across</td><td>Small and flat enough to pass through the narrowest capillaries</td></tr>
<tr><td>White blood cell</td><td>about 10–15 µm across</td><td>Large enough to engulf pathogens; can squeeze out of capillaries</td></tr>
<tr><td>Neuron</td><td>cell body about 10–50 µm; the long fibre (axon) can be up to about 1 m long</td><td>Long, thin fibre carries signals over long distances</td></tr>
<tr><td>Striated muscle fibre</td><td>about 10–100 µm wide but can be centimetres long</td><td>Long fibres give a strong pull along the length of a muscle</td></tr>
</table>
<p>Remember: 1 mm = 1000 µm. Cells are usually too small to see without a microscope. A cell's size must match its function and must stay inside the limits set by its surface area-to-volume ratio (next section).</p>`,
        `<p>人体の細胞は大きさが大きく異なります。大きさは、細胞が役割に合わせて特殊化する一部です。ガイドは次の例を考えるよう求めています。大きさは概数です。</p>
<table>
<tr><th>細胞</th><th>おおよその大きさ</th><th>大きさが役割に合う理由</th></tr>
<tr><td>卵 (egg)（雌性配偶子）</td><td>直径約0.1 mm。ヒトの最大級の細胞</td><td>大きな細胞質に栄養の蓄えと初期発生に必要な分子を蓄える</td></tr>
<tr><td>精子 (sperm)（雄性配偶子）</td><td>頭部約5 µm、細胞全体の長さ約50 µm</td><td>小さく流線形で、泳ぐのに適している</td></tr>
<tr><td>赤血球 (red blood cell)</td><td>直径約7 µm</td><td>最も細い毛細血管を通れる小ささと平たさ</td></tr>
<tr><td>白血球 (white blood cell)</td><td>直径約10～15 µm</td><td>病原体を取り込める大きさで、毛細血管から外へ出られる</td></tr>
<tr><td>ニューロン (neuron)</td><td>細胞体は約10～50 µm、長い突起（軸索）は最長約1 m</td><td>長く細い突起が長距離に信号を伝える</td></tr>
<tr><td>横紋筋線維 (striated muscle fibre)</td><td>幅約10～100 µm、長さは数cmに達する</td><td>長い線維が筋肉の長さ方向に強い力を生む</td></tr>
</table>
<p>覚えておきましょう：1 mm = 1000 µm。細胞はふつう顕微鏡がなければ見えません。細胞の大きさは機能に合っていなければならず、また表面積と体積の比によって決まる限界の内側になければなりません（次のセクション）。</p>`,
        `<p>人體細胞的大小差異很大。大小是細胞為其工作而特化的一部分。課程指引要求你考慮以下例子。大小為約數。</p>
<table>
<tr><th>細胞</th><th>大約大小</th><th>大小為何配合其工作</th></tr>
<tr><td>卵 (egg)（雌配子）</td><td>直徑約0.1 mm；人體最大的細胞之一</td><td>大量細胞質可儲存營養物質及早期發育所需的分子</td></tr>
<tr><td>精子 (sperm)（雄配子）</td><td>頭部約5 µm；整個細胞長約50 µm</td><td>細小而呈流線型，利於游動</td></tr>
<tr><td>紅血球 (red blood cell)</td><td>直徑約7 µm</td><td>細小而扁平，可通過最窄的微絲血管</td></tr>
<tr><td>白血球 (white blood cell)</td><td>直徑約10–15 µm</td><td>大得足以吞噬病原體，並能擠出微絲血管</td></tr>
<tr><td>神經元 (neuron)</td><td>細胞體約10–50 µm；長的纖維（軸突）可長達約1 m</td><td>又長又幼的纖維可把信號傳送到遠處</td></tr>
<tr><td>橫紋肌纖維 (striated muscle fibre)</td><td>闊約10–100 µm，但長度可達數厘米</td><td>長纖維沿肌肉的長度方向產生強勁拉力</td></tr>
</table>
<p>記着：1 mm = 1000 µm。細胞通常小得要用顯微鏡才看到。細胞的大小必須配合其功能，並且必須在表面面積與體積比所訂下的限度之內（見下一節）。</p>`)
    },
    {
      ref: "B2.3.6",
      deeper: {"en":"<p><strong>The idea behind the numbers.</strong> The supply of materials depends on surface area. The demand depends on volume. So SA:V tells you how much supply there is for each unit of demand.</p>\n<p><strong>Scale factor rule.</strong> If the side of a cube is multiplied by <em>k</em>, the surface area is multiplied by <em>k</em>², the volume by <em>k</em>³, and SA:V is divided by <em>k</em>. (Check: SA:V = 6 ÷ l.)</p>\n<p><strong>Worked example A.</strong> A cube has sides 3 µm. SA = 6 × 3² = 54 µm². Volume = 3³ = 27 µm³. SA:V = 54 ÷ 27 = 2 : 1.</p>\n<p><strong>Worked example B (using the scale factor).</strong> The side goes from 2 µm to 10 µm, so <em>k</em> = 5. SA is multiplied by 25 (24 → 600 µm²). Volume is multiplied by 125 (8 → 1000 µm³). SA:V = 600 ÷ 1000 = 0.6 : 1, which is 3 ÷ 5.</p>\n<p><strong>Working backwards.</strong> A cube has SA:V of 1 : 1. Then 6 ÷ l = 1, so l = 6 µm.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>For data questions, compare <em>both</em> numbers: \"surface area increased 4 times but volume increased 8 times\".</li>\n<li>Show the formula, the substitution and the answer. Write the ratio as a number : 1.</li>\n<li>Say \"need depends on volume, supply depends on surface area\". Do not say \"big cells have no surface area\".</li>\n<li>The cube is a model. Say what it simplifies: real cells are not cubes.</li>\n</ul>\n<p>Link: B3.1.1 uses the same idea for whole organisms.</p>","ja":"<p><strong>数値の背景にある考え方。</strong>物質の供給量は表面積で決まり、必要量は体積で決まる。したがって表面積対体積比 (SA:V) は、必要量1単位あたりにどれだけの供給があるかを表す。</p>\n<p><strong>倍率の法則。</strong>立方体の一辺を<em>k</em>倍にすると、表面積は<em>k</em>²倍、体積は<em>k</em>³倍になり、SA:Vは<em>k</em>で割った値になる。（確認：SA:V = 6 ÷ l。）</p>\n<p><strong>計算例A。</strong>一辺3 µmの立方体。表面積 = 6 × 3² = 54 µm²。体積 = 3³ = 27 µm³。SA:V = 54 ÷ 27 = 2 : 1。</p>\n<p><strong>計算例B（倍率の法則を使う）。</strong>一辺が2 µmから10 µmになるので<em>k</em> = 5。表面積は25倍（24 → 600 µm²）。体積は125倍（8 → 1000 µm³）。SA:V = 600 ÷ 1000 = 0.6 : 1。これは 3 ÷ 5 に等しい。</p>\n<p><strong>逆算する。</strong>立方体のSA:Vが1 : 1のとき、6 ÷ l = 1 なので l = 6 µm。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>データ問題では<em>両方</em>の数値を比べる：「表面積は4倍になったが、体積は8倍になった」。</li>\n<li>公式、代入、答えを示す。比は「数値 : 1」の形で書く。</li>\n<li>「必要量は体積に、供給量は表面積に依存する」と書く。「大きな細胞には表面積がない」とは書かない。</li>\n<li>立方体は模型 (model) である。何を単純化しているか（実際の細胞は立方体ではない）を述べる。</li>\n</ul>\n<p>関連：B3.1.1では同じ考え方を生物の個体全体に使う。</p>","zh":"<p><strong>數字背後的概念。</strong>物質的供應量取決於表面積，需求量取決於體積。所以表面積與體積比 (SA:V) 反映每一單位需求有多少供應。</p>\n<p><strong>比例係數規則。</strong>若立方體的邊長乘以 <em>k</em>，表面積乘以 <em>k</em>²，體積乘以 <em>k</em>³，而 SA:V 則除以 <em>k</em>。（驗證：SA:V = 6 ÷ l。）</p>\n<p><strong>示例A。</strong>邊長3 µm的立方體。表面積 = 6 × 3² = 54 µm²。體積 = 3³ = 27 µm³。SA:V = 54 ÷ 27 = 2 : 1。</p>\n<p><strong>示例B（運用比例係數）。</strong>邊長由2 µm增至10 µm，所以 <em>k</em> = 5。表面積乘以25（24 → 600 µm²）。體積乘以125（8 → 1000 µm³）。SA:V = 600 ÷ 1000 = 0.6 : 1，即 3 ÷ 5。</p>\n<p><strong>反過來計算。</strong>若立方體的 SA:V 為 1 : 1，則 6 ÷ l = 1，所以 l = 6 µm。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>數據題要比較<em>兩個</em>數值：「表面積增加了4倍，但體積增加了8倍」。</li>\n<li>寫出公式、代入數值和答案。比值寫成「數值 : 1」。</li>\n<li>要寫「需求取決於體積，供應取決於表面積」，不要寫「大細胞沒有表面積」。</li>\n<li>立方體只是模型 (model)。要說明它簡化了甚麼：真實的細胞不是立方體。</li>\n</ul>\n<p>連繫：B3.1.1 把相同的概念應用於整個生物體。</p>"},
      ahl: false,
      heading: T("Surface area-to-volume ratio and cell size", "表面積と体積の比と細胞の大きさ", "表面面積與體積比和細胞大小"),
      body: T(
        `<p>Cells take in materials (oxygen, nutrients) and get rid of wastes (carbon dioxide, urea) across their surface. Two things matter:</p>
<ul>
<li>The amount of exchange possible depends on the <strong>surface area</strong> of the cell membrane.</li>
<li>The <strong>need</strong> for exchange depends on the <strong>volume</strong> of the cell, because the volume is the amount of living cytoplasm that uses materials and makes wastes.</li>
</ul>
<p>The <strong>surface area-to-volume ratio</strong> (SA:V) compares the two. To see how it changes with size, we use a model: cubes of different side length (l).</p>
<ul>
<li>Surface area of a cube = 6 × l²  (6 faces, each l × l)</li>
<li>Volume of a cube = l³</li>
<li>SA:V = 6l² ÷ l³ = 6 ÷ l</li>
</ul>
<table>
<tr><th>Side (l)</th><th>Surface area</th><th>Volume</th><th>SA:V</th></tr>
<tr><td>1 µm</td><td>6 µm²</td><td>1 µm³</td><td>6 : 1</td></tr>
<tr><td>2 µm</td><td>24 µm²</td><td>8 µm³</td><td>3 : 1</td></tr>
<tr><td>4 µm</td><td>96 µm²</td><td>64 µm³</td><td>1.5 : 1</td></tr>
<tr><td>8 µm</td><td>384 µm²</td><td>512 µm³</td><td>0.75 : 1</td></tr>
</table>
<p>When the side doubles, the surface area goes up 4 times but the volume goes up 8 times. So the SA:V <strong>falls</strong> as size increases. In a large cell, the surface is too small to supply the volume, so materials cannot enter fast enough and wastes build up. This puts an upper limit on cell size. Cells that must be large have adaptations (see AHL sections) or are not simply round blobs.</p>
<p><strong>Nature of science:</strong> a cube is a <em>model</em>. Models are simplified versions of complex systems. Real cells are not cubes, but the scale factors work in the same way for real cells and organisms: bigger things have a smaller SA:V.</p>
<p>Use the widget below to change the cube size and watch the numbers and graph change.</p>`,
        `<p>細胞は、表面を通して物質（酸素、栄養分）を取り込み、老廃物（二酸化炭素、尿素）を排出します。重要な点は2つです。</p>
<ul>
<li>可能な交換の量は、細胞膜の<strong>表面積 (surface area)</strong> によって決まります。</li>
<li>交換の<strong>必要量</strong>は<strong>体積 (volume)</strong> によって決まります。体積は、物質を使い老廃物をつくる生きた細胞質の量だからです。</li>
</ul>
<p><strong>表面積と体積の比 (surface area-to-volume ratio, SA:V)</strong> は、この2つを比べたものです。大きさによる変化を見るために、辺の長さ (l) が異なる立方体というモデルを使います。</p>
<ul>
<li>立方体の表面積 = 6 × l²（6つの面、それぞれ l × l）</li>
<li>立方体の体積 = l³</li>
<li>SA:V = 6l² ÷ l³ = 6 ÷ l</li>
</ul>
<table>
<tr><th>辺 (l)</th><th>表面積</th><th>体積</th><th>SA:V</th></tr>
<tr><td>1 µm</td><td>6 µm²</td><td>1 µm³</td><td>6 : 1</td></tr>
<tr><td>2 µm</td><td>24 µm²</td><td>8 µm³</td><td>3 : 1</td></tr>
<tr><td>4 µm</td><td>96 µm²</td><td>64 µm³</td><td>1.5 : 1</td></tr>
<tr><td>8 µm</td><td>384 µm²</td><td>512 µm³</td><td>0.75 : 1</td></tr>
</table>
<p>辺が2倍になると、表面積は4倍、体積は8倍になります。そのため大きくなるほどSA:Vは<strong>小さくなります</strong>。大きな細胞では表面が体積に対して小さすぎ、物質が十分な速さで入れず、老廃物がたまります。これが細胞の大きさの上限になります。大きくなければならない細胞には適応（AHLのセクションを参照）があるか、単なる丸い塊の形ではありません。</p>
<p><strong>科学の本質 (Nature of science)：</strong>立方体は<em>モデル (model)</em> です。モデルとは、複雑な系を単純にしたものです。実際の細胞は立方体ではありませんが、スケールの関係は実際の細胞や生物でも同じように働きます。大きいものほどSA:Vは小さくなります。</p>
<p>下のウィジェットで立方体の大きさを変えて、数値とグラフの変化を見てみましょう。</p>`,
        `<p>細胞透過表面攝取物質（氧氣、營養物）並排出廢物（二氧化碳、尿素）。有兩點很重要：</p>
<ul>
<li>可進行的交換量取決於細胞膜的<strong>表面面積 (surface area)</strong>。</li>
<li>交換的<strong>需要</strong>取決於<strong>體積 (volume)</strong>，因為體積代表使用物質和製造廢物的活細胞質的量。</li>
</ul>
<p><strong>表面面積與體積比 (surface area-to-volume ratio, SA:V)</strong> 將兩者作比較。為了了解它如何隨大小改變，我們使用一個模型：邊長 (l) 不同的立方體。</p>
<ul>
<li>立方體的表面面積 = 6 × l²（6個面，每面 l × l）</li>
<li>立方體的體積 = l³</li>
<li>SA:V = 6l² ÷ l³ = 6 ÷ l</li>
</ul>
<table>
<tr><th>邊長 (l)</th><th>表面面積</th><th>體積</th><th>SA:V</th></tr>
<tr><td>1 µm</td><td>6 µm²</td><td>1 µm³</td><td>6 : 1</td></tr>
<tr><td>2 µm</td><td>24 µm²</td><td>8 µm³</td><td>3 : 1</td></tr>
<tr><td>4 µm</td><td>96 µm²</td><td>64 µm³</td><td>1.5 : 1</td></tr>
<tr><td>8 µm</td><td>384 µm²</td><td>512 µm³</td><td>0.75 : 1</td></tr>
</table>
<p>邊長加倍時，表面面積增至4倍，但體積增至8倍。所以SA:V會隨大小增加而<strong>下降</strong>。在大的細胞中，表面太小，不足以供應其體積，物質無法足夠快地進入，廢物便積聚。這為細胞大小訂下上限。必須很大的細胞要有適應特徵（見AHL部分），或其形狀不是簡單的圓團。</p>
<p><strong>科學本質 (Nature of science)：</strong>立方體是一個<em>模型 (model)</em>。模型是複雜系統的簡化版本。真實的細胞不是立方體，但比例因子在真實的細胞和生物上同樣適用：越大的東西，SA:V越小。</p>
<p>利用下面的小工具改變立方體的大小，觀察數值和圖表如何變化。</p>`),
      widget: "sav-ratio",
      examTip: T(
        "'Calculate' means show your working: write 6 × l², then l³, then divide. Give the ratio as a number : 1, and state the trend (ratio decreases as size increases).",
        "「Calculate」では計算過程を示します。6 × l²、次に l³、そして割り算を書きましょう。比は「数 : 1」の形で示し、傾向（大きくなるほど比は小さくなる）も述べます。",
        "「Calculate」要顯示計算步驟：寫出 6 × l²，再寫 l³，然後相除。比值以「數字 : 1」表示，並說明趨勢（大小增加，比值下降）。")
    }
,
    {
      ref: "B2.3.7",
      deeper: {"en":"<p><strong>How each adaptation works</strong></p>\n<table>\n<tr><th>Adaptation</th><th>What it does</th><th>Example</th></tr>\n<tr><td>Flattening</td><td>Gives a large surface for a small volume, and a short distance from the surface to the middle</td><td>Biconcave disc of a red blood cell</td></tr>\n<tr><td>Microvilli</td><td>Adds membrane without adding much volume</td><td>Surface of a proximal convoluted tubule cell facing the tubule</td></tr>\n<tr><td>Invagination</td><td>Folds the membrane inwards, adding membrane</td><td>Base of a proximal convoluted tubule cell</td></tr>\n</table>\n<p><strong>Linking area to function.</strong> More membrane means room for more transport proteins (pumps, channels and carriers; see B2.1). More transport proteins means a faster rate of uptake or reabsorption. Adding area alone is not the full answer: you must finish the chain.</p>\n<p><strong>Red blood cell.</strong> Oxygen has to diffuse across the membrane and then to all the haemoglobin inside. A flattened biconcave cell has a short diffusion path to the centre, so oxygen is loaded and unloaded quickly.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>\"Microvilli increase the surface area\" earns one mark. The second mark is for the consequence: \"for more transport proteins / faster absorption\".</li>\n<li>Do not call invagination \"a hole in the cell\".</li>\n<li>Name the correct location: microvilli on the side facing the tubule; infoldings at the base.</li>\n</ul>\n<div class=\"note\">Extension (not required): PCT cells also contain many mitochondria, which supply ATP for active transport. You only need microvilli and invagination here.</div>","ja":"<p><strong>それぞれの適応のしくみ</strong></p>\n<table>\n<tr><th>適応</th><th>はたらき</th><th>例</th></tr>\n<tr><td>扁平な形 (flattening)</td><td>小さい体積に対して表面が大きくなり、表面から中心までの距離も短くなる</td><td>赤血球の両凹円盤状の形</td></tr>\n<tr><td>微絨毛 (microvilli)</td><td>体積をあまり増やさずに膜を増やす</td><td>近位尿細管細胞の、尿細管側の表面</td></tr>\n<tr><td>陥入 (invagination)</td><td>膜が内側に折れ込み、膜が増える</td><td>近位尿細管細胞の基底部</td></tr>\n</table>\n<p><strong>面積と機能を結びつける。</strong>膜が多いほど、輸送タンパク質（ポンプ、チャネル、運搬体。B2.1参照）をたくさん置ける。輸送タンパク質が多いほど、取り込みや再吸収の速度が速くなる。「面積が増える」だけでは不十分で、最後まで筋道を書く必要がある。</p>\n<p><strong>赤血球。</strong>酸素は膜を通り、さらに内部のヘモグロビンのすべてに届かなければならない。扁平な両凹円盤状の細胞は中心までの拡散距離が短いので、酸素の取り込みと放出が速い。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>「微絨毛は表面積を増やす」で1点。2点目は結果の部分：「より多くの輸送タンパク質が置ける／吸収が速くなる」。</li>\n<li>陥入を「細胞に開いた穴」と書かない。</li>\n<li>場所を正しく書く：微絨毛は尿細管側、陥入は基底部。</li>\n</ul>\n<div class=\"note\">発展（必須ではない）：近位尿細管の細胞にはミトコンドリアも多く、能動輸送のためのATPを供給する。ここで必要なのは微絨毛と陥入だけである。</div>","zh":"<p><strong>各種適應的運作方式</strong></p>\n<table>\n<tr><th>適應</th><th>作用</th><th>例子</th></tr>\n<tr><td>扁平 (flattening)</td><td>以細小的體積換來大的表面，並縮短表面至中心的距離</td><td>紅血球的雙凹圓盤形</td></tr>\n<tr><td>微絨毛 (microvilli)</td><td>在不大幅增加體積下增加膜的面積</td><td>近端曲管細胞面向管腔的表面</td></tr>\n<tr><td>內陷 (invagination)</td><td>細胞膜向內摺入，增加膜的面積</td><td>近端曲管細胞的基部</td></tr>\n</table>\n<p><strong>把面積連繫到功能。</strong>膜愈多，能容納愈多運輸蛋白（泵、通道和載體；見 B2.1）。運輸蛋白愈多，吸收或重吸收的速率愈快。只寫「增加面積」並不足夠，必須把因果鏈寫完整。</p>\n<p><strong>紅血球。</strong>氧必須擴散穿過細胞膜，再到達內部所有的血紅蛋白。扁平的雙凹圓盤形細胞，擴散至中心的路徑短，所以氧的攜帶和釋放都很快。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>「微絨毛增加表面積」得一分，第二分來自後果：「容納更多運輸蛋白／吸收更快」。</li>\n<li>不要把內陷說成「細胞上的一個洞」。</li>\n<li>位置要正確：微絨毛在面向管腔的一面；內摺在基部。</li>\n</ul>\n<div class=\"note\">延伸（非必修）：近端曲管細胞亦含大量線粒體，為主動運輸提供 ATP。這裏只需要掌握微絨毛和內陷。</div>"},
      ahl: true,
      heading: T("Adaptations that raise the surface area-to-volume ratio", "表面積と体積の比を高める適応", "提高表面面積與體積比的適應特徵"),
      body: T(
        `<p>Some cells need a fast rate of exchange. These cells increase the SA:V in three ways. The guide asks you to include all three.</p>
<ul>
<li><strong>Flattening.</strong> A flat cell has a large surface compared with its small volume, and the distance from the surface to the middle is short.</li>
<li><strong>Microvilli.</strong> These are tiny finger-like projections of the cell surface membrane. They add a large amount of membrane without adding much volume.</li>
<li><strong>Invagination.</strong> This means a pushing-in or folding of the membrane. The folds add extra membrane surface.</li>
</ul>
<p><strong>Example 1: erythrocytes (red blood cells).</strong> A red blood cell is a flattened disc with a dip in the middle on both sides (biconcave). Compared with a sphere of the same volume, this shape has a bigger surface area and short distance for oxygen to diffuse to the middle. This helps oxygen to be taken up and released quickly.</p>
<p><strong>Example 2: cells of the proximal convoluted tubule (PCT) in the nephron of the kidney.</strong> These cells reabsorb large amounts of useful substances (such as glucose and ions) from the fluid that has been filtered from the blood. Their surface facing the tubule has many <strong>microvilli</strong>, and the membrane at their base is folded in by <strong>invagination</strong>. Both add membrane area where transport proteins can work.</p>`,
        `<p>交換を速く行う必要がある細胞があります。そうした細胞は3つの方法でSA:Vを高めます。ガイドは3つすべてを含めるよう求めています。</p>
<ul>
<li><strong>平らになる (flattening)。</strong>平らな細胞は、体積が小さいのに対して表面が大きく、表面から中心までの距離も短くなります。</li>
<li><strong>微絨毛 (microvilli)。</strong>細胞膜の指のような小さな突起です。体積をあまり増やさずに膜を大きく増やします。</li>
<li><strong>陥入 (invagination)。</strong>膜が内側に押し込まれる、あるいは折りたたまれることです。折りたたみにより膜の表面が増えます。</li>
</ul>
<p><strong>例1：赤血球 (erythrocyte)。</strong>赤血球は平たい円盤で、両面の中央がくぼんでいます（両凹面）。同じ体積の球と比べて、この形は表面積が大きく、酸素が中心まで拡散する距離も短くなります。そのため酸素を素早く取り込み、放出できます。</p>
<p><strong>例2：腎臓のネフロンにある近位尿細管 (proximal convoluted tubule, PCT) の細胞。</strong>この細胞は、血液からこし出された液から有用な物質（グルコースやイオンなど）を大量に再吸収します。管に面した側には多数の<strong>微絨毛</strong>があり、底部の膜は<strong>陥入</strong>によって折りたたまれています。どちらも輸送タンパク質が働ける膜の面積を増やします。</p>`,
        `<p>有些細胞需要很快的交換速率。這些細胞以三種方式提高SA:V。課程指引要求你包括全部三種。</p>
<ul>
<li><strong>扁平化 (flattening)。</strong>扁平的細胞相對於其細小的體積有較大的表面，而且由表面到中央的距離很短。</li>
<li><strong>微絨毛 (microvilli)。</strong>這是細胞表面膜上細小的指狀突起，增加大量膜面積而不會增加太多體積。</li>
<li><strong>內陷 (invagination)。</strong>指膜向內推入或摺疊。摺疊增加額外的膜表面。</li>
</ul>
<p><strong>例子1：紅血球 (erythrocyte)。</strong>紅血球是扁平的圓盤，兩面中央凹陷（雙凹形）。與相同體積的球體比較，這形狀的表面面積較大，氧氣擴散到中央的距離也較短，使氧氣能迅速被吸收和釋放。</p>
<p><strong>例子2：腎臟腎單位中近曲小管 (proximal convoluted tubule, PCT) 的細胞。</strong>這些細胞從血液濾出的液體中重吸收大量有用物質（如葡萄糖和離子）。面向小管的一面有很多<strong>微絨毛</strong>，基部的膜以<strong>內陷</strong>方式摺入。兩者都增加了轉運蛋白可工作的膜面積。</p>`)
    },
    {
      ref: "B2.3.8",
      deeper: {"en":"<p><strong>Why two cell types?</strong> One cell cannot be both extremely thin <em>and</em> packed with secretory vesicles. A very flat cell has little room for organelles, so the jobs are shared out. This is division of labour inside one tissue.</p>\n<table>\n<tr><th>Question</th><th>Type I</th><th>Type II</th></tr>\n<tr><td>Describe the shape</td><td>Squamous (thin and flat)</td><td>Cuboidal (more rounded)</td></tr>\n<tr><td>What feature is it known for?</td><td>Extreme thinness</td><td>Lamellar bodies</td></tr>\n<tr><td>What does the feature do?</td><td>Short diffusion distance between air and blood</td><td>Releases surfactant into the alveolar lumen</td></tr>\n<tr><td>Which function does it serve?</td><td>Gas exchange</td><td>Keeping alveoli open (see B3.1.4)</td></tr>\n</table>\n<p><strong>The full diffusion path.</strong> Oxygen crosses a type I pneumocyte, a very thin fused basement layer, and then the single-cell wall of a capillary into the blood. The whole path is less than 1 µm, so diffusion is fast.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>\"Type I: extremely thin, so a short diffusion distance\". The reason is part of the mark.</li>\n<li>\"Type II: lamellar bodies release surfactant\". Surfactant reduces surface tension so the alveoli do not stick together.</li>\n<li>Do <em>not</em> write that type II cells do gas exchange, or that they make mucus.</li>\n</ul>\n<p>A 3-mark \"Distinguish\" answer should have a difference in shape, a difference in the feature, and a difference in the function.</p>","ja":"<p><strong>なぜ2種類の細胞があるのか。</strong>1つの細胞が、極端に薄いことと、分泌小胞でいっぱいであることを同時に満たすことはできない。非常に平らな細胞には細胞小器官を入れる余地が少ないので、役割が分担されている。これは1つの組織の中での分業である。</p>\n<table>\n<tr><th>問い</th><th>I型</th><th>II型</th></tr>\n<tr><td>形は</td><td>扁平 (squamous)（薄く平ら）</td><td>立方形 (cuboidal)（より丸い）</td></tr>\n<tr><td>特徴は</td><td>極めて薄いこと</td><td>層板小体 (lamellar bodies)</td></tr>\n<tr><td>その特徴のはたらきは</td><td>空気と血液の間の拡散距離が短い</td><td>サーファクタント (surfactant) を肺胞腔に放出する</td></tr>\n<tr><td>どの機能に役立つか</td><td>ガス交換</td><td>肺胞が開いた状態を保つ（B3.1.4参照）</td></tr>\n</table>\n<p><strong>拡散の全経路。</strong>酸素はI型肺胞上皮細胞、ごく薄い融合した基底層、そして毛細血管の1層の細胞でできた壁を通って血液に入る。経路全体は1 µm未満で、拡散は速い。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>「I型：極めて薄いので拡散距離が短い」。理由まで書いて1点になる。</li>\n<li>「II型：層板小体がサーファクタントを放出する」。サーファクタントは表面張力を下げ、肺胞どうしがくっつくのを防ぐ。</li>\n<li>II型がガス交換を行う、あるいは粘液をつくると書いては<em>いけない</em>。</li>\n</ul>\n<p>3点の「区別せよ (Distinguish)」の解答には、形の違い、特徴の違い、機能の違いを入れる。</p>","zh":"<p><strong>為何有兩種細胞？</strong>一個細胞不可能既極薄，又擠滿分泌囊泡。非常扁平的細胞，容納細胞器的空間很少，所以工作要分開由不同細胞負責。這是同一組織內的分工。</p>\n<table>\n<tr><th>問題</th><th>I型</th><th>II型</th></tr>\n<tr><td>形狀如何？</td><td>鱗狀 (squamous)（薄而扁平）</td><td>立方形 (cuboidal)（較圓）</td></tr>\n<tr><td>以甚麼特徵見稱？</td><td>極薄</td><td>板層小體 (lamellar bodies)</td></tr>\n<tr><td>該特徵有何作用？</td><td>令空氣與血液之間的擴散距離很短</td><td>把表面活性物質 (surfactant) 釋放到肺泡腔</td></tr>\n<tr><td>負責哪項功能？</td><td>氣體交換</td><td>保持肺泡張開（見 B3.1.4）</td></tr>\n</table>\n<p><strong>完整的擴散路徑。</strong>氧穿過I型肺泡細胞、一層極薄的融合基底層，再穿過微絲血管單層細胞的管壁進入血液。整條路徑不足1 µm，所以擴散很快。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>「I型：極薄，所以擴散距離短」。原因也是得分的一部分。</li>\n<li>「II型：板層小體釋放表面活性物質」。表面活性物質降低表面張力，使肺泡不會黏在一起。</li>\n<li><em>不要</em>寫II型細胞進行氣體交換，或製造黏液。</li>\n</ul>\n<p>3分的「區別 (Distinguish)」答案應包括形狀、特徵和功能三方面的差異。</p>"},
      ahl: true,
      heading: T("Type I and type II pneumocytes in alveoli", "肺胞のI型・II型肺胞上皮細胞", "肺泡中的第I型和第II型肺泡細胞"),
      body: T(
        `<p>An <strong>alveolus</strong> (plural alveoli) is a tiny air sac in the lung where gas exchange happens. Its wall is lined by a thin layer of cells called the alveolar epithelium. This epithelium contains <strong>two different cell types</strong>, called pneumocytes. Different adaptations are needed for the overall function of the tissue, so the alveolar epithelium is an example of a tissue where more than one cell type is present.</p>
<table>
<tr><th></th><th>Type I pneumocyte</th><th>Type II pneumocyte</th></tr>
<tr><td>Shape</td><td>Extremely thin and flat</td><td>Cuboidal (more rounded), with many vesicles</td></tr>
<tr><td>Adaptation</td><td>Extreme thinness gives a very short distance for diffusion of oxygen and carbon dioxide between air and blood</td><td>Many secretory vesicles called <strong>lamellar bodies</strong> in the cytoplasm</td></tr>
<tr><td>Job</td><td>Gas exchange</td><td>Lamellar bodies discharge <strong>surfactant</strong> into the alveolar lumen (the air space)</td></tr>
</table>
<p>The guide limits you to these two adaptations. (Why surfactant matters for the lung is covered in B3.1.4.)</p>`,
        `<p><strong>肺胞 (alveolus)</strong>（複数形 alveoli）は、肺の中にある小さな空気の袋で、ここでガス交換が行われます。壁は肺胞上皮 (alveolar epithelium) という薄い細胞の層で覆われています。この上皮には<strong>2種類の異なる細胞</strong>があり、肺胞上皮細胞 (pneumocyte) と呼ばれます。組織全体の働きには異なる適応が必要なので、肺胞上皮は、複数の種類の細胞がある組織の例です。</p>
<table>
<tr><th></th><th>I型肺胞上皮細胞 (type I pneumocyte)</th><th>II型肺胞上皮細胞 (type II pneumocyte)</th></tr>
<tr><td>形</td><td>非常に薄く平たい</td><td>立方形（丸みがある）で、多数の小胞を持つ</td></tr>
<tr><td>適応</td><td>極端な薄さにより、空気と血液の間の酸素と二酸化炭素の拡散距離がごく短い</td><td>細胞質に<strong>層板小体 (lamellar bodies)</strong> と呼ばれる多数の分泌小胞がある</td></tr>
<tr><td>働き</td><td>ガス交換</td><td>層板小体が<strong>サーファクタント (surfactant)</strong> を肺胞腔（空気の空間）に放出する</td></tr>
</table>
<p>ガイドはこの2つの適応に限っています。（サーファクタントが肺にとってなぜ大切かはB3.1.4で扱います。）</p>`,
        `<p><strong>肺泡 (alveolus)</strong>（複數 alveoli）是肺中細小的氣囊，氣體交換在此進行。肺泡壁內襯一層薄的細胞，稱為肺泡上皮 (alveolar epithelium)。這層上皮含有<strong>兩種不同的細胞</strong>，稱為肺泡細胞 (pneumocyte)。組織的整體功能需要不同的適應特徵，所以肺泡上皮是一個存在多於一種細胞類型的組織的例子。</p>
<table>
<tr><th></th><th>第I型肺泡細胞 (type I pneumocyte)</th><th>第II型肺泡細胞 (type II pneumocyte)</th></tr>
<tr><td>形狀</td><td>極薄而扁平</td><td>立方形（較圓），含許多囊泡</td></tr>
<tr><td>適應特徵</td><td>極薄，使氧氣和二氧化碳在空氣與血液之間擴散的距離非常短</td><td>細胞質中有許多稱為<strong>板層小體 (lamellar bodies)</strong> 的分泌囊泡</td></tr>
<tr><td>工作</td><td>氣體交換</td><td>板層小體把<strong>表面活性物質 (surfactant)</strong> 排入肺泡腔（空氣空間）</td></tr>
</table>
<p>課程指引只限於這兩項適應特徵。（表面活性物質對肺為何重要，見B3.1.4。）</p>`)
    },
    {
      ref: "B2.3.9",
      deeper: {"en":"<p><strong>Hypothesis, then test.</strong> The guide says to <em>hypothesize</em>. A hypothesis is a testable explanation. Practise the pattern \"observation → hypothesis → what you would expect to find\".</p>\n<table>\n<tr><th>Observation</th><th>Hypothesis</th><th>A prediction that could test it</th></tr>\n<tr><td>Cardiac cells are branched</td><td>Branching links each cell to several neighbours, so contraction spreads in a coordinated way</td><td>Cells in a heart wall would be connected in a network, not as separate parallel fibres</td></tr>\n<tr><td>Striated fibres have many nuclei</td><td>A very large volume of cytoplasm needs many nuclei to supply mRNA for protein synthesis</td><td>Longer fibres would have more nuclei, so the volume of cytoplasm per nucleus is roughly similar</td></tr>\n</table>\n<p><strong>A rough estimate.</strong> A skeletal fibre 3 cm long is 30 000 µm. A cardiac cell is about 100 µm long. If their widths were similar, the fibre would have about 300 times the cytoplasm. One nucleus controlling that much would be a heavy job, which fits the hypothesis. (This is an estimate to show the reasoning, not exact data.)</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>\"Suggest\" and \"hypothesize\" answers should use \"may\", \"could\" or \"this might allow\".</li>\n<li>For the 'is it a cell?' discussion, a 4-mark answer: two points for, two points against, plus a conclusion. Use specific terms: <em>surface membrane, cytoplasm</em> (for); <em>many nuclei, formed by fusion, very long</em> (against).</li>\n</ul>\n<p>Not required here: the sliding filament mechanism (B3.3).</p>","ja":"<p><strong>仮説を立て、検証する。</strong>ガイドは「仮説を立てよ (hypothesize)」と述べている。仮説とは検証可能な説明である。「観察 → 仮説 → 見つかるはずのこと」という型を練習しよう。</p>\n<table>\n<tr><th>観察</th><th>仮説</th><th>検証につながる予測</th></tr>\n<tr><td>心筋細胞は枝分かれしている</td><td>枝分かれによって各細胞が複数の隣の細胞とつながり、収縮が協調して広がる</td><td>心臓の壁の細胞は、独立した平行な繊維ではなく網目状につながっているはずである</td></tr>\n<tr><td>横紋筋線維には核が多い</td><td>非常に大きな細胞質の体積に対して、タンパク質合成用のmRNAを供給するために多くの核が必要である</td><td>長い線維ほど核が多く、核1個あたりの細胞質の体積はほぼ一定になるはずである</td></tr>\n</table>\n<p><strong>大まかな見積もり。</strong>長さ3 cmの骨格筋線維は30 000 µmである。心筋細胞の長さは約100 µmである。幅が同じくらいなら、線維の細胞質は約300倍になる。それだけの量を核1個で制御するのは負担が大きく、仮説に合う。（考え方を示すための見積もりであり、正確なデータではない。）</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>「示唆せよ (Suggest)」や「仮説を立てよ」の解答では、「〜かもしれない」「〜の可能性がある」といった表現を使う。</li>\n<li>「細胞と言えるか」の議論では、4点の解答は、賛成2点、反対2点と結論である。具体的な用語を使う：<em>細胞膜、細胞質</em>（賛成）、<em>多数の核、融合によってできる、非常に長い</em>（反対）。</li>\n</ul>\n<p>ここでは不要：滑り説（B3.3）。</p>","zh":"<p><strong>先作假說，再作驗證。</strong>課程指引要求你提出假說 (hypothesize)。假說是可被驗證的解釋。請練習「觀察 → 假說 → 預期會發現甚麼」的模式。</p>\n<table>\n<tr><th>觀察</th><th>假說</th><th>可用來驗證的預測</th></tr>\n<tr><td>心肌細胞有分支</td><td>分支令每個細胞與數個鄰近細胞相連，使收縮能協調地擴散</td><td>心壁的細胞應連成網絡，而不是各自獨立的平行纖維</td></tr>\n<tr><td>橫紋肌纖維有多個細胞核</td><td>極大體積的細胞質需要多個細胞核，才能供應製造蛋白質所需的 mRNA</td><td>愈長的纖維應有愈多細胞核，因此每個細胞核所管的細胞質體積大致相近</td></tr>\n</table>\n<p><strong>粗略估算。</strong>一條3 cm長的骨骼肌纖維是30 000 µm，而心肌細胞約100 µm長。若兩者闊度相近，纖維的細胞質約為300倍。由一個細胞核控制這麼大的量，負擔會很重，這與假說吻合。（這只是示範推理的估算，並非準確數據。）</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>「提出 (Suggest)」及「假說」類答案要用「可能」、「或許」、「這也許讓……」等字眼。</li>\n<li>討論「是否為一個細胞」時，4分答案是：贊成2點、反對2點，再加結論。要用具體詞語：<em>細胞膜、細胞質</em>（贊成）；<em>多個細胞核、由融合形成、非常長</em>（反對）。</li>\n</ul>\n<p>這裏不需要：肌絲滑動機制（B3.3）。</p>"},
      ahl: true,
      heading: T("Cardiac muscle cells and striated muscle fibres", "心筋細胞と横紋筋線維", "心肌細胞與橫紋肌纖維"),
      body: T(
        `<p>Two types of muscle are called striated because they look striped under the microscope: <strong>striated (skeletal) muscle</strong> and <strong>cardiac muscle</strong> (heart muscle). Both are adapted for contraction.</p>
<p><strong>Shared feature:</strong> both contain <strong>myofibrils</strong>. These are bundles of contractile protein filaments that run along the cell and shorten when the muscle contracts.</p>
<table>
<tr><th>Feature</th><th>Striated muscle fibre</th><th>Cardiac muscle cell</th></tr>
<tr><td>Branching</td><td>Unbranched, long cylinders</td><td>Branched</td></tr>
<tr><td>Length</td><td>Very long (up to centimetres)</td><td>Much shorter</td></tr>
<tr><td>Nuclei</td><td>Many nuclei in one fibre</td><td>Usually one nucleus per cell (sometimes two)</td></tr>
</table>
<p><strong>Hypotheses for these differences</strong> (the guide uses the word 'hypotheses', so these are reasoned suggestions):</p>
<ul>
<li><em>Branching.</em> Branches link each cardiac cell to several neighbours. This may help electrical signals and contraction spread in a coordinated way through the heart wall. Unbranched fibres pull in one direction along a muscle, for strong contraction.</li>
<li><em>Length and number of nuclei.</em> A very long fibre has a huge volume of cytoplasm, which may need many nuclei to supply it with the instructions (mRNA) to make proteins. Short cardiac cells have a small volume that one nucleus can control.</li>
</ul>
<p><strong>Discussion: is a striated muscle fibre a cell?</strong></p>
<ul>
<li><em>Yes:</em> it is surrounded by a single cell surface membrane, contains cytoplasm and organelles, and is the basic living unit of the muscle.</li>
<li><em>No (or not typical):</em> it has many nuclei, whereas a typical cell has one. It is formed by many cells fusing together. It is also far longer than most cells, which seems to go against the usual size limits on cells.</li>
</ul>
<p>A good answer gives points on both sides. It may conclude that the definition of 'a cell' is not a perfect fit for every living structure.</p>`,
        `<p>横紋筋 (striated muscle)（骨格筋）と<strong>心筋 (cardiac muscle)</strong>は、顕微鏡で縞模様に見えるので横紋筋と呼ばれます。どちらも収縮に適応しています。</p>
<p><strong>共通の特徴：</strong>どちらも<strong>筋原線維 (myofibril)</strong> を含みます。これは細胞に沿って走る収縮性タンパク質の束で、筋が収縮すると短くなります。</p>
<table>
<tr><th>特徴</th><th>横紋筋線維 (striated muscle fibre)</th><th>心筋細胞 (cardiac muscle cell)</th></tr>
<tr><td>枝分かれ</td><td>枝分かれしない長い円柱</td><td>枝分かれする</td></tr>
<tr><td>長さ</td><td>非常に長い（数cmに達する）</td><td>ずっと短い</td></tr>
<tr><td>核</td><td>1本の線維に多数の核</td><td>ふつう細胞あたり核は1個（まれに2個）</td></tr>
</table>
<p><strong>これらの違いについての仮説 (hypotheses)</strong>（ガイドは「仮説」という語を使っているので、これらは理由づけた提案です）：</p>
<ul>
<li><em>枝分かれ。</em>枝によって各心筋細胞は複数の隣の細胞とつながります。これにより電気信号や収縮が心臓壁全体に調和して広がりやすくなるのかもしれません。枝分かれのない線維は、筋肉の長さ方向に一方向へ引き、強い収縮を生みます。</li>
<li><em>長さと核の数。</em>非常に長い線維は細胞質の体積が膨大で、タンパク質をつくる指示（mRNA）を供給するために多数の核が必要なのかもしれません。短い心筋細胞は体積が小さく、核1個で制御できます。</li>
</ul>
<p><strong>議論：横紋筋線維は細胞か？</strong></p>
<ul>
<li><em>細胞である：</em>1枚の細胞膜に囲まれ、細胞質と細胞小器官を持ち、筋肉の基本的な生きた単位である。</li>
<li><em>細胞ではない（または典型的ではない）：</em>典型的な細胞の核は1個なのに、多数の核を持つ。多数の細胞が融合してできる。また、ふつうの細胞よりはるかに長く、細胞の大きさの通常の限界に反するように見える。</li>
</ul>
<p>よい解答は両方の側の論点を挙げます。「細胞」の定義は、すべての生きた構造に完全には当てはまらない、と結論づけてもかまいません。</p>`,
        `<p>有兩種肌肉因在顯微鏡下呈條紋狀而稱為橫紋肌：<strong>橫紋肌 (striated muscle)</strong>（骨骼肌）和<strong>心肌 (cardiac muscle)</strong>。兩者都適應收縮。</p>
<p><strong>共同特徵：</strong>兩者都含有<strong>肌原纖維 (myofibril)</strong>。這是沿細胞走向的收縮性蛋白質絲束，肌肉收縮時會縮短。</p>
<table>
<tr><th>特徵</th><th>橫紋肌纖維 (striated muscle fibre)</th><th>心肌細胞 (cardiac muscle cell)</th></tr>
<tr><td>分支</td><td>不分支的長圓柱</td><td>有分支</td></tr>
<tr><td>長度</td><td>極長（可達數厘米）</td><td>短得多</td></tr>
<tr><td>細胞核</td><td>一條纖維內有許多細胞核</td><td>通常每個細胞一個核（有時兩個）</td></tr>
</table>
<p><strong>對這些差異的假說 (hypotheses)</strong>（課程指引用「假說」一詞，所以這些是有理據的推測）：</p>
<ul>
<li><em>分支。</em>分支把每個心肌細胞連接到幾個相鄰細胞，可能有助電信號和收縮協調地在心壁中擴散。不分支的纖維沿肌肉長度向一個方向拉動，產生強力收縮。</li>
<li><em>長度和細胞核數目。</em>很長的纖維有龐大的細胞質體積，可能需要許多細胞核來提供製造蛋白質的指令 (mRNA)。短小的心肌細胞體積小，一個核已足以控制。</li>
</ul>
<p><strong>討論：橫紋肌纖維是否一個細胞？</strong></p>
<ul>
<li><em>是：</em>它被單一的細胞表面膜包圍，含有細胞質和細胞器，是肌肉的基本活單位。</li>
<li><em>否（或不典型）：</em>它有許多細胞核，而典型的細胞只有一個。它由許多細胞融合而成。它也比大多數細胞長得多，似乎違反細胞大小的一般限制。</li>
</ul>
<p>好的答案兩方面都列出論點，亦可總結「細胞」的定義未必完全適用於每一種生物結構。</p>`),
      examTip: T(
        "For 'Discuss', give arguments for and against and then a clear conclusion. Do not only list differences between the two muscle types.",
        "「Discuss」では、賛成と反対の論点を挙げ、最後にはっきりした結論を述べます。2種類の筋肉の違いを並べるだけにしないこと。",
        "「Discuss」題要列出贊成與反對的論點，再作清晰的結論。不要只列出兩種肌肉的差異。")
    },
    {
      ref: "B2.3.10",
      deeper: {"en":"<p><strong>Compare the two gametes</strong></p>\n<table>\n<tr><th>Feature</th><th>Sperm</th><th>Egg</th><th>Why</th></tr>\n<tr><td>Size</td><td>Very small; head about 5 µm</td><td>About 100 µm; one of the largest human cells</td><td>Sperm: light for swimming. Egg: room for food stores</td></tr>\n<tr><td>Movement</td><td>Flagellum</td><td>None of its own</td><td>Sperm must travel to the egg</td></tr>\n<tr><td>Cytoplasm</td><td>Very little; many mitochondria in midpiece</td><td>Large volume with food stores</td><td>ATP for swimming vs nutrients for early embryo</td></tr>\n<tr><td>Enzymes</td><td>Acrosome</td><td>Zona pellucida is the layer to be digested</td><td>Sperm digests a path to the egg membrane</td></tr>\n<tr><td>Nucleus</td><td>Haploid, tightly packed</td><td>Haploid</td><td>Each gamete contributes half the chromosomes</td></tr>\n<tr><td>After fertilization</td><td>—</td><td>Cortical granules release contents</td><td>Other sperm cannot enter</td></tr>\n</table>\n<p>Because the egg is much larger than the sperm head, it holds thousands of times more cytoplasm. The two gametes are different in size but contribute equal amounts of nuclear DNA.</p>\n<p><strong>Mark-scheme language</strong></p>\n<ul>\n<li>Always write <em>structure + function</em>: \"many mitochondria <em>to make ATP</em> for the flagellum\".</li>\n<li>Say mitochondria make or release <strong>ATP</strong>. Writing \"make energy\" is not accepted.</li>\n<li>Name the acrosome contents as <em>digestive enzymes</em>, and say that they digest the layers around the egg.</li>\n</ul>","ja":"<p><strong>2つの配偶子を比べる</strong></p>\n<table>\n<tr><th>特徴</th><th>精子</th><th>卵</th><th>理由</th></tr>\n<tr><td>大きさ</td><td>非常に小さい。頭部は約5 µm</td><td>約100 µm。ヒトの細胞で最大級</td><td>精子：泳ぐために軽い。卵：養分の貯蔵に余裕がある</td></tr>\n<tr><td>運動</td><td>べん毛 (flagellum)</td><td>自力では動かない</td><td>精子は卵まで移動する必要がある</td></tr>\n<tr><td>細胞質</td><td>ごく少ない。中片部にミトコンドリアが多い</td><td>量が多く、養分を貯える</td><td>泳ぐためのATP。初期胚のための養分</td></tr>\n<tr><td>酵素</td><td>先体 (acrosome)</td><td>透明帯 (zona pellucida) が消化される層</td><td>精子は卵の膜まで道を消化してつくる</td></tr>\n<tr><td>核</td><td>一倍体。DNAが密に詰まっている</td><td>一倍体</td><td>各配偶子が染色体の半分を提供する</td></tr>\n<tr><td>受精後</td><td>—</td><td>表層粒 (cortical granules) が内容物を放出</td><td>ほかの精子が入れなくなる</td></tr>\n</table>\n<p>卵は精子の頭部よりはるかに大きいので、細胞質の量は何千倍にもなる。2つの配偶子は大きさは違うが、核のDNAは同じ量を提供する。</p>\n<p><strong>採点基準で使われる表現</strong></p>\n<ul>\n<li>必ず<em>構造＋機能</em>を書く：「べん毛のATPを<em>つくるために</em>ミトコンドリアが多い」。</li>\n<li>ミトコンドリアは<strong>ATP</strong>をつくる（放出する）と書く。「エネルギーをつくる」は認められない。</li>\n<li>先体の内容物は<em>消化酵素</em>と書き、卵の周りの層を消化すると述べる。</li>\n</ul>","zh":"<p><strong>比較兩種配子</strong></p>\n<table>\n<tr><th>特徵</th><th>精子</th><th>卵細胞</th><th>原因</th></tr>\n<tr><td>大小</td><td>非常細小；頭部約5 µm</td><td>約100 µm；人體最大的細胞之一</td><td>精子：輕巧利於游動。卵：有空間貯存養分</td></tr>\n<tr><td>運動</td><td>鞭毛 (flagellum)</td><td>自身不能移動</td><td>精子需要游向卵</td></tr>\n<tr><td>細胞質</td><td>極少；中段有大量線粒體</td><td>體積大，含養分貯存</td><td>游動所需的 ATP；早期胚胎所需的養分</td></tr>\n<tr><td>酶</td><td>頂體 (acrosome)</td><td>透明帶 (zona pellucida) 是要被消化的一層</td><td>精子消化出通往卵細胞膜的路</td></tr>\n<tr><td>細胞核</td><td>單倍體，緊密壓縮</td><td>單倍體</td><td>每個配子提供一半染色體</td></tr>\n<tr><td>受精後</td><td>—</td><td>皮質顆粒 (cortical granules) 釋出內容物</td><td>其他精子不能進入</td></tr>\n</table>\n<p>由於卵細胞比精子頭部大得多，它的細胞質體積多出數千倍。兩種配子大小不同，但提供的細胞核 DNA 數量相同。</p>\n<p><strong>評分準則用語</strong></p>\n<ul>\n<li>一定要寫<em>結構＋功能</em>：「大量線粒體<em>以製造 ATP</em> 供鞭毛使用」。</li>\n<li>要寫線粒體製造（釋出）<strong>ATP</strong>。寫「製造能量」不獲接受。</li>\n<li>頂體的內容物要寫成<em>消化酶</em>，並說明它消化卵細胞外的各層。</li>\n</ul>"},
      ahl: true,
      heading: T("Adaptations of sperm and egg cells (human)", "精子と卵の適応（ヒト）", "精子與卵的適應特徵（人類）"),
      body: T(
        `<p>The guide limits this to <strong>human gametes</strong>. Both are specialized for fertilization, but in opposite ways: the sperm is built to <em>travel and enter</em>; the egg is built to <em>receive and support</em>.</p>
<p><strong>Sperm</strong></p>
<ul>
<li><strong>Flagellum (tail)</strong> for swimming to the egg.</li>
<li><strong>Many mitochondria</strong> in the section behind the head (the midpiece). They make ATP, the energy source for the flagellum.</li>
<li><strong>Acrosome</strong> at the front of the head. It is a vesicle that holds digestive enzymes. When released, the enzymes digest a path through the layers around the egg.</li>
<li><strong>Haploid nucleus</strong> with tightly packed DNA in the head, and very little cytoplasm, so the sperm is small and light.</li>
</ul>
<p><strong>Egg</strong></p>
<ul>
<li><strong>Very large size</strong> and a <strong>large volume of cytoplasm</strong> that contains food stores to support the early embryo.</li>
<li><strong>Haploid nucleus</strong>, which combines with the sperm nucleus at fertilization.</li>
<li><strong>Cortical granules</strong> just under the surface membrane. After one sperm enters, they release their contents. This changes the outer layer around the egg (the zona pellucida) so that other sperm cannot enter. This prevents more than one sperm from fertilizing the egg.</li>
<li>A protective layer, the <strong>zona pellucida</strong>, around the egg, which the sperm's enzymes must digest.</li>
</ul>
<div class="note">How the acrosome reaction and the cortical reaction work together to stop more than one sperm entering is taught in D3.1.15 (Mechanisms to prevent polyspermy, AHL). Here you only need these structures as adaptations of the gametes.</div>`,
        `<p>ガイドはこれを<strong>ヒトの配偶子</strong>に限っています。どちらも受精に特殊化していますが、方向は逆です。精子は<em>移動して入る</em>ように、卵は<em>受け入れて支える</em>ようにできています。</p>
<p><strong>精子 (sperm)</strong></p>
<ul>
<li>卵まで泳ぐための<strong>べん毛 (flagellum)（尾）</strong>。</li>
<li>頭部の後ろの部分（中片）に<strong>多数のミトコンドリア (mitochondria)</strong>。べん毛のエネルギー源であるATPをつくります。</li>
<li>頭部の先端の<strong>先体 (acrosome)</strong>。消化酵素を含む小胞です。放出されると、酵素が卵の周りの層を消化して通り道をつくります。</li>
<li>頭部には、DNAが密に詰まった<strong>半数体 (haploid) の核</strong>があり、細胞質はごくわずかなので、精子は小さく軽くなっています。</li>
</ul>
<p><strong>卵 (egg)</strong></p>
<ul>
<li>非常に<strong>大きく</strong>、初期の胚を支える栄養の蓄えを含む<strong>大量の細胞質</strong>を持つ。</li>
<li>受精のときに精子の核と合わさる<strong>半数体の核</strong>。</li>
<li>細胞膜のすぐ下にある<strong>表層粒 (cortical granules)</strong>。1個の精子が入ると内容物を放出します。これにより卵を囲む外層（透明帯）が変化し、ほかの精子が入れなくなります。1個の卵が複数の精子と受精することを防ぎます。</li>
<li>卵を囲む保護層の<strong>透明帯 (zona pellucida)</strong>。精子の酵素がこれを消化しなければなりません。</li>
</ul>
<div class="note">先体反応 (acrosome reaction) と表層反応 (cortical reaction) が協力して複数の精子の侵入を防ぐ仕組みは、D3.1.15（多精拒否の仕組み、AHL）で学びます。ここでは、これらの構造を配偶子の適応として知っていれば十分です。</div>`,
        `<p>課程指引把範圍限於<strong>人類的配子</strong>。兩者都為受精而特化，但方向相反：精子是為了<em>前進和進入</em>，卵是為了<em>接收和支持</em>。</p>
<p><strong>精子 (sperm)</strong></p>
<ul>
<li>用以游向卵的<strong>鞭毛 (flagellum)</strong>（尾）。</li>
<li>頭部後方的部分（中段）有<strong>許多線粒體 (mitochondria)</strong>，製造ATP，為鞭毛提供能量。</li>
<li>頭部前端的<strong>頂體 (acrosome)</strong>。這是含消化酶的囊泡。釋出後，酶會消化卵周圍的層，開闢通道。</li>
<li>頭部有DNA緊密包裝的<strong>單倍體 (haploid) 細胞核</strong>，細胞質極少，所以精子細小而輕。</li>
</ul>
<p><strong>卵 (egg)</strong></p>
<ul>
<li>體積<strong>非常大</strong>，有<strong>大量細胞質</strong>，內含營養儲備，以供早期胚胎使用。</li>
<li><strong>單倍體細胞核</strong>，受精時與精子的細胞核結合。</li>
<li>緊貼表面膜下方的<strong>皮質顆粒 (cortical granules)</strong>。一個精子進入後，它們釋出內容物，改變卵周圍的外層（透明帶），使其他精子不能進入，防止多於一個精子使卵受精。</li>
<li>卵周圍的保護層<strong>透明帶 (zona pellucida)</strong>，精子的酶必須將它消化。</li>
</ul>
<div class="note">頂體反應 (acrosome reaction) 和皮質反應 (cortical reaction) 如何共同防止多於一個精子進入，會在D3.1.15（防止多精受精的機制，AHL）學習。這裏只需把這些結構視為配子的適應特徵。</div>`)
    }
  ],
  keyTerms: [
    { term: T("differentiation", "分化", "分化"), def: T("The process by which a cell becomes specialized for a particular function by expressing certain genes.", "特定の遺伝子を発現することで、細胞が特定の機能に特殊化する過程。", "細胞藉着表達某些基因而變得特化、能執行特定功能的過程。"), ahl: false },
    { term: T("gene expression", "遺伝子発現", "基因表達"), def: T("Using the information in a gene to make a protein (or RNA), so the gene is 'switched on'.", "遺伝子の情報を使ってタンパク質（またはRNA）をつくること。遺伝子が「オン」になること。", "利用基因的資訊製造蛋白質（或RNA），即基因被「開啟」。"), ahl: false },
    { term: T("stem cell", "幹細胞", "幹細胞"), def: T("An unspecialized cell that can divide endlessly and can differentiate along different pathways.", "無限に分裂でき、異なる経路で分化できる未分化の細胞。", "能無限分裂並向不同路徑分化的未特化細胞。"), ahl: false },
    { term: T("stem cell niche", "幹細胞ニッチ", "幹細胞微環境"), def: T("A specific location in a tissue (for example bone marrow or a hair follicle) where stem cells are kept and where signals control whether they stay as stem cells or differentiate.", "組織内の特定の場所（骨髄や毛包など）で、幹細胞が保たれ、幹細胞のままか分化するかをシグナルが制御する場所。", "組織中的特定位置（例如骨髓或毛囊），幹細胞在此保存，並由信號控制其維持為幹細胞或進行分化。"), ahl: false },
    { term: T("totipotent", "全能性の", "全能"), def: T("Able to differentiate into all cell types needed to form a whole organism.", "生物体全体を形成するのに必要なすべての細胞の種類へ分化できる。", "能分化成形成整個生物體所需的所有細胞類型。"), ahl: false },
    { term: T("pluripotent", "多能性の", "多能"), def: T("Able to differentiate into most or all cell types of the body, but not into a whole organism.", "体のほとんどまたはすべての細胞の種類へ分化できるが、個体全体にはなれない。", "能分化成身體大部分或所有細胞類型，但不能發育成完整生物體。"), ahl: false },
    { term: T("multipotent", "多分化能の", "專能"), def: T("Able to differentiate into only a limited range of related cell types.", "関連する限られた範囲の細胞の種類にのみ分化できる。", "只能分化成有限範圍內有關連的細胞類型。"), ahl: false },
    { term: T("surface area-to-volume ratio", "表面積と体積の比", "表面面積與體積比"), def: T("The surface area of a cell or object divided by its volume. It falls as size increases.", "細胞や物体の表面積を体積で割ったもの。大きくなるほど小さくなる。", "細胞或物體的表面面積除以其體積。大小增加時，比值下降。"), ahl: false },
    { term: T("microvilli", "微絨毛", "微絨毛"), def: T("Tiny finger-like extensions of the cell surface membrane that increase surface area.", "表面積を増やす、細胞膜の指のような小さな突起。", "增加表面面積、細胞表面膜上細小的指狀突起。"), ahl: true },
    { term: T("invagination", "陥入", "內陷"), def: T("The pushing-in or folding of a membrane, which adds extra membrane surface.", "膜が内側に押し込まれる、または折りたたまれること。膜の表面が増える。", "膜向內推入或摺疊，增加額外的膜表面。"), ahl: true },
    { term: T("pneumocyte", "肺胞上皮細胞", "肺泡細胞"), def: T("A cell of the alveolar epithelium. Type I cells are very thin (gas exchange); type II cells secrete surfactant.", "肺胞上皮の細胞。I型は非常に薄い（ガス交換）。II型はサーファクタントを分泌する。", "肺泡上皮的細胞。第I型極薄（氣體交換）；第II型分泌表面活性物質。"), ahl: true },
    { term: T("lamellar body", "層板小体", "板層小體"), def: T("A secretory vesicle in type II pneumocytes that discharges surfactant into the alveolar lumen.", "II型肺胞上皮細胞にある分泌小胞で、サーファクタントを肺胞腔に放出する。", "第II型肺泡細胞內的分泌囊泡，把表面活性物質排入肺泡腔。"), ahl: true },
    { term: T("myofibril", "筋原線維", "肌原纖維"), def: T("A bundle of contractile protein filaments inside a muscle cell or fibre.", "筋細胞や筋線維の中にある、収縮性タンパク質の束。", "肌肉細胞或纖維內的收縮性蛋白質絲束。"), ahl: true },
    { term: T("acrosome", "先体", "頂體"), def: T("A vesicle at the front of the sperm head containing digestive enzymes that help the sperm penetrate the egg's outer layers.", "精子の頭部先端にある、消化酵素を含む小胞。精子が卵の外層を通るのを助ける。", "精子頭部前端含消化酶的囊泡，幫助精子穿過卵的外層。"), ahl: true },
    { term: T("cortical granules", "表層粒", "皮質顆粒"), def: T("Vesicles under the egg's surface that release their contents after a sperm enters, to block entry of further sperm.", "卵の表面下にある小胞。精子が入った後に内容物を放出し、さらなる精子の侵入を防ぐ。", "卵表面下的囊泡，精子進入後釋出內容物，阻止更多精子進入。"), ahl: true }
  ],
  misconceptions: [
    { wrong: T("Differentiated cells have lost the genes they do not use.", "分化した細胞は、使わない遺伝子を失っている。", "已分化的細胞已失去不用的基因。"),
      right: T("Nearly every cell keeps the full set of genes. Differentiation is a change in which genes are expressed.", "ほとんどの細胞は遺伝子の全セットを保っています。分化は、どの遺伝子が発現するかの変化です。", "差不多每個細胞都保留整套基因。分化是所表達的基因的改變。") },
    { wrong: T("Stem cells are only found in embryos.", "幹細胞は胚にしかない。", "幹細胞只存在於胚胎。"),
      right: T("Adults have stem cells too, held in niches such as bone marrow and hair follicles.", "成人にも骨髄や毛包などのニッチに幹細胞があります。", "成年人也有幹細胞，保存在骨髓和毛囊等微環境中。") },
    { wrong: T("A bigger cell is always better because it holds more.", "大きい細胞の方が多く入るので常に有利である。", "細胞越大越好，因為能容納更多。"),
      right: T("As size increases the surface area-to-volume ratio falls, so exchange cannot keep up with need. That limits cell size.", "大きくなるとSA:Vが小さくなり、交換が必要量に追いつかなくなります。これが細胞の大きさを制限します。", "大小增加時，表面面積與體積比下降，交換趕不上需要，這限制了細胞大小。") },
    { wrong: T("When the side of a cube doubles, its surface area-to-volume ratio doubles.", "立方体の辺が2倍になると、SA:Vも2倍になる。", "立方體邊長加倍，表面面積與體積比也加倍。"),
      right: T("Surface area goes up 4×, volume 8×, so the ratio halves (SA:V = 6 ÷ l).", "表面積は4倍、体積は8倍になるので、比は半分になります（SA:V = 6 ÷ l）。", "表面面積增至4倍，體積增至8倍，所以比值減半（SA:V = 6 ÷ l）。") },
    { wrong: T("Pluripotent cells can form a whole organism.", "多能性の細胞は個体全体を形成できる。", "多能細胞可形成完整生物體。"),
      right: T("Only totipotent cells can form every cell type needed for a whole organism. Pluripotent cells form most or all body cell types.", "個体全体に必要なすべての細胞をつくれるのは全能性の細胞だけです。多能性の細胞は体のほとんどまたはすべての細胞をつくります。", "只有全能細胞能形成整個生物體所需的所有細胞類型。多能細胞形成身體大部分或所有的細胞類型。") }
  ],
  beyondSyllabus: [
    T("You do not need to name specific signalling molecules or genes (for example Bicoid or Hox genes) for gradients in embryos. You only need the idea that gradients affect gene expression.", "胚の勾配について、特定のシグナル分子や遺伝子（BicoidやHox遺伝子など）の名前を覚える必要はありません。勾配が遺伝子発現に影響するという考えだけで十分です。", "你不需要記住胚胎梯度中特定的信號分子或基因名稱（例如 Bicoid 或 Hox 基因），只需明白梯度影響基因表達這個概念。"),
    T("You do not need to know the details of embryonic stem cell therapy, induced pluripotent stem cells or the ethics of stem cell research for this subtopic. The guide limits B2.3.2 to two properties.", "このサブトピックでは、胚性幹細胞療法、iPS細胞、幹細胞研究の倫理の詳細は必要ありません。B2.3.2は2つの性質に限られています。", "此子課題不需要認識胚胎幹細胞療法、誘導多能幹細胞 (iPS) 的詳情，或幹細胞研究的倫理。B2.3.2只限於兩項特性。"),
    T("You do not need more than two examples of stem cell niches. Bone marrow and hair follicles are enough.", "幹細胞ニッチの例は2つ以上は必要ありません。骨髄と毛包で十分です。", "不需要多於兩個幹細胞微環境的例子，骨髓和毛囊已足夠。"),
    T("You do not need to memorize exact cell sizes. You should know the rough range and order of size of the cells listed in B2.3.5.", "細胞の正確な大きさを暗記する必要はありません。B2.3.5に挙がった細胞のおおよその範囲と大小関係を知っていれば十分です。", "你不需要背誦細胞的準確大小，只需知道B2.3.5所列細胞的大約範圍和大小次序。"),
    T("You do not need to calculate SA:V for shapes other than cubes (for example spheres or cylinders). The guide uses cubes as the model.", "立方体以外の形（球や円柱など）のSA:Vを計算する必要はありません。ガイドはモデルとして立方体を使っています。", "你不需要計算立方體以外形狀（如球體或圓柱體）的SA:V。課程指引以立方體作模型。"),
    T("You do not need to know the sliding filament mechanism or sarcomere structure here. That is B3.3. For B2.3.9 you only need myofibrils, branching, length and number of nuclei.", "ここで滑り説（フィラメント滑走）やサルコメアの構造を知る必要はありません。それはB3.3です。B2.3.9では、筋原線維、枝分かれ、長さ、核の数だけで十分です。", "這裏不需要認識滑動肌絲機制或肌節結構，那屬於B3.3。B2.3.9只需肌原纖維、分支、長度和細胞核數目。"),
    T("You do not need other roles of pneumocytes (for example, type II cells dividing to replace damaged type I cells). Learn only the two adaptations in the guide: the extreme thinness of type I cells and the lamellar bodies of type II cells.", "肺胞上皮細胞のほかの役割（たとえば、II型細胞が分裂して傷ついたI型細胞を置き換えること）は必要ありません。ガイドにある2つの適応、I型細胞の極端な薄さとII型細胞の層板小体だけを学べば十分です。", "你不需要認識肺泡細胞的其他作用（例如第II型細胞分裂以取代受損的第I型細胞）。只需學習課程指引中的兩項適應特徵：第I型細胞極薄，以及第II型細胞的板層小體。"),
    T("You do not need the step-by-step acrosome reaction or cortical reaction for this subtopic. They are taught in D3.1.15 (Mechanisms to prevent polyspermy, AHL).", "このサブトピックでは、先体反応や表層反応の段階的な仕組みは不要です。それらはD3.1.15（多精拒否の仕組み、AHL）で学びます。", "此子課題不需要逐步認識頂體反應或皮質反應，它們會在D3.1.15（防止多精受精的機制，AHL）學習。")
  ],
  links: [
    { to: "B2.1", why: T("Membranes are the surface across which exchange happens. The SA:V ratio explains why membrane area matters.", "膜は交換が行われる表面です。SA:Vは、なぜ膜の面積が重要なのかを説明します。", "膜是進行交換的表面。SA:V說明了為何膜面積重要。") },
    { to: "B3.1", why: T("Gas exchange surfaces such as alveoli, and larger organisms' need for them, follow from SA:V.", "肺胞などのガス交換面や、大きな生物がそれを必要とする理由はSA:Vから導かれます。", "肺泡等氣體交換表面，以及較大生物對它們的需要，都源於SA:V。") },
    { to: "A2.2", why: T("Cell size ranges and the limits to cell size were introduced with cell structure.", "細胞の大きさの範囲と限界は、細胞の構造と合わせて学びました。", "細胞大小的範圍和限度在學習細胞結構時已介紹。") },
    { to: "B3.3", why: T("Striated muscle fibres return in the study of muscle and motility.", "横紋筋線維は、筋肉と運動の学習で再び登場します。", "橫紋肌纖維會在肌肉與運動的學習中再次出現。") }
  ],
  natureOfScience: [
    T("Models are simplified versions of complex systems. Cubes of different side lengths model the surface area-to-volume relationship; real cells are not cubes, but the scale factors work in the same way.", "モデルは複雑な系を単純にしたものです。辺の長さが異なる立方体で、表面積と体積の関係をモデル化します。実際の細胞は立方体ではありませんが、スケールの関係は同じように働きます。", "模型是複雜系統的簡化版本。邊長不同的立方體可模擬表面面積與體積的關係；真實的細胞不是立方體，但比例因子的作用相同。")
  ],
  questions: [
    { id: "b2-3-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B2.3.2", paper: "1A",
      stem: T("Which two properties describe stem cells?", "幹細胞の性質を表す2つの組み合わせはどれか。", "以下哪兩項描述幹細胞的特性？"),
      options: [
        T("They can divide endlessly and can differentiate along different pathways.", "無限に分裂でき、異なる経路で分化できる。", "能無限分裂，並能向不同路徑分化。"),
        T("They can divide only a few times and always make one cell type.", "数回しか分裂できず、常に1種類の細胞しかつくらない。", "只能分裂數次，並且只產生一種細胞。"),
        T("They cannot divide but can differentiate into any cell.", "分裂はできないが、どんな細胞にも分化できる。", "不能分裂，但能分化成任何細胞。"),
        T("They are fully specialized and cannot change.", "完全に特殊化していて変化できない。", "完全特化，不能改變。")
      ],
      answer: 0,
      explanation: T("Endless division and the ability to differentiate along different pathways are the two properties the guide asks for. B and D describe cells that have lost stem-cell properties. C is wrong because stem cells must divide: that is how they renew themselves.", "無限の分裂と、異なる経路への分化がガイドの求める2つの性質です。BとDは、幹細胞の性質を失った細胞の説明です。Cは誤りで、幹細胞は分裂して自己複製します。", "無限分裂及向不同路徑分化，是課程指引要求的兩項特性。B和D描述的是已失去幹細胞特性的細胞。C錯誤，因為幹細胞必須分裂，這正是它們自我更新的方式。") },
    { id: "b2-3-q02", type: "mcq", ahl: false, difficulty: 2, ref: "B2.3.4", paper: "1A",
      stem: T("Stem cells in the bone marrow of an adult can produce red and white blood cells but not nerve cells. What type of stem cell are they?", "成人の骨髄の幹細胞は、赤血球や白血球をつくれるが神経細胞はつくれない。これはどの種類の幹細胞か。", "成年人骨髓中的幹細胞能產生紅血球和白血球，但不能產生神經細胞。它們屬於哪種幹細胞？"),
      options: [
        T("Totipotent", "全能性", "全能"),
        T("Pluripotent", "多能性", "多能"),
        T("Multipotent", "多分化能", "專能"),
        T("Fully differentiated", "完全に分化した細胞", "完全分化的細胞")
      ],
      answer: 2,
      explanation: T("They make a limited range of related cell types, so they are multipotent. Totipotent cells can make a whole organism, found in the very early embryo. Pluripotent cells can make most or all body cell types, so they could make nerve cells. Fully differentiated cells are not stem cells.", "関連する限られた種類の細胞をつくるので、多分化能です。全能性は個体全体をつくれる細胞でごく初期の胚にあります。多能性は体のほとんどの細胞をつくれるので、神経細胞もつくれます。完全に分化した細胞は幹細胞ではありません。", "它們產生有限範圍內有關連的細胞類型，所以是專能。全能細胞能形成整個生物體，存在於極早期胚胎。多能細胞能產生身體大部分細胞類型，因此也能產生神經細胞。完全分化的細胞不是幹細胞。") },
    { id: "b2-3-q03", type: "order", ahl: false, difficulty: 2, ref: "B2.3.1", paper: "1A",
      stem: T("Put these events in the correct order, from first to last.", "次の出来事を、最初から最後まで正しい順に並べなさい。", "把以下事件由先至後排列。"),
      items: [
        T("Egg and sperm fuse (fertilization) to form a zygote", "卵と精子が融合（受精）して接合子ができる", "卵與精子融合（受精）形成合子"),
        T("The zygote divides to make many unspecialized cells", "接合子が分裂して多数の未分化の細胞ができる", "合子分裂成許多未特化的細胞"),
        T("Gradients of signals give cells in different positions different signals", "シグナルの勾配により、位置の異なる細胞が異なるシグナルを受ける", "信號的梯度使不同位置的細胞接收不同信號"),
        T("Different genes are expressed in different cells", "細胞ごとに異なる遺伝子が発現する", "不同細胞表達不同基因"),
        T("Cells differentiate into specialized cell types", "細胞が特殊化した細胞に分化する", "細胞分化成特化的細胞類型")
      ],
      explanation: T("Fertilization gives the zygote, which divides to make unspecialized cells. Gradients give position-dependent signals, which cause different gene expression, and that is what drives differentiation.", "受精で接合子ができ、分裂して未分化の細胞になります。勾配が位置に応じたシグナルを与え、遺伝子発現の違いを引き起こし、それが分化を進めます。", "受精形成合子，合子分裂成未特化的細胞。梯度提供取決於位置的信號，引致基因表達不同，這就推動分化。") },
    { id: "b2-3-q04", type: "match", ahl: false, difficulty: 1, ref: "B2.3.4", paper: "1A",
      stem: T("Match each type of stem cell with its description.", "幹細胞の種類とその説明を組み合わせなさい。", "把每種幹細胞與其描述配對。"),
      pairs: [
        { left: T("Totipotent", "全能性", "全能"), right: T("Can form every cell type needed for a whole organism; early embryo", "個体全体に必要なすべての細胞になれる。初期胚", "能形成整個生物體所需的所有細胞類型；早期胚胎") },
        { left: T("Pluripotent", "多能性", "多能"), right: T("Can form most or all body cell types but not a whole organism", "体のほとんどまたはすべての細胞になれるが個体全体にはなれない", "能形成身體大部分或所有細胞類型，但不能形成完整生物體") },
        { left: T("Multipotent", "多分化能", "專能"), right: T("Can form only a limited range of related cell types; adult tissue", "関連する限られた種類の細胞にのみなれる。成体の組織", "只能形成有限範圍內有關連的細胞類型；成體組織") }
      ],
      explanation: T("Potency narrows from totipotent to pluripotent to multipotent as development proceeds.", "発生が進むにつれ、分化能は全能性、多能性、多分化能の順に狭まります。", "隨着發育進行，潛能由全能、多能到專能逐步收窄。") },
    { id: "b2-3-q05", type: "multi", ahl: false, difficulty: 2, ref: "B2.3.3", paper: "1A",
      stem: T("Which statements about stem cell niches in adult humans are correct? Select all that apply.", "成人の幹細胞ニッチについて正しい記述をすべて選びなさい。", "關於成年人幹細胞微環境，哪些陳述正確？選出所有適用者。"),
      options: [
        T("Bone marrow is an example of a niche.", "骨髄はニッチの例である。", "骨髓是微環境的一個例子。"),
        T("Hair follicles are an example of a niche.", "毛包はニッチの例である。", "毛囊是微環境的一個例子。"),
        T("A niche can maintain stem cells or promote their proliferation and differentiation.", "ニッチは幹細胞を維持することも、増殖と分化を促すこともできる。", "微環境可維持幹細胞，或促進其增殖和分化。"),
        T("Stem cell niches exist only in the embryo and disappear at birth.", "幹細胞ニッチは胚にだけあり、誕生時に消える。", "幹細胞微環境只存在於胚胎，出生時消失。")
      ],
      answer: [0, 1, 2],
      explanation: T("Bone marrow and hair follicles are the guide's suitable examples, and niches can either keep cells as stem cells or promote their division and differentiation. D is wrong: adults keep niches.", "骨髄と毛包はガイドが示す適切な例で、ニッチは細胞を幹細胞のまま保つことも、分裂と分化を促すこともできます。Dは誤りで、成人もニッチを持ち続けます。", "骨髓和毛囊是課程指引的合適例子，微環境既可維持細胞為幹細胞，也可促進其分裂和分化。D錯誤：成年人仍保留微環境。") },
    { id: "b2-3-q06", type: "mcq", ahl: false, difficulty: 2, ref: "B2.3.6", paper: "1A",
      stem: T("A cube-shaped cell has sides of 4 µm. What is its surface area-to-volume ratio?", "辺が4 µmの立方体の細胞がある。表面積と体積の比はいくらか。", "一個立方體形的細胞邊長為4 µm。它的表面面積與體積比是多少？"),
      options: [
        T("0.67 : 1", "0.67 : 1", "0.67 : 1"),
        T("1.5 : 1", "1.5 : 1", "1.5 : 1"),
        T("6 : 1", "6 : 1", "6 : 1"),
        T("96 : 1", "96 : 1", "96 : 1")
      ],
      answer: 1,
      explanation: T("Surface area = 6 × 4² = 96 µm². Volume = 4³ = 64 µm³. Ratio = 96 ÷ 64 = 1.5 : 1. 0.67 is volume to surface area, the wrong way round. 6 : 1 is the ratio for a 1 µm cube. 96 is just the surface area.", "表面積 = 6 × 4² = 96 µm²。体積 = 4³ = 64 µm³。比 = 96 ÷ 64 = 1.5 : 1。0.67は体積÷表面積で、逆になっています。6 : 1は1 µmの立方体の比。96は表面積そのものです。", "表面面積 = 6 × 4² = 96 µm²。體積 = 4³ = 64 µm³。比值 = 96 ÷ 64 = 1.5 : 1。0.67是體積比表面面積，次序顛倒。6 : 1是1 µm立方體的比值。96只是表面面積。") },
    { id: "b2-3-q07", type: "short", ahl: false, difficulty: 2, ref: "B2.3.6", paper: "2", commandTerm: "Calculate", marks: 4,
      stem: T("Two cube-shaped cells have sides of 2 µm and 6 µm. Calculate the surface area-to-volume ratio of each cell and state how the ratio changes as the cell gets larger.", "辺が2 µmと6 µmの立方体の細胞がある。それぞれの表面積と体積の比を計算し、細胞が大きくなると比がどう変わるかを述べなさい。", "兩個立方體形細胞的邊長分別為2 µm和6 µm。計算每個細胞的表面面積與體積比，並說明細胞變大時比值如何改變。"),
      markscheme: [
        T("2 µm cell: surface area 24 µm² and volume 8 µm³ (working shown)", "2 µmの細胞：表面積24 µm²、体積8 µm³（計算過程を示す）", "2 µm細胞：表面面積24 µm²，體積8 µm³（顯示計算步驟）"),
        T("2 µm cell: ratio = 3 : 1", "2 µmの細胞：比 = 3 : 1", "2 µm細胞：比值 = 3 : 1"),
        T("6 µm cell: surface area 216 µm², volume 216 µm³, ratio = 1 : 1", "6 µmの細胞：表面積216 µm²、体積216 µm³、比 = 1 : 1", "6 µm細胞：表面面積216 µm²，體積216 µm³，比值 = 1 : 1"),
        T("Ratio decreases as cell size increases", "細胞が大きくなると比は小さくなる", "細胞變大，比值下降")
      ],
      modelAnswer: T("2 µm cube: SA = 6 × 2² = 24 µm²; V = 2³ = 8 µm³; SA:V = 3 : 1. 6 µm cube: SA = 6 × 6² = 216 µm²; V = 6³ = 216 µm³; SA:V = 1 : 1. The ratio decreases as the cell gets larger.", "2 µmの立方体：SA = 6 × 2² = 24 µm²、V = 2³ = 8 µm³、SA:V = 3 : 1。6 µmの立方体：SA = 6 × 6² = 216 µm²、V = 6³ = 216 µm³、SA:V = 1 : 1。細胞が大きくなると比は小さくなる。", "2 µm立方體：SA = 6 × 2² = 24 µm²；V = 2³ = 8 µm³；SA:V = 3 : 1。6 µm立方體：SA = 6 × 6² = 216 µm²；V = 6³ = 216 µm³；SA:V = 1 : 1。細胞變大，比值下降。") },
    { id: "b2-3-q08", type: "short", ahl: false, difficulty: 2, ref: "B2.3.6", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain why a cell cannot grow indefinitely large.", "細胞が際限なく大きくなれない理由を説明しなさい。", "解釋為何細胞不能無限地增大。"),
      markscheme: [
        T("As a cell grows, its volume increases faster than its surface area (surface area-to-volume ratio falls)", "細胞が成長すると、体積は表面積より速く増える（SA:Vが小さくなる）", "細胞生長時，體積比表面面積增加得更快（表面面積與體積比下降）"),
        T("Need for materials/production of wastes depends on volume, but exchange across the membrane depends on surface area", "物質の必要量・老廃物の産生は体積に依存するが、膜を通した交換は表面積に依存する", "對物質的需要／廢物的產生取決於體積，但跨膜交換取決於表面面積"),
        T("So oxygen/nutrients cannot enter fast enough (and wastes cannot leave fast enough) to supply the whole cell", "そのため酸素や栄養分が十分な速さで入れず（老廃物も出られず）、細胞全体を支えられない", "因此氧氣／營養物不能足夠快地進入（廢物也不能足夠快地離開），供不應求整個細胞"),
        T("Distance for diffusion to the centre increases (accept)", "中心までの拡散距離が長くなる（可）", "擴散至中央的距離增加（接受）")
      ],
      modelAnswer: T("As a cell gets larger its volume rises faster than its surface area, so the SA:V ratio falls. The need for materials depends on volume but exchange depends on surface area. Eventually the membrane is too small to take in materials and remove wastes fast enough for the whole cell.", "細胞が大きくなると、体積は表面積より速く増えるのでSA:Vが小さくなる。物質の必要量は体積に依存し、交換は表面積に依存する。やがて膜が小さすぎて、細胞全体のために物質を取り込み老廃物を除く速さが足りなくなる。", "細胞變大時，體積比表面面積增加得更快，所以SA:V下降。對物質的需要取決於體積，而交換取決於表面面積。最終膜太小，不能足夠快地為整個細胞吸收物質和移走廢物。") },
    { id: "b2-3-q09", type: "short", ahl: false, difficulty: 2, ref: "B2.3.6", paper: "1B", commandTerm: "Deduce", marks: 3,
      stem: T("The table shows a cube model of cells of different sizes (illustrative data). Assume oxygen need is proportional to volume and oxygen supply is proportional to surface area. (a) Describe the trend in SA:V. (b) Deduce what happens to the oxygen supply compared with the oxygen need as the side doubles from 4 µm to 8 µm.", "表は、大きさの異なる細胞の立方体モデルである（イラスト用データ）。酸素の必要量は体積に比例し、酸素の供給量は表面積に比例すると仮定する。(a) SA:Vの傾向を述べなさい。(b) 辺が4 µmから8 µmに2倍になるとき、酸素の供給が必要量と比べてどうなるか推論しなさい。", "下表顯示不同大小細胞的立方體模型（示範數據）。假設氧氣需求與體積成正比，氧氣供應與表面面積成正比。(a) 描述SA:V的趨勢。(b) 邊長由4 µm加倍至8 µm時，推斷氧氣供應與氧氣需求相比會如何。"),
      data: T(
        `<table><tr><th>Side (µm)</th><th>Surface area (µm²)</th><th>Volume (µm³)</th><th>SA:V</th></tr><tr><td>1</td><td>6</td><td>1</td><td>6 : 1</td></tr><tr><td>2</td><td>24</td><td>8</td><td>3 : 1</td></tr><tr><td>4</td><td>96</td><td>64</td><td>1.5 : 1</td></tr><tr><td>8</td><td>384</td><td>512</td><td>0.75 : 1</td></tr></table>`,
        `<table><tr><th>辺 (µm)</th><th>表面積 (µm²)</th><th>体積 (µm³)</th><th>SA:V</th></tr><tr><td>1</td><td>6</td><td>1</td><td>6 : 1</td></tr><tr><td>2</td><td>24</td><td>8</td><td>3 : 1</td></tr><tr><td>4</td><td>96</td><td>64</td><td>1.5 : 1</td></tr><tr><td>8</td><td>384</td><td>512</td><td>0.75 : 1</td></tr></table>`,
        `<table><tr><th>邊長 (µm)</th><th>表面面積 (µm²)</th><th>體積 (µm³)</th><th>SA:V</th></tr><tr><td>1</td><td>6</td><td>1</td><td>6 : 1</td></tr><tr><td>2</td><td>24</td><td>8</td><td>3 : 1</td></tr><tr><td>4</td><td>96</td><td>64</td><td>1.5 : 1</td></tr><tr><td>8</td><td>384</td><td>512</td><td>0.75 : 1</td></tr></table>`),
      markscheme: [
        T("(a) SA:V decreases as the side/cell size increases (from 6 : 1 to 0.75 : 1)", "(a) 辺／細胞が大きくなるとSA:Vは小さくなる（6 : 1から0.75 : 1へ）", "(a) 邊長／細胞大小增加時，SA:V下降（由6 : 1降至0.75 : 1）"),
        T("(b) Supply (surface area) increases 4 times (96 to 384) but need (volume) increases 8 times (64 to 512)", "(b) 供給（表面積）は4倍（96から384）だが、必要量（体積）は8倍（64から512）になる", "(b) 供應（表面面積）增至4倍（96至384），但需求（體積）增至8倍（64至512）"),
        T("(b) So the supply falls behind the need / supply per unit volume halves", "(b) よって供給は必要量に追いつかない／単位体積あたりの供給は半分になる", "(b) 所以供應追不上需求／每單位體積的供應減半")
      ],
      modelAnswer: T("(a) SA:V falls from 6 : 1 to 0.75 : 1 as size increases. (b) Surface area, so supply, rises 4 times, but volume, so need, rises 8 times. Supply per unit volume halves, so it falls behind the need.", "(a) 大きくなるとSA:Vは6 : 1から0.75 : 1へ小さくなる。(b) 表面積（供給）は4倍、体積（必要量）は8倍になる。単位体積あたりの供給は半分になり、必要量に追いつかない。", "(a) 大小增加時，SA:V由6 : 1降至0.75 : 1。(b) 表面面積（供應）增至4倍，體積（需求）增至8倍。每單位體積的供應減半，所以追不上需求。") },
    { id: "b2-3-q10", type: "short", ahl: false, difficulty: 1, ref: "B2.3.3", paper: "2", commandTerm: "Outline", marks: 3,
      stem: T("Outline the role of stem cell niches in adult humans, using one named example.", "成人における幹細胞ニッチの役割を、名前を挙げた1つの例を使って概説しなさい。", "以一個指定例子，概述幹細胞微環境在成年人體內的作用。"),
      markscheme: [
        T("A niche is a specific location/microenvironment where stem cells are kept", "ニッチは、幹細胞が保たれている特定の場所／微小環境である", "微環境是保存幹細胞的特定位置／微小環境"),
        T("Named example, e.g. bone marrow (makes blood cells) or hair follicle (makes hair/skin cells)", "例の名称。例：骨髄（血球をつくる）または毛包（毛や皮膚の細胞をつくる）", "指定例子，例如骨髓（製造血細胞）或毛囊（製造毛髮／皮膚細胞）"),
        T("The niche can maintain stem cells (keep them undifferentiated)", "ニッチは幹細胞を維持できる（未分化のまま保つ）", "微環境可維持幹細胞（使其保持未分化）"),
        T("or promote their proliferation and differentiation when new cells are needed", "または新しい細胞が必要なとき増殖と分化を促す", "或在需要新細胞時促進其增殖和分化")
      ],
      modelAnswer: T("A stem cell niche is a particular location in a tissue where stem cells are held. In bone marrow, for example, stem cells are kept there and can divide and differentiate to make blood cells. The niche can maintain stem cells as they are, or promote their division and differentiation when new cells are needed.", "幹細胞ニッチは、組織内で幹細胞が保たれている特定の場所である。たとえば骨髄では幹細胞がそこに保たれ、分裂・分化して血球をつくる。ニッチは幹細胞をそのまま維持することも、新しい細胞が必要なときに分裂と分化を促すこともできる。", "幹細胞微環境是組織內保存幹細胞的特定位置。例如在骨髓中，幹細胞保存在該處，可分裂和分化產生血細胞。微環境可維持幹細胞原狀，或在需要新細胞時促進其分裂和分化。") },
    { id: "b2-3-q11", type: "mcq", ahl: false, difficulty: 1, ref: "B2.3.5", paper: "1A",
      stem: T("Which is the best estimate of the diameter of a human red blood cell?", "ヒトの赤血球の直径として最も適切な値はどれか。", "人類紅血球直徑的最佳估計值是哪個？"),
      options: [
        T("0.7 µm", "0.7 µm", "0.7 µm"),
        T("7 µm", "7 µm", "7 µm"),
        T("70 µm", "70 µm", "70 µm"),
        T("700 µm", "700 µm", "700 µm")
      ],
      answer: 1,
      explanation: T("A red blood cell is about 7 µm across. 0.7 µm is the size of a small bacterium or large organelle. 70 µm is too large and nearer to a human egg (about 100 µm). 700 µm (0.7 mm) is far too big: it is bigger than a human egg.", "赤血球は直径約7 µmです。0.7 µmは小さな細菌や大きな細胞小器官の大きさです。70 µmは大きすぎ、卵（約100 µm）に近い値です。700 µm (0.7 mm) ははるかに大きすぎ、ヒトの卵よりも大きくなります。", "紅血球直徑約7 µm。0.7 µm是細小細菌或大型細胞器的大小。70 µm太大，較接近人類卵（約100 µm）。700 µm (0.7 mm) 遠遠太大，比人類卵還要大。") },
    { id: "b2-3-q12", type: "multi", ahl: true, difficulty: 2, ref: "B2.3.7", paper: "1A",
      stem: T("Which features increase the surface area-to-volume ratio of a cell? Select all that apply.", "細胞の表面積と体積の比を高める特徴はどれか。当てはまるものをすべて選びなさい。", "哪些特徵提高細胞的表面面積與體積比？選出所有適用者。"),
      options: [
        T("A flattened biconcave shape, as in erythrocytes", "赤血球のような平たい両凹面の形", "如紅血球般扁平的雙凹形"),
        T("Microvilli on the surface facing the tubule in proximal convoluted tubule cells", "近位尿細管の細胞で、管に面した表面にある微絨毛", "近曲小管細胞面向小管表面的微絨毛"),
        T("Invagination (infolding) of the membrane", "膜の陥入（折りたたみ）", "膜的內陷（摺入）"),
        T("Having many nuclei in the cell", "細胞内に多数の核を持つこと", "細胞內有許多細胞核")
      ],
      answer: [0, 1, 2],
      explanation: T("Flattening, microvilli and invagination are the three adaptations in the guide. Having many nuclei does not change the surface area-to-volume ratio.", "平たくなること、微絨毛、陥入がガイドの3つの適応です。核の数が多くてもSA:Vは変わりません。", "扁平化、微絨毛和內陷是課程指引中的三項適應特徵。細胞核數目多並不改變SA:V。") },
    { id: "b2-3-q13", type: "short", ahl: true, difficulty: 2, ref: "B2.3.7", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain how the structure of cells in the proximal convoluted tubule increases their ability to reabsorb substances.", "近位尿細管の細胞の構造が、物質を再吸収する能力をどのように高めているか説明しなさい。", "解釋近曲小管細胞的結構如何提高其重吸收物質的能力。"),
      markscheme: [
        T("Microvilli on the surface facing the tubule lumen", "管腔に面した表面に微絨毛がある", "面向小管腔的表面有微絨毛"),
        T("Increase the surface area (of membrane) for absorption/reabsorption", "吸収／再吸収のための（膜の）表面積を増やす", "增加（膜的）表面面積以供吸收／重吸收"),
        T("Invagination/infolding of the membrane at the base of the cell", "細胞の基部で膜が陥入／折りたたまれている", "細胞基部的膜內陷／摺入"),
        T("More membrane for transport proteins / faster transfer to the blood (accept)", "輸送タンパク質のための膜がより多い／血液への移動が速い（可）", "更多膜面積容納轉運蛋白／更快轉移至血液（接受）")
      ],
      modelAnswer: T("The surface facing the tubule has microvilli, which increase the surface area for reabsorption. The membrane at the base is folded by invagination, adding more membrane to hold transport proteins. This gives a high surface area-to-volume ratio and fast reabsorption.", "管に面した表面には微絨毛があり、再吸収のための表面積を増やす。基部の膜は陥入によって折りたたまれ、輸送タンパク質を載せる膜が増える。これによりSA:Vが高くなり、再吸収が速くなる。", "面向小管的表面有微絨毛，增加重吸收的表面面積。基部的膜因內陷而摺疊，增加容納轉運蛋白的膜。這使SA:V較高，重吸收較快。") },
    { id: "b2-3-q14", type: "mcq", ahl: true, difficulty: 2, ref: "B2.3.8", paper: "1A",
      stem: T("What is the function of the lamellar bodies in type II pneumocytes?", "II型肺胞上皮細胞の層板小体の働きは何か。", "第II型肺泡細胞中板層小體的功能是甚麼？"),
      options: [
        T("They carry out gas exchange across the alveolar wall.", "肺胞壁を通してガス交換を行う。", "在肺泡壁進行氣體交換。"),
        T("They discharge surfactant into the alveolar lumen.", "サーファクタントを肺胞腔に放出する。", "把表面活性物質排入肺泡腔。"),
        T("They produce mucus to trap dust.", "粘液をつくり、ほこりを捕らえる。", "製造黏液以捕捉塵粒。"),
        T("They engulf bacteria by phagocytosis.", "食作用で細菌を取り込む。", "以吞噬作用吞入細菌。")
      ],
      answer: 1,
      explanation: T("Lamellar bodies are secretory vesicles that release surfactant. Gas exchange is the job of the very thin type I cells (A is tempting, but it mixes up the two cell types). Mucus and phagocytosis are not what the guide asks for.", "層板小体は、サーファクタントを放出する分泌小胞です。ガス交換は非常に薄いI型細胞の働きです（Aは紛らわしいですが、2つの細胞を混同しています）。粘液や食作用はガイドが求める内容ではありません。", "板層小體是釋出表面活性物質的分泌囊泡。氣體交換是極薄的第I型細胞的工作（A選項容易混淆，因為把兩種細胞混為一談）。黏液和吞噬作用不是課程指引的要求。") },
    { id: "b2-3-q15", type: "short", ahl: true, difficulty: 2, ref: "B2.3.8", paper: "2", commandTerm: "Distinguish", marks: 3,
      stem: T("Distinguish between type I and type II pneumocytes in the alveolar epithelium.", "肺胞上皮のI型細胞とII型細胞を区別しなさい。", "區別肺泡上皮中的第I型和第II型肺泡細胞。"),
      markscheme: [
        T("Type I are extremely thin/flat; type II are more rounded/cuboidal", "I型は極めて薄く平ら。II型はより丸みのある立方形", "第I型極薄／扁平；第II型較圓／立方形"),
        T("Type I: thinness gives short diffusion distance for gas exchange", "I型：薄さによりガス交換の拡散距離が短い", "第I型：薄使氣體交換的擴散距離短"),
        T("Type II: many secretory vesicles / lamellar bodies in cytoplasm", "II型：細胞質に多数の分泌小胞／層板小体がある", "第II型：細胞質有許多分泌囊泡／板層小體"),
        T("Type II: discharge surfactant into the alveolar lumen", "II型：サーファクタントを肺胞腔に放出する", "第II型：把表面活性物質排入肺泡腔")
      ],
      modelAnswer: T("Type I pneumocytes are extremely thin, which gives a short diffusion distance for gas exchange. Type II pneumocytes are more rounded and contain many lamellar bodies (secretory vesicles) that discharge surfactant into the alveolus.", "I型は極めて薄く、ガス交換の拡散距離が短い。II型は丸みがあり、サーファクタントを肺胞に放出する層板小体（分泌小胞）を多数含む。", "第I型極薄，使氣體交換的擴散距離短。第II型較圓，含許多板層小體（分泌囊泡），把表面活性物質排入肺泡。") },
    { id: "b2-3-q16", type: "short", ahl: true, difficulty: 3, ref: "B2.3.9", paper: "2", commandTerm: "Discuss", marks: 4,
      stem: T("Discuss whether a striated muscle fibre should be considered a single cell.", "横紋筋線維を1つの細胞とみなすべきかどうか論じなさい。", "討論橫紋肌纖維是否應視為單一細胞。"),
      markscheme: [
        T("For: surrounded by one cell surface membrane", "賛成：1枚の細胞膜に囲まれている", "贊成：被單一細胞表面膜包圍"),
        T("For: contains cytoplasm, organelles and is the basic living unit of the muscle", "賛成：細胞質と細胞小器官を含み、筋肉の基本的な生きた単位である", "贊成：含細胞質和細胞器，是肌肉的基本活單位"),
        T("Against: many nuclei, whereas typical cells have one", "反対：典型的な細胞は核が1個だが、多数の核を持つ", "反對：有許多細胞核，而典型細胞只有一個"),
        T("Against: formed by fusion of many cells", "反対：多数の細胞の融合でできる", "反對：由許多細胞融合而成"),
        T("Against: far longer than most cells (up to centimetres), so does not fit the usual size limit", "反対：ほとんどの細胞よりはるかに長く（数cm）、通常の大きさの限界に合わない", "反對：比大多數細胞長得多（可達數厘米），不符合一般大小限制"),
        T("A reasoned conclusion", "理由づけられた結論", "有理據的結論")
      ],
      modelAnswer: T("It can be seen as a cell because it has one surface membrane, cytoplasm and organelles, and is the working unit of the muscle. However, it has many nuclei, it is formed when many cells fuse, and it is much longer than usual cells, so it does not fit the usual size limit. Overall it is best described as a specialized, unusual cell, because it does most things a cell does even though it is multinucleate.", "1枚の細胞膜、細胞質、細胞小器官を持ち、筋肉の働きの単位なので細胞とみなせる。しかし多数の核を持ち、多数の細胞が融合してできており、ふつうの細胞よりはるかに長いので、通常の大きさの限界に合わない。全体としては、多核であっても細胞の行うことの大部分を行うので、特殊化した変わった細胞と言うのがよい。", "它可視為細胞，因為它有一層表面膜、細胞質和細胞器，是肌肉的工作單位。但它有許多細胞核，由許多細胞融合而成，並且比一般細胞長得多，不符合一般大小限制。總括而言，雖然是多核，它仍執行細胞的大部分功能，最好描述為一種特化而特殊的細胞。") },
    { id: "b2-3-q17", type: "short", ahl: true, difficulty: 2, ref: "B2.3.9", paper: "2", commandTerm: "Compare and contrast", marks: 4,
      stem: T("Compare and contrast cardiac muscle cells and striated muscle fibres.", "心筋細胞と横紋筋線維を比較し、対比しなさい。", "比較並對比心肌細胞與橫紋肌纖維。"),
      markscheme: [
        T("Similarity: both contain myofibrils / contractile filaments", "共通点：どちらも筋原線維／収縮性フィラメントを含む", "相同：兩者都含肌原纖維／收縮絲"),
        T("Similarity: both are striated / contract to cause movement/pumping (accept)", "共通点：どちらも横紋がある／収縮して運動やポンプ作用を起こす（可）", "相同：兩者都有橫紋／收縮以產生運動／泵血（接受）"),
        T("Difference: cardiac cells are branched; striated fibres are unbranched", "相違点：心筋細胞は枝分かれ、横紋筋線維は枝分かれしない", "差異：心肌細胞有分支；橫紋肌纖維無分支"),
        T("Difference: cardiac cells are short; striated fibres are very long", "相違点：心筋細胞は短く、横紋筋線維は非常に長い", "差異：心肌細胞短；橫紋肌纖維很長"),
        T("Difference: cardiac cells usually have one nucleus; striated fibres have many", "相違点：心筋細胞はふつう核が1個、横紋筋線維は多数", "差異：心肌細胞通常有一個核；橫紋肌纖維有許多核")
      ],
      modelAnswer: T("Both types contain myofibrils for contraction and both look striped. However, cardiac muscle cells are branched, short and usually have one nucleus, whereas striated muscle fibres are unbranched, very long and have many nuclei.", "どちらも収縮のための筋原線維を含み、縞模様に見える。しかし心筋細胞は枝分かれして短く、ふつう核は1個であるのに対し、横紋筋線維は枝分かれせず非常に長く、多数の核を持つ。", "兩者都含有用以收縮的肌原纖維，也都呈條紋狀。然而，心肌細胞有分支、較短，通常有一個核；橫紋肌纖維無分支、很長，並有許多核。") },
    { id: "b2-3-q18", type: "short", ahl: true, difficulty: 2, ref: "B2.3.10", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain how a human sperm cell is adapted for its function.", "ヒトの精子が、その機能にどのように適応しているか説明しなさい。", "解釋人類精子如何適應其功能。"),
      markscheme: [
        T("Flagellum/tail for swimming/motility", "泳ぐ（運動する）ためのべん毛／尾", "鞭毛／尾用以游動（運動）"),
        T("Many mitochondria in the midpiece to produce ATP for movement", "中片に多数のミトコンドリアがあり、運動のためのATPをつくる", "中段有許多線粒體，為運動產生ATP"),
        T("Acrosome contains digestive enzymes to digest the layers around the egg", "先体に消化酵素があり、卵を囲む層を消化する", "頂體含消化酶，消化卵周圍的層"),
        T("Haploid nucleus with condensed DNA, so it can deliver half the genetic information", "半数体の核にDNAが凝縮しており、遺伝情報の半分を運べる", "單倍體細胞核內DNA凝縮，可傳遞一半的遺傳資訊"),
        T("Small size / little cytoplasm / streamlined (accept)", "小さい／細胞質が少ない／流線形（可）", "體積小／細胞質少／流線型（接受）")
      ],
      modelAnswer: T("The flagellum lets the sperm swim towards the egg. The many mitochondria in the midpiece make ATP for this movement. The acrosome holds digestive enzymes that digest a path through the layers around the egg. The head carries a haploid nucleus with tightly packed DNA.", "べん毛で卵に向かって泳ぐ。中片の多数のミトコンドリアがこの運動のためのATPをつくる。先体の消化酵素が卵を囲む層を消化して通り道をつくる。頭部には、DNAが密に詰まった半数体の核がある。", "鞭毛使精子游向卵。中段的許多線粒體為此運動製造ATP。頂體含消化酶，消化卵周圍的層開闢通道。頭部帶有DNA緊密包裝的單倍體細胞核。") },
    { id: "b2-3-q19", type: "mcq", ahl: true, difficulty: 3, ref: "B2.3.10", paper: "1A",
      stem: T("Just after one sperm enters a human egg, cortical granules under the egg surface release their contents. What is the most likely benefit?", "1個の精子がヒトの卵に入った直後、卵の表面下の表層粒が内容物を放出する。最も考えられる利点は何か。", "一個精子進入人類卵後，卵表面下的皮質顆粒隨即釋出內容物。最可能的益處是甚麼？"),
      options: [
        T("It gives the sperm more energy to reach the nucleus.", "精子が核に到達するためのエネルギーを増やす。", "給予精子更多能量以到達細胞核。"),
        T("It digests the sperm's flagellum so that it cannot leave.", "精子のべん毛を消化して、出られなくする。", "消化精子的鞭毛，使它不能離開。"),
        T("It changes the outer layer so that other sperm cannot enter.", "外層を変化させて、ほかの精子が入れないようにする。", "改變外層，使其他精子不能進入。"),
        T("It makes the egg larger to store more food.", "卵を大きくして、より多くの栄養を蓄える。", "使卵變大以儲存更多營養物質。")
      ],
      answer: 2,
      explanation: T("The contents change the layer around the egg, which blocks entry of further sperm and so prevents more than one sperm fertilizing the egg. The other options describe functions that do not match what cortical granules do. D is tempting because eggs do store food, but that is the role of the cytoplasm, not these granules.", "内容物が卵を囲む層を変化させ、さらなる精子の侵入を防ぎ、複数の精子による受精を防ぎます。ほかの選択肢は表層粒の働きと合いません。Dは、卵が栄養を蓄えるので紛らわしいですが、それは細胞質の役割で、表層粒の役割ではありません。", "內容物改變卵周圍的層，阻止更多精子進入，從而防止多於一個精子使卵受精。其他選項描述的功能與皮質顆粒的作用不符。D選項容易混淆，因為卵確實儲存營養物質，但那是細胞質的作用，不是這些顆粒的作用。") },
    { id: "b2-3-q20", type: "mcq", ahl: false, difficulty: 3, ref: "B2.3.1", paper: "1A",
      stem: T("In an early embryo a signalling chemical is highly concentrated at one end and falls to a low concentration at the other end. Cells at the high-concentration end switch on gene X, but cells at the low-concentration end do not. Which conclusion is best supported?", "初期胚で、シグナル化学物質が一端で高濃度、もう一端で低濃度になっている。高濃度側の細胞は遺伝子Xを発現するが、低濃度側の細胞は発現しない。最も支持される結論はどれか。", "在早期胚胎中，一種信號化學物質在一端濃度高，向另一端遞減至低濃度。高濃度一端的細胞開啟基因X，低濃度一端的細胞則不開啟。哪項結論最有證據支持？"),
      options: [
        T("Cells at the low-concentration end have lost gene X.", "低濃度側の細胞は遺伝子Xを失っている。", "低濃度一端的細胞已失去基因X。"),
        T("The position of a cell in the gradient influences which genes it expresses.", "勾配の中での細胞の位置が、どの遺伝子を発現するかに影響する。", "細胞在梯度中的位置影響它表達哪些基因。"),
        T("The cells at the two ends contain different DNA.", "両端の細胞は異なるDNAを持っている。", "兩端的細胞含有不同的DNA。"),
        T("Gene X is only found in the cells at the high-concentration end.", "遺伝子Xは高濃度側の細胞にしかない。", "基因X只存在於高濃度一端的細胞。")
      ],
      answer: 1,
      explanation: T("The data show that expression of gene X depends on the signal concentration, which depends on position. Differentiation works through gene expression, not by loss of genes, so A, C and D wrongly assume that the DNA differs between cells.", "データは、遺伝子Xの発現がシグナルの濃度、つまり位置に依存することを示しています。分化は遺伝子の喪失ではなく遺伝子発現によるので、A・C・Dは細胞間でDNAが異なると誤って仮定しています。", "數據顯示基因X的表達取決於信號濃度，而濃度取決於位置。分化是透過基因表達而非失去基因，所以A、C和D錯誤地假設細胞之間的DNA不同。") },
    { "id": "b2-3-q21", "type": "short", "ahl": false, "difficulty": 3, "ref": "B2.3.6", "paper": "1B", "commandTerm": "Explain", "marks": 5, "data": { "en": "<p>Students placed agar cubes containing an indicator in dilute acid for a fixed time. The acid diffused in from every face and changed the indicator colour. The table shows how much of each cube the acid had reached (illustrative data).</p>\n<table><tr><th>Side of cube (mm)</th><th>Surface area (mm²)</th><th>Volume (mm³)</th><th>Percentage of volume reached by acid</th></tr>\n<tr><td>5</td><td>150</td><td>125</td><td>99</td></tr>\n<tr><td>10</td><td>600</td><td>1000</td><td>78</td></tr>\n<tr><td>20</td><td>2400</td><td>8000</td><td>49</td></tr></table>", "ja": "<p>生徒は、指示薬を含む寒天の立方体を、一定時間、薄い酸の中に入れた。酸はすべての面から拡散して入り、指示薬の色を変えた。表は、各立方体のどれだけの部分に酸が達したかを示している（説明用のデータ）。</p>\n<table><tr><th>立方体の一辺 (mm)</th><th>表面積 (mm²)</th><th>体積 (mm³)</th><th>酸が達した体積の割合 (%)</th></tr>\n<tr><td>5</td><td>150</td><td>125</td><td>99</td></tr>\n<tr><td>10</td><td>600</td><td>1000</td><td>78</td></tr>\n<tr><td>20</td><td>2400</td><td>8000</td><td>49</td></tr></table>", "zh": "<p>學生把含有指示劑的瓊脂立方塊放入稀酸中一段固定時間。酸從每一面擴散進入，並改變了指示劑的顏色。下表顯示酸到達每個立方塊多少部分（說明用數據）。</p>\n<table><tr><th>立方塊邊長 (mm)</th><th>表面積 (mm²)</th><th>體積 (mm³)</th><th>酸到達的體積百分率 (%)</th></tr>\n<tr><td>5</td><td>150</td><td>125</td><td>99</td></tr>\n<tr><td>10</td><td>600</td><td>1000</td><td>78</td></tr>\n<tr><td>20</td><td>2400</td><td>8000</td><td>49</td></tr></table>" }, "stem": { "en": "(a) Calculate the surface area-to-volume ratio of the 20 mm cube. (b) Describe the trend in the percentage of volume reached by the acid. (c) Explain this trend, and explain what it suggests about the maximum size of a living cell. (d) State one reason why the agar cube is only a limited model of a cell.", "ja": "(a) 一辺20 mmの立方体の表面積対体積比を計算せよ。(b) 酸が達した体積の割合の傾向を述べよ。(c) この傾向を説明し、生きた細胞の最大の大きさについて何が示唆されるか説明せよ。(d) 寒天の立方体が細胞のモデルとして限定的である理由を1つ述べよ。", "zh": "(a) 計算邊長20 mm立方塊的表面積與體積比。(b) 描述酸到達的體積百分率的趨勢。(c) 解釋此趨勢，並解釋這對活細胞最大尺寸有何啟示。(d) 指出瓊脂立方塊作為細胞模型的一個局限。" }, "markscheme": [ { "en": "(a) SA:V = 2400 ÷ 8000 = 0.3 : 1", "ja": "(a) SA:V = 2400 ÷ 8000 = 0.3 : 1", "zh": "(a) SA:V = 2400 ÷ 8000 = 0.3 : 1" }, { "en": "(b) The percentage reached falls as the cube gets larger (99% to 78% to 49%)", "ja": "(b) 立方体が大きくなるほど、酸が達した割合は下がる（99% → 78% → 49%）", "zh": "(b) 立方塊愈大，酸到達的百分率愈低（99% → 78% → 49%）" }, { "en": "(c) Larger cubes have a smaller surface area-to-volume ratio (1.2 : 1, 0.6 : 1, 0.3 : 1)", "ja": "(c) 大きい立方体ほど表面積対体積比が小さい（1.2 : 1、0.6 : 1、0.3 : 1）", "zh": "(c) 較大的立方塊表面積與體積比較小（1.2 : 1、0.6 : 1、0.3 : 1）" }, { "en": "(c) Diffusion enters only across the surface but has to supply the whole volume, and the distance to the centre is greater, so the centre is reached more slowly or not at all", "ja": "(c) 拡散は表面からしか入らないのに体積全体に供給しなければならず、中心までの距離も長いので、中心には届くのが遅いか、届かない", "zh": "(c) 擴散只能從表面進入，卻要供應整個體積，而且到中心的距離較遠，所以中心較慢或根本不能到達" }, { "en": "(c) A very large cell would not get enough oxygen/nutrients to its centre (or remove wastes fast enough), so cell size is limited", "ja": "(c) 非常に大きい細胞では、中心に十分な酸素や栄養分が届かず（老廃物も十分速く除去できず）、細胞の大きさには上限がある", "zh": "(c) 非常大的細胞，其中心得不到足夠的氧氣／養分（廢物也不能足夠快排出），所以細胞大小有限制" }, { "en": "(d) Any one: agar does not respire/use up the acid; a real cell has membranes and organelles; real cells are not cubes; real cells use active transport", "ja": "(d) 次のうち1つ：寒天は呼吸せず酸も消費しない／実際の細胞には膜や細胞小器官がある／実際の細胞は立方体ではない／実際の細胞は能動輸送を使う", "zh": "(d) 任何一項：瓊脂不進行呼吸，也不消耗酸；真實細胞有膜和細胞器；真實細胞不是立方體；真實細胞會使用主動運輸" } ], "modelAnswer": { "en": "(a) 2400 ÷ 8000 = 0.3 : 1. (b) As the cube gets bigger the percentage reached by acid falls: 99%, 78%, then 49%. (c) The surface area-to-volume ratio falls from 1.2 : 1 to 0.3 : 1. Acid enters only through the surface but must supply the whole volume, and the distance to the centre increases. A very large living cell would therefore not receive oxygen or nutrients fast enough at its centre, so cell size is limited. (d) Agar does not respire or use up the acid, unlike a living cell.", "ja": "(a) 2400 ÷ 8000 = 0.3 : 1。(b) 立方体が大きくなると酸が達した割合は下がる：99%、78%、49%。(c) 表面積対体積比は1.2 : 1から0.3 : 1に下がる。酸は表面からしか入らないが体積全体に供給しなければならず、中心までの距離も増える。したがって非常に大きい生きた細胞では、中心に酸素や栄養分が十分な速さで届かず、細胞の大きさには限界がある。(d) 寒天は、生きた細胞と違って、呼吸もしないし酸も消費しない。", "zh": "(a) 2400 ÷ 8000 = 0.3 : 1。(b) 立方塊愈大，酸到達的百分率愈低：99%、78%，然後49%。(c) 表面積與體積比由1.2 : 1降至0.3 : 1。酸只能從表面進入，卻要供應整個體積，而且到中心的距離增加。所以非常大的活細胞，其中心得不到足夠快的氧氣或養分，因此細胞大小受限制。(d) 與活細胞不同，瓊脂不進行呼吸，也不消耗酸。" } },
    { "id": "b2-3-q22", "type": "multi", "ahl": false, "difficulty": 2, "ref": "B2.3.4", "paper": "1A", "stem": { "en": "Which statements about the potency of stem cells are correct? Select all that apply.", "ja": "幹細胞の分化能について正しい記述はどれか。当てはまるものをすべて選べ。", "zh": "關於幹細胞的分化潛能，哪些陳述正確？選出所有適用的答案。" }, "options": [ { "en": "A cell from a very early animal embryo that can form a whole organism is totipotent.", "ja": "個体全体を形成できる、ごく初期の動物胚の細胞は全能性である。", "zh": "能形成完整生物體的極早期動物胚胎細胞是全能的。" }, { "en": "Pluripotent cells can divide and can form most or all body cell types.", "ja": "多能性の細胞は分裂でき、体のほとんどまたはすべての細胞の種類を形成できる。", "zh": "多能細胞能分裂，並能形成身體大部分或所有細胞類型。" }, { "en": "Multipotent bone marrow stem cells can normally form nerve cells as well as blood cells.", "ja": "多分化能の骨髄幹細胞は、通常、血球のほか神経細胞も形成できる。", "zh": "專能的骨髓幹細胞通常除了血細胞外也能形成神經細胞。" }, { "en": "As an embryo develops, the range of cell types a cell can form usually becomes narrower.", "ja": "胚が発生するにつれて、細胞が形成できる細胞の種類の範囲は通常狭くなる。", "zh": "隨着胚胎發育，細胞能形成的細胞類型範圍通常會變窄。" } ], "answer": [ 0, 1, 3 ], "explanation": { "en": "A, B and D are correct: potency narrows from totipotent to pluripotent to multipotent, and all three can divide. C is wrong because a multipotent cell makes only a limited range of related cell types. Bone marrow stem cells make blood cells, not nerve cells.", "ja": "A、B、Dが正しい。分化能は全能性、多能性、多分化能の順に狭まり、3つとも分裂できる。Cは誤り。多分化能の細胞が形成できるのは、関連した限られた範囲の細胞だけである。骨髄幹細胞は血球をつくるが、神経細胞はつくらない。", "zh": "A、B和D正確：分化潛能由全能、多能到專能逐步收窄，三者都能分裂。C錯誤，因為專能細胞只能形成有限範圍內有關連的細胞類型。骨髓幹細胞製造血細胞，而不是神經細胞。" } },
    { "id": "b2-3-q23", "type": "short", "ahl": false, "difficulty": 3, "ref": "B2.3.3", "paper": "2", "commandTerm": "Explain", "marks": 4, "stem": { "en": "Red blood cells live for about 120 days and cannot divide. Explain how stem cells in bone marrow allow the body to keep a steady supply of red blood cells for many years.", "ja": "赤血球の寿命は約120日で、分裂できない。骨髄の幹細胞によって、体が何年にもわたって赤血球を安定して供給し続けられる仕組みを説明せよ。", "zh": "紅血球壽命約120日，而且不能分裂。解釋骨髓中的幹細胞如何令身體能多年持續穩定地供應紅血球。" }, "markscheme": [ { "en": "Stem cells in the bone marrow (niche) can divide endlessly / self-renew", "ja": "骨髄（ニッチ）の幹細胞は無限に分裂できる／自己複製できる", "zh": "骨髓（幹細胞微環境）中的幹細胞能無限分裂／自我更新" }, { "en": "Some daughter cells stay as stem cells, so the supply of stem cells is not used up", "ja": "娘細胞の一部は幹細胞のまま残るので、幹細胞の供給が尽きない", "zh": "部分子細胞維持為幹細胞，所以幹細胞的供應不會耗盡" }, { "en": "Other daughter cells differentiate (along a pathway) into red blood cells / replace worn-out red blood cells", "ja": "ほかの娘細胞は（ある経路に沿って）赤血球に分化し、古くなった赤血球を置き換える", "zh": "其他子細胞（沿某途徑）分化為紅血球／取代衰老的紅血球" }, { "en": "Signals from the niche control whether the stem cells are maintained or promoted to divide and differentiate, matching production to the need", "ja": "ニッチからのシグナルが、幹細胞を維持するか、分裂と分化を促すかを制御し、産生量を必要量に合わせる", "zh": "幹細胞微環境的信號控制幹細胞是被維持，還是被促進分裂和分化，使產量配合需要" }, { "en": "Bone marrow stem cells are multipotent, so they can also make other blood cells (accept)", "ja": "骨髄幹細胞は多分化能なので、ほかの血球もつくれる（可）", "zh": "骨髓幹細胞是專能的，所以也能製造其他血細胞（接受）" } ], "modelAnswer": { "en": "Stem cells in the bone marrow niche can divide endlessly, so they never run out. When a stem cell divides, some daughter cells remain stem cells while others differentiate into red blood cells. These new red blood cells replace the old ones that wear out after about 120 days. Signals from the niche decide whether the stem cells stay as stem cells or divide and differentiate, so the number of new cells matches the body's need.", "ja": "骨髄ニッチの幹細胞は無限に分裂できるので、尽きることがない。幹細胞が分裂すると、娘細胞の一部は幹細胞のまま残り、ほかは赤血球に分化する。この新しい赤血球が、約120日で古くなった赤血球を置き換える。ニッチからのシグナルが、幹細胞を幹細胞のまま保つか、分裂と分化をさせるかを決めるので、新しい細胞の数は体の必要量に合う。", "zh": "骨髓幹細胞微環境中的幹細胞能無限分裂，所以不會耗盡。幹細胞分裂時，部分子細胞維持為幹細胞，其他則分化為紅血球。這些新紅血球取代約120日後衰老的舊紅血球。幹細胞微環境的信號決定幹細胞是維持原狀，還是分裂和分化，因此新細胞的數量配合身體的需要。" } },
    { "id": "b2-3-q24", "type": "short", "ahl": true, "difficulty": 2, "ref": "B2.3.7", "paper": "1B", "commandTerm": "Deduce", "marks": 4, "data": { "en": "<p>Three models of the membrane facing the lumen of a kidney tubule were compared (illustrative data).</p>\n<table><tr><th>Model</th><th>Membrane area facing the lumen (µm²)</th><th>Glucose taken up per minute (arbitrary units)</th></tr>\n<tr><td>No microvilli</td><td>100</td><td>20</td></tr>\n<tr><td>Few microvilli</td><td>400</td><td>80</td></tr>\n<tr><td>Many microvilli</td><td>1000</td><td>200</td></tr></table>", "ja": "<p>腎臓の尿細管の管腔に面する膜について、3つのモデルを比較した（説明用のデータ）。</p>\n<table><tr><th>モデル</th><th>管腔に面する膜の面積 (µm²)</th><th>1分間に取り込まれるグルコース（任意単位）</th></tr>\n<tr><td>微絨毛なし</td><td>100</td><td>20</td></tr>\n<tr><td>微絨毛が少ない</td><td>400</td><td>80</td></tr>\n<tr><td>微絨毛が多い</td><td>1000</td><td>200</td></tr></table>", "zh": "<p>比較了腎小管面向管腔的膜的三個模型（說明用數據）。</p>\n<table><tr><th>模型</th><th>面向管腔的膜面積 (µm²)</th><th>每分鐘吸收的葡萄糖（任意單位）</th></tr>\n<tr><td>沒有微絨毛</td><td>100</td><td>20</td></tr>\n<tr><td>微絨毛較少</td><td>400</td><td>80</td></tr>\n<tr><td>微絨毛很多</td><td>1000</td><td>200</td></tr></table>" }, "stem": { "en": "(a) Calculate the glucose taken up per µm² of membrane for each model. (b) Deduce the relationship between membrane area and glucose uptake. (c) Suggest why this relationship occurs.", "ja": "(a) 各モデルについて、膜1 µm²あたりに取り込まれるグルコースを計算せよ。(b) 膜の面積とグルコースの取り込みの関係を推論せよ。(c) この関係が生じる理由を示唆せよ。", "zh": "(a) 計算每個模型每 µm² 膜所吸收的葡萄糖。(b) 推斷膜面積與葡萄糖吸收量的關係。(c) 提出這種關係出現的原因。" }, "markscheme": [ { "en": "(a) 20 ÷ 100 = 0.2; 80 ÷ 400 = 0.2; 200 ÷ 1000 = 0.2 (units per µm²)", "ja": "(a) 20 ÷ 100 = 0.2；80 ÷ 400 = 0.2；200 ÷ 1000 = 0.2（単位/µm²）", "zh": "(a) 20 ÷ 100 = 0.2；80 ÷ 400 = 0.2；200 ÷ 1000 = 0.2（單位／µm²）" }, { "en": "(b) Uptake is directly proportional to membrane area (same uptake per µm²)", "ja": "(b) 取り込みは膜の面積に比例する（1 µm²あたりの取り込みは同じ）", "zh": "(b) 吸收量與膜面積成正比（每 µm² 的吸收量相同）" }, { "en": "(c) More membrane area has room for more transport proteins (carriers/channels) for glucose", "ja": "(c) 膜の面積が広いほど、グルコースの輸送タンパク質（運搬体／チャネル）をより多く置ける", "zh": "(c) 膜面積愈大，可容納愈多葡萄糖運輸蛋白（載體／通道）" }, { "en": "(c) So more glucose molecules can be reabsorbed at the same time, so the rate of uptake is higher", "ja": "(c) そのため、同時により多くのグルコース分子を再吸収でき、取り込み速度が速くなる", "zh": "(c) 所以同一時間可重吸收更多葡萄糖分子，吸收速率較高" } ], "modelAnswer": { "en": "(a) The uptake per µm² is 0.2 for all three models. (b) Glucose uptake is directly proportional to the membrane area. (c) A larger area of membrane has room for more transport proteins, so more glucose can cross at the same time and the rate of reabsorption is higher.", "ja": "(a) 1 µm²あたりの取り込みは、3つのモデルすべてで0.2である。(b) グルコースの取り込みは膜の面積に比例する。(c) 膜の面積が広いほど輸送タンパク質をより多く置けるので、同時により多くのグルコースが膜を通過でき、再吸収の速度が速くなる。", "zh": "(a) 三個模型每 µm² 的吸收量都是0.2。(b) 葡萄糖吸收量與膜面積成正比。(c) 較大的膜面積可容納更多運輸蛋白，所以同一時間可有更多葡萄糖通過，重吸收速率較高。" } },
    { "id": "b2-3-q25", "type": "mcq", "ahl": true, "difficulty": 3, "ref": "B2.3.10", "paper": "1A", "stem": { "en": "A man's sperm have a normal acrosome, a normal haploid nucleus and a normal flagellum, but very few mitochondria in the midpiece. Which is the most likely effect on the sperm?", "ja": "ある男性の精子は、先体、一倍体の核、べん毛は正常だが、中片部のミトコンドリアが非常に少ない。精子に最も起こりやすい影響はどれか。", "zh": "某男子的精子頂體、單倍體細胞核和鞭毛都正常，但中段的線粒體非常少。對精子最可能有甚麼影響？" }, "options": [ { "en": "The sperm cannot digest the layers around the egg.", "ja": "精子が卵の周りの層を消化できない。", "zh": "精子不能消化卵細胞外的各層。" }, { "en": "The sperm swim poorly because less ATP is available for the flagellum.", "ja": "べん毛に使えるATPが少ないため、精子の泳ぎが悪くなる。", "zh": "由於供鞭毛使用的 ATP 較少，精子游動能力差。" }, { "en": "The sperm have the wrong number of chromosomes.", "ja": "精子の染色体数が正しくなくなる。", "zh": "精子的染色體數目不正確。" }, { "en": "The egg cannot release its cortical granules.", "ja": "卵が表層粒を放出できなくなる。", "zh": "卵細胞不能釋出皮質顆粒。" } ], "answer": 1, "explanation": { "en": "Mitochondria in the midpiece make the ATP that powers the flagellum, so fewer mitochondria means less ATP and weaker swimming. The acrosome (A) and the nucleus (C) were stated to be normal. Cortical granules (D) belong to the egg, not the sperm.", "ja": "中片部のミトコンドリアは、べん毛を動かすATPをつくる。したがってミトコンドリアが少ないとATPが減り、泳ぎが弱くなる。先体（A）と核（C）は正常だと述べられている。表層粒（D）は精子ではなく卵のものである。", "zh": "中段的線粒體製造驅動鞭毛的 ATP，所以線粒體少即 ATP 少，游動能力較弱。頂體（A）和細胞核（C）已說明是正常的。皮質顆粒（D）屬於卵細胞，不屬於精子。" } }
  ]
});
})();
