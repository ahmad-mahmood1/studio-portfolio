import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Singleton',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({type: 'string', name: 'name', validation: (r) => r.required()}),
    defineField({type: 'image', name: 'mainProfileImage', validation: (r) => r.required()}),
    defineField({type: 'text', name: 'summary', validation: (r) => r.required()}),
  ],
})
