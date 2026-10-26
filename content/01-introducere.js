/* SLIDE 1 · Introducere
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu                     ┌──────────────────┐
   │ TITLU                          │ desen animat     │
   │ subtitlu                       │ textDesen (sus)  │
   │ CONTOR contorUnitate           └──────────────────┘
   │ contorText
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   ← cele 3 părți (eticheta + text)
   │ [buton]
   └ */
slide(1,{
 bara:'01 · Introducere',
 an:2007,
 supratitlu:'Evoluția environment-ului · 2007–2025',
 titlu:'Cum își construiește Assassin’s Creed orașele',
 subtitlu:'Ce s-a schimbat în lumea jocului în aproape 20 de ani și ce tehnici de grafică stau în spate.',
 contor:'0,13 → 130',
 contorUnitate:'km²',
 contorText:'Damasc (2007) → uscatul Greciei Antice (2018)',
 textDesen:'ANIMUS · 0,13 KM² (2007) → 130 KM² (2018)',
 carduri:[
  {eticheta:'Partea 1 · Vorbitor 1', text:'Ce s-a schimbat: de la câteva orașe mici la țări întregi.'},
  {eticheta:'Partea 2 · Vorbitor 2', text:'Cum se construiește un oraș: piese, reguli și teste.'},
  {eticheta:'Partea 3 · Vorbitor 3', text:'Cum devine orașul viu: lumină, anotimpuri și oameni.'}
 ],
 buton:'Începe prezentarea →'
});
