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
        deeper: {"en":"<p><strong>Why the bilayer assembles by itself.</strong> Water molecules form hydrogen bonds with each other and with the hydrophilic heads, but not with the hydrocarbon tails. Tails exposed to water would disrupt this hydrogen bonding, so the tails are pushed together away from the water while the heads face it. No ATP is needed: assembly is spontaneous. A flat sheet would have exposed edges, so bilayers tend to curl and seal into closed spheres. This is why vesicles form so easily (B2.1.13).</p>\n<table><tr><th>Particle</th><th>Crosses a pure phospholipid bilayer?</th><th>Reason</th></tr>\n<tr><td>O₂, CO₂</td><td>Yes, easily</td><td>Small and non-polar</td></tr>\n<tr><td>Water</td><td>Only slowly</td><td>Small but polar</td></tr>\n<tr><td>Glucose, amino acids</td><td>Almost not at all</td><td>Large and polar</td></tr>\n<tr><td>Na⁺, K⁺, Cl⁻</td><td>Almost not at all</td><td>Charged: repelled by the hydrophobic core</td></tr></table>\n<p><strong>Mark-scheme language:</strong></p>\n<ul><li>Heads are hydrophilic and face the water; tails are hydrophobic and face each other.</li>\n<li>Explain the barrier using polarity or charge: “ions and polar molecules are repelled by the hydrophobic core”. Do not write “the membrane is too thick” or “the holes are too small”.</li>\n<li>“Barrier” means <em>low permeability</em>, not zero permeability.</li></ul>","ja":"<p><strong>2重層がひとりでにできる理由。</strong>水分子は互いに、また親水性の頭部と水素結合をつくるが、炭化水素の尾部とはつくらない。尾部が水に触れると水素結合のつながりが乱れるため、尾部は水から離れて集まり、頭部が水に面する。ATPは不要で、自発的に起こる。平らなシートには露出した端ができるので、2重層は丸まって閉じた球になりやすい。小胞 (vesicle) が簡単にできるのはこのためである (B2.1.13)。</p>\n<table><tr><th>粒子</th><th>リン脂質2重層 (phospholipid bilayer) だけを通れるか</th><th>理由</th></tr>\n<tr><td>O₂、CO₂</td><td>容易に通る</td><td>小さく、非極性</td></tr>\n<tr><td>水</td><td>ゆっくりしか通らない</td><td>小さいが極性がある</td></tr>\n<tr><td>グルコース、アミノ酸</td><td>ほとんど通らない</td><td>大きく、極性がある</td></tr>\n<tr><td>Na⁺、K⁺、Cl⁻</td><td>ほとんど通らない</td><td>電荷をもつ。疎水性の中心部にはじかれる</td></tr></table>\n<p><strong>採点基準 (mark scheme) の言い方:</strong></p>\n<ul><li>頭部は親水性 (hydrophilic) で水に面し、尾部は疎水性 (hydrophobic) で互いに向き合う。</li>\n<li>障壁になる理由は極性か電荷で説明する:「イオンや極性分子は疎水性の中心部にはじかれる」。「膜が厚いから」「孔が小さいから」は不可。</li>\n<li>「障壁 (barrier)」は透過性が<em>低い</em>ことで、ゼロではない。</li></ul>","zh":"<p><strong>雙層為何會自行形成。</strong>水分子之間、以及水與親水頭部之間都能形成氫鍵，但水與烴尾部不能。尾部若接觸水，就會擾亂氫鍵網絡，所以尾部聚在一起遠離水，頭部朝向水。這個過程不需要 ATP，是自發進行的。平坦的薄片會有暴露的邊緣，因此雙層傾向捲曲並封閉成球形。這就是囊泡 (vesicle) 容易形成的原因 (B2.1.13)。</p>\n<table><tr><th>粒子</th><th>能否穿過純磷脂雙層 (phospholipid bilayer)？</th><th>原因</th></tr>\n<tr><td>O₂、CO₂</td><td>容易穿過</td><td>細小且非極性</td></tr>\n<tr><td>水</td><td>只能緩慢穿過</td><td>細小但有極性</td></tr>\n<tr><td>葡萄糖、氨基酸</td><td>幾乎不能穿過</td><td>較大且有極性</td></tr>\n<tr><td>Na⁺、K⁺、Cl⁻</td><td>幾乎不能穿過</td><td>帶電荷，被疏水核心排斥</td></tr></table>\n<p><strong>評分準則 (mark scheme) 的用語：</strong></p>\n<ul><li>頭部是親水 (hydrophilic) 的，朝向水；尾部是疏水 (hydrophobic) 的，互相朝向對方。</li>\n<li>解釋屏障作用時要用極性或電荷：「離子和極性分子被疏水核心排斥」。不要寫「膜太厚」或「孔太小」。</li>\n<li>「屏障 (barrier)」是指透過性<em>低</em>，不是零。</li></ul>"},
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
        deeper: {"en":"<p><strong>What changes the rate of simple diffusion?</strong></p>\n<table><tr><th>Factor</th><th>Effect on rate</th><th>Why</th></tr>\n<tr><td>Steeper concentration gradient</td><td>Faster</td><td>A bigger difference between the number of particles crossing each way</td></tr>\n<tr><td>Higher temperature</td><td>Faster</td><td>Particles move faster</td></tr>\n<tr><td>Larger membrane surface area</td><td>Faster</td><td>More places to cross</td></tr>\n<tr><td>Smaller, more non-polar particle</td><td>Faster</td><td>Passes between the tails more easily</td></tr></table>\n<p><strong>Worked example: oxygen in a muscle cell.</strong> (1) Mitochondria keep using O₂, so the concentration inside stays low. (2) Blood outside has a higher O₂ concentration. (3) Particles cross the membrane randomly in both directions, but more cross inwards, so there is net movement in. (4) The gradient is kept going because the cell keeps using the O₂. If the gradient vanished, particles would still move, but the net movement would be zero.</p>\n<p><strong>Marks are earned by:</strong> “net movement”, “down the concentration gradient”, “directly through the phospholipid bilayer”, “no ATP / passive”. <strong>Marks are lost by:</strong> “particles want to even out” or “O₂ is pulled in”. Also note that diffusion needs no ATP, yet the cell still needs respiration to keep the gradient going.</p>","ja":"<p><strong>単純拡散 (simple diffusion) の速さは何で変わるか。</strong></p>\n<table><tr><th>要因</th><th>速さへの影響</th><th>理由</th></tr>\n<tr><td>濃度勾配 (concentration gradient) が急</td><td>速くなる</td><td>両方向に通る粒子の数の差が大きい</td></tr>\n<tr><td>温度が高い</td><td>速くなる</td><td>粒子の動きが速い</td></tr>\n<tr><td>膜の表面積が大きい</td><td>速くなる</td><td>通れる場所が多い</td></tr>\n<tr><td>粒子が小さく、より非極性</td><td>速くなる</td><td>尾部の間を通りやすい</td></tr></table>\n<p><strong>例: 筋細胞の酸素。</strong>(1) ミトコンドリアがO₂を使い続けるので、細胞内の濃度は低いまま。(2) 外側の血液はO₂濃度が高い。(3) 粒子はランダムに両方向へ通るが、内向きの方が多いので、正味の移動 (net movement) は内向き。(4) 細胞がO₂を使い続けるので勾配が保たれる。勾配がなくなっても粒子は動き続けるが、正味の移動はゼロになる。</p>\n<p><strong>得点になる言葉:</strong>「正味の移動 (net movement)」「濃度勾配に沿って」「リン脂質2重層を直接通る」「ATP不要 (受動的 passive)」。<strong>失点する言い方:</strong>「粒子は均等になりたがる」「O₂が引き込まれる」。拡散にATPは不要だが、勾配を保つために細胞は呼吸を続ける必要がある点にも注意。</p>","zh":"<p><strong>哪些因素會改變簡單擴散 (simple diffusion) 的速率？</strong></p>\n<table><tr><th>因素</th><th>對速率的影響</th><th>原因</th></tr>\n<tr><td>濃度梯度 (concentration gradient) 更陡</td><td>更快</td><td>兩個方向穿過的粒子數目差距更大</td></tr>\n<tr><td>溫度較高</td><td>更快</td><td>粒子運動更快</td></tr>\n<tr><td>膜表面積較大</td><td>更快</td><td>可穿過的位置更多</td></tr>\n<tr><td>粒子較小、非極性較強</td><td>更快</td><td>較易從尾部之間穿過</td></tr></table>\n<p><strong>例子：肌肉細胞中的氧氣。</strong>(1) 線粒體不斷使用 O₂，所以細胞內濃度保持偏低。(2) 外面的血液 O₂ 濃度較高。(3) 粒子隨機地向兩個方向穿過膜，但向內的較多，所以有向內的淨移動 (net movement)。(4) 細胞不斷使用 O₂，梯度因而得以維持。若梯度消失，粒子仍然移動，但淨移動為零。</p>\n<p><strong>可得分的用語：</strong>「淨移動 (net movement)」、「順濃度梯度」、「直接穿過磷脂雙層」、「不需 ATP／被動 (passive)」。<strong>會失分的說法：</strong>「粒子想要平均分佈」、「O₂ 被拉進去」。另外，擴散本身不需要 ATP，但細胞仍需要呼吸作用來維持梯度。</p>"},
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
        deeper: {"en":"<p><strong>Why a transmembrane protein stays in the membrane.</strong> The amino acids of the protein’s R groups decide where it sits (see B1.2). The stretch inside the bilayer has mostly non-polar R groups, which interact with the fatty acid tails. The parts that stick out into the water have polar or charged R groups. In a channel protein, the polar R groups also line the inside of the pore, which is why ions can pass through it.</p>\n<table><tr><th></th><th>Integral protein</th><th>Peripheral protein</th></tr>\n<tr><td>Position</td><td>Embedded in the bilayer; many span both layers</td><td>On one surface only</td></tr>\n<tr><td>Hydrophobic region in the core?</td><td>Yes</td><td>No</td></tr>\n<tr><td>Examples of function</td><td>Channels, pumps, receptors</td><td>Some enzymes; proteins linking the membrane to the cytoskeleton</td></tr></table>\n<p><strong>What earns marks.</strong> “Define” or “distinguish” answers need the position in the membrane <em>and</em> the reason (hydrophobic regions in the core). Give a function for a membrane protein with the structure linked to it, for example “a receptor has a binding site on the outer surface that fits a hormone”.</p>\n<p><strong>Link:</strong> proteins can move sideways within the fluid bilayer, which is part of the fluid mosaic model (B2.1.10).</p>","ja":"<p><strong>膜貫通タンパク質が膜にとどまる理由。</strong>タンパク質のどこがどこに置かれるかは、アミノ酸のR基で決まる (B1.2参照)。2重層の内部にある部分は非極性のR基が多く、脂肪酸の尾部と相互作用する。水の中に出ている部分は極性または電荷をもつR基をもつ。チャネルタンパク質 (channel protein) では、極性のR基が孔の内側にも並ぶので、イオンが通れる。</p>\n<table><tr><th></th><th>内在性タンパク質 (integral protein)</th><th>表在性タンパク質 (peripheral protein)</th></tr>\n<tr><td>位置</td><td>2重層に埋め込まれる。両方の層にまたがるものも多い</td><td>片方の表面のみ</td></tr>\n<tr><td>中心部に疎水性の領域があるか</td><td>ある</td><td>ない</td></tr>\n<tr><td>働きの例</td><td>チャネル、ポンプ、受容体</td><td>一部の酵素、膜と細胞骨格をつなぐタンパク質</td></tr></table>\n<p><strong>得点のポイント。</strong>「定義せよ」「区別せよ」では、膜中の<em>位置</em>と<em>その理由</em> (中心部の疎水性領域) の両方が必要。働きを書くときは構造と結びつける。例:「受容体の外側の結合部位はホルモンに合う形をしている」。</p>\n<p><strong>つながり:</strong>流動的な2重層の中でタンパク質は横方向に動ける。これは流動モザイクモデル (fluid mosaic model) の一部である (B2.1.10)。</p>","zh":"<p><strong>跨膜蛋白質為何留在膜內。</strong>蛋白質各部分的位置由氨基酸的 R 基決定 (見 B1.2)。位於雙層內部的一段，大多是非極性的 R 基，與脂肪酸尾部相互作用；伸入水中的部分則有極性或帶電的 R 基。在通道蛋白 (channel protein) 中，極性 R 基也排列在孔道內側，所以離子能夠通過。</p>\n<table><tr><th></th><th>嵌入蛋白 (integral protein)</th><th>周邊蛋白 (peripheral protein)</th></tr>\n<tr><td>位置</td><td>嵌在雙層中，許多橫跨兩層</td><td>只在一側表面</td></tr>\n<tr><td>核心有疏水區嗎？</td><td>有</td><td>沒有</td></tr>\n<tr><td>功能例子</td><td>通道、泵、受體</td><td>某些酶；連繫細胞膜與細胞骨架的蛋白質</td></tr></table>\n<p><strong>得分要點。</strong>回答「Define」或「Distinguish」時，要寫出在膜中的<em>位置</em>，<em>並</em>說明原因 (核心有疏水區)。寫功能時要把結構與功能連起來，例如「受體外表面的結合位點形狀配合激素」。</p>\n<p><strong>連繫：</strong>蛋白質可在流動的雙層中橫向移動，這是流動鑲嵌模型 (fluid mosaic model) 的一部分 (B2.1.10)。</p>"},
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
        deeper: {"en":"<p><strong>Worked example: finding the solute concentration of potato cells.</strong> Potato cores of mass 2.00 g were left in sucrose solutions, then reweighed.</p>\n<table><tr><th>Sucrose (mol dm⁻³)</th><th>Final mass (g)</th><th>Change (g)</th><th>Change (%)</th></tr>\n<tr><td>0.0</td><td>2.30</td><td>+0.30</td><td>+15</td></tr>\n<tr><td>0.2</td><td>2.10</td><td>+0.10</td><td>+5</td></tr>\n<tr><td>0.4</td><td>1.98</td><td>−0.02</td><td>−1</td></tr>\n<tr><td>0.6</td><td>1.80</td><td>−0.20</td><td>−10</td></tr></table>\n<ol><li>Percentage change = (final − initial) ÷ initial × 100. For 0.6: −0.20 ÷ 2.00 × 100 = −10 %.</li>\n<li>Plot % change against concentration. The line crosses zero between 0.2 and 0.4.</li>\n<li>Interpolate: zero change is at about 0.2 + 0.2 × (5 ÷ 6) ≈ 0.37 mol dm⁻³.</li>\n<li>At this concentration there is no net movement of water, so the solute concentration of the potato cells is about 0.37 mol dm⁻³.</li></ol>\n<p><strong>Explaining the gain:</strong> in 0.0 solution the cells have the higher solute concentration, so water moves in by osmosis and the mass rises. In 0.6 the solution has the higher solute concentration, so water leaves.</p>\n<p><strong>Mark-scheme language:</strong> say “from a lower solute concentration to a higher solute concentration”, “net movement”, “across a partially permeable membrane”. Aquaporins make osmosis <em>faster</em> but do not change its direction and need no ATP.</p>","ja":"<p><strong>計算例: ジャガイモ細胞の溶質濃度を求める。</strong>質量2.00 gのジャガイモの棒をスクロース溶液に浸し、再び質量を測った。</p>\n<table><tr><th>スクロース (mol dm⁻³)</th><th>最終質量 (g)</th><th>変化 (g)</th><th>変化 (%)</th></tr>\n<tr><td>0.0</td><td>2.30</td><td>+0.30</td><td>+15</td></tr>\n<tr><td>0.2</td><td>2.10</td><td>+0.10</td><td>+5</td></tr>\n<tr><td>0.4</td><td>1.98</td><td>−0.02</td><td>−1</td></tr>\n<tr><td>0.6</td><td>1.80</td><td>−0.20</td><td>−10</td></tr></table>\n<ol><li>変化率 (%) = (最終 − 最初) ÷ 最初 × 100。0.6のとき: −0.20 ÷ 2.00 × 100 = −10 %。</li>\n<li>変化率を濃度に対してグラフにする。線は0.2と0.4の間で0を横切る。</li>\n<li>内挿 (interpolation) する: 変化ゼロは 0.2 + 0.2 × (5 ÷ 6) ≈ 0.37 mol dm⁻³ のあたり。</li>\n<li>この濃度では水の正味の移動 (net movement) がないので、ジャガイモ細胞の溶質濃度は約0.37 mol dm⁻³。</li></ol>\n<p><strong>増加の説明:</strong>0.0の溶液では細胞の溶質濃度の方が高いので、水が浸透 (osmosis) で入り、質量が増える。0.6では溶液の溶質濃度の方が高いので水が出ていく。</p>\n<p><strong>採点基準の言い方:</strong>「溶質濃度が低い方から高い方へ」「正味の移動」「半透膜 (partially permeable membrane) を通って」。アクアポリン (aquaporin) は浸透を<em>速く</em>するが、向きは変えず、ATPも不要。</p>","zh":"<p><strong>計算例：求出馬鈴薯細胞的溶質濃度。</strong>把質量 2.00 g 的馬鈴薯條放入蔗糖溶液，之後再稱重。</p>\n<table><tr><th>蔗糖 (mol dm⁻³)</th><th>最終質量 (g)</th><th>變化 (g)</th><th>變化 (%)</th></tr>\n<tr><td>0.0</td><td>2.30</td><td>+0.30</td><td>+15</td></tr>\n<tr><td>0.2</td><td>2.10</td><td>+0.10</td><td>+5</td></tr>\n<tr><td>0.4</td><td>1.98</td><td>−0.02</td><td>−1</td></tr>\n<tr><td>0.6</td><td>1.80</td><td>−0.20</td><td>−10</td></tr></table>\n<ol><li>百分比變化 = (最終 − 最初) ÷ 最初 × 100。0.6 時：−0.20 ÷ 2.00 × 100 = −10 %。</li>\n<li>以百分比變化對濃度作圖，線在 0.2 與 0.4 之間穿過零。</li>\n<li>內插 (interpolation)：零變化約在 0.2 + 0.2 × (5 ÷ 6) ≈ 0.37 mol dm⁻³。</li>\n<li>在此濃度，水沒有淨移動 (net movement)，所以馬鈴薯細胞的溶質濃度約為 0.37 mol dm⁻³。</li></ol>\n<p><strong>解釋增重：</strong>在 0.0 的溶液中，細胞的溶質濃度較高，水通過滲透作用 (osmosis) 進入，質量增加；在 0.6 中，溶液的溶質濃度較高，水離開細胞。</p>\n<p><strong>評分準則用語：</strong>「由溶質濃度較低處到溶質濃度較高處」、「淨移動」、「穿過部分透性膜 (partially permeable membrane)」。水通道蛋白 (aquaporin) 令滲透<em>更快</em>，但不改變方向，也不需要 ATP。</p>"},
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
        deeper: {"en":"<p><strong>Why a channel is selective.</strong> The pore is lined by amino acid R groups whose size, shape and charge fit one kind of ion. A potassium channel lets K⁺ through but not Na⁺. A channel for a positive ion is lined with negatively charged or polar groups. Because the pore is water-filled and hydrophilic, the ion does not have to enter the hydrophobic core.</p>\n<table><tr><th></th><th>Simple diffusion</th><th>Facilitated diffusion (channel)</th></tr>\n<tr><td>Particles</td><td>Small, non-polar</td><td>Ions and other hydrophilic particles</td></tr>\n<tr><td>Protein needed?</td><td>No</td><td>Yes, a specific channel</td></tr>\n<tr><td>Can the cell control it?</td><td>No</td><td>Yes, by opening or closing channels</td></tr>\n<tr><td>Limit on the rate</td><td>Gradient, surface area, temperature</td><td>Gradient <em>and</em> the number of open channels</td></tr>\n<tr><td>ATP and direction</td><td>None; down the gradient</td><td>None; down the gradient</td></tr></table>\n<p><strong>Data tip.</strong> If the rate of transport rises with concentration but then levels off, a limited number of protein molecules is probably involved. A respiratory inhibitor lowers active transport (less ATP) but does not lower facilitated diffusion.</p>\n<p><strong>Typical 3-mark “Explain” answer:</strong> ions cannot cross the hydrophobic core; channel has a hydrophilic pore of a particular shape and charge that fits one ion type; ions move down their gradient without ATP.</p>","ja":"<p><strong>チャネルが選択的である理由。</strong>孔の内側に並ぶアミノ酸のR基は、大きさ・形・電荷が特定の種類のイオンに合っている。カリウムチャネルはK⁺を通すがNa⁺は通さない。正イオン用のチャネルには負電荷または極性の基が並ぶ。孔は水で満たされた親水性なので、イオンは疎水性の中心部に入らなくてよい。</p>\n<table><tr><th></th><th>単純拡散 (simple diffusion)</th><th>促進拡散 (facilitated diffusion, チャネル)</th></tr>\n<tr><td>粒子</td><td>小さく非極性</td><td>イオンなど親水性の粒子</td></tr>\n<tr><td>タンパク質が必要か</td><td>不要</td><td>必要 (特定のチャネル)</td></tr>\n<tr><td>細胞が調節できるか</td><td>できない</td><td>できる (チャネルの開閉)</td></tr>\n<tr><td>速さの限界</td><td>勾配、表面積、温度</td><td>勾配<em>と</em>開いているチャネルの数</td></tr>\n<tr><td>ATPと方向</td><td>不要。勾配に沿う</td><td>不要。勾配に沿う</td></tr></table>\n<p><strong>データのヒント。</strong>輸送の速さが濃度とともに上がり、やがて頭打ちになるなら、数に限りのあるタンパク質が関わっている可能性が高い。呼吸阻害剤は能動輸送 (ATPが減る) を下げるが、促進拡散は下げない。</p>\n<p><strong>3点の「説明せよ」の典型的な答え:</strong>イオンは疎水性の中心部を通れない。チャネルには特定のイオンに合う形と電荷の親水性の孔がある。イオンはATPなしで勾配に沿って動く。</p>","zh":"<p><strong>通道為何有選擇性。</strong>孔道內壁的氨基酸 R 基，其大小、形狀和電荷只配合某一種離子。鉀通道讓 K⁺ 通過，但不讓 Na⁺ 通過。讓正離子通過的通道，內壁有帶負電荷或極性的基團。孔道充滿水而且是親水的，離子不必進入疏水核心。</p>\n<table><tr><th></th><th>簡單擴散 (simple diffusion)</th><th>易化擴散 (facilitated diffusion，通道)</th></tr>\n<tr><td>粒子</td><td>細小、非極性</td><td>離子和其他親水粒子</td></tr>\n<tr><td>需要蛋白質嗎？</td><td>不需要</td><td>需要，且是特定的通道</td></tr>\n<tr><td>細胞能控制嗎？</td><td>不能</td><td>能，透過開閉通道</td></tr>\n<tr><td>速率的限制</td><td>梯度、表面積、溫度</td><td>梯度<em>和</em>開放通道的數目</td></tr>\n<tr><td>ATP 與方向</td><td>不需要；順梯度</td><td>不需要；順梯度</td></tr></table>\n<p><strong>數據提示。</strong>若運輸速率隨濃度上升後趨於平穩，很可能涉及數量有限的蛋白質。呼吸抑制劑會降低主動運輸 (ATP 減少)，但不會降低易化擴散。</p>\n<p><strong>3 分「Explain」題的典型答案：</strong>離子不能穿過疏水核心；通道有親水孔道，其形狀和電荷配合某種離子；離子不需 ATP，順梯度移動。</p>"},
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
        deeper: {"en":"<p><strong>How to show that a process is active transport.</strong> Look for these pieces of evidence:</p>\n<ul><li>The substance is moved <em>against</em> its concentration gradient. Its concentration inside ends up higher than outside.</li>\n<li>A respiratory inhibitor (such as cyanide) or a lack of oxygen lowers the rate, because ATP production falls.</li>\n<li>The rate levels off at high concentration, because the number of pumps is limited.</li>\n<li>The cells have many mitochondria.</li></ul>\n<p><strong>Worked example: root hair cells and mineral ions.</strong> A root hair cell contains nitrate at a concentration 20 times that of the soil water. Nitrate cannot diffuse in, because that would be down the gradient the wrong way. Pump proteins in the root hair membrane bind nitrate ions, use ATP from respiration to change shape, and release the ions inside. If the soil is waterlogged, oxygen is scarce, respiration slows, less ATP is made, and uptake falls.</p>\n<p><strong>Mark-scheme language:</strong> “against the concentration gradient / from low to high concentration”, “pump protein is specific”, “uses ATP, which changes the shape of the pump”. Write “ATP” rather than just “energy”.</p>","ja":"<p><strong>能動輸送であることを示す方法。</strong>次のような証拠を探す:</p>\n<ul><li>物質が濃度勾配に<em>逆らって</em>動かされ、最終的に内側の濃度が外側より高くなる。</li>\n<li>呼吸阻害剤 (シアン化物など) や酸素不足で速さが下がる (ATPの生産が減るため)。</li>\n<li>高濃度で速さが頭打ちになる (ポンプの数に限りがあるため)。</li>\n<li>細胞にミトコンドリアが多い。</li></ul>\n<p><strong>例: 根毛細胞と無機イオン。</strong>根毛細胞の硝酸イオン濃度は土壌水の20倍である。硝酸イオンは拡散では入れない (勾配の向きが逆になる)。根毛の膜にあるポンプ (pump) が硝酸イオンと結合し、呼吸で得たATPを使って形を変え、内側で放出する。土壌が水浸しだと酸素が乏しく、呼吸が遅くなってATPが減り、取り込みが落ちる。</p>\n<p><strong>採点基準の言い方:</strong>「濃度勾配に逆らって / 低濃度から高濃度へ」「ポンプタンパク質は特異的 (specific)」「ATPを使い、ポンプの形が変わる」。単に「エネルギー」ではなく「ATP」と書く。</p>","zh":"<p><strong>如何證明某過程是主動運輸。</strong>尋找以下證據：</p>\n<ul><li>物質<em>逆</em>濃度梯度移動，最終細胞內的濃度比外面高。</li>\n<li>呼吸抑制劑 (如氰化物) 或缺氧令速率下降，因為 ATP 的生成減少。</li>\n<li>濃度很高時速率趨於平穩，因為泵的數目有限。</li>\n<li>細胞含有大量線粒體。</li></ul>\n<p><strong>例子：根毛細胞與礦物離子。</strong>根毛細胞內硝酸根的濃度是土壤水的 20 倍。硝酸根不能擴散進入 (那是逆梯度)。根毛細胞膜上的泵 (pump) 蛋白與硝酸根結合，利用呼吸作用產生的 ATP 改變形狀，並在細胞內釋放離子。若土壤積水，氧氣不足，呼吸減慢，ATP 減少，吸收量便下降。</p>\n<p><strong>評分準則用語：</strong>「逆濃度梯度／由低濃度到高濃度」、「泵蛋白具特異性 (specific)」、「利用 ATP，令泵的形狀改變」。要寫「ATP」，不要只寫「能量」。</p>"},
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
        deeper: {"en":"<p><strong>A decision path for any particle.</strong></p>\n<ol><li>Is it small and non-polar? Then it can cross by <em>simple diffusion</em>, always down its gradient (O₂, CO₂).</li>\n<li>Is it an ion or a hydrophilic particle? It needs a protein.</li>\n<li>Does it move down its gradient through a channel? <em>Facilitated diffusion</em>, no ATP (for example K⁺ through a K⁺ channel).</li>\n<li>Does it move against its gradient? <em>Active transport</em> by a pump, using ATP (for example nitrate into a root hair cell).</li></ol>\n<p>The cell controls what crosses by <em>which proteins it puts in the membrane</em> and by opening or closing channels. Two cell types with the same bilayer but different proteins have different permeabilities.</p>\n<p><strong>Outline of a 4-mark “Compare simple diffusion and facilitated diffusion” answer.</strong></p>\n<ul><li>Similarity: both are passive, go down the concentration gradient and use no ATP (1 mark).</li>\n<li>Difference: simple diffusion crosses the phospholipids directly, but facilitated diffusion uses a channel protein (1).</li>\n<li>Difference: simple diffusion is for small non-polar particles; facilitated is for ions or polar particles (1).</li>\n<li>Difference: facilitated diffusion is selective and controllable; simple diffusion is not (1).</li></ul>\n<p><strong>Mark lost:</strong> writing “facilitated diffusion is active”, or “simple diffusion uses protein”.</p>","ja":"<p><strong>どんな粒子にも使える判断の流れ。</strong></p>\n<ol><li>小さく非極性か。そうなら<em>単純拡散</em> (simple diffusion) で、常に勾配に沿って通れる (O₂、CO₂)。</li>\n<li>イオンや親水性の粒子か。そうならタンパク質が必要。</li>\n<li>チャネルを通って勾配に沿って動くか。<em>促進拡散</em> (facilitated diffusion)、ATP不要 (例: K⁺チャネルを通るK⁺)。</li>\n<li>勾配に逆らって動くか。ポンプによる<em>能動輸送</em> (active transport)、ATPを使う (例: 根毛細胞への硝酸イオン)。</li></ol>\n<p>細胞は、<em>膜にどのタンパク質を置くか</em>と、チャネルの開閉によって、何を通すかを調節する。2重層が同じでもタンパク質が違えば、透過性は違う。</p>\n<p><strong>4点の「単純拡散と促進拡散を比較せよ」の答えの骨組み。</strong></p>\n<ul><li>共通点: どちらも受動的で、濃度勾配に沿い、ATPを使わない (1点)。</li>\n<li>違い: 単純拡散はリン脂質を直接通るが、促進拡散はチャネルタンパク質を使う (1点)。</li>\n<li>違い: 単純拡散は小さい非極性の粒子、促進拡散はイオンや極性粒子 (1点)。</li>\n<li>違い: 促進拡散は選択的で調節できるが、単純拡散はそうではない (1点)。</li></ul>\n<p><strong>失点:</strong>「促進拡散は能動的」「単純拡散はタンパク質を使う」と書くこと。</p>","zh":"<p><strong>適用於任何粒子的判斷路徑。</strong></p>\n<ol><li>它細小而且非極性嗎？是的話可靠<em>簡單擴散</em> (simple diffusion) 穿過，永遠是順梯度 (O₂、CO₂)。</li>\n<li>它是離子或親水粒子嗎？那就需要蛋白質。</li>\n<li>它是否經通道順梯度移動？那是<em>易化擴散</em> (facilitated diffusion)，不需 ATP (例如 K⁺ 經鉀通道)。</li>\n<li>它是否逆梯度移動？那是由泵進行的<em>主動運輸</em> (active transport)，需要 ATP (例如硝酸根進入根毛細胞)。</li></ol>\n<p>細胞透過<em>在膜中放入哪些蛋白質</em>，以及開閉通道，來控制甚麼可以通過。雙層相同但蛋白質不同的兩種細胞，透過性也不同。</p>\n<p><strong>4 分「比較簡單擴散與易化擴散」答案的大綱。</strong></p>\n<ul><li>相同點：兩者都是被動的，順濃度梯度，不用 ATP (1 分)。</li>\n<li>不同點：簡單擴散直接穿過磷脂，易化擴散需要通道蛋白 (1 分)。</li>\n<li>不同點：簡單擴散用於細小非極性粒子，易化擴散用於離子或極性粒子 (1 分)。</li>\n<li>不同點：易化擴散有選擇性且可被控制，簡單擴散則沒有 (1 分)。</li></ul>\n<p><strong>失分原因：</strong>寫「易化擴散是主動的」或「簡單擴散使用蛋白質」。</p>"},
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
        deeper: {"en":"<p><strong>Why the carbohydrate is on the outside.</strong> Recognition and adhesion happen between a cell and its surroundings, so the carbohydrate chains face the extracellular fluid, away from the cytoplasm.</p>\n<table><tr><th></th><th>Glycoprotein</th><th>Glycolipid</th></tr>\n<tr><td>Made of</td><td>Protein + carbohydrate chain</td><td>Lipid + carbohydrate chain</td></tr>\n<tr><td>Position of the carbohydrate</td><td>Outer surface</td><td>Outer surface</td></tr>\n<tr><td>Roles</td><td>Cell recognition, adhesion</td><td>Cell recognition, adhesion</td></tr></table>\n<p><strong>Worked example: ABO blood groups.</strong> The A, B and O blood groups depend on different carbohydrate chains on glycoproteins and glycolipids on the surface of red blood cells. These act as identity labels. A person’s immune system treats a different label as foreign, which is why blood groups must be matched for a transfusion.</p>\n<p><strong>Recognition or adhesion?</strong> Recognition is about <em>identity</em> (“who are you?”, for example self or foreign). Adhesion is about <em>physical attachment</em> (sticking cells into a tissue). Write the one the question asks for. For both, say that the chains are on the outer (extracellular) side.</p>","ja":"<p><strong>糖鎖が外側にある理由。</strong>認識や接着は細胞とその周囲の間で起こるので、糖鎖は細胞質ではなく細胞外液の側を向いている。</p>\n<table><tr><th></th><th>糖タンパク質 (glycoprotein)</th><th>糖脂質 (glycolipid)</th></tr>\n<tr><td>成分</td><td>タンパク質 + 糖鎖</td><td>脂質 + 糖鎖</td></tr>\n<tr><td>糖鎖の位置</td><td>外側の表面</td><td>外側の表面</td></tr>\n<tr><td>働き</td><td>細胞の認識、接着</td><td>細胞の認識、接着</td></tr></table>\n<p><strong>例: ABO式血液型。</strong>A型・B型・O型は、赤血球の表面にある糖タンパク質や糖脂質の糖鎖の違いで決まる。これが識別のラベル (cell recognition) として働く。免疫系は違うラベルを異物とみなすので、輸血では血液型を合わせる必要がある。</p>\n<p><strong>認識か接着か。</strong>認識 (recognition) は<em>識別</em> (「あなたは誰か」、自己か異物か)。接着 (adhesion) は<em>物理的に付着する</em>こと (細胞同士を組織にまとめる)。問題が求める方を書く。どちらでも、糖鎖が外側 (細胞外側) にあることを述べる。</p>","zh":"<p><strong>碳水化合物為何在外側。</strong>識別和黏附都發生在細胞與周圍環境之間，所以糖鏈朝向細胞外液，背向細胞質。</p>\n<table><tr><th></th><th>糖蛋白 (glycoprotein)</th><th>糖脂 (glycolipid)</th></tr>\n<tr><td>組成</td><td>蛋白質 + 糖鏈</td><td>脂質 + 糖鏈</td></tr>\n<tr><td>糖鏈的位置</td><td>外表面</td><td>外表面</td></tr>\n<tr><td>作用</td><td>細胞識別、黏附</td><td>細胞識別、黏附</td></tr></table>\n<p><strong>例子：ABO 血型。</strong>A、B、O 血型取決於紅血球表面糖蛋白和糖脂上不同的糖鏈。它們就像身份標籤 (cell recognition)。免疫系統會把不同的標籤視為外來物，所以輸血時血型必須配對。</p>\n<p><strong>是識別還是黏附？</strong>識別 (recognition) 是關於<em>身份</em> (「你是誰？」，例如自身或外來)；黏附 (adhesion) 是<em>實際的附著</em> (把細胞黏成組織)。按題目所問作答。兩者都要說明糖鏈位於外 (細胞外) 側。</p>"},
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
        deeper: {"en":"<p><strong>Why “fluid” and why “mosaic”?</strong> <em>Fluid:</em> phospholipids are not bonded to each other, so they move sideways past one another and the layer behaves like a thin oil. Many proteins can also drift sideways. <em>Mosaic:</em> the proteins are scattered through the bilayer in an irregular pattern, like tiles.</p>\n<p><strong>Drawing marks (typical 4–5 mark question):</strong></p>\n<ul><li>Two layers of phospholipids, each with a round head facing outwards and two tails facing inwards.</li>\n<li>An integral protein that goes through the bilayer and a peripheral protein on a surface.</li>\n<li>Carbohydrate chains on the <em>outer</em> surface only (glycoprotein/glycolipid).</li>\n<li>Cholesterol between the phospholipids. Label hydrophilic and hydrophobic regions.</li></ul>\n<div class=\"note\"><strong>Extension (not required):</strong> The earlier Davson–Danielli model (1935) drew the membrane as a lipid layer sandwiched between continuous layers of protein. It was replaced by the fluid mosaic model of Singer and Nicolson (1972). Evidence included freeze-fracture electron micrographs, which showed proteins embedded in the bilayer, and an experiment in which fused mouse and human cells had their surface proteins mix within about 40 minutes, showing that the proteins move.</div>\n<p><strong>Common errors:</strong> drawing the carbohydrate chains inside the cell; drawing heads touching heads in the middle; calling the membrane “rigid”.</p>","ja":"<p><strong>なぜ「流動 (fluid)」で「モザイク (mosaic)」なのか。</strong><em>流動:</em>リン脂質同士は結合していないので、横方向に互いにすれ違って動き、膜は薄い油のようにふるまう。多くのタンパク質も横に動ける。<em>モザイク:</em>タンパク質は不規則に散らばっていて、タイルのようである。</p>\n<p><strong>描図の得点 (典型的な4〜5点の問題):</strong></p>\n<ul><li>2層のリン脂質。それぞれ丸い頭部が外向き、2本の尾部が内向き。</li>\n<li>2重層を貫く内在性タンパク質と、表面にある表在性タンパク質。</li>\n<li>糖鎖は<em>外側</em>の表面だけ (糖タンパク質・糖脂質)。</li>\n<li>リン脂質の間にコレステロール。親水性と疎水性の領域を示す。</li></ul>\n<div class=\"note\"><strong>発展 (必須ではない):</strong>以前のダヴソン–ダニエリ (Davson–Danielli) モデル (1935) は、脂質の層を連続したタンパク質の層ではさむ構造だった。これはシンガーとニコルソン (1972) の流動モザイクモデルに置き換えられた。根拠には、タンパク質が2重層に埋まっていることを示した凍結割断法の電子顕微鏡像や、融合させたマウスとヒトの細胞で約40分のうちに表面タンパク質が混ざり合った実験がある。</div>\n<p><strong>よくある誤り:</strong>糖鎖を細胞の内側に描く。中央で頭部同士が接するように描く。膜を「硬い」と書く。</p>","zh":"<p><strong>為何是「流動」(fluid) 和「鑲嵌」(mosaic)？</strong><em>流動：</em>磷脂之間沒有鍵合，可以橫向互相滑過，所以膜的表現像一層薄油。許多蛋白質也可橫向漂移。<em>鑲嵌：</em>蛋白質不規則地散佈在雙層中，像鑲嵌的磚片。</p>\n<p><strong>繪圖得分 (典型 4–5 分題)：</strong></p>\n<ul><li>兩層磷脂，每個圓形頭部朝外，兩條尾部朝內。</li>\n<li>一個貫穿雙層的嵌入蛋白，和一個在表面的周邊蛋白。</li>\n<li>糖鏈只在<em>外</em>表面 (糖蛋白／糖脂)。</li>\n<li>磷脂之間有膽固醇。標示親水區和疏水區。</li></ul>\n<div class=\"note\"><strong>延伸 (非必修)：</strong>較早的戴維森–丹尼利 (Davson–Danielli) 模型 (1935) 把膜畫成一層脂質夾在兩層連續的蛋白質之間。後來被辛格和尼科爾森 (1972) 的流動鑲嵌模型取代。證據包括顯示蛋白質嵌在雙層中的冷凍斷裂電子顯微照片，以及把小鼠和人類細胞融合後，表面蛋白質在約 40 分鐘內混合的實驗，說明蛋白質會移動。</div>\n<p><strong>常見錯誤：</strong>把糖鏈畫在細胞內側；把頭部畫成在中間互相接觸；說膜是「剛性」的。</p>"},
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
        deeper: {"en":"<p><strong>The mechanism.</strong> A double bond (C=C) in an unsaturated fatty acid makes a kink in the tail. Kinked tails cannot pack tightly, so the attractions between neighbouring tails are weaker and the phospholipids move more freely. Straight saturated tails pack closely, attract each other more strongly and move less. That is why unsaturated fatty acids have a lower melting point.</p>\n<table><tr><th></th><th>More unsaturated tails</th><th>More saturated tails</th></tr>\n<tr><td>Packing</td><td>Loose</td><td>Tight</td></tr>\n<tr><td>Fluidity at a given temperature</td><td>Higher</td><td>Lower</td></tr>\n<tr><td>Suits</td><td>Cold habitats</td><td>Warm or hot habitats</td></tr></table>\n<p><strong>Linking to the habitat.</strong> A fish in cold water would have a stiff membrane if its tails were mostly saturated: proteins and vesicles could not move properly. More unsaturated tails keep it fluid. In a hot spring, mostly unsaturated tails would make the membrane too fluid and weak, so more saturated tails are found. Many ectotherms can <em>change</em> the proportion of unsaturated fatty acids when the temperature changes.</p>\n<p><strong>A 4-mark answer.</strong> Unsaturated tails are kinked; they pack loosely; membrane stays fluid at low temperature; so the organism’s membrane proteins can still work.</p>\n<p><strong>Data tip:</strong> if a table shows % unsaturated fatty acids rising as temperature falls, quote two values from the data in your answer.</p>","ja":"<p><strong>しくみ。</strong>不飽和脂肪酸の二重結合 (C=C) は尾部に折れ曲がりをつくる。折れ曲がった尾部は密に詰まれないので、隣り合う尾部の間の引き合いが弱く、リン脂質が自由に動く。まっすぐな飽和尾部は密に詰まり、互いに強く引き合い、動きにくい。不飽和脂肪酸の融点が低いのはこのためである。</p>\n<table><tr><th></th><th>不飽和 (unsaturated) の尾部が多い</th><th>飽和 (saturated) の尾部が多い</th></tr>\n<tr><td>詰まり方</td><td>ゆるい</td><td>密</td></tr>\n<tr><td>同じ温度での流動性</td><td>高い</td><td>低い</td></tr>\n<tr><td>適する環境</td><td>寒い生息地</td><td>暖かい・熱い生息地</td></tr></table>\n<p><strong>生息地との結びつけ。</strong>冷たい水にすむ魚の膜が飽和の尾部ばかりだと、膜が硬くなり、タンパク質や小胞が正しく動けない。不飽和の尾部が多ければ流動性が保たれる。温泉にすむ生物の膜が不飽和ばかりだと、流れやすく弱くなるので、飽和の尾部が多い。変温動物 (ectotherm) の多くは、温度が変わると不飽和脂肪酸の割合を<em>変える</em>ことができる。</p>\n<p><strong>4点の答え。</strong>不飽和の尾部は折れ曲がっている。ゆるく詰まる。低温でも膜が流動的に保たれる。だから膜タンパク質が働き続けられる。</p>\n<p><strong>データのヒント:</strong>温度が下がるほど不飽和脂肪酸の割合が増える表なら、答えにデータの値を2つ引用する。</p>","zh":"<p><strong>機制。</strong>不飽和脂肪酸的雙鍵 (C=C) 令尾部彎曲。彎曲的尾部不能緊密堆疊，相鄰尾部之間的吸引力較弱，磷脂移動更自由。筆直的飽和尾部堆疊緊密，互相吸引力較強，移動較少。這就是不飽和脂肪酸熔點較低的原因。</p>\n<table><tr><th></th><th>不飽和 (unsaturated) 尾部較多</th><th>飽和 (saturated) 尾部較多</th></tr>\n<tr><td>堆疊</td><td>疏鬆</td><td>緊密</td></tr>\n<tr><td>同一溫度下的流動性</td><td>較高</td><td>較低</td></tr>\n<tr><td>適合</td><td>寒冷棲息地</td><td>溫暖或炎熱的棲息地</td></tr></table>\n<p><strong>連繫棲息地。</strong>冷水魚的膜若主要是飽和尾部，膜會變硬，蛋白質和囊泡便不能正常移動；較多不飽和尾部則可保持流動。在溫泉中，若膜主要是不飽和尾部，會太流動而脆弱，所以較多飽和尾部。許多變溫動物 (ectotherm) 在溫度改變時能<em>改變</em>不飽和脂肪酸的比例。</p>\n<p><strong>4 分答案。</strong>不飽和尾部彎曲；堆疊疏鬆；低溫下膜仍保持流動；所以膜蛋白仍能運作。</p>\n<p><strong>數據提示：</strong>若表中顯示溫度下降時不飽和脂肪酸百分比上升，答案中要引用兩個數據值。</p>"},
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
        deeper: {"en":"<p><strong>Cholesterol as a “buffer” of fluidity.</strong> The ring structure of cholesterol sits among the hydrophobic tails, and its –OH group sits near the hydrophilic heads.</p>\n<table><tr><th>Temperature</th><th>Problem without cholesterol</th><th>What cholesterol does</th></tr>\n<tr><td>High</td><td>Phospholipids move too much; membrane too fluid and weak</td><td>Holds neighbouring phospholipids in place, reducing their movement</td></tr>\n<tr><td>Low</td><td>Tails pack tightly; membrane stiffens</td><td>Gets between the tails and stops them packing tightly</td></tr></table>\n<p>So cholesterol does not simply make a membrane “more fluid” or “less fluid”. It makes fluidity <em>steadier</em> when the temperature changes. This is why it is called a modulator (adjuster).</p>\n<p><strong>Comparing the two controls of fluidity.</strong> Fatty acid saturation sets the membrane’s fluidity for a given habitat or temperature (B2.1.11). Cholesterol fine-tunes it in both directions. Cholesterol is found in animal cell membranes, so use animal cells in your example.</p>\n<p><strong>A 3-mark answer to “Explain the role of cholesterol”:</strong> sits between phospholipids; at high temperature restricts phospholipid movement so the membrane is not too fluid; at low temperature prevents tight packing so the membrane does not become rigid.</p>\n<p><strong>Mark lost:</strong> “cholesterol makes the membrane fluid”, or giving only one temperature.</p>","ja":"<p><strong>流動性の「緩衝材」としてのコレステロール。</strong>コレステロールの環構造は疎水性の尾部の間に入り、–OH基は親水性の頭部の近くにある。</p>\n<table><tr><th>温度</th><th>コレステロールがないときの問題</th><th>コレステロールの働き</th></tr>\n<tr><td>高い</td><td>リン脂質が動きすぎる。膜が流れすぎて弱くなる</td><td>隣のリン脂質を押さえて動きを減らす</td></tr>\n<tr><td>低い</td><td>尾部が密に詰まり、膜が硬くなる</td><td>尾部の間に入り、密に詰まるのを防ぐ</td></tr></table>\n<p>つまりコレステロールは膜を単に「流動的にする」「流動的でなくする」のではない。温度が変わっても流動性を<em>安定させる</em>。調節因子 (modulator) と呼ばれるのはこのためである。</p>\n<p><strong>流動性の2つの調節を比べる。</strong>脂肪酸の飽和度は、その生息地や温度に合った流動性の基準を決める (B2.1.11)。コレステロールは両方向に微調整する。コレステロールは動物細胞 (animal cell) の膜にあるので、例には動物細胞を使う。</p>\n<p><strong>「コレステロールの役割を説明せよ」の3点の答え:</strong>リン脂質の間に入る。高温ではリン脂質の動きを制限し、膜が流れすぎない。低温では密な詰まりを防ぎ、膜が硬くならない。</p>\n<p><strong>失点:</strong>「コレステロールは膜を流動的にする」と書く、または片方の温度しか書かない。</p>","zh":"<p><strong>膽固醇是流動性的「緩衝」。</strong>膽固醇的環狀結構位於疏水尾部之間，其 –OH 基則靠近親水頭部。</p>\n<table><tr><th>溫度</th><th>沒有膽固醇時的問題</th><th>膽固醇的作用</th></tr>\n<tr><td>高</td><td>磷脂移動過多；膜太流動、太脆弱</td><td>固定相鄰磷脂，減少其移動</td></tr>\n<tr><td>低</td><td>尾部緊密堆疊；膜變硬</td><td>擠入尾部之間，阻止它們緊密堆疊</td></tr></table>\n<p>因此膽固醇並不是單純令膜「更流動」或「更不流動」，而是在溫度改變時令流動性<em>更穩定</em>。這就是它被稱為調節劑 (modulator) 的原因。</p>\n<p><strong>比較兩種流動性控制。</strong>脂肪酸的飽和程度決定了某棲息地或溫度下膜的流動性 (B2.1.11)；膽固醇則在兩個方向上微調。膽固醇存在於動物細胞 (animal cell) 的膜，所以舉例時要用動物細胞。</p>\n<p><strong>「解釋膽固醇的作用」的 3 分答案：</strong>位於磷脂之間；高溫時限制磷脂移動，令膜不會太流動；低溫時阻止緊密堆疊，令膜不會變硬。</p>\n<p><strong>失分原因：</strong>寫「膽固醇令膜流動」，或只寫一種溫度。</p>"},
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
        deeper: {"en":"<p><strong>Step by step.</strong></p>\n<ol><li><em>Exocytosis:</em> a vesicle carrying cargo moves to the plasma membrane; its membrane fuses with the plasma membrane (membranes are fluid, so the phospholipids rearrange); the contents are released outside; the vesicle membrane becomes part of the plasma membrane.</li>\n<li><em>Endocytosis:</em> a patch of plasma membrane folds inwards around material outside; the edges meet and fuse; a vesicle pinches off into the cytoplasm.</li></ol>\n<p><strong>Membrane balance.</strong> Exocytosis <em>adds</em> membrane to the cell surface and endocytosis <em>removes</em> it. In a cell that is neither growing nor shrinking the two roughly balance, so the surface area stays about the same.</p>\n<p><strong>Which side faces which?</strong> The inside of a vesicle becomes the outside of the cell after exocytosis. So carbohydrate chains on a vesicle’s inner surface end up on the <em>outer</em> surface of the plasma membrane, which fits B2.1.9.</p>\n<table><tr><th>Example</th><th>Process</th><th>What happens</th></tr>\n<tr><td>Phagocyte engulfs a bacterium</td><td>Endocytosis (phagocytosis)</td><td>Whole cell taken in inside a vesicle</td></tr>\n<tr><td>Neuron releases neurotransmitter</td><td>Exocytosis</td><td>Vesicles fuse with the membrane at the synapse</td></tr>\n<tr><td>Pancreatic cell secretes insulin</td><td>Exocytosis</td><td>Vesicles carry insulin out of the cell</td></tr></table>\n<p><strong>Key words:</strong> ATP needed; fluidity allows fusion; large particles cross <em>without</em> crossing the bilayer particle by particle.</p>","ja":"<p><strong>段階ごとに。</strong></p>\n<ol><li><em>エキソサイトーシス (exocytosis):</em>内容物を運ぶ小胞が細胞膜へ動く。小胞の膜が細胞膜と融合する (膜は流動的なのでリン脂質が並び直す)。内容物が外に放出される。小胞の膜は細胞膜の一部になる。</li>\n<li><em>エンドサイトーシス (endocytosis):</em>細胞膜の一部が外の物質を囲んで内側へへこむ。縁が出会って融合し、小胞が細胞質へくびれ切れる。</li></ol>\n<p><strong>膜のつり合い。</strong>エキソサイトーシスは細胞表面に膜を<em>加え</em>、エンドサイトーシスは膜を<em>取り去る</em>。成長も縮小もしていない細胞ではこの2つがほぼ釣り合い、表面積はほぼ一定に保たれる。</p>\n<p><strong>どちらの面がどちらを向くか。</strong>小胞の内側は、エキソサイトーシスの後に細胞の外側になる。したがって小胞の内表面にある糖鎖は、細胞膜の<em>外側</em>の表面に出ることになり、B2.1.9と合う。</p>\n<table><tr><th>例</th><th>過程</th><th>起こること</th></tr>\n<tr><td>食細胞が細菌をのみ込む</td><td>エンドサイトーシス (食作用 phagocytosis)</td><td>細菌がまるごと小胞に包まれて取り込まれる</td></tr>\n<tr><td>ニューロンが神経伝達物質を放出する</td><td>エキソサイトーシス</td><td>シナプスで小胞が膜と融合する</td></tr>\n<tr><td>膵臓の細胞がインスリンを分泌する</td><td>エキソサイトーシス</td><td>小胞がインスリンを細胞外へ運ぶ</td></tr></table>\n<p><strong>キーワード:</strong>ATPが必要。流動性があるから融合できる。大きな粒子が、2重層を粒子ごとに通り抜ける<em>のではなく</em>横切れる。</p>","zh":"<p><strong>逐步說明。</strong></p>\n<ol><li><em>胞吐作用 (exocytosis)：</em>載有物質的囊泡移向質膜；囊泡膜與質膜融合 (膜是流動的，磷脂會重新排列)；內容物被釋放到外面；囊泡膜成為質膜的一部分。</li>\n<li><em>胞吞作用 (endocytosis)：</em>一片質膜向內凹陷，包圍外面的物質；邊緣相遇並融合；囊泡向細胞質夾斷脫離。</li></ol>\n<p><strong>膜的平衡。</strong>胞吐作用<em>增加</em>細胞表面的膜，胞吞作用則<em>移走</em>膜。在不生長也不縮小的細胞中，兩者大致平衡，所以表面積大致不變。</p>\n<p><strong>哪一面朝向哪裏？</strong>囊泡的內側在胞吐後成為細胞的外側。因此囊泡內表面的糖鏈，最後會出現在質膜的<em>外</em>表面，這與 B2.1.9 吻合。</p>\n<table><tr><th>例子</th><th>過程</th><th>情況</th></tr>\n<tr><td>吞噬細胞吞入細菌</td><td>胞吞作用 (吞噬作用 phagocytosis)</td><td>整個細菌包在囊泡內被吞入</td></tr>\n<tr><td>神經元釋放神經遞質</td><td>胞吐作用</td><td>囊泡在突觸處與膜融合</td></tr>\n<tr><td>胰臟細胞分泌胰島素</td><td>胞吐作用</td><td>囊泡把胰島素運出細胞</td></tr></table>\n<p><strong>關鍵詞：</strong>需要 ATP；流動性令融合成為可能；大顆粒<em>不必</em>逐粒穿過雙層便能跨膜。</p>"},
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
        deeper: {"en":"<p><strong>The sequence at a synapse (neurotransmitter-gated).</strong></p>\n<ol><li>The sending neuron releases acetylcholine by exocytosis (B2.1.13).</li>\n<li>Acetylcholine diffuses across the gap and binds to a nicotinic acetylcholine receptor on the receiving cell.</li>\n<li>The channel opens. Na⁺ flows in down its concentration gradient, so the inside becomes less negative.</li>\n<li>When the acetylcholine is removed, the channel closes.</li></ol>\n<p><strong>Voltage-gated channels.</strong> The gate responds to a change in the electrical voltage across the membrane. In an axon, sodium channels open first and let Na⁺ in; potassium channels open slightly later and let K⁺ out. Each is selective for its own ion.</p>\n<table><tr><th></th><th>Neurotransmitter-gated</th><th>Voltage-gated</th></tr>\n<tr><td>Opened by</td><td>A chemical binding to the channel</td><td>A change in voltage across the membrane</td></tr>\n<tr><td>Example</td><td>Nicotinic acetylcholine receptor</td><td>Sodium and potassium channels in the axon</td></tr>\n<tr><td>Type of transport</td><td>Facilitated diffusion, no ATP</td><td>Facilitated diffusion, no ATP</td></tr></table>\n<p><strong>Why do ions move at all?</strong> The sodium–potassium pump (B2.1.15) has already set up the concentration gradients; the gates just control <em>when</em> the ions are allowed to use them. You do not need the full action potential here (that is C2.2).</p>\n<p><strong>Mark-scheme language:</strong> “gated”, “opens in response to…”, “ions move down their concentration gradient”, “no ATP needed for the movement”.</p>","ja":"<p><strong>シナプスでの流れ (神経伝達物質依存性 neurotransmitter-gated)。</strong></p>\n<ol><li>送る側のニューロンがアセチルコリンをエキソサイトーシスで放出する (B2.1.13)。</li>\n<li>アセチルコリンは間隙を拡散し、受ける側の細胞のニコチン性アセチルコリン受容体 (nicotinic acetylcholine receptor) に結合する。</li>\n<li>チャネルが開く。Na⁺が濃度勾配に沿って流入し、細胞の内側の負の度合いが弱まる。</li>\n<li>アセチルコリンが取り除かれるとチャネルは閉じる。</li></ol>\n<p><strong>電位依存性チャネル (voltage-gated channel)。</strong>ゲートは膜をはさむ電位の変化に応答する。軸索では、まずナトリウムチャネルが開いてNa⁺が入り、少し遅れてカリウムチャネルが開いてK⁺が出る。それぞれ自分のイオンだけを選んで通す。</p>\n<table><tr><th></th><th>神経伝達物質依存性</th><th>電位依存性</th></tr>\n<tr><td>開くきっかけ</td><td>化学物質がチャネルに結合する</td><td>膜をはさむ電位が変わる</td></tr>\n<tr><td>例</td><td>ニコチン性アセチルコリン受容体</td><td>軸索のナトリウム・カリウムチャネル</td></tr>\n<tr><td>輸送の種類</td><td>促進拡散。ATP不要</td><td>促進拡散。ATP不要</td></tr></table>\n<p><strong>そもそもなぜイオンが動くのか。</strong>ナトリウム–カリウムポンプ (B2.1.15) がすでに濃度勾配をつくっている。ゲートは、そのイオンが勾配を使える<em>タイミング</em>を決めるだけである。ここで活動電位の全体は必要ない (C2.2で学ぶ)。</p>\n<p><strong>採点基準の言い方:</strong>「ゲート (gated)」「〜に応答して開く」「イオンは濃度勾配に沿って動く」「移動にATPは不要」。</p>","zh":"<p><strong>突觸處的過程 (神經遞質門控 neurotransmitter-gated)。</strong></p>\n<ol><li>發送訊號的神經元以胞吐作用釋放乙酰膽鹼 (B2.1.13)。</li>\n<li>乙酰膽鹼擴散越過間隙，與接收細胞上的菸鹼型乙酰膽鹼受體 (nicotinic acetylcholine receptor) 結合。</li>\n<li>通道打開，Na⁺ 順濃度梯度流入，細胞內變得較不呈負。</li>\n<li>乙酰膽鹼被移走後，通道關閉。</li></ol>\n<p><strong>電壓門控通道 (voltage-gated channel)。</strong>閘門對跨膜電壓的改變作出反應。在軸突中，鈉通道先打開讓 Na⁺ 進入；鉀通道稍後打開讓 K⁺ 流出。每種通道只對自己的離子有選擇性。</p>\n<table><tr><th></th><th>神經遞質門控</th><th>電壓門控</th></tr>\n<tr><td>由甚麼打開</td><td>化學物質與通道結合</td><td>跨膜電壓改變</td></tr>\n<tr><td>例子</td><td>菸鹼型乙酰膽鹼受體</td><td>軸突的鈉通道和鉀通道</td></tr>\n<tr><td>運輸類型</td><td>易化擴散，不需 ATP</td><td>易化擴散，不需 ATP</td></tr></table>\n<p><strong>離子為何會移動？</strong>鈉鉀泵 (B2.1.15) 已建立濃度梯度；閘門只是控制離子<em>何時</em>可以利用這些梯度。這裏不必掌握完整的動作電位 (屬 C2.2)。</p>\n<p><strong>評分準則用語：</strong>「門控 (gated)」、「因應……而打開」、「離子順濃度梯度移動」、「移動本身不需 ATP」。</p>"},
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
<ul><li><strong>神經遞質門控通道</strong>在化學訊號與它結合時打開。<em>例子：</em><span class="term">煙鹼型乙醯膽鹼受體 (nicotinic acetylcholine receptor)</span>。神經遞質乙醯膽鹼結合後，通道打開，帶正電荷的離子 (主要是 Na⁺) 經孔道流入。</li>
<li><strong>電壓門控通道 (voltage-gated channel)</strong> 在膜兩側的電壓改變時開啟或關閉。<em>例子：</em>軸突膜上的<span class="term">鈉通道 (sodium channel)</span> 和<span class="term">鉀通道 (potassium channel)</span>。每種通道在特定電壓下打開，只讓自己的離子通過。</li></ul>
<p>離子經開啟的通道順濃度梯度移動，不需 ATP，所以這是可開可關的易化擴散。神經元就是這樣傳送電訊號 (神經衝動)。</p>`),
        examTip: L("Know one example of each trigger: acetylcholine (nicotinic receptor) = ligand-gated; Na⁺ and K⁺ channels = voltage-gated.",
          "それぞれの引き金の例を1つずつ: アセチルコリン (ニコチン性受容体)=リガンド (神経伝達物質) 依存性、Na⁺・K⁺ チャネル=電位依存性。",
          "要認識每種觸發方式的一個例子：乙醯膽鹼 (煙鹼型受體) = 配體 (神經遞質) 門控；Na⁺ 和 K⁺ 通道 = 電壓門控。")
      },
      {
        ref: "B2.1.15", ahl: true,
        deeper: {"en":"<p><strong>Worked example: 10 pump cycles.</strong></p>\n<table><tr><th></th><th>Per cycle</th><th>After 10 cycles</th></tr>\n<tr><td>ATP used</td><td>1</td><td>10</td></tr>\n<tr><td>Na⁺ out of the cell</td><td>3</td><td>30</td></tr>\n<tr><td>K⁺ into the cell</td><td>2</td><td>20</td></tr>\n<tr><td>Net positive charge removed from the cell</td><td>3 − 2 = 1</td><td>10</td></tr></table>\n<p>The cell loses one extra positive charge each cycle, so the inside becomes more negative.</p>\n<p><strong>Typical concentrations</strong> in a mammalian neuron (approximate): Na⁺ about 15 mM inside and about 145 mM outside; K⁺ about 140 mM inside and about 5 mM outside. Both ions are moved against their gradients, so this is active transport.</p>\n<p><strong>Why the inside is negative.</strong> The pump contributes by removing more positive charge than it brings in. A larger effect is that K⁺ leaks out through open potassium channels (down its gradient), carrying positive charge out, while little Na⁺ leaks in. Negatively charged particles inside cannot follow.</p>\n<p><strong>Mark-scheme language:</strong> “3 Na⁺ out, 2 K⁺ in”, “uses ATP”, “against the concentration gradients”, “maintains the membrane potential / concentration gradients”. A frequent slip is reversing the 3 and the 2.</p>\n<p>If ATP supply stops, the gradients gradually run down as ions leak across the membrane.</p>","ja":"<p><strong>計算例: ポンプ10サイクル。</strong></p>\n<table><tr><th></th><th>1サイクルあたり</th><th>10サイクル後</th></tr>\n<tr><td>使うATP</td><td>1</td><td>10</td></tr>\n<tr><td>細胞外へ出るNa⁺</td><td>3</td><td>30</td></tr>\n<tr><td>細胞内へ入るK⁺</td><td>2</td><td>20</td></tr>\n<tr><td>細胞から取り除かれる正電荷の正味</td><td>3 − 2 = 1</td><td>10</td></tr></table>\n<p>1サイクルごとに正電荷が1つ余分に細胞から失われるので、内側はより負になる。</p>\n<p><strong>典型的な濃度</strong> (哺乳類のニューロン、おおよその値): Na⁺は内側約15 mM、外側約145 mM。K⁺は内側約140 mM、外側約5 mM。どちらのイオンも勾配に逆らって動かされるので能動輸送である。</p>\n<p><strong>内側が負になる理由。</strong>ポンプは、入れる正電荷より多くの正電荷を出すことで寄与する。より大きな効果は、開いたカリウムチャネルからK⁺が (勾配に沿って) 漏れ出し、正電荷を持ち去る一方で、Na⁺はほとんど漏れ入らないことである。内側の負電荷をもつ粒子は一緒に出られない。</p>\n<p><strong>採点基準の言い方:</strong>「Na⁺ 3個が出て、K⁺ 2個が入る」「ATPを使う」「濃度勾配に逆らって」「膜電位 (membrane potential) / 濃度勾配を維持する」。3と2を逆にする誤りが多い。</p>\n<p>ATPの供給が止まると、イオンが膜を漏れて、勾配は徐々に失われていく。</p>","zh":"<p><strong>計算例：泵運作 10 個循環。</strong></p>\n<table><tr><th></th><th>每個循環</th><th>10 個循環後</th></tr>\n<tr><td>使用的 ATP</td><td>1</td><td>10</td></tr>\n<tr><td>移出細胞的 Na⁺</td><td>3</td><td>30</td></tr>\n<tr><td>移入細胞的 K⁺</td><td>2</td><td>20</td></tr>\n<tr><td>細胞淨失去的正電荷</td><td>3 − 2 = 1</td><td>10</td></tr></table>\n<p>每個循環細胞多失去一個正電荷，所以細胞內變得更呈負。</p>\n<p><strong>典型濃度</strong> (哺乳類神經元，約數)：Na⁺ 細胞內約 15 mM，細胞外約 145 mM；K⁺ 細胞內約 140 mM，細胞外約 5 mM。兩種離子都是逆梯度移動，所以是主動運輸。</p>\n<p><strong>細胞內為何帶負電。</strong>泵移出的正電荷比移入的多，因而有所貢獻。更大的影響是 K⁺ 經開放的鉀通道 (順梯度) 漏出，帶走正電荷，而漏入的 Na⁺ 很少。細胞內帶負電的粒子不能跟着出去。</p>\n<p><strong>評分準則用語：</strong>「3 個 Na⁺ 移出，2 個 K⁺ 移入」、「使用 ATP」、「逆濃度梯度」、「維持膜電位 (membrane potential)／濃度梯度」。常見失誤是把 3 和 2 弄反。</p>\n<p>若 ATP 供應停止，離子會漏過膜，梯度會逐漸消失。</p>"},
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
        deeper: {"en":"<p><strong>Step by step in an intestinal cell.</strong></p>\n<ol><li>Sodium–potassium pumps on the side of the cell facing the blood use ATP to keep the Na⁺ concentration inside the cell low.</li>\n<li>There is then a Na⁺ gradient: high outside (in the gut), low inside.</li>\n<li>A cotransporter on the gut side binds both Na⁺ and glucose. It only works when both are bound.</li>\n<li>Na⁺ moves in down its gradient and drags glucose with it, even if the glucose concentration inside is already higher.</li>\n<li>Glucose leaves on the blood side, and the pump pushes the Na⁺ out again.</li></ol>\n<table><tr><th></th><th>Pump (direct active)</th><th>Cotransporter (indirect active)</th><th>Channel (facilitated)</th></tr>\n<tr><td>Uses ATP itself?</td><td>Yes</td><td>No</td><td>No</td></tr>\n<tr><td>Can move a particle against its gradient?</td><td>Yes</td><td>Yes (using another particle’s gradient)</td><td>No</td></tr>\n<tr><td>Energy source</td><td>ATP</td><td>Na⁺ gradient</td><td>Existing gradient</td></tr></table>\n<p><strong>Typical reasoning question:</strong> a drug blocks the sodium–potassium pump but not the cotransporter. The Na⁺ gradient collapses, so glucose uptake falls even though the cotransporter itself never used ATP.</p>\n<p><strong>Mark-scheme language:</strong> “indirect active transport”, “energy from the Na⁺ gradient”, “gradient set up by the sodium–potassium pump using ATP”. Importance: complete absorption of glucose from the gut, and reabsorption from the nephron so glucose is not lost in urine.</p>","ja":"<p><strong>小腸の細胞での流れ。</strong></p>\n<ol><li>血液側にある細胞膜のナトリウム–カリウムポンプがATPを使い、細胞内のNa⁺濃度を低く保つ。</li>\n<li>その結果、Na⁺の勾配ができる。外側 (腸の内腔) で高く、内側で低い。</li>\n<li>腸側にある共輸送体 (cotransporter) がNa⁺とグルコースの両方に結合する。両方が結合したときだけ働く。</li>\n<li>Na⁺が勾配に沿って入り、グルコースを一緒に引き込む。細胞内のグルコース濃度がすでに高くても取り込める。</li>\n<li>グルコースは血液側へ出ていき、ポンプがNa⁺を再び外へ出す。</li></ol>\n<table><tr><th></th><th>ポンプ (直接の能動輸送)</th><th>共輸送体 (間接の能動輸送)</th><th>チャネル (促進拡散)</th></tr>\n<tr><td>自身がATPを使うか</td><td>使う</td><td>使わない</td><td>使わない</td></tr>\n<tr><td>勾配に逆らって動かせるか</td><td>できる</td><td>できる (別の粒子の勾配を利用)</td><td>できない</td></tr>\n<tr><td>エネルギー源</td><td>ATP</td><td>Na⁺の勾配</td><td>既存の勾配</td></tr></table>\n<p><strong>典型的な考察問題:</strong>薬がナトリウム–カリウムポンプを阻害するが共輸送体は阻害しないとする。Na⁺の勾配が崩れるので、共輸送体自体はATPを使わなくてもグルコースの取り込みは減る。</p>\n<p><strong>採点基準の言い方:</strong>「間接的な能動輸送 (indirect active transport)」「Na⁺の勾配からのエネルギー」「ナトリウム–カリウムポンプがATPを使ってつくった勾配」。重要性: 腸でのグルコースの完全な吸収と、ネフロンでの再吸収 (グルコースが尿に失われない)。</p>","zh":"<p><strong>小腸細胞中的步驟。</strong></p>\n<ol><li>細胞朝向血液一側的鈉鉀泵利用 ATP，令細胞內的 Na⁺ 濃度保持偏低。</li>\n<li>於是形成 Na⁺ 梯度：細胞外 (腸腔) 高，細胞內低。</li>\n<li>腸腔一側的協同轉運蛋白 (cotransporter) 同時結合 Na⁺ 和葡萄糖，兩者都結合時才運作。</li>\n<li>Na⁺ 順梯度進入，同時帶着葡萄糖，即使細胞內葡萄糖濃度已較高也可吸收。</li>\n<li>葡萄糖由血液一側離開，泵再把 Na⁺ 泵出。</li></ol>\n<table><tr><th></th><th>泵 (直接主動運輸)</th><th>協同轉運蛋白 (間接主動運輸)</th><th>通道 (易化擴散)</th></tr>\n<tr><td>自身使用 ATP？</td><td>是</td><td>否</td><td>否</td></tr>\n<tr><td>能逆梯度移動粒子？</td><td>能</td><td>能 (利用另一種粒子的梯度)</td><td>不能</td></tr>\n<tr><td>能量來源</td><td>ATP</td><td>Na⁺ 梯度</td><td>現有梯度</td></tr></table>\n<p><strong>典型推理題：</strong>某藥物阻斷鈉鉀泵，但不影響協同轉運蛋白。Na⁺ 梯度瓦解，所以即使協同轉運蛋白本身不用 ATP，葡萄糖的吸收仍然下降。</p>\n<p><strong>評分準則用語：</strong>「間接主動運輸 (indirect active transport)」、「能量來自 Na⁺ 梯度」、「梯度由鈉鉀泵利用 ATP 建立」。重要性：在腸中完全吸收葡萄糖，以及在腎單位重吸收葡萄糖，使其不致隨尿液流失。</p>"},
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
        deeper: {"en":"<p><strong>How CAMs work in general.</strong> A CAM is a transmembrane protein. Its outer part binds to a CAM on a neighbouring cell, or to the material between cells, and its inner part links to structures inside the cell. In this way the cells are held together and the force on a tissue is shared among the cells.</p>\n<table><tr><th></th><th>Cell recognition (B2.1.9)</th><th>Cell adhesion (B2.1.17)</th></tr>\n<tr><td>Purpose</td><td>Identify a cell as self or foreign, or as a certain type</td><td>Physically hold cells in a tissue</td></tr>\n<tr><td>Molecules</td><td>Glycoproteins, glycolipids</td><td>CAMs (and glycoproteins)</td></tr></table>\n<p><strong>Why it matters.</strong> Without adhesion, an animal tissue such as the lining of the gut would fall apart into separate cells. In an embryo, cells with matching CAMs stick together, which helps tissues form in the right places. Different forms of CAM suit different junctions: for example, one type seals the gap between cells and another gives strength.</p>\n<p><strong>What earns marks.</strong> “CAMs are membrane proteins that bind cells to each other (or to material between cells)”, and a link to tissue formation. You do not need the names of individual CAMs or junctions.</p>","ja":"<p><strong>CAMのはたらき方の概要。</strong>CAMは膜貫通タンパク質である。外側の部分は隣の細胞のCAMや細胞間の物質と結合し、内側の部分は細胞内の構造とつながる。こうして細胞同士が保たれ、組織にかかる力が細胞間で分担される。</p>\n<table><tr><th></th><th>細胞の認識 (cell recognition, B2.1.9)</th><th>細胞の接着 (cell adhesion, B2.1.17)</th></tr>\n<tr><td>目的</td><td>細胞を自己か異物か、あるいは特定の種類かと識別する</td><td>細胞を組織の中に物理的に保つ</td></tr>\n<tr><td>分子</td><td>糖タンパク質、糖脂質</td><td>CAM (細胞接着分子 cell-adhesion molecule) と糖タンパク質</td></tr></table>\n<p><strong>なぜ重要か。</strong>接着がなければ、腸の内面のような動物の組織はばらばらの細胞に崩れてしまう。胚では、同じCAMをもつ細胞同士がくっつき、組織が正しい場所にできるのを助ける。CAMの種類は結合部の種類に合わせて異なる。例えば、細胞間のすき間を封じる型と、強さを与える型がある。</p>\n<p><strong>得点のポイント。</strong>「CAMは細胞同士 (または細胞間の物質) を結びつける膜タンパク質」と、組織の形成との関連。個々のCAMや結合部の名前は不要。</p>","zh":"<p><strong>CAM 的一般運作方式。</strong>CAM 是跨膜蛋白質。它的外側部分與鄰近細胞的 CAM 或細胞之間的物質結合，內側部分則與細胞內的結構相連。這樣細胞便被固定在一起，組織所受的力由各細胞分擔。</p>\n<table><tr><th></th><th>細胞識別 (cell recognition，B2.1.9)</th><th>細胞黏附 (cell adhesion，B2.1.17)</th></tr>\n<tr><td>目的</td><td>辨別細胞是自身還是外來，或屬於哪一類型</td><td>把細胞實際固定在組織中</td></tr>\n<tr><td>分子</td><td>糖蛋白、糖脂</td><td>CAM (細胞黏附分子 cell-adhesion molecule) 和糖蛋白</td></tr></table>\n<p><strong>為何重要。</strong>沒有黏附，腸壁內襯等動物組織便會散成一個個分離的細胞。在胚胎中，CAM 配對的細胞會黏在一起，幫助組織在正確位置形成。不同形式的 CAM 適合不同的連接：例如一種封閉細胞間的空隙，另一種提供強度。</p>\n<p><strong>得分要點。</strong>「CAM 是把細胞彼此 (或與細胞間物質) 結合的膜蛋白」，並連繫到組織的形成。不需要記個別 CAM 或連接的名稱。</p>"},
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
      { ahl: true, wrong: L("Cholesterol makes membranes more fluid.", "コレステロールは膜をより流動的にする。", "膽固醇令膜更流動。"),
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
          L("The nicotinic acetylcholine receptor opens when acetylcholine binds, letting positive ions such as Na⁺ in.", "ニコチン性アセチルコリン受容体は、アセチルコリンが結合すると開き、Na⁺ などの陽イオンが流入する。", "煙鹼型乙醯膽鹼受體在乙醯膽鹼結合時打開，讓 Na⁺ 等陽離子流入。"),
          L("Voltage-gated sodium channels open when acetylcholine binds to them.", "電位依存性ナトリウムチャネルは、アセチルコリンが結合すると開く。", "電壓門控鈉通道在乙醯膽鹼與其結合時打開。"),
          L("Gated channels use ATP to push ions against their gradients.", "ゲート付きチャネルは ATP を使ってイオンを勾配に逆らって押し出す。", "門控通道利用 ATP 把離子逆梯度推動。"),
          L("Voltage-gated potassium channels let sodium ions through when closed.", "電位依存性カリウムチャネルは閉じているときにナトリウムイオンを通す。", "電壓門控鉀通道在關閉時讓鈉離子通過。")],
        answer: 0,
        explanation: L("The nicotinic acetylcholine receptor is a neurotransmitter-gated channel. B mixes up the two kinds of gating. C is wrong because channels are passive (facilitated diffusion); D is impossible because closed channels let nothing through and potassium channels are specific to K⁺.", "ニコチン性アセチルコリン受容体は神経伝達物質依存性チャネルである。Bは2種類のゲート制御を混同している。Cはチャネルが受動的 (促進拡散) なので誤り。Dは閉じたチャネルは何も通さず、カリウムチャネルは K⁺ に特異的なのでありえない。", "煙鹼型乙醯膽鹼受體是神經遞質門控通道。B 混淆了兩種門控方式；C 錯誤，因為通道是被動的 (易化擴散)；D 不可能，因為關閉的通道不讓任何物質通過，且鉀通道只對 K⁺ 有特異性。")
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
      },
      {"id":"b2-1-q21","type":"short","ahl":false,"difficulty":3,"ref":"B2.1.5","paper":"1B","commandTerm":"Deduce","marks":4,"data":{"en":"<table><tr><th>Sucrose solution (mol dm⁻³)</th><th>Initial mass of potato core (g)</th><th>Final mass after 1 hour (g)</th></tr>\n<tr><td>0.0</td><td>2.00</td><td>2.30</td></tr>\n<tr><td>0.2</td><td>2.00</td><td>2.10</td></tr>\n<tr><td>0.4</td><td>2.00</td><td>1.98</td></tr>\n<tr><td>0.6</td><td>2.00</td><td>1.80</td></tr></table>","ja":"<table><tr><th>スクロース溶液 (mol dm⁻³)</th><th>ジャガイモの棒の最初の質量 (g)</th><th>1時間後の質量 (g)</th></tr>\n<tr><td>0.0</td><td>2.00</td><td>2.30</td></tr>\n<tr><td>0.2</td><td>2.00</td><td>2.10</td></tr>\n<tr><td>0.4</td><td>2.00</td><td>1.98</td></tr>\n<tr><td>0.6</td><td>2.00</td><td>1.80</td></tr></table>","zh":"<table><tr><th>蔗糖溶液 (mol dm⁻³)</th><th>馬鈴薯條的最初質量 (g)</th><th>1 小時後的質量 (g)</th></tr>\n<tr><td>0.0</td><td>2.00</td><td>2.30</td></tr>\n<tr><td>0.2</td><td>2.00</td><td>2.10</td></tr>\n<tr><td>0.4</td><td>2.00</td><td>1.98</td></tr>\n<tr><td>0.6</td><td>2.00</td><td>1.80</td></tr></table>"},"stem":{"en":"Potato cores were left in sucrose solutions of different concentrations, then reweighed (data above). Calculate the percentage change in mass in the 0.6 mol dm⁻³ solution. Deduce the approximate solute concentration of the potato cells. Explain the change in mass in the 0.0 mol dm⁻³ solution.","ja":"ジャガイモの棒を濃度の異なるスクロース溶液に浸し、再び質量を測った (上のデータ)。0.6 mol dm⁻³の溶液での質量の変化率 (%) を計算せよ。ジャガイモ細胞のおよその溶質濃度を推定せよ。0.0 mol dm⁻³の溶液で質量が変化した理由を説明せよ。","zh":"把馬鈴薯條放入不同濃度的蔗糖溶液，之後再稱重 (見上方數據)。計算在 0.6 mol dm⁻³ 溶液中質量的百分比變化。推斷馬鈴薯細胞的大約溶質濃度。解釋在 0.0 mol dm⁻³ 溶液中質量的變化。"},"markscheme":[{"en":"−10 % (−0.20 ÷ 2.00 × 100).","ja":"−10 % (−0.20 ÷ 2.00 × 100)。","zh":"−10 % (−0.20 ÷ 2.00 × 100)。"},{"en":"About 0.37 mol dm⁻³ (accept 0.35–0.40), found by interpolating to where the change in mass is zero (between 0.2 and 0.4).","ja":"約0.37 mol dm⁻³ (0.35〜0.40可)。質量変化がゼロになる点 (0.2と0.4の間) を内挿して求める。","zh":"約 0.37 mol dm⁻³ (接受 0.35–0.40)，由質量變化為零之處 (0.2 與 0.4 之間) 內插得出。"},{"en":"In 0.0 mol dm⁻³ the cells have a higher solute concentration than the solution, so water moves into the cells by osmosis (from lower to higher solute concentration).","ja":"0.0 mol dm⁻³では細胞の方が溶液より溶質濃度が高いので、水は浸透により (溶質濃度の低い方から高い方へ) 細胞に入る。","zh":"在 0.0 mol dm⁻³ 中，細胞的溶質濃度高於溶液，所以水通過滲透作用 (由溶質濃度較低處到較高處) 進入細胞。"},{"en":"This net movement of water into the cells increases the mass (by 15 %).","ja":"この水の細胞内への正味の移動により質量が増える (15 %)。","zh":"水這樣淨移入細胞，令質量增加 (15 %)。"}],"modelAnswer":{"en":"Change = (1.80 − 2.00) ÷ 2.00 × 100 = −10 %. The change in mass is zero at about 0.37 mol dm⁻³ (between 0.2 and 0.4), so the potato cells have about this solute concentration. In pure water the cells have the higher solute concentration, so water moves in by osmosis and the mass rises by 15 %.","ja":"変化率 = (1.80 − 2.00) ÷ 2.00 × 100 = −10 %。質量変化がゼロになるのは約0.37 mol dm⁻³ (0.2と0.4の間) なので、ジャガイモ細胞の溶質濃度はおよそこの値である。純水では細胞の溶質濃度の方が高いので、水が浸透で入り、質量が15 %増える。","zh":"變化 = (1.80 − 2.00) ÷ 2.00 × 100 = −10 %。質量變化為零約在 0.37 mol dm⁻³ (0.2 與 0.4 之間)，所以馬鈴薯細胞的溶質濃度約為此值。在純水中，細胞的溶質濃度較高，水通過滲透作用進入，質量增加 15 %。"}},
      {"id":"b2-1-q22","type":"mcq","ahl":false,"difficulty":2,"ref":"B2.1.7","paper":"1A","stem":{"en":"A respiratory inhibitor is added to root hair cells. It reduces the uptake of potassium ions by 90 % but has no effect on the uptake of oxygen. Which is the best explanation?","ja":"根毛細胞に呼吸阻害剤を加えた。カリウムイオンの取り込みは90 %減ったが、酸素の取り込みには影響がなかった。最も適切な説明はどれか。","zh":"在根毛細胞中加入呼吸抑制劑。鉀離子的吸收減少了 90 %，但氧氣的吸收不受影響。以下哪項是最佳解釋？"},"options":[{"en":"Both substances enter by facilitated diffusion through channel proteins.","ja":"どちらの物質も、チャネルタンパク質を通る促進拡散で入る。","zh":"兩種物質都經通道蛋白以易化擴散進入。"},{"en":"Potassium ions enter by osmosis and oxygen by active transport.","ja":"カリウムイオンは浸透で、酸素は能動輸送で入る。","zh":"鉀離子以滲透作用進入，氧氣以主動運輸進入。"},{"en":"Potassium ions enter by active transport, which needs ATP; oxygen enters by simple diffusion, which does not.","ja":"カリウムイオンはATPが必要な能動輸送で、酸素はATPが不要な単純拡散で入る。","zh":"鉀離子以需要 ATP 的主動運輸進入；氧氣以不需 ATP 的簡單擴散進入。"},{"en":"Potassium ions enter by simple diffusion, and oxygen by pump proteins.","ja":"カリウムイオンは単純拡散で、酸素はポンプタンパク質で入る。","zh":"鉀離子以簡單擴散進入，氧氣經泵蛋白進入。"}],"answer":2,"explanation":{"en":"The inhibitor lowers ATP production, so only an ATP-dependent process (active transport by pumps) is reduced. Oxygen is small and non-polar and crosses by simple diffusion, which needs no ATP. Ions cannot cross by simple diffusion, and osmosis is the movement of water, not ions.","ja":"阻害剤はATPの生産を下げるので、ATPに依存する過程 (ポンプによる能動輸送) だけが減る。酸素は小さく非極性で、ATPを必要としない単純拡散で通る。イオンは単純拡散では通れず、浸透は水の移動でありイオンの移動ではない。","zh":"抑制劑降低 ATP 的生成，所以只有依賴 ATP 的過程 (由泵進行的主動運輸) 會減少。氧氣細小而非極性，以不需 ATP 的簡單擴散穿過。離子不能以簡單擴散穿過，而滲透作用是水的移動，不是離子的移動。"}},
      {"id":"b2-1-q23","type":"short","ahl":false,"difficulty":3,"ref":"B2.1.7","paper":"2","commandTerm":"Explain","marks":4,"stem":{"en":"The concentration of nitrate ions inside a root hair cell is 20 times higher than in the soil water. Explain how nitrate is absorbed, and why uptake falls when the soil is waterlogged.","ja":"根毛細胞内の硝酸イオン濃度は、土壌水の20倍である。硝酸イオンがどのように吸収されるか、また土壌が水浸しになると吸収が落ちる理由を説明せよ。","zh":"根毛細胞內硝酸根的濃度是土壤水的 20 倍。解釋硝酸根如何被吸收，以及土壤積水時吸收量為何下降。"},"markscheme":[{"en":"Nitrate is absorbed by active transport, because it moves against its concentration gradient (from low to high concentration).","ja":"硝酸イオンは濃度勾配に逆らって (低濃度から高濃度へ) 動くので、能動輸送で吸収される。","zh":"硝酸根逆濃度梯度 (由低濃度到高濃度) 移動，所以是以主動運輸被吸收。"},{"en":"Specific pump proteins in the plasma membrane bind the nitrate ions.","ja":"細胞膜の特異的なポンプタンパク質が硝酸イオンと結合する。","zh":"質膜上特定的泵蛋白與硝酸根結合。"},{"en":"The pumps use ATP (from aerobic respiration) to change shape and move the ions into the cell.","ja":"ポンプは (好気呼吸で得た) ATPを使って形を変え、イオンを細胞内へ運ぶ。","zh":"泵利用 (來自有氧呼吸的) ATP 改變形狀，把離子移入細胞。"},{"en":"Waterlogged soil has little oxygen, so aerobic respiration slows, less ATP is made and the pumps work more slowly, so less nitrate is absorbed.","ja":"水浸しの土壌は酸素が乏しく、好気呼吸が遅くなってATPが減り、ポンプの働きが遅くなるので、硝酸イオンの吸収が減る。","zh":"積水的土壤缺氧，有氧呼吸減慢，ATP 減少，泵運作變慢，所以吸收的硝酸根減少。"}],"modelAnswer":{"en":"Nitrate moves against its concentration gradient, so it is absorbed by active transport. Specific pump proteins bind the ions and use ATP from aerobic respiration to change shape and move them into the cell. In waterlogged soil there is little oxygen, so less ATP is made and the pumps work more slowly, reducing uptake.","ja":"硝酸イオンは濃度勾配に逆らって動くので、能動輸送で吸収される。特異的なポンプタンパク質がイオンと結合し、好気呼吸で得たATPを使って形を変え、細胞内へ運ぶ。水浸しの土壌では酸素が乏しくATPが減るため、ポンプの働きが遅くなり、取り込みが減る。","zh":"硝酸根逆濃度梯度移動，所以是以主動運輸被吸收。特定的泵蛋白與離子結合，利用有氧呼吸產生的 ATP 改變形狀，把離子移入細胞。積水的土壤氧氣不足，ATP 減少，泵運作變慢，吸收量因而下降。"}},
      {"id":"b2-1-q24","type":"short","ahl":true,"difficulty":3,"ref":"B2.1.11","paper":"1B","commandTerm":"Suggest","marks":3,"data":{"en":"<table><tr><th>Temperature at which the fish were kept (°C)</th><th>Unsaturated fatty acids in membrane phospholipids (%)</th></tr>\n<tr><td>5</td><td>62</td></tr><tr><td>15</td><td>48</td></tr><tr><td>25</td><td>35</td></tr></table>","ja":"<table><tr><th>魚を飼った水温 (°C)</th><th>膜リン脂質中の不飽和脂肪酸 (%)</th></tr>\n<tr><td>5</td><td>62</td></tr><tr><td>15</td><td>48</td></tr><tr><td>25</td><td>35</td></tr></table>","zh":"<table><tr><th>飼養魚類的溫度 (°C)</th><th>膜磷脂中不飽和脂肪酸的百分比 (%)</th></tr>\n<tr><td>5</td><td>62</td></tr><tr><td>15</td><td>48</td></tr><tr><td>25</td><td>35</td></tr></table>"},"stem":{"en":"Groups of the same species of fish were kept at three temperatures for several weeks. The data above show the percentage of unsaturated fatty acids in their membrane phospholipids. Suggest the reason for the trend shown.","ja":"同じ種の魚のグループを3つの水温で数週間飼った。上のデータは、膜リン脂質中の不飽和脂肪酸の割合を示している。この傾向の理由を推測せよ。","zh":"把同一物種的魚群分別在三種溫度下飼養數星期。上方數據顯示其膜磷脂中不飽和脂肪酸的百分比。試推測所見趨勢的原因。"},"markscheme":[{"en":"As temperature falls, the percentage of unsaturated fatty acids rises (62 % at 5 °C compared with 35 % at 25 °C).","ja":"水温が下がるほど不飽和脂肪酸の割合が増える (25 °Cで35 %、5 °Cで62 %)。","zh":"溫度下降時，不飽和脂肪酸的百分比上升 (5 °C 時 62 %，25 °C 時 35 %)。"},{"en":"Unsaturated fatty acids have kinked tails that pack loosely, so the membrane stays fluid at low temperature.","ja":"不飽和脂肪酸の尾部は折れ曲がってゆるく詰まるので、低温でも膜が流動的に保たれる。","zh":"不飽和脂肪酸的尾部彎曲、堆疊疏鬆，所以低溫下膜仍保持流動。"},{"en":"Saturated fatty acids pack tightly and would make the membrane too rigid in the cold, so proteins and vesicles could not move properly; at higher temperature, more saturated tails stop the membrane becoming too fluid.","ja":"寒いところで飽和脂肪酸が多いと密に詰まって膜が硬くなりすぎ、タンパク質や小胞が正しく動けない。高温では飽和の尾部が多いほど膜が流れすぎるのを防ぐ。","zh":"飽和脂肪酸堆疊緊密，在低溫下會令膜太硬，蛋白質和囊泡便不能正常移動；溫度較高時，較多飽和尾部可防止膜太流動。"}],"modelAnswer":{"en":"The fish change their membrane composition with temperature: at 5 °C 62 % of the fatty acids are unsaturated, but at 25 °C only 35 %. Unsaturated tails are kinked and pack loosely, which keeps the membrane fluid in the cold so that proteins and vesicles can still move. More saturated tails at higher temperature stop the membrane becoming too fluid.","ja":"魚は温度に応じて膜の組成を変える。5 °Cでは脂肪酸の62 %が不飽和だが、25 °Cでは35 %にすぎない。不飽和の尾部は折れ曲がってゆるく詰まるため、寒さの中でも膜が流動的に保たれ、タンパク質や小胞が動き続けられる。高温では飽和の尾部が多いほど、膜が流れすぎるのを防ぐ。","zh":"魚會隨溫度改變膜的組成：5 °C 時 62 % 的脂肪酸是不飽和的，25 °C 時只有 35 %。不飽和尾部彎曲、堆疊疏鬆，令膜在低溫下保持流動，蛋白質和囊泡仍能移動。溫度較高時較多的飽和尾部可防止膜太流動。"}},
      {"id":"b2-1-q25","type":"short","ahl":true,"difficulty":2,"ref":"B2.1.15","paper":"2","commandTerm":"Calculate","marks":4,"stem":{"en":"A neuron’s sodium–potassium pumps complete 1000 cycles. Calculate (a) the number of ATP molecules used, (b) the number of Na⁺ ions moved out, (c) the number of K⁺ ions moved in, and (d) the net number of positive charges removed from the cell.","ja":"ニューロンのナトリウム–カリウムポンプが1000サイクル行われた。(a) 使われたATP分子の数、(b) 細胞外へ出たNa⁺の数、(c) 細胞内へ入ったK⁺の数、(d) 細胞から取り除かれた正電荷の正味の数を計算せよ。","zh":"某神經元的鈉鉀泵完成 1000 個循環。計算 (a) 所用 ATP 分子數目、(b) 移出的 Na⁺ 數目、(c) 移入的 K⁺ 數目、(d) 細胞淨失去的正電荷數目。"},"markscheme":[{"en":"(a) 1000 ATP (one per cycle).","ja":"(a) ATP 1000個 (1サイクルにつき1個)。","zh":"(a) 1000 個 ATP (每循環 1 個)。"},{"en":"(b) 3000 Na⁺ out (3 per cycle).","ja":"(b) Na⁺ 3000個が細胞外へ (1サイクルにつき3個)。","zh":"(b) 移出 3000 個 Na⁺ (每循環 3 個)。"},{"en":"(c) 2000 K⁺ in (2 per cycle).","ja":"(c) K⁺ 2000個が細胞内へ (1サイクルにつき2個)。","zh":"(c) 移入 2000 個 K⁺ (每循環 2 個)。"},{"en":"(d) 3000 − 2000 = 1000 net positive charges removed, which makes the inside of the cell more negative.","ja":"(d) 3000 − 2000 = 正電荷の正味1000個が除かれ、細胞の内側がより負になる。","zh":"(d) 3000 − 2000 = 淨移走 1000 個正電荷，令細胞內更呈負。"}],"modelAnswer":{"en":"Each cycle uses 1 ATP, moves 3 Na⁺ out and 2 K⁺ in. For 1000 cycles: 1000 ATP, 3000 Na⁺ out, 2000 K⁺ in, and a net loss of 3000 − 2000 = 1000 positive charges, so the cell interior becomes more negative.","ja":"1サイクルでATP 1個を使い、Na⁺ 3個を外へ、K⁺ 2個を内へ運ぶ。1000サイクルでは、ATP 1000個、Na⁺ 3000個が外へ、K⁺ 2000個が内へ、正電荷の正味の損失は3000 − 2000 = 1000個で、細胞の内側はより負になる。","zh":"每個循環使用 1 個 ATP，移出 3 個 Na⁺，移入 2 個 K⁺。1000 個循環：1000 個 ATP，移出 3000 個 Na⁺，移入 2000 個 K⁺，淨失去 3000 − 2000 = 1000 個正電荷，所以細胞內更呈負。"}}
    ]
  });
})();
