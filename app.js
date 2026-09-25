const articles={
  roblox:{tag:'PLATFORM',title:'What is Roblox?',body:`<p>Roblox is an online platform built around user-created, interactive experiences. The platform provides identity, social features, discovery, publishing tools, creator services and systems that let people build and play within the same ecosystem.</p><p>It is useful to separate the <strong>platform</strong> from an individual <strong>experience</strong>: a game-like world people visit on Roblox is a creator-made experience, while Roblox provides the underlying services and runtime around it.</p><h3>Why the distinction matters</h3><p>Rules, APIs and account systems come from the platform, while the behavior of a particular experience can vary because it is authored by its developers.</p><p><a href="https://en.wikipedia.org/wiki/Roblox" target="_blank" rel="noopener noreferrer">Reference: Wikipedia — Roblox</a> · <a href="https://create.roblox.com/docs" target="_blank" rel="noopener noreferrer">Reference: Roblox Creator Documentation</a></p>`},
  history:{tag:'HISTORY',title:'A short history of Roblox',body:`<p>Roblox grew out of an early project centered on physics simulations and construction, later becoming a broader online platform where users could build and share interactive worlds.</p><p>Over time, the service expanded its creation tools, social features, developer economy and publishing infrastructure. That evolution helped shift Roblox from a relatively small physics-and-building project toward a global user-generated content platform.</p><h3>How to read its history</h3><p>Milestones are best understood as a sequence of technical and community changes rather than a single launch moment: tools improved, the audience grew, and the platform's creator ecosystem became increasingly central to the experience.</p><p><a href="https://en.wikipedia.org/wiki/Roblox" target="_blank" rel="noopener noreferrer">Reference: Wikipedia — Roblox</a> · <a href="https://about.roblox.com/" target="_blank" rel="noopener noreferrer">Reference: Roblox About</a></p>`},
  studio:{tag:'CREATION',title:'Experiences & Roblox Studio',body:`<p><strong>Roblox Studio</strong> is Roblox's development environment for creating and testing experiences. Developers can build 3D scenes, program gameplay, work with assets and publish their projects through the platform.</p><p>An experience can contain client-side and server-side scripts, user interfaces, physics, audio and many other systems. Studio's workflow is designed around iterative creation: edit, test, diagnose, then publish updates.</p><h3>Creator documentation</h3><p>Roblox maintains documentation for Studio workflows, APIs, scripting, publishing and platform services. Official documentation is the right place to verify current technical behavior because APIs can change.</p><p><a href="https://create.roblox.com/docs/studio" target="_blank" rel="noopener noreferrer">Reference: Roblox Studio documentation</a></p>`},
  robux:{tag:'ECONOMY',title:'Robux',body:`<p>Robux is Roblox's virtual currency. It is used for eligible digital purchases and transactions inside the Roblox ecosystem, including certain avatar items and experience-related products.</p><p>Availability and purchasing rules can depend on the product, region, account and Roblox's current policies. Third-party offers that promise free currency should be treated cautiously, especially when they request credentials or downloads.</p><h3>Safety note</h3><p>Use official Roblox purchase flows and account-security guidance rather than unofficial generators or credential forms.</p><p><a href="https://en.help.roblox.com/hc/en-us/categories/200217024" target="_blank" rel="noopener noreferrer">Reference: Roblox Support</a></p>`},
  luau:{tag:'LANGUAGE',title:'Luau & scripting',body:`<p>Luau is a scripting language derived from Lua and used by Roblox for development. It is designed to support interactive experiences while adding language features that fit Roblox's engineering and developer workflows.</p><p>In normal Studio development, scripts can respond to events, manipulate objects, control gameplay systems and communicate between the client and server according to Roblox's architecture and security model.</p><h3>Why sources matter</h3><p>Language behavior and engine APIs can evolve. Developers should consult the current Luau and Roblox documentation rather than relying on old snippets copied from unknown sites.</p><p><a href="https://luau.org/" target="_blank" rel="noopener noreferrer">Reference: Luau</a> · <a href="https://create.roblox.com/docs/scripting" target="_blank" rel="noopener noreferrer">Reference: Roblox scripting docs</a></p>`},
  safety:{tag:'SAFETY',title:'Executors & online safety',body:`<p>An <strong>executor</strong> is a general term for software that attempts to run script code in a context outside the normal development or gameplay workflow intended by a platform. In Roblox discussions, the term is often associated with unofficial client-side tooling.</p><p>That category is different from normal Roblox Studio development. Unofficial tools may be distributed through unknown channels, can expose users to malicious downloads or credential theft, and may conflict with platform rules or security systems.</p><h3>Practical safety</h3><p>Keep account credentials private, avoid suspicious “free Robux” pages, inspect downloads carefully, use official security controls and verify claims against Roblox's current rules and documentation.</p><p>This knowledge base does not provide exploit payloads, bypass instructions or methods for defeating platform protections.</p><p><a href="https://en.help.roblox.com/hc/en-us/articles/203313070-Roblox-Community-Standards" target="_blank" rel="noopener noreferrer">Reference: Roblox Community Standards</a> · <a href="https://en.help.roblox.com/hc/en-us/articles/203312390-Keep-Your-Account-Safe" target="_blank" rel="noopener noreferrer">Reference: Roblox account safety</a></p>`}
};

