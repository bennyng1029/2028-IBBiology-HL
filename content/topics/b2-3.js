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
      explanation: T("The data show that expression of gene X depends on the signal concentration, which depends on position. Differentiation works through gene expression, not by loss of genes, so A, C and D wrongly assume that the DNA differs between cells.", "データは、遺伝子Xの発現がシグナルの濃度、つまり位置に依存することを示しています。分化は遺伝子の喪失ではなく遺伝子発現によるので、A・C・Dは細胞間でDNAが異なると誤って仮定しています。", "數據顯示基因X的表達取決於信號濃度，而濃度取決於位置。分化是透過基因表達而非失去基因，所以A、C和D錯誤地假設細胞之間的DNA不同。") }
  ]
});
})();
