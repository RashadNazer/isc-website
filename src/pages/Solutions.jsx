import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { solutionData } from "../data/homeData";
import { Reveal } from "../components/UIComponents";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const FeatureCard = ({ label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: 0.05 * index }}
    className="group/feat flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300"
  >
    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover/feat:bg-blue-600 group-hover/feat:border-blue-600 transition-all duration-300">
      <CheckCircle2
        className="w-3 h-3 text-blue-600 group-hover/feat:text-white transition-colors duration-300"
        strokeWidth={3}
      />
    </div>
    <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.15em] leading-snug">
      {label}
    </span>
  </motion.div>
);

const SolutionChapter = ({ sol, index, isActive, onActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const isReversed = index % 2 !== 0;

  useEffect(() => {
    if (isInView) onActive(sol.id);
  }, [isInView, sol.id, onActive]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  const chapterNumber = `0${index + 1}`;

  return (
    <section
      ref={ref}
      id={sol.id}
      className={`relative py-24 md:py-32 scroll-mt-24 overflow-hidden border-b border-slate-100 dark:border-slate-900 ${
        isReversed
          ? "bg-slate-50/60 dark:bg-slate-900/20"
          : "bg-white dark:bg-slate-950"
      }`}
    >
      <FullWidth>
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT (40%) */}
          <div className="lg:flex-[0.42] w-full">
            <Reveal x={isReversed ? 30 : -30}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-600 font-black text-6xl md:text-7xl leading-none tracking-tighter"
                  >
                    {chapterNumber}
                  </motion.span>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-600/40 to-transparent" />
                </div>

                <div className="space-y-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-[11px] uppercase tracking-[0.35em]">
                    {sol.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
                    {sol.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                  {sol.description}
                </p>

                <div className="pt-6">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4">
                    Key Capabilities
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                    {sol.features.map((feature, i) => (
                      <FeatureCard key={i} label={feature} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* IMAGE (60%) */}
          <div className="lg:flex-[0.58] w-full">
            <Reveal delay={0.2} x={isReversed ? -30 : 30}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 rounded-[3rem] rotate-1 transition-transform duration-700 group-hover:rotate-0" />

                <div className="relative h-[420px] md:h-[560px] lg:h-[640px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                  <motion.img
                    src={sol.image}
                    alt={sol.title}
                    style={{ y: imageY, scale: imageScale }}
                    className="w-full h-full object-cover transform-gpu"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <span className="text-white font-black text-lg">
                        {chapterNumber}
                      </span>
                    </div>
                    <div className="text-white/90">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">
                        Solution
                      </p>
                      <p className="text-sm font-black uppercase tracking-tight">
                        {sol.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </FullWidth>
    </section>
  );
};

const SideRail = ({ solutions, activeId, onNavigate }) => (
  <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 items-end group/rail">
    {solutions.map((sol, i) => {
      const isActive = activeId === sol.id;
      return (
        <button
          key={sol.id}
          onClick={() => onNavigate(sol.id)}
          className="flex items-center gap-3 group/item"
          aria-label={`Scroll to ${sol.title}`}
        >
          <span
            className={`max-w-[220px] text-right text-[11px] font-black uppercase tracking-[0.15em] leading-tight px-3 py-2 rounded-xl backdrop-blur-md border transition-all duration-300 whitespace-normal opacity-0 group-hover/rail:opacity-100 translate-x-2 group-hover/rail:translate-x-0 ${
              isActive
                ? "bg-blue-600/10 dark:bg-blue-500/10 border-blue-600/30 text-blue-700 dark:text-blue-300 opacity-100 translate-x-0"
                : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            }`}
          >
            <span className="block text-[9px] text-slate-400 dark:text-slate-500 mb-0.5 tracking-[0.3em]">
              0{i + 1}
            </span>
            {sol.shorttitle}
          </span>

          <motion.div
            animate={{
              scale: isActive ? 1.5 : 1,
              backgroundColor: isActive ? "#2563eb" : "transparent",
              borderColor: isActive ? "#2563eb" : "#94a3b8",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
          />
        </button>
      );
    })}
  </aside>
);

const Solutions = () => {
  usePageTitle("Solutions");
  const { hash } = useLocation();
  const [activeId, setActiveId] = useState(solutionData[0]?.id || "");

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* HERO */}
      <section className="relative pt-40 md:pt-48 pb-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 70%)",
          }}
        />

        <FullWidth className="relative">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                Enterprise Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.95]">
              Integrated{" "}
              <span className="text-slate-400 dark:text-slate-600">
                Systems.
              </span>
            </h1>

            <p className="max-w-3xl text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              We provide comprehensive Low Current System design and
              integration, meeting stringent international standards and local
              KSA requirements.
            </p>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-8 md:gap-16">
              {[
                { value: "04", label: "Core Solutions" },
                { value: "40+", label: "Years Experience" },
                { value: "100%", label: "KSA Compliance" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </FullWidth>
      </section>

      <SideRail
        solutions={solutionData}
        activeId={activeId}
        onNavigate={handleNavigate}
      />

      <div className="flex flex-col">
        {solutionData.map((sol, index) => (
          <SolutionChapter
            key={sol.id}
            sol={sol}
            index={index}
            isActive={activeId === sol.id}
            onActive={setActiveId}
          />
        ))}
      </div>

      {/* FINAL CTA */}
      <section className="py-32 bg-blue-950 text-center relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0, -60, 0],
            y: [0, -40, 40, 0, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter leading-none">
          ISC
        </div>

        <FullWidth className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white italic mb-10 leading-[1.05] tracking-tight">
                "Quality Is Our Objective."
              </h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <Link
                  to="/enquiry"
                  data-cursor="hover"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  data-cursor="hover"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/20 transition-all active:scale-95"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </FullWidth>
      </section>
    </main>
  );
};

export default Solutions;