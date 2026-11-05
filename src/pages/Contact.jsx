import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Headphones,
  Briefcase,
  Warehouse,
  Send,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Aurora from "../component/Aurora";
import { usePageTitle } from "../hooks/usePageTitle";

/* Full-width wrapper */
const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* =========================================================
   DATA — all contact channels
   ========================================================= */
const contactChannels = [
  {
    id: "sales",
    label: "Sales & New Projects",
    tagline: "For enquiries, proposals & project estimates",
    icon: Briefcase,
    accent: "blue",
    emails: [{ address: "sales@iscksa.com", label: "Sales Team" }],
    phones: [{ number: "+966-13-8962000", label: "Main Line" }],
    ctaLabel: "Email Sales",
    ctaHref:
      "mailto:sales@iscksa.com?subject=Sales%20Enquiry%20from%20Website",
  },
  {
    id: "support",
    label: "Technical Support",
    tagline: "For existing contract holders & system faults",
    icon: Headphones,
    accent: "emerald",
    emails: [
      { address: "service@iscksa.com", label: "Service Desk" },
      { address: "pdadmin@iscksa.com", label: "Project Admin" },
    ],
    phones: [
      { number: "+966-13-8990228", label: "Service Line 1" },
      { number: "+966-13-8943206", label: "Service Line 2" },
    ],
    ctaLabel: "Contact Support",
    ctaHref:
      "mailto:service@iscksa.com?subject=Support%20Request%20from%20Website",
  },
  {
    id: "logistics",
    label: "Warehouse & Logistics",
    tagline: "For procurement, deliveries & material handling",
    icon: Warehouse,
    accent: "amber",
    emails: [
      { address: "procurement@iscksa.com", label: "Procurement" },
      { address: "store@iscksa.com", label: "Warehouse" },
    ],
    phones: [
      { number: "+966-13-8962000", label: "Service Line 1" },
      { number: "+966-13-8650102", label: "Service Line 2" },
    ],
    ctaLabel: "Contact Logistics",
    ctaHref:
      "mailto:procurement@iscksa.com?subject=Logistics%20Enquiry%20from%20Website",
  },
];

const accentMap = {
  blue: {
    bg: "bg-blue-600/10",
    border: "border-blue-600/20",
    text: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-600/10",
    iconText: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-600 to-blue-500",
    buttonBg: "bg-blue-600 hover:bg-blue-700",
  },
  emerald: {
    bg: "bg-emerald-600/10",
    border: "border-emerald-600/20",
    text: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-600/10",
    iconText: "text-emerald-600 dark:text-emerald-400",
    gradient: "from-emerald-600 to-teal-500",
    buttonBg: "bg-emerald-600 hover:bg-emerald-700",
  },
  amber: {
    bg: "bg-amber-600/10",
    border: "border-amber-600/20",
    text: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-600/10",
    iconText: "text-amber-600 dark:text-amber-400",
    gradient: "from-amber-500 to-orange-500",
    buttonBg: "bg-amber-600 hover:bg-amber-700",
  },
};

/* =========================================================
   ContactChannelCard
   ========================================================= */
