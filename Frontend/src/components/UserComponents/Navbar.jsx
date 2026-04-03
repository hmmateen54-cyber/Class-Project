import React from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/user/home" },
    { name: "About", path: "/user/about" },
    { name: "Contact", path: "/user/contact" },
    { name: "Orders", path: "/user/orders" },
  ];

  return (
    <div className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">MyStore</div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6 font-medium">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Search */}
      <div className="hidden lg:flex items-center border rounded overflow-hidden w-1/4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-3 py-2 outline-none"
        />
        <button className="bg-black text-white px-3 py-2">
          <Search size={18} />
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        {/* User */}
        <div className="flex items-center gap-1 cursor-pointer">
          <User size={20} />
          <span className="hidden md:block">Login</span>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
