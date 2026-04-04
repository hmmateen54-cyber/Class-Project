import { HamburgerIcon } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex md:hidden hamburger cursor-pointer">
        <HamburgerIcon />
      </div>
      <div className="flex justify-around absolute right-4">
        <button className="bg-orange-800 px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
