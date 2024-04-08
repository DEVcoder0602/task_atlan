import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full border-b-2 border-gray-900 w-8 h-8"></div>
    </div>
  );
};

export default Loader;
