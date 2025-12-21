import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Wedding', 'Pre-wedding', 'Ring Ceremony'];

  const filteredItems = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 tracking-[0.2em] uppercase text-xs font-bold">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-6">Captured Moments</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${activeFilter === filter
                  ? 'bg-red-900 text-white border border-red-700'
                  : 'bg-transparent text-neutral-400 border border-neutral-700 hover:border-neutral-500 hover:text-white'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                // Make some items span 2 columns or rows for a masonry feel
                (idx % 3 === 0) ? 'md:col-span-2' : ''
                } ${(idx % 5 === 0) ? 'lg:row-span-2' : ''
                }`}
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110  group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-500 text-xs uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-serif text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};