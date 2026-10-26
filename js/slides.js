/* Construiește cele 16 slide-uri din textele din content/ (un fișier pe slide).
   Aici e doar așezarea în pagină; textul se schimbă în content/. */
'use strict';
/* Barele graficului de pe slide-ul 5 (content/05-…) */
const BARS=SLIDE[5].harti.map(h=>({n:h.joc+' · '+h.loc,y:h.an,v:h.km2,e:h.epoca}));

const SL=[];
const add=o=>{SL.push(o)};

/* Șabloane: transformă textele din content/ în slide-uri */
const meta=n=>({t:SLIDE[n].bara,year:SLIDE[n].an});
/* Poză: arată imaginea din img/ dacă există, altfel un chenar „Poză de adăugat” */
const POZA=p=>`<figure class="poza"><div class="pz-gol"><div class="pz">Poză de adăugat</div><div class="pd">${p.descriere}</div><div class="pf">${p.fisier}</div></div><img src="${p.fisier}" alt="${p.descriere}" onerror="this.remove()"></figure>`;
const CARD=k=>`<div class="card${k.rosu?' crimson-edge':''}">${k.poza?POZA(k.poza):''}<div class="tag"${k.rosu?' style="color:var(--creed)"':''}>${k.eticheta}</div>${k.cifra?`<div class="big"${k.rosu?' style="color:var(--creed)"':''}>${k.cifra}</div>`:''}<p class="small">${k.text}</p></div>`;
const CARDS3=c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g3">${c.carduri.map((k,i)=>`<div ${rs(i+2)}>${CARD(k)}</div>`).join('')}</div></div>`;
/* Carduri unul sub altul, pentru coloana din dreapta */
const STACK=(cards,i0)=>`<div style="display:grid;gap:12px;min-width:0">${cards.map((k,i)=>`<div ${rs(i0+i)}>${CARD(k)}</div>`).join('')}</div>`;

/* ===================== PARTEA 1 · Ce s-a schimbat ===================== */

/* SLIDE 1 */
add({...meta(1),hue:202,html:(c=>`<div class="in">
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
add({...meta(2),hue:198,html:CARDS3(SLIDE[2])});

/* SLIDE 3 */
add({...meta(3),hue:200,html:CARDS3(SLIDE[3])});

/* SLIDE 4 */
add({...meta(4),hue:206,html:CARDS3(SLIDE[4])});

/* SLIDE 5 */
add({...meta(5),hue:204,html:(c=>`<div class="in tight">${HEAD(c.supratitlu,c.titlu)}
 <div class="row rise" style="--i:1"><button class="btn pri" id="bPlay">${c.butonReda}</button><span class="note">${c.nota}</span></div>
 <div class="card rise" style="--i:2"><div id="bars">${BARS.map((b,i)=>`<div class="brow" data-i="${i}" style="--c:${['hsl(202 55% 52%)','hsl(192 75% 58%)','hsl(210 85% 68%)'][b.e]}"><div class="n"><b>${b.n.split(' · ')[0]}</b> · ${b.n.split(' · ')[1]}</div><div class="btrack"><div class="bar"></div></div><div class="v">${fk(b.v)} km²</div></div>`).join('')}</div>
  <div class="axis"><span></span><div class="ax" id="ax"></div><span></span></div>
  <div class="bdet">${c.concluzie}</div></div></div>`)(SLIDE[5]),mount:mBars});

/* ===================== PARTEA 2 · Cum se construiește un oraș ===================== */

/* SLIDE 6 */
add({...meta(6),hue:196,html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g2 w">
  <div ${rs(2)} style="min-width:0"><canvas class="sim" id="kit" width="900" height="440" style="cursor:pointer" aria-label="Cartier construit din câteva piese repetate"></canvas>
   <div class="row" style="margin-top:8px"><button class="btn" id="kitB">${c.butonGenereaza}</button><span class="note">${c.indiciu}</span></div>
   <p class="note" id="kitSel" style="margin-top:6px;color:var(--eagle)"></p></div>
  ${STACK(c.carduri,3)}
 </div></div>`)(SLIDE[6]),mount:mKit});

/* SLIDE 7 */
add({...meta(7),hue:200,html:CARDS3(SLIDE[7])});

