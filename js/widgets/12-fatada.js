/* Slide 12 · partea interactivă (mFacade). Textele vin din content/12-fatada.js. */
'use strict';
function mFacade(root){
 const sv=$('#fac',root),eb=$('#evB',root);
 const D=Object.fromEntries(SLIDE[12].parti.map(p=>[p.cheie,[p.nume,p.istorie,p.joc]]));
 const show=k=>{const d=D[k];$('#facT',root).textContent=d[0];$('#facH',root).textContent=d[1];$('#facG',root).textContent=d[2];$$('.part',root).forEach(p=>p.classList.toggle('act',p.dataset.k===k))};
 $$('.part',root).forEach(p=>{const f=()=>show(p.dataset.k);p.addEventListener('pointerenter',f);p.addEventListener('focus',f);p.addEventListener('click',f)});
 eb.onclick=()=>{const v=sv.classList.toggle('ev');eb.classList.toggle('on',v)};
 sv.classList.add('ev');show('rost');
 return{};
}
