import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BiDetail } from "react-icons/bi";
import OrderDetailModal from "../MyOrders/OrderDetailModal";
import Loading from "../../../components/Loading/Loading";

const AdminAllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchText, setSearchText] = useState("");

  const {
    data: orders = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["admin-all-orders", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-orders?searchText=${searchText}`);
      return res.data;
    },
  });
  {
    isLoading && <Loading />;
  }
  {
    isFetching && !isLoading && (
      <span className="loading loading-spinner loading-sm ml-2"></span>
    );
  }
  return (
    <div className="p-4 md:p-8">
      <title>All Orders</title>
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Manage All Orders</h2>
          <p className="text-gray-500 mt-1">Total Orders: {orders.length}</p>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              className="grow"
              placeholder="Search by name or category"
              value={searchText}
            />
          </label>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead className="bg-base-200 text-base">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>User</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>

                    <td>
                      <div>
                        <div className="font-semibold">{order.productName}</div>
                      </div>
                    </td>

                    <td>${order.buyer}</td>

                    <td>
                      <span className="badge badge-info badge-sm">
                        {order.orderQuantity}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge 
    ${order.status === "pending" && "badge-warning"}
    ${order.status === "rejected" && "badge-error"}
    ${order.status === "approved" && "badge-success"}
  `}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        <div className="tooltip" data-tip="View detail">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="btn btn-primary btn-xs"
                          >
                            <BiDetail />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

                {orders.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default AdminAllOrders;
