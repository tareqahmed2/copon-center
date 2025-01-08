import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const FeatureDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/feature.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);
  const handleGotoHomeRoute = () => {
    navigate("/");
  };
  const selectedCardData = features.find((item) => item.id === parseInt(id));

  if (!selectedCardData) {
    return <p>Feature not found</p>;
  }

  const {
    name,
    price,
    image,
    isNewArrival,
    discount,
    details: { description, features: featureList, stock, category },
  } = selectedCardData;
  const hadleAddToCart = () => {
    toast.warn("Function didn't implement yet!");
  };
  return (
    <div className="container w-11/12 mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {name}
              {isNewArrival && (
                <span className="ml-4 inline-block px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                  New Arrival
                </span>
              )}
            </h2>
            <p className="mt-2 text-lg text-gray-600">{description}</p>
            <div className="mt-4">
              <p className="text-xl font-bold text-gray-900">
                ${price}{" "}
                {discount > 0 && (
                  <span className="text-sm text-green-600 ml-2">
                    {discount}% off
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-500">
                Category: <span className="font-semibold">{category}</span>
              </p>
              <p className="text-sm text-gray-500">
                In Stock: <span className="font-semibold">{stock}</span>
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Features:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {featureList.map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={hadleAddToCart}
              className="btn btn-primary px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleGotoHomeRoute}
              className="btn btn-outline px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
