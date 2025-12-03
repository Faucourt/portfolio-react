import { useEffect } from "react";
import "./css/veilles.css";
import { VEILLES_DATA } from "./back/veilles.data";
import VeilleCard from "./front/VeilleCard";

export default function VeillesPage() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(
      ".veille-card.fade-in"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
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
    <section className="section-light veilles-section">
      <div className="section-content">
        <h1 className="title-main">Veilles Technologiques</h1>
        <p className="subtitle">
          Une sélection synthétique de mes recherches sur les évolutions
          technologiques du numérique.
        </p>

        <div className="veilles-grid">
          {VEILLES_DATA.map((veille) => (
            <VeilleCard key={veille.title} veille={veille} />
          ))}
        </div>
      </div>
    </section>
  );
}
