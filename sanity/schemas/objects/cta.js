export default {
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      title: 'URL or Path',
      type: 'string',
      description: 'Use a full URL for external links or a leading slash for internal routes.',
      validation: (Rule) => Rule.required(),
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
      title: 'label',
      subtitle: 'href',
    },
  },
}
