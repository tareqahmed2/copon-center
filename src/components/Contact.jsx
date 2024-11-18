// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Contact Us</h1>
      <form className="mt-5">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full mb-4"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
