import React from "react";
// UI Core Components: MeshBackground provides a dynamic animated gradient; SectionDivider handles transitions between colors.
import { MeshBackground, SectionDivider } from "../components/UIComponents";

// Modular Section Components for the Homepage
import HeroSection from "./Home/HeroSection";
import AboutSection from "./Home/AboutSection";
import ServicesSection from "./Home/ServicesSection";
import SolutionsSection from "./Home/SolutionsSection";
import SupportSection from "./Home/SupportSection";
import CustomersSection from "./Home/CustomersSection";
import ProjectsSection from "./Home/ProjectsSection";
import ProductsSection from "./Home/ProductsSection";
import RequestQuoteCTA from "./Home/RequestQuoteCTA";

/**
 * Home Component
 * This is the main landing page. It uses a vertical stack of sections.
 * Note: IDs are used for smooth-scroll navigation linked in the Layout/Navbar.
 */
const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      
      {/* 1. HERO: Entry point of the site. Uses a divider to transition smoothly into the light-gray About section. */}
      <section className="relative" id="home">
        <HeroSection />
        <SectionDivider colorClass="fill-slate-50 dark:fill-slate-900" />
      </section>

      {/* 2. ABOUT: Explains company mission/vision. Uses a contrasting background (slate-50) to break the white space. */}
      <section className="bg-slate-50 dark:bg-slate-900" id="about">
        <AboutSection />
      </section>

      {/* 3. SERVICES: Detailed breakdown of service offerings. */}
      <section className="relative" id="services">
        <ServicesSection />
      </section>

      {/* 4. SOLUTIONS: Wrapped in MeshBackground for a high-tech visual feel. 
          The 'id' is placed on an outer div to prevent MeshBackground absolute positioning from interfering with scroll-to targets. */}
      <div id="solutions">
        <MeshBackground className="bg-slate-50 dark:bg-slate-900/50">
          <SolutionsSection />
        </MeshBackground>
      </div>

      {/* 5. SUPPORT: 24/7 Support and maintenance information. */}
      <section className="relative" id="support">
        <SupportSection />
      </section>

      {/* 6. CUSTOMERS: Logo grid of trusted partners. Ends with a divider to transition into the Projects section. */}
      <section className="relative bg-white dark:bg-slate-950" id="customers-preview">
        <CustomersSection />
        <SectionDivider colorClass="fill-slate-100 dark:fill-slate-900" />
      </section>

      {/* 7. PROJECTS: Gallery of completed work. Uses slate-100 background to distinguish it from the Customers section. */}
      <div id="projects">
        <MeshBackground className="bg-slate-100 dark:bg-slate-900 py-10">
          <ProjectsSection />
        </MeshBackground>
      </div>

      {/* 8. PRODUCTS: Highlights key technology partners and hardware. */}
      <section className="relative" id="products">
        <ProductsSection />
      </section>

      {/* 9. REQUEST QUOTE CTA: Final Call-to-Action section before the footer. */}
      <section className="relative bg-white dark:bg-slate-950" id="request-quote-cta">
        <RequestQuoteCTA />
      </section>
    </div>
  );
};

export default Home;