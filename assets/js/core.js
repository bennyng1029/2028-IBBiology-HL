/* IB Biology A & B — core: registry, i18n, router, renderers, quiz engine.
   No framework, no build, works from file://. See SPEC.md and the "Shell notes" section. */
(function () {
  'use strict';
  var IB = window.IB = window.IB || {};
  var doc = document;

  /* ---------- constants ---------- */
  var LANGS = [
    { id: 'en', label: 'English', html: 'en' },
    { id: 'ja', label: '日本語', html: 'ja' },
    { id: 'zh', label: '中文(香港)', html: 'zh-HK' }
  ];
  var REPO = 'https://github.com/bennyng1029/2028-IBBiology-HL';
  var SITE = 'IB Biology A & B';
  var LEVEL_SCALE = { 1: 'nm', 2: 'µm', 3: 'mm – m', 4: 'm – km' };

  /* Fixed outline of the IB guide, so the map is complete even before every topic file is loaded. */
  function sk(id, theme, ahlOnly, en, ja, zh) {
    return { id: id, slug: id.toLowerCase().replace('.', '-'), theme: theme, level: Number(id.charAt(1)), ahlOnly: ahlOnly, title: { en: en, ja: ja, zh: zh } };
  }
  var SKELETON = [
    sk('A1.1', 'A', false, 'Water', '水', '水'),
    sk('A1.2', 'A', false, 'Nucleic acids', '核酸', '核酸'),
    sk('A2.1', 'A', true, 'Origins of cells', '細胞の起源', '細胞的起源'),
    sk('A2.2', 'A', false, 'Cell structure', '細胞の構造', '細胞結構'),
    sk('A2.3', 'A', true, 'Viruses', 'ウイルス', '病毒'),
    sk('A3.1', 'A', false, 'Diversity of organisms', '生物の多様性', '生物的多樣性'),
    sk('A3.2', 'A', true, 'Classification and cladistics', '分類と分岐学', '分類與支序學'),
    sk('A4.1', 'A', false, 'Evolution and speciation', '進化と種分化', '演化與物種形成'),
    sk('A4.2', 'A', false, 'Conservation of biodiversity', '生物多様性の保全', '生物多樣性的保育'),
    sk('B1.1', 'B', false, 'Carbohydrates and lipids', '炭水化物と脂質', '碳水化合物與脂質'),
    sk('B1.2', 'B', false, 'Proteins', 'タンパク質', '蛋白質'),
    sk('B2.1', 'B', false, 'Membranes and membrane transport', '膜と膜輸送', '膜與膜運輸'),
    sk('B2.2', 'B', false, 'Organelles and compartmentalisation', '細胞小器官と区画化', '細胞器與區室化'),
    sk('B2.3', 'B', false, 'Cell specialisation', '細胞の特殊化', '細胞特化'),
    sk('B3.1', 'B', false, 'Gas exchange', 'ガス交換', '氣體交換'),
    sk('B3.2', 'B', false, 'Transport', '輸送', '運輸'),
    sk('B3.3', 'B', true, 'Muscle and motility', '筋肉と運動', '肌肉與運動'),
    sk('B4.1', 'B', false, 'Adaptation to the environment', '環境への適応', '對環境的適應'),
    sk('B4.2', 'B', false, 'Ecological niches', '生態的地位', '生態位')
  ];
  var ORDER = SKELETON.map(function (s) { return s.slug; });

  /* ---------- state ---------- */
  IB.topics = [];
  IB.topicMap = {};
  IB.widgets = {};
  IB.lang = 'en';
  IB.level = 'hl';           // 'hl' = SL + AHL (default), 'sl' = SL core only
  IB.progress = {};
  var cleanups = [];
  var cssId = 0;

  /* ---------- storage (always try/catch) ---------- */
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
    del: function (k) { try { window.localStorage.removeItem(k); } catch (e) { /* ignore */ } }
  };
  function loadProgress() {
    try { var p = JSON.parse(store.get('ibbio.progress') || '{}'); IB.progress = (p && typeof p === 'object') ? p : {}; } catch (e) { IB.progress = {}; }
  }
  function saveProgress() { store.set('ibbio.progress', JSON.stringify(IB.progress)); }

  /* ---------- helpers ---------- */
  function t(o) { if (o == null) return ''; if (typeof o === 'string') return o; return o[IB.lang] || o.en || ''; }
  function ui(key, vars) {
    var S = IB.UI || {};
    var s = (S[IB.lang] && S[IB.lang][key]) || (S.en && S.en[key]) || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function plain(html) { var d = doc.createElement('div'); d.innerHTML = html; return d.textContent || ''; }
  function h(tag, attrs, kids) {
    var e = doc.createElement(tag), k, v;
    if (attrs) {
      for (k in attrs) {
        v = attrs[k];
        if (v == null || v === false) continue;
        if (k === 'class') e.className = v;
        else if (k === 'html') e.innerHTML = v;
        else if (k === 'text') e.textContent = v;
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v === true ? '' : v);
      }
    }
    (function add(list) {
      if (list == null) return;
      if (Array.isArray(list)) { list.forEach(add); return; }
      e.appendChild(typeof list === 'string' ? doc.createTextNode(list) : list);
    })(kids);
    return e;
  }
  function wrapTables(el) {
    [].forEach.call(el.querySelectorAll('table'), function (tb) {
      if (tb.parentNode.classList && tb.parentNode.classList.contains('table-scroll')) return;
      var w = doc.createElement('div'); w.className = 'table-scroll'; tb.parentNode.insertBefore(w, tb); w.appendChild(tb);
    });
    return el;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function reduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function scrollToEl(el) { if (el) el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); }
  function slugOf(id) { return String(id).toLowerCase().replace('.', '-'); }

  /* ---------- registry ---------- */
  IB.registerTopic = function (topic) {
    if (!topic) return;
    topic.slug = topic.slug || slugOf(topic.id);
    topic.level = topic.level || Number(String(topic.id).charAt(1)) || 1;
    topic.theme = topic.theme || String(topic.id).charAt(0);
    (topic.questions || []).forEach(function (q, i) {
      if (!q.id) q.id = topic.slug + '-q' + (i < 9 ? '0' : '') + (i + 1);
      q._slug = topic.slug;
    });
    var at = IB.topics.map(function (x) { return x.slug; }).indexOf(topic.slug);
    if (at >= 0) IB.topics[at] = topic; else IB.topics.push(topic);
    IB.topicMap[topic.slug] = topic;
    IB.topics.sort(function (a, b) { return ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug); });
  };
  IB.registerWidget = function (name, def) { IB.widgets[name] = def; };
  IB.t = t;
  IB.ui = ui;
  IB.store = store;
  IB.rerender = function () { render(true); };

  function metaFor(entry) {
    var topic = IB.topicMap[entry.slug];
    return {
      slug: entry.slug, id: topic ? topic.id : entry.id, theme: topic ? topic.theme : entry.theme,
      level: topic ? topic.level : entry.level, ahlOnly: topic ? !!topic.ahlOnly : entry.ahlOnly,
      title: topic ? topic.title : entry.title, topic: topic || null
    };
  }
  function visibleQuestions(topic) {
    return (topic.questions || []).filter(function (q) { return !(IB.level === 'sl' && q.ahl); });
  }

  /* ---------- progress ---------- */
  function record(id, status) { IB.progress[id] = { s: status, t: Date.now() }; saveProgress(); }
  function statusOf(id) { var p = IB.progress[id]; return p ? p.s : null; }
  function topicStats(topic) {
    var qs = visibleQuestions(topic), right = 0, bad = 0;
    qs.forEach(function (q) { var s = statusOf(q.id); if (s === 'right') right++; else if (s) bad++; });
    return { total: qs.length, right: right, bad: bad };
  }

  /* ---------- widgets ---------- */
  function mountWidget(parent, name) {
    var w = IB.widgets[name];
    var frame = h('figure', { class: 'widget-frame', style: 'margin:1.25rem 0' });
    var title = (w && w.title) ? t(w.title) : name;
    frame.appendChild(h('figcaption', { class: 'widget-cap' }, [h('span', { class: 'tag', text: ui('interactive') }), h('span', { text: title })]));
    var el = h('div', { class: 'widget w-' + name });
    frame.appendChild(el);
    parent.appendChild(frame);
    if (!w || typeof w.mount !== 'function') {
      el.className += ' widget-missing';
      el.appendChild(h('p', { text: ui('comingSoon') }));
      return;
    }
    try {
      var c = w.mount(el, { lang: IB.lang, t: t });
      if (typeof c === 'function') cleanups.push(c);
    } catch (err) {
      if (window.console) console.error('Widget "' + name + '" failed', err);
      el.innerHTML = '';
      el.className += ' widget-missing';
      el.appendChild(h('p', { text: ui('widgetError') }));
    }
  }
  function runCleanups() { var c = cleanups; cleanups = []; c.forEach(function (fn) { try { fn(); } catch (e) { /* ignore */ } }); }

  /* ---------- header and footer ---------- */
  var ICON = {
    chev: '<svg class="navgroup__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    up: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    theme: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>'
  };
  var current = { name: 'home', slug: null };

  function renderHeader() {
    var mount = doc.getElementById('site-header');
    if (!mount) return;
    var openMenu = mount.querySelector('.site-header.is-open') ? true : false;
    var groups = ['A', 'B'].map(function (th) {
      var items = SKELETON.filter(function (s) { return s.theme === th; }).map(function (s) {
        var m = metaFor(s), inner = '<span class="site-nav__num">' + esc(m.id) + '</span><span class="site-nav__name">' + esc(t(m.title)) + '</span>' + (m.ahlOnly ? ' <span class="badge badge--ahl" title="' + esc(ui('ahlLong')) + '">' + ui('ahl') + '</span>' : '');
        if (!m.topic) return '<li><span class="navgroup__soon" aria-disabled="true">' + inner + '<span class="badge navgroup__tag">' + esc(ui('soon')) + '</span></span></li>';
        return '<li><a href="#topic-' + m.slug + '"' + (current.slug === m.slug ? ' aria-current="page"' : '') + '>' + inner + '</a></li>';
      }).join('');
      var here = current.slug && SKELETON.some(function (s) { return s.slug === current.slug && s.theme === th; });
      return '<li class="navgroup theme-' + th.toLowerCase() + (here ? ' is-here' : '') + '"><button class="navgroup__btn" type="button" aria-expanded="false" aria-controls="menu-' + th + '">' +
        '<span class="navgroup__label">' + esc(ui('themeWord')) + ' ' + th + '</span><span class="navgroup__title">' + esc(ui('theme' + th)) + '</span>' + ICON.chev + '</button>' +
        '<ul class="navgroup__menu" id="menu-' + th + '">' + items + '</ul></li>';
    }).join('');
    function link(route, key, cls) { return '<li><a href="#' + route + '"' + (cls ? ' class="' + cls + '"' : '') + (current.name === route ? ' aria-current="page"' : '') + '>' + esc(ui(key)) + '</a></li>'; }
    var langOpts = LANGS.map(function (l) { return '<option value="' + l.id + '" lang="' + l.html + '"' + (IB.lang === l.id ? ' selected' : '') + '>' + l.label + '</option>'; }).join('');
    mount.innerHTML =
      '<a class="skip-link" href="#main">' + esc(ui('skip')) + '</a>' +
      '<header class="site-header' + (openMenu ? ' is-open' : '') + '"><div class="site-header__bar wrap">' +
      '<a class="wordmark" href="#home"><span class="wordmark__cell" aria-hidden="true"><b>A</b><b>B</b></span><span>' + esc(SITE) + '</span></a>' +
      '<button class="btn btn--small nav-toggle" type="button" aria-expanded="' + openMenu + '" aria-controls="header-panel">' + esc(ui(openMenu ? 'close' : 'menu')) + '</button>' +
      '<div class="site-header__panel" id="header-panel"><nav class="site-nav" aria-label="' + esc(ui('navTopics')) + '"><ul class="site-nav__list">' +
      groups + link('protein-lab', 'navLab', 'is-lab') + link('practice', 'navPractice') + link('glossary', 'navGlossary') + link('about', 'navAbout') +
      '</ul></nav><div class="site-tools">' +
      '<div class="seg" role="group" aria-label="' + esc(ui('levelGroup')) + '">' +
      '<button class="seg__btn" type="button" data-level="sl" aria-pressed="' + (IB.level === 'sl') + '">' + esc(ui('slOnly')) + '</button>' +
      '<button class="seg__btn" type="button" data-level="hl" aria-pressed="' + (IB.level === 'hl') + '">' + ui('slHl') + '</button></div>' +
      '<select class="select lang-select" id="lang-select" aria-label="Language / 言語 / 語言">' + langOpts + '</select>' +
      '<button class="icon-btn theme-toggle" type="button" aria-label="' + esc(ui('switchTheme')) + '" title="' + esc(ui('switchTheme')) + '">' + ICON.theme + '</button>' +
      '</div></div></div><div class="stain" aria-hidden="true"><i></i><i></i></div></header>';

    var header = mount.querySelector('.site-header');
    var toggle = mount.querySelector('.nav-toggle');
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = ui(open ? 'close' : 'menu');
    });
    var gs = [].slice.call(mount.querySelectorAll('.navgroup'));
    function setOpen(g, open) { g.classList.toggle('is-open', open); g.querySelector('.navgroup__btn').setAttribute('aria-expanded', String(open)); }
    gs.forEach(function (g) {
      g.querySelector('.navgroup__btn').addEventListener('click', function () { var o = !g.classList.contains('is-open'); gs.forEach(function (x) { setOpen(x, false); }); setOpen(g, o); });
    });
    mount.querySelectorAll('.navgroup__menu a, .site-nav__list > li > a').forEach(function (a) { a.addEventListener('click', function () { gs.forEach(function (x) { setOpen(x, false); }); header.classList.remove('is-open'); }); });
    mount.querySelectorAll('[data-level]').forEach(function (b) { b.addEventListener('click', function () { IB.setLevel(b.getAttribute('data-level')); }); });
    mount.querySelector('#lang-select').addEventListener('change', function (e) { IB.setLang(e.target.value); });
    mount.querySelector('.theme-toggle').addEventListener('click', cycleTheme);
    mount._gs = gs;
  }
  doc.addEventListener('click', function (e) {
    var mount = doc.getElementById('site-header');
    if (!mount || mount.contains(e.target)) return;
    mount.querySelectorAll('.navgroup.is-open').forEach(function (g) { g.classList.remove('is-open'); g.querySelector('.navgroup__btn').setAttribute('aria-expanded', 'false'); });
  });
  doc.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var mount = doc.getElementById('site-header');
    if (mount) mount.querySelectorAll('.navgroup.is-open').forEach(function (g) { g.classList.remove('is-open'); g.querySelector('.navgroup__btn').setAttribute('aria-expanded', 'false'); });
  });

  function renderFooter() {
    var mount = doc.getElementById('site-footer');
    if (!mount) return;
    mount.innerHTML = '<footer class="site-footer"><div class="wrap site-footer__inner"><div><p><strong>' + esc(SITE) + '</strong></p><p>' + esc(ui('footerDisclaimer')) + '</p></div>' +
      '<div><p><a href="' + REPO + '" rel="noopener">' + esc(ui('github')) + '</a></p><p>' + esc(ui('footerLicence')) + '</p></div></div></footer>';
  }

  /* ---------- theme (colour) ---------- */
  function applyTheme(v) {
    var r = doc.documentElement;
    if (v === 'light' || v === 'dark') r.setAttribute('data-theme', v); else r.removeAttribute('data-theme');
  }
  function cycleTheme() {
    var cur = doc.documentElement.getAttribute('data-theme');
    var dark = cur ? cur === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    applyTheme(next);
    store.set('ibbio.theme', next);
  }

  /* ---------- language / level ---------- */
  IB.setLang = function (l) {
    if (!LANGS.some(function (x) { return x.id === l; })) l = 'en';
    IB.lang = l;
    store.set('ibbio.lang', l);
    doc.documentElement.setAttribute('lang', LANGS.filter(function (x) { return x.id === l; })[0].html);
    render(true);
  };
  IB.setLevel = function (l) {
    IB.level = l === 'sl' ? 'sl' : 'hl';
    store.set('ibbio.level', IB.level);
    if (IB.level === 'sl') doc.documentElement.setAttribute('data-show', 'sl'); else doc.documentElement.removeAttribute('data-show');
    render(true);
  };

  /* ---------- badges / small pieces ---------- */
  function ahlBadge() { return h('span', { class: 'badge badge--ahl', title: ui('ahlLong'), text: ui('ahl') }); }
  function dots(n) {
    var d = h('span', { class: 'dots', role: 'img', 'aria-label': ui('difficulty', { n: n }) });
    for (var i = 1; i <= 3; i++) d.appendChild(h('i', { class: i <= n ? 'on' : '' }));
    return d;
  }
  function meter(st) {
    var m = h('span', { class: 'meter', 'aria-hidden': 'true' });
    if (st.total) {
      m.appendChild(h('i', { class: 'ok', style: 'width:' + (100 * st.right / st.total) + '%' }));
      m.appendChild(h('i', { class: 'bad', style: 'width:' + (100 * st.bad / st.total) + '%' }));
    }
    return m;
  }
  function cellNode(m, big) {
    var st = m.topic ? topicStats(m.topic) : { total: 0, right: 0, bad: 0 };
    var inner = [
      h('span', { class: 'cell__top' }, [
        m.ahlOnly ? ahlBadge() : h('span'),
        h('span', { class: 'cell__pct', text: m.topic ? (st.total ? Math.round(100 * st.right / st.total) + '%' : '') : ui('soon') })
      ]),
      h('span', { class: 'cell__code', text: m.id }),
      h('span', { class: 'cell__name', text: t(m.title) })
    ];
    if (m.topic) inner.push(meter(st));
    var cls = 'cell' + (m.topic ? '' : ' cell--soon');
    return m.topic ? h('a', { class: cls, href: '#topic-' + m.slug }, inner) : h('div', { class: cls, 'aria-disabled': 'true' }, inner);
  }

  /* ---------- HOME ---------- */
  function loomSvg() {
    var pts = [[24, 96], [62, 52], [104, 72], [140, 34], [182, 66], [216, 100], [254, 60], [296, 84]];
    var cols = ['--r-nonpolar', '--r-polar', '--r-acidic', '--r-basic', '--r-polar', '--r-nonpolar', '--r-basic', '--r-acidic'];
    var s = '<svg viewBox="0 0 320 130" role="img" aria-label="Chain of amino acids"><polyline points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" fill="none" stroke="var(--ink-2)" stroke-width="3" stroke-linejoin="round"/>';
    pts.forEach(function (p, i) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="13" style="fill:var(' + cols[i] + ')" stroke="var(--bg)" stroke-width="2"/>'; });
    return s + '</svg>';
  }
  function renderHome(app) {
    var intro = h('section', { class: 'intro wrap', 'aria-labelledby': 'intro-title' }, [
      h('div', null, [
        h('p', { class: 'eyebrow', text: ui('homeEyebrow') }),
        h('h1', { id: 'intro-title', html: 'IB Biology <span class="a">A</span> &amp; <span class="b">B</span>' }),
        h('p', { class: 'lede', text: ui('homeLead') })
      ]),
      h('dl', { class: 'facts' }, [
        ['factTopics', 'factTopicsV'], ['factLevels', 'factLevelsV'], ['factSyllabus', 'factSyllabusV'], ['factCost', 'factCostV']
      ].map(function (p) { return h('div', null, [h('dt', { text: ui(p[0]) }), h('dd', { text: ui(p[1]) })]); }))
    ]);
    app.appendChild(intro);

    var lab = h('section', { class: 'wrap band-section' }, [
      h('a', { class: 'lab-feature', href: '#protein-lab' }, [
        h('div', null, [
          h('p', { class: 'eyebrow', text: 'B1.2' }),
          h('h2', { text: ui('labCtaTitle') }),
          h('p', { text: ui('labCtaText') }),
          h('span', { class: 'btn', text: ui('labCta') })
        ]),
        h('div', { html: loomSvg() })
      ])
    ]);
    app.appendChild(lab);

    var mapSec = h('section', { class: 'wrap band-section', 'aria-labelledby': 'map-title' });
    mapSec.appendChild(h('div', { class: 'section-head' }, [h('h2', { id: 'map-title', text: ui('mapTitle') }), h('p', { class: 'muted small', text: ui('mapHint') })]));
    var map = h('div', { class: 'map' });
    ['A', 'B'].forEach(function (th) {
      var panel = h('div', { class: 'theme-panel theme-' + th.toLowerCase() }, [
        h('div', { class: 'theme-panel__head' }, [
          h('span', { class: 'theme-panel__letter', 'aria-hidden': 'true', text: th }),
          h('div', null, [h('p', { class: 'eyebrow', text: ui('themeWord') + ' ' + th }), h('h3', { text: ui('theme' + th) })])
        ])
      ]);
      for (var lv = 1; lv <= 4; lv++) {
        var entries = SKELETON.filter(function (s) { return s.theme === th && s.level === lv; });
        if (!entries.length) continue;
        var row = h('div', { class: 'lvl-row lv' + lv }, [
          h('div', { class: 'lvl-label' }, [h('span', { class: 'lvl-label__n', text: lv }), h('strong', { text: ui('level' + lv) }), h('small', { text: LEVEL_SCALE[lv] })]),
          h('ul', { class: 'cells' }, entries.map(function (s) { return h('li', null, cellNode(metaFor(s))); }))
        ]);
        panel.appendChild(row);
      }
      map.appendChild(panel);
    });
    mapSec.appendChild(map);
    mapSec.appendChild(h('p', { class: 'cells-note', text: ui('mapNote') }));
    app.appendChild(mapSec);

    app.appendChild(h('section', { class: 'wrap band-section', 'aria-labelledby': 'how-title' }, [
      h('h2', { id: 'how-title', text: ui('howTitle') }),
      h('ol', { class: 'steps' }, [1, 2, 3].map(function (n) { return h('li', null, [h('h3', { text: ui('how' + n + 'h') }), h('p', { text: ui('how' + n) })]); }))
    ]));

    app.appendChild(h('section', { class: 'wrap band-section', 'aria-labelledby': 'labels-title' }, [
      h('h2', { id: 'labels-title', text: ui('twoLabelsTitle') }),
      h('div', { class: 'two-col' }, [
        h('div', null, [
          h('h3', { text: ui('slAhlTitle') }), h('p', { text: ui('slAhlText') }),
          h('div', { class: 'callout', style: 'border-left-color:var(--ahl);background:var(--ahl-soft)' }, [h('span', { class: 'callout__title' }, [ahlBadge()]), h('p', { text: ui('slAhlDemo') })])
        ]),
        h('div', null, [
          h('h3', { text: ui('scopeTitle') }), h('p', { text: ui('scopeText') }),
          h('div', { class: 'scope', style: 'margin-top:1rem' }, [h('p', { style: 'margin:0', text: ui('scopeDemo') })])
        ])
      ])
    ]));
  }

  /* ---------- TOPIC ---------- */
  function orderedMeta() { return SKELETON.map(metaFor); }
  function renderTopic(app, slug) {
    var entry = SKELETON.filter(function (s) { return s.slug === slug; })[0];
    if (!entry) { return renderMessage(app, ui('notFound'), ui('notFoundText')); }
    var m = metaFor(entry), topic = m.topic, th = m.theme.toLowerCase();
    var wrap = h('div', { class: 'wrap' });
    wrap.appendChild(h('p', { class: 'crumb' }, h('a', { href: '#home', text: '← ' + ui('back') })));
    var hero = h('div', { class: 'topic-hero theme-' + th }, [
      h('div', { class: 'cell', 'aria-hidden': 'true' }, [h('span', { class: 'cell__top' }, [m.ahlOnly ? ahlBadge() : h('span')]), h('span', { class: 'cell__code', text: m.id }), h('span', { class: 'cell__name', text: ui('level' + m.level) })])
    ]);
    var txt = h('div', { class: 'topic-hero__text' }, [
      h('p', { class: 'eyebrow' }, [ui('themeWord') + ' ' + m.theme + ' · ' + ui('theme' + m.theme) + ' · ' + ui('level' + m.level), m.ahlOnly ? ahlBadge() : null]),
      h('h1', { text: t(m.title) })
    ]);
    hero.appendChild(txt);
    wrap.appendChild(hero);
    app.appendChild(wrap);
    if (!topic) { wrap.appendChild(h('div', { class: 'callout' }, h('p', { text: ui('contentSoon') }))); return; }

    if (topic.guidingQuestions && topic.guidingQuestions.length) {
      txt.appendChild(h('span', { class: 'guiding__label', text: ui('guiding') }));
      txt.appendChild(h('ul', { class: 'guiding' }, topic.guidingQuestions.map(function (q) { return h('li', { html: t(q) }); })));
    }
    if (topic.summary) txt.appendChild(h('div', { class: 'summary', html: '<p>' + t(topic.summary).replace(/^<p>|<\/p>$/g, '') + '</p>' }));

    if (topic.ahlOnly && IB.level === 'sl') {
      wrap.appendChild(h('div', { class: 'sl-note' }, [
        h('p', { style: 'margin:0 0 0.6rem' }, [h('strong', { text: ui('slNoticeTitle') + ' ' }), ui('slNoticeText')]),
        h('button', { class: 'btn btn--primary btn--small', type: 'button', text: ui('slNoticeBtn'), onclick: function () { IB.setLevel('hl'); } })
      ]));
      return;
    }

    var sections = (topic.sections || []).filter(function (s) { return !(IB.level === 'sl' && s.ahl); });
    var toc = [];
    var content = h('div', { class: 'topic-content' });
    sections.forEach(function (s, i) {
      var id = 'sec-' + i;
      var sec = h('section', { class: 'topic-section', id: id, 'data-level': s.ahl ? 'ahl' : null });
      sec.appendChild(h('p', { class: 'section-code' }, [s.ref || '', s.ahl ? ahlBadge() : null]));
      sec.appendChild(h('h2', { text: t(s.heading) }));
      sec.appendChild(wrapTables(h('div', { class: 'topic-body', html: t(s.body) })));
      if (s.widget) mountWidget(sec, s.widget);
      if (s.examTip) sec.appendChild(h('div', { class: 'callout callout--exam' }, [h('span', { class: 'callout__title', text: ui('examTip') }), h('div', { html: t(s.examTip) })]));
      content.appendChild(sec);
      toc.push({ id: id, label: t(s.heading), ref: s.ref, ahl: s.ahl });
    });

    function panel(id, cls) { var p = h('section', { class: 'panel-block' + (cls ? ' ' + cls : ''), id: id }); content.appendChild(p); return p; }
    var nos = (topic.natureOfScience || []);
    if (nos.length) {
      var pn = panel('nos');
      pn.appendChild(h('div', { class: 'callout callout--nos' }, [h('span', { class: 'callout__title', text: ui('natureOfScience') }), h('ul', null, nos.map(function (x) { return h('li', { html: t(x) }); }))]));
      pn.className = ''; pn.style.marginTop = '1.5rem';
    }
    var terms = (topic.keyTerms || []).filter(function (k) { return !(IB.level === 'sl' && k.ahl); });
    if (terms.length) {
      var p1 = panel('terms');
      p1.appendChild(h('h2', { text: ui('keyTerms') }));
      p1.appendChild(h('dl', { class: 'terms' }, terms.map(function (k) { return termCard(k); })));
      toc.push({ id: 'terms', label: ui('keyTerms') });
    }
    var mis = topic.misconceptions || [];
    if (mis.length) {
      var p2 = panel('mistakes');
      p2.appendChild(h('h2', { text: ui('misconceptions') }));
      p2.appendChild(h('div', { class: 'mistakes' }, mis.map(function (x) {
        return h('div', { class: 'mistake' }, [
          h('div', { class: 'mistake__wrong' }, [h('span', { class: 'mistake__lbl', text: ui('wrong') }), h('div', { html: t(x.wrong) })]),
          h('div', { class: 'mistake__right' }, [h('span', { class: 'mistake__lbl', text: ui('right') }), h('div', { html: t(x.right) })])
        ]);
      })));
      toc.push({ id: 'mistakes', label: ui('misconceptions') });
    }
    var bey = topic.beyondSyllabus || [];
    if (bey.length) {
      var b = h('section', { class: 'scope', id: 'beyond' }, [
        h('h2', null, [h('span', { class: 'stop', 'aria-hidden': 'true', text: '×' }), h('span', { text: ui('beyondTitle') })]),
        h('p', { style: 'margin:0', text: ui('beyondLead') }),
        h('ul', null, bey.map(function (x) { return h('li', { html: t(x) }); }))
      ]);
      content.appendChild(b);
      toc.push({ id: 'beyond', label: ui('beyondTitle').split(':')[0].split('：')[0] });
    }
    var links = topic.links || [];
    if (links.length) {
      var p3 = panel('links');
      p3.appendChild(h('h2', { text: ui('linksTitle') }));
      p3.appendChild(h('div', { class: 'links' }, links.map(function (l) {
        var sl = slugOf(l.to), lm = SKELETON.filter(function (s) { return s.slug === sl; })[0];
        var label = l.to + (lm ? ' ' + t(metaFor(lm).title) : '');
        var a = lm && IB.topicMap[sl] ? h('a', { class: 'tag', href: '#topic-' + sl, text: label }) : h('span', { class: 'tag', text: label });
        return h('div', { class: 'link-row' }, [a, h('span', { html: t(l.why) })]);
      })));
    }
    var qs = visibleQuestions(topic);
    var quizHost = panel('quiz');
    toc.push({ id: 'quiz', label: ui('quizTitle') });
    var items = qs.map(function (q) { return { q: q, meta: m }; });
    mountQuiz(quizHost, items, { title: ui('quizTitle'), showFrom: false });

    // pager
    var idx = ORDER.indexOf(slug), prev = null, next = null, i;
    for (i = idx - 1; i >= 0; i--) if (IB.topicMap[ORDER[i]]) { prev = SKELETON[i]; break; }
    for (i = idx + 1; i < ORDER.length; i++) if (IB.topicMap[ORDER[i]]) { next = SKELETON[i]; break; }
    var pager = h('nav', { class: 'pager', 'aria-label': ui('navTopics') });
    if (prev) pager.appendChild(h('a', { href: '#topic-' + prev.slug }, [h('span', { class: 'pager__dir', text: '← ' + ui('prev') }), h('span', { class: 'pager__title', text: prev.id + ' ' + t(metaFor(prev).title) })]));
    if (next) pager.appendChild(h('a', { class: 'pager__next', href: '#topic-' + next.slug }, [h('span', { class: 'pager__dir', text: ui('next') + ' →' }), h('span', { class: 'pager__title', text: next.id + ' ' + t(metaFor(next).title) })]));
    content.appendChild(pager);

    var tocNode = buildToc(toc);
    var layout = h('div', { class: 'topic-layout' }, [tocNode, content]);
    wrap.appendChild(layout);
    trackToc(tocNode, toc);
  }
  function termCard(k) {
    var en = (k.term && k.term.en) || '', tr = t(k.term);
    var dt = h('dt', null, [h('span', { text: en })]);
    if (IB.lang !== 'en' && tr && tr !== en) dt.appendChild(h('span', { class: 'tr', lang: IB.lang === 'ja' ? 'ja' : 'zh-HK', text: tr }));
    if (k.ahl) dt.appendChild(ahlBadge());
    return h('div', { class: 'term-card' }, [dt, h('dd', { html: t(k.def) })]);
  }
  function buildToc(items) {
    var here = hashNow();
    var list = h('ul', { class: 'toc__list' });
    items.forEach(function (it) {
      var a = h('a', { href: '#' + here, 'data-target': it.id }, [it.ref ? h('span', { class: 'mono small', text: it.ref + ' ' }) : null, it.label, it.ahl ? ahlBadge() : null]);
      a.addEventListener('click', function (e) { e.preventDefault(); scrollToEl(doc.getElementById(it.id)); tocNode.classList.remove('is-open'); });
      list.appendChild(h('li', null, a));
    });
    var tocNode = h('nav', { class: 'toc', 'aria-label': ui('onThisPage') }, [
      h('p', { class: 'toc__title', text: ui('onThisPage') }),
      h('button', { class: 'toc__toggle', type: 'button', 'aria-expanded': 'false', onclick: function () { var o = tocNode.classList.toggle('is-open'); this.setAttribute('aria-expanded', String(o)); } }, [
        h('span', { text: ui('onThisPage') }), h('span', { class: 'toc__current' }), h('span', { html: ICON.chev.replace('navgroup__chev', 'toc__chev') })
      ]),
      list
    ]);
    return tocNode;
  }
  function trackToc(tocNode, items) {
    var links = [].slice.call(tocNode.querySelectorAll('a')), cur = tocNode.querySelector('.toc__current');
    function update() {
      var best = 0;
      items.forEach(function (it, i) { var el = doc.getElementById(it.id); if (el && el.getBoundingClientRect().top <= 120) best = i; });
      links.forEach(function (a, i) { a.classList.toggle('is-current', i === best); });
      if (cur && items[best]) cur.textContent = items[best].label;
    }
    window.addEventListener('scroll', update, { passive: true });
    cleanups.push(function () { window.removeEventListener('scroll', update); });
    update();
  }

  /* ---------- QUIZ ENGINE ---------- */
  var uid = 0;
  function feedback(kind, banner, html) {
    var f = h('div', { class: 'feedback ' + kind, role: 'status' }, [h('span', { class: 'feedback__banner', text: banner })]);
    if (html) f.appendChild(h('div', { html: html }));
    return f;
  }
  function buildCard(q, meta, onResult) {
    var el = h('article', { class: 'q', id: 'q-' + q.id });
    var prior = statusOf(q.id);
    var statusEl = h('span', { class: 'q__status' + (prior === 'right' ? ' ok' : prior === 'wrong' ? ' bad' : prior === 'partial' ? ' part' : ''), text: prior ? ui(prior === 'right' ? 'earlierRight' : prior === 'wrong' ? 'earlierWrong' : 'earlierPartial') : '' });
    if (!prior) statusEl.hidden = true;
    var tags = h('div', { class: 'q__tags' }, [
      dots(q.difficulty || 1),
      q.ahl ? ahlBadge() : null,
      q.paper ? h('span', { class: 'badge', text: ui('paperTag', { p: q.paper }) }) : null,
      q.ref ? h('span', { class: 'tag mono', text: q.ref }) : null,
      statusEl
    ]);
    if (q.type === 'short' && q.marks) tags.appendChild(h('span', { class: 'q__marks', text: q.marks === 1 ? ui('marks1') : ui('marksN', { n: q.marks }) }));
    el.appendChild(tags);
    if (q.data) el.appendChild(wrapTables(h('div', { class: 'q__data', html: t(q.data) })));
    var stem = h('div', { class: 'q__stem', tabindex: '-1' });
    stem.innerHTML = t(q.stem); wrapTables(stem);
    el.appendChild(stem);
    var body = h('div', { class: 'q__body' }), actions = h('div', { class: 'q__actions' }), fb = h('div', { class: 'q__fb', 'aria-live': 'polite' });
    el.appendChild(body); el.appendChild(actions); el.appendChild(fb);

    var api = {
      body: body, actions: actions, fb: fb,
      finish: function (status, node) {
        record(q.id, status);
        statusEl.hidden = false;
        statusEl.className = 'q__status ' + (status === 'right' ? 'ok' : status === 'wrong' ? 'bad' : 'part');
        statusEl.textContent = ui(status === 'right' ? 'correct' : status === 'wrong' ? 'notQuite' : 'partial');
        if (node) { fb.innerHTML = ''; fb.appendChild(node); }
        onResult(status);
      }
    };
    function render() { body.innerHTML = ''; actions.innerHTML = ''; fb.innerHTML = ''; BUILDERS[q.type] ? BUILDERS[q.type](q, api, render) : body.appendChild(h('p', { text: '?' })); }
    render();
    return el;
  }

  var BUILDERS = {
    mcq: function (q, api, rerender) { choiceBuilder(q, api, rerender, false); },
    multi: function (q, api, rerender) { choiceBuilder(q, api, rerender, true); },
    short: shortBuilder, order: orderBuilder, match: matchBuilder
  };

  function choiceBuilder(q, api, rerender, multi) {
    var name = 'qo' + (++uid), inputs = [], labels = [];
    api.body.appendChild(h('p', { class: 'q__legend', text: ui(multi ? 'selectAll' : 'selectOne') }));
    var ul = h('ul', { class: 'q__options' });
    q.options.forEach(function (o, i) {
      var inp = h('input', { type: multi ? 'checkbox' : 'radio', name: name, id: name + '-' + i });
      var lab = h('label', { class: 'q__option', for: name + '-' + i }, [inp, h('span', { class: 'q__letter', text: String.fromCharCode(65 + i) }), h('span', { class: 'q__text', html: t(o) })]);
      inputs.push(inp); labels.push(lab); ul.appendChild(h('li', null, lab));
    });
    api.body.appendChild(ul);
    var btn = h('button', { class: 'btn btn--primary', type: 'button', text: ui('check') });
    api.actions.appendChild(btn);
    btn.addEventListener('click', function () {
      var sel = inputs.map(function (x) { return x.checked; });
      if (!sel.some(Boolean)) { api.fb.innerHTML = ''; api.fb.appendChild(feedback('', ui('chooseFirst'))); return; }
      var ans = multi ? q.answer : [q.answer];
      var ok = true;
      labels.forEach(function (lab, i) {
        var should = ans.indexOf(i) >= 0;
        if (sel[i] !== should) ok = false;
        lab.classList.add('is-locked');
        if (should && sel[i]) lab.classList.add('is-right');
        else if (!should && sel[i]) lab.classList.add('is-wrong');
        else if (should && !sel[i]) lab.classList.add('is-missed');
        inputs[i].disabled = true;
      });
      api.actions.innerHTML = '';
      if (!ok) api.actions.appendChild(h('button', { class: 'btn', type: 'button', text: ui('tryAgain'), onclick: rerender }));
      api.finish(ok ? 'right' : 'wrong', feedback(ok ? 'good' : 'bad', ui(ok ? 'correct' : 'notQuite'), t(q.explanation)));
    });
  }

  function shortBuilder(q, api, rerender) {
    if (q.commandTerm) api.body.appendChild(h('p', { class: 'q__cmd', text: q.commandTerm }));
    var ta = h('textarea', { class: 'input', id: 'qa' + (++uid), rows: '5', 'aria-label': ui('writeHere'), placeholder: ui('writeHere') });
    api.body.appendChild(ta);
    var btn = h('button', { class: 'btn btn--primary', type: 'button', text: ui('revealMs') });
    api.actions.appendChild(btn);
    btn.addEventListener('click', function () {
      api.actions.innerHTML = '';
      var marks = q.marks || (q.markscheme || []).length, score = 0;
      var scoreEl = h('p', { class: 'q__score', style: 'font-weight:700' });
      var boxes = [];
      var list = h('ul', { class: 'q__points' });
      (q.markscheme || []).forEach(function (m, i) {
        var cb = h('input', { type: 'checkbox', id: 'qm' + (++uid) });
        boxes.push(cb);
        list.appendChild(h('li', null, h('label', { for: cb.id }, [cb, h('span', { html: t(m) })])));
      });
      function update() {
        score = boxes.filter(function (b) { return b.checked; }).length;
        scoreEl.textContent = ui('yourScore', { s: Math.min(score, marks), m: marks });
        var st = score >= marks ? 'right' : (score > 0 ? 'partial' : 'wrong');
        api.finish(st, null);
      }
      boxes.forEach(function (b) { b.addEventListener('change', update); });
      api.fb.innerHTML = '';
      api.fb.appendChild(h('h4', { text: ui('markScheme') }));
      api.fb.appendChild(h('p', { class: 'muted small', text: ui('tickPoints') }));
      api.fb.appendChild(list);
      api.fb.appendChild(scoreEl);
      if (q.modelAnswer) api.fb.appendChild(h('div', { class: 'q__model' }, [h('span', { class: 'callout__title', text: ui('modelAnswer') }), h('div', { html: t(q.modelAnswer) })]));
      scoreEl.textContent = ui('yourScore', { s: 0, m: marks });
      api.actions.appendChild(h('button', { class: 'btn', type: 'button', text: ui('tryAgain'), onclick: rerender }));
      update();
    });
  }

  function orderBuilder(q, api, rerender) {
    var n = q.items.length, order = [], i;
    for (i = 0; i < n; i++) order.push(i);
    for (i = 0; i < 12; i++) { order = shuffle(order); if (order.some(function (v, k) { return v !== k; })) break; }
    var locked = false;
    api.body.appendChild(h('p', { class: 'q__legend', text: ui('orderHint') }));
    var ol = h('ol', { class: 'q__order' });
    api.body.appendChild(ol);
    function draw(focusIdx, focusDir) {
      ol.innerHTML = '';
      order.forEach(function (it, pos) {
        var label = plain(t(q.items[it]));
        var up = h('button', { class: 'icon-btn', type: 'button', 'aria-label': ui('moveUp') + ': ' + label, html: ICON.up, disabled: locked || pos === 0 });
        var dn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': ui('moveDown') + ': ' + label, html: ICON.down, disabled: locked || pos === n - 1 });
        up.addEventListener('click', function () { swap(pos, pos - 1, 'up'); });
        dn.addEventListener('click', function () { swap(pos, pos + 1, 'down'); });
        var li = h('li', null, [h('span', { class: 'q__n', text: pos + 1 }), h('span', { html: t(q.items[it]) }), h('span', { class: 'q__move' }, [up, dn])]);
        li._up = up; li._dn = dn;
        ol.appendChild(li);
      });
      if (focusIdx != null) { var li2 = ol.children[focusIdx]; if (li2) { var b = (focusDir === 'up' && !li2._up.disabled) ? li2._up : (!li2._dn.disabled && focusDir === 'down') ? li2._dn : (li2._up.disabled ? li2._dn : li2._up); b.focus(); } }
    }
    function swap(a, b, dir) { var x = order[a]; order[a] = order[b]; order[b] = x; draw(b, dir); }
    draw();
    var btn = h('button', { class: 'btn btn--primary', type: 'button', text: ui('check') });
    api.actions.appendChild(btn);
    btn.addEventListener('click', function () {
      locked = true; draw();
      var ok = true;
      [].forEach.call(ol.children, function (li, pos) { var good = order[pos] === pos; if (!good) ok = false; li.classList.add(good ? 'is-right' : 'is-wrong'); });
      api.actions.innerHTML = '';
      if (!ok) api.actions.appendChild(h('button', { class: 'btn', type: 'button', text: ui('tryAgain'), onclick: rerender }));
      var html = t(q.explanation) || '';
      var node = feedback(ok ? 'good' : 'bad', ui(ok ? 'correct' : 'notQuite'), html);
      if (!ok) {
        node.appendChild(h('p', { style: 'margin:0.6rem 0 0.2rem;font-weight:700', text: ui('correctOrderIs') }));
        node.appendChild(h('ol', { class: 'q__answers' }, q.items.map(function (x) { return h('li', { html: t(x) }); })));
      }
      api.finish(ok ? 'right' : 'wrong', node);
    });
  }

  function matchBuilder(q, api, rerender) {
    var rights = shuffle(q.pairs.map(function (p, i) { return i; }));
    api.body.appendChild(h('p', { class: 'q__legend', text: ui('matchHint') }));
    var wrap = h('div', { class: 'q__match' }), selects = [], rows = [];
    q.pairs.forEach(function (p, i) {
      var id = 'qs' + (++uid);
      var sel = h('select', { class: 'select', id: id, 'aria-label': plain(t(p.left)) }, [h('option', { value: '', text: ui('choose') })]);
      rights.forEach(function (r) { sel.appendChild(h('option', { value: String(r), text: plain(t(q.pairs[r].right)) })); });
      selects.push(sel);
      var row = h('div', { class: 'q__pair' }, [h('label', { for: id, html: t(p.left) }), sel]);
      rows.push(row); wrap.appendChild(row);
    });
    api.body.appendChild(wrap);
    var btn = h('button', { class: 'btn btn--primary', type: 'button', text: ui('check') });
    api.actions.appendChild(btn);
    btn.addEventListener('click', function () {
      if (selects.some(function (s) { return s.value === ''; })) { api.fb.innerHTML = ''; api.fb.appendChild(feedback('', ui('chooseAll'))); return; }
      var ok = true;
      selects.forEach(function (s, i) { var good = Number(s.value) === i; if (!good) ok = false; rows[i].classList.add(good ? 'is-right' : 'is-wrong'); s.disabled = true; });
      api.actions.innerHTML = '';
      if (!ok) api.actions.appendChild(h('button', { class: 'btn', type: 'button', text: ui('tryAgain'), onclick: rerender }));
      var node = feedback(ok ? 'good' : 'bad', ui(ok ? 'correct' : 'notQuite'), t(q.explanation));
      if (!ok) {
        node.appendChild(h('p', { style: 'margin:0.6rem 0 0.2rem;font-weight:700', text: ui('correctPairs') }));
        node.appendChild(h('ul', { class: 'q__answers' }, q.pairs.map(function (p) { return h('li', { html: t(p.left) + ' → ' + t(p.right) }); })));
      }
      api.finish(ok ? 'right' : 'wrong', node);
    });
  }

  /* mountQuiz(host, items, {title, showFrom}) — items: [{q, meta}] — one question at a time with a track bar. */
  function mountQuiz(host, items, opts) {
    opts = opts || {};
    host.innerHTML = '';
    var box = h('div', { class: 'quiz' });
    host.appendChild(box);
    if (!items.length) {
      box.appendChild(h('div', { class: 'quiz__head' }, h('h2', { class: 'quiz__title', text: opts.title || ui('quizTitle') })));
      box.appendChild(h('div', { class: 'quiz__body' }, h('p', { class: 'quiz__empty', text: ui('quizEmpty') })));
      return;
    }
    var results = [], cards = [], pos = 0;
    var meta = h('p', { class: 'quiz__meta' });
    var track = h('ol', { class: 'quiz__track', 'aria-hidden': 'true' });
    if (items.length > 30) track.style.display = 'none';
    var head = h('div', { class: 'quiz__head' }, [h('h2', { class: 'quiz__title', text: opts.title || ui('quizTitle') }), meta]);
    var bodyEl = h('div', { class: 'quiz__body' });
    var prevBtn = h('button', { class: 'btn', type: 'button', text: '← ' + ui('previousQ') });
    var nextBtn = h('button', { class: 'btn btn--primary', type: 'button' });
    var nav = h('div', { class: 'quiz__nav' }, [prevBtn, nextBtn]);
    box.appendChild(head); box.appendChild(track); box.appendChild(bodyEl); box.appendChild(nav);
    var lis = items.map(function () { var li = h('li'); track.appendChild(li); return li; });
    items.forEach(function (it, i) {
      var card = buildCard(it.q, it.meta, function (status) { results[i] = status; paint(); });
      if (opts.showFrom && it.meta) {
        var tagRow = card.querySelector('.q__tags');
        tagRow.insertBefore(h('a', { class: 'tag mono q__from', href: '#topic-' + it.meta.slug, text: it.meta.id }), tagRow.children[1] || null);
      }
      card.hidden = true; bodyEl.appendChild(card); cards.push(card);
    });
    var summary = h('div', { class: 'summary', hidden: true });
    bodyEl.appendChild(summary);
    function paint() {
      lis.forEach(function (li, i) { li.className = results[i] === 'right' ? 'is-right' : results[i] === 'wrong' ? 'is-wrong' : results[i] === 'partial' ? 'is-partial' : ''; if (i === pos && !results[i]) li.className = 'is-current'; });
      var done = results.filter(Boolean).length;
      meta.textContent = ui('qOf', { n: Math.min(pos + 1, items.length), total: items.length }) + ' · ' + ui('answeredN', { a: done, n: items.length });
      if (opts.onChange) opts.onChange();
    }
    function show(i, focus) {
      pos = i;
      cards.forEach(function (c, k) { c.hidden = k !== i; });
      summary.hidden = true; nav.hidden = false;
      prevBtn.disabled = i === 0;
      nextBtn.textContent = i === items.length - 1 ? ui('finish') : ui('nextQ') + ' →';
      paint();
      if (focus) { var s = cards[i].querySelector('.q__stem'); if (s) s.focus({ preventScroll: true }); scrollToEl(box); }
    }
    function showSummary() {
      cards.forEach(function (c) { c.hidden = true; });
      var right = results.filter(function (r) { return r === 'right'; }).length, part = results.filter(function (r) { return r === 'partial'; }).length;
      var un = items.length - results.filter(Boolean).length;
      summary.innerHTML = '';
      summary.appendChild(h('h3', { text: ui('quizDone') }));
      summary.appendChild(h('p', { class: 'summary__score', text: ui('quizScore', { c: right, n: items.length }) }));
      var bits = [];
      if (part) bits.push(ui('quizPartial', { p: part }));
      if (un) bits.push(ui('quizUnanswered', { u: un }));
      if (bits.length) summary.appendChild(h('p', { class: 'muted', text: bits.join(' · ') }));
      var row = h('div', { class: 'btn-row' });
      var missed = items.filter(function (it, i) { return results[i] !== 'right'; });
      if (missed.length) row.appendChild(h('button', { class: 'btn btn--primary', type: 'button', text: ui('quizMissed'), onclick: function () { mountQuiz(host, missed, opts); } }));
      row.appendChild(h('button', { class: 'btn', type: 'button', text: ui('quizReview'), onclick: function () { mountQuiz(host, items, opts); } }));
      summary.appendChild(row);
      summary.hidden = false; nav.hidden = true;
      meta.textContent = ui('quizDone');
    }
    prevBtn.addEventListener('click', function () { if (pos > 0) show(pos - 1, true); });
    nextBtn.addEventListener('click', function () { if (pos < items.length - 1) show(pos + 1, true); else showSummary(); });
    show(0, false);
  }
  IB.mountQuiz = mountQuiz;

  /* ---------- PRACTICE ---------- */
  var P = { theme: 'all', topic: 'all', lvl: 'all', diff: 'all', paper: 'all', status: 'all', random: false };
  function allItems() {
    var out = [];
    IB.topics.forEach(function (tp) {
      var meta = metaFor({ slug: tp.slug, id: tp.id, theme: tp.theme, level: tp.level, ahlOnly: tp.ahlOnly, title: tp.title });
      (tp.questions || []).forEach(function (q) { out.push({ q: q, meta: meta }); });
    });
    return out;
  }
  function renderPractice(app) {
    var wrap = h('div', { class: 'wrap band-section' });
    app.appendChild(wrap);
    wrap.appendChild(h('p', { class: 'eyebrow', text: ui('navPractice') }));
    wrap.appendChild(h('h1', { text: ui('practiceTitle') }));
    wrap.appendChild(h('p', { class: 'lede', text: ui('practiceLead') }));
    if (IB.level === 'sl') wrap.appendChild(h('p', { class: 'muted small', text: ui('practiceHidden') }));
    var items = allItems();
    function sel(id, label, options, key) {
      var s = h('select', { class: 'select', id: id }, options.map(function (o) { return h('option', { value: o[0], text: o[1], selected: P[key] === o[0] }); }));
      s.addEventListener('change', function () { P[key] = s.value; if (key === 'theme') P.topic = 'all'; P.random = false; if (key === 'theme') { render(true); } else draw(); });
      return h('div', { class: 'field' }, [h('label', { for: id, text: label }), s]);
    }
    var topicOpts = [['all', ui('all')]].concat(IB.topics.filter(function (tp) { return P.theme === 'all' || tp.theme === P.theme; }).map(function (tp) { return [tp.slug, tp.id + ' ' + t(tp.title)]; }));
    var fields = [
      sel('f-theme', ui('fTheme'), [['all', ui('all')], ['A', 'A · ' + ui('themeA')], ['B', 'B · ' + ui('themeB')]], 'theme'),
      sel('f-topic', ui('fTopic'), topicOpts, 'topic')
    ];
    if (IB.level !== 'sl') fields.push(sel('f-lvl', ui('fLevel'), [['all', ui('all')], ['sl', ui('onlySl')], ['ahl', ui('onlyAhl')]], 'lvl'));
    fields.push(sel('f-diff', ui('fDiff'), [['all', ui('all')], ['1', '1'], ['2', '2'], ['3', '3']], 'diff'));
    fields.push(sel('f-paper', ui('fPaper'), [['all', ui('all')], ['1A', '1A'], ['1B', '1B'], ['2', '2']], 'paper'));
    fields.push(sel('f-status', ui('fStatus'), [['all', ui('all')], ['un', ui('unanswered')], ['wrong', ui('wrongOnly')]], 'status'));
    wrap.appendChild(h('div', { class: 'filters' }, fields));
    var bar = h('div', { class: 'result-bar' });
    var count = h('strong');
    var rnd = h('button', { class: 'btn btn--primary', type: 'button', text: ui('random10'), onclick: function () { P.random = true; draw(); } });
    var allBtn = h('button', { class: 'btn', type: 'button', text: ui('allMatching'), onclick: function () { P.random = false; draw(); } });
    bar.appendChild(count); bar.appendChild(h('div', { class: 'btn-row' }, [rnd, allBtn]));
    wrap.appendChild(bar);
    var host = h('div');
    wrap.appendChild(host);
    function match() {
      return items.filter(function (it) {
        var q = it.q, m = it.meta, s = statusOf(q.id);
        if (IB.level === 'sl' && q.ahl) return false;
        if (P.theme !== 'all' && m.theme !== P.theme) return false;
        if (P.topic !== 'all' && m.slug !== P.topic) return false;
        if (P.lvl === 'sl' && q.ahl) return false;
        if (P.lvl === 'ahl' && !q.ahl) return false;
        if (P.diff !== 'all' && String(q.difficulty) !== P.diff) return false;
        if (P.paper !== 'all' && q.paper !== P.paper) return false;
        if (P.status === 'un' && s) return false;
        if (P.status === 'wrong' && !(s === 'wrong' || s === 'partial')) return false;
        return true;
      });
    }
    function draw() {
      var list = match();
      count.textContent = ui('nQuestions', { n: list.length });
      if (P.random) list = shuffle(list).slice(0, 10);
      if (!list.length) { host.innerHTML = ''; host.appendChild(h('p', { class: 'muted', text: ui('noMatch') })); return; }
      mountQuiz(host, list, { title: ui('practiceTitle'), showFrom: true });
    }
    draw();
  }

  /* ---------- GLOSSARY ---------- */
  var gq = '';
  function renderGlossary(app) {
    var wrap = h('div', { class: 'wrap band-section' });
    app.appendChild(wrap);
    wrap.appendChild(h('p', { class: 'eyebrow', text: ui('navGlossary') }));
    wrap.appendChild(h('h1', { text: ui('glossaryTitle') }));
    wrap.appendChild(h('p', { class: 'lede', text: ui('glossaryLead') }));
    var entries = [];
    IB.topics.forEach(function (tp) {
      (tp.keyTerms || []).forEach(function (k) { if (!(IB.level === 'sl' && k.ahl)) entries.push({ k: k, tp: tp }); });
    });
    entries.sort(function (a, b) { return ((a.k.term && a.k.term.en) || '').toLowerCase().localeCompare(((b.k.term && b.k.term.en) || '').toLowerCase()); });
    var input = h('input', { class: 'input', type: 'search', id: 'gloss-q', placeholder: ui('searchPh'), 'aria-label': ui('search'), value: gq });
    var count = h('span', { class: 'muted small' });
    wrap.appendChild(h('div', { class: 'gloss-search' }, [input, count]));
    var host = h('div', { 'aria-live': 'polite' });
    wrap.appendChild(host);
    function draw() {
      var q = gq.trim().toLowerCase();
      var list = entries.filter(function (e) {
        if (!q) return true;
        var hay = [t(e.k.term), (e.k.term && e.k.term.en) || '', plain(t(e.k.def))].join(' ').toLowerCase();
        return hay.indexOf(q) >= 0;
      });
      count.textContent = ui('nTerms', { n: list.length });
      host.innerHTML = '';
      if (!list.length) { host.appendChild(h('p', { class: 'muted', text: ui('noTerms') })); return; }
      var letter = '';
      list.forEach(function (e) {
        var en = (e.k.term && e.k.term.en) || '', L = en.charAt(0).toUpperCase();
        if (L !== letter) { letter = L; host.appendChild(h('div', { class: 'gloss-letter', 'aria-hidden': 'true', text: L })); }
        var tr = t(e.k.term);
        var term = h('div', { class: 'gloss-term' }, [h('strong', { text: en })]);
        if (IB.lang !== 'en' && tr && tr !== en) term.appendChild(h('span', { class: 'tr', lang: IB.lang === 'ja' ? 'ja' : 'zh-HK', text: tr }));
        if (e.k.ahl) term.appendChild(ahlBadge());
        term.appendChild(h('a', { class: 'tag mono', href: '#topic-' + e.tp.slug, text: e.tp.id }));
        host.appendChild(h('div', { class: 'gloss-entry' }, [term, wrapTables(h('div', { class: 'gloss-def', html: t(e.k.def) }))]));
      });
    }
    input.addEventListener('input', function () { gq = input.value; draw(); });
    draw();
  }

  /* ---------- PROTEIN LAB ---------- */
  var LAB = [
    { w: 'amino-acid', ahl: false,
      title: { en: 'Amino acid structure and R-groups', ja: 'アミノ酸の構造とR基 (R-group)', zh: '氨基酸的結構與 R 基 (R-group)' },
      intro: {
        en: '<p>Every amino acid has the same basic structure. A central carbon atom is bonded to an amino group (–NH<sub>2</sub>), a carboxyl group (–COOH), a hydrogen atom and a variable R-group. The R-group is what makes one amino acid different from another. Click the R-groups to see how they differ.</p>',
        ja: '<p>すべてのアミノ酸は同じ基本構造をもちます。中心の炭素原子に、アミノ基 (–NH<sub>2</sub>)、カルボキシ基 (–COOH)、水素原子、そして側鎖であるR基 (R-group) が結合しています。アミノ酸どうしの違いを生むのはR基です。R基を選んで、どう違うか見てみましょう。</p>',
        zh: '<p>所有氨基酸都有相同的基本結構：中心碳原子連接氨基 (–NH<sub>2</sub>)、羧基 (–COOH)、氫原子和可變的 R 基 (R-group)。不同氨基酸的分別就在於 R 基。請點選各個 R 基，看看它們有何不同。</p>'
      } },
    { w: 'peptide-builder', ahl: false,
      title: { en: 'Condensation and peptide bonds', ja: '縮合反応とペプチド結合 (peptide bond)', zh: '縮合反應與肽鍵 (peptide bond)' },
      intro: {
        en: '<p>Amino acids are joined by condensation reactions. The –OH from the carboxyl group of one amino acid and an –H from the amino group of the next are removed together as a molecule of water (H<sub>2</sub>O). A peptide bond forms between them. Many amino acids joined this way make a polypeptide.</p>',
        ja: '<p>アミノ酸は縮合反応 (condensation reaction) で結合します。一方のアミノ酸のカルボキシ基の –OH と、次のアミノ酸のアミノ基の –H がいっしょに取れて、水 (H<sub>2</sub>O) が1分子できます。その間にペプチド結合 (peptide bond) ができます。多くのアミノ酸がこうして結合したものがポリペプチド (polypeptide) です。</p>',
        zh: '<p>氨基酸通過縮合反應 (condensation reaction) 連接。一個氨基酸羧基上的 –OH 與下一個氨基酸氨基上的 –H 一同脫去，形成一分子水 (H<sub>2</sub>O)，兩者之間便形成肽鍵 (peptide bond)。許多氨基酸這樣連接起來，就成為多肽 (polypeptide)。</p>'
      } },
    { w: 'protein-levels', ahl: true,
      title: { en: 'Levels of protein structure', ja: 'タンパク質の構造の階層', zh: '蛋白質結構的層次' },
      intro: {
        en: '<p>Protein structure is described at four levels. <strong>Primary</strong>: the sequence of amino acids. <strong>Secondary</strong>: regular shapes such as the &alpha;-helix and &beta;-pleated sheet, held by hydrogen bonds. <strong>Tertiary</strong>: the overall 3D shape of one polypeptide. <strong>Quaternary</strong>: two or more polypeptides together. Secondary, tertiary and quaternary structure are AHL.</p>',
        ja: '<p>タンパク質の構造は4つの階層で表します。<strong>一次構造 (primary)</strong>：アミノ酸の配列。<strong>二次構造 (secondary)</strong>：水素結合で保たれる、&alpha;ヘリックスや&beta;シートのような規則的な形。<strong>三次構造 (tertiary)</strong>：1本のポリペプチド全体の立体構造。<strong>四次構造 (quaternary)</strong>：2本以上のポリペプチドの組み合わせ。二次・三次・四次構造はAHLです。</p>',
        zh: '<p>蛋白質結構分為四個層次。<strong>一級結構 (primary)</strong>：氨基酸的序列。<strong>二級結構 (secondary)</strong>：由氫鍵維持的規則形狀，例如 &alpha; 螺旋和 &beta; 摺疊片。<strong>三級結構 (tertiary)</strong>：單條多肽的整體三維形狀。<strong>四級結構 (quaternary)</strong>：兩條或以上多肽結合在一起。二級、三級和四級結構屬於 AHL。</p>'
      } },
    { w: 'protein-folding', ahl: true,
      title: { en: 'What holds the tertiary structure together', ja: '三次構造を保つもの', zh: '維持三級結構的作用力' },
      intro: {
        en: '<p>A polypeptide folds into its tertiary structure because of interactions between R-groups: hydrogen bonds, ionic bonds, disulfide bridges (covalent bonds between two cysteine R-groups) and hydrophobic interactions. Try folding the chain and see which interactions form.</p>',
        ja: '<p>ポリペプチドが三次構造に折りたたまれるのは、R基どうしの相互作用があるからです。水素結合、イオン結合 (ionic bond)、ジスルフィド結合 (disulfide bridge：2つのシステインのR基の間の共有結合)、疎水性相互作用 (hydrophobic interaction) がそれにあたります。鎖を折りたたんで、どの相互作用ができるか見てみましょう。</p>',
        zh: '<p>多肽摺疊成三級結構，是由於 R 基之間的相互作用：氫鍵 (hydrogen bond)、離子鍵 (ionic bond)、二硫鍵 (disulfide bridge，兩個半胱氨酸 R 基之間的共價鍵) 和疏水作用 (hydrophobic interaction)。請試試摺疊多肽鏈，看看會形成哪些作用力。</p>'
      } },
    { w: 'denaturation', ahl: false,
      title: { en: 'Denaturation by heat and pH', ja: '熱とpHによる変性 (denaturation)', zh: '高溫與 pH 引致的變性 (denaturation)' },
      intro: {
        en: '<p>Denaturation is a change in the 3D shape of a protein that makes it lose its biological function. Heat makes the molecule vibrate more and breaks the weak bonds that hold its shape. An extreme pH changes the charges on R-groups and disrupts the bonds between them. The peptide bonds of the primary structure are not broken. Use the sliders to see the effect.</p>',
        ja: '<p>変性 (denaturation) とは、タンパク質の立体構造が変わり、生物としての働きを失うことです。熱は分子の振動を激しくして、形を保っている弱い結合を切ります。極端なpHはR基の電荷を変え、R基どうしの結合を乱します。一次構造のペプチド結合は切れません。スライダーで影響を確かめましょう。</p>',
        zh: '<p>變性 (denaturation) 是指蛋白質的三維形狀改變，令它失去生物功能。高溫使分子振動加劇，破壞維持形狀的較弱鍵。極端的 pH 會改變 R 基上的電荷，擾亂 R 基之間的鍵。一級結構中的肽鍵不會斷開。請用滑桿觀察影響。</p>'
      } },
    { w: 'protein-compare', ahl: false,
      title: { en: 'Form and function: globular and fibrous, conjugated and non-conjugated', ja: '形と働き：球状と繊維状、複合と非複合', zh: '形態與功能：球狀與纖維狀、結合與非結合' },
      intro: {
        en: '<p>A protein’s shape decides what it can do. Globular proteins are compact and rounded, and are usually soluble in water, for example insulin. Fibrous proteins form long strands that give strength, for example collagen. A conjugated protein contains a non-protein part, such as the haem group in haemoglobin; a non-conjugated protein does not. The conjugated and non-conjugated classification is AHL.</p>',
        ja: '<p>タンパク質の形は、その働きを決めます。球状タンパク質 (globular protein) は丸くコンパクトで、ふつう水に溶けます（例：インスリン）。繊維状タンパク質 (fibrous protein) は長い繊維になって強度を与えます（例：コラーゲン）。複合タンパク質 (conjugated protein) はタンパク質以外の部分をもち、たとえばヘモグロビンのヘム基がそうです。非複合タンパク質 (non-conjugated protein) はそれをもちません。複合・非複合の分類はAHLです。</p>',
        zh: '<p>蛋白質的形狀決定它的功能。球狀蛋白質 (globular protein) 結構緊密、呈圓形，通常可溶於水，例如胰島素。纖維狀蛋白質 (fibrous protein) 形成長鏈，提供強度，例如膠原蛋白。結合蛋白質 (conjugated protein) 含有非蛋白質部分，例如血紅蛋白中的血紅素基團；非結合蛋白質 (non-conjugated protein) 則沒有。結合與非結合的分類屬於 AHL。</p>'
      } }
  ];
  function renderLab(app) {
    var wrap = h('div', { class: 'wrap band-section' });
    app.appendChild(wrap);
    wrap.appendChild(h('p', { class: 'eyebrow', text: 'B1.2' }));
    wrap.appendChild(h('h1', { text: ui('labTitle') }));
    wrap.appendChild(h('p', { class: 'lede', text: ui('labLead') }));
    var nav = h('ol', { class: 'step-nav', 'aria-label': ui('jumpTo') });
    var visible = LAB.filter(function (s) { return true; });
    visible.forEach(function (s, i) {
      var a = h('a', { href: '#' + hashNow(), 'data-step': 'lab-step-' + (i + 1) }, [h('span', { class: 'mono', text: ui('step', { n: i + 1 }) }), h('span', { text: t(s.title) })]);
      a.addEventListener('click', function (e) { e.preventDefault(); scrollToEl(doc.getElementById('lab-step-' + (i + 1))); });
      nav.appendChild(h('li', null, a));
    });
    wrap.appendChild(nav);
    visible.forEach(function (s, i) {
      var step = h('section', { class: 'lab-step', id: 'lab-step-' + (i + 1), 'data-level': s.ahl ? 'ahl' : null }, [
        h('div', { class: 'lab-step__head' }, [h('span', { class: 'lab-step__num', text: ui('step', { n: i + 1 }) }), h('h2', { text: t(s.title) }), s.ahl ? ahlBadge() : null]),
        wrapTables(h('div', { class: 'lab-step__intro', html: t(s.intro) }))
      ]);
      mountWidget(step, s.w);
      wrap.appendChild(step);
    });
    wrap.appendChild(h('p', { style: 'margin-top:2rem' }, h('a', { class: 'btn btn--primary', href: '#topic-b1-2', text: ui('labTopicLink') + ' →' })));
  }

  /* ---------- ABOUT ---------- */
  function renderAbout(app) {
    var wrap = h('div', { class: 'wrap band-section about' });
    app.appendChild(wrap);
    wrap.appendChild(h('h1', { text: ui('aboutTitle') }));
    ['Purpose', 'Syllabus', 'Scope', 'Lang', 'Disclaimer', 'Open', 'Privacy'].forEach(function (k) {
      wrap.appendChild(h('h2', { text: ui('about' + k + 'H') }));
      wrap.appendChild(h('p', { class: 'prose', text: ui('about' + k) }));
      if (k === 'Open') wrap.appendChild(h('p', null, h('a', { class: 'btn', href: REPO, rel: 'noopener', text: ui('github') })));
    });
    var btn = h('button', { class: 'btn', type: 'button', text: ui('resetProgress') });
    var armed = false, timer = null;
    btn.addEventListener('click', function () {
      if (!armed) { armed = true; btn.textContent = ui('resetConfirm'); timer = setTimeout(function () { armed = false; btn.textContent = ui('resetProgress'); }, 4000); return; }
      clearTimeout(timer); armed = false; IB.progress = {}; saveProgress(); btn.textContent = ui('resetDone');
    });
    wrap.appendChild(btn);
  }
  function renderMessage(app, title, text) {
    app.appendChild(h('div', { class: 'wrap band-section' }, [h('h1', { text: title }), h('p', { text: text }), h('a', { class: 'btn', href: '#home', text: ui('back') })]));
  }

  /* ---------- router ---------- */
  function hashNow() { return (window.location.hash || '#home').replace(/^#/, ''); }
  function parse() {
    var hs = hashNow();
    if (hs.indexOf('topic-') === 0) return { name: 'topic', slug: hs.slice(6) };
    if (['home', 'protein-lab', 'practice', 'glossary', 'about'].indexOf(hs) >= 0) return { name: hs };
    return { name: 'home' };
  }
  var lastRoute = '';
  function render(keepScroll) {
    var r = parse(), y = window.pageYOffset;
    current = { name: r.name, slug: r.slug || null };
    runCleanups();
    renderHeader(); renderFooter();
    var app = doc.getElementById('app');
    app.innerHTML = '';
    var titleKey = { home: null, 'protein-lab': 'navLab', practice: 'navPractice', glossary: 'navGlossary', about: 'navAbout' }[r.name];
    var pageTitle = titleKey ? ui(titleKey) + ' | ' + SITE : SITE;
    try {
      if (r.name === 'home') renderHome(app);
      else if (r.name === 'topic') {
        renderTopic(app, r.slug);
        var e = SKELETON.filter(function (s) { return s.slug === r.slug; })[0];
        if (e) pageTitle = e.id + ' ' + t(metaFor(e).title) + ' | ' + SITE;
      }
      else if (r.name === 'protein-lab') renderLab(app);
      else if (r.name === 'practice') renderPractice(app);
      else if (r.name === 'glossary') renderGlossary(app);
      else if (r.name === 'about') renderAbout(app);
    } catch (err) {
      if (window.console) console.error(err);
      app.appendChild(h('div', { class: 'wrap band-section' }, h('p', { text: 'Something went wrong while showing this page.' })));
    }
    doc.title = pageTitle;
    if (keepScroll && lastRoute === hashNow()) window.scrollTo(0, y);
    else { window.scrollTo(0, 0); }
    lastRoute = hashNow();
  }

  /* ---------- init ---------- */
  function init() {
    var tv = store.get('ibbio.theme'); if (tv === 'light' || tv === 'dark') applyTheme(tv);
    var lv = store.get('ibbio.lang'); if (lv && LANGS.some(function (x) { return x.id === lv; })) IB.lang = lv;
    IB.level = store.get('ibbio.level') === 'sl' ? 'sl' : 'hl';
    if (IB.level === 'sl') doc.documentElement.setAttribute('data-show', 'sl');
    doc.documentElement.setAttribute('lang', LANGS.filter(function (x) { return x.id === IB.lang; })[0].html);
    loadProgress();
    window.addEventListener('hashchange', function () { render(false); var m = doc.getElementById('main'); if (m) m.focus({ preventScroll: true }); });
    render(false);
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})();
