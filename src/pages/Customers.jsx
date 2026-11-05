import React, { useState, useMemo, useRef } from "react";
import { customerData } from "../data/customers";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/UIComponents";
import { ArrowRight, Sparkles, Building2, Zap, Heart } from "lucide-react";
import Aurora from "../component/Aurora";
import { usePageTitle } from "../hooks/usePageTitle";
import SplitText from "../component/SplitText";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-4 md:px-6 lg:px-8 xl:px-12 ${className}`}>
    {children}
  </div>
);

/* =========================================================
   LogoImage — optimized lazy logo loader
   ========================================================= */
const LogoImage = ({ src, alt, size = "default" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sizes = {
    default: "h-12 md:h-16 max-w-[100px] md:max-w-[130px]",
    large: "h-16 md:h-24 max-w-[140px] md:max-w-[200px]",
    small: "h-8 md:h-10 max-w-[80px] md:max-w-[100px]",
  };

  return (
    <div
      className={`relative ${sizes[size]} w-full flex items-center justify-center`}
    >
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? "blur(0px)" : "blur(5px)",
        }}
        transition={{ duration: 0.5 }}
        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-blue-500/10 border-t-blue-500/40 animate-spin" />
        </div>
      )}
    </div>
  );
};

const FeaturedCard = ({ client, index, featured = false }) => {
  const ref = useRef(null);

  return (
    <motion.a
      ref={ref}
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col items-center justify-center text-center p-8 md:p-10 ${
        featured ? "md:col-span-2 md:row-span-2 md:min-h-[420px]" : "md:min-h-[200px]"
      }`}
    >
      <div className="absolute -inset-20 bg-blue-500/0 group-hover:bg-blue-500/[0.08] blur-3xl rounded-full transition-all duration-700 pointer-events-none" />

      <div className="absolute top-6 left-6 z-10">
        <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
          {client.category === "Petrochemical" ? "Oil & Gas" : client.category}
        </span>
      </div>

      {featured && (
        <div className="absolute top-6 right-6 z-10">
          <Sparkles className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
        </div>
      )}

      <div className={`relative w-full flex items-center justify-center mb-6 ${
        featured ? "h-24 md:h-32" : "h-16 md:h-20"
      }`}>
        <LogoImage
          src={client.logo}
          alt={client.name}
          size={featured ? "large" : "default"}
        />
      </div>

      <div className="relative w-full">
        <p className={`font-black text-slate-900 dark:text-white tracking-tight mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
          featured ? "text-xl md:text-2xl" : "text-sm md:text-base"
        }`}>
          {client.name}
        </p>
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          Visit
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.a>
  );
};

const CompactClientCard = ({ client, index }) => (
  <motion.a
    href={client.url}
    target="_blank"
    rel="noopener noreferrer"
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
    className="group relative overflow-hidden bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/50 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500 flex flex-col items-center justify-center h-[120px] md:h-[150px] transform-gpu"
  >
    <LogoImage src={client.logo} alt={client.name} size="small" />
    <p className="mt-3 text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-[0.15em] line-clamp-1 text-center">
      {client.name}
    </p>
  </motion.a>
);

