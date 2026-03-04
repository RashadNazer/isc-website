import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/UIComponents";
import { ShieldCheck, Clock, FileText, Headphones, Mail, Phone, ExternalLink } from "lucide-react";

const Support = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-24 px-6 bg-gradient-to-br from-blue-900 to-blue-800 dark:from-slate-950 dark:to-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] select-none pointer-events-none uppercase">
          Support
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-blue-300 font-bold text-sm uppercase tracking-[0.4em] mb-4">Post-Project Excellence</h2>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
              Support & <br /> <span className="text-blue-400">Maintenance.</span>
            </h1>
            <p className="max-w-3xl text-blue-100 text-xl leading-relaxed font-medium">
              We don't just deliver systems; we ensure they never fail. Our structured Maintenance 
              Contracts (MC) provide the peace of mind required for critical industrial 
              and commercial operations across the Kingdom.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. CORE SUPPORT PILLARS */}
      <section className="py-24 px-6 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Rapid Response",
              desc: "Prioritized resolution times for contract holders, ensuring minimal downtime for critical safety systems."
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Preventive Care",
              desc: "Scheduled inspections and proactive maintenance to identify potential failures before they occur."
            },
            {
              icon: <Headphones className="w-8 h-8" />,
              title: "Expert Technical Support",
              desc: "Direct access to our senior engineering team for troubleshooting and complex system re-configurations."
            }
          ].map((pillar, i) => (
            <Reveal key={i} delay={i * 0.1} y={20}>
              <div className="space-y-4">
                <div className="text-blue-600 dark:text-blue-400">{pillar.icon}</div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. DUAL-ACTION PORTAL & FORM SECTION */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: THE MC PORTAL */}
          <Reveal x={-30}>
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Maintenance Portal</h3>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">For Contract Holders</p>
                </div>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">System Update</span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 flex-grow">
                Our online portal allows contract clients to track tickets, view service history, and monitor SLA performance in real-time. 
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <Mail className="text-blue-600 w-5 h-5" />
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase">Primary Support Email</p>
                    <a href="mailto:mcsupport@iscksa.com" className="font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">mcsupport@iscksa.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <Phone className="text-blue-600 w-5 h-5" />
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase">Dedicated Support Line</p>
                    <span className="font-bold text-slate-900 dark:text-white">+966 13 898 4602</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://e-service.iscksa.com/portal/#/mcportal/login/" 
                target="_blank" 
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                ACCESS MC PORTAL <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </Reveal>

          {/* RIGHT: NO CONTRACT / SERVICE REQUEST */}
            <Reveal x={30} delay={0.2}>
            <div className="bg-slate-900 dark:bg-blue-900/10 rounded-[3rem] p-10 text-white h-full flex flex-col border border-white/5">
                <h3 className="text-3xl font-black mb-6">Service Request <br /> (Non-Contract)</h3>
                <p className="text-blue-100 text-lg mb-8 flex-grow">
                Don't have a Maintenance Contract? We still offer on-call technical assistance. 
                Please download our formal Service Request (SR) form and submit it to our team.
                </p>

                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-10">
                <h4 className="font-black uppercase text-xs tracking-[0.2em] text-blue-400 mb-4">Submission Process</h4>
                <ol className="space-y-3 text-sm text-blue-100">
                    <li className="flex gap-2"><span>1.</span> Download the SR Form (PDF)</li>
                    <li className="flex gap-2"><span>2.</span> Fill in site details & system fault</li>
                    <li className="flex gap-2"><span>3.</span> Email to <span className="text-white font-bold">service@iscksa.com</span></li>
                </ol>
                </div>

                {/* UPDATED LINK ATTRIBUTES */}
                <a 
                href="https://www.iscksa.com/documents/SRForm.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-900 py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-blue-50 transition-all"
                >
                <FileText className="w-5 h-5" /> DOWNLOAD SR FORM
                </a>
            </div>
            </Reveal>

        </div>
      </section>

      {/* 4. FOOTER STATEMENT */}
      <section className="py-24 text-center">
        <Reveal>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em] mb-4">Quality Is Our Objective</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Commitment to Reliability.
          </h2>
        </Reveal>
      </section>

    </main>
  );
};

export default Support;