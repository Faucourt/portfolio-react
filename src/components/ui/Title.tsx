interface TitleProps {
  level?: "main" | "section" | "sub" | "mini";
  align?: "left" | "center";
  children: React.ReactNode;
}

export default function Title({
  level = "main",
  align = "center",
  children,
}: TitleProps) {
  const levelClass =
    {
      main: "title-main",
      section: "title-section",
      sub: "title-sub",
      mini: "title-mini",
    }[level] ?? "title-main";

  const alignClass = align === "left" ? "title-left" : "title-center";

  return <h2 className={`${levelClass} ${alignClass}`}>{children}</h2>;
}
