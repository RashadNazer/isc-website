import React, { useState } from "react";
import { serviceData } from "../../data/homeData";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(serviceData[0]);

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.25em] mb-3">
            Capabilities
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Our Services
          </h3>
          <p className="mt-4 text-slate-600 text-lg">
            Comprehensive engineering and system integration services designed
            to deliver reliability, performance, and long-term value.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {serviceData.map((service) => {
              const isActive = activeTab.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group
                    ${
                      isActive
                        ? "bg-white border-blue-600 shadow-xl translate-x-2"
                        : "bg-white/60 border-slate-200 hover:border-blue-300 hover:bg-white"
                    }`}
                >
                  <h4
                    className={`text-xl font-bold mb-2 transition-colors
                      ${isActive ? "text-blue-900" : "text-slate-800"}`}
                  >
                    {service.title}
                  </h4>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.short}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 min-h-[420px] flex flex-col justify-center transition-all">
              <span className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
                Service Overview
              </span>

              <h4 className="text-3xl font-black text-slate-900 mb-6">
                {activeTab.title}
              </h4>

              <p className="text-slate-600 text-lg leading-relaxed">
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
