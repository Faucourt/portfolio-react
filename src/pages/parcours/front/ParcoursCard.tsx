import { useEffect, useRef, useState } from "react";
import type { ParcoursStep } from "../back/types";

interface ParcoursCardProps {
  step: ParcoursStep;
}

export default function ParcoursCard({ step }: ParcoursCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const frontRef = useRef<HTMLDivElement | null>(null);
  const backRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState<number | undefined>(undefined);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mesure dynamique de la hauteur (max des deux faces)
  useEffect(() => {
    function measureHeight() {
      if (!frontRef.current || !backRef.current) return;
      const hFront = frontRef.current.scrollHeight;
      const hBack = backRef.current.scrollHeight;
      const finalH = Math.max(hFront, hBack);
      setHeight(finalH);
    }

    measureHeight();
    window.addEventListener("resize", measureHeight);

    return () => {
      window.removeEventListener("resize", measureHeight);
    };
  }, [step]);

  // IntersectionObserver pour l'apparition (classe .visible)
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`card--flip ${isFlipped ? "flipped" : ""} ${
        isVisible ? "visible" : ""
      }`}
      style={height ? { height: `${height}px` } : undefined}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-label={`${step.title} – ${step.years}`}
    >
      <div className="card-inner">
        <div className="card-face card-front" ref={frontRef}>
          <h2 className="card-title">{step.title}</h2>
          <p className="card-text">{step.years}</p>
        </div>

        <div className="card-face card-back" ref={backRef}>
          <p className="card-text">{step.description}</p>
        </div>
      </div>
    </article>
  );
}
