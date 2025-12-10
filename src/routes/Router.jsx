import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/auth/Register/Register";
import Login from "../pages/auth/Login/Login";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import PrivetRoute from "./PrivetRoute";
import AddProduct from "../pages/AddProduct/AddProduct";

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
        path: "product-detail",
        element: (
          <PrivetRoute>
            <ProductDetail></ProductDetail>
          </PrivetRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
