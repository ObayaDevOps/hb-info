import { TagIcon } from '@sanity/icons'

export default {
  name: 'recipeTag',
  title: 'Recipe Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    { name: 'title', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: { select: { title: 'title' } },
}
