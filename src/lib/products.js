// Single source of truth for the product range — used by /products, /products/[slug],
// sitemap.xml, and llms.txt. Prices are the suggested retail prices (UGX) from the
// June 2026 range sheet.

export const SHOP_URL = 'https://shop.humble-beeing.com'

const RAW_FAQS = [
  {
    q: 'What does "raw" honey actually mean?',
    a: 'Raw honey is honey as the bees made it. Ours is cold-pressed by hand in small batches and never heated above 40°C, so the live enzymes, pollen, and flavonoids that commercial pasteurisation destroys stay intact. Nothing is added and nothing is filtered out beyond the wax.',
  },
  {
    q: 'My honey has crystallised — has it gone bad?',
    a: 'No — crystallisation is completely natural and is actually a good sign that your honey is pure and raw. To return it to liquid, stand the jar in warm water (around 40°C, never boiling) for a few minutes. Avoid the microwave, which destroys the live enzymes.',
  },
  {
    q: 'How do I know your honey is genuinely pure?',
    a: 'Every batch carries a unique Harvest Number with full records traceable to the farmer who harvested it, and is lab-tested for HMF with results that exceed EU export standards. An EU report found roughly half of supermarket honey is suspected of adulteration with rice syrup — traceability is how we prove ours is not.',
  },
  {
    q: 'What does "single-origin" mean?',
    a: 'Our honey is harvested and bottled by region, never blended. Like wine, each jar tastes uniquely of its location — the flowers, the soil, and the season it came from.',
  },
  {
    q: 'How should I store honey in Kampala’s heat?',
    a: 'Keep the jar tightly sealed in a cool, shaded cupboard away from the cooker and direct sunlight, and always use a dry spoon. Stored this way, raw honey essentially never expires.',
  },
]

const INFUSED_FAQS = [
  {
    q: 'Is infused honey still raw?',
    a: 'Yes. We age whole, real ingredients directly in raw cold-pressed honey — flavour is added without moisture, so there is no fermentation and no need for heating. Every infused jar keeps the live enzymes of the raw honey it started as.',
  },
  ...RAW_FAQS,
]

