import React, { useState } from "react";
import Ratings from "./Ratings";
import { useCart } from "../contexts/Cart/CartContextProvider";

function Filters() {
  const { filterState, filterDispatch } = useCart();
  console.log(filterState);
  return (
    <>
      <div className="flex flex-col w-72 h-full p-4 m-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg">
        <span className="text-2xl mb-4 font-bold text-center">Filter Products</span>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
                type="checkbox"
                className="mt-1 mr-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                id="1"
                onChange={()=>filterDispatch({
                  type:"SORT_BY_STOCK",
                })}
                checked = {filterState.byStock}
              />
              <label htmlFor="1" className=" text-lg font-normal text-gray-700">
                Includes Out of Stock
              </label>
          </div>

          <div>
            <input
              type="checkbox"
              className="mt-1 mr-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              id="2"
              onChange={()=>filterDispatch({
                type:"SORT_BY_FASTDELIVERY"
              })}
              checked = {filterState.byFastdelivery}
            />
            <label htmlFor="2" className="text-lg font-normal text-gray-700">
            Fast Delivery Only
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="radio"
              id="3"
              className="mt-1 mr-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              onChange={()=>filterDispatch({
                type:"SORT_BY_PRICE",
                payload:"lowToHigh"
              })}
              checked = {filterState.sort==="lowToHigh" ? 1:0}
            />
            <label htmlFor="3" className="text-lg font-normal text-gray-700">
            Price low to high
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="radio"
              id="4"
              className="mt-1 mr-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              onChange={()=>filterDispatch({
                type:"SORT_BY_PRICE",
                payload:"highToLow"
              })}
              checked = {filterState.sort==="highToLow" ? 1:0}
            />
            <label htmlFor="4" className=" text-lg font-normal text-gray-700">
            Price high to low
            </label>
          </div>
              <label  className="inline text-lg font-normal text-gray-700">Ratings:</label>
              <span className="inline">
                <Ratings 
                ratings={filterState.byRatings} 
                onClick={(i)=>filterDispatch({
                  type:"SORT_BY_RATINGS",
                  payload: i+1
                })} 
                style={"cursor-pointer"}/>
              </span>
              <button 
              className="w-60 m-auto bg-sky-500 text-white mt-3 text-xl"
              onClick={()=>filterDispatch({
                type:"CLEAR_ALL_FILTERS"
              })}
              >Clear all filters</button>
        </form>
      </div>
    </>
  );
}

export default Filters;
