import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, FileText, Folder, Package, BookOpen, HelpCircle, Award, Factory } from "lucide-react";
import { useSearch } from "../hooks/useSearch";

/* Icon per result type */
const typeIcons = {
  Page: FileText,
  Project: Folder,
  Partner: Package,
  Insight: BookOpen,
  FAQ: HelpCircle,
  "Case Study": Award,
  Industry: Factory,
  Certification: Award,
};

const typeLabels = {
  Page: "Pages",
  Project: "Projects",
  Partner: "Partners",
  Insight: "Insights",
  FAQ: "FAQs",
  "Case Study": "Case Studies",
  Industry: "Industries",
  Certification: "Certifications",
};

const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { search } = useSearch();

  const results = search(query);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        navigate(results[selectedIndex].path);
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, results, selectedIndex, navigate, onClose]);

  // Reset selected when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[300] bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[301] flex items-start justify-center pt-[10vh] md:pt-[15vh] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Search input */}
              <div className="relative flex items-center border-b border-slate-200 dark:border-slate-800">
                <Search
                  className="absolute left-5 w-5 h-5 text-slate-400 pointer-events-none"
                  strokeWidth={2.5}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, projects, products, FAQs..."
                  className="w-full pl-14 pr-14 py-5 text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 bg-transparent outline-none"
                />
                <button
                  onClick={onClose}
                  aria-label="Close search"
                  className="absolute right-5 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.length < 2 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]">
                      Type at least 2 characters to search
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
                      Press <kbd className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] mx-1">↑</kbd>
                      <kbd className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">↓</kbd>{" "}
                      to navigate, <kbd className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">Enter</kbd> to select
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Search className="w-6 h-6 text-slate-400" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                      No results found
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      Try a different keyword or check the spelling.
                    </p>
                  </div>
                ) : (
                  <div className="py-2">
                    {results.map((result, i) => {
                      const Icon = typeIcons[result.type] || FileText;
                      const isSelected = i === selectedIndex;
                      return (
                        <button
                          key={`${result.type}-${result.path}-${i}`}
                          onClick={() => handleSelect(result.path)}
                          onMouseEnter={() => setSelectedIndex(i)}
                          className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-colors ${
                            isSelected
                              ? "bg-blue-50 dark:bg-blue-950/40"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            <Icon className="w-5 h-5" strokeWidth={2.2} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p
                              className={`text-sm font-black truncate ${
                                isSelected
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-slate-900 dark:text-white"
                              }`}
                            >
                              {result.title}
                            </p>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-0.5">
                              <span className="text-blue-600 dark:text-blue-400">
                                {typeLabels[result.type] || result.type}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                              <span className="truncate">{result.subtitle}</span>
                            </div>
                          </div>
                          {isSelected && (
                            <ArrowRight
                              className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0"
                              strokeWidth={3}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[9px]">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[9px]">
                      ⏎
                    </kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[9px]">
                      Esc
                    </kbd>
                    Close
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Powered by ISC
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearch;