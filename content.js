/* =====================================================================
   CONȚINUTUL PREZENTĂRII
   Aici se schimbă informațiile. Restul fișierelor (index.html, styles.css, js/) doar le afișează.

   Reguli ca să nu strici pagina:
   - textul stă între apostrofuri '...'; pentru apostrof în text folosește ’ (nu ')
   - nu șterge virgulele dintre elemente
   - după o modificare, reîncarcă pagina și verifică consola (Cmd+Option+J)
   ===================================================================== */

/* ---------- JOCURILE ----------
   O singură sursă pentru fiecare joc. De aici se construiesc:
   - graficul de pe slide-ul 5 (lista `maps`)
   - tabelul „Harta francizei” din bibliografie (slide-ul 20)

   title    numele jocului (anul se adaugă automat)
   short    numele scurt din grafic
   year     anul lansării
   setting  locația, pentru tabel
   land     suprafața de uscat, așa cum apare în tabel (text)
   total    suprafața totală, așa cum apare în tabel (text)
   engine   motorul grafic
   about    paradigma spațială, pentru tabel
   era      culoarea barei: 0 = 2007–2012, 1 = 2013–2015, 2 = 2017–2025
   maps     barele din grafic: loc, km2 (număr, cu punct zecimal), text la hover;
            hatch:true = bară hașurată
*/
const GAMES=[
 {title:'Assassin’s Creed',short:'AC I',year:2007,setting:'Damasc (Țara Sfântă)',land:'0,13',total:'0,13 (0,36 orașe combinate)',engine:'Scimitar',era:0,
  about:'Sandbox urban medieval compact; social stealth și parkour pe acoperișuri calibrate la săritură.',
  maps:[{loc:'Damasc',km2:.13,text:'Assassin’s Creed (2007) · Damasc: 0,13 km². Un oraș medieval mic, în care săriturile pe acoperișuri erau calculate la distanța exactă.'}]},
 {title:'Assassin’s Creed II',short:'AC II',year:2009,setting:'Florența și Veneția',land:'0,30 / 0,37',total:'0,30 / 0,37',engine:'Anvil',era:0,
  about:'Peisaje urbane renascentiste artizanale; ordine arhitecturală vitruviană și repere verticale.',
  maps:[{loc:'Florența',km2:.30,text:'Assassin’s Creed II (2009) · Florența: 0,30 km². Un oraș renascentist modelat cu grijă, cu clădiri înalte folosite ca repere.'},
        {loc:'Veneția',km2:.37,text:'Assassin’s Creed II (2009) · Veneția: 0,37 km². Cartiere diferite ca aspect și sunet, cu acoperișuri dese și canale.'}]},
 {title:'AC: Brotherhood',short:'Brotherhood',year:2010,setting:'Roma',land:'1,41',total:'1,41',engine:'Anvil',era:0,
  about:'Peisaj imperial cu ruine multi-district, îmbinând densitatea urbană și zona rurală.',
  maps:[{loc:'Roma',km2:1.41,text:'Brotherhood (2010) · Roma: 1,41 km². Ruine și cartiere dese, amestecate cu zone mai rurale.'}]},
 {title:'AC: Revelations',short:'Revelations',year:2011,setting:'Constantinopol',land:'0,94',total:'0,94',engine:'Anvil',era:0,
  about:'Oraș de răscruce stratificat vertical, de înaltă densitate, divizat de căi navigabile.',
  maps:[{loc:'Constantinopol',km2:.94,text:'Revelations (2011) · Constantinopol: 0,94 km². Un oraș pe mai multe niveluri, tăiat de ape și traversat cu tiroliene.'}]},
 {title:'Assassin’s Creed III',short:'AC III',year:2012,setting:'New York și Frontiera',land:'0,93 / 1,41',total:'2,34+ (Combinat)',engine:'AnvilNext',era:0,
  about:'Juxtapunerea rețelelor stradale coloniale cu traversarea organică prin copaci în sălbăticie.',
  maps:[{loc:'New York',km2:.93,text:'Assassin’s Creed III (2012) · New York colonial: 0,93 km². Străzi înghesuite și drepte, care sugerau controlul imperial.'},
        {loc:'Frontiera',km2:1.41,text:'Assassin’s Creed III (2012) · Frontiera: 1,41 km². Parkour-ul se mută din oraș în copaci și pe stânci.'}]},
 {title:'AC IV: Black Flag',short:'Black Flag',year:2013,setting:'Caraibe / Indiile de Vest',land:'~120,0 (Nucleu)',total:'235,0',engine:'AnvilNext',era:1,
  about:'Arhipelag cu tranziție fluidă mare-uscat; traversare preponderent oceanică.',
  maps:[{loc:'Caraibe',km2:120,text:'Black Flag (2013) · Caraibele: circa 120 km² (235 km² în total). Un arhipelag străbătut cu corabia, fără pauză între mare și uscat.'}]},
 {title:'Assassin’s Creed Rogue',short:'Rogue',year:2014,setting:'Atlanticul de Nord',land:'N/A (Arhipelag)',total:'70,0',engine:'AnvilNext',era:1,
  about:'Mediu maritim subarctic cu văi fluviale și noduri urbane.',
  maps:[{loc:'Atlantic',km2:70,hatch:true,text:'Rogue (2014) · Atlanticul de Nord: 70 km². Mări reci, văi de râuri și orașe mici.'}]},
 {title:'Assassin’s Creed Unity',short:'Unity',year:2014,setting:'Paris',land:'2,40',total:'2,40',engine:'AnvilNext 2.0',era:1,
  about:'Scară monumentală 1:1; iluminare globală pre-calculată (baked); reciclare AI pentru mulțimi de peste 10.000 NPC-uri.',
  maps:[{loc:'Paris',km2:2.4,text:'Unity (2014) · Paris: 2,40 km². Orașul la scară reală, cu interioare deschise, lumină calculată în avans și mulțimi de 10.000–12.000 de oameni.'}]},
 {title:'AC: Syndicate',short:'Syndicate',year:2015,setting:'Londra victoriană',land:'3,70',total:'3,70',engine:'AnvilNext 2.0',era:1,
  about:'Bulevarde industriale largi, bucle feroviare și bifurcația râului Tamisa; lansator de frânghie.',
  maps:[{loc:'Londra',km2:3.7,text:'Syndicate (2015) · Londra victoriană: 3,70 km². Străzile largi și Tamisa erau prea mari pentru sărituri, așa că a apărut cârligul cu frânghie.'}]},
 {title:'Assassin’s Creed Origins',short:'Origins',year:2017,setting:'Egiptul ptolemaic',land:'80,0',total:'92,0 (cu DLC)',engine:'AnvilNext 2.0',era:2,
  about:'Biomuri procedurale continentale; validare automatizată C# (Atlas); sonde GI rare (9 GB vs 450 GB).',
  maps:[{loc:'Egipt',km2:80,text:'Origins (2017) · Egiptul: 80 km² (92 km² cu DLC). Teren generat după reguli, teste de noapte și lumină măsurată în puncte rare.'}]},
 {title:'Assassin’s Creed Odyssey',short:'Odyssey',year:2018,setting:'Grecia Antică',land:'130,0',total:'256,0',engine:'AnvilNext 2.0',era:2,
  about:'Topografie mitică maximalistă terestră și maritimă pe o grilă de 16×16 km.',
  maps:[{loc:'Grecia',km2:130,text:'Odyssey (2018) · Grecia Antică: 130 km² de uscat, într-o hartă a Mării Egee de 256 km². O hartă uriașă, cu uscat și mare.'}]},
 {title:'Assassin’s Creed Valhalla',short:'Valhalla',year:2020,setting:'Norvegia și Anglia',land:'22,0 / 94,0',total:'22,0 / 120,0',engine:'Ubisoft Anvil',era:2,
  about:'Palimpsest multi-regat de ruine neolitice, romane și saxone.',
  maps:[{loc:'Anglia',km2:94,text:'Valhalla (2020) · Anglia: 94 km² de uscat (120 km² cu mările), plus Norvegia: 22 km². Ruine romane și forturi saxone, ridicate peste straturi mai vechi.'}]},
 {title:'Assassin’s Creed Mirage',short:'Mirage',year:2023,setting:'Bagdadul secolului IX',land:'2,30',total:'2,30',engine:'Ubisoft Anvil',era:2,
  about:'Revenire la un singur oraș dens, axat pe stealth și urbanism centrat pe parkour.',
  maps:[{loc:'Bagdad',km2:2.3,text:'Mirage (2023) · Bagdadul secolului al IX-lea: 2,30 km². O întoarcere la un oraș mic și dens, cu discreție printre oameni și parkour.'}]},
 {title:'Assassin’s Creed Shadows',short:'Shadows',year:2025,setting:'Japonia feudală',land:'80,0',total:'125,0',engine:'Ubisoft Anvil (Modernizat)',era:2,
  about:'Iluminare globală Ray-Traced (RTGI), Micropoligoane GPU și anotimpuri dinamice.',
  maps:[{loc:'Japonia',km2:80,text:'Shadows (2025) · Japonia feudală: 80 km² jucabili (125 km² în total). Lumină calculată în timp real și patru anotimpuri.'}]}
];

