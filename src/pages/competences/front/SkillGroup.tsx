import { useState } from "react";
import type { Category, CompetenceGroup } from "../back/types";
import CategoryAccordion from "./CategoryAccordion";

interface SkillGroupProps {
  group: CompetenceGroup;
}

export default function SkillGroup({ group }: SkillGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(
    null
  );

  const handleToggleCategory = (index: number) => {
    setOpenCategoryIndex((current) => (current === index ? null : index));
  };

  return (
    <article className={`skill-group ${isOpen ? "open" : ""}`}>
      <button
        className="group-header"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="group-title">{group.title}</span>
        <span className="group-icon">▼</span>
      </button>

      <div className="group-content">
        {group.categories.map((category: Category, index) => (
          <CategoryAccordion
            key={category.title}
            category={category}
            isOpen={openCategoryIndex === index && isOpen}
            onToggle={() => handleToggleCategory(index)}
          />
        ))}
      </div>
    </article>
  );
}
