import { useState } from 'react';
import { projectData } from '../data/projects';

// 1. Define categories here so the .map() function below knows what to use
const categories = ['All', 'Petrochemical Complex', 'Hospital Complex', 'Pipelines', 'Corporate Office', 'Commercial and Industrial Buildings'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Full Project Portfolio</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Explore our extensive history of delivering specialized electronic systems for Saudi Arabia's most critical sectors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                filter === cat 
                  ? "bg-blue-900 text-white shadow-xl shadow-blue-900/20 scale-105" 
                  : "bg-slate-50 text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">
                    {project.category}
                  </span>
                  <span className="text-slate-300 font-mono text-[10px]">REF: 0{project.id}</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{project.name}</h4>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 space-y-3">
                 <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Location</span>
                    <span className="font-bold">{project.city}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Year</span>
                    <span className="font-bold">{project.year}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}