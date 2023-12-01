import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import Category from "./Components/Category/Category";
import UserContextProvider from "./Components/Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Components/Context/CartContext";

import  { Toaster } from 'react-hot-toast';
import Address from "./Components/Adress/Address";
import SubCategories from "./Components/SubCategory/SubCategory";
import CategoryContextProvider from "./Components/Context/CategoryContext";
import AllOrders from "./Components/AllOrders/AllOrders";
import Wishlist from "./Components/Wishlist/Wishlist";
import WishlistContextProvider, { WishlistContext } from "./Components/Wishlist/WishlistContext";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index :"home", element: <ProtectedRoute><Home /></ProtectedRoute>  },
      { path :"home", element: <ProtectedRoute><Home /></ProtectedRoute>  },
      { path: "products", element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: "login", element: <Login/> },
      { path: "register", element:<Register /> },
      
      { path: "cart", element:<ProtectedRoute><Cart /> </ProtectedRoute> },
      { path: "wishlist", element:<ProtectedRoute><Wishlist /> </ProtectedRoute> },

      
      { path: "Address", element:<ProtectedRoute><Address /> </ProtectedRoute> },
      { path: "allOrders", element:<ProtectedRoute><AllOrders /> </ProtectedRoute> },
      { path: "category", element:<ProtectedRoute><Category /></ProtectedRoute>  },
      { path: "subcategories/:id", element:<ProtectedRoute><SubCategories /></ProtectedRoute>  },
      { path: "ProductDetails/:id", element:<ProtectedRoute><ProductDetails/></ProtectedRoute>  },
      { path: "*", element:<NotFound />},
    ],
  },
]);

function App() {
  return (
    <>
    <CategoryContextProvider>
    <UserContextProvider>
      <WishlistContextProvider>

      <CartContextProvider>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster/>
      </CartContextProvider>
      </WishlistContextProvider>
      </UserContextProvider>
      </CategoryContextProvider>
    </>
  );
}

export default App;
