import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="container w-11/12 mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
        About Me
      </h2>
      <div className="flex justify-center mb-6"></div>
      <p className="text-lg mb-4 text-gray-700">
        Hi, I'm Tareq Ahmed, a passionate software developer with a focus on
        creating impactful web and mobile applications. I strive to combine
        creativity with functionality to deliver exceptional user experiences.
      </p>
      <p className="text-lg mb-6 text-gray-700">
        My journey began with a strong interest in technology, which led me to
        explore various programming languages and development frameworks. I
        specialize in front-end technologies like React, JavaScript, and CSS
        frameworks such as Tailwind CSS, but I also have experience with
        back-end development using Node.js, Express, and databases like MongoDB.
      </p>

      <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-3">
        Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            JavaScript (ES6+)
          </h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            React & React Native
          </h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            HTML5 & CSS3
          </h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            Tailwind CSS
          </h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            Node.js & Express
          </h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            MongoDB & SQL
          </h4>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h4 className="font-semibold text-lg text-indigo-500">
            Git & GitHub
          </h4>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-3">
        Other Projects
      </h3>
      <p className="text-lg mb-4 text-gray-700">
        I am currently working on several projects, including:
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li>
          <strong>Project 1:</strong> A web application that helps users track
          their daily tasks and set reminders.
        </li>
        <li>
          <strong>Project 2:</strong> An e-commerce platform with real-time
          product recommendations and an integrated payment system.
        </li>
        <li>
          <strong>Project 3:</strong> A mobile app for fitness tracking,
          providing personalized workout plans and nutrition guides.
        </li>
      </ul>

      <p className="text-lg mt-4 text-gray-700">
        I'm always eager to learn new technologies and take on challenges that
        allow me to grow as a developer. If you are interested in collaborating
        on a project or have any questions, feel free to reach out!
      </p>

      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://github.com/tareqahmed2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl text-gray-800 hover:text-indigo-600 transition-all" />
        </a>

        <a
          href="https://twitter.com/tareq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-3xl text-gray-800 hover:text-indigo-600 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default About;
