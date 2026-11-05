import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../components/UIComponents";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ShieldCheck,
  Clock,
  FileText,
  Headphones,
  Mail,
  Phone,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const PillarCard = ({ icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    className="group relative"
  >
    <div className="absolute -inset-4 bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl rounded-full transition-all duration-700 pointer-events-none" />

    <div className="relative h-full p-8 rounded-[2rem] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <span
        className="absolute top-6 right-6 text-7xl md:text-8xl font-black leading-none select-none pointer-events-none text-slate-100 dark:text-slate-800/60 group-hover:text-blue-600/10 dark:group-hover:text-blue-500/20 transition-colors duration-500"
        aria-hidden="true"
      >
        0{index + 1}
      </span>

      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          {icon}
        </div>
      </div>

      <h3 className="relative text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-3 max-w-[80%]">
        {title}
      </h3>
      <p className="relative text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

const ContactRow = ({ icon, label, value, href }) => {
  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover/row:bg-blue-600 group-hover/row:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">
          {label}
        </p>
        <p className="font-bold text-slate-900 dark:text-white text-sm md:text-base truncate group-hover/row:text-blue-600 dark:group-hover/row:text-blue-400 transition-colors">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group/row flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-500/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
      >
        {content}
      </a>
    );
  }
  return (
    <div className="group/row flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-500/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
      {content}
    </div>
  );
};

const Support = () => {
  const heroRef = useRef(null);
  usePageTitle("Support");
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgWordY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgWordOpacity = useTransform(scrollYProgress, [0, 1], [0.03, 0]);

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative pt-48 pb-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden border-b border-blue-900/50"
      >
        <motion.div
          style={{ y: bgWordY, opacity: bgWordOpacity }}
          className="absolute top-1/2 right-0 -translate-y-1/2 text-[20vw] font-black text-white select-none pointer-events-none uppercase tracking-tighter leading-none"
        >
          Support
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at top right, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top right, black 20%, transparent 70%)",
          }}
        />

        <FullWidth className="relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.3em]">
                Post-Project Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
              Support &{" "}
              <span className="text-blue-400">Maintenance.</span>
            </h1>

            <p className="max-w-3xl text-blue-100/90 text-lg md:text-xl leading-relaxed font-light">
              We don't just deliver systems; we ensure they never fail. Our
              structured Maintenance Contracts (MC) provide the peace of mind
              required for critical industrial and commercial operations across
              the Kingdom.
            </p>

            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "24/7", label: "Hotline" },
                { value: "< 4h", label: "Critical Response" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "40+", label: "Field Engineers" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                >
                  <p className="text-3xl md:text-4xl font-black text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300/80 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </FullWidth>
      </section>

      {/* CORE SUPPORT PILLARS */}
      <section className="py-24 border-b border-slate-100 dark:border-slate-900 bg-slate-50/40 dark:bg-slate-950">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Three Pillars of Reliability
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Built for Critical Operations.
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-6 h-6" strokeWidth={2.5} />,
                title: "Rapid Response",
                desc: "Prioritized resolution times for contract holders, ensuring minimal downtime for critical safety systems.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />,
                title: "Preventive Care",
                desc: "Scheduled inspections and proactive maintenance to identify potential failures before they occur.",
              },
              {
                icon: <Headphones className="w-6 h-6" strokeWidth={2.5} />,
                title: "Expert Support",
                desc: "Direct access to our senior engineering team for troubleshooting and complex system re-configurations.",
              },
            ].map((pillar, i) => (
              <PillarCard key={i} {...pillar} index={i} />
            ))}
          </div>
        </FullWidth>
      </section>

      {/* DUAL-ACTION PORTAL & FORM */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Choose Your Path
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Existing Contract or New Request?
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT: MC PORTAL */}
            <Reveal x={-30}>
              <div className="relative h-full">
                <span className="absolute -top-10 -left-4 text-[10rem] font-black text-blue-600/[0.05] dark:text-blue-500/[0.05] select-none pointer-events-none leading-none">
                  01
                </span>

                <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-800 h-full flex flex-col overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500" />

                  <div className="flex justify-between items-start mb-8 pt-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" strokeWidth={3} />
                        <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                          For Contract Holders
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        Maintenance Portal
                      </h3>
                    </div>
                    <span className="bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter whitespace-nowrap">
                      Live
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8 flex-grow">
                    Track tickets, view service history, and monitor SLA
                    performance in real-time through our unified portal.
                  </p>

                  <div className="space-y-3 mb-8">
                    <ContactRow
                      icon={<Mail className="w-5 h-5" strokeWidth={2.5} />}
                      label="Primary Support Email"
                      value="mcsupport@iscksa.com"
                      href="mailto:mcsupport@iscksa.com"
                    />
                    <ContactRow
                      icon={<Phone className="w-5 h-5" strokeWidth={2.5} />}
                      label="Dedicated Support Line"
                      value="+966 13 898 4602"
                      href="tel:+966138984602"
                    />
                  </div>

                  <a
                    href="https://e-service.iscksa.com/portal/#/mcportal/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="group w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-[0.98]"
                  >
                    <Zap className="w-5 h-5" strokeWidth={2.5} />
                    ACCESS MC PORTAL
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: SR FORM */}
            <Reveal x={30} delay={0.2}>
              <div className="relative h-full">
                <span className="absolute -top-10 -right-4 text-[10rem] font-black text-slate-900/[0.04] dark:text-white/[0.04] select-none pointer-events-none leading-none">
                  02
                </span>

                <div className="relative bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white h-full flex flex-col overflow-hidden border border-slate-800">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500" />
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

                  <div className="relative mb-8 pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">
                        Non-Contract Service
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                      Service Request
                    </h3>
                  </div>

                  <p className="text-blue-100/80 text-base md:text-lg leading-relaxed mb-8 flex-grow relative">
                    Don't have a Maintenance Contract? We still offer on-call
                    technical assistance. Download our Service Request form and
                    submit it to our team.
                  </p>

                  <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 mb-8">
                    <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-emerald-400 mb-5">
                      Submission Process
                    </h4>
                    <ol className="space-y-4">
                      {[
                        { n: "1", text: "Download the SR Form (PDF)" },
                        { n: "2", text: "Fill in site details & system fault" },
                        { n: "3", text: "Email to service@iscksa.com" },
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black flex items-center justify-center">
                            {step.n}
                          </span>
                          <span className="text-sm text-blue-100/90 leading-relaxed">
                            {step.text.includes("service@iscksa.com") ? (
                              <>
                                Email to{" "}
                                <span className="text-white font-bold">
                                  service@iscksa.com
                                </span>
                              </>
                            ) : (
                              step.text
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <a
                    href="https://www.iscksa.com/documents/SRForm.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="group relative w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
                  >
                    <FileText className="w-5 h-5" strokeWidth={2.5} />
                    DOWNLOAD SR FORM
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-28 text-center relative overflow-hidden">
        <FullWidth>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-6">
                Quality Is Our Objective
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.05] mb-8">
                Commitment to{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Reliability.
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Every system we deploy is backed by a team that never sleeps, a
                process that never cuts corners, and a promise we never break.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:mcsupport@iscksa.com"
                  className="group inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.15em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                  Email Support
                </a>
                <a
                  href="tel:+966138984602"
                  className="inline-flex items-center justify-center gap-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.15em] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Call Us
                </a>
              </div>
            </Reveal>
          </div>
        </FullWidth>
      </section>
    </main>
  );
};

export default Support;