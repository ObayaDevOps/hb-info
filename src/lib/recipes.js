import client from '../../sanity/lib/client'
import { getProduct } from './products'

const RECIPE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  summary,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  prepMinutes,
  totalMinutes,
  servings,
  ingredientGroups,
  steps,
  "tags": tags[]->{title, "slug": slug.current},
  relatedProductSlug,
  sourceName,
  sourceUrl
`

export async function getRecipes() {
  return client.fetch(`*[_type == "recipe" && defined(slug.current)] | order(title asc) {${RECIPE_FIELDS}}`)
}

export async function getRecipe(slug) {
  return client.fetch(`*[_type == "recipe" && slug.current == $slug][0] {${RECIPE_FIELDS}}`, { slug })
}

export async function getRecipeSlugs() {
  return client.fetch(`*[_type == "recipe" && defined(slug.current)].slug.current`)
}

export function getRecipeImage(recipe) {
  if (recipe.imageUrl) return { src: recipe.imageUrl, alt: recipe.imageAlt || recipe.title }
  if (recipe.slug === 'spicy-peanut-cucumber-salad-garlic-honey') {
    return {
      src: '/images/recipes/spicy-peanut-cucumber-salad.webp',
      alt: 'Cucumber salad coated in spicy peanut dressing and sesame seeds in a serving bowl',
      credit: 'Karen Tedesco / Familystyle Food',
      creditUrl: 'https://familystylefood.com/spicy-cucumber-salad/',
    }
  }
  const product = getProduct(recipe.relatedProductSlug)
  return product ? { src: product.image, alt: product.imageAlt } : null
}

export function recipeMatchesSearch(recipe, rawQuery) {
  const query = rawQuery.trim().toLocaleLowerCase()
  if (!query) return true
  const searchable = [
    recipe.title,
    recipe.summary,
    ...(recipe.tags || []).map((tag) => tag?.title),
    ...(recipe.ingredientGroups || []).flatMap((group) => group.items || []),
  ].filter(Boolean).join(' ').toLocaleLowerCase()
  return searchable.includes(query)
}
