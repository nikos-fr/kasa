import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import "./home.css";

function Home({ apparts }) {
  return (
    <div className="home">
      <Banner />
      <div className="cards">
        {apparts.map((appart) => (
          <Card
            key={appart.id}
            appartCover={appart.cover}
            appartTitle={appart.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
