import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import './index.css'
import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Product from './components/ProductPage.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  { path: "/", 
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element : <Home />},
      {path: "/cart", element : <Cart />},
      {path: "/shop", element : <Shop />},
      {path: "shop/product/:id", element : <Product />},
    ]
   },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </StrictMode>,
)
