/* B2.1 Membranes and membrane transport — SL + AHL */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  // ---- Fluid mosaic diagram (labels switch with language) ----
  function fmSVG(lang) {
    const T = {
      out: { en: "outside", ja: "細胞外 (outside)", zh: "細胞外 (outside)" },
      inn: { en: "inside", ja: "細胞内 (inside)", zh: "細胞內 (inside)" },
      phil: { en: "hydrophilic", ja: "親水性 (hydrophilic)", zh: "親水 (hydrophilic)" },
      phob: { en: "hydrophobic", ja: "疎水性 (hydrophobic)", zh: "疏水 (hydrophobic)" }
    };
    const aria = { en: "Fluid mosaic model of a cell membrane", ja: "細胞膜の流動モザイクモデル (fluid mosaic model)", zh: "細胞膜的流動鑲嵌模型 (fluid mosaic model)" }[lang];
    let s = `<svg viewBox="0 0 400 210" role="img" aria-label="${aria}" style="width:100%;max-width:520px;color:var(--ink,#0f2029)" font-family="sans-serif">`;
    const skipTop = x => (x >= 94 && x <= 134) || (x >= 164 && x <= 198) || x === 66 || x === 150;
    const skipBot = x => (x >= 94 && x <= 134) || x === 206;
    const head = (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--theme-b,#c2456b)" stroke="currentColor" stroke-width=".6"/>`;
    const tails = (x, y1, y2) => `<path d="M${x - 2} ${y1}V${y2}M${x + 2} ${y1}V${y2}" stroke="currentColor" stroke-width="1.4" fill="none"/>`;
    for (let x = 10; x <= 248; x += 14) {
      if (!skipTop(x)) s += tails(x, 76, 104) + head(x, 70);
      if (!skipBot(x)) s += tails(x, 134, 106) + head(x, 140);
    }
    // glycolipid at x=150 (top)
    s += tails(150, 76, 104) + head(150, 70);
    s += `<line x1="150" y1="64" x2="150" y2="50" stroke="var(--theme-a,#1b8a8f)" stroke-width="1.6"/><g fill="var(--theme-a,#1b8a8f)"><circle cx="150" cy="47" r="3.5"/><circle cx="144" cy="39" r="3.5"/><circle cx="156" cy="39" r="3.5"/></g>`;
    // cholesterol top (x=66) and bottom (x=206)
    s += `<rect x="63" y="79" width="6" height="25" rx="3" fill="var(--warn-soft,#fff1c2)" stroke="var(--warn,#b7791f)" stroke-width="1.2"/><circle cx="66" cy="75" r="3.2" fill="var(--warn,#b7791f)"/>`;
    s += `<rect x="203" y="106" width="6" height="25" rx="3" fill="var(--warn-soft,#fff1c2)" stroke="var(--warn,#b7791f)" stroke-width="1.2"/><circle cx="206" cy="135" r="3.2" fill="var(--warn,#b7791f)"/>`;
    // integral proteins
    s += `<rect x="100" y="60" width="28" height="92" rx="9" fill="var(--accent-soft,#dbe7ff)" stroke="var(--accent,#2a5bd7)" stroke-width="1.8"/>`;
    s += `<rect x="170" y="62" width="22" height="46" rx="8" fill="var(--accent-soft,#dbe7ff)" stroke="var(--accent,#2a5bd7)" stroke-width="1.8"/>`;
    // glycoprotein carbohydrate chain
    s += `<line x1="114" y1="60" x2="114" y2="44" stroke="var(--theme-a,#1b8a8f)" stroke-width="1.6"/><g fill="var(--theme-a,#1b8a8f)"><circle cx="114" cy="41" r="3.5"/><circle cx="108" cy="32" r="3.5"/><circle cx="120" cy="32" r="3.5"/><circle cx="120" cy="22" r="3.5"/></g>`;
    // peripheral proteins
    s += `<ellipse cx="40" cy="52" rx="18" ry="9" fill="var(--surface-2,#e3eaee)" stroke="currentColor" stroke-width="1.4"/>`;
    s += `<ellipse cx="40" cy="162" rx="20" ry="10" fill="var(--surface-2,#e3eaee)" stroke="currentColor" stroke-width="1.4"/>`;
    // numbered markers
    const mk = (n, x, y) => `<circle cx="${x}" cy="${y}" r="7.5" fill="var(--surface,#fff)" stroke="currentColor" stroke-width="1.2"/><text x="${x}" y="${y + 3.6}" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">${n}</text>`;
    s += mk(1, 236, 50) + mk(1, 236, 162) + mk(2, 114, 172) + mk(3, 181, 48) + mk(4, 40, 34) + mk(4, 40, 184) + mk(5, 136, 26) + mk(6, 168, 38) + mk(7, 66, 56) + mk(7, 206, 166);
    // region labels
    s += `<g fill="currentColor" font-size="10"><text x="266" y="40" font-weight="bold">${T.out[lang]}</text><text x="266" y="190" font-weight="bold">${T.inn[lang]}</text><text x="266" y="73">${T.phil[lang]}</text><text x="266" y="108">${T.phob[lang]}</text><text x="266" y="143">${T.phil[lang]}</text></g>`;
    s += `<g stroke="currentColor" stroke-width="1.2" fill="none"><path d="M256 64v12M256 80v52M256 136v12"/></g>`;
    s += `</svg>`;
    return s;
  }

  const FM_LEGEND = {
    en: ["Phospholipid bilayer: hydrophilic heads face the watery surroundings, hydrophobic fatty acid tails form the core", "Integral protein that spans both layers", "Integral protein embedded in one layer only", "Peripheral protein (attached to one surface)", "Glycoprotein (protein with a carbohydrate chain, on the outer surface)", "Glycolipid (lipid with a carbohydrate chain, on the outer surface)", "Cholesterol (in animal cell membranes)"],
    ja: ["リン脂質二重層 (phospholipid bilayer): 親水性の頭部は水の環境に面し、疎水性の脂肪酸の尾部が中心部をつくる", "両方の層を貫く内在性タンパク質 (integral protein)", "片方の層だけに埋まった内在性タンパク質", "表在性タンパク質 (peripheral protein) (片側の表面に付着)", "糖タンパク質 (glycoprotein) (タンパク質に糖鎖が付き、外側の表面にある)", "糖脂質 (glycolipid) (脂質に糖鎖が付き、外側の表面にある)", "コレステロール (cholesterol) (動物細胞の膜)"],
    zh: ["磷脂雙層 (phospholipid bilayer)：親水頭部面向含水的環境，疏水的脂肪酸尾部組成核心", "貫穿兩層的整合蛋白 (integral protein)", "只嵌入一層的整合蛋白", "周邊蛋白 (peripheral protein) (附於一側表面)", "糖蛋白 (glycoprotein) (蛋白質連有糖鏈，位於外表面)", "糖脂 (glycolipid) (脂質連有糖鏈，位於外表面)", "膽固醇 (cholesterol) (動物細胞膜中)"]
  };
  const fmFigure = lang => `<figure>${fmSVG(lang)}<figcaption><ol>${FM_LEGEND[lang].map(x => `<li>${x}</li>`).join("")}</ol></figcaption></figure>`;

  IB.registerTopic({
    id: "B2.1",
    slug: "b2-1",
    theme: "B",
    level: 2,
    ahlOnly: false,
    title: L("Membranes and membrane transport", "膜と膜輸送", "膜與膜運輸"),
    guidingQuestions: [
      L("How do molecules of lipid and protein assemble into biological membranes?", "脂質分子とタンパク質分子はどのように集まって生体膜をつくるか。", "脂質和蛋白質分子如何組合成生物膜？"),
      L("What determines whether a substance can pass through a biological membrane?", "物質が生体膜を通過できるかどうかは何によって決まるか。", "甚麼因素決定物質能否穿過生物膜？")
    ],
    summary: L(
      "Every cell is wrapped in a membrane built from a phospholipid bilayer with proteins embedded in or attached to it. The hydrophobic core stops most polar particles, so the membrane is a barrier. Small non-polar molecules slip through, and everything else needs a protein: channels for passive facilitated diffusion, or pumps that use ATP for active transport. At HL you also study membrane fluidity, vesicles, gated channels, sodium–potassium pumps, cotransporters and cell adhesion.",
      "あらゆる細胞は、リン脂質二重層にタンパク質が埋め込まれたり付着したりした膜で包まれている。疎水性の中心部は極性のある粒子の大半を通さないので、膜は障壁となる。小さな無極性分子は通り抜けられるが、それ以外はタンパク質が必要である。受動的な促進拡散にはチャネル、能動輸送にはATPを使うポンプが働く。HLではさらに、膜の流動性、小胞、ゲート付きチャネル、ナトリウム・カリウムポンプ、共輸送体、細胞接着も学ぶ。",
      "每個細胞都被一層膜包裹，膜由磷脂雙層構成，蛋白質嵌入其中或附於表面。疏水核心阻擋大部分極性粒子，所以膜是一道屏障。細小的非極性分子可以滲過，其餘物質則需要蛋白質：通道用於被動的易化擴散，泵則利用 ATP 進行主動運輸。HL 還會學習膜的流動性、囊泡、門控通道、鈉鉀泵、協同運輸體及細胞黏附。"),
    sections: [
      {
        ref: "B2.1.1–2", ahl: false,
        widget: "lipid-builder",
        widgetOptions: {tab: 2},
        heading: L("Lipid bilayers: the basis of membranes and a barrier", "脂質二重層：膜の基本構造と障壁", "脂質雙層：膜的基礎與屏障"),
        body: L(
          `<p>In water, phospholipids and other amphipathic lipids naturally assemble into continuous, sheet-like <span class="term">bilayers</span> (see B1.1). The hydrophobic fatty acid tails sit in the middle; the hydrophilic heads face the watery fluid on each side. This bilayer is the basic structure of all cell membranes.</p>
<p><strong>The bilayer is a barrier.</strong> Its core is made of hydrocarbon chains, which have <strong>low permeability</strong> (they let little through) to:</p>
<ul><li>large molecules, and</li><li>hydrophilic particles: ions (such as Na⁺ and Cl⁻) and polar molecules (such as glucose and amino acids).</li></ul>
<p>These particles are attracted to water and are repelled by the hydrophobic core. So a membrane works as an effective barrier between two watery solutions, for example the cytoplasm and the fluid outside the cell. This lets a cell keep a different chemical makeup inside from outside.</p>`,
          `<p>水中では、リン脂質などの両親媒性の脂質は、自然に連続したシート状の<span class="term">二重層 (bilayer)</span> をつくる (B1.1 参照)。疎水性の脂肪酸の尾部は中央に並び、親水性の頭部は両側の水溶液に面する。この二重層があらゆる細胞膜の基本構造である。</p>
<p><strong>二重層は障壁になる。</strong> 中心部は炭化水素の鎖でできていて、次のものに対する<strong>透過性が低い</strong> (ほとんど通さない)。</p>
<ul><li>大きな分子</li><li>親水性の粒子: イオン (Na⁺、Cl⁻ など) や極性分子 (グルコース、アミノ酸など)</li></ul>
<p>これらは水に引きつけられ、疎水性の中心部にはじかれる。そのため膜は、細胞質と細胞外液のような2つの水溶液の間の効果的な障壁として働く。これにより、細胞は内側と外側で化学的な組成を変えておける。</p>`,
          `<p>在水中，磷脂及其他兩親性脂質會自然聚合成連續的片狀<span class="term">雙層 (bilayer)</span> (見 B1.1)。疏水的脂肪酸尾部在中間，親水的頭部則面向兩側的水溶液。這個雙層是所有細胞膜的基本結構。</p>
<p><strong>雙層是屏障。</strong>它的核心由烴鏈組成，對以下物質的<strong>透過性很低</strong> (讓很少物質通過)：</p>
<ul><li>大分子，及</li><li>親水粒子：離子 (如 Na⁺、Cl⁻) 和極性分子 (如葡萄糖、氨基酸)。</li></ul>
<p>這些粒子被水吸引，被疏水核心排斥。所以膜可作為兩種水溶液 (例如細胞質與細胞外液) 之間的有效屏障，令細胞內外維持不同的化學組成。</p>`),
        examTip: L("Explain barrier questions in terms of the hydrophobic core repelling hydrophilic particles: ions and polar molecules. Do not say the membrane has “holes too small” for them.",
          "障壁の問題では、疎水性の中心部が親水性の粒子 (イオンや極性分子) をはじく、という形で説明する。「穴が小さすぎる」とは書かない。",
          "回答屏障題時，要以疏水核心排斥親水粒子 (離子和極性分子) 來解釋，不要說成「孔太小」。")
      },
      {
        ref: "B2.1.3", ahl: false,
        heading: L("Simple diffusion", "単純拡散", "簡單擴散"),
        body: L(
          `<p><span class="term">Diffusion</span> is the net movement of particles from a region of higher concentration to a region of lower concentration, caused by the random movement of the particles. It is <strong>passive</strong>: it needs no energy from the cell. The difference in concentration is called the <span class="term">concentration gradient</span>, and particles move <em>down</em> it.</p>
<p><span class="term">Simple diffusion</span> across a membrane means the particles pass <strong>directly between the phospholipids</strong>, with no help from a protein. It works for small, non-polar (hydrophobic) molecules.</p>
<p><strong>Examples:</strong> oxygen (O₂) and carbon dioxide (CO₂). A cell that uses O₂ keeps the inside concentration low, so O₂ diffuses in. A respiring cell makes CO₂, so CO₂ diffuses out.</p>
<p>Use the Transport lab in section B2.1.8 to see this: switch to “Simple diffusion”, choose a particle type and change the concentrations.</p>`,
          `<p><span class="term">拡散 (diffusion)</span> は、粒子のランダムな運動によって、粒子が濃度の高い領域から低い領域へ正味で移動することである。<strong>受動的 (passive)</strong> で、細胞のエネルギーは不要である。濃度の差を<span class="term">濃度勾配 (concentration gradient)</span> といい、粒子は勾配を<em>下る</em>方向に動く。</p>
<p>膜での<span class="term">単純拡散 (simple diffusion)</span> では、粒子は<strong>リン脂質の間を直接</strong>通り抜け、タンパク質の助けを借りない。小さな無極性 (疎水性) の分子で起こる。</p>
<p><strong>例:</strong> 酸素 (O₂) と二酸化炭素 (CO₂)。O₂ を使う細胞は内側の濃度が低く保たれるので、O₂ は内へ拡散する。呼吸する細胞は CO₂ をつくるので、CO₂ は外へ拡散する。</p>
<p>B2.1.8 の「輸送ラボ」で確かめよう。「単純拡散」に切り替え、粒子の種類を選び、濃度を変えてみる。</p>`,
          `<p><span class="term">擴散 (diffusion)</span> 是粒子因隨機運動，由濃度較高的區域淨移向濃度較低的區域。擴散是<strong>被動 (passive)</strong> 的，不需要細胞提供能量。濃度的差別稱為<span class="term">濃度梯度 (concentration gradient)</span>，粒子沿梯度「向下」移動。</p>
<p>穿過膜的<span class="term">簡單擴散 (simple diffusion)</span> 是指粒子<strong>直接從磷脂之間</strong>穿過，不需蛋白質協助，適用於細小的非極性 (疏水) 分子。</p>
<p><strong>例子：</strong>氧 (O₂) 和二氧化碳 (CO₂)。使用 O₂ 的細胞內部 O₂ 濃度低，所以 O₂ 擴散進入；進行呼吸的細胞製造 CO₂，所以 CO₂ 擴散出去。</p>
<p>可使用 B2.1.8 的「運輸實驗室」觀察：切換至「簡單擴散」，選擇粒子類型並改變濃度。</p>`),
        examTip: L("Say that O₂ and CO₂ pass “between the phospholipids” by simple diffusion, down their concentration gradient, with no ATP and no protein.",
          "O₂ と CO₂ は単純拡散で「リン脂質の間」を、濃度勾配に従って、ATPもタンパク質も使わずに通ると書く。",
          "要寫出 O₂ 和 CO₂ 以簡單擴散「穿過磷脂之間」，順濃度梯度，不需 ATP 和蛋白質。")
      },
      {
        ref: "B2.1.4", ahl: false,
        heading: L("Integral and peripheral proteins", "内在性タンパク質と表在性タンパク質", "整合蛋白與周邊蛋白"),
        body: L(
          `<p>Membranes contain many proteins. They have <strong>diverse structures, locations and functions</strong>.</p>
<ul><li><span class="term">Integral proteins</span> are <strong>embedded</strong> in one or both of the lipid layers. Many have hydrophobic regions that sit in the core of the bilayer and hydrophilic regions that face the water. Those that span the whole membrane are called transmembrane proteins.</li>
<li><span class="term">Peripheral proteins</span> are <strong>attached to one or other surface</strong> of the bilayer. They do not go into the hydrophobic core.</li></ul>
<p>Functions of membrane proteins include: channels and pumps for transport (B2.1.6–7), receptors that bind signal molecules such as hormones, enzymes, anchoring the cell to other cells or to the cytoskeleton, and cell recognition (B1.1.7, B2.1.9).</p>
<p>The structure of proteins is explained in B1.2.</p>`,
          `<p>膜には多くのタンパク質が含まれ、その<strong>構造、位置、機能は多様</strong>である。</p>
<ul><li><span class="term">内在性タンパク質 (integral protein)</span> は、脂質の片方または両方の層に<strong>埋め込まれて</strong>いる。多くは疎水性の部分が二重層の中心部にあり、親水性の部分が水に面している。膜全体を貫くものは膜貫通タンパク質という。</li>
<li><span class="term">表在性タンパク質 (peripheral protein)</span> は、二重層の<strong>どちらか一方の表面に付着</strong>している。疎水性の中心部には入らない。</li></ul>
<p>膜タンパク質の機能には、輸送のためのチャネルやポンプ (B2.1.6–7)、ホルモンなどのシグナル分子と結合する受容体、酵素、他の細胞や細胞骨格への固定、細胞の認識 (B1.1.7、B2.1.9) などがある。</p>
<p>タンパク質の構造は B1.2 で扱う。</p>`,
          `<p>膜含有很多蛋白質，它們的<strong>結構、位置和功能各不相同</strong>。</p>
<ul><li><span class="term">整合蛋白 (integral protein)</span> <strong>嵌入</strong>脂質層的其中一層或兩層。很多整合蛋白的疏水部分位於雙層核心，親水部分面向水。貫穿整個膜的稱為跨膜蛋白。</li>
<li><span class="term">周邊蛋白 (peripheral protein)</span> <strong>附於雙層其中一面的表面</strong>，不進入疏水核心。</li></ul>
<p>膜蛋白的功能包括：作運輸的通道和泵 (B2.1.6–7)、結合激素等訊號分子的受體、酶、把細胞錨定於其他細胞或細胞骨架，以及細胞識別 (B1.1.7、B2.1.9)。</p>
<p>蛋白質的結構在 B1.2 解釋。</p>`),
        links: undefined
      },
      {
        ref: "B2.1.5", ahl: false,
        widget: "osmosis-anim",
        heading: L("Osmosis and aquaporins", "浸透とアクアポリン", "滲透與水通道蛋白"),
        body: L(
          `<p><span class="term">Osmosis</span> is the net movement of water molecules across a membrane, from a region of <strong>lower</strong> solute concentration to a region of <strong>higher</strong> solute concentration.</p>
<p><strong>Explaining it step by step:</strong></p>
<ol><li>Water molecules move <strong>randomly</strong> all the time, in both directions.</li>
<li>The membrane is <strong>impermeable to the solute</strong> (the solute particles cannot cross), but water can cross.</li>
<li>Where the solute concentration is <strong>higher</strong>, a smaller share of the particles are water. Fewer water molecules reach the membrane from that side than from the side with less solute.</li>
<li>So more water molecules cross towards the higher solute concentration than away from it. The <strong>net</strong> movement of water is toward the higher solute concentration, until the concentrations are equal (or another force stops it).</li></ol>
<p>Water molecules are polar, but they are small, so a few slip through the bilayer. <span class="term">Aquaporins</span> are channel proteins that let water molecules through quickly. They make osmosis much faster in cells that need it, such as kidney cells.</p>
<div class="note">The solute does not “pull” the water. Water movement is random; the net movement happens because of the difference in concentrations.</div>`,
          `<p><span class="term">浸透 (osmosis)</span> は、水分子が膜を通って、溶質濃度の<strong>低い</strong>領域から<strong>高い</strong>領域へ正味で移動することである。</p>
<p><strong>順を追った説明:</strong></p>
<ol><li>水分子は常に<strong>ランダムに</strong>、両方向へ動いている。</li>
<li>膜は<strong>溶質を通さない</strong> (溶質の粒子は通れない) が、水は通れる。</li>
<li>溶質濃度が<strong>高い</strong>側では、粒子のうち水の割合が小さい。その側から膜に達する水分子は、溶質が少ない側より少ない。</li>
<li>そのため、溶質濃度の高い側へ向かう水分子の方が、反対方向へ向かうものより多い。水の<strong>正味の</strong>移動は溶質濃度の高い側への向きで、濃度が等しくなる (または別の力が止める) まで続く。</li></ol>
<p>水分子は極性だが小さいので、少しは二重層を通り抜ける。<span class="term">アクアポリン (aquaporin)</span> は水分子を速く通すチャネルタンパク質で、腎臓の細胞など必要とする細胞で浸透を大幅に速める。</p>
<div class="note">溶質が水を「引っ張る」わけではない。水の動きはランダムで、濃度の差があるために正味の移動が生じる。</div>`,
          `<p><span class="term">滲透 (osmosis)</span> 是水分子穿過膜，由溶質濃度<strong>較低</strong>的區域淨移向溶質濃度<strong>較高</strong>的區域。</p>
<p><strong>逐步解釋：</strong></p>
<ol><li>水分子一直在<strong>隨機</strong>地向兩個方向運動。</li>
<li>膜<strong>不讓溶質通過</strong> (溶質粒子不能穿過)，但水可以。</li>
<li>溶質濃度<strong>較高</strong>的一側，粒子中水所佔的比例較小，從該側到達膜的水分子比溶質較少的一側少。</li>
<li>因此，移向高溶質濃度一側的水分子比移離的多。水的<strong>淨</strong>移動方向是朝向溶質濃度較高處，直至濃度相等 (或有其他力阻止)。</li></ol>
<p>水分子雖有極性，但體積小，所以有少量能滲過雙層。<span class="term">水通道蛋白 (aquaporin)</span> 是讓水分子快速通過的通道蛋白，使需要的細胞 (如腎臟細胞) 的滲透大大加快。</p>
<div class="note">溶質並不是「拉」水。水的運動是隨機的，淨移動是濃度差造成的。</div>`),
        examTip: L("A full-mark osmosis explanation has three parts: random movement, membrane impermeable to solute, difference in solute concentration. Say “net movement”.",
          "浸透の説明で満点を取るには3点が必要: ランダムな運動、膜が溶質を通さないこと、溶質濃度の差。「正味の移動」と書く。",
          "滿分的滲透解釋有三部分：隨機運動、膜不讓溶質通過、溶質濃度的差別。要寫「淨移動」。")
      },
      {
        ref: "B2.1.6", ahl: false,
        heading: L("Channel proteins and facilitated diffusion", "チャネルタンパク質と促進拡散", "通道蛋白與易化擴散"),
        body: L(
          `<p>Ions cannot cross the hydrophobic core, but they can cross through <span class="term">channel proteins</span>. A channel protein has a water-filled pore through the membrane. This is called <span class="term">facilitated diffusion</span>: the particles still move <strong>down their concentration gradient</strong> and it needs <strong>no ATP</strong>, but a protein helps.</p>
<p><strong>Why channels make membranes selectively permeable:</strong></p>
<ul><li>The shape and charges lining the pore fit <strong>one specific type of ion</strong> (for example a potassium channel lets K⁺ through but not Na⁺). Other particles do not fit or are not attracted.</li>
<li>A channel can be <strong>open</strong> (ions diffuse through) or <strong>closed</strong> (no ions pass). So the cell can control when transport happens.</li></ul>`,
          `<p>イオンは疎水性の中心部を通れないが、<span class="term">チャネルタンパク質 (channel protein)</span> を通って膜を横切れる。チャネルタンパク質には、膜を貫く水で満たされた孔がある。これを<span class="term">促進拡散 (facilitated diffusion)</span> という。粒子は<strong>濃度勾配に従って</strong>動き、<strong>ATPは不要</strong>だが、タンパク質が助ける。</p>
<p><strong>チャネルが膜に選択的透過性を与える理由:</strong></p>
<ul><li>孔の形と内壁の電荷が<strong>特定の1種類のイオン</strong>に合う (例: カリウムチャネルは K⁺ を通すが Na⁺ は通さない)。他の粒子は合わない、または引きつけられない。</li>
<li>チャネルは<strong>開いて</strong> (イオンが拡散して通る) <strong>閉じる</strong> (イオンが通らない) ことができる。そのため細胞は輸送が起こる時を調節できる。</li></ul>`,
          `<p>離子不能穿過疏水核心，但可以經<span class="term">通道蛋白 (channel protein)</span> 穿過。通道蛋白有一個貫穿膜、充滿水的孔道。這稱為<span class="term">易化擴散 (facilitated diffusion)</span>：粒子仍然<strong>順濃度梯度</strong>移動，<strong>不需 ATP</strong>，但有蛋白質協助。</p>
<p><strong>通道為何令膜具選擇透過性：</strong></p>
<ul><li>孔道的形狀和內壁電荷只適合<strong>某一種離子</strong> (例如鉀通道讓 K⁺ 通過而不讓 Na⁺ 通過)，其他粒子不合適或不被吸引。</li>
<li>通道可以<strong>開啟</strong> (離子擴散通過) 或<strong>關閉</strong> (離子不能通過)，所以細胞能控制運輸何時發生。</li></ul>`),
        examTip: L("Facilitated diffusion = passive (down the gradient, no ATP) + protein. Do not call it “active”.",
          "促進拡散=受動的 (勾配に従う、ATPなし) +タンパク質。「能動的」とは書かない。",
          "易化擴散 = 被動 (順梯度、不需 ATP) + 蛋白質。不要稱它為「主動」。")
      },
      {
        ref: "B2.1.7", ahl: false,
        heading: L("Pump proteins and active transport", "ポンプタンパク質と能動輸送", "泵蛋白與主動運輸"),
        body: L(
          `<p><span class="term">Pump proteins</span> carry specific particles across a membrane using energy from <span class="term">ATP</span> (adenosine triphosphate). This is <span class="term">active transport</span>.</p>
<ul><li>The pump is <strong>specific</strong>: only certain particles bind to it.</li>
<li>ATP gives the energy to change the shape of the pump and move the particle across.</li>
<li>Because energy is used, pumps can move particles <strong>against a concentration gradient</strong>, from low concentration to high concentration. The cell can therefore build up a much higher or lower concentration of a substance than outside.</li></ul>
<p>If ATP runs out, for example if respiration is stopped, active transport stops.</p>
<table><tr><th></th><th>Facilitated diffusion (channel)</th><th>Active transport (pump)</th></tr>
<tr><td>Direction</td><td>Down the gradient</td><td>Can be against the gradient</td></tr>
<tr><td>ATP needed?</td><td>No</td><td>Yes</td></tr>
<tr><td>Protein</td><td>Channel</td><td>Pump</td></tr></table>`,
          `<p><span class="term">ポンプタンパク質 (pump protein)</span> は、<span class="term">ATP</span> (アデノシン三リン酸) のエネルギーを使って、特定の粒子を膜の反対側へ運ぶ。これが<span class="term">能動輸送 (active transport)</span> である。</p>
<ul><li>ポンプは<strong>特異的</strong>で、特定の粒子だけが結合する。</li>
<li>ATP のエネルギーでポンプの形が変わり、粒子が膜を横切る。</li>
<li>エネルギーを使うので、ポンプは粒子を<strong>濃度勾配に逆らって</strong>、低濃度側から高濃度側へ動かせる。そのため細胞は、物質の濃度を外よりずっと高くも低くもできる。</li></ul>
<p>呼吸が止まるなどして ATP がなくなると、能動輸送は止まる。</p>
<table><tr><th></th><th>促進拡散 (チャネル)</th><th>能動輸送 (ポンプ)</th></tr>
<tr><td>方向</td><td>勾配に従う</td><td>勾配に逆らえる</td></tr>
<tr><td>ATP は必要か</td><td>不要</td><td>必要</td></tr>
<tr><td>タンパク質</td><td>チャネル</td><td>ポンプ</td></tr></table>`,
          `<p><span class="term">泵蛋白 (pump protein)</span> 利用 <span class="term">ATP</span> (腺苷三磷酸) 的能量，把特定粒子運送穿過膜，這就是<span class="term">主動運輸 (active transport)</span>。</p>
<ul><li>泵具<strong>特異性</strong>：只有特定粒子能與它結合。</li>
<li>ATP 提供能量，令泵改變形狀，把粒子運過膜。</li>
<li>由於耗用能量，泵可以把粒子<strong>逆濃度梯度</strong>由低濃度處運往高濃度處，因此細胞可令某物質的濃度比外面高得多或低得多。</li></ul>
<p>若 ATP 耗盡 (例如呼吸停止)，主動運輸便會停止。</p>
<table><tr><th></th><th>易化擴散 (通道)</th><th>主動運輸 (泵)</th></tr>
<tr><td>方向</td><td>順梯度</td><td>可逆梯度</td></tr>
<tr><td>需要 ATP？</td><td>不需要</td><td>需要</td></tr>
<tr><td>蛋白質</td><td>通道</td><td>泵</td></tr></table>`),
        examTip: L("“Against the concentration gradient” and “uses ATP” are the two key marks for active transport.",
          "能動輸送では「濃度勾配に逆らう」と「ATPを使う」が2つの得点ポイント。",
          "主動運輸的兩個關鍵得分點是「逆濃度梯度」和「使用 ATP」。")
      },
      {
        ref: "B2.1.8", ahl: false,
        heading: L("Selectivity in membrane permeability", "膜の透過性の選択性", "膜透過性的選擇性"),
        body: L(
          `<p>Membranes are <span class="term">selectively permeable</span>: they let some substances cross and not others.</p>
<ul><li><strong>Simple diffusion is not selective.</strong> Whether a particle can cross depends only on its <strong>size</strong> and whether it is <strong>hydrophobic or hydrophilic</strong>. Small non-polar molecules cross easily; ions and polar molecules do not.</li>
<li><strong>Facilitated diffusion and active transport are selective.</strong> Each channel or pump protein handles only specific particles. By having different proteins in the membrane, a cell chooses what enters and leaves.</li></ul>
<p><strong>Transport lab.</strong> Explore each mechanism below. Change the concentrations and watch the net movement. Modes marked AHL are only for HL students.</p>`,
          `<p>膜は<span class="term">選択的透過性 (selectively permeable)</span> をもつ。通す物質と通さない物質がある。</p>
<ul><li><strong>単純拡散には選択性がない。</strong> 粒子が通れるかどうかは、その<strong>大きさ</strong>と<strong>疎水性か親水性か</strong>だけで決まる。小さな無極性分子は容易に通り、イオンや極性分子は通れない。</li>
<li><strong>促進拡散と能動輸送には選択性がある。</strong> チャネルやポンプのタンパク質は、それぞれ特定の粒子だけを扱う。膜にどのタンパク質を置くかによって、細胞は出入りするものを選べる。</li></ul>
<p><strong>輸送ラボ。</strong> 下で各しくみを調べよう。濃度を変えて、正味の移動を見る。AHL と表示されたモードは HL の生徒のみ対象である。</p>`,
          `<p>膜具<span class="term">選擇透過性 (selectively permeable)</span>：讓某些物質通過，而不讓其他物質通過。</p>
<ul><li><strong>簡單擴散沒有選擇性。</strong>粒子能否通過，只取決於它的<strong>大小</strong>及它是<strong>疏水還是親水</strong>。細小的非極性分子容易通過；離子和極性分子則不能。</li>
<li><strong>易化擴散和主動運輸有選擇性。</strong>每種通道或泵蛋白只處理特定的粒子。細胞藉着在膜中安排不同的蛋白質，來選擇哪些物質進出。</li></ul>
<p><strong>運輸實驗室。</strong>在下方探索各種機制：改變濃度，觀察淨移動。標示 AHL 的模式只供 HL 學生使用。</p>`),
        widget: "membrane-transport",
        examTip: L("Two sentences to learn: “Simple diffusion depends only on size and polarity (not selective).” “Channels and pumps are specific, so they make membranes selective.”",
          "覚える2文: 「単純拡散は大きさと極性だけで決まる (選択的ではない)」「チャネルとポンプは特異的なので、膜を選択的にする」。",
          "要記住兩句：「簡單擴散只取決於大小和極性 (沒有選擇性)。」「通道和泵具特異性，所以令膜有選擇性。」")
      },
      {
        ref: "B2.1.9", ahl: false,
        heading: L("Glycoproteins and glycolipids", "糖タンパク質と糖脂質", "糖蛋白與糖脂"),
        body: L(
          `<p>Some membrane proteins and lipids have short <strong>carbohydrate</strong> chains attached.</p>
<ul><li><span class="term">Glycoproteins</span>: proteins with carbohydrate chains.</li>
<li><span class="term">Glycolipids</span>: lipids with carbohydrate chains.</li></ul>
<p>The carbohydrate part is always on the <strong>extracellular side</strong> (the outer surface) of the membrane. Their roles:</p>
<ul><li><strong>Cell adhesion</strong>: helping cells stick to each other to form tissues.</li>
<li><strong>Cell recognition</strong>: acting as identity labels (for example the ABO blood-group antigens, B1.1.7), so that other cells can recognise them.</li></ul>`,
          `<p>膜タンパク質や脂質の一部には、短い<strong>糖鎖 (carbohydrate)</strong> が結合している。</p>
<ul><li><span class="term">糖タンパク質 (glycoprotein)</span>: 糖鎖をもつタンパク質。</li>
<li><span class="term">糖脂質 (glycolipid)</span>: 糖鎖をもつ脂質。</li></ul>
<p>糖鎖の部分はいつも膜の<strong>細胞外側</strong> (外側の表面) にある。その役割は次のとおり。</p>
<ul><li><strong>細胞接着 (cell adhesion)</strong>: 細胞どうしがくっついて組織をつくるのを助ける。</li>
<li><strong>細胞の認識 (cell recognition)</strong>: 身分証のような目印となり (例: ABO式血液型抗原、B1.1.7)、他の細胞が見分けられるようにする。</li></ul>`,
          `<p>部分膜蛋白和脂質連有短的<strong>糖鏈 (carbohydrate)</strong>。</p>
<ul><li><span class="term">糖蛋白 (glycoprotein)</span>：連有糖鏈的蛋白質。</li>
<li><span class="term">糖脂 (glycolipid)</span>：連有糖鏈的脂質。</li></ul>
<p>糖鏈部分永遠位於膜的<strong>細胞外側</strong> (外表面)。它們的作用：</p>
<ul><li><strong>細胞黏附 (cell adhesion)</strong>：幫助細胞互相黏合以形成組織。</li>
<li><strong>細胞識別 (cell recognition)</strong>：如同身分標籤 (例如 ABO 血型抗原，B1.1.7)，讓其他細胞辨認。</li></ul>`),
        links: undefined
      },
      {
        ref: "B2.1.10", ahl: false,
        heading: L("The fluid mosaic model", "流動モザイクモデル", "流動鑲嵌模型"),
        body: L(
          `<p>The <span class="term">fluid mosaic model</span> describes the membrane as a <strong>fluid</strong> bilayer of phospholipids (the molecules can move sideways, like a liquid) with a <strong>mosaic</strong> of different proteins scattered through it, like tiles in a mosaic.</p>
${fmFigure("en")}
<p><strong>How to draw it (exam):</strong> a two-dimensional drawing of the bilayer showing phospholipids (circle head, two tails), an integral protein, a peripheral protein, a glycoprotein, and cholesterol. Mark the hydrophilic regions (heads) and the hydrophobic region (tails). Put carbohydrate chains on the outer surface.</p>`,
          `<p><span class="term">流動モザイクモデル (fluid mosaic model)</span> は、膜を、リン脂質の<strong>流動的な</strong>二重層 (分子が液体のように横に動ける) と、その中に散らばるさまざまなタンパク質の<strong>モザイク</strong> (モザイク画のタイルのよう) として表す。</p>
${fmFigure("ja")}
<p><strong>描き方 (試験):</strong> 二重層の2次元の図に、リン脂質 (丸い頭部と2本の尾部)、内在性タンパク質、表在性タンパク質、糖タンパク質、コレステロールを描く。親水性の領域 (頭部) と疎水性の領域 (尾部) を示す。糖鎖は外側の表面に置く。</p>`,
          `<p><span class="term">流動鑲嵌模型 (fluid mosaic model)</span> 把膜描述為磷脂的<strong>流動</strong>雙層 (分子可像液體般橫向移動)，其中散布着多種蛋白質，形成<strong>鑲嵌</strong>圖案，如同馬賽克的小塊。</p>
${fmFigure("zh")}
<p><strong>如何繪畫 (考試)：</strong>畫出雙層的二維圖，包括磷脂 (圓形頭部加兩條尾部)、整合蛋白、周邊蛋白、糖蛋白和膽固醇。標示親水區域 (頭部) 及疏水區域 (尾部)，並把糖鏈畫在外表面。</p>`),
        examTip: L("Practise drawing it in under two minutes. Marks are usually for: bilayer with heads outward, at least one integral and one peripheral protein, glycoprotein with chain on the outside, cholesterol, and hydrophilic/hydrophobic labels.",
          "2分以内で描く練習をする。得点は通常: 頭部が外向きの二重層、内在性と表在性のタンパク質、外側に糖鎖のある糖タンパク質、コレステロール、親水性・疎水性のラベル。",
          "練習在兩分鐘內畫出此圖。得分點通常是：頭部向外的雙層、至少一個整合蛋白和一個周邊蛋白、糖鏈在外側的糖蛋白、膽固醇，以及親水／疏水的標示。")
      },
      {
        ref: "B2.1.11", ahl: true,
        heading: L("Fatty acids and membrane fluidity", "脂肪酸の組成と膜の流動性", "脂肪酸組成與膜的流動性"),
        body: L(
          `<p>Membrane <span class="term">fluidity</span> depends on the fatty acid tails of the phospholipids (see B1.1.10).</p>
<ul><li><strong>Unsaturated</strong> fatty acids have C=C bends and <strong>lower melting points</strong>. Tails pack loosely, so the membrane stays fluid and therefore <strong>flexible</strong> at the temperatures the cell experiences.</li>
<li><strong>Saturated</strong> fatty acids are straight, pack closely and have <strong>higher melting points</strong>. They make the membrane <strong>stronger</strong> (less likely to become too runny) at higher temperatures.</li></ul>
<p>A membrane needs a balance. If it is too stiff, proteins and vesicles cannot move properly. If it is too fluid, it is weak and leaks.</p>
<p><strong>Adaptation to habitat (example):</strong> fish and other ectotherms that live in very cold water have a higher proportion of unsaturated fatty acids in their membrane phospholipids, which keeps their membranes fluid at low temperatures. Organisms in hot environments, such as bacteria living in hot springs, have more saturated fatty acids, which keeps their membranes strong at high temperatures.</p>`,
          `<p>膜の<span class="term">流動性 (fluidity)</span> は、リン脂質の脂肪酸の尾部に左右される (B1.1.10 参照)。</p>
<ul><li><strong>不飽和</strong>脂肪酸は C=C で折れ曲がり、<strong>融点が低い</strong>。尾部が疎に並ぶので、膜は流動的で、細胞が経験する温度で<strong>柔軟</strong>に保たれる。</li>
<li><strong>飽和</strong>脂肪酸はまっすぐで密に並び、<strong>融点が高い</strong>。高い温度でも膜が流れすぎないように、膜を<strong>強く</strong>する。</li></ul>
<p>膜にはバランスが必要である。硬すぎるとタンパク質や小胞が正しく動けない。流動的すぎると弱くなり、漏れる。</p>
<p><strong>生息地への適応 (例):</strong> 非常に冷たい水にすむ魚などの変温動物は、膜のリン脂質に不飽和脂肪酸の割合が高く、低温でも膜の流動性が保たれる。温泉にすむ細菌のように高温の環境の生物は飽和脂肪酸が多く、高温でも膜の強さが保たれる。</p>`,
          `<p>膜的<span class="term">流動性 (fluidity)</span> 取決於磷脂的脂肪酸尾部 (見 B1.1.10)。</p>
<ul><li><strong>不飽和</strong>脂肪酸有 C=C 造成的彎曲，<strong>熔點較低</strong>。尾部排列疏鬆，所以膜保持流動，因而在細胞所處的溫度下仍然<strong>有彈性</strong>。</li>
<li><strong>飽和</strong>脂肪酸筆直、排列緊密，<strong>熔點較高</strong>。它們令膜在較高溫度下更<strong>堅固</strong> (不致太稀軟)。</li></ul>
<p>膜需要取得平衡：太硬，蛋白質和囊泡不能正常移動；太流動，膜便不夠堅固，容易滲漏。</p>
<p><strong>對棲息環境的適應 (例子)：</strong>生活在極冷水中的魚等變溫動物，膜磷脂中不飽和脂肪酸的比例較高，令膜在低溫下仍保持流動。生活在高溫環境的生物 (如溫泉中的細菌) 則含較多飽和脂肪酸，令膜在高溫下保持堅固。</p>`),
        examTip: L("Always connect: fatty acid type → melting point → fluidity or strength → habitat temperature.",
          "つなげて書く: 脂肪酸の種類→融点→流動性または強さ→生息地の温度。",
          "要連繫書寫：脂肪酸類型→熔點→流動性或強度→棲息地溫度。")
      },
      {
        ref: "B2.1.12", ahl: true,
        heading: L("Cholesterol and membrane fluidity", "コレステロールと膜の流動性", "膽固醇與膜的流動性"),
        body: L(
          `<p><span class="term">Cholesterol</span> is a steroid (B1.1.13) found in the membranes of <strong>animal cells</strong>. Its molecules sit <strong>between the phospholipids</strong> in both layers. A small hydrophilic –OH group is near the phospholipid heads, and the rest of the molecule lies among the hydrophobic tails.</p>
<p>Cholesterol is a <strong>modulator</strong> (adjuster) of fluidity:</p>
<ul><li><strong>At higher temperatures</strong>, it holds phospholipids in place and reduces their movement. This <strong>stabilizes</strong> the membrane so it does not become too fluid.</li>
<li><strong>At lower temperatures</strong>, it keeps the phospholipid tails from packing tightly together. This <strong>prevents the membrane from stiffening</strong>.</li></ul>
<p>So cholesterol helps keep membrane fluidity fairly steady when temperature changes.</p>`,
          `<p><span class="term">コレステロール (cholesterol)</span> は<strong>動物細胞</strong>の膜にあるステロイド (B1.1.13) である。分子は両方の層の<strong>リン脂質の間</strong>に位置する。小さな親水性の –OH 基がリン脂質の頭部の近くにあり、残りの部分は疎水性の尾部の間にある。</p>
<p>コレステロールは流動性の<strong>調節因子 (modulator)</strong> である。</p>
<ul><li><strong>高温では</strong>、リン脂質を固定して動きを抑える。これにより膜が流動的になりすぎないよう<strong>安定させる</strong>。</li>
<li><strong>低温では</strong>、リン脂質の尾部が密に詰まるのを防ぐ。これにより<strong>膜が硬くなるのを防ぐ</strong>。</li></ul>
<p>このようにコレステロールは、温度が変わっても膜の流動性をほぼ一定に保つのを助ける。</p>`,
          `<p><span class="term">膽固醇 (cholesterol)</span> 是存在於<strong>動物細胞</strong>膜中的類固醇 (B1.1.13)。它的分子位於兩層的<strong>磷脂之間</strong>：細小的親水 –OH 基靠近磷脂頭部，其餘部分在疏水尾部之間。</p>
<p>膽固醇是流動性的<strong>調節者 (modulator)</strong>：</p>
<ul><li><strong>在較高溫度時</strong>，它固定磷脂並減少其移動，<strong>穩定</strong>膜，使它不會太流動。</li>
<li><strong>在較低溫度時</strong>，它阻止磷脂尾部緊密排列，<strong>防止膜變硬</strong>。</li></ul>
<p>因此，當溫度改變時，膽固醇有助維持膜的流動性相對穩定。</p>`),
        examTip: L("Cholesterol does two opposite jobs. Say both: stabilizes at high temperature; prevents stiffening at low temperature.",
          "コレステロールは正反対の2つの働きをする。両方書く: 高温では安定させ、低温では硬くなるのを防ぐ。",
          "膽固醇有兩個相反的作用，兩個都要寫：高溫時穩定；低溫時防止變硬。")
      },
      {
        ref: "B2.1.13", ahl: true,
        heading: L("Vesicles, endocytosis and exocytosis", "小胞、エンドサイトーシスとエキソサイトーシス", "囊泡、胞吞作用與胞吐作用"),
        body: L(
          `<p>A <span class="term">vesicle</span> is a small sphere of membrane enclosing fluid. Because membranes are fluid, a piece of membrane can <strong>bend, pinch off and fuse</strong> with another membrane. Vesicles can therefore form and fuse easily.</p>
<ul><li><span class="term">Endocytosis</span>: the cell takes in material. A region of the plasma membrane folds inwards, surrounds the material and pinches off as a vesicle inside the cell. <em>Example:</em> a white blood cell (phagocyte) engulfs a bacterium by phagocytosis.</li>
<li><span class="term">Exocytosis</span>: the cell releases material. A vesicle moves to the plasma membrane and fuses with it, and its contents are released outside. The vesicle membrane becomes part of the plasma membrane. <em>Examples:</em> a nerve cell releasing neurotransmitter into a synapse; a pancreatic cell secreting insulin.</li></ul>
<p>Endocytosis and exocytosis let large molecules and even whole cells cross the plasma membrane without crossing the bilayer particle by particle. They use ATP. See the Transport lab (AHL mode) for the steps.</p>`,
          `<p><span class="term">小胞 (vesicle)</span> は、液体を包む小さな球状の膜である。膜は流動的なので、膜の一部が<strong>曲がり、くびれ切れ、他の膜と融合</strong>できる。そのため小胞は容易にできたり融合したりする。</p>
<ul><li><span class="term">エンドサイトーシス (endocytosis)</span>: 細胞が物質を取り込む。細胞膜の一部が内側に陥入して物質を囲み、くびれ切れて細胞内の小胞になる。<em>例:</em> 白血球 (食細胞) が食作用 (phagocytosis) で細菌を取り込む。</li>
<li><span class="term">エキソサイトーシス (exocytosis)</span>: 細胞が物質を放出する。小胞が細胞膜に移動して融合し、内容物が外へ放出される。小胞の膜は細胞膜の一部になる。<em>例:</em> 神経細胞がシナプスへ神経伝達物質を放出する。膵臓の細胞がインスリンを分泌する。</li></ul>
<p>エンドサイトーシスとエキソサイトーシスにより、大きな分子や細胞全体でさえ、二重層を粒子ごとに通ることなく細胞膜を出入りできる。ATP を使う。段階は輸送ラボ (AHL モード) で確かめよう。</p>`,
          `<p><span class="term">囊泡 (vesicle)</span> 是包着液體的細小球形膜。由於膜具流動性，一片膜可以<strong>彎曲、脫離和融合</strong>到另一層膜上，所以囊泡容易形成和融合。</p>
<ul><li><span class="term">胞吞作用 (endocytosis)</span>：細胞攝入物質。質膜的一部分向內凹陷，包圍物質後脫離成細胞內的囊泡。<em>例子：</em>白血球 (吞噬細胞) 以吞噬作用 (phagocytosis) 吞入細菌。</li>
<li><span class="term">胞吐作用 (exocytosis)</span>：細胞釋出物質。囊泡移向質膜並與其融合，內容物釋放到細胞外，囊泡膜成為質膜的一部分。<em>例子：</em>神經細胞向突觸釋出神經遞質；胰臟細胞分泌胰島素。</li></ul>
<p>胞吞和胞吐令大分子甚至整個細胞可以出入質膜，而不必逐個粒子穿過雙層。這過程需要 ATP。可在運輸實驗室 (AHL 模式) 查看各步驟。</p>`),
        links: undefined
      },
      {
        ref: "B2.1.14", ahl: true,
        heading: L("Gated ion channels in neurons", "ニューロンのゲート付きイオンチャネル", "神經元的門控離子通道"),
        body: L(
          `<p>Many channel proteins in nerve cells (<span class="term">neurons</span>) have a “gate”. The gate is <strong>closed</strong> until a signal opens it, so the neuron controls when ions flow.</p>
<ul><li><strong>Neurotransmitter-gated channels</strong> open when a chemical signal binds to them. <em>Example:</em> the <span class="term">nicotinic acetylcholine receptor</span>. When the neurotransmitter acetylcholine binds, the channel opens and positive ions (mainly Na⁺) flow in through the pore.</li>
<li><strong>Voltage-gated channels</strong> open or close when the electrical voltage across the membrane changes. <em>Examples:</em> <span class="term">sodium channels</span> and <span class="term">potassium channels</span> in the axon membrane. Each opens at a particular voltage and lets only its own ion through.</li></ul>
<p>Because ions move through open channels down their concentration gradients without ATP, this is facilitated diffusion that can be switched on and off. It is how neurons send electrical signals (nerve impulses).</p>`,
          `<p>神経細胞 (<span class="term">ニューロン, neuron</span>) の多くのチャネルタンパク質には「ゲート」がある。ゲートは信号で開くまで<strong>閉じて</strong>おり、ニューロンはイオンが流れる時を制御できる。</p>
<ul><li><strong>神経伝達物質依存性 (ゲート付き) チャネル</strong>は、化学的な信号が結合すると開く。<em>例:</em> <span class="term">ニコチン性アセチルコリン受容体 (nicotinic acetylcholine receptor)</span>。神経伝達物質のアセチルコリンが結合するとチャネルが開き、正の電荷をもつイオン (主に Na⁺) が孔を通って流入する。</li>
<li><strong>電位依存性チャネル (voltage-gated channel)</strong> は、膜をはさむ電位が変わると開閉する。<em>例:</em> 軸索の膜の<span class="term">ナトリウムチャネル (sodium channel)</span> と<span class="term">カリウムチャネル (potassium channel)</span>。それぞれ特定の電位で開き、自分のイオンだけを通す。</li></ul>
<p>開いたチャネルをイオンが濃度勾配に従って ATP なしで通るので、これはオン・オフできる促進拡散である。ニューロンはこのしくみで電気信号 (神経インパルス) を送る。</p>`,
          `<p>神經細胞 (<span class="term">神經元, neuron</span>) 中很多通道蛋白都有「門」。門會一直<strong>關閉</strong>，直至有訊號令它打開，所以神經元能控制離子何時流動。</p>
<ul><li><strong>神經遞質門控通道</strong>在化學訊號與它結合時打開。<em>例子：</em><span class="term">菸鹼型乙酰膽鹼受體 (nicotinic acetylcholine receptor)</span>。神經遞質乙酰膽鹼結合後，通道打開，帶正電荷的離子 (主要是 Na⁺) 經孔道流入。</li>
<li><strong>電壓門控通道 (voltage-gated channel)</strong> 在膜兩側的電壓改變時開啟或關閉。<em>例子：</em>軸突膜上的<span class="term">鈉通道 (sodium channel)</span> 和<span class="term">鉀通道 (potassium channel)</span>。每種通道在特定電壓下打開，只讓自己的離子通過。</li></ul>
<p>離子經開啟的通道順濃度梯度移動，不需 ATP，所以這是可開可關的易化擴散。神經元就是這樣傳送電訊號 (神經衝動)。</p>`),
        examTip: L("Know one example of each trigger: acetylcholine (nicotinic receptor) = ligand-gated; Na⁺ and K⁺ channels = voltage-gated.",
          "それぞれの引き金の例を1つずつ: アセチルコリン (ニコチン性受容体)=リガンド (神経伝達物質) 依存性、Na⁺・K⁺ チャネル=電位依存性。",
          "要認識每種觸發方式的一個例子：乙酰膽鹼 (菸鹼型受體) = 配體 (神經遞質) 門控；Na⁺ 和 K⁺ 通道 = 電壓門控。")
      },
      {
        ref: "B2.1.15", ahl: true,
        heading: L("Sodium–potassium pumps", "ナトリウム・カリウムポンプ", "鈉鉀泵"),
        body: L(
          `<p>The <span class="term">sodium–potassium pump</span> is an <span class="term">exchange transporter</span>: it swaps one ion for another across the plasma membrane. Each cycle uses one ATP to move <strong>3 sodium ions (Na⁺) out</strong> of the cell and <strong>2 potassium ions (K⁺) in</strong>. Both ions are moved <strong>against</strong> their concentration gradients, so this is active transport.</p>
<p><strong>Why it matters: membrane potentials.</strong> The pump makes Na⁺ concentration low inside and high outside, and K⁺ concentration high inside and low outside. It also moves more positive charge out (3) than in (2), and some K⁺ leaks back out through open potassium channels. So the <strong>inside of the cell becomes negative compared with the outside</strong>. This difference in electrical charge across the membrane is the <span class="term">membrane potential</span>. Neurons depend on it to send nerve impulses.</p>`,
          `<p><span class="term">ナトリウム・カリウムポンプ (sodium–potassium pump)</span> は<span class="term">交換輸送体 (exchange transporter)</span> で、細胞膜をはさんで1種のイオンを別のイオンと入れ替える。1回のサイクルで ATP を1個使い、<strong>ナトリウムイオン (Na⁺) 3個を細胞外へ</strong>、<strong>カリウムイオン (K⁺) 2個を細胞内へ</strong>運ぶ。どちらも濃度勾配に<strong>逆らって</strong>運ばれるので、能動輸送である。</p>
<p><strong>重要な理由: 膜電位。</strong> このポンプにより、Na⁺ の濃度は内側で低く外側で高く、K⁺ の濃度は内側で高く外側で低くなる。また、外へ出す正電荷 (3) が入る正電荷 (2) より多く、さらに一部の K⁺ が開いたカリウムチャネルから外へ漏れ出る。そのため<strong>細胞の内側は外側に対して負になる</strong>。膜をはさむこの電気的な差が<span class="term">膜電位 (membrane potential)</span> である。ニューロンは神経インパルスを送るためにこれを利用する。</p>`,
          `<p><span class="term">鈉鉀泵 (sodium–potassium pump)</span> 是一種<span class="term">交換運輸體 (exchange transporter)</span>：在質膜兩側以一種離子交換另一種離子。每個循環消耗一個 ATP，把<strong>3 個鈉離子 (Na⁺) 運出</strong>細胞，同時把<strong>2 個鉀離子 (K⁺) 運入</strong>。兩種離子都是<strong>逆</strong>濃度梯度移動，所以這是主動運輸。</p>
<p><strong>重要性：膜電位。</strong>這個泵令細胞內 Na⁺ 濃度低、細胞外高，而 K⁺ 濃度則內高外低。它運出的正電荷 (3) 亦多於運入的 (2)，加上部分 K⁺ 經開啟的鉀通道漏出細胞，所以<strong>細胞內部相對外部帶負電</strong>。膜兩側這種電荷差別就是<span class="term">膜電位 (membrane potential)</span>，神經元依靠它來傳送神經衝動。</p>`),
        examTip: L("Learn the numbers: 3 Na⁺ out, 2 K⁺ in, per ATP. Say the pump helps set up the membrane potential (inside negative).",
          "数を覚える: ATP 1個につき Na⁺ 3個が外へ、K⁺ 2個が内へ。ポンプが膜電位 (内側が負) をつくるのに役立つと書く。",
          "記住數目：每個 ATP，3 個 Na⁺ 運出、2 個 K⁺ 運入。要寫出泵有助建立膜電位 (內部為負)。")
      },
      {
        ref: "B2.1.16", ahl: true,
        heading: L("Sodium-dependent glucose cotransporters", "ナトリウム依存性グルコース共輸送体", "鈉依賴性葡萄糖協同運輸體"),
        body: L(
          `<p>A <span class="term">sodium-dependent glucose cotransporter</span> is a membrane protein that carries <strong>sodium ions and glucose together</strong> in the same direction into the cell. This is an example of <span class="term">indirect active transport</span>.</p>
<ol><li>A sodium–potassium pump (using ATP) keeps Na⁺ concentration <strong>low inside</strong> the cell and high outside.</li>
<li>Na⁺ then tends to move back in down its gradient. The cotransporter lets Na⁺ in <strong>only if glucose binds too</strong>, so the flow of Na⁺ drags glucose in with it.</li>
<li>Glucose can be moved <strong>against its own concentration gradient</strong> this way.</li></ol>
<p>It is “indirect” because the cotransporter does <strong>not use ATP itself</strong>. The energy comes from the Na⁺ gradient, which was set up by ATP-driven pumps.</p>
<p><strong>Importance:</strong> absorbing glucose into the cells lining the <strong>small intestine</strong>, and reabsorbing glucose from the filtrate by cells in the <strong>nephron</strong> of the kidney, so that glucose is not lost in urine.</p>`,
          `<p><span class="term">ナトリウム依存性グルコース共輸送体 (sodium-dependent glucose cotransporter)</span> は、<strong>ナトリウムイオンとグルコースを一緒に</strong>同じ向きに細胞内へ運ぶ膜タンパク質である。これは<span class="term">間接的能動輸送 (indirect active transport)</span> の例である。</p>
<ol><li>ナトリウム・カリウムポンプ (ATP を使う) が、細胞内の Na⁺ 濃度を<strong>低く</strong>、外側を高く保つ。</li>
<li>Na⁺ は濃度勾配に従って内側へ戻ろうとする。共輸送体は、<strong>グルコースも結合したときだけ</strong> Na⁺ を通すので、Na⁺ の流れがグルコースを一緒に引き込む。</li>
<li>こうして、グルコースを<strong>それ自身の濃度勾配に逆らって</strong>運べる。</li></ol>
<p>「間接的」というのは、共輸送体自身は <strong>ATP を使わない</strong>からである。エネルギーは、ATP で動くポンプがつくった Na⁺ の勾配から得られる。</p>
<p><strong>重要性:</strong> <strong>小腸</strong>の内壁の細胞へのグルコース吸収と、腎臓の<strong>ネフロン</strong>の細胞による濾液からのグルコース再吸収 (グルコースが尿中に失われないようにする)。</p>`,
          `<p><span class="term">鈉依賴性葡萄糖協同運輸體 (sodium-dependent glucose cotransporter)</span> 是一種膜蛋白，把<strong>鈉離子和葡萄糖一起</strong>朝同一方向運入細胞。這是<span class="term">間接主動運輸 (indirect active transport)</span> 的例子。</p>
<ol><li>鈉鉀泵 (使用 ATP) 令細胞內 Na⁺ 濃度<strong>偏低</strong>，細胞外偏高。</li>
<li>Na⁺ 傾向順濃度梯度流回細胞內。協同運輸體<strong>只有在葡萄糖也結合時</strong>才讓 Na⁺ 進入，所以 Na⁺ 的流動帶動葡萄糖一同進入。</li>
<li>這樣葡萄糖就可以<strong>逆它本身的濃度梯度</strong>被運入。</li></ol>
<p>稱為「間接」，是因為協同運輸體<strong>本身不使用 ATP</strong>；能量來自 Na⁺ 梯度，而這個梯度是由耗用 ATP 的泵建立的。</p>
<p><strong>重要性：</strong>令<strong>小腸</strong>內壁的細胞吸收葡萄糖，以及令腎臟<strong>腎單位 (nephron)</strong> 的細胞從濾液中重吸收葡萄糖，使葡萄糖不會隨尿液流失。</p>`),
        examTip: L("“Indirect” = the cotransporter does not use ATP directly; the energy is stored in the Na⁺ gradient made by the Na⁺/K⁺ pump.",
          "「間接」=共輸送体は ATP を直接使わない。エネルギーは Na⁺/K⁺ ポンプがつくった Na⁺ の勾配に蓄えられている。",
          "「間接」= 協同運輸體不直接使用 ATP；能量貯存於由 Na⁺/K⁺ 泵建立的 Na⁺ 梯度中。")
      },
      {
        ref: "B2.1.17", ahl: true,
        heading: L("Cell adhesion and tissues", "細胞接着と組織", "細胞黏附與組織"),
        body: L(
          `<p>In animals, cells must stick together to form <strong>tissues</strong>. <span class="term">Cell-adhesion molecules (CAMs)</span> are membrane proteins that bind to other CAMs on neighbouring cells (or to the material between cells). They hold cells in place.</p>
<p>Different forms of CAM are used for different types of <strong>cell–cell junction</strong>, for example one type of junction seals the gap between cells and another gives mechanical strength. You do not need detailed knowledge of the different CAMs or junctions.</p>
<p>Link: carbohydrate chains of glycoproteins (B2.1.9) also help cells adhere.</p>`,
          `<p>動物では、細胞どうしがくっついて<strong>組織 (tissue)</strong> をつくる必要がある。<span class="term">細胞接着分子 (cell-adhesion molecule, CAM)</span> は、隣の細胞の CAM (または細胞間の物質) と結合する膜タンパク質で、細胞を所定の位置に保つ。</p>
<p>CAM は、<strong>細胞間結合 (cell–cell junction)</strong> の種類ごとに異なる形が使われる。例えば、細胞間の隙間をふさぐ結合や、機械的な強さを与える結合がある。個々の CAM や結合についての詳しい知識は不要である。</p>
<p>関連: 糖タンパク質の糖鎖 (B2.1.9) も細胞の接着を助ける。</p>`,
          `<p>在動物中，細胞必須黏合在一起形成<strong>組織 (tissue)</strong>。<span class="term">細胞黏附分子 (cell-adhesion molecule, CAM)</span> 是膜蛋白，能與鄰近細胞上的 CAM (或細胞間物質) 結合，把細胞固定在位。</p>
<p>不同類型的<strong>細胞間連接 (cell–cell junction)</strong> 使用不同形式的 CAM，例如有的連接封閉細胞之間的空隙，有的提供機械強度。你不需要詳細認識不同的 CAM 或連接。</p>
<p>關聯：糖蛋白的糖鏈 (B2.1.9) 同樣有助細胞黏附。</p>`)
      }
    ],
    keyTerms: [
      { term: L("phospholipid bilayer", "リン脂質二重層", "磷脂雙層"), def: L("Two layers of phospholipids with hydrophobic tails inside and hydrophilic heads facing the water; the basis of membranes.", "疎水性の尾部を内側、親水性の頭部を水側に向けた2層のリン脂質。膜の基本構造。", "兩層磷脂，疏水尾部在內，親水頭部面向水；是膜的基礎結構。"), ahl: false },
      { term: L("simple diffusion", "単純拡散", "簡單擴散"), def: L("Passive movement of small non-polar molecules (e.g. O₂, CO₂) between phospholipids, down a concentration gradient.", "小さな無極性分子 (O₂、CO₂ など) が濃度勾配に従ってリン脂質の間を通る受動的な移動。", "細小的非極性分子 (如 O₂、CO₂) 順濃度梯度穿過磷脂之間的被動移動。"), ahl: false },
      { term: L("integral protein", "内在性タンパク質", "整合蛋白"), def: L("A membrane protein embedded in one or both lipid layers.", "脂質の片方または両方の層に埋め込まれた膜タンパク質。", "嵌入脂質層其中一層或兩層的膜蛋白。"), ahl: false },
      { term: L("peripheral protein", "表在性タンパク質", "周邊蛋白"), def: L("A membrane protein attached to one surface of the bilayer.", "二重層の一方の表面に付着した膜タンパク質。", "附於雙層其中一面表面的膜蛋白。"), ahl: false },
      { term: L("osmosis", "浸透", "滲透"), def: L("Net movement of water molecules across a membrane from lower to higher solute concentration.", "水分子が膜を通って、溶質濃度の低い側から高い側へ正味で移動すること。", "水分子穿過膜，由溶質濃度較低處淨移向較高處。"), ahl: false },
      { term: L("aquaporin", "アクアポリン", "水通道蛋白"), def: L("A channel protein that lets water molecules cross a membrane quickly.", "水分子が膜を速く通るためのチャネルタンパク質。", "讓水分子快速穿過膜的通道蛋白。"), ahl: false },
      { term: L("facilitated diffusion", "促進拡散", "易化擴散"), def: L("Passive movement of particles down a concentration gradient through a membrane protein, such as a channel protein (no ATP used).", "粒子がチャネルタンパク質などの膜タンパク質を通って、濃度勾配に従って受動的に移動すること (ATP は使わない)。", "粒子經通道蛋白等膜蛋白順濃度梯度的被動移動 (不使用 ATP)。"), ahl: false },
      { term: L("active transport", "能動輸送", "主動運輸"), def: L("Movement of particles across a membrane by a pump protein using ATP, possibly against a concentration gradient.", "ポンプタンパク質が ATP を使って粒子を膜の反対側へ運ぶこと。濃度勾配に逆らうこともできる。", "泵蛋白利用 ATP 把粒子運過膜，可以逆濃度梯度進行。"), ahl: false },
      { term: L("selectively permeable", "選択的透過性", "選擇透過性"), def: L("Allowing some substances to cross a membrane but not others.", "ある物質は通すが他の物質は通さないこと。", "讓某些物質通過膜，而不讓其他物質通過。"), ahl: false },
      { term: L("glycoprotein / glycolipid", "糖タンパク質／糖脂質", "糖蛋白／糖脂"), def: L("A protein or lipid with a carbohydrate chain on the outer surface of the membrane; used in cell adhesion and recognition.", "膜の外側の表面に糖鎖をもつタンパク質または脂質。細胞接着と認識に使われる。", "在膜外表面連有糖鏈的蛋白質或脂質，用於細胞黏附和識別。"), ahl: false },
      { term: L("fluid mosaic model", "流動モザイクモデル", "流動鑲嵌模型"), def: L("Model of the membrane as a fluid phospholipid bilayer with a mosaic of proteins, cholesterol and carbohydrates.", "膜を、流動的なリン脂質二重層にタンパク質・コレステロール・糖鎖がモザイク状に存在するものとみなすモデル。", "把膜視為流動的磷脂雙層，其中鑲嵌着蛋白質、膽固醇和糖類的模型。"), ahl: false },
      { term: L("membrane fluidity", "膜の流動性", "膜的流動性"), def: L("How easily phospholipids move within the bilayer; affected by fatty acid saturation and cholesterol.", "二重層内でリン脂質がどれだけ動きやすいか。脂肪酸の飽和度とコレステロールの影響を受ける。", "磷脂在雙層內移動的難易程度，受脂肪酸飽和程度和膽固醇影響。"), ahl: true },
      { term: L("cholesterol", "コレステロール", "膽固醇"), def: L("A steroid between phospholipids in animal cell membranes that modulates fluidity.", "動物細胞膜でリン脂質の間にあり、流動性を調節するステロイド。", "存在於動物細胞膜磷脂之間、調節流動性的類固醇。"), ahl: true },
      { term: L("endocytosis / exocytosis", "エンドサイトーシス／エキソサイトーシス", "胞吞作用／胞吐作用"), def: L("Endocytosis: the cell takes in material in a vesicle formed from the plasma membrane. Exocytosis: a vesicle fuses with the plasma membrane and releases its contents.", "エンドサイトーシス: 細胞膜からできた小胞で物質を取り込む。エキソサイトーシス: 小胞が細胞膜と融合して内容物を放出する。", "胞吞：細胞利用由質膜形成的囊泡攝入物質。胞吐：囊泡與質膜融合並釋出內容物。"), ahl: true },
      { term: L("gated ion channel", "ゲート付きイオンチャネル", "門控離子通道"), def: L("A channel that opens or closes in response to a signal: a neurotransmitter binding or a change in voltage.", "神経伝達物質の結合や電位の変化などの信号で開閉するチャネル。", "因訊號 (神經遞質結合或電壓改變) 而開啟或關閉的通道。"), ahl: true },
      { term: L("sodium–potassium pump", "ナトリウム・カリウムポンプ", "鈉鉀泵"), def: L("An exchange transporter using ATP to move 3 Na⁺ out and 2 K⁺ in; helps create the membrane potential.", "ATP を使って Na⁺ 3個を外へ、K⁺ 2個を内へ運ぶ交換輸送体。膜電位の形成に役立つ。", "利用 ATP 把 3 個 Na⁺ 運出、2 個 K⁺ 運入的交換運輸體，有助建立膜電位。"), ahl: true },
      { term: L("indirect active transport", "間接的能動輸送", "間接主動運輸"), def: L("Transport driven by an ion gradient (e.g. Na⁺) rather than by ATP directly, as in the sodium-dependent glucose cotransporter.", "ATP ではなくイオンの勾配 (Na⁺ など) で駆動される輸送。ナトリウム依存性グルコース共輸送体など。", "由離子梯度 (如 Na⁺) 而非直接由 ATP 驅動的運輸，例如鈉依賴性葡萄糖協同運輸體。"), ahl: true },
      { term: L("cell-adhesion molecule (CAM)", "細胞接着分子 (CAM)", "細胞黏附分子 (CAM)"), def: L("A membrane protein that binds cells to neighbouring cells to form tissues.", "細胞を隣の細胞に結合させて組織をつくる膜タンパク質。", "把細胞與鄰近細胞結合以形成組織的膜蛋白。"), ahl: true }
    ],
    misconceptions: [
      { wrong: L("The membrane has little holes that small molecules fit through.", "膜には小さな穴があり、小さな分子はそこを通る。", "膜上有小孔，細小分子可從中通過。"),
        right: L("Small non-polar molecules dissolve in and pass between the hydrophobic tails. Ions and polar molecules, even small ones, are blocked and need proteins.", "小さな無極性分子は疎水性の尾部の間に溶け込んで通る。イオンや極性分子は小さくても阻まれ、タンパク質が必要である。", "細小的非極性分子溶入並穿過疏水尾部之間；離子和極性分子即使很小也被阻擋，需要蛋白質。") },
      { wrong: L("Facilitated diffusion is a type of active transport.", "促進拡散は能動輸送の一種である。", "易化擴散是主動運輸的一種。"),
        right: L("Facilitated diffusion is passive: it goes down the gradient and needs no ATP.", "促進拡散は受動的で、勾配に従い ATP は不要である。", "易化擴散是被動的：順梯度進行，不需 ATP。") },
      { wrong: L("In osmosis the solute pulls water across the membrane.", "浸透では、溶質が水を膜の向こうへ引っ張る。", "滲透時，溶質把水「拉」過膜。"),
        right: L("Water moves randomly both ways. The net movement is towards the higher solute concentration because the membrane stops the solute and fewer water molecules reach the membrane from that side.", "水はランダムに両方向へ動く。膜が溶質を通さず、溶質濃度の高い側から膜に達する水分子が少ないため、正味は高濃度側へ動く。", "水向兩個方向隨機移動。由於膜不讓溶質通過，且溶質濃度較高一側到達膜的水分子較少，所以淨移動是朝向高溶質濃度。") },
      { wrong: L("Active transport always moves substances out of cells.", "能動輸送は常に物質を細胞外へ出す。", "主動運輸總是把物質運出細胞。"),
        right: L("Active transport can go in either direction. It is defined by using ATP (directly or indirectly) and being able to move particles against their gradient.", "能動輸送はどちら向きにもなる。ATP を (直接または間接に) 使い、勾配に逆らえることが特徴である。", "主動運輸可朝任一方向進行；其特點是 (直接或間接) 使用能量，並能逆梯度運送粒子。") },
      { wrong: L("Cholesterol makes membranes more fluid.", "コレステロールは膜をより流動的にする。", "膽固醇令膜更流動。"),
        right: L("Cholesterol is a modulator: it reduces fluidity at high temperature and prevents stiffening at low temperature.", "コレステロールは調節因子で、高温では流動性を下げ、低温では硬くなるのを防ぐ。", "膽固醇是調節者：高溫時降低流動性，低溫時防止變硬。") }
    ],
    beyondSyllabus: [
      L("Not needed for this subtopic: water potential, solute potential and pressure potential (ψw = ψs + ψp). These are taught in D2.3 (Water potential, AHL part). Here, explain osmosis with solute concentration and random movement.",
        "この小テーマでは不要: 水ポテンシャル・溶質ポテンシャル・圧ポテンシャル (ψw = ψs + ψp)。これらは D2.3 (水ポテンシャル, AHL の部分) で学ぶ。ここでは浸透を溶質濃度とランダムな運動で説明する。",
        "此子課題不需要：水勢、溶質勢和壓力勢 (ψw = ψs + ψp)。這些會在 D2.3 (水勢，AHL 部分) 學習。這裏以溶質濃度和隨機運動解釋滲透即可。"),
      L("Not needed for this subtopic: the terms hypotonic, hypertonic and isotonic, and their effects on cells (bursting, crenation, turgor, plasmolysis). These are taught in D2.3 (Water potential, SL and HL), where you must use them.",
        "この小テーマでは不要: 低張 (hypotonic)・高張 (hypertonic)・等張 (isotonic) という用語と、細胞への影響 (破裂、収縮、膨圧、原形質分離)。これらは D2.3 (水ポテンシャル, SL・HL 共通) で学び、そこでは使えなければならない。",
        "此子課題不需要：低滲 (hypotonic)、高滲 (hypertonic)、等滲 (isotonic) 等詞及其對細胞的影響 (脹破、皺縮、膨壓、質壁分離)。這些會在 D2.3 (水勢，SL 及 HL) 學習，屆時必須使用。"),
      L("You do not need carrier proteins for facilitated diffusion (for example the GLUT glucose transporters) or the terms uniport, symport and antiport. Glucose really does cross many membranes by facilitated diffusion through carriers, but the guide only asks for channel proteins (B2.1.6) and, at HL, the sodium–potassium pump and the sodium-dependent glucose cotransporter.",
        "促進拡散の輸送体 (キャリア) タンパク質 (例: グルコース輸送体 GLUT) や、ユニポート・シンポート・アンチポートという用語は必要ない。実際にはグルコースは多くの膜をキャリアによる促進拡散で通るが、ガイドが求めるのはチャネルタンパク質 (B2.1.6) と、HL ではナトリウム・カリウムポンプとナトリウム依存性グルコース共輸送体だけである。",
        "你不需要認識易化擴散的載體蛋白 (例如葡萄糖運輸體 GLUT)，或單向、同向、反向運輸 (uniport、symport、antiport) 等術語。葡萄糖其實經載體以易化擴散穿過很多膜，但課程指引只要求通道蛋白 (B2.1.6)，HL 則只要求鈉鉀泵和鈉依賴性葡萄糖協同運輸體。"),
      L("You do not need the step-by-step cycle of the sodium–potassium pump (phosphorylation and shape changes) or to calculate a membrane potential with the Nernst equation. Resting and action potentials in neurons are taught in C2.2 (Neural signalling).",
        "ナトリウム・カリウムポンプの段階的なサイクル (リン酸化と形の変化) や、ネルンストの式による膜電位の計算は必要ない。ニューロンの静止電位と活動電位は C2.2 (神経による情報伝達) で学ぶ。",
        "你不需要認識鈉鉀泵的逐步循環 (磷酸化及形狀改變)，亦不需要用能斯特方程 (Nernst equation) 計算膜電位。神經元的靜息電位和動作電位會在 C2.2 (神經訊號傳遞) 學習。"),
      L("You do not need detailed knowledge of the different cell-adhesion molecules or cell junctions (the guide says so). You only need the term CAM and the idea that different forms suit different junctions.",
        "個々の細胞接着分子や細胞間結合の詳しい知識は必要ない (ガイドにそう書かれている)。CAM という語と、結合の種類ごとに異なる形があるという考えがあればよい。",
        "你不需要詳細認識不同的細胞黏附分子或細胞間連接 (課程指引已明確指出)。只需認識 CAM 一詞，以及不同形式適用於不同連接這個概念。"),
      L("You do not need lipid rafts or the detailed chemistry of how membrane proteins are inserted into the bilayer.",
        "脂質ラフトや、膜タンパク質が二重層に挿入される仕組みの詳しい化学は必要ない。",
        "你不需要認識脂質筏 (lipid rafts)，或膜蛋白插入雙層的詳細化學機制。")
    ],
    links: [
      { to: "B1.1", why: L("Phospholipid structure, amphipathic molecules, steroids and glycoproteins underpin membrane structure.", "リン脂質の構造、両親媒性分子、ステロイド、糖タンパク質が膜構造の基礎になる。", "磷脂結構、兩親性分子、類固醇和糖蛋白是膜結構的基礎。") },
      { to: "B1.2", why: L("Integral and peripheral proteins, channels and pumps are proteins: their shape (structure) decides their function and specificity.", "内在性・表在性タンパク質、チャネル、ポンプはタンパク質で、その形 (構造) が機能と特異性を決める。", "整合蛋白、周邊蛋白、通道和泵都是蛋白質，其形狀 (結構) 決定功能及特異性。") },
      { to: "B2.2", why: L("Vesicles, the Golgi apparatus and organelle membranes all use the membrane properties learned here.", "小胞、ゴルジ体、細胞小器官の膜は、ここで学んだ膜の性質を使っている。", "囊泡、高爾基體和細胞器的膜都運用了這裏所學的膜性質。") },
      { to: "B3.2", why: L("Active transport and osmosis underlie transport in plants and uptake by roots.", "浸透と能動輸送は、根での吸収など植物の輸送で使われる。", "滲透和主動運輸應用於植物的運輸，例如根部的吸收。") },
      { to: "A2.2", why: L("The plasma membrane is a feature of every cell; compare with prokaryotes and eukaryotes.", "細胞膜はあらゆる細胞に共通の特徴で、原核細胞と真核細胞を比べるときに関わる。", "質膜是所有細胞的共有特徵，可與原核及真核細胞比較。") }
    ],
    questions: [
      {
        id: "b2-1-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B2.1.3", paper: "1A",
        stem: L("Which feature allows oxygen to cross a membrane by simple diffusion?", "酸素が単純拡散で膜を通れるのは、どの特徴によるか。", "氧能以簡單擴散穿過膜，是因為哪項特徵？"),
        options: [
          L("It is small and non-polar, so it passes between the phospholipids.", "小さく無極性なので、リン脂質の間を通れる。", "它細小而且非極性，所以可穿過磷脂之間。"),
          L("It is carried by a specific channel protein.", "特定のチャネルタンパク質で運ばれる。", "由特定通道蛋白運送。"),
          L("It is hydrophilic, so it dissolves in the phosphate heads.", "親水性なので、リン酸の頭部に溶ける。", "它是親水的，所以溶於磷酸頭部。"),
          L("It is pumped in using ATP.", "ATP を使ってポンプで運ばれる。", "利用 ATP 被泵入。")],
        answer: 0,
        explanation: L("Oxygen is a small non-polar molecule, so it dissolves in the hydrophobic core and diffuses down its gradient with no protein or ATP. Options B and D are wrong because no protein or energy is needed; C is wrong because oxygen is not hydrophilic.", "酸素は小さな無極性分子なので、疎水性の中心部に溶け、タンパク質もATPも使わず濃度勾配に従って拡散する。BとDはタンパク質もエネルギーも不要なので誤り。Cは酸素が親水性ではないので誤り。", "氧是細小的非極性分子，可溶入疏水核心，無需蛋白質或 ATP 即順梯度擴散。B 和 D 錯誤，因為不需要蛋白質或能量；C 錯誤，因為氧不是親水的。")
      },
      {
        id: "b2-1-q02", type: "mcq", ahl: false, difficulty: 2, ref: "B2.1.5", paper: "1A",
        stem: L("A bag made of a membrane that is permeable to water but not to sucrose contains 0.1 mol dm⁻³ sucrose solution. It is placed in 0.3 mol dm⁻³ sucrose solution. What is the net movement?", "水は通すがスクロースは通さない膜でできた袋に、0.1 mol dm⁻³ のスクロース溶液が入っている。これを 0.3 mol dm⁻³ のスクロース溶液に入れた。正味の移動はどうなるか。", "一個由膜製成的袋，膜容許水通過但不容許蔗糖通過，袋內有 0.1 mol dm⁻³ 蔗糖溶液。把它放入 0.3 mol dm⁻³ 蔗糖溶液中。淨移動是甚麼？"),
        options: [
          L("Water moves out of the bag.", "水が袋の外へ出る。", "水移出袋外。"),
          L("Water moves into the bag.", "水が袋の中へ入る。", "水移入袋內。"),
          L("Sucrose moves into the bag.", "スクロースが袋の中へ入る。", "蔗糖移入袋內。"),
          L("There is no net movement of anything.", "何も正味では移動しない。", "沒有任何東西淨移動。")],
        answer: 0,
        explanation: L("The outside has the higher solute concentration, so the net movement of water is out of the bag. Option B reverses the direction. Option C is wrong because the membrane is impermeable to sucrose.", "外側の溶質濃度が高いので、水の正味の移動は袋の外へ向かう。Bは向きが逆。Cは膜がスクロースを通さないので誤り。", "袋外溶質濃度較高，所以水的淨移動是移出袋外。B 方向相反；C 錯誤，因為膜不讓蔗糖通過。")
      },
      {
        id: "b2-1-q03", type: "short", ahl: false, difficulty: 2, ref: "B2.1.5", paper: "1B",
        commandTerm: "Deduce", marks: 4,
        data: L(
          `<table><tr><th>NaCl concentration (mol dm⁻³)</th><th>0.0</th><th>0.1</th><th>0.2</th><th>0.3</th><th>0.4</th><th>0.5</th></tr><tr><th>Change in mass of potato cylinder (%)</th><td>+12</td><td>+7</td><td>+2</td><td>−3</td><td>−8</td><td>−12</td></tr></table><p><em>(illustrative data)</em></p>`,
          `<table><tr><th>NaCl 濃度 (mol dm⁻³)</th><th>0.0</th><th>0.1</th><th>0.2</th><th>0.3</th><th>0.4</th><th>0.5</th></tr><tr><th>ジャガイモ円柱の質量変化 (%)</th><td>+12</td><td>+7</td><td>+2</td><td>−3</td><td>−8</td><td>−12</td></tr></table><p><em>(説明用のデータ)</em></p>`,
          `<table><tr><th>NaCl 濃度 (mol dm⁻³)</th><th>0.0</th><th>0.1</th><th>0.2</th><th>0.3</th><th>0.4</th><th>0.5</th></tr><tr><th>馬鈴薯柱質量變化 (%)</th><td>+12</td><td>+7</td><td>+2</td><td>−3</td><td>−8</td><td>−12</td></tr></table><p><em>(示範數據)</em></p>`),
        stem: L("Potato cylinders were left in NaCl solutions of different concentrations and their mass change was measured. (a) Deduce the NaCl concentration at which there is no net water movement. [1] (b) Explain why the mass decreased in 0.5 mol dm⁻³ NaCl. [3]", "ジャガイモの円柱をさまざまな濃度の NaCl 溶液に入れ、質量の変化を測定した。(a) 水の正味の移動がない NaCl 濃度を推定せよ。[1] (b) 0.5 mol dm⁻³ の NaCl で質量が減った理由を説明せよ。[3]", "把馬鈴薯柱放入不同濃度的 NaCl 溶液中，量度其質量變化。(a) 推斷沒有水淨移動時的 NaCl 濃度。[1] (b) 解釋為何在 0.5 mol dm⁻³ NaCl 中質量下降。[3]"),
        markscheme: [
          L("(a) About 0.24 mol dm⁻³ (accept 0.22–0.26): where the line crosses 0 % change (between 0.2 and 0.3).", "(a) 約 0.24 mol dm⁻³ (0.22–0.26 可): 変化が 0 % になる点 (0.2 と 0.3 の間)。", "(a) 約 0.24 mol dm⁻³ (接受 0.22–0.26)：質量變化為 0 % 之處 (介乎 0.2 和 0.3 之間)。"),
          L("(b) The solute concentration outside the potato was higher than inside the cells.", "(b) ジャガイモの外側の溶質濃度が、細胞内より高かった。", "(b) 馬鈴薯外的溶質濃度高於細胞內。"),
          L("Water molecules moved randomly in both directions but more moved out of the cells than in, so there was net movement of water out by osmosis.", "水分子は両方向にランダムに動いたが、入るより出る方が多く、浸透により水が正味で外へ移動した。", "水分子向兩個方向隨機移動，但移出細胞的比移入的多，所以水經滲透淨移出。"),
          L("The membrane is impermeable to the solute (Na⁺ and Cl⁻), so the loss of water reduced the mass.", "膜は溶質 (Na⁺ と Cl⁻) を通さないので、水が失われて質量が減った。", "膜不讓溶質 (Na⁺ 和 Cl⁻) 通過，所以失去水令質量下降。")
        ],
        modelAnswer: L("(a) 0.24 mol dm⁻³. (b) The NaCl solution had a higher solute concentration than the cells. More water molecules left the cells than entered, a net movement by osmosis, while the solute could not cross the membrane, so the potato lost mass.", "(a) 0.24 mol dm⁻³。(b) NaCl 溶液の溶質濃度は細胞より高かった。細胞に入る水より出る水が多く、浸透による正味の移動が起こり、溶質は膜を通れないので、ジャガイモの質量が減った。", "(a) 0.24 mol dm⁻³。(b) NaCl 溶液的溶質濃度高於細胞，移出細胞的水分子多於移入的，經滲透淨移出，而溶質不能穿過膜，所以馬鈴薯質量下降。")
      },
      {
        id: "b2-1-q04", type: "mcq", ahl: false, difficulty: 2, ref: "B2.1.6", paper: "1A",
        stem: L("A potassium channel lets K⁺ through but not Na⁺, although Na⁺ is the smaller ion. What is the best explanation?", "カリウムチャネルは K⁺ を通すが Na⁺ は通さない。Na⁺ の方が小さいイオンである。最もよい説明はどれか。", "鉀通道讓 K⁺ 通過但不讓 Na⁺ 通過，儘管 Na⁺ 是較小的離子。最佳解釋是甚麼？"),
        options: [
          L("The pore is too small for Na⁺.", "孔が Na⁺ には小さすぎる。", "孔道對 Na⁺ 來說太小。"),
          L("The shape and charges lining the pore fit K⁺ specifically.", "孔の形と内壁の電荷が K⁺ に特異的に合う。", "孔道的形狀和內壁電荷特別適合 K⁺。"),
          L("K⁺ is pumped through using ATP.", "K⁺ は ATP を使ってポンプで通される。", "K⁺ 利用 ATP 被泵過去。"),
          L("Na⁺ is non-polar and dissolves in the bilayer instead.", "Na⁺ は無極性で、代わりに二重層に溶ける。", "Na⁺ 是非極性，改為溶於雙層。")],
        answer: 1,
        explanation: L("Channels are selective because the structure of the pore (shape and charge) suits one type of ion. Option A is the tempting size explanation, but Na⁺ is smaller. C is wrong because channels are passive. D is wrong because ions are charged and cannot dissolve in the hydrophobic core.", "チャネルが選択的なのは、孔の構造 (形と電荷) が特定の1種のイオンに合うからである。Aは大きさによる紛らわしい説明だが Na⁺ の方が小さい。Cはチャネルが受動的なので誤り。Dはイオンが電荷をもち疎水性の中心部に溶けないので誤り。", "通道有選擇性，是因為孔道結構 (形狀和電荷) 適合某一種離子。A 是常見的大小解釋，但 Na⁺ 較小；C 錯誤，因為通道是被動的；D 錯誤，因為離子帶電荷，不能溶於疏水核心。")
      },
      {
        id: "b2-1-q05", type: "mcq", ahl: false, difficulty: 2, ref: "B2.1.7", paper: "1A",
        stem: L("Cells in a tissue take up a mineral ion until the concentration inside is higher than outside. Uptake stops when respiration is blocked. What does this show?", "ある組織の細胞が、内側の濃度が外側より高くなるまで鉱物イオンを取り込む。呼吸を阻害すると取り込みが止まる。これは何を示すか。", "某組織的細胞吸收一種礦物離子，直至細胞內濃度高於細胞外。當呼吸被阻斷時，吸收便停止。這顯示甚麼？"),
        options: [
          L("The ion enters by simple diffusion.", "イオンは単純拡散で入る。", "該離子以簡單擴散進入。"),
          L("The ion enters by facilitated diffusion through channels.", "イオンはチャネルを通る促進拡散で入る。", "該離子經通道以易化擴散進入。"),
          L("The ion enters by active transport using ATP.", "イオンは ATP を使う能動輸送で入る。", "該離子以使用 ATP 的主動運輸進入。"),
          L("The ion enters by osmosis.", "イオンは浸透で入る。", "該離子經滲透進入。")],
        answer: 2,
        explanation: L("Movement against the gradient, which stops when ATP production stops, is active transport. Diffusion (simple or facilitated) only goes down the gradient. Osmosis is the movement of water, not ions.", "勾配に逆らい、ATP 産生が止まると止まる移動は能動輸送である。拡散 (単純・促進) は勾配に従う動きだけである。浸透は水の移動でイオンではない。", "逆梯度移動且在 ATP 製造停止時停止，是主動運輸。擴散 (簡單或易化) 只會順梯度進行；滲透是水的移動，不是離子。")
      },
      {
        id: "b2-1-q06", type: "match", ahl: false, difficulty: 1, ref: "B2.1.8", paper: "1A",
        stem: L("Match each transport process with its description.", "各輸送過程とその説明を対応させよ。", "把每種運輸過程與其描述配對。"),
        pairs: [
          { left: L("Simple diffusion", "単純拡散", "簡單擴散"), right: L("Small non-polar molecules pass between phospholipids down a gradient, no protein", "小さな無極性分子がタンパク質なしで勾配に従いリン脂質の間を通る", "細小非極性分子順梯度穿過磷脂之間，不需蛋白質") },
          { left: L("Facilitated diffusion", "促進拡散", "易化擴散"), right: L("Ions pass down a gradient through a channel protein, no ATP", "イオンがチャネルタンパク質を通って勾配に従い移動し、ATP は不要", "離子經通道蛋白順梯度移動，不需 ATP") },
          { left: L("Active transport", "能動輸送", "主動運輸"), right: L("A pump uses ATP to move particles, even against a gradient", "ポンプが ATP を使い、勾配に逆らっても粒子を運ぶ", "泵利用 ATP 運送粒子，甚至可逆梯度") },
          { left: L("Osmosis", "浸透", "滲透"), right: L("Net movement of water towards the higher solute concentration", "水が溶質濃度の高い側へ正味で移動する", "水淨移向溶質濃度較高的一側") }
        ],
        explanation: L("Each process is defined by whether a protein is used, whether ATP is needed and which direction the net movement goes.", "各過程は、タンパク質を使うか、ATP が必要か、正味の移動がどちら向きか、で区別される。", "各過程由是否使用蛋白質、是否需要 ATP 及淨移動方向來區分。")
      },
      {
        id: "b2-1-q07", type: "short", ahl: false, difficulty: 2, ref: "B2.1.8", paper: "2",
        commandTerm: "Distinguish", marks: 3,
        stem: L("Distinguish between simple diffusion and facilitated diffusion across a membrane.", "膜を横切る単純拡散と促進拡散の違いを明確にせよ。", "分辨膜上的簡單擴散與易化擴散。"),
        markscheme: [
          L("Simple diffusion happens directly through the phospholipid bilayer, whereas facilitated diffusion uses a channel protein.", "単純拡散は二重層を直接通るが、促進拡散はチャネルタンパク質を使う。", "簡單擴散直接穿過磷脂雙層；易化擴散則經通道蛋白。"),
          L("Simple diffusion is for small non-polar molecules (e.g. O₂, CO₂); facilitated diffusion is for ions / polar molecules.", "単純拡散は小さな無極性分子 (O₂、CO₂ など)、促進拡散はイオン・極性分子に対して起こる。", "簡單擴散適用於細小非極性分子 (如 O₂、CO₂)；易化擴散適用於離子／極性分子。"),
          L("Simple diffusion is not selective (depends only on size and polarity); facilitated diffusion is selective because each channel is specific (and can be opened or closed).", "単純拡散は選択的でない (大きさと極性だけで決まる) が、促進拡散はチャネルごとに特異的なので選択的 (開閉もできる)。", "簡單擴散沒有選擇性 (只取決於大小和極性)；易化擴散有選擇性，因每種通道各有特異性 (並可開關)。")
        ],
        modelAnswer: L("Simple diffusion takes small non-polar molecules such as oxygen directly between the phospholipids and is not selective. Facilitated diffusion moves ions or polar molecules through a specific channel protein, so it is selective and can be controlled by opening or closing the channel.", "単純拡散は酸素のような小さな無極性分子がリン脂質の間を直接通り、選択性がない。促進拡散はイオンや極性分子が特異的なチャネルタンパク質を通るので選択的で、チャネルの開閉で調節できる。", "簡單擴散令氧等細小非極性分子直接穿過磷脂之間，沒有選擇性；易化擴散令離子或極性分子經特定通道蛋白通過，所以有選擇性，並可藉通道開關控制。")
      },
      {
        id: "b2-1-q08", type: "short", ahl: false, difficulty: 1, ref: "B2.1.4", paper: "2",
        commandTerm: "Distinguish", marks: 2,
        stem: L("Distinguish between integral and peripheral proteins in a membrane.", "膜の内在性タンパク質と表在性タンパク質の違いを明確にせよ。", "分辨膜中的整合蛋白與周邊蛋白。"),
        markscheme: [
          L("Integral proteins are embedded in one or both layers of the bilayer (some span it).", "内在性タンパク質は二重層の片方または両方の層に埋め込まれている (貫くものもある)。", "整合蛋白嵌入雙層的一層或兩層 (有些貫穿整個膜)。"),
          L("Peripheral proteins are attached to one surface of the bilayer (not embedded in the hydrophobic core).", "表在性タンパク質は二重層の一方の表面に付着している (疎水性の中心部には入らない)。", "周邊蛋白附於雙層其中一面表面 (不嵌入疏水核心)。")
        ],
        modelAnswer: L("Integral proteins are embedded in the lipid layers, sometimes across both; peripheral proteins are attached to one surface of the bilayer.", "内在性タンパク質は脂質の層に埋め込まれ、両方の層を貫くこともある。表在性タンパク質は二重層の一方の表面に付着している。", "整合蛋白嵌入脂質層，有時貫穿兩層；周邊蛋白附於雙層的一面表面。")
      },
      {
        id: "b2-1-q09", type: "short", ahl: false, difficulty: 2, ref: "B2.1.10", paper: "2",
        commandTerm: "Describe", marks: 4,
        stem: L("Describe the fluid mosaic model of membrane structure.", "膜構造の流動モザイクモデルを説明せよ。", "描述膜結構的流動鑲嵌模型。"),
        markscheme: [
          L("Phospholipids form a bilayer with hydrophilic heads facing outwards (towards water) and hydrophobic tails facing inwards.", "リン脂質が二重層をつくり、親水性の頭部は外側 (水側)、疎水性の尾部は内側を向く。", "磷脂形成雙層，親水頭部向外 (朝向水)，疏水尾部向內。"),
          L("The bilayer is fluid: phospholipids can move sideways.", "二重層は流動的で、リン脂質は横方向に動ける。", "雙層具流動性：磷脂可橫向移動。"),
          L("Proteins are scattered through the bilayer like a mosaic: integral proteins embedded, peripheral proteins on the surface.", "タンパク質がモザイク状に散らばる。内在性は埋め込まれ、表在性は表面にある。", "蛋白質如鑲嵌般散布於雙層：整合蛋白嵌入，周邊蛋白在表面。"),
          L("Other components: cholesterol among the phospholipids; glycoproteins/glycolipids with carbohydrate chains on the outer surface.", "他の成分: リン脂質の間にコレステロール。外側の表面に糖鎖をもつ糖タンパク質・糖脂質。", "其他成分：磷脂之間的膽固醇；外表面帶糖鏈的糖蛋白／糖脂。")
        ],
        modelAnswer: L("The membrane is a fluid phospholipid bilayer, with hydrophilic heads outwards and hydrophobic tails inwards, in which the phospholipids can move sideways. Integral proteins are embedded and peripheral proteins sit on the surface, forming a mosaic. Cholesterol lies among the phospholipids and glycoproteins and glycolipids have carbohydrate on the outer surface.", "膜は流動的なリン脂質二重層で、親水性の頭部が外側、疎水性の尾部が内側にあり、リン脂質は横に動ける。内在性タンパク質は埋め込まれ、表在性タンパク質は表面にあってモザイクをつくる。コレステロールはリン脂質の間にあり、糖タンパク質・糖脂質は外側の表面に糖鎖をもつ。", "膜是流動的磷脂雙層，親水頭部向外、疏水尾部向內，磷脂可橫向移動。整合蛋白嵌入，周邊蛋白在表面，形成鑲嵌圖案；膽固醇在磷脂之間，糖蛋白和糖脂的糖鏈在外表面。")
      },
      {
        id: "b2-1-q10", type: "mcq", ahl: false, difficulty: 2, ref: "B2.1.9", paper: "1A",
        stem: L("Where are the carbohydrate chains of glycoproteins found, and what is one role?", "糖タンパク質の糖鎖はどこにあり、役割の1つは何か。", "糖蛋白的糖鏈位於何處？其中一個作用是甚麼？"),
        options: [
          L("On the extracellular surface; cell recognition", "細胞外側の表面; 細胞の認識", "細胞外表面；細胞識別"),
          L("On the cytoplasmic surface; cell recognition", "細胞質側の表面; 細胞の認識", "細胞質一面；細胞識別"),
          L("In the middle of the bilayer; passage of ions", "二重層の中央; イオンの通過", "雙層中央；離子通過"),
          L("On the extracellular surface; active transport using ATP", "細胞外側の表面; ATP を使う能動輸送", "細胞外表面；使用 ATP 的主動運輸")],
        answer: 0,
        explanation: L("The carbohydrate part always faces the outside of the cell and acts in cell adhesion and recognition. B has the wrong side; C and D give roles that belong to channels and pumps.", "糖鎖は常に細胞の外側を向き、細胞接着と認識に働く。Bは側が違う。CとDはチャネルやポンプの役割である。", "糖鏈部分永遠朝向細胞外面，作用於細胞黏附和識別。B 的一面錯誤；C 和 D 描述的是通道和泵的作用。")
      },
      {
        id: "b2-1-q11", type: "multi", ahl: false, difficulty: 2, ref: "B2.1.8", paper: "1A",
        stem: L("Which factors determine whether a particle can cross a membrane by simple diffusion? Select all that apply.", "粒子が単純拡散で膜を通れるかどうかを決めるのはどれか。当てはまるものをすべて選べ。", "哪些因素決定粒子能否以簡單擴散穿過膜？選出所有適用項目。"),
        options: [
          L("The size of the particle", "粒子の大きさ", "粒子的大小"),
          L("Whether the particle is hydrophobic or hydrophilic", "粒子が疎水性か親水性か", "粒子是疏水還是親水"),
          L("Whether a specific channel protein is present", "特定のチャネルタンパク質があるか", "有沒有特定通道蛋白"),
          L("Whether ATP is available", "ATP が利用できるか", "有沒有 ATP")],
        answer: [0, 1],
        explanation: L("Simple diffusion is not selective: only size and hydrophobic/hydrophilic character matter. Channel proteins and ATP are needed for facilitated diffusion and active transport, not for simple diffusion.", "単純拡散は選択的でなく、大きさと疎水性・親水性だけが関係する。チャネルとATPは促進拡散と能動輸送に必要で、単純拡散には不要。", "簡單擴散沒有選擇性，只有大小和疏水／親水性質有關。通道蛋白和 ATP 是易化擴散和主動運輸才需要的，簡單擴散不需要。")
      },
      {
        id: "b2-1-q12", type: "short", ahl: false, difficulty: 3, ref: "B2.1.7", paper: "1B",
        commandTerm: "Explain", marks: 5,
        data: L(
          `<p>Root cells were placed in a solution containing a mineral ion at a constant 2.0 mmol dm⁻³. The concentration of the ion inside the cells was measured, with and without a respiration inhibitor.</p><table><tr><th>Time (min)</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th><th>60</th></tr><tr><th>Inside, no inhibitor (mmol dm⁻³)</th><td>0.5</td><td>1.8</td><td>3.1</td><td>4.4</td><td>5.6</td><td>7.5</td></tr><tr><th>Inside, with inhibitor (mmol dm⁻³)</th><td>0.5</td><td>1.2</td><td>1.8</td><td>2.0</td><td>2.0</td><td>2.0</td></tr></table><p><em>(illustrative data)</em></p>`,
          `<p>根の細胞を、鉱物イオンが 2.0 mmol dm⁻³ で一定の溶液に入れた。呼吸阻害剤ありとなしで、細胞内のイオン濃度を測定した。</p><table><tr><th>時間 (分)</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th><th>60</th></tr><tr><th>内側・阻害剤なし (mmol dm⁻³)</th><td>0.5</td><td>1.8</td><td>3.1</td><td>4.4</td><td>5.6</td><td>7.5</td></tr><tr><th>内側・阻害剤あり (mmol dm⁻³)</th><td>0.5</td><td>1.2</td><td>1.8</td><td>2.0</td><td>2.0</td><td>2.0</td></tr></table><p><em>(説明用のデータ)</em></p>`,
          `<p>把根細胞放入一種礦物離子濃度恆定為 2.0 mmol dm⁻³ 的溶液中，分別在有及沒有呼吸抑制劑的情況下量度細胞內該離子的濃度。</p><table><tr><th>時間 (分鐘)</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th><th>60</th></tr><tr><th>細胞內，沒有抑制劑 (mmol dm⁻³)</th><td>0.5</td><td>1.8</td><td>3.1</td><td>4.4</td><td>5.6</td><td>7.5</td></tr><tr><th>細胞內，有抑制劑 (mmol dm⁻³)</th><td>0.5</td><td>1.2</td><td>1.8</td><td>2.0</td><td>2.0</td><td>2.0</td></tr></table><p><em>(示範數據)</em></p>`),
        stem: L("Explain what the data show about how the ion enters the root cells. [5]", "データから、このイオンが根の細胞にどのように入るかについて何が分かるか説明せよ。[5]", "解釋數據顯示該離子如何進入根細胞。[5]"),
        markscheme: [
          L("Without the inhibitor, the internal concentration rises above the external concentration (2.0), e.g. 7.5 at 60 min.", "阻害剤なしでは、内側の濃度が外側 (2.0) を超えて上昇する (例: 60分で 7.5)。", "沒有抑制劑時，細胞內濃度升至高於細胞外 (2.0)，例如 60 分鐘時為 7.5。"),
          L("So the ion moves against its concentration gradient, which diffusion cannot do (diffusion only goes down a gradient).", "つまりイオンは濃度勾配に逆らって動いており、拡散ではこれはできない (拡散は勾配に従うだけ)。", "所以離子是逆濃度梯度移動，而擴散不能做到 (擴散只能順梯度)。"),
          L("With the inhibitor, the concentration levels off at 2.0, equal to the outside, so only diffusion (down the gradient) is occurring.", "阻害剤ありでは、濃度は外側と等しい 2.0 で頭打ちになり、拡散 (勾配に従う) だけが起こっている。", "有抑制劑時，濃度在 2.0 持平，與細胞外相等，所以只有擴散 (順梯度) 在發生。"),
          L("The inhibitor stops respiration, so less ATP is made, which shows that the uptake needs ATP / energy.", "阻害剤が呼吸を止めて ATP の産生が減るので、取り込みには ATP (エネルギー) が必要と分かる。", "抑制劑停止呼吸，ATP 製造減少，顯示吸收需要 ATP／能量。"),
          L("Therefore the ion enters by active transport, using pump proteins.", "したがってイオンは、ポンプタンパク質による能動輸送で入る。", "因此離子是經泵蛋白以主動運輸進入。")
        ],
        modelAnswer: L("Without the inhibitor the ion concentration inside rises above the outside concentration of 2.0, so the ion is moving against its gradient, which diffusion cannot do. With the inhibitor, respiration and so ATP production are reduced, and the concentration stops rising at 2.0, so only diffusion happens. This shows the ion enters by active transport using pump proteins and ATP.", "阻害剤なしでは内側の濃度が外側の 2.0 を超えるので、イオンは勾配に逆らって動いており、拡散ではできない。阻害剤ありでは呼吸が妨げられ ATP 産生が減り、濃度は 2.0 で上昇が止まり、拡散だけが起こる。これは、イオンがポンプタンパク質と ATP を使う能動輸送で入ることを示す。", "沒有抑制劑時，細胞內離子濃度升至高於細胞外的 2.0，所以離子是逆梯度移動，擴散做不到；有抑制劑時，呼吸及 ATP 製造減少，濃度升至 2.0 後不再上升，只有擴散發生。這顯示離子經泵蛋白利用 ATP 以主動運輸進入。")
      },
      {
        id: "b2-1-q13", type: "mcq", ahl: true, difficulty: 2, ref: "B2.1.11", paper: "1A",
        stem: L("Compared with a tropical fish, membranes of a fish living in polar water are likely to contain a higher proportion of which fatty acids, and why?", "熱帯の魚と比べて、極地の水にすむ魚の膜には、どの脂肪酸がより高い割合で含まれると考えられ、その理由は何か。", "與熱帶魚相比，生活在極地水域的魚，其膜中哪類脂肪酸的比例可能較高？原因是甚麼？"),
        options: [
          L("Unsaturated, which keeps the membrane fluid at low temperature", "不飽和脂肪酸。低温でも膜の流動性が保たれる", "不飽和脂肪酸；令膜在低溫下保持流動"),
          L("Saturated, which keeps the membrane fluid at low temperature", "飽和脂肪酸。低温でも膜の流動性が保たれる", "飽和脂肪酸；令膜在低溫下保持流動"),
          L("Saturated, because they have lower melting points", "飽和脂肪酸。融点が低いから", "飽和脂肪酸；因為熔點較低"),
          L("Unsaturated, because they pack closely and make the membrane strong", "不飽和脂肪酸。密に並んで膜を強くするから", "不飽和脂肪酸；因為排列緊密令膜堅固")],
        answer: 0,
        explanation: L("Unsaturated fatty acids have bends and lower melting points, so they keep membranes fluid in the cold. B and C reverse the properties of saturated fatty acids (they have higher melting points and pack closely).", "不飽和脂肪酸は折れ曲がりがあり融点が低いので、寒さの中でも膜が流動的に保たれる。BとCは飽和脂肪酸の性質を逆にしている (融点が高く密に並ぶ)。", "不飽和脂肪酸有彎曲且熔點較低，所以在寒冷中仍令膜保持流動。B 和 C 弄反了飽和脂肪酸的性質 (熔點較高、排列緊密)。")
      },
      {
        id: "b2-1-q14", type: "short", ahl: true, difficulty: 2, ref: "B2.1.12", paper: "2",
        commandTerm: "Explain", marks: 4,
        stem: L("Explain how cholesterol helps to keep the fluidity of an animal cell membrane suitable when the temperature changes.", "温度が変化したとき、コレステロールが動物細胞膜の流動性を適切に保つしくみを説明せよ。", "解釋當溫度改變時，膽固醇如何協助動物細胞膜保持適當的流動性。"),
        markscheme: [
          L("Cholesterol molecules are positioned between phospholipids in the bilayer.", "コレステロール分子は二重層のリン脂質の間に位置する。", "膽固醇分子位於雙層的磷脂之間。"),
          L("At high temperatures it reduces phospholipid movement / holds them in place, stabilizing the membrane (preventing it becoming too fluid).", "高温ではリン脂質の動きを抑え、固定して膜を安定させる (流動的になりすぎるのを防ぐ)。", "高溫時減少磷脂移動／把它們固定，穩定膜 (防止變得太流動)。"),
          L("At low temperatures it prevents phospholipids packing closely together.", "低温ではリン脂質が密に詰まるのを防ぐ。", "低溫時防止磷脂緊密排列。"),
          L("This prevents the membrane stiffening, so cholesterol acts as a modulator of fluidity.", "これにより膜が硬くなるのを防ぐので、コレステロールは流動性の調節因子として働く。", "這防止膜變硬，所以膽固醇是流動性的調節者。")
        ],
        modelAnswer: L("Cholesterol sits between the phospholipids. When it is warm, it restricts their movement and stabilizes the membrane. When it is cold, it stops the tails packing tightly, so the membrane does not stiffen. It therefore modulates fluidity over a range of temperatures.", "コレステロールはリン脂質の間にある。温かいときは動きを制限して膜を安定させ、寒いときは尾部が密に詰まるのを防ぐので膜は硬くならない。このように広い温度範囲で流動性を調節する。", "膽固醇位於磷脂之間。溫度高時限制磷脂移動並穩定膜；溫度低時阻止尾部緊密排列，令膜不致變硬。因此它能在不同溫度下調節流動性。")
      },
      {
        id: "b2-1-q15", type: "mcq", ahl: true, difficulty: 1, ref: "B2.1.13", paper: "1A",
        stem: L("Which is an example of exocytosis?", "エキソサイトーシスの例はどれか。", "以下哪項是胞吐作用的例子？"),
        options: [
          L("A white blood cell engulfing a bacterium", "白血球が細菌を取り込む", "白血球吞入細菌"),
          L("A pancreatic cell releasing insulin from vesicles", "膵臓の細胞が小胞からインスリンを放出する", "胰臟細胞從囊泡釋出胰島素"),
          L("Oxygen entering a cell", "酸素が細胞に入る", "氧進入細胞"),
          L("Water entering a cell through aquaporins", "水がアクアポリンを通って細胞に入る", "水經水通道蛋白進入細胞")],
        answer: 1,
        explanation: L("Insulin is released when vesicles fuse with the plasma membrane. A is endocytosis (phagocytosis); C is simple diffusion; D is osmosis.", "小胞が細胞膜と融合してインスリンが放出される。Aはエンドサイトーシス (食作用)、Cは単純拡散、Dは浸透。", "囊泡與質膜融合而釋出胰島素。A 是胞吞 (吞噬作用)；C 是簡單擴散；D 是滲透。")
      },
      {
        id: "b2-1-q16", type: "order", ahl: true, difficulty: 2, ref: "B2.1.13", paper: "1A",
        stem: L("Put the stages of endocytosis in the correct order.", "エンドサイトーシスの段階を正しい順に並べよ。", "把胞吞作用的步驟按正確次序排列。"),
        items: [
          L("Material outside the cell is next to the plasma membrane.", "細胞外の物質が細胞膜のそばにある。", "細胞外的物質靠近質膜。"),
          L("The plasma membrane folds inwards around the material.", "細胞膜が物質を囲んで内側に陥入する。", "質膜向內凹陷，包圍物質。"),
          L("The edges of the membrane fuse and the vesicle pinches off.", "膜の縁が融合し、小胞がくびれ切れる。", "膜的邊緣融合，囊泡脫離。"),
          L("The vesicle with its contents is inside the cytoplasm.", "内容物を含む小胞が細胞質内にある。", "載有內容物的囊泡位於細胞質內。")],
        explanation: L("The fluid membrane bends in, encloses the material, then fuses closed. The result is a vesicle in the cytoplasm.", "流動的な膜が内側に曲がり、物質を囲み、融合して閉じる。結果として細胞質内に小胞ができる。", "流動的膜向內彎曲、包圍物質，然後融合封閉，結果在細胞質內形成囊泡。")
      },
      {
        id: "b2-1-q17", type: "mcq", ahl: true, difficulty: 3, ref: "B2.1.14", paper: "1A",
        stem: L("Which statement about gated channels in neurons is correct?", "ニューロンのゲート付きチャネルについて正しいのはどれか。", "以下哪項關於神經元門控通道的敍述正確？"),
        options: [
          L("The nicotinic acetylcholine receptor opens when acetylcholine binds, letting positive ions such as Na⁺ in.", "ニコチン性アセチルコリン受容体は、アセチルコリンが結合すると開き、Na⁺ などの陽イオンが流入する。", "菸鹼型乙酰膽鹼受體在乙酰膽鹼結合時打開，讓 Na⁺ 等陽離子流入。"),
          L("Voltage-gated sodium channels open when acetylcholine binds to them.", "電位依存性ナトリウムチャネルは、アセチルコリンが結合すると開く。", "電壓門控鈉通道在乙酰膽鹼與其結合時打開。"),
          L("Gated channels use ATP to push ions against their gradients.", "ゲート付きチャネルは ATP を使ってイオンを勾配に逆らって押し出す。", "門控通道利用 ATP 把離子逆梯度推動。"),
          L("Voltage-gated potassium channels let sodium ions through when closed.", "電位依存性カリウムチャネルは閉じているときにナトリウムイオンを通す。", "電壓門控鉀通道在關閉時讓鈉離子通過。")],
        answer: 0,
        explanation: L("The nicotinic acetylcholine receptor is a neurotransmitter-gated channel. B mixes up the two kinds of gating. C is wrong because channels are passive (facilitated diffusion); D is impossible because closed channels let nothing through and potassium channels are specific to K⁺.", "ニコチン性アセチルコリン受容体は神経伝達物質依存性チャネルである。Bは2種類のゲート制御を混同している。Cはチャネルが受動的 (促進拡散) なので誤り。Dは閉じたチャネルは何も通さず、カリウムチャネルは K⁺ に特異的なのでありえない。", "菸鹼型乙酰膽鹼受體是神經遞質門控通道。B 混淆了兩種門控方式；C 錯誤，因為通道是被動的 (易化擴散)；D 不可能，因為關閉的通道不讓任何物質通過，且鉀通道只對 K⁺ 有特異性。")
      },
      {
        id: "b2-1-q18", type: "short", ahl: true, difficulty: 3, ref: "B2.1.15", paper: "2",
        commandTerm: "Explain", marks: 4,
        stem: L("Explain how sodium–potassium pumps contribute to the membrane potential of a neuron.", "ナトリウム・カリウムポンプがニューロンの膜電位にどう寄与するかを説明せよ。", "解釋鈉鉀泵如何協助形成神經元的膜電位。"),
        markscheme: [
          L("The pump uses ATP (active transport) to move 3 Na⁺ out of the cell and 2 K⁺ into the cell.", "ポンプは ATP を使って (能動輸送) Na⁺ 3個を細胞外へ、K⁺ 2個を細胞内へ運ぶ。", "泵利用 ATP (主動運輸) 把 3 個 Na⁺ 運出細胞，2 個 K⁺ 運入細胞。"),
          L("This moves more positive charge out than in, so the inside of the cell becomes negative compared with the outside.", "入るより多くの正電荷が外へ出るので、細胞の内側は外側に対して負になる。", "運出的正電荷多於運入的，所以細胞內部相對外部帶負電。"),
          L("It creates concentration gradients: Na⁺ high outside / low inside; K⁺ high inside / low outside.", "濃度勾配をつくる: Na⁺ は外側で高く内側で低く、K⁺ は内側で高く外側で低い。", "建立濃度梯度：Na⁺ 外高內低；K⁺ 內高外低。"),
          L("The difference in electrical charge across the membrane is the membrane potential (and the gradients are used when channels open to send signals).", "膜をはさむ電気的な差が膜電位である (勾配はチャネルが開いて信号を送るときに使われる)。", "膜兩側的電荷差別就是膜電位 (這些梯度在通道打開傳送訊號時被利用)。"),
          L("K⁺ diffuses back out through open potassium channels (down the gradient made by the pump), adding to the negative charge inside.", "K⁺ は (ポンプがつくった勾配に従って) 開いたカリウムチャネルから外へ拡散し、内側の負の電荷を強める。", "K⁺ 經開啟的鉀通道 (順泵建立的梯度) 擴散出細胞，令細胞內的負電荷增加。")
        ],
        modelAnswer: L("Each cycle the pump uses ATP to move three Na⁺ out and two K⁺ in. More positive charge leaves than enters, so the inside becomes negative relative to the outside. It also keeps Na⁺ high outside and K⁺ high inside. The charge difference across the membrane is the membrane potential.", "1サイクルごとに ATP を使って Na⁺ 3個を外へ、K⁺ 2個を内へ運ぶ。入るより多くの正電荷が出るので、内側は外側に対して負になる。また Na⁺ は外側で、K⁺ は内側で高く保たれる。膜をはさむ電荷の差が膜電位である。", "每個循環泵利用 ATP 把三個 Na⁺ 運出、兩個 K⁺ 運入。運出的正電荷多於運入的，所以內部相對外部帶負電，同時令 Na⁺ 外高、K⁺ 內高。膜兩側的電荷差別就是膜電位。")
      },
      {
        id: "b2-1-q19", type: "short", ahl: true, difficulty: 3, ref: "B2.1.16", paper: "2",
        commandTerm: "Explain", marks: 4,
        stem: L("Explain how sodium-dependent glucose cotransporters allow cells lining the small intestine to absorb glucose when the glucose concentration inside the cell is higher than in the gut.", "細胞内のグルコース濃度が腸管内より高いときでも、小腸の内壁の細胞がナトリウム依存性グルコース共輸送体によってグルコースを吸収できるしくみを説明せよ。", "解釋當細胞內葡萄糖濃度高於腸腔時，小腸內壁細胞如何利用鈉依賴性葡萄糖協同運輸體吸收葡萄糖。"),
        markscheme: [
          L("Sodium–potassium pumps use ATP to pump Na⁺ out of the cell, making the Na⁺ concentration low inside and high outside.", "ナトリウム・カリウムポンプが ATP を使って Na⁺ を細胞外へ出し、Na⁺ 濃度を内側で低く外側で高くする。", "鈉鉀泵利用 ATP 把 Na⁺ 泵出細胞，令 Na⁺ 內低外高。"),
          L("Na⁺ moves back into the cell down its concentration gradient through the cotransporter.", "Na⁺ は共輸送体を通って濃度勾配に従い細胞内へ戻る。", "Na⁺ 經協同運輸體順濃度梯度流回細胞內。"),
          L("The cotransporter carries glucose in at the same time (glucose and Na⁺ bind together), so glucose is moved against its concentration gradient.", "共輸送体は同時にグルコースも運び込む (グルコースと Na⁺ が一緒に結合する) ので、グルコースは濃度勾配に逆らって運ばれる。", "協同運輸體同時把葡萄糖帶入 (葡萄糖與 Na⁺ 一起結合)，所以葡萄糖是逆濃度梯度被運送。"),
          L("This is indirect active transport: the cotransporter does not use ATP itself; the energy comes from the Na⁺ gradient.", "これは間接的能動輸送で、共輸送体自身は ATP を使わず、エネルギーは Na⁺ の勾配から得る。", "這是間接主動運輸：協同運輸體本身不用 ATP，能量來自 Na⁺ 梯度。")
        ],
        modelAnswer: L("Sodium–potassium pumps use ATP to keep Na⁺ low inside the cell. Na⁺ flows back in down its gradient through the cotransporter, and glucose is carried in with it, even against its own gradient. The cotransporter does not use ATP directly, so this is indirect active transport.", "ナトリウム・カリウムポンプが ATP を使って細胞内の Na⁺ を低く保つ。Na⁺ は共輸送体を通って勾配に従い戻り、グルコースも一緒に、それ自身の勾配に逆らっても運び込まれる。共輸送体は ATP を直接使わないので間接的能動輸送である。", "鈉鉀泵利用 ATP 使細胞內 Na⁺ 保持低濃度。Na⁺ 經協同運輸體順梯度流回，葡萄糖隨之被帶入，即使逆它本身的梯度。協同運輸體不直接使用 ATP，所以是間接主動運輸。")
      },
      {
        id: "b2-1-q20", type: "mcq", ahl: true, difficulty: 1, ref: "B2.1.17", paper: "1A",
        stem: L("What is the function of cell-adhesion molecules (CAMs)?", "細胞接着分子 (CAM) の機能は何か。", "細胞黏附分子 (CAM) 的功能是甚麼？"),
        options: [
          L("They bind cells to neighbouring cells so that tissues form.", "細胞を隣の細胞に結合させ、組織をつくる。", "把細胞與鄰近細胞結合，以形成組織。"),
          L("They pump ions across the plasma membrane using ATP.", "ATP を使ってイオンを細胞膜の反対側へ運ぶ。", "利用 ATP 把離子泵過質膜。"),
          L("They make up the hydrophobic core of the bilayer.", "二重層の疎水性の中心部をつくる。", "組成雙層的疏水核心。"),
          L("They store energy in adipose tissue.", "脂肪組織にエネルギーを貯える。", "在脂肪組織中儲存能量。")],
        answer: 0,
        explanation: L("CAMs are membrane proteins that bind to other cells (or to the material between cells). The other options describe pumps, phospholipid tails and triglycerides.", "CAM は他の細胞 (または細胞間の物質) と結合する膜タンパク質である。他の選択肢はポンプ、リン脂質の尾部、トリグリセリドの説明である。", "CAM 是與其他細胞 (或細胞間物質) 結合的膜蛋白。其他選項描述的是泵、磷脂尾部和甘油三酯。")
      }
    ]
  });
})();
