import React, { useState } from "react";
import { solutionData } from "../../data/homeData";
import { motion, AnimatePresence } from "framer-motion";

const SolutionsSection = () => {
  const [activeSol, setActiveSol] = useState(null);

  return (
    <section
      id="solutions"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
              Industry Ready
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white transition-colors leading-[1.1]">
              Our Solutions
            </h3>
          </motion.div>

          {activeSol && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setActiveSol(null)}
              className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs md:text-sm transition-all border-b border-dotted border-slate-300 dark:border-slate-700 hover:border-blue-600 pb-1 w-fit active:scale-95 mb-1"
            >
              <span>Close All</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Accordion Container */}
        <div className="space-y-5 md:space-y-6">
          {solutionData.map((sol) => {
            const isOpen = activeSol?.id === sol.id;

            return (
              <motion.div
                key={sol.id}
                layout
                initial={false}
                className={`rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border transition-all duration-500
                  ${
                    isOpen
                      ? "border-blue-200 dark:border-blue-900 shadow-2xl ring-1 ring-blue-50 dark:ring-blue-900/10"
                      : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                  }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => setActiveSol(isOpen ? null : sol)}
                  className={`w-full flex items-center justify-between p-8 md:p-10 text-left transition-all relative z-10
                    ${
                      isOpen
                        ? "bg-blue-900 dark:bg-blue-800 text-white"
                        : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                >
                  <div className="pr-6">
                    <h4 className="text-xl md:text-3xl font-bold leading-tight">
                      {sol.title}
                    </h4>
                    <p className={`text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 font-bold transition-colors
                        ${isOpen ? "text-blue-300 dark:text-blue-200" : "text-slate-400 dark:text-slate-500"}`}
                    >
                      {sol.subtitle}
                    </p>
                  </div>

                  {/* Icon with Rotate Animation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl flex items-center justify-center border transition-all
                      ${
                        isOpen
                          ? "border-blue-700 dark:border-blue-600 bg-blue-800 dark:bg-blue-700"
                          : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      }`}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* SMOOTHER HEIGHT REVEAL */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: {
                            type: "spring",
                            damping: 30, // Higher damping = smoother, no bounce
                            stiffness: 150,
                          },
                          opacity: { duration: 0.4, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 }
                        }
                      }}
                    >
                      <div className="p-8 md:p-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                          
                          {/* Image Column - Slight delay and scale-up */}
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: "spring", damping: 20 }}
                            className="relative order-1 lg:order-2"
                          >
                            <div className="absolute -inset-4 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] -z-10"></div>
                            <img
                              src={sol.image}
                              alt={sol.title}
                              className="w-full aspect-video md:aspect-square rounded-[2rem] shadow-xl border border-white dark:border-slate-700 object-cover"
                            />
                          </motion.div>

                          {/* Content Column - Staggered slide up */}
                          <motion.div 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                            className="space-y-10 order-2 lg:order-1"
                          >
                            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed text-left">
                              {sol.description}
                            </p>

                            <div className="grid grid-cols-1 gap-5">
                              {sol.features.map((feature, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.3 + (i * 0.05) }} // Each checkmark pops in one by one
                                  className="flex items-start gap-4 group"
                                >
                                  <div className="mt-1 w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex-shrink-0 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 transition-all duration-300">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-slate-700 dark:text-slate-300 font-bold text-base md:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-left">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;