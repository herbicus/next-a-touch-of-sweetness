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
    select: {
      title: "images.title",
      media: "images.images.0.image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: "Carousel Section",
        subtitle: title ? title : undefined,
        media: media,
      };
    },
  },
});
