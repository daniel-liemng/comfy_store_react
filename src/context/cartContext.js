import React, { useEffect, createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer.js";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ cart: "carts" }}>
      {children}
    </CartContext.Provider>
  );
};

// Global UseContext
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
