import React, { useState } from "react";
import { serviceData } from "../../data/homeData";

const ServicesSection = () => {
  // SAFETY: Fallback to empty object if serviceData is undefined to prevent crash
  const [activeTab, setActiveTab] = useState(serviceData?.[0] || {});

  if (!serviceData || serviceData.length === 0) return null;

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16 max-w-2xl text-left">
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
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT TABS */}
          <div className="lg:col-span-5 space-y-3 md:space-y-4 order-2 lg:order-1">
            {serviceData.map((service) => {
              const isActive = activeTab.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 group active:scale-[0.98]
                    ${
                      isActive
                        ? "bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 shadow-xl lg:translate-x-2"
                        : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-slate-800"
                    }`}
                >
                  <h4
                    className={`text-lg md:text-xl font-bold mb-1 md:mb-2 transition-colors
                      ${isActive ? "text-blue-900 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"}`}
                  >
                    {service.title}
                  </h4>

                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.short}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 min-h-[300px] md:min-h-[420px] flex flex-col justify-center transition-all animate-in fade-in slide-in-from-right-4 duration-500">
              <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
                Service Overview
              </span>

              <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                {activeTab.title}
              </h4>

              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {activeTab.content}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;