interface SectionProps {
  variant?: "light" | "accent" | "dark";
  slim?: boolean;
  children: React.ReactNode;
}

export default function Section({
  variant = "light",
  slim = false,
  children,
}: SectionProps) {
  return (
    <section
      className={`
        ${variant === "light" ? "section-light" : ""}
        ${variant === "accent" ? "section-accent" : ""}
        ${variant === "dark" ? "section-dark" : ""}
        ${slim ? "section-slim" : ""}
      `}
    >
      <div className="section-content">{children}</div>
    </section>
  );
}
