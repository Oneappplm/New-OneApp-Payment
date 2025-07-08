import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWithNavbar = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow pt-16">
      <Outlet />
    </div>
  </div>
);
export default LayoutWithNavbar;