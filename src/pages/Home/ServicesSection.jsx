import React, { useState } from "react";
import { serviceData } from "../../data/homeData";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(serviceData?.[0] || {});

  if (!serviceData || serviceData.length === 0) return null;

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER - Simple fade up */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 max-w-2xl text-left"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
            Capabilities
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Our Services
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base md:text-lg">
            Comprehensive engineering and system integration services designed
            to deliver reliability, performance, and long-term value.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT TABS - Vertical list with sliding indicator */}
          <div className="lg:col-span-5 space-y-3 md:space-y-4 order-2 lg:order-1 relative">
            {serviceData.map((service, index) => {
              const isActive = activeTab.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  className="relative w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300 group outline-none"
                >
                  {/* The Sliding Pill - It physically moves to the new button */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServicePill"
                      className="absolute inset-0 bg-white dark:bg-slate-800 border border-blue-600 dark:border-blue-500 shadow-xl z-0 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="relative z-10">
                    <h4 className={`text-lg md:text-xl font-bold mb-1 md:mb-2 transition-colors duration-300 ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"
                    }`}>
                      {service.title}
                    </h4>
                    <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-slate-600 dark:text-slate-400" : "text-slate-500"
                    }`}>
                      {service.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT - Smooth text transition */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 min-h-[300px] md:min-h-[420px] relative overflow-hidden flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-3 block">
                    Service Overview
                  </span>

                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                    {activeTab.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                    {activeTab.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;