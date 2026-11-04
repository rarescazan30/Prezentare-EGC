/* SLIDE 17 · 3 concepte folositoare în game development
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   ← cele 3 concepte (eticheta + text)
   │ indiciuBibliografie
   │ ▸ bibliografie[0].titlu        N unitate      ← se deschide la click
   │ ▸ …
   └

   Bibliografia e cea de pe branch-ul main, afișată la fel: fiecare rând e [text îngroșat, text mic]. */
slide(17,{
 bara:'17 · 3 concepte',
 an:2025,
 supratitlu:'Concluzii',
 titlu:'3 concepte folositoare în game development',
 carduri:[
  {eticheta:'1 · LOD (Level of Detail)', text:'Ce e departe sau în afara camerei primește mai puțin detaliu. Se aplică la modele, la teren și chiar la AI, ca în crowd-ul din Unity.'},
  {eticheta:'2 · Instancing și generare procedurală', text:'Lumea se construiește din piese refolosite și din reguli, nu obiect cu obiect. Așa ajungi de la un oraș de 0,13 km² la o țară de 130 km².'},
  {eticheta:'3 · Baked vs. real-time', text:'Ce nu se schimbă se poate calcula dinainte (baked lighting): rapid în joc, dar scump în memorie. Ce se schimbă (ora din zi, anotimpurile) cere calcul în timp real, ca ray tracing-ul.'}
 ],
 indiciuBibliografie:'Bibliografie',
 bibliografie:[
  {titlu:'Harta francizei', unitate:'jocuri', randuri:[
   ['Assassin’s Creed (2007)','Damasc (Țara Sfântă) · 0,13 km² · Scimitar'],
   ['Assassin’s Creed II (2009)','Florența și Veneția · 0,30 / 0,37 km² · Anvil'],
   ['AC: Brotherhood (2010)','Roma · 1,41 km² · Anvil'],
   ['AC: Revelations (2011)','Constantinopol · 0,94 km² · Anvil'],
   ['Assassin’s Creed III (2012)','New York și Frontiera · 0,93 / 1,41 km² · AnvilNext'],
   ['AC IV: Black Flag (2013)','Caraibe / Indiile de Vest · ~120,0 (Nucleu) km² · AnvilNext'],
   ['Assassin’s Creed Rogue (2014)','Atlanticul de Nord · N/A (Arhipelag) km² · AnvilNext'],
   ['Assassin’s Creed Unity (2014)','Paris · 2,40 km² · AnvilNext 2.0'],
   ['AC: Syndicate (2015)','Londra victoriană · 3,70 km² · AnvilNext 2.0'],
   ['Assassin’s Creed Origins (2017)','Egiptul ptolemaic · 80,0 km² · AnvilNext 2.0'],
   ['Assassin’s Creed Odyssey (2018)','Grecia Antică · 130,0 km² · AnvilNext 2.0'],
   ['Assassin’s Creed Valhalla (2020)','Norvegia și Anglia · 22,0 / 94,0 km² · Ubisoft Anvil'],
   ['Assassin’s Creed Mirage (2023)','Bagdadul secolului IX · 2,30 km² · Ubisoft Anvil'],
   ['Assassin’s Creed Shadows (2025)','Japonia feudală · 80,0 km² · Ubisoft Anvil (Modernizat)']
  ]},
  {titlu:'Cele cinci elemente Lynch', unitate:'elemente', randuri:[
   ['Repere (Landmarks)','Clădiri sau monumente înalte, vizibile de departe.'],
   ['Trasee (Paths)','Drumurile pe care te miști prin oraș.'],
   ['Districte (Districts)','Zone ale orașului cu un aspect și o viață proprii.'],
   ['Margini (Edges)','Linii care despart două zone: ziduri, ape, faleze.'],
   ['Noduri (Nodes)','Locuri unde se întâlnesc mai multe drumuri, de obicei piețe.']
  ]},
  {titlu:'Semiotică și urbanism', unitate:'surse', randuri:[
   ['Aroni, Gabriele (2022)','The Semiotics of Architecture in Video Games (Bloomsbury Academic)'],
   ['Aroni, Gabriele (2019)','The Architecture of AC II’s Florence: An Analysis with the History-Game Relations (HGR) Framework, Well Played 8(1), 13–26'],
   ['Aroni, Gabriele (2025)','The Semiotics of Video Game Spaces, Signata: Annales des sémiotiques, 16'],
   ['Aliaga Cárceles & Martínez Fernández (2022)','The Configuration of the Urban Landscape in AC (2007): Sources, Models and Referents…, VISUAL REVIEW 12(3), 1–18'],
   ['Catros, Aurélien & Leblanc, Maxime','When Boston is Not Boston: The Useful Lies of Reconstructive Game Models (UdeM / McGill)'],
   ['Hausar, G. (2014)','Players in the Digital City: Immersion, History and City Architecture in the AC Series, Loading…'],
   ['Leffler, C. (2019)','Memory Games: History, Memory, and Anachronism in the Paris of AC Unity, Contemporary French Civilization 44(1), 81–99'],
   ['Studii de dramaturgie spațială (2021–2026)','Architecture, Narrative and Interaction in the Cityscapes of the AC Series (2021) & Spatial Dramaturgy (2026)']
  ]},
  {titlu:'Patrimoniu și educație', unitate:'surse', randuri:[
   ['Champion, Erik & Hiriart Vera, J. F. (Eds.) (2024)','Assassin’s Creed in the Classroom: History’s Playground or a Stab in the Dark? (De Gruyter Oldenbourg)'],
   ['Champion, Erik (2015 / 2020)','Critical Gaming: Interactive History and Virtual Heritage (2015) & Culturally Significant Presence, ACM JOCCH 13(4)'],
   ['Anderson, Glaire, et al. (2024)','The 200-Million-Student Classroom: Teaching Islamicate History One Video Game at a Time, IJMES (Cambridge)'],
   ['Studiu Near Eastern Archaeology (2021)','AC Origins Discovery Tour: A Behind the Scenes Experience, Near Eastern Archaeology 84(1), 79–85'],
   ['Éthier, Marc-André & Lefrançois, David (2023/2024)','Historical Video Games and Teaching Practices & The Discovery Tour as a Mediated Tool, in AC in the Classroom'],
   ['Hammar, Emil Lundedal (2016)','Counter-Hegemonic Commemorative Play: Marginalized Pasts… in AC: Freedom Cry, Rethinking History 21(3), 372–395'],
   ['Studii de practică arheologică (2019–2024)','Undergraduate Teaching and AC, Advances in Archaeological Practice (Cambridge) & CEUR Workshop (2024)']
  ]},
  {titlu:'Imersiune și simțuri', unitate:'surse', randuri:[
   ['Warde-Brown, Ailbhe (2021)','Waltzing on Rooftops and Cobblestones: Sonic Immersion through Spatiotemporal Involvement in the AC Series, JSMG 2(3), 34–55'],
   ['Seif El-Nasr, Al-Saati, Niedenthal & Milam (2008)','Assassin’s Creed: A Multi-Cultural Read, Loading…, 2(3)'],
   ['Studiu imersiune temporală (2026)','Reflexive Game Studies Analysis on Flow, Escapism, and Virtual Place Attachment, MDPI 7(4), 99'],
   ['Studii de receptare postcolonială (2019–2026)','AC Reminds Us That History is Human Experience, TRSE 47(1), 108–137 (2019) & Ferreira & Ganito (UCP)']
  ]},
  {titlu:'Industrie și conferințe GDC', unitate:'surse', randuri:[
   ['Routhier, Nicholas (2018)','AC Origins: Monitoring and Validation of World Design Data (GDC 2018 / 80 Level)'],
   ['Lopez, Nicolas & Ubisoft Rendering Team (2025)','Rendering AC Shadows (GDC 2025) & Raytracing the World of AC Shadows (SIGGRAPH 2025)'],
   ['Cournoyer, F., Laidacker, A. & Sweet, J. (2014–2015)','Massive Crowd on AC Unity: AI Recycling (GDC 2015 / Game Informer)'],
   ['Bergeron, Philippe (2016)','Level Design Workshop: 360 Approach for Open World Mission Design (GDC 2016)'],
   ['Dumont, Jonathan (2015)','The World Design of AC: Syndicate — Full Transcript (Game Developer / Gamasutra)'],
   ['Miousse, Caroline (2014 / 2019)','Interviews on Recreating Notre-Dame for AC Unity (Destructoid / SIGGRAPH Blog)'],
   ['Durand, Maxime (2018–2024)','Interview with Maxime Durand on His Role as World-Design Director (Routledge / EGM / GamesRadar)']
  ]},
  {titlu:'Alte surse online', unitate:'surse', randuri:[
   ['Document de design inițial Assassin’s Creed (2007)','scribd.com/document/807405105/Game-Design-Document-for-Assassins-Creed'],
   ['Nicholas Routhier (GDC 2018 / 80 Level) — Construcția lumii în AC Origins și sistemul Atlas','medium.com/@EightyLevel/building-the-world-of-assassins-creed-origins-c548c53e700d'],
   ['Dimensiunea hărții și regiunile din AC Shadows (80 / 125 km²)','method.gg/assassins-creed-shadows/assassins-creed-shadows-map-size-and-locations'],
   ['Architecture, Narrative and Interaction in the Cityscapes of the AC Series (2021)','researchgate.net/publication/345416418_Architecture_Narrative_and_Interaction_in_the_Cityscapes'],
   ['Aliaga Cárceles & Martínez Fernández (2022) — Configurația peisajului urban în AC1 (VISUAL REVIEW)','visualreview.net/revVISUAL/article/view/3736'],
   ['Jonathan Dumont (2015) — Transcrierea completă despre World Design-ul Londrei în AC Syndicate','gamedeveloper.com/design/the-world-design-of-assassin-s-creed-syndicate-full-transcript'],
   ['Nicolas Lopez (GDC 2025) — Randarea Japoniei feudale în AC Shadows','gdconf.com/article/how-ubisoft-brought-feudal-japan-to-life-rendering-assassin-s-creed-shadows-with-nicolas-lopez'],
   ['Analiză GDC 2025: De ce iluminarea pre-calculată în AC Shadows ar necesita 2 TB și 2 ani','dsogaming.com/news/assassins-creed-shadows-would-require-2tb-of-data-and-2-years-for-baked-lighting'],
   ['Seif El-Nasr, Al-Saati, Niedenthal & Milam (2008) — Assassin’s Creed: A Multi-Cultural Read','researchgate.net/publication/228878072_Assassin_s_creed_a_multi-cultural_read'],
   ['Critica postcolonială și rezistența indigenă în topografia din Assassin’s Creed III','medium.com/@isohi87/exploring-colonialism-and-resistance-in-assassins-creed-iii'],
   ['Caroline Miousse (2014) — 2 ani (5.000 de ore) pentru reconstrucția Catedralei Notre-Dame în AC Unity','destructoid.com/one-dev-spent-two-years-making-the-notre-dame-in-assassins-creed-unity'],
   ['Digital Foundry (2014) — Analiza tehnică PBR și Global Illumination în AC Unity','digitalfoundry.net/articles/digitalfoundry-2014-assassins-creed-unity-face-off'],
   ['Glaire Anderson et al. (2024) — The 200-Million-Student Classroom (Cambridge University Press)','cambridge.org/core/journals/international-journal-of-middle-east-studies/article/200million-student-classroom'],
   ['Istoricul tehnic al motorului proprietar Scimitar → Anvil → AnvilNext → Ubisoft Anvil','en.wikipedia.org/wiki/Ubisoft_Anvil'],
   ['François Cournoyer (GDC 2015) — Massive Crowd on AC Unity: AI Recycling (40 AI / 120 HD / 12.000 NPC)','gdcvault.com/play/1022411/Massive-Crowd-on-Assassin-s'],
   ['SIGGRAPH 2025 — Raytracing the World of Assassin’s Creed Shadows (Ubisoft Rendering Team)','advances.realtimerendering.com/s2025/content/Advances_2025_Raytracing_the_world_of_AC_Shadows.pdf'],
   ['Eric Biancalana — Building on the Shoulders of Giants in AC Valhalla (Palimpsest arheologic)','medium.com/@EricBiancalana/building-on-the-shoulders-of-giants-in-assassins-creed-valhalla'],
   ['SIGGRAPH Blog (2019) — Reconstrucția Notre-Dame, turla Viollet-le-Duc și orga sub copyright','blog.siggraph.org/2019/05/how-ubisoft-re-created-notre-dame-for-assassins-creed-unity.html'],
   ['Nicholas Routhier (GDC Vault 2018) — Monitoring and Validation of World Design Data in AC Origins','gdcvault.com/play/1025452/-Assassin-s-Creed-Origins'],
   ['Colin Barré-Brisebois (2015) — Necesitatea iluminării globale rapide pentru iterația artistică','colinbarrebrisebois.com/2015/11/06/finding-next-gen-part-i-the-need-for-robust-and-fast-global-illumination'],
   ['Preservation and Heritage at Play in Technoculture: Notre-Dame in Assassin’s Creed','researchgate.net/publication/344134204_Preservation_and_Heritage_at_Play_in_Technoculture'],
   ['Reflexive Game Studies Analysis on Flow, Escapism, and Virtual Place Attachment (MDPI, 2026)','mdpi.com/2673-5768/7/4/99'],
   ['Gabriele Aroni (2022) — The Semiotics of Architecture in Video Games (Bloomsbury Academic)','researchgate.net/publication/362249938_The_Semiotics_of_Architecture_in_Video_Games'],
   ['Ailbhe Warde-Brown (2021) — Waltzing on Rooftops and Cobblestones: Sonic Immersion (JSMG)','online.ucpress.edu/jsmg/article/2/3/34/118095/Waltzing-on-Rooftops-and-CobblestonesSonic'],
   ['Philippe Bergeron (GDC 2016) — Level Design Workshop: 360 Approach for Open World Mission Design','gdcvault.com/play/1023550/Level-Design-Workshop-360-Approach'],
   ['Spatial Dramaturgy and Narrative Design in Contemporary Video Games (2026)','researchgate.net/publication/408452207_Spatial_Dramaturgy_and_Narrative_Design'],
   ['Erik Champion — Culturally Significant Presence and Virtual Heritage','mshl.is/wp-content/uploads/2023/10/20231020_IcelandTalk-Champion.pdf'],
   ['Gabriele Aroni (2025) — The Semiotics of Video Game Spaces (Signata: Annales des sémiotiques, 16)','journals.openedition.org/signata/5894'],
   ['Iuliu-Cosmin Oniscu — Large Sandbox Design și operaționalizarea lui Kevin Lynch','iuliu-cosmin-oniscu.medium.com/large-sandbox-design-579dbcee5060'],
   ['Aurélien Catros & Maxime Leblanc (UdeM / McGill) — When Boston is Not Boston: The Useful Lies','crc.umontreal.ca/telechargement/when-boston-is-not-boston-the-useful-lies-of-reconstructive-game-models'],
   ['Henry Jenkins — Game Design as Narrative Architecture (Evoked, Enacted, Embedded, Emergent)','researchgate.net/publication/238654339_Game_Design_as_Narrative_Architecture'],
   ['Implicit Archaeology through Environmental Storytelling (Journal of Geek Studies, 2023)','jgeekstudies.org/2023/10/07/what-lasts-of-us-implicit-archaeology-through-environmental-storytelling'],
   ['Near Eastern Archaeology (2021) — AC Origins Discovery Tour: Behind the Scenes (Sorbona, Merer, Sfinx)','researchgate.net/publication/349839829_Assassin_s_Creed_Origins_Discovery_Tour_A_Behind_the_Scenes'],
   ['Theory and Research in Social Education (2019) — Empatia istorică a elevilor în Assassin’s Creed','researchgate.net/publication/330746118_Assassin_s_Creed_reminds_us_that_history_is_human_experience'],
   ['Marc-André Éthier & David Lefrançois (Université de Montréal) — Didactica istoriei și Discovery Tour','recherche.umontreal.ca/english/our-researchers/professors-directory/researcher/is/in14901'],
   ['CEUR Workshop (2024) — Analiza Discovery Tour: De la sandbox emergent la arhitectură instrucțională receptivă','ceur-ws.org/Vol-3669/paper7.pdf'],
   ['Gabriele Aroni (2019) — The Architecture of AC II’s Florence (Well Played, 8(1), 13–26)','researchgate.net/publication/379662951_The_Architecture_of_Assassin_s_Creed_II_s_Florence'],
   ['Erik Champion & Juan Francisco Hiriart Vera (Eds.) (2024) — Assassin’s Creed in the Classroom (De Gruyter)','books.google.com/books/about/Assassin_s_Creed_in_the_Classroom.html'],
   ['Advances in Archaeological Practice (Cambridge) — Predarea arheologiei universitare cu Assassin’s Creed','cambridge.org/core/journals/advances-in-archaeological-practice/article/undergraduate-teaching']
  ]}
 ]
});
