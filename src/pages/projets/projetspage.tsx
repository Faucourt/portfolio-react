import ProjectCard from "./front/ProjectCard";
import { PROJECTS } from "./back/projets.data";
import "./css/projets.css";

export default function ProjectsPage() {
  return (
    <section className="section-light projets-section">
      <div className="section-content">
        <h1 className="title-main">Mes Projets</h1>
        <p className="subtitle">
          Découvrez mes réalisations, leurs contextes, les technologies
          utilisées et leurs objectifs.
        </p>

        <div className="projects-container">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
