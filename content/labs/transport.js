/* Guided lab: Across the membrane (B2.1 membranes and membrane transport). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  id: "transport",
  order: 4,
  theme: "B",
  topics: ["B2.1"],
  title: { en: "Across the membrane", ja: "膜を越える輸送", zh: "跨越細胞膜" },
  intro: {
    en: "Eight steps, from the lipid bilayer to the ways particles cross it: diffusion, channels, osmosis and pumps, then three AHL steps on exchange transporters, indirect active transport and vesicles. Subtopic B2.1.",
    ja: "脂質二重層から、粒子が膜を通る方法 (拡散、チャネル、浸透、ポンプ) までを8つのステップで学びます。最後の3ステップは、交換輸送体、間接的能動輸送、小胞に関するAHLです。サブトピックB2.1です。",
    zh: "八個步驟，由脂雙層到粒子穿過膜的方式：擴散、通道、滲透和泵，最後三個 AHL 步驟涉及交換轉運體、間接主動運輸和囊泡。涵蓋子課題 B2.1。"
  },
  steps: [
    {
      title: { en: "The phospholipid bilayer as a barrier", ja: "障壁としてのリン脂質二重層", zh: "作為屏障的磷脂雙層" },
      ahl: false,
      refs: ["B2.1.1", "B2.1.2", "B1.1.12"],
      intro: {
        en: "<p>Phospholipids are amphipathic: a hydrophilic head and two hydrophobic tails. In water they naturally form continuous, sheet-like bilayers, with the heads facing the water on both sides and the tails forming the core. The hydrophobic core has low permeability to large molecules and to hydrophilic particles such as ions and polar molecules, so membranes act as barriers between aqueous solutions.</p>",
        ja: "<p>リン脂質は両親媒性 (amphipathic) で、親水性の頭部と疎水性の尾部2本をもちます。水中では自然に連続したシート状の二重層 (bilayer) をつくり、頭部は両側で水に面し、尾部は中心部をつくります。疎水性の中心部は、大きな分子や、イオン・極性分子のような親水性の粒子をほとんど通さないので、膜は水溶液どうしを隔てる障壁として働きます。</p>",
        zh: "<p>磷脂具兩親性 (amphipathic)：有親水的頭部和兩條疏水的尾部。在水中，磷脂會自然形成連續的片狀雙層 (bilayer)：頭部在兩側朝向水，尾部組成核心。疏水核心對大分子和離子、極性分子等親水粒子的通透性很低，所以膜能作為水溶液之間的屏障。</p>"
      },
      widget: "lipid-builder",
      options: { tab: 2 },
      task: {
        en: "Press Scatter, then Self-assemble. Say which part of each phospholipid faces the water. Predict which would cross the core more easily, an oxygen molecule or a sodium ion, and explain why.",
        ja: "「ばらまく」、続いて「自己集合」を押しましょう。各リン脂質のどの部分が水に面するか答えます。酸素分子とナトリウムイオンのどちらが中心部を通りやすいか予想し、その理由を説明しましょう。",
        zh: "按「散開」，再按「自行組合」。說出每個磷脂的哪一部分朝向水。預測氧分子和鈉離子哪一個較容易穿過核心，並解釋原因。"
      }
    },
    {
      title: { en: "Simple diffusion", ja: "単純拡散 (simple diffusion)", zh: "簡單擴散 (simple diffusion)" },
      ahl: false,
      refs: ["B2.1.3", "B2.1.8"],
      intro: {
        en: "<p>In simple diffusion, particles move by random motion from where they are more concentrated to where they are less concentrated. No protein and no ATP are needed. Oxygen and carbon dioxide move between the phospholipids in this way. Simple diffusion is not selective: it depends only on a particle's size and on whether it is hydrophobic or hydrophilic.</p>",
        ja: "<p>単純拡散では、粒子はランダムに動き、濃度の高いところから低いところへ移ります。タンパク質もATPも要りません。酸素と二酸化炭素は、リン脂質の間をこのように通ります。単純拡散には選択性がなく、粒子の大きさと、疎水性か親水性かだけで決まります。</p>",
        zh: "<p>在簡單擴散中，粒子作隨機運動，由濃度較高處移向濃度較低處，不需要蛋白質，也不需要 ATP。氧和二氧化碳就是這樣在磷脂之間穿過。簡單擴散沒有選擇性，只取決於粒子的大小，以及它是疏水還是親水。</p>"
      },
      widget: "membrane-transport",
      options: { tab: 0 },
      task: {
        en: "With O&#8322; / CO&#8322; selected and a higher concentration outside, predict the direction of net movement, then watch. Now switch to Ion / polar molecule. What happens, and why?",
        ja: "O&#8322; / CO&#8322; を選び、外側の濃度を高くして、正味の移動の向きを予想してから見ましょう。次に「イオン／極性分子」に切り替えます。何が起こり、それはなぜでしょう。",
        zh: "選擇 O&#8322; / CO&#8322;，並令外側濃度較高。先預測淨移動的方向，再觀察。然後改選「離子／極性分子」：會發生甚麼事？為甚麼？"
      }
    },
    {
      title: { en: "Facilitated diffusion through channels", ja: "チャネルを通る促進拡散 (facilitated diffusion)", zh: "經通道的易化擴散 (facilitated diffusion)" },
      ahl: false,
      refs: ["B2.1.6", "B2.1.8"],
      intro: {
        en: "<p>Ions cannot cross the hydrophobic core, but they can pass through channel proteins. This is facilitated diffusion. It is still passive: particles move down their concentration gradient and no ATP is used. Each type of channel allows only specific ions through, and only when the channel is open, so the membrane is selectively permeable.</p>",
        ja: "<p>イオンは疎水性の中心部を通れませんが、チャネルタンパク質 (channel protein) を通ることはできます。これが促進拡散です。これも受動的で、粒子は濃度勾配に沿って動き、ATPは使いません。チャネルの種類ごとに通れるイオンが決まっていて、しかも開いているときだけ通れるので、膜は選択的透過性 (selectively permeable) をもちます。</p>",
        zh: "<p>離子不能穿過疏水核心，但可以通過通道蛋白 (channel protein)，這稱為易化擴散。它仍屬被動過程：粒子順濃度梯度移動，不消耗 ATP。每種通道只讓特定離子通過，而且只在通道開啟時才可通過，因此膜具選擇透過性 (selectively permeable)。</p>"
      },
      widget: "membrane-transport",
      options: { tab: 1 },
      task: {
        en: "Run the model with a higher concentration outside. Then change the concentrations until they are equal. What happens to the net movement? State whether ATP is needed at any point.",
        ja: "外側の濃度を高くして動かしましょう。次に、内外の濃度が等しくなるまで変えます。正味の移動はどうなるでしょう。ATPが必要になる場面があるかも答えましょう。",
        zh: "讓外側濃度較高並運行模型。然後調整濃度至內外相等。淨移動會怎樣？說明過程中是否需要 ATP。"
      }
    },
    {
      title: { en: "Osmosis and aquaporins", ja: "浸透 (osmosis) とアクアポリン", zh: "滲透 (osmosis) 與水通道蛋白" },
      ahl: false,
      refs: ["B2.1.5"],
      intro: {
        en: "<p>Osmosis is the net movement of water across a membrane that is impermeable to the solute. Water molecules move randomly in both directions. Where the solute concentration is higher, a smaller share of the particles are water, so fewer water molecules hit the membrane from that side. The net movement of water is towards the higher solute concentration. Aquaporins are channels that let water cross more quickly.</p>",
        ja: "<p>浸透は、溶質を通さない膜を水が通って正味で移動することです。水分子はランダムに両方向へ動きます。溶質の濃度が高い側では、粒子のうち水の割合が小さいので、その側から膜にぶつかる水分子は少なくなります。そのため、水は溶質の濃度が高い側へ正味で移動します。アクアポリン (aquaporin) は水がより速く通るチャネルです。</p>",
        zh: "<p>滲透是水穿過一層不讓溶質通過的膜時的淨移動。水分子向兩個方向隨機移動。溶質濃度較高的一側，粒子中水所佔的比例較小，因此從該側撞向膜的水分子較少，水的淨移動方向便是朝向溶質濃度較高處。水通道蛋白 (aquaporin) 是讓水更快通過的通道。</p>"
      },
      widget: "osmosis-anim",
      options: {},
      task: {
        en: "The model starts with 4 solute particles on the left and 16 on the right. Predict which way water moves and which side swells, then watch. Try Equal and Left higher. Finally switch Aquaporins off: what changes? Explain each result using random movement, solutes that cannot cross, and the difference in solute concentration.",
        ja: "モデルは、左に溶質4個、右に溶質16個の状態で始まります。水がどちらへ動き、どちら側がふくらむかを予想してから見ましょう。「同じ」と「左が高い」も試します。最後にアクアポリンをオフにすると何が変わるでしょう。各結果を、ランダムな動き、通れない溶質、溶質濃度の差から説明しましょう。",
        zh: "模型一開始時，左側有 4 個溶質粒子，右側有 16 個。先預測水往哪邊移動、哪一側會膨脹，再觀察。再試「相同」和「左側較高」。最後關閉水通道蛋白，看看有何改變。以隨機運動、不能穿過的溶質和溶質濃度差，解釋每個結果。"
      }
    },
    {
      title: { en: "Active transport by pumps", ja: "ポンプによる能動輸送 (active transport)", zh: "經泵的主動運輸 (active transport)" },
      ahl: false,
      refs: ["B2.1.7", "B2.1.8"],
      intro: {
        en: "<p>A pump protein uses energy from ATP to move specific particles across a membrane. Because it uses energy, a pump can move particles against a concentration gradient, from low to high concentration. Facilitated diffusion and active transport both give selective permeability. Simple diffusion does not.</p>",
        ja: "<p>ポンプタンパク質 (pump protein) は、ATPのエネルギーを使って特定の粒子を膜の向こうへ運びます。エネルギーを使うので、ポンプは濃度勾配に逆らって、濃度の低い側から高い側へ粒子を動かせます。促進拡散と能動輸送は膜に選択的透過性を与えますが、単純拡散は与えません。</p>",
        zh: "<p>泵蛋白 (pump protein) 利用 ATP 的能量把特定粒子運過膜。由於消耗能量，泵可以逆濃度梯度運送粒子，由低濃度移向高濃度。易化擴散和主動運輸都使膜具選擇透過性，簡單擴散則不然。</p>"
      },
      widget: "membrane-transport",
      options: { tab: 3 },
      task: {
        en: "The model starts with a lower concentration outside than inside and the ATP supply on. Predict the direction of net movement, then watch. Switch the ATP supply off and explain what changes.",
        ja: "モデルは、外側の濃度が内側より低く、ATP供給がオンの状態で始まります。正味の移動の向きを予想してから見ましょう。次にATP供給をオフにして、何が変わるか説明しましょう。",
        zh: "模型一開始時外側濃度低於內側，並且ATP供應為開。先預測淨移動的方向，再觀察。然後關閉ATP供應，解釋有何改變。"
      }
    },
    {
      title: { en: "The sodium–potassium pump", ja: "ナトリウム–カリウムポンプ", zh: "鈉鉀泵" },
      ahl: true,
      refs: ["B2.1.15"],
      intro: {
        en: "<p>The sodium–potassium pump is an exchange transporter. Each cycle uses one ATP to move three Na<sup>+</sup> out of the cell and two K<sup>+</sup> into it, both against their concentration gradients. It keeps Na<sup>+</sup> high outside and K<sup>+</sup> high inside. Pumps like this are important in generating membrane potentials.</p>",
        ja: "<p>ナトリウム–カリウムポンプは交換輸送体 (exchange transporter) です。1回の周期でATPを1分子使い、3個のNa<sup>+</sup>を細胞の外へ、2個のK<sup>+</sup>を内へ、どちらも濃度勾配に逆らって運びます。これにより、Na<sup>+</sup>は外側で高く、K<sup>+</sup>は内側で高く保たれます。このようなポンプは膜電位 (membrane potential) をつくるうえで重要です。</p>",
        zh: "<p>鈉鉀泵是一種交換轉運體 (exchange transporter)。每個週期消耗一個 ATP，把三個 Na<sup>+</sup> 運出細胞、兩個 K<sup>+</sup> 運入細胞，兩者都是逆濃度梯度。它使 Na<sup>+</sup> 在細胞外較高、K<sup>+</sup> 在細胞內較高。這類泵對產生膜電位 (membrane potential) 十分重要。</p>"
      },
      widget: "membrane-transport",
      options: { tab: 5 },
      task: {
        en: "Let the pump run and watch the particle counts. Which ion builds up outside and which inside? Why does the pump move more positive charge out than in? Switch the ATP supply off and predict what happens.",
        ja: "ポンプを動かして粒子の数を見ましょう。外側に増えるイオンはどれで、内側に増えるのはどれでしょう。ポンプが入れるよりも多くの正電荷を外へ出すのはなぜでしょう。ATP供給をオフにして、何が起こるか予想しましょう。",
        zh: "讓泵運作並觀察粒子數目。哪種離子在細胞外積聚，哪種在細胞內積聚？為何泵運出的正電荷比運入的多？關閉ATP供應，預測會發生甚麼事。"
      }
    },
    {
      title: { en: "Indirect active transport of glucose", ja: "グルコースの間接的能動輸送", zh: "葡萄糖的間接主動運輸" },
      ahl: true,
      refs: ["B2.1.16"],
      intro: {
        en: "<p>A sodium-dependent glucose cotransporter is an example of indirect active transport. A Na<sup>+</sup>/K<sup>+</sup> pump, using ATP, keeps the Na<sup>+</sup> concentration low inside the cell. Na<sup>+</sup> then flows in through the cotransporter and carries glucose with it, even against the glucose gradient. This absorbs glucose in the small intestine and reabsorbs it in the nephron.</p>",
        ja: "<p>ナトリウム依存性グルコース共輸送体 (cotransporter) は、間接的能動輸送の例です。ATPを使うNa<sup>+</sup>/K<sup>+</sup>ポンプが、細胞内のNa<sup>+</sup>濃度を低く保ちます。Na<sup>+</sup>は共輸送体を通って流れ込み、グルコースを、グルコースの濃度勾配に逆らってでもいっしょに運びます。小腸でのグルコースの吸収と、ネフロンでの再吸収にはたらきます。</p>",
        zh: "<p>鈉依賴型葡萄糖協同轉運體 (cotransporter) 是間接主動運輸的例子。使用 ATP 的 Na<sup>+</sup>/K<sup>+</sup> 泵使細胞內的 Na<sup>+</sup> 濃度保持偏低，Na<sup>+</sup> 於是通過協同轉運體流入，並帶着葡萄糖一起進入，即使葡萄糖是逆濃度梯度。這種機制用於小腸吸收葡萄糖，以及腎單位重吸收葡萄糖。</p>"
      },
      widget: "membrane-transport",
      options: { tab: 6 },
      task: {
        en: "The model starts with more glucose inside than outside. Watch glucose and Na<sup>+</sup> move. Explain why the cotransporter itself needs no ATP, then switch the ATP supply off and predict the effect on glucose uptake.",
        ja: "モデルは、グルコースが外側より内側に多い状態で始まります。グルコースとNa<sup>+</sup>の動きを見ましょう。共輸送体自体にATPが要らない理由を説明し、次にATP供給をオフにしてグルコースの取り込みへの影響を予想しましょう。",
        zh: "模型一開始時，細胞內的葡萄糖比細胞外多。觀察葡萄糖和 Na<sup>+</sup> 的移動。解釋為何協同轉運體本身不需要 ATP，然後關閉ATP供應，預測對葡萄糖攝取的影響。"
      }
    },
    {
      title: { en: "Endocytosis and exocytosis", ja: "エンドサイトーシスとエキソサイトーシス", zh: "胞吞與胞吐" },
      ahl: true,
      refs: ["B2.1.13"],
      intro: {
        en: "<p>Because membranes are fluid, a piece of membrane can bend, pinch off and fuse with another. In endocytosis, material enters the cell inside a vesicle formed from the plasma membrane, for example a white blood cell engulfing a bacterium. In exocytosis, a vesicle fuses with the plasma membrane and releases its contents, for example insulin secretion or neurotransmitter release.</p>",
        ja: "<p>膜は流動的なので、膜の一部が曲がり、くびれて切れ、ほかの膜と融合できます。エンドサイトーシス (endocytosis) では、細胞膜からできた小胞に包まれて物質が細胞に入ります (例：白血球が細菌を取り込む)。エキソサイトーシス (exocytosis) では、小胞が細胞膜と融合して中身を放出します (例：インスリンの分泌、神経伝達物質の放出)。</p>",
        zh: "<p>由於膜具流動性，一小片膜可以彎曲、脫離，並與另一片膜融合。在胞吞 (endocytosis) 中，物質被包在由質膜形成的囊泡內進入細胞，例如白血球吞噬細菌。在胞吐 (exocytosis) 中，囊泡與質膜融合並釋出內容物，例如分泌胰島素或釋放神經遞質。</p>"
      },
      widget: "membrane-transport",
      options: { tab: 7 },
      task: {
        en: "Step through Endocytosis and then Exocytosis with the stage buttons. Say what carries the material in each process, and which property of the bilayer makes this possible.",
        ja: "段階ボタンで、エンドサイトーシス、続いてエキソサイトーシスを順に見ましょう。それぞれで物質を運ぶものは何か、二重層のどんな性質がそれを可能にしているか答えましょう。",
        zh: "用階段按鈕依次觀看胞吞和胞吐。說出每個過程中是甚麼攜帶物質，以及雙層的哪種性質使這成為可能。"
      }
    }
  ]
});
