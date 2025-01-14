import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandSafari } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import { CiCreditCard1 } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
const Navbar = () => {
  const { user, logOut, photo, name, isFirstLogin, setFirstLogin } =
    useContext(AuthContext);

  const [updateName, setUpdateName] = useState(name);
  const [updatePhoto, setUpdatePhoto] = useState(photo);
  useEffect(() => {
    setUpdateName(name);
  }, [name]);
  useEffect(() => {
    setUpdatePhoto(photo);
  }, [photo]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && isFirstLogin) {
      navigate("/");
      setFirstLogin(false);
    }
  }, [user, setFirstLogin, navigate]);
  const [loading, setLoading] = useState(false);

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
          to="/brands"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          <TbBrandSafari />
          Brands
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          <CiLogin />
          Login
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
      {user && (
        <li>
          <NavLink
            to="/coponpage"
            className={({ isActive }) =>
              isActive ? "text-accent font-bold" : ""
            }
          >
            <CiCreditCard1 />
            Copon Page
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

  const handleLogOut = async () => {
    try {
      setLoading(true);
      await logOut();
      navigate("/login");
    } catch (error) {
      toast.error("Failed to log out!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-200 sticky top-0 backdrop-blur-lg z-10 mb-5">
      <div className="navbar w-11/12   mx-auto  flex justify-between ">
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
              className="w-12 h-12 rounded-full cursor-pointer"
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0">{links}</ul>
        </div>

        <div className="navbar-end w-full">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center items-start">
                <img
                  className="w-10 h-10 rounded-full"
                  src={
                    updatePhoto ||
                    user?.photoURL ||
                    photo ||
                    "https://via.placeholder.com/150"
                  }
                  alt="User"
                />
                <span className="text-xs hidden md:block my-2">
                  <h3 className="hidden md:block font-semibold text-accent text-[12px]">
                    Welcome, {updateName || user?.displayName || name || "User"}
                    !
                  </h3>{" "}
                  {user?.email}
                </span>
              </div>

              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-accent flex items-center gap-1"
                disabled={loading}
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-blue-500"></div>
                ) : (
                  <FaSignOutAlt />
                )}
                {loading ? "Logging out..." : "Log Out"}
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
                className="btn btn-primary"
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