/* ---------- SURSE ONLINE ----------
   Fiecare rând: [număr, adresă (fără https://), descriere]. Apar în grupul „Alte surse online”. */
const SOURCES=[
['1','scribd.com/document/807405105/Game-Design-Document-for-Assassins-Creed','Document de design inițial Assassin’s Creed (2007)'],
['2','medium.com/@EightyLevel/building-the-world-of-assassins-creed-origins-c548c53e700d','Nicholas Routhier (GDC 2018 / 80 Level) — Construcția lumii în AC Origins și sistemul Atlas'],
['3','method.gg/assassins-creed-shadows/assassins-creed-shadows-map-size-and-locations','Dimensiunea hărții și regiunile din AC Shadows (80 / 125 km²)'],
['4','researchgate.net/publication/345416418_Architecture_Narrative_and_Interaction_in_the_Cityscapes','Architecture, Narrative and Interaction in the Cityscapes of the AC Series (2021)'],
['6','visualreview.net/revVISUAL/article/view/3736','Aliaga Cárceles & Martínez Fernández (2022) — Configurația peisajului urban în AC1 (VISUAL REVIEW)'],
['7','gamedeveloper.com/design/the-world-design-of-assassin-s-creed-syndicate-full-transcript','Jonathan Dumont (2015) — Transcrierea completă despre World Design-ul Londrei în AC Syndicate'],
['8','gdconf.com/article/how-ubisoft-brought-feudal-japan-to-life-rendering-assassin-s-creed-shadows-with-nicolas-lopez','Nicolas Lopez (GDC 2025) — Randarea Japoniei feudale în AC Shadows'],
['9','dsogaming.com/news/assassins-creed-shadows-would-require-2tb-of-data-and-2-years-for-baked-lighting','Analiză GDC 2025: De ce iluminarea pre-calculată în AC Shadows ar necesita 2 TB și 2 ani'],
['10','researchgate.net/publication/228878072_Assassin_s_creed_a_multi-cultural_read','Seif El-Nasr, Al-Saati, Niedenthal & Milam (2008) — Assassin’s Creed: A Multi-Cultural Read'],
['11','medium.com/@isohi87/exploring-colonialism-and-resistance-in-assassins-creed-iii','Critica postcolonială și rezistența indigenă în topografia din Assassin’s Creed III'],
['13','destructoid.com/one-dev-spent-two-years-making-the-notre-dame-in-assassins-creed-unity','Caroline Miousse (2014) — 2 ani (5.000 de ore) pentru reconstrucția Catedralei Notre-Dame în AC Unity'],
['14','digitalfoundry.net/articles/digitalfoundry-2014-assassins-creed-unity-face-off','Digital Foundry (2014) — Analiza tehnică PBR și Global Illumination în AC Unity'],
['17','cambridge.org/core/journals/international-journal-of-middle-east-studies/article/200million-student-classroom','Glaire Anderson et al. (2024) — The 200-Million-Student Classroom (Cambridge University Press)'],
['20','en.wikipedia.org/wiki/Ubisoft_Anvil','Istoricul tehnic al motorului proprietar Scimitar → Anvil → AnvilNext → Ubisoft Anvil'],
['26','gdcvault.com/play/1022411/Massive-Crowd-on-Assassin-s','François Cournoyer (GDC 2015) — Massive Crowd on AC Unity: AI Recycling (40 AI / 120 HD / 12.000 NPC)'],
['27','advances.realtimerendering.com/s2025/content/Advances_2025_Raytracing_the_world_of_AC_Shadows.pdf','SIGGRAPH 2025 — Raytracing the World of Assassin’s Creed Shadows (Ubisoft Rendering Team)'],
['29','medium.com/@EricBiancalana/building-on-the-shoulders-of-giants-in-assassins-creed-valhalla','Eric Biancalana — Building on the Shoulders of Giants in AC Valhalla (Palimpsest arheologic)'],
['32','blog.siggraph.org/2019/05/how-ubisoft-re-created-notre-dame-for-assassins-creed-unity.html','SIGGRAPH Blog (2019) — Reconstrucția Notre-Dame, turla Viollet-le-Duc și orga sub copyright'],
['33','gdcvault.com/play/1025452/-Assassin-s-Creed-Origins','Nicholas Routhier (GDC Vault 2018) — Monitoring and Validation of World Design Data in AC Origins'],
['38','colinbarrebrisebois.com/2015/11/06/finding-next-gen-part-i-the-need-for-robust-and-fast-global-illumination','Colin Barré-Brisebois (2015) — Necesitatea iluminării globale rapide pentru iterația artistică'],
['43','researchgate.net/publication/344134204_Preservation_and_Heritage_at_Play_in_Technoculture','Preservation and Heritage at Play in Technoculture: Notre-Dame in Assassin’s Creed'],
['47','mdpi.com/2673-5768/7/4/99','Reflexive Game Studies Analysis on Flow, Escapism, and Virtual Place Attachment (MDPI, 2026)'],
['48','researchgate.net/publication/362249938_The_Semiotics_of_Architecture_in_Video_Games','Gabriele Aroni (2022) — The Semiotics of Architecture in Video Games (Bloomsbury Academic)'],
['49','online.ucpress.edu/jsmg/article/2/3/34/118095/Waltzing-on-Rooftops-and-CobblestonesSonic','Ailbhe Warde-Brown (2021) — Waltzing on Rooftops and Cobblestones: Sonic Immersion (JSMG)'],
['52','gdcvault.com/play/1023550/Level-Design-Workshop-360-Approach','Philippe Bergeron (GDC 2016) — Level Design Workshop: 360 Approach for Open World Mission Design'],
['53','researchgate.net/publication/408452207_Spatial_Dramaturgy_and_Narrative_Design','Spatial Dramaturgy and Narrative Design in Contemporary Video Games (2026)'],
['54','mshl.is/wp-content/uploads/2023/10/20231020_IcelandTalk-Champion.pdf','Erik Champion — Culturally Significant Presence and Virtual Heritage'],
['56','journals.openedition.org/signata/5894','Gabriele Aroni (2025) — The Semiotics of Video Game Spaces (Signata: Annales des sémiotiques, 16)'],
['59','iuliu-cosmin-oniscu.medium.com/large-sandbox-design-579dbcee5060','Iuliu-Cosmin Oniscu — Large Sandbox Design și operaționalizarea lui Kevin Lynch'],
['62','crc.umontreal.ca/telechargement/when-boston-is-not-boston-the-useful-lies-of-reconstructive-game-models','Aurélien Catros & Maxime Leblanc (UdeM / McGill) — When Boston is Not Boston: The Useful Lies'],
['68','researchgate.net/publication/238654339_Game_Design_as_Narrative_Architecture','Henry Jenkins — Game Design as Narrative Architecture (Evoked, Enacted, Embedded, Emergent)'],
['69','jgeekstudies.org/2023/10/07/what-lasts-of-us-implicit-archaeology-through-environmental-storytelling','Implicit Archaeology through Environmental Storytelling (Journal of Geek Studies, 2023)'],
['79','researchgate.net/publication/349839829_Assassin_s_Creed_Origins_Discovery_Tour_A_Behind_the_Scenes','Near Eastern Archaeology (2021) — AC Origins Discovery Tour: Behind the Scenes (Sorbona, Merer, Sfinx)'],
['84','researchgate.net/publication/330746118_Assassin_s_Creed_reminds_us_that_history_is_human_experience','Theory and Research in Social Education (2019) — Empatia istorică a elevilor în Assassin’s Creed'],
['87','recherche.umontreal.ca/english/our-researchers/professors-directory/researcher/is/in14901','Marc-André Éthier & David Lefrançois (Université de Montréal) — Didactica istoriei și Discovery Tour'],
['90','ceur-ws.org/Vol-3669/paper7.pdf','CEUR Workshop (2024) — Analiza Discovery Tour: De la sandbox emergent la arhitectură instrucțională receptivă'],
['94','researchgate.net/publication/379662951_The_Architecture_of_Assassin_s_Creed_II_s_Florence','Gabriele Aroni (2019) — The Architecture of AC II’s Florence (Well Played, 8(1), 13–26)'],
['96','books.google.com/books/about/Assassin_s_Creed_in_the_Classroom.html','Erik Champion & Juan Francisco Hiriart Vera (Eds.) (2024) — Assassin’s Creed in the Classroom (De Gruyter)'],
['100','cambridge.org/core/journals/advances-in-archaeological-practice/article/undergraduate-teaching','Advances in Archaeological Practice (Cambridge) — Predarea arheologiei universitare cu Assassin’s Creed']
];