const ContactChannelCard = ({ channel, index }) => {
  const Icon = channel.icon;
  const a = accentMap[channel.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden flex flex-col"
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.gradient}`}
      />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-2xl ${a.iconBg} border ${a.border} flex items-center justify-center ${a.iconText} flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}
          >
            <Icon className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              {channel.label}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
              {channel.tagline}
            </p>
          </div>
        </div>

        <div className="space-y-5 mb-6 flex-1">
          <div>
            <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
              <Mail className="w-3 h-3" strokeWidth={2.5} />
              Email
            </p>
            <div className="space-y-1.5">
              {channel.emails.map((email, i) => (
                <a
                  key={i}
                  href={`mailto:${email.address}`}
                  className="block text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                >
                  {email.address}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
              <Phone className="w-3 h-3" strokeWidth={2.5} />
              Phone
            </p>
            <div className="space-y-1.5">
              {channel.phones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
                  className="block text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {phone.number}
                </a>
              ))}
            </div>
          </div>
        </div>

        <a
          href={channel.ctaHref}
          data-cursor="hover"
          className={`group/btn mt-auto inline-flex items-center justify-between gap-2 ${a.buttonBg} text-white px-5 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg active:scale-[0.98]`}
        >
          {channel.ctaLabel}
          <ArrowRight
            className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"
            strokeWidth={3}
          />
        </a>
      </div>
    </motion.div>
  );
};

/* =========================================================
   MAIN
   ========================================================= */
export default function Contact() {
  usePageTitle("Contact Us");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      console.log("Form submitted to sales@iscksa.com", formData);
      setIsSending(false);
      setIsSubmitted(true);
    }, 600);
  };

  const inputStyles =
    "w-full bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all";
  const labelStyles =
    "text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-1 mb-2 block";

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* HERO */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 relative">
        <FullWidth className="text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-6">
                Contact{" "}
                <span className="text-slate-400 dark:text-slate-600">Us.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Headquartered in{" "}
                <span className="text-blue-900 dark:text-blue-300 font-bold">
                  Al-Khobar
                </span>
                , ISC operates across the Kingdom to provide unrivaled
                electronic and communication system support.
              </p>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* CONTACT CHANNELS */}
      <section className="py-12 md:py-16 relative z-10">
        <FullWidth>
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <Building2 className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  Reach Us Your Way
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {contactChannels.map((channel, i) => (
              <ContactChannelCard key={channel.id} channel={channel} index={i} />
            ))}
          </div>
        </FullWidth>
      </section>

      {/* FORM + LOCATION */}
      <section className="py-16 md:py-20 relative z-10">
        <FullWidth>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* LEFT: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800/60"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">
                        Send a Message
                      </p>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                        General Inquiry.
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        For general questions or feedback, use the form below.
                        Our team responds within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelStyles}>Full Name *</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={inputStyles}
                          />
                        </div>
                        <div>
                          <label className={labelStyles}>Work Email *</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={inputStyles}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelStyles}>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          className={inputStyles}
                        />
                      </div>

                      <div>
                        <label className={labelStyles}>Your Message *</label>
                        <textarea
                          required
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className={`${inputStyles} resize-none`}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <label className="flex items-center gap-3 px-5 py-4 rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 cursor-pointer hover:border-blue-500/40 transition-colors">
                          <input
                            required
                            type="checkbox"
                            className="w-5 h-5 rounded accent-blue-600 cursor-pointer"
                          />
                          <span className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                            I am not a robot
                          </span>
                        </label>
                        <button
                          type="submit"
                          disabled={isSending}
                          data-cursor="hover"
                          className="flex-1 group bg-slate-900 dark:bg-blue-600 text-white font-black py-4 px-6 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em]"
                        >
                          {isSending ? (
                            <>
                              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" strokeWidth={2.5} />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                        {[
                          { icon: Shield, label: "Secure" },
                          { icon: Clock, label: "24h Response" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]"
                          >
                            <item.icon className="w-3 h-3" strokeWidth={2.5} />
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-blue-600/40"
                    >
                      <CheckCircle2 className="w-10 h-10" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                      Message Delivered
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
                      Thank you. Your message has been routed to our team.
                      We'll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] hover:underline underline-offset-4"
                    >
                      Send Another Message
                      <ChevronRight className="w-3 h-3" strokeWidth={3} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* RIGHT: Location + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-7 md:p-8 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-1">
                      Corporate HQ
                    </p>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                      National Address
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  Building 7739, Twenty-Second Street
                  <br />
                  Madinat Al Umal District 34441
                  <br />
                  Al Khobar, Kingdom of Saudi Arabia
                </p>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/60">
                  <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">
                    Post Office
                  </p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    P.O. Box 4034, Al Khobar 31952
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=26.298219,50.207459"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-[0.2em] py-3.5 px-5 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                >
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3" strokeWidth={2.5} />
                </a>
              </div>

              <div className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-7 md:p-8 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                    <Warehouse className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.3em] mb-1">
                      Logistics Facility
                    </p>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                      Warehouse
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Building 7042, Abbad bin Abbar
                  <br />
                  Al-Fawaziyah Industrial Area 34627
                  <br />
                  Al Khobar, Kingdom of Saudi Arabia
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=26.244668,50.214130"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full border-2 border-amber-500/30 hover:bg-amber-500/10 text-amber-700 dark:text-amber-400 font-black text-[10px] uppercase tracking-[0.2em] py-3.5 px-5 rounded-xl transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Open in Google Maps
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/enquiry"
                  data-cursor="hover"
                  className="group bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[1.5rem] p-5 text-white shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Send className="w-4 h-4" strokeWidth={2.5} />
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] opacity-90">
                      Detailed
                    </span>
                  </div>
                  <p className="text-sm font-black leading-tight mb-1">
                    Request a Quote
                  </p>
                  <p className="text-[10px] text-blue-100 leading-snug">
                    Full project enquiries
                  </p>
                  <ArrowRight
                    className="w-4 h-4 mt-3 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                  />
                </Link>

                <Link
                  to="/support"
                  data-cursor="hover"
                  className="group bg-slate-900 dark:bg-slate-800 rounded-[1.5rem] p-5 text-white shadow-xl hover:bg-slate-800 dark:hover:bg-slate-700 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-4 h-4" strokeWidth={2.5} />
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] opacity-90">
                      Contracts
                    </span>
                  </div>
                  <p className="text-sm font-black leading-tight mb-1">
                    Support Portal
                  </p>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    For existing clients
                  </p>
                  <ArrowRight
                    className="w-4 h-4 mt-3 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </FullWidth>
      </section>
    </div>
  );
}