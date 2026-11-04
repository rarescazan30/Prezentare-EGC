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
   │ ┌ tehnic: eticheta + text ┐   ← explicație pe scurt
   └ */
slide(4,{
 bara:'04 · Țări întregi',
 an:2017,
 supratitlu:'2017–2025',
 titlu:'Acum: hărți de 2,3–130 km², țări întregi și o întoarcere la oraș',
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
   text:'Aceeași hartă se schimbă de la un anotimp la altul.'}
 ],
 tehnic:{eticheta:'Pe scurt · world streaming',
  text:'O țară de 80–130 km² nu încape toată în memorie. Harta e împărțită într-un grid de celule (chunks): lângă jucător se face streaming la varianta detaliată, mai departe doar LOD-uri simplificate, iar celulele rămase în urmă se descarcă din memorie. Așa funcționează, în general, jocurile open world mari.'}
});