/* ---------- CELE CINCI ELEMENTE LYNCH ----------
   O singură sursă pentru slide-ul 11 și pentru grupul din bibliografie.
   name    numele de pe slide (se numerotează automat: „1. Repere”)
   term    numele din bibliografie
   def     definiția lui Lynch (apare în ambele locuri)
   inGame  explicația scurtă de pe slide
   detail  explicația lungă (în bibliografie nu se vede, rămâne ca notă)
   Ordinea contează: e legată de desenul de pe hartă. */
const LYNCH=[
 {name:'Repere',term:'Repere (Landmarks)',
  def:'Clădiri sau monumente înalte, vizibile de departe.',
  inGame:'Notre-Dame sau catedrala din Florența te ajută să știi unde te afli. În joc, aici sunt punctele de sincronizare.',
  detail:'Monumente istorice emblematice (Santa Maria del Fiore, Notre-Dame, Westminster Abbey) care funcționează ca atractori vizuali („weenies”) și Viewpoints escaladabile pentru sincronizarea hărții.'},
 {name:'Trasee',term:'Trasee (Paths)',
  def:'Drumurile pe care te miști prin oraș.',
  inGame:'Alei la nivelul străzii și un „drum” continuu pe acoperișuri, pentru parkour.',
  detail:'Artere de traversare pe două straturi: străzi la nivelul solului (alei darb în zig-zag din Orientul Mijlociu, căi ferate victoriene) și autostrăzi continue de parkour pe acoperișuri.'},
 {name:'Cartiere',term:'Districte (Districts)',
  def:'Zone ale orașului cu un aspect și o viață proprii.',
  inGame:'Se deosebesc prin culori, clădiri, personaje și sunete.',
  detail:'Zonare socio-economică, culturală și de biom, diferențiată prin palete de culori distincte, materiale de construcție, comportamente ale mulțimii și ambianțe acustice.'},
 {name:'Margini',term:'Margini (Edges)',
  def:'Linii care despart două zone: ziduri, ape, faleze.',
  inGame:'Zidurile fortificate sau râul Tamisa din Londra.',
  detail:'Ziduri de fortăreață, stânci, maluri de râu (cum ar fi râul Tamisa care divide Londra) și granițe de biom care canalizează mișcarea sau necesită traversare tactică.'},
 {name:'Noduri',term:'Noduri (Nodes)',
  def:'Locuri unde se întâlnesc mai multe drumuri, de obicei piețe.',
  inGame:'Piețe și forturi construite circular, ca să poți intra din orice direcție.',
  detail:'Piețe comerciale, scuaruri și forturi proiectate utilizând filozofia de design al misiunilor la 360 de grade (P. Bergeron) pentru a permite infiltrarea stealth și de luptă pe vectori multipli.'}
];

