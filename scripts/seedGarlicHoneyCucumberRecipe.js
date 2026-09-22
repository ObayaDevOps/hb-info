// Idempotently publish the first recipe. Existing Sanity edits are left intact.
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@sanity/client')

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset, SANITY_API_TOKEN: token } = process.env
if (!projectId || !dataset || !token) {
  throw new Error('Sanity project, dataset, and API token are required')
}

const client = createClient({ projectId, dataset, token, apiVersion: '2025-04-16', useCdn: false })
const tags = [
  { slug: 'garlic-honey', title: 'Garlic honey' },
  { slug: 'salads', title: 'Salads' },
  { slug: 'quick-recipes', title: 'Quick recipes' },
  { slug: 'cucumber', title: 'Cucumber' },
]
const tagRef = (slug) => ({ _type: 'reference', _key: slug, _ref: `recipeTag-${slug}` })

const recipe = {
  _id: 'recipe-spicy-peanut-cucumber-salad-garlic-honey',
  _type: 'recipe',
  title: 'Spicy Peanut Cucumber Salad with Garlic Honey',
  slug: { _type: 'slug', current: 'spicy-peanut-cucumber-salad-garlic-honey' },
  summary: 'Cool, crunchy cucumber tossed with a spicy peanut dressing and a savoury-sweet spoonful of Humble Beeing garlic honey.',
  prepMinutes: 10,
  totalMinutes: 10,
  servings: 4,
  ingredientGroups: [
    {
      _type: 'ingredientGroup', _key: 'dressing', heading: 'Spicy peanut dressing',
      items: [
        '1 tablespoon peanut butter',
        '2 tablespoons toasted sesame oil',
        '1 tablespoon chilli crisp',
        '1 tablespoon rice vinegar',
        '1 tablespoon tamari or soy sauce',
        '1 teaspoon grated fresh garlic',
        '1 teaspoon Humble Beeing garlic infused honey',
        '¼ teaspoon flaky or kosher salt',
      ],
    },
    {
      _type: 'ingredientGroup', _key: 'salad', heading: 'Cucumber salad',
      items: [
        '450 g seedless cucumber, cut into ½–1 cm rounds',
        '2 tablespoons sesame seeds or chopped roasted peanuts',
      ],
    },
  ],
  steps: [
    'Whisk the peanut butter, sesame oil, chilli crisp, vinegar, tamari, fresh garlic, garlic honey and salt in a bowl until the dressing is smooth.',
    'Add the cucumber rounds to a large bowl. Pour over the dressing and turn gently until the cucumber is evenly coated.',
    'Scatter sesame seeds or chopped peanuts on top and serve while the cucumber is crisp.',
  ],
  tags: tags.map((tag) => tagRef(tag.slug)),
  relatedProductSlug: 'garlic-infused-honey',
  sourceName: 'Familystyle Food’s Peanut Chili Crisp Cucumber Salad',
  sourceUrl: 'https://familystylefood.com/spicy-cucumber-salad/',
}

async function main() {
  const transaction = client.transaction()
  tags.forEach(({ slug, title }) => transaction.createIfNotExists({
    _id: `recipeTag-${slug}`, _type: 'recipeTag', title,
    slug: { _type: 'slug', current: slug },
  }))
  transaction.createIfNotExists(recipe)
  await transaction.commit()
  console.log('Recipe and tags are published (existing documents preserved).')
}

main().catch((error) => { console.error(error); process.exitCode = 1 })
