/* SLIDE 14 · Crowd-ul din Unity
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ etichetaVii  40 ┐ ┌ etichetaDetaliate 120 ┐ ┌ 1.880 figuranti · 0 schimburi ┐
   │ │ vii             │ │ detaliate              │ └───────────────────────────────┘
   │ ┌ piața animată ─────────────┐   ┌ tehnic ─────────────────────┐
   │ │ (tu = emblema roșie)       │   │ cod                         │
   │ └────────────────────────────┘   │ eticheta                    │
   │ etichetaCursor ──●── indiciu     │ text                        │
   │ procent                          └─────────────────────────────┘
   └

   Cifrele 40 / 120 / 10.000 sunt din descrierea prezentării GDC 2015 (Cournoyer).
   Slider-ul merge doar până la 2.000, ca simularea să rămână ușor de urmărit. */
slide(14,{
 bara:'14 · Crowd',
 an:2014,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Sute de NPC-uri în piață, dar doar 40 au AI complet',
 subtitlu:'Simulare cu 500–2.000 de NPC-uri; în Unity erau până la 10.000 pe ecran. Detaliul depinde de distanța față de tine: LOD aplicat atât la AI, cât și la modele.',
 etichetaCursor:'NPC-uri în piață',
 indiciu:'Mișcă mouse-ul: tu ești emblema roșie.',
 etichetaVii:'Lângă tine',
 vii:'au AI complet (cercuri aurii)',
 etichetaDetaliate:'Puțin mai departe',
 detaliate:'modele high-res (albastru)',
 figuranti:'Restul: NPC-uri low-res',
 schimburi:'swap-uri pe secundă',
 procent:'Când te miști, un NPC low-res de departe devine high-res lângă tine. Doar {p}% au AI complet în același timp.',   // {p} = procentul calculat
 tehnic:{eticheta:'Detaliu tehnic · LOD și frustum culling (exemplu)',
  cod:'float d = distance(npc.poz, jucator.poz);\nif      (d < 15) npc.lod = FULL_AI;   // AI + model high-res\nelse if (d < 40) npc.lod = HIGH_RES;  // model high-res\nelse             npc.lod = LOW_RES;   // model simplu',
  text:'Ce e departe primește mai puțin calcul, la fel ca la LOD-ul obiectelor 3D. Pragurile din cod sunt doar un exemplu. În plus, frustum culling-ul folosește frustum-ul camerei, dat de projection matrix: ce e în afara lui nici nu se trimite la GPU.'}
});
