
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import ThreatCard from '@/components/threats/ThreatCard';
import { threats } from '@/data/threatsData';

const ThreatsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Cyber Threats Library" 
        subtitle="Learn about common cyber threats and how to protect yourself"
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threats.map((threat) => (
            <ThreatCard
              key={threat.id}
              id={threat.id}
              title={threat.title}
              description={threat.description}
              image={threat.image}
              riskLevel={threat.riskLevel}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThreatsPage;
