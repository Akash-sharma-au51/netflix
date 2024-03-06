import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './compoents/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './compoents/Footer.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
};

export default App;
