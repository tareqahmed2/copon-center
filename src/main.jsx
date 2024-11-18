import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthProvider from "./context/AuthContext.jsx";
import Brands from "./components/Brand.jsx";
import About from "./components/About.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

import Home from "./components/Home.jsx";
import Root from "./components/Root.jsx";
import TopBrands from "./components/TopBrands.jsx";
import ProductProvider from "./context/ProductProvider.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

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
        path: "brands",
        element: <Brands></Brands>,
      },
      {
        path: "about",
        element: <About></About>,
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
        path: "login",
        element: <Login></Login>,
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
        path: "productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "*",
        element: <h2>data not found</h2>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-center"></ToastContainer>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
