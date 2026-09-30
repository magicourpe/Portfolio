// Terminal d'accueil (une seule animation d'entrée)
const lines=["whoami","> Luca Bogdanski — étudiant BTS SIO SISR","","cat parcours.txt","> Bac Pro SN  ->  BTS SIO SISR (2e année)","> Alternance : DSI, secteur pharmaceutique","","ls competences/","> reseau/  systemes/  virtualisation/  scripts/  telephonie/"];
const out=document.getElementById("typed");
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
function render(n,c){out.innerHTML=lines.slice(0,n).map(l=>l[0]===">"?l:'<span class="pr">$</span> '+l).join("\n")+(n<lines.length?"\n":"");}
if(still){render(lines.length)}else{let i=0,j=0;(function t(){
  if(i>=lines.length)return;
  const l=lines[i],cur=l.slice(0,j);
  out.innerHTML=lines.slice(0,i).map(x=>x[0]===">"?x:'<span class="pr">$</span> '+x).join("\n")+(i?"\n":"")+(l[0]===">"?cur:'<span class="pr">$</span> '+cur)+"▍";
  if(j<l.length){j++;setTimeout(t,l[0]===">"?6:38)}else{i++;j=0;setTimeout(t,l[0]===">"?120:260)}
})()}
// Veille : remplacez les entrées ci-dessous par vos vrais articles
const articles=[
["Sécurité","Titre de l'article 1","Source","2026-01","#"],["Sécurité","Titre de l'article 2","Source","2026-02","#"],["Sécurité","Titre de l'article 3","Source","2026-03","#"],["Sécurité","Titre de l'article 4","Source","2026-04","#"],
["Réseau","Titre de l'article 5","Source","2026-01","#"],["Réseau","Titre de l'article 6","Source","2026-02","#"],["Réseau","Titre de l'article 7","Source","2026-03","#"],["Réseau","Titre de l'article 8","Source","2026-05","#"],
["Systèmes","Titre de l'article 9","Source","2026-02","#"],["Systèmes","Titre de l'article 10","Source","2026-04","#"],["Systèmes","Titre de l'article 11","Source","2026-05","#"],["Systèmes","Titre de l'article 12","Source","2026-06","#"]];
const box=document.getElementById("articles"),fb=document.getElementById("filters");
const cats=["Tous",...new Set(articles.map(a=>a[0]))];
function show(c){box.innerHTML=articles.filter(a=>c==="Tous"||a[0]===c).map(a=>`<article class="card art"><small>${a[0]} · ${a[3]}</small><a href="${a[4]}" target="_blank" rel="noopener">${a[1]}</a><small>${a[2]}</small></article>`).join("");
  fb.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.textContent===c))}
cats.forEach(c=>{const b=document.createElement("button");b.textContent=c;b.onclick=()=>show(c);fb.appendChild(b)});show("Tous");
// Révélation des cartes au défilement + lien actif
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const links=[...document.querySelectorAll("nav a[href^='#']")];
const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.hash==="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(s=>so.observe(s));
