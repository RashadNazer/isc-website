import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, List, Clock, Map as MapIcon } from "lucide-react";

const VIEWS = [
  { id: "grid", label: "Grid", icon: LayoutGrid },
  { id: "list", label: "List", icon: List },
  { id: "map", label: "Map", icon: MapIcon },
];

const ViewToggle = ({ view, setView }) => (
  <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-md flex items-center gap-0.5">
    {VIEWS.map((v) => {
      const Icon = v.icon;
      const isActive = view === v.id;
      return (
        <button
          key={v.id}
          onClick={() => setView(v.id)}
          aria-label={`${v.label} view`}
          title={`${v.label} view`}
          className="relative px-3 py-2 rounded-full transition-all"
        >
          <span
            className={`relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider transition-colors ${
              isActive
                ? "text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span className="hidden md:inline">{v.label}</span>
          </span>
          {isActive && (
            <motion.div
              layoutId="activeViewPill"
              className="absolute inset-0 bg-blue-600 rounded-full"
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
            />
          )}
        </button>
      );
    })}
  </div>
);

export default ViewToggle;