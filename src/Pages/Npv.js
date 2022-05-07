import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import NpvCalc from "../Components/LocalComponent/NpvPage/NpvCalc/NpvCalc";
import Faq from "../Resources/Npv/NpvFaq";
import intro from "../Resources/Npv/NpvIntro";
import "./AllPages.css";

function Npv() {
  return (
    <div>
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <NpvCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
    </div>
  );
}

export default Npv;
