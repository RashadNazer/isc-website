import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  Layers,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Breadcrumbs from "../components/Breadcrumbs";
import { caseStudies, getCaseStudyById } from "../data/caseStudies/index";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const CaseStudyDetail = () => {
  const { id } = useParams();
  const cs = getCaseStudyById(id);

  usePageTitle(cs ? cs.title : "Case Study");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <p className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-4">
            404
          </p>
          <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-8">
            Case study not found
          </p>
          <Link
            to="/case-studies"
            className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
          >
            ← Back to all case studies
          </Link>
        </div>
      </div>
    );
  }

  const related = caseStudies
    .filter((c) => c.sector === cs.sector && c.id !== cs.id)
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <img
          src={cs.heroImage}
          alt={cs.title}
          onError={(e) => (e.target.style.display = "none")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />

        <FullWidth className="relative z-10 pt-32">
          <Breadcrumbs
            variant="light"
            items={[
              { label: "Case Studies", path: "/case-studies" },
              { label: cs.title },
            ]}
          />
          <Link
            to="/case-studies"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[10px] font-black uppercase tracking-[0.25em] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={3} />
            All Case Studies
          </Link>
        </FullWidth>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <FullWidth className="pb-12 md:pb-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.25em]">
                  {cs.sector}
                </span>
                <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.25em]">
                  {cs.year}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4 max-w-5xl">
                {cs.title}
              </h1>
              <p className="text-base md:text-xl text-white/80 max-w-3xl leading-relaxed">
                {cs.subtitle}
              </p>
            </Reveal>
          </FullWidth>
        </div>
      </section>

      {/* META STRIP */}
      <section className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-900">
        <FullWidth className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Client", value: cs.client },
              { icon: MapPin, label: "Location", value: cs.location },
              { icon: Calendar, label: "Duration", value: cs.duration },
              { icon: Layers, label: "Sector", value: cs.sector },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FullWidth>
      </section>

      {/* MAIN CONTENT — keeps a comfortable reading width inside */}
      <section className="py-20 md:py-28">
        <FullWidth>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* LEFT: Main content */}
            <div className="lg:col-span-2 space-y-16">
              <Reveal>
                <div>
                  <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                    The Challenge
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                    What we were up against
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                    Our Approach
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                    How we solved it
                  </h3>
                  <ul className="space-y-4">
                    {cs.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-black">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-600 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
                  <div className="relative">
                    <h2 className="text-[10px] font-black text-blue-100 uppercase tracking-[0.4em] mb-4">
                      The Solution
                    </h2>
                    <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                      {cs.solution}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                    The Outcome
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                    What we delivered
                  </h3>
                  <ul className="space-y-4">
                    {cs.outcome.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        <span className="text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      strokeWidth={2.5}
                    />
                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">
                      Key Numbers
                    </p>
                  </div>
                  <div className="space-y-5">
                    {cs.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-baseline justify-between gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800/60 last:border-0 last:pb-0"
                      >
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <span className="text-xl font-black text-slate-900 dark:text-white tabular-nums">
                          {metric.value}
                          <span className="text-blue-600 dark:text-blue-400 text-sm ml-0.5">
                            {metric.suffix}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-5">
                    <Layers
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      strokeWidth={2.5}
                    />
                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">
                      Systems Deployed
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.systems.map((sys, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-wider"
                      >
                        <Sparkles
                          className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400"
                          strokeWidth={3}
                        />
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                <MagneticButton className="w-full">
                  <Link
                    to="/enquiry"
                    data-cursor="hover"
                    className="group w-full inline-flex items-center justify-between gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                  >
                    Start a Similar Project
                    <ArrowRight
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      strokeWidth={3}
                    />
                  </Link>
                </MagneticButton>
              </div>
            </aside>
          </div>
        </FullWidth>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900">
          <FullWidth>
            <Reveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                  <Sparkles
                    className="w-3.5 h-3.5 text-blue-600"
                    strokeWidth={2.5}
                  />
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                    Related Case Studies
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {related.map((rel, i) => (
                <Link
                  key={rel.id}
                  to={`/case-studies/${rel.id}`}
                  data-cursor="view"
                  className="group block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full"
                  >
                    <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3">
                      {rel.sector}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-5 flex-1">
                      {rel.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                      Read case study
                      <ArrowRight
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </FullWidth>
        </section>
      )}
    </div>
  );
};

export default CaseStudyDetail;