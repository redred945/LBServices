(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PHONE_WA = '33749094644';
  const MAIL = 'contact.lbshine@gmail.com';

  /* header */
  const hdr = $('#hdr');
  const onScroll = () => hdr.classList.toggle('stuck', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const o = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
  });
  $$('#nav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); burger.setAttribute('aria-expanded', false);
  }));

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12 });
  if (location.search.includes('static')) document.documentElement.classList.add('is-static');
  if (location.search.includes('static')) $('.reveal').forEach(el => el.classList.add('in'));
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

  /* hero: vitre embuée à essuyer */
  const cv = $('#pane'), ctx = cv.getContext('2d');
  const hint = $('#hint');
  let W, H, wiped = false, drawing = false, last = null, auto = true;
  const heroImg = $('#heroImg');
  const fog = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const r = cv.getBoundingClientRect();
    W = cv.width = Math.round(r.width * dpr); H = cv.height = Math.round(r.height * dpr);
    ctx.globalCompositeOperation = 'source-over';
    // la même photo, floutée et ternie : la vitre embuée, qu'on essuie pour révéler la photo nette
    if (heroImg.complete && heroImg.naturalWidth) {
      const iw = heroImg.naturalWidth, ih = heroImg.naturalHeight, k = Math.max(W / iw, H / ih);
      const dw = iw * k, dh = ih * k, dx = (W - dw) * .6, dy = (H - dh) * .4; // object-position 60% 40%
      const blur = 'filter' in ctx;
      if (blur) ctx.filter = 'blur(' + 16 * dpr + 'px) brightness(1.15) saturate(.7)';
      ctx.drawImage(heroImg, dx - 40, dy - 40, dw + 80, dh + 80);
      if (blur) ctx.filter = 'none';
      ctx.fillStyle = blur ? 'rgba(210,225,215,.22)' : 'rgba(150,165,155,.9)';
    } else ctx.fillStyle = 'rgba(120,135,128,.92)';
    ctx.fillRect(0, 0, W, H);
    // grain + traînées
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = 'rgba(255,255,255,' + Math.random() * .06 + ')';
      ctx.beginPath(); ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 3 * dpr, 0, 7); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.lineWidth = 2 * dpr;
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * W, y = Math.random() * H * .6;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (Math.random() - .5) * 20, y + Math.random() * H * .35); ctx.stroke();
    }
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  };
  const brush = () => Math.max(70, Math.min(W, H) * .17);
  const stroke = (a, b) => {
    ctx.lineWidth = brush();
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  };
  const pos = e => {
    const r = cv.getBoundingClientRect(), dpr = W / r.width;
    return { x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr };
  };
  const hideHint = () => { if (!wiped) { wiped = true; hint.classList.add('gone'); } };
  const sweep = () => {
    // passage automatique de raclette, en zigzag
    let t = 0; const rows = 5, dur = 2600, start = performance.now();
    let prev = { x: -80, y: H * .12 };
    const step = now => {
      if (!auto) return;
      t = Math.min((now - start) / dur, 1);
      const row = Math.min(Math.floor(t * rows), rows - 1), f = (t * rows) % 1;
      const dirR = row % 2 === 0;
      const x = (dirR ? f : 1 - f) * (W + 160) - 80;
      const y = H * (.12 + row * .19);
      const p = { x, y };
      stroke(prev, p); prev = p;
      if (t < 1) requestAnimationFrame(step);
      else { auto = false; }
    };
    requestAnimationFrame(step);
  };
  const init = () => {
    fog();
    if (reduce) { ctx.fillRect(0, 0, W, H); ctx.clearRect(0, 0, W, H); cv.style.display = 'none'; hint.remove(); return; }
    setTimeout(() => { if (auto) sweep(); }, 900);
  };
  cv.addEventListener('pointerdown', e => { auto = false; drawing = true; last = pos(e); hideHint(); cv.setPointerCapture(e.pointerId); stroke(last, last); });
  cv.addEventListener('pointermove', e => {
    const p = pos(e);
    if (e.pointerType === 'mouse' || drawing) { if (e.pointerType === 'mouse') auto = false; stroke(last || p, p); last = p; hideHint(); }
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(n => cv.addEventListener(n, () => { drawing = false; if (n !== 'pointerleave') last = null; }));
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (!auto || !wiped) { const q = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); if (Math.abs(q.width * d - W) > 4) fog(); } }, 250); });
  // le canvas gêne le scroll tactile vertical seulement si on dessine : touch-action pan-y le laisse passer
  if (heroImg.complete) init(); else heroImg.addEventListener('load', init, { once: true });
  // laisser les clics atteindre les boutons du hero
  $$('.hero-in .cta-row a').forEach(a => a.style.position = 'relative');

  /* simulateur crédit d'impôt */
  const amount = $('#amount');
  const eur = n => (Math.round(n * 100) / 100).toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' €';
  const calc = () => {
    const v = +amount.value;
    $('#amount-o').textContent = eur(v);
    $('#c-full').textContent = eur(v);
    $('#c-aid').textContent = '−' + eur(v / 2);
    $('#c-pay').textContent = eur(v / 2);
    amount.style.setProperty('--p', ((v - amount.min) / (amount.max - amount.min) * 100) + '%');
  };
  amount.addEventListener('input', calc); calc();

  /* avant / après */
  $$('[data-ba]').forEach(ba => {
    const r = $('input', ba);
    const set = () => ba.style.setProperty('--x', r.value + '%');
    r.addEventListener('input', set); set();
  });

  /* préremplissage de la prestation */
  $$('[data-prefill]').forEach(a => a.addEventListener('click', () => {
    const s = $('#svc'); const v = a.dataset.prefill;
    [...s.options].forEach(o => { if (o.text === v) s.value = o.text; });
  }));

  /* formulaire → WhatsApp / email */
  const form = $('#form');
  const build = () => {
    const f = new FormData(form);
    const name = (f.get('name') || '').trim(), tel = (f.get('tel') || '').trim();
    let ok = true;
    ['name', 'tel'].forEach(n => {
      const el = form.elements[n]; const bad = !el.value.trim();
      el.classList.toggle('err', bad); if (bad) ok = false;
    });
    if (!ok) return null;
    return `Bonjour LBS, je suis ${name}.\nPrestation : ${f.get('svc')}\nTéléphone : ${tel}\n${(f.get('msg') || '').trim()}`.trim();
  };
  form.addEventListener('submit', e => {
    e.preventDefault(); const m = build(); if (!m) return;
    open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(m)}`, '_blank', 'noopener');
  });
  $('#mailBtn').addEventListener('click', () => {
    const m = build(); if (!m) return;
    location.href = `mailto:${MAIL}?subject=${encodeURIComponent('Demande de devis — ' + form.elements.svc.value)}&body=${encodeURIComponent(m)}`;
  });

  /* galerie : filtres */
  const chips = $$('.chip'), items = $$('#gallery .g');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => { x.classList.toggle('on', x === c); x.setAttribute('aria-pressed', x === c); });
    items.forEach(g => { g.hidden = c.dataset.f !== 'all' && g.dataset.k !== c.dataset.f; });
  }));

  /* lightbox */
  const lb = $('#lb'), lbImg = $('#lbImg'), lbCap = $('#lbCap');
  let grp = [], idx = 0, opener = null;
  const show = () => {
    const b = grp[idx];
    lbImg.src = b.dataset.full; lbImg.alt = $('img', b).alt; lbCap.textContent = b.dataset.cap || '';
    $$('.lb-n', lb).forEach(n => n.style.visibility = grp.length > 1 ? '' : 'hidden');
  };
  const step = d => { idx = (idx + d + grp.length) % grp.length; show(); };
  $$('.zoom').forEach(b => b.addEventListener('click', () => {
    opener = b;
    grp = $$('.zoom[data-lb="' + b.dataset.lb + '"]').filter(x => !x.hidden);
    idx = grp.indexOf(b); show(); lb.showModal(); document.documentElement.style.overflow = 'hidden';
  }));
  $('.lb-x', lb).addEventListener('click', () => lb.close());
  $('.lb-p', lb).addEventListener('click', () => step(-1));
  $('.lb-nx', lb).addEventListener('click', () => step(1));
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('close', () => { document.documentElement.style.overflow = ''; lbImg.removeAttribute('src'); opener && opener.focus(); });
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
  let tx = null;
  lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { if (tx === null) return; const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) step(d > 0 ? -1 : 1); tx = null; });

  $('#yr').textContent = new Date().getFullYear();
})();
