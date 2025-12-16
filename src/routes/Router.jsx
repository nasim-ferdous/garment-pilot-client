import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/auth/Register/Register";
import Login from "../pages/auth/Login/Login";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import PrivetRoute from "./PrivetRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AllProducts from "../pages/AllProducts/AllProducts";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import PendingOrder from "../pages/Dashboard/PendingOrder/PendingOrder";
import ApprovedOrders from "../pages/Dashboard/ApprovedOrders/ApprovedOrders";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminAllProducts from "../pages/Dashboard/AdminAllProducts/AdminAllProducts";
import AdminAllOrders from "../pages/Dashboard/AdminAllOrders/AdminAllOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "product/:id",
        element: (
          <PrivetRoute>
            <ProductDetail></ProductDetail>
          </PrivetRoute>
        ),
      },
      {
        path: "payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "add-product",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
        children: [
          // buyer related api
          {
            path: "my-orders",
            element: <MyOrders></MyOrders>,
          },
          // manager related apis
          {
            path: "manage-products",
            element: <ManageProducts></ManageProducts>,
          },
          {
            path: "pending-orders",
            element: <PendingOrder></PendingOrder>,
          },
          {
            path: "approved-orders",
            element: <ApprovedOrders></ApprovedOrders>,
          },
          {
            path: "my-profile",
            element: <MyProfile></MyProfile>,
          },
          // admin related api
          {
            path: "manage-users",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path: "admin-all-products",
            element: <AdminAllProducts></AdminAllProducts>,
          },
          {
            path: "admin-all-orders",
            element: <AdminAllOrders></AdminAllOrders>,
          },
        ],
      },
    ],
  },
]);
