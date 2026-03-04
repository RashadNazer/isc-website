import React, { useRef, useState } from "react";
import { stats, aboutValues, certs } from "../data/homeData"; 
import { motion } from "framer-motion";
import { Reveal } from "../components/UIComponents";
// Ensure this extension matches your file: .jpg, .png, or .jpeg
import officeAbout from "../assets/office_about.jpg"; 
import { Target, Eye, ShieldCheck } from "lucide-react";

const SmoothImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${className}`}>
      <motion.img
        src={src} alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8 }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* SECTION 1: HERO SECTION */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal x={-50}>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl"></div>
                <SmoothImage 
                  src={officeAbout} 
                  alt="ISC Office" 
                  className="rounded-[2.5rem] shadow-2xl h-[500px] lg:h-[650px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-[2rem] shadow-xl border border-white/10">
                  <div className="text-4xl font-black">40+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-80">Years of<br/>Experience</div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal>
                <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.4em]">Who We Are</h3>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
                  Innovating for a <span className="text-blue-600">Safer</span> Tomorrow
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  At International Security & Communications Company (<span className="font-bold text-slate-900 dark:text-white">ISC</span>), 
                  we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners and end users by 
                  designing, installing, and maintaining a variety of solutions for various <span className="text-blue-600 font-semibold">Low Current Systems</span>.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border-l-4 border-blue-600 shadow-sm">
                  <p className="text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed">
                    "Complete offering from optimum proposals that anticipate the next generation of Technology... 
                    solutions Designed for Today, Ready for Tomorrow."
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  As a leader with 40+ years of rich experience in the field of system integration in the Kingdom of Saudi Arabia, 
                  we strive to provide reliable systems, safe and secure environments so you can focus on what is important to you.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION (New Boxed Layout) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Box */}
            <Reveal y={40}>
              <div className="group h-full p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Target size={32} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">Our Mission</h2>
                  <h4 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Exceeding Expectations</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Serve the needs of our customers and exceeding their expectations with no short-cuts, 
                    maintaining highest quality standards and international best practices in every project we undertake.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision Box */}
            <Reveal y={40} delay={0.2}>
              <div className="group h-full p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Eye size={32} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">Our Vision</h2>
                  <h4 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Innovation & Leadership</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Aiming to be at the forefront and maintaining our leadership in the security and communications 
                    industry through continuous innovation and commitment to excellence across the Kingdom.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal center>
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">Core Values</h2>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">What We Stand For</h4>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutValues.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="text-blue-600 font-black text-3xl mb-4">0{i+1}</div>
                  <h5 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{v.title}</h5>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
        <div className="max-w-7xl mx-auto px-6">
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
      </div>
    
  );
};

export default AboutPage;