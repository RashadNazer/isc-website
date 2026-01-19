import { useState } from 'react';
import { projectData } from '../data/projects';

// Categories constant
const categories = ['All', 'Petrochemical Complex', 'Hospital Complex', 'Pipelines', 'Corporate Office', 'Commercial and Industrial Buildings'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
            Full Project Portfolio
          </h1>
          <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore our history of delivering specialized electronic systems for Saudi Arabia's most critical sectors.
          </p>
        </div>

        {/* Compact Floating Filter Bar */}
<div className="sticky top-20 md:top-32 z-40 px-6 pb-8 transition-all duration-500">
  <div className="max-w-fit mx-auto"> 
    <div className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 py-2 px-2 rounded-full shadow-sm">
      <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-1.5 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              filter === cat 
                ? "bg-blue-900 dark:bg-blue-600 text-white shadow-md scale-105" 
                : "bg-transparent text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 flex flex-col justify-between min-h-[240px] md:min-h-[280px]"
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
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h4>
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 dark:border-slate-800 space-y-2 md:space-y-3">
                 <div className="flex justify-between text-sm md:text-base">
                    <span className="text-slate-400 dark:text-slate-500 text-xs md:text-sm">Location</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{project.city}</span>
                 </div>
                 <div className="flex justify-between text-sm md:text-base">
                    <span className="text-slate-400 dark:text-slate-500 text-xs md:text-sm">Year</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{project.year}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 dark:text-slate-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}