import { useEffect } from "react";
import "./css/home.css";

import { USER_CONFIG } from "../../config/user";
import { HOME_CONTENT } from "./back/home.data";

import Hero from "./front/Hero";
import AboutSection from "./front/AboutSection";
import FeaturedProjectCard from "./front/FeaturedProjectCard";

function HomePage() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".fade-target");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero name={USER_CONFIG.fullName} intro={HOME_CONTENT.heroIntro} />

      <AboutSection text={HOME_CONTENT.aboutText} />

      <FeaturedProjectCard project={HOME_CONTENT.featuredProject} />
    </>
  );
}

export default HomePage;
