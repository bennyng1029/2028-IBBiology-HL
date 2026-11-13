/* Widget: dna-builder — nucleotide parts, backbone and condensation (A1.2.2–5), building a complementary strand with
   antiparallel strands (A1.2.6, A1.2.8), DNA vs RNA (A1.2.7) and two AHL options: 5'/3' ends (A1.2.11), purine/pyrimidine (A1.2.12).
   Shapes follow the guide: circle = phosphate, pentagon = pentose sugar, rectangle = base.
   The numbers of hydrogen bonds per base pair are deliberately NOT shown (not required by the guide). */
(function () {
  var L = function (en, ja, zh) { return { en: en, ja: ja, zh: zh }; };
  var P5 = "5′", P3 = "3′";

  var CSS = [
    ".w-dna-builder{font-family:var(--font-body,system-ui,sans-serif);color:var(--ink,#0f2029)}",
    ".w-dna-builder .wd-tabs,.w-dna-builder .wd-row{display:flex;flex-wrap:wrap;gap:.4rem;margin:0 0 .6rem;align-items:center}",
    ".w-dna-builder button{font:inherit;font-size:.88rem;font-weight:700;min-height:2.5rem;padding:.35rem .75rem;border-radius:var(--radius,6px);border:1.5px solid var(--line-strong,var(--line,#c3d0d7));background:var(--surface,#fff);color:var(--ink,#0f2029);cursor:pointer;line-height:1.2}",
    ".w-dna-builder button[aria-pressed=true]{background:var(--accent,#2547c7);border-color:var(--accent,#2547c7);color:var(--on-accent,#fff)}",
    ".w-dna-builder button:focus-visible,.w-dna-builder input:focus-visible,.w-dna-builder [role=button]:focus-visible{outline:3px solid var(--accent,#2547c7);outline-offset:2px}",
    ".w-dna-builder .wd-base{min-width:4.2rem;min-height:3.2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.1rem}",
    ".w-dna-builder .wd-base b{font-size:1.25rem}",
    ".w-dna-builder .wd-base small{font-size:.68rem;font-weight:600;opacity:.85}",
    ".w-dna-builder label.wd-chk{display:inline-flex;align-items:center;gap:.4rem;font-size:.88rem;min-height:2.25rem;padding:0 .3rem;cursor:pointer}",
    ".w-dna-builder label.wd-chk input{width:1.15rem;height:1.15rem;accent-color:var(--accent,#2547c7)}",
    ".w-dna-builder .wd-ahl{display:inline-block;font-size:.68rem;font-weight:800;letter-spacing:.05em;padding:.05rem .4rem;border-radius:3px;background:var(--ahl,#ffcf3a);color:var(--ahl-ink,#2a2000)}",
    ".w-dna-builder .wd-stage{background:var(--surface,#fff);border:1px solid var(--line,#c3d0d7);border-radius:var(--radius,6px)}",
    ".w-dna-builder svg{display:block;width:100%;height:auto;max-height:78vh}",
    ".w-dna-builder svg text{fill:var(--ink,#0f2029);font-family:var(--font-body,system-ui,sans-serif)}",
    ".w-dna-builder [role=button]{cursor:pointer}",
    ".w-dna-builder .wd-msg{margin:.6rem 0 0;padding:.55rem .75rem;border-radius:var(--radius,6px);background:var(--surface-2,#e3eaee);font-size:.92rem;line-height:1.5;min-height:2.6rem}",
    ".w-dna-builder .wd-msg.good{background:var(--good-soft,#dcf2e4)}",
    ".w-dna-builder .wd-msg.bad{background:var(--bad-soft,#fbe0de)}",
    ".w-dna-builder table{width:100%;margin-top:.6rem;font-size:.88rem}",
    ".w-dna-builder th,.w-dna-builder td{border:1px solid var(--line,#c3d0d7);padding:.3rem .5rem;text-align:left;vertical-align:top}",
    ".w-dna-builder .wd-note{margin:.4rem 0 0;font-size:.78rem;color:var(--muted,#4d626d)}"
  ].join("\n");

  var T = {
    title: L("DNA and RNA builder", "DNA・RNA ビルダー", "DNA 與 RNA 建構器"),
    tabs: {
      parts: L("Nucleotide parts", "ヌクレオチドの構成 (nucleotide)", "核苷酸組成 (nucleotide)"),
      build: L("Build a DNA strand", "DNA 鎖をつくる (complementary)", "建構 DNA 鏈 (complementary)"),
      compare: L("DNA vs RNA", "DNA と RNA", "DNA 與 RNA")
    },
    dna: L("DNA", "DNA", "DNA"), rna: L("RNA", "RNA", "RNA"),
    join: L("Join nucleotides (condensation)", "ヌクレオチドをつなぐ (縮合)", "連接核苷酸 (縮合)"),
    split: L("Separate them", "もとに戻す", "分開它們"),
    sh53: L("Show 5′ and 3′ ends", "5′・3′ 末端を表示 (5′ and 3′ ends)", "顯示 5′ 與 3′ 端 (5′ and 3′ ends)"),
    shPP: L("Colour purines and pyrimidines", "プリン・ピリミジンを色分け (purine, pyrimidine)", "以顏色區分嘌呤與嘧啶 (purine, pyrimidine)"),
    newSeq: L("New sequence", "新しい配列", "新序列"),
    reset: L("Start again", "やり直す", "重新開始"),
    ahl: L("AHL", "AHL", "AHL"),
    names: { A: L("adenine", "アデニン (adenine)", "腺嘌呤 (adenine)"), T: L("thymine", "チミン (thymine)", "胸腺嘧啶 (thymine)"), G: L("guanine", "グアニン (guanine)", "鳥嘌呤 (guanine)"), C: L("cytosine", "シトシン (cytosine)", "胞嘧啶 (cytosine)"), U: L("uracil", "ウラシル (uracil)", "尿嘧啶 (uracil)") },
    lab: {
      phosphate: L("phosphate", "リン酸 (phosphate)", "磷酸 (phosphate)"),
      sugar: L("pentose sugar", "五炭糖 (pentose sugar)", "戊糖 (pentose sugar)"),
      deoxy: L("deoxyribose", "デオキシリボース", "脫氧核糖"),
      ribose: L("ribose", "リボース", "核糖"),
      base: L("nitrogenous base", "窒素を含む塩基 (nitrogenous base)", "含氮鹼基 (nitrogenous base)"),
      monomers: L("3 separate nucleotides", "3つの別々のヌクレオチド", "3 個分開的核苷酸"),
      polymer: L("one strand (polymer)", "1本の鎖 (polymer)", "一條鏈 (polymer)"),
      backbone: L("sugar–phosphate backbone", "糖−リン酸骨格 (sugar–phosphate backbone)", "糖−磷酸骨架 (sugar–phosphate backbone)"),
      water: L("water released", "水が放出される", "釋出水"),
      pair: L("complementary base pair", "相補的塩基対", "互補鹼基對"),
      legP: L("circle = phosphate", "円 = リン酸 (phosphate)", "圓形 = 磷酸 (phosphate)"),
      legS: L("pentagon = pentose sugar", "五角形 = 五炭糖 (pentose sugar)", "五邊形 = 戊糖 (pentose sugar)"),
      legB: L("rectangle = base", "長方形 = 塩基 (base)", "長方形 = 鹼基 (base)"),
      legH: L("dashed = hydrogen bonds", "破線 = 水素結合 (hydrogen bonds)", "虛線 = 氫鍵 (hydrogen bonds)"),
      legC: L("solid line = covalent bond", "実線 = 共有結合", "實線 = 共價鍵"),
      purine: L("purine (A, G): double ring, long", "プリン (purine)：A、G。二重環で長い", "嘌呤 (purine)：A、G。雙環，較長"),
      pyrimidine: L("pyrimidine (C, T): single ring, short", "ピリミジン (pyrimidine)：C、T。単一環で短い", "嘧啶 (pyrimidine)：C、T。單環，較短"),
      sameWidth: L("every pair is one purine + one pyrimidine: same width", "どの対もプリン1つ + ピリミジン1つ：同じ幅", "每個鹼基對都是一個嘌呤 + 一個嘧啶：寬度相同"),
      dirs: L("antiparallel: strands run in opposite directions", "逆平行 (antiparallel)：2本の鎖は逆向き", "反向平行 (antiparallel)：兩條鏈走向相反"),
      strands2: L("two strands", "2本鎖 (two strands)", "兩條鏈 (two strands)"),
      strand1: L("one strand", "1本鎖 (one strand)", "一條鏈 (one strand)"),
      ribose2: L("ribose", "リボース (ribose)", "核糖 (ribose)"),
      deoxy2: L("deoxyribose", "デオキシリボース (deoxyribose)", "脫氧核糖 (deoxyribose)"),
      base1: L("base", "塩基", "鹼基"),
      slot: L("?", "?", "?")
    },
    parts: {
      phosphate: L("<strong>Phosphate</strong> (circle). It joins to the sugar of the next nucleotide, forming the backbone.", "<strong>リン酸</strong> (円)。次のヌクレオチドの糖とつながり、骨格をつくります。", "<strong>磷酸</strong> (圓形)。它與下一個核苷酸的糖連接，形成骨架。"),
      sugarDNA: L("<strong>Deoxyribose</strong> (pentagon): the pentose (five-carbon) sugar of DNA. The phosphate and the base are both attached to it.", "<strong>デオキシリボース</strong> (五角形)：DNA の五炭糖 (炭素5個の糖)。リン酸と塩基の両方が結合しています。", "<strong>脫氧核糖</strong> (五邊形)：DNA 的戊糖 (五碳糖)。磷酸和鹼基都連接在它上面。"),
      sugarRNA: L("<strong>Ribose</strong> (pentagon): the pentose (five-carbon) sugar of RNA. The phosphate and the base are both attached to it.", "<strong>リボース</strong> (五角形)：RNA の五炭糖 (炭素5個の糖)。リン酸と塩基の両方が結合しています。", "<strong>核糖</strong> (五邊形)：RNA 的戊糖 (五碳糖)。磷酸和鹼基都連接在它上面。"),
      base: L("<strong>Nitrogenous base</strong> (rectangle). The order of bases along the strand is the genetic code.", "<strong>窒素を含む塩基</strong> (長方形)。鎖に沿った塩基の並び順が遺伝暗号です。", "<strong>含氮鹼基</strong> (長方形)。沿鏈的鹼基排列次序就是遺傳密碼。"),
      hint: L("Tap a shape to see what it is.", "図形をタップすると、何かがわかります。", "點按圖形查看它是什麼。")
    },
    capParts: {
      separate: L("Each nucleotide has a phosphate, a pentose sugar and a base.", "各ヌクレオチドは、リン酸・五炭糖・塩基をもちます。", "每個核苷酸都有一個磷酸、一個戊糖和一個鹼基。"),
      joined: L("<strong>Condensation:</strong> the phosphate of one nucleotide bonds to the sugar of the next and a molecule of water is released each time. The covalent sugar–phosphate bonds make a strong backbone, and the bases stick out sideways.", "<strong>縮合：</strong>あるヌクレオチドのリン酸が次のヌクレオチドの糖と結合し、そのたびに水の分子が1つ放出されます。共有結合した糖−リン酸の結合が強い骨格をつくり、塩基は横に突き出します。", "<strong>縮合：</strong>一個核苷酸的磷酸與下一個的糖結合，每次釋出一分子水。共價的糖−磷酸鍵形成堅固的骨架，鹼基則向側面伸出。")
    },
    build: {
      start: L("Tap the base that pairs with the highlighted base on the left strand.", "左の鎖の強調された塩基と対をつくる塩基をタップしてください。", "請點按能與左鏈高亮鹼基配對的鹼基。"),
      wrong: L("Not quite. <strong>A pairs with T, and G pairs with C</strong> (hydrogen bonds between complementary bases). Try again.", "惜しい。<strong>A は T と、G は C と対をつくります</strong> (相補的な塩基どうしの水素結合)。もう一度。", "不完全正確。<strong>A 與 T 配對，G 與 C 配對</strong> (互補鹼基之間的氫鍵)。請再試一次。"),
      right: L("Correct! Each base pairs with its complement through hydrogen bonds.", "正解！各塩基は、水素結合によって相補的な塩基と対をつくります。", "正確！每個鹼基都透過氫鍵與其互補鹼基配對。"),
      done: L("Complete. The new strand is complementary to the template. Notice the two backbones run in opposite directions (antiparallel).", "完成です。新しい鎖は鋳型に相補的です。2本の骨格が逆向き (逆平行) に走っていることに注目しましょう。", "完成。新鏈與模板互補。請留意兩條骨架走向相反 (反向平行)。"),
      mistakes: L("Mistakes", "間違い", "錯誤次數"),
      template: L("template strand", "鋳型鎖 (template)", "模板鏈 (template)"),
      newStrand: L("new strand", "新しい鎖 (new)", "新鏈 (new)")
    },
    compare: {
      cap: L("The highlighted features are the differences: number of strands, the base (T in DNA, U in RNA) and the sugar (deoxyribose has H, ribose has OH on carbon 2′).", "強調表示された点が違いです。鎖の数、塩基 (DNA では T、RNA では U)、糖 (2′位の炭素に、デオキシリボースは H、リボースは OH をもつ)。", "高亮的部分就是差異：鏈的數目、鹼基 (DNA 為 T，RNA 為 U)，以及糖 (在 2′ 位碳上，脫氧核糖是 H，核糖是 OH)。"),
      th: { f: L("Feature", "特徴", "特徵"), d: L("DNA", "DNA", "DNA"), r: L("RNA", "RNA", "RNA") },
      rows: [
        [L("Strands", "鎖の数 (strands)", "鏈的數目 (strands)"), L("two", "2本", "兩條"), L("one", "1本", "一條")],
        [L("Sugar", "糖 (sugar)", "糖 (sugar)"), L("deoxyribose", "デオキシリボース", "脫氧核糖"), L("ribose", "リボース", "核糖")],
        [L("Bases", "塩基 (bases)", "鹼基 (bases)"), L("A, T, G, C", "A、T、G、C", "A、T、G、C"), L("A, U, G, C", "A、U、G、C", "A、U、G、C")]
      ]
    },
    aria: {
      parts: L("Diagram of three nucleotides drawn with circles, pentagons and rectangles", "円・五角形・長方形で描いた3つのヌクレオチドの図", "以圓形、五邊形和長方形繪畫的三個核苷酸圖"),
      build: L("Diagram of two antiparallel DNA strands with complementary base pairs", "相補的塩基対をもつ、逆平行の2本の DNA 鎖の図", "具互補鹼基對的兩條反向平行 DNA 鏈圖"),
      compare: L("Diagram comparing a double-stranded DNA with a single-stranded RNA, and the sugars deoxyribose and ribose", "2本鎖 DNA と1本鎖 RNA、およびデオキシリボースとリボースを比較する図", "比較雙鏈 DNA 與單鏈 RNA，以及脫氧核糖與核糖的圖")
    }
  };

  var COMP = { A: "T", T: "A", G: "C", C: "G" };
  var SEQS = ["ATGCGT", "CGTAAC", "TTAGGC", "GCATCG", "AGCTTA", "CATGGA"];
  var PURINE = { A: 1, G: 1 };

  function esc(s) { return String(s).replace(/"/g, "&quot;"); }
  function svgOpen(w, h, label) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(label) + '" xmlns="http://www.w3.org/2000/svg">'; }
  function txt(x, y, s, size, anchor, weight, fill) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + (size || 11) + '" text-anchor="' + (anchor || "middle") + '" font-weight="' + (weight || 600) + '"' + (fill ? ' style="fill:' + fill + '"' : '') + '>' + s + '</text>';
  }
  function wrapLines(str, maxEm) {
    function w(t) { var n = 0; for (var i = 0; i < t.length; i++) n += t.charCodeAt(i) >= 0x3000 ? 1 : 0.56; return n; }
    var raw = str.match(/\([^)]*\)|[A-Za-z0-9\u2032'.,:;\-\u2013\u2212\/+]+|\s|[^\s]/g) || [], toks = [], lines = [], cur = "";
    raw.forEach(function (t) { if (t.charAt(0) === "(" && w(t) > maxEm) { t.split(/(\s)/).forEach(function (u) { if (u) toks.push(u); }); } else toks.push(t); });
    toks.forEach(function (t) {
      if (/^\s$/.test(t) && !cur) return;
      if (cur && w(cur + t) > maxEm && !/^\s$/.test(t)) { lines.push(cur.replace(/\s+$/, "")); cur = ""; }
      cur += t;
    });
    if (cur) lines.push(cur.replace(/\s+$/, ""));
    return lines;
  }
  function wrap(x, y, str, size, anchor, weight, fillVar, maxEm) {
    return wrapLines(str, maxEm).map(function (ln, i) { return txt(x, y + i * (size + 3), ln, size, anchor, weight, fillVar); }).join("");
  }
  function pill(x, y, str) {
    return '<rect x="' + (x - 13) + '" y="' + (y - 13) + '" width="26" height="19" rx="4" fill="var(--ahl,#6238cc)"/>' + txt(x, y + 1, str, 13, "middle", 800, "var(--ahl-ink,#fff)");
  }
  function pent(cx, cy, r, extra) {
    var pts = [0, 1, 2, 3, 4].map(function (k) { var a = (-90 + k * 72) * Math.PI / 180; return (cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1); }).join(" ");
    return '<polygon points="' + pts + '" fill="var(--theme-a-soft,#d9efec)" stroke="var(--theme-a,#07756f)" stroke-width="2" ' + (extra || "") + '/>';
  }
  function circ(cx, cy, r, extra) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="var(--warn-soft,#ffeed6)" stroke="var(--warn,#9a4a00)" stroke-width="2" ' + (extra || "") + '/>';
  }
  function rectB(x, y, w, h, letter, mode, extra) {
    // mode: "plain" | "purine" | "pyrimidine" | "good" | "slot" | "cur"
    var fill = "var(--accent-soft,#e0e7fb)", stroke = "var(--accent,#2547c7)", dash = "";
    if (mode === "purine") { fill = "var(--theme-a-soft,#d9efec)"; stroke = "var(--theme-a,#07756f)"; }
    if (mode === "pyrimidine") { fill = "var(--theme-b-soft,#f8dfe7)"; stroke = "var(--theme-b,#b82a56)"; }
    if (mode === "slot") { fill = "var(--surface,#fff)"; stroke = "var(--muted,#4d626d)"; dash = ' stroke-dasharray="4 3"'; }
    if (mode === "cur") { fill = "var(--accent-soft,#e0e7fb)"; stroke = "var(--accent,#2547c7)"; dash = ' stroke-dasharray="5 3"'; }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3" fill="' + fill + '" stroke="' + stroke + '" stroke-width="2"' + dash + ' ' + (extra || "") + '/>' +
      (letter ? txt(x + w / 2, y + h / 2 + 5, letter, 14, "middle", 800) : "");
  }
  function line(x1, y1, x2, y2, color, w, dash) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (color || "var(--ink,#0f2029)") + '" stroke-width="' + (w || 2.5) + '" stroke-linecap="round"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>';
  }
  function arrow(x1, y1, x2, y2, color) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    var p1 = [x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)], p2 = [x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)];
    return '<g stroke="' + color + '" fill="' + color + '" stroke-width="2.5" stroke-linecap="round"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/><polygon points="' + x2 + ',' + y2 + ' ' + p1[0] + ',' + p1[1] + ' ' + p2[0] + ',' + p2[1] + '" stroke="none"/></g>';
  }
  function part(name, label, inner) {
    return '<g role="button" tabindex="0" data-part="' + name + '" aria-label="' + esc(label) + '">' + inner + '</g>';
  }

  /* ---------- Tab 1: nucleotide parts ---------- */
  function sceneParts(ctx, st) {
    var bases = st.rna ? ["A", "U", "G"] : ["A", "T", "G"];
    var s = svgOpen(360, 300, ctx.t(T.aria.parts));
    var BB = "var(--accent,#2547c7)", MUT = "var(--muted,#4d626d)", SX = 124;
    for (var i = 0; i < 3; i++) {
      var y0 = 20 + i * 86, py = y0 + 12, sy = y0 + 48;
      s += line(SX, py + 12, SX, sy - 17, st.joined ? BB : null, st.joined ? 4 : 2.5);
      s += line(SX + 17, sy, SX + 32, sy);
      if (i < 2 && st.joined) {
        var ny = y0 + 86 + 12, my = (sy + 17 + ny - 12) / 2;
        s += line(SX, sy + 17, SX, ny - 12, BB, 4);
        s += txt(SX - 62, my + 4, "H₂O", 11, "middle", 700, "var(--c-nitrogen,#2d5cdd)");
        s += arrow(SX - 44, my, SX - 14, my, MUT);
      }
      s += part("phosphate", ctx.t(T.lab.phosphate), circ(SX, py, 12));
      s += part("sugar", ctx.t(T.lab.sugar), pent(SX, sy, 17));
      s += part("base", ctx.t(T.lab.base), rectB(SX + 32, sy - 12, 70, 24, bases[i], "plain"));
    }
    s += txt(SX + 20, 36, ctx.t(T.lab.phosphate), 10.5, "start", 700, MUT);
    var sl = wrapLines(ctx.t(T.lab.sugar), 10);
    s += wrap(SX - 22, 54, ctx.t(T.lab.sugar), 10, "end", 700, MUT, 10);
    s += wrap(SX - 22, 54 + sl.length * 13, "(" + ctx.t(st.rna ? T.lab.ribose : T.lab.deoxy) + ")", 10, "end", 700, MUT, 10);
    s += wrap(SX + 67, 94, ctx.t(T.lab.base), 10, "middle", 700, MUT, 14);
    s += wrap(250, 156, ctx.t(st.joined ? T.lab.polymer : T.lab.monomers), 10.5, "start", 700, MUT, 11);
    if (st.joined) {
      s += wrap(250, 200, ctx.t(T.lab.backbone), 10.5, "start", 700, BB, 11);
      s += wrap(250, 244, ctx.t(T.lab.water), 10.5, "start", 600, "var(--c-nitrogen,#2d5cdd)", 11);
    }
    return s + '</svg>';
  }

  /* ---------- Tab 2: build the complementary strand ---------- */
  function sceneBuild(ctx, st) {
    var seq = SEQS[st.seqIdx], N = seq.length, ROW = 46, TOP = 78;
    var H = TOP + (N - 1) * ROW + 120;
    var s = svgOpen(360, H, ctx.t(T.aria.build));
    var LX = 70, RX = 290, BASEW = 72, BH = 24;
    function mode(letter) { return st.pp ? (PURINE[letter] ? "purine" : "pyrimidine") : "plain"; }
    function wOf(letter) { return st.pp ? (PURINE[letter] ? 92 : 52) : BASEW; }
    // current row band
    if (st.filled < N) {
      var cy0 = TOP + st.filled * ROW;
      s += '<rect x="56" y="' + (cy0 - 19) + '" width="248" height="38" rx="5" fill="var(--accent-soft,#e0e7fb)" opacity="0.55"/>';
    }
    // backbones
    for (var i = 0; i < N; i++) {
      var cy = TOP + i * ROW;
      s += line(LX, cy - 20, LX, cy);               // P-S (left)
      s += line(RX, cy, RX, cy + 20);               // S-P (right)
      if (i < N - 1) {
        s += line(LX, cy, LX, cy + ROW - 20);       // S -> next P (left)
        s += line(RX, cy + 20, RX, cy + ROW);       // P -> next S (right)
      }
    }
    // base pairs
    for (var j = 0; j < N; j++) {
      var cy2 = TOP + j * ROW, L1 = seq[j], R1 = COMP[L1], wl = wOf(L1), wr = wOf(R1);
      var lx = 84, rx = 276 - wr;
      s += line(80, cy2, 84, cy2);
      s += line(276, cy2, 280, cy2);
      if (j < st.filled) {
        s += line(lx + wl + 1, cy2, rx - 1, cy2, "var(--hbond,#2a7de1)", 2.6, "5 4");
        s += rectB(lx, cy2 - BH / 2, wl, BH, L1, mode(L1));
        s += rectB(rx, cy2 - BH / 2, wr, BH, R1, mode(R1));
      } else {
        s += rectB(lx, cy2 - BH / 2, wl, BH, L1, mode(L1));
        var isCur = j === st.filled;
        s += rectB(276 - BASEW, cy2 - BH / 2, BASEW, BH, ctx.t(T.lab.slot), isCur ? "cur" : "slot");
      }
    }
    // shapes on top
    for (var k = 0; k < N; k++) {
      var cy3 = TOP + k * ROW;
      s += circ(LX, cy3 - 20, 6.5) + pent(LX, cy3, 10.5);
      s += pent(RX, cy3, 10.5) + circ(RX, cy3 + 20, 6.5);
    }
    // direction arrows (antiparallel)
    var bot = TOP + (N - 1) * ROW;
    s += arrow(26, TOP - 22, 26, bot + 12, "var(--muted,#4d626d)");
    s += arrow(334, bot + 12, 334, TOP - 22, "var(--muted,#4d626d)");
    // titles
    s += txt(LX, 14, ctx.t(T.build.template), 10.5, "middle", 700, "var(--muted,#4d626d)");
    s += txt(RX, 14, ctx.t(T.build.newStrand), 10.5, "middle", 700, "var(--muted,#4d626d)");
    if (st.sh53) {
      s += pill(LX, TOP - 38, P5) + pill(LX, bot + 34, P3) + pill(RX, TOP - 38, P3) + pill(RX, bot + 40, P5);
    }
    // legend (one item per row so long ja/zh labels fit)
    var ly = bot + 52, MUT = "var(--muted,#4d626d)";
    s += circ(20, ly, 6) + txt(34, ly + 4, ctx.t(T.lab.legP), 10, "start", 600, MUT);
    ly += 19; s += pent(20, ly, 8) + txt(34, ly + 4, ctx.t(T.lab.legS), 10, "start", 600, MUT);
    ly += 19; s += '<rect x="14" y="' + (ly - 6) + '" width="12" height="12" rx="2" fill="var(--accent-soft,#e0e7fb)" stroke="var(--accent,#2547c7)" stroke-width="1.5"/>' + txt(34, ly + 4, ctx.t(T.lab.legB), 10, "start", 600, MUT);
    ly += 19; s += line(12, ly, 28, ly, "var(--hbond,#2a7de1)", 2.6, "5 4") + txt(34, ly + 4, ctx.t(T.lab.legH), 10, "start", 600, MUT);
    ly += 19; s += txt(14, ly + 4, ctx.t(T.lab.dirs), 10, "start", 600, MUT);
    if (st.pp) {
      ly += 19; s += '<rect x="14" y="' + (ly - 6) + '" width="12" height="12" rx="2" fill="var(--theme-a-soft,#d9efec)" stroke="var(--theme-a,#07756f)" stroke-width="1.5"/>' + txt(34, ly + 4, ctx.t(T.lab.purine), 10, "start", 600, MUT);
      ly += 19; s += '<rect x="14" y="' + (ly - 6) + '" width="12" height="12" rx="2" fill="var(--theme-b-soft,#f8dfe7)" stroke="var(--theme-b,#b82a56)" stroke-width="1.5"/>' + txt(34, ly + 4, ctx.t(T.lab.pyrimidine), 10, "start", 600, MUT);
      ly += 19; s += txt(14, ly + 4, ctx.t(T.lab.sameWidth), 10, "start", 700, "var(--ink,#0f2029)");
    }
    var total = ly + 14;
    return s.replace(/viewBox="0 0 360 \d+"/, 'viewBox="0 0 360 ' + total + '"') + '</svg>';
  }

  /* ---------- Tab 3: DNA vs RNA ---------- */
  function sugarRing(ctx, cx, cy, rna) {
    var R = 26, v = [-90, -18, 54, 126, 198].map(function (a) { var r = a * Math.PI / 180; return [cx + R * Math.cos(r), cy + R * Math.sin(r)]; });
    var s = '<polygon points="' + v.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" ") + '" fill="var(--theme-a-soft,#d9efec)" stroke="var(--theme-a,#07756f)" stroke-width="2.5"/>';
    s += txt(v[0][0], v[0][1] + 4, "O", 11, "middle", 800);
    var nums = ["", "1′", "2′", "3′", "4′"];
    for (var i = 1; i < 5; i++) {
      var nx = cx + (v[i][0] - cx) * 0.55, ny = cy + (v[i][1] - cy) * 0.55;
      s += txt(nx, ny + 3.5, nums[i], 9, "middle", 700, "var(--muted,#4d626d)");
    }
    // C1' base
    s += line(v[1][0], v[1][1], v[1][0] + 22, v[1][1] - 9, "var(--ink,#0f2029)", 2.2) + txt(v[1][0] + 25, v[1][1] - 6, ctx.t(T.lab.base1), 10, "start", 700);
    // C2'
    s += line(v[2][0], v[2][1], v[2][0], v[2][1] + 20, "var(--ink,#0f2029)", 2.2);
    s += '<circle cx="' + v[2][0] + '" cy="' + (v[2][1] + 31) + '" r="13" fill="var(--accent-soft,#e0e7fb)" stroke="var(--accent,#2547c7)" stroke-width="2.5"/>' + txt(v[2][0], v[2][1] + 35, rna ? "OH" : "H", 11, "middle", 800);
    // C3'
    s += line(v[3][0], v[3][1], v[3][0], v[3][1] + 20, "var(--ink,#0f2029)", 2.2) + txt(v[3][0], v[3][1] + 35, "OH", 11, "middle", 800);
    // C4' -> C5'
    s += line(v[4][0], v[4][1], v[4][0] - 16, v[4][1] - 18, "var(--ink,#0f2029)", 2.2) + txt(v[4][0] - 18, v[4][1] - 22, "CH₂OH", 10, "end", 700);
    return s;
  }

  function sceneCompare(ctx) {
    var s = svgOpen(360, 300, ctx.t(T.aria.compare));
    var HL = "var(--accent,#2547c7)";
    s += txt(90, 18, ctx.t(T.dna), 14, "middle", 800) + txt(270, 18, ctx.t(T.rna), 14, "middle", 800);
    s += line(180, 8, 180, 292, "var(--line,#c3d0d7)", 1.5);
    // DNA ladder
    var rows = [["A", "T"], ["G", "C"], ["T", "A"]];
    for (var i = 0; i < 3; i++) {
      var y = 50 + i * 30;
      var Lb = rows[i][0], Rb = rows[i][1];
      s += rectB(52, y - 9, 28, 18, Lb, Lb === "T" ? "cur" : "plain", Lb === "T" ? 'stroke-width="3"' : "");
      s += rectB(100, y - 9, 28, 18, Rb, Rb === "T" ? "cur" : "plain", Rb === "T" ? 'stroke-width="3"' : "");
      s += line(82, y, 98, y, "var(--hbond,#2a7de1)", 2, "3 3");
    }
    s += line(46, 38, 46, 128, "var(--ink,#0f2029)", 3) + line(134, 38, 134, 128, "var(--ink,#0f2029)", 3);
    for (var k = 0; k < 3; k++) { var yy = 50 + k * 30; s += pent(46, yy, 7) + pent(134, yy, 7); }
    s += txt(90, 146, ctx.t(T.lab.strands2), 11, "middle", 800, HL);
    // RNA single strand
    var rb = ["A", "U", "G"];
    s += line(226, 38, 226, 128, "var(--ink,#0f2029)", 3);
    for (var m = 0; m < 3; m++) {
      var ym = 50 + m * 30;
      s += rectB(236, ym - 9, 28, 18, rb[m], rb[m] === "U" ? "cur" : "plain", rb[m] === "U" ? 'stroke-width="3"' : "") + line(231, ym, 236, ym);
      s += pent(226, ym, 7);
    }
    s += txt(270, 146, ctx.t(T.lab.strand1), 11, "middle", 800, HL);
    // sugars
    s += txt(90, 172, ctx.t(T.lab.deoxy2), 12, "middle", 800) + txt(270, 172, ctx.t(T.lab.ribose2), 12, "middle", 800);
    s += sugarRing(ctx, 90, 222, false) + sugarRing(ctx, 270, 222, true);
    return s + '</svg>';
  }

  function compareTable(ctx) {
    var h = '<table><tr><th>' + ctx.t(T.compare.th.f) + '</th><th>' + ctx.t(T.compare.th.d) + '</th><th>' + ctx.t(T.compare.th.r) + '</th></tr>';
    T.compare.rows.forEach(function (r) { h += '<tr><td>' + ctx.t(r[0]) + '</td><td>' + ctx.t(r[1]) + '</td><td>' + ctx.t(r[2]) + '</td></tr>'; });
    return h + '</table>';
  }

  IB.registerWidget("dna-builder", {
    title: T.title,
    mount: function (el, ctx) {
      if (!document.getElementById("w-dna-builder-style")) {
        var stl = document.createElement("style");
        stl.id = "w-dna-builder-style";
        stl.textContent = CSS;
        document.head.appendChild(stl);
      }
      el.classList.add("w-dna-builder");
      var st = {
        tab: "parts",
        rna: false, joined: false, info: null,
        seqIdx: 0, filled: 0, errors: 0, sh53: false, pp: false, msg: null, msgKind: ""
      };
      var tabs = ["parts", "build", "compare"];

      function render() {
        var h = '<div class="wd-tabs" role="group" aria-label="' + esc(ctx.t(T.title)) + '">';
        tabs.forEach(function (k) { h += '<button type="button" data-tab="' + k + '" aria-pressed="' + (st.tab === k) + '">' + ctx.t(T.tabs[k]) + '</button>'; });
        h += '</div>';

        if (st.tab === "parts") {
          h += '<div class="wd-row">' +
            '<button type="button" data-rna="0" aria-pressed="' + (!st.rna) + '">' + ctx.t(T.dna) + '</button>' +
            '<button type="button" data-rna="1" aria-pressed="' + st.rna + '">' + ctx.t(T.rna) + '</button>' +
            '<button type="button" data-join="1">' + ctx.t(st.joined ? T.split : T.join) + '</button></div>';
          h += '<div class="wd-stage">' + sceneParts(ctx, st) + '</div>';
          var info = st.info === "sugar" ? (st.rna ? T.parts.sugarRNA : T.parts.sugarDNA) : (st.info ? T.parts[st.info] : T.parts.hint);
          h += '<p class="wd-msg" aria-live="polite">' + ctx.t(info) + '</p>';
          h += '<p class="wd-note">' + ctx.t(st.joined ? T.capParts.joined : T.capParts.separate) + '</p>';
        } else if (st.tab === "build") {
          var seq = SEQS[st.seqIdx], done = st.filled >= seq.length;
          h += '<div class="wd-row">' +
            '<label class="wd-chk"><input type="checkbox" data-s53 ' + (st.sh53 ? "checked" : "") + '> ' + ctx.t(T.sh53) + ' <span class="wd-ahl">' + ctx.t(T.ahl) + '</span></label>' +
            '<label class="wd-chk"><input type="checkbox" data-pp ' + (st.pp ? "checked" : "") + '> ' + ctx.t(T.shPP) + ' <span class="wd-ahl">' + ctx.t(T.ahl) + '</span></label></div>';
          h += '<div class="wd-stage">' + sceneBuild(ctx, st) + '</div>';
          h += '<div class="wd-row" style="margin-top:.6rem">';
          ["A", "T", "G", "C"].forEach(function (b) {
            h += '<button type="button" class="wd-base" data-pick="' + b + '"' + (done ? " disabled" : "") + '><b>' + b + '</b><small>' + ctx.t(T.names[b]) + '</small></button>';
          });
          h += '<button type="button" data-new="1">' + ctx.t(T.newSeq) + '</button><button type="button" data-restart="1">' + ctx.t(T.reset) + '</button></div>';
          var msg = st.msg ? ctx.t(st.msg) : ctx.t(T.build.start);
          if (done) msg = ctx.t(T.build.done) + " (" + ctx.t(T.build.mistakes) + ": " + st.errors + ")";
          h += '<p class="wd-msg ' + (done ? "good" : st.msgKind) + '" aria-live="polite">' + msg + '</p>';
        } else {
          h += '<div class="wd-stage">' + sceneCompare(ctx) + '</div>';
          h += '<p class="wd-msg">' + ctx.t(T.compare.cap) + '</p>';
          h += compareTable(ctx);
        }
        el.innerHTML = h;
      }

      function focusSel(sel) { var n = el.querySelector(sel); if (n) n.focus(); }

      function choosePart(name) { st.info = name; render(); focusSel('[data-part="' + name + '"]'); }

      function onClick(e) {
        var pt = e.target.closest("[data-part]");
        if (pt && el.contains(pt)) { choosePart(pt.getAttribute("data-part")); return; }
        var b = e.target.closest("button");
        if (!b || !el.contains(b)) return;
        if (b.dataset.tab) { st.tab = b.dataset.tab; render(); focusSel('[data-tab="' + b.dataset.tab + '"]'); }
        else if (b.dataset.rna !== undefined) { st.rna = b.dataset.rna === "1"; render(); focusSel('[data-rna="' + b.dataset.rna + '"]'); }
        else if (b.dataset.join) { st.joined = !st.joined; render(); focusSel("[data-join]"); }
        else if (b.dataset.pick) {
          var seq = SEQS[st.seqIdx];
          if (st.filled >= seq.length) return;
          var want = COMP[seq[st.filled]];
          if (b.dataset.pick === want) { st.filled++; st.msg = T.build.right; st.msgKind = "good"; }
          else { st.errors++; st.msg = T.build.wrong; st.msgKind = "bad"; }
          render(); focusSel('[data-pick="' + b.dataset.pick + '"]');
        }
        else if (b.dataset.new) { st.seqIdx = (st.seqIdx + 1) % SEQS.length; st.filled = 0; st.errors = 0; st.msg = null; st.msgKind = ""; render(); focusSel("[data-new]"); }
        else if (b.dataset.restart) { st.filled = 0; st.errors = 0; st.msg = null; st.msgKind = ""; render(); focusSel("[data-restart]"); }
      }
      function onKey(e) {
        if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("[data-part]")) {
          e.preventDefault(); choosePart(e.target.getAttribute("data-part"));
        }
      }
      function onChange(e) {
        if (e.target.matches("[data-s53]")) { st.sh53 = e.target.checked; render(); focusSel("[data-s53]"); }
        else if (e.target.matches("[data-pp]")) { st.pp = e.target.checked; render(); focusSel("[data-pp]"); }
      }
      el.addEventListener("click", onClick);
      el.addEventListener("keydown", onKey);
      el.addEventListener("change", onChange);
      render();
      return function () { el.removeEventListener("click", onClick); el.removeEventListener("keydown", onKey); el.removeEventListener("change", onChange); };
    }
  });
})();
