
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { threats } from '@/data/threatsData';
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
  
  const getRiskLevelColor = () => {
    switch (threat.riskLevel) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
              className="text-white border-white mb-6"
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
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      How to Identify {threat.title}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Recent {threat.title} Incidents
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Tools to Prevent {threat.title}
                    </a>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-4">Test Your Knowledge</h3>
                <Button asChild className="w-full">
                  <a href="/quiz">Take a Quiz</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThreatDetailPage;
