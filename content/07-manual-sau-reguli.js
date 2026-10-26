/* SLIDE 7 · Orașele se fac de mână, țările după reguli
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
slide(7,{
 bara:'07 · De mână sau după reguli',
 an:2017,
 supratitlu:'Partea 2 · Cum se construiește',
 titlu:'Orașele se fac de mână, țările se generează după reguli',
 subtitlu:'Pe o hartă de 80 km² nu mai poți așeza de mână fiecare piatră și fiecare copac.',
 carduri:[
  {poza:{descriere:'Notre-Dame din Unity, de aproape', fisier:'img/07-notre-dame-unity.jpg'},
   eticheta:'De mână · Unity 2014', cifra:'≈ 2 ani',
   text:'Atât a lucrat artista Caroline Miousse la catedrala Notre-Dame din joc.'},
  {poza:{descriere:'Teren larg, cu dune și vegetație (Origins)', fisier:'img/07-teren-origins.jpg'},
   eticheta:'Teren generat', cifra:'Hartă de înălțimi',
   text:'Terenul pornește de la o imagine în care fiecare pixel e o înălțime. Din ea se construiește o rețea de triunghiuri, ca un mesh de la EGC.'},
  {eticheta:'Reguli pentru vegetație', cifra:'Reguli + corecturi',
   text:'Copacii, iarba și pietrele sunt puse automat după pantă, apă și altitudine. Apoi artiștii corectează de mână ce nu arată bine.'}
 ]
});
