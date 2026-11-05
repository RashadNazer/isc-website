import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Tag, Layers, ArrowRight } from "lucide-react";

const PartnerModal = ({ partner, onClose }) => {
  useEffect(() => {
    if (!partner) return;
    document.body.style.overflow = "hidden";
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handler);
    };
  }, [partner, onClose]);

  if (!partner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md"
      />
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>

          <div className="overflow-y-auto">
            {/* Logo hero */}
            <div className="relative h-[220px] md:h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-10 border-b border-slate-100 dark:border-slate-800">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-32 max-w-[70%] object-contain"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em]">
                  {partner.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                  {partner.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                  {partner.desc}
                </p>
              </div>

              {partner.specialties && partner.specialties.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" strokeWidth={2.5} />
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider"
                      >
                        <Tag className="w-3 h-3" strokeWidth={3} />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 dark:border-slate-900">
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.15em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                >
                  Visit Partner Site
                  <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PartnerModal;