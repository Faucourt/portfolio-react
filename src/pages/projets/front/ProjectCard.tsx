import { useState } from "react";
import type { Project } from "../back/types";
import { convertRichTextToJSX } from "./richText";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type SectionKey =
  | "contexte"
  | "objectif"
  | "fonctionnement"
  | "versions"
  | "tests"
  | "tech"
  | "links";

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSectionKey, setOpenSectionKey] = useState<SectionKey | null>(null);

  const toggleMain = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setOpenSectionKey(null);
    }
  };

  const toggleSection = (key: SectionKey) => {
    setOpenSectionKey((prev) => (prev === key ? null : key));
  };

  return (
    <article className="project-card card">
      <div className="project-header">
        <img
          src={project.image}
          alt={project.alt}
          className="project-img"
          loading="lazy"
        />
        <div>
          <h2 className="card-title">{project.title}</h2>
          <p className="card-text">{project.year}</p>
          <p className="card-text">{project.state}</p>
        </div>
      </div>

      <button
        className="btn btn-light project-toggle"
        aria-expanded={isOpen}
        aria-controls={`details-${index}`}
        onClick={toggleMain}
      >
        {isOpen ? "Masquer les détails" : "Voir les détails"}
      </button>

      <div className="project-details" id={`details-${index}`} hidden={!isOpen}>
        {/* SECTIONS : Contexte / Objectif / Fonctionnement */}
        <section className="details-section">
          <button
            className="details-header"
            aria-expanded={openSectionKey === "contexte"}
            onClick={() => toggleSection("contexte")}
          >
            📌 Contexte
          </button>
          <div
            className="details-content"
            hidden={openSectionKey !== "contexte"}
          >
            {convertRichTextToJSX(project.sections.contexte)}
          </div>
        </section>

        <section className="details-section">
          <button
            className="details-header"
            aria-expanded={openSectionKey === "objectif"}
            onClick={() => toggleSection("objectif")}
          >
            📌 Objectif
          </button>
          <div
            className="details-content"
            hidden={openSectionKey !== "objectif"}
          >
            {convertRichTextToJSX(project.sections.objectif)}
          </div>
        </section>

        <section className="details-section">
          <button
            className="details-header"
            aria-expanded={openSectionKey === "fonctionnement"}
            onClick={() => toggleSection("fonctionnement")}
          >
            📌 Fonctionnement
          </button>
          <div
            className="details-content"
            hidden={openSectionKey !== "fonctionnement"}
          >
            {convertRichTextToJSX(project.sections.fonctionnement)}
          </div>
        </section>

        {/* VERSIONS */}
        {project.versions && project.versions.length > 0 && (
          <section className="details-section">
            <button
              className="details-header"
              aria-expanded={openSectionKey === "versions"}
              onClick={() => toggleSection("versions")}
            >
              🛠️ Versions du projet
            </button>
            <div
              className="details-content"
              hidden={openSectionKey !== "versions"}
            >
              <ul className="version-list">
                {project.versions.map((v) => (
                  <li key={v.version}>
                    <strong>{v.version}</strong> — {v.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* COMMENT TESTER */}
        {project.tests && (
          <section className="details-section">
            <button
              className="details-header"
              aria-expanded={openSectionKey === "tests"}
              onClick={() => toggleSection("tests")}
            >
              🧪 Comment tester ?
            </button>
            <div
              className="details-content"
              hidden={openSectionKey !== "tests"}
            >
              {convertRichTextToJSX(project.tests)}
            </div>
          </section>
        )}

        {/* TECHNOLOGIES */}
        <section className="details-section">
          <button
            className="details-header"
            aria-expanded={openSectionKey === "tech"}
            onClick={() => toggleSection("tech")}
          >
            🧩 Technologies utilisées
          </button>
          <div className="details-content" hidden={openSectionKey !== "tech"}>
            <div className="tech-grid">
              {project.tech.map((t) => (
                <div className="tech-item" key={t.name}>
                  <img src={t.icon} alt={t.name} loading="lazy" />
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIENS */}
        <section className="details-section">
          <button
            className="details-header"
            aria-expanded={openSectionKey === "links"}
            onClick={() => toggleSection("links")}
          >
            🔗 Liens
          </button>
          <div className="details-content" hidden={openSectionKey !== "links"}>
            <a
              className="github-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Voir sur GitHub →
            </a>
            {project.download && (
              <>
                <br />
                <br />
                <a
                  className="github-link"
                  href={project.download}
                  download
                  rel="noreferrer"
                >
                  Télécharger →
                </a>
              </>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
