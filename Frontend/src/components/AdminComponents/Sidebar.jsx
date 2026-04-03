import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/admin" },
    { name: "Add Products", icon: <ShoppingBag />, path: "/admin/addProducts" },
    { name: "All Products", icon: <Package />, path: "/admin/allProducts" },
    { name: "Orders", icon: <Users />, path: "/admin/orders" },
    { name: "Settings", icon: <Settings />, path: "/admin/settings" },
  ];

  return (
    <div className="h-full bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        Admin Panel
      </div>

      {/* Menu */}
      <div className="flex-1 p-2">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg mb-2 transition-all 
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2026 Admin
      </div>
    </div>
  );
}

export default Sidebar;
