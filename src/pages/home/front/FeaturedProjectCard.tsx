import type { FeaturedProject } from "../back/types";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <section className="section-light" role="region">
      <div className="section-content fade-target">
        <h2 className="title-section">Projet en vedette</h2>

        <div className="card">
          <img
            id="featured-img"
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
          <h3 className="card-title" id="featured-title">
            {project.title}
          </h3>
          <p className="card-text" id="featured-desc">
            {project.description}
          </p>
          <a
            id="featured-link"
            className="btn btn-light"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
