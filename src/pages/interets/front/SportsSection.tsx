import { useState } from "react";
import { SPORTS } from "../back/interets.data";
import type { Sport } from "../back/types";

interface SportCardProps {
  sport: Sport;
}

function SportCard({ sport }: SportCardProps) {
  const [index, setIndex] = useState(0);
  const hasMany = sport.photos.length > 1;

  const showPrev = () => {
    setIndex((prev) => (prev - 1 + sport.photos.length) % sport.photos.length);
  };

  const showNext = () => {
    setIndex((prev) => (prev + 1) % sport.photos.length);
  };

  return (
    <article className="sport-card">
      <h3 className="sport-title">{sport.title}</h3>

      <div className="sport-carousel">
        {sport.photos.map((src, i) => (
          <img
            key={src}
            src={src}
            className={`sport-photo ${i === index ? "active" : ""}`}
            alt={sport.title}
          />
        ))}

        {hasMany && (
          <>
            <button
              type="button"
              className="sport-nav sport-prev"
              onClick={showPrev}
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              type="button"
              className="sport-nav sport-next"
              onClick={showNext}
              aria-label="Image suivante"
            >
              ›
            </button>
          </>
        )}
      </div>

      <p
        className="sport-desc"
        dangerouslySetInnerHTML={{ __html: sport.desc }}
      />
    </article>
  );
}

export default function SportsSection() {
  return (
    <section className="sports-section">
      <div className="section-content">
        <h2 className="title-section">Sports &amp; Activités</h2>
        <p className="subtitle">Ce que je pratique et ce qui me passionne.</p>

        <div className="sports-grid" id="sportsContainer">
          {SPORTS.map((sport) => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>
      </div>
    </section>
  );
}
