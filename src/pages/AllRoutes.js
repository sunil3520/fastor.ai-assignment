import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./signup/Signup";
import ProductList from "./productList/ProductList";
import SingleProduct from "./singleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/products",
      element: (
        <PrivateRoute>
          <ProductList />
        </PrivateRoute>
      ),
    },
    {
      path: "/products/:id",
      element: <PrivateRoute>
        <SingleProduct />
      </PrivateRoute>,
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default AllRoutes;
