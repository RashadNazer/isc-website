import React from "react";
import { MeshBackground, SectionDivider } from "../components/UIComponents";
import HeroSection from "./Home/HeroSection";
import AboutSection from "./Home/AboutSection";
import ServicesSection from "./Home/ServicesSection";
import SolutionsSection from "./Home/SolutionsSection";
import SupportSection from "./Home/SupportSection";
import CustomersSection from "./Home/CustomersSection";
import ProjectsSection from "./Home/ProjectsSection";
import ProductsSection from "./Home/ProductsSection";
import RequestQuoteCTA from "./Home/RequestQuoteCTA";


const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. HERO */}
      <section className="relative" id="home">
        <HeroSection />
        <SectionDivider colorClass="fill-slate-50 dark:fill-slate-900" />
      </section>

      {/* 2. ABOUT */}
      <section className="bg-slate-50 dark:bg-slate-900" id="about">
        <AboutSection />
      </section>

      {/* 3. SERVICES */}
      <section className="relative" id="services">
        <ServicesSection />
      </section>

      {/* 4. SOLUTIONS - ID on a wrapper to ensure MeshBackground doesn't swallow it */}
      <div id="solutions">
        <MeshBackground className="bg-slate-50 dark:bg-slate-900/50">
          <SolutionsSection />
        </MeshBackground>
      </div>

      {/* 5. SUPPORT */}
      <section className="relative" id="support">
        <SupportSection />
      </section>

      {/* 6. CUSTOMERS */}
      <section className="relative bg-white dark:bg-slate-950" id="customers-preview">
        <CustomersSection />
        <SectionDivider colorClass="fill-slate-100 dark:fill-slate-900" />
      </section>

      {/* 7. PROJECTS */}
      <div id="projects">
        <MeshBackground className="bg-slate-100 dark:bg-slate-900 py-10">
          <ProjectsSection />
        </MeshBackground>
      </div>

      {/* 8. PRODUCTS */}
      <section className="relative" id="products">
        <ProductsSection />
      </section>

      {/* 9. REQUEST QUOTE CTA */}
      <section className="relative bg-white dark:bg-slate-950" id="request-quote-cta">
        <RequestQuoteCTA />
      </section>
    </div>
  );
};

export default Home;