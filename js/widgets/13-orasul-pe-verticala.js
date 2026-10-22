/* Slide 13 · partea interactivă (mSection). Textele vin din content/13-orasul-pe-verticala.js. */
'use strict';
function mSection(root){
 const a=$('#secA',root),mk=$('#secM',root),zs=$$('.zrow',root),btn=$('#secS',root);
 let ac=null,wind=null,st=null,iv=null,playing=false;
 const zone=v=>v>=.75?0:v>=.48?1:v>=.24?2:3;
 const upd=()=>{const v=+a.value;mk.setAttribute('transform',`translate(0 ${(1-v)*330+10})`);const z=zone(v);zs.forEach((e,i)=>e.classList.toggle('on',i===z));
  if(ac){const t=ac.currentTime;wind.g.gain.setTargetAtTime(playing?.18*Math.pow(v,1.3):0,t,.15);st.g.gain.setTargetAtTime(playing?.2*Math.pow(1-v,1.1):0,t,.15)}};
 a.oninput=upd;
 zs.forEach(z=>z.onclick=()=>{a.value=z.dataset.v;upd()});
 btn.onclick=()=>{
  try{
   if(!ac){ac=new(window.AudioContext||window.webkitAudioContext)();const len=ac.sampleRate*2,buf=ac.createBuffer(1,len,ac.sampleRate),d=buf.getChannelData(0);let b=0;for(let i=0;i<len;i++){b=(b+.02*(Math.random()*2-1))/1.02;d[i]=b*3.5}
    const mk2=(f,type,q)=>{const s=ac.createBufferSource();s.buffer=buf;s.loop=true;const fl=ac.createBiquadFilter();fl.type=type;fl.frequency.value=f;fl.Q.value=q;const g=ac.createGain();g.gain.value=0;s.connect(fl);fl.connect(g);g.connect(ac.destination);s.start();return{g,fl}};
    wind=mk2(380,'lowpass',.7);st=mk2(900,'bandpass',.8);
    iv=setInterval(()=>{st.fl.frequency.setTargetAtTime(650+Math.random()*700,ac.currentTime,.1)},220)}
   playing=!playing;if(playing&&ac.state==='suspended')ac.resume();btn.classList.toggle('on',playing);btn.textContent=playing?SLIDE[13].sunetOpreste:SLIDE[13].sunetAsculta;upd();
  }catch(e){btn.textContent=SLIDE[13].sunetIndisponibil}
 };
 upd();
 return{off(){playing=false;if(ac){upd();clearInterval(iv);iv=null;ac.close().catch(()=>{});ac=null}}};
}
