
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ThreatCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  riskLevel?: 'Low' | 'Medium' | 'High' | 'Critical';
}

const ThreatCard: React.FC<ThreatCardProps> = ({ 
  id, 
  title, 
  description, 
  image,
  riskLevel = 'Medium'
}) => {
  const getRiskLevelColor = () => {
    switch (riskLevel) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getRiskLevelColor()}`}>
            {riskLevel}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/threats/${id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThreatCard;
