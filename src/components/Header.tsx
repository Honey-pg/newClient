import React from 'react';
import { HelpCircle, Search, User, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-bold text-lg tracking-wider text-brand-orange">ELSEVIER</a>
            <a href="#" className="flex items-center gap-2">
              <img src="https://www.sciencedirect.com/assets/search/shared/logo-sd.svg" alt="ScienceDirect Logo" className="h-6" />
            </a>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="text-gray-600 hover:text-brand-blue flex items-center gap-1">
              Journals & Books
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-blue flex items-center gap-1">
              <HelpCircle size={18} /> Help
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-blue flex items-center gap-1">
              <Search size={18} /> Search
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-blue flex items-center gap-1">
              <User size={18} /> My account
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-blue flex items-center gap-1">
              <LogIn size={18} /> Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
