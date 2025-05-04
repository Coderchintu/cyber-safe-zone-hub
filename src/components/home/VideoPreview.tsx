
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const VideoPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 cyber-gradient-text">Video Resources</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Watch educational videos on cybersecurity topics to enhance your understanding and awareness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="video-container rounded-lg overflow-hidden shadow-lg">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/inWWhr5tnEA" 
              title="Introduction to Cybersecurity" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Learn Through Video Content</h3>
            <p className="text-gray-600 mb-6">
              Our curated collection of videos covers a wide range of cybersecurity topics, from basic concepts to advanced threat prevention strategies. Watch expert explanations, demonstrations of security tools, and best practices for staying safe online.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're a beginner or looking to deepen your knowledge, our video resources provide accessible and engaging content to help you understand complex cybersecurity concepts.
            </p>
            <Button asChild size="lg">
              <Link to="/videos">Browse All Videos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
