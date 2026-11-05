// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  FileText,
} from 'lucide-react';
import logo from '../assets/footerlogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100 pt-16 pb-8 border-t border-blue-900/50">
      <div className="w-full px-6 md:px-10 lg:px-12 xl:px-16">
        {/* MAIN GRID SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand + Headquarters */}
<div className="flex flex-col lg:col-span-2">
  <Link to="/">
    <img
      src={logo}
      alt="ISC Logo"
      className="h-10 md:h-12 w-auto mb-6 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
    />
  </Link>

  <p className="text-sm leading-relaxed text-blue-200/70 max-w-md mb-6">
    International Security & Communications Co. (ISC) is a leader in
    electronic systems integration, providing state-of-the-art
    solutions since 1984.
  </p>

  {/* Social + Headquarters */}
  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
    {/* Social Media */}
    <div>
      <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
        Follow Us
      </h4>

      <div className="flex items-center gap-3">
        <a
          href="https://www.facebook.com/ISC.KSA.HQ/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-blue-900/50 text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg group"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://www.linkedin.com/company/international-security-and-communications-limited"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-blue-900/50 text-blue-200 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-lg group"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>

    {/* Headquarters */}
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />

      <div className="text-sm text-blue-100/80 leading-relaxed">
        <span className="text-white font-bold block mb-1">
          Headquarters
        </span>
        Bldg. 7739, Madinat Al Umal 34441
        <br />
        PO Box 4034, Al Khobar 31952
      </div>
    </div>
  </div>
</div>


          {/* Column 2: Company */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/why-isc"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Why ISC
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Products */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/services"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Products & Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Portals */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/insights"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Insights & News
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  FAQ / Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Technical Support
                </Link>
              </li>
              <li>
                <Link
                  to="/vendors"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Vendor Registration
                </Link>
              </li>
              <li>
                <a
                  href="/ISC_CompanyProfile.pdf"
                  download="ISC_CompanyProfile.pdf"
                  className="text-blue-100 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  <FileText className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Company Profile
                  <Download className="w-3 h-3 opacity-60" strokeWidth={2.5} />
                </a>
              </li>
              <li>
                <Link
                  to="/enquiry"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="https://e-service.iscksa.com/portal/#/mcportal/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  MC Portal
                  <span className="text-[10px] bg-blue-400/20 text-blue-100 px-1.5 py-0.5 rounded tracking-tighter">
                    LOGIN
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-blue-900/50 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-medium text-blue-200/60 text-center">
          <p className="order-2 lg:order-1">
            Copyright © {currentYear} - International Security & Communications
            Co. <span className="hidden md:inline">|</span>{' '}
            <br className="md:hidden" /> All rights reserved
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 order-1 lg:order-2">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-4"
            >
              Cookie Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-4"
            >
              Terms of Use
            </Link>
            <Link
              to="/anti-bribery"
              className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-4"
            >
              Anti-Bribery
            </Link>
            <Link
              to="/code-of-conduct"
              className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-4"
            >
              Code of Conduct
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-4"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}