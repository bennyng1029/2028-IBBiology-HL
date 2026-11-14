/* Membrane transport lab — B2.1. See SPEC.md "Widget API".
   Modes (SL): simple diffusion, facilitated diffusion (channel), osmosis (+aquaporins), active transport (pump + ATP).
   Modes (AHL, only shown when IB.level !== 'sl'): gated channel, sodium–potassium pump,
   sodium-dependent glucose cotransporter (indirect active transport), endocytosis / exocytosis. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  function fill(n, a, kids) {
    if (a) for (var k in a) {
      var v = a[k];
      if (v == null || v === false) continue;
      if (k === "text") n.textContent = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    if (kids != null) (Array.isArray(kids) ? kids : [kids]).forEach(function (c) {
      if (c == null || c === false) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function el(tag, a, kids) { return fill(document.createElement(tag), a, kids); }
  function sv(tag, a, kids) { return fill(document.createElementNS(NS, tag), a, kids); }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion:reduce)").matches; } catch (e) { return false; } }

  /* ---------- strings: [en, ja, zh] ---------- */
  var S = {
    outside: ["Outside the cell", "細胞外 (outside)", "細胞外 (outside)"],
    inside: ["Inside the cell", "細胞内 (inside)", "細胞內 (inside)"],
    more: ["Explanation", "説明", "解說"],
    modeTitle: ["Choose a mechanism", "しくみを選ぶ", "選擇機制"],
    m_diff: ["Simple diffusion", "単純拡散 (simple diffusion)", "簡單擴散 (simple diffusion)"],
    m_chan: ["Facilitated diffusion (channel)", "促進拡散 (facilitated diffusion)：チャネル", "易化擴散 (facilitated diffusion)：通道"],
    m_osm: ["Osmosis", "浸透 (osmosis)", "滲透 (osmosis)"],
    m_act: ["Active transport (pump)", "能動輸送 (active transport)：ポンプ", "主動運輸 (active transport)：泵"],
    m_gate: ["Gated channel", "ゲート付きチャネル (gated channel)", "門控通道 (gated channel)"],
    m_nak: ["Na⁺/K⁺ pump", "Na⁺/K⁺ ポンプ (sodium–potassium pump)", "鈉鉀泵 (sodium–potassium pump)"],
    m_sglt: ["Na⁺–glucose cotransporter", "Na⁺・グルコース共輸送体 (cotransporter)", "鈉–葡萄糖協同運輸體 (cotransporter)"],
    m_vesc: ["Endo- / exocytosis", "エンド／エキソサイトーシス", "胞吞／胞吐 (endo- / exocytosis)"],
    ptype: ["Particle:", "粒子:", "粒子："],
    p_np: ["O₂ / CO₂ (small, non-polar)", "O₂ / CO₂ (小さく無極性)", "O₂ / CO₂ (細小、非極性)"],
    p_ion: ["Ion / polar molecule", "イオン／極性分子", "離子／極性分子"],
    cOut: ["Concentration outside", "細胞外の濃度 (outside)", "細胞外濃度 (outside)"],
    cIn: ["Concentration inside", "細胞内の濃度 (inside)", "細胞內濃度 (inside)"],
    sOut: ["Solute concentration outside", "細胞外の溶質濃度", "細胞外溶質濃度"],
    sIn: ["Solute concentration inside", "細胞内の溶質濃度", "細胞內溶質濃度"],
    gOut: ["Glucose outside", "細胞外のグルコース (glucose)", "細胞外葡萄糖 (glucose)"],
    gIn: ["Glucose inside", "細胞内のグルコース (glucose)", "細胞內葡萄糖 (glucose)"],
    atpOn: ["ATP supply: ON", "ATP の供給: あり (ON)", "ATP 供應：有 (ON)"],
    atpOff: ["ATP supply: OFF", "ATP の供給: なし (OFF)", "ATP 供應：沒有 (OFF)"],
    gate_lig: ["Neurotransmitter-gated (ACh)", "神経伝達物質依存性 (ACh)", "神經遞質門控 (ACh)"],
    gate_volt: ["Voltage-gated (Na⁺)", "電位依存性 (Na⁺)", "電壓門控 (Na⁺)"],
    sig_lig0: ["No ACh bound: gate closed", "ACh が結合していない: ゲートは閉", "未有 ACh 結合：門關閉"],
    sig_lig1: ["ACh bound: gate open", "ACh が結合: ゲートは開", "ACh 已結合：門開啟"],
    sig_volt0: ["Resting voltage: gate closed", "静止時の電位: ゲートは閉", "靜息電壓：門關閉"],
    sig_volt1: ["Threshold voltage reached: gate open", "閾値の電位に達した: ゲートは開", "達到閾值電壓：門開啟"],
    play: ["Play", "再生", "播放"], pause: ["Pause", "一時停止", "暫停"],
    step: ["Step", "コマ送り", "逐步"], reset: ["Reset", "リセット", "重設"],
    prev: ["Previous stage", "前の段階", "上一階段"], next: ["Next stage", "次の段階", "下一階段"],
    endo: ["Endocytosis", "エンドサイトーシス (endocytosis)", "胞吞作用 (endocytosis)"],
    exo: ["Exocytosis", "エキソサイトーシス (exocytosis)", "胞吐作用 (exocytosis)"],
    stage: ["Stage", "段階", "階段"],
    grad: ["Concentration gradient", "濃度勾配 (concentration gradient)", "濃度梯度 (concentration gradient)"],
    counts: ["Particles now", "現在の粒子数", "現時點的粒子數目"],
    meas: ["Crossings in the last 8 s", "直近8秒の通過数", "最近 8 秒的穿越次數"],
    cin: ["into the cell", "細胞内へ", "進入細胞"],
    cout: ["out of the cell", "細胞外へ", "離開細胞"],
    net: ["Net movement", "正味の移動", "淨移動"],
    inn: ["into the cell", "細胞内へ", "進入細胞"],
    outn: ["out of the cell", "細胞外へ", "離開細胞"],
    none: ["none (dynamic equilibrium: particles still move both ways)", "なし (動的平衡: 粒子は両方向に動き続ける)", "沒有 (動態平衡：粒子仍向兩個方向移動)"],
    waiting: ["measuring…", "測定中…", "量度中…"],
    legendT: ["Key", "凡例", "圖例"],
    l_np: ["O₂ / CO₂", "O₂ / CO₂", "O₂ / CO₂"],
    l_ion: ["ion / polar molecule", "イオン／極性分子", "離子／極性分子"],
    l_sol: ["solute (cannot cross)", "溶質 (通れない)", "溶質 (不能穿過)"],
    l_w: ["water", "水 (water)", "水 (water)"],
    l_na: ["Na⁺", "Na⁺", "Na⁺"], l_k: ["K⁺", "K⁺", "K⁺"],
    l_g: ["glucose", "グルコース", "葡萄糖"],
    p_chan: ["channel protein", "チャネルタンパク質 (channel protein)", "通道蛋白 (channel protein)"],
    p_aqua: ["aquaporin", "アクアポリン (aquaporin)", "水通道蛋白 (aquaporin)"],
    p_pump: ["pump protein", "ポンプタンパク質 (pump protein)", "泵蛋白 (pump protein)"],
    p_gch: ["gated channel", "ゲート付きチャネル", "門控通道"],
    p_nak: ["Na⁺/K⁺ pump", "Na⁺/K⁺ ポンプ", "鈉鉀泵"],
    p_cot: ["cotransporter", "共輸送体 (cotransporter)", "協同運輸體 (cotransporter)"],
    p_bil: ["phospholipid bilayer", "リン脂質二重層", "磷脂雙層"],
    atpflash: ["ATP → ADP + Pᵢ", "ATP → ADP + Pᵢ", "ATP → ADP + Pᵢ"],
    ahl: ["AHL", "AHL", "AHL"],
    /* predictions */
    pr_np_in: ["High outside, low inside: O₂ / CO₂ diffuse into the cell (down the gradient).", "細胞外が高く細胞内が低い: O₂ / CO₂ は濃度勾配に従って細胞内へ拡散する。", "細胞外濃度高、細胞內低：O₂ / CO₂ 順濃度梯度擴散進入細胞。"],
    pr_np_out: ["High inside, low outside: O₂ / CO₂ diffuse out of the cell (down the gradient).", "細胞内が高く細胞外が低い: O₂ / CO₂ は濃度勾配に従って細胞外へ拡散する。", "細胞內濃度高、細胞外低：O₂ / CO₂ 順濃度梯度擴散離開細胞。"],
    pr_eq: ["Equal concentrations: no net movement.", "濃度が等しい: 正味の移動はない。", "濃度相等：沒有淨移動。"],
    pr_ion_blocked: ["Ions and polar molecules cannot dissolve in the hydrophobic core: the bilayer blocks them, whatever the gradient.", "イオンや極性分子は疎水性の中心部に溶けない: 勾配にかかわらず二重層が通さない。", "離子和極性分子不能溶於疏水核心：不論梯度如何，雙層都阻擋它們。"],
    pr_ch_in: ["High outside, low inside: ions move in through the channels, down the gradient, with no ATP.", "細胞外が高く細胞内が低い: イオンは ATP なしで、濃度勾配に従ってチャネルから細胞内へ入る。", "細胞外濃度高、細胞內低：離子經通道順梯度進入細胞，不需 ATP。"],
    pr_ch_out: ["High inside, low outside: ions move out through the channels, down the gradient, with no ATP.", "細胞内が高く細胞外が低い: イオンは ATP なしで、濃度勾配に従ってチャネルから細胞外へ出る。", "細胞內濃度高、細胞外低：離子經通道順梯度離開細胞，不需 ATP。"],
    pr_osm_in: ["More solute inside: net movement of water is into the cell (towards the higher solute concentration).", "細胞内の溶質が多い: 水は溶質濃度の高い細胞内へ正味で移動する。", "細胞內溶質較多：水淨移入細胞 (朝向溶質濃度較高處)。"],
    pr_osm_out: ["More solute outside: net movement of water is out of the cell (towards the higher solute concentration).", "細胞外の溶質が多い: 水は溶質濃度の高い細胞外へ正味で移動する。", "細胞外溶質較多：水淨移出細胞 (朝向溶質濃度較高處)。"],
    pr_osm_eq: ["Equal solute concentrations: no net movement of water.", "溶質濃度が等しい: 水の正味の移動はない。", "溶質濃度相等：水沒有淨移動。"],
    pr_act_on_with: ["The pump uses ATP to move particles into the cell. Here that is down the gradient, but a pump could do it either way.", "ポンプは ATP を使って粒子を細胞内へ運ぶ。ここでは勾配に従う向きだが、ポンプは勾配に関係なく運べる。", "泵利用 ATP 把粒子運入細胞。這裏是順梯度，但泵順逆梯度均可運送。"],
    pr_act_on_against: ["The pump uses ATP to move particles into the cell AGAINST the gradient (from low to high concentration).", "ポンプは ATP を使い、粒子を濃度勾配に逆らって (低濃度から高濃度へ) 細胞内へ運ぶ。", "泵利用 ATP 把粒子逆梯度 (由低濃度往高濃度) 運入細胞。"],
    pr_act_off: ["No ATP, no pumping: this ion cannot cross the bilayer, so nothing moves.", "ATP がなければポンプは働かない: このイオンは二重層を通れないので、何も動かない。", "沒有 ATP，泵不運作：此離子不能穿過雙層，所以沒有任何移動。"],
    pr_gate_closed: ["The gate is closed: no ions can pass, even though there is a gradient.", "ゲートが閉じている: 勾配があってもイオンは通れない。", "門是關閉的：即使有梯度，離子也不能通過。"],
    pr_gate_open_in: ["Gate open: ions diffuse in down the gradient (no ATP).", "ゲートが開いている: イオンは ATP なしで勾配に従い細胞内へ拡散する。", "門已開啟：離子順梯度擴散進入 (不需 ATP)。"],
    pr_gate_open_out: ["Gate open: ions diffuse out down the gradient (no ATP).", "ゲートが開いている: イオンは ATP なしで勾配に従い細胞外へ拡散する。", "門已開啟：離子順梯度擴散離開 (不需 ATP)。"],
    pr_nak_on: ["Each cycle: 3 Na⁺ out and 2 K⁺ in, both against their gradients, using 1 ATP. Watch Na⁺ build up outside and K⁺ inside.", "1サイクルで ATP を1個使い、Na⁺ 3個を外へ、K⁺ 2個を内へ運ぶ (どちらも勾配に逆らう)。Na⁺ が外に、K⁺ が内に増えていく。", "每個循環用 1 個 ATP，把 3 個 Na⁺ 運出、2 個 K⁺ 運入 (都逆梯度)。留意 Na⁺ 在外積聚、K⁺ 在內積聚。"],
    pr_nak_off: ["No ATP: the pump stops and the gradients are not built.", "ATP がなければポンプは止まり、勾配はできない。", "沒有 ATP：泵停止，梯度不會建立。"],
    pr_sglt_ok: ["Na⁺ moves in down its gradient and carries glucose with it, even against the glucose gradient. The cotransporter itself uses no ATP.", "Na⁺ は勾配に従って入り、グルコースを一緒に運ぶ (グルコースの勾配に逆らってもよい)。共輸送体自身は ATP を使わない。", "Na⁺ 順梯度進入，並帶着葡萄糖一同進入 (即使逆葡萄糖的梯度)。協同運輸體本身不用 ATP。"],
    pr_sglt_stop: ["The Na⁺ gradient has run down (more Na⁺ inside than outside), so the cotransporter stops. Turn ATP back on to restore it.", "Na⁺ の勾配が失われた (細胞内の Na⁺ が外より多い) ので、共輸送体は止まる。ATP をオンに戻すと回復する。", "Na⁺ 梯度已消失 (細胞內 Na⁺ 多於細胞外)，協同運輸體停止。把 ATP 重新開啟便可恢復。"],
    /* descriptions */
    d_diff: ["Small non-polar molecules such as O₂ and CO₂ dissolve in the hydrophobic tails and pass between the phospholipids. The net movement is down the concentration gradient. No protein and no ATP are needed. Ions and polar molecules are blocked. Permeability by simple diffusion depends only on size and on whether the particle is hydrophobic or hydrophilic, so it is not selective.",
      "O₂ や CO₂ のような小さな無極性分子は、疎水性の尾部に溶けてリン脂質の間を通る。正味の移動は濃度勾配に従う向きで、タンパク質も ATP も不要である。イオンや極性分子は通れない。単純拡散での透過性は、大きさと、粒子が疎水性か親水性かだけで決まるので、選択的ではない。",
      "O₂ 和 CO₂ 等細小的非極性分子溶於疏水尾部，並穿過磷脂之間。淨移動方向順濃度梯度，不需蛋白質和 ATP。離子和極性分子被阻擋。簡單擴散的透過性只取決於大小及粒子是疏水還是親水，所以沒有選擇性。"],
    d_chan: ["Ions cannot cross the hydrophobic core, but they can diffuse through a channel protein. This is facilitated diffusion: still passive (down the gradient, no ATP). Each channel fits a specific ion, so this makes the membrane selectively permeable.",
      "イオンは疎水性の中心部を通れないが、チャネルタンパク質を通って拡散できる。これが促進拡散で、受動的 (勾配に従い ATP は不要) である。各チャネルは特定のイオンに合うので、膜が選択的透過性をもつようになる。",
      "離子不能穿過疏水核心，但可經通道蛋白擴散。這就是易化擴散：仍是被動的 (順梯度、不需 ATP)。每種通道只適合特定離子，所以令膜具選擇透過性。"],
    d_osm: ["Water molecules move randomly in both directions. The solute cannot cross. Where solute concentration is higher, a smaller share of the particles are water, so fewer water molecules hit the membrane from that side. So the net movement of water is towards the higher solute concentration. Aquaporins let water cross much faster than the bilayer alone. (In this model the volumes are fixed, so the net movement fades as the water evens out. In a real cell, the volume would change.)",
      "水分子は両方向にランダムに動く。溶質は通れない。溶質濃度が高い側では、粒子のうち水の割合が小さく、その側から膜に当たる水分子が少ない。そのため水の正味の移動は溶質濃度の高い側へ向かう。アクアポリンがあると、二重層だけの場合よりずっと速く水が通る。(このモデルでは体積が固定なので、水が均等になるにつれ正味の移動は弱まる。実際の細胞では体積が変わる。)",
      "水分子向兩個方向隨機移動，溶質不能穿過。溶質濃度較高的一側，粒子中水所佔比例較小，所以從該側撞向膜的水分子較少。因此水的淨移動朝向溶質濃度較高處。水通道蛋白令水穿過膜的速度比單靠雙層快得多。(此模型的體積是固定的，所以當水變得均等時，淨移動會減弱；真實的細胞體積會改變。)"],
    d_act: ["A pump protein uses energy from ATP to carry specific particles across the membrane. Because energy is used, pumps can move particles against a concentration gradient, from low to high concentration. The ions cannot cross the bilayer by themselves. If ATP is switched off, pumping stops.",
      "ポンプタンパク質は ATP のエネルギーを使い、特定の粒子を膜の反対側へ運ぶ。エネルギーを使うので、ポンプは粒子を濃度勾配に逆らって、低濃度から高濃度へ運べる。イオンは二重層を自力では通れない。ATP をオフにするとポンプは止まる。",
      "泵蛋白利用 ATP 的能量把特定粒子運過膜。由於耗用能量，泵可以把粒子逆濃度梯度由低濃度運往高濃度。離子本身不能穿過雙層。關閉 ATP 後，泵便停止運作。"],
    d_gate: ["Many channels in neurons have a gate. The gate is closed until a signal opens it. A neurotransmitter-gated channel (for example the nicotinic acetylcholine receptor) opens when the neurotransmitter binds. A voltage-gated channel (for example a sodium channel) opens at a particular membrane voltage. When open, ions diffuse down their gradient (facilitated diffusion, no ATP).",
      "ニューロンの多くのチャネルにはゲートがあり、信号で開くまで閉じている。神経伝達物質依存性チャネル (例: ニコチン性アセチルコリン受容体) は神経伝達物質が結合すると開く。電位依存性チャネル (例: ナトリウムチャネル) は特定の膜電位で開く。開くとイオンは勾配に従って拡散する (促進拡散、ATP は不要)。",
      "神經元的很多通道有「門」，在訊號令它開啟前一直關閉。神經遞質門控通道 (例如菸鹼型乙酰膽鹼受體) 在神經遞質結合時打開；電壓門控通道 (例如鈉通道) 在特定膜電壓下打開。開啟後離子順梯度擴散 (易化擴散，不需 ATP)。"],
    d_nak: ["The sodium–potassium pump is an exchange transporter. Each cycle uses one ATP to move 3 Na⁺ out and 2 K⁺ in. It makes Na⁺ high outside and K⁺ high inside, and it moves more positive charge out than in. Together with K⁺ leaking back out through open potassium channels, this makes the inside negative: the pump helps to set up the membrane potential.",
      "ナトリウム・カリウムポンプは交換輸送体である。1サイクルで ATP を1個使い、Na⁺ 3個を外へ、K⁺ 2個を内へ運ぶ。Na⁺ は外側で、K⁺ は内側で高くなり、出る正電荷が入る正電荷より多い。K⁺ が開いたカリウムチャネルから外へ漏れ出ることと合わせて内側が負になり、ポンプは膜電位をつくるのに役立つ。",
      "鈉鉀泵是交換運輸體。每個循環用 1 個 ATP，把 3 個 Na⁺ 運出、2 個 K⁺ 運入。它令 Na⁺ 外高、K⁺ 內高，並運出較運入更多的正電荷；加上 K⁺ 經開啟的鉀通道漏出，令內部變負，所以泵有助建立膜電位。"],
    d_sglt: ["The sodium-dependent glucose cotransporter is an example of indirect active transport. A Na⁺/K⁺ pump (using ATP) keeps Na⁺ low inside the cell. Na⁺ then flows in through the cotransporter, but only if glucose binds too, so glucose is carried in even against its own gradient. The cotransporter does not use ATP directly. This is how cells of the small intestine absorb glucose and cells of the nephron reabsorb it.",
      "ナトリウム依存性グルコース共輸送体は間接的能動輸送の例である。Na⁺/K⁺ ポンプ (ATP を使う) が細胞内の Na⁺ を低く保つ。Na⁺ は共輸送体を通って入るが、グルコースも結合したときだけなので、グルコースはそれ自身の勾配に逆らっても運び込まれる。共輸送体自身は ATP を直接使わない。小腸の細胞がグルコースを吸収し、ネフロンの細胞が再吸収するしくみである。",
      "鈉依賴性葡萄糖協同運輸體是間接主動運輸的例子。Na⁺/K⁺ 泵 (使用 ATP) 令細胞內 Na⁺ 保持低濃度。Na⁺ 經協同運輸體流入，但只有葡萄糖也結合時才可，所以葡萄糖即使逆它本身的梯度也被帶入。協同運輸體本身不直接使用 ATP。小腸細胞吸收葡萄糖及腎單位細胞重吸收葡萄糖，便是靠這個機制。"],
    d_vesc: ["Because the membrane is fluid, a piece of it can bend, pinch off and fuse. Endocytosis takes material into the cell inside a vesicle made from the plasma membrane (for example a white blood cell engulfing a bacterium). Exocytosis releases material when a vesicle fuses with the plasma membrane (for example insulin secretion or neurotransmitter release).",
      "膜は流動的なので、一部が曲がり、くびれ切れ、融合できる。エンドサイトーシスは、細胞膜からできた小胞に包んで物質を細胞内へ取り込む (例: 白血球が細菌を取り込む)。エキソサイトーシスは、小胞が細胞膜と融合して物質を放出する (例: インスリンの分泌、神経伝達物質の放出)。",
      "由於膜具流動性，一片膜可以彎曲、脫離和融合。胞吞作用把物質包在由質膜形成的囊泡內帶入細胞 (例如白血球吞入細菌)；胞吐作用則在囊泡與質膜融合時釋出物質 (例如分泌胰島素、釋出神經遞質)。"],
    /* vesicle stages */
    e0: ["1. Material outside the cell lies next to the plasma membrane.", "1. 細胞外の物質が細胞膜のそばにある。", "1. 細胞外的物質靠近質膜。"],
    e1: ["2. The fluid membrane bends inwards and begins to surround the material.", "2. 流動的な膜が内側へ曲がり、物質を囲み始める。", "2. 流動的膜向內彎曲，開始包圍物質。"],
    e2: ["3. The edges of the membrane meet and are about to fuse.", "3. 膜の縁が近づき、融合しようとしている。", "3. 膜的邊緣靠近，快要融合。"],
    e3: ["4. The membrane fuses and the vesicle, holding the material, pinches off into the cytoplasm.", "4. 膜が融合し、物質を含む小胞が細胞質へくびれ切れる。", "4. 膜融合，載有物質的囊泡脫離，進入細胞質。"],
    x0: ["1. A vesicle containing material is inside the cell.", "1. 物質を含む小胞が細胞内にある。", "1. 載有物質的囊泡在細胞內。"],
    x1: ["2. The vesicle moves to the plasma membrane and touches it.", "2. 小胞が細胞膜へ移動し、接触する。", "2. 囊泡移向質膜並與之接觸。"],
    x2: ["3. The vesicle membrane fuses with the plasma membrane and opens to the outside.", "3. 小胞の膜が細胞膜と融合し、外側へ開く。", "3. 囊泡膜與質膜融合，向外側開口。"],
    x3: ["4. The contents are released outside. The vesicle membrane is now part of the plasma membrane.", "4. 内容物が細胞外へ放出される。小胞の膜は細胞膜の一部になった。", "4. 內容物釋出細胞外，囊泡膜成為質膜的一部分。"]
  };
  var MODES = [
    { id: "diff", ahl: false }, { id: "chan", ahl: false }, { id: "osm", ahl: false }, { id: "act", ahl: false },
    { id: "gate", ahl: true }, { id: "nak", ahl: true }, { id: "sglt", ahl: true }, { id: "vesc", ahl: true }
  ];
  var DEF = { diff: [12, 3], chan: [12, 3], osm: [1, 10], act: [5, 10], gate: [12, 3], sglt: [4, 10] };

  var CSS =
    ".W{font:15px/1.5 system-ui,-apple-system,'Segoe UI','Hiragino Sans','Noto Sans JP','Noto Sans TC',sans-serif;color:var(--ink,#101826);max-width:100%;text-align:left}" +
    ".W *{box-sizing:border-box}" +
    ".W .tabs{display:flex;gap:4px;margin:0 0 8px;overflow-x:auto;align-items:stretch}" +
    ".W .tabs button{flex:none;min-height:42px;padding:4px 12px}" +
    ".W .row{display:flex;flex-wrap:wrap;gap:6px;margin:0;align-items:center}" +
    ".W [hidden]{display:none!important}" +
    ".W button{font:inherit;font-size:14px;min-height:44px;min-width:44px;padding:6px 12px;border:1.5px solid var(--line-strong,#9FACBD);background:var(--surface,#fff);color:var(--ink,#101826);border-radius:var(--radius,3px);cursor:pointer;line-height:1.25}" +
    ".W button:hover:not(:disabled){border-color:var(--accent,#0A6C7D)}" +
    ".W button[aria-pressed=true]{background:var(--accent,#0A6C7D);color:var(--on-accent,#fff);border-color:var(--accent,#0A6C7D)}" +
    ".W button:disabled{opacity:.45;cursor:default}" +
    ".W button:focus-visible,.W input:focus-visible{outline:3px solid var(--accent,#0A6C7D);outline-offset:2px}" +
    ".W .ahl{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.05em;padding:0 6px;border-radius:99px;background:var(--ahl,#6238CC);color:var(--ahl-ink,#fff);margin-left:6px;vertical-align:middle}" +
    ".W button[aria-pressed=true] .ahl{outline:1px solid var(--on-accent,#fff)}" +
    ".W .opts button{flex:1 1 8rem;min-height:40px;padding:4px 8px;font-size:13px}" +
    ".W .ctlrow button{flex:1;min-height:40px;padding:2px 8px}" +
    ".W .sls{display:grid;grid-template-columns:repeat(auto-fit,minmax(9rem,1fr));gap:2px 12px}" +
    ".W details summary{cursor:pointer;font-weight:700;font-size:14px;min-height:36px;display:flex;align-items:center}" +
    ".W details .desc{margin:2px 0 4px;font-size:13.5px}" +
    ".W svg{width:100%;height:auto;display:block;background:var(--surface,#fff);border:1px solid var(--line,#D3DAE5);border-radius:var(--radius,3px);touch-action:manipulation}" +
    ".W svg text{fill:var(--ink,#101826);font:12.5px system-ui,-apple-system,'Hiragino Sans','Noto Sans JP','Noto Sans TC',sans-serif;paint-order:stroke;stroke:var(--surface,#fff);stroke-width:3px;stroke-linejoin:round}" +
    ".W .sl{margin:0}.W .sl label{display:flex;justify-content:space-between;gap:6px;font-weight:600;font-size:13px;line-height:1.25}" +
    ".W input[type=range]{width:100%;min-height:34px;margin:0;accent-color:var(--accent,#0A6C7D)}" +
    ".W .panel{background:var(--surface-2,#EDF1F6);border:1px solid var(--line,#D3DAE5);border-radius:var(--radius,3px);padding:6px 10px;margin:0;font-size:13.5px;line-height:1.4}" +
    ".W .panel p{margin:1px 0}" +
    ".W .desc{font-size:14px;margin:8px 0}" +
    ".W .key{display:flex;flex-wrap:wrap;gap:2px 14px;font-size:13px;margin:6px 0 0;color:var(--muted,#566376)}" +
    ".W .key svg{display:inline-block;width:14px;height:14px;border:0;background:none;vertical-align:-2px;margin-right:4px}" +
    ".W .big{font-weight:700}" +
    ".W .stagebox{font-size:14.5px;font-weight:600;margin:0;padding:6px 10px;background:var(--surface-2,#EDF1F6);border:1px solid var(--line,#D3DAE5);border-radius:var(--radius,3px)}" +
    "@media (prefers-reduced-motion:reduce){.W *{transition:none!important;animation:none!important}}";
  function css() {
    if (document.getElementById("w-style-membrane-transport")) return;
    var s = document.createElement("style");
    s.id = "w-style-membrane-transport";
    s.textContent = CSS.split(".W").join(".w-membrane-transport");
    document.head.appendChild(s);
  }

  /* ---------- geometry ---------- */
  var VW = 360, VH = 300, YO = 114, YI = 176, MID = 145;
  var KS = { np: 4, ion: 5.5, sol: 4.5, w: 3, na: 5.5, k: 6, g: 5.5 };
  var SPD = { np: 2.0, ion: 1.6, sol: 1.2, w: 2.3, na: 1.6, k: 1.6, g: 1.3 };
  function shapeFor(k) {
    var st = "stroke:var(--ink,#101826);stroke-width:.7;";
    if (k === "np") return sv("circle", { r: 4, style: st + "fill:var(--c-oxygen,#D33A2C)" });
    if (k === "ion") return sv("circle", { r: 5.5, style: st + "fill:var(--r-basic,#3566D9)" });
    if (k === "sol") return sv("rect", { x: -4.5, y: -4.5, width: 9, height: 9, style: st + "fill:var(--theme-b,#B3254F)" });
    if (k === "w") return sv("circle", { r: 3, style: "fill:var(--hbond,#1989C9)" });
    if (k === "na") return sv("circle", { r: 5.5, style: st + "fill:var(--ionic,#CF5222)" });
    if (k === "k") return sv("polygon", { points: "0,-6.5 6,4.5 -6,4.5", style: st + "fill:var(--r-basic,#3566D9)" });
    return sv("polygon", { points: "0,-6.5 6,0 0,6.5 -6,0", style: st + "fill:var(--r-polar,#108C7C);stroke:var(--ink,#101826);stroke-width:.7" });
  }

  var W = {
    title: { en: "Membrane transport lab", ja: "膜輸送ラボ (membrane transport lab)", zh: "膜運輸實驗室 (membrane transport lab)" },
    mount: function (root, ctx) {
      css();
      var T = function (a) { return ctx.t({ en: a[0], ja: a[1], zh: a[2] }); };
      var sl = !!(window.IB && IB.level === "sl");
      var modes = MODES.filter(function (m) { return !(sl && m.ahl); });
      var st = {
        mode: "diff", ptype: "np", cOut: 12, cIn: 3, atp: true, gateOpen: false, gkind: "lig",
        playing: !reduced(), parts: [], log: [], frame: 0, pumps: [], vdir: "endo", vstage: 0
      };
      var raf = 0, timer = 0, io = null, onScreen = true, dead = false;
      var nodes = {}; // per-render dom refs

      function setMode(id) {
        st.mode = id; st.atp = true; st.gateOpen = false; st.vstage = 0;
        var d = DEF[id]; if (d) { st.cOut = d[0]; st.cIn = d[1]; }
        st.ptype = "np";
        build();
      }

      /* ---------- particles ---------- */
      function newP(k, side) {
        var y = side === 1 ? rnd(14, YO - 8) : rnd(YI + 8, VH - 12);
        var a = rnd(0, 6.283);
        return { k: k, side: side, x: rnd(12, VW - 12), y: y, vx: Math.cos(a) * SPD[k], vy: Math.sin(a) * SPD[k], tr: null, node: null };
      }
      function initPumps() {
        var m = st.mode, a = [];
        function P(x, type, t0, period) { a.push({ x: x, type: type, t: t0, t0: t0, period: period, flash: 0 }); }
        if (m === "act") P(180, "act", 20, 40);
        if (m === "nak") { P(110, "nak", 0, 100); P(250, "nak", 50, 100); }
        if (m === "sglt") { P(100, "cot", 10, 45); P(262, "nak", 0, 80); }
        st.pumps = a;
      }
      function resetParts() {
        st.parts = []; st.log = []; st.frame = 0;
        var m = st.mode, i;
        function add(k, side, n) { for (i = 0; i < n; i++) st.parts.push(newP(k, side)); }
        if (m === "diff") { var kk = st.ptype === "np" ? "np" : "ion"; add(kk, 1, st.cOut); add(kk, -1, st.cIn); }
        else if (m === "chan" || m === "gate" || m === "act") { add("ion", 1, st.cOut); add("ion", -1, st.cIn); }
        else if (m === "osm") { add("sol", 1, st.cOut); add("sol", -1, st.cIn); add("w", 1, 36 - 2 * st.cOut); add("w", -1, 36 - 2 * st.cIn); }
        else if (m === "nak") { add("na", 1, 8); add("na", -1, 8); add("k", 1, 8); add("k", -1, 8); }
        else if (m === "sglt") { add("na", 1, 14); add("na", -1, 3); add("k", -1, 6); add("k", 1, 2); add("g", 1, st.cOut); add("g", -1, st.cIn); }
        st.pumps.forEach(function (pm) { pm.t = pm.t0; pm.flash = 0; });
        if (nodes.pg) {
          while (nodes.pg.firstChild) nodes.pg.removeChild(nodes.pg.firstChild);
          st.parts.forEach(function (p) {
            p.node = sv("g", {}, shapeFor(p.k));
            nodes.pg.appendChild(p.node); place(p);
          });
        }
      }
      function place(p) { p.node.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")"); }

      function chanXs() { return st.mode === "gate" ? [120, 240] : st.mode === "osm" ? [110, 250] : [110, 250]; }
      function near(x, xs, r) { for (var i = 0; i < xs.length; i++) if (Math.abs(x - xs[i]) < r) return xs[i]; return null; }
      function tryCross(p, x) {
        var m = st.mode;
        if (m === "diff") return p.k === "np" && Math.random() < 0.4;
        if (m === "chan") { return p.k === "ion" && near(x, chanXs(), 14) !== null && Math.random() < 0.8 ? near(x, chanXs(), 14) : false; }
        if (m === "gate") { return st.gateOpen && p.k === "ion" && near(x, chanXs(), 14) !== null && Math.random() < 0.8 ? near(x, chanXs(), 14) : false; }
        if (m === "osm") {
          if (p.k !== "w") return false;
          var c = near(x, chanXs(), 14);
          if (c !== null) return Math.random() < 0.9 ? c : false;
          return Math.random() < 0.06;
        }
        return false;
      }
      function startTransit(p, x, c, dest, dur, pts) {
        var from = p.side === 1 ? YO : YI, to = dest === -1 ? YI : YO;
        if (!pts) {
          pts = (c === true || c == null || c === false) ? [[x, from], [x, to]] : [[x, from], [c, from + (to > from ? 10 : -10)], [c, to - (to > from ? 10 : -10)], [x + rnd(-6, 6), to]];
        }
        var len = 0, cum = [0], i;
        for (i = 1; i < pts.length; i++) { len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); cum.push(len); }
        p.tr = { pts: pts, cum: cum, len: len || 1, t: 0, dur: dur || 18, dest: dest, delay: 0 };
      }
      function advance(p) {
        var tr = p.tr;
        if (tr.delay > 0) { tr.delay--; return; }
        tr.t++;
        var s = Math.min(1, tr.t / tr.dur) * tr.len, i = 1;
        while (i < tr.pts.length - 1 && tr.cum[i] < s) i++;
        var a = tr.pts[i - 1], b = tr.pts[i], seg = (tr.cum[i] - tr.cum[i - 1]) || 1, f = (s - tr.cum[i - 1]) / seg;
        p.x = a[0] + (b[0] - a[0]) * f; p.y = a[1] + (b[1] - a[1]) * f;
        if (tr.t >= tr.dur) {
          p.side = tr.dest; p.tr = null;
          p.y = tr.dest === -1 ? YI + 3 : YO - 3;
          p.vy = (tr.dest === -1 ? 1 : -1) * Math.abs(p.vy || 0.8);
          st.log.push({ f: st.frame, k: p.k, d: tr.dest });
        }
      }

      function pickNear(k, side, x, n) {
        var face = side === 1 ? YO : YI;
        return st.parts.filter(function (p) { return !p.tr && p.k === k && p.side === side; })
          .sort(function (a, b) { return Math.hypot(a.x - x, a.y - face) - Math.hypot(b.x - x, b.y - face); }).slice(0, n);
      }
      function pumpMove(list, px, dest, delay) {
        list.forEach(function (p, j) {
          var from = p.side === 1 ? YO : YI, to = dest === -1 ? YI : YO;
          var off = (j - (list.length - 1) / 2) * 7;
          startTransit(p, px, null, dest, 46, [[p.x, p.y], [px + off * 0.3, from + (to > from ? -2 : 2)], [px + off * 0.3, to + (to > from ? 2 : -2)], [px + off, to + (to > from ? 12 : -12)]]);
          p.tr.delay = (delay || 0) + j * 6;
        });
      }
      function count(k, side) { var n = 0; st.parts.forEach(function (p) { if (p.k === k && p.side === side) n++; }); return n; }
      function runPumps() {
        st.pumps.forEach(function (pm) {
          if (pm.flash > 0) pm.flash--;
          pm.t++;
          if (pm.t < pm.period) return;
          if (pm.type === "act") {
            if (!st.atp) return;
            var c = pickNear("ion", 1, pm.x, 1);
            if (!c.length) return;
            pm.t = 0; pm.flash = 30; pumpMove(c, pm.x, -1, 0);
          } else if (pm.type === "nak") {
            if (!st.atp) return;
            var na = pickNear("na", -1, pm.x, 3), k = pickNear("k", 1, pm.x, 2);
            if (!na.length && !k.length) return;
            pm.t = 0; pm.flash = 36; pumpMove(na, pm.x, 1, 0); pumpMove(k, pm.x, -1, 4);
          } else if (pm.type === "cot") {
            if (count("na", 1) <= count("na", -1)) return;
            var n1 = pickNear("na", 1, pm.x, 1), g1 = pickNear("g", 1, pm.x, 1);
            if (!n1.length || !g1.length) return;
            pm.t = 0; pumpMove(n1.concat(g1), pm.x, -1, 0);
          }
        });
      }

      function step() {
        st.frame++;
        var i, p;
        for (i = 0; i < st.parts.length; i++) {
          p = st.parts[i];
          if (p.tr) { advance(p); place(p); continue; }
          p.vx += rnd(-0.3, 0.3); p.vy += rnd(-0.3, 0.3);
          var sp = Math.hypot(p.vx, p.vy), tgt = SPD[p.k];
          if (sp > tgt * 1.4) { p.vx *= tgt * 1.4 / sp; p.vy *= tgt * 1.4 / sp; }
          else if (sp < tgt * 0.6) { p.vx *= tgt * 0.6 / (sp || 1); p.vy *= tgt * 0.6 / (sp || 1); if (!sp) p.vx = tgt * 0.6; }
          var nx = p.x + p.vx, ny = p.y + p.vy, r = KS[p.k];
          if (nx < r + 2) { nx = r + 2; p.vx = Math.abs(p.vx); }
          if (nx > VW - r - 2) { nx = VW - r - 2; p.vx = -Math.abs(p.vx); }
          if (p.side === 1) {
            if (ny < r + 2) { ny = r + 2; p.vy = Math.abs(p.vy); }
            if (ny > YO - r + 3) {
              var c = tryCross(p, nx);
              if (c !== false) { p.x = nx; p.y = YO; startTransit(p, nx, c, -1, 18); place(p); continue; }
              ny = YO - r + 3; p.vy = -Math.abs(p.vy);
            }
          } else {
            if (ny > VH - r - 2) { ny = VH - r - 2; p.vy = -Math.abs(p.vy); }
            if (ny < YI + r - 3) {
              var c2 = tryCross(p, nx);
              if (c2 !== false) { p.x = nx; p.y = YI; startTransit(p, nx, c2, 1, 18); place(p); continue; }
              ny = YI + r - 3; p.vy = Math.abs(p.vy);
            }
          }
          p.x = nx; p.y = ny; place(p);
        }
        runPumps();
        if (nodes.flash) {
          nodes.flash.forEach(function (f) { f.node.style.opacity = f.pm.flash > 0 ? 1 : 0; });
        }
        if (st.frame % 20 === 0) status();
      }
      function loop() {
        raf = 0;
        if (dead) return;
        if (st.playing && onScreen && st.mode !== "vesc") step();
        raf = requestAnimationFrame(loop);
      }

      /* ---------- status text ---------- */
      function mainKind() { return st.mode === "osm" ? "w" : st.mode === "nak" ? "na" : st.mode === "sglt" ? "g" : st.mode === "diff" && st.ptype === "ion" ? "ion" : st.mode === "diff" ? "np" : "ion"; }
      function prediction() {
        var m = st.mode, o = st.cOut, i = st.cIn;
        if (m === "diff") {
          if (st.ptype === "ion") return S.pr_ion_blocked;
          return o > i ? S.pr_np_in : o < i ? S.pr_np_out : S.pr_eq;
        }
        if (m === "chan") return o > i ? S.pr_ch_in : o < i ? S.pr_ch_out : S.pr_eq;
        if (m === "gate") { if (!st.gateOpen) return S.pr_gate_closed; return o > i ? S.pr_gate_open_in : o < i ? S.pr_gate_open_out : S.pr_eq; }
        if (m === "osm") return i > o ? S.pr_osm_in : i < o ? S.pr_osm_out : S.pr_osm_eq;
        if (m === "act") { if (!st.atp) return S.pr_act_off; return o >= i ? S.pr_act_on_with : S.pr_act_on_against; }
        if (m === "nak") return st.atp ? S.pr_nak_on : S.pr_nak_off;
        if (m === "sglt") return count("na", 1) > count("na", -1) ? S.pr_sglt_ok : S.pr_sglt_stop;
        return S.pr_eq;
      }
      function status() {
        if (!nodes.status) return;
        var m = st.mode, k = mainKind(), win = 480, inn = 0, out = 0;
        st.log.forEach(function (e) { if (e.k === k && st.frame - e.f <= win) { if (e.d === -1) inn++; else out++; } });
        var line1 = prediction();
        var cnts;
        if (m === "nak") cnts = "Na⁺ " + count("na", 1) + " | " + count("na", -1) + "   K⁺ " + count("k", 1) + " | " + count("k", -1);
        else if (m === "sglt") cnts = "Na⁺ " + count("na", 1) + " | " + count("na", -1) + "   " + T(S.l_g) + " " + count("g", 1) + " | " + count("g", -1);
        else if (m === "osm") cnts = T(S.l_sol) + " " + count("sol", 1) + " | " + count("sol", -1) + "   " + T(S.l_w) + " " + count("w", 1) + " | " + count("w", -1);
        else cnts = count(k, 1) + " | " + count(k, -1);
        var net, tot = inn + out;
        if (st.frame < 60) net = T(S.waiting);
        else if (tot < 4 || Math.abs(inn - out) <= Math.max(2, 0.15 * tot)) net = T(S.none);
        else net = inn > out ? T(S.inn) : T(S.outn);
        nodes.l1.textContent = T(line1);
        nodes.l2.textContent = T(S.counts) + " (" + T(S.outside).split(" (")[0] + " | " + T(S.inside).split(" (")[0] + "): " + cnts;
        nodes.l3.textContent = T(S.meas) + ": ↓ " + inn + "  ↑ " + out + "   →  " + T(S.net) + ": " + net;
      }

      /* ---------- drawing ---------- */
      function bilayer(g, gaps) {
        for (var x = 8; x < VW; x += 12) {
          if (near(x, gaps.top, 21) === null) {
            g.appendChild(sv("path", { d: "M" + (x - 2) + " 128V" + (MID - 1) + "M" + (x + 2) + " 128V" + (MID - 1), style: "stroke:var(--ink,#101826);stroke-width:1.2;fill:none;opacity:.7" }));
            g.appendChild(sv("circle", { cx: x, cy: 122, r: 5.2, style: "fill:var(--theme-b,#B3254F);stroke:var(--ink,#101826);stroke-width:.6" }));
          }
          if (near(x, gaps.bot, 21) === null) {
            g.appendChild(sv("path", { d: "M" + (x - 2) + " 162V" + (MID + 1) + "M" + (x + 2) + " 162V" + (MID + 1), style: "stroke:var(--ink,#101826);stroke-width:1.2;fill:none;opacity:.7" }));
            g.appendChild(sv("circle", { cx: x, cy: 168, r: 5.2, style: "fill:var(--theme-b,#B3254F);stroke:var(--ink,#101826);stroke-width:.6" }));
          }
        }
      }
      function channelProt(g, cx, kind, gated) {
        var pw = kind === "aqua" ? 4 : 5.5;
        var fillc = kind === "aqua" ? "var(--hbond,#1989C9)" : "var(--accent,#0A6C7D)";
        var sty = "fill:" + fillc + ";fill-opacity:.35;stroke:" + fillc + ";stroke-width:1.6";
        g.appendChild(sv("path", { d: "M" + (cx - 20) + " " + (YO - 2) + "h" + (20 - pw) + "v" + (YI - YO + 4) + "h-" + (20 - pw) + "z", style: sty, "stroke-linejoin": "round" }));
        g.appendChild(sv("path", { d: "M" + (cx + 20) + " " + (YO - 2) + "h-" + (20 - pw) + "v" + (YI - YO + 4) + "h" + (20 - pw) + "z", style: sty, "stroke-linejoin": "round" }));
        if (gated) {
          var gate = sv("rect", { x: cx - 9, y: YO - 7, width: 18, height: 5, rx: 1, style: "fill:" + (st.gateOpen ? "var(--good,#14724A)" : "var(--bad,#B93227)") + ";stroke:var(--ink,#101826);stroke-width:.8", transform: st.gateOpen ? "translate(16 -7)" : "" });
          g.appendChild(gate);
        }
      }
      function pumpProt(g, cx, label, tone) {
        var c = tone === "cot" ? "var(--r-polar,#108C7C)" : "var(--accent,#0A6C7D)";
        g.appendChild(sv("path", { d: "M" + (cx - 19) + " " + (YO - 3) + "h38v" + (YI - YO + 6) + "h-38z M" + (cx - 8) + " " + (YO - 3) + "l8 22l8 -22", style: "fill:" + c + ";fill-opacity:.35;stroke:" + c + ";stroke-width:1.8", "stroke-linejoin": "round", "fill-rule": "evenodd" }));
      }
      function label(g, x, y, txt, anchor) {
        var i = txt.indexOf(" (");
        if (i > 0 && (anchor || "middle") === "middle" && y > 150) {
          g.appendChild(sv("text", { x: x, y: y, "text-anchor": "middle", text: txt.slice(0, i) }));
          g.appendChild(sv("text", { x: x, y: y + 14, "text-anchor": "middle", text: txt.slice(i + 1) }));
        } else g.appendChild(sv("text", { x: x, y: y, "text-anchor": anchor || "middle", text: txt }));
      }

      function drawStage(svg) {
        var m = st.mode, gaps = { top: [], bot: [] }, pr = [];
        nodes.flash = [];
        if (m === "chan" || m === "gate" || m === "osm") { chanXs().forEach(function (c) { gaps.top.push(c); gaps.bot.push(c); }); }
        if (m === "act") { gaps.top.push(180); gaps.bot.push(180); }
        if (m === "nak") { gaps.top.push(110, 250); gaps.bot.push(110, 250); }
        if (m === "sglt") { gaps.top.push(100, 262); gaps.bot.push(100, 262); }
        var gb = sv("g"); bilayer(gb, gaps); svg.appendChild(gb);
        var gp = sv("g");
        if (m === "chan") chanXs().forEach(function (c) { channelProt(gp, c, "chan"); label(gp, c, 196, T(S.p_chan)); });
        if (m === "gate") chanXs().forEach(function (c) { channelProt(gp, c, "chan", true); label(gp, c, 196, T(S.p_gch)); });
        if (m === "osm") {
          chanXs().forEach(function (c) { channelProt(gp, c, "aqua"); label(gp, c, 196, T(S.p_aqua)); });
        }
        if (m === "act") { pumpProt(gp, 180, "", "act"); label(gp, 180, 196, T(S.p_pump)); }
        if (m === "nak") { [110, 250].forEach(function (c) { pumpProt(gp, c, "", "act"); label(gp, c, 196, T(S.p_nak)); }); }
        if (m === "sglt") { pumpProt(gp, 100, "", "cot"); label(gp, 100, 196, T(S.p_cot)); pumpProt(gp, 262, "", "act"); label(gp, 262, 196, T(S.p_nak)); }
        svg.appendChild(gp);
        // static labels
        var gl = sv("g");
        label(gl, 6, 12, T(S.outside), "start"); label(gl, 6, VH - 4, T(S.inside), "start");
        var bil = T(S.p_bil).split(" ");
        if (bil.length > 1) { label(gl, 6, MID - 2, bil[0], "start"); label(gl, 6, MID + 12, bil.slice(1).join(" "), "start"); }
        else label(gl, 6, MID + 5, bil[0], "start");
        svg.appendChild(gl);
        // particles layer
        nodes.pg = sv("g"); svg.appendChild(nodes.pg);
        // ATP flash
        var gf = sv("g");
        st.pumps.forEach(function (pm) {
          if (pm.type === "cot") return;
          var f = sv("text", { x: pm.x, y: YO - 22, "text-anchor": "middle", text: T(S.atpflash), style: "opacity:0;font-weight:700" });
          gf.appendChild(f); nodes.flash.push({ node: f, pm: pm });
        });
        svg.appendChild(gf);
      }

      /* ----- vesicle mode ----- */
      function ribbon(svg, d) {
        svg.appendChild(sv("path", { d: d, style: "fill:none;stroke:var(--theme-b,#B3254F);stroke-width:15;stroke-linecap:butt;stroke-linejoin:round" }));
        svg.appendChild(sv("path", { d: d, style: "fill:none;stroke:var(--surface,#fff);stroke-width:7;stroke-linecap:butt;stroke-linejoin:round" }));
      }
      function cargo(svg, cx, cy) {
        [[-7, -4], [6, -6], [0, 6]].forEach(function (o) {
          svg.appendChild(sv("rect", { x: cx + o[0] - 4.5, y: cy + o[1] - 4.5, width: 9, height: 9, style: "fill:var(--r-polar,#108C7C);stroke:var(--ink,#101826);stroke-width:.7" }));
        });
      }
      var FLAT = "M0 130H360";
      var BULB1 = "M0 130H138C150 130 152 150 168 158Q180 163 192 158C208 150 210 130 222 130H360";
      var BULB2 = "M0 130H166C166 146 136 158 136 188C136 216 158 226 180 226C202 226 224 216 224 188C224 158 194 146 194 130H360";
      function circle(cx, cy, r) { return "M" + (cx - r) + " " + cy + "a" + r + " " + r + " 0 1 0 " + (2 * r) + " 0a" + r + " " + r + " 0 1 0 -" + (2 * r) + " 0"; }
      function drawVesicle(svg) {
        var s = st.vstage, endo = st.vdir === "endo";
        svg.appendChild(sv("rect", { x: 0, y: 0, width: VW, height: 130, style: "fill:var(--accent-soft,#DCEFF2);opacity:.5" }));
        var gl = sv("g"); label(gl, 6, 12, T(S.outside), "start"); label(gl, 6, VH - 4, T(S.inside), "start"); svg.appendChild(gl);
        if (endo) {
          if (s === 0) { ribbon(svg, FLAT); cargo(svg, 180, 98); }
          if (s === 1) { ribbon(svg, BULB1); cargo(svg, 180, 130); }
          if (s === 2) { ribbon(svg, BULB2); cargo(svg, 180, 192); }
          if (s === 3) { ribbon(svg, FLAT); ribbon(svg, circle(180, 200, 30)); cargo(svg, 180, 200); }
        } else {
          if (s === 0) { ribbon(svg, FLAT); ribbon(svg, circle(180, 205, 30)); cargo(svg, 180, 205); }
          if (s === 1) { ribbon(svg, FLAT); ribbon(svg, circle(180, 164, 30)); cargo(svg, 180, 164); }
          if (s === 2) { ribbon(svg, BULB2); cargo(svg, 180, 170); cargo(svg, 180, 112); }
          if (s === 3) { ribbon(svg, FLAT); cargo(svg, 150, 96); cargo(svg, 215, 80); cargo(svg, 190, 108); }
        }
        var gt = sv("g"); label(gt, VW - 6, 258, T(S.p_bil), "end"); svg.appendChild(gt);
      }

      /* ---------- UI build ---------- */
      function build() {
        while (root.firstChild) root.removeChild(root.firstChild);
        nodes = {};
        initPumps();
        var W_ = el("div", { class: "W" }); root.appendChild(W_);
        // mode tabs
        var tabs = el("div", { class: "tabs wl-tabs", role: "tablist", "aria-label": T(S.modeTitle) });
        modes.forEach(function (m) {
          var b = el("button", { type: "button", role: "tab", "aria-selected": m.id === st.mode ? "true" : "false" }, [T(S["m_" + m.id])]);
          if (m.ahl) b.appendChild(el("span", { class: "ahl", text: "AHL" }));
          b.addEventListener("click", function () { setMode(m.id); });
          tabs.appendChild(b);
        });
        W_.appendChild(tabs);
        var wl = el("div", { class: "wl" }), stageCol = el("div", { class: "wl-stage" }), panel = el("div", { class: "wl-panel" });
        wl.appendChild(stageCol); wl.appendChild(panel); W_.appendChild(wl);
        // options row
        var opts = el("div", { class: "row opts" });
        var m = st.mode;
        if (m === "diff") {
          [["np", S.p_np], ["ion", S.p_ion]].forEach(function (o) {
            var b = el("button", { type: "button", "aria-pressed": st.ptype === o[0] ? "true" : "false" }, [T(o[1])]);
            b.addEventListener("click", function () { st.ptype = o[0]; build(); });
            opts.appendChild(b);
          });
        }
        if (m === "act" || m === "nak" || m === "sglt") {
          var ab = el("button", { type: "button", "aria-pressed": st.atp ? "true" : "false" }, [T(st.atp ? S.atpOn : S.atpOff)]);
          ab.addEventListener("click", function () { st.atp = !st.atp; ab.setAttribute("aria-pressed", st.atp ? "true" : "false"); ab.textContent = T(st.atp ? S.atpOn : S.atpOff); status(); });
          opts.appendChild(ab);
        }
        if (m === "gate") {
          [["lig", S.gate_lig], ["volt", S.gate_volt]].forEach(function (o) {
            var b = el("button", { type: "button", "aria-pressed": st.gkind === o[0] ? "true" : "false" }, [T(o[1])]);
            b.addEventListener("click", function () { st.gkind = o[0]; st.gateOpen = false; build(); });
            opts.appendChild(b);
          });
          var gb = el("button", { type: "button", "aria-pressed": st.gateOpen ? "true" : "false" }, [T(S["sig_" + st.gkind + (st.gateOpen ? "1" : "0")])]);
          gb.addEventListener("click", function () { st.gateOpen = !st.gateOpen; build(); });
          opts.appendChild(gb);
        }
        if (m === "vesc") {
          [["endo", S.endo], ["exo", S.exo]].forEach(function (o) {
            var b = el("button", { type: "button", "aria-pressed": st.vdir === o[0] ? "true" : "false" }, [T(o[1])]);
            b.addEventListener("click", function () { st.vdir = o[0]; st.vstage = 0; build(); });
            opts.appendChild(b);
          });
        }
        if (opts.firstChild) panel.appendChild(opts);

        // svg
        var svg = sv("svg", { viewBox: "0 0 " + VW + " " + VH, role: "img", "aria-label": T(W.title) });
        nodes.svg = svg;
        if (m === "vesc") drawVesicle(svg); else drawStage(svg);
        stageCol.appendChild(svg);

        // sliders
        if (m === "diff" || m === "chan" || m === "gate" || m === "osm" || m === "act" || m === "sglt") {
          var max = m === "osm" ? 10 : 16;
          var names = m === "osm" ? [S.sOut, S.sIn] : m === "sglt" ? [S.gOut, S.gIn] : [S.cOut, S.cIn];
          var sls = el("div", { class: "sls" });
          [["cOut", names[0]], ["cIn", names[1]]].forEach(function (s) {
            var id = "mt-" + s[0] + "-" + Math.random().toString(36).slice(2, 7);
            var val = el("span", { text: String(st[s[0]]) });
            var inp = el("input", { type: "range", id: id, min: 0, max: max, step: 1, value: st[s[0]] });
            inp.addEventListener("input", function () {
              st[s[0]] = parseInt(inp.value, 10); val.textContent = inp.value;
              clearTimeout(timer); timer = setTimeout(function () { resetParts(); status(); }, 120);
            });
            sls.appendChild(el("div", { class: "sl" }, [el("label", { for: id }, [el("span", { text: T(s[1]) }), val]), inp]));
          });
          panel.appendChild(sls);
        }

        // transport controls
        var ctl = el("div", { class: "row ctlrow" });
        if (m === "vesc") {
          var stageTxt = el("div", { class: "stagebox", "aria-live": "polite", text: T(S[(st.vdir === "endo" ? "e" : "x") + st.vstage]) });
          var pb = el("button", { type: "button", text: T(S.prev) }), nb = el("button", { type: "button", text: T(S.next) });
          pb.disabled = st.vstage === 0; nb.disabled = st.vstage === 3;
          pb.addEventListener("click", function () { st.vstage = Math.max(0, st.vstage - 1); build(); });
          nb.addEventListener("click", function () { st.vstage = Math.min(3, st.vstage + 1); build(); });
          ctl.appendChild(pb); ctl.appendChild(nb);
          panel.appendChild(ctl); panel.appendChild(stageTxt);
        } else {
          var pl = el("button", { type: "button", text: T(st.playing ? S.pause : S.play) });
          pl.addEventListener("click", function () { st.playing = !st.playing; pl.textContent = T(st.playing ? S.pause : S.play); });
          var sb = el("button", { type: "button", text: T(S.step) });
          sb.addEventListener("click", function () { for (var i = 0; i < 20; i++) step(); status(); });
          var rb = el("button", { type: "button", text: T(S.reset) });
          rb.addEventListener("click", function () { resetParts(); status(); });
          ctl.appendChild(pl); ctl.appendChild(sb); ctl.appendChild(rb);
          panel.appendChild(ctl);
          var spanel = el("div", { class: "panel", role: "status", "aria-live": "off" });
          nodes.l1 = el("p", { class: "big" }); nodes.l2 = el("p"); nodes.l3 = el("p");
          spanel.appendChild(nodes.l1); spanel.appendChild(nodes.l2); spanel.appendChild(nodes.l3);
          nodes.status = spanel; panel.appendChild(spanel);
        }
        var det = el("details", {}, [el("summary", { text: T(S.more) }), el("p", { class: "desc", text: T(S["d_" + m]) })]);
        try { if (window.matchMedia("(min-width:900px)").matches) det.open = true; } catch (e) {}
        panel.appendChild(det);
        // key
        if (m !== "vesc") {
          var kinds = m === "diff" ? [st.ptype === "np" ? "np" : "ion"] : m === "osm" ? ["sol", "w"] : m === "nak" ? ["na", "k"] : m === "sglt" ? ["na", "k", "g"] : ["ion"];
          var key = el("div", { class: "key wl-legend" }, [el("strong", { text: T(S.legendT) + ":" })]);
          kinds.forEach(function (k) {
            var ks = sv("svg", { viewBox: "-8 -8 16 16" }); ks.appendChild(shapeFor(k));
            key.appendChild(el("span", {}, [ks, T(S["l_" + k])]));
          });
          stageCol.appendChild(key);
        }
        if (m !== "vesc") { resetParts(); status(); }
      }

      var o = ctx.options && ctx.options.tab;
      if (o != null) {
        var oi = typeof o === "number" || /^\d+$/.test(String(o)) ? modes[parseInt(o, 10)] : modes.filter(function (m) { return m.id === o; })[0];
        if (oi && oi.id !== st.mode) { st.mode = oi.id; var dd = DEF[oi.id]; if (dd) { st.cOut = dd[0]; st.cIn = dd[1]; } }
      }
      build();
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(function (es) { onScreen = es[es.length - 1].isIntersecting; }, { threshold: 0 });
        io.observe(root);
      }
      raf = requestAnimationFrame(loop);
      return function () {
        dead = true; clearTimeout(timer);
        if (raf) cancelAnimationFrame(raf);
        if (io) io.disconnect();
      };
    }
  };

  if (typeof IB !== "undefined" && IB.registerWidget) IB.registerWidget("membrane-transport", W);
})();
