import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Banner from "./Banner";
import TopBrands from "./TopBrands";
import BrandsOnSell from "./BrandsOnSell";
import Feature from "./Feature";
import Review from "./Review";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div
        data-aos="zoom-in"
        className="animate__animated animate__fadeInLeft animate__delay-1s"
      >
        <Banner />
        <TopBrands />
        <BrandsOnSell />
        <Feature />
        <Review />
      </div>
    </div>
  );
};

export default Home;
