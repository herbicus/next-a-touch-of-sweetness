import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { imageCollectionsType } from "./imageCollectionsType";

// Homepage
import { homepageType } from "./homepageType";

// Components
import { heroType } from "./components/heroType";
import { cakeCardsType } from "./components/cakeCardsType";
import { servicesCardsType } from "./components/servicesCardsType";
import { carouselType } from "./components/carouselType";
import { spacerType } from "./components/spacerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homepageType,
    imageCollectionsType,

    // Components
    heroType,
    cakeCardsType,
    servicesCardsType,
    carouselType,
    spacerType,
  ],
};
