import React, { useState } from "react";
import { serviceData } from "../../data/homeData";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(serviceData?.[0] || {});

  if (!serviceData || serviceData.length === 0) return null;

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 max-w-3xl text-left"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
            Our Services
          </h3>
          {/* Normal spacing and alignment */}
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Comprehensive engineering and system integration services designed
            to deliver reliability, performance, and long-term industrial value.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* LEFT TABS */}
          <div className="lg:col-span-5 space-y-3 md:space-y-4 order-2 lg:order-1 relative">
            {serviceData.map((service) => {
              const isActive = activeTab.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  className="relative w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 group outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServicePill"
                      className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-0 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="relative z-10">
                    <h4 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"
                    }`}>
                      {service.title}
                    </h4>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 text-left ${
                      isActive ? "text-slate-600 dark:text-slate-400" : "text-slate-500"
                    }`}>
                      {service.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT - Normal Text Flow */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-14 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 min-h-[400px] md:min-h-[500px] relative overflow-hidden flex flex-col justify-start">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
                    <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                      Service Overview
                    </span>
                  </div>

                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                    {activeTab.title}
                  </h4>

                  {/* Normal spacing: removed justify and hyphens */}
                  <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed text-left">
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