import "./css/interets.css";
import TravelSection from "./front/TravelSection";
import SportsSection from "./front/SportsSection";

export default function InteretsPage() {
  return (
    <main className="interets-page">
      <section className="section-content">
        <h1 className="title-main">Centres d’intérêts</h1>
        <p className="subtitle">Voyages, sports et activités créatives.</p>
      </section>

      <TravelSection />
      <SportsSection />
    </main>
  );
}
