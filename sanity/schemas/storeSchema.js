import { PinIcon } from '@sanity/icons'

export default {
  name: 'store',
  title: 'Store / Stockist',
  type: 'document',
  icon: PinIcon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'area',
      title: 'Area / Address',
      type: 'string',
      description: 'Short display address, e.g. "Bugolobi, Kampala". Also used by the store locator search.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Map Location',
      type: 'geopoint',
      description: 'Right-click the spot in Google Maps, copy the coordinates, and paste the latitude/longitude here.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
      description: 'e.g. +256 700 000000',
    },
    {
      name: 'socialUrl',
      title: 'Social Media Link',
      type: 'url',
      description: "The store's Instagram or Facebook page URL.",
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
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
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Name A→Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'area',
      media: 'logo',
    },
  },
}
