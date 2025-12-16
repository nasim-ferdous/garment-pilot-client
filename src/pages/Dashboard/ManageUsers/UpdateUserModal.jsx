import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateUserModal = ({ user, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [status, setStatus] = useState(user.status || "approved");
  const [reason, setReason] = useState("");

  const handleUpdate = async () => {
    try {
      await axiosSecure.patch(`/users/${user._id}/status`, {
        status,
        suspendReason: status === "suspended" ? reason : "",
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      refetch();
      onClose();
    } catch (err) {
      console.log(err);

      Swal.fire("Error", "Failed to update user", "error");
    }
  };
  return (
    <dialog open className="modal modal-middle">
      <title>Update user status</title>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Update User Status</h3>
        <fieldset className="fieldset">
          {/* Status */}
          <label className="label">Status</label>
          <select
            className="select select-bordered w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="approved">Approved</option>
            <option value="suspended">Suspended</option>
          </select>

          {/* Suspend reason */}
          {status === "suspended" && (
            <>
              <label className="label mt-3">Suspend Reason</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Why is this user suspended?"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </>
          )}

          {/* Actions */}
          <div className="modal-action">
            <button className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </fieldset>
      </div>
    </dialog>
  );
};

export default UpdateUserModal;
