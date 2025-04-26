// components/Sponsors.jsx
const Sponsors = () => {
    const sponsors = [
      {
        id: 1,
        name: 'AutoTech',
        logo: '/images/sponsors/sponsor1.png',
        type: 'Platinum'
      },
      {
        id: 2,
        name: 'SpeedGear',
        logo: '/images/sponsors/sponsor2.png',
        type: 'Platinum'
      },
      {
        id: 3,
        name: 'TurboMax',
        logo: '/images/sponsors/sponsor3.png',
        type: 'Gold'
      },
      {
        id: 4,
        name: 'RacingEdge',
        logo: '/images/sponsors/sponsor4.png',
        type: 'Gold'
      },
      {
        id: 5,
        name: 'PetroChem',
        logo: '/images/sponsors/sponsor5.png',
        type: 'Silver'
      },
      {
        id: 6,
        name: 'MotorZone',
        logo: '/images/sponsors/sponsor6.png',
        type: 'Silver'
      },
      {
        id: 7,
        name: 'AutoParts',
        logo: '/images/sponsors/sponsor7.png',
        type: 'Bronze'
      },
      {
        id: 8,
        name: 'SpeedWay',
        logo: '/images/sponsors/sponsor8.png',
        type: 'Bronze'
      }
    ];
  
    return (
      <section className="section sponsors" id="sponsors">
        <div className="container">
          <h2 className="section-title">Our Sponsors & Partners</h2>
          
          <div className="sponsors-categories">
            <h3>Platinum Sponsors</h3>
            <div className="sponsors-grid">
              {sponsors
                .filter(sponsor => sponsor.type === 'Platinum')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                ))
              }
            </div>
            
            <h3>Gold Sponsors</h3>
            <div className="sponsors-grid">
              {sponsors
                .filter(sponsor => sponsor.type === 'Gold')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                ))
              }
            </div>
            
            <h3>Silver Sponsors</h3>
            <div className="sponsors-grid">
              {sponsors
                .filter(sponsor => sponsor.type === 'Silver')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                ))
              }
            </div>
            
            <h3>Bronze Sponsors</h3>
            <div className="sponsors-grid">
              {sponsors
                .filter(sponsor => sponsor.type === 'Bronze')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="become-sponsor">
            <h3>Become a Sponsor</h3>
            <p>Join our growing family of sponsors and help us make a difference while promoting your brand to thousands of automotive enthusiasts.</p>
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Sponsors;