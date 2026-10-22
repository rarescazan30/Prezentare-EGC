/* SLIDE 9 · Anotimpurile
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
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
slide(9,{
 bara:'09 · Anotimpurile',
 an:2025,
 supratitlu:'Assassin’s Creed Shadows · 2025',
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
