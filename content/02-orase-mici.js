/* SLIDE 2 · La început: orașe mici
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
slide(2,{
 bara:'02 · Orașe mici',
 an:2007,
 supratitlu:'Partea 1 · 2007–2012',
 titlu:'La început: orașe mici, făcute pentru sărituri',
 subtitlu:'Primele jocuri aveau câteva orașe mici și dese. Totul era gândit în jurul parkour-ului.',
 carduri:[
  {poza:{descriere:'Damasc din AC1, văzut de sus', fisier:'img/02-damasc-ac1.jpg'},
   eticheta:'Assassin’s Creed · 2007', cifra:'Damasc, Acra, Ierusalim',
   text:'Orașe mici, cu acoperișurile lipite unul de altul, ca să poți sări de pe unul pe altul.'},
  {poza:{descriere:'Florența din AC2, cu Domul', fisier:'img/02-florenta-ac2.jpg'},
   eticheta:'Assassin’s Creed II · 2009', cifra:'Florența și Veneția',
   text:'Orașe renascentiste refăcute după clădiri reale, cu monumente înalte pe care te poți urca.'},
  {poza:{descriere:'Frontiera din AC3: pădure și stânci', fisier:'img/02-frontiera-ac3.jpg'},
   eticheta:'Assassin’s Creed III · 2012', cifra:'Oraș + natură',
   text:'Pe lângă Boston și New York apare frontiera: o pădure întinsă, în care te cațeri pe copaci și stânci.'}
 ]
});
