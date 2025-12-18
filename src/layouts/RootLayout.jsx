import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-indigo-300 dark:bg-zinc-700">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
