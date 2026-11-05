import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Layers,
  Building2,
  CheckCircle2,
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Lock body scroll while modal open
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Escape key to close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!project) return null;

  const gallery = project.gallery?.length
    ? project.gallery
    : project.image
    ? [project.image]
    : [];
  const hasGallery = gallery.length > 0;

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + gallery.length) % gallery.length
    );

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[500] bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[510] flex items-center justify-center p-4 pt-24 md:p-8 md:pt-28 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>

              <div className="overflow-y-auto">
                {/* Gallery / Hero Image */}
                {hasGallery ? (
                  <div className="relative h-[280px] md:h-[400px] bg-slate-900 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={gallery[currentImage]}
                        alt={`${project.name} - image ${currentImage + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Nav arrows (only if multiple images) */}
                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          aria-label="Previous image"
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                        <button
                          onClick={nextImage}
                          aria-label="Next image"
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
                        >
                          <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                      </>
                    )}

                    {/* Dots */}
                    {gallery.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {gallery.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            aria-label={`Go to image ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                              i === currentImage
                                ? "w-6 bg-white"
                                : "w-1.5 bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                      <span className="text-[10px] font-black text-white uppercase tracking-[0.25em]">
                        {project.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-[200px] bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/20 flex items-center justify-center">
                    <Building2
                      className="w-16 h-16 text-slate-600"
                      strokeWidth={1.5}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-10 space-y-8">
                  {/* Header */}
                  <div>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                      {project.name}
                    </h2>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <MapPin
                          className="w-4 h-4 text-blue-600"
                          strokeWidth={2.5}
                        />
                        <span className="font-bold uppercase tracking-wider">
                          {project.city}
                          {project.region ? `, ${project.region}` : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Calendar
                          className="w-4 h-4 text-blue-600"
                          strokeWidth={2.5}
                        />
                        <span className="font-bold uppercase tracking-wider">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {project.description && (
                    <div>
                      <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-3">
                        About This Project
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>
                    </div>
                  )}

                  {/* Systems / Scope */}
                  {project.systems && project.systems.length > 0 && (
                    <div>
                      <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Systems Deployed
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.systems.map((sys, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider"
                          >
                            <CheckCircle2
                              className="w-3 h-3"
                              strokeWidth={3}
                            />
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extra details grid */}
                  {(project.client || project.duration) && (
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 dark:border-slate-900">
                      {project.client && (
                        <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">
                            Client
                          </p>
                          <p className="font-bold text-slate-900 dark:text-white">
                            {project.client}
                          </p>
                        </div>
                      )}
                      {project.duration && (
                        <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">
                            Duration
                          </p>
                          <p className="font-bold text-slate-900 dark:text-white">
                            {project.duration}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;