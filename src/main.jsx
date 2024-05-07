import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import App from "./components/App";
import CartContextProvider from "./contexts/CartContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>

    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}/>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </CartContextProvider>
  </React.StrictMode>
);
