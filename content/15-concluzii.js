/* SLIDE 15 · Ce am învățat
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   (eticheta + text, câte una pe parte)
   │ indiciuBibliografie
   │ ▸ bibliografie[0].titlu        N unitate      ← se deschide la click
   │ ▸ bibliografie[1].titlu        N unitate
   └

   Fiecare rând din bibliografie: [titlu, adresă fără https://]. Verificați că linkurile funcționează. */
slide(15,{
 bara:'15 · Concluzii',
 an:2025,
 supratitlu:'Concluzii',
 titlu:'Ce am învățat',
 carduri:[
  {eticheta:'Partea 1', text:'Lumile au crescut de la câteva orașe mici la țări întregi, apoi seria s-a întors și la orașe dense.'},
  {eticheta:'Partea 2', text:'Un oraș mare se face din piese refolosite, reguli automate și teste făcute de programe.'},
  {eticheta:'Partea 3', text:'Lumina, vremea și mulțimile fac orașul viu, iar trucuri ca nivelul de detaliu îl fac să meargă fluid.'}
 ],
 indiciuBibliografie:'Bibliografie · apasă pe un grup pentru a-l deschide',
 bibliografie:[
  {titlu:'Prezentări și articole din industrie', unitate:'surse', randuri:[
   ['Nicholas Routhier (GDC 2018) — Assassin’s Creed Origins: Monitoring and Validation of World Design Data','gdcvault.com/play/1025452/-Assassin-s-Creed-Origins'],
   ['François Cournoyer (GDC 2015) — Massive Crowd on Assassin’s Creed Unity: AI Recycling','gdcvault.com/play/1022411/Massive-Crowd-on-Assassin-s'],
   ['Nicolas Lopez (GDC 2025) — Cum a fost randată Japonia feudală în AC Shadows','gdconf.com/article/how-ubisoft-brought-feudal-japan-to-life-rendering-assassin-s-creed-shadows-with-nicolas-lopez'],
   ['Ubisoft (SIGGRAPH 2025) — Raytracing the World of Assassin’s Creed Shadows','advances.realtimerendering.com/s2025/content/Advances_2025_Raytracing_the_world_of_AC_Shadows.pdf'],
   ['DSOGaming (2025) — De ce lumina calculată dinainte în AC Shadows ar fi cerut 2 TB și 2 ani','dsogaming.com/news/assassins-creed-shadows-would-require-2tb-of-data-and-2-years-for-baked-lighting'],
   ['Colin Barré-Brisebois (2015) — De ce e nevoie de iluminare globală rapidă','colinbarrebrisebois.com/2015/11/06/finding-next-gen-part-i-the-need-for-robust-and-fast-global-illumination'],
   ['Digital Foundry (2014) — Analiza tehnică a Assassin’s Creed Unity','digitalfoundry.net/articles/digitalfoundry-2014-assassins-creed-unity-face-off'],
   ['Jonathan Dumont (2015) — The World Design of Assassin’s Creed Syndicate','gamedeveloper.com/design/the-world-design-of-assassin-s-creed-syndicate-full-transcript'],
   ['Destructoid (2014) — Caroline Miousse și cei doi ani petrecuți pe Notre-Dame','destructoid.com/one-dev-spent-two-years-making-the-notre-dame-in-assassins-creed-unity'],
   ['SIGGRAPH Blog (2019) — Cum a refăcut Ubisoft Notre-Dame pentru Unity','blog.siggraph.org/2019/05/how-ubisoft-re-created-notre-dame-for-assassins-creed-unity.html'],
   ['method.gg — Dimensiunea hărții din AC Shadows','method.gg/assassins-creed-shadows/assassins-creed-shadows-map-size-and-locations']
  ]},
  {titlu:'Cercetare', unitate:'surse', randuri:[
   ['Kevin Lynch (1960) — The Image of the City','MIT Press'],
   ['Gabriele Aroni (2022) — The Semiotics of Architecture in Video Games','Bloomsbury Academic'],
   ['Aurélien Catros & Maxime Leblanc — When Boston is Not Boston: The Useful Lies of Reconstructive Game Models','crc.umontreal.ca/telechargement/when-boston-is-not-boston-the-useful-lies-of-reconstructive-game-models']
  ]}
 ]
});