const motionOK=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=window.matchMedia('(pointer:fine)').matches;
const header=document.getElementById('siteHeader');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
const progress=document.querySelector('.scroll-progress');
const cursor=document.querySelector('.cursor-glow');
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav a[href^="#"]')];

function setMenu(open){nav?.classList.toggle('is-open',open);menu?.classList.toggle('is-open',open);menu?.setAttribute('aria-expanded',String(open));menu?.setAttribute('aria-label',open?'Close navigation':'Open navigation')}
menu?.addEventListener('click',()=>setMenu(!nav?.classList.contains('is-open')));
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('click',event=>{if(!nav?.classList.contains('is-open'))return;if(event.target instanceof Node&&!nav.contains(event.target)&&!menu?.contains(event.target))setMenu(false)});

let lastY=window.scrollY;let ticking=false;
function updateScroll(){const max=document.documentElement.scrollHeight-window.innerHeight;const ratio=max>0?window.scrollY/max:0;if(progress)progress.style.transform=`scaleX(${Math.max(0,Math.min(1,ratio))})`;header?.classList.toggle('scrolled',window.scrollY>16)}
window.addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=window.scrollY;if(motionOK&&header){if(y>lastY+10&&y>150&&!nav?.classList.contains('is-open'))header.classList.add('header-hidden');if(y<lastY-10||y<70)header.classList.remove('header-hidden')}lastY=y;updateScroll();ticking=false})},{passive:true});
updateScroll();

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -7% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id=`#${entry.target.id}`;navLinks.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===id))}}),{rootMargin:'-43% 0px -45% 0px',threshold:0});
  sections.forEach(section=>sectionObserver.observe(section));
}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));

function smoothTo(target){target?.scrollIntoView({behavior:motionOK?'smooth':'auto',block:'start'})}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const id=link.getAttribute('href');if(!id||id==='#')return;const target=document.querySelector(id);if(!target)return;event.preventDefault();smoothTo(target);history.replaceState(null,'',id)}));

if(finePointer&&motionOK&&cursor){let tx=innerWidth/2,ty=innerHeight/2,cx=tx,cy=ty,raf=0;window.addEventListener('pointermove',event=>{tx=event.clientX;ty=event.clientY;cursor.style.opacity='1';if(raf)return;raf=1;requestAnimationFrame(function loop(){cx+=(tx-cx)*.16;cy+=(ty-cy)*.16;cursor.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;raf=0;if(Math.abs(tx-cx)+Math.abs(ty-cy)>1)requestAnimationFrame(loop)})},{passive:true});window.addEventListener('pointerleave',()=>{cursor.style.opacity='0'})}

