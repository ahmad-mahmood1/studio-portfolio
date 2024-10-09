import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "image",
      name: "asset",
      validation: (rule) => rule.required(),
    }),
  ],
});
