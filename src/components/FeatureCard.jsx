import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FeatureCard = ({ feature }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    price,
    image,
    isNewArrival,
    discount,
    details: { description, features, stock, category },
  } = feature;
  const handleDetailsClick = () => {
    navigate(`featureDetails/${id}`);
  };
  const handleBuyNow = () => {
    toast.warn("Function didn't implement yet!");
  };
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={name}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between flex-grow">
        <h2 className="card-title text-lg font-bold text-gray-800">
          {name}
          {isNewArrival && (
            <div className="badge badge-secondary text-xs md:text-md flex flex  ml-2">
              New Arrival
            </div>
          )}
        </h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="my-3">
          <span className="text-lg font-semibold text-gray-900">${price}</span>
          {discount > 0 && (
            <span className="text-sm text-green-600 ml-2">{discount}% off</span>
          )}
        </div>
        <div className="text-sm text-gray-500 mb-3">
          <span>Category: {category}</span> | <span>Stock: {stock}</span>
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="card-actions flex justify-between mt-4">
          <button onClick={handleBuyNow} className="btn btn-primary btn-sm">
            Buy Now
          </button>
          <button
            onClick={handleDetailsClick}
            className="btn btn-outline btn-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
