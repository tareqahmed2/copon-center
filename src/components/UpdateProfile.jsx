import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, setName, setPhoto, handleProfileUpdate } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");

    if (!user) {
      setError("No user logged in!");
      return;
    }
    setName(name);
    setPhoto(photoURL);
    handleProfileUpdate();
    navigate("/userProfile");
  };

  return (
    <div className="flex justify-center items-center my-10 mx-5">
      <div className="card bg-base-100 w-full md:w-3/4 lg:w-3/6 shrink-0 shadow-2xl">
        <h2 className="text-2xl my-10 font-bold text-center mb-2 text-blue-600">
          Update Now!
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
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
              name="photoURL"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Information</button>
          </div>
        </form>
        <div className="flex flex-col px-2 justify-center items-center">
          <div>
            {error && (
              <p className="text-red-600 font-bold text-center">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
