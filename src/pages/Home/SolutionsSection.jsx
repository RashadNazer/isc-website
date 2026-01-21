import React, { useState, useRef, useEffect } from "react";
import { solutionData } from "../../data/homeData";
import { motion, AnimatePresence } from "framer-motion";
import LightRays from '../../component/LightRays'; // Updated import

/**
 * SolutionsSection Component
 * Features:
 * - Interactive tab switching for different technology solutions.
 * - Mobile-friendly horizontal scroll navigation with auto-centering.
 * - Shared layout animations for a premium desktop feel.
 * - Dynamic content display using Framer Motion.
 * - Dynamic LightRays background with mouse influence.
 */
const SolutionsSection = () => {
  // Local state to track which solution is currently being viewed
  const [activeSol, setActiveSol] = useState(solutionData[0]);
  
  // Reference to the tab container for handling auto-scroll on mobile
  const scrollRef = useRef(null);

  /**
   * Effect: Auto-scroll selected tab into view (Mobile specific)
   */
  useEffect(() => {
    const activeTab = document.getElementById(`tab-${activeSol.id}`);
    if (activeTab && scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = activeTab.offsetLeft - (container.offsetWidth / 2) + (activeTab.offsetWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeSol]);

  return (
    <section 
      id="solutions" 
      className="relative isolate z-0 py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      
      {/* --- LIGHT RAYS BACKGROUND --- */}
      <div className="absolute inset-0 z-[-1] pointer-events-auto opacity-40 dark:opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6" // Changed to match your blue-600 theme
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* Main container with pointer-events-none to let mouse 'pass through' to the LightRays */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pointer-events-none">
        
        {/* SECTION HEADER */}
        <div className="mb-10 md:mb-20 text-center lg:text-left pointer-events-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3"
          >
            Industry Ready
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white"
          >
            Our <span className="text-blue-600">Solutions.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          
          {/* LEFT: SELECTORS */}
          <div 
            ref={scrollRef}
            className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0 no-scrollbar snap-x touch-pan-x pointer-events-auto"
          >
            {solutionData.map((sol) => {
              const isActive = activeSol.id === sol.id;
              return (
                <button
                  key={sol.id}
                  id={`tab-${sol.id}`}
                  onClick={() => setActiveSol(sol)}
                  className={`group relative flex-shrink-0 lg:flex-shrink-1 w-[260px] lg:w-full text-left p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 border snap-center backdrop-blur-md ${
                    isActive 
                      ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/20" 
                      : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-100 dark:border-white/5"
                  }`}
                >
                  <div className="relative z-10">
                    <span className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1 md:mb-2 block ${
                      isActive ? "text-blue-100" : "text-blue-600"
                    }`}>
                      {sol.subtitle}
                    </span>
                    <h4 className={`text-base md:text-xl font-bold transition-colors ${
                      isActive ? "text-white" : "text-slate-900 dark:text-slate-100"
                    }`}>
                      {sol.title}
                    </h4>
                  </div>
                  
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

          {/* RIGHT: CONTENT PREVIEW */}
          <div className="lg:col-span-8 pointer-events-auto">
            <div className="relative h-[500px] md:h-full md:min-h-[600px] bg-slate-900/90 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 backdrop-blur-xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSol.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={activeSol.image} 
                    alt={activeSol.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                  
                  <div className="relative h-full p-6 md:p-16 flex flex-col justify-end">
                    <div className="max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h4 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6">
                          {activeSol.title}
                        </h4>
                        <p className="text-slate-300 text-sm md:text-xl leading-relaxed mb-6 md:mb-10 line-clamp-4 md:line-clamp-none">
                          {activeSol.description}
                        </p>
                      </motion.div>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {activeSol.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + (i * 0.05) }}
                            className="px-3 py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] md:text-sm font-medium"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;