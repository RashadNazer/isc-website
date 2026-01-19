import React, { useState } from "react";
import { stats, aboutValues, certs } from "../../data/homeData"; 

const AboutSection = () => {
  const [aboutTab, setAboutTab] = useState("mission");
  const tabs = ["mission", "vision", "values"];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 1. WHO WE ARE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <div className="relative">
            {/* Pulsing background element - scaled for mobile */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-20 h-20 md:w-32 md:h-32 bg-blue-50 rounded-full -z-10 animate-pulse"></div>
            
            <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              Establishing Excellence Since 1980
            </h2>
            
            {/* FONT SCALING: Prevents text breaking on small screens */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
              Designed for Today,<br />
              <span className="text-blue-600">Ready for Tomorrow.</span>
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                At <span className="font-bold text-slate-900">ISC</span>, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners by designing and maintaining <span className="font-semibold text-blue-900">Low Current Systems</span>.
              </p>
              <p>
                As a leader with <span className="text-blue-700 font-bold text-lg md:text-xl">40+ years</span> of rich experience in Saudi Arabia, we provide reliable systems and safe environments.
              </p>
            </div>
          </div>

          {/* STATS GRID: Stays 2 columns on mobile but with tighter padding */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-5 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="text-2xl md:text-4xl font-black text-blue-900 mb-1 group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. MISSION/VISION/VALUES BOX */}
        <div className="bg-blue-950 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-white relative shadow-2xl mb-20 md:mb-32">
          {/* TABS: Horizontal scrollable on small mobile to prevent stacking/wrapping */}
          <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 border-b border-white/10 pb-6 scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setAboutTab(tab)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm transition-all whitespace-nowrap active:scale-95 ${
                  aboutTab === tab 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Our {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="min-h-[200px] md:min-h-[300px]">
            {aboutTab === "mission" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Exceeding Expectations</h4>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                  Serve the needs of our customers and exceeding their expectations with no short-cuts for a world-class solution, contribute to their success, and demonstrate professionalism.
                </p>
              </div>
            )}
            {aboutTab === "vision" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Innovation & Leadership</h4>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                  Aiming to be at the forefront and maintaining our leadership in the field of electronic integrated solutions, setting the standard for excellence in the industry.
                </p>
              </div>
            )}
            {aboutTab === "values" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {aboutValues.map((v, i) => (
                  <div key={i} className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-blue-400 font-black">0{i+1}.</div>
                    <div className="font-bold text-base md:text-lg">{v.title}</div>
                    <div className="text-slate-400 text-xs md:text-sm leading-relaxed">{v.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3. SUCCESS FORMULA (GRID SIZING) */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              Our Methodology
            </h3>
            <h4 className="text-3xl md:text-4xl font-black text-slate-900">
              The Success Formula
            </h4>
          </div>

          {/* GRID SIZING: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: "Customer-Centric", text: "We prioritize understanding unique needs and tailor technology to serve business objectives." },
              { title: "Collaborative Culture", text: "We foster an environment where creativity thrives through open communication." },
              { title: "Agile Methodology", text: "Staying flexible allows us to deliver high-quality results efficiently." },
              { title: "Network of Suppliers", text: "Partnering with industry leaders for a comprehensive portfolio of solutions." }
            ].map((item, i) => (
              <div key={i} className="group p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <h5 className="font-bold text-lg md:text-xl mb-3 text-slate-900">{item.title}</h5>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CERTIFICATES (VISUAL ORDERING) */}
        <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-slate-100">
          <div className="text-center mb-12 md:mb-20">
            <h3 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Trust & Compliance</h3>
            <h4 className="text-3xl md:text-4xl font-black text-slate-900">Certificates</h4>
          </div>

          <div className="space-y-20 md:space-y-32">
            {/* HCIS: Image-first on mobile using order utilities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4 md:space-y-6 text-center lg:text-left">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900">Approved HCIS Contractor</h4>
                <p className="text-slate-600 text-base md:text-lg">
                  Since 2018, ISC has met the stringent standards set by the <span className="font-bold text-slate-900">HCIS</span>. We are trusted to provide security and fire protection for critical industrial sectors.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="w-full max-w-xs md:max-w-md bg-white p-2 md:p-3 rounded-2xl border border-slate-100 shadow-xl">
                  <img src={certs.hcis} alt="HCIS Certificate" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>

            {/* ISO: Standard stacking */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900">International Standards</h4>
                <div className="space-y-4 md:space-y-6 inline-block text-left">
                  {certs.isoIcons.map((icon, i) => {
                    const titles = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"];
                    return (
                      <div key={i} className="flex items-center gap-4 group">
                        <img src={icon} alt={titles[i]} className="h-10 md:h-14 w-auto flex-shrink-0" />
                        <p className="text-slate-700 font-medium text-sm md:text-base leading-snug">
                          <span className="font-bold text-blue-900">{titles[i]}</span> Certification
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-xs md:max-w-md bg-white p-2 md:p-3 rounded-2xl border border-slate-100 shadow-xl">
                  <img src={certs.isoFull} alt="ISO Certifications" className="w-full h-auto rounded-lg" />
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