import { HomeIcon } from '@sanity/icons'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
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
        {
          name: 'jsonLd',
          title: 'JSON-LD',
          type: 'text',
          rows: 6,
          description: 'Optional structured data in JSON format.',
        },
      ],
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'string',
        },
        {
          name: 'bodyLines',
          title: 'Supporting Lines',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(1).max(4),
        },
        {
          name: 'marqueeStatements',
          title: 'Marquee Statements',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(1),
        },
        {
          name: 'slides',
          title: 'Carousel Images',
          type: 'array',
          of: [
            {
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
          validation: (Rule) => Rule.min(1),
        },
        {
          name: 'ctas',
          title: 'Primary CTAs',
          type: 'array',
          of: [{ type: 'cta' }],
          validation: (Rule) => Rule.min(1).max(2),
        },
      ],
    },
    {
      name: 'productShowcase',
      title: 'Product Showcase',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'kicker',
          title: 'Kicker',
          type: 'string',
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'items',
          title: 'Products',
          type: 'array',
          of: [
            {
              name: 'product',
              title: 'Product',
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
                  type: 'text',
                  rows: 3,
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
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'cta',
                  title: 'CTA',
                  type: 'cta',
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'cta.href',
                  media: 'image',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        },
      ],
    },
    {
      name: 'trustedPartners',
      title: 'Trusted Partners',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [
            {
              name: 'logo',
              title: 'Logo',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
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
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'href',
                  title: 'Link (optional)',
                  type: 'string',
                },
                {
                  name: 'isExternal',
                  title: 'Open in new tab',
                  type: 'boolean',
                  initialValue: false,
                },
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'href',
                  media: 'image',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        },
      ],
    },
    {
      name: 'highlights',
      title: 'Full-Bleed Highlights',
      type: 'array',
      of: [
        {
          name: 'highlight',
          title: 'Highlight',
          type: 'object',
          fields: [
            {
              name: 'kicker',
              title: 'Kicker',
              type: 'string',
            },
            {
              name: 'headlineLines',
              title: 'Headline Lines',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.min(1),
            },
            {
              name: 'body',
              title: 'Body',
              type: 'portableText',
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
              name: 'ctas',
              title: 'CTAs',
              type: 'array',
              of: [{ type: 'cta' }],
              validation: (Rule) => Rule.max(2),
            },
            {
              name: 'attribution',
              title: 'Attribution',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'kicker',
              subtitle: 'headlineLines.0',
              media: 'backgroundImage',
            },
          },
        },
      ],
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'title',
          title: 'Kicker',
          type: 'string',
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              name: 'testimonial',
              title: 'Testimonial',
              type: 'object',
              fields: [
                {
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  rows: 4,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'role',
                  title: 'Role / Attribution',
                  type: 'string',
                },
              ],
              preview: {
                select: {
                  title: 'author',
                  subtitle: 'quote',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        },
      ],
    },
    {
      name: 'qualityAssurance',
      title: 'Quality Assurance',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'certifications',
          title: 'Certifications & Standards',
          type: 'array',
          of: [
            {
              name: 'certification',
              title: 'Certification',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Caption / Description',
                  type: 'string',
                },
                {
                  name: 'logo',
                  title: 'Logo',
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
                  name: 'href',
                  title: 'Link',
                  type: 'string',
                },
                {
                  name: 'isExternal',
                  title: 'Open in new tab',
                  type: 'boolean',
                  initialValue: false,
                },
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'description',
                  media: 'logo',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
