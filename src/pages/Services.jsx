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
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Scaled typography for mobile */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
            Professional Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our Services
          </h3>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* GRID SIZING: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 
                         shadow-sm hover:shadow-xl hover:border-blue-200 
                         transition-all duration-300 active:scale-[0.98] active:bg-slate-50"
            >
              {/* Service Number or Icon Placeholder */}
              <div className="text-blue-600/20 font-black text-4xl mb-4 group-hover:text-blue-600/40 transition-colors">
                0{i + 1}
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h4>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}