/* Construiește cele 21 de slide-uri din textele din content/ (un fișier pe slide).
   Aici e doar așezarea în pagină; textul se schimbă în content/. */
'use strict';
/* Barele graficului de pe slide-ul 5, din lista de jocuri (content/05-…) */
const BARS=SLIDE[5].jocuri.flatMap(g=>g.harti.map(m=>({n:g.scurt+' · '+m.loc,y:g.an,v:m.km2,e:g.epoca,h:m.hasurat,d:m.text})));

const SL=[];
const add=o=>{SL.push(o)};

/* Șabloane: transformă textele din content/ în slide-uri */
const meta=n=>({t:SLIDE[n].bara,year:SLIDE[n].an});
const CARD=k=>`<div class="card${k.rosu?' crimson-edge':''}"><div class="tag"${k.rosu?' style="color:var(--creed)"':''}>${k.eticheta}</div>${k.cifra?`<div class="big"${k.rosu?' style="color:var(--creed)"':''}>${k.cifra}</div>`:''}<p class="small">${k.text}</p></div>`;
const CARDS3=c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g3">${c.carduri.map((k,i)=>`<div ${rs(i+2)}>${CARD(k)}</div>`).join('')}</div></div>`;

/* SLIDE 1 */
add({...meta(1),hue:202,fx:'data',html:(c=>`<div class="in">
 <div class="g2" style="align-items:center">
  <div style="display:grid;gap:22px">
   <div class="kicker rise" style="--i:0">${c.supratitlu}</div>
   <h1 class="k">${c.titlu}</h1>
   <p class="lead rise" style="--i:2">${c.subtitlu}</p>
   <div class="rise" style="--i:3"><div class="count"><b id="num">${c.contor}</b><span>${c.contorUnitate}</span></div><div class="clabel" id="clb">${c.contorText}</div></div>
  </div>
  <div ${rs(2)}><canvas class="sim" id="dnaC" width="520" height="250" aria-label="Hologramă Animus"></canvas></div>
 </div>
 <div class="g3 rise" style="--i:3">${c.carduri.map(CARD).join('')}</div>
 <div class="row rise" style="--i:4"><button class="btn pri" data-act="next">${c.buton}</button></div>
</div>`)(SLIDE[1]),mount:mTitle});

/* SLIDE 2 */
add({...meta(2),hue:198,fx:'dust',html:CARDS3(SLIDE[2])});

/* SLIDE 3 */
add({...meta(3),hue:200,fx:'dust',html:CARDS3(SLIDE[3])});

/* SLIDE 4 */
add({...meta(4),hue:206,fx:'data',html:CARDS3(SLIDE[4])});

/* SLIDE 5 */
add({...meta(5),hue:204,fx:'data',html:(c=>`<div class="in tight">${HEAD(c.supratitlu,c.titlu)}
 <div class="row rise" style="--i:1"><button class="btn on" id="bLog">${c.butonScara}: ${c.scaraLogaritmica}</button><button class="btn" id="bPlay">${c.butonReda}</button><span class="note">${c.nota}</span></div>
 <div class="card rise" style="--i:2"><div id="bars">${BARS.map((b,i)=>`<div class="brow" tabindex="0" data-i="${i}" style="--c:${['hsl(202 55% 52%)','hsl(192 75% 58%)','hsl(210 85% 68%)'][b.e]}"><div class="n"><b>${b.n.split(' · ')[0]}</b> · ${b.n.split(' · ')[1]}</div><div class="btrack"><div class="bar${b.h?' hatch':''}"></div></div><div class="v">${fk(b.v)} km²</div></div>`).join('')}</div>
  <div class="axis"><span></span><div class="ax" id="ax"></div><span></span></div>
  <div class="bdet" id="bdet">${c.textJos}</div></div></div>`)(SLIDE[5]),mount:mBars});

/* SLIDE 6 */
add({...meta(6),hue:195,fx:'motes',html:CARDS3(SLIDE[6])});

