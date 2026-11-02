/* SLIDE 15 · Cum funcționează AI recycling
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   ← cei 3 pași (eticheta + text)
   │ ┌ tehnic: cod │ eticheta + text ┐   ← detaliu tehnic
   └

   Sursa: descrierea prezentării „Massive Crowd on Assassin’s Creed Unity: AI Recycling”
   (François Cournoyer, GDC 2015). Codul e un exemplu de principiu, nu codul Ubisoft. */
slide(15,{
 bara:'15 · AI recycling',
 an:2014,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Cum a ținut Unity 10.000 de NPC-uri pe ecran: AI recycling',
 subtitlu:'La GDC 2015, Ubisoft a prezentat un „AI level of detail”: doar 40 de AI-uri reale și 120 de modele high-res, din care se construiește un crowd de până la 10.000 de NPC-uri persistente și interactive.',
 carduri:[
  {eticheta:'1 · Un AI simplu pentru toți', cifra:'„Simplistic AI brain”',
   text:'Miile de NPC-uri din fundal au un AI foarte simplu: merg, se opresc, reacționează puțin. Atât cât să pară vii de departe.'},
  {eticheta:'2 · Pooling', cifra:'40 AI · 120 high-res',
   text:'AI-urile complete și modelele high-res sunt un pool fix. Când te apropii de un NPC low-res, el primește un model și un AI din pool; unul rămas în urmă îl eliberează.'},
  {eticheta:'3 · Swap invizibil', cifra:'low-res ↔ high-res',
   text:'Schimbul se face fără ca jucătorul să observe: NPC-ul rămâne pe loc și continuă ce făcea, doar primește mai mult detaliu. De aceea crowd-ul pare persistent.'}
 ],
 tehnic:{eticheta:'Detaliu tehnic · object pooling (exemplu de principiu)',
  cod:'// pool fix: 40 de AI-uri reale, 120 de modele high-res\nfor (npc : crowd) {\n  bool aproape = distance(npc, jucator) < R;\n  if (aproape && !npc.highRes && pool.areLiber())\n    npc.ia(pool.scoate());        // swap low-res → high-res\n  else if (!aproape && npc.highRes)\n    pool.pune(npc.elibereaza());  // swap înapoi\n}',
  text:'Ideea de bază e object pooling: în loc să creezi și să distrugi personaje (scump: alocări de memorie, încărcare de modele), ții un număr fix și le refolosești. Ubisoft nu a publicat implementarea, așa că acest cod e doar un exemplu. Cifrele 40, 120 și 10.000 sunt din descrierea oficială a prezentării de la GDC 2015.'}
});
