import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/Cart/CartContextProvider";

function Header() {
  const { productsState } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // TODO: Implement search functionality
  };

  return (
    <>
      <nav className="w-full h-16 p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="w-80 bg-white text-black rounded-lg px-4 py-2 transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:scale-105"
              placeholder="Search..."
            />
            <FaSearch className="absolute top-2 right-3 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-6 ml-auto">
          <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link to="/blog" className="text-2xl font-bold hover:text-gray-200 transition duration-300">
            Blog
          </Link>
          <Link to="/wishlist" className="text-2xl font-bold hover:text-gray-200 transition duration-300">
            Wishlist
          </Link>
          <Link to="/cart" className="text-2xl font-bold flex items-center hover:text-gray-200 transition duration-300">
            <FaShoppingCart className="inline-block mr-2" />
            Cart({productsState.cart.length})
          </Link>
          <Link to="/myaccount" className="text-2xl font-bold hover:text-gray-200 transition duration-300">
            My Account
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
