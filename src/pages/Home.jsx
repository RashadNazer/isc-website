import React from "react";
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
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <SupportSection />
      <CustomersSection />
      <ProjectsSection />
      <ProductsSection />
    </div>
  );
};

export default Home;
