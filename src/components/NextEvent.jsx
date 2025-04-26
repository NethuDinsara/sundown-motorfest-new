// components/NextEvent.jsx
import { useState, useEffect } from 'react';

const NextEvent = () => {
  // Set the date for the next event - example: September 25, 2025
  const eventDate = new Date('September 25, 2025 10:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        // Event has passed
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section next-event" id="next-event">
      <div className="container">
        <h2 className="section-title">Next Event</h2>
        <div className="event-details">
          <h3 className="event-date">September 25, 2025 | 10:00 AM - 8:00 PM</h3>
          <p className="event-location">Colombo Exhibition Center, Colombo, Sri Lanka</p>
          
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.hours}</div>
              // components/NextEvent.jsx (continued)
              <div className="countdown-number">{timeLeft.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
          
          <div className="event-tickets">
            <h3>Get Your Tickets Now</h3>
            <div className="ticket-options">
              <div className="ticket-option">
                <h4>Standard Entry</h4>
                <p className="ticket-price">$15</p>
                <p>General admission to all exhibition areas</p>
              </div>
              <div className="ticket-option">
                <h4>Premium Pass</h4>
                <p className="ticket-price">$30</p>
                <p>General admission plus exclusive showcase access</p>
              </div>
              <div className="ticket-option">
                <h4>Family Package</h4>
                <p className="ticket-price">$45</p>
                <p>Entry for 2 adults and up to 3 children</p>
              </div>
            </div>
            <a href="#" className="btn btn-primary">Book Tickets</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextEvent;