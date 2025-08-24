import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold mb-4 text-red-600">404</h1>
      
      {/* Error Message */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      
      {/* Navigation Button */}
      <NavLink
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
      >
        Go Back Home
      </NavLink>
      
    </div>
  );
};

export default ErrorPage;
