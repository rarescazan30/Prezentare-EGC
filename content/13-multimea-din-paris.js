/* SLIDE 13 · Mii de oameni, doar câteva zeci gândesc
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ etichetaVii  40 ┐ ┌ etichetaDetaliate 120 ┐ ┌ 11.880 figuranti · 0 schimburi ┐
   │ │ vii             │ │ detaliate              │ └────────────────────────────────┘
   │ ┌ piața animată ─────────────┐   ┌ tehnic ─────────────────────┐
   │ │ (tu = emblema roșie)       │   │ cod                         │
   │ └────────────────────────────┘   │ eticheta                    │
   │ etichetaCursor ──●── indiciu     │ text                        │
   │ procent                          └─────────────────────────────┘
   └ */
slide(13,{
 bara:'13 · Mulțimea',
 an:2014,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Mii de oameni pe stradă, dar doar câteva zeci „gândesc”',
 subtitlu:'Detaliul depinde de cât de aproape e omul de tine, la fel ca nivelul de detaliu (LOD) de la obiectele 3D.',
 etichetaCursor:'Oameni în piață',
 indiciu:'Mișcă mouse-ul: tu ești emblema roșie.',
 etichetaVii:'Aproape de tine',
 vii:'au comportament complet (cercuri aurii)',
 etichetaDetaliate:'Puțin mai departe',
 detaliate:'sunt desenați în detaliu (albastru)',
 figuranti:'Restul: figuranți simpli',
 schimburi:'oameni „reciclați” pe secundă',
 procent:'Când te miști, un om de departe devine unul de aproape. Doar {p}% dintre ei „gândesc” în același timp.',   // {p} = procentul calculat
 tehnic:{eticheta:'Detaliu tehnic · LOD și culling (exemplu)',
  cod:'float d = distance(om.poz, jucator.poz);\nif      (d < 15) om.nivel = COMPLET;  // AI + model detaliat\nelse if (d < 40) om.nivel = MEDIU;    // model detaliat\nelse             om.nivel = FIGURANT; // model simplu',
  text:'Ce e departe primește mai puțin calcul, la fel ca la obiectele 3D. Pragurile din cod sunt doar un exemplu. În plus, frustum culling-ul folosește piramida de vizualizare dată de matricea de proiecție: ce e în afara ei nici nu se trimite la placa video.'}
});
