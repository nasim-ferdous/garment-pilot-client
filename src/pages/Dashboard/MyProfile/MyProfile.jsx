import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FiLogOut } from "react-icons/fi";
import Loading from "../../../components/Loading/Loading";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { logOutUser } = useAuth();

  const { data: user = {}, isLoading } = useQuery({
    queryKey: ["my-profile"],
    queryFn: async () => {
      const res = await axiosSecure.get("/my-profile");
      return res.data;
    },
  });
  const showStatus = user.role === "buyer" || user.role === "manager";

  if (isLoading) return <Loading />;

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto">
      <title>My Profile</title>

      <div className="card bg-base-100 dark:bg-indigo-300 shadow-xl">
        <div className="card-body items-center text-center">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user.photoURL || "https://i.ibb.co/ZxBFKZp/avatar.png"}
                alt={user.displayName}
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold mt-4">
            {user.displayName || "Unknown User"}
          </h2>

          {/* Role */}
          <span className="badge badge-primary badge-outline mt-1">
            {user.role}
          </span>

          {/* Info */}
          <div className="w-full flex flex-col items-center mt-6 space-y-3 text-left">
            <div>
              <span className="font-semibold">Email: {user.email}</span>
            </div>

            <div>
              <span className="font-semibold">Joined: {user.createdAt}</span>
            </div>

            {/* Status Section */}
            {showStatus && (
              <div className="mt-3">
                <span className="font-semibold">Status: </span>
                <span
                  className={`ml-1 ${
                    user.status === "suspended"
                      ? "text-error font-bold"
                      : "text-success"
                  }`}
                >
                  {user.status || "N/A"}
                </span>

                {/* Suspend reason if suspended */}
                {user.status === "suspended" && user.suspendReason && (
                  <div className="mt-1 text-sm text-gray-500">
                    Reason: {user.suspendReason}
                  </div>
                )}
                {user.status === "suspended" && user.suspendFeedback && (
                  <div className="mt-1 text-sm text-gray-500">
                    Feedback: {user.suspendFeedback}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            onClick={logOutUser}
            className="btn btn-error btn-outline mt-6 w-full flex items-center justify-center"
          >
            <FiLogOut className="mr-2 text-lg" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
