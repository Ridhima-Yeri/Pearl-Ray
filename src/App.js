import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App(){
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      </div>
  );
}

export default App;
