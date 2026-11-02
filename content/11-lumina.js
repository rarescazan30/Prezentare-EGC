/* SLIDE 11 · Cum se luminează o lume atât de mare
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ cameră desenată ───────────┐   [moduri[0].buton] [moduri[1].buton] [moduri[2].buton]
   │ │ textDesen (sus, stânga)    │   ┌ eticheta · CIFRA · text   ┐  ← modul ales
   │ └────────────────────────────┘   └───────────────────────────┘
   │ soare ──●────── 11:30 orarFix    ┌ tehnic: cod │ eticheta + text ┐
   └ */
slide(11,{
 bara:'11 · Lighting',
 an:2025,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Cum se luminează o lume atât de mare',
 subtitlu:'Lumina care vine direct de la soare e ușor de calculat (direct lighting, modelul Phong). Greu e lumina reflectată de pereți și de sol (indirect lighting). Împreună formează global illumination (GI).',
 soare:'Soarele',
 orarFix:' (baked: moment fix)',
 orarDinamic:' (orice oră)',
 moduri:[
  {buton:'1. Baked lighting', textDesen:'1. BAKED LIGHTING · UNITY', eticheta:'Unity · 2014', cifra:'Lightmaps',
   text:'GI-ul e calculat înainte de lansare (baking), pentru câteva momente ale zilei, și salvat în lightmaps, adică texturi. Jocul trece de la un moment la altul. Detalii pe slide-ul următor.'},
  {buton:'2. Light probes', textDesen:'2. LIGHT PROBES · ORIGINS', eticheta:'Origins · 2017', cifra:'Light probes',
   text:'Pe o hartă de 80 km², lightmap-urile ar fi uriașe, așa că indirect lighting-ul e salvat doar în light probes: puncte dintr-o grilă 3D. Obiectele interpolează între probe-urile din jur, așa că lumina e mai „moale” și are mai puține detalii.'},
  {buton:'3. Ray tracing', textDesen:'3. RAY TRACING (RTGI) · SHADOWS', eticheta:'Shadows · 2025', cifra:'2 TB și 2 ani',
   text:'Cu patru anotimpuri, baking-ul ar fi cerut aproximativ 2 TB de date și doi ani de calcul. Așa că GI-ul se calculează în timp real, cu ray tracing (RTGI).'}
 ],
 tehnic:{eticheta:'Pe scurt · de ce e greu indirect lighting-ul',
  text:'Ca să afli câtă lumină reflectată ajunge într-un punct, trebuie să „întrebi” toate suprafețele din jur cât de luminate sunt, iar ele depind la rândul lor de altele. Jocurile au rezolvat asta în trei feluri: au calculat-o dinainte (baked), au salvat-o doar în câteva puncte (light probes) sau o calculează pe loc (ray tracing).'}
});
