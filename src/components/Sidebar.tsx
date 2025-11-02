import React from 'react';
import PublishingOptions from './PublishingOptions';
import { ChevronRight } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-1/4">
      <div className="sticky top-24 space-y-6">
        <PublishingOptions />
        <button className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center text-brand-blue font-bold text-sm hover:border-brand-blue">
          <span>View all insights</span>
          <ChevronRight size={20} />
        </button>
        <button className="w-full bg-brand-teal text-white font-bold text-sm py-2 rounded-md hover:opacity-90">
          FEEDBACK
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
