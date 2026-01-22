import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"; 
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { 
  Reveal, 
  MagneticButton, 
} from "../components/UIComponents"; 

// --- ASSET IMPORTS ---
import MainLogo from "../assets/logo.png";
import FooterLogo from "../assets/footerlogo.png";
import Aurora from '../component/Aurora'; 

/**
 * Enquiry Component
 * Handles multi-part form submission, automated email notification via EmailJS,
 * and client-side PDF generation of the enquiry record.
 */
const enquiryTypes = [
  "In-Hand", "Bidding", "Budgetary In-Hand", "Budgetary Bidding",
  "Change Order", "Upgrade", "Repair/Fix", "Replace",
];

const Enquiry = () => {
  // --- REFS ---
  const form = useRef(); // Links to the actual <form> element for EmailJS
  const pdfExportComponent = useRef(); // Links to the hidden template used for PDF generation
  
  // --- STATE MANAGEMENT ---
  const [submitted, setSubmitted] = useState(false); // Toggles between Form view and Success view
  const [formData, setFormData] = useState({}); // Stores text input values
  const [files, setFiles] = useState([]); // Stores locally selected File objects
  const [countdown, setCountdown] = useState(25); // Seconds remaining before auto-redirect
  const [refNumber, setRefNumber] = useState(null); // Unique 5-digit ID for the enquiry
  const [isSending, setIsSending] = useState(false); // Loading state for EmailJS trigger
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false); // Loading state for html2canvas/jsPDF process
  const navigate = useNavigate();

  // --- AUTO-REDIRECT LOGIC ---
  // Once 'submitted' is true, starts a 25s countdown to send user back to the home page
  useEffect(() => {
    let timer;
    if (submitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (submitted && countdown === 0) {
      navigate("/");
    }
    return () => clearInterval(timer);
  }, [submitted, countdown, navigate]);

  // --- FORM HANDLERS ---
  const handleChange = (e) => {
    // Dynamic update for any input field using the 'name' attribute as key
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      // Append new files to existing array
      setFiles((prev) => [...prev, ...selectedFiles]); 
      e.target.value = ""; // Reset input so same file can be re-selected if removed
    }
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // --- SUBMISSION LOGIC ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Generate a random 5-digit reference number for tracking
    const generatedRef = Math.floor(Math.random() * 90000) + 10000;
    setRefNumber(generatedRef);

    try {
      // Send the form data directly to EmailJS
      // Parameters: ServiceID, TemplateID, FormRef, PublicAPIKey
      await emailjs.sendForm(
        'service_fuzkfz6', 
        'template_ekdravs', 
        form.current, 
        'peDYjL9EaaFeqLgLq'
      );
      setSubmitted(true);
    } catch (error) {
      alert("Error sending request. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  // --- PDF GENERATION ENGINE ---
  /**
   * Captures the hidden DOM element (pdfExportComponent),
   * converts it to a high-resolution canvas, then embeds that image into an A4 PDF.
   */
  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    // Small delay to ensure the DOM is fully rendered before capture
    await new Promise(r => setTimeout(r, 400));
    const element = pdfExportComponent.current;
    
    const options = {
      scale: 3, // High DPI for clear text
      useCORS: true, // Allows cross-origin images (like logos) to be rendered
      allowTaint: true,
      backgroundColor: "#ffffff",
      windowWidth: 794, // Standard A4 pixel width at 96 DPI
    };

    try {
      const canvas = await html2canvas(element, options);
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      pdf.save(`REF_${refNumber}_Enquiry.pdf`);
    } catch (err) {
      console.error("PDF Export Error:", err);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- REUSABLE TAILWIND STYLES ---
  const inputStyles = "w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all duration-300";
  const labelStyles = "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] ml-1 mb-2 block";

  return (
    <section className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden print:bg-white print:py-0">
      
      {/* Background visual effect - Disabled during printing */}
      <div className="absolute inset-0 z-0 pointer-events-none print:hidden opacity-60 dark:opacity-40">
        <Aurora
          colorStops={["#2563eb", "#6366f1", "#1e293b"]} 
          blend={0.5}
          amplitude={1.0}
          speed={0.5} 
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-50/50 dark:to-slate-950/50" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {!submitted && (
          <div className="mb-16 text-center print:hidden">
            <Reveal>
              <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.4em] mb-4">Direct Enquiry Line</h2>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Request a Quote</h1>
            </Reveal>
          </div>
        )}

        <AnimatePresence mode="wait">
          {submitted ? (
            /* --- SUCCESS VIEW: Displayed after EmailJS confirms delivery --- */
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-blue-100 dark:border-blue-900/30 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl max-w-2xl mx-auto"
            >
              <h3 className="text-3xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter">Submission Successful</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed print:text-slate-700 print:max-w-none print:text-left">
                Thank you. Your enquiry for <span className="font-bold text-slate-900 dark:text-white print:text-black">{formData.facility || "the facility"}</span> has been routed to our Khobar sales office. 
                <br /><br className="hidden print:block" />
                Reference: <span className="font-mono text-blue-600 font-bold text-xl">#{refNumber}</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto print:hidden">
                <div className="w-full sm:w-1/2">
                  <MagneticButton>
                    <button onClick={generatePDF} disabled={isGeneratingPDF} className="w-full px-8 py-5 bg-blue-600 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/20 disabled:opacity-70">
                      {isGeneratingPDF ? "Generating..." : "Save PDF"}
                    </button>
                  </MagneticButton>
                </div>
                <div className="w-full sm:w-1/2">
                  <MagneticButton>
                    <Link to="/" className="flex items-center justify-center w-full px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl">Home</Link>
                  </MagneticButton>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 print:hidden">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  Redirecting in <span className="text-slate-900 dark:text-white w-4">{countdown}s</span>
                </p>
              </div>
            </motion.div>
          ) : (
            /* --- FORM VIEW: Main enquiry interface --- */
            <Reveal delay={0.2}>
              <form ref={form} onSubmit={handleSubmit} className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 border border-slate-200/50 shadow-2xl space-y-8">
                {/* Hidden field to include refNumber in the EmailJS payload */}
                <input type="hidden" name="refNumber" value={refNumber || ''} />
                
                {/* Section 1: Scope */}
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
                        {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelStyles}>Facility Name</label>
                      <input required type="text" name="facility" onChange={handleChange} placeholder="Site Name" className={inputStyles} />
                    </div>
                  </div>
                  <div>
                    <label className={labelStyles}>Technical Description</label>
                    <textarea required name="desc" onChange={handleChange} rows="4" className={inputStyles} placeholder="Describe system requirements..." />
                  </div>
                </div>

                {/* Section 2: Logistics */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-[1px] w-8 bg-blue-600"></span>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Location & Client</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input required type="text" name="location" onChange={handleChange} placeholder="City / Area" className={inputStyles} />
                    <input required type="text" name="company" onChange={handleChange} placeholder="Company Name" className={inputStyles} />
                  </div>
                </div>

                {/* Section 3: File Selection (UI Only - Files aren't sent to EmailJS due to size limits) */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-[1px] w-8 bg-blue-600"></span>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Technical Documents</span>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-800/20 p-10 flex flex-col items-center justify-center transition-all hover:border-blue-500">
                    <input type="file" multiple onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                    <div className="relative z-10 flex flex-col items-center pointer-events-none">
                      <div className="mb-4 p-4 bg-blue-600/10 rounded-full text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
                        {files.length > 0 ? `${files.length} Files Selected` : "Drop Specifications Here"}
                      </h4>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-6">Local Selection Only</p>
                      <div className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-lg">Browse Files</div>
                    </div>
                  </div>
                  
                  {/* Selected File List */}
                  {files.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {files.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-slate-800 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700">
                          <span className="truncate max-w-[150px]">{file.name}</span>
                          <button type="button" onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-700 font-bold ml-1">✕</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 4: Contact Info */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-[1px] w-8 bg-blue-600"></span>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Contact Details</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input required type="text" name="person" onChange={handleChange} placeholder="Full Name" className={inputStyles} />
                    <input required type="email" name="email" onChange={handleChange} placeholder="Work Email" className={inputStyles} />
                    <input required type="text" name="mobile" onChange={handleChange} placeholder="Mobile Number" className={inputStyles} />
                    <input type="text" name="phone" onChange={handleChange} placeholder="Landline (Optional)" className={inputStyles} />
                  </div>
                </div>

                <div className="pt-10 flex justify-center">
                  <MagneticButton>
                    <button type="submit" disabled={isSending} className="px-16 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-2xl disabled:opacity-50 transition-all hover:bg-blue-600 hover:text-white active:scale-95">
                      {isSending ? "Sending..." : "Initialize Quote Request"}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </Reveal>
          )}
        </AnimatePresence>
      </div>

      {/* --- HIDDEN PDF TEMPLATE: Off-screen container used specifically for PDF export styling --- */}
      <div style={{ position: "absolute", top: "-20000px", left: "0" }}>
        <div ref={pdfExportComponent} style={{ width: "794px", minHeight: "1123px", padding: "60px", backgroundColor: "white", color: "#0f172a", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "4px solid #2563eb", paddingBottom: "30px", marginBottom: "40px" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <img src={MainLogo} alt="Logo" style={{ height: "60px", width: "auto", objectFit: "contain" }} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <div style={{ backgroundColor: "#2563eb", padding: "10px 20px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={FooterLogo} alt="Footer Logo" style={{ height: "45px", width: "auto", objectFit: "contain" }} />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "900", margin: "0 0 10px 0" }}>Enquiry Record</h1>
            <p style={{ color: "#2563eb", fontWeight: "bold", margin: "0" }}>REF: #{refNumber}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "40px" }}>
            <div>
              <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "12px", borderBottom: "1px solid #e2e8f0" }}>Project Details</h4>
              <p style={{ fontSize: "14px", margin: "5px 0" }}><strong>Facility:</strong> {formData.facility}</p>
              <p style={{ fontSize: "14px", margin: "5px 0" }}><strong>Type:</strong> {formData.type}</p>
              <p style={{ fontSize: "14px", margin: "5px 0" }}><strong>Location:</strong> {formData.location}</p>
            </div>
            <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "12px" }}>Client Info</h4>
              <p style={{ fontSize: "14px", margin: "2px 0" }}>{formData.person}</p>
              <p style={{ fontSize: "12px", color: "#475569", margin: "2px 0" }}>{formData.company}</p>
              <p style={{ fontSize: "12px", color: "#2563eb", fontWeight: "bold", marginTop: "10px" }}>{formData.email}</p>
              <p style={{ fontSize: "12px", color: "#475569", margin: "2px 0" }}>{formData.mobile}</p>
              <p style={{ fontSize: "12px", color: "#475569", margin: "2px 0" }}>{formData.phone}</p>
            </div>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "12px", borderBottom: "1px solid #e2e8f0" }}>Technical Description</h4>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#334155", whiteSpace: "pre-wrap" }}>{formData.desc}</p>
          </div>
          {files.length > 0 && (
            <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "12px" }}>Attached Specifications ({files.length})</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {files.map((f, i) => (
                  <div key={i} style={{ fontSize: "11px", display: "flex", alignItems: "center", gap: "8px", color: "#475569" }}>
                    <span style={{ color: "#2563eb" }}>📎</span> {f.name}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div style={{ marginTop: "auto", textAlign: "center", paddingTop: "40px" }}>
            <p style={{ fontSize: "9px", color: "#94a3b8", letterSpacing: "2px", textTransform: "uppercase" }}>Generated via Online Portal • {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;