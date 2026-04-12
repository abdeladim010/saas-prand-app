export interface Template {
  id: string
  title: string
  description: string
  category: string
  categoryIcon: string
  image: string
  price: number
  prompt: string
  isNew?: boolean
  isTrending?: boolean
}

export const categories = [
  { id: "hero", name: "Product Hero Shot", icon: "🏆" },
  { id: "lifestyle", name: "Lifestyle Scene", icon: "🌿" },
  { id: "closeup", name: "Close-up / Detail Shot", icon: "🔍" },
  { id: "background", name: "Background Variations", icon: "🔄" },
]

export const templates: Template[] = [
  // Product Hero Shot Templates
  {
    id: "hero-1",
    title: "Clean Premium Studio",
    description: "Clean minimal hero shot for premium product branding",
    category: "hero",
    categoryIcon: "🏆",
    image: "/images/prompt-ads prompt-hydrating-face-cream prompt-jar-gold-lid-hero-shot.webp",
    price: 2.99,
    prompt: `Create image a hyper-realistic premium product hero shot of a luxury hydrating [cream] jar with gold lid,

floating in mid-air, perfectly centered composition,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: soft diffused studio lighting with subtle rim light and top highlight,
clean soft shadows, glossy reflections,

background: smooth gradient using brand color soft beige [#E8D8C3], minimal and elegant,

style: clean minimal luxury e-commerce aesthetic, high-end branding look,

no distractions, no extra objects, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
  {
    id: "hero-2",
    title: "Dark Cinematic Luxury",
    description: "Luxury cinematic lighting for high-end product visuals",
    category: "hero",
    categoryIcon: "🏆",
    image: "/images/prompt premium-prand prompt-sunscreen-gold-cap-hero-shot-ecommerce.webp",
    price: 2.99,
    prompt: `Create image a premium advertising product shot of a [sunscreen bottle with gold cap],

floating mid-air, slightly tilted for dynamic effect,

studio photography, ultra sharp focus,

lighting: soft diffused light with warm glow highlights,

background: smooth beige gradient [#E8D8C3],

style: luxury skincare advertisement,

add minimal text: "Protect Your Glow",

clean shadows, glossy reflections,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
  {
    id: "hero-3",
    title: "Soft Beauty Style",
    description: "Soft beauty lighting for skincare and cosmetic brands",
    category: "hero",
    categoryIcon: "🏆",
    image: "/images/ai-product-hero-shot-template-ecommerce-branding.webp",
    price: 2.99,
    isNew: true,
    prompt: `Create image a hyper-realistic premium product shot of a glass face serum bottle with gold dropper,

perfectly centered, floating mid-air, straight front camera angle,

Same premium skincare brand identity, consistent color palette (soft beige [#E8D8C3] + gold accents),

lighting: soft diffused studio lighting with subtle rim light and top highlight,

background: smooth gradient beige, very clean,

ultra sharp focus, 85mm lens, f/2.8,

--seed 777`,
  },
  {
    id: "hero-4",
    title: "Glossy Commercial Ad",
    description: "Bold e-commerce advertising style for high conversion",
    category: "hero",
    categoryIcon: "🏆",
    image: "/images/ecommerce-prompt-product-image-consistent-branding.webp",
    price: 2.99,
    prompt: `Create image a hyper-realistic premium product hero shot of a luxury eye [cream tube] with gold details,

floating in mid-air, perfectly centered composition,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: soft diffused studio lighting with subtle rim light and top highlight,
clean soft shadows, glossy reflections,

background: smooth gradient using brand color soft beige [#E8D8C3], minimal and elegant,

style: clean minimal luxury e-commerce aesthetic, high-end branding look,

no distractions, no extra objects, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
  {
    id: "hero-5",
    title: "Glossy Commercial Ad",
    description: "Bold e-commerce advertising style for high conversion",
    category: "hero",
    categoryIcon: "🏆",
    image: "/images/inconsistent-ai-product-images-example.webp",
    price: 2.99,
    prompt: `Create image a premium product shot of a sunscreen bottle,

floating mid-air, 45-degree side angle,

Same premium skincare brand identity, consistent color palette (soft beige [#E8D8C3] + gold accents),

lighting: soft warm light with highlight glow,

background: smooth beige gradient slightly brighter,

add minimal text: "Protect Your Glow",

--seed 777`,
  },

  // Lifestyle Scene Templates
  {
    id: "lifestyle-1",
    title: "Natural Morning Light",
    description: "Warm natural morning scene for authentic product display",
    category: "lifestyle",
    categoryIcon: "🌿",
    image: "/images/why-your-ai-product-images-look-different-everytime.webp",
    price: 2.99,
    isTrending: true,
    prompt: `Create an image of a lifestyle wellness morning scene with a Veiled woman applying natural skincare product,

STRICT brand consistency:
primary colors: fresh green [#4CAF50] and soft yellow [#F4D03F],
no other dominant colors allowed,

environment: minimal clean bedroom with plants, green accents, yellow details,

product: organic face cream jar visible on table, same color palette (green + yellow),

lighting: ALWAYS soft diffused natural morning light, consistent brightness, no harsh shadows,

style: clean minimal wellness lifestyle, realistic (NOT cartoon, NOT cinematic),

camera: 50mm lens, eye-level, shallow depth of field,

composition: centered subject, balanced frame,

DO NOT change style, DO NOT change lighting, DO NOT introduce new colors,

--seed 777
--style clean-consistent-wellness-v1`,
  },
  {
    id: "lifestyle-2",
    title: "Minimalist Workspace",
    description: "Clean desk setup with modern workspace aesthetic",
    category: "lifestyle",
    categoryIcon: "🌿",
    image: "/images/fashion-store-whose-clothing-never-looked-wearable-in-ai-photos.webp",
    price: 2.99,
    prompt: `Create a high-fashion, editorial-quality shot of an oversized streetwear hoodie

Fabric/Material: washed black cotton fleece texture
Shot Style: flat lay on raw concrete surface
Angle: overhead 90-degree top-down shot
Lighting: natural, diffused overcast lighting
Fabric Appearance: perfectly smooth fabric with natural folds
Aesthetic: urban minimal, clean design, high fashion editorial
Model/Mannequin: no model or mannequin—focus on the hoodie
Resolution: 8K sharp detail
Negative Prompts: --no deformed wrinkles distortion, --no unrealistic folds, --no distracting backgrounds
--seed 55821`,
  },
  {
    id: "lifestyle-3",
    title: "Cozy Home Setting",
    description: "Warm homey atmosphere for lifestyle product shots",
    category: "lifestyle",
    categoryIcon: "🌿",
    image: "/images/ai-streetwear-hoodie-bad-product-image-example.webp",
    price: 2.99,
    isNew: true,
    prompt: `Create image a vibrant healthy smoothie lifestyle scene,

product: smoothie glass with banana In a aluminum bottle His name [add product].

STRICT palette:
green [#4CAF50] + yellow [#F4D03F] dominant,

environment: bright clean kitchen or outdoor table, controlled colors,

lighting: soft natural daylight, fixed exposure, no overexposure,

style: clean commercial lifestyle, realistic, NOT cinematic or cartoon,

camera: 35mm lens, slight dynamic feel but controlled composition,

focus: freshness + healthy energy,

DO NOT change colors, DO NOT change lighting, DO NOT change style,

--seed 777
--style clean-consistent-wellness-v1`,
  },
  {
    id: "lifestyle-4",
    title: "Outdoor Adventure",
    description: "Natural outdoor setting for active lifestyle products",
    category: "lifestyle",
    categoryIcon: "🌿",
    image: "/images/high-quality-ai-streetwear-hoodie-flat-lay-realistic-fabric-clean-background.webp",
    price: 2.99,
    prompt: `Create image a vibrant healthy smoothie lifestyle scene,

product: smoothie glass with banana + mango (yellow) + greens,

STRICT palette:
green [#4CAF50] + yellow [#F4D03F] dominant,

environment: bright clean kitchen or outdoor table, controlled colors,

lighting: soft natural daylight, fixed exposure, no overexposure,

style: clean commercial lifestyle, realistic, NOT cinematic or cartoon,

camera: 35mm lens, slight dynamic feel but controlled composition,

focus: freshness + healthy energy,

DO NOT change colors, DO NOT change lighting, DO NOT change style,

--seed 777
--style clean-consistent-wellness-v1`,
  },
 {
    id: "lifestyle-5",
    title: "Outdoor Adventure",
    description: "Natural outdoor setting for active lifestyle products",
    category: "lifestyle",
    categoryIcon: "🌿",
    image: "/images/comparison-hoodie-quality-fix.webp",
    price: 2.99,
    prompt: `Create image a vibrant healthy smoothie lifestyle scene,

product: smoothie glass with banana + mango (yellow) + greens,

STRICT palette:
green [#4CAF50] + yellow [#F4D03F] dominant,

environment: bright clean kitchen or outdoor table, controlled colors,

lighting: soft natural daylight, fixed exposure, no overexposure,

style: clean commercial lifestyle, realistic, NOT cinematic or cartoon,

camera: 35mm lens, slight dynamic feel but controlled composition,

focus: freshness + healthy energy,

DO NOT change colors, DO NOT change lighting, DO NOT change style,

--seed 777
--style clean-consistent-wellness-v1`,
  },

  // Close-up / Detail Shot Templates
  {
    id: "closeup-1",
    title: "Macro Texture Detail",
    description: "Ultra detailed macro shot highlighting product texture",
    category: "closeup",
    categoryIcon: "🔍",
    image: "/images/ai-product-prompt-prand-ads-template-ecommerce-branding.webp",
    price: 2.99,
    isTrending: true,
    prompt: `Create a high-energy advertising image of a [gaming mouse] in action,

scene: mouse sliding aggressively across a surface with motion blur trails,

effects: glowing red light streaks, sparks, dynamic movement,

composition: diagonal action composition, strong perspective,

camera: 35mm lens, sharp focus on mouse, motion blur around edges,

lighting: dramatic contrast lighting with neon red and orange highlights,

color palette: ONLY red [#FF0000], black [#000000], orange [#FF6A00],

background: dark black with abstract speed lines,

style: aggressive esports advertisement, modern and bold,

ADD TEXT in image: "UNLEASH SPEED",

text style: bold futuristic font, glowing red/orange,

no other colors allowed,

--seed 101
--style dynamic-esports-ad-v1`,
  },
  {
    id: "closeup-2",
    title: "Ingredient Splash",
    description: "Dynamic ingredient or material splash composition",
    category: "closeup",
    categoryIcon: "🔍",
    image: "/images/ai-image-prompts-ecommerce-product-photography-templates-prand.webp",
    price: 2.99,
    prompt: `Create an explosive action advertising image of an [energy drink] can,

scene: can bursting through liquid splash with droplets flying everywhere,

effects: orange liquid explosion, red energy waves,

composition: centered product with radial explosion,

camera: high-speed photography, ultra sharp focus,

lighting: strong backlight with glowing orange highlights,

color palette: ONLY red, black, orange,

background: deep black with energy particles,

style: extreme sports energy ad, intense and powerful,

ADD TEXT in image: "FEEL THE BLAST",

text style: bold impact font, glowing orange with red outline,

no other colors allowed,

--seed 202
--style explosive-energy-ad-v1`,
  },
  {
    id: "closeup-3",
    title: "Reflection Detail",
    description: "Glossy reflection shot for premium product feel",
    category: "closeup",
    categoryIcon: "🔍",
    image: "/images/premium-sunscreen-gold-cap-hero-shot-ecommerce.webp",
    price: 2.99,
    isNew: true,
    prompt: `Create an explosive action advertising image of an Get a Prompt or Ready-Made Image Service add icon whatsapp can,

scene: 10 prodacut flying everywhere,

Effects: orange liquid explosion, red energy waves,

Composition: centered add only icon whatssap with radial explosion,

Camera: high-speed photography, ultra sharp focus,

Lighting: strong backlight with glowing orange highlights,

color palette: ONLY red, black, orange,

background: deep black with energy particles,

style: extreme sports energy ad, intense and powerful,

ADD TEXT in image: "GET NOW",

Text style: bold impact font, glowing orange with red outline,

no other colors allowed,

--seed 202
--style explosive-energy-ad-v1`,
  },
  {
    id: "closeup-4",
    title: "Label Focus",
    description: "Sharp focus on product label and branding details",
    category: "closeup",
    categoryIcon: "🔍",
    image: "/images/best-smartwatch-tech-advertisement-product-photo-ads image-.webp",
    price: 2.99,
    prompt: `Create a dynamic advertising image of a smartwatch,

scene: watch thme 9:45 coler #fcfcfc #000000 ,

effects: glowing red pulse waves, orange light rings,

composition: centered with radiating energy lines,

camera: macro + 50mm hybrid look, sharp product focus,

lighting: dramatic contrast with glowing accents,

color palette: ONLY red, black, orange,

background: deep black with subtle tech grid,

style: futuristic fitness tech advertisement,

ADD TEXT in image: "POWER YOUR TIME",

text style: bold clean font, glowing red/orange,

add #000000 #fcfcfc no other colors allowed,

--seed 505
--style futuristic-tech-ad-v1`,
  },
{
    id: "closeup-5",
    title: "Label Focus",
    description: "Sharp focus on product label and branding details",
    category: "closeup",
    categoryIcon: "🔍",
    image: "/images/clavi-Image-pc-prand-ai-headphones-dark-moody-brand.webp",
    price: 2.99,
    prompt: `Create a high-energy advertising image of a [gaming clavi ] ,

scene:   aggressively across a clavi with motion blur trails,

effects: glowing red light streaks, sparks, dynamic movement,

composition: diagonal action composition, strong perspective,

camera: 35mm lens, sharp focus on clavi, motion blur around edges,

lighting: dramatic contrast lighting with neon red and orange highlights,

color palette: ONLY red [#FF0000], black [#000000], orange [#FF6A00],

background: dark black with abstract speed lines,

style: aggressive esports advertisement, modern and bold,

ADD TEXT in image: "PAY NOW",

text style: bold futuristic font, glowing red/orange,

no other colors allowed,

--seed 101
--style dynamic-esports-ad-v1`,
  },

  // Background Variations Templates
  {
    id: "background-1",
    title: "Gradient Sweep",
    description: "Clean gradient background for versatile product shots",
    category: "background",
    categoryIcon: "🔄",
    image: "/images/premium-sneakers-white-background-product-shot.webp",
    price: 2.99,
    isTrending: true,
    prompt: `Create image a premium product hero shot of high-end running shoes with modern design,

floating mid-air, slightly angled forward for motion effect,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: dynamic cool lighting with blue and purple rim light, subtle reflections,

background: deep black fading into electric blue and purple gradient with soft motion streaks,

style: premium futuristic sports brand aesthetic, clean and powerful,

no text, no distractions, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
  {
    id: "background-2",
    title: "Geometric Shapes",
    description: "luxury minimalist cotton shirt",
    category: "background",
    categoryIcon: "🔄",
    image: "/images/shirt-folded-marble-surface-brand-product-photo-prompt.webp",
    price: 2.99,
    prompt: `Create image a premium product hero shot of a luxury minimalist cotton shirt neatly displayed,

floating mid-air, slightly folded for depth,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: soft diffused lighting with cool white highlights and subtle blue shadows,

background: clean white to soft blue gradient with a hint of lavender tone, smooth and elegant,

style: modern premium fashion brand, minimal and refined,

no text, no distractions, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
  {
    id: "background-3",
    title: "Nature Elements",
    description: "Organic natural elements for eco-friendly branding",
    category: "background",
    categoryIcon: "🔄",
    image: "/images/iphone-glossy-dark-gradient-product-photo.webp",
    price: 2.99,
    isNew: true,
    prompt: `Create image a premium product hero shot of a sleek modern smartphone with edge-to-edge display,

floating mid-air, slightly tilted for futuristic perspective,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: high-tech lighting with sharp white highlights and blue edge glow,

background: dark black to deep purple gradient with neon blue light streak accents,

style: cutting-edge premium tech aesthetic, sleek and futuristic,

no text, no distractions, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
  {
    id: "background-4",
    title: "Color Block",
    description: "Bold color blocking for striking visual impact",
    category: "background",
    categoryIcon: "🔄",
    image: "/images/prompt-image-wireless-headphones-dark-moody-brand-ad.webp",
    price: 2.99,
    prompt: `Create image a premium product hero shot of over-ear [wireless headphones] with premium finish,

floating mid-air, slightly rotated for depth,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: moody lighting with purple and blue glow reflections, soft highlights,

background: rich purple gradient blending into deep blue with subtle ambient light aura,

style: immersive luxury audio brand aesthetic, modern and emotional,

no text, no distractions, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
    {
    id: "background-5",
    title: "Color Block",
    description: "Bold color blocking for striking visual impact",
    category: "background",
    categoryIcon: "🔄",
    image: "/images/image-pc-prand-ai-headphones-dark-moody-brand.webp",
    price: 2.99,
    prompt: `Create image a premium product hero shot of computer is open for a short while and a  is flying off the side with premium finish,

floating mid-air, slightly rotated for depth,

studio photography, ultra sharp focus, 85mm lens, f/2.8 depth of field,

lighting: moody lighting with purple and blue glow reflections, soft highlights,

background: rich purple gradient blending into deep blue with subtle ambient light aura,

style: immersive luxury audio brand aesthetic, modern and emotional,

no text, no distractions, focus only on product,

--seed 777
--style clean-premium-ecommerce-v1`,
  },
]
