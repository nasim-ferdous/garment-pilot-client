import React from "react";
import { useForm, useWatch } from "react-hook-form";

const BookingModal = ({ product, user, onClose, onSubmitBooking }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const quantity = useWatch({ control, name: "orderQuantity" });

  const totalPrice =
    quantity && product?.price ? Number(quantity) * Number(product.price) : 0;

  const onSubmit = (data) => {
    const bookingInfo = {
      ...data,
      productId: product._id,
      totalPrice,
      paymentOption: product.paymentOptions,
    };

    onSubmitBooking(bookingInfo);
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-2xl mb-4">Book Product</h3>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email}
              readOnly
              className="input w-full"
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="label">Product Name</label>
            <input
              type="text"
              {...register("productName")}
              defaultValue={product?.name}
              readOnly
              className="input w-full"
            />
          </div>

          {/* Price */}
          <div>
            <label className="label">Price (per unit)</label>
            <input
              type="text"
              {...register("price")}
              defaultValue={`${product?.price} BDT`}
              readOnly
              className="input w-full"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="label">Order Quantity</label>
            <input
              type="text"
              {...register("orderQuantity", {
                required: "Quantity is required",
                min: {
                  value: product.minimumOrderQuantity,
                  message: `Minimum order is ${product.minimumOrderQuantity}`,
                },
                max: {
                  value: product.quantity,
                  message: `Cannot exceed available quantity (${product.quantity})`,
                },
              })}
              className="input w-full"
              placeholder="Enter quantity"
            />
            {errors.orderQuantity && (
              <p className="text-red-600 text-sm">
                {errors.orderQuantity.message}
              </p>
            )}
          </div>

          {/* Total price */}
          <div>
            <label className="label">Total Price</label>
            <input
              type="text"
              value={`${totalPrice} BDT`}
              readOnly
              className="input w-full font-bold"
            />
          </div>

          {/* Names */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="label">First Name</label>
              <input
                {...register("firstName", { required: true })}
                className="input w-full"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="label">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                className="input w-full"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">Required</p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="label">Contact Number</label>
            <input
              type="number"
              {...register("phone", { required: true })}
              className="input w-full"
              placeholder="Phone number"
            />
            {errors.phone && <p className="text-red-600 text-sm">Required</p>}
          </div>

          {/* Address */}
          <div>
            <label className="label">Delivery Address</label>
            <textarea
              {...register("address", { required: true })}
              className="textarea w-full"
            />
            {errors.address && <p className="text-red-600 text-sm">Required</p>}
          </div>

          {/* Notes */}
          <div>
            <label className="label">Additional Notes</label>
            <textarea
              {...register("notes")}
              className="textarea w-full"
              placeholder="Any instructions..."
            />
          </div>

          {/* SUBMIT */}
          <button className="btn btn-primary w-full mt-4">
            Confirm Booking
          </button>
        </form>

        {/* CLOSE BTN */}
        <div className="modal-action">
          <button onClick={onClose} className="btn">
            Cancel Order
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default BookingModal;
