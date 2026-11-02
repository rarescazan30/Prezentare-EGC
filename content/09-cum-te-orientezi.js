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
   │ ┌ tehnic: eticheta + text ┐   ← explicație pe scurt
   └ */
slide(9,{
 bara:'09 · Orientarea',
 an:2009,
 supratitlu:'Partea 2 · Level design',
 titlu:'Cum te orientezi într-un oraș fără să te uiți pe hartă',
 subtitlu:'Urbanistul Kevin Lynch a observat că oamenii țin minte un oraș după câteva lucruri simple. Jocurile folosesc aceeași idee.',
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
 tehnic:{eticheta:'Pe scurt · viewpoints și landmarks',
  text:'Pe un viewpoint, camera face un cerc în jurul personajului și îți arată orașul de sus. Ca landmark-urile să se vadă de la kilometri distanță, jocul păstrează o versiune simplificată a lor (un LOD) desenată până la orizont, chiar când restul orașului e încărcat doar parțial.'}
});
