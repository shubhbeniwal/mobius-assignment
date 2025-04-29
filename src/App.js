import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PlansSection from './components/PlansSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
