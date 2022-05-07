import React from "react";
//import Typewriter from "typewriter-effect";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div
      className="banner-sections-bg-container d-flex justify-content-center flex-column"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/b/calculator-pen-table-calendar-blue-background-top-view-office-desk-copy-space-179944470.jpg)`,
      }}
    >
      <div className="text-center">
        <h1 className="banner-heading mb-3">Welcome to new Mining World</h1>
        <p className="banner-caption mb-4">Perform Any Calculation With Ease</p>
        <button className="custom-buttons">Get Started</button>
        <button className="custom-outline-buttons">Explore more</button>
      </div>
    </div>
  );
}

export default BannerSection;
