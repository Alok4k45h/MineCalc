import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import PressureMineCalc from "../Components/LocalComponent/PressureMinePage/PressureMineCalc/PressureMineCalc";
import Faq from "../Resources/PressureMine/PressureMineFaq";
import intro from "../Resources/PressureMine/PressureMineIntro";
import "./AllPages.css";

function PressureMine() {
  return (
    <div>
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <PressureMineCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
    </div>
  );
}

export default PressureMine;
