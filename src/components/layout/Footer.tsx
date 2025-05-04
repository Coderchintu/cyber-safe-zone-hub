
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-blue text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-xl">CyberSafeZone</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering individuals and organizations with cybersecurity awareness to stay safe online.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/threats" className="text-gray-300 hover:text-white">Cyber Threats</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-white">Video Resources</Link></li>
              <li><Link to="/posters" className="text-gray-300 hover:text-white">Awareness Posters</Link></li>
              <li><Link to="/quiz" className="text-gray-300 hover:text-white">Security Quiz</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Security Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Best Practices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Security News</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@cybersafezone.com</li>
              <li className="text-gray-300">Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} CyberSafeZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
