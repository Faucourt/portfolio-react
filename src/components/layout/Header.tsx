import { NavLink } from "react-router-dom";
import { USER_CONFIG } from "../../config/user";
import { NAV_ITEMS } from "../../config/navigation";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <img
          src="/images/profil.jpg"
          alt={`Photo de profil de ${USER_CONFIG.fullName}`}
        />
        <h1>{USER_CONFIG.fullName}</h1>
      </div>

      <nav className="navbar" aria-label="Navigation principale">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
