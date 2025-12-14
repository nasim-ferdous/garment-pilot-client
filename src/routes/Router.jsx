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
          {
            path: "my-orders",
            element: <MyOrders></MyOrders>,
          },
          {
            path: "manage-products",
            element: <ManageProducts></ManageProducts>,
          },
        ],
      },
    ],
  },
]);
