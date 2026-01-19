import React from "react";
import { projectData } from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  // SAFETY: Fallback for empty data
  const featuredProjects = projectData?.slice(0, 6) || [];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Responsive alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6 md:gap-8">
          <div>
            <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Portfolio
            </h2>
            {/* FONT SCALING: 3xl on mobile, 4xl on desktop */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Featured Projects
            </h3>
          </div>

          {/* VIEW ALL LINK: Increased tap target for mobile */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-blue-700 font-bold
                       hover:text-blue-900 transition-colors w-fit active:scale-95 origin-left"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* PROJECT CARDS: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200
                         hover:border-blue-500 transition-all duration-300
                         shadow-sm hover:shadow-xl flex flex-col
                         justify-between min-h-[240px] md:min-h-[260px]
                         active:bg-slate-50"
            >
              {/* Card Header/Top */}
              <div>
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <span
                    className="px-3 py-1 bg-blue-50 text-blue-700
                               text-[9px] md:text-[10px] font-black uppercase tracking-widest
                               rounded-lg border border-blue-100"
                  >
                    {project.category}
                  </span>
                  <span className="text-slate-300 font-mono text-[10px]">
                    REF: 0{project.id}
                  </span>
                </div>

                <h4
                  className="text-xl md:text-2xl font-bold text-slate-900
                             group-hover:text-blue-900 transition-colors
                             leading-tight"
                >
                  {project.name}
                </h4>
              </div>

              {/* Meta/Bottom Section */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 space-y-2 md:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs md:text-sm font-medium">
                    Location
                  </span>
                  <span className="text-slate-700 text-sm md:text-base font-bold">
                    {project.city}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs md:text-sm font-medium">
                    Completion
                  </span>
                  <span className="text-slate-900 text-sm md:text-base font-bold">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;