import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Receipt,
  Shield,
  Users,
  Award,
  Building,
  Landmark,
  BarChart,
  Briefcase,
  Upload,
  ChevronDown,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { vendorDocuments, vendorFAQ } from "../data/vendorDocs";
import { usePageTitle } from "../hooks/usePageTitle";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

const iconMap = {
  file: FileText,
  receipt: Receipt,
  shield: Shield,
  users: Users,
  award: Award,
  building: Building,
  "building-2": Building,
  landmark: Landmark,
  "bar-chart": BarChart,
  briefcase: Briefcase,
  "shield-check": ShieldCheck,
};

const VendorFAQItem = ({ item, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/60 hover:border-blue-500/40 transition-colors"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-5 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug">
        {item.question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400"
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
          <div className="px-5 pb-5 pt-0">
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Vendors = () => {
  const [openFaq, setOpenFaq] = useState(null);
  usePageTitle("Vendor Registration");
  
  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
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
                  Vendor Registration
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
                Register as a{" "}
                <span className="text-slate-400 dark:text-slate-600">
                  Vendor.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Everything you need to register with ISC or respond to a vendor
                pre-qualification request.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* REQUIRED DOCS */}
      <section className="py-16 md:py-20">
        <FullWidth>
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <FileText className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  Required Documents
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {vendorDocuments.map((doc, i) => {
              const Icon = iconMap[doc.icon] || FileText;
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1.5 leading-tight">
                      {doc.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FullWidth>
      </section>

      {/* REGISTRATION FORM CTA */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900">
        <FullWidth>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                  <Upload className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                    Submit Your Documents
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                  Ready to Register?
                </h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                  Email your documents to our procurement team or use the form
                  below. We respond within 5–10 business days.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.a
                href="mailto:procurement@iscksa.com?subject=Vendor%20Registration%20-%20[Your%20Company%20Name]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex items-start gap-5 p-6 rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-black text-slate-900 dark:text-white mb-1">
                    Email Documents
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                    Send scanned copies to our procurement team.
                  </p>
                  <span className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    procurement@iscksa.com
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="tel:+966138962000"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group flex items-start gap-5 p-6 rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-black text-slate-900 dark:text-white mb-1">
                    Call Procurement
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                    Sunday–Thursday, 8 AM – 6 PM.
                  </p>
                  <span className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    +966 13 896 2000
                  </span>
                </div>
              </motion.a>
            </div>
          </div>
        </FullWidth>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <FullWidth>
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  Vendor FAQ
                </h3>
              </div>
            </Reveal>

            <div className="space-y-3">
              {vendorFAQ.map((item, i) => (
                <VendorFAQItem
                  key={i}
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </FullWidth>
      </section>
    </div>
  );
};

export default Vendors;