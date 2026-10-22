/* Slide 8 · partea interactivă (mGI). Textele vin din content/08-lumina.js. */
'use strict';
function mGI(root){
 const c=$('#gi',root),ctx=c.getContext('2d');const W=240,H=125;
 const off=document.createElement('canvas');off.width=W;off.height=H;const ox=off.getContext('2d'),img=ox.createImageData(W,H);
 const sl=$('#giT',root),sh=$('#giH',root),bars=$('#giBars',root);
 let mode=0,dirty=true;const PRE=[.1,.4,.65,.9];
 const C=SLIDE[8],INFO=C.moduri.map(m=>({tag:m.eticheta,big:m.cifra,txt:m.text,bars:m.bare}));
 function updateGIInfo(){const f=INFO[mode];$('#giTag',root).textContent=f.tag;$('#giBig',root).textContent=f.big;$('#giTxt',root).textContent=f.txt;
  bars.innerHTML=f.bars.map(b=>{const p=clamp((Math.log10(b[1])+.2)/(Math.log10(2000)+.2),.05,1)*100;
   return`<div><div class="row" style="justify-content:space-between"><span class="lab">${b[0]}</span><span class="mono" style="font-size:12px;color:var(--ink)">${b[2]}</span></div><div class="btrack" style="--c:${b[1]>100?'var(--creed)':'var(--accent)'}"><div class="bar" style="width:${p}%"></div></div></div>`}).join('')}
 $$('[data-m]',root).forEach(b=>b.onclick=()=>{mode=+b.dataset.m;$$('[data-m]',root).forEach(q=>q.classList.toggle('on',q===b));updateGIInfo();dirty=true});
 sl.oninput=()=>dirty=true;

 // 3D Room coordinates (in low-res buffer W=240, H=125)
 const BX0=52,BX1=188,BY0=22,BY1=84;
 // Gothic pointed arch window cutout test
 const inWindow=(x,y)=>{
  const wx=120,wyTop=30,wyArch=48,wyBot=76,hw=22;
  if(y<wyTop||y>wyBot)return false;
  if(y>=wyArch)return Math.abs(x-wx)<=hw;
  const k=(y-wyTop)/(wyArch-wyTop);
  return Math.abs(x-wx)<=hw*Math.sin(k*Math.PI*.5);
 };

 function render(t){
  let s=+sl.value;if(mode===0)s=PRE.reduce((a,b)=>Math.abs(b-s)<Math.abs(a-s)?b:a);
  const hr=6+s*14;sh.textContent=String(Math.floor(hr)).padStart(2,'0')+':'+String(Math.floor(hr%1*60)).padStart(2,'0')+(mode===0?C.orarFix:C.orarDinamic);
  const sI=Math.pow(Math.sin(Math.PI*s),.75),warm=1-Math.abs(s-.5)*2;
  // Projected sunlight patch on floor
  const patchX=lerp(168,72,s),patchY=104,rx=28*(1+.35*Math.abs(s-.5)),ry=11;
  const tint=[255,216+38*warm,170+80*warm],pg=15,k=mode===0?2.1:1.5;
  const dirAt=(x,y)=>{const dx=(x-patchX)/rx,dy=(y-patchY)/ry;return Math.exp(-(dx*dx+dy*dy)*k)*sI};
  const pr=(a,b)=>dirAt(a*pg,b*pg);

  for(let y=0;y<H;y++)for(let x=0;x<W;x++){
   const o=(y*W+x)*4;
   // Check if pixel is inside the cutout Gothic window
   if(inWindow(x,y)){
    const skyMix=clamp((y-30)/46,0,1);
    const sr=lerp(45+130*sI,215+40*warm,skyMix)*(.45+.55*sI);
    const sg=lerp(95+110*sI,185+45*warm,skyMix)*(.45+.55*sI);
    const sb=lerp(165+85*sI,145+85*sI,skyMix)*(.5+.5*sI);
    img.data[o]=clamp(sr,0,255);img.data[o+1]=clamp(sg,0,255);img.data[o+2]=clamp(sb,0,255);img.data[o+3]=255;
    continue;
   }
   // Determine which room surface (ceiling, floor, left wall, right wall, back wall)
   const tL=(x)/BX0,tR=(W-x)/(W-BX1),tT=(y)/BY0,tB=(H-y)/(H-BY1);
   let surf='back',alb=[122,115,104]; // warm carved stone back wall
   if(x<BX0&&tL<Math.min(tT,tB)){surf='left';alb=[152,38,46]} // crimson tapestry left wall
   else if(x>BX1&&tR<Math.min(tT,tB)){surf='right';alb=[34,118,96]} // viridian tapestry right wall
   else if(y<BY0){surf='ceil';alb=[64,54,44]} // dark timber ceiling
   else if(y>BY1){
    surf='floor';
    // Perspective checkerboard stone tiles on the floor
    const depth=(y-BY1)/(H-BY1+.01);
    const u=(x-W*.5)/(.35+depth*1.4);
    const tile=((Math.floor(u/11)+Math.floor(depth*7))&1);
    alb=tile?[142,134,122]:[98,92,84];
   }

   let d=0;
   if(surf==='floor'||surf==='left'||surf==='right'){
    if(mode===1){
     const gx=x/pg,gy=y/pg,x0=Math.floor(gx),y0=Math.floor(gy),fx=gx-x0,fy=gy-y0;
     d=lerp(lerp(pr(x0,y0),pr(x0+1,y0),fx),lerp(pr(x0,y0+1),pr(x0+1,y0+1),fx),fy);
    }else d=dirAt(x,y);
    if(surf!=='floor')d*=.45;
   }

   // Ambient occlusion in room corners & edges
   let ao=1;
   if(surf==='back'){
    const dx=Math.min(x-BX0,BX1-x),dy=Math.min(y-BY0,BY1-y);
    ao=clamp(Math.min(dx,dy)/14,.42,1);
   }else{
    const edgeDist=surf==='floor'?(y-BY1):surf==='ceil'?(BY0-y):surf==='left'?(BX0-x):(x-BX1);
    ao=clamp(edgeDist/12,.45,1);
   }

   const amb=(.22+.16*sI)*ao;
   let r=alb[0]*(amb+d*1.35*tint[0]/255),g=alb[1]*(amb+d*1.35*tint[1]/255),b=alb[2]*(amb+d*1.35*tint[2]/255);

   // Indirect GI Color Bleeding from crimson (left) & emerald (right) walls + floor bounce
   if(mode!==1){
    const bleedL=sI*.55*Math.exp(-Math.max(0,x-25)/(W*.26));
    const bleedR=sI*.55*Math.exp(-Math.max(0,(W-25)-x)/(W*.26));
    const bounceFloor=sI*.32*Math.exp(-Math.abs(y-BY1)/(H*.28));
    r+=(145*bleedL+45*bounceFloor)*ao;
    g+=(115*bleedR+38*bounceFloor)*ao;
    b+=(55*bleedR+25*bounceFloor)*ao;
   }else{
    // Mode 1 (Sparse Probes): light leakage in top-left ceiling corner & muted bounce
    if(x<BX0+18&&y<BY0+16){
     const leak=Math.exp(-Math.hypot(x-BX0,y-BY0)/14)*sI;
     r+=210*leak;g+=195*leak;b+=160*leak;
    }
   }
   if(mode===2){
    const nz=(Math.sin(x*12.9+y*78.2+t*.004)*43758.5)%1*3.5;
    r+=nz;g+=nz;b+=nz;
   }
   img.data[o]=clamp(r,0,255);img.data[o+1]=clamp(g,0,255);img.data[o+2]=clamp(b,0,255);img.data[o+3]=255;
  }
  ox.putImageData(img,0,0);
  ctx.imageSmoothingEnabled=true;
  ctx.drawImage(off,0,0,c.width,c.height);

  // Scale helper from buffer (240x125) to canvas (880x460)
  const KX=c.width/W,KY=c.height/H;
  // Draw architectural room perspective lines & coffered ceiling beams
  ctx.strokeStyle='rgba(10,16,24,.75)';ctx.lineWidth=2.5;
  ctx.strokeRect(BX0*KX,BY0*KY,(BX1-BX0)*KX,(BY1-BY0)*KY);
  ctx.beginPath();
  ctx.moveTo(0,0);ctx.lineTo(BX0*KX,BY0*KY);
  ctx.moveTo(c.width,0);ctx.lineTo(BX1*KX,BY0*KY);
  ctx.moveTo(0,c.height);ctx.lineTo(BX0*KX,BY1*KY);
  ctx.moveTo(c.height*2,c.height);ctx.moveTo(c.width,c.height);ctx.lineTo(BX1*KX,BY1*KY);
  ctx.stroke();

  // Cutout Gothic Window Stone Frame, Mullions & Tracery
  const wx=120*KX,wyTop=30*KY,wyArch=48*KY,wyBot=76*KY,hw=22*KX;
  const sunX=wx+(s-.5)*hw*1.4,sunY=wyTop+26+(1-sI)*50;
  const sunG=ctx.createRadialGradient(sunX,sunY,2,sunX,sunY,50);
  sunG.addColorStop(0,`rgba(255,250,225,${.95*sI})`);
  sunG.addColorStop(.4,`rgba(255,210,140,${.55*sI})`);
  sunG.addColorStop(1,'rgba(255,200,120,0)');
  ctx.fillStyle=sunG;ctx.beginPath();ctx.arc(sunX,sunY,50,0,7);ctx.fill();

  // Volumetric God-Rays streaming from the cutout window onto the 3D room floor
  const rayG=ctx.createLinearGradient(wx,wyArch,patchX*KX,patchY*KY);
  rayG.addColorStop(0,`rgba(255,228,175,${.34*sI})`);
  rayG.addColorStop(.65,`rgba(255,215,155,${.16*sI})`);
  rayG.addColorStop(1,'rgba(255,215,155,0)');
  ctx.fillStyle=rayG;
  ctx.beginPath();
  ctx.moveTo(wx-hw,wyArch);ctx.lineTo(wx,wyTop);ctx.lineTo(wx+hw,wyArch);
  ctx.lineTo(wx+hw,wyBot);ctx.lineTo(patchX*KX+105,patchY*KY+24);
  ctx.lineTo(patchX*KX-105,patchY*KY+24);ctx.lineTo(wx-hw,wyBot);
  ctx.closePath();ctx.fill();

  // Deep bevel stone sill & Gothic pointed arch casing
  ctx.strokeStyle='#27231f';ctx.lineWidth=7.5;
  ctx.beginPath();
  ctx.moveTo(wx-hw,wyBot);ctx.lineTo(wx-hw,wyArch);
  ctx.quadraticCurveTo(wx-hw,wyTop+16,wx,wyTop);
  ctx.quadraticCurveTo(wx+hw,wyTop+16,wx+hw,wyArch);
  ctx.lineTo(wx+hw,wyBot);ctx.closePath();
  ctx.stroke();
  ctx.strokeStyle='#7a7064';ctx.lineWidth=2;ctx.stroke();

  // Gothic stone mullions & rose tracery inside the cutout window
  ctx.strokeStyle='#221f1b';ctx.lineWidth=3.2;
  ctx.beginPath();
  ctx.moveTo(wx,wyTop+4);ctx.lineTo(wx,wyBot);
  ctx.moveTo(wx-hw*.5,wyArch-10);ctx.lineTo(wx-hw*.5,wyBot);
  ctx.moveTo(wx+hw*.5,wyArch-10);ctx.lineTo(wx+hw*.5,wyBot);
  ctx.moveTo(wx-hw,wyArch+34);ctx.lineTo(wx+hw,wyArch+34);
  ctx.moveTo(wx+hw*.4,wyArch-14);ctx.arc(wx,wyArch-14,hw*.4,0,7);
  ctx.stroke();
  ctx.fillStyle='#4a433b';ctx.fillRect(wx-hw-10,wyBot,hw*2+20,8);

  if(mode>=1){
   for(let py=100;py<=380;py+=90)for(let px=210;px<=670;px+=115){
    ctx.strokeStyle=mode===1?'rgba(232,193,90,.6)':'rgba(110,210,255,.7)';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(px,py,mode===1?8:5.5,0,7);ctx.stroke();
    ctx.fillStyle=mode===1?'rgba(232,193,90,.3)':'rgba(110,210,255,.45)';
    ctx.beginPath();ctx.arc(px,py,3.5,0,7);ctx.fill();
   }
  }
  ctx.font='600 15px JetBrains Mono,monospace';ctx.fillStyle='rgba(255,255,255,.9)';
  ctx.fillText(C.moduri[mode].textDesen,16,24);
  if(mode===1){ctx.fillStyle='#e0243f';ctx.fillText(C.avertisment,16,72)}
 }
 updateGIInfo();
 return{tick(dt,t){if(dirty||mode===2){render(t);dirty=false}}};
}
