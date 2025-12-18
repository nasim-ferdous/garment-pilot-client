import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Loading from "../../../components/Loading/Loading";
import OrderDetailModal from "./OrderDetailModal";
import Swal from "sweetalert2";
import ViewTrackingModal from "../ApprovedOrders/ViewTrackingModal";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [trackingOrder, setTrackingOrder] = useState(null);
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-orders?email=${user.email}`);
      return res.data;
    },
  });
  const handleCancelOrder = (order) => {
    Swal.fire({
      title: "Cancel Order?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cancel-order/${order._id}`).then((res) => {
          console.log(res.data);

          Swal.fire({
            title: "Canceled!",
            text: "Your Order has been canceled.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-4 md:p-8">
      <title>My Orders</title>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">My Orders</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Track and manage your garment orders
        </p>
      </div>

      {/* Table Card */}
      <div className="card bg-base-100 dark:bg-indigo-300 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra min-w-[900px]">
              {/* head */}
              <thead className="bg-base-200 text-base">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>

                    <td>
                      <button
                        onClick={() => setTrackingOrder(order)}
                        className="btn"
                      >
                        <div className="tooltip" data-tip="track Order">
                          <div className="font-semibold">
                            {order.productName}
                          </div>
                          <div className="text-xs text-gray-500">
                            Tracking Id: {order.trackingId}
                          </div>
                        </div>
                      </button>
                    </td>

                    <td>{order.orderQuantity}</td>

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

                    <td>
                      <span
                        className={`badge badge-sm ${
                          order.paymentStatus === "paid"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>

                    <td className="whitespace-normal">
                      <div className="flex flex-col sm:flex-row justify-center gap-2">
                        <div className="tooltip" data-tip="View Details">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="btn btn-primary btn-xs"
                          >
                            <BiDetail />
                          </button>
                        </div>

                        {order.status === "approved" ? (
                          <div className="tooltip" data-tip="Cancel Order">
                            <button
                              onClick={() => handleCancelOrder(order)}
                              className="btn btn-error btn-xs"
                              disabled={true}
                            >
                              <RiDeleteBin2Fill />
                            </button>
                          </div>
                        ) : (
                          <div className="tooltip" data-tip="Cancel Order">
                            <button
                              onClick={() => handleCancelOrder(order)}
                              className="btn btn-error btn-xs"
                            >
                              <RiDeleteBin2Fill />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {orders.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-gray-500">
                      No orders found
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
      {trackingOrder && (
        <ViewTrackingModal
          order={trackingOrder}
          onClose={() => setTrackingOrder(null)}
        />
      )}
    </div>
  );
};

export default MyOrders;
