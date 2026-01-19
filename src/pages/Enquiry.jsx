import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../../components/UIComponents";

const enquiryTypes = [
  "In-Hand",
  "Bidding",
  "Budgetary In-Hand",
  "Budgetary Bidding",
  "Change Order",
  "Upgrade",
  "Repair/Fix",
  "Replace",
];

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header: Downsized typography */}
        <div className="mb-12 text-center">
          <Reveal>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Sales Department
            </h2>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Request a Quote
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Provide your project details and our technical sales team will generate a proposal tailored to your requirements.
            </p>
          </Reveal>
        </div>

        {/* Success Message */}
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/30 rounded-[2.5rem] p-12 text-center shadow-xl"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
              Enquiry Submitted
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Your reference has been logged. We will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6"
            >
              {/* Enquiry Type & Facility Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Enquiry Type
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  >
                    <option value="">Select type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Facility Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Al-Khobar Plant"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Enquiry Description */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                  Enquiry Description
                </label>
                <textarea
                  required
                  rows="3"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Specify system type and technical requirements..."
                />
              </div>

              {/* Location & Customer */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Facility Location
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Customer / Company Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Contact Person
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Mobile Number
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none"
                  />
                </div>
              </div>

              {/* Submit: Magnetic Style */}
              <div className="pt-8 flex justify-center">
                <MagneticButton>
                  <button
                    type="submit"
                    className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-3"
                  >
                    Submit Enquiry
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Enquiry;