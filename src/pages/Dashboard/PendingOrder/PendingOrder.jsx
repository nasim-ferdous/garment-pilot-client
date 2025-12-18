import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { MdOutlineDoneAll, MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import { BiDetail } from "react-icons/bi";
import ViewOrderModal from "./ViewOrderModal";
import useSuspended from "../../../hooks/useSuspended";

const PendingOrder = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { isSuspended, suspendedLoading } = useSuspended();

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pending-orders", user.email, "pending"],
    queryFn: async () => {
      const res = await axiosSecure(
        `/pending-orders?email=${user.email}&status=pending`
      );
      return res.data;
    },
  });
  const handleApproveOrder = (order) => {
    Swal.fire({
      title: "Approve this order?",
      text: "This order will be marked as Approved",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/approve-order/${order._id}`).then((res) => {
          if (res.data.modifiedCount === 1) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your order status has been updated to approved",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  const handleRejectOrder = (order) => {
    Swal.fire({
      title: "Reject this order?",
      text: "This order will be marked as Rejected",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/reject-order/${order._id}`).then((res) => {
          if (res.data.modifiedCount === 1) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your order status has been updated to rejected",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  const handleSuspend = () => {
    Swal.fire({
      title: "Suspended",
      text: "You are suspended by admin. check your profile",
      icon: "question",
    });
  };
  {
    if (suspendedLoading && isLoading) return <Loading />;
  }
  return (
    <div className="p-4 md:p-8">
      <title>Pending Orders</title>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">My Pending Orders</h2>
        <p className="text-gray-500 mt-1">
          Total pending orders: {orders.length}
        </p>
      </div>

      {/* Table Card */}
      <div className="card bg-base-100 dark:bg-indigo-300 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra min-w-[900px]">
              {/* head */}
              <thead className="bg-base-200 text-base">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Buyer</th>
                  <th>Quantity</th>
                  <th>Order date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>

                    <td>
                      <div className="font-semibold">{order.productName}</div>
                    </td>

                    <td>{order.buyer}</td>
                    <td>{order.orderQuantity}</td>

                    <td>{order.orderedAt}</td>

                    <td className="whitespace-normal">
                      <div className="flex flex-col sm:flex-row justify-center gap-2">
                        {isSuspended ? (
                          <div className="tooltip" data-tip="Approve Order">
                            <button
                              onClick={handleSuspend}
                              className="btn btn-primary btn-xs"
                            >
                              <MdOutlineDoneAll></MdOutlineDoneAll>
                            </button>
                          </div>
                        ) : (
                          <div className="tooltip" data-tip="Approve Order">
                            <button
                              onClick={() => handleApproveOrder(order)}
                              className="btn btn-primary btn-xs"
                            >
                              <MdOutlineDoneAll></MdOutlineDoneAll>
                            </button>
                          </div>
                        )}
                        {isSuspended ? (
                          <div className="tooltip" data-tip="Reject Order">
                            <button
                              onClick={handleSuspend}
                              className="btn btn-error btn-xs"
                            >
                              <MdCancel></MdCancel>
                            </button>
                          </div>
                        ) : (
                          <div className="tooltip" data-tip="Reject Order">
                            <button
                              onClick={() => handleRejectOrder(order)}
                              className="btn btn-error btn-xs"
                            >
                              <MdCancel></MdCancel>
                            </button>
                          </div>
                        )}

                        <div className="tooltip" data-tip="View Order">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="btn btn-info btn-xs"
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
                    <td colSpan="6" className="text-center py-8 text-gray-500">
                      No Pending Orders Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedOrder && (
        <ViewOrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default PendingOrder;
