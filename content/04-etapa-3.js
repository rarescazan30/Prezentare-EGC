/* SLIDE 4 · Etapa 3
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
slide(4,{
 bara:'04 · Etapa 3',
 an:2020,
 supratitlu:'Etapa 3 · 2017–2025',
 titlu:'Țări întregi, apoi o întoarcere la oraș',
 subtitlu:'Jocurile au trecut de la un singur oraș la regiuni uriașe, iar apoi seria s-a întors și la orașe compacte.',
 carduri:[
  {eticheta:'Origins, Odyssey, Valhalla', cifra:'80 – 256 km²',
   text:'Egiptul (80 km²), Grecia (256 km² în total) și Anglia (94 km² de uscat) sunt hărți uriașe, cu deșerturi, munți și mări.'},
  {eticheta:'Mirage · 2023', cifra:'2,30 km²',
   text:'Bagdadul secolului al IX-lea: o întoarcere la un oraș compact și dens, cu accent pe discreție printre oameni și pe parkour.'},
  {eticheta:'Shadows · 2025', cifra:'80 / 125 km²',
   text:'Japonia feudală, cu lumină calculată în timp real și patru anotimpuri care se schimbă.'}
 ]
});
