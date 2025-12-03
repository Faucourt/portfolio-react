import type { Category } from "../back/types";
import SkillRow from "./SkillRow";

interface CategoryAccordionProps {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}

export default function CategoryAccordion({
  category,
  isOpen,
  onToggle,
}: CategoryAccordionProps) {
  const contentId = `category-${category.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <section className={`competence-category ${isOpen ? "open" : ""}`}>
      <button
        className="category-header"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
      >
        <span>{category.title}</span>
        <span className="chev">›</span>
      </button>

      <div id={contentId} className="category-content">
        {category.skills.map((skill) => (
          <SkillRow
            key={skill.name}
            name={skill.name}
            level={skill.level}
            active={isOpen}
          />
        ))}
      </div>
    </section>
  );
}
