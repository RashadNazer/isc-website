import React, { useRef, useState } from "react"; // Added useState
import { stats, aboutValues, certs } from "../../data/homeData"; 
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Reveal, StatCounter } from "../../components/UIComponents";

// REUSABLE SMOOTH IMAGE COMPONENT
const SmoothImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

 // --- OPTIMIZED TRANSFORMATIONS (NO OVERLAP) ---

  // Phase 1: Mission
  // Solid from 0 to 0.2, then completely GONE by 0.3.
  const missionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const missionY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Phase 2: Vision
  // Stays GONE (0) until 0.35 (after Mission is dead), then solid by 0.45.
  // Fades out completely by 0.65.
  const visionOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
  const visionY = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [100, 0, 0, -100]);

  // Phase 3: Values
  // Stays GONE (0) until 0.75 (after Vision is dead), then solid by 0.85.
  const valuesOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const valuesY = useTransform(scrollYProgress, [0.75, 0.85], [100, 0]);

  const sections = [
    { 
      id: "mission", 
      title: "Our Mission", 
      subtitle: "Exceeding Expectations", 
      text: "Serve the needs of our customers and exceeding their expectations with no short-cuts for a world-class solution, contribute to their success, and demonstrate professionalism across every touchpoint.",
      opacity: missionOpacity,
      y: missionY
    },
    { 
      id: "vision", 
      title: "Our Vision", 
      subtitle: "Innovation & Leadership", 
      text: "Aiming to be at the forefront and maintaining our leadership in the field of electronic integrated solutions, setting the standard for excellence and reliability in the industrial landscape.",
      opacity: visionOpacity,
      y: visionY
    }
  ];

  return (
    <section id="about" className="relative bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        
        {/* SECTION 1: HEADER & STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center mb-16 md:mb-32">
            <Reveal>
              <h3 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Designed for Today, <br className="hidden md:block" />
                <span className="text-blue-600">Ready for Tomorrow.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-justify">
                At <span className="font-bold text-slate-900 dark:text-slate-100">ISC</span>, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners by designing and maintaining <span className="font-semibold text-blue-900 dark:text-blue-300">Low Current Systems</span>.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
               {stats.map((stat, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl md:rounded-3xl border border-slate-100 dark:border-slate-800"
                 >
                    <StatCounter value={parseInt(stat.value)} suffix="+" label={stat.label} />
                 </motion.div>
               ))}
            </div>
        </div>

        {/* SECTION 2: INTERACTIVE STICKY SLIDER */}
        <div ref={containerRef} className="relative h-auto lg:h-[250vh] mb-20">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
            <div className="w-full bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] pointer-events-none"></div>

              {/* DESKTOP CONTENT */}
              <div className="hidden lg:block relative h-[450px]">
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    style={{ opacity: section.opacity, y: section.y, willChange: "opacity, transform" }}
                    transition={{ ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <h2 className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-4">{section.title}</h2>
                    <h4 className="text-4xl md:text-5xl font-bold mb-6 text-white">{section.subtitle}</h4>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-4xl">{section.text}</p>
                  </motion.div>
                ))}

                <motion.div
                  style={{ opacity: valuesOpacity, y: valuesY, willChange: "opacity, transform" }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <h2 className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-8">Our Values</h2>
                  <div className="grid grid-cols-3 gap-6">
                    {aboutValues.map((v, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="text-blue-500 font-black text-2xl mb-2">0{i+1}.</div>
                        <div className="font-bold text-lg mb-1">{v.title}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{v.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* MOBILE CONTENT */}
              <div className="lg:hidden space-y-12 relative z-10">
                {sections.map((section) => (
                  <Reveal key={section.id}>
                    <h2 className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{section.title}</h2>
                    <h4 className="text-2xl font-bold mb-3">{section.subtitle}</h4>
                    <p className="text-slate-300 text-base leading-relaxed">{section.text}</p>
                  </Reveal>
                ))}
                <div>
                  <h2 className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Our Values</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {aboutValues.map((v, i) => (
                      <Reveal key={i} delay={i * 0.1}>
                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-blue-500 font-black">0{i+1}.</span>
                          <div>
                            <div className="font-bold text-sm">{v.title}</div>
                            <div className="text-slate-400 text-xs">{v.desc}</div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROGRESS INDICATORS */}
              <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    className="h-1.5 rounded-full bg-blue-600"
                    style={{ 
                        width: useTransform(scrollYProgress, [i*0.33, (i+1)*0.33], [10, 30]),
                        opacity: useTransform(scrollYProgress, [i*0.33, (i+0.1)*0.33, (i+0.9)*0.33, (i+1)*0.33], [0.3, 1, 1, 0.3])
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: METHODOLOGY */}
        <div className="mb-32">
          <Reveal>
            <div className="text-center mb-16">
              <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Methodology</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">The Success Formula</h4>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Customer-Centric", text: "We prioritize understanding unique needs and tailor technology to serve business objectives with precision." },
              { title: "Collaborative Culture", text: "We foster an environment where creativity thrives through open communication and shared expertise." },
              { title: "Agile Methodology", text: "Staying flexible allows us to deliver high-quality results efficiently in a rapidly changing market." },
              { title: "Network of Suppliers", text: "Partnering with industry leaders for a comprehensive portfolio of world-class solutions." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group h-full p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] hover:bg-blue-600 hover:scale-[1.02] transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center font-black mb-8 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                  {i + 1}
                </div>
                <h5 className="font-bold text-xl mb-4 text-slate-900 dark:text-white group-hover:text-white">{item.title}</h5>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-blue-100 text-justify">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 4: CERTIFICATIONS */}
        <div className="mt-32 pt-24 border-t border-slate-100 dark:border-slate-800">
          <Reveal center>
            <div className="text-center mb-24">
              <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Trust & Compliance</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Our Certifications</h4>
            </div>
          </Reveal>

          <div className="space-y-40">
            {/* HCIS Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="space-y-6">
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">Approved HCIS Contractor</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl text-left md:text-justify">
                    Since 2018, ISC has met the stringent standards set by the <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500/30">HCIS</span>. We are trusted to provide security and fire protection for critical industrial sectors across the region.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2} y={30}>
                <div className="relative group p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl transition-all duration-700">
                    <SmoothImage 
                        src={certs.hcis} 
                        alt="HCIS Certificate" 
                        className="rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    />
                </div>
              </Reveal>
            </div>

            {/* ISO Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Reveal delay={0.2} y={30}>
                    <div className="relative group p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl transition-all duration-700">
                      <SmoothImage 
                        src={certs.isoFull} 
                        alt="ISO Certifications" 
                        className="rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000" 
                      />
                    </div>
                </Reveal>
              </div>

              <div className="order-1 lg:order-2 space-y-10">
                <Reveal>
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">International ISO Standards</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg text-left md:text-justify hyphens-auto">
                      Our commitment to global quality management, environmental safety, and occupational health defines our operational DNA.
                    </p>
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
                          <SmoothImage src={item.icon} alt={item.title} className="h-10 md:h-12 w-12 object-contain bg-transparent" />
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
      <style jsx>{`
        .hyphens-auto { hyphens: auto; }
      `}</style>
    </section>
  );
};

export default AboutSection;