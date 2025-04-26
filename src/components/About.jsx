// components/About.jsx
const About = () => {
    return (
      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-title">About The Event</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Sundown Motor Fest is an annual automotive exhibition and celebration organized by the Leo Club of Homagama Central and Leo Club of Wickramasinghepura. This thrilling event brings together car enthusiasts, collectors, and families for a day filled with spectacular vehicles, exciting activities, and community engagement.</p>
              <br />
              <p>What makes our event special is that all proceeds go directly to supporting various charitable initiatives in our local communities. From educational scholarships to healthcare projects and environmental conservation efforts, your participation helps us make a meaningful difference.</p>
              <br />
              <p>Join us for an unforgettable experience featuring vintage classics, modern supercars, modified vehicles, live entertainment, food stalls, and activities for all ages. Whether you're a dedicated petrolhead or simply looking for a fun day out with family and friends, Sundown Motor Fest has something for everyone!</p>
            </div>
            <div className="about-image">
              <img src="/images/about-image.jpg" alt="Sundown Motor Fest" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;