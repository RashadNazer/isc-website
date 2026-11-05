import React, { useState, useMemo, memo } from "react";
import { projectData } from "../../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, MagneticButton } from "../../components/UIComponents";
import ProjectModal from "../../components/projects/ProjectModal";
import {
  Sparkles,
  ArrowRight,
  Building2,
  Factory,
  Hospital,
  Briefcase,
  Hotel,
  Plane,
  Shield,
  Home,
  School,
  Landmark,
  Pipette,
  Warehouse,
  Fuel,
  Train,
  MapPin,
} from "lucide-react";
import Balatro from "../../component/Balatro";

/* =========================================================
   Category meta
   ========================================================= */
const categoryConfig = {
  "Petrochemical Complex": { icon: Factory, label: "Petrochemical" },
  Pipelines: { icon: Pipette, label: "Pipelines" },
  "Hospital Complex": { icon: Hospital, label: "Healthcare" },
  "Medical Clinics": { icon: Hospital, label: "Clinics" },
  "Corporate Office": { icon: Briefcase, label: "Corporate" },
  "Business Office Complex": { icon: Briefcase, label: "Business Park" },
  "Commercial and Industrial Buildings": { icon: Building2, label: "Commercial" },
  "Government Buildings and Offices": { icon: Landmark, label: "Government" },
  "Military Base": { icon: Shield, label: "Military" },
  "Air Force Base": { icon: Shield, label: "Air Force" },
  "Fire Station and Safety Services Buildings": { icon: Shield, label: "Fire Station" },
  "Hotel, Restaurant and Resort": { icon: Hotel, label: "Hospitality" },
  "Theater and Museum": { icon: Landmark, label: "Culture" },
  "Sports and Leisure Complex": { icon: Sparkles, label: "Sports" },
  "Entertainment and Leisure Complex": { icon: Sparkles, label: "Entertainment" },
  "Airport Complex": { icon: Plane, label: "Airport" },
  "Sea Port Buildings and Offices": { icon: Warehouse, label: "Sea Port" },
  "Transfortatation & Logistics": { icon: Train, label: "Logistics" },
  "Fuel/Gas Station Buildings": { icon: Fuel, label: "Fuel Station" },
  "Factory and Manufacturing": { icon: Factory, label: "Manufacturing" },
  "Power Plant and Substation": { icon: Factory, label: "Power Plant" },
  "Workshop and Repair Center": { icon: Factory, label: "Workshop" },
  "Private Residence and Villas": { icon: Home, label: "Villas" },
  "Residential Complex": { icon: Home, label: "Residential" },
  "Residential, Commercial, and Leisure Complex": { icon: Home, label: "Mixed-Use" },
  "School & University Complex": { icon: School, label: "Education" },
  "Educational and Learning Complex": { icon: School, label: "Learning" },
};

const getCategoryMeta = (cat) =>
  categoryConfig[cat] || { icon: Building2, label: cat };

/* =========================================================
   Background
   ========================================================= */
const BackgroundEffect = memo(() => (
  <div className="absolute inset-0 z-[-1] pointer-events-none">
    <Balatro
      isRotate={false}
      mouseInteraction={true}
      pixelFilter={1800}
      color1="#1e3a8a"
      color2="#0f172a"
      color3="#3b82f6"
    />
    <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/60 backdrop-blur-[2px]" />
  </div>
));

/* =========================================================
   ProjectCard — clickable, opens modal
   ========================================================= */
const ProjectCard = ({ project, index, onSelect }) => {
  const meta = getCategoryMeta(project.category);
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(project)}
      data-cursor="view"
      className="group relative cursor-pointer bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden flex flex-col"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* Image */}
      <div className="relative h-48 md:h-52 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            onError={(e) => {
              e.target.style.display = "none";
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-105"
          />
        ) : (
          <Building2
            className="w-14 h-14 text-slate-300 dark:text-slate-700"
            strokeWidth={1.2}
          />
        )}

        {/* Bottom gradient for text overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Category pill top-left */}
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80">
            <Icon
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              strokeWidth={2.5}
            />
            <span className="text-[9px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-[0.2em]">
              {meta.label}
            </span>
          </div>
        </div>

        {/* Representative badge top-right */}
        {project.isPlaceholder && (
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.15em]">
              Representative
            </span>
          </div>
        )}

        {/* Bottom bar: Year (left) | Location (right) */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <p className="text-[10px] font-black text-white/90 uppercase tracking-[0.25em]">
            {project.year}
          </p>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-white/90" strokeWidth={2.5} />
            <p className="text-[10px] font-black text-white/90 uppercase tracking-[0.25em] truncate max-w-[140px]">
              {project.city}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h4 className="text-lg md:text-xl font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.name}
        </h4>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

/* =========================================================
   Main
   ========================================================= */
const ProjectsSection = () => {
  const featuredProjects = useMemo(() => projectData?.slice(0, 6) || [], []);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative isolate z-0 py-20 md:py-28 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500"
    >
      <BackgroundEffect />

      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* ============================================================
            HEADER — text left, CTA button right
            ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-4">
                <Sparkles
                  className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                  strokeWidth={2.5}
                />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Portfolio
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Featured Projects
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mt-4 max-w-xl">
                A snapshot of the mission-critical systems we've delivered
                across the Kingdom's most demanding sectors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-fit">
              <MagneticButton>
                <Link
                  to="/projects"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-7 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] transition-all shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white active:scale-95"
                >
                  Full Project Portfolio
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                  />
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* ============================================================
            GRID
            ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* ============================================================
          PROJECT MODAL
          ============================================================ */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;