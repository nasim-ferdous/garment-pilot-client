import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { FaEdit } from "react-icons/fa";
import UpdateUserModal from "./UpdateUserModal";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure(`/manage-users`);
      return res.data;
    },
  });

  {
    isLoading && <Loading />;
  }
  return (
    <div className="p-4 md:p-8">
      <title>Manage Users</title>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Manage Users</h2>
        <p className="text-gray-500 mt-1">Total Users: {users.length}</p>
      </div>

      {/* Table Card */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead className="bg-base-200 text-base">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>

                    <td>
                      <div className="font-semibold">{user.displayName}</div>
                    </td>

                    <td>{user.email}</td>
                    <td>{user.role}</td>

                    <td>
                      <span
                        className={`badge 
    ${user.status === "approved" && "badge-success"}
    ${user.status === "suspended" && "badge-error"}
    
  `}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        <div className="tooltip" data-tip="Add Tracking">
                          <button
                            onClick={() => setSelectedUser(user)}
                            className="btn btn-primary btn-xs"
                          >
                            <FaEdit></FaEdit>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
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
      {selectedUser && (
        <UpdateUserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageUsers;
