import React from "react";
import Bannersection from "../Components/LocalComponent/HomePageComponent/BannerSection/BannerSection";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import VisionSection from "../Components/LocalComponent/HomePageComponent/VisionSection/VisionSection";

function HomePage() {
  return (
    <div>
      <Bannersection />
      <VisionSection />
      <CalculationCard />
      <ContactUsSection />
    </div>
  );
}

export default HomePage;
