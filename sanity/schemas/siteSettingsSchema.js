import { CogIcon } from '@sanity/icons'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Order Number',
      type: 'string',
      description:
        'Phone number the "Place order on WhatsApp" button opens a chat with, in international format, e.g. +256789062116.',
      validation: (Rule) =>
        Rule.required().regex(/^\+?[\d\s-]{7,20}$/, {
          name: 'phone number',
          invert: false,
        }),
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
}
