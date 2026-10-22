/* SLIDE 6 · Manual sau automat
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
slide(6,{
 bara:'06 · Manual sau automat',
 an:2014,
 supratitlu:'De la meșteșug la reguli',
 titlu:'O catedrală făcută manual, o țară făcută prin reguli',
 subtitlu:'Un monument modelat de mână a fost posibil în Unity, dar nu și la scara Egiptului din Origins.',
 carduri:[
  {eticheta:'Notre-Dame · Unity', cifra:'≈ 5.000 ore',
   text:'Caroline Miousse a lucrat doi ani la o singură catedrală, la scară reală.'},
  {eticheta:'Creșterea hărții', cifra:'4 → 80 km²', rosu:true,
   text:'O hartă de 20 de ori mai mare nu mai putea fi construită manual.'},
  {eticheta:'Soluția', cifra:'Reguli automate',
   text:'Terenul și vegetația se generează după reguli, iar apoi programe în C# verifică rezultatul.'}
 ]
});
