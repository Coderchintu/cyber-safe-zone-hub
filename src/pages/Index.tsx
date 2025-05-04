
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import ThreatSection from '@/components/home/ThreatSection';
import VideoPreview from '@/components/home/VideoPreview';
import QuizPromo from '@/components/home/QuizPromo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <ThreatSection />
        <VideoPreview />
        <QuizPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
