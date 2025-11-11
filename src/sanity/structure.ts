import { HomeIcon } from "@sanity/icons";

import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(HomeIcon)
        .child(
          S.document()
            .documentId("homepage-document-id")
            .schemaType("homepage")
        ),
      S.documentTypeListItem("imageCollections").title("Image Collections"),
      S.divider(),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "homepage", "imageCollections"].includes(item.getId()!)
      ),
    ]);
