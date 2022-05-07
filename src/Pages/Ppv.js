import React from "react";
import intro from "../Resources/Ppv/PpvIntro";
import Faq from "../Resources/Ppv/PpvFaq";
import PpvCalc from "../Components/LocalComponent/PpvPage/PpvCalc/PpvCalc";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import "./AllPages.css";

function Ppv() {
  return (
    <div>
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <PpvCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
    </div>
  );
}

export default Ppv;
