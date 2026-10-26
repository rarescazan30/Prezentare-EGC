# Revizuire: ce trebuie schimbat în prezentare

**Tema:** Evoluția environment-ului în franciza de jocuri Assassin’s Creed

> **Stare (octombrie 2026):** prezentarea a fost restructurată pe baza acestei revizuiri și a `sugestiile_mele.md`. Greșelile de mai jos au fost corectate, iar slide-urile neclare au fost rescrise sau scoase. Ce s-a schimbat e în tabelul „Ce am scos și de ce” din `PLAN-PREZENTARE.md`, iar ce mai trebuie verificat e la „De verificat”. Numerele de slide de mai jos sunt cele **vechi** (21 de slide-uri).

Am trecut prin toate cele 21 de slide-uri: textul, cifrele, sursele și desenele animate. Mai jos sunt problemele găsite, întâi cele generale, apoi slide cu slide. La fiecare slide scrie și fișierul în care se face modificarea.

Ce înseamnă etichetele:

- **[Greșit]**: informația e falsă sau se contrazice cu altceva din prezentare.
- **[De verificat]**: poate fi adevărat, dar nu e sigur și nu are sursă clară. Trebuie căutat înainte de prezentare.
- **[AI slop]**: text care sună „deștept”, dar e vag, umflat sau lipit forțat de un nume de cercetător.
- **[Grafică]**: animația sau desenul nu arată ce spune textul, sau arată ceva fără sens.
- **[Neclar]**: publicul nu înțelege ce vrea să spună slide-ul.

---

## 1. Probleme generale

### Titlul nu e tema
- **[Neclar]** Prezentarea se numește „Evoluția spațială și imersiunea în Assassin’s Creed”, iar tema voastră e „Evoluția environment-ului”. Ar trebui să se vadă tema chiar în titlu. Propunere: *„Evoluția lumii (environment-ului) în Assassin’s Creed, 2007–2025”*.
- Bara de sus scrie „Animus OS · Cercetare Spațială & Semiotică”. „Semiotică” sperie publicul și nu e tema. Propunere: „Animus OS · Evoluția lumilor din Assassin’s Creed”. Se schimbă în `index.html`.

### Prea multă tehnică, prea puțin „environment”
- **[Neclar]** Aproape jumătate din slide-uri (5–10) sunt despre cum se construiește și se randează harta: gigabytes, teste automate, lumină precalculată. Sunt interesante, dar despre *cum arată și cum se simte lumea* (natură, vreme, oraș, oameni, animale) se vorbește puțin.
- **Lipsesc subiecte importante pentru tema voastră:**
  - **Natura și animalele.** Din Origins încoace există ecosisteme: animale sălbatice, prădători, vânătoare. Asta e o evoluție mare a environment-ului.
  - **Vremea și anotimpurile au apărut mai devreme decât Shadows.** Assassin’s Creed III (2012) avea deja iarnă cu zăpadă adâncă în frontieră, care schimba felul în care te miști. Shadows e evoluția asta dusă mai departe. Asta ar face un fir frumos: AC III → Shadows.
  - **Ciclul zi–noapte:** de la lumea „înghețată” din primele jocuri la ciclul complet din jocurile noi.
  - **Uneltele de mișcare care s-au schimbat odată cu lumea:** hookblade (Revelations), corabia (Black Flag), cârligul (Syndicate), calul și vulturul care înlocuiește turnurile de sincronizare (Origins+).
  - **Interioarele:** Unity a fost primul cu multe clădiri în care intri. E menționat doar într-o frază.
- **Nu există nicio imagine reală din jocuri.** Toate desenele sunt simulări făcute de mână (blocuri, puncte, cercuri). Pentru o temă despre environment, câteva capturi reale (Damasc 2007 lângă Bagdad 2023, Londra, Egiptul, Japonia iarna și vara) ar explica mai mult decât orice animație. Unde păstrați simulările, scrieți pe ele „simulare”, ca publicul să nu creadă că sunt din joc.

