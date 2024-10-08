import {defineField, defineType} from 'sanity'

export const version = defineType({
  name: 'version',
  title: 'Revalidation Trigger',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      type: 'string',
      name: 'semanticVersion',
      description: 'Change to trigger revalidation on Next.js',
      validation: (rule) => rule.required(),
    }),
  ],
})
