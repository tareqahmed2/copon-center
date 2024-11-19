import React from "react";

const BrandsData = ({ brand }) => {
  const {
    brand_name,
    rating,
    description,
    brand_logo,
    coupons,
    shop_Link,
    category,
    isSaleOn,
  } = brand;

  return (
    <div className="card bg-base-100 shadow-xl p-3 my-4">
      <img
        src={brand_logo}
        alt={`${brand_name} Logo`}
        className="w-full h-40 object-cover"
      />
      <div className="card-body">
        <h2 className="card-title">{brand_name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center">
          <span className="mr-2">Rating: {rating}</span>
          <span
            className={`badge ${isSaleOn ? "badge-success" : "badge-error"}`}
          >
            {isSaleOn ? "Sale On" : "No Sale"}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-sm font-medium">Category: {category}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Coupons:</h3>
          <ul className="list-none">
            {coupons.map((coupon, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {coupon.coupon_code} - {coupon.description}
                </span>
                <span className="text-xs">{coupon.expiry_date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end mt-4">
          <a href={shop_Link} className="btn btn-primary">
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsData;
