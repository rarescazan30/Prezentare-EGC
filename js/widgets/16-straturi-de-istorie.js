/* Slide 16 · partea interactivă (mPal). Textele vin din content/16-straturi-de-istorie.js. */
'use strict';
function mPal(root){
 const ls=$$('.layer',root);
 ls.forEach(b=>b.onclick=()=>{
  const idx=+b.dataset.l;
  ls.forEach(q=>q.classList.toggle('on',q===b));
  [0,1,2].forEach(i=>{const g=$('#pL'+i,root);if(g)g.setAttribute('opacity',i===idx?'1':'.35')});
 });
 return{};
}
