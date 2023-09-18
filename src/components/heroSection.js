import React from "react";
import heroSectionStyle from '../Styles/heroSection.css'
const HeroSection = () => {
  return (
    <div className="header-section ">
      <div className="hero-image w-100">
        <div className="hero-text ">
          <div className="inner-text">
          <h1 style={{fontSize:"50px"}}>Foodies Levish</h1>
          </div>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
