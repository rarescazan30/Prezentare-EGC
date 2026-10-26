/* SLIDE 3 · Apoi: marea deschisă și orașe la scară reală
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
   │ │ [poza]       │ │ [poza]       │ │ [poza]       │
   │ │ eticheta     │ │ eticheta     │ │ eticheta     │   ← carduri[0], [1], [2]
   │ │ CIFRA        │ │ CIFRA        │ │ CIFRA        │
   │ │ text         │ │ text         │ │ text         │
   │ └──────────────┘ └──────────────┘ └──────────────┘
   │ (poza și cifra sunt opționale; rosu:true = card evidențiat cu roșu)
   └ */
slide(3,{
 bara:'03 · Mare și orașe mari',
 an:2014,
 supratitlu:'Partea 1 · 2013–2015',
 titlu:'Apoi: marea deschisă și orașe la scară reală',
 subtitlu:'Seria a mers în două direcții: o lume de insule și ape, și orașe mai mari, mai detaliate.',
 carduri:[
  {poza:{descriere:'Corabia între insule (Black Flag)', fisier:'img/03-caraibe-black-flag.jpg'},
   eticheta:'Black Flag · 2013', cifra:'Caraibe',
   text:'O hartă făcută mai ales din apă: navighezi cu corabia între insule, fără ecran de încărcare între mare și uscat.'},
  {poza:{descriere:'Paris cu mulțime (Unity)', fisier:'img/03-paris-unity.jpg'},
   eticheta:'Unity · 2014', cifra:'Paris',
   text:'Monumente la dimensiunea lor reală, mulțimi mari și multe clădiri în care poți intra.'},
  {poza:{descriere:'Londra și cârligul cu frânghie (Syndicate)', fisier:'img/03-londra-syndicate.jpg'},
   eticheta:'Syndicate · 2015', cifra:'Londra',
   text:'Străzile largi și Tamisa sunt prea mult de sărit, așa că apare cârligul cu frânghie. Lumea schimbă felul în care te miști.'}
 ]
});
