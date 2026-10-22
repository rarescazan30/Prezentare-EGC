/* SLIDE 3 · Etapa 2
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
   │ │ eticheta     │ │ eticheta     │ │ eticheta     │
   │ │ CIFRA        │ │ CIFRA        │ │ CIFRA        │   ← carduri[0], [1], [2]
   │ │ text         │ │ text         │ │ text         │
   │ └──────────────┘ └──────────────┘ └──────────────┘
   │ (cifra e opțională; rosu:true = card evidențiat cu roșu)
   └ */
slide(3,{
 bara:'03 · Etapa 2',
 an:2014,
 supratitlu:'Etapa 2 · 2013–2015',
 titlu:'Mări deschise și orașe la scară reală',
 subtitlu:'Seria a luat două drumuri: corăbii pe ocean și orașe construite la dimensiunea lor adevărată.',
 carduri:[
  {eticheta:'Black Flag · 2013', cifra:'235 km²',
   text:'Un arhipelag întreg în Caraibe, străbătut cu corabia, fără pauză între mare și uscat.'},
  {eticheta:'Unity · 2014', cifra:'2,40 km²',
   text:'Parisul la scară reală, cu monumente de dimensiunea lor adevărată și clădiri în care intri fără încărcare.'},
  {eticheta:'Syndicate · 2015', cifra:'3,70 km²', rosu:true,
   text:'Străzile largi ale Londrei și Tamisa erau prea mari pentru sărituri, așa că a apărut cârligul cu frânghie.'}
 ]
});
