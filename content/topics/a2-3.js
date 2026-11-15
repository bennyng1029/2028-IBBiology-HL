/* A2.3 Viruses — AHL-only subtopic. Content written from the IB guide (first assessment 2025). */
(function () {
/*EXT-BEGIN*/
const __EXT = {
 "deeper": [
  {
   "i": 0,
   "deeper": {
    "en": "<p><strong>Why so simple?</strong> A virus is little more than a genome in a protein coat. Its genome is small, so it codes for only a few proteins. The capsid is built from many copies of one or a few kinds of protein, which is an economical way to enclose the nucleic acid using very few genes. Everything else is borrowed from a host cell.</p>\n<table><tr><th>Feature</th><th>Virus</th><th>Bacterium (prokaryotic cell)</th></tr><tr><td>Typical size</td><td>about 20 to 300 nm</td><td>about 1 to 5 µm</td></tr><tr><td>Grows and divides?</td><td>No. New particles are assembled inside a host cell.</td><td>Yes (binary fission)</td></tr><tr><td>Cytoplasm, ribosomes, plasma membrane</td><td>None</td><td>Present</td></tr><tr><td>Own metabolism (makes its own ATP)</td><td>No</td><td>Yes</td></tr></table>\n<p><strong>Worked comparison.</strong> 1 µm = 1000 nm. A bacterium 2 µm long is 2000 nm long. A virus 100 nm across is 2000 ÷ 100 = <strong>20 times shorter</strong>.</p>\n<p><strong>Mark-scheme language:</strong> \"protein capsid surrounds the nucleic acid\"; \"no cytoplasm / no ribosomes / no organelles\"; \"cannot carry out metabolism on its own\"; \"fixed size, does not grow\". Write \"few enzymes\", not \"no enzymes\": some viruses (for example HIV) carry a small number inside the particle.</p>",
    "ja": "<p><strong>なぜこんなに単純なのか。</strong>ウイルスはタンパク質の殻に入ったゲノムにすぎません。ゲノムが小さいので、コードするタンパク質も少数です。カプシド (capsid) は1種類または少数の種類のタンパク質をたくさん並べて作られており、わずかな遺伝子で核酸を包める経済的な方法です。それ以外はすべて宿主細胞 (host cell) から借ります。</p>\n<table><tr><th>特徴</th><th>ウイルス</th><th>細菌（原核細胞）</th></tr><tr><td>典型的な大きさ</td><td>約20〜300 nm</td><td>約1〜5 µm</td></tr><tr><td>成長・分裂するか</td><td>しない。新しい粒子は宿主細胞の中で組み立てられる。</td><td>する（二分裂）</td></tr><tr><td>細胞質・リボソーム・細胞膜</td><td>ない</td><td>ある</td></tr><tr><td>自前の代謝（ATPをつくる）</td><td>ない</td><td>ある</td></tr></table>\n<p><strong>計算例。</strong>1 µm = 1000 nm。長さ2 µmの細菌は2000 nmです。幅100 nmのウイルスは、2000 ÷ 100 = <strong>20分の1の長さ</strong>です。</p>\n<p><strong>採点基準で使われる表現:</strong>「タンパク質のカプシドが核酸を囲む」「細胞質・リボソーム・細胞小器官がない」「単独では代謝できない」「大きさが一定で成長しない」。「酵素がない」ではなく「酵素が少ない (few enzymes)」と書きましょう。HIVのように、粒子の中に少数の酵素をもつウイルスもあります。</p>",
    "zh": "<p><strong>為何如此簡單？</strong>病毒只不過是包在蛋白質外殼內的基因組。基因組很小，所以只編碼少數蛋白質。衣殼 (capsid) 由一種或少數幾種蛋白質的多個拷貝砌成，用很少基因就能包住核酸，十分經濟。其餘一切都向宿主細胞 (host cell) 借用。</p>\n<table><tr><th>特徵</th><th>病毒</th><th>細菌（原核細胞）</th></tr><tr><td>一般大小</td><td>約 20 至 300 nm</td><td>約 1 至 5 µm</td></tr><tr><td>會否生長和分裂？</td><td>不會。新顆粒在宿主細胞內組裝。</td><td>會（二分裂）</td></tr><tr><td>細胞質、核糖體、質膜</td><td>沒有</td><td>有</td></tr><tr><td>自身新陳代謝（自行製造 ATP）</td><td>沒有</td><td>有</td></tr></table>\n<p><strong>計算示例。</strong>1 µm = 1000 nm。一個長 2 µm 的細菌即 2000 nm。一個闊 100 nm 的病毒，長度為 2000 ÷ 100 = <strong>細菌的二十分之一</strong>。</p>\n<p><strong>評分準則常用語：</strong>「蛋白質衣殼包圍核酸」；「沒有細胞質／核糖體／細胞器」；「不能獨自進行新陳代謝」；「大小固定，不會生長」。要寫「酶很少 (few enzymes)」，而不是「沒有酶」：有些病毒（例如 HIV）在顆粒內帶有少量酶。</p>"
   }
  },
  {
   "i": 1,
   "deeper": {
    "en": "<p><strong>The guide's examples in more detail.</strong> Bacteriophage lambda has a protein head holding double-stranded DNA, plus a tail used to attach to the bacterium. Coronaviruses and HIV are roughly spherical and enveloped. The spike proteins that stick out of the coronavirus envelope give it a \"crown\" look.</p>\n<table><tr><th></th><th>Lambda</th><th>Coronaviruses</th><th>HIV</th></tr><tr><td>Nucleic acid</td><td>double-stranded DNA</td><td>single-stranded RNA</td><td>single-stranded RNA</td></tr><tr><td>Envelope</td><td>no</td><td>yes</td><td>yes</td></tr><tr><td>Approximate genome size</td><td>48 000 base pairs</td><td>30 000 bases</td><td>9 000 bases</td></tr><tr><td>Infects</td><td>bacteria</td><td>animal cells</td><td>human immune cells</td></tr></table>\n<p>Even the largest of these is tiny next to the genome of the bacterium <em>E. coli</em> (about 4.6 million base pairs). This is the answer to the guiding question: viruses need few genes because the host supplies the machinery.</p>\n<p><strong>Where does an envelope come from?</strong> The envelope is a piece of the host cell's membrane (a phospholipid bilayer) that the new virus takes with it when it leaves. The viral proteins, such as spikes, are inserted into it. So the lipids are from the host but the proteins are viral. A non-enveloped virus such as lambda has only its capsid and tail on the outside.</p>\n<p><strong>Exam technique.</strong> A \"compare\" answer must state the feature for <em>both</em> viruses (\"lambda has DNA whereas coronaviruses have RNA\"). Writing \"viruses have DNA or RNA\" does not compare anything.</p>",
    "ja": "<p><strong>ガイドの例をくわしく。</strong>λファージ (bacteriophage lambda) は、二本鎖DNAを収めたタンパク質の頭部と、細菌に付着するための尾部をもちます。コロナウイルス (coronaviruses) とHIVはほぼ球形で、エンベロープ (envelope) をもちます。コロナウイルスのエンベロープから突き出たスパイクタンパク質が、「王冠」のように見える理由です。</p>\n<table><tr><th></th><th>λファージ</th><th>コロナウイルス</th><th>HIV</th></tr><tr><td>核酸</td><td>二本鎖DNA</td><td>一本鎖RNA</td><td>一本鎖RNA</td></tr><tr><td>エンベロープ</td><td>なし</td><td>あり</td><td>あり</td></tr><tr><td>ゲノムのおよその大きさ</td><td>48 000塩基対</td><td>30 000塩基</td><td>9 000塩基</td></tr><tr><td>感染する相手</td><td>細菌</td><td>動物の細胞</td><td>ヒトの免疫細胞</td></tr></table>\n<p>このうち最大のものでも、大腸菌 (<em>E. coli</em>) のゲノム（約460万塩基対）に比べるとごく小さいものです。これが導入の問いへの答えです。宿主が装置を提供するので、ウイルスは少ない遺伝子で足ります。</p>\n<p><strong>エンベロープはどこから来るのか。</strong>エンベロープは、新しいウイルスが宿主細胞から出るときに持ち出す宿主細胞膜（リン脂質二重層）の一部で、そこにスパイクなどウイルスのタンパク質が組み込まれます。つまり脂質は宿主由来、タンパク質はウイルス由来です。λファージのようにエンベロープのないウイルスは、カプシド (capsid) と尾部だけが外側に出ています。</p>\n<p><strong>答案の書き方。</strong>「比較せよ (compare)」では、<em>両方</em>のウイルスについて同じ特徴を述べます（「λファージはDNA、コロナウイルスはRNAをもつ」）。「ウイルスにはDNAまたはRNAがある」だけでは比較になりません。</p>",
    "zh": "<p><strong>詳述指定的例子。</strong>λ噬菌體 (bacteriophage lambda) 有一個盛載雙鏈 DNA 的蛋白質頭部，以及用來附着細菌的尾部。冠狀病毒 (coronaviruses) 和 HIV 大致呈球形，並有包膜 (envelope)。冠狀病毒包膜上突出的刺突蛋白，令它看起來像「皇冠」。</p>\n<table><tr><th></th><th>λ噬菌體</th><th>冠狀病毒</th><th>HIV</th></tr><tr><td>核酸</td><td>雙鏈 DNA</td><td>單鏈 RNA</td><td>單鏈 RNA</td></tr><tr><td>包膜</td><td>沒有</td><td>有</td><td>有</td></tr><tr><td>基因組大約大小</td><td>48 000 個鹼基對</td><td>30 000 個鹼基</td><td>9 000 個鹼基</td></tr><tr><td>感染對象</td><td>細菌</td><td>動物細胞</td><td>人類免疫細胞</td></tr></table>\n<p>即使其中最大的一個，與大腸桿菌 (<em>E. coli</em>) 的基因組（約 460 萬個鹼基對）相比也極小。這就是導引問題的答案：宿主提供所需機器，所以病毒只需少量基因。</p>\n<p><strong>包膜從哪裏來？</strong>包膜是新病毒離開宿主細胞時帶走的一片宿主細胞膜（磷脂雙層），刺突等病毒蛋白嵌入其中。所以脂質來自宿主，蛋白質則屬病毒。像λ噬菌體這類沒有包膜的病毒，外面只有衣殼 (capsid) 和尾部。</p>\n<p><strong>答題技巧。</strong>「比較 (compare)」的答案必須就<em>兩種</em>病毒說明同一特徵（「λ噬菌體含 DNA，而冠狀病毒含 RNA」）。只寫「病毒含 DNA 或 RNA」並沒有比較任何東西。</p>"
   }
  },
  {
   "i": 2,
   "deeper": {
    "en": "<p><strong>Who supplies what?</strong> This table is the answer to \"how can viruses exist with so few genes?\"</p>\n<table><tr><th>Job</th><th>Done by</th></tr><tr><td>Attaching to a specific receptor, injecting DNA</td><td>Virus (tail proteins)</td></tr><tr><td>Energy (ATP)</td><td>Host</td></tr><tr><td>Nucleotides and amino acids (building blocks)</td><td>Host</td></tr><tr><td>Copying the viral DNA</td><td>Mainly host enzymes, directed by viral genes</td></tr><tr><td>Making capsid and tail proteins</td><td>Host ribosomes and tRNA reading viral genes</td></tr><tr><td>Breaking open the cell</td><td>Proteins coded by viral genes that damage the cell wall</td></tr></table>\n<p><strong>Specificity.</strong> The tail fits only one kind of receptor on the bacterial surface, so each phage infects only certain bacteria.</p>\n<p><strong>Worked example (idealised).</strong> Suppose each infected bacterium releases about 100 new phages and every new phage infects a new cell. After 1 cycle: 100 phages. After 2 cycles: 100<sup>2</sup> = 10 000. After 3 cycles: 100<sup>3</sup> = 1 000 000. A cycle takes only tens of minutes, so a phage population can grow explosively until hosts run out.</p>\n<p><strong>Typical 5-mark \"Outline\" answer:</strong> (1) tail attaches to a specific receptor; (2) DNA injected, empty capsid left outside; (3) host enzymes, ribosomes and ATP used to copy viral DNA and make proteins; (4) new phages assembled; (5) cell lyses and releases the phages.</p>",
    "ja": "<p><strong>だれが何を提供するのか。</strong>この表が、「ウイルスはどうして少ない遺伝子で存在できるのか」への答えです。</p>\n<table><tr><th>働き</th><th>担当</th></tr><tr><td>特定の受容体への付着、DNAの注入</td><td>ウイルス（尾部のタンパク質）</td></tr><tr><td>エネルギー (ATP)</td><td>宿主</td></tr><tr><td>ヌクレオチドとアミノ酸（材料）</td><td>宿主</td></tr><tr><td>ウイルスDNAの複製</td><td>おもに宿主の酵素（ウイルスの遺伝子が指示）</td></tr><tr><td>カプシドと尾部のタンパク質の合成</td><td>宿主のリボソームとtRNAがウイルスの遺伝子を読む</td></tr><tr><td>細胞を壊して開く</td><td>細胞壁を傷つけるタンパク質（ウイルスの遺伝子にコードされる）</td></tr></table>\n<p><strong>特異性。</strong>尾部は細菌表面のある種類の受容体にしか合わないので、それぞれのファージは特定の細菌にしか感染しません。</p>\n<p><strong>計算例（理想化）。</strong>感染した細菌1個が約100個の新しいファージを放出し、新しいファージがすべて別の細胞に感染するとします。1サイクル後は100個、2サイクル後は100<sup>2</sup> = 10 000個、3サイクル後は100<sup>3</sup> = 1 000 000個です。1サイクルは数十分しかかからないので、宿主がなくなるまでファージの数は爆発的に増えます。</p>\n<p><strong>5点の「概説せよ (outline)」の典型的な答え:</strong>(1) 尾部が特定の受容体に付着、(2) DNAを注入し、空のカプシドは外に残る、(3) 宿主の酵素・リボソーム・ATPでウイルスDNAを複製しタンパク質を合成、(4) 新しいファージを組み立て、(5) 細胞が溶菌 (lysis) してファージを放出。</p>",
    "zh": "<p><strong>誰負責甚麼？</strong>這個表就是「病毒為何只需這麼少基因」的答案。</p>\n<table><tr><th>工作</th><th>由誰負責</th></tr><tr><td>附着於特定受體、注入 DNA</td><td>病毒（尾部蛋白質）</td></tr><tr><td>能量 (ATP)</td><td>宿主</td></tr><tr><td>核苷酸和氨基酸（原料）</td><td>宿主</td></tr><tr><td>複製病毒 DNA</td><td>主要是宿主的酶，由病毒基因指示</td></tr><tr><td>製造衣殼和尾部蛋白質</td><td>宿主的核糖體和 tRNA 讀取病毒基因</td></tr><tr><td>弄破細胞</td><td>病毒基因編碼的蛋白質，破壞細胞壁</td></tr></table>\n<p><strong>專一性。</strong>尾部只配合細菌表面的一種受體，所以每種噬菌體只感染某些細菌。</p>\n<p><strong>計算示例（理想化）。</strong>假設每個受感染的細菌釋出約 100 個新噬菌體，而每個新噬菌體都感染一個新細胞。1 個週期後：100 個。2 個週期後：100<sup>2</sup> = 10 000 個。3 個週期後：100<sup>3</sup> = 1 000 000 個。一個週期只需幾十分鐘，所以噬菌體數量可以爆炸式增長，直至宿主耗盡。</p>\n<p><strong>典型 5 分「概述 (outline)」答案：</strong>(1) 尾部附着於特定受體；(2) 注入 DNA，空衣殼留在外面；(3) 利用宿主的酶、核糖體和 ATP 複製病毒 DNA 及製造蛋白質；(4) 組裝新噬菌體；(5) 細胞裂解 (lysis)，釋出噬菌體。</p>"
   }
  },
  {
   "i": 3,
   "deeper": {
    "en": "<p><strong>The prophage rides along.</strong> Because the prophage is part of the bacterial chromosome, the host's own DNA replication copies it every time the cell divides. One lysogenic bacterium becomes 2, 4, 8 and so on. After 10 divisions there are 2<sup>10</sup> = 1024 cells, all carrying the prophage, and no virus particles have been made. The virus is dormant, not dead.</p>\n<div class=\"note\">Extension (not required): <strong>What keeps the lytic genes off?</strong> A repressor protein made from a viral gene switches off the lytic genes. Stress such as UV radiation or DNA damage breaks down this repression. The prophage then cuts itself out of the chromosome and the lytic cycle starts.</div>\n<p><strong>Why does lysogeny help the virus?</strong> The viral DNA is copied and spread to many cells without harming the host. The lytic cycle can start later.</p>\n<p><strong>Mark-scheme language:</strong> \"viral DNA integrated into the host chromosome\"; \"called a prophage\"; \"replicated with host DNA and passed to daughter cells\"; \"no new viruses made\"; \"induced by stress / DNA damage to enter the lytic cycle\".</p>\n<p><strong>Common errors:</strong> saying the virus is \"dead\" or \"inactive\"; saying the prophage is a separate small circle of DNA in the cytoplasm (it is part of the chromosome); saying the host cell is killed in the lysogenic cycle.</p>\n<div class=\"note\">Extension (not required): some prophages carry extra genes that change the bacterium's properties. For example, the toxin that makes diphtheria dangerous is coded by a prophage gene in the bacterium.</div>",
    "ja": "<p><strong>プロファージ (prophage) は一緒に複製される。</strong>プロファージは細菌の染色体の一部なので、細胞が分裂するたびに宿主自身のDNA複製でコピーされます。溶原化した細菌1個は2個、4個、8個…と増え、10回分裂すると2<sup>10</sup> = 1024個になり、そのすべてがプロファージをもちます。ウイルス粒子はまったくつくられていません。ウイルスは死んだのではなく休眠しているのです。</p>\n<div class=\"note\">発展（必須ではありません）：<strong>溶菌サイクルの遺伝子を止めているものは何か。</strong>ウイルス遺伝子からつくられるリプレッサー（抑制タンパク質）が、溶菌サイクルの遺伝子のはたらきを止めています。紫外線などのストレスやDNAの損傷が起こると、この抑制が壊れます。するとプロファージは染色体から自分を切り出し、溶菌サイクルが始まります。</div>\n<p><strong>溶原サイクルはウイルスにどんな利点があるか。</strong>宿主を傷つけずに、ウイルスDNAがコピーされて多くの細胞に広がります。溶菌サイクルは後から始められます。</p>\n<p><strong>採点基準で使われる表現:</strong>「ウイルスDNAが宿主の染色体に組み込まれる」「プロファージと呼ばれる」「宿主のDNAとともに複製され娘細胞に受け継がれる」「新しいウイルスはつくられない」「ストレスやDNA損傷で誘発されて溶菌サイクルに入る」。</p>\n<p><strong>よくある間違い:</strong>ウイルスが「死んでいる」「不活性」と書く、プロファージを細胞質にある小さな環状DNAと書く（染色体の一部です）、溶原サイクルで宿主細胞が死ぬと書く。</p>\n<div class=\"note\">発展（必須ではありません）：プロファージの中には、細菌の性質を変える遺伝子をもつものがあります。たとえばジフテリアを危険にする毒素は、細菌の中のプロファージの遺伝子にコードされています。</div>",
    "zh": "<p><strong>原噬菌體 (prophage) 隨宿主一同複製。</strong>原噬菌體是細菌染色體的一部分，所以每次細胞分裂，宿主自己的 DNA 複製都會把它複製。一個溶原性細菌變成 2、4、8……個。分裂 10 次後有 2<sup>10</sup> = 1024 個細胞，全部都帶有原噬菌體，而且完全沒有製造病毒顆粒。病毒只是休眠，並未死亡。</p>\n<div class=\"note\">延伸（非必修）：<strong>是甚麼令裂解基因關閉？</strong>由病毒基因製造的阻遏蛋白 (repressor) 令裂解基因關閉。紫外線等壓力或 DNA 損傷會破壞這種抑制。原噬菌體隨即由染色體上切出來，裂解週期便開始。</div>\n<p><strong>溶原週期對病毒有何好處？</strong>病毒 DNA 可以在不傷害宿主的情況下被複製並散布到很多細胞，裂解週期可以稍後才開始。</p>\n<p><strong>評分準則常用語：</strong>「病毒 DNA 整合入宿主染色體」；「稱為原噬菌體」；「隨宿主 DNA 複製並傳給子細胞」；「不製造新病毒」；「受壓力／DNA 損傷誘發而進入裂解週期」。</p>\n<p><strong>常見錯誤：</strong>說病毒「死亡」或「不活動」；說原噬菌體是細胞質中一小環獨立的 DNA（它是染色體的一部分）；說溶原週期中宿主細胞被殺死。</p>\n<div class=\"note\">延伸（非必修）：有些原噬菌體帶有額外基因，會改變細菌的性質。例如使白喉具危險性的毒素，就是由細菌內原噬菌體的基因編碼的。</div>"
   }
  },
  {
   "i": 4,
   "deeper": {
    "en": "<p><strong>Weighing the evidence.</strong> A good answer says what each piece of evidence suggests, and why it is not final proof.</p>\n<table><tr><th>Evidence</th><th>What it suggests</th><th>Limitation</th></tr><tr><td>Great diversity: DNA or RNA, single- or double-stranded, enveloped or not, many shapes</td><td>Viruses probably arose more than once</td><td>Diversity could also build up over a very long time from one ancestor</td></tr><tr><td>Shared features: small size, capsid, no metabolism</td><td>May be convergent evolution, not common ancestry</td><td>Shared features could also be inherited from one ancestor</td></tr><tr><td>Same genetic code as living things, and use of host ribosomes</td><td>Viruses are linked to cellular life, so they probably arose from living organisms</td><td>Does not show how many times it happened</td></tr></table>\n<p><strong>Convergent evolution explained.</strong> Unrelated lineages evolve similar features independently, because they face similar selection pressures. Non-virus example: the wings of birds and insects. For viruses, the shared pressure is life as an obligate parasite: be small, make few proteins, rely on the host.</p>\n<p><strong>Nature of science.</strong> Viruses leave no fossils, so scientists must infer their history from living viruses. The evidence favours several origins over one, but it cannot prove it. Claims are accepted when they best explain the evidence, and may change with new data.</p>\n<p><strong>Mark-scheme language:</strong> \"diversity of genetic material and structure\"; \"convergent evolution\"; \"similar selection pressures on obligate parasites\"; \"no evidence for a single common ancestor\".</p>",
    "ja": "<p><strong>証拠を比べて考える。</strong>よい答えは、それぞれの証拠が何を示唆するかと、なぜそれが決定的な証明にならないかを述べます。</p>\n<table><tr><th>証拠</th><th>示唆すること</th><th>限界</th></tr><tr><td>大きな多様性：DNAかRNAか、一本鎖か二本鎖か、エンベロープの有無、さまざまな形</td><td>ウイルスは複数回生じたらしい</td><td>多様性は、共通の祖先から非常に長い時間をかけて生じた可能性もある</td></tr><tr><td>共通の特徴：小さい、カプシドがある、代謝がない</td><td>共通祖先ではなく収斂進化 (convergent evolution) かもしれない</td><td>共通の特徴は1つの祖先から受け継いだ可能性もある</td></tr><tr><td>生物と同じ遺伝暗号、宿主のリボソームの利用</td><td>ウイルスは細胞性の生物と結びつき、生物から生じたらしい</td><td>何回起きたかは示さない</td></tr></table>\n<p><strong>収斂進化とは。</strong>系統の異なる生物が、似た選択圧を受けて、独立に似た特徴を進化させることです。ウイルス以外の例は、鳥と昆虫の翅です。ウイルスに共通する選択圧は偏性寄生者 (obligate parasite) としての生活で、小さく、少ないタンパク質で、宿主に頼ることが有利になります。</p>\n<p><strong>科学の本質。</strong>ウイルスは化石を残さないため、研究者は現存するウイルスから歴史を推定するしかありません。証拠は単一の起源より複数の起源を支持しますが、証明はできません。主張は証拠を最もよく説明するときに受け入れられ、新しいデータで変わることがあります。</p>\n<p><strong>採点基準で使われる表現:</strong>「遺伝物質と構造の多様性」「収斂進化」「偏性寄生者にはたらく似た選択圧」「単一の共通祖先を示す証拠はない」。</p>",
    "zh": "<p><strong>衡量證據。</strong>好的答案會說明每項證據顯示甚麼，以及為何它不是最終證明。</p>\n<table><tr><th>證據</th><th>顯示甚麼</th><th>限制</th></tr><tr><td>極大的多樣性：DNA 或 RNA、單鏈或雙鏈、有或沒有包膜、形狀各異</td><td>病毒很可能多次出現</td><td>多樣性也可能由同一祖先經非常長的時間累積而成</td></tr><tr><td>共同特徵：細小、有衣殼、沒有新陳代謝</td><td>可能是趨同演化 (convergent evolution)，而非共同祖先</td><td>共同特徵也可能是由同一祖先遺傳而來</td></tr><tr><td>與生物相同的遺傳密碼，並利用宿主核糖體</td><td>病毒與細胞生命相連，很可能源自生物</td><td>並未顯示發生過多少次</td></tr></table>\n<p><strong>趨同演化的解釋。</strong>毫無親緣關係的譜系，因面對相似的選擇壓力而各自演化出相似的特徵。非病毒的例子：鳥類和昆蟲的翅膀。對病毒而言，共同的壓力是專性寄生 (obligate parasite) 的生活：身體細小、只製造少數蛋白質、依賴宿主。</p>\n<p><strong>科學本質。</strong>病毒不會留下化石，所以科學家只能從現存病毒推斷其歷史。證據支持多個起源多於單一起源，但不能證明。當一項主張最能解釋證據時便會被接受，並可能隨新數據而改變。</p>\n<p><strong>評分準則常用語：</strong>「遺傳物質和結構的多樣性」；「趨同演化」；「對專性寄生物的相似選擇壓力」；「沒有證據顯示有單一共同祖先」。</p>"
   }
  },
  {
   "i": 5,
   "deeper": {
    "en": "<p><strong>How a resistant virus population arises, step by step.</strong></p>\n<ol><li>Random mutation produces a few viruses with a change that lessens the effect of a drug (or of antibodies). These mutants exist <em>before</em> the drug is given.</li><li>The drug kills most viruses. The resistant mutants survive.</li><li>The survivors reproduce rapidly and pass the mutation to their offspring.</li><li>The resistant type becomes the main type in that patient.</li></ol>\n<p>The drug does not <em>cause</em> the mutation. It <em>selects</em> it. This is natural selection acting on a population that reproduces very fast.</p>\n<p><strong>Worked numbers (illustrative).</strong> Suppose a virus makes one copying error per 10 000 bases and its genome is 10 000 bases long. On average each new virus then has about 1 new mutation. A DNA-based organism with proofreading makes roughly 1 error per 10<sup>9</sup> bases copied, which is about 100 000 times fewer errors per base.</p>\n<p><strong>Why combination therapy works.</strong> Suppose 1 in 10<sup>3</sup> viruses is resistant to drug A and 1 in 10<sup>4</sup> to drug B, and the mutations are independent. The chance that one virus resists both is 1 in 10<sup>3</sup> × 10<sup>4</sup> = 1 in 10<sup>7</sup>. Much rarer, so the infection is more likely to be controlled.</p>\n<p><strong>Mark-scheme language.</strong> Reasons: \"high mutation rate\"; \"RNA polymerase / reverse transcriptase has no proofreading\"; \"short generation time and huge numbers\"; \"selection for mutants that escape\". Consequences: \"a new flu vaccine is needed regularly\"; \"resistance to a single drug evolves, so drugs are combined\"; \"an HIV vaccine is hard to make\".</p>",
    "ja": "<p><strong>耐性をもつウイルス集団ができる過程。</strong></p>\n<ol><li>ランダムな突然変異で、薬（または抗体）の効果を弱める変化をもつウイルスがわずかに生じます。この変異体は、薬を投与する<em>前</em>から存在します。</li><li>薬はほとんどのウイルスを殺しますが、耐性をもつ変異体は生き残ります。</li><li>生き残ったウイルスは急速に増え、変異を子孫に伝えます。</li><li>その患者の体内では、耐性のあるタイプが主流になります。</li></ol>\n<p>薬が変異を<em>起こす</em>のではなく、変異を<em>選択する</em>のです。これは、非常に速く増える集団にはたらく自然選択です。</p>\n<p><strong>計算例（説明用の数値）。</strong>あるウイルスが10 000塩基に1回の複製ミスをし、ゲノムが10 000塩基だとします。すると、新しいウイルスは平均して約1個の新しい変異をもちます。校正機能をもつDNAの生物では、複製ミスはおよそ10<sup>9</sup>塩基に1回で、塩基あたりのミスは約10万分の1です。</p>\n<p><strong>併用療法が効く理由。</strong>薬Aに耐性のウイルスが10<sup>3</sup>個に1個、薬Bに耐性のものが10<sup>4</sup>個に1個で、変異が互いに独立だとします。1個のウイルスが両方に耐性をもつ確率は 1/(10<sup>3</sup> × 10<sup>4</sup>) = 10<sup>7</sup>分の1です。はるかにまれなので、感染を抑えやすくなります。</p>\n<p><strong>採点基準で使われる表現。</strong>理由：「突然変異率が高い」「RNAポリメラーゼ／逆転写酵素 (reverse transcriptase) に校正機能がない」「世代時間が短く数が非常に多い」「逃れる変異体が選択される」。結果：「新しいインフルエンザワクチンが定期的に必要」「1種類の薬への耐性が進化するので薬を併用する」「HIVワクチンはつくりにくい」。</p>",
    "zh": "<p><strong>抗藥病毒群體如何逐步形成。</strong></p>\n<ol><li>隨機突變令少數病毒產生一個變化，減弱藥物（或抗體）的效果。這些突變體在用藥<em>之前</em>已經存在。</li><li>藥物殺死大部分病毒，抗藥的突變體存活下來。</li><li>倖存者迅速繁殖，並把突變傳給後代。</li><li>該病人體內的主要類型變成抗藥類型。</li></ol>\n<p>藥物並不會<em>引起</em>突變，而是<em>選擇</em>突變。這是自然選擇作用於一個繁殖極快的群體。</p>\n<p><strong>計算示例（說明用數字）。</strong>假設某病毒每 10 000 個鹼基出現一次複製錯誤，基因組長 10 000 個鹼基。那麼每個新病毒平均約有 1 個新突變。具校對功能的 DNA 生物，每複製約 10<sup>9</sup> 個鹼基才出現一次錯誤，每個鹼基的錯誤約少 10 萬倍。</p>\n<p><strong>為何合併治療有效。</strong>假設每 10<sup>3</sup> 個病毒有 1 個抗藥物 A，每 10<sup>4</sup> 個有 1 個抗藥物 B，兩種突變互相獨立。一個病毒同時抗兩種藥的機會是 1/(10<sup>3</sup> × 10<sup>4</sup>) = 10<sup>7</sup> 分之 1，罕見得多，所以感染更容易受控。</p>\n<p><strong>評分準則常用語。</strong>原因：「突變率高」；「RNA 聚合酶／逆轉錄酶 (reverse transcriptase) 沒有校對功能」；「世代時間短、數量極多」；「選擇了能逃避的突變體」。後果：「需要定期更新流感疫苗」；「對單一藥物產生抗藥性，所以要合併用藥」；「HIV 疫苗難以製成」。</p>"
   }
  }
 ],
 "questions": [
  {
   "id": "a2-3-q16",
   "type": "short",
   "ahl": true,
   "difficulty": 3,
   "ref": "A2.3.4",
   "paper": "1B",
   "commandTerm": "Explain",
   "marks": 4,
   "stem": {
    "en": "A culture of <em>E. coli</em> that carries a lambda prophage was split into two. One half was exposed to a brief dose of ultraviolet (UV) radiation at time 0. The other half was not. The cloudiness (optical density) of each culture was measured. Cloudiness is higher when more intact bacteria are present. (a) Describe the trend of the untreated culture. (b) Explain the change in the UV-treated culture between 60 and 120 minutes. (c) Predict what a sample of the UV-treated culture would contain at 120 minutes that the untreated culture would not.",
    "ja": "λプロファージをもつ大腸菌 (<em>E. coli</em>) の培養液を2つに分けました。一方には時間0に短時間の紫外線 (UV) を当て、もう一方には当てませんでした。それぞれの培養液の濁り（光学密度）を測定しました。無傷の細菌が多いほど濁りは大きくなります。(a) 処理していない培養液の傾向を述べなさい。(b) 60分から120分の間のUV処理した培養液の変化を説明しなさい。(c) 120分の時点でUV処理した培養液の試料に含まれ、処理していない培養液には含まれないものを予測しなさい。",
    "zh": "把帶有λ原噬菌體的大腸桿菌 (<em>E. coli</em>) 培養液分成兩份。其中一份在時間 0 受短暫紫外線 (UV) 照射，另一份則不。量度兩份培養液的混濁度（光密度）。完整細菌愈多，混濁度愈高。(a) 描述未處理培養液的趨勢。(b) 解釋 UV 處理培養液在 60 至 120 分鐘之間的變化。(c) 預測 120 分鐘時，UV 處理培養液的樣本含有哪些未處理培養液不含的東西。"
   },
   "data": {
    "en": "<table><tr><th>Time / min</th><th>0</th><th>30</th><th>60</th><th>90</th><th>120</th></tr><tr><td>Cloudiness, untreated</td><td>0.20</td><td>0.35</td><td>0.60</td><td>1.05</td><td>1.80</td></tr><tr><td>Cloudiness, UV-treated</td><td>0.20</td><td>0.24</td><td>0.28</td><td>0.15</td><td>0.06</td></tr></table>",
    "ja": "<table><tr><th>時間 / 分</th><th>0</th><th>30</th><th>60</th><th>90</th><th>120</th></tr><tr><td>濁り（未処理）</td><td>0.20</td><td>0.35</td><td>0.60</td><td>1.05</td><td>1.80</td></tr><tr><td>濁り（UV処理）</td><td>0.20</td><td>0.24</td><td>0.28</td><td>0.15</td><td>0.06</td></tr></table>",
    "zh": "<table><tr><th>時間 / 分鐘</th><th>0</th><th>30</th><th>60</th><th>90</th><th>120</th></tr><tr><td>混濁度（未處理）</td><td>0.20</td><td>0.35</td><td>0.60</td><td>1.05</td><td>1.80</td></tr><tr><td>混濁度（UV 處理）</td><td>0.20</td><td>0.24</td><td>0.28</td><td>0.15</td><td>0.06</td></tr></table>"
   },
   "markscheme": [
    {
     "en": "(a) Cloudiness rises steadily and the rate increases (0.20 to 1.80 over 120 min): the bacteria are dividing and the population is growing",
     "ja": "(a) 濁りは着実に増え、増加の速さも上がる（120分で0.20から1.80）：細菌が分裂して集団が増えている",
     "zh": "(a) 混濁度穩定上升，而且上升速度加快（120 分鐘內由 0.20 升至 1.80）：細菌在分裂，群體增大"
    },
    {
     "en": "(b) UV causes DNA damage (stress), which triggers the prophage to leave the bacterial chromosome and start the lytic cycle",
     "ja": "(b) UVがDNAを損傷し（ストレス）、プロファージが細菌の染色体から抜け出して溶菌サイクルを始める",
     "zh": "(b) UV 造成 DNA 損傷（壓力），觸發原噬菌體離開細菌染色體並開始裂解週期"
    },
    {
     "en": "Viral DNA is copied and capsids made using host resources, and the bacteria burst (lyse), so the number of intact cells and the cloudiness fall after 60 min",
     "ja": "宿主の資源を使ってウイルスDNAが複製されカプシドがつくられ、細菌が破裂（溶菌）するので、60分以降は無傷の細胞数と濁りが減る",
     "zh": "病毒 DNA 利用宿主資源複製並製造衣殼，細菌破裂（裂解），所以 60 分鐘後完整細胞數目和混濁度下降"
    },
    {
     "en": "(c) Free (new) bacteriophages released from the lysed cells, which the untreated culture would not contain in significant numbers",
     "ja": "(c) 溶菌した細胞から放出された遊離の（新しい）ファージ。未処理の培養液には、意味のある数は含まれない",
     "zh": "(c) 從裂解細胞釋出的自由（新）噬菌體；未處理培養液不會含有顯著數量"
    }
   ],
   "modelAnswer": {
    "en": "(a) The untreated culture's cloudiness increases faster and faster, from 0.20 to 1.80, because the bacteria keep dividing. (b) UV damages the bacterial DNA. This stress makes the prophage leave the chromosome and start the lytic cycle. Viral DNA and capsids are made using host resources and the cells burst, so cloudiness falls from 0.28 to 0.06. (c) Free new phages released by lysis.",
    "ja": "(a) 未処理の培養液は細菌が分裂し続けるため、濁りが0.20から1.80へとだんだん速く増える。(b) UVが細菌のDNAを損傷する。このストレスでプロファージが染色体から抜け出して溶菌サイクルを始める。宿主の資源でウイルスDNAとカプシドがつくられ、細胞が破裂するので、濁りは0.28から0.06に下がる。(c) 溶菌で放出された遊離の新しいファージ。",
    "zh": "(a) 未處理培養液的混濁度由 0.20 升至 1.80，升得愈來愈快，因為細菌不斷分裂。(b) UV 損傷細菌 DNA。這種壓力令原噬菌體離開染色體並開始裂解週期。病毒 DNA 和衣殼利用宿主資源製造，細胞破裂，所以混濁度由 0.28 降至 0.06。(c) 裂解時釋出的自由新噬菌體。"
   }
  },
  {
   "id": "a2-3-q17",
   "type": "mcq",
   "ahl": true,
   "difficulty": 2,
   "ref": "A2.3.4",
   "paper": "1A",
   "stem": {
    "en": "Which statement about a prophage is correct?",
    "ja": "プロファージについて正しい記述はどれですか。",
    "zh": "關於原噬菌體，哪項陳述正確？"
   },
   "options": [
    {
     "en": "It is a complete virus particle that waits outside the bacterium.",
     "ja": "細菌の外で待機している完全なウイルス粒子である。",
     "zh": "它是在細菌外等待的完整病毒顆粒。"
    },
    {
     "en": "It is viral DNA integrated into the bacterial chromosome and copied when the bacterium divides.",
     "ja": "細菌の染色体に組み込まれ、細菌が分裂するときに複製されるウイルスDNAである。",
     "zh": "它是整合入細菌染色體的病毒 DNA，細菌分裂時隨之複製。"
    },
    {
     "en": "It is a protein coat left outside the bacterium after DNA injection.",
     "ja": "DNA注入後に細菌の外に残るタンパク質の殻である。",
     "zh": "它是注入 DNA 後留在細菌外的蛋白質外殼。"
    },
    {
     "en": "It is a separate circle of viral DNA that makes new viruses continuously.",
     "ja": "新しいウイルスをつくり続ける、独立した環状のウイルスDNAである。",
     "zh": "它是獨立的環狀病毒 DNA，不斷製造新病毒。"
    }
   ],
   "answer": 1,
   "explanation": {
    "en": "A prophage is viral DNA integrated into the host chromosome in the lysogenic cycle, so it is copied with the host DNA and passed to daughter cells. A describes a free virus particle. C describes the empty capsid left after injection. D is wrong: in the lysogenic cycle the prophage is part of the chromosome and no new viruses are made until the switch to the lytic cycle.",
    "ja": "プロファージは、溶原サイクルで宿主の染色体に組み込まれたウイルスDNAで、宿主のDNAとともに複製され、娘細胞に受け継がれます。Aは遊離のウイルス粒子、Cは注入後に残る空のカプシドの説明です。Dは誤りで、溶原サイクルでは染色体の一部であり、溶菌サイクルに切り替わるまで新しいウイルスはつくられません。",
    "zh": "原噬菌體是溶原週期中整合入宿主染色體的病毒 DNA，所以隨宿主 DNA 複製並傳給子細胞。A 描述的是自由病毒顆粒。C 描述的是注入後留下的空衣殼。D 錯誤：在溶原週期中原噬菌體是染色體的一部分，轉入裂解週期之前不會製造新病毒。"
   }
  },
  {
   "id": "a2-3-q18",
   "type": "multi",
   "ahl": true,
   "difficulty": 2,
   "ref": "A2.3.1–A2.3.2",
   "paper": "1A",
   "stem": {
    "en": "Select <strong>all</strong> the features that bacteriophage lambda, coronaviruses and HIV have in common.",
    "ja": "λファージ、コロナウイルス、HIVに<strong>共通する</strong>特徴を<strong>すべて</strong>選びなさい。",
    "zh": "選出λ噬菌體、冠狀病毒和 HIV 的<strong>所有</strong>共同特徵。"
   },
   "options": [
    {
     "en": "A protein capsid surrounding the nucleic acid",
     "ja": "核酸を囲むタンパク質のカプシド",
     "zh": "包圍核酸的蛋白質衣殼"
    },
    {
     "en": "An outer envelope taken from host membrane",
     "ja": "宿主の膜に由来する外側のエンベロープ",
     "zh": "取自宿主細胞膜的外層包膜"
    },
    {
     "en": "Double-stranded DNA as the genetic material",
     "ja": "遺伝物質としての二本鎖DNA",
     "zh": "以雙鏈 DNA 作為遺傳物質"
    },
    {
     "en": "No cytoplasm of their own",
     "ja": "自前の細胞質をもたない",
     "zh": "沒有自己的細胞質"
    },
    {
     "en": "They can only reproduce inside a host cell",
     "ja": "宿主細胞の中でしか増えられない",
     "zh": "只能在宿主細胞內繁殖"
    }
   ],
   "answer": [
    0,
    3,
    4
   ],
   "explanation": {
    "en": "All viruses have a capsid, have no cytoplasm and need a host cell to reproduce. Only coronaviruses and HIV have an envelope (lambda does not). Only lambda has double-stranded DNA; coronaviruses and HIV have single-stranded RNA.",
    "ja": "すべてのウイルスはカプシドをもち、細胞質がなく、増えるのに宿主細胞を必要とします。エンベロープをもつのはコロナウイルスとHIVだけで、λファージにはありません。二本鎖DNAをもつのはλファージだけで、コロナウイルスとHIVは一本鎖RNAです。",
    "zh": "所有病毒都有衣殼、沒有細胞質，並需要宿主細胞才能繁殖。只有冠狀病毒和 HIV 有包膜（λ噬菌體沒有）。只有λ噬菌體含雙鏈 DNA；冠狀病毒和 HIV 含單鏈 RNA。"
   }
  },
  {
   "id": "a2-3-q19",
   "type": "short",
   "ahl": true,
   "difficulty": 3,
   "ref": "A2.3.6",
   "paper": "1B",
   "commandTerm": "Calculate",
   "marks": 4,
   "stem": {
    "en": "In a patient infected with a virus, mutations that give resistance to drug X occur in 1 in 10 000 new viruses, and mutations that give resistance to drug Y occur in 1 in 100 000 new viruses. The two mutations arise independently. The patient's body produces 100 million (10<sup>8</sup>) new viruses per day (illustrative figures). (a) Calculate the chance that a new virus is resistant to both drugs. (b) Calculate the number of new viruses per day expected to be resistant to drug X alone, and the number expected to be resistant to both. (c) Explain why treating with drug X alone is likely to fail.",
    "ja": "ウイルスに感染した患者で、薬Xに耐性を与える変異は新しいウイルス10 000個に1個、薬Yに耐性を与える変異は100 000個に1個の割合で起こります。2つの変異は互いに独立に生じます。患者の体内では1日に1億個（10<sup>8</sup>個）の新しいウイルスがつくられます（説明用の数値）。(a) 新しいウイルスが両方の薬に耐性である確率を計算しなさい。(b) 1日に薬Xだけに耐性をもつと予想されるウイルスの数と、両方に耐性をもつと予想される数を計算しなさい。(c) 薬Xだけで治療すると失敗しやすい理由を説明しなさい。",
    "zh": "在受病毒感染的病人體內，令病毒抗藥物 X 的突變每 10 000 個新病毒出現 1 個，令病毒抗藥物 Y 的突變每 100 000 個新病毒出現 1 個。兩種突變獨立發生。病人身體每日產生 1 億個（10<sup>8</sup>）新病毒（說明用數字）。(a) 計算一個新病毒同時抗兩種藥的機會。(b) 計算每日預期只抗藥物 X 的新病毒數目，以及預期同時抗兩種藥的數目。(c) 解釋為何單用藥物 X 治療很可能失敗。"
   },
   "markscheme": [
    {
     "en": "(a) 1/10 000 × 1/100 000 = 1 in 10<sup>9</sup> (1 in 1 000 000 000)",
     "ja": "(a) 1/10 000 × 1/100 000 = 10<sup>9</sup>分の1（10億分の1）",
     "zh": "(a) 1/10 000 × 1/100 000 = 10<sup>9</sup> 分之 1（十億分之一）"
    },
    {
     "en": "(b) Resistant to X alone: 10<sup>8</sup> ÷ 10<sup>4</sup> = 10 000 per day",
     "ja": "(b) Xだけに耐性：10<sup>8</sup> ÷ 10<sup>4</sup> = 1日に10 000個",
     "zh": "(b) 只抗 X：10<sup>8</sup> ÷ 10<sup>4</sup> = 每日 10 000 個"
    },
    {
     "en": "Resistant to both: 10<sup>8</sup> ÷ 10<sup>9</sup> = 0.1 per day, so very unlikely in a single day",
     "ja": "両方に耐性：10<sup>8</sup> ÷ 10<sup>9</sup> = 1日に0.1個で、1日ではまず起こらない",
     "zh": "同時抗兩種：10<sup>8</sup> ÷ 10<sup>9</sup> = 每日 0.1 個，所以一日內極不可能出現"
    },
    {
     "en": "(c) Many viruses (about 10 000 a day) already resist X. Drug X kills the non-resistant viruses, so the resistant ones survive and reproduce (natural selection) and soon form most of the population",
     "ja": "(c) すでに多くのウイルス（1日約10 000個）がXに耐性をもつ。薬Xは耐性のないウイルスを殺すので、耐性のあるウイルスが生き残って増え（自然選択）、やがて集団の大部分になる",
     "zh": "(c) 已有很多病毒（每日約 10 000 個）抗藥物 X。藥物 X 殺死不抗藥的病毒，抗藥的便存活並繁殖（自然選擇），很快成為群體的大部分"
    }
   ],
   "modelAnswer": {
    "en": "(a) 1/10 000 × 1/100 000 = 1 in 10<sup>9</sup>. (b) To X alone: 10<sup>8</sup> ÷ 10<sup>4</sup> = 10 000 per day. To both: 10<sup>8</sup> ÷ 10<sup>9</sup> = 0.1 per day. (c) About 10 000 viruses a day are already resistant to X. The drug kills the others, so the resistant viruses survive and reproduce by natural selection and become the main type. Using two drugs together makes a virus resistant to both about 100 000 times rarer.",
    "ja": "(a) 1/10 000 × 1/100 000 = 10<sup>9</sup>分の1。(b) Xだけ：10<sup>8</sup> ÷ 10<sup>4</sup> = 1日に10 000個。両方：10<sup>8</sup> ÷ 10<sup>9</sup> = 1日に0.1個。(c) 1日に約10 000個のウイルスがすでにXに耐性をもつ。薬が他のウイルスを殺すので、耐性ウイルスは自然選択によって生き残り増えて主流になる。2つの薬を併用すると、両方に耐性のウイルスは約10万分の1のまれさになる。",
    "zh": "(a) 1/10 000 × 1/100 000 = 10<sup>9</sup> 分之 1。(b) 只抗 X：10<sup>8</sup> ÷ 10<sup>4</sup> = 每日 10 000 個。同時抗兩種：10<sup>8</sup> ÷ 10<sup>9</sup> = 每日 0.1 個。(c) 每日約有 10 000 個病毒已抗藥物 X。藥物殺死其餘病毒，抗藥病毒便通過自然選擇存活並繁殖，成為主要類型。合用兩種藥後，同時抗兩種藥的病毒會罕見約 10 萬倍。"
   }
  }
 ]
};
const __rt = IB.registerTopic.bind(IB);
const __registerTopic = (tp) => {
  __EXT.deeper.forEach((d) => { const s = tp.sections[d.i]; s.deeper = d.deeper; if (d.title) s.deeperTitle = d.title; });
  tp.questions.push(...__EXT.questions);
  __rt(tp);
};
/*EXT-END*/
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
<p>病毒沒有自己的質膜、核糖體或細胞器。這是病毒被視為非生物的原因之一（見 A2.1.2）。</p>`)
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
    { id: "a2-3-q03", type: "match", ahl: true, difficulty: 1, ref: "A2.3.1–A2.3.5", paper: "1A",
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
        T("HIV is a bacterium, so each drug acts on a different organelle.", "HIVは細菌なので、薬ごとに違う細胞小器官に働くから。", "HIV 是細菌，所以每種藥作用於不同的細胞器。")],
      answer: 1,
      explanation: T("Because mutations are random and fairly rare at any one site, the chance that one virus carries several resistance mutations together is far smaller than the chance for one. A is not the reason. C is false because the drugs do not stop mutation. D is false: HIV is a virus, not a bacterium, and has no organelles.",
        "変異はランダムで、特定の部位では比較的まれなので、1つのウイルスが複数の耐性変異を同時にもつ確率は、1つだけの場合よりはるかに小さくなります。Aは理由ではなく、Cは薬が変異を止めるわけではないので誤り、DはHIVが細菌ではなくウイルスで、細胞小器官ももたないので誤りです。",
        "突變是隨機的，在某一位點上相當罕見，所以一個病毒同時帶有多個抗藥突變的機會，遠比只帶一個的機會小。A 不是原因。C 錯誤，藥物並不能阻止突變。D 錯誤：HIV 是病毒，不是細菌，也沒有細胞器。") },

  ];
    __registerTopic({
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
