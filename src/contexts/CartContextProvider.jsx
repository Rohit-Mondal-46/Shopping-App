import React,{useContext, useReducer} from "react";
import cartContext from "./CartContext";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./reducers";
faker.seed(20)
const CartContextProvider = ({children})=>{
    const list = [...Array(20)].map(()=>({
        id: faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.avatar(),
        inStock:[0,3,4,6,7][faker.number.int({min: 0, max: 4})],
        fastDelivery:faker.datatype.boolean(),
        ratings: [1,3,2,5,4][faker.number.int({min: 0, max: 4})],
      }))
      
      const [productsState, productsDispatch] = useReducer(cartReducer,{
        products:list,
        cart:[]
      } )
      const [filterState,filterDispatch] = useReducer(filterReducer,{
        byStock: true,
        byFastdelivery:false,
        sort:"",
        byRatings:0,
        byQuery:""
      })
      return <cartContext.Provider value={{productsState, productsDispatch,filterState,filterDispatch}}>{children}</cartContext.Provider>
}
export default CartContextProvider;
export const useCart = ()=>{
    return useContext(cartContext);
};