/* SLIDE 8 */
add({...meta(8),hue:188,html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><div class="card"><div class="row" style="justify-content:space-between;margin-bottom:6px"><div><div class="tag">${c.etichetaTest}</div></div><button class="btn pri" id="aRun">${c.butonPornire}</button></div>
   <canvas class="sim" id="atl" width="760" height="400" aria-label="Simulare: o hartă parcursă de un test automat"></canvas></div></div>
  <div style="display:grid;gap:12px;min-width:0">
   <div ${rs(3)}><div class="card"><div class="row" style="gap:28px"><div class="stat"><span class="big" id="atn">0</span><span class="lab">${c.verificate}</span></div><div class="stat"><span class="big" id="ate" style="color:var(--creed)">0</span><span class="lab">${c.probleme}</span></div></div><p class="note" id="atr" style="margin-top:6px">${c.textInitial}</p></div></div>
   ${STACK(c.carduri,4)}
  </div>
 </div></div>`)(SLIDE[8]),mount:mAtlas});

/* SLIDE 9 */
add({...meta(9),hue:190,html:CARDS3(SLIDE[9])});

/* SLIDE 10 */
add({...meta(10),hue:196,html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><svg class="facade" viewBox="0 0 640 380" role="img" aria-label="Fațadă renascentistă cu un traseu de cățărare marcat">
   <rect width="640" height="380" fill="#04080e"/>
   <rect x="60" y="58" width="440" height="286" fill="#182432" stroke="#39526b" stroke-width="1.5"/>
   <rect x="60" y="242" width="440" height="102" fill="#1f3042" stroke="#4d6d8c"/>
   <path d="M60 268H500M60 295H500M60 322H500M110 242V268M200 242V268M290 242V268M380 242V268M470 242V268M155 268V308M245 268V295M335 268V295M425 268V295M110 295V322M200 295V322M290 295V322M380 295V322M470 295V322" stroke="#5c82a6" stroke-width="1.8" fill="none"/>
   <path d="M110 192V124a27 27 0 0 1 54 0V192Z M250 192V124a27 27 0 0 1 54 0V192Z M390 192V124a27 27 0 0 1 54 0V192Z" fill="#0b131c" stroke="#648cb3" stroke-width="3.5"/>
   <path d="M137 97V192M110 152H164M277 97V192M250 152H304M417 97V192M390 152H444" stroke="#648cb3" stroke-width="3" fill="none"/>
   <rect x="40" y="34" width="480" height="25" fill="#283d54" stroke="#76a1cc" stroke-width="2"/>
   <path d="M52 59v11M76 59v11M100 59v11M124 59v11M148 59v11M172 59v11M196 59v11M220 59v11M244 59v11M268 59v11M292 59v11M316 59v11M340 59v11M364 59v11M388 59v11M412 59v11M436 59v11M460 59v11M484 59v11" stroke="#76a1cc" stroke-width="5"/>
   <rect x="500" y="128" width="112" height="12" fill="#3a2e21" stroke="#c89d54" stroke-width="2"/><rect x="500" y="204" width="80" height="12" fill="#3a2e21" stroke="#c89d54" stroke-width="2"/>
   <rect x="0" y="344" width="640" height="36" fill="#070d14"/>
   <path d="M137 338 L137 250 L277 192 L277 46 L500 46 L602 128" fill="none" stroke="var(--eagle)" stroke-width="2.5" stroke-dasharray="6 4"/>
   <circle cx="137" cy="295" r="5" fill="var(--eagle)"/><circle cx="137" cy="250" r="5" fill="var(--eagle)"/><circle cx="277" cy="192" r="5" fill="var(--eagle)"/><circle cx="277" cy="46" r="5" fill="var(--eagle)"/><circle cx="602" cy="128" r="6" fill="var(--eagle)"/>
  </svg>
  <p class="note" style="margin-top:8px">${c.nota}</p></div>
  ${STACK(c.carduri,3)}
 </div></div>`)(SLIDE[10])});

/* ===================== PARTEA 3 · Cum devine orașul viu ===================== */

