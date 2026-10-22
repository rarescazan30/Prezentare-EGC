/* Motorul prezentării: fundalul animat, tranziția dintre slide-uri și navigarea. */
'use strict';
const stage=$('#stage'),bg=$('#bg'),bx=bg.getContext('2d'),fxc=$('#fx'),fxx=fxc.getContext('2d'),ghost=$('#ghost');
const S={i:-1,busy:false,pend:null,hue:202,hueT:202,yr:2007,yrT:2007,reel:false,cur:null};
const DPR=Math.min(devicePixelRatio||1,1.5);
let BW=0,BH=0;
function resize(){BW=innerWidth;BH=innerHeight;bg.width=BW*DPR;bg.height=BH*DPR;fxc.width=BW*DPR;fxc.height=BH*DPR}
addEventListener('resize',resize);resize();

SL.forEach((s,i)=>{const e=document.createElement('section');e.className='slide';e.id='s'+i;e.setAttribute('aria-label',s.t);e.innerHTML=s.html;stage.appendChild(e);s.el=e});
const ticks=$('#ticks');
SL.forEach((s,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`${i+1}. ${s.t}`);b.title=`${i+1}. ${s.t}`;b.onclick=()=>go(i);ticks.appendChild(b);
});

const NODES_CNT=34;
const rNet=rng(42);
const NET_NODES=[...Array(NODES_CNT)].map((_,i)=>({
 x:rNet(),
 y:rNet(),
 vx:(rNet()-.5)*.028,
 vy:(rNet()-.5)*.028,
 z:.35+rNet()*.65,
 hub:i%11===0,
 ph:rNet()*6.283
}));
const NET_PULSES=[...Array(6)].map((_,i)=>({
 a:i%NODES_CNT,
 b:(i*7+3)%NODES_CNT,
 p:rNet(),
 sp:.55+rNet()*.9
}));

const FX={
 data:{n:14,vx:[0,0],vy:[32,85],s:[10,13],c:'hsla(H,75%,65%,',a:[.08,.32],sh:'g'},
 dust:{n:16,vx:[8,22],vy:[-3,5],s:[1,2],c:'hsla(H,55%,70%,',a:[.1,.35],sh:'d'},
 petals:{n:14,vx:[8,24],vy:[18,40],s:[2.5,4.8],c:'hsla(H,60%,75%,',a:[.22,.58],sh:'p'},
 spray:{n:16,vx:[20,50],vy:[-5,5],s:[1,2],c:'hsla(H,60%,80%,',a:[.12,.4],sh:'d'},
 leaves:{n:14,vx:[8,26],vy:[20,44],s:[2.5,4.8],c:'hsla(H,65%,62%,',a:[.22,.58],sh:'p'},
 motes:{n:16,vx:[-5,5],vy:[-10,-2],s:[1,2],c:'hsla(H,70%,75%,',a:[.1,.38],sh:'d'}
};
const PS=[...Array(60)].map(()=>({x:0,y:0,u:Math.random(),v:Math.random(),w:Math.random(),f:0,i:0}));
let fxType='data',scNow='grid',scOld='grid',scMix=1;
function spawn(p,init){const f=FX[fxType]||FX.data,W=BW,H=BH;p.x=Math.random()*W;p.y=init?Math.random()*H:(f.vy[1]<0?H+10:-10);p.f=init?0:p.f;p.sp=lerp(f.s[0],f.s[1],p.u);p.vx=lerp(f.vx[0],f.vx[1],p.v);p.vy=lerp(f.vy[0],f.vy[1],p.w);p.a=lerp(f.a[0],f.a[1],p.u)}
PS.forEach((p,i)=>{p.i=i;spawn(p,true)});

