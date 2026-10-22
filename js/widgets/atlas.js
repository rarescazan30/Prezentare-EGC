/* Slide 7 · partea interactivă (mAtlas). Textele vin din SLIDES.atlas (content.js). */
'use strict';
function mAtlas(root){
 const c=$('#atl',root),x=c.getContext('2d'),W=800,H=430,tn=$('#atn',root),te=$('#ate',root),tr=$('#atr',root),run=$('#aRun',root);
 const tc=document.createElement('canvas');tc.width=80;tc.height=43;const tx=tc.getContext('2d'),id=tx.createImageData(80,43);
 for(let j=0;j<43;j++)for(let i=0;i<80;i++){const n=Math.sin(i*.19)*Math.cos(j*.23)+Math.sin(i*.07+j*.11)*.8+Math.sin(i*.41+j*.33)*.25;
  const col=n<-.4?[14,34,52]:n<.3?[20,48,62]:n<.9?[32,62,74]:[48,76,88];const k=(j*80+i)*4;id.data[k]=col[0];id.data[k+1]=col[1];id.data[k+2]=col[2];id.data[k+3]=255}
 tx.putImageData(id,0,0);
 const r=rng(7),T=SLIDES.atlas.errorTypes;
 const it=[...Array(260)].map(()=>({x:r()*W,y:30+r()*(H-40),t:Math.floor(r()*6),bad:false}));
 let scan=0,running=false,tested=0,errs=0,by=T.map(()=>0);
 const reroll=()=>{const q=rng(Date.now());it.forEach(o=>o.bad=q()<.09)};
 const start=()=>{reroll();scan=0;tested=0;errs=0;by=T.map(()=>0);running=true;it.forEach(o=>o.seen=false)};
 run.onclick=start;
 reroll();it.forEach(o=>o.seen=false);
 function draw(){x.imageSmoothingEnabled=true;x.drawImage(tc,0,0,W,H);x.fillStyle='rgba(2,5,10,.45)';x.fillRect(0,0,W,H);
  x.strokeStyle='rgba(145,190,225,.12)';x.lineWidth=1;x.beginPath();for(let i=0;i<=W;i+=50){x.moveTo(i,0);x.lineTo(i,H)}for(let j=0;j<=H;j+=50){x.moveTo(0,j);x.lineTo(W,j)}x.stroke();
  it.forEach(o=>{if(o.seen&&o.bad){x.strokeStyle='rgba(224,36,63,.88)';x.lineWidth=2;x.beginPath();x.moveTo(o.x,o.y);x.lineTo(o.x,0);x.stroke()}});
  it.forEach(o=>{x.fillStyle=o.seen?(o.bad?'#e0243f':'hsl(195 80% 62%)'):'rgba(180,200,215,.35)';x.beginPath();x.arc(o.x,o.y,o.seen&&o.bad?4.5:2.6,0,7);x.fill()});
  const sx=scan*W;const g=x.createLinearGradient(sx-90,0,sx,0);g.addColorStop(0,'rgba(120,220,255,0)');g.addColorStop(1,'rgba(120,220,255,.28)');x.fillStyle=g;x.fillRect(sx-90,0,90,H);
  x.fillStyle='rgba(180,240,255,.95)';x.fillRect(sx-1,0,2,H)}
 draw();
 return{tick(dt){if(running){scan+=dt/5500;it.forEach(o=>{if(!o.seen&&o.x<=scan*W){o.seen=true;tested++;if(o.bad){errs++;by[o.t]++}}});
  if(scan>=1){scan=1;running=false;tr.textContent=SLIDES.atlas.result+T.map((n,i)=>by[i]+' '+n).join(' · ')+'.'}
  tn.textContent=tested;te.textContent=errs;draw()}}};
}
