import React from "react";
import { projectData } from "../../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Ensure these are imported from your components folder
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../../components/UIComponents";


const ProjectsSection = () => {
  // SAFETY: Fallback for empty data
  const featuredProjects = projectData?.slice(0, 6) || [];

  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 text-left">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white transition-colors leading-tight text-left">
              Featured Projects
            </h3>
          </motion.div>

          {/* VIEW ALL LINK - Styled as Magnetic Button */}
          <Reveal delay={0.2}>
            <MagneticButton>
              <Link
                to="/projects"
                className="group flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
              >
                View All Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </MagneticButton>
          </Reveal>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", damping: 20 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-900 p-6 md:p-7 rounded-[2rem] border border-slate-200 dark:border-slate-800
                         hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300
                         shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 flex flex-col
                         justify-between min-h-[220px] active:scale-[0.98]"
            >
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300
                               text-[10px] font-bold uppercase tracking-widest
                               rounded-lg border border-blue-100/50 dark:border-blue-800/50"
                  >
                    {project.category}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 font-mono text-[9px]">
                    ID: 0{project.id}
                  </span>
                </div>

                <h4
                  className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100
                             group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors
                             leading-snug text-left"
                >
                  {project.name}
                </h4>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                    Location
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                    {project.city}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                    Year
                  </span>
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;