import { BookIcon } from '@sanity/icons'

export default {
  name: 'ourStoryPage',
  title: 'Our Story Page',
  type: 'document',
  icon: BookIcon,
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
        {
          name: 'intro',
          title: 'Intro Text',
          type: 'portableText',
        },
      ],
    },
    {
      name: 'storyIntro',
      title: 'Story Intro',
      type: 'portableText',
      description: 'Lead narrative paragraphs that sit below the hero.',
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
      name: 'pillars',
      title: 'Mission, Vision & Why',
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
      name: 'teamSection',
      title: 'Team Section',
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
        },
        {
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              name: 'member',
              title: 'Member',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'role',
                  title: 'Role',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'bio',
                  title: 'Short Bio',
                  type: 'portableText',
                },
                {
                  name: 'photo',
                  title: 'Photo',
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
                  title: 'name',
                  subtitle: 'role',
                  media: 'photo',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'timeline',
      title: 'Milestones Timeline',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'events',
          title: 'Events',
          type: 'array',
          of: [
            {
              name: 'event',
              title: 'Event',
              type: 'object',
              fields: [
                {
                  name: 'year',
                  title: 'Year',
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
              ],
              preview: {
                select: {
                  title: 'year',
                  subtitle: 'description',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
