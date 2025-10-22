import { ShareIcon } from '@sanity/icons'

export default {
  name: 'contactConnectPage',
  title: 'Contact & Connect Page',
  type: 'document',
  icon: ShareIcon,
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
      name: 'wholesaleToggleLabel',
      title: 'Wholesale Toggle Label',
      type: 'string',
      initialValue: 'Wholesale inquiry',
    },
    {
      name: 'form',
      title: 'Contact Form',
      type: 'formSection',
      options: { collapsible: true, collapsed: false },
      description: 'Use additional fields for wholesale-specific questions.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    },
    {
      name: 'newsletter',
      title: 'Newsletter Signup',
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
        },
        {
          name: 'placeholder',
          title: 'Email Placeholder',
          type: 'string',
        },
        {
          name: 'submitLabel',
          title: 'Submit Button Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
