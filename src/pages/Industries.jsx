import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  Flame,
  Heart,
  Building2,
  Sparkles,
  Plane,
  Shield,
  Factory,
  Home,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkle,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { industries } from "../data/industries";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

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

const accentMap = {
  amber: "from-amber-500 to-orange-500",
  rose: "from-rose-500 to-pink-500",
  blue: "from-blue-600 to-indigo-500",
  violet: "from-violet-500 to-purple-500",
  sky: "from-sky-500 to-cyan-500",
  emerald: "from-emerald-500 to-teal-500",
  orange: "from-orange-500 to-red-500",
  indigo: "from-indigo-500 to-blue-500",
};

const IndustryCard = ({ industry, index }) => {
  const Icon = iconMap[industry.icon] || Building2;
  const gradient = accentMap[industry.accent] || "from-blue-600 to-indigo-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col"
    >
      <div className={`h-1 bg-gradient-to-r ${gradient}`} />

      <div className="p-7 md:p-8 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
          >
            <Icon className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-1">
              {industry.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              {industry.tagline}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
          {industry.description}
        </p>

        <div className="mb-6">
          <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-3">
            What We Deliver
          </p>
          <ul className="space-y-2">
            {industry.capabilities.slice(0, 4).map((cap, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400"
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <span className="leading-snug">{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6 pb-5 mb-5 border-b border-slate-100 dark:border-slate-800">
          {industry.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-lg font-black text-slate-900 dark:text-white tabular-nums leading-none">
                {stat.value}
              </p>
              <p className="text-[9px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/industries/${industry.id}`}
            data-cursor="hover"
            className="group/btn inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Explore Sector
            <ArrowRight
              className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"
              strokeWidth={3}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function Industries() {
  usePageTitle("Industries");
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
                  Industries We Serve
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Deep Expertise.{" "}
                <span className="text-slate-400 dark:text-slate-600">
                  Across Sectors.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                From oil and gas to healthcare, transportation to government —
                ISC delivers integrated low-current systems tailored to the
                unique demands of each industry.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* GRID */}
      <section className="pb-24 relative">
        <FullWidth>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.id} industry={ind} index={i} />
            ))}
          </div>

          {/* Final CTA */}
          <Reveal>
            <div className="mt-20 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
                  <Sparkle className="w-3.5 h-3.5 text-blue-100" strokeWidth={2.5} />
                  <span className="text-blue-50 text-[10px] font-black uppercase tracking-[0.3em]">
                    Don't see your sector?
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  We work with facilities of every type.
                </h3>
                <p className="text-blue-100 text-sm md:text-base mb-8 leading-relaxed">
                  Our systems serve over 40 distinct facility types across the
                  Kingdom. Tell us about yours.
                </p>
                <MagneticButton>
                  <Link
                    to="/contact"
                    data-cursor="hover"
                    className="group inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                  >
                    Start a Conversation
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      strokeWidth={3}
                    />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
}