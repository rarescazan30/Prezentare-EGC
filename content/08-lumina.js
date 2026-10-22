/* SLIDE 8 · Lumina
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ ┌ cameră desenată ───────────┐   [moduri[0].buton] [moduri[1].buton] [moduri[2].buton]
   │ │ textDesen (sus, stânga)    │   ┌ eticheta                 ┐
   │ │ avertisment (doar modul 2) │   │ CIFRA                    │  ← modul ales
   │ └────────────────────────────┘   │ text                     │
   │ soare ──●────── 11:30 orarFix    └──────────────────────────┘
   │                                  ┌ bare (eticheta, GB, text) ┐
   └ */
slide(8,{
 bara:'08 · Lumina',
 an:2014,
 supratitlu:'Iluminarea lumii',
 titlu:'Cum se luminează o lume uriașă',
 soare:'Soarele',
 orarFix:' (Preset fix)',
 orarDinamic:' (Dinamic 24h)',
 moduri:[
  {buton:'1. Calculată în avans', textDesen:'1. CALCULATĂ ÎN AVANS · UNITY', eticheta:'Unity · 2014',
   cifra:'4 momente fixe ale zilei',
   text:'Parisul din Unity este mic, așa că lumina a putut fi calculată în avans pentru patru momente ale zilei. Arată bine, dar nu se mai schimbă în timp ce joci.',
   bare:[['Harta Unity (2,40 km²)',12,'≈12 GB · 4 momente fixe']]},
  {buton:'2. Puncte rare', textDesen:'2. PUNCTE RARE · ORIGINS',
   eticheta:'Origins, Odyssey, Valhalla · 2017–2020', cifra:'450 GB → 9 GB',
   text:'Pe o hartă de 80 km², cu zi și noapte, calculul în avans ar fi cerut 450 GB și trei luni. Lumina a fost măsurată doar în puncte rare, iar datele au scăzut la 9 GB, dar pe alocuri apar pete de lumină unde nu ar trebui.',
   bare:[['Calcul în avans (teoretic)',450,'450 GB · 3 luni'],['Puncte rare (folosit)',9,'9 GB · zi și noapte']]},
  {buton:'3. Timp real', textDesen:'3. TIMP REAL · SHADOWS', eticheta:'Shadows · 2025',
   cifra:'Lumină calculată pe loc',
   text:'Cu patru anotimpuri pe 80–125 km², calculul în avans ar fi cerut 2 TB și doi ani. În Shadows, lumina se calculează în timp ce joci, iar reflexiile de pe pereți și de pe zăpadă se văd natural.',
   bare:[
    ['Calcul în avans (teoretic)',2000,'2.000 GB · 2 ani'],
    ['Timp real (folosit)',1,'fără date calculate în avans']
   ]}
 ],
 avertisment:'⚠ Lumină care „se scurge” în colțul tavanului'
});
