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
      <h2 className="text-2xl font-bold mb-6">Brands on Sale</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellAvailable.map((brand) => (
          <BrandsData key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
