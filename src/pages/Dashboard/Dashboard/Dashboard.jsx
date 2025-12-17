import React from "react";
import { Link, Outlet } from "react-router";
import { LuShoppingBag } from "react-icons/lu";
import { MdInventory, MdPendingActions } from "react-icons/md";
import {
  FaBoxes,
  FaClipboardCheck,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import useRole from "../../../hooks/useRole";
import { NavLink } from "react-router";

const Dashboard = () => {
  const { role } = useRole();
  return (
    <div className="drawer lg:drawer-open bg-base-100">
      <title>Dashboard</title>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">GarmentPilot Dashboard</div>
        </nav>
        <Outlet></Outlet>
        {/* Page content here */}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </NavLink>
            </li>
            {/* My Dashboard Links */}
            {/* buyer dashboard*/}
            {role === "buyer" && (
              <li>
                <NavLink
                  to={"/dashboard/my-orders"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Orders"
                >
                  {/* my-orders icon */}
                  <LuShoppingBag></LuShoppingBag>
                  <span className="is-drawer-close:hidden">My Orders</span>
                </NavLink>
              </li>
            )}

            {/* manager dashboard */}
            {role === "manager" && (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/add-product"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Product"
                  >
                    {/*Add product icon */}
                    <AiOutlinePlusSquare></AiOutlinePlusSquare>
                    <span className="is-drawer-close:hidden">Add Product</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/manage-products"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Products"
                  >
                    {/*Manage product icon */}
                    <MdInventory></MdInventory>
                    <span className="is-drawer-close:hidden">
                      Manage Products
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/pending-orders"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Pending Orders"
                  >
                    {/*Pending Orders icon */}
                    <MdPendingActions></MdPendingActions>
                    <span className="is-drawer-close:hidden">
                      Pending Orders
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/approved-orders"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Approved Orders"
                  >
                    {/*Approved Orders icon */}
                    <FaClipboardCheck></FaClipboardCheck>
                    <span className="is-drawer-close:hidden">
                      Approved Orders
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {/* common dashboard */}
            {role !== "admin" && (
              <li>
                <NavLink
                  to={"/dashboard/my-profile"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Profile"
                >
                  {/*Approved Orders icon */}
                  <CgProfile />
                  <span className="is-drawer-close:hidden">My Profile</span>
                </NavLink>
              </li>
            )}

            {/* admin dashboard */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/manage-users"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Users"
                  >
                    {/*Approved Orders icon */}
                    <FaUsers></FaUsers>
                    <span className="is-drawer-close:hidden">Manage Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/admin-all-products"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All Products"
                  >
                    {/*All Products icon */}
                    <FaBoxes></FaBoxes>
                    <span className="is-drawer-close:hidden">All Products</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/admin-all-orders"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All Orders"
                  >
                    {/*All Orders icon */}
                    <FaClipboardList></FaClipboardList>
                    <span className="is-drawer-close:hidden">All Orders</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
