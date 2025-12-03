import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import type {
  Map as LeafletMap,
  Marker as LeafletMarker,
  PopupEvent,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import { TRIPS } from "../back/interets.data";
import type { Trip } from "../back/types";

function getPopupHtml(trip: Trip): string {
  const imagesHtml = trip.photos
    .map(
      (src, index) =>
        `<img src="${src}" alt="${trip.city}" class="popup-photo ${
          index === 0 ? "active" : ""
        }" data-index="${index}" />`
    )
    .join("");

  const controlsHtml =
    trip.photos.length > 1
      ? `
    <button class="popup-nav popup-prev">‹</button>
    <button class="popup-nav popup-next">›</button>
  `
      : "";

  return `
    <h3 class="popup-title">${trip.city}, ${trip.country}</h3>
    <p class="popup-desc">${trip.desc}</p>

    <div class="popup-carousel">
      ${imagesHtml}
      ${controlsHtml}
    </div>
  `;
}

export default function TravelSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [activeTripId, setActiveTripId] = useState<string | null>(null);

  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Record<string, LeafletMarker>>({});

  const countries = useMemo(
    () => Array.from(new Set(TRIPS.map((t) => t.country))),
    []
  );

  const filteredTrips = useMemo(
    () =>
      TRIPS.filter(
        (t) => selectedCountry === "all" || t.country === selectedCountry
      ),
    [selectedCountry]
  );

  // Initialisation de la carte + marqueurs
  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("interets-map", {
      center: [20, 0],
      zoom: 2,
      worldCopyJump: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap France",
    }).addTo(map);

    const markerIcon = L.divIcon({
      className: "custom-marker",
      iconSize: [16, 16],
    });

    TRIPS.forEach((trip) => {
      const marker = L.marker(trip.coords, { icon: markerIcon }).addTo(map);
      marker.bindPopup(getPopupHtml(trip));
      markersRef.current[trip.id] = marker;
    });

    // Gestion du popup + carrousel
    map.on("popupopen", (e: PopupEvent) => {
      const popupEl = e.popup.getElement() as HTMLElement | null;
      if (!popupEl) return;

      const photos = popupEl.querySelectorAll(
        ".popup-photo"
      ) as NodeListOf<HTMLImageElement>;
      if (photos.length <= 1) return;

      const prevBtn = popupEl.querySelector(
        ".popup-prev"
      ) as HTMLButtonElement | null;
      const nextBtn = popupEl.querySelector(
        ".popup-next"
      ) as HTMLButtonElement | null;

      let index = 0;

      const show = (i: number) => {
        photos.forEach((img: HTMLImageElement, idx: number) => {
          img.classList.toggle("active", idx === i);
        });
      };

      prevBtn?.addEventListener("click", () => {
        index = (index - 1 + photos.length) % photos.length;
        show(index);
      });

      nextBtn?.addEventListener("click", () => {
        index = (index + 1) % photos.length;
        show(index);
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, []);

  // Quand on clique une ville dans la liste
  useEffect(() => {
    if (!activeTripId || !mapRef.current) return;
    const trip = TRIPS.find((t) => t.id === activeTripId);
    if (!trip) return;

    const marker = markersRef.current[trip.id];
    if (!marker) return;

    mapRef.current.flyTo(trip.coords, 6, { duration: 1.2 });
    marker.openPopup();
  }, [activeTripId]);

  return (
    <section className="voyages-section">
      <div className="section-content">
        <h2 className="title-section">Voyages &amp; Découvertes</h2>
        <p className="subtitle">
          Les différents lieux que j’ai visités au fil des années.
        </p>

        <div className="voyages-layout">
          {/* SIDEBAR */}
          <aside className="travel-sidebar">
            <h3 className="sidebar-title">Lieux visités</h3>

            <select
              aria-label="Filtrer par pays"
              className="country-filter"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="all">Tous les pays</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <ul className="travel-list">
              {filteredTrips.map((trip) => (
                <li
                  key={trip.id}
                  className={activeTripId === trip.id ? "active" : undefined}
                  onClick={() => setActiveTripId(trip.id)}
                >
                  {trip.city}, {trip.country}
                </li>
              ))}
            </ul>
          </aside>

          {/* MAP */}
          <div
            id="interets-map"
            className="worldmap"
            aria-label="Carte interactive"
          />
        </div>
      </div>
    </section>
  );
}
