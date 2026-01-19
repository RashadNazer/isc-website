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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
              Industry Ready
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white transition-colors">
              Our Solutions
            </h3>
          </motion.div>

          {activeSol && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setActiveSol(null)}
              className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs md:text-sm transition-colors border-b border-dotted border-slate-300 dark:border-slate-700 hover:border-blue-600 pb-1 w-fit active:scale-95"
            >
              <span>Close All</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 md:space-y-5">
          {solutionData.map((sol) => {
            const isOpen = activeSol?.id === sol.id;

            return (
              <motion.div
                key={sol.id}
                layout
                initial={false}
                className={`rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all duration-500
                  ${
                    isOpen
                      ? "border-blue-200 dark:border-blue-900 shadow-xl md:shadow-2xl ring-1 ring-blue-50 dark:ring-blue-900/20"
                      : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                  }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => setActiveSol(isOpen ? null : sol)}
                  className={`w-full flex items-center justify-between p-6 md:p-9 text-left transition-all relative z-10
                    ${
                      isOpen
                        ? "bg-blue-900 dark:bg-blue-800 text-white"
                        : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                >
                  <div className="pr-4">
                    <h4 className="text-lg md:text-2xl font-bold leading-tight">
                      {sol.title}
                    </h4>
                    <p className={`text-[10px] md:text-xs uppercase tracking-[0.15em] mt-1.5 font-semibold transition-colors
                        ${isOpen ? "text-blue-300 dark:text-blue-200" : "text-slate-400 dark:text-slate-500"}`}
                    >
                      {sol.subtitle}
                    </p>
                  </div>

                  {/* Icon with Rotate Animation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center border transition-colors
                      ${
                        isOpen
                          ? "border-blue-700 dark:border-blue-600 bg-blue-800 dark:bg-blue-700"
                          : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      }`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Smooth Height Reveal */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-6 md:p-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                          
                          {/* Image with staggered entry */}
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative order-1 lg:order-2"
                          >
                            <div className="absolute -inset-2 md:-inset-4 bg-slate-50 dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] -z-10"></div>
                            <img
                              src={sol.image}
                              alt={sol.title}
                              className="w-full h-48 md:h-auto rounded-2xl md:rounded-3xl shadow-lg border border-white dark:border-slate-700 object-cover"
                            />
                          </motion.div>

                          {/* Content with slide-up entry */}
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="space-y-6 md:space-y-8 order-2 lg:order-1"
                          >
                            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                              {sol.description}
                            </p>

                            <div className="grid grid-cols-1 gap-3 md:gap-4">
                              {sol.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 md:gap-4 group">
                                  <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg bg-blue-50 dark:bg-blue-900/30 flex-shrink-0 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-default">
                                    {feature}
                                  </span>
                                </div>
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