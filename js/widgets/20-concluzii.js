/* Slide 20 · partea interactivă (mEnd). Textele vin din content/20-concluzii.js. */
'use strict';
function mEnd(root){
 const acc=$('#acc',root);
 const esc=s=>String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
 const pair=r=>`<b>${esc(r[0])}</b><span>${esc(r[1])}</span>`;
 const G=SLIDE[20].bibliografie.map(b=>b.din==='jocuri'?{n:b.titlu,s:b.unitate,rows:SLIDE[5].jocuri,f:g=>`<b>${esc(g.titlu)} (${g.an})</b><span>${esc(g.loc)} · ${esc(g.uscat)} km² · ${esc(g.motor)}</span>`}
  :b.din==='lynch'?{n:b.titlu,s:b.unitate,rows:SLIDE[11].elemente,f:l=>`<b>${esc(l.termen)}</b><span>${esc(l.definitie)}</span>`}
  :b.din==='surse'?{n:b.titlu,s:b.unitate,rows:SLIDE[20].surse,f:r=>`<b>${esc(r[2])}</b><span>${esc(r[1])}</span>`}
  :{n:b.titlu,s:b.unitate,rows:b.randuri,f:pair});
 acc.innerHTML=G.map((g,i)=>`<div class="ag" data-i="${i}"><button class="ah" aria-expanded="false"><b>${g.n}</b><span class="n">${g.rows.length} ${g.s}</span><i></i></button><div class="ab"><div><div class="al">${g.rows.map(r=>`<div class="it2">${g.f(r)}</div>`).join('')}</div></div></div></div>`).join('');
 $$('.ag',acc).forEach(el=>{
  const btn=$('.ah',el);
  btn.onclick=()=>{
   const was=el.classList.contains('open');
   $$('.ag',acc).forEach(o=>{o.classList.remove('open');$('.ah',o).setAttribute('aria-expanded','false')});
   if(!was){el.classList.add('open');btn.setAttribute('aria-expanded','true');setTimeout(()=>el.scrollIntoView({block:'nearest',behavior:'smooth'}),380)}
  };
 });
 return{};
}
