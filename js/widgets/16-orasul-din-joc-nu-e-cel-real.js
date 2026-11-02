/* Slide 16 · partea interactivă (mLies): cardurile se întorc la click. Textele vin din content/16-orasul-din-joc-nu-e-cel-real.js. */
'use strict';
function mLies(root){
 $$('.flip',root).forEach(b=>b.onclick=()=>{
  b.classList.remove('anim');void b.offsetWidth;b.classList.add('anim'); // repornește animația de întoarcere
  b.classList.toggle('f');
 });
 return{};
}
