import { AsteriskIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const spacerType = defineType({
  name: "spacer",
  title: "Spacer",
  type: "object",
  icon: AsteriskIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Spacer",
      readOnly: true,
    }),
  ],
});
