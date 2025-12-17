import React from "react";
import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router";

const AdminDashBoardHome = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <title>Admin Dashboard</title>

      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <p className="text-gray-500 mt-1">Overview of platform performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaUsers className="text-4xl text-primary" />
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <h3 className="text-2xl font-bold">1,245</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaClipboardList className="text-4xl text-info" />
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold">3,560</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaBoxOpen className="text-4xl text-success" />
            <div>
              <p className="text-gray-500 text-sm">Products</p>
              <h3 className="text-2xl font-bold">482</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <MdOutlineAttachMoney className="text-4xl text-warning" />
            <div>
              <p className="text-gray-500 text-sm">Revenue</p>
              <h3 className="text-2xl font-bold">$24,780</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>

          <div className="flex flex-wrap gap-3">
            <Link
              to={"/dashboard/manage-users"}
              className="btn btn-primary btn-sm"
            >
              Manage Users
            </Link>
            <Link
              to={"/dashboard/admin-all-products"}
              className="btn btn-info btn-sm"
            >
              All Products
            </Link>
            <Link
              to={"/dashboard/admin-all-orders"}
              className="btn btn-primary btn-sm"
            >
              All Orders
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li> New product added</li>
            <li> Order #2345 approved</li>
            <li> User suspended</li>
            <li> Tracking updated</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardHome;
