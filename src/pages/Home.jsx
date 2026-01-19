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

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. HERO: Leading into About with an angle */}
      <div className="relative">
        <HeroSection />
        <SectionDivider colorClass="fill-slate-50 dark:fill-slate-900" />
      </div>

      {/* 2. ABOUT: Soft background for readability */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <AboutSection />
      </section>

      {/* 3. SERVICES: Clean white background */}
      <ServicesSection />

      {/* 4. SOLUTIONS: Add depth with Mesh */}
      <MeshBackground className="bg-slate-50 dark:bg-slate-900/50">
        <SolutionsSection />
      </MeshBackground>

      {/* 5. SUPPORT: Transitioning back to white */}
      <SupportSection />

      {/* 6. CUSTOMERS: Using an angled cut to separate the "Social Proof" section */}
      <div className="relative bg-white dark:bg-slate-950">
        <CustomersSection />
        <SectionDivider colorClass="fill-slate-100 dark:fill-slate-900" />
      </div>

      {/* 7. PROJECTS: Deep Mesh for your portfolio carousel */}
      <MeshBackground className="bg-slate-100 dark:bg-slate-900 py-10">
        <ProjectsSection />
      </MeshBackground>

      {/* 8. PRODUCTS: Final core section */}
      <ProductsSection />
    </div>
  );
};

export default Home;