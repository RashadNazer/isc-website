import React from "react";
import { Link } from "react-router-dom";
import { solutionData } from "../../data/homeData";
import { ArrowRight, Shield, Flame, Cpu, Radio, Plus } from "lucide-react";
import { Reveal } from "../../components/UIComponents";
import Card3D from "../../components/Card3D";
import LightRays from "../../component/LightRays";

const SolutionsSection = () => {
  const getIcon = (id) => {
    switch (id) {
      case "sec":
        return <Shield className="w-5 h-5" />;
      case "fire":
        return <Flame className="w-5 h-5" />;
      case "it":
        return <Cpu className="w-5 h-5" />;
      case "tetra":
        return <Radio className="w-5 h-5" />;
      default:
        return <Plus className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="solutions"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
        <LightRays raysColor="#3b82f6" raysSpeed={0.6} />
      </div>

      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal x={-20}>
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Enterprise Grade
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight max-w-2xl">
                Integrated <br />
                <span className="text-slate-400">Solutions.</span>
              </h3>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal delay={0.2} x={20}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
                At ISC, we specialize in high-reliability Low Current System
                (LCS) integration. Our mission-critical solutions ensure that
                your facility is protected, connected, and prepared for future
                technological evolution.
              </p>
              <Link
                to="/solutions"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-[0.2em] hover:text-blue-700 transition-colors"
              >
                Explore all solutions
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Solutions Grid — 4 cols full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
          {solutionData.map((sol, idx) => (
            <Reveal key={sol.id} delay={idx * 0.1} y={20} className="h-full">
              <Card3D intensity={10} className="h-full">
                <Link
                  to={`/solutions#${sol.id}`}
                  data-cursor="hover"
                  className="block group h-full"
                >
                  <div className="relative p-6 lg:p-7 bg-slate-50/80 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/5 h-full min-h-[130px] flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black text-blue-600/20 group-hover:text-blue-600/60 transition-colors">
                        0{idx + 1}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex-shrink-0 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700">
                        {getIcon(sol.id)}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                        {sol.title}
                      </h4>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                  </div>
                </Link>
              </Card3D>
            </Reveal>
          ))}
        </div>

        {/* Brand Promise */}
        <Reveal delay={0.5} y={10}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
            <p className="text-slate-500 dark:text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Quality Is Our Objective
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SolutionsSection;