### Cifrele de suprafață sunt amestecate
- **[Greșit / Neclar]** Se compară lucruri diferite: uneori doar uscatul (Odyssey 130), alteori uscat plus mare (Black Flag 235, Odyssey 256), alteori un „nucleu” (Black Flag ~120), alteori nu se știe (Rogue 70, „N/A” la uscat). Pe slide-ul 1 apare „0,13 → 256 km²”, adică uscatul unui oraș comparat cu o hartă care e mai ales apă.
  - Propunere: alegeți **o singură măsură** (de exemplu doar uscatul jucabil) și scrieți-o clar o dată, pe slide-ul 5.
- **[De verificat]** Toate cifrele de km² trebuie verificate și citate. Unele arată suspect: Roma (Brotherhood) și Frontiera (AC III) au **exact** aceeași valoare, 1,41 km², ceea ce pare o greșeală de copiere.
- Aceleași cifre se repetă de multe ori (0,13 / 1,41 / 2,40 / 3,70 / 80 / 256 apar pe slide-urile 1, 2, 3, 4, 5 și 6). Slide-urile 2–4 și slide-ul 5 spun practic același lucru de două ori.

### Numele de cercetători puse ca titluri
- **[AI slop]** Multe slide-uri au deasupra titlului un nume și un an („Gabriele Aroni · 2022”, „Ailbhe Warde-Brown · 2021”, „Erik Champion · Catros și Leblanc”). Publicul nu știe cine sunt, iar slide-ul nu explică ce a spus omul respectiv. Ori explicați într-o frază ce a arătat cercetătorul, ori mutați numele în bibliografie și puneți deasupra titlului jocul sau ideea.

### Anul mare din colț nu are o regulă
- **[Neclar]** Anul șters din colț înseamnă uneori anul jocului (2014 la Unity), alteori anul unui articol (2021 la sunet, 2008 la atașament) sau anul unei cărți (1960 la Lynch), iar pe slide-ul 6 e 2014 deși vorbește și de Origins (2017). Alegeți o regulă, de exemplu „anul jocului despre care e slide-ul”, și aplicați-o peste tot. Se schimbă la `an:` în fiecare fișier din `content/`.

### Sursele
- **[AI slop / De verificat]** Bibliografia arată ca un export dintr-un instrument de cercetare automată: numerotarea sare (1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13…), unele „surse” sunt grupuri vagi fără autor („Studii de dramaturgie spațială (2021–2026)”, „Studiu imersiune temporală (2026)”, „Studii de receptare postcolonială (2019–2026)”), iar rezumatele sunt pline de termeni umflați („arhitectură instrucțională receptivă”, „semioză spațiotemporală”, „ochiul vicariant al lui Boorstin”).
  - Fiecare link trebuie deschis și verificat că există și spune ce scrie la noi.
  - Sursele fără autor clar se scot sau se înlocuiesc cu articolul real.
  - Unele surse sunt bloguri (Medium) sau un document încărcat pe Scribd. Pentru o prezentare la facultate sunt surse slabe: înlocuiți-le cu sursa originală (GDC, articol, interviu).
  - Rezumatele să fie scrise pe înțelesul colegilor.

### Ce depinde de mouse
- Pe mai multe slide-uri informația apare doar dacă treci cu mouse-ul (slide-urile 5, 11, 12). La proiector, cel care prezintă trebuie să facă asta, altfel publicul nu vede nimic. Fie exersați momentul, fie arătați informația direct.
- Emoji-urile din butoane (🌸 ☀️ 🍁 ❄️ 👁) nu se potrivesc cu stilul restului prezentării. Ori le scoateți, ori le înlocuiți cu iconițe simple.

---

## 2. Slide cu slide

### Slide 1 · Introducere
*Fișier: `content/01-introducere.js`*
- **[Neclar]** Titlul nu e tema (vezi mai sus).
- **[Greșit / Neclar]** „0,13 → 256 km²” compară uscatul unui oraș cu o hartă care e mai mult mare. Mai cinstit: „0,13 km² (Damasc, 2007) → 130 km² de uscat (Grecia, 2018)”. Aceeași cifră apare și scrisă pe desen („ANIMUS HELIX · …”). Dacă schimbați una, schimbați-o și pe cealaltă.
- **[Grafică]** Desenul din dreapta (o spirală ADN cu emblema AC) e frumos și se potrivește cu ideea de Animus, dar nu spune nimic despre environment. Merge ca decor. Altfel, pe primul slide ar avea mai mult impact o comparație de imagini: Damasc 2007 lângă Japonia 2025.
- Cele trei carduri (Tehnologie / Arhitectură / Istorie) nu se potrivesc cu tema. Ar merge mai bine ceva de tipul: *„Cât de mare”, „Cât de vie”, „Cât de adevărată”*.

