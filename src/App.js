import './App.css';
import './index.css';
import React from 'react';
import { HashRouter as Router , Route, Routes } from 'react-router-dom';
import Eye_Testing  from './EyeTesting ';
import Navbar from './Navbar';
import Get_Appointment from './Appointment';
import About from './About';
import Contact from './Contact';
import Frames from './Frames';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Eye_Testing />} />
          <Route path="/frames" element={<Frames />} />
          <Route path="/appointment" element={<Get_Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
