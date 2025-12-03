type Variant = "primary" | "secondary" | "light" | "text";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    {
      primary: "btn-primary",
      secondary: "btn-secondary",
      light: "btn-light",
      text: "btn-text",
    }[variant] ?? "";

  const sizeClass =
    {
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    }[size] ?? "";

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
