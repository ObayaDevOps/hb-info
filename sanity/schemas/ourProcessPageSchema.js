import { CogIcon } from '@sanity/icons'

export default {
  name: 'ourProcessPage',
  title: 'Our Process Page',
  type: 'document',
  icon: CogIcon,
  __experimental_actions: [/* 'create', */ 'update', 'publish', /* 'delete' */],
  fields: [
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
      description: 'Opening narrative about sourcing and collaboration.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          name: 'step',
          title: 'Step',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'portableText',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
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
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description.0.children.0.text',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'valuePillars',
      title: 'From Smallholder To Sanctuary',
      type: 'array',
      of: [
        {
          name: 'pillar',
          title: 'Pillar',
          type: 'object',
          fields: [
            {
              name: 'badge',
              title: 'Badge Label',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'body',
              title: 'Body',
              type: 'portableText',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'badge',
            },
          },
        },
      ],
    },
    {
      name: 'healthBenefits',
      title: 'Health Benefits Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'intro',
          title: 'Intro Paragraph',
          type: 'portableText',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'benefits',
          title: 'Benefits List',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(1),
        },
        {
          name: 'secondaryTitle',
          title: 'Secondary Title',
          type: 'string',
        },
        {
          name: 'secondaryBody',
          title: 'Secondary Body',
          type: 'portableText',
        },
      ],
    },
    {
      name: 'sustainability',
      title: 'Sustainability In Action',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'portableText',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'bullets',
          title: 'Supporting Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
  ],
}
