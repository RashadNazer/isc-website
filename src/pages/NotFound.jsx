import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  ArrowRight,
  FileText,
  Briefcase,
  Mail,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { usePageTitle } from "../hooks/usePageTitle";

const popularLinks = [
  {
    icon: LayoutGrid,
    label: "Services",
    desc: "Engineering, procurement, installation, training",
    path: "/services",
  },
  {
    icon: Briefcase,
    label: "Projects",
    desc: "Explore 2000+ delivered projects",
    path: "/projects",
  },
  {
    icon: Sparkles,
    label: "Insights",
    desc: "Technical explainers and industry news",
    path: "/insights",
  },
  {
    icon: Mail,
    label: "Contact Us",
    desc: "Reach our sales or support team",
    path: "/contact",
  },
];

const NotFound = () => {
  usePageTitle("404 Not Found");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/insights?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative isolate min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden flex items-center justify-center py-20">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="w-full px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[80px] md:text-[140px] font-black text-slate-200 dark:text-slate-800 leading-none tracking-tighter mb-4">
              404
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
              Page Not Found.
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
              The page you're looking for may have been moved, renamed, or never
              existed. Let's get you back on track.
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSearch}
              className="relative max-w-md mx-auto mb-12"
            >
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                strokeWidth={2.5}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the site..."
                className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 text-sm font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-500 transition-all"
              />
            </form>
          </Reveal>

          {/* Popular links — now 4 across even on medium screens */}
          <Reveal delay={0.2}>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-6">
              Or jump to a popular page
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {popularLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      className="group block p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-left h-full"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-500 leading-snug">
                        {link.desc}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link
                  to="/"
                  className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  <Home className="w-4 h-4" strokeWidth={2.5} />
                  Back to Home
                </Link>
              </MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-blue-500/40 transition-all"
              >
                <FileText className="w-4 h-4" strokeWidth={2.5} />
                Report an Issue
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default NotFound;