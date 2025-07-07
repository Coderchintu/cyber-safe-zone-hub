import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, TrendingUp, Calendar, Award } from 'lucide-react';
import { mockSecurityScore, mockTimeline } from '@/data/securityProfileData';

const SecurityProfilePage = () => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'achievement_earned': return <Award className="h-4 w-4 text-yellow-600" />;
      case 'quiz_completed': return <Trophy className="h-4 w-4 text-blue-600" />;
      default: return <TrendingUp className="h-4 w-4 text-green-600" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Security Profile" 
        subtitle="Track your cybersecurity knowledge and progress"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Overall Score */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Your Security Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(mockSecurityScore.overall)}`}>
              {mockSecurityScore.overall}
            </div>
            <div className="text-muted-foreground mb-4">out of 100</div>
            <Progress value={mockSecurityScore.overall} className="max-w-md mx-auto" />
          </CardContent>
        </Card>

        <Tabs defaultValue="categories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(mockSecurityScore.categories).map(([category, score]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-lg capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                        {score}%
                      </span>
                    </div>
                    <Progress value={score} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockSecurityScore.achievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.dateEarned ? 'border-green-200' : 'opacity-60'}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      {achievement.dateEarned && <Trophy className="h-6 w-6 text-yellow-500" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    {achievement.progress !== undefined && achievement.maxProgress && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.maxProgress}</span>
                        </div>
                        <Progress value={(achievement.progress / achievement.maxProgress) * 100} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4">
            {mockTimeline.map((event) => (
              <Card key={event.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-green-600">
                            +{event.scoreChange} points
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(event.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                      <Badge variant="secondary" className="mt-2">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
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

export default SecurityProfilePage;