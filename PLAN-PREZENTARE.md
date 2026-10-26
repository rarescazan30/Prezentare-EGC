# Planul prezentării

**Tema:** Evoluția environment-ului în franciza Assassin’s Creed
**Unghiul nostru:** cum își construiesc jocurile orașele, văzut ca dezvoltatori de jocuri, cu legături ușoare la ce am făcut la **Elemente de Grafică pe Calculator (EGC)**.
**Durată:** aproximativ 15–18 minute, adică 5–6 minute de vorbitor.
**Slide-uri:** 16, împărțite în 3 părți.

Firul roșu, într-o frază: *lumile din Assassin’s Creed au crescut de la câteva orașe mici la țări întregi, iar ca să poată face asta, dezvoltatorii au trebuit să schimbe felul în care construiesc, verifică și desenează orașele.*

Fiecare parte răspunde la o singură întrebare:

| Partea | Vorbitor | Întrebarea | Slide-uri |
|---|---|---|---|
| 1 | Vorbitor 1 | **Ce s-a schimbat?** Cum au crescut lumile în aproape 20 de ani. | 1–5 |
| 2 | Vorbitor 2 | **Cum se construiește un oraș?** Piese, reguli, teste, orientare, cățărare. | 6–10 |
| 3 | Vorbitor 3 | **Cum devine orașul viu?** Lumină, anotimpuri, oameni și „minciunile” necesare. | 11–16 |

Pe fiecare slide sunt scrise **1–3 idei principale**: exact ce spune vorbitorul. Textul complet e în fișierele din `content/`, iar locurile pentru poze sunt marcate pe slide cu „Poză de adăugat”.

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
- 🖼 Poze: Damasc (AC1), Florența cu Domul (AC2), frontiera (AC3).

### Slide 3 · Apoi: marea deschisă și orașe la scară reală (2013–2015)
- **Black Flag (2013):** o lume făcută mai ales din apă, străbătută cu corabia.
- **Unity (2014):** Paris cu monumente la dimensiunea reală, mulțimi mari, multe interioare.
- **Syndicate (2015):** străzile Londrei sunt prea largi pentru sărituri, așa că apare cârligul cu frânghie. *Lumea schimbă felul în care te miști.*
- 🖼 Poze: Caraibe, Paris, Londra.

### Slide 4 · Acum: țări întregi și o întoarcere la oraș (2017–2025)
- **Origins / Odyssey / Valhalla:** regiuni întregi, cu deșerturi, munți, mări și animale sălbatice.
- **Mirage (2023):** înapoi la un singur oraș dens. Lumea nu doar crește, își și schimbă direcția.
- **Shadows (2025):** aceeași hartă în patru anotimpuri (îl prezintă Vorbitorul 3).
- 🖼 Poze: Egipt, Bagdad, Japonia.

### Slide 5 · Cât de mult au crescut hărțile
- Graficul, la **scară liniară**: barele primelor jocuri abia se văd, iar asta e chiar ideea.
- Butonul „Redă în ordine” desenează barele an cu an. Îl apăsăm și povestim pe scurt.
- *Trecerea spre Partea 2:* „O hartă de 100 de ori mai mare nu se poate construi la fel. Cum se face, de fapt?”

---

## Partea 2 · Cum se construiește un oraș (Vorbitor 2)

### Slide 6 · Un oraș se construiește din piese, nu clădire cu clădire
- **Kit de piese:** ziduri, ferestre, acoperișuri, balcoane, modelate o singură dată.
- **Instanțiere:** aceeași piesă e desenată de sute de ori, doar cu altă **matrice de transformare** (translație, rotație, scalare). *Legătura EGC:* exact matricea de modelare `M = T · R · S` din laboratoare.
- **Variație:** alte culori și texturi, ca să nu se vadă că se repetă.
- 🎮 Animația: un cartier văzut de sus, construit din 3 piese. „Construiește alt cartier” îl regenerează. La click pe o clădire se văd translația, rotația și scalarea ei.