/* SLIDE 7 */
add({...meta(7),hue:188,fx:'data',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><div class="card"><div class="row" style="justify-content:space-between;margin-bottom:6px"><div><div class="tag">${c.etichetaTest}</div></div><button class="btn pri" id="aRun">${c.butonPornire}</button></div>
   <canvas class="sim" id="atl" width="760" height="400"></canvas></div></div>
  <div style="display:grid;gap:12px;min-width:0">
   <div ${rs(3)}><div class="card"><div class="row" style="gap:28px"><div class="stat"><span class="big" id="atn">0</span><span class="lab">${c.verificate}</span></div><div class="stat"><span class="big" id="ate" style="color:var(--creed)">0</span><span class="lab">${c.probleme}</span></div></div><p class="note" id="atr" style="margin-top:6px">${c.textInitial}</p></div></div>
   <div ${rs(4)}><div class="card"><div class="tag">${c.etichetaDespre}</div><p class="small">${c.despre}</p></div></div>
  </div>
 </div></div>`)(SLIDE[7]),mount:mAtlas});

/* SLIDE 8 */
add({...meta(8),hue:200,fx:'motes',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><canvas class="sim" id="gi" width="880" height="460" aria-label="Cameră gotică 3D cu fereastră decupată"></canvas>
   <div class="row" style="margin-top:8px"><label class="lab" style="flex:1 1 220px;display:flex;gap:10px;align-items:center">${c.soare} <input type="range" id="giT" min="0" max="1" step=".005" value=".45" aria-label="Momentul zilei"><span id="giH" class="mono">11:30</span></label></div></div>
  <div style="display:grid;gap:10px;min-width:0">
   <div ${rs(3,'seg')}>${c.moduri.map((m,i)=>`<button class="btn${i?'':' on'}" data-m="${i}">${m.buton}</button>`).join('')}</div>
   <div ${rs(4)}><div class="card"><div class="card-head"><div class="tag" id="giTag">${c.moduri[0].eticheta}</div></div><div class="big" id="giBig" style="margin:2px 0">${c.moduri[0].cifra}</div><p class="small" id="giTxt"></p></div></div>
   <div ${rs(5)}><div class="card"><div id="giBars" style="display:grid;gap:8px"></div></div></div>
  </div></div></div>`)(SLIDE[8]),mount:mGI});

/* SLIDE 9 */
add({...meta(9),hue:212,fx:'petals',html:(c=>`<div class="in tight">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="row rise" style="--i:1"><div class="seg" id="seaS">${c.anotimpuri.map((q,i)=>`<button class="btn${i===1?' on':''}" data-s="${i}">${q.iconita} ${q.nume}</button>`).join('')}</div><button class="btn on" id="seaR">${c.butonLumina}: ${c.pornita}</button></div>
 <div ${rs(2)}><canvas class="sim" id="sea" width="960" height="420" aria-label="Peisaj japonez cu pini Akamatsu, castel Tenshu și poartă Torii"></canvas></div>
 <div class="g3 rise" style="--i:3"><label class="lab">${c.ora} <input type="range" id="seaT" min="5.5" max="20.5" step=".05" value="14.5"> <span class="mono" id="seaH">14:30</span></label>
  <div><div class="lab">${c.densitate}</div><div class="btrack" style="margin-top:6px"><div class="bar" id="mD" style="width:100%;background:var(--accent)"></div></div></div>
  <div><div class="lab">${c.reflexie}</div><div class="btrack" style="margin-top:6px"><div class="bar" id="mA" style="width:20%;background:var(--accent)"></div></div></div></div>
</div>`)(SLIDE[9]),mount:mSeason});

