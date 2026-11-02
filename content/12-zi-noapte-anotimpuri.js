/* SLIDE 12 · Lumea nu mai stă pe loc
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
   │ ┌ tehnic: [cod] │ eticheta + text ┐   ← detaliu tehnic
   └ */
slide(12,{
 bara:'12 · Zi, noapte, anotimpuri',
 an:2025,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Lumea nu mai stă pe loc: zi, noapte, vreme, anotimpuri',
 subtitlu:'Același loc arată diferit în funcție de oră și de anotimp. Asta a crescut treptat, de la un joc la altul.',
 carduri:[
  {eticheta:'Primele jocuri', cifra:'Totul fix',
   text:'Ora și vremea erau în mare parte fixe: un oraș arăta mereu la fel.'},
  {poza:{descriere:'Frontiera iarna, cu zăpadă (AC3)', fisier:'img/12-iarna-ac3.jpg'},
   eticheta:'Assassin’s Creed III · 2012', cifra:'Iarna',
   text:'Zăpada din frontieră e adâncă și te încetinește. Vremea schimbă felul în care te miști.'},
  {poza:{descriere:'Același loc vara și iarna (Shadows)', fisier:'img/12-anotimpuri-shadows.jpg'},
   eticheta:'Shadows · 2025', cifra:'Patru anotimpuri',
   text:'Aceeași hartă are primăvară, vară, toamnă și iarnă: frunze, zăpadă, lacuri înghețate și altă lumină.'}
 ],
 tehnic:{eticheta:'Detaliu tehnic · un shader de zăpadă (tehnică clasică)',
  cod:'// zăpadă pe suprafețele orientate în sus\nfloat z = smoothstep(0.6, 0.9, dot(N, vec3(0, 1, 0)));\nculoare  = mix(culoare, albZapada, z * nivelIarna);',
  text:'Cu cât normala unei suprafețe e mai apropiată de verticală, cu atât primește mai multă zăpadă: acoperișurile și solul se albesc, pereții nu. Iar când lumea se schimbă de la un anotimp la altul, lumina nu mai poate fi calculată o singură dată dinainte. De aici trecerea la lumina calculată pe loc (slide-ul 11).'}
});
