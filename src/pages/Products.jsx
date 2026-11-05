import React, { useState, useMemo } from "react";
import { partnerData } from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  Shield,
  Flame,
  Cpu,
  Radio,
  Sparkles,
  Building2,
  Package,
} from "lucide-react";
import Aurora from "../component/Aurora";
import SplitText from "../component/SplitText";

import FeaturedPartnerCard from "../components/products/FeaturedPartnerCard";
import CompactPartnerCard from "../components/products/CompactPartnerCard";
import PartnerModal from "../components/products/PartnerModal";

/* Full-width wrapper */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const categoryConfig = {
  Security: { icon: Shield, label: "Security & Access" },
  Fire: { icon: Flame, label: "Life Safety & Fire" },
  ICT: { icon: Cpu, label: "ICT Systems" },
  TETRA: { icon: Radio, label: "TETRA Systems" },
};

const getCategoryMeta = (cat) =>
  categoryConfig[cat] || { icon: Package, label: cat };

export default function PartnersPage() {
  usePageTitle("Products & Partners");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPartner, setSelectedPartner] = useState(null);

  const categories = [
    { id: "All", label: "All Products", icon: Sparkles },
    { id: "Security", label: "Security", icon: Shield },
    { id: "Fire", label: "Fire & Safety", icon: Flame },
    { id: "ICT", label: "ICT Systems", icon: Cpu },
    { id: "TETRA", label: "TETRA", icon: Radio },
  ];

  const filteredPartners = useMemo(() => {
    return activeFilter === "All"
      ? partnerData
      : partnerData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featuredPartners = useMemo(() => {
    const featured = filteredPartners.filter((p) => p.featured);
    if (featured.length > 0) return featured;
    return filteredPartners.slice(0, 2);
  }, [filteredPartners]);

  const remainingPartners = useMemo(
    () => filteredPartners.slice(2),
    [filteredPartners]
  );

  const groupedRemaining = useMemo(() => {
    const groups = {};
    remainingPartners.forEach((partner) => {
      const key = partner.category || "General";
      if (!groups[key]) groups[key] = [];
      groups[key].push(partner);
    });
    return groups;
  }, [remainingPartners]);

  const categoryCounts = useMemo(() => {
    const counts = { All: partnerData.length };
    partnerData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30">
        <Aurora
          colorStops={["#020617", "#2563eb", "#93c5fd"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
      </div>

      <FullWidth className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="mb-3">
            <SplitText
              text="Advanced Portfolio"
              className="text-blue-600 dark:text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]"
              delay={30}
            />
          </div>

          <div className="mb-4 md:mb-8">
            <SplitText
              text="Our Technology Solutions"
              className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight"
              delay={50}
              textAlign="center"
            />
          </div>

          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
            We partner with{" "}
            <span className="text-blue-900 dark:text-blue-400 font-bold">
              industry-leading manufacturers
            </span>{" "}
            to deliver world-class solutions for critical industrial sectors.
          </p>

          <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-x-10 md:gap-x-16 gap-y-6">
            {[
              { value: `${partnerData.length}+`, label: "Global Brands" },
              { value: "04", label: "Product Categories" },
              { value: "100%", label: "Authorized Dealer" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FILTER BAR */}
        <div className="sticky top-[70px] md:top-24 z-30 mb-12 md:mb-16">
          <div className="flex justify-center overflow-x-auto no-scrollbar">
            <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-xl inline-flex">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className="relative px-3.5 md:px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap active:scale-95"
                  >
                    <span
                      className={`relative z-10 flex items-center gap-1.5 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 dark:text-slate-400 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                      {cat.label}
                      <span
                        className={`text-[9px] opacity-70 ${
                          isActive ? "opacity-100" : ""
                        }`}
                      >
                        ({categoryCounts[cat.id] || 0})
                      </span>
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="partnerFilterPill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30"
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
        </div>

        {/* FEATURED PARTNERS */}
        {featuredPartners.length > 0 && (
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <Sparkles
                  className="w-3.5 h-3.5 text-blue-600"
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  Featured Partners
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`featured-${activeFilter}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"
              >
                {featuredPartners.map((partner, i) => (
                  <FeaturedPartnerCard
                    key={partner.id}
                    partner={partner}
                    index={i}
                    onSelect={setSelectedPartner}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* FULL ROSTER */}
        {remainingPartners.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Package
                  className="w-3.5 h-3.5 text-slate-500"
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.3em]">
                  {activeFilter === "All"
                    ? "All Partners"
                    : `${getCategoryMeta(activeFilter).label}`}
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </motion.div>

            {activeFilter === "All" ? (
              <div className="space-y-14">
                {Object.entries(groupedRemaining).map(([category, partners]) => {
                  const meta = getCategoryMeta(category);
                  const Icon = meta.icon;
                  return (
                    <div key={category}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Icon className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                            {meta.label}
                          </h3>
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                            {partners.length}{" "}
                            {partners.length === 1 ? "Partner" : "Partners"}
                          </p>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5">
                        <AnimatePresence mode="popLayout">
                          {partners.map((partner, idx) => (
                            <CompactPartnerCard
                              key={partner.id}
                              partner={partner}
                              index={idx}
                              onSelect={setSelectedPartner}
                            />
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5">
                <AnimatePresence mode="popLayout">
                  {remainingPartners.map((partner, idx) => (
                    <CompactPartnerCard
                      key={partner.id}
                      partner={partner}
                      index={idx}
                      onSelect={setSelectedPartner}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}

        {/* EMPTY STATE */}
        <AnimatePresence>
          {filteredPartners.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-20 px-6"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <Package className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-3">
                No partners match this category.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
              >
                View All Partners
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </FullWidth>

      <PartnerModal
        partner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
    </div>
  );
}