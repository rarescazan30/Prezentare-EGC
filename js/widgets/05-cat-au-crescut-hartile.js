/* Slide 5 · partea interactivă (mBars). Textele vin din content/05-cat-au-crescut-hartile.js. */
'use strict';
function mBars(root){
 const rows=$$('.brow',root),bp=$('#bPlay',root),ax=$('#ax',root);
 const MAX=135,w=v=>v/MAX*100;
 let timers=[];
 ax.innerHTML=[0,25,50,75,100,125].map(t=>`<i style="left:${w(t)}%">${t}</i>`).join('');
 const show=(i,delay)=>timers.push(setTimeout(()=>rows[i].querySelector('.bar').style.width=w(BARS[i].v)+'%',delay));
 bp.onclick=()=>{timers.forEach(clearTimeout);timers=[];rows.forEach(r=>r.querySelector('.bar').style.width='0%');
  rows.forEach((r,i)=>show(i,350+i*360))};
 rows.forEach((r,i)=>show(i,50+i*40));
 return{off(){timers.forEach(clearTimeout)}};
}
