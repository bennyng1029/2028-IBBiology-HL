/* Widgets: cladogram (read a cladogram) and cladogram-build (build one) — IB A3.2.6, A3.2.7 (AHL).
   Read: tap nodes to see clades, flip branches, practise "most recent common ancestor" and "most closely related".
   Build: (1) add shared characters to grow a cladogram, (2) parsimony: pick the tree needing the fewest changes
   in a small, made-up DNA data set. Keep to the guide: root, node, terminal branch, clade, parsimony. */
(function () {
  var L = function (en, ja, zh, ko) { return { en: en, ja: ja, zh: zh, ko: ko || en }; };
  var CSS_ID = "cladogram-css";
  var CSS = [
    ".w-cladogram{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
    ".w-cladogram .cl-row{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}",
    ".w-cladogram .wl-tabs button[aria-selected=true]{background:var(--accent-soft,#e0e7fb);color:var(--ink,#0f2029);border-bottom-color:var(--accent,#2547c7)}",
    ".w-cladogram .wl-stage{display:grid;gap:.5rem;align-content:start}",
    ".w-cladogram .wl-stage>svg{max-height:var(--stage-max,440px);max-width:none}",
    ".w-cladogram .wl-stage .cl-q{margin:0}",
    ".w-cladogram .cl-datatbl,.w-cladogram .cl-candwrap{min-width:0}",
    ".w-cladogram .cl-btn{font:inherit;font-size:.86rem;font-weight:700;min-height:2.5rem;padding:.35rem .8rem;border-radius:var(--radius,6px);border:1.5px solid var(--line-strong,var(--line,#c3d0d7));background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".w-cladogram .cl-btn[aria-pressed=true],.w-cladogram .cl-btn.on{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-cladogram .cl-btn:disabled{opacity:.45;cursor:default}",
    ".w-cladogram .cl-btn:focus-visible,.w-cladogram g[tabindex]:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-cladogram g[tabindex]{outline:none;cursor:pointer}",
    ".w-cladogram g[tabindex]:focus-visible .cl-fo{stroke:var(--accent,#2547c7);stroke-width:3}",
        ".w-cladogram svg{display:block;width:100%;height:auto;max-width:520px;margin:0 auto}",
    ".w-cladogram svg text{font-family:var(--font-body,system-ui,sans-serif);fill:var(--ink,#0f2029)}",
    ".w-cladogram .cl-ln{stroke:var(--ink-2,var(--ink,#0f2029));stroke-width:2.4;fill:none;stroke-linecap:round}",
    ".w-cladogram .cl-ln.hl{stroke:var(--accent,#2547c7);stroke-width:4}",
    ".w-cladogram .cl-dim{opacity:.38}",
    ".w-cladogram .cl-node{fill:var(--surface,#fff);stroke:var(--accent,#2547c7);stroke-width:2}",
    ".w-cladogram .cl-node.sel{fill:var(--accent,#2547c7)}",
    ".w-cladogram .cl-nn{font-size:12px;font-weight:800;text-anchor:middle;pointer-events:none}",
    ".w-cladogram .cl-node.sel+.cl-nn{fill:var(--on-accent,#fff)}",
    ".w-cladogram .cl-tip{font-size:14px;font-weight:700}",
    ".w-cladogram .cl-tip.hl{fill:var(--accent,#2547c7)}",
    ".w-cladogram .cl-sub{font-size:12px;fill:var(--muted,#4d626d)}",
    ".w-cladogram .cl-term{font-size:12px;font-weight:800;fill:var(--theme-b,#b82a56)}",
    ".w-cladogram .cl-tl{stroke:var(--theme-b,#b82a56);stroke-width:1.4;stroke-dasharray:3 2}",
    ".w-cladogram .cl-chl{font-size:12px;font-weight:800;text-anchor:end;fill:var(--theme-a,#07756f)}",
    ".w-cladogram .cl-msg{margin:0;padding:.55rem .75rem;background:var(--surface-2,#e3eaee);border-radius:var(--radius,6px);font-size:.9rem;line-height:1.45;min-height:2.6rem}",
    ".w-cladogram .cl-msg.good{background:var(--good-soft,#dff3e5);border-left:4px solid var(--good,#1f7a3d)}",
    ".w-cladogram .cl-msg.bad{background:var(--bad-soft,#fbe3e3);border-left:4px solid var(--bad,#b3261e)}",
    ".w-cladogram .cl-q{font-weight:700;margin:0;font-size:.95rem;line-height:1.5}",
    ".w-cladogram .cl-score{font-size:.82rem;color:var(--muted,#4d626d);margin-left:auto;align-self:center}",
    ".w-cladogram table.cl-t{border-collapse:collapse;font-size:.8rem;margin:0;width:100%}",
    ".w-cladogram .cl-t th,.w-cladogram .cl-t td{border:1px solid var(--line,#c3d0d7);padding:.15rem .3rem;text-align:center}",
    ".w-cladogram .cl-t th:first-child,.w-cladogram .cl-t td:first-child{text-align:left}",
    ".w-cladogram .cl-t .best td{background:var(--good-soft,#dff3e5);font-weight:800}",
    ".w-cladogram .cl-t .vary{background:var(--warn-soft,#fff2cc);font-weight:700}",
    ".w-cladogram .cl-seq{font-family:var(--font-mono,monospace)}",
    ".w-cladogram .cl-cands{display:grid;grid-template-columns:repeat(3,1fr);gap:.4rem;margin:0}",
    ".w-cladogram .cl-cand{display:block;font:inherit;text-align:center;padding:.2rem;border:1.5px solid var(--line-strong,var(--line,#c3d0d7));border-radius:var(--radius,6px);background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer}",
    ".w-cladogram .cl-cand[aria-pressed=true]{border-color:var(--accent,#2547c7);box-shadow:0 0 0 2px var(--accent,#2547c7)}",
    ".w-cladogram .cl-cand:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-cladogram .cl-cand svg{max-width:150px;width:100%;max-height:none}",
    ".w-cladogram .cl-cand b{display:block;font-size:.82rem;margin-bottom:.1rem}",
    ".w-cladogram details{font-size:.85rem}",
    ".w-cladogram summary{cursor:pointer;min-height:2rem;font-weight:700}",
    ".w-cladogram .cl-note{margin:0;font-size:.76rem;color:var(--muted,#4d626d)}",
    ".w-cladogram .cl-chtbl td.cl-ch{text-align:left}",
    ".w-cladogram .cl-chtbl .cl-btn{min-height:2.5rem;padding:.2rem .6rem;width:100%;text-align:left}",
    "@media (prefers-reduced-motion:no-preference){.w-cladogram .cl-ln,.w-cladogram .cl-node{transition:stroke .15s,fill .15s}}"
  ].join("\n");

  /* ---------------- data ---------------- */
  var N = {
    shark: L("shark", "サメ", "鯊魚", "상어"), frog: L("frog", "カエル", "青蛙", "개구리"), lizard: L("lizard", "トカゲ", "蜥蜴", "도마뱀"),
    mouse: L("mouse", "マウス", "小鼠", "생쥐"), human: L("human", "ヒト", "人類", "사람"),
    moss: L("moss", "コケ", "苔蘚", "이끼"), fern: L("fern", "シダ", "蕨類", "고사리"), pine: L("pine", "マツ", "松樹", "소나무"),
    rose: L("rose", "バラ", "玫瑰", "장미"), maize: L("maize", "トウモロコシ", "粟米", "옥수수"),
    gibbon: L("gibbon", "テナガザル", "長臂猿", "긴팔원숭이"), orangutan: L("orangutan", "オランウータン", "紅毛猩猩", "오랑우탄"),
    gorilla: L("gorilla", "ゴリラ", "大猩猩", "고릴라"), chimp: L("chimpanzee", "チンパンジー", "黑猩猩", "침팬지"),
    lamprey: L("lamprey", "ヤツメウナギ", "七鰓鰻", "칠성장어"), trout: L("trout", "マス", "鱒魚", "송어"), cat: L("cat", "ネコ", "貓", "고양이")
  };
  var TREES = [
    { id: "vert", title: L("Vertebrates", "脊椎動物", "脊椎動物", "척추동물"), t: ["shark", ["frog", ["lizard", ["mouse", "human"]]]] },
    { id: "plant", title: L("Plants", "植物", "植物", "식물"), t: ["moss", ["fern", ["pine", ["rose", "maize"]]]] },
    { id: "ape", title: L("Apes", "類人猿", "猿類", "유인원"), t: ["gibbon", ["orangutan", ["gorilla", ["chimp", "human"]]]] }
  ];

  var T = {
    tExplore: L("Explore", "探索", "探索", "탐색"), tPractice: L("Practice", "練習", "練習", "연습"),
    tChars: L("Build from characters", "特徴から作る", "由特徵建構", "형질로 만들기"), tPars: L("Parsimony", "最節約法 (parsimony)", "簡約法 (parsimony)", "최대 절약 원리 (parsimony)"),
    terms: L("Show terms", "用語を表示", "顯示術語", "용어 표시"), flip: L("Flip branches at selected node", "選んだ節で枝を入れ替える", "在所選節點交換分支", "선택한 마디에서 가지 뒤집기"),
    reset: L("Reset", "リセット", "重設", "초기화"), next: L("Next question", "次の問題", "下一題", "다음 문제"), show: L("Show answer", "答えを見る", "顯示答案", "정답 보기"),
    root: L("root", "根 (root)", "根 (root)", "뿌리 (root)"), node: L("node", "節 (node)", "節點 (node)", "마디 (node)"),
    term: L("terminal branch", "末端の枝 (terminal branch)", "末端分支 (terminal branch)", "말단 가지 (terminal branch)"),
    hint: L("Tap a node (circle) to see its clade, or tap an organism name. Then try flipping the branches.", "節（丸）をタップするとそのクレードが分かります。生物名をタップしても構いません。そのあと枝を入れ替えてみましょう。", "點擊節點（圓圈）可查看其演化支，也可點擊生物名稱。然後試試交換分支。", "마디(원)를 누르면 그 분기군을 볼 수 있고, 생물 이름을 눌러도 된다. 그런 다음 가지를 뒤집어 보시오."),
    rootInfo: L("<strong>Root</strong> (node {n}): the common ancestor of all {k} organisms shown: {list}. The whole tree is one clade.", "<strong>根 (root)</strong>（節{n}）：示されたすべての{k}種の共通祖先です（{list}）。木全体が一つのクレードです。", "<strong>根 (root)</strong>（節點 {n}）：圖中所有 {k} 種生物的共同祖先（{list}）。整棵樹是一個演化支。", "<strong>뿌리(root)</strong> (마디 {n}): 제시된 {k}종 모두의 공통 조상이다: {list}. 나무 전체가 하나의 분기군이다."),
    nodeInfo: L("<strong>Node {n}</strong> is the <em>hypothetical common ancestor</em> of {list}. This node and everything from it is a <strong>clade</strong> of {k} organisms.", "<strong>節{n} (node)</strong> は、{list}の<em>仮想の共通祖先</em>です。この節とそこから出るものすべてが、{k}種からなる<strong>クレード (clade)</strong> です。", "<strong>節點 {n} (node)</strong> 是 {list} 的<em>假設共同祖先</em>。這個節點及由它而出的全部生物，是一個包含 {k} 種的<strong>演化支 (clade)</strong>。", "<strong>마디 {n}(node)</strong>은 {list}의 <em>가상의 공통 조상</em>이다. 이 마디와 여기서 갈라져 나온 모든 것이 생물 {k}종의 <strong>분기군(clade)</strong>이다."),
    tipInfo: L("<strong>Terminal branch</strong> leading to <strong>{name}</strong>: one of the organisms being compared. A tip is never the ancestor of another tip.", "<strong>末端の枝 (terminal branch)</strong>：<strong>{name}</strong> につながります。比較している生物の一つで、先端が他の先端の祖先になることはありません。", "<strong>末端分支 (terminal branch)</strong>：通向 <strong>{name}</strong>，即被比較的生物之一。尖端絕不是另一個尖端的祖先。", "<strong>말단 가지(terminal branch)</strong>가 <strong>{name}</strong>(으)로 이어진다: 비교하는 생물 중 하나이다. 가지 끝은 다른 가지 끝의 조상이 될 수 없다."),
    flipped: L("Flipped. The tips are now in a different order, but <strong>nothing about who is related to whom has changed</strong>: relationships depend on the nodes, not on which tips sit next to each other.", "入れ替えました。先端の並びは変わりましたが、<strong>誰が誰と近縁かは何も変わっていません</strong>。関係は節で決まり、どの先端が隣にあるかでは決まりません。", "已交換。尖端次序改變了，但<strong>誰與誰有親緣關係完全沒有改變</strong>：關係取決於節點，而不是哪些尖端相鄰。", "뒤집었다. 가지 끝의 순서는 달라졌지만 <strong>누가 누구와 가까운 관계인지는 전혀 바뀌지 않았다</strong>: 관계는 마디에 따라 정해지며 어떤 가지 끝이 서로 옆에 있는지와는 관계가 없다."),
    pickNode: L("Select an internal node first (a circle).", "まず内部の節（丸）を選んでください。", "請先選擇一個內部節點（圓圈）。", "먼저 내부 마디(원)를 선택하시오."),
    qMrca: L("Tap the node that is the <strong>most recent common ancestor</strong> of <strong>{a}</strong> and <strong>{b}</strong>.", "<strong>{a}</strong> と <strong>{b}</strong> の<strong>最も近い共通祖先</strong>にあたる節をタップしてください。", "請點擊 <strong>{a}</strong> 與 <strong>{b}</strong> 的<strong>最近共同祖先</strong>所在的節點。", "<strong>{a}</strong>와(과) <strong>{b}</strong>의 <strong>가장 가까운 공통 조상</strong>인 마디를 누르시오."),
    qClosest: L("Which is <strong>more closely related</strong> to <strong>{x}</strong>: <strong>{y}</strong> or <strong>{z}</strong>? Tap its name.", "<strong>{x}</strong> により<strong>近縁</strong>なのは、<strong>{y}</strong> と <strong>{z}</strong> のどちらですか。名前をタップしてください。", "與 <strong>{x}</strong> 的<strong>親緣更近</strong>的是 <strong>{y}</strong> 還是 <strong>{z}</strong>？請點擊其名稱。", "<strong>{x}</strong>와(과) <strong>더 가까운 관계</strong>인 것은 <strong>{y}</strong>와(과) <strong>{z}</strong> 중 어느 것인가? 그 이름을 누르시오."),
    qClade: L("Tap the node whose <strong>clade</strong> is exactly: {list}.", "<strong>クレード</strong>がちょうど {list} になる節をタップしてください。", "請點擊其<strong>演化支</strong>剛好是 {list} 的節點。", "<strong>분기군(clade)</strong>이 정확히 {list}인 마디를 누르시오."),
    ok: L("Correct.", "正解です。", "正確。", "정답이다."), no: L("Not quite.", "惜しい。", "不太對。", "틀렸다."),
    eMrca: L("Trace back from each organism. The first node where the two paths meet is their most recent common ancestor. That node is the ancestor of: {list}.", "各生物から根の方へたどります。二つの道が最初に出会う節が、最も近い共通祖先です。この節は {list} の祖先です。", "從每種生物往回追溯。兩條路徑第一次相遇的節點就是牠們的最近共同祖先。這個節點是 {list} 的祖先。", "각 생물에서 거슬러 올라가 보시오. 두 경로가 처음 만나는 마디가 가장 가까운 공통 조상이다. 이 마디는 {list}의 조상이다."),
    eClosest: L("{y} and {x} meet at a more recent node than {z} and {x}, so {y} is more closely related. Position on the page does not decide it.", "{y} と {x} が出会う節は、{z} と {x} が出会う節より新しいので、{y} のほうが近縁です。紙面上の位置では決まりません。", "{y} 與 {x} 相遇的節點比 {z} 與 {x} 相遇的節點更近期，所以 {y} 的親緣更近。這不是由圖上的位置決定的。", "{y}와(과) {x}는 {z}와(과) {x}보다 더 최근의 마디에서 만나므로 {y}가 더 가까운 관계이다. 그림에서의 위치로 정해지는 것이 아니다."),
    eClade: L("A clade is a node plus all of its descendants. That node's clade is: {list}.", "クレードは、一つの節とそのすべての子孫です。この節のクレードは {list} です。", "演化支是一個節點加上它所有的後代。這個節點的演化支是：{list}。", "분기군은 하나의 마디와 그 모든 자손이다. 이 마디의 분기군은 {list}이다."),
    score: L("Score: {s} / {n}", "得点: {s} / {n}", "得分：{s} / {n}", "점수: {s} / {n}"),
    /* build */
    chIntro: L("Each row is a feature. Tap a feature to add it to the tree: the organisms that share it are grouped into a clade. A feature found in only one organism cannot group anything.", "各行は一つの特徴です。特徴をタップして木に加えると、それを共有する生物がクレードにまとまります。一つの生物だけにある特徴は、何もまとめられません。", "每一行是一項特徵。點擊特徵把它加到樹上：共有該特徵的生物會被歸入一個演化支。只出現在一種生物的特徵，不能把任何生物歸組。", "각 행은 하나의 형질이다. 형질을 눌러 나무에 추가하시오. 그 형질을 공유하는 생물이 하나의 분기군으로 묶인다. 한 생물에만 있는 형질은 아무것도 묶을 수 없다."),
    chNone: L("No features added yet, so the tree shows no groups: all five organisms branch from one point. Add a feature.", "まだ特徴が加えられていないので、木にグループがありません。五つの生物がすべて一点から分かれています。特徴を加えましょう。", "尚未加入任何特徵，所以樹上沒有分組：五種生物都從同一點分出。請加入特徵。", "아직 추가한 형질이 없으므로 나무에 묶인 무리가 없다. 다섯 생물 모두 한 점에서 갈라진다. 형질을 추가하시오."),
    chSome: L("The tree now has {k} group(s). The branching order follows the features you added. Lamprey is the only one without jaws, so it branches off first.", "木には{k}個のグループができました。枝分かれの順序は、加えた特徴に従います。ヤツメウナギは顎がない唯一の生物なので、最初に分かれます。", "樹現在有 {k} 個分組。分支次序依你加入的特徵而定。七鰓鰻是唯一沒有頜的生物，所以最先分出。", "나무에 이제 {k}개의 무리가 있다. 가지가 갈라지는 순서는 추가한 형질을 따른다. 칠성장어만 턱이 없으므로 가장 먼저 갈라져 나온다."),
    chDone: L("Complete. Each shared feature marks the common ancestor of a clade. Cat is the only one with hair, so that feature sits on its own branch and groups nothing. Check: which two organisms are most closely related? (Lizard and cat, because they share the amnion and the most recent ancestor.)", "完成です。共有される各特徴は、クレードの共通祖先を示します。体毛をもつのはネコだけなので、その特徴は単独の枝にあり、何もまとめません。確認：最も近縁な二つはどれ？（トカゲとネコ。羊膜を共有し、最も新しい共通祖先をもつため。）", "完成。每項共有特徵標示一個演化支的共同祖先。只有貓有毛髮，所以這特徵在單獨一條分支上，不能歸組任何生物。檢查：哪兩種生物親緣最近？（蜥蜴和貓，因為牠們共有羊膜和最近的共同祖先。）", "완성했다. 공유하는 각 형질은 한 분기군의 공통 조상을 나타낸다. 털은 고양이만 가지므로 그 형질은 혼자만의 가지에 놓이며 아무것도 묶지 못한다. 확인: 가장 가까운 관계인 두 생물은 무엇인가? (도마뱀과 고양이이다. 양막을 공유하고 가장 최근의 조상을 공유하기 때문이다.)"),
    present: L("has it", "あり", "有", "있음"), absent: L("–", "–", "–", "–"),
    chars: [
      { n: L("jaws", "顎", "頜", "턱"), t: ["trout", "frog", "lizard", "cat"] },
      { n: L("limbs with digits", "指のある四肢", "有趾的四肢", "발가락이 있는 사지"), t: ["frog", "lizard", "cat"] },
      { n: L("amnion", "羊膜", "羊膜", "양막"), t: ["lizard", "cat"] },
      { n: L("hair", "体毛", "毛髮", "털"), t: ["cat"] }
    ],
    pIntro: L("Four organisms, eight DNA sites (made-up sample data). Which tree explains the differences with the <strong>fewest changes</strong>? A change is one base being replaced along a branch. Tap the tree you think is best.", "四つの生物、八つの DNA 部位（架空のサンプルデータ）。違いを<strong>最も少ない変化</strong>で説明できる木はどれでしょう。変化とは、枝に沿って一つの塩基が置き換わることです。最もよいと思う木をタップしてください。", "四種生物，八個 DNA 位點（虛構樣本數據）。哪一棵樹能以<strong>最少的變化</strong>解釋差異？「變化」是指沿分支一個鹼基被取代。請點擊你認為最好的樹。", "생물 네 종과 DNA 자리 여덟 곳(만든 예시 자료). 어느 나무가 <strong>가장 적은 변화</strong>로 차이를 설명하는가? 변화란 가지를 따라 염기 하나가 다른 염기로 바뀌는 것이다. 가장 좋다고 생각하는 나무를 누르시오."),
    pTree: L("Tree {n}", "木{n}", "樹 {n}", "나무 {n}"), pChanges: L("changes", "変化の回数", "變化次數", "변화 횟수"), pSite: L("Site", "部位", "位點", "자리"), pTotal: L("Total", "合計", "總數", "합계"),
    pRight: L("<strong>Correct.</strong> Tree {n} needs the fewest changes ({c}), so it is the most parsimonious and so the most probable cladogram.", "<strong>正解。</strong>木{n}は必要な変化が最も少なく（{c}回）、最節約的で、最も確からしい分岐図です。", "<strong>正確。</strong>樹 {n} 所需變化最少（{c} 次），所以最簡約，是最有可能的支序圖。", "<strong>정답이다.</strong> 나무 {n}은(는) 필요한 변화가 가장 적으므로({c}회) 가장 최대 절약적이고, 따라서 가장 가능성이 높은 분지도(cladogram)이다."),
    pWrong: L("<strong>Not the fewest.</strong> Tree {n} needs {c} changes, but Tree {m} needs only {d}. The most parsimonious tree is the most probable cladogram.", "<strong>最少ではありません。</strong>木{n}は{c}回必要ですが、木{m}は{d}回で済みます。最も確からしい分岐図は最節約的な木です。", "<strong>不是最少。</strong>樹 {n} 需要 {c} 次變化，但樹 {m} 只需 {d} 次。最簡約的樹就是最有可能的支序圖。", "<strong>가장 적지 않다.</strong> 나무 {n}은(는) 변화가 {c}회 필요하지만 나무 {m}은(는) {d}회만 필요하다. 가장 최대 절약적인 나무가 가장 가능성이 높은 분지도이다."),
    pNote: L("Sites where all four organisms have the same base, or only one differs, do not help choose between trees. A different method of judging could pick a different tree, so a cladogram is a hypothesis.", "四つの生物が同じ塩基をもつ部位や、一つだけが違う部位は、木を選ぶ助けになりません。別の判断方法なら別の木が選ばれるかもしれないので、分岐図は仮説です。", "四種生物鹼基相同的位點，或只有一種不同的位點，無助於在樹之間作選擇。用另一種判斷方法可能選出另一棵樹，所以支序圖是一個假說。", "네 생물이 모두 같은 염기를 갖거나 한 생물만 다른 자리는 나무를 고르는 데 도움이 되지 않는다. 판단하는 방법이 다르면 다른 나무가 선택될 수도 있으므로 분지도는 가설이다."),
    how: L("How it works", "使い方", "使用方法", "사용 방법"),
    more: L("More detail", "詳細", "更多說明", "자세히 보기"),
    pNew: L("Other data set", "別のデータ", "另一組數據", "다른 자료")
  };

  /* ---------------- tree helpers ---------------- */
  function mk(a) { return typeof a === "string" ? { leaf: a } : { kids: a.map(mk) }; }
  function numberNodes(root) { var n = 0; (function w(nd) { if (nd.leaf) return; nd.id = ++n; nd.kids.forEach(w); })(root); return n; }
  function leavesOf(nd) { return nd.leaf ? [nd.leaf] : nd.kids.reduce(function (a, k) { return a.concat(leavesOf(k)); }, []); }
  function findNode(root, id) { var r = null; (function w(nd) { if (nd.leaf || r) return; if (nd.id === id) { r = nd; return; } nd.kids.forEach(w); })(root); return r; }
  function internals(root) { var r = []; (function w(nd) { if (nd.leaf) return; r.push(nd); nd.kids.forEach(w); })(root); return r; }
  function lca(root, a, b) {
    var cur = root;
    for (;;) {
      var nxt = null;
      for (var i = 0; i < cur.kids.length; i++) { var ls = leavesOf(cur.kids[i]); if (ls.indexOf(a) >= 0 && ls.indexOf(b) >= 0) { nxt = cur.kids[i]; break; } }
      if (!nxt || nxt.leaf) return cur;
      cur = nxt;
    }
  }
  function layout(root, rowH, top) {
    var i = 0;
    (function w(nd) {
      if (nd.leaf) { nd.y = top + rowH * i++; nd.h = 0; return; }
      nd.kids.forEach(w);
      nd.h = 1 + Math.max.apply(null, nd.kids.map(function (k) { return k.h; }));
      nd.y = (nd.kids[0].y + nd.kids[nd.kids.length - 1].y) / 2;
    })(root);
    return i;
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  /* Render a cladogram to an SVG string.
     o: W, rowH, top, x0, xt, lang, names(key)->L, sel (node), interactive, terms, nodeNumbers, nodeLabel(nd), tipLabel(key) */
  function svgTree(root, o) {
    var rowH = o.rowH || 38, top = o.top || 26;
    var n = layout(root, rowH, top);
    var H = Math.max(root.h, 1);
    var W = o.W || 360, x0 = o.x0 || 44, xt = o.xt || 215;
    var dx = (xt - x0) / H;
    var X = function (nd) { return x0 + (H - nd.h) * dx; };
    var inSel = {};
    if (o.sel) (function w(nd, on) { var f = on || nd === o.sel; inSel[nd.leaf ? "L" + nd.leaf : "N" + nd.id] = f; if (!nd.leaf) nd.kids.forEach(function (k) { w(k, f); }); })(root, false);
    var key = function (nd) { return nd.leaf ? "L" + nd.leaf : "N" + nd.id; };
    var lines = "", nodes = "", tips = "", extra = "";
    var lang = o.lang;
    (function draw(nd) {
      var hl = o.sel ? inSel[key(nd)] : false;
      var dim = o.sel && !hl ? " cl-dim" : "";
      if (nd.leaf) {
        var nm = o.names(nd.leaf);
        var main = nm[lang] || nm.en;
        var sub = lang !== "en" ? nm.en : "";
        var inner = '<text class="cl-tip' + (hl ? " hl" : "") + '" x="' + (xt + 10) + '" y="' + (nd.y + (sub ? 0 : 5)) + '">' + esc(main) + "</text>" + (sub ? '<text class="cl-sub" x="' + (xt + 10) + '" y="' + (nd.y + 13) + '">' + esc(sub) + "</text>" : "");
        if (o.tipExtra) inner += o.tipExtra(nd, xt);
        if (o.interactive) {
          tips += '<g class="' + dim.trim() + '" data-l="' + nd.leaf + '" tabindex="0" role="button" aria-label="' + esc(main) + '"><rect class="cl-fo" x="' + (xt - 30) + '" y="' + (nd.y - rowH / 2 + 2) + '" width="' + (W - xt + 24) + '" height="' + (rowH - 4) + '" rx="6" fill="transparent" stroke="none"/>' + inner + "</g>";
        } else tips += "<g>" + inner + "</g>";
        return;
      }
      var x = X(nd);
      lines += '<path class="cl-ln' + (hl ? " hl" : "") + dim + '" d="M' + x + " " + nd.kids[0].y + "V" + nd.kids[nd.kids.length - 1].y + '"/>';
      nd.kids.forEach(function (k) {
        var khl = o.sel ? inSel[key(k)] : false;
        lines += '<path class="cl-ln' + (khl ? " hl" : "") + (o.sel && !khl ? " cl-dim" : "") + '" d="M' + x + " " + k.y + "H" + (k.leaf ? xt : X(k)) + '"/>';
        draw(k);
      });
      if (nd === root) lines += '<path class="cl-ln' + (hl ? " hl" : "") + dim + '" d="M8 ' + nd.y + "H" + x + '"/>';
      if (o.interactive || o.nodeNumbers) {
        var sel = o.sel === nd;
        var circle = '<circle class="cl-node' + (sel ? " sel" : "") + '" cx="' + x + '" cy="' + nd.y + '" r="10"/><text class="cl-nn" x="' + x + '" y="' + (nd.y + 4) + '">' + nd.id + "</text>";
        if (o.interactive) nodes += '<g data-n="' + nd.id + '" tabindex="0" role="button" aria-label="' + (nd === root ? "root, " : "node ") + nd.id + '"><circle class="cl-fo" cx="' + x + '" cy="' + nd.y + '" r="17" fill="transparent" stroke="none"/>' + circle + "</g>";
        else nodes += circle;
      }
      if (o.nodeLabel) { var lb = o.nodeLabel(nd); if (lb) extra += '<text class="cl-chl" x="' + (x - 5) + '" y="' + (nd.y - 7) + '">' + esc(lb) + "</text>"; }
    })(root);
    if (o.terms) {
      var T0 = o.T, ins = internals(root), deep = ins[ins.length - 1], firstLeaf = null;
      (function w(nd) { if (nd.leaf) { if (!firstLeaf) firstLeaf = nd; return; } nd.kids.forEach(w); })(root);
      extra += '<text class="cl-term" x="4" y="' + (root.y - 24) + '">' + esc(T0.root[lang] || T0.root.en) + '</text><path class="cl-tl" d="M14 ' + (root.y - 20) + "V" + (root.y - 2) + '"/>';
      if (deep !== root) extra += '<text class="cl-term" text-anchor="end" x="' + (X(deep) - 12) + '" y="' + (deep.y - 16) + '">' + esc(T0.node[lang] || T0.node.en) + "</text>";
      extra += '<text class="cl-term" text-anchor="end" x="' + (xt - 4) + '" y="' + (firstLeaf.y - 7) + '">' + esc(T0.term[lang] || T0.term.en) + "</text>";
    }
    var Hh = top + rowH * (n - 1) + rowH / 2 + (o.terms ? 14 : 4) + (o.tipExtra ? 12 : 0);
    return '<svg viewBox="0 0 ' + W + " " + Hh + '" role="img" aria-label="cladogram">' + lines + extra + nodes + tips + "</svg>";
  }

  /* Fitch parsimony: minimum number of base changes at one site for a rooted binary tree */
  function fitchSite(tree, seqs, i) {
    var cost = 0;
    (function f(t) {
      if (typeof t === "string") return [seqs[t].charAt(i)];
      var a = f(t[0]), b = f(t[1]), x = a.filter(function (c) { return b.indexOf(c) >= 0; });
      if (x.length) return x;
      cost++;
      return a.concat(b);
    })(tree);
    return cost;
  }

  /* ---------------- parsimony data ---------------- */
  var BASE = { a: "AAGG", b: "CCTT", c: "TTCC", d: "GAGA", e: "AAAA", f: "CCCT", g: "GGGG", h: "TCTT" };
  // site columns are [W,X,Y,Z]; the best tree pairs W with X.
  function mkSeqs(map) { // map: key -> index into W,X,Y,Z
    var out = {};
    Object.keys(map).forEach(function (k) {
      var s = ""; "abcdefgh".split("").forEach(function (c) { s += BASE[c].charAt(map[k]); });
      out[k] = s;
    });
    return out;
  }
  var DATASETS = [
    { taxa: ["A", "B", "C", "D"], seqs: mkSeqs({ A: 0, B: 1, C: 2, D: 3 }) },
    { taxa: ["P", "Q", "R", "S"], seqs: mkSeqs({ P: 0, Q: 2, R: 1, S: 3 }) }
  ];

  /* ---------------- widget ---------------- */
  function sub(s, d) {
    s = s.replace(/\{(\w+)\}/g, function (m, k) { return d[k] === undefined ? m : d[k]; });
    /* Korean particles: pick the form that matches the final syllable of the word before it */
    return s.replace(/([\uac00-\ud7a3])((?:<\/\w+>)?)(와\(과\)|은\(는\)|이\(가\)|을\(를\)|\(으\)로)/g, function (m, ch, tag, p) {
      var code = ch.charCodeAt(0) - 0xac00, fin = code % 28, has = fin !== 0;
      var r = p === "와(과)" ? (has ? "과" : "와") : p === "은(는)" ? (has ? "은" : "는") : p === "이(가)" ? (has ? "이" : "가") : p === "을(를)" ? (has ? "을" : "를") : (has && fin !== 8 ? "으로" : "로");
      return ch + tag + r;
    });
  }

  function mount(el, ctx, which) {
    if (!document.getElementById(CSS_ID)) { var st = document.createElement("style"); st.id = CSS_ID; st.textContent = CSS; document.head.appendChild(st); }
    var lang = ctx.lang, t = ctx.t;
    var sep = (lang === "en" || lang === "ko") ? ", " : "、";
    var root = document.createElement("div"); root.className = "w-cladogram"; el.appendChild(root);
    var names = function (k) { return N[k]; };
    var nm = function (k) { return t(N[k]); };
    var listNames = function (arr) { return arr.map(nm).join(sep); };
    var tr = function (key, d) { return sub(t(T[key]), d || {}); };

    var mode = which === "build" ? "chars" : "explore";
    var ot = ctx.options && ctx.options.tab, modeIds = which === "build" ? ["chars", "pars"] : ["explore", "practice"];
    if (typeof ot === "number" && modeIds[ot]) mode = modeIds[ot]; else if (typeof ot === "string" && modeIds.indexOf(ot) >= 0) mode = ot;
    var treeIdx = 0, tree, sel = null, terms = false, msg = "", msgCls = "";
    var task = null, score = 0, asked = 0, answered = false;
    var chosen = {}; var dsIdx = 0, pick = -1;
    var focusKey = null;

    function loadTree(i, shuffle) {
      treeIdx = i; tree = mk(TREES[i].t); numberNodes(tree); sel = null; msg = tr("hint"); msgCls = "";
      if (shuffle) (function w(nd) { if (nd.leaf) return; if (Math.random() < 0.5) nd.kids.reverse(); nd.kids.forEach(w); })(tree);
      numberNodes(tree);
    }
    loadTree(0, false);

    function render() {
      var ae = el.querySelector(":focus"); focusKey = ae && ae.getAttribute ? (ae.getAttribute("data-n") ? "n" + ae.getAttribute("data-n") : ae.getAttribute("data-l") ? "l" + ae.getAttribute("data-l") : null) : null;
      var h = '<div class="wl">';
      var tabs = which === "build"
        ? [["chars", "tChars"], ["pars", "tPars"]]
        : [["explore", "tExplore"], ["practice", "tPractice"]];
      h += '<div class="wl-tabs" role="tablist">' + tabs.map(function (x) { return '<button type="button" role="tab" data-mode="' + x[0] + '" aria-selected="' + (mode === x[0]) + '">' + esc(tr(x[1])) + "</button>"; }).join("") + "</div>";
      if (mode === "explore" || mode === "practice") h += renderRead();
      else if (mode === "chars") h += renderChars();
      else h += renderPars();
      h += "</div>";
      root.innerHTML = h;
      if (focusKey) { var q = focusKey.charAt(0) === "n" ? '[data-n="' + focusKey.slice(1) + '"]' : '[data-l="' + focusKey.slice(1) + '"]'; var f = root.querySelector(q); if (f) f.focus(); }
    }

    /* ----- read widget ----- */
    function renderRead() {
      var h = '<div class="wl-stage">';
      if (mode === "practice") h += '<div class="cl-q">' + (task ? task.q : "") + "</div>";
      h += svgTree(tree, { lang: lang, names: names, sel: sel, interactive: true, terms: terms, T: T }) + "</div>";
      h += '<div class="wl-panel"><div class="cl-row" role="group">' + TREES.map(function (x, i) { return '<button type="button" class="cl-btn wl-sub" data-tree="' + i + '" aria-pressed="' + (i === treeIdx) + '">' + esc(t(x.title)) + "</button>"; }).join("") + "</div>";
      h += '<div class="cl-msg ' + msgCls + '" aria-live="polite">' + msg + "</div>";
      h += '<div class="cl-row">';
      if (mode === "explore") {
        h += '<button type="button" class="cl-btn" data-act="terms" aria-pressed="' + terms + '">' + esc(tr("terms")) + "</button>";
        h += '<button type="button" class="cl-btn" data-act="flip">' + esc(tr("flip")) + "</button>";
        h += '<button type="button" class="cl-btn" data-act="reset">' + esc(tr("reset")) + "</button>";
      } else {
        h += '<button type="button" class="cl-btn" data-act="show"' + (answered ? " disabled" : "") + ">" + esc(tr("show")) + '</button><button type="button" class="cl-btn" data-act="next">' + esc(tr("next")) + '</button><span class="cl-score">' + esc(tr("score", { s: score, n: asked })) + "</span>";
      }
      h += "</div></div>";
      return h;
    }

    function newTask() {
      loadTree(treeIdx, true); sel = null; answered = false; msgCls = ""; msg = "";
      var lv = leavesOf(tree), ins = internals(tree).filter(function (n) { return n !== tree; });
      var kind = ["mrca", "closest", "clade"][Math.floor(Math.random() * 3)];
      var a, b;
      if (kind === "mrca") {
        do { a = lv[Math.floor(Math.random() * lv.length)]; b = lv[Math.floor(Math.random() * lv.length)]; } while (a === b);
        task = { kind: kind, node: lca(tree, a, b), a: a, b: b, q: tr("qMrca", { a: nm(a), b: nm(b) }) };
      } else if (kind === "closest") {
        /* choose an organism x whose relatives are not all equally related to it
           (e.g. not the outgroup, which meets every other tip only at the root) */
        var x, others, tries = 0;
        do {
          x = lv[Math.floor(Math.random() * lv.length)];
          others = lv.filter(function (k) { return k !== x; }).map(function (k) { return { k: k, s: leavesOf(lca(tree, x, k)).length }; });
          others.sort(function (p, q) { return p.s - q.s; });
        } while (others[0].s === others[others.length - 1].s && ++tries < 50);
        var y = others[0], z = others[others.length - 1 - Math.floor(Math.random() * Math.max(1, others.length - 2))];
        if (z.s === y.s) z = others[others.length - 1];
        var ord = Math.random() < 0.5 ? [y.k, z.k] : [z.k, y.k];
        task = { kind: kind, x: x, y: y.k, z: z.k, q: tr("qClosest", { x: nm(x), y: nm(ord[0]), z: nm(ord[1]) }) };
      } else {
        var node = ins[Math.floor(Math.random() * ins.length)];
        task = { kind: kind, node: node, q: tr("qClade", { list: listNames(leavesOf(node)) }) };
      }
      asked++;
      render();
    }

    function revealTask(correct, first) {
      var d;
      if (task.kind === "mrca") { sel = task.node; d = { list: listNames(leavesOf(task.node)) }; msg = (correct ? "<strong>" + tr("ok") + "</strong> " : "<strong>" + tr("no") + "</strong> ") + tr("eMrca", d); }
      else if (task.kind === "closest") { sel = lca(tree, task.x, task.y); msg = (correct ? "<strong>" + tr("ok") + "</strong> " : "<strong>" + tr("no") + "</strong> ") + tr("eClosest", { x: nm(task.x), y: nm(task.y), z: nm(task.z) }); }
      else { sel = task.node; msg = (correct ? "<strong>" + tr("ok") + "</strong> " : "<strong>" + tr("no") + "</strong> ") + tr("eClade", { list: listNames(leavesOf(task.node)) }); }
      msgCls = correct ? "good" : "bad"; answered = true;
      if (correct && first) score++;
    }

    function onTapNode(id) {
      var nd = findNode(tree, id);
      if (mode === "practice") {
        if (!task || answered) return;
        if (task.kind === "closest") { sel = nd; msg = ""; render(); return; }
        var first = !task.tried; task.tried = true;
        if (nd === task.node) revealTask(true, first);
        else { sel = nd; msgCls = "bad"; msg = "<strong>" + tr("no") + "</strong> " + tr("nodeInfo", { n: nd.id, list: listNames(leavesOf(nd)), k: leavesOf(nd).length }); }
        render(); return;
      }
      sel = nd;
      var ls = leavesOf(nd);
      msg = tr(nd === tree ? "rootInfo" : "nodeInfo", { n: nd.id, list: listNames(ls), k: ls.length }); msgCls = "";
      render();
    }
    function onTapLeaf(k) {
      if (mode === "practice") {
        if (!task || answered || task.kind !== "closest") return;
        var first = !task.tried; task.tried = true;
        if (k === task.y) revealTask(true, first);
        else if (k === task.z) revealTask(false, false);
        else { msgCls = "bad"; msg = "<strong>" + tr("no") + "</strong> " + tr("qClosest", { x: nm(task.x), y: nm(task.y), z: nm(task.z) }); }
        render(); return;
      }
      sel = null; msg = tr("tipInfo", { name: nm(k) }); msgCls = ""; render();
    }

    /* ----- build: characters ----- */
    var CH_TAXA = ["lamprey", "trout", "frog", "lizard", "cat"];
    function buildCharTree() {
      var sets = [];
      T.chars.forEach(function (c, i) { if (!chosen[i]) return; if (c.t.length < 2 || c.t.length >= CH_TAXA.length) return; var key = c.t.slice().sort().join("|"); var ex = sets.filter(function (s) { return s.key === key; })[0]; if (ex) ex.labels.push(c.n); else sets.push({ key: key, taxa: c.t.slice(), labels: [c.n] }); });
      sets.sort(function (a, b) { return b.taxa.length - a.taxa.length; });
      var rootN = { kids: [], labels: [] };
      var nodes = sets.map(function (s) { return { kids: [], labels: s.labels, set: s.taxa }; });
      nodes.forEach(function (n, i) {
        var par = rootN;
        for (var j = 0; j < i; j++) { var p = nodes[j]; if (p.set.length > n.set.length && n.set.every(function (x) { return p.set.indexOf(x) >= 0; })) par = p; }
        par.kids.push(n);
      });
      CH_TAXA.forEach(function (tx) {
        var par = rootN, best = 99;
        nodes.forEach(function (n) { if (n.set.indexOf(tx) >= 0 && n.set.length < best) { best = n.set.length; par = n; } });
        par.kids.push({ leaf: tx });
      });
      (function sortK(n) { if (n.leaf) return; n.kids.forEach(sortK); n.kids.sort(function (a, b) { return Math.min.apply(null, leavesOf(a).map(function (k) { return CH_TAXA.indexOf(k); })) - Math.min.apply(null, leavesOf(b).map(function (k) { return CH_TAXA.indexOf(k); })); }); })(rootN);
      return rootN;
    }
    function renderChars() {
      var rt = buildCharTree(); numberNodes(rt);
      var cnt = T.chars.filter(function (c, i) { return chosen[i] && c.t.length >= 2 && c.t.length < CH_TAXA.length; }).length;
      var all = T.chars.every(function (c, i) { return chosen[i]; });
      var h = '<div class="wl-panel"><details><summary>' + esc(tr("how")) + '</summary><p class="cl-note" style="font-size:.88rem;color:var(--ink,#0f2029)">' + esc(tr("chIntro")) + "</p></details>";
      h += '<table class="cl-t cl-chtbl"><tr><th></th>' + CH_TAXA.map(function (k) { return "<th>" + esc(nm(k)) + "</th>"; }).join("") + "</tr>";
      T.chars.forEach(function (c, i) {
        h += '<tr><td class="cl-ch"><button type="button" class="cl-btn" data-ch="' + i + '" aria-pressed="' + !!chosen[i] + '">' + esc(t(c.n)) + "</button></td>" + CH_TAXA.map(function (k) { return "<td>" + (c.t.indexOf(k) >= 0 ? "&#10003;" : "–") + "</td>"; }).join("") + "</tr>";
      });
      h += "</table>";
      var tipExtra = function (nd, xt) { var s = ""; T.chars.forEach(function (c, i) { if (chosen[i] && c.t.length === 1 && c.t[0] === nd.leaf) s += "★ " + t(c.n) + " "; }); return s ? '<text class="cl-chl" style="text-anchor:start" x="' + (xt + 10) + '" y="' + (nd.y + (lang !== "en" ? 26 : 18)) + '">' + esc(s) + "</text>" : ""; };
      var stage = '<div class="wl-stage">' + svgTree(rt, { lang: lang, names: names, interactive: false, nodeNumbers: false, nodeLabel: function (nd) { return nd.labels && nd.labels.length ? nd.labels.map(function (l) { return t(l); }).join(" + ") : ""; }, tipExtra: tipExtra, rowH: lang !== "en" ? 36 : 32, x0: 20, xt: 205, W: 360 }) + "</div>";
      var m = all ? tr("chDone") : cnt === 0 ? tr("chNone") : tr("chSome", { k: cnt });
      h += '<div class="cl-msg ' + (all ? "good" : "") + '" aria-live="polite">' + m + "</div>";
      h += '<div class="cl-row"><button type="button" class="cl-btn" data-act="chreset">' + esc(tr("reset")) + "</button></div></div>";
      return stage + h;
    }

    /* ----- build: parsimony ----- */
    function cands(ds) { var x = ds.taxa; return [[[x[0], x[1]], [x[2], x[3]]], [[x[0], x[2]], [x[1], x[3]]], [[x[0], x[3]], [x[1], x[2]]]]; }
    function renderPars() {
      var ds = DATASETS[dsIdx], cs = cands(ds), n = 8;
      var h = '<div class="wl-stage"><div class="cl-datatbl"><table class="cl-t"><tr><th>' + esc(tr("pSite")) + "</th>";
      for (var i = 0; i < n; i++) h += "<th>" + (i + 1) + "</th>";
      h += "</tr>";
      ds.taxa.forEach(function (k) {
        h += "<tr><td><b>" + k + "</b></td>";
        for (var i2 = 0; i2 < n; i2++) { var col = ds.taxa.map(function (q) { return ds.seqs[q].charAt(i2); }); var varies = col.some(function (c) { return c !== col[0]; }); h += '<td class="cl-seq' + (varies ? " vary" : "") + '">' + ds.seqs[k].charAt(i2) + "</td>"; }
        h += "</tr>";
      });
      h += "</table></div>";
      h += '<div class="cl-cands" role="group">';
      cs.forEach(function (c, i3) {
        var r = mk(c); numberNodes(r);
        h += '<button type="button" class="cl-cand wl-sub" data-pick="' + i3 + '" aria-pressed="' + (pick === i3) + '"><b>' + esc(tr("pTree", { n: i3 + 1 })) + "</b>" + svgTree(r, { lang: "en", names: function (k) { return { en: k }; }, rowH: 21, top: 10, x0: 10, xt: 70, W: 100 }) + "</button>";
      });
      h += "</div></div>";
      h += '<div class="wl-panel"><details' + (pick < 0 ? " open" : "") + '><summary>' + esc(tr("how")) + '</summary><p class="cl-note" style="font-size:.88rem;color:var(--ink,#0f2029)">' + tr("pIntro") + "</p></details>";
      if (pick >= 0) {
        var tot = cs.map(function (c) { var arr = []; for (var s = 0; s < n; s++) arr.push(fitchSite(c, ds.seqs, s)); return { arr: arr, sum: arr.reduce(function (a, b) { return a + b; }, 0) }; });
        var min = Math.min.apply(null, tot.map(function (x) { return x.sum; })), bi = tot.map(function (x) { return x.sum; }).indexOf(min);
        h += '<table class="cl-t"><tr><th>' + esc(tr("pChanges")) + "</th>";
        for (var j = 0; j < n; j++) h += "<th>" + (j + 1) + "</th>";
        h += "<th>" + esc(tr("pTotal")) + "</th></tr>";
        tot.forEach(function (x, i4) { h += '<tr class="' + (x.sum === min ? "best" : "") + '"><td>' + esc(tr("pTree", { n: i4 + 1 })) + "</td>" + x.arr.map(function (v) { return "<td>" + v + "</td>"; }).join("") + "<td><b>" + x.sum + "</b></td></tr>"; });
        h += "</table>";
        var ok = tot[pick].sum === min;
        h += '<div class="cl-msg ' + (ok ? "good" : "bad") + '" aria-live="polite">' + (ok ? tr("pRight", { n: pick + 1, c: min }) : tr("pWrong", { n: pick + 1, c: tot[pick].sum, m: bi + 1, d: min })) + "</div>";
      } else h += '<div class="cl-msg" aria-live="polite"></div>';
      h += '<div class="cl-row"><button type="button" class="cl-btn" data-act="newds">' + esc(tr("pNew")) + '</button></div><details><summary>' + esc(tr("more")) + '</summary><p class="cl-note">' + esc(tr("pNote")) + "</p></details></div>";
      return h;
    }

    /* ----- events ----- */
    function onClick(e) {
      var b;
      if ((b = e.target.closest("[data-mode]"))) {
        mode = b.getAttribute("data-mode"); sel = null; answered = false; msgCls = "";
        if (mode === "practice") { score = 0; asked = 0; newTask(); return; }
        if (mode === "explore") { loadTree(treeIdx, false); }
        render(); return;
      }
      if ((b = e.target.closest("[data-tree]"))) { loadTree(+b.getAttribute("data-tree"), mode === "practice"); if (mode === "practice") { asked = Math.max(0, asked - 1); newTask(); } else render(); return; }
      if ((b = e.target.closest("[data-n]"))) { onTapNode(+b.getAttribute("data-n")); return; }
      if ((b = e.target.closest("[data-l]"))) { onTapLeaf(b.getAttribute("data-l")); return; }
      if ((b = e.target.closest("[data-ch]"))) { var i = +b.getAttribute("data-ch"); chosen[i] = !chosen[i]; render(); return; }
      if ((b = e.target.closest("[data-pick]"))) { pick = +b.getAttribute("data-pick"); render(); return; }
      if ((b = e.target.closest("[data-act]"))) {
        var a = b.getAttribute("data-act");
        if (a === "terms") { terms = !terms; render(); }
        else if (a === "flip") { if (!sel) { msg = tr("pickNode"); msgCls = ""; } else { sel.kids.reverse(); msg = tr("flipped"); msgCls = ""; } render(); }
        else if (a === "reset") { loadTree(treeIdx, false); terms = false; render(); }
        else if (a === "next") { newTask(); }
        else if (a === "show") { if (task && !answered) { revealTask(false, false); render(); } }
        else if (a === "chreset") { chosen = {}; render(); }
        else if (a === "newds") { dsIdx = (dsIdx + 1) % DATASETS.length; pick = -1; render(); }
      }
    }
    function onKey(e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest("g[tabindex]")) { e.preventDefault(); e.target.closest("g[tabindex]").dispatchEvent(new MouseEvent("click", { bubbles: true })); }
    }
    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKey);
    if (mode === "practice") newTask(); else render();
    return function () { root.removeEventListener("click", onClick); root.removeEventListener("keydown", onKey); };
  }

  IB.registerWidget("cladogram", {
    title: L("Read a cladogram", "分岐図を読む", "閱讀支序圖", "분지도 읽기"),
    mount: function (el, ctx) { return mount(el, ctx, "read"); }
  });
  IB.registerWidget("cladogram-build", {
    title: L("Build a cladogram", "分岐図を作る", "建構支序圖", "분지도 만들기"),
    mount: function (el, ctx) { return mount(el, ctx, "build"); }
  });
})();

