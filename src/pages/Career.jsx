import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  stats,
  benefits,
  departments,
  applicationSteps,
  buildApplyLink,
} from "../data/careers";

/* Full-width wrapper — matches rest of site */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

export default function Career() {
  const [activeDept, setActiveDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  usePageTitle("Careers");

  const allPositions = useMemo(() => {
    if (activeDept === "All") {
      return departments
        .filter((d) => d.id !== "All")
        .flatMap((d) => d.positions.map((p) => ({ ...p, dept: d.id })));
    }
    const dept = departments.find((d) => d.id === activeDept);
    return (dept?.positions || []).map((p) => ({ ...p, dept: dept.id }));
  }, [activeDept]);

  const filteredPositions = useMemo(() => {
    if (!searchQuery.trim()) return allPositions;
    const q = searchQuery.toLowerCase();
    return allPositions.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.requirements.some((r) => r.toLowerCase().includes(q))
    );
  }, [allPositions, searchQuery]);

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* SECTION 1: HERO */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 relative text-center">
        <FullWidth className="relative z-10">
          {/* readable hero column */}
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Careers at ISC
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Build Your Career at{" "}
                <span className="text-slate-400 dark:text-slate-600">ISC.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                Join a leading team of experts in Saudi Arabia's Electronic
                Systems Integration sector — where technical mastery meets
                mission-critical impact.
              </p>
            </Reveal>
          </div>

          {/* Stats strip full width */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </FullWidth>
      </section>

      {/* SECTION 2: WHY JOIN US */}
      <section className="py-16 md:py-20 relative">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4">
                Why Work With Us
              </h2>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                More Than a Job.
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
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
                  className="group relative p-6 rounded-[1.5rem] bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-[1.5rem]" />

                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-5">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white mb-2 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </FullWidth>
      </section>

      {/* SECTION 3: OPEN POSITIONS */}
      <section className="py-16 md:py-24 relative">
        <FullWidth>
          <Reveal>
            <div className="text-center md:text-left mb-10">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4">
                Open Positions
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Join Our Team.
              </h3>
            </div>
          </Reveal>

          {/* Filter bar */}
          <div className="sticky top-20 md:top-24 z-30 mb-10 md:mb-12">
            <div className="flex flex-col gap-3">
              <div className="overflow-x-auto no-scrollbar flex justify-center">
                <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-xl inline-flex">
                  {departments.map((dept) => {
                    const Icon = dept.icon;
                    const isActive = activeDept === dept.id;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setActiveDept(dept.id)}
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
                          {dept.label}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="activeDeptPill"
                            className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full md:w-80">
                  <Filter
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                    strokeWidth={2.5}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search positions..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Position count */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              {filteredPositions.length}{" "}
              {filteredPositions.length === 1 ? "Position" : "Positions"}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
          </div>

          {/* Positions grid — 3 cols on very wide screens */}
          <motion.div
            key={`${activeDept}-${searchQuery}`}
            className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredPositions.map((job, idx) => {
              const deptMeta = departments.find((d) => d.id === job.dept);
              const DeptIcon = deptMeta?.icon || Briefcase;

              return (
                <motion.div
                  key={`${job.dept}-${job.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-7 md:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                      <DeptIcon
                        className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                        strokeWidth={2.5}
                      />
                      <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em]">
                        {deptMeta?.label}
                      </span>
                    </div>
                    <span className="text-[9px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em]">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-3">
                    {job.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                    <span className="font-bold uppercase tracking-wider">
                      {job.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-3">
                      Requirements
                    </p>
                    <ul className="space-y-2.5">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs md:text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-md bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                            <CheckCircle2
                              className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/60">
                    <a
                      href={buildApplyLink(job.title)}
                      className="group/btn inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.15em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                    >
                      Apply for This Role
                      <ArrowRight
                        className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty state */}
          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-2">
                No positions match your search
              </p>
              <button
                onClick={() => {
                  setActiveDept("All");
                  setSearchQuery("");
                }}
                className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
              >
                View all positions
              </button>
            </motion.div>
          )}
        </FullWidth>
      </section>

      {/* SECTION 4: HOW TO APPLY */}
      <section className="py-16 md:py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-900">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4">
                Application Process
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                How to Join ISC.
              </h3>
            </div>
          </Reveal>

          <div className="relative mb-16">
            <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full origin-left bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {applicationSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="relative w-20 h-20 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-600 flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-all duration-500 z-10"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-600/50"
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                      <Icon
                        className="w-8 h-8 text-blue-600 dark:text-blue-400"
                        strokeWidth={2}
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">
                        {i + 1}
                      </div>
                    </motion.div>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <Reveal>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
                  <Sparkles
                    className="w-3.5 h-3.5 text-blue-100"
                    strokeWidth={2.5}
                  />
                  <span className="text-blue-50 text-[10px] font-black uppercase tracking-[0.3em]">
                    Ready to Apply?
                  </span>
                </div>
                <h4 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Send Your CV Today.
                </h4>
                <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Email your CV to{" "}
                  <a
                    href="mailto:jobs@iscksa.com?subject=ref:webvisit"
                    className="font-black underline decoration-blue-300/50 hover:decoration-blue-100 transition-all"
                  >
                    jobs@iscksa.com
                  </a>{" "}
                  with the position name in the subject line. Our recruitment
                  team responds to every applicant.
                </p>

                <MagneticButton>
                  <a
                    href="mailto:jobs@iscksa.com?subject=ref:webvisit"
                    className="group inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                  >
                    Email Your CV
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      strokeWidth={3}
                    />
                  </a>
                </MagneticButton>

                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-blue-200/80 font-black">
                  Subject: ref:webvisit
                </p>
              </div>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
}