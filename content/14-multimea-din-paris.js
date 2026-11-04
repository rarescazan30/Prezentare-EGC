/* SLIDE 14 · Crowd-ul din Unity
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ etichetaVii  40 ┐ ┌ etichetaDetaliate 120 ┐ ┌ 1.880 figuranti · 0 schimburi ┐
   │ ┌ piața animată ─────────────┐   ┌ carduri[0] ┐
   │ │ (tu = emblema roșie)       │   ├ carduri[1] ┤   (eticheta + text)
   │ └────────────────────────────┘   └ carduri[2] ┘
   │ etichetaCursor ──●──
   │ procent
   │ ┌ tehnic: eticheta + text ┐   ← explicație pe scurt
   └

   Cifrele 40 / 120 / 10.000 sunt din descrierea prezentării GDC 2015 (Cournoyer).
   Slider-ul merge doar până la 2.000, ca simularea să rămână ușor de urmărit. */
slide(14,{
 bara:'14 · Crowd',
 an:2014,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Sute de NPC-uri în piață, dar doar 40 au AI complet',
 subtitlu:'Simulare cu 500–2.000 de NPC-uri (în Unity erau până la 10.000 pe ecran). Detaliul depinde de distanța față de tine: LOD pentru AI și pentru modele.',
 etichetaCursor:'NPC-uri în piață',
 etichetaVii:'Lângă tine',
 vii:'au AI complet (cercuri aurii)',
 etichetaDetaliate:'Puțin mai departe',
 detaliate:'modele high-res (albastru)',
 figuranti:'Restul: NPC-uri low-res',
 schimburi:'swap-uri pe secundă',
 carduri:[
  {eticheta:'De ce nu 10.000 de AI-uri complete',
   text:'Un AI complet își caută drumul și reacționează la tot ce e în jur. Înmulțit cu mii de NPC-uri, procesorul n-ar face față.'},
  {eticheta:'Mulțimea e o iluzie',
   text:'De departe vezi doar oameni care se mișcă, nu detalii. NPC-urile depărtate pot fi simple fără să observi.'},
  {eticheta:'Detaliul te urmează',
   text:'NPC-urile din fața ta primesc detaliu, cele rămase în urmă îl pierd. Lângă tine, piața pare mereu plină de oameni reali.'}
 ],
 tehnic:{eticheta:'Pe scurt · cât detaliu primește fiecare NPC',
  text:'Pentru fiecare NPC, jocul verifică distanța față de tine și dacă e în fața camerei. Aproape: AI complet și model detaliat. Departe: doar un model simplu. În afara câmpului vizual: nu se desenează deloc.'}
});
