import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
            <img src="/tablo.png" alt="" />
          </div>
          <div className="right">
            <p className="p1">Open: 10:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p className="p2">Developed By GROUP 5</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By GROUP 5</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
