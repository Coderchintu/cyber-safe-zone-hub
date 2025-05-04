
import React from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface PosterCardProps {
  title: string;
  image: string;
  category: string;
}

const PosterCard: React.FC<PosterCardProps> = ({ title, image, category }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-lg">
          <div className="h-64 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
          <div className="p-4">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
              {category}
            </span>
            <h3 className="font-medium">{title}</h3>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="flex flex-col items-center p-4">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <img 
            src={image} 
            alt={title} 
            className="max-h-[70vh] object-contain mb-4"
          />
          <p className="text-sm text-gray-500">Click outside to close</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PosterCard;
