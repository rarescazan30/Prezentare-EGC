/* SLIDE 2 · Etapa 1
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
slide(2,{
 bara:'02 · Etapa 1',
 an:2009,
 supratitlu:'Etapa 1 · 2007–2012',
 titlu:'Orașe mici și dense, făcute pentru parkour',
 subtitlu:'Primele jocuri aveau orașe mici, construite în jurul unui singur gest: săritura de pe un acoperiș pe altul.',
 carduri:[
  {eticheta:'Dimensiune', cifra:'0,13 – 1,41 km²',
   text:'Damascul din primul joc avea doar 0,13 km², iar Roma din 2010 avea 1,41 km².'},
  {eticheta:'Pe acoperișuri', cifra:'Fără sol',
   text:'Străzile erau calculate astfel încât să poți traversa orașul fără să atingi pământul (de exemplu Constantinopol, 0,94 km²).'},
  {eticheta:'În sălbăticie', cifra:'1,41 km²',
   text:'În Assassin’s Creed III (2012), parkour-ul s-a mutat din oraș în copaci și pe stânci.'}
 ]
});
