# Planul prezentării

**Tema:** Evoluția environment-ului în franciza Assassin’s Creed
**Unghiul nostru:** cum își construiesc jocurile orașele, văzut ca dezvoltatori de jocuri, cu legături ușoare la ce am făcut la **Elemente de Grafică pe Calculator (EGC)**.
**Durată:** aproximativ 15–18 minute, adică 5–6 minute de vorbitor. Detaliile tehnice (🔧) se spun în 2–3 fraze; codul de pe slide nu se citește rând cu rând, ci se arată ideea.
**Slide-uri:** 18, împărțite în 3 părți.
**Termeni tehnici:** cei din industrie rămân în engleză, așa cum se folosesc (baked lighting, light probes, ray tracing, LOD, draw call, instancing, heightmap, raycast, nightly build, viewpoint, crowd, AI recycling…).

Firul roșu, într-o frază: *lumile din Assassin’s Creed au crescut de la câteva orașe mici la țări întregi, iar ca să poată face asta, dezvoltatorii au trebuit să schimbe felul în care construiesc, verifică și desenează orașele.*

Fiecare parte răspunde la o singură întrebare:

| Partea | Vorbitor | Întrebarea | Slide-uri |
|---|---|---|---|
| 1 | Vorbitor 1 | **Ce s-a schimbat?** Cum au crescut lumile în aproape 20 de ani. | 1–5 |
| 2 | Vorbitor 2 | **Cum se construiește un oraș?** Piese, reguli, teste, orientare, cățărare. | 6–10 |
| 3 | Vorbitor 3 | **Cum devine orașul viu?** Lumină, anotimpuri, oameni și „minciunile” necesare. | 11–18 |

Pe fiecare slide sunt scrise **1–3 idei principale**: exact ce spune vorbitorul. Pe majoritatea slide-urilor există și un **detaliu tehnic** (chenarul auriu: o formulă sau un fragment scurt de cod în stilul laboratoarelor EGC, plus o explicație). Codul e o *tehnică standard*, nu codul Ubisoft: spuneți asta explicit. Textul complet e în fișierele din `content/`, iar locurile pentru poze sunt marcate pe slide cu „Poză de adăugat”.

---

## Partea 1 · Ce s-a schimbat (Vorbitor 1)

### Slide 1 · Cum își construiește Assassin’s Creed orașele
- Prezentăm tema și cele trei părți (cardurile de jos spun cine vorbește despre ce).
- Cifra mare: de la **0,13 km²** (Damasc, 2007) la **130 km² de uscat** (Grecia, 2018).
- *Fraza de început:* „În 2007 traversai un oraș în câteva minute. În 2018 îți trebuia o oră doar ca să traversezi o insulă.”

### Slide 2 · La început: orașe mici, făcute pentru sărituri (2007–2012)
- **AC1 (2007):** Damasc, Acra, Ierusalim. Orașe mici, cu acoperișurile lipite ca să poți sări.
- **AC2 (2009):** Florența și Veneția, refăcute după clădiri reale, cu monumente pe care te urci.
- **AC3 (2012):** pe lângă oraș apare natura: frontiera, unde te cațeri pe copaci și stânci.
- 🔧 **Detaliu tehnic:** consolele din 2007 aveau doar 512 MB de memorie pentru tot jocul, de aceea orașele erau mici și separate prin loading screens. Motorul: Scimitar (2007), redenumit Anvil la AC II.
- 🖼 Poze: Damasc (AC1), Florența cu Domul (AC2), frontiera (AC3).

### Slide 3 · Apoi: marea deschisă și orașe la scară reală (2013–2015)
- **Black Flag (2013):** o lume făcută mai ales din apă, străbătută cu corabia.
- **Unity (2014):** Paris cu monumente la dimensiunea reală, mulțimi mari, multe interioare.
- **Syndicate (2015):** străzile Londrei sunt prea largi pentru sărituri, așa că apare rope launcher-ul. *Lumea schimbă felul în care te miști.*
- 🔧 **Detaliu tehnic:** PS4/Xbox One (2013) au 8 GB de memorie, de 16× mai mult. Unity (AnvilNext 2.0) o folosește pentru mulțimi și pentru materiale fizic corecte (PBR).
- 🖼 Poze: Caraibe, Paris, Londra.

