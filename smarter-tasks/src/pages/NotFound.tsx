// import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" py-3 px-3">
      <h1 className="py-">404 - Not Found</h1>
      <p className="py-3">The page you are looking for does not exist.</p>
      <Link to="/home">
        <button id="backToHomeButton" className="bg-blue-500 text-white py-2 px-4 mb-3 rounded hover:bg-blue-700">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;