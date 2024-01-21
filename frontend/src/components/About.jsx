import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>
              Tablo is a "table" for gathering. A space where communities are
              built and inspiring moments are shared.
            </p>
          </div>
          <p className="mid">
            Tablo Kitchen x Café is a community cafe and restaurant. Designed
            and created to be a place of creativity, community, and comfort
            food.
          </p>
        
          <a href="https://drive.google.com/file/d/1sMrACUVH50Dys16jr7OTCwJ1YbgzxCOu/view">
            Explore Menu
          </a>
        </div>
        <div className="banner">
          <div>
            <img src="table.jpg" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
