import { BookIcon } from '@sanity/icons'

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  icon: BookIcon,
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 120 },
      validation: (Rule) => Rule.required(),
    },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
    {
      name: 'image', title: 'Recipe photo', type: 'image', options: { hotspot: true },
      description: 'Optional. Use an original photo of the finished dish.',
      fields: [{ name: 'alt', title: 'Alternative text', type: 'string', validation: (Rule) => Rule.required() }],
    },
    { name: 'prepMinutes', title: 'Prep time (minutes)', type: 'number', validation: (Rule) => Rule.required().min(0) },
    { name: 'totalMinutes', title: 'Total time (minutes)', type: 'number', validation: (Rule) => Rule.required().min(1) },
    { name: 'servings', title: 'Servings', type: 'number', validation: (Rule) => Rule.required().integer().min(1) },
    {
      name: 'ingredientGroups', title: 'Ingredients', type: 'array', validation: (Rule) => Rule.required().min(1),
      of: [{
        type: 'object', name: 'ingredientGroup', title: 'Ingredient group',
        fields: [
          { name: 'heading', title: 'Heading', type: 'string' },
          { name: 'items', title: 'Ingredients', type: 'array', of: [{ type: 'string' }], validation: (Rule) => Rule.required().min(1) },
        ],
      }],
    },
    { name: 'steps', title: 'Method', type: 'array', of: [{ type: 'text', rows: 3 }], validation: (Rule) => Rule.required().min(1) },
    {
      name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: [{ type: 'recipeTag' }] }],
      validation: (Rule) => Rule.required().min(1).unique(),
    },
    { name: 'relatedProductSlug', title: 'Related product slug', type: 'string', description: 'Slug of a product in the website catalogue, if relevant.' },
    { name: 'sourceName', title: 'Inspiration credit', type: 'string' },
    { name: 'sourceUrl', title: 'Inspiration URL', type: 'url' },
  ],
  preview: { select: { title: 'title', media: 'image' } },
}
