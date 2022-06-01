import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import RqdCalc from "../Components/LocalComponent/RqdPage/RqdCalc/RqdCalc";
import Faq from "../Resources/Rqd/RqdFaq";
import intro from "../Resources/Rqd/RqdIntro";
import "./AllPages.css";

function Rqd() {
  return (
    <div>
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <RqdCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
    </div>
  );
}

export default Rqd;
