import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'projectUrl',
      title: 'Project Url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    }),
  ],
});
