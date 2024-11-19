import React, { createContext } from "react";
const ReviewContext = createContext();
const ReviewProvider = ({ children }) => {
  const reviewInfo = {
    name: "tareq",
  };
  return (
    <ReviewContext.Provider value={reviewInfo}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
