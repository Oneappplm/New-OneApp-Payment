import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Top Navbar */}
      <Navbar />

      {/* ✅ Sidebar + Content */}
      <div className="flex flex-1 overflow-hiddenv pt-14">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-3 md:p-8 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
