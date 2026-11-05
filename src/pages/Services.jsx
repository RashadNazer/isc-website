import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Reveal } from "../components/UIComponents";
import { ArrowRight, Check } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import project_management from "../assets/project_management.jpg";
import procurement from "../assets/procurement.jpg";
import installation from "../assets/installation.jpg";
import documentation from "../assets/documentation.jpg";

/* Full-width wrapper */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const serviceSections = [
  {
    id: "pm-design",
    number: "01",
    title: "Project Management, Design and Engineering",
    subtitle: "Certified Engineers. Proven Standards.",
    image: project_management,
    content:
      "It is essential for the successful integration of any Low Current Systems (LCS) to have a professional project management. Our certified engineers follow proven industry standards to interface with all necessary trades in your project to guarantee that ISC is a productive team member. We work closely with your project team to deliver your project on time, on budget and to ensure clear communication with all point of contact throughout the life of the project. All aspects are considered: technical, architectural, environmental, culture, budgetary, workflow and expansion.",
    features: [
      "Certified Engineers",
      "Industry Standards",
      "Budget Optimization",
      "Optimal Design",
    ],
  },
  {
    id: "procurement",
    number: "02",
    title: "Vendor Selection & Material Procurement",
    subtitle: "Authorized Partner. Objective Matching.",
    image: procurement,
    content:
      "As a partner and authorized dealer for many top manufacturers and leveraging long-time relationship with technology leaders, ISC is here to help you sort out the options and select the right equipment to accomplish your unique requirements. We select equipment for our projects based on matching customer objectives and budget to the latest technology available. Whether you are looking for a basic system with simplicity, or seeking more comprehensive technology for advanced features, we can help you achieve a powerful, lasting impact.",
    features: [
      "Authorized Dealer",
      "Latest Technology",
      "Strategic Sourcing",
      "Objective Matching",
    ],
  },
  {
    id: "installation",
    number: "03",
    title: "Programming & Installation",
    subtitle: "Factory-Trained. In-House Lab.",
    image: installation,
    content:
      "ISC provides low current system programming services on all scales; whether it is a new job or retrofit. Our programmers and installation teams are factory-trained by our technology partners. We maintain a well-equipped lab for continuous training and to perform critical post-installation activities including assembly, configuration, prototyping, and rigorous cable testing. ISC has been trusted by primary general contractors and consultants in KSA for years.",
    features: [
      "IP-Based Integration",
      "Factory Trained",
      "In-house Lab",
      "Quality Control",
    ],
  },
  {
    id: "training",
    number: "04",
    title: "Training & Document Submittal",
    subtitle: "Two-Phase Handover. Complete Documentation.",
    image: documentation,
    content:
      "At ISC, we do not just deliver a finished project. We ensure the installed systems can be operated by the end-user through two-phase training: Initial Handover and Final Handover. Our engineering back-office ensures complete documentation is submitted, including shop-drawings, as-built drawings, diagrams, system specs, and manuals along with project warranty and certificates.",
    features: [
      "End-User Certification",
      "Complete Submittals",
      "Operation Manuals",
      "Warranty Support",
    ],
  },
];

const FeaturePill = ({ label, index }) => (
  <motion.li
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: 0.05 * index }}
    className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
  >
    <div className="relative w-6 h-6 flex-shrink-0 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
      <Check
        className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors duration-300"
        strokeWidth={3}
      />
    </div>
    <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.15em] leading-tight">
      {label}
    </span>
  </motion.li>
);

const ServiceChapter = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });
  const isReversed = index % 2 !== 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section
      ref={ref}
      id={service.id}
      className={`relative py-24 md:py-32 overflow-hidden border-b border-slate-100 dark:border-slate-900 ${
        isReversed
          ? "bg-slate-50/60 dark:bg-slate-900/20"
          : "bg-white dark:bg-slate-950"
      }`}
    >
      <FullWidth>
        <div
          className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-24 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT BLOCK */}
          <div className="flex-1 w-full">
            <Reveal x={isReversed ? 50 : -50}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <motion.span
                    animate={{ opacity: isInView ? 1 : 0.35 }}
                    transition={{ duration: 0.6 }}
                    className="text-blue-600 font-black text-6xl md:text-7xl leading-none tracking-tighter"
                  >
                    {service.number}
                  </motion.span>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-600/40 to-transparent" />
                </div>

                <p className="text-blue-600 dark:text-blue-400 font-bold text-[11px] uppercase tracking-[0.35em]">
                  {service.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed pt-2 max-w-2xl">
                  {service.content}
                </p>

                <div className="pt-8">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-5">
                    Key Capabilities
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                    {service.features.map((feature, i) => (
                      <FeaturePill key={i} label={feature} index={i} />
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* IMAGE BLOCK */}
          <div className="flex-1 w-full">
            <Reveal delay={0.2} x={isReversed ? -50 : 50}>
              <div className="relative group">
                <div className="absolute -inset-8 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 rounded-[3rem] rotate-2 transition-transform duration-700 group-hover:rotate-1" />

                <div className="relative h-[420px] md:h-[560px] lg:h-[640px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    style={{ y: imageY, scale: imageScale }}
                    className="w-full h-full object-cover transform-gpu"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <span className="text-white font-black text-lg">
                        {service.number}
                      </span>
                    </div>
                    <div className="text-white/90">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">
                        Chapter
                      </p>
                      <p className="text-sm font-black uppercase tracking-tight">
                        {service.subtitle.split(".")[0]}
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

const ServicesPage = () => {
  const chaptersRef = useRef(null);
  usePageTitle("Services");

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* HERO */}
      <section className="pt-40 md:pt-48 pb-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 relative overflow-hidden">
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
                Capabilities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[0.95] tracking-tight">
              Our <span className="text-slate-400 dark:text-slate-600">Services</span>
            </h1>

            <p className="max-w-3xl text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              At ISC, we rely on our dedicated project managers and a team of
              certified engineers to provide a full scope of capabilities to
              deliver the solutions and services you need now and in the
              future.
            </p>
          </Reveal>
        </FullWidth>
      </section>

      {/* SERVICE CHAPTERS */}
      <div ref={chaptersRef}>
        {serviceSections.map((service, index) => (
          <ServiceChapter key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* FINAL STATEMENT */}
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

export default ServicesPage;