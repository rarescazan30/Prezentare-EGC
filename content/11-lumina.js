/* SLIDE 11 · Cum se luminează o lume atât de mare
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ cameră desenată ───────────┐   [moduri[0].buton] [moduri[1].buton] [moduri[2].buton]
   │ │ textDesen (sus, stânga)    │   ┌ eticheta                 ┐
   │ │ avertisment (doar modul 2) │   │ CIFRA                    │  ← modul ales
   │ └────────────────────────────┘   │ text                     │
   │ soare ──●────── 11:30 orarFix    └──────────────────────────┘
   └ */
slide(11,{
 bara:'11 · Lumina',
 an:2025,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Cum se luminează o lume atât de mare',
 subtitlu:'La EGC am calculat lumina directă (modelul Phong). Jocurile adaugă și lumina reflectată de pereți și de sol: iluminarea globală. Doar că e foarte scumpă.',
 soare:'Soarele',
 orarFix:' (moment fix)',
 orarDinamic:' (orice oră)',
 moduri:[
  {buton:'1. Calculată dinainte', textDesen:'1. CALCULATĂ DINAINTE · UNITY', eticheta:'Unity · 2014',
   cifra:'Lumină „coaptă” dinainte',
   text:'Lumina reflectată e calculată înainte de lansare, pentru câteva momente ale zilei, și salvată în texturi. Jocul trece de la un moment la altul.'},
  {buton:'2. Măsurată în puncte', textDesen:'2. MĂSURATĂ ÎN PUNCTE · ORIGINS', eticheta:'Origins · 2017',
   cifra:'Lumină salvată în puncte',
   text:'Pe o hartă de 80 km² nu mai încape totul în texturi, așa că lumina e salvată doar în anumite puncte din spațiu. Între ele se aproximează, iar uneori lumina „se scurge” unde nu trebuie.'},
  {buton:'3. Calculată pe loc', textDesen:'3. CALCULATĂ PE LOC · SHADOWS', eticheta:'Shadows · 2025',
   cifra:'2 TB și 2 ani',
   text:'Cu patru anotimpuri, calculul dinainte ar fi cerut aproximativ 2 TB de date și doi ani. Așa că lumina reflectată se calculează în timp real, cu ray tracing.'}
 ],
 avertisment:'⚠ Lumină care „se scurge” în colțul tavanului'
});
