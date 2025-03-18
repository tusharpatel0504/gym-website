import React from "react";
import Sidebar from "./Sidebar";
import "./common.css";

const Layout = ({ children }) => {
  return (
    <div className="dashboard-admin">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
