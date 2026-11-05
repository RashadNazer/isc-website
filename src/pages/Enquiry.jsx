import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";
import { usePageTitle } from "../hooks/usePageTitle";
import html2canvas from "html2canvas";
import {
  CheckCircle2,
  Shield,
  Clock,
  Headphones,
  FileText,
  Upload,
  X,
  AlertCircle,
  Check,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";

// --- ASSET IMPORTS ---
import MainLogo from "../assets/logo.png";
import FooterLogo from "../assets/footerlogo.png";
import Aurora from "../component/Aurora";

/* =========================================================
   DATA
   ========================================================= */
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

const serviceOptions = [
  { id: "installation", label: "Installation & Commissioning" },
  { id: "maintenance", label: "Preventive Maintenance (AMC)" },
  { id: "repair", label: "Repair & Troubleshooting" },
  { id: "upgrade", label: "System Upgrade / Retrofit" },
  { id: "replacement", label: "Equipment Replacement" },
  { id: "inspection", label: "Inspection & Audit" },
  { id: "spares", label: "Spare Parts Supply" },
  { id: "training", label: "On-site Technical Training" },
];

const timelineOptions = [
  "Immediate / Emergency",
  "Within 30 Days",
  "1 - 3 Months",
  "Planning / Budgetary",
];

/* =========================================================
   Small helper components
   ========================================================= */
const SectionHeader = ({ number, label, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 flex-shrink-0">
      <Icon className="w-4 h-4" strokeWidth={2.5} />
    </div>
    <div className="flex-1">
      <p className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
        Step {number}
      </p>
      <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white tracking-tight">
        {label}
      </h3>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
  </div>
);

/* =========================================================
   MAIN
   ========================================================= */
const Enquiry = () => {
  const form = useRef();
  const pdfExportComponent = useRef();
  const DRAFT_KEY = "enquiry-draft-v1";
  usePageTitle("Request a Quote");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [files, setFiles] = useState([]);
  const [countdown, setCountdown] = useState(25);
  const [refNumber, setRefNumber] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();

  /* ---------- Auto-save draft ---------- */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.formData) setFormData(parsed.formData);
        if (parsed.selectedServices) setSelectedServices(parsed.selectedServices);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (submitted) return;
    try {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ formData, selectedServices })
      );
    } catch {
      // ignore quota
    }
  }, [formData, selectedServices, submitted]);

  /* ---------- Auto-redirect on success ---------- */
  useEffect(() => {
    let timer;
    if (submitted && countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    } else if (submitted && countdown === 0) {
      navigate("/");
    }
    return () => clearInterval(timer);
  }, [submitted, countdown, navigate]);

  /* ---------- Field handlers ---------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (serviceLabel) => {
    setSelectedServices((prev) =>
      prev.includes(serviceLabel)
        ? prev.filter((item) => item !== serviceLabel)
        : [...prev, serviceLabel]
    );
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setFiles((prev) => [...prev, ...selectedFiles]);
      e.target.value = "";
    }
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  /* ---------- Progress calculation ---------- */
  const progress = useMemo(() => {
    const required = [
      formData.type,
      formData.facility,
      formData.desc,
      formData.location,
      formData.company,
      formData.person,
      formData.email,
      formData.mobile,
    ];
    const filled = required.filter(Boolean).length;
    return Math.round((filled / required.length) * 100);
  }, [formData]);

  /* ---------- Submit ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitError(null);

    const generatedRef = Math.floor(Math.random() * 90000) + 10000;
    setRefNumber(generatedRef);

    try {
      await emailjs.sendForm(
        "service_fuzkfz6",
        "template_ekdravs",
        form.current,
        "peDYjL9EaaFeqLgLq"
      );
      localStorage.removeItem(DRAFT_KEY);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        "We couldn't send your enquiry. Please try again or email us directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  /* ---------- PDF export ---------- */
  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    await new Promise((r) => setTimeout(r, 400));
    const element = pdfExportComponent.current;

    const options = {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      windowWidth: 794,
    };

    try {
      const canvas = await html2canvas(element, options);
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
      pdf.save(`REF_${refNumber}_Enquiry.pdf`);
    } catch (err) {
      console.error("PDF Export Error:", err);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const inputStyles =
    "w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40 px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all duration-300";
  const labelStyles =
    "text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] ml-1 mb-2 block";

  return (
    <section className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden print:bg-white print:py-0 w-full max-w-[100vw]">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0 pointer-events-none print:hidden opacity-60 dark:opacity-40 overflow-hidden">
        <Aurora
          colorStops={["#2563eb", "#6366f1", "#1e293b"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-50/50 dark:to-slate-950/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* HERO */}
        {!submitted && (
          <div className="mb-16 text-center print:hidden">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Direct Enquiry Line
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-tight">
                Request a <span className="text-slate-400 dark:text-slate-600">Quote.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Tell us about your requirement and our sales team will respond
                within 24 hours with the right solution for your infrastructure.
              </p>
            </Reveal>
          </div>
        )}

        {/* FIX: Removed AnimatePresence to prevent page height collapse glitch during form swap */}
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-blue-100 dark:border-blue-900/30 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl max-w-2xl mx-auto"
          >
            <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/40">
              <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter">
              Enquiry Submitted
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-2 leading-relaxed">
              Thank you. Your enquiry for{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                {formData.facility || "the facility"}
              </span>{" "}
              has been routed to our Khobar sales office.
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-xs mb-8">
              Our team will respond within 24 hours.
            </p>

            <div className="mb-8 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50">
              <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] mb-2">
                Reference Number
              </p>
              <p className="font-mono text-blue-600 dark:text-blue-400 font-black text-3xl tracking-tight">
                #{refNumber}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto print:hidden">
              <div className="w-full sm:w-1/2">
                <MagneticButton>
                  <button
                    onClick={generatePDF}
                    disabled={isGeneratingPDF}
                    className="w-full px-8 py-5 bg-blue-600 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    {isGeneratingPDF ? "Generating..." : "Save PDF"}
                  </button>
                </MagneticButton>
              </div>
              <div className="w-full sm:w-1/2">
                <MagneticButton>
                  <Link
                    to="/"
                    className="flex items-center justify-center w-full px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl"
                  >
                    Home
                  </Link>
                </MagneticButton>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 print:hidden">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Redirecting in{" "}
                <span className="text-slate-900 dark:text-white w-4">
                  {countdown}s
                </span>
              </p>
            </div>
          </motion.div>
        ) : (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* LEFT: FORM */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.25em]">
                      Form Progress
                    </p>
                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em]">
                      {progress}%
                    </p>
                  </div>
                  <div className="relative h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${progress}%` }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 rounded-full transition-all duration-300"
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                      {submitError}
                    </p>
                  </div>
                )}

                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl space-y-10"
                >
                  <input type="hidden" name="refNumber" value={refNumber || ""} />
                  <input type="hidden" name="services" value={selectedServices.join(", ")} />

                  {/* SECTION 1: SCOPE */}
                  <div className="space-y-6" id="scope">
                    <SectionHeader number="01" label="Project Scope" icon={FileText} />
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelStyles}>Enquiry Type</label>
                        <select
                          required
                          name="type"
                          onChange={handleChange}
                          value={formData.type || ""}
                          className={inputStyles}
                        >
                          <option value="">Select type</option>
                          {enquiryTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelStyles}>Facility / Site Name</label>
                        <input
                          required
                          type="text"
                          name="facility"
                          onChange={handleChange}
                          value={formData.facility || ""}
                          placeholder="e.g., Jubail Plant II"
                          className={inputStyles}
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: SERVICES */}
                  <div className="space-y-6" id="services">
                    <SectionHeader number="02" label="Required Services" icon={Sparkles} />
                    <label className={labelStyles}>Select all applicable services</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => {
                        const isChecked = selectedServices.includes(service.label);
                        return (
                          <label
                            key={service.id}
                            className={`flex items-center gap-3 p-4 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isChecked
                                ? "bg-blue-600/10 border-blue-600 text-blue-600 dark:text-blue-400 shadow-sm"
                                : "bg-white/40 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleServiceToggle(service.label)}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                                isChecked ? "bg-blue-600 border-blue-600" : "border-slate-300 dark:border-slate-600"
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                            </div>
                            <span>{service.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 3: TECHNICAL */}
                  <div className="space-y-6" id="technical">
                    <SectionHeader number="03" label="Technical Requirements" icon={Shield} />
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelStyles}>Expected Timeline</label>
                        <select
                          name="timeline"
                          onChange={handleChange}
                          value={formData.timeline || ""}
                          className={inputStyles}
                        >
                          <option value="">Select timeframe</option>
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelStyles}>OEM / Brand (If Applicable)</label>
                        <input
                          type="text"
                          name="brand"
                          onChange={handleChange}
                          value={formData.brand || ""}
                          placeholder="e.g., Hirsch, Edwards, Huawei"
                          className={inputStyles}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelStyles}>Technical Specification & Scope Description</label>
                      <textarea
                        required
                        name="desc"
                        onChange={handleChange}
                        value={formData.desc || ""}
                        rows="5"
                        className={inputStyles}
                        placeholder="Provide details regarding system capacities, operating conditions, or scope specifics..."
                      />
                    </div>
                  </div>

                  {/* SECTION 4: LOCATION */}
                  <div className="space-y-6" id="client">
                    <SectionHeader number="04" label="Client & Location" icon={MessageSquare} />
                    <div className="grid md:grid-cols-2 gap-5">
                      <input
                        required
                        type="text"
                        name="location"
                        onChange={handleChange}
                        value={formData.location || ""}
                        placeholder="City / Industrial Area"
                        className={inputStyles}
                      />
                      <input
                        required
                        type="text"
                        name="company"
                        onChange={handleChange}
                        value={formData.company || ""}
                        placeholder="Company / Organization"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  {/* SECTION 5: FILES */}
                  <div className="space-y-6" id="files">
                    <SectionHeader number="05" label="Technical Attachments" icon={Upload} />
                    <label
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragging(false);
                        const dropped = Array.from(e.dataTransfer.files);
                        if (dropped.length) setFiles((prev) => [...prev, ...dropped]);
                      }}
                      className={`relative group overflow-hidden rounded-2xl border-2 border-dashed p-8 flex flex-col items-center justify-center transition-all cursor-pointer ${
                        dragging
                          ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/20"
                          : "border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-800/20 hover:border-blue-500"
                      }`}
                    >
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      />
                      <div className="relative z-10 flex flex-col items-center pointer-events-none">
                        <div className="mb-3 p-3 bg-blue-600/10 rounded-full text-blue-600">
                          <Upload className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                          {files.length > 0 ? `${files.length} File(s) Selected` : "Upload Specifications / Drawings"}
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Attachments listed in PDF · Upload separately in email
                        </p>
                      </div>
                    </label>

                    {files.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {files.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-2 bg-white/80 dark:bg-slate-800 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700"
                          >
                            <FileText className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                            <span className="truncate max-w-[150px]">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              aria-label="Remove file"
                              className="text-red-500 hover:text-red-700 font-bold ml-1 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" strokeWidth={3} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* SECTION 6: CONTACT */}
                  <div className="space-y-6" id="contact">
                    <SectionHeader number="06" label="Contact Person" icon={Headphones} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        required
                        type="text"
                        name="person"
                        onChange={handleChange}
                        value={formData.person || ""}
                        placeholder="Full Name"
                        className={inputStyles}
                      />
                      <input
                        required
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email || ""}
                        placeholder="Work Email"
                        className={inputStyles}
                      />
                      <input
                        required
                        type="text"
                        name="mobile"
                        onChange={handleChange}
                        value={formData.mobile || ""}
                        placeholder="Mobile Number"
                        className={inputStyles}
                      />
                      <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone || ""}
                        placeholder="Landline (Optional)"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6">
                      {[
                        { icon: Shield, label: "Secure Submission" },
                        { icon: Clock, label: "Response in 24h" },
                        { icon: CheckCircle2, label: "No Commitment" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
                          <item.icon className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                          {item.label}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <MagneticButton>
                        <button
                          type="submit"
                          disabled={isSending}
                          className="group px-16 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-2xl disabled:opacity-50 transition-all hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white active:scale-95 flex items-center gap-3"
                        >
                          {isSending ? (
                            <>
                              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Submit Enquiry
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                </form>
              </div>

              {/* RIGHT: STICKY SIDEBAR */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-32 space-y-4">
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 p-6 shadow-xl">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600">
                        <Headphones className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em]">Prefer to Talk?</p>
                        <p className="text-sm font-black text-slate-900 dark:text-white">Direct Contact</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="mailto:sales@iscksa.com" className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-500/30 transition-all">
                        <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                        <div className="min-w-0">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Email</p>
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">sales@iscksa.com</p>
                        </div>
                      </a>
                      <a href="tel:+966138962000" className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-500/30 transition-all">
                        <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                        <div className="min-w-0">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Phone</p>
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">+966 13 896 2000</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] p-6 shadow-xl text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-blue-200" strokeWidth={2.5} />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-200">What Happens Next</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        "We review your enquiry within 24 hours",
                        "A specialist prepares a tailored proposal",
                        "We schedule a call to discuss details",
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] font-black">{i + 1}</div>
                          <p className="text-xs leading-relaxed text-blue-50/90">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {Object.keys(formData).length > 0 && !submitted && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Draft auto-saved</p>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>

      {/* HIDDEN PDF TEMPLATE */}
      <div style={{ position: "absolute", top: "-20000px", left: "0" }}>
        <div
          ref={pdfExportComponent}
          style={{
            width: "794px",
            minHeight: "1123px",
            padding: "60px",
            backgroundColor: "white",
            color: "#0f172a",
            fontFamily: "Arial, sans-serif",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "4px solid #2563eb", paddingBottom: "30px", marginBottom: "30px" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <img src={MainLogo} alt="Logo" style={{ height: "60px", width: "auto", objectFit: "contain" }} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <div style={{ backgroundColor: "#2563eb", padding: "10px 20px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={FooterLogo} alt="Footer Logo" style={{ height: "45px", width: "auto", objectFit: "contain" }} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <h1 style={{ fontSize: "26px", fontWeight: "900", margin: "0 0 5px 0" }}>Enquiry Record</h1>
              <p style={{ color: "#2563eb", fontWeight: "bold", margin: "0", fontSize: "14px" }}>REF: #{refNumber}</p>
            </div>
            <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "bold" }}>Date: {new Date().toLocaleDateString()}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "30px" }}>
            <div>
              <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "10px", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Project Scope</h4>
              <p style={{ fontSize: "13px", margin: "4px 0" }}><strong>Facility:</strong> {formData.facility || "N/A"}</p>
              <p style={{ fontSize: "13px", margin: "4px 0" }}><strong>Enquiry Type:</strong> {formData.type || "N/A"}</p>
              <p style={{ fontSize: "13px", margin: "4px 0" }}><strong>Timeline:</strong> {formData.timeline || "Unspecified"}</p>
              <p style={{ fontSize: "13px", margin: "4px 0" }}><strong>Location:</strong> {formData.location || "N/A"}</p>
              {formData.brand && <p style={{ fontSize: "13px", margin: "4px 0" }}><strong>OEM/Brand:</strong> {formData.brand}</p>}
            </div>
            <div style={{ backgroundColor: "#f8fafc", padding: "16px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
              <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "10px" }}>Client Info</h4>
              <p style={{ fontSize: "13px", fontWeight: "bold", margin: "2px 0" }}>{formData.person}</p>
              <p style={{ fontSize: "12px", color: "#475569", margin: "2px 0" }}>{formData.company}</p>
              <p style={{ fontSize: "12px", color: "#2563eb", fontWeight: "bold", marginTop: "8px" }}>{formData.email}</p>
              <p style={{ fontSize: "12px", color: "#475569", margin: "2px 0" }}>Mobile: {formData.mobile}</p>
              {formData.phone && <p style={{ fontSize: "12px", color: "#475569", margin: "2px 0" }}>Landline: {formData.phone}</p>}
            </div>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "10px", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Requested Services</h4>
            {selectedServices.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {selectedServices.map((srv, idx) => (
                  <span key={idx} style={{ fontSize: "11px", backgroundColor: "#eff6ff", color: "#1d4ed8", fontWeight: "bold", padding: "4px 10px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>✓ {srv}</span>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "12px", color: "#94a3b8" }}>No specific service checkmarks selected.</p>
            )}
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "10px", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Scope Description</h4>
            <p style={{ fontSize: "12px", lineHeight: "1.6", color: "#334155", whiteSpace: "pre-wrap", margin: "0" }}>{formData.desc}</p>
          </div>

          {files.length > 0 && (
            <div style={{ padding: "16px", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
              <h4 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>Attached Specifications ({files.length})</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {files.map((f, i) => (
                  <div key={i} style={{ fontSize: "11px", display: "flex", alignItems: "center", gap: "6px", color: "#475569" }}>
                    <span style={{ color: "#2563eb" }}>📎</span> {f.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "auto", textAlign: "center", paddingTop: "30px" }}>
            <p style={{ fontSize: "9px", color: "#94a3b8", letterSpacing: "2px", textTransform: "uppercase" }}>
              Generated via Khobar Portal • {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;