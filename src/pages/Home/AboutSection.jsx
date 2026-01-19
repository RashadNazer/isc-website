import React, { useState } from "react";
import { stats, aboutValues, certs } from "../../data/homeData"; 
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StatCounter, MagneticButton } from "../../components/UIComponents";

const AboutSection = () => {
  const [aboutTab, setAboutTab] = useState("mission");
  const tabs = ["mission", "vision", "values"];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 1. WHO WE ARE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center mb-20 md:mb-32">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-20 h-20 md:w-32 md:h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 animate-pulse"></div>
              
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
                Establishing Excellence Since 1980
              </h2>
              
              {/* text-balance ensures the headline wraps beautifully */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1] text-balance">
                Designed for Today,<br />
                <span className="text-blue-600">Ready for Tomorrow.</span>
              </h3>
              
              {/* text-justify combined with max-w-xl creates the "editorial block" look */}
              <div className="space-y-4 md:space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-left md:text-justify hyphens-auto max-w-xl">
                <p>
                  At <span className="font-bold text-slate-900 dark:text-slate-100">ISC</span>, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners by designing and maintaining <span className="font-semibold text-blue-900 dark:text-blue-300">Low Current Systems</span>.
                </p>
                <p>
                  As a leader with <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">40+ years</span> of rich experience in Saudi Arabia, we provide reliable systems and safe environments that empower infrastructure across the Kingdom.
                </p>
              </div>
            </div>
          </Reveal>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-8 md:p-10 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                  <StatCounter 
                    value={parseInt(stat.value)} 
                    suffix={stat.value.includes('+') ? "+" : ""} 
                    label={stat.label} 
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. MISSION/VISION/VALUES */}
        <Reveal y={50}>
          <div className="bg-slate-900 dark:bg-slate-900/50 rounded-[3rem] p-8 md:p-20 text-white relative shadow-2xl mb-20 md:mb-32 border border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none"></div>

            <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap gap-4 mb-12 border-b border-white/10 pb-8 scrollbar-hide">
              {tabs.map((tab) => (
                <MagneticButton key={tab}>
                  <button
                    onClick={() => setAboutTab(tab)}
                    className="relative px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-colors duration-300"
                  >
                    <span className={`relative z-10 ${aboutTab === tab ? "text-white" : "text-slate-500"}`}>
                      Our {tab}
                    </span>
                    {aboutTab === tab && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/40"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                </MagneticButton>
              ))}
            </div>

            <div className="min-h-[250px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={aboutTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {aboutTab === "values" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {aboutValues.map((v, i) => (
                        <div key={i} className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/5">
                          <div className="text-blue-500 font-black text-2xl">0{i+1}.</div>
                          <div className="font-bold text-xl">{v.title}</div>
                          {/* text-justify for smaller card descriptions */}
                          <div className="text-slate-400 text-sm leading-relaxed text-justify hyphens-auto">{v.desc}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="max-w-4xl">
                      <h4 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
                        {aboutTab === "mission" ? "Exceeding Expectations" : "Innovation & Leadership"}
                      </h4>
                      {/* Large text looks great justified when tracking-tight is applied */}
                      <p className="text-xl md:text-3xl text-slate-200 leading-snug font-light text-left md:text-justify hyphens-auto tracking-tight">
                        {aboutTab === "mission" 
                          ? "Serve the needs of our customers and exceeding their expectations with no short-cuts for a world-class solution, contribute to their success, and demonstrate professionalism across every touchpoint."
                          : "Aiming to be at the forefront and maintaining our leadership in the field of electronic integrated solutions, setting the standard for excellence and reliability in the industrial landscape."}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* 3. SUCCESS FORMULA */}
        <div className="mb-20 md:mb-32">
          <Reveal>
            <div className="text-center mb-16">
              <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Methodology</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white text-balance">The Success Formula</h4>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Customer-Centric", text: "We prioritize understanding unique needs and tailor technology to serve business objectives with precision." },
              { title: "Collaborative Culture", text: "We foster an environment where creativity thrives through open communication and shared expertise." },
              { title: "Agile Methodology", text: "Staying flexible allows us to deliver high-quality results efficiently in a rapidly changing market." },
              { title: "Network of Suppliers", text: "Partnering with industry leaders for a comprehensive portfolio of world-class solutions." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] hover:bg-blue-600 transition-all duration-500">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center font-black mb-8 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                    {i + 1}
                  </div>
                  <h5 className="font-bold text-xl mb-4 text-slate-900 dark:text-white group-hover:text-white">{item.title}</h5>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-blue-100 text-justify hyphens-auto">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4. CERTIFICATES */}
        <div className="mt-32 pt-24 border-t border-slate-100 dark:border-slate-800">
          <Reveal>
            <div className="text-center mb-24">
              <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Trust & Compliance</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Our Certifications</h4>
            </div>
          </Reveal>

          <div className="space-y-40">
            {/* HCIS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="space-y-6">
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">Approved HCIS Contractor</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl text-left md:text-justify hyphens-auto">
                    Since 2018, ISC has met the stringent standards set by the <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500/30">HCIS</span>. We are trusted to provide security and fire protection for critical industrial sectors across the region.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="relative p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                    <img 
                      src={certs.hcis} 
                      alt="HCIS Certificate" 
                      className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ISO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Reveal delay={0.2}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                      <img 
                        src={certs.isoFull} 
                        alt="ISO Certifications" 
                        className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000" 
                      />
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="order-1 lg:order-2 space-y-10">
                <Reveal>
                  <div className="space-y-6">
                    <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">International ISO Standards</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-lg text-left md:text-justify hyphens-auto">
                      Our commitment to global quality management, environmental safety, and occupational health defines our operational DNA.
                    </p>
                  </div>
                </Reveal>

                <div className="space-y-6">
                  {[
                    { title: "ISO 9001:2015", desc: "Quality Management System", icon: certs.isoIcons[0] },
                    { title: "ISO 14001:2015", desc: "Environmental Management System", icon: certs.isoIcons[1] },
                    { title: "ISO 45001:2018", desc: "Occupational Health & Safety", icon: certs.isoIcons[2] }
                  ].map((item, i) => (
                    <Reveal key={i} delay={0.1 * i}>
                      <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all group/item">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <img src={item.icon} alt={item.title} className="h-10 md:h-12 w-auto object-contain" />
                        </div>
                        <div>
                          <p className="text-blue-600 dark:text-blue-400 font-black text-sm tracking-tighter">{item.title}</p>
                          <p className="text-slate-700 dark:text-slate-300 font-medium text-lg">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;