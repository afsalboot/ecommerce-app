import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginPage from './page/LoginPage'
import Home from './page/Home'
import Product from './page/Product'
import ProductDetails from './page/ProductDetails'
import ClothCategory from './page/ClothCategory'
import JewelCategory from './page/JewelCategory'
import ElectronicCategory from './page/ElectronicCategory'

function App() {

  const page = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/products",
      element: <Product/>
    },
    {
      path: "/cloths",
      element: <ClothCategory/>
    },
    {
      path: "/electronics",
      element: <ElectronicCategory/>
    },
    {
      path: "/jewelery",
      element: <JewelCategory/>
    },
    {
      path: "/product_details",
      element: <ProductDetails/>
    }
  ])

  return (
    <>
    <RouterProvider router={page}></RouterProvider>
    </>
  )
}

export default App