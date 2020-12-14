import React, { useEffect, createContext, useContext, useReducer } from "react";

import reducer from "../reducers/cartReducer.js";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, product, color, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { id, product, color, amount } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Global UseContext
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
