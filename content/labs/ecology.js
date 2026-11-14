/* Guided lab: Ecology (B4.2 ecological niches; link to A4.1 adaptive radiation). Format: see SPEC.md "Labs (v2)". */
IB.registerLab({
  id: "ecology",
  order: 7,
  theme: "B",
  topics: ["B4.2", "A4.1"],
  title: { en: "Ecology", ja: "生態学", zh: "生態學" },
  intro: {
    en: "Three short steps on ecological niches: the fundamental and realized niche, the outcomes of competition, and how vacant niches drive adaptive radiation (AHL). Subtopic B4.2.",
    ja: "生態的ニッチ (ecological niche) について3つの短いステップで学びます。基本ニッチと実現ニッチ、競争の結果、空いたニッチが適応放散を促すしくみ (AHL) です。サブトピックB4.2です。",
    zh: "三個簡短的步驟認識生態位 (ecological niche)：基本生態位與實現生態位、競爭的結果，以及空缺生態位如何推動適應輻射 (AHL)。涵蓋子課題 B4.2。"
  },
  steps: [
    {
      title: { en: "Fundamental and realized niches", ja: "基本ニッチと実現ニッチ", zh: "基本生態位與實現生態位" },
      ahl: false,
      refs: ["B4.2.1", "B4.2.12"],
      intro: {
        en: "<p>An ecological niche is the role of a species in an ecosystem. It includes the biotic and abiotic interactions that affect its growth, survival and reproduction, and how it obtains food. The fundamental niche is the potential niche, set by the species' adaptations and tolerance limits. The realized niche is the actual niche, when the species competes with others.</p>",
        ja: "<p>生態的ニッチとは、生態系の中での種の役割です。成長・生存・繁殖に影響する生物的および非生物的な相互作用と、食物の得方を含みます。基本ニッチ (fundamental niche) は、種の適応と耐性の限界で決まる潜在的なニッチです。実現ニッチ (realized niche) は、ほかの種と競争しているときの実際のニッチです。</p>",
        zh: "<p>生態位是一個物種在生態系統中的角色，包括影響其生長、生存和繁殖的生物與非生物相互作用，以及它如何獲取食物。基本生態位 (fundamental niche) 是由物種的適應特徵和耐受限度決定的潛在生態位。實現生態位 (realized niche) 是物種與其他物種競爭時實際佔有的生態位。</p>"
      },
      widget: "niche",
      options: {},
      task: {
        en: "Species A's fundamental niche is the dashed curve. Compare it with A's realized niche at the starting settings, and read the percentage. Then press Remove species B. What happens to A's realized niche, and why?",
        ja: "種Aの基本ニッチは破線の曲線です。初期設定でAの実現ニッチと比べ、割合を読み取りましょう。次に「種Bを取り除く」を押します。Aの実現ニッチはどうなり、それはなぜでしょう。",
        zh: "物種 A 的基本生態位是虛線曲線。在初始設定下，把它與 A 的實現生態位比較，並讀出百分比。然後按「移除物種 B」：A 的實現生態位會怎樣？為甚麼？"
      }
    },
    {
      title: { en: "Competition and competitive exclusion", ja: "競争と競争的排除", zh: "競爭與競爭排斥" },
      ahl: false,
      refs: ["B4.2.12", "B4.2.13"],
      intro: {
        en: "<p>When two species compete for the same resources, there are two possible outcomes. One species may be eliminated (competitive exclusion). Or both may be restricted to a part of their fundamental niche. Because competition limits where species can live, each species ends up with its own unique niche.</p>",
        ja: "<p>2つの種が同じ資源をめぐって競争すると、結果は2通りあります。一方の種が排除される (競争的排除、competitive exclusion) か、両方が基本ニッチの一部に限られるかです。競争は種が生きられる場所を制限するので、最終的に各種は固有のニッチをもちます。</p>",
        zh: "<p>當兩個物種競爭相同的資源時，可能出現兩種結果：其中一個物種被淘汰（競爭排斥 competitive exclusion），或是兩者都被限制在其基本生態位的一部分。由於競爭限制了物種可以生活的地方，每個物種最終都擁有自己獨特的生態位。</p>"
      },
      widget: "niche",
      options: {},
      task: {
        en: "Choose Equally matched and raise the competition strength: describe what happens to both realized niches. Then choose B is the stronger competitor and set both niche overlap and competition to 100%. What happens to species A?",
        ja: "「互角」を選んで競争の強さを上げ、両方の実現ニッチがどうなるか説明しましょう。次に「Bが強い競争者」を選び、ニッチの重なりと競争の強さをどちらも100%にします。種Aはどうなるでしょう。",
        zh: "選擇「勢均力敵」並提高競爭強度，描述兩個實現生態位的變化。然後選擇「B 是較強的競爭者」，把生態位重疊和競爭強度都設為 100%。物種 A 會怎樣？"
      }
    },
    {
      title: { en: "Vacant niches and adaptive radiation", ja: "空いたニッチと適応放散", zh: "空缺生態位與適應輻射" },
      ahl: true,
      refs: ["A4.1.9", "B4.2.1"],
      intro: {
        en: "<p>Where niches are vacant, such as on a newly formed island, an ancestral species can spread into them. In each niche natural selection favours different traits. Adaptive radiation gives several closely related species that coexist without competing, because each has its own niche. This increases biodiversity.</p>",
        ja: "<p>新しくできた島のようにニッチが空いている場所では、祖先種がそこへ広がることができます。それぞれのニッチでは自然選択が異なる形質を有利にします。適応放散によって近縁な複数の種が生じ、それぞれが自分のニッチをもつので、競争せずに共存できます。これで生物多様性が高まります。</p>",
        zh: "<p>在有空缺生態位的地方（例如新形成的島嶼），祖先物種可以擴散進去。在每個生態位中，自然選擇有利於不同的特徵。適應輻射產生數個近緣物種，由於各自有自己的生態位，它們能共存而不互相競爭，生物多樣性因而增加。</p>"
      },
      widget: "speciation-radiation",
      options: {},
      task: {
        en: "Step through the four stages. Say what a vacant niche is. Link this step to the competitive exclusion step: why can the new species coexist?",
        ja: "4つの段階を順に見ましょう。空いたニッチとは何か答えます。この結果を競争的排除のステップと結びつけて、新しい種が共存できる理由を考えましょう。",
        zh: "逐步查看四個階段。說出甚麼是空缺生態位。把這一步與競爭排斥那一步連起來：為何新物種能共存？"
      }
    }
  ]
});
