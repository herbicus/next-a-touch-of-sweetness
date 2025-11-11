import React from "react";
import Hero from "@/components/Blocks/Hero";

import type { PortableTextBlock } from "@portabletext/types";
import type { TypedObject } from "@portabletext/types";

interface HeroSectionProps {
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

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  return <Hero {...props} />;
};

export default HeroSection;
