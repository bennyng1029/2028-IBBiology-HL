(function () {
const T = (en, ja, zh) => ({ en, ja, zh });

IB.registerTopic({
  id: "B3.1",
  slug: "b3-1",
  theme: "B",
  level: 3,
  ahlOnly: false,
  title: T("Gas exchange", "ガス交換", "氣體交換"),
  guidingQuestions: [
    T("How are multicellular organisms adapted to carry out gas exchange?", "多細胞生物は、ガス交換を行うためにどのように適応しているか。", "多細胞生物如何適應以進行氣體交換？"),
    T("What are the similarities and differences in gas exchange between a flowering plant and a mammal?", "被子植物と哺乳類のガス交換には、どのような共通点と相違点があるか。", "開花植物與哺乳動物的氣體交換有何異同？")
  ],
  summary: T(
    "All living things must take in the gases they need and get rid of the gases they make. Big organisms cannot do this across their whole outer surface, so they have special gas-exchange surfaces that are thin, moist, permeable and large. Mammals ventilate alveolar lungs and move blood past them. Plants exchange gases through stomata in their leaves, which also causes water loss by transpiration. At HL you also study how haemoglobin carries oxygen.",
    "すべての生物は、必要な気体を取り込み、つくった気体を排出しなければなりません。大きな生物は体の外表面全体ではこれができないため、薄く、湿っていて、透過性があり、広い特別なガス交換面を持ちます。哺乳類は肺胞を持つ肺を換気し、その横に血液を流します。植物は葉の気孔を通して気体を交換し、これが蒸散による水分の損失も引き起こします。HLでは、ヘモグロビンが酸素をどう運ぶかも学びます。",
    "所有生物都必須吸入所需的氣體，並排出所產生的氣體。大型生物不能單靠整個體表來做到這一點，所以有特別的氣體交換表面，這些表面薄、濕潤、可滲透而且面積大。哺乳動物通過換氣使肺泡肺獲得新鮮空氣，並使血液流經其旁。植物通過葉的氣孔交換氣體，這也導致水分以蒸騰作用散失。在HL，你還要學習血紅蛋白如何運載氧氣。"),
  sections: [
    {
      ref: "B3.1.1",
      ahl: false,
      heading: T("Gas exchange is vital for all organisms", "ガス交換はすべての生物に不可欠", "氣體交換對所有生物都至關重要"),
      body: T(
        `<p><strong>Gas exchange</strong> is the swapping of gases between an organism and its environment. Almost all living things need it:</p>
<ul>
<li>Cells carry out <strong>aerobic respiration</strong>, which uses <strong>oxygen</strong> and produces <strong>carbon dioxide</strong>. So oxygen must come in and carbon dioxide must go out.</li>
<li>Photosynthetic organisms such as plants also take in carbon dioxide and give out oxygen when they photosynthesize in the light.</li>
</ul>
<p>Small organisms can do this by simple diffusion across the whole body surface. But the challenge becomes <strong>greater as organisms get bigger</strong>, for two linked reasons:</p>
<ol>
<li>The <strong>surface area-to-volume ratio decreases</strong> with increasing size. There is less surface for every unit of volume that needs oxygen (see B2.3.6).</li>
<li>The <strong>distance from the centre to the outside increases</strong>. Diffusion is only fast over very short distances, so gases cannot reach the middle quickly enough.</li>
</ol>
<p>This is why larger organisms need special exchange surfaces, such as lungs, gills and leaves, and often a transport system (such as blood) to carry the gases inside the body.</p>`,
        `<p><strong>ガス交換 (gas exchange)</strong> とは、生物と環境の間で気体をやり取りすることです。ほとんどすべての生物に必要です。</p>
<ul>
<li>細胞は<strong>好気呼吸 (aerobic respiration)</strong> を行い、<strong>酸素</strong>を使って<strong>二酸化炭素</strong>をつくります。したがって酸素は取り込み、二酸化炭素は排出しなければなりません。</li>
<li>植物のような光合成生物は、光のもとで光合成を行うとき、二酸化炭素を取り込み、酸素を放出します。</li>
</ul>
<p>小さな生物は、体表面全体を通した単純な拡散でこれを行えます。しかし、生物が大きくなるほど課題は<strong>大きくなります</strong>。理由は2つあります。</p>
<ol>
<li>大きくなると<strong>表面積と体積の比が小さくなります</strong>。酸素を必要とする体積あたりの表面が少なくなります（B2.3.6を参照）。</li>
<li><strong>中心から外側までの距離が長くなります</strong>。拡散が速いのは非常に短い距離だけなので、気体が中心まで十分速く届きません。</li>
</ol>
<p>このため、大きな生物には、肺・えら・葉のような特別な交換面と、体内で気体を運ぶ輸送系（血液など）が必要になります。</p>`,
        `<p><strong>氣體交換 (gas exchange)</strong> 是生物與環境之間交換氣體。幾乎所有生物都需要：</p>
<ul>
<li>細胞進行<strong>有氧呼吸 (aerobic respiration)</strong>，使用<strong>氧氣</strong>並產生<strong>二氧化碳</strong>。所以氧氣必須進入，二氧化碳必須排出。</li>
<li>植物等光合生物在光下進行光合作用時，也會吸入二氧化碳並釋出氧氣。</li>
</ul>
<p>細小的生物可以靠整個體表的簡單擴散做到這點。但生物越大，這項挑戰就<strong>越大</strong>，原因有兩個且互相關連：</p>
<ol>
<li>隨着大小增加，<strong>表面面積與體積比下降</strong>。每個需要氧氣的單位體積所佔的表面更少（見B2.3.6）。</li>
<li><strong>由中心到外界的距離增加</strong>。擴散只在極短距離內才快，所以氣體不能足夠快地到達中央。</li>
</ol>
<p>這就是為何較大的生物需要特別的交換表面，如肺、鰓和葉，通常還需要運輸系統（如血液）在體內運載氣體。</p>`),
      widget: "sav-ratio"
    },
    {
      ref: "B3.1.2",
      ahl: false,
      heading: T("Properties of gas-exchange surfaces", "ガス交換面の性質", "氣體交換表面的特性"),
      body: T(
        `<p>Gas-exchange surfaces in very different organisms share the same four properties. The guide asks you to include all four.</p>
<table>
<tr><th>Property</th><th>Why it helps</th></tr>
<tr><td><strong>Permeable</strong></td><td>Oxygen and carbon dioxide must be able to pass freely through the surface. These small molecules diffuse easily through the cell membranes of the surface cells (and through plant cell walls).</td></tr>
<tr><td><strong>Thin tissue layer</strong></td><td>A thin layer, often only one cell thick, makes the distance for diffusion very short, so diffusion is fast.</td></tr>
<tr><td><strong>Moist</strong></td><td>Gases dissolve in a thin film of water before they diffuse across cell membranes. The surface must stay moist.</td></tr>
<tr><td><strong>Large surface area</strong></td><td>More surface means more gas can cross at the same time. Surfaces are often folded, branched or divided into many small units.</td></tr>
</table>
<p>The next section explains the extra feature that animals need: a steep concentration gradient.</p>`,
        `<p>非常に異なる生物のガス交換面も、同じ4つの性質を共有しています。ガイドは4つすべてを含めるよう求めています。</p>
<table>
<tr><th>性質</th><th>役立つ理由</th></tr>
<tr><td><strong>透過性 (permeable)</strong></td><td>酸素と二酸化炭素が表面を自由に通れなければなりません。これらの小さな分子は、表面の細胞の細胞膜（植物では細胞壁も）を容易に拡散して通ります。</td></tr>
<tr><td><strong>薄い組織の層 (thin tissue layer)</strong></td><td>薄い層（しばしば細胞1個分の厚さ）は拡散距離をごく短くし、拡散を速くします。</td></tr>
<tr><td><strong>湿っていること (moist)</strong></td><td>気体は、細胞膜を拡散して通る前に、水の薄い膜に溶けます。表面は湿っていなければなりません。</td></tr>
<tr><td><strong>広い表面積 (large surface area)</strong></td><td>表面が広いほど、同時に多くの気体が通れます。表面はしばしば折りたたまれたり、枝分かれしたり、多数の小さな単位に分かれたりします。</td></tr>
</table>
<p>次のセクションでは、動物に必要な追加の特徴、急な濃度勾配を説明します。</p>`,
        `<p>非常不同的生物，其氣體交換表面都有相同的四項特性。課程指引要求你包括全部四項。</p>
<table>
<tr><th>特性</th><th>為何有幫助</th></tr>
<tr><td><strong>可滲透 (permeable)</strong></td><td>氧氣和二氧化碳必須能自由通過表面。這些小分子很容易擴散穿過表面細胞的細胞膜（植物還有細胞壁）。</td></tr>
<tr><td><strong>薄組織層 (thin tissue layer)</strong></td><td>薄層（通常只有一個細胞厚）使擴散距離極短，所以擴散很快。</td></tr>
<tr><td><strong>濕潤 (moist)</strong></td><td>氣體先溶解在薄水膜中，才擴散穿過細胞膜。表面必須保持濕潤。</td></tr>
<tr><td><strong>大表面面積 (large surface area)</strong></td><td>表面越大，同一時間可通過的氣體越多。表面常摺疊、分支或分成許多細小單位。</td></tr>
</table>
<p>下一節解釋動物還需要的另一特徵：陡的濃度梯度。</p>`)
    },
    {
      ref: "B3.1.3",
      ahl: false,
      heading: T("Maintaining concentration gradients in animals", "動物における濃度勾配の維持", "維持動物體內的濃度梯度"),
      body: T(
        `<p>Gases move across an exchange surface by <strong>diffusion</strong>, from high concentration to low concentration. Diffusion is fastest when the concentration gradient is <strong>steep</strong>. So animals must keep oxygen high on the outside of the surface and low on the inside, and carbon dioxide the other way round. They do this in these ways (the guide asks you to include all three):</p>
<ul>
<li><strong>A dense network of blood vessels</strong> (capillaries) right next to the exchange surface. Blood takes oxygen away from the surface and brings carbon dioxide to it.</li>
<li><strong>Continuous blood flow.</strong> Moving blood carries oxygen away as soon as it has crossed the surface, so the oxygen concentration in the blood stays low. Fresh blood with a low oxygen concentration keeps arriving.</li>
<li><strong>Ventilation.</strong> This means moving the external medium over the surface. Lungs are ventilated with <strong>air</strong> and gills are ventilated with <strong>water</strong>. Ventilation brings in fresh supplies with a high oxygen concentration and removes carbon dioxide, which stops the gradient from falling.</li>
</ul>
<p>If there were no ventilation or blood flow, the gases would reach equilibrium and diffusion would stop.</p>`,
        `<p>気体はガス交換面を<strong>拡散 (diffusion)</strong> によって、高濃度から低濃度へ移動します。拡散は濃度勾配が<strong>急</strong>なときに最も速くなります。そのため動物は、表面の外側では酸素を高く内側では低く、二酸化炭素ではその逆に保たなければなりません。それには次の方法を使います（ガイドは3つすべてを含めるよう求めています）。</p>
<ul>
<li>交換面のすぐ隣にある<strong>血管の密な網目</strong>（毛細血管）。血液が表面から酸素を運び去り、二酸化炭素を表面へ運んできます。</li>
<li><strong>血液の連続的な流れ (continuous blood flow)</strong>。流れる血液は、酸素が表面を越えるとすぐに運び去るので、血液中の酸素濃度は低く保たれます。酸素濃度の低い新しい血液が次々に届きます。</li>
<li><strong>換気 (ventilation)</strong>。外部の媒体を表面の上で動かすことです。肺は<strong>空気</strong>で、えらは<strong>水</strong>で換気されます。換気により酸素濃度の高い新しい供給が運ばれ、二酸化炭素が除かれるので、勾配が下がるのを防ぎます。</li>
</ul>
<p>換気や血流がなければ、気体は平衡に達し、拡散は止まってしまいます。</p>`,
        `<p>氣體透過<strong>擴散 (diffusion)</strong> 越過交換表面，由高濃度移向低濃度。濃度梯度<strong>陡</strong>時，擴散最快。所以動物必須使表面外側的氧氣保持高濃度、內側保持低濃度，二氧化碳則相反。它們以下列方式做到（課程指引要求你包括全部三項）：</p>
<ul>
<li>緊貼交換表面的<strong>稠密血管網絡</strong>（微血管）。血液把氧氣從表面帶走，並把二氧化碳帶到表面。</li>
<li><strong>血液持續流動 (continuous blood flow)</strong>。流動的血液在氧氣越過表面後立即把它帶走，使血液中的氧氣濃度保持低水平。低氧濃度的新鮮血液不斷到達。</li>
<li><strong>通氣 (ventilation)</strong>。指使外部介質流過表面。肺以<strong>空氣</strong>通氣，鰓以<strong>水</strong>通氣。通氣帶來氧濃度高的新鮮供應並移走二氧化碳，防止梯度下降。</li>
</ul>
<p>若沒有通氣或血液流動，氣體會達到平衡，擴散便會停止。</p>`)
    },
    {
      ref: "B3.1.4",
      ahl: false,
      heading: T("Adaptations of mammalian lungs", "哺乳類の肺の適応", "哺乳動物肺的適應特徵"),
      body: T(
        `<p>The guide limits this to the <strong>alveolar lungs of a mammal</strong>. Air travels down the trachea, into the bronchi, then into narrower tubes called bronchioles, and ends in tiny air sacs called <strong>alveoli</strong> (singular alveolus), where gas exchange happens. Adaptations for gas exchange:</p>
<ul>
<li><strong>Surfactant.</strong> Each alveolus is lined by a thin film of water (the moisture that gases dissolve in). Surfactant is a substance secreted into this film. It reduces the surface tension of the water, which stops the walls of the alveoli sticking together and collapsing when we breathe out, and makes the alveoli easier to inflate when we breathe in.</li>
<li><strong>A branched network of bronchioles</strong> carries air to all the alveoli, spreading the air through the whole lung.</li>
<li><strong>Extensive capillary beds.</strong> Each alveolus is surrounded by a dense network of capillaries. They bring blood with a low oxygen concentration and carry oxygen away, keeping the concentration gradient steep.</li>
<li><strong>A high surface area.</strong> There are huge numbers of alveoli, so the total area for gas exchange is very large.</li>
</ul>
<p>The wall of an alveolus and of a capillary are each very thin (see B2.3.8 for type I pneumocytes at HL), so diffusion distance is short.</p>`,
        `<p>ガイドは<strong>哺乳類の肺胞を持つ肺</strong>に限っています。空気は気管を通り、気管支に入り、さらに細い気管支（細気管支 bronchiole）を経て、ガス交換が行われる小さな空気の袋、<strong>肺胞 (alveoli)</strong> で終わります。ガス交換への適応は次のとおりです。</p>
<ul>
<li><strong>サーファクタント (surfactant)</strong>。各肺胞の内側は水の薄い膜（気体が溶ける水分）で覆われています。サーファクタントはこの膜に分泌される物質です。水の表面張力を下げ、息を吐くときに肺胞の壁がくっついてつぶれるのを防ぎ、息を吸うときに肺胞を膨らみやすくします。</li>
<li><strong>枝分かれした細気管支の網目 (branched network of bronchioles)</strong> が、すべての肺胞へ空気を運び、肺全体に空気を行き渡らせます。</li>
<li><strong>広い毛細血管床 (extensive capillary beds)</strong>。各肺胞は毛細血管の密な網目に囲まれています。酸素濃度の低い血液を運び込み、酸素を運び去って、濃度勾配を急に保ちます。</li>
<li><strong>広い表面積 (high surface area)</strong>。肺胞の数が非常に多いので、ガス交換の総面積はきわめて大きくなります。</li>
</ul>
<p>肺胞の壁も毛細血管の壁もそれぞれ非常に薄く（HLのI型肺胞上皮細胞についてはB2.3.8を参照）、拡散距離は短くなっています。</p>`,
        `<p>課程指引限於<strong>哺乳動物的肺泡肺</strong>。空氣經氣管向下，進入支氣管，再進入較窄的管道稱為細支氣管 (bronchiole)，最後到達稱為<strong>肺泡 (alveoli)</strong>（單數 alveolus）的細小氣囊，氣體交換就在此進行。氣體交換的適應特徵：</p>
<ul>
<li><strong>表面活性物質 (surfactant)</strong>。每個肺泡內襯一層薄水膜（氣體溶解其中的水分）。表面活性物質分泌入這層膜，降低水的表面張力，防止肺泡壁在呼氣時黏在一起而塌陷，並使肺泡在吸氣時較容易擴張。</li>
<li><strong>分支的細支氣管網絡 (branched network of bronchioles)</strong> 把空氣帶到所有肺泡，使空氣遍及整個肺。</li>
<li><strong>廣闊的微血管床 (extensive capillary beds)</strong>。每個肺泡被稠密的微血管網絡包圍。它們帶來低氧濃度的血液，並把氧氣帶走，保持陡的濃度梯度。</li>
<li><strong>大表面面積 (high surface area)</strong>。肺泡數目極多，所以氣體交換的總面積非常大。</li>
</ul>
<p>肺泡壁和微血管壁都非常薄（HL的第I型肺泡細胞見B2.3.8），所以擴散距離短。</p>`),
      widget: "gas-exchange"
    },
    {
      ref: "B3.1.5",
      ahl: false,
      widget: "ventilation",
      heading: T("Ventilation of the lungs", "肺の換気", "肺的通氣"),
      body: T(
        `<p><strong>Ventilation</strong> means moving air in and out of the lungs. Lungs have no muscle of their own, so the movement comes from muscles around them. Changes in the volume of the chest (thorax) cause changes in pressure, and air flows from high pressure to low pressure.</p>
<p><strong>Inhalation (breathing in)</strong></p>
<ol>
<li>The <strong>external intercostal muscles</strong> (between the ribs) contract, which lifts the <strong>ribs</strong> up and out.</li>
<li>The <strong>diaphragm</strong> (a sheet of muscle under the lungs) contracts and flattens, moving down.</li>
<li>The volume of the thorax increases, so the pressure in the lungs falls below the pressure of the air outside. Air flows in.</li>
</ol>
<p><strong>Exhalation (breathing out)</strong></p>
<ol>
<li>At rest, exhalation is mostly passive. The external intercostal muscles and diaphragm relax. The ribs move down and in, the diaphragm domes upward again, and the elastic lungs recoil.</li>
<li>The volume of the thorax decreases, so the pressure rises above atmospheric pressure. Air flows out.</li>
<li>In <strong>forced exhalation</strong> (for example during exercise), the <strong>internal intercostal muscles</strong> contract to pull the ribs down and in, and the <strong>abdominal muscles</strong> contract to push the diaphragm up.</li>
</ol>
<p>The muscles that pull the ribs up and those that pull them down work as <strong>antagonistic pairs</strong>: they do opposite jobs.</p>`,
        `<p><strong>換気 (ventilation)</strong> とは、空気を肺の内外へ出し入れすることです。肺自身には筋肉がないので、動きは周りの筋肉から生まれます。胸部（胸郭）の体積の変化が圧力の変化を生み、空気は高圧から低圧へ流れます。</p>
<p><strong>吸気 (inhalation)（息を吸う）</strong></p>
<ol>
<li>（肋骨の間の）<strong>外肋間筋 (external intercostal muscles)</strong> が収縮し、<strong>肋骨 (ribs)</strong> を上方・外方へ持ち上げます。</li>
<li>（肺の下にある筋肉の膜）<strong>横隔膜 (diaphragm)</strong> が収縮して平らになり、下がります。</li>
<li>胸郭の体積が増えるので、肺内の圧力が外の空気の圧力より低くなります。空気が流れ込みます。</li>
</ol>
<p><strong>呼気 (exhalation)（息を吐く）</strong></p>
<ol>
<li>安静時の呼気はおもに受動的です。外肋間筋と横隔膜がゆるみ、肋骨は下方・内方へ動き、横隔膜は再び上方へドーム状に戻り、弾力のある肺が縮みます。</li>
<li>胸郭の体積が減るので、圧力が大気圧より高くなります。空気が流れ出ます。</li>
<li><strong>強制呼気 (forced exhalation)</strong>（たとえば運動中）では、<strong>内肋間筋 (internal intercostal muscles)</strong> が収縮して肋骨を下方・内方へ引き、<strong>腹筋 (abdominal muscles)</strong> が収縮して横隔膜を押し上げます。</li>
</ol>
<p>肋骨を引き上げる筋肉と引き下げる筋肉は<strong>拮抗筋 (antagonistic pairs)</strong> として働きます。互いに反対の働きをします。</p>`,
        `<p><strong>通氣 (ventilation)</strong> 指空氣進出肺部。肺本身沒有肌肉，所以運動來自周圍的肌肉。胸腔（胸廓）體積的改變引起壓力改變，空氣由高壓流向低壓。</p>
<p><strong>吸氣 (inhalation)</strong></p>
<ol>
<li>（肋骨之間的）<strong>外肋間肌 (external intercostal muscles)</strong> 收縮，把<strong>肋骨 (ribs)</strong> 向上及向外提起。</li>
<li><strong>橫膈膜 (diaphragm)</strong>（肺下方的一片肌肉）收縮並變平，向下移動。</li>
<li>胸腔體積增加，所以肺內壓力降至低於外界空氣壓力。空氣流入。</li>
</ol>
<p><strong>呼氣 (exhalation)</strong></p>
<ol>
<li>靜止時，呼氣主要是被動的。外肋間肌和橫膈膜放鬆，肋骨向下及向內移，橫膈膜再度向上隆起，有彈性的肺縮回。</li>
<li>胸腔體積減小，所以壓力升至高於大氣壓力。空氣流出。</li>
<li>在<strong>強制呼氣 (forced exhalation)</strong>（例如運動時），<strong>內肋間肌 (internal intercostal muscles)</strong> 收縮，把肋骨向下及向內拉，<strong>腹肌 (abdominal muscles)</strong> 收縮，把橫膈膜向上推。</li>
</ol>
<p>把肋骨向上拉和向下拉的肌肉作為<strong>拮抗肌對 (antagonistic pairs)</strong> 工作：它們做相反的工作。</p>`),
      examTip: T(
        "Always link muscle action → change in volume → change in pressure → direction of air flow. Marks are lost for saying 'the lungs pull in air'.",
        "筋肉の動き → 体積の変化 → 圧力の変化 → 空気の流れの向き、と必ずつなげて書きます。「肺が空気を引き込む」と書くと得点を失います。",
        "答題時一定要連繫：肌肉動作 → 體積改變 → 壓力改變 → 空氣流動方向。寫「肺把空氣拉進去」會失分。")
    },
    {
      ref: "B3.1.6",
      ahl: false,
      heading: T("Measuring lung volumes", "肺気量の測定", "量度肺容量"),
      body: T(
        `<p>This is an <strong>application of skills</strong> point: you should be able to make measurements and read them from a trace. A <strong>spirometer</strong> (or a digital sensor) records the volume of air breathed in and out. The trace is called a spirogram.</p>
<table>
<tr><th>Measurement</th><th>Meaning</th></tr>
<tr><td><strong>Tidal volume</strong></td><td>The volume of air moved in or out in one normal (resting) breath.</td></tr>
<tr><td><strong>Inspiratory reserve volume</strong></td><td>The extra volume that can be breathed in, by a deep breath, after a normal inhalation.</td></tr>
<tr><td><strong>Expiratory reserve volume</strong></td><td>The extra volume that can be breathed out, by forcing out, after a normal exhalation.</td></tr>
<tr><td><strong>Vital capacity</strong></td><td>The largest volume of air that can be breathed out after the deepest possible breath in. Vital capacity = tidal volume + inspiratory reserve + expiratory reserve.</td></tr>
</table>
<p>On a spirogram, the up-and-down pattern of small waves is normal breathing. The <em>height</em> of one wave is the tidal volume. The <em>number of waves per minute</em> is the breathing rate. A deep breath in then out as far as possible gives a tall wave whose height is the vital capacity.</p>
<p>Practical points: use clean mouthpieces or a disinfected one (safety and hygiene); repeat measurements and take a mean; volumes are in cm³ or dm³ (1 dm³ = 1000 cm³).</p>`,
        `<p>これは<strong>技能の応用 (application of skills)</strong> の項目です。測定を行い、記録から値を読み取れることが求められます。<strong>スパイロメーター (spirometer)</strong>（またはデジタルセンサー）が、吸う空気と吐く空気の量を記録します。その記録をスパイログラム (spirogram) と呼びます。</p>
<table>
<tr><th>測定値</th><th>意味</th></tr>
<tr><td><strong>1回換気量 (tidal volume)</strong></td><td>安静時の1回の普通の呼吸で出入りする空気の量。</td></tr>
<tr><td><strong>予備吸気量 (inspiratory reserve volume)</strong></td><td>普通に吸った後、深く吸ってさらに吸い込める量。</td></tr>
<tr><td><strong>予備呼気量 (expiratory reserve volume)</strong></td><td>普通に吐いた後、力を入れてさらに吐き出せる量。</td></tr>
<tr><td><strong>肺活量 (vital capacity)</strong></td><td>できるだけ深く吸った後に吐き出せる空気の最大量。肺活量 = 1回換気量 + 予備吸気量 + 予備呼気量。</td></tr>
</table>
<p>スパイログラムでは、小さな波の上下が普通の呼吸です。1つの波の<em>高さ</em>が1回換気量です。1分あたりの<em>波の数</em>が呼吸数です。深く吸ってからできるだけ吐くと、高い波ができ、その高さが肺活量です。</p>
<p>実験上の注意：清潔な（または消毒した）マウスピースを使う（安全と衛生）。測定を繰り返して平均を取る。体積の単位はcm³またはdm³（1 dm³ = 1000 cm³）。</p>`,
        `<p>這是<strong>技能應用 (application of skills)</strong> 的項目：你應能進行量度，並從記錄圖中讀取數值。<strong>肺活量計 (spirometer)</strong>（或數碼感應器）記錄吸入和呼出的空氣體積，記錄圖稱為肺活量描記圖 (spirogram)。</p>
<table>
<tr><th>量度項目</th><th>意義</th></tr>
<tr><td><strong>潮氣量 (tidal volume)</strong></td><td>一次正常（靜止）呼吸中進出的空氣體積。</td></tr>
<tr><td><strong>吸氣儲備量 (inspiratory reserve volume)</strong></td><td>正常吸氣後，再深吸所能額外吸入的體積。</td></tr>
<tr><td><strong>呼氣儲備量 (expiratory reserve volume)</strong></td><td>正常呼氣後，再用力呼出所能額外呼出的體積。</td></tr>
<tr><td><strong>肺活量 (vital capacity)</strong></td><td>盡量深吸一口氣後所能呼出的最大空氣體積。肺活量 = 潮氣量 + 吸氣儲備量 + 呼氣儲備量。</td></tr>
</table>
<p>在描記圖上，小波浪的起伏是正常呼吸。一個波浪的<em>高度</em>就是潮氣量。<em>每分鐘的波浪數目</em>就是呼吸率。深吸再盡量呼出，會得出一個高的波浪，其高度就是肺活量。</p>
<p>實驗注意事項：使用清潔或已消毒的吹嘴（安全與衞生）；重複量度並取平均值；體積單位為cm³或dm³（1 dm³ = 1000 cm³）。</p>`),
      examTip: T(
        "Vital capacity is not 'the total air in the lungs'. Some air always stays in the lungs (residual air) and cannot be measured by a spirometer.",
        "肺活量は「肺の中の空気の全部」ではありません。一部の空気は常に肺に残り（残気）、スパイロメーターでは測れません。",
        "肺活量不是「肺內所有的空氣」。一部分空氣總是留在肺內（殘氣），肺活量計無法量度。")
    }
,
    {
      ref: "B3.1.7–8",
      ahl: false,
      heading: T("The leaf: structure for gas exchange and plan diagram", "葉：ガス交換のための構造と平面図", "葉：氣體交換的結構與平面圖"),
      body: T(
        `<p>In a leaf, gas exchange has two sides. In the light, carbon dioxide must enter for photosynthesis and oxygen leaves. Leaves also take in oxygen for respiration and give out carbon dioxide. Gases cross the leaf surface mostly through tiny pores called <strong>stomata</strong> (singular stoma).</p>
<p><strong>Adaptations (B3.1.7)</strong></p>
<ul>
<li><strong>Waxy cuticle.</strong> A waterproof layer on the outer surface of the epidermis. It reduces water loss from the leaf. It is transparent so light still gets through. (It also blocks gases, which is why stomata are needed.)</li>
<li><strong>Epidermis.</strong> A single layer of cells covering the leaf, upper and lower. It protects the tissues inside. The lower epidermis contains the stomata in many plants.</li>
<li><strong>Stomatal guard cells.</strong> A pair of guard cells surrounds each stoma. They change shape to open and close the pore. Open stomata let CO₂ in and O₂ out; closing them reduces water loss.</li>
<li><strong>Spongy mesophyll.</strong> A layer of loosely packed, rounded cells with moist cell walls. Gases dissolve in the moisture and diffuse into the cells.</li>
<li><strong>Air spaces.</strong> Gaps between the spongy mesophyll cells. Gases diffuse quickly through air, so they reach all the cells. The air spaces give a large surface area of moist cell wall.</li>
<li><strong>Veins.</strong> Vascular bundles that bring water (in xylem) to the leaf cells and carry away the products of photosynthesis (in phloem). They also support the leaf.</li>
</ul>
<p><strong>Plan diagram (B3.1.8).</strong> You should be able to draw and label a <em>plan diagram</em> showing where tissues are in a transverse (cross) section of a dicotyledonous leaf. Plan diagram rules: draw only outlines of tissue regions, <strong>do not draw individual cells</strong>, keep proportions correct, use a sharp pencil with continuous lines, give a title and magnification, and label with ruled lines. From top to bottom you should see: cuticle, upper epidermis, palisade mesophyll (tightly packed, column-shaped cells full of chloroplasts), spongy mesophyll with air spaces, vein (vascular bundle with xylem and phloem), lower epidermis with stomata and guard cells.</p>`,
        `<p>葉のガス交換には2つの面があります。光のもとでは、光合成のために二酸化炭素が入り、酸素が出ます。葉は呼吸のために酸素を取り込み、二酸化炭素も放出します。気体は、おもに<strong>気孔 (stomata)</strong>（単数 stoma）と呼ばれる小さな孔を通って葉の表面を出入りします。</p>
<p><strong>適応 (B3.1.7)</strong></p>
<ul>
<li><strong>ろうを含むクチクラ (waxy cuticle)</strong>。表皮の外側にある防水の層。葉からの水分の損失を減らします。透明なので光は通ります。（気体も通さないので、気孔が必要になります。）</li>
<li><strong>表皮 (epidermis)</strong>。葉を覆う1層の細胞で、上側と下側があります。内部の組織を守ります。多くの植物では下側の表皮に気孔があります。</li>
<li><strong>気孔の孔辺細胞 (stomatal guard cells)</strong>。各気孔を1対の孔辺細胞が囲んでいます。形を変えて孔を開閉します。気孔が開くとCO₂が入りO₂が出ます。閉じると水分の損失が減ります。</li>
<li><strong>海綿状組織 (spongy mesophyll)</strong>。すき間のある丸い細胞のゆるい層で、細胞壁が湿っています。気体は水分に溶けて細胞へ拡散します。</li>
<li><strong>空気の隙間 (air spaces)</strong>。海綿状組織の細胞の間のすき間。気体は空気中を速く拡散するので、すべての細胞に届きます。空気の隙間により、湿った細胞壁の表面積が大きくなります。</li>
<li><strong>葉脈 (veins)</strong>。維管束で、葉の細胞に水（木部）を運び、光合成産物（師部）を運び去ります。葉を支える働きもあります。</li>
</ul>
<p><strong>平面図 (plan diagram) (B3.1.8)</strong>。双子葉植物の葉の横断面で、組織の分布を示す<em>平面図</em>を描いてラベルを付けられる必要があります。平面図の規則：組織の領域の輪郭だけを描く、<strong>個々の細胞は描かない</strong>、比率を正しく保つ、鋭い鉛筆で連続した線を使う、タイトルと倍率を付ける、定規で引いた線でラベルを付ける。上から下へ、クチクラ、上側表皮、さく状組織（柱状で葉緑体がいっぱいの細胞が密に並ぶ）、空気の隙間のある海綿状組織、葉脈（木部と師部のある維管束）、気孔と孔辺細胞のある下側表皮が見えます。</p>`,
        `<p>葉中的氣體交換有兩面：在光下，二氧化碳須進入作光合作用，氧氣離開。葉也為呼吸吸入氧氣並釋出二氧化碳。氣體主要經稱為<strong>氣孔 (stomata)</strong>（單數 stoma）的細小孔進出葉面。</p>
<p><strong>適應特徵 (B3.1.7)</strong></p>
<ul>
<li><strong>蠟質角質層 (waxy cuticle)</strong>。表皮外面的防水層，減少葉的水分散失。它是透明的，所以光仍能透入。（它也阻隔氣體，所以才需要氣孔。）</li>
<li><strong>表皮 (epidermis)</strong>。覆蓋葉的一層細胞，分上、下表皮。保護內部組織。在許多植物中，氣孔位於下表皮。</li>
<li><strong>氣孔保衛細胞 (stomatal guard cells)</strong>。每個氣孔由一對保衛細胞圍繞，它們改變形狀以開合氣孔。氣孔張開，讓CO₂進入、O₂離開；關閉則減少水分散失。</li>
<li><strong>海綿葉肉 (spongy mesophyll)</strong>。排列疏鬆的圓形細胞層，細胞壁濕潤。氣體溶於水分並擴散入細胞。</li>
<li><strong>氣室 (air spaces)</strong>。海綿葉肉細胞之間的空隙。氣體在空氣中擴散很快，所以能到達所有細胞。氣室使濕潤細胞壁的表面面積很大。</li>
<li><strong>葉脈 (veins)</strong>。維管束，把水（在木質部中）帶給葉細胞，並把光合作用產物（在韌皮部中）運走。它們也支撐葉片。</li>
</ul>
<p><strong>平面圖 (plan diagram) (B3.1.8)</strong>。你應能繪畫並標示雙子葉植物葉橫切面中組織分佈的<em>平面圖</em>。平面圖的規則：只畫組織區域的輪廓、<strong>不畫個別細胞</strong>、保持正確比例、用尖鉛筆畫連續線條、寫上標題和放大倍數、用直尺畫標示線。由上至下應看到：角質層、上表皮、柵欄葉肉（緊密排列的柱形細胞，充滿葉綠體）、有氣室的海綿葉肉、葉脈（含木質部和韌皮部的維管束）、有氣孔和保衛細胞的下表皮。</p>`),
      widget: "gas-exchange-leaf",
      examTip: T(
        "In a plan diagram, cells are never drawn. If the question says 'draw a plan diagram' and you draw cells, you lose marks.",
        "平面図では細胞を描きません。「平面図を描け」の問題で細胞を描くと減点されます。",
        "平面圖不畫細胞。若題目要求「繪畫平面圖」而你畫了細胞，會失分。")
    },
    {
      ref: "B3.1.9",
      ahl: false,
      heading: T("Transpiration as a consequence of gas exchange", "ガス交換の結果としての蒸散", "蒸騰作用是氣體交換的後果"),
      body: T(
        `<p>To let CO₂ in, a leaf must open its stomata. But the air spaces inside the leaf are saturated with water vapour (the wet cell walls evaporate into them). Outside, the air is usually drier. So when the stomata are open, <strong>water vapour diffuses out</strong> of the leaf down its concentration gradient. This loss of water vapour from a leaf is called <strong>transpiration</strong>. It is an unavoidable cost of gas exchange.</p>
<p><strong>Factors that affect the rate of transpiration</strong></p>
<table>
<tr><th>Factor</th><th>Effect on rate</th><th>Reason</th></tr>
<tr><td>Light intensity</td><td>Higher light → faster</td><td>More stomata open in light (for photosynthesis)</td></tr>
<tr><td>Temperature</td><td>Higher → faster</td><td>Water evaporates faster and water vapour diffuses faster; warm air also holds more water vapour</td></tr>
<tr><td>Humidity</td><td>Higher humidity → slower</td><td>The concentration gradient of water vapour between leaf and air is smaller</td></tr>
<tr><td>Wind (air movement)</td><td>More wind → faster</td><td>Wind blows away the humid air next to the leaf, keeping the gradient steep</td></tr>
</table>
<p>The movement of water up the plant that follows from transpiration is described in B3.2.7.</p>`,
        `<p>CO₂を取り込むために、葉は気孔を開かなければなりません。しかし葉の内部の空気の隙間は水蒸気で飽和しています（湿った細胞壁がそこに蒸発します）。外の空気はふつうもっと乾燥しています。そのため気孔が開いているとき、<strong>水蒸気が</strong>濃度勾配に沿って葉から<strong>拡散して出ていきます</strong>。葉からのこの水蒸気の損失を<strong>蒸散 (transpiration)</strong> と呼びます。これはガス交換に避けられない代償です。</p>
<p><strong>蒸散の速さに影響する要因</strong></p>
<table>
<tr><th>要因</th><th>速さへの影響</th><th>理由</th></tr>
<tr><td>光の強さ (light intensity)</td><td>強いほど速い</td><td>光のもとでは（光合成のために）より多くの気孔が開く</td></tr>
<tr><td>温度 (temperature)</td><td>高いほど速い</td><td>水がより速く蒸発し、水蒸気もより速く拡散する。暖かい空気は水蒸気もより多く含める</td></tr>
<tr><td>湿度 (humidity)</td><td>湿度が高いほど遅い</td><td>葉と空気の間の水蒸気の濃度勾配が小さくなる</td></tr>
<tr><td>風 (wind)</td><td>風が強いほど速い</td><td>風が葉のそばの湿った空気を吹き払い、勾配を急に保つ</td></tr>
</table>
<p>蒸散に続いて植物体内で水が上昇することについては、B3.2.7で扱います。</p>`,
        `<p>為了讓CO₂進入，葉必須張開氣孔。但葉內的氣室充滿水蒸氣（濕潤的細胞壁蒸發到其中）。外面的空氣通常較乾燥。所以氣孔張開時，<strong>水蒸氣會沿濃度梯度擴散離開</strong>葉。葉的這種水蒸氣散失稱為<strong>蒸騰作用 (transpiration)</strong>。這是氣體交換不可避免的代價。</p>
<p><strong>影響蒸騰速率的因素</strong></p>
<table>
<tr><th>因素</th><th>對速率的影響</th><th>原因</th></tr>
<tr><td>光強度 (light intensity)</td><td>光越強，越快</td><td>光下有更多氣孔張開（為了光合作用）</td></tr>
<tr><td>溫度 (temperature)</td><td>越高，越快</td><td>水蒸發較快，水蒸氣擴散也較快；暖空氣亦可容納較多水蒸氣</td></tr>
<tr><td>濕度 (humidity)</td><td>濕度越高，越慢</td><td>葉與空氣之間水蒸氣的濃度梯度較小</td></tr>
<tr><td>風 (wind)</td><td>風越大，越快</td><td>風吹走葉旁的潮濕空氣，使梯度保持陡峭</td></tr>
</table>
<p>蒸騰作用引起的植物內水分上升，見B3.2.7。</p>`)
    },
    {
      ref: "B3.1.10",
      ahl: false,
      heading: T("Stomatal density", "気孔密度", "氣孔密度"),
      body: T(
        `<p>This is another <strong>application of skills</strong> point. <strong>Stomatal density</strong> is the number of stomata per unit area of leaf (for example per mm²). You can find it in two ways:</p>
<ul>
<li>Use a <strong>micrograph</strong> (a photograph taken through a microscope) of the leaf surface.</li>
<li>Make a <strong>leaf cast</strong>: paint clear nail varnish on the leaf surface, let it dry, peel it off and view the impression under a microscope.</li>
</ul>
<p><strong>Method:</strong> count the stomata in the field of view at high power. Work out the area of the field of view (area of a circle = πr², where r is the radius, measured with a stage micrometer or from the scale bar). Then:</p>
<p style="text-align:center"><strong>stomatal density = number of stomata ÷ area of the field of view</strong></p>
<p>Worked example: a field of view is 0.50 mm in diameter, so r = 0.25 mm and area = π × 0.25² = 0.196 mm². If the mean count is 22 stomata, density = 22 ÷ 0.196 ≈ 112 stomata per mm².</p>
<p><strong>Nature of science:</strong> the reliability of quantitative data is increased by repeating measurements. Counts from different fields of view will differ, which shows the <em>variability of biological material</em>. So you take several counts, find the mean, and do replicate trials.</p>`,
        `<p>これも<strong>技能の応用 (application of skills)</strong> の項目です。<strong>気孔密度 (stomatal density)</strong> とは、葉の単位面積あたり（たとえば1 mm²あたり）の気孔の数です。2つの方法で求められます。</p>
<ul>
<li>葉の表面の<strong>顕微鏡写真 (micrograph)</strong>（顕微鏡を通して撮った写真）を使う。</li>
<li><strong>葉の型取り (leaf cast)</strong> を作る：透明なマニキュアを葉の表面に塗り、乾かしてはがし、その型を顕微鏡で観察する。</li>
</ul>
<p><strong>方法：</strong>高倍率の視野の中の気孔を数えます。視野の面積（円の面積 = πr²、rは半径。ステージマイクロメーターまたはスケールバーで測る）を求めます。次に：</p>
<p style="text-align:center"><strong>気孔密度 = 気孔の数 ÷ 視野の面積</strong></p>
<p>計算例：視野の直径が0.50 mmなら、r = 0.25 mm、面積 = π × 0.25² = 0.196 mm²。平均の数が22なら、密度 = 22 ÷ 0.196 ≈ 112個/mm²。</p>
<p><strong>科学の本質 (Nature of science)：</strong>定量データの信頼性は、測定を繰り返すことで高まります。視野が違えば数も違い、これは<em>生物材料のばらつき</em>を示します。そのため、複数回数え、平均を求め、繰り返しの試行を行います。</p>`,
        `<p>這也是<strong>技能應用 (application of skills)</strong> 的項目。<strong>氣孔密度 (stomatal density)</strong> 指每單位葉面積（例如每mm²）的氣孔數目。可用兩種方法求得：</p>
<ul>
<li>使用葉表面的<strong>顯微照片 (micrograph)</strong>（透過顯微鏡拍攝的相片）。</li>
<li>製作<strong>葉印模 (leaf cast)</strong>：在葉面塗上透明指甲油，待乾後撕下，用顯微鏡觀察其印痕。</li>
</ul>
<p><strong>方法：</strong>在高倍視野中數算氣孔數目。計算視野的面積（圓面積 = πr²，r為半徑，以載物台測微尺或比例尺量度）。然後：</p>
<p style="text-align:center"><strong>氣孔密度 = 氣孔數目 ÷ 視野面積</strong></p>
<p>算例：視野直徑為0.50 mm，則 r = 0.25 mm，面積 = π × 0.25² = 0.196 mm²。若平均計數為22個氣孔，密度 = 22 ÷ 0.196 ≈ 112個／mm²。</p>
<p><strong>科學本質 (Nature of science)：</strong>重複量度可提高定量數據的可靠性。不同視野的計數會不同，顯示<em>生物材料的變異性</em>。所以要進行多次計數、求平均值，並重複試驗。</p>`)
    },
    {
      ref: "B3.1.11",
      ahl: true,
      heading: T("Haemoglobin: adult and foetal, cooperative and allosteric binding", "ヘモグロビン：成人型と胎児型、協同的結合とアロステリック結合", "血紅蛋白：成人型與胎兒型、協同結合與別構結合"),
      body: T(
        `<p><strong>Haemoglobin</strong> is the protein in red blood cells that carries oxygen. It has four polypeptide chains, and each chain has a <strong>haem group</strong> containing iron. One haem group can bind one oxygen molecule (O₂), so one haemoglobin can carry up to four O₂. (See B1.2 for haemoglobin as a conjugated protein.)</p>
<p><strong>Cooperative binding of oxygen to haem groups.</strong> The four sites do not work independently. When the first O₂ binds, the shape of the haemoglobin changes slightly. This makes it <em>easier</em> for the next O₂ to bind, and so on. Binding of one O₂ helps binding of the next. In the same way, once one O₂ is released, the others are released more easily.</p>
<p><strong>Allosteric binding of carbon dioxide.</strong> An <em>allosteric</em> site is a binding site that is different from the oxygen-binding site (the haem group). When CO₂ binds to haemoglobin at such a site, the protein changes shape and its affinity (attraction) for oxygen falls, so oxygen is released more easily.</p>
<p><strong>Foetal and adult haemoglobin.</strong> A foetus gets its oxygen from its mother's blood across the placenta. The foetus makes <strong>foetal haemoglobin</strong>, which is made of different polypeptide chains from adult haemoglobin. Foetal haemoglobin has a <strong>higher affinity for oxygen</strong> than adult haemoglobin at the same oxygen concentration. So at the placenta, where oxygen is low, the foetal haemoglobin takes up oxygen from the mother's haemoglobin. Adult haemoglobin has a lower affinity, which lets it release oxygen in the tissues.</p>`,
        `<p><strong>ヘモグロビン (haemoglobin)</strong> は、赤血球にある酸素を運ぶタンパク質です。4本のポリペプチド鎖を持ち、各鎖には鉄を含む<strong>ヘム基 (haem group)</strong> があります。1つのヘム基は酸素分子 (O₂) を1つ結合できるので、1分子のヘモグロビンは最大4個のO₂を運べます。（結合タンパク質としてのヘモグロビンはB1.2を参照。）</p>
<p><strong>ヘム基への酸素の協同的結合 (cooperative binding)。</strong>4つの結合部位は独立して働くのではありません。最初のO₂が結合すると、ヘモグロビンの形が少し変わります。これにより次のO₂が結合し<em>やすく</em>なり、以下同様です。1つのO₂の結合が次の結合を助けます。同じように、1つのO₂が離れると、残りも離れやすくなります。</p>
<p><strong>二酸化炭素のアロステリック結合 (allosteric binding)。</strong><em>アロステリック</em>部位とは、酸素の結合部位（ヘム基）とは別の結合部位です。CO₂がこのような部位でヘモグロビンに結合すると、タンパク質の形が変わり、酸素への親和性（引きつける力）が下がるので、酸素が離れやすくなります。</p>
<p><strong>胎児型ヘモグロビンと成人型ヘモグロビン。</strong>胎児は、胎盤を通して母親の血液から酸素を得ます。胎児は<strong>胎児型ヘモグロビン (foetal haemoglobin)</strong> をつくります。これは成人型とは異なるポリペプチド鎖でできています。胎児型ヘモグロビンは、同じ酸素濃度で成人型より<strong>酸素への親和性が高い</strong>です。そのため酸素濃度の低い胎盤で、母親のヘモグロビンから酸素を受け取れます。成人型は親和性が低いので、組織で酸素を放出できます。</p>`,
        `<p><strong>血紅蛋白 (haemoglobin)</strong> 是紅血球中運載氧氣的蛋白質。它有四條多肽鏈，每條鏈有一個含鐵的<strong>血紅素基團 (haem group)</strong>。一個血紅素基團可結合一個氧分子 (O₂)，所以一個血紅蛋白最多可運載四個O₂。（血紅蛋白作為綴合蛋白，見B1.2。）</p>
<p><strong>氧氣與血紅素基團的協同結合 (cooperative binding)。</strong>四個結合位點並不是各自獨立工作。當第一個O₂結合時，血紅蛋白的形狀略為改變，使下一個O₂<em>更容易</em>結合，如此類推。一個O₂的結合有助下一個結合。同樣，一個O₂釋出後，其餘的也更容易釋出。</p>
<p><strong>二氧化碳的別構結合 (allosteric binding)。</strong><em>別構</em>位點是不同於氧結合位點（血紅素基團）的結合位點。當CO₂在這樣的位點結合血紅蛋白時，蛋白質改變形狀，對氧氣的親和力（吸引力）下降，所以氧氣更容易釋出。</p>
<p><strong>胎兒與成人血紅蛋白。</strong>胎兒經胎盤從母親血液取得氧氣。胎兒製造<strong>胎兒血紅蛋白 (foetal haemoglobin)</strong>，它由與成人血紅蛋白不同的多肽鏈組成。在相同氧濃度下，胎兒血紅蛋白對氧氣的<strong>親和力比成人血紅蛋白高</strong>。所以在氧濃度低的胎盤，胎兒血紅蛋白可從母親的血紅蛋白取得氧氣。成人血紅蛋白親和力較低，使它能在組織中釋出氧氣。</p>`),
      examTip: T(
        "Do not mix up cooperative binding (O₂ helps the next O₂ to bind) and allosteric binding (CO₂ binds at a different site and lowers the affinity for O₂).",
        "協同的結合（O₂が次のO₂の結合を助ける）とアロステリック結合（CO₂が別の部位に結合してO₂への親和性を下げる）を混同しないこと。",
        "不要混淆協同結合（O₂幫助下一個O₂結合）和別構結合（CO₂在另一位點結合並降低對O₂的親和力）。")
    },
    {
      ref: "B3.1.12",
      ahl: true,
      heading: T("The Bohr shift", "ボーア効果（ボーアシフト）", "玻爾效應（Bohr shift）"),
      body: T(
        `<p>The <strong>Bohr shift</strong> is the change in haemoglobin's affinity for oxygen when the carbon dioxide concentration changes. <strong>An increase in carbon dioxide causes haemoglobin to release (dissociate from) more oxygen</strong>, at the same oxygen concentration. On an oxygen dissociation curve (next section) the curve shifts to the <em>right</em>.</p>
<p><strong>Why this is useful:</strong></p>
<ul>
<li>Actively respiring tissues (such as working muscle) use up a lot of oxygen and make a lot of CO₂.</li>
<li>The high CO₂ there makes haemoglobin release more oxygen exactly where it is needed most.</li>
<li>In the lungs the CO₂ concentration is lower (CO₂ diffuses out into the alveoli), so haemoglobin picks oxygen up easily.</li>
</ul>
<p>So the more active the tissue, the more oxygen it receives.</p>`,
        `<p><strong>ボーア効果 (Bohr shift)</strong> とは、二酸化炭素濃度が変わったときにヘモグロビンの酸素への親和性が変わることです。同じ酸素濃度で、<strong>二酸化炭素が増えるとヘモグロビンはより多くの酸素を放出（解離）します</strong>。酸素解離曲線（次のセクション）では、曲線が<em>右</em>へずれます。</p>
<p><strong>これが役立つ理由：</strong></p>
<ul>
<li>活発に呼吸している組織（働いている筋肉など）は、多くの酸素を使い、多くのCO₂をつくります。</li>
<li>そこでは高いCO₂がヘモグロビンに、最も必要な場所でより多くの酸素を放出させます。</li>
<li>肺ではCO₂濃度が低い（CO₂が肺胞へ拡散して出ていく）ので、ヘモグロビンは容易に酸素を受け取ります。</li>
</ul>
<p>つまり、組織が活発なほど、より多くの酸素が届きます。</p>`,
        `<p><strong>玻爾效應 (Bohr shift)</strong> 指二氧化碳濃度改變時，血紅蛋白對氧氣親和力的變化。在相同氧濃度下，<strong>二氧化碳增加會使血紅蛋白釋出（解離）更多氧氣</strong>。在氧解離曲線（下一節）上，曲線向<em>右</em>移。</p>
<p><strong>為何有用：</strong></p>
<ul>
<li>活躍進行呼吸的組織（如工作中的肌肉）用掉大量氧氣，並產生大量CO₂。</li>
<li>那裏高濃度的CO₂令血紅蛋白在最需要氧氣的地方釋出更多氧氣。</li>
<li>在肺中，CO₂濃度較低（CO₂擴散到肺泡中），所以血紅蛋白容易吸收氧氣。</li>
</ul>
<p>所以組織越活躍，得到的氧氣越多。</p>`)
    },
    {
      ref: "B3.1.13",
      ahl: true,
      heading: T("Oxygen dissociation curves", "酸素解離曲線", "氧解離曲線"),
      body: T(
        `<p>An <strong>oxygen dissociation curve</strong> shows the <strong>affinity</strong> of haemoglobin for oxygen at different oxygen concentrations. The x-axis is the oxygen concentration (often given as partial pressure of oxygen, in kPa). The y-axis is the percentage saturation of haemoglobin with oxygen (how many of its binding sites are carrying O₂).</p>
<p><strong>Why the curve is S-shaped (sigmoid), explained by cooperative binding:</strong></p>
<ol>
<li>At <em>low</em> oxygen concentrations the curve rises slowly. The first O₂ is hard to bind because the haemoglobin shape has low affinity.</li>
<li>Once the first O₂ binds, the shape changes and the affinity rises. Further O₂ binds more easily, so the curve becomes <em>steep</em>. A small change in oxygen concentration gives a large change in saturation.</li>
<li>At <em>high</em> oxygen concentrations the curve flattens. Nearly all the binding sites are full, so it is hard to find a free site for the last O₂.</li>
</ol>
<p><strong>Comparing curves:</strong></p>
<ul>
<li><strong>Foetal haemoglobin</strong> curve is to the <em>left</em> of the adult curve (higher saturation at the same oxygen concentration = higher affinity).</li>
<li><strong>Bohr shift:</strong> the adult curve in the presence of more CO₂ moves to the <em>right</em> (lower saturation at the same oxygen concentration = more oxygen released).</li>
</ul>
<p>Use the interactive curve below. The values are illustrative: real curves vary a little between textbooks.</p>`,
        `<p><strong>酸素解離曲線 (oxygen dissociation curve)</strong> は、さまざまな酸素濃度でのヘモグロビンの酸素への<strong>親和性 (affinity)</strong> を表します。x軸は酸素濃度（酸素分圧、kPaで示すことが多い）です。y軸は、ヘモグロビンの酸素飽和度（結合部位のうちO₂を運んでいる割合）のパーセントです。</p>
<p><strong>曲線がS字形（シグモイド）になる理由を、協同的結合で説明すると：</strong></p>
<ol>
<li><em>低い</em>酸素濃度では曲線はゆっくり上がります。最初のO₂は、ヘモグロビンの形の親和性が低いので結合しにくいのです。</li>
<li>最初のO₂が結合すると、形が変わり、親和性が上がります。続くO₂はより結合しやすくなるので、曲線は<em>急</em>になります。酸素濃度のわずかな変化で、飽和度が大きく変わります。</li>
<li><em>高い</em>酸素濃度では曲線は平らになります。ほとんどすべての結合部位が埋まっており、最後のO₂が結合する空きを見つけにくくなります。</li>
</ol>
<p><strong>曲線の比較：</strong></p>
<ul>
<li><strong>胎児型ヘモグロビン</strong>の曲線は、成人型の曲線の<em>左</em>にあります（同じ酸素濃度での飽和度が高い = 親和性が高い）。</li>
<li><strong>ボーア効果：</strong>CO₂が多いときの成人型の曲線は<em>右</em>へ動きます（同じ酸素濃度での飽和度が低い = 酸素がより多く放出される）。</li>
</ul>
<p>下のインタラクティブな曲線を使ってみましょう。値はイラスト用で、実際の曲線は教科書によって少し異なります。</p>`,
        `<p><strong>氧解離曲線 (oxygen dissociation curve)</strong> 顯示在不同氧濃度下，血紅蛋白對氧氣的<strong>親和力 (affinity)</strong>。x軸是氧濃度（常以氧分壓表示，單位kPa）。y軸是血紅蛋白的氧飽和度百分率（即多少結合位點載有O₂）。</p>
<p><strong>以協同結合解釋曲線為何呈S形（乙狀）：</strong></p>
<ol>
<li>在<em>低</em>氧濃度時，曲線上升緩慢。第一個O₂不易結合，因為血紅蛋白的形狀親和力低。</li>
<li>第一個O₂結合後，形狀改變，親和力上升。其後的O₂更容易結合，所以曲線變得<em>陡</em>。氧濃度的小變化會引致飽和度的大變化。</li>
<li>在<em>高</em>氧濃度時，曲線變平。差不多所有結合位點都已佔據，最後一個O₂難以找到空位。</li>
</ol>
<p><strong>比較曲線：</strong></p>
<ul>
<li><strong>胎兒血紅蛋白</strong>的曲線在成人曲線的<em>左方</em>（相同氧濃度下飽和度較高 = 親和力較高）。</li>
<li><strong>玻爾效應：</strong>有較多CO₂時，成人曲線向<em>右</em>移（相同氧濃度下飽和度較低 = 釋出更多氧氣）。</li>
</ul>
<p>使用下面的互動曲線。數值為示範數據，實際曲線在不同課本中略有差異。</p>`),
      widget: "o2-curve",
      examTip: T(
        "To explain the S-shape you must use 'cooperative binding' and describe all three parts: slow start, steep middle, flat top.",
        "S字形を説明するには「協同的結合」という語を使い、3つの部分（ゆるやかな立ち上がり、急な中間部、平らな上部）をすべて説明します。",
        "解釋S形時必須用「協同結合」一詞，並描述三部分：起初緩慢、中段陡峭、頂部平坦。")
    }
  ],
  keyTerms: [
    { term: T("gas exchange", "ガス交換", "氣體交換"), def: T("The swapping of gases (such as oxygen and carbon dioxide) between an organism and its environment.", "生物と環境の間で気体（酸素や二酸化炭素など）をやり取りすること。", "生物與環境之間交換氣體（如氧氣和二氧化碳）。"), ahl: false },
    { term: T("concentration gradient", "濃度勾配", "濃度梯度"), def: T("A difference in concentration between two places. Diffusion goes down the gradient, from high to low.", "2つの場所の濃度の差。拡散は勾配に沿って、高濃度から低濃度へ進む。", "兩處濃度的差別。擴散沿梯度由高濃度到低濃度進行。"), ahl: false },
    { term: T("ventilation", "換気", "通氣"), def: T("Moving air (lungs) or water (gills) over a gas-exchange surface to keep the concentration gradient steep.", "濃度勾配を急に保つために、空気（肺）や水（えら）をガス交換面の上で動かすこと。", "使空氣（肺）或水（鰓）流過氣體交換表面，以保持濃度梯度陡峭。"), ahl: false },
    { term: T("alveolus", "肺胞", "肺泡"), def: T("A tiny air sac in the lung where gas exchange takes place.", "肺の中にある、ガス交換が行われる小さな空気の袋。", "肺中進行氣體交換的細小氣囊。"), ahl: false },
    { term: T("surfactant", "サーファクタント", "表面活性物質"), def: T("A substance secreted into the fluid lining the alveoli that reduces surface tension and stops the alveolar walls sticking together.", "肺胞を覆う液に分泌され、表面張力を下げて肺胞壁がくっつくのを防ぐ物質。", "分泌入肺泡內襯液體的物質，降低表面張力，防止肺泡壁黏在一起。"), ahl: false },
    { term: T("tidal volume", "1回換気量", "潮氣量"), def: T("The volume of air breathed in or out in one normal breath.", "1回の普通の呼吸で出入りする空気の量。", "一次正常呼吸吸入或呼出的空氣體積。"), ahl: false },
    { term: T("vital capacity", "肺活量", "肺活量"), def: T("The maximum volume of air that can be breathed out after a maximum breath in.", "最大限に吸った後に吐き出せる空気の最大量。", "盡量吸氣後所能呼出的最大空氣體積。"), ahl: false },
    { term: T("inspiratory / expiratory reserve volume", "予備吸気量／予備呼気量", "吸氣／呼氣儲備量"), def: T("The extra volume that can be breathed in (or out) beyond a normal breath in (or out).", "普通の吸気（呼気）に加えて、さらに吸える（吐ける）空気の量。", "在正常吸氣（呼氣）之外，還能額外吸入（呼出）的空氣體積。"), ahl: false },
    { term: T("stomata (stoma)", "気孔", "氣孔"), def: T("Pores in the leaf epidermis, each surrounded by two guard cells, through which gases and water vapour pass.", "葉の表皮にある孔。各孔は2つの孔辺細胞に囲まれ、気体や水蒸気が通る。", "葉表皮上的小孔，每個由兩個保衛細胞圍繞，氣體和水蒸氣由此通過。"), ahl: false },
    { term: T("guard cells", "孔辺細胞", "保衛細胞"), def: T("A pair of cells that change shape to open and close a stoma.", "形を変えて気孔を開閉する、1対の細胞。", "一對改變形狀以開合氣孔的細胞。"), ahl: false },
    { term: T("transpiration", "蒸散", "蒸騰作用"), def: T("The loss of water vapour from a plant, mainly through the stomata of the leaves.", "植物体、おもに葉の気孔からの水蒸気の損失。", "植物主要經葉氣孔散失水蒸氣。"), ahl: false },
    { term: T("stomatal density", "気孔密度", "氣孔密度"), def: T("The number of stomata per unit area of leaf surface.", "葉の表面の単位面積あたりの気孔の数。", "每單位葉表面面積的氣孔數目。"), ahl: false },
    { term: T("plan diagram", "平面図", "平面圖"), def: T("A diagram showing the arrangement of tissues as outlines, without drawing individual cells.", "個々の細胞を描かず、組織の配置を輪郭で示す図。", "以輪廓顯示組織排列、不繪畫個別細胞的圖。"), ahl: false },
    { term: T("haem group", "ヘム基", "血紅素基團"), def: T("The iron-containing group in each haemoglobin polypeptide that binds one oxygen molecule.", "ヘモグロビンの各ポリペプチドにある、鉄を含み酸素分子1個を結合する基。", "血紅蛋白每條多肽鏈上含鐵、可結合一個氧分子的基團。"), ahl: true },
    { term: T("cooperative binding", "協同的結合", "協同結合"), def: T("Binding of one oxygen molecule to haemoglobin changes its shape so that the next oxygen binds more easily.", "ヘモグロビンに1個の酸素が結合すると形が変わり、次の酸素が結合しやすくなること。", "一個氧分子與血紅蛋白結合後令其形狀改變，使下一個氧分子更容易結合。"), ahl: true },
    { term: T("allosteric binding", "アロステリック結合", "別構結合"), def: T("Binding of a molecule (such as CO₂) at a site other than the oxygen-binding site (haem group), which changes the protein's shape and its affinity for oxygen.", "分子（CO₂など）が酸素の結合部位（ヘム基）とは別の部位に結合し、タンパク質の形と酸素への親和性を変えること。", "分子（如CO₂）在氧結合位點（血紅素基團）以外的位點結合，改變蛋白質形狀及其對氧氣的親和力。"), ahl: true },
    { term: T("affinity", "親和性", "親和力"), def: T("How strongly haemoglobin attracts and holds oxygen.", "ヘモグロビンが酸素をどれだけ強く引きつけて保持するか。", "血紅蛋白吸引並保持氧氣的強度。"), ahl: true },
    { term: T("Bohr shift", "ボーア効果", "玻爾效應"), def: T("The shift of the oxygen dissociation curve to the right when CO₂ concentration is higher, so more oxygen is released.", "CO₂濃度が高いと酸素解離曲線が右へずれ、より多くの酸素が放出されること。", "CO₂濃度較高時，氧解離曲線向右移，釋出更多氧氣。"), ahl: true },
    { term: T("oxygen dissociation curve", "酸素解離曲線", "氧解離曲線"), def: T("A graph of percentage saturation of haemoglobin against oxygen concentration (partial pressure).", "酸素濃度（分圧）に対するヘモグロビンの飽和度（%）のグラフ。", "血紅蛋白飽和度（%）對氧濃度（分壓）的曲線圖。"), ahl: true }
  ],
  misconceptions: [
    { wrong: T("Plants only respire at night and only photosynthesize in the day, so they only exchange one gas at a time.", "植物は夜だけ呼吸し、昼だけ光合成するので、一度に1種類の気体しか交換しない。", "植物只在夜間呼吸、只在日間光合作用，所以一次只交換一種氣體。"),
      right: T("Plants respire all the time. In the light, photosynthesis is usually faster than respiration, so there is a net uptake of CO₂ and release of O₂.", "植物は常に呼吸しています。光のもとでは光合成が呼吸より速いことが多いので、全体としてはCO₂を取り込みO₂を放出します。", "植物一直都在呼吸。在光下，光合作用通常比呼吸快，所以整體是吸入CO₂、釋出O₂。") },
    { wrong: T("The lungs pull air in by themselves.", "肺が自分で空気を引き込む。", "肺自己把空氣吸進去。"),
      right: T("Lungs have no muscles. The diaphragm and intercostal muscles change the volume and pressure of the thorax.", "肺には筋肉がありません。横隔膜と肋間筋が胸郭の体積と圧力を変えます。", "肺沒有肌肉。橫膈膜和肋間肌改變胸腔的體積和壓力。") },
    { wrong: T("The diaphragm relaxes and moves down during inhalation.", "吸気のとき、横隔膜はゆるんで下がる。", "吸氣時橫膈膜放鬆並下移。"),
      right: T("The diaphragm contracts and flattens (moves down) during inhalation. It relaxes and domes up during exhalation.", "吸気のとき、横隔膜は収縮して平らになります（下がる）。呼気のときにゆるんでドーム状に戻ります。", "吸氣時橫膈膜收縮並變平（下移）；呼氣時放鬆並向上隆起。") },
    { wrong: T("Vital capacity is all the air in the lungs.", "肺活量は肺の中の空気のすべてである。", "肺活量就是肺內所有的空氣。"),
      right: T("Some air (residual air) always stays in the lungs after the deepest breath out.", "最大限に吐いた後も、一部の空気（残気）は常に肺に残ります。", "盡力呼氣後，仍有部分空氣（殘氣）留在肺內。") },
    { wrong: T("Stomata open to let water out.", "気孔は水を出すために開く。", "氣孔張開是為了讓水分散失。"),
      right: T("Stomata open mainly to let CO₂ in. Water loss (transpiration) is an unavoidable consequence.", "気孔はおもにCO₂を取り込むために開きます。水の損失（蒸散）は避けられない結果です。", "氣孔張開主要是讓CO₂進入。水分散失（蒸騰作用）是不可避免的後果。") },
    { wrong: T("The oxygen dissociation curve is S-shaped because haemoglobin gets tired.", "酸素解離曲線がS字形なのは、ヘモグロビンが疲れるからである。", "氧解離曲線呈S形是因為血紅蛋白疲勞了。"),
      right: T("The S-shape is due to cooperative binding: each O₂ that binds makes the next one bind more easily until the sites are nearly full.", "S字形は協同的結合によります。O₂が1つ結合するごとに次が結合しやすくなり、部位がほぼ埋まるまで続きます。", "S形是由於協同結合：每結合一個O₂，下一個便更容易結合，直至位點差不多全滿。") }
  ],
  beyondSyllabus: [
    T("Not needed for this subtopic: how chemoreceptors and the brainstem control the ventilation rate. It is taught in C3.1.15 (Feedback control of ventilation rate, in C3.1 Integration of body systems).", "このサブトピックでは不要：化学受容器と脳幹が換気の速さを調節する仕組み。これはC3.1.15（換気速度のフィードバック調節、C3.1 体の器官系の統合）で学びます。", "此子課題不需要：化學感受器和腦幹如何控制通氣速率。這會在C3.1.15（通氣速率的反饋控制，屬C3.1 身體系統的整合）學習。"),
    T("You do not need countercurrent exchange in fish gills or the structure of gill filaments. The guide only asks for ventilation of gills with water as one way of maintaining gradients.", "魚のえらでの向流交換や、えらのフィラメントの構造は不要です。ガイドが求めるのは、濃度勾配を保つ方法の1つとして、水でえらを換気することだけです。", "你不需要認識魚鰓的逆流交換或鰓絲的結構。課程指引只要求「以水為鰓通氣」作為維持梯度的方法之一。"),
    T("You do not need residual volume, total lung capacity or minute ventilation formulae. The guide lists tidal volume, vital capacity and the inspiratory and expiratory reserves.", "残気量、全肺気量、分時換気量の式は不要です。ガイドが挙げるのは、1回換気量、肺活量、予備吸気量・予備呼気量です。", "你不需要殘氣量、總肺容量或每分鐘通氣量的公式。課程指引列出的是潮氣量、肺活量、吸氣和呼氣儲備量。"),
    T("You do not need other lung structures or diseases (for example emphysema or asthma) for B3.1. The guide limits lung adaptations to surfactant, bronchioles, capillary beds and surface area.", "B3.1では、肺のほかの構造や病気（肺気腫や喘息など）は不要です。ガイドは肺の適応をサーファクタント、細気管支、毛細血管床、表面積に限っています。", "B3.1不需要認識肺的其他結構或疾病（如肺氣腫或哮喘）。課程指引把肺的適應特徵限於表面活性物質、細支氣管、微血管床和表面面積。"),
    T("You do not need the chloride shift, carbonic anhydrase, the transport of CO₂ as bicarbonate, or myoglobin's dissociation curve. The guide asks for cooperative binding, allosteric binding of CO₂, the Bohr shift and foetal versus adult haemoglobin.", "塩化物シフト、炭酸脱水酵素、炭酸水素イオンとしてのCO₂の輸送、ミオグロビンの解離曲線は不要です。ガイドが求めるのは、協同的結合、CO₂のアロステリック結合、ボーア効果、胎児型と成人型のヘモグロビンです。", "你不需要氯離子轉移、碳酸酐酶、以碳酸氫根運載CO₂，或肌紅蛋白的解離曲線。課程指引要求的是協同結合、CO₂的別構結合、玻爾效應，以及胎兒與成人血紅蛋白。"),
    T("You do not need to memorize exact stomatal densities, exact lung volumes or exact saturation values on the curves. Learn the shapes and the reasons.", "気孔密度、肺気量、曲線上の飽和度の正確な値を暗記する必要はありません。形とその理由を学びましょう。", "你不需要背誦準確的氣孔密度、肺容量或曲線上的飽和度數值。要學習的是形狀和原因。")
  ],
  links: [
    { to: "B2.3", why: T("Surface area-to-volume ratio and the pneumocytes of the alveolus.", "表面積と体積の比、肺胞の肺胞上皮細胞。", "表面面積與體積比，以及肺泡的肺泡細胞。") },
    { to: "B3.2", why: T("Blood transports the gases; transpiration pulls water up through xylem.", "血液が気体を運搬します。蒸散が木部を通して水を引き上げます。", "血液運輸氣體；蒸騰作用把水拉上木質部。") },
    { to: "B1.2", why: T("Haemoglobin's quaternary structure explains cooperative binding.", "ヘモグロビンの四次構造が協同的結合を説明します。", "血紅蛋白的四級結構解釋協同結合。") }
  ],
  natureOfScience: [
    T("Reliability of quantitative data is increased by repeating measurements. Repeated counts of stomata in the field of view show the variability of biological material and the need for replicate trials.", "定量データの信頼性は、測定を繰り返すことで高まります。視野内の気孔を繰り返し数えると、生物材料のばらつきと、繰り返しの試行の必要性がわかります。", "重複量度可提高定量數據的可靠性。重複計數視野內的氣孔，顯示生物材料的變異性及進行重複試驗的需要。")
  ],
  questions: [
    { id: "b3-1-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B3.1.1", paper: "1A",
      stem: T("Why is gas exchange more of a challenge for large organisms than for small ones?", "大きな生物にとってガス交換が小さな生物より難しいのはなぜか。", "為何氣體交換對大型生物比對小型生物更具挑戰？"),
      options: [
        T("Their surface area-to-volume ratio is smaller and diffusion distances to the centre are greater.", "表面積と体積の比が小さく、中心までの拡散距離が長いから。", "它們的表面面積與體積比較小，而且到中央的擴散距離較長。"),
        T("Large organisms respire anaerobically.", "大きな生物は嫌気呼吸をするから。", "大型生物進行無氧呼吸。"),
        T("Large organisms have a larger surface area-to-volume ratio, which loses too much oxygen.", "大きな生物はSA:Vが大きく、酸素を失いすぎるから。", "大型生物的表面面積與體積比較大，失去太多氧氣。"),
        T("Gases cannot diffuse in living tissue.", "生きた組織の中では気体は拡散できないから。", "氣體不能在活組織中擴散。")
      ],
      answer: 0,
      explanation: T("As size increases, the surface area-to-volume ratio falls and the distance from centre to outside increases. C has the trend backwards. B and D are untrue statements.", "大きくなるとSA:Vは小さくなり、中心から外側までの距離は長くなります。Cは傾向が逆です。BとDは事実ではありません。", "大小增加時，表面面積與體積比下降，由中心到外界的距離增加。C的趨勢相反。B和D是不正確的陳述。") },
    { id: "b3-1-q02", type: "multi", ahl: false, difficulty: 1, ref: "B3.1.2", paper: "1A",
      stem: T("Which are properties of an efficient gas-exchange surface? Select all that apply.", "効率のよいガス交換面の性質はどれか。当てはまるものをすべて選びなさい。", "哪些是高效氣體交換表面的特性？選出所有適用者。"),
      options: [
        T("Permeable to the gases", "気体を透過させる", "對氣體可滲透"),
        T("A thin tissue layer", "薄い組織の層", "薄的組織層"),
        T("Moist", "湿っている", "濕潤"),
        T("A large surface area", "広い表面積", "大表面面積"),
        T("A thick waterproof layer", "厚い防水の層", "厚的防水層")
      ],
      answer: [0, 1, 2, 3],
      explanation: T("Permeability, thinness, moisture and large surface area are the four properties the guide lists. A thick waterproof layer would block diffusion.", "透過性、薄さ、湿り気、広い表面積がガイドの挙げる4つの性質です。厚い防水の層は拡散を妨げます。", "可滲透、薄、濕潤和大表面面積是課程指引列出的四項特性。厚的防水層會阻礙擴散。") },
    { id: "b3-1-q03", type: "mcq", ahl: false, difficulty: 2, ref: "B3.1.3", paper: "1A",
      stem: T("How does continuous blood flow past an alveolus help gas exchange?", "肺胞の横を血液が連続して流れることは、ガス交換にどう役立つか。", "血液持續流經肺泡如何有助氣體交換？"),
      options: [
        T("It keeps the oxygen concentration in the blood low, so oxygen keeps diffusing in.", "血液中の酸素濃度を低く保ち、酸素が拡散して入り続ける。", "使血液中的氧氣濃度保持低水平，令氧氣持續擴散進入。"),
        T("It pushes oxygen into the blood by pressure.", "圧力で酸素を血液に押し込む。", "以壓力把氧氣推入血液。"),
        T("It makes the alveolar wall thicker.", "肺胞壁を厚くする。", "使肺泡壁變厚。"),
        T("It makes the air in the alveolus move faster.", "肺胞内の空気を速く動かす。", "使肺泡內的空氣流動更快。")
      ],
      answer: 0,
      explanation: T("Gases move by diffusion, not by being pushed. Moving blood carries oxygen away so the gradient stays steep. The tempting option D mixes this up with ventilation, which is the job of the breathing muscles.", "気体は押されるのではなく拡散で移動します。流れる血液が酸素を運び去るので、勾配が急に保たれます。紛らわしいDは換気と混同しています。換気は呼吸筋の働きです。", "氣體是靠擴散移動，不是被推動。流動的血液把氧氣帶走，使梯度保持陡峭。容易混淆的D把這與通氣混為一談，而通氣是呼吸肌的工作。") },
    { id: "b3-1-q04", type: "short", ahl: false, difficulty: 2, ref: "B3.1.4", paper: "2", commandTerm: "Describe", marks: 4,
      stem: T("Describe four adaptations of the mammalian lung for gas exchange.", "哺乳類の肺のガス交換への適応を4つ述べなさい。", "描述哺乳動物肺進行氣體交換的四項適應特徵。"),
      markscheme: [
        T("Surfactant reduces surface tension / stops alveoli walls sticking together", "サーファクタントが表面張力を下げる／肺胞壁がくっつくのを防ぐ", "表面活性物質降低表面張力／防止肺泡壁黏在一起"),
        T("Branched network of bronchioles carries air to all alveoli", "枝分かれした細気管支の網目が、すべての肺胞に空気を運ぶ", "分支的細支氣管網絡把空氣帶到所有肺泡"),
        T("Extensive capillary beds around alveoli carry oxygen away / maintain concentration gradient", "肺胞の周りの広い毛細血管床が酸素を運び去る／濃度勾配を維持する", "肺泡周圍廣闊的微血管床把氧氣帶走／維持濃度梯度"),
        T("High surface area due to a very large number of alveoli", "非常に多数の肺胞による広い表面積", "大量肺泡帶來大的表面面積"),
        T("Thin walls of alveoli and capillaries give a short diffusion distance (accept)", "肺胞と毛細血管の壁が薄く拡散距離が短い（可）", "肺泡和微血管的壁薄，擴散距離短（接受）")
      ],
      modelAnswer: T("Surfactant lowers surface tension so the alveoli do not stick together. A branched network of bronchioles takes air to every alveolus. Extensive capillary beds carry oxygen away, keeping a steep concentration gradient. The very large number of alveoli gives a high surface area.", "サーファクタントが表面張力を下げ、肺胞がくっつかない。枝分かれした細気管支の網目がすべての肺胞に空気を運ぶ。広い毛細血管床が酸素を運び去り、急な濃度勾配を保つ。非常に多数の肺胞が広い表面積を与える。", "表面活性物質降低表面張力，使肺泡不會黏在一起。分支的細支氣管網絡把空氣帶到每個肺泡。廣闊的微血管床把氧氣帶走，保持陡的濃度梯度。大量肺泡提供大的表面面積。") },
    { id: "b3-1-q05", type: "order", ahl: false, difficulty: 2, ref: "B3.1.5", paper: "1A",
      stem: T("Put the events of inhalation in the correct order.", "吸気で起こる出来事を正しい順に並べなさい。", "把吸氣時的事件按正確次序排列。"),
      items: [
        T("External intercostal muscles and diaphragm contract", "外肋間筋と横隔膜が収縮する", "外肋間肌和橫膈膜收縮"),
        T("Ribs move up and out; diaphragm flattens", "肋骨が上方・外方へ動き、横隔膜が平らになる", "肋骨向上及向外移，橫膈膜變平"),
        T("Volume of the thorax increases", "胸郭の体積が増える", "胸腔體積增加"),
        T("Pressure in the lungs falls below atmospheric pressure", "肺内の圧力が大気圧より低くなる", "肺內壓力降至低於大氣壓力"),
        T("Air flows into the lungs", "空気が肺に流れ込む", "空氣流入肺部")
      ],
      explanation: T("Muscle contraction changes the volume, which changes the pressure, and air then flows from high to low pressure.", "筋の収縮が体積を変え、体積の変化が圧力を変え、空気は高圧から低圧へ流れます。", "肌肉收縮改變體積，體積改變引起壓力改變，空氣然後由高壓流向低壓。") },
    { id: "b3-1-q06", type: "mcq", ahl: false, difficulty: 2, ref: "B3.1.5", paper: "1A",
      stem: T("During forced exhalation, which muscles contract?", "強制呼気のとき、収縮する筋肉はどれか。", "強制呼氣時，哪些肌肉收縮？"),
      options: [
        T("External intercostal muscles and the diaphragm", "外肋間筋と横隔膜", "外肋間肌和橫膈膜"),
        T("Internal intercostal muscles and abdominal muscles", "内肋間筋と腹筋", "內肋間肌和腹肌"),
        T("Only the diaphragm", "横隔膜だけ", "只有橫膈膜"),
        T("None; the lungs push the air out", "どれも収縮しない。肺が空気を押し出す", "沒有；肺把空氣推出")
      ],
      answer: 1,
      explanation: T("Internal intercostals pull the ribs down and in, and abdominal muscles push the diaphragm up. A lists the inhalation muscles. D describes resting (passive) exhalation, but even then the lungs recoil rather than push.", "内肋間筋が肋骨を下方・内方へ引き、腹筋が横隔膜を押し上げます。Aは吸気の筋です。Dは安静時（受動的）の呼気の説明ですが、その場合でも肺は押すのではなく弾性で縮みます。", "內肋間肌把肋骨向下及向內拉，腹肌把橫膈膜向上推。A是吸氣的肌肉。D描述的是靜止（被動）呼氣，但即使這樣，肺也是彈性回縮而不是推出。") },
    { id: "b3-1-q07", type: "short", ahl: false, difficulty: 2, ref: "B3.1.6", paper: "1B", commandTerm: "Determine", marks: 5,
      stem: T("The graph is a spirogram of a student (illustrative data). It shows the volume of air in the lungs above the residual volume. (a) Determine the tidal volume. (b) Determine the vital capacity. (c) Calculate the inspiratory reserve volume and (d) the expiratory reserve volume. (e) Calculate the breathing rate at rest in breaths per minute.", "グラフはある生徒のスパイログラムである（イラスト用データ）。残気量を超える肺内の空気の量を示している。(a) 1回換気量を求めなさい。(b) 肺活量を求めなさい。(c) 予備吸気量と (d) 予備呼気量を計算しなさい。(e) 安静時の呼吸数（回/分）を計算しなさい。", "圖表是一位學生的肺活量描記圖（示範數據），顯示高於殘氣量的肺內空氣體積。(a) 求潮氣量。(b) 求肺活量。(c) 計算吸氣儲備量，以及 (d) 呼氣儲備量。(e) 計算靜止時的呼吸率（每分鐘次數）。"),
      data: (function () {
        const svg = (xl, yl, a, b) => `<svg viewBox="0 0 380 250" style="width:100%;max-width:420px;height:auto" role="img" aria-label="spirogram"><g stroke="var(--line, #c3d0d7)" stroke-width="1"><line x1="50" y1="200" x2="350" y2="200"/><line x1="50" y1="20" x2="50" y2="200"/><line x1="50" y1="164" x2="350" y2="164" stroke-dasharray="2 4"/><line x1="50" y1="128" x2="350" y2="128" stroke-dasharray="2 4"/><line x1="50" y1="92" x2="350" y2="92" stroke-dasharray="2 4"/><line x1="50" y1="56" x2="350" y2="56" stroke-dasharray="2 4"/><line x1="50" y1="20" x2="350" y2="20" stroke-dasharray="2 4"/></g><polyline fill="none" stroke="var(--accent, #2547c7)" stroke-width="2.2" stroke-linejoin="round" points="50,156.8 70,138.8 90,156.8 110,138.8 130,156.8 150,138.8 170,156.8 200,30.8 260,200 280,156.8 300,138.8 320,156.8 340,138.8 350,147.8"/><g font-size="11" fill="var(--ink, #0f2029)" text-anchor="end"><text x="45" y="204">0</text><text x="45" y="168">1</text><text x="45" y="132">2</text><text x="45" y="96">3</text><text x="45" y="60">4</text><text x="45" y="24">5</text></g><g font-size="11" fill="var(--ink, #0f2029)" text-anchor="middle"><text x="50" y="215">0</text><text x="100" y="215">5</text><text x="150" y="215">10</text><text x="200" y="215">15</text><text x="250" y="215">20</text><text x="300" y="215">25</text><text x="350" y="215">30</text></g><text x="200" y="240" font-size="11" text-anchor="middle" fill="var(--ink, #0f2029)">${xl}</text><text x="12" y="110" font-size="11" text-anchor="middle" fill="var(--ink, #0f2029)" transform="rotate(-90 12 110)">${yl}</text></svg>`;
        return T(svg("Time / s", "Volume of air in lungs above residual / dm³"), svg("時間 / s", "残気量を超える肺内の空気の量 / dm³"), svg("時間 / s", "高於殘氣量的肺內空氣體積 / dm³"));
      })(),
      markscheme: [
        T("(a) Tidal volume = 0.5 dm³ (1.2 to 1.7)", "(a) 1回換気量 = 0.5 dm³（1.2から1.7）", "(a) 潮氣量 = 0.5 dm³（1.2至1.7）"),
        T("(b) Vital capacity = 4.7 dm³ (from the lowest point, 0, to the highest point, 4.7)", "(b) 肺活量 = 4.7 dm³（最低点の0から最高点の4.7まで）", "(b) 肺活量 = 4.7 dm³（由最低點0至最高點4.7）"),
        T("(c) Inspiratory reserve volume = 4.7 − 1.7 = 3.0 dm³", "(c) 予備吸気量 = 4.7 − 1.7 = 3.0 dm³", "(c) 吸氣儲備量 = 4.7 − 1.7 = 3.0 dm³"),
        T("(d) Expiratory reserve volume = 1.2 − 0 = 1.2 dm³", "(d) 予備呼気量 = 1.2 − 0 = 1.2 dm³", "(d) 呼氣儲備量 = 1.2 − 0 = 1.2 dm³"),
        T("(e) One breath takes 4 s, so 60 ÷ 4 = 15 breaths per minute", "(e) 1呼吸は4秒なので、60 ÷ 4 = 15回/分", "(e) 每次呼吸需4秒，所以 60 ÷ 4 = 每分鐘15次")
      ],
      modelAnswer: T("(a) 0.5 dm³. (b) 4.7 dm³. (c) 4.7 − 1.7 = 3.0 dm³. (d) 1.2 dm³. (e) Peaks are 4 s apart, so 60 ÷ 4 = 15 breaths per minute.", "(a) 0.5 dm³。(b) 4.7 dm³。(c) 4.7 − 1.7 = 3.0 dm³。(d) 1.2 dm³。(e) 山と山の間隔が4秒なので、60 ÷ 4 = 15回/分。", "(a) 0.5 dm³。(b) 4.7 dm³。(c) 4.7 − 1.7 = 3.0 dm³。(d) 1.2 dm³。(e) 波峰相隔4秒，所以 60 ÷ 4 = 每分鐘15次。") },
    { id: "b3-1-q08", type: "mcq", ahl: false, difficulty: 2, ref: "B3.1.6", paper: "1A",
      stem: T("A student has a vital capacity of 4.4 dm³, a tidal volume of 0.5 dm³ and an expiratory reserve volume of 1.1 dm³. What is the inspiratory reserve volume?", "ある生徒の肺活量は4.4 dm³、1回換気量は0.5 dm³、予備呼気量は1.1 dm³である。予備吸気量はいくらか。", "一位學生的肺活量為4.4 dm³，潮氣量為0.5 dm³，呼氣儲備量為1.1 dm³。吸氣儲備量是多少？"),
      options: [
        T("2.8 dm³", "2.8 dm³", "2.8 dm³"),
        T("3.3 dm³", "3.3 dm³", "3.3 dm³"),
        T("3.9 dm³", "3.9 dm³", "3.9 dm³"),
        T("6.0 dm³", "6.0 dm³", "6.0 dm³")
      ],
      answer: 0,
      explanation: T("Vital capacity = tidal volume + IRV + ERV, so IRV = 4.4 − 0.5 − 1.1 = 2.8 dm³. B forgets to subtract the tidal volume. C forgets to subtract the ERV. D adds all three.", "肺活量 = 1回換気量 + 予備吸気量 + 予備呼気量なので、予備吸気量 = 4.4 − 0.5 − 1.1 = 2.8 dm³。Bは1回換気量の引き算を忘れています。Cは予備呼気量の引き算を忘れています。Dは3つを足しています。", "肺活量 = 潮氣量 + 吸氣儲備量 + 呼氣儲備量，所以吸氣儲備量 = 4.4 − 0.5 − 1.1 = 2.8 dm³。B忘了減去潮氣量。C忘了減去呼氣儲備量。D把三者相加。") },
    { id: "b3-1-q09", type: "match", ahl: false, difficulty: 1, ref: "B3.1.7", paper: "1A",
      stem: T("Match each leaf feature with its role in gas exchange.", "葉の構造とガス交換での役割を組み合わせなさい。", "把葉的各結構與其在氣體交換中的作用配對。"),
      pairs: [
        { left: T("Waxy cuticle", "ろうを含むクチクラ", "蠟質角質層"), right: T("Reduces water loss from the leaf surface", "葉の表面からの水分の損失を減らす", "減少葉表面的水分散失") },
        { left: T("Guard cells", "孔辺細胞", "保衛細胞"), right: T("Open and close the stoma", "気孔を開閉する", "開合氣孔") },
        { left: T("Air spaces in spongy mesophyll", "海綿状組織の空気の隙間", "海綿葉肉的氣室"), right: T("Let gases diffuse quickly to all cells", "気体がすべての細胞へ速く拡散できるようにする", "讓氣體快速擴散至所有細胞") },
        { left: T("Veins", "葉脈", "葉脈"), right: T("Bring water and carry away products of photosynthesis", "水を運び込み、光合成産物を運び去る", "輸入水分並運走光合作用產物") }
      ],
      explanation: T("Each feature has one clear role in the guide's list of leaf adaptations.", "各構造は、ガイドの葉の適応のリストの中で、それぞれ明確な役割を持っています。", "每項結構在課程指引的葉適應特徵列表中都有一個明確的作用。") },
    { id: "b3-1-q10", type: "short", ahl: false, difficulty: 2, ref: "B3.1.7", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain how the structure of a leaf is adapted for gas exchange.", "葉の構造がガス交換にどのように適応しているか説明しなさい。", "解釋葉的結構如何適應氣體交換。"),
      markscheme: [
        T("Stomata/guard cells open to allow CO₂ in and O₂ out (close to reduce water loss)", "気孔／孔辺細胞が開いてCO₂を入れO₂を出す（閉じて水分の損失を減らす）", "氣孔／保衛細胞張開讓CO₂進入、O₂離開（關閉以減少水分散失）"),
        T("Air spaces in the spongy mesophyll let gases diffuse quickly to cells", "海綿状組織の空気の隙間により、気体が細胞へ速く拡散する", "海綿葉肉的氣室使氣體快速擴散至細胞"),
        T("Large surface area of moist mesophyll cell walls for gases to dissolve in and diffuse across", "気体が溶けて通る、湿った葉肉細胞壁の広い表面積", "濕潤的葉肉細胞壁表面面積大，氣體可溶解並擴散通過"),
        T("Epidermis is thin/one cell thick and the cuticle is thin/transparent so light enters (accept thin leaf = short diffusion distance)", "表皮は薄い／細胞1個分の厚さで、クチクラは薄く透明で光が入る（葉が薄い = 拡散距離が短い、も可）", "表皮薄／一個細胞厚，角質層薄且透明，光可透入（接受：葉薄 = 擴散距離短）"),
        T("Waxy cuticle reduces water loss", "ろうを含むクチクラが水分の損失を減らす", "蠟質角質層減少水分散失")
      ],
      modelAnswer: T("Stomata, controlled by guard cells, open to let CO₂ in and O₂ out. The spongy mesophyll has many air spaces, so gases diffuse quickly through the leaf. The cell walls of the mesophyll are moist and have a large total surface area, so gases dissolve and diffuse into the cells. The cuticle and closing stomata limit water loss.", "孔辺細胞が制御する気孔が開き、CO₂が入りO₂が出る。海綿状組織には多くの空気の隙間があり、気体が葉の中を速く拡散する。葉肉細胞の細胞壁は湿っていて総表面積が大きく、気体が溶けて細胞へ拡散する。クチクラと気孔の閉鎖が水分の損失を抑える。", "由保衛細胞控制的氣孔張開，讓CO₂進入、O₂離開。海綿葉肉有許多氣室，氣體在葉中快速擴散。葉肉細胞壁濕潤，總表面面積大，氣體可溶解並擴散入細胞。角質層和氣孔關閉限制水分散失。") },
    { id: "b3-1-q11", type: "mcq", ahl: false, difficulty: 2, ref: "B3.1.8", paper: "1A",
      stem: T("A student draws a plan diagram of a transverse section of a dicotyledonous leaf. Which is correct practice?", "生徒が双子葉植物の葉の横断面の平面図を描く。正しいのはどれか。", "一位學生繪畫雙子葉植物葉橫切面的平面圖。以下哪項是正確做法？"),
      options: [
        T("Draw the outline of each tissue region and do not draw individual cells.", "各組織の領域の輪郭を描き、個々の細胞は描かない。", "繪畫每個組織區域的輪廓，不畫個別細胞。"),
        T("Draw every cell in detail, with its chloroplasts.", "すべての細胞を、葉緑体も含めて詳しく描く。", "詳細繪畫每個細胞及其葉綠體。"),
        T("Shade each tissue with a different colour.", "各組織を異なる色で塗り分ける。", "把每種組織塗上不同顏色。"),
        T("Draw the xylem on the lower side and the phloem on the upper side of the vein.", "葉脈の下側に木部、上側に師部を描く。", "把木質部畫在葉脈下側，韌皮部畫在上側。")
      ],
      answer: 0,
      explanation: T("A plan diagram shows tissue regions only. B is for a high-power detailed drawing. Shading is not used in biological drawings. In a leaf vein the xylem is on the upper side and phloem on the lower, so D is reversed.", "平面図は組織の領域だけを示します。Bは高倍率の詳細な図です。生物の図では色塗りは使いません。葉脈では木部が上側、師部が下側なので、Dは逆です。", "平面圖只顯示組織區域。B是高倍的詳細繪圖。生物繪圖不用塗色。葉脈中木質部在上側，韌皮部在下側，所以D顛倒了。") },
    { id: "b3-1-q12", type: "short", ahl: false, difficulty: 2, ref: "B3.1.9", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain why transpiration is a consequence of gas exchange in a leaf, and why an increase in wind speed increases the rate of transpiration.", "蒸散がなぜ葉のガス交換の結果なのか、そして風速が上がると蒸散の速さがなぜ上がるのか説明しなさい。", "解釋為何蒸騰作用是葉進行氣體交換的後果，以及為何風速增加會提高蒸騰速率。"),
      markscheme: [
        T("Stomata open to let CO₂ in", "CO₂を取り込むために気孔が開く", "氣孔張開讓CO₂進入"),
        T("Water vapour (in the moist air spaces) diffuses out through the open stomata down a concentration gradient", "（湿った空気の隙間にある）水蒸気が、開いた気孔から濃度勾配に沿って拡散して出る", "（濕潤氣室中的）水蒸氣沿濃度梯度經張開的氣孔擴散出去"),
        T("Wind removes humid air near the leaf, keeping the water vapour concentration gradient steeper / increasing diffusion", "風が葉の近くの湿った空気を吹き払い、水蒸気の濃度勾配を急に保つ／拡散を増やす", "風吹走葉附近的潮濕空氣，使水蒸氣濃度梯度保持較陡／增加擴散")
      ],
      modelAnswer: T("Stomata must be open for CO₂ to enter, and water vapour from the moist air spaces diffuses out through them down a concentration gradient. Wind blows away the humid air at the leaf surface, so the gradient is steeper and more water vapour diffuses out.", "CO₂が入るには気孔が開かなければならず、湿った空気の隙間の水蒸気が濃度勾配に沿って気孔から拡散して出る。風は葉の表面の湿った空気を吹き払うので、勾配が急になり、より多くの水蒸気が拡散して出る。", "CO₂進入需要氣孔張開，濕潤氣室中的水蒸氣沿濃度梯度經氣孔擴散出去。風吹走葉表面的潮濕空氣，所以梯度較陡，更多水蒸氣擴散出去。") },
    { id: "b3-1-q13", type: "short", ahl: false, difficulty: 2, ref: "B3.1.10", paper: "1B", commandTerm: "Calculate", marks: 4,
      stem: T("A student made a leaf cast of the lower epidermis of a leaf and counted stomata in five fields of view. Each field of view had a diameter of 0.50 mm (illustrative data). (a) Calculate the mean number of stomata per field. (b) Calculate the area of one field of view, using area = πr². (c) Calculate the stomatal density in stomata per mm². (d) Explain why the student counted five fields rather than one.", "生徒が葉の下側表皮の葉の型取りを作り、5つの視野で気孔を数えた。各視野の直径は0.50 mmであった（イラスト用データ）。(a) 視野あたりの気孔数の平均を計算しなさい。(b) πr²を使って、1つの視野の面積を計算しなさい。(c) 気孔密度を気孔数/mm²で計算しなさい。(d) 生徒が1つではなく5つの視野を数えた理由を説明しなさい。", "一位學生製作葉下表皮的葉印模，並數算五個視野中的氣孔。每個視野的直徑為0.50 mm（示範數據）。(a) 計算每視野氣孔數目的平均值。(b) 利用面積 = πr² 計算一個視野的面積。(c) 計算氣孔密度（每mm²氣孔數）。(d) 解釋為何學生數算五個視野而非一個。"),
      data: T(
        `<table><tr><th>Field of view</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><th>Number of stomata</th><td>22</td><td>25</td><td>19</td><td>24</td><td>20</td></tr></table>`,
        `<table><tr><th>視野</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><th>気孔の数</th><td>22</td><td>25</td><td>19</td><td>24</td><td>20</td></tr></table>`,
        `<table><tr><th>視野</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><th>氣孔數目</th><td>22</td><td>25</td><td>19</td><td>24</td><td>20</td></tr></table>`),
      markscheme: [
        T("(a) Mean = (22 + 25 + 19 + 24 + 20) ÷ 5 = 22", "(a) 平均 = (22 + 25 + 19 + 24 + 20) ÷ 5 = 22", "(a) 平均值 = (22 + 25 + 19 + 24 + 20) ÷ 5 = 22"),
        T("(b) Area = π × 0.25² = 0.196 mm² (0.20)", "(b) 面積 = π × 0.25² = 0.196 mm²（0.20）", "(b) 面積 = π × 0.25² = 0.196 mm²（0.20）"),
        T("(c) Density = 22 ÷ 0.196 = 112 (approx.) stomata per mm² (accept 110)", "(c) 密度 = 22 ÷ 0.196 = 約112個/mm²（110も可）", "(c) 密度 = 22 ÷ 0.196 = 約112個／mm²（接受110）"),
        T("(d) Counts vary between fields (biological variability); repeating and taking a mean makes the result more reliable / representative", "(d) 視野ごとに数が違う（生物のばらつき）。繰り返して平均を取ると結果の信頼性が高まる／代表的になる", "(d) 不同視野的計數不同（生物變異性）；重複並取平均值使結果更可靠／更具代表性")
      ],
      modelAnswer: T("(a) 22. (b) π × 0.25² = 0.196 mm². (c) 22 ÷ 0.196 ≈ 112 stomata per mm². (d) The number of stomata varies from field to field, so repeated counts and a mean give a more reliable value.", "(a) 22。(b) π × 0.25² = 0.196 mm²。(c) 22 ÷ 0.196 ≈ 112個/mm²。(d) 気孔の数は視野ごとに異なるので、繰り返し数えて平均を取るとより信頼できる値になる。", "(a) 22。(b) π × 0.25² = 0.196 mm²。(c) 22 ÷ 0.196 ≈ 112個／mm²。(d) 氣孔數目因視野而異，所以重複計數並取平均值可得出較可靠的數值。") },
    { id: "b3-1-q14", type: "short", ahl: false, difficulty: 3, ref: "B3.1.9", paper: "2", commandTerm: "Suggest", marks: 3,
      stem: T("Plants lose a lot of water through open stomata. Suggest why plants do not keep their stomata closed all the time, and how they reduce water loss in other ways.", "植物は開いた気孔から多くの水を失う。植物が気孔を常に閉じておかない理由と、ほかの方法で水分の損失を減らす方法を考えて述べなさい。", "植物經張開的氣孔散失大量水分。試提出植物為何不一直關閉氣孔，以及它們還以甚麼方法減少水分散失。"),
      markscheme: [
        T("CO₂ enters through open stomata and is needed for photosynthesis", "CO₂は開いた気孔から入り、光合成に必要である", "CO₂經張開的氣孔進入，是光合作用所需"),
        T("O₂ for respiration also enters / gas exchange needs open stomata (accept)", "呼吸のためのO₂も入る／ガス交換には開いた気孔が必要（可）", "呼吸所需的O₂也經此進入／氣體交換需要氣孔張開（接受）"),
        T("Waxy cuticle reduces water loss; stomata close when water is short/in the dark (accept)", "ろうを含むクチクラが水分の損失を減らす。水が不足するとき・暗いときは気孔が閉じる（可）", "蠟質角質層減少水分散失；缺水／黑暗時氣孔關閉（接受）")
      ],
      modelAnswer: T("Closed stomata would stop CO₂ entering for photosynthesis, so the plant could not make food. The plant reduces water loss with a waxy cuticle, and by closing stomata when water is short or when it is dark.", "気孔が閉じていると光合成のためのCO₂が入らず、植物は栄養をつくれない。植物はろうを含むクチクラと、水が不足するときや暗いときに気孔を閉じることで、水分の損失を減らす。", "氣孔關閉會使光合作用所需的CO₂無法進入，植物就不能製造養分。植物以蠟質角質層，以及在缺水或黑暗時關閉氣孔來減少水分散失。") },
    { id: "b3-1-q15", type: "mcq", ahl: true, difficulty: 2, ref: "B3.1.11", paper: "1A",
      stem: T("Foetal haemoglobin has a higher affinity for oxygen than adult haemoglobin. What is the advantage of this?", "胎児型ヘモグロビンは成人型ヘモグロビンより酸素への親和性が高い。これにはどのような利点があるか。", "胎兒血紅蛋白對氧氣的親和力比成人血紅蛋白高。這有甚麼好處？"),
      options: [
        T("The foetus can take up oxygen from the mother's blood at the placenta.", "胎児は胎盤で母親の血液から酸素を受け取れる。", "胎兒可在胎盤從母親血液取得氧氣。"),
        T("The foetus can release more oxygen to the mother.", "胎児は母親により多くの酸素を放出できる。", "胎兒可向母親釋出更多氧氣。"),
        T("The foetus does not need haemoglobin.", "胎児はヘモグロビンを必要としない。", "胎兒不需要血紅蛋白。"),
        T("Foetal haemoglobin does not bind carbon dioxide.", "胎児型ヘモグロビンは二酸化炭素を結合しない。", "胎兒血紅蛋白不結合二氧化碳。")
      ],
      answer: 0,
      explanation: T("Haemoglobin with higher affinity picks up oxygen at the low oxygen concentration at the placenta, taking it from the mother's haemoglobin. B has it the wrong way round. C and D are not true.", "親和性の高いヘモグロビンは、胎盤の低い酸素濃度でも酸素を受け取り、母親のヘモグロビンから奪えます。Bは逆です。CとDは事実ではありません。", "親和力較高的血紅蛋白在胎盤的低氧濃度下仍能取得氧氣，從母親的血紅蛋白手中取得。B顛倒了。C和D不正確。") },
    { id: "b3-1-q16", type: "mcq", ahl: true, difficulty: 2, ref: "B3.1.12", paper: "1A",
      stem: T("A person starts to run. The carbon dioxide concentration in the muscles rises. What happens to the oxygen dissociation curve of haemoglobin in the muscles, and what is the effect?", "ある人が走り始める。筋肉の二酸化炭素濃度が上がる。筋肉でのヘモグロビンの酸素解離曲線はどうなり、どのような効果があるか。", "一個人開始跑步，肌肉中二氧化碳濃度上升。肌肉中血紅蛋白的氧解離曲線有何變化？有何效果？"),
      options: [
        T("It shifts to the right and more oxygen is released.", "右へずれ、より多くの酸素が放出される。", "向右移，釋出更多氧氣。"),
        T("It shifts to the left and more oxygen is released.", "左へずれ、より多くの酸素が放出される。", "向左移，釋出更多氧氣。"),
        T("It shifts to the right and less oxygen is released.", "右へずれ、酸素の放出が減る。", "向右移，釋出較少氧氣。"),
        T("It does not change.", "変化しない。", "沒有改變。")
      ],
      answer: 0,
      explanation: T("More CO₂ lowers haemoglobin's affinity for oxygen (the Bohr shift), so the curve moves right and, at the same oxygen concentration, more oxygen dissociates. This supplies the active muscle. Left-shift (B) is the foetal direction and means a higher affinity.", "CO₂が増えるとヘモグロビンの酸素への親和性が下がり（ボーア効果）、曲線は右へずれ、同じ酸素濃度でより多くの酸素が解離します。これが活動している筋肉に酸素を供給します。左へのずれ（B）は胎児型の方向で、親和性が高いことを意味します。", "較多CO₂會降低血紅蛋白對氧氣的親和力（玻爾效應），所以曲線向右移，在相同氧濃度下有更多氧氣解離，供應活躍的肌肉。向左移（B）是胎兒血紅蛋白的方向，表示親和力較高。") },
    { id: "b3-1-q17", type: "short", ahl: true, difficulty: 2, ref: "B3.1.11", paper: "2", commandTerm: "Outline", marks: 3,
      stem: T("Outline cooperative binding of oxygen to haemoglobin and the allosteric binding of carbon dioxide.", "ヘモグロビンへの酸素の協同的結合と、二酸化炭素のアロステリック結合を概説しなさい。", "概述氧氣與血紅蛋白的協同結合，以及二氧化碳的別構結合。"),
      markscheme: [
        T("Haemoglobin has four haem groups, each binding one O₂", "ヘモグロビンは4つのヘム基を持ち、それぞれがO₂を1つ結合する", "血紅蛋白有四個血紅素基團，各結合一個O₂"),
        T("Binding of the first O₂ changes the shape so the next O₂ binds more easily (cooperative binding)", "最初のO₂の結合で形が変わり、次のO₂が結合しやすくなる（協同的結合）", "第一個O₂結合後形狀改變，使下一個O₂更容易結合（協同結合）"),
        T("CO₂ binds at a site other than the haem group (allosteric site), changing the shape and reducing the affinity for O₂, so O₂ is released", "CO₂はヘム基とは別の部位（アロステリック部位）に結合し、形を変えてO₂への親和性を下げるので、O₂が放出される", "CO₂在血紅素基團以外的位點（別構位點）結合，改變形狀並降低對O₂的親和力，使O₂釋出")
      ],
      modelAnswer: T("Haemoglobin has four haem groups that each bind one O₂. When one O₂ binds, the shape changes so the next binds more easily: this is cooperative binding. CO₂ binds at a different (allosteric) site, which changes the shape and lowers the affinity for O₂, so O₂ is released.", "ヘモグロビンは、それぞれO₂を1つ結合する4つのヘム基を持つ。O₂が1つ結合すると形が変わり、次が結合しやすくなる。これが協同的結合である。CO₂は別の（アロステリック）部位に結合し、形を変えてO₂への親和性を下げるので、O₂が放出される。", "血紅蛋白有四個血紅素基團，各結合一個O₂。當一個O₂結合時，形狀改變，下一個更容易結合：這是協同結合。CO₂在另一個（別構）位點結合，改變形狀並降低對O₂的親和力，使O₂釋出。") },
    { id: "b3-1-q18", type: "short", ahl: true, difficulty: 3, ref: "B3.1.13", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain the S-shape of the oxygen dissociation curve of adult haemoglobin.", "成人型ヘモグロビンの酸素解離曲線がS字形になる理由を説明しなさい。", "解釋成人血紅蛋白氧解離曲線的S形。"),
      markscheme: [
        T("At low oxygen concentration the first O₂ binds slowly (low affinity), so the curve rises slowly", "酸素濃度が低いと最初のO₂はゆっくり結合する（親和性が低い）ので、曲線の立ち上がりはゆるやか", "低氧濃度時第一個O₂結合緩慢（親和力低），所以曲線上升緩慢"),
        T("Binding of the first O₂ changes the shape and increases the affinity, so further O₂ binds more easily (cooperative binding): the curve becomes steep", "最初のO₂の結合で形が変わり親和性が上がるので、続くO₂は結合しやすくなる（協同的結合）。曲線は急になる", "第一個O₂結合改變形狀並提高親和力，其後的O₂更容易結合（協同結合）：曲線變陡"),
        T("At high oxygen concentration most sites are occupied so it is harder to find a free site; the curve levels off", "酸素濃度が高いとほとんどの部位が埋まり、空きを見つけにくいので、曲線は平らになる", "高氧濃度時大部分位點已被佔據，較難找到空位，曲線趨平")
      ],
      modelAnswer: T("At low oxygen concentration the first O₂ binds slowly, so the curve is shallow. Once one O₂ has bound, the haemoglobin changes shape and binding of further O₂ is easier (cooperative binding), so the curve is steep. At high concentrations nearly all sites are full, so the curve flattens.", "酸素濃度が低いと最初のO₂はゆっくり結合するので、曲線はなだらか。1つのO₂が結合するとヘモグロビンの形が変わり、続くO₂が結合しやすくなる（協同的結合）ので、曲線は急になる。濃度が高いとほとんどの部位が埋まるので、曲線は平らになる。", "低氧濃度時第一個O₂結合緩慢，所以曲線平緩。一個O₂結合後，血紅蛋白改變形狀，其後O₂更容易結合（協同結合），所以曲線變陡。高濃度時差不多所有位點都已佔滿，所以曲線趨平。") },
    { id: "b3-1-q19", type: "short", ahl: true, difficulty: 3, ref: "B3.1.13", paper: "1B", commandTerm: "Deduce", marks: 5,
      stem: T("The table shows the percentage saturation of haemoglobin at different oxygen partial pressures (illustrative data) for adult haemoglobin, foetal haemoglobin, and adult haemoglobin in the presence of a higher carbon dioxide concentration. (a) Deduce which column is foetal haemoglobin. (b) At 4 kPa, state the difference in saturation between adult and foetal haemoglobin. (c) Suggest how the data for the 'higher CO₂' column benefits an exercising muscle where oxygen is at 3 kPa. (d) State the name of this effect.", "表は、成人型ヘモグロビン、胎児型ヘモグロビン、二酸化炭素濃度が高いときの成人型ヘモグロビンについて、酸素分圧ごとのヘモグロビン飽和度（%）を示す（イラスト用データ）。(a) 胎児型ヘモグロビンはどの列か推論しなさい。(b) 4 kPaで、成人型と胎児型の飽和度の差を述べなさい。(c) 「CO₂が高い」列のデータが、酸素が3 kPaの運動中の筋肉にとってどう有利か、考えて述べなさい。(d) この効果の名称を述べなさい。", "下表顯示在不同氧分壓下，成人血紅蛋白、胎兒血紅蛋白，以及二氧化碳濃度較高時成人血紅蛋白的飽和度百分率（示範數據）。(a) 推斷哪一欄是胎兒血紅蛋白。(b) 在4 kPa時，說明成人與胎兒血紅蛋白飽和度的差別。(c) 提出「較高CO₂」一欄的數據如何有利於氧分壓為3 kPa的運動中肌肉。(d) 說出這效應的名稱。"),
      data: T(
        `<table><tr><th>Oxygen partial pressure (kPa)</th><th>Adult (% saturation)</th><th>Haemoglobin X (% saturation)</th><th>Adult, higher CO₂ (% saturation)</th></tr><tr><td>2</td><td>18</td><td>35</td><td>9</td></tr><tr><td>3</td><td>40</td><td>62</td><td>23</td></tr><tr><td>4</td><td>59</td><td>78</td><td>39</td></tr><tr><td>5</td><td>72</td><td>87</td><td>54</td></tr><tr><td>6</td><td>81</td><td>91</td><td>66</td></tr><tr><td>8</td><td>90</td><td>96</td><td>81</td></tr><tr><td>10</td><td>94</td><td>98</td><td>88</td></tr><tr><td>13</td><td>97</td><td>99</td><td>94</td></tr></table>`,
        `<table><tr><th>酸素分圧 (kPa)</th><th>成人型（飽和度 %）</th><th>ヘモグロビンX（飽和度 %）</th><th>成人型、CO₂が高い（飽和度 %）</th></tr><tr><td>2</td><td>18</td><td>35</td><td>9</td></tr><tr><td>3</td><td>40</td><td>62</td><td>23</td></tr><tr><td>4</td><td>59</td><td>78</td><td>39</td></tr><tr><td>5</td><td>72</td><td>87</td><td>54</td></tr><tr><td>6</td><td>81</td><td>91</td><td>66</td></tr><tr><td>8</td><td>90</td><td>96</td><td>81</td></tr><tr><td>10</td><td>94</td><td>98</td><td>88</td></tr><tr><td>13</td><td>97</td><td>99</td><td>94</td></tr></table>`,
        `<table><tr><th>氧分壓 (kPa)</th><th>成人（飽和度 %）</th><th>血紅蛋白X（飽和度 %）</th><th>成人，較高CO₂（飽和度 %）</th></tr><tr><td>2</td><td>18</td><td>35</td><td>9</td></tr><tr><td>3</td><td>40</td><td>62</td><td>23</td></tr><tr><td>4</td><td>59</td><td>78</td><td>39</td></tr><tr><td>5</td><td>72</td><td>87</td><td>54</td></tr><tr><td>6</td><td>81</td><td>91</td><td>66</td></tr><tr><td>8</td><td>90</td><td>96</td><td>81</td></tr><tr><td>10</td><td>94</td><td>98</td><td>88</td></tr><tr><td>13</td><td>97</td><td>99</td><td>94</td></tr></table>`),
      markscheme: [
        T("(a) Haemoglobin X is the foetal haemoglobin because its saturation is higher than adult at every oxygen concentration (higher affinity)", "(a) ヘモグロビンXが胎児型。どの酸素濃度でも成人型より飽和度が高い（親和性が高い）から", "(a) 血紅蛋白X是胎兒血紅蛋白，因為在每個氧濃度下其飽和度都高於成人（親和力較高）"),
        T("(b) 78 − 59 = 19 percentage points (foetal higher)", "(b) 78 − 59 = 19ポイント（胎児型が高い）", "(b) 78 − 59 = 19個百分點（胎兒較高）"),
        T("(c) At 3 kPa, saturation falls from 40% to 23% with higher CO₂, so 17 percentage points more oxygen is released", "(c) 3 kPaで、CO₂が高いと飽和度は40%から23%に下がり、17ポイント分多く酸素が放出される", "(c) 在3 kPa，較高CO₂令飽和度由40%降至23%，多釋出17個百分點的氧氣"),
        T("(c) More oxygen is delivered to the respiring muscle where it is needed", "(c) 必要な呼吸中の筋肉に、より多くの酸素が届く", "(c) 有更多氧氣送到需要的呼吸中肌肉"),
        T("(d) Bohr shift", "(d) ボーア効果", "(d) 玻爾效應")
      ],
      modelAnswer: T("(a) X is foetal haemoglobin because it has a higher saturation than adult at all oxygen pressures, so a higher affinity. (b) 78 − 59 = 19 percentage points. (c) At 3 kPa, higher CO₂ lowers saturation from 40% to 23%, so 17% more of the haemoglobin releases its oxygen to the muscle. (d) The Bohr shift.", "(a) Xは、すべての酸素分圧で成人型より飽和度が高く、親和性が高いので胎児型。(b) 78 − 59 = 19ポイント。(c) 3 kPaで、CO₂が高いと飽和度が40%から23%に下がり、17%多くのヘモグロビンが酸素を筋肉に放出する。(d) ボーア効果。", "(a) X是胎兒血紅蛋白，因為在所有氧分壓下其飽和度都高於成人，即親和力較高。(b) 78 − 59 = 19個百分點。(c) 在3 kPa，較高CO₂把飽和度由40%降至23%，所以多17%的血紅蛋白向肌肉釋出氧氣。(d) 玻爾效應。") }
  ]
});
})();
