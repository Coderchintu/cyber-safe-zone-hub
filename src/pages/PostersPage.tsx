
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import PosterCard from '@/components/posters/PosterCard';
import { posters } from '@/data/postersData';

const PostersPage = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(posters.map(poster => poster.category)))];
  
  const filteredPosters = filter === 'All' 
    ? posters 
    : posters.filter(poster => poster.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Awareness Posters" 
        subtitle="Educational material to promote cybersecurity awareness"
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-cyber-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosters.map((poster) => (
            <PosterCard
              key={poster.id}
              title={poster.title}
              image={poster.image}
              category={poster.category}
            />
          ))}
        </div>
        
        {filteredPosters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posters found for this category.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default PostersPage;
