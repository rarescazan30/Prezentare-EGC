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
   │ ┌ tehnic: eticheta + text ┐   ← detaliu tehnic
   └ */
slide(7,{
 bara:'07 · De mână sau procedural',
 an:2017,
 supratitlu:'Partea 2 · Cum se construiește',
 titlu:'Orașele se fac de mână, țările se generează procedural',
 subtitlu:'Pe o hartă de 80 km² nu mai poți așeza de mână fiecare piatră și fiecare copac.',
 carduri:[
  {poza:{descriere:'Notre-Dame din Unity, de aproape', fisier:'img/07-notre-dame-unity.jpg'},
   eticheta:'De mână · Unity 2014', cifra:'≈ 2 ani',
   text:'Atât a lucrat artista Caroline Miousse la catedrala Notre-Dame din joc.'},
  {poza:{descriere:'Teren larg, cu dune și vegetație (Origins)', fisier:'img/07-teren-origins.jpg'},
   eticheta:'Procedural terrain', cifra:'Heightmap',
   text:'Terenul pornește de la un heightmap: o imagine în care fiecare pixel e o înălțime. Din el se construiește un mesh de triunghiuri.'},
  {eticheta:'Procedural placement', cifra:'Reguli + retușuri',
   text:'Copacii, iarba și pietrele sunt puse automat după pantă, apă și altitudine. Apoi artiștii corectează de mână ce nu arată bine.'}
 ],
 tehnic:{eticheta:'Detaliu tehnic · terrain din heightmap',
  text:'Fiecare pixel din heightmap devine un vertex, iar câte 4 vertecși vecini formează 2 triunghiuri.<br>Normalele se calculează cu produs vectorial, iar relieful natural vine din mai multe octave de Perlin noise (fBm).'}
});
