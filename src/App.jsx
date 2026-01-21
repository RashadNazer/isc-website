import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Components
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* If Layout is causing the blank screen, try removing <Layout> temporarily */}
      <Layout> 
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
          {/* Fallback for undefined routes */}
          <Route path="*" element={<div className="py-40 text-center">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;