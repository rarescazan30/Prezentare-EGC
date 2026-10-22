/* Funcții ajutătoare folosite de toate celelalte fișiere și emblema AC. */
'use strict';
/* Fiecare fișier din content/ apelează slide(număr,{…}); textele ajung în SLIDE[număr]. */
const SLIDE=[];
const slide=(n,o)=>{SLIDE[n]=o};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v)), lerp=(a,b,k)=>a+(b-a)*k;
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const ro=(n,d=2)=>n.toFixed(d).replace('.',',');
const fk=v=>v>=10?String(Math.round(v*10)/10).replace('.',','):ro(v);
const pos=(e,c)=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/Math.max(1,r.width),(e.clientY-r.top)*c.height/Math.max(1,r.height)]};
const hsl2rgb=(h,s,l)=>{s/=100;l/=100;const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));return[f(0)*255,f(8)*255,f(4)*255]};
const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
const rs=(i,c='')=>`class="rise ${c}" style="--i:${i}"`;
const HEAD=(k,t)=>`<div class="kicker rise" style="--i:0">${k}</div><h2 class="k">${t}</h2>`;

const AC_LOGO_D="M 50 7 L 35.5 47 C 31.5 55.5 25.5 56.5 19.5 54.5 C 22.8 61.5 22.8 66.5 20 71.5 C 25.5 69.5 31 75.5 36.5 80.5 C 40.5 83.8 44.5 85.8 47.8 86.5 C 40 82 32.5 75.5 33.5 66.5 L 50 24 L 66.5 66.5 C 67.5 75.5 60 82 52.2 86.5 C 55.5 85.8 59.5 83.8 63.5 80.5 C 69 75.5 74.5 69.5 80 71.5 C 77.2 66.5 77.2 61.5 80.5 54.5 C 74.5 56.5 68.5 55.5 64.5 47 Z M 19 73.5 C 29 88.5 40.5 92.5 50 92.5 C 59.5 92.5 71 88.5 81 73.5 C 72.5 84.5 61.5 88.8 53.5 88 C 51.2 87.8 50.4 86.2 50 84.2 C 49.6 86.2 48.8 87.8 46.5 88 C 38.5 88.8 27.5 84.5 19 73.5 Z";
const AC_PATH2D=typeof Path2D!=='undefined'?new Path2D(AC_LOGO_D):null;
function drawCrestCanvas(ctx,cx,cy,size,fill,stroke){
 ctx.save();
 ctx.translate(cx-size/2,cy-size/2);
 ctx.scale(size/100,size/100);
 if(AC_PATH2D){
  if(fill){ctx.fillStyle=fill;ctx.fill(AC_PATH2D)}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2.2;ctx.stroke(AC_PATH2D)}
 }
 ctx.restore();
}

const CREST_SVG=`<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${AC_LOGO_D}"/></svg>`;
const EAGLE_SVG=`<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${AC_LOGO_D}"/></svg>`;
const COMPASS_SVG=`<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${AC_LOGO_D}"/></svg>`;
const EYE_SVG=`<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${AC_LOGO_D}"/></svg>`;
