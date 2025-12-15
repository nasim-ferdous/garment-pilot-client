import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddTrackingModal.css";
import Swal from "sweetalert2";

const statuses = [
  "Cutting Completed",
  "Sewing Started",
  "Finishing",
  "QC Checked",
  "Packed",
  "Shipped",
  "Out for Delivery",
];

const AddTrackingModal = ({ order, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      orderId: order._id,
      trackingId: order.trackingId,
      ...data,
    };

    try {
      const res = await axiosSecure.post("/add-tracking", payload);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Order tracking updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        onClose();
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: message,
      });
    }
  };
  return (
    <dialog className="modal modal-open">
      <title>Add tracking</title>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Add Tracking Update</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <fieldset className="fieldset">
            {/* Status */}
            <label className="label">Status</label>
            <select
              {...register("status", { required: true })}
              className="select w-full"
            >
              <option value="">Select Status</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Location */}
            <label className="label">Location</label>
            <input
              {...register("location", { required: true })}
              type="text"
              className="input w-full"
              placeholder="Location"
            />

            {/* Note */}
            <label className="label">Note</label>
            <textarea
              {...register("note")}
              className="textarea textarea-bordered w-full"
              placeholder="Optional note"
            />

            {/* Date */}
            <label className="label">Date</label>
            <Controller
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  placeholderText="Select event date"
                  dateFormat="dd/MM/yyyy"
                  className="input w-full bg-white rounded-full"
                />
              )}
            />

            <div className="modal-action">
              <button type="submit" className="btn btn-primary btn-sm">
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost btn-sm"
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};

export default AddTrackingModal;
