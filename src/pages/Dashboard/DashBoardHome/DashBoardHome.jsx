import React from 'react';
import useRole from '../../../hooks/useRole';
import Loading from '../../../components/Loading/Loading';
import AdminDashBoardHome from './AdminDashBoardHome';
import ManagerDashBoardHome from './ManagerDashBoardHome';
import BuyerDashBoardHome from './BuyerDashBoardHome';

const DashBoardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin") {
    return <AdminDashBoardHome></AdminDashBoardHome>;
  } else if (role === "manager") {
    return <ManagerDashBoardHome></ManagerDashBoardHome>;
  } else {
    return <BuyerDashBoardHome></BuyerDashBoardHome>;
  }
};

export default DashBoardHome;