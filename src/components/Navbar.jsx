import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe } from 'lucide-react';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm navbar-entrance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2 logo-hover">
            <img src="./src/assets/codi.png" alt="Codivora Logo" className="h-16 w-auto   transition-transform duration-300 hover:scale-110" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link relative px-4 py-2 rounded-lg font-medium overflow-hidden group`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className={`relative z-10 transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 group-hover:text-blue-600'
                }`}>
                  {item.name}
                </span>
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 scale-x-100'
                    : 'bg-gray-50 scale-x-0 group-hover:scale-x-100'
                } origin-left`}></div>
              </Link>
            ))}
          </div>

          {/* Right Section - Actions */}
          <div className="hidden lg:flex items-center space-x-4">
           

            {/* Language Selector */}
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <Globe className="w-4 h-4 text-gray-600 transition-transform duration-300 group-hover:rotate-180" />
              <span className="text-sm font-medium text-gray-700">EN</span>
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Auth Buttons */}
            
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 active:scale-95">
              <Search className="w-5 h-5 text-gray-600 transition-transform duration-300" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 animate-rotate-in" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 animate-rotate-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 mobile-menu-slide">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 block mobile-menu-item hover:scale-105 hover:shadow-md ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50 shadow-md'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Add ArrowRight icon component
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "16"}
    height={props.height || "16"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Navbar;