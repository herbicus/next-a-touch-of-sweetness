import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Meta Title",
      type: "string",
      description: "The title of the post, also used as the SEO title",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      description:
        "The description of the post, also used as the SEO description",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      description: "The main image of the post, also used as the SEO image",
    }),
    // defineField({
    //   name: "body",
    //   type: "blockContent",
    // }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({ type: "hero" }),
        defineArrayMember({ type: "cakeCards" }),
        defineArrayMember({ type: "servicesCards" }),
        defineArrayMember({ type: "carousel" }),
        defineArrayMember({ type: "spacer" }),
        // defineArrayMember({ type: "blockContent" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      const {} = selection;
      return { ...selection };
    },
  },
});
