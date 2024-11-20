import React, { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { signInWithGoogle, logInWithEmail, resetPassword } =
    useContext(AuthContext);
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email to reset your password.");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.warning("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        toast.error("Error resetting password:", error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full md:w-1/4 mx-1 shrink-0 shadow-2xl">
        <h2 className="text-2xl my-10 font-bold text-center mb-6 text-[#00BBA6]">
          Login Now!
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
              ref={emailRef}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a
                onClick={handleForgetPassword}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Login</button>
          </div>
          <button onClick={signInWithGoogle} className="btn flex items-center">
            <span>
              <FaGoogle />
            </span>
            Login With Google
          </button>
        </form>
        <div className="flex justify-center items-center">
          <p className="my-5 font-bold">
            Don't have an account?{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
