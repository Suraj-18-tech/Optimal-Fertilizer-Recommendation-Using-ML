import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import { UserButton, useClerk } from '@clerk/clerk-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { signOut } = useClerk();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="bg-black shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sprout className="h-8 w-8 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
            <span className="font-bold text-xl text-white group-hover:text-green-400 transition-colors duration-300">
              FertiliSmart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard') 
                  ? 'bg-gray-900 text-green-400' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } transition-colors duration-300`}
            >
              DASHBOARD
            </Link>
            <Link
              to="/schemes"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/schemes') 
                  ? 'bg-gray-900 text-green-400' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } transition-colors duration-300`}
            >
              SCHEMES & SUBSIDIES
            </Link>
            <Link 
              to="/fertilizer"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/fertilizer') 
                  ? 'bg-gray-900 text-green-400' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } transition-colors duration-300`}
            >
              FERTILIZERS
            </Link>

            {/* User Section */}
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={handleSignOut}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                LOGOUT
              </button>
              <div className="border-l border-gray-700 h-8"></div>
              <div className="flex items-center">
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                      userButtonOuterIdentifier: "text-gray-300 text-sm"
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-gray-800"
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
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/dashboard') 
                  ? 'bg-gray-900 text-green-400' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } transition-colors duration-300`}
            >
              Dashboard
            </Link>
            <Link
              to="/schemes"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/schemes') 
                  ? 'bg-gray-900 text-green-400' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } transition-colors duration-300`}
            >
              Schemes & Subsidies
            </Link>
            <Link
              to="/fertilizer"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/fertilizer') 
                  ? 'bg-gray-900 text-green-400' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } transition-colors duration-300`}
            >
              Fertilizers
            </Link>
            
            <div className="pt-2 border-t border-gray-800 mt-2">
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                <span>Logout</span>
                <UserButton afterSignOutUrl="/" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;