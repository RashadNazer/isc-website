import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const categoryColors = {
  Security: "from-blue-600 to-cyan-500",
  Fire: "from-orange-500 to-red-500",
  ICT: "from-violet-500 to-purple-500",
  TETRA: "from-emerald-500 to-teal-500",
};

const FeaturedPartnerCard = ({ partner, index, onSelect }) => {
  const gradient =
    categoryColors[partner.category] || "from-blue-600 to-indigo-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(partner)}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-4xl md:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500 cursor-pointer min-h-[280px] md:min-h-[340px]"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-20 bg-blue-500/0 group-hover:bg-blue-500/[0.06] blur-3xl rounded-full transition-all duration-700 pointer-events-none" />

      {/* Top gradient bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
      />

      {/* Corner badge */}
      <div className="absolute top-6 right-6 z-10">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800">
          <Sparkles className="w-3 h-3 text-blue-600" strokeWidth={2.5} />
          <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em]">
            Featured
          </span>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-6 left-6 z-10">
        <span
          className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} text-white text-[9px] font-black uppercase tracking-[0.25em]`}
        >
          {partner.category}
        </span>
      </div>

      <div className="relative p-8 md:p-10 h-full flex flex-col justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center h-24 md:h-32 mb-6">
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-full max-w-[80%] object-contain transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {partner.name}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 max-w-lg">
            {partner.desc}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              View Partner
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPartnerCard;