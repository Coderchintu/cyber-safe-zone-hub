
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface VideoCardProps {
  title: string;
  embedId: string;
  duration?: string;
  source?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  embedId, 
  duration = "Unknown",
  source = "YouTube"
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>Duration: {duration}</span>
          <span>Source: {source}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
