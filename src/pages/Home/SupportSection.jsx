import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../../components/UIComponents";
import { ArrowRight, ShieldCheck, Headphones } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="support" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER - Matching Services/Solutions Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal x={-20}>
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Lifecycle Management
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Reliability <br /> 
                <span className="text-slate-400">Beyond Delivery.</span>
              </h3>
            </Reveal>
          </div>
          
          <div className="lg:col-span-6 lg:pt-8">
            <Reveal delay={0.2} x={20}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Our commitment to your facility doesn't end at commissioning. Through 
                structured Maintenance Contracts (MC), we ensure your systems operate 
                at peak performance with 24/7 technical oversight and rapid response.
              </p>
              <Link 
                to="/support" 
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                View Support Details
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* COMPACT FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal y={20} delay={0.3}>
            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 flex items-start gap-6 group hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Maintenance Contracts</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Priority resolution and scheduled preventive maintenance for uninterrupted facility operations.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.4}>
            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 flex items-start gap-6 group hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Technical Support</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Direct access to our engineering helpdesk and official service request workflows.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FOOTER BRANDING */}
        <Reveal delay={0.6} y={10}>
          <div className="mt-16 flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
             <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
               24/7 Service Excellence
             </p>
             <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SupportSection;