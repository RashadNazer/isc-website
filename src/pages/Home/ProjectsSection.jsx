import React, { useState, useMemo, useEffect } from "react"; 
import { projectData } from "../../data/projects";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Reveal, 
  MagneticButton 
} from "../../components/UIComponents";
import Balatro from '../../component/Balatro';

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const featuredProjects = useMemo(() => projectData?.slice(0, 6) || [], []);

  // --- SMOOTHNESS OPTIMIZATION: Hardware Acceleration ---
  // We use willChange to tell the browser to promote cards to their own GPU layer
  const cardStyle = {
    willChange: "transform, opacity, filter",
    backfaceVisibility: "hidden",
  };

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const MemoizedBackground = useMemo(() => (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <Balatro
        isRotate={false}
        mouseInteraction={true}
        pixelFilter={745}
        color1="#2563eb" 
        color2="#0f172a" 
        color3="#3b82f6" 
      />
      <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 pointer-events-none" />
    </div>
  ), []);

  return (
    <section 
      id="projects" 
      className="relative isolate z-0 py-16 md:py-20 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500"
    >
      {MemoizedBackground}

      <div className="max-w-7xl mx-auto px-6 relative z-10 pointer-events-none">
        
        {/* HEADER - Wrapped in Reveal for staggered entry */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 pointer-events-auto">
          <Reveal>
            <div>
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Featured Projects
              </h3>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-fit">
              <Link to="/projects" className="group flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-3 md:py-4 rounded-xl shadow-sm border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white active:scale-95">
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative h-[400px] md:h-[450px] flex items-center justify-center">
          <div className="relative w-full max-w-[280px] xs:max-w-sm md:max-w-md h-full flex items-center justify-center pointer-events-auto">
            
            <AnimatePresence initial={false} mode="popLayout">
              {featuredProjects.map((project, i) => {
                let position = i - index;
                if (position < -Math.floor(featuredProjects.length / 2)) position += featuredProjects.length;
                if (position > Math.floor(featuredProjects.length / 2)) position -= featuredProjects.length;

                const isVisible = Math.abs(position) <= 1;

                return (
                  <motion.div
                    key={project.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset }) => {
                      if (offset.x > 100) prevProject();
                      else if (offset.x < -100) nextProject();
                    }}
                    style={cardStyle}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: position === 0 ? 1 : (isVisible ? 0.35 : 0),
                      scale: position === 0 ? 1 : 0.8,
                      x: position * (window.innerWidth < 768 ? 160 : 340),
                      rotateY: position * 40,
                      zIndex: position === 0 ? 10 : 5,
                      filter: position === 0 ? "blur(0px)" : "blur(6px)",
                      pointerEvents: position === 0 ? "auto" : "none",
                    }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 120, // Reduced stiffness for a more "expensive" floaty feel
                      damping: 20, 
                      mass: 1
                    }}
                    className="absolute w-full cursor-grab active:cursor-grabbing"
                  >
                    {/* GLASS PROJECT CARD */}
                    <div className={`
                      bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] border transition-all duration-700
                      shadow-xl md:shadow-2xl flex flex-col justify-between min-h-[300px] md:min-h-[340px]
                      ${position === 0 
                        ? "border-blue-500/50 ring-1 ring-blue-500/20 shadow-blue-500/10" 
                        : "border-slate-200/50 dark:border-white/5"}
                    `}>
                      <div className="transform-gpu transition-transform duration-500 group-hover:scale-[1.02]">
                        <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-blue-500/20">
                          {project.category}
                        </span>
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-4 md:mt-6 leading-tight tracking-tight">
                          {project.name}
                        </h4>
                      </div>

                      <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-200/50 dark:border-white/10 flex justify-between">
                        <div>
                          <p className="text-slate-400 dark:text-slate-500 text-[9px] uppercase font-black mb-1">Location</p>
                          <p className="text-slate-800 dark:text-slate-200 font-bold text-sm">{project.city}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-400 dark:text-slate-500 text-[9px] uppercase font-black mb-1">Year</p>
                          <p className="text-slate-950 dark:text-white font-black text-sm">{project.year}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-10 z-20 pointer-events-none">
            <MagneticButton>
              <button 
                onClick={prevProject} 
                className="p-3 md:p-4 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl text-slate-900 dark:text-white pointer-events-auto hover:bg-blue-600 hover:text-white transition-all active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
              </button>
            </MagneticButton>
            <MagneticButton>
              <button 
                onClick={nextProject} 
                className="p-3 md:p-4 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl text-slate-900 dark:text-white pointer-events-auto hover:bg-blue-600 hover:text-white transition-all active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* PROGRESS DOTS */}
        <div className="flex justify-center gap-3 mt-8 md:mt-12 pointer-events-auto">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-10 bg-blue-600 shadow-lg shadow-blue-500/20" : "w-2 bg-slate-300 dark:bg-slate-800 hover:bg-slate-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;