/* SLIDE 10 */
add({...meta(10),hue:195,fx:'dust',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g2 w">
  <div ${rs(2)} style="min-width:0"><canvas class="sim" id="crw" width="960" height="440" style="cursor:crosshair" aria-label="Simulare reciclare AI în piața din Paris"></canvas>
   <div class="row" style="margin-top:8px"><label class="lab" style="flex:1 1 220px;display:flex;gap:10px;align-items:center">${c.etichetaCursor} <input type="range" id="crwN" min="2000" max="12000" step="500" value="12000"><span class="mono" id="crwNv">12.000</span></label><span class="note">${c.indiciu}</span></div></div>
  <div style="display:grid;gap:10px;min-width:0">
   <div ${rs(3)}><div class="card"><div class="card-head"><div class="tag">${c.etichetaVii}</div></div><div class="big" id="cA">40</div><div class="lab">${c.vii}</div></div></div>
   <div ${rs(4)}><div class="card"><div class="tag">${c.etichetaDetaliate}</div><div class="big" id="cM">120</div><div class="lab">${c.detaliate}</div></div></div>
   <div ${rs(5)}><div class="card"><div class="row" style="justify-content:space-between"><div><div class="big" id="cL" style="font-size:28px;color:var(--mute)">11.840</div><div class="lab">${c.figuranti}</div></div><div><div class="big" id="cR" style="font-size:28px;color:var(--creed)">0</div><div class="lab">${c.schimburi}</div></div></div><p class="small" id="cP" style="margin-top:4px"></p></div></div>
  </div></div></div>`)(SLIDE[10]),mount:mCrowd});

/* SLIDE 11 */
add({...meta(11),hue:190,fx:'data',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g2 w">
  <div ${rs(2)} style="min-width:0"><canvas class="sim" id="lyn" width="900" height="460" style="cursor:pointer" aria-label="Harta cognitivă Kevin Lynch"></canvas>
   <div class="row" style="margin-top:8px"><button class="btn" id="lFog">${c.butonCeata}</button><span class="note">${c.notaCeata}</span></div></div>
  <div style="display:grid;gap:10px;min-width:0">
   <div ${rs(3,'seg')} id="lChips"></div>
   <p class="note rise" style="--i:3">${c.nota}</p>
   <div ${rs(4)}><div class="card"><div class="card-head"><div class="tag" id="lTag">1. ${c.elemente[0].nume}</div></div><p class="small" id="lDef"></p><div class="lab" style="margin-top:4px;color:var(--accent)">${c.etichetaInJoc}</div><p class="small" id="lImp" style="color:var(--ink)"></p></div></div>
  </div></div></div>`)(SLIDE[11]),mount:mLynch});

