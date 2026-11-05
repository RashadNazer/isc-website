import React, { useState, useMemo, memo, useEffect } from "react";
import { projectData } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, MagneticButton } from "../components/UIComponents";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  Sparkles,
  Building2,
  Factory,
  Hospital,
  Briefcase,
  Pipette,
  Plus,
  LayoutGrid,
  Hotel,
  Plane,
  Shield,
  Home,
  Warehouse,
  School,
  Landmark,
  Fuel,
  Train,
} from "lucide-react";
import Aurora from "../component/Aurora";
import SplitText from "../component/SplitText";

import ViewToggle from "../components/projects/ViewToggle";
import SearchInput from "../components/projects/SearchInput";
import MapView from "../components/projects/MapView";
import ListView from "../components/projects/ListView";
import ProjectModal from "../components/projects/ProjectModal";

import { useLocalStorage } from "../hooks/useLocalStorage";

/* Full-width wrapper */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* Background */
const BackgroundEffect = memo(() => (
  <div className="absolute inset-0 z-0 opacity-40 dark:opacity-50 pointer-events-none transform-gpu">
    <Aurora
      colorStops={["#020617", "#2563eb", "#93c5fd"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
    <div className="absolute inset-0 bg-white/20 dark:bg-slate-950/40 backdrop-blur-[2px]" />
  </div>
));

/* Sector groups */
const sectorGroups = {
  "Oil & Gas": ["Petrochemical Complex", "Pipelines"],
  Healthcare: ["Hospital Complex", "Medical Clinics"],
  Commercial: [
    "Corporate Office",
    "Business Office Complex",
    "Commercial and Industrial Buildings",
  ],
  Government: [
    "Government Buildings and Offices",
    "Military Base",
    "Air Force Base",
    "Fire Station and Safety Services Buildings",
  ],
  Hospitality: [
    "Hotel, Restaurant and Resort",
    "Theater and Museum",
    "Sports and Leisure Complex",
    "Entertainment and Leisure Complex",
  ],
  Transport: [
    "Airport Complex",
    "Sea Port Buildings and Offices",
    "Transfortatation & Logistics",
    "Fuel/Gas Station Buildings",
  ],
  Industrial: [
    "Factory and Manufacturing",
    "Power Plant and Substation",
    "Workshop and Repair Center",
  ],
  Residential: [
    "Private Residence and Villas",
    "Residential Complex",
    "Residential, Commercial, and Leisure Complex",
  ],
  Education: [
    "School & University Complex",
    "Educational and Learning Complex",
  ],
};

const sectorIcons = {
  "Oil & Gas": Factory,
  Healthcare: Hospital,
  Commercial: Briefcase,
  Government: Landmark,
  Hospitality: Hotel,
  Transport: Plane,
  Industrial: Factory,
  Residential: Home,
  Education: School,
};

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

/* Featured Project Card */
const FeaturedProjectCard = ({ project, index, onSelect }) => {
  const meta = getCategoryMeta(project.category);
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(project)}
      className={`group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 ${
        onSelect ? "cursor-pointer" : ""
      }`}
    >
      <div className="absolute inset-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-900/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 p-8 md:p-12 h-full min-h-[380px] md:min-h-[460px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Icon className="w-3.5 h-3.5 text-blue-300" strokeWidth={2.5} />
            <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.25em]">
              {meta.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {project.isPlaceholder && (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.2em]">
                Representative
              </span>
            )}
            <Sparkles className="w-5 h-5 text-blue-300" strokeWidth={2.5} />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-2 text-white/60">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={3} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Signature Project
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.05] tracking-tight max-w-3xl">
            {project.name}
          </h3>

          {project.description && (
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl line-clamp-3">
              {project.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm font-bold uppercase tracking-wider">
                {project.city}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm font-bold uppercase tracking-wider">
                {project.year}
              </span>
            </div>
            <div className="ml-auto">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110 transition-all duration-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* Compact Card */
const ProjectCard = ({ project, index, onSelect }) => {
  const meta = getCategoryMeta(project.category);
  const Icon = meta.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 32,
        mass: 1,
        delay: (index % 6) * 0.04,
      }}
      onClick={() => onSelect?.(project)}
      style={{ willChange: "transform, opacity" }}
      className={`group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden flex flex-col ${
        onSelect ? "cursor-pointer" : ""
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {project.isPlaceholder && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-0.5 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.15em]">
            Representative
          </span>
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Icon className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                {meta.label}
              </span>
            </div>
            <span className="text-slate-200 dark:text-slate-700 font-mono font-black text-xs group-hover:text-blue-600/40 transition-colors">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-3 mb-6">
            {project.name}
          </h4>
        </div>

        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {project.city}
          </span>
          <span className="font-bold text-slate-500 dark:text-slate-400">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* Section Header */
const SectionHeader = ({ icon: Icon, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4 mb-6 md:mb-8"
  >
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
      <Icon className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
      <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
        {label}
      </span>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
  </motion.div>
);

/* Empty State */
const EmptyState = ({ query, filter }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center py-20 md:py-32"
  >
    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
      <Building2 className="w-6 h-6 text-slate-400" />
    </div>
    <p className="text-slate-400 dark:text-slate-600 font-black italic tracking-widest uppercase text-xs mb-2">
      {query ? "No projects match your search" : "No projects in this sector"}
    </p>
    {query && (
      <p className="text-slate-500 dark:text-slate-500 text-sm">
        Try a different keyword or clear the search.
      </p>
    )}
  </motion.div>
);

export default function ProjectsPage() {
  usePageTitle("Projects");
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [view, setView] = useLocalStorage("projects-view", "grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (view === "timeline") setView("grid");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const sectors = useMemo(() => {
    const items = [
      {
        id: "All",
        label: "All Projects",
        icon: Sparkles,
        count: projectData.length,
      },
    ];

    Object.entries(sectorGroups).forEach(([sectorName, cats]) => {
      const count = projectData.filter((p) => cats.includes(p.category)).length;
      if (count === 0) return;
      items.push({
        id: `sector:${sectorName}`,
        label: sectorName,
        icon: sectorIcons[sectorName] || Building2,
        count,
      });
    });

    return items;
  }, []);

  const filteredProjects = useMemo(() => {
    let result = projectData;

    if (filter.startsWith("sector:")) {
      const sectorName = filter.replace("sector:", "");
      const cats = sectorGroups[sectorName] || [];
      result = result.filter((p) => cats.includes(p.category));
    } else if (filter !== "All") {
      result = result.filter((p) => p.category === filter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.city?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.client?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [filter, searchQuery]);

  const featuredProjects = useMemo(
    () => filteredProjects.slice(0, 2),
    [filteredProjects]
  );

  const remainingProjects = useMemo(
    () => filteredProjects.slice(2),
    [filteredProjects]
  );

  const displayedRemaining = useMemo(() => {
    if (view === "grid") {
      return remainingProjects.slice(0, visibleCount - 2);
    }
    return remainingProjects;
  }, [remainingProjects, visibleCount, view]);

  const hasMore =
    view === "grid" && visibleCount - 2 < remainingProjects.length;

  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <BackgroundEffect />

      <FullWidth className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left md:text-center mb-10 md:mb-16"
        >
          <div className="mb-3">
            <SplitText
              text="Archive"
              className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]"
              delay={30}
              animationStep={0.02}
            />
          </div>

          <div className="mb-4">
            <SplitText
              text="Full Project Portfolio"
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight"
              delay={40}
              duration={0.8}
              textAlign="center"
            />
          </div>

          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl md:mx-auto leading-relaxed font-medium">
            Explore our history of delivering specialized electronic systems
            for Saudi Arabia's most critical sectors.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap justify-start md:justify-center gap-6 md:gap-12">
            {[
              { value: projectData.length + "+", label: "Projects Delivered" },
              { value: "40+", label: "Years Active" },
              { value: "08", label: "Industry Sectors" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                className="text-left md:text-center"
              >
                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CONTROLS */}
        <div className="sticky top-20 md:top-28 z-40 pb-6 md:pb-10">
          <div className="mb-3 overflow-x-auto no-scrollbar">
            <div className="flex justify-start md:justify-center min-w-max px-1">
              <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-xl inline-flex">
                {sectors.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = filter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setFilter(cat.id);
                        setVisibleCount(6);
                      }}
                      className="relative px-2.5 md:px-3.5 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap active:scale-95"
                    >
                      <span
                        className={`relative z-10 flex items-center gap-1.5 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-slate-500 dark:text-slate-400 hover:text-blue-600"
                        }`}
                      >
                        <Icon className="w-3 h-3 md:w-3.5 md:h-3.5" strokeWidth={2.5} />
                        <span>{cat.label}</span>
                        {cat.count !== undefined && (
                          <span
                            className={`text-[8px] opacity-60 ${
                              isActive ? "opacity-90" : ""
                            }`}
                          >
                            {cat.count}
                          </span>
                        )}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeProjectPill"
                          className="absolute inset-0 bg-blue-600 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 32,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 px-2 sm:flex-1">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </div>
            <div className="flex items-center gap-3 sm:flex-shrink-0">
              <div className="flex-1 sm:flex-initial sm:w-72">
                <SearchInput value={searchQuery} onChange={setSearchQuery} />
              </div>
              <ViewToggle view={view} setView={setView} />
            </div>
            <div className="hidden sm:block sm:flex-1" />
          </div>
        </div>

        {/* GRID VIEW */}
        {view === "grid" && (
          <>
            {featuredProjects.length > 0 && (
              <div className="mb-10 md:mb-14">
                <SectionHeader icon={Sparkles} label="Signature Projects" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`featured-${filter}-${searchQuery}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                  >
                    {featuredProjects.map((project, i) => (
                      <FeaturedProjectCard
                        key={project.id}
                        project={project}
                        index={i}
                        onSelect={setSelectedProject}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {displayedRemaining.length > 0 && (
              <div className="mb-12">
                <SectionHeader icon={LayoutGrid} label="All Projects" />
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {displayedRemaining.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onSelect={setSelectedProject}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </>
        )}

        {/* LIST VIEW */}
        {view === "list" && (
          <div className="mb-12">
            <SectionHeader icon={LayoutGrid} label="All Projects" />
            <AnimatePresence mode="popLayout">
              <ListView
                projects={filteredProjects}
                onSelect={setSelectedProject}
              />
            </AnimatePresence>
          </div>
        )}

        {/* MAP VIEW */}
        {view === "map" && (
          <div className="mb-12">
            <SectionHeader icon={Building2} label="By Location" />
            <MapView
              projects={filteredProjects}
              onSelect={setSelectedProject}
            />
          </div>
        )}

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <EmptyState query={searchQuery} filter={filter} />
        )}

        {/* LOAD MORE */}
        <AnimatePresence>
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-12 md:mt-16 flex justify-center"
            >
              <MagneticButton>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  data-cursor="hover"
                  className="group flex items-center justify-center gap-3 bg-slate-900 dark:bg-white px-10 py-5 rounded-2xl text-white dark:text-slate-950 font-black text-sm uppercase tracking-[0.15em] transition-all active:scale-95 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
                >
                  Load More Projects
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Plus className="w-4 h-4" strokeWidth={3} />
                  </motion.div>
                </button>
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>
      </FullWidth>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}