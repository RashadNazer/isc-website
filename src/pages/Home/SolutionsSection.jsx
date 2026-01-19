import React, { useState } from "react";
import { solutionData } from "../../data/homeData";

const SolutionsSection = () => {
  const [activeSol, setActiveSol] = useState(null);

  return (
    <section
      id="solutions"
      className="py-16 md:py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header - Stacks on mobile */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
              Industry Ready
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">
              Our Solutions
            </h3>
          </div>

          {activeSol && (
            <button
              onClick={() => setActiveSol(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs md:text-sm transition-colors border-b border-dotted border-slate-300 hover:border-blue-600 pb-1 w-fit active:scale-95"
            >
              <span>Close All</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 md:space-y-5">
          {solutionData.map((sol) => {
            const isOpen = activeSol?.id === sol.id;

            return (
              <div
                key={sol.id}
                className={`rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all duration-500
                  ${
                    isOpen
                      ? "border-blue-200 shadow-xl md:shadow-2xl ring-1 ring-blue-50"
                      : "border-slate-100 hover:border-slate-200"
                  }`}
              >
                {/* Header Button - Improved touch padding */}
                <button
                  onClick={() => setActiveSol(isOpen ? null : sol)}
                  className={`w-full flex items-center justify-between p-6 md:p-9 text-left transition-all active:opacity-90
                    ${
                      isOpen
                        ? "bg-blue-900 text-white"
                        : "bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                >
                  <div className="pr-4">
                    <h4 className="text-lg md:text-2xl font-bold leading-tight">
                      {sol.title}
                    </h4>
                    <p
                      className={`text-[10px] md:text-xs uppercase tracking-[0.15em] mt-1.5 font-semibold
                        ${isOpen ? "text-blue-300" : "text-slate-400"}`}
                    >
                      {sol.subtitle}
                    </p>
                  </div>

                  {/* Icon - Smaller on mobile */}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-500
                      ${
                        isOpen
                          ? "border-blue-700 bg-blue-800 rotate-180"
                          : "border-slate-200 bg-slate-50"
                      }`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Content Area */}
                {isOpen && (
                  <div className="p-6 md:p-12 bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

                      {/* IMAGE: Visual Ordering - Above text list on mobile */}
                      <div className="relative order-1 lg:order-2">
                        <div className="absolute -inset-2 md:-inset-4 bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] -z-10"></div>
                        <img
                          src={sol.image}
                          alt={sol.title}
                          className="w-full h-48 md:h-auto rounded-2xl md:rounded-3xl shadow-lg border border-white object-cover"
                        />
                        <div className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                      </div>

                      {/* TEXT & FEATURES: Order 2 on mobile */}
                      <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                          {sol.description}
                        </p>

                        <div className="grid grid-cols-1 gap-3 md:gap-4">
                          {sol.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 md:gap-4">
                              <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600">
                                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-slate-700 font-semibold text-sm md:text-base">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;