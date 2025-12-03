import "./css/competences.css";

import Section from "../../components/ui/Section";
import Title from "../../components/ui/Title";

import { COMPETENCES } from "./back/competences.data";
import SkillGroup from "./front/SkillGroup";

export default function CompetencesPage() {
  return (
    <Section variant="light">
      <div className="competences-section">
        <Title level="main" align="center">
          Mes compétences
        </Title>

        <p className="subtitle">
          Deux axes principaux : <strong>Hard Skills</strong> et{" "}
          <strong>Soft Skills</strong>. Tout est chargé dynamiquement.
        </p>

        <div className="competences-groups" aria-label="Liste des compétences">
          {COMPETENCES.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </Section>
  );
}
