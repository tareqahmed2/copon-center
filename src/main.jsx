import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthProvider from "./context/AuthContext.jsx";

import About from "./components/About.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

import Home from "./components/Home.jsx";
import Root from "./components/Root.jsx";
import TopBrands from "./components/TopBrands.jsx";
import ProductProvider from "./context/ProductProvider.jsx";

import Brand from "./components/Brand.jsx";
import BrandRoute from "./components/BrandRoute.jsx";
import BrandDetails from "./components/BrandDetails.jsx";
import Feature from "./components/Feature.jsx";
import FeatureDetails from "./components/FeatureDetails.jsx";
import Review from "./components/Review.jsx";
import ReviewDetails from "./components/ReviewDetails.jsx";
import ReviewProvider from "./context/ReviewProvider.jsx";
import FeatureProvider from "./context/FeatureProvider.jsx";
import CoponPage from "./components/CoponPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "routebrands",
        element: <BrandRoute></BrandRoute>,
      },
      {
        path: "brands",
        element: <BrandRoute></BrandRoute>,
      },
      {
        path: "about",
        element: <About></About>,
      },

      {
        path: "userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "coponpage",
        element: <CoponPage></CoponPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "brands/:id",
        element: <TopBrands></TopBrands>,
      },
      {
        path: "brandDetails/:brandId",
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "feature",
        element: <Feature></Feature>,
      },
      {
        path: "featureDetails/:id",
        element: <FeatureDetails></FeatureDetails>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "reviewDetails",
        element: <ReviewDetails></ReviewDetails>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <FeatureProvider>
          <ReviewProvider>
            <RouterProvider router={router}></RouterProvider>
          </ReviewProvider>
        </FeatureProvider>
      </ProductProvider>
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={1000} />
  </StrictMode>
);
