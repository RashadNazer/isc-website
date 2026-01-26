import { useState, useEffect, useMemo, memo } from 'react'; // Added memo
import { projectData } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Reveal, 
  MagneticButton, 
} from "../components/UIComponents";
import Aurora from '../component/Aurora';
import SplitText from "../component/SplitText"; 

// Wrap Background in memo to prevent unnecessary re-renders during filter changes
const BackgroundEffect = memo(() => (
  <div className="absolute inset-0 z-0 opacity-40 dark:opacity-50 pointer-events-none transform-gpu">
    <Aurora
      colorStops={["#020617", "#2563eb", "#93c5fd"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
    <div className="absolute inset-0 bg-white/20 dark:bg-slate-950/40 backdrop-blur-[2px]" />
  </div>
));

const categories = [
  'All', 
  'Petrochemical Complex', 
  'Hospital Complex', 
  'Pipelines', 
  'Corporate Office', 
  'Commercial and Industrial Buildings'
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projectData 
      : projectData.filter(p => p.category === filter);
  }, [filter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Spring physics for "Premium" feel
  const smoothTransition = {
    type: "spring",
    stiffness: 260,
    damping: 32,
    mass: 1
  };

  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      
      <BackgroundEffect />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER SECTION - Faster entrance */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left md:text-center mb-10 md:mb-16"
        >
          <div className="mb-3">
            <SplitText
              text="Archive"
              className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]"
              delay={30}
              animationStep={0.02}
            />
          </div>

          <div className="mb-4">
            <SplitText
              text="Full Project Portfolio"
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
              delay={40}
              duration={0.8}
              textAlign="center"
            />
          </div>

          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl md:mx-auto leading-relaxed font-medium">
            Explore our history of delivering specialized electronic systems for Saudi Arabia's most critical sectors.
          </p>
        </motion.div>

        {/* FILTER BAR - Smooth Sliding Pill */}
        <div className="sticky top-20 md:top-28 z-40 pb-10 md:pb-12">
          <div className="relative max-w-fit mx-auto"> 
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 p-1 rounded-full shadow-xl">
              <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-1 no-scrollbar px-4 md:px-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setVisibleCount(6);
                    }}
                    className="relative px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap active:scale-95"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      filter === cat ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-blue-600"
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

        {/* PROJECT GRID - Staggered Animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center"
        >
          <AnimatePresence mode='popLayout' initial={false}>
            {displayedProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ 
                  ...smoothTransition, 
                  delay: (index % 6) * 0.04 // Reduced delay for faster feeling
                }}
                // Crucial for performance during layout transitions
                style={{ willChange: "transform, opacity" }}
                className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-slate-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 flex flex-col justify-between min-h-[220px]"
              >
                <div className="transform-gpu"> {/* Hardware accelerated group */}
                  <div className="flex justify-between items-start mb-5">
                    <span className="px-2.5 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-md border border-blue-100/50 dark:border-blue-800/30">
                      {project.category}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600 font-mono text-[9px]">
                      0{project.id}
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.name}
                  </h4>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-800/50 space-y-2">
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider font-bold">Location</span>
                      <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">{project.city}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider font-bold">Year</span>
                      <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100">{project.year}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE - Smooth appearance */}
        <AnimatePresence>
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-12 md:mt-16 flex justify-center"
            >
              <div className="w-full sm:w-auto px-4">
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="w-full group flex items-center justify-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm active:scale-95 transition-all md:hover:bg-blue-600 md:hover:text-white md:hover:border-blue-600"
                >
                  Load More Projects
                  <motion.svg 
                    animate={{ y: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </motion.svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}