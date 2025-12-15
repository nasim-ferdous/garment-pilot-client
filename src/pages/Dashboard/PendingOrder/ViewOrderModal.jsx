import React from "react";

const ViewOrderModal = ({ order, onClose }) => {
  return (
    <dialog className="modal modal-open">
      <title>Order Detail</title>
      <div className="modal-box max-w-xl">
        <h3 className="font-bold text-lg mb-4">Order Details</h3>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Product:</strong> {order.productName}
          </p>
          <p>
            <strong>Buyer:</strong> {order.buyer}
          </p>
          <p>
            <strong>Quantity:</strong> {order.orderQuantity}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Payment:</strong> {order.paymentStatus}
          </p>
          <p>
            <strong>Order Date:</strong> {order.orderedAt}
          </p>

          {order.trackingId && (
            <p>
              <strong>Tracking ID:</strong> {order.trackingId}
            </p>
          )}
        </div>

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-outline btn-sm">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ViewOrderModal;
