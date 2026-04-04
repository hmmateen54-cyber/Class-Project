import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-900 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-gray-800  text-white flex items-center px-4">
          <Navbar />
        </div>
        <div className="flex-1 bg-gray-600 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
