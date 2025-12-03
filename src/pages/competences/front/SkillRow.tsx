import type { Skill } from "../back/types";

interface SkillRowProps extends Skill {
  active: boolean;
}

export default function SkillRow({ name, level, active }: SkillRowProps) {
  const width = active ? `${level}%` : "0%";

  return (
    <div className="skill">
      <span className="skill-name">{name}</span>

      <div className="progress-container">
        <div className="progress">
          <div className="progress-fill" style={{ width }} />
        </div>
        <span className="progress-value">{level}%</span>
      </div>
    </div>
  );
}
