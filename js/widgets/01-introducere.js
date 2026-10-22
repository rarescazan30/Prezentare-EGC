/* Slide 1 · partea interactivă (mTitle). Textele vin din content/01-introducere.js. */
'use strict';
function mTitle(root){
 const c=$('#dnaC',root),x=c.getContext('2d'),W=c.width,H=c.height;
 return{tick(dt,t){
  x.fillStyle='#03060b';x.fillRect(0,0,W,H);
  x.strokeStyle='rgba(145,190,225,.08)';x.lineWidth=1;x.beginPath();
  for(let i=0;i<=W;i+=35){x.moveTo(i,0);x.lineTo(i,H)}for(let j=0;j<=H;j+=35){x.moveTo(0,j);x.lineTo(W,j)}x.stroke();
  const cy=H/2;
  for(let i=0;i<24;i++){
   const px=24+i*13.2,ph=t*.0025+i*.32,y1=cy+Math.sin(ph)*68,y2=cy-Math.sin(ph)*68,z=Math.cos(ph);
   x.strokeStyle='rgba(110,205,250,.34)';x.lineWidth=1.5;
   x.beginPath();x.moveTo(px,y1);x.lineTo(px,y2);x.stroke();
   x.fillStyle=z>0?'hsl(200 85% 66%)':'#e0243f';
   x.beginPath();x.arc(px,y1,3.2+z*1.1,0,7);x.fill();
   x.fillStyle=z<0?'hsl(200 85% 66%)':'#e8c15a';
   x.beginPath();x.arc(px,y2,3.2-z*1.1,0,7);x.fill();
  }
  const cx=W-90,r=62+Math.sin(t*.003)*3;
  x.strokeStyle='rgba(232,193,90,.35)';x.lineWidth=1.5;x.setLineDash([5,4]);
  x.beginPath();x.arc(cx,cy,r,t*.0008,t*.0008+5.2);x.stroke();x.setLineDash([]);
  x.strokeStyle='rgba(110,205,250,.22)';x.beginPath();x.arc(cx,cy,r+11,-t*.0006,-t*.0006+4.4);x.stroke();
  drawCrestCanvas(x,cx,cy,96,'rgba(224,36,63,.88)','rgba(234,242,248,.65)');
  x.font='600 15px JetBrains Mono,monospace';x.fillStyle='rgba(145,190,225,.8)';
  x.fillText(SLIDE[1].textDesen,16,22);
 }};
}