### Slide 2 · Etapa 1 (2007–2012)
*Fișier: `content/02-etapa-1.js`*
- **[Neclar]** Cardul „Pe acoperișuri / Fără sol” amestecă două lucruri: o idee (orașul se traversează pe acoperișuri) și o cifră pusă la întâmplare („de exemplu Constantinopol, 0,94 km²”). Cifra nu are ce căuta acolo.
- **[De verificat]** „1,41 km²” pentru frontiera din AC III e exact cifra Romei din Brotherhood (vezi problema generală).
- **Lipsește:** AC III a adus iarna și zăpada, care schimbă mișcarea. E un moment important pentru evoluția environment-ului.

### Slide 3 · Etapa 2 (2013–2015)
*Fișier: `content/03-etapa-2.js`*
- **[Neclar]** „235 km²” la Black Flag e mai ales apă. Spuneți asta explicit.
- **[De verificat]** „Parisul la scară reală”: Ubisoft a vorbit de clădiri și monumente la scară 1:1, nu de tot orașul. Formulați atent: „monumente la scară reală, într-un Paris comprimat”.
- Etapa 2014–2015 lasă pe dinafară Rogue. Ori îl menționați, ori nu-l puneți nici pe grafic.

### Slide 4 · Etapa 3 (2017–2025)
*Fișier: `content/04-etapa-3.js`*
- **[Neclar]** „80 – 256 km²” amestecă iar uscat (Egipt 80) cu total (Grecia 256).
- **[De verificat]** Shadows „80 / 125 km²”: căutați cifra oficială.
- Mirage primește o singură frază, deși „întoarcerea la orașul dens” e chiar un argument bun pentru tema voastră (lumea nu doar crește, se și schimbă direcția).
- **Lipsește:** natura vie (animale, vânătoare, ecosisteme) apare la Origins/Odyssey/Valhalla. E esențială pentru „environment”.

### Slide 5 · Cât au crescut hărțile (graficul)
*Fișier: `content/05-cat-au-crescut-hartile.js`*
- **[Greșit / Neclar]** Barele folosesc măsuri diferite (vezi problema generală). Black Flag apare cu 120 („nucleu”), Odyssey cu 130 (uscat), Rogue cu 70 (nu se știe ce).
- **[Grafică]** Bara lui Rogue e hașurată, dar nicăieri nu scrie de ce. Ori explicați (de exemplu „mai ales apă”), ori scoateți hașura.
- **[Neclar]** Valhalla apare doar cu Anglia (94 km²). Norvegia (22 km²) lipsește din grafic, deși e în tabel.
- **[De verificat]** „Linia roșie: 4 km², limita până la care o hartă se mai poate construi manual.” Pragul de 4 km² e prezentat ca un fapt și pus pe toate barele. Trebuie găsit exact unde spune asta Ubisoft (pare să vină din prezentarea GDC despre Origins). Dacă nu se găsește, scoateți linia sau scrieți „aproximativ”.
- Scara logaritmică e corectă tehnic, dar la proiector publicul o citește greșit (barele par apropiate). Porniți graficul pe scara liniară și explicați apoi de ce trecem la logaritmică.

### Slide 6 · Manual sau automat
*Fișier: `content/06-manual-sau-automat.js`*
- **[Greșit / Neclar]** „4 → 80 km²”: niciun joc nu avea 4 km². E pragul de pe slide-ul 5, nu o hartă reală. Comparați jocuri reale, de exemplu Syndicate 3,70 → Origins 80.
- **[De verificat]** „≈ 5.000 ore” și „doi ani” pentru Notre-Dame: cifra cu ore trebuie citată exact (în presă apare de obicei „aproape doi ani”).
- **[De verificat]** „programe în C# verifică rezultatul”: detaliul cu limbajul C# nu ajută publicul și trebuie verificat. Mai simplu: „programe automate verifică rezultatul”.
- Anul din colț e 2014, dar slide-ul vorbește și de Origins (2017).

