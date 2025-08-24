import React from "react";
import { IoReload } from "react-icons/io5"; // Correct icon

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <IoReload className="animate-spin text-blue-500 text-6xl mb-4" />
        <p className="text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