if(finePointer&&motionOK){
  document.querySelectorAll('.spotlight').forEach(card=>{card.addEventListener('pointermove',event=>{const r=card.getBoundingClientRect();const x=event.clientX-r.left;const y=event.clientY-r.top;const edge=Math.min(x,y,r.width-x,r.height-y);const strength=Math.max(.06,Math.min(.24,1-edge/170));card.style.setProperty('--spot-x',`${x}px`);card.style.setProperty('--spot-y',`${y}px`);card.style.setProperty('--spot-opacity',strength.toFixed(3));});card.addEventListener('pointerleave',()=>{card.style.setProperty('--spot-opacity','.07')})});
  document.querySelectorAll('.tilt-card').forEach(card=>{card.addEventListener('pointermove',event=>{const r=card.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;card.style.transform=`rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*7).toFixed(2)}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>{card.style.transform=''})});
  document.querySelectorAll('.magnetic').forEach(item=>{item.addEventListener('pointermove',event=>{const r=item.getBoundingClientRect();const x=event.clientX-r.left-r.width/2;const y=event.clientY-r.top-r.height/2;item.style.transform=`translate(${(x*.08).toFixed(2)}px,${(y*.08).toFixed(2)}px)`});item.addEventListener('pointerleave',()=>{item.style.transform=''})});
}

function setImageFallback(img){const frame=img.closest('.knowledge-image');if(frame){frame.classList.add('is-missing');img.setAttribute('alt','Vortex visual unavailable');}}
document.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>setImageFallback(img),{once:true});if(img.complete&&img.naturalWidth===0)setImageFallback(img)});

const faqItems=[...document.querySelectorAll('.faq-item')];
faqItems.forEach(item=>{const button=item.querySelector('.faq-question');button?.addEventListener('click',()=>{const willOpen=!item.classList.contains('is-open');faqItems.forEach(other=>{other.classList.remove('is-open');other.querySelector('.faq-question')?.setAttribute('aria-expanded','false')});if(willOpen){item.classList.add('is-open');button.setAttribute('aria-expanded','true')}})});

const dialog=document.getElementById('articleDialog');
const dialogShell=dialog?.querySelector('.dialog-shell');
const dialogTitle=document.getElementById('dialogTitle');
const dialogTag=document.getElementById('dialogTag');
const dialogBody=document.getElementById('dialogBody');
const closeDialog=()=>{if(!dialog?.open)return;if(!motionOK){dialog.close();document.body.style.overflow='';return}dialog.classList.add('is-closing');window.setTimeout(()=>{dialog.classList.remove('is-closing');if(dialog.open)dialog.close()},285)};
document.querySelectorAll('.article-open').forEach(button=>button.addEventListener('click',()=>{const article=articles[button.dataset.article];if(!article||!dialog)return;dialogTag.textContent=article.tag;dialogTitle.textContent=article.title;dialogBody.innerHTML=article.body;dialog.classList.remove('is-closing');dialog.showModal();document.body.style.overflow='hidden';dialogShell?.focus?.()}));
document.querySelector('.dialog-close')?.addEventListener('click',closeDialog);
dialog?.addEventListener('cancel',event=>{event.preventDefault();closeDialog()});
dialog?.addEventListener('click',event=>{if(event.target===dialog)closeDialog()});
dialog?.addEventListener('close',()=>{dialog.classList.remove('is-closing');document.body.style.overflow='' });

const canvas=document.getElementById('particleField');
const ctx=canvas?.getContext('2d');
if(canvas&&ctx){
  const reduced=!motionOK;
  const particles=[];const pointer={x:-9999,y:-9999,active:false};let width=0,height=0,dpr=1,frame=0;
  function resize(){width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,1.6);canvas.width=Math.floor(width*dpr);canvas.height=Math.floor(height*dpr);canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;ctx.setTransform(dpr,0,0,dpr,0,0);const targetCount=width<700?18:width<1000?28:42;while(particles.length<targetCount){const x=Math.random()*width;const y=Math.random()*height;particles.push({x,y,bx:x,by:y,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:1.2+Math.random()*2.3,p:Math.random()*Math.PI*2,s:.003+Math.random()*.006})}while(particles.length>targetCount)particles.pop()}
  function draw(){frame++;ctx.clearRect(0,0,width,height);const lineLimit=width<700?112:145;for(const p of particles){if(!reduced){const dx=p.bx-p.x,dy=p.by-p.y;p.vx+=dx*.0009;p.vy+=dy*.0009;if(pointer.active){const dxm=p.x-pointer.x,dym=p.y-pointer.y;const dist2=dxm*dxm+dym*dym;const radius=170;if(dist2<radius*radius){const dist=Math.max(18,Math.sqrt(dist2));const force=(1-dist/radius)*.25;p.vx+=(dxm/dist)*force;p.vy+=(dym/dist)*force}}p.vx*=.965;p.vy*=.965;p.x+=p.vx;p.y+=p.vy;p.x+=Math.cos(frame*p.s+p.p)*.06;p.y+=Math.sin(frame*p.s+p.p)*.06}else{p.x=p.bx;p.y=p.by}}
    for(let i=0;i<particles.length;i++){const a=particles[i];for(let j=i+1;j<particles.length;j++){const b=particles[j];const dx=b.x-a.x,dy=b.y-a.y;const dist=Math.hypot(dx,dy);if(dist<lineLimit){const alpha=(1-dist/lineLimit)*.11;ctx.strokeStyle=`rgba(141,255,91,${alpha})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}
    for(const p of particles){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(155,255,125,.45)';ctx.shadowBlur=9;ctx.shadowColor='rgba(93,255,103,.25)';ctx.fill();ctx.shadowBlur=0}requestAnimationFrame(draw)}
  resize();addEventListener('resize',resize,{passive:true});if(finePointer&&motionOK){addEventListener('pointermove',e=>{pointer.x=e.clientX;pointer.y=e.clientY;pointer.active=true},{passive:true});addEventListener('pointerleave',()=>{pointer.active=false})}draw();
}
