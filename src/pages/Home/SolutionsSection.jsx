import React, { useState } from "react";
import { solutionData } from "../../data/homeData";
import { motion, AnimatePresence } from "framer-motion";

const SolutionsSection = () => {
  const [activeSol, setActiveSol] = useState(solutionData[0]);

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4"
          >
            Industry Ready
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
          >
            Our <span className="text-blue-600">Solutions.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: INTERACTIVE SELECTORS */}
          <div className="lg:col-span-4 space-y-4">
            {solutionData.map((sol) => {
              const isActive = activeSol.id === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSol(sol)}
                  className={`group relative w-full text-left p-6 rounded-3xl transition-all duration-500 border ${
                    isActive 
                      ? "bg-blue-600 border-blue-600 shadow-xl shadow-blue-500/20" 
                      : "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                >
                  <div className="relative z-10">
                    <span className={`text-[10px] uppercase tracking-widest font-bold mb-2 block ${
                      isActive ? "text-blue-100" : "text-blue-600"
                    }`}>
                      {sol.subtitle}
                    </span>
                    <h4 className={`text-xl font-bold transition-colors ${
                      isActive ? "text-white" : "text-slate-900 dark:text-slate-100"
                    }`}>
                      {sol.title}
                    </h4>
                  </div>
                  
                  {/* Active Indicator Arrow */}
                  {isActive && (
                    <motion.div 
                      layoutId="arrow"
                      className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block"
                    >
                      <div className="w-6 h-6 bg-blue-600 rotate-45" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: LIVE PREVIEW TERMINAL */}
          <div className="lg:col-span-8">
            <div className="relative h-full min-h-[600px] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSol.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Background Image with Overlay */}
                  <img 
                    src={activeSol.image} 
                    alt={activeSol.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                  
                  {/* Decorative "Scanning" Line */}
                  <motion.div 
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 pointer-events-none"
                  />

                  {/* Content Overlay */}
                  <div className="relative h-full p-8 md:p-16 flex flex-col justify-end">
                    <div className="max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className="text-3xl md:text-5xl font-black text-white mb-6">
                          {activeSol.title}
                        </h4>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
                          {activeSol.description}
                        </p>
                      </motion.div>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-3">
                        {activeSol.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Corner Tech Decorative Elements */}
              <div className="absolute top-8 right-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;