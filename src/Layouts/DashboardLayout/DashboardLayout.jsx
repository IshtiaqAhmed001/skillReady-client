import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-5xl text-center">This is dashboard</h1>
      </div>
    </div>
  );
};

export default DashboardLayout;
