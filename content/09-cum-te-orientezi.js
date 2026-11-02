/* SLIDE 9 · Cum te orientezi fără hartă
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
   │ ┌ tehnic: [cod] │ eticheta + text ┐   ← detaliu tehnic
   └ */
slide(9,{
 bara:'09 · Orientarea',
 an:2009,
 supratitlu:'Partea 2 · Level design',
 titlu:'Cum te orientezi într-un oraș fără să te uiți pe hartă',
 subtitlu:'Urbanistul Kevin Lynch (1960) a observat că oamenii țin minte un oraș după câteva lucruri simple. Jocurile folosesc aceeași idee.',
 carduri:[
  {poza:{descriere:'Florența văzută de pe un viewpoint', fisier:'img/09-reper-florenta.jpg'},
   eticheta:'Landmarks (repere)',
   text:'Clădiri înalte, vizibile de oriunde: Domul din Florența, Notre-Dame. Când urci pe ele faci „sync” la viewpoint, iar harta din jur se descoperă.'},
  {poza:{descriere:'Două cartiere care arată diferit (Unity)', fisier:'img/09-cartiere-paris.jpg'},
   eticheta:'Districts (cartiere)',
   text:'Fiecare zonă are alte culori, alte clădiri și alți oameni, așa că știi unde ești doar uitându-te în jur.'},
  {poza:{descriere:'Tamisa ca margine între zone (Syndicate)', fisier:'img/09-tamisa-londra.jpg'},
   eticheta:'Edges (margini)',
   text:'Ziduri, râuri și faleze despart zonele și îți arată unde se termină un cartier.'}
 ],
 tehnic:{eticheta:'Detaliu tehnic · camera și landmark-urile',
  cod:'// panorama de pe un viewpoint\nfloat u = t * vitezaUnghiulara;\nvec3  ochi = centru + vec3(r * cos(u), inaltime, r * sin(u));\nmat4  V = lookAt(ochi, centru, vec3(0, 1, 0));',
  text:'Pe un viewpoint, camera face un cerc în jurul personajului: un view matrix (lookAt) cu poziția ochiului pe un cerc. Ca landmark-urile să se vadă de la kilometri distanță, engine-urile țin de obicei un LOD simplificat al lor, desenat până la orizont (draw distance mare), chiar când restul orașului e încărcat doar parțial.'}
});
