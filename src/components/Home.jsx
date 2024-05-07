import React, { useproductsState } from 'react'
import SingleProduct from './SingleProduct';
import { useCart } from '../contexts/CartContextProvider';
import Filters from './Filters';

function Home() {
  const {productsState,filterState} = useCart();
  
  const filteredProducts = ()=>{
    let filtered = productsState.products;
    if(filterState.sort){
      filtered = filtered.sort((a,b)=>(
        filterState.sort === "lowToHigh" ? a.price-b.price : b.price-a.price
      ))
    }
    if(!filterState.byStock){
      filtered = filtered.filter((prod)=>(prod.inStock))
    }
    if(filterState.byFastdelivery){
      filtered = filtered.filter((prod)=>(prod.fastDelivery))
    }
    if(filterState.byRatings){
      filtered = filtered.filter((prod)=>(prod.ratings>=filterState.byRatings))
    }
    return filtered;
  }

  return (
    <>
    <div className='w-full h-full flex justify-center'>
      <Filters/>
      <div className='w-full h-full flex flex-wrap justify-center '>
          {filteredProducts().map((prod)=>(
              <SingleProduct key={prod.id} prod={prod}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default Home;