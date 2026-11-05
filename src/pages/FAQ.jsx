import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Sparkles, Mail, Phone, Headphones, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { faqs, faqCategories } from "../data/faqs";
import { usePageTitle } from "../hooks/usePageTitle";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="group border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/60 hover:border-blue-500/40 transition-colors"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug">
        {faq.question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"
      >
        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  usePageTitle("FAQ");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    let result = faqs;
    if (activeCategory !== "All") {
      result = result.filter((f) => f.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      {/* FIX: Added overflow-hidden to prevent right-side scrollbar gap */}
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
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  FAQ & Help Center
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                How Can We{" "}
                <span className="text-slate-400 dark:text-slate-600">Help?</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Answers to the most common questions we get about our services,
                support, and team.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* SEARCH + FILTER */}
      <div className="sticky top-20 md:top-24 z-30 mb-10 w-full max-w-[100vw] overflow-hidden">
        <FullWidth className="flex flex-col gap-3">
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex justify-center min-w-max px-4">
              <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 rounded-full shadow-xl inline-flex">
                {faqCategories.map((cat) => {
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
                          layoutId="activeFaqPill"
                          className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"
                          transition={{ type: "spring", stiffness: 260, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center px-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" strokeWidth={2.5} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 text-sm font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </FullWidth>
      </div>

      {/* FAQS */}
      <section className="pb-20">
        <FullWidth>
          <div className="max-w-4xl mx-auto">
            {filtered.length > 0 ? (
              <div className="space-y-3">
                {filtered.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-2">
                  No questions match your search
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
                >
                  View all questions
                </button>
              </motion.div>
            )}
          </div>
        </FullWidth>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900">
        <FullWidth>
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                Still Have Questions?
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Our team is ready to help with anything else you need.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Headphones,
                title: "Talk to Sales",
                desc: "For new projects and general enquiries.",
                cta: "Contact Sales",
                href: "mailto:sales@iscksa.com",
                accent: "blue",
              },
              {
                icon: Mail,
                title: "Email Support",
                desc: "For existing clients and contract holders.",
                cta: "Email Support",
                href: "mailto:service@iscksa.com",
                accent: "emerald",
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "Sunday–Thursday, 8 AM – 5 PM.",
                cta: "+966 13 896 2000",
                href: "tel:+966138962000",
                accent: "amber",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={i}
                  href={card.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-7 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {card.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {card.cta}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <Link
                to="/enquiry"
                data-cursor="hover"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-600/20"
              >
                <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                Submit a Project Enquiry
              </Link>
            </div>
          </Reveal>
        </FullWidth>
      </section>
    </div>
  );
};

export default FAQ;