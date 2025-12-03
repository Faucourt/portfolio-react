import "./css/parcours.css";

import { PARCOURS_STEPS } from "./back/parcours.data";
import ParcoursCard from "./front/ParcoursCard";

export default function ParcoursPage() {
  return (
    <section className="section-light parcours-section">
      <div className="section-content">
        <h1 className="title-main">Parcours Académique</h1>
        <p className="subtitle">Chaque étape a construit mes compétences.</p>

        <div id="parcours-cards" className="parcours-cards">
          {PARCOURS_STEPS.map((step) => (
            <ParcoursCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
