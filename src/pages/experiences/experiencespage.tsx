import { useEffect } from "react";
import "./css/experiences.css";
import { EXPERIENCES_DATA } from "./back/experiences.data";
import ExperienceCard from "./front/ExperienceCard";

export default function ExperiencesPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".xp-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="experiences-page">
      <section className="section-content">
        <h1 className="title-main">Expériences professionnelles</h1>
        <p className="subtitle">
          Découvrez mes expériences : stages, alternances, freelances et projets
          significatifs.
        </p>
      </section>

      <div className="xp-list">
        {EXPERIENCES_DATA.map((xp) => (
          <ExperienceCard
            key={`${xp.company}-${xp.date}-${xp.role}`}
            experience={xp}
          />
        ))}
      </div>
    </div>
  );
}