### Slide 7 · Orașele se fac de mână, țările se generează după reguli
- **De mână:** Notre-Dame din Unity, aproape 2 ani de muncă pentru o singură catedrală.
- **Teren generat:** terenul pornește de la o **hartă de înălțimi** (o imagine în care fiecare pixel e o înălțime), din care se face o rețea de triunghiuri. *Legătura EGC:* o grilă de vârfuri cu înălțimi = un mesh.
- **Reguli pentru vegetație:** copacii și pietrele se pun automat după pantă, apă și altitudine, apoi artiștii corectează de mână.
- 🖼 Poze: Notre-Dame (Unity), un peisaj din Egipt (Origins).

### Slide 8 · Cine verifică o hartă atât de mare? Programe care rulează noaptea
- Pe o hartă de zeci de km² nimeni nu poate testa totul de mână.
- Noaptea, programe automate încearcă fiecare scară, margine și tiroliană, iar dimineața echipa vede pe o hartă unde sunt problemele.
- 🎮 Animația e o **simulare** (scrie pe ea): apăsăm „Pornește testul” și arătăm cum e parcursă harta.

### Slide 9 · Cum te orientezi într-un oraș fără să te uiți pe hartă
- Urbanistul **Kevin Lynch** (1960): oamenii țin minte un oraș după câteva lucruri simple. Jocurile folosesc aceeași idee.
- **Repere:** clădiri înalte, vizibile de oriunde. Când urci pe ele, se „sincronizează” harta.
- **Cartiere:** fiecare zonă arată diferit (culori, clădiri, oameni).
- **Margini:** ziduri, râuri și faleze care despart zonele.
- 🖼 Poze: Florența de pe un punct de sincronizare, două cartiere diferite din Paris, Tamisa în Londra.

### Slide 10 · Pe ce te poți cățăra și de ce
- Pentru noi o fațadă e decor. Pentru joc e un **traseu**.
- **Prize de prindere:** pervazurile, cornișele și grinzile sunt marcate ca locuri de care personajul se poate prinde.
- **Distanțe calculate:** ferestrele, balcoanele și acoperișurile sunt puse la distanțe pe care personajul le poate sări.
- **Arhitectură ajustată:** clădirile seamănă cu cele reale, dar au mai multe prize, ca urcarea să curgă.
- 🖼 Desenul: o fațadă cu un traseu de cățărare marcat (fără butoane, doar de arătat).
- *Trecerea spre Partea 3:* „Acum avem orașul construit. Ce îl face să pară viu?”

---

## Partea 3 · Cum devine orașul viu (Vorbitor 3)

### Slide 11 · Cum se luminează o lume atât de mare
- *Legătura EGC:* la laborator am calculat **lumina directă** (modelul Phong: ambientală, difuză, speculară). Jocurile mari adaugă și **lumina reflectată** de pereți și sol (iluminare globală), care e foarte scumpă.
- **Unity (2014):** lumina reflectată e calculată dinainte („coaptă”) pentru câteva momente ale zilei.
- **Origins (2017):** harta e prea mare, așa că lumina e salvată doar în puncte din spațiu, cu mici erori.
- **Shadows (2025):** calculul dinainte ar fi cerut aproximativ **2 TB și 2 ani**, așa că lumina se calculează pe loc (ray tracing).
- 🎮 Animația: camera gotică. Mutăm „Soarele” și schimbăm cele trei moduri.

### Slide 12 · Lumea nu mai stă pe loc: zi, noapte, vreme, anotimpuri
- **Primele jocuri:** ora și vremea erau în mare parte fixe.
- **AC III (2012):** iarna din frontieră, cu zăpadă adâncă care te încetinește.
- **Shadows (2025):** aceeași hartă în patru anotimpuri: frunze, zăpadă, lacuri înghețate, altă lumină.
- 🖼 Poze: frontiera iarna (AC3), același loc vara și iarna (Shadows).

