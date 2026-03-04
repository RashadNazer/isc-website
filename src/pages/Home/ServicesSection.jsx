import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Settings, BarChart3 } from "lucide-react";
import { Reveal } from "../../components/UIComponents";

const ServicesSection = () => {
  const previewCards = [
    { title: "Design & Engineering", icon: <Settings className="w-5 h-5" /> },
    { title: "Material Procurement", icon: <Zap className="w-5 h-5" /> },
    { title: "System Installation", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Project Management", icon: <BarChart3 className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal x={-20}>
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Core Capabilities
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Specialized Engineering <br /> 
                <span className="text-slate-400">Services.</span>
              </h3>
            </Reveal>
          </div>
          
          <div className="lg:col-span-6 lg:pt-8">
            <Reveal delay={0.2} x={20}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                At ISC, we leverage certified expertise and factory-trained technicians to provide a full scope of Low Current System (LCS) integration. Our commitment ensures your industrial projects are delivered on time, on budget, and built for the future.
              </p>
              <Link 
                to="/services" 
                className="group inline-flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-[0.2em] hover:text-blue-700 transition-colors"
              >
                Explore all services
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Compact Capability Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewCards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.1} y={20}>
              <div className="group relative p-5 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/5">
                
                <div className="flex items-center gap-4">
                  {/* Subtle Number Indicator */}
                  <span className="text-xs font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors">
                    0{idx + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h4>
                </div>

                {/* Animated Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;