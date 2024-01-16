import React from "react";


const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">HEAVEN'S</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/lamb.jpg" alt="hero1" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/food1.jpg" alt="hero2" />
          </div>
          <h1 className="title dishes_title">KITCHEN</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
