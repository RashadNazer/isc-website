import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Sparkles,
  Search,
} from "lucide-react";
import { Reveal } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { insights, insightCategories, formatDate } from "../data/insights";

/* Full-width wrapper */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const InsightImage = ({ src, alt, className = "" }) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <span className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.25em]">
          ISC
        </span>
      </div>
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

const AuthorAvatar = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return <User className="w-4 h-4" strokeWidth={2.5} />;
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
};

const Insights = () => {
  usePageTitle("Insights");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = insights;
    if (activeCategory !== "All") {
      result = result.filter((post) => post.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return [...result].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeCategory, searchQuery]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-clip">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20 overflow-hidden">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* HERO */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 relative text-center">
        <FullWidth>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Insights & News
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Thinking Out{" "}
                <span className="text-slate-400 dark:text-slate-600">Loud.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Technical explainers, project lessons, and industry perspective
                from the ISC team.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

       {/* FILTERS + SEARCH */}
      <div className="sticky top-20 md:top-24 z-30 mb-10 w-full">
        <FullWidth className="flex flex-col gap-3">
          <div className="w-full overflow-x-auto no-scrollbar flex justify-center">
            <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-xl inline-flex whitespace-nowrap">
              {insightCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="relative px-3.5 md:px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap active:scale-95"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 dark:text-slate-400 hover:text-blue-600"
                      }`}
                    >
                      {cat.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeInsightPill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center px-4">
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                strokeWidth={2.5}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </FullWidth>
      </div>

      {/* POSTS */}
      <section className="pb-24">
        <FullWidth>
          {/* Count */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              {filtered.length} {filtered.length === 1 ? "Post" : "Posts"}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
          </div>

          {/* Featured post */}
          {featured && (
            <Reveal>
              <Link
                to={`/insights/${featured.slug}`}
                data-cursor="view"
                className="group block mb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500">
                  <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
                    <InsightImage
                      src={featured.coverImage}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent lg:bg-gradient-to-r pointer-events-none" />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.25em]">
                        Featured · {featured.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" strokeWidth={2.5} />
                          {formatDate(featured.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" strokeWidth={2.5} />
                          {featured.readingTime} min
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {featured.title}
                      </h2>

                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden">
                          <AuthorAvatar
                            src={featured.author.avatar}
                            alt={featured.author.name}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-900 dark:text-white">
                            {featured.author.name}
                          </p>
                          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                            {featured.author.role}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

                    {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {/* Removed AnimatePresence to fix the Vercel height glitch */}
            {rest.map((post, i) => (
              <motion.div
                key={`${activeCategory}-${searchQuery}-${post.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/insights/${post.slug}`}
                  data-cursor="view"
                  className="group block h-full"
                >
                  <article className="h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <InsightImage
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms]"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.25em]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                        <span>{formatDate(post.date)}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span>{post.readingTime} min read</span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3">
                        {post.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60">
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                          {post.author.name}
                        </span>
                        <ArrowRight
                          className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-2">
                No posts match your search
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
              >
                View all insights
              </button>
            </motion.div>
          )}
        </FullWidth>
      </section>
    </div>
  );
};

export default Insights;