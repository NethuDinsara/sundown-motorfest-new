// components/Hero.jsx
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1 className="hero-title">Sundown Motor Fest</h1>
        <p className="hero-subtitle">The Ultimate Automotive Experience by Leo Club of Homagama Central & Leo Club of Wickramasinghepura</p>
        <div className="hero-btns">
          <a href="#next-event" className="btn btn-primary">Next Event</a>
          <a href="#donations" className="btn btn-outline">Support Us</a>
        </div>
      </div>
      
      {/* Moving Car Animation */}
      <div className="car-animation">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M110,15 h-15 l-15,-10 h-40 l-15,10 h-15 v5 h5 v7 a3,3 0 0,0 3,3 h5 a3,3 0 0,0 3,-3 v-7 h68 v7 a3,3 0 0,0 3,3 h5 a3,3 0 0,0 3,-3 v-7 h5 z" fill="#c82121" />
          <circle cx="25" cy="30" r="8" fill="#333" />
          <circle cx="25" cy="30" r="4" fill="#555" />
          <circle cx="95" cy="30" r="8" fill="#333" />
          <circle cx="95" cy="30" r="4" fill="#555" />
          <path d="M30,5 h40 l15,10 h-70 z" fill="#e74c4c" />
          <rect x="85" y="10" width="10" height="5" fill="#e74c4c" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;