/* SLIDE 11 */
add({...meta(11),hue:200,html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}
 <p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g2">
  <div ${rs(2)} style="min-width:0"><canvas class="sim" id="gi" width="880" height="460" aria-label="Cameră gotică luminată de soare printr-o fereastră"></canvas>
   <div class="row" style="margin-top:8px"><label class="lab" style="flex:1 1 220px;display:flex;gap:10px;align-items:center">${c.soare} <input type="range" id="giT" min="0" max="1" step=".005" value=".45" aria-label="Momentul zilei"><span id="giH" class="mono">11:30</span></label></div></div>
  <div style="display:grid;gap:10px;min-width:0;align-content:start">
   <div ${rs(3,'seg')}>${c.moduri.map((m,i)=>`<button class="btn${i?'':' on'}" data-m="${i}">${m.buton}</button>`).join('')}</div>
   <div ${rs(4)}><div class="card"><div class="tag" id="giTag">${c.moduri[0].eticheta}</div><div class="big" id="giBig" style="margin:2px 0">${c.moduri[0].cifra}</div><p class="small" id="giTxt"></p></div></div>
  </div></div></div>`)(SLIDE[11]),mount:mGI});

/* SLIDE 12 */
add({...meta(12),hue:212,html:CARDS3(SLIDE[12])});

/* SLIDE 13 */
add({...meta(13),hue:195,html:(c=>`<div class="in tight">${HEAD(c.supratitlu,c.titlu)}<p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g2 w">
  <div ${rs(2)} style="min-width:0"><canvas class="sim" id="crw" width="960" height="440" style="cursor:crosshair" aria-label="Simulare: mulțime într-o piață din Paris"></canvas>
   <div class="row" style="margin-top:8px"><label class="lab" style="flex:1 1 220px;display:flex;gap:10px;align-items:center">${c.etichetaCursor} <input type="range" id="crwN" min="2000" max="12000" step="500" value="12000"><span class="mono" id="crwNv">12.000</span></label><span class="note">${c.indiciu}</span></div></div>
  <div style="display:grid;gap:10px;min-width:0">
   <div ${rs(3)}><div class="card"><div class="tag">${c.etichetaVii}</div><div class="big" id="cA">40</div><div class="lab">${c.vii}</div></div></div>
   <div ${rs(4)}><div class="card"><div class="tag">${c.etichetaDetaliate}</div><div class="big" id="cM">120</div><div class="lab">${c.detaliate}</div></div></div>
   <div ${rs(5)}><div class="card"><div class="row" style="justify-content:space-between"><div><div class="big" id="cL" style="font-size:28px;color:var(--mute)">11.880</div><div class="lab">${c.figuranti}</div></div><div><div class="big" id="cR" style="font-size:28px;color:var(--creed)">0</div><div class="lab">${c.schimburi}</div></div></div><p class="small" id="cP" style="margin-top:4px"></p></div></div>
  </div></div></div>`)(SLIDE[13]),mount:mCrowd});

/* SLIDE 14 */
add({...meta(14),hue:202,html:(c=>`<div class="in">${HEAD(c.supratitlu,c.titlu)}<p class="lead rise" style="--i:1">${c.subtitlu}</p>
 <div class="g3" id="lies">${c.carduri.map((k,i)=>`<div ${rs(i+2)}><button class="flip" aria-label="${k.titlu}"><div class="fi"><div class="fa"><div class="tag">${k.eticheta}</div><h3>${k.titlu}</h3><p>${k.fata}</p><span class="note" style="margin-top:auto;color:var(--accent)">${c.indiciu}</span></div><div class="fb"><div class="tag">${c.etichetaSpate}</div><p>${k.spate}</p></div></div></button></div>`).join('')}</div></div>`)(SLIDE[14]),mount:mLies});

/* ===================== Final ===================== */

/* SLIDE 15 */
add({...meta(15),hue:202,html:(c=>`<div class="in tight2">${HEAD(c.supratitlu,c.titlu)}
 <div class="g3 rise" style="--i:1">${c.carduri.map(CARD).join('')}</div>
 <div ${rs(2)}><div class="lab" style="margin-bottom:12px">${c.indiciuBibliografie}</div><div class="acc" id="acc"></div></div>
</div>`)(SLIDE[15]),mount:mEnd});

/* SLIDE 16 */
add({...meta(16),hue:202,html:(c=>`<div class="in" style="align-items:center;text-align:center;gap:clamp(20px,3.4vh,38px)">
 <div class="rise bigcrest" style="--i:0">${CREST_SVG}</div>
 <div class="kicker rise" style="--i:1;justify-content:center">${c.supratitlu}</div>
 <h1 class="k thx">${c.titlu}</h1>
 <p class="lead rise" style="--i:3;max-width:56ch;margin:0 auto">${c.subtitlu}</p>
 <div class="row rise" style="--i:4;justify-content:center"><button class="btn pri" data-act="restart">${c.buton}</button></div>
 <div class="note rise" style="--i:5">${c.nota}</div>
</div>`)(SLIDE[16]),mount:()=>({})});

const N=SL.length;