/* SLIDE 12 */
add({...meta(12),hue:196,fx:'motes',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><svg class="facade" id="fac" viewBox="0 0 640 380" role="img" aria-label="Palat renascentist interactiv">
   <rect width="640" height="380" fill="#04080e"/>
   <g class="ev-only" stroke="var(--accent)" stroke-opacity=".22"><path d="M0 95H640M0 190H640M0 285H640M160 0V380M320 0V380M480 0V380" fill="none"/></g>
   <rect x="60" y="58" width="440" height="286" fill="#182432" stroke="#39526b" stroke-width="1.5"/>
   <g class="part" data-k="rost" tabindex="0" role="button" aria-label="Zidărie rustică bugnato"><rect x="60" y="242" width="440" height="102" fill="#1f3042" stroke="#4d6d8c"/>
    <path d="M60 268H500M60 295H500M60 322H500M110 242V268M200 242V268M290 242V268M380 242V268M470 242V268M155 268V308M245 268V295M335 268V295M425 268V295M110 295V322M200 295V322M290 295V322M380 295V322M470 295V322" stroke="#5c82a6" stroke-width="1.8" fill="none"/></g>
   <g class="part" data-k="ferestre" tabindex="0" role="button" aria-label="Ferestre cu menouri">
    <path d="M110 192V124a27 27 0 0 1 54 0V192Z M250 192V124a27 27 0 0 1 54 0V192Z M390 192V124a27 27 0 0 1 54 0V192Z" fill="#0b131c" stroke="#648cb3" stroke-width="3.5"/>
    <path d="M137 97V192M110 152H164M277 97V192M250 152H304M417 97V192M390 152H444" stroke="#648cb3" stroke-width="3" fill="none"/></g>
   <g class="part" data-k="cornisa" tabindex="0" role="button" aria-label="Cornișă vitruviană"><rect x="40" y="34" width="480" height="25" fill="#283d54" stroke="#76a1cc" stroke-width="2"/>
    <path d="M52 59v11M76 59v11M100 59v11M124 59v11M148 59v11M172 59v11M196 59v11M220 59v11M244 59v11M268 59v11M292 59v11M316 59v11M340 59v11M364 59v11M388 59v11M412 59v11M436 59v11M460 59v11M484 59v11" stroke="#76a1cc" stroke-width="5"/></g>
   <g class="part" data-k="grinda" tabindex="0" role="button" aria-label="Grinzi pentru Leap of Faith"><rect x="500" y="128" width="112" height="12" fill="#3a2e21" stroke="#c89d54" stroke-width="2"/><path d="M595 128 L606 116 L615 128 Z" fill="var(--eagle)"/><rect x="500" y="204" width="80" height="12" fill="#3a2e21" stroke="#c89d54" stroke-width="2"/></g>
   <g class="part" data-k="arc" tabindex="0" role="button" aria-label="Arc butant"><rect x="8" y="144" width="34" height="200" fill="#1e2f42" stroke="#5c82a6" stroke-width="2"/><path d="M42 154Q60 114 60 194L60 224Q50 184 42 184Z" fill="#1e2f42" stroke="#5c82a6" stroke-width="2"/></g>
   <rect x="0" y="344" width="640" height="36" fill="#070d14"/>
   <g class="ev-only">
    <path d="M137 338 L137 250 L277 192 L277 46 L500 46 L602 128" fill="none" stroke="var(--eagle)" stroke-width="2.5" stroke-dasharray="6 4"/>
    <circle cx="137" cy="295" r="5" fill="var(--eagle)"/><circle cx="137" cy="250" r="5" fill="var(--eagle)"/><circle cx="277" cy="192" r="5" fill="var(--eagle)"/><circle cx="277" cy="46" r="5" fill="var(--eagle)"/><circle cx="602" cy="128" r="6" fill="var(--creed)"/>
   </g>
  </svg>
  <div class="row" style="margin-top:8px"><button class="btn on" id="evB">${c.butonVultur}</button><span class="note">${c.nota}</span></div></div>
  <div style="display:grid;gap:10px;min-width:0">
   <div ${rs(3)}><div class="card" id="facC"><div class="card-head"><div class="tag" id="facT">${c.parti[0].nume}</div></div>
    <div style="display:grid;gap:10px;margin-top:4px">
     <div style="padding:12px;background:var(--panel-alt);border-left:3px solid var(--mute)"><div class="lab">${c.etichetaIstorie}</div><p class="small" id="facH" style="margin-top:4px"></p></div>
     <div style="padding:12px;background:var(--panel-alt);border-left:3px solid var(--eagle)"><div class="lab" style="color:var(--eagle)">${c.etichetaJoc}</div><p class="small" id="facG" style="margin-top:4px;color:var(--ink)"></p></div>
    </div></div></div>
  </div></div></div>`)(SLIDE[12]),mount:mFacade});

/* SLIDE 13 */
add({...meta(13),hue:206,fx:'spray',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><svg class="facade" id="sec" viewBox="0 0 600 350" role="img" aria-label="Secțiune transversală verticală">
   <rect width="600" height="350" fill="#05090f"/>
   <g fill-opacity=".11"><rect y="0" width="600" height="88" fill="hsl(206 70% 55%)"/><rect y="88" width="600" height="102" fill="hsl(206 50% 42%)"/><rect y="190" width="600" height="70" fill="hsl(206 60% 48%)"/><rect y="260" width="600" height="90" fill="hsl(206 40% 35%)"/></g>
   <path d="M0 350V280L40 280 40 235 90 235 90 255 130 255 130 195 175 195 175 225 215 225 215 188 245 188 255 110 262 40 269 110 279 188 320 188 320 225 360 225 360 202 410 202 410 245 450 245 450 212 500 212 500 258 545 258 545 280 600 280V350Z" fill="#0e1824" stroke="var(--line-strong)"/>
   <path d="M262 42 Q295 155 298 325" fill="none" stroke="var(--creed)" stroke-width="2" stroke-dasharray="5 5"/>
   <g id="secM"><path d="M0 0H600" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 5"/><polygon points="22,-8 34,0 22,8" fill="var(--creed)"/></g>
   <g font-family="JetBrains Mono,monospace" font-size="14" fill="#b4c7d8">${c.niveluri.map((z,i)=>`<text x="585" y="${[22,108,212,278][i]}" text-anchor="end">${z.textDesen}</text>`).join('')}</g>
  </svg>
  <div class="row" style="margin-top:8px;align-items:center"><label class="lab" style="flex:1 1 220px;display:flex;gap:10px;align-items:center">${c.altitudine} <input type="range" id="secA" min="0" max="1" step=".005" value=".88" aria-label="Altitudine"></label><button class="btn" id="secS">${c.sunetAsculta}</button></div></div>
  <div style="display:grid;gap:7px;min-width:0" id="zones">
   ${c.niveluri.map((z,i)=>`<div class="zrow" data-z="${i}" data-v="${['0.88','0.60','0.35','0.10'][i]}"><b>${z.titlu}</b><span>${z.text}</span></div>`).join('')}
  </div></div></div>`)(SLIDE[13]),mount:mSection});

/* SLIDE 14 */
add({...meta(14),hue:198,fx:'motes',html:CARDS3(SLIDE[14])});

