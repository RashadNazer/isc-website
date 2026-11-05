import React, { useState } from "react";
import { stats, aboutValues, certs } from "../data/homeData";
import { motion } from "framer-motion";
import { Reveal } from "../components/UIComponents";
import officeAbout from "../assets/office_about.jpg";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  CheckCircle2,
  Download,
  FileText,
} from "lucide-react";

/* Full-width wrapper */
const FullBleed = ({ children, className = "" }) => (
  <div className={`w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}>
    {children}
  </div>
);

/* =========================================================
   SmoothImage — blur-in loader
   ========================================================= */
const SmoothImage = ({ src, alt, className, hoverGrayscale = false, fit = "cover" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8 }}
        className={`w-full h-full ${
          fit === "contain" ? "object-contain" : "object-cover"
        } transition-[filter] duration-700 ${
          hoverGrayscale ? "grayscale group-hover:grayscale-0" : ""
        }`}
      />
    </div>
  );
};

const ValuePanel = ({ value, index }) => {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((prev) => !prev)}
      animate={{ flex: active ? 3 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative overflow-hidden rounded-[2.5rem] cursor-pointer bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group"
    >
      <motion.div
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500"
      />
      <motion.div
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
        transition={{ duration: 0.6 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"
      />
      <div className="absolute top-8 left-8 z-10">
        <span className="text-blue-600 dark:text-blue-400 font-black text-4xl md:text-5xl">
          0{index + 1}
        </span>
      </div>
      <motion.div
        animate={{ opacity: active ? 0 : 1, x: active ? -20 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <span
          className="text-slate-900 dark:text-white font-bold text-lg whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {value.title}
        </span>
      </motion.div>
      <motion.div
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
        transition={{ duration: 0.4, delay: active ? 0.15 : 0 }}
        className="absolute inset-0 flex flex-col justify-end p-8 z-20 pointer-events-none"
      >
        <h5 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
          {value.title}
        </h5>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-sm">
          {value.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

const CertificateFrame = ({ src, alt, accent = "blue", maxWidth = "max-w-3xl" }) => {
  const [hovered, setHovered] = useState(false);
  const accentMap = {
    blue: {
      ring: "ring-blue-500/20",
      glow: "bg-blue-500/20",
      corner: "border-blue-600",
      scan: "from-transparent via-blue-400/60 to-transparent",
    },
    emerald: {
      ring: "ring-emerald-500/20",
      glow: "bg-emerald-500/20",
      corner: "border-emerald-600",
      scan: "from-transparent via-emerald-400/60 to-transparent",
    },
  };
  const a = accentMap[accent] || accentMap.blue;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group w-full ${maxWidth} mx-auto`}
    >
      <div
        className={`absolute -inset-8 ${a.glow} blur-3xl rounded-full pointer-events-none opacity-60`}
      />
      <div
        className={`relative p-3 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 ring-1 ${a.ring} shadow-2xl`}
      >
        {[
          "top-2 left-2 border-t-2 border-l-2",
          "top-2 right-2 border-t-2 border-r-2",
          "bottom-2 left-2 border-b-2 border-l-2",
          "bottom-2 right-2 border-b-2 border-r-2",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute w-5 h-5 ${pos} ${a.corner} rounded-sm opacity-60 pointer-events-none`}
          />
        ))}

        <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-white dark:bg-slate-950">
          <SmoothImage
            src={src}
            alt={alt}
            fit="contain"
            hoverGrayscale
            className="absolute inset-0 w-full h-full rounded-[2rem] !bg-white dark:!bg-slate-950"
          />

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: hovered ? "100%" : "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute inset-x-0 h-[3px] bg-gradient-to-r ${a.scan} pointer-events-none`}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.25) 100%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const ISOPillar = ({ title, desc, icon, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((prev) => !prev)}
      className="relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <div
        className={`relative p-5 flex items-center gap-5 transition-all duration-500 rounded-2xl border ${
          open
            ? "bg-white dark:bg-slate-900 border-blue-500/40 shadow-xl shadow-blue-500/10"
            : "bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 hover:border-blue-500/30"
        }`}
      >
        <motion.div
          animate={{ rotate: open ? 6 : 0, scale: open ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden"
        >
          <SmoothImage
            src={icon}
            alt={title}
            className="h-10 w-10 object-contain bg-transparent"
          />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <motion.div
              animate={{ scale: open ? 1 : 0.8, opacity: open ? 1 : 0.6 }}
              className="text-blue-600 dark:text-blue-400"
            >
              <CheckCircle2 size={16} strokeWidth={3} />
            </motion.div>
            <p className="text-blue-600 dark:text-blue-400 font-black text-sm tracking-tight">
              {title}
            </p>
          </div>
          <p className="text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base leading-snug">
            {desc}
          </p>
        </div>
        <motion.div
          animate={{
            scale: open ? 1.4 : 1,
            backgroundColor: open ? "#2563eb" : "#94a3b8",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: open ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-600 to-indigo-500"
        />
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  usePageTitle("About Us");
  const methodology = [
    {
      title: "Customer-Centric",
      text: "We prioritize understanding unique needs and tailor technology to serve business objectives with precision.",
    },
    {
      title: "Collaborative Culture",
      text: "We foster an environment where creativity thrives through open communication and shared expertise.",
    },
    {
      title: "Agile Methodology",
      text: "Staying flexible allows us to deliver high-quality results efficiently in a rapidly changing market.",
    },
    {
      title: "Network of Suppliers",
      text: "Partnering with industry leaders for a comprehensive portfolio of world-class solutions.",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 w-full">
      {/* =========================================================
          SECTION 1: HERO — Landscape image + single-column text
          ========================================================= */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 relative overflow-hidden">
        <FullBleed>
          {/* ---------- LANDSCAPE IMAGE BANNER (taller) ---------- */}
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 md:mb-16">
              <SmoothImage
                src={officeAbout}
                alt="ISC Office"
                className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/7] max-h-[680px]"
              />

              {/* Dark gradient overlay for readability of the badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Corner accent glow */}
              <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

              {/* 40+ years badge — pinned bottom-left of the image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-blue-900/90 backdrop-blur-xl text-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-black leading-none">
                  40<span className="text-blue-400">+</span>
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold opacity-80 mt-2">
                  Years of
                  <br />
                  Experience
                </div>
              </motion.div>

              {/* Optional brand badge — top-right of image */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                  Since 1984
                </span>
              </div>
            </div>
          </Reveal>

                    {/* ---------- TWO-COLUMN TEXT LAYOUT — fills the width ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* LEFT: title + lead paragraph + download */}
            <div className="lg:col-span-7">
              <Reveal>
                <h3 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.4em]">
                  Who We Are
                </h3>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mt-4">
                  Innovating for a{" "}
                  <span className="text-blue-600">Safer</span> Tomorrow
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base md:text-lg xl:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mt-8">
                  At International Security & Communications Company (
                  <span className="font-bold text-slate-900 dark:text-white">
                    ISC
                  </span>
                  ), we continue to adapt state-of-the-art technology,
                  methodology, and practices, helping project owners and end
                  users by designing, installing, and maintaining a variety of
                  solutions for various{" "}
                  <span className="text-blue-600 font-semibold">
                    Low Current Systems
                  </span>
                  .
                </p>
              </Reveal>

              {/* Download Company Profile */}
              <Reveal delay={0.3}>
                <a
                  href="/ISC_CompanyProfile.pdf"
                  download="ISC_CompanyProfile.pdf"
                  className="group inline-flex items-center gap-3 mt-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-5 py-3.5 md:px-6 md:py-4 rounded-2xl hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FileText className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-0.5">
                      Download PDF
                    </p>
                    <p className="text-sm font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Company Profile
                    </p>
                  </div>
                  <Download
                    className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    strokeWidth={2.5}
                  />
                </a>
              </Reveal>
            </div>

            {/* RIGHT: quote + closing paragraph as a sidebar */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal delay={0.3}>
                <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border-l-4 border-blue-600 shadow-sm">
                  <p className="text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed text-base md:text-lg">
                    "Complete offering from optimum proposals that anticipate
                    the next generation of Technology... solutions Designed for
                    Today, Ready for Tomorrow."
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-sm md:text-base xl:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-8">
                  As a leader with 40+ years of rich experience in the field of
                  system integration in the Kingdom of Saudi Arabia, we strive
                  to provide reliable systems, safe and secure environments so
                  you can focus on what is important to you.
                </p>
              </Reveal>
            </div>
          </div>
        </FullBleed>
      </section>

      {/* SECTION 2: MISSION & VISION */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <FullBleed>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Reveal y={40}>
              <div className="group h-full p-8 md:p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Target size={32} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                    Our Mission
                  </h2>
                  <h4 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                    Exceeding Expectations
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Serve the needs of our customers and exceeding their
                    expectations with no short-cuts, maintaining highest
                    quality standards and international best practices in every
                    project we undertake.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal y={40} delay={0.2}>
              <div className="group h-full p-8 md:p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Eye size={32} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                    Our Vision
                  </h2>
                  <h4 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                    Innovation & Leadership
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Aiming to be at the forefront and maintaining our
                    leadership in the security and communications industry
                    through continuous innovation and commitment to excellence
                    across the Kingdom.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </FullBleed>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="py-20 md:py-24">
        <FullBleed>
          <Reveal center>
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Core Values
              </h2>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                What We Stand For
              </h4>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex gap-3 h-[420px]"
          >
            {aboutValues.map((v, i) => (
              <ValuePanel key={i} value={v} index={i} />
            ))}
          </motion.div>

          <div className="md:hidden grid grid-cols-1 gap-4">
            {aboutValues.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="text-blue-600 font-black text-3xl mb-3">
                  0{i + 1}
                </div>
                <h5 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                  {v.title}
                </h5>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </FullBleed>
      </section>

      {/* SECTION 4: METHODOLOGY */}
      <section className="pb-24 md:pb-32">
        <FullBleed>
          <div className="mb-24 md:mb-32">
            <Reveal>
              <div className="text-center mb-20">
                <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">
                  Our Methodology
                </h3>
                <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  The Success Formula
                </h4>
              </div>
            </Reveal>

            <div className="relative">
              <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] z-0">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full origin-left bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                {methodology.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.15,
                      ease: [0.21, 0.45, 0.32, 0.9],
                    }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="relative w-24 h-24 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500 z-10"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-600/50"
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                      <span className="text-3xl font-black text-blue-600">
                        {i + 1}
                      </span>
                    </motion.div>
                    <h5 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FullBleed>
      </section>

      {/* SECTION 5: CERTIFICATIONS */}
      <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <FullBleed className="relative z-10">
          <Reveal center>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-600/20">
                <Award className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Trust & Compliance
                </span>
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                Our Certifications
              </h4>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                    Since 2018
                  </span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mt-6">
                  Approved HCIS Contractor
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mt-6">
                  Since 2018, ISC has met the stringent standards set by the{" "}
                  <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500/30 underline-offset-4">
                    High Commission for Industrial Security
                  </span>
                  . We are trusted to provide security and fire protection for
                  critical industrial sectors across the region.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <CertificateFrame
                src={certs.hcis}
                alt="HCIS Certificate"
                accent="emerald"
                maxWidth="max-w-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <CertificateFrame
                src={certs.isoFull}
                alt="ISO Certifications"
                accent="blue"
                maxWidth="max-w-2xl"
              />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                  <ShieldCheck
                    className="w-3.5 h-3.5 text-blue-600"
                    strokeWidth={3}
                  />
                  <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    Globally Recognized
                  </span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mt-6">
                  International ISO Standards
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mt-6">
                  Our commitment to global quality management, environmental
                  safety, and occupational health defines our operational DNA.
                </p>
              </Reveal>

              <div className="space-y-3">
                {[
                  {
                    title: "ISO 9001:2015",
                    desc: "Quality Management System",
                    icon: certs.isoIcons[0],
                  },
                  {
                    title: "ISO 14001:2015",
                    desc: "Environmental Management System",
                    icon: certs.isoIcons[1],
                  },
                  {
                    title: "ISO 45001:2018",
                    desc: "Occupational Health & Safety",
                    icon: certs.isoIcons[2],
                  },
                ].map((item, i) => (
                  <ISOPillar
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    icon={item.icon}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </FullBleed>
      </section>
    </div>
  );
};

export default AboutPage;