import { useState, useMemo } from 'react';
import { projectData } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../components/UIComponents";

const categories = ['All', 'Petrochemical Complex', 'Hospital Complex', 'Pipelines', 'Corporate Office', 'Commercial and Industrial Buildings'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projectData 
      : projectData.filter(p => p.category === filter);
  }, [filter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section: Downsized Typography */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Archive
          </h2>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Full Project Portfolio
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our history of delivering specialized electronic systems for Saudi Arabia's most critical sectors.
          </p>
        </motion.div>

        {/* Compact Floating Filter Bar */}
        <div className="sticky top-20 md:top-32 z-40 pb-12 transition-all duration-500">
          <div className="max-w-fit mx-auto"> 
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 py-1.5 px-1.5 rounded-full shadow-xl shadow-slate-200/20 dark:shadow-none">
              <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-1 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setVisibleCount(9);
                    }}
                    className="relative px-4 md:px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-colors whitespace-nowrap active:scale-95"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      filter === cat ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat}
                    </span>
                    {filter === cat && (
                      <motion.div
                        layoutId="activeProjectPill"
                        className="absolute inset-0 bg-blue-600 rounded-full"
                        transition={smoothTransition}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode='popLayout'>
            {displayedProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ...smoothTransition, delay: (index % 3) * 0.05 }}
                className="group bg-white dark:bg-slate-900 p-6 md:p-7 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-blue-100/50 dark:border-blue-800/50">
                      {project.category}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600 font-mono text-[9px]">
                      ID: 0{project.id}
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.name}
                  </h4>
                </div>

                {/* Card Footer: Metadata refined to match Home/Contact */}
                <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-800 space-y-2">
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-wider font-bold">Location</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{project.city}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-wider font-bold">Year</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{project.year}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Option: Using MagneticButton style */}
        <AnimatePresence>
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 flex justify-center"
            >
              <MagneticButton>
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-8 py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
                >
                  Load More Projects
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-slate-400 dark:text-slate-600 text-lg font-medium italic">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}