import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ExperienceSection />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
