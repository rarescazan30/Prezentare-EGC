/* SLIDE 20 · Concluzii
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   (eticheta + text)
   │ indiciuBibliografie
   │ ▸ bibliografie[0].titlu        N unitate      ← se deschide la click
   │ ▸ bibliografie[1].titlu        N unitate
   │ ▸ …
   └

   Grupurile apar în ordinea de aici. `din` = grupul se completează singur:
   'jocuri' din slide-ul 5, 'lynch' din slide-ul 11, 'surse' din lista `surse` de mai jos.
   `coloane` spune ce e în fiecare coloană; pe slide se văd primele două. */
slide(20,{
 bara:'20 · Concluzii',
 an:2025,
 supratitlu:'Concluzii',
 titlu:'Trei idei de reținut',
 carduri:[
  {eticheta:'I. Tehnologie',
   text:'Hărțile mari au cerut generare automată, teste de noapte și lumină în timp real.'},
  {eticheta:'II. Arhitectură',
   text:'Reperele, fațadele și sunetul te ajută să te orientezi și să simți locul.'},
  {eticheta:'III. Istorie',
   text:'Micile schimbări față de adevăr fac istoria jucabilă, iar Discovery Tour o explică.'}
 ],
 indiciuBibliografie:'Bibliografie · apasă pe un grup pentru a-l deschide',
 bibliografie:[
  {titlu:'Harta francizei', unitate:'jocuri', din:'jocuri'},
  {titlu:'Cele cinci elemente Lynch', unitate:'elemente', din:'lynch'},
  {titlu:'Semiotică și urbanism', unitate:'surse',
   coloane:['Autor(i) și an','Titlu și locul publicării','Rezumat'],
   randuri:[
    [
     'Aroni, Gabriele (2022)',
     'The Semiotics of Architecture in Video Games (Bloomsbury Academic)',
     'Stabilește un cadru semiotic cuprinzător pentru arhitectura virtuală utilizând AC II, NaissanceE și Final Fantasy XV; aplică Teoria Recuzitei (Tavinor, Bateman, Upton) pentru a explica funcția dublă: reprezentațională și ludică.'
    ],
    [
     'Aroni, Gabriele (2019)',
     'The Architecture of AC II’s Florence: An Analysis with the History-Game Relations (HGR) Framework, Well Played 8(1), 13–26',
     'Analizează modul în care ordinele arhitecturale renascentiste (proporțiile vitruviene ale lui Filippo Brunelleschi în Basilica di San Lorenzo) sunt adaptate în geometria interactivă de parkour în AC2.'
    ],
    [
     'Aroni, Gabriele (2025)',
     'The Semiotics of Video Game Spaces, Signata: Annales des sémiotiques, 16',
     'Examinează modul în care configurațiile spațiale dictează mișcarea jucătorului și cum se împletesc instrumentele de dezvoltare a jocurilor cu crearea de semne ale patrimoniului cultural.'
    ],
    [
     'Aliaga Cárceles & Martínez Fernández (2022)',
     'The Configuration of the Urban Landscape in AC (2007): Sources, Models and Referents…, VISUAL REVIEW 12(3), 1–18',
     'Urmărește modelele istorice de artă și referenții arhitecturali UNESCO (ex. cisternele Moscheii Jazzar Pasha din Acra) folosiți la construirea Ierusalimului, Damascului, Acrei și Masyaf-ului.'
    ],
    [
     'Catros, Aurélien & Leblanc, Maxime',
     'When Boston is Not Boston: The Useful Lies of Reconstructive Game Models (UdeM / McGill)',
     'Aplică The Image of the City (1960) de Kevin Lynch pentru a evalua modul în care AC III distorsionează Bostonul istoric prin „minciuni utile” într-un model lizibil și jucabil.'
    ],
    [
     'Hausar, G. (2014)',
     'Players in the Digital City: Immersion, History and City Architecture in the AC Series, Loading…',
     'Investighează intersecția dintre istoria arhitecturii urbane, navigația jucătorului și imersiunea spațială în primele titluri urbane ale francizei.'
    ],
    [
     'Leffler, C. (2019)',
     'Memory Games: History, Memory, and Anachronism in the Paris of AC Unity, Contemporary French Civilization 44(1), 81–99',
     'Examinează critic modul în care Parisul virtual din Unity negociază memoria culturală a Revoluției Franceze și anacronismele arhitecturale deliberate (Notre-Dame).'
    ],
    [
     'Studii de dramaturgie spațială (2021–2026)',
     'Architecture, Narrative and Interaction in the Cityscapes of the AC Series (2021) & Spatial Dramaturgy (2026)',
     'Integrează abordări dramaturgice, naratologice (Jenkins, Nitsche) și spațiale (Lynch) pentru a defini reglarea ritmului, ghidarea navigației și cadența narativă.'
    ]
   ]},
  {titlu:'Patrimoniu și educație', unitate:'surse',
   coloane:['Autor(i) și an','Titlu și locul publicării','Rezumat'],
   randuri:[
    [
     'Champion, Erik & Hiriart Vera, J. F. (Eds.) (2024)',
     'Assassin’s Creed in the Classroom: History’s Playground or a Stab in the Dark? (De Gruyter Oldenbourg)',
     'Antologia academică de referință care evaluează valoarea de patrimoniu digital, autenticitatea istorică și integrarea în clasă pentru Origins, Odyssey și Valhalla.'
    ],
    [
     'Champion, Erik (2015 / 2020)',
     'Critical Gaming: Interactive History and Virtual Heritage (2015) & Culturally Significant Presence, ACM JOCCH 13(4)',
     'Definește „prezența culturală” — susținând că imersiunea nu depinde de acuratețea fotogrammetrică 3D sterilă, ci de transmiterea sensului trăit al unui loc pentru culturile trecute.'
    ],
    [
     'Anderson, Glaire, et al. (2024)',
     'The 200-Million-Student Classroom: Teaching Islamicate History One Video Game at a Time, IJMES (Cambridge)',
     'Detaliază colaborarea 2021–2022 dintre DLIVCC și Maxime Durand pentru AC Mirage (Bagdadul sec. IX): 10 săptămâni de seminarii (macro, mezo, cotidian) și codexul GLAM.'
    ],
    [
     'Studiu Near Eastern Archaeology (2021)',
     'AC Origins Discovery Tour: A Behind the Scenes Experience, Near Eastern Archaeology 84(1), 79–85',
     'Scris de un egiptolog consultant de la Sorbona (15 din 20 capsule); explică reducerea textelor de la 6.000 la 2.000 de cuvinte, papirusul lui Merer și policromia Sfinxului.'
    ],
    [
     'Éthier, Marc-André & Lefrançois, David (2023/2024)',
     'Historical Video Games and Teaching Practices & The Discovery Tour as a Mediated Tool, in AC in the Classroom',
     'Cercetare educațională empirică ce demonstrează cum profesorii folosesc Discovery Tour pentru a cultiva empatia istorică și analiza critică a surselor.'
    ],
    [
     'Hammar, Emil Lundedal (2016)',
     'Counter-Hegemonic Commemorative Play: Marginalized Pasts… in AC: Freedom Cry, Rethinking History 21(3), 372–395',
     'Examinează modul în care designul ambiental și jocul interactiv pot recupera istorii marginalizate, subalterne și pot contesta memoria colonială hegemonică.'
    ],
    [
     'Studii de practică arheologică (2019–2024)',
     'Undergraduate Teaching and AC, Advances in Archaeological Practice (Cambridge) & CEUR Workshop (2024)',
     'Demonstrează cum eliminarea mecanicilor de luptă în Discovery Tour transformă spațiul de joc din parkour exploratoriu în „arhitectură instrucțională receptivă”.'
    ]
   ]},
  {titlu:'Imersiune și simțuri', unitate:'surse',
   coloane:['Autor(i) și an','Titlu și locul publicării','Rezumat'],
   randuri:[
    [
     'Warde-Brown, Ailbhe (2021)',
     'Waltzing on Rooftops and Cobblestones: Sonic Immersion through Spatiotemporal Involvement in the AC Series, JSMG 2(3), 34–55',
     'Combină modelul ALI (van Elferen) și implicarea lui Calleja pentru a teoretiza semioza spațiotemporală („Ezio’s Family”) și angajamentul spațiotemporal (Viewpoints, soundwalking etnografic).'
    ],
    [
     'Seif El-Nasr, Al-Saati, Niedenthal & Milam (2008)',
     'Assassin’s Creed: A Multi-Cultural Read, Loading…, 2(3)',
     'Studiu transcultural de referință: jucătorii occidentali vs. cei din Orientul Mijlociu citesc diferit arhitectura, lumina, străzile darb și caligrafia arabă din AC1 („ochiul vicariant” al lui Boorstin).'
    ],
    [
     'Studiu imersiune temporală (2026)',
     'Reflexive Game Studies Analysis on Flow, Escapism, and Virtual Place Attachment, MDPI 7(4), 99',
     'Conectează teoria fluxului (Csikszentmihalyi, 1990) și distorsiunea temporală cu refugiul emoțional și atașamentul față de locul virtual (ex. Ravensthorpe în Valhalla, Monteriggioni în AC2).'
    ],
    [
     'Studii de receptare postcolonială (2019–2026)',
     'AC Reminds Us That History is Human Experience, TRSE 47(1), 108–137 (2019) & Ferreira & Ganito (UCP)',
     'Analizează modul în care angajamentul întrupat față de personajele și mediile istorice generează empatie afectivă și negociază memoria culturală postcolonială.'
    ]
   ]},
  {titlu:'Industrie și conferințe GDC', unitate:'surse',
   coloane:['Vorbitor / sursă','Titlul prezentării și locul','Focus tehnic'],
   randuri:[
    [
     'Routhier, Nicholas (2018)',
     'AC Origins: Monitoring and Validation of World Design Data (GDC 2018 / 80 Level)',
     'Sursă primară despre eșecul metodelor manuale la peste 4 km²; detaliază generarea procedurală a biomurilor, scripturile nocturne C# și platforma GIS web Atlas.'
    ],
    [
     'Lopez, Nicolas & Ubisoft Rendering Team (2025)',
     'Rendering AC Shadows (GDC 2025) & Raytracing the World of AC Shadows (SIGGRAPH 2025)',
     'Explică de ce pre-calcularea GI ar necesita 2 TB și 2 ani (față de 450 GB / 3 luni în Origins), tranziția la RTGI în timp real, Micropoligoane GPU și ciclurile sezoniere.'
    ],
    [
     'Cournoyer, F., Laidacker, A. & Sweet, J. (2014–2015)',
     'Massive Crowd on AC Unity: AI Recycling (GDC 2015 / Game Informer)',
     'Detaliază arhitectura mulțimii care randează simultan 10.000–12.000 de cetățeni parizieni, reciclând o limită de 40 de entități AI reale și 120 de modele HD în jurul jucătorului.'
    ],
    [
     'Bergeron, Philippe (2016)',
     'Level Design Workshop: 360 Approach for Open World Mission Design (GDC 2016)',
     'Formalizează metodologia de level design radial de la Ubisoft Montreal pentru abordări non-liniare, pe vectori multipli, în stealth și luptă.'
    ],
    [
     'Dumont, Jonathan (2015)',
     'The World Design of AC: Syndicate — Full Transcript (Game Developer / Gamasutra)',
     'Documentează munca de teren (70 km parcurși pe jos, 4.000 de fotografii în Londra), divizarea prin Tamisa și relocarea gării St. Pancras și a căilor ferate.'
    ],
    [
     'Miousse, Caroline (2014 / 2019)',
     'Interviews on Recreating Notre-Dame for AC Unity (Destructoid / SIGGRAPH Blog)',
     'Relatare la prima mână despre modelarea timp de 2 ani (5.000 h) la scara 1:1 a catedralei Notre-Dame, turla anacronică din sec. XIX și ocolirea drepturilor de autor pentru orgă.'
    ],
    [
     'Durand, Maxime (2018–2024)',
     'Interview with Maxime Durand on His Role as World-Design Director (Routledge / EGM / GamesRadar)',
     'Prezintă integrarea istoricilor interni și a consultanților academici externi în designul zilnic al lumii și filozofia pedagogică din spatele Discovery Tour.'
    ]
   ]},
  {titlu:'Alte surse online', unitate:'surse', din:'surse'}
 ],
 surse:[
  [
   '1',
   'scribd.com/document/807405105/Game-Design-Document-for-Assassins-Creed',
   'Document de design inițial Assassin’s Creed (2007)'
  ],
  [
   '2',
   'medium.com/@EightyLevel/building-the-world-of-assassins-creed-origins-c548c53e700d',
   'Nicholas Routhier (GDC 2018 / 80 Level) — Construcția lumii în AC Origins și sistemul Atlas'
  ],
  [
   '3',
   'method.gg/assassins-creed-shadows/assassins-creed-shadows-map-size-and-locations',
   'Dimensiunea hărții și regiunile din AC Shadows (80 / 125 km²)'
  ],
  [
   '4',
   'researchgate.net/publication/345416418_Architecture_Narrative_and_Interaction_in_the_Cityscapes',
   'Architecture, Narrative and Interaction in the Cityscapes of the AC Series (2021)'
  ],
  [
   '6',
   'visualreview.net/revVISUAL/article/view/3736',
   'Aliaga Cárceles & Martínez Fernández (2022) — Configurația peisajului urban în AC1 (VISUAL REVIEW)'
  ],
  [
   '7',
   'gamedeveloper.com/design/the-world-design-of-assassin-s-creed-syndicate-full-transcript',
   'Jonathan Dumont (2015) — Transcrierea completă despre World Design-ul Londrei în AC Syndicate'
  ],
  [
   '8',
   'gdconf.com/article/how-ubisoft-brought-feudal-japan-to-life-rendering-assassin-s-creed-shadows-with-nicolas-lopez',
   'Nicolas Lopez (GDC 2025) — Randarea Japoniei feudale în AC Shadows'
  ],
  [
   '9',
   'dsogaming.com/news/assassins-creed-shadows-would-require-2tb-of-data-and-2-years-for-baked-lighting',
   'Analiză GDC 2025: De ce iluminarea pre-calculată în AC Shadows ar necesita 2 TB și 2 ani'
  ],
  [
   '10',
   'researchgate.net/publication/228878072_Assassin_s_creed_a_multi-cultural_read',
   'Seif El-Nasr, Al-Saati, Niedenthal & Milam (2008) — Assassin’s Creed: A Multi-Cultural Read'
  ],
  [
   '11',
   'medium.com/@isohi87/exploring-colonialism-and-resistance-in-assassins-creed-iii',
   'Critica postcolonială și rezistența indigenă în topografia din Assassin’s Creed III'
  ],
  [
   '13',
   'destructoid.com/one-dev-spent-two-years-making-the-notre-dame-in-assassins-creed-unity',
   'Caroline Miousse (2014) — 2 ani (5.000 de ore) pentru reconstrucția Catedralei Notre-Dame în AC Unity'
  ],
  [
   '14',
   'digitalfoundry.net/articles/digitalfoundry-2014-assassins-creed-unity-face-off',
   'Digital Foundry (2014) — Analiza tehnică PBR și Global Illumination în AC Unity'
  ],
  [
   '17',
   'cambridge.org/core/journals/international-journal-of-middle-east-studies/article/200million-student-classroom',
   'Glaire Anderson et al. (2024) — The 200-Million-Student Classroom (Cambridge University Press)'
  ],
  [
   '20',
   'en.wikipedia.org/wiki/Ubisoft_Anvil',
   'Istoricul tehnic al motorului proprietar Scimitar → Anvil → AnvilNext → Ubisoft Anvil'
  ],
  [
   '26',
   'gdcvault.com/play/1022411/Massive-Crowd-on-Assassin-s',
   'François Cournoyer (GDC 2015) — Massive Crowd on AC Unity: AI Recycling (40 AI / 120 HD / 12.000 NPC)'
  ],
  [
   '27',
   'advances.realtimerendering.com/s2025/content/Advances_2025_Raytracing_the_world_of_AC_Shadows.pdf',
   'SIGGRAPH 2025 — Raytracing the World of Assassin’s Creed Shadows (Ubisoft Rendering Team)'
  ],
  [
   '29',
   'medium.com/@EricBiancalana/building-on-the-shoulders-of-giants-in-assassins-creed-valhalla',
   'Eric Biancalana — Building on the Shoulders of Giants in AC Valhalla (Palimpsest arheologic)'
  ],
  [
   '32',
   'blog.siggraph.org/2019/05/how-ubisoft-re-created-notre-dame-for-assassins-creed-unity.html',
   'SIGGRAPH Blog (2019) — Reconstrucția Notre-Dame, turla Viollet-le-Duc și orga sub copyright'
  ],
  [
   '33',
   'gdcvault.com/play/1025452/-Assassin-s-Creed-Origins',
   'Nicholas Routhier (GDC Vault 2018) — Monitoring and Validation of World Design Data in AC Origins'
  ],
  [
   '38',
   'colinbarrebrisebois.com/2015/11/06/finding-next-gen-part-i-the-need-for-robust-and-fast-global-illumination',
   'Colin Barré-Brisebois (2015) — Necesitatea iluminării globale rapide pentru iterația artistică'
  ],
  [
   '43',
   'researchgate.net/publication/344134204_Preservation_and_Heritage_at_Play_in_Technoculture',
   'Preservation and Heritage at Play in Technoculture: Notre-Dame in Assassin’s Creed'
  ],
  [
   '47',
   'mdpi.com/2673-5768/7/4/99',
   'Reflexive Game Studies Analysis on Flow, Escapism, and Virtual Place Attachment (MDPI, 2026)'
  ],
  [
   '48',
   'researchgate.net/publication/362249938_The_Semiotics_of_Architecture_in_Video_Games',
   'Gabriele Aroni (2022) — The Semiotics of Architecture in Video Games (Bloomsbury Academic)'
  ],
  [
   '49',
   'online.ucpress.edu/jsmg/article/2/3/34/118095/Waltzing-on-Rooftops-and-CobblestonesSonic',
   'Ailbhe Warde-Brown (2021) — Waltzing on Rooftops and Cobblestones: Sonic Immersion (JSMG)'
  ],
  [
   '52',
   'gdcvault.com/play/1023550/Level-Design-Workshop-360-Approach',
   'Philippe Bergeron (GDC 2016) — Level Design Workshop: 360 Approach for Open World Mission Design'
  ],
  [
   '53',
   'researchgate.net/publication/408452207_Spatial_Dramaturgy_and_Narrative_Design',
   'Spatial Dramaturgy and Narrative Design in Contemporary Video Games (2026)'
  ],
  [
   '54',
   'mshl.is/wp-content/uploads/2023/10/20231020_IcelandTalk-Champion.pdf',
   'Erik Champion — Culturally Significant Presence and Virtual Heritage'
  ],
  [
   '56',
   'journals.openedition.org/signata/5894',
   'Gabriele Aroni (2025) — The Semiotics of Video Game Spaces (Signata: Annales des sémiotiques, 16)'
  ],
  [
   '59',
   'iuliu-cosmin-oniscu.medium.com/large-sandbox-design-579dbcee5060',
   'Iuliu-Cosmin Oniscu — Large Sandbox Design și operaționalizarea lui Kevin Lynch'
  ],
  [
   '62',
   'crc.umontreal.ca/telechargement/when-boston-is-not-boston-the-useful-lies-of-reconstructive-game-models',
   'Aurélien Catros & Maxime Leblanc (UdeM / McGill) — When Boston is Not Boston: The Useful Lies'
  ],
  [
   '68',
   'researchgate.net/publication/238654339_Game_Design_as_Narrative_Architecture',
   'Henry Jenkins — Game Design as Narrative Architecture (Evoked, Enacted, Embedded, Emergent)'
  ],
  [
   '69',
   'jgeekstudies.org/2023/10/07/what-lasts-of-us-implicit-archaeology-through-environmental-storytelling',
   'Implicit Archaeology through Environmental Storytelling (Journal of Geek Studies, 2023)'
  ],
  [
   '79',
   'researchgate.net/publication/349839829_Assassin_s_Creed_Origins_Discovery_Tour_A_Behind_the_Scenes',
   'Near Eastern Archaeology (2021) — AC Origins Discovery Tour: Behind the Scenes (Sorbona, Merer, Sfinx)'
  ],
  [
   '84',
   'researchgate.net/publication/330746118_Assassin_s_Creed_reminds_us_that_history_is_human_experience',
   'Theory and Research in Social Education (2019) — Empatia istorică a elevilor în Assassin’s Creed'
  ],
  [
   '87',
   'recherche.umontreal.ca/english/our-researchers/professors-directory/researcher/is/in14901',
   'Marc-André Éthier & David Lefrançois (Université de Montréal) — Didactica istoriei și Discovery Tour'
  ],
  [
   '90',
   'ceur-ws.org/Vol-3669/paper7.pdf',
   'CEUR Workshop (2024) — Analiza Discovery Tour: De la sandbox emergent la arhitectură instrucțională receptivă'
  ],
  [
   '94',
   'researchgate.net/publication/379662951_The_Architecture_of_Assassin_s_Creed_II_s_Florence',
   'Gabriele Aroni (2019) — The Architecture of AC II’s Florence (Well Played, 8(1), 13–26)'
  ],
  [
   '96',
   'books.google.com/books/about/Assassin_s_Creed_in_the_Classroom.html',
   'Erik Champion & Juan Francisco Hiriart Vera (Eds.) (2024) — Assassin’s Creed in the Classroom (De Gruyter)'
  ],
  [
   '100',
   'cambridge.org/core/journals/advances-in-archaeological-practice/article/undergraduate-teaching',
   'Advances in Archaeological Practice (Cambridge) — Predarea arheologiei universitare cu Assassin’s Creed'
  ]
 ]
});
