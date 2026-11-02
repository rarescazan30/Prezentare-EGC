/* SLIDE 8 · Cine verifică o hartă atât de mare?
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ 0 verificate  0 probleme ┐ ┌ carduri[0] ┐ ┌ carduri[1] ┐
   │ │ textInitial → rezultat   │
   │ etichetaTest   [butonPornire]    ┌ tehnic ─────────────────────┐
   │ ┌ hartă animată ─────────────┐   │ cod                         │
   │ │ textDesen (sus)            │   │ eticheta                    │
   │ └────────────────────────────┘   │ text                        │
   │                                  └─────────────────────────────┘
   └ */
slide(8,{
 bara:'08 · Nightly tests',
 an:2017,
 supratitlu:'Partea 2 · Cum se construiește',
 titlu:'Cine verifică o hartă atât de mare? Automated testing, noaptea',
 subtitlu:'Pe o hartă de zeci de km², nimeni nu poate încerca de mână fiecare scară și fiecare acoperiș.',
 etichetaTest:'Nightly test',
 butonPornire:'▶ Pornește testul',
 textDesen:'SIMULARE',
 verificate:'obiecte verificate',
 probleme:'probleme găsite',
 textInitial:'Apasă „Pornește testul” ca să vezi cum e parcursă harta.',
 rezultat:'Rezultat: ',
 tipuriProbleme:['scări blocate','margini lipsă','zipline-uri întrerupte','obiecte în aer','trasee blocate'],
 carduri:[
  {eticheta:'Noaptea', text:'Boți (programe automate) parcurg harta și încearcă fiecare scară, ledge și zipline.'},
  {eticheta:'Dimineața', text:'Echipa primește o hartă cu locurile unde ceva nu merge și le repară.'}
 ],
 tehnic:{eticheta:'Detaliu tehnic · un automated test (pseudocod)',
  cod:'// cum ar arăta testul pentru scări\nfor (scara : toateScarile) {\n  bot.teleporteaza(scara.jos);\n  bot.urca(scara);\n  if (!bot.aAjuns(scara.sus, 10 /* secunde */))\n    raport.adauga(scara.pozitie, "scară blocată");\n}',
  text:'Testele pornesc automat după ce se adună munca din ziua respectivă (nightly build). Fiecare problemă e salvată cu poziția ei și apare dimineața pe hartă ca un punct roșu. Ubisoft a prezentat un sistem de acest fel pentru Origins, la GDC 2018.'}
});
