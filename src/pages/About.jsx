import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import image2 from "../assets/banniere2.png"

function About() {
  const [indexImage, setIndexImage] = useState("")
  useEffect(() => {
    setIndexImage(image2)
  },[])

  return (
    <div className="about">
      <Banner pictureIndex={indexImage} bannerTitle="" />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default About;