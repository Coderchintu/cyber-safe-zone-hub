
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const threats = [
  {
    id: "phishing",
    title: "Phishing Attacks",
    description: "Learn how to identify and protect yourself from deceptive attempts to steal your sensitive information.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d79c?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "malware",
    title: "Malware",
    description: "Understand different types of malicious software and how they can compromise your systems.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "ransomware",
    title: "Ransomware",
    description: "Discover how ransomware works and the best practices to prevent becoming a victim.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=300&auto=format&fit=crop"
  }
];

const ThreatSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 cyber-gradient-text">Common Cyber Threats</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay informed about the most prevalent cyber threats that could affect you and your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {threats.map((threat) => (
            <Card key={threat.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={threat.image} 
                  alt={threat.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{threat.title}</h3>
                <p className="text-gray-600 mb-4">{threat.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/threats/${threat.id}`}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/threats">View All Threats</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;
