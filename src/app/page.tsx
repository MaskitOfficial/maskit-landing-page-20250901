import React from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import IssuesSection from '@/components/sections/IssuesSection';
import SolutionSection1 from '@/components/sections/SolutionSection1';
import FeedbackSection from '@/components/sections/FeedbackSection';
// import PartnersSection from '@/components/sections/PartnersSection';
import ApplySection from '@/components/sections/ApplySection';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IssuesSection />
      <SolutionSection1 />
      <FeedbackSection />
      {/* <PartnersSection /> */}
      <ApplySection />
      <FaqSection />
      <Footer />
    </main>
  );
}