import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Singleton',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({type: 'string', name: 'name'}),
    defineField({type: 'string', name: 'intro'}),
    defineField({type: 'image', name: 'mainProfileImage'}),
    defineField({type: 'string', name: 'summary'}),
  ],
})
