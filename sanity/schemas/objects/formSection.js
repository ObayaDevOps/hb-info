export default {
  name: 'formSection',
  title: 'Form Section',
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
      title: 'Intro Copy',
      type: 'portableText',
    },
    {
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [{ type: 'formField' }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'additionalFields',
      title: 'Additional Fields (shown conditionally)',
      type: 'array',
      of: [{ type: 'formField' }],
      description: 'Use for toggleable inputs like wholesale-only questions.',
    },
    {
      name: 'submitLabel',
      title: 'Submit Button Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'cta',
    },
    {
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 3,
    },
  ],
}
