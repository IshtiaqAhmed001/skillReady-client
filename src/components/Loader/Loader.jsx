import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100">
  
      <span className="loading loading-spinner loading-lg text-primary"></span>

  
      <p className="mt-4 text-base-content/70 text-lg animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
