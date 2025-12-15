import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { MdLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const ViewTrackingModal = ({ order, onClose }) => {
  const axiosSecure = useAxiosSecure();

  const { data: tracking = [], isLoading } = useQuery({
    queryKey: ["tracking", order._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/track-order/${order._id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  // Sort tracking by date (oldest → newest)
  const sortedTracking = [...tracking].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const latestIndex = sortedTracking.length - 1;
  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-3xl p-0">
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h3 className="text-xl font-bold">Order Tracking</h3>
          <p className="text-sm text-gray-500 mt-1">
            Tracking ID:{" "}
            <span className="font-semibold text-primary">
              {order.trackingId}
            </span>
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
          {sortedTracking.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No tracking updates available.
            </div>
          ) : (
            <ul className="relative border-l-2 border-primary pl-6 space-y-8">
              {sortedTracking.map((step, index) => {
                const isLatest = index === latestIndex;

                return (
                  <li key={step._id} className="relative">
                    {/* Timeline Dot */}
                    <span
                      className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full
                        ${
                          isLatest
                            ? "bg-primary ring-4 ring-primary/30"
                            : "bg-base-300"
                        }
                      `}
                    ></span>

                    {/* Content */}
                    <div className="bg-base-100 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`badge badge-sm ${
                            isLatest ? "badge-primary" : "badge-outline"
                          }`}
                        >
                          {step.status}
                        </span>

                        {isLatest && (
                          <span className="text-xs text-primary font-medium">
                            Latest
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <FaClock className="text-xs" />
                        {new Date(step.date).toLocaleString()}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                        <MdLocationOn className="text-primary" />
                        {step.location}
                      </div>

                      {step.note && (
                        <div className="mt-3 text-sm bg-base-200 p-3 rounded-md text-gray-600">
                          {step.note}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="modal-action px-6 py-4 border-t">
          <button onClick={onClose} className="btn btn-outline btn-sm">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ViewTrackingModal;
