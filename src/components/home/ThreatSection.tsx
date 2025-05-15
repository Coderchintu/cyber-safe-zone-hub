
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Handshake, Virus, DoorClosed, Wifi } from "lucide-react";

const threats = [
  {
    id: "phishing",
    title: "Phishing Awareness",
    description: "Learn how to identify and protect yourself from deceptive attempts to steal your sensitive information.",
    icon: Shield
  },
  {
    id: "password-security",
    title: "Password Security",
    description: "Discover best practices for creating and managing strong passwords to secure your accounts.",
    icon: Lock
  },
  {
    id: "malware-ransomware",
    title: "Malware & Ransomware",
    description: "Understand different types of malicious software and how to protect your systems from infections.",
    icon: Virus
  }
];

const ThreatSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 cyber-gradient-text">Cybersecurity Modules</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay informed about important cybersecurity topics to protect yourself and your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {threats.map((threat) => (
            <Card key={threat.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyber-blue/10 rounded-full">
                    <threat.icon className="w-8 h-8 text-cyber-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{threat.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{threat.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/threats/${threat.id}`}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/threats">View All Modules</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;
