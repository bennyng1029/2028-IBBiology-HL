/* Widgets: speciation (all scenarios), speciation-allopatric (SL), speciation-radiation, speciation-poly — IB A4.1.7–A4.1.11.
   Step-through scenes: allopatric speciation (geographical isolation + differential selection), sympatric speciation
   by behavioural or temporal isolation (AHL), adaptive radiation (AHL), abrupt speciation by hybridization and
   polyploidy (AHL). Qualitative schematics, not data. Dots = individuals; colour = which alleles/traits they carry. */
(function () {
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var CSS_ID = "speciation-css";
  var CSS = [
    ".w-speciation{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
    ".w-speciation .sp-row{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}",
    ".w-speciation .wl-tabs button[aria-selected=true]{background:var(--accent-soft,#e0e7fb);color:var(--ink,#0f2029);border-bottom-color:var(--accent,#2547c7)}",
    ".w-speciation .wl-tabs .sp-ahl{margin-left:.35rem}",
    ".w-speciation .wl-stage{display:grid;gap:.4rem;align-content:start}",
    ".w-speciation details{font-size:.85rem}",
    ".w-speciation summary{cursor:pointer;min-height:2rem;font-weight:700}",
    ".w-speciation .sp-btn{font:inherit;font-size:.86rem;font-weight:700;min-height:2.5rem;padding:.35rem .8rem;border-radius:var(--radius,6px);border:1.5px solid var(--line-strong,var(--line,#c3d0d7));background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".w-speciation .sp-btn[aria-pressed=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-speciation .sp-btn:disabled{opacity:.4;cursor:default}",
    ".w-speciation .sp-btn:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-speciation .sp-ahl{display:inline-block;margin-left:.35rem;padding:0 .35rem;border-radius:3px;background:var(--ahl,#ffcf3a);color:var(--ahl-ink,#2a2000);font-size:.68rem;font-weight:800;letter-spacing:.05em}",
        ".w-speciation .wl-stage svg{display:block;width:100%;height:auto;max-height:var(--stage-max,440px);margin:0 auto}",
    ".w-speciation svg text{font-family:var(--font-body,system-ui,sans-serif);fill:var(--ink,#0f2029);font-size:12.5px}",
    ".w-speciation .sp-t-b{font-weight:800}",
    ".w-speciation .sp-t-m{fill:var(--muted,#4d626d)}",
    ".w-speciation .sp-area{fill:var(--surface-2,#e3eaee);stroke:var(--line-strong,var(--line,#c3d0d7));stroke-width:1.2}",
    ".w-speciation .sp-area.a{fill:var(--theme-a-soft,#d9efec)}",
    ".w-speciation .sp-area.b{fill:var(--theme-b-soft,#f8dfe7)}",
    ".w-speciation .sp-area.v{fill:none;stroke-dasharray:5 4}",
    ".w-speciation .sp-river{fill:none;stroke:var(--accent,#2547c7);stroke-width:13;opacity:.35;stroke-linecap:round}",
    ".w-speciation .sp-d{stroke:var(--ink,#0f2029);stroke-width:.8;stroke-opacity:.55}",
    ".w-speciation .c0{fill:var(--theme-a,#07756f)}.w-speciation .c1{fill:var(--theme-b,#b82a56)}.w-speciation .c2{fill:var(--accent,#2547c7)}.w-speciation .c3{fill:var(--warn,#b7791f)}",
    ".w-speciation .sp-ch.A{fill:var(--theme-a,#07756f)}.w-speciation .sp-ch.B{fill:var(--theme-b,#b82a56)}",
    ".w-speciation .sp-ln{stroke:var(--ink-2,var(--ink,#0f2029));stroke-width:2;fill:none}",
    ".w-speciation .sp-no{stroke:var(--bad,#b3261e);stroke-width:3.5;fill:none;stroke-linecap:round}",
    ".w-speciation .sp-ok{stroke:var(--good,#1f7a3d);stroke-width:2.5;fill:none}",
    ".w-speciation .sp-cap{margin:0;padding:.6rem .8rem;background:var(--surface-2,#e3eaee);border-radius:var(--radius,6px);font-size:.9rem;line-height:1.5}",
    ".w-speciation .sp-cap strong{font-weight:800}",
    ".w-speciation .sp-chips{display:flex;flex-wrap:wrap;gap:.3rem;margin:0}",
    ".w-speciation .sp-chip{font-size:.78rem;font-weight:700;padding:.1rem .5rem;border:1px solid var(--line-strong,var(--line,#c3d0d7));border-radius:99px;background:var(--surface,#fff)}",
    ".w-speciation .sp-step{font-size:.85rem;font-weight:700;color:var(--muted,#4d626d);margin:0 .3rem}",
    ".w-speciation .sp-dots{display:flex;gap:.35rem;margin-left:auto}",
    ".w-speciation .sp-dots i{width:.7rem;height:.7rem;border-radius:50%;border:1.5px solid var(--accent,#2547c7);background:transparent}",
    ".w-speciation .sp-dots i.on{background:var(--accent,#2547c7)}",
    ".w-speciation .sp-note{margin:0;font-size:.76rem;color:var(--muted,#4d626d)}",
    "@media (prefers-reduced-motion:no-preference){.w-speciation .sp-stage svg{animation:spfade .35s ease-out}@keyframes spfade{from{opacity:.4}to{opacity:1}}}"
  ].join("\n");

  /* ---------------- scene helpers ---------------- */
  function A(x, y, w, h, tint, label) { return { k: "area", x: x, y: y, w: w, h: h, tint: tint || "n", label: label }; }
  function G(cx, cy, n, cls, r, label) { return { k: "grp", cx: cx, cy: cy, n: n, cls: cls, r: r || 40, label: label }; }
  function CH(cx, cy, arr, label) { return { k: "chr", cx: cx, cy: cy, arr: arr, label: label }; }
  function FL(x1, x2, y, state) { return { k: "flow", x1: x1, x2: x2, y: y, state: state }; }
  function AR(x1, y1, x2, y2) { return { k: "arr", x1: x1, y1: y1, x2: x2, y2: y2 }; }
  function TX(x, y, text, o) { return { k: "txt", x: x, y: y, text: text, o: o || {} }; }
  function RV(x) { return { k: "river", x: x }; }
  function LG(items) { return { k: "leg", items: items }; }

  var SCEN = {
    allo: {
      ahl: false,
      title: L("Allopatric speciation", "異所的種分化 (allopatric)", "異域物種形成 (allopatric)"),
      steps: [
        { scene: [A(10, 22, 340, 176, "n"), G(180, 112, 16, [0], 52), TX(180, 16, L("One population, one area", "一つの個体群、一つの地域", "一個種羣、一個地區"), { b: 1, anchor: "middle" })],
          cap: L("<strong>1. One species.</strong> Individuals of one species live in one area and interbreed freely. Alleles move through the whole population: there is a single <strong>gene pool</strong>.", "<strong>1. 一つの種。</strong>一つの種の個体が一つの地域に住み、自由に交配します。対立遺伝子は個体群全体を行き来し、<strong>遺伝子プール (gene pool)</strong> は一つです。", "<strong>1. 一個物種。</strong>一個物種的個體生活在同一地區，自由交配。等位基因在整個種羣中流動：只有一個<strong>基因庫 (gene pool)</strong>。"),
          chips: [L("gene pool", "遺伝子プール", "基因庫")] },
        { scene: [A(10, 22, 160, 176, "n"), A(190, 22, 160, 176, "n"), RV(180), G(90, 112, 10, [0], 40), G(270, 112, 10, [0], 40), FL(120, 240, 46, "blocked"), TX(180, 16, L("A barrier splits the population", "障壁が個体群を分ける", "屏障把種羣分開"), { b: 1, anchor: "middle" }), TX(180, 214, L("river", "川", "河流"), { anchor: "middle", m: 1 })],
          cap: L("<strong>2. Geographical isolation.</strong> A barrier, such as a river, splits the population in two. Individuals cannot cross it, so they stop interbreeding and there is <strong>no gene flow</strong> between the populations. This is <strong>reproductive isolation</strong>. (Example: the Congo River separates bonobos from common chimpanzees.)", "<strong>2. 地理的隔離。</strong>川などの障壁が個体群を二つに分けます。個体は渡れないので交配しなくなり、個体群の間に<strong>遺伝子の流れ (gene flow) はありません</strong>。これが<strong>生殖的隔離 (reproductive isolation)</strong> です。（例：コンゴ川はボノボとチンパンジーを隔てています。）", "<strong>2. 地理隔離。</strong>河流等屏障把種羣分成兩個。個體不能越過，所以停止交配，兩個種羣之間<strong>沒有基因流動 (gene flow)</strong>。這就是<strong>生殖隔離 (reproductive isolation)</strong>。（例子：剛果河把倭黑猩猩與黑猩猩分隔。）"),
          chips: [L("geographical isolation", "地理的隔離", "地理隔離"), L("reproductive isolation", "生殖的隔離", "生殖隔離"), L("no gene flow", "遺伝子流動なし", "沒有基因流動")] },
        { scene: [A(10, 22, 160, 176, "a"), A(190, 22, 160, 176, "b"), RV(180), G(90, 112, 10, [0, 0, 0, 2, 0, 2, 0, 2, 2, 0], 40), G(270, 112, 10, [0, 1, 0, 1, 1, 0, 1, 1, 0, 1], 40), FL(120, 240, 46, "blocked"), TX(90, 16, L("Environment A", "環境A", "環境 A"), { b: 1, anchor: "middle" }), TX(270, 16, L("Environment B", "環境B", "環境 B"), { b: 1, anchor: "middle" })],
          cap: L("<strong>3. Differential selection.</strong> The two sides have different conditions (for example food, climate or competitors). Natural selection favours <em>different</em> alleles on each side, and different mutations arise in each population. Their gene pools begin to diverge.", "<strong>3. 分化的選択 (differential selection)。</strong>両側は条件（食物、気候、競争相手など）が異なります。自然選択は両側で<em>異なる</em>対立遺伝子を有利にし、それぞれの個体群で別々の突然変異が生じます。遺伝子プールが分岐し始めます。", "<strong>3. 差異選擇 (differential selection)。</strong>兩邊的條件不同（例如食物、氣候或競爭者）。自然選擇在兩邊有利於<em>不同</em>的等位基因，而且各個種羣各自產生不同的突變。牠們的基因庫開始分歧。"),
          chips: [L("differential selection", "分化的選択", "差異選擇"), L("divergence", "分岐", "分歧")] },
        { scene: [A(10, 22, 340, 176, "n"), G(100, 112, 10, [2], 40), G(260, 112, 10, [1], 40), FL(130, 230, 112, "blocked"), TX(100, 16, L("Species 1", "種1", "物種 1"), { b: 1, anchor: "middle" }), TX(260, 16, L("Species 2", "種2", "物種 2"), { b: 1, anchor: "middle" }), TX(180, 214, L("barrier gone, but they can no longer interbreed", "障壁がなくなっても、もう交配できない", "屏障消失了，但牠們不能再交配"), { anchor: "middle", m: 1 })],
          cap: L("<strong>4. Two species.</strong> After many generations the populations are so different that, even if the barrier disappears and they meet, they cannot interbreed to produce fertile offspring. One species has split into <strong>two species</strong>. This usually happens gradually, over a very long time.", "<strong>4. 二つの種。</strong>何世代もたつと、個体群は非常に違ってしまい、たとえ障壁がなくなって出会っても、交配して生殖能力のある子を作れません。一つの種が<strong>二つの種</strong>に分かれました。これはふつう、非常に長い時間をかけて徐々に起こります。", "<strong>4. 兩個物種。</strong>經過許多世代，種羣變得非常不同，即使屏障消失、牠們再相遇，也不能交配產生可育後代。一個物種分裂成<strong>兩個物種</strong>。這通常是在很長的時間內逐漸發生。"),
          chips: [L("speciation", "種分化", "物種形成")] }
      ]
    },
    beh: {
      ahl: true,
      title: L("Sympatric: behavioural", "同所的：行動的隔離", "同域：行為隔離"),
      steps: [
        { scene: [A(10, 22, 340, 176, "n"), G(180, 112, 16, [0], 52), TX(180, 16, L("Same area, no barrier", "同じ地域、障壁なし", "同一地區，沒有屏障"), { b: 1, anchor: "middle" })],
          cap: L("<strong>1. One population.</strong> All individuals live in the same area and all use the same courtship song, so any male and female can mate.", "<strong>1. 一つの個体群。</strong>すべての個体が同じ地域に住み、同じ求愛の鳴き声を使うので、どの雄と雌も交配できます。", "<strong>1. 一個種羣。</strong>所有個體生活在同一地區，使用相同的求偶叫聲，所以任何雄性與雌性都可交配。"),
          chips: [L("sympatric = same place", "同所的＝同じ場所", "同域 = 相同地方")] },
        { scene: [A(10, 22, 340, 176, "n"), G(180, 112, 16, [0, 1], 52), LG([{ c: 0, t: L("song type 1", "鳴き声タイプ1", "叫聲類型 1") }, { c: 1, t: L("song type 2", "鳴き声タイプ2", "叫聲類型 2") }])],
          cap: L("<strong>2. Variation in courtship behaviour.</strong> A heritable difference appears: some individuals use a different courtship song. The two types still live together in the same area.", "<strong>2. 求愛行動の変異。</strong>遺伝する違いが現れ、一部の個体が別の求愛の鳴き声を使います。二つのタイプは同じ地域でまだ一緒に暮らしています。", "<strong>2. 求偶行為出現變異。</strong>出現可遺傳的差異：部分個體使用不同的求偶叫聲。兩種類型仍然生活在同一地區。"),
          chips: [L("heritable variation", "遺伝する変異", "可遺傳的變異")] },
        { scene: [A(10, 22, 340, 176, "n"), G(110, 112, 8, [0], 36), G(250, 112, 8, [1], 36), FL(140, 220, 112, "blocked"), LG([{ c: 0, t: L("song type 1", "鳴き声タイプ1", "叫聲類型 1") }, { c: 1, t: L("song type 2", "鳴き声タイプ2", "叫聲類型 2") }]), TX(180, 214, L("no barrier: they just do not choose each other", "障壁はない。互いを配偶相手に選ばないだけ", "沒有屏障：只是互不選擇對方"), { anchor: "middle", m: 1 })],
          cap: L("<strong>3. Behavioural isolation.</strong> Individuals respond only to their own song type, so they mate only within their type. There is no barrier, but there is <strong>no gene flow</strong> between the two groups: they are reproductively isolated by <strong>behaviour</strong>.", "<strong>3. 行動的隔離 (behavioural isolation)。</strong>個体は自分と同じ鳴き声のタイプにだけ反応するので、同じタイプの中でだけ交配します。障壁はありませんが、二つのグループの間に<strong>遺伝子の流れはありません</strong>。<strong>行動</strong>によって生殖的に隔離されているのです。", "<strong>3. 行為隔離 (behavioural isolation)。</strong>個體只對本類型的叫聲有反應，所以只在同一類型之內交配。沒有屏障，但兩個羣體之間<strong>沒有基因流動</strong>：牠們因<strong>行為</strong>而產生生殖隔離。"),
          chips: [L("behavioural isolation", "行動的隔離", "行為隔離"), L("no gene flow", "遺伝子流動なし", "沒有基因流動")] },
        { scene: [A(10, 22, 340, 176, "n"), G(110, 112, 8, [2], 36), G(250, 112, 8, [3], 36), FL(140, 220, 112, "blocked"), LG([{ c: 2, t: L("species 1", "種1", "物種 1"), }, { c: 3, t: L("species 2", "種2", "物種 2") }])],
          cap: L("<strong>4. Two species in the same area.</strong> With separate gene pools, mutation and natural selection make the groups more and more different. They can no longer produce fertile offspring together. Sympatric speciation has produced <strong>two species</strong> without any geographical barrier.", "<strong>4. 同じ地域にいる二つの種。</strong>遺伝子プールが別々なので、突然変異と自然選択によって二つのグループはますます違っていきます。もう互いに生殖能力のある子を作れません。同所的種分化によって、地理的な障壁なしに<strong>二つの種</strong>が生じました。", "<strong>4. 同一地區的兩個物種。</strong>由於基因庫各自分開，突變和自然選擇令兩個羣體越來越不同。牠們不能再一起產生可育後代。同域物種形成在沒有任何地理屏障的情況下產生了<strong>兩個物種</strong>。"),
          chips: [L("sympatric speciation", "同所的種分化", "同域物種形成")] }
      ]
    },
    temp: {
      ahl: true,
      title: L("Sympatric: temporal", "同所的：時間的隔離", "同域：時間隔離"),
      steps: [
        { scene: [A(10, 22, 340, 176, "n"), G(180, 112, 16, [0], 52), TX(180, 16, L("Same area, no barrier", "同じ地域、障壁なし", "同一地區，沒有屏障"), { b: 1, anchor: "middle" })],
          cap: L("<strong>1. One population of plants.</strong> All individuals in one area flower at about the same time, so pollen can reach any plant.", "<strong>1. 植物の一つの個体群。</strong>一つの地域のすべての個体がほぼ同じ時期に開花するので、花粉はどの植物にも届きます。", "<strong>1. 一個植物種羣。</strong>同一地區的所有個體差不多在同一時間開花，所以花粉可到達任何一株植物。"),
          chips: [L("sympatric = same place", "同所的＝同じ場所", "同域 = 相同地方")] },
        { scene: [A(10, 22, 340, 176, "n"), G(180, 112, 16, [0, 1], 52), LG([{ c: 0, t: L("flowers in spring", "春に開花", "春季開花") }, { c: 1, t: L("flowers in autumn", "秋に開花", "秋季開花") }])],
          cap: L("<strong>2. Variation in timing.</strong> A heritable difference appears in flowering time: some plants flower in spring and others in autumn. They still grow side by side.", "<strong>2. 時期の変異。</strong>開花時期に遺伝する違いが現れます。春に咲く植物と秋に咲く植物がいますが、隣り合って生えています。", "<strong>2. 時間出現變異。</strong>開花時間出現可遺傳的差異：有些植物在春季開花，有些在秋季開花。它們仍然並排生長。"),
          chips: [L("heritable variation", "遺伝する変異", "可遺傳的變異")] },
        { scene: [A(10, 22, 340, 176, "n"), G(110, 112, 8, [0], 36), G(250, 112, 8, [1], 36), FL(140, 220, 112, "blocked"), LG([{ c: 0, t: L("flowers in spring", "春に開花", "春季開花") }, { c: 1, t: L("flowers in autumn", "秋に開花", "秋季開花") }])],
          cap: L("<strong>3. Temporal isolation.</strong> Spring plants and autumn plants are never in flower together, so pollen is never exchanged. There is <strong>no gene flow</strong>, although they live in the same place: they are reproductively isolated by <strong>timing</strong>.", "<strong>3. 時間的隔離 (temporal isolation)。</strong>春に咲く植物と秋に咲く植物は同時に開花することがないので、花粉が交換されません。同じ場所に住んでいても<strong>遺伝子の流れはなく</strong>、<strong>時期</strong>によって生殖的に隔離されています。", "<strong>3. 時間隔離 (temporal isolation)。</strong>春季開花和秋季開花的植物不會同時開花，所以花粉從不交換。儘管生活在同一地方，兩者之間<strong>沒有基因流動</strong>：它們因<strong>時間</strong>而產生生殖隔離。"),
          chips: [L("temporal isolation", "時間的隔離", "時間隔離"), L("no gene flow", "遺伝子流動なし", "沒有基因流動")] },
        { scene: [A(10, 22, 340, 176, "n"), G(110, 112, 8, [2], 36), G(250, 112, 8, [3], 36), FL(140, 220, 112, "blocked"), LG([{ c: 2, t: L("species 1", "種1", "物種 1") }, { c: 3, t: L("species 2", "種2", "物種 2") }])],
          cap: L("<strong>4. Two species in the same area.</strong> Separate gene pools diverge by mutation and natural selection until the two groups can no longer produce fertile offspring together: <strong>two species</strong>, with no geographical barrier.", "<strong>4. 同じ地域にいる二つの種。</strong>別々の遺伝子プールが突然変異と自然選択で分岐し、ついに二つのグループが互いに生殖能力のある子を作れなくなります。地理的な障壁なしに<strong>二つの種</strong>ができました。", "<strong>4. 同一地區的兩個物種。</strong>各自分開的基因庫因突變和自然選擇而分歧，直至兩個羣體不能再一起產生可育後代：沒有地理屏障而形成<strong>兩個物種</strong>。"),
          chips: [L("sympatric speciation", "同所的種分化", "同域物種形成")] }
      ]
    },
    rad: {
      ahl: true,
      title: L("Adaptive radiation", "適応放散 (adaptive radiation)", "適應輻射 (adaptive radiation)"),
      steps: [
        { scene: [A(10, 10, 110, 64, "n", L("mainland", "大陸", "大陸")), A(10, 100, 105, 100, "v", L("niche 1", "ニッチ1", "生態位 1")), A(130, 100, 105, 100, "v", L("niche 2", "ニッチ2", "生態位 2")), A(245, 100, 105, 100, "v", L("niche 3", "ニッチ3", "生態位 3")), TX(180, 92, L("new island: vacant niches", "新しい島：空いたニッチ", "新島：空缺生態位"), { b: 1, anchor: "middle" }), G(65, 46, 5, [0], 22)],
          cap: L("<strong>1. Vacant niches.</strong> A newly formed island has several <strong>vacant niches</strong> (ways of life, for example different foods) that no species uses yet. The species on the nearby mainland is a possible colonist.", "<strong>1. 空いたニッチ (vacant niches)。</strong>新しくできた島には、まだどの種も使っていない<strong>空いたニッチ</strong>（生活様式、たとえば異なる食物）がいくつもあります。近くの大陸の種が移り住む可能性があります。", "<strong>1. 空缺生態位 (vacant niches)。</strong>新形成的島嶼有幾個還沒有任何物種使用的<strong>空缺生態位</strong>（生活方式，例如不同的食物）。附近大陸的物種可能前來定居。"),
          chips: [L("vacant niche", "空いたニッチ", "空缺生態位")] },
        { scene: [A(10, 10, 110, 64, "n", L("mainland", "大陸", "大陸")), A(10, 100, 105, 100, "v", L("niche 1", "ニッチ1", "生態位 1")), A(130, 100, 105, 100, "v", L("niche 2", "ニッチ2", "生態位 2")), A(245, 100, 105, 100, "v", L("niche 3", "ニッチ3", "生態位 3")), AR(100, 62, 150, 112), G(180, 150, 6, [0], 26)],
          cap: L("<strong>2. Colonization.</strong> A few individuals of one ancestral species reach the island. There are few competitors and plenty of resources, so the population grows quickly and spreads.", "<strong>2. 移住。</strong>一つの祖先種の少数の個体が島に着きます。競争相手は少なく資源は豊富なので、個体群は急速に増えて広がります。", "<strong>2. 定居。</strong>一個祖先物種的少數個體到達島上。競爭者少而資源充足，所以種羣迅速增長並擴散。"),
          chips: [L("ancestral species", "祖先種", "祖先物種")] },
        { scene: [A(10, 100, 105, 100, "n", L("niche 1", "ニッチ1", "生態位 1")), A(130, 100, 105, 100, "n", L("niche 2", "ニッチ2", "生態位 2")), A(245, 100, 105, 100, "n", L("niche 3", "ニッチ3", "生態位 3")), G(62, 150, 6, [0, 1, 0, 1, 1, 0], 28), G(182, 150, 6, [0, 2, 2, 0, 2, 0], 28), G(297, 150, 6, [0, 3, 0, 3, 3, 0], 28), TX(180, 92, L("the population spreads into every niche", "個体群がすべてのニッチに広がる", "種羣擴散到每個生態位"), { b: 1, anchor: "middle" })],
          cap: L("<strong>3. Adaptation to different niches.</strong> Individuals spread into the different niches. In each niche, natural selection favours different traits (for example different beaks for different foods). Populations in different niches interbreed less and become more different.", "<strong>3. 異なるニッチへの適応。</strong>個体がさまざまなニッチに広がります。各ニッチで自然選択は異なる形質（たとえば食物に応じた異なるくちばし）を有利にします。異なるニッチの個体群は交配が減り、ますます違っていきます。", "<strong>3. 適應不同的生態位。</strong>個體擴散到不同的生態位。在每個生態位中，自然選擇有利於不同的性狀（例如適應不同食物的不同喙）。不同生態位的種羣交配減少，變得越來越不同。"),
          chips: [L("differential selection", "分化的選択", "差異選擇")] },
        { scene: [A(10, 100, 105, 100, "n", L("niche 1", "ニッチ1", "生態位 1")), A(130, 100, 105, 100, "n", L("niche 2", "ニッチ2", "生態位 2")), A(245, 100, 105, 100, "n", L("niche 3", "ニッチ3", "生態位 3")), G(62, 150, 6, [1], 28), G(182, 150, 6, [2], 28), G(297, 150, 6, [3], 28), LG([{ c: 1, t: L("species 1", "種1", "物種 1") }, { c: 2, t: L("species 2", "種2", "物種 2") }, { c: 3, t: L("species 3", "種3", "物種 3") }])],
          cap: L("<strong>4. Many closely related species.</strong> One ancestral species has given rise to several new species, each adapted to a different niche. They can <strong>coexist without competing</strong>, so <strong>biodiversity increases</strong> in an ecosystem that had vacant niches.", "<strong>4. 近縁な多くの種。</strong>一つの祖先種から、それぞれ異なるニッチに適応した複数の新しい種が生じました。<strong>競争せずに共存</strong>でき、空いたニッチがあった生態系の<strong>生物多様性が高まります</strong>。", "<strong>4. 許多近緣物種。</strong>一個祖先物種產生了幾個新物種，每個都適應不同的生態位。牠們可以<strong>共存而不競爭</strong>，使原本有空缺生態位的生態系統<strong>生物多樣性增加</strong>。"),
          chips: [L("adaptive radiation", "適応放散", "適應輻射"), L("coexist without competing", "競争せずに共存", "共存而不競爭")] }
      ]
    },
    poly: {
      ahl: true,
      title: L("Hybridization and polyploidy (plants)", "雑種形成と倍数性（植物）", "雜交與多倍體（植物）"),
      steps: [
        { scene: [CH(90, 100, ["A", "A", "A", "A"], L("Species 1: 2n = 4", "種1: 2n = 4", "物種 1：2n = 4")), CH(270, 100, ["B", "B", "B", "B"], L("Species 2: 2n = 4", "種2: 2n = 4", "物種 2：2n = 4")), FL(130, 230, 100, "blocked"), TX(180, 190, L("Chromosome numbers are simplified, illustrative values.", "染色体数は単純化した例示用の値です。", "染色體數目已簡化，只是示例數值。"), { anchor: "middle", m: 1 })],
          cap: L("<strong>1. Two different species</strong> of plant, each with two sets of chromosomes (diploid). Normally they do not interbreed.", "<strong>1. 異なる二つの種</strong>の植物。それぞれ二組の染色体をもちます（二倍体）。ふつうは交配しません。", "<strong>1. 兩個不同的植物物種</strong>，各有兩套染色體（二倍體）。通常它們不會雜交。"),
          chips: [L("diploid", "二倍体", "二倍體")] },
        { scene: [CH(70, 40, ["A", "A", "A", "A"], L("Species 1", "種1", "物種 1")), CH(290, 40, ["B", "B", "B", "B"], L("Species 2", "種2", "物種 2")), AR(100, 74, 160, 118), AR(260, 74, 200, 118), CH(180, 140, ["A", "A", "B", "B"], L("Hybrid: 2n = 4, sterile", "雑種: 2n = 4、不妊", "雜種：2n = 4，不育")), TX(180, 206, L("A and B chromosomes cannot pair in meiosis", "AとBの染色体は減数分裂で対になれない", "A 與 B 染色體在減數分裂時不能配對"), { anchor: "middle", m: 1 })],
          cap: L("<strong>2. Hybridization.</strong> The two species cross. The <strong>hybrid</strong> has one set of chromosomes from each parent. The two sets are different, so the chromosomes cannot pair in meiosis and the hybrid is normally <strong>sterile</strong>.", "<strong>2. 雑種形成 (hybridization)。</strong>二つの種が交配します。<strong>雑種</strong>は両親から一組ずつ染色体を受け取ります。二組は異なるので、染色体は減数分裂で対になれず、雑種はふつう<strong>不妊</strong>です。", "<strong>2. 雜交 (hybridization)。</strong>兩個物種雜交。<strong>雜種</strong>從每個親本各得一套染色體。兩套染色體不同，所以在減數分裂時不能配對，雜種通常<strong>不育</strong>。"),
          chips: [L("hybrid", "雑種", "雜種"), L("sterile", "不妊", "不育")] },
        { scene: [CH(180, 100, ["A", "A", "A", "A", "B", "B", "B", "B"], L("Polyploid: 4n = 8", "倍数体: 4n = 8", "多倍體：4n = 8")), TX(180, 160, L("every chromosome now has a matching partner", "すべての染色体に対応する相手ができた", "每條染色體現在都有配對夥伴"), { anchor: "middle", m: 1 }), TX(180, 40, L("chromosome number doubles", "染色体数が倍加", "染色體數目加倍"), { anchor: "middle", b: 1 })],
          cap: L("<strong>3. Chromosome doubling (polyploidy).</strong> If the chromosome number doubles, for example through an error in cell division, each chromosome has an identical partner. Meiosis can now work, gametes can form, and the plant becomes <strong>fertile</strong>. It is a <strong>polyploid</strong>: it has more than two sets of chromosomes.", "<strong>3. 染色体の倍加（倍数性 polyploidy）。</strong>たとえば細胞分裂の誤りで染色体数が倍になると、各染色体に同じ相手ができます。減数分裂が働いて配偶子ができ、植物は<strong>生殖能力</strong>をもちます。これが<strong>倍数体 (polyploid)</strong>、つまり染色体のセットを三組以上もつものです。", "<strong>3. 染色體加倍（多倍體 polyploidy）。</strong>如果染色體數目加倍，例如因細胞分裂出錯，每條染色體都有相同的配對夥伴。減數分裂得以進行，可形成配子，植物便<strong>可育</strong>。這是<strong>多倍體 (polyploid)</strong>：有多於兩套染色體。"),
          chips: [L("polyploid", "倍数体", "多倍體"), L("fertile", "生殖能力あり", "可育")] },
        { scene: [CH(90, 40, ["A", "A", "A", "A", "B", "B", "B", "B"], L("New species: 4n = 8", "新しい種: 4n = 8", "新物種：4n = 8")), CH(290, 40, ["A", "A", "A", "A"], L("Species 1: 2n = 4", "種1: 2n = 4", "物種 1：2n = 4")), AR(110, 76, 160, 118), AR(280, 76, 210, 118), CH(185, 140, ["A", "A", "A", "A", "B", "B"], L("Offspring: 6 chromosomes, sterile", "子: 染色体6本、不妊", "後代：6 條染色體，不育")), TX(185, 206, L("three sets cannot pair evenly in meiosis", "三組は減数分裂で均等に対になれない", "三套染色體在減數分裂時不能均等配對"), { anchor: "middle", m: 1 })],
          cap: L("<strong>4. A new species in one generation.</strong> A cross between the polyploid and a parent species gives offspring with an uneven number of sets (here three), which cannot pair properly in meiosis and are <strong>sterile</strong>. So the polyploid is <strong>reproductively isolated at once</strong>: it is a new species, formed abruptly. (Example: many species of knotweed or smartweed, <em>Persicaria</em>.)", "<strong>4. 一世代で新しい種。</strong>倍数体と親の種を交配すると、染色体のセット数が奇数（ここでは三組）の子ができ、減数分裂で正しく対になれず<strong>不妊</strong>になります。そのため倍数体は<strong>すぐに生殖的に隔離され</strong>、急に新しい種が形成されます。（例：タデ類 (knotweed / smartweed)、<em>Persicaria</em> 属の多くの種。）", "<strong>4. 一代之內形成新物種。</strong>多倍體與親本物種雜交，所得後代的染色體套數是奇數（這裏是三套），在減數分裂時不能正常配對，因此<strong>不育</strong>。所以多倍體<strong>立即產生生殖隔離</strong>：它是突然形成的新物種。（例子：蓼屬 (knotweed / smartweed，<em>Persicaria</em>) 的許多物種。）"),
          chips: [L("abrupt speciation", "急速な種分化", "突發式物種形成"), L("reproductive isolation", "生殖的隔離", "生殖隔離")] }
      ]
    }
  };

  var T = {
    prev: L("Back", "戻る", "上一步"), next: L("Next step", "次の段階", "下一步"), reset: L("Start again", "最初から", "重新開始"),
    step: L("Step {i} of {n}", "段階 {i} / {n}", "第 {i} 步 / 共 {n} 步"),
    note: L("Schematic model, not real data. Dots are individuals; colours show which alleles or traits they carry.", "模式図であり、実際のデータではありません。点は個体、色は持っている対立遺伝子や形質を表します。", "示意模型，並非真實數據。圓點代表個體；顏色表示牠們所帶的等位基因或性狀。"),
    ahl: L("AHL", "AHL", "AHL")
  };

  /* ---------------- drawing ---------------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function dots(g) {
    var out = "", n = g.n, cls = g.cls;
    for (var i = 0; i < n; i++) {
      var ang = i * 2.39996, rad = g.r * Math.sqrt((i + 0.5) / n);
      out += '<circle class="sp-d c' + cls[i % cls.length] + '" cx="' + (g.cx + rad * Math.cos(ang)).toFixed(1) + '" cy="' + (g.cy + rad * Math.sin(ang)).toFixed(1) + '" r="5.2"/>';
    }
    return out;
  }
  function draw(scene, lang) {
    var tt = function (x) { return esc(x[lang] || x.en); };
    var h = "";
    scene.forEach(function (e) {
      if (e.k === "area") {
        h += '<rect class="sp-area ' + e.tint + '" x="' + e.x + '" y="' + e.y + '" width="' + e.w + '" height="' + e.h + '" rx="10"/>';
        if (e.label) h += '<text class="sp-t-m" x="' + (e.x + 7) + '" y="' + (e.y + 15) + '">' + tt(e.label) + "</text>";
      } else if (e.k === "river") {
        h += '<path class="sp-river" d="M' + e.x + ' 22 q-9 30 0 58 q9 30 0 58 q-9 30 0 60"/>';
      } else if (e.k === "grp") {
        h += dots(e);
        if (e.label) h += '<text x="' + e.cx + '" y="' + (e.cy + e.r + 16) + '" text-anchor="middle">' + tt(e.label) + "</text>";
      } else if (e.k === "chr") {
        var n = e.arr.length, w = 12, x0 = e.cx - (n * w) / 2;
        e.arr.forEach(function (c, i) { h += '<rect class="sp-ch ' + c + '" x="' + (x0 + i * w + 1) + '" y="' + (e.cy - 14) + '" width="9" height="28" rx="4"/>'; });
        h += '<text class="sp-t-b" x="' + e.cx + '" y="' + (e.cy + 32) + '" text-anchor="middle">' + tt(e.label) + "</text>";
      } else if (e.k === "flow") {
        var m = (e.x1 + e.x2) / 2;
        h += '<path class="sp-ln" d="M' + e.x1 + " " + e.y + "H" + e.x2 + "M" + (e.x1 + 8) + " " + (e.y - 6) + "L" + e.x1 + " " + e.y + "l8 6M" + (e.x2 - 8) + " " + (e.y - 6) + "L" + e.x2 + " " + e.y + 'l-8 6" stroke-dasharray="' + (e.state === "blocked" ? "5 4" : "0") + '"/>';
        if (e.state === "blocked") h += '<path class="sp-no" d="M' + (m - 9) + " " + (e.y - 9) + "l18 18M" + (m + 9) + " " + (e.y - 9) + "l-18 18" + '"/>';
      } else if (e.k === "arr") {
        var dx = e.x2 - e.x1, dy = e.y2 - e.y1, L2 = Math.sqrt(dx * dx + dy * dy), ux = dx / L2, uy = dy / L2;
        h += '<path class="sp-ln" d="M' + e.x1 + " " + e.y1 + "L" + e.x2 + " " + e.y2 + "M" + e.x2 + " " + e.y2 + "l" + (-ux * 9 + uy * 5) + " " + (-uy * 9 - ux * 5) + "M" + e.x2 + " " + e.y2 + "l" + (-ux * 9 - uy * 5) + " " + (-uy * 9 + ux * 5) + '"/>';
      } else if (e.k === "txt") {
        h += '<text class="' + (e.o.b ? "sp-t-b" : e.o.m ? "sp-t-m" : "") + '" x="' + e.x + '" y="' + e.y + '" text-anchor="' + (e.o.anchor || "start") + '">' + tt(e.text) + "</text>";
      } else if (e.k === "leg") {
        e.items.forEach(function (it, i) {
          var y = 230;
          var x = 14 + i * 168;
          h += '<circle class="sp-d c' + it.c + '" cx="' + (x + 4) + '" cy="' + (y - 4) + '" r="5.2"/><text x="' + (x + 14) + '" y="' + y + '">' + tt(it.t) + "</text>";
        });
      }
    });
    return '<svg viewBox="0 0 360 240" role="img" aria-label="speciation scene">' + h + "</svg>";
  }

  function mount(el, ctx, ids) {
    if (!document.getElementById(CSS_ID)) { var st = document.createElement("style"); st.id = CSS_ID; st.textContent = CSS; document.head.appendChild(st); }
    var lang = ctx.lang, t = ctx.t;
    var root = document.createElement("div"); root.className = "w-speciation"; el.appendChild(root);
    var cur = ids[0], step = 0;
    var ot = ctx.options && ctx.options.tab;
    if (typeof ot === "number" && ids[ot]) cur = ids[ot]; else if (typeof ot === "string" && ids.indexOf(ot) >= 0) cur = ot;
    function sub(s, d) { return s.replace(/\{(\w+)\}/g, function (m, k) { return d[k]; }); }
    function render() {
      var sc = SCEN[cur], n = sc.steps.length, s = sc.steps[step];
      var h = '<div class="wl">';
      if (ids.length > 1) {
        h += '<div class="wl-tabs" role="tablist">' + ids.map(function (id) {
          return '<button type="button" role="tab" data-s="' + id + '" aria-selected="' + (id === cur) + '">' + esc(t(SCEN[id].title)) + (SCEN[id].ahl ? '<span class="sp-ahl">AHL</span>' : "") + "</button>";
        }).join("") + "</div>";
      }
      h += '<div class="wl-stage">' + draw(s.scene, lang) + '</div>';
      h += '<div class="wl-panel">';
      h += '<div class="sp-row"><button type="button" class="sp-btn" data-a="prev"' + (step === 0 ? " disabled" : "") + ">&larr; " + esc(t(T.prev)) + '</button><button type="button" class="sp-btn" data-a="next"' + (step === n - 1 ? " disabled" : "") + ">" + esc(t(T.next)) + ' &rarr;</button><span class="sp-step">' + esc(sub(t(T.step), { i: step + 1, n: n })) + '</span><span class="sp-dots" aria-hidden="true">' + sc.steps.map(function (x, i) { return "<i" + (i === step ? ' class="on"' : "") + "></i>"; }).join("") + "</span></div>";
      h += '<div class="sp-cap" aria-live="polite">' + t(s.cap) + "</div>";
      h += '<div class="sp-chips">' + s.chips.map(function (c) { return '<span class="sp-chip">' + esc(t(c)) + "</span>"; }).join("") + "</div>";
      if (step === n - 1) h += '<div class="sp-row"><button type="button" class="sp-btn" data-a="reset">' + esc(t(T.reset)) + "</button></div>";
      h += '<p class="sp-note">' + esc(t(T.note)) + "</p></div></div>";
      root.innerHTML = h;
    }
    function onClick(e) {
      var b = e.target.closest("button"); if (!b) return;
      var a = b.getAttribute("data-a"), s = b.getAttribute("data-s");
      var focusSel = a ? '[data-a="' + a + '"]' : '[data-s="' + s + '"]';
      if (s) { cur = s; step = 0; }
      else if (a === "next") step = Math.min(SCEN[cur].steps.length - 1, step + 1);
      else if (a === "prev") step = Math.max(0, step - 1);
      else if (a === "reset") step = 0;
      render();
      var f = root.querySelector(focusSel); if (f && !f.disabled) f.focus(); else { var g = root.querySelector('[data-a="prev"]'); if (g && !g.disabled) g.focus(); }
    }
    root.addEventListener("click", onClick);
    render();
    return function () { root.removeEventListener("click", onClick); };
  }

  function reg(name, title, ids) {
    IB.registerWidget(name, { title: title, mount: function (el, ctx) { return mount(el, ctx, ids); } });
  }
  reg("speciation", L("Allopatric and sympatric speciation", "異所的種分化と同所的種分化", "異域與同域物種形成"), ["allo", "beh", "temp"]);
  reg("speciation-allopatric", L("Allopatric speciation step by step", "異所的種分化を順に見る", "逐步認識異域物種形成"), ["allo"]);
  reg("speciation-radiation", L("Adaptive radiation step by step", "適応放散を順に見る", "逐步認識適應輻射"), ["rad"]);
  reg("speciation-poly", L("Abrupt speciation by polyploidy", "倍数性による急速な種分化", "多倍體引致的突發式物種形成"), ["poly"]);
})();
