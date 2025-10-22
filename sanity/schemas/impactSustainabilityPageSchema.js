import { EarthGlobeIcon } from '@sanity/icons'

export default {
  name: 'impactSustainabilityPage',
  title: 'Impact & Sustainability Page',
  type: 'document',
  icon: EarthGlobeIcon,
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
        {
          name: 'intro',
          title: 'Intro Body',
          type: 'portableText',
        },
      ],
    },
    {
      name: 'impactPillars',
      title: 'Impact Pillars',
      type: 'array',
      of: [
        {
          name: 'pillar',
          title: 'Pillar',
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
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'body.0.children.0.text',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'sdgSection',
      title: 'UN SDG Alignment',
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
          title: 'Description',
          type: 'portableText',
        },
        {
          name: 'image',
          title: 'Infographic Image',
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
    },
    {
      name: 'impactDashboard',
      title: 'Impact Dashboard',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'portableText',
        },
        {
          name: 'metrics',
          title: 'Key Metrics',
          type: 'array',
          of: [
            {
              name: 'metric',
              title: 'Metric',
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
              preview: {
                select: {
                  title: 'value',
                  subtitle: 'label',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'ctas',
      title: 'Call To Actions',
      type: 'array',
      of: [{ type: 'cta' }],
      validation: (Rule) => Rule.max(2),
    },
  ],
}
