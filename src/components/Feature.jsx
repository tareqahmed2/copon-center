import React, { useContext, useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./feature.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 class="text-4xl font-bold text-primary mb-4 text-center">Features</h2>
      <p
        class="text-lg text-center
      w-full md:w-2/3 mx-auto my-4 text-gray-700"
      >
        Discover the standout features that make our products unique and
        performance-driven.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-4">
        {features.length > 0 ? (
          features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))
        ) : (
          <p>No features available</p>
        )}
      </div>
    </div>
  );
};

export default Feature;
