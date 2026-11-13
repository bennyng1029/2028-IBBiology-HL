/* A2.3 Viruses — AHL-only subtopic. Content written from the IB guide (first assessment 2025). */
(function () {
  const T = (en, ja, zh) => ({ en, ja, zh });
  const sections = [
    {
      ref: "A2.3.1", ahl: true,
      heading: T("Structural features common to viruses", "ウイルスに共通する構造的特徴", "病毒共有的結構特徵"),
      body: T(
        `<p>Viruses are very different from each other, so only a few features are shared by <em>all</em> of them:</p>
<ul>
<li><strong>Small, fixed size.</strong> Viruses are much smaller than cells (most are tens to a few hundred nanometres across) and each type has a fixed size. They do not grow.</li>
<li><strong>Nucleic acid as genetic material</strong>: either DNA or RNA.</li>
<li>A <strong>capsid</strong>: a protein coat that surrounds and protects the nucleic acid.</li>
<li><strong>No cytoplasm.</strong></li>
<li><strong>Few or no enzymes.</strong> A virus cannot carry out metabolism by itself.</li>
</ul>
<p>A virus has no plasma membrane of its own, no ribosomes and no organelles. This is one reason viruses are considered non-living (see A2.1.2).</p>`,
        `<p>ウイルスは互いにとても違うため、<em>すべて</em>のウイルスに共通する特徴は多くありません。</p>
<ul>
<li><strong>小さく一定の大きさ</strong>：細胞よりはるかに小さく（多くは数十〜数百ナノメートル）、種類ごとに大きさが決まっています。成長はしません。</li>
<li>遺伝物質として<strong>核酸</strong> (nucleic acid)：DNAまたはRNA。</li>
<li><strong>カプシド</strong> (capsid)：核酸を囲んで守るタンパク質の殻。</li>
<li><strong>細胞質がない</strong>。</li>
<li><strong>酵素がほとんど、または全くない</strong>。自力では代謝できません。</li>
</ul>
<p>ウイルスには独自の細胞膜もリボソームも細胞小器官もありません。これがウイルスが非生物とされる理由の一つです（A2.1.2参照）。</p>`,
        `<p>病毒彼此差異很大，所以<em>所有</em>病毒共有的特徵不多：</p>
<ul>
<li><strong>細小而大小固定</strong>：病毒比細胞小得多（多數闊度為數十至數百納米），而且每種病毒的大小是固定的，不會生長。</li>
<li>以<strong>核酸</strong> (nucleic acid) 作遺傳物質：DNA 或 RNA。</li>
<li><strong>衣殼</strong> (capsid)：包圍並保護核酸的蛋白質外殼。</li>
<li><strong>沒有細胞質</strong>。</li>
<li><strong>幾乎沒有或完全沒有酶</strong>，所以不能自行進行新陳代謝。</li>
</ul>
<p>病毒沒有自己的質膜、核糖體或胞器。這是病毒被視為非生物的原因之一（見 A2.1.2）。</p>`)
    },
    {
      ref: "A2.3.2", ahl: true,
      heading: T("Diversity of structure in viruses", "ウイルスの構造の多様性", "病毒結構的多樣性"),
      body: T(
        `<p>Viruses are highly diverse in shape and structure. They vary in:</p>
<ul>
<li><strong>Genetic material</strong>: DNA or RNA, and either <strong>single-stranded</strong> or <strong>double-stranded</strong>.</li>
<li><strong>Envelope</strong>: some viruses are <strong>enveloped</strong>. They have an outer layer taken from the membrane of the host cell (with viral proteins added). Others are <strong>not enveloped</strong>; their capsid is the outer surface.</li>
<li><strong>Shape</strong>: for example a head with a tail, or a roughly spherical particle.</li>
</ul>
<p>The three examples you need:</p>
<table>
<tr><th>Virus</th><th>Genetic material</th><th>Envelope?</th><th>Other points</th></tr>
<tr><td>Bacteriophage lambda</td><td>double-stranded DNA</td><td>no</td><td>infects bacteria (<em>E. coli</em>); protein head (capsid) and tail</td></tr>
<tr><td>Coronaviruses</td><td>single-stranded RNA</td><td>yes</td><td>spike proteins stick out of the envelope</td></tr>
<tr><td>HIV</td><td>single-stranded RNA</td><td>yes</td><td>infects human immune cells</td></tr>
</table>`,
        `<p>ウイルスは形と構造がとても多様です。次の点が異なります。</p>
<ul>
<li><strong>遺伝物質</strong>：DNAかRNAか、さらに<strong>一本鎖</strong> (single-stranded) か<strong>二本鎖</strong> (double-stranded) か。</li>
<li><strong>エンベロープ</strong> (envelope)：<strong>エンベロープをもつ</strong>ウイルスは、宿主細胞の膜に由来する外層（ウイルスのタンパク質が加わる）をもちます。<strong>もたない</strong>ウイルスは、カプシドが外表面です。</li>
<li><strong>形</strong>：頭部と尾部をもつもの、ほぼ球形のものなど。</li>
</ul>
<p>知っておくべき3つの例：</p>
<table>
<tr><th>ウイルス</th><th>遺伝物質</th><th>エンベロープ</th><th>その他</th></tr>
<tr><td>バクテリオファージλ (bacteriophage lambda)</td><td>二本鎖DNA</td><td>なし</td><td>細菌（大腸菌）に感染。タンパク質の頭部（カプシド）と尾部をもつ</td></tr>
<tr><td>コロナウイルス (coronaviruses)</td><td>一本鎖RNA</td><td>あり</td><td>エンベロープからスパイクタンパク質が突き出ている</td></tr>
<tr><td>HIV</td><td>一本鎖RNA</td><td>あり</td><td>ヒトの免疫細胞に感染</td></tr>
</table>`,
        `<p>病毒的形狀和結構非常多樣，差異包括：</p>
<ul>
<li><strong>遺傳物質</strong>：DNA 或 RNA，而且可以是<strong>單鏈</strong> (single-stranded) 或<strong>雙鏈</strong> (double-stranded)。</li>
<li><strong>包膜</strong> (envelope)：<strong>有包膜</strong>的病毒外層來自宿主細胞的膜（並加入病毒蛋白）；<strong>無包膜</strong>的病毒，衣殼就是外表面。</li>
<li><strong>形狀</strong>：例如有頭部和尾部，或接近球形。</li>
</ul>
<p>需要認識的三個例子：</p>
<table>
<tr><th>病毒</th><th>遺傳物質</th><th>有包膜？</th><th>其他要點</th></tr>
<tr><td>λ噬菌體 (bacteriophage lambda)</td><td>雙鏈 DNA</td><td>沒有</td><td>感染細菌（大腸桿菌）；有蛋白質頭部（衣殼）和尾部</td></tr>
<tr><td>冠狀病毒 (coronaviruses)</td><td>單鏈 RNA</td><td>有</td><td>包膜上伸出刺突蛋白</td></tr>
<tr><td>HIV</td><td>單鏈 RNA</td><td>有</td><td>感染人類免疫細胞</td></tr>
</table>`)
    },
    {
      ref: "A2.3.3", ahl: true,
      heading: T("The lytic cycle (bacteriophage lambda)", "溶菌サイクル（λファージ）", "裂解週期（λ噬菌體）"),
      body: T(
        `<p>A virus cannot do anything by itself. It relies on a <strong>host cell</strong> for <strong>energy supply</strong> (ATP), <strong>nutrition</strong> (nucleotides and amino acids), <strong>protein synthesis</strong> (ribosomes, tRNA) and other life functions. In the <strong>lytic cycle</strong> the virus uses the host to make many new viruses, and the host cell is destroyed. Phases for bacteriophage lambda infecting <em>E. coli</em>:</p>
<ol>
<li><strong>Attachment.</strong> The phage tail binds to a specific receptor on the bacterial surface.</li>
<li><strong>Injection.</strong> The phage injects its DNA into the bacterium. The empty capsid stays outside.</li>
<li><strong>Replication and protein synthesis.</strong> Viral genes take control. The host's enzymes, ribosomes, ATP and building blocks are used to copy the viral DNA and to make capsid and tail proteins.</li>
<li><strong>Assembly.</strong> New phage heads and tails are made and viral DNA is packaged into the capsids.</li>
<li><strong>Lysis and release.</strong> The host cell bursts open (<em>lyses</em>) and releases many new phages, which go on to infect other bacteria.</li>
</ol>`,
        `<p>ウイルスは単独では何もできません。<strong>エネルギー供給</strong> (ATP)、<strong>栄養</strong> (ヌクレオチドとアミノ酸)、<strong>タンパク質合成</strong> (リボソームやtRNA) などの生命機能を<strong>宿主細胞</strong> (host cell) に頼ります。<strong>溶菌サイクル</strong> (lytic cycle) では、ウイルスが宿主を使って多数の新しいウイルスを作り、宿主細胞は壊されます。λファージが大腸菌に感染する場合の段階は次のとおりです。</p>
<ol>
<li><strong>吸着</strong> (attachment)：ファージの尾部が細菌表面の特定の受容体に結合します。</li>
<li><strong>注入</strong> (injection)：ファージがDNAを細菌内に注入します。空のカプシドは外に残ります。</li>
<li><strong>複製とタンパク質合成</strong>：ウイルスの遺伝子が主導権を握ります。宿主の酵素・リボソーム・ATP・材料を使い、ウイルスDNAを複製し、カプシドや尾部のタンパク質を作ります。</li>
<li><strong>組み立て</strong> (assembly)：新しい頭部と尾部が作られ、ウイルスDNAがカプシドに詰められます。</li>
<li><strong>溶菌と放出</strong> (lysis)：宿主細胞が破裂し、多数の新しいファージが放出されて、ほかの細菌に感染します。</li>
</ol>`,
        `<p>病毒自己甚麼也做不到。它依賴<strong>宿主細胞</strong> (host cell) 提供<strong>能量</strong> (ATP)、<strong>營養</strong> (核苷酸和氨基酸)、<strong>蛋白質合成</strong> (核糖體、tRNA) 及其他生命功能。在<strong>裂解週期</strong> (lytic cycle) 中，病毒利用宿主製造大量新病毒，宿主細胞被破壞。λ噬菌體感染大腸桿菌的各階段如下：</p>
<ol>
<li><strong>吸附</strong> (attachment)：噬菌體的尾部與細菌表面的特定受體結合。</li>
<li><strong>注入</strong> (injection)：噬菌體把 DNA 注入細菌內，空的衣殼留在外面。</li>
<li><strong>複製和蛋白質合成</strong>：病毒基因接管控制。利用宿主的酶、核糖體、ATP 和原料，複製病毒 DNA，並製造衣殼和尾部蛋白。</li>
<li><strong>組裝</strong> (assembly)：形成新的噬菌體頭部和尾部，病毒 DNA 被包入衣殼。</li>
<li><strong>裂解和釋放</strong> (lysis)：宿主細胞破裂，釋出大量新噬菌體，再去感染其他細菌。</li>
</ol>`),
      examTip: T("Name lambda, and say what the host provides. “The virus uses the host cell's ribosomes and ATP” earns marks; “the virus reproduces” alone does not.",
        "λファージを明記し、宿主が何を提供するかを書きます。「ウイルスは宿主のリボソームとATPを使う」は得点になりますが、「ウイルスが増える」だけでは不十分です。",
        "要寫出 λ 噬菌體，並說明宿主提供甚麼。「病毒利用宿主的核糖體和 ATP」可得分，只寫「病毒繁殖」則不足。")
    },
    {
      ref: "A2.3.4", ahl: true,
      heading: T("The lysogenic cycle (bacteriophage lambda)", "溶原サイクル（λファージ）", "溶原週期（λ噬菌體）"),
      body: T(
        `<p>Bacteriophage lambda can also follow a different path, the <strong>lysogenic cycle</strong>, in which the host cell is <em>not</em> destroyed straight away:</p>
<ol>
<li>Attachment and injection of the DNA happen as in the lytic cycle.</li>
<li>The viral DNA is <strong>integrated into the bacterial chromosome</strong>. In this form it is called a <strong>prophage</strong>.</li>
<li>Genes for the lytic cycle are switched off. The prophage is copied along with the bacterial DNA every time the bacterium divides, so it is passed to all daughter cells. No new viruses are made.</li>
<li>Later, a trigger such as <strong>stress or DNA damage</strong> can make the prophage leave the chromosome and start the <strong>lytic cycle</strong>.</li>
</ol>
<table>
<tr><th></th><th>Lytic</th><th>Lysogenic</th></tr>
<tr><td>Viral DNA</td><td>free in the cytoplasm, copied many times</td><td>integrated into host chromosome (prophage)</td></tr>
<tr><td>New viruses made?</td><td>yes, immediately</td><td>no (until switch to lytic)</td></tr>
<tr><td>Host cell</td><td>lysed</td><td>survives and divides</td></tr>
</table>`,
        `<p>λファージは別の経路、<strong>溶原サイクル</strong> (lysogenic cycle) をとることもあります。この場合、宿主細胞はすぐには壊されません。</p>
<ol>
<li>吸着とDNAの注入は溶菌サイクルと同じです。</li>
<li>ウイルスDNAは<strong>細菌の染色体に組み込まれ</strong> (integrated)、この状態を<strong>プロファージ</strong> (prophage) といいます。</li>
<li>溶菌サイクルの遺伝子は働きが止められます。プロファージは細菌が分裂するたびに細菌DNAと一緒に複製されるため、すべての娘細胞に伝わります。新しいウイルスは作られません。</li>
<li>のちに<strong>ストレスやDNA損傷</strong>などが引き金となり、プロファージが染色体から離れて<strong>溶菌サイクル</strong>を始めることがあります。</li>
</ol>
<table>
<tr><th></th><th>溶菌</th><th>溶原</th></tr>
<tr><td>ウイルスDNA</td><td>細胞質中にあり何度も複製される</td><td>宿主染色体に組み込まれる（プロファージ）</td></tr>
<tr><td>新しいウイルスを作る？</td><td>すぐ作る</td><td>作らない（溶菌に切り替わるまで）</td></tr>
<tr><td>宿主細胞</td><td>溶菌される</td><td>生き残り、分裂する</td></tr>
</table>`,
        `<p>λ噬菌體也可以走另一條途徑，即<strong>溶原週期</strong> (lysogenic cycle)，宿主細胞<em>不會</em>立即被破壞：</p>
<ol>
<li>吸附和注入 DNA 的步驟與裂解週期相同。</li>
<li>病毒 DNA <strong>整合到細菌染色體中</strong> (integrated)，這種形式稱為<strong>原噬菌體</strong> (prophage)。</li>
<li>裂解週期的基因被關閉。細菌每次分裂時，原噬菌體會隨細菌 DNA 一同複製，因此傳給所有子細胞，並不製造新病毒。</li>
<li>其後，<strong>壓力或 DNA 損傷</strong>等觸發因素可令原噬菌體離開染色體，開始<strong>裂解週期</strong>。</li>
</ol>
<table>
<tr><th></th><th>裂解</th><th>溶原</th></tr>
<tr><td>病毒 DNA</td><td>游離在細胞質，大量複製</td><td>整合到宿主染色體（原噬菌體）</td></tr>
<tr><td>製造新病毒？</td><td>是，立即製造</td><td>否（直至轉為裂解）</td></tr>
<tr><td>宿主細胞</td><td>被裂解</td><td>存活並分裂</td></tr>
</table>`)
    },
    {
      ref: "A2.3.5", ahl: true,
      heading: T("Evidence for several origins of viruses", "ウイルスが複数回起源したことを示す証拠", "病毒有多個起源的證據"),
      body: T(
        `<p>Where did viruses come from? There is no evidence that all viruses share one ancestor. The evidence points to <strong>several origins</strong>, from other organisms:</p>
<ul>
<li><strong>Diversity.</strong> Viruses differ greatly (DNA or RNA, single- or double-stranded, enveloped or not, many shapes). Such different types suggest several possible origins rather than one.</li>
<li><strong>Convergent evolution.</strong> All viruses live by an extreme form of <strong>obligate parasitism</strong>: they can only reproduce inside a host. Strong, similar selection pressure on separate lineages could have produced the same features independently, such as small size, a capsid, and loss of metabolism. So the structural features they share could be <strong>convergent evolution</strong>, not proof of a single ancestor.</li>
<li><strong>The genetic code is shared</strong> between viruses and living organisms. Viruses use the host's ribosomes and the same code, which links them to cellular life.</li>
</ul>`,
        `<p>ウイルスはどこから来たのでしょうか。すべてのウイルスが1つの祖先を共有する証拠はありません。証拠は、ほかの生物に由来する<strong>複数の起源</strong>を示唆します。</p>
<ul>
<li><strong>多様性。</strong>ウイルスは大きく異なります（DNAかRNAか、一本鎖か二本鎖か、エンベロープの有無、さまざまな形）。これほど違う型があることは、起源が1つではなく複数あった可能性を示します。</li>
<li><strong>収れん進化</strong> (convergent evolution)。すべてのウイルスは極端な<strong>偏性寄生</strong> (obligate parasitism) をして生きており、宿主内でしか増殖できません。別々の系統に強い似た選択圧がかかると、小さいこと・カプシドをもつこと・代謝を失うことなど、同じ特徴が独立に生じえます。したがって共通の構造的特徴は、単一の祖先の証拠ではなく<strong>収れん進化</strong>かもしれません。</li>
<li><strong>遺伝暗号が共通</strong>：ウイルスは宿主のリボソームと同じ遺伝暗号を使い、細胞生物とつながりがあることを示します。</li>
</ul>`,
        `<p>病毒從哪裏來？沒有證據顯示所有病毒共有同一個祖先。證據指向<strong>多個起源</strong>，來自其他生物：</p>
<ul>
<li><strong>多樣性。</strong>病毒差異很大（DNA 或 RNA、單鏈或雙鏈、有或無包膜、多種形狀）。這麼不同的類型，顯示起源可能不止一個。</li>
<li><strong>趨同演化</strong> (convergent evolution)。所有病毒都以極端的<strong>專性寄生</strong> (obligate parasitism) 方式生存，只能在宿主內繁殖。對不同譜系施加相似而強烈的選擇壓力，可能令它們各自獨立演化出相同特徵，例如細小、有衣殼和失去新陳代謝。所以它們共有的結構特徵可能只是<strong>趨同演化</strong>，並非單一祖先的證據。</li>
<li><strong>遺傳密碼是共通的</strong>：病毒使用宿主的核糖體和相同的密碼，顯示它們與細胞生物有關。</li>
</ul>`)
    },
    {
      ref: "A2.3.6", ahl: true,
      heading: T("Rapid evolution in viruses: influenza and HIV", "ウイルスの急速な進化：インフルエンザとHIV", "病毒的快速演化：流感與 HIV"),
      body: T(
        `<p>Some viruses evolve very fast. Reasons:</p>
<ul>
<li><strong>High mutation rate.</strong> Many viruses (including influenza and HIV) have RNA genomes. The enzymes that copy RNA (RNA polymerase; in HIV, reverse transcriptase) make many copying errors and have no proofreading, so mutations arise often.</li>
<li><strong>Very fast reproduction in huge numbers.</strong> One infected cell makes many new viruses within hours, so there are many generations and many mutations.</li>
<li><strong>Strong natural selection.</strong> Immune responses, vaccines and drugs favour any mutant that escapes them, and these spread.</li>
<li><strong>Mixing of genes.</strong> The influenza genome is in several separate RNA segments. If two strains infect one cell, segments can be mixed into new combinations.</li>
</ul>
<p><strong>Influenza.</strong> Mutations change the surface proteins of the virus, so antibodies made after an earlier infection or vaccination may no longer recognize it. <em>Consequence:</em> people can be infected again, and the flu vaccine has to be updated regularly.</p>
<p><strong>HIV.</strong> HIV mutates so fast that one patient carries a mixture of different variants. Under treatment with a single drug, variants resistant to it are selected and spread. <em>Consequences:</em> treatment uses a <strong>combination of several drugs</strong>, because it is far less likely that one virus resists all of them; a vaccine is very difficult to make; and the infection is hard to clear.</p>`,
        `<p>ウイルスの中には非常に速く進化するものがあります。理由は次のとおりです。</p>
<ul>
<li><strong>高い突然変異率。</strong>インフルエンザやHIVなど多くのウイルスはRNAゲノムをもちます。RNAを複製する酵素（RNAポリメラーゼ、HIVでは逆転写酵素）は複製ミスが多く、校正機能がないため、変異が頻繁に起こります。</li>
<li><strong>多数が非常に速く増える。</strong>1個の感染細胞が数時間で多数の新しいウイルスを作るため、世代数が多く変異も多くなります。</li>
<li><strong>強い自然選択。</strong>免疫応答・ワクチン・薬を逃れる変異体が有利となり、広がります。</li>
<li><strong>遺伝子の混合。</strong>インフルエンザのゲノムは複数の別々のRNA断片に分かれています。2つの株が1つの細胞に感染すると、断片が混ざって新しい組み合わせができます。</li>
</ul>
<p><strong>インフルエンザ。</strong>変異でウイルスの表面タンパク質が変わるため、以前の感染やワクチンでできた抗体が認識できなくなることがあります。<em>結果：</em>再び感染することがあり、インフルエンザワクチンは定期的に更新する必要があります。</p>
<p><strong>HIV。</strong>HIVはあまりに速く変異するため、1人の患者の体内にさまざまな変異体が混在します。1種類の薬だけで治療すると、その薬に耐性をもつ変異体が選択されて広がります。<em>結果：</em>治療は<strong>複数の薬の併用</strong>で行われます。1つのウイルスがすべての薬に耐性をもつ確率ははるかに低いからです。また、ワクチンの開発は非常に難しく、感染を排除するのも困難です。</p>`,
        `<p>有些病毒演化得非常快，原因包括：</p>
<ul>
<li><strong>突變率高。</strong>許多病毒（包括流感病毒和 HIV）的基因組是 RNA。複製 RNA 的酶（RNA 聚合酶；HIV 則為逆轉錄酶）複製時出錯多，而且沒有校對功能，所以常出現突變。</li>
<li><strong>大量快速繁殖。</strong>一個受感染的細胞在數小時內製造大量新病毒，世代多，突變也多。</li>
<li><strong>強烈的自然選擇。</strong>免疫反應、疫苗和藥物會有利於能逃避它們的突變株，使其擴散。</li>
<li><strong>基因混合。</strong>流感病毒的基因組分成幾段獨立的 RNA。如果兩個毒株感染同一個細胞，片段可混合成新的組合。</li>
</ul>
<p><strong>流感。</strong>突變令病毒的表面蛋白改變，以前感染或接種疫苗後產生的抗體可能不再認得它。<em>後果：</em>人可以再次感染，流感疫苗必須定期更新。</p>
<p><strong>HIV。</strong>HIV 突變極快，一名患者體內同時有多種不同變異株。若只用一種藥物治療，對該藥有抗藥性的變異株會被選擇並擴散。<em>後果：</em>治療採用<strong>多種藥物合併使用</strong>，因為一個病毒同時抵抗所有藥物的機會小得多；此外疫苗極難研製，感染也難以根除。</p>`),
      examTip: T("Give the reason (e.g. no proofreading, fast reproduction, selection) and then the consequence for treatment (new vaccines, drug resistance, combination therapy).",
        "理由（校正機能がない、増殖が速い、選択など）を書き、続けて治療への影響（ワクチン更新、薬剤耐性、併用療法）を書きます。",
        "先寫原因（沒有校對、繁殖快、選擇等），再寫對治療的影響（更新疫苗、抗藥性、合併療法）。")
    },
  ];
  const questions = [
        { id: "a2-3-q01", type: "mcq", ahl: true, difficulty: 1, ref: "A2.3.1", paper: "1A",
      stem: T("Which feature is found in all viruses?", "すべてのウイルスに見られる特徴はどれですか。", "哪項特徵見於所有病毒？"),
      options: [
        T("Ribosomes", "リボソーム", "核糖體"),
        T("A capsid made of protein", "タンパク質でできたカプシド", "由蛋白質構成的衣殼"),
        T("An envelope taken from the host cell membrane", "宿主細胞の膜に由来するエンベロープ", "取自宿主細胞膜的包膜"),
        T("Cytoplasm", "細胞質", "細胞質")],
      answer: 1,
      explanation: T("All viruses have nucleic acid inside a protein capsid. Only some viruses are enveloped (C is not universal). Viruses have no ribosomes and no cytoplasm.",
        "すべてのウイルスは、タンパク質のカプシドの中に核酸をもちます。エンベロープをもつのは一部だけです（Cは共通ではない）。ウイルスにはリボソームも細胞質もありません。",
        "所有病毒都有蛋白質衣殼包着核酸。只有部分病毒有包膜（C 並非普遍）。病毒沒有核糖體，也沒有細胞質。") },
    { id: "a2-3-q02", type: "mcq", ahl: true, difficulty: 1, ref: "A2.3.2", paper: "1A",
      stem: T("Which statement about the genetic material of viruses is correct?", "ウイルスの遺伝物質について正しい記述はどれですか。", "關於病毒遺傳物質，哪項正確？"),
      options: [
        T("It is always double-stranded DNA.", "常に二本鎖DNAである。", "永遠是雙鏈 DNA。"),
        T("It is always single-stranded RNA.", "常に一本鎖RNAである。", "永遠是單鏈 RNA。"),
        T("It may be DNA or RNA, and either single- or double-stranded.", "DNAまたはRNAで、一本鎖でも二本鎖でもよい。", "可以是 DNA 或 RNA，亦可以是單鏈或雙鏈。"),
        T("It is protein, because viruses have a capsid.", "カプシドがあるので、遺伝物質はタンパク質である。", "因為有衣殼，所以遺傳物質是蛋白質。")],
      answer: 2,
      explanation: T("Viruses are diverse: lambda has double-stranded DNA while coronaviruses and HIV have single-stranded RNA. D confuses the capsid (a protein coat) with the genetic material, which is always a nucleic acid.",
        "ウイルスは多様で、λファージは二本鎖DNA、コロナウイルスとHIVは一本鎖RNAをもちます。Dはカプシド（タンパク質の殻）と遺伝物質を混同しています。遺伝物質は必ず核酸です。",
        "病毒很多樣：λ噬菌體是雙鏈 DNA，冠狀病毒和 HIV 是單鏈 RNA。D 把衣殼（蛋白質外殼）和遺傳物質混淆了，遺傳物質必定是核酸。") },
    { id: "a2-3-q03", type: "match", ahl: true, difficulty: 1, ref: "A2.3.1–A2.3.4", paper: "1A",
      stem: T("Match each term to its description.", "各用語を説明と対応させなさい。", "把每個詞彙與其描述配對。"),
      pairs: [
        { left: T("Capsid", "カプシド", "衣殼"), right: T("Protein coat around the viral nucleic acid", "ウイルス核酸を囲むタンパク質の殻", "包圍病毒核酸的蛋白質外殼") },
        { left: T("Envelope", "エンベロープ", "包膜"), right: T("Outer layer derived from the host cell membrane (in some viruses)", "宿主細胞の膜に由来する外層（一部のウイルス）", "來自宿主細胞膜的外層（部分病毒有）") },
        { left: T("Prophage", "プロファージ", "原噬菌體"), right: T("Viral DNA integrated into the host chromosome", "宿主の染色体に組み込まれたウイルスDNA", "整合到宿主染色體中的病毒 DNA") },
        { left: T("Lysis", "溶菌", "裂解"), right: T("Bursting of the host cell, releasing new viruses", "宿主細胞が破裂して新しいウイルスが放出されること", "宿主細胞破裂並釋出新病毒") },
        { left: T("Obligate parasite", "偏性寄生者", "專性寄生物"), right: T("Can reproduce only inside a host cell", "宿主細胞内でしか増殖できない", "只能在宿主細胞內繁殖") }],
      explanation: T("These five terms are the vocabulary of A2.3.1 to A2.3.5.", "この5つはA2.3.1〜A2.3.5の基本用語です。", "這五個詞彙是 A2.3.1 至 A2.3.5 的基本詞彙。") },
    { id: "a2-3-q04", type: "mcq", ahl: true, difficulty: 2, ref: "A2.3.3", paper: "1A",
      stem: T("During the lytic cycle of bacteriophage lambda, which of the following is supplied by the host bacterium rather than the virus?",
        "λファージの溶菌サイクルで、ウイルスではなく宿主の細菌が提供するものはどれですか。",
        "在 λ 噬菌體的裂解週期中，下列哪項由宿主細菌而非病毒提供？"),
      options: [
        T("The genetic instructions for the capsid proteins", "カプシドタンパク質の遺伝情報", "衣殼蛋白的遺傳指令"),
        T("The ribosomes and ATP used for protein synthesis", "タンパク質合成に使うリボソームとATP", "用於蛋白質合成的核糖體和 ATP"),
        T("The tail fibres used to attach", "吸着に使う尾部の繊維", "用來吸附的尾纖維"),
        T("The viral DNA", "ウイルスDNA", "病毒 DNA")],
      answer: 1,
      explanation: T("The virus brings only its nucleic acid (which carries the instructions); the host supplies the machinery and energy. A and D are carried by the virus; C is part of the phage itself.",
        "ウイルスが持ち込むのは核酸（遺伝情報）だけで、装置とエネルギーは宿主が提供します。AとDはウイルスがもち、Cはファージ自身の構造です。",
        "病毒只帶來核酸（載有指令），機器和能量由宿主提供。A 和 D 由病毒帶來，C 是噬菌體本身的結構。") },
    { id: "a2-3-q05", type: "order", ahl: true, difficulty: 1, ref: "A2.3.3", paper: "1A",
      stem: T("Put the stages of the lytic cycle of bacteriophage lambda into the correct order.", "λファージの溶菌サイクルの段階を正しい順に並べなさい。", "把 λ 噬菌體裂解週期的各階段按正確次序排列。"),
      items: [
        T("The phage tail attaches to a receptor on the bacterium", "ファージの尾部が細菌の受容体に吸着する", "噬菌體尾部附着在細菌的受體上"),
        T("The phage injects its DNA into the bacterium", "ファージがDNAを細菌内に注入する", "噬菌體把 DNA 注入細菌"),
        T("The host's machinery copies viral DNA and makes viral proteins", "宿主の装置でウイルスDNAが複製され、ウイルスのタンパク質が作られる", "利用宿主的機器複製病毒 DNA 並製造病毒蛋白"),
        T("New phages are assembled", "新しいファージが組み立てられる", "組裝新的噬菌體"),
        T("The cell lyses and releases the new phages", "細胞が溶菌して新しいファージが放出される", "細胞裂解並釋出新噬菌體")],
      explanation: T("The virus must attach and inject its DNA before it can use the host's machinery; new phages can only be released once assembled.",
        "吸着と注入のあとで宿主の装置を使え、組み立てが終わってから放出されます。",
        "病毒必須先吸附和注入 DNA，才能利用宿主的機器；組裝完成後才能釋放。") },
    { id: "a2-3-q06", type: "short", ahl: true, difficulty: 2, ref: "A2.3.3", paper: "2", commandTerm: "Describe", marks: 5,
      stem: T("Describe the lytic cycle of bacteriophage lambda.", "λファージの溶菌サイクルを説明（記述）しなさい。", "描述 λ 噬菌體的裂解週期。"),
      markscheme: [
        T("phage attaches to (a receptor on) the bacterial cell surface;", "ファージが細菌の細胞表面（の受容体）に吸着する;", "噬菌體附着於細菌細胞表面（的受體）;"),
        T("injects its DNA into the bacterium (capsid stays outside);", "DNAを細菌内に注入する（カプシドは外に残る）;", "把 DNA 注入細菌（衣殼留在外面）;"),
        T("viral DNA is replicated using the host's enzymes / nucleotides / energy (ATP);", "宿主の酵素・ヌクレオチド・エネルギー(ATP)を使ってウイルスDNAが複製される;", "利用宿主的酶／核苷酸／能量 (ATP) 複製病毒 DNA;"),
        T("viral proteins (capsid, tail) are made by host ribosomes;", "ウイルスのタンパク質（カプシド・尾部）が宿主のリボソームで作られる;", "病毒蛋白（衣殼、尾部）由宿主核糖體製造;"),
        T("new phages are assembled;", "新しいファージが組み立てられる;", "組裝新噬菌體;"),
        T("host cell bursts / lysis, releasing many new phages.", "宿主細胞が破裂（溶菌）し、多数の新しいファージが放出される。", "宿主細胞破裂（裂解），釋出大量新噬菌體。")],
      modelAnswer: T("The phage tail attaches to the bacterium and the phage injects its DNA. Using the host's enzymes, nucleotides and ATP the viral DNA is copied, and host ribosomes make the viral capsid and tail proteins. New phages are assembled. The bacterial cell then lyses, releasing many new phages.",
        "ファージの尾部が細菌に吸着し、DNAを注入します。宿主の酵素・ヌクレオチド・ATPでウイルスDNAが複製され、宿主のリボソームがカプシドと尾部のタンパク質を作ります。新しいファージが組み立てられ、細菌が溶菌して多数のファージが放出されます。",
        "噬菌體尾部附着於細菌並注入 DNA。利用宿主的酶、核苷酸和 ATP 複製病毒 DNA，宿主核糖體製造衣殼和尾部蛋白。組裝出新噬菌體後，細菌細胞裂解，釋出大量新噬菌體。") },
    { id: "a2-3-q07", type: "mcq", ahl: true, difficulty: 2, ref: "A2.3.4", paper: "1A",
      stem: T("What happens to the DNA of bacteriophage lambda in the lysogenic cycle?", "λファージのDNAは溶原サイクルでどうなりますか。", "在溶原週期中，λ 噬菌體的 DNA 會怎樣？"),
      options: [
        T("It stays free in the cytoplasm and makes new capsids immediately.", "細胞質中に遊離したまま、すぐに新しいカプシドを作る。", "留在細胞質中，立即製造新衣殼。"),
        T("It is integrated into the host chromosome and copied each time the host divides.", "宿主染色体に組み込まれ、宿主が分裂するたびに複製される。", "整合到宿主染色體中，宿主每次分裂時被複製。"),
        T("It is destroyed by the bacterium.", "細菌によって破壊される。", "被細菌破壞。"),
        T("It is converted into RNA and leaves the cell.", "RNAに変換されて細胞から出ていく。", "轉變成 RNA 並離開細胞。")],
      answer: 1,
      explanation: T("In the lysogenic cycle the viral DNA becomes a prophage inside the host chromosome and is passed to daughter cells. A describes the lytic cycle.",
        "溶原サイクルでは、ウイルスDNAは宿主染色体の中でプロファージとなり、娘細胞に伝わります。Aは溶菌サイクルの説明です。",
        "在溶原週期中，病毒 DNA 成為宿主染色體內的原噬菌體，並傳給子細胞。A 描述的是裂解週期。") },
    { id: "a2-3-q08", type: "multi", ahl: true, difficulty: 2, ref: "A2.3.4", paper: "1A",
      stem: T("Which statements about the lysogenic cycle of bacteriophage lambda are correct?", "λファージの溶原サイクルについて正しい記述をすべて選びなさい。", "關於 λ 噬菌體的溶原週期，哪些陳述正確？"),
      options: [
        T("The prophage is copied each time the host DNA is replicated.", "プロファージは宿主DNAが複製されるたびに複製される。", "每次宿主 DNA 複製時，原噬菌體也被複製。"),
        T("New viruses are released immediately after infection.", "感染直後に新しいウイルスが放出される。", "感染後立即釋出新病毒。"),
        T("The prophage may later leave the chromosome and start the lytic cycle.", "プロファージはのちに染色体から離れ、溶菌サイクルを始めることがある。", "原噬菌體其後可能離開染色體並開始裂解週期。"),
        T("The host cell is killed during the lysogenic cycle.", "溶原サイクルの間に宿主細胞は死ぬ。", "在溶原週期中宿主細胞被殺死。")],
      answer: [0, 2],
      explanation: T("A and C are correct. B and D describe the lytic cycle: in the lysogenic cycle no new viruses are made and the host survives and divides.",
        "AとCが正しい。BとDは溶菌サイクルの説明で、溶原サイクルでは新しいウイルスは作られず、宿主は生き残って分裂します。",
        "A 和 C 正確。B 和 D 描述的是裂解週期；溶原週期中不製造新病毒，宿主存活並繼續分裂。") },
    { id: "a2-3-q09", type: "short", ahl: true, difficulty: 3, ref: "A2.3.3", paper: "1B", commandTerm: "Explain", marks: 5,
      data: T(
        `<p>(illustrative data) Bacteria were infected with bacteriophage lambda in a flask. After a few minutes, any phages that had not attached were removed. The number of free phages in the liquid was then counted over time.</p>
<table><tr><th>Time after infection / min</th><th>Free phages / ×10<sup>3</sup> per cm<sup>3</sup></th></tr>
<tr><td>0</td><td>0</td></tr><tr><td>10</td><td>0</td></tr><tr><td>20</td><td>0</td></tr><tr><td>30</td><td>18</td></tr><tr><td>40</td><td>40</td></tr><tr><td>50</td><td>41</td></tr></table>`,
        `<p>（架空のデータ）フラスコ内の細菌にλファージを感染させました。数分後、吸着しなかったファージを除きました。その後、液中の遊離ファージ数を時間を追って数えました。</p>
<table><tr><th>感染後の時間／分</th><th>遊離ファージ数／×10<sup>3</sup> cm<sup>-3</sup></th></tr>
<tr><td>0</td><td>0</td></tr><tr><td>10</td><td>0</td></tr><tr><td>20</td><td>0</td></tr><tr><td>30</td><td>18</td></tr><tr><td>40</td><td>40</td></tr><tr><td>50</td><td>41</td></tr></table>`,
        `<p>（模擬數據）在燒瓶中以 λ 噬菌體感染細菌。數分鐘後，把未附着的噬菌體移走。之後隨時間計算液體中游離噬菌體的數目。</p>
<table><tr><th>感染後時間／分鐘</th><th>游離噬菌體／×10<sup>3</sup> 每 cm<sup>3</sup></th></tr>
<tr><td>0</td><td>0</td></tr><tr><td>10</td><td>0</td></tr><tr><td>20</td><td>0</td></tr><tr><td>30</td><td>18</td></tr><tr><td>40</td><td>40</td></tr><tr><td>50</td><td>41</td></tr></table>`),
      stem: T("(a) State how long it took before free phages were detected. [1] (b) Explain why there were no free phages for the first 20 minutes. [2] (c) Explain the increase between 20 and 40 minutes. [1] (d) Explain why the number levelled off after 40 minutes. [1]",
        "(a) 遊離ファージが検出されるまでの時間を述べなさい。[1] (b) 最初の20分間遊離ファージがなかった理由を説明しなさい。[2] (c) 20〜40分の増加を説明しなさい。[1] (d) 40分以降に数が頭打ちになった理由を説明しなさい。[1]",
        "(a) 指出要多久才檢測到游離噬菌體。[1] (b) 解釋首 20 分鐘為何沒有游離噬菌體。[2] (c) 解釋 20 至 40 分鐘間的增加。[1] (d) 解釋 40 分鐘後數目為何趨於平穩。[1]"),
      markscheme: [
        T("(a) between 20 and 30 minutes (more than 20 min);", "(a) 20〜30分の間（20分より後）;", "(a) 20 至 30 分鐘之間（超過 20 分鐘）;"),
        T("(b) the phages are inside the bacteria, not free / the viral DNA is being replicated and phage proteins made / new phages are being assembled;", "(b) ファージは細菌の内部にあり遊離していない（DNAの複製・タンパク質合成・組み立て中）;", "(b) 噬菌體在細菌內，並非游離（正在複製 DNA、製造蛋白、組裝新噬菌體）;"),
        T("(b) the cells have not yet lysed;", "(b) 細胞はまだ溶菌していない;", "(b) 細胞尚未裂解;"),
        T("(c) bacteria lysed / burst, releasing many new phages into the liquid;", "(c) 細菌が溶菌し、多数の新しいファージが液中に放出された;", "(c) 細菌裂解，把大量新噬菌體釋入液體;"),
        T("(d) all (or nearly all) infected bacteria had already lysed, so no more phages could be released.", "(d) 感染した細菌のほとんど（すべて）がすでに溶菌し、これ以上放出されない。", "(d) 所有（或幾乎所有）受感染的細菌已裂解，不能再釋出噬菌體。")],
      modelAnswer: T("(a) Between 20 and 30 minutes. (b) During this time the phage DNA is being copied, phage proteins made and new phages assembled inside the bacteria, so none are free; the cells have not yet burst. (c) The bacteria lyse, releasing many new phages. (d) By 40 minutes nearly all infected bacteria had lysed, so no more phages could be released.",
        "(a) 20〜30分の間。(b) この間、ファージDNAの複製、タンパク質合成、組み立てが細菌の内部で進み、遊離したファージはなく、細胞はまだ破裂していません。(c) 細菌が溶菌し、多数の新しいファージが放出されました。(d) 40分までに感染した細菌のほとんどが溶菌し、これ以上放出されなくなりました。",
        "(a) 20 至 30 分鐘之間。(b) 這段時間噬菌體 DNA 正在複製、蛋白質正在製造、新噬菌體正在細菌內組裝，所以沒有游離的；細胞尚未破裂。(c) 細菌裂解，釋出大量新噬菌體。(d) 到 40 分鐘時幾乎所有受感染的細菌已裂解，不能再釋出噬菌體。") },
    { id: "a2-3-q10", type: "multi", ahl: true, difficulty: 2, ref: "A2.3.5", paper: "1A",
      stem: T("Which of the following are used in the argument that viruses have several different origins?", "ウイルスが複数の異なる起源をもつという議論に用いられるものをすべて選びなさい。", "下列哪些被用於論證病毒有多個不同起源？"),
      options: [
        T("Viruses differ in genome type: DNA or RNA, single- or double-stranded.", "ウイルスはゲノムの型が異なる（DNAかRNAか、一本鎖か二本鎖か）。", "病毒的基因組類型不同（DNA 或 RNA，單鏈或雙鏈）。"),
        T("All viruses have exactly the same structure and genome.", "すべてのウイルスはまったく同じ構造とゲノムをもつ。", "所有病毒的結構和基因組完全相同。"),
        T("Shared features such as small size and a capsid could have evolved independently by convergent evolution.", "小さいことやカプシドなどの共通の特徴は、収れん進化で独立に生じたかもしれない。", "細小和有衣殼等共有特徵，可能是由趨同演化各自獨立產生的。"),
        T("Viruses use the same genetic code as living organisms.", "ウイルスは生物と同じ遺伝暗号を使う。", "病毒使用與生物相同的遺傳密碼。")],
      answer: [0, 2, 3],
      explanation: T("A, C and D are part of the evidence discussed in the guide. B is false: if all viruses were the same, a single origin would be more likely.",
        "A・C・DはIB のガイドで扱われる証拠です。Bは誤りで、もしすべてのウイルスが同じなら、単一の起源のほうがもっともらしくなります。",
        "A、C、D 是指引所討論的證據。B 錯誤：如果所有病毒都相同，單一起源反而更合理。") },
    { id: "a2-3-q11", type: "short", ahl: true, difficulty: 3, ref: "A2.3.5", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Viruses that are not closely related share features such as small size, a protein capsid and no metabolism. Explain how convergent evolution could account for these shared features.",
        "近縁でないウイルスが、小さいこと、タンパク質のカプシド、代謝がないことなどの特徴を共有しています。収れん進化がこれらの共通の特徴をどう説明しうるか説明しなさい。",
        "沒有密切親緣關係的病毒共有細小、蛋白質衣殼和沒有新陳代謝等特徵。解釋趨同演化如何說明這些共有特徵。"),
      markscheme: [
        T("viruses may have arisen several times / from different organisms (not from one ancestor);", "ウイルスは別々の生物から複数回生じたかもしれない（単一の祖先ではない）;", "病毒可能多次、由不同生物產生（並非來自同一祖先）;"),
        T("all live by extreme obligate parasitism / can only reproduce in a host cell;", "すべて極端な偏性寄生で生きる（宿主細胞内でしか増殖できない）;", "全部以極端專性寄生方式生存（只能在宿主細胞內繁殖）;"),
        T("so similar selection pressures acted on the separate lineages;", "別々の系統に似た選択圧がかかった;", "因此相似的選擇壓力作用於不同的譜系;"),
        T("favouring the same features independently (e.g. small size, loss of metabolic enzymes, protective capsid), so the similarity does not show common ancestry.", "同じ特徴（小型化、代謝酵素の喪失、保護するカプシドなど）が独立に有利となった。したがって類似は共通祖先を示さない。", "令相同特徵各自獨立受到有利（如細小、失去代謝酶、保護性衣殼），所以相似並不顯示有共同祖先。")],
      modelAnswer: T("Viruses may have arisen several times from different organisms. All of them are obligate parasites, so similar selection pressures acted on each lineage and favoured the same features independently, such as small size, a capsid and loss of metabolic enzymes. The shared features therefore do not show a common ancestor.",
        "ウイルスは別々の生物から複数回生じたかもしれません。すべて偏性寄生者なので、各系統に似た選択圧がかかり、小型化・カプシド・代謝酵素の喪失といった同じ特徴が独立に有利になりました。したがって共通の特徴は共通祖先を示しません。",
        "病毒可能多次由不同生物產生。它們全都是專性寄生物，所以相似的選擇壓力作用於各譜系，各自獨立地有利於相同的特徵，如細小、衣殼和失去代謝酶。因此共有特徵並不顯示有共同祖先。") },
    { id: "a2-3-q12", type: "short", ahl: true, difficulty: 2, ref: "A2.3.6", paper: "2", commandTerm: "Explain", marks: 4,
      stem: T("Explain the reasons for the very rapid rate of evolution in some viruses, such as HIV and influenza.", "HIVやインフルエンザなど、一部のウイルスで進化が非常に速い理由を説明しなさい。", "解釋為何某些病毒（如 HIV 和流感病毒）演化速度非常快。"),
      markscheme: [
        T("RNA genomes are copied by enzymes (RNA polymerase / reverse transcriptase) that make many errors and have no proofreading, so the mutation rate is high;", "RNAゲノムは誤りが多く校正機能のない酵素（RNAポリメラーゼ・逆転写酵素）で複製されるため、変異率が高い;", "RNA 基因組由出錯多、沒有校對功能的酶（RNA 聚合酶／逆轉錄酶）複製，所以突變率高;"),
        T("viruses reproduce very quickly and in huge numbers, so there are many generations and many mutations;", "ウイルスは非常に速く多数が増え、世代数も変異も多い;", "病毒繁殖又快又多，世代多，突變也多;"),
        T("natural selection (by the immune system, vaccines, drugs) favours mutants that escape them, which then spread;", "自然選択（免疫・ワクチン・薬）がそれらを逃れる変異体を有利にし、広がる;", "自然選擇（免疫系統、疫苗、藥物）有利於能逃避的突變株，使其擴散;"),
        T("(influenza) segmented genome can be mixed when two strains infect one cell.", "（インフルエンザ）ゲノムが断片に分かれており、2つの株が1つの細胞に感染すると混ざりうる。", "（流感）基因組分段，兩個毒株感染同一細胞時可混合。")],
      modelAnswer: T("RNA viruses are copied by enzymes that lack proofreading, so the mutation rate is high. They reproduce quickly in huge numbers, giving many generations in which mutations arise. Natural selection by the immune system, vaccines and drugs then favours any mutant that escapes them, and these spread. In influenza the genome is in segments that can be reassorted between strains.",
        "RNAウイルスは校正機能のない酵素で複製されるため変異率が高く、また速く大量に増えるため変異が起こる世代が多くなります。免疫・ワクチン・薬による自然選択は、それらを逃れる変異体を有利にし、広がります。インフルエンザではゲノムが断片に分かれており、株の間で組み換わりえます。",
        "RNA 病毒由缺乏校對功能的酶複製，所以突變率高。它們快速大量繁殖，產生突變的世代很多。免疫系統、疫苗和藥物造成的自然選擇，有利於能逃避的突變株，使其擴散。流感的基因組分成片段，可在毒株之間重組。") },
    { id: "a2-3-q13", type: "short", ahl: true, difficulty: 2, ref: "A2.3.6", paper: "2", commandTerm: "Explain", marks: 3,
      stem: T("Explain why a new influenza vaccine has to be produced regularly.", "インフルエンザワクチンを定期的に新しく作らなければならない理由を説明しなさい。", "解釋為何要定期生產新的流感疫苗。"),
      markscheme: [
        T("influenza virus mutates rapidly (RNA genome, no proofreading, fast reproduction);", "インフルエンザウイルスは急速に変異する（RNAゲノム、校正なし、速い増殖）;", "流感病毒突變迅速（RNA 基因組、沒有校對、繁殖快）;"),
        T("surface proteins change, so antibodies / memory cells made against earlier strains no longer recognize the new strain;", "表面タンパク質が変わり、以前の株に対する抗体・記憶細胞が新しい株を認識しなくなる;", "表面蛋白改變，針對舊毒株產生的抗體／記憶細胞不再認得新毒株;"),
        T("vaccine must be updated to match the strains currently spreading.", "ワクチンは現在流行している株に合わせて更新する必要がある。", "疫苗必須更新以配合現時流行的毒株。")],
      modelAnswer: T("Influenza viruses mutate very quickly, which changes their surface proteins. Antibodies and memory cells made against earlier strains may not recognize the new strain, so the vaccine must be updated to match the strains now circulating.",
        "インフルエンザウイルスは非常に速く変異し、表面タンパク質が変わります。以前の株に対する抗体や記憶細胞は新しい株を認識できないことがあるため、現在流行している株に合わせてワクチンを更新する必要があります。",
        "流感病毒突變很快，令表面蛋白改變。針對舊毒株產生的抗體和記憶細胞可能不認得新毒株，所以疫苗必須更新以配合現時流行的毒株。") },
    { id: "a2-3-q14", type: "short", ahl: true, difficulty: 3, ref: "A2.3.6", paper: "1B", commandTerm: "Explain", marks: 5,
      data: T(
        `<p>(illustrative data) A patient with an HIV infection was treated with one antiviral drug from week 0. The amount of HIV in the blood (viral load) was measured.</p>
<table><tr><th>Time / weeks</th><th>Viral load / ×10<sup>3</sup> copies per cm<sup>3</sup></th></tr>
<tr><td>0</td><td>500</td></tr><tr><td>2</td><td>80</td></tr><tr><td>4</td><td>10</td></tr><tr><td>6</td><td>5</td></tr><tr><td>8</td><td>40</td></tr><tr><td>10</td><td>300</td></tr><tr><td>12</td><td>480</td></tr></table>`,
        `<p>（架空のデータ）HIV感染患者に、0週から1種類の抗ウイルス薬で治療しました。血中のHIV量（ウイルス量）を測定しました。</p>
<table><tr><th>時間／週</th><th>ウイルス量／×10<sup>3</sup> コピー cm<sup>-3</sup></th></tr>
<tr><td>0</td><td>500</td></tr><tr><td>2</td><td>80</td></tr><tr><td>4</td><td>10</td></tr><tr><td>6</td><td>5</td></tr><tr><td>8</td><td>40</td></tr><tr><td>10</td><td>300</td></tr><tr><td>12</td><td>480</td></tr></table>`,
        `<p>（模擬數據）一名 HIV 感染者由第 0 週起用一種抗病毒藥物治療，並量度血液中 HIV 的量（病毒載量）。</p>
<table><tr><th>時間／週</th><th>病毒載量／×10<sup>3</sup> 拷貝每 cm<sup>3</sup></th></tr>
<tr><td>0</td><td>500</td></tr><tr><td>2</td><td>80</td></tr><tr><td>4</td><td>10</td></tr><tr><td>6</td><td>5</td></tr><tr><td>8</td><td>40</td></tr><tr><td>10</td><td>300</td></tr><tr><td>12</td><td>480</td></tr></table>`),
      stem: T("(a) Describe the change in viral load from week 6 to week 12. [1] (b) Explain this change. [3] (c) Suggest how treatment could be changed to delay this effect. [1]",
        "(a) 6週から12週のウイルス量の変化を述べなさい。[1] (b) この変化を説明しなさい。[3] (c) この影響を遅らせるために治療をどう変えられるか示唆しなさい。[1]",
        "(a) 描述第 6 週至第 12 週病毒載量的變化。[1] (b) 解釋這個變化。[3] (c) 建議如何改變治療以延遲這個影響。[1]"),
      markscheme: [
        T("(a) viral load increases from 5 to 480 (back to about the starting level);", "(a) ウイルス量は5から480に増加する（ほぼ開始時の水準に戻る）;", "(a) 病毒載量由 5 增至 480（回到接近開始時的水平）;"),
        T("(b) HIV has a high mutation rate / mutations produce variants;", "(b) HIVは変異率が高く、変異で多様な変異体ができる;", "(b) HIV 突變率高，突變產生不同變異株;"),
        T("(b) a mutant that was resistant to the drug survived (natural selection / drug is the selection pressure);", "(b) 薬に耐性をもつ変異体が生き残った（自然選択・薬が選択圧）;", "(b) 對藥物有抗藥性的突變株存活（自然選擇／藥物是選擇壓力）;"),
        T("(b) resistant virus reproduced rapidly and passed on the resistance allele so the resistant population grew;", "(b) 耐性のあるウイルスが急速に増殖し、耐性の遺伝子を伝え、耐性集団が増えた;", "(b) 有抗藥性的病毒快速繁殖並傳下抗藥性，抗藥株族群增大;"),
        T("(c) use a combination of several drugs (so a virus would need several resistance mutations at once).", "(c) 複数の薬を併用する（ウイルスが同時に複数の耐性変異をもつ必要がある）。", "(c) 合併使用多種藥物（病毒需要同時有多個抗藥突變）。")],
      modelAnswer: T("(a) Viral load rises from 5 to 480 units, nearly back to the start. (b) HIV mutates quickly, so variants arise. A variant that was resistant to the drug survived while the others were killed, so the drug acted as a selection pressure. The resistant virus reproduced and passed on resistance, so its numbers rose. (c) Use several drugs together, so a virus would need resistance to all of them at once.",
        "(a) ウイルス量は5から480単位に増え、ほぼ開始時に戻ります。(b) HIVは速く変異するため変異体が生じます。薬に耐性をもつ変異体が生き残り、ほかは死んだので、薬が選択圧として働きました。耐性ウイルスは増殖して耐性を伝え、数が増えました。(c) 複数の薬を併用すれば、ウイルスはすべての薬に同時に耐性をもつ必要があります。",
        "(a) 病毒載量由 5 升至 480 單位，幾乎回到開始時的水平。(b) HIV 突變快，所以產生變異株。對藥物有抗藥性的變異株存活，其餘被殺死，所以藥物成為選擇壓力。抗藥病毒繁殖並傳下抗藥性，數量因而上升。(c) 同時使用多種藥物，病毒便要同時對所有藥物有抗藥性。") },
    { id: "a2-3-q15", type: "mcq", ahl: true, difficulty: 3, ref: "A2.3.6", paper: "1A",
      stem: T("HIV treatment uses a combination of several drugs rather than one drug. What is the main reason?", "HIVの治療は1種類ではなく複数の薬の併用で行われます。主な理由はどれですか。", "HIV 治療採用多種藥物合併，而非單一藥物。主要原因是甚麼？"),
      options: [
        T("Each drug is weaker, so several are needed to kill the same number of viruses.", "1つ1つの薬は弱く、同じ数のウイルスを殺すには複数が必要だから。", "每種藥較弱，需要多種才能殺死同樣數量的病毒。"),
        T("A single virus is very unlikely to have mutations giving resistance to all the drugs at once.", "1つのウイルスがすべての薬に同時に耐性をもつ変異をもつ可能性は非常に低いから。", "單一病毒不大可能同時有針對所有藥物的抗藥突變。"),
        T("Drugs change the virus's genetic code so it cannot mutate.", "薬がウイルスの遺伝暗号を変え、変異できなくするから。", "藥物改變病毒的遺傳密碼，使它不能突變。"),
        T("HIV is a bacterium, so each drug acts on a different organelle.", "HIVは細菌なので、薬ごとに違う細胞小器官に働くから。", "HIV 是細菌，所以每種藥作用於不同的胞器。")],
      answer: 1,
      explanation: T("Because mutations are random and fairly rare at any one site, the chance that one virus carries several resistance mutations together is far smaller than the chance for one. A is not the reason. C is false because the drugs do not stop mutation. D is false: HIV is a virus, not a bacterium, and has no organelles.",
        "変異はランダムで、特定の部位では比較的まれなので、1つのウイルスが複数の耐性変異を同時にもつ確率は、1つだけの場合よりはるかに小さくなります。Aは理由ではなく、Cは薬が変異を止めるわけではないので誤り、DはHIVが細菌ではなくウイルスで、細胞小器官ももたないので誤りです。",
        "突變是隨機的，在某一位點上相當罕見，所以一個病毒同時帶有多個抗藥突變的機會，遠比只帶一個的機會小。A 不是原因。C 錯誤，藥物並不能阻止突變。D 錯誤：HIV 是病毒，不是細菌，也沒有胞器。") },

  ];
    IB.registerTopic({
    id: "A2.3", slug: "a2-3", theme: "A", level: 2, ahlOnly: true,
    title: T("Viruses", "ウイルス", "病毒"),
    guidingQuestions: [
      T("How can viruses exist with so few genes?", "ウイルスはどうしてこれほど少ない遺伝子で存在できるのか。", "病毒為何可以只有這麼少的基因而存在？"),
      T("In what ways do viruses vary?", "ウイルスはどのような点で多様か。", "病毒在哪些方面有所不同？")],
    summary: T(
      "This is an HL-only subtopic. Viruses are tiny non-cellular particles made of nucleic acid in a protein capsid. They have no metabolism and depend entirely on a host cell. You study their diversity, the lytic and lysogenic cycles of bacteriophage lambda, evidence for several origins, and why viruses such as influenza and HIV evolve so rapidly.",
      "これはHL（上級レベル）のみの単元です。ウイルスは、タンパク質のカプシドに包まれた核酸からなる細胞をもたない微小な粒子で、代謝をもたず、宿主細胞に完全に依存します。ウイルスの多様性、λファージの溶菌サイクルと溶原サイクル、複数回の起源の証拠、インフルエンザやHIVがなぜ急速に進化するのかを学びます。",
      "這是只限 HL 的子課題。病毒是沒有細胞結構的微小顆粒，由蛋白質衣殼包着核酸構成，沒有新陳代謝，完全依賴宿主細胞。內容包括病毒的多樣性、λ噬菌體的裂解與溶原週期、多個起源的證據，以及流感病毒和 HIV 等為何演化得這麼快。"),
    sections,
    keyTerms: [
      { ahl: true, term: T("virus", "ウイルス", "病毒"), def: T("A non-cellular particle of nucleic acid in a protein capsid that can only be copied inside a host cell.", "タンパク質のカプシドに包まれた核酸からなる細胞でない粒子。宿主細胞内でのみ複製される。", "由蛋白質衣殼包着核酸構成的非細胞顆粒，只能在宿主細胞內複製。") },
      { ahl: true, term: T("capsid", "カプシド", "衣殼"), def: T("The protein coat that surrounds the nucleic acid of a virus.", "ウイルスの核酸を囲むタンパク質の殻。", "包圍病毒核酸的蛋白質外殼。") },
      { ahl: true, term: T("envelope", "エンベロープ", "包膜"), def: T("An outer layer derived from the host cell membrane that surrounds some viruses.", "一部のウイルスを囲む、宿主細胞の膜に由来する外層。", "包圍部分病毒、來自宿主細胞膜的外層。") },
      { ahl: true, term: T("host cell", "宿主細胞", "宿主細胞"), def: T("The living cell a virus infects and uses for energy, nutrients and protein synthesis.", "ウイルスが感染し、エネルギー・栄養・タンパク質合成に利用する生きた細胞。", "病毒所感染的活細胞，被用作能量、營養和蛋白質合成的來源。") },
      { ahl: true, term: T("bacteriophage", "バクテリオファージ", "噬菌體"), def: T("A virus that infects bacteria. Bacteriophage lambda infects E. coli.", "細菌に感染するウイルス。λファージは大腸菌に感染する。", "感染細菌的病毒。λ噬菌體感染大腸桿菌。") },
      { ahl: true, term: T("lytic cycle", "溶菌サイクル", "裂解週期"), def: T("Virus reproduction in which new viruses are made at once and the host cell bursts (lysis).", "ウイルスがすぐに新しいウイルスを作り、宿主細胞が破裂（溶菌）する増殖様式。", "病毒立即製造新病毒、宿主細胞破裂（裂解）的繁殖方式。") },
      { ahl: true, term: T("lysogenic cycle", "溶原サイクル", "溶原週期"), def: T("Virus DNA is integrated into the host chromosome and copied with it, with no new viruses made until a switch to the lytic cycle.", "ウイルスDNAが宿主染色体に組み込まれて一緒に複製され、溶菌サイクルに切り替わるまで新しいウイルスは作られない様式。", "病毒 DNA 整合到宿主染色體並隨之複製，在轉為裂解週期前不製造新病毒。") },
      { ahl: true, term: T("prophage", "プロファージ", "原噬菌體"), def: T("Bacteriophage DNA integrated into the bacterial chromosome during the lysogenic cycle.", "溶原サイクルで細菌の染色体に組み込まれたファージDNA。", "溶原週期中整合到細菌染色體的噬菌體 DNA。") },
      { ahl: true, term: T("obligate parasitism", "偏性寄生", "專性寄生"), def: T("A way of life in which an organism can reproduce only inside a host.", "宿主の中でしか増殖できない生活様式。", "只能在宿主內繁殖的生活方式。") },
      { ahl: true, term: T("convergent evolution", "収れん進化", "趨同演化"), def: T("Unrelated groups evolving similar features independently because of similar selection pressures.", "無関係の集団が、似た選択圧のために似た特徴を独立に進化させること。", "沒有親緣關係的類群由於相似的選擇壓力，各自獨立演化出相似的特徵。") },
      { ahl: true, term: T("reverse transcriptase", "逆転写酵素", "逆轉錄酶"), def: T("The HIV enzyme that copies RNA into DNA; it makes many errors, so HIV mutates rapidly.", "RNAをDNAに写すHIVの酵素。誤りが多いためHIVは速く変異する。", "把 RNA 複製成 DNA 的 HIV 酶；出錯多，所以 HIV 突變快。") }
    ],
    misconceptions: [
      { wrong: T("Antibiotics can be used to treat viral infections.", "抗生物質でウイルス感染症を治療できる。", "抗生素可以治療病毒感染。"),
        right: T("Antibiotics act on bacterial structures and processes. Viruses have no cell wall or ribosomes of their own, and use the host's, so antibiotics do not work on them. (Not needed for A2.3: this is taught in C3.2 Defence against disease, which includes why antibiotics fail to control viral infections.)", "抗生物質は細菌の構造や過程に作用します。ウイルスには自前の細胞壁やリボソームがなく、宿主のものを使うため、効きません。（A2.3 では不要：C3.2（病気に対する防御）で、抗生物質がウイルス感染に効かない理由とともに学びます。）", "抗生素作用於細菌的結構和過程。病毒沒有自己的細胞壁或核糖體，而是利用宿主的，所以抗生素對它們無效。（A2.3 不需要：這會在 C3.2 抵禦疾病中學習，包括抗生素為何不能控制病毒感染。）") },
      { wrong: T("The lysogenic cycle is a type of infection where the virus does nothing and then dies.", "溶原サイクルとは、ウイルスが何もせず、やがて死ぬ感染のことである。", "溶原週期是病毒甚麼也不做然後死亡的感染。"),
        right: T("In the lysogenic cycle the viral DNA is integrated as a prophage and copied every time the host divides. It can later switch to the lytic cycle.", "溶原サイクルではウイルスDNAがプロファージとして組み込まれ、宿主の分裂のたびに複製されます。のちに溶菌サイクルへ切り替わることがあります。", "在溶原週期中，病毒 DNA 以原噬菌體形式整合，每當宿主分裂就被複製，其後可以轉為裂解週期。") },
      { wrong: T("Viruses are very small cells.", "ウイルスは非常に小さい細胞である。", "病毒是非常細小的細胞。"),
        right: T("Viruses are not cells. They have no cytoplasm, plasma membrane of their own or ribosomes, and cannot reproduce on their own.", "ウイルスは細胞ではありません。細胞質・独自の細胞膜・リボソームがなく、単独では増殖できません。", "病毒不是細胞。它們沒有細胞質、自己的質膜或核糖體，也不能獨自繁殖。") },
      { wrong: T("Viruses mutate because they “try to” escape the immune system.", "ウイルスは免疫から逃れようとして変異する。", "病毒是因為「想要」逃避免疫系統才突變。"),
        right: T("Mutations are random. Natural selection then favours variants that happen to escape the immune system, vaccines or drugs, and these spread.", "変異はランダムに起こります。自然選択が、たまたま免疫・ワクチン・薬を逃れる変異体を有利にし、それが広がります。", "突變是隨機的。自然選擇其後有利於碰巧能逃避免疫系統、疫苗或藥物的變異株，使其擴散。") }
    ],
    beyondSyllabus: [
      T("You do not need to know the full replication cycles of coronaviruses or HIV (for example entry through receptors or the steps of reverse transcription and integration). Only lambda's lytic and lysogenic cycles are required.", "コロナウイルスやHIVの複製サイクルの詳細（受容体を介した侵入、逆転写や組み込みの手順など）は不要です。必要なのはλファージの溶菌・溶原サイクルだけです。", "你不需要認識冠狀病毒或 HIV 的完整複製週期（例如經受體進入，或逆轉錄和整合的步驟）。只需要 λ 噬菌體的裂解和溶原週期。"),
      T("You do not need the terms antigenic drift and antigenic shift, or the H and N numbering of influenza subtypes.", "抗原連続変異・抗原不連続変異という用語や、インフルエンザの亜型のH・N番号は不要です。", "你不需要認識「抗原漂移」和「抗原轉變」這些術語，也不需要認識流感亞型的 H 和 N 編號。"),
      T("You do not need to know virus classification schemes (e.g. the Baltimore classification) or the names of virus families.", "ウイルスの分類体系（ボルチモア分類など）やウイルス科の名前は不要です。", "你不需要認識病毒分類系統（例如巴爾的摩分類）或病毒科的名稱。"),
      T("You do not need prions, viroids, giant viruses or the details of specific origin hypotheses with names (e.g. “escape” or “regressive” hypotheses). Know the guide's evidence for several origins.", "プリオン、ウイロイド、巨大ウイルス、名前のついた起源仮説（「脱出説」「退行説」など）の詳細は不要です。IB のガイドが示す、複数起源の証拠を知っていれば十分です。", "你不需要認識普里昂、類病毒、巨型病毒，或有名稱的起源假說（如「逃逸」或「退化」假說）的細節。只需認識指引所列有多個起源的證據。"),
      T("You do not need how antiviral drugs work at the molecular level, or the names of HIV drugs. A2.3.6 asks only about the consequences of rapid evolution for treatment. How vaccines work, and HIV infection of lymphocytes leading to AIDS, are not needed here either: they are taught in C3.2 (Defence against disease).", "抗ウイルス薬の分子レベルの作用や、HIV治療薬の名前は不要です。A2.3.6 が求めるのは、急速な進化が治療に及ぼす影響だけです。ワクチンのしくみや、HIV がリンパ球に感染してエイズになることもここでは不要で、C3.2 (病気に対する防御) で学びます。", "你不需要認識抗病毒藥物在分子層面的作用，也不需要認識 HIV 藥物的名稱。A2.3.6 只要求考慮快速演化對治療的影響。疫苗如何運作，以及 HIV 感染淋巴細胞導致愛滋病，在這裏也不需要：它們會在 C3.2 (抵禦疾病) 中學習。")
    ],
    links: [
      { to: "A2.1", why: T("Viruses are non-living (A2.1.2), and their origins relate to the origin of life.", "ウイルスは非生物であり（A2.1.2）、その起源は生命の起源と関係します。", "病毒是非生物 (A2.1.2)，其起源與生命起源有關。") },
      { to: "A4.1", why: T("Rapid viral evolution is natural selection acting on random mutations.", "ウイルスの急速な進化は、ランダムな変異に自然選択が働いた結果です。", "病毒的快速演化是自然選擇作用於隨機突變的結果。") },
      { to: "A1.2", why: T("Viral genomes are DNA or RNA; the genetic code is shared with living organisms.", "ウイルスのゲノムはDNAかRNAで、遺伝暗号は生物と共通です。", "病毒基因組是 DNA 或 RNA；遺傳密碼與生物共通。") },
      { to: "A2.2", why: T("Compare viruses with prokaryotic and eukaryotic cells.", "ウイルスを原核細胞・真核細胞と比べましょう。", "把病毒與原核細胞和真核細胞作比較。") }
    ],
    natureOfScience: [],
    questions
  });

})();
