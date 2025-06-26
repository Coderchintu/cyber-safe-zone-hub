
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { threats } from '@/data/threatsData';
import { posters } from '@/data/postersData';
import { videos } from '@/data/videosData';
import { quizzes } from '@/data/quizData';
import VideoCard from '@/components/videos/VideoCard';
import PosterCard from '@/components/posters/PosterCard';
import { useToast } from '@/components/ui/use-toast';

const ThreatDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const threat = threats.find(t => t.id === id);
  
  if (!threat) {
    React.useEffect(() => {
      toast({
        title: "Error",
        description: "Threat information not found",
        variant: "destructive",
      });
      navigate('/threats');
    }, []);
    
    return null;
  }

  // Filter related resources based on threat category
  const relatedPosters = posters.filter(poster => 
    poster.category.toLowerCase() === threat.title.toLowerCase());
  
  const relatedVideos = videos.filter(video => 
    video.category.toLowerCase() === threat.title.toLowerCase());
  
  const relatedQuiz = quizzes.find(quiz => 
    quiz.id.toLowerCase() === id);
  
  const getRiskLevelColor = () => {
    switch (threat.riskLevel) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleQuizNavigation = () => {
    navigate(`/quiz/${id}`);
  };

  const handlePostersScroll = () => {
    const postersElement = document.getElementById('posters');
    if (postersElement) {
      postersElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideosScroll = () => {
    const videosElement = document.getElementById('videos');
    if (videosElement) {
      videosElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-cyber-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/threats')}
              className="text-white border-white hover:bg-white hover:text-gray-900 mb-6"
            >
              Back to Threats
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{threat.title}</h1>
            <div className="flex items-center">
              <span className={`text-sm font-semibold px-3 py-1 rounded ${getRiskLevelColor()}`}>
                {threat.riskLevel} Risk
              </span>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="posters">Posters</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="quizzes">Quiz</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">What is {threat.title}?</h2>
                    <p className="mb-6 text-gray-700">{threat.fullDescription}</p>
                    
                    <h2 className="text-2xl font-bold mb-4">Prevention Tips</h2>
                    <ul className="space-y-2 list-disc pl-6">
                      {threat.preventionTips.map((tip, index) => (
                        <li key={index} className="text-gray-700">{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                    <img 
                      src={threat.image} 
                      alt={threat.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-4">Related Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <Button 
                          variant="default" 
                          onClick={handlePostersScroll}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          View Related Posters
                        </Button>
                      </li>
                      <li>
                        <Button 
                          variant="default" 
                          onClick={handleVideosScroll}
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          Watch Training Videos
                        </Button>
                      </li>
                      <li>
                        <Button 
                          variant="default" 
                          onClick={handleQuizNavigation}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          Take a Quiz
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="posters" id="posters">
              <h2 className="text-2xl font-bold mb-6">{threat.title} Training Posters</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosters.length > 0 ? (
                  relatedPosters.map(poster => (
                    <PosterCard 
                      key={poster.id}
                      title={poster.title}
                      image={poster.image}
                      category={poster.category}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 col-span-full">No posters available for this topic yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" id="videos">
              <h2 className="text-2xl font-bold mb-6">{threat.title} Training Videos</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {relatedVideos.length > 0 ? (
                  relatedVideos.map(video => (
                    <VideoCard 
                      key={video.id}
                      title={video.title}
                      embedId={video.embedId}
                      duration={video.duration}
                      source={video.source}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 col-span-full">No videos available for this topic yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="quizzes" id="quizzes">
              <h2 className="text-2xl font-bold mb-6">Test Your Knowledge</h2>
              {relatedQuiz ? (
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{relatedQuiz.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedQuiz.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                      <span>Difficulty: {relatedQuiz.difficulty}</span>
                      <span>{relatedQuiz.questions.length} questions</span>
                      <span>Estimated time: {relatedQuiz.estimatedTime}</span>
                    </div>
                    <Button 
                      onClick={handleQuizNavigation}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <p className="text-gray-500">No quiz available for this topic yet.</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThreatDetailPage;
