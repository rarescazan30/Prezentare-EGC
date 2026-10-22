/* SLIDE 14 · Sunetul
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
slide(14,{
 bara:'14 · Sunetul',
 an:2021,
 supratitlu:'Ailbhe Warde-Brown · 2021',
 titlu:'Sunetul face spațiul real',
 subtitlu:'Muzica și zgomotele te ajută să te simți într-un loc în trei moduri.',
 carduri:[
  {eticheta:'1 · Muzica epocii',
   text:'Tema „Ezio’s Family”, compusă de Jesper Kyd, este reorchestrată cu instrumente specifice fiecărei perioade istorice.'},
  {eticheta:'2 · Sunete care reacționează',
   text:'Zgomotele se schimbă în timp real, după cât de repede te miști și cât de sus te afli.'},
  {eticheta:'3 · Plimbarea sonoră',
   text:'Treci de la ecoul străzii la vântul de pe acoperiș, iar sunetul te ajută să știi unde te afli.'}
 ]
});
