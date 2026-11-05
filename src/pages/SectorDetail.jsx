import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Flame,
  Heart,
  Building2,
  Plane,
  Factory,
  Home,
  Layers,
  Award,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectModal from "../components/projects/ProjectModal";
import { getIndustryById } from "../data/industries";
import { getProjectsByIndustry } from "../data/projects";

/* Full-width wrapper */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* Icon map */
const iconMap = {
  flame: Flame,
  heart: Heart,
  building: Building2,
  sparkles: Sparkles,
  plane: Plane,
  shield: Shield,
  factory: Factory,
  home: Home,
};

/* Accent color map */
const accentMap = {
  amber: { gradient: "from-amber-500 to-orange-500", hex: "#f59e0b" },
  rose: { gradient: "from-rose-500 to-pink-500", hex: "#f43f5e" },
  blue: { gradient: "from-blue-600 to-indigo-500", hex: "#2563eb" },
  violet: { gradient: "from-violet-500 to-purple-500", hex: "#8b5cf6" },
  sky: { gradient: "from-sky-500 to-cyan-500", hex: "#0ea5e9" },
  emerald: { gradient: "from-emerald-500 to-teal-500", hex: "#10b981" },
  orange: { gradient: "from-orange-500 to-red-500", hex: "#f97316" },
  indigo: { gradient: "from-indigo-500 to-blue-500", hex: "#6366f1" },
};

const ProjectCard = ({ project, index, isPlaceholder = false, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
    onClick={() => onSelect?.(project)}
    data-cursor="view"
    className={`group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col ${
      onSelect ? "cursor-pointer" : ""
    }`}
  >
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

    {isPlaceholder && (
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.2em]">
          Representative
        </span>
      </div>
    )}

    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
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
        <Building2 className="w-16 h-16 text-slate-300 dark:text-slate-700" strokeWidth={1.2} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[9px] font-black text-white/80 uppercase tracking-[0.25em] mb-1">
          {project.year} · {project.city}
        </p>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h4 className="text-base font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.name}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-2 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
        {project.systems.slice(0, 3).map((sys, i) => (
          <span
            key={i}
            className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider px-2 py-1 rounded-md bg-blue-600/10"
          >
            {sys}
          </span>
        ))}
        <span className="ml-auto text-blue-600 dark:text-blue-400 font-black text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      </div>
    </div>
  </motion.div>
);

export default function SectorDetail() {
  const { id } = useParams();
  const industry = getIndustryById(id);

  const [selectedProject, setSelectedProject] = useState(null);

  usePageTitle(industry ? industry.name : "Industry", "Industries");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <p className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-4">
            404
          </p>
          <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-8">
            Sector not found
          </p>
          <Link
            to="/industries"
            className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
          >
            ← Back to all industries
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[industry.icon] || Building2;
  const accent = accentMap[industry.accent] || accentMap.blue;
  const allProjects = getProjectsByIndustry(industry.id);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[720px] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient}`} />

        {industry.hero && (
          <img
            src={industry.hero}
            alt={industry.name}
            onError={(e) => {
              e.target.style.display = "none";
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <FullWidth className="relative z-10 pt-32">
          <Breadcrumbs
            variant="light"
            items={[
              { label: "Industries", path: "/industries" },
              { label: industry.name },
            ]}
          />
          <Link
            to="/industries"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[10px] font-black uppercase tracking-[0.25em] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={3} />
            All Industries
          </Link>
        </FullWidth>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <FullWidth className="pb-12 md:pb-16">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white shadow-2xl flex-shrink-0`}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.3em] mb-1">
                    Industries We Serve
                  </p>
                  <p className="text-xs text-white/60 italic">{industry.tagline}</p>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4 max-w-5xl">
                {industry.name}
              </h1>
              <p className="text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
                {industry.description}
              </p>
            </Reveal>
          </FullWidth>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-900">
        <FullWidth className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {industry.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
            <div className="flex flex-col items-center text-center">
              <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {industry.capabilities.length}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                Core Capabilities
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {industry.facilityTypes.length}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                Facility Types
              </p>
            </div>
          </div>
        </FullWidth>
      </section>

      {/* WHY ISC */}
      <section className="py-20 md:py-28">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                Why ISC
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Built for {industry.name.split(" ")[0]}.
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industry.whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative p-6 rounded-[1.5rem] bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/40 hover:shadow-lg transition-all duration-500"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-[1.5rem]`}
                />
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}
                >
                  <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FullWidth>
      </section>

      {/* CAPABILITIES + FACILITY TYPES */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900">
        <FullWidth>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capabilities */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Shield className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                      What We Deliver
                    </p>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      Core Capabilities
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {industry.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                        strokeWidth={3}
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Facility Types */}
            <Reveal delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Layers className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                      Where We Work
                    </p>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      Facility Types
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.facilityTypes.map((type, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* REPRESENTATIVE PROJECTS */}
      {allProjects.length > 0 && (
        <section className="py-20 md:py-28">
          <FullWidth>
            <Reveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                  <Award className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                    Representative Projects
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {allProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isPlaceholder={project.isPlaceholder}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>

            <Reveal>
              <div className="mt-10 text-center">
                <Link
                  to="/projects"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] hover:gap-3 transition-all"
                >
                  View full project portfolio
                  <ArrowRight
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                  />
                </Link>
              </div>
            </Reveal>
          </FullWidth>
        </section>
      )}

      {/* COMPLIANCE */}
      {industry.compliance && industry.compliance.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900">
          <FullWidth className="text-center">
            <Reveal>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6">
                Standards We Meet
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {industry.compliance.map((std, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-black uppercase tracking-wider"
                  >
                    <Shield className="w-3 h-3 text-blue-600 dark:text-blue-400" strokeWidth={3} />
                    {std}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </FullWidth>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-20 md:py-28">
        <FullWidth>
          <Reveal>
            <div
              className={`p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br ${accent.gradient} text-center relative overflow-hidden`}
            >
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                    Ready to Discuss
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                  Let's talk about your {industry.name.split(" ")[0].toLowerCase()}{" "}
                  project.
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
                  Our sector teams have delivered projects across the Kingdom
                  for over four decades. Tell us about yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Link
                      to="/enquiry"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                    >
                      Request a Quote
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </Link>
                  </MagneticButton>
                  <Link
                    to="/contact"
                    data-cursor="hover"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all active:scale-95"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </FullWidth>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}