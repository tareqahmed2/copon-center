import React, { Children, createContext, useEffect, useState } from "react";
import TopBrands from "../components/TopBrands";
export const productContext = createContext();
const ProductProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/Brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brand data:", error));
  }, []);
  // console.log(brands);
  const productInfo = {
    brands,
  };
  return (
    <productContext.Provider value={productInfo}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
