import React from "react";
import { PortableTextContent } from "@/components/Blocks/PortableTextContent";
import Card from "@/components/Blocks/Card";
import type { TypedObject } from "@portabletext/types";

interface CakeCardProps {
  title?: string;
  description?: TypedObject[] | TypedObject;
}

const CakeCard: React.FC<CakeCardProps> = ({ title, description }) => {
  return (
    <Card
      elevation="md"
      className="flex h-full flex-col rounded-lg border-0 bg-white p-8"
      noPadding={true}
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#B23E32]">
          <span className="text-[#B23E32]">*</span>
        </div>
      </div>

      {/* Title */}
      {title && (
        <h3 className="font-heading font-normal mb-4 text-center text-3xl text-primary">
          {title.split(" ").map((word, i, arr) => (
            <React.Fragment key={i}>
              {word}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
      )}

      {/* Separator */}
      {title && (
        <div className="mb-4 flex justify-center">
          <div className="h-px w-16 bg-primary" />
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="mb-6 flex-1 text-center text-gray-600">
          <PortableTextContent content={description} />
        </div>
      )}

      {/* Button */}
      <button className="mt-auto rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/80">
        Find out more
      </button>
    </Card>
  );
};

export default CakeCard;
