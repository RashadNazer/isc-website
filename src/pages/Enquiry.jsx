import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; 
import { 
  Reveal, 
  MagneticButton, 
  MeshBackground 
} from "../components/UIComponents"; 

/** * Predefined list of enquiry types for the dropdown menu 
 */
const enquiryTypes = [
  "In-Hand", "Bidding", "Budgetary In-Hand", "Budgetary Bidding",
  "Change Order", "Upgrade", "Repair/Fix", "Replace",
];

const Enquiry = () => {
  // --- STATE MANAGEMENT ---
  const [submitted, setSubmitted] = useState(false); // Tracks if the form has been successfully sent
  const [formData, setFormData] = useState({});      // Stores all user input values
  const [countdown, setCountdown] = useState(15);    // Timer for auto-redirecting back to home
  const [refNumber, setRefNumber] = useState(null);  // Unique 5-digit ID for the request
  const navigate = useNavigate();                   // Hook for programmatic navigation

  /**
   * EFFECT: Auto-redirect logic
   * Once 'submitted' is true, it starts a 1-second interval timer.
   * When countdown hits 0, the user is sent back to the homepage.
   */
  useEffect(() => {
    let timer;
    if (submitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (submitted && countdown === 0) {
      navigate("/");
    }
    // Cleanup interval on component unmount or state change
    return () => clearInterval(timer);
  }, [submitted, countdown, navigate]);

  /**
   * Update the formData state object whenever an input changes
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handle form submission
   * 1. Prevents default page reload
   * 2. Generates a random 5-digit Reference Number
   * 3. Triggers the success view (submitted = true)
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = Math.floor(Math.random() * 90000) + 10000;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  /**
   * Triggers the browser's native print dialog.
   * Combined with 'print:' Tailwind classes, this creates a PDF-friendly layout.
   */
  const handlePrint = () => {
    window.print();
  };

  // --- REUSABLE STYLES ---
  const inputStyles = "w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all duration-300";
  const labelStyles = "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] ml-1 mb-2 block";

  return (
    <section className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden print:bg-white print:py-10">
      
      {/* Visual background element - hidden when printing to save ink/PDF clarity */}
      <div className="absolute inset-0 opacity-40 pointer-events-none print:hidden">
        <MeshBackground />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Only show the header if the form hasn't been submitted yet */}
        {!submitted && (
          <div className="mb-16 text-center print:hidden">
            <Reveal>
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                Direct Enquiry Line
              </h2>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                Request a Quote
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                Fill out the technical requirements below. Our sales team will review your specs and respond within 24 hours.
              </p>
            </Reveal>
          </div>
        )}

        <AnimatePresence mode="wait">
          {submitted ? (
            /* --- SUCCESS VIEW (Post-Submission) --- */
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/30 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl print:shadow-none print:border-none print:p-0"
            >
              {/* Success Checkmark Icon */}
              <div className="relative w-20 h-20 mx-auto mb-8 print:hidden">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 shadow-lg shadow-blue-600/30"></div>
                <div className="relative z-10 w-full h-full bg-blue-600 rounded-3xl flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 print:text-black print:text-2xl">Submission Successful</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed print:text-slate-700 print:max-w-none print:text-left">
                Thank you. Your enquiry for <span className="font-bold text-slate-900 dark:text-white print:text-black">{formData.facility || "the facility"}</span> has been routed to our Khobar sales office. 
                <br /><br className="hidden print:block" />
                Reference: <span className="font-mono text-blue-600 font-bold text-xl">#{refNumber}</span>
              </p>

              {/* Action Buttons: Save PDF or Go Home */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
                <MagneticButton>
                  <button
                    onClick={handlePrint}
                    className="group px-8 py-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-black rounded-2xl text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Save as PDF
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    to="/"
                    className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white flex items-center gap-3"
                  >
                    Return Home
                  </Link>
                </MagneticButton>
              </div>

              {/* Countdown text shown only on screen */}
              <p className="mt-10 text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest print:hidden">
                Auto-redirecting in <span className="text-blue-600 dark:text-blue-400 font-black">{countdown}s</span>
              </p>
            </motion.div>
          ) : (
            /* --- FORM VIEW (Initial State) --- */
            <Reveal delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl space-y-8"
              >
                {/* SECTION 1: PROJECT SCOPE */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-[1px] w-8 bg-blue-600"></span>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Project Scope</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelStyles}>Enquiry Type</label>
                      <select required name="type" onChange={handleChange} className={inputStyles}>
                        <option value="">Select type</option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelStyles}>Facility Name</label>
                      <input required type="text" name="facility" onChange={handleChange} placeholder="Site / Plant Name" className={inputStyles} />
                    </div>
                  </div>
                  <div>
                    <label className={labelStyles}>Technical Description</label>
                    <textarea required name="desc" onChange={handleChange} rows="4" className={inputStyles} placeholder="Describe the system requirements..." />
                  </div>
                </div>

                {/* SECTION 2: LOGISTICS */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-[1px] w-8 bg-blue-600"></span>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Location & Client</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelStyles}>Facility Location</label>
                      <input required type="text" name="location" onChange={handleChange} placeholder="City / Area" className={inputStyles} />
                    </div>
                    <div>
                      <label className={labelStyles}>Company Name</label>
                      <input required type="text" name="company" onChange={handleChange} placeholder="Client Entity" className={inputStyles} />
                    </div>
                  </div>
                </div>

                {/* SECTION 3: CONTACT PERSON */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-[1px] w-8 bg-blue-600"></span>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Point of Contact</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input required type="text" name="person" onChange={handleChange} placeholder="Full Name" className={inputStyles} />
                    <input required type="email" name="email" onChange={handleChange} placeholder="Work Email" className={inputStyles} />
                    <input type="text" name="phone" onChange={handleChange} placeholder="Landline" className={inputStyles} />
                    <input required type="text" name="mobile" onChange={handleChange} placeholder="Mobile Number" className={inputStyles} />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-10 flex justify-center">
                  <MagneticButton>
                    <button
                      type="submit"
                      className="group relative px-16 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white shadow-2xl shadow-blue-600/20 active:scale-95 flex items-center gap-4"
                    >
                      Initialize Quote Request
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </Reveal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Enquiry;