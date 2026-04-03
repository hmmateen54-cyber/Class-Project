import React from "react";
import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Dashboard</h1>

        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
