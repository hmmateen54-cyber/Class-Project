import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";

function Sidebar({ open, setOpen }) {
  const Location = useLocation();
  console.log(Location);
  const navLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "All Products", path: "/admin/allProducts" },
    { name: "Add Products", path: "/admin/addProducts" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Setting", path: "/admin/setting" },
  ];
  return (
    <Fragment>
      <div className="h-full bg-gray-900 text-white p-4 flex flex-col">
        <div className="logo">
          <h1 className="text-2xl font-bold p-4 border-b border-gray-400">
            Admin Panel
          </h1>
          <ul className="flex flex-col p-4">
            {navLinks.map((items, index) => (
              <li
                key={index}
                className={`py-4 cursor-pointer px-4 text-white text-xl rounded-xl space-y-2 hover:bg-gray-700 ${Location.pathname === items.path ? "bg-gray-700" : ""}`}
              >
                <NavLink to={items.path}>{items.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="h-full bg-gray-900 text-white p-4 flex flex-col"
        >
          <SheetHeader>
            <h1 className="text-2xl font-bold p-4 border-b border-gray-400">
              Admin Panel
            </h1>
          </SheetHeader>
          <ul className="flex flex-col p-4">
            {navLinks.map((items, index) => (
              <li
                key={index}
                className={`py-4 cursor-pointer px-4 text-white text-xl rounded-xl space-y-2  ${Location.pathname === items.path ? "bg-gray-700" : ""}`}
              >
                <NavLink className="hover:bg-gray-700" to={items.path}>
                  {items.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Sidebar;
