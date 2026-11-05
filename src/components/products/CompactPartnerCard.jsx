import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CompactPartnerCard = ({ partner, index, onSelect }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: (index % 8) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(partner)}
      className="group relative bg-white/80 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* Logo area */}
      <div className="relative h-28 flex items-center justify-center p-5 bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800/40 border-b border-slate-100 dark:border-slate-800/50">
        {!loaded && (
          <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 animate-pulse" />
        )}
        <img
          src={partner.logo}
          alt={partner.name}
          onLoad={() => setLoaded(true)}
          className={`max-h-16 max-w-[70%] object-contain transition-all duration-500 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } group-hover:scale-110`}
        />
        {/* Category pill top-right */}
        <div className="absolute top-3 right-3">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md border border-slate-200/60 dark:border-slate-800/60">
            {partner.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2 line-clamp-1">
          {partner.name}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4 grow">
          {partner.desc}
        </p>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            View Details
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default CompactPartnerCard;