// App.jsx
import { useState, useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import NextEvent from './components/NextEvent';
import Sponsors from './components/Sponsors';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Gallery />
      <NextEvent />
      <Sponsors />
      <Donations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;