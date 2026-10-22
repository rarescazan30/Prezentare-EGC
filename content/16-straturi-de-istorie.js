/* SLIDE 16 · Straturi de istorie
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ desen în straturi ─────────┐   [straturi[0]: titlu / text]
   │ │ textDesen straturi[0]      │   [straturi[1]: titlu / text]
   │ │ textDesen straturi[1]      │   [straturi[2]: titlu / text]
   │ │ textDesen straturi[2]      │
   │ └────────────────────────────┘
   └ */
slide(16,{
 bara:'16 · Straturi de istorie',
 an:2020,
 supratitlu:'Assassin’s Creed Valhalla · 2020',
 titlu:'Anglia, o istorie în straturi',
 subtitlu:'Peisajul seamănă cu o pagină rescrisă de mai multe ori: fiecare epocă stă peste ruinele celei dinainte. Alege un strat.',
 straturi:[
  {textDesen:'STRATUL 1 · FORTURI SAXONE ȘI DANEZE (SEC. IX)',
   titlu:'1. Secolul al IX-lea · saxoni și danezi',
   text:'Forturi de lemn ridicate peste ruine romane.'},
  {textDesen:'STRATUL 2 · RUINE ROMANE (SEC. I–V)', titlu:'2. Secolele I–V · Roma',
   text:'Apeducte și amfiteatre în ruină, bune de escaladat.'},
  {textDesen:'STRATUL 3 · PIETRE NEOLITICE (STONEHENGE)', titlu:'3. Neoliticul',
   text:'Pietre uriașe, ca la Stonehenge, care amintesc de mitul nordic al lui Asgard și Ragnarök.'}
 ]
});