function drawBG(dt,t){
 const W=BW*DPR,H=BH*DPR,h=Math.round(S.hue),s=dt/1000;
 bx.setTransform(1,0,0,1,0,0);bx.clearRect(0,0,W,H);
 const g=bx.createLinearGradient(0,0,0,H);
 g.addColorStop(0,`hsl(${h} 45% 4%)`);
 g.addColorStop(.65,`hsl(${h} 40% 8%)`);
 g.addColorStop(1,`hsl(${h} 45% 4%)`);
 bx.fillStyle=g;bx.fillRect(0,0,W,H);

 // Subtle perspective Animus floor grid
 const hz=H*.68;
 bx.strokeStyle=`hsla(${h},70%,60%,.03)`;bx.lineWidth=DPR;bx.beginPath();
 for(let i=-14;i<=14;i++){bx.moveTo(W/2+i*32*DPR,hz);bx.lineTo(W/2+i*W*.085,H)}
 for(let k=0;k<8;k++){const z=((k+(t*.00025)%1)/8),y=hz+Math.pow(z,2.1)*(H-hz);bx.moveTo(0,y);bx.lineTo(W,y)}
 bx.stroke();

 // Update interconnected Animus nodes
 NET_NODES.forEach(n=>{
  n.x+=n.vx*s;n.y+=n.vy*s;
  if(n.x<.02||n.x>.98)n.vx=-n.vx;
  if(n.y<.04||n.y>.96)n.vy=-n.vy;
 });

 // Draw proximity connections & triangular memory facets
 const maxDist=Math.min(W,H)*.21,maxD2=maxDist*maxDist;
 bx.lineWidth=DPR;
 for(let i=0;i<NODES_CNT;i++){
  const a=NET_NODES[i],ax=a.x*W,ay=a.y*H;
  for(let j=i+1;j<NODES_CNT;j++){
   const b=NET_NODES[j],bx2=b.x*W,by2=b.y*H;
   const dx=ax-bx2,dy=ay-by2,d2=dx*dx+dy*dy;
   if(d2<maxD2){
    const al=(1-Math.sqrt(d2)/maxDist)*.11;
    bx.strokeStyle=`hsla(${h},75%,65%,${al.toFixed(3)})`;
    bx.beginPath();bx.moveTo(ax,ay);bx.lineTo(bx2,by2);bx.stroke();
   }
  }
 }

 // Draw synaptic data pulses traveling between nodes
 NET_PULSES.forEach(pl=>{
  pl.p+=s*pl.sp*.45;
  if(pl.p>=1){pl.p=0;pl.a=pl.b;pl.b=(pl.a+1+Math.floor(Math.random()*12))%NODES_CNT}
  const n1=NET_NODES[pl.a],n2=NET_NODES[pl.b];
  const px=lerp(n1.x,n2.x,pl.p)*W,py=lerp(n1.y,n2.y,pl.p)*H;
  bx.fillStyle='#e8c15a';
  bx.beginPath();bx.arc(px,py,2.2*DPR,0,7);bx.fill();
 });

 // Draw nodes & hub rings
 NET_NODES.forEach(n=>{
  const nx=n.x*W,ny=n.y*H,r=(n.hub?3.4:1.9)*DPR*n.z;
  bx.fillStyle=n.hub?'#e8c15a':`hsla(${h},80%,72%,.65)`;
  bx.beginPath();bx.arc(nx,ny,r,0,7);bx.fill();
  if(n.hub){
   const pr=r+(3+Math.sin(t*.003+n.ph)*2)*DPR;
   bx.strokeStyle=`hsla(${h},85%,70%,.28)`;
   bx.beginPath();bx.arc(nx,ny,pr,0,7);bx.stroke();
  }
 });

 // Ambient atmospheric particles
 const f=FX[fxType]||FX.data,pre=f.c.replace('H',h),lim=REDUCED?10:f.n;
 PS.forEach(p=>{
  if(p.i>=lim)return;
  p.f=Math.min(1,p.f+s);p.x+=p.vx*s;p.y+=p.vy*s;
  if(p.y>BH+14||p.y<-14||p.x>BW+14||p.x<-14)spawn(p,false);
  const px=p.x*DPR,py=p.y*DPR;
  bx.fillStyle=pre+(p.a*p.f).toFixed(3)+')';
  if(f.sh==='g'){bx.font=`${p.sp*DPR}px JetBrains Mono,monospace`;bx.fillText(p.u>.5?'1':'0',px,py)}
  else if(f.sh==='p'){bx.save();bx.translate(px,py);bx.rotate(t*.001*p.v+p.u*6);bx.beginPath();bx.ellipse(0,0,p.sp*DPR,p.sp*.55*DPR,0,0,7);bx.fill();bx.restore()}
  else{bx.beginPath();bx.arc(px,py,p.sp*DPR*.5,0,7);x_arc:bx.fill()}
 });

 const vg=bx.createRadialGradient(W/2,H/2,H*.32,W/2,H/2,H*.95);
 vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.62)');
 bx.fillStyle=vg;bx.fillRect(0,0,W,H);
}

