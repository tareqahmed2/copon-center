import React, { useContext } from "react";
import { productContext } from "../context/ProductProvider";
import BrandsData from "./BrandsData";

const BrandsOnSell = () => {
  const { brands } = useContext(productContext);
  console.log(brands);

  const sellAvailable = brands.filter(
    (sellProduct) => sellProduct.isSaleOn === true
  );
  console.log(sellAvailable);

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center text-[#FF6347] mb-6">
        Brands on Sale
      </h2>
      <p className="w-full md:w-2/3 mx-auto text-center my-4 text-[#34495E]">
        Shop now and enjoy massive discounts on top brands! Grab your favorite
        products at unbeatable prices before the sale ends!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellAvailable.map((brand) => (
          <BrandsData key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
