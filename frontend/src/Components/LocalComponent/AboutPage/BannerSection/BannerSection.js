import React from "react";
//import Typewriter from "typewriter-effect";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div
      className="banner-sections-bg-container d-flex justify-content-center flex-column"
      style={{
        backgroundImage: `url(http://imscanada.co/wp-content/uploads/2021/08/Asset-36IMS-Formatted-about-us-2048x776.jpg)`,
      }}
    >
      <div className="text-center">
        <h1 className="banner-heading mb-3">
          Our Aim is to help, inspire and excite through creativity and New
          Technology
        </h1>
        <p className="banner-caption mb-4">We are Mining Engineers</p>
      </div>
    </div>
  );
}

export default BannerSection;
