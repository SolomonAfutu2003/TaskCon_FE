// import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <main className="bg-gray-100 flex-1">
        <Header />
        <div className="p-3">
          {" "}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