export const PRODUCTS = [
  // ---------- RAW SINGLE-ORIGIN ----------
  {
    slug: 'yumbe-shea-blossom-honey',
    name: 'Yumbe Shea Blossom Honey',
    shortName: 'Shea Blossom',
    category: 'raw',
    categoryLabel: 'Raw Single-Origin Honey',
    bestSeller: true,
    price: 30000,
    size: '350g jar',
    image: '/images/products/yumbe-shea-blossom.jpg',
    imageAlt: 'Jar of Humble Beeing raw pressed single-origin Yumbe shea blossom honey on a woven Ugandan basket',
    tagline: 'Golden, buttery honey from the shea tree belt of West Nile — our signature harvest.',
    tastingNotes: ['Warm caramel', 'Buttery shea', 'Clean floral finish'],
    origin: {
      region: 'Yumbe District, West Nile',
      floralSource: 'Shea tree blossom (Vitellaria nilotica)',
      harvest: 'Harvested at peak shea bloom, December–February',
    },
    story: [
      'The shea belt of West Nile is one of the few places on earth where bees forage almost exclusively on shea blossom. The result is a golden, medium-bodied honey with a warm, buttery sweetness you will not find anywhere else — a true taste of Yumbe.',
      'This is the honey Obaya’s family has harvested for three generations. We buy only Grade A, fully-capped honeycomb from registered smallholder farmers, paying 30% above market rates, so every jar supports the community that made it.',
    ],
    process: [
      { title: 'Grade A honeycomb', text: 'Only fully-capped comb is accepted — no brood, no pollen contamination, minimal smoke, no shortcuts.' },
      { title: 'Cold-pressed by hand', text: 'Pressed in small batches and never heated above 40°C, preserving live enzymes, flavonoids, and pollen.' },
      { title: 'Harvest-numbered', text: 'Each batch carries a unique Harvest Number, traceable back to the Yumbe farmer who harvested it.' },
    ],
    tryItWith: [
      { title: 'Pour-over coffee', text: 'A teaspoon melts into black coffee without masking it — the caramel notes flatter Ugandan arabica beautifully.' },
      { title: 'Warm chapati or pancakes', text: 'Drizzle straight over warm chapati, pancakes, or crumpets and let it soak in.' },
      { title: 'Greek yoghurt & granola', text: 'Its buttery sweetness rounds out tart yoghurt — the simplest luxury breakfast.' },
      { title: 'Aged cheese', text: 'Serve alongside gouda or aged cheddar on a board; shea blossom holds its own against strong cheese.' },
    ],
    healthBenefits: [
      { title: 'Live enzymes intact', text: 'Never heated above 40°C, so the natural enzymes and antioxidants raw honey is prized for are fully preserved.' },
      { title: 'Naturally antibacterial', text: 'Raw honey is traditionally used to soothe sore throats and coughs, and modern research supports its antimicrobial activity.' },
      { title: 'Natural energy', text: 'A gentler alternative to refined sugar — natural glucose and fructose with trace minerals and pollen.' },
    ],
    faqs: [
      {
        q: 'What is shea blossom honey?',
        a: 'It is single-origin honey made by bees foraging on the blossom of the shea tree (Vitellaria nilotica), which grows across the West Nile shea belt. It has a distinctive warm, buttery caramel flavour and a golden colour — one of Africa’s most distinctive monofloral honeys.',
      },
      ...RAW_FAQS,
    ],
    related: ['nebbi-multifloral-honey', 'vanilla-bean-infused-honey', 'taster-gift-set'],
  },
  {
    slug: 'nebbi-multifloral-honey',
    name: 'Nebbi Multifloral Honey',
    shortName: 'Nebbi Multifloral',
    category: 'raw',
    categoryLabel: 'Raw Single-Origin Honey',
    bestSeller: false,
    price: 30000,
    size: '350g jar',
    image: '/images/products/nebbi-multifloral.jpg',
    imageAlt: 'Jar of Humble Beeing raw pressed single-origin Nebbi multifloral honey, dark amber in colour',
    tagline: 'Deep, dark, and complex — wild forage honey from the hills of Nebbi.',
    tastingNotes: ['Dark amber', 'Molasses depth', 'Wildflower complexity'],
    origin: {
      region: 'Nebbi District, West Nile',
      floralSource: 'Wild multifloral forage — acacia, wildflowers, and savannah blossom',
      harvest: 'Harvested across the long rains bloom',
    },
    story: [
      'Where shea blossom honey is defined by a single flower, Nebbi multifloral is defined by a landscape. Bees range freely across the hills of Nebbi — acacia, savannah wildflowers, and flowering crops — and bring home a dark, complex honey that changes subtly with every season.',
      'This is honey with backbone: deeper, less shy, and beloved by cooks. Because it is harvested and bottled by region and never blended, each batch is a snapshot of what was flowering in Nebbi that season.',
    ],
    process: [
      { title: 'Grade A honeycomb', text: 'Only fully-capped comb is accepted from our registered Nebbi farmers — quality starts at harvest, not at the bottling line.' },
      { title: 'Cold-pressed by hand', text: 'Pressed in small batches and never heated above 40°C, preserving live enzymes, flavonoids, and pollen.' },
      { title: 'Harvest-numbered', text: 'Each batch carries a unique Harvest Number, traceable back to the farmer and season it came from.' },
    ],
    tryItWith: [
      { title: 'Marinades & glazes', text: 'Its molasses depth stands up to soy, ginger, and chilli — brush over chicken or pork in the last minutes of roasting.' },
      { title: 'Strong black tea', text: 'A honey that will not disappear into your mug — perfect for spiced tea and chai.' },
      { title: 'Sourdough & butter', text: 'Thick-cut toast, salted butter, and a generous drizzle. That is the whole recipe.' },
      { title: 'Baking', text: 'Substitute for sugar in banana bread or gingerbread for a darker, richer crumb.' },
    ],
    healthBenefits: [
      { title: 'Pollen diversity', text: 'Multifloral forage means a wider spectrum of pollens and plant compounds in every jar.' },
      { title: 'Rich in antioxidants', text: 'Darker honeys are generally higher in polyphenols and antioxidant activity than lighter ones.' },
      { title: 'Live enzymes intact', text: 'Cold-pressed and never heated above 40°C, so nothing the bees put in is taken out.' },
    ],
    faqs: [
      {
        q: 'Why is this honey darker than the shea blossom?',
        a: 'Colour in honey comes from the flowers the bees foraged. Nebbi’s mixed savannah forage produces a darker, more mineral-rich honey than the pale gold of pure shea blossom. Darker honeys also tend to carry more antioxidants.',
      },
      ...RAW_FAQS,
    ],
    related: ['yumbe-shea-blossom-honey', 'arua-calliandra-honey', 'garlic-infused-honey'],
  },
  {
    slug: 'arua-calliandra-honey',
    name: 'Arua Calliandra Blossom Honey',
    shortName: 'Arua Calliandra',
    category: 'raw',
    categoryLabel: 'Raw Single-Origin Honey',
    bestSeller: false,
    price: 30000,
    size: '350g jar',
    image: 'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg',
    imageAlt: 'Jar of Humble Beeing raw pressed single-origin Arua calliandra blossom honey',
    tagline: 'Delicate and floral — a light, elegant honey from calliandra blossom in Arua.',
    tastingNotes: ['Light floral', 'Gentle citrus lift', 'Silky texture'],
    origin: {
      region: 'Arua District, West Nile',
      floralSource: 'Calliandra blossom (Calliandra calothyrsus)',
      harvest: 'Harvested at calliandra bloom',
    },
    story: [
      'Calliandra is a flowering shrub planted across Arua as fodder and for soil restoration — and its feathery red blossoms happen to produce a remarkably elegant honey. Light, silky, and delicately floral, this is the most refined honey in our range.',
      'It is also a quiet sustainability story: calliandra fixes nitrogen in the soil and gives farmers year-round forage for their bees, so every jar supports regenerative farming in West Nile.',
    ],
    process: [
      { title: 'Grade A honeycomb', text: 'Only fully-capped comb is accepted from our registered Arua farmers.' },
      { title: 'Cold-pressed by hand', text: 'Pressed in small batches and never heated above 40°C, preserving live enzymes, flavonoids, and pollen.' },
      { title: 'Harvest-numbered', text: 'Each batch carries a unique Harvest Number, traceable back to the farmer and bloom it came from.' },
    ],
    tryItWith: [
      { title: 'Green or herbal tea', text: 'Delicate enough not to overwhelm sencha, lemongrass, or chamomile.' },
      { title: 'Fresh fruit & soft cheese', text: 'Drizzle over ricotta, fresh figs, or pawpaw — it lifts rather than dominates.' },
      { title: 'Salad dressings', text: 'Whisk with lemon juice, olive oil, and mustard for a bright honey vinaigrette.' },
      { title: 'Porridge', text: 'A spoonful stirred into millet or oat porridge sweetens without heaviness.' },
    ],
    healthBenefits: [
      { title: 'Gentle on the palate and stomach', text: 'A light honey traditionally taken with warm water as a morning digestive ritual.' },
      { title: 'Live enzymes intact', text: 'Cold-pressed and never heated above 40°C — all the natural goodness preserved.' },
      { title: 'Naturally antibacterial', text: 'Like all raw honey, it retains the antimicrobial properties that pasteurised honey loses.' },
    ],
    faqs: [
      {
        q: 'What is calliandra honey?',
        a: 'Calliandra is a flowering shrub (Calliandra calothyrsus) widely planted in West Nile for animal fodder and soil restoration. Bees love its nectar-rich blossom, and the resulting single-origin honey is light, silky, and delicately floral.',
      },
      ...RAW_FAQS,
    ],
    related: ['yumbe-shea-blossom-honey', 'nebbi-multifloral-honey', 'lemon-peel-infused-honey'],
  },

  // ---------- INFUSED RAW ----------
  {
    slug: 'vanilla-bean-infused-honey',
    name: 'Vanilla Bean Infused Raw Honey',
    shortName: 'Vanilla Bean',
    category: 'infused',
    categoryLabel: 'Infused Raw Honey',
    bestSeller: true,
    price: 35000,
    size: '350g jar',
    image: '/images/products/vanilla-bean.jpg',
    imageAlt: 'Humble Beeing vanilla bean infused raw honey jar surrounded by whole Ugandan vanilla pods',
    tagline: 'Raw West Nile honey aged with real, locally sourced Ugandan vanilla beans.',
    tastingNotes: ['Sweet vanilla cream', 'Warm honeycomb', 'Long fragrant finish'],
    origin: {
      region: 'West Nile honey · Ugandan vanilla',
      floralSource: 'Raw single-origin honey aged with whole Grade A vanilla pods',
      harvest: 'Small batches, aged for weeks until the vanilla blooms through',
    },
    story: [
      'Uganda grows some of the finest vanilla in the world — and instead of importing extract, we split whole, locally sourced vanilla pods and age them directly in our raw West Nile honey. Over weeks, the honey slowly draws out the seeds and perfume of the bean.',
      'Because the flavour is added without any moisture, there is no fermentation and no heating — the honey stays completely raw. The result is our most-loved infusion: dessert in a jar, made from just two Ugandan ingredients.',
    ],
    process: [
      { title: 'Real vanilla pods, split by hand', text: 'Whole Grade A Ugandan vanilla beans — never extract, never flavouring.' },
      { title: 'Slow cold ageing', text: 'The pods rest in raw honey for weeks while the flavour develops. No heat is ever applied.' },
      { title: 'Still 100% raw', text: 'Flavour is added without moisture, so there is no fermentation and every enzyme survives.' },
    ],
    tryItWith: [
      { title: 'Overnight oats bowl', text: 'Stir a spoonful into oats, milk, and chia the night before — by morning the whole bowl tastes of vanilla custard.' },
      { title: 'Vanilla honey latte', text: 'Swap the syrup: a teaspoon in a flat white or iced latte is better than anything from a pump bottle.' },
      { title: 'French toast & waffles', text: 'Warm slightly and pour — it clings like a fragrant syrup.' },
      { title: 'Over vanilla ice cream', text: 'Yes, vanilla on vanilla. Trust us.' },
    ],
    healthBenefits: [
      { title: 'All the benefits of raw honey', text: 'Enzymes, antioxidants, and antibacterial properties fully preserved — the vanilla adds flavour, not processing.' },
      { title: 'Vanilla’s own antioxidants', text: 'Real vanilla contains vanillin, a polyphenol studied for its antioxidant properties.' },
      { title: 'A calmer sweet treat', text: 'Vanilla’s aroma is traditionally associated with comfort and relaxation — a more mindful way to end a meal.' },
    ],
    faqs: [
      {
        q: 'Do you use vanilla extract or flavouring?',
        a: 'Never. We split whole, locally sourced Ugandan vanilla pods and age them directly in the raw honey. You will often find real vanilla seeds in the jar — that is exactly how it should look.',
      },
      {
        q: 'Where does the vanilla come from?',
        a: 'Uganda is one of the world’s great vanilla origins, and we source whole Grade A pods from Ugandan vanilla farmers — keeping both ingredients, and both supply chains, local.',
      },
      ...INFUSED_FAQS,
    ],
    related: ['rosemary-infused-honey', 'orange-peel-infused-honey', 'yumbe-shea-blossom-honey'],
  },
  {
    slug: 'rosemary-infused-honey',
    name: 'Rosemary Infused Raw Honey',
    shortName: 'Rosemary',
    category: 'infused',
    categoryLabel: 'Infused Raw Honey',
    bestSeller: true,
    price: 35000,
    size: '350g jar',
    image: '/images/products/rosemary.jpg',
    imageAlt: 'Humble Beeing rosemary infused raw honey jar resting on fresh rosemary sprigs',
    tagline: 'Savoury-sweet raw honey aged on fresh rosemary sprigs — the cook’s favourite.',
    tastingNotes: ['Pine & herb', 'Savoury depth', 'Sweet resinous finish'],
    origin: {
      region: 'West Nile honey · fresh Ugandan rosemary',
      floralSource: 'Raw single-origin honey aged with whole rosemary sprigs',
      harvest: 'Small batches, aged until the herb perfumes the honey',
    },
    story: [
      'Rosemary and honey is an ancient Mediterranean pairing — we make ours the slow way, resting whole sprigs of fresh, locally grown rosemary in raw West Nile honey until the piney, resinous aroma runs right through the jar.',
      'It is the most versatile jar in our range: sweet enough for tea and toast, savoury enough for roast chicken and focaccia. Chefs in Kampala keep it behind the pass for a reason.',
    ],
    process: [
      { title: 'Whole fresh sprigs', text: 'Real rosemary, not oils or essences — laid whole into the honey.' },
      { title: 'Slow cold ageing', text: 'The herb rests in raw honey for weeks while the flavour develops. No heat is ever applied.' },
      { title: 'Still 100% raw', text: 'Flavour is added without moisture, so there is no fermentation and every enzyme survives.' },
    ],
    tryItWith: [
      { title: 'Roast chicken & potatoes', text: 'Brush over chicken in the final ten minutes of roasting for a glossy, herby glaze.' },
      { title: 'Goat cheese on toast', text: 'Warm goat cheese, sourdough, rosemary honey, cracked pepper — a five-minute starter that looks like a restaurant plate.' },
      { title: 'Honey-rosemary lemonade', text: 'Dissolve a spoonful in warm water, add fresh lemon juice, top with cold soda water and ice.' },
      { title: 'Focaccia & olive oil', text: 'A drizzle over rosemary focaccia doubles down on the herb beautifully.' },
    ],
    healthBenefits: [
      { title: 'Traditionally linked to memory', text: 'Rosemary has been associated with memory and concentration since antiquity, and studies on rosemary’s aroma and compounds like rosmarinic acid continue to explore that link.' },
      { title: 'Anti-inflammatory compounds', text: 'Rosemary is rich in rosmarinic and carnosic acid, plant compounds studied for antioxidant and anti-inflammatory activity.' },
      { title: 'All the benefits of raw honey', text: 'Cold-aged, never heated — the honey’s live enzymes and antibacterial properties stay intact.' },
    ],
    faqs: [
      {
        q: 'Is rosemary honey sweet or savoury?',
        a: 'Both — that is the point. The base is sweet raw honey, but the rosemary gives it a piney, savoury depth that makes it as good over roast chicken and cheese as it is in tea. If you only buy one jar for the kitchen, make it this one.',
      },
      ...INFUSED_FAQS,
    ],
    related: ['garlic-infused-honey', 'lemon-peel-infused-honey', 'vanilla-bean-infused-honey'],
  },
  {
    slug: 'lemon-peel-infused-honey',
    name: 'Lemon Peel Infused Raw Honey',
    shortName: 'Lemon Peel',
    category: 'infused',
    categoryLabel: 'Infused Raw Honey',
    bestSeller: false,
    price: 35000,
    size: '350g jar',
    image: '/images/products/lemon-peel.jpg',
    imageAlt: 'Humble Beeing lemon peel infused raw honey jar in a basket with fresh lemons',
    tagline: 'Bright, zesty raw honey aged with sun-dried Ugandan lemon peel.',
    tastingNotes: ['Bright citrus zest', 'Honeyed lemon curd', 'Clean sherbet finish'],
    origin: {
      region: 'West Nile honey · Ugandan lemons',
      floralSource: 'Raw single-origin honey aged with sun-dried lemon peel',
      harvest: 'Small batches, aged until the citrus oils lift through the jar',
    },
    story: [
      'We peel fresh Ugandan lemons, dry the zest gently in the sun, and rest it in raw West Nile honey. The peel’s essential oils slowly perfume the honey with bright, real citrus — nothing artificial, no lemon flavouring, just fruit and honey.',
      'This is the jar to reach for the moment your throat feels scratchy — and the one that turns an ordinary cup of tea into something you look forward to.',
    ],
    process: [
      { title: 'Real sun-dried peel', text: 'Fresh lemon zest, dried slowly to concentrate the oils without cooking them.' },
      { title: 'Slow cold ageing', text: 'The peel rests in raw honey for weeks while the citrus oils infuse. No heat is ever applied.' },
      { title: 'Still 100% raw', text: 'Flavour is added without moisture, so there is no fermentation and every enzyme survives.' },
    ],
    tryItWith: [
      { title: 'The classic hot lemon & honey', text: 'A heaped spoonful in warm (not boiling) water — the original comfort drink, upgraded.' },
      { title: 'Black or ginger tea', text: 'Sweetens and brightens in one spoonful — no lemon slice needed.' },
      { title: 'Grilled fish glaze', text: 'Brush over tilapia or salmon before the last minutes of grilling.' },
      { title: 'Drizzled on plain cake', text: 'Turns a simple yoghurt or pound cake into lemon drizzle instantly.' },
    ],
    healthBenefits: [
      { title: 'The classic cold-season duo', text: 'Honey and lemon is the world’s most trusted home remedy for soothing sore throats and coughs — here it comes ready-mixed and raw.' },
      { title: 'Citrus flavonoids', text: 'Lemon peel is rich in flavonoids and citrus oils, concentrated in the zest we infuse.' },
      { title: 'All the benefits of raw honey', text: 'Antibacterial, enzyme-rich, and never heated above 40°C.' },
    ],
    faqs: [
      {
        q: 'Can I put this in hot drinks without losing the raw benefits?',
        a: 'Stir it into warm rather than boiling drinks. Above roughly 40°C the live enzymes begin to degrade — so let your tea cool for a couple of minutes first, then sweeten.',
      },
      ...INFUSED_FAQS,
    ],
    related: ['orange-peel-infused-honey', 'garlic-infused-honey', 'arua-calliandra-honey'],
  },
  {
    slug: 'orange-peel-infused-honey',
    name: 'Orange Peel Infused Raw Honey',
    shortName: 'Orange Peel',
    category: 'infused',
    categoryLabel: 'Infused Raw Honey',
    bestSeller: false,
    price: 35000,
    size: '350g jar',
    image: '/images/products/orange-peel.jpg',
    imageAlt: 'Humble Beeing orange peel infused raw honey jar beside fresh sliced oranges',
    tagline: 'Warm marmalade notes — raw honey aged with sun-dried Ugandan orange peel.',
    tastingNotes: ['Bitter-sweet marmalade', 'Warm orange oil', 'Round honey finish'],
    origin: {
      region: 'West Nile honey · Ugandan oranges',
      floralSource: 'Raw single-origin honey aged with sun-dried orange peel',
      harvest: 'Small batches, aged until the marmalade note develops',
    },
    story: [
      'Sun-dried Ugandan orange peel rested in raw West Nile honey gives this jar the character of a fine marmalade — sweet, gently bitter, and fragrant with real orange oil.',
      'It is the baker’s and bartender’s jar: at home in cakes, glazes, and a very good old fashioned. Like all our infusions, the flavour comes from the whole fruit, never from flavouring.',
    ],
    process: [
      { title: 'Real sun-dried peel', text: 'Fresh orange zest, dried slowly to concentrate the oils without cooking them.' },
      { title: 'Slow cold ageing', text: 'The peel rests in raw honey for weeks while the citrus oils infuse. No heat is ever applied.' },
      { title: 'Still 100% raw', text: 'Flavour is added without moisture, so there is no fermentation and every enzyme survives.' },
    ],
    tryItWith: [
      { title: 'Ricotta or cream cheese toast', text: 'Thick toast, cool ricotta, orange honey, and a pinch of sea salt.' },
      { title: 'A honey old fashioned', text: 'Swap the sugar cube: half a spoon of orange peel honey, bitters, and your whisky of choice.' },
      { title: 'Glazed roast carrots or ham', text: 'The bitter-sweet marmalade note is made for roasted roots and festive glazes.' },
      { title: 'Chocolate desserts', text: 'Orange and chocolate is eternal — drizzle over brownies or dark chocolate cake.' },
    ],
    healthBenefits: [
      { title: 'Citrus flavonoids', text: 'Orange peel is one of the richest sources of hesperidin, a citrus flavonoid studied for cardiovascular and antioxidant benefits.' },
      { title: 'Immune-season staple', text: 'Citrus and raw honey together make a naturally comforting spoonful when the weather turns.' },
      { title: 'All the benefits of raw honey', text: 'Antibacterial, enzyme-rich, and never heated above 40°C.' },
    ],
    faqs: [
      {
        q: 'Does it taste like marmalade?',
        a: 'Very close — sweet with a gentle, pleasant bitterness from the real orange peel. If you like a proper Seville marmalade, this is your honey.',
      },
      ...INFUSED_FAQS,
    ],
    related: ['lemon-peel-infused-honey', 'vanilla-bean-infused-honey', 'scotch-bonnet-chilli-infused-honey'],
  },
  {
    slug: 'scotch-bonnet-chilli-infused-honey',
    name: 'Scotch Bonnet Chilli Infused Raw Honey',
    shortName: 'Scotch Bonnet Chilli',
    category: 'infused',
    categoryLabel: 'Infused Raw Honey',
    bestSeller: false,
    price: 35000,
    size: '350g jar',
    image: '/images/products/scotch-bonnet-chilli.jpg',
    imageAlt: 'Humble Beeing scotch bonnet chilli infused raw honey jar next to a fresh pizza',
    tagline: 'Uganda’s answer to hot honey — raw honey aged with whole scotch bonnet chillies.',
    tastingNotes: ['Fruity scotch bonnet heat', 'Sweet first, fire after', 'Addictive'],
    origin: {
      region: 'West Nile honey · Ugandan scotch bonnets',
      floralSource: 'Raw single-origin honey aged with whole scotch bonnet chillies',
      harvest: 'Small batches, aged until the heat balances the sweetness',
    },
    story: [
      'Hot honey took over the world’s pizzerias — ours is made the Ugandan way, with whole scotch bonnet chillies. Scotch bonnets bring more than heat: a fruity, almost tropical flavour that ordinary chilli flakes cannot match.',
      'The sweetness lands first, then the warmth builds. Aged cold and slow like all our infusions, the honey underneath stays completely raw.',
    ],
    process: [
      { title: 'Whole scotch bonnets', text: 'Real Ugandan chillies, aged whole in the jar — you can see them. No chilli oil, no extract.' },
      { title: 'Slow cold ageing', text: 'The chillies rest in raw honey while heat and fruit infuse gradually. No heat (from a stove, anyway) is ever applied.' },
      { title: 'Still 100% raw', text: 'Flavour is added without moisture, so there is no fermentation and every enzyme survives.' },
    ],
    tryItWith: [
      { title: 'Pizza', text: 'The modern classic — drizzle over pepperoni or margherita straight out of the oven.' },
      { title: 'Fried chicken & wings', text: 'Sweet-heat glaze for crispy chicken. Toss wings in it while they are hot.' },
      { title: 'Cheese boards', text: 'Electric with halloumi, brie, or sharp cheddar.' },
      { title: 'A spicy margarita', text: 'Half a spoon in the shaker replaces agave syrup and adds a slow burn.' },
    ],
    healthBenefits: [
      { title: 'Capsaicin kick', text: 'Scotch bonnets are rich in capsaicin, studied for supporting metabolism and circulation — and known for triggering a happy endorphin rush.' },
      { title: 'Vitamin-rich chillies', text: 'Scotch bonnets are naturally high in vitamin C and carotenoids.' },
      { title: 'All the benefits of raw honey', text: 'Antibacterial, enzyme-rich, and never heated above 40°C.' },
    ],
    faqs: [
      {
        q: 'How hot is it, really?',
        a: 'Warm rather than punishing. The honey tempers the scotch bonnet, so you get the chilli’s fruitiness up front and a building, pleasant heat after. Chilli lovers will want more; the chilli-curious will be pleasantly surprised.',
      },
      ...INFUSED_FAQS,
    ],
    related: ['garlic-infused-honey', 'rosemary-infused-honey', 'orange-peel-infused-honey'],
  },
  {
    slug: 'garlic-infused-honey',
    name: 'Garlic Infused Raw Honey',
    shortName: 'Garlic',
    category: 'infused',
    categoryLabel: 'Infused Raw Honey',
    bestSeller: false,
    price: 35000,
    size: '350g jar',
    image: '/images/products/garlic.jpg',
    imageAlt: 'Humble Beeing garlic infused raw honey jar beside crispy fried chicken',
    tagline: 'The kitchen remedy — raw honey aged with whole Ugandan garlic cloves.',
    tastingNotes: ['Mellow roasted garlic', 'Savoury umami', 'Honey-sweet finish'],
    origin: {
      region: 'West Nile honey · Ugandan garlic',
      floralSource: 'Raw single-origin honey aged with whole peeled garlic cloves',
      harvest: 'Small batches, aged for weeks as the garlic mellows and sweetens',
    },
    story: [
      'Garlic honey is one of the oldest home remedies there is — and one of the best-kept secrets in the kitchen. We age whole peeled garlic cloves in raw West Nile honey for weeks; the garlic mellows and sweetens while the honey takes on a deep, savoury warmth.',
      'Keep it on the counter twice over: a spoonful at the first sign of a cold, and a secret weapon for marinades, stir-fries, and dressings the rest of the year.',
    ],
    process: [
      { title: 'Whole garlic cloves', text: 'Fresh Ugandan garlic, peeled by hand and aged whole in the jar.' },
      { title: 'Slow cold ageing', text: 'Over weeks the garlic mellows and its compounds — including allicin — infuse into the honey. No heat is ever applied.' },
      { title: 'Still 100% raw', text: 'Flavour is added without moisture, so there is no fermentation and every enzyme survives.' },
    ],
    tryItWith: [
      { title: 'A spoonful when a cold starts', text: 'The traditional way: one spoonful straight, morning and evening, at the first tickle in your throat.' },
      { title: 'Stir-fry & marinade base', text: 'Whisk with soy sauce and ginger for an instant glaze for chicken, beef, or tofu.' },
      { title: 'Roast vegetables', text: 'Toss carrots, onions, or squash in garlic honey and olive oil before roasting.' },
      { title: 'Salad dressing', text: 'One spoon of garlic honey, one of mustard, three of olive oil, splash of vinegar — shake.' },
    ],
    healthBenefits: [
      { title: 'Allicin for cold season', text: 'Crushed and aged garlic releases allicin, the compound behind garlic’s reputation for supporting recovery from colds and immune health.' },
      { title: 'Two remedies in one jar', text: 'Raw honey’s antibacterial, throat-soothing properties combined with garlic’s traditional immune support.' },
      { title: 'Heart-friendly tradition', text: 'Garlic has long been studied for supporting healthy blood pressure and cholesterol.' },
    ],
    faqs: [
      {
        q: 'Do I eat the garlic cloves too?',
        a: 'Absolutely — after weeks in raw honey they turn mellow, sweet, and almost candied. Slice them over toast or into stir-fries, or eat one straight when you feel a cold coming.',
      },
      {
        q: 'Does it just taste like garlic?',
        a: 'No — the honey rounds the garlic into something savoury-sweet and gently umami, closer to roasted garlic than raw. It seasons food more than it perfumes it.',
      },
      ...INFUSED_FAQS,
    ],
    related: ['scotch-bonnet-chilli-infused-honey', 'rosemary-infused-honey', 'lemon-peel-infused-honey'],
  },

  // ---------- CANDLES, GIFTS & COSMETICS ----------
  {
    slug: 'beeswax-candle',
    name: 'Natural Beeswax Candle — Lemongrass & Ginger',
    shortName: 'Beeswax Candle',
    category: 'candles',
    categoryLabel: 'Beeswax Candles',
    bestSeller: false,
    price: 70000,
    size: '200g · ~60 hour burn',
    image: '/images/products/beeswax-candle.jpg',
    imageAlt: 'Humble Beeing lemongrass and ginger natural beeswax candle in a frosted glass jar with bamboo lid',
    tagline: 'Hand-poured pure beeswax from our own hives — naturally air-purifying, 60-hour burn.',
    tastingNotes: ['Lemongrass & lime zest', 'Spiced ginger heart', 'Warm cedar base'],
    origin: {
      region: 'Hand-poured in Kampala',
      floralSource: 'Pure beeswax from our partner apiaries in West Nile',
      harvest: 'Wax caps filtered through organic cotton, poured in small batches',
    },
    story: [
      'Every honey harvest leaves behind golden beeswax caps — we filter them through organic cotton and hand-pour them into candles in Kampala. Nothing is wasted, and no paraffin ever touches our wicks.',
      'Lemongrass, lime, and lemon top notes for zest; spiced middle notes of geranium, cinnamon, and ginger root; warming base notes of patchouli, cedar, and nutmeg. Designed to turn everyday moments into rituals of wellness.',
    ],
    process: [
      { title: 'Wax from our own harvests', text: 'Beeswax caps from the same West Nile hives that give us our honey — fully traceable.' },
      { title: 'Filtered & hand-poured', text: 'Filtered through organic cotton to keep the natural golden sheen, then poured in small batches in Kampala.' },
      { title: 'Clean, slow burn', text: 'Pure beeswax burns longer and cleaner than paraffin — around 60 hours per candle.' },
    ],
    tryItWith: [
      { title: 'Evening wind-down', text: 'Light it half an hour before bed with your phone in another room — the ginger-cedar base was made for it.' },
      { title: 'Yoga & meditation', text: 'A naturally purifying flame for your practice — no synthetic fragrance headache after.' },
      { title: 'Dinner on the veranda', text: 'Beeswax flames burn bright and steady outdoors, and the citrus top notes keep the evening fresh.' },
      { title: 'Paired with our honey', text: 'A candle and a jar of infused honey is our most-given gift combination.' },
    ],
    healthBenefits: [
      { title: 'Naturally air-purifying', text: 'Burning beeswax releases negative ions that can help reduce dust and allergens in indoor air.' },
      { title: 'No paraffin, no soot', text: 'Paraffin is a petroleum by-product; pure beeswax burns clean, without the black smoke and petrochemical residue.' },
      { title: 'Longer burn', text: 'Beeswax burns slower and hotter than soy or paraffin — around 60 hours from one 200g candle.' },
    ],
    faqs: [
      {
        q: 'Why beeswax instead of soy or paraffin?',
        a: 'Paraffin is a petroleum by-product and can release soot and toxins as it burns; soy is cleaner but burns fast and is usually imported. Pure beeswax burns longer, brighter, and cleaner, releases negative ions that can help purify indoor air — and ours is a natural by-product of our own honey harvests.',
      },
      {
        q: 'How do I get the longest burn from my candle?',
        a: 'Trim the wick to about 5mm before each burn, and on the first light let the wax pool melt to the edge of the glass (about two hours) so the candle burns evenly instead of tunnelling.',
      },
      {
        q: 'Is the fragrance natural?',
        a: 'The scent comes from essential-oil blends — lemongrass, lime, and lemon top notes, ginger and cinnamon heart, and a cedar, patchouli, and nutmeg base — in a pure beeswax body.',
      },
    ],
    related: ['taster-gift-set', 'beeswax-lip-balm', 'vanilla-bean-infused-honey'],
  },
  {
    slug: 'beeswax-lip-balm',
    name: 'Natural Beeswax Lip Balm',
    shortName: 'Lip Balm',
    category: 'cosmetics',
    categoryLabel: 'Beeswax Cosmetics',
    bestSeller: false,
    price: 12000,
    size: '15g tin',
    image: 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg',
    imageAlt: 'Humble Beeing natural beeswax lip balm made in Kampala from West Nile beeswax',
    tagline: 'Pure West Nile beeswax and natural oils — nothing you couldn’t eat.',
    tastingNotes: ['Unscented honey warmth', 'Silky, not waxy', 'All-day protection'],
    origin: {
      region: 'Made in Kampala',
      floralSource: 'Pure beeswax from our partner apiaries, blended with natural plant oils',
      harvest: 'Small batches, poured by hand',
    },
    story: [
      'The same golden beeswax that seals our honeycomb makes the best natural lip protection there is. We blend it with natural plant oils into a simple, honest balm — no petroleum jelly, no synthetic fragrance, nothing you couldn’t safely eat.',
      'Beeswax forms a breathable barrier that locks moisture in without suffocating the skin, which is why it has been used in balms for thousands of years.',
    ],
    process: [
      { title: 'Traceable beeswax', text: 'Wax from the same West Nile harvests as our honey, filtered through organic cotton.' },
      { title: 'Simple, natural formula', text: 'Beeswax and plant oils — a short ingredient list you can actually read.' },
      { title: 'Hand-poured in Kampala', text: 'Made in small batches at our Kampala facility.' },
    ],
    tryItWith: [
      { title: 'Daily carry', text: 'Kampala sun and long matatu rides are hard on lips — keep a tin in your bag.' },
      { title: 'Overnight repair', text: 'A generous layer before bed works while you sleep.' },
      { title: 'Cuticles & dry patches', text: 'It is a balm, not just a lip balm — use it anywhere skin needs a barrier.' },
      { title: 'In a gift set', text: 'Pairs perfectly with a candle and a jar of honey for a full hive-to-home gift.' },
    ],
    healthBenefits: [
      { title: 'Breathable moisture barrier', text: 'Beeswax locks in moisture while letting skin breathe — unlike petroleum-based balms.' },
      { title: 'Naturally soothing', text: 'Beeswax contains vitamin A and has mild anti-inflammatory properties that help calm chapped lips.' },
      { title: 'Food-grade simplicity', text: 'Made from ingredients simple enough to eat — because lip balm inevitably gets eaten.' },
    ],
    faqs: [
      {
        q: 'Is it tested on animals?',
        a: 'Only on ourselves. The balm is made from natural beeswax and plant oils, hand-poured in Kampala, with no animal testing.',
      },
      {
        q: 'Why beeswax instead of petroleum jelly?',
        a: 'Petroleum jelly seals lips under a plastic-like film. Beeswax forms a breathable barrier that holds moisture in while still letting skin function — and it comes from a hive, not a refinery.',
      },
    ],
    related: ['beeswax-candle', 'taster-gift-set', 'yumbe-shea-blossom-honey'],
  },
  {
    slug: 'taster-gift-set',
    name: 'Honey Taster Gift Set',
    shortName: 'Taster Gift Set',
    category: 'gifts',
    categoryLabel: 'Gift Sets',
    bestSeller: false,
    price: 40000,
    size: '4 × 30g jars',
    image: '/images/products/taster-gift-set.jpg',
    imageAlt: 'Humble Beeing honey taster gift set — four mini jars in handmade recycled paper packaging with gold bee seal',
    tagline: 'Four mini jars of raw and infused honey in handmade recycled-paper packaging.',
    tastingNotes: ['Lemon Peel', 'Orange Peel', 'Rosemary', 'Vanilla Bean'],
    origin: {
      region: 'Packaged by hand in Kampala',
      floralSource: 'A rotating selection of our raw and infused honeys',
      harvest: 'Each mini jar is harvest-numbered like its full-size counterpart',
    },
    story: [
      'The best way to find your favourite — or to give someone else the whole journey. Four 30g jars of our raw and infused honeys, nested in handmade recycled-paper packaging crafted by local artisans and sealed with our gold bee.',
      'It has become a Kampala favourite for kwanjula and kukyala gifts, corporate hampers, and travellers who want to carry a taste of Uganda home.',
    ],
    process: [
      { title: 'A curated flight', text: 'A rotating selection from our range — typically Lemon Peel, Orange Peel, Rosemary, and Vanilla Bean.' },
      { title: 'Handmade packaging', text: 'Recycled paper boxes crafted by Kampala artisans — beautiful enough that no wrapping is needed.' },
      { title: 'Fully traceable', text: 'Every mini jar carries the same harvest-number traceability as our full-size range.' },
    ],
    tryItWith: [
      { title: 'A tasting evening', text: 'Set out the four jars with bread, cheese, and fruit and taste them side by side — the differences will surprise you.' },
      { title: 'Kwanjula & kukyala gifts', text: 'Honey has always belonged in the introduction ceremony basket — this is its most elegant form.' },
      { title: 'Corporate & host gifts', text: 'A distinctly Ugandan gift that travels well and suits every diet.' },
      { title: 'The honeymoon nod', text: 'The word literally comes from honey — a favourite for weddings.' },
    ],
    healthBenefits: [
      { title: 'All raw, all traceable', text: 'Every jar in the set is cold-pressed raw honey with live enzymes intact.' },
      { title: 'Portion-friendly', text: '30g jars are ideal for tasting and travel without committing to a full jar.' },
      { title: 'A thoughtful alternative', text: 'A gift of wellness rather than another bottle of wine — suitable for almost everyone.' },
    ],
    faqs: [
      {
        q: 'Can I choose which honeys go in the set?',
        a: 'The standard set is a curated flight (typically Lemon Peel, Orange Peel, Rosemary, and Vanilla Bean), but for gifting orders we are happy to arrange custom selections — contact us or order through the shop.',
      },
      {
        q: 'Do you deliver gift sets in Kampala?',
        a: 'Yes — order through shop.humble-beeing.com for delivery within Kampala, or contact us for bulk and corporate gifting.',
      },
    ],
    related: ['vanilla-bean-infused-honey', 'beeswax-candle', 'yumbe-shea-blossom-honey'],
  },
]

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)

