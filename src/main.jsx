import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import App from "./components/App";
import CartContextProvider from "./contexts/Cart/CartContextProvider";
import Blog from "./components/Blog";
import Wishlist from './components/Wishlist'
import WishlistContextProvider from "./contexts/Wishlist/WishlistContextProvider";
import MyAccount from "./components/MyAccount";
import Orders from "./components/Orders";
import UserContextProvider from "./contexts/User/UserContextProvider";
import OrderContextProvider from "./contexts/Orders/OrderContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
    <WishlistContextProvider>
    <UserContextProvider>
    <OrderContextProvider>

    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}/>
          <Route path="cart" element={<Cart />} />
          <Route path="blog" element={<Blog />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="myorder" element={<Orders />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    </OrderContextProvider>

    </UserContextProvider>
    </WishlistContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
