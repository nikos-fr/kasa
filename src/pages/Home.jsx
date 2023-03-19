import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import "./home.css";
import image1 from "../assets/img1.png"


function Home({ apparts }) {
  const [indexImage, setIndexImage] = useState("")
  useEffect(() => {
    setIndexImage(image1)
  },[])
  return (
    <div className="home">
      <Banner pictureIndex={indexImage}  bannerTitle="chez vous partout et ailleurs" />
      <div className="cards">
        {apparts.map((appart) => (
          <Card
            key={appart.id}
            appartId={appart.id}
            appartCover={appart.cover}
            appartTitle={appart.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
