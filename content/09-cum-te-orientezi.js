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
   └ */
slide(9,{
 bara:'09 · Orientarea',
 an:2009,
 supratitlu:'Partea 2 · Level design',
 titlu:'Cum te orientezi într-un oraș fără să te uiți pe hartă',
 subtitlu:'Urbanistul Kevin Lynch (1960) a observat că oamenii țin minte un oraș după câteva lucruri simple. Jocurile folosesc aceeași idee.',
 carduri:[
  {poza:{descriere:'Florența văzută de pe un punct de sincronizare', fisier:'img/09-reper-florenta.jpg'},
   eticheta:'Repere',
   text:'Clădiri înalte, vizibile de oriunde: Domul din Florența, Notre-Dame. Când urci pe ele, se „sincronizează” harta.'},
  {poza:{descriere:'Două cartiere care arată diferit (Unity)', fisier:'img/09-cartiere-paris.jpg'},
   eticheta:'Cartiere',
   text:'Fiecare zonă are alte culori, alte clădiri și alți oameni, așa că știi unde ești doar uitându-te în jur.'},
  {poza:{descriere:'Tamisa ca margine între zone (Syndicate)', fisier:'img/09-tamisa-londra.jpg'},
   eticheta:'Margini',
   text:'Ziduri, râuri și faleze despart zonele și îți arată unde se termină un cartier.'}
 ]
});
