import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ClientTypes from './components/ClientTypes';
import Philosophy from './components/Philosophy';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-white min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ClientTypes />
      <Philosophy />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 