### Slide 4 · Acum: țări întregi și o întoarcere la oraș (2017–2025)
- **Origins / Odyssey / Valhalla:** regiuni întregi, cu deșerturi, munți, mări și animale sălbatice.
- **Mirage (2023):** înapoi la un singur oraș dens. Lumea nu doar crește, își și schimbă direcția.
- **Shadows (2025):** aceeași hartă în patru anotimpuri (îl prezintă Vorbitorul 3).
- 🔧 **Detaliu tehnic:** world streaming (pseudocod pe slide): harta e împărțită în celule, se încarcă detaliat doar ce e lângă jucător, restul în variante simplificate (LOD). E prezentat ca tehnică generală, nu ca cod Ubisoft.
- 🖼 Poze: Egipt, Bagdad, Japonia.

### Slide 5 · Cât de mult au crescut hărțile
- Graficul, la **scară liniară**: barele primelor jocuri abia se văd, iar asta e chiar ideea.
- Butonul „Redă în ordine” desenează barele an cu an. Îl apăsăm și povestim pe scurt.
- 🔧 **Detaliu tehnic:** un km² de oraș dens are mult mai multe obiecte și triunghiuri decât unul de deșert, deci suprafața nu e totul.
- *Trecerea spre Partea 2:* „O hartă de 100 de ori mai mare nu se poate construi la fel. Cum se face, de fapt?”

---

## Partea 2 · Cum se construiește un oraș (Vorbitor 2)

### Slide 6 · Un oraș se construiește din piese, nu clădire cu clădire
- **Modular kit:** ziduri, ferestre, acoperișuri, balcoane, modelate o singură dată.
- **Instancing:** aceeași piesă e desenată de sute de ori, doar cu altă **matrice de transformare** (translație, rotație, scalare). *Legătura EGC:* exact matricea de modelare `M = T · R · S` din laboratoare.
- **Variație:** alte culori și texturi, ca să nu se vadă că se repetă.
- 🔧 **Detaliu tehnic:** codul OpenGL de pe slide: `M = translate · rotate · scale` (glm) și `glDrawElementsInstanced` pentru 1.000 de clădiri într-un singur apel. Mesajul: mesh-ul stă o dată în VRAM, iar pentru fiecare copie se trimit doar 16 numere (matricea 4×4).
- 🎮 Animația: un cartier văzut de sus, construit din 3 piese. „Construiește alt cartier” îl regenerează. La click pe o clădire se văd translația, rotația și scalarea ei.

### Slide 7 · Orașele se fac de mână, țările se generează procedural
- **De mână:** Notre-Dame din Unity, aproape 2 ani de muncă pentru o singură catedrală.
- **Procedural terrain:** terenul pornește de la un **heightmap** (o imagine în care fiecare pixel e o înălțime), din care se face un mesh de triunghiuri. *Legătura EGC:* o grilă de vârfuri cu înălțimi = un mesh.
- **Procedural placement:** copacii și pietrele se pun automat după pantă, apă și altitudine, apoi artiștii corectează de mână.
- 🔧 **Detaliu tehnic:** cod pentru heightmap → grilă de vertecși și normala prin `cross` (exact ca la laborator). Relieful natural vine din octave de Perlin noise (fBm).
- 🖼 Poze: Notre-Dame (Unity), un peisaj din Egipt (Origins).

