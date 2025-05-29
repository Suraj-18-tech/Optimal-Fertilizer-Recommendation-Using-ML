import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl text-gray-800">FertiliSmart</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium ${isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors duration-300`}
            >
              HOME
            </Link>
            
            <SignInButton forceRedirectUrl="/dashboard">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
              SIGN IN
            </button>
            </SignInButton>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium ${isActive('/') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium ${isActive('/dashboard') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                Resources
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                About
              </a>
              
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 w-full">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;