/* SLIDE 6 · Un oraș se construiește din piese
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   (eticheta + text)
   │ ┌ cartier văzut de sus ──────┐   ┌ tehnic ─────────────────────┐
   │ │ textDesen (sus)            │   │ cod                         │
   │ │ legenda (jos)              │   │ eticheta                    │
   │ └────────────────────────────┘   │ text                        │
   │ [butonGenereaza]  indiciu        └─────────────────────────────┘
   │ textSelectie (translația, rotația și scalarea clădirii alese)
   └ */
slide(6,{
 bara:'06 · Piese și instanțe',
 an:2014,
 supratitlu:'Partea 2 · Cum se construiește',
 titlu:'Un oraș se construiește din piese, nu clădire cu clădire',
 subtitlu:'Artiștii fac câteva piese de bază, iar orașul se asamblează din ele, ca din LEGO.',
 textDesen:'CARTIER VĂZUT DE SUS · SIMULARE',
 legenda:'{piese} piese · {instante} clădiri',   // {piese} și {instante} se completează singure
 butonGenereaza:'↻ Construiește alt cartier',
 indiciu:'Apasă pe o clădire ca să vezi transformarea ei.',
 textSelectie:'Clădirea aleasă: piesa {piesa} · translație ({x}, {y}) · rotație {r}° · scalare {s}',
 carduri:[
  {eticheta:'1 · Kit de piese', text:'Ziduri, ferestre, uși, acoperișuri, balcoane. Fiecare piesă e modelată o singură dată.'},
  {eticheta:'2 · Instanțiere', text:'Aceeași piesă e desenată de sute de ori. Diferă doar matricea de transformare <b>M = T · R · S</b> (translație, rotație, scalare), ca la EGC.'},
  {eticheta:'3 · Variație', text:'Culori, texturi și uzură diferite, ca să nu observi că o clădire se repetă.'}
 ],
 tehnic:{eticheta:'Detaliu tehnic · instanțiere în OpenGL',
  cod:'glm::mat4 M = glm::translate(I, poz)                 // T\n            * glm::rotate(I, unghi, glm::vec3(0,1,0)) // R\n            * glm::scale(I, glm::vec3(s));            // S\n\n// 1.000 de clădiri, un singur apel de desenare\nglDrawElementsInstanced(GL_TRIANGLES, nrIndici,\n                        GL_UNSIGNED_INT, 0, 1000);',
  text:'Mesh-ul piesei stă o singură dată în memoria plăcii video. Pentru fiecare copie se trimite doar matricea ei 4×4, adică 16 numere. Fără instanțiere, 1.000 de clădiri ar însemna 1.000 de apeluri de desenare, iar fiecare apel costă timp pe procesor.'}
});
