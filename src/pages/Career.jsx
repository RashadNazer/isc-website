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
    <div className="bg-white min-h-screen">
      {/* 1. HERO HEADER: Scaled text for mobile */}
      <section className="bg-blue-900 py-16 md:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Build Your Career at ISC
          </h1>
          <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
            Join a leading team of experts in Saudi Arabia's Electronic Systems Integration sector. 
          </p>
        </div>
      </section>

      {/* 2. APPLICATION CTA: Responsive spacing and layout */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 md:-mt-12 relative z-10">
        <div className="bg-white border border-blue-100 rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 mb-3">How to Apply</h2>
            <p className="text-slate-600 mb-1">Email your updated CV to our Recruitment Officer:</p>
            <p className="text-xl font-bold text-blue-700 break-all">jobs@iscksa.com</p>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-black">Subject: ref:webvisit</p>
          </div>
          <a 
            href="mailto:jobs@iscksa.com?subject=ref:webvisit" 
            className="w-full md:w-auto bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all text-center shadow-lg active:scale-95"
          >
            Send Email Now
          </a>
        </div>
      </section>

      {/* 3. JOB CATEGORIES: 1 column on mobile, 3 on desktop */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Available Job Categories</h2>
          <div className="w-16 h-1 bg-blue-600 mt-4 mx-auto md:mx-0"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {jobCategories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 md:p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 transition-all">
              <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
              <span className="font-bold text-slate-700 text-sm md:text-base">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAILED OPENINGS: Stacking cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 md:mb-12 text-center md:text-left">
            Featured Positions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {specificPositions.map((job, idx) => (
              <div key={idx} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-5">{job.title}</h3>
                <ul className="space-y-4">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base">
                      <div className="mt-1 shrink-0">
                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Bottom Status - Reduced padding for cleaner look */}
      <div className="py-12 bg-white text-center">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Career Portal Active</p>
      </div>
    </div>
  );
}