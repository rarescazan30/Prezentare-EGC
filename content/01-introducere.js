/* SLIDE 1 · Introducere
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu                     ┌──────────────────┐
   │ TITLU                          │ desen animat     │
   │ subtitlu                       │ textDesen (sus)  │
   │ CONTOR contorUnitate           └──────────────────┘
   │ contorText
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   (eticheta + text)
   │ [buton]
   └ */
slide(1,{
 bara:'01 · Introducere',
 an:2007,
 supratitlu:'Două decenii de lumi virtuale · 2007–2025',
 titlu:'Evoluția spațială și imersiunea în Assassin’s Creed',
 subtitlu:'Cum au învățat aceste jocuri să transforme istoria în locuri pe care le poți explora, escalada și simți.',
 contor:'0,13 → 256',
 contorUnitate:'km²',
 contorText:'Damasc (2007) → Grecia Antică (2018)',
 textDesen:'ANIMUS HELIX · 0,13 KM² (2007) → 256 KM² (2018)',
 carduri:[
  {eticheta:'I. Tehnologie', text:'Cum au crescut hărțile și cum au fost construite și iluminate.'},
  {eticheta:'II. Arhitectură', text:'Cum te ajută clădirile, reperele și sunetul să te simți într-un loc.'},
  {eticheta:'III. Istorie', text:'Ce se schimbă față de adevăr ca istoria să fie jucabilă.'}
 ],
 buton:'Începe prezentarea →'
});
