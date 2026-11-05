import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// UI Core
import { MeshBackground, SectionDivider } from "../components/UIComponents";
import { usePageTitle } from "../hooks/usePageTitle";

// Sections
import HeroSection from "./Home/HeroSection";
import AboutSection from "./Home/AboutSection";
import ServicesSection from "./Home/ServicesSection";
import SolutionsSection from "./Home/SolutionsSection";
import SupportSection from "./Home/SupportSection";
import CustomersSection from "./Home/CustomersSection";
import ProjectsSection from "./Home/ProjectsSection";
import ProductsSection from "./Home/ProductsSection";
import RequestQuoteCTA from "./Home/RequestQuoteCTA";

// New components
import MarqueeBand from "../components/MarqueeBand";

const Home = () => {
  const stickyRef = useRef(null);
  usePageTitle();

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end start"],
  });

  const stickyScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const stickyOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.3]);
  const stickyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const stickyBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(8px)"]
  );

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. HERO */}
      <section className="relative isolate" id="home">
        <HeroSection />
        <SectionDivider colorClass="fill-slate-50 dark:fill-slate-900" />
      </section>

      {/* 2. ABOUT — Sticky stack container */}
      <div ref={stickyRef} className="relative">
        <motion.div
          style={{
            scale: stickyScale,
            opacity: stickyOpacity,
            y: stickyY,
            filter: stickyBlur,
          }}
          className="sticky top-0 bg-slate-50 dark:bg-slate-900 origin-top"
          id="about"
        >
          <AboutSection />
        </motion.div>

        {/* 3. SERVICES slides over About */}
        <div className="relative z-10 bg-white dark:bg-slate-950" id="services">
          <ServicesSection />
        </div>
      </div>

      {/* Marquee Band */}
      <MarqueeBand
        items={[
          "ISO 9001",
          "SIRA CERTIFIED",
          "40+ YEARS",
          "2000+ PROJECTS",
          "24/7 SUPPORT",
          "LOW CURRENT SYSTEMS",
        ]}
        speed={30}
      />

      {/* 4. SOLUTIONS */}
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
      <section
        className="relative bg-white dark:bg-slate-950"
        id="customers-preview"
      >
        <CustomersSection />
        <SectionDivider colorClass="fill-slate-100 dark:fill-slate-900" />
      </section>

      {/* 7. PROJECTS */}
      <div id="projects">
        <MeshBackground className="bg-slate-100 dark:bg-slate-900 py-10">
          <ProjectsSection />
        </MeshBackground>
      </div>

      {/* Marquee Band 2 */}
      <MarqueeBand
        items={[
          "CCTV",
          "ACCESS CONTROL",
          "FIRE ALARM",
          "STRUCTURED CABLING",
          "TETRA RADIO",
        ]}
        speed={35}
        direction="right"
      />

      {/* 8. PRODUCTS */}
      <section className="relative" id="products">
        <ProductsSection />
      </section>

      {/* 9. REQUEST QUOTE CTA */}
      <section
        className="relative bg-white dark:bg-slate-950"
        id="request-quote-cta"
      >
        <RequestQuoteCTA />
      </section>
    </div>
  );
};

export default Home;