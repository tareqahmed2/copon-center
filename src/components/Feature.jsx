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
      <h2>Features</h2>
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
