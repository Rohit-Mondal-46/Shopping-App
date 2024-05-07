import React from 'react'
import { useCart } from '../contexts/CartContextProvider'
import Ratings from './Ratings';

function SingleProduct({prod}) {
  const {productsState,productsDispatch} = useCart();
  // console.log(productsState.cart);
  return (
    <>
        <div className='flex flex-col h-68 w-64 p-4 m-4  justify-around '>
            <img src={`${prod.image}`} alt="" className='w-full h-32'/>
            <span className='text-xl font-semibold'>{prod.name||"Hello"}</span>
            <span className='text-sm font-light'>Price: <b className='text-xl'>{"₹"+prod.price||"Free"}</b></span>
            <span className='text-sm font-light'>{prod.inStock ? prod.inStock+" available":"Unavailable"} </span>
            <span className='text-sm font-light'>{prod.fastDelivery ?"Fast Delivery Enabled":"No Fast Delivery" ||"Free"}</span>
            <span className='inline'><Ratings ratings={prod.ratings} /></span>
            {
              productsState.cart.includes(prod) ? (
                <button 
            className='bg-red-500 rounded-lg w-auto'
            onClick={()=>{productsDispatch({ type: 'REMOVE_FROM_CART', payload: prod.id })}}
            >
              Remove From Cart
              </button>
              ):(
                <button 
            className='bg-blue-500 rounded-lg w-auto'
            onClick={()=>{productsDispatch({ type: 'ADD_TO_CART', payload: prod })}}
            >
              Add to Cart
              </button>

              )
            }
        </div>
    </>
  )
}

export default SingleProduct