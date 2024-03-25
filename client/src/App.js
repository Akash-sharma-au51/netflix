import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="maincontent">
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
