/* SLIDE 14 · Orașul din joc nu e o copie a orașului real
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ 3 carduri care se întorc la click:
   │ ┌ față ──────────────┐        ┌ spate ─────────────┐
   │ │ eticheta           │  click │ etichetaSpate      │
   │ │ TITLU              │  ───▶  │ spate              │
   │ │ fata               │        └────────────────────┘
   │ │ indiciu            │
   │ └────────────────────┘
   └ */
slide(14,{
 bara:'14 · Orașul din joc vs. cel real',
 an:2014,
 supratitlu:'Partea 3 · Istorie și joc',
 titlu:'Orașul din joc nu e o copie a orașului real',
 subtitlu:'Ca să fie ușor de recunoscut și plăcut de jucat, orașul e schimbat intenționat. Apasă pe un card.',
 carduri:[
  {titlu:'Turla catedralei Notre-Dame', eticheta:'Unity · Paris, 1789',
   fata:'Jocul arată turla catedralei, deși în 1789 ea nu exista.',
   spate:'Turla veche fusese demolată în 1786, iar cea de azi e din secolul al XIX-lea. A fost păstrată pentru că așa recunoaște toată lumea Notre-Dame.'},
  {titlu:'Orașe mai mici decât în realitate', eticheta:'Toate jocurile',
   fata:'Monumentele sunt mai apropiate unele de altele decât în orașul real.',
   spate:'Distanțele sunt micșorate, ca să ajungi repede de la un reper la altul și să nu te plictisești pe drum.'},
  {titlu:'Trenuri în buclă', eticheta:'Syndicate · Londra',
   fata:'Trenurile circulă continuu, în buclă, prin oraș.',
   spate:'Liniile sunt legate într-o buclă, ca să poți sări oricând pe un tren în mers. E o simplificare făcută pentru joc.'}
 ],
 indiciu:'↻ Apasă pentru explicație',
 etichetaSpate:'De ce?'
});
