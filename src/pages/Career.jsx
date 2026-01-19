import React from 'react';

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
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      {/* 1. HERO HEADER: Deeper blue for dark mode */}
      <section className="bg-blue-900 dark:bg-blue-950 py-16 md:py-24 text-white text-center transition-colors">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Build Your Career at ISC
          </h1>
          <p className="text-lg md:text-xl text-blue-200 dark:text-blue-300 leading-relaxed">
            Join a leading team of experts in Saudi Arabia's Electronic Systems Integration sector. 
          </p>
        </div>
      </section>

      {/* 2. APPLICATION CTA: Using a slightly different card color in dark mode */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 md:-mt-12 relative z-10">
        <div className="bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 dark:text-blue-400 mb-3">How to Apply</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-1">Email your updated CV to our Recruitment Officer:</p>
            <p className="text-xl font-bold text-blue-700 dark:text-blue-500 break-all">jobs@iscksa.com</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest font-black">Subject: ref:webvisit</p>
          </div>
          <a 
            href="mailto:jobs@iscksa.com?subject=ref:webvisit" 
            className="w-full md:w-auto bg-blue-900 dark:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 dark:hover:bg-blue-500 transition-all text-center shadow-lg active:scale-95"
          >
            Send Email Now
          </a>
        </div>
      </section>

      {/* 3. JOB CATEGORIES */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Available Job Categories</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mt-4 mx-auto md:mx-0"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {jobCategories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 md:p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all group">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shrink-0"></div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm md:text-base">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAILED OPENINGS */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-10 md:mb-12 text-center md:text-left">
            Featured Positions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {specificPositions.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all">
                <h3 className="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400 mb-5">{job.title}</h3>
                <ul className="space-y-4">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                      <div className="mt-1 shrink-0">
                        <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Status */}
      <div className="py-12 bg-white dark:bg-slate-950 text-center border-t dark:border-slate-900 transition-colors">
        <p className="text-slate-400 dark:text-slate-600 font-bold uppercase tracking-widest text-xs">Career Portal Active</p>
      </div>
    </div>
  );
}