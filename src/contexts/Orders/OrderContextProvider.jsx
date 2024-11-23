import React, { useContext, useReducer } from "react";
import orderContext from "./orderContext";
import { orderReducer } from "../reducers";

const OrderContextProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    orders: [],
  });

  return (
    <orderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </orderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrder = () => {
  return useContext(orderContext);
};