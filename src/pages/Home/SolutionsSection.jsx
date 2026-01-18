import React, { useState } from "react";
import { solutionData } from "../../data/homeData";

const SolutionsSection = () => {
  const [activeSol, setActiveSol] = useState(null);

  return (
    <section
      id="solutions"
      className="py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Industry Ready
            </h2>
            <h3 className="text-4xl font-black text-slate-900">
              Our Solutions
            </h3>
          </div>

          {activeSol && (
            <button
              onClick={() => setActiveSol(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors border-b border-dotted border-slate-300 hover:border-blue-600 pb-1"
            >
              <span>Close All</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {solutionData.map((sol) => {
            const isOpen = activeSol?.id === sol.id;

            return (
              <div
                key={sol.id}
                className={`rounded-[2rem] overflow-hidden border transition-all duration-500
                  ${
                    isOpen
                      ? "border-blue-200 shadow-2xl ring-1 ring-blue-50"
                      : "border-slate-100 hover:border-slate-200"
                  }`}
              >
                {/* Header */}
                <button
                  onClick={() => setActiveSol(isOpen ? null : sol)}
                  className={`w-full flex items-center justify-between p-7 md:p-9 text-left transition-all
                    ${
                      isOpen
                        ? "bg-blue-900 text-white"
                        : "bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                >
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold">
                      {sol.title}
                    </h4>
                    <p
                      className={`text-xs uppercase tracking-[0.15em] mt-1.5 font-semibold
                        ${isOpen ? "text-blue-300" : "text-slate-400"}`}
                    >
                      {sol.subtitle}
                    </p>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500
                      ${
                        isOpen
                          ? "border-blue-700 bg-blue-800 rotate-180"
                          : "border-slate-200 bg-slate-50"
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="p-8 md:p-12 bg-white border-t border-slate-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                      {/* Text */}
                      <div className="space-y-8">
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {sol.description}
                        </p>

                        <div className="space-y-4">
                          {sol.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-4">
                              <div className="mt-1 w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-slate-700 font-semibold">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative">
                        <div className="absolute -inset-4 bg-slate-50 rounded-[2.5rem] -z-10"></div>
                        <img
                          src={sol.image}
                          alt={sol.title}
                          className="w-full rounded-3xl shadow-2xl border border-white object-cover"
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
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
