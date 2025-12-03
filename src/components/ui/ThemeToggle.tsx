import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label =
    theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre";
  const icon = theme === "dark" ? "🌞" : "🌙";

  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  );
}
