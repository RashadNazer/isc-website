import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default marker icon paths (Vite/Webpack issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom brand marker — single project
const singleMarkerIcon = new L.DivIcon({
  className: "custom-brand-marker",
  html: `
    <div style="position: relative; width: 32px; height: 42px;">
      <div style="
        position: absolute; inset: 0;
        background: linear-gradient(135deg, #2563eb, #1e40af);
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.5);
      "></div>
      <div style="
        position: absolute; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 10px; height: 10px;
        background: white; border-radius: 50%;
      "></div>
    </div>
  `,
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -42],
});

// Cluster marker — multiple projects in same city
const makeClusterIcon = (count) =>
  new L.DivIcon({
    className: "custom-cluster-marker",
    html: `
      <div style="position: relative; width: 48px; height: 48px;">
        <div style="
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 900; font-size: 16px;
          font-family: system-ui, -apple-system, sans-serif;
        ">${count}</div>
        <div style="
          position: absolute; top: -4px; right: -4px;
          width: 16px; height: 16px;
          background: #10b981;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(16, 185, 129, 0.5);
        "></div>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -24],
  });

// Fallback coordinates for KSA cities if project.coordinates missing
const cityCoords = {
  Riyadh: [24.7136, 46.6753],
  Jeddah: [21.4858, 39.1925],
  Dammam: [26.4207, 50.0888],
  Yanbu: [24.0895, 38.0618],
  Jubail: [27.0046, 49.6462],
  Makkah: [21.3891, 39.8579],
  Madinah: [24.4686, 39.6142],
  "Al Khobar": [26.2172, 50.1971],
  Dhahran: [26.2361, 50.0393],
  Neom: [27.986, 35.299],
  "Ras Tanura": [26.6454, 50.1611],
  Abha: [18.2465, 42.5117],
  Tabuk: [28.3838, 36.555],
  Hail: [27.5114, 41.7208],
  Najran: [17.4917, 44.1322],
  Jazan: [16.8892, 42.5511],
  Khurais: [25.0667, 48.2333],
  "South Ghawar": [25.3833, 49.6333],
  Jafurah: [25.5667, 49.6167],
  Juaymah: [26.6722, 50.1006],
};

/* =========================================================
   LocationPopupContent — lists all projects for one city
   ========================================================= */
const LocationPopupContent = ({ city, projects, onSelect }) => (
  <div className="min-w-[320px] max-w-[380px]">
    {/* Header */}
    <div className="pb-2.5 mb-2.5 border-b border-slate-200">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-600 mb-0.5">
            {projects.length} {projects.length === 1 ? "Project" : "Projects"}
          </p>
          <h3 className="text-sm font-black text-slate-900 leading-tight">
            {city}
          </h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
          {projects.length}
        </div>
      </div>
    </div>

    {/* Project list — compact rows */}
    <div className="space-y-1 max-h-[280px] overflow-y-auto pr-1">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onSelect?.(project)}
          className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-blue-50 transition-colors group flex items-start gap-2.5"
        >
          {/* Left: year badge */}
          <div className="flex-shrink-0 pt-0.5">
            <span className="inline-block text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded-md">
              {project.year}
            </span>
          </div>

          {/* Right: name + category */}
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-0.5">
              {project.category}
            </p>
            <p className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
              {project.name}
            </p>
          </div>

          {/* Arrow indicator */}
          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity pt-1">
            <span className="text-blue-600 font-black text-xs">→</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

/* =========================================================
   MAIN
   ========================================================= */
const MapView = ({ projects, onSelect }) => {
  // Step 1: Attach coordinates to each project
  const projectsWithCoords = useMemo(() => {
    return projects
      .map((p) => {
        const coords = p.coordinates || cityCoords[p.city];
        if (!coords) return null;
        return { ...p, _coords: coords };
      })
      .filter(Boolean);
  }, [projects]);

  // Step 2: Group by city — one entry per location with all projects
  const locations = useMemo(() => {
    const map = new Map();
    projectsWithCoords.forEach((project) => {
      const key = project.city;
      if (!map.has(key)) {
        map.set(key, {
          city: project.city,
          coordinates: project._coords,
          projects: [],
        });
      }
      map.get(key).projects.push(project);
    });
    return Array.from(map.values());
  }, [projectsWithCoords]);

  if (locations.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-400 dark:text-slate-600 font-bold uppercase tracking-widest text-xs">
          No projects with location data available.
        </p>
      </div>
    );
  }

  const totalProjects = projectsWithCoords.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
      style={{ height: "600px" }}
    >
      <MapContainer
        center={[24.0, 45.0]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19}
        />

        {locations.map((loc) => {
          const count = loc.projects.length;
          const icon = count > 1 ? makeClusterIcon(count) : singleMarkerIcon;

          return (
            <Marker
              key={loc.city}
              position={loc.coordinates}
              icon={icon}
            >
              <Popup>
                <LocationPopupContent
                  city={loc.city}
                  projects={loc.projects}
                  onSelect={onSelect}
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Overlay counter */}
      <div className="absolute top-4 left-4 z-[400] px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-700 dark:text-slate-300">
          {totalProjects} {totalProjects === 1 ? "project" : "projects"} across{" "}
          {locations.length} {locations.length === 1 ? "location" : "locations"}
        </p>
      </div>

      {/* Subtle dark mode tint */}
      <div className="pointer-events-none absolute inset-0 z-[401] bg-slate-950/0 dark:bg-slate-950/20 transition-colors" />
    </motion.div>
  );
};

export default MapView;