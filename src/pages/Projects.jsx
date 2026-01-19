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
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
            Full Project Portfolio
          </h1>
          <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Explore our history of delivering specialized electronic systems for Saudi Arabia's most critical sectors.
          </p>
        </div>

        {/* Filter Pills: Scrollable on mobile, Centered on desktop */}
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:justify-center gap-2 mb-12 md:mb-16 pb-4 md:pb-0 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                filter === cat 
                  ? "bg-blue-900 text-white shadow-lg md:shadow-xl shadow-blue-900/20 md:scale-105" 
                  : "bg-slate-50 text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid: Stays 1 column on small phones, 2 on tablets, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[240px] md:min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">
                    {project.category}
                  </span>
                  <span className="text-slate-300 font-mono text-[9px] md:text-[10px]">
                    REF: 0{project.id}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {project.name}
                </h4>
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 space-y-2 md:space-y-3">
                 <div className="flex justify-between text-sm md:text-base">
                    <span className="text-slate-400 text-xs md:text-sm">Location</span>
                    <span className="font-bold text-slate-700">{project.city}</span>
                 </div>
                 <div className="flex justify-between text-sm md:text-base">
                    <span className="text-slate-400 text-xs md:text-sm">Year</span>
                    <span className="font-bold text-slate-700">{project.year}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}