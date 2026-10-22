/* SLIDE 5 · Cât au crescut hărțile
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ [butonScara: scaraLogaritmica]  [butonReda]   nota
   │ ┌ graficul: câte o bară pentru fiecare hartă din `jocuri`
   │ │ scurt · loc   ▇▇▇▇▇▇▇▇            km2 km²
   │ │ …             (linia roșie = limita, la 4 km²)
   │ └
   │ textJos   ← la hover se înlocuiește cu `text`-ul hărții
   └

   `jocuri` e folosit și în bibliografie (slide-ul 20, grupul „Harta francizei”).
   Schimbi un număr aici și se schimbă în ambele locuri. */
slide(5,{
 bara:'05 · Cât au crescut hărțile',
 an:2018,
 supratitlu:'Comparație între jocuri',
 titlu:'Cât de mult au crescut hărțile',
 butonScara:'Scară',
 scaraLogaritmica:'logaritmică',
 scaraLiniara:'liniară',
 butonReda:'▶ Redă în ordine',
 nota:'Linia roșie marchează 4 km², limita până la care o hartă se mai poate construi manual.',
 limita:'Pragul de 4 km²',
 jocuri:[
  {titlu:'Assassin’s Creed', scurt:'AC I', an:2007, loc:'Damasc (Țara Sfântă)', uscat:'0,13',
   total:'0,13 (0,36 orașe combinate)', motor:'Scimitar', epoca:0,
   descriere:'Sandbox urban medieval compact; social stealth și parkour pe acoperișuri calibrate la săritură.',
   harti:[
    {loc:'Damasc', km2:0.13,
     text:'Assassin’s Creed (2007) · Damasc: 0,13 km². Un oraș medieval mic, în care săriturile pe acoperișuri erau calculate la distanța exactă.'}
   ]},
  {titlu:'Assassin’s Creed II', scurt:'AC II', an:2009, loc:'Florența și Veneția',
   uscat:'0,30 / 0,37', total:'0,30 / 0,37', motor:'Anvil', epoca:0,
   descriere:'Peisaje urbane renascentiste artizanale; ordine arhitecturală vitruviană și repere verticale.',
   harti:[
    {loc:'Florența', km2:0.3,
     text:'Assassin’s Creed II (2009) · Florența: 0,30 km². Un oraș renascentist modelat cu grijă, cu clădiri înalte folosite ca repere.'},
    {loc:'Veneția', km2:0.37,
     text:'Assassin’s Creed II (2009) · Veneția: 0,37 km². Cartiere diferite ca aspect și sunet, cu acoperișuri dese și canale.'}
   ]},
  {titlu:'AC: Brotherhood', scurt:'Brotherhood', an:2010, loc:'Roma', uscat:'1,41', total:'1,41',
   motor:'Anvil', epoca:0,
   descriere:'Peisaj imperial cu ruine multi-district, îmbinând densitatea urbană și zona rurală.',
   harti:[
    {loc:'Roma', km2:1.41,
     text:'Brotherhood (2010) · Roma: 1,41 km². Ruine și cartiere dese, amestecate cu zone mai rurale.'}
   ]},
  {titlu:'AC: Revelations', scurt:'Revelations', an:2011, loc:'Constantinopol', uscat:'0,94',
   total:'0,94', motor:'Anvil', epoca:0,
   descriere:'Oraș de răscruce stratificat vertical, de înaltă densitate, divizat de căi navigabile.',
   harti:[
    {loc:'Constantinopol', km2:0.94,
     text:'Revelations (2011) · Constantinopol: 0,94 km². Un oraș pe mai multe niveluri, tăiat de ape și traversat cu tiroliene.'}
   ]},
  {titlu:'Assassin’s Creed III', scurt:'AC III', an:2012, loc:'New York și Frontiera',
   uscat:'0,93 / 1,41', total:'2,34+ (Combinat)', motor:'AnvilNext', epoca:0,
   descriere:'Juxtapunerea rețelelor stradale coloniale cu traversarea organică prin copaci în sălbăticie.',
   harti:[
    {loc:'New York', km2:0.93,
     text:'Assassin’s Creed III (2012) · New York colonial: 0,93 km². Străzi înghesuite și drepte, care sugerau controlul imperial.'},
    {loc:'Frontiera', km2:1.41,
     text:'Assassin’s Creed III (2012) · Frontiera: 1,41 km². Parkour-ul se mută din oraș în copaci și pe stânci.'}
   ]},
  {titlu:'AC IV: Black Flag', scurt:'Black Flag', an:2013, loc:'Caraibe / Indiile de Vest',
   uscat:'~120,0 (Nucleu)', total:'235,0', motor:'AnvilNext', epoca:1,
   descriere:'Arhipelag cu tranziție fluidă mare-uscat; traversare preponderent oceanică.',
   harti:[
    {loc:'Caraibe', km2:120,
     text:'Black Flag (2013) · Caraibele: circa 120 km² (235 km² în total). Un arhipelag străbătut cu corabia, fără pauză între mare și uscat.'}
   ]},
  {titlu:'Assassin’s Creed Rogue', scurt:'Rogue', an:2014, loc:'Atlanticul de Nord',
   uscat:'N/A (Arhipelag)', total:'70,0', motor:'AnvilNext', epoca:1,
   descriere:'Mediu maritim subarctic cu văi fluviale și noduri urbane.',
   harti:[
    {loc:'Atlantic', km2:70, hasurat:true,
     text:'Rogue (2014) · Atlanticul de Nord: 70 km². Mări reci, văi de râuri și orașe mici.'}
   ]},
  {titlu:'Assassin’s Creed Unity', scurt:'Unity', an:2014, loc:'Paris', uscat:'2,40', total:'2,40',
   motor:'AnvilNext 2.0', epoca:1,
   descriere:'Scară monumentală 1:1; iluminare globală pre-calculată (baked); reciclare AI pentru mulțimi de peste 10.000 NPC-uri.',
   harti:[
    {loc:'Paris', km2:2.4,
     text:'Unity (2014) · Paris: 2,40 km². Orașul la scară reală, cu interioare deschise, lumină calculată în avans și mulțimi de 10.000–12.000 de oameni.'}
   ]},
  {titlu:'AC: Syndicate', scurt:'Syndicate', an:2015, loc:'Londra victoriană', uscat:'3,70',
   total:'3,70', motor:'AnvilNext 2.0', epoca:1,
   descriere:'Bulevarde industriale largi, bucle feroviare și bifurcația râului Tamisa; lansator de frânghie.',
   harti:[
    {loc:'Londra', km2:3.7,
     text:'Syndicate (2015) · Londra victoriană: 3,70 km². Străzile largi și Tamisa erau prea mari pentru sărituri, așa că a apărut cârligul cu frânghie.'}
   ]},
  {titlu:'Assassin’s Creed Origins', scurt:'Origins', an:2017, loc:'Egiptul ptolemaic', uscat:'80,0',
   total:'92,0 (cu DLC)', motor:'AnvilNext 2.0', epoca:2,
   descriere:'Biomuri procedurale continentale; validare automatizată C# (Atlas); sonde GI rare (9 GB vs 450 GB).',
   harti:[
    {loc:'Egipt', km2:80,
     text:'Origins (2017) · Egiptul: 80 km² (92 km² cu DLC). Teren generat după reguli, teste de noapte și lumină măsurată în puncte rare.'}
   ]},
  {titlu:'Assassin’s Creed Odyssey', scurt:'Odyssey', an:2018, loc:'Grecia Antică', uscat:'130,0',
   total:'256,0', motor:'AnvilNext 2.0', epoca:2,
   descriere:'Topografie mitică maximalistă terestră și maritimă pe o grilă de 16×16 km.',
   harti:[
    {loc:'Grecia', km2:130,
     text:'Odyssey (2018) · Grecia Antică: 130 km² de uscat, într-o hartă a Mării Egee de 256 km². O hartă uriașă, cu uscat și mare.'}
   ]},
  {titlu:'Assassin’s Creed Valhalla', scurt:'Valhalla', an:2020, loc:'Norvegia și Anglia',
   uscat:'22,0 / 94,0', total:'22,0 / 120,0', motor:'Ubisoft Anvil', epoca:2,
   descriere:'Palimpsest multi-regat de ruine neolitice, romane și saxone.',
   harti:[
    {loc:'Anglia', km2:94,
     text:'Valhalla (2020) · Anglia: 94 km² de uscat (120 km² cu mările), plus Norvegia: 22 km². Ruine romane și forturi saxone, ridicate peste straturi mai vechi.'}
   ]},
  {titlu:'Assassin’s Creed Mirage', scurt:'Mirage', an:2023, loc:'Bagdadul secolului IX',
   uscat:'2,30', total:'2,30', motor:'Ubisoft Anvil', epoca:2,
   descriere:'Revenire la un singur oraș dens, axat pe stealth și urbanism centrat pe parkour.',
   harti:[
    {loc:'Bagdad', km2:2.3,
     text:'Mirage (2023) · Bagdadul secolului al IX-lea: 2,30 km². O întoarcere la un oraș mic și dens, cu discreție printre oameni și parkour.'}
   ]},
  {titlu:'Assassin’s Creed Shadows', scurt:'Shadows', an:2025, loc:'Japonia feudală', uscat:'80,0',
   total:'125,0', motor:'Ubisoft Anvil (Modernizat)', epoca:2,
   descriere:'Iluminare globală Ray-Traced (RTGI), Micropoligoane GPU și anotimpuri dinamice.',
   harti:[
    {loc:'Japonia', km2:80,
     text:'Shadows (2025) · Japonia feudală: 80 km² jucabili (125 km² în total). Lumină calculată în timp real și patru anotimpuri.'}
   ]}
 ],
 textJos:'Treci cu mouse-ul peste un joc ca să vezi detaliile.'
});
