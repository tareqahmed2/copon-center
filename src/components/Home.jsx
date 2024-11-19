import React from "react";
import Banner from "./Banner";
import TopBrands from "./TopBrands";
import BrandsOnSell from "./BrandsOnSell";
import Feature from "./Feature";
import Review from "./Review";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <TopBrands></TopBrands>
      <BrandsOnSell></BrandsOnSell>
      <Feature></Feature>
      <Review></Review>
    </div>
  );
};

export default Home;
