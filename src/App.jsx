import React from 'react';
import { Box } from '@mui/material';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ObjectivesSection from './components/ObjectivesSection';
import CoreValuesSection from './components/CoreValuesSection';
import ProgramsSection from './components/ProgramsSection';
import ImpactSection from './components/ImpactSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import NewsUpdatesSection from './components/NewsUpdatesSection';
import InteractiveDonationSection from './components/InteractiveDonationSection';
import ContactFormSection from './components/ContactFormSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      }}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <CoreValuesSection />
      <ProgramsSection />
      <ImpactSection />
      <TestimonialsSection />
      <TeamSection />
      <NewsUpdatesSection />
      <InteractiveDonationSection />
      <ContactFormSection />
      <NewsletterSection />
      <Footer />
    </Box>
  );
}

export default App;
