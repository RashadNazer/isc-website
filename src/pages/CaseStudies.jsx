import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Sparkles,
  Flame,
  Heart,
  Plane,
  Shield,
  Factory,
  Home,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { caseStudies } from "../data/caseStudies";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* =========================================================
   Filters
   ========================================================= */
const sectors = [
  { id: "All", label: "All Case Studies", icon: Sparkles },
  { id: "Oil & Gas", label: "Oil & Gas", icon: Flame },
  { id: "Healthcare", label: "Healthcare", icon: Heart },
];

/* =========================================================
   Featured Case Study
   ========================================================= */
const FeaturedCaseStudy = ({ cs }) => (
  <Link to={`/case-studies/${cs.id}`} data-cursor="view">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-[280px] md:h-full min-h-[320px] overflow-hidden">
          <img
            src={cs.image}
            alt={cs.title}
            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20" />
          <div className="absolute top-5 left-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.25em]">
              <Sparkles className="w-3 h-3" strokeWidth={2.5} />
              Featured
            </span>
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.25em]">
                {cs.sector}
              </span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em]">
                {cs.year}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {cs.title}
            </h3>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {cs.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span className="font-bold uppercase tracking-wider">
                {cs.location}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Building2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span className="font-bold uppercase tracking-wider">
                {cs.client}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

/* =========================================================
   Regular Case Study Card
   ========================================================= */
const CaseStudyCard = ({ cs, index }) => (
  <Link to={`/case-studies/${cs.id}`} data-cursor="view">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={cs.image}
          alt={cs.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.25em]">
            {cs.sector}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {cs.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3 flex-1">
          {cs.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <span>{cs.year}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="truncate max-w-[100px]">{cs.client}</span>
          </div>
          <ArrowRight
            className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
            strokeWidth={3}
          />
        </div>
      </div>
    </motion.div>
  </Link>
);

/* =========================================================
   MAIN
   ========================================================= */
export default function CaseStudies() {
  usePageTitle("Case Studies");
  const [activeSector, setActiveSector] = useState("All");

  const filtered = useMemo(() => {
    if (activeSector === "All") return caseStudies;
    return caseStudies.filter((cs) => cs.sector === activeSector);
  }, [activeSector]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* HERO */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 relative text-center">
        <FullWidth>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Case Studies
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Real Projects.{" "}
                <span className="text-slate-400 dark:text-slate-600">
                  Real Impact.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Detailed accounts of how ISC delivers mission-critical systems
                for the Kingdom's most vital facilities.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

            {/* FILTER BAR */}
      <div className="sticky top-20 md:top-24 z-30 mb-12 w-full max-w-[100vw] overflow-hidden">
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex justify-center min-w-max px-4">
            <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-xl inline-flex">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                const isActive = activeSector === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSector(sector.id)}
                    className="relative px-3.5 md:px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap active:scale-95"
                  >
                    <span
                      className={`relative z-10 flex items-center gap-1.5 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 dark:text-slate-400 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                      {sector.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeCaseStudyFilter"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"
                        transition={{ type: "spring", stiffness: 260, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="pb-24 relative">
        <FullWidth>
          {/* Count */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              {filtered.length}{" "}
              {filtered.length === 1 ? "Case Study" : "Case Studies"}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
          </div>

          {/* Featured */}
          {featured && (
            <div className="mb-10">
              <FeaturedCaseStudy cs={featured} />
            </div>
          )}

          {/* Rest — 4 cols on very wide */}
          <motion.div
            key={activeSector}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
          >
            {rest.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-2">
                No case studies in this sector yet
              </p>
              <button
                onClick={() => setActiveSector("All")}
                className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
              >
                View all case studies
              </button>
            </motion.div>
          )}

          {/* Final CTA */}
          <Reveal>
            <div className="mt-20 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                Ready to discuss your project?
              </p>
              <MagneticButton>
                <Link
                  to="/enquiry"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                >
                  Request a Quote
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                  />
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
}