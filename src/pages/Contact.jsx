import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-50 pt-24 md:pt-32 pb-16 md:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Get In Touch</h2>
          {/* Responsive Font: 3xl on mobile, 5xl on desktop */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Headquartered in <span className="text-blue-900 font-semibold">Al-Khobar</span>, ISC operates across the Kingdom to provide 
            unrivaled electronic and communication system support.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        
        {/* Addresses & Core Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* National Address Card */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">National Address</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                  Building 7739, Twenty-Second Street<br />
                  Madinat Al Umal District 34441<br />
                  Al Khobar, Kingdom of Saudi Arabia
                </p>
                <div className="pt-4 border-t border-slate-50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Post Office</span>
                  <p className="text-sm md:text-base text-slate-600">P.O. Box 4034, Al Khobar 31952</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warehouse & Logistics Card */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-900 shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.542-7.875-7.875-7.875H9.75M13.5 18.75H16.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Warehouse & Logistics</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">Prince Abdulmohsen Street, Al Khobar</p>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-bold text-slate-700">Tel:</span> +966-13-862000</p>
                  <p className="text-sm"><span className="font-bold text-slate-700">Tel:</span> +966-13-8650102</p>
                  {/* Email wrapping for mobile */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-2 mt-2">
                    <a href="mailto:procurement@iscksa.com" className="text-blue-700 text-xs md:text-sm font-bold hover:underline truncate">procurement@iscksa.com</a>
                    <a href="mailto:store@iscksa.com" className="text-blue-700 text-xs md:text-sm font-bold hover:underline truncate">store@iscksa.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {/* Sales & HQ */}
          <div className="p-6 md:p-8 rounded-[2rem] border border-slate-100 bg-white">
            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Corporate HQ & Sales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2">General Inquiry</p>
                <a href="tel:+966138962000" className="text-lg md:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">+966-13-8962000</a>
                <p className="text-slate-500 text-xs mt-1">Fax: +966-13-8984602</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Sales Email</p>
                <a href="mailto:sales@iscksa.com" className="text-base md:text-lg font-bold text-blue-700 hover:underline">sales@iscksa.com</a>
              </div>
            </div>
          </div>

          {/* Support & Maintenance */}
          <div className="p-6 md:p-8 rounded-[2rem] border border-slate-100 bg-white">
            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Projects & Support
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Service Lines</p>
                <div className="space-y-1">
                  <a href="tel:+966138990228" className="block text-base md:text-lg font-bold text-slate-900 hover:text-blue-600">+966-13-8990228</a>
                  <a href="tel:+966138943206" className="block text-base md:text-lg font-bold text-slate-900 hover:text-blue-600">+966-13-894-3206</a>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Support Emails</p>
                <div className="space-y-1">
                  <a href="mailto:service@iscksa.com" className="block text-base font-bold text-blue-700 hover:underline">service@iscksa.com</a>
                  <a href="mailto:pdadmin@iscksa.com" className="block text-base font-bold text-blue-700 hover:underline">pdadmin@iscksa.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* e-Service Portal Section */}
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Digital Maintenance
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">ISC e-Service Portal</h2>
              <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                <p>
                  Avail a <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">Maintenance Contract</span> to 
                  enable digital access for fault reporting.
                </p>
                {/* Features Stacking on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl flex-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                    <span className="text-sm font-medium">Fault Reporting</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl flex-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                    <span className="text-sm font-medium">Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

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
        </div>
      </section>
    </div>
  );
}