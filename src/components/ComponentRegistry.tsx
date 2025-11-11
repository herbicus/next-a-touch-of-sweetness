import React from "react";
import type { TypedObject } from "@portabletext/types";
import type { PortableTextBlock } from "@portabletext/types";

import HeroSection from "@/components/Sections/HeroSection";
import CakeCardsSection from "@/components/Sections/CakeCardsSection";
import ServicesCardsSection from "@/components/Sections/ServicesCardsSection";
import CarouselSection from "@/components/Sections/CarouselSection";
import Spacer from "@/components/Blocks/Spacer";

interface HeroSectionData {
  _type: "hero";
  _key: string;
  title?: PortableTextBlock[] | PortableTextBlock;
  description?: TypedObject[] | TypedObject;
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: Record<string, unknown>;
    };
    alt?: string;
  };
}

interface CakeCardData {
  _key?: string;
  title?: string;
  description?: TypedObject[] | TypedObject;
}

interface CakeCardsSectionData {
  _type: "cakeCards";
  _key: string;
  cards?: CakeCardData[];
}

interface ServiceCardData {
  _key?: string;
  title?: string;
  description?: TypedObject[] | TypedObject;
}

interface ServicesCardsSectionData {
  _type: "servicesCards";
  _key: string;
  cards?: ServiceCardData[];
}

interface CarouselImageData {
  _key?: string;
  title?: string;
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: Record<string, unknown>;
    };
    alt?: string;
  };
}

interface CarouselSectionData {
  _type: "carousel";
  _key: string;
  images?: {
    title?: string;
    images?: CarouselImageData[];
  };
}

interface SpacerSectionData {
  _type: "spacer";
  _key: string;
}

type Section =
  | HeroSectionData
  | CakeCardsSectionData
  | ServicesCardsSectionData
  | CarouselSectionData
  | SpacerSectionData;
interface ComponentRegistryProps {
  sections?: Section[];
}

const ComponentRegistry: React.FC<ComponentRegistryProps> = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "hero":
            return (
              <HeroSection
                key={section._key}
                title={section.title}
                description={section.description}
                image={section.image}
              />
            );
          case "cakeCards":
            return (
              <CakeCardsSection key={section._key} cards={section.cards} />
            );
          case "servicesCards":
            return (
              <ServicesCardsSection key={section._key} cards={section.cards} />
            );
          case "carousel":
            return (
              <CarouselSection key={section._key} images={section.images} />
            );
          case "spacer":
            return <Spacer key={section._key} />;
          default:
            console.warn(
              `Unknown section type: ${(section as { _type: string })._type}`
            );
            return null;
        }
      })}
    </>
  );
};

export default ComponentRegistry;
