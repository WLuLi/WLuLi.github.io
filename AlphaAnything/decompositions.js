window.ALPHA_DECOMPOSITIONS = [
  {
    "id": "01_cocktail_glass",
    "title": "Glass & Type",
    "subtitle": "One source image, a separate prompt for each layer",
    "category": "Layer decomposition",
    "model": "Qwen-Image-Edit + LongCat-Image-Edit",
    "accent": "#64748B",
    "width": 1024,
    "height": 1024,
    "input": "assets/decompositions/01_cocktail_glass/final/input.webp",
    "inputOriginal": "assets/decompositions/01_cocktail_glass/final/inputOriginal.webp",
    "final": "assets/decompositions/01_cocktail_glass/final/final.webp",
    "thumbnail": "assets/decompositions/01_cocktail_glass/final/thumbnail.webp",
    "layers": [
      {
        "id": "layer-01",
        "name": "Studio wall, counter and background plants",
        "logicalId": "background",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-01.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-01.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-01.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-01.webp",
        "prompt": "Extract the complete photographic BACKGROUND, keeping the original dark studio wall, the gray stone countertop, the upper arching palm frond AND the broad dark-green tropical leaves behind the glass. These softly focused green plants are part of the background and must remain in their exact original places, ending behind the countertop at the original wall-table boundary. Remove only the cocktail glass and drink, separate fruit wedges, both mint leaves, chrome shaker, all words, icons and QR graphics. Reconstruct the matching existing wall, foliage or counter only where those foreground elements were removed. Return the entire original rectangular background fully opaque, preserving the original lighting, blur and green leaf arrangement.",
        "origin": "model_i2rgba_v2",
        "role": "background",
        "bounds": [
          0,
          0,
          1024,
          1024
        ],
        "inspectionCrop": [
          0,
          0,
          1024,
          1024
        ],
        "editable": false,
        "model": "Qwen-Image-Edit"
      },
      {
        "id": "layer-02",
        "name": "Chrome bar tool at right",
        "logicalId": "shaker",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-02.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-02.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-02.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-02.webp",
        "prompt": "Extract only the visible silver chrome cocktail shaker lying on the counter at the far right behind the glass stem and the blurred foreground orange. Preserve its metallic highlights, original visible contour and position. Exclude the glass, oranges, mint and counter. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          825,
          737,
          1024,
          882
        ],
        "inspectionCrop": [
          813,
          725,
          1024,
          894
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 199,
          "height": 145,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////AAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAH//////8AAAAAAAAAAAAAAAAAAAAAAAAAH///////4AAAAAAAAAAAAAAAAAAAAAAAAD////////gAAAAAAAAAAAAAAAAAAAAAAAB////////+AAAAAAAAAAAAAAAAAAAAAAAA/////////8AAAAAAAAAAAAAAAAAAAAAAAf/////////4AAAAAAAAAAAAAAAAAAAAAAP//////////wAAAAAAAAAAAAAAAAAAAAAH///////////gAAAAAAAAAAAAAAAAAAAAD////////////AAAAAAAAAAAAAAAAAAAAB/////////////AAAAAAAAAAAAAAAAAAAA//////////////gAAAAAAAAAAAAAAAAAAP//////////////gAAAAAAAAAAAAAAAAAH///////////////AAAAAAAAAAAAAAAAAD////////////////gAAAAAAAAAAAAAAAA/////////////////wAAAAAAAAAAAAAAAf/////////////////4AAAAAAAAAAAAAAP//////////////////AAAAAAAAAAAAAAD//////////////////4AAAAAAAAAAAAAB///////////////////AAAAAAAAAAAAAA///////////////////4AAAAAAAAAAAAAP///////////////////AAAAAAAAAAAAAH///////////////////wAAAAAAB//4AAB///////////////////8AAAAA/////+AA////////////////////gAAAf//////8Af///////////////////8AAf////////AH///////////////////////////////wD///////////////////////////////8A////////////////////////////////AP///////////////////////////////wH///////////////////////////////8B////////////////////////////////Af///////////////////////////////wP///////////////////////////////8D////////////////////////////////A////////////////////////////////wP///////////////////////////////8D////////////////////////////////B////////////////////////////////wf///////////////////////////////8H////////////////////////////////B////////////////////////////////w////////////////////////////////8P////////////////////////////////D////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////H////////////////////////////////x////////////////////////////////8f////////////////////////////////D////////////////////////////////w////////////////////////////////8P////////////////////////////////D////////////////////////////////wf///////////////////////////////8H////////////////////////////////A////////////////////////////////wP///////////////////////////////8D////////////////////////////////Af///////////////////////////////wH///////////////////////////////8B////////////////////////////////Af///////////////////////////////wD///////////////////////////////8A////////////////////////////////AP///////////////////////////////wB///////////////////////////////8AP///////////////////////////////AD///////////////////////////////wAf//////////////////////////////8AH///////////////////////////////AA///////////////////////////////wAP//////////////////////////////8AB///////////////////////////////AAf//////////////////////////////wAD//////////////////////////////8AAf//////////////////////////////AAD//////////////////////////////wAA//////////////////////////////8AAH//////////////////////////////AAAf/////////////////////////////wAAD/////////////////////////////8AAA//////////////////////////////AAAD/////////////////////////////wAAAf////////////////////////////8AAAD/////////////////////////////AAAAf/////////////////+D////////+AAAAD///////////////////8AB/////gAAAAAf///////////////////4AAAAf/gAAAAAD///////////////////////////4AAAAAH///////////////////////////AAAAAAf//////////////////////////5AAAAAA///////////////////////////wAAAAAB//////////////////////////8AAAAAAf//////////////////////////AAAAAB///////////////////////////wAAAAB///////////////////////////8AAAAf////////////////////////////AAH//////////////////////////////wAf//////////////////////////////8B////////////////////////////////A////////////////////////////////wf///////////////////////////////8H////////////////////////////////B///////////////////////////////8Af//////////////////////////////AAH/////////////////////////////+AAB//////////////////////////4//+AAAf////////////////////////+AAAAAAAD///////////////////8fAAAAAAAAAAAB///////////////////wAAAAAAAAAAAAAP//////////////////wAAAAAAAAAAAAAD/////////////////+AAAAAAAAAAAAAAA//////////////nwcAAAAAAAAAAAAAAAAH////////////4AAAAAAAAAAAAAAAAAAAAH/////////+AAAAAAAAAAAAAAAAAAAAAAAAD///////AAAAAAAAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
        }
      },
      {
        "id": "layer-03",
        "name": "Two orange wedges",
        "logicalId": "orange_wedges",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-03.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-03.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-03.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-03.webp",
        "prompt": "Extract the two adjacent bright orange wedges resting on the counter behind and to the left of the glass stem. Include their rind, pale pith, juicy flesh and immediate soft contact shadows as one layer. Keep both wedges fully opaque. Exclude the glass, palm, foreground blurred orange and countertop. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          434,
          697,
          859,
          913
        ],
        "inspectionCrop": [
          422,
          685,
          871,
          925
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 130,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//h//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5/////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////+AAAAAAAAAAAAAAAAAAAAA+AAAAAAA/////////////4AAAAAAAAAADx//////////B///////////////////gAAAAAAAAAH///////////////////////////////+AAAAAAAAAA////////////////////////////////8AAAAAAAAAD////////////////////////////////wAAAAAAAAAf////////////////////////////////AAAAAAAAAD////////////////////////////////8AAAAAAAAAP////////////////////////////////4AAAAAAAAB/////////////////////////////////gAAAAAAAAH/////////////////////////////////AAAAAAAAAf////////////////////////////////8AAAAAAAAD/////////////////////////////////wAAAAAAAAP/////////////////////////////////AAAAAAAAA/////////////////////////////////+AAAAAAAAH/////////////////////////////////4AAAAAAAAf/////////////////////////////////gAAAAAAAB/////////////////////////////////+AAAAAAAAH/////////////////////////////////4AAAAAAAA//////////////////////////////////wAAAAAAAD//////////////////////////////////AAAAAAAAf/////////////////////////////////8AAAAAAAB//////////////////////////////////wAAAAAAAH//////////////////////////////////AAAAAAAAf/////////////////////////////////+AAAAAAAB//////////////////////////////////4AAAAAAAH//////////////////////////////////gAAAAAAAf/////////////////////////////////+AAAAAAAD//////////////////////////////////4AAAAAAAP//////////////////////////////////gAAAAAAA//////////////////////////////////+AAAAAAAD//////////////////////////////////4AAAAAAAP//////////////////////////////////gAAAAAAA//////////////////////////////////+AAAAAAAD//////////////////////////////////4AAAAAAAH//////////////////////////////////gAAAAAAAf/////////////////////////////////+AAAAAAAB//////////////////////////////////4AAAAAAAD//////////////////////////////////AAAAAAAAP/////////////////////////////////8AAAAAAAA//////////////////////////////////wAAAAAAAD//////////////////////////////////AAAAAAAAP/////////////////////////////////4AAAAAAAAf/////////////////////////////////gAAAAAAAB/////////////////////////////////8AAAAAAAAH/////////////////////////////////wAAAAAAAAP/////////////////////////////////AAAAAAAAA/////////////////////////////////8AAAAAAAAB/////////////////////////////////gAAAAAAAAH////////////////////////////////+AAAAAAAAAP////////////////////////////////wAAAAAAAAA/////////////////////////////////AAAAAAAAAD////////////////////////////////8AAAAAAAAAH////////////////////////////////wAAAAAAAAAP////////////////////////////////AAAAAAAAAA////////////////////////////////4AAAAAAAAAB////////////////////////////////gAAAAAAAAAD///////////////////////////////8AAAAAAAAAAP///////////////////////////////wAAAAAAAAAAf//////////////////////////////+AAAAAAAAAAA///////////////////////////////4AAAAAAAAAAB///////////////////////////////AAAAAAAAAAAD//////////////////////////////8AAAAAAAAAAAH//////////////////////////////wAAAAAAAAAAAP/////////////////////////////+AAAAAAAAAAAAf/////////////////////////////4AAAAAAAAAAAA//////////////////////////////gAAAAAAAAAAAD/////////////////////////////+AAAAAAAAAAAAD/////////////////////////////wAAAAAAAAAAAAH/////////////////////////////AAAAAAAAAAAAAf////////////////////////////8AAAAAAAAAAAAAf////////////////////////////gAAAAAAAAAAAAA////////////////////////////+AAAAAAAAAAAAAB////////////////////////////wAAAAAAAAAAAAAB////////////////////////////AAAAAAAAAAAAAAD///////////////////////////4AAAAAAAAAAAAAAH///////////////////////////gAAAAAAAAAAAAAAH//////////////////////////8AAAAAAAAAAAAAAAP//////////////////////////wAAAAAAAAAAAAAAAf/////////////////////////+AAAAAAAAAAAAAAAAf/////////////////////////wAAAAAAAAAAAAAAAA//////////////////////////AAAAAAAAAAAAAAAAB/////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAD////////////////////////+AAAAAAAAAAAAAAAAAD////////////////////////wAAAAAAAAAAAAAAAAAD///////////////////////+AAAAAAAAAAAAAAAAAAD///////////////////////4AAAAAAAAAAAAAAAAAAD///////////////////////AAAAAAAAAAAAAAAAAAAD//////////////////////8AAAAAAAAAAAAAAAAAAAH//////////////////////gAAAAAAAAAAAAAAAAAAAD/////////////////////8AAAAAAAAAAAAAAAAAAAAD/////////////////////gAAAAAAAAAAAAAAAAAAAAD////////////////////+AAAAAAAAAAAAAAAAAAAAAB////////////////////wAAAAAAAAAAAAAAAAAAAAAB///////////////////+AAAAAAAAAAAAAAAAAAAAAAD///////////////////4AAAAAAAAAAAAAAAAAAAAAAB///////////////////AAAAAAAAAAAAAAAAAAAAAAAH//////////////////4AAAAAAAAAAAAAAAAAAAAAAAP//////////////////AAAAAAAAAAAAAAAAAAAAAAAAH/////////////////wAAAAAAAAAAAAAAAAAAAAAAAAf////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAf////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAH///////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        }
      },
      {
        "id": "layer-04",
        "name": "Transparent cocktail glass",
        "logicalId": "glass_hero",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-04.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-04.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-04.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-04.webp",
        "prompt": "Extract the tall clear stemmed cocktail glass on the right, including its complete rounded bowl, thin rim, coral-red drink, ice, orange garnish inside the bowl, slender stem and oval glass foot. Preserve true natural partial transparency through the empty upper glass, glass walls, clear stem and base, with the original reflections and refraction. Retain the opaque orange rind and strong highlights. Exclude the palm leaves and black scenery seen behind the glass, the separate orange wedges, every mint leaf, metal shaker, foreground blurred orange and all graphics. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "hero",
        "bounds": [
          635,
          124,
          1000,
          969
        ],
        "inspectionCrop": [
          623,
          112,
          1012,
          981
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 111,
          "height": 256,
          "data": "AAAAAAAP////wAAAAAAAAAAD/////////AAAAAAAAf///gAAABz/4AAAAAAP//+yAAAAAAD8AAAAAP/n+AAAAAAAB/8AAAAB/8XgAAAAAAAA/4AAAAP8wPAAAAAAAAAPgAAAB+AA8AAAAAAAAB/AAAAHwHjwAAAAAAAA/8AAAA///fAAAAAAAD/z4AAAD///8AAAAAD/4APgAAAP//////////4AF+AAAB////gAAGP//gwf8AAAH///5oAIQ/AeAA/wAAA////gAAAAAA8hD/gAAD///+AAAAAABnEPvAAAf///8AAAAIAGcYe8AAB///+YAAAAAAYYx5wAAP///8gAAAAADABH3gAA/////AAAAAAMACfOAAD////+AAAAAAAAE88AAf////8AAAAAEAAb7wAB/////wAAAAAQAA3ngAH/////AAAAAAAAB+eAAf/////gAAAAAAAH98AD//////AAAAACAAPnwAP//////wAAAAMAAcfAB///////gAAAA4AAz8AH///////wAAADgADP4Af///////AAAAMAAH/gD9//////+AAAAAAAd/AP/////////////wA98A+////////////////wH7////////////////gf////////////////+B/////////////////4P/////////////////g//////////////////H/////////////////8f/////////////////x//////////////////H/////////////////8f/////////////////x//////////////////H/////////////////+//////////////////7//////////////////v/////////////////+//////////////////7//////////////////v/////////////////+//////////////////7//////////////////v/////////////////+//////////////////7//////////////////v/////////////////+//////////////////7//////////////////v/////////////////+f/////////////////x//////////////////H/////////////////8f/////////////////x//////////////////H/////////////////4P/////////////////g/////////////////+D/////////////////wH/////////////////Af////////////////8B/////////////////gD////////////////+AP////////////////wAf////////////////AB////////////////4AH////////////////gAP///////////////8AAf///////////////wAB///////////////+AAD///////////////4AAP///////////////AAAf//////////////4AAA///////////////AAAD//////////////8AAAH//////////////gAAAP/////////////8AAAAf/////////////wAAAB/////////////+AAAAD/////////////wAAAAH////////////+AAAAAP////////////wAAAAAf///////////+AAAAAA////////////wAAAAAB///////////+AAAAAAD///////////wAAAAAAH//////////+AAAAAAAP//////////wAAAAAAAf/////////+AAAAAAAA//////////gAAAAAAAA/////////8AAAAAAAAB/////////gAAAAAAAAB////////4AAAAAAAAAD////////AAAAAAAAAAH///////4AAAAAAAAAAH//////+AAAAAAAAAAAP//////gAAAAAAAAAAAP/////8AAAAAAAAAAAAf/////gAAAAAAAAAAAAf////4AAAAAAAAAAAAA/////AAAAAAAAAAAAAB////4AAAAAAAAAAAAAD////AAAAAAAAAAAAAAH///8AAAAAAAAAAAAAAf///gAAAAAAAAAAAAAA///+AAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAH///AAAAAAAAAAAAAAAf//4AAAAAAAAAAAAAAB///gAAAAAAAAAAAAAAD//+AAAAAAAAAAAAAAAP//wAAAAAAAAAAAAAAA///AAAAAAAAAAAAAAAB//8AAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAf/+AAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAP/8AAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAP+4AAAAAAAAAAAAAAAAf7gAAAAAAAAAAAAAAAB/uAAAAAAAAAAAAAAAAH+4AAAAAAAAAAAAAAAAf7gAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAA/YAAAAAAAAAAAAAAAAD5wAAAAAAAAAAAAAAAAPnAAAAAAAAAAAAAAAAA+cAAAAAAAAAAAAAAAAD5wAAAAAAAAAAAAAAAAPvAAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAP3AAAAAAAAAAAAAAAAB/cAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAH/YAAAAAAAAAAAAAAAAf9gAAAAAAAAAAAAAAAB/2AAAAAAAAAAAAAAAAH/YAAAAAAAAAAAAAAAAf9gAAAAAAAAAAAAAAAB92AAAAAAAAAAAAAAAAPhYAAAAAAAAAAAAAAAA+HgAAAAAAAAAAAAAAAD+eAAAAAAAAAAAAAAAAPh4AAAAAAAAAAAAAAAA+HwAAAAAAAAAAAAAAAH4fAAAAAAAAAAAAAAAAfh8AAAAAAAAAAAAAAAB+DwAAAAAAAAAAAAAAAH5PAAAAAAAAAAAAAAAAfkeAAAAAAAAAAAAAAAB+B4AAAAAAAAAAAAAAAP4PgAAAAAAAAAAAAAAA+A+AAAAAAAAAAAAAAAD4A8AAAAAAAAAAAAAAAPADwAAAAAAAAAAAAAAA+gfAAAAAAAAAAAAAAAH6B8AAAAAAAAAAAAAAAf7/wAAAAAAAAAAAAAAB///gAAAAAAAAAAAAAAH//+AAAAAAAAAAAAAAA///4AAAAAAAAAAAAAAD///gAAAAAAAAAAAAAAP///AAAAAAAAAAAAAAB///8AAAAAAAAAAAAAAH///wAAAAAAAAAAAAAA////gAAAAAAAAAAAAAH////AAAAAAAAAAAAAB////+AAAAAAAAAAAAB//////AAAAAAAAAAAP///////+AAAAAAAAAf/////////+AAAAAAA////////////wAAAAAf/4//////////8AAAAH//D//////////8AAAB/wYD////////5/8AAAPAAPwf/////7/Af4AAB+Bw/gH//D/8B///wAAH/AD/GD///AAAj//AAAf+AGAAP/A8AAAD/8AAB/+AAAA/wH0A/Af/wAAD//AAAD8AfQAAD//AAAH//+AAPADAAAB//4AAAP////weAAACn///AAAAP////4/B+/////4AAAAf////////////+AAAAAP////////////gAAAAAD///////////gAAAAAAAf/////////gAAAAAAAAB////////AAAAAAAAAAAAf///+AAAAAAA="
        }
      },
      {
        "id": "layer-05",
        "name": "Sharp side mint leaf",
        "logicalId": "mint_side",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-05.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-05.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-05.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-05.webp",
        "prompt": "Extract only the sharp large green mint leaf entering from the middle of the right image edge beside the lower glass bowl and upper stem. Preserve its original cropped boundary, opaque leaf face, fine veins and serrated edge. Exclude the palm frond, blurred foreground mint, glass, orange and metal tool. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          886,
          554,
          1023,
          719
        ],
        "inspectionCrop": [
          874,
          542,
          1024,
          731
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 137,
          "height": 165,
          "data": "AAAAAAAAAAAAAAAAAAMA4AEAAAAAAAAAAAAAAAAAAA/B8A+AAAAAAAAAAAAAAAAADB////+AAAAAAAAAAAAAAAAAPj////+AAAAAAAAAAAAAAAAAf/////+AAAAAAAAAAAAAAAHD//////+AAAAAAAAAAAAAAAf///////+AAAAAAAAAAAAAAB////////+AAAAAAAAAAAAAB/////////+AAAAAAAAAAAAAH/////////+AAAAAAAAAAAAAf/////////+AAAAAAAAAAAAB//////////+AAAAAAAAAAAA///////////+AAAAAAAAAAAD///////////+AAAAAAAAAAAH///////////+AAAAAAAAAAAf///////////+AAAAAAAAAAD////////////+AAAAAAAAAAH////////////+AAAAAAAAAAf////////////+AAAAAAAAAA/////////////+AAAAAAAAAN/////////////+AAAAAAAAA//////////////+AAAAAAAAD//////////////+AAAAAAAAP//////////////+AAAAAAAAf//////////////+AAAAAAAA///////////////+AAAAAAAA///////////////+AAAAAAAA///////////////+AAAAAAAB///////////////+AAAAAAAB///////////////+AAAAAAAD///////////////+AAAAAAAD///////////////+AAAAAAAH///////////////+AAAAAAAP///////////////+AAAAAAP////////////////+AAAAAAf////////////////+AAAAAA/////////////////+AAAAAA/////////////////+AAAAAB/////////////////+AAAAAB/////////////////+AAAAAD/////////////////+AAAAAD/////////////////+AAAAAH/////////////////+AAAAAf/////////////////+AAAAB//////////////////+AAAAB//////////////////+AAAAD//////////////////+AAAAD//////////////////+AAAAD//////////////////+AAAAH//////////////////+AAAAH//////////////////+AAAAP//////////////////+AAAAP//////////////////+AAAA///////////////////+AAAB///////////////////+AAAD///////////////////+AAAD///////////////////+AAAH///////////////////+AAAH///////////////////+AAAH///////////////////+AAAH///////////////////+AAAP///////////////////+AAAP///////////////////+AAA////////////////////+AAB////////////////////+AAB////////////////////+AAD////////////////////+AAD////////////////////+AAD////////////////////+AAD////////////////////+AAD////////////////////+AAH////////////////////+AAf////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AA/////////////////////+AB/////////////////////+AB/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AP/////////////////////+Af/////////////////////+AP/////////////////////+AP/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AH/////////////////////+AP/////////////////////+AP/////////////////////+AP/////////////////////+AP/////////////////////+AP/////////////////////+AP/////////////////////+AP/////////////////////+Af/////////////////////+Af/////////////////////+Af/////////////////////+Af/////////////////////+Af/////////////////////+Af/////////////////////4Af/////////////////////gAf/////////////////////AA/////////////////////+AA/////////////////////8AA/////////////////////8AA/////////////////////4AA/////////////////////gAA/////////////////////AAA////////////////////8AAA////////////////////wAAA////////////////////wAAA////////////////////wAAA////////////////////wAAA////////////////////gAAA///////////////////+AAAA///////////////////gAAAA//////////////////+AAAAA//////////////////+AAAAA//////////////////+AAAAA//////////////////8AAAAA//////////////////wAAAAAf////////////////wAAAAAAf///////////////8AAAAAAAf//////////////wAAAAAAAAf//////////////wAAAAAAAAf//////////////wAAAAAAAAf//////////////wAAAAAAAAf////////////+AgAAAAAAAAf//////gAH//gAAAAAAAAAAAf/////8AAAOAAAAAAAAAAAAAf/////wAAAAAAAAAAAAAAAAAf////8AAAAAAAAAAAAAAAAAAP//4AAAAAAAAAAAAAAAAAAAA"
        }
      },
      {
        "id": "layer-06",
        "name": "Defocused foreground mint",
        "logicalId": "mint_front",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-06.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-06.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-06.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-06.webp",
        "prompt": "Extract only the large out-of-focus green mint leaf entering the lower edge left of the glass stem. Preserve the exact soft lens defocus and naturally feathered partially transparent boundary; retain its green leaf body. Exclude the sharp right-side mint leaf, all other objects and the stone counter. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "foreground",
        "bounds": [
          272,
          846,
          560,
          1023
        ],
        "inspectionCrop": [
          260,
          834,
          572,
          1024
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 157,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8B+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAD////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAf////////////////wAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////wAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////4AAAAAAAAAAAAAAAAAAAAAAAA//////////////////4AAAAAAAAAAAAAAAAAAAAAAAH//////////////////wAAAAAAAAAAAAAAAAAAAAAAA///////////////////4AAAAAAAAAAAAAAAAAAAAAAP///////////////////4AAAAAAAAAAAAAAAAAAAAAA////////////////////wAAAAAAAAAAAAAAAAAAAAAH////////////////////gAAAAAAAAAAAAAAAAAAAAA/////////////////////AAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP/////////////////////AAAAAAAAAAAAAAAAAAAAB/////////////////////+AAAAAAAAAAAAAAAAAAAAH//////////////////////wAAAAAAAAAAAAAAAAAAA///////////////////////+AAAAAAAAAAAAAAAAAAD///////////////////////+AAAAAAAAAAAAAAAAAAP////////////////////////AAAAAAAAAAAAAAAAAB/////////////////////////wAAAAAAAAAAAAAAAAH/////////////////////////wAAAAAAAAAAAAAAAA//////////////////////////4AAAAAAAAAAAAAAAD//////////////////////////8AAAAAAAAAAAAAAAf//////////////////////////+AAAAAAAAAAAAAAB////////////////////////////AAAAAAAAAAAAAAP///////////////////////////+AAAAAAAAAAAAAA////////////////////////////8AAAAAAAAAAAAAD////////////////////////////4AAAAAAAAAAAAAf////////////////////////////wAAAAAAAAAAAAB/////////////////////////////wAAAAAAAAAAAAH/////////////////////////////gAAAAAAAAAAAA//////////////////////////////gAAAAAAAAAAAD//////////////////////////////AAAAAAAAAAAAP/////////////////////////////+AAAAAAAAAAAA//////////////////////////////8AAAAAAAAAAAD//////////////////////////////4AAAAAAAAAAAP//////////////////////////////wAAAAAAAAAAA///////////////////////////////gAAAAAAAAAAD///////////////////////////////AAAAAAAAAAAP///////////////////////////////AAAAAAAAAAA///////////////////////////////+AAAAAAAAAAD////////////////////////////////AAAAAAAAAAf////////////////////////////////gAAAAAAAAB/////////////////////////////////AAAAAAAAAH/////////////////////////////////gAAAAAAAA//////////////////////////////////gAAAAAAAD//////////////////////////////////4AAAAAAAf///////////////////////////////////AAAAAAB///////////////////////////////////+AAAAAAH///////////////////////////////////8AAAAAAf///////////////////////////////////wAAAAAB////////////////////////////////////gAAAAAH////////////////////////////////////AAAAAA////////////////////////////////////+AAAAAD////////////////////////////////////8AAAAAP////////////////////////////////////wAAAAB/////////////////////////////////////gAAAAH/////////////////////////////////////AAAAAf////////////////////////////////////8AAAAB/////////////////////////////////////4AAAAH/////////////////////////////////////gAAAAf////////////////////////////////////+AAAAB/////////////////////////////////////8AAAAH/////////////////////////////////////wAAAAP/////////////////////////////////////gAAAA/////////////////////////////////////+AAAAD/////////////////////////////////////8AAAAP/////////////////////////////////////4AAAA//////////////////////////////////////gAAAD//////////////////////////////////////AAAAH/////////////////////////////////////+AAAAf/////////////////////////////////////8AAAD//////////////////////////////////////wAAAP//////////////////////////////////////AAAA//////////////////////////////////////+AAAD//////////////////////////////////////4AAAP//////////////////////////////////////gAAA///////////////////////////////////////AAAH//////////////////////////////////////+AAAf//////////////////////////////////////8AAB///////////////////////////////////////4AAH///////////////////////////////////////wAAf///////////////////////////////////////AAB///////////////////////////////////////8AAH///////////////////////////////////////wAAP///////////////////////////////////////gAA///////////////////////////////////////+AAD///////////////////////////////////////4AAP///////////////////////////////////////wAAf///////////////////////////////////////gAB///////////////////////////////////////+AAH///////////////////////////////////////4AAf///////////////////////////////////////gAA////////////////////////////////////////AAD///////////////////////////////////////8AAP///////////////////////////////////////wAA////////////////////////////////////////gAD///////////////////////////////////////+AAP///////////////////////////////////////4AA////////////////////////////////////////wAB////////////////////////////////////////AAH///////////////////////////////////////+AAf///////////////////////////////////////8AB////////////////////////////////////////wAD////////////////////////////////////////gAP///////////////////////////////////////+AA////////////////////////////////////////4AB////////////////////////////////////////wAD////////////////////////////////////////AAP///////////////////////////////////////8AAf///////////////////////////////////////wAB////////////////////////////////////////AAD///////////////////////////////////////8AAP///////////////////////////////////////wAA////////////////////////////////////////gAD///////////////////////////////////////+AAP///////////////////////////////////////4AAf///////////////////////////////////////wAB////////////////////////////////////////AAH///////////////////////////////////////8AAP///////////////////////////////////////4AA////////////////////////////////////////gAB///////////////////////////////////////+AAD///////////////////////////////////////4AAH///////////////////////////////////////gAAP//////////////////////////////////////+AAA///////////////////////////////////////8AAB///////////////////////////////////////gAAD///////////////////////////////////////AAAP//////////////////////////////////////8AAA///////////////////////////////////////wAAD///////////////////////////////////////AAAH//////////////////////////////////////8AAAP//////////////////////////////////////gAAAf/////////////////////////////////////8AAAB//////////////////////////////////////gAAAP/////////////////////////////////////+A="
        }
      },
      {
        "id": "layer-07",
        "name": "Defocused foreground orange",
        "logicalId": "orange_front",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-07.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-07.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-07.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-07.webp",
        "prompt": "Extract only the very large blurred yellow-orange fruit wedge entering from the lower-right image border in front of the glass foot. Preserve its original lens blur, cropped position, yellow rind and naturally soft partially transparent boundary. Exclude the glass, the two sharp orange wedges behind it, green leaves and counter. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "foreground",
        "bounds": [
          819,
          645,
          1023,
          1023
        ],
        "inspectionCrop": [
          807,
          633,
          1024,
          1024
        ],
        "editable": true,
        "model": "LongCat-Image-Edit",
        "hitMask": {
          "width": 138,
          "height": 256,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAfgAAAAAAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAB//wAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAH//wAAAAAAAAAAAAAAAAAAAA///4AAAAAAAAAAAAAAAAAAAB///8AAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAB////8AAAAAAAAAAAAAAAAAAB////8AAAAAAAAAAAAAAAAAAD////4AAAAAAAAAAAAAAAAAAH////8AAAAAAAAAAAAAAAAAAP////+AAAAAAAAAAAAAAAAAAP/////AAAAAAAAAAAAAAAAAAP/////AAAAAAAAAAAAAAAAAAf/////AAAAAAAAAAAAAAAAAAf/////AAAAAAAAAAAAAAAAAAf/////AAAAAAAAAAAAAAAAAAf/////AAAAAAAAAAAAAAAAAAf/////AAAAAAAAAAAAAAAAAA//////AAAAAAAAAAAAAAAAAJ//////AAAAAAAAAAAAAAAAA///////AAAAAAAAAAAAAAAAf///////AAAAAAAAAAAAAAAAP///////AAAAAAAAAAAAAAAAf///////AAAAAAAAAAAAAAAAf///////AAAAAAAAAAAAAAAA////////AAAAAAAAAAAAAAAB////////AAAAAAAAAAAAAAAH////////AAAAAAAAAAAAAAAf////////AAAAAAAAAAAAAAB/////////AAAAAAAAAAAAAAH/////////AAAAAAAAAAAAAAP/////////AAAAAAAAAAAAAAf/////////AAAAAAAAAAAAAH//////////AAAAAAAAAAAAAP//////////AAAAAAAAAAAAAf//////////AAAAAAAAAAAAAf//////////AAAAAAAAAAAAAf//////////AAAAAAAAAAAAA///////////AAAAAAAAAAAAD///////////AAAAAAAAAAAAP///////////AAAAAAAAAAAAf///////////AAAAAAAAAAAB////////////AAAAAAAAAAAD////////////AAAAAAAAAAAP////////////AAAAAAAAAAB/////////////AAAAAAAAAAA/////////////AAAAAAAAAAA/////////////AAAAAAAAAAB/////////////AAAAAAAAAAH/////////////AAAAAAAAAAf/////////////AAAAAAAAAA//////////////AAAAAAAAAA//////////////AAAAAAAAAB//////////////AAAAAAAAAD//////////////AAAAAAAAAH//////////////AAAAAAAAAP//////////////AAAAAAAAH///////////////AAAAAAAAH///////////////AAAAAAAAH///////////////AAAAAAAAD///////////////AAAAAAAAP///////////////AAAAAAAAf///////////////AAAAAAAA////////////////AAAAAAAB////////////////AAAAAAAB////////////////AAAAAAAD////////////////AAAAAAAD////////////////AAAAAAAH////////////////AAAAAAAH////////////////AAAAAAAH////////////////AAAAAAAH////////////////AAAAAAAP////////////////AAAAAAAP////////////////AAAAAAA/////////////////AAAAAAD/////////////////AAAAAAD/////////////////AAAAAAH/////////////////AAAAAAf/////////////////AAAAAA//////////////////AAAAAC//////////////////AAAAAD//////////////////AAAAAB//////////////////AAAAAB//////////////////AAAAAD//////////////////AAAAAH//////////////////AAAAAH//////////////////AAAAAP//////////////////AAAAAP//////////////////AAAAAP//////////////////AAAAAf//////////////////AAAAAP//////////////////AAAAAH//////////////////AAAAAP//////////////////AAAADP//////////////////AAAAD///////////////////AAAAB///////////////////AAAAA///////////////////AAAAA///////////////////AAAAA///////////////////AAAAB///////////////////AAAAB///////////////////AAAAB///////////////////AAAAB///////////////////AAAAH///////////////////AAAAP///////////////////AAAAP///////////////////AAAAP///////////////////AAAB////////////////////AAD/////////////////////AAF/////////////////////AAA/////////////////////AAAD////////////////////AAAB////////////////////AAAB////////////////////AAAD////////////////////AAAf////////////////////AAA/////////////////////AAB/////////////////////AAB/////////////////////AAD/////////////////////AAD/////////////////////AAB/////////////////////AAAf////////////////////AAA/////////////////////AAAf////////////////////AAAf////////////////////AAAP////////////////////AAAP////////////////////AAAv////////////////////AAB/////////////////////AAB/////////////////////AAB/////////////////////AAB/////////////////////AAD/////////////////////AAD/////////////////////AAB/////////////////////AAB/////////////////////AAA/////////////////////AAA/////////////////////AAH/////////////////////AAP/////////////////////AAP/////////////////////AAP/////////////////////AAH/////////////////////AAH/////////////////////AAH/////////////////////AAD/////////////////////AAP/////////////////////AAP/////////////////////AAH/////////////////////AAD/////////////////////AAH/////////////////////AAP/////////////////////AAP/////////////////////AAP/////////////////////AAP/////////////////////AAP/////////////////////AAf/////////////////////AAf/////////////////////AB//////////////////////AH//////////////////////AH//////////////////////AE//////////////////////AD//////////////////////AD//////////////////////AH//////////////////////AH//////////////////////AB//////////////////////AA//////////////////////AA//////////////////////AH//////////////////////AH//////////////////////AD//////////////////////AA//////////////////////AA//////////////////////AAf/////////////////////AA//////////////////////AA/////////////////////+AP/////////////////////8AH/////////////////////wAB/////////////////////gAAf////////////////////gAAD////////////////////gAAA////////////////////gAAAP///////////////////4AAAA///////////////////8A"
        }
      },
      {
        "id": "layer-08",
        "name": "Menu caption and social row",
        "logicalId": "typography",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-08.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-08.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-08.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-08.webp",
        "prompt": "Extract the entire typography layer: every word, letter, number and yellow social icon visible in the input. Preserve the exact spelling, typefaces, line breaks, sizes, colors and placement. The result is white and yellow text on transparency, with no photographic scene and no red QR badge.",
        "origin": "model_i2rgba_v2",
        "role": "text",
        "bounds": [
          46,
          375,
          459,
          503
        ],
        "inspectionCrop": [
          34,
          363,
          471,
          515
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 79,
          "data": "AAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAcHB4Hg3gBvOA8APj4AAAAAAAAAAAAAAAAAAAAAAAAAB4Mf5/n/AH/+H8B+f4AAAAAAAAAAAAAAAAAAAAAAAAAH8D/n/feAf+894BjzwAAAAAAAAAAAAAAAAAAAAAAAAAP8OHYd44Bxx3jwGODAAAAAAAAAAAAAAAAAAAAAAAAAAf94YP3jgGHHf/AY4MAAAAAAAAAAAAAAAAAAAAAAAAAAH3gH/eOAYcd/4BjgwAAAAAAAAAAAAAAAAAAAAAAAAAYH+Acd44Bhx3BAGODAAAAAAAAAAAAAAAAAAAAAAAAADwf4Zh3DgGHHcHAY8MAAAAAAAAAAAAAAAAAAAAAAAAAHhzzufcOAYcd48BzxwAAAAAAAAAAAAAAAAAAAAAAAAAf/P+f/w4Bhxz/gH3/AAAAAAAAAAAAAAAAAAAAAAAAAAfwPw+/BgGHHD8AOH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAYAQABAYMwAQAgAAgAAgAAAAAAAAAAAAAAAAAAAAAD+H4P4A/hxz8B/vh/H/GHAAAAAAAAAAAAAAAAAAAAAAf8/5/wH/nHPwH//H+f8YcAAAAAAAAAAAAAAAAAAAAADz3jnHAcOcc8Aeec4547hwAAAAAAAAAAAAAAAAAAAAAH+f+/8Dw5xzgBxxz/nDuHAAAAAAAAAAAAAAAAAAAAAAf5/7/wODnHOAHHHP+cO4cAAAAAAAAAAAAAAAAAAAAAAf3+P/A4Occ4Accc/5w7hwAAAAAAAAAAAAAAAAAAAAAEfcG8MDw5xzgBxxzhnDuHAAAAAAAAAAAAAAAAAAAAAA4dw5xwHDnHOAHHHOOcO48AAAAAAAAAAAAAAAAAAAAAD/z/n/Af+f84Accc/5w5/wAAAAAAAAAAAAAAAAAAAAAD+H8P4Afw/zgBxxx/nDn/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//8Af//gD//wAf//AAAAAAAAAAAAAAAAAAAAAAAAAA///8H///z///4P///AAAAAAAAAAAAAAAAAAAAAAAAAH////////////7///8AAAAAAAAAAAAAAAAAAAAAAAAA/////////////////4AAAAAAAAAAAAAAAAAAAAAAAAD/////////////////gB+AfAAADAQANwAAAAAAAAAAAf////////////////+Af+H/AAAMDAAnAAAAAAAAAAAB/////////////////4D/8ccGAwxsACcAAAAAAAAAAAH/////////////////gf+7g5+P3P/+NwAAAAAAAAAAAf////////////////+Bn9uBud3tzv83AAAAAAAAAAAB/////////////////4Gf24A52O+MRzcAAAAAAAAAAAH/////////////////gT/bgDjYD4x/NwAAAAAAAAAAAf////////////////+Bv9uBuNgPjv93AAAAAAAAAAAB/////////////////4G7+cO52P3O53cAAAAAAAAAAAH/////////////////gb/x/x/f3O//dwAAAAAAAAAAAf////////////////+B38B+D4+Mdn83AAAAAAAAAAAB/////////////////4D/gAAAAAAAAAAAAAAAAAAAAAD/////////////////gH+AAAAAAAAAAAAAAAAAAAAAAP////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAf////////////n///wAAAAAAAAAAAAAAAAAAAAAAAAAf//wB//+AH//AA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        },
        "presentationEdited": true
      },
      {
        "id": "layer-09",
        "name": "Cocktail title and lower lettering",
        "logicalId": "headline",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-09.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-09.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-09.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-09.webp",
        "prompt": "Extract the complete large title block at the LOWER LEFT: the large yellow word COCKTAIL, the thin vertical white word BAR immediately beside it, and both white lines INSTAGRAM and MENU COCKTAIL below it. Keep this entire four-part title block exactly as printed in the source, with the original letterforms, sizes, spacing, colors and coordinates. Do not redesign or rewrite it. Only the original letter strokes remain opaque; all photographic scenery and spaces between letters are transparent.",
        "origin": "model_i2rgba_v2",
        "role": "text",
        "bounds": [
          45,
          507,
          516,
          750
        ],
        "inspectionCrop": [
          33,
          495,
          528,
          762
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 132,
          "data": "AAf8AAAfwAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AAf/8AAf/4A/4AP/////w//4A/8f+AAAAAAAAAwD//8AD//4AH//wD/gB//////D//gD/x/4AAAP/gH//AP//4Af//wA///wP+AH/////8P/+AP/H/gAAD//g//4B///wD///gH///A/4A//////w//4A/8f+AAAfAPHgAAP///gf///A///+D/gD//////D//gD/x/4AADgAOwAAA////B///8D///8P+AP+////8f/+AP/H/gAAMAAeAAAH///8P///4f///w/4B/7////x//8A/8f+AAAgAA4AAAf///x////h////j/gP/P////H//wD/x/4AAGAADAAAB/8f/n/wf/H/w/+P+A/8////4f//AP/H/gAAYAAMAAAP/g/+f/A/8/+B/4/4H/gAf+AB//8A/8f+AABgAAwAAA/8B/5/4D/z/4D/j/gf+AB/4AH//wD/x/4AAGAADAAAD/wD/n/gH/v/AP+P+D/wAH/gAf//AP/H/gAAYAAMAAAP/AP+f+Af+/8A/4/4P+AAf+AD//8A/8f+AABgAAwAAA/8A/7/4B/7/wD/j/g/4AB/4AP//4D/x/4AAGAADAAAD/wD/v/gH/v/AP+P+H/gAH/gA///gP/H/gAAYAAMAAAP/AP+/+Af+/8A/4/4f8AAf+AD//+A/8f+AAB//g6//w/8A/7/4B/7/wD/j/j/wAB/4AP8/4D/x/4AAH//////D/wD/v/gH/v/AP+P+P+AAH/gA/z/gP/H/gAAAAAAAAAP/AP+/+Af+/8A/4/5/4AAf+AD/P+A/8f+AAAAAAAAAA/8Af7/wB/7/wB/j/v/AAB/4Af8/4D/x/4AAAAAAAAfD/wAAH/AH/v/AAAP+/8AAH/gB/z/gP/H/gAAAAAAAP4P/AAAf8Af+/8AAA/7/gAAf+AH/P/A/8f+AAAAAAAPwA/8AAB/wB/7/wAAD//+AAB/4Af8/8D/x/4AAAAAAf8AD/wAAH/AH/v/AAAP//4AAH/gB/h/wP/H/gAAAAAf5gAP/AAAf8Af+/8AAA///AAAf+AH+H/A/8f+AAAAAf4GAA/8AAB/wB/7/wAAD//8AAB/4Af4f8D/x/4AAAA/wAYAD/wAAH/gH/v/AAAP//wAAH/gD/h/wP/H/gAAA/wABgAP/AAAf+Af+/8AAA///gAAf+AP+H/A/8f+AAAfwAAGAA/8AAB/4B/7/wAAD//+AAB/4A/4f+D/x/4AAH8AAAYAD/wAAH/gH/v/AAAP//4AAH/gD/h/4P/H/gAAfgAABgAP/AAAf+Af+/8AAA///wAAf+AP8D/g/8f+AAAf4AAGAA/8AAB/4B/7/wAAD///AAB/4A/wP+D/x/4AAAH/AAYAD/wAAH/gH/v/AAAP//8AAH/gH/A/4P/H/gAAAA/wBgAP/AAAf+Af+/8AAA///4AAf+Af8D/w/8f+AAAAAP4GAA/8AAB/4B/7/wAAD///gAB/4B/wP/D/x/4AAAAAH+YAD/wB/n/gH/v/AH+P//+AAH/gH/A/8P/H/gAAAAAB/wAP/AP+f+Af+/8A/4/+/8AAf+Af8D/w/8f+AAAAAAAP8A/8A/5/4B/7/wD/j/z/wAB/4B/gH/j/x/4AAAAAAAB/D/wD/n/gH/v/AP+P/H/AAH/gH///+P/H/gAAAAAAAAcP/AP+f+Af+/8A/4/4f+AAf+A////4/8f+AAAAAAAAAA/8A/5/4B/7/wD/j/g/4AB/4D////j/x/4AAAAAAAAAD/wD/n/gH/v+AP+P+D/gAH/gP///+P/H/gAAAAAAf8AP/AP+f+Af+/4A/4/4P/AAf+A////4/8f+AAAH/4P/+A/8A/5/4B/7/wD/j/gf+AB/4H////j/x/4AAB4BxgAcD/wD/n/gH/v/AP+P+B/4AH/gf////P/H/gAAOABsAA4P/AP+f+Af+/8A/4/4H/gAf+B////8/8f+AAAwAHgABg/8A/5/4D/z/wD/j/gP/AB/4H////z/x/4AADAAOAACD/wH/n/gP/P/gf+P+A/8AH/gf8AP/P/H/gAAYAA4AAMH/x/+f/j/8f/H/4/4D/4Af+B/wA/8/8f///hgADgAAwf///5////x////j/gH/gB/4P/AD/z/x///+GAAEAADB////D///+H///8P+Af+AH/g/8AH/P/H///4YAAQAAMD///8H///wP///w/4A/8Af+D/wAf+/8f///hgABAAAwP///gf///A///+D/gD/wB/4P+AB/7/x///+GAAEAADAf//8A///4B///4P+AP/AH/g/4AH/v/H///4YAAQAAMA///gB///AD///A/4Af+Af+D/gAf+/8f///hgABgAAwB//8AD//4AH//wD/gB/4B/4P+AA/7/x///+H//////AB//AAD/+AAH/8AP+AD/wH/g/4AD/v/H///4f/////8AAfAAAAeAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////AAAAAAAAAAAAAAAAAAH////////////////////////8AAAAAAAAAAAAAAAAAf////////////////////////wAAAAAAAAAAAAAAAAB/////////////////////////AAAAAAAAAAAAAAAAAH////////////////////////8AAAAAAAAAAAAAAAAAf////////////////////////wAAAAAAAAAAAAAAAAB/////////////////////////AAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////gAAAAAAAAAAAAAAAAH////////////////////////+AAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAB/////////////////////////AAAAAAAAAAAAAAAAAH////////////////////////8AAAAAAAAAAAAAAAAAf////////////////////////wAAAAAAAAAAAAAAAAB/////////////////////////AAAAAAAAAAAAAAAAAH////////////////////////8AAAAAAAAAAAAAAAAAA///////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Afj/8fA4cDwAH4AfwA/AUB5//BgAgIAAAAAAAAAAAH+D+f/x+Hz4fgA/4D/gP+D4P//8P4Hx8AAAAAAAAAAAf4P5//H8fPh+AH/wf/B/8Pg///w/wfHwAAAAAAAAAAB/g/n/8fx8+H4A//j/+H/4+H7//j/B8fAAAAAAAAAAAH+H+f/x/Hz4fgH/+P/4//z4fP/+f8Hx+AAAAAAAAAAAf4f5+BH8fPh+Afj9+Pj4/Pj8f/x/wfH4AAAAAAAAAAB/h/nwAf58+H4B8P34+Ph8+fgHwH/B8fAAAAAAAAAAAH+H+fAB/nz4fgHw/fD4+Hz5+AfAf8Hx8AAAAAAAAAAAf8f5+AH+fPh+AfD98Pz4fPnwB8D/4fHwAAAAAAAAAAB/x/n4Af58+H4B8P3w/fh8+/AHwPvh8fAAAAAAAAAAAH/H+fgB/3z4fgHw/fD5+Hz74AfA++Hx8AAAAAAAAAAAf8f5+AH/fPh+AfAB8Pj4AP/gB8D74fHwAAAAAAAAAAB/z/n4Af98+H4B8AHw+PgA/8AHwPvh8fAAAAAAAAAAAH/P+f/h//z4fgHwAfD4+AD/wAfA++Hx8AAAAAAAAAAAf8/5/+H//Ph+AfAB8Pn4AP/AB8D74fHwAAAAAAAAAAB/z/n/4ff8+H4B8AHw+fgA/8AHwfPx8fAAAAAAAAAAAH/v+f/h9/z4fgHwAfD5+AD/4AfB8/Hx8AAAAAAAAAAAfe/5/+H3/Ph+AfAB+Pn4AP/gB8Hx8fHwAAAAAAAAAAB9/vnwAff8+H4B8Hn4/fg8/+AHwfHx8fAAAAAAAAAAAH3++fAB8/z4fgHw/fj9+Hz/8AfB8fDx+AAAAAAAAAAAff758AHz/Ph+AfD9+P34fP/wB8H/8PH4AAAAAAAAAAB9/vnwAfP8+H4B8P34/fB8+fAHw//w8fgAAAAAAAAAAH3++fAB8/z4fgHw/fj88Hz5+AfD//jx+AAAAAAAAAAAfP758AHx/Ph+AfD9+Pj4fPj4B8P/+PH4AAAAAAAAAAB8/PnwAfH8+H4B8P34+Pj8+PwHw//58fgAAAAAAAAAAHz8+f/x8fx//AH/+f/4//z4fAfD4Pnx//AAAAAAAAAAfPz5//Hx/H/8Af/4//j//Ph8B8Pg+PH/8AAAAAAAAAB8/Pn/8fD8f/wA//D/8H/4+D4Hx+D58f/wAAAAAAAAAHz8+f/x8Pw/+AB/8H/wf/D4PwfH4H3x//AAAAAAAAAAfHz5//Hw/B/wAB/AP8Af4Pg/B4fAfPH/8AAAAAAAAA"
        },
        "presentationEdited": true
      },
      {
        "id": "layer-10",
        "name": "Upper-left hashtag",
        "logicalId": "hashtag",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-10.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-10.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-10.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-10.webp",
        "prompt": "Extract only the small white text #CocktailNight in the upper-left corner. Preserve the exact original letters, typeface, spacing, size, color and position on the full original canvas. Everything except this one original hashtag is transparent.",
        "origin": "model_i2rgba_v2",
        "role": "text",
        "bounds": [
          52,
          56,
          221,
          79
        ],
        "inspectionCrop": [
          40,
          44,
          233,
          91
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 169,
          "height": 23,
          "data": "AAAAAAAAAAEAAAAAccAAAAAAAAAAAAYYB+AAAAADgAwAAHHnADngAA4ADAAHPB/4AAAAA8AOAAB554B54AAeAB4ADzg//AAAAAPAHgAAeefAeeAAHwAeAA44fD4AAAADwB4AADHn4HjAAP8AHgAOePgfAYAPg8P/B8Bx5/B4wH/vfD8Af/3wHw/wP+PH/9/4cef4eeH/7/9/gH//8A+//H/zz///+Hnn+Hnj/8///4B//+APvnz989+f//x55/x55//Pj78APvngAjw++POfHhw8eee+eefPzw++ADzx4AA8PvBz/h4A/Hnnv3nnx88PngB98eAAfB7wM/weB/x555954/+PD54A//3gA3we8AP+Hh/8eeeP+eP/jw+eAP/98A98HvAD/h4//Hnnj/nj/w8PngB//PAPfB7wM98ePDz554f55/wPD54AOcD4Hzw++HPPnnx8+eeD+efgDw+eAHngfD4//n/3z59//Pnngfnn/w8PnwB54D/8H/w/58ff///554H5///PD5+AccAf+A/wH+OHz5//+eeA+e//7w+fgAAAAAAAAAAAAAAAAAAAAAAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAA="
        }
      },
      {
        "id": "layer-11",
        "name": "Red QR badge",
        "logicalId": "qr_badge",
        "src": "assets/decompositions/01_cocktail_glass/layers/layer-11.webp",
        "native": "assets/decompositions/01_cocktail_glass/native/layer-11.webp",
        "alpha": "assets/decompositions/01_cocktail_glass/alpha/layer-11.webp",
        "original": "assets/decompositions/01_cocktail_glass/original/layer-11.webp",
        "prompt": "Extract the complete red rounded-square QR badge with its right-pointing triangular arrow at left-center. Preserve the exact original red silhouette and the original white QR pixel pattern. Keep both red and white areas inside this badge fully opaque; only the outside is transparent. Exclude the adjacent caption, social symbols and background. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "graphic",
        "bounds": [
          54,
          288,
          248,
          454
        ],
        "inspectionCrop": [
          42,
          276,
          260,
          466
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 194,
          "height": 166,
          "data": "AB////////////////////////AAAAAAAAD////////////////////////+AAAAAAAB/////////////////////////wAAAAAAB//////////////////////////AAAAAAA//////////////////////////4AAAAAAP/////////////////////////+AAAAAAH//////////////////////////wAAAAAD//////////////////////////+AAAAAA///////////////////////////gAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////+AAAAAH///////////////////////////gAAAAB///////////////////////////4AAAAAf//////////////////////////+AAAAAH///////////////////////////wAAAAB///////////////////////////8AAAAAf///////////////////////////gAAAAH///////////////////////////8AAAAB////////////////////////////gAAAAf///////////////////////////8AAAAH////////////////////////////gAAAB////////////////////////////8AAAAf////////////////////////////gAAAH////////////////////////////8AAAB/////////////////////////////gAAAf////////////////////////////8AAAH/////////////////////////////gAAB/////////////////////////////8AAAf/////////////////////////////gAAH/////////////////////////////8AAB//////////////////////////////gAAf/////////////////////////////8AAH//////////////////////////////gAB//////////////////////////////8AAf//////////////////////////////gAH//////////////////////////////8AB///////////////////////////////gAf//////////////////////////////8AH///////////////////////////////gB///////////////////////////////8Af///////////////////////////////gH///////////////////////////////4B////////////////////////////////Af///////////////////////////////wH///////////////////////////////4B///////////////////////////////8Af//////////////////////////////+AH///////////////////////////////AB///////////////////////////////gAf//////////////////////////////wAH//////////////////////////////4AB//////////////////////////////8AAf/////////////////////////////+AAH/////////////////////////////+AAB//////////////////////////////AAAf/////////////////////////////gAAH/////////////////////////////wAAB/////////////////////////////4AAAf////////////////////////////8AAAH////////////////////////////+AAAB/////////////////////////////AAAAf////////////////////////////gAAAH////////////////////////////wAAAB////////////////////////////4AAAAf///////////////////////////8AAAAH///////////////////////////+AAAAB////////////////////////////AAAAAf///////////////////////////gAAAAH///////////////////////////wAAAAB///////////////////////////4AAAAAf//////////////////////////+AAAAAH///////////////////////////gAAAAB///////////////////////////4AAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAB///////////////////////////wAAAAAf//////////////////////////8AAAAAH///////////////////////////AAAAAA///////////////////////////wAAAAAP//////////////////////////4AAAAAD//////////////////////////+AAAAAAf//////////////////////////AAAAAAD//////////////////////////wAAAAAA//////////////////////////4AAAAAAD/////////////////////////8AAAAAAAf////////////////////////+AAAAAAAD/////////////////////////AAAAAAAAP////////////////////////AAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAH8AAAAAAAA=="
        },
        "presentationEdited": true
      }
    ],
    "presentationNote": "QR and social-platform marks are locally blurred in the displayed input and affected layers.",
    "preview": "assets/decompositions/01_cocktail_glass/final/preview.webp"
  },
  {
    "id": "04_clockwork_orchard",
    "title": "Clockwork Orchard",
    "subtitle": "One source image, a separate prompt for each layer",
    "category": "Layer decomposition",
    "model": "Qwen-Image-Edit",
    "accent": "#64748B",
    "width": 1024,
    "height": 1024,
    "input": "assets/decompositions/04_clockwork_orchard/final/input.webp",
    "inputOriginal": "assets/decompositions/04_clockwork_orchard/final/inputOriginal.webp",
    "final": "assets/decompositions/04_clockwork_orchard/final/final.webp",
    "thumbnail": "assets/decompositions/04_clockwork_orchard/final/thumbnail.webp",
    "layers": [
      {
        "id": "layer-01",
        "name": "Sunset and distant orchard",
        "logicalId": "background",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-01.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-01.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-01.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-01.webp",
        "prompt": "Remove only the TWO FLYING INSECTS, the largest pear tree cropped at the right edge, the large foreground pear tree and dark canopy cropped at the left/bottom edges, the green ladder, the wicker basket and the tilted grain barrel. KEEP the two medium-sized pear trees standing on the terraces: the green-leaved golden-pear tree near the center, and the round black-canopied gold-pear tree just right of it. Also keep every smaller distant orchard tree, original sun and rays, and all original curved ochre terrace edges. Preserve all scenery not occupied by the explicitly removed objects. Return a complete opaque rectangular landscape in the exact original framing.",
        "origin": "model_i2rgba_v2",
        "role": "background",
        "bounds": [
          0,
          0,
          1024,
          1024
        ],
        "inspectionCrop": [
          0,
          0,
          1024,
          1024
        ],
        "editable": false,
        "model": "Qwen-Image-Edit"
      },
      {
        "id": "layer-02",
        "name": "Small mechanical moth",
        "logicalId": "small_moth",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-02.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-02.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-02.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-02.webp",
        "prompt": "Extract only the smaller flying mechanical moth on the left above the sun. Include both patterned bronze-and-green wings, its narrow banded body, gears, legs and both fine curled antennae. Preserve the exact original wing spread, every metal outline and original location. Exclude the sun rays, orchard and larger bee. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          149,
          313,
          420,
          495
        ],
        "inspectionCrop": [
          137,
          301,
          432,
          507
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 172,
          "data": "AH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////wAAAAAAAHAAAAAAAAAAAAAAAAAAAAAA////////////gAAAAAAB/AAAAAAAAAAAAAAAAAAH/wB////////////AAAAAAAH/gAAAAAAAAAAAAAAAAD//wH////////////AAAAAAAPngAAAAAAAAAAAAAAAB///AP///////////+AAAAAAAcHAAAAAAAAAAAAAAAA///+A////////////8AAAAAAAAHAAAAAAAAAAAAAAAP///4B////////////8AAAAAAAAOAAAAAAAAAAAAAAD////wH////////////4AAAAAAAAcAAAAAAAAAAAAAA/////Af////////////wAAAAAAAA4AAAAAAAAAAAAAP////8A/////////////wAAAAAAABwAAAAAf8AAAAAD/////wD/////////////gAAAAAAADgAAAAP/wAAAAA//////AP/////////////AAAAAAAAGAAAAH4fAAAAAP/////8Af/////////////AAAAAAAAcAAAB8A4AAAAD//////wB/////////////+AAAAAAAAwAAAPAAAAAAA//////+AD/////////////8AAAAAAADgAABwAAAAAAH//////4AH/////////////wAAAAAAAGAAAeAAAAAAA///////gAf/////////////gAAAAAAAcAADgAAAAAAP//////+AA//////////////gAAAAAAAwAAcAAAAAAH///////wAB//////////////gAAAAAADAADAAAAAAB///////+AAD//////////////AAAAAAAEAAYAAAAAAP///////4AAP/////////////+AAAAAAAQADgAAAAAD////////AAAf/////////////8AAAAAABAAMAAAAAA////////8AAB//////////////4AAAAAAEABgAAAAAP////////gAAD//////////////wAAAAAAQAOAAAAAB////////+AAAP//////////////gAAAAABABwAAAAAP////////wAAA///////////////AAAAAAEAGAAAAAB/////////AAAB///////////////AAAAAAYA4AAAAAf////////4AAAH//////////////+AAAAABgHAAAAAD/////////AAAAf//////////////8AAAAAGAcAAAAA/////////8AAAA///////////////4AAAAAYDgAAAAH/////////gAAAD///////////////gAAAB9+OAAAAB/////////+AAAAP///////////////AAAB///4AAAAP/////////wAAAA///////////////+AAAP///gAAAD/////////+AAAAB///////////////8AAB///+AAAAf/////////wAAAAH///////////////4AAP///+AAAH//////////AAAAAP///////////////4AD////+AAB//////////4AAAAA////////////////wAP////8AAP/////////+AAAAAB////////////////gB/////wAB//////////wAAAAAD////////////////AH/////gAf//////////AAAAAAP///////////////+Af////8AD//////////4AAAAAAf///////////////8B/////wA///////////AAAAAAA////////////////4H/////AH//////////8AAAAAAD////////////////wf////4B///////////gAAAAAAH////////////////j/////AP//////////+AAAAAAAf////////////////f////4B///////////wAAAAAAA//////////////////////wf///////////AAAAAAAB//////////////////////j///////////4AAAAAAAD/////////////////////+f///////////AAAAAAAAH/////////////////////////////////8AAAAAAAAH/////////////////////////////////gAAAAAAAAP////////////////////////////////+AAAAAAAAAf////////////////////////////////wAAAAAAAAAf///////////////////////////////+AAAAAAAAAAH///////////////////////////////4AAAAAAAAAAD///////////////////////////////AAAAAAAAAAAB//////////////////////////////4AAAAAAAAAAAAf/////////////////////////////gAAAAAAAAAAAf/////////////////////////////8AAAAAAAAAAAP//////////////////////////////gAAAAAAAAAAD//////////////////////////////8AAAAAAAAAAA///////////////////////////////gAAAAAAAAAAP//////////////////////////////8AAAAAAAAAAD///////////////////////////////gAAAAAAAAAAf//////////////////////////////8AAAAAAAAAAH///////////////////////////////gAAAAAAAAAA///////////////////////////////8AAAAAAAAAAH///////////////////////////////AAAAAAAAAAB///////////////////////////////wAAAAAAAAAAH/////////////////////////////D4AAAAAAAAAAB//////////////////////////////gAAAAAAAAAAAH//////////////////////////////AAAAAAAAAAAAf//////////////////////////////AAAAAAAAAAAB//////////////////////////////+AAAAAAAAAAAH//////////////////////////////8AAAAAAAAAAAf//////////////////////////////4AAAAAAAAAAB///////////////////////////////wAAAAAAAAAAH///////////////////////////////AAAAAAAAAAAf//////////////////////////////8AAAAAAAAAAA///////////////////////////////4AAAAAAAAAAD///////////////////////////////gAAAAAAAAAAH///////////////////////////////AAAAAAAAAAAP//////////////////////////////8AAAAAAAAAAA///////////////////////////////4AAAAAAAAAAB///////////////////////////////gAAAAAAAAAAD//////////////////////////////+AAAAAAAAAAAH//////////////////////////////4AAAAAAAAAAAP////////////v/////////////////gAAAAAAAAAAAf///////////5/////////////////+AAAAAAAAAAAA////////////n//////9//////////4AAAAAAAAAAAB///////////8///////n//////////gAAAAAAAAAAAD///////////z/////8+f/////////8AAAAAAAAAAAAH//////////+f/////h5//////////wAAAAAAAAAAAAP//////////x/////+Hn/////////+AAAAAAAAAAAAAP/////////+H/////4ff/////////4AAAAAAAAAAAAAf/////////4//////h///////////AAAAAAAAAAAAAAf/////////D/////8H//////////8AAAAAAAAAAAAAA/////////4P/////wf//////////gAAAAAAAAAAAAAA/////////B//////B/3////////8AAAAAAAAAAAAAAB////////8H/////4P/f////////gAAAAAAAAAAAAAAB////////g//////g/9////////8AAAAAAAAAAAAAAAD///////8H/////+//z////////AAAAAAAAAAAAAAAAD///////gf///////fP///////4AAAAAAAAAAAAAAAAD//////8B///////98///////+AAAAAAAAAAAAAAAAAD//////gP/////8/Hz///////wAAAAAAAAAAAAAAAAAA/////8A//////jwfH//////8AAAAAAAAAAAAAAAAAAB/////gD/////8PB8f//////AAAAAAAAAAAAAAAAAAAD////8AP/////g8Hw//////gAAAAAAAAAAAAAAAAAAAD////gA/////8DwfD/////8AAAAAAAAAAAAAAAAAAAAH///8AH/////wOB8H/////AAAAAAAAAAAAAAAAAAAAAH///AAf////+A4Hwf////wAAAAAAAAAAAAAAAAAAAAAH//wAB/////4HgfA////wAAAAAAAAAAAAAAAAAAAAAAD/8AAH/////AeB8D///8AAAAAAAAAAAAAAAAAAAAAAAAeAAA/////4B4HwP///AAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////gHAfAf//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8A8B8B//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////wDwHwD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////+AeAfAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////wB4B8AD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////+AHgHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////4A8AfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////AHwB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////4A+AHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////AH4AcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///4AfABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////gB8AHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///8AHgAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////gAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8ABgAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///AAOAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//4AAwADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//+AAHAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//wAAcAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/+AADgADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAOAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAwAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAHAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAcAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAABgAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAA="
        }
      },
      {
        "id": "layer-03",
        "name": "Large mechanical bee",
        "logicalId": "large_bee_hero",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-03.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-03.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-03.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-03.webp",
        "prompt": "Extract only the large flying mechanical bee in the upper-right half. Include both tall green-and-copper wings with every gear and rib, its black compound eye, curved antennae, striped abdomen, all articulated legs and fine bristles. Preserve the exact original pose, colors, metal texture and opaque material. Exclude every tree, pear, sky and the other insect. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "hero",
        "bounds": [
          491,
          74,
          834,
          372
        ],
        "inspectionCrop": [
          479,
          62,
          846,
          384
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 222,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////gAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAH////+AAAAAAAAAAAAf//4AAAAAAAAAAAAAAAAAAAAA/////4AAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAAAD/////wAAAAAAAAAAP////4AAAAAAAAAAAAAAAAAAAA//////AAAAAAAAAAH/////wAAAAAAAAAAAAAAAAAAAD/////8AAAAAAAAAD//////gAAAAAAAAAAAAAAAAAAAf/////wAAAAAAAAAf/////+AAAAAAAAAAAAAAAAAAAB//////AAAAAAAAAP//////4AAAAAAAAAAAAAAAAAAAP/////8AAAAAAAAD///////wAAAAAAAAAAAAAAAAAAB//////4AAAAAAAA////////AAAAAAAAAAAAAAAAAAAP//////gAAAAAAAP///////8AAAAAAAAAAAAAAAAAAA//////+AAAAAAAD////////wAAAAAAAAAAAAAAAAAAD//////4AAAAAAA/////////AAAAAAAAAAAAAAAAAAAf//////gAAAAAAP////////8AAAAAAAAAAAAAAAAAAD///////AAAAAAD/////////gAAAAAAAAAAAAAAAAAAP//////8AAAAAAP////////+AAAAAAAAAAAAAAAAAAB///////wAAAAAH/////////4AAAAAAAAAAAAAAAAAAH///////AAAAAA//////////gAAAAAAAAAAAAAAAAAA///////8AAAAAH/////////+AAAAAAAAAAAAAAAAAAH///////wAAAAB//////////wAAAAAAAAAAAAAAAAAAf///////AAAAAf//////////AAAAAAAAAAAAAAAAAAB///////8AAAAD//////////8AAAAAAAAAAAAAAAAAAP///////wAAAA///////////gAAAAAAAAAAAAAAAAAA////////AAAAH//////////8AAAAAAAAAAAAAAAAAAD///////8AAAA///////////wAAAAAAAAAAAAAAAAAAf///////wAAAP///////////AAAAAAAAAAAAAAAAAAD////////AAAD///////////4AAAAAAAAAAAAAAAAAAP///////8AAAP///////////gAAAAAAAAAAAAAAAAAB////////wAAD///////////8AAAAAAAAAAAAAAAAAAH///////+AAA////////////wAAAAAAAAAAAAAAAAAAf///////4AAH///////////+AAAAAAAAAAAAAAAAAAB////////AAB////////////4AAAAAAAAAAAAAAAAAAP///////4AAP////////////AAAAAAAAAAAAAAAAAAA////////gAA////////////8AAAAAAAAAAAAAAAAAAH///////+AAP////////////gAAAAAAAAAAAAAAAAAAf///////4AB////////////+AAAAAAAAAAAAAAAAAAB////////wAf////////////wAAAAAAAAAAAAAAAAAAP////////AD/////////////AAAAAAAAAAAAAAAAAAA////////+A/////////////4AAAAAAAAAAAAAAAAAAD////////4H/////////////gAAAAAAAAAAAAAAAAAAP////////g/////////////8AAAAAAAAAAAAAAAAAAB////////8H/////////////gAAAAAAAAAAAAAAAAAAH////////w/////////////+AAAAAAAAAAAAAAAAAAA/////////P/////////////wAAAAAAAAAAAAAAAAAAD////////8//////////////AAAAAAAAAAAAAAAAAAAP////////n/////////////4AAAAAAAAAAAAAAAAAAB///////////////////////AAAAAAAAAAAAAAAAAAAH//////////////////////8AAAAAAAAAAAAAAAAAAAf//////////////////////gAAAAAAAAAAAAAAAAAAB//////////////////////8AAAAAAAAAAAAAAAAAAAH//////////////////////gAAAAAAAAAAAAAAAAAAA//////////////////////+AAAAAAAAAAAAAAAAAAAH//////////////////////wAAAAAAAAAAAAAAAAAAAf/////////////////////+AAAAAAAAAAAAAAAAAAAB//////////////////////wAAAAAAAAAAAAAAAAAAAP/////////////////////+AAAAAAAAAAAAAAAAAAAA//////////////////////4AAAAAAAAAAAAAAAAAAAD/////////////////////+AAAAAAAAAAAAAAAAAAAAP/////////////////////wAAAAAAAAAAAAAAAAAAAA/////////////////////+AAAAAAAAAAAAAAAAAAAAH/////////////////////wAAAAAAAAAAAAAAAAAAAA/////////////////////8AAAAAAAAAAAAAAAAAAAAD/////////////////////gAAAAAAAAAAAAAAAAAAAAP////////////////////4AAAAAAAAAAAAAAAAAAAAB////////////////////8AAAAAAAAAAAAAAAAAAAAAH////////////////////4AAAAAAAAAAAAAAAAAAAAAf////////////////////4AAAAAAAAAAAAAAAAAAAAD/////////////////////gAAAAAAAAAAAAAAAAAAAAP////////////////////+AAAAAAAAAAAAAAAAAAAAB/////////////////////4AAAAAAAAAAAAAAAAAAAAH/////3///////////////gAAAAAAAAAAAAAAAAAAAA/////+///////////////+AAAAAAAAAAAAAAAAAAAAD/////n///////////////wAAAAAAAAAAAAAAAAAAAAP////5///////////////+AAAAAAAAAAAAAAAAAAAAB////+H///////////////wAAAAAAAAAAAAAAAAAAAAP////x////////////////AAAAAAAAAAAAAAAAAAAAB/////v///////////////wAAAAAAAAAAAAAAAAAAAAn////////////////////+AAAAAAAAAAAAAAAAAAAAD/////////////////////4AAAAAAAAAB/AAAAAAAAAf////////////////////+AAAAAAAAAAP/gAAAAAAAD/////////////////////wAAAAAAAAAB+PgAAAAAABf////////////////////8AAAAAAAAAAHwPgAAAAAAn/////////////////////gAAAAAAAAAAOAPgAAAAAD/////////////////////8AAAAAAAAAAAAAPAAAAAAP////////////////////+AAAAAAAAAAAAAAOAAAAAA/////////////////////gAAAAAAAAAAAAAAeAAAAAP////////////////////8AAAAAAAAAAAAAAAcAAAAAf///////////////////4AAAAAAAAAAAAAAAA4AAAAD///////////////////+AAAAAAAAAAAAAAAABwAAAA///////////////////8AAAAAAAAAAAAAAAAADAAAAB////////////////+AAAAAAAAAAAAAAAAAAAAGAAAAH////////////////AAAAAAAAAAAAAAAB/+AAAcAAAB/////////////////gAAAAAAAAAAAAAA///AAA4AAAH/////////////////gAAAAAAAAAAAAAf8D/AABgAAAP/////////////////wAAAAAAAAAAAAP4AAfgADAf3B//////////////////4AAAAAAAAAAAA+AAAPAAOD/+P//////////////////4AAAAAAAAAAAHwAAAPAAYf/////////////////////wAAAAAAAAAAB+AAAAPABz//////////////////////wAAAAAAAAAAHwAAAAOAD///////////////////////wAAAAAAAAAAfAAAAAcAP///////////////////////gAAAAAAAAAD8AAAAA4B////////////////////////AAAAAAAAAAPgAAAABwP////////////////////////AAAAAAAAAAeAAAAADg////////////////////////8AAAAAAAAAAAAAAAAHP////////////////////////8AAAAAAAAAAAAAAAAP/////////////////////////4AAAAAAAAAAAAAAAAf/////////////////////////wAAAAAAAAAAAAAAAA//////////////////////////wAAAAAAAAAAAAAAAP//////////////////////////gAAAAAAAAAAAAAAA///////////////////////////AAAAAAAAAAAAAAAH//////////////////////////+AAAAAAAAAAAAAAA///////////////////////////8AAAAAAAAAAAAAAD///////////////////////////4AAAAAAAAAAAAAAf///////////////////////////wAAAAAAAAAAAAAB////////////////////////////gAAAAAAAAAAAAAH////////////////////////////AAAAAAAAAAAAAAf///////////////////////////+AAAAAAAAAAAAAD////////////////////////////4AAAAAAAAAAAAAP////////////////////////////wAAAAAAAAAAAAA/////////////////////////////gAAAAAAAAAAAAD////////////////////////////+AAAAAAAAAAAAAP////////////////////////////8AAAAAAAAAAAAA/////////////////////////////wAAAAAAAAAAAAD/////////////////////////////AAAAAAAAAAAAAH////////////////////////////+AAAAAAAAAAAAAf////////////////////////////8AAAAAAAAAAAAB/////////////////////////////4AAAAAAAAAAAAH/////////////////////////////gAAAAAAAAAAAAP/////////////////////////////AAAAAAAAAAAAA/////////////////////////////8AAAAAAAAAAAAD/////////////////////////////4AAAAAAAAAAAAH/////7///////////////////////wAAAAAAAAAAAAP/////n///////////////////////AAAAAAAAAAAAA/////8P//////////////////////8AAAAAAAAAAAAB/////w///////////////////////wAAAAAAAAAAAAD/////B///////////////////////gAAAAAAAAAAAAH////4H///////////////////////AAAAAAAAAAAAAP////Af/////////4f///////////8AAAAAAAAAAAAAf///4B///////+/8A////////////wAAAAAAAAAAAAA////gH//////vx/AB////////////gAAAAAAAAAAAAD///8A///////AH8AD///////////+AAAAAAAAAAAAAP///gD+ffj//8Af4AH///////////4AAAAAAAAAAAAAf//8AP85+P//8A/wAf///////////gAAAAAAAAAAAAB///gA/wH4AR/4D/AB///////////+AAAAAAAAAAAAAD//8AD/AfgAD/wH8AH///////////4AAAAAAAAAAAAAP//gAP8B/AAP/gf4AP///////////gAAAAAAAAAAAAAf/+AA/4H8AAP/B/gA///////////+AAAAAAAAAAAAAB//4AD/gfwAA/8H/AD///////////4AAAAAAAAAAAAAD//AAP8D/AAB/4f+AP///////////gAAAAAAAAAAAAAP/wAA/wP8AAD/w/4Af///////////AAAAAAAAAAAAAAfuAAD/A/wAAP/j/gB///////////8AAAAAAAAAAAAAA84AAH4D/AAAf+P/AH///////////wAAAAAAAAAAAAABzgAAPgH8AAB/4/+Af/7/////////AAAAAAAAAAAAAADMAAB8AfwAAP/h/4A//3////////8AAAAAAAAAAAAAAAAAAPwB/AAA/+H/wD//j////////wAAAAAAAAAAAAAAAAAA/AH4AAD/4P/AP//H////////AAAAAAAAAAAAAAAAAAD8AfAAAH/A/+A//+H///////8AAAAAAAAAAAAAAAAAAPwD8AAAP4D/4D//8P///////wAAAAAAAAAAAAAAAAAA/APwAAA/AP/gH//wf///////AAAAAAAAAAAAAAAAAAH8B/AAAH8Af+Af//Af//////8AAAAAAAAAAAAAAAAAAfgH8AAAfwD/4B//8A///////wAAAAAAAAAAAAAAAAAB+AfwAAD+AP/gD//wB//////+AAAAAAAAAAAAAAAAAAH4B+AAAf4A/+AP//gB//////4AAAAAAAAAAAAAAAAAAfAH4AAB/gB/4Af//AB//////gAAAAAAAAAAAAAAAAAB8A/gAAH+AD/AB//8AB/////+AAAAAAAAAAAAAAAAAAPwD+AAAfwAH8AH//wAAf////4AAAAAAAAAAAAAAAAAA/AP4AAD/AAf4Af//gAAP////AAAAAAAAAAAAAAAAAAD4A/gAAP8AB/gB//+AAAf///8AAAAAAAAAAAAAAAAAAPgD+AAB/gAH/AH//AAAAf///wAAAAAAAAAAAAAAAAAA8APwAAH+AAf+Af/8AAAAP///AAAAAAAAAAAAAAAAAADwA/AAAfwAB/4A//4AAAAP//4AAAAAAAAAAAAAAAAAAOAD4AAB+AAH/gAH/wAAAAAP/gAAAAAAAAAAAAAAAAAB4APAAAH4AAf+AAf/gAAAAAH8AAAAAAAAAAAAAAAAAAHAA8AAAPgAB/4AB//AAAAAAHwAAAAAAAAAAAAAAAAAAcADwAAB8AAH/wAH/8AAAAAAAAAAAAAAAAAAAAAAAAADwAPAAAHwAAf/AAf/4AAAAAAAAAAAAAAAAAAAAAAAAAPAA4AAAfAAA/8AB//gAAAAAAAAAAAAAAAAAAAAAAAAB+ADAAADwAAD/4AD//AAAAAAAAAAAAAAAAAAAAAAAAAGYAcAAAPAAAP/gAP/+AAAAAAAAAAAAAAAAAAAAAAAAAZgBwAAA8AAA/+AAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAPAAADgAAB/4AB//gAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAOAAAH/gAD//AAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAA4AAAP+AAP/8AAAAAAAAAAAAAAAAAAAAAAAAAAB/AAADwAAA/4AAf/4AAAAAAAAAAAAAAAAAAAAAAAAAADMAAAPAAAB/gAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AAAH+AAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAPwAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAA"
        }
      },
      {
        "id": "layer-04",
        "name": "Foreground terrace, rim and shadows",
        "logicalId": "foreground_terrace",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-04.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-04.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-04.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-04.webp",
        "prompt": "Extract the entire nearest foreground terrace as one layer: its original curved GOLDEN RIM and the warm textured floor surface beneath the ladder, basket and grain barrel. Keep the original long diagonal shadow bands across this floor, the exact color, cracks, print grain and curved upper boundary. Remove the barrel, basket, ladder and tree trunks or leaves from this surface. This near gold rim is IN FRONT OF the right pear-tree roots and should retain its original occluding shape. Everything above the terrace upper boundary is transparent. Keep original canvas coordinates.",
        "origin": "model_i2rgba_v2",
        "role": "foreground",
        "bounds": [
          75,
          697,
          1024,
          1024
        ],
        "inspectionCrop": [
          63,
          685,
          1024,
          1024
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 88,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////wAAAAAAAAAAAAAAAAAAAAAAAAAH////////////////AAAAAAAAAAAAAAAAAAAAAAAAAP////////////////8AAAAAAAAAAAAAAAAAAAAAAAA//////////////////wAAAAAAAAAAAAAAAAAAAAAAB///////////////////AAAAAAAAAAAAAAAAAAAAAAB///////////////////8AAAAAAAAAAAAAAAAAAAAAB////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAB/////////////////////8AAAAAAAAAAAAAAAAAAAB//////////////////////wAAAAAAAAAAAAAAAAAAB///////////////////////AAAAAAAAAAAAAAAAAAB///////////////////////8AAAAAAAAAAAAAAAAAA////////////////////////wAAAAAAAAAAAAAAAAA/////////////////////////AAAAAAAAAAAAAAAAA/////////////////////////8AAAAAAAAAAAAAAAAf/////////////////////////wAAAAAAAAAAAAAAAf//////////////////////////AAAAAAAAAAAAAAAP//////////////////////////8AAAAAAAAAAAAAAP///////////////////////////wAAAAAAAAAAAAAH////////////////////////////AAAAAAAAAAAAAD////////////////////////////8AAAAAAAAAAAAD/////////////////////////////wAAAAAAAAAAAA//////////////////////////////AAAAAAAAAAAAP/////////////////////////////8AAAAAAAAAAAH//////////////////////////////wAAAAAAAAAAB///////////////////////////////AAAAAAAAAAAP//////////////////////////////8AAAAAAAAAAH///////////////////////////////wAAAAAAAAAB////////////////////////////////AAAAAAAAAAP///////////////////////////////8AAAAAAAAAD////////////////////////////////wAAAAAAAAA/////////////////////////////////AAAAAAAAAP////////////////////////////////8AAAAAAAAB/////////////////////////////////wAAAAAAAAf/////////////////////////////////AAAAAAAAH/////////////////////////////////8AAAAAAAA//////////////////////////////////wAAAAAAAP//////////////////////////////////AAAAAAAD//////////////////////////////////8AAAAAAAf//////////////////////////////////wAAAAAAH///////////////////////////////////AAAAAAA///////////////////////////////////8AAAAAAP///////////////////////////////////wAAAAAB////////////////////////////////////AAAAAAf///////////////////////////////////8AAAAAD////////////////////////////////////wAAAAAf////////////////////////////////////AAAAAD////////////////////////////////////8AAAAA/////////////////////////////////////wAAAAH/////////////////////////////////////AAAAA/////////////////////////////////////8AAAAP/////////////////////////////////////wAAAB//////////////////////////////////////AAAAP/////////////////////////////////////8AAAB//////////////////////////////////////wAAAP//////////////////////////////////////AAAB//////////////////////////////////////8AAAf//////////////////////////////////////wAAD///////////////////////////////////////AAAf//////////////////////////////////////8AAD///////////////////////////////////////wAAf///////////////////////////////////////AAD///////////////////////////////////////8AAf///////////////////////////////////////wAD////////////////////////////////////////AAf///////////////////////////////////////8AD////////////////////////////////////////wAf////////////////////////////////////////AD////////////////////////////////////////8Af////////////////////////////////////////wD/////////////////////////////////////////Af////////////////////////////////////////8D/////////////////////////////////////////wP/////////////////////////////////////////D/////////////////////////////////////////8P/////////////////////////////////////////x//////////////////////////////////////////P/////////////////////////////////////////9//////////////////////////////////////////3////////////////////////////////////////////////////////////////////////////////////8="
        }
      },
      {
        "id": "layer-05",
        "name": "Left foreground pear tree",
        "logicalId": "left_tree",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-05.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-05.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-05.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-05.webp",
        "prompt": "Extract the large foreground pear tree entering from the left edge together with its connected dark lower-edge canopy, copper trunk and gold pears. Preserve its original cropped outline, flat dark leaves, copper branches and grainy decorative texture. Exclude the tilted green barrel, all distant orchard trees and landscape. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          0,
          611,
          285,
          1024
        ],
        "inspectionCrop": [
          0,
          599,
          297,
          1024
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 177,
          "height": 256,
          "data": "AAAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8AAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAD////gAAAAAAAAAAAAAAAAAAAAAAAAAf////AAAAAAAAAAAAAAAAAAAAAAAAAz////8AAAAAAAAAAAAAAAAAAAAAAAADf////wAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAP////8P4AAAAAAAAAAAAAAAAAAAAAAB/////x/w8AAAAAAAAAAAAAAAAAAfwAH/////f//8AAAAAAAAAAAAAAAAAD/wYf////////4AAAAAAAAAAAAAAAAAf/nz/////////gAGAAAAAAAAAAAAAAB///v////////+AA8AAAAAAAAAAAAADH////////////8AHwAAAAAAAAAAAAA+/////////////wAfgAAAAAAAAAAAAH//////////////AB/AB4AAAAAAAAAAf/////////////4AH8AfgAAAAAAAAAD//////////////gAf4H+AAAAAAAAAAP/////////////+AD/h/wAAAAAAAAAA//////////////4AP+f/AAAAAAAAAAD//////////////+Af7/8AAAAAAAAAAP//////////////4B///wAAAAAAAD8A///////////////wH//+AAAAAAAAP/B///////////////AP//4AAAAAAAA/+H//////////////+A///AAAAAAAAD/+f//////////////4B//8AAAAAAAAP/4///////////////AD//gAAAAAAAA//x//////////////8AH/+AAAAAAAAD//j//////////////wAf/gAAAAAAAAP/+D//////////////AB/8AAAAAAAAA//8H/////////////8AHGAAAAAAAAAD//w//////////////4AwAAAAAAAAAAP//P////////////////AAAAAAAAAAA////////////////////gAAf4AAAAAD////////////////////AHj/gAAAAAP///////////////////+B///AAAAAA////////////////////8f//8AAAAAD////////////////////z///wAAAAAP////////////////////////AAAAAA////////////////////////8AAAAAD////////////////////////wAAAAAP///////////////////////+AAAAAA////////////////////////wAAAAAD////////////////////////AAAAAAP///////////////////////4AAAAAA////////////////////////AAAAAAD///////////////////////8AAAAAAP///////////////////////4Dw4AAA////////////////////////+//wAAD///////////////////////////wAAP///////////////////////////gAA////////////////////////////AAD////////////////////////////AAP///////////////////////////8AA////////////////////////////wAD////////////////////////////AAP///////////////////////////8AA////////////////////////////wAD////////////////////////////AAP///////////////////////////+AA////////////////////////////8AD////////////////////////////wAP////////////////////////////AA////////////////////////////8AD////////////////////////////4AP////////////////////////////gA/////////////////////////////AD////////////////////////9///8AP////////////////////////H///wA////////////////////////4P///AD////////////////////////A///+AP///////////////////////4D///4A////////////////////////gP///wD////////////////////////h////AP////////////////////////H///8A////////////////////////+f///gD////////////////////////////+AP////////////////////////////wA////////////////////////////+AD////////////////////////////4AP////////////////////////////wA/////////////////////////////AD////////////////////////////+AP////////////////////////////4A//////////////////////////B//wD/////////////////////////4D//gP/////////////////////////wz/8A/////////////////////////////gD////////////////////////////+AP////////////////////////////4A/////////////////////////////AD////////////////////////////wAP///////////////////////////4AA////////////////////////////wAD////////////////////////////gAP///////////////////////////+AA////////////////////////////4AD////////////////////////////gAP///////////////////////////+AA////////////////////////////wAD///9////////////////////////AAP///z///////////////////////wAA////H///////////////////////AAD///8P//////////////////////+AAP///wH//////////////////////4AA////gPP/////////////////////AAD////AY/////////////////////8AAP///+AD////////////////////jwAA////8AP//////////////////wcAAAD////wA///////////////////AAAAAP////gD//H///////////////8AAAAA/////Af/4B///////////////gAAAAD////+B//gB//////////////+AAAAAP////4H//gD//////////////wAAAAA////3g///AH//////////////AAAAAD////PD//+AP////v////////8AAAAAP///88f//8A////Af/////n//AAAAAA////zx///wD///4B/////+f/gAAAAAD////Pv///gP//jAD/////4/+AAAAAAP///8+8///A//8AAf/////B/wAAAAAA////3/j//+D//wAB/////4AfAAAAAAD////f+P//gP/+AAH/////gf/gAAAAAP/////w8AAA//wAAf////+D//gAAAAA////9/DwAAD//AAB+f///4///AAAAAD////v8EAAAP/4AAHw////n//4AAAAAP///+/wAAAB//gAAOB///+///AAAAAA////z/AAAAH/8AAAAH///7//4AAAAAD///+f4AAAAf/wAAAAfH/////AAAAAAP///x/gAAAD/+AAAAB8P////4AAAAAA///+H+AAAAf/4AAAAHh/////AAAAAAD///wf4AAAB//gAAAAeOf///wAAAAAAP//+B/gAAAP/+AAAAB/z///+AAAAAAA///wH+AAAB//4AAAAH8P///AAAAAAAD//+Af4AAAH///gAAA/A///+AAAAAAAP//4B/wAAA////wAADwD///+AAAAAAA//ngH/AAAD////4AAOAP///4AAAAAAD/8OAf8AAAf////4AA4A////gAAAAAAP/gcA/wAAD/////wADAD////AAAAAAA/8B4D/AAAP/////gAMAP///8AAAAAAD/gDwP+AAD///h//gBwA////4AAAAAAP8APgf4AAP//wH/+APAD////gAAAAAA/4AfB/wAB//8Af/8A8Af///+AAAAAAD/+A/j/gAP//gA//4HgH//8AAAAAAAAP//D//+AB//4AD//g8B9//wAAAAAAAA8f////8AP//gAH/+Hg////gAAAAAAADwP////wB//8AAP/4cH4///AAAAAAAAPgH////gP//gAA//3j+B//8AAAAAAAA/AA////h//+AAB////gP//4AAAAAAAD8IAAf//P//wAAB///mA///gAAAAAAAP44AAf/////AAAD//4MD///AAAAAAAA/nwAA/////4AAAB/8A4P//8AAAAAAAD+fAAB/////gAAAA/gDw///wAAAAAAAP/8AAB////8AAAAAcAfj///gAAAAAAA//wAAH////wAAAABwB/P/x+AAAAAAAD/fAAAP///+AAAAAGAP8//gYAAAAAAAP8AAAAf///4AAAAAAA/z/+AAAAAAAAA/wAAAA////AAAAAAAH/v/4AAAAAAAAD/AAAAD///8AAAAAAAf///gAAAAAAAAP8AAAAP///wAAAAAAB///+AAAAAAAAA/gAAAA////AAAAAAAP///4AAAAAAAAD8AAAAB///4AAAAAAA////AAAAAAAAAPgAAAAH///gAAAAAAD///8AAAAAAAAA4AAAAAf//+AAAAAAAP/7/gAAAAAAAAAAAAAGB///4AAAAAAA//D4AAAAAAAAAAAAAAfP///gAAAAAAD/8AAAAAAAAAAAAAAAAH///+AAAAAAAH/wAAAAAAAAAAAAAAAAH///4AAAAAAAf+AAAAAAAAAAAAAAAAP////gAAAAAAAfwAAAAAAAAAAAAAAAA////+AAAAAAAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAAAAAAAAAAAAAAAAA/////gAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAH////+AAAAAAAAAAAAAAAAAAAAAAAAAH////4AAAAAAAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAAAAAAAAAAAAAAAAAf////AAAAAAAAAAAAAAAAAAAAAAAAAB////8AAAAAAAAAAAAAAAAAAAAAAAAAD////gAAAAAAAAAAAAAAAAAAAAAAAAAP///+AAAAAAAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAAAAAAAAD////wAAAAAAAAAAAAAAAAAAAAAAAAAP////gAAAAAAAAAAAAAAAAAAAAAAAAA/////AAAAAAAAAAAAAAAAAAAAAAAAAD////+AAAAAAAAAAAAAAAAAAAAAAAAAH////8AAAAAAAAAAAAAAAAAAAAAAAAAf////4AAAAAAAAAAAAAAAAAAAAAAAAB/////wAAAAAAAAAAAAAAAAAAAAADwAP/////gAAAAAAAAAAAAAAAAAAAAAfgZ//////AAAAAAAAAAAAAAAAAAAAAD/P//////8PwAAAAAAAAAAAAAAAAAAAf//////////gAAAAAAAAAAAAAAAAAAB///////////AAAAAAAAAAAAAAAAAAAH//////////+AAAAAAAAAAAAAAAAAAAf//////////8AAAAAAAAAAAAAAAAAAB///////////wAAAAAAAAAAAAAAAAAAH///////////gB+AAAAAAAAAAAAAAAAf//////////+Af8AAAAAAAAAAAAAAB////////////4P/4AAAAAAAAAAAAAAP////////////j//gAAAAAAAAAAAAAA////////////+f/+AAAAAAAAAAAAAAH///////////////4AAAAAAAAAAAAAAf///////////////gAAAAAAAAAAAAAD///////////////+HAAAAAAAAAAAAwP////////////////+AAAAAAAAAAADg/////////////////4AAAAAAAAAAAPD/////////////////gAAAAAAAAAAA+P////////////////+AAAAAAAAAAAD8/////////////////4AAAAAAAAAAAP//////////////////gAAAAAAAAAAA//////////////f///+AAAAAAAAAAAD/////////////7////4AAAAAAAAAAAP//////////////////gAAAAAAAAAAA//////////////////+AAAAAAAAAAAD/////////////f////4AAAAAAAAAAAP////////////5/////gAAAAAAAAAAA/////////////H////+AAAAAAAAAAAD//v////////8I/////x/gAAAAAAAAAP//P///////4Bj////+f/AAAAAAAAAA//+f///////AOf////7//AAAAAAAAAD//8f//////4B5///////8AAAAAAAAAP//4///////APH///////4AAAAAAAAA///w//////+B4f///////wAAAAAAAAD///h//////wHD////////AAAAAAAAAP//+D//////AYP///////8AAAAAAAAA///8H/////+Bg////////wAAAAAAAAD///4f/////wMD////////AAAAAAAAAP///w//////AwP////n//+AAAAAAAAA////B/////8AA////8P//4AAAAAAAAD///+D/////4AD////gf//gAAAAAAAAP///8P/////gAf///8A//+AAAAAAAAA////wf/////AB////gD//4AAAAAAAAD////h/////+AH///+P///gAAAAAAAAP////D/////4A////j///+AAAAAAAAA////8H/////gD////////4AAAAAAAAD////4f////+AP////////AAAAAAAAAP////g/////4A////////8AAAAAAAAA/////D/////gD////////wAAAAAAAAD////8H////8AP///////+AAAAAAAAAP////4f////gA////////4AAAAAAAAA/////g////8AH////////H/4AAAAAAD////+D////4A////////9//wAAAAAAP////8P////vj///////////wAAAAAA/////w/////8P///////////gAAAAAD/////B/////w////////////AAAAAAP////+H/////D///////////+AAAAAA/////8P////+P///////////4AAAAAD/////w/////w////////////gAAAAAP/////D////+H////////////AAAAAA/////+H////Af///////////8AAAAAD/////4f///8D////////////4AAAAAP/////x////wP////////////gAAAAA//////H////A////////////+AAAAAA="
        }
      },
      {
        "id": "layer-06",
        "name": "Large copper pear tree",
        "logicalId": "right_tree",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-06.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-06.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-06.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-06.webp",
        "prompt": "Extract only the large close-up copper-trunked pear tree entering from the right edge. Include every visible copper branch, dark green and black leaf, gold pear and tiny mechanical fitting belonging to this tree. Preserve its exact original silhouette and cropped right boundary. Exclude the green ladder leaning against it, the basket, insects and smaller distant trees. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          670,
          248,
          1024,
          869
        ],
        "inspectionCrop": [
          658,
          236,
          1024,
          881
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 146,
          "height": 256,
          "data": "AAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAEAf+AAAAAAAAAAAAAAAAAAAAADgH/gAAAAAAAAAAAAAAAAAAAAA+D/wAAAAAAAAAAAAAAAAAAAAAP4/8AAAAAAAAAAAAAAAAAAAAAD/P/AAAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAAAAAAAAAAAAD////gAAAAAAAAAAAAAAAAAAAAf///wAAAAAAAAAAAAAAAAAAGAH///4AAAAAAAAAAAAAAAAAABwB///8AAAAAAAAAAAAAAAAAAA8AP+/+AAAAAAAAAAAAAAAAAAAPgB/v/gAAAAAAAAAAAAAAAAAAD8AP7//AAAAAAAAAAAAAAAAAAB/gA////AAAAAAAAAAAAAAAAAAf8gD4//4AAAAAAAAAAAAAAAAAP/YAe///AAAAAAAAAAAAAAAAAD//AD///4AAAAAAAAAAAGAAAAA//wA4///AAAAAAAAAAABwAAAAP/8AMH//wAAAAAAAAAAAeDAAAD//ADA//8AAAAAAAAAAAHwwAAA//wcwP//AAAAAAAAAAAB+EBgAH/8/MB//gAAAAAAAAAAAfwDwfx//fzAH/AAAAAAAAAAAAD8D8f/v//8wAfgAAAAAAAAAAAA/B/H/////YAAAAAAAAAAAAAAOPw/w/////mPgeAAAAAAAAAAADx8P4H////5v/HwAAAAAAAAAAB8fD8A////+f/z+AAAAAAAAAAAfjx/AP////v/8/gAAAAAAAAAAH4GfAB////3/8f4AAAAAAAAAAA7w3gAP//////H+AAAAAAAAAAAAfngAB///8//x/sAAAAAAAAAAAP/4AD///+P/+fzAAAAAAAAAAAH//AD////H//39wAAAAAAAAAAD//4B////BgP/+8AAAAAAAAAAD///gf///g4D///AAAAAAAAAAB//8cB//+4MA///wAAAAAAAAAA//7DgP/+HnA///gAAAAAAAAAAf/8wcAf+A/gf//AAAAAAAAAAAH/+eDgB8AH4P//iAAAAAAAAAAD/+PwcA8AA+H//xsAAAAAAAB/AA4H+HAfAHHh//J/AAAAAAAAf+AB//g4PwD48/+H7wAAAAAAAH/wB//8PH+B/HP/h58AAAAAAAA/+A///B5/gPx7/w4fAAAAAAAAP/wf//4H/8B8O/4YPwAAAAAAAB/8P///B//APD/+MD8AAAAAAAAf/D///4P/wBwf+DB/AAAAAAAAD/w///+B/8AIH+Bg/wAAAAAAAAf8P///wP/AAh8A4/8AAAAAAAAB/H/f/8D/gAYeAd//AAAAAAAAAAx/n//A/4AODgP9/wAAAAAAAAACfx//wP8AHw4HgP8AAAAAAAAAA34f/8D/HD8OHwD/AAAAAAAP8AP8H//A/n4/HzwB/wAAAAAAD/gD+A//gPz+f5/+B/8AAAAAAAf+B/AP/4B9/n+f////AAAAAAgH/gf4B/8AP/7/v+B//wAAAAAcA/8H+AP8AB/8///AH/8AAAAAHAH/h/wAAAA//P//wB/+AAAAAB8B/8f8D4AAf/z//EAP8AAAAAA/gH/H/h/gAH/8//hwD/gAAAAAP4A/4/4f4AD//P/w+A/4AAAAAD/Af/v+B+AAf/7/4fwP/AAAAH8/wH///gGO4H/+b8H+B/4AAAB//+B///8Af/B//h/D/wP/AAAAP//gf4P/8H/4P/4fg/8A/wAAAD//4H4B//5//H//PwP/gB8AAAAf/+AgAf//P/x3/34D/8AAAAAAH//gAAH//5/+9//8A//h4AAAAA//4AAD///v/uP//AP/8/YAAAAP/+AAB//+O//B//gH//n+AAAAB//gEA///9//gf/wB//8/wAAAAP/4Bgf/+/n/wD/8A///D8AAAAB/9gMH/4f4f8B/+AP//w/AAAAAH/fBxv+f+BxD//gD//8PwAAAAA//8GD/3/gPZ//wA///B8AAAAAH3/g4///4B+//8AP//wfAAAP+B//8HP//8YH/5+AD//8DwH+D/4f//g9///GAfA/gAf/+AcD/8f/H//8Hn7/gADwPwAH//AAA//j/5///g8H/wAA+H8AA//wAAH/8f/f//4Hh/AAQPz+AA//4AAA//n/3+/+AcYAAcD8/gAPfwAAAH/8f9/v/gDmAA/B3/w8fwAAwAA//z/P5////gAfg8/9//8AAMAAH//3x+f///4AP4/v///+gYDAAD///GAx/gD/AD8f9///8A/wgAB////4GGIAHwB/H/f//+A/+IAA//////4DAA+Afj/3///wf/n/Af//+D//44AHwPx/9///+f/9+wB///Bx//+AA+D4//f///n//+MAB//wY/z/wA/x4f/38f/8f/+HAAf/4Pf5z/Af8YP/9/N//D/zDwAPv+H/8YH4P/AD///jf/5jhx8ADD/h/+GA/D/4A///43AOwAY/AAB/wf/n4H5//Af//+PAB4gGfwAA/4P/h/Eff/wH///jg8fcDP8AAP8D/w/z//+8B///54fv/g3/AAD8A/wP8///Pgf//+cH//4Z/wAA+Af+D/n//z4D///uA///Gf8AAcAP/w/8//4+Af//7gH//jH/AAGAD/+f/v/+HwD///wA9/xx/wABAB//n/5//B8Af5/4A+/44f8AAAAf/7//P/4fwA4f+Aff8cH/AAAAH/+/////H/gAH/gPv8PB/wAAAB//////34/f4B/wHz4Dg/8AAAAf/////8/P3/8/8D8AB4/+AAAAH//////n////v/A+AA9//gAAAA////+/5//4D//wfAAP//4AAAAH/z//P/f/4AP/8PwAH//vAAAAA/4//2f//+AA//D4AB//HwAAAAB4H//v///wAH/x8AB///8AAAAAAA//7///8AA/+/AB///4AAAAAAAD//////gAH/vgA///+AAAAAAAA//////8AB//4A//wPwAAAAAAAP////7/gAf/+Af/wD+AAAAAAAH////+f8AH//AP/wP/wAAAAAAB////vj/gB//wH/wH/8AAAAAAAfP//58/8Af/8D/4D//AAAAAAAMD//+HH/wH//B/8B//wAAAAAAAA///AA//B//w/+A//8AAAAAAAAPn/gAH/+f/8f/APb/AAAAAAAAD4fwAA/////H/gDH/wAAAAAAAA8BgAAH//////4ABf8AAAAAAAAOAAAAAf/////8AA3/AAAAAAAADAAAAAD/////+AAf/wAAAAAAAAAAAAAAP/////gAH/8AAAAAAAAAAAAAAB/////wAB//AAAAAAAAAAAAAAAP////8AAf/wAAAAAAAAAAAAAAA////+AA//8AAAAAAAAAAAAAAAH////gAf3/AAAAAAAAAAAAAAAAf///4AH8/wAAAAAAAAAAAAAAAD///+AB+H8AAAAAAAAAAAAAAAAf///gAPgfAAAAAAAAAAAAAAAAD///4ADwAAAAAAAAAAAAAAAAAAf///AA8AAAAAAAAAAAAAAAAAAD///wAPAAAAAAAAAAAAAAAAAAAf//8AHwAAAAAAAAAAAAAAAAAAD///gD4AAAAAAAAAAAAAAAAAAAf//4B+AAAAAAAAAAAAAAAAAAAD///A/AAAAAAAAAAAAAAAAAAAA///wfwAAAAAAAAAAAAAAAAAAAH//+P4AAAAAAAAAAAAAAAAAAAA///38AAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAAAAAAAAAAAAB////gAAAAAAAAAAAAAAAAAAAAf///4AAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAH///gAAQAAAAAAAAAAAAAAAAAB///4AAMAAAAAAAAAAAAAAAAAAP//+AAHAAAAAAAAAAAAAAAAAAD///gADwAAAAAAAAAAAAAAAAAAf//8AB8AAAAAAAAAAAAAAAAAAH///AA/AAAAAAAAAAAAAAAAAAB///4AfwAAAAAAAAAAAAAAAAAAP//+Af4AAAAAAAAAAAAAAAAAAD///gP8AAAAAAAAAAAAAAAAAAA///8H+AAAAAAAAAAAAAAAAAAAH///H/AAAAAAAAAAAAAAAAAAAB/////gAAAAAAAAAAAAAAAAAAAf////4AAAAAAAAAAAAAAAAAAAH////8AAAAAAAAAAAAAAAAAAAB////+AAAAAAAAAAAAAAAAAAAAf////AAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAAAAAAAAAAAD////wAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAAAAAAAAAAAAf///8AAAAAAAAAAAAAAAAAAAAH////AAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAAAH////AAAAAAAAAAAAAAAAAAAAA////4AAAAAAAAAAAAAAAAAAAAP///8AAAAAAAAAAAAAAAAAAAAD////AAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAD///4AAAAAAAAAAAAAAAAAAAAA///+AAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAAAAAAAAAAAAH///4AAAAAAAAAAAAAAAAAAAAB///+AAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAAAAAAAAAAAAH///4AAAAAAAAAAAAAAAAAAAAD///+AAAAAAAAAAAAAAAAAAAAA////gAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAH///8AAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAf///wAAAAAAAAAAAAAAAAAAAAH///8AAAAAAAAAAAAAAAAAAAAD////AAAAAAAAAAAAAAAAAAAAA////4AAAAAAAAAAAAAAAAAAAAf////AAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAAAP///8AAAAAAAAAAAAAAAAAAAAH////AAAAAAAAAAAAAAAAAAAAB////wAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAAAAAAAAAAAAH////wAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAAAAAAAAAAAA////+AAAAAAAAAAAAAAAAAAAAP////gAAAAAAAAAAAAAAAAAAAH////4AAAAAAAAAAAAAAAAAAAB////+AAAAAAAAAAAAAAAAAAAA/////gAAAAAAAAAAAAAAAAAAAf////4AAAAAAAAAAAAAAAAAAAH////+AAAAAAAAAAAAAAAAAAAD/////gAAAAAAAAAAAAAAAAAAB/////4AAAAAAAAAAAAAAAAAAAf////+AAAAAAAAAAAAAAAAAAAP/////wAAAAAAAAAAAAAAAAAAH/////8AAAAAAAAAAAAAAAAAAB//////AAAAAAAAAAAAAAAAAAA//////4AAAAAAAAAAAAAAAAAAf/////+AAAAAAAAAAAAAAAAAAP//////gAAAAAAAAAAAAAAAAAH//////8AAAAAAAAAAAAAAAAAD///////gAAAAAAAAAAAAAAAAB///////8AAAAAAAAAAAAAAAAA////////gAAAAAAAAAAAAAAAA////////8AAAAAAAAAAAAAAAAf////////AAAAAAAAAAAAAAAAP////////gAAAAAAAAAAAAAAAH////////wAAAAAAAAAAAAAAAD////////8AAAAAAAAAAAAAAAA/////////AAAAAAAAAAAAAAAAD////////wAAAAAAAAAAAAAAAAP///////+AAAAAAAAAAAAAAAAB////////wAAAAAAAAAAAAAAAAf///////+AAAAAAAAAAAAAAAAD////////wAAAAAAAAAAAAAAAAf///////gAAAAAAAAAAAAAAAAD//////P4AAAAAAAAAAAAAAAAAAP///nwIAAAAAAAAAAAAAAAAAAAf//wMAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAADAAAAAA=="
        }
      },
      {
        "id": "layer-07",
        "name": "Green and brass ladder",
        "logicalId": "ladder",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-07.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-07.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-07.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-07.webp",
        "prompt": "Extract only the green ladder with brass rungs leaning against the large right-side tree. Include both long side rails, every narrow rung, feet and hinges. Preserve its original perspective, patina and thin edges. All spaces between the rungs must be transparent. Exclude the tree, pears, basket and terrace. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          715,
          576,
          901,
          902
        ],
        "inspectionCrop": [
          703,
          564,
          913,
          914
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 146,
          "height": 256,
          "data": "AAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAP//gAAAAAAAAAAAAAAAAAAAAAD///gAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAf///+AAAAAAAAAAAAAAAAAAAAH/////4AAAAAAAAAAAAAAAAAAB//////4AA+AAAAAAAAAAAAAAAf//////wAf4AAAAAAAAAAAAAAH//////////AAAAAAAAAAAAAAB//////////4AAAAAAAAAAAAAAf/////////+AAAAAAAAAAAAAAH//////////wAAAAAAAAAAAAAB//5///////8AAAAAAAAAAAAAAf/+AP//////AAAAAAAAAAAAAAH//wAf/////4AAAAAAAAAAAAAD//8AA/////+AAAAAAAAAAAAAA///AAA/////gAAAAAAAAAAAAAf//wAAAf///4AAAAAAAAAAAAAH//8AAAAf//8AAAAAAAAAAAAAB///AAAAA///AAAAAAAAAAAAAAf//wAAAAH//gAAAAAAAAAAAAAH//8AAAAD//4AAAAAAAAAAAAAB///AAAAA//+AAAAAAAAAAAAAA///wAAAAP//AAAAAAAAAAAAAAP//8AAAAD//wAAAAAAAAAAAAAD///AAAAA//4AAAAAAAAAAAAAA///wAAAAf/+AAAAAAAAAAAAAAf//8AAAAH//gAAAAAAAAAAAAAH///AAAAB//wAAAAAAAAAAAAAB///4AAAAf/8AAAAAAAAAAAAAA///+AAAAP//AAAAAAAAAAAAAAP///gAAAD//wAAAAAAAAAAAAAD///4AAAA//8AAAAAAAAAAAAAA///+AAAAP//AAAAAAAAAAAAAAf///gAAAD//wAAAAAAAAAAAAAH///8AAAA//8AAAAAAAAAAAAAB////AAAAP//AAAAAAAAAAAAAAf///wAAAD//wAAAAAAAAAAAAAH///8AAAB//8AAAAAAAAAAAAAB////AAAAf//AAAAAAAAAAAAAA////wAAAH//wAAAAAAAAAAAAAP///+AAAD//8AAAAAAAAAAAAAD////gAAA///AAAAAAAAAAAAAB////4AAAP//4AAAAAAAAAAAAAf///+AAAD//+AAAAAAAAAAAAAH////gAAB///gAAAAAAAAAAAAD////4AAAf//4AAAAAAAAAAAAA////+AAAH///AAAAAAAAAAAAAP////gAAB///wAAAAAAAAAAAAD////8AAAf//8AAAAAAAAAAAAB/////AAAH///AAAAAAAAAAAAAf////wAAB///wAAAAAAAAAAAAH////8AAAf//8AAAAAAAAAAAAB/////AAAP///gAAAAAAAAAAAAf////8AAD///4AAAAAAAAAAAAH/////wAA///+AAAAAAAAAAAAD//////4Af///gAAAAAAAAAAAA///////4H///4AAAAAAAAAAAAP///////x///+AAAAAAAAAAAAH////////////gAAAAAAAAAAAB//gf////////4AAAAAAAAAAAAf/4D////////+AAAAAAAAAAAAH/+A/////////wAAAAAAAAAAAD//gP////////8AAAAAAAAAAAA//4D/////////AAAAAAAAAAAAP/+A//3//////wAAAAAAAAAAAD//gP/8f/////8AAAAAAAAAAAA//wD//A//////gAAAAAAAAAAAf/8A//wA/////4AAAAAAAAAAAH//AP/8AB////+AAAAAAAAAAAB//wD//AAP////wAAAAAAAAAAA//4Af/wAD////8AAAAAAAAAAAP/+AH/8AA/////AAAAAAAAAAAD//gB//gAP////wAAAAAAAAAAA//wAf/4AD////8AAAAAAAAAAAf/8AH/+AB//7//gAAAAAAAAAAH//AB//gAf/+f/4AAAAAAAAAAB//wAf/4AH//n/+AAAAAAAAAAA//8AD/+AB//x//gAAAAAAAAAAP//AA//gA//8f/4AAAAAAAAAAD//gAP/4AP//D/+AAAAAAAAAAA//4AD/+AD//w//gAAAAAAAAAAP//AA//gA//4P/4AAAAAAAAAAD//+AP/4Af/+D//AAAAAAAAAAB///4B/+AH//g//wAAAAAAAAAAf///4f/gB//4H/8AAAAAAAAAAH////3/8Af/+B//AAAAAAAAAAD///////AH//gf/wAAAAAAAAAA///////wB//wH/8AAAAAAAAAAP//////8Af/8B//gAAAAAAAAAH///////AP//Af/4AAAAAAAAAB///////4D//wH/+AAAAAAAAAAf/9/////4//4B//gAAAAAAAAAH//D///////+Af/4AAAAAAAAAB//wH///////gD//AAAAAAAAAAf/8Af//////4A//wAAAAAAAAAP/+AB//////8AP/8AAAAAAAAAD//gAA//////AD//AAAAAAAAAA//4AAH/////wA//wAAAAAAAAAf/+AAA/////8AH/+AAAAAAAAAH//AAAP////+AB//gAAAAAAAAB//wAAB/////gAf/4AAAAAAAAAf/8AAAf////4AH/+AAAAAAAAAP/+AAAH////+AA//gAAAAAAAAD//gAAB/////gAP/4AAAAAAAAA//4AAAf////4AD/+AAAAAAAAAf/8AAAH////+AA//gAAAAAAAAH//AAAA/////AAP/8AAAAAAAAB//wAAAP////wAB//AAAAAAAAAf/8AAAD////8AAf/wAAAAAAAAH//AAAA/////AAH/8AAAAAAAAB//wAAAP////gAB//gAAAAAAAA//4AAAB////4AAf/4AAAAAAAAP/+AAAAf///+AAH/+AAAAAAAAD//gAAAH////gAA//gAAAAAAAB//4AAAB////wAAP/8AAAAAAAAf//AAAAf///8AAD//AAAAAAAAH//+AAAH////AAA//wAAAAAAAD///8AAB////+AAP/8AAAAAAAA////wAAf////8AB//AAAAAAAAP////AAH/////wAf/wAAAAAAAD////8AA//////gH/8AAAAAAAB/////8AP//////h//AAAAAAAAf/////wD///////P/wAAAAAAAH//////A////j////+AAAAAAAB///////P///4P////gAAAAAAAf/8////////+AP///4AAAAAAAH//D////////gA////AAAAAAAD//wP///////wAD///wAAAAAAA//4A///////8AAH//8AAAAAAAP/+AB///////AAAH//AAAAAAAH//gAH//////wAAA//wAAAAAAB//4AAf/////4AAAP/8AAAAAAAf/8AAA/////+AAAB//gAAAAAAH//AAAA/////gAAAf/4AAAAAAD//wAAAH////4AAAH/+AAAAAAA//4AAAAP///8AAAA//gAAAAAAP/+AAAAAf///AAAAP/8AAAAAAD//gAAAAD///wAAAD//AAAAAAA//4AAAAA///8AAAA//wAAAAAAP/+AAAAAP///AAAAH/8AAAAAAH//AAAAAD///wAAAB//AAAAAAB//wAAAAA///8AAAAf/wAAAAAAf/8AAAAAP///AAAAH/8AAAAAAP//AAAAAB///8AAAA//AAAAAAD//gAAAAAf///gAAAP/wAAAAAA//4AAAAAH///8AAAD/+AAAAAAf/+AAAAAB////wAAA//gAAAAAH//wAAAAAf//z+AAAP/4AAAAAB//+AAAAAH//8/wAAD/+AAAAAA///4AAAAA///D+AAA//wAAAAAP///wAAAAP//gfwAAP/8AAAAAD////AAAAD//4D+AAB//AAAAAA////8AAAA//+AfwAAf/wAAAAAP////wAAAP//gD+AAH/8AAAAAH/////gAAD//wA/4AB//gAAAAB/////+AAA//8AD+AAP/4AAAAAf/////4AAP//AAfwAD/+AAAAAP//////wAD//wAD/AA//gAAAAD//z////AA//8AAP4AP/4AAAAA//8P///8AP//AAB/AB//AAAAAf/+A////gH//wAAP4Af/wAAAAH//gD////h//4AAD/AH/8AAAAB//wAH///+f/+AAAP4B//AAAAAf/8AA///////gAAB/AP/wAAAAP//AAD//////4AAAf4D/8AAAAD//wAAP/////8AAAD/A//AAAAA//8AAAf/////AAAAP8P/wAAAAP/+AAAB/////wAAAB/D/8AAAAD//gAAAH////8AAAAf4//gAAAB//4AAAAP///+AAAAB/v/4AAAAf/8AAAAA////gAAAAP9/+AAAAH//AAAAAD///+AAAAD///gAAAD//wAAAAAf///8AAAAf//8AAAA//4AAAAAA////wAAAB///AAAAP/+AAAAAAD////AAAAP//wAAAD//gAAAAAA////8AAAD//8AAAB//wAAAAAAP////wAAAP//AAAAf/8AAAAAAD/////AAAA//4AAAH//AAAAAAA//+P/8AAAP/+AAAB//4AAAAAAP//gf/4AAA//gAAAf//wAAAAAD//+A//gAAH/4AAAP//+AAAAAB///wD/+AAB/+AAAD///4AAAAAf//+AP/wAAf/gAAA////wAAAAH///8B//gAH/4AAAf////AAAAB//+fwB/+AA/+AAAH////8AAAAf//n/AP/4AP/wAAB/////4AAAH//4f8A//wD/8AAA//////AAAD//+A/wB/+A//AAAP/////8AAA///gH/AH/4P/wAAD//////wAAP//8Af4Af/j/+AAA///////AAD///AD/wD////gAAf/+H///8AA///wAH+AH///4AAH//g////wAf//4AA/4Af//+AAB//4D///+AH//+AAD/AD///gAAf/+AP///+B///AAAP+AP//8AAH//AAf///8f/+AAAAf4Af//AAB//wAB////n//AAAAD/AB//wAA//8AAH//////wAAAAP+AH/8AAP/+AAAf/////4AAAAAf4A//gAD//gAAB/////+AAAAAD/gP/4AB//4AAAP/////gAAAAAP8B/+AAf/8AAAAf////4AAAAAB/4f/gAH//AAAAB////8AAAAAAD/H/4AD//wAAAAH////AAAAAAAf9/+AA//8AAAAA////wAAAAAAB///gAP/+AAAAAD///8AAAAAAAH//4AD//gAAAAAH//+AAAAAAAAf/+AB//4AAAAAAf//gAAAAAAAD//wAf/+AAAAAAA//4AAAAAAAAH/8AH//wAAAAAAP/+AAAAAAAAB//AB//8AAAAAAD//gAAAAAAAAf/wAf//AAAAAAA//4AAAAAAAAD/+AP//gAAAAAAf/+AAAAAAAAA//gD//4AAAAAAH//AAAAAAAAAP/8A//+AAAAAAB//wAAAAAAAAH//gP//AAAAAAAf/8AAAAAAAAP//4D//gAAAAAAH//AAAAAAAH////A+AAAAAAAAD//wAAB+AAf////wPAAAAAAAAA//4AAB/8A/////8AAAAAAAAAAP/+AAA//////3/+AAAAAAAAAAD//gAA/////4A//gAAAAAAAAAA//4AAP////gAP/wAAAAAAAAAAf/8AAH////AAB/4AAAAAAAAAAH//AAD///+AAAf4AAAAAAAAAAB//wAB///gAAAAAAAAAAAAAAAAf/8AA///gAAAAAAAAAAAAAAAAP//AAf//gAAAAAAAAAAAAAAAAD//wAf/jAAAAAAAAAAAAAAAAAA//8Af/AAAAAAAAAAAAAAAAAAAP/+Af/AAAAAAAAAAAAAAAAAAAD//g//gAAAAAAAAAAAAAAAAAAA//4f+AAAAAAAAAAAAAAAAAAAAP/+f+AAAAAAAAAAAAAAAAAAAAH//v/AAAAAAAAAAAAAAAAAAAAB///+AAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAAAAAAAAAAAAH//+AAAAAAAAAAAAAAAAAAAAAD///AAAAAAAAAAAAAAAAAAAAAA///AAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAB//8AAAAAAAAAAAAAAAAAAAAAAf/+AAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAf/8AAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
        }
      },
      {
        "id": "layer-08",
        "name": "Wicker basket with tools",
        "logicalId": "tool_basket",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-08.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-08.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-08.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-08.webp",
        "prompt": "Extract only the woven wicker basket with its tall curved handle and all green-and-brass tools inside it in the lower-right foreground. Keep the basket and its contents as one coherent layer, preserving the exact weaving, shapes, colors and immediate contact shadow. Exclude the ladder, tree, grain barrel and floor. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "object",
        "bounds": [
          597,
          794,
          783,
          987
        ],
        "inspectionCrop": [
          585,
          782,
          795,
          999
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 186,
          "height": 193,
          "data": "AAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAD///4AAAAAAAAAAAAAAAAAAAAAAAAAAAf///+AAAAAAAAAAAAAAAAAAAAAAAAAAB/////gAAAAAAAAAAAAAAAAAAAAAAAAAH/////4AAAAAAAAAAAAAAAAAAAAAAAAAP/////8AAAAAAAAAAAAAAAAAAAAAAAAA//////+AAAAAAAAAAAAAAAAAAAAAAAAD///////gAAAAAAAAAAAAAAAAAAAAAAAH///////wAAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAA////////4AAAAAAAAAAAAAAAAAAAAAAB////wH//8AAAAAAAAAAAAAAAAAAAAAAD////AA//8AAAAAAAAAAAAAAAAAAAAAAH///4AAP/+AAAAAAAAAAAAAAAAAAAAAAP///gAAH//AAAAAAAAAAAAAAAAAAAAAAf//+AAAB//AAAAAAAAAAAAAAAAAAAAAA///4AAAA//gAAAAAAAAAAAAAAAAAAAAB///gAAAAf/gAAAAAAAAAAAAAAAAAAAAD//+AAAAAf/wAAAAAAAAAAAAAAAAAAAAH//4AAAAAP/wAAAAAAAAAAAAAAAAAAAAP//wAAAAAH/4AAAAAAAAAAAAAAAAAAAAf//gAAAAAH/4AAAAAAAAAAAAAAAAAAAAf//AAAAAAD/4AAAAAAAAAAAAAAAAAAAA//+AAAAAAD/8AAAAAAAAAAAAAAAAAAAA//8AAAAAAB/8AAAAAAAAAAAAAAAAAAAB//4AAAAAAB/8AAAAAAAAAAAAAAAAAAAD//wAAAAAAA/+AAAAAAAAAAAAAAAAAAAH//gAAAAAAA/+AAAAAAAAAAAAAAAAAAAH//AAAAAAAAf+AAAAAAAAAAAAAAAAAAAP/+AAAAAAAAf/AAAAAAAAAAAAAAAAAAAP/8AAAAAAAAf/AAAAAAAAAAAAAAAAAAAf/8AAAAAAAAf/AAAAAAAAAAAAAAAAAAA//4AAAAAAAAP/gAAAAAAAAAAAAAAAAAA//wAAAAAAAAP/gAAAAAAAAAAAAAAAAAB//wAAAAAAAAP/gAAAAAAAAAAAAAAAAAB//gAAAAAAAAP/gAAAAAAAAAAAAAAAAAD//AAAAAAAAAP/gAAAAAAAAAAAAAAAAAH//AAAAAAAAAP/wAAAAAAAAAAAAAAAAAH/+AAAAAAAAAP/wAAAAAAAAAAAAAAAAAH/+AAAAAAAAAH/wAAAAAAAAAAAAAAAAAP/8AAAAAAAAAH/wAAAAAAAAAAAAAAAAAP/8AAAAAAAAAH/wAAAAAAAAAAAAAAAAAf/4AAAAAAAAAH/wAAAAAAAAAAAAAAAAAf/4AAAAAAAAAH/4AAAAAAAAAAAAAAAAAf/wAAAAAAAAAH/4AAAAAAAAAAAHwAAAA//wAAAAAAAAAH/4AAAAAAAAAAAf+AAAB//gAAAAAAAAAD/4AAAAAAAAAAB//AAAB//n/AAAAAAAAD/4AAAAAAAAAAD//gGAH/////4AAAAAAD/4AAAAAAAAAAH//w/wf//////4AAAAAD/4AAAAAAAAAAP//7//////////gAAAAH/4AAAAAAAAAAP8f////////////gAAAH/4AAAAAAAAAAf4H////////////8AAAH/4AAAAAAAAAAfwD/////////////gAAH/4AAAAAAAAAAfwD/////////////+AAP/8AAAAAAAAAAfwH//////////////wAP/+AAAAAAAAAAfwP///////////////Af/+AAAAAAAAAAf4f//////////////////+AAAAAAAAAAf////////////////////+AAAAAAAAAAP////////////////////+AAAAAAAAAAP////////////////////+AAAAAAAAAAf/////////////////////AAAAAAAAAA//////////////////////AAAAAAAAAB//////////////////////AAAAAAAAAD//////////////////////gAA+AAAAAH//////////////////////4AD/gAAAAP//////////////////////+AH/4AAAAf///////////////////////gP/+AAAA////////////////////////8P//AAAB/////////////////////////f//gAAB////////////////////////////wAAD////////////////////////////wAAH////////////////////////////4AAH////////////////////////////4AAP////////////////////////////8AAP////8///////////////////////8AAf////8///////////////////////8AAf////8///////////////////////8AAf////////////////////////////4AAf////////////////////////////4AAf////////////////////////////wAAf////////////////////////////wAA/////////////////////////////gAA/////////////////////////////gAA/////////////////////////////wAA/////////////////////////////8AA/////////////////////////////+AA//////////////////////////////AAf/////////////////////////////gAf/////////////////////////////wAf/////////////////////////////4AP/////////////////////////////4AP/////////////////////////////8AH/////////////////////////////8AH/////////////////////////////+AH/////////////////////////////+AD/////////////////////////////+AD/////////////////////////////+AB//////////////////////////////AA//////////////////////////////AA//////////////////////////////AAf/////////////////////////////AAf/////////////////////////////AAf/////////////////////////////AAf/////////////////////////////AAf/////////////////////////////AAf/////////////////////////////AAP/////////////////////////////AAP/////////////////////////////AAP////////////////////////////+AAP////////////////////////////+AAP////////////////////////////+AAH////////////////////////////+AAH////////////////////////////8AAH////////////////////////////8AAH////////////////////////////8AAD////////////////////////////4AAD////////////////////////////wAAD////////////////////////////wAAD////////////////////////////gAAB////////////////////////////gAAB////////////////////////////AAAB///////////////////////////+AAAB///////////////////////////+AAAB///////////////////////////8AAAA///////////////////////////8AAAA///////////////////////////8AAAA///////////////////////////4AAAA///////////////////////////4AAAAf//////////////////////////4AAAAf//////////////////////////wAAAAf//////////////////////////wAAAAP//////////////////////////wAAAAP//////////////////////////wAAAAP//////////////////////////gAAAAP//////////////////////////gAAAAP//////////////////////////gAAAAH//////////////////////////AAAAAH//////////////////////////AAAAAH//////////////////////////AAAAAD/////////////////////////+AAAAAD/////////////////////////+AAAAAD/////////////////////////+AAAAAB/////////////////////////+AAAAAB/////////////////////////8AAAAAA/////////////////////////8AAAAAA/////////////////////////4AAAAAA/////////////////////////4AAAAAAf////////////////////////wAAAAAAf////////////////////////wAAAAAAP////////////////////////wAAAAAAP////////////////////////gAAAAAAH////////////////////////gAAAAAAD////////////////////////gAAAAAAD////////////////////////gAAAAAAB////////////////////////AAAAAAAA////////////////////////AAAAAAAAf///////////////////////AAAAAAAAP//////////////////////+AAAAAAAAH//////////////////////+AAAAAAAAD//////////////////////8AAAAAAAAB//////////////////////8AAAAAAAAA//////////////////////8AAAAAAAAAP/////////////////////4AAAAAAAAAH/////////////////////4AAAAAAAAAD/////////////////////4AAAAAAAAAA/////////////////////wAAAAAAAAAAf////////////////////wAAAAAAAAAAH////////////////////gAAAAAAAAAAB////////////////////gAAAAAAAAAAAf///////////////////gAAAAAAAAAAAH///////////////////AAAAAAAAAAAAD///////////////////AAAAAAAAAAAAA//////////////////+AAAAAAAAAAAAAP/////////////////8AAAAAAAAAAAAAH/////////////////4AAAAAAAAAAAAAA/////////////////wAAAAAAAAAAAAAAP////////////////gAAAAAAAAAAAAAAD///////////////+AAAAAAAAAAAAAAAAf//////////////8AAAAAAAAAAAAAAAAH//////////////4AAAAAAAAAAAAAAAAB//////////////gAAAAAAAAAAAAAAAAAf/////////////gAAAAAAAAAAAAAAAAAD////////////+AAAAAAAAAAAAAAAAAAAf///////////wAAAAAAAAAAAAAAAAAAAD///////////gAAAAAAAAAAAAAAAAAAAAf/////////+AAAAAAAAAAAAAAAAAAAAAD/////////gAAAAAAAAAAAAAAAAAAAAAAP///////4AAAAAAAAAAAAAAAAAAAAAAAAf//////AAAAAAAAAAAAAAAAAAAAAAAAAA/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        }
      },
      {
        "id": "layer-09",
        "name": "Tilted mechanical grain barrel",
        "logicalId": "grain_barrel",
        "src": "assets/decompositions/04_clockwork_orchard/layers/layer-09.webp",
        "native": "assets/decompositions/04_clockwork_orchard/native/layer-09.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-09.webp",
        "original": "assets/decompositions/04_clockwork_orchard/original/layer-09.webp",
        "prompt": "Extract the large tilted teal-green copper-rimmed barrel in the lower-left foreground, including its wide open mouth filled with golden grains, attached handle, decorative gear, rivets and complete visible cropped body. Preserve the original tilt, aged metal texture and contact shadow. Exclude surrounding pear trees, basket and terrace. Return this as an RGBA image layer on the unchanged full image canvas. Preserve the exact original position, size, pose, colors, texture, lighting and visible details. Everything outside the requested element must be transparent. Do not recenter, resize, crop, restyle or add objects.",
        "origin": "model_i2rgba_v2",
        "role": "foreground",
        "bounds": [
          252,
          738,
          649,
          1023
        ],
        "inspectionCrop": [
          240,
          726,
          661,
          1024
        ],
        "editable": true,
        "model": "Qwen-Image-Edit",
        "hitMask": {
          "width": 256,
          "height": 184,
          "data": "AAAAAAAAAAAAAAAAAAB///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAM//////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////wAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////wAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////AAAAAAAAAAAAAAAAAAAAAAAA/n////////////////+AAAAAAAAAAAAAAAAAAAAAAA///////////////////+AAAAAAAAAAAAAAAAAAAAAAP///////////////////4AAAAAAAAAAAAAAAAAAAAAD////////////////////wAAAAAAAAAAAAAAAAAAAAB/////////////////////wAAAAAAAAAAAAAAAAAAAAP/////////////////////AAAAAAAAAAAAAAAAAAAAB//7//////////////////+AAAAAAAAAAAAAAAAAAAAP/gD//////////////////8AAAAAAAAAAAAAAAAAAAD/4AH//////////////////4AAAAAAAAAAAAAAAAAAAf/AAf//////////////////wAAAAAAAAAAAAAAAAAAD/wAD///////////////////AAAAAAAAAAAAAAAAAAAP+AAf//////////////////+AAAAAAAAAAAAAAAAAAD/wAD///////////////////8AAAAAAAAAAAAAAAAAAf8AAf///////////////////4AAAAAAAAAAAAAAAAAD/AAD////////////////////wAAAAAAAAAAAAAAAAAP8AA/////////////////////gAAAAAAAAAAAAAAAAB/gAH/////////////////////AAAAAAAAAAAAAAAAAP8AA/////////////////////8AAAAAAAAAAAAAAAAA/gAD/////////////////////4AAAAAAAAAAAAAAAAH+AAf/////////////////////wAAAAAAAAAAAAAAAA/wAD//////////////////////AAAAAAAAAAAAAAAAD+AAP/////////////////////+AAAAAAAAAAAAAAAAP4AB//////////////////////4AAAAAAAAAAAAAAAB/AAP//////////////////////wAAAAAAAAAAAAAAAH8AA///////////////////////gAAAAAAAAAAAAAAAfgAH//////////////////////+AAAAAAAAAAAAAAAD+AAf//////////////////////8AAAAAAAAAAAAAAAP4AB///////////////////////4AAAAAAAAAAAAAAA/gAP///////////////////////gAAAAAAAAAAAAAAH8AA////////////////////////AAAAAAAAAAAAAAAfwAH///////////////////////8AAAAAAAAAAAAAAB/AAf///////////////////////4AAAAAAAAAAAAAAH8AB////////////////////////gAAAAAAAAAAAAAAfwAH////////////////////////AAAAAAAAAAAAAAB/AAf///////////////////////+AAAAAAAAAAAAAAH8AD////////////////////////4AAAAAAAAAAAAAAfwAf////////////////////////gAAAAAAAAAAAAAB/AB/////////////////////////AAAAAAAAAAAAAAH8AP////////////////////////+AAAAAAAAAAAAAAfwB/////////////////////////4AAAAAAAAAAAAAB/gP/////////////////////////gAAAAAAAAAAAAAD+B//////////////////////////AAAAAAAAAAAAAAP4H/////////////////////////8AAAAAAAAAAAAAA/w//////////////////////////wAAAAAAAAAAAAAB/n//////////////////////////gAAAAAAAAAAAAAH+///////////////////////////AAAAAAAAAAAAAAf///////////////////////////8AAAAAAAAAAAAAA////////////////////////////wAAAAAAAAAAAAAD////////////////////////////gAAAAAAAAAAAAAP///////////////////////////+AAAAAAAAAAAAAAf///////////////////////////4AAAAAAAAAAAAAB////////////////////////////wAAAAAAAAAAAAAD////////////////////////////AAAAAAAAAAAAAAP///////////////////////////8AAAAAAAAAAAAAB////////////////////////////wAAAAAAAAAAAAAP////////////////////////////gAAAAAAAAAAAAA////////////////////////////+AAAAAAAAAAAAAH////////////////////////////4AAAAAAAAAAAAA/////////////////////////////wAAAAAAAAAAAAP/////////////////////////////AAAAAAAAAAAAB/////////////////////////////8AAAAAAAAAAAAf/////////////////////////////wAAAAAAAAAAAL//////////////////////////////AAAAAAAAAAAB//////////////////////////////8AAAAAAAAAAAP//////////////////////////////wAAAAAAAAAAB///////////////////////////////AAAAAAAAAAAP//////////////////////////////8AAAAAAAAAAB///////////////////////////////4AAAAAAAAAAf///////////////////////////////gAAAAAAAAAP///////////////////////////////+AAAAAAAAAB////////////////////////////////4AAAAAAAAAH////////////////////////////////gAAAAAAAAA////////////////////////////////+AAAAAAAAAD////////////////////////////////4AAAAAAAAAf////////////////////////////////gAAAAAAAAD////////////////////////////////+AAAAAAAAAf////////////////////////////////wAAAAAAAAD/////////////////////////////////AAAAAAAAAf////////////////////////////////8AAAAAAAAB/////////////////////////////////wAAAAAAAAP/////////////////////////////////AAAAAAAAB/////////////////////////////////8AAAAAAAAP/////////////////////////////////wAAAAAAAB//////////////////////////////////AAAAAAAAH/////////////////////////////////4AAAAAAAA//////////////////////////////////gAAAAAAAH/////////////////////////////////8AAAAAAAAf/////////////////////////////////wAAAAAAAD//////////////////////////////////AAAAAAAAP/////////////////////////////////4AAAAAAAB//////////////////////////////////gAAAAAAAH/////////////////////////////////8AAAAAAAA//////////////////////////////////wAAAAAAAD/////////////////////////////////+AAAAAAAAP/////////////////////////////////4AAAAAAAB//////////////////////////////////AAAAAAAAH/////////////////////////////////4AAAAAAAA//////////////////////////////////gAAAAAAAD/////////////////////////////////4AAAAAAAAP/////////////////////////////////gAAAAAAAA/////////////////////////////////8AAAAAAAAH/////////////////////////////////gAAAAAAAAf////////////////////////////////4AAAAAAAAB/////////////////////////////////AAAAAAAAAH////////////////////////////////4AAAAAAAAAf////////////////////////////////gAAAAAAAAD////////////////////////////////+AAAAAAAAAP////////////////////////////////4AAAAAAAAA////////////////////////////////+AAAAAAAAAD///////////////////////////////+wAAAAAAAAAP///////////////////////////////wAAAAAAAAAA///////////////////////////////+AAAAAAAAAAD///////////////////////////////wAAAAAAAAAAP//////////////////////////////+AAAAAAAAAAA///////////////////////////////wAAAAAAAAAAD//////////////////////////////+AAAAAAAAAAAP//////////////////////////////4AAAAAAAAAAA//////////////////////////////+AAAAAAAAAAAD//////////////////////////////wAAAAAAAAAAAP/////////////////////////////+AAAAAAAAAAAA//////////////////////////////wAAAAAAAAAAAD//////////////////////////////AAwAAAAAAAAAP/////////////////////////////+ABgAAAAAAAAA//////////////////////////////4ABgAAAAAAAAD//////////////////////////////gADgAAAAAAAAP/////////////////////////////+AADAAAAAAAAA//////////////////////////////4AABgAAAAAAAB//////////////////////////////gAADAAAAAAAAH/////////////////////////////8AAADAAAAAAAAf/////////////////////////////wAAACAAAAAAAB/////////////////////////////+AAAAGAAAAAAAD/////////////////////////////gAAAAGAAAAAAAP////////////////////////////8AAAAAEAAAAAAA/////////////////////////////AAAAAAEAAAAAAD///////////////////////////wAAAAAAAMAAAAAAP//////////////////////////4AAAAAAAAIAAAAAA//////////////////////////+AAAAAAAAAYAAAAAB//////////////////////////gAAAAAAAAAYAAAAAH/////////////////////////4AAAAAAAAAAYAAAAAP/////////////////////////gAAAAAAAAAAYAAAAA/////////////////////////8AAAAAAAAAAAQAAAAD/////////////////////////gAAAAAAAAAAAwAAAAP////////////////////////8AAAAAAAAAAAAwAAAAf////////////////////////AAAAAAAAAAAAAgAAAB////////////////////////4AAAAAAAAAAAAAgAAAD////////////////////////AAAAAAAAAAAAABAAAAP///////////////////////4AAAAAAAAAAAAABAAAAf///////////////////////AAAAAAAAAAAAAABgAAB///////////////////////4AAAAAAAAAAAAAABAAAD///////////////////////AAAAAAAAAAAAAAADAAAP//////////////////////4AAAAAAAAAAAAAAADAAAf//////////////////////AAAAAAAAAAAAAAAAGAAB//////////////////////4AAAAAAAAAAAAAAAAGAAH//////////////////////gAAAAAAAAAAAAAAAAEAAP/////////////////////8AAAAAAAAAAAAAAAAAMAAf/////////////////////wAAAAAAAAAAAAAAAAAMAB/////////////////////+AAAAAAAAAAAAAAAAAAY="
        }
      }
    ],
    "preview": "assets/decompositions/04_clockwork_orchard/final/preview.webp"
  },
  {
    "id": "05_spring_sale",
    "title": "Spring, Layer by Layer",
    "subtitle": "Paper flowers, a golden hoop, and independent typography.",
    "model": "Qwen-Image-Edit",
    "accent": "#64748B",
    "category": "Floral poster",
    "width": 1024,
    "height": 1024,
    "input": "assets/decompositions/05_spring_sale/final/input.webp",
    "inputOriginal": "assets/decompositions/05_spring_sale/final/inputOriginal.webp",
    "final": "assets/decompositions/05_spring_sale/final/final.webp",
    "thumbnail": "assets/decompositions/05_spring_sale/final/thumbnail.webp",
    "layers": [
      {
        "name": "Warm textured paper",
        "logicalId": "background",
        "src": "assets/decompositions/05_spring_sale/layers/background.webp",
        "native": "assets/decompositions/05_spring_sale/native/background.webp",
        "alpha": "assets/decompositions/04_clockwork_orchard/alpha/layer-01.webp",
        "prompt": "Extract only the full-canvas warm beige textured paper background. Remove every flower, leaf, the golden circular hoop and all printed text and thin rectangular text frames. Restore the same subtle paper texture and warm lighting throughout the removed areas. Output one complete opaque beige paper background without any text, plants or ring. Keep the exact full original canvas, camera viewpoint and framing; do not crop, resize or reframe.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/background.webp",
        "role": "background",
        "bounds": [
          0,
          0,
          1024,
          1024
        ],
        "editable": false,
        "inspectionCrop": [
          0,
          0,
          1024,
          1024
        ]
      },
      {
        "name": "Top flower & leaves",
        "logicalId": "top_flower",
        "src": "assets/decompositions/05_spring_sale/layers/top_flower.webp",
        "native": "assets/decompositions/05_spring_sale/native/top_flower.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/top_flower.webp",
        "prompt": "Extract the single orange sunflower at the top with all of its attached olive-green leaves and stems. Preserve the original petals, yellow center and leafy silhouette. Exclude the two golden hoop lines crossing in front, all text, lower flowers and the beige background. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/top_flower.webp",
        "role": "object",
        "bounds": [
          329,
          64,
          713,
          318
        ],
        "editable": true,
        "inspectionCrop": [
          317,
          52,
          725,
          330
        ],
        "hitMask": {
          "width": 256,
          "height": 169,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAB//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAH//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAAAAB//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAAAAAH//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAB//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAH//AAAYAAAAH//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/+AADgAAAAf/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB//4AAOAAAgA//4AAQAAAAAAAAAAAAAAAAAAAAAAAAAH//wAB8AADgD//gAHgAAAAAAAAAAAAAAAAAAAAAAAAAf//gAP4AAPwP/+AB8AAAAAAAAAAAAAAAAAAAAAAAAAB///AA/gAB/wf/wA/wAAAAAAAAAAAAAAAAAAAAAAAAAH//8AH/AAH/h//AH/AAAAAAAAAAAAAAAAAAAAAAAAAAP//4Af+AAf/j/4B/8AAAAAAAAAAAAAAAAAAAAAAAAAA///gD/4AB//H/gP/wAAAAAAAAAAAAAAAAAAAAAAAAAD//+AP/gAH/+P8B//AAAAAAAAAAAAAAAAAAAAAAAAAAH//8A//AAf/8/gP/8AAAAAAAAAAAAAAAAAAAAAAAAAAf//wH/8AB//5+B//wAAAAAAAAAAAAAAAAAAAAAAAAAA///Af/wAD//zwP//AAAAAAAAAAAAAAAAAAAAAAAAAAD//+B//gAP//PA//4AAAAAAAAAAAAAAAAAAAAAAAAAAH//4P/+AA//+YH//gAAAAAAAAAAAAAAAAAAAAAAAAAAP//g//4AD//5g//+AAAAAAAAAAAAAAAAAAAAAAAAAAAf/+D//gAP//mD//4AAAAAAAAAAAAAAAAAAAAAAAAAAA//4P/+Aw//+cf//gAAAAAAAAAAAAAAAAAAAAAAAAAAB//g//4DD//9///8AAAAAAAAAAAAAAAAAAAAAAAAAAAD/+D//4eP//////gAAAAAwAAAAAAAAAAAAAAAAAAAAAD/4P//z5//////+AAAAAPAAAAAAAAAAAAAAAAAAAAAAD/g///vn//////4AAgAH8AAAAAAAAAAAAAAAAAAAAAAA+D////f/////+AAOAA/wAAAAAAAAAAAAAAAAAAAAP+A4P//////////4AB8AP/AAAAAAAAAAAAAAAAAAAAP//Aw///////////AAPwB/+AA/4AAAAAAAAAAAAAAAB///Bh//////////4Hj/gP/4A///gAAAAAAAAAAAAAAD//+DH//////////B+f+B//gH//+AAAAAAAAAAAAAAAP//+Of/////////4f7/4P/+D///4AAAAAAAAAAAAAAA///8Y//////////n///h//4f///AAAAAAAAAAAAAAAB///5z//////////////P//j///4AAAAAAAAAAAAAAAD///zn/////////////8//8f///gAAAAAAAAAAAAAAAP//////////////////z//z///+AAAAAAAAAAAAAAAAf/////////////v////f/+P///wAAAAAAAAAAAAAAAA//////////////////9//5///+AAAAAAAAAAAAAAAAB/////////////////////v///4AAAAAAAAAAAAAAAAD////////////////////8////AAAAAAAAAAAAAAAAAH////////////////////j///4AAAAAAAAAAAAAAAAAP///////////////////+f///AAAAAAAAAAAAAAAAAAP////////////////+f/j///wAAAAAAAAAAAAAAAAAAP////////////////5/+P//+AAAAAAAAAAAAAAAAAAAAP///////////////l/h///gAAAAAAAAAAAAAAAAAAA4f//////////////+P8f//8AAAAAAAAAAAAAAAAAAAPw///////////////w+Hg/8AAAAAAAAAAAAAAAAAAAH////////////////+Hh8AcAAAAAAAAAAAAAAAAAAAA/////////////////4YOAAAAAAAAAAAAAAAAAAAAAA//////////////////DnwAAAAAAAAAAAAAAAAAAAAAD/////////////////4N8AAAAAAAAAAAAAAAAAAAAAAP/////////////////A/B/wAAAAAAAAAAAAAAAAAAAAP////////////////4Hg//4AAAAAAAAAAAAAAAAAAAA/////////////////h8P//4AAAAAAAAAAAAAAAAAAAA////////////////8OD///4AAAAAAAAAAAAAAAAAAAD////////////////z/////4AAAAAAAAAAAAAAAAAAAD//////////////////////wAAAAAAAAAAAAAAAAAAAH////////////////3f////wAAAAAAAAAAAAAAAAAAD////////////////4Df////AAAAAAAAAAAAAAAAAAH/////////////////88/////AAAAAAAAAAAAAAAAAA///////////////////w////+AAAAAAAAAAAAAAAAAB///////////////////h////4AAAAAAAAAAAAAAAAAD///////////////////j///+AAAAAAAAAAAAAAAAHgP///////////////////////gAAAAAAAAAAAAAAAH/4f//////////////////////wAAAAAAAAAAAAAAAD//9//////////////////////8AAAAAAAAAAAAAAAAP/////////////////////////wAAAAAAAAAAAAAAAA/////////////////////////+AAAAAAAAAAAAAAAAD/////////////////////////4AAAAAAAAAAAAAAAAH/////////////////////////AAAAAAAAAAAAAAAAAP////////////////////////8AAAAAAAAAAAAAAAAA/////////////////////////h/+AAAAAAAAAAAAAAB////////////////////////+//+AAAAAAAAAAAAAAD////////////////////////////AAAAAAAAAAAAAAP////////////////////////////gAAAAAAAAAAH/gf///////////////////////////+AAAAAAAAAAB//g////////////////////////////wAAAAAAAAAA///w///////////////////////////+AAAAAAAAAAD///g///////////////////////////wAAAAAAAAAAP///h///////////////////////////AAAAAAAAAAAf///Af/////////////////////////4AAAAAAAAAAB///+AAH////////////////////////gAAAAAAAAAAD///8AAP///////////////////////4AAAAAAAAAAAH///4AB///////////////////v////gAAAAAAAAAAAP///wAOgf///////////////8A////4AAAAAAAAAP/A////gDzD////////////////wP////H/gAAAAAAH//A///+A8MP////////////////xx///5//wAAAAAP///h////vgx///////////////+/+B//+f//wAAAAB////B////4DP///////////////AP8A//n///gAAAAD////D////Af///////////////wAb/B/5////gAAAAH///+D//BwD////////////////ABweAAP////gAAAAP///+D/weA/////////////////ADgfAB////+AAAAAf///8AAD4D////////////////+APgPgP////wAAAAB////4AA9gf////////////////8A/gf/////+AAAAAD////wAPOD/////////////////4D/g//////wAAAAAH////4D4wP/7///////////////wP/Dv////+AAAAAAP////++DB//v///////////////B/+GH////gAAAAAAf/////g8P/+///////////////+H/4MP///8AAAAAAAf//8B4Pw//7///////////////4f/g4H///AAAAAAAAf//A+B/j//////////////////x//D4P//gAAAAAAAAP/gHgP+f//////////////////H/8P4PAAAAAAAAAAAAAD8D/5//9///////////////8//4/4PgAAAAAAAAAAAA+wf/n//w/5/////////////z//j/4P//AAAAAAAAAAfmD/////H/H//////////v//v/+P/wP//wAAAAABwAHw4P////8fw/////////++f/+//8//gP//wAAAAP/+H8/h/////z+D/////////75//5//z//Af//wAAAB///+P8P/////PgP/////////jj//n//P/8B///gAAA////h/w/////8QB/////////+GP/8f/+//4H///AAAH///4f/n/////wAH+///////78Af/x//7//gP//+AAB////D/+f////+AA/h///////jwA//H//v//A///8AAP///8f/7/////4AD8H//////+AAB/8P/+f/+D///4AB////j//v/////gAPgf//////4AAD/g//5//4H///wAP///+f/+///f/8AA4B///////gAAH+B//j//gP///gB////z/////9//wAAAH//////+AAAP4D/+P//Af//+AH///+P//f//n/+AAAAf/////+QAAAPgH/4//8A///8A////5//9//+P/4AAAD//////4AAAAcAP/h//4D///4D////P//3//4//AAAAP//f///AAAAAwAf8H//gD///gf///4//+f//D/4AAAB//9///8AAAAAAA/wP/+AH///B////D//5//8H/gAAAH//n///wAAAAAAA/A//4AH//+f///4P//H//gP8AAAA//8f///AAAAAAAB4B//gAP//7///+B//8f/8A/gAAAD//j//38AAAAAAABgD/+AAH//v///wH//h//wB8AAAAP/8P//HwAAAAAAACAP/4AAD/gD//4Af/8H/+ADgAAAA//A//8HAAAAAAAAAAf/gAAAAAB/+AB//gf/wAMAAAAH/4H//wMAAAAAAAAAA/+AAAAAAAAAAH/8A/8AAAAAAA/8A///AAAAAAAAAAAB/4AAAAAAAAAAf/gD/gAAAAAAD/AH//8AAAAAAAAAAAD/gAAAAAAAAAB/8AP8AAAAAAAAAA/v/wAAAAAAAAAAAD8AAAAAAAAAAH/AA/gAAAAAAAAAP///AAAAAAAAAAAADwAAAAAAAAAAfwAD4AAAAAAAAAA/9/8AAAAAAAAAAAAHgAAAAAAAAAB4AAOAAAAAAAAAAH/z/gAAAAAAAAAAAAOAAAAAAAAAAEAAAAAAAAAAAAAA//P+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8f4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/w/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//B8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAA="
        }
      },
      {
        "name": "Double golden hoop",
        "logicalId": "hoop",
        "src": "assets/decompositions/05_spring_sale/layers/hoop.webp",
        "native": "assets/decompositions/05_spring_sale/native/hoop.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/hoop.webp",
        "prompt": "Extract only the thin double-line golden circular hoop surrounding the central text. Keep both yellow-orange concentric lines at their exact original circle position and size, including the top arcs crossing the upper flower. Exclude all flowers, green leaves, text and paper background; the circle interior and exterior must be transparent. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/hoop.webp",
        "role": "object",
        "bounds": [
          207,
          187,
          832,
          810
        ],
        "editable": true,
        "inspectionCrop": [
          195,
          175,
          844,
          822
        ],
        "hitMask": {
          "width": 256,
          "height": 255,
          "data": "AAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////A//////gAAAAAAAAAAAAAAAAAAAAAAAAAAAD////4AAAAH////wAAAAAAAAAAAAAAAAAAAAAAAAAAA///+AAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAP//+AAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAH///AAAAAAAAAA///4AAAAAAAAAAAAAAAAAAAAAAAAB//+AAAAAAAAAAAP//4AAAAAAAAAAAAAAAAAAAAAAAA///gAAAAAAAAAAAH//8AAAAAAAAAAAAAAAAAAAAAAAP//gAAAAAAAAAAAAB//8AAAAAAAAAAAAAAAAAAAAAAD//4AAAAAAAAAAAAAB//8AAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAH/8AAAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAA/8AAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAH/gAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8A/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Af4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+B/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4H8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+B/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4P4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfw/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/D+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8P4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfw/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/H8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/n+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8P4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfw/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/D/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/B/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4H+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+B/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4H+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Af4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4Af8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AB/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAf+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAf+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/gAAAAAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAf+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+AAAAAAAAAAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAB//AAAAAAAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAAB/+AAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAP/wAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAB//AAAAAAAAAAAAAAAAAAAAAAAAD/+AAAAAAAAAAAAAD/+AAAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAH/8AAAAAAAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAP/8AAAAAAAAAAAAAAAAAAAAAAP/8AAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAf/4AAAAAAAAAAAAAAAB//wAAAAAAAAAAAAAAAAAAAAH//AAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAP/+AAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAP//gAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAP//gAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAP//gAAAAAAAAAAAAAAAP//gAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAAAAAAAAH//4AAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAAAAAAAB//+AAAAAAAAAAAAAAAAAAAAAAf//4AAAAAAAAAAAAA///gAAAAAAAAAAAAAAAAAAAAAAf//8AAAAAAAAAAAAf//4AAAAAAAAAAAAAAAAAAAAAAAf///AAAAAAAAAAAf//+AAAAAAAAAAAAAAAAAAAAAAAAP///gAAAAAAAAAP///gAAAAAAAAAAAAAAAAAAAAAAAAP///4AAAAAAAAf///4AAAAAAAAAAAAAAAAAAAAAAAAAH////AAAAAAA////8AAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAB/////AAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///gAAAAAAAAAAAAAAAAAAA"
        }
      },
      {
        "name": "Lower floral wreath",
        "logicalId": "flowers_hero",
        "src": "assets/decompositions/05_spring_sale/layers/flowers.webp",
        "native": "assets/decompositions/05_spring_sale/native/flowers.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/flowers.webp",
        "prompt": "Extract all connected flowers, green leaves and stems forming the lower half of the wreath: the orange sunflowers, orange and small pink flowers, and both lavender daisies. Preserve their exact original arrangement as one layer. Exclude the separate single flower and foliage at the very top, the thin golden hoop, all text and beige paper. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/flowers.webp",
        "role": "hero",
        "bounds": [
          194,
          549,
          870,
          949
        ],
        "editable": true,
        "inspectionCrop": [
          182,
          537,
          882,
          961
        ],
        "hitMask": {
          "width": 256,
          "height": 151,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHA/wAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n/AAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/f8AAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9/wAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///AAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//4wAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///P4AD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////wAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////gA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////+AD//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////4AP/8AGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////AAf/wA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////4AB//AHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////AAH/8A/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///+AAAf/wH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///+AAA//A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4f///8AAD/8H/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5////wAAH/wf+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3////gAAP/D/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////+AAAf8P/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////8A/w/h/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////wB/5+H/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////+AH/z8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////wf//z/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////h///P/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////+D//s//BAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////4P/+z/8cAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////A///v/j4AAAAAAAAAAAAAAAAAAAAAAAAAAA///////4B////+fgAAAAAAAAAAAAAAAAAAAAAAAAAAH///////8H////7+AAAAAAAAAAAAAAAAAAAAAAAAAAAf///////4P/////8AAAAAAAAAAAAAAAAAAAAAAAAAAB////////wf/////wAAAAAAAAAAAAAAAAAAAAAAAAAAD////////A//////AAAAAAAAAAAAAAAAAAAAAAAAAAAH///////4A/////8AAAAAAAAAAAAAAAAAAAAAAAAAAA///////+AA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAH///////4B//////AAAAAAAAAAAAAAAAAAAAAAAAAAA////////7//////8AAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAP////////f//////zgAAAAAAAAAAAAAAAAAAAAAAAAAP///////8///////+gAAAAAAAAAAAAAAAAAAAAAAAAAH///////j////////GAAAAAAAAAAAAAAAAAAAAAAAAAf//////wH///////84AAAAAAAAAAAAAAAAAAAAAAAAH///////gf///////3mAAAAAAAAAAAAAAAAAAAAAAAA////////B////////e4AAAAAAAAAAAAAAAAAAAAAAAH///////+H/////////gAAAAAAAAAAAAAAAAAAAAAAAf///////4f////////+AAAAAAAAAAAAAAAAAAAAAAAD////////B/////////4cAAAAAAAAAAAAAAAAAAAAAAf///////4D/////////HwAAAAAAAAAAAAAAAAAAAAAB////////AH////////8+AAAAAAAAAAAAAAAABgAAAAH///////8AH/////////7gAAAAAAAAAAAAAAcHDAAAEf///////4AA/////////+AAAAAAAAAAAAAEBw8cAAAZ////////gAf/////////wAAAAAAAAAAAAA4HjzwAAD3///////8AD//////////AAAAAAAAAAAAADw+fvEAAff//////8gA//////////4AAAAAAAAAAAAHPj5/9wAB////////wAP//////////AAAAAAAAAAAAAe/v3//gAP////////AA//////////8AAAAAAAAAAAAA/////8AM////////4AB///////////4AAAAAAAAAAAD/////wP7///////+AAD///////////AAAAAAAAAAAAP/////D/v//////v4AAH//////////8AAAAAAAAAAAA/////9////////8/gAAP//////////AAAAAAAAAAAPB//////////////x+AAAf/////////4AAAAAAAAAAAfn//////////////D4AAAf/////////8AAAAAAAAAAB///////////////4HgAAAf/////////+AAAAAAAAADH///////////////gAAAAAf/////////4AAAAAAAAAPv//////////////8AAAAAAD/////////AAAAAAAAAA///////////////4AAAAAAAH////////wAAAAAAAAAB///////////////wAAAAAAA/////////gAAAAAAHAAH///////////////gAAAAAAH/////////wEAAAAA+AAP//////////////+AAAAAAA//////////A4AAAAH8B3//////////////v8AAAAAAD//////////HwAAfAf4P//////////////+/wAAAAAAP/////////+/AAD+B/j///////////////5/AAAAAAAf//////////8AAP8P+P///////////////D4AAAAAAAf//////////wAA/w/5///////////////+HgAAAAAAB//////////+AAD/j/v///////////////4AAAAAAAAP////////x//wQP/f+////////////////wAAAAAAAB/////////3//jw/9//////////////////f+AAAAAAP///////////+fz//////////////////////AAAAAAPP//////////7/v/////////////////////+AAAAAAB///////////P///////////////////////8AAAAAAP//////////4f///////////////////////8AAAAAB//////////+B///////////////////8////wAAAAAP//////////8H///////////////////////+AAAAAA///////////+f///////////////////////wAAAAAH///////////////////////////////////+AAAAAAMf//////////////////////////////+///gAAAAAAD///////+f//////////////////////8//8AAAAAAAf///////x///////////////////////5//AAAAAAAAP//////+////////////////////////w/AAAAAAAAA///////3////////////////////////gAAAAAAAAAH7////////////////////////////v//AAAAAAAAAAef////////////////////////////f/+AAAAAAAAABh////////////////////////////+//8AAAAAAAAAAH3//////////////////////////////wAAAAAAAAAAef//////////////////////////////AAAAAAAAAABx////////////////////////////v/+AAAAAAAAAAAH////////////////////////////P/8AAAAAAAAAAAe///////////////////////////8H+AAAAAAAAAAABz///////////////////////////wAAAAAAAAAAAAACP////////////////////////3//AAAAAAAAAAAAAAA3////////////////////////H/8AAAAAAAAAAAAAAAP///////////////////////+P/4AAAAAAAAAAAAAAAP3//////////////////////4P/gAAAAAAAAAAAAAAAA///////////////////////gD+AAAAAAAAAAAAAAAAP///////////////////////AAAAAAAAAAAAAAAAAAB///////////////////////8AAAAAAAAAAAAAAAAAAP////v//////////////////AAAAAAAAAAAAAAAAAAA////+f/////////////////8AAAAAAAAAAAAAAAAAAAf/7////////////////////AAAAAAAAAAAAAAAAAAAB/+f///////////////////8AAAAAAAAAAAAAAAAAAAH/7////////////////////4AAAAAAAAAAAAAAAAAAAf/f//////////////////PzgAAAAAAAAAAAAAAAAAAB/5//////////////////8fAAAAAAAAAAAAAAAAAAAAH/H//////////////////w+AAAAAAAAAAAAAAAAAAAAPw/8/////////////////A4AAAAAAAAAAAAAAAAAAAAcD/n////////////////+AAAAAAAAAAAAAAAAAAAAAAAP4f///////////////z4AAAAAAAAAAAAAAAAAAAAAAAAB////////////////HAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////8MAAAAAAAAAAAAAAAAAAAAAAAAAfP//////////////wwAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////P8GAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////8DwYAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////vwAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////+v/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////7f/gAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////2/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////p/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////+3/4AAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////9v/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////+/zP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////7/GPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////x/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////H+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////h/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHv//////37+H/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////+f/DP4f+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////4/8AfB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////j/wB8D/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9//+H/ADgP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/n//wP8AMAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8f9/AfwAQA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/h/n8A8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8H+PgAgAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAA="
        }
      },
      {
        "name": "Spring script",
        "logicalId": "spring",
        "src": "assets/decompositions/05_spring_sale/layers/spring.webp",
        "native": "assets/decompositions/05_spring_sale/native/spring.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/spring.webp",
        "prompt": "Extract only the large orange-red cursive word \"Spring\" at the center. Preserve the exact original lettering, swashes, stroke widths, color, position and size. Exclude the green word SALE, all other text, the flowers, golden hoop and paper. All spaces around and inside the letters must be transparent. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/spring.webp",
        "role": "text",
        "bounds": [
          307,
          352,
          728,
          535
        ],
        "editable": true,
        "inspectionCrop": [
          295,
          340,
          740,
          547
        ],
        "hitMask": {
          "width": 256,
          "height": 111,
          "data": "AAAAAAAAA//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///+AH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//8AAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//+AAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///gAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//4AAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//+AAAAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//gAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//8AAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///AAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//wAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//+AAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//wAAAAAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//wAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//8AAAAAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//gAAAAAD//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//+AAAAAAP/8AAAAAAAAAAAAD8AAAAAAAAAAAAAAAAf//gAAAAAB//wAAAAAAAAAAAA/4AAAAAAAAAAAAAAAB//8AAAAAAP/+AAAAAAAAAAAAD/wAAAAAAAAAAAAAAAP//wAAAAAB//4AAAAAAAAAAAAP/AAAAAAAAAAAAAAAD//+AAAAAAH//AAAAAAAAAAAAB/+AAAAAAAAAAAAAAAP//wAAAAAA//8AAAAAAAAAAAAH/4AAAAAAAAAAAAAAB//+AAAAAAH//gAAAAAAAAAAAA//gAAAAAAAAAAAAAAP//4AAAAAAf/+AAAAAAAAAAAAD/+AAAAAAAAAAAAAAA///AAAAAAD//wAAAAAAAAAAAAP/4AAAAAAAAAAAAAAH//4AAAAAA///AAAAAAAAAAAAB//AAAAAAAAAAAAAAA///AAAAAAD//4AAAAAAAAAAAAH/4AAAAAAAAAAAAAAH//4AAAAAAf//gAAAAAAAf8AAAf/gAAAAAAAAAAAAAAf//gAAAAAD//8AAAAAAAD/8AAA/4AAAAAAAAAAAAAAD//8AAAAAAf//gAAAAAAAP/wAAB8AAAAAAAAAAAAAAAP//wAAAAAD//8AAAAAAAB//gAAAAAAAAAAAAAAAAAAA//+AAAAAAf//wAAAAAAAP/+AAAAAAAAAAAAAAAAAAAH//wAAAAAD//+AAAADwAA//4AAAAAAAAAAAAAB4AAAAf//AAAAAAf//wAAAA/4AD//AAAAAAAAAPgAAB/+AAAD//4AAAAAH//+AH4AP/4AP/8AAPgAD8AB/gAA//+AAAP//gAAAAAf//4AfwA//gB//wAA/AAP4AP+AAH//8AAA//+AAAAAH///AB/gP//AH/+AAH+AA/4B/8AB///wAAD//wAAAAA///4AP/h//+Af/wAA/+AD/wP/4AP///gAAP//AAAAAP///AA/+P//4B//AAD/4Af/B//gB///+AAA//4AAAAH///4AD/8///gH/4AAP/gB/+P//Af///4AAD//gAAAA////AAf/3+/+Af/gAA//AP/5//8B//8fwAAP/+AAAAD///4AB///z/4B/+AAH/8A//v//wP//A/AAf//4AAAAf///AAH//+f/gH/4AAf/gD////+D//4B8AD///gAAAA///4AA///x/+AP/gAD/+Af////4P//AHwAP//+AAAAD///AAD///H/4B/+AAP/4B/////h//4P/AB/f/8AAAAP//wAAf//4f/gH/4AB//AP////8P//A/4AH8//4AAAAf/+AAB///D/+A//gAH/4B/////g//4D/gA/j//wAAAB//wAAP//4P/4D//gA//gH////+H//gf+AH8H//wAAAB/+AAA///B//gf//AD/8A/////wf/8B/8A/wf//wAAAD/gAAD//8H/+B//+Af/wD/////D//gH/wH+A///4AAAP4AAAf//gf/wP5/+B//Af////8P/8Af/gf4B////wAAEAAAD//8D//B/v/4P/4D/////h//wB/+H+AB////+AAAAAAP//wP/4P8//g//AP//7/8P/+AP/4/4AD/////+AAAAA//+A//g/n/+D/8A///P/w//4A//j/AAD///////AAAH//4H/+H8f/wf/wH//5//D//gH/8/4AAD///////gAAf//A//w/z/+B/+A///H/4P/8Af/3/AAAH///////4AD//4D//H+P/4P/4D//8//h//gD/+f4AAAD///////4AP//gf/4/w//B//Af//j/8P/+AP///AAAAA///////4B//8B//n+H/8H/8D//8f/w//4B///4AAAAAf//////wH//wP/8/4f/w//gP//x/+D//AH///AAAAAAB//////gf/+A//3+B/+D/+B//8H/4f/8A///4AAAAAAAP/////D//wH///4P/4f/4P//wf/h//wD///AAAAAAAAAA///8P//A////A//D//B//+D/8P//Af//4AAAAAAAAAAAf/w//4D///wD/8P/8H//4P/x//4D//+AAAAAAAAAAAAf/H//gf///AP/x//g///A//H//gf//4AAAAAAAAAAAB/+//8D///wA/+P/+P//4D/4//+B//+AAAAAAAAAAAAP/z//gf//+AD/4//5///gP/n//4P//wAAAAAAAAAAAB//f/+D///wAP/n//P//8A/+/v/h//+AAAAAAAAAAAAP/9//4///8AA//////n/gD//8/+f//wAAAAAAAAAAAB//3//////AAD//9//+f+AH//h////8AAAAAAAAAAAAf////////4AAH//n//w/4Af/+D////wAAAAAAAAAAAD////////8AAAP/8f/8B/wA//gH///+AAAAAAAAAAAA///f/////AAAAf/gf/gD/AB/8AP///4AAAAAAAAAAAH//9//v//wAAAB/8B/8AP8AH/gAf///gAAAAAAIAAAB///v/8P/wAAAAA/AB/AAPgAH4AA///8AAAAAADwAAAP//9//wAAAAAAAAAAAAAAAAAAAAAf//gAAAAAAfgAAD///n/+AAAAAAAAAAAAAAAAAAAAAA//+AAAAAAB+AAAf//8f/4AAAAAAAAAAAAAAAAAAAAAH//wAAAAAAP4AAH///z//gAAAAAAAAAAAAAAAAAAAAA///AAAAAAA/gAD///8P/8AAAAAAAAAAAAAAAAAAAAAP//4AAAAAAB/AA////g//gAAAAAAAAAAAAAAAAAAAAB///AAAAAAAH+Af///8H/+AAAAAAAAAAAAAAAAAAAAAf//8AAAAAAAf//////g//wAAAAAAAAAAAAAAAAAAAAD/f/gAAAAAAA//////4D//AAAAAAAAAAAAAAAAAAAAAf7/+AAAAAAAD//////AP/4AAAAAAAAAAAAAAAAAAAAD/f/4AAAAAAAP/////wB//AAAAAAAAAAAAAAAAAAAAA/x//AAAAAAAAf////8AH/8AAAAAAAAAAAAAAAAAAAAH+P/4AAAAAAAB/////gAf/wAAAAAAAAAAAAAAAAAAAA/w//gAAAAAAAD////4AB/+AAAAAAAAAAAAAAAAAAAAH+P/8AAAAAAAAH///+AAP/4AAAAAAAAAAAAAAAAAAAA/g//gAAAAAAAAP///gAA//gAAAAAAAAAAAAAAAAAAAH8H/+AAAAAAAAAP//wAAD/8AAAAAAAAAAAAAAAAAAAA/g//wAAAAAAAAAP/wAAAP/gAAAAAAAAAAAAAAAAAAAD8H/+AAAAAAAAAAPwAAAA/+AAAAAAAAAAAAAAAAAAAAfgf/wAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAB8H//AAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAHw//4AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAeP//AAAAAAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAB9//4AAAAAAAAAAAAAAAAH/gAAAAAAAAAAAAAAAAAAAH///gAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAf//8AAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAAA///AAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAD//4AAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAA"
        }
      },
      {
        "name": "SALE title",
        "logicalId": "sale",
        "src": "assets/decompositions/05_spring_sale/layers/sale.webp",
        "native": "assets/decompositions/05_spring_sale/native/sale.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/sale.webp",
        "prompt": "Extract only the green uppercase serif word \"SALE\" directly below Spring. Preserve the exact original four letters, thin strokes, color, position and size. Exclude Spring and all other elements. Keep the counters inside the letters transparent. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/sale.webp",
        "role": "text",
        "bounds": [
          450,
          497,
          603,
          545
        ],
        "editable": true,
        "inspectionCrop": [
          438,
          485,
          615,
          557
        ],
        "hitMask": {
          "width": 153,
          "height": 48,
          "data": "AAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAAAAB//gAAAA/gAAB//4AAD/////gAA///gAAAH/AAAP//gAAP////+AAH8P/gAAA/8AAAf/8AAA//wf/4AB/AP/AAAP/4AAA//gAAA//AH/gAP8Af+AAB//gAAD/+AAAD/8AP+AB/gB/8AAH//AAAP/wAAAP/wAP4AH+AH/wAAP/8AAAf/AAAA//AAfgA/4AP/AAAf/4AAB/8AAAD/8AA+AD/gA/+AAA//gAAH/wAAAP/wAD4Af+AD/4AAD/+AAAf/AAAA//AAHgB/4AP/gAAP/8AAB/8AAAD/8AAeAH/wAf8AAA//wAAH/wAAAP/wAA4Af/gB/gAAH//gAAf/AAAA//AADgB//AB8AAAd/+AAB/8AAAD/8AAOAH//AAAAABn/8AAH/wAAAP/wAA4AP/+AAAAAOf/wAAf/AAAA//AABgA//+AAAAA4//AAB/8AAAD/8AAGAD//+AAAADD/+AAH/wAAAP/wAAYAH//+AAAAcP/4AAf/AAAA//AAAAAf//+AAABgf/wAB/8AAAD/8AAAAA///8AAAGB//AAH/wAAAP//n8AAB///8AAA4D/8AAf/AAAA////4AAD///4AADAP/4AB/8AAAD////AAAD///wAAcA//gAP/wAAAP/wAAAAAH///gABwB//AAf/AAAA//AAAAAAH///AAGAH/8AD/8AAAD/8AAAAAAH//8AA4AP/wAP/wAACP/wAAAAAAH//4AD////gA//AAAY//AAAYAMAH//wAf///+AD/8AABz/8AABgD8AH//ABwB//8AP/wAAHP/wAAGAf4AP/8AGAAf/wA//AAA8//AAAYD/wAf/wA4AA//AD/8AADz/8AADgP/AA//ADgAD/+AH/wAAPP/wAAOA/8AB/8AcAAH/4Af/AAB8//AAA4D/4AD/wBwAAf/wB/8AAHz/8AAHgP/gAP/APAAB//AP/wAA/P/wAAeAf+AA/8A8AAD/+A//AAD8//AAD4B/4AD/wHwAAP/4D/8AAfz/8AAfgD/gAP+AfAAA//wP/wAD/P/wAD+AP+AA/wD+AAD//A//AAf8//AAf4Af8AH/Af8AAP/+D/8AD/z/8AH/gA/4A/wD/4AB//8P/wB//f/wA/+AA/8P+B//8Af//5///////////4AA///gH//4B///////////////gAAP/AAAAAAAAAAAAYAAAAAAAAAA"
        }
      },
      {
        "name": "Special offer caption",
        "logicalId": "offer",
        "src": "assets/decompositions/05_spring_sale/layers/offer.webp",
        "native": "assets/decompositions/05_spring_sale/native/offer.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/offer.webp",
        "prompt": "Extract only the dark gray uppercase words \"SPECIAL OFFER\" above Spring, preserving the exact original lettering, spacing, size and position. Exclude every other word, the floral decoration and paper background. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/offer.webp",
        "role": "text",
        "bounds": [
          470,
          357,
          625,
          377
        ],
        "editable": true,
        "inspectionCrop": [
          458,
          345,
          637,
          389
        ],
        "hitMask": {
          "width": 155,
          "height": 20,
          "data": "AAAAAAAAAwAAGAAAAAAAAAAAAAA/B/g/4P4HgfAcAAD4D/D/B/B/gH+H/D/g/weB8BwAAf4f8P+P+H/Af4f8P+H/B4PwHAAD/h/w/w/4f8D3h/w+we+Hg/AcAAPeDwD+D/B/wPOHvDwB54eD8BwAA94PAPAPAHnA84ecPAHnh4P4HAADzg4A8A8AecB4B5w8AecHg/gcAAPODgDwDwB7wHwHvD+B4AeD+BwAA84PAPYP8HvAPgf8P+HgB4O4HAADzg/g/w/wf8AfB/w/4eAHh7gcAAPOD+D/D/h/gA8H+D/B4AeHuBwAA84P4P8P8H/AD4fwPAHnB4e8HAADzg8A8A8Ae8Dnh4AcAeeHh/wcAAPODgDwDwB5wPeHgBwB54eH/BwAA94OAPAPAHnA94eAHAHnB4f8HAAD3g4A8A8AeeD/h4Af4f8Hj5wf4AP+DgDwD/h54H+HgB/w/wcPHh/gAf4OAPAP+HngfweAH/D+Bw8eH+AA/A4A8Af4eeAeAwAAIAADBgwAAAB4BgBAAAAAwA=="
        }
      },
      {
        "name": "Discount & fine frame",
        "logicalId": "discount",
        "src": "assets/decompositions/05_spring_sale/layers/discount.webp",
        "native": "assets/decompositions/05_spring_sale/native/discount.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/discount.webp",
        "prompt": "Extract the dark gray text \"UP TO 35% OFF\" and its enclosing thin pale-green rectangular outline below SALE, as one layer. Preserve the exact original letters, percent sign, border and alignment. The area between letters and inside the rectangle must be transparent. Exclude the text below and all other elements. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/discount.webp",
        "role": "text",
        "bounds": [
          411,
          581,
          635,
          627
        ],
        "editable": true,
        "inspectionCrop": [
          399,
          569,
          647,
          639
        ],
        "hitMask": {
          "width": 224,
          "height": 46,
          "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////7/////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AA+Hg/4AD/+B/AAA/gH/wHwHAAAfwD/wf+AAPAAPj8P/AA//w/4AAf+B/8D+DwAAP+B/+P/wADwAD4+D/4AP/8f/AAP/gf/A/w4AAH/wf/j/8AA8AA+Pg//AD/+H/4AD/8H/wf8eAAD/+H/4//AAPAAPj4P/wAP/h/+AA//B/4HvHgAA/fh/8P/gADwAD4+D58AAeAfPgAPnwfAB7xwAAPj4fAD4AAA8AA+Ph+fAAHgPh4AD58HwAe88AAD4+HwA+AAAPAAPj4fnwAB4D4eAA+fB8AHvOAAA+Ph8APgAADwAD4+H58AAeA+HgAAHwf+B7zgAAPj4fAD4AAA8AA+Ph+fAAHgPx4AAD8H/we9zwAD4+HwA+AAAPAAPj4fnwAD4D8eAAD/B/8Hvd+AA+Ph8APgAADwAD4+H58AA+A/HwAA/gf/h7//wAPj4f+D/wAA8AA+Ph//AAPgPx8AAP4H/4f//8AD4+H/w/8AAPAAPj4f/gAD4D8fAAD+B8+H/7vAA+Ph/8P/AADwAD4+H/4AA+A/HwAAfwePg/+5wAPj4f+D/wAA8AA+Ph/8AAPgPx8AAB8HD4P3ucAD4+H/g/8AAPAAPj4f+AAD4D8fAA4fAg+AxznAA+Ph+APwAAHwAD4+H4AAA+A/HwAPjwePgA85wAPj4fAD4AAB8AA+Ph8AAAPgPz8AD48Pj4APOcAD4+HwA+AAAfAAPj4fAAAD4D8/AA+PB4+AHjnAA+Ph8APgAAHwAD8+HwAAA+A/PgAPnwfPgB45wAPj4fAD4AAB8AAf/h8AAAPgH/4AD/8H34AcOcAD/+DwA+AAAfAAH/4fAAAD4B/+AAf/B/8APD/AAf/h8APgAAHwAA/8HwAAA+AP/AAH/gP/ADg/wAH/wfAD4AAB8AAH+B8AAAPgB/wAA/4B/gB4H4AA/4DwA+AAAfAAA/APAAAB4APwAAD4APwAMA8AAH8A8AHgAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP////+D/////////////////gAD/////wAA9////////////////////////////////////+O+AAAAA/////8Af//AAAAA/gAP//wAAAAA++AA=="
        }
      },
      {
        "name": "Website caption",
        "logicalId": "website",
        "src": "assets/decompositions/05_spring_sale/layers/website.webp",
        "native": "assets/decompositions/05_spring_sale/native/website.webp",
        "alpha": "assets/decompositions/05_spring_sale/alpha/website.webp",
        "prompt": "Extract only the small dark gray line \"website link here\" under the discount box. Preserve the exact original lower-case letters, spacing, baseline, size and position. Exclude the box, all other text, flowers and background. Return a transparent RGBA layer on the unchanged full image canvas. Keep the original position, scale, colors and fine details; do not recenter, resize, crop or add objects. Everything outside the requested layer must be fully transparent.",
        "origin": "model_i2rgba_v2",
        "original": "assets/decompositions/05_spring_sale/original/website.webp",
        "role": "text",
        "bounds": [
          428,
          638,
          617,
          653
        ],
        "editable": true,
        "inspectionCrop": [
          416,
          626,
          629,
          665
        ],
        "hitMask": {
          "width": 189,
          "height": 15,
          "data": "AAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAOAAAHAAAAADgwAADAAAwAAAAAAAAAAAAOAAAHAQAAADg4AADAAAwAAAAAAAAAAAAOAAADA4AAADgwAADAAAwAAAAAAA4YMDgOYAwDB4BwADgwBwHDAAzgDgAAGAYccP4P+D+DD+H4ADh4f8HHAA/wP4P4fgcccf8P/D+HD+P8ADg4f+HPAA/4P8P4/wM88ccPHHwHB+feADg4eeHeAA44e8PQ7wO+4f+PDj8HBwf+ADg4cOH8AA44f+OB/4P+4/+PDj+HBwf+ADg4cOH8AA44f+OB/4P34f+PDj+HBwfkADg4cOH+ABw4fOOB/wHnwf8PHD/HB8P8ADh4cOH/ABw4f+OB/wHnwP8P/D/HB+P8ADh4cOHvgBw4P8OA/wDDwH4H+D+DA+D8ADg4cOHjgBw4H8OAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        }
      }
    ],
    "preview": "assets/decompositions/05_spring_sale/final/preview.webp"
  }
];
