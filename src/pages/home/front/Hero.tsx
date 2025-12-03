import { Link } from "react-router-dom";

interface HeroProps {
  name: string;
  intro: string;
}

export default function Hero({ name, intro }: HeroProps) {
  return (
    <section className="hero section-light" role="region">
      <div className="section-content fade-target">
        <h1 className="title-main">
          Bonjour, je suis <span className="text-accent">{name}</span>
        </h1>

        <p className="intro">{intro}</p>

        <div className="buttons">
          <Link to="/projets" className="btn btn-primary">
            Voir mes projets
          </Link>

          <Link to="/competences" className="btn btn-secondary">
            Mes compétences
          </Link>
        </div>
      </div>
    </section>
  );
}
