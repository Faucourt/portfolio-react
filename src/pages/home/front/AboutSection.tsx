interface AboutSectionProps {
  text: string;
}

export default function AboutSection({ text }: AboutSectionProps) {
  return (
    <section className="about section-accent" role="region">
      <div className="section-content fade-target">
        <h2 className="title-section">À propos</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