/* ============ TRANZIȚIE · „SINCRONIZARE ANIMUS" (voal luminos + emblemă) ============ */
const WP={on:false,t0:0,dur:1400,target:0,swapped:false,hue:202,dir:1};
const MOTES=[...Array(28)].map((_,i)=>{const q=rng(900+i);return{y:q(),o:q(),s:.7+q()*1.6,g:q()>.45,ph:q()*6.28}});
const sm3=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
function drawWipe(p){
 const w=fxc.width,h=fxc.height,cx=w/2,cy=h/2,D=WP.dir;
 fxx.setTransform(1,0,0,1,0,0);fxx.clearRect(0,0,w,h);
 const a=ease(clamp(p/.5,0,1)),b=ease(clamp((p-.5)/.5,0,1));
 const F=w*.26,e1=lerp(0,w+F,a),e2=lerp(-F,w,b);
 const rgb=hsl2rgb(S.hue,78,64).map(v=>Math.round(v)),AC=rgb.join(',');
 const alphaAt=x=>sm3(0,1,(e1-x)/F)*sm3(0,1,(x-e2)/F);
 fxx.save();
 if(D<0){fxx.translate(w,0);fxx.scale(-1,1)}
 /* voal */
 if(e1>e2){
  const g=fxx.createLinearGradient(e2,0,e1,0),n=32;
  for(let k=0;k<=n;k++){const t=k/n,x=e2+(e1-e2)*t;g.addColorStop(t,`rgba(4,8,14,${(alphaAt(x)*.97).toFixed(3)})`)}
  fxx.fillStyle=g;fxx.fillRect(e2,0,e1-e2,h);
  const cov=alphaAt(cx);
  if(cov>.01){
   const rg=fxx.createRadialGradient(cx,cy,0,cx,cy,h*.85);
   rg.addColorStop(0,`rgba(${AC},${(.20*cov).toFixed(3)})`);rg.addColorStop(.55,`rgba(${AC},${(.05*cov).toFixed(3)})`);rg.addColorStop(1,`rgba(${AC},0)`);
   fxx.fillStyle=rg;fxx.fillRect(0,0,w,h);
  }
 }
 /* fascicul de lumină pe marginile voalului */
 const beam=(x,k)=>{
  if(k<=.01||x<-F||x>w+F)return;
  const bw=F*.36,cg=fxx.createLinearGradient(x-bw,0,x+bw,0);
  cg.addColorStop(0,`rgba(${AC},0)`);cg.addColorStop(.5,`rgba(${AC},${(.2*k).toFixed(3)})`);cg.addColorStop(1,`rgba(${AC},0)`);
  fxx.fillStyle=cg;fxx.fillRect(x-bw,0,bw*2,h);
  const lg=fxx.createLinearGradient(0,0,0,h);
  lg.addColorStop(0,'rgba(255,236,190,0)');lg.addColorStop(.5,`rgba(255,240,205,${(.9*k).toFixed(3)})`);lg.addColorStop(1,'rgba(255,236,190,0)');
  fxx.fillStyle=lg;fxx.fillRect(x-DPR*.75,0,DPR*1.5,h);
 };
 const x1=e1-F*.5,x2=e2+F*.5;
 beam(x1,1);beam(x2,b>.02?1:0);
 /* particule fine de lumină */
 MOTES.forEach(m=>{
  [[x1,1],[x2,b>.02?.8:0]].forEach(([bx0,k])=>{
   if(k<=0)return;
   const x=bx0-F*.5*(m.o-.1)+Math.sin(p*7+m.ph)*6*DPR,y=m.y*h+Math.cos(p*5+m.ph)*10*DPR;
   if(x<0||x>w)return;
   const al=(.25+.75*(1-m.o))*k*.85;
   fxx.fillStyle=m.g?`rgba(255,220,140,${al})`:`rgba(${AC},${al})`;
   fxx.beginPath();fxx.arc(x,y,m.s*DPR,0,7);fxx.fill();
  });
 });
 fxx.restore();
 /* emblemă + titlu în centru */
 const c=sm3(.3,.5,p)*(1-sm3(.56,.8,p));
 if(c>.01){
  const size=Math.min(w,h)*.2*(.88+.12*ease(clamp((p-.28)/.45,0,1)));
  fxx.save();
  fxx.shadowColor=`rgba(232,193,90,${.7*c})`;fxx.shadowBlur=34*DPR;
  drawCrestCanvas(fxx,cx,cy-size*.08,size,`rgba(${AC},${(.14*c).toFixed(3)})`,`rgba(240,205,120,${(.95*c).toFixed(3)})`);
  fxx.restore();
  const ly=cy+size*.5+14*DPR,lw=w*.1*c;
  [[-1],[1]].forEach(([d])=>{
   const x0=cx+d*(size*.62),x1b=x0+d*lw,g=fxx.createLinearGradient(x0,0,x1b,0);
   g.addColorStop(0,`rgba(240,205,120,${.7*c})`);g.addColorStop(1,'rgba(240,205,120,0)');
   fxx.fillStyle=g;fxx.fillRect(Math.min(x0,x1b),cy-DPR*.5,Math.abs(x1b-x0),DPR);
  });
  fxx.font=`600 ${Math.round(13*DPR)}px "JetBrains Mono",ui-monospace,Menlo,monospace`;
  fxx.textAlign='center';fxx.textBaseline='top';
  if('letterSpacing' in fxx)fxx.letterSpacing=`${3*DPR}px`;
  fxx.fillStyle=`rgba(213,227,239,${.9*c})`;
  fxx.fillText(SL[WP.target].t.toUpperCase(),cx,ly+size*.06);
  if('letterSpacing' in fxx)fxx.letterSpacing='0px';
 }
}

