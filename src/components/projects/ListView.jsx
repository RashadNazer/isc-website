import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const ListView = ({ projects, onSelect }) => (
  <div className="space-y-3">
    {projects.map((project, i) => (
      <motion.div
        key={project.id}
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.35, delay: (i % 10) * 0.03 }}
        onClick={() => onSelect?.(project)}
        className={`group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 ${
          onSelect ? "cursor-pointer" : ""
        }`}
      >
        {/* Left: thumbnail (if available) or number */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-200 dark:border-slate-800">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <span className="text-xl font-black text-slate-400 group-hover:text-blue-600 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Middle: name + meta */}
        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 mb-1.5">
            {project.category}
          </p>
          <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-1 mb-2">
            {project.name}
          </h4>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" strokeWidth={2.5} />
              <span className="font-bold uppercase tracking-wider">
                {project.city}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" strokeWidth={2.5} />
              <span className="font-bold">{project.year}</span>
            </span>
          </div>
        </div>

        {/* Right: arrow */}
        <div className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </div>
      </motion.div>
    ))}
  </div>
);

export default ListView;