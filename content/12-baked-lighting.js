/* SLIDE 12 · De ce baked lighting ocupă atât de mult
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ etichetaCum
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   ← cum se face (eticheta + text)
   │ etichetaCeCastigi
   │ ┌ carduri2[0] ┐ ┌ carduri2[1] ┐ ┌ carduri2[2] ┐ ← ce câștigi și ce pierzi
   └

   Singura cifră oficială e „~2 TB și 2 ani” pentru Shadows (estimarea Ubisoft, GDC 2025). */
slide(12,{
 bara:'12 · Baked lighting',
 an:2025,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'Ce e baked lighting și de ce ocupă atât de mult',
 subtitlu:'„Baked” înseamnă „copt dinainte”: lumina indirectă e calculată o singură dată, înainte de lansare, și salvată pe disc. În timpul jocului nu se mai calculează nimic, doar se citește.',
 etichetaCum:'Cum se face',
 carduri:[
  {eticheta:'Pasul 1 · Scena fixă',
   text:'Artiștii termină clădirile, terenul și luminile care nu se mișcă: soarele la o anumită oră, felinarele, focurile. Tot ce e fix intră în calcul.'},
  {eticheta:'Pasul 2 · Bake',
   text:'Un program (light baker) trimite milioane de raze din fiecare lumină și urmărește cum sar de pe suprafețe. Pe calculatoare puternice, durează ore sau zile.'},
  {eticheta:'Pasul 3 · Lightmap',
   text:'Rezultatul se scrie într-o textură, lightmap-ul. Fiecare texel spune cât de luminată e o bucată mică de perete sau de sol, inclusiv de lumina reflectată.'}
 ],
 etichetaCeCastigi:'Ce câștigi și ce pierzi',
 carduri2:[
  {eticheta:'Avantaj · aproape gratuit în joc',
   text:'În timpul jocului, shader-ul doar citește lightmap-ul, ca pe o textură obișnuită. Lumina arată foarte bine și nu costă aproape nimic.'},
  {eticheta:'Limită · totul e „înghețat”',
   text:'Lightmap-ul e corect doar pentru acea poziție a soarelui. Ce se mișcă (oameni, căruțe, ușile deschise) nu poate folosi lightmaps și are nevoie de alt sistem, de exemplu light probes.'},
  {eticheta:'Problema · memoria', rosu:true,
   text:'Fiecare moment al zilei și fiecare anotimp au nevoie de propriile lightmaps, pentru toată harta. Memoria se înmulțește: pentru Shadows, Ubisoft a estimat ~2 TB și 2 ani de baking.'}
 ]
});