/* ---------- BIBLIOGRAFIE (slide-ul 20) ----------
   Grupurile apar în ordinea de aici. `unit` = cuvântul de lângă număr („5 surse”).
   `cols` spune ce înseamnă fiecare coloană; pe slide se văd primele două.
   from:'games' / 'sources' / 'lynch' = grupul se completează automat din GAMES / SOURCES / LYNCH. */
const BIBLIO=[
 {title:'Harta francizei',unit:'jocuri',from:'games'},
 {title:'Cele cinci elemente Lynch',unit:'elemente',from:'lynch'},
 {title:'Semiotică și urbanism',unit:'surse',cols:['Autor(i) și an','Titlu și locul publicării','Rezumat'],rows:[
 ['Aroni, Gabriele (2022)','The Semiotics of Architecture in Video Games (Bloomsbury Academic)','Stabilește un cadru semiotic cuprinzător pentru arhitectura virtuală utilizând AC II, NaissanceE și Final Fantasy XV; aplică Teoria Recuzitei (Tavinor, Bateman, Upton) pentru a explica funcția dublă: reprezentațională și ludică.'],
 ['Aroni, Gabriele (2019)','The Architecture of AC II’s Florence: An Analysis with the History-Game Relations (HGR) Framework, Well Played 8(1), 13–26','Analizează modul în care ordinele arhitecturale renascentiste (proporțiile vitruviene ale lui Filippo Brunelleschi în Basilica di San Lorenzo) sunt adaptate în geometria interactivă de parkour în AC2.'],
 ['Aroni, Gabriele (2025)','The Semiotics of Video Game Spaces, Signata: Annales des sémiotiques, 16','Examinează modul în care configurațiile spațiale dictează mișcarea jucătorului și cum se împletesc instrumentele de dezvoltare a jocurilor cu crearea de semne ale patrimoniului cultural.'],
 ['Aliaga Cárceles & Martínez Fernández (2022)','The Configuration of the Urban Landscape in AC (2007): Sources, Models and Referents…, VISUAL REVIEW 12(3), 1–18','Urmărește modelele istorice de artă și referenții arhitecturali UNESCO (ex. cisternele Moscheii Jazzar Pasha din Acra) folosiți la construirea Ierusalimului, Damascului, Acrei și Masyaf-ului.'],
 ['Catros, Aurélien & Leblanc, Maxime','When Boston is Not Boston: The Useful Lies of Reconstructive Game Models (UdeM / McGill)','Aplică The Image of the City (1960) de Kevin Lynch pentru a evalua modul în care AC III distorsionează Bostonul istoric prin „minciuni utile” într-un model lizibil și jucabil.'],
 ['Hausar, G. (2014)','Players in the Digital City: Immersion, History and City Architecture in the AC Series, Loading…','Investighează intersecția dintre istoria arhitecturii urbane, navigația jucătorului și imersiunea spațială în primele titluri urbane ale francizei.'],
 ['Leffler, C. (2019)','Memory Games: History, Memory, and Anachronism in the Paris of AC Unity, Contemporary French Civilization 44(1), 81–99','Examinează critic modul în care Parisul virtual din Unity negociază memoria culturală a Revoluției Franceze și anacronismele arhitecturale deliberate (Notre-Dame).'],
 ['Studii de dramaturgie spațială (2021–2026)','Architecture, Narrative and Interaction in the Cityscapes of the AC Series (2021) & Spatial Dramaturgy (2026)','Integrează abordări dramaturgice, naratologice (Jenkins, Nitsche) și spațiale (Lynch) pentru a defini reglarea ritmului, ghidarea navigației și cadența narativă.']
 ]},
 {title:'Patrimoniu și educație',unit:'surse',cols:['Autor(i) și an','Titlu și locul publicării','Rezumat'],rows:[
 ['Champion, Erik & Hiriart Vera, J. F. (Eds.) (2024)','Assassin’s Creed in the Classroom: History’s Playground or a Stab in the Dark? (De Gruyter Oldenbourg)','Antologia academică de referință care evaluează valoarea de patrimoniu digital, autenticitatea istorică și integrarea în clasă pentru Origins, Odyssey și Valhalla.'],
 ['Champion, Erik (2015 / 2020)','Critical Gaming: Interactive History and Virtual Heritage (2015) & Culturally Significant Presence, ACM JOCCH 13(4)','Definește „prezența culturală” — susținând că imersiunea nu depinde de acuratețea fotogrammetrică 3D sterilă, ci de transmiterea sensului trăit al unui loc pentru culturile trecute.'],
 ['Anderson, Glaire, et al. (2024)','The 200-Million-Student Classroom: Teaching Islamicate History One Video Game at a Time, IJMES (Cambridge)','Detaliază colaborarea 2021–2022 dintre DLIVCC și Maxime Durand pentru AC Mirage (Bagdadul sec. IX): 10 săptămâni de seminarii (macro, mezo, cotidian) și codexul GLAM.'],
 ['Studiu Near Eastern Archaeology (2021)','AC Origins Discovery Tour: A Behind the Scenes Experience, Near Eastern Archaeology 84(1), 79–85','Scris de un egiptolog consultant de la Sorbona (15 din 20 capsule); explică reducerea textelor de la 6.000 la 2.000 de cuvinte, papirusul lui Merer și policromia Sfinxului.'],
 ['Éthier, Marc-André & Lefrançois, David (2023/2024)','Historical Video Games and Teaching Practices & The Discovery Tour as a Mediated Tool, in AC in the Classroom','Cercetare educațională empirică ce demonstrează cum profesorii folosesc Discovery Tour pentru a cultiva empatia istorică și analiza critică a surselor.'],
 ['Hammar, Emil Lundedal (2016)','Counter-Hegemonic Commemorative Play: Marginalized Pasts… in AC: Freedom Cry, Rethinking History 21(3), 372–395','Examinează modul în care designul ambiental și jocul interactiv pot recupera istorii marginalizate, subalterne și pot contesta memoria colonială hegemonică.'],
 ['Studii de practică arheologică (2019–2024)','Undergraduate Teaching and AC, Advances in Archaeological Practice (Cambridge) & CEUR Workshop (2024)','Demonstrează cum eliminarea mecanicilor de luptă în Discovery Tour transformă spațiul de joc din parkour exploratoriu în „arhitectură instrucțională receptivă”.']
 ]},
 {title:'Imersiune și simțuri',unit:'surse',cols:['Autor(i) și an','Titlu și locul publicării','Rezumat'],rows:[
 ['Warde-Brown, Ailbhe (2021)','Waltzing on Rooftops and Cobblestones: Sonic Immersion through Spatiotemporal Involvement in the AC Series, JSMG 2(3), 34–55','Combină modelul ALI (van Elferen) și implicarea lui Calleja pentru a teoretiza semioza spațiotemporală („Ezio’s Family”) și angajamentul spațiotemporal (Viewpoints, soundwalking etnografic).'],
 ['Seif El-Nasr, Al-Saati, Niedenthal & Milam (2008)','Assassin’s Creed: A Multi-Cultural Read, Loading…, 2(3)','Studiu transcultural de referință: jucătorii occidentali vs. cei din Orientul Mijlociu citesc diferit arhitectura, lumina, străzile darb și caligrafia arabă din AC1 („ochiul vicariant” al lui Boorstin).'],
 ['Studiu imersiune temporală (2026)','Reflexive Game Studies Analysis on Flow, Escapism, and Virtual Place Attachment, MDPI 7(4), 99','Conectează teoria fluxului (Csikszentmihalyi, 1990) și distorsiunea temporală cu refugiul emoțional și atașamentul față de locul virtual (ex. Ravensthorpe în Valhalla, Monteriggioni în AC2).'],
 ['Studii de receptare postcolonială (2019–2026)','AC Reminds Us That History is Human Experience, TRSE 47(1), 108–137 (2019) & Ferreira & Ganito (UCP)','Analizează modul în care angajamentul întrupat față de personajele și mediile istorice generează empatie afectivă și negociază memoria culturală postcolonială.']
 ]},
 {title:'Industrie și conferințe GDC',unit:'surse',cols:['Vorbitor / sursă','Titlul prezentării și locul','Focus tehnic'],rows:[
 ['Routhier, Nicholas (2018)','AC Origins: Monitoring and Validation of World Design Data (GDC 2018 / 80 Level)','Sursă primară despre eșecul metodelor manuale la peste 4 km²; detaliază generarea procedurală a biomurilor, scripturile nocturne C# și platforma GIS web Atlas.'],
 ['Lopez, Nicolas & Ubisoft Rendering Team (2025)','Rendering AC Shadows (GDC 2025) & Raytracing the World of AC Shadows (SIGGRAPH 2025)','Explică de ce pre-calcularea GI ar necesita 2 TB și 2 ani (față de 450 GB / 3 luni în Origins), tranziția la RTGI în timp real, Micropoligoane GPU și ciclurile sezoniere.'],
 ['Cournoyer, F., Laidacker, A. & Sweet, J. (2014–2015)','Massive Crowd on AC Unity: AI Recycling (GDC 2015 / Game Informer)','Detaliază arhitectura mulțimii care randează simultan 10.000–12.000 de cetățeni parizieni, reciclând o limită de 40 de entități AI reale și 120 de modele HD în jurul jucătorului.'],
 ['Bergeron, Philippe (2016)','Level Design Workshop: 360 Approach for Open World Mission Design (GDC 2016)','Formalizează metodologia de level design radial de la Ubisoft Montreal pentru abordări non-liniare, pe vectori multipli, în stealth și luptă.'],
 ['Dumont, Jonathan (2015)','The World Design of AC: Syndicate — Full Transcript (Game Developer / Gamasutra)','Documentează munca de teren (70 km parcurși pe jos, 4.000 de fotografii în Londra), divizarea prin Tamisa și relocarea gării St. Pancras și a căilor ferate.'],
 ['Miousse, Caroline (2014 / 2019)','Interviews on Recreating Notre-Dame for AC Unity (Destructoid / SIGGRAPH Blog)','Relatare la prima mână despre modelarea timp de 2 ani (5.000 h) la scara 1:1 a catedralei Notre-Dame, turla anacronică din sec. XIX și ocolirea drepturilor de autor pentru orgă.'],
 ['Durand, Maxime (2018–2024)','Interview with Maxime Durand on His Role as World-Design Director (Routledge / EGM / GamesRadar)','Prezintă integrarea istoricilor interni și a consultanților academici externi în designul zilnic al lumii și filozofia pedagogică din spatele Discovery Tour.']
 ]},
 {title:'Alte surse online',unit:'surse',from:'sources'}
];

