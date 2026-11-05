import React from "react";
import { motion } from "framer-motion";

const MarqueeBand = ({
  items = ["ISO 9001", "SIRA CERTIFIED", "40+ YEARS", "2000+ PROJECTS", "24/7 SUPPORT"],
  speed = 25,
  direction = "left",
}) => {
  const duplicated = [...items, ...items];

  return (
    <div className="relative py-6 md:py-8 border-y border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Edge fade */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-12 md:gap-20 whitespace-nowrap will-change-transform"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((item, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-20">
            <span className="text-2xl md:text-4xl font-black text-slate-300 dark:text-slate-700 uppercase tracking-tighter">
              {item}
            </span>
            <span className="text-blue-600 text-3xl md:text-5xl font-black">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBand;