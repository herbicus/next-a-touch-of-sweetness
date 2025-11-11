import React from "react";

import { PortableText } from "@portabletext/react";

import Button from "@/components/Controls/Button";
import Card from "@/components/Blocks/Card";

import IconAsterisk from "@/components/SVGs/IconAsterisk";

import type { TypedObject } from "@portabletext/types";

interface CakeCardProps {
  title?: string;
  description?: TypedObject[] | TypedObject;
}

const CakeCard: React.FC<CakeCardProps> = ({ title, description }) => {
  return (
    <Card elevation="md" className="rounded-lg border-0 bg-white p-8" noPadding>
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <IconAsterisk className="text-primary size-10" />
      </div>

      {/* Title */}
      {title && (
        <h2 className="text-primary font-heading mb-4 text-center font-normal text-balance text-3xl lg:text-4xl">
          {title}
        </h2>
      )}

      {/* Separator */}
      {title && (
        <div className="mb-4 flex justify-center">
          <div className="bg-primary h-px w-16" />
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="text-primary mb-6 flex-1 text-center text-base/loose font-light [&_strong]:tracking-wider">
          <PortableText value={description} />
        </div>
      )}

      {/* Button */}
      <div className="flex justify-center">
        <Button href="#">Find out more</Button>
      </div>
    </Card>
  );
};

export default CakeCard;
