import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'image',
      name: 'asset',
    }),
  ],
})
