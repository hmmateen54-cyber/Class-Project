import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="h-16 shadow bg-white flex items-center px-4">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
