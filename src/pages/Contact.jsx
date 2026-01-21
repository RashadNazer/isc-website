import React from 'react';
import { motion } from 'framer-motion';
import { 
  Reveal, 
  MagneticButton, 
  StatCounter, 
  MeshBackground 
} from "../components/UIComponents";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      
      {/* HERO / HEADER SECTION 
          Purpose: Sets the context of the page with the primary location (Al-Khobar).
          Styling: Uses a subtle background tint (slate-50) and scaled typography for mobile vs desktop.
      */}
      <section className="bg-slate-50 dark:bg-slate-900/50 pt-24 md:pt-32 pb-16 md:pb-20 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-left lg:text-center">
          {/* Motion div handles the initial fade-in and slide-up of the header text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Headquartered in <span className="text-blue-900 dark:text-blue-300 font-bold">Al-Khobar</span>, ISC operates across the Kingdom to provide 
              unrivaled electronic and communication system support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT GRID 
          Purpose: Organizes physical addresses, logistics, and department-specific contact info.
      */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        
        {/* ROW 1: ADDRESS & LOGISTICS 
            Layout: Stacked on mobile, side-by-side (2 cols) on Large screens.
            Note: "h-full" on Reveal and child ensures both cards stretch to match the tallest content.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* National Address Card */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-white dark:bg-slate-900 p-7 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Icon Container with hover animation */}
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
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col">
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
                    <a href="tel:+96613862000" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-862000</a>
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

        {/* ROW 2: SALES & SUPPORT 
            Layout: Changes to 2 cols starting at 'md' breakpoint.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          
          {/* Corporate HQ & Sales Information */}
          <Reveal delay={0.3} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col">
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Corporate HQ & Sales
              </h3>
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

          {/* Projects & Service Support Lines */}
          <Reveal delay={0.4} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col">
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Projects & Support
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Service Lines</p>
                  <div className="space-y-2">
                    <a href="tel:+966138990228" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-8990228</a>
                    <a href="tel:+966138943206" className="block text-lg font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">+966-13-894-3206</a>
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

        {/* E-SERVICE PORTAL SECTION 
            Purpose: High-impact CTA for existing clients with maintenance contracts.
            Visuals: Uses a background blur glow and glassmorphism cards for a "tech-forward" feel.
        */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-slate-900/40 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Decorative Glow background effect */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-600/10 dark:bg-blue-400/5 blur-[120px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Column: Portal Information */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Digital Maintenance
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">ISC e-Service Portal</h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
                Avail a <span className="text-white font-bold underline decoration-blue-500 underline-offset-8">Maintenance Contract</span> to 
                enable real-time digital fault reporting and system monitoring.
              </p>
              
              {/* Feature Highlights with backdrop blur cards */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl flex-1 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-lg shadow-lg">1</div>
                  <span className="text-sm font-bold tracking-wide">Instant Reporting</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl flex-1 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-lg shadow-lg">2</div>
                  <span className="text-sm font-bold tracking-wide">Live Monitoring</span>
                </div>
              </div>
            </div>

            {/* Right Column: Portal Login Box */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
                <h4 className="text-lg md:text-xl font-bold mb-6 text-center md:text-left">Access Your Dashboard</h4>
                <a 
                  href="https://e-service.iscksa.com/portal/#/mcportal/login/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 group"
                >
                  Login to Portal
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-xs mb-2 uppercase tracking-tighter">Support Enquiries:</p>
                    <a href="mailto:mcsupport@iscksa.com" className="text-blue-400 font-bold hover:text-blue-300 break-all text-sm md:text-base">
                        mcsupport@iscksa.com
                    </a>
                </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}