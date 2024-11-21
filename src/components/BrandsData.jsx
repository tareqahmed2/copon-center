import React from "react";
import { toast } from "react-toastify";

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
  const handleVisitStore = () => {
    toast.warn("Function didn't implement yet!");
  };
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
              <li
                key={index}
                className="flex items-start gap-1 justify-between"
              >
                <span className="w-4/5 text-[10px] md:text-[16px]">
                  {coupon.coupon_code} - {coupon.description}
                </span>
                <span className="text-[8px] md:text-xs w-2/5 my-1 bg-green-300 p-1 flex items-center justify-center rounded-full">
                  {coupon.expiry_date}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end mt-4">
          <a href="#" onClick={handleVisitStore} className="btn btn-primary">
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsData;
