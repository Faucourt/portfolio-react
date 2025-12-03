import { USER_CONFIG } from "../../config/user";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="socials">
        <a href={USER_CONFIG.social.github} target="_blank">
          GitHub
        </a>
        <a href={USER_CONFIG.social.linkedin} target="_blank">
          LinkedIn
        </a>
        <a href={`mailto:${USER_CONFIG.social.email}`}>Email</a>
      </div>

      <p>
        © {new Date().getFullYear()} – {USER_CONFIG.fullName}. Tous droits
        réservés.
      </p>
    </footer>
  );
}
