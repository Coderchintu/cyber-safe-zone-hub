
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import QuizCard from '@/components/quiz/QuizCard';
import { quizzes } from '@/data/quizData';

const QuizPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Security Quizzes" 
        subtitle="Test your cybersecurity knowledge with our interactive quizzes"
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                id={quiz.id}
                title={quiz.title}
                description={quiz.description}
                questionCount={quiz.questions.length}
                difficulty={quiz.difficulty}
                estimatedTime={quiz.estimatedTime}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Why Take Our Quizzes?</h2>
          <p className="text-gray-700 mb-4">
            Testing your knowledge is a great way to reinforce learning and identify areas where you might need more information. Our quizzes are designed to be educational as well as challenging.
          </p>
          <p className="text-gray-700 mb-4">
            Each quiz covers different aspects of cybersecurity awareness. After completing a quiz, you'll receive feedback on your answers and explanations to help you learn more about the topics.
          </p>
          <p className="text-gray-700">
            Ready to challenge yourself? Select a quiz above to get started!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
