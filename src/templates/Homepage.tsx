import React from 'react';

import ComponentRegistry from '@/components/ComponentRegistry';

import type { PortableTextBlock } from "@portabletext/types";
import type { TypedObject } from "@portabletext/types";

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

type Section = HeroSectionData | CakeCardsSectionData | ServicesCardsSectionData;

interface HomepageProps {
  sections?: Section[];
}

export const Homepage: React.FC<HomepageProps> = ({ sections }) => {
  return <ComponentRegistry sections={sections} />;
};
