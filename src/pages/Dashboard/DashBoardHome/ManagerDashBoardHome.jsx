import React from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaTruck,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router";

const ManagerDashBoardHome = () => {
  return (
    <div className="p-4 md:p-8">
      <title>Manager Dashboard</title>
      {/* Page Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Manager Dashboard</h2>
        <p className="text-gray-500 mt-1">
          Monitor orders, tracking, and daily activities
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaClipboardList className="text-3xl text-primary" />
            <div>
              <p className="text-sm text-gray-500">Pending Orders</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaCheckCircle className="text-3xl text-success" />
            <div>
              <p className="text-sm text-gray-500">Approved Orders</p>
              <h3 className="text-2xl font-bold">34</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaTruck className="text-3xl text-info" />
            <div>
              <p className="text-sm text-gray-500">Orders in Delivery</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body flex-row items-center gap-4">
            <FaUserTie className="text-3xl text-warning" />
            <div>
              <p className="text-sm text-gray-500">Assigned Buyers</p>
              <h3 className="text-2xl font-bold">21</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card bg-base-100 shadow-md mb-10">
        <div className="card-body">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>

          <div className="flex flex-wrap gap-4">
            <Link
              to={"/dashboard/manage-products"}
              className="btn btn-primary btn-sm"
            >
              Manage Products
            </Link>
            <Link
              to={"/dashboard/pending-orders"}
              className="btn btn-success btn-sm"
            >
              Pending Orders
            </Link>
            <Link
              to={"/dashboard/approved-orders"}
              className="btn btn-info btn-sm"
            >
              Approved Orders
            </Link>
            <Link
              to={"/dashboard/my-profile"}
              className="btn btn-outline btn-sm"
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li> Order #PRCL-20251213 approved</li>
            <li> Tracking updated: QC Checked</li>
            <li> Order marked as Shipped</li>
            <li> Location updated: Uttara, Dhaka</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashBoardHome;
