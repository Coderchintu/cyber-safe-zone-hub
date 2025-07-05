import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, XCircle, AlertTriangle, Shield } from 'lucide-react';
import { phishingExamples, type PhishingExample } from '@/data/phishingData';

const PhishingSimulatorPage = () => {
  const [currentExample, setCurrentExample] = useState<PhishingExample | null>(null);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [completedExamples, setCompletedExamples] = useState<Set<string>>(new Set());

  const startExample = (example: PhishingExample) => {
    setCurrentExample(example);
    setUserAnswer(null);
    setShowResult(false);
  };

  const submitAnswer = (isPhishing: boolean) => {
    setUserAnswer(isPhishing);
    setShowResult(true);
    
    const isCorrect = isPhishing === currentExample?.isPhishing;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    if (currentExample) {
      setCompletedExamples(prev => new Set([...prev, currentExample.id]));
    }
  };

  const resetSimulator = () => {
    setCurrentExample(null);
    setUserAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Banking': return 'bg-blue-100 text-blue-800';
      case 'Social Media': return 'bg-purple-100 text-purple-800';
      case 'Work Email': return 'bg-orange-100 text-orange-800';
      case 'Shopping': return 'bg-green-100 text-green-800';
      case 'Government': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (currentExample) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <PageHeader 
          title="Phishing Simulator" 
          subtitle="Test your ability to identify phishing attempts"
        />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Badge className={getDifficultyColor(currentExample.difficulty)}>
                  {currentExample.difficulty}
                </Badge>
                <Badge className={getCategoryColor(currentExample.category)}>
                  {currentExample.category}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Score: {score.correct}/{score.total}
              </div>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">{currentExample.title}</CardTitle>
                <p className="text-muted-foreground">{currentExample.description}</p>
              </CardHeader>
            </Card>

            {/* Email Simulation */}
            <Card className="mb-6 bg-gray-50">
              <CardHeader className="border-b bg-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">From:</span>
                    <span className="text-sm">{currentExample.emailContent.from}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Subject:</span>
                    <span className="text-sm font-medium">{currentExample.emailContent.subject}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="whitespace-pre-line text-sm font-mono bg-white p-4 rounded border">
                  {currentExample.emailContent.body}
                </div>
                {currentExample.emailContent.attachments && currentExample.emailContent.attachments.length > 0 && (
                  <div className="mt-4">
                    <span className="font-semibold text-sm">Attachments:</span>
                    <div className="mt-2">
                      {currentExample.emailContent.attachments.map((attachment, index) => (
                        <Badge key={index} variant="outline" className="mr-2">
                          📎 {attachment}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {!showResult ? (
              <Card>
                <CardHeader>
                  <CardTitle>Your Assessment</CardTitle>
                  <p className="text-muted-foreground">
                    Based on the email above, do you think this is a phishing attempt?
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => submitAnswer(true)}
                      variant="destructive"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <AlertTriangle className="h-5 w-5" />
                      This is Phishing
                    </Button>
                    <Button 
                      onClick={() => submitAnswer(false)}
                      variant="default"
                      size="lg"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <Shield className="h-5 w-5" />
                      This is Legitimate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Result */}
                <Alert className={userAnswer === currentExample.isPhishing ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                  {userAnswer === currentExample.isPhishing ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription className={userAnswer === currentExample.isPhishing ? 'text-green-800' : 'text-red-800'}>
                    <strong>
                      {userAnswer === currentExample.isPhishing ? 'Correct!' : 'Incorrect.'}
                    </strong>{' '}
                    This email {currentExample.isPhishing ? 'is' : 'is not'} a phishing attempt.
                  </AlertDescription>
                </Alert>

                {/* Explanation */}
                <Card>
                  <CardHeader>
                    <CardTitle>Explanation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{currentExample.explanation}</p>
                    
                    {currentExample.redFlags.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">Red Flags to Watch For:</h4>
                        <ul className="space-y-1">
                          {currentExample.redFlags.map((flag, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Actions */}
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetSimulator} variant="outline">
                    Back to Examples
                  </Button>
                  <Button 
                    onClick={() => {
                      const nextExample = phishingExamples.find(ex => 
                        ex.id !== currentExample.id && !completedExamples.has(ex.id)
                      );
                      if (nextExample) {
                        startExample(nextExample);
                      } else {
                        resetSimulator();
                      }
                    }}
                    disabled={phishingExamples.filter(ex => !completedExamples.has(ex.id)).length <= 1}
                  >
                    Next Example
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Phishing Simulator" 
        subtitle="Practice identifying phishing attempts with real-world examples"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Score Display */}
        {score.total > 0 && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {Math.round((score.correct / score.total) * 100)}%
                </div>
                <div className="text-muted-foreground">
                  Current Score: {score.correct} correct out of {score.total} attempts
                </div>
                <Button 
                  onClick={() => {
                    setScore({ correct: 0, total: 0 });
                    setCompletedExamples(new Set());
                  }}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Reset Score
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Examples</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phishingExamples.map((example) => (
              <Card key={example.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    {completedExamples.has(example.id) && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getDifficultyColor(example.difficulty)}>
                      {example.difficulty}
                    </Badge>
                    <Badge className={getCategoryColor(example.category)}>
                      {example.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => startExample(example)}
                    className="w-full"
                    variant={completedExamples.has(example.id) ? "outline" : "default"}
                  >
                    {completedExamples.has(example.id) ? 'Try Again' : 'Start Example'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="beginner" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phishingExamples.filter(ex => ex.difficulty === 'Beginner').map((example) => (
              <Card key={example.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    {completedExamples.has(example.id) && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-100 text-green-800">Beginner</Badge>
                    <Badge className={getCategoryColor(example.category)}>
                      {example.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => startExample(example)}
                    className="w-full"
                    variant={completedExamples.has(example.id) ? "outline" : "default"}
                  >
                    {completedExamples.has(example.id) ? 'Try Again' : 'Start Example'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="intermediate" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phishingExamples.filter(ex => ex.difficulty === 'Intermediate').map((example) => (
              <Card key={example.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    {completedExamples.has(example.id) && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
                    <Badge className={getCategoryColor(example.category)}>
                      {example.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => startExample(example)}
                    className="w-full"
                    variant={completedExamples.has(example.id) ? "outline" : "default"}
                  >
                    {completedExamples.has(example.id) ? 'Try Again' : 'Start Example'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="advanced" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phishingExamples.filter(ex => ex.difficulty === 'Advanced').map((example) => (
              <Card key={example.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    {completedExamples.has(example.id) && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-red-100 text-red-800">Advanced</Badge>
                    <Badge className={getCategoryColor(example.category)}>
                      {example.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => startExample(example)}
                    className="w-full"
                    variant={completedExamples.has(example.id) ? "outline" : "default"}
                  >
                    {completedExamples.has(example.id) ? 'Try Again' : 'Start Example'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhishingSimulatorPage;