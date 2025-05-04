
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
}

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  isLast: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  onAnswer,
  isLast
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    const correct = selectedOption === question.correctAnswerId;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    // Pass the selected answer to parent component
    onAnswer(selectedOption);
  };

  const handleNext = () => {
    setSelectedOption(undefined);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{question.text}</h3>
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={setSelectedOption}
        disabled={isAnswered}
        className="space-y-3"
      >
        {question.options.map((option) => (
          <div 
            key={option.id}
            className={`flex items-center space-x-2 p-3 border rounded-md ${
              isAnswered && option.id === question.correctAnswerId 
                ? 'bg-green-50 border-green-200' 
                : isAnswered && option.id === selectedOption
                  ? 'bg-red-50 border-red-200'
                  : 'hover:bg-gray-50'
            }`}
          >
            <RadioGroupItem value={option.id} id={option.id} />
            <Label 
              htmlFor={option.id} 
              className="flex-grow cursor-pointer"
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
      
      {isAnswered ? (
        <div className="mt-4">
          <div className={`mb-4 p-4 rounded ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isCorrect 
              ? 'Correct! Well done.' 
              : `Incorrect. The correct answer is: ${
                  question.options.find(o => o.id === question.correctAnswerId)?.text
                }`
            }
          </div>
          <Button onClick={handleNext}>
            {isLast ? "See Results" : "Next Question"}
          </Button>
        </div>
      ) : (
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedOption}
          className="mt-4"
        >
          Submit Answer
        </Button>
      )}
    </div>
  );
};

export default QuizQuestion;
