/* SLIDE 12 · De ce baked lighting ocupă atât de mult
   bara = textul din bara de jos · an = anul mare, șters, din colț (anul jocului)
   Textul stă între '…'; pentru apostrof folosește ’. Poți folosi <b>…</b> și <em>…</em>.
   Termenii tehnici din industrie rămân în engleză (baked lighting, light probes, LOD, draw call…).
   ┌
   │ supratitlu
   │ TITLU
   │ subtitlu
   │ ┌ carduri[0] ┐ ┌ carduri[1] ┐ ┌ carduri[2] ┐   ← cei 3 pași (eticheta + text)
   │ ┌ etichetaCalc ──────────────────┐   ┌ tehnic: cod │ eticheta + text ┐
   │ │ harta:      [optiuni.harti]    │   │                                 │
   │ │ rezolutie:  [optiuni.rezolutii]│   │                                 │
   │ │ ore:        [optiuni.ore]      │   │                                 │
   │ │ anotimpuri: [optiuni.anotimpuri]   │                                 │
   │ │ rezultat:  CIFRA  (comparatie) │   └─────────────────────────────────┘
   │ │ presupuneri                    │
   │ └────────────────────────────────┘
   └

   Calculul din animație e ilustrativ (presupuneri simple), nu cifrele Ubisoft.
   Singura cifră oficială e „2 TB și 2 ani” pentru Shadows (GDC 2025). */
slide(12,{
 bara:'12 · Baked lighting',
 an:2025,
 supratitlu:'Partea 3 · Cum devine orașul viu',
 titlu:'De ce baked lighting ocupă atât de mult',
 subtitlu:'Lumina indirectă e calculată o singură dată, înainte de lansare, și salvată în texturi. Ieftin în joc, scump în memorie și în timp de calcul.',
 carduri:[
  {eticheta:'1 · Bake (înainte de lansare)', text:'Calculatoare dedicate trimit milioane de raze și află câtă lumină indirectă primește fiecare suprafață fixă. Durează ore sau zile.'},
  {eticheta:'2 · Lightmap', text:'Rezultatul e o textură: fiecare texel ține culoarea luminii pe o bucată mică de perete sau de sol.'},
  {eticheta:'3 · În joc (runtime)', text:'Shader-ul doar citește lightmap-ul. Dar e valabil pentru o singură poziție a soarelui: altă oră sau alt anotimp înseamnă alt lightmap.'}
 ],
 etichetaCalc:'Calcul ilustrativ · cât ar ocupa lightmap-urile',
 harta:'Harta (Unity 2,4 · Origins 80 · Shadows 125 km²)',
 rezolutie:'Rezoluție lightmap (un texel la)',
 ore:'Momente ale zilei',
 anotimpuri:'Anotimpuri',
 rezultat:'Memorie necesară',
 comparatie:'≈ {x} × memoria unui PS5 (16 GB)',   // {x} se completează singur
 presupuneri:'Presupuneri simple: suprafață de luminat = 2× harta (sol + fațade), 4 bytes pe texel. Contează ordinul de mărime.',
 optiuni:{
  harti:[{nume:'Unity', km2:2.4},{nume:'Origins', km2:80},{nume:'Shadows', km2:125}],   // Paris 2,4 km² · Egipt 80 km² · Japonia 125 km²
  rezolutii:[{nume:'1 m', texeliPeM2:1},{nume:'50 cm', texeliPeM2:4},{nume:'25 cm', texeliPeM2:16}],
  ore:[1,4,24],
  anotimpuri:[1,4]
 },
 tehnic:{eticheta:'Detaliu tehnic · calculul și alternativele',
  cod:'texeli = suprafata_m2 × 2 × texeli_pe_m2\nbytes  = texeli × 4                  // RGBA8\ntotal  = bytes × momente × anotimpuri\n\n// 125 km², 25 cm, 24 momente, 4 anotimpuri\n125e6 × 2 × 16 × 4 × 24 × 4 ≈ 1,5 TB',
  text:'Light probes salvează lumina doar în puncte dintr-o grilă 3D (câteva numere pe punct: spherical harmonics), nu pe fiecare bucată de suprafață. RTGI nu mai salvează nimic: calculează lumina în timpul jocului. Estimarea Ubisoft pentru Shadows: ~2 TB și 2 ani de baking (GDC 2025).'}
});
