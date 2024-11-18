import React from "react";

import { useNavigate } from "react-router-dom";

const Brand = ({ brand }) => {
  const navigate = useNavigate();

  const handleBrandClick = (brandId) => {
    navigate(`brands/${brandId}`);
  };
  return (
    <div>
      <div
        key={brand._id}
        className="cursor-pointer transform hover:scale-110 transition duration-300"
        onClick={() => handleBrandClick(brand._id)}
      >
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-36 h-36 object-contain rounded-lg shadow-lg"
        />
        <p className="text-center mt-2 font-semibold">{brand.brand_name}</p>
      </div>
    </div>
  );
};

export default Brand;
