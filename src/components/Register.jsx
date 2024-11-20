import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const { signUpWithEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const validateThePassword = (password) => {
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const minLengthPattern = /.{6,}/;
    if (!uppercasePattern.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercasePattern.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!minLengthPattern.test(password)) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");

    const email = form.get("email");
    const password = form.get("password");
    const passwordError = validateThePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    } else {
      setError("");
    }
    signUpWithEmail(email, password, photoURL, name)
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
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full md:w-1/4 shrink-0 shadow-2xl">
        <h2 className="text-2xl my-10 font-bold text-center mb-2 text-blue-600">
          Register Now!
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
              name="photoURL"
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="flex flex-col px-2 justify-center items-center">
          <div>
            {error && (
              <p className="text-red-600 font-bold text-center">{error}</p>
            )}
          </div>
          <p className="my-5 font-bold">
            Already have an account?{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
