import React, { useState } from 'react';
import { articles } from '../data/mockData';
import ArticleGridCard from './ArticleGridCard';
import { ChevronRight } from 'lucide-react';

const articleTabs = ["Latest published", "Articles in press", "Top cited", "Most downloaded", "Most popular"];

const ArticlesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Latest published");

  return (
    <div>
      <div className="border-b border-gray-300">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Articles</h2>
        <div className="flex space-x-6">
          {articleTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-sm font-semibold transition-colors ${activeTab === tab ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-600 hover:text-brand-blue'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {articles.map((article, index) => (
          <ArticleGridCard key={index} article={article} />
        ))}
      </div>
      <button className="mt-6 bg-brand-blue text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-brand-blue-dark transition-colors text-sm">
        Read latest issue <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default ArticlesSection;
