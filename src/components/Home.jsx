import React, { useState } from 'react';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import { useCart } from '../contexts/Cart/CartContextProvider';

function Home() {
  const { productsState, filterState } = useCart();
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = () => {
    let filtered = productsState.products;
    if (filterState.sort) {
      filtered = filtered.sort((a, b) =>
        filterState.sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }
    if (!filterState.byStock) {
      filtered = filtered.filter((prod) => prod.inStock);
    }
    if (filterState.byFastdelivery) {
      filtered = filtered.filter((prod) => prod.fastDelivery);
    }
    if (filterState.byRatings) {
      filtered = filtered.filter((prod) => prod.ratings >= filterState.byRatings);
    }
    return filtered;
  };

  return (
    <>
      <div className='w-full h-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4'>
        <button
          className='bg-indigo-600 text-white rounded-lg px-4 py-2 mb-4 transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105'
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div className='w-full h-full flex justify-center'>
        <div className={`transition-all duration-500 ease-in-out transform ${showFilters ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} h-full`}>
            {showFilters && <Filters />}
          </div>
          <div className='w-full h-full flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-lg'>
            {filteredProducts().map((prod) => (
              <SingleProduct key={prod.id} prod={prod} className='bg-white shadow-lg rounded-lg p-4' />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;