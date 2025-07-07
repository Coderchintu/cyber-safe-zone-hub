
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-cyber-purple" />
            <span className="font-bold text-xl cyber-gradient-text">CyberSafeZone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cyber-purple font-medium">Home</Link>
            <Link to="/threats" className="text-gray-700 hover:text-cyber-purple font-medium">Threats</Link>
            <Link to="/videos" className="text-gray-700 hover:text-cyber-purple font-medium">Videos</Link>
            <Link to="/posters" className="text-gray-700 hover:text-cyber-purple font-medium">Posters</Link>
            <Link to="/quiz" className="text-gray-700 hover:text-cyber-purple font-medium">Quiz</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-cyber-purple font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/threats" 
                className="text-gray-700 hover:text-cyber-purple font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Threats
              </Link>
              <Link 
                to="/videos" 
                className="text-gray-700 hover:text-cyber-purple font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              <Link 
                to="/posters" 
                className="text-gray-700 hover:text-cyber-purple font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Posters
              </Link>
              <Link 
                to="/quiz" 
                className="text-gray-700 hover:text-cyber-purple font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
