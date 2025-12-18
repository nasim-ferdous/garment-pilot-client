import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { BiDetail } from "react-icons/bi";
import { MdOutlineAddTask } from "react-icons/md";
import AddTrackingModal from "./AddTrackingModal";
import ViewTrackingModal from "./ViewTrackingModal";

const ApprovedOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [trackingOrder, setTrackingOrder] = useState(null);

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["approved-orders", user.email, "approved"],
    queryFn: async () => {
      const res = await axiosSecure(
        `/approved-orders?email=${user.email}&status=approved`
      );
      return res.data;
    },
  });

  {
    isLoading && <Loading />;
  }
  return (
    <div className="p-4 md:p-8">
      <title>Approved Orders</title>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">My Approved Orders</h2>
        <p className="text-gray-500 mt-1">
          Total approved orders: {orders.length}
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
                  <th>Approved date</th>
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

                    <td>{order.approvedAt}</td>

                    <td className="whitespace-normal">
                      <div className="flex flex-col sm:flex-row justify-center gap-2">
                        <div className="tooltip" data-tip="Add Tracking">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="btn btn-primary btn-xs"
                          >
                            <MdOutlineAddTask></MdOutlineAddTask>
                          </button>
                        </div>
                        <div className="tooltip" data-tip="View Tracking">
                          <button
                            onClick={() => setTrackingOrder(order)}
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
                      No Approved Orders Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedOrder && (
        <AddTrackingModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          refetch={refetch}
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

export default ApprovedOrders;
