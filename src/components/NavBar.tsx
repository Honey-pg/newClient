import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const tabs = [
  { name: "Articles & Issues", dropdown: true },
  { name: "About", dropdown: true },
  { name: "Publish", dropdown: true },
  { name: "Order journal", dropdown: false },
];

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Articles & Issues");

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="flex items-center space-x-1 -mb-px">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`py-4 px-3 inline-flex items-center text-sm transition-colors gap-1
                    ${
                      activeTab === tab.name
                        ? 'font-bold text-gray-800'
                        : 'font-medium text-gray-600 hover:text-brand-blue'
                    }`}
                >
                  {tab.name}
                  {tab.dropdown && <ChevronDown size={16} />}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
             <div className="relative">
                <input type="text" placeholder="Search in this journal" className="border rounded-md py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <a href="#" className="text-brand-blue hover:underline">Submit your article</a>
            <a href="#" className="text-brand-blue hover:underline">Guide for authors</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
