// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import PartnersPage from './pages/Products';
import ScrollToTop from './components/ScrollToTop';
import CustomersPage from './pages/Customers';
// Import other pages as you create them:
// import About from './pages/About'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<PartnersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          {/* Add more routes here as you build the pages */}
          <Route path="/about" element={<div className="py-20 text-center">About Us Page</div>} />
          <Route path="/services" element={<div className="py-20 text-center">Services Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;