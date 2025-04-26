// components/Donations.jsx
import { useState } from 'react';

const Donations = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  
  const handleOptionClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(0); // Reset predefined options
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process donation (would connect to payment gateway in production)
    const finalAmount = customAmount ? parseInt(customAmount) : donationAmount;
    alert(`Thank you for your donation of $${finalAmount}! This will be processed securely.`);
  };

  return (
    <section className="section donations" id="donations">
      <div className="container">
        <h2 className="section-title">Support Our Cause</h2>
        
        <div className="donation-content">
          <div className="donation-text">
            <h3>Where Your Money Goes</h3>
            <p>All proceeds from the Sundown Motor Fest go directly to charitable projects run by the Leo Club of Homagama Central and Leo Club of Wickramasinghepura. Your generous donations help us make a real difference in our communities.</p>
            
            <div className="charity-projects">
              <div className="charity-project">
                <h4>Educational Support</h4>
                <p>Providing scholarships, school supplies, and renovating facilities for underprivileged schools.</p>
              </div>
              
              <div className="charity-project">
                <h4>Healthcare Initiatives</h4>
                <p>Organizing medical camps, providing essential medications, and supporting healthcare facilities in rural areas.</p>
              </div>
              
              <div className="charity-project">
                <h4>Environmental Conservation</h4>
                <p>Planting trees, beach clean-ups, and promoting sustainable practices within our communities.</p>
              </div>
            </div>
          </div>
          
          <div className="donation-cta">
            <h3>Make a Donation</h3>
            <p>Choose an amount to donate or enter a custom amount:</p>
            
            <div className="donation-amount-options">
              <div 
                className={`donation-option ${donationAmount === 20 ? 'active' : ''}`}
                onClick={() => handleOptionClick(20)}
              >
                $20
              </div>
              <div 
                className={`donation-option ${donationAmount === 50 ? 'active' : ''}`}
                onClick={() => handleOptionClick(50)}
              >
                $50
              </div>
              <div 
                className={`donation-option ${donationAmount === 100 ? 'active' : ''}`}
                onClick={() => handleOptionClick(100)}
              >
                $100
              </div>
              <div 
                className={`donation-option ${donationAmount === 200 ? 'active' : ''}`}
                onClick={() => handleOptionClick(200)}
              >
                $200
              </div>
            </div>
            
            <form className="donation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="custom-amount">Custom Amount ($)</label>
                <input 
                  type="number" 
                  id="custom-amount" 
                  className="form-control"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  min="1"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="donor-name">Name</label>
                <input 
                  type="text" 
                  id="donor-name" 
                  className="form-control"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="donor-email">Email</label>
                <input 
                  type="email" 
                  id="donor-email" 
                  className="form-control"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary">Donate Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;