### Slide 7 · Teste de noapte
*Fișier: `content/07-teste-de-noapte.js` (desenul: `js/widgets/07-teste-de-noapte.js`)*
- **[Greșit]** Lista de „probleme găsite” conține „baliste” și „cufere”. Acestea sunt obiecte din joc, nu probleme. La final apare „Rezultat: 3 baliste · 5 cufere…”, ceea ce nu are sens. Ori „baliste neplasate corect” / „cufere inaccesibile”, ori scoateți-le.
- **[Grafică]** Rezultatul se schimbă la fiecare apăsare (numerele sunt aleatoare), iar fiecare problemă trage o linie roșie verticală până sus, fără vreun înțeles. Publicul poate crede că sunt date reale. Scrieți pe desen „simulare”.
- **[Grafică]** Harta din desen e un zgomot albastru generic, nu Egiptul.
- **[De verificat]** Numele „Atlas” pentru unealta Ubisoft trebuie confirmat din prezentarea GDC citată.
- **[Neclar]** Slide-ul e despre un proces intern de dezvoltare, nu despre environment-ul pe care îl vede jucătorul. Merită păstrat doar dacă explicați de ce contează pentru jucător (de exemplu „de asta pe o hartă uriașă nu rămâi blocat într-o stâncă”).

### Slide 8 · Lumina
*Fișier: `content/08-lumina.js` (desenul: `js/widgets/08-lumina.js`)*
- **[De verificat]** „Unity: 4 momente fixe ale zilei. Arată bine, dar nu se mai schimbă în timp ce joci.” Unity avea totuși trecere de la zi la noapte, iar lumina se schimba între aceste momente. Formularea „nu se mai schimbă” e prea tare. Verificați în analiza Digital Foundry citată.
- **[De verificat]** Cifrele „450 GB / trei luni → 9 GB” (Origins) și „≈12 GB” (Unity) nu au sursă clară. „2 TB și doi ani” (Shadows) e citată din GDC 2025 și pare în regulă.
- **[Grafică]** La modul 3 („Timp real”) bara arată o valoare mică, deși textul spune „fără date calculate în avans”, adică zero. Bara ar trebui să lipsească sau să fie goală.
- **[Grafică]** În modul 2 („Puncte rare”) dispar complet reflexiile colorate de pe pereți. Asta sugerează că metoda nu face deloc așa ceva, ceea ce e o simplificare prea mare. Ori o spuneți explicit, ori lăsați reflexiile mai slabe, nu absente.
- Camera desenată (o sală gotică cu fereastră) e o idee bună și se înțelege. Ar fi și mai clar cu trei capturi reale: Unity, Origins, Shadows.

### Slide 9 · Anotimpurile (Shadows)
*Fișier: `content/09-anotimpurile.js` (desenul: `js/widgets/09-anotimpurile.js`)*
- **[Grafică]** Butonul „Lumină realistă: oprită” doar întunecă imaginea și scoate razele de soare. Nu arată diferența reală dintre lumina din timp real și o lumină mai simplă. Publicul poate înțelege că fără „lumină realistă” jocul ar fi doar mai întunecat. Ori explicați pe slide că e o simplificare, ori scoateți butonul.
- **[Grafică]** Barele „Cât de dese sunt frunzele” și „Cât de mult reflectă solul lumina” au valori inventate (de exemplu 88% iarna) fără unitate. Arată „științific”, dar nu înseamnă nimic. Scoateți-le sau puneți-le în cuvinte („iarna zăpada reflectă mult mai multă lumină”).
- **[Grafică]** Peisajul pune laolaltă muntele Fuji, un castel, o poartă torii în lac și un felinar de piatră: o carte poștală cu toate clișeele, nu o regiune reală din joc. E OK ca decor, dar o captură reală din joc ar fi mai convingătoare.
- **Idee:** legați slide-ul de AC III (iarnă/vară, 2012), ca să se vadă evoluția, nu doar rezultatul final.

