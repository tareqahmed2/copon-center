import React, { createContext, useEffect, useState } from "react";

export const FeatureContext = createContext();

const FeatureProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const featureInfo = { loading };
  return (
    <FeatureContext.Provider value={featureInfo}>
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
