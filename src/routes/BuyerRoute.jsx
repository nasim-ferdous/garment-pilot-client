import React from "react";
import Loading from "../components/Loading/Loading";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../components/Forbidden/Forbidden";

const BuyerRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading && roleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "buyer") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default BuyerRoute;
