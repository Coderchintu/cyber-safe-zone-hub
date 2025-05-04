
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const QuizPromo = () => {
  return (
    <section className="py-16 bg-cyber-gradient">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 cyber-gradient-text">Test Your Security Knowledge</h2>
              <p className="text-gray-700 mb-6">
                Challenge yourself with our interactive cybersecurity quizzes. Assess your understanding of various security topics and identify areas for improvement.
              </p>
              <p className="text-gray-700 mb-8">
                Our quizzes cover phishing awareness, password security, malware protection, and more. Each quiz is designed to test your knowledge while reinforcing important security concepts.
              </p>
              <Button asChild size="lg">
                <Link to="/quiz">Take a Quiz Now</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyber-light-purple rounded-lg p-6 text-center shadow-md">
                <h3 className="font-bold text-xl mb-2">Phishing</h3>
                <p className="text-sm mb-4">10 questions</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/quiz/phishing">Start Quiz</Link>
                </Button>
              </div>
              
              <div className="bg-cyber-light-blue rounded-lg p-6 text-center shadow-md">
                <h3 className="font-bold text-xl mb-2">Malware</h3>
                <p className="text-sm mb-4">8 questions</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/quiz/malware">Start Quiz</Link>
                </Button>
              </div>
              
              <div className="bg-cyber-pink rounded-lg p-6 text-center shadow-md">
                <h3 className="font-bold text-xl mb-2">Passwords</h3>
                <p className="text-sm mb-4">12 questions</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/quiz/passwords">Start Quiz</Link>
                </Button>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-6 text-center shadow-md">
                <h3 className="font-bold text-xl mb-2">Social Eng.</h3>
                <p className="text-sm mb-4">15 questions</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/quiz/social-engineering">Start Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPromo;
