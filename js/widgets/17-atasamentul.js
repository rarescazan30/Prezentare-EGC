/* Slide 17 · partea interactivă (mFlow). Textele vin din content/17-atasamentul.js. */
'use strict';
function mFlow(root){
 const ns=$$('.node',root),tx=$('#rTxt',root);let k=0,iv;
 const TXT={W:SLIDE[17].textVest,M:SLIDE[17].textEst};
 const set=w=>{tx.textContent=TXT[w];$('#rW',root).classList.toggle('on',w==='W');$('#rM',root).classList.toggle('on',w==='M')};
 $('#rW',root).onclick=()=>set('W');$('#rM',root).onclick=()=>set('M');set('M');
 const lite=i=>ns.forEach((n,j)=>n.classList.toggle('on',j<=i));
 ns.forEach((n,i)=>n.onclick=()=>{clearInterval(iv);lite(i)});
 lite(0);iv=setInterval(()=>{k=(k+1)%(ns.length+2);lite(Math.min(k,ns.length-1))},1400);
 return{off(){clearInterval(iv)}};
}
