/* SLIDE 18 · Minciuni utile
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ 6 carduri care se întorc la click:
   │ ┌ față ──────────────┐        ┌ spate ─────────────┐
   │ │ eticheta           │  click │ etichetaSpate      │
   │ │ TITLU              │  ───▶  │ spate              │
   │ │ fata               │        └────────────────────┘
   │ │ indiciu            │
   │ └────────────────────┘
   └ */
slide(18,{
 bara:'18 · Minciuni utile',
 an:2014,
 supratitlu:'Erik Champion · Catros și Leblanc',
 titlu:'„Minciuni utile”: ce se schimbă ca jocul să meargă',
 subtitlu:'Pentru ca un loc să fie recunoscut și ușor de jucat, creatorii mai schimbă uneori istoria. Apasă pe un card.',
 carduri:[
  {titlu:'1. Turla Notre-Dame', eticheta:'Unity · anacronism',
   fata:'Jocul arată turla gotică a catedralei, deși în 1789 ea nu exista.',
   spate:'Turla actuală a fost ridicată abia în secolul al XIX-lea. A fost păstrată pentru că jucătorii recunosc imediat Parisul.'},
  {titlu:'2. Orga catedralei', eticheta:'Unity · drepturi de autor',
   fata:'Orga din Notre-Dame are câteva detalii schimbate.',
   spate:'Designul real al orgii este protejat de drepturi de autor, așa că a fost modificat ușor.'},
  {titlu:'3. Gara St. Pancras', eticheta:'Syndicate · hartă',
   fata:'Gara este mutată puțin în Londra.',
   spate:'A fost mutată ca distanțele dintre punctele de observație să fie mai potrivite pentru joc.'},
  {titlu:'4. Căile ferate', eticheta:'Syndicate · ritm de joc',
   fata:'Trenurile circulă în bucle continue prin oraș.',
   spate:'Liniile au fost unite ca să poți călători fără oprire. În primul joc, unele monumente au fost micșorate și apropiate.'},
  {titlu:'5. Marea Piramidă', eticheta:'Origins · ipoteză', fata:'În Piramidă există camere ascunse.',
   spate:'Ele se bazează pe ipoteza arhitectului Jean-Pierre Houdin, cu o rampă interioară în spirală.'},
  {titlu:'6. Sfinxul și Merer', eticheta:'Origins · cercetare',
   fata:'Sfinxul are doar urme șterse de vopsea.',
   spate:'Realizat împreună cu egiptologi de la Sorbona, plus papirusul lui Merer, un supraveghetor al lucrărilor.'}
 ],
 indiciu:'↻ Apasă pentru explicație',
 etichetaSpate:'De ce?'
});
