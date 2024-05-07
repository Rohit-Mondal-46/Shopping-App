import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";
function Header() {
  const {productsState} = useCart();

  return (
    <>
      <nav className="w-full h-12 p-2 bg-slate-700 text-white flex flex-wrap justify-between">
        <Link to="/" className="text-xl font-medium">
          Home
        </Link>
        <Link to="/cart" className="text-xl font-medium">
         <FaShoppingCart className="inline-block mr-1"></FaShoppingCart>
          ({productsState.cart.length}) Go to Cart
        </Link>
      </nav>
    </>
  );
}

export default Header;
