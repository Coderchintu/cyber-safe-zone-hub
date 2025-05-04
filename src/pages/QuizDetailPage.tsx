
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import { quizzes } from '@/data/quizData';
import { useToast } from '@/components/ui/use-toast';

const QuizDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const quiz = quizzes.find(q => q.id === id);
  
  useEffect(() => {
    if (!quiz) {
      toast({
        title: "Error",
        description: "Quiz not found",
        variant: "destructive",
      });
      navigate('/quiz');
    }
  }, [quiz, toast, navigate]);
  
  if (!quiz) {
    return null;
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleAnswer = (answerId: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answerId };
    setAnswers(newAnswers);
    
    // Check if this is the last question
    if (currentQuestionIndex === quiz.questions.length - 1) {
      // Calculate score
      let correct = 0;
      quiz.questions.forEach(question => {
        if (newAnswers[question.id] === question.correctAnswerId) {
          correct++;
        }
      });
      
      setScore(correct);
      setQuizCompleted(true);
    } else {
      // Move to next question
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-cyber-gradient text-white py-8">
          <div className="container mx-auto px-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/quiz')}
              className="text-white border-white mb-4"
            >
              Back to Quizzes
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold">{quiz.title}</h1>
            <p className="mt-2">{quiz.description}</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {!quizCompleted ? (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-bold">Question {currentQuestionIndex + 1} of {quiz.questions.length}</h2>
                <span className="text-gray-500">Difficulty: {quiz.difficulty}</span>
              </div>
              
              <div className="mb-8 w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-cyber-purple h-2.5 rounded-full" 
                  style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
                ></div>
              </div>
              
              <QuizQuestion
                question={currentQuestion}
                onAnswer={handleAnswer}
                isLast={currentQuestionIndex === quiz.questions.length - 1}
              />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
              
              <div className="mb-6">
                <p className="text-lg">Your score:</p>
                <p className="text-4xl font-bold text-cyber-purple">
                  {score} / {quiz.questions.length}
                </p>
                <p className="text-gray-500 mt-2">
                  {Math.round((score / quiz.questions.length) * 100)}% correct
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Your Performance</h3>
                {score === quiz.questions.length ? (
                  <p className="text-green-600 mb-4">Perfect score! Excellent work!</p>
                ) : score >= quiz.questions.length * 0.7 ? (
                  <p className="text-green-600 mb-4">Great job! You have a good understanding of the topic.</p>
                ) : score >= quiz.questions.length * 0.5 ? (
                  <p className="text-yellow-600 mb-4">Good effort! Review the topics you missed to improve your knowledge.</p>
                ) : (
                  <p className="text-red-600 mb-4">You might need more practice with this topic. Review the material and try again.</p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={restartQuiz} variant="outline">
                  Try Again
                </Button>
                <Button onClick={() => navigate('/quiz')}>
                  Back to Quizzes
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizDetailPage;
