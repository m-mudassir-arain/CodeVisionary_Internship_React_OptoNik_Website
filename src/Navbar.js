import React, { useState } from 'react';
import './App.css';
import './index.css'
import { Link } from 'react-router-dom';
import sitelogo from './assets/Site-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav id='Navbar' className="p-4 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="#" className="text-black font-bold text-xl">
          <img src={sitelogo} className='w-72' alt="Site Logo" />
        </Link>

        {/* Menu Button for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Links - Hidden on Mobile */}
        <div id='DesktopLinks' className={`lg:flex space-x-4 ${isOpen ? 'hidden' : 'block'} lg:block`}>
          <Link to="/" className="text-black hover:text-white text-xl">Eye Testing</Link>
          <Link to="/Frames" className="text-black hover:text-white text-xl">Frames</Link>
          <Link to="/Appointment" className="text-black hover:text-white text-xl">Get Appointment</Link>
          <Link to="/About" className="text-black hover:text-white text-xl">About Us</Link>
          <Link to="/Contact" className="text-black hover:text-white text-xl">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu - Covers Full Screen */}
      {isOpen && (
        <div id='MobileLinks' className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center lg:hidden z-50">
          {/* Close Button in the Top Left */}
          <button
            onClick={closeMenu}
            className="absolute top-4 left-4 text-white focus:outline-none text-2xl"
          >
            X
          </button>

          {/* Menu Items Centered */}
          <Link to="/" onClick={closeMenu} className="block text-white hover:text-gray-200 py-4 text-2xl">Eye Testing</Link>
          <Link to="/Frames" onClick={closeMenu} className="block text-white py-4 text-2xl">Frames</Link>
          <Link to="/Appointment" onClick={closeMenu} className="block text-white py-4 text-2xl">Get Appointment</Link>
          <Link to="/About" onClick={closeMenu} className="block text-white py-4 text-2xl">About Us</Link>
          <Link to="/Contact" onClick={closeMenu} className="block text-white py-4 text-2xl">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
