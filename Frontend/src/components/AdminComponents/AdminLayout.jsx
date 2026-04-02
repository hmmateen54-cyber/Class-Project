import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <Fragment>
      <div>
        <Sidebar />
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default AdminLayout;
