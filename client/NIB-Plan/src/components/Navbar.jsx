import  { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Common styling for active link state
  const linkStyles = ({ isActive }) =>
    `transition-colors duration-200 hover:text-blue-900 text-black ${isActive ? 'text-blue-900 font-bold' : ''}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-500 rounded-xl text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">

        {/* Logo Container */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="NIB-Plan Logo" className="h-20  w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm  font-medium pr-70 ">
          <NavLink to="/" className={linkStyles}>Home</NavLink>
          <NavLink to="/about" className={linkStyles}>About Us</NavLink>
          <NavLink to="/services" className={linkStyles}>Services</NavLink>
          <NavLink to="/projects" className={linkStyles}>Projects</NavLink>
          <NavLink to="/contact" className={linkStyles}>Contact</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none cursor-pointer z-50"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-white rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div
        className={`md:hidden absolute top-full right-0 w-1/2 bg-blue-100 border-t border-blue-200 rounded-xl shadow-lg flex flex-col items-center gap-5 py-6 font-medium text-base transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <NavLink to="/" onClick={toggleMenu} className={linkStyles}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu} className={linkStyles}>About Us</NavLink>
        <NavLink to="/services" onClick={toggleMenu} className={linkStyles}>Services</NavLink>
        <NavLink to="/projects" onClick={toggleMenu} className={linkStyles}>Projects</NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={linkStyles}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
