import type { VeilleItem } from "../back/types";

interface VeilleCardProps {
  veille: VeilleItem;
}

export default function VeilleCard({ veille }: VeilleCardProps) {
  const isYoutube = veille.link.includes("youtube.com");

  return (
    <article className="card veille-card fade-in">
      <div className="card__body">
        <h2 className="card-title">{veille.title}</h2>
        <p className="card-text">{veille.text}</p>
      </div>

      <div className="card__footer">
        <span className={`tag ${veille.tagClass}`}>{veille.tag}</span>
        <a
          href={veille.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-light"
        >
          {isYoutube ? "Voir la chaîne" : "Voir l’article"}
        </a>
      </div>
    </article>
  );
}