### Slide 10 · Mulțimea din Paris (Unity)
*Fișier: `content/10-multimea-din-paris.js` (desenul: `js/widgets/10-multimea-din-paris.js`)*
- **[De verificat]** „12.000 de oameni”: în materialele de promovare pentru Unity apare des cifra de „până la 5.000” de personaje. Verificați în prezentarea GDC citată (Cournoyer, 2015) și folosiți cifra de acolo, cu sursă.
- **[Greșit]** Cifra de start „11.840 figuranți simpli” nu se potrivește cu ce calculează desenul imediat după (12.000 − 120 = 11.880). Pentru o fracțiune de secundă apar două cifre diferite.
- Desenul (punctele din piață, cercurile aurii în jurul tău, „reciclarea”) e unul dintre cele mai reușite. Arată exact ideea. Merită păstrat.

### Slide 11 · Orientarea în oraș (Kevin Lynch)
*Fișier: `content/11-orientarea-in-oras.js`*
- **[Greșit]** „Arhitectul Kevin Lynch”: Lynch era **urbanist** (planificare urbană), nu arhitect.
- **[Greșit]** „Trece cu mouse-ul…” trebuie să fie „**Treci** cu mouse-ul…”.
- **[Neclar]** Pe slide elementul se numește „Cartiere”, iar în bibliografie „Districte”. Folosiți același cuvânt.
- Ideea e bună și se leagă direct de environment (cum e gândit orașul ca să te orientezi). Ar ajuta un exemplu concret din joc pentru fiecare element (de exemplu „Margini: zidurile Florenței în AC II”).
- **[Grafică]** Harta e abstractă, iar numele de cartiere („Gară”, „Zonă industrială”) nu sunt dintr-un oraș AC anume. O hartă reală (Florența sau Londra) cu cele cinci elemente marcate ar fi mult mai clară.

### Slide 12 · Fațada
*Fișier: `content/12-fatada.js` (desenul: în `js/slides.js`, blocul SLIDE 12)*
- **[Greșit]** Pe un palat renascentist din Florența e desenat un **arc butant**. Arcurile butante sunt specifice catedralelor gotice, nu palatelor renascentiste (chiar textul spune „ca la catedrale”). Scoateți-l sau schimbați desenul într-o catedrală.
- **[Greșit / Grafică]** Butonul „Vederea Vulturului” arată un traseu de cățărare pe fațadă. În joc, Vederea Vulturului evidențiază **ținte, inamici și obiecte**, nu drumuri de escaladare. Redenumiți butonul („Arată traseul de cățărare”) sau schimbați ce arată.
- **[AI slop]** „Gabriele Aroni · 2022” stă deasupra titlului fără să se spună ce a arătat. Ideea („fiecare element arată ca în realitate și e și un loc de prindere”) e de fapt bună și ușor de spus simplu.
- Interacțiunea (apeși pe o parte a clădirii și vezi „în istorie” și „în joc”) e foarte potrivită pentru temă. Merită păstrată.

### Slide 13 · Orașul pe verticală
*Fișier: `content/13-orasul-pe-verticala.js`*
- **[AI slop]** Fiecare nivel e lipit de un cercetător (Orizontul · Lynch, Fațadele · Aroni, Piețele · Bergeron, Strada · Champion). Legăturile sunt forțate și nu spun nimic publicului. Scoateți numele și lăsați doar ce se schimbă la fiecare nivel.
- **[Greșit]** „Piețele sunt făcute circular, ca să poți intra pe oricare parte (Bergeron).” Metoda „360” a lui Philippe Bergeron înseamnă că o **misiune** poate fi abordată din orice direcție, nu că piețele sunt rotunde.
- **[Greșit]** „Pașii sună pe țigle” la nivelul fațadelor: țiglele sunt pe acoperiș, nu pe fațadă.
- **[Grafică]** Linia roșie punctată care coboară din turlă nu e explicată (probabil un Salt al Credinței). Ori o explicați, ori o scoateți.
- **[Grafică]** „Ascultă sunetul” redă doar zgomot generat (un fâșâit pentru vânt și unul pentru stradă). Pe boxele din sală poate suna ca un difuzor stricat. Ori puneți un fragment real din joc, ori scoateți butonul.

