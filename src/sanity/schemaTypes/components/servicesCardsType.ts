import { CaseIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesCardsType = defineType({
  name: "servicesCards",
  title: "Services Cards",
  type: "object",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              description: "The title of the card",
            },
            {
              name: "description",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {},
    prepare(selection) {
      const {} = selection;
      return { title: "Services Cards" };
    },
  },
});
