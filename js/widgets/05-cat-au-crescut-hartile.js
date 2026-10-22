/* Slide 5 · partea interactivă (mBars). Textele vin din content/05-cat-au-crescut-hartile.js. */
'use strict';
function mBars(root){
 const c=SLIDE[5],rows=$$('.brow',root),det=$('#bdet',root),bl=$('#bLog',root),bp=$('#bPlay',root),ax=$('#ax',root);
 let log=true,timers=[];
 const LO=Math.log10(.1),HI=Math.log10(200);
 const w=v=>log?clamp((Math.log10(v)-LO)/(HI-LO),0,1)*100:v/130*100;
 const axis=()=>{
  ax.innerHTML='';
  const ticksList=log?[.1,1,4,10,100]:[4,30,60,90,120];
  ticksList.forEach(t=>{
   const x=log?(Math.log10(t)-LO)/(HI-LO)*100:t/130*100;
   ax.insertAdjacentHTML('beforeend',`<i style="left:${x}%;color:${t===4?'var(--creed)':'inherit'};font-weight:${t===4?'700':'400'}">${t===4?'4 km²':t}</i>`);
  });
  $$('.lim',root).forEach(e=>e.remove());
  $$('.btrack',root).forEach(tr=>{const x=log?(Math.log10(4)-LO)/(HI-LO)*100:4/130*100;tr.insertAdjacentHTML('beforeend',`<div class="lim" style="left:${x}%" title="${c.limita}"></div>`)});
 };
 const apply=anim=>{rows.forEach((r,i)=>{const b=r.querySelector('.bar');const go=()=>b.style.width=w(BARS[i].v)+'%';anim?timers.push(setTimeout(go,50+i*40)):go()});axis()};
 rows.forEach(r=>{const f=()=>{const i=+r.dataset.i;det.textContent=BARS[i].d};r.addEventListener('pointerenter',f);r.addEventListener('focus',f);r.addEventListener('click',f)});
 bl.onclick=()=>{log=!log;bl.textContent=c.butonScara+': '+(log?c.scaraLogaritmica:c.scaraLiniara);bl.classList.toggle('on',log);apply(false)};
 bp.onclick=()=>{timers.forEach(clearTimeout);timers=[];rows.forEach(r=>r.querySelector('.bar').style.width='0%');
  rows.forEach((r,i)=>timers.push(setTimeout(()=>{r.querySelector('.bar').style.width=w(BARS[i].v)+'%';det.textContent=BARS[i].d},350+i*360)))};
 apply(true);
 return{off(){timers.forEach(clearTimeout)}};
}
