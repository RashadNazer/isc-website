import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../../components/UIComponents";
import Card3D from "../../components/Card3D";
import { ArrowRight, ShieldCheck, Headphones } from "lucide-react";

const SupportSection = () => {
  return (
    <section
      id="support"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal x={-20}>
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Lifecycle Management
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight max-w-2xl">
                Reliability <br />
                <span className="text-slate-400">Beyond Delivery.</span>
              </h3>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal delay={0.2} x={20}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
                Our commitment to your facility doesn't end at commissioning.
                Through structured Maintenance Contracts (MC), we ensure your
                systems operate at peak performance with 24/7 technical
                oversight and rapid response.
              </p>
              <Link
                to="/support"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                View Support Details
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Feature Cards — 2 cols across full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Reveal y={20} delay={0.3}>
            <Card3D intensity={6} className="h-full">
              <div className="p-8 lg:p-10 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 flex items-start gap-6 group hover:border-blue-500/30 transition-colors h-full">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm shrink-0"
                >
                  <ShieldCheck className="w-7 h-7" />
                </motion.div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">
                    Maintenance Contracts
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-md">
                    Priority resolution and scheduled preventive maintenance for
                    uninterrupted facility operations.
                  </p>
                </div>
              </div>
            </Card3D>
          </Reveal>

          <Reveal y={20} delay={0.4}>
            <Card3D intensity={6} className="h-full">
              <div className="p-8 lg:p-10 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 flex items-start gap-6 group hover:border-blue-500/30 transition-colors h-full">
                <motion.div
                  whileHover={{ rotate: -12, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm shrink-0"
                >
                  <Headphones className="w-7 h-7" />
                </motion.div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">
                    Technical Support
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-md">
                    Direct access to our engineering helpdesk and official
                    service request workflows.
                  </p>
                </div>
              </div>
            </Card3D>
          </Reveal>
        </div>

        {/* Footer Branding */}
        <Reveal delay={0.6} y={10}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
            <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              24/7 Service Excellence
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SupportSection;