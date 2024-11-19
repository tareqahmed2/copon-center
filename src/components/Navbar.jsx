import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandSafari } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/branks"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          <TbBrandSafari />
          Brands
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/userprofile"
            className={({ isActive }) =>
              isActive ? "text-accent font-bold" : ""
            }
          >
            <FaUser />
            My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          <FcAbout />
          About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar w-11/12 mx-auto bg-base-100 flex justify-between ">
        <div className="navbar-start w-full md:w-1/4">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost px-0 md:px-1">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img
              className="w-16 cursor-pointer"
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end w-full">
          {user ? (
            <div className="flex items-center gap-4">
              <h3 className="hidden md:block font-semibold text-accent text-sm">
                Welcome, {user.displayName || "User"}!
              </h3>
              <img
                src={user && user.photoURL}
                alt={user && user.displayName}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xs hidden md:block">
                {" "}
                {user && user.email}
              </span>
              <button
                onClick={logOut}
                className="btn btn-outline btn-accent flex items-center gap-1"
              >
                <FaSignOutAlt />
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="btn btn-accent"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-accent"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