/* SLIDE 15 */
add({...meta(15),hue:186,fx:'leaves',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}<p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g2">
  <div ${rs(2)}><div class="card"><div class="card-head"><div class="tag">${c.carduri[0].eticheta}</div></div>
   <svg viewBox="0 0 360 130" class="facade" aria-label="Grila stradală colonială"><rect width="360" height="130" fill="#071019"/><path d="M0 26H360M0 52H360M0 78H360M0 104H360M60 0V130M120 0V130M180 0V130M240 0V130M300 0V130" stroke="var(--creed)" stroke-opacity=".55" fill="none"/></svg>
   <p class="small" style="margin-top:6px">${c.carduri[0].text}</p></div></div>
  <div ${rs(3)}><div class="card"><div class="card-head"><div class="tag">${c.carduri[1].eticheta}</div></div>
   <svg viewBox="0 0 360 130" class="facade" aria-label="Frontiera organică"><rect width="360" height="130" fill="#071019"/><g fill="var(--accent)" opacity=".8"><circle cx="55" cy="35" r="7"/><circle cx="145" cy="95" r="8"/><circle cx="240" cy="42" r="7"/><circle cx="310" cy="102" r="8"/></g><path d="M20 112Q140 48 340 20" stroke="var(--eagle)" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/></svg>
   <p class="small" style="margin-top:6px">${c.carduri[1].text}</p></div></div>
 </div></div>`)(SLIDE[15])});

/* SLIDE 16 */
add({...meta(16),hue:182,fx:'dust',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><svg viewBox="0 0 540 210" class="facade" id="palSvg" aria-label="Secțiune stratigrafică Valhalla">
    <rect width="540" height="210" fill="#05090f"/>
    <g id="pL0" opacity="1"><rect x="14" y="14" width="512" height="54" fill="rgba(120,200,245,.15)" stroke="var(--accent)"/><path d="M60 68 V28 L85 18 L110 28 V68 M230 68 V32 H290 V68 M400 68 V26 L430 16 L460 26 V68" stroke="var(--accent)" stroke-width="2" fill="none"/><text x="24" y="46" fill="#eaf2f8" font-family="JetBrains Mono,monospace" font-size="13.5">${c.straturi[0].textDesen}</text></g>
    <g id="pL1" opacity=".4"><rect x="14" y="78" width="512" height="54" fill="rgba(232,193,90,.12)" stroke="var(--eagle)"/><path d="M70 132 V94 A16 16 0 0 1 102 94 V132 M118 132 V94 A16 16 0 0 1 150 94 V132 M360 132 V92 H450 V132" stroke="var(--eagle)" stroke-width="2" fill="none"/><text x="24" y="110" fill="#eaf2f8" font-family="JetBrains Mono,monospace" font-size="13.5">${c.straturi[1].textDesen}</text></g>
    <g id="pL2" opacity=".4"><rect x="14" y="142" width="512" height="54" fill="rgba(224,36,63,.12)" stroke="var(--creed)"/><path d="M90 196 V154 H135 V196 M250 196 V154 H295 V196 M410 196 V154 H455 V196" stroke="var(--creed)" stroke-width="3" fill="none"/><text x="24" y="174" fill="#eaf2f8" font-family="JetBrains Mono,monospace" font-size="13.5">${c.straturi[2].textDesen}</text></g>
   </svg></div>
  <div ${rs(3)} style="min-width:0"><div class="pal" id="pal">
    ${c.straturi.map((l,i)=>`<button class="layer${i?'':' on'}" data-l="${i}"><b>${l.titlu}</b><span>${l.text}</span></button>`).join('')}
   </div></div>
 </div></div>`)(SLIDE[16]),mount:mPal});

/* SLIDE 17 */
add({...meta(17),hue:196,fx:'dust',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="chain rise" style="--i:1" id="chain">
  ${c.lant.map((k,i)=>`<button class="node${i?'':' on'}"><b>${k.titlu}</b>${k.text}</button>`).join('')}</div>
 <div class="g2">
  <div ${rs(2)}><div class="card"><div class="card-head"><div class="tag">${c.etichetaStudiu}</div></div>
   <div class="seg" style="margin:4px 0"><button class="btn" id="rW">${c.butonVest}</button><button class="btn on" id="rM">${c.butonEst}</button></div>
   <p id="rTxt" class="small" style="padding:10px;background:var(--panel-alt);border-left:3px solid var(--accent)"></p></div></div>
  <div ${rs(3)}><div class="card"><div class="card-head"><div class="tag">${c.etichetaLoc}</div></div>
   <p class="small">${c.textLoc}</p></div></div>
 </div></div>`)(SLIDE[17]),mount:mFlow});

/* SLIDE 18 */
add({...meta(18),hue:202,fx:'motes',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g3" id="lies">${c.carduri.map((k,i)=>`<div ${rs(i+1)}><button class="flip" aria-label="${k.titlu}"><div class="fi"><div class="fa"><div class="card-head"><div class="tag">${k.eticheta}</div></div><h3>${k.titlu}</h3><p>${k.fata}</p><span class="note" style="margin-top:auto;color:var(--accent)">${c.indiciu}</span></div><div class="fb"><div class="tag">${c.etichetaSpate}</div><p>${k.spate}</p></div></div></button></div>`).join('')}</div></div>`)(SLIDE[18]),mount:mLies});

