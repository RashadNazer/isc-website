import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { 
  Reveal, 
  MagneticButton, 
} from "../components/UIComponents";
import Aurora from '../component/Aurora';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate an API call delay
    console.log("Form submitted to sa@iscksa.com", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="relative isolate bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      
      {/* --- GLOBAL AURORA BACKGROUND --- */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 dark:opacity-20">
        <Aurora
          colorStops={["#2563eb", "#ffffff", "#1e3a8a"]} 
          blend={0.5}
          amplitude={1.0}
          speed={0.5} 
        />
      </div>

      {/* HERO / HEADER SECTION */}
      <section className="bg-slate-50/50 dark:bg-slate-900/30 pt-24 md:pt-32 pb-16 md:pb-20 border-b border-slate-100 dark:border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-left lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Headquartered in <span className="text-blue-900 dark:text-blue-300 font-bold">Al-Khobar</span>, ISC operates across the Kingdom to provide 
              unrivaled electronic and communication system support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT GRID */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* National Address Card */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-7 md:p-10 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-900 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">National Address</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                    Building 7739, Twenty-Second Street<br />
                    Madinat Al Umal District 34441<br />
                    Al Khobar, Kingdom of Saudi Arabia
                  </p>
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Post Office</span>
                    <p className="text-base font-bold text-slate-700 dark:text-slate-300">P.O. Box 4034, Al Khobar 31952</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Warehouse & Logistics Card */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 shadow-sm flex flex-col group">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-900 dark:text-blue-400 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.542-7.875-7.875-7.875H9.75M13.5 18.75H16.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Warehouse & Logistics</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">Prince Abdulmohsen Street, Al Khobar</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Service Lines</p>
                      <div className="space-y-2">
                        <a href="tel:+96613862000" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-8962000</a>
                        <a href="tel:+966138650102" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-8650102</a>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Warehouse Emails</p>
                      <div className="space-y-2">
                        <a href="mailto:procurement@iscksa.com" className="block text-base font-bold text-blue-700 dark:text-blue-400 hover:underline">procurement@iscksa.com</a>
                        <a href="mailto:store@iscksa.com" className="block text-base font-bold text-blue-700 dark:text-blue-400 hover:underline">store@iscksa.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ROW 2: SALES & SUPPORT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          <Reveal delay={0.3} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-sm flex flex-col">
              <div className="mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase">Corporate HQ & Sales</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">General Inquiry</p>
                  <a href="tel:+966138962000" className="text-xl font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-8962000</a>
                  <p className="text-slate-500 text-xs mt-2 font-mono">Fax: +966-13-8984602</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Sales Email</p>
                  <a href="mailto:sales@iscksa.com" className="text-lg font-bold text-blue-700 dark:text-blue-400 hover:underline">sales@iscksa.com</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-sm flex flex-col">
              <div className="mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase">Projects & Support</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Service Lines</p>
                  <div className="space-y-2">
                    <a href="tel:+966138990228" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-8990228</a>
                    <a href="tel:+966138943206" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-8943206</a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Support Emails</p>
                  <div className="space-y-2">
                    <a href="mailto:service@iscksa.com" className="block text-base font-bold text-blue-700 dark:text-blue-400 hover:underline">service@iscksa.com</a>
                    <a href="mailto:pdadmin@iscksa.com" className="block text-base font-bold text-blue-700 dark:text-blue-400 hover:underline">pdadmin@iscksa.com</a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* --- FORM & REDIRECT SECTION --- */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
  
  {/* Left: Combined Support & Quote Redirects (Stretched to match right) */}
  <div className="lg:col-span-4 flex flex-col gap-6">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1 bg-blue-600 dark:bg-blue-900/40 p-8 rounded-[2.5rem] text-white border border-blue-400/20 shadow-xl flex flex-col justify-between"
    >
      <div>
        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Request a Quote</h2>
        <p className="text-blue-100 mb-6 opacity-90 leading-relaxed text-sm">
          Looking for a specific solution or project estimate? Our sales team is ready to assist with detailed proposals.
        </p>
      </div>
      <a href="/enquiry" className="inline-flex w-full items-center justify-center gap-3 bg-white text-blue-900 font-black py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all active:scale-95 group">
        Go to Quote Page
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="flex-1 bg-slate-900 dark:bg-slate-900/60 p-8 rounded-[2.5rem] text-white border border-slate-700/50 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-black mb-4 uppercase tracking-tight">Technical Support</h2>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
          Existing maintenance contract holders can access our support portal for fault reporting.
        </p>
      </div>
      <a href="/support" className="inline-flex w-full items-center justify-center gap-3 border-2 border-slate-700 text-white font-bold py-3 px-8 rounded-2xl hover:bg-slate-800 transition-all">
        Support Portal
      </a>
    </motion.div>
  </div>

  {/* Right: The Main Inquiry Form (The "Anchor" for height) */}
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="lg:col-span-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-center min-h-[650px]"
  >
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">General Inquiry</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium">For general questions, please use the form below.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name *</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Email *</label>
                <input required type="email" placeholder="john@company.com" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
              <input type="text" placeholder="General Inquiry" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
              <textarea rows={6} placeholder="How can we help you?" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 px-6 py-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 w-full sm:w-auto">
                <input required type="checkbox" id="captcha" className="w-5 h-5 rounded cursor-pointer accent-blue-600" />
                <label htmlFor="captcha" className="text-sm font-bold text-slate-600 dark:text-slate-300 cursor-pointer">I am not a robot</label>
              </div>
              <button type="submit" className="w-full sm:flex-1 bg-slate-900 dark:bg-blue-600 text-white font-black py-4 px-8 rounded-xl hover:bg-slate-800 dark:hover:bg-blue-500 transition-all shadow-lg active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase">Message Delivered</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-10">Thank you. Your message has been sent to our team at ISC.</p>
          <button onClick={() => setIsSubmitted(false)} className="text-blue-600 font-bold hover:underline underline-offset-4">Send another message</button>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
</div>
      </section>
    </div>
  );
}