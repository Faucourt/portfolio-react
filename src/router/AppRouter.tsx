import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/home/homepage";
import Parcours from "../pages/parcours/parcourspage";
import CompetencesPage from "../pages/competences/competencespage";
import Projets from "../pages/projets/projetspage";
import Veilles from "../pages/veilles/veillespage";
import Experiences from "../pages/experiences/experiencespage";
import Interets from "../pages/interets/interetspage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="parcours" element={<Parcours />} />
          <Route path="competences" element={<CompetencesPage />} />
          <Route path="projets" element={<Projets />} />
          <Route path="veilles" element={<Veilles />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="interets" element={<Interets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
