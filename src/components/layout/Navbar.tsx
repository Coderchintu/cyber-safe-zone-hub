
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Shield, Menu, X, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = (email: string | undefined) => {
    if (!email) return 'U';
    return email.charAt(0).toUpperCase();
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
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/threats" className="text-gray-700 hover:text-primary font-medium transition-colors">Threats</Link>
            <Link to="/threat-dashboard" className="text-gray-700 hover:text-primary font-medium transition-colors">Live Threats</Link>
            <Link to="/link-checker" className="text-gray-700 hover:text-primary font-medium transition-colors">Link Checker</Link>
            <Link to="/security-profile" className="text-gray-700 hover:text-primary font-medium transition-colors">Security Profile</Link>
            
            {/* Auth Section */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xs">
                        {getInitials(user.email)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/security-profile')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Security Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={() => navigate('/auth')}>
                  Log in
                </Button>
                <Button onClick={() => navigate('/auth')}>
                  Sign up
                </Button>
              </div>
            )}
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
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/threats" 
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Threats
              </Link>
              <Link 
                to="/threat-dashboard" 
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Threats
              </Link>
              <Link 
                to="/link-checker" 
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Link Checker
              </Link>
              <Link 
                to="/security-profile" 
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Security Profile
              </Link>
              
              {/* Mobile Auth Section */}
              <div className="pt-3 border-t border-gray-200">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 py-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" />
                        <AvatarFallback className="text-xs">
                          {getInitials(user.email)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{user.email}</span>
                    </div>
                    <Link 
                      to="/profile" 
                      className="text-gray-700 hover:text-primary font-medium py-2 transition-colors flex items-center gap-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 hover:text-primary font-medium py-2 transition-colors flex items-center gap-2 w-full text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        navigate('/auth');
                        setIsMenuOpen(false);
                      }}
                    >
                      Log in
                    </Button>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        navigate('/auth');
                        setIsMenuOpen(false);
                      }}
                    >
                      Sign up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
