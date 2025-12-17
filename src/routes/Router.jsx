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
import AdminRoutes from "./AdminRoutes";
import ManagerRoute from "./ManagerRoute";
import BuyerRoute from "./BuyerRoute";
import DashBoardHome from "../pages/Dashboard/DashBoardHome/DashBoardHome";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

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
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
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
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
        children: [
          {
            index: true,
            element: <DashBoardHome></DashBoardHome>,
          },
          // buyer related api
          {
            path: "my-orders",
            element: (
              <BuyerRoute>
                {" "}
                <MyOrders></MyOrders>
              </BuyerRoute>
            ),
          },
          // manager related apis
          {
            path: "add-product",
            element: (
              <ManagerRoute>
                <AddProduct></AddProduct>
              </ManagerRoute>
            ),
          },
          {
            path: "manage-products",
            element: (
              <ManagerRoute>
                <ManageProducts></ManageProducts>
              </ManagerRoute>
            ),
          },
          {
            path: "pending-orders",
            element: (
              <ManagerRoute>
                <PendingOrder></PendingOrder>
              </ManagerRoute>
            ),
          },
          {
            path: "approved-orders",
            element: (
              <ManagerRoute>
                <ApprovedOrders></ApprovedOrders>
              </ManagerRoute>
            ),
          },
          {
            path: "my-profile",
            element: <MyProfile></MyProfile>,
          },
          // admin related api
          {
            path: "manage-users",
            element: (
              <AdminRoutes>
                <ManageUsers></ManageUsers>
              </AdminRoutes>
            ),
          },
          {
            path: "admin-all-products",
            element: (
              <AdminRoutes>
                <AdminAllProducts></AdminAllProducts>
              </AdminRoutes>
            ),
          },
          {
            path: "admin-all-orders",
            element: (
              <AdminRoutes>
                <AdminAllOrders></AdminAllOrders>
              </AdminRoutes>
            ),
          },
          {
            path: "*",
            element: <NotFound></NotFound>,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