### Slide 8 · Cine verifică o hartă atât de mare? Automated testing, noaptea
- Pe o hartă de zeci de km² nimeni nu poate testa totul de mână.
- Noaptea, boți (programe automate) încearcă fiecare scară, margine și tiroliană, iar dimineața echipa vede pe o hartă unde sunt problemele.
- 🔧 **Detaliu tehnic:** pseudocodul unui test pentru scări (teleportează botul, încearcă urcarea, raportează poziția dacă nu ajunge sus). Spuneți „cum ar arăta”: sistemul real a fost prezentat la GDC 2018, dar codul de pe slide e un exemplu.
- 🎮 Animația e o **simulare** (scrie pe ea): apăsăm „Pornește testul” și arătăm cum e parcursă harta.

### Slide 9 · Cum te orientezi într-un oraș fără să te uiți pe hartă
- Urbanistul **Kevin Lynch** (1960): oamenii țin minte un oraș după câteva lucruri simple. Jocurile folosesc aceeași idee.
- **Landmarks (repere):** clădiri înalte, vizibile de oriunde. Când urci pe ele faci „sync” la viewpoint.
- **Districts (cartiere):** fiecare zonă arată diferit (culori, clădiri, oameni).
- **Edges (margini):** ziduri, râuri și faleze care despart zonele.
- 🔧 **Detaliu tehnic:** panorama de pe un viewpoint e o cameră pe un cerc: `lookAt(ochi pe cerc, centru, sus)`, adică view matrix-ul de la curs. Reperele au versiuni simplificate (LOD) desenate până la orizont.
- 🖼 Poze: Florența de pe un viewpoint, două cartiere diferite din Paris, Tamisa în Londra.

### Slide 10 · Pe ce te poți cățăra și de ce
- Pentru noi o fațadă e decor. Pentru joc e un **traseu**.
- **Ledges și handholds:** pervazurile, cornișele și grinzile sunt marcate ca locuri de care personajul se poate prinde.
- **Distanțe calculate:** ferestrele, balcoanele și acoperișurile sunt puse la distanțe pe care personajul le poate sări.
- **Arhitectură ajustată:** clădirile seamănă cu cele reale, dar au mai multe prize, ca urcarea să curgă.
- 🔧 **Detaliu tehnic:** două raycasts: una în față găsește peretele, una în jos verifică dacă deasupra e o suprafață orizontală (`normala.y > 0.7`). Formula ray–plane intersection: `t = (d − N·O) / (N·D)`.
- 🖼 Desenul: o fațadă cu un traseu de cățărare marcat (fără butoane, doar de arătat).
- *Trecerea spre Partea 3:* „Acum avem orașul construit. Ce îl face să pară viu?”

---

## Partea 3 · Cum devine orașul viu (Vorbitor 3)

### Slide 11 · Cum se luminează o lume atât de mare
- *Legătura EGC:* la laborator am calculat **direct lighting** (modelul Phong: ambient, diffuse, specular). Jocurile mari adaugă și **indirect lighting**: lumina reflectată de pereți și sol, adică **global illumination (GI)**, care e foarte scumpă.
- **Baked lighting (Unity, 2014):** GI-ul e calculat dinainte și salvat în **lightmaps**, pentru câteva momente ale zilei.
- **Light probes (Origins, 2017):** harta e prea mare pentru lightmaps, așa că lumina e salvată doar în puncte dintr-o grilă 3D. Obiectele interpolează între ele, deci lumina e mai „moale”.
- **Ray tracing / RTGI (Shadows, 2025):** baking-ul ar fi cerut ~**2 TB și 2 ani**, așa că GI-ul se calculează în timp real.
- 🔧 **Detaliu tehnic:** formula Phong (GLSL). Termenul ambient `ka` e o constantă care „mimează” indirect lighting-ul, iar GI-ul îl înlocuiește.
- 🎮 Animația: camera gotică. Mutăm „Soarele” și schimbăm cele trei moduri. În modul baked, soarele „sare” între câteva momente fixe.

