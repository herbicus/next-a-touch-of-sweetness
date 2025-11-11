import { ImagesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const carouselType = defineType({
  name: "carousel",
  title: "Carousel",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "images",
      type: "reference",
      to: { type: "imageCollections" },
      description: "The images of the carousel",
    }),
  ],
  preview: {
    select: {},
    prepare(selection) {
      const {} = selection;
      return { title: "Carousel" };
    },
  },
});
