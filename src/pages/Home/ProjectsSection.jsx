import React, { useState } from "react";
import { projectData } from "../../data/projects";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Reveal, 
  MagneticButton 
} from "../../components/UIComponents";

const ProjectsSection = () => {
  // index: Tracks the current active project in the carousel
  const [index, setIndex] = useState(0);
  
  // featuredProjects: Limits the display to the first 6 items from data
  const featuredProjects = projectData?.slice(0, 6) || [];

  /**
   * NAVIGATION LOGIC
   * Uses modulo (%) to ensure the index loops back to 0 at the end
   * and wraps to the end when going backwards from 0.
   */
  const nextProject = () => {
    setIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Responsive layout (Stacked on mobile, row on desktop) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Featured Projects
            </h3>
          </div>

          <Reveal delay={0.2}>
            <div className="w-fit">
              <Link to="/projects" className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-6 py-3 md:py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white">
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* CAROUSEL CONTAINER: Uses relative positioning to stack motion cards */}
        <div className="relative h-[400px] md:h-[450px] flex items-center justify-center">
          <div className="relative w-full max-w-[280px] xs:max-w-sm md:max-w-md h-full flex items-center justify-center">
            
            {/* AnimatePresence handles the mounting/unmounting of exit animations */}
            <AnimatePresence initial={false}>
              {featuredProjects.map((project, i) => {
                /**
                 * 3D STACK CALCULATIONS
                 * Calculates relative position (-1, 0, or 1) to determine 
                 * which cards are visible on the left, center, and right.
                 */
                let position = i - index;
                if (position < -1) position = position + featuredProjects.length;
                if (position > 1) position = position - featuredProjects.length;

                // Optimization: Only render the current, previous, and next card
                if (Math.abs(position) > 1) return null;

                return (
                  <motion.div
                    key={project.id}
                    // DRAG LOGIC: Enables horizontal swiping on mobile devices
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset }) => {
                      if (offset.x > 100) prevProject();      // Swipe Right -> Previous
                      else if (offset.x < -100) nextProject(); // Swipe Left -> Next
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: position === 0 ? 1 : 0.3,     // Dim background cards
                      scale: position === 0 ? 1 : 0.8,       // Shrink background cards
                      /**
                       * RESPONSIVE SPACING:
                       * Cards move 160px apart on mobile, 280px on desktop
                       */
                      x: position * (window.innerWidth < 768 ? 160 : 280),
                      rotateY: position * 30,                // 3D Tilt effect
                      zIndex: position === 0 ? 10 : 5,       // Center card stays on top
                      filter: position === 0 ? "blur(0px)" : "blur(4px)",
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-full cursor-grab active:cursor-grabbing"
                  >
                    {/* CARD UI */}
                    <div className={`
                      bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-slate-800
                      shadow-xl md:shadow-2xl flex flex-col justify-between min-h-[300px] md:min-h-[320px]
                      ${position === 0 ? "border-blue-500/30 ring-1 ring-blue-500/10" : "pointer-events-none"}
                    `}>
                      <div>
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-blue-100/50">
                          {project.category}
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-4 md:mt-6 leading-tight">
                          {project.name}
                        </h4>
                      </div>

                      {/* Info Footer */}
                      <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
                        <div>
                          <p className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold mb-1">Location</p>
                          <p className="text-slate-700 dark:text-slate-300 font-bold text-sm md:text-base">{project.city}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold mb-1">Year</p>
                          <p className="text-slate-900 dark:text-slate-100 font-bold text-sm md:text-base">{project.year}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* NAVIGATION ARROWS: Absolute positioned overlay */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-10 z-20 pointer-events-none">
            <button 
              onClick={prevProject} 
              className="p-3 md:p-4 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-lg text-slate-900 dark:text-white pointer-events-auto hover:bg-blue-600 hover:text-white transition-all active:scale-90"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={nextProject} 
              className="p-3 md:p-4 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-lg text-slate-900 dark:text-white pointer-events-auto hover:bg-blue-600 hover:text-white transition-all active:scale-90"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* PROGRESS DOTS: Visual indicator of the current active project */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? "w-8 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-700"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;