
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import VideoCard from '@/components/videos/VideoCard';
import { videos } from '@/data/videosData';

const VideosPage = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(videos.map(video => video.category)))];
  
  const filteredVideos = filter === 'All' 
    ? videos 
    : videos.filter(video => video.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Video Resources" 
        subtitle="Learn about cybersecurity through expert videos"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              embedId={video.embedId}
              duration={video.duration}
              source={video.source}
            />
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found for this category.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default VideosPage;
