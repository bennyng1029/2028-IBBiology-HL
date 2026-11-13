/* A2.2 Cell structure — SL + AHL (A2.2.12–14 are AHL). Content written from the IB guide (first assessment 2025). */
(function () {
  const T = (en, ja, zh) => ({ en, ja, zh });
  const sections = [
    {
      ref: "A2.2.1", ahl: false,
      heading: T("Cells: the basic structural unit of all living organisms", "細胞：すべての生物の基本的な構造単位", "細胞：所有生物的基本結構單位"),
      body: T(
        `<p><strong>Cell theory</strong> says that all living organisms are made of one or more cells, and that cells are the basic structural unit of life. (It also says new cells come from existing cells.)</p>
<div class="note"><strong>Nature of science: deduction.</strong> <em>Deductive reasoning</em> uses a general theory to predict a specific case. If the cell theory is true, then a newly discovered organism can be <strong>predicted</strong> to consist of one or more cells. If a scientist then found an organism with no cells, this would challenge the theory. In this way, a theory gives predictions that can be tested.</div>`,
        `<p><strong>細胞説</strong> (cell theory) は、すべての生物は1つ以上の細胞からできており、細胞は生命の基本的な構造単位であるという考えです。（新しい細胞は既存の細胞から生じる、という内容も含みます。）</p>
<div class="note"><strong>科学の本質 (NOS)：演繹。</strong><em>演繹的推論</em> (deductive reasoning) は、一般的な理論から個別の事例を予測します。細胞説が正しければ、新しく発見された生物は1つ以上の細胞からできていると<strong>予測</strong>できます。もし細胞のない生物が見つかれば、理論に疑問が生じます。このように、理論は検証可能な予測を生みます。</div>`,
        `<p><strong>細胞學說</strong> (cell theory) 指出：所有生物由一個或多個細胞構成，細胞是生命的基本結構單位。（學說也指出新細胞來自已存在的細胞。）</p>
<div class="note"><strong>科學本質 (NOS)：演繹。</strong><em>演繹推理</em> (deductive reasoning) 是由一般的理論推測具體個案。如果細胞學說正確，就可以<strong>預測</strong>新發現的生物由一個或多個細胞構成。若找到沒有細胞的生物，就會挑戰這個學說。理論就是這樣提供可檢驗的預測。</div>`)
    },
    {
      ref: "A2.2.2", ahl: false,
      heading: T("Microscopy skills: magnification, scale bars and measurement", "顕微鏡の技能：倍率・スケールバー・測定", "顯微鏡技能：放大率、比例尺與量度"),
      widget: "magnification",
      body: T(
        `<p><strong>Skills you should have practised</strong> with a light microscope: making a <strong>temporary mount</strong> of cells or tissue; <strong>staining</strong> (a stain makes parts of the cell easier to see); <strong>focusing</strong> with the coarse and fine adjustments; <strong>measuring sizes</strong> with an eyepiece graticule; <strong>calculating actual size and magnification</strong>; <strong>producing a scale bar</strong>; and taking photographs.</p>
<ul>
<li><strong>Temporary mount.</strong> Put a thin piece of specimen in a drop of water or stain on a slide. Lower the coverslip at an angle so air bubbles do not get trapped.</li>
<li><strong>Focusing.</strong> Start with the lowest-power objective lens and use the coarse adjustment to find the specimen. Sharpen with the fine adjustment. When you change to a stronger lens, use only the fine adjustment.</li>
<li><strong>Eyepiece graticule.</strong> A tiny ruler in the eyepiece. Its divisions have no real unit until you <strong>calibrate</strong> it against a <strong>stage micrometer</strong> (a slide with a ruler of known size) for each objective lens. Example: if 40 graticule divisions match 0.40 mm on the stage micrometer, then 1 division = 0.01 mm = 10 µm. Then actual size = number of divisions × 10 µm.</li>
<li><strong>Total magnification</strong> of a light microscope = eyepiece magnification × objective magnification (e.g. 10 × 40 = ×400).</li>
</ul>
<h4>Magnification, image size and actual size</h4>
<p><strong>magnification (M) = size of image (I) ÷ actual size (A)</strong>, so I = A × M and A = I ÷ M.</p>
<p><strong>Always convert to the same unit first.</strong> 1 mm = 1000 µm; 1 µm = 1000 nm. So 1 mm = 1 000 000 nm. Magnification has no unit.</p>
<p><strong>Worked example 1 (find magnification).</strong> A cell is 45 mm long in a photograph. Its actual length is 30 µm = 0.030 mm. M = 45 ÷ 0.030 = <strong>×1500</strong>.</p>
<p><strong>Worked example 2 (find actual size from magnification).</strong> A drawing is ×400. A cell in the drawing is 60 mm long. A = 60 ÷ 400 = 0.15 mm = <strong>150 µm</strong>.</p>
<p><strong>Worked example 3 (scale bar).</strong> A micrograph has a scale bar labelled “5 µm” that measures 25 mm with a ruler. Magnification = 25 mm ÷ 5 µm = 25 mm ÷ 0.005 mm = <strong>×5000</strong>. A mitochondrion measures 12 mm. Actual length = 12 ÷ 5000 = 0.0024 mm = <strong>2.4 µm</strong>. (Shortcut: 12 mm is 12/25 of the bar, so 12/25 × 5 µm = 2.4 µm.)</p>
<p><strong>Making your own scale bar.</strong> Decide the length you want it to represent, say 10 µm. On a drawing at ×2000 the bar must be 10 µm × 2000 = 20 000 µm = <strong>20 mm</strong> long. Label it “10 µm”.</p>
<div class="note"><strong>Nature of science.</strong> Measuring with instruments (a graticule, a ruler) is a form of <strong>quantitative observation</strong>.</div>`,
        `<p><strong>光学顕微鏡で身につけるべき技能</strong>：細胞や組織の<strong>一時プレパラート</strong> (temporary mount) の作成、<strong>染色</strong> (staining：細胞の部分を見やすくする)、粗動ねじ・微動ねじによる<strong>ピント合わせ</strong>、<strong>接眼ミクロメーター</strong> (eyepiece graticule) による<strong>大きさの測定</strong>、<strong>実際の大きさと倍率の計算</strong>、<strong>スケールバー</strong>の作成、写真撮影。</p>
<ul>
<li><strong>一時プレパラート。</strong>スライドガラスの水滴または染色液の中に薄い試料を置き、気泡が入らないようカバーガラスを斜めから下ろします。</li>
<li><strong>ピント合わせ。</strong>最も低倍率の対物レンズで粗動ねじを使って試料を見つけ、微動ねじで合わせます。高倍率に変えるときは微動ねじだけを使います。</li>
<li><strong>接眼ミクロメーター。</strong>接眼レンズ内の小さな物差しです。<strong>対物ミクロメーター</strong> (stage micrometer：大きさが既知の物差しのスライド) を使い、対物レンズごとに<strong>較正</strong> (calibrate) するまで、目盛りは実際の単位をもちません。例：接眼ミクロメーターの40目盛りが対物ミクロメーターの0.40 mmと一致したなら、1目盛り = 0.01 mm = 10 µmです。実際の大きさ = 目盛り数 × 10 µm。</li>
<li>光学顕微鏡の<strong>総合倍率</strong> = 接眼レンズの倍率 × 対物レンズの倍率（例：10 × 40 = ×400）。</li>
</ul>
<h4>倍率・像の大きさ・実際の大きさ</h4>
<p><strong>倍率 (M) = 像の大きさ (I) ÷ 実際の大きさ (A)</strong>。したがって I = A × M、A = I ÷ M です。</p>
<p><strong>必ず先に単位をそろえます。</strong>1 mm = 1000 µm、1 µm = 1000 nm、つまり1 mm = 1 000 000 nm。倍率に単位はありません。</p>
<p><strong>例題1（倍率を求める）。</strong>写真で細胞の長さが45 mm。実際の長さは30 µm = 0.030 mm。M = 45 ÷ 0.030 = <strong>×1500</strong>。</p>
<p><strong>例題2（倍率から実際の大きさを求める）。</strong>×400の図で、細胞の長さが60 mm。A = 60 ÷ 400 = 0.15 mm = <strong>150 µm</strong>。</p>
<p><strong>例題3（スケールバー）。</strong>顕微鏡写真のスケールバーが「5 µm」で、定規で25 mm。倍率 = 25 mm ÷ 5 µm = 25 mm ÷ 0.005 mm = <strong>×5000</strong>。ミトコンドリアの長さが12 mm。実際の長さ = 12 ÷ 5000 = 0.0024 mm = <strong>2.4 µm</strong>。（近道：12 mmはバーの12/25なので、12/25 × 5 µm = 2.4 µm。）</p>
<p><strong>スケールバーを自分で作る。</strong>表したい長さ、たとえば10 µmを決めます。×2000の図では、バーの長さは10 µm × 2000 = 20 000 µm = <strong>20 mm</strong>。「10 µm」と書き込みます。</p>
<div class="note"><strong>科学の本質 (NOS)。</strong>器具（ミクロメーターや定規）を使った測定は、<strong>定量的観察</strong> (quantitative observation) の一種です。</div>`,
        `<p><strong>你應該用光學顯微鏡練習的技能</strong>：製作細胞或組織的<strong>臨時裝片</strong> (temporary mount)；<strong>染色</strong> (staining，令細胞的部分更易看見)；用粗調和細調螺旋<strong>對焦</strong>；用<strong>目鏡測微尺</strong> (eyepiece graticule) <strong>量度大小</strong>；<strong>計算實際大小和放大率</strong>；<strong>製作比例尺</strong> (scale bar)；以及拍攝照片。</p>
<ul>
<li><strong>臨時裝片。</strong>把薄的標本放在載玻片上的一滴水或染色劑中，蓋玻片要斜着放下，以免困住氣泡。</li>
<li><strong>對焦。</strong>先用最低倍數的物鏡，以粗調螺旋找到標本，再用細調螺旋對焦。轉用較高倍數物鏡時，只可用細調螺旋。</li>
<li><strong>目鏡測微尺。</strong>目鏡內的一把小尺。要用<strong>載物臺測微尺</strong> (stage micrometer，有已知長度刻度的載玻片)，對每個物鏡進行<strong>校準</strong> (calibrate)，它的刻度才有實際單位。例：若目鏡測微尺 40 格對準載物臺測微尺的 0.40 mm，則 1 格 = 0.01 mm = 10 µm。實際大小 = 格數 × 10 µm。</li>
<li>光學顯微鏡的<strong>總放大率</strong> = 目鏡放大率 × 物鏡放大率（例：10 × 40 = ×400）。</li>
</ul>
<h4>放大率、影像大小與實際大小</h4>
<p><strong>放大率 (M) = 影像大小 (I) ÷ 實際大小 (A)</strong>，所以 I = A × M，A = I ÷ M。</p>
<p><strong>計算前必須先把單位統一。</strong>1 mm = 1000 µm；1 µm = 1000 nm，即 1 mm = 1 000 000 nm。放大率沒有單位。</p>
<p><strong>例題 1（求放大率）。</strong>相片中一個細胞長 45 mm，實際長度為 30 µm = 0.030 mm。M = 45 ÷ 0.030 = <strong>×1500</strong>。</p>
<p><strong>例題 2（由放大率求實際大小）。</strong>一幅 ×400 的繪圖中，細胞長 60 mm。A = 60 ÷ 400 = 0.15 mm = <strong>150 µm</strong>。</p>
<p><strong>例題 3（比例尺）。</strong>顯微照片的比例尺標示「5 µm」，用直尺量得 25 mm。放大率 = 25 mm ÷ 5 µm = 25 mm ÷ 0.005 mm = <strong>×5000</strong>。一個線粒體量得 12 mm。實際長度 = 12 ÷ 5000 = 0.0024 mm = <strong>2.4 µm</strong>。（捷徑：12 mm 是比例尺的 12/25，所以 12/25 × 5 µm = 2.4 µm。）</p>
<p><strong>自製比例尺。</strong>先決定它代表的長度，例如 10 µm。在 ×2000 的繪圖上，比例尺長度須為 10 µm × 2000 = 20 000 µm = <strong>20 mm</strong>，並標示「10 µm」。</p>
<div class="note"><strong>科學本質 (NOS)。</strong>用儀器（測微尺、直尺）量度是一種<strong>定量觀察</strong> (quantitative observation)。</div>`),
      examTip: T("Show every step: convert units, write the formula, substitute, give the answer WITH its unit (or ×, for magnification). Measure scale bars and structures along the same line, in mm.",
        "計算過程をすべて示します。単位をそろえ、式を書き、代入し、答えに単位をつけます（倍率は×）。スケールバーと構造は同じ向きに、mmで測ります。",
        "每一步都要寫出：統一單位、寫公式、代入、答案附單位（放大率用 ×）。比例尺和結構要沿同一方向、以 mm 量度。")
    },
    {
      ref: "A2.2.3", ahl: false,
      heading: T("Developments in microscopy", "顕微鏡技術の発展", "顯微鏡技術的發展"),
      body: T(
        `<p>First, two ideas. <strong>Magnification</strong> makes an image bigger. <strong>Resolution</strong> is how well a microscope shows two points that are very close together as <em>separate</em>. A very high magnification is useless if the resolution is poor, because the image is just a bigger blur.</p>
<table>
<tr><th>Technique</th><th>What it is</th><th>Advantages</th></tr>
<tr><td><strong>Electron microscopy</strong></td><td>Uses a beam of electrons instead of light. Specimens are in a vacuum and stained with heavy metals.</td><td>Electrons have a much shorter wavelength than light, giving <strong>much higher resolution</strong> and so useful magnification far beyond a light microscope. It shows the <em>ultrastructure</em> of cells (organelles, ribosomes, membranes). (Limits: the specimen is dead and preparation can cause artefacts.)</td></tr>
<tr><td><strong>Freeze fracture</strong></td><td>A sample is frozen quickly and then broken open. The break often runs through the middle of a membrane, between the two layers of the bilayer. The exposed surfaces are examined in an electron microscope.</td><td>Shows the <strong>inside of membranes</strong>, including the proteins embedded in them.</td></tr>
<tr><td><strong>Cryogenic electron microscopy (cryo-EM)</strong></td><td>Samples are frozen so rapidly that water forms a glass-like ice instead of crystals, and are examined while frozen.</td><td>Preserves molecules and structures close to their <strong>natural shape</strong>, with no need for staining or chemical fixing. Can show the 3-D structure of large molecules such as proteins and viruses.</td></tr>
<tr><td><strong>Fluorescent stains and immunofluorescence</strong> (light microscopy)</td><td>A fluorescent dye glows when lit with light of a particular colour. In <strong>immunofluorescence</strong>, an <strong>antibody</strong> carrying a fluorescent dye binds to one specific protein.</td><td>Shows <strong>where a particular structure or protein is</strong> in a cell, because only the target glows. Different targets can be given different colours.</td></tr>
</table>`,
        `<p>まず2つの概念です。<strong>倍率</strong> (magnification) は像を大きくすることです。<strong>分解能</strong> (resolution) は、非常に近い2点を<em>別々のもの</em>として見分けられる能力です。分解能が低いと、倍率を上げても像がぼやけて大きくなるだけです。</p>
<table>
<tr><th>技術</th><th>内容</th><th>利点</th></tr>
<tr><td><strong>電子顕微鏡</strong> (electron microscopy)</td><td>光の代わりに電子線を使います。試料は真空中に置き、重金属で染色します。</td><td>電子の波長は光よりずっと短いため、<strong>分解能がはるかに高く</strong>、光学顕微鏡よりずっと高い有効倍率が得られます。細胞の<em>微細構造</em>（細胞小器官・リボソーム・膜）が見えます。（限界：試料は死んでおり、調製でアーティファクトが生じることがある。）</td></tr>
<tr><td><strong>凍結割断法</strong> (freeze fracture)</td><td>試料を急速に凍結してから割ります。割れ目は膜の二重層の2つの層の間を通ることが多く、露出した面を電子顕微鏡で観察します。</td><td>膜の<strong>内部</strong>（埋め込まれたタンパク質を含む）が見えます。</td></tr>
<tr><td><strong>クライオ電子顕微鏡</strong> (cryogenic electron microscopy, cryo-EM)</td><td>水が結晶ではなくガラス状の氷になるほど急速に試料を凍結し、凍結したまま観察します。</td><td>染色や化学固定が不要で、分子や構造を<strong>自然に近い形</strong>で保てます。タンパク質やウイルスなど大きな分子の3次元構造を示せます。</td></tr>
<tr><td><strong>蛍光染色と免疫蛍光法</strong> (fluorescent stains, immunofluorescence)（光学顕微鏡）</td><td>蛍光色素は特定の色の光を当てると光ります。<strong>免疫蛍光法</strong>では、蛍光色素をつけた<strong>抗体</strong>が特定の1種類のタンパク質に結合します。</td><td>標的だけが光るので、特定の構造やタンパク質が<strong>細胞のどこにあるか</strong>が分かります。標的ごとに色を変えられます。</td></tr>
</table>`,
        `<p>先認識兩個概念：<strong>放大率</strong> (magnification) 令影像變大；<strong>解像力／解像度</strong> (resolution) 是顯微鏡把非常接近的兩點分辨為<em>兩個獨立的點</em>的能力。解像度差時，放大率再高也只是把模糊的影像放大。</p>
<table>
<tr><th>技術</th><th>內容</th><th>優點</th></tr>
<tr><td><strong>電子顯微鏡</strong> (electron microscopy)</td><td>用電子束代替光。標本置於真空中，並以重金屬染色。</td><td>電子的波長比光短得多，所以<strong>解像度高得多</strong>，有效放大率遠高於光學顯微鏡。可顯示細胞的<em>超微結構</em>（胞器、核糖體、膜）。（限制：標本已死亡，製備過程可能產生人工假象。）</td></tr>
<tr><td><strong>冷凍斷裂</strong> (freeze fracture)</td><td>把樣本迅速冷凍後折斷。斷裂常沿膜雙層的兩層之間發生，再用電子顯微鏡觀察暴露的表面。</td><td>顯示<strong>膜的內部</strong>，包括嵌入的蛋白質。</td></tr>
<tr><td><strong>低溫電子顯微鏡</strong> (cryogenic electron microscopy, cryo-EM)</td><td>把樣本急速冷凍至水形成玻璃狀冰而非晶體，並在冷凍狀態下觀察。</td><td>不用染色或化學固定，可保持分子和結構接近<strong>天然形態</strong>。可顯示蛋白質和病毒等大分子的立體結構。</td></tr>
<tr><td><strong>螢光染色與免疫螢光</strong> (fluorescent stains, immunofluorescence)（光學顯微鏡）</td><td>螢光染料受特定顏色的光照射時會發光。<strong>免疫螢光</strong>是用帶有螢光染料的<strong>抗體</strong>，與某一種特定蛋白質結合。</td><td>只有目標發光，所以可顯示某結構或蛋白質<strong>在細胞中的位置</strong>。不同目標可以用不同顏色標示。</td></tr>
</table>`),
      examTip: T("Name the technique and give its specific advantage. “Higher resolution” (not just “higher magnification”) is the key advantage of the electron microscope.",
        "技術名と、その具体的な利点を書きます。電子顕微鏡の鍵は「倍率が高い」ではなく「分解能が高い」ことです。",
        "要寫出技術名稱及其特定優點。電子顯微鏡的關鍵優點是「解像度高」，而不只是「放大率高」。")
    },
    {
      ref: "A2.2.4", ahl: false,
      heading: T("Structures common to cells in all living organisms", "すべての生物の細胞に共通する構造", "所有生物細胞共有的結構"),
      body: T(
        `<p>Typical cells in all organisms have three features in common. <em>Why</em> each is needed:</p>
<ul>
<li><strong>DNA as genetic material.</strong> DNA stores the instructions for making the cell's proteins. It can be copied and passed on when the cell divides, so cells can grow, repair themselves and reproduce.</li>
<li><strong>Cytoplasm made mainly of water.</strong> Water is a good solvent, so the chemical reactions of metabolism take place in solution in the cytoplasm. Substances can also move around in it.</li>
<li><strong>A plasma membrane made of lipids.</strong> The lipid (phospholipid) bilayer separates the cell contents from the outside. It acts as a barrier, controls which substances enter and leave, and so helps the cell keep its internal conditions different from the surroundings.</li>
</ul>`,
        `<p>すべての生物の典型的な細胞には、共通する3つの特徴があります。それぞれが<em>なぜ</em>必要かも理解しましょう。</p>
<ul>
<li><strong>遺伝物質としてのDNA。</strong>DNAは細胞のタンパク質をつくる情報を保存します。複製して細胞分裂のときに伝えられるので、細胞は成長・修復・増殖できます。</li>
<li><strong>主に水からなる細胞質</strong> (cytoplasm)。水は優れた溶媒なので、代謝の化学反応は細胞質中の溶液内で起こります。物質も細胞質中を移動できます。</li>
<li><strong>脂質でできた細胞膜</strong> (plasma membrane)。脂質（リン脂質）二重層が細胞の内容物を外部から隔てます。障壁として働き、出入りする物質を制御して、細胞内の条件を周囲と違うものに保ちます。</li>
</ul>`,
        `<p>所有生物的典型細胞都有三項共同特徵，也要明白<em>為何</em>需要它們：</p>
<ul>
<li><strong>以 DNA 作遺傳物質。</strong>DNA 儲存製造細胞蛋白質的指令，可以被複製並在細胞分裂時傳下去，使細胞能生長、修復和繁殖。</li>
<li><strong>主要由水組成的細胞質</strong> (cytoplasm)。水是良好的溶劑，所以新陳代謝的化學反應在細胞質的溶液中進行；物質也可在其中移動。</li>
<li><strong>由脂質構成的質膜</strong> (plasma membrane)。脂質（磷脂）雙層把細胞內容物與外界分隔，作為屏障，控制物質進出，使細胞能保持與周圍不同的內部環境。</li>
</ul>`)
    },
        {
      ref: "A2.2.5", ahl: false,
      heading: T("Prokaryote cell structure", "原核細胞の構造", "原核細胞的結構"),
      widget: "cell-compare-pro",
      body: T(
        `<p><strong>Prokaryotes</strong> (bacteria) have no nucleus and no membrane-bound organelles. The type you need is the cell of <strong>Gram-positive eubacteria</strong> such as <em>Bacillus</em> and <em>Staphylococcus</em>. Components to know:</p>
<table>
<tr><th>Component</th><th>Description and function</th></tr>
<tr><td><strong>Cell wall</strong></td><td>Outside the plasma membrane. Gives the cell its shape, protects it and stops it bursting by taking in too much water.</td></tr>
<tr><td><strong>Plasma membrane</strong></td><td>Lipid bilayer just inside the wall. Controls what enters and leaves the cell.</td></tr>
<tr><td><strong>Cytoplasm</strong></td><td>Mainly water. Site of metabolic reactions. Has no membrane-bound organelles.</td></tr>
<tr><td><strong>Naked DNA in a loop</strong></td><td>One circular DNA molecule, “naked” because it is <em>not</em> wrapped around histone proteins. It lies in a region called the <strong>nucleoid</strong>, which is <em>not</em> surrounded by a membrane. It carries the genetic information.</td></tr>
<tr><td><strong>70S ribosomes</strong></td><td>Make proteins. “70S” describes their size; they are smaller than the 80S ribosomes of eukaryotes.</td></tr>
</table>
<p>Prokaryote cells vary. You are <em>not</em> required to know the variations, such as the lack of cell walls in phytoplasmas and mycoplasmas. Just appreciate that prokaryote structure is not identical in every species.</p>`,
        `<p><strong>原核生物</strong> (prokaryote、細菌) には核も膜で囲まれた細胞小器官もありません。学ぶ型は、<em>Bacillus</em>（バシラス）や<em>Staphylococcus</em>（ブドウ球菌）のような<strong>グラム陽性真正細菌</strong> (Gram-positive eubacteria) の細胞です。知っておく構成要素：</p>
<table>
<tr><th>構成要素</th><th>説明と働き</th></tr>
<tr><td><strong>細胞壁</strong> (cell wall)</td><td>細胞膜の外側にあります。細胞の形を保ち、保護し、水を取り込みすぎて破裂するのを防ぎます。</td></tr>
<tr><td><strong>細胞膜</strong> (plasma membrane)</td><td>壁のすぐ内側の脂質二重層。細胞に出入りする物質を制御します。</td></tr>
<tr><td><strong>細胞質</strong> (cytoplasm)</td><td>主に水。代謝反応の場です。膜で囲まれた細胞小器官はありません。</td></tr>
<tr><td><strong>環状のむき出しのDNA</strong> (naked DNA in a loop)</td><td>環状のDNA分子が1本。ヒストンタンパク質に巻きついていないので「むき出し (naked)」といいます。<strong>核様体</strong> (nucleoid) という領域にあり、膜には囲まれていません。遺伝情報をもちます。</td></tr>
<tr><td><strong>70Sリボソーム</strong> (70S ribosomes)</td><td>タンパク質を合成します。「70S」は大きさを表し、真核生物の80Sリボソームより小さいです。</td></tr>
</table>
<p>原核細胞には多様性があります。ファイトプラズマやマイコプラズマに細胞壁がないなど、変異型の詳細を知る必要は<em>ありません</em>。原核生物の構造がすべての種で同じではない、という認識があれば十分です。</p>`,
        `<p><strong>原核生物</strong> (prokaryote，細菌) 沒有細胞核，也沒有膜包圍的胞器。要認識的類型是<strong>革蘭氏陽性真細菌</strong> (Gram-positive eubacteria) 的細胞，例如<em>芽孢桿菌屬</em> (<em>Bacillus</em>) 和<em>葡萄球菌屬</em> (<em>Staphylococcus</em>)。須認識的組成部分：</p>
<table>
<tr><th>組成部分</th><th>描述和功能</th></tr>
<tr><td><strong>細胞壁</strong> (cell wall)</td><td>在質膜之外。賦予細胞形狀，保護細胞，防止因吸水過多而脹破。</td></tr>
<tr><td><strong>質膜</strong> (plasma membrane)</td><td>緊貼細胞壁內側的脂質雙層。控制物質進出細胞。</td></tr>
<tr><td><strong>細胞質</strong> (cytoplasm)</td><td>主要是水。新陳代謝反應的場所。沒有膜包圍的胞器。</td></tr>
<tr><td><strong>環狀的裸 DNA</strong> (naked DNA in a loop)</td><td>一個環狀 DNA 分子，因為<em>沒有</em>纏繞組蛋白，所以稱為「裸」(naked)。它位於稱為<strong>擬核</strong> (nucleoid) 的區域，該區域<em>沒有</em>膜包圍。帶有遺傳資訊。</td></tr>
<tr><td><strong>70S 核糖體</strong> (70S ribosomes)</td><td>製造蛋白質。「70S」表示其大小，比真核生物的 80S 核糖體小。</td></tr>
</table>
<p>原核細胞有不同變化。你<em>不需要</em>認識這些變化的細節，例如植原體和支原體沒有細胞壁。只需明白並非每個物種的原核細胞結構都完全相同。</p>`)
    },
    {
      ref: "A2.2.6", ahl: false,
      heading: T("Eukaryote cell structure", "真核細胞の構造", "真核細胞的結構"),
      body: T(
        `<p><strong>Eukaryotes</strong> (animals, plants, fungi and others) have a <strong>compartmentalized cytoplasm</strong>: membranes divide the cell into separate compartments, each with its own job. Features common to eukaryote cells, with functions:</p>
<table>
<tr><th>Feature</th><th>Description</th><th>Function</th></tr>
<tr><td>Plasma membrane</td><td>Encloses the cell</td><td>Barrier; controls what enters and leaves</td></tr>
<tr><td>80S ribosomes</td><td>Larger than prokaryote 70S ribosomes; free in cytoplasm or attached to rough ER</td><td>Protein synthesis</td></tr>
<tr><td>Nucleus</td><td>Contains the chromosomes: DNA bound to <strong>histone</strong> proteins. Surrounded by a <strong>double membrane</strong> (nuclear envelope) with <strong>pores</strong></td><td>Stores genetic information; DNA is copied and transcribed here. Pores let molecules such as mRNA pass</td></tr>
<tr><td>Mitochondria</td><td>Double membrane; inner membrane folded</td><td>Aerobic cell respiration, making ATP</td></tr>
<tr><td>Endoplasmic reticulum (ER)</td><td>Network of flattened sacs and tubes. <em>Rough</em> ER has ribosomes on its surface; <em>smooth</em> ER does not</td><td>Rough ER: makes proteins, many of which will be secreted or put in membranes. Smooth ER: makes lipids</td></tr>
<tr><td>Golgi apparatus</td><td>Stack of flattened membrane sacs</td><td>Modifies, sorts and packages proteins into vesicles</td></tr>
<tr><td>Vesicles and vacuoles, including lysosomes</td><td>Small membrane-bound sacs</td><td>Transport and storage. <strong>Lysosomes</strong> contain digestive enzymes to break down materials</td></tr>
<tr><td>Cytoskeleton</td><td>Network of <strong>microtubules</strong> (hollow tubes) and <strong>microfilaments</strong> (thin protein threads)</td><td>Supports the cell and holds its shape, and moves organelles and vesicles around the cell</td></tr>
</table>
<p>The key difference from prokaryotes is the compartments: eukaryotic reactions are separated, so different conditions and enzymes can be kept in different places.</p>`,
        `<p><strong>真核生物</strong> (eukaryote：動物・植物・菌類など) の細胞質は<strong>区画化</strong> (compartmentalized) されています。膜が細胞を別々の区画に分け、それぞれが役割をもちます。真核細胞に共通する特徴と働き：</p>
<table>
<tr><th>特徴</th><th>説明</th><th>働き</th></tr>
<tr><td>細胞膜 (plasma membrane)</td><td>細胞を囲む</td><td>障壁。出入りする物質を制御</td></tr>
<tr><td>80Sリボソーム (80S ribosomes)</td><td>原核生物の70Sより大きい。細胞質に遊離、または粗面小胞体に付着</td><td>タンパク質合成</td></tr>
<tr><td>核 (nucleus)</td><td>染色体 (DNAが<strong>ヒストン</strong>タンパク質と結合) を含む。<strong>二重膜</strong>（核膜）で囲まれ、<strong>核膜孔</strong>がある</td><td>遺伝情報を保存。DNAの複製と転写の場。核膜孔をmRNAなどの分子が通る</td></tr>
<tr><td>ミトコンドリア (mitochondria)</td><td>二重膜。内膜は折りたたまれている</td><td>好気呼吸によるATP合成</td></tr>
<tr><td>小胞体 (endoplasmic reticulum, ER)</td><td>平たい袋と管のネットワーク。<em>粗面</em>小胞体は表面にリボソームがあり、<em>滑面</em>小胞体にはない</td><td>粗面ER：分泌されたり膜に組み込まれたりするタンパク質を合成。滑面ER：脂質を合成</td></tr>
<tr><td>ゴルジ体 (Golgi apparatus)</td><td>平たい膜の袋が重なったもの</td><td>タンパク質を修飾・選別し、小胞に包む</td></tr>
<tr><td>小胞と液胞（リソソームを含む） (vesicles, vacuoles, lysosomes)</td><td>膜で囲まれた小さな袋</td><td>輸送と貯蔵。<strong>リソソーム</strong>は消化酵素を含み、物質を分解</td></tr>
<tr><td>細胞骨格 (cytoskeleton)</td><td><strong>微小管</strong> (microtubules：中空の管) と<strong>微小繊維</strong> (microfilaments：細いタンパク質の糸) のネットワーク</td><td>細胞を支え形を保ち、細胞小器官や小胞を細胞内で動かす</td></tr>
</table>
<p>原核生物との重要な違いは区画があることです。真核細胞では反応が隔てられるため、異なる条件や酵素を別々の場所に保てます。</p>`,
        `<p><strong>真核生物</strong> (eukaryote：動物、植物、真菌等) 的細胞質<strong>被區室化</strong> (compartmentalized)：膜把細胞分隔成不同的區室，每個區室有自己的工作。真核細胞共有的特徵及其功能：</p>
<table>
<tr><th>特徵</th><th>描述</th><th>功能</th></tr>
<tr><td>質膜 (plasma membrane)</td><td>包圍細胞</td><td>屏障；控制物質進出</td></tr>
<tr><td>80S 核糖體 (80S ribosomes)</td><td>比原核生物的 70S 大；游離在細胞質或附着在粗糙內質網上</td><td>蛋白質合成</td></tr>
<tr><td>細胞核 (nucleus)</td><td>含有染色體（DNA 與<strong>組蛋白</strong>結合）。被<strong>雙層膜</strong>（核膜）包圍，膜上有<strong>核孔</strong></td><td>儲存遺傳資訊；DNA 在此複製和轉錄。核孔讓 mRNA 等分子通過</td></tr>
<tr><td>線粒體 (mitochondria)</td><td>雙層膜；內膜摺疊</td><td>有氧細胞呼吸，製造 ATP</td></tr>
<tr><td>內質網 (endoplasmic reticulum, ER)</td><td>由扁平囊和管組成的網絡。<em>粗糙</em>內質網表面有核糖體；<em>光滑</em>內質網則沒有</td><td>粗糙內質網：製造蛋白質，很多會被分泌或放入膜中。光滑內質網：製造脂質</td></tr>
<tr><td>高爾基體 (Golgi apparatus)</td><td>一疊扁平的膜囊</td><td>修飾、分類蛋白質並包裝入囊泡</td></tr>
<tr><td>囊泡和液泡（包括溶酶體） (vesicles, vacuoles, lysosomes)</td><td>有膜包圍的小囊</td><td>運輸和儲存。<strong>溶酶體</strong>含消化酶，分解物質</td></tr>
<tr><td>細胞骨架 (cytoskeleton)</td><td>由<strong>微管</strong> (microtubules，中空的管) 和<strong>微絲</strong> (microfilaments，幼細的蛋白質絲) 組成的網絡</td><td>支撐細胞並維持形狀，並在細胞內移動胞器和囊泡</td></tr>
</table>
<p>與原核生物的主要分別是有區室：真核細胞內的反應互相分隔，所以可在不同地方保持不同的條件和酶。</p>`)
    },
    {
      ref: "A2.2.7", ahl: false,
      heading: T("Processes of life in unicellular organisms", "単細胞生物の生命活動", "單細胞生物的生命過程"),
      body: T(
        `<p>A unicellular organism is a single cell that must carry out <em>all</em> the functions of life itself. The eight functions you need:</p>
<table>
<tr><th>Function</th><th>Meaning</th><th>Example in <em>Paramecium</em> (a ciliate) / <em>Chlamydomonas</em> (a green alga)</th></tr>
<tr><td><strong>Homeostasis</strong></td><td>Keeping internal conditions steady</td><td><em>Paramecium</em>: contractile vacuole pumps out excess water that enters by osmosis</td></tr>
<tr><td><strong>Metabolism</strong></td><td>All the chemical reactions in the cell</td><td>Both: respiration, and building molecules</td></tr>
<tr><td><strong>Nutrition</strong></td><td>Obtaining food or making it</td><td><em>Paramecium</em> takes in bacteria into food vacuoles; <em>Chlamydomonas</em> photosynthesizes in its chloroplast</td></tr>
<tr><td><strong>Movement</strong></td><td>Moving itself or its parts</td><td><em>Paramecium</em>: beating cilia; <em>Chlamydomonas</em>: two flagella</td></tr>
<tr><td><strong>Excretion</strong></td><td>Getting rid of waste from metabolism</td><td>Waste such as carbon dioxide diffuses out across the membrane</td></tr>
<tr><td><strong>Growth</strong></td><td>Increase in size</td><td>Cell enlarges before dividing</td></tr>
<tr><td><strong>Response to stimuli</strong></td><td>Detecting changes and reacting</td><td><em>Chlamydomonas</em> swims towards light (an eye-spot detects it); <em>Paramecium</em> swims away from harmful chemicals</td></tr>
<tr><td><strong>Reproduction</strong></td><td>Producing new individuals</td><td>Both divide to produce new cells (asexual reproduction)</td></tr>
</table>
<p><em>Paramecium</em> and <em>Chlamydomonas</em> are examples chosen here to illustrate; the guide names only the eight functions.</p>`,
        `<p>単細胞生物は、生命の<em>すべて</em>の機能を自分1つの細胞で行わなければなりません。知っておく8つの機能：</p>
<table>
<tr><th>機能</th><th>意味</th><th><em>ゾウリムシ</em> (Paramecium) ／<em>クラミドモナス</em> (Chlamydomonas) での例</th></tr>
<tr><td><strong>恒常性</strong> (homeostasis)</td><td>内部環境を一定に保つ</td><td>ゾウリムシ：浸透で入ってくる余分な水を収縮胞が排出</td></tr>
<tr><td><strong>代謝</strong> (metabolism)</td><td>細胞内のすべての化学反応</td><td>どちらも：呼吸、分子の合成</td></tr>
<tr><td><strong>栄養</strong> (nutrition)</td><td>食物を得る・作る</td><td>ゾウリムシは細菌を食胞に取り込む。クラミドモナスは葉緑体で光合成する</td></tr>
<tr><td><strong>運動</strong> (movement)</td><td>体や体の一部を動かす</td><td>ゾウリムシ：繊毛を動かす。クラミドモナス：2本の鞭毛</td></tr>
<tr><td><strong>排出</strong> (excretion)</td><td>代謝でできた老廃物を除く</td><td>二酸化炭素などは細胞膜を通って拡散して出る</td></tr>
<tr><td><strong>成長</strong> (growth)</td><td>大きさが増す</td><td>分裂の前に細胞が大きくなる</td></tr>
<tr><td><strong>刺激への応答</strong> (response to stimuli)</td><td>変化を感知して反応する</td><td>クラミドモナスは光に向かって泳ぐ（眼点が光を感知）。ゾウリムシは有害な化学物質から遠ざかる</td></tr>
<tr><td><strong>生殖</strong> (reproduction)</td><td>新しい個体をつくる</td><td>どちらも分裂して新しい細胞をつくる（無性生殖）</td></tr>
</table>
<p>ゾウリムシとクラミドモナスは説明のために選んだ例です。IB のガイドが挙げているのは8つの機能だけです。</p>`,
        `<p>單細胞生物是單獨一個細胞，必須自己進行<em>所有</em>生命功能。需要認識的八項功能：</p>
<table>
<tr><th>功能</th><th>意思</th><th><em>草履蟲</em> (Paramecium)／<em>衣藻</em> (Chlamydomonas) 的例子</th></tr>
<tr><td><strong>體內平衡</strong> (homeostasis)</td><td>保持內部環境穩定</td><td>草履蟲：伸縮泡把經滲透進入的多餘水分排出</td></tr>
<tr><td><strong>新陳代謝</strong> (metabolism)</td><td>細胞內所有化學反應</td><td>兩者皆有：呼吸及合成分子</td></tr>
<tr><td><strong>營養</strong> (nutrition)</td><td>獲取或製造食物</td><td>草履蟲把細菌吞入食物泡；衣藻在葉綠體中進行光合作用</td></tr>
<tr><td><strong>移動</strong> (movement)</td><td>移動自己或身體的一部分</td><td>草履蟲：纖毛擺動；衣藻：兩條鞭毛</td></tr>
<tr><td><strong>排泄</strong> (excretion)</td><td>排出新陳代謝產生的廢物</td><td>二氧化碳等廢物經質膜擴散出去</td></tr>
<tr><td><strong>生長</strong> (growth)</td><td>體積增大</td><td>細胞分裂前會增大</td></tr>
<tr><td><strong>對刺激作出反應</strong> (response to stimuli)</td><td>察覺變化並作出反應</td><td>衣藻游向光（眼點感光）；草履蟲游離有害化學物質</td></tr>
<tr><td><strong>繁殖</strong> (reproduction)</td><td>產生新個體</td><td>兩者都以分裂產生新細胞（無性繁殖）</td></tr>
</table>
<p>草履蟲和衣藻只是這裏選來說明的例子，指引只列出這八項功能。</p>`)
    },
    {
      ref: "A2.2.8", ahl: false,
      heading: T("Animal, fungal and plant cells compared", "動物・菌類・植物の細胞の違い", "動物、真菌與植物細胞的比較"),
      widget: "cell-compare",
      body: T(
        `<p>All three are eukaryotes, with the same basic organelles, but they differ in the following ways:</p>
<table>
<tr><th>Feature</th><th>Animal cell</th><th>Fungal cell</th><th>Plant cell</th></tr>
<tr><td><strong>Cell wall</strong></td><td>None</td><td>Present; made mainly of <strong>chitin</strong></td><td>Present; made mainly of <strong>cellulose</strong></td></tr>
<tr><td><strong>Vacuoles</strong></td><td>Small, temporary vacuoles and vesicles (e.g. food vacuoles)</td><td>Vacuoles present, often of variable size, with roles such as storage and breakdown</td><td>One <strong>large permanent central sap vacuole</strong> (up to most of the cell volume). Stores water and dissolved substances and its pressure keeps the cell firm (turgid)</td></tr>
<tr><td><strong>Chloroplasts and other plastids</strong></td><td>Absent</td><td>Absent (fungi cannot photosynthesize)</td><td><strong>Chloroplasts</strong> in photosynthetic cells (photosynthesis). Other <strong>plastids</strong> include amyloplasts (store starch)</td></tr>
<tr><td><strong>Centrioles</strong></td><td>Present</td><td>Absent in most fungi</td><td>Absent in most plants (e.g. flowering plants)</td></tr>
<tr><td><strong>Cilia and flagella</strong></td><td>Present in some cells (e.g. cilia lining airways, a sperm flagellum)</td><td>Absent from most fungi</td><td>Absent from most plants (e.g. flowering plants)</td></tr>
</table>
<p>Fungi are not plants and not animals. Unlike plants, their walls are chitin and they have no chloroplasts. Unlike animals, they have a cell wall. Use the widget below to compare the cell types.</p>`,
        `<p>3つとも真核生物で基本的な細胞小器官は同じですが、次の点が異なります。</p>
<table>
<tr><th>特徴</th><th>動物細胞</th><th>菌類の細胞</th><th>植物細胞</th></tr>
<tr><td><strong>細胞壁</strong> (cell wall)</td><td>なし</td><td>あり。主に<strong>キチン</strong> (chitin)</td><td>あり。主に<strong>セルロース</strong> (cellulose)</td></tr>
<tr><td><strong>液胞</strong> (vacuoles)</td><td>小さく一時的な液胞や小胞（食胞など）</td><td>液胞があり、大きさはさまざまで、貯蔵や分解などの役割をもつ</td><td>1つの<strong>大きな永続的中央液胞</strong> (sap vacuole)（細胞体積の大部分になることも）。水や溶質を貯蔵し、その圧力で細胞が張りを保つ</td></tr>
<tr><td><strong>葉緑体とその他の色素体</strong> (chloroplasts, plastids)</td><td>なし</td><td>なし（菌類は光合成できない）</td><td>光合成を行う細胞に<strong>葉緑体</strong>（光合成）。ほかの<strong>色素体</strong>にアミロプラスト（デンプンを貯蔵）がある</td></tr>
<tr><td><strong>中心小体</strong> (centrioles)</td><td>あり</td><td>ほとんどの菌類にない</td><td>ほとんどの植物（被子植物など）にない</td></tr>
<tr><td><strong>繊毛と鞭毛</strong> (cilia, flagella)</td><td>一部の細胞にある（気道の繊毛、精子の鞭毛など）</td><td>ほとんどの菌類にない</td><td>ほとんどの植物（被子植物など）にない</td></tr>
</table>
<p>菌類は植物でも動物でもありません。植物と違って壁はキチンでできており、葉緑体をもちません。動物と違って細胞壁をもちます。下のウィジェットで細胞の種類を比べましょう。</p>`,
        `<p>三者都是真核生物，有相同的基本胞器，但有以下分別：</p>
<table>
<tr><th>特徵</th><th>動物細胞</th><th>真菌細胞</th><th>植物細胞</th></tr>
<tr><td><strong>細胞壁</strong> (cell wall)</td><td>沒有</td><td>有；主要由<strong>幾丁質</strong> (chitin) 構成</td><td>有；主要由<strong>纖維素</strong> (cellulose) 構成</td></tr>
<tr><td><strong>液泡</strong> (vacuoles)</td><td>細小、暫時性的液泡和囊泡（如食物泡）</td><td>有液泡，大小不一，具儲存和分解等作用</td><td>一個<strong>大型永久性中央液泡</strong> (sap vacuole)（可佔細胞體積大部分）。儲存水和溶質，其壓力使細胞保持堅挺（膨脹）</td></tr>
<tr><td><strong>葉綠體及其他質體</strong> (chloroplasts, plastids)</td><td>沒有</td><td>沒有（真菌不能進行光合作用）</td><td>進行光合作用的細胞有<strong>葉綠體</strong>（光合作用）。其他<strong>質體</strong>包括澱粉體（儲存澱粉）</td></tr>
<tr><td><strong>中心粒</strong> (centrioles)</td><td>有</td><td>大多數真菌沒有</td><td>大多數植物（如開花植物）沒有</td></tr>
<tr><td><strong>纖毛和鞭毛</strong> (cilia, flagella)</td><td>部分細胞有（如呼吸道的纖毛、精子的鞭毛）</td><td>大多數真菌沒有</td><td>大多數植物（如開花植物）沒有</td></tr>
</table>
<p>真菌既不是植物也不是動物。與植物不同，它的細胞壁是幾丁質，而且沒有葉綠體；與動物不同，它有細胞壁。可用下面的小工具比較各種細胞。</p>`),
      examTip: T("Questions often ask for the DIFFERENCE between two cell types. Give a point for each cell (“plant cell has cellulose wall; animal cell has none”), not just one side.",
        "2つの細胞の「違い」を問う問題では、片側だけでなく両方について書きます（「植物はセルロースの細胞壁をもつ。動物はもたない」）。",
        "題目常問兩種細胞的「分別」。要同時寫出兩邊（「植物細胞有纖維素細胞壁；動物細胞則沒有」），不要只寫一邊。")
    },

        {
      ref: "A2.2.9", ahl: false,
      heading: T("Atypical cell structure in eukaryotes", "真核生物の典型的でない細胞構造", "真核生物的非典型細胞結構"),
      widget: "cell-compare-atypical",
      body: T(
        `<p>A “typical” eukaryotic cell has <strong>one nucleus</strong>. Some cells do not. The guide asks you to use <strong>numbers of nuclei</strong> to illustrate atypical cell structure, with these four examples:</p>
<table>
<tr><th>Cell</th><th>Number of nuclei</th><th>Notes</th></tr>
<tr><td><strong>Aseptate fungal hypha</strong></td><td>Many</td><td>A hypha is a thread-like fungal filament. “Aseptate” means it has no cross-walls (septa), so one continuous cytoplasm contains many nuclei.</td></tr>
<tr><td><strong>Skeletal muscle fibre</strong></td><td>Many</td><td>Very long cell formed when many cells fused together, so it has many nuclei.</td></tr>
<tr><td><strong>Red blood cell (mature, in mammals)</strong></td><td>None</td><td>No nucleus, which leaves more room for haemoglobin to carry oxygen. It cannot make new proteins or divide, so it has a limited life.</td></tr>
<tr><td><strong>Phloem sieve tube element</strong></td><td>None (when mature)</td><td>Joined end to end to form tubes for transporting sugars. Having no nucleus and few organelles leaves a clear path for flow. A neighbouring companion cell (which has a nucleus) supports it.</td></tr>
</table>
<p>These cells are still alive and are still cells. They show that cell structure is not identical everywhere, even within eukaryotes.</p>`,
        `<p>「典型的な」真核細胞には<strong>核が1つ</strong>あります。そうでない細胞もあります。IB のガイドは、<strong>核の数</strong>で典型的でない細胞構造を示すよう求めており、例は次の4つです。</p>
<table>
<tr><th>細胞</th><th>核の数</th><th>備考</th></tr>
<tr><td><strong>隔壁のない菌糸</strong> (aseptate fungal hypha)</td><td>多数</td><td>菌糸は糸状の菌類の細胞列です。「隔壁がない (aseptate)」とは仕切り壁 (septa) がないことで、1つの連続した細胞質に多数の核が含まれます。</td></tr>
<tr><td><strong>骨格筋線維</strong> (skeletal muscle fibre)</td><td>多数</td><td>多数の細胞が融合してできた非常に長い細胞で、核が多数あります。</td></tr>
<tr><td><strong>赤血球</strong> (red blood cell、成熟した哺乳類)</td><td>なし</td><td>核がないので、酸素を運ぶヘモグロビンを入れる空間が増えます。新しいタンパク質を作れず分裂もできないので、寿命が限られます。</td></tr>
<tr><td><strong>師管要素</strong> (phloem sieve tube element)</td><td>なし（成熟後）</td><td>端と端でつながり、糖を運ぶ管をつくります。核や細胞小器官が少ないため流れる通路が確保されます。隣の伴細胞（核をもつ）が支えます。</td></tr>
</table>
<p>これらの細胞も生きていて、細胞です。真核生物の中でも、細胞構造がどこでも同じではないことを示しています。</p>`,
        `<p>「典型的」的真核細胞有<strong>一個細胞核</strong>，但有些細胞不是。指引要求用<strong>細胞核的數目</strong>來說明非典型的細胞結構，例子有以下四個：</p>
<table>
<tr><th>細胞</th><th>細胞核數目</th><th>說明</th></tr>
<tr><td><strong>無隔膜的真菌菌絲</strong> (aseptate fungal hypha)</td><td>很多</td><td>菌絲是絲狀的真菌細胞鏈。「無隔膜」(aseptate) 指沒有橫隔 (septa)，所以一個連續的細胞質含有很多細胞核。</td></tr>
<tr><td><strong>骨骼肌纖維</strong> (skeletal muscle fibre)</td><td>很多</td><td>由許多細胞融合而成的極長細胞，所以有很多細胞核。</td></tr>
<tr><td><strong>紅血球</strong> (red blood cell，成熟的哺乳動物紅血球)</td><td>沒有</td><td>沒有細胞核，騰出更多空間給運載氧氣的血紅蛋白。它不能製造新蛋白質或分裂，壽命有限。</td></tr>
<tr><td><strong>韌皮部篩管分子</strong> (phloem sieve tube element)</td><td>沒有（成熟時）</td><td>首尾相連形成運輸糖分的管道。沒有細胞核和較少胞器，令液流暢通。旁邊的伴細胞（有細胞核）為它提供支援。</td></tr>
</table>
<p>這些細胞仍然是活的細胞。它們顯示即使在真核生物之中，細胞結構也並非處處相同。</p>`)
    },
    {
      ref: "A2.2.10", ahl: false,
      heading: T("Reading light and electron micrographs", "光学顕微鏡・電子顕微鏡写真を読む", "閱讀光學與電子顯微照片"),
      body: T(
        `<p>You should be able to identify a cell in a micrograph as <strong>prokaryote, plant or animal</strong>:</p>
<ul>
<li><strong>Prokaryote:</strong> very small (about the size of a mitochondrion), no nucleus or other membrane-bound organelles; a pale nucleoid region; cell wall.</li>
<li><strong>Plant:</strong> large, with a regular cell wall outside the membrane, chloroplasts and/or a large sap vacuole.</li>
<li><strong>Animal:</strong> a nucleus but no cell wall, no chloroplasts, and no large central vacuole; irregular shape.</li>
</ul>
<p>In <strong>electron micrographs</strong> you should be able to identify these structures (they are in shades of grey):</p>
<table>
<tr><th>Structure</th><th>What it looks like</th></tr>
<tr><td>Nucleoid region</td><td>Pale, irregular area in a prokaryote's cytoplasm containing thread-like DNA, with no membrane around it</td></tr>
<tr><td>Prokaryotic cell wall</td><td>Thick layer outside the plasma membrane</td></tr>
<tr><td>Nucleus</td><td>Large, rounded, surrounded by a double membrane with gaps (pores); darker patches inside</td></tr>
<tr><td>Chromosomes</td><td>Dark, condensed threads or rods (visible when a cell is dividing)</td></tr>
<tr><td>Mitochondrion</td><td>Oval or rod-shaped, double membrane, inner membrane folded inwards</td></tr>
<tr><td>Chloroplast</td><td>Larger oval with a double membrane and stacks of flattened membranes inside (often starch grains too)</td></tr>
<tr><td>Sap vacuole</td><td>Large, clear space surrounded by a single membrane, in plant cells</td></tr>
<tr><td>Golgi apparatus</td><td>Stack of flattened, slightly curved sacs with small vesicles budding off</td></tr>
<tr><td>Rough ER</td><td>Flattened sacs with many tiny dark dots (ribosomes) on the surface</td></tr>
<tr><td>Smooth ER</td><td>Tubes or sacs of membrane with no dots on the surface</td></tr>
<tr><td>Ribosomes</td><td>Very small dark dots, free in the cytoplasm or on rough ER</td></tr>
<tr><td>Cell wall (plant)</td><td>Thick, pale layer outside the plasma membrane, between neighbouring cells</td></tr>
<tr><td>Plasma membrane</td><td>Thin dark line at the cell's edge</td></tr>
<tr><td>Microvilli</td><td>Many tiny finger-like projections of the plasma membrane on the cell surface</td></tr>
</table>`,
        `<p>顕微鏡写真の細胞を<strong>原核生物・植物・動物</strong>のどれか見分けられるようにします。</p>
<ul>
<li><strong>原核生物：</strong>非常に小さい（ミトコンドリア程度）。核や膜で囲まれた細胞小器官がない。色の薄い核様体領域。細胞壁がある。</li>
<li><strong>植物：</strong>大きく、膜の外側に規則的な細胞壁がある。葉緑体や大きな中央液胞がある。</li>
<li><strong>動物：</strong>核はあるが、細胞壁・葉緑体・大きな中央液胞はない。形は不規則。</li>
</ul>
<p><strong>電子顕微鏡写真</strong>では、次の構造を識別できるようにします（灰色の濃淡で見えます）。</p>
<table>
<tr><th>構造</th><th>見え方</th></tr>
<tr><td>核様体領域 (nucleoid region)</td><td>原核生物の細胞質中の、糸状のDNAを含む色の薄い不規則な領域。膜で囲まれていない</td></tr>
<tr><td>原核生物の細胞壁 (prokaryotic cell wall)</td><td>細胞膜の外側の厚い層</td></tr>
<tr><td>核 (nucleus)</td><td>大きく丸い。すき間（核膜孔）のある二重膜に囲まれ、内部に濃い部分がある</td></tr>
<tr><td>染色体 (chromosomes)</td><td>濃く凝縮した糸状または棒状（細胞分裂中に見える）</td></tr>
<tr><td>ミトコンドリア (mitochondrion)</td><td>楕円形または棒状。二重膜で、内膜が内側に折りたたまれている</td></tr>
<tr><td>葉緑体 (chloroplast)</td><td>大きめの楕円形。二重膜で、内部に平たい膜の重なり（デンプン粒もよくある）</td></tr>
<tr><td>液胞 (sap vacuole)</td><td>植物細胞にある、単膜に囲まれた大きな透明の空間</td></tr>
<tr><td>ゴルジ体 (Golgi apparatus)</td><td>平たく少し湾曲した袋が重なり、小さな小胞が出芽している</td></tr>
<tr><td>粗面小胞体 (rough ER)</td><td>表面に小さな濃い点（リボソーム）が多数ある平たい袋</td></tr>
<tr><td>滑面小胞体 (smooth ER)</td><td>表面に点がない管または袋状の膜</td></tr>
<tr><td>リボソーム (ribosomes)</td><td>非常に小さな濃い点。細胞質中に遊離、または粗面ERに付着</td></tr>
<tr><td>細胞壁（植物） (cell wall)</td><td>細胞膜の外側にある厚く色の薄い層。隣り合う細胞の間にある</td></tr>
<tr><td>細胞膜 (plasma membrane)</td><td>細胞の縁にある細く濃い線</td></tr>
<tr><td>微絨毛 (microvilli)</td><td>細胞表面にある、細胞膜の指状の小さな突起が多数</td></tr>
</table>`,
        `<p>你應該能分辨顯微照片中的細胞是<strong>原核、植物或動物</strong>細胞：</p>
<ul>
<li><strong>原核細胞：</strong>非常細小（約與線粒體相若）；沒有細胞核或其他膜包圍的胞器；有顏色較淺的擬核區；有細胞壁。</li>
<li><strong>植物細胞：</strong>較大，質膜外有規則的細胞壁，有葉綠體及／或大型中央液泡。</li>
<li><strong>動物細胞：</strong>有細胞核，但沒有細胞壁、葉綠體或大型中央液泡；形狀不規則。</li>
</ul>
<p>在<strong>電子顯微照片</strong>中，你應能辨認以下結構（以灰色深淺顯示）：</p>
<table>
<tr><th>結構</th><th>外觀</th></tr>
<tr><td>擬核區 (nucleoid region)</td><td>原核細胞質中顏色較淺的不規則區域，含絲狀 DNA，沒有膜包圍</td></tr>
<tr><td>原核細胞壁 (prokaryotic cell wall)</td><td>質膜外的厚層</td></tr>
<tr><td>細胞核 (nucleus)</td><td>大而圓，被有缺口（核孔）的雙層膜包圍，內有較深色的部分</td></tr>
<tr><td>染色體 (chromosomes)</td><td>深色、濃縮的絲狀或棒狀（細胞分裂時可見）</td></tr>
<tr><td>線粒體 (mitochondrion)</td><td>橢圓或棒狀，雙層膜，內膜向內摺疊</td></tr>
<tr><td>葉綠體 (chloroplast)</td><td>較大的橢圓形，雙層膜，內有成疊的扁平膜（常見澱粉粒）</td></tr>
<tr><td>液泡 (sap vacuole)</td><td>植物細胞中被單層膜包圍的大型透明空間</td></tr>
<tr><td>高爾基體 (Golgi apparatus)</td><td>一疊扁平、略彎的膜囊，旁邊有小囊泡出芽</td></tr>
<tr><td>粗糙內質網 (rough ER)</td><td>扁平膜囊，表面有許多細小的深色點（核糖體）</td></tr>
<tr><td>光滑內質網 (smooth ER)</td><td>管狀或囊狀的膜，表面沒有點</td></tr>
<tr><td>核糖體 (ribosomes)</td><td>極小的深色點，游離在細胞質或附着在粗糙內質網</td></tr>
<tr><td>細胞壁（植物） (cell wall)</td><td>質膜外的厚而淺色層，位於相鄰細胞之間</td></tr>
<tr><td>質膜 (plasma membrane)</td><td>細胞邊緣的深色細線</td></tr>
<tr><td>微絨毛 (microvilli)</td><td>細胞表面質膜形成的許多指狀小突起</td></tr>
</table>`)
    },
    {
      ref: "A2.2.11", ahl: false,
      heading: T("Drawing and annotating structures from electron micrographs", "電子顕微鏡写真に基づく作図と注釈", "根據電子顯微照片繪圖與標註"),
      body: T(
        `<p>You should be able to <strong>draw</strong> and <strong>annotate</strong> (add brief notes to) the structures below, as seen in electron micrographs. <strong>Include the function in each annotation.</strong></p>
<table>
<tr><th>Structure</th><th>Function to write in the annotation</th></tr>
<tr><td>Nucleus</td><td>Contains the chromosomes (DNA); controls the cell by storing genetic information and making mRNA. Pores allow mRNA to leave</td></tr>
<tr><td>Chromosomes</td><td>DNA wrapped around histones; carry the genes</td></tr>
<tr><td>Mitochondrion</td><td>Site of aerobic respiration; makes ATP</td></tr>
<tr><td>Chloroplast</td><td>Site of photosynthesis; makes sugars using light energy</td></tr>
<tr><td>Sap vacuole</td><td>Stores water and dissolved substances; its pressure supports the cell</td></tr>
<tr><td>Golgi apparatus</td><td>Modifies, sorts and packages proteins in vesicles</td></tr>
<tr><td>Rough ER</td><td>Ribosomes make proteins which are folded and carried in the ER (e.g. proteins for secretion)</td></tr>
<tr><td>Smooth ER</td><td>Makes lipids</td></tr>
<tr><td>Cell wall</td><td>Supports and protects the cell, prevents bursting</td></tr>
<tr><td>Plasma membrane</td><td>Controls what enters and leaves the cell</td></tr>
<tr><td>Secretory vesicles</td><td>Carry substances (e.g. proteins from the Golgi) to the plasma membrane to be released outside the cell</td></tr>
<tr><td>Microvilli</td><td>Increase the surface area of the plasma membrane for absorption or secretion</td></tr>
</table>
<p><strong>Drawing tips (command term “Draw”).</strong> Use a sharp pencil and clear continuous lines. Draw what you see, not what a textbook shows. Use a ruler for label lines, which should touch the structure and must not cross. Do not shade. Give the drawing a title and, if asked, a scale bar or magnification. Make it large enough to show detail.</p>`,
        `<p>電子顕微鏡写真に見える次の構造を、<strong>作図</strong> (draw) し、<strong>注釈</strong> (annotate：簡単な説明を書き加える) できるようにします。<strong>注釈には必ず働きを含めます。</strong></p>
<table>
<tr><th>構造</th><th>注釈に書く働き</th></tr>
<tr><td>核 (nucleus)</td><td>染色体（DNA）を含む。遺伝情報の保存とmRNAの合成で細胞を制御する。核膜孔からmRNAが出る</td></tr>
<tr><td>染色体 (chromosomes)</td><td>ヒストンにDNAが巻きついたもの。遺伝子をもつ</td></tr>
<tr><td>ミトコンドリア (mitochondrion)</td><td>好気呼吸の場。ATPを合成する</td></tr>
<tr><td>葉緑体 (chloroplast)</td><td>光合成の場。光エネルギーで糖を合成する</td></tr>
<tr><td>液胞 (sap vacuole)</td><td>水と溶質を貯蔵する。その圧力が細胞を支える</td></tr>
<tr><td>ゴルジ体 (Golgi apparatus)</td><td>タンパク質を修飾・選別し、小胞に包む</td></tr>
<tr><td>粗面小胞体 (rough ER)</td><td>リボソームがタンパク質を作り、ERの中で折りたたまれ運ばれる（分泌タンパク質など）</td></tr>
<tr><td>滑面小胞体 (smooth ER)</td><td>脂質を合成する</td></tr>
<tr><td>細胞壁 (cell wall)</td><td>細胞を支え保護し、破裂を防ぐ</td></tr>
<tr><td>細胞膜 (plasma membrane)</td><td>細胞に出入りする物質を制御する</td></tr>
<tr><td>分泌小胞 (secretory vesicles)</td><td>物質（ゴルジ体からのタンパク質など）を細胞膜へ運び、細胞外へ放出する</td></tr>
<tr><td>微絨毛 (microvilli)</td><td>細胞膜の表面積を増やし、吸収や分泌を助ける</td></tr>
</table>
<p><strong>作図のコツ（指示語「Draw」）。</strong>よく削った鉛筆で、はっきりした途切れない線を使います。教科書の図ではなく、見えたものを描きます。ラベル線は定規で引き、構造に接し、交差させません。影をつけません。タイトルをつけ、求められたらスケールバーや倍率も書きます。細部が分かる大きさで描きます。</p>`,
        `<p>你應該能根據電子顯微照片<strong>繪畫</strong> (draw) 並<strong>標註</strong> (annotate，加上簡短註釋) 下列結構。<strong>每個標註都要包括功能。</strong></p>
<table>
<tr><th>結構</th><th>標註中要寫的功能</th></tr>
<tr><td>細胞核 (nucleus)</td><td>含有染色體 (DNA)；儲存遺傳資訊和製造 mRNA 以控制細胞。mRNA 經核孔離開</td></tr>
<tr><td>染色體 (chromosomes)</td><td>DNA 纏繞組蛋白；攜帶基因</td></tr>
<tr><td>線粒體 (mitochondrion)</td><td>有氧呼吸的場所；製造 ATP</td></tr>
<tr><td>葉綠體 (chloroplast)</td><td>光合作用的場所；利用光能製造糖</td></tr>
<tr><td>液泡 (sap vacuole)</td><td>儲存水和溶質；其壓力支撐細胞</td></tr>
<tr><td>高爾基體 (Golgi apparatus)</td><td>修飾、分類蛋白質並包裝入囊泡</td></tr>
<tr><td>粗糙內質網 (rough ER)</td><td>核糖體製造蛋白質，蛋白質在內質網內摺疊和運送（如分泌蛋白）</td></tr>
<tr><td>光滑內質網 (smooth ER)</td><td>製造脂質</td></tr>
<tr><td>細胞壁 (cell wall)</td><td>支撐和保護細胞，防止脹破</td></tr>
<tr><td>質膜 (plasma membrane)</td><td>控制物質進出細胞</td></tr>
<tr><td>分泌囊泡 (secretory vesicles)</td><td>把物質（如來自高爾基體的蛋白質）運到質膜，釋出細胞外</td></tr>
<tr><td>微絨毛 (microvilli)</td><td>增加質膜的表面積，有助吸收或分泌</td></tr>
</table>
<p><strong>繪圖要訣（指示詞「Draw」）。</strong>用削尖的鉛筆，線條清晰連續。畫你看到的，而非課本上的圖。標示線用直尺畫，要接觸結構，且不可交叉。不要塗陰影。加上標題，如題目要求，還要加比例尺或放大率。圖要夠大，才能顯示細節。</p>`)
    },
    {
      ref: "A2.2.12", ahl: true,
      heading: T("Origin of eukaryotic cells by endosymbiosis", "細胞内共生による真核細胞の起源", "真核細胞經內共生而起源"),
      body: T(
        `<p>Evidence suggests that all eukaryotes evolved from a <strong>common unicellular ancestor</strong> that had a nucleus and reproduced sexually. <strong>Mitochondria</strong> then evolved by <strong>endosymbiosis</strong>, and in some eukaryotes (plants and algae) <strong>chloroplasts</strong> also arose this way.</p>
<p><strong>Endosymbiosis</strong> means “living together inside”. The idea is that a larger cell engulfed a smaller prokaryote, which was <em>not digested</em> but lived on inside it, so both benefited. The host provided protection and raw materials; the prokaryote supplied ATP (aerobic bacterium → mitochondrion) or sugars (photosynthetic prokaryote → chloroplast). Over time the partner became an organelle.</p>
<p><strong>Evidence that mitochondria and chloroplasts were once free-living prokaryotes</strong> (you must include these three):</p>
<ul>
<li>They contain <strong>70S ribosomes</strong>, like prokaryotes (not the 80S of the cytoplasm of the cell).</li>
<li>They contain <strong>naked, circular DNA</strong>, like prokaryotes.</li>
<li>They can <strong>replicate</strong> themselves inside the cell (they divide to make new mitochondria or chloroplasts, rather than being made from scratch).</li>
</ul>
<div class="note"><strong>Nature of science.</strong> The strength of a theory comes from the observations it explains and the predictions it supports. Endosymbiosis accounts for a wide range of observations, so it is a strong theory.</div>`,
        `<p>証拠から、すべての真核生物は、核をもち有性生殖を行う<strong>共通の単細胞の祖先</strong>から進化したと考えられます。その後<strong>ミトコンドリア</strong>が<strong>細胞内共生</strong> (endosymbiosis) で進化し、一部の真核生物（植物や藻類）では<strong>葉緑体</strong>も同様に生じました。</p>
<p><strong>細胞内共生</strong>とは「内側で一緒に生きる」という意味です。大きな細胞が小さな原核生物を取り込み、それを<em>消化せず</em>に体内で生かし続けて、双方が利益を得たという考えです。宿主は保護と材料を、原核生物はATP（好気性細菌→ミトコンドリア）や糖（光合成する原核生物→葉緑体）を提供しました。やがてその共生者は細胞小器官になりました。</p>
<p><strong>ミトコンドリアと葉緑体がかつて自由生活する原核生物だった証拠</strong>（次の3つを必ず挙げます）：</p>
<ul>
<li>原核生物と同じ<strong>70Sリボソーム</strong>をもつ（細胞質の80Sリボソームとは違う）。</li>
<li>原核生物と同じ<strong>むき出しの環状DNA</strong>をもつ。</li>
<li>細胞内で自分自身を<strong>複製</strong>できる（分裂して新しいミトコンドリアや葉緑体になり、ゼロから作られるのではない）。</li>
</ul>
<div class="note"><strong>科学の本質 (NOS)。</strong>理論の強さは、それが説明する観察と支持する予測から生まれます。細胞内共生説は幅広い観察を説明するので、強い理論です。</div>`,
        `<p>證據顯示，所有真核生物都演化自一個有細胞核、行有性生殖的<strong>共同單細胞祖先</strong>。其後<strong>線粒體</strong>經<strong>內共生</strong> (endosymbiosis) 演化而成；在部分真核生物（植物和藻類）中，<strong>葉綠體</strong>也是這樣產生的。</p>
<p><strong>內共生</strong>的意思是「在體內共同生活」。這個想法認為：一個較大的細胞吞入較小的原核生物，但<em>沒有消化它</em>，而是讓它在體內繼續生存，雙方都得益。宿主提供保護和原料；原核生物提供 ATP（需氧細菌→線粒體）或糖（行光合作用的原核生物→葉綠體）。經過一段時間，這個夥伴變成了胞器。</p>
<p><strong>線粒體和葉綠體曾是自由生活原核生物的證據</strong>（必須包括這三項）：</p>
<ul>
<li>含有與原核生物相同的 <strong>70S 核糖體</strong>（而不是細胞質中的 80S）。</li>
<li>含有與原核生物相同的<strong>環狀裸 DNA</strong>。</li>
<li>能在細胞內<strong>複製</strong>自己（它們以分裂產生新的線粒體或葉綠體，而不是從頭製造）。</li>
</ul>
<div class="note"><strong>科學本質 (NOS)。</strong>理論的強度來自它能解釋的觀察和支持的預測。內共生學說可解釋廣泛的觀察，所以是個強而有力的學說。</div>`),
      examTip: T("Always link each piece of evidence to a prokaryote: “mitochondria have 70S ribosomes, as bacteria do, unlike the 80S ribosomes in the cytoplasm.”",
        "各証拠を原核生物と結びつけて書きます。「ミトコンドリアは細菌と同じ70Sリボソームをもち、細胞質の80Sリボソームとは異なる。」",
        "每項證據都要與原核生物連結：「線粒體有與細菌相同的 70S 核糖體，而細胞質中的是 80S。」")
    },
    {
      ref: "A2.2.13", ahl: true,
      heading: T("Cell differentiation", "細胞分化", "細胞分化"),
      body: T(
        `<p>A multicellular organism develops from one fertilized egg. The cells made from it become different in structure and function, forming specialized <strong>tissues</strong>. This process is <strong>cell differentiation</strong>.</p>
<p>All the cells of an organism have the <strong>same genes</strong> (the same DNA). Differentiation happens because <strong>different patterns of gene expression</strong> occur: in each cell type some genes are switched on (expressed, making proteins) and others are switched off. The proteins a cell makes decide its structure and function. The pattern is often <strong>triggered by changes in the environment</strong> of the cell, such as chemical signals from neighbouring cells.</p>`,
        `<p>多細胞生物は1個の受精卵から発生します。そこから生じた細胞は構造と働きが異なるようになり、特殊化した<strong>組織</strong> (tissue) をつくります。この過程が<strong>細胞分化</strong> (cell differentiation) です。</p>
<p>生物のすべての細胞は<strong>同じ遺伝子</strong>（同じDNA）をもちます。分化が起こるのは、<strong>遺伝子発現のパターンが異なる</strong>からです。細胞の種類ごとに、ある遺伝子はオン（発現してタンパク質をつくる）、別の遺伝子はオフになります。細胞がつくるタンパク質が、その構造と働きを決めます。このパターンは、隣の細胞からの化学信号など、細胞の<strong>環境の変化がきっかけ</strong>となることがよくあります。</p>`,
        `<p>多細胞生物由一個受精卵發育而成。由它產生的細胞在結構和功能上變得不同，形成特化的<strong>組織</strong> (tissue)。這個過程稱為<strong>細胞分化</strong> (cell differentiation)。</p>
<p>生物所有細胞都有<strong>相同的基因</strong>（相同的 DNA）。分化的發生，是因為出現<strong>不同的基因表達模式</strong>：在每種細胞類型中，有些基因被開啟（表達，製造蛋白質），有些則被關閉。細胞製造哪些蛋白質，決定了它的結構和功能。這個模式往往由細胞<strong>環境的變化所觸發</strong>，例如鄰近細胞發出的化學信號。</p>`)
    },
    {
      ref: "A2.2.14", ahl: true,
      heading: T("Evolution of multicellularity", "多細胞性の進化", "多細胞性的演化"),
      body: T(
        `<p><strong>Multicellularity</strong> (bodies made of many cells that work together) has <strong>evolved repeatedly</strong>, in separate groups. Many fungi and eukaryotic algae, and all plants and animals, are multicellular.</p>
<p><strong>Advantages</strong> of being multicellular:</p>
<ul>
<li><strong>Larger body size</strong> becomes possible. (A single cell is limited in size because its surface area to volume ratio falls as it grows.)</li>
<li><strong>Cell specialization</strong>: different cells can do different jobs very efficiently (see A2.2.13), so the whole organism works better than if every cell did everything.</li>
</ul>`,
        `<p><strong>多細胞性</strong> (multicellularity：多数の細胞が協調して体をつくること) は、別々の系統で<strong>繰り返し進化</strong>しました。多くの菌類や真核藻類、そしてすべての植物と動物は多細胞です。</p>
<p>多細胞であることの<strong>利点</strong>：</p>
<ul>
<li><strong>体を大きくできる</strong>。（単細胞は、大きくなると表面積と体積の比が小さくなるため、大きさに限界がある。）</li>
<li><strong>細胞の特殊化</strong>：細胞ごとに違う仕事を効率よく行えます（A2.2.13参照）。そのため、すべての細胞が全部の仕事をするより、生物全体がよく働きます。</li>
</ul>`,
        `<p><strong>多細胞性</strong> (multicellularity，由許多細胞合作組成身體) 曾在不同類群中<strong>多次獨立演化</strong>出現。許多真菌和真核藻類，以及所有植物和動物，都是多細胞的。</p>
<p>多細胞的<strong>優點</strong>：</p>
<ul>
<li>可以有<strong>較大的身體</strong>。（單細胞的大小受限，因為細胞越大，表面積與體積比越小。）</li>
<li><strong>細胞特化</strong>：不同細胞可非常有效地分工（見 A2.2.13），所以整個生物比「每個細胞都做所有工作」更有效率。</li>
</ul>`)
    },

  ];
  const questions = [
        { id: "a2-2-q01", type: "mcq", ahl: false, difficulty: 1, ref: "A2.2.1", paper: "1A",
      stem: T("Which statement is a deduction from cell theory?", "細胞説から導かれる演繹はどれですか。", "以下哪項是由細胞學說推演出來的？"),
      options: [
        T("A newly discovered organism will consist of one or more cells.", "新しく発見された生物は、1つ以上の細胞からできているだろう。", "新發現的生物會由一個或多個細胞構成。"),
        T("All cells have a nucleus.", "すべての細胞に核がある。", "所有細胞都有細胞核。"),
        T("All organisms are made of exactly one cell.", "すべての生物はちょうど1個の細胞からできている。", "所有生物都剛好由一個細胞構成。"),
        T("Cells were first seen using a light microscope.", "細胞は光学顕微鏡ではじめて観察された。", "細胞最先是用光學顯微鏡看見的。")],
      answer: 0,
      explanation: T("Deduction uses a general theory to predict a specific case: if all organisms are made of cells, a new organism should be too. B and C are false statements (prokaryotes have no nucleus; many organisms have many cells). D is a historical fact, not a prediction from the theory.",
        "演繹は一般的な理論から個別の事例を予測します。すべての生物が細胞でできているなら、新しい生物もそうだろう、ということです。BとCは誤り（原核生物には核がなく、多くの生物は多数の細胞をもつ）。Dは歴史的事実で、理論からの予測ではありません。",
        "演繹是由一般理論預測具體個案：如果所有生物由細胞構成，新生物也應如此。B 和 C 錯誤（原核生物沒有細胞核；許多生物有很多細胞）。D 是歷史事實，不是由學說推出的預測。") },
    { id: "a2-2-q02", type: "multi", ahl: false, difficulty: 1, ref: "A2.2.4", paper: "1A",
      stem: T("Which structures are found in typical cells of ALL living organisms?", "すべての生物の典型的な細胞にある構造はどれですか（すべて選択）。", "哪些結構存在於<strong>所有</strong>生物的典型細胞中？（選所有正確項）"),
      options: [
        T("DNA as genetic material", "遺伝物質としてのDNA", "作為遺傳物質的 DNA"),
        T("A nucleus", "核", "細胞核"),
        T("A plasma membrane made of lipids", "脂質でできた細胞膜", "由脂質構成的質膜"),
        T("Cytoplasm made mainly of water", "主に水からなる細胞質", "主要由水組成的細胞質")],
      answer: [0, 2, 3],
      explanation: T("DNA, a lipid plasma membrane and a watery cytoplasm are universal. A nucleus is found only in eukaryotes, so prokaryotes lack it.",
        "DNA・脂質の細胞膜・水を主成分とする細胞質は共通です。核は真核生物にしかなく、原核生物にはありません。",
        "DNA、脂質質膜和含水的細胞質是所有細胞共有的。細胞核只見於真核生物，原核生物沒有。") },
    { id: "a2-2-q03", type: "short", ahl: false, difficulty: 2, ref: "A2.2.2", paper: "2", commandTerm: "Calculate", marks: 3,
      stem: T("A cell is 12 µm long. In a photograph it measures 36 mm. Calculate the magnification of the photograph.",
        "ある細胞の長さは12 µmです。写真では36 mmでした。写真の倍率を計算しなさい。",
        "一個細胞長 12 µm，在相片中量得 36 mm。計算相片的放大率。"),
      markscheme: [
        T("convert to the same unit: 12 µm = 0.012 mm (or 36 mm = 36 000 µm);", "単位をそろえる：12 µm = 0.012 mm（または36 mm = 36 000 µm）;", "統一單位：12 µm = 0.012 mm（或 36 mm = 36 000 µm）;"),
        T("magnification = image size ÷ actual size = 36 ÷ 0.012;", "倍率 = 像の大きさ ÷ 実際の大きさ = 36 ÷ 0.012;", "放大率 = 影像大小 ÷ 實際大小 = 36 ÷ 0.012;"),
        T("= ×3000 [award 3 marks for correct answer with working; answer without working may score less].", "= ×3000［正答と途中式で3点］", "= ×3000［答案正確且有步驟得 3 分］")],
      modelAnswer: T("12 µm = 0.012 mm. M = 36 mm ÷ 0.012 mm = ×3000.", "12 µm = 0.012 mm。M = 36 mm ÷ 0.012 mm = ×3000。", "12 µm = 0.012 mm。M = 36 mm ÷ 0.012 mm = ×3000。") },
    { id: "a2-2-q04", type: "short", ahl: false, difficulty: 2, ref: "A2.2.2", paper: "2", commandTerm: "Calculate", marks: 4,
      stem: T("A micrograph of bacteria has a scale bar labelled “2 µm”. The bar measures 20 mm. One bacterium measures 32 mm long. Calculate the actual length of the bacterium in µm.",
        "細菌の顕微鏡写真に「2 µm」のスケールバーがあり、バーの長さは20 mmです。ある細菌の長さは32 mmでした。この細菌の実際の長さをµmで計算しなさい。",
        "一張細菌顯微照片有標示「2 µm」的比例尺，比例尺量得 20 mm。一個細菌量得長 32 mm。計算該細菌的實際長度（單位 µm）。"),
      markscheme: [
        T("magnification = 20 mm ÷ 2 µm = 20 mm ÷ 0.002 mm (unit conversion);", "倍率 = 20 mm ÷ 2 µm = 20 mm ÷ 0.002 mm（単位換算）;", "放大率 = 20 mm ÷ 2 µm = 20 mm ÷ 0.002 mm（單位換算）;"),
        T("= ×10 000;", "= ×10 000;", "= ×10 000;"),
        T("actual length = 32 mm ÷ 10 000 = 0.0032 mm;", "実際の長さ = 32 mm ÷ 10 000 = 0.0032 mm;", "實際長度 = 32 mm ÷ 10 000 = 0.0032 mm;"),
        T("= 3.2 µm [accept 3.2 µm by proportion: 32/20 × 2 µm].", "= 3.2 µm［比で 32/20 × 2 µm としてもよい］", "= 3.2 µm［用比例 32/20 × 2 µm 亦可］")],
      modelAnswer: T("M = 20 mm ÷ 0.002 mm = ×10 000. Actual length = 32 mm ÷ 10 000 = 0.0032 mm = 3.2 µm.", "M = 20 mm ÷ 0.002 mm = ×10 000。実際の長さ = 32 mm ÷ 10 000 = 0.0032 mm = 3.2 µm。", "M = 20 mm ÷ 0.002 mm = ×10 000。實際長度 = 32 mm ÷ 10 000 = 0.0032 mm = 3.2 µm。") },
    { id: "a2-2-q05", type: "mcq", ahl: false, difficulty: 2, ref: "A2.2.2", paper: "1A",
      stem: T("A structure measures 5 mm in a micrograph with a magnification of ×1000. What is its actual size?", "顕微鏡写真（倍率×1000）で、ある構造は5 mmでした。実際の大きさはいくらですか。", "一個結構在放大率 ×1000 的顯微照片中量得 5 mm。它的實際大小是多少？"),
      options: [T("5 µm", "5 µm", "5 µm"), T("0.5 µm", "0.5 µm", "0.5 µm"), T("5 mm", "5 mm", "5 mm"), T("50 µm", "50 µm", "50 µm")],
      answer: 0,
      explanation: T("A = I ÷ M = 5 mm ÷ 1000 = 0.005 mm = 5 µm (1 mm = 1000 µm). B and D are slips of a factor of ten when converting units. C forgets to divide.",
        "A = I ÷ M = 5 mm ÷ 1000 = 0.005 mm = 5 µm（1 mm = 1000 µm）。BとDは単位換算で10倍ずれた誤り、Cは割り算を忘れています。",
        "A = I ÷ M = 5 mm ÷ 1000 = 0.005 mm = 5 µm（1 mm = 1000 µm）。B 和 D 是單位換算時差了十倍；C 忘了做除法。") },
    { id: "a2-2-q06", type: "short", ahl: false, difficulty: 2, ref: "A2.2.2", paper: "2", commandTerm: "Calculate", marks: 3,
      stem: T("A student calibrates an eyepiece graticule. 50 graticule divisions line up with 0.25 mm on a stage micrometer. A cell then measures 18 graticule divisions. Calculate the actual length of the cell in µm.",
        "生徒が接眼ミクロメーターを較正しました。接眼ミクロメーターの50目盛りが、対物ミクロメーターの0.25 mmと一致しました。細胞の長さは18目盛りでした。細胞の実際の長さをµmで計算しなさい。",
        "一名學生校準目鏡測微尺：目鏡測微尺的 50 格與載物臺測微尺的 0.25 mm 對齊。其後量得一個細胞長 18 格。計算該細胞的實際長度（單位 µm）。"),
      markscheme: [
        T("one division = 0.25 mm ÷ 50 = 0.005 mm = 5 µm;", "1目盛り = 0.25 mm ÷ 50 = 0.005 mm = 5 µm;", "1 格 = 0.25 mm ÷ 50 = 0.005 mm = 5 µm;"),
        T("length = 18 × 5 µm;", "長さ = 18 × 5 µm;", "長度 = 18 × 5 µm;"),
        T("= 90 µm.", "= 90 µm。", "= 90 µm。")],
      modelAnswer: T("1 division = 0.25 mm ÷ 50 = 0.005 mm = 5 µm. Length = 18 × 5 = 90 µm.", "1目盛り = 0.25 mm ÷ 50 = 0.005 mm = 5 µm。長さ = 18 × 5 = 90 µm。", "1 格 = 0.25 mm ÷ 50 = 0.005 mm = 5 µm。長度 = 18 × 5 = 90 µm。") },
    { id: "a2-2-q07", type: "order", ahl: false, difficulty: 1, ref: "A2.2.2", paper: "1A",
      stem: T("Put the steps for observing a stained temporary mount in a sensible order.", "染色した一時プレパラートを観察する手順を、適切な順に並べなさい。", "把觀察染色臨時裝片的步驟按合理次序排列。"),
      items: [
        T("Place a thin piece of specimen on the slide and add a drop of stain", "スライドガラスに薄い試料を置き、染色液を1滴加える", "把薄標本放在載玻片上，加一滴染色劑"),
        T("Lower a coverslip at an angle to avoid trapping air bubbles", "気泡が入らないよう、カバーガラスを斜めから下ろす", "把蓋玻片斜着放下，避免困住氣泡"),
        T("Use the lowest-power objective and the coarse adjustment to find the specimen", "最低倍率の対物レンズと粗動ねじで試料を見つける", "用最低倍數物鏡和粗調螺旋找到標本"),
        T("Sharpen the image with the fine adjustment", "微動ねじで像をはっきりさせる", "用細調螺旋令影像清晰"),
        T("Change to a higher-power objective and refocus with the fine adjustment only", "高倍率の対物レンズに替え、微動ねじだけで再びピントを合わせる", "轉用較高倍數物鏡，只用細調螺旋重新對焦")],
      explanation: T("The mount must be prepared before viewing. You find the specimen at low power first because the field of view is larger, and at higher power you must use only the fine adjustment to avoid hitting the slide.",
        "観察の前にプレパラートを作ります。低倍率は視野が広いので、まず低倍率で試料を見つけます。高倍率では、スライドにぶつけないよう微動ねじだけを使います。",
        "觀察前要先製好裝片。先用低倍數是因為視野較大；轉用高倍數時只可用細調螺旋，以免撞到玻片。") },
    { id: "a2-2-q08", type: "short", ahl: false, difficulty: 3, ref: "A2.2.2", paper: "2", commandTerm: "Calculate", marks: 4,
      stem: T("A student draws a mitochondrion from an electron micrograph. The drawing is 45 mm long. The actual length of the mitochondrion is 1.5 µm. (a) Calculate the magnification of the drawing. [2] (b) The student wants to add a scale bar representing 2 µm. Calculate the length of the bar to draw. [2]",
        "生徒が電子顕微鏡写真からミトコンドリアを描きました。図の長さは45 mm、ミトコンドリアの実際の長さは1.5 µmです。(a) 図の倍率を計算しなさい。[2] (b) 2 µmを表すスケールバーを加えたい。描くバーの長さを計算しなさい。[2]",
        "一名學生根據電子顯微照片繪畫線粒體，圖長 45 mm，線粒體實際長度為 1.5 µm。(a) 計算該圖的放大率。[2] (b) 學生想加上代表 2 µm 的比例尺，計算要畫的比例尺長度。[2]"),
      markscheme: [
        T("(a) 1.5 µm = 0.0015 mm; M = 45 ÷ 0.0015;", "(a) 1.5 µm = 0.0015 mm；M = 45 ÷ 0.0015;", "(a) 1.5 µm = 0.0015 mm；M = 45 ÷ 0.0015;"),
        T("(a) = ×30 000;", "(a) = ×30 000;", "(a) = ×30 000;"),
        T("(b) bar length = actual length × magnification = 2 µm × 30 000 = 60 000 µm;", "(b) バーの長さ = 実際の長さ × 倍率 = 2 µm × 30 000 = 60 000 µm;", "(b) 比例尺長度 = 實際長度 × 放大率 = 2 µm × 30 000 = 60 000 µm;"),
        T("(b) = 60 mm.", "(b) = 60 mm。", "(b) = 60 mm。")],
      modelAnswer: T("(a) M = 45 mm ÷ 0.0015 mm = ×30 000. (b) Bar = 2 µm × 30 000 = 60 000 µm = 60 mm.", "(a) M = 45 mm ÷ 0.0015 mm = ×30 000。(b) バー = 2 µm × 30 000 = 60 000 µm = 60 mm。", "(a) M = 45 mm ÷ 0.0015 mm = ×30 000。(b) 比例尺 = 2 µm × 30 000 = 60 000 µm = 60 mm。") },
    { id: "a2-2-q09", type: "short", ahl: false, difficulty: 3, ref: "A2.2.2", paper: "2", commandTerm: "Calculate", marks: 4,
      stem: T("An electron micrograph of a virus particle has a magnification of ×200 000. The virus particle measures 24 mm across in the micrograph. Calculate the actual diameter of the virus in nanometres (nm).",
        "ウイルス粒子の電子顕微鏡写真の倍率は×200 000で、粒子の直径は写真上で24 mmでした。ウイルスの実際の直径をナノメートル (nm) で計算しなさい。",
        "一張病毒顆粒的電子顯微照片放大率為 ×200 000，顆粒在照片中闊 24 mm。計算病毒的實際直徑（單位納米 nm）。"),
      markscheme: [
        T("actual size = image size ÷ magnification = 24 mm ÷ 200 000;", "実際の大きさ = 像の大きさ ÷ 倍率 = 24 mm ÷ 200 000;", "實際大小 = 影像大小 ÷ 放大率 = 24 mm ÷ 200 000;"),
        T("= 0.00012 mm;", "= 0.00012 mm;", "= 0.00012 mm;"),
        T("convert: 1 mm = 1 000 000 nm (or 1 mm = 1000 µm, 1 µm = 1000 nm);", "換算：1 mm = 1 000 000 nm（または1 mm = 1000 µm、1 µm = 1000 nm）;", "換算：1 mm = 1 000 000 nm（或 1 mm = 1000 µm，1 µm = 1000 nm）;"),
        T("= 120 nm.", "= 120 nm。", "= 120 nm。")],
      modelAnswer: T("A = 24 mm ÷ 200 000 = 0.00012 mm = 0.12 µm = 120 nm.", "A = 24 mm ÷ 200 000 = 0.00012 mm = 0.12 µm = 120 nm。", "A = 24 mm ÷ 200 000 = 0.00012 mm = 0.12 µm = 120 nm。") },
    { id: "a2-2-q10", type: "mcq", ahl: false, difficulty: 2, ref: "A2.2.3", paper: "1A",
      stem: T("Why can an electron microscope show much more detail than a light microscope?", "電子顕微鏡が光学顕微鏡よりはるかに細かい構造を示せるのはなぜですか。", "為甚麼電子顯微鏡能顯示比光學顯微鏡細緻得多的結構？"),
      options: [
        T("Electrons have a much shorter wavelength than light, giving higher resolution.", "電子の波長は光よりずっと短く、分解能が高いから。", "電子的波長比光短得多，解像度較高。"),
        T("It can be used to observe living cells in their natural state.", "生きた細胞を自然な状態で観察できるから。", "可以觀察處於天然狀態的活細胞。"),
        T("It only needs a bigger lens to give higher magnification.", "より大きなレンズで倍率を上げているだけだから。", "只需要較大的透鏡便能得到更高的放大率。"),
        T("Stains make the structures glow so they can be located.", "染色で構造が光り、位置が分かるから。", "染色劑令結構發光，所以可找出位置。")],
      answer: 0,
      explanation: T("Resolution is limited by wavelength, and electrons have a far shorter wavelength than visible light. B is wrong because specimens are in a vacuum and dead. C confuses magnification with resolution. D describes fluorescent staining in light microscopy.",
        "分解能は波長で制限され、電子は可視光よりはるかに波長が短いです。Bは、試料が真空中で死んでいるので誤り。Cは倍率と分解能の混同。Dは光学顕微鏡の蛍光染色の説明です。",
        "解像度受波長限制，而電子的波長遠比可見光短。B 錯誤，因為標本置於真空中，已經死亡。C 混淆了放大率和解像度。D 描述的是光學顯微鏡的螢光染色。") },
    { id: "a2-2-q11", type: "match", ahl: false, difficulty: 1, ref: "A2.2.3", paper: "1A",
      stem: T("Match each technique to its main advantage or use.", "各技術を、主な利点や用途と対応させなさい。", "把每項技術與其主要優點或用途配對。"),
      pairs: [
        { left: T("Electron microscopy", "電子顕微鏡", "電子顯微鏡"), right: T("High resolution, so the fine structure (ultrastructure) of cells can be seen", "分解能が高く、細胞の微細構造が見える", "解像度高，可看見細胞的超微結構") },
        { left: T("Freeze fracture", "凍結割断法", "冷凍斷裂"), right: T("Shows the inside of membranes, including embedded proteins", "埋め込まれたタンパク質を含む、膜の内部が見える", "可看見膜的內部，包括嵌入的蛋白質") },
        { left: T("Cryogenic electron microscopy", "クライオ電子顕微鏡", "低溫電子顯微鏡"), right: T("Keeps molecules close to their natural shape without staining or fixing", "染色や固定なしで、分子を自然に近い形に保てる", "不用染色或固定，分子保持接近天然形態") },
        { left: T("Immunofluorescence", "免疫蛍光法", "免疫螢光"), right: T("Locates a specific protein using a fluorescent antibody", "蛍光抗体で特定のタンパク質の位置を調べる", "用螢光抗體找出特定蛋白質的位置") }],
      explanation: T("Each technique answers a different kind of question about cell structure.", "それぞれの技術は、細胞構造についての異なる種類の疑問に答えます。", "每項技術回答關於細胞結構的不同問題。") },
    { id: "a2-2-q12", type: "short", ahl: false, difficulty: 2, ref: "A2.2.5–A2.2.6", paper: "2", commandTerm: "Compare and contrast", marks: 4,
      stem: T("Compare and contrast the structure of a prokaryote cell and a eukaryote cell.", "原核細胞と真核細胞の構造を比較し、対比しなさい。", "比較並對比原核細胞與真核細胞的結構。"),
      markscheme: [
        T("similarity: both have a plasma membrane, cytoplasm, DNA and ribosomes;", "共通点：どちらも細胞膜・細胞質・DNA・リボソームをもつ;", "相同點：兩者都有質膜、細胞質、DNA 和核糖體;"),
        T("DNA is naked and circular, in a nucleoid (prokaryote) but linear chromosomes with histones, enclosed in a nucleus with a double membrane (eukaryote);", "DNA：原核生物はむき出しの環状DNAで核様体にある。真核生物はヒストンと結合した染色体で、二重膜の核に包まれる;", "DNA：原核生物為環狀裸 DNA，位於擬核；真核生物為與組蛋白結合的染色體，包在有雙層膜的細胞核內;"),
        T("ribosomes are 70S (prokaryote) but 80S (eukaryote);", "リボソームは原核生物が70S、真核生物が80S;", "核糖體：原核生物為 70S，真核生物為 80S;"),
        T("eukaryotes have membrane-bound organelles (mitochondria, ER, Golgi, lysosomes) but prokaryotes do not;", "真核生物には膜で囲まれた細胞小器官（ミトコンドリア・ER・ゴルジ体・リソソーム）があるが、原核生物にはない;", "真核生物有膜包圍的胞器（線粒體、內質網、高爾基體、溶酶體），原核生物沒有;"),
        T("prokaryotes have a cell wall (eukaryotes: only plants and fungi) / prokaryote cells are much smaller.", "原核生物には細胞壁がある（真核生物は植物と菌類のみ）／原核細胞のほうがずっと小さい。", "原核生物有細胞壁（真核生物只有植物和真菌有）／原核細胞小得多。")],
      modelAnswer: T("Both have a plasma membrane, cytoplasm, DNA and ribosomes. Prokaryote DNA is naked and circular in a nucleoid, while eukaryote DNA is in chromosomes with histones inside a nucleus with a double membrane. Prokaryotes have 70S ribosomes and eukaryotes 80S. Eukaryotes have membrane-bound organelles such as mitochondria and the Golgi apparatus; prokaryotes do not.",
        "どちらも細胞膜・細胞質・DNA・リボソームをもちます。原核生物のDNAはむき出しの環状で核様体にあり、真核生物のDNAはヒストンと結合した染色体で、二重膜の核の中にあります。リボソームは原核生物が70S、真核生物が80Sです。真核生物にはミトコンドリアやゴルジ体など膜で囲まれた細胞小器官がありますが、原核生物にはありません。",
        "兩者都有質膜、細胞質、DNA 和核糖體。原核生物的 DNA 是環狀裸 DNA，位於擬核；真核生物的 DNA 與組蛋白結合成染色體，位於有雙層膜的細胞核內。原核生物有 70S 核糖體，真核生物有 80S。真核生物有線粒體和高爾基體等膜包圍的胞器，原核生物沒有。") },
    { id: "a2-2-q13", type: "multi", ahl: false, difficulty: 2, ref: "A2.2.6", paper: "1A",
      stem: T("Which structures in a eukaryote cell are surrounded by a double membrane?", "真核細胞で二重膜に囲まれている構造はどれですか（すべて選択）。", "真核細胞中哪些結構被雙層膜包圍？（選所有正確項）"),
      options: [
        T("Nucleus", "核", "細胞核"), T("Mitochondrion", "ミトコンドリア", "線粒體"), T("Golgi apparatus", "ゴルジ体", "高爾基體"), T("Lysosome", "リソソーム", "溶酶體")],
      answer: [0, 1],
      explanation: T("The nuclear envelope and the mitochondrion each have two membranes. The Golgi apparatus (a stack of single-membrane sacs) and lysosomes (single-membrane vesicles) do not.",
        "核膜とミトコンドリアはそれぞれ2枚の膜をもちます。ゴルジ体（単膜の袋の積み重ね）とリソソーム（単膜の小胞）はもちません。",
        "核膜和線粒體各有兩層膜。高爾基體（單層膜囊的堆疊）和溶酶體（單層膜囊泡）則沒有。") },
    { id: "a2-2-q14", type: "mcq", ahl: false, difficulty: 2, ref: "A2.2.8", paper: "1A",
      stem: T("Which feature is present in a fungal cell but absent from both a typical animal cell and a typical plant cell?", "菌類の細胞にあり、典型的な動物細胞にも植物細胞にもない特徴はどれですか。", "哪項特徵存在於真菌細胞，但<strong>不</strong>存在於典型動物細胞和典型植物細胞？"),
      options: [
        T("A cell wall", "細胞壁", "細胞壁"), T("Chloroplasts", "葉緑体", "葉綠體"), T("A cell wall made mainly of chitin", "主にキチンでできた細胞壁", "主要由幾丁質構成的細胞壁"), T("A large permanent sap vacuole", "大きな永続的液胞", "大型永久性液泡")],
      answer: 2,
      explanation: T("Plants also have cell walls (cellulose), so A is not unique to fungi. Chitin walls are the distinguishing feature. Fungi have no chloroplasts, and the large central sap vacuole is typical of plant cells.",
        "植物にも細胞壁（セルロース）があるので、Aは菌類に特有ではありません。キチンの細胞壁が区別点です。菌類に葉緑体はなく、大きな中央液胞は植物細胞の特徴です。",
        "植物也有細胞壁（纖維素），所以 A 並非真菌獨有。幾丁質細胞壁才是區別點。真菌沒有葉綠體，大型中央液泡則是植物細胞的特徵。") },
    { id: "a2-2-q15", type: "short", ahl: false, difficulty: 2, ref: "A2.2.9", paper: "2", commandTerm: "State", marks: 4,
      stem: T("(a) State the number of nuclei in (i) a skeletal muscle fibre, (ii) a mature mammalian red blood cell and (iii) an aseptate fungal hypha. [3] (b) Suggest one advantage of the absence of a nucleus in a red blood cell. [1]",
        "(a) (i) 骨格筋線維、(ii) 成熟した哺乳類の赤血球、(iii) 隔壁のない菌糸の核の数を述べなさい。[3] (b) 赤血球に核がないことの利点を1つ示唆しなさい。[1]",
        "(a) 指出 (i) 骨骼肌纖維、(ii) 成熟的哺乳動物紅血球、(iii) 無隔膜真菌菌絲的細胞核數目。[3] (b) 提出紅血球沒有細胞核的一個好處。[1]"),
      markscheme: [
        T("(a)(i) many / multiple nuclei;", "(a)(i) 多数;", "(a)(i) 很多（多個）細胞核;"),
        T("(a)(ii) none / no nucleus;", "(a)(ii) なし;", "(a)(ii) 沒有細胞核;"),
        T("(a)(iii) many / multiple nuclei in a continuous cytoplasm;", "(a)(iii) 連続した細胞質に多数;", "(a)(iii) 連續細胞質內有很多細胞核;"),
        T("(b) more space for haemoglobin so more oxygen can be carried (accept: biconcave shape is maintained / flexible to squeeze through capillaries).", "(b) ヘモグロビンを入れる空間が増え、より多くの酸素を運べる（毛細血管を通りやすいも可）。", "(b) 有更多空間容納血紅蛋白，能運載更多氧氣（亦可答：較易擠過微絲血管）。")],
      modelAnswer: T("(a) (i) many; (ii) none; (iii) many. (b) With no nucleus there is more space for haemoglobin, so each cell can carry more oxygen.",
        "(a) (i) 多数、(ii) なし、(iii) 多数。(b) 核がないとヘモグロビンの入る空間が増え、1個の細胞でより多くの酸素を運べます。",
        "(a) (i) 很多；(ii) 沒有；(iii) 很多。(b) 沒有細胞核，血紅蛋白有更多空間，每個細胞可運載更多氧氣。") },
    { id: "a2-2-q16", type: "short", ahl: false, difficulty: 2, ref: "A2.2.10", paper: "1B", commandTerm: "Identify", marks: 4,
      data: T(
        `<svg viewBox="0 0 300 200" role="img" aria-label="Schematic of four structures labelled A to D" style="max-width:420px;width:100%;height:auto;background:var(--surface-2);border-radius:8px">
<title>Schematic electron micrograph (not to scale)</title>
<ellipse cx="60" cy="55" rx="42" ry="24" fill="none" stroke="var(--ink)" stroke-width="2"/>
<ellipse cx="60" cy="55" rx="37" ry="19" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
<path d="M32 55 q6 -14 10 0 t10 0 M54 55 q6 -14 10 0 t10 0 M43 62 q6 12 10 0 t10 0" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
<text x="60" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">A</text>
<g fill="none" stroke="var(--ink)" stroke-width="2"><path d="M190 30 q40 -8 80 0"/><path d="M190 42 q40 -8 80 0"/><path d="M190 54 q40 -8 80 0"/><path d="M190 66 q40 -8 80 0"/></g>
<g fill="var(--ink)"><circle cx="186" cy="38" r="3"/><circle cx="276" cy="50" r="3"/><circle cx="283" cy="62" r="3"/></g>
<text x="230" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">B</text>
<g fill="none" stroke="var(--ink)" stroke-width="2"><path d="M20 130 q40 -14 90 0"/><path d="M20 146 q40 -14 90 0"/><path d="M20 162 q40 -14 90 0"/></g>
<g fill="var(--ink)"><circle cx="35" cy="126" r="1.8"/><circle cx="55" cy="122" r="1.8"/><circle cx="75" cy="122" r="1.8"/><circle cx="95" cy="126" r="1.8"/><circle cx="35" cy="142" r="1.8"/><circle cx="55" cy="138" r="1.8"/><circle cx="75" cy="138" r="1.8"/><circle cx="95" cy="142" r="1.8"/><circle cx="35" cy="158" r="1.8"/><circle cx="55" cy="154" r="1.8"/><circle cx="75" cy="154" r="1.8"/><circle cx="95" cy="158" r="1.8"/></g>
<text x="65" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">C</text>
<circle cx="225" cy="140" r="32" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="34 7"/>
<circle cx="225" cy="140" r="27" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="30 6"/>
<path d="M210 135 q8 -8 16 0 t14 4 M208 148 q10 6 18 -2" fill="none" stroke="var(--ink)" stroke-width="3" opacity=".55"/>
<text x="225" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">D</text></svg>
<p style="margin:.4rem 0 0">Schematic drawing of structures in an electron micrograph (not to scale).</p>`,
        `<svg viewBox="0 0 300 200" role="img" aria-label="A〜Dの4つの構造の模式図" style="max-width:420px;width:100%;height:auto;background:var(--surface-2);border-radius:8px">
<title>電子顕微鏡写真の模式図（縮尺なし）</title>
<ellipse cx="60" cy="55" rx="42" ry="24" fill="none" stroke="var(--ink)" stroke-width="2"/>
<ellipse cx="60" cy="55" rx="37" ry="19" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
<path d="M32 55 q6 -14 10 0 t10 0 M54 55 q6 -14 10 0 t10 0 M43 62 q6 12 10 0 t10 0" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
<text x="60" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">A</text>
<g fill="none" stroke="var(--ink)" stroke-width="2"><path d="M190 30 q40 -8 80 0"/><path d="M190 42 q40 -8 80 0"/><path d="M190 54 q40 -8 80 0"/><path d="M190 66 q40 -8 80 0"/></g>
<g fill="var(--ink)"><circle cx="186" cy="38" r="3"/><circle cx="276" cy="50" r="3"/><circle cx="283" cy="62" r="3"/></g>
<text x="230" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">B</text>
<g fill="none" stroke="var(--ink)" stroke-width="2"><path d="M20 130 q40 -14 90 0"/><path d="M20 146 q40 -14 90 0"/><path d="M20 162 q40 -14 90 0"/></g>
<g fill="var(--ink)"><circle cx="35" cy="126" r="1.8"/><circle cx="55" cy="122" r="1.8"/><circle cx="75" cy="122" r="1.8"/><circle cx="95" cy="126" r="1.8"/><circle cx="35" cy="142" r="1.8"/><circle cx="55" cy="138" r="1.8"/><circle cx="75" cy="138" r="1.8"/><circle cx="95" cy="142" r="1.8"/><circle cx="35" cy="158" r="1.8"/><circle cx="55" cy="154" r="1.8"/><circle cx="75" cy="154" r="1.8"/><circle cx="95" cy="158" r="1.8"/></g>
<text x="65" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">C</text>
<circle cx="225" cy="140" r="32" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="34 7"/>
<circle cx="225" cy="140" r="27" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="30 6"/>
<path d="M210 135 q8 -8 16 0 t14 4 M208 148 q10 6 18 -2" fill="none" stroke="var(--ink)" stroke-width="3" opacity=".55"/>
<text x="225" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">D</text></svg>
<p style="margin:.4rem 0 0">電子顕微鏡写真に見える構造の模式図（縮尺なし）。</p>`,
        `<svg viewBox="0 0 300 200" role="img" aria-label="A 至 D 四個結構的示意圖" style="max-width:420px;width:100%;height:auto;background:var(--surface-2);border-radius:8px">
<title>電子顯微照片示意圖（未按比例）</title>
<ellipse cx="60" cy="55" rx="42" ry="24" fill="none" stroke="var(--ink)" stroke-width="2"/>
<ellipse cx="60" cy="55" rx="37" ry="19" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
<path d="M32 55 q6 -14 10 0 t10 0 M54 55 q6 -14 10 0 t10 0 M43 62 q6 12 10 0 t10 0" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
<text x="60" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">A</text>
<g fill="none" stroke="var(--ink)" stroke-width="2"><path d="M190 30 q40 -8 80 0"/><path d="M190 42 q40 -8 80 0"/><path d="M190 54 q40 -8 80 0"/><path d="M190 66 q40 -8 80 0"/></g>
<g fill="var(--ink)"><circle cx="186" cy="38" r="3"/><circle cx="276" cy="50" r="3"/><circle cx="283" cy="62" r="3"/></g>
<text x="230" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">B</text>
<g fill="none" stroke="var(--ink)" stroke-width="2"><path d="M20 130 q40 -14 90 0"/><path d="M20 146 q40 -14 90 0"/><path d="M20 162 q40 -14 90 0"/></g>
<g fill="var(--ink)"><circle cx="35" cy="126" r="1.8"/><circle cx="55" cy="122" r="1.8"/><circle cx="75" cy="122" r="1.8"/><circle cx="95" cy="126" r="1.8"/><circle cx="35" cy="142" r="1.8"/><circle cx="55" cy="138" r="1.8"/><circle cx="75" cy="138" r="1.8"/><circle cx="95" cy="142" r="1.8"/><circle cx="35" cy="158" r="1.8"/><circle cx="55" cy="154" r="1.8"/><circle cx="75" cy="154" r="1.8"/><circle cx="95" cy="158" r="1.8"/></g>
<text x="65" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">C</text>
<circle cx="225" cy="140" r="32" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="34 7"/>
<circle cx="225" cy="140" r="27" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="30 6"/>
<path d="M210 135 q8 -8 16 0 t14 4 M208 148 q10 6 18 -2" fill="none" stroke="var(--ink)" stroke-width="3" opacity=".55"/>
<text x="225" y="192" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">D</text></svg>
<p style="margin:.4rem 0 0">電子顯微照片中結構的示意圖（未按比例）。</p>`),
      stem: T("Identify the structures labelled A, B, C and D.", "A、B、C、Dで示された構造を答えなさい。", "指出標示為 A、B、C、D 的結構。"),
      markscheme: [
        T("A: mitochondrion (double membrane, inner membrane folded);", "A：ミトコンドリア（二重膜、内膜が折りたたまれている）;", "A：線粒體（雙層膜，內膜摺疊）;"),
        T("B: Golgi apparatus (stack of flattened sacs with vesicles);", "B：ゴルジ体（小胞をともなう平たい袋の積み重ね）;", "B：高爾基體（扁平膜囊堆疊，旁有囊泡）;"),
        T("C: rough endoplasmic reticulum (flattened sacs with ribosomes);", "C：粗面小胞体（リボソームのついた平たい袋）;", "C：粗糙內質網（附有核糖體的扁平囊）;"),
        T("D: nucleus (double membrane with pores).", "D：核（核膜孔のある二重膜）。", "D：細胞核（有核孔的雙層膜）。")],
      modelAnswer: T("A: mitochondrion. B: Golgi apparatus. C: rough endoplasmic reticulum. D: nucleus.", "A：ミトコンドリア。B：ゴルジ体。C：粗面小胞体。D：核。", "A：線粒體。B：高爾基體。C：粗糙內質網。D：細胞核。") },
    { id: "a2-2-q17", type: "short", ahl: false, difficulty: 2, ref: "A2.2.11", paper: "2", commandTerm: "State", marks: 3,
      stem: T("State one function for each of the following structures: (a) sap vacuole, (b) Golgi apparatus, (c) microvilli.", "次の構造について、働きを1つずつ述べなさい。(a) 液胞 (b) ゴルジ体 (c) 微絨毛", "指出下列每個結構的一項功能：(a) 液泡 (b) 高爾基體 (c) 微絨毛。"),
      markscheme: [
        T("(a) stores water and dissolved substances / pressure supports the cell (turgor);", "(a) 水や溶質を貯蔵する／圧力で細胞を支える;", "(a) 儲存水和溶質／壓力支撐細胞（膨壓）;"),
        T("(b) modifies, sorts and packages proteins into vesicles;", "(b) タンパク質を修飾・選別して小胞に包む;", "(b) 修飾、分類蛋白質並包入囊泡;"),
        T("(c) increase the surface area of the plasma membrane for absorption (or secretion).", "(c) 細胞膜の表面積を増やし、吸収（や分泌）を助ける。", "(c) 增加質膜表面積，有助吸收（或分泌）。")],
      modelAnswer: T("(a) Stores water and dissolved substances. (b) Modifies and packages proteins in vesicles. (c) Increase the surface area for absorption.", "(a) 水や溶質を貯蔵する。(b) タンパク質を修飾して小胞に包む。(c) 表面積を増やして吸収を助ける。", "(a) 儲存水和溶質。(b) 修飾蛋白質並包入囊泡。(c) 增加表面積以助吸收。") },
    { id: "a2-2-q18", type: "short", ahl: true, difficulty: 3, ref: "A2.2.12", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain how the structure of mitochondria and chloroplasts supports the theory that they originated by endosymbiosis.", "ミトコンドリアと葉緑体の構造が、これらが細胞内共生で生じたという説をどう支持するか説明しなさい。", "解釋線粒體和葉綠體的結構如何支持它們源自內共生的學說。"),
      markscheme: [
        T("they have 70S ribosomes, like prokaryotes (cytoplasm of eukaryotes has 80S);", "原核生物と同じ70Sリボソームをもつ（真核生物の細胞質は80S）;", "它們有與原核生物相同的 70S 核糖體（真核生物細胞質是 80S）;"),
        T("they have naked, circular DNA, like prokaryotes (eukaryote nuclear DNA is bound to histones);", "原核生物と同じむき出しの環状DNAをもつ（真核生物の核DNAはヒストンと結合）;", "它們有與原核生物相同的環狀裸 DNA（真核生物核 DNA 與組蛋白結合）;"),
        T("they can replicate / divide independently inside the cell, as prokaryotes do;", "原核生物のように、細胞内で独立して複製・分裂できる;", "它們能像原核生物一樣，在細胞內獨立複製／分裂;"),
        T("so they were probably once free-living prokaryotes engulfed by a larger cell but not digested, with both benefiting.", "したがって、かつて自由生活の原核生物で、大きな細胞に取り込まれて消化されず、双方が利益を得たと考えられる。", "所以它們很可能曾是自由生活的原核生物，被較大的細胞吞入而沒有被消化，雙方得益。")],
      modelAnswer: T("Mitochondria and chloroplasts have 70S ribosomes and naked circular DNA, like prokaryotes, and they can replicate themselves within the cell. This suggests they were once free-living prokaryotes that were engulfed by a larger cell but not digested, so that both benefited.",
        "ミトコンドリアと葉緑体は、原核生物と同じ70Sリボソームとむき出しの環状DNAをもち、細胞内で自己複製できます。これは、かつて自由生活の原核生物だったものが大きな細胞に取り込まれ、消化されずに双方が利益を得たことを示唆します。",
        "線粒體和葉綠體像原核生物一樣有 70S 核糖體和環狀裸 DNA，而且能在細胞內自行複製。這顯示它們曾是自由生活的原核生物，被較大的細胞吞入但沒有被消化，雙方都得益。") },
    { id: "a2-2-q19", type: "short", ahl: true, difficulty: 3, ref: "A2.2.13", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("A muscle cell and a nerve cell in the same person have identical DNA but very different structures and functions. Explain how this can happen.", "同じ人の筋細胞と神経細胞は同一のDNAをもちますが、構造と働きは大きく異なります。これがどうして起こるのか説明しなさい。", "同一個人的肌肉細胞和神經細胞 DNA 相同，但結構和功能非常不同。解釋這是怎樣發生的。"),
      markscheme: [
        T("both cells contain the same genes / DNA;", "どちらの細胞も同じ遺伝子（DNA）をもつ;", "兩種細胞都含有相同的基因（DNA）;"),
        T("different genes are expressed (switched on/off) in the two cell types (different patterns of gene expression);", "2種類の細胞で発現する（オン・オフになる）遺伝子が異なる（遺伝子発現のパターンが違う）;", "兩種細胞表達（開啟／關閉）的基因不同（基因表達模式不同）;"),
        T("so different proteins are made, giving different structure and function (differentiation), often triggered by environmental signals.", "そのため異なるタンパク質が作られ、構造と働きが異なる（分化）。環境の信号が引き金になることが多い。", "所以製造的蛋白質不同，造成結構和功能不同（分化），往往由環境信號觸發。")],
      modelAnswer: T("Both cells have the same genes, but different genes are expressed in each. So different proteins are made, which gives each cell its own structure and function. This differentiation is often triggered by changes in the cell's environment.",
        "どちらの細胞も同じ遺伝子をもちますが、発現する遺伝子が異なります。そのため作られるタンパク質が異なり、各細胞に固有の構造と働きが生じます。この分化は細胞の環境の変化が引き金になることが多いです。",
        "兩種細胞有相同的基因，但各自表達的基因不同，所以製造的蛋白質不同，令每種細胞有自己的結構和功能。這種分化往往由細胞環境的變化所觸發。") },
    { id: "a2-2-q20", type: "mcq", ahl: true, difficulty: 2, ref: "A2.2.14", paper: "1A",
      stem: T("Which is an advantage of multicellularity over being unicellular?", "単細胞であることに比べた多細胞であることの利点はどれですか。", "與單細胞相比，多細胞有甚麼優點？"),
      options: [
        T("Every cell must carry out all the functions of life.", "すべての細胞が生命のすべての機能を行わなければならない。", "每個細胞都必須進行所有生命功能。"),
        T("Cells can specialize in different jobs and the organism can reach a larger size.", "細胞が異なる仕事に特殊化でき、生物が大きくなれる。", "細胞可以特化負責不同工作，而且生物可以長得較大。"),
        T("Multicellular organisms have evolved only once.", "多細胞生物は1回しか進化していない。", "多細胞生物只演化過一次。"),
        T("Multicellular organisms do not need cell differentiation.", "多細胞生物は細胞分化を必要としない。", "多細胞生物不需要細胞分化。")],
      answer: 1,
      explanation: T("Larger body size and cell specialization are the advantages named in the guide. A describes a unicellular organism. C is false because multicellularity evolved repeatedly. D is false because specialization depends on differentiation.",
        "IB のガイドが挙げる利点は、体の大型化と細胞の特殊化です。Aは単細胞生物の説明。Cは多細胞性が繰り返し進化したので誤り。Dは特殊化が分化に基づくので誤りです。",
        "指引所列的優點是身體較大和細胞特化。A 描述的是單細胞生物。C 錯誤，多細胞性曾多次演化出現。D 錯誤，特化要靠分化。") },

  ];
    IB.registerTopic({
    id: "A2.2", slug: "a2-2", theme: "A", level: 2, ahlOnly: false,
    title: T("Cell structure", "細胞の構造", "細胞結構"),
    guidingQuestions: [
      T("What are the features common to all cells and the features that differ?", "すべての細胞に共通する特徴と、異なる特徴は何か。", "所有細胞有哪些共同特徵？哪些特徵不同？"),
      T("How is microscopy used to investigate cell structure?", "細胞の構造を調べるために顕微鏡はどのように使われるか。", "顯微鏡如何用於研究細胞結構？")],
    summary: T(
      "All living things are made of cells. In this subtopic you learn the microscope skills used to study them (including calculating magnification and actual size), the features shared by all cells, and how prokaryote, animal, plant and fungal cells differ. At HL you also study how eukaryotic cells arose by endosymbiosis, how cells differentiate, and how multicellularity evolved.",
      "すべての生物は細胞からできています。この単元では、細胞を調べる顕微鏡の技能（倍率や実際の大きさの計算を含む）、すべての細胞に共通する特徴、原核・動物・植物・菌類の細胞の違いを学びます。HLでは、細胞内共生による真核細胞の起源、細胞分化、多細胞性の進化も学びます。",
      "所有生物都由細胞構成。這個子課題學習研究細胞的顯微鏡技能（包括計算放大率和實際大小）、所有細胞的共同特徵，以及原核、動物、植物和真菌細胞的分別。HL 還要學習真核細胞如何經內共生產生、細胞如何分化，以及多細胞性如何演化。"),
    sections,
    keyTerms: [
      { ahl: false, term: T("cell theory", "細胞説", "細胞學說"), def: T("All organisms are made of one or more cells, and cells are the basic structural unit of life.", "すべての生物は1つ以上の細胞からなり、細胞は生命の基本的な構造単位であるという説。", "所有生物由一個或多個細胞構成，細胞是生命的基本結構單位。") },
      { ahl: false, term: T("magnification", "倍率", "放大率"), def: T("Size of the image divided by the actual size of the object; it has no unit.", "像の大きさを実際の大きさで割った値。単位はない。", "影像大小除以物體實際大小；沒有單位。") },
      { ahl: false, term: T("resolution", "分解能", "解像度"), def: T("The ability to show two close points as separate; it decides how much detail can be seen.", "近接した2点を別々のものとして見分けられる能力。見える細部の量を決める。", "把靠近的兩點分辨為獨立兩點的能力；決定能看見多少細節。") },
      { ahl: false, term: T("scale bar", "スケールバー", "比例尺"), def: T("A line on a micrograph or drawing labelled with the actual length it represents.", "顕微鏡写真や図にある、実際の長さを表示した線。", "顯微照片或繪圖上的一條線，標示它所代表的實際長度。") },
      { ahl: false, term: T("eyepiece graticule", "接眼ミクロメーター", "目鏡測微尺"), def: T("A small ruler in the eyepiece of a microscope, calibrated against a stage micrometer.", "顕微鏡の接眼レンズ内の小さな物差し。対物ミクロメーターで較正して使う。", "顯微鏡目鏡內的小尺，用載物臺測微尺校準後使用。") },
      { ahl: false, term: T("immunofluorescence", "免疫蛍光法", "免疫螢光"), def: T("Using a fluorescent-labelled antibody to show where a specific protein is in a cell.", "蛍光標識した抗体で、特定のタンパク質が細胞のどこにあるかを示す方法。", "利用螢光標記的抗體顯示特定蛋白質在細胞中的位置。") },
      { ahl: false, term: T("prokaryote", "原核生物", "原核生物"), def: T("An organism whose cells have no nucleus or membrane-bound organelles; DNA is naked and in a loop; 70S ribosomes.", "細胞に核や膜で囲まれた細胞小器官がない生物。DNAはむき出しで環状、70Sリボソーム。", "細胞沒有細胞核或膜包圍胞器的生物；DNA 為環狀裸 DNA；有 70S 核糖體。") },
      { ahl: false, term: T("nucleoid", "核様体", "擬核"), def: T("The region of a prokaryote cell where the DNA is found; it has no surrounding membrane.", "原核細胞でDNAがある領域。囲む膜はない。", "原核細胞中存放 DNA 的區域，沒有膜包圍。") },
      { ahl: false, term: T("eukaryote", "真核生物", "真核生物"), def: T("An organism whose cells have a nucleus and other membrane-bound organelles; 80S ribosomes.", "細胞に核と膜で囲まれた細胞小器官がある生物。80Sリボソームをもつ。", "細胞有細胞核和其他膜包圍胞器的生物；有 80S 核糖體。") },
      { ahl: false, term: T("histone", "ヒストン", "組蛋白"), def: T("A protein that DNA is wrapped around in eukaryote chromosomes.", "真核生物の染色体でDNAが巻きつくタンパク質。", "真核染色體中 DNA 所纏繞的蛋白質。") },
      { ahl: false, term: T("cytoskeleton", "細胞骨格", "細胞骨架"), def: T("A network of microtubules and microfilaments that supports the cell and moves organelles.", "細胞を支え、細胞小器官を動かす微小管と微小繊維のネットワーク。", "由微管和微絲組成的網絡，支撐細胞並移動胞器。") },
      { ahl: false, term: T("lysosome", "リソソーム", "溶酶體"), def: T("A vesicle containing digestive enzymes that break down materials.", "物質を分解する消化酵素を含む小胞。", "含有消化酶、分解物質的囊泡。") },
      { ahl: false, term: T("sap vacuole", "液胞", "液泡"), def: T("The large central vacuole of a plant cell that stores water and solutes and keeps the cell firm.", "植物細胞の大きな中央液胞。水と溶質を貯蔵し、細胞を張った状態に保つ。", "植物細胞的大型中央液泡，儲存水和溶質並使細胞保持堅挺。") },
      { ahl: false, term: T("chitin", "キチン", "幾丁質"), def: T("The polysaccharide that forms the cell walls of fungi.", "菌類の細胞壁をつくる多糖。", "構成真菌細胞壁的多糖。") },
      { ahl: false, term: T("aseptate hypha", "隔壁のない菌糸", "無隔膜菌絲"), def: T("A fungal filament with no cross-walls, so many nuclei share one cytoplasm.", "仕切り壁がなく、多数の核が1つの細胞質を共有する菌類の糸状体。", "沒有橫隔的真菌絲狀體，很多細胞核共用一個細胞質。") },
      { ahl: false, term: T("microvilli", "微絨毛", "微絨毛"), def: T("Finger-like projections of the plasma membrane that increase surface area.", "細胞膜の指状の突起で、表面積を増やす。", "質膜的指狀突起，增加表面積。") },
      { ahl: true, term: T("endosymbiosis", "細胞内共生", "內共生"), def: T("A cell living inside another cell to the benefit of both; mitochondria and chloroplasts are thought to have arisen this way.", "ある細胞が別の細胞の内部で双方に利益をもたらして生きること。ミトコンドリアと葉緑体はこうして生じたと考えられる。", "一種細胞在另一細胞內生活而雙方得益；線粒體和葉綠體被認為是這樣產生的。") },
      { ahl: true, term: T("cell differentiation", "細胞分化", "細胞分化"), def: T("Development of cells into specialized types by expressing different genes.", "異なる遺伝子を発現することで、細胞が特殊化した型に発達すること。", "細胞透過表達不同基因而發育成特化類型。") },
      { ahl: true, term: T("gene expression", "遺伝子発現", "基因表達"), def: T("Use of a gene's information to make a protein; genes can be switched on or off.", "遺伝子の情報を使ってタンパク質をつくること。遺伝子はオン・オフが切り替わる。", "利用基因的資訊製造蛋白質；基因可以被開啟或關閉。") },
      { ahl: true, term: T("multicellularity", "多細胞性", "多細胞性"), def: T("Having a body made of many cells that work together, which evolved repeatedly.", "多数の細胞が協調して体をつくること。繰り返し進化した。", "身體由許多細胞合作構成，曾多次演化出現。") }
    ],
    misconceptions: [
      { wrong: T("Magnification and resolution mean the same thing.", "倍率と分解能は同じ意味である。", "放大率和解像度是同一回事。"),
        right: T("Magnification makes an image bigger; resolution is how much detail can be distinguished. A high magnification with poor resolution gives a big, blurry image.", "倍率は像を大きくすること、分解能は区別できる細部の量です。分解能が低いと、倍率を上げても大きくぼやけた像になるだけです。", "放大率令影像變大；解像度是能分辨多少細節。解像度差而放大率高，只會得到大而模糊的影像。") },
      { wrong: T("Prokaryotes have no DNA because they have no nucleus.", "原核生物は核がないのでDNAがない。", "原核生物沒有細胞核，所以沒有 DNA。"),
        right: T("Prokaryotes have DNA. It is naked (no histones), in a loop, and lies in the nucleoid region in the cytoplasm.", "原核生物にもDNAがあります。ヒストンのないむき出しの環状で、細胞質の核様体領域にあります。", "原核生物有 DNA。它是沒有組蛋白的環狀裸 DNA，位於細胞質中的擬核區。") },
      { wrong: T("Plant cells have chloroplasts instead of mitochondria.", "植物細胞はミトコンドリアのかわりに葉緑体をもつ。", "植物細胞有葉綠體，所以沒有線粒體。"),
        right: T("Plant cells have both. Chloroplasts carry out photosynthesis and mitochondria carry out aerobic respiration.", "植物細胞には両方あります。葉緑体は光合成を、ミトコンドリアは好気呼吸を行います。", "植物細胞兩者都有。葉綠體進行光合作用，線粒體進行有氧呼吸。") },
      { wrong: T("Fungi are plants because they have cell walls.", "菌類は細胞壁があるので植物である。", "真菌有細胞壁，所以是植物。"),
        right: T("Fungal cell walls are mainly chitin (plants: cellulose), and fungi have no chloroplasts. Fungi are a separate group.", "菌類の細胞壁は主にキチン（植物はセルロース）で、葉緑体もありません。菌類は別のグループです。", "真菌的細胞壁主要是幾丁質（植物是纖維素），而且沒有葉綠體。真菌是獨立的類群。") },
      { wrong: T("Cells that look different have different genes (they lose the genes they do not use).", "見た目が違う細胞は遺伝子が違う（使わない遺伝子を失う）。", "外觀不同的細胞有不同的基因（會失去不用的基因）。"),
        right: T("Differentiated cells of one organism keep the same genes. They differ because different genes are expressed (switched on or off).", "1つの生物の分化した細胞は同じ遺伝子をもち続けます。違いは、発現する遺伝子（オン・オフ）が異なるためです。", "同一生物中分化的細胞保留相同的基因。分別在於表達（開啟或關閉）的基因不同。") },
      { wrong: T("Endosymbiosis means a big cell ate bacteria and digested them.", "細胞内共生とは、大きな細胞が細菌を食べて消化したことである。", "內共生是指大細胞吃掉細菌並把它消化。"),
        right: T("The engulfed prokaryote was not digested. It survived inside the host and both benefited, eventually becoming a mitochondrion or chloroplast.", "取り込まれた原核生物は消化されませんでした。宿主の中で生き続けて双方が利益を得、やがてミトコンドリアや葉緑体になりました。", "被吞入的原核生物沒有被消化，而是在宿主內存活，雙方得益，最終變成線粒體或葉綠體。") }
    ],
    beyondSyllabus: [
      T("You do not need the internal parts of mitochondria and chloroplasts (cristae, matrix, thylakoids, grana, stroma) or how they are adapted for A2.2. That is B2.2 (AHL).", "A2.2では、ミトコンドリアや葉緑体の内部構造（クリステ・マトリックス・チラコイド・グラナ・ストロマ）やその適応は不要です。それはB2.2 (AHL) の内容です。", "在 A2.2 你不需要認識線粒體和葉綠體的內部結構（嵴、基質、類囊體、基粒、基質）及其適應特徵，那是 B2.2 (AHL) 的內容。"),
      T("You do not need other prokaryote structures such as the capsule, pili, plasmids or the structure of the bacterial flagellum, nor the Gram-staining procedure or peptidoglycan structure, to answer A2.2.5.", "A2.2.5では、莢膜・線毛・プラスミド・細菌の鞭毛の構造、グラム染色の手順、ペプチドグリカンの構造などは不要です。", "回答 A2.2.5 時，你不需要認識莢膜、菌毛、質粒、細菌鞭毛的結構，也不需要認識革蘭氏染色步驟或肽聚糖結構。"),
      T("You do not need to know how the lenses and electromagnets of TEM and SEM work, or exact resolution limits. Know the advantages of each technique.", "TEMとSEMのレンズや電磁石のしくみ、正確な分解能の限界は不要です。各技術の利点を知っていれば十分です。", "你不需要認識 TEM 和 SEM 的透鏡及電磁鐵如何運作，也不需要認識確切的解像度極限。只需認識各技術的優點。"),
      T("You do not need the detailed molecular structure of the cytoskeleton (tubulin, actin) or the “9+2” structure of cilia. (Actin and myosin filaments in muscle contraction are taught in B3.3 Muscle and motility, AHL.)", "細胞骨格の詳しい分子構造（チューブリン・アクチン）や繊毛の「9+2」構造は不要です。（筋収縮におけるアクチンとミオシンのフィラメントは B3.3 筋肉と運動 (AHL) で学びます。）", "你不需要認識細胞骨架的詳細分子結構（微管蛋白、肌動蛋白）或纖毛的「9+2」結構。（肌肉收縮中的肌動蛋白和肌球蛋白絲會在 B3.3 肌肉與運動 (AHL) 學習。）"),
      T("Not needed for this subtopic: the molecular mechanisms of differentiation (transcription factors, epigenetics) and types of stem cell. A2.2.13 asks only that differentiation is based on different patterns of gene expression, often triggered by the environment. Stem cells are taught in B2.3 (Cell specialization), and transcription factors and epigenetics in D2.2 (Gene expression).", "この単元では不要：分化の分子機構（転写因子・エピジェネティクス）や幹細胞の種類。A2.2.13 で求められるのは、分化が遺伝子発現パターンの違いに基づき、環境が引き金になることが多い、という点だけです。幹細胞は B2.3 (細胞の特殊化)、転写因子とエピジェネティクスは D2.2 (遺伝子発現) で学びます。", "此子課題不需要：分化的分子機制（轉錄因子、表觀遺傳）和幹細胞的類型。A2.2.13 只要求知道分化基於不同的基因表達模式，往往由環境觸發。幹細胞在 B2.3 (細胞特化) 學習，轉錄因子和表觀遺傳則在 D2.2 (基因表達) 學習。"),
      T("You do not need named multicellular lineages or details such as which archaeon was the host cell in the origin of eukaryotes.", "多細胞化した具体的な系統名や、真核生物の起源でどの古細菌が宿主だったかといった詳細は不要です。", "你不需要認識具名的多細胞譜系，也不需要認識真核生物起源中哪種古菌是宿主等細節。")
    ],
    links: [
      { to: "A1.2", why: T("DNA is the genetic material in every cell; naked DNA vs DNA with histones.", "DNAはすべての細胞の遺伝物質です。むき出しのDNAとヒストンと結合したDNAの違い。", "DNA 是每個細胞的遺傳物質；裸 DNA 與和組蛋白結合的 DNA。") },
      { to: "A2.1", why: T("Prokaryote-like cells came first; endosymbiosis built on them.", "原核生物のような細胞が先に生じ、細胞内共生はその上に成り立ちました。", "類似原核生物的細胞最先出現，內共生建基於它們之上。") },
      { to: "A2.3", why: T("Compare viruses (no cells) with prokaryotes and eukaryotes.", "ウイルス（細胞なし）を原核生物・真核生物と比べましょう。", "把病毒（沒有細胞）與原核生物和真核生物比較。") },
      { to: "B2.1", why: T("The plasma membrane is a phospholipid bilayer with embedded proteins.", "細胞膜はタンパク質が埋め込まれたリン脂質二重層です。", "質膜是嵌有蛋白質的磷脂雙層。") },
      { to: "B2.2", why: T("Adaptations of each organelle to its function.", "各細胞小器官の働きへの適応。", "各胞器對其功能的適應。") },
      { to: "B2.3", why: T("Specialized cells in tissues result from differentiation.", "組織の特殊化した細胞は分化の結果です。", "組織中的特化細胞是分化的結果。") }
    ],
    natureOfScience: [
      T("Deductive reasoning generates predictions from theories: based on cell theory, a newly discovered organism can be predicted to consist of one or more cells.", "演繹的推論は理論から予測を導きます。細胞説に基づけば、新しく発見された生物は1つ以上の細胞からなると予測できます。", "演繹推理由理論產生預測：根據細胞學說，可預測新發現的生物由一個或多個細胞構成。"),
      T("Measurement using instruments (such as an eyepiece graticule or a ruler) is a form of quantitative observation.", "器具（接眼ミクロメーターや定規）による測定は、定量的観察の一種です。", "用儀器（如目鏡測微尺或直尺）量度是一種定量觀察。"),
      T("The strength of a theory comes from the observations it explains and the predictions it supports. Endosymbiosis accounts for a wide range of observations.", "理論の強さは、それが説明する観察と支持する予測から生まれます。細胞内共生説は幅広い観察を説明します。", "理論的強度來自它能解釋的觀察和支持的預測。內共生學說解釋了廣泛的觀察。")
    ],
    questions
  });

})();
