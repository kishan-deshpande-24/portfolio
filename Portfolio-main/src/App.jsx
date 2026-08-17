import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Statement from './components/Statement'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Resume from './components/Resume'

function AppContent({ preloaderComplete, onPreloaderComplete }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (preloaderComplete && !hasScrolled) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setHasScrolled(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [preloaderComplete, hasScrolled]);

  return (
    <>
      <Preloader onComplete={onPreloaderComplete} />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Statement />
      <Projects />
      <Education />
      <Achievements />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderComplete(true);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <AppContent 
            preloaderComplete={preloaderComplete} 
            onPreloaderComplete={handlePreloaderComplete} 
          />
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
