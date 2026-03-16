import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import ScrollToTop from "./Components/ScrollToTop";
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import MouseDot from "./Components/MouseDot";

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import BlogPage from './Pages/BlogPage';

function App() {
  return (
    <HelmetProvider>
      <Router>

        <MouseDot />
        <Nav />
        <ScrollToTop />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dynamic Blog Route */}
          <Route path="/blog/:slug" element={<BlogPage />} />

        </Routes>

        <Footer />

      </Router>
    </HelmetProvider>
  );
}

export default App;