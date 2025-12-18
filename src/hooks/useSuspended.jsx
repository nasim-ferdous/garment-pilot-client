import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSuspended = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data = {}, isLoading: suspendedLoading } = useQuery({
    queryKey: ["user-suspension", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/suspend`);
      return res.data;
    },
  });
  console.log(data);

  return {
    isSuspended: data.status === "suspended",
    suspendReason: data.suspendReason,
    suspendFeedback: data.suspendFeedback,
    suspendedLoading,
  };
};

export default useSuspended;
