import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Settings,
  BarChart3,
} from "lucide-react";
import { Reveal } from "../../components/UIComponents";
import Card3D from "../../components/Card3D";

const ServicesSection = () => {
  const previewCards = [
    { title: "Design & Engineering", icon: <Settings className="w-5 h-5" /> },
    { title: "Material Procurement", icon: <Zap className="w-5 h-5" /> },
    { title: "System Installation", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Project Management", icon: <BarChart3 className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        {/* Section Header — 12-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal x={-20}>
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Core Capabilities
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] mb-6 tracking-tight max-w-2xl">
                Specialized Engineering <br />
                <span className="text-slate-400">Services.</span>
              </h3>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal delay={0.2} x={20}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
                At ISC, we leverage certified expertise and factory-trained
                technicians to provide a full scope of Low Current System (LCS)
                integration. Our commitment ensures your industrial projects are
                delivered on time, on budget, and built for the future.
              </p>
              <Link
                to="/services"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-[0.2em] hover:text-blue-700 transition-colors"
              >
                Explore all services
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Grid — 4 cols uses full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {previewCards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.1} y={20}>
              <Card3D intensity={8}>
                <div
                  data-cursor="hover"
                  className="group relative p-6 lg:p-7 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-blue-600/20 group-hover:text-blue-600/60 transition-colors">
                      0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700">
                      {card.icon}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </div>
              </Card3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;