### Slide 12 · De ce baked lighting ocupă atât de mult (nou)
- **Cum funcționează, în 3 pași:**
  1. **Bake:** înainte de lansare, calculatoare dedicate trimit milioane de raze și află câtă lumină indirectă primește fiecare suprafață fixă (ore sau zile de calcul).
  2. **Lightmap:** rezultatul se salvează într-o textură; fiecare texel ține culoarea luminii pe o bucată mică de perete sau de sol.
  3. **Runtime:** shader-ul doar citește lightmap-ul (foarte ieftin). Dar e valabil pentru o singură poziție a soarelui: altă oră sau alt anotimp înseamnă alt set de lightmaps.
- **De ce ocupă atât de mult:** lightmap-ul acoperă *toate* suprafețele: sol, fațade, acoperișuri. Memoria crește cu: suprafața × rezoluția × numărul de momente ale zilei × numărul de anotimpuri. Fiecare dintre ele înmulțește totul.
- 🎮 Calculatorul: arătați întâi Unity (hartă mică, rezoluție mică, un singur moment: câțiva MB), apoi Shadows (125 km², 25 cm, 24 de momente, 4 anotimpuri: **~1,5 TB**, cât ~96 de PS5-uri). E un calcul ilustrativ, cu presupuneri simple: spuneți asta. Cifra oficială e estimarea Ubisoft de ~2 TB și 2 ani (GDC 2025), iar calculul arată de ce e atât de mare.
- 🔧 **Detaliu tehnic:** formula calculului și alternativele: light probes (câteva numere pe punct, spherical harmonics) și RTGI (nu mai salvează nimic dinainte).

### Slide 13 · Lumea nu mai stă pe loc: day/night cycle, vreme, anotimpuri
- **Primele jocuri:** ora și vremea erau în mare parte fixe.
- **AC III (2012):** iarna din frontieră, cu zăpadă adâncă care te încetinește.
- **Shadows (2025):** aceeași hartă în patru anotimpuri: frunze, zăpadă, lacuri înghețate, altă lumină.
- 🔧 **Detaliu tehnic:** snow shader cu `dot(N, up)`: acoperișurile se albesc, pereții nu. Legătura cu slide-urile 11–12: cu anotimpuri, lumina nu mai poate fi baked o singură dată.
- 🖼 Poze: frontiera iarna (AC3), același loc vara și iarna (Shadows).

### Slide 14 · Sute de NPC-uri în piață, dar doar 40 au AI complet
- Fiecare NPC cu AI complet ar bloca jocul, așa că **detaliul depinde de distanță** (LOD aplicat la AI și la modele).
- **Lângă tine:** 40 de NPC-uri cu AI complet. **Puțin mai departe:** 120 de modele high-res. **Restul:** NPC-uri low-res.
- În joc erau până la **10.000** de NPC-uri pe ecran; în simulare slider-ul merge de la 500 la 2.000, ca să se vadă clar.
- 🔧 **Detaliu tehnic:** LOD după distanță (praguri doar ca exemplu) + frustum culling (ce e în afara frustum-ului camerei nu se trimite la GPU).
- 🎮 Animația: mișcăm mouse-ul prin piață și arătăm cercurile aurii care te urmăresc.

### Slide 15 · Cum a ținut Unity 10.000 de NPC-uri pe ecran: AI recycling (nou)
- Sursa: descrierea prezentării de la GDC 2015 (François Cournoyer, „Massive Crowd on Assassin’s Creed Unity: AI Recycling”): un **AI level of detail** cu **40 de AI-uri reale** și **120 de modele high-res**, pentru până la **10.000 de NPC-uri** pe ecran.
- **Simplistic AI brain:** miile de NPC-uri din fundal au un AI foarte simplu, cât să pară vii de departe.
- **Pooling:** AI-urile complete și modelele high-res sunt un pool fix; un NPC low-res care se apropie primește un model și un AI din pool, iar unul rămas în urmă îl eliberează.
- **Swap invizibil:** schimbul low-res ↔ high-res se face fără ca jucătorul să observe, așa că crowd-ul pare persistent.
- 🔧 **Detaliu tehnic:** pseudocod de object pooling. Spuneți clar că e un *exemplu de principiu*: Ubisoft nu a publicat implementarea.

