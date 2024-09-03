import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <header className="bg-transparent shadow-md mx-3 md:mx-20">
      <nav className="flex items-center justify-between p-4">
        <div className="flex-shrink-0">
          <button className="text-white hover:text-gray-300" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="flex-shrink-0">
          <button className="text-white hover:text-gray-300 md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/projects" className="mx-2 text-white">Projects</Link>
          <Link to="/contact" className="mx-2 text-white">Contact</Link>
          <Link to="/resume" className="mx-2 text-white">Resume</Link>
        </div>
      </nav>
    </header>
  );
}
