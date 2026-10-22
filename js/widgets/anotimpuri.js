/* Slide 9 · partea interactivă (mSeason). Textele vin din SLIDES.anotimpuri (content.js). */
'use strict';
function mSeason(root){
 const C=SLIDES.anotimpuri,c=$('#sea',root),x=c.getContext('2d'),W=c.width,H=c.height;
 const sl=$('#seaT',root),sh=$('#seaH',root),mD=$('#mD',root),mA=$('#mA',root),rb=$('#seaR',root);
 const SE=[
  {name:C.seasons[0].name,leaf:[[246,182,202],[228,136,166],[255,218,230]],dens:.86,gr:[138,26,22],snow:0,fall:'petal',al:28},
  {name:C.seasons[1].name,leaf:[[38,88,62],[24,62,44],[58,116,82]],dens:1,gr:[135,32,18],snow:0,fall:null,al:20},
  {name:C.seasons[2].name,leaf:[[204,64,34],[232,118,38],[148,36,22]],dens:.78,gr:[28,38,20],snow:0,fall:'leaf',al:32},
  {name:C.seasons[3].name,leaf:[[222,234,246],[188,206,226],[250,253,255]],dens:.14,gr:[208,24,84],snow:1,fall:'snow',al:88}
 ];
 let se=1,rt=true;const r=rng(31);
 const mix=(a,b,k)=>a.map((v,i)=>lerp(v,b[i],k)),rgb=a=>`rgb(${a[0]|0},${a[1]|0},${a[2]|0})`;
 const hs=(h,s,l)=>`hsl(${h} ${s}% ${l}%)`;

 // Pre-generate realistic recursive botanical trees (no blob ellipses!)
 function buildTree(x0,y0,len,ang,depth,maxD,leanDir){
  const segs=[],clusters=[];
  function branch(x1,y1,l,a,d){
   const x2=x1+Math.cos(a)*l,y2=y1+Math.sin(a)*l;
   segs.push({x1,y1,x2,y2,w:Math.max(1.1,Math.pow(d/maxD,1.65)*13*(len/72)),d});
   if(d<=2){
    const cnt=d===1?7:4;
    for(let i=0;i<cnt;i++){
     clusters.push({
      x:x2+(r()-.5)*22*(len/68),
      y:y2+(r()-.5)*11*(len/68),
      rad:(3.2+r()*4.5)*(len/68),
      ci:(i+d)%3,
      sh:.7+r()*.35,
      ang:r()*3.14
     });
    }
   }
   if(d>1){
    const spread=.26+r()*.18;
    branch(x2,y2,l*(.72+r()*.08),a-spread+leanDir*.06,d-1);
    branch(x2,y2,l*(.70+r()*.08),a+spread+leanDir*.04,d-1);
    if(d>=maxD-1&&r()>.35){
     branch(x2,y2,l*.58,a+(r()-.5)*.25,d-2);
    }
   }
  }
  branch(x0,y0,len,ang,maxD);
  return{x0,y0,s:len/70,segs,clusters};
 }

 const trees=[
  buildTree(88,365,68,-1.52,6,6,.22),
  buildTree(205,342,46,-1.60,5,5,.15),
  buildTree(872,368,72,-1.62,6,6,-.24),
  buildTree(760,340,44,-1.54,5,5,-.12)
 ];

 const ps=[...Array(95)].map(()=>({x:r()*W,y:r()*H,v:.55+r()*.9,p:r()*6.28}));
 const stars=[...Array(75)].map(()=>[r()*W,r()*H*.46,r()]);
 const reeds=[...Array(52)].map((_,i)=>({x:120+i*14+r()*8,h:12+r()*16,ph:r()*6}));

 $$('#seaS [data-s]',root).forEach(b=>b.onclick=()=>{se=+b.dataset.s;$$('#seaS .btn',root).forEach(q=>q.classList.toggle('on',q===b));ind()});
 rb.onclick=()=>{rt=!rt;rb.classList.toggle('on',rt);rb.textContent=C.rt+': '+(rt?C.rtOn:C.rtOff)};
 const ind=()=>{mD.style.width=SE[se].dens*100+'%';mA.style.width=SE[se].al+'%'};ind();

 function drawCastle(cx,cy,L,snow,rtBounce){
  const cl=v=>clamp(v*L+rtBounce*20,0,255);
  // Ishigaki battered stone foundation wall
  x.fillStyle=rgb([cl(64),cl(70),cl(80)]);
  x.beginPath();x.moveTo(cx-108,cy);x.quadraticCurveTo(cx-90,cy-24,cx-82,cy-44);
  x.lineTo(cx+82,cy-44);x.quadraticCurveTo(cx+90,cy-24,cx+108,cy);x.closePath();x.fill();
  x.strokeStyle='rgba(14,20,28,.55)';x.lineWidth=1;
  for(let rY=cy-36;rY<cy;rY+=9){x.beginPath();x.moveTo(cx-96,rY);x.lineTo(cx+96,rY);x.stroke()}
  for(let k=0;k<4;k++){
   const w=76-k*15,h=26-k*1.5,y0=cy-44-k*33;
   x.fillStyle=rgb([cl(228),cl(222),cl(212)]);
   x.fillRect(cx-w+6,y0-h,2*w-12,h);
   x.fillStyle=rgb([cl(34),cl(38),cl(46)]);
   x.fillRect(cx-w+6,y0-8,2*w-12,3);
   for(let wx=cx-w+14;wx<=cx+w-18;wx+=13)x.fillRect(wx,y0-h+5,4.5,9);
   if(L<.58){
    x.fillStyle=`rgba(255,188,96,${(.68-L)*1.3})`;
    for(let wx=cx-w+15;wx<=cx+w-17;wx+=26)x.fillRect(wx,y0-h+6,3.5,7);
   }
   x.fillStyle=rgb([cl(30),cl(38),cl(48)]);
   x.beginPath();
   x.moveTo(cx-w-18,y0-h+5);
   x.quadraticCurveTo(cx-w+4,y0-h,cx-w+11,y0-h-12);
   x.lineTo(cx+w-11,y0-h-12);
   x.quadraticCurveTo(cx+w-4,y0-h,cx+w+18,y0-h+5);
   x.closePath();x.fill();
   if(k===3){
    x.fillStyle='#e8c15a';
    x.fillRect(cx-w+9,y0-h-16,3.5,5);
    x.fillRect(cx+w-12.5,y0-h-16,3.5,5);
   }
   if(snow){
    x.fillStyle=`rgba(244,249,255,${.58+.34*L})`;
    x.beginPath();x.moveTo(cx-w-13,y0-h+3);x.lineTo(cx-w+11,y0-h-12);x.lineTo(cx+w-11,y0-h-12);x.lineTo(cx+w+13,y0-h+3);x.closePath();x.fill();
   }
  }
 }

 function frame(dt,t){
  const S=SE[se],h=+sl.value,d=Math.max(0,Math.sin(Math.PI*(h-5.5)/15)),dusk=clamp(1-d/.48,0,1)*(d>0?1:.2);
  sh.textContent=String(Math.floor(h)).padStart(2,'0')+':'+String(Math.floor(h%1*60)).padStart(2,'0');
  const top=mix([7,12,24],[38,88,142],d),hor=mix(mix([16,24,44],[164,200,224],d),[238,134,82],dusk*.82);
  const g=x.createLinearGradient(0,0,0,H*.64);g.addColorStop(0,rgb(top));g.addColorStop(1,rgb(hor));x.fillStyle=g;x.fillRect(0,0,W,H);
  if(d<.35){stars.forEach(s=>{x.fillStyle=`rgba(255,255,255,${(1-d/.35)*s[2]})`;x.fillRect(s[0],s[1],1.4,1.4)})}

  const a=Math.PI*(h-5.5)/15,sx=W*(.15+.70*(a/Math.PI)),sy=H*.56-Math.sin(a)*H*.42;
  const L=rt?.22+.78*d*(S.snow?1.18:1):.32+.38*d;
  const rtBounce=rt?d*(S.snow?.45:.22):0;

  // Sun disc & crepuscular volumetric god-rays
  if(d>0){
   const rg=x.createRadialGradient(sx,sy,3,sx,sy,rt?240:100);
   rg.addColorStop(0,`rgba(255,${228+22*d|0},${190+45*d|0},${rt?.94:.5})`);
   rg.addColorStop(.35,`rgba(255,${185+45*d|0},${130+60*d|0},${rt?.38:.15})`);
   rg.addColorStop(1,'rgba(255,190,140,0)');
   x.fillStyle=rg;x.fillRect(0,0,W,H);
   if(rt){
    x.save();
    for(let i=-3;i<=3;i++){
     const ang=.38+i*.16;
     const beam=x.createLinearGradient(sx,sy,sx+Math.cos(ang)*320,H*.75);
     beam.addColorStop(0,`rgba(255,235,195,${.11*d})`);
     beam.addColorStop(1,'rgba(255,235,195,0)');
     x.fillStyle=beam;
     x.beginPath();
     x.moveTo(sx,sy);
     x.lineTo(sx+i*95-45,H*.75);
     x.lineTo(sx+i*95+45,H*.75);
     x.closePath();x.fill();
    }
    x.restore();
   }
  }

  // Distant Mount Fuji silhouette in background
  const fx0=W*.44,fy0=H*.64,fh=H*.34;
  const fCol=mix([42*L,58*L,78*L],hor,.58);
  x.fillStyle=rgb(fCol);
  x.beginPath();
  x.moveTo(fx0-220,fy0);
  x.quadraticCurveTo(fx0-75,fy0-fh*.35,fx0-24,fy0-fh);
  x.lineTo(fx0+24,fy0-fh);
  x.quadraticCurveTo(fx0+75,fy0-fh*.35,fx0+220,fy0);
  x.closePath();x.fill();
  // Fuji snow cap
  x.fillStyle=rgb(mix([245*L,248*L,255*L],hor,.32));
  x.beginPath();
  x.moveTo(fx0-24,fy0-fh);x.lineTo(fx0+24,fy0-fh);
  x.quadraticCurveTo(fx0+42,fy0-fh*.68,fx0+56,fy0-fh*.56);
  x.lineTo(fx0+22,fy0-fh*.64);x.lineTo(fx0,fy0-fh*.54);x.lineTo(fx0-22,fy0-fh*.64);x.lineTo(fx0-56,fy0-fh*.56);
  x.quadraticCurveTo(fx0-42,fy0-fh*.68,fx0-24,fy0-fh);
  x.closePath();x.fill();

  // Layered mountain ridges with valley mist
  [
   [.24,.0055,[34,52,70],1.4,.46],
   [.17,.0085,[24,40,56],2.9,.26],
   [.11,.012,[16,30,44],4.2,.10]
  ].forEach(([amp,fr,col,ph,fogAmt],li)=>{
   const c2=S.snow?mix(col,[205,220,235],.65):col;
   const lit=mix([c2[0]*L,c2[1]*L,c2[2]*L],hor,fogAmt);
   x.fillStyle=rgb(lit);
   x.beginPath();x.moveTo(0,H*.64);
   for(let i=0;i<=W;i+=10){
    const ridge=H*.64-H*(amp*(.52+.48*Math.sin(i*fr+ph))+.028*Math.cos(i*.019-ph));
    x.lineTo(i,ridge);
   }
   x.lineTo(W,H*.64);x.closePath();x.fill();
   const mg=x.createLinearGradient(0,H*(.51+li*.03),0,H*.64);
   mg.addColorStop(0,'rgba(200,220,238,0)');
   mg.addColorStop(1,`rgba(${hor[0]|0},${hor[1]|0},${hor[2]|0},${.22*(1-li*.22)})`);
   x.fillStyle=mg;x.fillRect(0,H*.46,W,H*.19);
  });

  // Reflective Lake Biwa
  const lakeY=H*.64,lakeH=H*.16;
  const lg=x.createLinearGradient(0,lakeY,0,lakeY+lakeH);
  lg.addColorStop(0,rgb(mix(hor,[18,36,54],.45)));
  lg.addColorStop(1,rgb(mix(top,[10,22,36],.68)));
  x.fillStyle=lg;x.fillRect(0,lakeY,W,lakeH);

  if(d>.05){
   for(let rY=lakeY+4;rY<lakeY+lakeH-4;rY+=4.5){
    const k=(rY-lakeY)/lakeH;
    const rw=(16+k*58)*(rt?1.25:.7);
    const rxOff=Math.sin(t*.003+rY*.4)*6;
    x.fillStyle=`rgba(255,${200+40*d|0},150,${(.34-k*.22)*d})`;
    x.fillRect(sx-rw*.5+rxOff,rY,rw,1.8);
   }
  }

  // Far shore cliff & Tenshu Castle at x=W*0.65
  const cx=W*.65,cb=H*.66;
  x.fillStyle=hs(S.gr[0],S.gr[1],clamp(S.gr[2]*L*1.12,5,85));
  x.beginPath();x.moveTo(W*.44,lakeY);x.quadraticCurveTo(W*.62,lakeY-15,W,lakeY-6);x.lineTo(W,lakeY+24);x.lineTo(W*.44,lakeY+12);x.closePath();x.fill();

  drawCastle(cx,cb,L,S.snow,rtBounce);

  // Vermilion Torii Gate rising from the lake water (x=W*0.33)
  const tx=W*.33,ty=lakeY+32;
  const tc=v=>clamp(v*L+rtBounce*22,0,255);
  x.save();x.globalAlpha=.26;
  x.fillStyle=rgb([tc(165),tc(32),tc(38)]);
  x.fillRect(tx-32,ty,6,28);x.fillRect(tx+26,ty,6,28);
  x.restore();
  x.fillStyle=rgb([tc(35),tc(38),tc(44)]);
  x.fillRect(tx-34,ty-12,9,14);x.fillRect(tx+25,ty-12,9,14);
  x.fillStyle=rgb([tc(192),tc(38),tc(44)]);
  x.fillRect(tx-32,ty-74,6,64);x.fillRect(tx+26,ty-74,6,64);
  x.fillRect(tx-42,ty-56,84,5);
  x.fillRect(tx-4,ty-70,8,15);
  x.beginPath();
  x.moveTo(tx-54,ty-72);x.quadraticCurveTo(tx,ty-66,tx+54,ty-72);
  x.lineTo(tx+49,ty-79);x.quadraticCurveTo(tx,ty-73,tx-49,ty-79);x.closePath();x.fill();
  x.fillStyle=rgb([tc(26),tc(30),tc(38)]);
  x.beginPath();
  x.moveTo(tx-56,ty-77);x.quadraticCurveTo(tx,ty-71,tx+56,ty-77);
  x.lineTo(tx+51,ty-82);x.quadraticCurveTo(tx,ty-76,tx-51,ty-82);x.closePath();x.fill();

  // Foreground shoreline & GPU Micropolygon meadow
  const fgY=H*.76;
  x.fillStyle=hs(S.gr[0],S.gr[1],clamp(S.gr[2]*L*1.3,4,90));
  x.beginPath();
  x.moveTo(0,fgY-10);
  x.quadraticCurveTo(W*.25,fgY+12,W*.55,fgY-4);
  x.quadraticCurveTo(W*.82,fgY-14,W,fgY-6);
  x.lineTo(W,H);x.lineTo(0,H);x.closePath();x.fill();

  // Stone Lantern (Tōrō) at x=W*0.46
  const lx=W*.46,ly=fgY+28;
  x.fillStyle=rgb([tc(108),tc(112),tc(120)]);
  x.fillRect(lx-10,ly,20,5);x.fillRect(lx-6,ly-19,12,19);x.fillRect(lx-9.5,ly-23,19,4);
  x.fillRect(lx-7,ly-33,14,10);
  x.beginPath();x.moveTo(lx-14,ly-33);x.quadraticCurveTo(lx,ly-44,lx+14,ly-33);x.closePath();x.fill();
  const flick=.85+.15*Math.sin(t*.012);
  if(rt){
   const lg2=x.createRadialGradient(lx,ly-28,2,lx,ly-8,48);
   lg2.addColorStop(0,`rgba(255,190,90,${.55*flick})`);
   lg2.addColorStop(1,'rgba(255,160,60,0)');
   x.fillStyle=lg2;x.beginPath();x.arc(lx,ly-16,48,0,7);x.fill();
  }
  x.fillStyle=`rgba(255,222,135,${.92*flick})`;
  x.fillRect(lx-3.5,ly-31,7,6);

  // Swaying lakeside reeds
  const wind=Math.sin(t*.0022)*4;
  x.strokeStyle=S.snow?`rgba(220,232,245,${.65*L})`:hs(S.gr[0],S.gr[1]+10,clamp(S.gr[2]*L*1.75,12,85));
  x.lineWidth=1.2;
  x.beginPath();
  reeds.forEach(rd=>{
   const ry=fgY+8+(rd.x%28);
   const bend=wind+Math.sin(t*.003+rd.ph)*2.5;
   x.moveTo(rd.x,ry);
   x.quadraticCurveTo(rd.x+bend*.5,ry-rd.h*.5,rd.x+bend,ry-rd.h);
  });
  x.stroke();

  // Render Recursive Botanical Trees (gnarled bark + fine needle/blossom clusters)
  const lean=Math.cos(a)*1.2;
  trees.forEach(tr=>{
   const bx=tr.x0,by=tr.y0,s=tr.s;
   if(rt&&d>.05){
    x.fillStyle=`rgba(0,0,0,${.32*d})`;
    x.beginPath();x.ellipse(bx-lean*28*s,by+3,36*s*(1+Math.abs(lean)*.5),8*s,0,0,7);x.fill();
    if(S.dens>.2){
     const lc=S.leaf[0];
     x.fillStyle=rgb(lc);x.globalAlpha=.14*d;
     x.beginPath();x.ellipse(bx,by+5,44*s,10*s,0,0,7);x.fill();
     x.globalAlpha=1;
    }
   }
   // Draw gnarled tapered branches
   x.lineCap='round';
   tr.segs.forEach(sg=>{
    const sway=(6-sg.d)*wind*.18;
    x.strokeStyle=rgb([tc(58-sg.d*3),tc(40-sg.d*2),tc(28-sg.d*1.5)]);
    x.lineWidth=sg.w;
    x.beginPath();
    x.moveTo(sg.x1+sway*.5,sg.y1);
    x.lineTo(sg.x2+sway,sg.y2);
    x.stroke();
   });
   // Draw fine botanical foliage / blossom clusters or winter snow frost on twigs
   if(S.dens>.2){
    tr.clusters.forEach(cl=>{
     const baseC=S.leaf[cl.ci];
     const shade=clamp(L*cl.sh*1.15,.22,1.15);
     x.fillStyle=rgb([clamp(baseC[0]*shade+rtBounce*18,0,255),clamp(baseC[1]*shade+rtBounce*14,0,255),clamp(baseC[2]*shade+rtBounce*10,0,255)]);
     const cx2=cl.x+wind*.55,cy2=cl.y;
     x.beginPath();
     x.ellipse(cx2,cy2,cl.rad*1.35,cl.rad*.78,cl.ang,0,7);
     x.fill();
    });
   }else{
    x.fillStyle=`rgba(238,246,255,${.78*L})`;
    tr.clusters.forEach((cl,ci)=>{
     if(ci%2===0){
      x.beginPath();
      x.ellipse(cl.x+wind*.25,cl.y-1.5,cl.rad*.75,cl.rad*.35,0,0,7);
      x.fill();
     }
    });
   }
  });

  // Falling seasonal particles
  if(S.fall){
   ps.forEach(p=>{
    p.y+=dt*.001*(S.fall==='snow'?36:48)*p.v;
    p.x+=Math.sin(t*.0012+p.p)*.5+dt*.011*(S.fall==='snow'?.15:.5)*p.v;
    if(p.y>H){p.y=-8;p.x=Math.random()*W}
    if(p.x>W)p.x=0;
    x.fillStyle=S.fall==='snow'?'rgba(255,255,255,.86)':S.fall==='petal'?'rgba(248,198,216,.88)':'rgba(218,96,42,.9)';
    x.beginPath();
    x.ellipse(p.x,p.y,S.fall==='snow'?2:3.8,S.fall==='snow'?2:2,p.p+t*.002,0,7);
    x.fill();
   });
  }
  x.font='600 15px JetBrains Mono,monospace';x.fillStyle='rgba(255,255,255,.9)';
  x.fillText(`${rt?C.canvasOn:C.canvasOff} · ${S.name.toUpperCase()}`,14,22);
 }
 return{tick:frame};
}