### Slide 14 · Sunetul
*Fișier: `content/14-sunetul.js`*
- **[AI slop]** Titlul („Sunetul face spațiul real”) și cele trei carduri sunt foarte generale. „Sunete care reacționează” și „Plimbarea sonoră” se pot spune despre orice joc.
- **[De verificat]** „Ezio’s Family este reorchestrată cu instrumente specifice fiecărei perioade istorice”: trebuie un exemplu concret (care joc, ce instrumente) sau scoateți afirmația.
- **Propunere:** un slide despre sunet ar câștiga enorm cu **un fragment audio real** (de exemplu strada din Damasc vs. o piață din Paris în Unity). Fără sunet, e greu de convins.

### Slide 15 · Orașul și frontiera (AC III)
*Fișier: `content/15-orasul-si-frontiera.js`*
- **[Greșit]** „Orașul colonial: străzi drepte și dese, ca o grilă.” Bostonul colonial era celebru pentru străzile **strâmbe**, iar grila din New York a fost planificată abia în 1811, după perioada jocului. Desenul cu grila perfectă e deci greșit. Ideea de contrast (oraș controlat vs. natură deschisă) se poate păstra, dar fără „grilă”.
- **[De verificat]** Fraza despre „libertatea coloniștilor clădită pe strămutarea populațiilor indigene” e o interpretare. Sursa citată e un articol pe Medium. Găsiți o sursă academică sau spuneți clar „o interpretare este că…”.
- **Lipsește:** frontiera din AC III e și primul loc unde vremea (iarna) schimbă mișcarea. Ar fi un exemplu perfect pentru tema voastră.

### Slide 16 · Straturi de istorie (Valhalla)
*Fișier: `content/16-straturi-de-istorie.js`*
- **[Greșit]** „Pietre uriașe, ca la Stonehenge, care amintesc de mitul nordic al lui Asgard și Ragnarök.” Stonehenge e cu mii de ani mai vechi decât vikingii și nu are nicio legătură cu mitologia nordică. Rescrieți, de exemplu: „pietre neolitice, ca la Stonehenge, mult mai vechi decât saxonii și vikingii”.
- **[De verificat]** „Apeducte” în ruinele romane din Anglia: în joc apar mai ales ziduri, amfiteatre și băi romane. Verificați exemplele.
- Ideea (peisajul ca o pagină rescrisă de mai multe ori) e foarte bună pentru environment. Cu o captură reală (un fort saxon lângă ruine romane) ar fi excelentă.

### Slide 17 · Atașamentul
*Fișier: `content/17-atasamentul.js`*
- **[Greșit / Neclar]** Butonul spune „Jucători occidentali”, iar textul „Cercetătorii occidentali” și apoi „Cercetătoarele din Orientul Mijlociu”. În studiul din 2008, lecturile vin chiar de la autori (cu origini diferite), nu de la un grup mare de jucători. Spuneți clar: „autorii studiului, din culturi diferite, au «citit» diferit același oraș” și folosiți aceeași formulare pe buton și în text.
- **[De verificat]** Citatul Carolinei Miousse („ca și cum m-aș întoarce acasă”) nu are sursă. Mai mult, ea a lucrat la Notre-Dame, nu „a modelat Parisul”. Ori găsiți interviul exact, ori scoateți citatul.
- **[Grafică]** Lanțul de 6 pași se aprinde singur, în buclă, la fiecare secundă și jumătate. Distrage atenția în timp ce vorbiți. În plus, pasul „Zi și noapte · Timpul trece” nu se leagă logic de ceilalți.
- **[AI slop]** Subtitlul („Când un loc se citește ușor, se parcurge plăcut și are sunet și ritm propriu…”) e lung și abstract. Spus simplu: „Când un oraș e ușor de înțeles și plăcut de străbătut, ajungi să ții la el ca la un loc real”.

### Slide 18 · Minciuni utile
*Fișier: `content/18-minciuni-utile.js`*
- **[Greșit]** Cardul 6 („Sfinxul și Merer”): papirusul lui Merer e despre construcția **Marii Piramide** (transportul pietrei), nu despre Sfinx. În plus, cardul nu descrie nicio „minciună utilă”, doar o colaborare cu egiptologi. Ori îl mutați la slide-ul Discovery Tour, ori îl înlocuiți cu o modificare reală.
- **[Neclar]** Cardul 4 („Căile ferate”) are pe spate și o frază despre primul joc („unele monumente au fost micșorate și apropiate”), care nu are legătură cu trenurile. Faceți din ea un card separat. E chiar un exemplu bun.
- **[De verificat]** Cardurile 2 (orga protejată de drepturi de autor) și 3 (gara St. Pancras mutată) trebuie verificate exact în sursele citate.
- Cardul 1 (turla Notre-Dame) e corect: turla veche fusese demolată în 1786, iar cea nouă e din secolul al XIX-lea. E un exemplu foarte bun.
- **[AI slop]** „Erik Champion · Catros și Leblanc” deasupra titlului nu spune nimic publicului.

