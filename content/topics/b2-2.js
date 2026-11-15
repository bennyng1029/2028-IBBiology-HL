/* B2.2 Organelles and compartmentalization — SL + AHL */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  IB.registerTopic({
    id: "B2.2",
    slug: "b2-2",
    theme: "B",
    level: 2,
    ahlOnly: false,
    title: L("Organelles and compartmentalization", "細胞小器官と区画化", "細胞器與區室化"),
    guidingQuestions: [
      L("How are organelles in cells adapted to their functions?", "細胞内の細胞小器官は、その機能にどのように適応しているか。", "細胞內的細胞器如何適應其功能？"),
      L("What are the advantages of compartmentalization in cells?", "細胞内の区画化にはどんな利点があるか。", "細胞內區室化有何好處？")
    ],
    summary: L(
      "Eukaryotic cells divide their work between organelles: small compartments with their own jobs. Keeping enzymes, substances and processes apart makes reactions faster and stops harmful ones interfering. At HL you also link the structure of the mitochondrion, chloroplast, nucleus, ribosomes, rough endoplasmic reticulum, Golgi apparatus and vesicles to what each does.",
      "真核細胞は仕事を細胞小器官 (それぞれの役割をもつ小さな区画) に分担させている。酵素や物質、反応を分けておくことで、反応が速くなり、有害な反応が邪魔し合うのを防げる。HLではさらに、ミトコンドリア、葉緑体、核、リボソーム、粗面小胞体、ゴルジ体、小胞の構造と働きを結びつける。",
      "真核細胞把工作分配給細胞器：各有職責的細小區室。把酶、物質和反應分隔開，可令反應更快，並避免有害反應互相干擾。HL 還要把線粒體、葉綠體、細胞核、核糖體、粗糙內質網、高爾基體和囊泡的結構與功能連繫起來。"),
    sections: [
      {
        ref: "B2.2.1", ahl: false,
        deeper: {"en":"<p><strong>Sorting test.</strong> The guide’s definition has three parts: a <em>discrete</em> (separate) subunit, <em>adapted</em>, for a <em>specific function</em>. An organelle does not have to be surrounded by a membrane.</p>\n<table><tr><th>Structure</th><th>Organelle?</th><th>Reason</th></tr>\n<tr><td>Nucleus</td><td>Yes</td><td>Separate, membrane-bound; stores and uses DNA</td></tr>\n<tr><td>Ribosome</td><td>Yes</td><td>Separate subunit with a specific function (translation), although it has no membrane</td></tr>\n<tr><td>Vesicle</td><td>Yes</td><td>Separate membrane sac that carries or holds contents</td></tr>\n<tr><td>Plasma membrane</td><td>Yes</td><td>Separate, with a specific function (controlling what crosses)</td></tr>\n<tr><td>Cell wall</td><td>No</td><td>A layer outside the cell, not a subunit inside it</td></tr>\n<tr><td>Cytoskeleton</td><td>No</td><td>A network of fibres, not a discrete unit</td></tr>\n<tr><td>Cytoplasm</td><td>No</td><td>The medium in which organelles sit</td></tr></table>\n<p><strong>Cell fractionation, step by step.</strong></p>\n<ol><li>Break the cells open (homogenise) in a cold solution with the same solute concentration as the cells. Cold slows the enzymes that could digest the organelles; the matching concentration stops them bursting or shrinking by osmosis.</li>\n<li>Spin the mixture in a centrifuge at low speed: the largest, densest organelles form a <em>pellet</em> at the bottom.</li>\n<li>Pour off the liquid (<em>supernatant</em>) and spin it faster to pellet smaller organelles.</li>\n<li>Test each pellet. If one carries out aerobic respiration, it contains mitochondria.</li></ol>\n<p>You do not need exact speeds or the order of the fractions.</p>","ja":"<p><strong>仕分けのテスト。</strong>ガイドの定義には3つの部分がある。<em>独立した</em> (discrete) 構成単位であること、<em>適応</em>していること、<em>特定の機能</em>をもつこと。細胞小器官 (organelle) が膜で囲まれている必要はない。</p>\n<table><tr><th>構造</th><th>細胞小器官か</th><th>理由</th></tr>\n<tr><td>核</td><td>はい</td><td>独立していて膜で囲まれ、DNAを保持して利用する</td></tr>\n<tr><td>リボソーム</td><td>はい</td><td>膜はないが、特定の機能 (翻訳) をもつ独立した構成単位</td></tr>\n<tr><td>小胞</td><td>はい</td><td>内容物を運ぶ・保持する、独立した膜の袋</td></tr>\n<tr><td>細胞膜</td><td>はい</td><td>独立していて、特定の機能 (何を通すかの調節) がある</td></tr>\n<tr><td>細胞壁</td><td>いいえ</td><td>細胞の外側の層で、内部の構成単位ではない</td></tr>\n<tr><td>細胞骨格</td><td>いいえ</td><td>繊維のネットワークで、独立した単位ではない</td></tr>\n<tr><td>細胞質</td><td>いいえ</td><td>細胞小器官が存在する媒質</td></tr></table>\n<p><strong>細胞分画 (cell fractionation) の手順。</strong></p>\n<ol><li>細胞と同じ溶質濃度の冷たい溶液の中で細胞を破砕 (ホモジェナイズ) する。低温は細胞小器官を消化しうる酵素の働きを遅くし、濃度が同じなら浸透で破裂・収縮しない。</li>\n<li>混合液を遠心機にかけ、低速で回す。最も大きく密度の高い細胞小器官が底に<em>沈殿</em> (pellet) する。</li>\n<li>上の液 (<em>上清</em> supernatant) を取り、より速く回して小さい細胞小器官を沈殿させる。</li>\n<li>各沈殿を調べる。好気呼吸を行うなら、ミトコンドリアを含んでいる。</li></ol>\n<p>正確な回転数や分画の順序は不要。</p>","zh":"<p><strong>分類測試。</strong>課程指引的定義有三部分：<em>獨立</em> (discrete) 的亞單位、<em>適應</em>、有<em>特定功能</em>。細胞器 (organelle) 不一定要有膜包圍。</p>\n<table><tr><th>結構</th><th>是細胞器嗎？</th><th>原因</th></tr>\n<tr><td>細胞核</td><td>是</td><td>獨立、有膜包圍；儲存及運用 DNA</td></tr>\n<tr><td>核糖體</td><td>是</td><td>獨立的亞單位，有特定功能 (翻譯)，雖然沒有膜</td></tr>\n<tr><td>囊泡</td><td>是</td><td>獨立的膜囊，運載或盛載內容物</td></tr>\n<tr><td>質膜</td><td>是</td><td>獨立，有特定功能 (控制甚麼可通過)</td></tr>\n<tr><td>細胞壁</td><td>否</td><td>位於細胞外的一層，不是細胞內的亞單位</td></tr>\n<tr><td>細胞骨架</td><td>否</td><td>纖維網絡，不是獨立單位</td></tr>\n<tr><td>細胞質</td><td>否</td><td>細胞器所在的介質</td></tr></table>\n<p><strong>細胞分餾 (cell fractionation) 的步驟。</strong></p>\n<ol><li>在與細胞溶質濃度相同的冷溶液中弄破細胞 (勻漿)。低溫減慢可能消化細胞器的酶；濃度相同可避免細胞器因滲透而脹破或縮小。</li>\n<li>把混合物放入離心機以低速旋轉：最大、密度最高的細胞器在底部形成<em>沉澱</em> (pellet)。</li>\n<li>倒出液體 (<em>上清液</em> supernatant)，以較高速度再旋轉，令較小的細胞器沉澱。</li>\n<li>測試每份沉澱。若其中一份能進行有氧呼吸，就含有線粒體。</li></ol>\n<p>不需要記確實的轉速或各部分的先後次序。</p>"},
        heading: L("Organelles", "細胞小器官", "細胞器"),
        body: L(
          `<p>An <span class="term">organelle</span> is a discrete (separate) subunit of a cell that is adapted to perform a specific function.</p>
<p><strong>The guide’s examples:</strong></p>
<ul><li><strong>Are organelles:</strong> nuclei, vesicles, ribosomes and the plasma membrane.</li>
<li><strong>Are not considered organelles:</strong> the cell wall, the cytoskeleton and the cytoplasm.</li></ul>
<p>Other organelles you meet in B2.2 are mitochondria, chloroplasts, rough endoplasmic reticulum, the Golgi apparatus and lysosomes.</p>
<div class="note"><strong>Nature of science: progress follows new techniques.</strong> Scientists could only study the function of individual organelles once <span class="term">ultracentrifuges</span> (machines that spin samples extremely fast) and methods of <span class="term">cell fractionation</span> were developed. In cell fractionation, cells are broken open and spun so that different organelles separate into layers by size and density. Each fraction can then be tested to find out what that organelle does.</div>`,
          `<p><span class="term">細胞小器官 (organelle)</span> は、特定の機能を果たすように適応した、細胞の独立した (それぞれ分かれた) 構成単位である。</p>
<p><strong>ガイドが示す例:</strong></p>
<ul><li><strong>細胞小器官である:</strong> 核、小胞、リボソーム、細胞膜。</li>
<li><strong>細胞小器官とはみなされない:</strong> 細胞壁、細胞骨格、細胞質。</li></ul>
<p>B2.2 で出てくるその他の細胞小器官は、ミトコンドリア、葉緑体、粗面小胞体、ゴルジ体、リソソームである。</p>
<div class="note"><strong>科学の本質: 進歩は新しい技術に続く。</strong> 個々の細胞小器官の機能を調べられるようになったのは、<span class="term">超遠心機 (ultracentrifuge)</span> (試料を非常に高速で回転させる機械) と<span class="term">細胞分画法 (cell fractionation)</span> が開発されてからである。細胞分画法では、細胞を壊して遠心し、細胞小器官を大きさや密度で層に分ける。各画分を調べれば、その細胞小器官の働きが分かる。</div>`,
          `<p><span class="term">細胞器 (organelle)</span> 是細胞中獨立 (分開) 的組成部分，適應於執行特定功能。</p>
<p><strong>課程指引的例子：</strong></p>
<ul><li><strong>屬於細胞器：</strong>細胞核、囊泡、核糖體和質膜。</li>
<li><strong>不被視為細胞器：</strong>細胞壁、細胞骨架和細胞質。</li></ul>
<p>在 B2.2 還會學到的細胞器有線粒體、葉綠體、粗糙內質網、高爾基體和溶酶體。</p>
<div class="note"><strong>科學本質：進步往往跟隨新技術出現。</strong>直至發明了<span class="term">超速離心機 (ultracentrifuge)</span> (把樣本以極高速度旋轉的儀器) 和<span class="term">細胞分離法 (cell fractionation)</span>，科學家才能研究個別細胞器的功能。在細胞分離法中，細胞被破開後離心，令不同細胞器按大小和密度分成不同層，然後可分別測試各部分，找出該細胞器的功能。</div>`),
        examTip: L("Remember the odd ones out: cell wall, cytoskeleton and cytoplasm are NOT organelles; nucleus, vesicles, ribosomes and the plasma membrane ARE.",
          "例外を覚える: 細胞壁・細胞骨格・細胞質は細胞小器官「ではない」。核・小胞・リボソーム・細胞膜は細胞小器官「である」。",
          "記住例外：細胞壁、細胞骨架和細胞質「不是」細胞器；細胞核、囊泡、核糖體和質膜「是」細胞器。")
      },
      {
        ref: "B2.2.2", ahl: false,
        deeper: {"en":"<p><strong>Comparing the two cell types.</strong></p>\n<table><tr><th></th><th>Eukaryote</th><th>Prokaryote</th></tr>\n<tr><td>Where is DNA?</td><td>Inside the nucleus, behind the nuclear envelope</td><td>In the cytoplasm (no nucleus)</td></tr>\n<tr><td>Transcription</td><td>In the nucleus</td><td>In the cytoplasm</td></tr>\n<tr><td>Translation</td><td>In the cytoplasm, after mRNA has left the nucleus</td><td>In the cytoplasm, can begin while mRNA is still being made</td></tr>\n<tr><td>mRNA modified before translation?</td><td>Yes, possible</td><td>No time or place for it</td></tr></table>\n<p><strong>Timeline in a eukaryote:</strong> gene copied to mRNA (nucleus) → mRNA modified (nucleus) → mRNA leaves through nuclear pores → ribosome translates (cytoplasm). Only finished mRNA reaches the ribosomes, so incomplete or faulty messages are not translated.</p>\n<div class=\"note\"><strong>Extension (not required):</strong> One example of modification in eukaryotes is the removal of non-coding sections of the transcript (introns) before the mRNA is exported.</div>\n<p><strong>A further benefit</strong> is that the DNA is kept physically apart from the many reactions and enzymes of the cytoplasm.</p>\n<p><strong>Mark-scheme language:</strong> name the location of each process (“transcription in the nucleus, translation in the cytoplasm”); say that the envelope <em>separates</em> them; and use “modification of mRNA <em>before</em> translation” as the advantage. The nuclear pores that let mRNA out are covered at HL (B2.2.6).</p>","ja":"<p><strong>2つの細胞の比較。</strong></p>\n<table><tr><th></th><th>真核生物 (eukaryote)</th><th>原核生物 (prokaryote)</th></tr>\n<tr><td>DNAの場所</td><td>核の中 (核膜 nuclear envelope の内側)</td><td>細胞質 (核はない)</td></tr>\n<tr><td>転写 (transcription)</td><td>核で</td><td>細胞質で</td></tr>\n<tr><td>翻訳 (translation)</td><td>mRNAが核を出た後、細胞質で</td><td>細胞質で、mRNAが作られている途中でも始まりうる</td></tr>\n<tr><td>翻訳の前にmRNAを修飾するか</td><td>できる</td><td>その時間も場所もない</td></tr></table>\n<p><strong>真核生物での流れ:</strong>遺伝子がmRNAに写される (核) → mRNAが修飾される (核) → mRNAが核膜孔から出る → リボソームが翻訳する (細胞質)。完成したmRNAだけがリボソームに届くので、不完全なメッセージは翻訳されない。</p>\n<div class=\"note\"><strong>発展 (必須ではない):</strong>真核生物での修飾の例として、mRNAが核外へ出る前に、転写産物のうちタンパク質をコードしない部分 (イントロン) が取り除かれる。</div>\n<p><strong>もう一つの利点</strong>は、DNAが細胞質の多くの反応や酵素から物理的に離されることである。</p>\n<p><strong>採点基準の言い方:</strong>各過程の場所を書く (「転写は核、翻訳は細胞質」)。核膜がそれらを<em>分けている</em>と述べる。利点は「翻訳の<em>前に</em>mRNAを修飾できる」。mRNAを出す核膜孔はHLで扱う (B2.2.6)。</p>","zh":"<p><strong>比較兩種細胞。</strong></p>\n<table><tr><th></th><th>真核生物 (eukaryote)</th><th>原核生物 (prokaryote)</th></tr>\n<tr><td>DNA 在哪裏？</td><td>細胞核內，由核膜 (nuclear envelope) 隔開</td><td>細胞質 (沒有細胞核)</td></tr>\n<tr><td>轉錄 (transcription)</td><td>在細胞核</td><td>在細胞質</td></tr>\n<tr><td>翻譯 (translation)</td><td>mRNA 離開細胞核後，在細胞質進行</td><td>在細胞質進行，mRNA 仍在合成時已可開始</td></tr>\n<tr><td>翻譯前能修飾 mRNA 嗎？</td><td>可以</td><td>沒有時間和地方</td></tr></table>\n<p><strong>真核生物的時間順序：</strong>基因被抄寫成 mRNA (細胞核) → mRNA 被修飾 (細胞核) → mRNA 經核孔離開 → 核糖體翻譯 (細胞質)。只有完成的 mRNA 才到達核糖體，所以不完整或有缺陷的訊息不會被翻譯。</p>\n<div class=\"note\"><strong>延伸 (非必修)：</strong>真核生物 mRNA 修飾的一個例子，是在 mRNA 輸出前，除去轉錄本中不編碼的部分 (內含子)。</div>\n<p><strong>另一個好處</strong>是 DNA 與細胞質中眾多的反應和酶在空間上分開。</p>\n<p><strong>評分準則用語：</strong>寫出各過程的位置 (「轉錄在細胞核，翻譯在細胞質」)；說明核膜把兩者<em>分隔</em>；優點要寫「<em>在</em>翻譯<em>之前</em>修飾 mRNA」。讓 mRNA 離開的核孔屬 HL 內容 (B2.2.6)。</p>"},
        heading: L("Separating the nucleus and cytoplasm", "核と細胞質の分離", "細胞核與細胞質的分隔"),
        body: L(
          `<p>In eukaryotic cells, the nucleus is separated from the cytoplasm by the nuclear envelope. This separates two activities:</p>
<ul><li><strong>Transcription</strong> (making mRNA from a gene) happens in the <strong>nucleus</strong>.</li>
<li><strong>Translation</strong> (ribosomes using mRNA to make a polypeptide) happens in the <strong>cytoplasm</strong>.</li></ul>
<p><strong>Advantage:</strong> after transcription, the mRNA can be <strong>modified in the nucleus</strong> (post-transcriptional modification) before it reaches the ribosomes. Only finished mRNA leaves the nucleus, so ribosomes do not translate unfinished mRNA.</p>
<p><strong>In prokaryotes</strong> there is no nucleus. mRNA can meet ribosomes immediately, even while it is still being made, so there is no chance to modify it first.</p>`,
          `<p>真核細胞では、核は核膜によって細胞質から分けられている。これにより2つの活動が分かれる。</p>
<ul><li><strong>転写 (transcription)</strong> (遺伝子から mRNA をつくる) は<strong>核</strong>で起こる。</li>
<li><strong>翻訳 (translation)</strong> (リボソームが mRNA を使ってポリペプチドをつくる) は<strong>細胞質</strong>で起こる。</li></ul>
<p><strong>利点:</strong> 転写の後、mRNA がリボソームに届く前に<strong>核の中で修飾</strong> (転写後修飾, post-transcriptional modification) できる。完成した mRNA だけが核から出るので、リボソームが未完成の mRNA を翻訳することはない。</p>
<p><strong>原核生物</strong>には核がない。mRNA はまだつくられている途中でもすぐにリボソームに出会うので、先に修飾する余地がない。</p>`,
          `<p>在真核細胞中，細胞核以核膜與細胞質分隔，因此把兩種活動分開：</p>
<ul><li><strong>轉錄 (transcription)</strong> (由基因製造 mRNA) 在<strong>細胞核</strong>內進行。</li>
<li><strong>翻譯 (translation)</strong> (核糖體利用 mRNA 製造多肽) 在<strong>細胞質</strong>內進行。</li></ul>
<p><strong>好處：</strong>轉錄後，mRNA 在到達核糖體前可先在<strong>核內被修飾</strong> (轉錄後修飾，post-transcriptional modification)。只有完成的 mRNA 才離開細胞核，所以核糖體不會翻譯未完成的 mRNA。</p>
<p><strong>原核生物</strong>沒有細胞核，mRNA 即使仍在合成中，也可立即與核糖體接觸，所以沒有機會先修飾。</p>`),
        examTip: L("Limit your answer to transcription vs translation and mRNA modification before it meets ribosomes. Mention the prokaryote contrast.",
          "答えは転写と翻訳の分離と、リボソームに出会う前の mRNA の修飾に絞る。原核生物との対比にも触れる。",
          "答案集中於轉錄與翻譯分開，以及 mRNA 在接觸核糖體前先被修飾，並提及原核生物的對比。")
      },
      {
        ref: "B2.2.3", ahl: false,
        deeper: {"en":"<p><strong>The two advantages with an example each.</strong></p>\n<table><tr><th>Advantage</th><th>How it works</th><th>Example</th></tr>\n<tr><td>Concentration of enzymes and substrates</td><td>A small volume keeps molecules close, so collisions between enzyme and substrate are more frequent and reactions are faster</td><td>The matrix of a mitochondrion (HL)</td></tr>\n<tr><td>Separation of incompatible processes</td><td>Harmful or opposing reactions happen in different places, and each compartment can have its own conditions</td><td>Lysosome enzymes kept away from the cytoplasm</td></tr></table>\n<p><strong>Worked example: the lysosome and pH.</strong> The inside of a lysosome is acidic, at about pH 5, while the cytoplasm is close to neutral, at about pH 7. The digestive enzymes work best at the lower pH. So (1) the membrane keeps the enzymes from digesting the cell’s own proteins, and (2) the acidic interior gives the enzymes their best conditions. Only a compartment can have a pH different from its surroundings.</p>\n<p><strong>Following a phagocytic vacuole.</strong> A white blood cell engulfs a bacterium by endocytosis → the bacterium is inside a vesicle (vacuole) → a lysosome fuses with it and releases enzymes → the bacterium is digested → useful small molecules pass into the cytoplasm.</p>\n<p><strong>A 4-mark “Explain the advantages of compartmentalization” answer:</strong> enzymes and substrates concentrated (1) so reactions faster (1); incompatible processes separated (1) with an example such as lysosome enzymes kept away from other cell components (1).</p>","ja":"<p><strong>2つの利点を、それぞれ例とともに。</strong></p>\n<table><tr><th>利点</th><th>しくみ</th><th>例</th></tr>\n<tr><td>酵素と基質の濃縮</td><td>小さな体積に分子が近くに集まり、酵素と基質の衝突が増えて反応が速くなる</td><td>ミトコンドリアのマトリックス (HL)</td></tr>\n<tr><td>両立しない過程の分離</td><td>有害な反応や逆の反応が別の場所で起こり、区画ごとに別の条件にできる</td><td>リソソームの酵素を細胞質から遠ざける</td></tr></table>\n<p><strong>例: リソソームとpH。</strong>リソソームの内部は約pH 5の酸性で、細胞質はpH 7ほどの中性に近い。消化酵素は低いpHで最もよく働く。そのため (1) 膜が、酵素が細胞自身のタンパク質を消化するのを防ぎ、(2) 酸性の内部が酵素に最適な条件を与える。周囲と違うpHをもてるのは、区画だけである。</p>\n<p><strong>食胞 (phagocytic vacuole) の流れ。</strong>白血球が細菌をエンドサイトーシスでのみ込む → 細菌は小胞 (食胞) の中 → リソソームが融合して酵素を放出する → 細菌が消化される → 有用な小さい分子が細胞質へ移る。</p>\n<p><strong>4点の「区画化の利点を説明せよ」の答え:</strong>酵素と基質が濃縮される (1点) ので反応が速い (1点)。両立しない過程が分離される (1点)。例としてリソソームの酵素を他の細胞成分から遠ざける (1点)。</p>","zh":"<p><strong>兩個好處，各配一個例子。</strong></p>\n<table><tr><th>好處</th><th>運作方式</th><th>例子</th></tr>\n<tr><td>濃縮酶和底物</td><td>細小的體積令分子靠近，酶與底物碰撞更頻密，反應更快</td><td>線粒體基質 (HL)</td></tr>\n<tr><td>分隔不相容的過程</td><td>有害或相反的反應在不同位置進行，每個區室可有自己的條件</td><td>溶酶體的酶與細胞質隔開</td></tr></table>\n<p><strong>例子：溶酶體與 pH。</strong>溶酶體內部呈酸性，約 pH 5，而細胞質接近中性，約 pH 7。消化酶在較低 pH 下作用最佳。所以 (1) 膜阻止酶消化細胞本身的蛋白質；(2) 酸性的內部給予酶最佳條件。只有區室才能有與周圍不同的 pH。</p>\n<p><strong>跟隨吞噬泡 (phagocytic vacuole)。</strong>白血球以胞吞作用吞入細菌 → 細菌在囊泡 (吞噬泡) 內 → 溶酶體與它融合並釋出酶 → 細菌被消化 → 有用的小分子進入細胞質。</p>\n<p><strong>4 分「解釋區室化的好處」的答案：</strong>酶和底物被濃縮 (1) 所以反應較快 (1)；不相容的過程被分隔 (1)，並舉例如溶酶體的酶與其他細胞成分隔開 (1)。</p>"},
        heading: L("Compartmentalization in the cytoplasm", "細胞質の区画化", "細胞質的區室化"),
        body: L(
          `<p><span class="term">Compartmentalization</span> means dividing the cytoplasm into separate membrane-bound spaces. Advantages:</p>
<ul><li><strong>Concentration of metabolites and enzymes.</strong> Substrates and enzymes are kept together in a small volume, so they meet more often and reactions are faster.</li>
<li><strong>Separation of incompatible processes.</strong> Processes that would interfere with each other or damage the cell can happen at the same time in different places. They can also have different conditions (for example a different pH) in each compartment.</li></ul>
<p><strong>Examples:</strong></p>
<ul><li><span class="term">Lysosomes</span> hold digestive (hydrolytic) enzymes inside a membrane. These enzymes would damage the cell’s own proteins and other molecules if they were free in the cytoplasm. They work best in the acidic conditions kept inside the lysosome.</li>
<li><span class="term">Phagocytic vacuoles</span> are vesicles formed when a cell engulfs particles such as bacteria by endocytosis. A lysosome fuses with the vacuole and releases its enzymes inside it, so the material is digested safely, away from the rest of the cell.</li></ul>`,
          `<p><span class="term">区画化 (compartmentalization)</span> とは、細胞質を膜で囲まれた別々の空間に分けることである。利点は次のとおり。</p>
<ul><li><strong>代謝物と酵素の濃縮。</strong> 基質と酵素が小さな体積に集まるので、出会う機会が増え、反応が速くなる。</li>
<li><strong>互いに両立しない過程の分離。</strong> 互いに邪魔し合ったり、細胞を傷つけたりする過程を、別々の場所で同時に行える。区画ごとに異なる条件 (例えば pH) にもできる。</li></ul>
<p><strong>例:</strong></p>
<ul><li><span class="term">リソソーム (lysosome)</span> は、消化 (加水分解) 酵素を膜の中に閉じ込めている。これらの酵素が細胞質中に自由にあると、細胞自身のタンパク質などを壊してしまう。リソソームの内部に保たれた酸性の条件でよく働く。</li>
<li><span class="term">食胞 (phagocytic vacuole)</span> は、細胞が細菌などの粒子をエンドサイトーシスで取り込んでできる小胞である。リソソームが融合して中に酵素を放出するので、取り込んだ物質は細胞の他の部分から離れて安全に消化される。</li></ul>`,
          `<p><span class="term">區室化 (compartmentalization)</span> 指把細胞質分成多個由膜包圍的獨立空間。好處：</p>
<ul><li><strong>濃縮代謝物和酶。</strong>底物和酶集中在細小體積內，更常相遇，反應更快。</li>
<li><strong>分隔互不相容的過程。</strong>會互相干擾或傷害細胞的過程可在不同地方同時進行，每個區室亦可有不同的條件 (例如不同的 pH)。</li></ul>
<p><strong>例子：</strong></p>
<ul><li><span class="term">溶酶體 (lysosome)</span> 把消化 (水解) 酶封在膜內。這些酶若游離在細胞質中，會破壞細胞自身的蛋白質等分子；它們在溶酶體內保持的酸性環境中作用最佳。</li>
<li><span class="term">吞噬泡 (phagocytic vacuole)</span> 是細胞以胞吞作用吞入細菌等顆粒時形成的囊泡。溶酶體與它融合，把酶釋放到泡內，所以被吞入的物質可在遠離細胞其他部分的地方被安全地消化。</li></ul>`),
        examTip: L("Give BOTH advantages (concentration; separating incompatible processes) and use lysosomes as the example of keeping harmful enzymes away from the rest of the cell.",
          "2つの利点 (濃縮、両立しない過程の分離) の両方を書き、リソソームを「有害な酵素を細胞の他の部分から隔てる」例として使う。",
          "兩個好處 (濃縮、分隔互不相容的過程) 都要寫，並以溶酶體作為把有害酶與細胞其餘部分隔開的例子。")
      },
      {
        ref: "B2.2.4", ahl: true,
        deeper: {"en":"<p><strong>Feature → effect → advantage.</strong></p>\n<table><tr><th>Feature</th><th>Effect</th><th>Advantage for ATP production</th></tr>\n<tr><td>Small intermembrane space</td><td>Pumped H⁺ raises the concentration quickly</td><td>Steep H⁺ gradient is built fast</td></tr>\n<tr><td>Cristae (folded inner membrane)</td><td>Large membrane surface area</td><td>Room for many electron-transport and ATP-synthesis proteins</td></tr>\n<tr><td>Matrix</td><td>Enzymes and substrates held together in a small volume</td><td>Krebs cycle runs efficiently</td></tr></table>\n<p><strong>Avoid:</strong> placing the Krebs cycle on the cristae (it is in the matrix); saying the cristae “make” ATP by themselves (the proteins in the membrane do).</p>\n<p><strong>Cells that need many mitochondria:</strong> muscle fibres, sperm (in the midpiece, to power the tail) and cells that carry out a lot of active transport. These cells have a high demand for ATP.</p>\n<p><strong>Worked magnification calculation.</strong> A mitochondrion measures 30 mm on an electron micrograph with magnification ×10 000.</p>\n<ol><li>Actual size = image size ÷ magnification.</li>\n<li>30 mm ÷ 10 000 = 0.003 mm.</li>\n<li>0.003 mm × 1000 = 3 µm.</li></ol>\n<p>Keep units consistent, and give the answer in µm if you can.</p>\n<p><strong>Typical 3-mark answer:</strong> name the feature, state its effect, then say how this increases ATP production.</p>","ja":"<p><strong>特徴 → 効果 → 利点。</strong></p>\n<table><tr><th>特徴</th><th>効果</th><th>ATP生産への利点</th></tr>\n<tr><td>狭い膜間腔 (intermembrane space)</td><td>くみ込まれたH⁺の濃度がすぐ上がる</td><td>急なH⁺の勾配が速くできる</td></tr>\n<tr><td>クリステ (cristae, 折りたたまれた内膜)</td><td>膜の表面積が大きい</td><td>電子伝達とATP合成のタンパク質を多く置ける</td></tr>\n<tr><td>マトリックス (matrix)</td><td>酵素と基質が小さな体積に集まる</td><td>クレブス回路が効率よく進む</td></tr></table>\n<p><strong>避けること:</strong>クレブス回路をクリステにあると書く (マトリックスで起こる)。クリステ自体がATPを「つくる」と書く (つくるのは膜のタンパク質)。</p>\n<p><strong>ミトコンドリアが多く必要な細胞:</strong>筋繊維、精子 (べん毛を動かすため中片部に)、能動輸送を多く行う細胞。これらの細胞はATPの需要が大きい。</p>\n<p><strong>倍率の計算例。</strong>倍率×10 000の電子顕微鏡写真で、ミトコンドリアが30 mmだった。</p>\n<ol><li>実際の大きさ = 像の大きさ ÷ 倍率。</li>\n<li>30 mm ÷ 10 000 = 0.003 mm。</li>\n<li>0.003 mm × 1000 = 3 µm。</li></ol>\n<p>単位をそろえ、できればµmで答える。</p>\n<p><strong>典型的な3点の答え:</strong>特徴を挙げ、その効果を述べ、それがATP生産をどう高めるかを書く。</p>","zh":"<p><strong>特徵 → 效果 → 好處。</strong></p>\n<table><tr><th>特徵</th><th>效果</th><th>對 ATP 生產的好處</th></tr>\n<tr><td>狹小的膜間腔 (intermembrane space)</td><td>被泵入的 H⁺ 濃度迅速上升</td><td>迅速建立陡峭的 H⁺ 梯度</td></tr>\n<tr><td>嵴 (cristae，內膜的摺疊)</td><td>膜表面積大</td><td>可容納大量電子傳遞及 ATP 合成的蛋白質</td></tr>\n<tr><td>基質 (matrix)</td><td>酶和底物集中在細小的體積內</td><td>克雷伯氏循環 (Krebs cycle) 有效率地運行</td></tr></table>\n<p><strong>避免：</strong>把克雷伯氏循環寫成在嵴上 (它在基質)；說嵴本身「製造」ATP (是膜中的蛋白質製造)。</p>\n<p><strong>需要大量線粒體的細胞：</strong>肌纖維、精子 (在中段，為尾部提供動力)，以及進行大量主動運輸的細胞。這些細胞對 ATP 的需求很高。</p>\n<p><strong>放大倍數計算例子。</strong>在放大 ×10 000 的電子顯微照片上，某線粒體量得 30 mm。</p>\n<ol><li>實際大小 = 影像大小 ÷ 放大倍數。</li>\n<li>30 mm ÷ 10 000 = 0.003 mm。</li>\n<li>0.003 mm × 1000 = 3 µm。</li></ol>\n<p>單位要一致，可以的話答案用 µm。</p>\n<p><strong>典型 3 分答案：</strong>指出特徵，說明其效果，再說明這如何增加 ATP 的生產。</p>"},
        heading: L("The mitochondrion", "ミトコンドリア", "線粒體"),
        body: L(
          `<p>The <span class="term">mitochondrion</span> makes ATP by aerobic cell respiration. Its adaptations:</p>
<ul><li><strong>Double membrane with a small intermembrane space.</strong> Hydrogen ions (protons) are pumped into this narrow space. Because the volume is small, their concentration rises quickly, which builds a steep gradient used to make ATP.</li>
<li><strong>Cristae (folds of the inner membrane) give a large surface area.</strong> The inner membrane carries the proteins for the electron transport chain and ATP synthesis, so more surface means more ATP made per second.</li>
<li><strong>Matrix (the fluid inside the inner membrane) compartmentalizes the enzymes and substrates of the Krebs cycle.</strong> They are concentrated together, so the cycle runs efficiently.</li></ul>
<p>(The reactions of respiration are taught in C1.2 Cell respiration; here you only need the structure–function links above.)</p>`,
          `<p><span class="term">ミトコンドリア (mitochondrion)</span> は好気的な細胞呼吸で ATP をつくる。その適応は次のとおり。</p>
<ul><li><strong>二重膜と小さな膜間腔。</strong> 水素イオン (プロトン) がこの狭い空間に汲み出される。体積が小さいので濃度がすぐ高くなり、ATP 合成に使われる急な勾配ができる。</li>
<li><strong>クリステ (cristae、内膜のひだ) が大きな表面積を与える。</strong> 内膜には電子伝達系と ATP 合成のタンパク質があるので、表面積が大きいほど毎秒つくれる ATP が増える。</li>
<li><strong>マトリックス (matrix、内膜の内側の液体) にクレブス回路の酵素と基質が区画化されている。</strong> 一か所に集まっているので、回路が効率よく進む。</li></ul>
<p>(呼吸の反応は C1.2 (細胞呼吸) で学ぶ。ここでは上の構造と機能のつながりだけでよい。)</p>`,
          `<p><span class="term">線粒體 (mitochondrion)</span> 透過有氧細胞呼吸製造 ATP。它的適應特徵：</p>
<ul><li><strong>雙層膜，膜間腔體積小。</strong>氫離子 (質子) 被泵入這個狹窄的空間，由於體積小，濃度迅速上升，形成陡峭的梯度，用於製造 ATP。</li>
<li><strong>嵴 (cristae，內膜的褶疊) 提供很大的表面積。</strong>內膜載有電子傳遞鏈及 ATP 合成所需的蛋白質，表面積越大，每秒製造的 ATP 越多。</li>
<li><strong>線粒體基質 (matrix) 把克雷布斯循環 (Krebs cycle) 的酶和底物區室化。</strong>它們集中在一起，令循環更有效率。</li></ul>
<p>(呼吸作用的反應在 C1.2 (細胞呼吸) 學習；這裏只需掌握以上結構與功能的關係。)</p>`),
        examTip: L("Link each feature to its effect: small intermembrane space → H⁺ concentration builds quickly; cristae → large surface area for ATP production; matrix → enzymes and substrates concentrated.",
          "各特徴を効果に結びつける: 小さな膜間腔→H⁺ 濃度がすぐ上がる、クリステ→ATP 産生のための大きな表面積、マトリックス→酵素と基質が集まる。",
          "把每個特徵連到其作用：膜間腔小→H⁺ 濃度迅速上升；嵴→製造 ATP 的表面積大；基質→酶和底物集中。")
      },
      {
        ref: "B2.2.5", ahl: true,
        deeper: {"en":"<p><strong>Where each stage of photosynthesis is located.</strong></p>\n<table><tr><th>Part</th><th>What is there</th><th>Link to adaptation</th></tr>\n<tr><td>Thylakoid membranes (stacked into grana)</td><td>Photosystems and the proteins that make ATP</td><td>Large surface area captures more light</td></tr>\n<tr><td>Thylakoid space (inside)</td><td>H⁺ pumped in</td><td>Small volume, so the H⁺ concentration rises quickly</td></tr>\n<tr><td>Stroma (around thylakoids)</td><td>Calvin cycle enzymes and substrates</td><td>Concentrated, so carbon fixation is efficient</td></tr></table>\n<p><strong>Compare with the mitochondrion.</strong></p>\n<table><tr><th></th><th>Mitochondrion</th><th>Chloroplast</th></tr>\n<tr><td>Folded membrane for large surface area</td><td>Cristae (inner membrane)</td><td>Thylakoid membranes</td></tr>\n<tr><td>Small space where H⁺ builds up</td><td>Intermembrane space</td><td>Thylakoid space</td></tr>\n<tr><td>Fluid with a cycle of enzymes</td><td>Matrix (Krebs cycle)</td><td>Stroma (Calvin cycle)</td></tr></table>\n<p><strong>Identifying a chloroplast in a micrograph:</strong> an oval with a double outer envelope, stacks of flattened sacs (grana) joined by single thylakoids, a granular stroma, and sometimes starch grains. Chloroplasts also contain their own DNA and ribosomes, which link to endosymbiosis in A2.1 (AHL).</p>\n<p><strong>Common error:</strong> saying H⁺ builds up in the stroma. In the chloroplast the H⁺ concentration rises <em>inside the thylakoid space</em>.</p>","ja":"<p><strong>光合成の各段階の場所。</strong></p>\n<table><tr><th>部分</th><th>そこにあるもの</th><th>適応との関係</th></tr>\n<tr><td>チラコイド膜 (グラナ granum に積み重なる)</td><td>光化学系とATPをつくるタンパク質</td><td>表面積が大きく、多くの光をとらえる</td></tr>\n<tr><td>チラコイド内腔 (thylakoid space)</td><td>くみ込まれたH⁺</td><td>体積が小さく、H⁺濃度がすぐ上がる</td></tr>\n<tr><td>ストロマ (stroma, チラコイドの周り)</td><td>カルビン回路の酵素と基質</td><td>濃縮されていて炭素固定が効率的</td></tr></table>\n<p><strong>ミトコンドリアとの比較。</strong></p>\n<table><tr><th></th><th>ミトコンドリア</th><th>葉緑体 (chloroplast)</th></tr>\n<tr><td>表面積を大きくする折りたたまれた膜</td><td>クリステ (内膜)</td><td>チラコイド膜</td></tr>\n<tr><td>H⁺がたまる小さな空間</td><td>膜間腔</td><td>チラコイド内腔</td></tr>\n<tr><td>酵素の回路がある液体</td><td>マトリックス (クレブス回路)</td><td>ストロマ (カルビン回路)</td></tr></table>\n<p><strong>顕微鏡写真で葉緑体を見分ける:</strong>2重の包膜をもつ楕円形で、平たい袋の積み重ね (グラナ) が単独のチラコイドでつながり、粒状のストロマがあり、デンプン粒がみられることもある。葉緑体は独自のDNAとリボソームももち、A2.1 (AHL) の細胞内共生とつながる。</p>\n<p><strong>よくある誤り:</strong>H⁺がストロマにたまると書く。葉緑体では、H⁺濃度は<em>チラコイド内腔</em>で上がる。</p>","zh":"<p><strong>光合作用各階段的位置。</strong></p>\n<table><tr><th>部分</th><th>存在的東西</th><th>與適應的關係</th></tr>\n<tr><td>類囊體膜 (堆疊成基粒 grana)</td><td>光系統和製造 ATP 的蛋白質</td><td>表面積大，可捕獲更多光</td></tr>\n<tr><td>類囊體內腔 (thylakoid space)</td><td>被泵入的 H⁺</td><td>體積小，H⁺ 濃度迅速上升</td></tr>\n<tr><td>葉綠體基質 (stroma，在類囊體周圍)</td><td>卡爾文循環的酶和底物</td><td>集中，所以碳固定有效率</td></tr></table>\n<p><strong>與線粒體比較。</strong></p>\n<table><tr><th></th><th>線粒體</th><th>葉綠體 (chloroplast)</th></tr>\n<tr><td>摺疊的膜，表面積大</td><td>嵴 (內膜)</td><td>類囊體膜</td></tr>\n<tr><td>H⁺ 積聚的小空間</td><td>膜間腔</td><td>類囊體內腔</td></tr>\n<tr><td>含一組酶循環的液體</td><td>基質 (克雷伯氏循環)</td><td>基質 (卡爾文循環)</td></tr></table>\n<p><strong>在顯微照片中辨認葉綠體：</strong>橢圓形，有雙層外膜，扁平囊堆疊成基粒並由單個類囊體相連，基質呈顆粒狀，有時可見澱粉粒。葉綠體亦含有自己的 DNA 和核糖體，與 A2.1 (AHL) 的內共生有關。</p>\n<p><strong>常見錯誤：</strong>說 H⁺ 在基質中積聚。在葉綠體中，H⁺ 濃度是在<em>類囊體內腔</em>上升。</p>"},
        heading: L("The chloroplast", "葉緑体", "葉綠體"),
        body: L(
          `<p>The <span class="term">chloroplast</span> carries out photosynthesis. Its adaptations:</p>
<ul><li><strong>Large surface area of thylakoid membranes with photosystems.</strong> The thylakoid membranes (stacked in grana) are covered with <span class="term">photosystems</span> (groups of pigments and proteins that capture light). More membrane means more light captured and more ATP made.</li>
<li><strong>Small volume inside the thylakoids.</strong> Hydrogen ions are pumped into the thylakoid space. Because the volume is small, their concentration rises quickly, building a steep gradient used to make ATP.</li>
<li><strong>The stroma compartmentalizes the enzymes and substrates of the Calvin cycle.</strong> The stroma is the fluid around the thylakoids. Concentrating the enzymes and substrates there makes carbon fixation efficient.</li></ul>
<p>Notice the similarity with the mitochondrion: a folded membrane for a large surface area, a small space where H⁺ builds up, and a fluid compartment for a cycle of enzymes.</p>`,
          `<p><span class="term">葉緑体 (chloroplast)</span> は光合成を行う。その適応は次のとおり。</p>
<ul><li><strong>光化学系をもつチラコイド膜の大きな表面積。</strong> チラコイド膜 (グラナに積み重なる) は<span class="term">光化学系 (photosystem)</span> (光を捉える色素とタンパク質の集まり) で覆われている。膜が多いほど、捉える光も、つくる ATP も増える。</li>
<li><strong>チラコイド内腔の小さな体積。</strong> 水素イオンはチラコイドの内側に汲み込まれる。体積が小さいので濃度がすぐ上がり、ATP 合成に使われる急な勾配ができる。</li>
<li><strong>ストロマ (stroma) にカルビン回路の酵素と基質が区画化されている。</strong> ストロマはチラコイドの周りの液体である。酵素と基質がそこに集まるので、炭素固定が効率よく進む。</li></ul>
<p>ミトコンドリアとの共通点に注目しよう: 大きな表面積のための折りたたまれた膜、H⁺ がたまる小さな空間、酵素の回路のための液体の区画。</p>`,
          `<p><span class="term">葉綠體 (chloroplast)</span> 進行光合作用。它的適應特徵：</p>
<ul><li><strong>類囊體膜 (thylakoid membrane) 表面積大，載有光系統。</strong>類囊體膜 (堆疊成基粒) 上覆蓋着<span class="term">光系統 (photosystem)</span> (捕捉光的色素和蛋白質組合)。膜越多，捕捉的光越多，製造的 ATP 也越多。</li>
<li><strong>類囊體內腔體積小。</strong>氫離子被泵入類囊體內腔，由於體積小，濃度迅速上升，形成陡峭的梯度，用於製造 ATP。</li>
<li><strong>葉綠體基質 (stroma) 把卡爾文循環 (Calvin cycle) 的酶和底物區室化。</strong>基質是類囊體周圍的液體；酶和底物集中在此，令碳固定更有效率。</li></ul>
<p>留意它與線粒體的相似之處：折疊的膜提供大表面積、H⁺ 積聚的小空間，以及容納酶循環的液體區室。</p>`),
        examTip: L("Same logic as the mitochondrion. For “explain adaptations”, name the feature, then say what it makes possible.",
          "ミトコンドリアと同じ考え方。「適応を説明せよ」では、特徴を挙げ、それが何を可能にするかを述べる。",
          "思路與線粒體相同。回答「解釋適應特徵」時，先指出特徵，再說明它帶來甚麼作用。")
      },
      {
        ref: "B2.2.6", ahl: true,
        deeper: {"en":"<p><strong>What crosses the envelope?</strong> The two membranes block large molecules, so every large molecule must use a pore.</p>\n<table><tr><th>Direction</th><th>Examples</th><th>Why</th></tr>\n<tr><td>Out of the nucleus</td><td>mRNA; ribosome subunits</td><td>mRNA is translated in the cytoplasm; ribosomes work in the cytoplasm</td></tr>\n<tr><td>Into the nucleus</td><td>Enzymes for DNA copying and transcription; nucleotides</td><td>Needed to copy DNA and make RNA</td></tr></table>\n<p>Because the pores control passage, DNA stays inside while the copies of its instructions (mRNA) go out.</p>\n<p><strong>Breakdown and reforming.</strong></p>\n<ol><li>At the start of mitosis or meiosis, the nuclear envelope breaks into small vesicles.</li>\n<li>The chromosomes are now free to be moved apart by the spindle.</li>\n<li>At the end, vesicles fuse again around each new set of chromosomes to reform nuclei.</li></ol>\n<p>This works because membranes are fluid and can pinch off and fuse (B2.1.13). Mitosis is covered in D2.1.</p>\n<p><strong>Link to the RER.</strong> The outer membrane of the nuclear envelope is continuous with the membrane of the rough endoplasmic reticulum.</p>\n<p><strong>Mark-scheme language:</strong> “double membrane / two membranes”, “pores allow mRNA out, enzymes and nucleotides in”, “breaks into vesicles during division”. Avoid “pores let everything through”: passage is controlled.</p>","ja":"<p><strong>核膜は何を通すか。</strong>2枚の膜は大きな分子を通さないので、大きな分子はすべて核膜孔 (pore) を通る必要がある。</p>\n<table><tr><th>方向</th><th>例</th><th>理由</th></tr>\n<tr><td>核の外へ</td><td>mRNA、リボソームの部品</td><td>mRNAは細胞質で翻訳される。リボソームは細胞質で働く</td></tr>\n<tr><td>核の中へ</td><td>DNA複製や転写の酵素、ヌクレオチド</td><td>DNAを複製し、RNAをつくるのに必要</td></tr></table>\n<p>孔が通過を調節するので、DNAは内側にとどまり、その指令のコピー (mRNA) だけが外に出る。</p>\n<p><strong>崩壊と再形成。</strong></p>\n<ol><li>体細胞分裂や減数分裂の始めに、核膜が小さな小胞に分かれる。</li>\n<li>染色体が紡錘体によって引き離されるようになる。</li>\n<li>終わりに、小胞が新しい染色体の組の周りで再び融合し、核を再形成する。</li></ol>\n<p>膜が流動的で、くびれ切れたり融合したりできるからである (B2.1.13)。体細胞分裂 (mitosis) はD2.1で扱う。</p>\n<p><strong>粗面小胞体 (RER) とのつながり。</strong>核膜の外膜は粗面小胞体の膜とつながっている。</p>\n<p><strong>採点基準の言い方:</strong>「2重膜 / 2枚の膜」「孔はmRNAを出し、酵素とヌクレオチドを入れる」「分裂中に小胞に分かれる」。「孔は何でも通す」は避ける。通過は調節されている。</p>","zh":"<p><strong>核膜讓甚麼通過？</strong>兩層膜會阻擋大分子，所以所有大分子都必須經核孔 (pore) 通過。</p>\n<table><tr><th>方向</th><th>例子</th><th>原因</th></tr>\n<tr><td>離開細胞核</td><td>mRNA；核糖體組件</td><td>mRNA 在細胞質被翻譯；核糖體在細胞質運作</td></tr>\n<tr><td>進入細胞核</td><td>DNA 複製及轉錄所需的酶；核苷酸</td><td>複製 DNA 和製造 RNA 所需</td></tr></table>\n<p>因為核孔控制通過，DNA 留在核內，而其指令的複本 (mRNA) 則送出去。</p>\n<p><strong>破裂與重組。</strong></p>\n<ol><li>有絲分裂或減數分裂開始時，核膜分裂成細小的囊泡。</li>\n<li>染色體於是可被紡錘體拉開。</li>\n<li>分裂完結時，囊泡圍繞每組新的染色體再次融合，重新形成細胞核。</li></ol>\n<p>這是因為膜是流動的，可以夾斷和融合 (B2.1.13)。有絲分裂 (mitosis) 在 D2.1 學習。</p>\n<p><strong>與粗糙內質網 (RER) 的關係。</strong>核膜的外膜與粗糙內質網的膜相連。</p>\n<p><strong>評分準則用語：</strong>「雙層膜／兩層膜」、「核孔讓 mRNA 出去，讓酶和核苷酸進入」、「分裂時分裂成囊泡」。避免寫「核孔讓所有東西通過」：通過是受控制的。</p>"},
        heading: L("The double membrane of the nucleus", "核の二重膜", "細胞核的雙層膜"),
        body: L(
          `<p>The nucleus is surrounded by a <span class="term">nuclear envelope</span>: two membranes. Together they form a strong, tightly controlled barrier that separates the DNA from the cytoplasm (B2.2.2).</p>
<p><strong>Nuclear pores.</strong> The envelope has many <span class="term">pores</span>: protein-lined channels through both membranes. They are needed because the membranes alone would block large molecules. Pores let mRNA and ribosome parts leave the nucleus, and let proteins (such as enzymes for DNA copying) and nucleotides enter, in a controlled way.</p>
<p><strong>Breaking into vesicles.</strong> During mitosis and meiosis, the nuclear envelope breaks up into small <strong>vesicles</strong> so that chromosomes can be moved apart by the spindle. It reforms around each new set of chromosomes afterwards. This is possible because membranes are fluid and can break into vesicles and fuse again (B2.1.13).</p>`,
          `<p>核は<span class="term">核膜 (nuclear envelope)</span> という2枚の膜で囲まれている。これらは合わさって丈夫で厳密に制御された障壁となり、DNA を細胞質から分ける (B2.2.2)。</p>
<p><strong>核膜孔 (nuclear pore)。</strong> 核膜には両方の膜を貫く、タンパク質で縁取られた通路である多数の<span class="term">孔</span>がある。膜だけでは大きな分子が通れないので必要である。孔を通って、mRNA やリボソームの部品が核から出て、タンパク質 (DNA 複製の酵素など) やヌクレオチドが制御されて核に入る。</p>
<p><strong>小胞に分かれる。</strong> 体細胞分裂や減数分裂のとき、核膜は小さな<strong>小胞</strong>に分かれ、紡錘体が染色体を引き離せるようになる。その後、新しい染色体のまとまりの周りに再び形成される。膜が流動的で、小胞に分かれたり再び融合したりできるので可能になる (B2.1.13)。</p>`,
          `<p>細胞核被<span class="term">核膜 (nuclear envelope)</span> 包圍，核膜由兩層膜組成。它們一起形成堅固而受嚴密控制的屏障，把 DNA 與細胞質分隔 (B2.2.2)。</p>
<p><strong>核孔 (nuclear pore)。</strong>核膜有很多<span class="term">孔</span>，是貫穿兩層膜、內襯蛋白質的通道。因為單靠膜會阻擋大分子，所以需要核孔。核孔讓 mRNA 和核糖體的組件離開細胞核，也讓蛋白質 (如複製 DNA 的酶) 和核苷酸受控地進入。</p>
<p><strong>分解成囊泡。</strong>在有絲分裂和減數分裂時，核膜會分解成細小的<strong>囊泡</strong>，使紡錘體能把染色體拉開；之後核膜會在每組新染色體周圍重新形成。這是因為膜具流動性，可分解成囊泡並再融合 (B2.1.13)。</p>`),
        links: undefined
      },
      {
        ref: "B2.2.7", ahl: true,
        deeper: {"en":"<p><strong>Two destinations for proteins.</strong></p>\n<table><tr><th></th><th>Free ribosomes</th><th>Ribosomes on the RER</th></tr>\n<tr><td>Where the protein goes</td><td>Stays in the cell, used in the cytoplasm</td><td>Transported within the cell, or secreted</td></tr>\n<tr><td>Examples</td><td>Enzymes that work in the cytoplasm, such as the enzymes of glycolysis</td><td>Insulin and digestive enzymes (secreted); membrane proteins and lysosome enzymes (transported inside the cell)</td></tr>\n<tr><td>Which cells have lots?</td><td>Cells making proteins for their own use</td><td>Gland cells, e.g. pancreatic cells secreting enzymes</td></tr></table>\n<p><strong>Following one protein from the RER.</strong></p>\n<ol><li>mRNA binds to a ribosome attached to the RER.</li>\n<li>As the polypeptide is made, it is threaded into the space inside the RER.</li>\n<li>The RER sacs (cisternae) hold and begin to fold the protein.</li>\n<li>A vesicle buds off, carrying the protein to the Golgi apparatus (B2.2.8).</li></ol>\n<p>The ribosomes themselves are the same in both groups; what differs is where the polypeptide they make is going.</p>\n<p><strong>Mark-scheme language:</strong> link location to destination: “free ribosomes make proteins for use <em>within</em> the cell; ribosomes on RER make proteins for secretion or transport within the cell”. A typical examination question gives a cell type, such as a gland cell with abundant RER, and asks you to explain why.</p>","ja":"<p><strong>タンパク質の2つの行き先。</strong></p>\n<table><tr><th></th><th>遊離リボソーム (free ribosome)</th><th>粗面小胞体上のリボソーム</th></tr>\n<tr><td>タンパク質の行き先</td><td>細胞内にとどまり、細胞質で使われる</td><td>細胞内で輸送される、または分泌される</td></tr>\n<tr><td>例</td><td>細胞質で働く酵素 (解糖系の酵素など)</td><td>インスリンや消化酵素 (分泌)。膜タンパク質やリソソームの酵素 (細胞内で輸送)</td></tr>\n<tr><td>多い細胞</td><td>自分のために使うタンパク質をつくる細胞</td><td>腺細胞 (酵素を分泌する膵臓の細胞など)</td></tr></table>\n<p><strong>粗面小胞体 (RER) から出る1つのタンパク質を追う。</strong></p>\n<ol><li>mRNAが粗面小胞体に付いたリボソームに結合する。</li>\n<li>ポリペプチドがつくられるにつれ、粗面小胞体の内部の空間に送り込まれる。</li>\n<li>粗面小胞体の袋 (槽 cisternae) がタンパク質を保持し、折りたたみを始める。</li>\n<li>小胞が出芽して、タンパク質をゴルジ体へ運ぶ (B2.2.8)。</li></ol>\n<p>リボソーム自体はどちらのグループでも同じで、違うのは、つくるポリペプチドの行き先である。</p>\n<p><strong>採点基準の言い方:</strong>場所と行き先を結びつける:「遊離リボソームは細胞<em>内</em>で使うタンパク質をつくり、粗面小胞体のリボソームは分泌または細胞内輸送されるタンパク質をつくる」。RERが豊富な腺細胞など細胞の種類を示して、その理由を説明させる問題がよく出る。</p>","zh":"<p><strong>蛋白質的兩個去向。</strong></p>\n<table><tr><th></th><th>游離核糖體 (free ribosome)</th><th>附在粗糙內質網上的核糖體</th></tr>\n<tr><td>蛋白質的去向</td><td>留在細胞內，在細胞質中使用</td><td>在細胞內運送，或被分泌</td></tr>\n<tr><td>例子</td><td>在細胞質中運作的酶，如糖酵解的酶</td><td>胰島素和消化酶 (分泌)；膜蛋白和溶酶體的酶 (在細胞內運送)</td></tr>\n<tr><td>哪些細胞較多？</td><td>製造自用蛋白質的細胞</td><td>腺細胞，如分泌酶的胰臟細胞</td></tr></table>\n<p><strong>追蹤一個離開粗糙內質網 (RER) 的蛋白質。</strong></p>\n<ol><li>mRNA 與附在 RER 上的核糖體結合。</li>\n<li>多肽鏈合成時，被穿入 RER 內部的空間。</li>\n<li>RER 的扁囊 (cisternae) 容納並開始摺疊蛋白質。</li>\n<li>囊泡出芽，把蛋白質運往高爾基體 (B2.2.8)。</li></ol>\n<p>兩組核糖體本身是一樣的，分別在於它們所製造的多肽要去哪裏。</p>\n<p><strong>評分準則用語：</strong>把位置與去向連繫起來：「游離核糖體製造在細胞<em>內</em>使用的蛋白質；RER 上的核糖體製造要分泌或在細胞內運送的蛋白質」。常見題目會給出一種細胞，如有大量 RER 的腺細胞，要求你解釋原因。</p>"},
        heading: L("Free ribosomes and rough endoplasmic reticulum", "遊離リボソームと粗面小胞体", "游離核糖體與粗糙內質網"),
        body: L(
          `<p><span class="term">Ribosomes</span> make polypeptides by translation. There are two groups:</p>
<ul><li><strong>Free ribosomes</strong> float in the cytoplasm. They make proteins that are <strong>kept in the cell</strong> and used inside it, for example enzymes that work in the cytoplasm.</li>
<li><strong>Ribosomes on the rough endoplasmic reticulum (RER).</strong> The RER is a system of flattened, membrane-bound sacs (cisternae) with ribosomes attached to the outer surface, which gives the “rough” look. These ribosomes make proteins that are <strong>transported within the cell</strong> (for example to the Golgi apparatus, lysosomes or the plasma membrane) or <strong>secreted</strong> (released from the cell).</li></ul>
<p>As a ribosome on the RER makes a polypeptide, the chain passes into the space inside the RER. Vesicles then bud off from the RER carrying the protein onward.</p>
<table><tr><th></th><th>Free ribosomes</th><th>Ribosomes on RER</th></tr>
<tr><td>Location</td><td>Cytoplasm</td><td>Attached to RER membrane</td></tr>
<tr><td>Proteins made</td><td>For use inside the cell</td><td>For transport within the cell or secretion</td></tr></table>`,
          `<p><span class="term">リボソーム (ribosome)</span> は翻訳によってポリペプチドをつくる。2つのグループがある。</p>
<ul><li><strong>遊離リボソーム (free ribosome)</strong> は細胞質に浮かんでいる。細胞内で<strong>保持され</strong>、細胞内で使われるタンパク質 (例えば細胞質で働く酵素) をつくる。</li>
<li><strong>粗面小胞体 (rough endoplasmic reticulum, RER) 上のリボソーム。</strong> RER は、膜で囲まれた平たい袋 (槽, cisternae) の系で、外側の表面にリボソームが付着しているため「粗面」に見える。これらのリボソームは、<strong>細胞内で輸送される</strong> (例えばゴルジ体、リソソーム、細胞膜へ) か<strong>分泌される</strong> (細胞外へ放出される) タンパク質をつくる。</li></ul>
<p>RER 上のリボソームがポリペプチドをつくると、その鎖は RER の内側の空間へ入る。その後、RER から小胞が出芽し、タンパク質を次へ運ぶ。</p>
<table><tr><th></th><th>遊離リボソーム</th><th>RER 上のリボソーム</th></tr>
<tr><td>場所</td><td>細胞質</td><td>RER の膜に付着</td></tr>
<tr><td>つくるタンパク質</td><td>細胞内で使うもの</td><td>細胞内輸送または分泌されるもの</td></tr></table>`,
          `<p><span class="term">核糖體 (ribosome)</span> 透過翻譯製造多肽，分為兩類：</p>
<ul><li><strong>游離核糖體 (free ribosome)</strong> 在細胞質中漂浮，製造<strong>留在細胞內</strong>並在細胞內使用的蛋白質，例如在細胞質中作用的酶。</li>
<li><strong>粗糙內質網 (rough endoplasmic reticulum, RER) 上的核糖體。</strong>RER 是由膜包圍的扁平囊 (池, cisternae) 組成的系統，外表面附着核糖體，所以看來「粗糙」。這些核糖體製造的蛋白質會<strong>在細胞內運送</strong> (例如到高爾基體、溶酶體或質膜) 或被<strong>分泌</strong> (釋出細胞外)。</li></ul>
<p>RER 上的核糖體合成多肽時，多肽鏈會進入 RER 內部的空間，然後囊泡從 RER 出芽，把蛋白質運往下一站。</p>
<table><tr><th></th><th>游離核糖體</th><th>RER 上的核糖體</th></tr>
<tr><td>位置</td><td>細胞質</td><td>附於 RER 的膜</td></tr>
<tr><td>製造的蛋白質</td><td>供細胞內使用</td><td>供細胞內運送或分泌</td></tr></table>`),
        examTip: L("The contrast the guide wants: free ribosomes → proteins kept in the cell; RER ribosomes → proteins for transport within the cell and secretion.",
          "ガイドが求める対比: 遊離リボソーム→細胞内に保持されるタンパク質、RER のリボソーム→細胞内輸送と分泌のタンパク質。",
          "課程指引要求的對比：游離核糖體→留在細胞內的蛋白質；RER 上的核糖體→供細胞內運送及分泌的蛋白質。")
      },
      {
        ref: "B2.2.8", ahl: true,
        deeper: {"en":"<p><strong>The secretory pathway in detail.</strong></p>\n<table><tr><th>Step</th><th>Where</th><th>What happens</th></tr>\n<tr><td>1</td><td>Ribosome on RER</td><td>Polypeptide made and passes into the RER</td></tr>\n<tr><td>2</td><td>Vesicle from RER</td><td>Carries the protein to the Golgi apparatus</td></tr>\n<tr><td>3</td><td>Golgi apparatus</td><td>Vesicle fuses with the Golgi; the protein is modified (processed)</td></tr>\n<tr><td>4</td><td>Vesicle from Golgi</td><td>Finished protein is sorted and packaged</td></tr>\n<tr><td>5</td><td>Plasma membrane</td><td>Vesicle fuses with the membrane; exocytosis releases the protein</td></tr></table>\n<p>Not every Golgi vesicle is for secretion. Some deliver proteins to the plasma membrane to become membrane proteins, and some become lysosomes carrying digestive enzymes.</p>\n<p>Cells that secrete a lot of protein have an extensive RER and many Golgi stacks, with many vesicles between them.</p>\n<div class=\"note\"><strong>Extension (not required):</strong> The order RER → Golgi → vesicles → outside was shown by pulse-chase experiments. Cells were given radioactive amino acids briefly, then normal ones. Radioactivity appeared first in the RER, later in the Golgi, then in secretory vesicles, and finally outside the cell.</div>\n<p><strong>Marks are earned by</strong> giving the steps in order and naming the vesicles that link them. <strong>Marks are lost by</strong> making the Golgi the place where proteins are <em>made</em> (it processes and packages them) or by sending the protein directly from RER to the membrane.</p>","ja":"<p><strong>分泌経路の詳細。</strong></p>\n<table><tr><th>段階</th><th>場所</th><th>起こること</th></tr>\n<tr><td>1</td><td>粗面小胞体 (RER) 上のリボソーム</td><td>ポリペプチドがつくられ、RERの内部に入る</td></tr>\n<tr><td>2</td><td>RERからの小胞</td><td>タンパク質をゴルジ体 (Golgi apparatus) へ運ぶ</td></tr>\n<tr><td>3</td><td>ゴルジ体</td><td>小胞がゴルジ体と融合し、タンパク質が修飾 (プロセシング processing) される</td></tr>\n<tr><td>4</td><td>ゴルジ体からの小胞</td><td>完成したタンパク質が仕分けされ、包まれる</td></tr>\n<tr><td>5</td><td>細胞膜</td><td>小胞が膜と融合し、エキソサイトーシスでタンパク質が放出される</td></tr></table>\n<p>ゴルジ体の小胞がすべて分泌用とは限らない。細胞膜に運ばれて膜タンパク質になるものや、消化酵素を運ぶリソソームになるものもある。</p>\n<p>タンパク質を多く分泌する細胞は、RERが発達し、ゴルジ体の積み重ねが多く、その間に多くの小胞がある。</p>\n<div class=\"note\"><strong>発展 (必須ではない):</strong>RER → ゴルジ体 → 小胞 → 細胞外という順序は、パルスチェイス実験で示された。細胞に放射性アミノ酸を短時間与え、その後は通常のアミノ酸を与えた。放射能は最初にRERに、のちにゴルジ体に、次に分泌小胞に現れ、最後に細胞の外に出た。</div>\n<p><strong>得点になること:</strong>段階を順に書き、それらをつなぐ小胞を明記する。<strong>失点すること:</strong>ゴルジ体でタンパク質が<em>つくられる</em>と書く (ゴルジ体は修飾して包む)。RERから直接細胞膜へ送ると書く。</p>","zh":"<p><strong>分泌途徑的詳細步驟。</strong></p>\n<table><tr><th>步驟</th><th>位置</th><th>情況</th></tr>\n<tr><td>1</td><td>粗糙內質網 (RER) 上的核糖體</td><td>合成多肽，並進入 RER</td></tr>\n<tr><td>2</td><td>由 RER 而來的囊泡</td><td>把蛋白質運往高爾基體 (Golgi apparatus)</td></tr>\n<tr><td>3</td><td>高爾基體</td><td>囊泡與高爾基體融合；蛋白質被修飾 (加工 processing)</td></tr>\n<tr><td>4</td><td>由高爾基體而來的囊泡</td><td>完成的蛋白質被分揀和包裝</td></tr>\n<tr><td>5</td><td>質膜</td><td>囊泡與膜融合；以胞吐作用釋出蛋白質</td></tr></table>\n<p>並非每個高爾基體囊泡都用於分泌。有些把蛋白質送到質膜成為膜蛋白，有些變成載有消化酶的溶酶體。</p>\n<p>分泌大量蛋白質的細胞，有發達的 RER 和很多高爾基體堆疊，兩者之間有許多囊泡。</p>\n<div class=\"note\"><strong>延伸 (非必修)：</strong>RER → 高爾基體 → 囊泡 → 細胞外 這個次序，是由脈衝追蹤 (pulse-chase) 實驗顯示的。先短暫給細胞放射性氨基酸，其後改給一般氨基酸。放射性首先出現在 RER，其後在高爾基體，再到分泌囊泡，最後出現在細胞外。</div>\n<p><strong>可得分：</strong>依次寫出各步驟，並指出連繫各步驟的囊泡。<strong>會失分：</strong>寫高爾基體是蛋白質<em>製造</em>的地方 (它負責加工和包裝)，或寫蛋白質由 RER 直接送到質膜。</p>"},
        heading: L("The Golgi apparatus", "ゴルジ体", "高爾基體"),
        body: L(
          `<p>The <span class="term">Golgi apparatus</span> is a stack of flattened, membrane-bound sacs. Its roles (limited to protein in this course):</p>
<ul><li><strong>Processing</strong>: it receives proteins in vesicles from the rough ER and <strong>modifies</strong> them.</li>
<li><strong>Secretion</strong>: it sorts and packages the finished proteins into vesicles that leave the Golgi. Vesicles for secretion move to the plasma membrane and fuse with it (exocytosis), releasing the protein outside the cell.</li></ul>
<p><strong>Pathway for a secreted protein:</strong> ribosome on RER → inside the RER → vesicle → Golgi apparatus (processing) → vesicle → plasma membrane → exocytosis. Cells that secrete a lot of protein, such as gland cells that release digestive enzymes, have large amounts of RER and Golgi apparatus.</p>`,
          `<p><span class="term">ゴルジ体 (Golgi apparatus)</span> は、膜で囲まれた平たい袋が積み重なったものである。その役割 (この課程ではタンパク質に限る) は次のとおり。</p>
<ul><li><strong>プロセシング (processing)</strong>: 粗面小胞体から小胞で運ばれてきたタンパク質を受け取り、<strong>修飾</strong>する。</li>
<li><strong>分泌 (secretion)</strong>: 完成したタンパク質を仕分けして小胞に包み、ゴルジ体から送り出す。分泌用の小胞は細胞膜へ移動して融合し (エキソサイトーシス)、タンパク質を細胞外へ放出する。</li></ul>
<p><strong>分泌タンパク質の経路:</strong> RER 上のリボソーム→RER の内部→小胞→ゴルジ体 (プロセシング)→小胞→細胞膜→エキソサイトーシス。消化酵素を放出する腺細胞のように、タンパク質を大量に分泌する細胞は、RER とゴルジ体が多い。</p>`,
          `<p><span class="term">高爾基體 (Golgi apparatus)</span> 是由膜包圍的扁平囊堆疊而成。它的功能 (在本課程只限於蛋白質)：</p>
<ul><li><strong>加工 (processing)</strong>：接收由粗糙內質網以囊泡送來的蛋白質，並對它們進行<strong>修飾</strong>。</li>
<li><strong>分泌 (secretion)</strong>：把完成的蛋白質分類並包裝入囊泡，離開高爾基體。用於分泌的囊泡移向質膜並與之融合 (胞吐作用)，把蛋白質釋出細胞外。</li></ul>
<p><strong>分泌蛋白的途徑：</strong>RER 上的核糖體→RER 內部→囊泡→高爾基體 (加工)→囊泡→質膜→胞吐作用。分泌大量蛋白質的細胞，例如釋出消化酶的腺細胞，含有大量 RER 和高爾基體。</p>`),
        links: undefined
      },
      {
        ref: "B2.2.9", ahl: true,
        deeper: {"en":"<p><strong>How a clathrin-coated vesicle forms.</strong></p>\n<ol><li>At a patch of membrane (the plasma membrane or the Golgi), cargo to be moved gathers.</li>\n<li>Clathrin molecules assemble into a cage-like coat on the <em>cytoplasmic</em> side of the patch.</li>\n<li>The coat pulls the membrane into a curved bud.</li>\n<li>The bud pinches off as a vesicle.</li>\n<li>The clathrin coat is removed, so the vesicle can fuse with its target membrane.</li></ol>\n<p>Clathrin is a protein, not a lipid, and it makes the vesicle <em>form</em>: it does not carry the cargo.</p>\n<table><tr><th>Vesicle journey</th><th>From</th><th>To</th></tr>\n<tr><td>Secretory protein</td><td>RER → Golgi → plasma membrane</td><td>Outside the cell (exocytosis)</td></tr>\n<tr><td>Endocytosis</td><td>Plasma membrane</td><td>Inside the cell</td></tr>\n<tr><td>Digestive enzymes</td><td>Golgi</td><td>Lysosome</td></tr></table>\n<p><strong>Why vesicles are useful.</strong> A vesicle moves its cargo without exposing it to the cytoplasm (compartmentalization), and it lets a large molecule cross a membrane by fusing with it. Membrane fluidity (B2.1) makes budding and fusion possible.</p>\n<p><strong>Mark-scheme language:</strong> “clathrin forms a coat on the cytoplasmic side”, “helps the membrane bend into a bud and pinch off to form a vesicle”, “used at the plasma membrane and Golgi apparatus”.</p>","ja":"<p><strong>クラスリンで覆われた小胞のできかた。</strong></p>\n<ol><li>膜の一部分 (細胞膜またはゴルジ体) に、運ぶ積荷が集まる。</li>\n<li>クラスリン (clathrin) 分子が、その部分の<em>細胞質側</em>に、かご状の被覆をつくる。</li>\n<li>被覆が膜を引っ張り、曲がったふくらみ (出芽) をつくる。</li>\n<li>ふくらみがくびれ切れて小胞になる。</li>\n<li>クラスリンの被覆が外され、小胞が目的の膜と融合できるようになる。</li></ol>\n<p>クラスリンは脂質ではなくタンパク質で、小胞が<em>できる</em>のを助ける。積荷を運ぶのではない。</p>\n<table><tr><th>小胞の行き先</th><th>出発点</th><th>到着点</th></tr>\n<tr><td>分泌タンパク質</td><td>RER → ゴルジ体 → 細胞膜</td><td>細胞の外 (エキソサイトーシス)</td></tr>\n<tr><td>エンドサイトーシス</td><td>細胞膜</td><td>細胞の内側</td></tr>\n<tr><td>消化酵素</td><td>ゴルジ体</td><td>リソソーム</td></tr></table>\n<p><strong>小胞が役立つ理由。</strong>小胞は積荷を細胞質にさらさずに運べる (区画化)。膜と融合することで、大きな分子が膜を越えられる。膜の流動性 (B2.1) が出芽と融合を可能にする。</p>\n<p><strong>採点基準の言い方:</strong>「クラスリンは細胞質側に被覆をつくる」「膜が曲がって出芽し、くびれ切れて小胞になるのを助ける」「細胞膜とゴルジ体で使われる」。</p>","zh":"<p><strong>有網格蛋白 (clathrin) 外衣的囊泡如何形成。</strong></p>\n<ol><li>在一片膜 (質膜或高爾基體) 上，要運送的物質聚集。</li>\n<li>網格蛋白分子在該片膜的<em>細胞質</em>一側組成籠狀外衣。</li>\n<li>外衣把膜拉成彎曲的芽狀凸起。</li>\n<li>芽狀凸起夾斷，形成囊泡。</li>\n<li>網格蛋白外衣被移除，囊泡才能與目標膜融合。</li></ol>\n<p>網格蛋白是蛋白質，不是脂質，它協助囊泡<em>形成</em>，並不負責運載物質。</p>\n<table><tr><th>囊泡的旅程</th><th>起點</th><th>終點</th></tr>\n<tr><td>分泌蛋白</td><td>RER → 高爾基體 → 質膜</td><td>細胞外 (胞吐作用)</td></tr>\n<tr><td>胞吞作用</td><td>質膜</td><td>細胞內</td></tr>\n<tr><td>消化酶</td><td>高爾基體</td><td>溶酶體</td></tr></table>\n<p><strong>囊泡為何有用。</strong>囊泡運送物質時不會令物質暴露於細胞質 (區室化)，而且它與膜融合，可讓大分子跨越膜。膜的流動性 (B2.1) 令出芽和融合成為可能。</p>\n<p><strong>評分準則用語：</strong>「網格蛋白在細胞質一側形成外衣」、「協助膜彎曲成芽狀並夾斷成囊泡」、「用於質膜和高爾基體」。</p>"},
        heading: L("Vesicles and clathrin", "小胞とクラスリン", "囊泡與網格蛋白"),
        body: L(
          `<p>A <span class="term">vesicle</span> is a small, spherical sac of membrane that holds liquid and its contents. Vesicles are the delivery vans of the cell:</p>
<ul><li>they carry proteins from the RER to the Golgi apparatus and from the Golgi to the plasma membrane or other organelles;</li>
<li>they carry material into the cell (endocytosis) and out of it (exocytosis, B2.1.13);</li>
<li>they keep their contents separate from the cytoplasm (compartmentalization), for example lysosomes and storage vesicles.</li></ul>
<p><strong>Clathrin.</strong> <span class="term">Clathrin</span> is a protein that forms a cage-like coat on the cytoplasm side of a patch of membrane. The coat helps to <strong>bend the membrane into a curved bud and pinch it off to form a vesicle</strong>. Clathrin is used when vesicles form at the plasma membrane (endocytosis) and at the Golgi apparatus.</p>`,
          `<p><span class="term">小胞 (vesicle)</span> は、液体とその内容物を含む、膜でできた小さな球状の袋である。小胞は細胞内の配送車である。</p>
<ul><li>RER からゴルジ体へ、ゴルジ体から細胞膜や他の細胞小器官へタンパク質を運ぶ。</li>
<li>物質を細胞内へ (エンドサイトーシス) 、細胞外へ (エキソサイトーシス、B2.1.13) 運ぶ。</li>
<li>内容物を細胞質から隔てる (区画化)。例: リソソーム、貯蔵小胞。</li></ul>
<p><strong>クラスリン (clathrin)。</strong> クラスリンは、膜の一部の細胞質側にかご状の外被をつくるタンパク質である。この外被が<strong>膜を曲げて芽をつくり、くびれ切って小胞にする</strong>のを助ける。細胞膜 (エンドサイトーシス) やゴルジ体で小胞ができるときに使われる。</p>`,
          `<p><span class="term">囊泡 (vesicle)</span> 是由膜構成的細小球形囊，內含液體及其內容物。囊泡好比細胞內的運送車：</p>
<ul><li>把蛋白質由 RER 運往高爾基體，再由高爾基體運往質膜或其他細胞器；</li>
<li>把物質運入細胞 (胞吞作用) 及運出細胞 (胞吐作用，B2.1.13)；</li>
<li>令內容物與細胞質分開 (區室化)，例如溶酶體和儲存囊泡。</li></ul>
<p><strong>網格蛋白 (clathrin)。</strong>網格蛋白是在一片膜的細胞質面形成籠狀外殼的蛋白質。這層外殼幫助<strong>把膜彎成圓形芽狀，並把它脫離形成囊泡</strong>。在質膜 (胞吞作用) 和高爾基體形成囊泡時都會用到網格蛋白。</p>`)
      }
    ],
    keyTerms: [
      { term: L("organelle", "細胞小器官", "細胞器"), def: L("A discrete subunit of a cell adapted to perform a specific function.", "特定の機能を果たすように適応した、細胞の独立した構成単位。", "適應於執行特定功能的細胞獨立組成部分。"), ahl: false },
      { term: L("cell fractionation", "細胞分画法", "細胞分離法"), def: L("Breaking open cells and separating organelles (using an ultracentrifuge) so that each can be studied.", "細胞を壊して (超遠心機で) 細胞小器官を分け、それぞれを調べる方法。", "把細胞破開，並 (用超速離心機) 分離細胞器，以便逐一研究。"), ahl: false },
      { term: L("compartmentalization", "区画化", "區室化"), def: L("Dividing the cytoplasm into membrane-bound spaces with different conditions and functions.", "細胞質を、異なる条件と機能をもつ膜で囲まれた空間に分けること。", "把細胞質分成條件及功能各異、由膜包圍的空間。"), ahl: false },
      { term: L("lysosome", "リソソーム", "溶酶體"), def: L("A membrane-bound organelle containing digestive enzymes, kept apart from the rest of the cell.", "消化酵素を含み、細胞の他の部分から隔てられた膜で囲まれた細胞小器官。", "含有消化酶、與細胞其餘部分隔開、由膜包圍的細胞器。"), ahl: false },
      { term: L("phagocytic vacuole", "食胞", "吞噬泡"), def: L("A vesicle formed by endocytosis of particles such as bacteria, into which lysosomal enzymes are released.", "細菌などの粒子をエンドサイトーシスで取り込んでできた小胞。リソソームの酵素が放出される。", "細胞以胞吞作用吞入細菌等顆粒而形成的囊泡，溶酶體酶會釋放其中。"), ahl: false },
      { term: L("cristae", "クリステ", "嵴"), def: L("Folds of the inner mitochondrial membrane giving a large surface area for ATP production.", "ミトコンドリアの内膜のひだ。ATP 産生のための大きな表面積を与える。", "線粒體內膜的褶疊，為製造 ATP 提供大表面積。"), ahl: true },
      { term: L("matrix (mitochondrion)", "マトリックス (ミトコンドリア)", "基質 (線粒體)"), def: L("The fluid inside the inner mitochondrial membrane, containing Krebs cycle enzymes and substrates.", "ミトコンドリアの内膜の内側の液体。クレブス回路の酵素と基質を含む。", "線粒體內膜以內的液體，含有克雷布斯循環的酶和底物。"), ahl: true },
      { term: L("thylakoid", "チラコイド", "類囊體"), def: L("Flattened sac of the chloroplast whose membrane carries photosystems; stacks are called grana.", "葉緑体の平たい袋。膜に光化学系をもつ。積み重なったものをグラナという。", "葉綠體的扁平囊，膜上有光系統；堆疊的稱為基粒。"), ahl: true },
      { term: L("stroma", "ストロマ", "葉綠體基質"), def: L("The fluid around the thylakoids, containing Calvin cycle enzymes and substrates.", "チラコイドの周りの液体。カルビン回路の酵素と基質を含む。", "類囊體周圍的液體，含有卡爾文循環的酶和底物。"), ahl: true },
      { term: L("nuclear pore", "核膜孔", "核孔"), def: L("A protein-lined channel through the nuclear envelope allowing controlled movement of molecules.", "核膜を貫くタンパク質で縁取られた通路。分子の出入りを制御する。", "貫穿核膜、內襯蛋白質的通道，讓分子受控地進出。"), ahl: true },
      { term: L("rough endoplasmic reticulum (RER)", "粗面小胞体", "粗糙內質網"), def: L("Flattened membrane sacs with ribosomes attached; makes proteins for transport within the cell or secretion.", "リボソームが付着した平たい膜の袋。細胞内輸送または分泌されるタンパク質をつくる。", "附有核糖體的扁平膜囊，製造供細胞內運送或分泌的蛋白質。"), ahl: false },
      { term: L("Golgi apparatus", "ゴルジ体", "高爾基體"), def: L("Stack of membrane sacs that processes proteins and packages them into vesicles for secretion.", "膜の袋が積み重なったもので、タンパク質を修飾し、分泌用の小胞に包む。", "由膜囊堆疊而成，加工蛋白質並把它們包裝入囊泡以供分泌。"), ahl: false },
      { term: L("clathrin", "クラスリン", "網格蛋白"), def: L("A protein that coats part of a membrane and helps it form a vesicle.", "膜の一部を覆い、小胞の形成を助けるタンパク質。", "覆蓋部分膜、協助形成囊泡的蛋白質。"), ahl: true }
    ],
    misconceptions: [
      { wrong: L("The cell wall and cytoplasm are organelles.", "細胞壁や細胞質は細胞小器官である。", "細胞壁和細胞質是細胞器。"),
        right: L("The guide says the cell wall, cytoskeleton and cytoplasm are not organelles. Nuclei, vesicles, ribosomes and the plasma membrane are.", "ガイドでは、細胞壁・細胞骨格・細胞質は細胞小器官ではなく、核・小胞・リボソーム・細胞膜は細胞小器官とされている。", "課程指引指出細胞壁、細胞骨架和細胞質不是細胞器；細胞核、囊泡、核糖體和質膜才是。") },
      { wrong: L("Lysosomes are mainly there to destroy the cell.", "リソソームは主に細胞を壊すためにある。", "溶酶體主要用來破壞細胞。"),
        right: L("Lysosomes keep digestive enzymes enclosed so the enzymes digest engulfed material without damaging the rest of the cell.", "リソソームは消化酵素を閉じ込め、細胞の他の部分を傷つけずに取り込んだ物質を消化させる。", "溶酶體把消化酶封存，使其能消化被吞入的物質而不損害細胞其他部分。") },
      { ahl: true, wrong: L("All proteins are made on the rough ER.", "すべてのタンパク質は粗面小胞体でつくられる。", "所有蛋白質都在粗糙內質網製造。"),
        right: L("Free ribosomes make proteins kept in the cell. Only proteins for transport within the cell or secretion are made on the rough ER.", "細胞内で使われるタンパク質は遊離リボソームでつくられる。粗面小胞体でつくられるのは、細胞内輸送または分泌されるタンパク質だけである。", "留在細胞內的蛋白質由游離核糖體製造；只有供細胞內運送或分泌的蛋白質才在 RER 上製造。") },
      { ahl: true, wrong: L("The nuclear envelope is a permanent, unbroken barrier.", "核膜は永続的で途切れない障壁である。", "核膜是永久不間斷的屏障。"),
        right: L("It has pores for controlled movement of molecules, and it breaks into vesicles during mitosis and meiosis before reforming.", "核膜には分子を制御して通す孔があり、体細胞分裂や減数分裂のときは小胞に分かれ、その後再形成される。", "核膜有孔讓分子受控地進出，並會在有絲分裂和減數分裂時分解成囊泡，之後再重新形成。") }
    ],
    beyondSyllabus: [
      L("Not needed for this subtopic: the detailed steps of cell respiration and photosynthesis (electron transport, Krebs cycle, Calvin cycle reactions). They are taught in C1.2 (Cell respiration) and C1.3 (Photosynthesis). B2.2 only asks how the mitochondrion and chloroplast are adapted in structure.",
        "この小テーマでは不要: 細胞呼吸と光合成の詳しい段階 (電子伝達、クレブス回路やカルビン回路の反応)。これらは C1.2 (細胞呼吸) と C1.3 (光合成) で学ぶ。B2.2 が求めるのは、ミトコンドリアと葉緑体の構造がどう適応しているかだけである。",
        "此子課題不需要：細胞呼吸和光合作用的詳細步驟 (電子傳遞、克雷布斯循環和卡爾文循環的反應)。這些會在 C1.2 (細胞呼吸) 和 C1.3 (光合作用) 學習。B2.2 只要求說明線粒體和葉綠體在結構上如何適應功能。"),
      L("Not needed for this subtopic: the functions of the smooth endoplasmic reticulum and the cytoskeleton (peroxisomes are not in the guide at all). You must still identify smooth ER in electron micrographs and know that the cytoskeleton is made of microtubules and microfilaments: this is taught in A2.2 (Cell structure).",
        "この小テーマでは不要: 滑面小胞体と細胞骨格の働き (ペルオキシソームはガイドにまったく出てこない)。ただし電子顕微鏡写真で滑面小胞体を識別すること、細胞骨格が微小管とマイクロフィラメントからなることは A2.2 (細胞の構造) で学び、必要である。",
        "此子課題不需要：滑面內質網和細胞骨架的功能 (過氧化物酶體則完全不在課程指引內)。但你仍須能在電子顯微圖中辨認滑面內質網，並知道細胞骨架由微管和微絲組成，這些在 A2.2 (細胞結構) 學習。"),
      L("You do not need the Golgi apparatus’s roles beyond protein processing and secretion (the guide limits it to this), such as detailed carbohydrate or lipid processing.",
        "ゴルジ体のタンパク質のプロセシングと分泌以外の役割 (糖や脂質の詳しい修飾など) は必要ない (ガイドはここまでに限っている)。",
        "你不需要認識高爾基體在蛋白質加工和分泌以外的功能 (如詳細的糖類或脂質加工)，課程指引已限於此範圍。"),
      L("You do not need the signal-recognition particle, the exact process of how ribosomes attach to the RER, or the structure of the nuclear pore complex.",
        "シグナル認識粒子、リボソームが RER に付着する正確な過程、核膜孔複合体の構造は必要ない。",
        "你不需要認識訊號識別顆粒 (signal-recognition particle)、核糖體附着於 RER 的確切過程，或核孔複合體的結構。"),
      L("You do not need exact centrifuge speeds or the exact order of fractions in cell fractionation. You only need to know why the technique mattered for finding organelle functions.",
        "細胞分画法の正確な遠心速度や画分の順序は必要ない。この技術が細胞小器官の機能の発見になぜ重要だったかが分かればよい。",
        "你不需要認識細胞分離法中確切的離心速度或各部分的次序，只需明白這項技術對發現細胞器功能為何重要。")
    ],
    links: [
      { to: "B2.1", why: L("Membrane fluidity lets vesicles form and fuse; organelle membranes use the same bilayer structure.", "膜の流動性により小胞が形成・融合する。細胞小器官の膜も同じ二重層構造である。", "膜的流動性令囊泡能形成和融合；細胞器的膜同樣是雙層結構。") },
      { to: "A2.2", why: L("Compare eukaryotic organelles with prokaryotic cell structure; ribosomes are in both.", "真核細胞の細胞小器官と原核細胞の構造を比べる。リボソームは両方にある。", "把真核細胞的細胞器與原核細胞結構比較；兩者都有核糖體。") },
      { to: "B1.2", why: L("Ribosomes, the RER and the Golgi apparatus make, fold and process proteins.", "リボソーム、RER、ゴルジ体はタンパク質をつくり、折りたたみ、修飾する。", "核糖體、RER 和高爾基體負責製造、摺疊和加工蛋白質。") },
      { to: "A1.2", why: L("Transcription in the nucleus and translation at ribosomes follow from the structure of DNA and RNA.", "核での転写とリボソームでの翻訳は、DNA と RNA の構造に基づく。", "在細胞核的轉錄及在核糖體的翻譯，建基於 DNA 和 RNA 的結構。") }
    ],
    natureOfScience: [
      L("Progress in science often follows the development of new techniques: the study of individual organelles became possible with ultracentrifuges and cell fractionation.",
        "科学の進歩は新しい技術の開発に続くことが多い。個々の細胞小器官の研究は、超遠心機と細胞分画法によって可能になった。",
        "科學的進步往往跟隨新技術的發展：有了超速離心機和細胞分離法，研究個別細胞器才成為可能。")
    ],
    questions: [
      {
        id: "b2-2-q01", type: "mcq", ahl: false, difficulty: 1, ref: "B2.2.1", paper: "1A",
        stem: L("Which of these is NOT considered an organelle?", "次のうち、細胞小器官とはみなされないものはどれか。", "以下哪項不被視為細胞器？"),
        options: [L("Nucleus", "核", "細胞核"), L("Ribosome", "リボソーム", "核糖體"), L("Cell wall", "細胞壁", "細胞壁"), L("Vesicle", "小胞", "囊泡")],
        answer: 2,
        explanation: L("The guide states that the cell wall, cytoskeleton and cytoplasm are not organelles, while nuclei, vesicles, ribosomes and the plasma membrane are. Ribosomes are the tempting wrong choice because they have no membrane, but they are still counted as organelles.", "ガイドでは、細胞壁・細胞骨格・細胞質は細胞小器官でなく、核・小胞・リボソーム・細胞膜は細胞小器官とされる。リボソームは膜がないため迷いやすいが、細胞小器官に数えられる。", "課程指引指出細胞壁、細胞骨架和細胞質不是細胞器，而細胞核、囊泡、核糖體和質膜是。核糖體沒有膜，所以容易選錯，但它仍被視為細胞器。")
      },
      {
        id: "b2-2-q02", type: "mcq", ahl: false, difficulty: 2, ref: "B2.2.1", paper: "1A",
        stem: L("Why did the invention of the ultracentrifuge and cell fractionation help scientists study organelles?", "超遠心機と細胞分画法の発明は、なぜ細胞小器官の研究に役立ったのか。", "為何超速離心機和細胞分離法的發明有助科學家研究細胞器？"),
        options: [
          L("They let organelles be separated and each studied on its own.", "細胞小器官を分けて、それぞれを単独で調べられるようになった。", "令細胞器能被分離，並逐一單獨研究。"),
          L("They make organelles larger so that they can be seen.", "細胞小器官を大きくして見えるようにする。", "令細胞器變大而看得見。"),
          L("They keep the cells alive during observation.", "観察中に細胞を生かしておく。", "在觀察期間保持細胞存活。"),
          L("They stain only the nucleus.", "核だけを染色する。", "只把細胞核染色。")],
        answer: 0,
        explanation: L("Cells are broken open and spun so organelles separate by size and density, and each fraction can be tested. The technique does not enlarge organelles or keep cells alive (it destroys cells).", "細胞を壊して遠心すると、細胞小器官が大きさや密度で分かれ、各画分を調べられる。この方法は細胞小器官を大きくも、細胞を生かしもしない (細胞を壊す)。", "把細胞破開並離心，細胞器按大小和密度分離，可逐一測試。這方法不會放大細胞器，也不會令細胞存活 (它會破壞細胞)。")
      },
      {
        id: "b2-2-q03", type: "short", ahl: false, difficulty: 2, ref: "B2.2.2", paper: "2",
        commandTerm: "Explain", marks: 3,
        stem: L("Explain the advantage to a eukaryotic cell of having the nucleus separate from the cytoplasm.", "真核細胞にとって、核が細胞質から分かれていることの利点を説明せよ。", "解釋真核細胞的細胞核與細胞質分隔有何好處。"),
        markscheme: [
          L("Transcription takes place in the nucleus and translation in the cytoplasm (at ribosomes), so the two are separated.", "転写は核で、翻訳は (リボソームのある) 細胞質で起こるので、両者が分かれている。", "轉錄在細胞核進行，翻譯在細胞質 (核糖體) 進行，所以兩者分開。"),
          L("The mRNA can be modified (post-transcriptional modification) in the nucleus before it reaches the ribosomes.", "mRNA は、リボソームに届く前に核の中で修飾 (転写後修飾) できる。", "mRNA 在到達核糖體前，可先在核內被修飾 (轉錄後修飾)。"),
          L("So ribosomes only translate finished / processed mRNA (in prokaryotes, mRNA can meet ribosomes immediately so this is not possible).", "そのためリボソームは完成した・加工された mRNA だけを翻訳する (原核生物では mRNA がすぐリボソームに出会うので不可能)。", "所以核糖體只翻譯完成／加工後的 mRNA (原核生物的 mRNA 可立即與核糖體接觸，故不可能這樣)。")
        ],
        modelAnswer: L("Transcription happens in the nucleus and translation in the cytoplasm. This lets the mRNA be modified in the nucleus before it meets ribosomes, so only finished mRNA is translated.", "転写は核で、翻訳は細胞質で起こる。そのため mRNA はリボソームに出会う前に核で修飾でき、完成した mRNA だけが翻訳される。", "轉錄在細胞核、翻譯在細胞質進行，所以 mRNA 可在接觸核糖體前於核內修飾，只有完成的 mRNA 被翻譯。")
      },
      {
        id: "b2-2-q04", type: "mcq", ahl: false, difficulty: 2, ref: "B2.2.2", paper: "1A",
        stem: L("Why can prokaryotic mRNA be translated while it is still being transcribed?", "原核生物の mRNA が、転写の途中で翻訳できるのはなぜか。", "為何原核生物的 mRNA 在轉錄仍在進行時就可被翻譯？"),
        options: [
          L("There is no nucleus, so ribosomes can meet the mRNA immediately.", "核がないので、リボソームがすぐに mRNA に出会える。", "沒有細胞核，所以核糖體可立即與 mRNA 接觸。"),
          L("Prokaryotes have no ribosomes.", "原核生物にはリボソームがない。", "原核生物沒有核糖體。"),
          L("Prokaryotic mRNA is always modified first by the Golgi apparatus.", "原核生物の mRNA は必ず先にゴルジ体で修飾される。", "原核生物的 mRNA 總是先由高爾基體修飾。"),
          L("Prokaryotes translate DNA directly without mRNA.", "原核生物は mRNA なしで DNA を直接翻訳する。", "原核生物不經 mRNA 直接翻譯 DNA。")],
        answer: 0,
        explanation: L("Without a nuclear envelope, the DNA, mRNA and ribosomes are in the same compartment. Prokaryotes do have ribosomes and mRNA but no Golgi apparatus, and translation always uses mRNA.", "核膜がないので、DNA・mRNA・リボソームが同じ区画にある。原核生物にはリボソームと mRNA はあるがゴルジ体はなく、翻訳は常に mRNA を使う。", "沒有核膜，DNA、mRNA 和核糖體處於同一區室。原核生物有核糖體和 mRNA，但沒有高爾基體，而翻譯一定利用 mRNA。")
      },
      {
        id: "b2-2-q05", type: "short", ahl: false, difficulty: 2, ref: "B2.2.3", paper: "2",
        commandTerm: "Outline", marks: 3,
        stem: L("Outline the advantages of compartmentalization in the cytoplasm of cells, using lysosomes as an example.", "リソソームを例に、細胞質の区画化の利点を概説せよ。", "以溶酶體為例，概述細胞質區室化的好處。"),
        markscheme: [
          L("Enzymes and substrates / metabolites can be concentrated in a small volume, so reactions are faster / more efficient.", "酵素と基質・代謝物が小さな体積に濃縮され、反応が速く・効率的になる。", "酶和底物／代謝物可濃縮在細小體積內，令反應更快／更有效率。"),
          L("Incompatible processes can be kept apart (and conditions such as pH can differ).", "両立しない過程を分けておける (pH などの条件も違えられる)。", "可把互不相容的過程分隔開 (pH 等條件亦可不同)。"),
          L("Lysosomes enclose digestive enzymes so that they cannot digest the cell’s own contents, and they provide the acidic conditions the enzymes need.", "リソソームは消化酵素を閉じ込め、細胞自身の成分を消化させず、酵素が必要とする酸性条件も与える。", "溶酶體把消化酶封存，使其不會消化細胞自身的內容物，並提供酶所需的酸性環境。")
        ],
        modelAnswer: L("Compartments concentrate enzymes and substrates, which speeds up reactions, and separate incompatible processes. For example, lysosomes hold digestive enzymes inside a membrane, protecting the rest of the cell from digestion.", "区画は酵素と基質を濃縮して反応を速め、両立しない過程を分ける。例えばリソソームは消化酵素を膜の中に閉じ込め、細胞の他の部分が消化されるのを防ぐ。", "區室把酶和底物濃縮而加快反應，並分隔互不相容的過程。例如溶酶體把消化酶封在膜內，保護細胞其餘部分不被消化。")
      },
      {
        id: "b2-2-q06", type: "short", ahl: false, difficulty: 3, ref: "B2.2.3", paper: "2",
        commandTerm: "Explain", marks: 4,
        stem: L("A white blood cell engulfs a bacterium. Explain how the cell digests the bacterium without damaging itself.", "白血球が細菌を取り込む。白血球が自分を傷つけずに細菌を消化するしくみを説明せよ。", "一個白血球吞入一個細菌。解釋該細胞如何在不損害自身的情況下消化該細菌。"),
        markscheme: [
          L("The bacterium is engulfed by endocytosis, forming a phagocytic vacuole (vesicle) bounded by membrane.", "細菌はエンドサイトーシスで取り込まれ、膜で囲まれた食胞 (小胞) ができる。", "細菌經胞吞作用被吞入，形成由膜包圍的吞噬泡 (囊泡)。"),
          L("A lysosome fuses with the vacuole and releases its digestive (hydrolytic) enzymes into it.", "リソソームが食胞と融合し、消化 (加水分解) 酵素を中に放出する。", "溶酶體與吞噬泡融合，把消化 (水解) 酶釋放到泡內。"),
          L("The enzymes digest the bacterium inside the vacuole.", "酵素が食胞の中で細菌を消化する。", "酶在吞噬泡內消化細菌。"),
          L("The membrane keeps the enzymes separate from the cytoplasm, so the cell’s own proteins and molecules are not digested (compartmentalization).", "膜が酵素を細胞質から隔てるので、細胞自身のタンパク質などは消化されない (区画化)。", "膜令酶與細胞質隔開，所以細胞自身的蛋白質和分子不會被消化 (區室化)。")
        ],
        modelAnswer: L("The cell engulfs the bacterium into a phagocytic vacuole. A lysosome fuses with it and releases digestive enzymes, which break down the bacterium. Because the enzymes stay inside membrane-bound compartments, they cannot digest the rest of the cell.", "細胞は細菌を食胞に取り込む。リソソームが融合して消化酵素を放出し、細菌を分解する。酵素は膜で囲まれた区画内にとどまるので、細胞の他の部分を消化できない。", "細胞把細菌吞入吞噬泡，溶酶體與之融合並釋出消化酶，分解細菌。由於酶一直留在由膜包圍的區室內，所以不會消化細胞其餘部分。")
      },
      {
        id: "b2-2-q07", type: "match", ahl: true, difficulty: 1, ref: "B2.2.4", paper: "1A",
        stem: L("Match each structure with its function.", "各構造とその機能を対応させよ。", "把每種結構與其功能配對。"),
        pairs: [
          { left: L("Mitochondrion", "ミトコンドリア", "線粒體"), right: L("ATP production by aerobic respiration", "好気呼吸による ATP の産生", "以有氧呼吸製造 ATP") },
          { left: L("Chloroplast", "葉緑体", "葉綠體"), right: L("Photosynthesis", "光合成", "光合作用") },
          { left: L("Rough endoplasmic reticulum", "粗面小胞体", "粗糙內質網"), right: L("Makes proteins for transport within the cell or secretion", "細胞内輸送または分泌されるタンパク質をつくる", "製造供細胞內運送或分泌的蛋白質") },
          { left: L("Golgi apparatus", "ゴルジ体", "高爾基體"), right: L("Processes proteins and packages them for secretion", "タンパク質を修飾し、分泌用に包む", "加工蛋白質並包裝以供分泌") }
        ],
        explanation: L("Each organelle’s structure is adapted to its function, as you will see in the next questions.", "各細胞小器官の構造は機能に適応している。次の問題で確かめよう。", "每種細胞器的結構都適應其功能，下面的題目會再探討。")
      },
      {
        id: "b2-2-q08", type: "short", ahl: true, difficulty: 2, ref: "B2.2.4", paper: "2",
        commandTerm: "Explain", marks: 4,
        stem: L("Explain how the structure of a mitochondrion is adapted for the production of ATP by aerobic cell respiration.", "ミトコンドリアの構造が、好気的な細胞呼吸による ATP の産生にどのように適応しているかを説明せよ。", "解釋線粒體的結構如何適應透過有氧細胞呼吸製造 ATP。"),
        markscheme: [
          L("The inner membrane is folded into cristae, giving a large surface area for the electron transport chain / ATP synthesis, so more ATP is made.", "内膜がクリステにひだ状に折りたたまれ、電子伝達系・ATP 合成のための表面積が大きいので、より多くの ATP がつくられる。", "內膜折疊成嵴，為電子傳遞鏈／ATP 合成提供大表面積，所以製造更多 ATP。"),
          L("The intermembrane space is small (between the double membrane), so H⁺ concentration builds up quickly, making a steep gradient.", "二重膜の間の膜間腔が小さいので、H⁺ 濃度がすぐ上がり、急な勾配ができる。", "雙層膜之間的膜間腔體積小，所以 H⁺ 濃度迅速上升，形成陡峭梯度。"),
          L("The matrix compartmentalizes / concentrates the enzymes and substrates of the Krebs cycle.", "マトリックスがクレブス回路の酵素と基質を区画化・濃縮している。", "基質把克雷布斯循環的酶和底物區室化／濃縮。"),
          L("Concentrating enzymes and substrates together makes the reactions efficient / faster.", "酵素と基質が集まることで反応が効率的に・速く進む。", "酶和底物集中令反應更有效率／更快。")
        ],
        modelAnswer: L("The inner membrane forms cristae, giving a large surface area for ATP production. The small intermembrane space lets H⁺ concentration rise quickly to form a steep gradient. The matrix holds the Krebs cycle enzymes and substrates together so the cycle works efficiently.", "内膜はクリステをつくり、ATP 産生のための表面積が大きい。小さな膜間腔により H⁺ 濃度が速く上がり急な勾配ができる。マトリックスはクレブス回路の酵素と基質を集めて、回路を効率よく進める。", "內膜形成嵴，為製造 ATP 提供大表面積；膜間腔小，令 H⁺ 濃度迅速上升形成陡峭梯度；基質把克雷布斯循環的酶和底物集中，令循環更有效率。")
      },
      {
        id: "b2-2-q09", type: "mcq", ahl: true, difficulty: 2, ref: "B2.2.5", paper: "1A",
        stem: L("Why does the small volume inside the thylakoids help ATP production in a chloroplast?", "チラコイド内腔の体積が小さいことは、葉緑体での ATP 産生にどう役立つか。", "為何類囊體內腔的體積小有助葉綠體製造 ATP？"),
        options: [
          L("Pumped H⁺ ions reach a high concentration quickly, forming a steep gradient.", "汲み込まれた H⁺ がすぐ高濃度になり、急な勾配ができる。", "被泵入的 H⁺ 迅速達到高濃度，形成陡峭梯度。"),
          L("It provides a large surface area for photosystems.", "光化学系のための大きな表面積を与える。", "為光系統提供大表面積。"),
          L("It lets the Calvin cycle enzymes be concentrated there.", "カルビン回路の酵素がそこに集まる。", "令卡爾文循環的酶集中在那裏。"),
          L("It allows the thylakoid to hold more water for photolysis.", "光分解のため、チラコイドがより多くの水を保持できる。", "令類囊體能儲存更多水作光解。")],
        answer: 0,
        explanation: L("A small volume means the H⁺ concentration inside rises fast. Option B is about the large area of the membrane, not the volume. The Calvin cycle enzymes are in the stroma, not the thylakoid space (C).", "体積が小さいと内側の H⁺ 濃度が速く上がる。Bは体積ではなく膜の大きな面積の説明。カルビン回路の酵素があるのはストロマで、チラコイド内腔ではない (C)。", "體積小令內腔的 H⁺ 濃度迅速上升。B 說的是膜的大面積，而非體積；卡爾文循環的酶在基質，不在類囊體內腔 (C)。")
      },
      {
        id: "b2-2-q10", type: "short", ahl: true, difficulty: 3, ref: "B2.2.5", paper: "2",
        commandTerm: "Compare and contrast", marks: 4,
        stem: L("Compare and contrast the structural adaptations of mitochondria and chloroplasts for their functions.", "ミトコンドリアと葉緑体の、機能に対する構造上の適応を比較対照せよ。", "比較及對比線粒體和葉綠體為適應功能而具有的結構特徵。"),
        markscheme: [
          L("Similarity: both have a large membrane surface area (cristae; thylakoid membranes) carrying proteins for ATP production.", "共通点: どちらも ATP 産生のためのタンパク質をもつ膜の表面積が大きい (クリステ、チラコイド膜)。", "相同：兩者都有大面積的膜 (嵴；類囊體膜) 載有製造 ATP 的蛋白質。"),
          L("Similarity: both have a small space where H⁺ concentration builds up quickly (intermembrane space; thylakoid space).", "共通点: どちらも H⁺ 濃度がすぐ上がる小さな空間をもつ (膜間腔、チラコイド内腔)。", "相同：兩者都有可令 H⁺ 濃度迅速上升的小空間 (膜間腔；類囊體內腔)。"),
          L("Similarity: both have a fluid compartment concentrating enzymes and substrates for a cycle (matrix: Krebs cycle; stroma: Calvin cycle).", "共通点: どちらも回路の酵素と基質を濃縮する液体の区画をもつ (マトリックス: クレブス回路、ストロマ: カルビン回路)。", "相同：兩者都有液體區室，把某循環的酶和底物濃縮 (基質：克雷布斯循環；葉綠體基質：卡爾文循環)。"),
          L("Difference: chloroplast membranes carry photosystems that capture light; mitochondria do not (mitochondria use the energy from oxidation of respiratory substrates). Accept: chloroplasts have thylakoids/grana, mitochondria have cristae; mitochondria make ATP by respiration, chloroplasts photosynthesize.", "相違点: 葉緑体の膜には光を捉える光化学系があるが、ミトコンドリアにはない。(チラコイド・グラナは葉緑体、クリステはミトコンドリア、機能は呼吸と光合成、も可)", "差異：葉綠體的膜有捕捉光的光系統，線粒體則沒有 (接受：葉綠體有類囊體／基粒，線粒體有嵴；線粒體經呼吸製造 ATP，葉綠體進行光合作用)。")
        ],
        modelAnswer: L("Both have a folded membrane with a large surface area for ATP production, a small space where H⁺ builds up quickly and a fluid compartment (matrix or stroma) concentrating the enzymes of a cycle. They differ in that the thylakoid membranes of the chloroplast carry photosystems to capture light, while the cristae of mitochondria do not.", "どちらも ATP 産生のための大きな表面積をもつ折りたたまれた膜、H⁺ がすぐ高濃度になる小さな空間、回路の酵素を濃縮する液体の区画 (マトリックスまたはストロマ) をもつ。違いは、葉緑体のチラコイド膜には光を捉える光化学系があるが、ミトコンドリアのクリステにはないことである。", "兩者都有折疊的膜提供製造 ATP 的大表面積、令 H⁺ 迅速積聚的小空間，以及濃縮循環所需酶的液體區室 (基質或葉綠體基質)。差異在於葉綠體的類囊體膜載有捕光的光系統，而線粒體的嵴則沒有。")
      },
      {
        id: "b2-2-q11", type: "short", ahl: true, difficulty: 3, ref: "B2.2.4", paper: "1B",
        commandTerm: "Explain", marks: 5,
        data: L(
          `<table><tr><th>Cell type</th><th>Mitochondria per cell</th><th>Cristae area per mitochondrion (µm²)</th></tr><tr><td>P (fat-storage cell)</td><td>100</td><td>5</td></tr><tr><td>Q (liver cell)</td><td>1000</td><td>10</td></tr><tr><td>R (heart muscle cell)</td><td>5000</td><td>25</td></tr></table><p><em>(illustrative data)</em></p>`,
          `<table><tr><th>細胞の種類</th><th>1細胞あたりのミトコンドリア数</th><th>ミトコンドリア1個あたりのクリステの面積 (µm²)</th></tr><tr><td>P (脂肪貯蔵細胞)</td><td>100</td><td>5</td></tr><tr><td>Q (肝細胞)</td><td>1000</td><td>10</td></tr><tr><td>R (心筋細胞)</td><td>5000</td><td>25</td></tr></table><p><em>(説明用のデータ)</em></p>`,
          `<table><tr><th>細胞類型</th><th>每個細胞的線粒體數目</th><th>每個線粒體的嵴面積 (µm²)</th></tr><tr><td>P (脂肪儲存細胞)</td><td>100</td><td>5</td></tr><tr><td>Q (肝細胞)</td><td>1000</td><td>10</td></tr><tr><td>R (心肌細胞)</td><td>5000</td><td>25</td></tr></table><p><em>(示範數據)</em></p>`),
        stem: L("(a) Calculate the total area of cristae in one cell of type R. [1] (b) Cell R has the greatest demand for ATP. Explain how the data support the link between mitochondrial structure and function. [4]", "(a) R 型の細胞1個の、クリステの総面積を計算せよ。[1] (b) 細胞 R は ATP の需要が最も大きい。データがミトコンドリアの構造と機能のつながりをどう支持するか説明せよ。[4]", "(a) 計算一個 R 型細胞中嵴的總面積。[1] (b) 細胞 R 對 ATP 的需求最大。解釋數據如何支持線粒體結構與功能的關係。[4]"),
        markscheme: [
          L("(a) 5000 × 25 = 125 000 µm².", "(a) 5000 × 25 = 125 000 µm²。", "(a) 5000 × 25 = 125 000 µm²。"),
          L("(b) Cell R has the most mitochondria and the largest cristae area per mitochondrion, so the greatest total cristae area (125 000 µm² vs 10 000 for Q and 500 for P).", "(b) 細胞 R はミトコンドリアが最も多く、1個あたりのクリステの面積も最大なので、クリステの総面積が最大 (125 000 µm²、Q は 10 000、P は 500)。", "(b) 細胞 R 的線粒體最多、每個線粒體的嵴面積也最大，所以嵴總面積最大 (125 000 µm²；Q 為 10 000，P 為 500)。"),
          L("Cristae give a large surface area carrying the proteins for ATP production (electron transport chain / ATP synthase).", "クリステは ATP 産生のタンパク質 (電子伝達系・ATP 合成酵素) をもつ大きな表面積を与える。", "嵴提供大表面積，載有製造 ATP 的蛋白質 (電子傳遞鏈／ATP 合成酶)。"),
          L("So the cell with the highest ATP demand has the greatest capacity to make ATP.", "したがって、ATP 需要が最も大きい細胞が、ATP をつくる能力も最大である。", "所以 ATP 需求最大的細胞，製造 ATP 的能力也最大。"),
          L("The pattern shows structure (more cristae area) is matched to function (ATP supply); a correlation only, not proof of cause (accept this evaluative point).", "この傾向は、構造 (クリステの面積が大きい) が機能 (ATP の供給) に対応することを示す。ただし相関であり、因果の証明ではない (この評価的な指摘も可)。", "這個模式顯示結構 (嵴面積較大) 與功能 (供應 ATP) 相配；但這只是相關，不能證明因果 (接受此評價性論點)。")
        ],
        modelAnswer: L("(a) 125 000 µm². (b) Cell R, with the greatest ATP demand, has the most mitochondria and the largest cristae area in each, so the highest total area of inner membrane carrying ATP-making proteins. More cristae area allows more ATP to be made, so the structure is matched to the function.", "(a) 125 000 µm²。(b) ATP 需要が最も大きい細胞 R は、ミトコンドリアが最も多く、それぞれのクリステ面積も最大なので、ATP をつくるタンパク質をもつ内膜の総面積が最大である。クリステの面積が大きいほど多くの ATP をつくれるので、構造が機能に対応している。", "(a) 125 000 µm²。(b) ATP 需求最大的細胞 R，線粒體數目最多且每個的嵴面積最大，所以載有製造 ATP 蛋白質的內膜總面積最大。嵴面積越大，可製造的 ATP 越多，所以結構與功能相配。")
      },
      {
        id: "b2-2-q12", type: "mcq", ahl: true, difficulty: 2, ref: "B2.2.6", paper: "1A",
        stem: L("What is the main function of nuclear pores?", "核膜孔の主な機能は何か。", "核孔的主要功能是甚麼？"),
        options: [
          L("To let large molecules such as mRNA and proteins move between nucleus and cytoplasm in a controlled way", "mRNA やタンパク質のような大きな分子が、核と細胞質の間を制御されて移動できるようにする", "讓 mRNA 和蛋白質等大分子受控地在細胞核與細胞質之間移動"),
          L("To let the nuclear envelope make ATP", "核膜が ATP をつくれるようにする", "令核膜能製造 ATP"),
          L("To attach ribosomes to the nucleus", "リボソームを核に付着させる", "把核糖體附着於細胞核"),
          L("To make the nuclear envelope fully permeable to all substances", "核膜をすべての物質に対して完全に透過性にする", "令核膜對所有物質完全透過")],
        answer: 0,
        explanation: L("Pores are protein-lined channels that control the passage of large molecules. They do not make the envelope fully permeable (D) and do not make ATP (B).", "孔はタンパク質で縁取られ、大きな分子の通過を制御する通路である。核膜を完全な透過性にするものでも (D)、ATP をつくるものでもない (B)。", "核孔是內襯蛋白質、控制大分子通過的通道，並不令核膜完全透過 (D)，也不製造 ATP (B)。")
      },
      {
        id: "b2-2-q13", type: "short", ahl: true, difficulty: 3, ref: "B2.2.6", paper: "2",
        commandTerm: "Suggest", marks: 3,
        stem: L("During mitosis the nuclear envelope breaks into vesicles. Suggest why this is necessary and what property of membranes makes it possible.", "体細胞分裂では核膜が小胞に分かれる。これがなぜ必要か、また膜のどのような性質がそれを可能にするかを示唆せよ。", "有絲分裂時核膜會分解成囊泡。試提出這樣做的必要性，以及膜的哪項性質令此成為可能。"),
        markscheme: [
          L("Chromosomes must be separated / moved apart by spindle fibres, which need access to the chromosomes (the nuclear envelope would be a barrier).", "染色体は紡錘糸で引き離される必要があり、染色体に近づく必要がある (核膜は障壁になる)。", "染色體需由紡錘絲拉開，紡錘絲需要接觸染色體 (核膜會成為障礙)。"),
          L("Membranes are fluid, so they can break into vesicles.", "膜は流動的なので、小胞に分かれることができる。", "膜具流動性，所以可分解成囊泡。"),
          L("The vesicles can fuse again to reform a nuclear envelope around each new nucleus.", "小胞が再び融合して、新しい各核の周りに核膜を再形成できる。", "囊泡可再融合，在每個新細胞核周圍重新形成核膜。")
        ],
        modelAnswer: L("The spindle must reach and separate the chromosomes, so the barrier of the nuclear envelope is removed by breaking it into vesicles. This is possible because membranes are fluid, and the vesicles can fuse again to reform the envelope around each new nucleus.", "紡錘体が染色体に達して引き離す必要があるので、核膜を小胞に分けて障壁をなくす。膜が流動的なので可能で、小胞は再び融合して新しい各核の周りに核膜をつくる。", "紡錘體必須接觸並分開染色體，所以核膜這道屏障要分解成囊泡。這是因為膜具流動性，囊泡其後可再融合，在每個新核周圍重組核膜。")
      },
      {
        id: "b2-2-q14", type: "short", ahl: true, difficulty: 2, ref: "B2.2.7", paper: "2",
        commandTerm: "Distinguish", marks: 3,
        stem: L("Distinguish between the proteins made by free ribosomes and by ribosomes on the rough endoplasmic reticulum.", "遊離リボソームと粗面小胞体上のリボソームがそれぞれつくるタンパク質の違いを区別して述べよ。", "分辨游離核糖體與粗糙內質網上的核糖體所製造的蛋白質。"),
        markscheme: [
          L("Free ribosomes (in the cytoplasm) make proteins that are retained / used in the cell.", "遊離リボソーム (細胞質) は、細胞内に保持され・使われるタンパク質をつくる。", "游離核糖體 (在細胞質) 製造留在／用於細胞內的蛋白質。"),
          L("Ribosomes on the RER make proteins for transport within the cell (e.g. to the Golgi, lysosomes, plasma membrane).", "RER 上のリボソームは細胞内輸送 (ゴルジ体、リソソーム、細胞膜へなど) されるタンパク質をつくる。", "RER 上的核糖體製造供細胞內運送 (如到高爾基體、溶酶體、質膜) 的蛋白質。"),
          L("Ribosomes on the RER also make proteins for secretion (release from the cell); the polypeptide enters the RER lumen.", "RER 上のリボソームは分泌される (細胞外へ放出される) タンパク質もつくり、ポリペプチドは RER の内腔へ入る。", "RER 上的核糖體亦製造供分泌 (釋出細胞外) 的蛋白質；多肽進入 RER 內腔。")
        ],
        modelAnswer: L("Free ribosomes make proteins that stay and are used inside the cell, such as cytoplasmic enzymes. Ribosomes on the rough ER make proteins that are transported within the cell or secreted from it.", "遊離リボソームは、細胞質の酵素のように細胞内にとどまり使われるタンパク質をつくる。粗面小胞体上のリボソームは、細胞内輸送または分泌されるタンパク質をつくる。", "游離核糖體製造留在細胞內使用的蛋白質 (如細胞質中的酶)；粗糙內質網上的核糖體製造供細胞內運送或分泌的蛋白質。")
      },
      {
        id: "b2-2-q15", type: "order", ahl: true, difficulty: 2, ref: "B2.2.8", paper: "1A",
        stem: L("Put these stages of the secretion of a digestive enzyme (a protein) from a gland cell into the correct order.", "腺細胞からの消化酵素 (タンパク質) の分泌の段階を、正しい順に並べよ。", "把腺細胞分泌消化酶 (蛋白質) 的各階段按正確次序排列。"),
        items: [
          L("A ribosome on the rough ER makes the polypeptide, which enters the ER.", "粗面小胞体上のリボソームがポリペプチドをつくり、それが ER に入る。", "粗糙內質網上的核糖體製造多肽，多肽進入 ER。"),
          L("A vesicle carries the protein from the rough ER to the Golgi apparatus.", "小胞がタンパク質を粗面小胞体からゴルジ体へ運ぶ。", "囊泡把蛋白質由粗糙內質網運往高爾基體。"),
          L("The Golgi apparatus processes the protein.", "ゴルジ体がタンパク質を修飾する。", "高爾基體加工蛋白質。"),
          L("A vesicle carries the protein from the Golgi to the plasma membrane.", "小胞がタンパク質をゴルジ体から細胞膜へ運ぶ。", "囊泡把蛋白質由高爾基體運往質膜。"),
          L("The vesicle fuses with the plasma membrane and the enzyme is released by exocytosis.", "小胞が細胞膜と融合し、酵素がエキソサイトーシスで放出される。", "囊泡與質膜融合，酶經胞吐作用釋出。")],
        explanation: L("The protein is made on the RER, passes to the Golgi in a vesicle for processing, and then leaves in another vesicle that fuses with the plasma membrane.", "タンパク質は RER でつくられ、小胞でゴルジ体へ運ばれて修飾され、別の小胞で出て細胞膜と融合する。", "蛋白質在 RER 製造，經囊泡運往高爾基體加工，再由另一囊泡運出並與質膜融合。")
      },
      {
        id: "b2-2-q16", type: "mcq", ahl: true, difficulty: 3, ref: "B2.2.8", paper: "1A",
        stem: L("An electron micrograph shows a cell with very extensive rough endoplasmic reticulum, a large Golgi apparatus and many vesicles near the plasma membrane. What is this cell most likely to do?", "電子顕微鏡写真に、非常に発達した粗面小胞体、大きなゴルジ体、細胞膜付近の多数の小胞をもつ細胞が写っている。この細胞が主に行うことは何だと考えられるか。", "一幅電子顯微圖顯示一個細胞有非常發達的粗糙內質網、大型高爾基體，以及質膜附近很多囊泡。這個細胞最可能進行甚麼活動？"),
        options: [
          L("Secrete large amounts of protein", "大量のタンパク質を分泌する", "分泌大量蛋白質"),
          L("Store triglycerides for energy", "エネルギーのためにトリグリセリドを貯蔵する", "儲存甘油三酯作為能量"),
          L("Carry out photosynthesis", "光合成を行う", "進行光合作用"),
          L("Make mainly proteins that stay in the cytoplasm", "主に細胞質にとどまるタンパク質をつくる", "主要製造留在細胞質的蛋白質")],
        answer: 0,
        explanation: L("RER, Golgi and vesicles are the secretion pathway for proteins. D is tempting but proteins kept in the cell are made by free ribosomes, so a cell making them would have many free ribosomes, not extensive RER. No chloroplasts are mentioned (C) and fat storage would show lipid droplets (B).", "RER・ゴルジ体・小胞は、タンパク質の分泌経路である。Dは紛らわしいが、細胞内にとどまるタンパク質は遊離リボソームでつくられるので、その場合は遊離リボソームが多く、RER は発達しない。葉緑体の記述はなく (C)、脂肪の貯蔵なら脂肪滴が見える (B)。", "RER、高爾基體和囊泡是蛋白質的分泌途徑。D 容易誤選，但留在細胞內的蛋白質由游離核糖體製造，這類細胞會有很多游離核糖體，而不是發達的 RER。題中沒有提及葉綠體 (C)；儲存脂肪的細胞會顯示脂肪滴 (B)。")
      },
      {
        id: "b2-2-q17", type: "mcq", ahl: true, difficulty: 2, ref: "B2.2.9", paper: "1A",
        stem: L("What is the role of clathrin in the formation of vesicles?", "小胞の形成におけるクラスリンの役割は何か。", "網格蛋白在囊泡形成中有何作用？"),
        options: [
          L("It forms a cage-like coat that helps bend the membrane and pinch off a vesicle.", "かご状の外被をつくり、膜を曲げて小胞をくびれ切るのを助ける。", "形成籠狀外殼，幫助彎曲膜並把囊泡脫離。"),
          L("It digests the contents of the vesicle.", "小胞の内容物を消化する。", "消化囊泡的內容物。"),
          L("It pumps H⁺ into the vesicle.", "小胞に H⁺ を汲み込む。", "把 H⁺ 泵入囊泡。"),
          L("It makes the vesicle membrane from cholesterol.", "コレステロールから小胞の膜をつくる。", "以膽固醇製造囊泡的膜。")],
        answer: 0,
        explanation: L("Clathrin coats the cytoplasmic side of the membrane patch and helps shape the bud into a vesicle. It is a protein, not an enzyme that digests, a pump or a lipid.", "クラスリンは膜の細胞質側を覆い、芽を小胞の形に整える。消化酵素でもポンプでも脂質でもなく、タンパク質である。", "網格蛋白覆蓋膜的細胞質面，幫助把芽塑造成囊泡。它是蛋白質，不是消化酶、泵或脂質。")
      },
      {
        id: "b2-2-q18", type: "multi", ahl: true, difficulty: 2, ref: "B2.2.5", paper: "1A",
        stem: L("Which features are adaptations of the chloroplast for photosynthesis? Select all that apply.", "光合成に対する葉緑体の適応はどれか。当てはまるものをすべて選べ。", "以下哪些是葉綠體適應光合作用的特徵？選出所有適用項目。"),
        options: [
          L("Thylakoid membranes with a large surface area carrying photosystems", "光化学系をもつ、表面積の大きなチラコイド膜", "表面積大、載有光系統的類囊體膜"),
          L("A small volume inside the thylakoids", "チラコイド内腔の小さな体積", "類囊體內腔體積小"),
          L("Calvin cycle enzymes and substrates concentrated in the stroma", "カルビン回路の酵素と基質がストロマに集まっていること", "卡爾文循環的酶和底物集中在葉綠體基質"),
          L("Cristae folded from the inner membrane", "内膜から折りたたまれたクリステ", "由內膜折疊成的嵴")],
        answer: [0, 1, 2],
        explanation: L("A, B and C are the three adaptations named in the guide. Cristae (D) belong to the mitochondrion.", "A・B・Cがガイドに挙げられた3つの適応。クリステ (D) はミトコンドリアのものである。", "A、B、C 是課程指引列出的三項適應特徵；嵴 (D) 屬於線粒體。")
      },
      {
        id: "b2-2-q19", type: "short", ahl: true, difficulty: 2, ref: "B2.2.6", paper: "2",
        commandTerm: "Outline", marks: 2,
        stem: L("Outline why the nuclear envelope has pores.", "核膜に孔がある理由を概説せよ。", "概述核膜為何有孔。"),
        markscheme: [
          L("The membranes block large molecules, so pores are needed to let molecules such as mRNA (and ribosome subunits) leave the nucleus.", "膜は大きな分子を通さないので、mRNA (やリボソームの部品) が核から出るには孔が必要である。", "膜阻擋大分子，所以需要孔讓 mRNA (和核糖體組件) 離開細胞核。"),
          L("Pores also let proteins (e.g. enzymes) and nucleotides enter the nucleus.", "孔はタンパク質 (酵素など) やヌクレオチドが核に入ることも可能にする。", "孔亦讓蛋白質 (如酶) 和核苷酸進入細胞核。")
        ],
        modelAnswer: L("The two membranes would block large molecules, so pores let mRNA leave the nucleus and let proteins and nucleotides enter in a controlled way.", "2枚の膜は大きな分子を通さないので、孔があることで mRNA が核から出て、タンパク質やヌクレオチドが制御されて入れる。", "兩層膜會阻擋大分子，所以核孔讓 mRNA 離開細胞核，並讓蛋白質和核苷酸受控地進入。")
      },
      {"id":"b2-2-q20","type":"short","ahl":false,"difficulty":3,"ref":"B2.2.1","paper":"2","commandTerm":"Suggest","marks":3,"stem":{"en":"Liver tissue was ground in an ice-cold solution with the same solute concentration as the cells and centrifuged at increasing speeds. One fraction, when given pyruvate and oxygen, used up oxygen and made ATP. Suggest what organelle this fraction contained, and why the solution was kept cold and had the same solute concentration as the cells.","ja":"肝臓の組織を、細胞と同じ溶質濃度の氷冷した溶液の中ですりつぶし、回転数を上げながら遠心した。ある分画は、ピルビン酸と酸素を与えると、酸素を消費してATPをつくった。この分画に含まれていた細胞小器官は何か推定せよ。また、溶液を冷たくし、細胞と同じ溶質濃度にした理由を述べよ。","zh":"把肝組織在與細胞溶質濃度相同的冰冷溶液中磨碎，再以逐步提高的速度離心。其中一部分在加入丙酮酸和氧氣後，消耗氧氣並製造 ATP。試推測此部分含有哪種細胞器，並說明為何溶液要保持低溫及與細胞的溶質濃度相同。"},"markscheme":[{"en":"Mitochondria, because they carry out aerobic respiration (using oxygen to make ATP).","ja":"ミトコンドリア。酸素を使ってATPをつくる好気呼吸を行うため。","zh":"線粒體，因為它進行有氧呼吸 (利用氧氣製造 ATP)。"},{"en":"Cold slows enzyme activity, so enzymes released from broken cells (e.g. from lysosomes) do not digest the organelles.","ja":"低温は酵素の働きを遅くするので、破れた細胞から出た酵素 (リソソームのものなど) が細胞小器官を消化しない。","zh":"低溫減慢酶的活性，所以從破裂細胞釋出的酶 (如來自溶酶體) 不會消化細胞器。"},{"en":"The same solute concentration means no net movement of water by osmosis, so the organelles do not burst or shrink.","ja":"溶質濃度が同じなら浸透による水の正味の移動がなく、細胞小器官が破裂も収縮もしない。","zh":"溶質濃度相同，水不會因滲透作用而淨移動，所以細胞器不會脹破或縮小。"}],"modelAnswer":{"en":"The fraction contained mitochondria, because it used oxygen to make ATP by aerobic respiration. The solution was cold to slow enzymes that could digest the organelles, and it had the same solute concentration as the cells so that no net osmosis occurred and the organelles did not burst or shrink.","ja":"この分画にはミトコンドリアが含まれていた。酸素を使って好気呼吸でATPをつくったからである。溶液を冷たくしたのは、細胞小器官を消化しうる酵素の働きを遅くするため。細胞と同じ溶質濃度にしたのは、浸透による正味の水の移動をなくし、細胞小器官が破裂も収縮もしないようにするためである。","zh":"此部分含有線粒體，因為它利用氧氣通過有氧呼吸製造 ATP。溶液保持低溫是為了減慢可能消化細胞器的酶；溶質濃度與細胞相同，是為了沒有淨滲透作用，使細胞器不致脹破或縮小。"}},
      {"id":"b2-2-q21","type":"short","ahl":false,"difficulty":3,"ref":"B2.2.2","paper":"2","commandTerm":"Explain","marks":3,"stem":{"en":"In a bacterial cell, translation of an mRNA can begin before transcription of the gene has finished. Explain why this cannot happen in a eukaryotic cell.","ja":"細菌の細胞では、遺伝子の転写が終わる前にmRNAの翻訳が始まりうる。真核細胞ではそれが起こりえない理由を説明せよ。","zh":"在細菌細胞中，基因的轉錄尚未完成，mRNA 的翻譯已可開始。解釋為何真核細胞不可能這樣。"},"markscheme":[{"en":"In a eukaryote, transcription takes place in the nucleus, but translation takes place on ribosomes in the cytoplasm.","ja":"真核生物では、転写は核で、翻訳は細胞質のリボソームで行われる。","zh":"在真核生物中，轉錄在細胞核進行，翻譯則在細胞質的核糖體上進行。"},{"en":"The nuclear envelope separates the two, so the mRNA must leave the nucleus (through nuclear pores) before it meets ribosomes.","ja":"核膜が両者を分けているので、mRNAはリボソームに出会う前に核 (核膜孔) から出なければならない。","zh":"核膜把兩者分隔，所以 mRNA 必須先離開細胞核 (經核孔)，才會遇到核糖體。"},{"en":"The mRNA can be modified in the nucleus first, so only finished mRNA is translated. Bacteria have no nucleus, so ribosomes can reach the mRNA while it is still being made.","ja":"mRNAはまず核の中で修飾でき、完成したmRNAだけが翻訳される。細菌には核がないので、mRNAがつくられている途中でもリボソームが結合できる。","zh":"mRNA 可先在細胞核內修飾，所以只有完成的 mRNA 才被翻譯。細菌沒有細胞核，所以 mRNA 仍在合成時核糖體已可接觸它。"}],"modelAnswer":{"en":"In a eukaryote the DNA is in the nucleus, so transcription happens there, but ribosomes are in the cytoplasm and the nuclear envelope separates them. The mRNA must be completed, modified and exported through nuclear pores before translation. Bacteria have no nucleus, so ribosomes can bind to the mRNA as it is made.","ja":"真核生物ではDNAが核にあるので転写は核で起こるが、リボソームは細胞質にあり、核膜が両者を分けている。翻訳の前に、mRNAは完成し、修飾され、核膜孔から出なければならない。細菌には核がないので、リボソームはmRNAがつくられるのと同時に結合できる。","zh":"真核生物的 DNA 在細胞核內，所以轉錄在那裏進行，但核糖體在細胞質，核膜把兩者分隔。mRNA 必須在翻譯之前完成、修飾，並經核孔輸出。細菌沒有細胞核，所以核糖體可在 mRNA 合成時就與它結合。"}},
      {"id":"b2-2-q22","type":"short","ahl":true,"difficulty":3,"ref":"B2.2.8","paper":"1B","commandTerm":"Deduce","marks":3,"data":{"en":"<table><tr><th>Time after radioactive amino acids were added (min)</th><th>RER (%)</th><th>Golgi apparatus (%)</th><th>Secretory vesicles (%)</th></tr>\n<tr><td>3</td><td>90</td><td>8</td><td>2</td></tr>\n<tr><td>17</td><td>50</td><td>40</td><td>10</td></tr>\n<tr><td>37</td><td>20</td><td>40</td><td>40</td></tr>\n<tr><td>117</td><td>5</td><td>15</td><td>80</td></tr></table>\n<p>Percentage of the radioactivity inside the cell that was found in each structure.</p>","ja":"<table><tr><th>放射性アミノ酸を加えてからの時間 (分)</th><th>RER (%)</th><th>ゴルジ体 (%)</th><th>分泌小胞 (%)</th></tr>\n<tr><td>3</td><td>90</td><td>8</td><td>2</td></tr>\n<tr><td>17</td><td>50</td><td>40</td><td>10</td></tr>\n<tr><td>37</td><td>20</td><td>40</td><td>40</td></tr>\n<tr><td>117</td><td>5</td><td>15</td><td>80</td></tr></table>\n<p>細胞内の放射能のうち、各構造で見つかった割合。</p>","zh":"<table><tr><th>加入放射性氨基酸後的時間 (分鐘)</th><th>RER (%)</th><th>高爾基體 (%)</th><th>分泌囊泡 (%)</th></tr>\n<tr><td>3</td><td>90</td><td>8</td><td>2</td></tr>\n<tr><td>17</td><td>50</td><td>40</td><td>10</td></tr>\n<tr><td>37</td><td>20</td><td>40</td><td>40</td></tr>\n<tr><td>117</td><td>5</td><td>15</td><td>80</td></tr></table>\n<p>細胞內的放射性中，在各結構中所佔的百分比。</p>"},"stem":{"en":"Gland cells were given radioactive amino acids for a short time, then normal amino acids. The data above show where the radioactive protein was found. Deduce the route taken by the protein, using the data to support your answer.","ja":"腺細胞に放射性アミノ酸を短時間与え、その後は通常のアミノ酸を与えた。上のデータは、放射性のタンパク質が見つかった場所を示している。データを根拠に、このタンパク質がたどった経路を推定せよ。","zh":"給腺細胞短時間的放射性氨基酸，其後改給一般氨基酸。上方數據顯示放射性蛋白質出現的位置。利用數據支持你的答案，推斷蛋白質所經的路線。"},"markscheme":[{"en":"The protein moves from the RER to the Golgi apparatus to secretory vesicles.","ja":"タンパク質は、RER → ゴルジ体 → 分泌小胞の順に移動する。","zh":"蛋白質由 RER 移到高爾基體，再到分泌囊泡。"},{"en":"Evidence of order: RER is highest first (90 % at 3 min) and falls; the Golgi peaks next (40 % at 17–37 min); secretory vesicles rise last (80 % at 117 min).","ja":"順序の根拠: RERがまず最高 (3分で90 %) で下がっていき、次にゴルジ体がピーク (17〜37分で40 %)、分泌小胞が最後に増える (117分で80 %)。","zh":"次序的證據：RER 最先最高 (3 分鐘時 90 %) 然後下降；高爾基體其次達到高峰 (17–37 分鐘時 40 %)；分泌囊泡最後上升 (117 分鐘時 80 %)。"},{"en":"The proteins are carried between the structures in vesicles, and are processed in the Golgi apparatus before secretion by exocytosis.","ja":"タンパク質は小胞によって構造の間を運ばれ、エキソサイトーシスで分泌される前にゴルジ体で修飾される。","zh":"蛋白質由囊泡在各結構之間運送，並在以胞吐作用分泌前於高爾基體加工。"}],"modelAnswer":{"en":"The protein travels RER → Golgi apparatus → secretory vesicles. The radioactivity is highest in the RER at 3 min (90 %), peaks in the Golgi at 17–37 min (40 %), and is highest in secretory vesicles by 117 min (80 %). Vesicles carry the protein between these structures, and it is processed in the Golgi before exocytosis.","ja":"タンパク質は RER → ゴルジ体 → 分泌小胞 の順に移動する。放射能は3分でRERが最高 (90 %)、17〜37分にゴルジ体でピーク (40 %)、117分には分泌小胞で最高 (80 %) になる。小胞がこれらの構造の間でタンパク質を運び、エキソサイトーシスの前にゴルジ体で修飾される。","zh":"蛋白質的路線是 RER → 高爾基體 → 分泌囊泡。放射性在 3 分鐘時以 RER 最高 (90 %)，在 17–37 分鐘於高爾基體達到高峰 (40 %)，到 117 分鐘時以分泌囊泡最高 (80 %)。囊泡在這些結構之間運送蛋白質，蛋白質在胞吐作用前於高爾基體加工。"}},
      {"id":"b2-2-q23","type":"short","ahl":true,"difficulty":2,"ref":"B2.2.4","paper":"2","commandTerm":"Calculate","marks":3,"stem":{"en":"An electron micrograph has a magnification of ×20 000. A mitochondrion measures 40 mm in length on the micrograph. Calculate its actual length in µm, and suggest why a muscle cell has many mitochondria.","ja":"電子顕微鏡写真の倍率は×20 000である。写真上でミトコンドリアの長さは40 mmだった。その実際の長さをµmで計算せよ。また、筋細胞にミトコンドリアが多い理由を推測せよ。","zh":"某電子顯微照片的放大倍數為 ×20 000。照片上某線粒體長 40 mm。計算它的實際長度 (以 µm 表示)，並推測肌肉細胞為何有大量線粒體。"},"markscheme":[{"en":"Actual size = image size ÷ magnification: 40 ÷ 20 000 = 0.002 mm.","ja":"実際の大きさ = 像の大きさ ÷ 倍率: 40 ÷ 20 000 = 0.002 mm。","zh":"實際大小 = 影像大小 ÷ 放大倍數：40 ÷ 20 000 = 0.002 mm。"},{"en":"Convert to micrometres: 0.002 mm = 2 µm.","ja":"マイクロメートルに換算: 0.002 mm = 2 µm。","zh":"換算成微米：0.002 mm = 2 µm。"},{"en":"Muscle cells need a lot of ATP for contraction, and mitochondria make ATP by aerobic respiration.","ja":"筋細胞は収縮に多くのATPを必要とし、ミトコンドリアは好気呼吸でATPをつくる。","zh":"肌肉細胞收縮需要大量 ATP，而線粒體通過有氧呼吸製造 ATP。"}],"modelAnswer":{"en":"Actual length = 40 mm ÷ 20 000 = 0.002 mm = 2 µm. Muscle cells have many mitochondria because contraction needs a lot of ATP, which mitochondria make by aerobic respiration.","ja":"実際の長さ = 40 mm ÷ 20 000 = 0.002 mm = 2 µm。筋細胞にミトコンドリアが多いのは、収縮に多くのATPが必要で、ミトコンドリアが好気呼吸でそれをつくるからである。","zh":"實際長度 = 40 mm ÷ 20 000 = 0.002 mm = 2 µm。肌肉細胞有大量線粒體，因為收縮需要大量 ATP，而線粒體通過有氧呼吸製造 ATP。"}},
      {"id":"b2-2-q24","type":"mcq","ahl":true,"difficulty":2,"ref":"B2.2.7","paper":"1A","stem":{"en":"Which protein is most likely to be made on a free ribosome?","ja":"遊離リボソームでつくられる可能性が最も高いタンパク質はどれか。","zh":"以下哪種蛋白質最可能在游離核糖體上製造？"},"options":[{"en":"Insulin to be secreted from a pancreatic cell","ja":"膵臓の細胞から分泌されるインスリン","zh":"由胰臟細胞分泌的胰島素"},{"en":"A digestive enzyme released into the small intestine","ja":"小腸に放出される消化酵素","zh":"釋放到小腸的消化酶"},{"en":"An enzyme of glycolysis that works in the cytoplasm","ja":"細胞質で働く解糖系の酵素","zh":"在細胞質中運作的糖酵解酶"},{"en":"A protein to be inserted into the plasma membrane","ja":"細胞膜に組み込まれるタンパク質","zh":"要嵌入質膜的蛋白質"}],"answer":2,"explanation":{"en":"Free ribosomes make proteins that stay and work inside the cell, such as enzymes of the cytoplasm. Insulin and digestive enzymes are secreted, and membrane proteins are transported to the plasma membrane, so all three are made on ribosomes attached to the RER.","ja":"遊離リボソームは、細胞質の酵素のように、細胞内にとどまって働くタンパク質をつくる。インスリンと消化酵素は分泌され、膜タンパク質は細胞膜へ輸送されるので、この3つはいずれも粗面小胞体に付いたリボソームでつくられる。","zh":"游離核糖體製造留在細胞內運作的蛋白質，例如細胞質中的酶。胰島素和消化酶會被分泌，膜蛋白則會被運送到質膜，所以這三種都在附在 RER 上的核糖體製造。"}}
    ]
  });
})();
