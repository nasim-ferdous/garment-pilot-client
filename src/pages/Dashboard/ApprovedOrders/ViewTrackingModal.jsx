import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { MdLocationOn } from "react-icons/md";

const ViewTrackingModal = ({ order, onClose }) => {
  const axiosSecure = useAxiosSecure();

  const { data: tracking = {}, isLoading } = useQuery({
    queryKey: ["tracking", order._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/track-order/${order._id}`);
      return res.data;
    },
    // enabled: !!order,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <title>track order</title>
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-xl mb-2">
          Tracking ID: {order.trackingId}
        </h3>

        {!tracking ? (
          <p className="text-gray-500 mt-4">
            No tracking information available.
          </p>
        ) : (
          <div className="mt-6">
            {/* Timeline */}
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start text-sm text-gray-500">
                  {new Date(tracking.date).toLocaleString()}
                </div>

                <div className="timeline-end mb-6">
                  <div className="text-lg font-semibold">{tracking.status}</div>

                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MdLocationOn />
                    <span>{tracking.location}</span>
                  </div>

                  {tracking.note && (
                    <div className="text-sm text-gray-400 mt-1">
                      {tracking.note}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-outline">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ViewTrackingModal;