### Slide 19 · Discovery Tour
*Fișier: `content/19-discovery-tour.js`*
- **[Neclar]** „6.000 → 2.000 cuvinte”: nu se înțelege la ce se referă (un text? toate textele? per oprire?). Spuneți exact.
- **[De verificat]** „texte care recunosc deschis ce a schimbat jocul față de istorie”: verificați că Discovery Tour chiar face asta. Dacă da, e un argument foarte bun.
- Desenul (drum în zig-zag peste acoperișuri în modul joc vs. drum drept, pe jos, în modul muzeu) e simplu și clar. Merită păstrat.
- Întrebarea de la final („cât de adânc te poți simți în istorie dacă dispare tensiunea jocului?”) e o idee bună de discuție cu publicul.

### Slide 20 · Concluzii și bibliografie
*Fișier: `content/20-concluzii.js`*
- **[Neclar]** Cele trei concluzii (Tehnologie / Arhitectură / Istorie) nu răspund la tema „evoluția environment-ului”. Propunere de concluzii:
  1. Lumea a crescut de la un oraș la o țară întreagă, apoi s-a întors și la orașe dense.
  2. Lumea a devenit vie: zi și noapte, vreme, anotimpuri, animale, mulțimi.
  3. Lumea rămâne o reconstrucție: se schimbă istoria ca să fie jucabilă, iar Discovery Tour o explică.
- **[Neclar]** „Harta francizei” (lista de jocuri) și „Cele cinci elemente Lynch” apar ca grupuri în bibliografie, dar nu sunt surse. Scoateți-le de acolo.
- **[AI slop / De verificat]** Vezi problema generală despre surse: numerotare care sare, surse fără autor, rezumate umflate, linkuri de verificat.

### Slide 21 · Mulțumesc
*Fișier: `content/21-multumesc.js`*
- În regulă. Doar „Sfârșitul sincronizării · Animus OS” e o glumă pe care o prind doar cei care au jucat. E OK dacă vă place.

---

## 3. Ce merge bine (de păstrat)

- Interacțiunile de pe slide-urile **10** (mulțimea), **12** (fațada), **16** (straturile) și **19** (joc vs. muzeu) arată exact ideea și se leagă direct de environment.
- Exemplele cu **turla Notre-Dame**, **Londra și cârligul** (Syndicate) și **întoarcerea la un oraș dens** (Mirage) sunt concrete și ușor de reținut.
- Ideea lui Lynch (cum te orientezi într-un oraș) e o legătură bună între urbanism și designul de joc.

---

## 4. Pe scurt: ce să faceți întâi

1. **Schimbați titlul și concluziile** ca să se potrivească cu tema „evoluția environment-ului”.
2. **Corectați greșelile sigure:** grila din AC III, Stonehenge și mitul nordic, Merer la Sfinx, arcul butant pe palat, Vederea Vulturului, „baliste” și „cufere” ca probleme, „arhitectul” Lynch, metoda 360 a lui Bergeron, „11.840”, „Trece” → „Treci”.
3. **Alegeți o singură măsură pentru km²** și verificați toate cifrele (mai ales 1,41 de două ori, 12.000 de oameni, pragul de 4 km²).
4. **Adăugați ce lipsește pentru temă:** natura și animalele, vremea (AC III → Shadows), ciclul zi–noapte, uneltele de mișcare, interioarele.
5. **Puneți capturi reale din jocuri**, măcar câteva, și scrieți „simulare” pe desenele inventate.
6. **Curățați bibliografia:** fiecare sursă cu autor, titlu și link care funcționează. Scoateți grupurile vagi și blogurile.
7. **Scoateți numele de cercetători de deasupra titlurilor** sau explicați într-o frază ce a spus fiecare.
