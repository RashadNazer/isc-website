// src/pages/Services.jsx
import React from "react";

const services = [
  { 
    title: "System Integration", 
    desc: "Broad range of technologies empowering clients to run business effectively, ensuring seamless communication across platforms." 
  },
  { 
    title: "Design & Engineering", 
    desc: "Tailored requirements from initial concept to detailed technical drawings, following international engineering standards." 
  },
  { 
    title: "Maintenance Portal", 
    desc: "Dedicated portal for maintenance contract holders to ensure 24/7 uptime and rapid response for critical infrastructure." 
  },
  { 
    title: "Project Management", 
    desc: "Highly qualified managers devoted to meeting your specific project goals through rigorous planning and execution." 
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
            Professional Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Our Services
          </h3>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-8 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl border border-slate-100 dark:border-slate-800 
                         shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 hover:border-blue-200 dark:hover:border-blue-700/50 
                         transition-all duration-300 active:scale-[0.98] active:bg-slate-50 dark:active:bg-slate-800"
            >
              {/* Service Number / Accent */}
              <div className="text-blue-600/20 dark:text-blue-400/10 font-black text-4xl mb-4 group-hover:text-blue-600/40 dark:group-hover:text-blue-400/30 transition-colors">
                0{i + 1}
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {s.title}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}