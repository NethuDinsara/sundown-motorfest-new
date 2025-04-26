// components/Footer.jsx
const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/images/logo-white.png" alt="Sundown Motor Fest" />
              <p>The Ultimate Automotive Experience organized by Leo Club of Homagama Central and Leo Club of Wickramasinghepura.</p>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-link-list">
                <li className="footer-link-item">
                  <a href="#home" className="footer-link">Home</a>
                </li>
                <li className="footer-link-item">
                  <a href="#about" className="footer-link">About</a>
                </li>
                <li className="footer-link-item">
                  <a href="#gallery" className="footer-link">Gallery</a>
                </li>
                <li className="footer-link-item">
                  <a href="#next-event" className="footer-link">Next Event</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-link-list">
                <li className="footer-link-item">
                  <a href="#sponsors" className="footer-link">Sponsors</a>
                </li>
                <li className="footer-link-item">
                  <a href="#donations" className="footer-link">Donations</a>
                </li>
                <li className="footer-link-item">
                  <a href="#contact" className="footer-link">Contact</a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">Privacy Policy</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Newsletter</h4>
              <p>Subscribe to our newsletter for updates on upcoming events and initiatives.</p>
              <form className="footer-newsletter">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email"
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} Sundown Motor Fest. All Rights Reserved.</p>
            <p>Powered by Leo Club of Homagama Central and Leo Club of Wickramasinghepura</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;