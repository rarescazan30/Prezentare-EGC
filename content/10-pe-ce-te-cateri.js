/* SLIDE 10 · Pe ce te poți cățăra și de ce
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ fațadă desenată ───────────┐   ┌ carduri[0] ┐
   │ │ traseu auriu de cățărare   │   ├ carduri[1] ┤   (eticheta + text)
   │ └────────────────────────────┘   └ carduri[2] ┘
   │ nota
   └ */
slide(10,{
 bara:'10 · Cățărarea',
 an:2009,
 supratitlu:'Partea 2 · Level design',
 titlu:'Pe ce te poți cățăra și de ce',
 subtitlu:'Pentru noi, o fațadă e decor. Pentru joc, e un traseu.',
 nota:'Linia aurie: un traseu posibil de pe stradă până pe acoperiș. Fiecare punct e un loc de prindere.',
 carduri:[
  {eticheta:'Locuri de prindere', text:'Marginile clădirii (pervaze, cornișe, grinzi) sunt marcate ca locuri de care personajul se poate prinde.'},
  {eticheta:'Distanțe calculate', text:'Ferestrele, balcoanele și acoperișurile sunt puse la distanțe pe care personajul le poate sări sau atinge.'},
  {eticheta:'Arhitectură ajustată', text:'Clădirile seamănă cu cele reale, dar au mai multe locuri de prindere decât în realitate, ca urcarea să curgă.'}
 ]
});