### Slide 13 · Mii de oameni pe stradă, dar doar câteva zeci „gândesc”
- Fiecare om cu inteligență proprie ar bloca jocul, așa că **detaliul depinde de distanță**.
- **Aproape de tine:** câteva zeci de personaje cu comportament complet.
- **Mai departe:** desenate în detaliu, dar fără „creier” complet. **Restul:** figuranți simpli.
- Când te miști, un om de departe devine unul de aproape („reciclare”).
- *Legătura EGC:* e aceeași idee ca **nivelul de detaliu (LOD)** pentru obiectele 3D.
- 🎮 Animația: mișcăm mouse-ul prin piață și arătăm cercurile aurii care te urmăresc.

### Slide 14 · Orașul din joc nu e o copie a orașului real
- Orașul e schimbat intenționat, ca să fie recunoscut și plăcut de jucat. Apăsăm pe fiecare card:
  1. **Turla Notre-Dame** apare în 1789, deși atunci nu exista: așa recunoaște toată lumea catedrala.
  2. **Distanțele sunt micșorate**, ca să ajungi repede de la un reper la altul.
  3. **Trenurile din Londra** merg în buclă, ca să poți sări oricând pe unul.

### Slide 15 · Ce am învățat
- O idee din fiecare parte (sunt scrise pe cele 3 carduri), apoi bibliografia, dacă întreabă cineva.

### Slide 16 · Mulțumim
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
| 3 | `img/03-londra-syndicate.jpg` | Londra, cârligul cu frânghie (Syndicate) |
| 4 | `img/04-egipt-origins.jpg` | Peisaj larg din Egipt (Origins) |
| 4 | `img/04-bagdad-mirage.jpg` | Străzile dense din Bagdad (Mirage) |
| 4 | `img/04-japonia-shadows.jpg` | Peisaj din Japonia (Shadows) |
| 7 | `img/07-notre-dame-unity.jpg` | Notre-Dame din Unity, de aproape |
| 7 | `img/07-teren-origins.jpg` | Teren larg, cu dune și vegetație (Origins) |
| 9 | `img/09-reper-florenta.jpg` | Florența văzută de pe un punct de sincronizare |
| 9 | `img/09-cartiere-paris.jpg` | Două cartiere care arată diferit (Unity) |
| 9 | `img/09-tamisa-londra.jpg` | Tamisa ca margine între zone (Syndicate) |
| 12 | `img/12-iarna-ac3.jpg` | Frontiera iarna, cu zăpadă (AC3) |
| 12 | `img/12-anotimpuri-shadows.jpg` | Același loc vara și iarna (Shadows) |

---

## De verificat înainte de prezentare

- **Suprafețele hărților** de pe graficul de la slide 5: luați fiecare cifră dintr-o sursă (de preferat oficială) și folosiți peste tot aceeași măsură. Roma (Brotherhood) și frontiera (AC III) au acum exact aceeași valoare, 1,41 km², ceea ce pare o greșeală.
- **Mulțimea din Unity** (slide 13): câte personaje „gândesc” și câte sunt detaliate, din prezentarea GDC 2015 a lui François Cournoyer.
- **„2 TB și 2 ani”** (slide 11): citat din GDC 2025 / SIGGRAPH 2025. Verificați formularea exactă.
- **Notre-Dame, „aproape 2 ani”** (slide 7): din interviul cu Caroline Miousse.
- **Bibliografia** (slide 15): deschideți fiecare link și verificați că spune ce scrie la noi.
- **Primele jocuri fără ciclu zi–noapte** (slide 12): verificați ce joc a introdus prima dată ora și vremea dinamice.

---

## Sfaturi pentru prezentare

- **Exersați animațiile:** pe proiector informația nu apare dacă nu apăsați. Slide-urile cu butoane sunt 5, 6, 8, 11, 13 și 14.
- Navigarea: săgeți sau Space. `index.html#11` deschide direct slide-ul 11 (util dacă preia altcineva).
- Fiecare vorbitor anunță trecerea spre următorul (frazele de trecere sunt mai sus).
