/* SLIDE 8 · Cine verifică o hartă atât de mare?
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ etichetaTest     [butonPornire] ┐  ┌ 0 verificate   0 probleme ┐
   │ │ textDesen (sus)                 │  │ textInitial → rezultat     │
   │ │ hartă animată                   │  └────────────────────────────┘
   │ └─────────────────────────────────┘  ┌ carduri[0], carduri[1]     ┐
   └ */
slide(8,{
 bara:'08 · Teste de noapte',
 an:2017,
 supratitlu:'Partea 2 · Cum se construiește',
 titlu:'Cine verifică o hartă atât de mare? Programe care rulează noaptea',
 subtitlu:'Pe o hartă de zeci de km², nimeni nu poate încerca de mână fiecare scară și fiecare acoperiș.',
 etichetaTest:'Test de noapte',
 butonPornire:'▶ Pornește testul',
 textDesen:'SIMULARE',
 verificate:'obiecte verificate',
 probleme:'probleme găsite',
 textInitial:'Apasă „Pornește testul” ca să vezi cum e parcursă harta.',
 rezultat:'Rezultat: ',
 tipuriProbleme:['scări blocate','margini lipsă','tiroliene întrerupte','obiecte în aer','trasee blocate'],
 carduri:[
  {eticheta:'Noaptea', text:'Programe automate parcurg harta și încearcă fiecare scară, margine și tiroliană.'},
  {eticheta:'Dimineața', text:'Echipa primește o hartă cu locurile unde ceva nu merge și le repară.'}
 ]
});
