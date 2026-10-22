/* SLIDE 11 · Orientarea în oraș
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ harta animată ─────────────┐   [1. nume] [2. nume] … ← elemente
   │ │ cartiere (scrise pe hartă) │   nota
   │ └────────────────────────────┘   ┌ 1. nume                  ┐
   │ [butonCeata]  notaCeata          │ definitie                │
   │                                  │ etichetaInJoc            │
   │                                  │ inJoc                    │
   │                                  └──────────────────────────┘
   └

   `elemente` e folosit și în bibliografie (slide-ul 20, grupul Lynch):
   acolo apar `termen` și `definitie`. `detaliu` nu se vede, e o notă.
   Ordinea elementelor contează: e legată de desenul de pe hartă. */
slide(11,{
 bara:'11 · Orientarea în oraș',
 an:1960,
 supratitlu:'Kevin Lynch · 1960',
 titlu:'Cum te orientezi într-un oraș',
 subtitlu:'Arhitectul Kevin Lynch a arătat că oamenii își țin minte un oraș prin cinci elemente. Jocul le folosește pe toate.',
 cartiere:['Cartier nobil','Piața centrală','Port','Periferie','Zonă industrială','Gară'],
 butonCeata:'Acoperă harta din nou',
 notaCeata:'Apasă pe un blazon ca să descoperi harta.',
 elemente:[
  {nume:'Repere', definitie:'Clădiri sau monumente înalte, vizibile de departe.',
   inJoc:'Notre-Dame sau catedrala din Florența te ajută să știi unde te afli. În joc, aici sunt punctele de sincronizare.',
   termen:'Repere (Landmarks)',
   detaliu:'Monumente istorice emblematice (Santa Maria del Fiore, Notre-Dame, Westminster Abbey) care funcționează ca atractori vizuali („weenies”) și Viewpoints escaladabile pentru sincronizarea hărții.'},
  {nume:'Trasee', definitie:'Drumurile pe care te miști prin oraș.',
   inJoc:'Alei la nivelul străzii și un „drum” continuu pe acoperișuri, pentru parkour.',
   termen:'Trasee (Paths)',
   detaliu:'Artere de traversare pe două straturi: străzi la nivelul solului (alei darb în zig-zag din Orientul Mijlociu, căi ferate victoriene) și autostrăzi continue de parkour pe acoperișuri.'},
  {nume:'Cartiere', definitie:'Zone ale orașului cu un aspect și o viață proprii.',
   inJoc:'Se deosebesc prin culori, clădiri, personaje și sunete.', termen:'Districte (Districts)',
   detaliu:'Zonare socio-economică, culturală și de biom, diferențiată prin palete de culori distincte, materiale de construcție, comportamente ale mulțimii și ambianțe acustice.'},
  {nume:'Margini', definitie:'Linii care despart două zone: ziduri, ape, faleze.',
   inJoc:'Zidurile fortificate sau râul Tamisa din Londra.', termen:'Margini (Edges)',
   detaliu:'Ziduri de fortăreață, stânci, maluri de râu (cum ar fi râul Tamisa care divide Londra) și granițe de biom care canalizează mișcarea sau necesită traversare tactică.'},
  {nume:'Noduri', definitie:'Locuri unde se întâlnesc mai multe drumuri, de obicei piețe.',
   inJoc:'Piețe și forturi construite circular, ca să poți intra din orice direcție.',
   termen:'Noduri (Nodes)',
   detaliu:'Piețe comerciale, scuaruri și forturi proiectate utilizând filozofia de design al misiunilor la 360 de grade (P. Bergeron) pentru a permite infiltrarea stealth și de luptă pe vectori multipli.'}
 ],
 nota:'Trece cu mouse-ul peste un element ca să vezi explicația. Apasă ca să îl ascunzi sau să îl arăți pe hartă.',
 etichetaInJoc:'În Assassin’s Creed'
});
