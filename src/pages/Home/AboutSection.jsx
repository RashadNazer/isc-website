import React, { useState } from "react";
import { stats, aboutValues, certs } from "../../data/homeData"; // ✅ import stats, values, certs

const AboutSection = () => {
  const [aboutTab, setAboutTab] = useState("mission");
  const tabs = ["mission", "vision", "values"];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* WHO WE ARE */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full -z-10 animate-pulse"></div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Establishing Excellence Since 1980
            </h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
              Designed for Today,<br />
              <span className="text-blue-600">Ready for Tomorrow.</span>
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                At <span className="font-bold text-slate-900">ISC</span>, we continue to adapt state-of-the-art technology, methodology, and practices, helping project owners and end users by designing and maintaining a variety of <span className="font-semibold text-blue-900">Low Current Systems</span>.
              </p>
              <p>
                As a leader with <span className="text-blue-700 font-bold text-xl">40+ years</span> of rich experience in Saudi Arabia, we strive to provide reliable systems and safe environments so you can focus on what is important to you.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="text-4xl font-black text-blue-900 mb-2 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MISSION/VISION/VALUES */}
        <div className="bg-blue-950 rounded-[3rem] p-12 lg:p-20 text-white relative shadow-2xl mb-32">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-8">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setAboutTab(tab)}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
                  aboutTab === tab ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Our {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {aboutTab === "mission" && (
              <div className="animate-in fade-in duration-700">
                <h4 className="text-3xl font-bold mb-6">Exceeding Expectations</h4>
                <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                  Serve the needs of our customers and exceeding their expectations with no short-cuts for a world-class solution, contribute to their success, and demonstrate a great deal of professionalism to achieve a common goal.
                </p>
              </div>
            )}
            {aboutTab === "vision" && (
              <div className="animate-in fade-in duration-700">
                <h4 className="text-3xl font-bold mb-6">Innovation & Leadership</h4>
                <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                  Aiming to be at the forefront and maintaining our leadership in the field of electronic integrated solutions and innovation, setting the standard for excellence and sustainability in the industry.
                </p>
              </div>
            )}
            {aboutTab === "values" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
                {aboutValues.map((v, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-blue-400 font-black">0{i+1}.</div>
                    <div className="font-bold text-lg">{v.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{v.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
            {/* SUCCESS FORMULA */}
<div className="mb-32">
  <div className="text-center mb-16">
    <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
      Our Methodology
    </h3>
    <h4 className="text-4xl font-black text-slate-900">
      The Success Formula
    </h4>
  </div>

  <div className="grid lg:grid-cols-4 gap-8">
    {[
      {
        title: "Customer-Centric",
        text: "We prioritize understanding unique needs and tailor technology to serve business objectives effectively."
      },
      {
        title: "Collaborative Culture",
        text: "We foster an environment where creativity thrives through open communication and knowledge sharing."
      },
      {
        title: "Agile Methodology",
        text: "Staying flexible and responsive to changing requirements allows us to deliver high-quality results efficiently."
      },
      {
        title: "Network of Suppliers",
        text: "Partnering with industry leaders to foster a comprehensive portfolio of innovative solutions."
      }
    ].map((item, i) => (
      <div
        key={i}
        className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {i + 1}
        </div>
        <h5 className="font-bold text-xl mb-4 text-slate-900">
          {item.title}
        </h5>
        <p className="text-slate-500 text-sm leading-relaxed">
          {item.text}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* SUCCESS FORMULA & CERTIFICATES */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="text-center mb-20">
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Trust & Compliance</h3>
            <h4 className="text-4xl font-black text-slate-900">Certificates</h4>
          </div>

          <div className="space-y-32">
            {/* HCIS */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h4 className="text-3xl font-black text-slate-900 leading-tight">
                  Approved HCIS Contractor
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Since 2018, ISC has met the stringent requirements and standards set by the <span className="font-bold text-slate-900">High Commission for Industrial Security (HCIS)</span> in the Kingdom of Saudi Arabia. We are trusted to provide security, safety, and fire protection solutions and services for critical industrial sectors.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-md bg-white p-3 rounded-2xl border border-slate-100 shadow-xl transition-transform hover:scale-[1.02]">
                  <img src={certs.hcis} alt="HCIS Certificate" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>

            {/* ISO */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h4 className="text-3xl font-black text-slate-900">
                  International Standards Certification
                </h4>
                <div className="space-y-6">
                  {certs.isoIcons.map((icon, i) => {
                    const titles = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"];
                    const descs = [
                      "Certified Quality Management System",
                      "Certified Environmental Management System",
                      "Certified Occupational Health & Safety System"
                    ];
                    return (
                      <div key={i} className="flex items-center gap-5 group">
                        <img src={icon} alt={titles[i]} className="h-14 w-auto flex-shrink-0" />
                        <p className="text-slate-700 font-medium text-lg leading-snug">
                          {descs[i]} (<span className="font-bold text-blue-900">{titles[i]}</span>)
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-md bg-white p-3 rounded-2xl border border-slate-100 shadow-xl transition-transform hover:scale-[1.02]">
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