const SectorHeader = ({ label, count, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="flex items-center gap-5 mb-8 md:mb-10"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
      <Icon className="w-5 h-5" strokeWidth={2.5} />
    </div>
    <div>
      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
        {label}
      </h3>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mt-0.5">
        {count} {count === 1 ? "Client" : "Clients"}
      </p>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
  </motion.div>
);

/* =========================================================
   MAIN PAGE
   ========================================================= */
export default function CustomersPage() {
  usePageTitle("Clients");
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(15);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: "All", label: "All Clients", icon: Sparkles },
    { id: "Petrochemical", label: "Oil & Gas", icon: Zap },
    { id: "Hospital", label: "Healthcare", icon: Heart },
    { id: "General", label: "General Contracting", icon: Building2 },
  ];

  const filteredCustomers = useMemo(
    () =>
      activeFilter === "All"
        ? customerData
        : customerData.filter((c) => c.category === activeFilter),
    [activeFilter]
  );

  const featuredClients = useMemo(() => {
    const featured = filteredCustomers.filter(c => c.featured);
    const rest = filteredCustomers.filter(c => !c.featured);
    return [...featured, ...rest].slice(0, 5);
  }, [filteredCustomers]);

  const remainingClients = useMemo(
    () => filteredCustomers.slice(6),
    [filteredCustomers]
  );
  const displayedRemaining = remainingClients.slice(0, visibleCount - 6);
  const hasMore = visibleCount - 6 < remainingClients.length;

  const groupedRemaining = useMemo(() => {
    const groups = {};
    displayedRemaining.forEach((client) => {
      const key = client.category || "General";
      if (!groups[key]) groups[key] = [];
      groups[key].push(client);
    });
    return groups;
  }, [displayedRemaining]);

  const sectorMeta = {
    Petrochemical: { label: "Oil & Gas & Petrochemical", icon: Zap },
    Hospital: { label: "Healthcare & Hospitals", icon: Heart },
    General: { label: "General Contracting", icon: Building2 },
  };

  const smoothTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  return (
    <div className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-40 pointer-events-none">
        <Aurora
          colorStops={["#2563eb", "#1e40af", "#60a5fa"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
      </div>

      <FullWidth className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <Reveal>
            <div className="mb-4">
              <SplitText
                text="Partnerships"
                className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em]"
                delay={20}
              />
            </div>
            <div className="mb-4 md:mb-6">
              <SplitText
                text="Our Valued Clients"
                className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter"
                delay={40}
                duration={0.8}
                textAlign="center"
              />
            </div>
            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Trusted by the Kingdom's most vital organizations across
              petrochemical, healthcare, and infrastructure sectors.
            </p>
          </Reveal>
        </div>

        {/* STICKY FILTER BAR */}
        <div className="sticky top-[70px] md:top-24 z-30 mb-12 md:mb-16">
          <div className="flex justify-center">
            <div className="w-full md:w-auto bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 p-1.5 rounded-2xl md:rounded-full shadow-lg">
              <div className="flex flex-row overflow-x-auto no-scrollbar gap-1 px-1 py-1">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveFilter(cat.id);
                        setVisibleCount(15);
                      }}
                      className="relative px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-full text-[10px] md:text-xs font-black transition-colors whitespace-nowrap flex-shrink-0 active:scale-95"
                    >
                      <span
                        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {cat.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeFilterPill"
                          className="absolute inset-0 bg-blue-600 rounded-xl md:rounded-full shadow-lg shadow-blue-500/20"
                          transition={smoothTransition}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED CLIENTS */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  Featured Partners
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-5"
            >
              {featuredClients.map((client, i) => {
                const isLarge = i === 0;
                return (
                  <FeaturedCard
                    key={client.id}
                    client={client}
                    index={i}
                    featured={isLarge}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FULL ROSTER */}
        {displayedRemaining.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" strokeWidth={2.5} />
                  <span className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.3em]">
                    Full Roster
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
              </div>
            </Reveal>

            <div className="space-y-16">
              {Object.entries(groupedRemaining).map(([sector, clients]) => {
                const meta = sectorMeta[sector] || {
                  label: sector,
                  icon: Building2,
                };
                return (
                  <div key={sector}>
                    <SectorHeader
                      label={meta.label}
                      count={clients.length}
                      icon={meta.icon}
                    />
                    <motion.div
                      layout
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4"
                    >
                      <AnimatePresence mode="popLayout">
                        {clients.map((client, index) => (
                          <CompactClientCard
                            key={client.id}
                            client={client}
                            index={index}
                          />
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* LOAD MORE */}
        {hasMore && (
          <div className="mt-12 md:mt-16 flex justify-center">
            <Reveal delay={0.1}>
              <button
                onClick={() => setVisibleCount((prev) => prev + 15)}
                className="group flex items-center justify-center gap-3 bg-slate-900 dark:bg-white px-10 py-5 rounded-2xl text-white dark:text-slate-950 font-black text-sm uppercase tracking-[0.15em] transition-all active:scale-95 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
              >
                Load More Partners
                <motion.svg
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
            </Reveal>
          </div>
        )}

        {/* EMPTY STATE */}
        {filteredCustomers.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 md:py-32"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-slate-400" />
            </div>
            <p className="text-slate-400 dark:text-slate-600 font-black italic tracking-widest uppercase text-xs">
              No clients found in this category.
            </p>
          </motion.div>
        )}
      </FullWidth>
    </div>
  );
}