/* Guided lab: Body systems (B3.1 gas exchange, B3.2 transport, B3.3 muscle). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  id: "body",
  order: 5,
  theme: "B",
  topics: ["B3.1", "B3.2", "B3.3"],
  title: { en: "Body systems", ja: "からだのしくみ", zh: "身體系統" },
  intro: {
    en: "Eight steps from breathing to blood vessels, the heart and muscle. Steps marked AHL are for HL students only. Subtopics B3.1, B3.2 and B3.3.",
    ja: "呼吸から血管、心臓、筋肉まで、8つのステップで学びます。AHLと表示されたステップはHLの学習者向けです。サブトピックB3.1、B3.2、B3.3です。",
    zh: "八個步驟，由呼吸到血管、心臟和肌肉。標示 AHL 的步驟只適用於 HL 學生。涵蓋子課題 B3.1、B3.2 和 B3.3。"
  },
  steps: [
    {
      title: { en: "Ventilation of the lungs", ja: "肺の換気 (ventilation)", zh: "肺的通氣 (ventilation)" },
      ahl: false,
      refs: ["B3.1.5"],
      intro: {
        en: "<p>Air flows in or out because the pressure inside the lungs changes. In inspiration the diaphragm contracts and flattens, and the intercostal muscles raise the ribs up and out. The chest volume rises, the pressure falls below atmospheric pressure, and air flows in. In expiration the muscles relax, volume falls, pressure rises and air flows out.</p>",
        ja: "<p>肺の中の圧力が変わるので、空気が出入りします。吸気では、横隔膜 (diaphragm) が収縮して平らになり、肋間筋 (intercostal muscles) が肋骨を上と外へ引き上げます。胸の容積が増え、圧力が大気圧より下がって、空気が入ります。呼気では筋肉が弛緩して容積が減り、圧力が上がって空気が出ます。</p>",
        zh: "<p>空氣進出肺部，是因為肺內的壓力改變。吸氣時，橫膈膜 (diaphragm) 收縮並變平，肋間肌 (intercostal muscles) 把肋骨向上、向外提起。胸腔容積增加，壓力降至低於大氣壓，空氣便流入。呼氣時肌肉放鬆，容積減少，壓力上升，空氣流出。</p>"
      },
      widget: "ventilation",
      options: {},
      task: {
        en: "In quiet breathing, play Inspiration then Expiration. Say which muscles contract in each phase and how the lung volume and pressure change. Then switch to Forced breathing: which extra muscles help to push air out?",
        ja: "安静時の呼吸で、吸気、続いて呼気を再生しましょう。それぞれの段階でどの筋肉が収縮し、肺の容積と圧力がどう変わるか答えます。次に「強い呼吸」に切り替え、空気を押し出すのを助ける筋肉を答えましょう。",
        zh: "在平靜呼吸中，先播放吸氣，再播放呼氣。說出每個階段哪些肌肉收縮，以及肺的容積和壓力如何變化。然後切換到「用力呼吸」：哪些額外的肌肉幫助把空氣推出？"
      }
    },
    {
      title: { en: "The alveolus as a gas exchange surface", ja: "ガス交換の場としての肺胞", zh: "作為氣體交換表面的肺泡" },
      ahl: false,
      refs: ["B3.1.2", "B3.1.3", "B3.1.4"],
      intro: {
        en: "<p>A gas exchange surface is permeable, thin, moist and has a large surface area. In a mammal's lungs, a branched network of bronchioles ends in alveoli. A thin film of moisture lines each alveolus. Surfactant reduces the surface tension of this film, which stops the walls sticking together. Dense capillary beds, continuous blood flow and ventilation keep the concentration gradients steep, so O<sub>2</sub> and CO<sub>2</sub> keep diffusing.</p>",
        ja: "<p>ガス交換の面は、透過性があり、薄く、湿っていて、表面積が大きいという性質をもちます。哺乳類の肺では、枝分かれした細気管支 (bronchioles) が肺胞 (alveoli) に続きます。肺胞の内面は薄い水の膜でおおわれています。サーファクタント (surfactant) はこの膜の表面張力を下げ、壁どうしがくっつくのを防ぎます。毛細血管網が密で、血液が流れ続け、換気が行われるので、濃度勾配が急に保たれ、O<sub>2</sub>とCO<sub>2</sub>が拡散し続けます。</p>",
        zh: "<p>氣體交換表面具通透性、薄、濕潤，而且表面積大。哺乳動物的肺中，分支的細支氣管 (bronchioles) 通向肺泡 (alveoli)。每個肺泡內壁都有一層薄水膜。表面活性物質 (surfactant) 降低這層水膜的表面張力，防止肺泡壁黏在一起。密集的微血管網、不斷流動的血液和通氣，使濃度梯度保持陡峭，因此 O<sub>2</sub> 和 CO<sub>2</sub> 能持續擴散。</p>"
      },
      widget: "gas-exchange",
      options: { tab: 0 },
      task: {
        en: "Tap each numbered part of the alveolus. List three adaptations that make diffusion fast, and say how blood flow and ventilation keep the concentration gradients steep. Then try Quiz me.",
        ja: "肺胞の番号のついた各部分をタップしましょう。拡散を速くする適応を3つ挙げ、血流と換気が濃度勾配を急に保つしくみを説明しましょう。そのあと「クイズ」に挑戦しましょう。",
        zh: "點選肺泡上每個編號的部分。列出三項使擴散加快的適應特徵，並說明血流和通氣如何使濃度梯度保持陡峭。然後試試「自我測驗」。"
      }
    },
    {
      title: { en: "Oxygen dissociation curves and the Bohr shift", ja: "酸素解離曲線とボーア効果", zh: "氧解離曲線與玻爾效應" },
      ahl: true,
      refs: ["B3.1.11", "B3.1.12", "B3.1.13"],
      intro: {
        en: "<p>An oxygen dissociation curve shows how saturated haemoglobin is with oxygen at different oxygen partial pressures. It is S-shaped because of cooperative binding: once one O<sub>2</sub> binds to a haem group, the next binds more easily. Foetal haemoglobin has a higher affinity for oxygen than adult haemoglobin. CO<sub>2</sub> binds to haemoglobin at allosteric sites and lowers its affinity for oxygen. So more CO<sub>2</sub> makes haemoglobin release more oxygen: the Bohr shift.</p>",
        ja: "<p>酸素解離曲線 (oxygen dissociation curve) は、酸素分圧ごとに、ヘモグロビンがどれだけ酸素で飽和しているかを示します。協同的結合 (cooperative binding) があるのでS字形になります。1つのヘム基にO<sub>2</sub>が結合すると、次のO<sub>2</sub>が結合しやすくなります。胎児ヘモグロビンは成人のヘモグロビンより酸素への親和性が高いです。CO<sub>2</sub>はヘモグロビンのアロステリック部位 (allosteric site) に結合し、酸素への親和性を下げます。そのためCO<sub>2</sub>が増えるとボーア効果 (Bohr shift) が起こり、ヘモグロビンはより多くの酸素を放出します。</p>",
        zh: "<p>氧解離曲線 (oxygen dissociation curve) 顯示在不同氧分壓下，血紅蛋白的氧飽和程度。曲線呈 S 形，是因為協同結合 (cooperative binding)：一個 O<sub>2</sub> 與一個血紅素基結合後，下一個更容易結合。胎兒血紅蛋白對氧的親和力比成人的高。CO<sub>2</sub> 會與血紅蛋白的別構位點 (allosteric site) 結合，降低它對氧的親和力。所以 CO<sub>2</sub> 增加會引起玻爾效應 (Bohr shift)：血紅蛋白釋出更多氧。</p>"
      },
      widget: "o2-curve",
      options: {},
      task: {
        en: "Move the oxygen partial pressure from the lungs to resting tissue to active muscle. Switch on Foetal haemoglobin: at the same pressure, does it hold more or less oxygen than adult haemoglobin, and why is that useful? Then switch on the Bohr shift and describe the effect at active muscle.",
        ja: "酸素分圧を、肺から安静時の組織、活動中の筋肉へと動かしましょう。「胎児型ヘモグロビン」をオンにして、同じ分圧で成人のヘモグロビンより多く酸素を保持するか少ないか、またそれがなぜ役立つか答えます。次にボーア効果をオンにして、活動中の筋肉での影響を説明しましょう。",
        zh: "把氧分壓由肺部移到靜止組織，再移到活動中的肌肉。開啟「胎兒血紅蛋白」：在相同分壓下，它比成人血紅蛋白攜帶的氧較多還是較少？為何有用？然後開啟玻爾效應，描述它對活動中肌肉的影響。"
      }
    },
    {
      title: { en: "Arteries, capillaries and veins", ja: "動脈、毛細血管、静脈", zh: "動脈、微血管與靜脈" },
      ahl: false,
      refs: ["B3.2.1", "B3.2.3", "B3.2.5"],
      intro: {
        en: "<p>Arteries carry blood away from the heart at high pressure. Their thick walls have muscle and elastic tissue to withstand and maintain that pressure. Capillaries have thin walls, narrow diameters and a large total surface area for exchange; some are fenestrated. Veins return blood to the heart. They have valves to stop backflow and flexible walls that muscle action can compress.</p>",
        ja: "<p>動脈 (artery) は血液を高い圧力で心臓から送り出します。厚い壁には筋肉と弾性組織があり、その圧力に耐え、保ちます。毛細血管 (capillary) は壁が薄く、直径が細く、全体の表面積が大きいので交換に適し、一部は有窓性 (fenestrated) です。静脈 (vein) は血液を心臓へ戻します。逆流を防ぐ弁があり、壁は柔軟で、筋肉の動きで押しつぶされます。</p>",
        zh: "<p>動脈 (artery) 以高壓把血液運離心臟，厚厚的管壁含有肌肉和彈性組織，能承受並維持高壓。微血管 (capillary) 管壁薄、管徑窄，總表面積大，適合交換物質，部分更有窗孔 (fenestrations)。靜脈 (vein) 把血液送回心臟，內有瓣膜防止倒流，管壁柔軟，可被肌肉的活動壓扁。</p>"
      },
      widget: "vessel-compare",
      options: { tab: 0 },
      task: {
        en: "Select Artery, Capillary and Vein in turn. Compare the wall thickness with the lumen in each, and note which vessel has valves. Explain how one feature of each vessel suits its job.",
        ja: "動脈、毛細血管、静脈を順に選びましょう。それぞれで壁の厚さと内腔を比べ、弁があるのはどの血管か答えます。各血管の特徴を1つずつ挙げ、それがなぜ働きに合っているか説明しましょう。",
        zh: "依次選擇動脈、微血管和靜脈。比較各血管的管壁厚度與管腔，並指出哪種血管有瓣膜。為每種血管各說明一項特徵如何配合其功能。"
      }
    },
    {
      title: { en: "Identifying vessels from a section", ja: "断面から血管を見分ける", zh: "由橫切面辨認血管" },
      ahl: false,
      refs: ["B3.2.2"],
      intro: {
        en: "<p>In a micrograph of a cross-section, tell an artery from a vein by the thickness of the wall compared with the width of the lumen (the space inside). An artery has a thick wall and a narrow lumen. A vein has a thinner wall and a wider lumen. Do not rely on size alone, because the drawings and micrographs are not all to the same scale.</p>",
        ja: "<p>断面の顕微鏡写真では、壁の厚さを内腔 (lumen、内側の空間) の幅と比べて、動脈と静脈を見分けます。動脈は壁が厚く内腔が狭く、静脈は壁が薄く内腔が広いです。図や写真の縮尺はそろっていないので、大きさだけで判断してはいけません。</p>",
        zh: "<p>在橫切面的顯微圖片中，比較管壁厚度與管腔 (lumen，內部空間) 的闊度，就能分辨動脈和靜脈。動脈管壁厚、管腔窄；靜脈管壁較薄、管腔較闊。不要只靠大小判斷，因為圖和顯微照片的比例並不一致。</p>"
      },
      widget: "vessel-compare",
      options: { tab: 1 },
      task: {
        en: "Answer at least five questions in the practice. For each one, say what you measured or compared in the wall and lumen before you chose artery or vein.",
        ja: "練習問題に5問以上答えましょう。動脈か静脈かを選ぶ前に、壁と内腔のどこを測り、何を比べたかをそれぞれ言いましょう。",
        zh: "完成練習中至少五題。每題在選擇動脈或靜脈之前，先說出你量度或比較了管壁和管腔的哪些方面。"
      }
    },
    {
      title: { en: "The structure of the heart", ja: "心臓の構造", zh: "心臟的結構" },
      ahl: true,
      refs: ["B3.2.15"],
      intro: {
        en: "<p>The heart wall is cardiac muscle. The pacemaker (sinoatrial node) starts each beat. The atria receive blood and the ventricles pump it out. Atrioventricular and semilunar valves keep blood flowing one way. The septum separates the two sides, and coronary vessels supply the heart muscle itself. Frontal-plane diagrams show the patient's right on the left of the page.</p>",
        ja: "<p>心臓の壁は心筋 (cardiac muscle) でできています。ペースメーカー (洞房結節、sinoatrial node) が拍動を始めます。心房 (atria) は血液を受け取り、心室 (ventricles) は血液を送り出します。房室弁と半月弁は血液を一方向に流します。中隔 (septum) が左右を隔て、冠状血管 (coronary vessels) が心筋そのものに血液を送ります。前額面の図では、患者の右が紙面の左側に来ます。</p>",
        zh: "<p>心臟壁由心肌 (cardiac muscle) 組成。起搏點（竇房結 sinoatrial node）啟動每一次心跳。心房 (atria) 接收血液，心室 (ventricles) 把血液泵出。房室瓣和半月瓣使血液只向一個方向流動。室間隔 (septum) 分隔左右兩側，冠狀血管 (coronary vessels) 供血給心肌本身。額狀面的圖中，病人的右側在紙面左邊。</p>"
      },
      widget: "heart-structure",
      options: {},
      task: {
        en: "Tap each numbered part and read its form and function. Then use Trace the blood to follow blood from the vena cava to the aorta, naming each chamber, valve and vessel in order.",
        ja: "番号のついた各部分をタップして、形と働きを読みましょう。次に「血液の流れをたどる」で、大静脈から大動脈まで、通る心室・心房・弁・血管を順に挙げましょう。",
        zh: "點選每個編號的部分，閱讀其形態與功能。然後使用「追蹤血液流向」，由腔靜脈追蹤到主動脈，按次序說出經過的每個心腔、瓣膜和血管。"
      }
    },
    {
      title: { en: "The cardiac cycle", ja: "心周期", zh: "心動週期" },
      ahl: true,
      refs: ["B3.2.15", "B3.2.16"],
      intro: {
        en: "<p>The sinoatrial node starts the heartbeat and the atria contract. Then the ventricles contract. Valves open and close where the pressure curves cross, because blood flows from high to low pressure and the valves stop backflow. In the left side, the atrioventricular valve closes when ventricular pressure rises above atrial pressure. The aortic valve opens when ventricular pressure exceeds aortic pressure.</p>",
        ja: "<p>洞房結節が拍動を始め、心房が収縮し、続いて心室が収縮します。血液は圧力の高いほうから低いほうへ流れ、弁が逆流を防ぐので、圧力の曲線が交わるところで弁が開閉します。左側では、心室の圧力が心房の圧力を上回ると房室弁が閉じ、心室の圧力が大動脈の圧力を上回ると大動脈弁が開きます。</p>",
        zh: "<p>竇房結啟動心跳，心房收縮，然後心室收縮。血液由高壓流向低壓，瓣膜防止倒流，所以瓣膜在壓力曲線相交的位置開閉。在左側，當心室壓力升至高於心房壓力時，房室瓣關閉；當心室壓力超過主動脈壓力時，主動脈瓣打開。</p>"
      },
      widget: "heart-beat",
      options: {},
      task: {
        en: "Slow the animation and watch the four moments where the pressure curves cross. State which valves are open and which are closed during ventricular systole, and which event ends it. Then read the highest and lowest pressures on the aorta curve: these are the systolic and diastolic pressures. The pressure values are illustrative.",
        ja: "アニメーションをゆっくりにして、圧力の曲線が交わる4つの瞬間を見ましょう。心室収縮期にどの弁が開き、どの弁が閉じるか、そして何がきっかけでそれが終わるか答えましょう。次に大動脈の曲線の最高値と最低値を読み取りましょう。これが収縮期血圧 (systolic pressure) と拡張期血圧 (diastolic pressure) です。圧力の値は説明用です。",
        zh: "放慢動畫，觀察壓力曲線相交的四個時刻。說出心室收縮期間哪些瓣膜開啟、哪些關閉，以及是甚麼事件令這階段結束。然後讀出主動脈曲線的最高和最低壓力：這就是收縮壓 (systolic pressure) 和舒張壓 (diastolic pressure)。壓力數值只作示意。"
      }
    },
    {
      title: { en: "The sarcomere and sliding filaments", ja: "サルコメアと滑り説", zh: "肌節與滑動絲學說" },
      ahl: true,
      refs: ["B3.3.2", "B3.3.3"],
      intro: {
        en: "<p>A sarcomere contracts when actin and myosin filaments slide past each other. The filaments themselves do not change length. The Z lines move closer together, and the I band and H zone get shorter, while the A band stays the same. The protein titin helps the sarcomere recoil after stretching and stops it being overstretched. Muscle can only pull, so antagonistic muscles are needed.</p>",
        ja: "<p>サルコメア (sarcomere) は、アクチン (actin) とミオシン (myosin) のフィラメントが互いに滑り合うことで収縮します。フィラメント自体の長さは変わりません。Z線が近づき、I帯とH帯が短くなりますが、A帯は変わりません。タンパク質のタイチン (titin) は、引き伸ばされたサルコメアが元に戻るのを助け、伸ばしすぎを防ぎます。筋肉は縮むときにしか力を出せないので、拮抗筋 (antagonistic muscles) が必要です。</p>",
        zh: "<p>肌節 (sarcomere) 的收縮，是肌動蛋白 (actin) 與肌球蛋白 (myosin) 絲互相滑過。絲本身的長度不變。Z 線互相靠近，I 帶和 H 區縮短，A 帶則保持不變。蛋白質肌聯蛋白 (titin) 幫助肌節在被拉長後回縮，並防止過度拉長。肌肉只能在收縮時施力，所以需要拮抗肌 (antagonistic muscles)。</p>"
      },
      widget: "sarcomere",
      options: {},
      task: {
        en: "Drag the slider from resting to contracted. Which regions get shorter and which stay the same? Then stretch the sarcomere and say what titin does. Finally, explain why a muscle needs an antagonistic partner.",
        ja: "スライダーを安静時から収縮へ動かしましょう。短くなる領域と変わらない領域はどれでしょう。次にサルコメアを引き伸ばし、タイチンの働きを答えます。最後に、筋肉に拮抗筋が必要な理由を説明しましょう。",
        zh: "把滑桿由靜止拖向收縮。哪些區域變短，哪些保持不變？然後拉長肌節，說出肌聯蛋白的作用。最後解釋為何肌肉需要拮抗的搭檔。"
      }
    }
  ]
});
