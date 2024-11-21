import React, { useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const ForgetPassword = () => {
  const { user, logOut } = useContext(AuthContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleResetPassword = async () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email to reset your password.");
      return;
    }
    if (user) {
      logOut();
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");

      await signOut(auth);

      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      toast.error(`Error resetting password: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center my-10 mx-5">
      <div className="card bg-base-100 w-full md:w-3/4 lg:w-3/6 px-2 shrink-0 shadow-2xl">
        <h2 className="text-2xl my-10 font-bold text-center mb-6 text-[#00BBA6]">
          Forgot Password?
        </h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={location.state?.email || ""}
              ref={emailRef}
            />
          </div>
          <div className="form-control mt-6">
            <button onClick={handleResetPassword} className="btn btn-accent">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
