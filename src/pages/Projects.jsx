import { useState, useMemo } from 'react';
import { projectData } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Petrochemical Complex', 'Hospital Complex', 'Pipelines', 'Corporate Office', 'Commercial and Industrial Buildings'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  // Memoize filtered results for smooth performance
  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projectData 
      : projectData.filter(p => p.category === filter);
  }, [filter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Custom "Luxury" Spring physics
  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
            Full Project Portfolio
          </h1>
          <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore our history of delivering specialized electronic systems for Saudi Arabia's most critical sectors.
          </p>
        </motion.div>

        {/* Compact Floating Filter Bar */}
        <div className="sticky top-20 md:top-32 z-40 px-6 pb-12 transition-all duration-500">
          <div className="max-w-fit mx-auto"> 
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 py-2 px-2 rounded-full shadow-lg shadow-slate-200/20 dark:shadow-none">
              <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-1.5 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setVisibleCount(9); // Reset count on filter change
                    }}
                    className="relative px-4 md:px-5 py-2 rounded-full text-[10px] md:text-xs font-bold transition-colors whitespace-nowrap active:scale-95"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      filter === cat ? "text-white" : "text-slate-500 dark:text-slate-400"
                    }`}>
                      {cat}
                    </span>
                    {filter === cat && (
                      <motion.div
                        layoutId="activeProjectPill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-md"
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
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {displayedProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  ...smoothTransition,
                  delay: (index % 3) * 0.08 // Stagger by column
                }}
                className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-2xl dark:hover:shadow-blue-900/20 flex flex-col justify-between min-h-[240px] md:min-h-[280px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100 dark:border-blue-900/50">
                      {project.category}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600 font-mono text-[9px] md:text-[10px]">
                      REF: 0{project.id}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {project.name}
                  </h4>
                </div>

                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 dark:border-slate-800 space-y-2 md:space-y-3">
                   <div className="flex justify-between text-sm md:text-base">
                      <span className="text-slate-400 dark:text-slate-500 text-xs md:text-sm">Location</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">{project.city}</span>
                   </div>
                   <div className="flex justify-between text-sm md:text-base">
                      <span className="text-slate-400 dark:text-slate-500 text-xs md:text-sm">Year</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">{project.year}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Option */}
        <AnimatePresence>
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-12 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-full font-bold text-sm shadow-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
              >
                Load More Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20"
            >
              <p className="text-slate-400 dark:text-slate-600 text-lg italic">No projects found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}