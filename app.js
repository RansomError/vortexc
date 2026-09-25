const articles = {
  roblox: {
    tag: 'PLATFORM',
    title: 'What is Roblox?',
    body: `
      <p>Roblox is an online platform built around user-created, interactive experiences. The platform provides identity, social features, discovery, publishing tools, creator services and systems that let people build and play within the same ecosystem.</p>
      <p>It is useful to separate the <strong>platform</strong> from an individual <strong>experience</strong>: a game-like world people visit on Roblox is a creator-made experience, while Roblox provides the underlying services and runtime around it.</p>
      <h3>Why the distinction matters</h3>
      <p>Rules, APIs and account systems come from the platform, while the behavior of a particular experience can vary because it is authored by its developers.</p>
      <p><a href="https://en.wikipedia.org/wiki/Roblox" target="_blank" rel="noopener noreferrer">Reference: Wikipedia — Roblox</a> · <a href="https://create.roblox.com/docs" target="_blank" rel="noopener noreferrer">Reference: Roblox Creator Documentation</a></p>`
  },
  history: {
    tag: 'HISTORY',
    title: 'A short history of Roblox',
    body: `
      <p>Roblox grew out of an early project centered on physics simulations and construction, later becoming a broader online platform where users could build and share interactive worlds.</p>
      <p>Over time, the service expanded its creation tools, social features, developer economy and publishing infrastructure. That evolution helped shift Roblox from a relatively small physics-and-building project toward a global user-generated content platform.</p>
      <h3>How to read its history</h3>
      <p>Milestones are best understood as a sequence of technical and community changes rather than a single launch moment: tools improved, the audience grew, and the platform's creator ecosystem became increasingly central to the experience.</p>
      <p><a href="https://en.wikipedia.org/wiki/Roblox" target="_blank" rel="noopener noreferrer">Reference: Wikipedia — Roblox</a> · <a href="https://about.roblox.com/" target="_blank" rel="noopener noreferrer">Reference: Roblox About</a></p>`
  },
  studio: {
    tag: 'CREATION',
    title: 'Experiences & Roblox Studio',
    body: `
      <p><strong>Roblox Studio</strong> is Roblox's development environment for creating and testing experiences. Developers can build 3D scenes, program gameplay, work with assets and publish their projects through the platform.</p>
      <p>An experience can contain client-side and server-side scripts, user interfaces, physics, audio and many other systems. Studio's workflow is designed around iterative creation: edit, test, diagnose, then publish updates.</p>
      <h3>Creator documentation</h3>
      <p>Roblox maintains documentation for Studio workflows, APIs, scripting, publishing and platform services. Official documentation is the right place to verify current technical behavior because APIs can change.</p>
      <p><a href="https://create.roblox.com/docs/studio" target="_blank" rel="noopener noreferrer">Reference: Roblox Studio documentation</a></p>`
  },
  robux: {
    tag: 'ECONOMY',
    title: 'Robux',
    body: `
      <p>Robux is Roblox's virtual currency. It is used for eligible digital purchases and transactions inside the Roblox ecosystem, including certain avatar items and experience-related products.</p>
      <p>Availability and purchasing rules can depend on the product, region, account and Roblox's current policies. Third-party offers that promise free currency should be treated cautiously, especially when they request credentials or downloads.</p>
      <h3>Safety note</h3>
      <p>Use official Roblox purchase flows and account-security guidance rather than unofficial generators or credential forms.</p>
      <p><a href="https://en.help.roblox.com/hc/en-us/categories/200217024" target="_blank" rel="noopener noreferrer">Reference: Roblox Support</a></p>`
  },
  luau: {
    tag: 'LANGUAGE',
    title: 'Luau & scripting',
    body: `
      <p>Luau is a scripting language derived from Lua and used by Roblox for development. It is designed to support interactive experiences while adding language features that fit Roblox's engineering and developer workflows.</p>
      <p>In normal Studio development, scripts can respond to events, manipulate objects, control gameplay systems and communicate between the client and server according to Roblox's architecture and security model.</p>
      <h3>Why sources matter</h3>
      <p>Language behavior and engine APIs can evolve. Developers should consult the current Luau and Roblox documentation rather than relying on old snippets copied from unknown sites.</p>
      <p><a href="https://luau.org/" target="_blank" rel="noopener noreferrer">Reference: Luau</a> · <a href="https://create.roblox.com/docs/scripting" target="_blank" rel="noopener noreferrer">Reference: Roblox scripting docs</a></p>`
  },
  safety: {
    tag: 'SAFETY',
    title: 'Executors & online safety',
    body: `
      <p>An <strong>executor</strong> is a general term for software that attempts to run script code in a context outside the normal development or gameplay workflow intended by a platform. In Roblox discussions, the term is often associated with unofficial client-side tooling.</p>
      <p>That category is different from normal Roblox Studio development. Unofficial tools may be distributed through unknown channels, can expose users to malicious downloads or credential theft, and may conflict with platform rules or security systems.</p>
      <h3>Practical safety</h3>
      <p>Keep account credentials private, avoid suspicious “free Robux” pages, inspect downloads carefully, use official security controls and verify claims against Roblox's current rules and documentation.</p>
      <p>This knowledge base does not provide exploit payloads, bypass instructions or methods for defeating platform protections.</p>
      <p><a href="https://en.help.roblox.com/hc/en-us/articles/203313070-Roblox-Community-Standards" target="_blank" rel="noopener noreferrer">Reference: Roblox Community Standards</a> · <a href="https://en.help.roblox.com/hc/en-us/articles/203312390-Keep-Your-Account-Safe" target="_blank" rel="noopener noreferrer">Reference: Roblox account safety</a></p>`
  }
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const progress = document.querySelector('.scroll-progress');
const cursorGlow = document.querySelector('.cursor-glow');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];

