import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: orders = [] } = useQuery({
    queryKey: ["my-orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-orders?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2>My Orders:{orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th>{order._id}</th>
                <td>{order.productName}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.status}</td>
                <td>{order.paymentStatus}</td>
                <td>
                  <div className="tooltip" data-tip="View Details">
                    <button className="btn btn-primary btn-sm">
                      <BiDetail />
                    </button>
                  </div>
                  <div className="tooltip ml-2" data-tip="Cancel">
                    <button className="btn btn-primary btn-sm">
                      <RiDeleteBin2Fill />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
