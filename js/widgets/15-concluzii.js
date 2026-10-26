/* Slide 15 · partea interactivă (mEnd): bibliografia. Textele vin din content/15-concluzii.js. */
'use strict';
function mEnd(root){
 const acc=$('#acc',root);
 const esc=s=>String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
 const pair=r=>`<b>${esc(r[0])}</b><span>${esc(r[1])}</span>`;
 const G=SLIDE[15].bibliografie.map(b=>({n:b.titlu,s:b.unitate,rows:b.randuri,f:pair}));
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