export const PRODUCT_CATEGORIES = [
  { key: 'raw', label: 'Raw Single-Origin Honey', navLabel: 'Raw Honey', blurb: 'Harvested and bottled by region, never blended. Each jar tastes uniquely of its location — like wine.' },
  { key: 'infused', label: 'Infused Raw Honey', navLabel: 'Infused Honey', blurb: 'Whole, real ingredients aged in raw honey. Flavour added without moisture — no fermentation, no heat, still 100% raw.' },
  { key: 'candles', label: 'Beeswax Candles', navLabel: 'Beeswax Candles', blurb: 'Hand-poured in Kampala from the wax of our own harvests. Naturally air-purifying, no paraffin.' },
  { key: 'cosmetics', label: 'Beeswax Cosmetics', navLabel: 'Beeswax Cosmetics', blurb: 'Simple, natural beeswax skincare from the same traceable hives.' },
  { key: 'gifts', label: 'Gift Sets', navLabel: 'Gifts', blurb: 'Curated flights of our honeys in handmade recycled-paper packaging by Kampala artisans.' },
]

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null
}

export function getProductsByCategory(key) {
  return PRODUCTS.filter((p) => p.category === key)
}

export function formatUGX(amount) {
  return `UGX ${amount.toLocaleString('en-US')}`
}
