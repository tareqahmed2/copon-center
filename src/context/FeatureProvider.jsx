import React, { createContext, useEffect, useState } from "react";
const FeatureContext = createContext();
const FeatureProvider = ({ children }) => {
  const [features, setFeatures] = useState(null);
  useEffect(() => {
    fetch("./feature.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);
  console.log(features);
  const featureInfo = { features };
  return (
    <FeatureContext.Provider value={featureInfo}>
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
