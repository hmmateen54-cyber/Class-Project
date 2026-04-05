import React from "react";
import { Outlet } from "react-router-dom";
import RightSide from "./RightSide";

function AuthLayout() {
  return (
    <div className="h-screen flex justify-evenly items-center">
      <div className="md:w-1/2 h-full bg-black text-orange-600 flex justify-center items-center p-10">
        <RightSide />
      </div>
      <div className="md:w-1/2 h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
