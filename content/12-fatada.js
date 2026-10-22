/* SLIDE 12 · Fațada
   bara = textul din bara de jos · an = anul mare, șters, din colț
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ fațada desenată ───────────┐   ┌ nume (partea aleasă)     ┐
   │ │ fiecare parte = parti[i]   │   │ etichetaIstorie          │
   │ └────────────────────────────┘   │ istorie                  │
   │ [butonVultur]  nota              │ etichetaJoc              │
   │                                  │ joc                      │
   │                                  └──────────────────────────┘
   └

   `cheie` leagă textul de partea din desen: nu o schimba. */
slide(12,{
 bara:'12 · Fațada',
 an:2009,
 supratitlu:'Gabriele Aroni · 2022',
 titlu:'O fațadă arată istoria și te lasă să urci',
 subtitlu:'Fiecare element de arhitectură are două roluri: seamănă cu cel real și este un loc de care te poți agăța. Apasă pe părțile clădirii.',
 butonVultur:'👁 Vederea Vulturului',
 nota:'Apasă pe o parte a clădirii.',
 parti:[
  {cheie:'rost', nume:'Zidărie rustică',
   istorie:'Pietre mari, cu rosturi adânci. Arătau putere și făceau palatele din Florența să semene cu niște fortărețe.',
   joc:'Rosturile sunt locuri unde îți poți prinde mâinile și picioarele, ca pe o scară de cățărat.'},
  {cheie:'ferestre', nume:'Ferestre renascentiste',
   istorie:'Ferestre simetrice, cu proporții clasice, care dau fațadei un ritm regulat.',
   joc:'Sunt puncte de sprijin la mijlocul urcării: te oprești, schimbi direcția sau te uiți în jur.'},
  {cheie:'cornisa', nume:'Cornișa de sus', istorie:'Partea decorată care încheie clădirea la vârf.',
   joc:'Poți merge pe ea dintr-o parte în alta și de acolo sari spre acoperișul vecin.'},
  {cheie:'grinda', nume:'Grinzi de lemn',
   istorie:'Grinzi ieșite din perete, folosite pe vremuri pentru scripeți și felinare.',
   joc:'Te poți balansa pe ele, iar de pe una dintre ele se face Saltul Credinței.'},
  {cheie:'arc', nume:'Arc butant',
   istorie:'Susține zidurile înalte ale clădirilor mari, ca la catedrale.',
   joc:'Îți oferă un loc de ascunzătoare sus și o pantă pe care urci.'}
 ],
 etichetaIstorie:'Ce reprezintă în istorie',
 etichetaJoc:'La ce folosește în joc'
});
