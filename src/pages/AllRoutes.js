import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './signup/Signup'
import ProductList from './productList/ProductList'
import SingleProduct from './singleProduct/SingleProduct'

const AllRoutes = () => {

    const appRoutes = createBrowserRouter([
        {
            path:"/",
            element: <Signup/>
        },
        {
            path:"/products",
            element: <ProductList/>
        },
        {
            path:"/products/:id",
            element: <SingleProduct/>
        }
    ])

  return (
    <RouterProvider router={appRoutes}/>
  )
}

export default AllRoutes;