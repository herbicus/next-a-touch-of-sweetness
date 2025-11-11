import React from "react";
import clsx from "clsx";

import { PortableText } from "@portabletext/react";
import Card from "@/components/Blocks/Card";

import Button from "@/components/Controls/Button";

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
      className="rounded-lg border-0 bg-white p-8 lg:p-10"
      noPadding={true}
    >
      <div
        className={clsx(
          "grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2 lg:items-start",
          {
            "lg:grid-flow-dense": !isLeftLayout,
          }
        )}
      >
        {/* Title Section */}
        <div
          className={clsx("order-1", {
            "lg:order-2 lg:col-start-2": !isLeftLayout,
          })}
        >
          {title && (
            <h4
              className={clsx(
                "text-primary text-4xl font-bold text-balance uppercase lg:text-5xl",
                {
                  "lg:text-right": !isLeftLayout,
                }
              )}
            >
              {title}
            </h4>
          )}
        </div>

        {/* Description and Button Section */}
        <div
          className={clsx(isLeftLayout ? "order-2" : "order-1 lg:col-start-1")}
        >
          {description && (
            <div className="text-primary mb-6 flex-1 text-lg font-normal text-pretty [&_strong]:tracking-wide">
              <PortableText value={description} />
            </div>
          )}

          <Button tone="medium" href="#">
            Find out more
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