function setTargets(n){const s=SL[n];S.hueT=s.hue;S.yrT=s.year;scOld=scNow;scNow=s.scene;scMix=0;
 if(s.fx!==fxType){fxType=s.fx;PS.forEach(p=>{p.f=0;spawn(p,true)})}}
function go(n){n=clamp(n,0,N-1);if(n===S.i&&!S.busy)return;if(S.busy){S.pend=n;return}
 if(n===S.i)return;
 if(S.i<0||REDUCED){setTargets(n);if(REDUCED){S.hue=S.hueT;S.yr=S.yrT}swap(n);return}
 S.busy=true;WP.on=true;WP.t0=performance.now();WP.dir=n>S.i?1:-1;WP.target=n;WP.swapped=false;WP.hue=SL[n].hue;setTargets(n)}

function swap(n){
 if(S.cur&&S.cur.off)S.cur.off();S.cur=null;
 if(S.i>=0)SL[S.i].el.classList.remove('on');
 S.i=n;const s=SL[n];s.el.classList.add('on');s.el.scrollTop=0;
 s.el.querySelectorAll('.rise').forEach(e=>{e.style.animation='none';e.offsetWidth;e.style.animation=''});
 s.el.querySelectorAll('h1.k,h2.k').forEach(e=>{e.style.animation='none';e.offsetWidth;e.style.animation=''});
 S.cur=s.mount?s.mount(s.el):null;
 $$('#ticks button').forEach((b,i)=>{b.classList.toggle('on',i===n);b.classList.toggle('done',i<n)});
 $('#cnt2').textContent=String(n+1).padStart(2,'0')+' / '+N;$('#ft').textContent=s.t;
 $('#prev').disabled=n===0;$('#next').disabled=n===N-1;
 try{history.replaceState(null,'','#'+(n+1))}catch(e){}
 const cb=$('#crest-bg');if(cb)cb.style.transform=`translate(-50%,-50%) scale(${1+(n%3)*.04})`;
}

function ghostTick(dt){
 S.yr+=(S.yrT-S.yr)*(1-Math.exp(-dt/220));
 ghost.textContent=Math.round(S.yr);
 S.hue+=(S.hueT-S.hue)*(1-Math.exp(-dt/260));
 document.documentElement.style.setProperty('--hue',S.hue.toFixed(1));
}

const ACT={
 next:()=>go(S.i+1),
 prev:()=>go(S.i-1),
 restart:()=>go(0)
};

document.addEventListener('click',e=>{
 const b=e.target.closest&&e.target.closest('[data-act]');
 if(b&&ACT[b.dataset.act])ACT[b.dataset.act]();
});

addEventListener('keydown',e=>{
 if(e.target.matches&&e.target.matches('input,textarea,select'))return;
 if(e.ctrlKey||e.metaKey||e.altKey)return;
 const k=e.key;
 if(k==='ArrowRight'||k==='PageDown'||k===' '){e.preventDefault();go(S.i+1)}
 else if(k==='ArrowLeft'||k==='PageUp'){e.preventDefault();go(S.i-1)}
 else if(k==='Home')go(0);else if(k==='End')go(N-1);
});

let tsx=0,tsy=0;
stage.addEventListener('touchstart',e=>{tsx=e.touches[0].clientX;tsy=e.touches[0].clientY},{passive:true});
stage.addEventListener('touchend',e=>{
 if(e.target.closest('canvas,input,button,.tw,svg,.flip'))return;
 const dx=e.changedTouches[0].clientX-tsx,dy=e.changedTouches[0].clientY-tsy;
 if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.6)go(S.i+(dx<0?1:-1));
},{passive:true});

let lt=performance.now();
function frame(t){
 const dt=clamp(t-lt,0,64);lt=t;
 ghostTick(dt);drawBG(dt,t);
 if(S.cur&&S.cur.tick)S.cur.tick(dt,t);
 if(WP.on){
  const p=(performance.now()-WP.t0)/WP.dur;
  if(p>=.5&&!WP.swapped){WP.swapped=true;swap(WP.target)}
  if(p>=1){
   WP.on=false;fxx.clearRect(0,0,fxc.width,fxc.height);S.busy=false;
   if(S.pend!=null){const n=S.pend;S.pend=null;go(n)}
  }else drawWipe(p);
 }
 requestAnimationFrame(frame);
}
/* slide-ul curent în URL (#1 … #21): reîncărcarea păstrează slide-ul */
const fromHash=()=>{const n=parseInt(location.hash.slice(1),10);return n>=1&&n<=N?n-1:0};
addEventListener('hashchange',()=>go(fromHash()));
go(fromHash());requestAnimationFrame(frame);
