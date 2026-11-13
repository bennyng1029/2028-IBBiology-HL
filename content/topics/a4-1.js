/* A4.1 Evolution and speciation — SL + AHL */
(function () {
  const L = (en, ja, zh) => ({ en, ja, zh });

  IB.registerTopic({
    id: "A4.1",
    slug: "a4-1",
    theme: "A",
    level: 4,
    ahlOnly: false,
    title: L("Evolution and speciation", "進化と種分化", "進化與物種形成"),
    guidingQuestions: [
      L("What is the evidence for evolution?", "進化の証拠は何か。", "進化的證據是甚麼？"),
      L("How do analogous and homologous structures exemplify commonality and diversity?", "相似器官と相同器官は、共通性と多様性をどのように示しているか。", "同功結構與同源結構如何體現共通性與多樣性？")
    ],
    summary: L(
      "Evolution is a change in the heritable characteristics of a population. Evidence comes from DNA and protein sequences, selective breeding and homologous structures, while analogous structures show convergent evolution. New species form only by the splitting of existing species, which needs reproductive isolation and differential selection. At HL you also compare allopatric and sympatric speciation, and study adaptive radiation, barriers to hybridization and abrupt speciation in plants.",
      "進化とは、個体群の遺伝する特徴が変化することです。証拠は DNA やタンパク質の配列、選択育種、相同構造から得られ、相似構造は収斂進化を示します。新しい種は既存の種が分かれることでのみ生じ、そのためには生殖的隔離と分化的な選択が必要です。HLではさらに、異所的種分化と同所的種分化の比較、適応放散、交雑の障壁、植物における急速な種分化を学びます。",
      "進化是種羣可遺傳特徵的改變。證據來自 DNA 和蛋白質序列、選擇性育種和同源結構，而同功結構則顯示趨同進化。新物種只能由現有物種分裂而成，這需要生殖隔離和差異選擇。在 HL 還要比較異域與同域物種形成，並學習適應輻射、雜交障礙，以及植物的突發式物種形成。"
    ),
    sections: [
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.1", ahl: false,
        heading: L("Evolution: a change in the heritable characteristics of a population", "進化：個体群の遺伝する特徴の変化 (evolution)", "進化：種羣可遺傳特徵的改變 (evolution)"),
        body: L(
          `<p><strong>Evolution</strong> is the <strong>change in the heritable characteristics of a population</strong> over generations. "Heritable" means passed to offspring through genes. A <em>population</em> is a group of the same species living in one place.</p>
<p>This definition separates Darwin's idea from <strong>Lamarckism</strong>. Lamarck suggested that features an individual gains during its life (<em>acquired characteristics</em>), such as a longer neck from stretching, are passed on to its offspring. <strong>Acquired changes that are not genetic in origin are not evolution.</strong> A bodybuilder's muscles, a suntan or a scar are not inherited by children. Evolution happens when the <em>genes</em> (alleles) in a population change, for example when natural selection makes some alleles more common.</p>
<div class="note"><strong>Nature of science.</strong> The theory of evolution by natural selection predicts and explains a broad range of observations and is unlikely ever to be falsified. But in science we can never formally prove that a theory is true by correspondence with reality. It is a <strong>pragmatic truth</strong>: the best-supported explanation we have. It is still called a "theory" despite all the evidence, because a scientific theory is a well-tested explanation, not a guess.</div>`,
          `<p><strong>進化 (evolution)</strong> とは、世代を重ねるうちに<strong>個体群の遺伝する特徴が変化すること</strong>です。「遺伝する」とは、遺伝子を通じて子に伝わるという意味です。<em>個体群</em>とは、一か所に住む同じ種の集まりです。</p>
<p>この定義により、ダーウィンの考え方と<strong>ラマルク説 (Lamarckism)</strong> が区別されます。ラマルクは、個体が生きている間に得た特徴（<em>獲得形質</em>、たとえば首を伸ばして長くなった首）が子に伝わると考えました。<strong>遺伝子に由来しない獲得された変化は進化ではありません。</strong>ボディビルダーの筋肉、日焼け、傷は子に遺伝しません。進化は、個体群の<em>遺伝子</em>（対立遺伝子）が変わるとき、たとえば自然選択である対立遺伝子が増えるときに起こります。</p>
<div class="note"><strong>科学の本質。</strong>自然選択による進化の理論は、広範な観察を予測し説明し、反証される可能性はまずありません。しかし科学では、理論が現実と対応して真であることを正式に証明することは決してできません。これは<strong>実用的な真理 (pragmatic truth)</strong>、つまり現在最も裏付けられた説明です。多くの証拠があっても「理論」と呼ばれるのは、科学の理論とは十分に検証された説明であり、推測ではないからです。</div>`,
          `<p><strong>進化 (evolution)</strong> 是<strong>種羣可遺傳特徵在世代之間的改變</strong>。「可遺傳」是指透過基因傳給後代。<em>種羣</em>是生活在同一地方的同種生物。</p>
<p>這個定義把達爾文的想法與<strong>拉馬克學說 (Lamarckism)</strong> 區分開。拉馬克認為個體一生中獲得的特徵（<em>獲得性狀</em>），例如因伸長脖子而變長的頸，會傳給後代。<strong>並非源於基因的獲得性改變不屬於進化。</strong>健美運動員的肌肉、曬黑的皮膚或疤痕都不會遺傳給子女。進化發生在種羣的<em>基因</em>（等位基因）改變時，例如自然選擇令某些等位基因變得較普遍。</p>
<div class="note"><strong>科學本質。</strong>自然選擇進化論能預測並解釋大量觀察結果，不太可能被推翻。然而，科學永遠無法正式證明理論與現實相符而為真。它是一種<strong>實用的真理 (pragmatic truth)</strong>：即現有證據最充分的解釋。儘管有如此多證據，它仍被稱為「理論」，因為科學理論是經過充分檢驗的解釋，而不是猜測。</div>`
        ),
        examTip: L("Use the word heritable (genetic). If a change is not passed on through genes, it is not evolution.", "「遺伝する（遺伝的な）」という語を使いましょう。遺伝子で伝わらない変化は進化ではありません。", "請使用「可遺傳（基因的）」一詞。不是透過基因傳遞的改變，就不是進化。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.2", ahl: false,
        heading: L("Evidence from DNA, RNA and protein sequences", "DNA・RNA・タンパク質の配列からの証拠", "來自 DNA、RNA 和蛋白質序列的證據"),
        body: L(
          `<p>All living things use DNA (and RNA) to store and use information, and they use essentially the <strong>same genetic code</strong>. This is evidence that they share a common ancestor.</p>
<p><strong>Sequence data gives powerful evidence of common ancestry.</strong> When we compare the <strong>base sequence</strong> of a gene in DNA or RNA, or the <strong>amino acid sequence</strong> of a protein, in different species:</p>
<ul>
<li>Species that share a <strong>more recent</strong> common ancestor have <strong>fewer differences</strong>.</li>
<li>Species that split <strong>long ago</strong> have <strong>more differences</strong>, because mutations have built up in each lineage.</li>
</ul>
<p>The pattern of differences matches the pattern of relationships predicted from other evidence such as fossils and anatomy. That agreement is strong evidence that the species are related by descent.</p>`,
          `<p>すべての生物が情報の保存と利用に DNA（と RNA）を使い、ほぼ<strong>同じ遺伝暗号</strong>を使っています。これは、共通祖先を共有する証拠です。</p>
<p><strong>配列データは共通祖先の強力な証拠です。</strong>異なる種で、DNA や RNA の遺伝子の<strong>塩基配列</strong>、またはタンパク質の<strong>アミノ酸配列</strong>を比べると、次のことが分かります。</p>
<ul>
<li><strong>より最近</strong>共通祖先を共有する種ほど、<strong>違いが少ない</strong>。</li>
<li><strong>昔に分かれた</strong>種ほど、それぞれの系統で突然変異が蓄積しているので<strong>違いが多い</strong>。</li>
</ul>
<p>違いのパターンは、化石や解剖学など他の証拠から予想される関係のパターンと一致します。この一致が、種が由来によって関係していることの強い証拠です。</p>`,
          `<p>所有生物都使用 DNA（和 RNA）貯存和使用資訊，而且使用基本上<strong>相同的遺傳密碼</strong>。這是牠們有共同祖先的證據。</p>
<p><strong>序列數據是共同祖先的有力證據。</strong>比較不同物種中 DNA 或 RNA 基因的<strong>鹼基序列</strong>，或蛋白質的<strong>氨基酸序列</strong>時：</p>
<ul>
<li>共有<strong>較近期</strong>共同祖先的物種，<strong>差異較少</strong>。</li>
<li><strong>很久以前</strong>分開的物種，<strong>差異較多</strong>，因為每個譜系都累積了突變。</li>
</ul>
<p>差異的規律與從化石和解剖學等其他證據所預測的親緣關係規律相符。這種吻合是物種因血統而有關係的有力證據。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.3", ahl: false,
        heading: L("Evidence from selective breeding", "選択育種からの証拠", "來自選擇性育種的證據"),
        body: L(
          `<p>In <strong>selective breeding</strong> (artificial selection) people choose which individuals breed, picking those with the traits they want and breeding them together, generation after generation.</p>
<p>The variation between different <strong>breeds of domesticated animals</strong> and <strong>varieties of crop plants</strong>, and between them and their wild ancestors, is very large. For example, dog breeds from tiny to huge all come from wolf-like ancestors, and cabbage, broccoli, cauliflower and kale were all bred from one wild plant, wild cabbage (<em>Brassica oleracea</em>).</p>
<p>This shows <strong>how rapidly evolutionary changes can occur</strong>: the changes happened in a few thousand years or less, which is short compared with geological time. It is evidence for evolution because it shows that populations contain heritable variation and that the characteristics of a population change when some individuals breed more than others. In natural selection the environment, not people, decides which individuals leave more offspring.</p>`,
          `<p><strong>選択育種 (selective breeding)</strong>（人為選択）では、人が繁殖させる個体を選びます。望む形質をもつ個体を選んで交配し、それを何世代も繰り返します。</p>
<p><strong>家畜の品種</strong>や<strong>作物の品種</strong>の間、およびそれらと野生の祖先との間には、非常に大きな変異があります。たとえば、小さな犬から大きな犬までの品種はすべてオオカミに似た祖先から生まれ、キャベツ、ブロッコリー、カリフラワー、ケールはすべて一つの野生植物、野生のキャベツ (<em>Brassica oleracea</em>) から作り出されました。</p>
<p>これは<strong>進化的な変化がどれほど速く起こり得るか</strong>を示します。変化は数千年かそれ以内に起こり、地質学的な時間に比べるとごく短い期間です。個体群に遺伝する変異があり、一部の個体が他より多く繁殖すると個体群の特徴が変わることを示すので、進化の証拠になります。自然選択では、どの個体がより多くの子を残すかを決めるのは人ではなく環境です。</p>`,
          `<p>在<strong>選擇性育種 (selective breeding)</strong>（人工選擇）中，人類選擇哪些個體繁殖，挑選具有所需性狀的個體互相交配，一代又一代地進行。</p>
<p>不同<strong>馴養動物品種</strong>和<strong>農作物品種</strong>之間，以及牠們與野生祖先之間，有非常大的變異。例如，由極小到極大的狗品種都源自像狼的祖先，而椰菜、西蘭花、椰菜花和羽衣甘藍都是由同一種野生植物——野甘藍 (<em>Brassica oleracea</em>) 培育出來的。</p>
<p>這顯示<strong>進化改變可以多麼迅速</strong>：這些改變在數千年或更短時間內發生，與地質時間相比是很短的。它是進化的證據，因為它顯示種羣有可遺傳的變異，而當部分個體比其他個體繁殖更多時，種羣的特徵就會改變。在自然選擇中，是環境而不是人類決定哪些個體留下較多後代。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.4", ahl: false,
        heading: L("Evidence from homologous structures: the pentadactyl limb", "相同構造からの証拠：五指性の肢", "來自同源結構的證據：五指型肢"),
        body: L(
          `<p><strong>Homologous structures</strong> are structures in different species that have the <strong>same basic structure and the same evolutionary origin</strong>, although they may have <strong>different functions</strong>.</p>
<p>The example you must know is the <strong>pentadactyl limb</strong> ("pentadactyl" means five-digit). Limbs of many vertebrates are built from the same set of bones in the same pattern: one upper limb bone (humerus), two lower limb bones (radius and ulna), small wrist bones (carpals), palm bones (metacarpals) and finger bones (phalanges). The limbs are used in very different ways:</p>
<ul>
<li>human arm: grasping and throwing</li>
<li>bat wing: flying</li>
<li>whale flipper: swimming</li>
<li>horse leg: running</li>
<li>mole forelimb: digging</li>
</ul>
<p><strong>Why this is evidence for evolution:</strong> it is unlikely that unrelated animals would be built on the same plan by chance. The best explanation is that they inherited the limb plan from a <strong>common ancestor</strong>, and then <strong>different environments and ways of life</strong> favoured different modifications in each lineage.</p>`,
          `<p><strong>相同構造 (homologous structures)</strong> とは、異なる種にある、<strong>基本的な構造が同じで進化的な起源も同じ</strong>であるが、<strong>働きは異なる</strong>ことがある構造です。</p>
<p>知っておくべき例は<strong>五指性の肢 (pentadactyl limb)</strong>（「五指」は五本の指という意味）です。多くの脊椎動物の肢は、同じ骨が同じ配置で組み立てられています。上腕の骨 (上腕骨, humerus) 1本、前腕の骨 (橈骨 radius と尺骨 ulna) 2本、手首の小さな骨 (手根骨, carpals)、手のひらの骨 (中手骨, metacarpals)、指の骨 (指骨, phalanges) です。しかし使い方は大きく違います。</p>
<ul>
<li>ヒトの腕：物をつかむ、投げる</li>
<li>コウモリの翼：飛ぶ</li>
<li>クジラの胸びれ：泳ぐ</li>
<li>ウマの脚：走る</li>
<li>モグラの前肢：掘る</li>
</ul>
<p><strong>これが進化の証拠になる理由：</strong>無関係な動物が偶然に同じ設計になるとは考えにくく、最もよい説明は、肢の基本設計を<strong>共通祖先</strong>から受け継ぎ、その後<strong>異なる環境や生活様式</strong>が系統ごとに異なる変化を有利にした、というものです。</p>`,
          `<p><strong>同源結構 (homologous structures)</strong> 是不同物種中<strong>基本結構相同、進化起源也相同</strong>的結構，儘管它們的<strong>功能可能不同</strong>。</p>
<p>你必須認識的例子是<strong>五指型肢 (pentadactyl limb)</strong>（「五指」即五隻指）。許多脊椎動物的肢是以同一組骨骼按相同格局組成：一條上臂骨（肱骨 humerus）、兩條前臂骨（橈骨 radius 和尺骨 ulna）、細小的腕骨 (carpals)、掌骨 (metacarpals) 和指骨 (phalanges)。牠們的使用方式卻大不相同：</p>
<ul>
<li>人類的手臂：抓握和投擲</li>
<li>蝙蝠的翼：飛行</li>
<li>鯨的鰭肢：游泳</li>
<li>馬的腿：奔跑</li>
<li>鼴鼠的前肢：挖掘</li>
</ul>
<p><strong>為何這是進化的證據：</strong>沒有親緣關係的動物不太可能碰巧用同一格局構成。最好的解釋是牠們從<strong>共同祖先</strong>遺傳了肢的格局，然後<strong>不同的環境和生活方式</strong>在各個譜系中有利於不同的改變。</p>`
        ),
        examTip: L("Homologous = same origin, may differ in function. Always name the pentadactyl limb when asked for an example.", "相同構造＝起源が同じで、働きは違ってよい。例を問われたら、五指性の肢を挙げましょう。", "同源 = 起源相同，功能可以不同。被問例子時，請以五指型肢作答。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.5", ahl: false,
        heading: L("Convergent evolution and analogous structures", "収斂進化と相似構造", "趨同進化與同功結構"),
        body: L(
          `<p>Sometimes unrelated organisms face <strong>similar environmental problems</strong>. Natural selection can then produce <strong>similar features</strong> in them, even though they did not inherit the feature from a recent common ancestor. This is <strong>convergent evolution</strong>.</p>
<p>The structures that result are <strong>analogous structures</strong>: they have the <strong>same function but different evolutionary origins</strong>.</p>
<p><strong>Examples (you must know at least one):</strong></p>
<ul>
<li>The <strong>wings of insects and birds</strong>: both are used for flight but they are built in completely different ways (a bird wing is a modified limb with bones and feathers; an insect wing is a flap of exoskeleton).</li>
<li>The <strong>camera-type eyes of squid or octopus and of vertebrates</strong>: both focus light on a retina but they developed independently.</li>
<li>The <strong>streamlined body and fins/flippers of sharks and dolphins</strong>: both suit fast swimming.</li>
</ul>
<table>
<tr><th></th><th>Homologous structures</th><th>Analogous structures</th></tr>
<tr><td>Evolutionary origin</td><td>Same (common ancestor)</td><td>Different</td></tr>
<tr><td>Function</td><td>Often different</td><td>The same</td></tr>
<tr><td>Cause</td><td>Common ancestry</td><td>Convergent evolution</td></tr>
<tr><td>Example</td><td>Pentadactyl limb</td><td>Insect and bird wings</td></tr>
</table>`,
          `<p>無関係な生物が<strong>似た環境の問題</strong>に直面することがあります。すると自然選択が、最近の共通祖先からその特徴を受け継いでいなくても、それらに<strong>似た特徴</strong>を生み出すことがあります。これが<strong>収斂進化 (convergent evolution)</strong> です。</p>
<p>その結果できる構造が<strong>相似構造 (analogous structures)</strong> で、<strong>働きは同じだが進化的な起源は異なります</strong>。</p>
<p><strong>例（少なくとも一つは知っておく）：</strong></p>
<ul>
<li><strong>昆虫と鳥の翼</strong>：どちらも飛ぶために使うが作りはまったく異なる（鳥の翼は骨と羽毛をもつ変化した肢、昆虫の翅は外骨格の薄い膜）。</li>
<li><strong>イカやタコと脊椎動物のカメラ型の眼</strong>：どちらも光を網膜に集めるが、独立に発達した。</li>
<li><strong>サメとイルカの流線形の体とひれ</strong>：どちらも速く泳ぐのに適している。</li>
</ul>
<table>
<tr><th></th><th>相同構造</th><th>相似構造</th></tr>
<tr><td>進化的起源</td><td>同じ（共通祖先）</td><td>異なる</td></tr>
<tr><td>働き</td><td>異なることが多い</td><td>同じ</td></tr>
<tr><td>原因</td><td>共通の祖先</td><td>収斂進化</td></tr>
<tr><td>例</td><td>五指性の肢</td><td>昆虫と鳥の翼</td></tr>
</table>`,
          `<p>有時沒有親緣關係的生物面對<strong>相似的環境問題</strong>。自然選擇便可能在牠們身上產生<strong>相似的特徵</strong>，儘管牠們並非從近期的共同祖先遺傳這特徵。這就是<strong>趨同進化 (convergent evolution)</strong>。</p>
<p>由此產生的結構是<strong>同功結構 (analogous structures)</strong>：它們<strong>功能相同但進化起源不同</strong>。</p>
<p><strong>例子（至少要認識一個）：</strong></p>
<ul>
<li><strong>昆蟲和鳥類的翼</strong>：兩者都用來飛行，但構造完全不同（鳥的翼是由骨骼和羽毛構成的變異肢體，昆蟲的翅是外骨骼的薄片）。</li>
<li><strong>魷魚或章魚與脊椎動物的照相機型眼睛</strong>：兩者都把光聚焦在視網膜上，但是各自獨立發展。</li>
<li><strong>鯊魚與海豚的流線型身體和鰭／鰭肢</strong>：兩者都適合快速游泳。</li>
</ul>
<table>
<tr><th></th><th>同源結構</th><th>同功結構</th></tr>
<tr><td>進化起源</td><td>相同（共同祖先）</td><td>不同</td></tr>
<tr><td>功能</td><td>常不相同</td><td>相同</td></tr>
<tr><td>成因</td><td>共同祖先</td><td>趨同進化</td></tr>
<tr><td>例子</td><td>五指型肢</td><td>昆蟲和鳥的翼</td></tr>
</table>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.6", ahl: false,
        heading: L("Speciation by splitting of existing species", "既存の種の分裂による種分化", "由現有物種分裂而成的物種形成"),
        body: L(
          `<p><strong>Speciation</strong> is the formation of new species. <strong>It happens by the splitting of a pre-existing species into two or more species.</strong> You should appreciate that this is the <em>only</em> way in which new species have appeared.</p>
<ul>
<li>Speciation <strong>increases</strong> the total number of species on Earth.</li>
<li><strong>Extinction decreases</strong> the total number of species.</li>
<li><strong>Gradual evolutionary change within one species is not speciation.</strong> If a single lineage slowly changes over time but never splits, the number of species has not changed.</li>
</ul>`,
          `<p><strong>種分化 (speciation)</strong> とは、新しい種の形成です。<strong>それは既存の種が二つ以上の種に分裂することで起こります。</strong>これが新しい種が現れた<em>唯一の</em>方法であることを理解しておきましょう。</p>
<ul>
<li>種分化は地球上の種の総数を<strong>増やします</strong>。</li>
<li><strong>絶滅は種の総数を減らします。</strong></li>
<li><strong>一つの種の中で徐々に進化的な変化が起こっても、種分化ではありません。</strong>一つの系統が時間とともにゆっくり変化しても分裂しなければ、種の数は変わりません。</li>
</ul>`,
          `<p><strong>物種形成 (speciation)</strong> 是新物種的形成。<strong>它透過現有物種分裂成兩個或以上物種而發生。</strong>你應明白這是新物種出現的<em>唯一</em>方式。</p>
<ul>
<li>物種形成會<strong>增加</strong>地球上的物種總數。</li>
<li><strong>滅絕會減少</strong>物種總數。</li>
<li><strong>單一物種內逐漸的進化改變不是物種形成。</strong>如果一個譜系隨時間慢慢改變而沒有分裂，物種的數目並沒有改變。</li>
</ul>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.7", ahl: false,
        heading: L("Reproductive isolation and differential selection", "生殖的隔離と分化的選択", "生殖隔離與差異選擇"),
        body: L(
          `<p>For one species to split, two things are needed:</p>
<ol>
<li><strong>Reproductive isolation</strong>: the populations stop interbreeding, so alleles no longer flow between them. One way to achieve it is <strong>geographical isolation</strong>: a physical barrier such as a river, sea, mountain range or desert separates the populations.</li>
<li><strong>Differential selection</strong>: the two populations live in <em>different conditions</em>, so natural selection favours different alleles in each. New mutations also arise separately in each. Over many generations the populations become more and more different.</li>
</ol>
<p>Eventually the populations are so different that they can no longer interbreed and produce fertile offspring even if they meet again. They are now separate species.</p>
<p><strong>Specific example: bonobos and common chimpanzees.</strong> The Congo River in central Africa separates the bonobo (<em>Pan paniscus</em>, south of the river) from the common chimpanzee (<em>Pan troglodytes</em>, north of the river). The ancestral population was split by the river (geographical isolation), and apes cannot easily cross a wide, fast river. The two groups then lived in somewhat different environments, with differences in food supply and in the other species around them. <strong>Differential selection</strong> led to the differences between the two species today.</p>
<p>Use the widget to step through the process.</p>`,
          `<p>一つの種が分かれるには、二つのことが必要です。</p>
<ol>
<li><strong>生殖的隔離 (reproductive isolation)</strong>：集団が交配しなくなり、対立遺伝子が集団間を行き来しなくなること。実現する方法の一つが<strong>地理的隔離 (geographical isolation)</strong> で、川、海、山脈、砂漠などの物理的な障壁が集団を隔てます。</li>
<li><strong>分化的選択 (differential selection)</strong>：二つの集団が<em>異なる条件</em>で生活するため、自然選択がそれぞれで異なる対立遺伝子を有利にします。新しい突然変異もそれぞれで別々に生じます。何世代もたつうちに、集団はますます違っていきます。</li>
</ol>
<p>やがて集団が非常に違ってしまうと、再び出会っても交配して生殖能力のある子を作れなくなります。このとき、それらは別の種になっています。</p>
<p><strong>具体例：ボノボとチンパンジー。</strong>アフリカ中央部のコンゴ川は、ボノボ (<em>Pan paniscus</em>、川の南) と、チンパンジー (<em>Pan troglodytes</em>、川の北) を隔てています。祖先の集団が川で分けられ（地理的隔離）、類人猿は広くて流れの速い川を簡単には渡れません。その後、二つの集団は、食物や周囲の他の種などが少し異なる環境で生活しました。<strong>分化的選択</strong>が、現在の二種の違いを生みました。</p>
<p>ウィジェットで過程を順に見てみましょう。</p>`,
          `<p>一個物種要分裂，需要兩個條件：</p>
<ol>
<li><strong>生殖隔離 (reproductive isolation)</strong>：種羣停止互相交配，使等位基因不再在牠們之間流動。其中一種方法是<strong>地理隔離 (geographical isolation)</strong>：河流、海洋、山脈或沙漠等物理屏障把種羣分隔開。</li>
<li><strong>差異選擇 (differential selection)</strong>：兩個種羣生活在<em>不同的條件</em>下，所以自然選擇在各自之中有利於不同的等位基因。新的突變也在各自之中獨立出現。經過許多世代，種羣變得越來越不同。</li>
</ol>
<p>最後種羣變得非常不同，即使再次相遇也不能交配並產生可育後代，此時牠們已是不同的物種。</p>
<p><strong>具體例子：倭黑猩猩與黑猩猩。</strong>非洲中部的剛果河把倭黑猩猩 (<em>Pan paniscus</em>，河的南面) 與黑猩猩 (<em>Pan troglodytes</em>，河的北面) 分隔。祖先種羣被河流分開（地理隔離），而猿類不容易渡過寬闊湍急的河。其後兩個羣體生活在略有不同的環境中，食物供應和周圍的其他物種都有差異。<strong>差異選擇</strong>造成了今日兩個物種之間的差異。</p>
<p>請使用小工具逐步觀察這個過程。</p>`
        ),
        widget: "speciation-allopatric",
        examTip: L("Two ingredients: (1) reproductive isolation (e.g. a river) and (2) differential selection in different environments.", "二つの要素：(1) 生殖的隔離（例：川）と (2) 異なる環境での分化的選択。", "兩個要素：(1) 生殖隔離（例如河流）和 (2) 不同環境中的差異選擇。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.8", ahl: true,
        heading: L("Sympatric and allopatric speciation (AHL)", "同所的種分化と異所的種分化 (AHL)", "同域與異域物種形成 (AHL)"),
        body: L(
          `<p>Reproductive isolation can be <strong>geographic</strong>, <strong>behavioural</strong> or <strong>temporal</strong>:</p>
<ul>
<li><strong>Geographic</strong>: populations live in different places, separated by a barrier.</li>
<li><strong>Behavioural</strong>: the populations live together but differ in courtship behaviour (for example song or display), so they do not recognise each other as mates.</li>
<li><strong>Temporal</strong>: the populations breed or flower at different times (different seasons or times of day), so they do not meet to breed.</li>
</ul>
<p><strong>Allopatric speciation</strong> ("other place") occurs when populations are <strong>geographically separated</strong>. <strong>Sympatric speciation</strong> ("same place") occurs when new species arise in the <strong>same area</strong>, with no geographical barrier, through behavioural or temporal isolation (or other mechanisms such as polyploidy in plants).</p>
<table>
<tr><th></th><th>Allopatric</th><th>Sympatric</th></tr>
<tr><td>Where</td><td>Populations in different places</td><td>Populations in the same area</td></tr>
<tr><td>Cause of isolation</td><td>Geographic barrier</td><td>Behavioural or temporal differences (no barrier)</td></tr>
<tr><td>Gene flow</td><td>Blocked by the barrier</td><td>Blocked because they no longer mate with each other</td></tr>
</table>
<p><strong>Similarities:</strong> in both, a population is split into two gene pools that stop exchanging alleles; natural selection and mutation then make the gene pools differ; and the result is two species that cannot produce fertile offspring together.</p>
<p>Use the widget to compare the types.</p>`,
          `<p>生殖的隔離には、<strong>地理的</strong>、<strong>行動的</strong>、<strong>時間的</strong>なものがあります。</p>
<ul>
<li><strong>地理的 (geographic)</strong>：集団が障壁で隔てられ、別々の場所に住む。</li>
<li><strong>行動的 (behavioural)</strong>：集団は一緒に住むが、求愛行動（たとえば鳴き声や求愛の動き）が異なり、互いを配偶相手と認識しない。</li>
<li><strong>時間的 (temporal)</strong>：集団が繁殖または開花する時期（季節や時刻）が異なり、繁殖のために出会わない。</li>
</ul>
<p><strong>異所的種分化 (allopatric speciation)</strong>（「別の場所」）は、集団が<strong>地理的に隔てられている</strong>ときに起こります。<strong>同所的種分化 (sympatric speciation)</strong>（「同じ場所」）は、地理的な障壁なしに<strong>同じ地域</strong>で、行動的または時間的な隔離（または植物の倍数性などの別の仕組み）により新しい種が生じるものです。</p>
<table>
<tr><th></th><th>異所的</th><th>同所的</th></tr>
<tr><td>場所</td><td>集団が別々の場所にいる</td><td>集団が同じ地域にいる</td></tr>
<tr><td>隔離の原因</td><td>地理的な障壁</td><td>行動的・時間的な違い（障壁なし）</td></tr>
<tr><td>遺伝子の流れ</td><td>障壁でさえぎられる</td><td>互いに交配しなくなるのでさえぎられる</td></tr>
</table>
<p><strong>共通点：</strong>どちらも、集団が対立遺伝子をやり取りしなくなる二つの遺伝子プールに分かれ、その後自然選択と突然変異で遺伝子プールが違っていき、結果として互いに生殖能力のある子を作れない二つの種になります。</p>
<p>ウィジェットで種類を比べてみましょう。</p>`,
          `<p>生殖隔離可以是<strong>地理的</strong>、<strong>行為的</strong>或<strong>時間的</strong>：</p>
<ul>
<li><strong>地理 (geographic)</strong>：種羣被屏障分隔，生活在不同地方。</li>
<li><strong>行為 (behavioural)</strong>：種羣生活在一起，但求偶行為（例如鳴叫或展示）不同，所以不會把對方視為配偶。</li>
<li><strong>時間 (temporal)</strong>：種羣在不同時間（不同季節或一天中的不同時段）繁殖或開花，所以不會相遇交配。</li>
</ul>
<p><strong>異域物種形成 (allopatric speciation)</strong>（「不同地方」）發生於種羣被<strong>地理隔離</strong>時。<strong>同域物種形成 (sympatric speciation)</strong>（「相同地方」）發生於新物種在<strong>同一地區</strong>、沒有地理屏障的情況下，透過行為或時間隔離（或植物的多倍體等其他機制）而產生。</p>
<table>
<tr><th></th><th>異域</th><th>同域</th></tr>
<tr><td>地點</td><td>種羣在不同地方</td><td>種羣在同一地區</td></tr>
<tr><td>隔離的原因</td><td>地理屏障</td><td>行為或時間差異（沒有屏障）</td></tr>
<tr><td>基因流動</td><td>被屏障阻隔</td><td>因為牠們不再互相交配而被阻隔</td></tr>
</table>
<p><strong>相同點：</strong>兩者都是一個種羣分成兩個停止交換等位基因的基因庫；其後自然選擇和突變令基因庫變得不同；結果是產生兩個互相不能產生可育後代的物種。</p>
<p>請使用小工具比較各種類型。</p>`
        ),
        widget: "speciation",
        examTip: L("Allopatric = geographic barrier. Sympatric = same area, isolation by behaviour or timing (or polyploidy in plants).", "異所的＝地理的障壁。同所的＝同じ地域で、行動や時期（または植物の倍数性）による隔離。", "異域 = 地理屏障。同域 = 同一地區，由行為或時間（或植物的多倍體）造成隔離。")
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.9", ahl: true,
        heading: L("Adaptive radiation (AHL)", "適応放散 (AHL)", "適應輻射 (AHL)"),
        body: L(
          `<p><strong>Adaptive radiation</strong> is when one ancestral species rapidly gives rise to <strong>many new species</strong>, each <strong>adapted to a different way of life (niche)</strong>. It happens when there are <strong>vacant niches</strong>, for example on newly formed islands or after a mass extinction has removed other species.</p>
<p>As the descendants specialise on different foods or habitats, <strong>closely related species can coexist without competing</strong>. This increases <strong>biodiversity</strong> in ecosystems that had vacant niches.</p>
<div class="note">The guide does not name an example. A well-known one is Darwin's finches on the Galápagos Islands, where beaks differ for different foods. No particular example is required, but having one ready helps you illustrate an extended answer.</div>`,
          `<p><strong>適応放散 (adaptive radiation)</strong> とは、一つの祖先種から短期間に<strong>多くの新しい種</strong>が生じ、それぞれが<strong>異なる生活様式（ニッチ, niche）に適応</strong>することです。新しくできた島や、大量絶滅で他の種がいなくなった後など、<strong>空いているニッチ</strong>があるときに起こります。</p>
<p>子孫がそれぞれ異なる食物や生息場所に特化することで、<strong>近縁な種が競争せずに共存</strong>できます。これは、空いたニッチがあった生態系の<strong>生物多様性</strong>を高めます。</p>
<div class="note">ガイドは例を挙げていません。よく知られた例はガラパゴス諸島のダーウィンフィンチで、食物に応じてくちばしが違います。特定の例は必須ではありませんが、一つ用意しておくと記述問題で説明しやすくなります。</div>`,
          `<p><strong>適應輻射 (adaptive radiation)</strong> 是指一個祖先物種迅速產生<strong>許多新物種</strong>，每個物種都<strong>適應不同的生活方式（生態位 niche）</strong>。它在有<strong>空缺生態位</strong>時發生，例如新形成的島嶼，或大規模滅絕移走了其他物種之後。</p>
<p>當後代各自專門適應不同的食物或生境時，<strong>近緣物種可以共存而不互相競爭</strong>。這增加了有空缺生態位的生態系統的<strong>生物多樣性</strong>。</p>
<div class="note">課程指引沒有指定例子。一個著名的例子是加拉帕戈斯羣島的達爾文雀，牠們的喙因食物不同而有差異。課程並不要求特定例子，但準備一個有助你在長答題中舉例說明。</div>`
        ),
        widget: "speciation-radiation"
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.10", ahl: true,
        heading: L("Barriers to hybridization and sterile hybrids (AHL)", "雑種形成の障壁と雑種の不妊 (AHL)", "雜交障礙與雜種不育 (AHL)"),
        body: L(
          `<p>Closely related species could in principle mix their alleles by <strong>hybridization</strong> (interbreeding between species). If this happened a lot, the species would merge back together. Two kinds of mechanism prevent this.</p>
<p><strong>1. Barriers that stop hybridization from happening.</strong> <strong>Courtship behaviour</strong> often prevents hybridization in animals. A female usually responds only to the song, display or signal of her own species, so she does not mate with males of a different species.</p>
<p><strong>2. Sterility of the hybrids.</strong> If members of two species do mate, the offspring may be <strong>sterile</strong>. A <strong>mule</strong> (offspring of a horse and a donkey) is an example of a sterile hybrid: it is healthy and strong but cannot produce functional gametes, because the chromosomes inherited from the two species cannot pair properly in meiosis. So no alleles pass on through the hybrid from one species to the other.</p>
<p>Both mechanisms <strong>keep the gene pools of the species separate</strong>, preventing the mixing of alleles between them.</p>`,
          `<p>近縁な種は、原理的には<strong>交雑 (hybridization)</strong>（種間の交配）によって対立遺伝子を混ぜることができます。これが頻繁に起こると、種は再び一つに混ざってしまいます。これを防ぐ仕組みが二種類あります。</p>
<p><strong>1. 交雑が起こるのを防ぐ障壁。</strong>動物では、<strong>求愛行動</strong>がしばしば交雑を防ぎます。雌はふつう自分の種の歌、ディスプレイ、合図にだけ反応するので、別の種の雄とは交配しません。</p>
<p><strong>2. 雑種の不妊。</strong>二つの種の個体が交配しても、子が<strong>不妊</strong>になることがあります。<strong>ラバ (mule)</strong>（ウマとロバの子）は不妊の雑種の例で、健康で力が強いのに、二つの種から受け継いだ染色体が減数分裂で正しく対にならないため、機能する配偶子を作れません。そのため、雑種を通して一方の種から他方へ対立遺伝子が渡ることがありません。</p>
<p>どちらの仕組みも<strong>種の遺伝子プールを分けておき</strong>、種の間で対立遺伝子が混ざるのを防ぎます。</p>`,
          `<p>近緣物種原則上可以透過<strong>雜交 (hybridization)</strong>（物種之間的交配）混合等位基因。如果這種情況經常發生，物種就會重新融合。有兩類機制防止這種情況。</p>
<p><strong>1. 阻止雜交發生的障礙。</strong>在動物中，<strong>求偶行為</strong>往往可防止雜交。雌性通常只對本物種的叫聲、展示或信號有反應，所以不會與其他物種的雄性交配。</p>
<p><strong>2. 雜種不育。</strong>如果兩個物種的成員確實交配，後代可能<strong>不育</strong>。<strong>騾 (mule)</strong>（馬與驢的後代）是不育雜種的例子：騾健康強壯，但不能產生有功能的配子，因為從兩個物種遺傳而來的染色體在減數分裂時不能正常配對。所以等位基因不會透過雜種由一個物種傳到另一個物種。</p>
<p>兩種機制都<strong>使物種的基因庫保持分隔</strong>，防止等位基因在物種之間混合。</p>`
        )
      },
      /* ---------------------------------------------------------------- */
      {
        ref: "A4.1.11", ahl: true,
        heading: L("Abrupt speciation in plants: hybridization and polyploidy (AHL)", "植物における急速な種分化：雑種形成と倍数性 (AHL)", "植物的突發式物種形成：雜交與多倍體 (AHL)"),
        body: L(
          `<p>Most speciation is gradual, but in <strong>plants</strong> a new species can form <strong>abruptly</strong>, in a single generation, by <strong>hybridization and polyploidy</strong>. <em>Polyploid</em> means having <strong>more than two sets of chromosomes</strong>.</p>
<ol>
<li>Two different species <strong>hybridize</strong>. The hybrid gets one set of chromosomes from each parent species.</li>
<li>The hybrid is usually <strong>sterile</strong>, because the two sets of chromosomes are different and cannot pair up in meiosis.</li>
<li>If the chromosome number then <strong>doubles</strong> (for example through an error in cell division), every chromosome has an identical partner. Meiosis works, and the plant becomes <strong>fertile</strong>.</li>
<li>The new polyploid plant is <strong>instantly reproductively isolated</strong> from both parent species. A cross with a parent would give offspring with an uneven number of chromosome sets, which are sterile.</li>
</ol>
<p>Plants can often self-pollinate or reproduce vegetatively, so even a single new polyploid plant can found a population.</p>
<p><strong>Example:</strong> the knotweeds or smartweeds, genus <em>Persicaria</em>, contain many species that have been formed by hybridization and polyploidy. Either the common name or the scientific name is accepted in exams.</p>`,
          `<p>種分化の多くは徐々に進みますが、<strong>植物</strong>では<strong>雑種形成と倍数性</strong>により、新しい種が一世代で<strong>急に</strong>できることがあります。<em>倍数体 (polyploid)</em> とは<strong>染色体のセットを三組以上</strong>もつことです。</p>
<ol>
<li>二つの異なる種が<strong>交雑</strong>する。雑種は両親の種から一組ずつ染色体を受け取る。</li>
<li>二組の染色体が異なり、減数分裂で対になれないため、雑種はふつう<strong>不妊</strong>である。</li>
<li>その後、染色体数が<strong>倍加</strong>すると（たとえば細胞分裂の誤りで）、すべての染色体に同じ相手ができる。減数分裂が働き、植物は<strong>生殖能力</strong>をもつ。</li>
<li>新しい倍数体の植物は、両方の親の種から<strong>すぐに生殖的に隔離</strong>される。親と交配すると染色体のセット数が奇数の子ができ、不妊になるからである。</li>
</ol>
<p>植物は自家受粉や栄養生殖ができることが多いので、新しい倍数体の植物が一個体だけでも、個体群を始められます。</p>
<p><strong>例：</strong>タデ類 (knotweed / smartweed)、<em>Persicaria</em> 属（タデ属）には、雑種形成と倍数性で生じた種が多く含まれます。試験では一般名でも学名でも認められます。</p>`,
          `<p>大部分的物種形成是逐漸的，但在<strong>植物</strong>中，新物種可以通過<strong>雜交和多倍體</strong>在一代之內<strong>突然</strong>形成。<em>多倍體 (polyploid)</em> 指有<strong>多於兩套染色體</strong>。</p>
<ol>
<li>兩個不同的物種<strong>雜交</strong>。雜種從每個親本物種各得到一套染色體。</li>
<li>雜種通常<strong>不育</strong>，因為兩套染色體不同，在減數分裂時不能配對。</li>
<li>如果染色體數目其後<strong>加倍</strong>（例如因細胞分裂時出錯），每條染色體都有相同的配對夥伴。減數分裂得以進行，植物就變得<strong>可育</strong>。</li>
<li>新的多倍體植物與兩個親本物種<strong>立即產生生殖隔離</strong>。與親本雜交所得的後代，染色體套數是奇數，因而不育。</li>
</ol>
<p>植物常可自花授粉或進行營養繁殖，所以即使只有一株新的多倍體植物，也能建立一個種羣。</p>
<p><strong>例子：</strong>蓼屬 (knotweed / smartweed，屬名 <em>Persicaria</em>) 包含許多透過雜交和多倍體形成的物種。考試時可用俗名或學名。</p>`
        ),
        widget: "speciation-poly",
        examTip: L("Remember the order: hybrid (sterile) → chromosome doubling → fertile polyploid, isolated from parents at once.", "順序を覚えましょう：雑種（不妊）→ 染色体の倍加 → 生殖能力のある倍数体（すぐに親から隔離される）。", "記住次序：雜種（不育）→ 染色體加倍 → 可育的多倍體（立即與親本隔離）。")
      }
    ],
    keyTerms: [
      { term: L("evolution", "進化", "進化"), def: L("Change in the heritable characteristics of a population.", "個体群の遺伝する特徴の変化。", "種羣可遺傳特徵的改變。"), ahl: false },
      { term: L("Lamarckism", "ラマルク説", "拉馬克學說"), def: L("The (incorrect) idea that characteristics acquired during life are passed on to offspring.", "生きている間に得た特徴が子に伝わるという（誤った）考え。", "認為一生中獲得的特徵會傳給後代的（錯誤）想法。"), ahl: false },
      { term: L("selective breeding", "選択育種", "選擇性育種"), def: L("People choose which individuals breed, to produce desired traits.", "望む形質を得るために、人が繁殖させる個体を選ぶこと。", "人類選擇哪些個體繁殖，以得到所需性狀。"), ahl: false },
      { term: L("homologous structure", "相同構造", "同源結構"), def: L("Structures in different species with the same evolutionary origin, often with different functions.", "異なる種にある、進化的起源が同じで、働きは異なることも多い構造。", "不同物種中進化起源相同、功能常不相同的結構。"), ahl: false },
      { term: L("pentadactyl limb", "五指性の肢", "五指型肢"), def: L("A limb with a basic five-digit bone plan found in many vertebrates.", "多くの脊椎動物にある、五本指の基本骨格をもつ肢。", "許多脊椎動物具有的、基本為五指骨骼格局的肢。"), ahl: false },
      { term: L("convergent evolution", "収斂進化", "趨同進化"), def: L("Unrelated organisms evolve similar features because of similar selection pressures.", "無関係な生物が似た選択圧のために似た特徴を進化させること。", "沒有親緣關係的生物因相似的選擇壓力而演化出相似的特徵。"), ahl: false },
      { term: L("analogous structure", "相似構造", "同功結構"), def: L("Structures with the same function but different evolutionary origins.", "働きは同じだが進化的起源が異なる構造。", "功能相同但進化起源不同的結構。"), ahl: false },
      { term: L("speciation", "種分化", "物種形成"), def: L("The formation of new species by splitting of a pre-existing species.", "既存の種が分裂して新しい種ができること。", "現有物種分裂而形成新物種。"), ahl: false },
      { term: L("reproductive isolation", "生殖的隔離", "生殖隔離"), def: L("Populations no longer interbreed, so there is no gene flow between them.", "集団が交配しなくなり、集団間で遺伝子の流れがなくなること。", "種羣不再交配，所以牠們之間沒有基因流動。"), ahl: false },
      { term: L("differential selection", "分化的選択", "差異選擇"), def: L("Different environments favour different alleles in separated populations.", "分かれた集団で、異なる環境が異なる対立遺伝子を有利にすること。", "在分隔的種羣中，不同環境有利於不同的等位基因。"), ahl: false },
      { term: L("allopatric speciation", "異所的種分化", "異域物種形成"), def: L("Speciation of geographically separated populations.", "地理的に隔てられた集団での種分化。", "地理上分隔的種羣之間的物種形成。"), ahl: true },
      { term: L("sympatric speciation", "同所的種分化", "同域物種形成"), def: L("Speciation of populations living in the same area.", "同じ地域に住む集団での種分化。", "生活在同一地區的種羣之間的物種形成。"), ahl: true },
      { term: L("adaptive radiation", "適応放散", "適應輻射"), def: L("Rapid evolution of many species from one ancestor, each adapted to a different niche.", "一つの祖先から多くの種が短期間に進化し、それぞれが異なるニッチに適応すること。", "由一個祖先迅速演化出許多物種，各適應不同的生態位。"), ahl: true },
      { term: L("hybrid", "雑種", "雜種"), def: L("Offspring of parents from two different species.", "異なる二つの種の親から生まれた子。", "兩個不同物種的親本所生的後代。"), ahl: true },
      { term: L("polyploidy", "倍数性", "多倍體"), def: L("Having more than two sets of chromosomes.", "染色体のセットを三組以上もつこと。", "有多於兩套染色體。"), ahl: true }
    ],
    misconceptions: [
      {
        wrong: L("Evolution happens when an individual changes to fit its environment.", "個体が環境に合わせて変わることが進化である。", "進化是指個體為適應環境而改變。"),
        right: L("Evolution is a change in the heritable characteristics of a population over generations; changes acquired during life that are not genetic are not evolution.", "進化は世代を通じた個体群の遺伝する特徴の変化です。生きている間に得た遺伝的でない変化は進化ではありません。", "進化是種羣可遺傳特徵在世代之間的改變；一生中獲得的非遺傳改變不是進化。")
      },
      {
        wrong: L("Bat wings and bird wings are homologous because both are wings.", "コウモリの翼と鳥の翼は、どちらも翼なので相同である。", "蝙蝠的翼和鳥的翼都是翼，所以是同源的。"),
        right: L("As wings (flying surfaces) they are analogous: they evolved separately. Only the underlying limb bone plan is homologous.", "飛ぶための面としては相似で、別々に進化しました。相同なのは、土台にある肢の骨の設計だけです。", "作為翼（飛行的表面），它們是同功結構，各自獨立演化。只有底層的肢骨格局才是同源的。")
      },
      {
        wrong: L("Gradual change of a species over time creates a new species.", "種が時間とともに徐々に変化すれば新しい種ができる。", "物種隨時間逐漸改變就會形成新物種。"),
        right: L("Speciation needs a split into two or more species; change in one unbranched lineage is not speciation.", "種分化には二つ以上の種への分裂が必要で、枝分かれしない一つの系統の変化は種分化ではありません。", "物種形成需要分裂成兩個或以上物種；單一不分支譜系的改變不是物種形成。")
      },
      {
        wrong: L("A mule shows that horses and donkeys are the same species.", "ラバがいることは、ウマとロバが同じ種であることを示す。", "騾的存在顯示馬和驢是同一物種。"),
        right: L("The mule is sterile, so the two are different species; sterile hybrids keep the gene pools separate.", "ラバは不妊なので別の種であり、不妊の雑種は遺伝子プールを分けておきます。", "騾不育，所以兩者是不同物種；不育的雜種使基因庫保持分隔。")
      },
      {
        wrong: L("Speciation always needs a physical barrier.", "種分化にはいつも物理的な障壁が必要である。", "物種形成總是需要物理屏障。"),
        right: L("Allopatric speciation does, but sympatric speciation happens in the same area through behavioural or temporal isolation or polyploidy.", "異所的種分化では必要ですが、同所的種分化は同じ地域で、行動的・時間的な隔離や倍数性によって起こります。", "異域物種形成需要，但同域物種形成在同一地區，透過行為或時間隔離或多倍體而發生。")
      }
    ],
    beyondSyllabus: [
      L("The detailed mechanism of natural selection is not needed for this subtopic: it is taught in D4.1 (Natural selection). For A4.1 the focus is the evidence and speciation.", "自然選択の詳しい仕組みはこの小項目では不要です。D4.1（自然選択 Natural selection）で学びます。A4.1 の中心は証拠と種分化です。", "這個小節不需要自然選擇的詳細機制：它在 D4.1（自然選擇 Natural selection）中講授。A4.1 的重點是證據和物種形成。"),
      L("No named example of adaptive radiation is required (the guide gives none), and you do not need its details; one example such as Darwin's finches is useful only to illustrate an answer.", "適応放散の指定された例はなく（ガイドは例を挙げていません）、詳細も不要です。ダーウィンフィンチなどの例は、答えを説明するのに役立つ程度です。", "適應輻射沒有指定的例子（課程指引沒有給出），也不需要其細節；達爾文雀等例子只用來協助說明答案。"),
      L("You do not need the terms prezygotic and postzygotic barriers, or a list of every type of barrier. Know courtship behaviour and hybrid sterility with the mule.", "接合前障壁・接合後障壁という用語や、障壁のあらゆる種類の一覧は不要です。求愛行動と、ラバによる雑種不妊を知っていれば十分です。", "你不需要「合子前／合子後障礙」這些術語，也不需要列出所有障礙類型。認識求偶行為和以騾為例的雜種不育便可。"),
      L("You do not need to know the names of types of polyploidy (autopolyploidy, allopolyploidy) or the chemicals used to double chromosomes. Use Persicaria as the example.", "倍数性の種類の名称（同質倍数体、異質倍数体）や、染色体を倍加させる薬品の名前は不要です。例はタデ類 (Persicaria) を使います。", "你不需要知道多倍體類型的名稱（同源多倍體、異源多倍體）或令染色體加倍的化學物質。以蓼屬 (Persicaria) 作例子便可。"),
      L("You do not need other examples of fossil, biogeographical or embryological evidence for A4.1; the guide lists sequences, selective breeding and homologous structures.", "A4.1 のために、化石、生物地理学、発生学の証拠の他の例は不要です。ガイドが挙げるのは配列、選択育種、相同構造です。", "A4.1 不需要化石、生物地理學或胚胎學證據的其他例子；課程指引列出的是序列、選擇性育種和同源結構。")
    ],
    links: [
      { to: "A3.1", why: L("The biological species concept and chromosome numbers help explain why hybrids are sterile.", "生物学的種概念と染色体数が、雑種が不妊である理由の説明に役立ちます。", "生物學物種概念和染色體數目有助解釋雜種為何不育。") },
      { to: "A3.2", why: L("Cladograms show the pattern of speciation events over time.", "分岐図は、時間を通じた種分化の出来事のパターンを示します。", "支序圖顯示物種形成事件隨時間的規律。") },
      { to: "A4.2", why: L("Speciation adds species; extinction removes them. Biodiversity is the balance.", "種分化は種を増やし、絶滅は種を減らします。生物多様性はそのバランスです。", "物種形成增加物種，滅絕減少物種。生物多樣性是兩者的平衡。") },
      { to: "B4.2", why: L("Adaptive radiation depends on vacant niches (ecological niches).", "適応放散は空いたニッチ（生態的ニッチ）に依存します。", "適應輻射依賴空缺生態位（生態位）。") }
    ],
    natureOfScience: [
      L("Theories and truth: evolution by natural selection explains a broad range of observations and is unlikely to be falsified, but science cannot formally prove a theory true; it is a pragmatic truth.", "理論と真理：自然選択による進化は広範な観察を説明し反証される可能性は低いが、科学は理論が真であると正式に証明できません。それは実用的な真理です。", "理論與真理：自然選擇進化論解釋大量觀察結果，不太可能被推翻，但科學無法正式證明理論為真；它是一種實用的真理。")
    ],
    questions: [
      {
        id: "a4-1-q01", type: "mcq", ahl: false, difficulty: 1, ref: "A4.1.1", paper: "1A",
        stem: L("Which statement best defines evolution?", "進化の定義として最も適切なのはどれか。", "以下哪項最能定義進化？"),
        options: [L("Changes that an individual acquires during its lifetime", "個体が生きている間に獲得する変化", "個體在一生中獲得的改變"), L("Change in the heritable characteristics of a population over generations", "世代を通じた個体群の遺伝する特徴の変化", "種羣可遺傳特徵在世代之間的改變"), L("The appearance of new organisms from non-living matter", "無生物から新しい生物が現れること", "新生物由非生物物質產生"), L("The improvement of species towards a perfect form", "種が完全な形へ向けて向上すること", "物種朝向完美形態改進")],
        answer: 1,
        explanation: L("Evolution needs heritable change in a population. A is the Lamarckian idea: changes acquired during life are not inherited. C is not evolution, and D wrongly suggests evolution has a goal.", "進化には個体群の遺伝する変化が必要です。Aはラマルク的な考えで、生きている間に得た変化は遺伝しません。Cは進化ではなく、Dは進化に目的があるという誤った考えです。", "進化需要種羣中可遺傳的改變。A 是拉馬克的想法：一生中獲得的改變不會遺傳。C 不是進化，D 錯誤地暗示進化有目標。")
      },
      {
        id: "a4-1-q02", type: "mcq", ahl: false, difficulty: 2, ref: "A4.1.1", paper: "1A",
        stem: L("Which of these is an example of evolution?", "次のうち、進化の例はどれか。", "以下哪個是進化的例子？"),
        options: [L("A weightlifter develops large muscles and his children are born strong", "重量挙げ選手が大きな筋肉をつけ、その子が力強く生まれる", "舉重運動員練出強壯肌肉，他的子女天生強壯"), L("The frequency of a dark-wing allele in a moth population rises over many generations", "ガの個体群で、暗色の翅の対立遺伝子の頻度が何世代にもわたって上がる", "蛾種羣中暗色翅膀等位基因的頻率在多個世代中上升"), L("A plant grows taller when it is given fertilizer", "植物が肥料を与えられて背が高くなる", "植物在施肥後長得更高"), L("A person's skin becomes darker after sunbathing", "日光浴をして人の皮膚が黒くなる", "一個人曬日光浴後皮膚變黑")],
        answer: 1,
        explanation: L("Only B is a change in the heritable (genetic) characteristics of a population. A, C and D are acquired changes that are not passed on through genes.", "Bだけが、個体群の遺伝する（遺伝的な）特徴の変化です。A、C、Dは遺伝子で伝わらない獲得された変化です。", "只有 B 是種羣可遺傳（基因）特徵的改變。A、C、D 都是不會透過基因傳遞的獲得性改變。")
      },
      {
        id: "a4-1-q03", type: "mcq", ahl: false, difficulty: 1, ref: "A4.1.5", paper: "1A",
        stem: L("Which pair is an example of analogous structures?", "相似構造の例となる組はどれか。", "哪一對是同功結構的例子？"),
        options: [L("Human arm and whale flipper", "ヒトの腕とクジラの胸びれ", "人類的手臂和鯨的鰭肢"), L("Insect wing and bird wing", "昆虫の翅と鳥の翼", "昆蟲的翅和鳥的翼"), L("Horse leg and human arm", "ウマの脚とヒトの腕", "馬的腿和人類的手臂"), L("Bat wing and human arm", "コウモリの翼とヒトの腕", "蝙蝠的翼和人類的手臂")],
        answer: 1,
        explanation: L("Insect and bird wings have the same function but different origins. The other pairs are built on the same pentadactyl limb plan, so they are homologous.", "昆虫の翅と鳥の翼は働きが同じで起源が異なります。他の組は同じ五指性の肢の設計に基づいているので相同です。", "昆蟲和鳥的翼功能相同但起源不同。其他各對都建基於同一個五指型肢格局，所以是同源的。")
      },
      {
        id: "a4-1-q04", type: "multi", ahl: false, difficulty: 2, ref: "A4.1.2–4", paper: "1A",
        stem: L("Select ALL the types of evidence for evolution named in the IB guide for A4.1.", "A4.1 で IB ガイドが挙げている進化の証拠の種類をすべて選べ。", "選出 IB 課程指引在 A4.1 中列出的所有進化證據類型。"),
        options: [L("Similarities in DNA base sequences and protein amino acid sequences", "DNA の塩基配列やタンパク質のアミノ酸配列の類似", "DNA 鹼基序列和蛋白質氨基酸序列的相似性"), L("Variation produced by selective breeding of domesticated species", "家畜や栽培植物の選択育種によって生じた変異", "馴養物種經選擇性育種產生的變異"), L("Homologous structures such as the pentadactyl limb", "五指性の肢などの相同構造", "五指型肢等同源結構"), L("Muscles that get bigger with exercise in a lifetime", "生涯の運動で大きくなる筋肉", "一生中因運動而變大的肌肉")],
        answer: [0, 1, 2],
        explanation: L("Sequences, selective breeding and homologous structures are the guide's three examples. D is an acquired change, not heritable, so it is not evidence for evolution.", "配列、選択育種、相同構造がガイドの三つの例です。Dは獲得された変化で遺伝しないので、進化の証拠にはなりません。", "序列、選擇性育種和同源結構是課程指引的三個例子。D 是獲得性改變、不可遺傳，所以不是進化的證據。")
      },
      {
        id: "a4-1-q05", type: "short", ahl: false, difficulty: 2, ref: "A4.1.2", paper: "1B", commandTerm: "Deduce", marks: 3,
        stem: L("The table shows the number of amino acid differences from the human protein, in the same 140-amino-acid protein from other species (illustrative data). (a) Deduce which species shares the most recent common ancestor with humans. (b) Explain how the data support the theory of evolution.", "表は、他の種の同じ140アミノ酸のタンパク質について、ヒトのタンパク質とのアミノ酸の違いの数を示す（例示データ）。(a) ヒトと最も新しい共通祖先を共有する種を推論せよ (Deduce)。(b) このデータが進化論を支持する仕組みを説明せよ (Explain)。", "下表顯示其他物種的同一種 140 個氨基酸的蛋白質與人類蛋白質之間的氨基酸差異數目（示例數據）。(a) 推斷 (Deduce) 哪一個物種與人類共有最近的共同祖先。(b) 解釋 (Explain) 這些數據如何支持進化論。"),
        data: L(
          `<table><tr><th>Species</th><th>Differences from human</th></tr><tr><td>Chimpanzee</td><td>0</td></tr><tr><td>Rhesus monkey</td><td>8</td></tr><tr><td>Mouse</td><td>16</td></tr><tr><td>Chicken</td><td>45</td></tr></table>`,
          `<table><tr><th>種</th><th>ヒトとの違い</th></tr><tr><td>チンパンジー</td><td>0</td></tr><tr><td>アカゲザル</td><td>8</td></tr><tr><td>マウス</td><td>16</td></tr><tr><td>ニワトリ</td><td>45</td></tr></table>`,
          `<table><tr><th>物種</th><th>與人類的差異</th></tr><tr><td>黑猩猩</td><td>0</td></tr><tr><td>恆河猴</td><td>8</td></tr><tr><td>小鼠</td><td>16</td></tr><tr><td>雞</td><td>45</td></tr></table>`
        ),
        markscheme: [
          L("(a) Chimpanzee (fewest/no differences)", "(a) チンパンジー（違いが最も少ない／ない）", "(a) 黑猩猩（差異最少／沒有差異）"),
          L("(b) Fewer differences in species thought to be closely related / more differences in distantly related species", "(b) 近縁と考えられる種では違いが少なく、遠縁の種では違いが多い", "(b) 被認為親緣近的物種差異較少／親緣遠的物種差異較多"),
          L("Differences accumulate by mutation over time since the common ancestor, so the pattern matches relationships predicted from other evidence (shared ancestry)", "共通祖先から時間がたつにつれ突然変異で違いが蓄積するので、このパターンは他の証拠から予想される関係（共通祖先）と一致する", "差異隨共同祖先之後的時間因突變而累積，所以這規律與從其他證據預測的親緣關係（共同祖先）相符")
        ],
        modelAnswer: L("(a) The chimpanzee, which has no differences. (b) The number of differences rises as the species become less closely related. Mutations build up after lineages split, so more differences mean an older common ancestor. This matches the relationships predicted from other evidence, which supports common ancestry.", "(a) 違いがないチンパンジー。(b) 種の近縁度が下がるにつれ、違いの数が増える。系統が分かれた後に突然変異が蓄積するので、違いが多いほど共通祖先は古い。これは他の証拠から予想される関係と一致し、共通祖先を支持する。", "(a) 黑猩猩，沒有差異。(b) 物種親緣越遠，差異數目越多。譜系分開後突變不斷累積，差異越多代表共同祖先越古老。這與從其他證據預測的親緣關係相符，支持共同祖先的說法。")
      },
      {
        id: "a4-1-q06", type: "short", ahl: false, difficulty: 2, ref: "A4.1.3", paper: "2", commandTerm: "Explain", marks: 3,
        stem: L("Cabbage, broccoli, cauliflower and kale were all bred from one wild plant. Explain how this is evidence for evolution.", "キャベツ、ブロッコリー、カリフラワー、ケールは、一つの野生植物から作り出された。これがなぜ進化の証拠になるか説明せよ (Explain)。", "椰菜、西蘭花、椰菜花和羽衣甘藍都是由同一種野生植物培育出來的。解釋 (Explain) 這為何是進化的證據。"),
        markscheme: [
          L("The wild population had heritable variation", "野生の個体群には遺伝する変異があった", "野生種羣有可遺傳的變異"),
          L("Breeders chose individuals with wanted traits to breed, repeated over generations, so the traits became common / characteristics of the population changed", "育種家は望む形質をもつ個体を選んで繁殖させ、これを世代にわたって繰り返したので、その形質が一般的になった／個体群の特徴が変化した", "育種者選擇具有所需性狀的個體繁殖，並代代重複，所以這些性狀變得普遍／種羣的特徵改變"),
          L("Large differences arose in a short (geologically) time, showing how rapidly evolutionary change can happen", "地質学的には短い時間で大きな違いが生じ、進化的変化がいかに速く起こり得るかを示す", "在（地質上）很短的時間內產生很大的差異，顯示進化改變可以多麼迅速")
        ],
        modelAnswer: L("The wild plant population contained heritable variation. Breeders selected plants with the traits they wanted and bred them over many generations, so each trait became common. Very different forms arose in a short time, which shows that populations can change rapidly when some individuals reproduce more than others.", "野生植物の個体群には遺伝する変異があった。育種家は望む形質をもつ植物を選び何世代も繁殖させたので、各形質が一般的になった。短い期間で非常に異なる形が生じたことは、一部の個体が他より多く繁殖すると個体群が速く変化し得ることを示す。", "野生植物種羣有可遺傳的變異。育種者選擇具有所需性狀的植物，經多個世代繁殖，使每種性狀變得普遍。在短時間內產生非常不同的形態，顯示當部分個體比其他個體繁殖更多時，種羣可以迅速改變。")
      },
      {
        id: "a4-1-q07", type: "mcq", ahl: false, difficulty: 2, ref: "A4.1.4", paper: "1A",
        stem: L("The forelimbs of humans, bats, whales and horses are used in different ways but contain the same set of bones. What is the best explanation?", "ヒト、コウモリ、クジラ、ウマの前肢は使い方が違うが、同じ骨の組をもつ。最もよい説明はどれか。", "人類、蝙蝠、鯨和馬的前肢用途不同，但包含相同的一組骨骼。哪個是最好的解釋？"),
        options: [L("Convergent evolution to the same function", "同じ働きに向かう収斂進化", "朝向相同功能的趨同進化"), L("Inheritance of the limb plan from a common ancestor, modified in each lineage", "共通祖先から肢の設計を受け継ぎ、各系統で変化した", "由共同祖先遺傳肢的格局，在每個譜系中各自改變"), L("Each animal acquired the bones by using its limb", "各動物が肢を使うことで骨を獲得した", "每種動物因使用肢而獲得這些骨骼"), L("Chance: all animals happen to have five fingers", "偶然：すべての動物がたまたま五本指をもっている", "巧合：所有動物碰巧都有五隻指")],
        answer: 1,
        explanation: L("Homologous structures share an origin, so common ancestry explains them. A is the tempting wrong answer: convergence produces similar function from different origins, the opposite situation. C is Lamarckism.", "相同構造は起源を共有するので、共通祖先で説明できます。Aは紛らわしい誤答で、収斂進化は異なる起源から似た働きが生じる逆の状況です。Cはラマルク説です。", "同源結構有共同起源，所以可用共同祖先解釋。A 是具誘惑力的錯誤答案：趨同進化是不同起源產生相似功能，情況剛好相反。C 是拉馬克學說。")
      },
      {
        id: "a4-1-q08", type: "short", ahl: false, difficulty: 2, ref: "A4.1.4–5", paper: "2", commandTerm: "Distinguish", marks: 3,
        stem: L("Distinguish between homologous structures and analogous structures, giving one example of an analogous structure.", "相同構造と相似構造を区別し (Distinguish)、相似構造の例を一つ挙げよ。", "區分 (Distinguish) 同源結構與同功結構，並給出同功結構的一個例子。"),
        markscheme: [
          L("Homologous structures have the same evolutionary origin (common ancestor), whereas analogous structures have different origins", "相同構造は進化的起源が同じ（共通祖先）だが、相似構造は起源が異なる", "同源結構有相同的進化起源（共同祖先），而同功結構的起源不同"),
          L("Homologous structures may have different functions, whereas analogous structures have the same function", "相同構造は働きが異なることがあるが、相似構造は働きが同じ", "同源結構的功能可以不同，而同功結構的功能相同"),
          L("Example of analogous structures: wings of insects and birds / eyes of squid and vertebrates / streamlined body of shark and dolphin (any one; convergent evolution)", "相似構造の例：昆虫と鳥の翼／イカと脊椎動物の眼／サメとイルカの流線形の体（いずれか一つ。収斂進化）", "同功結構的例子：昆蟲與鳥的翼／魷魚與脊椎動物的眼睛／鯊魚與海豚的流線型身體（任一；趨同進化）")
        ],
        modelAnswer: L("Homologous structures share a common evolutionary origin and can have different functions (pentadactyl limbs). Analogous structures have the same function but different origins, from convergent evolution, for example insect and bird wings.", "相同構造は進化的起源が共通で、働きが違ってよい（五指性の肢）。相似構造は働きが同じで起源が異なり、収斂進化による。例：昆虫と鳥の翼。", "同源結構有共同的進化起源，功能可以不同（五指型肢）。同功結構功能相同但起源不同，由趨同進化而來，例如昆蟲和鳥的翼。")
      },
      {
        id: "a4-1-q09", type: "mcq", ahl: false, difficulty: 3, ref: "A4.1.6", paper: "1A",
        stem: L("Fossils show that a single lineage of horses slowly increased in size over ten million years, with one species at each time and no splitting. How does this relate to speciation?", "化石から、あるウマの単一の系統が一千万年かけて少しずつ大きくなり、各時代に一種だけで分裂はなかったことが分かった。これは種分化とどう関係するか。", "化石顯示，一個馬的單一譜系在一千萬年間慢慢變大，每個時期只有一個物種，沒有分裂。這與物種形成有何關係？"),
        options: [L("It is speciation because the animals changed", "動物が変化したので種分化である", "因為動物改變了，所以是物種形成"), L("It is evolution but not speciation, because the number of species did not increase", "進化ではあるが、種の数が増えていないので種分化ではない", "這是進化但不是物種形成，因為物種數目沒有增加"), L("It is neither evolution nor speciation", "進化でも種分化でもない", "既不是進化也不是物種形成"), L("It is speciation because extinction decreased the number of species", "絶滅で種の数が減ったので種分化である", "因為滅絕減少了物種數目，所以是物種形成")],
        answer: 1,
        explanation: L("The heritable characteristics changed, so it is evolution. But speciation is a split of one species into two or more, which increases the number of species. Option A is the common confusion between evolution and speciation.", "遺伝する特徴が変化したので進化です。しかし種分化は一つの種が二つ以上に分かれて種の数が増えることです。Aは進化と種分化の典型的な混同です。", "可遺傳特徵改變了，所以是進化。但物種形成是一個物種分裂為兩個或以上、令物種數目增加。A 是進化與物種形成的常見混淆。")
      },
      {
        id: "a4-1-q10", type: "order", ahl: false, difficulty: 1, ref: "A4.1.7", paper: "1A",
        stem: L("Put the stages of speciation caused by a geographical barrier into order.", "地理的な障壁による種分化の段階を順に並べよ。", "把由地理屏障引起的物種形成各階段排成次序。"),
        items: [L("One population lives in one area and interbreeds freely", "一つの個体群が一つの地域に住み、自由に交配している", "一個種羣生活在一個地區，自由交配"), L("A barrier (e.g. a river) separates it into two populations with no gene flow", "障壁（例：川）が二つの個体群に分け、遺伝子の流れがなくなる", "屏障（例如河流）把它分成兩個種羣，沒有基因流動"), L("Different environments cause different alleles to be selected in each population", "異なる環境のために、各個体群で異なる対立遺伝子が選択される", "不同的環境令每個種羣選擇不同的等位基因"), L("The populations can no longer interbreed to produce fertile offspring: two species", "個体群は交配して生殖能力のある子を作れなくなる：二つの種", "兩個種羣不能再交配產生可育後代：形成兩個物種")],
        explanation: L("Isolation must come before differences can build up, and the differences must be large enough to block interbreeding before we call them separate species.", "違いが蓄積するには、まず隔離が先に必要で、違いが交配を妨げるほど大きくなって初めて別の種と呼べます。", "必須先有隔離，差異才能累積；差異大到阻止交配後，才稱為不同物種。")
      },
      {
        id: "a4-1-q11", type: "short", ahl: false, difficulty: 2, ref: "A4.1.7", paper: "2", commandTerm: "Outline", marks: 3,
        stem: L("Outline how the Congo River is thought to have led to the formation of two species, the bonobo and the common chimpanzee.", "コンゴ川が、ボノボとチンパンジーという二つの種の形成につながったと考えられる過程を説明せよ (Outline)。", "概述 (Outline) 剛果河如何被認為導致倭黑猩猩與黑猩猩兩個物種的形成。"),
        markscheme: [
          L("The river divided an ancestral population into two (geographical isolation / reproductive isolation)", "川が祖先の集団を二つに分けた（地理的隔離／生殖的隔離）", "河流把祖先種羣分成兩個（地理隔離／生殖隔離）"),
          L("No gene flow / interbreeding between the populations across the river", "川を越えた集団間に遺伝子の流れ／交配がない", "河兩岸的種羣之間沒有基因流動／交配"),
          L("Different environments/selection pressures on each side led to differential selection of alleles", "川の両側の異なる環境／選択圧が、対立遺伝子の分化的選択をもたらした", "兩岸不同的環境／選擇壓力導致等位基因的差異選擇"),
          L("The populations diverged until they became separate species", "個体群が分岐して別々の種になった", "種羣分歧直至成為不同的物種")
        ],
        modelAnswer: L("The Congo River split an ancestral ape population in two, so there was no interbreeding across the river. The two populations lived in different environments, so differential selection acted on them. Over time they diverged and became the two separate species, the bonobo and the common chimpanzee.", "コンゴ川が祖先の類人猿の集団を二つに分け、川を越えた交配がなくなった。二つの集団は異なる環境で生活したため、分化的選択が働いた。やがて分岐し、ボノボとチンパンジーという別々の二つの種になった。", "剛果河把祖先猿類種羣分成兩個，所以河兩岸之間沒有交配。兩個種羣生活在不同環境，所以受到差異選擇。經過一段時間，牠們分歧，成為倭黑猩猩和黑猩猩兩個獨立的物種。")
      },
      {
        id: "a4-1-q12", type: "match", ahl: true, difficulty: 1, ref: "A4.1.8", paper: "1A",
        stem: L("Match each situation to the type of reproductive isolation.", "各状況を生殖的隔離の種類と結び付けよ。", "把每種情況配對生殖隔離的類型。"),
        pairs: [
          { left: L("A mountain range divides one species into two populations", "山脈が一つの種を二つの個体群に分ける", "山脈把一個物種分成兩個種羣"), right: L("Geographic isolation", "地理的隔離", "地理隔離") },
          { left: L("Two groups in the same forest respond only to their own group's song", "同じ森にいる二つの群れが、自分の群れの鳴き声にだけ反応する", "同一片森林中的兩羣只對自己羣體的叫聲有反應"), right: L("Behavioural isolation", "行動的隔離", "行為隔離") },
          { left: L("Two groups of plants in the same field flower in different months", "同じ畑の二つの植物集団が、異なる月に開花する", "同一塊田中的兩羣植物在不同月份開花"), right: L("Temporal isolation", "時間的隔離", "時間隔離") }
        ],
        explanation: L("Geographic isolation depends on a barrier, behavioural isolation on mate recognition and temporal isolation on timing of breeding or flowering. The last two can occur in the same area (sympatric speciation).", "地理的隔離は障壁、行動的隔離は配偶相手の認識、時間的隔離は繁殖や開花の時期によります。後の二つは同じ地域で起こり得ます（同所的種分化）。", "地理隔離依賴屏障，行為隔離依賴配偶識別，時間隔離依賴繁殖或開花的時間。後兩者可以在同一地區發生（同域物種形成）。")
      },
      {
        id: "a4-1-q13", type: "short", ahl: true, difficulty: 3, ref: "A4.1.8", paper: "2", commandTerm: "Compare and contrast", marks: 4,
        stem: L("Compare and contrast allopatric and sympatric speciation.", "異所的種分化と同所的種分化を比較し対比せよ (Compare and contrast)。", "比較並對比 (Compare and contrast) 異域物種形成與同域物種形成。"),
        markscheme: [
          L("Similarity: both involve reproductive isolation / no gene flow between the populations", "共通点：どちらも生殖的隔離／集団間の遺伝子の流れがない", "相同：兩者都涉及生殖隔離／種羣之間沒有基因流動"),
          L("Similarity: both result in new species through divergence of gene pools by mutation and natural selection (differential selection)", "共通点：どちらも突然変異と自然選択（分化的選択）によって遺伝子プールが分岐し、新しい種ができる", "相同：兩者都透過突變和自然選擇（差異選擇）令基因庫分歧而形成新物種"),
          L("Difference: allopatric populations are in different places, sympatric populations live in the same area", "相違点：異所的では集団が別々の場所にいて、同所的では同じ地域にいる", "不同：異域的種羣在不同地方，同域的種羣生活在同一地區"),
          L("Difference: allopatric isolation is by a geographic barrier; sympatric isolation is by behavioural or temporal differences (or polyploidy), without a barrier", "相違点：異所的では地理的障壁で隔離され、同所的では障壁なしに行動的・時間的な違い（または倍数性）で隔離される", "不同：異域以地理屏障隔離；同域以行為或時間差異（或多倍體）隔離，沒有屏障")
        ],
        modelAnswer: L("Both are speciation in which a population splits into two gene pools that stop exchanging alleles, and then mutation and natural selection make them differ until they are separate species. In allopatric speciation the populations are in different places, separated by a geographical barrier. In sympatric speciation they live in the same area and are isolated by behavioural or temporal differences (or polyploidy), not by a barrier.", "どちらも、集団が対立遺伝子をやり取りしない二つの遺伝子プールに分かれ、突然変異と自然選択で別々の種になるまで違っていく種分化である。異所的種分化では集団は別々の場所にあり、地理的な障壁で隔てられる。同所的種分化では同じ地域に住み、障壁ではなく行動的・時間的な違い（または倍数性）で隔離される。", "兩者都是種羣分成停止交換等位基因的兩個基因庫，然後突變和自然選擇令牠們變得不同，直至成為不同物種。在異域物種形成中，種羣在不同地方，被地理屏障分隔。在同域物種形成中，牠們生活在同一地區，由行為或時間差異（或多倍體）而非屏障所隔離。")
      },
      {
        id: "a4-1-q14", type: "mcq", ahl: true, difficulty: 2, ref: "A4.1.9", paper: "1A",
        stem: L("Which situation is most likely to lead to adaptive radiation?", "適応放散が最も起こりやすい状況はどれか。", "哪種情況最有可能導致適應輻射？"),
        options: [L("A species lives in a stable, fully occupied habitat", "一つの種が、安定して完全に占有された生息地に住んでいる", "一個物種生活在穩定、已被完全佔據的生境"), L("A few individuals of one species colonise a new island with many vacant niches", "一つの種の少数の個体が、空いたニッチの多い新しい島に移り住む", "一個物種的少數個體遷入有許多空缺生態位的新島嶼"), L("A species is hunted until only a few individuals remain", "一つの種が狩られて少数の個体しか残らない", "一個物種被獵捕至只剩少數個體"), L("Two species compete for the same food in the same place", "二つの種が同じ場所で同じ食物を巡って競争する", "兩個物種在同一地方競爭相同食物")],
        answer: 1,
        explanation: L("Adaptive radiation needs vacant niches so that descendants can specialise in different ways of life without competing. In A there are no vacant niches; C reduces the population; D describes competition, which adaptive radiation reduces.", "適応放散には空いたニッチが必要で、子孫が競争せずに異なる生活様式に特化できます。Aには空いたニッチがなく、Cは個体群を減らし、Dは競争の状況で、適応放散はそれを減らします。", "適應輻射需要空缺生態位，後代才能在不競爭的情況下專門適應不同生活方式。A 沒有空缺生態位；C 令種羣減少；D 描述的是競爭，而適應輻射會減少競爭。")
      },
      {
        id: "a4-1-q15", type: "mcq", ahl: true, difficulty: 3, ref: "A4.1.10", paper: "1A",
        stem: L("Two closely related bird species sometimes mate, but their hybrid young are sterile. How does this help keep the two species separate?", "近縁な二種の鳥がときどき交配するが、雑種の子は不妊である。これは二種を分けておくのにどう役立つか。", "兩種近緣鳥類有時會交配，但牠們的雜種後代不育。這如何有助保持兩個物種分隔？"),
        options: [L("The hybrids die before they can be counted", "雑種は数えられる前に死ぬ", "雜種在被計數前便死亡"), L("No alleles can pass through the hybrids from one species' gene pool to the other", "雑種を通して、一方の種の遺伝子プールから他方へ対立遺伝子が渡ることができない", "等位基因不能透過雜種由一個物種的基因庫傳到另一個物種的基因庫"), L("The hybrids are stronger than either parent species", "雑種はどちらの親の種より強い", "雜種比任何一個親本物種都強壯"), L("The parent species never meet again", "親の種は二度と出会わない", "親本物種不會再相遇")],
        answer: 1,
        explanation: L("Because the hybrids cannot reproduce, alleles are not mixed between the two species' gene pools. The wasted mating also costs the parents. A is not stated, C is not the reason (a mule is strong yet sterile) and D is false because they do mate sometimes.", "雑種が繁殖できないので、二種の遺伝子プールの間で対立遺伝子が混ざりません。無駄な交配は親にとっても損失です。Aは述べられておらず、Cは理由ではなく（ラバは強いが不妊）、Dはときどき交配するので誤りです。", "雜種不能繁殖，所以兩個物種的基因庫之間不會混合等位基因。徒勞的交配對親本也是損失。A 並未提及；C 不是原因（騾強壯但不育）；D 錯，因為牠們有時確實交配。")
      },
      {
        id: "a4-1-q16", type: "short", ahl: true, difficulty: 3, ref: "A4.1.11", paper: "2", commandTerm: "Explain", marks: 4,
        stem: L("Explain how a new plant species can arise abruptly by hybridization and polyploidy.", "雑種形成と倍数性によって、新しい植物の種が急速に生じる仕組みを説明せよ (Explain)。", "解釋 (Explain) 新的植物物種如何透過雜交和多倍體突然形成。"),
        markscheme: [
          L("Two different species hybridize / interbreed, giving a hybrid with one set of chromosomes from each parent", "二つの異なる種が交雑し、両親から一組ずつ染色体をもつ雑種ができる", "兩個不同物種雜交，產生從每個親本各得一套染色體的雜種"),
          L("The hybrid is sterile because the chromosomes from the two species cannot pair in meiosis", "二つの種の染色体が減数分裂で対になれないため、雑種は不妊である", "雜種不育，因為兩個物種的染色體在減數分裂時不能配對"),
          L("The chromosome number doubles (polyploidy), so each chromosome has a matching partner", "染色体数が倍加し（倍数性）、各染色体に対応する相手ができる", "染色體數目加倍（多倍體），所以每條染色體都有配對夥伴"),
          L("Meiosis can now occur, so the polyploid is fertile, and is reproductively isolated from the parent species (offspring of crosses would be sterile)", "減数分裂が起こせるので倍数体は生殖能力をもち、親の種から生殖的に隔離される（交配の子は不妊になる）", "減數分裂現在可以進行，所以多倍體可育，並與親本物種產生生殖隔離（雜交後代不育）")
        ],
        modelAnswer: L("Two species hybridize, giving a hybrid with one set of chromosomes from each parent. It is sterile because these chromosomes cannot pair in meiosis. If the chromosome number then doubles, each chromosome has a partner, meiosis works and the plant is fertile. It is reproductively isolated from both parent species, because crosses with them give sterile offspring, so it is a new species formed in a single generation.", "二つの種が交雑し、両親から一組ずつ染色体をもつ雑種ができる。これらの染色体は減数分裂で対になれないので不妊である。染色体数が倍加すると各染色体に相手ができ、減数分裂が働いて生殖能力をもつ。親の種との交配では不妊の子ができるので、両方の親の種から生殖的に隔離され、一世代で新しい種ができたことになる。", "兩個物種雜交，產生從每個親本各得一套染色體的雜種。由於這些染色體在減數分裂時不能配對，雜種不育。如果染色體數目其後加倍，每條染色體都有夥伴，減數分裂得以進行，植物便可育。它與兩個親本物種都產生生殖隔離，因為與親本雜交的後代不育，所以是一代之內形成的新物種。")
      },
      {
        id: "a4-1-q17", type: "mcq", ahl: true, difficulty: 3, ref: "A4.1.11", paper: "1A",
        stem: L("A fertile tetraploid plant (4n) arises from a diploid species (2n). Why is the tetraploid reproductively isolated from the diploid parent species?", "二倍体の種 (2n) から、生殖能力のある四倍体 (4n) の植物が生じた。四倍体が二倍体の親の種から生殖的に隔離されるのはなぜか。", "一種可育的四倍體植物 (4n) 由二倍體物種 (2n) 產生。為何四倍體與二倍體親本物種有生殖隔離？"),
        options: [L("Their offspring have three sets of chromosomes (3n), which cannot pair evenly in meiosis, so are sterile", "子は三組の染色体 (3n) をもち、減数分裂で均等に対になれないので不妊になる", "後代有三套染色體 (3n)，在減數分裂時不能均等配對，所以不育"), L("Tetraploid plants have no flowers", "四倍体の植物には花がない", "四倍體植物沒有花"), L("Tetraploid plants live in a different continent", "四倍体の植物は別の大陸に住む", "四倍體植物生活在另一個大洲"), L("Tetraploid pollen cannot be produced by mitosis", "四倍体の花粉は体細胞分裂では作れない", "四倍體的花粉不能由有絲分裂產生")],
        answer: 0,
        explanation: L("A tetraploid gamete has 2n chromosomes and a diploid gamete has n, so the offspring are triploid. An odd number of sets cannot pair evenly in meiosis, so they are sterile. B, C and D are false; the new species is isolated by chromosome number, not by place or flowers.", "四倍体の配偶子は 2n、二倍体の配偶子は n なので、子は三倍体です。染色体のセット数が奇数だと減数分裂で均等に対になれず不妊です。B、C、D は誤りです。新しい種は場所や花ではなく染色体数によって隔離されています。", "四倍體的配子有 2n 條染色體，二倍體的配子有 n 條，所以後代是三倍體。奇數套染色體在減數分裂時不能均等配對，所以不育。B、C、D 都是錯的；新物種是靠染色體數目而不是地點或花來隔離的。")
      },
      {
        id: "a4-1-q18", type: "mcq", ahl: false, difficulty: 2, ref: "A4.1.1", paper: "1A",
        stem: L("Evolution by natural selection is called a theory even though it has a huge amount of supporting evidence. Which statement reflects the nature of science?", "自然選択による進化は、膨大な裏付けの証拠があるにもかかわらず「理論」と呼ばれる。科学の本質を反映しているのはどれか。", "儘管自然選擇進化論有大量證據支持，它仍被稱為理論。哪項陳述反映了科學的本質？"),
        options: [L("It is only a guess that scientists have not yet tested", "科学者がまだ検証していないただの推測である", "它只是科學家尚未檢驗的猜測"), L("It explains many observations and is unlikely to be falsified, but a theory cannot be formally proved true", "多くの観察を説明し反証される可能性は低いが、理論が真だと正式に証明することはできない", "它解釋許多觀察結果，不太可能被推翻，但理論不能被正式證明為真"), L("It has been proved to be absolutely true", "絶対的に真だと証明されている", "它已被證明絕對為真"), L("A theory becomes a law when enough evidence is collected", "十分な証拠が集まると、理論は法則になる", "當收集到足夠證據，理論就變成定律")],
        answer: 1,
        explanation: L("Science gives pragmatic truth: the best-supported explanation. A confuses the everyday meaning of theory with the scientific one, C overstates what science can do, and D is a common myth.", "科学が与えるのは実用的な真理、つまり最も裏付けられた説明です。Aは日常語の「理論」と科学の理論の混同、Cは科学にできることの言い過ぎ、Dはよくある俗説です。", "科學提供的是實用的真理：證據最充分的解釋。A 混淆了「理論」的日常意義與科學意義，C 誇大了科學的能力，D 是常見的迷思。")
      }
    ]
  });
})();
