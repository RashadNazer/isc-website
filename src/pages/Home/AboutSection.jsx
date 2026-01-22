import React, { useRef } from "react";
import { stats, aboutValues, certs } from "../../data/homeData"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, StatCounter } from "../../components/UIComponents";

const AboutSection = () => {
  /**
   * --- SCROLL TRACKING SETUP ---
   * containerRef: References the wrapper that dictates the scroll duration.
   * scrollYProgress: A 0 to 1 value representing how much of the container has been scrolled.
   * offset ["start start", "end end"]: Starts tracking when the top of the section hits the top 
   * of the viewport, and ends when the bottom of the section leaves the viewport.
   */
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /**
   * --- DESKTOP ANIMATION TRANSFORMATIONS ---
   * We define three distinct phases for the Mission, Vision, and Values content.
   * By overlapping the input ranges (e.g., Mission ends at 0.4 while Vision starts at 0.15),
   * we create a smooth cross-fade/parallax effect.
   */

  // Phase 1: Mission
  // Opacity: Solid until 20%, then fades to 0 by 40%.
  // Y: Moves from 0 up to -100px for a "lifting away" effect.
  const missionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const missionY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

  // Phase 2: Vision
  // Opacity: Starts invisible, fades in between 15%-35%, stays solid, then fades out by 80%.
  // Y: Slides up from 100px into position (0), then continues up to -100px.
  const visionOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 0.8], [0, 1, 1, 0]);
  const visionY = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 0.8], [100, 0, 0, -100]);

  // Phase 3: Values
  // Opacity: Starts appearing as Vision fades out (65%), reaches solid by 85%.
  // Y: Slides up from 100px into the center.
  const valuesOpacity = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 1]);
  const valuesY = useTransform(scrollYProgress, [0.65, 0.85], [100, 0]);

  /**
   * --- DATA MAPPING ---
   * We store the animated values (opacity, y) inside an object to keep the JSX clean.
   */
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
        
        {/* SECTION 1: HEADER & STATS
            A simple grid layout for the introduction text and numerical counters.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center mb-16 md:mb-32">
            <Reveal>
              <h3 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Designed for Today, <br className="hidden md:block" />
                <span className="text-blue-600">Ready for Tomorrow.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-justify">
                At <span className="font-bold text-slate-900 dark:text-slate-100">ISC</span>, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners by designing and maintaining <span className="font-semibold text-blue-900 dark:text-blue-300">Low Current Systems</span>.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-justify">
                As a leader with <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">40+ years</span> of rich experience in Saudi Arabia, we provide reliable systems and safe environments that empower infrastructure across the Kingdom.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
               {stats.map((stat, i) => (
                 <div key={i} className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl md:rounded-3xl border border-slate-100 dark:border-slate-800">
                    <StatCounter value={parseInt(stat.value)} suffix="+" label={stat.label} />
                 </div>
               ))}
            </div>
        </div>

        {/* SECTION 2: INTERACTIVE STICKY SLIDER
            - On Desktop: The container is h-[250vh] to allow enough scroll room. 
            - The content is 'sticky' (top-0) so it stays in view while the user scrolls.
        */}
        <div ref={containerRef} className="relative h-auto lg:h-[250vh] mb-20">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
            
            <div className="w-full bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] pointer-events-none"></div>

              {/* DESKTOP CONTENT: Absolute layers triggered by scroll progress */}
              <div className="hidden lg:block relative h-[450px]">
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    style={{ 
                      opacity: section.opacity, 
                      y: section.y,
                      willChange: "opacity, transform" 
                    }}
                    transition={{ ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <h2 className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-4">{section.title}</h2>
                    <h4 className="text-4xl md:text-5xl font-bold mb-6 text-white">{section.subtitle}</h4>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-4xl">{section.text}</p>
                  </motion.div>
                ))}

                {/* Final Slide: Values */}
                <motion.div
                  style={{ 
                    opacity: valuesOpacity, 
                    y: valuesY,
                    willChange: "opacity, transform"
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <h2 className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-8">Our Values</h2>
                  <div className="grid grid-cols-3 gap-6">
                    {aboutValues.map((v, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="text-blue-500 font-black text-2xl mb-2">0{i+1}.</div>
                        <div className="font-bold text-lg mb-1">{v.title}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{v.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* MOBILE CONTENT: Simple stacked layout (No sticky scroll animation) */}
              <div className="lg:hidden space-y-12 relative z-10">
                {sections.map((section) => (
                  <div key={section.id}>
                    <h2 className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{section.title}</h2>
                    <h4 className="text-2xl font-bold mb-3">{section.subtitle}</h4>
                    <p className="text-slate-300 text-base leading-relaxed">{section.text}</p>
                  </div>
                ))}
                <div>
                  <h2 className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Our Values</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {aboutValues.map((v, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-blue-500 font-black">0{i+1}.</span>
                        <div>
                          <div className="font-bold text-sm">{v.title}</div>
                          <div className="text-slate-400 text-xs">{v.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROGRESS INDICATORS (Dots)
                  Uses scroll progress to change the width and opacity of dots dynamically.
              */}
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

        {/* SECTION 3: METHODOLOGY
            Cards that animate in as they enter the viewport using 'whileInView'.
        */}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group h-full p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] hover:bg-blue-600 transition-all duration-500"
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

        {/* SECTION 4: CERTIFICATIONS
            Uses alternating grid layouts for HCIS and ISO sections.
        */}
        <div className="mt-32 pt-24 border-t border-slate-100 dark:border-slate-800">
          <Reveal>
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
              <Reveal delay={0.2}>
                <div className="relative group p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                    <img src={certs.hcis} alt="HCIS Certificate" className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
              </Reveal>
            </div>

            {/* ISO Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Reveal delay={0.2}>
                    <div className="relative group p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                      <img src={certs.isoFull} alt="ISO Certifications" className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
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