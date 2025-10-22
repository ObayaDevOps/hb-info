import { DocumentTextIcon } from '@sanity/icons'

export default {
  name: 'termsPage',
  title: 'Terms & Conditions Page',
  type: 'document',
  icon: DocumentTextIcon,
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
        },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'section',
          title: 'Section',
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Section ID',
              type: 'string',
              description: 'Used for navigation anchors (e.g., termsAndConditions1).',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Content',
              type: 'portableText',
            },
            {
              name: 'accordionItems',
              title: 'Accordion Items',
              type: 'array',
              of: [
                {
                  name: 'accordionItem',
                  title: 'Accordion Item',
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
                  ],
                  preview: {
                    select: {
                      title: 'title',
                    },
                  },
                },
              ],
            },
            {
              name: 'postContent',
              title: 'Post Content',
              type: 'portableText',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'id',
            },
          },
        },
      ],
    },
  ],
}
