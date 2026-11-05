import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Components
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

// Global interactive components
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import CookieConsent from './components/CookieConsent';
import SiteChatbot from './components/SiteChatbot';

// Pages
import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import PartnersPage from './pages/Products';
import CustomersPage from './pages/Customers';
import Enquiry from "./pages/Enquiry";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import SolutionsPage from "./pages/Solutions";
import Support from "./pages/Support";
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Industries from './pages/Industries';
import Leadership from './pages/Leadership';
import SectorDetail from './pages/SectorDetail';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import FAQ from './pages/FAQ';
import Compliance from './pages/Compliance';
import Vendors from './pages/Vendors';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import CookiePolicy from './pages/CookiePolicy';
import WhyISC from './pages/WhyISC';
import AntiBribery from './pages/AntiBribery';
import CodeOfConduct from './pages/CodeOfConduct';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <CookieConsent />
      <SiteChatbot />

      <Layout>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<PartnersPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/industries/:id" element={<SectorDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/why-isc" element={<WhyISC />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/anti-bribery" element={<AntiBribery />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Layout>
    </Router>
  );
}

export default App;