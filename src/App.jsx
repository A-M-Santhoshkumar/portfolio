
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './index.css';
import ScrollToTop from "./Components/ScrollToTop";
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import MouseDot from "./Components/MouseDot";

function App() {
  return (
    <Router>
      <MouseDot />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
