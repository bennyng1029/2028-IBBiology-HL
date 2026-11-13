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
          `<p>Ions and polar molecules cannot cross the hydrophobic core, but they can cross through <span class="term">channel proteins</span>. A channel protein has a water-filled pore through the membrane. This is called <span class="term">facilitated diffusion</span>: the particles still move <strong>down their concentration gradient</strong> and it needs <strong>no ATP</strong>, but a protein helps.</p>
<p><strong>Why channels make membranes selectively permeable:</strong></p>
<ul><li>The shape and charges lining the pore fit <strong>one specific type of ion</strong> (for example a potassium channel lets K⁺ through but not Na⁺). Other particles do not fit or are not attracted.</li>
<li>A channel can be <strong>open</strong> (ions diffuse through) or <strong>closed</strong> (no ions pass). So the cell can control when transport happens.</li></ul>`,
          `<p>イオンや極性分子は疎水性の中心部を通れないが、<span class="term">チャネルタンパク質 (channel protein)</span> を通って膜を横切れる。チャネルタンパク質には、膜を貫く水で満たされた孔がある。これを<span class="term">促進拡散 (facilitated diffusion)</span> という。粒子は<strong>濃度勾配に従って</strong>動き、<strong>ATPは不要</strong>だが、タンパク質が助ける。</p>
<p><strong>チャネルが膜に選択的透過性を与える理由:</strong></p>
<ul><li>孔の形と内壁の電荷が<strong>特定の1種類のイオン</strong>に合う (例: カリウムチャネルは K⁺ を通すが Na⁺ は通さない)。他の粒子は合わない、または引きつけられない。</li>
<li>チャネルは<strong>開いて</strong> (イオンが拡散して通る) <strong>閉じる</strong> (イオンが通らない) ことができる。そのため細胞は輸送が起こる時を調節できる。</li></ul>`,
          `<p>離子和極性分子不能穿過疏水核心，但可以經<span class="term">通道蛋白 (channel protein)</span> 穿過。通道蛋白有一個貫穿膜、充滿水的孔道。這稱為<span class="term">易化擴散 (facilitated diffusion)</span>：粒子仍然<strong>順濃度梯度</strong>移動，<strong>不需 ATP</strong>，但有蛋白質協助。</p>
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
      /*AHL_START*/
    ],
    /*META_START*/
    questions: [
      /*Q_START*/
    ]
  });
})();
