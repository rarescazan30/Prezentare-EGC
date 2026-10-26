/* Slide 6 · partea interactivă (mKit). Textele vin din content/06-piese-si-instante.js.
   Un cartier văzut de sus, construit din 3 piese. Fiecare clădire e aceeași piesă,
   desenată cu altă transformare: translație, rotație (0/90/180/270°) și scalare. */
'use strict';
function mKit(root){
 const c=$('#kit',root),x=c.getContext('2d'),W=c.width,H=c.height,C=SLIDE[6],sel=$('#kitSel',root);
 /* cele 3 piese, în coordonatele lor locale (centrate în 0,0) */
 const PIESE=[
  {nume:'A',p:[[-30,-21],[30,-21],[30,21],[-30,21]]},
  {nume:'B',p:[[-31,-31],[31,-31],[31,0],[0,0],[0,31],[-31,31]]},
  {nume:'C',p:[[-21,-21],[21,-21],[21,21],[-21,21]]}
 ];
 const COL=[[96,128,160],[120,110,96],[84,118,112],[140,120,104],[104,104,132]];
 let inst=[],ales=null,seed=1;
 function genereaza(){
  const r=rng(seed++);inst=[];
  const pas=82,ox=46,oy=46;
  for(let gy=0;gy*pas+oy<H-30;gy++)for(let gx=0;gx*pas+ox<W-30;gx++){
   if(gx%4===3||gy%3===2)continue; // străzi
   const k=Math.floor(r()*3);
   inst.push({k,x:ox+gx*pas+(r()-.5)*10,y:oy+gy*pas+(r()-.5)*10,rot:Math.floor(r()*4)*90,s:Math.round((.8+r()*.45)*100)/100,col:COL[Math.floor(r()*COL.length)]});
  }
  alege(inst[Math.floor(r()*inst.length)]);
 }
 function alege(o){
  ales=o;
  sel.textContent=C.textSelectie.replace('{piesa}',PIESE[o.k].nume).replace('{x}',Math.round(o.x)).replace('{y}',Math.round(o.y)).replace('{r}',o.rot).replace('{s}',String(o.s).replace('.',','));
 }
 function deseneaza(){
  x.fillStyle='#05080e';x.fillRect(0,0,W,H);
  x.strokeStyle='rgba(145,190,225,.07)';x.lineWidth=1;x.beginPath();
  for(let i=0;i<=W;i+=41){x.moveTo(i,0);x.lineTo(i,H)}for(let j=0;j<=H;j+=41){x.moveTo(0,j);x.lineTo(W,j)}x.stroke();
  inst.forEach(o=>{
   x.save();
   x.translate(o.x,o.y);x.rotate(o.rot*Math.PI/180);x.scale(o.s,o.s); // M = T · R · S
   x.beginPath();PIESE[o.k].p.forEach(([a,b],i)=>i?x.lineTo(a,b):x.moveTo(a,b));x.closePath();
   x.fillStyle=`rgb(${o.col.join(',')})`;x.fill();
   x.lineWidth=(o===ales?3:1.2)/o.s;x.strokeStyle=o===ales?'#e8c15a':'rgba(10,16,24,.9)';x.stroke();
   x.restore();
  });
  x.font='600 15px JetBrains Mono,monospace';x.fillStyle='rgba(234,242,248,.9)';x.fillText(C.textDesen,14,24);
  x.fillStyle='rgba(169,192,211,.9)';x.fillText(C.legenda.replace('{piese}',PIESE.length).replace('{instante}',inst.length),14,H-14);
 }
 $('#kitB',root).onclick=()=>{genereaza();deseneaza()};
 c.onpointerdown=e=>{const [px,py]=pos(e,c);let best=null,bd=1e9;inst.forEach(o=>{const d=Math.hypot(o.x-px,o.y-py);if(d<bd){bd=d;best=o}});if(best&&bd<45){alege(best);deseneaza()}};
 genereaza();deseneaza();
 return{};
}
