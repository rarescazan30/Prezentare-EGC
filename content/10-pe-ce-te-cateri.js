/* SLIDE 10 · Pe ce te poți cățăra și de ce
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   (eticheta + text)
   │ ┌ fațadă desenată ───────────┐   ┌ tehnic ─────────────────────┐
   │ │ traseu auriu de cățărare   │   │ cod                         │
   │ └────────────────────────────┘   │ eticheta                    │
   │ nota                             │ text                        │
   │                                  └─────────────────────────────┘
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
 ],
 tehnic:{eticheta:'Detaliu tehnic · raze (raycast)',
  cod:'// caută o margine în fața personajului\nhit1 = raycast(piept, inainte, 0.6);         // rază orizontală\nif (hit1) {\n  hit2 = raycast(hit1.punct + sus * 0.3, jos); // rază în jos\n  if (hit2 && hit2.normala.y > 0.7)\n    margine = hit2.punct;                    // aproape orizontală\n}',
  text:'Pentru motor, clădirea e o mulțime de triunghiuri. O rază trimisă în față găsește peretele, iar una trimisă de sus în jos verifică dacă deasupra e o suprafață orizontală, adică are normala aproape verticală. Matematic e intersecția rază–plan de la curs: t = (d − N·O) / (N·D).'}
});