### Slide 16 · Orașul din joc nu e o copie a orașului real
- Orașul e schimbat intenționat, ca să fie recunoscut și plăcut de jucat. Apăsăm pe fiecare card:
  1. **Turla Notre-Dame** apare în 1789, deși atunci nu exista: așa recunoaște toată lumea catedrala.
  2. **Distanțele sunt micșorate**, ca să ajungi repede de la un reper la altul.
  3. **Trenurile din Londra** merg în buclă, ca să poți sări oricând pe unul.

### Slide 17 · 3 idei de reținut
- **1 · Scara:** hărțile au crescut de peste 100 de ori, ceea ce a cerut world streaming și LOD.
- **2 · Construcția:** modular kits, instancing, generare procedurală și automated testing.
- **3 · Lumina și viața:** de la baked lighting la ray tracing, și de la NPC-uri simple la AI recycling.
- 🔧 Rezumatul conceptelor EGC din prezentare.
- Bibliografia e cea de pe `main`, afișată la fel: Harta francizei, Cele cinci elemente Lynch, Semiotică și urbanism, Patrimoniu și educație, Imersiune și simțuri, Industrie și conferințe GDC, Alte surse online.

### Slide 18 · Mulțumim
- Întrebări.

---

## Ce am scos și de ce

Pe baza `sugestiile_mele.md` și `REVIZUIRE.md`:

| Slide vechi | Ce am făcut | De ce |
|---|---|---|
| 9 · Anotimpurile (peisajul desenat) | Înlocuit cu slide-ul 12, cu poze reale | Desenul era un clișeu inventat, iar butonul „lumină realistă” induce în eroare. |
| 11 · Lynch (harta cu ceață) | Rescris simplu, cu poze, fără animație | Animația nu ajuta, ideea se spune mai clar în cuvinte. |
| 12 · Fațada (cu click pe părți) | Rescris ca slide 10, desen fix | Prea complicat. Avea și un arc butant pe un palat renascentist (greșit). |
| 13 · Orașul pe verticală | Scos | Nu se înțelegea, iar numele de cercetători erau lipite forțat. |
| 14 · Sunetul | Scos | Nu ține de tema „cum se construiește orașul”. Era și foarte vag. |
| 15 · Orașul și frontiera | Scos (frontiera apare la slide-urile 2 și 12) | „Grila” orașului colonial era greșită istoric. |
| 16 · Straturi de istorie | Scos | Neclar. Legătura Stonehenge–mitologia nordică era greșită. |
| 17 · Atașamentul | Scos | Neclar, plus un citat fără sursă. |
| 19 · Discovery Tour | Scos | Nu era clar la ce ne ajută pentru temă. |
| 5 · Graficul | Păstrat, doar scară liniară, fără textele de la hover, fără linia de „4 km²” | Cerut în sugestii. Pragul de 4 km² nu avea sursă sigură. |
| 7 · Teste de noapte | Păstrat, scris clar, marcat „simulare” | Scoase „baliste” și „cufere” din lista de probleme. |
| 8 · Lumina | Păstrat, legat de EGC | Scoase barele cu cifre fără sursă. |
| 10 · Mulțimea | Păstrat, explicat pas cu pas | Animația e bună. Acum explică LOD-ul. |
| 18 · Minciuni utile | Păstrat, 3 carduri clare | Scos cardul greșit cu Merer și Sfinxul. |
| — | **Nou:** slide 6, piese și instanțiere | Legătura cea mai directă cu EGC (matrici de transformare). |

---

## Poze de adăugat

Puneți fiecare poză în folderul `img/` exact cu numele de mai jos și apare singură pe slide (în locul chenarului „Poză de adăugat”). Recomandat: capturi proprii sau imagini oficiale, format 16:9, `.jpg`.

