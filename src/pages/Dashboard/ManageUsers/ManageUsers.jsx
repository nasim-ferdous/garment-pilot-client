import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { FaEdit } from "react-icons/fa";
import UpdateUserModal from "./UpdateUserModal";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const {
    data: users = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure(`/manage-users?searchText=${searchText}`);
      return res.data;
    },
  });

  {
    isLoading && <Loading />;
  }
  {
    isFetching && !isLoading && (
      <span className="loading loading-spinner loading-sm ml-2"></span>
    );
  }
  return (
    <div className="p-4 md:p-8">
      <title>Manage Users</title>
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Manage All Users</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Total Users: {users.length}
          </p>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              className="grow"
              placeholder="Search by name or email"
              value={searchText}
            />
          </label>
        </div>
      </div>

      {/* Table Card */}
      <div className="card bg-base-100 dark:bg-indigo-300 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra min-w-[900px]">
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

                    <td className="whitespace-normal">
                      <div className="flex justify-center gap-2">
                        <div className="tooltip" data-tip="Update Status">
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
