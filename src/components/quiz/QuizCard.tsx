
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  id, 
  title, 
  description, 
  questionCount,
  difficulty,
  estimatedTime
}) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor()}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>{questionCount} questions</span>
          <span>{estimatedTime}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link to={`/quiz/${id}`}>Start Quiz</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
