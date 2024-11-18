import React from "react";
import logo from "../assets/copon.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/branks">Brands</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/userprofile">User Profile</NavLink>
      </li>

      {/* {
        user && <>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
        </>
    } */}
    </>
  );
  return (
    <div>
      <div className="navbar w-11/12 mx-auto   bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img className="w-16" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={() => navigate("/login")} className="btn btn-accent">
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="btn btn-accent"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
