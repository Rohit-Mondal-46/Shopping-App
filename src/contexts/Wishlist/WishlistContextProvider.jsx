import React, { useContext, useReducer } from "react";
import wishlistContext from "./wishlistContext";
import { wishlistReducer } from "../reducers";

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });

  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistContextProvider;

export const useWishlist = () => {
  return useContext(wishlistContext);
};