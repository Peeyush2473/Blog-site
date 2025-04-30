'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Make sure 'lucide-react' is installed
import {blogs} from '../data/blog'

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const filteredArticles = blogs.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    article.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleBlur = () => {
    if (query === '') setExpanded(false);
  };

  return (
    <div className="relative">
      {/* Search Bar container */}
      <div
        className={`flex items-center border border-gray-300 rounded-full px-4 py-2 transition-all duration-300 ease-in-out ${
          expanded ? 'w-80 bg-white' : 'w-12 bg-transparent'
        }`}
      >
        {/* Search Icon */}
        <Search
          className={`text-black cursor-pointer transition-all duration-400 ease-in-out ${
            expanded ? 'scale-100' : 'scale-125'
          }`}
          onClick={() => setExpanded(true)}
        />

        {/* Search Input field */}
        {expanded && (
          <input
            type="text"
            className="ml-2 w-full outline-none bg-transparent"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        )}
      </div>

      {/* Search Results */}
      {expanded && query && (
        <div className="absolute top-full mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                <div className="font-semibold">{article.title}</div>
                <div className="text-sm text-gray-600">{article.excerpt}</div>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
