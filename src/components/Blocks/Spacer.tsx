import React from "react";

import IconAsterisk from "@/components/SVGs/IconAsterisk";

const Spacer: React.FC = () => {
  return (
    <div className="bg-primary relative z-1 flex w-full items-center justify-center py-4 shadow-xl">
      <IconAsterisk className="size-6 text-white" />
    </div>
  );
};

export default Spacer;
