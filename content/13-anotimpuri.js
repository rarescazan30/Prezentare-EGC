/* SLIDE 13 · Anotimpurile (slide-ul animat de pe main)
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ [iconita nume] × 4 anotimpuri          [butonLumina: pornita/oprita]
   │ ┌ peisaj animat ──────────────────────────────────────────┐
   │ │ textDesenPornit / textDesenOprit · NUME ANOTIMP (sus)   │
   │ └─────────────────────────────────────────────────────────┘
   │ ora ──●──     densitate ▇▇▇▇     reflexie ▇▇
   └ */
slide(13,{
 bara:'13 · Anotimpurile',
 an:2025,
 supratitlu:'Partea 3 · Assassin’s Creed Shadows · 2025',
 titlu:'Patru anotimpuri și lumină realistă',
 subtitlu:'Frunzișul, zăpada și lumina se schimbă odată cu anotimpul. Poți opri iluminarea realistă ca să vezi diferența.',
 anotimpuri:[
  {iconita:'🌸', nume:'Primăvară'},
  {iconita:'☀️', nume:'Vară'},
  {iconita:'🍁', nume:'Toamnă'},
  {iconita:'❄️', nume:'Iarnă'}
 ],
 butonLumina:'Lumină realistă',
 pornita:'pornită',
 oprita:'oprită',
 textDesenPornit:'LUMINĂ REALISTĂ',
 textDesenOprit:'FĂRĂ LUMINĂ REALISTĂ',
 ora:'Ora din zi',
 densitate:'Cât de dese sunt frunzele',
 reflexie:'Cât de mult reflectă solul lumina'
});
