/* Slide 11 · partea interactivă (mLynch). Textele vin din SLIDES.lynch (content.js). */
'use strict';
function mLynch(root){
 const c=$('#lyn',root),x=c.getContext('2d'),W=c.width,H=c.height;
 const LY=LYNCH.map((l,i)=>({k:['rep','tra','dis','mar','nod'][i],n:`${i+1}. ${l.name}`,def:l.def,imp:l.inGame}));
 const on={rep:1,tra:1,dis:1,mar:1,nod:1};let foc=null;
 const chips=$('#lChips',root);chips.innerHTML=LY.map((l,i)=>`<button class="btn on" data-k="${l.k}" data-i="${i}">${l.n}</button>`).join('');
 const setLynchInfo=i=>{$('#lTag',root).textContent=LY[i].n;$('#lDef',root).textContent=LY[i].def;$('#lImp',root).textContent=LY[i].imp};
 setLynchInfo(0);
 $$('button',chips).forEach(b=>{b.onclick=()=>{on[b.dataset.k]^=1;b.classList.toggle('on',!!on[b.dataset.k]);setLynchInfo(+b.dataset.i)};b.onpointerenter=()=>{foc=b.dataset.k;setLynchInfo(+b.dataset.i)};b.onpointerleave=()=>foc=null});
 const r=rng(21);
 const dc=[[145,95,198],[380,75,206],[630,105,214],[200,345,190],[470,375,202],[740,345,185]].map(a=>({x:a[0],y:a[1],h:a[2]}));
 const nodes=[[155,205],[300,128],[450,238],[575,158],[705,228],[225,345],[390,380],[550,352],[775,375]].map(a=>({x:a[0]+r()*18,y:a[1]+r()*18}));
 const edges=[];nodes.forEach((n,i)=>{nodes.map((m,j)=>({j,d:Math.hypot(n.x-m.x,n.y-m.y)})).filter(q=>q.j!==i).sort((a,b)=>a.d-b.d).slice(0,2).forEach(q=>{const a=Math.min(i,q.j),b=Math.max(i,q.j);if(!edges.some(e=>e[0]===a&&e[1]===b))edges.push([a,b])})});
 const lm=[[128,145],[342,255],[505,88],[630,295],[810,278]].map(a=>({x:a[0],y:a[1],on:false,t:0}));
 const dcv=document.createElement('canvas');dcv.width=90;dcv.height=46;const dx=dcv.getContext('2d'),di=dx.createImageData(90,46);
 for(let j=0;j<46;j++)for(let i=0;i<90;i++){let b=0,bd=1e9;dc.forEach((q,k)=>{const d=Math.hypot(i*10-q.x,j*10-q.y);if(d<bd){bd=d;b=k}});const col=hsl2rgb(dc[b].h,48,16+(b%3)*4),o=(j*90+i)*4;di.data[o]=col[0];di.data[o+1]=col[1];di.data[o+2]=col[2];di.data[o+3]=255}
 dx.putImageData(di,0,0);
 const fog=document.createElement('canvas');fog.width=W;fog.height=H;const fx=fog.getContext('2d');
 const rev=[];
 function reveal(l){if(l.on)return;l.on=true;rev.push({l,p:0})}
 const resetFog=()=>{rev.length=0;fx.globalCompositeOperation='source-over';fx.fillStyle='rgba(3,6,11,.88)';fx.fillRect(0,0,W,H);lm.forEach(l=>l.on=false);reveal(lm[1])};
 $('#lFog',root).onclick=resetFog;
 c.onpointerdown=e=>{const p=pos(e,c);lm.forEach(l=>{if(Math.hypot(l.x-p[0],l.y-p[1])<34)reveal(l)})};
 c.onpointermove=e=>{const p=pos(e,c);c.style.cursor=lm.some(l=>Math.hypot(l.x-p[0],l.y-p[1])<34)?'pointer':'default'};
 const al=k=>foc&&foc!==k?.2:1;
 resetFog();
 function tick(dt,t){
  rev.forEach(q=>{const s=dt/1300;q.p=Math.min(1,q.p+s);const rad=ease(q.p)*280;fx.globalCompositeOperation='destination-out';const g=fx.createRadialGradient(q.l.x,q.l.y,0,q.l.x,q.l.y,Math.max(1,rad));g.addColorStop(0,'rgba(0,0,0,1)');g.addColorStop(.7,'rgba(0,0,0,.9)');g.addColorStop(1,'rgba(0,0,0,0)');fx.fillStyle=g;fx.beginPath();fx.arc(q.l.x,q.l.y,rad,0,7);fx.fill()});
  for(let i=rev.length-1;i>=0;i--)if(rev[i].p>=1)rev.splice(i,1);
  x.fillStyle='#04070c';x.fillRect(0,0,W,H);
  x.globalAlpha=on.dis?al('dis')*.95:.18;x.imageSmoothingEnabled=true;x.drawImage(dcv,0,0,W,H);x.globalAlpha=1;
  x.strokeStyle='rgba(145,190,225,.08)';x.beginPath();for(let i=0;i<=W;i+=40){x.moveTo(i,0);x.lineTo(i,H)}for(let j=0;j<=H;j+=40){x.moveTo(0,j);x.lineTo(W,j)}x.stroke();
  if(on.dis){x.font='600 15px JetBrains Mono,monospace';x.fillStyle=`rgba(234,242,248,${.72*al('dis')})`;SLIDES.lynch.districts.forEach((n,i)=>x.fillText(n.toUpperCase(),dc[i].x-36,dc[i].y))}
  if(on.mar){x.globalAlpha=al('mar');x.strokeStyle='hsl(200 75% 48%)';x.lineWidth=20;x.lineCap='round';x.beginPath();for(let y=-10;y<=H+10;y+=10){const X=468+105*Math.sin(y/82);y<0?x.moveTo(X,y):x.lineTo(X,y)}x.stroke();
   x.strokeStyle='hsl(195 85% 74%)';x.lineWidth=1.8;for(const o of[-11,11]){x.beginPath();for(let y=-10;y<=H+10;y+=10){const X=468+105*Math.sin(y/82)+o;y<0?x.moveTo(X,y):x.lineTo(X,y)}x.stroke()}
   x.strokeStyle='rgba(234,242,248,.55)';x.lineWidth=4.5;x.setLineDash([14,8]);x.beginPath();x.arc(98,238,190,-1.2,1.2);x.stroke();x.setLineDash([]);x.globalAlpha=1}
  if(on.tra){x.globalAlpha=al('tra');edges.forEach(e=>{const a=nodes[e[0]],b=nodes[e[1]];x.strokeStyle='rgba(210,225,238,.55)';x.lineWidth=3;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();
   x.strokeStyle='hsl(192 90% 68%)';x.lineWidth=1.6;x.setLineDash([4,6]);x.lineDashOffset=-t*.02;x.beginPath();x.moveTo(a.x,a.y-8);x.lineTo(b.x,b.y-8);x.stroke();x.setLineDash([])});x.globalAlpha=1}
  x.drawImage(fog,0,0);
  if(on.nod){x.globalAlpha=al('nod');nodes.forEach((n,i)=>{const p=(t*.001+i*.3)%1;x.strokeStyle=`rgba(145,210,245,${1-p})`;x.lineWidth=1.8;x.beginPath();x.arc(n.x,n.y,8+p*15,0,7);x.stroke();x.fillStyle='hsl(195 85% 66%)';x.fillRect(n.x-5,n.y-5,10,10)});x.globalAlpha=1}
  if(on.rep){x.globalAlpha=al('rep');lm.forEach((l,idx)=>{const col=l.on?'#e8c15a':'#e0243f';
   drawCrestCanvas(x,l.x,l.y-4,30,col,'#04070c');
   if(l.on){const ea=t*.002+idx;const ex=l.x+Math.cos(ea)*24,ey=l.y-6+Math.sin(ea)*13;x.fillStyle='#eaf2f8';x.beginPath();x.arc(ex,ey,2.2,0,7);x.fill()}
   else{const p=(t*.0012)%1;x.strokeStyle=`rgba(224,36,63,${1-p})`;x.lineWidth=2;x.beginPath();x.arc(l.x,l.y-4,13+p*16,0,7);x.stroke()}});x.globalAlpha=1}
 }
 return{tick};
}
