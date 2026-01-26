import React, { useState, useRef, useEffect } from "react";
import { solutionData } from "../../data/homeData";
import { motion, AnimatePresence } from "framer-motion";
import LightRays from '../../component/LightRays';

const SolutionsSection = () => {
  const [activeSol, setActiveSol] = useState(solutionData[0]);
  const [isImgLoaded, setIsImgLoaded] = useState(false); // Track image loading
  const scrollRef = useRef(null);

  useEffect(() => {
    const activeTab = document.getElementById(`tab-${activeSol.id}`);
    if (activeTab && scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = activeTab.offsetLeft - (container.offsetWidth / 2) + (activeTab.offsetWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    // Reset image load state when switching tabs
    setIsImgLoaded(false);
  }, [activeSol]);

  return (
    <section 
      id="solutions" 
      className="relative isolate z-0 py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* --- OPTIMIZED LIGHT RAYS --- */}
      <div className="absolute inset-0 z-[-1] pointer-events-auto opacity-40 dark:opacity-60 will-change-transform">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={0.8} // Slightly slower for more "weight"
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0}
          distortion={0}
          className="custom-rays transform-gpu" // GPU acceleration
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pointer-events-none">
        {/* SECTION HEADER */}
        <div className="mb-10 md:mb-20 text-center lg:text-left pointer-events-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3"
          >
            Industry Ready
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white"
          >
            Our <span className="text-blue-600">Solutions.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          
          {/* LEFT: SELECTORS - Optimized for smoothness */}
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
                  className={`group relative flex-shrink-0 lg:flex-shrink-1 w-[260px] lg:w-full text-left p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 border snap-center backdrop-blur-md will-change-transform active:scale-[0.98] ${
                    isActive 
                      ? "bg-blue-600 border-blue-600 shadow-xl shadow-blue-500/20 translate-x-1" 
                      : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-100 dark:border-white/5 hover:border-blue-400/30"
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
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-6 h-6 bg-blue-600 rotate-45" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: CONTENT PREVIEW - Added Loading States & Stagger */}
          <div className="lg:col-span-8 pointer-events-auto">
            <div className="relative h-[500px] md:h-full md:min-h-[600px] bg-slate-950 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 backdrop-blur-xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSol.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0"
                >
                  {/* Transitioning Smooth Image */}
                  <motion.img 
                    src={activeSol.image} 
                    alt={activeSol.title}
                    onLoad={() => setIsImgLoaded(true)}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: isImgLoaded ? (window.innerWidth < 768 ? 0.2 : 0.35) : 0, 
                      scale: 1 
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  
                  <div className="relative h-full p-6 md:p-16 flex flex-col justify-end">
                    <div className="max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, ease: "easeOut" }}
                      >
                        <h4 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                          {activeSol.title}
                        </h4>
                        <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 line-clamp-4 md:line-clamp-none font-medium">
                          {activeSol.description}
                        </p>
                      </motion.div>

                      {/* Staggered Feature Badges */}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {activeSol.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, x: -10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.08), type: "spring", stiffness: 100 }}
                            className="px-3 py-1.5 md:px-5 md:py-2 bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] md:text-sm font-semibold transition-colors"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Status Indicator */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-white/10">
                <span className="text-[8px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest">Active System</span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;