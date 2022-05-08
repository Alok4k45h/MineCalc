import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import Faq from "../Resources/ShovelDumper/ShovelDumperFaq";
import intro from "../Resources/ShovelDumper/ShovelDumperIntro";
import ShovelDumperCalc from "../Components/LocalComponent/ShovelDumperPage/ShovelDumperCalc/ShovelDumperCalc";

function ShovelDumper() {
  return (
    <div>
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <ShovelDumperCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
    </div>
  );
}

export default ShovelDumper;
