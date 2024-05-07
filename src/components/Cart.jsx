import React,{ useState,useEffect} from 'react'
import { useCart } from '../contexts/CartContextProvider';
import Ratings from './Ratings';
import { AiFillDelete } from "react-icons/ai"
function Cart() {
  const {productsState,productsDispatch} = useCart();
  console.log(productsState);
  const [totalPrice,setTotalPrice] = useState('');
  useEffect(() => {
    setTotalPrice(productsState.cart.reduce((acc,curr)=>(acc + Number(curr.price)),0))
  }, [productsState.cart])
  

  return (
    <>
      <div className='w-full h-full flex flex-wrap flex-col justify-center'>
          <h3 className='text-4xl mb-4 text-center font-bold'>My Cart</h3>
          {(productsState.cart.length === 0) ? <span className='text-2xl text-center'><b>Your cart is Empty!</b></span>:null}
          <div className='w-full h-full flex'>
            <div className='w-3/4 h-full flex flex-wrap justify-center '>
              {productsState.cart.map((prod)=>(
                <div key={prod.id} className='w-5/6 h-28 flex p-2 mt-3 border-2 justify-between '>
                  <span className='h-full w-24'><img className='h-full' src={`${prod.image}`} alt="" /></span>
                  <span className='h-full w-24'>{prod.name}</span>
                  <span className='h-full w-24'>{"₹"+prod.price}</span>
                  <span className='inline'><Ratings ratings={prod.ratings} /></span>
                  <span onClick={()=>productsDispatch({ type: 'REMOVE_FROM_CART', payload: prod.id })}><AiFillDelete className='cursor-pointer'  fontSize={"30px"}></AiFillDelete></span>
                </div>
              ))}
            </div>
            <div className='w-1/4 h-100 bg-slate-400 flex flex-col'>
              <span className='block text-white pl-2 mt-4 mb-3 text-2xl'><b className='text-black'>Total items:</b> {productsState.cart.length}</span>
              <span className='block text-white font-bold pl-2 text-lg'><b className='text-black'>Total Price:</b> {"₹"+totalPrice}</span>
              <button className='w-80 m-auto bg-sky-500 text-white mt-3 text-xl'>Proceed to Checkout</button>
            </div>
          </div>
      </div>

    </>
  )
}

export default Cart