| Slide | Fișier | Ce să arate |
|---|---|---|
| 2 | `img/02-damasc-ac1.jpg` | Damasc din AC1, văzut de sus |
| 2 | `img/02-florenta-ac2.jpg` | Florența din AC2, cu Domul |
| 2 | `img/02-frontiera-ac3.jpg` | Frontiera din AC3: pădure, stânci |
| 3 | `img/03-caraibe-black-flag.jpg` | Corabia între insule (Black Flag) |
| 3 | `img/03-paris-unity.jpg` | Paris cu mulțime (Unity) |
| 3 | `img/03-londra-syndicate.jpg` | Londra, rope launcher-ul (Syndicate) |
| 4 | `img/04-egipt-origins.jpg` | Peisaj larg din Egipt (Origins) |
| 4 | `img/04-bagdad-mirage.jpg` | Străzile dense din Bagdad (Mirage) |
| 4 | `img/04-japonia-shadows.jpg` | Peisaj din Japonia (Shadows) |
| 7 | `img/07-notre-dame-unity.jpg` | Notre-Dame din Unity, de aproape |
| 7 | `img/07-teren-origins.jpg` | Teren larg, cu dune și vegetație (Origins) |
| 9 | `img/09-reper-florenta.jpg` | Florența văzută de pe un viewpoint |
| 9 | `img/09-cartiere-paris.jpg` | Două cartiere care arată diferit (Unity) |
| 9 | `img/09-tamisa-londra.jpg` | Tamisa ca margine între zone (Syndicate) |
| 13 | `img/12-iarna-ac3.jpg` | Frontiera iarna, cu zăpadă (AC3) |
| 13 | `img/12-anotimpuri-shadows.jpg` | Același loc vara și iarna (Shadows) |

---

## De verificat înainte de prezentare

- **Suprafețele hărților** de pe graficul de la slide 5: luați fiecare cifră dintr-o sursă (de preferat oficială) și folosiți peste tot aceeași măsură. Roma (Brotherhood) și frontiera (AC III) au acum exact aceeași valoare, 1,41 km², ceea ce pare o greșeală.
- ✅ **Crowd-ul din Unity** (slide-urile 14–15): confirmat din descrierea oficială a prezentării GDC 2015 (Cournoyer): 40 de AI-uri reale, 120 de modele high-res, 10.000 de NPC-uri pe ecran, pooling low-res ↔ high-res.
- **Calculul de pe slide-ul 12** e ilustrativ (presupuneri simple). Doar „2 TB și 2 ani” e cifra Ubisoft.
- **„2 TB și 2 ani”** (slide-urile 11–12): citat din GDC 2025 / SIGGRAPH 2025. Verificați formularea exactă.
- **Notre-Dame, „aproape 2 ani”** (slide 7): din interviul cu Caroline Miousse.
- **Bibliografia** (slide 17): deschideți fiecare link și verificați că spune ce scrie la noi.
- **Detaliile tehnice noi:** memoria consolelor (512 MB / 8 GB), redenumirea Scimitar → Anvil la AC II, AnvilNext 2.0 și PBR în Unity. Toate sunt fapte cunoscute, dar merită o sursă în bibliografie (de exemplu pagina Wikipedia despre Ubisoft Anvil).
- **Primele jocuri fără day/night cycle** (slide 13): verificați ce joc a introdus prima dată ora și vremea dinamice.

---

## Sfaturi pentru prezentare

- **Exersați animațiile:** pe proiector informația nu apare dacă nu apăsați. Slide-urile cu butoane sunt 5, 6, 8, 11, 12, 14 și 16.
- Navigarea: săgeți sau Space. `index.html#11` deschide direct slide-ul 11 (util dacă preia altcineva).
- Fiecare vorbitor anunță trecerea spre următorul (frazele de trecere sunt mai sus).
