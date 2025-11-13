import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <p className="text-gray-500 text-xl animate-pulse">Loading ...</p>
    </div>
  );
};

export default Loader;
