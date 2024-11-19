import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../context/ProductProvider";

const BrandDetails = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState(null);
  const { brands } = useContext(productContext);

  useEffect(() => {
    if (brands && brands.length > 0) {
      const clickedBrand = brands.find((brand) => brand._id === brandId);
      setBrand(clickedBrand || null);
    }
  }, [brands, brandId]);

  if (!brand) {
    return <div>Loading brand details...</div>;
  }

  const { brand_name, brand_logo, rating, description, coupons } = brand;

  return (
    <div className="p-6">
      <div className="text-center">
        <img
          src={brand_logo}
          alt={brand_name}
          className="w-40 h-40 object-contain mx-auto rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">{brand_name}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-yellow-500 font-medium mt-2">Rating: {rating} ⭐</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Available Coupons</h3>
        {coupons && coupons.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coupons.map((coupon, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-blue-600">
                  {coupon.coupon_code}
                </h4>
                <p className="text-gray-600 text-sm">{coupon.description}</p>
                <p className="text-gray-500 text-xs mt-2">
                  <strong>Condition:</strong> {coupon.condition}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  <strong>Type:</strong> {coupon.coupon_type}
                </p>
                <p className="text-red-500 text-xs mt-1">
                  <strong>Expiry:</strong> {coupon.expiry_date}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No coupons available for this brand.</p>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
