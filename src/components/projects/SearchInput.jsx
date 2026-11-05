import React from "react";
import { Search, X } from "lucide-react";

const SearchInput = ({ value, onChange, placeholder = "Search projects..." }) => (
  <div className="relative w-full md:w-64">
    <Search
      className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
      strokeWidth={2.5}
    />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-10 py-2.5 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-500 transition-all"
    />
    {value && (
      <button
        onClick={() => onChange("")}
        aria-label="Clear search"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <X className="w-3 h-3 text-slate-500" strokeWidth={3} />
      </button>
    )}
  </div>
);

export default SearchInput;