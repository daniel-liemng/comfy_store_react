import React, { useEffect, createContext, useContext, useReducer } from "react";
import reducer from "../reducers/productsReducer.js";
import {} from "../actions";

const initialState = {};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ product: "product" }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Global UseContext
const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
