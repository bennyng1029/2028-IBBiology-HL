(function () {
const T = (en, ja, zh) => ({ en, ja, zh });

IB.registerTopic({
  id: "B3.2",
  slug: "b3-2",
  theme: "B",
  level: 3,
  ahlOnly: false,
  title: T("Transport", "輸送", "運輸"),
  guidingQuestions: [
    T("What adaptations facilitate transport of fluids in animals and plants?", "動物と植物で、流体の輸送を助けるのはどのような適応か。", "有甚麼適應特徵有助動物和植物運輸流體？"),
    T("What are the differences and similarities between transport in animals and plants?", "動物と植物の輸送には、どのような相違点と共通点があるか。", "動物與植物的運輸有何異同？")
  ],
  summary: T(
    "Large organisms need transport systems because diffusion alone is too slow over long distances. In mammals, the heart pumps blood through arteries, capillaries and veins. Capillaries are where materials are exchanged. In plants, xylem carries water up from the roots, pulled by transpiration, and phloem carries sugars to where they are needed. At HL you also study tissue fluid and lymph, double circulation, the heart and the cardiac cycle, root pressure and phloem loading.",
    "大きな生物は、長い距離では拡散だけでは遅すぎるため、輸送系を必要とします。哺乳類では、心臓が動脈、毛細血管、静脈を通して血液を送ります。物質の交換が行われるのは毛細血管です。植物では、木部が根から水を運び上げ（蒸散に引かれて）、師部が糖を必要な場所へ運びます。HLでは、組織液とリンパ、二重循環、心臓と心周期、根圧、師部への積み込みも学びます。",
    "大型生物需要運輸系統，因為單靠擴散在長距離上太慢。在哺乳動物中，心臟把血液泵過動脈、微血管和靜脈，物質交換在微血管進行。在植物中，木質部把水從根向上運送（由蒸騰作用拉動），韌皮部把糖運到需要的地方。在HL，你還要學習組織液與淋巴、雙循環、心臟與心動週期、根壓和韌皮部裝載。"),
  sections: [
    {
      ref: "B3.2.1",
      ahl: false,
      heading: T("Capillaries: adaptations for exchange", "毛細血管：交換のための適応", "微血管：適應物質交換的特徵"),
      body: T(
        `<p><strong>Capillaries</strong> are the smallest blood vessels. They connect arterioles (small arteries) to venules (small veins). Exchange of materials between the blood and the tissues (the internal environment), or between blood and the air in the lungs (the external environment), happens across their walls. Adaptations:</p>
<ul>
<li><strong>Large surface area</strong>, because capillaries <strong>branch</strong> into huge networks and have <strong>narrow diameters</strong> (about as wide as one red blood cell). Many narrow tubes have a much larger total surface area than a few wide tubes with the same volume.</li>
<li><strong>Thin walls.</strong> The wall is only one cell thick (a single layer of flat endothelial cells). This gives a very short diffusion distance. Because there are so many capillaries, their total cross-sectional area is very large, so blood flows slowly through them. Their narrowness also brings red blood cells close to the wall.</li>
<li><strong>Fenestrations</strong> in some capillaries. These are small pores (gaps) through the wall cells. They let fluid and dissolved substances pass very quickly. Fenestrated capillaries are found where exchange needs to be particularly rapid, for example in the kidney and in the intestine.</li>
</ul>`,
        `<p><strong>毛細血管 (capillary)</strong> は最も細い血管です。細動脈 (arteriole) と細静脈 (venule) をつなぎます。血液と組織（体内環境）の間、または血液と肺の空気（外部環境）の間の物質交換は、その壁を通して行われます。適応は次のとおりです。</p>
<ul>
<li><strong>広い表面積。</strong>毛細血管は<strong>枝分かれ</strong>して巨大な網目をつくり、<strong>直径が細い</strong>（赤血球1個分ほど）ためです。同じ体積なら、細い管が多数あるほうが、太い管が少数ある場合より総表面積がはるかに大きくなります。</li>
<li><strong>薄い壁 (thin walls)。</strong>壁は細胞1個分の厚さ（扁平な内皮細胞の1層）しかありません。そのため拡散距離がごく短くなります。毛細血管は数が非常に多く、断面積の合計がとても大きいので、血液はその中をゆっくり流れます。また、細いので赤血球が壁の近くを通ります。</li>
<li>一部の毛細血管の<strong>窓 (fenestrations)</strong>。壁の細胞を貫く小さな孔（すき間）で、液体や溶けた物質が非常に速く通れます。窓のある毛細血管は、交換がとくに速く必要な場所、たとえば腎臓や小腸にあります。</li>
</ul>`,
        `<p><strong>微血管 (capillary)</strong> 是最細的血管，連接小動脈 (arteriole) 和小靜脈 (venule)。血液與組織（內環境）之間，或血液與肺中空氣（外環境）之間的物質交換，都在其壁上進行。適應特徵：</p>
<ul>
<li><strong>大表面積</strong>，因為微血管<strong>分支</strong>成龐大的網絡，並且<strong>直徑狹窄</strong>（約與一個紅血球一樣闊）。同樣體積下，許多幼管的總表面積遠大於少數粗管。</li>
<li><strong>薄壁 (thin walls)。</strong>管壁只有一個細胞厚（一層扁平的內皮細胞），擴散距離極短。微血管數量極多，總截面積非常大，所以血液在其中流得很慢；而微血管狹窄，亦使紅血球靠近管壁。</li>
<li>部分微血管有<strong>窗孔 (fenestrations)</strong>。這是穿過壁細胞的小孔（空隙），讓液體和溶解物質極快通過。有窗孔的微血管見於需要特別迅速交換的地方，例如腎臟和小腸。</li>
</ul>`),
      deeper: T("<p><strong>Why slow flow matters.</strong> The same volume of blood per minute passes through the aorta and through all the capillaries together. Speed = volume per minute ÷ total cross-sectional area. Each capillary is tiny, but there is an enormous number of them, so their <em>combined</em> cross-section is far larger than the aorta's. Blood therefore moves much more slowly in the capillaries, which gives time for diffusion.</p>\n<table><tr><th>Adaptation</th><th>Effect on exchange</th></tr>\n<tr><td>Narrow and highly branched</td><td>Large surface area; every cell is close to a capillary; red blood cells are held close to the wall</td></tr>\n<tr><td>Wall one cell thick</td><td>Short diffusion distance, so faster diffusion</td></tr>\n<tr><td>Fenestrations (pores)</td><td>Fluid and small dissolved substances cross very quickly (kidney, intestine)</td></tr>\n<tr><td>Slow flow (a result of the large total area)</td><td>More time for exchange</td></tr></table>\n<div class=\"note\"><strong>Mark-scheme language:</strong> always link feature to effect, such as \"thin wall → short diffusion distance → faster diffusion\". A bare list of features rarely earns the mark.</div>", "<p><strong>血流が遅いことの意味。</strong>毎分に大動脈を通る血液量と、すべての毛細血管を合わせて通る血液量は同じです。速さ = 毎分の血液量 ÷ 全体の断面積。1本の毛細血管は非常に細いのですが、数が膨大なので、<em>合計</em>の断面積は大動脈よりはるかに大きくなります。そのため毛細血管内の血流はずっと遅くなり、拡散に十分な時間が確保されます。</p>\n<table><tr><th>適応</th><th>物質交換への効果</th></tr>\n<tr><td>細くて枝分かれが多い</td><td>表面積が大きい。どの細胞も毛細血管の近くにある。赤血球が壁に近づく</td></tr>\n<tr><td>壁が細胞1層の厚さ</td><td>拡散距離が短く、拡散が速い</td></tr>\n<tr><td>窓 (fenestrations)</td><td>液体や小さな溶質が非常に速く通過する（腎臓、小腸）</td></tr>\n<tr><td>血流が遅い（全体の断面積が大きい結果）</td><td>交換の時間が長くなる</td></tr></table>\n<div class=\"note\"><strong>採点基準の書き方:</strong>特徴は必ず効果と結びつけます。例: 「壁が薄い → 拡散距離が短い → 拡散が速い」。特徴を並べただけでは点が取れないことが多いです。</div>", "<p><strong>血流緩慢的意義。</strong>每分鐘流經主動脈的血量，與流經所有微血管的血量相同。流速 = 每分鐘血量 ÷ 總橫切面面積。每條微血管都很細，但數量極多，所以它們<em>合計</em>的橫切面面積遠大於主動脈。因此血液在微血管中流動得慢得多，擴散便有足夠時間進行。</p>\n<table><tr><th>適應特徵</th><th>對物質交換的效果</th></tr>\n<tr><td>狹窄而多分支</td><td>表面積大；每個細胞都靠近微血管；紅血球貼近管壁</td></tr>\n<tr><td>管壁只有一層細胞厚</td><td>擴散距離短，擴散更快</td></tr>\n<tr><td>窗孔 (fenestrations)</td><td>液體和細小溶質能極快通過（腎、腸）</td></tr>\n<tr><td>血流慢（總橫切面面積大的結果）</td><td>有更多時間進行交換</td></tr></table>\n<div class=\"note\"><strong>評分用語：</strong>每個特徵都要連繫其效果，例如「管壁薄 → 擴散距離短 → 擴散更快」。只列出特徵通常得不到分。</div>")
    },
    {
      ref: "B3.2.2–3",
      ahl: false,
      heading: T("Arteries and veins: structure and the adaptations of arteries", "動脈と静脈：構造と動脈の適応", "動脈與靜脈：結構及動脈的適應特徵"),
      body: T(
        `<p><strong>Arteries</strong> carry blood <em>away</em> from the heart. <strong>Veins</strong> carry blood <em>back</em> to the heart. Both have a wall made of layers: an inner lining of very thin cells (endothelium), a middle layer of <strong>muscle and elastic tissue</strong>, and an outer layer of tough fibres.</p>
<table>
<tr><th>Feature (in cross-section)</th><th>Artery</th><th>Vein</th></tr>
<tr><td>Wall thickness compared with lumen width</td><td><strong>Thick</strong> wall, <strong>narrow</strong> lumen</td><td><strong>Thin</strong> wall, <strong>wide</strong> lumen</td></tr>
<tr><td>Muscle and elastic tissue</td><td>Thick layers</td><td>Thin layers</td></tr>
<tr><td>Shape in section</td><td>Round, keeps its shape</td><td>Often flattened or irregular</td></tr>
<tr><td>Valves</td><td>None (except at the heart)</td><td>Present (B3.2.5)</td></tr>
</table>
<p><strong>Application of skills:</strong> in a micrograph, identify an artery or a vein by looking at the thickness of the wall <em>compared with</em> the diameter of the lumen. A thick wall with a small lumen means an artery.</p>
<p><strong>Adaptations of arteries (B3.2.3).</strong> Blood leaves the heart at high pressure in pulses. The wall must stand this pressure and keep it up between heartbeats.</p>
<ul>
<li><strong>Muscle layers</strong> give strength so that the wall does not burst under high pressure.</li>
<li><strong>Elastic tissue.</strong> The elastic fibres stretch when a surge of blood arrives from the heart, then recoil. This recoil helps to push the blood on and <strong>maintains the pressure</strong> and flow between heartbeats.</li>
<li>The wall is thick and the lumen narrow, which helps to maintain high pressure.</li>
</ul>`,
        `<p><strong>動脈 (artery)</strong> は血液を心臓から<em>送り出し</em>、<strong>静脈 (vein)</strong> は血液を心臓へ<em>戻します</em>。どちらも壁は層でできています。内側の非常に薄い細胞の内張り（内皮）、中間の<strong>筋肉と弾性組織</strong>の層、外側の丈夫な繊維の層です。</p>
<table>
<tr><th>特徴（横断面で）</th><th>動脈</th><th>静脈</th></tr>
<tr><td>管腔の幅に対する壁の厚さ</td><td><strong>厚い</strong>壁、<strong>狭い</strong>管腔</td><td><strong>薄い</strong>壁、<strong>広い</strong>管腔</td></tr>
<tr><td>筋肉と弾性組織</td><td>厚い層</td><td>薄い層</td></tr>
<tr><td>断面の形</td><td>丸く、形を保つ</td><td>つぶれたり不規則な形のことが多い</td></tr>
<tr><td>弁</td><td>なし（心臓の出口を除く）</td><td>あり（B3.2.5）</td></tr>
</table>
<p><strong>技能の応用：</strong>顕微鏡写真では、管腔の直径に<em>対する</em>壁の厚さを見て、動脈か静脈かを見分けます。壁が厚く管腔が小さければ動脈です。</p>
<p><strong>動脈の適応 (B3.2.3)。</strong>血液は高い圧力で拍動しながら心臓を出ます。壁はこの圧力に耐え、心拍の合間にも圧力を保たなければなりません。</p>
<ul>
<li><strong>筋肉の層</strong>が強さを与え、高い圧力で壁が破れないようにします。</li>
<li><strong>弾性組織 (elastic tissue)</strong>。心臓から血液が押し寄せると弾性繊維が伸び、その後に縮みます。この縮みが血液を先へ押し、心拍の合間にも<strong>圧力を保ち</strong>、流れを保ちます。</li>
<li>壁が厚く管腔が狭いことも、高い圧力を保つのに役立ちます。</li>
</ul>`,
        `<p><strong>動脈 (artery)</strong> 把血液運<em>離</em>心臟，<strong>靜脈 (vein)</strong> 把血液運<em>回</em>心臟。兩者的管壁都由多層組成：內襯極薄的細胞（內皮）、中層的<strong>肌肉和彈性組織</strong>，以及外層堅韌的纖維。</p>
<table>
<tr><th>特徵（橫切面）</th><th>動脈</th><th>靜脈</th></tr>
<tr><td>管壁厚度相對於管腔闊度</td><td>壁<strong>厚</strong>，管腔<strong>窄</strong></td><td>壁<strong>薄</strong>，管腔<strong>寬</strong></td></tr>
<tr><td>肌肉和彈性組織</td><td>層厚</td><td>層薄</td></tr>
<tr><td>切面形狀</td><td>圓形，保持形狀</td><td>常扁塌或不規則</td></tr>
<tr><td>瓣膜</td><td>沒有（心臟出口處除外）</td><td>有（B3.2.5）</td></tr>
</table>
<p><strong>技能應用：</strong>在顯微照片中，比較管壁厚度與管腔直徑，以辨認動脈或靜脈。壁厚而管腔小的是動脈。</p>
<p><strong>動脈的適應特徵 (B3.2.3)。</strong>血液以高壓、脈動方式離開心臟。管壁必須承受這壓力，並在兩次心跳之間維持壓力。</p>
<ul>
<li><strong>肌肉層</strong>提供強度，使管壁在高壓下不會破裂。</li>
<li><strong>彈性組織 (elastic tissue)</strong>。心臟輸出的血液湧到時，彈性纖維被拉長，然後回縮。這回縮有助推動血液前進，並在兩次心跳之間<strong>維持壓力</strong>和血流。</li>
<li>壁厚、管腔窄，也有助維持高壓。</li>
</ul>`),
      widget: "vessel-compare",
      examTip: T(
        "Compare wall thickness with lumen size, not just 'thick' or 'thin'. A large vein can have a thick wall but its lumen is wide.",
        "「厚い」「薄い」だけでなく、壁の厚さと管腔の大きさを比べて書きます。大きな静脈は壁が厚くても、管腔は広いのです。",
        "要比較管壁厚度與管腔大小，不要只說「厚」或「薄」。大靜脈的壁可以很厚，但管腔仍然寬。"),
      deeper: T("<p><strong>Using the wall : lumen ratio.</strong> Absolute size is misleading, so compare wall thickness with lumen diameter. Worked example from a micrograph (illustrative):</p>\n<table><tr><th>Vessel</th><th>Wall thickness</th><th>Lumen diameter</th><th>Wall ÷ lumen</th><th>Identity</th></tr>\n<tr><td>X</td><td>0.9 mm</td><td>2.0 mm</td><td>0.45</td><td>Artery</td></tr>\n<tr><td>Y</td><td>0.1 mm</td><td>3.0 mm</td><td>0.03</td><td>Vein</td></tr></table>\n<p><strong>How the elastic wall smooths the flow.</strong></p>\n<ol><li>The ventricle contracts and a surge of blood enters the artery.</li><li>The elastic fibres stretch, so the artery widens and absorbs part of the surge.</li><li>The ventricle relaxes. The wall recoils and squeezes the blood onward.</li><li>So blood flows on (and the pressure does not fall to zero) between heartbeats, instead of stopping and starting.</li></ol>\n<div class=\"note\"><strong>Mark-scheme language:</strong> \"thick wall / muscle and elastic tissue → withstand high pressure without bursting\"; \"elastic recoil → maintains pressure and flow between heartbeats\". Do not say that arteries \"pump\" the blood.</div>", "<p><strong>壁と管腔の比を使う。</strong>実際の大きさは当てにならないので、壁の厚さと管腔の直径を比べます。顕微鏡写真での計算例（説明用）:</p>\n<table><tr><th>血管</th><th>壁の厚さ</th><th>管腔の直径</th><th>壁 ÷ 管腔</th><th>判定</th></tr>\n<tr><td>X</td><td>0.9 mm</td><td>2.0 mm</td><td>0.45</td><td>動脈</td></tr>\n<tr><td>Y</td><td>0.1 mm</td><td>3.0 mm</td><td>0.03</td><td>静脈</td></tr></table>\n<p><strong>弾性のある壁が流れをなめらかにするしくみ。</strong></p>\n<ol><li>心室が収縮し、動脈に血液の波が入る。</li><li>弾性繊維が伸び、動脈が広がって波の一部を吸収する。</li><li>心室がゆるむと壁が元に戻り（弾性反跳）、血液を先へ押し出す。</li><li>こうして拍動と拍動の間も血液が流れ続け、圧力もゼロまで下がらず、流れが止まったり動いたりしません。</li></ol>\n<div class=\"note\"><strong>採点基準の書き方:</strong>「壁が厚い／筋肉と弾性組織 → 高い圧力に破れず耐える」「弾性反跳 → 拍動の間も圧力と流れを保つ」。動脈が血液を「ポンプで送る」と書いてはいけません。</div>", "<p><strong>運用管壁與管腔的比例。</strong>實際大小並不可靠，所以要比較管壁厚度和管腔直徑。顯微照片的計算例子（示意）：</p>\n<table><tr><th>血管</th><th>管壁厚度</th><th>管腔直徑</th><th>管壁 ÷ 管腔</th><th>判斷</th></tr>\n<tr><td>X</td><td>0.9 mm</td><td>2.0 mm</td><td>0.45</td><td>動脈</td></tr>\n<tr><td>Y</td><td>0.1 mm</td><td>3.0 mm</td><td>0.03</td><td>靜脈</td></tr></table>\n<p><strong>彈性管壁如何使血流平順。</strong></p>\n<ol><li>心室收縮，一股血液湧入動脈。</li><li>彈性纖維被拉長，動脈擴闊，吸收部分衝擊。</li><li>心室鬆弛時，管壁回彈（彈性回縮），把血液向前擠。</li><li>因此兩次心跳之間血液仍然流動，壓力也不會降至零，血流不會時停時動。</li></ol>\n<div class=\"note\"><strong>評分用語：</strong>「管壁厚／有肌肉和彈性組織 → 承受高壓而不破裂」；「彈性回縮 → 在兩次心跳之間維持壓力和血流」。不要寫動脈「泵送」血液。</div>")
    },
    {
      ref: "B3.2.4",
      ahl: false,
      heading: T("Measuring pulse rate", "脈拍数の測定", "量度脈搏率"),
      body: T(
        `<p>Each time the heart pumps, a surge of blood stretches the artery walls. You can feel this as a <strong>pulse</strong>. The pulse rate equals the heart rate. This is an <strong>application of skills</strong> point.</p>
<p><strong>Traditional method:</strong></p>
<ol>
<li>Sit the person at rest for a few minutes.</li>
<li>Press the <strong>fingertips</strong> (the first two fingers, not the thumb, which has its own pulse) lightly on the <strong>radial pulse</strong> (the inside of the wrist, below the thumb) or on the <strong>carotid pulse</strong> (the side of the neck, beside the windpipe).</li>
<li>Count the beats for 30 seconds and double, or count for 60 seconds. Express as beats per minute.</li>
<li>Repeat and take a mean.</li>
</ol>
<p><strong>Digital methods</strong> include heart-rate monitors, smartwatches, pulse oximeters and phone apps. They use sensors to detect pulses of blood in the skin.</p>
<p><strong>Comparing them:</strong> manual counting is cheap and needs no equipment but may be less accurate (miscounting, short counting time, pressing too hard). Digital devices can record continuously and over long periods and may be more precise, but need equipment that must be correctly fitted and calibrated and can be affected by movement. A good practice is to compare the two methods on the same person.</p>
<div class="note">Safety note: never press hard on the carotid artery or press on both sides of the neck at once.</div>`,
        `<p>心臓が血液を送り出すたびに、血液の波が動脈壁を押し広げます。これを<strong>脈拍 (pulse)</strong> として感じられます。脈拍数は心拍数に等しくなります。これは<strong>技能の応用</strong>の項目です。</p>
<p><strong>従来の方法：</strong></p>
<ol>
<li>被験者を数分間安静に座らせる。</li>
<li>（親指ではなく、）示指と中指の<strong>指先</strong>で、<strong>橈骨動脈の脈 (radial pulse)</strong>（手首の内側、親指の下）または<strong>頸動脈の脈 (carotid pulse)</strong>（首の横、気管のそば）を軽く押さえる。親指には自分の脈があるためです。</li>
<li>30秒間数えて2倍する、または60秒間数える。1分あたりの拍数で表す。</li>
<li>繰り返して平均を取る。</li>
</ol>
<p><strong>デジタルの方法</strong>には、心拍計、スマートウォッチ、パルスオキシメーター、スマートフォンのアプリなどがあります。センサーで皮膚の血液の拍動を検出します。</p>
<p><strong>比較：</strong>手で数える方法は安価で機器が要らないが、（数え間違い、短い計測時間、強く押しすぎなどで）精度が低いことがあります。デジタル機器は連続的に長時間記録でき、より精密なこともありますが、正しく装着し較正しなければならず、動きの影響を受けます。同じ人で2つの方法を比べるのがよい練習です。</p>
<div class="note">安全上の注意：頸動脈を強く押さない。首の両側を同時に押さない。</div>`,
        `<p>每次心臟泵血，湧出的血液會撐開動脈壁，你可以把這感覺為<strong>脈搏 (pulse)</strong>。脈搏率等於心率。這是<strong>技能應用</strong>的項目。</p>
<p><strong>傳統方法：</strong></p>
<ol>
<li>讓受試者靜坐數分鐘。</li>
<li>用<strong>指尖</strong>（食指和中指，不用拇指，因拇指本身有脈搏）輕按<strong>橈動脈脈搏 (radial pulse)</strong>（手腕內側、拇指下方）或<strong>頸動脈脈搏 (carotid pulse)</strong>（頸側、氣管旁）。</li>
<li>數30秒再乘以2，或數60秒。以每分鐘次數表示。</li>
<li>重複並取平均值。</li>
</ol>
<p><strong>數碼方法</strong>包括心率監測器、智能手錶、脈搏血氧計和手機應用程式，它們用感應器偵測皮膚中血液的脈動。</p>
<p><strong>比較：</strong>手動計數便宜、不需設備，但可能較不準確（數錯、計數時間短、按得太用力）。數碼裝置可持續長時間記錄，可能更精確，但需要正確佩戴和校準的設備，並可能受活動影響。良好做法是在同一人身上比較兩種方法。</p>
<div class="note">安全提示：切勿用力按頸動脈，也不要同時按頸部兩側。</div>`),
      deeper: T("<p><strong>Worked example.</strong> A student counts 38 beats in 30 s, then 36 and 37 in two repeats. Mean = (38 + 36 + 37) ÷ 3 = 37 beats per 30 s, so the heart rate is 37 × 2 = <strong>74 beats per minute</strong>.</p>\n<p><strong>Uncertainty.</strong> Miscounting by one beat in a 30 s count is ±1 in 37, about ±2.7 %, and doubling turns this into ±2 beats per minute. Counting for 60 s (or taking several repeats) reduces the relative effect of a one-beat error.</p>\n<table><tr><th></th><th>Manual counting</th><th>Digital device</th></tr>\n<tr><td>Strengths</td><td>Cheap; no equipment; quick</td><td>Continuous, long recordings; no counting error; can store data</td></tr>\n<tr><td>Weaknesses</td><td>Miscounting; short counting time; pressing too hard or in the wrong place</td><td>Needs correct fitting and calibration; movement can give false readings</td></tr></table>\n<p><strong>Controls for a fair comparison:</strong> same resting time, same posture, same time of day, no recent exercise, caffeine or stress, and the same person measured by both methods at the same moment.</p>", "<p><strong>計算例。</strong>ある生徒が30秒間に38拍を数え、あと2回の繰り返しで36拍と37拍でした。平均 = (38 + 36 + 37) ÷ 3 = 30秒で37拍なので、心拍数は 37 × 2 = <strong>毎分74拍</strong>です。</p>\n<p><strong>不確かさ。</strong>30秒の測定で1拍数え間違えると37に対して±1で、約±2.7 %です。2倍して毎分に直すと±2拍/分になります。60秒数える（または何回か繰り返す）と、1拍の誤差の相対的な影響が小さくなります。</p>\n<table><tr><th></th><th>手で数える方法</th><th>デジタル機器</th></tr>\n<tr><td>長所</td><td>安価。器具不要。すぐできる</td><td>長時間の連続記録ができる。数え間違いがない。データを保存できる</td></tr>\n<tr><td>短所</td><td>数え間違い。測定時間が短い。強く押す、場所が違う</td><td>正しい装着と較正 (calibration) が必要。動くと誤った値が出る</td></tr></table>\n<p><strong>公平な比較のための条件統制:</strong>安静にする時間、姿勢、時刻を同じにし、直前の運動・カフェイン・緊張を避け、同じ人を同じ時点で両方の方法で測ります。</p>", "<p><strong>計算例子。</strong>某學生在30秒內數到38下，再重複兩次分別為36下和37下。平均 = (38 + 36 + 37) ÷ 3 = 每30秒37下，所以心率是 37 × 2 = <strong>每分鐘74下</strong>。</p>\n<p><strong>不確定度。</strong>30秒計數中若多數或少數一下，即37中的±1，約為±2.7 %；乘以2換算後約為每分鐘±2下。數60秒（或多次重複）可減低一下誤差的相對影響。</p>\n<table><tr><th></th><th>人手計數</th><th>數碼儀器</th></tr>\n<tr><td>優點</td><td>便宜；無需儀器；快捷</td><td>可持續及長時間記錄；沒有數錯的誤差；可儲存數據</td></tr>\n<tr><td>缺點</td><td>數錯；計數時間短；按得太重或位置不對</td><td>需正確佩戴及校準 (calibration)；移動會令讀數失準</td></tr></table>\n<p><strong>公平比較所需的控制：</strong>休息時間、姿勢和時間相同，避免剛運動、攝取咖啡因或緊張，並讓同一個人在同一時間以兩種方法量度。</p>")
    },
    {
      ref: "B3.2.5",
      ahl: false,
      heading: T("Adaptations of veins", "静脈の適応", "靜脈的適應特徵"),
      body: T(
        `<p>Blood in veins is at low pressure, because it has already passed through the narrow capillaries. Veins return it to the heart. Adaptations:</p>
<ul>
<li><strong>Valves</strong> (pocket-like flaps) inside the vein. They open to let blood flow towards the heart and close to <strong>prevent backflow</strong>. Without valves, blood would pool in the lower body, especially the legs.</li>
<li><strong>A flexible wall</strong> that is thin and not very muscular. The nearby skeletal muscles (such as leg muscles) <strong>compress</strong> the vein when they contract. This squeezes the blood along, and the valves make sure it can only move towards the heart.</li>
<li>A wide lumen, which gives little resistance to blood flow (see the table in B3.2.2–3).</li>
</ul>
<p>Veins do not need thick walls because the pressure in them is low.</p>`,
        `<p>静脈の血液は、すでに細い毛細血管を通ったあとなので、圧力が低くなっています。静脈は血液を心臓へ戻します。適応は次のとおりです。</p>
<ul>
<li>静脈の内側にある<strong>弁 (valves)</strong>（ポケット状のひだ）。心臓に向かう流れのときは開き、<strong>逆流を防ぐ</strong>ために閉じます。弁がなければ、血液は体の下部、とくに脚にたまってしまいます。</li>
<li>薄く筋肉があまり発達していない<strong>柔軟な壁</strong>。近くの骨格筋（脚の筋肉など）が収縮すると静脈を<strong>圧迫</strong>します。これが血液を押し進め、弁が心臓に向かう方向にしか動けないようにします。</li>
<li>広い管腔は血流への抵抗が小さくなります（B3.2.2–3の表を参照）。</li>
</ul>
<p>静脈内の圧力は低いので、厚い壁は必要ありません。</p>`,
        `<p>靜脈中的血液壓力低，因為它已通過了狹窄的微血管。靜脈把血液運回心臟。適應特徵：</p>
<ul>
<li>靜脈內的<strong>瓣膜 (valves)</strong>（袋狀的瓣）。血液流向心臟時瓣膜張開，並會關閉以<strong>防止倒流</strong>。沒有瓣膜，血液會積聚在下半身，特別是雙腿。</li>
<li><strong>柔軟的管壁</strong>，薄而肌肉不多。附近的骨骼肌（如腿肌）收縮時會<strong>壓迫</strong>靜脈，把血液擠向前，而瓣膜確保血液只能向心臟方向移動。</li>
<li>寬的管腔對血流的阻力小（見B3.2.2–3的表）。</li>
</ul>
<p>靜脈內壓力低，所以不需要厚壁。</p>`),
      deeper: T("<p><strong>The skeletal muscle pump, step by step.</strong></p>\n<ol><li>Leg muscles contract (for example when walking) and squeeze the thin-walled vein.</li><li>Blood in the squeezed section is pushed in both directions.</li><li>The valve <em>above</em> opens; the valve <em>below</em> is pushed shut, so blood can only move towards the heart.</li><li>The muscle relaxes and the vein widens again. Blood tries to fall back, but the valve above closes, and the lower valve opens to let new blood in from further down.</li></ol>\n<p><strong>Why the pressure is so low in veins.</strong> Blood loses most of its pressure as it is forced through the huge number of narrow capillaries (friction with the walls). It reaches the veins with very little push left, so veins need help from muscles and valves instead of thick walls.</p>\n<table><tr><th>Valves in veins</th><th>Semilunar valves in the heart (B3.2.15)</th></tr>\n<tr><td>Pocket-like flaps in the wall</td><td>Similar pocket-like flaps</td></tr>\n<tr><td>Close to stop backflow in low-pressure vessels</td><td>Close to stop backflow from the arteries into the ventricles</td></tr></table>\n<div class=\"note\"><strong>Mark-scheme language:</strong> \"valves prevent backflow so blood flows in one direction towards the heart\", and \"contracting skeletal muscles squeeze the veins\". Writing only \"veins have valves\" earns no mark without the function.</div>", "<p><strong>骨格筋ポンプのしくみ（順を追って）。</strong></p>\n<ol><li>脚の筋肉が収縮し（たとえば歩くとき）、薄い壁の静脈を圧迫する。</li><li>圧迫された部分の血液は両方向へ押される。</li><li><em>上側</em>の弁は開き、<em>下側</em>の弁は押されて閉じるので、血液は心臓の方向にしか進めない。</li><li>筋肉がゆるむと静脈は再び広がる。血液は戻ろうとするが上側の弁が閉じ、下側の弁が開いてさらに下から新しい血液が入る。</li></ol>\n<p><strong>静脈の圧力が低い理由。</strong>血液は無数の細い毛細血管を通るとき、壁との摩擦で圧力のほとんどを失います。静脈に着くときにはほとんど押す力が残っていないので、厚い壁ではなく筋肉と弁の助けが必要です。</p>\n<table><tr><th>静脈の弁</th><th>心臓の半月弁 (B3.2.15)</th></tr>\n<tr><td>壁にあるポケット状のひだ</td><td>同じようなポケット状のひだ</td></tr>\n<tr><td>低圧の血管で逆流を防ぐために閉じる</td><td>動脈から心室への逆流を防ぐために閉じる</td></tr></table>\n<div class=\"note\"><strong>採点基準の書き方:</strong>「弁が逆流を防ぐので、血液は心臓に向かう一方向に流れる」「収縮した骨格筋が静脈を圧迫する」。「静脈には弁がある」だけでは、働きを書かないと点になりません。</div>", "<p><strong>骨骼肌泵的運作（逐步）。</strong></p>\n<ol><li>腿部肌肉收縮（例如走路時），壓迫薄壁的靜脈。</li><li>被壓迫部分的血液向兩個方向被推動。</li><li><em>上方</em>的瓣膜張開；<em>下方</em>的瓣膜被推閉，血液便只能向心臟方向移動。</li><li>肌肉鬆弛，靜脈再度擴闊。血液想倒流，但上方瓣膜關閉，下方瓣膜張開，讓更下方的血液流入。</li></ol>\n<p><strong>為何靜脈壓力那麼低。</strong>血液被迫通過數量龐大的狹窄微血管時，因與管壁摩擦而失去大部分壓力。到達靜脈時幾乎沒有推力，所以靜脈靠肌肉和瓣膜幫助，而不是靠厚壁。</p>\n<table><tr><th>靜脈的瓣膜</th><th>心臟的半月瓣 (B3.2.15)</th></tr>\n<tr><td>管壁上袋狀的瓣</td><td>類似的袋狀瓣</td></tr>\n<tr><td>在低壓血管中關閉以防倒流</td><td>關閉以防血液由動脈倒流入心室</td></tr></table>\n<div class=\"note\"><strong>評分用語：</strong>「瓣膜防止倒流，使血液只向心臟單向流動」；「收縮的骨骼肌壓迫靜脈」。只寫「靜脈有瓣膜」而不說作用，不會得分。</div>")
    },
    {
      ref: "B3.2.6",
      ahl: false,
      heading: T("Occlusion of the coronary arteries", "冠動脈の閉塞", "冠狀動脈閉塞"),
      body: T(
        `<p>The heart muscle needs its own blood supply. <strong>Coronary arteries</strong> run over the surface of the heart and bring oxygen and nutrients to the cardiac muscle. <strong>Occlusion</strong> means blocking.</p>
<p><strong>Causes.</strong> Fatty material (including cholesterol) builds up in the artery wall, forming deposits called plaque. This narrows the lumen. A blood clot can form on a rough, damaged area and block the artery completely. Risk factors linked to this include a diet high in saturated fat, smoking, high blood pressure, lack of exercise and genetic factors.</p>
<p><strong>Consequences.</strong></p>
<ul>
<li>Less blood reaches part of the heart muscle, so those muscle cells get less oxygen and cannot respire aerobically fast enough.</li>
<li>This can cause chest pain (angina) when the heart works hard.</li>
<li>If a coronary artery is completely blocked, the heart muscle cells die. This is a heart attack (myocardial infarction). It can lead to heart failure or death.</li>
</ul>
<p><strong>Application of skills:</strong> evaluate <strong>epidemiological data</strong> on the incidence of coronary heart disease. Epidemiology studies how often a disease occurs in populations and what factors are linked to it.</p>
<p><strong>Nature of science:</strong> a <strong>correlation coefficient</strong> (r) measures how strongly two variables are related. r ranges from −1 to +1. The nearer to +1 or −1, the stronger the correlation. A low value or no correlation could be evidence against a hypothesis. But even a strong correlation, such as between saturated fat intake and coronary heart disease, <strong>does not prove a causal link</strong>, because other factors (confounding variables) may be involved.</p>`,
        `<p>心筋には独自の血液供給が必要です。<strong>冠動脈 (coronary arteries)</strong> は心臓の表面を走り、心筋に酸素と栄養分を運びます。<strong>閉塞 (occlusion)</strong> とはふさがることです。</p>
<p><strong>原因。</strong>脂肪性の物質（コレステロールを含む）が動脈の壁にたまり、プラーク（沈着物）と呼ばれるものをつくります。これが管腔を狭くします。ざらざらした傷ついた部分に血栓ができ、動脈を完全にふさぐことがあります。これに関連する危険因子には、飽和脂肪の多い食事、喫煙、高血圧、運動不足、遺伝的要因があります。</p>
<p><strong>結果。</strong></p>
<ul>
<li>心筋の一部に届く血液が減り、その部分の筋細胞が受け取る酸素が減って、好気呼吸を十分速く行えなくなります。</li>
<li>心臓が激しく働くときに胸の痛み（狭心症 angina）を起こすことがあります。</li>
<li>冠動脈が完全にふさがると、心筋細胞が死にます。これが心臓発作（心筋梗塞 myocardial infarction）です。心不全や死に至ることもあります。</li>
</ul>
<p><strong>技能の応用：</strong>冠動脈疾患の発生率に関する<strong>疫学データ (epidemiological data)</strong> を評価します。疫学は、病気が集団の中でどのくらい起こるか、どんな要因と関連しているかを研究します。</p>
<p><strong>科学の本質 (Nature of science)：</strong><strong>相関係数 (correlation coefficient)</strong>（r）は、2つの変数がどのくらい強く関係しているかを測ります。rは−1から+1の範囲をとり、+1または−1に近いほど相関が強くなります。値が低い、または相関がない場合は、仮説に反する証拠になりえます。しかし、飽和脂肪の摂取量と冠動脈疾患のような強い相関でも、<strong>因果関係を証明するものではありません</strong>。ほかの要因（交絡変数）が関わっているかもしれないからです。</p>`,
        `<p>心肌需要自己的血液供應。<strong>冠狀動脈 (coronary arteries)</strong> 沿心臟表面走行，為心肌帶來氧氣和營養物。<strong>閉塞 (occlusion)</strong> 指堵塞。</p>
<p><strong>成因。</strong>脂肪物質（包括膽固醇）積聚在動脈壁，形成稱為斑塊的沉積物，使管腔變窄。粗糙受損的地方可能形成血凝塊，把動脈完全堵塞。相關的風險因素包括高飽和脂肪的飲食、吸煙、高血壓、缺乏運動及遺傳因素。</p>
<p><strong>後果。</strong></p>
<ul>
<li>到達部分心肌的血液減少，這些肌細胞得到的氧氣較少，不能足夠快地進行有氧呼吸。</li>
<li>心臟用力工作時可引起胸痛（心絞痛 angina）。</li>
<li>如冠狀動脈完全堵塞，心肌細胞會死亡，這就是心臟病發作（心肌梗塞 myocardial infarction），可導致心臟衰竭或死亡。</li>
</ul>
<p><strong>技能應用：</strong>評估有關冠心病發病率的<strong>流行病學數據 (epidemiological data)</strong>。流行病學研究疾病在人群中發生的頻率，以及與哪些因素有關。</p>
<p><strong>科學本質 (Nature of science)：</strong><strong>相關係數 (correlation coefficient)</strong>（r）量度兩個變量關係的強弱。r介乎−1至+1之間，越接近+1或−1，相關越強。低數值或沒有相關可能是反對某假說的證據。但即使是強相關（如飽和脂肪攝取量與冠心病之間），<strong>也不能證明有因果關係</strong>，因為可能涉及其他因素（混淆變量）。</p>`),
      examTip: T(
        "In 'Evaluate' data questions, quote numbers from the data, say whether the correlation is strong or weak, and then say that correlation does not prove cause. Name at least one other factor that could be responsible.",
        "「Evaluate」のデータ問題では、データの数値を引用し、相関が強いか弱いかを述べ、そのうえで相関は原因を証明しないと述べます。原因でありうるほかの要因を少なくとも1つ挙げましょう。",
        "「Evaluate」數據題要引用數據中的數字，說明相關是強還是弱，然後指出相關不能證明因果，並至少列出一個其他可能的因素。"),
      deeper: T("<p><strong>The chain of events, step by step.</strong></p>\n<ol><li>Fatty deposits (plaque) build up in the wall of a coronary artery, so the lumen narrows.</li><li>Less blood reaches part of the cardiac muscle. During exercise the demand for oxygen rises but the supply cannot, so the muscle cells cannot respire aerobically fast enough. The result is chest pain (angina).</li><li>If a clot forms on the damaged plaque and blocks the artery, the muscle cells beyond the block are starved of oxygen and die. This is a heart attack (myocardial infarction).</li></ol>\n<p>The heart is especially vulnerable because it works continuously and needs a constant oxygen supply. The blood inside its own chambers cannot supply the thick muscle wall, so the coronary arteries are the only supply.</p>\n<p><strong>Evaluating epidemiological data.</strong></p>\n<ul><li>Compare <em>rates</em> (cases per 100 000 people), not raw numbers, because populations differ in size.</li><li>Quote values: for example \"r = +0.85 between saturated fat intake and deaths from coronary heart disease\" is a strong positive correlation. r near 0 means little or no linear correlation.</li><li>Then evaluate: correlation does not prove causation. Other factors (smoking, exercise, genetics, income) may differ between the groups.</li></ul>\n<div class=\"note\"><strong>A typical 4-mark \"Evaluate\" answer:</strong> quote the trend with numbers (1); state strong/weak correlation (1); say it does not prove cause (1); name a confounding factor (1).</div>", "<p><strong>出来事の連鎖（順を追って）。</strong></p>\n<ol><li>冠動脈の壁に脂肪の沈着（プラーク）がたまり、内腔が狭くなる。</li><li>心筋の一部に届く血液が減る。運動時は酸素の需要が増えるのに供給が増やせず、筋細胞は有酸素呼吸を十分な速さで行えない。その結果、胸の痛み（狭心症 angina）が起こる。</li><li>傷んだプラークの上に血栓ができて動脈をふさぐと、そこから先の筋細胞は酸素不足で死ぬ。これが心臓発作（心筋梗塞 myocardial infarction）。</li></ol>\n<p>心臓は休みなく働き、常に酸素を必要とするので、特に弱点があります。心臓の部屋の中の血液は厚い筋肉の壁を養えないため、冠動脈が唯一の供給路です。</p>\n<p><strong>疫学データの評価のしかた。</strong></p>\n<ul><li>集団の大きさが違うので、実数ではなく<em>率</em>（10万人あたりの症例数）で比べる。</li><li>数値を引用する。例: 「飽和脂肪の摂取量と冠動脈疾患による死亡の間に r = +0.85」は強い正の相関。r が0に近ければ直線的な相関はほとんどない。</li><li>そのうえで評価する。相関は因果関係の証明にはならない。喫煙・運動・遺伝・収入など他の要因が集団間で違うかもしれない。</li></ul>\n<div class=\"note\"><strong>「Evaluate」4点解答の型:</strong>数値で傾向を示す (1)、相関の強弱を述べる (1)、因果関係の証明にはならないと述べる (1)、交絡要因を1つ挙げる (1)。</div>", "<p><strong>事件的先後次序（逐步）。</strong></p>\n<ol><li>脂肪沉積（斑塊）積聚在冠狀動脈壁，令管腔變窄。</li><li>到達部分心肌的血液減少。運動時氧需求上升但供應無法增加，肌細胞無法足夠快地進行有氧呼吸，結果出現胸痛（心絞痛 angina）。</li><li>若受損的斑塊上形成血塊並堵塞動脈，阻塞點以下的肌細胞缺氧而死亡，這就是心臟病發（心肌梗塞 myocardial infarction）。</li></ol>\n<p>心臟持續工作，需要不斷供應氧氣，所以特別脆弱。心室腔內的血液無法供養厚厚的肌肉壁，因此冠狀動脈是唯一的供應來源。</p>\n<p><strong>評價流行病學數據。</strong></p>\n<ul><li>比較<em>比率</em>（每十萬人的個案數），而不是原始數字，因為各群體人口不同。</li><li>引用數值：例如「飽和脂肪攝取量與冠心病死亡之間 r = +0.85」是強正相關。r 接近 0 表示線性相關很弱或沒有。</li><li>然後評價：相關不證明因果。各組之間的吸煙、運動、遺傳、收入等其他因素可能不同。</li></ul>\n<div class=\"note\"><strong>典型4分「Evaluate」答案：</strong>以數字描述趨勢 (1)；指出相關強或弱 (1)；說明相關不證明因果 (1)；列出一個干擾因素 (1)。</div>")
    }
,
    {
      ref: "B3.2.7",
      ahl: false,
      heading: T("Water transport from roots to leaves", "根から葉への水の輸送", "水分由根部運送到葉"),
      body: T(
        `<p>Plants take water in through the roots and lose it from the leaves by transpiration (B3.1.9). <strong>Xylem</strong> vessels carry the water between the two. The water does not need to be pushed up by a pump. It is <strong>pulled</strong> up by transpiration:</p>
<ol>
<li><strong>Evaporation.</strong> Water evaporates from the wet <strong>cell walls</strong> of the leaf mesophyll cells into the air spaces, and then diffuses out through the stomata.</li>
<li><strong>Water is drawn out of the xylem.</strong> The loss replaces itself by pulling water out of the xylem vessels and through the cell walls. Water moves through the tiny spaces in the cell walls by <strong>capillary action</strong>, because water is attracted to the cellulose walls (adhesion).</li>
<li><strong>Tension.</strong> Pulling water out of the xylem generates <strong>tension</strong> (negative pressure, called negative pressure potential) in the xylem.</li>
<li><strong>Cohesion.</strong> Water molecules are attracted to each other (cohesion) because they form hydrogen bonds. So the water in the xylem forms a <strong>continuous column</strong>. The tension in the leaf pulls on the whole column, and water is drawn up from the roots.</li>
<li>Water enters the roots from the soil to replace the water drawn up.</li>
</ol>
<p>This is the <strong>transpiration stream</strong>. Because it is driven by evaporation from the leaves, the energy comes from the Sun, not from the plant's own ATP.</p>
<div class="note">Remember: the tension in the xylem is a <em>pull</em> from the top. This is why xylem walls must be strong (see B3.2.8).</div>`,
        `<p>植物は根から水を取り込み、葉から蒸散で失います（B3.1.9）。両者の間で水を運ぶのが<strong>木部 (xylem)</strong> の道管です。水はポンプで押し上げられるのではなく、蒸散によって<strong>引き上げられます</strong>。</p>
<ol>
<li><strong>蒸発。</strong>葉肉細胞の湿った<strong>細胞壁</strong>から水が空気の隙間に蒸発し、気孔を通って拡散して出ていきます。</li>
<li><strong>水が木部から引き出される。</strong>失われた分を補うため、水が木部の道管から細胞壁を通って引き出されます。水は、セルロースの壁に引きつけられるため（付着）、細胞壁の小さなすき間を<strong>毛細管現象 (capillary action)</strong> で移動します。</li>
<li><strong>張力 (tension)。</strong>木部から水を引き出すと、木部に<strong>張力</strong>（負の圧力。負の圧ポテンシャル）が生じます。</li>
<li><strong>凝集 (cohesion)。</strong>水分子は水素結合をつくるので互いに引き合います（凝集）。そのため木部の水は<strong>切れ目のない柱</strong>になります。葉の張力が柱全体を引き、水が根から引き上げられます。</li>
<li>引き上げられた分を補うため、水は土から根に入ります。</li>
</ol>
<p>これが<strong>蒸散流 (transpiration stream)</strong> です。葉からの蒸発で駆動されるので、エネルギーは植物自身のATPではなく太陽から来ます。</p>
<div class="note">覚えておきましょう：木部の張力は上からの<em>引く力</em>です。だから木部の壁は丈夫でなければなりません（B3.2.8を参照）。</div>`,
        `<p>植物經根部吸收水分，並經葉的蒸騰作用散失水分 (B3.1.9)。<strong>木質部 (xylem)</strong> 的導管在兩者之間運送水分。水不是被泵向上推，而是被蒸騰作用<strong>向上拉</strong>：</p>
<ol>
<li><strong>蒸發。</strong>水從葉肉細胞濕潤的<strong>細胞壁</strong>蒸發到氣室，然後經氣孔擴散出去。</li>
<li><strong>水被從木質部拉出。</strong>為補充散失的水，水從木質部導管被拉出，穿過細胞壁。由於水被纖維素壁吸引（附着），水藉<strong>毛細作用 (capillary action)</strong> 在細胞壁的微小空隙中移動。</li>
<li><strong>張力 (tension)。</strong>把水從木質部拉出，在木質部中產生<strong>張力</strong>（負壓，稱為負壓勢）。</li>
<li><strong>內聚力 (cohesion)。</strong>水分子之間形成氫鍵而互相吸引（內聚力），所以木質部中的水形成<strong>連續的水柱</strong>。葉中的張力拉動整條水柱，水就由根部被向上拉。</li>
<li>水由土壤進入根部，補充被拉上去的水。</li>
</ol>
<p>這就是<strong>蒸騰流 (transpiration stream)</strong>。由於它由葉的蒸發驅動，能量來自太陽，而不是植物自身的ATP。</p>
<div class="note">記着：木質部中的張力是來自頂部的<em>拉力</em>。這就是為何木質部的壁必須堅固（見B3.2.8）。</div>`),
      examTip: T(
        "Use the three key words: transpiration (the cause), tension (the pull) and cohesion (the continuous column). Do not write that xylem is 'pushed' up by a pump.",
        "3つのキーワードを使いましょう：蒸散（原因）、張力（引く力）、凝集（切れ目のない水の柱）。木部が「ポンプで押し上げられる」とは書かないこと。",
        "要用三個關鍵詞：蒸騰作用（成因）、張力（拉力）和內聚力（連續水柱）。不要寫木質部被泵「向上推」。"),
      deeper: T("<p><strong>A cause-and-effect chain to learn.</strong></p>\n<ol><li>The Sun's heat evaporates water from the wet cell walls of mesophyll cells.</li><li>Water vapour diffuses out through the stomata (transpiration).</li><li>Water is pulled from the xylem into the cell walls by capillary action (adhesion to cellulose). This lowers the pressure in the xylem: <strong>tension</strong>.</li><li>Hydrogen bonds hold water molecules together (<strong>cohesion</strong>), so the whole column in the xylem is pulled up as one.</li><li>Water enters the root hairs from the soil to replace it.</li></ol>\n<table><tr><th>Wording that earns marks</th><th>Wording that loses marks</th></tr>\n<tr><td>\"Transpiration creates tension (negative pressure) in the xylem\"</td><td>\"The plant sucks / pumps water up\"</td></tr>\n<tr><td>\"Cohesion (hydrogen bonds) keeps the water column continuous\"</td><td>\"Water sticks together\" with no mention of the column or tension</td></tr>\n<tr><td>\"Energy comes from the Sun (evaporation)\"</td><td>\"The plant uses ATP to lift the water\"</td></tr></table>\n<div class=\"note\"><strong>Extension (not required):</strong> a suction pump can lift water only about 10 m, but trees grow over 100 m tall. This is why the explanation needs a <em>pull from the top</em> (tension in a cohesive column) and not a push or a suction from below.</div>", "<p><strong>覚えるべき原因と結果の連鎖。</strong></p>\n<ol><li>太陽の熱で、葉肉細胞の湿った細胞壁から水が蒸発する。</li><li>水蒸気が気孔から拡散して出ていく（蒸散）。</li><li>水が毛細管現象（セルロースへの付着）で木部から細胞壁へ引き出される。これで木部の圧力が下がる＝<strong>張力 (tension)</strong>。</li><li>水素結合が水分子をつなぎ止める（<strong>凝集 (cohesion)</strong>）ので、木部の水の柱全体がひとつながりで引き上げられる。</li><li>失われた分を補うため、土から根毛に水が入る。</li></ol>\n<table><tr><th>点になる書き方</th><th>点にならない書き方</th></tr>\n<tr><td>「蒸散が木部に張力（負の圧力）をつくる」</td><td>「植物が水を吸い上げる／ポンプで上げる」</td></tr>\n<tr><td>「凝集（水素結合）が水の柱を連続させる」</td><td>「水がくっつく」だけで、柱や張力に触れていない</td></tr>\n<tr><td>「エネルギー源は太陽（蒸発）」</td><td>「植物がATPを使って水を持ち上げる」</td></tr></table>\n<div class=\"note\"><strong>発展（必須ではない）:</strong>吸引ポンプで持ち上げられる水の高さは約10 mが限界ですが、木は100 m以上に育ちます。だから説明には、下からの押し上げや吸引ではなく、<em>上からの引く力</em>（凝集した水柱の張力）が必要になります。</div>", "<p><strong>要記住的因果鏈。</strong></p>\n<ol><li>太陽的熱使水從葉肉細胞濕潤的細胞壁蒸發。</li><li>水蒸氣經氣孔擴散出去（蒸騰作用）。</li><li>水藉毛細作用（附着於纖維素）從木質部被拉進細胞壁，使木質部壓力下降，這就是<strong>張力 (tension)</strong>。</li><li>氫鍵把水分子連在一起（<strong>內聚力 (cohesion)</strong>），所以木質部中整條水柱被一同向上拉。</li><li>水從土壤進入根毛，補充失去的水。</li></ol>\n<table><tr><th>得分的寫法</th><th>失分的寫法</th></tr>\n<tr><td>「蒸騰作用在木質部產生張力（負壓）」</td><td>「植物把水吸上去／泵上去」</td></tr>\n<tr><td>「內聚力（氫鍵）使水柱連續」</td><td>只寫「水黏在一起」，沒有提到水柱或張力</td></tr>\n<tr><td>「能量來自太陽（蒸發）」</td><td>「植物用ATP把水抬高」</td></tr></table>\n<div class=\"note\"><strong>延伸（非必修）：</strong>抽吸泵最多只能把水提升約10米，但樹木可高過100米。所以解釋需要的是<em>來自頂部的拉力</em>（內聚水柱中的張力），而不是從下方推或吸。</div>")
    },
    {
      ref: "B3.2.8",
      ahl: false,
      heading: T("Adaptations of xylem vessels", "木部の道管の適応", "木質部導管的適應特徵"),
      body: T(
        `<p>A xylem vessel is made of many dead cells joined end to end to make a long tube. Its adaptations:</p>
<ul>
<li><strong>No cell contents.</strong> The cells are dead and empty (no cytoplasm, nucleus or organelles), so nothing blocks the flow of water.</li>
<li><strong>Incomplete or absent end walls.</strong> The walls between the cells have gaps or have broken down, so the vessel is a continuous tube with unimpeded flow.</li>
<li><strong>Lignified walls.</strong> The walls are thickened with <strong>lignin</strong>, a strong, waterproof material, often in rings or spirals. The walls are strong enough to withstand the tension (negative pressure) without collapsing inwards.</li>
<li><strong>Pits.</strong> These are small gaps in the wall where there is no lignin. Water can enter and leave the vessel through the pits, into and out of neighbouring cells and vessels.</li>
</ul>`,
        `<p>木部の道管は、多数の死んだ細胞が端でつながって長い管になったものです。適応は次のとおりです。</p>
<ul>
<li><strong>細胞内容物がない。</strong>細胞は死んでいて空っぽ（細胞質、核、細胞小器官がない）なので、水の流れを妨げるものがありません。</li>
<li><strong>不完全な、またはない端壁。</strong>細胞間の壁にすき間があるか壊れているので、道管は切れ目のない管となり、流れが妨げられません。</li>
<li><strong>リグニン化した壁 (lignified walls)。</strong>壁は強く防水性のある物質<strong>リグニン</strong>で厚くなっており、しばしば輪状やらせん状です。壁は、内側へつぶれずに張力（負の圧力）に耐えられるほど丈夫です。</li>
<li><strong>壁孔 (pits)。</strong>壁にリグニンのないところにある小さなすき間です。水は壁孔を通って、道管に出入りし、隣の細胞や道管へ移動できます。</li>
</ul>`,
        `<p>木質部導管由許多死細胞首尾相連成一條長管。適應特徵：</p>
<ul>
<li><strong>沒有細胞內含物。</strong>細胞已死亡且空無一物（沒有細胞質、細胞核或胞器），所以沒有東西阻礙水流。</li>
<li><strong>端壁不完整或沒有。</strong>細胞之間的壁有空隙或已瓦解，所以導管是連續的管，水流不受阻。</li>
<li><strong>木質化的壁 (lignified walls)。</strong>壁以堅固而防水的<strong>木質素 (lignin)</strong> 加厚，常成環狀或螺旋狀。壁足夠堅固，能承受張力（負壓）而不向內塌陷。</li>
<li><strong>紋孔 (pits)。</strong>壁上沒有木質素的小空隙。水可經紋孔進出導管，進入或離開鄰近的細胞和導管。</li>
</ul>`),
      deeper: T("<p><strong>Match each feature to its job.</strong></p>\n<table><tr><th>Feature</th><th>What it does</th><th>Link to the water column</th></tr>\n<tr><td>Dead cells with no contents</td><td>Open, empty tube</td><td>No cytoplasm or organelles to slow the flow</td></tr>\n<tr><td>End walls broken down or incomplete</td><td>Continuous tube end to end</td><td>Water moves with little resistance; the column is not interrupted</td></tr>\n<tr><td>Lignified walls (rings or spirals)</td><td>Strong, waterproof</td><td>Withstand tension without collapsing inwards; lignin also stops water leaking out sideways</td></tr>\n<tr><td>Pits (gaps in the lignin)</td><td>Sideways exit and entry</td><td>Water can move between neighbouring vessels and to nearby living cells</td></tr></table>\n<p><strong>Think of a flimsy drinking straw.</strong> If you suck hard, a thin-walled straw collapses inwards because the pressure inside is lower than outside. Xylem is under tension (lower pressure than outside) all the time, so its walls must be strong. That is the job of lignin.</p>\n<p><strong>Annotation tip.</strong> On a drawing of a xylem vessel, label the feature <em>and</em> add its function in a few words, for example \"lignin ring: strengthens wall, resists collapse\".</p>\n<div class=\"note\"><strong>Mark-scheme language:</strong> \"no end walls / no cell contents → unimpeded flow\"; \"lignin → strong, withstands tension (negative pressure)\"; \"pits → lateral movement of water\". Avoid \"lignin lets water pass\".</div>", "<p><strong>各特徴を働きと結びつける。</strong></p>\n<table><tr><th>特徴</th><th>働き</th><th>水の柱との関係</th></tr>\n<tr><td>内容物のない死んだ細胞</td><td>空っぽの管</td><td>流れをじゃまする細胞質や細胞小器官がない</td></tr>\n<tr><td>端壁が分解または不完全</td><td>端から端までつながった管</td><td>水が小さな抵抗で動け、柱が途切れない</td></tr>\n<tr><td>リグニン化した壁（輪状・らせん状）</td><td>丈夫で水を通さない</td><td>張力で内側につぶれない。リグニンは水が横へ漏れるのも防ぐ</td></tr>\n<tr><td>壁孔 (pits)（リグニンのない隙間）</td><td>横方向の出入り口</td><td>隣の道管や近くの生きた細胞へ水が移れる</td></tr></table>\n<p><strong>ペラペラのストローを思い浮かべましょう。</strong>強く吸うと、薄いストローは内側の圧力が外より低くなるため内側へつぶれます。木部は常に張力（外より低い圧力）の下にあるので、壁は丈夫でなければなりません。それがリグニンの役目です。</p>\n<p><strong>注記のコツ。</strong>道管の図では、特徴の名前<em>と</em>その働きを短く書き添えます。例: 「リグニンの輪: 壁を強くし、つぶれにくくする」。</p>\n<div class=\"note\"><strong>採点基準の書き方:</strong>「端壁なし／内容物なし → 妨げのない流れ」「リグニン → 強くて張力（負の圧力）に耐える」「壁孔 → 水の横方向の移動」。「リグニンが水を通す」と書かないこと。</div>", "<p><strong>把每個特徵配對到作用。</strong></p>\n<table><tr><th>特徵</th><th>作用</th><th>與水柱的關係</th></tr>\n<tr><td>沒有內含物的死細胞</td><td>空心的管</td><td>沒有細胞質或胞器阻礙水流</td></tr>\n<tr><td>端壁消失或不完整</td><td>首尾相連的連續管道</td><td>水流阻力小；水柱不被中斷</td></tr>\n<tr><td>木質素化的細胞壁（環狀或螺旋狀）</td><td>堅固而防水</td><td>承受張力而不向內塌陷；木質素也防止水從側面漏出</td></tr>\n<tr><td>紋孔 (pits)（沒有木質素的缺口）</td><td>側向進出的通道</td><td>水可在相鄰導管及附近活細胞之間移動</td></tr></table>\n<p><strong>想像一支薄弱的飲管。</strong>用力吸時，薄壁飲管會向內塌陷，因為內部壓力低於外面。木質部持續處於張力（壓力低於外面）之下，所以管壁必須堅固。這就是木質素的作用。</p>\n<p><strong>標註技巧。</strong>繪畫導管時，要標出特徵<em>並</em>用幾個字寫出作用，例如「木質素環：加強管壁，抵抗塌陷」。</p>\n<div class=\"note\"><strong>評分用語：</strong>「沒有端壁／沒有內含物 → 水流暢通無阻」；「木質素 → 堅固，能承受張力（負壓）」；「紋孔 → 水側向移動」。不要寫「木質素讓水通過」。</div>")
    },
    {
      ref: "B3.2.9–10",
      ahl: false,
      heading: T("Plan diagrams of dicotyledonous stem and root", "双子葉植物の茎と根の平面図", "雙子葉植物莖與根的平面圖"),
      body: T(
        `<p>These are <strong>application of skills</strong> points. You should be able to draw plan diagrams (outlines of tissues, no individual cells) from micrographs of a transverse (cross) section, and to <strong>annotate</strong> them (add brief notes, such as functions).</p>
<p><strong>Stem (B3.2.9)</strong>, from outside to inside:</p>
<ul>
<li><strong>Epidermis:</strong> the outer layer; protects the stem and reduces water loss.</li>
<li><strong>Cortex:</strong> tissue between the epidermis and the vascular bundles; supports the stem and stores food.</li>
<li><strong>Vascular bundles:</strong> arranged in a <strong>ring</strong> near the outside of the stem. In each bundle, the <strong>xylem</strong> is on the inner side (towards the centre) and carries water and minerals up and supports the stem. The <strong>phloem</strong> is on the outer side and carries sugars and other organic compounds.</li>
<li><strong>Pith:</strong> the central tissue, which stores food. (The guide does not list the pith, but you will see it on micrographs.)</li>
</ul>
<p><strong>Root (B3.2.10).</strong></p>
<ul>
<li><strong>Epidermis:</strong> the outer layer, which has root hairs that absorb water and mineral ions.</li>
<li><strong>Cortex:</strong> a wide layer between the epidermis and the centre; stores food and lets water pass towards the centre.</li>
<li><strong>Vascular bundle:</strong> in the <strong>centre</strong> of the root. The <strong>xylem</strong> is often arranged in an X or star shape in the middle, with <strong>phloem</strong> between the arms of the star.</li>
</ul>
<p>In stems the vascular tissue is in separate bundles in a ring. In roots it is a single central group. This helps the root resist pulling forces.</p>`,
        `<p>これらは<strong>技能の応用</strong>の項目です。横断面の顕微鏡写真から、平面図（組織の輪郭で、個々の細胞は描かない）を描き、<strong>注釈 (annotate)</strong>（機能などの短いメモを加える）できる必要があります。</p>
<p><strong>茎 (B3.2.9)</strong>。外側から内側へ：</p>
<ul>
<li><strong>表皮 (epidermis)：</strong>外側の層。茎を守り、水分の損失を減らします。</li>
<li><strong>皮層 (cortex)：</strong>表皮と維管束の間の組織。茎を支え、養分を蓄えます。</li>
<li><strong>維管束 (vascular bundles)：</strong>茎の外側近くに<strong>輪</strong>状に並びます。各維管束で、<strong>木部</strong>は内側（中心側）にあり、水と無機塩類を上方へ運び、茎を支えます。<strong>師部</strong>は外側にあり、糖などの有機化合物を運びます。</li>
<li><strong>髄 (pith)：</strong>中心の組織で、養分を蓄えます（ガイドには挙げられていませんが、顕微鏡写真には見えます）。</li>
</ul>
<p><strong>根 (B3.2.10)</strong>。</p>
<ul>
<li><strong>表皮：</strong>外側の層。水と無機イオンを吸収する根毛があります。</li>
<li><strong>皮層：</strong>表皮と中心の間の広い層。養分を蓄え、水が中心へ向かって通れるようにします。</li>
<li><strong>維管束：</strong>根の<strong>中心</strong>にあります。<strong>木部</strong>はしばしば中心でX字形や星形に並び、星の腕の間に<strong>師部</strong>があります。</li>
</ul>
<p>茎では、維管束は別々の束として輪状に並びます。根では中心に1つのまとまりとなります。これは根が引っ張る力に耐えるのに役立ちます。</p>`,
        `<p>這些是<strong>技能應用</strong>的項目。你應能根據橫切面的顯微照片繪畫平面圖（組織輪廓，不畫個別細胞），並<strong>註解 (annotate)</strong>（加上簡短的說明，如功能）。</p>
<p><strong>莖 (B3.2.9)</strong>，由外至內：</p>
<ul>
<li><strong>表皮 (epidermis)：</strong>最外層，保護莖並減少水分散失。</li>
<li><strong>皮層 (cortex)：</strong>表皮與維管束之間的組織，支撐莖並貯存養分。</li>
<li><strong>維管束 (vascular bundles)：</strong>排成<strong>環</strong>形，靠近莖的外側。每個維管束中，<strong>木質部</strong>在內側（朝向中心），向上運送水和礦物質，並支撐莖；<strong>韌皮部</strong>在外側，運送糖和其他有機化合物。</li>
<li><strong>髓 (pith)：</strong>中央組織，貯存養分（課程指引沒有列出髓，但你會在顯微照片中看到它）。</li>
</ul>
<p><strong>根 (B3.2.10)</strong>。</p>
<ul>
<li><strong>表皮：</strong>最外層，有根毛吸收水和礦物離子。</li>
<li><strong>皮層：</strong>表皮與中心之間較闊的一層，貯存養分，並讓水向中心通過。</li>
<li><strong>維管束：</strong>位於根的<strong>中央</strong>。<strong>木質部</strong>常在中央排成X形或星形，<strong>韌皮部</strong>在星形的臂之間。</li>
</ul>
<p>在莖中，維管組織是環狀排列的分開的束；在根中則是一個中央群組。這有助根抵抗拉力。</p>`),
      examTip: T(
        "Plan diagram marks: correct outlines and proportions, no cells drawn, correct positions of xylem and phloem, ruled label lines. 'Annotate' means add brief functions next to the labels.",
        "平面図の得点：正しい輪郭と比率、細胞を描かない、木部と師部の正しい位置、定規で引いたラベル線。「Annotate」はラベルの横に機能の短いメモを加えることです。",
        "平面圖的得分點：正確的輪廓與比例、不畫細胞、木質部與韌皮部位置正確、用直尺畫標示線。「Annotate」指在標示旁加上簡短的功能說明。"),
      deeper: T("<p><strong>Drawing a plan diagram, step by step.</strong></p>\n<ol><li>Use a sharp pencil and a clear outline of the whole section.</li><li>Draw only the <em>boundaries of tissues</em>. Do not draw individual cells.</li><li>Keep proportions correct: if the cortex is wide in the micrograph, draw it wide.</li><li>Label with ruled lines that do not cross, then annotate (a few words on function) beside each label.</li><li>Add a title and, if asked, a scale or magnification.</li></ol>\n<p><strong>Magnification worked example.</strong> Magnification = size of image ÷ actual size. If the stem is 3 mm across and your diagram is 60 mm across, magnification = 60 ÷ 3 = ×20. For a scale bar: actual length = measured length ÷ magnification.</p>\n<table><tr><th></th><th>Dicot stem</th><th>Dicot root</th></tr>\n<tr><td>Vascular tissue arrangement</td><td>Separate bundles in a ring near the outside</td><td>One central group</td></tr>\n<tr><td>Xylem</td><td>Inner side of each bundle</td><td>Centre, often X- or star-shaped</td></tr>\n<tr><td>Phloem</td><td>Outer side of each bundle</td><td>Between the arms of the xylem</td></tr>\n<tr><td>Main role of the arrangement</td><td>Ring of bundles helps support the stem and resist bending</td><td>Central core helps resist pulling forces</td></tr></table>\n<div class=\"note\"><strong>Common mark losses:</strong> drawing cells; xylem and phloem swapped; labels that cross; no annotation when the question says \"annotate\".</div>", "<p><strong>断面の見取り図 (plan diagram) の描き方。</strong></p>\n<ol><li>よく削った鉛筆で、切片全体の輪郭をはっきり描く。</li><li>描くのは<em>組織の境界</em>だけ。個々の細胞は描かない。</li><li>比率を正しく保つ。顕微鏡写真で皮層が広いなら、広く描く。</li><li>交差しない定規引きの線で名称を示し、各名称のそばに働きを一言（注記）添える。</li><li>題名を付け、求められたら倍率や縮尺も書く。</li></ol>\n<p><strong>倍率の計算例。</strong>倍率 = 像の大きさ ÷ 実物の大きさ。茎の直径が3 mmで、図の幅が60 mmなら、倍率 = 60 ÷ 3 = ×20。スケールバーでは、実際の長さ = 測った長さ ÷ 倍率。</p>\n<table><tr><th></th><th>双子葉植物の茎</th><th>双子葉植物の根</th></tr>\n<tr><td>維管束組織の配置</td><td>外側近くに輪状に並ぶ別々の維管束</td><td>中心に1つのまとまり</td></tr>\n<tr><td>木部</td><td>各維管束の内側</td><td>中心。X字や星形が多い</td></tr>\n<tr><td>師部</td><td>各維管束の外側</td><td>木部の腕の間</td></tr>\n<tr><td>配置の主な意味</td><td>輪状の維管束が茎を支え、曲がりに耐える</td><td>中心の芯が引っ張りの力に耐える</td></tr></table>\n<div class=\"note\"><strong>よくある失点:</strong>細胞を描いてしまう。木部と師部を取り違える。線が交差する。「annotate」と指示があるのに注記がない。</div>", "<p><strong>逐步繪畫平面圖 (plan diagram)。</strong></p>\n<ol><li>用削尖的鉛筆，清晰畫出整個切片的輪廓。</li><li>只畫<em>組織的邊界</em>，不要畫個別細胞。</li><li>保持比例正確：顯微照片中皮層寬，圖中也要畫得寬。</li><li>用互不交叉的直尺線標示名稱，並在每個標示旁加上簡短註解（功能）。</li><li>加上標題；如題目要求，也要寫出放大倍數或比例尺。</li></ol>\n<p><strong>放大倍數計算例子。</strong>放大倍數 = 影像大小 ÷ 實際大小。若莖橫切面直徑為3 mm，而你的圖闊60 mm，放大倍數 = 60 ÷ 3 = ×20。若有比例尺：實際長度 = 量得長度 ÷ 放大倍數。</p>\n<table><tr><th></th><th>雙子葉植物莖</th><th>雙子葉植物根</th></tr>\n<tr><td>維管組織的排列</td><td>分開的維管束，排成環狀，靠近外側</td><td>集中在中央的一組</td></tr>\n<tr><td>木質部</td><td>每個維管束的內側</td><td>中央，常呈X形或星形</td></tr>\n<tr><td>韌皮部</td><td>每個維管束的外側</td><td>位於木質部臂之間</td></tr>\n<tr><td>排列的主要作用</td><td>環狀維管束有助支撐莖並抵抗彎曲</td><td>中央核心有助抵抗拉力</td></tr></table>\n<div class=\"note\"><strong>常見失分位：</strong>畫了細胞；木質部與韌皮部互換；標示線交叉；題目要求「annotate」卻沒有註解。</div>")
    },
    {
      ref: "B3.2.11–12",
      ahl: true,
      heading: T("Tissue fluid: formation, return and exchange with cells", "組織液：形成・戻り・細胞との物質交換", "組織液：形成、回流及與細胞的物質交換"),
      body: T(
        `<p><strong>Plasma</strong> is the liquid part of blood. <strong>Tissue fluid</strong> is the liquid that surrounds the cells in a tissue.</p>
<p><strong>Release (B3.2.11).</strong> Blood from an arteriole enters the capillary at <strong>high pressure</strong>. This pressure forces part of the plasma out through the thin capillary wall (and through the fenestrations). This is <strong>pressure filtration</strong>. The fluid that leaves is tissue fluid. It is a filtered version of plasma: water and small dissolved substances pass out, but red blood cells and most large proteins stay in the blood.</p>
<p><strong>Reuptake.</strong> Blood flows on towards the venule end, where the pressure is <strong>lower</strong>. At this lower pressure, much of the tissue fluid drains back into the capillary.</p>
<p><strong>Exchange with cells (B3.2.12).</strong> Tissue fluid is the medium through which substances pass between blood and cells. Oxygen, glucose, amino acids, mineral ions and other nutrients pass from the capillary into tissue fluid, then into the cells. Carbon dioxide, urea and other wastes pass from the cells into the tissue fluid, then back into the capillary.</p>
<p><strong>Discussion: composition of plasma and tissue fluid.</strong></p>
<table>
<tr><th>Component</th><th>Plasma</th><th>Tissue fluid</th></tr>
<tr><td>Water, glucose, amino acids, mineral ions, hormones, urea, dissolved gases</td><td>Present</td><td>Present, at similar concentrations (but the amounts of oxygen and glucose are lower and CO₂ is higher in tissue near active cells)</td></tr>
<tr><td>Large plasma proteins</td><td>Present at high concentration</td><td>Absent, or at very low concentration (they are too big to leave)</td></tr>
<tr><td>Red blood cells</td><td>Carried in blood</td><td>Absent</td></tr>
</table>
<p>So tissue fluid is similar to plasma but without most proteins and red cells. Its exact composition varies with the activity of the nearby cells.</p>`,
        `<p><strong>血しょう (plasma)</strong> は血液の液体部分です。<strong>組織液 (tissue fluid)</strong> は、組織の中の細胞を取り巻く液体です。</p>
<p><strong>放出 (B3.2.11)。</strong>細動脈から毛細血管に入る血液は<strong>高い圧力</strong>を持っています。この圧力が、血しょうの一部を薄い毛細血管の壁（や窓）から押し出します。これが<strong>圧ろ過 (pressure filtration)</strong> です。出ていった液が組織液です。組織液はろ過された血しょうで、水と小さな溶質は出ていきますが、赤血球と大部分の大きなタンパク質は血液中に残ります。</p>
<p><strong>再吸収（戻り）。</strong>血液が細静脈側へ流れると、そこでは圧力が<strong>低く</strong>なっています。この低い圧力のもとで、組織液の多くが毛細血管に戻ります。</p>
<p><strong>細胞との交換 (B3.2.12)。</strong>組織液は、血液と細胞の間で物質が通る媒体です。酸素、グルコース、アミノ酸、無機イオンなどの栄養分は、毛細血管から組織液へ、そして細胞へ移ります。二酸化炭素、尿素などの老廃物は、細胞から組織液へ、そして毛細血管へ戻ります。</p>
<p><strong>議論：血しょうと組織液の組成。</strong></p>
<table>
<tr><th>成分</th><th>血しょう</th><th>組織液</th></tr>
<tr><td>水、グルコース、アミノ酸、無機イオン、ホルモン、尿素、溶けた気体</td><td>あり</td><td>あり、同程度の濃度（ただし、活動中の細胞の近くでは酸素とグルコースの量は少なく、CO₂は多い）</td></tr>
<tr><td>大きな血しょうタンパク質</td><td>高濃度で存在</td><td>なし、またはごく低濃度（大きすぎて出られない）</td></tr>
<tr><td>赤血球</td><td>血液中を運ばれる</td><td>なし</td></tr>
</table>
<p>つまり組織液は、大部分のタンパク質と赤血球を除いた血しょうに似ています。正確な組成は、近くの細胞の活動によって変わります。</p>`,
        `<p><strong>血漿 (plasma)</strong> 是血液的液體部分。<strong>組織液 (tissue fluid)</strong> 是圍繞組織中細胞的液體。</p>
<p><strong>釋出 (B3.2.11)。</strong>從小動脈進入微血管的血液<strong>壓力高</strong>。這壓力迫使部分血漿穿過薄的微血管壁（及窗孔）流出，這稱為<strong>壓力濾過 (pressure filtration)</strong>。流出的液體就是組織液，它是經過濾的血漿：水和細小的溶質流出，但紅血球和大部分大蛋白質留在血液中。</p>
<p><strong>回收。</strong>血液繼續流向小靜脈端，那裏的壓力<strong>較低</strong>。在這較低的壓力下，大部分組織液回流入微血管。</p>
<p><strong>與細胞的交換 (B3.2.12)。</strong>組織液是物質在血液與細胞之間通過的媒介。氧氣、葡萄糖、氨基酸、礦物離子和其他營養物由微血管進入組織液，再進入細胞。二氧化碳、尿素和其他廢物由細胞進入組織液，再回到微血管。</p>
<p><strong>討論：血漿與組織液的成分。</strong></p>
<table>
<tr><th>成分</th><th>血漿</th><th>組織液</th></tr>
<tr><td>水、葡萄糖、氨基酸、礦物離子、激素、尿素、溶解氣體</td><td>有</td><td>有，濃度相近（但活躍細胞附近的組織中，氧氣和葡萄糖的量較低，CO₂較高）</td></tr>
<tr><td>大型血漿蛋白</td><td>高濃度存在</td><td>沒有，或濃度極低（太大不能流出）</td></tr>
<tr><td>紅血球</td><td>在血液中運載</td><td>沒有</td></tr>
</table>
<p>所以組織液與血漿相似，但缺少大部分蛋白質和紅血球。其確切成分隨附近細胞的活動而不同。</p>`),
      deeper: T("<p><strong>(AHL) Follow the fluid.</strong></p>\n<ol><li>Arteriole end: blood pressure is high, so plasma is forced out through the thin wall and fenestrations (pressure filtration).</li><li>Red blood cells and most large plasma proteins are too big to pass, so they stay in the capillary.</li><li>Tissue fluid bathes the cells. Oxygen and nutrients diffuse (or are transported) into the cells down their concentration gradients; CO₂, urea and other wastes move out.</li><li>Venule end: pressure is lower, so much of the fluid drains back into the capillary, carrying the wastes with it.</li></ol>\n<p><strong>Gradients keep exchange going.</strong> Active cells use up oxygen and glucose, so tissue fluid near them has a lower concentration of these than plasma. That keeps a gradient from blood to cell. For CO₂ the gradient runs the other way.</p>\n<table><tr><th>Typical data clue</th><th>What to conclude</th></tr>\n<tr><td>Protein: plasma about 60–80 g per litre, tissue fluid close to 0</td><td>Large proteins stay in the blood; tissue fluid is a filtrate</td></tr>\n<tr><td>Oxygen lower and CO₂ higher in tissue fluid near an active muscle than in plasma</td><td>Cells are taking up O₂ and releasing CO₂</td></tr></table>\n<div class=\"note\"><strong>Mark-scheme language:</strong> \"high pressure at the arteriole end forces fluid out (pressure filtration)\"; \"large proteins and red cells are too large to leave\"; \"lower pressure at the venule end so fluid returns\". Do not use oncotic pressure or Starling forces.</div>", "<p><strong>(AHL) 液体の動きを追う。</strong></p>\n<ol><li>細動脈側: 血圧が高いので、血しょうが薄い壁と窓から押し出される（圧ろ過）。</li><li>赤血球と大きな血しょうタンパク質の大部分は大きすぎて通れず、毛細血管内に残る。</li><li>組織液が細胞を浸す。酸素と栄養分は濃度勾配に従って細胞へ拡散（または輸送）され、CO₂・尿素などの老廃物は外へ出る。</li><li>細静脈側: 圧力が低いので、液体の多くが毛細血管へ戻り、老廃物も運ばれる。</li></ol>\n<p><strong>勾配が交換を続けさせる。</strong>活動中の細胞は酸素とブドウ糖を使うので、その近くの組織液はこれらの濃度が血しょうより低くなります。これで血液から細胞への勾配が保たれます。CO₂では勾配が逆向きです。</p>\n<table><tr><th>データのヒント</th><th>読み取れること</th></tr>\n<tr><td>タンパク質: 血しょう約60〜80 g/L、組織液はほぼ0</td><td>大きなタンパク質は血液に残る。組織液はろ液である</td></tr>\n<tr><td>活動中の筋肉の近くでは、組織液の酸素が血しょうより低くCO₂が高い</td><td>細胞がO₂を取り込みCO₂を出している</td></tr></table>\n<div class=\"note\"><strong>採点基準の書き方:</strong>「細動脈側の高い圧力が液体を押し出す（圧ろ過）」「大きなタンパク質と赤血球は大きすぎて出られない」「細静脈側は圧力が低いので液体が戻る」。膠質浸透圧やスターリングの力は使わないこと。</div>", "<p><strong>(AHL) 跟着液體走。</strong></p>\n<ol><li>微動脈端：血壓高，血漿被迫穿過薄的管壁和窗孔（壓力過濾）。</li><li>紅血球和大部分大型血漿蛋白質太大，無法通過，留在微血管內。</li><li>組織液浸潤細胞。氧和養分順濃度梯度擴散（或被運送）入細胞；CO₂、尿素等廢物則向外移動。</li><li>微靜脈端：壓力較低，大部分液體流回微血管，並帶走廢物。</li></ol>\n<p><strong>濃度梯度使交換持續。</strong>活躍的細胞消耗氧和葡萄糖，所以附近組織液中這些物質的濃度比血漿低，維持血液到細胞的梯度。CO₂ 的梯度則相反。</p>\n<table><tr><th>典型數據線索</th><th>可作出的結論</th></tr>\n<tr><td>蛋白質：血漿約60–80 g/L，組織液接近0</td><td>大型蛋白質留在血液中；組織液是濾液</td></tr>\n<tr><td>活躍肌肉附近的組織液，氧比血漿低而 CO₂ 比血漿高</td><td>細胞正在吸收 O₂ 並釋出 CO₂</td></tr></table>\n<div class=\"note\"><strong>評分用語：</strong>「微動脈端高壓把液體擠出（壓力過濾）」；「大型蛋白質和紅血球太大，無法離開」；「微靜脈端壓力較低，液體回流」。不要使用膠體滲透壓或斯塔林力。</div>")
    },
    {
      ref: "B3.2.13",
      ahl: true,
      heading: T("Lymph ducts drain excess tissue fluid", "リンパ管は余分な組織液を排出する", "淋巴管引流多餘的組織液"),
      body: T(
        `<p>Not all the tissue fluid that leaves the capillaries drains back into them. The <strong>excess</strong> drains into <strong>lymph ducts</strong>. The fluid inside is now called <strong>lymph</strong>. The guide limits you to these features:</p>
<ul>
<li><strong>Thin walls with gaps</strong> in the lymph vessels at their start, so tissue fluid can easily enter.</li>
<li><strong>Valves</strong> in the lymph ducts, which prevent backflow so that the lymph moves in one direction only (it is moved along by the squeezing of surrounding muscles, as in veins).</li>
<li><strong>Return of lymph to the blood circulation.</strong> The lymph ducts join together and empty into veins near the heart, so the fluid goes back into the blood.</li>
</ul>
<p>Without this drainage, fluid would collect in the tissues and cause swelling.</p>`,
        `<p>毛細血管から出た組織液のすべてが、そこへ戻るわけではありません。<strong>余った分</strong>は<strong>リンパ管 (lymph ducts)</strong> に排出されます。中の液体は<strong>リンパ液 (lymph)</strong> と呼ばれます。ガイドは次の特徴に限っています。</p>
<ul>
<li>リンパ管の始まりの部分にある<strong>すき間のある薄い壁</strong>。組織液が容易に入れます。</li>
<li>リンパ管の<strong>弁 (valves)</strong>。逆流を防ぎ、リンパ液が一方向にしか動かないようにします（静脈と同じく、周りの筋肉が圧迫することで進みます）。</li>
<li><strong>リンパ液が血液循環へ戻ること。</strong>リンパ管は合流して心臓の近くの静脈に注ぎ込むので、液体は血液へ戻ります。</li>
</ul>
<p>この排出がなければ、液体が組織にたまり、むくみが起こります。</p>`,
        `<p>並非所有離開微血管的組織液都回流入微血管。<strong>多餘的組織液</strong>會流入<strong>淋巴管 (lymph ducts)</strong>，其中的液體稱為<strong>淋巴 (lymph)</strong>。課程指引把範圍限於以下特徵：</p>
<ul>
<li>淋巴管起始部分的<strong>薄壁及壁上的空隙</strong>，使組織液容易進入。</li>
<li>淋巴管中的<strong>瓣膜 (valves)</strong>，防止倒流，使淋巴只向一個方向流動（像靜脈一樣，靠周圍肌肉擠壓前進）。</li>
<li><strong>淋巴回到血液循環。</strong>淋巴管匯合後注入心臟附近的靜脈，使液體回到血液中。</li>
</ul>
<p>若沒有這種引流，液體會積聚在組織中引致腫脹。</p>`),
      deeper: T("<p><strong>(AHL) Why a second drainage system is needed.</strong> More fluid leaves the capillaries than returns to them. Without a way to remove the extra, tissue fluid would build up and the tissue would swell (this swelling is called oedema).</p>\n<ol><li>Excess tissue fluid enters lymph ducts through their thin walls, which have gaps.</li><li>Inside, the fluid is now called lymph. Surrounding muscles squeeze the ducts as the body moves.</li><li>Valves allow flow in one direction only, so lymph cannot slip backwards.</li><li>The ducts join up and empty into veins close to the heart, returning the fluid to the blood.</li></ol>\n<table><tr><th>Feature</th><th>Lymph duct</th><th>Vein</th></tr>\n<tr><td>Thin wall</td><td>Yes, with gaps at the start so fluid enters easily</td><td>Thin, but no gaps</td></tr>\n<tr><td>Valves</td><td>Yes: stop backflow</td><td>Yes: stop backflow</td></tr>\n<tr><td>What moves the contents</td><td>Squeezing by nearby muscles</td><td>Squeezing by nearby muscles (plus the pressure left over from the heart)</td></tr>\n<tr><td>Contents end up in</td><td>The blood circulation (large veins near the heart)</td><td>The heart</td></tr></table>\n<div class=\"note\"><strong>Typical 3-mark answer:</strong> Excess tissue fluid drains into lymph ducts (1) through thin walls with gaps (1); valves prevent backflow and the lymph returns to the blood in veins near the heart (1). You do not need the immune role of lymph nodes here.</div>", "<p><strong>(AHL) 第2の排出系が必要な理由。</strong>毛細血管から出る液体のほうが、戻る液体より多くなります。余分を取り除く方法がなければ、組織液がたまって組織が腫れてしまいます（このむくみを浮腫 oedema といいます）。</p>\n<ol><li>余分な組織液が、隙間のある薄い壁を通ってリンパ管に入る。</li><li>中の液体はリンパ (lymph) と呼ばれる。体を動かすと周りの筋肉がリンパ管を圧迫する。</li><li>弁が一方向の流れだけを許すので、リンパは逆戻りしない。</li><li>リンパ管は合流し、心臓近くの静脈に注いで、液体を血液へ戻す。</li></ol>\n<table><tr><th>特徴</th><th>リンパ管</th><th>静脈</th></tr>\n<tr><td>薄い壁</td><td>あり。始まりに隙間があり液体が入りやすい</td><td>薄いが隙間はない</td></tr>\n<tr><td>弁</td><td>あり: 逆流を防ぐ</td><td>あり: 逆流を防ぐ</td></tr>\n<tr><td>中身を動かすもの</td><td>近くの筋肉による圧迫</td><td>近くの筋肉による圧迫（と心臓から残った圧力）</td></tr>\n<tr><td>中身の行き先</td><td>血液循環（心臓近くの大きな静脈）</td><td>心臓</td></tr></table>\n<div class=\"note\"><strong>3点解答の例:</strong>余分な組織液がリンパ管に排出される (1)、隙間のある薄い壁を通る (1)、弁が逆流を防ぎ、リンパは心臓近くの静脈で血液に戻る (1)。ここでリンパ節の免疫の働きは不要です。</div>", "<p><strong>(AHL) 為何需要第二個引流系統。</strong>離開微血管的液體比回流的多。若沒有方法清走多餘的液體，組織液會積聚，組織便會腫脹（這種腫脹稱為水腫 oedema）。</p>\n<ol><li>多餘的組織液穿過有缺口的薄壁，進入淋巴管。</li><li>管內的液體稱為淋巴 (lymph)。身體活動時，周圍的肌肉會擠壓淋巴管。</li><li>瓣膜只容許單向流動，淋巴不會倒退。</li><li>淋巴管匯合，注入靠近心臟的靜脈，把液體送回血液。</li></ol>\n<table><tr><th>特徵</th><th>淋巴管</th><th>靜脈</th></tr>\n<tr><td>薄壁</td><td>有，起始處有缺口，液體易進入</td><td>薄，但沒有缺口</td></tr>\n<tr><td>瓣膜</td><td>有：防止倒流</td><td>有：防止倒流</td></tr>\n<tr><td>推動內容物的力</td><td>附近肌肉的擠壓</td><td>附近肌肉的擠壓（加上心臟留下的壓力）</td></tr>\n<tr><td>內容物最終去向</td><td>血液循環（靠近心臟的大靜脈）</td><td>心臟</td></tr></table>\n<div class=\"note\"><strong>典型3分答案：</strong>多餘組織液排入淋巴管 (1)，經過有缺口的薄壁 (1)；瓣膜防止倒流，淋巴在靠近心臟的靜脈回到血液 (1)。這裏不需要淋巴結的免疫作用。</div>")
    },
    {
      ref: "B3.2.14",
      ahl: true,
      heading: T("Single circulation of bony fish and double circulation of mammals", "硬骨魚の単循環と哺乳類の二重循環", "硬骨魚的單循環與哺乳動物的雙循環"),
      body: T(
        `<p>Simple circuit diagrams are enough. Follow the arrows.</p>
<p><strong>Bony fish: single circulation</strong> (blood passes through the heart <em>once</em> in each complete circuit)</p>
<p style="text-align:center"><strong>Heart → gills → body organs → back to heart</strong></p>
<p>Blood is pumped by the heart to the gill capillaries, where it picks up oxygen. It loses pressure in the narrow gill capillaries. It then flows on to the body at lower pressure, so it moves more slowly to the tissues.</p>
<p><strong>Mammals: double circulation</strong> (blood passes through the heart <em>twice</em> in each complete circuit)</p>
<p style="text-align:center"><strong>Right side of heart → lungs → left side of heart → body organs → right side of heart</strong></p>
<ul>
<li>The <strong>pulmonary circulation</strong> carries blood from the heart to the lungs and back. The right side of the heart pumps the blood to the lungs at moderate pressure, which suits the delicate lung capillaries.</li>
<li>The <strong>systemic circulation</strong> carries blood from the heart to the rest of the body and back. The left side pumps blood to the body at high pressure.</li>
</ul>
<p><strong>Advantage of double circulation:</strong> blood returns to the heart after the lungs and is pumped again, so it reaches the body at a higher pressure and flows faster. Oxygenated and deoxygenated blood are kept separate.</p>`,
        `<p>簡単な循環図で十分です。矢印をたどりましょう。</p>
<p><strong>硬骨魚：単循環 (single circulation)</strong>（完全な1周で、血液は心臓を<em>1回</em>通る）</p>
<p style="text-align:center"><strong>心臓 → えら → 体の器官 → 心臓へ戻る</strong></p>
<p>血液は心臓からえらの毛細血管へ送られ、そこで酸素を受け取ります。細いえらの毛細血管で圧力が下がります。そのあと体へ低い圧力で流れるので、組織へはより遅く進みます。</p>
<p><strong>哺乳類：二重循環 (double circulation)</strong>（完全な1周で、血液は心臓を<em>2回</em>通る）</p>
<p style="text-align:center"><strong>心臓の右側 → 肺 → 心臓の左側 → 体の器官 → 心臓の右側</strong></p>
<ul>
<li><strong>肺循環 (pulmonary circulation)</strong> は、血液を心臓から肺へ、そして戻します。心臓の右側は、繊細な肺の毛細血管に適した中程度の圧力で血液を肺へ送ります。</li>
<li><strong>体循環 (systemic circulation)</strong> は、血液を心臓から体のほかの部分へ、そして戻します。左側は高い圧力で血液を体へ送ります。</li>
</ul>
<p><strong>二重循環の利点：</strong>血液は肺を通ったあと心臓に戻って再び送り出されるので、より高い圧力で体に届き、より速く流れます。酸素の多い血液と少ない血液も分けられます。</p>`,
        `<p>簡單的循環圖已足夠。跟隨箭咀方向。</p>
<p><strong>硬骨魚：單循環 (single circulation)</strong>（每完整一圈，血液只通過心臟<em>一次</em>）</p>
<p style="text-align:center"><strong>心臟 → 鰓 → 身體器官 → 返回心臟</strong></p>
<p>血液由心臟泵到鰓的微血管，在那裏吸收氧氣。血液在狹窄的鰓微血管中壓力下降，然後以較低壓力流向身體，所以流向組織的速度較慢。</p>
<p><strong>哺乳動物：雙循環 (double circulation)</strong>（每完整一圈，血液通過心臟<em>兩次</em>）</p>
<p style="text-align:center"><strong>心臟右側 → 肺 → 心臟左側 → 身體器官 → 心臟右側</strong></p>
<ul>
<li><strong>肺循環 (pulmonary circulation)</strong> 把血液由心臟運到肺再運回。心臟右側以適中的壓力把血液泵到肺，這適合幼細的肺微血管。</li>
<li><strong>體循環 (systemic circulation)</strong> 把血液由心臟運到身體其他部分再運回。左側以高壓把血液泵到全身。</li>
</ul>
<p><strong>雙循環的好處：</strong>血液在經過肺之後回到心臟再被泵出，所以以較高壓力到達身體，流動較快。含氧和缺氧的血液也保持分開。</p>`),
      deeper: T("<p><strong>(AHL) Trace the circuits and the pressures.</strong></p>\n<table><tr><th></th><th>Bony fish (single)</th><th>Mammal (double)</th></tr>\n<tr><td>Path</td><td>Heart → gill capillaries → body capillaries → heart</td><td>Heart (right) → lung capillaries → heart (left) → body capillaries → heart (right)</td></tr>\n<tr><td>Passes through the heart per circuit</td><td>Once</td><td>Twice</td></tr>\n<tr><td>Pressure falls in capillaries</td><td>Once, in the gills, so blood reaches the body at low pressure</td><td>Twice, but the heart boosts the pressure again after the lungs</td></tr>\n<tr><td>Speed of blood to the body</td><td>Slower</td><td>Faster</td></tr>\n<tr><td>Oxygenated and deoxygenated blood</td><td>Kept apart: blood in the heart is deoxygenated</td><td>Kept apart by the septum</td></tr></table>\n<p><strong>Why it matters.</strong> Mammals keep their bodies warm and have a high demand for oxygen and glucose, so delivering blood quickly at high pressure suits them. The lungs, however, have delicate, thin-walled capillaries that would be damaged by high pressure. Double circulation solves both problems: the right side pumps at modest pressure to the lungs and the left side at high pressure to the body.</p>\n<div class=\"note\"><strong>Outline of a 4-mark answer (\"Compare\"/\"Distinguish\"):</strong> state single vs double (1); the route in each (1); pressure in gills falls so slower flow in fish (1); mammals re-pump after the lungs so higher pressure and faster delivery (1). Use \"whereas\" to make comparisons.</div>", "<p><strong>(AHL) 回路と圧力をたどる。</strong></p>\n<table><tr><th></th><th>硬骨魚類（単循環）</th><th>哺乳類（二重循環）</th></tr>\n<tr><td>経路</td><td>心臓 → えらの毛細血管 → 体の毛細血管 → 心臓</td><td>心臓（右）→ 肺の毛細血管 → 心臓（左）→ 体の毛細血管 → 心臓（右）</td></tr>\n<tr><td>1周で心臓を通る回数</td><td>1回</td><td>2回</td></tr>\n<tr><td>毛細血管で圧力が下がる回数</td><td>1回（えら）。体には低い圧力で届く</td><td>2回。ただし肺の後に心臓が圧力を再び上げる</td></tr>\n<tr><td>体への血流の速さ</td><td>遅い</td><td>速い</td></tr>\n<tr><td>酸素の多い血液と少ない血液</td><td>分かれている: 心臓内の血液は酸素が少ない</td><td>中隔によって分かれている</td></tr></table>\n<p><strong>なぜ重要か。</strong>哺乳類は体温を保ち、酸素とブドウ糖の需要が大きいので、血液を高い圧力で速く届けることが向いています。一方、肺の毛細血管は薄くて繊細で、高い圧力では傷みます。二重循環は両方の問題を解決します。右側は肺へ控えめな圧力で、左側は体へ高い圧力で送ります。</p>\n<div class=\"note\"><strong>4点解答（「Compare」「Distinguish」）の骨組み:</strong>単循環と二重循環を述べる (1)、それぞれの経路 (1)、魚はえらで圧力が下がるので血流が遅い (1)、哺乳類は肺の後に再度ポンプで送るので圧力が高く速く届く (1)。比較には「whereas」を使いましょう。</div>", "<p><strong>(AHL) 追蹤迴路和壓力。</strong></p>\n<table><tr><th></th><th>硬骨魚（單循環）</th><th>哺乳類（雙循環）</th></tr>\n<tr><td>路徑</td><td>心臟 → 鰓的微血管 → 身體微血管 → 心臟</td><td>心臟（右）→ 肺的微血管 → 心臟（左）→ 身體微血管 → 心臟（右）</td></tr>\n<tr><td>每一圈經過心臟的次數</td><td>一次</td><td>兩次</td></tr>\n<tr><td>微血管中壓力下降</td><td>一次（鰓），所以血液以低壓到達身體</td><td>兩次，但離開肺後心臟再度加壓</td></tr>\n<tr><td>血液到達身體的速度</td><td>較慢</td><td>較快</td></tr>\n<tr><td>含氧血與缺氧血</td><td>分開：心臟內是缺氧血</td><td>由心室間隔分開</td></tr></table>\n<p><strong>為何重要。</strong>哺乳類保持體溫，對氧和葡萄糖的需求大，所以以高壓快速輸送血液很合適。但肺的微血管薄而脆弱，高壓會損壞它們。雙循環解決了這兩個問題：右側以適中的壓力泵血到肺，左側以高壓泵血到身體。</p>\n<div class=\"note\"><strong>4分答案（「Compare」「Distinguish」）的骨架：</strong>指出單循環與雙循環 (1)；各自的路線 (1)；魚的血壓在鰓中下降，所以流速較慢 (1)；哺乳類在肺之後再泵一次，壓力較高，輸送較快 (1)。比較時用「whereas」。</div>")
    },
    {
      ref: "B3.2.15",
      ahl: true,
      heading: T("The mammalian heart: structure and function", "哺乳類の心臓：構造と機能", "哺乳動物心臟：結構與功能"),
      body: T(
        `<p>The heart delivers pressurized blood to the arteries. The guide asks for the form–function adaptations of these structures. On a diagram of the heart in the <strong>frontal plane</strong> (as if the person is facing you), the person's left side of the heart is on <em>your right</em>.</p>
<table>
<tr><th>Structure</th><th>Form and function</th></tr>
<tr><td><strong>Cardiac muscle</strong></td><td>Walls are made of cardiac muscle cells, which contract on their own regularly (myogenic) and do not tire. They contract to squeeze blood out.</td></tr>
<tr><td><strong>Pacemaker</strong> (sinoatrial node, SA node)</td><td>A small patch of special cardiac muscle cells in the wall of the right atrium that starts each heartbeat by sending out a wave of electrical signals. It sets the heart rate.</td></tr>
<tr><td><strong>Atria</strong> (singular atrium)</td><td>Two upper chambers with thin walls that receive blood from veins and pass it to the ventricles.</td></tr>
<tr><td><strong>Ventricles</strong></td><td>Two lower chambers with thick muscular walls that pump blood out into arteries. The left ventricle wall is thicker than the right, because it pumps blood at higher pressure all around the body; the right ventricle pumps blood only to the nearby lungs.</td></tr>
<tr><td><strong>Atrioventricular (AV) valves</strong></td><td>Between each atrium and ventricle. They open when blood flows from atrium to ventricle and close when the ventricle contracts, preventing backflow into the atria.</td></tr>
<tr><td><strong>Semilunar valves</strong></td><td>At the start of the aorta and pulmonary artery. They open when the ventricle contracts and close when it relaxes, preventing blood from flowing back into the ventricles.</td></tr>
<tr><td><strong>Septum</strong></td><td>The muscular wall between the left and right sides. It keeps oxygenated and deoxygenated blood separate.</td></tr>
<tr><td><strong>Coronary vessels</strong></td><td>Arteries (and veins) on the surface of the heart that supply the cardiac muscle with oxygen and nutrients and remove wastes (see B3.2.6).</td></tr>
</table>
<p><strong>Flow of blood (unidirectional):</strong> vena cava (a vein from the body) → right atrium → right (AV) valve → right ventricle → semilunar valve → pulmonary artery → lungs → pulmonary vein → left atrium → left (AV) valve → left ventricle → semilunar valve → aorta → body → vena cava.</p>
<p>Use the interactive heart below to practise identifying the parts.</p>`,
        `<p>心臓は加圧した血液を動脈に送ります。ガイドは、次の構造の形と機能の適応を求めています。<strong>前頭面 (frontal plane)</strong> の心臓の図（その人が自分のほうを向いているように描いたもの）では、その人の心臓の左側は<em>あなたから見て右</em>にあります。</p>
<table>
<tr><th>構造</th><th>形と機能</th></tr>
<tr><td><strong>心筋 (cardiac muscle)</strong></td><td>壁は心筋細胞でできており、規則的に自分で収縮し（筋原性）、疲れません。収縮して血液を絞り出します。</td></tr>
<tr><td><strong>ペースメーカー (pacemaker)</strong>（洞房結節 sinoatrial node, SA node）</td><td>右心房の壁にある特殊な心筋細胞の小さな領域で、電気信号の波を出して各拍動を始めます。心拍数を決めます。</td></tr>
<tr><td><strong>心房 (atria)</strong>（単数 atrium）</td><td>壁の薄い2つの上の部屋で、静脈から血液を受け取り、心室へ送ります。</td></tr>
<tr><td><strong>心室 (ventricles)</strong></td><td>壁が厚く筋肉質の2つの下の部屋で、血液を動脈へ送り出します。左心室の壁は右心室より厚く、全身へ高い圧力で血液を送るからです。右心室は近くの肺にだけ血液を送ります。</td></tr>
<tr><td><strong>房室弁 (atrioventricular valves)</strong></td><td>各心房と心室の間にあります。血液が心房から心室へ流れるときは開き、心室が収縮すると閉じて、心房への逆流を防ぎます。</td></tr>
<tr><td><strong>半月弁 (semilunar valves)</strong></td><td>大動脈と肺動脈の始まりにあります。心室が収縮すると開き、ゆるむと閉じて、血液が心室へ逆流するのを防ぎます。</td></tr>
<tr><td><strong>中隔 (septum)</strong></td><td>左右の間の筋肉質の壁。酸素の多い血液と少ない血液を分けます。</td></tr>
<tr><td><strong>冠血管 (coronary vessels)</strong></td><td>心臓の表面にある動脈（と静脈）で、心筋に酸素と栄養分を供給し、老廃物を運び去ります（B3.2.6を参照）。</td></tr>
</table>
<p><strong>血液の流れ（一方向）：</strong>大静脈 (vena cava)（体からの静脈）→ 右心房 → 右の房室弁 → 右心室 → 半月弁 → 肺動脈 → 肺 → 肺静脈 → 左心房 → 左の房室弁 → 左心室 → 半月弁 → 大動脈 (aorta) → 体 → 大静脈。</p>
<p>下のインタラクティブな心臓で、各部分の見分け方を練習しましょう。</p>`,
        `<p>心臟把加壓的血液輸送到動脈。課程指引要求認識下列結構的形態與功能適應。在<strong>冠狀面 (frontal plane)</strong> 的心臟圖（假設該人面向你）中，該人心臟的左側在<em>你的右方</em>。</p>
<table>
<tr><th>結構</th><th>形態與功能</th></tr>
<tr><td><strong>心肌 (cardiac muscle)</strong></td><td>壁由心肌細胞組成，能自行有規律地收縮（肌源性），而且不會疲勞。收縮時把血液擠出。</td></tr>
<tr><td><strong>起搏點 (pacemaker)</strong>（竇房結 sinoatrial node, SA node）</td><td>右心房壁上一小片特化的心肌細胞，發出電信號波來啟動每次心跳，決定心率。</td></tr>
<tr><td><strong>心房 (atria)</strong>（單數 atrium）</td><td>兩個壁薄的上部腔室，接收來自靜脈的血液並傳給心室。</td></tr>
<tr><td><strong>心室 (ventricles)</strong></td><td>兩個壁厚而肌肉發達的下部腔室，把血液泵入動脈。左心室壁比右心室厚，因為它以較高壓力把血液泵到全身；右心室只把血液泵到附近的肺。</td></tr>
<tr><td><strong>房室瓣 (atrioventricular valves)</strong></td><td>位於每個心房與心室之間。血液由心房流入心室時張開，心室收縮時關閉，防止血液倒流回心房。</td></tr>
<tr><td><strong>半月瓣 (semilunar valves)</strong></td><td>位於主動脈和肺動脈的起始處。心室收縮時張開，放鬆時關閉，防止血液回流入心室。</td></tr>
<tr><td><strong>室間隔 (septum)</strong></td><td>左右兩側之間的肌肉壁，使含氧和缺氧的血液保持分開。</td></tr>
<tr><td><strong>冠狀血管 (coronary vessels)</strong></td><td>心臟表面的動脈（及靜脈），為心肌提供氧氣和營養物並移走廢物（見B3.2.6）。</td></tr>
</table>
<p><strong>血液流向（單向）：</strong>腔靜脈 (vena cava)（來自身體的靜脈）→ 右心房 → 右房室瓣 → 右心室 → 半月瓣 → 肺動脈 → 肺 → 肺靜脈 → 左心房 → 左房室瓣 → 左心室 → 半月瓣 → 主動脈 (aorta) → 身體 → 腔靜脈。</p>
<p>使用下面的互動心臟圖來練習辨認各部分。</p>`),
      widget: "heart-structure",
      deeper: T("<p><strong>(AHL) Form fits function: the numbers.</strong> Typical peak pressures (illustrative): right ventricle about 25 mmHg, left ventricle about 120 mmHg. The left ventricle has the thicker wall because it must generate far higher pressure to push blood around the whole body, while the right only has to reach the nearby lungs. The atria have thin walls because they only push blood a short distance into the ventricles.</p>\n<table><tr><th>Valve</th><th>Position</th><th>Opens when</th><th>Closes when</th></tr>\n<tr><td>Atrioventricular (AV)</td><td>Between atrium and ventricle</td><td>Atrial pressure is higher than ventricular pressure</td><td>Ventricular pressure rises above atrial pressure</td></tr>\n<tr><td>Semilunar</td><td>Between ventricle and artery</td><td>Ventricular pressure is higher than arterial pressure</td><td>Arterial pressure is higher than ventricular pressure</td></tr></table>\n<p><strong>Tracing the route for a 4-mark answer.</strong> Give the full order and include the valves and the lungs: vena cava → right atrium → AV valve → right ventricle → semilunar valve → pulmonary artery → lungs → pulmonary vein → left atrium → AV valve → left ventricle → semilunar valve → aorta.</p>\n<ul><li>Septum: stops mixing of oxygenated and deoxygenated blood.</li><li>Coronary vessels: the heart's own supply (link to B3.2.6).</li><li>Pacemaker (SA node): in the wall of the right atrium; makes the beat start, so the heart is \"myogenic\".</li></ul>\n<div class=\"note\"><strong>On diagrams:</strong> the left of the heart appears on the <em>right</em> of the page. Veins bring blood to atria; arteries leave from ventricles.</div>", "<p><strong>(AHL) 形と働きの一致: 数値で見る。</strong>最大圧力の目安（説明用）: 右心室は約25 mmHg、左心室は約120 mmHg。左心室の壁が厚いのは、全身へ血液を送るためにはるかに高い圧力を生み出す必要があるからで、右心室は近くの肺に届けばよいのです。心房の壁が薄いのは、血液を心室へ短い距離だけ押せばよいからです。</p>\n<table><tr><th>弁</th><th>位置</th><th>開くとき</th><th>閉じるとき</th></tr>\n<tr><td>房室弁 (AV)</td><td>心房と心室の間</td><td>心房の圧力が心室の圧力より高いとき</td><td>心室の圧力が心房の圧力を上回ったとき</td></tr>\n<tr><td>半月弁 (semilunar)</td><td>心室と動脈の間</td><td>心室の圧力が動脈の圧力より高いとき</td><td>動脈の圧力が心室の圧力より高いとき</td></tr></table>\n<p><strong>4点解答のための経路のたどり方。</strong>順番を全部書き、弁と肺も入れます: 大静脈 → 右心房 → 房室弁 → 右心室 → 半月弁 → 肺動脈 → 肺 → 肺静脈 → 左心房 → 房室弁 → 左心室 → 半月弁 → 大動脈。</p>\n<ul><li>中隔 (septum): 酸素の多い血液と少ない血液が混ざるのを防ぐ。</li><li>冠血管: 心臓自身への血液供給（B3.2.6とつながる）。</li><li>ペースメーカー（洞房結節 SA node）: 右心房の壁にあり、拍動を始める。心臓は「筋原性 (myogenic)」。</li></ul>\n<div class=\"note\"><strong>図について:</strong>心臓の左側は紙面の<em>右</em>に描かれます。静脈は血液を心房へ運び、動脈は心室から出ます。</div>", "<p><strong>(AHL) 形態與功能配合：看數字。</strong>典型的峰值壓力（示意）：右心室約25 mmHg，左心室約120 mmHg。左心室壁較厚，因為要產生高得多的壓力把血液泵到全身；右心室只需把血液送到附近的肺。心房壁薄，因為只需把血液推進心室，距離很短。</p>\n<table><tr><th>瓣膜</th><th>位置</th><th>張開時</th><th>關閉時</th></tr>\n<tr><td>房室瓣 (AV)</td><td>心房與心室之間</td><td>心房壓力高於心室壓力</td><td>心室壓力升至高於心房壓力</td></tr>\n<tr><td>半月瓣 (semilunar)</td><td>心室與動脈之間</td><td>心室壓力高於動脈壓力</td><td>動脈壓力高於心室壓力</td></tr></table>\n<p><strong>為4分答案描述路線。</strong>要寫出完整次序，並包括瓣膜和肺：腔靜脈 → 右心房 → 房室瓣 → 右心室 → 半月瓣 → 肺動脈 → 肺 → 肺靜脈 → 左心房 → 房室瓣 → 左心室 → 半月瓣 → 主動脈。</p>\n<ul><li>心室間隔 (septum)：防止含氧血和缺氧血混合。</li><li>冠狀血管：心臟自身的血液供應（連繫B3.2.6）。</li><li>起搏點（竇房結 SA node）：位於右心房壁，啟動心跳，所以心臟是「肌源性 (myogenic)」的。</li></ul>\n<div class=\"note\"><strong>關於圖：</strong>心臟的左側畫在紙面的<em>右邊</em>。靜脈把血液帶進心房；動脈從心室發出。</div>")
    },
    {
      ref: "B3.2.16",
      ahl: true,
      heading: T("Stages in the cardiac cycle", "心周期の段階", "心動週期的各階段"),
      body: T(
        `<p>The <strong>cardiac cycle</strong> is the sequence of events in one heartbeat. The guide asks you to understand the events in the <strong>left side of the heart</strong> after the sinoatrial (SA) node starts the heartbeat. <strong>Systole</strong> means contraction. <strong>Diastole</strong> means relaxation. One cycle lasts about 0.8 seconds at rest (about 75 beats per minute).</p>
<ol>
<li><strong>Atrial systole.</strong> The SA node sends a wave of electrical signals across the walls of the atria. The atria contract and push the last of the blood into the ventricle. The AV valve is open; the semilunar valve is closed.</li>
<li><strong>Ventricular systole.</strong> After a short delay, the signal reaches the ventricles and they contract. The pressure in the ventricle rises above the pressure in the atrium, so the <strong>AV valve closes</strong>. When the ventricular pressure rises above the pressure in the aorta, the <strong>semilunar valve opens</strong> and blood is forced out into the aorta.</li>
<li><strong>Diastole.</strong> The ventricle relaxes and its pressure falls below the aortic pressure, so the <strong>semilunar valve closes</strong> and stops blood flowing back. When the ventricular pressure falls below the atrial pressure, the <strong>AV valve opens</strong> and blood flows from the atrium (filled from the pulmonary veins) into the ventricle.</li>
</ol>
<p>Valves open and close because of <em>differences in pressure</em>: blood flows from high to low pressure, and a valve closes when pressure pushes against it from the wrong side.</p>
<p><strong>Blood pressure.</strong> <strong>Systolic pressure</strong> is the highest pressure in the arteries, during ventricular systole. <strong>Diastolic pressure</strong> is the lowest, during diastole. A normal resting adult reading is about 120/80 mmHg (systolic/diastolic). You should be able to <strong>interpret systolic and diastolic blood pressure from data and graphs</strong>.</p>
<p>The widget shows the stages together with the pressure graph. The values are illustrative.</p>`,
        `<p><strong>心周期 (cardiac cycle)</strong> は、1回の拍動で起こる一連の出来事です。ガイドは、洞房結節 (SA node) が拍動を始めたあとの<strong>心臓の左側</strong>で起こることを理解するよう求めています。<strong>収縮期 (systole)</strong> は収縮、<strong>拡張期 (diastole)</strong> は弛緩を意味します。安静時の1周期は約0.8秒（1分間に約75拍）です。</p>
<ol>
<li><strong>心房収縮期 (atrial systole)。</strong>洞房結節が電気信号の波を心房の壁に送ります。心房が収縮し、残りの血液を心室へ押し込みます。房室弁は開き、半月弁は閉じています。</li>
<li><strong>心室収縮期 (ventricular systole)。</strong>短い遅れののち、信号が心室に届いて心室が収縮します。心室内の圧力が心房の圧力を上回るので、<strong>房室弁が閉じます</strong>。心室の圧力が大動脈の圧力を上回ると、<strong>半月弁が開き</strong>、血液が大動脈へ押し出されます。</li>
<li><strong>拡張期 (diastole)。</strong>心室がゆるみ、圧力が大動脈の圧力を下回るので、<strong>半月弁が閉じ</strong>て血液の逆流を止めます。心室の圧力が心房の圧力を下回ると、<strong>房室弁が開き</strong>、血液が心房（肺静脈から満たされる）から心室へ流れます。</li>
</ol>
<p>弁が開閉するのは<em>圧力の差</em>によります。血液は高圧から低圧へ流れ、弁は誤った側から圧力がかかると閉じます。</p>
<p><strong>血圧 (blood pressure)。</strong><strong>収縮期血圧 (systolic pressure)</strong> は、心室収縮期の動脈内の最も高い圧力です。<strong>拡張期血圧 (diastolic pressure)</strong> は、拡張期の最も低い圧力です。安静時の健康な成人の正常値は約120/80 mmHg（収縮期/拡張期）です。データやグラフから<strong>収縮期血圧と拡張期血圧を読み取って解釈</strong>できる必要があります。</p>
<p>ウィジェットは、各段階と圧力のグラフを一緒に示します。値はイラスト用です。</p>`,
        `<p><strong>心動週期 (cardiac cycle)</strong> 是一次心跳中的一連串事件。課程指引要求你了解竇房結 (SA node) 啟動心跳後，<strong>心臟左側</strong>發生的事件。<strong>收縮期 (systole)</strong> 指收縮，<strong>舒張期 (diastole)</strong> 指鬆弛。靜止時一個週期約0.8秒（每分鐘約75次心跳）。</p>
<ol>
<li><strong>心房收縮期 (atrial systole)。</strong>竇房結把電信號波傳過心房壁，心房收縮，把最後的血液推入心室。房室瓣張開；半月瓣關閉。</li>
<li><strong>心室收縮期 (ventricular systole)。</strong>短暫延遲後，信號到達心室，心室收縮。心室內壓力升至高於心房壓力，所以<strong>房室瓣關閉</strong>。當心室壓力高於主動脈壓力時，<strong>半月瓣張開</strong>，血液被迫進入主動脈。</li>
<li><strong>舒張期 (diastole)。</strong>心室放鬆，壓力降至低於主動脈壓力，所以<strong>半月瓣關閉</strong>，阻止血液倒流。當心室壓力低於心房壓力時，<strong>房室瓣張開</strong>，血液由心房（由肺靜脈注滿）流入心室。</li>
</ol>
<p>瓣膜因<em>壓力差</em>而開合：血液由高壓流向低壓，當壓力從錯誤的一側推向瓣膜時，瓣膜便關閉。</p>
<p><strong>血壓 (blood pressure)。</strong><strong>收縮壓 (systolic pressure)</strong> 是心室收縮期動脈中的最高壓力。<strong>舒張壓 (diastolic pressure)</strong> 是舒張期的最低壓力。靜止的正常成年人讀數約為120/80 mmHg（收縮壓／舒張壓）。你應能<strong>從數據和圖表解讀收縮壓和舒張壓</strong>。</p>
<p>小工具把各階段與壓力圖一同顯示。數值為示範數據。</p>`),
      widget: "heart-beat",
      examTip: T(
        "When a data question gives pressure curves, a valve opens or closes at the point where two curves cross. Name the two chambers or vessels being compared and say which pressure is higher.",
        "データ問題で圧力曲線が出たら、弁は2つの曲線が交わる点で開閉します。比べている2つの部屋や血管の名前を挙げ、どちらの圧力が高いかを述べましょう。",
        "數據題給出壓力曲線時，瓣膜在兩條曲線相交的位置開合。要說出所比較的兩個腔室或血管，並指出哪一個壓力較高。"),
      deeper: T("<p><strong>(AHL) A timeline for the left side.</strong></p>\n<table><tr><th>Phase</th><th>AV valve</th><th>Semilunar valve</th><th>Key pressure fact</th></tr>\n<tr><td>Atrial systole</td><td>Open</td><td>Closed</td><td>Atrium slightly higher than ventricle; tops up the ventricle</td></tr>\n<tr><td>Early ventricular systole</td><td>Closes</td><td>Still closed</td><td>Ventricular pressure rises above atrial pressure but is still below aortic pressure, so <strong>both valves are closed</strong></td></tr>\n<tr><td>Later ventricular systole</td><td>Closed</td><td>Opens</td><td>Ventricular pressure exceeds aortic pressure; blood is ejected</td></tr>\n<tr><td>Diastole</td><td>Closed, then opens</td><td>Closes, stays closed</td><td>Ventricular pressure falls below aortic (semilunar closes), then below atrial (AV opens)</td></tr></table>\n<p>Most of the ventricle fills during diastole, passively, as blood flows in from the atrium; atrial systole adds the last part.</p>\n<p><strong>Reading data.</strong> Check which of the two pressures is higher at that time. Higher upstream pressure → valve open. Higher downstream pressure → valve closed. If the ventricular pressure is between the atrial and the aortic pressure, both valves are shut.</p>\n<p><strong>Heart rate from the cycle.</strong> Heart rate = 60 ÷ length of one cycle in seconds. A cycle of 0.8 s gives 60 ÷ 0.8 = 75 beats per minute; 0.6 s gives 100.</p>\n<div class=\"note\"><strong>Mark-scheme language:</strong> \"AV valve closes when ventricular pressure exceeds atrial pressure, preventing backflow\"; \"semilunar valve opens when ventricular pressure exceeds aortic pressure\". Always name both compared pressures.</div>", "<p><strong>(AHL) 左側のタイムライン。</strong></p>\n<table><tr><th>段階</th><th>房室弁</th><th>半月弁</th><th>圧力のポイント</th></tr>\n<tr><td>心房収縮期</td><td>開</td><td>閉</td><td>心房が心室よりわずかに高い。心室に血液を追加で送り込む</td></tr>\n<tr><td>心室収縮期の初め</td><td>閉じる</td><td>まだ閉</td><td>心室の圧力は心房より高くなるが、まだ大動脈より低いので<strong>両方の弁が閉じている</strong></td></tr>\n<tr><td>心室収縮期の後半</td><td>閉</td><td>開く</td><td>心室の圧力が大動脈より高くなり、血液が押し出される</td></tr>\n<tr><td>拡張期</td><td>閉、のち開く</td><td>閉じ、閉のまま</td><td>心室の圧力が大動脈より下がり（半月弁が閉じる）、次に心房より下がる（房室弁が開く）</td></tr></table>\n<p>心室の大部分は拡張期に、心房から血液が流れ込んで受動的に満たされます。心房収縮期は最後の部分を足します。</p>\n<p><strong>データの読み方。</strong>そのときどちらの圧力が高いかを確かめます。上流の圧力が高い → 弁は開。下流の圧力が高い → 弁は閉。心室の圧力が心房と大動脈の中間なら、両方の弁が閉じています。</p>\n<p><strong>心周期から心拍数を求める。</strong>心拍数 = 60 ÷ 1周期の秒数。0.8秒なら 60 ÷ 0.8 = 75拍/分、0.6秒なら100拍/分。</p>\n<div class=\"note\"><strong>採点基準の書き方:</strong>「心室の圧力が心房の圧力を上回ると房室弁が閉じ、逆流を防ぐ」「心室の圧力が大動脈の圧力を上回ると半月弁が開く」。比べている2つの圧力を必ず書きましょう。</div>", "<p><strong>(AHL) 左側的時間線。</strong></p>\n<table><tr><th>階段</th><th>房室瓣</th><th>半月瓣</th><th>壓力要點</th></tr>\n<tr><td>心房收縮期</td><td>張開</td><td>關閉</td><td>心房壓力略高於心室；把心室再注滿</td></tr>\n<tr><td>心室收縮初期</td><td>關閉</td><td>仍關閉</td><td>心室壓力高於心房壓力，但仍低於主動脈壓力，所以<strong>兩個瓣膜都關閉</strong></td></tr>\n<tr><td>心室收縮後期</td><td>關閉</td><td>張開</td><td>心室壓力超過主動脈壓力，血液被射出</td></tr>\n<tr><td>舒張期</td><td>關閉，其後張開</td><td>關閉並保持關閉</td><td>心室壓力降至低於主動脈壓力（半月瓣關閉），再降至低於心房壓力（房室瓣張開）</td></tr></table>\n<p>心室大部分在舒張期被動地注滿，血液由心房流入；心房收縮期只補上最後一部分。</p>\n<p><strong>閱讀數據。</strong>檢查該時刻兩個壓力哪個較高。上游壓力較高 → 瓣膜張開。下游壓力較高 → 瓣膜關閉。若心室壓力介乎心房與主動脈壓力之間，兩個瓣膜都關閉。</p>\n<p><strong>由心動週期求心率。</strong>心率 = 60 ÷ 一個週期的秒數。週期0.8秒得 60 ÷ 0.8 = 每分鐘75下；0.6秒得100下。</p>\n<div class=\"note\"><strong>評分用語：</strong>「心室壓力超過心房壓力時房室瓣關閉，防止倒流」；「心室壓力超過主動脈壓力時半月瓣張開」。一定要寫出所比較的兩個壓力。</div>")
    },
    {
      ref: "B3.2.17",
      ahl: true,
      heading: T("Root pressure", "根圧", "根壓"),
      body: T(
        `<p>Normally water is pulled up the xylem by transpiration (negative pressure). But there are times when transpiration is too slow to do this. Then plants use <strong>root pressure</strong>.</p>
<ol>
<li>Cells in the root use ATP to <strong>actively transport mineral ions</strong> into the xylem vessels.</li>
<li>The xylem fluid becomes more concentrated in solutes than the surrounding root cells, so water follows into the xylem by <strong>osmosis</strong>.</li>
<li>The extra water creates a <strong>positive pressure</strong> (positive pressure potential) in the xylem, which pushes water up the root and stem.</li>
</ol>
<p><strong>When it matters:</strong> when transport due to transpiration is insufficient, for example</p>
<ul>
<li>when high humidity prevents transpiration, or</li>
<li>in spring, before the leaves on deciduous plants have opened.</li>
</ul>
<p>Root pressure pushes (positive pressure) while transpiration pulls (tension). Root pressure alone cannot lift water to the top of tall trees.</p>`,
        `<p>通常、水は蒸散（負の圧力）によって木部を引き上げられます。しかし、蒸散が遅すぎてそれができないときがあります。そのとき植物は<strong>根圧 (root pressure)</strong> を使います。</p>
<ol>
<li>根の細胞がATPを使って、木部の道管へ<strong>無機イオンを能動輸送</strong>します。</li>
<li>木部の液は周りの根の細胞より溶質が濃くなるので、水が<strong>浸透</strong>によって木部へ入ります。</li>
<li>余分な水が木部に<strong>正の圧力</strong>（正の圧ポテンシャル）をつくり、根と茎を通して水を押し上げます。</li>
</ol>
<p><strong>重要になるとき：</strong>蒸散による輸送が不十分なとき。たとえば</p>
<ul>
<li>湿度が高くて蒸散できないとき、または</li>
<li>春に、落葉性の植物の葉がまだ開いていないとき。</li>
</ul>
<p>根圧は押す力（正の圧力）、蒸散は引く力（張力）です。根圧だけでは、背の高い木のてっぺんまで水を持ち上げることはできません。</p>`,
        `<p>通常，水被蒸騰作用（負壓）沿木質部向上拉。但有些時候蒸騰作用太慢，不足以做到這點，此時植物便利用<strong>根壓 (root pressure)</strong>。</p>
<ol>
<li>根中的細胞利用ATP把礦物離子<strong>主動運輸</strong>入木質部導管。</li>
<li>木質部液體的溶質濃度變得高於周圍的根細胞，所以水藉<strong>滲透</strong>作用跟隨進入木質部。</li>
<li>額外的水在木質部中產生<strong>正壓</strong>（正壓勢），把水沿根和莖向上推。</li>
</ol>
<p><strong>何時重要：</strong>當蒸騰作用引起的運輸不足時，例如</p>
<ul>
<li>高濕度令蒸騰作用無法進行，或</li>
<li>春天，落葉植物的葉尚未展開之前。</li>
</ul>
<p>根壓是推（正壓），蒸騰作用是拉（張力）。單靠根壓不能把水抬到高樹的頂部。</p>`),
      deeper: T("<p><strong>(AHL) Root pressure step by step.</strong></p>\n<ol><li>Root cells use ATP for active transport of mineral ions into the xylem.</li><li>The solute concentration in the xylem fluid becomes higher than in the surrounding root cells (water potential lower).</li><li>Water moves into the xylem by osmosis.</li><li>The extra water builds up a positive pressure that pushes the xylem fluid upwards.</li></ol>\n<table><tr><th></th><th>Transpiration pull</th><th>Root pressure</th></tr>\n<tr><td>Direction of force</td><td>Pull from above (tension, negative pressure)</td><td>Push from below (positive pressure)</td></tr>\n<tr><td>Energy source</td><td>Sun (evaporation); no ATP used by the plant to move water</td><td>ATP used by root cells for active transport of ions</td></tr>\n<tr><td>Where it acts</td><td>Whole column from leaf to root</td><td>Root and lower xylem</td></tr>\n<tr><td>Important when</td><td>Stomata open, light, dry air</td><td>Little transpiration: humid air, or before leaves open</td></tr>\n<tr><td>Can lift water to treetop?</td><td>Yes</td><td>No: it can only help over short distances</td></tr></table>\n<div class=\"note\"><strong>Common error:</strong> writing that roots \"pump water\". Roots pump <em>ions</em> (using ATP); the water follows by osmosis.</div>\n<p><strong>Typical 4-mark \"Compare\" answer:</strong> both move water up the xylem (1); transpiration pulls with negative pressure whereas root pressure pushes with positive pressure (1); root pressure needs ATP, transpiration uses energy from the Sun (1); root pressure matters at low transpiration, transpiration pull is the main force in tall plants (1).</p>", "<p><strong>(AHL) 根圧を順を追って。</strong></p>\n<ol><li>根の細胞がATPを使って、無機イオンを木部へ能動輸送する。</li><li>木部の液の溶質濃度が、周囲の根の細胞より高くなる（水ポテンシャルが低くなる）。</li><li>水が浸透によって木部へ入る。</li><li>増えた水が正の圧力をつくり、木部の液を上へ押す。</li></ol>\n<table><tr><th></th><th>蒸散による引き上げ</th><th>根圧</th></tr>\n<tr><td>力の向き</td><td>上からの引く力（張力、負の圧力）</td><td>下からの押す力（正の圧力）</td></tr>\n<tr><td>エネルギー源</td><td>太陽（蒸発）。水を動かすのに植物はATPを使わない</td><td>根の細胞がイオンの能動輸送にATPを使う</td></tr>\n<tr><td>働く場所</td><td>葉から根までの水の柱全体</td><td>根と木部の下部</td></tr>\n<tr><td>重要になるとき</td><td>気孔が開き、光があり、空気が乾いている</td><td>蒸散が少ないとき: 湿度が高い、葉が開く前</td></tr>\n<tr><td>木のてっぺんまで水を上げられるか</td><td>できる</td><td>できない: 短い距離を助けるだけ</td></tr></table>\n<div class=\"note\"><strong>よくある誤り:</strong>根が「水をポンプで送る」と書くこと。根が送るのは<em>イオン</em>（ATPを使う）で、水は浸透でそれに続きます。</div>\n<p><strong>4点「Compare」解答の例:</strong>どちらも木部で水を上へ運ぶ (1)、蒸散は負の圧力で引くのに対し根圧は正の圧力で押す (1)、根圧はATPが必要だが蒸散は太陽のエネルギーを使う (1)、根圧は蒸散が少ないときに重要で、背の高い植物では蒸散による引き上げが主な力 (1)。</p>", "<p><strong>(AHL) 逐步了解根壓。</strong></p>\n<ol><li>根細胞利用ATP把礦物離子主動運輸入木質部。</li><li>木質部液中的溶質濃度變得高於周圍根細胞（水勢較低）。</li><li>水藉滲透作用進入木質部。</li><li>額外的水產生正壓，把木質部液向上推。</li></ol>\n<table><tr><th></th><th>蒸騰拉力</th><th>根壓</th></tr>\n<tr><td>力的方向</td><td>來自上方的拉力（張力，負壓）</td><td>來自下方的推力（正壓）</td></tr>\n<tr><td>能量來源</td><td>太陽（蒸發）；植物不用ATP移動水</td><td>根細胞利用ATP主動運輸離子</td></tr>\n<tr><td>作用位置</td><td>由葉到根的整條水柱</td><td>根和木質部下段</td></tr>\n<tr><td>何時重要</td><td>氣孔張開、有光、空氣乾燥</td><td>蒸騰作用很弱時：空氣潮濕，或葉未展開前</td></tr>\n<tr><td>能否把水送到樹頂</td><td>能</td><td>不能：只能幫助短距離</td></tr></table>\n<div class=\"note\"><strong>常見錯誤：</strong>寫成根「泵水」。根泵的是<em>離子</em>（用ATP），水藉滲透作用跟隨。</div>\n<p><strong>典型4分「Compare」答案：</strong>兩者都使水在木質部上升 (1)；蒸騰以負壓拉，而根壓以正壓推 (1)；根壓需要ATP，蒸騰則使用太陽能量 (1)；根壓在蒸騰弱時重要，高大植物主要靠蒸騰拉力 (1)。</p>")
    },
    {
      ref: "B3.2.18",
      ahl: true,
      heading: T("Phloem: sieve tubes and companion cells", "師部：師管と伴細胞", "韌皮部：篩管與伴細胞"),
      body: T(
        `<p><strong>Phloem</strong> carries <strong>sap</strong> containing carbon compounds (mainly sucrose) and other substances, such as amino acids, from <strong>sources</strong> to <strong>sinks</strong>. This movement is called <strong>translocation</strong>. A source is where sugars are made or released (for example a mature photosynthesizing leaf). A sink is where they are used or stored (for example growing roots, fruits or storage organs). Phloem has two types of cell that work together.</p>
<p><strong>Sieve tube elements</strong> (the cells that make up the sieve tubes):</p>
<ul>
<li><strong>Sieve plates:</strong> the end walls between neighbouring cells have pores, so sap can flow from one cell to the next.</li>
<li><strong>Reduced cytoplasm and few organelles, and no nucleus:</strong> this leaves more room in the tube and less resistance, so the sap flows more easily.</li>
</ul>
<p><strong>Companion cells</strong> (next to each sieve tube element):</p>
<ul>
<li><strong>Many mitochondria</strong> that make ATP. The ATP is used to <strong>actively load</strong> sucrose into the sieve tubes at sources (and to help unloading at sinks).</li>
<li><strong>Plasmodesmata:</strong> narrow channels of cytoplasm that link the companion cell to the sieve tube element, so substances can pass between them. The companion cell does the metabolic work (including keeping the sieve tube element alive).</li>
</ul>
<p>Together these adaptations ease the flow of sap through the sieve tubes and enhance loading of carbon compounds at sources and unloading at sinks.</p>
<div class="note">Compare: xylem carries water and minerals <em>upwards</em> in dead cells; phloem carries sugars in <em>both directions</em> (source to sink) in living cells.</div>`,
        `<p><strong>師部 (phloem)</strong> は、炭素化合物（おもにスクロース）やアミノ酸などの物質を含む<strong>師管液 (sap)</strong> を、<strong>ソース (source)</strong> から<strong>シンク (sink)</strong> へ運びます。この移動を<strong>転流 (translocation)</strong> と呼びます。ソースは糖がつくられる、または放出される場所（たとえば光合成をしている成熟した葉）です。シンクは糖が使われる、または蓄えられる場所（たとえば成長中の根、果実、貯蔵器官）です。師部には、協力して働く2種類の細胞があります。</p>
<p><strong>師管要素 (sieve tube elements)</strong>（師管をつくる細胞）：</p>
<ul>
<li><strong>師板 (sieve plates)：</strong>隣り合う細胞の間の端壁に孔があり、師管液が細胞から次の細胞へ流れます。</li>
<li><strong>細胞質が少なく、細胞小器官も少なく、核がない：</strong>管の中に余裕ができ、抵抗が小さくなるので、師管液がより流れやすくなります。</li>
</ul>
<p><strong>伴細胞 (companion cells)</strong>（各師管要素のとなり）：</p>
<ul>
<li>ATPをつくる<strong>多数のミトコンドリア</strong>。ATPは、ソースでスクロースを師管へ<strong>能動的に積み込む (loading)</strong> ために（またシンクでの積み下ろしを助けるために）使われます。</li>
<li><strong>原形質連絡 (plasmodesmata)：</strong>伴細胞と師管要素をつなぐ細い細胞質の通路で、物質が両者の間を移動できます。伴細胞は代謝の仕事（師管要素を生かし続けることも含む）を担います。</li>
</ul>
<p>これらの適応が一体となって、師管内の師管液の流れを容易にし、ソースでの炭素化合物の積み込みとシンクでの積み下ろしを高めます。</p>
<div class="note">比較：木部は死んだ細胞の中で水と無機塩類を<em>上方へ</em>運び、師部は生きた細胞の中で糖を（ソースからシンクへ）<em>両方向に</em>運びます。</div>`,
        `<p><strong>韌皮部 (phloem)</strong> 把含碳化合物（主要為蔗糖）及其他物質（如氨基酸）的<strong>汁液 (sap)</strong>，由<strong>源 (source)</strong> 運到<strong>庫 (sink)</strong>。這種運動稱為<strong>運移 (translocation)</strong>。源是製造或釋出糖的地方（例如進行光合作用的成熟葉）；庫是使用或貯存糖的地方（例如生長中的根、果實或貯存器官）。韌皮部有兩種細胞協同工作。</p>
<p><strong>篩管分子 (sieve tube elements)</strong>（組成篩管的細胞）：</p>
<ul>
<li><strong>篩板 (sieve plates)：</strong>相鄰細胞之間的端壁有孔，汁液可由一個細胞流向下一個。</li>
<li><strong>細胞質減少、胞器很少、沒有細胞核：</strong>使管內有更多空間、阻力更小，汁液更易流動。</li>
</ul>
<p><strong>伴細胞 (companion cells)</strong>（緊貼每個篩管分子）：</p>
<ul>
<li>有<strong>許多線粒體</strong>製造ATP。ATP用於在源處把蔗糖<strong>主動裝載 (loading)</strong> 入篩管（並協助在庫處卸載）。</li>
<li><strong>胞間連絲 (plasmodesmata)：</strong>連接伴細胞與篩管分子的細小細胞質通道，物質可在兩者之間通過。伴細胞負責代謝工作（包括維持篩管分子生存）。</li>
</ul>
<p>這些適應特徵一起使汁液更易流過篩管，並加強在源處裝載含碳化合物及在庫處卸載。</p>
<div class="note">比較：木質部在死細胞中把水和礦物質<em>向上</em>運送；韌皮部在活細胞中把糖<em>雙向</em>（由源到庫）運送。</div>`),
      deeper: T("<p><strong>(AHL) Who does what in a phloem unit.</strong></p>\n<table><tr><th>Cell</th><th>Feature</th><th>Function</th></tr>\n<tr><td>Sieve tube element</td><td>Sieve plates (pores in end walls)</td><td>Sap passes from cell to cell</td></tr>\n<tr><td>Sieve tube element</td><td>Little cytoplasm, few organelles, no nucleus</td><td>Less resistance, more room for sap</td></tr>\n<tr><td>Companion cell</td><td>Many mitochondria</td><td>ATP for active loading of sucrose into the sieve tube at the source</td></tr>\n<tr><td>Companion cell</td><td>Plasmodesmata linking to the sieve tube element</td><td>Substances pass between the two cells; the companion cell keeps the sieve tube element alive</td></tr></table>\n<p><strong>Xylem and phloem compared.</strong></p>\n<table><tr><th></th><th>Xylem</th><th>Phloem</th></tr>\n<tr><td>Carries</td><td>Water and mineral ions</td><td>Sucrose, amino acids and other organic compounds</td></tr>\n<tr><td>Direction</td><td>Upwards, root to leaf</td><td>Source to sink (can be up or down)</td></tr>\n<tr><td>Cells</td><td>Dead, hollow, lignified</td><td>Living (sieve tube element and companion cell)</td></tr>\n<tr><td>Energy</td><td>Sun (transpiration)</td><td>ATP from companion cells for loading</td></tr></table>\n<p><strong>Sources and sinks can change.</strong> A potato tuber is a sink when it stores sugars in summer, but a source in spring when it releases sugars to feed new shoots.</p>\n<div class=\"note\"><strong>Extension (not required):</strong> the pressure-flow idea says that loading at the source draws in water by osmosis, raising the pressure, while unloading at the sink lowers it, so sap flows along the pressure gradient. It is a good way to see <em>why</em> the loading step matters, but you do not need it for the exam.</div>", "<p><strong>(AHL) 師部の単位で誰が何をするか。</strong></p>\n<table><tr><th>細胞</th><th>特徴</th><th>働き</th></tr>\n<tr><td>師管要素</td><td>師板（端壁の孔）</td><td>師管液が細胞から細胞へ通る</td></tr>\n<tr><td>師管要素</td><td>細胞質が少なく、細胞小器官も少なく、核がない</td><td>抵抗が小さく、師管液の通る空間が広い</td></tr>\n<tr><td>伴細胞</td><td>ミトコンドリアが多い</td><td>ソースで師管へスクロースを能動的に積み込むATPをつくる</td></tr>\n<tr><td>伴細胞</td><td>師管要素とつながる原形質連絡</td><td>2つの細胞間で物質が移動できる。伴細胞が師管要素を生かし続ける</td></tr></table>\n<p><strong>木部と師部の比較。</strong></p>\n<table><tr><th></th><th>木部</th><th>師部</th></tr>\n<tr><td>運ぶもの</td><td>水と無機イオン</td><td>スクロース、アミノ酸、その他の有機物</td></tr>\n<tr><td>方向</td><td>根から葉へ上向き</td><td>ソースからシンクへ（上向きも下向きもある）</td></tr>\n<tr><td>細胞</td><td>死んでいて中空、リグニン化</td><td>生きている（師管要素と伴細胞）</td></tr>\n<tr><td>エネルギー</td><td>太陽（蒸散）</td><td>積み込みに伴細胞のATP</td></tr></table>\n<p><strong>ソースとシンクは入れ替わる。</strong>ジャガイモの塊茎は、夏に糖をたくわえるときはシンクですが、春に新しい芽へ糖を送り出すときはソースです。</p>\n<div class=\"note\"><strong>発展（必須ではない）:</strong>圧流説の考え方では、ソースでの積み込みが浸透で水を引き入れて圧力を上げ、シンクでの積み下ろしが圧力を下げるので、師管液は圧力勾配に沿って流れます。積み込みの段階が<em>なぜ</em>重要かを理解する助けになりますが、試験には必要ありません。</div>", "<p><strong>(AHL) 韌皮部單元中各自的工作。</strong></p>\n<table><tr><th>細胞</th><th>特徵</th><th>功能</th></tr>\n<tr><td>篩管分子</td><td>篩板（端壁上的孔）</td><td>汁液由一個細胞通到另一個細胞</td></tr>\n<tr><td>篩管分子</td><td>細胞質少、胞器少、無細胞核</td><td>阻力較小，汁液有更多空間</td></tr>\n<tr><td>伴細胞</td><td>許多線粒體</td><td>製造ATP，用於在源處把蔗糖主動裝載入篩管</td></tr>\n<tr><td>伴細胞</td><td>連接篩管分子的胞間連絲</td><td>物質可在兩個細胞之間通過；伴細胞維持篩管分子存活</td></tr></table>\n<p><strong>木質部與韌皮部比較。</strong></p>\n<table><tr><th></th><th>木質部</th><th>韌皮部</th></tr>\n<tr><td>運送</td><td>水和礦物離子</td><td>蔗糖、氨基酸及其他有機化合物</td></tr>\n<tr><td>方向</td><td>由根向上到葉</td><td>由源到匯（可向上或向下）</td></tr>\n<tr><td>細胞</td><td>死細胞、空心、木質素化</td><td>活細胞（篩管分子和伴細胞）</td></tr>\n<tr><td>能量</td><td>太陽（蒸騰作用）</td><td>伴細胞的ATP用於裝載</td></tr></table>\n<p><strong>源和匯可以轉換。</strong>馬鈴薯塊莖在夏天儲存糖時是匯，但在春天把糖釋出供新芽生長時是源。</p>\n<div class=\"note\"><strong>延伸（非必修）：</strong>壓流學說認為，在源處裝載會藉滲透作用吸水而升高壓力，在匯處卸載則使壓力下降，汁液便順壓力梯度流動。這有助理解裝載步驟<em>為何</em>重要，但考試不需要。</div>")
    }
  ],
  keyTerms: [
    { term: T("capillary", "毛細血管", "微血管"), def: T("The smallest blood vessel, with a wall one cell thick, where exchange between blood and tissues happens.", "最も細い血管。壁は細胞1個分の厚さで、血液と組織の間の交換が行われる。", "最細的血管，壁只有一個細胞厚，血液與組織之間的交換在此進行。"), ahl: false },
    { term: T("fenestrations", "窓（有窓）", "窗孔"), def: T("Small pores in the wall of some capillaries that allow rapid exchange of fluid and small solutes.", "一部の毛細血管の壁にある小さな孔で、液体や小さな溶質の速い交換を可能にする。", "部分微血管壁上的小孔，容許液體和小溶質迅速交換。"), ahl: false },
    { term: T("artery", "動脈", "動脈"), def: T("A vessel carrying blood away from the heart at high pressure; thick wall with muscle and elastic tissue, narrow lumen.", "血液を高い圧力で心臓から運び出す血管。筋肉と弾性組織のある厚い壁と狭い管腔を持つ。", "以高壓把血液運離心臟的血管；壁厚，含肌肉和彈性組織，管腔窄。"), ahl: false },
    { term: T("vein", "静脈", "靜脈"), def: T("A vessel carrying blood to the heart at low pressure; thin wall, wide lumen and valves.", "血液を低い圧力で心臓へ運ぶ血管。薄い壁、広い管腔、弁を持つ。", "以低壓把血液運回心臟的血管；壁薄、管腔寬，並有瓣膜。"), ahl: false },
    { term: T("coronary artery", "冠動脈", "冠狀動脈"), def: T("An artery on the surface of the heart that supplies the cardiac muscle with oxygen and nutrients.", "心臓の表面にあり、心筋に酸素と栄養分を供給する動脈。", "位於心臟表面、為心肌提供氧氣和營養物的動脈。"), ahl: false },
    { term: T("occlusion", "閉塞", "閉塞"), def: T("Blocking of a vessel, for example a coronary artery by plaque or a clot.", "血管がふさがること。たとえばプラークや血栓による冠動脈の閉塞。", "血管被堵塞，例如冠狀動脈被斑塊或血凝塊堵塞。"), ahl: false },
    { term: T("correlation coefficient (r)", "相関係数 (r)", "相關係數 (r)"), def: T("A number from −1 to +1 that shows the strength and direction of a relationship between two variables. It does not prove cause.", "2つの変数の関係の強さと向きを示す、−1から+1の数。原因を証明するものではない。", "介乎−1至+1之間的數值，顯示兩個變量關係的強弱和方向，但不能證明因果。"), ahl: false },
    { term: T("transpiration stream", "蒸散流", "蒸騰流"), def: T("The movement of water up the xylem, pulled by evaporation from the leaves.", "葉からの蒸発に引かれて木部を水が上昇する流れ。", "水被葉的蒸發拉動、沿木質部上升的流動。"), ahl: false },
    { term: T("cohesion", "凝集", "內聚力"), def: T("The attraction between water molecules (by hydrogen bonds), which keeps the water column in the xylem continuous.", "水分子どうしの引き合い（水素結合による）。木部の水の柱を連続させる。", "水分子之間的吸引力（由氫鍵形成），使木質部水柱保持連續。"), ahl: false },
    { term: T("xylem vessel", "道管", "導管"), def: T("A dead, lignified tube with no contents and no end walls (or incomplete ones), with pits, carrying water up the plant.", "死んだリグニン化した管。内容物がなく、端壁がなく（または不完全）、壁孔を持ち、植物体の中で水を上方へ運ぶ。", "死亡、木質化的管，沒有內含物，沒有（或不完整的）端壁，有紋孔，把水向上運送。"), ahl: false },
    { term: T("vascular bundle", "維管束", "維管束"), def: T("A strand of vascular tissue containing xylem and phloem.", "木部と師部を含む維管束組織の束。", "含木質部和韌皮部的維管組織束。"), ahl: false },
    { term: T("tissue fluid", "組織液", "組織液"), def: T("The fluid surrounding cells, formed by pressure filtration of plasma from capillaries.", "細胞を取り巻く液体。毛細血管から血しょうが圧ろ過されてできる。", "圍繞細胞的液體，由微血管中血漿經壓力濾過而形成。"), ahl: true },
    { term: T("lymph", "リンパ液", "淋巴"), def: T("Excess tissue fluid that drains into lymph ducts and returns to the blood.", "リンパ管に排出され、血液へ戻る余分な組織液。", "流入淋巴管並回到血液的多餘組織液。"), ahl: true },
    { term: T("single / double circulation", "単循環／二重循環", "單循環／雙循環"), def: T("In single circulation (bony fish) blood passes through the heart once per circuit; in double circulation (mammals) it passes through twice, via the lungs and then the body.", "単循環（硬骨魚）では1周で血液は心臓を1回通る。二重循環（哺乳類）では2回通り、肺と体を順に回る。", "單循環（硬骨魚）中，每一圈血液通過心臟一次；雙循環（哺乳動物）中則通過兩次，先經肺再經身體。"), ahl: true },
    { term: T("sinoatrial node (pacemaker)", "洞房結節（ペースメーカー）", "竇房結（起搏點）"), def: T("A patch of specialized cardiac muscle in the right atrium wall that starts each heartbeat.", "右心房の壁にある特殊な心筋の領域で、各拍動を始める。", "右心房壁上特化的心肌，啟動每次心跳。"), ahl: true },
    { term: T("atrioventricular / semilunar valves", "房室弁／半月弁", "房室瓣／半月瓣"), def: T("Valves between atria and ventricles, and at the base of the aorta and pulmonary artery. They prevent backflow.", "心房と心室の間、および大動脈・肺動脈の基部にある弁。逆流を防ぐ。", "位於心房與心室之間，以及主動脈和肺動脈基部的瓣膜，防止倒流。"), ahl: true },
    { term: T("systole / diastole", "収縮期／拡張期", "收縮期／舒張期"), def: T("Systole is contraction of the heart; diastole is relaxation.", "収縮期は心臓の収縮、拡張期は弛緩。", "收縮期是心臟收縮，舒張期是心臟鬆弛。"), ahl: true },
    { term: T("root pressure", "根圧", "根壓"), def: T("Positive pressure in xylem caused by active transport of mineral ions into the xylem, which draws in water by osmosis.", "無機イオンの能動輸送で木部に生じる正の圧力。浸透で水を引き込む。", "礦物離子主動運輸入木質部所產生的正壓，使水藉滲透進入。"), ahl: true },
    { term: T("translocation", "転流", "運移"), def: T("The transport of sap containing sugars and other compounds in phloem from sources to sinks.", "糖などを含む師管液が、師部をソースからシンクへ運ばれること。", "含糖及其他化合物的汁液在韌皮部中由源運到庫。"), ahl: true },
    { term: T("sieve tube element / companion cell", "師管要素／伴細胞", "篩管分子／伴細胞"), def: T("Sieve tube elements form the tubes of phloem (sieve plates, little cytoplasm, no nucleus). Companion cells have many mitochondria and are linked to them by plasmodesmata.", "師管要素は師部の管をつくる（師板、少ない細胞質、核なし）。伴細胞は多くのミトコンドリアを持ち、原形質連絡でそれらとつながる。", "篩管分子組成韌皮部的管（有篩板、細胞質少、無細胞核）。伴細胞有許多線粒體，並以胞間連絲與篩管分子相連。"), ahl: true }
  ],
  misconceptions: [
    { wrong: T("Arteries carry oxygenated blood and veins carry deoxygenated blood.", "動脈は酸素の多い血液、静脈は酸素の少ない血液を運ぶ。", "動脈運載含氧血，靜脈運載缺氧血。"),
      right: T("Arteries carry blood away from the heart and veins carry blood to the heart. The pulmonary artery carries deoxygenated blood and the pulmonary vein carries oxygenated blood.", "動脈は心臓から離れる血液、静脈は心臓へ向かう血液を運びます。肺動脈は酸素の少ない血液、肺静脈は酸素の多い血液を運びます。", "動脈把血液運離心臟，靜脈把血液運向心臟。肺動脈運載缺氧血，肺靜脈運載含氧血。") },
    { wrong: T("Veins have thicker walls than arteries.", "静脈の壁は動脈より厚い。", "靜脈的壁比動脈厚。"),
      right: T("Artery walls are thicker, with more muscle and elastic tissue. Veins have wider lumens and thinner walls.", "動脈の壁のほうが厚く、筋肉と弾性組織が多くあります。静脈は管腔が広く壁が薄いです。", "動脈壁較厚，有較多肌肉和彈性組織。靜脈管腔較寬、壁較薄。") },
    { wrong: T("Water is pushed up the xylem by the roots.", "水は根によって木部を押し上げられる。", "水是被根部推上木質部。"),
      right: T("Mainly it is pulled up by transpiration from the leaves. Root pressure helps only when transpiration is low.", "おもに葉からの蒸散によって引き上げられます。根圧が役立つのは蒸散が少ないときだけです。", "主要是被葉的蒸騰作用向上拉。根壓只在蒸騰作用低時才有幫助。") },
    { wrong: T("Xylem is made of living cells that pump water up.", "木部は水をくみ上げる生きた細胞でできている。", "木質部由會泵水上升的活細胞組成。"),
      right: T("Xylem vessels are dead, empty tubes. They do not pump; water is pulled through them.", "木部の道管は死んだ空の管です。くみ上げるのではなく、水が通り抜けて引かれます。", "木質部導管是死亡的空管，不會泵水，水是被拉過管道。") },
    { wrong: T("A strong correlation between saturated fat intake and coronary heart disease proves that fat causes the disease.", "飽和脂肪の摂取と冠動脈疾患の強い相関は、脂肪が病気の原因であることを証明する。", "飽和脂肪攝取量與冠心病之間的強相關證明脂肪導致該病。"),
      right: T("Correlation does not prove causation. Other factors may be involved.", "相関は因果関係を証明しません。ほかの要因が関わっているかもしれません。", "相關不能證明因果關係，可能涉及其他因素。") },
    { ahl: true, wrong: T("Tissue fluid is the same as blood.", "組織液は血液と同じである。", "組織液與血液相同。"),
      right: T("Tissue fluid is filtered plasma. It has no red blood cells and very few large proteins.", "組織液はろ過された血しょうです。赤血球はなく、大きなタンパク質もごくわずかです。", "組織液是經過濾的血漿，沒有紅血球，大蛋白質也極少。") },
    { ahl: true, wrong: T("Phloem only carries sugars downwards from the leaves.", "師部は葉から下向きにだけ糖を運ぶ。", "韌皮部只把糖從葉向下運送。"),
      right: T("Phloem carries sap from sources to sinks, which can be up or down the plant.", "師部は、ソースからシンクへ師管液を運びます。植物体の上向きにも下向きにもなりえます。", "韌皮部把汁液由源運到庫，方向可以是向上或向下。") }
  ],
  beyondSyllabus: [
    T("You do not need the names of the layers of the blood vessel wall (tunica intima, media, externa), or the structure of arterioles and venules in detail.", "血管壁の各層の名称（内膜・中膜・外膜）や、細動脈・細静脈の詳しい構造は不要です。", "你不需要血管壁各層的名稱（內膜、中膜、外膜），或小動脈和小靜脈的詳細結構。"),
    T("You do not need the details of the conduction system of the heart beyond the SA node (for example the AV node, bundle of His and Purkinje fibres). For B3.2.16 you only need the sequence of events after the SA node starts the heartbeat. Control of heart rate by the brain (medulla, baroreceptors and chemoreceptors) and by epinephrine is not needed for this subtopic: it is taught in C3.1.12 and C3.1.14 (C3.1 Integration of body systems).", "洞房結節以外の心臓の刺激伝導系の詳細（房室結節、ヒス束、プルキンエ線維など）は不要です。B3.2.16では、洞房結節が拍動を始めたあとの出来事の順序だけが必要です。脳（延髄、圧受容器、化学受容器）やアドレナリン (epinephrine) による心拍数の調節は、このサブトピックでは不要です。C3.1.12とC3.1.14（C3.1 体の器官系の統合）で学びます。", "你不需要竇房結以外的心臟傳導系統細節（如房室結、希氏束、浦肯野纖維）。B3.2.16只需要竇房結啟動心跳後的事件次序。腦部（延髓、壓力感受器和化學感受器）及腎上腺素 (epinephrine) 對心率的控制，此子課題不需要，會在C3.1.12和C3.1.14（C3.1 身體系統的整合）學習。"),
    T("You do not need to explain tissue fluid return using oncotic pressure or Starling forces with numbers. The guide explains the return in terms of lower pressure at the venule end.", "オンコティック圧（膠質浸透圧）やスターリングの力を数値で使った組織液の戻りの説明は不要です。ガイドは、細静脈側の低い圧力で戻りを説明しています。", "你不需要用膠體滲透壓或帶數值的斯塔林力來解釋組織液回流。課程指引以小靜脈端壓力較低來解釋回流。"),
    T("B3.2.13 is limited to valves, thin walls with gaps and return of lymph to the blood. Lymphocytes in lymph nodes and their immune role are not needed for this subtopic: they are taught in C3.2.6 (C3.2 Defence against disease).", "B3.2.13は、弁、すき間のある薄い壁、リンパ液の血液への還流に限られます。リンパ節のリンパ球とその免疫での役割は、このサブトピックでは不要です。C3.2.6（C3.2 病気に対する防御）で学びます。", "B3.2.13只限於瓣膜、有空隙的薄壁，以及淋巴回流入血液。淋巴結中的淋巴細胞及其免疫作用，此子課題不需要，會在C3.2.6（C3.2 抵禦疾病）學習。"),
    T("You do not need the apoplast and symplast pathways, the Casparian strip or the endodermis for water movement in roots. You also do not need guttation or experimental evidence such as aphid stylets or ringing experiments for phloem.", "根での水の移動に関するアポプラスト経路・シンプラスト経路、カスパリー線、内皮は不要です。また、溢泌や、師部についてのアブラムシの口針・環状除皮の実験の証拠も不要です。", "你不需要根部水分移動的質外體和共質體途徑、卡氏帶或內皮層，也不需要吐水現象，或有關韌皮部的蚜蟲口針、環割實驗等證據。"),
    T("You do not need the detailed names of the lung and body circulations' vessels beyond those listed in B3.2.15 (vena cava, pulmonary artery and vein, aorta), or the structures of hearts of other animals such as amphibians and reptiles.", "B3.2.15に挙がったもの（大静脈、肺動脈・肺静脈、大動脈）以外の血管の詳しい名称や、両生類・爬虫類など他の動物の心臓の構造は不要です。", "除了B3.2.15所列的血管（腔靜脈、肺動脈和肺靜脈、主動脈）外，你不需要其他血管的詳細名稱，也不需要兩棲類、爬蟲類等其他動物心臟的結構。")
  ],
  links: [
    { to: "B3.1", why: T("Transpiration is a consequence of gas exchange; capillaries carry gases to and from alveoli.", "蒸散はガス交換の結果です。毛細血管は肺胞との間で気体を運びます。", "蒸騰作用是氣體交換的後果；微血管在肺泡之間運送氣體。") },
    { to: "B2.3", why: T("Cardiac muscle cells and striated muscle fibres; surface area-to-volume ratio.", "心筋細胞と横紋筋線維。表面積と体積の比。", "心肌細胞與橫紋肌纖維；表面積與體積比。") },
    { to: "B1.1", why: T("Hydrogen bonding of water (cohesion) and the transport of sucrose.", "水の水素結合（凝集）とスクロースの輸送。", "水的氫鍵（內聚力）與蔗糖的運輸。") },
    { to: "B2.1", why: T("Active transport and osmosis underlie root pressure and phloem loading.", "能動輸送と浸透が、根圧と師部への積み込みの基礎です。", "主動運輸和滲透是根壓和韌皮部裝載的基礎。") }
  ],
  natureOfScience: [
    T("Correlation coefficients quantify correlations between variables and allow the strength of the relationship to be assessed. Low or absent correlation could provide evidence against a hypothesis, but even strong correlations (such as saturated fat intake and coronary heart disease) do not prove a causal link.", "相関係数は変数間の相関を数値化し、関係の強さを評価できるようにします。相関が低い、またはないことは仮説に反する証拠になりえますが、飽和脂肪の摂取と冠動脈疾患のような強い相関でも、因果関係を証明するものではありません。", "相關係數把變量之間的相關量化，使人能評估關係的強弱。低相關或沒有相關可能是反對某假說的證據，但即使是強相關（如飽和脂肪攝取量與冠心病），也不能證明有因果關係。")
  ],
  questions: [
    { id: "b3-2-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B3.2.1", paper: "1A",
      stem: T("What is the role of fenestrations in some capillaries?", "一部の毛細血管にある窓（有窓）の役割は何か。", "部分微血管中窗孔的作用是甚麼？"),
      options: [
        T("They allow rapid exchange of fluid and small solutes through the capillary wall.", "毛細血管の壁を通して、液体と小さな溶質の速い交換を可能にする。", "容許液體和小溶質迅速穿過微血管壁。"),
        T("They stop blood leaking out of the capillary.", "血液が毛細血管から漏れ出るのを防ぐ。", "防止血液漏出微血管。"),
        T("They prevent backflow of blood.", "血液の逆流を防ぐ。", "防止血液倒流。"),
        T("They allow the capillary to contract and push blood on.", "毛細血管が収縮して血液を押し進められるようにする。", "使微血管能收縮並推動血液前進。")
      ],
      answer: 0,
      explanation: T("Fenestrations are pores in the wall that make exchange faster. Backflow is prevented by valves in veins (C). Capillaries do not contract (D).", "窓は壁にある孔で、交換を速くします。逆流を防ぐのは静脈の弁です（C）。毛細血管は収縮しません（D）。", "窗孔是壁上的小孔，使交換更快。防止倒流的是靜脈中的瓣膜（C）。微血管不會收縮（D）。") },
    { id: "b3-2-q02", type: "multi", ahl: false, difficulty: 1, ref: "B3.2.1", paper: "1A",
      stem: T("Which are adaptations of capillaries for exchange? Select all that apply.", "毛細血管の交換への適応はどれか。当てはまるものをすべて選びなさい。", "哪些是微血管適應物質交換的特徵？選出所有適用者。"),
      options: [
        T("Walls one cell thick", "壁が細胞1個分の厚さ", "壁只有一個細胞厚"),
        T("Narrow diameter and extensive branching", "細い直径と広範囲の枝分かれ", "直徑狹窄並大量分支"),
        T("Valves to prevent backflow", "逆流を防ぐ弁", "防止倒流的瓣膜"),
        T("Thick layers of elastic tissue", "弾性組織の厚い層", "厚的彈性組織層")
      ],
      answer: [0, 1],
      explanation: T("Thin walls shorten the diffusion distance and branching with narrow diameters gives a large surface area. Valves are a feature of veins and thick elastic walls are a feature of arteries.", "薄い壁は拡散距離を短くし、細い直径での枝分かれは表面積を大きくします。弁は静脈の特徴、厚い弾性の壁は動脈の特徴です。", "薄壁縮短擴散距離，狹窄直徑加分支提供大表面積。瓣膜是靜脈的特徵，厚彈性壁是動脈的特徵。") },
    { id: "b3-2-q03", type: "mcq", ahl: false, difficulty: 2, ref: "B3.2.2", paper: "1A",
      stem: T("A micrograph shows a blood vessel with a thick wall and a narrow, round lumen. The wall has thick layers of muscle and elastic fibres. What is the vessel?", "顕微鏡写真に、壁が厚く管腔が狭く丸い血管が写っている。壁には筋肉と弾性繊維の厚い層がある。この血管は何か。", "顯微照片顯示一條血管，壁厚、管腔窄而圓，壁上有厚的肌肉和彈性纖維層。這是甚麼血管？"),
      options: [
        T("An artery", "動脈", "動脈"),
        T("A vein", "静脈", "靜脈"),
        T("A capillary", "毛細血管", "微血管"),
        T("A lymph duct", "リンパ管", "淋巴管")
      ],
      answer: 0,
      explanation: T("A thick wall relative to a narrow lumen is the sign of an artery. Veins have thin walls and wide lumens. A capillary has a wall one cell thick and has no layers of muscle.", "管腔に対して壁が厚いのは動脈の特徴です。静脈は壁が薄く管腔が広いです。毛細血管は壁が細胞1個分の厚さで、筋肉の層がありません。", "壁厚而管腔窄是動脈的特徵。靜脈壁薄、管腔寬。微血管壁只有一個細胞厚，沒有肌肉層。") },
    { id: "b3-2-q04", type: "short", ahl: false, difficulty: 2, ref: "B3.2.3", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain how the structure of the wall of an artery is adapted to its function.", "動脈の壁の構造が、その機能にどのように適応しているか説明しなさい。", "解釋動脈壁的結構如何適應其功能。"),
      markscheme: [
        T("Thick wall / layers of muscle make the wall strong enough to withstand high blood pressure", "厚い壁／筋肉の層により、高い血圧に耐えるだけの強さがある", "壁厚／肌肉層使管壁足夠堅固，能承受高血壓"),
        T("Elastic tissue/fibres stretch when blood surges from the heart", "心臓から血液が押し寄せると弾性組織／繊維が伸びる", "血液由心臟湧出時，彈性組織／纖維被拉長"),
        T("Elastic recoil maintains the pressure/smooths the flow of blood between heartbeats", "弾性による縮みが、心拍の合間の圧力を保つ／血流をなめらかにする", "彈性回縮維持壓力／使兩次心跳之間的血流平穩")
      ],
      modelAnswer: T("The thick wall with layers of muscle makes it strong enough to withstand high pressure. Elastic fibres stretch as blood surges out of the heart and then recoil, which keeps the pressure up and the blood flowing between heartbeats.", "筋肉の層のある厚い壁が、高い圧力に耐える強さを与える。弾性繊維は、心臓から血液が押し寄せると伸び、その後縮むので、心拍の合間も圧力を保ち、血液を流し続ける。", "有肌肉層的厚壁使它足夠堅固，能承受高壓。彈性纖維在血液由心臟湧出時被拉長，然後回縮，使兩次心跳之間壓力得以維持，血液繼續流動。") },
    { id: "b3-2-q22", type: "short", ahl: false, difficulty: 2, ref: "B3.2.4", paper: "2", commandTerm: "Outline", marks: 3,
      stem: T("Outline how pulse rate can be measured, and one way in which a digital method could differ from a traditional method.", "脈拍数をどのように測定できるか、また、デジタルの方法が従来の方法とどう異なりうるかを1つ概説しなさい。", "概述如何量度脈搏率，以及數碼方法與傳統方法可能有何不同之處（一點）。"),
      markscheme: [
        T("Press fingertips (not thumb) on the carotid (neck) or radial (wrist) artery", "指先（親指以外）を頸動脈（首）または橈骨動脈（手首）に当てる", "用指尖（不用拇指）按頸動脈（頸部）或橈動脈（手腕）"),
        T("Count beats for a set time (e.g. 30 s or 60 s) and convert to beats per minute, at rest", "決まった時間（例：30秒または60秒）の拍動を安静時に数え、1分あたりに換算する", "在靜止狀態下數算固定時間（如30秒或60秒）的脈搏，並換算為每分鐘次數"),
        T("Digital method (e.g. sensor/smartwatch) records continuously / may be more precise / less affected by counting error (accept any valid difference)", "デジタルの方法（センサー／スマートウォッチなど）は連続記録できる／より精密／数え間違いの影響を受けにくい（妥当な違いなら可）", "數碼方法（如感應器／智能手錶）可持續記錄／可能更精確／較少受計數錯誤影響（接受任何合理差異）")
      ],
      modelAnswer: T("With the person at rest, press the first two fingertips on the radial or carotid pulse and count the beats for a fixed time, such as 30 s, and convert to beats per minute. A digital monitor uses a sensor and can record continuously without counting errors.", "安静にした状態で、示指と中指の指先を橈骨動脈または頸動脈の脈に当て、30秒など一定時間の拍動を数え、1分あたりに換算する。デジタル心拍計はセンサーを使い、数え間違いなく連続的に記録できる。", "讓受試者靜止，用食指和中指的指尖按橈動脈或頸動脈脈搏，數算固定時間（如30秒）的脈搏，並換算為每分鐘次數。數碼監測器利用感應器，可持續記錄，不會有計數錯誤。") },
    { id: "b3-2-q05", type: "mcq", ahl: false, difficulty: 2, ref: "B3.2.5", paper: "1A",
      stem: T("Why do veins in the legs have valves?", "脚の静脈になぜ弁があるのか。", "為何腿部的靜脈有瓣膜？"),
      options: [
        T("To keep the blood pressure high", "血圧を高く保つため", "保持血壓高"),
        T("To prevent backflow when muscles squeeze the veins", "筋肉が静脈を圧迫するときに逆流を防ぐため", "在肌肉擠壓靜脈時防止倒流"),
        T("To let oxygen diffuse out", "酸素が拡散して出られるようにするため", "讓氧氣擴散出去"),
        T("To make the wall thicker", "壁を厚くするため", "使管壁變厚")
      ],
      answer: 1,
      explanation: T("Blood in veins is at low pressure. Muscle contractions squeeze it along and the valves stop it from flowing backward. Veins do not keep pressure high (A) and valves do not thicken the wall (D).", "静脈の血液は低圧です。筋肉の収縮が血液を押し進め、弁が逆流を防ぎます。静脈は圧を高く保つのではなく（A）、弁は壁を厚くしません（D）。", "靜脈中的血液壓力低。肌肉收縮把血液擠向前，瓣膜阻止倒流。靜脈並不保持高壓（A），瓣膜也不會使管壁變厚（D）。") },
    { id: "b3-2-q06", type: "short", ahl: false, difficulty: 2, ref: "B3.2.6", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain the causes and consequences of occlusion of the coronary arteries.", "冠動脈の閉塞の原因と結果を説明しなさい。", "解釋冠狀動脈閉塞的成因及後果。"),
      markscheme: [
        T("Cause: fatty deposits/plaque (with cholesterol) build up in the artery wall, narrowing the lumen", "原因：脂肪性の沈着物／プラーク（コレステロールを含む）が動脈壁にたまり、管腔を狭くする", "成因：脂肪沉積物／斑塊（含膽固醇）積聚在動脈壁，使管腔變窄"),
        T("Cause: a blood clot may form and block the artery", "原因：血栓ができて動脈をふさぐことがある", "成因：可能形成血凝塊並堵塞動脈"),
        T("Consequence: less blood/oxygen reaches the cardiac muscle, so cells cannot respire aerobically fast enough (chest pain/angina)", "結果：心筋に届く血液／酸素が減り、細胞が好気呼吸を十分速く行えない（胸痛／狭心症）", "後果：到達心肌的血液／氧氣減少，細胞不能足夠快地進行有氧呼吸（胸痛／心絞痛）"),
        T("Consequence: complete blockage causes death of cardiac muscle cells (heart attack/myocardial infarction)", "結果：完全にふさがると心筋細胞が死ぬ（心臓発作／心筋梗塞）", "後果：完全堵塞導致心肌細胞死亡（心臟病發作／心肌梗塞）")
      ],
      modelAnswer: T("Fatty deposits build up in the wall of a coronary artery and narrow the lumen, and a clot may block it. The cardiac muscle then receives less oxygen and cannot respire aerobically fast enough, causing pain. If the artery is completely blocked, the muscle cells die, which is a heart attack.", "脂肪性の沈着物が冠動脈の壁にたまって管腔を狭くし、血栓がふさぐこともある。すると心筋への酸素が減り、好気呼吸を十分速く行えず、痛みを起こす。動脈が完全にふさがると筋細胞が死に、これが心臓発作である。", "脂肪沉積物積聚在冠狀動脈壁並使管腔變窄，血凝塊亦可能把它堵塞。心肌因此得到較少氧氣，不能足夠快地進行有氧呼吸，引起疼痛。若動脈完全堵塞，肌細胞死亡，這就是心臟病發作。") },
    { id: "b3-2-q07", type: "short", ahl: false, difficulty: 3, ref: "B3.2.6", paper: "1B", commandTerm: "Evaluate", marks: 5,
      stem: T("The table shows the mean daily saturated fat intake and the number of deaths from coronary heart disease (CHD) per 100 000 people in eight countries (illustrative data). The correlation coefficient (r) is +0.96. (a) Describe the relationship shown by the data. (b) State what the value of r tells you. (c) Evaluate the claim that saturated fat intake causes CHD.", "表は、8か国の1日あたりの飽和脂肪の平均摂取量と、人口10万人あたりの冠動脈疾患 (CHD) による死亡数である（イラスト用データ）。相関係数 (r) は +0.96 である。(a) データが示す関係を述べなさい。(b) rの値が何を示すか述べなさい。(c) 飽和脂肪の摂取がCHDの原因であるという主張を評価しなさい。", "下表顯示八個國家的每日平均飽和脂肪攝取量，以及每10萬人因冠心病 (CHD) 死亡的人數（示範數據）。相關係數 (r) 為 +0.96。(a) 描述數據顯示的關係。(b) 說明r值告訴你甚麼。(c) 評估「飽和脂肪攝取導致冠心病」這個說法。"),
      data: T(
        `<table><tr><th>Country</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr><tr><th>Saturated fat intake (g per day)</th><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td><td>45</td></tr><tr><th>CHD deaths per 100 000</th><td>80</td><td>95</td><td>150</td><td>130</td><td>210</td><td>190</td><td>260</td><td>280</td></tr></table>`,
        `<table><tr><th>国</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr><tr><th>飽和脂肪の摂取量（g/日）</th><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td><td>45</td></tr><tr><th>10万人あたりのCHD死亡数</th><td>80</td><td>95</td><td>150</td><td>130</td><td>210</td><td>190</td><td>260</td><td>280</td></tr></table>`,
        `<table><tr><th>國家</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr><tr><th>飽和脂肪攝取量（克／日）</th><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td><td>45</td></tr><tr><th>每10萬人冠心病死亡數</th><td>80</td><td>95</td><td>150</td><td>130</td><td>210</td><td>190</td><td>260</td><td>280</td></tr></table>`),
      markscheme: [
        T("(a) Positive relationship: as saturated fat intake rises (10 to 45 g), CHD deaths rise (80 to 280 per 100 000)", "(a) 正の関係：飽和脂肪の摂取量が増える（10から45 g）と、CHD死亡数も増える（10万人あたり80から280）", "(a) 正相關：飽和脂肪攝取量上升（10至45克），冠心病死亡數上升（每10萬人80至280）"),
        T("(b) r = +0.96 shows a strong positive correlation", "(b) r = +0.96は強い正の相関を示す", "(b) r = +0.96顯示強的正相關"),
        T("(c) Supports the hypothesis / consistent with a link between fat intake and CHD", "(c) 仮説を支持する／脂肪の摂取とCHDの関連と合致する", "(c) 支持假說／與脂肪攝取和冠心病之間有關連一致"),
        T("(c) But correlation does not prove causation", "(c) しかし、相関は因果関係を証明しない", "(c) 但相關不能證明因果關係"),
        T("(c) Other factors (e.g. smoking, exercise, age, healthcare, genetics) may differ between countries / only 8 countries, countries differ in many ways", "(c) 国ごとにほかの要因（喫煙、運動、年齢、医療、遺伝など）が異なるかもしれない／8か国だけで、国は多くの点で異なる", "(c) 各國的其他因素（如吸煙、運動、年齡、醫療、遺傳）可能不同／只有八個國家，國家之間在許多方面不同")
      ],
      modelAnswer: T("(a) As saturated fat intake increases from 10 to 45 g per day, deaths from CHD rise from 80 to 280 per 100 000. (b) r = +0.96 is a strong positive correlation. (c) The data support a link, but a correlation does not prove that fat causes CHD. Other factors such as smoking, exercise or age might differ between the countries, and only eight countries are given, so a controlled study would be needed to show cause.", "(a) 飽和脂肪の摂取量が1日10 gから45 gに増えると、CHD死亡数は10万人あたり80から280に増える。(b) r = +0.96は強い正の相関である。(c) データは関連を支持するが、相関は脂肪がCHDの原因であることを証明しない。喫煙、運動、年齢などのほかの要因が国ごとに異なるかもしれず、8か国だけしかないので、原因を示すには対照実験が必要である。", "(a) 每日飽和脂肪攝取量由10克增至45克，冠心病死亡數由每10萬人80升至280。(b) r = +0.96是強的正相關。(c) 數據支持兩者有關連，但相關不能證明脂肪導致冠心病。吸煙、運動或年齡等其他因素在各國之間可能不同，而且只提供了八個國家，所以需要對照研究才能顯示因果。") },
    { id: "b3-2-q08", type: "mcq", ahl: false, difficulty: 2, ref: "B3.2.7", paper: "1A",
      stem: T("Which statement best explains how water moves up the xylem in a tall plant on a sunny day?", "晴れた日に、背の高い植物で水が木部を上昇する仕組みを最もよく説明しているのはどれか。", "在晴天，哪項陳述最能解釋水如何在高大植物的木質部中上升？"),
      options: [
        T("Evaporation from leaf cell walls creates tension that pulls the water column up, which stays continuous because of cohesion.", "葉の細胞壁からの蒸発が張力をつくって水の柱を引き上げ、凝集によって柱が切れずに続く。", "葉細胞壁的蒸發產生張力，把水柱向上拉，水柱因內聚力而保持連續。"),
        T("The root cells pump water up the xylem using ATP.", "根の細胞がATPを使って木部に水をくみ上げる。", "根細胞利用ATP把水泵上木質部。"),
        T("Xylem vessel cells contract to squeeze the water upwards.", "木部の道管の細胞が収縮して水を上方へ押し出す。", "木質部導管細胞收縮，把水向上擠。"),
        T("Positive root pressure forces the water to the top of the plant.", "正の根圧が水を植物の先端まで押し上げる。", "正的根壓把水推到植物頂部。")
      ],
      answer: 0,
      explanation: T("On a sunny day transpiration is high, and the tension pulls the water up. B and C wrongly suggest that the plant pumps the water; xylem vessels are dead tubes. D is tempting because root pressure exists, but it only matters when transpiration is low and cannot lift water to the top of tall plants.", "晴れた日は蒸散が盛んで、張力が水を引き上げます。BとCは植物がくみ上げると誤って述べています。道管は死んだ管です。Dは根圧が存在するので紛らわしいですが、根圧が重要なのは蒸散が少ないときだけで、背の高い植物の先端まで水を上げることはできません。", "晴天時蒸騰作用旺盛，張力把水向上拉。B和C錯誤地暗示植物泵水；導管是死亡的管。D選項容易混淆，因為根壓確實存在，但它只在蒸騰作用低時才重要，不能把水抬到高大植物的頂部。") },
    { id: "b3-2-q09", type: "short", ahl: false, difficulty: 2, ref: "B3.2.7", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain how water is transported from the roots to the leaves in the xylem.", "木部で水が根から葉へどのように輸送されるか説明しなさい。", "解釋水如何在木質部中由根部運送到葉。"),
      markscheme: [
        T("Water evaporates from the wet cell walls of leaf mesophyll cells into air spaces (transpiration) and leaves through stomata", "水が葉肉細胞の湿った細胞壁から空気の隙間へ蒸発し（蒸散）、気孔から出る", "水從葉肉細胞濕潤的細胞壁蒸發到氣室（蒸騰作用），並經氣孔離開"),
        T("Water is drawn out of xylem vessels through the cell walls by capillary action (adhesion)", "水が毛細管現象（付着）によって木部の道管から細胞壁を通って引き出される", "水藉毛細作用（附着）被拉出木質部導管，穿過細胞壁"),
        T("This generates tension / negative pressure in the xylem", "これが木部に張力／負の圧力を生じさせる", "這在木質部中產生張力／負壓"),
        T("Cohesion (hydrogen bonds) between water molecules keeps a continuous column of water, so the whole column is pulled up", "水分子間の凝集（水素結合）が水の柱を連続させるので、柱全体が引き上げられる", "水分子之間的內聚力（氫鍵）使水柱連續，所以整條水柱被向上拉")
      ],
      modelAnswer: T("Water evaporates from the wet walls of mesophyll cells and leaves through the stomata. Water is drawn out of the xylem through cell walls by capillary action, which creates tension in the xylem. Hydrogen bonds make water molecules cohere, so a continuous column of water is pulled up from the roots.", "水が葉肉細胞の湿った壁から蒸発し、気孔から出る。水は毛細管現象で木部から細胞壁を通って引き出され、木部に張力が生じる。水素結合で水分子が凝集するので、切れ目のない水の柱が根から引き上げられる。", "水從葉肉細胞濕潤的壁蒸發並經氣孔離開。水藉毛細作用被拉出木質部、穿過細胞壁，在木質部中產生張力。氫鍵使水分子互相內聚，所以連續的水柱由根部被向上拉。") },
    { id: "b3-2-q10", type: "multi", ahl: false, difficulty: 2, ref: "B3.2.8", paper: "1A",
      stem: T("Which features of xylem vessels allow water to move through them with little resistance and without collapse? Select all that apply.", "木部の道管の特徴のうち、水が小さな抵抗で、つぶれずに通れるようにするものはどれか。当てはまるものをすべて選びなさい。", "木質部導管的哪些特徵使水能以低阻力通過而不塌陷？選出所有適用者。"),
      options: [
        T("No cell contents", "細胞内容物がない", "沒有細胞內含物"),
        T("Incomplete or absent end walls", "端壁が不完全またはない", "端壁不完整或沒有"),
        T("Lignified walls", "リグニン化した壁", "木質化的壁"),
        T("Sieve plates between cells", "細胞間の師板", "細胞之間的篩板")
      ],
      answer: [0, 1, 2],
      explanation: T("Empty cells and open ends give unimpeded flow, and lignin makes the walls strong enough to withstand tension. Sieve plates are found in phloem, not xylem.", "空の細胞と開いた端は流れを妨げず、リグニンは壁を張力に耐えられる強さにします。師板は師部にあり、木部にはありません。", "空的細胞和開放的兩端使水流不受阻，木質素使壁足夠堅固以承受張力。篩板屬於韌皮部，不在木質部。") },
    { id: "b3-2-q11", type: "mcq", ahl: false, difficulty: 2, ref: "B3.2.10", paper: "1A",
      stem: T("In a transverse section of a dicotyledonous root, where is the xylem found?", "双子葉植物の根の横断面で、木部はどこにあるか。", "在雙子葉植物根的橫切面中，木質部位於何處？"),
      options: [
        T("In a ring of separate bundles near the outside", "外側近くの、別々の束の輪の中", "靠近外側、成環狀排列的分開的束中"),
        T("In the centre, often in an X or star shape, with phloem between the arms", "中心で、しばしばX字形や星形で、腕の間に師部がある", "在中央，常呈X形或星形，臂之間有韌皮部"),
        T("In the epidermis", "表皮の中", "在表皮中"),
        T("Scattered through the cortex", "皮層全体に散らばっている", "散布於皮層中")
      ],
      answer: 1,
      explanation: T("A root has a single central vascular bundle with xylem in the middle. A is the arrangement in the stem, which is the tempting wrong answer.", "根には中心に1つの維管束があり、木部は中央にあります。Aは茎の配置で、紛らわしい誤答です。", "根有一個中央的維管束，木質部在中間。A是莖的排列方式，是容易混淆的錯誤答案。") },
    { id: "b3-2-q12", type: "match", ahl: false, difficulty: 1, ref: "B3.2.9", paper: "1A",
      stem: T("Match each tissue in a dicotyledonous stem with its main function.", "双子葉植物の茎の各組織と、その主な機能を組み合わせなさい。", "把雙子葉植物莖中每種組織與其主要功能配對。"),
      pairs: [
        { left: T("Epidermis", "表皮", "表皮"), right: T("Protects the stem and reduces water loss", "茎を守り、水分の損失を減らす", "保護莖並減少水分散失") },
        { left: T("Xylem", "木部", "木質部"), right: T("Carries water and minerals up and supports the stem", "水と無機塩類を上方へ運び、茎を支える", "向上運送水和礦物質，並支撐莖") },
        { left: T("Phloem", "師部", "韌皮部"), right: T("Transports sugars and other organic compounds", "糖などの有機化合物を輸送する", "運輸糖及其他有機化合物") },
        { left: T("Cortex", "皮層", "皮層"), right: T("Supports the stem and stores food", "茎を支え、養分を蓄える", "支撐莖並貯存養分") }
      ],
      explanation: T("These are the functions you would write when annotating a plan diagram of a stem.", "これらは、茎の平面図に注釈を書き込むときの機能です。", "這些是為莖的平面圖加註解時應寫的功能。") },
    { id: "b3-2-q13", type: "short", ahl: true, difficulty: 2, ref: "B3.2.11", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain how tissue fluid is formed and how it returns to the capillaries.", "組織液がどのように形成され、どのように毛細血管へ戻るか説明しなさい。", "解釋組織液如何形成，以及如何回流入微血管。"),
      markscheme: [
        T("Blood from the arteriole is at high pressure in the capillary", "細動脈からの血液は毛細血管内で高い圧力を持つ", "來自小動脈的血液在微血管中壓力高"),
        T("Pressure filtration forces plasma (water and small solutes) out through the capillary wall; large proteins and cells stay in", "圧ろ過で血しょう（水と小さな溶質）が毛細血管の壁から押し出される。大きなタンパク質と血球は残る", "壓力濾過迫使血漿（水和小溶質）穿過微血管壁流出；大蛋白質和血細胞留下"),
        T("At the venule end the pressure is lower, so tissue fluid drains back into the capillary", "細静脈側では圧力が低いので、組織液が毛細血管へ戻る", "在小靜脈端壓力較低，所以組織液回流入微血管")
      ],
      modelAnswer: T("Blood enters the capillary from the arteriole at high pressure, which forces plasma out through the thin wall by pressure filtration. This fluid is tissue fluid. Towards the venule end, the pressure is lower, so tissue fluid drains back into the capillary.", "血液は細動脈から高い圧力で毛細血管に入り、その圧力が血しょうを薄い壁から圧ろ過で押し出す。この液が組織液である。細静脈側では圧力が低いので、組織液は毛細血管へ戻る。", "血液從小動脈以高壓進入微血管，壓力迫使血漿穿過薄壁而濾出（壓力濾過），這液體就是組織液。接近小靜脈端時壓力較低，所以組織液回流入微血管。") },
    { id: "b3-2-q14", type: "short", ahl: true, difficulty: 3, ref: "B3.2.12", paper: "1B", commandTerm: "Compare", marks: 4,
      stem: T("The table shows the approximate composition of blood plasma and tissue fluid near a capillary in a resting muscle (illustrative data). (a) Compare the composition of plasma and tissue fluid. (b) Suggest why the oxygen concentration is lower in tissue fluid than in plasma.", "表は、安静時の筋肉の毛細血管付近での、血しょうと組織液のおおよその組成である（イラスト用データ）。(a) 血しょうと組織液の組成を比較しなさい。(b) 組織液の酸素濃度が血しょうより低い理由を考えて述べなさい。", "下表顯示靜止肌肉中微血管附近的血漿與組織液的大約成分（示範數據）。(a) 比較血漿與組織液的成分。(b) 提出為何組織液的氧濃度比血漿低。"),
      data: T(
        `<table><tr><th>Component</th><th>Plasma</th><th>Tissue fluid</th></tr><tr><td>Protein (g per 100 cm³)</td><td>7.0</td><td>0.2</td></tr><tr><td>Glucose (mmol per dm³)</td><td>5.0</td><td>4.8</td></tr><tr><td>Oxygen (kPa)</td><td>12</td><td>5</td></tr><tr><td>Red blood cells</td><td>Present</td><td>Absent</td></tr></table>`,
        `<table><tr><th>成分</th><th>血しょう</th><th>組織液</th></tr><tr><td>タンパク質（g/100 cm³）</td><td>7.0</td><td>0.2</td></tr><tr><td>グルコース（mmol/dm³）</td><td>5.0</td><td>4.8</td></tr><tr><td>酸素（kPa）</td><td>12</td><td>5</td></tr><tr><td>赤血球</td><td>あり</td><td>なし</td></tr></table>`,
        `<table><tr><th>成分</th><th>血漿</th><th>組織液</th></tr><tr><td>蛋白質（克／100 cm³）</td><td>7.0</td><td>0.2</td></tr><tr><td>葡萄糖（mmol／dm³）</td><td>5.0</td><td>4.8</td></tr><tr><td>氧氣（kPa）</td><td>12</td><td>5</td></tr><tr><td>紅血球</td><td>有</td><td>沒有</td></tr></table>`),
      markscheme: [
        T("(a) Plasma has a much higher protein concentration (7.0 vs 0.2) because large proteins cannot leave the capillary", "(a) 血しょうのタンパク質濃度のほうがはるかに高い（7.0対0.2）。大きなタンパク質は毛細血管から出られないため", "(a) 血漿的蛋白質濃度高得多（7.0對0.2），因為大蛋白質不能離開微血管"),
        T("(a) Glucose is similar in both (5.0 vs 4.8) because small molecules pass through the wall", "(a) グルコースは両者でほぼ同じ（5.0対4.8）。小さな分子は壁を通るため", "(a) 兩者的葡萄糖相近（5.0對4.8），因為小分子可穿過壁"),
        T("(a) Red blood cells are present in plasma/blood but absent from tissue fluid", "(a) 赤血球は血しょう／血液にはあるが、組織液にはない", "(a) 紅血球存在於血漿／血液，但組織液中沒有"),
        T("(b) Muscle cells take up oxygen from tissue fluid for aerobic respiration, so oxygen is used up; the oxygen has to diffuse from the capillary", "(b) 筋細胞が好気呼吸のために組織液から酸素を取り込むので酸素が使われる。酸素は毛細血管から拡散してこなければならない", "(b) 肌肉細胞為有氧呼吸從組織液吸收氧氣，使氧氣被消耗；氧氣必須從微血管擴散過來")
      ],
      modelAnswer: T("(a) Plasma has far more protein than tissue fluid (7.0 against 0.2 g per 100 cm³), because large proteins cannot leave the capillary. Glucose is almost the same in both, because small molecules pass through. Red blood cells are only in blood. (b) The muscle cells take oxygen from the tissue fluid for aerobic respiration, so its concentration is lower.", "(a) 血しょうは組織液よりタンパク質がはるかに多い（100 cm³あたり7.0 g対0.2 g）。大きなタンパク質は毛細血管から出られないため。グルコースは小さな分子が通るので両者でほぼ同じ。赤血球は血液にだけある。(b) 筋細胞が好気呼吸のために組織液から酸素を取り込むので、濃度が低くなる。", "(a) 血漿的蛋白質遠多於組織液（每100 cm³ 7.0克對0.2克），因為大蛋白質不能離開微血管。兩者的葡萄糖幾乎相同，因為小分子可通過。紅血球只在血液中。(b) 肌肉細胞為有氧呼吸從組織液吸收氧氣，所以其濃度較低。") },
    { id: "b3-2-q15", type: "mcq", ahl: true, difficulty: 2, ref: "B3.2.13", paper: "1A",
      stem: T("Which statement about lymph ducts is correct?", "リンパ管について正しい記述はどれか。", "關於淋巴管，哪項陳述正確？"),
      options: [
        T("They have valves and thin walls with gaps, and they return fluid to the blood circulation.", "弁とすき間のある薄い壁を持ち、液体を血液循環へ戻す。", "有瓣膜和有空隙的薄壁，並把液體送回血液循環。"),
        T("They carry blood from the heart to the tissues.", "血液を心臓から組織へ運ぶ。", "把血液由心臟運到組織。"),
        T("They have thick muscular walls to withstand high pressure.", "高い圧力に耐えるため、筋肉質の厚い壁を持つ。", "有厚的肌肉壁，以承受高壓。"),
        T("They carry blood cells and plasma proteins into tissue fluid.", "血球と血しょうタンパク質を組織液の中へ運ぶ。", "把血細胞和血漿蛋白運入組織液。")
      ],
      answer: 0,
      explanation: T("Lymph ducts collect excess tissue fluid through thin walls with gaps, use valves to prevent backflow, and empty into the blood circulation. They do not carry blood (B), have no thick muscular walls (C), and tissue fluid does not contain red cells (D).", "リンパ管は、すき間のある薄い壁から余分な組織液を集め、弁で逆流を防ぎ、血液循環へ注ぎます。血液は運びません（B）。厚い筋肉質の壁もありません（C）。組織液には赤血球はありません（D）。", "淋巴管經有空隙的薄壁收集多餘的組織液，以瓣膜防止倒流，並注入血液循環。它們不運載血液（B），也沒有厚的肌肉壁（C），組織液中亦沒有紅血球（D）。") },
    { id: "b3-2-q16", type: "short", ahl: true, difficulty: 2, ref: "B3.2.14", paper: "2", commandTerm: "Distinguish", marks: 3,
      stem: T("Distinguish between the single circulation of a bony fish and the double circulation of a mammal.", "硬骨魚の単循環と哺乳類の二重循環を区別しなさい。", "區別硬骨魚的單循環與哺乳動物的雙循環。"),
      markscheme: [
        T("Fish: blood passes through the heart once per complete circuit; heart → gills → body → heart", "魚：1周で血液は心臓を1回通る。心臓 → えら → 体 → 心臓", "魚：每完整一圈血液通過心臟一次；心臟 → 鰓 → 身體 → 心臟"),
        T("Mammal: blood passes through the heart twice per circuit; right heart → lungs → left heart → body → right heart", "哺乳類：1周で血液は心臓を2回通る。右心 → 肺 → 左心 → 体 → 右心", "哺乳動物：每圈血液通過心臟兩次；右心 → 肺 → 左心 → 身體 → 右心"),
        T("Mammals: blood returns to the heart after the lungs to be pumped again, so the body receives higher pressure blood; in fish pressure drops after the gills", "哺乳類：血液は肺のあと心臓に戻って再び送り出されるので、体は高い圧力の血液を受け取る。魚では、えらのあとで圧力が下がる", "哺乳動物：血液經肺後回到心臟再被泵出，所以身體接收較高壓的血液；魚的血壓在鰓之後下降")
      ],
      modelAnswer: T("In a fish, blood goes heart → gills → body → heart, so it passes through the heart once per circuit. In a mammal, blood goes right side of heart → lungs → left side of heart → body → right side, passing through the heart twice. In mammals the blood is pumped again after the lungs, so it reaches the body at higher pressure; in fish the pressure falls after the gills.", "魚では血液は心臓 → えら → 体 → 心臓と流れ、1周で心臓を1回通る。哺乳類では血液は心臓の右側 → 肺 → 心臓の左側 → 体 → 右側と流れ、心臓を2回通る。哺乳類では肺のあとで再び送り出されるので高い圧力で体に届く。魚ではえらのあとで圧力が下がる。", "魚的血液流向是心臟 → 鰓 → 身體 → 心臟，每圈通過心臟一次。哺乳動物的血液流向是心臟右側 → 肺 → 心臟左側 → 身體 → 右側，通過心臟兩次。哺乳動物的血液在經肺後再被泵出，所以以較高壓力到達身體；魚的血壓在鰓之後下降。") },
    { id: "b3-2-q17", type: "order", ahl: true, difficulty: 2, ref: "B3.2.15", paper: "1A",
      stem: T("Put these structures in the order that a red blood cell passes through them, starting at the vena cava.", "赤血球が通る順に、大静脈から始めて次の構造を並べなさい。", "把以下結構按紅血球流經的次序排列，由腔靜脈開始。"),
      items: [
        T("Vena cava", "大静脈", "腔靜脈"),
        T("Right atrium", "右心房", "右心房"),
        T("Right ventricle", "右心室", "右心室"),
        T("Pulmonary artery", "肺動脈", "肺動脈"),
        T("Lungs", "肺", "肺"),
        T("Pulmonary vein", "肺静脈", "肺靜脈"),
        T("Left atrium", "左心房", "左心房"),
        T("Left ventricle", "左心室", "左心室"),
        T("Aorta", "大動脈", "主動脈")
      ],
      explanation: T("Deoxygenated blood goes from the body into the right side of the heart, then to the lungs, returns to the left side, and then goes to the body. The pulmonary vein is the one vein that carries oxygenated blood.", "酸素の少ない血液は、体から心臓の右側へ入り、肺へ行き、左側に戻って、体へ向かいます。肺静脈は、酸素の多い血液を運ぶ唯一の静脈です。", "缺氧血由身體進入心臟右側，然後到肺，返回左側，再到身體。肺靜脈是唯一運載含氧血的靜脈。") },
    { id: "b3-2-q18", type: "mcq", ahl: true, difficulty: 2, ref: "B3.2.15", paper: "1A",
      stem: T("Why is the wall of the left ventricle thicker than the wall of the right ventricle?", "左心室の壁が右心室の壁より厚いのはなぜか。", "為何左心室壁比右心室壁厚？"),
      options: [
        T("It must pump blood at higher pressure to the whole body, whereas the right ventricle pumps blood only to the nearby lungs.", "全身へより高い圧力で血液を送る必要があり、右心室は近くの肺にだけ送るから。", "它必須以較高壓力把血液泵到全身，而右心室只把血液泵到附近的肺。"),
        T("It holds more oxygen than the right ventricle.", "右心室より多くの酸素を保持するから。", "它比右心室儲存更多氧氣。"),
        T("It contains the pacemaker.", "ペースメーカーを含むから。", "它含有起搏點。"),
        T("It receives blood directly from the vena cava.", "大静脈から直接血液を受け取るから。", "它直接接收來自腔靜脈的血液。")
      ],
      answer: 0,
      explanation: T("Thick muscle generates high pressure for the systemic circulation. The pacemaker is in the right atrium (C), and the vena cava empties into the right atrium (D).", "厚い筋肉が、体循環のための高い圧力を生みます。ペースメーカーは右心房にあり（C）、大静脈は右心房に注ぎます（D）。", "厚的肌肉為體循環產生高壓。起搏點在右心房（C），腔靜脈注入右心房（D）。") },
    { id: "b3-2-q19", type: "short", ahl: true, difficulty: 3, ref: "B3.2.16", paper: "1B", commandTerm: "Deduce", marks: 6,
      stem: T("The table shows pressures in the left atrium, left ventricle and aorta during one cardiac cycle (illustrative data, mmHg). (a) Deduce, with reasons, whether the atrioventricular valve is open or closed at 0.1 s. (b) Deduce, with reasons, whether the semilunar (aortic) valve is open or closed at 0.2 s. (c) State the approximate systolic and diastolic blood pressures in the aorta. (d) Explain why the ventricular pressure is low at 0.5 s.", "表は、1回の心周期における左心房、左心室、大動脈の圧力である（イラスト用データ、mmHg）。(a) 0.1秒で房室弁が開いているか閉じているかを、理由とともに推論しなさい。(b) 0.2秒で半月弁（大動脈弁）が開いているか閉じているかを、理由とともに推論しなさい。(c) 大動脈のおおよその収縮期血圧と拡張期血圧を述べなさい。(d) 0.5秒で心室の圧力が低い理由を説明しなさい。", "下表顯示一個心動週期中左心房、左心室和主動脈的壓力（示範數據，mmHg）。(a) 推斷0.1秒時房室瓣是張開還是關閉，並說明理由。(b) 推斷0.2秒時半月瓣（主動脈瓣）是張開還是關閉，並說明理由。(c) 說明主動脈大約的收縮壓和舒張壓。(d) 解釋為何0.5秒時心室壓力低。"),
      data: T(
        `<table><tr><th>Time (s)</th><th>Left atrium</th><th>Left ventricle</th><th>Aorta</th></tr><tr><td>0.0</td><td>8</td><td>5</td><td>80</td></tr><tr><td>0.1</td><td>6</td><td>9</td><td>80</td></tr><tr><td>0.2</td><td>6</td><td>100</td><td>98</td></tr><tr><td>0.3</td><td>8</td><td>120</td><td>118</td></tr><tr><td>0.4</td><td>10</td><td>100</td><td>108</td></tr><tr><td>0.5</td><td>6</td><td>4</td><td>98</td></tr><tr><td>0.6</td><td>5</td><td>4</td><td>90</td></tr><tr><td>0.7</td><td>6</td><td>5</td><td>84</td></tr></table>`,
        `<table><tr><th>時間 (s)</th><th>左心房</th><th>左心室</th><th>大動脈</th></tr><tr><td>0.0</td><td>8</td><td>5</td><td>80</td></tr><tr><td>0.1</td><td>6</td><td>9</td><td>80</td></tr><tr><td>0.2</td><td>6</td><td>100</td><td>98</td></tr><tr><td>0.3</td><td>8</td><td>120</td><td>118</td></tr><tr><td>0.4</td><td>10</td><td>100</td><td>108</td></tr><tr><td>0.5</td><td>6</td><td>4</td><td>98</td></tr><tr><td>0.6</td><td>5</td><td>4</td><td>90</td></tr><tr><td>0.7</td><td>6</td><td>5</td><td>84</td></tr></table>`,
        `<table><tr><th>時間 (s)</th><th>左心房</th><th>左心室</th><th>主動脈</th></tr><tr><td>0.0</td><td>8</td><td>5</td><td>80</td></tr><tr><td>0.1</td><td>6</td><td>9</td><td>80</td></tr><tr><td>0.2</td><td>6</td><td>100</td><td>98</td></tr><tr><td>0.3</td><td>8</td><td>120</td><td>118</td></tr><tr><td>0.4</td><td>10</td><td>100</td><td>108</td></tr><tr><td>0.5</td><td>6</td><td>4</td><td>98</td></tr><tr><td>0.6</td><td>5</td><td>4</td><td>90</td></tr><tr><td>0.7</td><td>6</td><td>5</td><td>84</td></tr></table>`),
      markscheme: [
        T("(a) Closed", "(a) 閉じている", "(a) 關閉"),
        T("(a) Ventricular pressure (9) is higher than atrial pressure (6), so blood would flow back and push the valve shut", "(a) 心室の圧力 (9) が心房の圧力 (6) より高く、血液が逆流して弁を押し閉じるから", "(a) 心室壓力 (9) 高於心房壓力 (6)，血液會倒流並把瓣膜推閉"),
        T("(b) Open", "(b) 開いている", "(b) 張開"),
        T("(b) Ventricular pressure (100) is higher than aortic pressure (98), so blood is forced into the aorta", "(b) 心室の圧力 (100) が大動脈の圧力 (98) より高く、血液が大動脈へ押し出されるから", "(b) 心室壓力 (100) 高於主動脈壓力 (98)，血液被迫進入主動脈"),
        T("(c) Systolic about 118 (120) mmHg; diastolic about 80 mmHg", "(c) 収縮期血圧は約118（120）mmHg、拡張期血圧は約80 mmHg", "(c) 收縮壓約118（120）mmHg；舒張壓約80 mmHg"),
        T("(d) The ventricle is relaxing (diastole) / not contracting, so the pressure falls (and the semilunar valve is closed so the aortic pressure is not transmitted)", "(d) 心室がゆるんでいる（拡張期）／収縮していないので圧力が下がる（半月弁は閉じているので大動脈の圧力は伝わらない）", "(d) 心室正在鬆弛（舒張期）／沒有收縮，所以壓力下降（半月瓣關閉，主動脈壓力不會傳入）")
      ],
      modelAnswer: T("(a) Closed, because the ventricular pressure (9) is higher than the atrial pressure (6). (b) Open, because the ventricular pressure (100) is higher than the aortic pressure (98), so blood is forced into the aorta. (c) Systolic about 118 mmHg, diastolic about 80 mmHg. (d) The ventricle is relaxing (diastole), so its pressure is low.", "(a) 閉じている。心室の圧力 (9) が心房の圧力 (6) より高いから。(b) 開いている。心室の圧力 (100) が大動脈の圧力 (98) より高く、血液が大動脈へ押し出されるから。(c) 収縮期血圧は約118 mmHg、拡張期血圧は約80 mmHg。(d) 心室がゆるんでいる（拡張期）ので圧力が低い。", "(a) 關閉，因為心室壓力 (9) 高於心房壓力 (6)。(b) 張開，因為心室壓力 (100) 高於主動脈壓力 (98)，血液被迫進入主動脈。(c) 收縮壓約118 mmHg，舒張壓約80 mmHg。(d) 心室正在鬆弛（舒張期），所以壓力低。") },
    { id: "b3-2-q20", type: "mcq", ahl: true, difficulty: 2, ref: "B3.2.17", paper: "1A",
      stem: T("In which situation is root pressure most important for moving water up the xylem?", "木部で水を上昇させるうえで、根圧が最も重要になるのはどの状況か。", "在哪種情況下，根壓對木質部水分上升最為重要？"),
      options: [
        T("A hot, dry, windy afternoon with open stomata", "高温で乾燥し、風の強い午後で、気孔が開いている", "炎熱、乾燥、有風的下午，氣孔張開"),
        T("A humid night, or spring before the leaves of a deciduous tree have opened", "湿度の高い夜、または落葉樹の葉が開く前の春", "潮濕的夜晚，或落葉樹葉未展開前的春天"),
        T("When the plant is in full sunlight at midday", "植物が真昼に直射日光を浴びているとき", "植物在正午的充足陽光下"),
        T("When the xylem vessels are full of air", "木部の道管が空気でいっぱいのとき", "木質部導管充滿空氣時")
      ],
      answer: 1,
      explanation: T("Root pressure matters when transpiration is too low to pull water up (high humidity or no leaves). A and C describe conditions of high transpiration, when tension does the work. D would stop both mechanisms.", "根圧が重要になるのは、蒸散が少なくて水を引き上げられないとき（高い湿度や葉がないとき）です。AとCは蒸散が盛んで、張力が働く条件です。Dはどちらの仕組みも止めてしまいます。", "根壓在蒸騰作用太低、不足以向上拉水時（高濕度或沒有葉）才重要。A和C描述的是蒸騰作用旺盛、由張力發揮作用的情況。D會使兩種機制都停止。") },
    { id: "b3-2-q21", type: "short", ahl: true, difficulty: 3, ref: "B3.2.18", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain how the structure of sieve tube elements and companion cells is adapted for the translocation of sap.", "師管要素と伴細胞の構造が、師管液の転流にどのように適応しているか説明しなさい。", "解釋篩管分子與伴細胞的結構如何適應汁液的運移。"),
      markscheme: [
        T("Sieve plates: pores in the end walls allow sap to flow from cell to cell", "師板：端壁の孔により、師管液が細胞から細胞へ流れる", "篩板：端壁上的孔使汁液由一個細胞流到另一個細胞"),
        T("Sieve tube elements have little cytoplasm/few organelles/no nucleus, giving less resistance to flow", "師管要素は細胞質が少なく、細胞小器官も少なく、核がないので、流れへの抵抗が小さい", "篩管分子細胞質少／胞器少／無細胞核，對流動的阻力較小"),
        T("Companion cells have many mitochondria to make ATP for active loading of sucrose into the sieve tube at sources", "伴細胞は多数のミトコンドリアを持ち、ソースでスクロースを師管へ能動的に積み込むATPをつくる", "伴細胞有許多線粒體製造ATP，用於在源處把蔗糖主動裝載入篩管"),
        T("Plasmodesmata link the companion cell and the sieve tube element so substances can pass between them", "原形質連絡が伴細胞と師管要素をつなぎ、物質が両者の間を移動できる", "胞間連絲連接伴細胞與篩管分子，使物質可在兩者間通過")
      ],
      modelAnswer: T("Sieve plates have pores that allow sap to pass between cells. Sieve tube elements have reduced cytoplasm and no nucleus, which reduces resistance to flow. Companion cells have many mitochondria that supply ATP for active loading of sucrose at sources. Plasmodesmata connect companion cells to the sieve tube elements so that substances can pass between them.", "師板の孔により、師管液が細胞間を通れる。師管要素は細胞質が少なく核がないので、流れへの抵抗が小さい。伴細胞は多数のミトコンドリアを持ち、ソースでのスクロースの能動的な積み込みにATPを供給する。原形質連絡が伴細胞と師管要素をつなぎ、物質が両者の間を移動できる。", "篩板的孔容許汁液在細胞之間通過。篩管分子細胞質減少、沒有細胞核，降低對流動的阻力。伴細胞有許多線粒體，為在源處主動裝載蔗糖提供ATP。胞間連絲把伴細胞與篩管分子相連，使物質可在兩者間通過。") },
    { id: "b3-2-q23", type: "short", ahl: false, difficulty: 2, ref: "B3.2.2", paper: "1B", commandTerm: "Deduce", marks: 3, stem: T("The table shows measurements from a transverse section of two blood vessels, P and Q, in a micrograph (illustrative data). (a) Calculate the wall thickness ÷ lumen diameter ratio for vessel P. (b) Deduce, with two reasons, which vessel is the artery.", "表は、顕微鏡写真に見える2本の血管PとQの横断面の測定値である（説明用データ）。(a) 血管Pの壁の厚さ ÷ 管腔の直径の比を計算せよ。(b) 2つの理由を挙げて、どちらが動脈かを推論せよ。", "下表顯示顯微照片中兩條血管P和Q橫切面的量度值（示意數據）。(a) 計算血管P的管壁厚度 ÷ 管腔直徑的比值。(b) 推斷哪一條是動脈，並給出兩個理由。"), data: T("<table><tr><th>Vessel</th><th>Wall thickness (mm)</th><th>Lumen diameter (mm)</th></tr><tr><td>P</td><td>1.1</td><td>2.2</td></tr><tr><td>Q</td><td>0.15</td><td>4.0</td></tr></table>", "<table><tr><th>血管</th><th>壁の厚さ (mm)</th><th>管腔の直径 (mm)</th></tr><tr><td>P</td><td>1.1</td><td>2.2</td></tr><tr><td>Q</td><td>0.15</td><td>4.0</td></tr></table>", "<table><tr><th>血管</th><th>管壁厚度 (mm)</th><th>管腔直徑 (mm)</th></tr><tr><td>P</td><td>1.1</td><td>2.2</td></tr><tr><td>Q</td><td>0.15</td><td>4.0</td></tr></table>"), markscheme: [T("(a) 1.1 ÷ 2.2 = 0.5", "(a) 1.1 ÷ 2.2 = 0.5", "(a) 1.1 ÷ 2.2 = 0.5"),
        T("(b) P is the artery", "(b) Pが動脈", "(b) P是動脈"),
        T("(b) P has a thick wall compared with its lumen (ratio 0.5, whereas Q is about 0.04)", "(b) Pは管腔に比べて壁が厚い（比は0.5。Qは約0.04）", "(b) P的管壁相對於管腔較厚（比值0.5，而Q約為0.04）"),
        T("(b) P has a narrow lumen (2.2 mm compared with 4.0 mm in Q) / a thick wall of muscle and elastic tissue withstands high pressure", "(b) Pは管腔が狭い（Qの4.0 mmに対して2.2 mm）／筋肉と弾性組織の厚い壁が高い圧力に耐える", "(b) P的管腔較窄（Q為4.0 mm，P為2.2 mm）／由肌肉和彈性組織構成的厚壁能承受高壓")], modelAnswer: T("(a) 1.1 ÷ 2.2 = 0.5. (b) P is the artery, because its wall is thick compared with its lumen (ratio 0.5 against about 0.04 for Q) and its lumen is narrow. A thick wall of muscle and elastic tissue is needed to withstand high pressure.", "(a) 1.1 ÷ 2.2 = 0.5。(b) Pが動脈。管腔に比べて壁が厚く（比は0.5、Qは約0.04）、管腔が狭いから。高い圧力に耐えるため、筋肉と弾性組織の厚い壁が必要。", "(a) 1.1 ÷ 2.2 = 0.5。(b) P是動脈，因為其管壁相對於管腔較厚（比值0.5，Q約0.04），管腔也較窄。需要由肌肉和彈性組織構成的厚壁來承受高壓。") },
    { id: "b3-2-q24", type: "short", ahl: false, difficulty: 3, ref: "B3.2.4", paper: "1B", commandTerm: "Evaluate", marks: 4, stem: T("A student counted the pulse at the wrist for 30 s in three trials at rest: 41, 39 and 43 beats. A heart-rate monitor on the same student gave a mean of 80 beats per minute. (a) Calculate the student's mean heart rate from the manual counts. (b) Evaluate the use of manual counting compared with the monitor.", "ある生徒が安静時に手首の脈拍を30秒間数える測定を3回行い、41拍、39拍、43拍だった。同じ生徒に付けた心拍計の平均は80拍/分だった。(a) 手で数えた値から平均心拍数を計算せよ。(b) 手で数える方法を心拍計と比べて評価せよ。", "某學生在休息時，於手腕量度脈搏，每次數30秒，共三次：41、39和43下。同一學生佩戴的心率監測器顯示平均為每分鐘80下。(a) 由人手計數計算該學生的平均心率。(b) 比較人手計數與監測器，作出評價。"), markscheme: [T("(a) Mean of counts = (41 + 39 + 43) ÷ 3 = 41 beats per 30 s", "(a) 回数の平均 = (41 + 39 + 43) ÷ 3 = 30秒で41拍", "(a) 計數平均 = (41 + 39 + 43) ÷ 3 = 每30秒41下"),
        T("(a) 41 × 2 = 82 beats per minute", "(a) 41 × 2 = 82拍/分", "(a) 41 × 2 = 每分鐘82下"),
        T("(b) The manual mean (82) is close to the monitor (80), so manual counting gives a reasonable estimate; it is cheap and needs no equipment", "(b) 手で数えた平均 (82) は心拍計 (80) に近く、妥当な推定値になる。安価で器具も不要", "(b) 人手計數的平均值 (82) 接近監測器 (80)，所以是合理的估計；它便宜且無需儀器"),
        T("(b) But counting is less precise: a miscount or a short 30 s count is magnified by doubling, and the counts vary (39 to 43); the monitor records continuously and avoids counting error, although it needs correct fitting and calibration", "(b) ただし精度は低い。数え間違いや30秒という短さは2倍にすると拡大され、回ごとのばらつき (39〜43) もある。心拍計は連続記録で数え間違いがないが、正しい装着と較正が必要", "(b) 但精確度較低：數錯或30秒的短時間在乘以2後會被放大，各次計數也有差異 (39至43)；監測器可持續記錄，沒有計數誤差，但需正確佩戴及校準")], modelAnswer: T("(a) (41 + 39 + 43) ÷ 3 = 41 beats per 30 s, so 82 beats per minute. (b) The manual value is close to the monitor's 80, and counting is cheap and needs no equipment. However, a miscount in a 30 s period is doubled and the three counts vary, so it is less precise than a monitor, which records continuously without counting errors but must be fitted and calibrated correctly.", "(a) (41 + 39 + 43) ÷ 3 = 30秒で41拍、つまり82拍/分。(b) 手で数えた値は心拍計の80に近く、安価で器具も不要。しかし30秒間の数え間違いは2倍になり、3回の値にもばらつきがあるので、心拍計より精度は低い。心拍計は数え間違いなく連続記録できるが、正しい装着と較正が必要。", "(a) (41 + 39 + 43) ÷ 3 = 每30秒41下，即每分鐘82下。(b) 人手計數的數值接近監測器的80，且便宜、無需儀器。但30秒內數錯會被放大一倍，三次計數亦有差異，所以不及監測器精確；監測器可持續記錄且沒有計數錯誤，但必須正確佩戴和校準。") },
    { id: "b3-2-q25", type: "multi", ahl: true, difficulty: 2, ref: "B3.2.11", paper: "1A", stem: T("Which statements about tissue fluid are correct? Select all that apply.", "組織液について正しい記述はどれか。当てはまるものをすべて選びなさい。", "關於組織液，哪些陳述正確？選出所有適用者。"), options: [T("It is formed when high pressure at the arteriole end forces plasma out of the capillary", "細動脈側の高い圧力で血しょうが毛細血管から押し出されて生じる", "在微動脈端，高壓迫使血漿離開微血管而形成"),
        T("It contains a much lower concentration of large proteins than plasma", "大きなタンパク質の濃度が血しょうよりずっと低い", "大型蛋白質的濃度比血漿低得多"),
        T("It contains many red blood cells", "多くの赤血球を含む", "含有許多紅血球"),
        T("It is the medium through which oxygen passes from capillaries to cells", "酸素が毛細血管から細胞へ移るときの媒体である", "是氧由微血管傳到細胞所經過的介質")], answer: [0,
        1,
        3], explanation: T("A, B and D are correct. Tissue fluid is a filtrate of plasma formed by pressure filtration, with most large proteins left behind, and it carries oxygen and nutrients to cells and wastes away from them. C is wrong: red blood cells are too large to leave the capillary.", "A、B、Dが正しい。組織液は圧ろ過で血しょうからできるろ液で、大きなタンパク質の大部分は残る。また酸素や栄養分を細胞へ、老廃物を細胞から運ぶ。Cは誤り。赤血球は大きすぎて毛細血管から出られない。", "A、B和D正確。組織液是壓力過濾由血漿形成的濾液，大部分大型蛋白質被留下，並把氧和養分送到細胞、把廢物帶離細胞。C錯誤：紅血球太大，無法離開微血管。") },
    { id: "b3-2-q26", type: "short", ahl: true, difficulty: 3, ref: "B3.2.13", paper: "2", commandTerm: "Explain", marks: 3, stem: T("Explain why a blockage in the lymph ducts of a leg can cause the leg to swell.", "脚のリンパ管がふさがると脚が腫れることがあるのはなぜか説明せよ。", "解釋為何腿部淋巴管阻塞可引致腿部腫脹。"), markscheme: [T("More fluid leaves the capillaries (as tissue fluid) than drains back into them", "毛細血管から出る液体（組織液）のほうが、毛細血管へ戻る液体より多い", "離開微血管（成為組織液）的液體比回流的多"),
        T("The excess is normally drained by the lymph ducts and returned to the blood in veins near the heart", "余分は通常リンパ管に排出され、心臓近くの静脈で血液に戻される", "多餘的液體通常由淋巴管引流，並在靠近心臟的靜脈回到血液"),
        T("If the ducts are blocked, the tissue fluid cannot drain away, so it accumulates in the tissue and causes swelling (oedema)", "管がふさがると組織液を排出できず、組織にたまって腫れ（浮腫）を起こす", "若管道阻塞，組織液無法排走，便積聚在組織中引致腫脹（水腫）")], modelAnswer: T("More fluid leaves the capillaries than returns to them. The excess tissue fluid is normally removed by lymph ducts and returned to the blood. If they are blocked, the fluid cannot drain away and builds up in the tissue, causing swelling.", "毛細血管から出る液体のほうが戻る液体より多い。余分な組織液は通常リンパ管で取り除かれ血液に戻される。リンパ管がふさがると液体が排出できず組織にたまり、腫れを起こす。", "離開微血管的液體比回流的多。多餘的組織液通常由淋巴管清走並送回血液。若淋巴管阻塞，液體無法排走，便積聚在組織中，引致腫脹。") },
    { id: "b3-2-q27", type: "short", ahl: true, difficulty: 3, ref: "B3.2.17", paper: "2", commandTerm: "Compare", marks: 4, stem: T("Compare and contrast the roles of transpiration and root pressure in moving water up the xylem.", "木部で水を上昇させるうえでの蒸散と根圧の役割を比較対照せよ。", "比較並對比蒸騰作用與根壓在使水沿木質部上升中的作用。"), markscheme: [T("Both move water upwards through the xylem", "どちらも木部で水を上へ運ぶ", "兩者都使水沿木質部向上移動"),
        T("Transpiration creates tension / negative pressure that pulls water, whereas root pressure is a positive pressure that pushes water", "蒸散は水を引く張力／負の圧力をつくるのに対し、根圧は水を押す正の圧力である", "蒸騰作用產生拉水的張力／負壓，而根壓是推水的正壓"),
        T("Root pressure needs ATP (active transport of mineral ions into the xylem, then osmosis), whereas transpiration uses energy from the Sun", "根圧にはATP（無機イオンの木部への能動輸送、続いて浸透）が必要だが、蒸散は太陽のエネルギーを使う", "根壓需要ATP（把礦物離子主動運輸入木質部，其後水藉滲透作用進入），而蒸騰作用使用太陽的能量"),
        T("Transpiration is the main force in tall plants / when stomata are open; root pressure is only important when transpiration is low (humid air, before leaves open) and cannot lift water to the top of tall trees", "蒸散は背の高い植物／気孔が開いているときの主な力。根圧は蒸散が少ないとき（湿った空気、葉が開く前）にだけ重要で、高い木の先端までは水を上げられない", "蒸騰作用是高大植物／氣孔張開時的主要動力；根壓只在蒸騰弱時（空氣潮濕、葉未展開前）才重要，無法把水送到高樹頂部")], modelAnswer: T("Both move water up the xylem. Transpiration pulls water by creating tension (negative pressure), whereas root pressure pushes water with a positive pressure. Root pressure needs ATP for active transport of ions followed by osmosis; transpiration uses energy from the Sun. Transpiration is the main force in tall plants, but root pressure matters only when transpiration is low and cannot lift water to a treetop.", "どちらも木部で水を上へ運ぶ。蒸散は張力（負の圧力）をつくって水を引くのに対し、根圧は正の圧力で水を押す。根圧はイオンの能動輸送（その後の浸透）にATPを必要とし、蒸散は太陽のエネルギーを使う。蒸散は背の高い植物での主な力で、根圧は蒸散が少ないときだけ重要であり、木の先端まで水を上げられない。", "兩者都使水沿木質部上升。蒸騰作用藉產生張力（負壓）拉水，而根壓以正壓推水。根壓需要ATP進行離子主動運輸，其後再有滲透作用；蒸騰作用使用太陽能量。蒸騰作用是高大植物的主要動力，根壓只在蒸騰弱時才重要，無法把水送到樹頂。") }
  ]
});
})();
