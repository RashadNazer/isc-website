import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../../components/UIComponents";


const RequestQuoteCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-blue-600 dark:bg-blue-600/10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-blue-500/20 shadow-2xl">
            
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 dark:bg-blue-400/5 blur-[100px] pointer-events-none"></div>

            {/* Text Content: Downsized & Refined */}
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-white dark:text-white mb-4 tracking-tight">
                Request a Project Quote
              </h3>
              <p className="text-blue-50 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                Tell us about your requirement and our sales team will review your enquiry 
                and get back to you with the right solution for your infrastructure.
              </p>
            </div>

            {/* Action: Magnetic Button Style */}
            <div className="relative z-10 shrink-0">
              <MagneticButton>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 dark:text-white font-black text-sm md:text-base transition-all hover:shadow-xl active:scale-95 group"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RequestQuoteCTA;