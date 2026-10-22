/* Slide 10 · partea interactivă (mCrowd). Textele vin din content/10-multimea-din-paris.js. */
'use strict';
function mCrowd(root){
 const c=$('#crw',root),x=c.getContext('2d'),W=c.width,H=c.height,MAX=12000,K=120;
 const px=new Float32Array(MAX),py=new Float32Array(MAX),vx=new Float32Array(MAX),vy=new Float32Array(MAX);
 const cx=W/2,cy=H/2,RX=W*.42,RY=H*.42,r=rng(5);
 for(let i=0;i<MAX;i++){const a=r()*6.283,d=Math.sqrt(r());px[i]=cx+Math.cos(a)*d*RX;py[i]=cy+Math.sin(a)*d*RY;const q=r()*6.283,s=6+r()*16;vx[i]=Math.cos(q)*s;vy[i]=Math.sin(q)*s}
 const ids=new Int32Array(K),ds=new Float32Array(K),was=new Uint8Array(MAX);
 let N=12000,pl={x:cx-200,y:cy+100},tg={x:pl.x,y:pl.y},idle=0,fr=0,recs=[],last=0,pe=false;
 const sl=$('#crwN',root),slv=$('#crwNv',root),cA=$('#cA',root),cM=$('#cM',root),cL=$('#cL',root),cR=$('#cR',root),cP=$('#cP',root);
 const fmtN=n=>n.toLocaleString('ro-RO');
 sl.oninput=()=>{N=+sl.value;slv.textContent=fmtN(N);for(let i=0;i<MAX;i++)was[i]=0};
 c.onpointermove=e=>{const p=pos(e,c);tg.x=p[0];tg.y=p[1];idle=0;pe=true};
 c.onpointerleave=()=>{pe=false};
 function tick(dt,t){
  const s=Math.min(dt,50)/1000;fr++;idle+=dt;
  if(idle>3000||!pe&&idle>1500){tg.x=cx+Math.cos(t*.0004)*(RX*.72);tg.y=cy+Math.sin(t*.0006)*(RY*.72)}
  pl.x+=(tg.x-pl.x)*Math.min(1,s*5);pl.y+=(tg.y-pl.y)*Math.min(1,s*5);
  for(let i=0;i<N;i++){let X=px[i]+vx[i]*s,Y=py[i]+vy[i]*s;const dx=(X-cx)/RX,dy=(Y-cy)/RY;
   if(dx*dx+dy*dy>1){vx[i]=-vx[i];vy[i]=-vy[i];X=px[i];Y=py[i]}px[i]=X;py[i]=Y;
   if((i+fr)%90===0){const q=Math.random()*6.283,sp=6+Math.random()*16;vx[i]=Math.cos(q)*sp;vy[i]=Math.sin(q)*sp}}
  const old=ids.slice();for(let k=0;k<K;k++)was[old[k]]=1;
  let cnt=0;for(let i=0;i<N;i++){const dx=px[i]-pl.x,dy=py[i]-pl.y,d=dx*dx+dy*dy;
   if(cnt<K||d<ds[K-1]){let p=cnt<K?cnt:K-1;while(p>0&&ds[p-1]>d){ds[p]=ds[p-1];ids[p]=ids[p-1];p--}ds[p]=d;ids[p]=i;if(cnt<K)cnt++}}
  let rec=0;for(let k=0;k<K;k++)if(!was[ids[k]])rec++;for(let k=0;k<K;k++)was[old[k]]=0;
  recs.push([t,rec]);while(recs.length&&recs[0][0]<t-1000)recs.shift();
  x.fillStyle='#05080e';x.fillRect(0,0,W,H);
  x.fillStyle='hsl(202 25% 11%)';x.beginPath();x.ellipse(cx,cy,RX+14,RY+14,0,0,7);x.fill();
  x.strokeStyle='rgba(145,190,225,.06)';x.lineWidth=1;x.beginPath();for(let a=1;a<5;a++){x.ellipse(cx,cy,RX*a/5,RY*a/5,0,0,7)}x.stroke();
  x.fillStyle='#132030';x.fillRect(cx-30,cy-18,60,36);x.strokeStyle='rgba(145,190,225,.45)';x.strokeRect(cx-30,cy-18,60,36);
  x.fillStyle='rgba(145,175,200,.45)';for(let i=0;i<N;i++)x.fillRect(px[i],py[i],1.8,1.8);
  x.strokeStyle='rgba(232,193,90,.24)';x.lineWidth=1;x.beginPath();for(let k=0;k<40;k++){x.moveTo(pl.x,pl.y);x.lineTo(px[ids[k]],py[ids[k]])}x.stroke();
  for(let k=40;k<K;k++){const i=ids[k];x.fillStyle='hsl(200 65% 58%)';x.fillRect(px[i]-2,py[i]-3,4.5,7)}
  x.lineWidth=2;for(let k=0;k<40;k++){const i=ids[k];x.strokeStyle='#e8c15a';x.beginPath();x.arc(px[i],py[i],6.5,0,7);x.stroke();x.fillStyle='#eaf2f8';x.fillRect(px[i]-2,py[i]-3,4.5,7)}
  x.setLineDash([6,6]);x.strokeStyle='rgba(234,242,248,.35)';x.beginPath();x.arc(pl.x,pl.y,Math.sqrt(ds[K-1]),0,7);x.stroke();x.setLineDash([]);
  const ep=(t*.0008)%1;x.strokeStyle=`rgba(232,193,90,${(1-ep)*.6})`;x.lineWidth=2;x.beginPath();x.arc(pl.x,pl.y,ep*Math.sqrt(ds[39]),0,7);x.stroke();
  drawCrestCanvas(x,pl.x,pl.y,28,'#e0243f','#eaf2f8');
  if(t-last>200){last=t;let s2=0;recs.forEach(q=>s2+=q[1]);cR.textContent=s2;cL.textContent=fmtN(Math.max(0,N-K));cA.textContent=Math.min(40,N);cM.textContent=Math.min(K,N);
   cP.textContent=SLIDE[10].procent.replace('{p}',(40/N*100).toLocaleString('ro-RO',{maximumFractionDigits:2}))}
 }
 sl.oninput();
 return{tick};
}
