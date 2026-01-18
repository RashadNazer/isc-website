import React from "react";
import { projectData } from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Portfolio
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Featured Projects
            </h3>
          </div>

          {/* View All Projects */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-blue-700 font-bold
                       hover:text-blue-900 transition-colors w-fit"
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

        {/* Project Cards (First 6 Only) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="group bg-white p-8 rounded-3xl border border-slate-200
                         hover:border-blue-500 transition-all duration-300
                         shadow-sm hover:shadow-xl flex flex-col
                         justify-between min-h-[260px]"
            >
              {/* Top */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="px-3 py-1 bg-blue-50 text-blue-700
                               text-[10px] font-black uppercase tracking-widest
                               rounded-lg border border-blue-100"
                  >
                    {project.category}
                  </span>
                  <span className="text-slate-300 font-mono text-[10px]">
                    REF: 0{project.id}
                  </span>
                </div>

                <h4
                  className="text-2xl font-bold text-slate-900
                             group-hover:text-blue-900 transition-colors
                             leading-tight"
                >
                  {project.name}
                </h4>
              </div>

              {/* Meta */}
              <div className="mt-8 pt-6 border-t border-slate-50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium">
                    Location
                  </span>
                  <span className="text-slate-700 font-bold">
                    {project.city}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium">
                    Completion
                  </span>
                  <span className="text-slate-900 font-bold">
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
