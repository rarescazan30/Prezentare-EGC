/* SLIDE 5 · Cât de mult au crescut hărțile
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   poza: {descriere, fisier} → pune imaginea în img/ cu numele din fisier și apare singură.
   ┌
   │ supratitlu
   │ TITLU
   │ [butonReda]   nota
   │ ┌ graficul: câte o bară pentru fiecare hartă din `harti`
   │ │ joc · loc   ▇▇▇▇▇▇▇▇            km2 km²
   │ └ (scară liniară)
   │ concluzie
   └ */
slide(5,{
 bara:'05 · Cât au crescut hărțile',
 an:2018,
 supratitlu:'Partea 1 · Comparație',
 titlu:'Cât de mult au crescut hărțile',
 butonReda:'▶ Redă în ordine',
 nota:'Suprafețe aproximative ale hărții, în km². Toate barele sunt la aceeași scară.',
 /* o bară pentru fiecare hartă; km2 cu punct zecimal; epoca = culoarea (0: 2007–2012, 1: 2013–2015, 2: 2017–2025) */
 harti:[
  {joc:'AC I', loc:'Damasc', an:2007, km2:0.13, epoca:0},
  {joc:'AC II', loc:'Florența', an:2009, km2:0.3, epoca:0},
  {joc:'AC II', loc:'Veneția', an:2009, km2:0.37, epoca:0},
  {joc:'Brotherhood', loc:'Roma', an:2010, km2:1.41, epoca:0},
  {joc:'Revelations', loc:'Constantinopol', an:2011, km2:0.94, epoca:0},
  {joc:'AC III', loc:'New York', an:2012, km2:0.93, epoca:0},
  {joc:'AC III', loc:'Frontiera', an:2012, km2:1.41, epoca:0},
  {joc:'Black Flag', loc:'Caraibe', an:2013, km2:120, epoca:1},
  {joc:'Rogue', loc:'Atlantic', an:2014, km2:70, epoca:1},
  {joc:'Unity', loc:'Paris', an:2014, km2:2.4, epoca:1},
  {joc:'Syndicate', loc:'Londra', an:2015, km2:3.7, epoca:1},
  {joc:'Origins', loc:'Egipt', an:2017, km2:80, epoca:2},
  {joc:'Odyssey', loc:'Grecia', an:2018, km2:130, epoca:2},
  {joc:'Valhalla', loc:'Anglia', an:2020, km2:94, epoca:2},
  {joc:'Mirage', loc:'Bagdad', an:2023, km2:2.3, epoca:2},
  {joc:'Shadows', loc:'Japonia', an:2025, km2:80, epoca:2}
 ],
 concluzie:'Din 2017, o singură hartă e de zeci de ori mai mare decât toate orașele din primele jocuri la un loc.'
});
