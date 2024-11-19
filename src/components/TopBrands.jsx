import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import React from "react";
import { productContext } from "../context/ProductProvider";
import Brand from "./Brand";
import BrandsData from "./BrandsData";

const TopBrands = () => {
  const { brands } = useContext(productContext);
  console.log(brands);

  return (
    <div>
      <div className=" py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Top Brands</h2>
        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          <div className="flex items-center space-x-8">
            {brands.map((brand) => (
              <Brand key={brand.id} brand={brand}></Brand>
            ))}
          </div>
        </Marquee>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 md:gap-2 lg:gap-4 ">
          {brands.map((brand) => (
            <BrandsData key={brand.id} brand={brand}></BrandsData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
