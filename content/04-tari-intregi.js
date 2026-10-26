/* SLIDE 4 · Acum: țări întregi și o întoarcere la oraș
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
slide(4,{
 bara:'04 · Țări întregi',
 an:2017,
 supratitlu:'Partea 1 · 2017–2025',
 titlu:'Acum: țări întregi și o întoarcere la oraș',
 subtitlu:'Hărțile au devenit regiuni întregi, cu natură, animale și vreme. Apoi seria s-a întors și la un oraș mic și dens.',
 carduri:[
  {poza:{descriere:'Peisaj larg din Egipt (Origins)', fisier:'img/04-egipt-origins.jpg'},
   eticheta:'Origins · Odyssey · Valhalla', cifra:'Egipt, Grecia, Anglia',
   text:'Deșerturi, munți, mări și animale sălbatice. Orașele sunt doar o parte din lume.'},
  {poza:{descriere:'Străzile dense din Bagdad (Mirage)', fisier:'img/04-bagdad-mirage.jpg'},
   eticheta:'Mirage · 2023', cifra:'Bagdad',
   text:'Un singur oraș dens, ca la început: parkour și ascunderea printre oameni.'},
  {poza:{descriere:'Peisaj din Japonia (Shadows)', fisier:'img/04-japonia-shadows.jpg'},
   eticheta:'Shadows · 2025', cifra:'Japonia',
   text:'Aceeași hartă se schimbă de la un anotimp la altul (detalii în partea a 3-a).'}
 ]
});
