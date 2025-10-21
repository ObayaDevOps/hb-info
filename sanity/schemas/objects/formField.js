export default {
  name: 'formField',
  title: 'Form Field',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Field Key',
      type: 'string',
      description: 'Used as the form field identifier (no spaces).',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Input Type',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Email', value: 'email' },
          { title: 'Textarea', value: 'textarea' },
          { title: 'Select', value: 'select' },
          { title: 'Number', value: 'number' },
          { title: 'Tel', value: 'tel' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    },
    {
      name: 'isRequired',
      title: 'Required',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'options',
      title: 'Options',
      description: 'Only used for select inputs.',
      type: 'array',
      of: [
        {
          name: 'option',
          title: 'Option',
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
          ],
        },
      ],
      hidden: ({ parent }) => parent?.type !== 'select',
    },
    {
      name: 'helpText',
      title: 'Help Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'type',
    },
  },
}
