import { SparkleIcon } from '@sanity/icons'

export default {
  name: 'wholesalePartnershipsPage',
  title: 'Wholesale & Partnerships Page',
  type: 'document',
  icon: SparkleIcon,
  __experimental_actions: [/* 'create', */ 'update', 'publish', /* 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'overlay',
          title: 'Dark Overlay',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
    {
      name: 'intro',
      title: 'Intro Copy',
      type: 'portableText',
      description: 'Lead paragraph that introduces partnership opportunities.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Examples: chefs, events, retailers.',
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'productRange',
      title: 'Product Range Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'form',
      title: 'Inquiry Form',
      type: 'formSection',
      validation: (Rule) => Rule.required(),
    },
  ],
}
