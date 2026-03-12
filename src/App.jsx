
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import './index.css';
import ScrollToTop from "./Components/ScrollToTop";
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import GoogleAdsCoimbatore from './Blog/GoogleAdsCoimbatore';
import MetaAdsCoimbatore from './Blog/MetaAdsCoimbatore';
import WebsiteDesignCoimbatore from './Blog/WebsiteDesignCoimbatore';
import MouseDot from "./Components/MouseDot";

function App() {
  return (
    <HelmetProvider>
    <Router>
      <MouseDot />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/google-ads-coimbatore" element={<GoogleAdsCoimbatore />} />
        <Route path="/meta-ads-coimbatore" element={<MetaAdsCoimbatore />} />
        <Route path="/website-design-coimbatore" element={<WebsiteDesignCoimbatore />} />
      </Routes>
      <Footer />
    </Router>
    </HelmetProvider>
  );
}

export default App;
