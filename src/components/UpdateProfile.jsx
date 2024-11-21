import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, handleProfileUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    navigate("/userProfile");

    if (!user) {
      setError("No user logged in!");
      return;
    }

    setLoading(true);
    try {
      await handleProfileUpdate(name, photoURL);
      setError("");
      setName("");
      setPhotoURL("");
    } catch (error) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
              name="photoURL"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" disabled={loading}>
              {loading ? "Updating..." : "Update Information"}
            </button>
          </div>
        </form>
        {error && (
          <div className="flex flex-col px-2 justify-center items-center mt-4">
            <p className="text-red-600 font-bold text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
