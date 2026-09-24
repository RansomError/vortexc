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

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
  });
});
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
