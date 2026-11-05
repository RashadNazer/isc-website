import React from "react";
import { motion } from "framer-motion";
import { Download, Award, CheckCircle2, ArrowRight, Sparkles, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { usePageTitle } from "../hooks/usePageTitle";
import { certifications, complianceTimeline, complianceStatements } from "../data/compliance";

/* Full-width wrapper — matches rest of site */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const accentMap = {
  blue: { gradient: "from-blue-600 to-indigo-500", ring: "ring-blue-500/20", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-600/10", border: "border-blue-600/20" },
  emerald: { gradient: "from-emerald-600 to-teal-500", ring: "ring-emerald-500/20", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-600/10", border: "border-emerald-600/20" },
  amber: { gradient: "from-amber-500 to-orange-500", ring: "ring-amber-500/20", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-600/10", border: "border-amber-600/20" },
  violet: { gradient: "from-violet-500 to-purple-500", ring: "ring-violet-500/20", text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-600/10", border: "border-violet-600/20" },
};

const Compliance = () => {
  usePageTitle("Compliance");

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora colorStops={["#2563eb", "#ffffff", "#1e3a8a"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* HERO */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 relative text-center">
        <FullWidth>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Compliance & Certifications
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Trusted.{" "}
                <span className="text-slate-400 dark:text-slate-600">Certified. Compliant.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                ISC operates to the highest standards of quality, safety, and
                security — independently verified by Saudi and international
                certification bodies.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* CERTIFICATIONS GRID */}
      <section className="py-16 md:py-20">
        <FullWidth>
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <Award className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  Our Certifications
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {certifications.map((cert, i) => {
              const a = accentMap[cert.accent] || accentMap.blue;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col"
                >
                  <div className={`h-1 bg-gradient-to-r ${a.gradient}`} />

                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    {cert.certificateImage ? (
                      <img
                        src={cert.certificateImage}
                        alt={cert.name}
                        onError={(e) => (e.target.style.display = "none")}
                        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className={`w-20 h-20 rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center`}>
                        <Award className={`w-10 h-10 ${a.text}`} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {cert.fullName}
                        </p>
                      </div>
                      {cert.since !== "—" && (
                        <span className={`text-[9px] font-black ${a.text} uppercase tracking-wider px-2 py-1 rounded-md ${a.bg} border ${a.border} whitespace-nowrap`}>
                          Since {cert.since}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.scope.slice(0, 3).map((s, j) => (
                        <span key={j} className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>

                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] hover:gap-3 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Download PDF
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FullWidth>
      </section>

      {/* TIMELINE — narrower for readability */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900">
        <FullWidth>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                  Our Journey
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  Milestones Over Four Decades.
                </h3>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-600/40 to-transparent" />

              <div className="space-y-8">
                {complianceTimeline.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative grid grid-cols-[2rem_1fr] md:grid-cols-2 md:gap-12`}
                    >
                      {isLeft ? (
                        <>
                          <div className="hidden md:block text-right pr-8">
                            <TimelineContent item={item} />
                          </div>
                          <div className="hidden md:block" />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:block" />
                          <div className="hidden md:block pl-8">
                            <TimelineContent item={item} />
                          </div>
                        </>
                      )}

                      <div className="md:hidden col-span-2 pl-12">
                        <TimelineContent item={item} />
                      </div>

                      <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-10">
                        <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950 shadow-lg shadow-blue-600/40" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </FullWidth>
      </section>

      {/* STATEMENTS */}
      <section className="py-16 md:py-24">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
                Our Commitments
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                More Than Compliance.
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceStatements.map((statement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-[1.5rem] bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white mb-2 leading-tight">
                  {statement.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {statement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </FullWidth>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <FullWidth>
          <Reveal>
            <div className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-100" strokeWidth={2.5} />
                  <span className="text-blue-50 text-[10px] font-black uppercase tracking-[0.3em]">
                    Vendor Documentation
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight max-w-2xl mx-auto">
                  Need our compliance documents?
                </h3>
                <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Our procurement team provides official documents for vendor
                  registration and pre-qualification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Link
                      to="/vendors"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                    >
                      Vendor Registration
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </Link>
                  </MagneticButton>
                  <a
                    href="mailto:procurement@iscksa.com"
                    data-cursor="hover"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all active:scale-95"
                  >
                    <FileText className="w-4 h-4" strokeWidth={2.5} />
                    Email Procurement
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
};

/* Timeline content block */
const TimelineContent = ({ item }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors">
    <p className="text-3xl font-black text-blue-600 dark:text-blue-400 tracking-tighter leading-none mb-2">
      {item.year}
    </p>
    <h4 className="text-base font-black text-slate-900 dark:text-white mb-2">
      {item.title}
    </h4>
    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      {item.description}
    </p>
  </div>
);

export default Compliance;