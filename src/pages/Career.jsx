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
      {/* Hero Header */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6">Build Your Career at ISC</h1>
          <p className="text-xl text-blue-200">
            Join a leading team of experts in Saudi Arabia's Electronic Systems Integration sector. 
            We are looking for talent to drive innovation and excellence.
          </p>
        </div>
      </section>

      {/* Application CTA */}
      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">How to Apply</h2>
            <p className="text-slate-600">Email your updated CV to our Recruitment Officer:</p>
            <p className="text-lg font-bold text-blue-700 mt-2">jobs@iscksa.com</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">Subject: ref:webvisit</p>
          </div>
          <a href="mailto:jobs@iscksa.com?subject=ref:webvisit" className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
            Send Email Now
          </a>
        </div>
      </section>

      {/* General Job Categories */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Available Job Categories</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobCategories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="font-semibold text-slate-700">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Openings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {specificPositions.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{job.title}</h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2026 International Security & Communications Co. - All rights reserved.</p>
      </footer>
    </div>
  );
}