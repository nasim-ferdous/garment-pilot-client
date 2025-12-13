import React from "react";

const OrderDetailModal = ({ order, onClose }) => {
  return (
    <dialog open className="modal">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-xl mb-4">Order Details</h3>

        <div className="space-y-2 text-sm">
          <p>
            <b>Product:</b> {order.productName}
          </p>
          <p>
            <b>Quantity:</b> {order.orderQuantity}
          </p>
          <p>
            <b>Status:</b> {order.status}
          </p>
          <p>
            <b>Payment:</b> {order.paymentStatus}
          </p>
        </div>

        {/* Tracking Timeline */}
        <div className="mt-6">
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            <li
              className={`step ${order.status !== "pending" && "step-primary"}`}
            >
              Pending
            </li>
            <li
              className={`step ${
                ["processing", "delivered"].includes(order.status) &&
                "step-primary"
              }`}
            >
              Processing
            </li>

            <li
              className={`step ${
                order.status === "delivered" && "step-primary"
              }`}
            >
              Delivered
            </li>
          </ul>
        </div>

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-outline">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default OrderDetailModal;
