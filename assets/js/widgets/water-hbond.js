/* Widget: water-hbond — polarity of water, hydrogen bonds, and the water properties listed in IB A1.1.2–A1.1.6.
   Scenes: structure, cohesion (xylem, surface tension), adhesion (wall, capillary rise), solvent, water vs air.
   Qualitative models only (not to scale). */
(function () {
  var L = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko || en }; };
  var RAD = Math.PI / 180;
  var MINUS = "−";

  var CSS = [
    ".w-water-hbond{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
    ".w-water-hbond details{font-size:.85rem}",
    ".w-water-hbond summary{cursor:pointer;min-height:2rem;font-weight:700}",
    ".w-water-hbond .wh-sub{font:inherit;font-size:.88rem;font-weight:700;min-height:2.5rem;padding:.3rem .7rem;border-radius:var(--radius,6px);border:1.5px solid var(--line-strong,var(--line,#c3d0d7));background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer;line-height:1.2}",
    ".w-water-hbond .wh-sub[aria-pressed=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-water-hbond .wh-sub:focus-visible,.w-water-hbond input:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-water-hbond .wh-subs{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center;margin:0}",
    ".w-water-hbond .wh-sub{min-height:2.5rem;font-size:.82rem}",
    ".w-water-hbond label.wh-chk{display:inline-flex;align-items:center;gap:.4rem;font-size:.88rem;min-height:2.25rem;padding:0 .3rem;cursor:pointer}",
    ".w-water-hbond label.wh-chk input{width:1.15rem;height:1.15rem;accent-color:var(--accent,#2547c7)}",
        ".w-water-hbond svg{display:block;width:100%;height:auto;max-height:var(--stage-max,440px)}",
    ".w-water-hbond svg text{fill:var(--ink,#0f2029);font-family:var(--font-body,system-ui,sans-serif)}",
    ".w-water-hbond .wh-cap{margin:0;font-size:.92rem;line-height:1.5}",
    ".w-water-hbond .wh-cap strong{font-weight:800}",
    ".w-water-hbond .wh-air{padding:.4rem .2rem}",
    ".w-water-hbond .wh-bar{display:grid;grid-template-columns:5.5rem 1fr;gap:.5rem;align-items:center;margin:.35rem 0;font-size:.9rem}",
    ".w-water-hbond .wh-track{background:var(--surface-2,#e3eaee);border-radius:4px;height:1.4rem;overflow:hidden}",
    ".w-water-hbond .wh-fill{height:100%;border-radius:4px}",
    ".w-water-hbond .wh-fill.w{background:var(--accent,#2547c7)}",
    ".w-water-hbond .wh-fill.a{background:var(--muted,#4d626d)}",
    ".w-water-hbond .wh-ex{margin:0;padding:.6rem .8rem;background:var(--surface-2,#e3eaee);border-radius:var(--radius,6px);font-size:.9rem;line-height:1.5}",
    ".w-water-hbond .wh-note{margin:0;font-size:.78rem;color:var(--muted,#4d626d)}"
  ].join("\n");

  var T = {
    title: L("Water: polarity, hydrogen bonds and properties", "水：極性・水素結合・性質", "水：極性、氫鍵與性質", "물: 극성, 수소 결합, 성질"),
    tabs: {
      structure: L("Polarity & H-bonds", "極性と水素結合 (polarity)", "極性與氫鍵 (polarity)", "극성과 수소 결합 (polarity)"),
      cohesion: L("Cohesion", "凝集力 (cohesion)", "內聚力 (cohesion)", "응집력 (cohesion)"),
      adhesion: L("Adhesion", "付着力 (adhesion)", "附著力 (adhesion)", "부착력 (adhesion)"),
      solvent: L("Solvent", "溶媒 (solvent)", "溶劑 (solvent)", "용매 (solvent)"),
      air: L("Water vs air", "水と空気 (water vs air)", "水與空氣 (water vs air)", "물과 공기 (water vs air)")
    },
    charges: L("Show partial charges (δ+ / δ−)", "部分電荷 (δ+ / δ−) を表示", "顯示部分電荷 (δ+ / δ−)", "부분 전하 표시 (δ+ / δ−)"),
    bonds: L("Show hydrogen bonds", "水素結合を表示", "顯示氫鍵", "수소 결합 표시"),
    legCov: L("covalent bond (inside a molecule)", "共有結合 (covalent bond)：分子の内部", "共價鍵 (covalent bond)：分子內部", "공유 결합(covalent bond): 분자 내부"),
    legH: L("hydrogen bond (between molecules)", "水素結合 (hydrogen bond)：分子の間", "氫鍵 (hydrogen bond)：分子之間", "수소 결합(hydrogen bond): 분자 사이"),
    legAd: L("adhesion: water to wall", "付着力 (adhesion)：水と壁", "附著力 (adhesion)：水與壁", "부착력(adhesion): 물과 벽"),
    legCo: L("cohesion: water to water", "凝集力 (cohesion)：水と水", "內聚力 (cohesion)：水與水", "응집력(cohesion): 물과 물"),
    notScale: L("Qualitative model, not to scale.", "定性的なモデルで、縮尺は正確ではありません。", "定性模型，並非按比例繪製。", "정성적 모형이며 축척은 정확하지 않다."),
    sub: {
      xylem: L("Xylem (tension)", "木部 (張力)", "木質部 (張力)", "물관 (장력)"),
      surface: L("Surface tension", "表面張力 (surface tension)", "表面張力 (surface tension)", "표면 장력 (surface tension)"),
      wall: L("At a wall", "壁のそば", "在壁旁", "벽 옆"),
      capillary: L("Capillary rise", "毛細管現象 (capillary action)", "毛細管作用 (capillary action)", "모세관 현상 (capillary action)"),
      nacl: L("Salt (ions)", "塩 (イオン (ions))", "鹽 (離子 (ions))", "염 (이온(ions))"),
      glucose: L("Glucose (polar)", "グルコース (極性 (polar))", "葡萄糖 (極性 (polar))", "포도당 (극성(polar))"),
      oil: L("Oil (non-polar)", "油 (無極性 (non-polar))", "油 (非極性 (non-polar))", "기름 (무극성(non-polar))")
    },
    dissolve: L("Add water", "水を加える", "加水", "물 넣기"),
    reset: L("Reset crystal", "結晶に戻す", "還原晶體", "결정으로 되돌리기"),
    cap: {
      structure: L(
        "<strong>Polar:</strong> oxygen pulls the shared electrons, so O is slightly negative (δ−) and each H slightly positive (δ+). A <strong>hydrogen bond</strong> is the attraction between the δ+ H of one molecule and the δ− O of a different molecule.",
        "<strong>極性 (polar)：</strong>酸素が共有電子を引き寄せるため、O はわずかに負 (δ−)、各 H はわずかに正 (δ+) になります。<strong>水素結合 (hydrogen bond)</strong> は、ある分子の δ+ の H と別の分子の δ− の O の間の引力です。",
        "<strong>極性 (polar)：</strong>氧吸引共用電子，所以 O 略帶負電 (δ−)，每個 H 略帶正電 (δ+)。<strong>氫鍵 (hydrogen bond)</strong> 是一個分子 δ+ 的 H 與另一分子 δ− 的 O 之間的吸引力。", "<strong>극성(polar):</strong> 산소가 공유 전자를 끌어당기므로 O는 약하게 음(δ−)을 띠고 각 H는 약하게 양(δ+)을 띤다. <strong>수소 결합(hydrogen bond)</strong>은 한 분자의 δ+ H와 다른 분자의 δ− O 사이의 인력이다."),
      xylem: L(
        "<strong>Cohesion in xylem:</strong> evaporation from leaves pulls the water upwards (tension). Hydrogen bonds hold the water molecules together, so the column is pulled up without breaking.",
        "<strong>木部 (xylem) での凝集力：</strong>葉からの蒸発が水を上へ引っ張ります (張力)。水素結合が水分子をつなぎとめるので、水の柱は途切れずに引き上げられます。",
        "<strong>木質部 (xylem) 中的內聚力：</strong>葉片蒸發水分，把水向上拉 (張力)。氫鍵把水分子連在一起，所以水柱被拉上而不會斷裂。", "<strong>물관(xylem)에서의 응집력:</strong> 잎에서 일어나는 증발이 물을 위로 끌어올린다(장력). 수소 결합이 물 분자를 서로 붙들어 주므로 물기둥은 끊어지지 않고 끌려 올라간다."),
      surface: L(
        "<strong>Surface tension:</strong> surface molecules are pulled sideways and downwards by hydrogen bonds, but not upwards. The surface acts like a thin skin that can support a pond skater.",
        "<strong>表面張力：</strong>水面の分子は水素結合で横と下に引かれますが、上には引かれません。水面は薄い膜のようにはたらき、アメンボを支えられます。",
        "<strong>表面張力：</strong>水面的分子受氫鍵向側面和向下拉，但不會向上。水面像一層薄膜，可以托起水黽。", "<strong>표면 장력(surface tension):</strong> 표면의 분자는 수소 결합으로 옆과 아래로 끌리지만 위로는 끌리지 않는다. 표면은 얇은 막처럼 작용하여 소금쟁이를 떠받칠 수 있다."),
      wall: L(
        "<strong>Adhesion:</strong> water's δ+ hydrogen atoms are attracted to δ− sites on a polar or charged surface such as cellulose in a cell wall or a soil particle. Cohesion then holds the next layer of water to the first.",
        "<strong>付着力：</strong>水の δ+ の水素は、細胞壁のセルロースや土壌粒子のような、極性または電荷をもつ表面の δ− の部位に引かれます。そして凝集力が、次の層の水を最初の層につなぎとめます。",
        "<strong>附著力：</strong>水 δ+ 的氫原子被極性或帶電表面 (如細胞壁中的纖維素或土壤顆粒) 上 δ− 的位置吸引。然後內聚力把下一層水與第一層連在一起。", "<strong>부착력(adhesion):</strong> 물의 δ+ 수소 원자는 세포벽의 셀룰로스나 토양 입자처럼 극성이거나 전하를 띠는 표면의 δ− 부위에 끌린다. 그러면 응집력이 다음 층의 물을 첫 번째 층에 붙들어 둔다."),
      capillary: L(
        "<strong>Capillary action:</strong> adhesion pulls water up the wall of a narrow space and cohesion drags the rest of the water after it. The narrower the space, the higher the water rises (soil, plant cell walls).",
        "<strong>毛細管現象：</strong>付着力が狭い空間の壁に沿って水を引き上げ、凝集力が残りの水を引きずります。空間が狭いほど水は高く上昇します (土壌、植物の細胞壁)。",
        "<strong>毛細管作用：</strong>附著力沿狹窄空間的壁把水向上拉，內聚力把其餘的水拉上。空間越窄，水升得越高 (土壤、植物細胞壁)。", "<strong>모세관 현상(capillary action):</strong> 부착력이 좁은 공간의 벽을 따라 물을 끌어올리고, 응집력이 나머지 물을 뒤따라 끌어올린다. 공간이 좁을수록 물은 더 높이 올라간다(토양, 식물 세포벽)."),
      nacl: L(
        "<strong>Ions dissolve:</strong> δ− oxygen atoms are attracted to Na⁺ and δ+ hydrogen atoms to Cl⁻. Water molecules surround each ion and keep the ions apart.",
        "<strong>イオン (ion) は溶ける：</strong>δ− の酸素は Na⁺ に、δ+ の水素は Cl⁻ に引かれます。水分子が各イオンを取り囲み、イオンどうしを引き離しておきます。",
        "<strong>離子 (ion) 溶解：</strong>δ− 的氧吸引 Na⁺，δ+ 的氫吸引 Cl⁻。水分子包圍每個離子，並使離子彼此分開。", "<strong>이온이 녹는다:</strong> δ− 산소 원자는 Na⁺에, δ+ 수소 원자는 Cl⁻에 끌린다. 물 분자가 각 이온을 둘러싸서 이온끼리 떨어져 있게 한다."),
      glucose: L(
        "<strong>Polar molecules dissolve:</strong> glucose has polar –OH groups. Water forms hydrogen bonds with them, so glucose is hydrophilic and dissolves.",
        "<strong>極性分子 (polar molecule) は溶ける：</strong>グルコースには極性のある –OH 基があります。水がこれらと水素結合をつくるので、グルコースは親水性で溶けます。",
        "<strong>極性分子 (polar molecule) 溶解：</strong>葡萄糖有極性的 –OH 基團。水與它們形成氫鍵，所以葡萄糖是親水的並能溶解。", "<strong>극성 분자가 녹는다:</strong> 포도당에는 극성인 –OH 기가 있다. 물이 이것들과 수소 결합을 형성하므로 포도당은 친수성(hydrophilic)이며 녹는다."),
      oil: L(
        "<strong>Non-polar molecules do not dissolve:</strong> oil has no partial charges for water to attract. Water molecules bond to each other instead, so the oil is hydrophobic and stays together.",
        "<strong>無極性分子 (non-polar molecule) は溶けない：</strong>油には水が引き寄せる部分電荷がありません。水分子は代わりに互いに結合するので、油は疎水性で、ひとかたまりのままです。",
        "<strong>非極性分子 (non-polar molecule) 不溶解：</strong>油沒有可供水吸引的部分電荷。水分子轉而彼此結合，所以油是疏水的，並聚在一起。", "<strong>무극성 분자는 녹지 않는다:</strong> 기름에는 물이 끌어당길 부분 전하가 없다. 대신 물 분자끼리 결합하므로 기름은 소수성(hydrophobic)이며 한데 뭉쳐 있다.")
    },
    labels: {
      pull: L("pull (tension)", "引く力 (張力)", "拉力 (張力)", "당기는 힘 (장력)"),
      pullLeaf: L("pull from leaf", "葉からの引力", "來自葉片的拉力", "잎이 당기는 힘"),
      wall: L("xylem wall", "木部 (xylem) の壁", "木質部 (xylem) 壁", "물관(xylem) 벽"),
      cohesionKeeps: L("hydrogen bonds keep the column together", "水素結合が柱をつなぎとめる", "氫鍵使水柱連在一起", "수소 결합이 물기둥을 붙들어 준다"),
      air: L("air", "空気", "空氣", "공기"),
      water: L("water", "水", "水", "물"),
      skater: L("pond skater", "アメンボ (pond skater)", "水黽 (pond skater)", "소금쟁이 (pond skater)"),
      noUp: L("no water above: no upward pull", "上に水はない：上向きの引力なし", "上方沒有水：沒有向上的拉力", "위에 물이 없음: 위로 당기는 힘 없음"),
      wallLab: L("cell wall / soil particle", "細胞壁・土壌粒子 (cell wall / soil)", "細胞壁／土壤顆粒 (cell wall / soil)", "세포벽 / 토양 입자 (cell wall / soil)"),
      polarSurf: L("polar or charged surface", "極性または電荷をもつ表面", "極性或帶電表面", "극성이거나 전하를 띤 표면"),
      level: L("water level in beaker", "ビーカーの水面", "燒杯中的水面", "비커의 수면"),
      wide: L("wide tube", "太い管", "闊管", "넓은 관"),
      narrow: L("narrow tube", "細い管", "窄管", "좁은 관"),
      adhUp: L("adhesion pulls up the wall", "付着力 (adhesion) が壁に沿って引き上げる", "附著力 (adhesion) 沿壁向上拉", "부착력(adhesion)이 벽을 따라 끌어올린다"),
      cohUp: L("cohesion pulls the rest", "凝集力 (cohesion) が残りを引く", "內聚力 (cohesion) 拉動其餘的水", "응집력(cohesion)이 나머지를 끌어올린다"),
      crystal: L("salt crystal", "塩の結晶 (salt crystal)", "鹽晶體 (salt crystal)", "소금 결정 (salt crystal)"),
      attractIon: L("attraction to ion", "イオンへの引力", "對離子的吸引力", "이온에 대한 인력"),
      glucose: L("glucose", "グルコース (glucose)", "葡萄糖 (glucose)", "포도당 (glucose)"),
      oil: L("oil (non-polar)", "油 (non-polar)", "油 (non-polar)", "기름 (non-polar)"),
      noAttract: L("no attraction to oil", "油への引力なし", "對油沒有吸引力", "기름에 대한 인력 없음"),
      waterBonds: L("water bonds to water", "水は水と結合する", "水與水結合", "물은 물끼리 결합한다"),
      polarOH: L("polar –OH groups", "極性の –OH 基", "極性 –OH 基團", "극성 –OH 기")
    },
    aria: {
      structure: L("Diagram of six water molecules joined by hydrogen bonds", "6個の水分子が水素結合でつながった図", "六個水分子以氫鍵連接的圖", "수소 결합으로 연결된 물 분자 6개의 그림"),
      xylem: L("Diagram of a column of water molecules in a xylem vessel, held by hydrogen bonds under tension", "木部の道管内で水素結合によって張力下でつながった水分子の柱の図", "木質部導管內水分子柱受張力、由氫鍵連接的圖", "장력을 받는 물관 속에서 수소 결합으로 이어진 물 분자 기둥의 그림"),
      surface: L("Diagram of water molecules at a surface supporting a pond skater", "水面の水分子がアメンボを支えている図", "水面的水分子托起水黽的圖", "소금쟁이를 떠받치는 수면의 물 분자 그림"),
      wall: L("Diagram of water molecules attracted to a polar wall and to each other", "極性のある壁と互いに引き合う水分子の図", "水分子被極性壁和彼此吸引的圖", "극성 벽과 서로에게 끌리는 물 분자의 그림"),
      capillary: L("Diagram of water rising higher in a narrow tube than in a wide tube", "細い管のほうが太い管より水が高く上昇している図", "水在窄管中比在闊管中升得更高的圖", "좁은 관에서 물이 넓은 관보다 더 높이 올라가는 그림"),
      nacl: L("Diagram of sodium chloride ions with and without a shell of water molecules", "水分子の殻がある場合とない場合の塩化ナトリウムのイオンの図", "氯化鈉離子有無水分子包圍的圖", "물 분자 껍질이 있는 경우와 없는 경우의 염화 나트륨 이온 그림"),
      glucose: L("Diagram of glucose with water molecules hydrogen bonded to its polar groups", "極性の基に水分子が水素結合しているグルコースの図", "水分子與葡萄糖極性基團形成氫鍵的圖", "극성 기에 물 분자가 수소 결합한 포도당의 그림"),
      oil: L("Diagram of an oil droplet surrounded by water molecules that bond to each other", "互いに結合した水分子に囲まれた油滴の図", "被彼此結合的水分子包圍的油滴圖", "서로 결합한 물 분자에 둘러싸인 기름 방울의 그림")
    },
    props: {
      buoyancy: {
        name: L("Buoyancy", "浮力 (buoyancy)", "浮力 (buoyancy)", "부력 (buoyancy)"),
        water: L("high", "大きい", "大", "크다"), air: L("very low", "非常に小さい", "極小", "매우 작다"),
        text: L("Water is much denser than air, so it supports a body. Aquatic animals need less skeleton to hold up their weight; land and flying animals need legs or wings.",
          "水は空気よりはるかに密度が高いので、体を支えます。水生動物は体重を支える骨格が少なくてすみ、陸上や空中の動物には脚や翼が必要です。",
          "水的密度遠高於空氣，所以能支撐身體。水生動物不需要那麼多骨骼來承托體重；陸生和飛行動物則需要腿或翅膀。", "물은 공기보다 밀도가 훨씬 크므로 몸을 떠받친다. 수생 동물은 체중을 지탱하는 골격이 적게 필요하고, 육상 동물과 날아다니는 동물에게는 다리나 날개가 필요하다."),
        ex: L("Ringed seal: its weight is supported by water. Black-throated loon: in flight, its wings must provide all the lift.",
          "ワモンアザラシ：体重は水に支えられる。オオハム：飛行中は、翼がすべての揚力を生み出さなければならない。",
          "環斑海豹：體重由水支撐。黑喉潛鳥：飛行時，翅膀必須提供全部升力。", "고리무늬물범: 체중이 물에 의해 지탱된다. 아비: 날 때는 날개가 양력을 모두 만들어 내야 한다.")
      },
      viscosity: {
        name: L("Viscosity", "粘性 (viscosity)", "黏度 (viscosity)", "점성 (viscosity)"),
        water: L("high", "大きい", "大", "크다"), air: L("low", "小さい", "小", "작다"),
        text: L("Water resists movement more than air does, so swimming takes more force and a streamlined body reduces drag.",
          "水は空気より動きに対する抵抗が大きいので、泳ぐにはより大きな力が必要で、流線形の体が抵抗を減らします。",
          "水對移動的阻力比空氣大，所以游泳需要更大的力，流線型身體可減少阻力。", "물은 공기보다 움직임에 대한 저항이 크므로 헤엄치려면 더 큰 힘이 필요하고, 유선형 몸은 저항을 줄여 준다."),
        ex: L("Ringed seal and loon: streamlined bodies reduce drag when moving through water.",
          "ワモンアザラシとオオハム：流線形の体が、水中を動くときの抵抗を減らす。",
          "環斑海豹和黑喉潛鳥：流線型身體減少在水中移動時的阻力。", "고리무늬물범과 아비: 유선형 몸은 물속에서 움직일 때 저항을 줄여 준다.")
      },
      conductivity: {
        name: L("Thermal conductivity", "熱伝導率 (thermal conductivity)", "熱傳導性 (thermal conductivity)", "열전도율 (thermal conductivity)"),
        water: L("high", "大きい", "高", "크다"), air: L("low", "小さい", "低", "작다"),
        text: L("Water carries heat away from a body much faster than air does, so animals in cold water lose heat quickly and need insulation. Air is a poor conductor.",
          "水は空気よりはるかに速く体から熱を奪うので、冷たい水の中の動物はすばやく熱を失い、断熱が必要です。空気は熱を伝えにくい物質です。",
          "水帶走身體熱量的速度遠比空氣快，所以冷水中的動物迅速失熱，需要隔熱。空氣是不良導體。", "물은 공기보다 훨씬 빠르게 몸의 열을 빼앗으므로 찬물 속의 동물은 열을 빨리 잃어 단열이 필요하다. 공기는 열을 잘 전달하지 못한다."),
        ex: L("Ringed seal: a thick layer of blubber insulates it in cold water.",
          "ワモンアザラシ：厚い皮下脂肪 (blubber) が冷たい水の中で断熱する。",
          "環斑海豹：厚厚的鯨脂 (blubber) 在冷水中提供隔熱。", "고리무늬물범: 두꺼운 지방층(blubber)이 찬물에서 단열 작용을 한다.")
      },
      heat: {
        name: L("Specific heat capacity", "比熱 (specific heat capacity)", "比熱容 (specific heat capacity)", "비열 (specific heat capacity)"),
        water: L("high", "大きい", "大", "크다"), air: L("low", "小さい", "小", "작다"),
        text: L("A lot of energy is needed to warm water, so the temperature of a lake or sea changes slowly. Aquatic habitats are thermally more stable than air.",
          "水を温めるには多くのエネルギーが必要なので、湖や海の温度はゆっくり変化します。水中の生息場所は、空気中より温度が安定しています。",
          "使水升溫需要大量能量，所以湖泊或海洋的溫度變化緩慢。水生棲息地的溫度比空氣中更穩定。", "물을 데우려면 많은 에너지가 필요하므로 호수나 바다의 온도는 천천히 변한다. 수생 서식지는 공기보다 열적으로 더 안정하다."),
        ex: L("Animals in water meet smaller and slower temperature changes than animals on land.",
          "水中の動物が受ける温度変化は、陸上の動物より小さくゆるやかです。",
          "水中動物所經歷的溫度變化比陸上動物更小、更慢。", "물속 동물은 육상 동물보다 더 작고 더 느린 온도 변화를 겪는다.")
      }
    },
    barW: L("Water", "水 (water)", "水 (water)", "물 (water)"),
    barA: L("Air", "空気 (air)", "空氣 (air)", "공기 (air)"),
    barNote: L("Bars show which is higher, not exact values.", "棒は、どちらが大きいかを示すもので、正確な値ではありません。", "橫條只顯示哪個較高，並非準確數值。", "막대는 어느 쪽이 더 큰지를 나타낼 뿐, 정확한 값은 아니다.")
  };

  var VB_H = 300;
  var BL = 34, RH = 8.5, RO = 14;

  function svgOpen(w, h, label) {
    return '<svg viewBox="-6 0 ' + (w + 6) + ' ' + h + '" role="img" aria-label="' + label.replace(/"/g, "&quot;") + '" xmlns="http://www.w3.org/2000/svg">';
  }

  function polar(x, y, ang, d) { return [x + d * Math.cos(ang * RAD), y + d * Math.sin(ang * RAD)]; }
  function angleTo(a, b) { return Math.atan2(b[1] - a[1], b[0] - a[0]) / RAD; }

  function txt(x, y, str, size, anchor, weight, fillVar) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + Math.max(size || 12.5, 12.5) + '" text-anchor="' + (anchor || "middle") + '" font-weight="' + (weight || 600) + '"' + (fillVar ? ' style="fill:' + fillVar + '"' : '') + '>' + str + '</text>';
  }

  function wrapLines(str, maxEm) {
    function w(t) { var n = 0; for (var i = 0; i < t.length; i++) n += t.charCodeAt(i) >= 0x3000 ? 1 : 0.56; return n; }
    var raw = str.match(/\([^)]*\)|[A-Za-z0-9\u2032'.,:;\-\u2013\u2212\/+]+|[\uac00-\ud7af]+|\s|[^\s]/g) || [], toks = [], lines = [], cur = "";
    raw.forEach(function (t) { if (t.charAt(0) === "(" && w(t) > maxEm) { t.split(/(\s)/).forEach(function (u) { if (u) toks.push(u); }); } else toks.push(t); });
    toks.forEach(function (t) {
      if (/^\s$/.test(t) && !cur) return;
      if (cur && w(cur + t) > maxEm && !/^\s$/.test(t)) { lines.push(cur.replace(/\s+$/, "")); cur = ""; }
      cur += t;
    });
    if (cur) lines.push(cur.replace(/\s+$/, ""));
    return lines;
  }
  function wrap(x, y, str, size, anchor, weight, fillVar, maxEm) {
    return wrapLines(str, maxEm).map(function (ln, i) { return txt(x, y + i * (size + 3), ln, size, anchor, weight, fillVar); }).join("");
  }

  /* A water molecule: O at (x,y); H1 at angle aim; H2 at aim + 104.5 (SVG angles, y downward). */
  function mol(x, y, aim, charges) {
    var h1 = polar(x, y, aim, BL), h2 = polar(x, y, aim + 104.5, BL);
    var bis = aim + 52.25;
    var s = '';
    [h1, h2].forEach(function (h) {
      s += '<line x1="' + x + '" y1="' + y + '" x2="' + h[0] + '" y2="' + h[1] + '" stroke="var(--ink,#0f2029)" stroke-width="3.5" stroke-linecap="round"/>';
    });
    [h1, h2].forEach(function (h) {
      s += '<circle cx="' + h[0] + '" cy="' + h[1] + '" r="' + RH + '" fill="var(--c-hydrogen,#aebbc2)" stroke="var(--muted,#4d626d)" stroke-width="1"/>';
      s += '<text x="' + h[0] + '" y="' + (h[1] + 3.5) + '" font-size="10" font-weight="800" text-anchor="middle" style="fill:#0f2029">H</text>';
    });
    s += '<circle cx="' + x + '" cy="' + y + '" r="' + RO + '" fill="var(--c-oxygen,#d33a2c)"/>';
    s += '<text x="' + x + '" y="' + (y + 4.5) + '" font-size="13" font-weight="800" text-anchor="middle" style="fill:#fff">O</text>';
    if (charges) {
      var o = polar(x, y, bis + 180, 28), a = polar(x, y, aim, 49), b = polar(x, y, aim + 104.5, 49);
      s += '<text x="' + o[0] + '" y="' + (o[1] + 4.5) + '" font-size="13" font-weight="800" text-anchor="middle" style="fill:var(--c-oxygen,#d33a2c)">δ' + MINUS + '</text>';
      s += '<text x="' + a[0] + '" y="' + (a[1] + 4.5) + '" font-size="13" font-weight="800" text-anchor="middle" style="fill:var(--c-nitrogen,#2d5cdd)">δ+</text>';
      s += '<text x="' + b[0] + '" y="' + (b[1] + 4.5) + '" font-size="13" font-weight="800" text-anchor="middle" style="fill:var(--c-nitrogen,#2d5cdd)">δ+</text>';
    }
    return { svg: s, o: [x, y], h1: h1, h2: h2 };
  }

  /* dashed line from a hydrogen centre to the centre of an acceptor atom (radius rt) */
  function hb(from, to, color, rt) {
    var dx = to[0] - from[0], dy = to[1] - from[1], len = Math.sqrt(dx * dx + dy * dy);
    var ux = dx / len, uy = dy / len, r2 = (rt || RO) + 3;
    return '<line x1="' + (from[0] + ux * (RH + 2)) + '" y1="' + (from[1] + uy * (RH + 2)) + '" x2="' + (to[0] - ux * r2) + '" y2="' + (to[1] - uy * r2) + '" stroke="' + (color || "var(--hbond,#2a7de1)") + '" stroke-width="2.6" stroke-dasharray="5 4" stroke-linecap="round"/>';
  }

  function arrow(x1, y1, x2, y2, color) {
    var a = Math.atan2(y2 - y1, x2 - x1), hx = 9;
    var p1 = [x2 - hx * Math.cos(a - 0.45), y2 - hx * Math.sin(a - 0.45)], p2 = [x2 - hx * Math.cos(a + 0.45), y2 - hx * Math.sin(a + 0.45)];
    return '<g stroke="' + color + '" fill="' + color + '" stroke-width="2.8" stroke-linecap="round"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/><polygon points="' + x2 + ',' + y2 + ' ' + p1[0] + ',' + p1[1] + ' ' + p2[0] + ',' + p2[1] + '" stroke="none"/></g>';
  }

  /* pos: [[x,y],...]; links: [[donorIdx, acceptorIdx], ...] */
  function network(pos, links, opts) {
    opts = opts || {};
    var aims = pos.map(function (p, i) { return (opts.defaultAim ? opts.defaultAim[i] : 20 + i * 47); });
    links.forEach(function (l) { aims[l[0]] = angleTo(pos[l[0]], pos[l[1]]); });
    var mols = pos.map(function (p, i) { return mol(p[0], p[1], aims[i], opts.charges); });
    var bonds = '';
    if (opts.bonds !== false) {
      links.forEach(function (l) { bonds += hb(mols[l[0]].h1, mols[l[1]].o); });
    }
    return bonds + mols.map(function (m) { return m.svg; }).join('');
  }

  /* legend: stacked rows at the bottom of the viewBox */
  function legend(y, items) {
    var s = '';
    items.forEach(function (it, i) {
      var yy = y + i * 17;
      if (it.dash) {
        s += '<line x1="14" y1="' + yy + '" x2="40" y2="' + yy + '" stroke="' + it.color + '" stroke-width="2.6" stroke-dasharray="5 4"/>';
      } else {
        s += '<line x1="14" y1="' + yy + '" x2="40" y2="' + yy + '" stroke="var(--ink,#0f2029)" stroke-width="3.5"/>';
      }
      s += txt(46, yy + 4, it.label, 10.5, "start", 600, "var(--muted,#4d626d)");
    });
    return s;
  }

  function sceneStructure(S) {
    var pos = [[46, 50], [142, 94], [242, 62], [302, 152], [218, 218], [78, 192]];
    var links = [[0, 1], [1, 2], [2, 3], [3, 4], [5, 1]];
    var s = svgOpen(360, VB_H, S.t(T.aria.structure));
    s += network(pos, links, { charges: S.charges, bonds: S.bonds, defaultAim: [0, 0, 0, 0, 200, 0] });
    s += legend(268, [{ label: S.t(T.legCov) }, { label: S.t(T.legH), dash: true, color: "var(--hbond,#2a7de1)" }]);
    return s + '</svg>';
  }

  function sceneXylem(S) {
    var s = svgOpen(360, VB_H, S.t(T.aria.xylem));
    s += '<line x1="50" y1="36" x2="50" y2="290" stroke="var(--muted,#4d626d)" stroke-width="6"/><line x1="310" y1="36" x2="310" y2="290" stroke="var(--muted,#4d626d)" stroke-width="6"/>';
    s += txt(58, 28, S.t(T.labels.wall), 10, "start", 700, "var(--muted,#4d626d)");
    var pos = [[132, 66], [132, 142], [132, 218], [236, 66], [236, 142], [236, 218]];
    var links = [[0, 1], [1, 2], [3, 4], [4, 5]];
    s += network(pos, links, { charges: S.charges, bonds: S.bonds, defaultAim: [90, 90, 90, 90, 90, 90] });
    s += arrow(184, 66, 184, 14, "var(--ink,#0f2029)");
    s += wrap(192, 36, S.t(T.labels.pullLeaf), 10.5, "start", 700, null, 11);
    s += wrap(184, 288, S.t(T.labels.cohesionKeeps), 10, "middle", 600, "var(--muted,#4d626d)", 28);
    return s + '</svg>';
  }

  function sceneSurface(S) {
    var s = svgOpen(360, VB_H, S.t(T.aria.surface));
    s += txt(14, 24, S.t(T.labels.air), 11, "start", 700, "var(--muted,#4d626d)");
    s += wrap(348, 44, S.t(T.labels.noUp), 9.5, "end", 700, "var(--muted,#4d626d)", 13);
    s += '<path d="M6 134 L132 134 Q140 142 148 134 L154 134 Q162 142 170 134 L176 134 Q184 142 192 134 L354 134" fill="none" stroke="var(--accent,#2547c7)" stroke-width="2" opacity="0.6"/>';
    s += '<ellipse cx="162" cy="104" rx="24" ry="7" fill="var(--c-carbon,#4a5a63)"/><circle cx="135" cy="102" r="5" fill="var(--c-carbon,#4a5a63)"/>';
    [[136, 132], [148, 136], [176, 136], [188, 132]].forEach(function (p) {
      var x0 = p[0] < 162 ? 150 : 174;
      s += '<polyline points="' + x0 + ',108 ' + ((p[0] + x0) / 2) + ',116 ' + p[0] + ',' + p[1] + '" fill="none" stroke="var(--c-carbon,#4a5a63)" stroke-width="2.2"/>';
    });
    s += txt(162, 84, S.t(T.labels.skater), 10.5, "middle", 700);
    var pos = [[66, 158], [162, 158], [258, 158], [114, 244], [210, 244]];
    var links = [[0, 1], [1, 2], [3, 1], [4, 2]];
    s += network(pos, links, { charges: S.charges, bonds: S.bonds, defaultAim: [0, 0, 20, 0, 0] });
    s += arrow(162, 158, 118, 158, "var(--ink,#0f2029)") + arrow(162, 158, 206, 158, "var(--ink,#0f2029)") + arrow(162, 158, 162, 204, "var(--ink,#0f2029)");
    s += txt(10, 292, S.t(T.labels.water), 11, "start", 700, "var(--muted,#4d626d)");
    s += txt(350, 292, S.t(T.legH), 10, "end", 600, "var(--muted,#4d626d)");
    return s + '</svg>';
  }

  function sceneWall(S) {
    var AD = "var(--hbond,#2a7de1)", CO = "var(--accent,#2547c7)";
    var s = svgOpen(360, VB_H, S.t(T.aria.wall));
    s += '<rect x="8" y="30" width="38" height="226" fill="var(--surface-2,#e3eaee)" stroke="var(--muted,#4d626d)" stroke-width="2"/>';
    s += wrap(8, 12, S.t(T.labels.wallLab), 10, "start", 700, "var(--muted,#4d626d)", 16);
    var sites = [66, 146, 226];
    sites.forEach(function (y) {
      s += '<circle cx="54" cy="' + y + '" r="10" fill="var(--c-oxygen,#d33a2c)"/>' + txt(54, y + 4, "O", 10, "middle", 800, "#fff");
      if (S.charges) s += txt(62, y - 17, "δ" + MINUS, 13, "middle", 800, "var(--c-oxygen,#d33a2c)");
    });
    var mols = [];
    sites.forEach(function (y) { mols.push(mol(150, y, 180, S.charges)); });
    sites.forEach(function (y) { mols.push(mol(250, y, 180, S.charges)); });
    if (S.bonds) {
      for (var i = 0; i < 3; i++) {
        s += hb(mols[i].h1, [54, sites[i]], AD, 10);
        s += hb(mols[i + 3].h1, mols[i].o, CO);
      }
    }
    s += mols.map(function (m) { return m.svg; }).join('');
    s += legend(268, [{ label: S.t(T.legAd), dash: true, color: AD }, { label: S.t(T.legCo), dash: true, color: CO }]);
    return s + '</svg>';
  }

  function sceneCapillary(S) {
    var W = "var(--accent-soft,#e0e7fb)", WS = "var(--accent,#2547c7)", INK = "var(--ink,#0f2029)", AD = "var(--hbond,#2a7de1)";
    var s = svgOpen(360, VB_H, S.t(T.aria.capillary));
    s += '<rect x="8" y="196" width="344" height="96" fill="' + W + '" stroke="' + WS + '" stroke-width="1.5"/>';
    s += '<rect x="26" y="168" width="90" height="124" fill="' + W + '"/>';
    s += '<path d="M26 168 Q71 178 116 168" fill="none" stroke="' + WS + '" stroke-width="2.5"/>';
    s += '<line x1="24" y1="70" x2="24" y2="292" stroke="' + INK + '" stroke-width="3.5"/><line x1="118" y1="70" x2="118" y2="292" stroke="' + INK + '" stroke-width="3.5"/>';
    s += '<rect x="152" y="92" width="30" height="200" fill="' + W + '"/>';
    s += '<path d="M152 92 Q167 106 182 92" fill="none" stroke="' + WS + '" stroke-width="2.5"/>';
    s += '<line x1="150" y1="40" x2="150" y2="292" stroke="' + INK + '" stroke-width="3.5"/><line x1="184" y1="40" x2="184" y2="292" stroke="' + INK + '" stroke-width="3.5"/>';
    s += '<line x1="8" y1="196" x2="352" y2="196" stroke="' + WS + '" stroke-width="1.5" stroke-dasharray="3 3"/>';
    s += txt(352, 189, S.t(T.labels.level), 10, "end", 700, "var(--muted,#4d626d)");
    s += txt(71, 56, S.t(T.labels.wide), 11.5, "middle", 700);
    s += txt(167, 26, S.t(T.labels.narrow), 11.5, "middle", 700);
    s += arrow(86, 196, 86, 174, INK);
    s += arrow(206, 196, 206, 98, INK);
    s += arrow(158, 156, 158, 118, AD) + arrow(176, 156, 176, 118, AD);
    s += wrap(212, 112, S.t(T.labels.adhUp), 10, "start", 700, AD, 12);
    s += wrap(212, 152, S.t(T.labels.cohUp), 10, "start", 700, WS, 12);
    return s + '</svg>';
  }

  function sceneNaCl(S) {
    var s = svgOpen(360, VB_H, S.t(T.aria.nacl));
    var NA = "var(--c-nitrogen,#2d5cdd)", CL = "var(--c-sulfur,#9a7a00)";
    function ion(x, y, label, color) {
      var r = S.dissolved ? 17 : 24;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/>' + txt(x, y + 4.5, label, S.dissolved ? 11.5 : 14, "middle", 800, "#fff");
    }
    if (!S.dissolved) {
      s += ion(154, 116, "Na⁺", NA) + ion(206, 116, "Cl⁻", CL) + ion(154, 168, "Cl⁻", CL) + ion(206, 168, "Na⁺", NA);
      s += txt(180, 228, S.t(T.labels.crystal), 12, "middle", 700);
      return s + '</svg>';
    }
    var waterSvg = '', att = '';
    function shell(cx, cy, isNa, angs) {
      angs.forEach(function (th) {
        var p = polar(cx, cy, th, 72);
        var aim = isNa ? (th - 52.25) : (th + 180 - 52.25);
        var m = mol(p[0], p[1], aim, S.charges);
        var t, rt;
        if (isNa) { t = m.o; rt = RO; }
        else {
          var d1 = Math.hypot(m.h1[0] - cx, m.h1[1] - cy), d2 = Math.hypot(m.h2[0] - cx, m.h2[1] - cy);
          t = d1 < d2 ? m.h1 : m.h2; rt = RH;
        }
        var ux = (t[0] - cx), uy = (t[1] - cy), L2 = Math.hypot(ux, uy); ux /= L2; uy /= L2;
        att += '<line x1="' + (cx + ux * 19) + '" y1="' + (cy + uy * 19) + '" x2="' + (t[0] - ux * (rt + 2)) + '" y2="' + (t[1] - uy * (rt + 2)) + '" stroke="var(--ionic,#8e44ad)" stroke-width="2.4" stroke-dasharray="2 3" stroke-linecap="round"/>';
        waterSvg += m.svg;
      });
    }
    shell(112, 140, true, [-90, 90, 150]); shell(250, 140, false, [-90, 30, 150]);
    s += att + waterSvg + ion(112, 140, "Na⁺", NA) + ion(250, 140, "Cl⁻", CL);
    s += legend(268, [{ label: S.t(T.legCov) }, { label: S.t(T.labels.attractIon), dash: true, color: "var(--ionic,#8e44ad)" }]);
    return s + '</svg>';
  }

  function sceneGlucose(S) {
    var s = svgOpen(360, VB_H, S.t(T.aria.glucose));
    var cx = 180, cy = 150;
    s += '<polygon points="' + [0, 1, 2, 3, 4, 5].map(function (i) { var p = polar(cx, cy, i * 60 - 30, 38); return p[0] + ',' + p[1]; }).join(' ') + '" fill="var(--surface-2,#e3eaee)" stroke="var(--c-carbon,#4a5a63)" stroke-width="3"/>';
    s += txt(cx, cy + 4, S.t(T.labels.glucose), 10.5, "middle", 800);
    var angs = [-90, -20, 55, 125, 200];
    var waterSvg = '', bondSvg = '';
    angs.forEach(function (a) {
      var e = polar(cx, cy, a, 36), site = polar(cx, cy, a, 58);
      s += '<line x1="' + e[0] + '" y1="' + e[1] + '" x2="' + site[0] + '" y2="' + site[1] + '" stroke="var(--c-carbon,#4a5a63)" stroke-width="3.5"/>';
      s += '<circle cx="' + site[0] + '" cy="' + site[1] + '" r="10" fill="var(--c-oxygen,#d33a2c)"/>' + txt(site[0], site[1] + 4, "O", 10, "middle", 800, "#fff");
      var wp = polar(cx, cy, a, 126);
      var m = mol(wp[0], wp[1], angleTo(wp, site), S.charges);
      if (S.bonds) bondSvg += hb(m.h1, site, null, 10);
      waterSvg += m.svg;
    });
    s += bondSvg + waterSvg;
    return s + '</svg>';
  }

  function sceneOil(S) {
    var s = svgOpen(360, VB_H, S.t(T.aria.oil));
    var cx = 180, cy = 150;
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="52" fill="var(--surface-2,#e3eaee)" stroke="var(--c-carbon,#4a5a63)" stroke-width="2.5" stroke-dasharray="5 4"/>';
    s += txt(cx, cy - 4, S.t(T.labels.oil), 10.5, "middle", 800);
    s += txt(cx, cy + 12, S.t(T.labels.noAttract), 9, "middle", 600, "var(--muted,#4d626d)");
    var n = 7, R = 108, pos = [], links = [];
    for (var i = 0; i < n; i++) { pos.push(polar(cx, cy, -90 + i * (360 / n), R)); links.push([i, (i + 1) % n]); }
    s += network(pos, links, { charges: S.charges, bonds: S.bonds });
    s += txt(180, 296, S.t(T.labels.waterBonds), 10, "middle", 600, "var(--muted,#4d626d)");
    return s + '</svg>';
  }

  function airBars(S, key) {
    var h = '<div class="wh-air">';
    h += '<div class="wh-bar"><span>' + S.t(T.barW) + '</span><div class="wh-track"><div class="wh-fill w" style="width:92%"></div></div></div>';
    h += '<div class="wh-bar"><span>' + S.t(T.barA) + '</span><div class="wh-track"><div class="wh-fill a" style="width:' + (key === "buoyancy" ? 6 : 12) + '%"></div></div></div>';
    h += '<p class="wh-note">' + S.t(T.barNote) + '</p></div>';
    return h;
  }
  function airText(S, key) {
    var p = T.props[key];
    return '<p class="wh-cap" aria-live="polite"><strong>' + S.t(p.name) + ':</strong> ' + S.t(T.barW) + ' = ' + S.t(p.water) + '; ' + S.t(T.barA) + ' = ' + S.t(p.air) + '. ' + S.t(p.text) + '</p>' +
      '<div class="wh-ex">' + S.t(p.ex) + '</div>';
  }

  IB.registerWidget("water-hbond", {
    title: T.title,
    mount: function (el, ctx) {
      if (!document.getElementById("w-water-hbond-style")) {
        var st = document.createElement("style");
        st.id = "w-water-hbond-style";
        st.textContent = CSS;
        document.head.appendChild(st);
      }
      var S = { t: ctx.t, charges: true, bonds: true, dissolved: true };
      var state = { tab: "structure", sub: { cohesion: "xylem", adhesion: "wall", solvent: "nacl" }, prop: "buoyancy" };
      el.classList.add("w-water-hbond");

      var tabKeys = ["structure", "cohesion", "adhesion", "solvent", "air"];
      var subKeys = { cohesion: ["xylem", "surface"], adhesion: ["wall", "capillary"], solvent: ["nacl", "glucose", "oil"] };
      var propKeys = ["buoyancy", "viscosity", "conductivity", "heat"];
      var ot = ctx.options && ctx.options.tab;
      if (typeof ot === "number" && tabKeys[ot]) state.tab = tabKeys[ot];
      else if (typeof ot === "string" && tabKeys.indexOf(ot) >= 0) state.tab = ot;

      function currentKey() {
        if (state.tab === "structure") return "structure";
        if (state.tab === "air") return "air";
        return state.sub[state.tab];
      }

      function render() {
        var key = currentKey();
        var h = '<div class="wl"><div class="wl-tabs" role="tablist" aria-label="' + ctx.t(T.title) + '">';
        tabKeys.forEach(function (k) {
          h += '<button type="button" role="tab" class="wh-tab" data-tab="' + k + '" aria-pressed="' + (state.tab === k) + '" aria-selected="' + (state.tab === k) + '">' + ctx.t(T.tabs[k]) + '</button>';
        });
        h += '</div>';
        var panel = '<div class="wh-subs">';
        if (subKeys[state.tab]) {
          subKeys[state.tab].forEach(function (k) {
            panel += '<button type="button" class="wh-sub wl-sub" data-sub="' + k + '" aria-pressed="' + (state.sub[state.tab] === k) + '">' + ctx.t(T.sub[k]) + '</button>';
          });
        }
        if (state.tab === "air") {
          propKeys.forEach(function (k) {
            panel += '<button type="button" class="wh-sub wl-sub" data-prop="' + k + '" aria-pressed="' + (state.prop === k) + '">' + ctx.t(T.props[k].name) + '</button>';
          });
        }
        if (state.tab === "solvent" && state.sub.solvent === "nacl") {
          panel += '<button type="button" class="wh-sub" data-dissolve="1">' + ctx.t(S.dissolved ? T.reset : T.dissolve) + '</button>';
        }
        panel += '</div>';
        if (state.tab !== "air") {
          panel += '<div class="wh-subs">';
          panel += '<label class="wh-chk"><input type="checkbox" data-chg ' + (S.charges ? "checked" : "") + '> ' + ctx.t(T.charges) + '</label>';
          panel += '<label class="wh-chk"><input type="checkbox" data-bnd ' + (S.bonds ? "checked" : "") + '> ' + ctx.t(T.bonds) + '</label>';
          panel += '</div>';
        }
        if (key === "air") {
          h += '<div class="wl-stage">' + airBars(ctx, state.prop) + '</div>';
          panel += airText(ctx, state.prop);
        } else {
          var scene = { structure: sceneStructure, xylem: sceneXylem, surface: sceneSurface, wall: sceneWall, capillary: sceneCapillary, nacl: sceneNaCl, glucose: sceneGlucose, oil: sceneOil }[key];
          h += '<div class="wl-stage">' + scene(S) + '</div>';
          panel += '<p class="wh-cap" aria-live="polite">' + ctx.t(T.cap[key]) + '</p>';
          panel += '<p class="wh-note">' + ctx.t(T.notScale) + '</p>';
        }
        h += '<div class="wl-panel">' + panel + '</div></div>';
        el.innerHTML = h;
      }

      function onClick(e) {
        var b = e.target.closest("button");
        if (!b || !el.contains(b)) return;
        if (b.dataset.tab) { state.tab = b.dataset.tab; render(); focusBtn('[data-tab="' + b.dataset.tab + '"]'); }
        else if (b.dataset.sub) { state.sub[state.tab] = b.dataset.sub; render(); focusBtn('[data-sub="' + b.dataset.sub + '"]'); }
        else if (b.dataset.prop) { state.prop = b.dataset.prop; render(); focusBtn('[data-prop="' + b.dataset.prop + '"]'); }
        else if (b.dataset.dissolve) { S.dissolved = !S.dissolved; render(); focusBtn('[data-dissolve]'); }
      }
      function onChange(e) {
        if (e.target.matches("[data-chg]")) { S.charges = e.target.checked; render(); focusBtn("[data-chg]"); }
        else if (e.target.matches("[data-bnd]")) { S.bonds = e.target.checked; render(); focusBtn("[data-bnd]"); }
      }
      function focusBtn(sel) { var n = el.querySelector(sel); if (n) n.focus(); }

      el.addEventListener("click", onClick);
      el.addEventListener("change", onChange);
      render();
      return function () { el.removeEventListener("click", onClick); el.removeEventListener("change", onChange); };
    }
  });
})();