function setMenu(open) {
  nav?.classList.toggle('is-open', open);
  menuToggle?.classList.toggle('is-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menuToggle?.addEventListener('click', () => setMenu(!nav?.classList.contains('is-open')));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!nav?.classList.contains('is-open')) return;
  if (event.target instanceof Node && !nav.contains(event.target) && !menuToggle?.contains(event.target)) setMenu(false);
});

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  if (progress) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  siteHeader?.classList.toggle('scrolled', window.scrollY > 18);
}
let lastScrollY = window.scrollY;
let scrollTick = false;
window.addEventListener('scroll', () => {
  if (scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (!prefersReducedMotion && siteHeader) {
      const shouldHide = y > lastScrollY + 10 && y > 150 && !nav?.classList.contains('is-open');
      const shouldShow = y < lastScrollY - 10 || y < 70;
      if (shouldHide) siteHeader.classList.add('header-hidden');
      if (shouldShow) siteHeader.classList.remove('header-hidden');
    }
    lastScrollY = y;
    updateScrollUI();
    scrollTick = false;
  });
}, { passive: true });
updateScrollUI();

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.11, rootMargin: '0px 0px -5% 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const active = `#${entry.target.id}`;
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === active));
    });
  }, { rootMargin: '-42% 0px -48% 0px', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));
}

if (!prefersReducedMotion && cursorGlow && window.matchMedia('(pointer:fine)').matches) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;
  let glowFrame = false;
  window.addEventListener('pointermove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorGlow.style.opacity = '1';
    if (glowFrame) return;
    glowFrame = true;
    requestAnimationFrame(() => {
      glowX += (mouseX - glowX) * .18;
      glowY += (mouseY - glowY) * .18;
      cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      glowFrame = false;
    });
  }, { passive: true });
  window.addEventListener('pointerleave', () => { cursorGlow.style.opacity = '0'; });
}

if (!prefersReducedMotion && window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.feature-card, .knowledge-card, .download-card, .status-card, .timeline, .faq-list').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });
}

const heroCard = document.querySelector('.hero-card');
if (heroCard && !prefersReducedMotion && window.matchMedia('(pointer:fine)').matches) {
  heroCard.addEventListener('pointermove', event => {
    const rect = heroCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    heroCard.style.animationPlayState = 'paused';
    heroCard.style.transform = `rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px) scale(1.008)`;
  });
  heroCard.addEventListener('pointerleave', () => {
    heroCard.style.animationPlayState = 'running';
    heroCard.style.transform = '';
  });
}

// Smooth same-page navigation with a small offset for the sticky header.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', id);
  });
});

// Make broken/misplaced GitHub Pages assets obvious instead of leaving blank boxes.
document.querySelectorAll('.knowledge-image img, .hero-icon, .brand-icon, .footer-brand img').forEach(img => {
  const markMissing = () => {
    img.dataset.failed = 'true';
    const frame = img.closest('.knowledge-image');
    if (frame) frame.classList.add('is-missing');
  };
  img.addEventListener('error', markMissing, { once: true });
  if (img.complete && img.naturalWidth === 0) markMissing();
});

const dialog = document.getElementById('articleDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogTag = document.getElementById('dialogTag');
const dialogBody = document.getElementById('dialogBody');
document.querySelectorAll('.article-open').forEach(button => {
  button.addEventListener('click', () => {
    const article = articles[button.dataset.article];
    if (!article || !dialog) return;
    dialogTag.textContent = article.tag;
    dialogTitle.textContent = article.title;
    dialogBody.innerHTML = article.body;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
const closeDialog = () => {
  dialog?.close();
  document.body.style.overflow = '';
};
document.querySelector('.dialog-close')?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => {
  if (event.target === dialog) closeDialog();
});
dialog?.addEventListener('close', () => { document.body.style.overflow = ''; });

// Small image preflight: use explicit relative paths so GitHub Pages subpaths work.
document.querySelectorAll('img[src]').forEach(img => {
  const src = img.getAttribute('src');
  if (src && !src.startsWith('./') && !src.startsWith('http') && !src.startsWith('data:')) {
    img.setAttribute('src', `./${src}`);
  }
});
