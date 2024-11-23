import React from 'react';
import { useWishlist } from '../contexts/Wishlist/WishlistContextProvider';
import Ratings from './Ratings';
import { AiFillDelete } from "react-icons/ai";

function Wishlist() {
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-3xl font-bold text-white mb-4">Wishlist</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
        {wishlistState.wishlist.length === 0 ? (
          <div className="text-center text-gray-700">Your wishlist is empty</div>
        ) : (
          wishlistState.wishlist.map((prod) => (
            <div key={prod.id} className="flex items-center justify-between p-4 border-b border-gray-200">
              <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-grow ml-4">
                <h2 className="text-lg font-semibold">{prod.name}</h2>
                <p className="text-gray-600">Price: ₹{prod.price}</p>
                <Ratings ratings={prod.ratings} />
              </div>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={() => wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: prod.id })}
              >
                <AiFillDelete size={24} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;