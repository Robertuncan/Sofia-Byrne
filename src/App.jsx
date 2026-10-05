import React, { useState } from 'react';
import { business } from './config/business';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App Root Component:
 * Assembles the crafted sections driven exclusively by src/config/business.js
 */
export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      <Navbar business={business} />
      <main>
        <Hero business={business} />
        <Services business={business} onSelectService={handleSelectService} />
        <About business={business} />
        <WhyChooseUs business={business} />
        <Testimonials business={business} />
        <Faq business={business} />
        <Contact business={business} selectedService={selectedService} />
      </main>
      <Footer business={business} />
    </div>
  );
}
