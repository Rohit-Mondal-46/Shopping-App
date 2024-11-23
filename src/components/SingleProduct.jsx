import React, { useState } from 'react';
import Ratings from './Ratings';
import { useCart } from '../contexts/Cart/CartContextProvider';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../contexts/Wishlist/WishlistContextProvider';

function SingleProduct({ prod }) {
  const { productsState, productsDispatch } = useCart();
  const {wishlistState, wishlistDispatch} = useWishlist();
  const isWishlisted = wishlistState.wishlist.some(item => item.id === prod.id);

  function handleWishlistClick(){
    if(isWishlisted){
      wishlistDispatch({type:'REMOVE_FROM_WISHLIST',payload:prod.id})
    }
    else{
      wishlistDispatch({type:'ADD_TO_WISHLIST',payload:prod});
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 transform transition duration-500 hover:scale-105 hover:shadow-xl relative flex flex-col justify-between">
      <div>
        <img src={`${prod.image}`} alt={prod.name} className='w-full h-32 object-cover rounded-t-lg'/>
        <div className="flex justify-between items-center mt-2">
          <h2 className='text-xl font-semibold'>{prod.name || "Product Name"}</h2>
          <button onClick={()=>handleWishlistClick()} className="text-white">
            <FaHeart size={24} className={isWishlisted ? 'text-red-500' : 'text-gray-300'} />
          </button>
        </div>
        <div className="mt-2">
          <p className='text-sm font-light'>Price: <b className='text-xl'>{prod.price || "Free"}</b></p>
          <p className='text-sm font-light'>{prod.inStock ? `${prod.inStock} available` : "Unavailable"}</p>
          <p className='text-sm font-light'>{prod.fastDelivery ? "Fast Delivery Enabled" : "No Fast Delivery"}</p>
          <div className='inline'><Ratings ratings={prod.ratings} /></div>
        </div>
      </div>
      <div className="mt-4">
        {
          productsState.cart.includes(prod) ? (
            <button
              className='bg-red-500 text-white rounded-lg w-full mt-2 px-4 py-2 transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105'
              onClick={() => { productsDispatch({ type: 'REMOVE_FROM_CART', payload: prod.id }) }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className='bg-green-500 text-white rounded-lg w-full mt-2 px-4 py-2 transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105'
              onClick={() => { productsDispatch({ type: 'ADD_TO_CART', payload: prod }) }}
            >
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
}

export default SingleProduct;