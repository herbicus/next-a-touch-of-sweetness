import React from "react";
import { PortableTextContent } from "@/components/Blocks/PortableTextContent";
import Card from "@/components/Blocks/Card";
import type { TypedObject } from "@portabletext/types";

interface ServiceCardProps {
  title?: string;
  description?: TypedObject[] | TypedObject;
  layout?: "left" | "right"; // For alternating layouts
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  layout = "left",
}) => {
  const isLeftLayout = layout === "left";

  return (
    <Card
      elevation="md"
      className="rounded-lg border-0 bg-white p-8 lg:p-12"
      noPadding={true}
    >
      <div
        className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center ${
          !isLeftLayout ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Title Section */}
        <div
          className={`${isLeftLayout ? "order-1" : "order-2 lg:col-start-2"}`}
        >
          {title && (
            <h3 className="font-heading font-normal text-3xl text-primary lg:text-4xl">
              {title}
            </h3>
          )}
        </div>

        {/* Description and Button Section */}
        <div
          className={`${isLeftLayout ? "order-2" : "order-1 lg:col-start-1"}`}
        >
          {description && (
            <div className="mb-6 text-gray-700">
              <PortableTextContent content={description} />
            </div>
          )}

          <button className="rounded-lg border-2 border-primary bg-white px-6 py-3 text-primary transition-colors hover:bg-primary hover:text-white">
            Find out more
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
