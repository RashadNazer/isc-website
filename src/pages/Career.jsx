import React from 'react';
import { motion } from 'framer-motion';
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../components/UIComponents";

const jobCategories = [
  "Electronic Systems Engineer", "Sales Representative", "Electronic Technician",
  "Technical Coordinator", "Web Application Developer", "IT and Network Administrator",
  "Graphic Designer", "Document Controller", "Secretary"
];

const specificPositions = [
  {
    title: "IT Technicians",
    requirements: [
      "Technical/Vocational Degree in Electronics, IT",
      "3+ years of experience in Windows server, Storage, SQL, etc.",
      "Candidates with Diploma degree and MCSA/MCSE are also welcome"
    ]
  },
  {
    title: "Network Technicians",
    requirements: [
      "Technical/Vocational Degree in Electronics",
      "3+ years of experience in Network configuration",
      "Candidates with Diploma degree and CCNA/CCNP are also welcome"
    ]
  },
  {
    title: "Project Field Engineers (LCS/Electrical)",
    requirements: [
      "Bachelor’s degree in Communications, Electronics or Electrical",
      "3+ years’ experience in project management",
      "Proficiency in MS Office/MS Project is a must"
    ]
  },
  {
    title: "Project Supervisors (LCS/Electrical)",
    requirements: [
      "Technical/Vocational Degree in Communications, Electronics or Electrical",
      "3+ years’ experience in project management",
      "MS Office/MS Project skills are essential"
    ]
  },
  {
    title: "Project Planner",
    requirements: [
      "5+ years’ experience in planning and project management",
      "Proficiency in MS Office, MS Project, or Primavera"
    ]
  }
];

export default function Career() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. HERO HEADER: Adjusted typography scale */}
      <section className="bg-blue-900 dark:bg-blue-950 py-20 md:py-28 text-white text-center transition-colors relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Build Your Career at ISC
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-blue-200 dark:text-blue-300 leading-relaxed max-w-2xl mx-auto">
              Join a leading team of experts in Saudi Arabia's Electronic Systems Integration sector. 
            </p>
          </Reveal>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* 2. APPLICATION CTA: Boxed Magnetic Link */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 md:-mt-14 relative z-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 25, delay: 0.3 }}
          className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400 mb-2">How to Apply</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">Email your CV to our Recruitment Officer:</p>
            <p className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-500 break-all">jobs@iscksa.com</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest font-black">Subject: ref:webvisit</p>
          </div>
          
          <Reveal delay={0.5}>
            <MagneticButton>
              <a 
                href="mailto:jobs@iscksa.com?subject=ref:webvisit" 
                className="group flex items-center gap-3 bg-blue-900 dark:bg-blue-600 px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:bg-blue-800 dark:hover:bg-blue-500 shadow-lg active:scale-95"
              >
                Send Email Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </MagneticButton>
          </Reveal>
        </motion.div>
      </section>

      {/* 3. JOB CATEGORIES: Staggered Entrance */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="mb-10 text-left">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Job Categories</h2>
            <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mt-3"></div>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {jobCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 md:p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shrink-0" />
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm md:text-base">{cat}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. DETAILED OPENINGS: Premium Spring Cards */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-10 text-left">
              Featured Positions
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {specificPositions.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 20, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-7 md:p-9 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all group"
              >
                <h3 className="text-lg md:text-xl font-black text-blue-900 dark:text-blue-400 mb-6 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <ul className="space-y-4">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                      <div className="mt-1 shrink-0">
                        <div className="w-5 h-5 rounded-md bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="leading-relaxed text-left">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}