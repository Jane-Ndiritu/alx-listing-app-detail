import React, { useState } from "react";
import Pill from "../common/Pill";
import { FILTERS } from "@/constants";

const FiltersSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <div className="flex flex-wrap gap-3 p-4">
      {FILTERS.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          isActive={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FiltersSection;
