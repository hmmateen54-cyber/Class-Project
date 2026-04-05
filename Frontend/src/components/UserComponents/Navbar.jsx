import { HamburgerIcon } from "lucide-react";
import React, { Fragment, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import Logo from "../../assets/logo.png";

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      links: "/user/home",
    },
    {
      name: "About",
      links: "/user/about",
    },
    {
      name: "Contact",
      links: "/user/contact",
    },
    {
      name: "Orders",
      links: "/user/orders",
    },
  ];

  const [sideBar, setSidebar] = useState(false);
  const Location = useLocation();

  return (
    <Fragment>
      <div className="h-16 bg-gray-200 flex items-center justify-between px-4">
        <div className="logo">
          <img src={Logo} className="h-10 w-auto object-cover" alt="" />
        </div>
        <div className="hidden md:flex space-x-4">
          {navLinks &&
            navLinks.map((e) => (
              <NavLink key={e.name} to={e.links}>
                {e.name}
              </NavLink>
            ))}
        </div>
        <div className="flex space-x-4">
          <NavLink to="/auth/login">
            <button className="hidden md:block bg-orange-700 hover:bg-orange-900 px-3 py-2 rounded text-white cursor-pointer">
              Login
            </button>
          </NavLink>
          <NavLink to="/auth/signup">
            <button className="hidden md:block bg-orange-700 hover:bg-orange-900 px-3 py-2 rounded text-white cursor-pointer">
              Signup
            </button>
          </NavLink>
          <button
            className="md:hidden bg-orange-700 px-3 py-2 rounded text-white cursor-pointer"
            onClick={() => setSidebar(true)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>
      <Sheet open={sideBar} onOpenChange={setSidebar}>
        <SheetContent side="right" w-64 p-0>
          <SheetHeader className="p-4 border-b">
            <h1 className="text-xl italic font-bold">Logo</h1>
          </SheetHeader>
          <div className="flex flex-col p-4 ">
            {navLinks &&
              navLinks.map((e) => (
                <NavLink
                  className={`rounded p-4 ${Location.pathname === e.links ? "bg-gray-300" : ""}`}
                  key={e.name}
                  to={e.links}
                  onClick={() => setSidebar(false)}
                >
                  {e.name}
                </NavLink>
              ))}
          </div>
          <div className="flex space-x-4 px-6">
            <NavLink to="/auth/login">
              <button className="bg-orange-700 hover:bg-orange-900 px-3 py-2 rounded text-white cursor-pointer">
                Login
              </button>
            </NavLink>
            <NavLink to="/auth/signup">
              <button className="bg-orange-700 hover:bg-orange-900 px-3 py-2 rounded text-white cursor-pointer">
                Signup
              </button>
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Navbar;