/* SLIDE 19 */
add({...meta(19),hue:192,fx:'motes',html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)+`<p class="lead rise" style="--i:1">${c.subtitlu}</p>`}
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><div class="dtbox" id="dt"><svg viewBox="0 0 600 300" aria-label="Comparație Sandbox vs Discovery Tour">
   <rect width="600" height="300" fill="#05090f"/>
   <g fill="#101d2b" stroke="var(--line-strong)"><rect x="40" y="170" width="90" height="100"/><rect x="170" y="120" width="80" height="150"/><rect x="290" y="180" width="110" height="90"/><rect x="440" y="90" width="100" height="180"/></g>
   <g class="g-game"><path d="M20 260 Q80 90 150 150 T270 60 T380 160 T500 35 T580 95" fill="none" stroke="var(--creed)" stroke-width="3" stroke-dasharray="6 6"/>
    <g fill="var(--creed)"><circle cx="150" cy="150" r="5"/><circle cx="380" cy="160" r="5"/><circle cx="500" cy="35" r="5"/></g><text x="24" y="28" fill="#eaf2f8" font-family="JetBrains Mono,monospace" font-size="14">${c.textDesenJoc}</text></g>
   <g class="g-tour"><path d="M30 278H570" stroke="var(--eagle)" stroke-width="5"/><g fill="var(--eagle)"><circle cx="110" cy="278" r="8"/><circle cx="260" cy="278" r="8"/><circle cx="410" cy="278" r="8"/><circle cx="550" cy="278" r="8"/></g><text x="24" y="28" fill="var(--eagle)" font-family="JetBrains Mono,monospace" font-size="14">${c.textDesenTur}</text></g>
  </svg></div>
  <div class="row" style="margin-top:8px"><button class="btn on" id="dtG">${c.butonJoc}</button><button class="btn" id="dtT">${c.butonTur}</button></div></div>
  <div style="display:grid;gap:10px;min-width:0">
   <div ${rs(3)}><div class="card"><div class="card-head"><div class="tag">${c.etichetaIstorici}</div></div><div class="big" style="font-size:28px">${c.cifra}</div><p class="small">${c.textIstorici}</p></div></div>
   <div ${rs(4)}><div class="card crimson-edge"><div class="tag" style="color:var(--creed)">${c.etichetaContradictie}</div><p class="small" id="dtP"></p></div></div>
  </div></div></div>`)(SLIDE[19]),mount:mDT});

/* SLIDE 20 */
add({...meta(20),hue:202,fx:'data',html:(c=>`<div class="in tight2">${HEAD(c.supratitlu,c.titlu)}
 <div class="g3 rise" style="--i:1">${c.carduri.map(CARD).join('')}</div>
 <div ${rs(2)}><div class="lab" style="margin-bottom:12px">${c.indiciuBibliografie}</div><div class="acc" id="acc"></div></div>
</div>`)(SLIDE[20]),mount:mEnd});

/* SLIDE 21 */
add({...meta(21),hue:202,fx:'motes',html:(c=>`<div class="in" style="align-items:center;text-align:center;gap:clamp(20px,3.4vh,38px)">
 <div class="rise bigcrest" style="--i:0">${CREST_SVG}</div>
 <div class="kicker rise" style="--i:1;justify-content:center">${c.supratitlu}</div>
 <h1 class="k thx">${c.titlu}</h1>
 <p class="lead rise" style="--i:3;max-width:56ch;margin:0 auto">${c.subtitlu}</p>
 <div class="row rise" style="--i:4;justify-content:center"><button class="btn pri" data-act="restart">${c.buton}</button></div>
 <div class="note rise" style="--i:5">${c.nota}</div>
</div>`)(SLIDE[21]),mount:()=>({})});

const N=SL.length;
