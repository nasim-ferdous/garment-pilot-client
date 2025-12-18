import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaTruck,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router";

const BuyerDashBoardHome = () => {
  return (
    <div className="p-6 md:p-10">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Buyer Dashboard</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Track your orders, view status & manage your profile
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mb-10">
        {/* Total Orders */}
        <div className="card bg-base-100 dark:bg-indigo-300  shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaClipboardList className="text-4xl text-primary" />
            <div>
              <h3 className="text-lg font-semibold">My Orders</h3>
              <p className="text-sm text-gray-500 dark:text-gray-800 ">
                View all orders
              </p>
            </div>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="card bg-base-100 dark:bg-indigo-300 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaBoxOpen className="text-4xl text-warning" />
            <div>
              <h3 className="text-lg font-semibold">Pending Orders</h3>
              <p className="text-sm text-gray-500 dark:text-gray-800 ">
                Waiting for approval
              </p>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div className="card bg-base-100 dark:bg-indigo-300 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaTruck className="text-4xl text-success" />
            <div>
              <h3 className="text-lg font-semibold">Track Orders</h3>
              <p className="text-sm text-gray-500 dark:text-gray-800 ">
                Live order tracking
              </p>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="card bg-base-100 dark:bg-indigo-300 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaUserCircle className="text-4xl text-info" />
            <div>
              <h3 className="text-lg font-semibold">My Profile</h3>
              <p className="text-sm text-gray-500 dark:text-gray-800 ">
                Account details
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="card bg-base-100 dark:bg-indigo-300 shadow-lg">
        <div className="card-body">
          <h3 className="text-xl font-semibold mb-2">
            Welcome to Your Dashboard
          </h3>
          <p className="text-gray-600 dark:text-gray-800 leading-relaxed">
            From here you can place new orders, track delivery status, review
            your previous orders, and manage your profile information.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={"/dashboard/my-orders"}
              className="btn btn-primary btn-sm"
            >
              View My Orders
            </Link>
            <Link to={"/all-products"} className="btn btn-outline btn-sm">
              All Products
            </Link>
            <Link
              to={"/dashboard/my-profile"}
              className="btn btn-secondary btn-sm"
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashBoardHome;
