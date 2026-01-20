import React from "react";
import { motion } from "framer-motion";

/**
 * SupportSection Component
 * * Purpose: Displays maintenance contract (MC) information and service request options.
 * Design: High-contrast dark/blue gradient background with a glassmorphism card system.
 * Layout: 1-column on mobile/tablet, 2-column grid on large screens (LG).
 */
const SupportSection = () => {
  return (
    <section
      id="support"
      className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden transition-colors duration-700"
    >
      {/* DECORATIVE BACKGROUND ELEMENTS 
          Absolute positioned blur circle to add depth and "glow" effect in the corner.
      */}
      <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Grid Container: Switches from vertical stack to side-by-side at 1024px (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Brand messaging and key feature highlights */}
          <div className="space-y-8 md:space-y-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
            >
              <h2 className="text-blue-300 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
                Post-Project Excellence
              </h2>
              <h3 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6">
                Support & Maintenance <br className="hidden md:block" /> Contracts (MC)
              </h3>
              <p className="text-blue-100 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl text-left">
                Our commitment extends well beyond project delivery. Maintenance
                Contracts ensure uninterrupted operations through structured
                workflows and fast response times.
              </p>
            </motion.div>

            {/* Sub-grid for internal Feature Cards: Stacks on mobile, 2-columns on tablets (sm) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: "✓",
                  title: "Fast Resolution",
                  desc: "Resolving hundreds of calls annually with internal evaluations.",
                },
                {
                  icon: "★",
                  title: "Client Feedback",
                  desc: "Every service activity is reviewed to ensure consistent quality.",
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  // Staggered entry animation: delay increases per card index
                  transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
                  className="p-6 md:p-8 rounded-[2rem] bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-800 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 dark:text-blue-400 mb-6 text-xl font-bold">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-3">{feature.title}</h4>
                  <p className="text-blue-200 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive components (Portal Login and SR Form) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20 }}
            className="space-y-6"
          >
            {/* Primary Action Card: Maintenance Portal 
                Features responsive padding and font-scaling for mobile usability.
            */}
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-transparent dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h4 className="text-2xl md:text-3xl font-black">Maintenance Portal</h4>
                {/* Status Badge */}
                <span className="text-[10px] px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 uppercase tracking-widest font-black">
                  System Update
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed text-left">
                Our online portal is currently undergoing updates. For assistance, 
                please use the contact information below.
              </p>

              {/* Contact Info Group: Labels stack on extra small mobile screens */}
              <div className="space-y-4 mb-8">
                {/* Email Entry */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-widest">Email:</span>
                  <a
                    href="mailto:mcsupport@iscksa.com"
                    className="font-bold text-blue-900 dark:text-blue-300 hover:text-blue-600 transition-colors break-all text-sm md:text-lg"
                  >
                    mcsupport@iscksa.com
                  </a>
                </div>

                {/* Fax Entry */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-widest">Fax:</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300 text-sm md:text-lg font-bold">
                    966-13-898-4602
                  </span>
                </div>
              </div>

              {/* Primary Call-to-Action Button */}
              <a
                href="https://e-service.iscksa.com/portal/#/mcportal/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-5 rounded-2xl bg-blue-900 dark:bg-blue-600 text-white font-bold text-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition-all shadow-lg active:scale-[0.97]"
              >
                Go to MC Portal
              </a>
            </div>

            {/* Secondary Card: For users without contracts (Service Request Form)
                Utilizes hover animations and backdrop-blur for a professional look.
            */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 dark:bg-slate-900/30 border border-white/10 dark:border-slate-800 backdrop-blur-md"
            >
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                No Maintenance Contract?
              </h4>
              <p className="text-blue-100 dark:text-slate-400 text-base mb-8 leading-relaxed">
                If you do not have an active contract, please download the service request form and email it to{" "}
                <span className="font-bold text-white dark:text-blue-400">
                  service@iscksa.com
                </span>
              </p>

              {/* Secondary Download Button */}
              <a
                href="https://www.iscksa.com/documents/SRForm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-200 text-blue-900 font-bold text-base hover:bg-blue-50 transition-all active:scale-[0.97]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download SR Form
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;