/* ---------- TEXTELE SLIDE-URILOR ----------
   label    eticheta din bara de jos și din tranziție („02 · Etapa 1”)
   year     anul mare, șters, din colțul ecranului
   kicker   rândul mic, roșu/albastru, de deasupra titlului
   title    titlul mare
   lead     fraza de sub titlu
   cards    cardurile: tag = eticheta mică, big = cifra mare (opțional),
            text = textul cardului, red:true = card evidențiat cu roșu
   În texte poți folosi <b>…</b> pentru îngroșat și <em>…</em> pentru italic.
*/
const SLIDES={
 intro:{label:'01 · Introducere',year:2007,
  kicker:'Două decenii de lumi virtuale · 2007–2025',
  title:'Evoluția spațială și imersiunea în Assassin’s Creed',
  lead:'Cum au învățat aceste jocuri să transforme istoria în locuri pe care le poți explora, escalada și simți.',
  counter:'0,13 → 256',counterUnit:'km²',counterLabel:'Damasc (2007) → Grecia Antică (2018)',
  cards:[
   {tag:'I. Tehnologie',text:'Cum au crescut hărțile și cum au fost construite și iluminate.'},
   {tag:'II. Arhitectură',text:'Cum te ajută clădirile, reperele și sunetul să te simți într-un loc.'},
   {tag:'III. Istorie',text:'Ce se schimbă față de adevăr ca istoria să fie jucabilă.'}],
  button:'Începe prezentarea →',
  canvasLabel:'ANIMUS HELIX · 0,13 KM² (2007) → 256 KM² (2018)'},

 etapa1:{label:'02 · Etapa 1',year:2009,
  kicker:'Etapa 1 · 2007–2012',
  title:'Orașe mici și dense, făcute pentru parkour',
  lead:'Primele jocuri aveau orașe mici, construite în jurul unui singur gest: săritura de pe un acoperiș pe altul.',
  cards:[
   {tag:'Dimensiune',big:'0,13 – 1,41 km²',text:'Damascul din primul joc avea doar 0,13 km², iar Roma din 2010 avea 1,41 km².'},
   {tag:'Pe acoperișuri',big:'Fără sol',text:'Străzile erau calculate astfel încât să poți traversa orașul fără să atingi pământul (de exemplu Constantinopol, 0,94 km²).'},
   {tag:'În sălbăticie',big:'1,41 km²',text:'În Assassin’s Creed III (2012), parkour-ul s-a mutat din oraș în copaci și pe stânci.'}]},

 etapa2:{label:'03 · Etapa 2',year:2014,
  kicker:'Etapa 2 · 2013–2015',
  title:'Mări deschise și orașe la scară reală',
  lead:'Seria a luat două drumuri: corăbii pe ocean și orașe construite la dimensiunea lor adevărată.',
  cards:[
   {tag:'Black Flag · 2013',big:'235 km²',text:'Un arhipelag întreg în Caraibe, străbătut cu corabia, fără pauză între mare și uscat.'},
   {tag:'Unity · 2014',big:'2,40 km²',text:'Parisul la scară reală, cu monumente de dimensiunea lor adevărată și clădiri în care intri fără încărcare.'},
   {tag:'Syndicate · 2015',big:'3,70 km²',red:true,text:'Străzile largi ale Londrei și Tamisa erau prea mari pentru sărituri, așa că a apărut cârligul cu frânghie.'}]},

 etapa3:{label:'04 · Etapa 3',year:2020,
  kicker:'Etapa 3 · 2017–2025',
  title:'Țări întregi, apoi o întoarcere la oraș',
  lead:'Jocurile au trecut de la un singur oraș la regiuni uriașe, iar apoi seria s-a întors și la orașe compacte.',
  cards:[
   {tag:'Origins, Odyssey, Valhalla',big:'80 – 256 km²',text:'Egiptul (80 km²), Grecia (256 km² în total) și Anglia (94 km² de uscat) sunt hărți uriașe, cu deșerturi, munți și mări.'},
   {tag:'Mirage · 2023',big:'2,30 km²',text:'Bagdadul secolului al IX-lea: o întoarcere la un oraș compact și dens, cu accent pe discreție printre oameni și pe parkour.'},
   {tag:'Shadows · 2025',big:'80 / 125 km²',text:'Japonia feudală, cu lumină calculată în timp real și patru anotimpuri care se schimbă.'}]},

 manual:{label:'06 · Manual sau automat',year:2014,
  kicker:'De la meșteșug la reguli',
  title:'O catedrală făcută manual, o țară făcută prin reguli',
  lead:'Un monument modelat de mână a fost posibil în Unity, dar nu și la scara Egiptului din Origins.',
  cards:[
   {tag:'Notre-Dame · Unity',big:'≈ 5.000 ore',text:'Caroline Miousse a lucrat doi ani la o singură catedrală, la scară reală.'},
   {tag:'Creșterea hărții',big:'4 → 80 km²',red:true,text:'O hartă de 20 de ori mai mare nu mai putea fi construită manual.'},
   {tag:'Soluția',big:'Reguli automate',text:'Terenul și vegetația se generează după reguli, iar apoi programe în C# verifică rezultatul.'}]},

 sunet:{label:'14 · Sunetul',year:2021,
  kicker:'Ailbhe Warde-Brown · 2021',
  title:'Sunetul face spațiul real',
  lead:'Muzica și zgomotele te ajută să te simți într-un loc în trei moduri.',
  cards:[
   {tag:'1 · Muzica epocii',text:'Tema „Ezio’s Family”, compusă de Jesper Kyd, este reorchestrată cu instrumente specifice fiecărei perioade istorice.'},
   {tag:'2 · Sunete care reacționează',text:'Zgomotele se schimbă în timp real, după cât de repede te miști și cât de sus te afli.'},
   {tag:'3 · Plimbarea sonoră',text:'Treci de la ecoul străzii la vântul de pe acoperiș, iar sunetul te ajută să știi unde te afli.'}]},

 frontiera:{label:'15 · Orașul și frontiera',year:2012,
  kicker:'Assassin’s Creed III · 2012',
  title:'Forma spațiului spune o poveste',
  lead:'În acest joc, felul în care sunt făcute orașul și pădurea arată cine controlează pământul.',
  cards:[
   {tag:'Orașul colonial',text:'Străzi drepte și dese, ca o grilă, care sugerează ordine strictă și supraveghere.'},
   {tag:'Frontiera',text:'Un spațiu deschis, fără trasee rigide. Contrastul arată că „libertatea” coloniștilor s-a clădit pe strămutarea populațiilor indigene.'}]},

 concluzii:{label:'20 · Concluzii',year:2025,
  kicker:'Concluzii',
  title:'Trei idei de reținut',
  cards:[
   {tag:'I. Tehnologie',text:'Hărțile mari au cerut generare automată, teste de noapte și lumină în timp real.'},
   {tag:'II. Arhitectură',text:'Reperele, fațadele și sunetul te ajută să te orientezi și să simți locul.'},
   {tag:'III. Istorie',text:'Micile schimbări față de adevăr fac istoria jucabilă, iar Discovery Tour o explică.'}],
  biblioHint:'Bibliografie · apasă pe un grup pentru a-l deschide'},

 final:{label:'21 · Mulțumesc',year:2025,
  kicker:'Sfârșitul sincronizării · Animus OS',
  title:'Vă mulțumesc pentru atenție',
  lead:'Un loc virtual devine memorabil când tehnologia, arhitectura și respectul pentru istorie lucrează împreună.',
  button:'↺ Reia de la început',
  note:'Întrebări și discuții'},

 /* ===== Slide-uri interactive =====
    Aici sunt și textele care apar abia după un click (butoane, carduri, canvas).
    Câmpurile `key` (la fațadă) nu se redenumesc: leagă textul de desen. */

 harti:{label:'05 · Cât au crescut hărțile',year:2018,
  kicker:'Comparație între jocuri',
  title:'Cât de mult au crescut hărțile',
  scale:'Scară',scaleLog:'logaritmică',scaleLin:'liniară',
  play:'▶ Redă în ordine',
  note:'Linia roșie marchează 4 km², limita până la care o hartă se mai poate construi manual.',
  limit:'Pragul de 4 km²',
  hint:'Treci cu mouse-ul peste un joc ca să vezi detaliile.'},

 atlas:{label:'07 · Teste de noapte',year:2017,
  kicker:'Verificarea hărții',
  title:'Teste de noapte pentru o hartă uriașă',
  testTag:'Test de noapte',run:'▶ Pornește testul',
  checked:'obiecte verificate',found:'probleme găsite',
  hint:'Apasă „Pornește testul” ca să vezi cum este parcursă harta.',
  aboutTag:'Ce face testul',
  about:'În fiecare noapte, programe automate verifică mii de scări, tiroliene și trasee ale personajelor. Dimineața, echipa vede pe o hartă (numită Atlas) unde sunt problemele.',
  errorTypes:['scări blocate','margini de cățărare','tiroliene întrerupte','baliste','cufere','trasee blocate pentru personaje'],
  result:'Rezultat: '},

 lumina:{label:'08 · Lumina',year:2014,
  kicker:'Iluminarea lumii',
  title:'Cum se luminează o lume uriașă',
  sun:'Soarele',fixed:' (Preset fix)',dynamic:' (Dinamic 24h)',
  leak:'⚠ Lumină care „se scurge” în colțul tavanului',
  /* cele trei moduri: button = textul butonului, canvas = eticheta de pe imagine,
     bars = [eticheta, valoare în GB (pentru lungimea barei), textul din dreapta] */
  modes:[
   {button:'1. Calculată în avans',canvas:'1. CALCULATĂ ÎN AVANS · UNITY',tag:'Unity · 2014',big:'4 momente fixe ale zilei',text:'Parisul din Unity este mic, așa că lumina a putut fi calculată în avans pentru patru momente ale zilei. Arată bine, dar nu se mai schimbă în timp ce joci.',bars:[['Harta Unity (2,40 km²)',12,'≈12 GB · 4 momente fixe']]},
   {button:'2. Puncte rare',canvas:'2. PUNCTE RARE · ORIGINS',tag:'Origins, Odyssey, Valhalla · 2017–2020',big:'450 GB → 9 GB',text:'Pe o hartă de 80 km², cu zi și noapte, calculul în avans ar fi cerut 450 GB și trei luni. Lumina a fost măsurată doar în puncte rare, iar datele au scăzut la 9 GB, dar pe alocuri apar pete de lumină unde nu ar trebui.',bars:[['Calcul în avans (teoretic)',450,'450 GB · 3 luni'],['Puncte rare (folosit)',9,'9 GB · zi și noapte']]},
   {button:'3. Timp real',canvas:'3. TIMP REAL · SHADOWS',tag:'Shadows · 2025',big:'Lumină calculată pe loc',text:'Cu patru anotimpuri pe 80–125 km², calculul în avans ar fi cerut 2 TB și doi ani. În Shadows, lumina se calculează în timp ce joci, iar reflexiile de pe pereți și de pe zăpadă se văd natural.',bars:[['Calcul în avans (teoretic)',2000,'2.000 GB · 2 ani'],['Timp real (folosit)',1,'fără date calculate în avans']]}]},

 anotimpuri:{label:'09 · Anotimpurile',year:2025,
  kicker:'Assassin’s Creed Shadows · 2025',
  title:'Patru anotimpuri și lumină realistă',
  lead:'Frunzișul, zăpada și lumina se schimbă odată cu anotimpul. Poți opri iluminarea realistă ca să vezi diferența.',
  seasons:[{icon:'🌸',name:'Primăvară'},{icon:'☀️',name:'Vară'},{icon:'🍁',name:'Toamnă'},{icon:'❄️',name:'Iarnă'}],
  rt:'Lumină realistă',rtOn:'pornită',rtOff:'oprită',
  canvasOn:'LUMINĂ REALISTĂ',canvasOff:'FĂRĂ LUMINĂ REALISTĂ',
  hour:'Ora din zi',
  density:'Cât de dese sunt frunzele',
  albedo:'Cât de mult reflectă solul lumina'},

 multime:{label:'10 · Mulțimea din Paris',year:2014,
  kicker:'Mulțimea din Unity',
  title:'12.000 de oameni, dar doar 40 „gândesc”',
  lead:'Ca jocul să meargă fluid, doar 40 de personaje din jurul tău au comportament complet. Pe măsură ce te miști, ele sunt „reciclate”: un personaj îndepărtat devine unul din apropiere.',
  crowd:'Mulțime',hint:'Mișcă mouse-ul prin piață.',
  aliveTag:'Personaje „vii”',alive:'au comportament propriu (cercuri aurii)',
  detailedTag:'Personaje detaliate',detailed:'cele din jurul tău (albastru)',
  extras:'Figuranți simpli',swaps:'schimburi pe secundă',
  percent:'Doar {p}% dintre ei „gândesc” în același timp.'},  // {p} = procentul calculat

 lynch:{label:'11 · Orientarea în oraș',year:1960,
  kicker:'Kevin Lynch · 1960',
  title:'Cum te orientezi într-un oraș',
  lead:'Arhitectul Kevin Lynch a arătat că oamenii își țin minte un oraș prin cinci elemente. Jocul le folosește pe toate.',
  fog:'Acoperă harta din nou',fogNote:'Apasă pe un blazon ca să descoperi harta.',
  note:'Trece cu mouse-ul peste un element ca să vezi explicația. Apasă ca să îl ascunzi sau să îl arăți pe hartă.',
  inGame:'În Assassin’s Creed',
  districts:['Cartier nobil','Piața centrală','Port','Periferie','Zonă industrială','Gară']},
  /* cele cinci elemente sunt în LYNCH, mai jos */

 fatada:{label:'12 · Fațada',year:2009,
  kicker:'Gabriele Aroni · 2022',
  title:'O fațadă arată istoria și te lasă să urci',
  lead:'Fiecare element de arhitectură are două roluri: seamănă cu cel real și este un loc de care te poți agăța. Apasă pe părțile clădirii.',
  eagle:'👁 Vederea Vulturului',note:'Apasă pe o parte a clădirii.',
  history:'Ce reprezintă în istorie',game:'La ce folosește în joc',
  parts:[
   {key:'rost',name:'Zidărie rustică',history:'Pietre mari, cu rosturi adânci. Arătau putere și făceau palatele din Florența să semene cu niște fortărețe.',game:'Rosturile sunt locuri unde îți poți prinde mâinile și picioarele, ca pe o scară de cățărat.'},
   {key:'ferestre',name:'Ferestre renascentiste',history:'Ferestre simetrice, cu proporții clasice, care dau fațadei un ritm regulat.',game:'Sunt puncte de sprijin la mijlocul urcării: te oprești, schimbi direcția sau te uiți în jur.'},
   {key:'cornisa',name:'Cornișa de sus',history:'Partea decorată care încheie clădirea la vârf.',game:'Poți merge pe ea dintr-o parte în alta și de acolo sari spre acoperișul vecin.'},
   {key:'grinda',name:'Grinzi de lemn',history:'Grinzi ieșite din perete, folosite pe vremuri pentru scripeți și felinare.',game:'Te poți balansa pe ele, iar de pe una dintre ele se face Saltul Credinței.'},
   {key:'arc',name:'Arc butant',history:'Susține zidurile înalte ale clădirilor mari, ca la catedrale.',game:'Îți oferă un loc de ascunzătoare sus și o pantă pe care urci.'}]},

 verticala:{label:'13 · Orașul pe verticală',year:2015,
  kicker:'Orașul pe verticală',
  title:'Patru niveluri, patru idei din cercetare',
  lead:'Trage de cursor ca să cobori din cer până pe stradă și vezi ce se schimbă la fiecare nivel.',
  altitude:'Altitudine',
  soundOn:'♪ Ascultă sunetul',soundOff:'♪ Oprește sunetul',soundNone:'Sunet indisponibil',
  /* de sus în jos; label = eticheta de pe desen */
  zones:[
   {label:'1. ORIZONT',title:'1. Orizontul · Kevin Lynch',text:'Reperele înalte te ajută să te orientezi. Sus se aud vântul și vulturul.'},
   {label:'2. FAȚADE',title:'2. Fațadele · Gabriele Aroni',text:'Zidurile sunt locuri de cățărat, iar pașii sună pe țigle.'},
   {label:'3. PIEȚE',title:'3. Piețele · Philippe Bergeron',text:'Sunt făcute circular, ca să poți intra pe oricare parte.'},
   {label:'4. STRADĂ',title:'4. Strada · Erik Champion',text:'Mulțimea și zgomotul străzii te fac să simți că ești acolo.'}]},

 straturi:{label:'16 · Straturi de istorie',year:2020,
  kicker:'Assassin’s Creed Valhalla · 2020',
  title:'Anglia, o istorie în straturi',
  lead:'Peisajul seamănă cu o pagină rescrisă de mai multe ori: fiecare epocă stă peste ruinele celei dinainte. Alege un strat.',
  /* de sus în jos; label = eticheta de pe desen */
  layers:[
   {label:'STRATUL 1 · FORTURI SAXONE ȘI DANEZE (SEC. IX)',title:'1. Secolul al IX-lea · saxoni și danezi',text:'Forturi de lemn ridicate peste ruine romane.'},
   {label:'STRATUL 2 · RUINE ROMANE (SEC. I–V)',title:'2. Secolele I–V · Roma',text:'Apeducte și amfiteatre în ruină, bune de escaladat.'},
   {label:'STRATUL 3 · PIETRE NEOLITICE (STONEHENGE)',title:'3. Neoliticul',text:'Pietre uriașe, ca la Stonehenge, care amintesc de mitul nordic al lui Asgard și Ragnarök.'}]},

 atasament:{label:'17 · Atașamentul',year:2008,
  kicker:'Flux și atașament',
  title:'De la orientare la atașament',
  lead:'Când un loc se citește ușor, se parcurge plăcut și are sunet și ritm propriu, jucătorul intră într-o stare de „flux” și ajunge să țină la el, ca la un loc real.',
  chain:[
   {title:'1. Orientare',text:'Știi unde ești'},
   {title:'2. Mișcare',text:'Parkour fluid'},
   {title:'3. Sunet',text:'Atmosferă'},
   {title:'4. Zi și noapte',text:'Timpul trece'},
   {title:'5. Flux',text:'Uiți de timp'},
   {title:'6. Atașament',text:'Te simți acasă'}],
  studyTag:'Studiul din 2008 · Magy Seif El-Nasr',
  west:'Jucători occidentali',middleEast:'Orientul Mijlociu',
  westText:'Cercetătorii occidentali au apreciat în primul rând aspectul exotic al orașelor medievale și partea de joc: săriturile pe acoperișuri, distanțele de parkour și locurile de ascundere.',
  middleEastText:'Cercetătoarele din Orientul Mijlociu (Arabia Saudită și Egipt) au simțit nostalgie, ca și cum ar fi revăzut locuri cunoscute: arhitectura islamică, umbra de pe alei, caligrafia arabă pe pietre și gesturile familiare ale oamenilor.',
  placeTag:'Atașament față de un loc din joc',
  placeText:'Un loc din joc devine „trăit”, ca Monteriggioni sau Ravensthorpe. După ce a modelat Parisul din Unity, Caroline Miousse a simțit, vizitând orașul real, <em>„ca și cum m-aș întoarce acasă”</em>.'},

 minciuni:{label:'18 · Minciuni utile',year:2014,
  kicker:'Erik Champion · Catros și Leblanc',
  title:'„Minciuni utile”: ce se schimbă ca jocul să meargă',
  lead:'Pentru ca un loc să fie recunoscut și ușor de jucat, creatorii mai schimbă uneori istoria. Apasă pe un card.',
  flipHint:'↻ Apasă pentru explicație',backTag:'De ce?',
  /* front = fața cardului, back = explicația de pe spate */
  cards:[
   {title:'1. Turla Notre-Dame',tag:'Unity · anacronism',front:'Jocul arată turla gotică a catedralei, deși în 1789 ea nu exista.',back:'Turla actuală a fost ridicată abia în secolul al XIX-lea. A fost păstrată pentru că jucătorii recunosc imediat Parisul.'},
   {title:'2. Orga catedralei',tag:'Unity · drepturi de autor',front:'Orga din Notre-Dame are câteva detalii schimbate.',back:'Designul real al orgii este protejat de drepturi de autor, așa că a fost modificat ușor.'},
   {title:'3. Gara St. Pancras',tag:'Syndicate · hartă',front:'Gara este mutată puțin în Londra.',back:'A fost mutată ca distanțele dintre punctele de observație să fie mai potrivite pentru joc.'},
   {title:'4. Căile ferate',tag:'Syndicate · ritm de joc',front:'Trenurile circulă în bucle continue prin oraș.',back:'Liniile au fost unite ca să poți călători fără oprire. În primul joc, unele monumente au fost micșorate și apropiate.'},
   {title:'5. Marea Piramidă',tag:'Origins · ipoteză',front:'În Piramidă există camere ascunse.',back:'Ele se bazează pe ipoteza arhitectului Jean-Pierre Houdin, cu o rampă interioară în spirală.'},
   {title:'6. Sfinxul și Merer',tag:'Origins · cercetare',front:'Sfinxul are doar urme șterse de vopsea.',back:'Realizat împreună cu egiptologi de la Sorbona, plus papirusul lui Merer, un supraveghetor al lucrărilor.'}]},

 discovery:{label:'19 · Discovery Tour',year:2018,
  kicker:'Discovery Tour',
  title:'Același oraș, ca joc sau ca muzeu',
  lead:'În Discovery Tour nu mai există luptă. Orașul devine un muzeu pe care îl vizitezi, cu texte scrise împreună cu istorici. Alege modul de mai jos.',
  gameLabel:'MODUL JOC · Parkour ca să scapi de gărzi',tourLabel:'DISCOVERY TOUR · Traseu de muzeu',
  gameBtn:'Mod joc',tourBtn:'Discovery Tour',
  historiansTag:'Scris cu istorici și muzee',big:'6.000 → 2.000 cuvinte',
  historians:'Studiile istoricilor au fost scurtate la texte ușor de citit, care recunosc deschis ce a schimbat jocul față de istorie.',
  contradiction:'O contradicție',
  gameText:'În modul joc, parkour-ul și privitul atent la clădiri îți servesc ca să scapi de gărzi sau să prinzi un avantaj. Orașul este un teren de joc.',
  tourText:'În Discovery Tour nu mai există luptă sau misiuni, iar parkour-ul este opțional. Orașul devine un muzeu pe care îl explorezi. Rămâne o întrebare: cât de adânc te poți simți în istorie dacă dispare și tensiunea jocului?'}
};
