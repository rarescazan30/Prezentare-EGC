/* Slide 12 · partea interactivă (mBake): calculator ilustrativ pentru memoria lightmap-urilor.
   Textele și opțiunile vin din content/12-baked-lighting.js. */
'use strict';
function mBake(root){
 const C=SLIDE[12],O=C.optiuni,v=$('#bkV',root),cmp=$('#bkC',root);
 const sel={h:2,r:2,o:2,a:1};
 const nr=(x,d)=>x.toLocaleString('ro-RO',{maximumFractionDigits:d});
 const fmt=b=>b>=1e12?nr(b/1e12,1)+' TB':b>=1e9?nr(b/1e9,1)+' GB':nr(b/1e6,0)+' MB';
 function calc(){
  const bytes=O.harti[sel.h].km2*1e6*2*O.rezolutii[sel.r].texeliPeM2*4*O.ore[sel.o]*O.anotimpuri[sel.a];
  v.textContent=fmt(bytes);
  const x=bytes/16e9;
  cmp.textContent=x>=1?C.comparatie.replace('{x}',nr(x,x<10?1:0)):'';
 }
 $$('[data-g]',root).forEach(g=>$$('button',g).forEach(b=>b.onclick=()=>{
  sel[g.dataset.g]=+b.dataset.i;$$('button',g).forEach(q=>q.classList.toggle('on',q===b));calc()}));
 calc();
 return{};
}
