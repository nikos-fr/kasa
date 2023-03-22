import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  const imageIndex = 2;

  return (
    <div className="about">
      <Banner imageSrc={`./banner${imageIndex}.jpg`}/>
      <div className="apropos">
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default About;
