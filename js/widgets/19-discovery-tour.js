/* Slide 19 · partea interactivă (mDT). Textele vin din content/19-discovery-tour.js. */
'use strict';
function mDT(root){
 const b=$('#dt',root),g=$('#dtG',root),t=$('#dtT',root),p=$('#dtP',root);
 const P={g:SLIDE[19].textJoc,t:SLIDE[19].textTur};
 const set=v=>{b.classList.toggle('tour',v);g.classList.toggle('on',!v);t.classList.toggle('on',v);p.textContent=v?P.t:P.g};
 g.onclick=()=>set(false);t.onclick=()=>set(true);set(false);return{};
}
