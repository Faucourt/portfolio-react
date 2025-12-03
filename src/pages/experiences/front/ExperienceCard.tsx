import type { Experience } from "../back/types";

interface ExperienceCardProps {
  experience: Experience;
}

function getContextBadgeClass(context: string): string {
  if (context === "stage") return "xp-context xp-context--stage";
  if (context === "alternance") return "xp-context xp-context--alternance";
  if (context === "associatif") return "xp-context xp-context--freelance";
  return "xp-context xp-context--default";
}

function formatContextLabel(context: string): string {
  if (!context) return "";
  return context.charAt(0).toUpperCase() + context.slice(1);
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const badgeClass = getContextBadgeClass(experience.context);
  const contextLabel = formatContextLabel(experience.context);

  return (
    <article className="card xp-card">
      <header className="xp-header">
        <div>
          <h2 className="xp-role">{experience.role}</h2>
          <p className="xp-company">
            {experience.company} — {experience.location}
          </p>
        </div>

        <div className="xp-info">
          <span className="xp-date">{experience.date}</span>
          {experience.context && (
            <span className={badgeClass}>{contextLabel}</span>
          )}
        </div>
      </header>

      <p className="xp-description">{experience.description.trim()}</p>

      <ul className="xp-missions">
        {experience.missions.map((mission) => (
          <li key={mission}>{mission}</li>
        ))}
      </ul>

      <div className="xp-techs">
        {experience.tech.map((tech) => (
          <span key={tech} className="xp-tech">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
