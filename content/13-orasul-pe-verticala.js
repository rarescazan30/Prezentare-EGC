/* SLIDE 13 · Orașul pe verticală
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ secțiune prin oraș ────────┐   ┌ niveluri[0]: titlu / text ┐
   │ │        textDesen niveluri  │   ├ niveluri[1]               ┤
   │ └────────────────────────────┘   ├ niveluri[2]               ┤
   │ altitudine ──●──  [sunetAsculta] └ niveluri[3]               ┘
   └ */
slide(13,{
 bara:'13 · Orașul pe verticală',
 an:2015,
 supratitlu:'Orașul pe verticală',
 titlu:'Patru niveluri, patru idei din cercetare',
 subtitlu:'Trage de cursor ca să cobori din cer până pe stradă și vezi ce se schimbă la fiecare nivel.',
 altitudine:'Altitudine',
 sunetAsculta:'♪ Ascultă sunetul',
 sunetOpreste:'♪ Oprește sunetul',
 sunetIndisponibil:'Sunet indisponibil',
 niveluri:[
  {textDesen:'1. ORIZONT', titlu:'1. Orizontul · Kevin Lynch',
   text:'Reperele înalte te ajută să te orientezi. Sus se aud vântul și vulturul.'},
  {textDesen:'2. FAȚADE', titlu:'2. Fațadele · Gabriele Aroni',
   text:'Zidurile sunt locuri de cățărat, iar pașii sună pe țigle.'},
  {textDesen:'3. PIEȚE', titlu:'3. Piețele · Philippe Bergeron',
   text:'Sunt făcute circular, ca să poți intra pe oricare parte.'},
  {textDesen:'4. STRADĂ', titlu:'4. Strada · Erik Champion',
   text:'Mulțimea și zgomotul străzii te fac să simți că ești acolo.'}
 ]
});
