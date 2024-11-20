import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const BrandRoute = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("/Brands.json");
        const data = await response.json();
        setFilteredBrands(data);
      } catch (error) {
        console.error("Error fetching brands data: ", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    setFilteredBrands((prevBrands) =>
      prevBrands.filter((brand) =>
        brand.brand_name.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem]);

  const handleViewCoupons = (brandId, isSaleOn) => {
    if (!user) {
      navigate("/login");
    } else if (isSaleOn) {
      navigate(`/brandDetails/${brandId}`);
    } else {
      window.open(brandDetails, "_blank");
    }
  };

  return (
    <div className="container w-11/12 mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">All Brands</h1>
      <input
        type="text"
        placeholder="Search by brand name..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white p-4 border rounded-lg shadow-md flex flex-col justify-between h-full"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-32 h-32 object-contain mx-auto mb-4"
            />
            <div className="text-center flex-grow">
              <div className="flex justify-center items-center mb-2">
                <FaStar className="text-yellow-500 mr-1" />
                <span>{brand.rating}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{brand.brand_name}</h2>
              <p className="text-gray-600 mb-4">{brand.description}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <button
                onClick={() => handleViewCoupons(brand._id, brand.isSaleOn)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                View Coupons
              </button>
              {brand.isSaleOn && (
                <p className="text-red-500 animate-bounce mt-2">Sale is on!</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandRoute;
